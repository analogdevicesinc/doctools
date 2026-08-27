<!-- lastmod 2022-08-02 -->
## MAX25400 Evaluation Kit

## General Description

The  MAX25400  evaluation  kit  (EV  kit)  demonstrates the  MAX25400 automotive Hi-Speed USB 2.0 protector switch  IC,  featuring  overvoltage  protection  (OVP),  electrostatic  discharge  (ESD)  protection,  and  undervoltage lockout (UVLO) for automotive USB applications.

The device protects the D+ and D- data lines from overvoltage  conditions,  such  as  a  short-to-battery  and  ESD events.  All  faults  can  be  monitored  using  the FAULT output signal.

The device can pass high-speed USB differential (D+ and D-) signals up to 480Mbps using low 3.3Ω R ON (typ) data switches. The EV kit is powered by the USB BUS. An onboard MAX15007A automotive regulator provides the IN reference voltage.

## Features

- Protects D+ and D- Signals from Overvoltages Up to 18V and ESD Events
- USB BUS Undervoltage Lockout
- Passes 480Mbps USB Data Signals
- Low On-Resistance · D+ and D-: 3.3Ω (typ)
- FAULT Output Signal
- USB Powered
- Fully Assembled and Tested
- Evaluates the MAX25400 IC in a 12-Pin TQFN Package

Ordering Information appears at end of data sheet.

Evaluates: MAX25400

## Quick Start

## Required Equipment

- MAX25400 EV kit
- 5V, 2A DC power supply (Supply A)
- 18V, 2A DC power supply (Supply B)
- Logic function generator
- Oscilloscope

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Use  the  following steps to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Verify that the following shunt is installed:
- J1: Pins 1-2 (IN connected to on-board 3.3V reference)
- 2) Set the Supply A output to 5V and disable the output.
- 3) Set  the  logic  function  generator  as  follows:  3V P-P , 1.5V DC offset square wave, 500kHz, and disable the output.
- 4) Connect the Supply A positive output to the VBUS test point on the EV kit and connect the supply ground to the GND wire loop.
- 5) Using  a  Type  A  USB  receptacle  inserted  into  J3, connect the logic function generator to D+ and GND.
- 6) Enable the power-supply.
- 7) Enable the function generator output.
- 8) Use the oscilloscope to probe the HVD+ test point.
- 9) Verify that the part is powered and that the waveform on HVD+ is a 500kHz square wave and is approxi -mately 3V P-P .
- 10)  Momentarily touch the HVD+ or HVD- test point on the EV kit with the voltage probe from the Supply B positive output. The FAULT signal asserts a logic-low while the fault is present.

<!-- image -->

## Detailed Description of Hardware

The MAX25400 EV kit demonstrates the MAX25400 automotive Hi-Speed USB 2.0 protector switch IC, featuring OVP, ESD protection, and UVLO protection for automotive USB applications.

The IC protects the D+ and D- data lines from overvoltage conditions, such as a short-to-battery up to 18V and ESD events up to 25kV (air) and 8kV (contact). The OVP feature protects the D+ and D- lines against high-voltage conditions  such  as  a  short-to-BUS.  The  UVLO  feature insures the externally powered VBUS is valid before turn -ing the data switches on. All faults can be monitored using the FAULT PCB pad, pulled up to IN through resistor R1.

The device can pass high-speed USB differential (D+ and D-) signals up to 480Mbps, and a 3.3Ω R ON  (typ) for the D+ and D- data lines. The EV kit is powered by the USB BUS. The 3.3V automotive regulator (U2, MAX15007A) provides  an  on-board  IN  reference  voltage. A  user  can provide a 3V to 3.6V IN reference voltage across the VIN and GND PCB pads. The MAX25400 (U1) IC's automotive operating temperature range is from -40°C to +105°C.

Evaluates: MAX25400

## Jumper Settings

## IN Reference Voltage Selection (J1)

Jumper JU1 on the EV kit selects the reference voltage for the device's IN pin. IN can either be supplied by the USB BUS through the on-board automotive 3.3V regulator  (U2,  MAX15007A),  or  by  a  user-supplied  reference voltage.  Test  points  EXT\_IN  and  GND  are  provided  to supply the device with an external 3V to 3.6V reference voltage. See Table 1 for proper J1 jumper settings.

## Table 1. MAX25400 IN Reference Voltage Selection (J1)

| SHUNT POSITION   | IN PIN                     |
|------------------|----------------------------|
| 1-2              | Connected to on-board LDO  |
| 2-3              | Connected to IN test point |
| Not installed    | Unconnected                |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25400EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAX25400 EV Bill of Materials

| REF DES                    | MFG PART #         | MANUFACTURER                    | DESCRIPTION                                                                                                                                                                            |
|----------------------------|--------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BUMPER1-BUMPER4            | SJ-5306(CLEAR)     | 3MELECTRONIC SOLUTIONS DIVISION | BUMPER; CLEAR-HEMISPHERICAL SHAPE EVKIT EH0875; 0.375D/0.15BH; RESILIENT ELASTOMER POLYURETHANE                                                                                        |
| C3, C5                     | CC0402KRX5R6BB105  | YAGEO                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                |
| C4                         | GCM21BC71C106KE35  | MURATA                          | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                                                                                        |
| C6                         | GCM219R71C105KA37  | MURATA                          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                               |
| EXT_IN, FAULTB, GND1, GND2 | 5020               | KEYSTONE                        | EVKIT PART - MAXIM PAD; TEST POINT; PIN DIA=0.094IN; TOTAL LENGTH=0.350IN; BOARD HOLE=0.040IN; NONE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN |
| J1                         | TSW-103-23-G-S     | SAMTEC                          | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55 DEGC TO +125 DEGC                                                                                                            |
| J2                         | KUSBX-SMT2AP5S-B   | KYCON                           | CONNECTOR; MALE; SMT; USB A-TYPE PLUG; RIGHT ANGLE; 4PINS                                                                                                                              |
| J3                         | KUSBX-SMT-AS1N-W30 | KYCON                           | CONNECTOR; FEMALE; SMT; USB A-TYPE RECEPTACLE; RIGHT ANGLE; 4PINS                                                                                                                      |
| R2                         | ERJ-2RKF1002       | PANASONIC                       | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                 |
| SHUNT_J1                   | QPC02SXGN-RC       | SULLINS ELECTRONICS CORP.       | CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                                       |
| U1                         | MAX25400GTCA/V+    | MAXIM                           | EVKIT PART - IC; AUTOMOTIVE HI-SPEED USB 2.0 PROTECTOR; PACKAGE OUTLINE DRAWING: 21-0136; LAND PATTERN NUMBER: 90-0019; PACKAGE CODE: T1233+5C                                         |
| U2                         | MAX15007AATT+      | MAXIM                           | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                                                                                                   |
| VBUS                       | 5008               | KEYSTONE                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST     |
| VDD                        | 5005               | N/A                             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISHED                                                                  |

Evaluates: MAX25400

## MAX25400 EV Kit Schematic

<!-- image -->

Evaluates: MAX25400

## MAX25400 EV Kit PCB Layouts

MAX25400 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25400 EV Kit PCB Layout-Top

<!-- image -->

MAX25400 EV Kit PCB Layout-GND\_SIG1

<!-- image -->

## MAX25400 EV Kit PCB Layouts (continued)

MAX25400 EV Kit PCB Layout-PWR

<!-- image -->

MAX25400 EV Kit PCB Layout-Bottom

<!-- image -->

## MAX25400 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

<!-- image -->

Evaluates: MAX25400