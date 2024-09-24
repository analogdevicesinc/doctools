from os import path

from adi_doctools.parser.hdl import parse_hdl_interfaces
from adi_doctools.typing.hdl import Intf

intf_0 = Intf(
    description=None,
    name="intf_0"
)

intf_1 = Intf(
    description="Interface description 1",
    name="intf_1"
)

intf_2 = Intf(
    description=None,
    name="intf_2"
)

intf_3 = Intf(
    description="Interface description 2",
    name="intf_3"
)

intfs = [intf_0, intf_1, intf_2, intf_3]


def test_hdl_interfaces(tmp_path):

    def log_info(obj):
        import json
        print(json.dumps(obj, indent=4))

    file = path.join("asset", "interfaces_ip.tcl")

    interfaces = parse_hdl_interfaces(file)
    log_info(interfaces)

    assert len(interfaces) == 4

    for a, b in zip(intfs, interfaces):
        for key in ["description", "name"]:
            assert a[key] == b[key]

    assert len(interfaces[0]['ports']) == 6
    i = 0
    for a in range(0, len(interfaces[0]['ports'])):
        assert interfaces[0]['ports'][i]['width'] == i + 1

    assert interfaces[1]['ports'][1]['domain'] == "reset"
    assert interfaces[1]['ports'][2]['domain'] is None
