import logging
from os import path

from adi_doctools.parser.hdl import parse_hdl_vendor

logger = logging.getLogger(__name__)


def test_hdl_regmap(tmp_path):

    def log_assert(msg):
        for m in msg:
            logger.warning(m)

        assert len(msg) == 0

    file = path.join('asset', "adi_project_vendor.tcl")

    carrier, msg = parse_hdl_vendor(file)
    log_assert(msg)

    assert sorted(carrier) == sorted(('dev_0', 'dev_1', 'dev_2'))
