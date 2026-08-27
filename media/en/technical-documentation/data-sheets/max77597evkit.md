<!-- lastmod 2022-08-02 -->
## MAX77597 Evaluation Kit

## General Description

The MAX77597 evaluation kit (EV kit) demonstrates the MAX77597  synchronous  step-down  converter  IC  with integrated  switches.  The  EV  kit  operates  over  a  wide input range of 3.5V to 36V and can support loads up to 300mA. The EV kit comes standard with the 3.3V fixed output voltage version of the IC. It can be easily modified to evaluate the 5V fixed output version or the adjustable output voltage version.

The  EV  kit  includes  jumpers  to  enable  or  disable  the device,  as  well  as  to  select  either  forced-PWM  mode (FPWM) or skip-mode operation. A RESETB test point is available to monitor the voltage quality of the converter's output.

## MAX77597 EV Kit bird's eye view

<!-- image -->

<!-- image -->

## Features

- Evaluates Both Fixed-Output and Adjustable-Output Versions (3.3V Version Is Preinstalled)
- 3.5V to 36V Input Voltage Range
- 300mA Maximum Load
- Demonstrates 1.1µA Quiescent Current at 14V Input
- RESET Output Test Point
- Simple Two-Layer Board Serves as a Reference Design
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX77597

## Quick Start

## Required Equipment

- MAX77597 EV kit
- DC power supply capable of supplying 36V, 300mA
- Variable load capable of sinking 300mA DC  at 3.3V
- Two voltmeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Read all the steps before proceeding with step 1.

- 1) Verify that the IC is enabled by installing a shunt on pins 1-2 on jumper J1.
- 2) Verify that IC is operating in skip mode by installing a shunt on pins 2-3 on jumper J2.
- 3) Set the DC power supply to 0V.
- 4) Set the variable load to 0mA.
- 5) Connect  the positive and negative terminals of the  power  supply  to  the  VIN  and  GND1  test  pads, respectively.
- 6) Connect terminals of the variable load to the VOUT and  GND2  test  pads.  Observe  the  positive  and negative  polarity  requirements  of  the  variable  load, if  there  are  any  (VOUT  is  positive  and  GND2  is negative).
- 7) Attach a voltmeter across the VOUT and GND2 test pads.
- 8) Attach  a  voltmeter  across  the  RESETB  and  GND2 test pads.
- 9) Ramp the DC power-supply voltage from 0 to 12V.
- 10) Verify that the voltmeter connected to VOUT measures approximately 3.3V.
- 11)  Verify  that  the  voltmeter  connected  to  RESETB measures approximately 5V.
- 12)  Enable the variable load and ramp the load current from 0mA to 300mA.
- 13)  Repeat steps 10 and 11.

## Detailed Description of Hardware

The  MAX77597  EV  kit  is  a  fully  assembled  and  tested circuit board to evaluate the performance of the MAX77597 step-down converter IC. The EV kit operates over a 3.5V to 36V input voltage range, while consuming only 1.1µA of quiescent current at 14V IN and 0mA load (fixed-output voltage version).

The EV kit can be configured to operate in forced-PWM mode (FPWM) or low-quiescent current skip mode using jumper J2. The IC can be enabled or disabled using jump -er J1. The RESETB test point connects to the IC's RESET output, which monitors output-voltage quality. Refer to the MAX77597 IC data sheet for more information on the IC.

## Configuring the Output Voltage (VOUT )

The  EV  kit  comes  standard  with  the  fixed  3.3V  output version,  but  can  easily  be  modified  to  evaluate  the adjustable-output  version  of  the  device  or  the  5V  fixed version.

To evaluate the 5V fixed output voltage version, replace U1 with the MAX77597ETBA+ and leave the rest of the board unchanged.

To evaluate the adjustable-output voltage version, replace U1  with  the  MAX77597ETBC+  and  remove  the  0Ω resistor  on  R4.  The  output  voltage  of  the  adjustable version  can  be  set  between  1V  and  10V  by  populating resistors R3 and R4. Choose R3 to be less than or equal to  100kΩ. Then calculate R4 for the desired V OUT with the following equation:

<!-- formula-not-decoded -->

where V FB  = 1V.

The  feed-forward  capacitor  (C8)  is  already  installed for  use  with  the  external  feedback  resistors  and  the adjustable  version  of  the  IC.  C8  is  not  required  for  the fixed-output-voltage  version.    When  evaluating  other versions of the device, the inductor, input capacitors, and output  capacitors  might  need  to  change.  Refer  to  the Applications Information section in the MAX77597 IC data sheet for more information.

## MAX77597 Evaluation Kit

## Enable Control

The  EV  kit  uses  jumper  J1  to  control  the  enable  (EN) input. Connect EN to VIN (SUP) by shunting pins 1-2 to enable the device. Connect EN to GND by shunting pins 2-3 to disable the device. Table 1 summarizes the operation of J1.

## Mode Control

The EV kit uses jumper J2 to configure the IC in either forced-PWM (FPWM) mode or skip mode. Connect the MODE pin to BIAS by installing a shunt in positions 1-2

## Table 1. Enable Control (J1)

| SHUNT POSITION   | EN PIN                          | VOUT                                            |
|------------------|---------------------------------|-------------------------------------------------|
| 1-2              | Connected to VIN (SUP)          | Enabled                                         |
| 2-3              | Connected to GND (PGND)         | Disabled                                        |
| Not installed    | Connected to an external source | Enabled with logic-high Disabled with logic-low |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Murata Americas | 800-241-6574 | www.murataamericas.com |
| TOKO, Inc.      | 847-297-0070 | www.toko.co.jp         |

Note: Indicate that you are using the MAX77597 when contacting these component suppliers.

Evaluates: MAX77597

on J2 to enable FPWM mode. Connect MODE to GND by installing a shunt in positions 2-3 on J2 to enable skip mode. Table 2 summarizes the operation of J2.

## RESET Output

The  EV  kit  provides  a  RESETB  test  point  to  monitor the  status  of  the RESET pin. RESET becomes  high impedance and is pulled to the BIAS voltage level through resistor  R1  after  the  regulator  output  increases  above 92%  of  the  nominal  regulated  voltage. RESET goes low  when  the  regulator  output  drops  below  90%  of  the nominal regulated voltage.

## Table 2. Mode Control (J2)

| SHUNT POSITION   | MODE PIN          | MODE                                     |
|------------------|-------------------|------------------------------------------|
| 1-2              | Connected to BIAS | Forced-PWM mode                          |
| 2-3              | Connected to GND  | Skip mode                                |
| Not installed    | Floating          | Internally pulled down to GND, skip mode |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77597EVKIT# | EV Kit |

## MAX77597 Evaluation Kit

## MAX77597 EV Kit Bill of Materials

| ITEM   | REF_DES               | DNI/DNP   |   QTY | MFG PART #                       | MANUFACTURER   | VALUE          | DESCRIPTION                                                                                                                                                      |
|--------|-----------------------|-----------|-------|----------------------------------|----------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1                    | -         |     1 | GRM188R6YA475KE15D               | Murata         | 4.7µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 16V; TOL = 10%; MODEL = ; TG = -55°C TO +85°C; TC = X5R ; FORMFACTOR                                                 |
| 2      | C2                    | -         |     1 | GRM188R61A105KA61D               | Murata         | 1µF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R; FORMFACTOR                                         |
| 3      | C3                    | -         |     1 | GRM155R61A104KA01D               | Murata         | 0.1µF          | CAPACITOR; SMT; 0402; CERAMIC; 0.1µF; 10V; 10%; X5R; -55°C to + 125°C; 0 ± 30PPM/°C; FORMFACTOR ;                                                                |
| 4      | C4-C6                 | -         |     3 | GRM188R61A226ME15D               | Murata         | 22µF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL = 20%; MODEL = CL SERIES; TG = -55°C TO +85°C; TC = X5R; FORMFACTOR                                          |
| 5      | C8                    | -         |     1 | GRM1555C1H5R6BA01D               | Murata         | 5.6PF          | CAPACITOR; SMT; 0402; CERAMIC; 5.6pF; 50V; 0.25%; C0G; -55°C to + 125°C; 0 ±30PPM/°C                                                                             |
| 6      | GND1, GND2, VIN, VOUT | -         |     4 | 9020 BUSS                        | WEICO WIRE     | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                         |
| 7      | J1, J2                | -         |     2 | TSW-103-07-L-S                   | SAMTEC         | TSW-103-07-L-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS                                                                                                             |
| 8      | L1                    | -         |     1 | DFE252012F-100M                  | TOKO           | 10µH           | INDUCTOR; SMT (2520); METAL ALLOY CHIP; 10µH; TOL = ±30%; 1.4A; FORMFACTOR                                                                                       |
| 9      | R1                    | -         |     1 | CRCW0402100KFK; RC0402FR-07100KL | VISHAY;YAGEO   | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                            |
| 10     | R4                    | -         |     1 | ANY                              | ANY            | 0              | RESISTOR; 0402; 0 Ω ; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                                                                |
| 11     | RESETB                | -         |     1 | 5000                             | KEYSTONE       | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                           |
| 12     | U1                    | -         |     1 | MAX77597ETBB+                    | MAXIM          | MAX77597ETBB+  | IC; CONV; 300MA; BUCK CONVERTER WITH 1.1 MICRO-AMPERE IQ; PACKAGE OUTLINE DRAWING: 21-100013; LAND PATTERN NUMBER: 90-100007; PACKAGE CODE: T102A2+1C; TDFN10-EP |
| 13     | PCB                   | -         |     1 | MAX77597                         | MAXIM          | PCB            | PCB:MAX77597                                                                                                                                                     |
| 14     | C7                    | DNP       |     0 | TPSD226K035R0125                 | AVX            | 22UF           | CAPACITOR; SMT; 7343; TANTALUM; 22uF; 35V ; 10%; TPS; -55°C to +125°C                                                                                            |
| 15     | R3                    | DNP       |     0 | N/A                              | N/A            | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                 |
| TOTAL  |                       |           |    19 |                                  |                |                |                                                                                                                                                                  |

Evaluates: MAX77597

## MAX77597 EV Kit Schematic Diagram

<!-- image -->

## MAX77597 EV Kit PCB Layout Diagrams

MAX77597 EV Kit PCB Layout Diagram-Top Silkscreen

<!-- image -->

MAX77597 EV Kit PCB Layout Diagram-Bottom View

<!-- image -->

MAX77597 EV Kit PCB Layout Diagram-Top View

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX77597