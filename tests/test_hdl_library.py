import logging
from os import path

from adi_doctools.parser.hdl import parse_hdl_library

logger = logging.getLogger(__name__)


def test_hdl_library(tmp_path):

    def log_assert(msg):
        for m in msg:
            logger.warning(m)

        assert len(msg) == 0

    def log_info(obj):
        import json
        logger.info(json.dumps(obj, indent=4))

    file = path.join("asset", "core_ip.tcl")

    obj, msg = parse_hdl_library("asset", file, "core")
    log_info(obj)
    log_assert(msg)

    assert len(obj["dependencies"]) == 5
    assert len(obj["interfaces"]) == 2
    assert len(obj["library_dependencies"]) == 3
    assert len(obj["parameters"]) == 6
