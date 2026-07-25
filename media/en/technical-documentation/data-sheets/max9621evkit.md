<!-- lastmod 2022-08-03 -->
## General Description

The MAX9621 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX9621 dual,  2-wire  Hall-effect  sensor  interface  with  analog and  digital  outputs  in  a  10-pin F MAX M surface-mount package. The EV kit features two on-board analog Halleffect  sensors,  demonstrates  BAT  supply  pin  isolation, and digital logic for driving status LEDs. Input power to the EV kit circuit can be supplied by a 5.5V to 18V DC source.

The MAX9621 EV kit circuit can be configured to demonstrate the MAX9621's Hall input short-to-ground and 60V fault-protection  feature.  The  EV  kit  also  demonstrates the MAX9621's analog output and filtered digital output features for each sensor input. The EV kit's PCB features an 8-pin, dual-row header to facilitate interfacing with a user's external system.

<!-- image -->

## MAX9621 Evaluation Kit

## Features

- S 5.5V to 18V Operating Voltage Range
- S Up to 60V Fault Protection
- S Features Two On-Board 2-Wire Hall-Effect Sensors
- S Evaluates Sensor Short-to-Ground Fault Conditions
- S Demonstrates Adjustable Input Current Threshold
- S Demonstrates Analog Output Feature
- S Two Digital Output Status LED Indicators
- S Demonstrates Reverse-Supply Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9621EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1            |     1 | 2.2 F F Q 10%, 100V X5R ceramic capacitor (1812) TDK C4532X7R2A225K   |
| C2, C5, C7    |     3 | 0.1 F F Q 10%, 100V X7R ceramic capacitors (0805) TDK C2012X7R2A104K  |
| C3, C4        |     2 | 0.01 F F Q 10%, 100V X7R ceramic capacitors (0603) TDK C1608X7R2A103K |
| C6            |     1 | 1 F F Q 10%, 25V X5R ceramic capacitor (0805) TDK C2012X5R1E105K      |
| D1            |     1 | 100V, 200mA diode (SOD-123) Central Semi CMHD4448 (Top Mark: C48)     |
| D2, D3        |     2 | Green LEDs (0603)                                                     |
| J1            |     0 | Not installed, 2 x 4-pin header                                       |
| JU1, JU4, JU5 |     3 | 2-pin single-row headers                                              |
| JU2, JU3      |     2 | 5-pin 4-way headers                                                   |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| JU6, S3, S4   |     0 | Not installed, 2-pin single-row headers                                      |
| R1            |     1 | 61.9k I Q 1% resistor (0603)                                                 |
| R2, R3        |     2 | 4.99k I Q 1% resistors (0603)                                                |
| R4, R5, R8    |     3 | 100k I Q 5% resistors (0603)                                                 |
| R6, R7        |     2 | 240 I Q 5% resistors (0603)                                                  |
| S1, S2        |     2 | 2-wire Hall-effect switch (SIP-3) Allegro A1140EUA-T                         |
| U1            |     1 | Dual, 2-wire Hall-effect sensor interface (10 F MAX) Maxim MAX9621AUB+       |
| U2            |     1 | Automotive linear regulator (6 TDFN-EP*) Maxim MAX6765TTLD2+ (Top Mark: AQB) |
| U3            |     1 | Triple buffer gate (8 SSOP)                                                  |
| -             |     5 | Shunts (JU1-JU5)                                                             |
| -             |     1 | PCB: MAX9621 EVALUATION KIT+                                                 |

## MAX9621 Evaluation Kit

## Component Suppliers

| SUPPLIER                    | PHONE        | WEBSITE               |
|-----------------------------|--------------|-----------------------|
| Central Semiconductor Corp. | 631-435-1110 | www.centralsemi.com   |
| TDK Corp.                   | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9621 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX9621 EV kit
- One 5.5V to 18V DC power supply
- One magnet

circuit can be supplied by a 5.5V to 18V DC source. A 0 to 60V DC source can be used to evaluate the faultprotection capability of the device.

Do not reverse the VBAT and GND connections. The only purpose for diode D1 is to evaluate the MAX9621 with a diode-isolated BAT supply pin.

Using jumpers JU2 and JU3, the EV kit circuit can be configured  to  evaluate  the  MAX9621's  short-to-ground and 60V fault-protection features. Resistors R2 and R3 convert  the  MAX9621's  analog  1-to-20  current  mirror signal to a voltage for the AOUT1 and AOUT2 outputs, respectively.  Resistors  R4  and  R5  pull  up  the  DOUT1 and  DOUT2  digital  outputs  to  VCC  (5V),  respectively. Jumpers  JU4  and  JU5  can  be  used  to  disable  this feature. The EV kit's PCB is designed with 1oz copper and features an 8-pin dual-row header (J1) footprint to facilitate interfacing with external systems or monitoring.

## External Power Supply

The MAX9621 EV kit is powered by a user-supplied 5.5V to 18V DC power supply connected between VBAT and GND.  Jumpers  JU2  and  JU3  can  be  utilized  to  emulate  a  short-to-VBAT, a short-to-GND Hall output, or an open condition. See the S1/S2 Hall-Effect Sensors and External-User Sensor Evaluation section  for  more  information.

During the emulation of a short to GND, the MAX9621 EV  kit  draws  substantial  shorting  current  until  the  EV kit  turns off the shorted input. The shorting current can reach a peak of 100mA, and the entire event lasts 1.2 F s. Many common regulated lab power supplies overshoot in  response to a large, short-term current pulse. When evaluating the short-to-GND fault, it is recommended to use an unregulated supply (e.g., wet-cell battery).

## SLEEP and Enable Operation

The MAX9621 EV kit features a jumper to enable or place U1 in sleep mode. Jumper JU1 places U1 in sleep mode when the shunt is removed. Installing the shunt enables U1. Refer to the Sleep Mode Input ( SLEEP ) section in the MAX9621 IC data sheet for information. See Table 1 for jumper JU1 settings.

## Procedure

The MAX9621 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  installed  across  jumpers  JU1 (enabled), JU4, and JU5 (digital outputs pulled up to VCC).
- 2)  Verify that a shunt is installed across pins 1-3 of jumpers JU2 and JU3 (U1 inputs connected to Hall sensors).
- 3)  Connect the DC power supply between the MAX9621 EV kit's VBAT and GND pads.
- 4)  Turn on the DC power supply and set it to 12V, then enable the power-supply output.
- 5)  Move  the  magnet  in  front  of  Hall-effect  sensors  S1 and then S2. Observe the illumination of the DOUT1 and DOUT2 green LEDs (D2 and D3), respectively.
- 6)  The AOUT1, AOUT2, and adjacent GND pad can be used to determine the current drawn by the respective  Hall  sensor.  See  the  A nalog  Outputs  (AOUT1, AOUT2) section for more information.

## Detailed Description of Hardware

The  MAX9621  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX9621  dual,  2-wire Hall-effect sensor interface IC in a 10-pin surface-mount F MAX package. Included on the EV kit circuit  are  two analog  Hall-effect  sensors  (S1,  S2),  a  BAT  supply isolation  diode  (D1),  and  digital  logic  (U3)  for  driving digital  status  LEDs  (D2,  D3).  The  EV  kit  also  features a  MAX6765T  LDO  voltage  regulator  (U2)  for  powering the  digital  logic  (5V).  ICs  U2  and  U3  are  typically  not required  in  a  sensor  design  and  are  only  provided  to ease evaluation of the EV kit. Input power to the EV kit

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## S1/S2 Hall-Effect Sensors and External-User Sensor Evaluation

The MAX9621 EV kit has two on-board analog Hall-effect sensors (S1, S2). Jumpers JU2 and JU3 provide a convenient way to evaluate the MAX9621 with the on-board sensors,  emulate  different  fault  conditions,  or  evaluate different user-supplied Hall-effect sensors. Additionally, header PCB pads S3 and S4 can be utilized to interface with user-supplied sensors. Pin 2 of header PCB pads S3  and  S4  are  the  external  sensor  GND  connections. See Table 2 for configuring the respective sensor evaluation.

## Digital Outputs (DOUT1, DOUT2) and Indicating LEDs

The  MAX9621  has  two  digital  outputs  (DOUT1  and DOUT2) and the EV kit circuit features two green LEDs (D2  and  D3)  to  indicate  the  digital  output  status.  The DOUT1 signal is pulled up to VCC by resistor R4 and jumper  JU4,  while  LED  D2  indicates  the  status.  The DOUT2 signal is pulled up to VCC by resistor R5 and

## Table 1. SLEEP and Enable (JU1)

| SHUNT POSITION   | SLEEP PIN                | U1 OPERATION   |
|------------------|--------------------------|----------------|
| Installed*       | Connected to VCC         | Enabled        |
| Not installed    | Internally pulled to GND | Sleep mode     |

* Default position.

Table 2. Sensor Evaluation (JU2, JU3)

| SHUNT POSITION   | DESCRIPTION                                                       |
|------------------|-------------------------------------------------------------------|
| 1-2              | Emulates Hall input shorted to battery                            |
| 1-3*             | Demonstrates normal operation with on- board Hall sensor          |
| 1-4              | Emulates Hall input shorted to GND                                |
| 1-5              | Evaluates user-supplied Hall sensors at header PCB pads S3 and S4 |
| Open             | Emulates the open-circuit failure                                 |

<!-- image -->

## MAX9621 Evaluation Kit

jumper  JU5,  while  LED  D3  indicates  the  status.  The DOUT1 and DOUT2 signals are available at PCB pads. Refer to the MAX9621 IC data sheet for additional information on the MAX9621 DOUT1 and DOUT2 pins. See Tables  3  and  4  for  configuring  jumpers  JU4  and  JU5.

## Analog Outputs (AOUT1, AOUT2)

The  MAX9621  has  two  analog  outputs  (AOUT1  and AOUT2)  to  indicate  the  respective  Hall-effect  sensor operating  current.  Resistors  R2  and  R3  convert  the MAX9621's  analog  output  current  to  a  voltage  for  the respective output. PCB pads are provided on the EV kit for evaluating these voltages at the AOUT1 and AOUT2 outputs. To determine the current drawn by the respective Hall sensor, use the following equation:

<!-- formula-not-decoded -->

where VAOUT\_ is the AOUT\_ voltage and IN\_ is the sensor current in milliamps. Refer to the MAX9621 IC data sheet for additional information on the MAX9621 AOUT1 and AOUT2 pins.

## Table 3. DOUT1 Pullup (JU4)

| SHUNT POSITION   | DOUT1 PIN                            | DOUT1 SIGNAL     |
|------------------|--------------------------------------|------------------|
| Installed*       | Connected to VCC through resistor R4 | Pulled up to VCC |
| Not installed    | Indeterminate                        | Not pulled up    |

* Default position.

## Table 4. DOUT2 Pull Up (Jumper JU5)

| SHUNT POSITION   | DOUT2 PIN                            | DOUT2 SIGNAL     |
|------------------|--------------------------------------|------------------|
| Installed*       | Connected to VCC through resistor R5 | Pulled up to VCC |
| Not installed    | Indeterminate                        | Not pulled up    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9621 Evaluation Kit

Figure 1. MAX9621 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9621 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9621 Evaluation Kit

Figure 3. MAX9621 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9621 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

5