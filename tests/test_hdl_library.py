from os import path, chdir

from adi_doctools.parser.hdl import parse_hdl_library


def test_hdl_library(tmp_path):

    def log_info(obj):
        import json
        print(json.dumps(obj, indent=4))

    chdir(path.join("asset", "hdl"))
    file = path.join("library", "core", "core_ip.tcl")
    obj, path_, ip_name = parse_hdl_library(file)
    chdir(path.join("..", ".."))

    log_info(obj)

    assert len(obj["dependencies"]) == 5
    assert len(obj["interfaces"]) == 2
    assert len(obj["library_dependencies"]) == 3
    assert len(obj["parameters"]) == 6
