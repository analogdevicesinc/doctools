from packaging.version import Version

from sphinx.__init__ import __version__ as sphinx_version
from os import path
from lxml import html, etree
from click import echo
import importlib.util

def sanitize_singlehtml(file) -> str:
    """
    Alter the singlehtml etree to:
    * Remove the embed style
    * Extract custom doc name
    * Covert toctree caption into "volumes" (H1 header)
    * Replace 'document-' anchor with immediate header anchor
    """

    root = html.parse(file).getroot()

    # Remove full CSS entry to use slimer version
    link_elements = root.xpath("//head//link[contains(@href, '_static/app.min.css')]")
    for link in link_elements:
        link.getparent().remove(link)

    # Obtain toctree caption to use as volume titles
    toc_tree = root.xpath("//body//div[@class='toc-tree']")
    if len(toc_tree):
        toc_tree = toc_tree[0]
        cap_ = toc_tree.xpath("./p[@class='caption' and @role='heading']//span[@class='caption-text']")
        echo(f"Toctree not found, skipped")
    else:
        cap_ = []
    volumes = []
    for c in cap_:
        ul_ = c.getparent().getnext()
        i = ul_.xpath('./li//a')[0]
        i_ = i.attrib['href']
        if i_.startswith('#'):
            i_ = i_[1:]
        elif i_.startswith('index.html#'):
            i_ = i_[11:]
        else:
            echo(f"Toctree link '{i_}' is not internal, skipped")
            continue
        volumes.append([c.text, i_])

    # Extract title to extract description
    title = root.xpath("//head/title")[0].text
    if ':' in title:
        description = title[title.index(':')+1:].strip()
    else:
        description = ''

    bwrap = root.xpath("//*[@role='main']")[0]

    # Remove first H1 and replace with break-before
    # if next if not a section (e.g. introduction)
    h1_ = bwrap.xpath(".//h1")[0]
    e_p = h1_.getparent()
    e_n = h1_.getnext()
    if e_n.tag != 'section':
        if 'class' in e_n.attrib and "toctree-wrapper" in e_n.attrib['class']:
            pass
        else:
            ele_break = etree.Element("span")
            ele_break.attrib['class'] = "break-before"
            e_p.insert(e_p.index(h1_), ele_break)
    e_p.remove(h1_)


    # Add description
    ele_desc = etree.Element("span")
    ele_desc.attrib['class'] = "description"
    ele_desc.text = description
    first_page = root.xpath("//header//a[@id='logo']")
    if len(toc_tree):
        first_page = first_page[0]
        first_page.insert(1, ele_desc)
    else:
        echo(f"Logo not found, skipped adding description")

    # Find indexes and add volumes
    for c, i in volumes:
        e_ = bwrap.xpath(f".//span[@id='{i}']")
        if len(e_) == 0:
            echo(f"Failed to find index for id '{i}', skipped")
            continue
        e_ = e_[0]
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
        filename = path.basename(file)
        len_fname = len(filename)

        a_ = root.xpath("//a[@class='reference internal']")
        for a__ in a_:
            if a__.attrib['href'].startswith(filename):
                a__.attrib['href'] = a__.attrib['href'][len_fname:]

    toc = root.xpath("//body//div[@class='tocwrapper']/nav")
    toc = toc[0] if toc else None
    # Starting from Sphinx version v8.2.0, commit c93723b803
    # singlehtml localtoc are broken because
    # while all ids beyond page id remain as #my-anchor,
    # all href on the localtoc are prefixed by the original doc name, e.g.
    #   #document-documentation/some-page#evaluation-board-software
    # luckily, it is easy to detect since the broken links have double "#",
    # so discarding the left side is enough
    # REVISIT: Check if newer Sphinx fixes the issue
    if Version(sphinx_version) >= Version("8.2.0"):
        a_ = toc.xpath(".//a[@class='reference internal']")
        for a__ in a_:
            a__.attrib['href'] = a__.attrib['href'][a__.attrib['href'].rindex("#"):]

    # In the toctree and body, replace document anchor by the immediate header anchor,
    # to scroll to the correct position.
    for span in bwrap.xpath('.//span[following-sibling::*[1][self::section]]'):
        section = span.getnext()
        heading = section.xpath('./h1 | ./h2 | ./h3 | ./h4 | ./h5 | ./h6')
        if heading:
            anchor0 = "#" + span.get('id')
            anchor1 = "#" + section.get('id')
            toclink = toc.xpath(f".//a[@href='{anchor0}']")
            if toclink:
                toclink[0].set('href', anchor1)

            bodylink = bwrap.xpath(f".//a[@href='{anchor0}']")
            for bl in bodylink:
                bl.set('href', anchor1)

    # Render LaTeX math with matplotlib.mathtext
    if not importlib.util.find_spec("matplotlib"):
        echo("Package 'matplotlib' required to render LaTeX math formulas is not "
             "installed, these formulas will show as the LaTeX source code.")
    else:
        import matplotlib.pyplot as plt
        import io
        m = root.xpath("//div[@class='math notranslate nohighlight']")


        def latex_to_svg(expr: str):
            fig, ax = plt.subplots(figsize=(1, 1))
            buffer = io.BytesIO()
            expr = rf"${expr[3:-2]}$"
            text_box = ax.text(0.5, 0.5, expr,
                               horizontalalignment='center', verticalalignment='center',
                               fontsize=12)
            renderer = fig.canvas.get_renderer()
            bbox = text_box.get_window_extent(renderer)
            dpi = fig.dpi
            width, height = bbox.width / dpi, bbox.height / dpi
            fig.set_size_inches(width, height)

            ax.axis('off')
            plt.savefig(buffer, format='svg', bbox_inches='tight')
            plt.close(fig)
            buffer.seek(0)
            svg_content = buffer.getvalue().decode('utf-8')
            return svg_content.split("?>", 1)[1].strip()


        for m_ in m:
            svg_ = latex_to_svg(m_.text)
            svg = etree.fromstring(svg_)
            m_.text=""
            m_.append(svg)

    html_utf8 = html.tostring(root, encoding="utf-8", method="html")
    # For checking the output
    with open(path.join(path.dirname(file), "." + path.basename(file)), 'wb') as f:
        f.write(html_utf8)
    return html_utf8


