from os import path, chdir

from adi_doctools.parser.hdl import parse_hdl_project


def test_hdl_library(tmp_path):

    def log_info(obj):
        import json
        print(json.dumps(obj, indent=4))

    chdir(path.join("asset", "hdl"))
    file = path.join("projects", "project", "carrier", "system_bd.tcl")
    obj, path_ = parse_hdl_project(file)
    chdir(path.join("..", ".."))
    log_info(obj)

    assert len(obj["lib_deps"]) == 3
    assert len(obj["m_deps"]) == 8
