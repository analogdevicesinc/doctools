<!-- lastmod 2022-08-03 -->
## MAX49017 Evaluation Kit

## General Description

The MAX49017 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  to  evaluate  MAX49017  dual comparator with internal voltage reference. The MAX49017  EVKIT  comes  with  a  MAX49017ATA/VY+ installed that  operate off a V CC supply between 1.7V and 5.5V, an internal reference voltage of 1.252V, and have a wide -0.2V to +5.7V input voltage (V IN ) range. This EV kit demonstrates the MAX49017ATA/VY+ in an 8-pin 2mm x 2mm TDFN package with side-wettable flanks.

## Features

- 1.7V to 5.5V Supply Voltage Range
- -0.2V to V DD  + 0.2V Input Voltage Range
- Configured to Add External Hysteresis
- Dual-Channel Comparator with Built-in 1.252V Voltage Reference
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX49017

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX49017 EV kit
- 1.7V to 5.5V, 100mA DC power supply
- Precision voltage calibrator
- Two digital multimeters

## Procedure

Follow the steps to verify board operation.

Caution: Do not turn on power supplies until all connections are completed and turn on V CC  supply before turning on power supplies on the input pins.

- 1) Verify that shunts on J1, J2 are open and shunts on J6 is installed.
- 2) Set a DC power supply to 3.3V connect the positive terminal of the power supply to the V DD  test point and the ground terminal to the GND test point.
- 3) Set precision voltage calibrator to 2.5V. Connect the positive  terminal  of  the  calibrator  to  the  INA+  test point and the ground terminal to the GND test point.
- 4) Now short  a  wire  between  the  INA+  test  point  and INB+ test point. Also, short a wire between the REF/ INA- to INB- test points.
- 5) Enable DC power supply on V CC first and then turn on voltage calibrator on INA+ test point.
- 6) Verify that OUTA and OUTB are at logic-high (3.3V).
- 7) Decrease  the  voltage  set  on  INA+  test  point  to  1V on  voltage  calibrator  and  that  in  turn  decreases voltage  on  INB+  test  point  as  there  is  a  short  in between  INA+,  INB+,  as  discussed  in  step  4.  Now verify that OUTA and OUTB are now at logic-low (0V).

<!-- image -->

## Detailed Description of Hardware

The MAX49017 EV kit by default comes with MAX49017 IC, which is a dual comparator with internal voltage reference and push-pull output in 8-pin TDFN package. The EV kit operates from a single 1.7V to 5.5V DC power supply.

## Default Application Circuit

The  EV  kit  comes  preconfigured  using  a  single  supply configuration on generic dual comparator configuration.

These  EV  kits  allow  users  to  add  external  hysteresis in  addition  to  the  2.5mV  internal  hysteresis  through  the addition of appropriate resistors on the R1 and R3 pads provided  on  the  EV  board  for  CHA.  The  amount  of hysteresis added is given by the equation below, based on R1, R3 values:

<!-- formula-not-decoded -->

Similarly,  Hysteresis  to  CHB  is  added  by  appropriately choosing R4, R5 resistors.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                            |
|----------|------------------|--------------------------------------------------------|
| J1       | Installed        | Positive feedback for external hysteresis              |
| J1       | Not Installed*   | No feedback is connected                               |
| J2       | Installed        | Inbuilt voltage reference connected to INB+            |
| J2       | Not Installed*   | Inbuilt voltage reference is not used for driving INB+ |
| J6       | Installed*       | Connect V DD pin to test point V DD                    |
| J6       | Not Installed    | V DD pin disconnect from test point V DD               |

Evaluates: MAX49017

## Other Application Circuit

This EV kit can be used in window-detector applications.

A window detector application is useful in cases when a battery voltage needs to be monitored and thrown in an interrupt on the comparator output when the battery voltage is out of the predetermined range set by user.

For example,  in automotive  application, 3.6V  is a nominal voltage range, with 2.9V being typical end-of-line discharge  state  and  4.2V  being  the  maximum  charge  voltage. It is useful to track whether a car battery voltage is within 2.9V to 4.2V range during operation. When the battery voltage falls out of this voltage range, a comparator in this application circuit will raise an interrupt on the output to alert the user.

To configure the EV kit in the window detector application, install jumper J2 and the appropriate resistors on the R3, R2,  and  R6  pads.  Resistors  R3,  R2,  and  R6  pads  are available  for  setting  the  overvoltage  and  undervoltagethreshold  levels.  In  this  application,  by  appropriately choosing  these  resistors,  OUTA  provides  an  active-low, undervoltage indication (≤2.9V), while OUTB provides an active-low, overvoltage indication (≥4.2V). ANDing the two outputs provides an active-high, power-good signal when battery  voltage  is  within  the  2.9V  to  4.2V  range.  For  the detailed design procedure involved in calculating R3, R2, and R6, refer to the MAX49017 IC data sheet.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX49017EVKIT# | EV Kit |

# RoHS compliant.

│

## MAX49017 EV Kit Bill of Materials

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

| ITEM     | REF_ DES                               | DNI/ DNP   | QTY      | MFG PART #                                                                                                                      | MFG                                                   | VALUE             | DESCRIPTION                                                                                                                                                                                          |
|----------|----------------------------------------|------------|----------|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1        | A1, TP1-TP3                            | -          | 4        | 5011                                                                                                                            | KEYSTONE                                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                              |
| 2        | C1                                     | -          | 1        | C1005X5R1A104K050BA;LMK 105BJ104KV                                                                                              | TDK;TAIYO YUDEN                                       | 0.1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V;                                                           |
| 3        | C2                                     | -          | 1        | C1608X8R1E104K080AA                                                                                                             | TDK                                                   | 0.1UF             | TOL=10%; TG=-55 DEGC TO +150 DEGC; TC=X8R                                                                                                                                                            |
| 4        | C3                                     | -          | 1        | GRM188R71E105KA12; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A; GCM188R71E105KA64; C1608X7R1E105K080AE; CGA3E1X7R1E105K080AC | MURATA; TDK;TAIYO YUDEN; AVX; MURATA; TAIYO YUDEN;TDK | 1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                             |
| 5        | INA+, INB+, INB-, OUTA, OUTB, REF/INA- | -          | 6        | 5012                                                                                                                            | KEYSTONE                                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                              |
| 6        | J1, J2                                 | -          | 2        | PBC02SAAN                                                                                                                       | SULLINS ELECTRONIC S CORP.                            | PBC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                                            |
| 7        | J6                                     | -          | 1        | 800-10-002-10-001000                                                                                                            | MILLMAX                                               | HEADER_2P         | CONNECTOR, FEMALE, TH, BREAKAWAY, STR, 2PINS                                                                                                                                                         |
| 8        | R3, R4                                 | -          | 2        | RC1608J000CS;CR0603-J/- 000ELF;RC0603JR-070RL                                                                                   | SAMSUNG ELECTRONIC S;BOURNS; YAGEO PH                 | 0                 | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                                                 |
| 9        | SPACER 1- SPACER 4                     | -          | 4        | 9032                                                                                                                            | KEYSTONE KYCON;                                       | 9032              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                            |
| 10       | SU1, SU2, SU6                          | -          | 3        | S1100-B;SX1100- B;STC02SYAN                                                                                                     | KYCON; SULLINS ELECTRONIC S CORP.                     | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                              |
| 11       | U1                                     | -          | 1        | MAX49017ATA/VY+T                                                                                                                | MAXIM                                                 | MAX49017A TA/VY+T | EVKIT PART - IC; MAX49017ATA/VY+T; 1.7V; DUAL NANOPOWER COMPARATOR WITH BUILT-IN REFERENCE; PACKAGE OUTLINE: 21-100185; PACKAGE LAND PATTERN: 90- TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; |
| 12       | VDD                                    | -          | 1        | 5010                                                                                                                            | KEYSTONE                                              | N/A               | BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                                                                                   |
| 13       | PCB                                    | -          | 1        | MAX49017                                                                                                                        | MAXIM                                                 | PCB               | PCB:MAX49017                                                                                                                                                                                         |
| 14       | C4                                     | DNP        | 0        | C0603C102M3GAC                                                                                                                  | KEMET                                                 | 0.001UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.001UF; 25V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC                                                                                                 |
| 15       | R1, R2, R5, R6                         | DNP        | 0        | N/A                                                                                                                             | N/A                                                   | OPEN              | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                                                                        |
| 28 TOTAL | 28 TOTAL                               | 28 TOTAL   | 28 TOTAL | 28 TOTAL                                                                                                                        | 28 TOTAL                                              | 28 TOTAL          | 28 TOTAL                                                                                                                                                                                             |

Evaluates: MAX49017

## MAX49017 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX49017

## MAX49017 EV Kit PCB Layout Diagrams

MAX49017 EV Kit-Top Silkscreen

<!-- image -->

MAX49017 EV Kit-Top View

<!-- image -->

MAX49017 EV Kit-Bottom View

<!-- image -->

MAX49017 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 8/19            | Initial release           | -               |
|                 1 | 8/19            | Updated Bill of Materials | 3               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX49017