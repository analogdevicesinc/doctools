<!-- lastmod 2024-07-11 -->
<!-- image -->

## General Description

The  MAX77291  evaluation  kit  (EV  kit)  evaluates  the MAX77291 IC packaged in a wafer-level package (WLP). The MAX77291 is a low quiescent-current boost (step-up) DC-DC converter with a 100mA peak inductor current limit, True Shutdown ™ , and short-circuit protection. The EV kit operates over an input range of 1.8V to 5.5V and provides resistor-configurable  output  voltages  from  5.5V  to  20V. The EV kit comes with the MAX77291ANT+ installed.

## Features and Benefits

- Evaluates the MAX77291 IC
- 1.27mm x 0.87mm 6-Bump WLP (3 x 2, 0.4mm Pitch) Package
- 1.8V to 5.5V Input Range
- 5.5V to 20V Configurable Output Voltage
- Up to 100mA Input Peak Current
- Proven 2-Layer, 1.5oz Copper Printed Circuit Board (PCB) Layout
- Demonstrates Compact Solution Size

## MAX77291 EV kit Files

| FILE                            | DESCRIPTION                |
|---------------------------------|----------------------------|
| MAX77291 WLP EVKIT A            | EV kit Bill of Materials   |
| MAX77291 WLP EVKIT A PCB LAYOUT | EV kit PCB Layout Diagrams |
| MAX77291 WLP EVKIT A SCHEMATIC  | EV kit Schematic Diagram   |

## MAX77291 EV kit Photo

Evaluates: MAX77291

## Quick Start

## Required Equipment

- MAX77291 EV kit
- 1.8V to 5.5V, 1A DC Power Supply
- Digital Voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

1. Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU1 (EV kit enabled).
2. Connect the power supply between the IN and nearest GND terminal posts.
3. Connect the DVM between the OUT and nearest GND terminal posts.
4. Set the power supply to 4.5V and turn it on.
5. Verify  that  the  voltage  at  the  OUT-terminal  post  is approximately 12V.

Ordering Information appears at end of data sheet.

True Shutdown is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

319-101052; Rev 0; 3/24

## MAX77291 Evaluation Kit

## Detailed Description of Hardware

The MAX77291 EV kit evaluates the MAX77291 IC. The MAX77291 is a high-efficiency, low-quiescent current, step-up DC-DC converter with True Shutdown ™ and short-circuit protection. True Shutdown disconnects the output from the input with no forward or reverse current. The MAX77291 EV kit operates over an input range of 1.8V to 5.5V. The EV kit provides resistor-configurable output voltages from 5.5V to 20V. The EV kit comes with the MAX77291ANT+ installed and is configured for a 12V output.

## EN

The MAX77291 EV kit provides a jumper JU1 to enable or disable the MAX77291. See Table 1 for JU1 jumper settings.

## Table 1. EN (JU1) Jumper Settings

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

*Default Position

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77291EVKIT# | EV kit |

## MAX77291 EV Kit Bill of Materials

|   ITEM | REF_DES   |   QTY | MFG PART #                                                                                                                        | MANUFACTURER                                                       | DESCRIPTION                                                                                                             |
|--------|-----------|-------|-----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C8    |     2 | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO; GRM21BR71A106KA73; C2012X7R1A106K125AC; GMC21X7R106K10NT                      | SAMSUNG; TAIYO YUDEN; KEMET; MURATA; TDK; CAL-CHIP ELECTRONIC INC. | CAP; SMT (0805); 10UF; 10%; 10V; X7R; CERAMIC                                                                           |
|      2 | C2        |     1 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L; CC1206KKX7R9BB475; CC1206KKX7R9BB475 | MURATA; MURATA; MURATA; TAIYO YUDEN; MURATA; YAGEO                 | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                          |
|      3 | C6        |     1 | UWJ0J151MCL                                                                                                                       | NICHICON                                                           | CAP; SMT; 150UF; 20%; 6.3V; ALUMINUM-ELECTROLYTIC                                                                       |
|      4 | EN, TP3   |     2 | 5012                                                                                                                              | KEYSTONE                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |

Evaluates: MAX77291

## MAX77291 Evaluation Kit

## Evaluates: MAX77291

|   ITEM | REF_DES              |   QTY | MFG PART #                   | MANUFACTURER          | DESCRIPTION                                                                                                                                                              |
|--------|----------------------|-------|------------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      5 | GND1, TP2, TP4       |     3 | 5011                         | KEYSTONE              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                  |
|      6 | IN, OUT, PGND, PGND2 |     4 | 108-0740-001                 | EMERSON NETWORK POWER | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                 |
|      7 | JU1                  |     1 | PEC03SAAN                    | SULLINS               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                |
|      8 | L1                   |     1 | DFE201610E-100M              | MURATA                | INDUCTOR; SMT (0806); FERRITE; 10UH; 20%; 0.65A                                                                                                                          |
|      9 | LX                   |     1 | 131-4353-00                  | TEKTRONICS            | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                          |
|     10 | R1                   |     1 | CRCW06033M48FK               | VISHAY                | RES; SMT (0603); 3.48M; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                      |
|     11 | R2                   |     1 | CRCW06034023FK; ERJ-3EKF4023 | VISHAY; PANASONIC     | RES; SMT (0603); 402K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                       |
|     12 | R5                   |     1 | ERJ-2GE0R00                  | PANASONIC             | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                              |
|     13 | SU1                  |     1 | 2SN-BK-G                     | SAMTEC                | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.175IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                |
|     14 | U1                   |     1 | MAX77291ANT+                 | ANALOG DEVICES        | EVKIT PART - IC; 1.8V TO 5.5V INPUT RANGE HIGH-VOLTAGE MICROPOWER BOOST CONVERTER WITH 50MA INPUT CURRENT LIMIT; PACKAGE OUTLINE: 21-100577; PACKAGE CODE: N60N1+1S WLP6 |
|     15 | PCB                  |     1 | MAX77291WLP                  | ANALOG DEVICES        | PCB:MAX77291WLP                                                                                                                                                          |
|     16 | C3, C4               |     0 | N/A                          | N/A                   | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                                                  |

## MAX77291 Evaluation Kit

## Evaluates: MAX77291

|   ITEM | REF_DES   |   QTY | MFG PART #                                                                                                                        | MANUFACTURER                                   | DESCRIPTION                                    |
|--------|-----------|-------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|------------------------------------------------|
|     17 | C5        |     0 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L; CC1206KKX7R9BB475; CC1206KKX7R9BB475 | MURATA;MURATA;MURATA; TAIYO YUDEN;MURATA;YAGEO | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC |
|     18 | C7        |     0 | N/A                                                                                                                               | N/A                                            | CAPACITOR; 0402 PACKAGE; GENERIC               |
|     19 | R3        |     0 | N/A                                                                                                                               | N/A                                            | RESISTOR; 0603; OPEN; FORMFACTOR               |
|     20 | R4        |     0 | N/A                                                                                                                               | N/A                                            | PACKAGE OUTLINE 0603 RESISTOR                  |

## MAX77291 EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX77291

## MAX77291 Evaluation Kit

## MAX77291 EV Kit PCB Layout

MAX77291 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77291 EV Kit PCB Layout -Bottom View

<!-- image -->

Evaluates: MAX77291

MAX77291 EV Kit PCB Layout -Top View

<!-- image -->

MAX77291 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## MAX77291 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/24            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77291