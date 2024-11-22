from os import path

from logging import WARNING
from adi_doctools.parser.hdl import parse_hdl_regmap
from adi_doctools.parser.hdl import resolve_hdl_regmap
from adi_doctools.parser.hdl import expand_hdl_regmap
from adi_doctools.writer.hdl import write_hdl_regmap


def test_hdl_regmap(tmp_path, caplog):
    caplog.set_level(WARNING, logger="adi_doctools.parser.hdl")

    regmap = {}
    regnames = ['parent', 'parent_ops', 'child', 'child_ops']
    index_date = 35

    for r in regnames:
        file = path.join('asset', 'hdl', 'docs', 'regmap',
                         f"adi_regmap_{r}.txt")

        regmap[r] = parse_hdl_regmap(0, file)

    resolve_hdl_regmap(regmap)
    expand_hdl_regmap(regmap)

    assert not caplog.records

    d = tmp_path / "sv"
    d.mkdir()
    for r in regmap:
        write_hdl_regmap(d, regmap[r]['subregmap'], r)

        f = f"adi_regmap_{r}_pkg.sv"
        f1 = open(path.join('asset','hdl', 'testbenches', 'common', 'sv',
                            f), 'r')
        f2 = open(path.join(d, f), 'r')
        e1 = f1.readlines()
        e2 = f2.readlines()
        f1.close()
        f2.close()

        # Remove date time line
        e1.pop(index_date)
        e2.pop(index_date)

        assert e1 == e2
