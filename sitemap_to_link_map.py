#!/usr/bin/env python3
"""Fetch Analog sitemap pages with curl_cffi and checkpoint every outbound link.

Example:
    python sitemap_to_link_map.py \
      analog-evaluation-board-sitemap.xml analog-products-sitemap.xml

The output is JSON Lines. Every successful source page is written immediately,
so rerunning the command resumes from that checkpoint.
"""

import random
import argparse
import json
import logging
import os
import random
import re
import shutil
import subprocess
import tempfile
import threading
import time
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit

from curl_cffi import requests as cffi_requests


LOG = logging.getLogger(__name__)
DENIAL_TEXT = re.compile(
    r"\bAccess Denied\b|You don't have permission to access|errors\.edgesuite\.net",
    re.IGNORECASE,
)


class LinkParser(HTMLParser):
    """Small dependency-free parser for anchors and their visible text."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self._anchor = None

    def handle_starttag(self, tag, attrs):
        if tag.lower() != "a" or self._anchor is not None:
            return
        attributes = dict(attrs)
        href = attributes.get("href")
        if href:
            self._anchor = {
                "href": href,
                "text": [],
                "title": attributes.get("title") or None,
                "rel": attributes.get("rel") or None,
            }

    def handle_data(self, data):
        if self._anchor is not None:
            self._anchor["text"].append(data)

    def handle_endtag(self, tag):
        if tag.lower() != "a" or self._anchor is None:
            return
        self.links.append(self._anchor)
        self._anchor = None


def sitemap_urls(sitemap: Path) -> list[str]:
    root = ET.parse(sitemap).getroot()
    return [elem.text.strip() for elem in root.iter() if elem.tag.endswith("loc") and elem.text]


def normalized_url(href: str, base: str) -> str | None:
    try:
        joined = urljoin(base, href)
        parsed = urlsplit(joined)
        if parsed.scheme not in {"http", "https"}:
            return None
        # Fragments identify a location within a document, not a distinct target.
        return urlunsplit((parsed.scheme, parsed.netloc, parsed.path, parsed.query, ""))
    except ValueError:
        return None


def extract_links(html: str, source: str) -> list[dict]:
    parser = LinkParser()
    parser.feed(html)
    parser.close()
    seen, output = set(), []
    for link in parser.links:
        target = normalized_url(link["href"], source)
        if not target or target in seen:
            continue
        seen.add(target)
        output.append(
            {
                "url": target,
                "text": " ".join("".join(link["text"]).split()),
                "title": link["title"],
                "rel": link["rel"],
            }
        )
    return output


def denied(response) -> bool:
    return response.status_code in {401, 403, 429} or bool(DENIAL_TEXT.search(response.text[:10000]))


ORIGIN = "https://www.analog.com/"


class AnalogSession:
    """One long-lived Firefox-fingerprint session for one crawl worker."""

    def __init__(self, timeout: int, verbose: bool = False):
        self.timeout = timeout
        self.verbose = verbose
        self.session = None
        self.new_session()

    def _trace(self, message: str):
        if self.verbose:
            LOG.info(message)

    def close(self):
        if self.session is not None:
            self.session.close()
            self.session = None

    def new_session(self):
        self.close()
        self.session = cffi_requests.Session(
            http_version='v3',
            impersonate='firefox',
            akamai="1:65536;2:0;4:6291456;6:262144|15663105|0|m,a,s,p",
            verify=False,
            extra_fp={
                "tls_signature_algorithms": [
                    "ecdsa_secp256r1_sha256",
                    "rsa_pss_rsae_sha256",
                    "rsa_pkcs1_sha256",
                    "ecdsa_secp384r1_sha384",
                    "rsa_pss_rsae_sha384",
                    "rsa_pkcs1_sha384",
                    "rsa_pss_rsae_sha512",
                    "rsa_pkcs1_sha512"
                ],
                "tls_grease": True,
                "tls_permute_extensions": True
            }
        )
        # The first origin fetch commonly returns 403 but gives the session fresh
        # Akamai cookies. Repeating it announces those cookies back to Analog.
        first = self.session.get(ORIGIN, timeout=self.timeout, allow_redirects=True)
        self._trace(f"origin initial: HTTP {first.status_code}; cookies={len(self.session.cookies)}")
        second = self.session.get(ORIGIN, timeout=self.timeout, allow_redirects=True)
        self._trace(f"origin re-announce: HTTP {second.status_code}; cookies={len(self.session.cookies)}")

    def fetch(self, source: str, attempts: int) -> dict:
        last = None
        for attempt in range(1, attempts + 1):
            response = self.session.get(source, timeout=self.timeout, allow_redirects=True)
            last = response
            self._trace(f"target attempt {attempt}: HTTP {response.status_code}; {source}")
            if denied(response):
                # Re-announce the current cookie jar and retry the source page.
                origin = self.session.get(ORIGIN, timeout=self.timeout, allow_redirects=True)
                self._trace(f"target denied; origin re-announce: HTTP {origin.status_code}; cookies={len(self.session.cookies)}")
                response = self.session.get(source, timeout=self.timeout, allow_redirects=True)
                last = response
                self._trace(f"target retry {attempt}: HTTP {response.status_code}; {source}")
            if not denied(response) and 200 <= response.status_code < 400:
                return {
                    "source": source,
                    "status": response.status_code,
                    "finalUrl": str(response.url),
                    "links": extract_links(response.text, source),
                }
            # Persistent denial: renew this worker's session, bootstrap, retry.
            if attempt < attempts:
                self.new_session()
                time.sleep(random.random())

        return {
            "source": source,
            "status": last.status_code if last is not None else None,
            "finalUrl": str(last.url) if last is not None else None,
            "blocked": denied(last) if last is not None else False,
            "error": "Akamai denial or unsuccessful response after retries",
        }


def chromium_script() -> str:
    """Return a Node/Puppeteer crawler used by --browser."""
    return r'''const fs=require('fs');
const puppeteer=require('puppeteer-core');
const [input,output,failures,workersText]=process.argv.slice(2);
const workers=Number(workersText);
const urls=JSON.parse(fs.readFileSync(input,'utf8'));
const existing=new Set();
if(fs.existsSync(output)) for(const line of fs.readFileSync(output,'utf8').split(/\r?\n/)) try {const x=JSON.parse(line);if(x.source&&x.links)existing.add(x.source)} catch {}
const todo=urls.filter(u=>!existing.has(u));
const denied=(s,u,t)=>s===401||s===403||s===429||/errors\.edgesuite\.net/i.test(u||'')||/\bAccess Denied\b|You don't have permission to access/i.test(t||'');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const browser=await puppeteer.launch({headless:false,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const out=fs.createWriteStream(output,{flags:'a'}),bad=fs.createWriteStream(failures,{flags:'a'});let cursor=0,done=0;
 async function warm(page){await page.goto('https://www.analog.com/',{waitUntil:'domcontentloaded',timeout:60000}).catch(()=>null);await sleep(250);await page.reload({waitUntil:'domcontentloaded',timeout:60000}).catch(()=>null)}
 async function work(id){const page=await browser.newPage();await warm(page);for(;;){const i=cursor++;if(i>=todo.length)break;const source=todo[i];try{let r=await page.goto(source,{waitUntil:'domcontentloaded',timeout:60000}),s=r?.status()??null,u=page.url(),t=await page.$eval('body',e=>e.innerText.slice(0,3000)).catch(()=> '');if(denied(s,u,t)){await warm(page);r=await page.goto(source,{waitUntil:'domcontentloaded',timeout:60000});s=r?.status()??null;u=page.url();t=await page.$eval('body',e=>e.innerText.slice(0,3000)).catch(()=> '')}if(denied(s,u,t)){bad.write(JSON.stringify({source,status:s,finalUrl:u,blocked:true,error:'Akamai denial after browser warm-up'})+'\n');continue}const links=await page.evaluate(()=>{const seen=new Set(),o=[];for(const a of document.querySelectorAll('a[href]')){let u;try{u=new URL(a.href,location.href);u.hash=''}catch{continue}if(seen.has(u.href))continue;seen.add(u.href);o.push({url:u.href,text:a.innerText.trim().replace(/\s+/g,' '),title:a.title||null,rel:a.rel||null})}return o});out.write(JSON.stringify({source,status:s,finalUrl:u,links})+'\n');done++;if(done%25===0)console.error(`browser ${done}/${todo.length}`)}catch(e){bad.write(JSON.stringify({source,error:String(e)})+'\n')}}await page.close()}
 await Promise.all(Array.from({length:workers},(_,i)=>work(i+1)));out.end();bad.end();await Promise.all([new Promise(r=>out.on('finish',r)),new Promise(r=>bad.on('finish',r))]);await browser.close()
})().catch(e=>{console.error(e);process.exit(1)});
'''


def crawl_with_browser(urls: list[str], output: Path, failures: Path, workers: int) -> None:
    """Crawl with a full headless Chromium controlled by local Puppeteer."""
    LOG.info("Using browser")
    cdp_dir = Path(__file__).with_name("analog-cdp")
    node = shutil.which("node")
    if not node or not (cdp_dir / "node_modules" / "puppeteer-core").exists():
        raise RuntimeError("--browser requires node and analog-cdp/node_modules/puppeteer-core")
    with tempfile.TemporaryDirectory(prefix="analog-link-map-") as temporary:
        temporary = Path(temporary)
        source_file = temporary / "urls.json"
        script_file = temporary / "crawl.js"
        source_file.write_text(json.dumps(urls))
        script_file.write_text(chromium_script())
        environment = os.environ | {"NODE_PATH": str(cdp_dir / "node_modules")}
        LOG.info("Running node subprocess")
        subprocess.run(
            [node, str(script_file), str(source_file), str(output), str(failures), str(workers)],
            check=True,
            cwd=cdp_dir,
            env=environment,
        )


def completed_sources(output: Path) -> set[str]:
    if not output.exists():
        return set()
    sources = set()
    for line in output.read_text().splitlines():
        try:
            record = json.loads(line)
            if record.get("source") and "links" in record:
                sources.add(record["source"])
        except json.JSONDecodeError:
            LOG.warning("Ignoring malformed checkpoint line")
    return sources


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "sitemaps",
        nargs="*",
        type=Path,
        default=[Path("analog-evaluation-board-sitemap.xml"), Path("analog-products-sitemap.xml")],
    )
    parser.add_argument("--output", type=Path, default=Path("analog-all-links-by-page.jsonl"))
    parser.add_argument("--failures", type=Path, default=Path("analog-all-links-blocked.jsonl"))
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--attempts", type=int, default=3)
    parser.add_argument("--verbose", action="store_true", help="Trace origin bootstrap and every target request")
    parser.add_argument("--browser", action="store_true", help="Use full Chromium through Puppeteer instead of curl_cffi")
    parser.add_argument("--timeout", type=int, default=60)
    args = parser.parse_args()

    urls = list(dict.fromkeys(url for sitemap in args.sitemaps for url in sitemap_urls(sitemap)))
    completed = completed_sources(args.output)
    todo = [url for url in urls if url not in completed]
    LOG.info("%d sitemap URLs; %d checkpointed; %d remaining", len(urls), len(completed), len(todo))

    args.output.parent.mkdir(parents=True, exist_ok=True)
    if args.browser:
        crawl_with_browser(todo, args.output, args.failures, args.workers)
        return

    write_lock = threading.Lock()
    with args.output.open("a", encoding="utf-8") as good, args.failures.open("a", encoding="utf-8") as bad:
        # Each worker owns a long-lived session. Split the URLs into worker queues
        # so a session's Akamai cookie jar is reused across many source pages.
        queues = [todo[index::args.workers] for index in range(args.workers)]

        def crawl_queue(queue: list[str]):
            session = AnalogSession(args.timeout, verbose=args.verbose)
            try:
                return [session.fetch(url, args.attempts) for url in queue]
            finally:
                session.close()

        with ThreadPoolExecutor(max_workers=args.workers) as executor:
            futures = [executor.submit(crawl_queue, queue) for queue in queues if queue]
            number = 0
            for future in as_completed(futures):
                for record in future.result():
                    number += 1
                    destination = good if "links" in record else bad
                    with write_lock:
                        destination.write(json.dumps(record, ensure_ascii=False) + "\n")
                        destination.flush()
                    if number % 25 == 0 or "links" not in record:
                        LOG.info("%d/%d: %s", number, len(todo), record["source"])


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    main()
