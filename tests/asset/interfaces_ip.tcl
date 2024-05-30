

adi_if_define intf_0
adi_if_ports output   1  a
adi_if_ports output   2  b
adi_if_ports output   3  c
adi_if_ports output   4  d
adi_if_ports input    5  e
adi_if_ports input    6  f

# Interface description 1

adi_if_define intf_1
adi_if_ports input    1 a
adi_if_ports output   2 b reset 1
adi_if_ports output   3 c none  0
adi_if_ports output  -1 d

adi_if_define intf_2

adi_if_ports output 1 a reset
adi_if_ports output 1 b clock

# Interface description 2

adi_if_define intf_3
adi_if_ports output 1 a reset
adi_if_ports output 1 b clock
