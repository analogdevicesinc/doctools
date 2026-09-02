from .aggregate import setup as aggregate_setup
from .latex_shell import setup as latex_shell_setup
from .lfs import lfs_setup
from .linkcheck_sitemap import setup as linkcheck_sitemap_setup
from .sitemap import setup as sitemap_setup

setup = [
    linkcheck_sitemap_setup,
    sitemap_setup,
    aggregate_setup,
    lfs_setup,
    latex_shell_setup,
]
