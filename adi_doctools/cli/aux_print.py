from packaging.version import Version

from sphinx.__init__ import __version__ as sphinx_version
from os.path import basename
from lxml import html, etree

def sanitize_singlehtml(file) -> str:
    """
    Alter the singlehtml etree to:
    * Remove the embed style
    * Extract custom doc name
    * Covert toctree caption into "volumes" (H1 header)
    """

    root = html.parse(file).getroot()

    # Remove full CSS entry to use slimer version
    link_elements = root.xpath("//head//link[contains(@href, '_static/style.min.css')]")
    for link in link_elements:
        link.getparent().remove(link)

    # Obtain toctree caption to use as volume titles
    toc_tree = root.xpath("//body//div[@class='toc-tree']")[0]
    cap_ = toc_tree.xpath("./p[@class='caption' and @role='heading']//span[@class='caption-text']")
    volumes = []
    for c in cap_:
        ul_ = c.getparent().getnext()
        i = ul_.xpath('./li//a')[0]
        volumes.append([c.text, i.attrib['href'][1:]])

    # Extract title
    title = root.xpath("//head/title")[0].text

    bwrap = root.xpath("//div[@class='bodywrapper']")[0]

    # Remove first H1
    h1_ = bwrap.xpath(".//h1")[0]
    h1_.getparent().remove(h1_)

    # Find indexes and add columes
    for c, i in volumes:
        e_ = bwrap.xpath(f".//span[@id='{i}']")[0]
        ele_ = etree.Element("div")
        ele_.attrib['class'] = "volume"
        ele = etree.Element("h1")
        ele.text = c
        ele_.insert(0, ele)
        e_p = e_.getparent()
        e_p.insert(e_p.index(e_), ele_)

    # Prior to Sphinx v8.1.0, commit 0bfaadf6c9
    # internal references from other .rst files aggregated on the singlehtml
    # does not have a same page anchor references:
    #    href="#my-label"
    # instead, have a anchored link
    #    href="index.html#my-label"
    # So, for < v8.1.0, patch href="my-index.html#*" -> href="#*"
    if Version(sphinx_version) < Version("8.1.0"):
        filename = basename(file)
        len_fname = len(filename)

        a_ = root.xpath("//a[@class='reference internal']")
        for a__ in a_:
            if a__.attrib['href'].startswith(filename):
                a__.attrib['href'] = a__.attrib['href'][len_fname:]

    return html.tostring(root, encoding="utf-8", method="html")


