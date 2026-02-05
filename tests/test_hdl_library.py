from pathlib import Path

from adi_doctools.parser.hdl import parse_hdl_library


def test_hdl_library(monkeypatch, tmp_path):
    monkeypatch.chdir(Path(__file__).parent / 'asset' / 'hdl')

    def log_info(obj):
        import json
        print(json.dumps(obj, indent=4))

    file = Path("library/core/core_ip.tcl")
    obj, path_, ip_name = parse_hdl_library(str(file))

    log_info(obj)

    assert len(obj["dependencies"]) == 5
    assert len(obj["interfaces"]) == 2
    assert len(obj["library_dependencies"]) == 3
    assert len(obj["parameters"]) == 6
