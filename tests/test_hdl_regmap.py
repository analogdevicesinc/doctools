from logging import WARNING
from pathlib import Path

from adi_doctools.parser.hdl import (
    expand_hdl_regmap,
    parse_hdl_regmap,
    resolve_hdl_regmap,
)
from adi_doctools.writer.hdl import write_hdl_regmap


def test_hdl_regmap(monkeypatch, tmp_path, caplog):
    monkeypatch.chdir(Path(__file__).parent)

    caplog.set_level(WARNING, logger="adi_doctools.parser.hdl")

    regmap = {}
    regnames = ['parent', 'parent_ops', 'child', 'child_ops']
    index_date = 35

    for r in regnames:
        file = Path(f"asset/hdl/docs/regmap/adi_regmap_{r}.txt")

        regmap[r] = parse_hdl_regmap(0, str(file))

    resolve_hdl_regmap(regmap)
    expand_hdl_regmap(regmap)

    assert not caplog.records

    d = tmp_path / "sv"
    d.mkdir()
    for r in regmap:
        write_hdl_regmap(d, regmap[r]['subregmap'], r)

        f = f"adi_regmap_{r}_pkg.sv"
        with open(Path(f"asset/hdl/testbenches/library/regmaps/{f}"), 'r') as f1, \
              open(Path(f"{d}/{f}"), 'r') as f2:
            e1 = f1.readlines()
            e2 = f2.readlines()

        # Remove date time line
        e1.pop(index_date)
        e2.pop(index_date)

        assert e1 == e2
