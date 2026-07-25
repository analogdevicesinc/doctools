<!-- lastmod 2022-08-04 -->
## MAX16972A Evaluation Kit

## General Description

The  MAX16972A  evaluation  kit  (EV  kit)  demonstrates the  MAX16972  and  MAX16972A  automotive  USB  2.0 protector ICs. The ICs support Hi-Speed, full-speed, and low-speed  operation.  In  addition,  the  ICs  also  include integrated  circuitry  to  enable  fast  charging  for  consumer  devices  adhering  to  the  Apple ®   1A  dedicated charging  mode,  the  USB-IF  host-charger  port-detection protocol,  and  the  China  YD/T  1591-2009  standard. Dedicated  charging  modes  feature  autodetection,  which automatically selects the correct dedicated charging protocol for the connected portable device (PD). The IC part numbers with GEEB and GTEB suffixes also support inde -pendent control of the +5V bus per the USB-IF OTG specification, and add Apple 2.1A dedicated charging support.

Two EV kits are available: MAX16972AGTEVKIT# (TQFN  version)  and  MAX16972AGEEVKIT#  (QSOP  version),  which  come  with  the  MAX16972AGTEB/V+  and MAX16972AGEEB/V+ installed, respectively. These  userfriendly  EV  kits  can  be  connected  directly  to  a  USB  host port, thanks to the on-board MAX15007A automotive regulator  that  provides  the  IN  logic  power  supply.  Contact  the factory  for  free  samples  of  the  pin-compatible  variants  of the  MAX16972/MAX16972A  ICs,  which  offer  additional dedicated charging-mode  functionality and active-low enable logic.

Apple is a registered trademark of Apple Inc.

Evaluates: MAX16972/MAX16972A

## Features

- 900MHz Bandwidth USB 2.0 Data Switches
- Integrated Dedicated-Charging and Host-Charger Port-Detection Circuitry
- Supports Charging Current from 500mA to 3A
- USB 2.0-Compliant LS/FS and HS Operation
- Short-to-Battery, Short-to-Ground, and Overcurrent Protection on Protected HVBUS Output
- Short-to-Battery and Short-to-HVBUS Protection on Protected HVD+ and HVD- Outputs
- USB-Powered or User-Supplied Power Supplies
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Required Equipment

- MAX16972A EV kit
- 5V, 3A DC power supply (Supply A)
- 18V, 2A DC power supply (Supply B)
- 10Ω, 5W resistor (Load A) and 10Ω, 40W adjustable resistor (Load B)
- Voltmeter or oscilloscope

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Set  the  SW1-EN  switch  to  the  1  position  and  the SW1-CHEN switch to the 0 position. Verify that the shunt on jumper JU7 is installed across pins 1-2.
- 2) Connect Load A between the red HVBUS test point and the GND1 test point on the EV kit.
- 3) Set the Supply A output to 5V and disable the output.
- 4) Connect the positive terminal of Supply A to the red VBUS test point on the EV kit.
- 5) Connect Supply A to the black GND2 test point on the EV kit.
- 6) Set the Supply B output to 18V and the current limit to 2A. Disable the output.
- 7) Connect the Supply B ground to the GND1 test point. Connect the positive  terminal  of  Supply  B  to  a  test lead (18V test lead) for later use.
- 8) Connect  the  voltmeter  or  the  oscilloscope  ground reference to the GND1 test point.
- 9) Enable the Supply A 5V power supply.
- 10)  Enable the Supply B 18V power supply.
- 11)  Use the voltmeter or oscilloscope to  probe  the HVBUS test point. Verify that voltage is 5V.
- 12)  Verify that the Supply A output current from the power supply is approximately 500mA.

## Evaluates: MAX16972/MAX16972A

## The following steps generate the overvoltage event on the protected HVD- and HVD+ pins (high-voltage side):

- 13)  Connect the 18V test lead to the D- or D+ data lines on the J1 USB connector. Observe that the Supply A  output  current  decreases  to  approximately  0mA. At the same time, observe with the voltmeter that the voltage on the FAULT PCB pad changes to 0V, indicating a fault condition.
- 14) Remove the 18V test lead from the data lines. Observe that the Supply A output current recovers to 500mA and the  voltage  on  the FAULT PCB pad changes back to 3.3V, indicating the removal of the fault condition.

## The  following  steps  generate  the  overvoltage  event on the protected HVBUS pin (high-voltage side):

- 15)  Connect the 18V test lead to the HVBUS test point. Observe that the Supply A output current decreases to approximately 0mA. At the same time, observe that the voltage on the FAULT PCB pad changes to 0V, indicating a fault condition.
- 16)  Remove the 18V test lead from the HVBUS test point. Observe  that  the  Supply A  output  current  recovers to  500mA  and  the  voltage  on  the FAULT PCB  pad changes back to 3.3V, indicating the removal of the fault condition.

## The  following  steps  generate  the  short-to-ground event on the protected HVBUS pin (high-voltage side):

- 17)  Connect the HVBUS test point to the GND1 test point with  a  test  lead.  Observe  that  the  Supply A  output current  decreases  to  approximately  30mA.  At  the same time,  observe  that  the  voltage  on  the FAULT PCB pad changes to 0V, indicating a fault condition.
- 18)  Remove  the  test  lead  between  the  HVBUS  and GND1  test  points.  Disconnect  and  then  reconnect Load  A.  Observe  that  the  Supply  A  output  current recovers  to  500mA  and  the  voltage  on  the FAULT PCB pad changes back to 3.3V, indicating the removal of the fault condition.

## The following steps generate the undervoltage event on the protected HVBUS pin (high-voltage side):

- 19) Set the adjustable Load B to its maximum value of approximately 10Ω.
- 20)  Replace  Load  A  with  Load  B  and  verify  that  the Supply A output current is approximately 500mA.
- 21)  Decrease  the  Load  B  value  until  the  Supply A  output  current  approaches  2.9A  (approximately  20% above forward-current limit) and suddenly changes to approximately 30mA. Observe that the voltage on the FAULT PCB pad changes to 0V, indicating a fault condition.
- 22) Increase Load B back to its maximum  value. Disconnect and then reconnect Load B. Observe that the Supply A output current recovers to 500mA and the voltage on the FAULT PCB pad changes back to 3.3V, indicating the removal of the fault condition.

## The following steps generate the undervoltage event on the BUS pin:

- 23)  Decrease Supply A to approximately 4.3V and observe that  the  output  current  decreases  to  approximately 0mA. At the same time, observe that the voltage on the FAULT PCB pad changes to 0V, indicating a fault condition.
- 24) Increase  Supply A  back  to  5V  and  observe  that  the output current recovers to 500mA and the voltage on the FAULT PCB pad changes back to 3.3V, indicating the removal of the fault condition.

## The following steps generate the low R ISET  event on the ISET pin:

- 25)  Connect the ISET test point to the GND2 test point with  a  test  lead.  Observe  that  the  Supply A  output current decreases to approximately 0mA. At the same time, observe that the voltage on the FAULT PCB pad changes to 0V, indicating a fault condition.
- 26)  Remove the test lead between the ISET and GND2 test points. Observe that the Supply A output current recovers  to  500mA  and  the  voltage  on  the FAULT PCB pad changes back to 3.3V, indicating the removal of the fault condition.

## Additional Evaluation (Charging a Device in DCP Mode)

- 27)  To test the dedicated charging functionality, a portable device (PD) is needed that supports USB-IF BC1.2

## Evaluates: MAX16972/MAX16972A

DCP,  China  YD/T1591-2009,  or  Apple  dedicated charging.

- 28)  To place the MAX16972AGEEB/V+ in Apple 1A/DCP autodetect  mode,  set  the  SW1-EN  switch  to  the  0 position and the SW1-CHEN  switch to the 1 position. To place the MAX16972GEEA/V+ in Apple 2.1A/DCP  autodetect  mode,  set  both  the  SW1-EN and the SW1-CHEN switch to the 1 position.
- 29)  The  ISET  resistor  setting  should  allow  a  charging current  that  is  equal  to  or  greater  than  the  PD's maximum charging  current.  The  EV  kit  comes  with a 15.4kΩ resistor installed in position R1 for a 2.37A (typ) current limit.
- 30)  Use the device's manufacturer-supplied USB cable to connect the PD to the EV kit. If the device charges with a current expected for fast-charge operation, the test  is  successful.  Note  that  most  PDs  that  support fast charge only charge at the maximum-rated charge current  under  very  specific  conditions  relating  to device temperature, battery level, and internal activity.

## Detailed Description of Hardware

The  MAX16972A  EV  kit  demonstrates  the  MAX16972 and  MAX16972A  family  of  automotive  USB  protection ICs.  This  product  family  features  integrated  fast-charge circuitry,  USB-IF  host-charger  port  detection,  and  offers overvoltage  and  high-ESD  protection  on  the  5V  bus and USB data lines. The 5V bus is also protected from overcurrent  and  short-to-ground  conditions,  and  the current limit can be set from 500mA to 1A.

The  USB  data-line  protection  consists  of  both  ESD and  overvoltage  protection  (OVP)  for  all  modes  of operation, when used with or without a USB transceiver.

The  HVBUS  short-to-battery  protection  is  implemented with  an  external  power  FET.  An  internal  charge  pump drives  the  gate  of  this  FET,  which  generates  a  7V (min)  gate-source  voltage.  If  HVBUS  short-to-battery protection is not required, remove the external FET and connect the HVBUS pin directly to the S\_DMOS pin.

Short-to-ground  and  overcurrent  protection  are  also provided on the protected HVBUS output, protecting the internal BUS power rail from overcurrent faults.

## MAX16972A Evaluation Kit

The  ICs  support  USB  Hi-Speed,  full-speed,  and  lowspeed operation, with all USB signal traces designed for 90Ω differential impedance.

## Forward Current Limit

The  ICs  enable  the  forward-current  limit  of  the  power switch to be set by a resistor connected on the ISET pin. The EV kit PCB ships with a 15.4kΩ resistor installed.

## Device Enable

Depending on the device under evaluation, the device's enable pin can be either active-high or active-low. Set the SW1-EN switch to the 1 position to set the enable pin high and to the 0 position to set the enable pin low. See Table 1 for SW1 settings.

## Charger-Detect Enable (CHEN)

Use CHEN to enable the IC's host-charging port-detection circuit. See Table 1 for SW1-CHEN settings.

## Table 1. Jumper/Switch Descriptions (SW1-EN, SW1-CHEN, JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                          |
|----------|------------------|----------------------------------------------------------------------|
| SW1-EN   | 0*               | EN or EN is set to logic-low                                         |
| SW1-EN   | 1                | EN or EN is set to logic-high                                        |
| SW1-CHEN | 0*               | CHEN is set to logic-low                                             |
| SW1-CHEN | 1                | CHEN is set to logic-high                                            |
| JU7      | 1-2*             | IN pin 3.3V input is connected to the on-board 3.3V regulator output |
| JU7      | 2-3              | IN pin 3.3V input is connected to the EXT_VIN test point             |

## Ordering Information

| PART              | TYPE                  |
|-------------------|-----------------------|
| MAX16972AGTEVKIT# | EV Kit - TQFN Version |
| MAX16972AGEEVKIT# | EV Kit - QSOP Version |

# Denotes RoHS compliant.

## Evaluates: MAX16972/MAX16972A

## Power Supplies

The  USB  transceiver  power  supply  is  set  through  the J2  USB connector or the VBUS and GND2 test points. The protected USB HVBUS is connected to the J1 USB connector and the HVBUS test point.

By  deault,  the  logic  power  supply  (IN)  is  provided  by the  on-board  MAX15007A 3.3V regulator. The user can also  apply  an  external  logic  power  supply  through  the EXT\_VIN  and  GND2  test  points  and  place  a  shunt  on jumper JU7 in the 2-3 position. See Table  1 for  jumper JU7 settings.

## Fault Conditions

The  fault-condition  pin  ( FAULT )  is  active-low.  A  pullup resistor (R5) is connected to the IN power supply on the EV kit board.

## MAX16972A EV Kit Bill of Materials

| DESGINATION            |   QTY | DESCRIPTION                                                                              |
|------------------------|-------|------------------------------------------------------------------------------------------|
| C1                     |     1 | 10μF ±10%, 25V X5R ceramic capacitor (1206) Murata GRM31CR61E106KE83L                    |
| C2, C11                |     2 | 0.1μF ±10%, 25V X7R ceramic capacitors (0603) Kemet C0603C104K3RALTU                     |
| C4                     |     1 | 100μF ±20%, 6.3V X6S ceramic capacitor (1210) Taiyo Yuden JMK325AC6107MM-T               |
| C6                     |     1 | 1μF ±10%, 16V X7R ceramic capacitor (0805) Taiyo Yuden EMK107B7105KA-T                   |
| C8,C9                  |     2 | 3.3μF ±10%, 25V X5R ceramic capacitor (0805) TDK CGA4J3X5R1E335M125AB                    |
| C12                    |     1 | Not installed, ceramic capacitor (0603)                                                  |
| C14, C15               |     2 | Not installed, ceramic capacitor (0402)                                                  |
| C16, C17               |     2 | Not installed, ceramic capacitor (0402)                                                  |
| D2                     |     1 | Not installed, zener diode (SOD123)                                                      |
| D_DMOS, G_DMOS, S_DMOS |     3 | Orange Miniature Test Points                                                             |
| EXT_VIN, HVBUS, VBUS   |     3 | Red Multipurpose PCB Test Points                                                         |
| GND1, GND2             |     2 | Black Multipurpose PCB Test Points                                                       |
| J1                     |     1 | USB type-A right-angle receptacle                                                        |
| J2                     |     1 | USB type-A right-angle plug                                                              |
| JU7                    |     1 | 3-pin header                                                                             |
| L1, L2                 |     2 | 0Ω 0402 resistors                                                                        |
| L3, L4                 |     2 | 0Ω 0402 resistors                                                                        |
| Q1                     |     1 | n-channel powermosfet 6TSOP                                                              |
| R1                     |     1 | 15.4kΩ ±1% 0603 resistor                                                                 |
| R2, R3, R5             |     3 | 100kΩ ±1% 0603 resistor                                                                  |
| R4                     |     1 | 1Ω ±5% 0603 resistor                                                                     |
| R6                     |     1 | 1kΩ ±5% 0603 resistor                                                                    |
| R7                     |     1 | 0Ω 0603 resistor                                                                         |
| SW1                    |     1 | 2-position miniature DIP Switch                                                          |
| U1                     |     1 | Automotive USB Protector 16 TQFN: Maxim MAX16972AGTEB/V+ 16 QSOP: Maxim MAX16972AGTEB/V+ |
| U2                     |     1 | Automotive 3.3V Regulator (8-SO-EP*) Maxim MAX15007AASA+                                 |
| FAULT, EN, CHEN, GND   |     4 | Thru-hole mount test point                                                               |
| -                      |     1 | Shunt                                                                                    |
| -                      |     1 | PCB: MAX16972 EVALUATION KIT+                                                            |

Figure 1. MAX16972A EV Kit Schematic (TQFN)

<!-- image -->

## MAX16972A EV Kit PCB Layout - TQFN Version

<!-- image -->

MAX16972A EV Kit Component Placement Guide (TQFN)Component Side

MAX16972A EV Kit PCB Layout (TQFN)-Component Side

<!-- image -->

MAX16972A EV Kit PCB Layout (TQFN)-Inner Layer 2

<!-- image -->

## MAX16972A EV Kit PCB Layout - TQFN Version (continued)

<!-- image -->

MAX16972A EV Kit PCB Layout (TQFN)-Inner Layer 3

<!-- image -->

MAX16972A EV Kit PCB Layout (TQFN)-Solder Side

## MAX16972A EV Kit PCB Layout - QSOP Version

MAX16972A EV Kit Component Placement Guide (QSOP)Component Side

<!-- image -->

MAX16972A EV Kit PCB Layout (QSOP)-Component Side

<!-- image -->

## MAX16972A EV Kit PCB Layout - QSOP Version (continued)

<!-- image -->

MAX16972A EV Kit PCB Layout (QSOP)-Inner Layer 2

MAX16972A EV Kit PCB Layout (QSOP)-Inner Layer 3

<!-- image -->

MAX16972A EV Kit PCB Layout (QSOP)-Solder Side

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX16972/MAX16972A