from .linkcheck_sitemap import setup as linkcheck_sitemap_setup
from .aggregate import setup as aggregate_setup
from .lfs import lfs_setup

setup = [
    linkcheck_sitemap_setup,
    aggregate_setup,
    lfs_setup,
]
