<!-- lastmod 2022-08-05 -->
## MAX38907 TQFN Evaluation Kit

## General Description

The  MAX38907 TQFN evaluation  kit  (EV  kit)  evaluates the MAX38907 in a TQFN package. The MAX38907 is a low input voltage, high output current linear regulator. The EV kit operates over an input range of 0.9V to 5.5V and a bias voltage range from 2.7V to 20V. The EV kit provides a  jumper  selectable  output  voltage  range  from  0.6V  to 5.0V. Additionally,  each  output  voltage  selection  can  be adjusted ±5% for margining. The EV kit can deliver up to 4A of current.

## Features

- Evaluates the MAX38907 IC in a 20-Pin (5mm x 5mm) TQFN
- 0.9V to 5.5V Input Range
- 2.7V to 20V Bias Voltage to Provide Wider Supply Options
- 0.6V to 5.0V Jumper Selectable Output Voltage
- Up to 4A Output Current
- Proven 4-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38907 TQFN EV Kit Files

| FILE                            | DESCRIPTION             |
|---------------------------------|-------------------------|
| MAX38907 TQFN EV Kit BOM        | EV Kit Bill of Material |
| MAX38907 TQFN EV Kit PCB Layout | EV Kit Layout           |
| MAX38907 TQFN EV Kit Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38907

## Quick Start

## Required Equipment

- MAX38907 TQFN EV kit
- 5.5V, 5A DC power supply (IN)
- 8V, 10mA DC power supply (BIAS)
- Electronic load capable of 4A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that jumper JU1 is shunted on pins 1 and 2 (EV kit enabled).
- 2) Verify that jumper JU2 is shunted on pins 1 and 2 (POK pulled up to IN).
- 3) Verify that jumpers SELA, SELB, and SELC are shunted on pins 1 and 2 (OUT = 5.0V).
- 4) Verify that jumper MRG is shunted on pins 1 and 2 (Add 5% margin to the output voltage).
- 5) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 6) Connect the 8V (or higher, up to 20V) power supply between the BIAS and nearest GND terminal posts.
- 7) Connect the 4A electronic load between the OUT and nearest GND terminal posts.
- 8) Connect the DVM between the OUT and nearest GND terminal posts.
- 9) Turn on the power supply.
- 10)  Verify that the voltage at the OUT terminal post is 5.25V within the device and the resistor divider's accuracy specifications.
- 11)  Enable the electronic load.
- 12)  Verify that the voltage at the OUT terminal post is 5.25V within the device and the resistor divider's accuracy specifications.

<!-- image -->

## MAX38907 TQFN Evaluation Kit

## Detailed Description of Hardware

The MAX38907 TQFN Evaluation kit (EV kit) evaluates the MAX38907 in a TQFN package. The MAX38907 is a low input voltage, high output current linear regulator that delivers 4A of output current. This regulator requires only 300mV of input-to-output headroom at full load.

The  MAX38907  TQFN  EV  kit  operates  over  an  input range  of  0.9V  to  5.5V  and  a  bias  voltage  range  from 2.7V to 20V. The EV kit comes with the MAX38907ATP+ installed and the output voltage is jumper selectable from 0.6V  to  5.0V.  Additionally,  each  output  voltage  selection  can  be  adjusted  ±5%  for  margining.  Refer  to  the MAX38907 IC data sheet for  additional  detail  on  output voltage and margin setting.

## EN (Enable)

The EV kit provides a jumper JU1 to enable or disable the MAX38907. See Table 1 for jumper JU1 setting.

## Bias (BIAS)

The  EV  kit  provides  a  bias  input  (BIAS)  to  accept an  input  voltage  to  control  the  LDO's  regulating  FET.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION         |
|------------------|---------------------|
| 1-2*             | Enabled. EN = BIAS* |
| 2-3              | Disabled. EN = GND  |

## Table 3. TBD

| SELA       | SELB       | SELC       |   OUT (V) AT MRG = GND (2-3) |   OUT (V) AT MRG = OPEN (PIN 1 ONLY) |   OUT (V) AT MRG = 5.1V (1-2) |
|------------|------------|------------|------------------------------|--------------------------------------|-------------------------------|
| Pin 1 only | Pin 1 only | Pin 1 only |                         0.57 |                                  0.6 |                          0.63 |
| 2-3        | Pin 1 only | Pin 1 only |                       0.6175 |                                 0.65 |                        0.6825 |
| 1-2        | Pin 1 only | Pin 1 only |                        0.665 |                                  0.7 |                         0.735 |
| Pin 1 only | 2-3        | Pin 1 only |                       0.7125 |                                 0.75 |                        0.7875 |
| 2-3        | 2-3        | Pin 1 only |                         0.76 |                                  0.8 |                          0.84 |
| 1-2        | 2-3        | Pin 1 only |                       0.8075 |                                 0.85 |                        0.8925 |
| Pin 1 only | 1-2        | Pin 1 only |                        0.855 |                                  0.9 |                         0.945 |
| 2-3        | 1-2        | Pin 1 only |                       0.9025 |                                 0.95 |                        0.9975 |
| 1-2        | 1-2        | Pin 1 only |                         0.95 |                                  1.0 |                          1.05 |
| Pin 1 only | Pin 1 only | 2-3        |                       0.9975 |                                 1.05 |                        1.1025 |
| 2-3        | Pin 1 only | 2-3        |                        1.045 |                                  1.1 |                         1.155 |
| 1-2        | Pin 1 only | 2-3        |                       1.0925 |                                 1.15 |                        1.2075 |

│

Evaluates: MAX38907

The  bias  input  voltage  must  be  at  least  2V  above  the output voltage. (i.e. If OUT = 1.0V, then BIAS ≥ 3.0V, up to 20V.)

## Power OK (POK)

The MAX38907 features a power ok (POK) output to indicate the device regulation status. The POK is open-drain and requires a pullup resistor between 10kΩ to 100kΩ. The EV kit  provides  a  jumper  JU2  to  select  a  pullup  voltage source for POK. See Table 2 for jumper JU2 setting.

## Output Voltage Selection (SELA, SELB, SELC, MRG)

The MAX38907 EV kit provides output voltage selection jumpers (SELA, SELB, SELC) to set the output voltage during power-up. In addition, the EV kit provides a margin setting jumper (MRG) to margin the output ±5% with respect to each selected output voltage. See Table 3 for output voltage selection jumper setting.

## Table 2. POK (JU2)

| SHUNT POSITION   | DESCRIPTION                                                                                                           |
|------------------|-----------------------------------------------------------------------------------------------------------------------|
| 1-2*             | POK pulled up to IN through R4 (100kΩ)                                                                                |
| 2-3              | POK pulled up to OUT through R3 (100kΩ)                                                                               |
| Not Installed    | POK pulled up to an external voltage source (between 0V to 5.5V) through an external resistor (between 10kΩ to 100kΩ) |

## Table 3. TBD (continued)

| SELA       | SELB       | SELC   |   OUT (V) AT MRG = GND (2-3) |   OUT (V) AT MRG = OPEN (PIN 1 ONLY) |   OUT (V) AT MRG = 5.1V (1-2) |
|------------|------------|--------|------------------------------|--------------------------------------|-------------------------------|
| Pin 1 only | 2-3        | 2-3    |                         1.14 |                                  1.2 |                          1.26 |
| 2-3        | 2-3        | 2-3    |                       1.1875 |                                 1.25 |                        1.3125 |
| 1-2        | 2-3        | 2-3    |                        1.235 |                                  1.3 |                         1.365 |
| Pin 1 only | 1-2        | 2-3    |                        1.425 |                                  1.5 |                         1.575 |
| 2-3        | 1-2        | 2-3    |                         1.71 |                                  1.8 |                          1.89 |
| 1-2        | 1-2        | 2-3    |                          1.9 |                                  2.0 |                           2.1 |
| Pin 1 only | Pin 1 only | 1-2    |                         2.09 |                                  2.2 |                          2.31 |
| 2-3        | Pin 1 only | 1-2    |                        2.375 |                                  2.5 |                         2.625 |
| 1-2        | Pin 1 only | 1-2    |                        2.565 |                                  2.7 |                         2.835 |
| Pin 1 only | 2-3        | 1-2    |                         2.85 |                                  3.0 |                          3.15 |
| 2-3        | 2-3        | 1-2    |                        3.135 |                                  3.3 |                         3.465 |
| 1-2        | 2-3        | 1-2    |                         3.42 |                                  3.6 |                          3.78 |
| Pin 1 only | 1-2        | 1-2    |                          3.8 |                                  4.0 |                           4.2 |
| 2-3        | 1-2        | 1-2    |                        4.275 |                                  4.5 |                         4.725 |
| 1-2        | 1-2        | 1-2    |                         4.75 |                                  5.0 |                          5.25 |

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Kemet                                   | www.kemet.com      |
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38907EVK#TQFN | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX38907

│

## MAX38907 TQFN EV Kit Bill of Materials

|   ITEM | REF_DES                                      | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                          | VALUE                        | DESCRIPTION                                                                                                                                         | COMMENTS   |
|--------|----------------------------------------------|-----------|-------|------------------------------------------------------------------------------------|---------------------------------------|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | BIAS, GND, GND2, IN, OUT                     | -         |     5 | 108-0740-001                                                                       | EMERSON NETWORK POWER                 | 108-0740-001                 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                            |            |
|      2 | BIAS_PAD, GND_PAD, GND_PAD2, IN_PAD, OUT_PAD | -         |     5 | 9020 BUSS                                                                          | WEICO WIRE                            | MAXIMPAD                     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                            |            |
|      3 | C1                                           | -         |     1 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                             | TDK;MURATA;MURATA                     | 0.047UF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                                                |            |
|      4 | C2, C3                                       | -         |     2 | GRM31CR70J226K; GCM31CR70J226KE23                                                  | MURATA;MURATA                         | 22UF                         | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                        |            |
|      5 | C5                                           | -         |     1 | CGA4J3X7R1H105M125AB                                                               | TDK                                   | 1UF                          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                      |            |
|      6 | D1                                           | -         |     1 | MM3Z5V1T1                                                                          | ON SEMICONDUCTOR                      | 5.1V                         | DIODE, ZNR, SMT (SOD-323), PD=0.20W, VZ=5.1V @IZT=0.005A                                                                                            |            |
|      7 | JU1, JU2, MRG, SELA, SELB, SELC              | -         |     6 | PEC03SAAN                                                                          | SULLINS                               | PEC03SAAN                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                           |            |
|      8 | POK                                          | -         |     1 | 5012                                                                               | KEYSTONE                              | N/A                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |            |
|      9 | R1                                           | -         |     1 | CRCW12063K01FK                                                                     | VISHAY DALE                           | 3.01K                        | RESISTOR; 1206; 3.01K OHM; 1%; 100PPM; 1/4W; THICK FILM                                                                                             |            |
|     10 | R2-R4                                        | -         |     3 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC    | 100K                         | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                 |            |
|     11 | SU1-SU6                                      | -         |     6 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B                     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                             |            |
|     12 | TP_GND1, TP_GND2                             | -         |     2 | 5011                                                                               | KEYSTONE                              | N/A                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |            |
|     13 | TP_OUT                                       | -         |     1 | 5014                                                                               | KEYSTONE                              | N/A                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                            |            |
|     14 | U1                                           | -         |     1 | MAX38907ATP+                                                                       | MAXIM                                 | MAX38907ATP+                 | EVKIT PART - IC; 4A PERFORMANCE NMOS LDO LINEAR REGULATORS; PACKAGE OUTLINE DRAWING: 21-0140; PACKAGE CODE: T2055+4C; PACKAGE LAND PATTERN: 90-0009 |            |
|     15 | PCB                                          | -         |     1 | MAX38907TQFN                                                                       | MAXIM                                 | PCB                          | PCB:MAX38907TQFN                                                                                                                                    | -          |
|     16 | J1-J4                                        | DNP       |     0 | METAL_STANDOFF_ 4-40_1/2_6.3                                                       | MAXIM                                 | METAL_STANDOFF_ 4-40_1/2_6.3 | KIT; ASSY-STANDOFF 1/2IN; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM WITH SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL                  |            |
|     17 | C4                                           | DNP       |     0 | N/A                                                                                | N/A                                   | OPEN                         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                            |            |
|     18 | C6, C7                                       | DNP       |     0 | N/A                                                                                | N/A                                   | OPEN                         | CAPACITOR; SMT (1206); OPEN; IPC MAXIMUM LAND PATTERN                                                                                               |            |
|     19 | C8, C9                                       | DNP       |     0 | N/A                                                                                | N/A                                   | OPEN                         | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                                                                                             |            |
|     20 | C10, C11                                     | DNP       |     0 | N/A                                                                                | N/A                                   | OPEN                         | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                             |            |
|     21 | R5                                           | DNP       |     0 | N/A                                                                                | N/A                                   | SHORT                        | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                       |            |
|     22 | R9                                           | DNP       |     0 | N/A                                                                                | N/A                                   | SHORT                        | PACKAGE OUTLINE 0805 RESISTOR                                                                                                                       |            |

Evaluates: MAX38907

## MAX38907 TQFN EV Kit Schematics

<!-- image -->

│

## MAX38907 TQFN EV Kit PCB Layout Diagrams

<!-- image -->

MAX38907 TQFN EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX38907 TQFN EV Kit PCB Layout-Top

MAX38907 TQFN EV Kit PCB Layout-Internal2

<!-- image -->

MAX38907 TQFN EV Kit PCB Layout-Internal3

<!-- image -->

│

## MAX38907 TQFN EV Kit PCB Layout Diagrams (continued)

MAX38907 TQFN EV Kit PCB Layout-Bottom

<!-- image -->

MAX38907 TQFN EV Kit PCB Layout-Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP Integrated reserves the right to change the circuitry and specifications without notice at any tiPe.

│

Evaluates: MAX38907