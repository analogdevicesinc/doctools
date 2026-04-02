import json
import shutil
import signal
import subprocess
import logging
import argparse
import re
from os import environ, path
from pathlib import Path

logger = logging.getLogger(__name__)


pattern = re.compile(r'\$(\w+)|\$\{([^}]+)\}')

def expand_vars(text: str) -> str:
    def repl(match):
        var = match.group(1) or match.group(2)
        return environ.get(var, "")
    return pattern.sub(repl, text)

def get_arguments_llm():
    """Parse arguments for the llm command."""
    parser = argparse.ArgumentParser(
        prog='llm',
        description="Run llm cli 'pi' pretty-printed stream output.")
    parser.add_argument('file',
                        help="Path to prompt file (.md) or session file (.jsonl)")
    parser.add_argument('argv', nargs=argparse.REMAINDER,
                        help='Additional arguments to the cli')

    args = parser.parse_args()
    return args


models_config = {
    "providers": {
        "portkey": {
            "baseUrl": "https://api.portkey.ai",
            "api": "anthropic-messages",
            "apiKey": "PORTKEY_API_KEY",
            "headers": {
                "x-portkey-api-key": "PORTKEY_API_KEY",
                "x-portkey-virtual-key": "vertexai-global"
            },
            "models": [
                {"name": "small", "id": "anthropic.claude-haiku-4-5@20251001"},
                {"name": "medium", "id": "anthropic.claude-sonnet-4-5@20250929"},
                {"name": "large", "id": "anthropic.claude-opus-4-5@20251101"}
            ]
        }
    }
}


def ensure_pi_config() -> None:
    config_dir = Path.home() / ".pi" / "agent"
    config_file = config_dir / "models.json"

    if config_file.exists():
        return

    config_dir.mkdir(parents=True, exist_ok=True)
    with open(config_file, 'w', encoding='utf-8') as f:
        json.dump(models_config, f)
    logger.info(f"Created {config_file}")


def find_llm_cli():
    local_pi = Path("./node_modules/.bin/pi")
    if local_pi.exists():
        return str(local_pi)
    return shutil.which("pi")


def pretty_print(event) -> None:
    """Pretty-print JSONL."""
    t = event.get("type")

    if t == "session":
        print(f"\n=== Session {event.get('id', '')[:8]} ===")

    elif t == "message" and "message" in event:
        msg = event["message"]
        role = msg.get("role")
        if role == "user":
            content = msg.get("content", "")
            if isinstance(content, list) and content:
                text = content[0].get("text", "") if isinstance(content[0], dict) else str(content)
            else:
                text = str(content)
            print(f"\n[user] {text[:200]}{'...' if len(text) > 200 else ''}")
        elif role == "assistant":
            for c in msg.get("content", []):
                if c.get("type") == "text":
                    print(f"\n[assistant] {c.get('text', '')}")
                elif c.get("type") == "toolCall":
                    print(f"\n  [{c.get('name')}] {json.dumps(c.get('arguments', {}))}")
            usage = msg.get("usage", {})
            if usage.get("output"):
                print(f"  ({usage.get('input', 0)}, {usage.get('output', 0)} tokens)")
        elif role == "toolResult":
            content = msg.get("content", [{}])
            text = content[0].get("text", "") if content and isinstance(content[0], dict) else ""
            err = " ERROR" if msg.get("isError") else ""
            print(f"  [{msg.get('toolName')}]{err} {text[:100]}{'...' if len(text) > 100 else ''}")

    elif t == "message_start":
        msg = event.get("message", {})
        role = msg.get("role")
        if role == "user":
            content = msg.get("content", [{}])
            if content and isinstance(content[0], dict):
                text = content[0].get("text", "")
            else:
                text = str(content)
            print(f"\n[user] {text[:100]}{'...' if len(text) > 100 else ''}")
        elif role == "toolResult":
            name = msg.get("toolName", "")
            print(f"\n[{name}] ", end="", flush=True)

    elif t == "message_end":
        msg = event.get("message", {})
        role = msg.get("role")
        if role == "assistant":
            usage = msg.get("usage", {})
            if usage.get("output"):
                print(f" ({usage.get('input', 0)}, {usage.get('output', 0)} tokens)")
        elif role == "toolResult":
            content = msg.get("content", [{}])
            if content and isinstance(content[0], dict):
                text = content[0].get("text", "")
                print(text[:80] + ("..." if len(text) > 80 else ""))

    elif t == "message_update":
        ae = event.get("assistantMessageEvent", {})
        ae_type = ae.get("type")

        if ae_type == "text_delta":
            print(ae.get("delta", ""), end="", flush=True)
        elif ae_type == "toolcall_delta":
            print(ae.get("delta", ""), end="", flush=True)
        elif ae_type == "toolcall_start":
            tc = ae.get("partial", {}).get("content", [{}])[0]
            print(f"\n[{tc.get('name', '')}] ", end="", flush=True)
        elif ae_type == "toolcall_end":
            print()

    elif t == "tool_execution_start":
        print(f"  {event.get('toolName')}", end="", flush=True)

    elif t == "tool_execution_end":
        print(" error" if event.get("isError") else " done")

    elif t == "agent_end":
        print("\n=== Agent finished ===")


def llm():
    """
    Run llm cli 'pi' with pretty-printed stream output.
    """
    args = get_arguments_llm()

    file = args.file
    argv = args.argv

    if not file:
        logger.error("File is required")
        return 1

    if not path.isfile(file):
        logger.error(f"File '{file}' does not exist")
        return 1

    if file.endswith('.jsonl'):
        with open(file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                event = json.loads(line)
                pretty_print(event)
        return 0

    pi_bin = find_llm_cli()
    if not pi_bin:
        logger.error("Llm cli 'pi' not found.")
        print("Tip: npm install @mariozechner/pi-coding-agent")
        return 1

    ensure_pi_config()

    cmd_args = [pi_bin, '-p', '--mode', 'json'] + argv

    logger.info(f"Running: {' '.join(cmd_args)}")

    env = environ.copy()

    with open(file, 'r', encoding='utf-8') as f:
        content_ = f.read()

    content = expand_vars(content_)

    proc = subprocess.Popen(
        cmd_args,
        env=env,
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        bufsize=1
    )

    def handle_sigint(signum, frame):
        proc.terminate()
        return 130

    signal.signal(signal.SIGINT, handle_sigint)

    proc.stdin.write(content)
    proc.stdin.close()

    for line in proc.stdout:
        line = line.strip()
        if not line:
            continue
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            print(line)
            continue

        pretty_print(event)

    proc.wait()

    if proc.returncode != 0:
        stderr = proc.stderr.read()
        if stderr:
            logger.error(stderr)

    return 0

if __name__ == "__main__":
    llm()
