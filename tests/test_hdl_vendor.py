import logging
from pathlib import Path

from adi_doctools.parser.hdl import parse_hdl_vendor

logger = logging.getLogger(__name__)


def test_hdl_regmap(monkeypatch, tmp_path):
    monkeypatch.chdir(Path(__file__).parent)

    def log_assert(msg):
        for m in msg:
            logger.warning(m)

        assert len(msg) == 0

    file = Path("asset/adi_project_vendor.tcl")

    carrier, msg = parse_hdl_vendor(str(file))
    logger.info(carrier)
    log_assert(msg)

    assert sorted(carrier) == sorted(('dev_0', 'dev_1', 'dev_2'))
