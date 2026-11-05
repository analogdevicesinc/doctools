from logging import WARNING
from pathlib import Path

import pytest

from adi_doctools.directive.string import string_hdl
from adi_doctools.parser.hdl import (
    expand_hdl_regmap,
    parse_hdl_regmap,
    resolve_hdl_regmap,
)
from adi_doctools.writer.hdl import write_hdl_regmap


@pytest.mark.parametrize("access_types", [
    ("RO-V", "RO-V", "RO", "RW-V", "RW"),
    ("RO", "RO-V", "RW", "RW-V"),
])
def test_hdl_regmap_volatile_access_types(tmp_path, caplog, access_types):
    fields = "".join(
        f"FIELD\n[{i}] 0x0\nFIELD_{i}\n{access}\nDescription.\nENDFIELD\n\n"
        for i, access in enumerate(access_types)
    )
    source = tmp_path / "regmap.txt"
    source.write_text(
        "TITLE\nVolatile test\nVOLATILE_TEST\nENDTITLE\n\n"
        "REG\n0x0000\nTEST\nTest register.\nENDREG\n\n" + fields
    )
    caplog.set_level(WARNING, logger="adi_doctools.parser.hdl")

    regmap = parse_hdl_regmap(0, str(source))['subregmap']['VOLATILE_TEST']

    assert not caplog.records
    assert set(regmap['access_type']) == {'RO', 'RW', 'V'}
    assert len(regmap['access_type']) == 3
    assert all(access in string_hdl.access_type for access in regmap['access_type'])
    assert [field['rw'] for field in regmap['regmap'][0]['fields']] == [
        access.replace('-V', 'V') for access in access_types
    ]


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
