# ...

adi_ip_files core [ list \
  $special/file/path.v \
  "core.v" \
  "core_sub.v" \
  "core_pkg_sv.ttcl" \
]

## Interface definitions

adi_add_bus "bus_0" "master" \
  "analog.com:interface:core_bus_0_rtl:1.0" \
  "analog.com:interface:core_bus_0:1.0" \
  {
    {"bus_0_a" "a"} \
    {"bus_0_b" "b"} \
  }
adi_add_bus_clock "clk" "bus_0" "reset_n"

adi_add_bus "bus_1" "slave" \
  "analog.com:interface:core_bus_1_rtl:1.0" \
  "analog.com:interface:core_bus_1:1.0" \
  {
    {"bus_1_a" "a"} \
    {"bus_1_b" "b"} \
  }
adi_add_bus_clock "clk" "bus_1" "reset_n"

adi_ip_add_core_dependencies [list \
  analog.com:$VIVADO_IP_LIBRARY:util_a:1.0 \
  analog.com:$VIVADO_IP_LIBRARY:util_b:1.0 \
  analog.com:$VIVADO_IP_LIBRARY:util_c:1.0
]
