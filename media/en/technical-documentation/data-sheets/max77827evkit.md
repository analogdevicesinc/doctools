<!-- lastmod 2022-08-02 -->
## MAX77827 Evaluation Kit

## General Description

The MAX77827 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX77827,  a  1.6A  buck-boost converter. The IC is capable of 1.8V to 5.5V input and is output  voltage  adjustable  between  2.3  to  5.3V  (through SEL pin). The factory default output voltage of this EV kit is set at 3.3V. Output voltage can be adjusted by changing the SEL resistor value (R3). Two GPIO pins are available to  support  Force  PWM  and  EN  functions. The  EV  kit  is compatible  with  any  version  of  the  MAX77827  WLP  IC (MAX77827CEWC+ is the default).

Evaluates: MAX77827

## Features and Default Settings

- Sense Points for High-Accuracy Measurements
- Accessible Test Points for EN, POK, and OUTS
- Output Voltage Adjustable Through SEL
- FPWM and Skip Mode Configurable (Skip Mode Default)
- UVLO Rising = 2.6V, UVLO Falling = 1.9V (MAX77827CEWC+)

Ordering Information appears at end of data sheet.

| SPECIFICATION          | TEST CONDITIONS                                |   MIN |   TYP |   MAX | UNIT   |
|------------------------|------------------------------------------------|-------|-------|-------|--------|
| Input Voltage          |                                                |   2.6 |       |   5.5 | V      |
| Output Voltage         | Configurable by SEL resistor R3 (see Table 2). |   2.3 |       |   5.3 | V      |
| Default Output Voltage |                                                |   3.3 |   3.3 |   3.3 | V      |
| Output Current         |                                                |     0 |       |   1.6 | A      |
| Peak Efficiency        | 3.3 VIN, 3.3 VOUT, 300mA load                  |       |       |  96.0 | %      |

<!-- image -->

Figure 1. MAX77827 EV Kit Photo

<!-- image -->

## Quick Start

## Required Equipment

- MAX77827 EV kit
- Adjustable DC power supply
- A 1.8V DC power supply (optional)
- Digital Multi-meters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation.  Use  twisted  wires  of

## Table 1. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FUNCTION                                            |
|----------|--------------------|------------------|-----------------------------------------------------|
| J2       | EN                 | 1-2*             | Connects EN to VIN (MAX77827 is enabled by default) |
| J10      | DISABLE            | 1-2              | Connects EN to GND                                  |
| J7       | FPWM               | 1-2              | Enables FPWM function                               |
| J7       | FPWM               | 2-3*             | Enables SKIP mode function                          |

* Default position

## Table 2. MAX77827 RSEL Selection Table

| RSEL (KΩ)   |   VOUT (V) |
|-------------|------------|
| Open        |        3.3 |
| 909         |        2.3 |
| 768         |        2.4 |
| 634         |        2.5 |
| 536         |        2.6 |
| 452         |        2.7 |
| 383         |        2.8 |
| 324         |        2.8 |
| 267         |       2.85 |
| 226         |        5.2 |
| 191         |        2.9 |
| 162         |        5.3 |
| 133         |          3 |
| 113         |          3 |
| 95.3        |        3.1 |
| 80.6        |       3.15 |
| 66.5        |       3.15 |

Evaluates: MAX77827

appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 1.
- 2) Connect a DVM to the VINS and PGNDS\_IN sense pins to measure input voltage.
- 3) Connect  a  DVM  to  the  OUTS  and  PGNDS\_OUT sense pins to measure output voltage.
- 4) Apply a power supply set to 0V (100mA current limit) across  the  VIN  and  PGND  terminals  of  the  EV  kit. Turn the supply on and increase the voltage to 3.8V.
- 5) Confirm the DVM connected to OUTS and PGNDS\_ OUT reads the default  output  voltage  of  the  EV  kit (3.3V).

## Detailed Description of Hardware

The  MAX77827  EV  kit  demonstrates  the  MAX77827 buck-boost. It regulates output from input voltage ranges from  1.8V  to  5.5V.  Programmable  output  range  is  from 2.3V to 5.3V with 50mV steps. The EV kit is suited with a general DC input. Table 1 lists jumpers and associated functions that are available on the EV kit.

The  MAX77827  includes  an  SEL  pin  to  configure  the output  voltage  on  startup.  Resistors  with  a  tolerance  of 1%  (or  better)  should  be  chosen  for  R3,  with  nominal values specified in Table 2.

| RSEL (KΩ)    |   VOUT (V) |
|--------------|------------|
| 56.2         |        3.2 |
| 47.5         |        3.4 |
| 40.2         |       3.45 |
| 34           |        3.5 |
| 28           |        3.6 |
| 23.7         |        3.7 |
| 20           |       3.75 |
| 16.9         |        3.8 |
| 14           |        3.9 |
| 11.8         |          4 |
| 10           |        4.1 |
| 8.45         |        4.2 |
| 7.15         |        4.4 |
| 5.9          |        4.5 |
| 4.99         |          5 |
| Short to GND |        3.3 |

│

## MAX77827 Evaluation Kit

## Component List

| PART                                                                                                         | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | DESCRIPTION                                                                                                            |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| C1                                                                                                           | 1                                                                                                            | C1608X5R1A106K                                                                                               | TDK                                                                                                          | 10μF ±10%, 10V X5R CERAMIC CAPACITOR (0603)                                                                            |
| C2                                                                                                           | 1                                                                                                            | GRM155R70J105MA12                                                                                            | MURATA                                                                                                       | 1μF ±20%, 6.3V X7R CERAMIC CAPACITOR (0402)                                                                            |
| C3                                                                                                           | 1                                                                                                            | C1608X5R1A226M080AC                                                                                          | TDK                                                                                                          | 22μF ±20%, 10V X5R CERAMIC CAPACITOR (0603)                                                                            |
| J2, J10                                                                                                      | 2                                                                                                            | PEC02SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | STRAIGHT CONNECTOR, 2 PINS                                                                                             |
| J7                                                                                                           | 1                                                                                                            | PBC03SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | STRAIGHT CONNECTOR, 3 PINS                                                                                             |
| L1                                                                                                           | 1                                                                                                            | XAL4020-102ME                                                                                                | COILCRAFT                                                                                                    | 1μH ±20%, ISAT = 9.6A, DCR = 13.25mΩ                                                                                   |
| R2                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0Ω, RESISTOR (0402)                                                                                                    |
| U1                                                                                                           | 1                                                                                                            | MAX77827CEWC+                                                                                                | MAXIM                                                                                                        | BUCK-BOOST (12 WLP), MAX77827CEWC+                                                                                     |
| Components below this line are outside of the immediate MAX77827 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77827 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77827 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77827 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77827 evaluation circuit and solution silkscreen.           |
| BIAS, EN, FPWM, POK                                                                                          | 4                                                                                                            | 5000                                                                                                         | KEYSTONE                                                                                                     | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| C7                                                                                                           | 1                                                                                                            | C3225X5R0J107M250AC                                                                                          | TDK                                                                                                          | 100μF ±20%, 6.3V X7R CERAMIC CAPACITOR (1210)                                                                          |
| OUT, PGND, PGND1, VIN                                                                                        | 4                                                                                                            | 9020 BUSS                                                                                                    | WEICO WIRE                                                                                                   | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                               |
| R1                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 806kΩ ±1%, RESISTOR (0402)                                                                                             |
| R5                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 100kΩ ±1%, RESISTOR (0402)                                                                                             |
| PCB                                                                                                          | 1                                                                                                            | MAX77827 SOLDERDOWN                                                                                          | MAXIM                                                                                                        | PCB:MAX77827SOLDERDOWN                                                                                                 |
| C8                                                                                                           | 0                                                                                                            | N/A                                                                                                          | N/A                                                                                                          | CAPACITOR; SMT (0805); OPEN; IPC MAXIMUM LAND PATTERN                                                                  |
| R3                                                                                                           | 0                                                                                                            | N/A                                                                                                          | N/A                                                                                                          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                       |

## Ordering Information

| PART           | U1 IC         | DEFAULT OUTPUT VOLTAGE   | UVLO FALLING   | UVLO RISING   |
|----------------|---------------|--------------------------|----------------|---------------|
| MAX77827EVKIT# | MAX77827CEWC+ | 3.3V                     | 1.9V           | 2.6V          |

Evaluates: MAX77827

│

## MAX77827 Evaluation Kit

## MAX77827 EV Kit Bill of Materials

| REF_DES               | DNI/DNP   |   QTY | MFG PART #                                                                 | MANUFACTURER                  | VALUE         | DESCRIPTION                                                                                                                 |
|-----------------------|-----------|-------|----------------------------------------------------------------------------|-------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------|
| BIAS, EN, FPWM, POK   |           |     4 | 5002                                                                       | KEYSTONE                      | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                 |
| C1                    |           |     1 | C1608X5R1A106K080AC                                                        | TDK                           | 10UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL = 10%; MODEL = ; TG = -55°C TO +85°C; TC = X5R                          |
| C2                    |           |     1 | GRM155R70J105MA12                                                          | MURATA                        | 1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL = 20%; TG = -55°C TO +125°C; TC = X7R                                   |
| C3                    |           |     1 | C1608X5R1A226M080AC; GRM188R61A226ME15                                     | TDK;MURATA                    | 22UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                    |
| C7                    |           |     1 | C1210C107M9PAC; C1210X5R6R3-107MNE; GRM32ER60J107ME20; C3225X5R0J107M250AC | KEMET;VENKEL LTD.; MURATA;TDK | 100UF         | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 6.3V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                  |
| J2, J10               |           |     2 | PBC02SAAN                                                                  | SULLINS ELECTRONICS CORP.     | PBC02SAAN     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65°C TO +125°C;                                      |
| J7                    |           |     1 | PEC03SAAN                                                                  | SULLINS ELECTRONICS CORP.     | PEC03SAAN     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C;                                      |
| L1                    |           |     1 | XAL4020-102ME                                                              | COILCRAFT                     | 1UH           | INDUCTOR; SMT; METAL COMPOSITE CORE; 1.0UH; TOL = ± 20%; 9.6A                                                               |
| OUT, PGND, PGND1, VIN |           |     4 | 9020 BUSS                                                                  | WEICO WIRE                    | MAXIMPAD      | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                    |
| OUTS, VINS            |           |     2 | 5000                                                                       | KEYSTONE                      | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
| PGNDS_IN, PGNDS_OUT   |           |     2 | 5001                                                                       | KEYSTONE                      | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
| R1                    |           |     1 | CRCW0402806KFK                                                             | VISHAY DALE                   | 806K          | RES; SMT (0402); 806K; 1%; ± 100PPM/DEGC; 0.063W                                                                            |
| R2                    |           |     1 | RC0402JR-070RL; CR0402-16W-000RJT                                          | YAGEO PHYCOMP; VENKEL LTD.    | 0             | RESISTOR; 0402; 0 Ω ; 5%; JUMPER; 0.063W; THICK FILM                                                                        |
| R5                    |           |     1 | CRCW0402100KFK; RC0402FR-07100KL                                           | VISHAY;YAGEO                  | 100K          | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                       |
| U1                    |           |     1 | MAX77827CEWC+                                                              | MAXIM                         | MAX77827CEWC+ | EVKIT PART-IC; 5.5V INPUT; 1A; TINY BUCK-BOOST CONVERTER; PACKAGE OUTLINE DRAWING: 21-100302; PACKAGE CODE: W121H2+1; WPL12 |
| PCB                   |           |     1 | MAX77827SOLDERDOWN                                                         | MAXIM                         | PCB           | PCB:MAX77827SOLDERDOWN                                                                                                      |
| R3                    | DNP       |     0 | N/A                                                                        | N/A                           | OPEN          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                            |
| C8                    | DNP       |     0 | N/A                                                                        | N/A                           | OPEN          | CAPACITOR; SMT (0805); OPEN; IPC MAXIMUM LAND PATTERN                                                                       |

│

Evaluates: MAX77827

## MAX77827 EV Kit Schematic

<!-- image -->

│

## MAX77827 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77827 EV Kit PCB Layout Diagrams

MAX77827 EV Kit Component Placement Guide-Top Side

<!-- image -->

MAX77827 EV Kit PCB Layout-Top Side

<!-- image -->

MAX77827 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX77827 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX77827 EV Kit PCB Layout-Layer 3

MAX77827 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77827 EV Kit PCB Layout-Silk Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied. Ma[im Integrated reserYes the right to change the circuitry and sSecifications Zithout notice at any time.

<!-- image -->

│

Evaluates: MAX77827