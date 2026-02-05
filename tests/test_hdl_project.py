from pathlib import Path

from adi_doctools.parser.hdl import parse_hdl_project


def test_hdl_library(monkeypatch, tmp_path):
    monkeypatch.chdir(Path(__file__).parent / 'asset' / 'hdl')

    def log_info(obj):
        import json
        print(json.dumps(obj, indent=4))

    file = Path("projects/project/carrier/system_bd.tcl")
    obj, path_ = parse_hdl_project(str(file))
    log_info(obj)

    assert len(obj["lib_deps"]) == 3
    assert len(obj["m_deps"]) == 8
