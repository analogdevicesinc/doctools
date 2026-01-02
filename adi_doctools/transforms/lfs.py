from os import path, environ
import re

from sphinx.transforms.post_transforms import SphinxPostTransform
from sphinx.util import logging
from sphinx import addnodes
from docutils import nodes

logger = logging.getLogger(__name__)


class lfs_to_links(SphinxPostTransform):
    """A Sphinx post-transform that converts local paths into http for git lfs
    artifacts.
    Limitation: the url uses the branch, so if the image does not exist in the
    HEAD anymore, (e.g., main), the image will return 404 for old versions.
    A solution, that does not touch every file with image every build, is to
    look to the history and get the sha from when it was last modified, and use
    this commit for the url instead.
    """

    formats = ("html",)
    default_priority = 20

    def get_lfs_types(self, srcdir):
        types_lfs = []
        git_attr = path.join(srcdir, "..", ".gitattributes")
        with open(git_attr, "r") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and 'filter=lfs' in line:
                    match = re.match(r"\*\.([a-zA-Z0-9]+)", line)
                    if match:
                        types_lfs.append('.'+match.group(1))
        return types_lfs

    def is_not_lfs(self, uri):
        is_lfs = False
        for ext in self.types_lfs:
            if uri.endswith(ext):
                is_lfs = True
        return not is_lfs

    def run(self, **kwargs) -> None:
        self.types_lfs = self.get_lfs_types(self.env.srcdir)
        url = f"https://media.githubusercontent.com/media/{environ['GIT_ORG_REPOSITORY']}/{environ['GIT_BRANCH']}/docs"

        docname = self.env.docname
        for node in self.document.findall(nodes.image):
            uri = node['candidates'].get('*')
            if uri:
                if self.is_not_lfs(uri):
                    continue

                ouri = node['original_uri']
                ouri = path.abspath(path.join(f"/{docname}", '..', ouri))

                node['candidates']['?'] = f"{url}{ouri}"
                node['original_uri'] = f"{url}{ouri}"
                node['uri'] = f"{url}{ouri}"
                del node['candidates']['*']

        for node in self.document.findall(addnodes.download_reference):
            targetname = node['reftarget']
            if '://' in targetname:
                continue

            if 'filename' in node:
                del node['filename']

            if self.is_not_lfs(targetname):
                continue

            targetname = path.abspath(path.join(f"/{docname}", '..', targetname))
            node['refuri'] = f"{url}{targetname}"


def lfs_setup(app):
    if "GIT_LFS_TO_LINKS" in environ:
        if "GIT_ORG_REPOSITORY" in environ and "GIT_BRANCH" in environ:
            app.add_post_transform(lfs_to_links)
        else:
            logger.error("lfs_to_links: 'GIT_LFS_TO_LINKS' in env, but 'GIT_ORG_REPOSITORY' or/and 'GIT_BRANCH' is not, skipped!")

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
