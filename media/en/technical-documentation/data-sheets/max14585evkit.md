<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

## General Description

The MAX14585 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX14585  high-ESD-protected double-pole/double-throw  (DPDT)  switch.  The  EV  kit  is designed  to  demonstrate  the  MAX14585  used  in  USB 2.0  Hi-Speed-compliant  switching  applications.  The  EV kit circuit routes a multiplexed signal from one USB port to  another  USB  port  and  routes  an  audio  signal  to  a headphone jack.

The EV kit PCB comes with a MAX14585EVB+ installed and can also be used to evaluate the MAX14585A.

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C1, C2, C9    |     3 | 0.1 F F Q 10%, 50V X5R ceramic capacitors (0603) Murata GRM188R71H104K         |
| C3, C10       |     2 | 1 F F Q 10%, 35V X5R ceramic capacitors (0603) Taiyo Yuden GMK107BJ105K        |
| C4            |     1 | 10 F F Q 10%, 35V X7R ceramic capacitor (1206) Taiyo Yuden GMK316BJ106K        |
| C5            |     0 | Not installed, ceramic capacitor (0805)                                        |
| C6, C7        |     2 | 220 F F Q 10%, 6.3V low-ESR tantalum capacitors (Case D) KEMET B45197A1227K409 |
| C8            |     1 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K            |
| D1            |     1 | Red LED (0603)                                                                 |
| FB1, FB2, FB3 |     3 | Ferrite beads (0603) Murata BLM18AG221SN1D                                     |
| GND           |     2 | Black test points                                                              |
| J1            |     1 | USB micro-B right-angle connector                                              |

<!-- image -->

## Features

- S USB Powered (Cable Included) or External Power Supplies
- S Complete USB 2.0 Hi-Speed (480Mbps) Switching Circuit
- S Routes Data/Audio Signals
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                             |
|-------------------------|-------|-------------------------------------------------------------------------|
| J2, J4                  |     2 | USB type-A right-angle connectors                                       |
| J3                      |     1 | 3.5mm audio jack connector                                              |
| JU1, JU2, JU4, JU5, JU6 |     5 | 3-pin headers                                                           |
| JU3                     |     1 | 4-pin header                                                            |
| R1                      |     1 | 270 I Q 5% resistor (0805)                                              |
| R2, R3                  |     0 | Not installed, resistors (0603)                                         |
| R4, R5                  |     2 | 0 I Q 5% resistors (0805)                                               |
| TP1                     |     1 | Red test point                                                          |
| TP2                     |     1 | White test point                                                        |
| U1                      |     1 | DPDT negative-rail switch (10 UTQFN) Maxim MAX14585EVB+ (Top Mark: AAY) |
| U2                      |     1 | 3.3V LDO regulator (8 SO-EP) Maxim MAX15006AASA+                        |
| -                       |     1 | USB type-A male cable to USB micro-B cable                              |
| -                       |     6 | Shunts (JU1-JU6)                                                        |
| -                       |     1 | PCB: MAX14585 EVALUATION KIT                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify  that  shunts  are  installed  in  their  default  positions, as shown in Table 1.
- 2)  Connect  the  USB  cable  from  the  PC  to  the  micro-B USB connector J1 on the EV kit.
- 3)  Verify that LED D1 is on.
- 4)  Connect a USB 2.0 device to the USB type-A connector (J2).
- 5)  Verify that the USB 2.0 device is detected by the PC.
- 6)  Place a shunt across pins 1-2 of jumper JU3.
- 7)  Connect a USB 2.0 device to the USB type-A connector (J4).
- 8)  Verify that the USB 2.0 device is detected by the PC.
- 9)  The EV kit is now ready for further testing.

Table 1. Default Jumper Settings

| JUMPER             | SHUNT POSITION   |
|--------------------|------------------|
| JU1, JU2, JU5, JU6 | 1-2              |
| JU3                | 1-3              |
| JU4                | 2-3              |

<!-- image -->

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX14585 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX14585 EV kit (USB type-A-to-USB-micro-B cable and stereo 3.5mm male-to-male adapter are included)
- 5V, 100mA DC power supply
- User-supplied PC with a spare Hi-speed USB port
- Up  to  two  USB  2.0  Hi-speed/full-speed  peripheral devices (e.g., USB 2.0 flash drive)
- Stereo audio source (e.g., MP3 player)
- Pair of stereo headphones

## Detailed Description of Hardware

The MAX14585 EV kit provides a proven layout for the MAX14585 and demonstrates devices used in USB 2.0 Hi-speed switching applications. The EV kit provides one micro-B  (J1)  and  two  type-A  (J2,  J4)  USB  connectors. The EV kit also provides one 3.5mm stereo audio input/ output connector (J3).The EV kit requires an active USB port or an external 5V DC supply for operation.

The device features a VBUS detection (VB) input that can handle  voltages  up  to  30V  and  automatically  switches the USB signal path to port J2 upon detection of a valid VBUS  voltage.  When  operating  the  EV  kit  with  VCC voltages  less  than  2.7V,  the  VB  input  also  serves  as  a secondary input power source used to power the device (VB &gt; 4.5V).

The EV kit routes bidirectional signals from type-A USB connectors J2 and J4 to micro-B USB connector J1. The device's ANO\_ channels feature a -1.8V negative signal capability and can be used to route audio signals from audio  connector  J3  to  test  points  TP1,  TP2,  and  GND. Capacitors C6 and C7 provide DC blocking of the audio signals  applied  at  connector  J3.  The  device  features internal shunt resistors on the audio path to reduce clicks and pops heard at the output. See the Interfacing Audio Signals section for additional information. All data signal traces to USB ports J1, J2, and J4 are 90 I differential controlled-impedance traces.

The EV kit can also be used to evaluate the MAX14585A, with IC replacement of U1.

## Power Supplies

The EV kit derives its power from USB port J1 or an external voltage applied at the EXT\_5V and GND PCB pads. The VBUS and EXT\_5V power planes set the 5V USB port voltages  for  ports  J2  and  J4  and  set  the  input-voltage source for the MAX15006A LDO regulator (U2).

Place a shunt across pins 1-2 on jumper JU1 to operate the EV kit using port J1 bus power. Install a shunt across pins 2-3 to operate the EV kit using an external 5V supply. See Table 2 for JU1 configuration.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

## VCC Power Supply

Jumper  JU2  selects  the  power  source  for  the  device's VCC input using the on-board regulated 3.3V LDO (U2) or an external supply applied at the EXT\_VCC and GND PCB pads.  LED  D1  illuminates  when  a  valid  voltage  is applied at VCC. See Table 3 for jumper JU2 configuration.

The  device's  VB  input  can  also  be  used  as  the  main power source for the device when a voltage is not applied at the VCC input. Under this condition, LED D1 is off.

## Ports J2 and J4 Input Power Configuration

Jumpers JU5 and JU6 select the bus power source for the J2 and J4 USB ports, respectively. The ports are powered from the VBUS or EXT\_5V power planes. See Tables 4 and 5 for configuring ports J2 and J4 power source.

Table 2. Input Power Configuration (JU1)

| SHUNT POSITION   | INPUT POWER SOURCE   | EV KIT POWERED BY                                                       |
|------------------|----------------------|-------------------------------------------------------------------------|
| 1-2*             | VBUS                 | USB port J1.                                                            |
| 2-3              | EXT_5V               | User-supplied 5V power supply connected to the EXT_5V and GND PCB pads. |

Table 3. VCC Input Selection (JU2)

| SHUNT POSITION   | VCC PIN                | VCC POWERED BY                                                                                 |
|------------------|------------------------|------------------------------------------------------------------------------------------------|
| 1-2*             | Connected to U2 output | On-board 3.3V LDO regulator.                                                                   |
| 2-3              | Connected to EXT_VCC   | User-supplied 2.7V to 5.5V power supply connected to the EXT_ VCC and GND PCB pads.            |
| Not installed    | Disconnected           | Device powered by J2 bus voltage; shunt installed across pins 1-3 of jumper JU3 (see Table 6). |

## Table 4. Port J2 VBUS Power Source (JU5)

| SHUNT POSITION   | J2 VBUS PIN                    | PORT J2 POWERED BY                                                      |
|------------------|--------------------------------|-------------------------------------------------------------------------|
| 1-2*             | Connected to port J1 power bus | Port J1.                                                                |
| 2-3              | Connected to EXT_5V            | User-supplied 5V power supply connected to the EXT_5V and GND PCB pads. |

## Table 5. Port J4 VBUS Power Source (JU6)

| SHUNT POSITION   | J4 VBUS PIN                    | PORT J4 POWERED BY                                                      |
|------------------|--------------------------------|-------------------------------------------------------------------------|
| 1-2*             | Connected to port J1 power bus | Port J1.                                                                |
| 2-3              | Connected to EXT_5V            | User-supplied 5V power supply connected to the EXT_5V and GND PCB pads. |

* Default position.

<!-- image -->

## USB Switch Control (AOR, VB)

The  multiplexed  signals  from  the  micro  type-B  USB port J1 are routed to/from type-A USB ports J2 and J4, depending on the state of the AOR and VB inputs. Audio signals can also be routed from the 3.5mm jack (J3) to test points TP1, TP2, and GND. Jumper JU3 is used for VBUS detection and for setting the logic level at the VB input.  Jumper  JU4  is  used  to  set  the  logic  level  at  the AOR input. See Table 6 for jumper configurations for routing of the signals applied at connectors J1, J2, and J3.

Resistors R4 and R5 should be removed when connecting  a  USB  peripheral  device  at  port  J4  for  routing  data signals. For optimal data performance, remove test points TP1 and TP2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Interfacing Audio Signals

The  EV  kit  requires  an  external  5V  supply  applied  at the EXT\_5V and GND PCB pads when evaluating audio signals. When evaluating audio signals at connector J3, disconnect port J1 from the PC USB port and verify that a USB peripheral device is not connected at port J4.

Audio  signals  are  routed  from  audio  connector  J3  to test  points  TP1,  TP2,  and  GND.  Apply  the  headphone left, right, and ground connections to the TP1, TP2, and GND test points, respectively. Insert an audio source at connector J3. Verify  that  the  audio  signal  is  present  at the headphone.

<!-- image -->

## VBUS Detection Operation (VB)

The device features a VBUS detection input (VB), which connects the signal at J4 or J3 to J1 or the test points, respectively, when VB exceeds the 3.3V threshold. The VB input can also be used as the power source for the device when VB &gt; 4.5V and a valid voltage source is not present at the VCC input. The VB input is capable of handling voltages up to 28V for higher VBUS applications.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

Table 6. USB and Audio Signal Routing (JU3, JU4)

| SHUNT POSITION         | SHUNT POSITION   | USB AND AUDIO SIGNAL ROUTING                                                            |
|------------------------|------------------|-----------------------------------------------------------------------------------------|
| JU3 (VB)               | JU4 (AOR)        | USB AND AUDIO SIGNAL ROUTING                                                            |
| 1-2                    | 1-2              | J4 data signal routed to J1 or J3 audio signal routed to test points TP1, TP2, and GND. |
| 1-2                    | 2-3              | J2 signal routed to J1.                                                                 |
| 1-3* See Table 3 (JU2) | 1-2              | J4 data signal routed to J1 or J3 audio signal routed to test points TP1, TP2, and GND. |
| 1-3* See Table 3 (JU2) | 2-3*             | J2 signal routed to J1.                                                                 |
| 1-4                    | X                | J4 data signal routed to J1 or J3 audio signal routed to test points TP1, TP2, and GND. |

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

<!-- image -->

Figure 1. MAX14585 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

<!-- image -->

Figure 2. MAX14585 EV Kit Component Placement GuideComponent Side

Figure 3. MAX14585 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14585 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

Figure 5. MAX14585 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX14585 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14585EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14585 Evaluation Kit

## Evaluates: MAX14585/MAX14585A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9