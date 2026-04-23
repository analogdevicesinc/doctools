<!-- lastmod 2023-06-02 -->
## MAX38908 TDFN Evaluation Kit

## General Description

The  MAX38908 TDFN  evaluation  kit  (EV  kit)  evaluates the MAX38908 in a TDFN package. The MAX38908 is a low input voltage, high output current linear regulator. The EV kit operates over an input range of 0.9V to 5.5V and a bias voltage range from 2.7V to 20V. The EV kit provides a resistor configurable output voltage range from 0.6V to 5.0V. The EV kit can deliver up to 4A of current.

## Features

- Evaluates the MAX38908 IC in a 14-pin (3mm x 3mm) TDFN
- 0.9V to 5.5V Input Range
- 2.7V to 20V Bias Voltage to Provide Wider Supply Options
- 0.6V to 5.0V Resistor Configurable Output Voltage (Default Output Set to 1V)
- Up to 4A Output Current
- Proven 4-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38908 TDFN EV Kit Files

| FILE                            | DECRIPTION              |
|---------------------------------|-------------------------|
| MAX38908 TDFN EV Kit BOM        | EV Kit Bill of Material |
| MAX38908 TDFN EV Kit PCB Layout | EV Kit Layout           |
| MAX38908 TDFN EV Kit Schematic  | EV Kit Schematic        |

319-100433; Rev 0; 8/19

Evaluates: MAX38908

## Quick Start

## Required Equipment

- MAX38908 TDFN EV kit
- 5.5V, 5A DC power supply (IN)
- 3V, 10mA DC power supply (BIAS)
- Electronic load capable of 4A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify  that  jumper  JU1  is  shunted  on  pins  1  and  2 (EV kit enabled).
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 3V (or higher, up to 20V) power supply between the BIAS and nearest GND terminal posts.
- 4) Connect the 4A electronic load between the OUT and nearest GND terminal posts.
- 5) Connect  the  DVM  between  the  OUT  and  nearest GND terminal posts.
- 6) Turn on the power supply.
- 7) Verify that the voltage at the OUT terminal post is 1V within the device and the resistor divider's accuracy specifications.
- 8) Decrease  the  power  supply  to  1.3V  (To  minimize power dissipation at full load).
- 9) Enable the electronic load.
- 10)  Verify that the voltage at the OUT terminal post is 1V within the device and the resistor divider's accuracy specifications.

<!-- image -->

## MAX38908 TDFN Evaluation Kit

## Detailed Description of Hardware

The  MAX38908 TDFN EV kit evaluates the  MAX38908 in  a  TDFN  package.  The  MAX38908  is  a  low  input voltage, high output current linear regulator that delivers 4A of output current. This regulator requires only 300mV of input-to-output headroom at full load.

The MAX38908 TDFN EV kit operates over an input range of  0.9V  to  5.5V  and  a  bias  voltage  range  from  2.7V  to 20V. The EV kit comes with the MAX38908ATD+ installed and  the  output  voltage  is  set  to  1V  by  1%  accurate feedback  resistors  R1  and  R2.  The  EV  Kit  output  can be  reconfigured  to  other  voltages  from  0.6V  to  5.0V  by replacing  feedback  resistors  R1  and  R2.  Refer  to  the M AX38908 IC data sheet for feedback resistor calculation.

## EN (Enable)

The EV kit provides a jumper JU1 to enable or disable the MAX38908. See Table 1 for jumper setting of jumper JU1.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

* Default position.

## Bias (BIAS)

The EV kit provides a bias input (BIAS) to accept an input voltage  to  control  the  LDO's  regulating  FET.  The  bias input voltage must be at least 2V above the output voltage. (i.e., if V OUT = 1.0V, then BIAS ≥ 3.0V, up to 20V)

## Power OK (POK)

The EV kit provides a power ok (POK) output to indicate the device regulation status. The POK is open-drain and requires a pullup resistor between 10kΩ to 100kΩ. The EV kit POK is pullup to V OUT through a 100kΩ resistor R3 by default. The POK can also be pullup to V IN  or an external voltage source. To pullup POK with V IN , remove resistor R3 and install a resistor with the desired value to R4.

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Kemet                                   | www.kemet.com      |
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38908 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38908EVK#TDFN | EV Kit |

#Denotes RoHS

Evaluates: MAX38908

│

## MAX38908 TDFN EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                      | VAR STATUS   | MAXINV              | MFG PART #                                                                         | MANUFACTURER                            | VALUE        | DESCRIPTION                                                                                                                                                                           |
|--------|-------|----------------------------------------------|--------------|---------------------|------------------------------------------------------------------------------------|-----------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     5 | BIAS, GND, GND2, IN, OUT                     | Pref         | 01-10807400011P-80  | 108-0740-001                                                                       | EMERSON NETWORK POWER                   | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                              |
|      2 |     5 | BIAS_PAD, GND_PAD, GND_PAD2, IN_PAD, OUT_PAD | Pref         | 01-9020BUSS20AWG-00 | 9020 BUSS                                                                          | WEICO WIRE                              | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                              |
|      3 |     1 | C1                                           | Pref         | 20-0U047-03         | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                             | TDK;MURATA; MURATA                      | 0.047UF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047µF; 25V; TOL = 10%; TG = -55°C TO +125°C                                                                                                    |
|      4 |     2 | C2, C3                                       | Pref         | 20-0022U-A28        | GRM31CR70J226K; GCM31CR70J226KE23                                                  | MURATA;MURATA                           | 22UF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 22µF; 6.3V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                                                                        |
|      5 |     1 | C5                                           | Pref         | 20-0001U-CA96       | CGA4J3X7R1H105M125AB                                                               | TDK                                     | 1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 50V; TOL = 20%; TG = -55°C TO +125°C; TC = X7R; AUTO                                                                                        |
|      6 |     1 | JU1                                          | Pref         | 01-PEC03SAAN3P-21   | PEC03SAAN                                                                          | SULLINS                                 | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                             |
|      7 |     1 | POK                                          | Pref         | 02-TPMINI5002-00    | 5002                                                                               | KEYSTONE                                | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                         |
|      8 |     1 | R1                                           | Pref         | 80-0010K-V8         | CHPHT0603K1002FGT                                                                  | VISHAY SFERNICE                         | 10K          | RESISTOR; 0603; 10K Ω ; 1%; 100PPM; 0.0125W; THICK FILM                                                                                                                               |
|      9 |     1 | R2                                           | Pref         | 80-0015K-24         | CRCW060315K0FK                                                                     | VISHAY DALE                             | 15K          | RESISTOR, 0603, 15KΩ,1%, 100PPM, 0.10W, THICK FILM                                                                                                                                    |
|     10 |     1 | R3                                           | Pref         | 80-0100K-24         | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO;PANASONIC     | 100K         | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                   |
|     11 |     1 | SU1                                          | Pref         | 02-JMPFS1100B-00    | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED                                                                        |
|     12 |     1 | TP_GND                                       | Pref         | 02-TPMINI5001-00    | 5001                                                                               | KEYSTONE                                | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|     13 |     1 | TP_OUT                                       | Pref         | 02-TPMINI5000-00    | 5000                                                                               | KEYSTONE                                | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST     |
|     14 |     1 | U1                                           | Pref         | 00-SAMPLE-01        | MAX38908ATD+                                                                       | MAXIM                                   | MAX38908ATD+ | EVKIT PART - IC; MAX38908ATD+; 4A PERFORMANCE NMOS LDO LINEAR REGULATORS; PACKAGE OUTLINE DRAWING: 21-0137; PACKAGE CODE: T1433+2C; PACKAGE LAND PATTERN: 90-0063                     |
|     15 |     1 | PCB                                          | -            | EPCB38908TDFN       | MAX38908TDFN                                                                       | MAXIM                                   | PCB          | PCB:MAX38908TDFN                                                                                                                                                                      |

DO NOT PURCHASE(DNP)

| ITEM   |   QTY | REF DES   | VAR STATUS   | MAXINV                 | MFG PART #                   | MANUFACTURER   | VALUE                        | DESCRIPTION                                                                                                                        |
|--------|-------|-----------|--------------|------------------------|------------------------------|----------------|------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1      |     4 | J1-J4     | DNP          | 08-SOH4400120630ALU-00 | METAL_STANDOFF_ 4-40_1/2_6.3 | MAXIM          | METAL_STANDOFF_ 4-40_1/2_6.3 | KIT; ASSY-STANDOFF 1/2IN; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM WITH SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL |
| 2      |     1 | C4        | DNP          | N/A                    | N/A                          | N/A            | OPEN                         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT                                                                                   |
| 3      |     2 | C6, C7    | DNP          | N/A                    | N/A                          | N/A            | OPEN                         | CAPACITOR; SMT (1206); OPEN; IPC MAXIMUM LAND PATTERN                                                                              |
| 4      |     2 | C8, C9    | DNP          | N/A                    | N/A                          | N/A            | OPEN                         | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                                                                            |
| 5      |     2 | C10, C11  | DNP          | N/A                    | N/A                          | N/A            | OPEN                         | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                            |
| 6      |     1 | R4        | DNP          | N/A                    | N/A                          | N/A            | OPEN                         | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                              |
| 7      |     1 | R5        | DNP          | N/A                    | N/A                          | N/A            | SHORT                        | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                              |
| TOTAL  |    13 |           |              |                        |                              |                |                              |                                                                                                                                    |

Evaluates: MAX38908

## MAX38908 TDFN EV Kit Schematic

<!-- image -->

│

Evaluates: MAX38908

## MAX38908 TDFN EV Kit PCB Layout Diagrams

<!-- image -->

MAX38908 TDFN EV PCB Layout-Top Silkscreen

MAX38908 TDFN EV PCB Layout-Top Layer

<!-- image -->

MAX38908 TDFN EV PCB Layout-Internal Layer 2

<!-- image -->

Evaluates: MAX38908

│

## MAX38908 TDFN EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX38908 TDFN EV Kit PCB Layout-Internal Layer 3

MAX38908 TDFN EV PCB Layout-Bottom Layer

<!-- image -->

MAX38908 TDFN EV PCB Layout-Bottom Silkscreen

<!-- image -->

Evaluates: MAX38908

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX38908