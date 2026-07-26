<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX14532E Evaluation Kit

## General Description

Features

The MAX14532E evaluation kit (EV kit) provides a proven design to evaluate the MAX14532E high ESD-protected DP3T  switch.  The  EV  kit  is  designed  to  demonstrate the  MAX14532E  used  in  USB  2.0  Hi-Speed-compliant switching applications. The EV kit routes a multiplexed signal from one USB port to another USB port or audio connector.  The  MAX14532E  EV  kit  PCB  comes  with  a MAX14532EEWC+ installed.

- S USB Powered (Cable Included)
- S Complete USB 2.0 Hi-Speed (480Mbps) Switching Circuit
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14532EEVKIT+ | EV Kit |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                            |
|------------------|-------|------------------------------------------------------------------------|
| C1, C4, C5       |     3 | 10 F F Q 10%, 16V X7R ceramic capacitors (1206) Murata GRM31CR71C106K  |
| C2, C3           |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C6               |     1 | 0.01 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C103K |
| C7, C8, C10, C11 |     0 | Not installed, ceramic capacitors (1210)                               |
| C9               |     1 | 1uF Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K      |
| D1               |     1 | Red LED (0603) Panasonic LNJ214R8ARA                                   |
| D2               |     1 | 200mA, 30V Schottky diode (SOT23) Diodes, Inc. BAT54C                  |
| FB1              |     1 | 220 I at 100MHz, 200mA ferrite bead (0603) Murata BLM18AG221SN1D       |

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| FB2, FB3      |     0 | Not installed, ferrite beads (0603)                                 |
| J1-J4         |     4 | Mini USB type-AB right-angle receptacles                            |
| J5, J6        |     2 | 3.5mm stereo headphone jacks                                        |
| JU1-JU4       |     4 | 3-pin headers                                                       |
| R1            |     1 | 270 I Q 5% resistor (0603)                                          |
| R2            |     0 | Not installed, resistor (0603)                                      |
| U1            |     1 | DP3T USB, audio switch (12 WLP) Maxim MAX14532EEWC+ (Top Mark: AAU) |
| U2            |     1 | 3V LDO regulator (5 SC70) Maxim MAX8510EXK30+ (Top Mark: +ADT)      |
| -             |     4 | Shunts (JU1-JU4) Sullins STC02SYAN                                  |
| -             |     1 | PCB: MAX14532E EVALUATION KIT+                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp                         | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX14532E when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14532E Evaluation Kit

## Quick Start

## Required Equipment

## Detailed Description of Hardware

The  MAX14532E  EV  kit  provides  a  proven  layout  for the  MAX14532E  and  demonstrates  the  devices  used in  USB  2.0  Hi-Speed  switching  applications.  The  EV kit  provides  four  mini  type-AB  USB  port  connectors (J1-J4)  and  two  stereo  audio  input/output  connectors (J5, J6). The EV kit requires multiple power supplies to power the MAX14532E VCC and to set the proper logic levels at the MAX14532E IC digital inputs. An additional MAX8510 (U2) LDO regulator is available to operate the MAX14532E VCC at 3V.

The  MAX14532E  EV  kit  routes  multiplexed  signals  to/ from  the  mini  USB  ports  (J2,  J3,  and  J4)  to  mini  USB port J1. Audio signals can also be routed to/from audio connectors J5 and J6 by installing the included ceramic capacitors at the C7, C8, C10, and C11 PCB footprints. When connecting a USB peripheral device at ports J3 or J4, the respective DC-blocking capacitors should not be installed. When interfacing an audio jack at connector J5 or J6, a USB peripheral device should not be connected at ports J3 or J4, respectively.

Jumpers  JU2  and  JU3  are  used  as  digital  control  for the  MAX14532E  CB0  and  CB1  inputs.  Jumper  JU4  is used for VBUS detection, when connecting port J1 to a USB port, which automatically routes the signal to port J2 upon receiving a valid VBUS signal. All USB signal traces are 90 I differential controlled-impedance traces.

## Power Supplies

Jumper  JU1  provides  two  options  for  powering  the MAX14532E  VCC  input.  VCC  operates  either  from  a user-supplied 2.7V to 5.5V power supply connected at the EXT\_VCC and GND PCB pads or from the output of the  3V  LDO  regulator  (MAX8510).  The  external  power supply connected at EXT\_VCC, in conjunction with ferrite beads FB1, FB2, and FB3, must be used when J2, J3, and J4 are peripheral sides, respectively. The MAX8510 can be powered by port J2, J3, or J4 when the ports are connected to an active USB port or when 5V is applied at the +5V and GND PCB pads. See Table 2 for proper jumper configuration.

The  VIO  and  GND  PCB  pads  are  available  to  set  the proper high and low logic levels at the MAX14532E IC CB0  and  CB1  digital  inputs.  Apply  an  external  power

-  One 5V power supply
-  One 3V power supply
-    MAX14532E  EV  kit  (one  USB  type-A  female-to-mini USB type-B 5-pin male adapter)
-  USB high-speed A-to-B cables, 6ft
-    User-supplied  Windows M 2000,  Windows  XP M , or Windows Vista M PC with a spare Hi-Speed USB port
-    One  USB  2.0  Hi-Speed/full-speed  peripheral  device (e.g., USB 2.0 flash drive)

## Procedure

The  MAX14532E  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)    Verify that all jumpers (JU1-JU4) are in their default positions, as shown in Table 1.
- 2)    Apply the 5V supply positive and negative terminals at the +5V and GND PCB pads, respectively.
- 3)    Apply the 3V power-supply positive and negative terminals to the VIO and GND PCB pads, respectively.
- 4)  Enable the 5V and 3V power-supply outputs.
- 5)  Verify that red LED D1 is on.
- 6)    Connect the USB type-A female-to-mini USB type-B 5-pin male adapter to port J1.
- 7)    Connect  the  USB  cable  from  the  PC  to  the  USB adapter connected at port J1.
- 8)    Connect a USB 2.0 device to the EV kit port J2 connector.
- 9)    Verify that the USB 2.0 device is detected by the PC (VBUS detection mode).

## Table 1. Default Shunt Positions

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | 1-2              |
| JU2      | 1-2              |
| JU3      | 1-2              |
| JU4      | Installed        |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14532E Evaluation Kit

## Table 2. VCC Power-Supply Configuration (JU1)

| SHUNT POSITION   | VCC SUPPLY      | MAX14532E VCC SOURCE                                                                          |
|------------------|-----------------|-----------------------------------------------------------------------------------------------|
| 1-2*             | On-board supply | Device powered by on-board 3V linear regulator (MAX8510)                                      |
| 2-3              | External supply | Device powered by user-supplied 2.7V to 5V power supply connected to the EXT_VCC and GND pads |

## Table 3. USB Signal Routing (JU2, JU3, JU4)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | USB SIGNAL ROUTING           |
|------------------|------------------|------------------|------------------------------|
| JU3              | JU2              | JU4              | USB SIGNAL ROUTING           |
| 2-3              | 1-2              | Not installed    | MAX14532E switch off         |
| 2-3              | 2-3              | Not installed    | J1 signal routed to J2       |
| 1-2              | 1-2              | Not installed    | J1 signal routed to J3 or J5 |
| 1-2*             | 1-2*             | Not installed    | J1 signal routed to J4 or J6 |

## Table 4. VBUS Detection (JU4)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | VBUS DETECTION FUNCTION   | USB SIGNAL ROUTING                                                                   |
|------------------|------------------|------------------|---------------------------|--------------------------------------------------------------------------------------|
| JU3              | JU2              | JU4              | VBUS DETECTION FUNCTION   | USB SIGNAL ROUTING                                                                   |
| 1-2*             | X                | Installed*       | VBUS detection enabled    | VBUS > V VBDET : J1signal routed to J2 VBUS < V VBDET : J1 signal routed to J4 or J6 |
| X                | X                | Not installed    | VBUS detection disabled   | Dependent on jumpers JU2 and JU3 configuration (see Table 3)                         |

X = Don't care.

supply from the 1.8V to 5.5V voltage range at the VIO and GND PCB pads.

The +5V and GND PCB pads are available to supply mini USB type-AB ports J2, J3, and J4 with a 5V bus power when the connectors are not interfaced to a peripheral side of USB port.

## USB Switch Control

The multiplexed signals from the mini type-AB USB port J1 are routed to/from mini type-AB USB ports J2, J3, and J4 or to/from audio connectors J5 and J6, depending on the state of the 3T switch CB0 and CB1 inputs.

Jumpers  JU2  and  JU3  are  used  to  set  the  logic  level at  the  MAX14532E  CB0  and  CB1  inputs,  respectively. Jumper  JU4  is  used  for  either  VBUS  detection  or  setting CB0. See Table 3 for proper routing of the signals applied at connectors J1-J6.

<!-- image -->

Note: When connecting a USB peripheral device at ports J3 or J4, the respective DC-blocking capacitors should not be installed. When interfacing an audio jack at connector J5 or J6, a USB peripheral device should not be connected at ports J3 or J4, respectively.

## VBUS Detection (JU4)

Jumper JU4 and port J1 are used for VBUS detection when  interfacing  connector  J1  directly  to  a  USB  port. Install a shunt at jumper JU4 to enable the VBUS detection function. See Table 4 for proper jumper JU4 configuration  for  enabling  the  MAX14532E  IC  VBUS  detection function,  as  well  as  JU2  and  JU3  positions.  Also,  refer to  the  MAX14531E-MAX14534E  IC  data  sheet  for  the specified  VBUS  detect  threshold  (VVBDET)  and  additional information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX14532E Evaluation Kit

Figure 1. MAX14532E EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX14532E Evaluation Kit

Figure 2. MAX14532E EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX14532E EV Kit PCB Layout-Component Side

Figure 4. MAX14532E EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX14532E Evaluation Kit

Figure 5. MAX14532E EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 6. MAX14532E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->