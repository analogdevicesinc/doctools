import logging
from os import path

from adi_doctools.parser.hdl import parse_hdl_regmap
from adi_doctools.parser.hdl import resolve_hdl_regmap
from adi_doctools.parser.hdl import expand_hdl_regmap
from adi_doctools.writer.hdl import write_hdl_regmap

logger = logging.getLogger(__name__)


def test_hdl_regmap(tmp_path):

    regmap = {}
    regnames = ['parent', 'child']
    index_date = 35

    def log_assert(msg):
        for m in msg:
            logger.warning(m)

        assert len(msg) == 0

    for r in regnames:
        file = path.join('asset', f"adi_regmap_{r}.txt")

        regmap[r], msg = parse_hdl_regmap(0, file)
        log_assert(msg)

    log_assert(resolve_hdl_regmap(regmap))
    log_assert(expand_hdl_regmap(regmap))

    d = tmp_path / "sv"
    d.mkdir()
    for r in regmap:
        write_hdl_regmap(d, regmap[r]['subregmap'], r)

        f = f"adi_regmap_{r}_pkg.sv"
        f1 = open(path.join('asset', f), 'r')
        f2 = open(path.join(d, f), 'r')
        e1 = f1.readlines()
        e2 = f2.readlines()
        f1.close()
        f2.close()

        # Remove date time line
        e1.pop(index_date)
        e2.pop(index_date)

        assert e1 == e2
