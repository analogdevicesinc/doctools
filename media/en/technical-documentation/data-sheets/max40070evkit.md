<!-- lastmod 2022-08-04 -->
<!-- image -->

## Evaluates: MAX40070

## General Description

The MAX40070 evaluation kit (EV kit) is fully assembled and  tested  PC  board  that  evaluates  the  MAX40070 single  comparator  with  internal  voltage  reference.  The MAX40070 EV kit has an open-drain output. The EV kit comes  with  a  MAX40070ANA16+  installed  that  operates of a VDD supply between 3.1V and 36V, an internal reference voltage of 1.6V, and has a wide 0V to +24.2V input  voltage  (IP)  range.  The  EV  kit  demonstrates  the MAX40070ANA16+  in  a  tiny,  1.008mm  x  1.428mm, 8-bump wafer-level  package  (WLP)  with  0.35mm  bump spacing. The EV kit can be used to evaluate the entire family of MAX40070 with 8-bump WLP option.

Ordering Information appears at end of data sheet.

## MAX40070 EV Kit Files

| FILE                               | DESCRIPTION             |
|------------------------------------|-------------------------|
| MAX40070_WLP_ EVKIT _A_SCHEMATI C  | EVKIT SCHEMATIC         |
| MAX40070_WLP_EVKIT_A_MARKETING_PCB | EVKIT PCB LAYOUT        |
| BUILD_BOM_MAX40070_WLP_EVKIT_A     | EVKIT BILL OF MATERIALS |
| MAX40070_WLP_EVKIT_A_ODB           | EVKIT ODB               |

©

Click here to ask an associate for production status of specific part numbers.

## MAX40070 Evaluation Kit

## Features

- Low Operating Current of 20µA (typ)
- Input Voltage Range = 0V to 24.2V
- &lt; 2µs Propagation Delay
- Internal High-Precision Voltage Reference
- Internal Current Source for Customized Thresholds and Hysteresis with External Resistors
- Open-Drain Output
- Tiny 8-Bump WLP (0.35mm Pitch) and TDFN (2mm x 2mm) Packages Selectable
- -40°C to 125°C Temperature Range
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX40070 EV kit
- +5V/+36V power supplies
- Digital multimeters (DMMs)

## Procedure

The  MAX40070  EV  kit  is  fully  assembled  and  tested. Follow  steps  below  to  verify  board  operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the positive terminal of a DC power supply to the VDD test point and the ground terminal to the GND test point.
- 2) Connect the positive terminal of a DC power supply to the VPU test point and the ground terminal to the GND test point.
- 3) Connect the positive terminal of a DC power supply to the IP test point and the ground terminal to the GND test point.
- 4) Place the jumpers' position as described in Table 1.
- 5) Turn on the VDD power supply and set it to any voltage between 3.1V and 36V.
- 6) Monitor the output voltage at the REF test point using a DMM. This should be 1.6V.
- 7) Turn on the VPU power supply and set it to any voltage between 2V and 6V.
- 8) Turn on the IP power supply and set it to the desired level.
- 9) Monitor the output using a DMM at the OUT test point and study its response while varying voltage at IP. Ideally, the voltage at the OUT test point should be at logic-high (VPU) when voltage applied on IP is greater than 17.6V(1.6V x 11) and should be at logic-low (0V) when voltage applied on IP is less than 17.6V. The ratio of the IP pin is 11, refer to the IC data sheet for detail.

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| J1       | 1-2              | Connects VPU to shut down the MAX40070 (U1). |
| J1       | 2-3*             | Connects GND to enable the MAX40070 (U1).    |
| J2       | Not Installed*   |                                              |
| J3       | Not Installed*   |                                              |
| J4       | Installed*       | No external hysteresis.                      |
| J5       | Installed*       | No external Ref.                             |
| J6       | Not Installed*   | No external Ref.                             |
| J7       | Installed*       | Internal Ref.                                |
| J8       | Not Installed*   |                                              |

*Default position.

## Evaluates: MAX40070

## Detailed Description of Hardware

The MAX40070 EV kit is fully assembled and tested board that  evaluates  the  8-bump  WLP  MAX40070ANA16+ open-drain output comparator. The EV kit requires a 3.1V to  36V  supply  voltage  for  normal  operation.  The  EV  kit allows  users  to  add  external  reference  and  hysteresis in  addition  to  the  internal  ones  through  the  appropriate resistors  R3  and  R2  provided  on  the  EV  kit  board. The 3uA is from internal current source, refer to the IC data sheet for detail.

The amount of external threshold is given by the equation below, based on R3 value:

External Threshold = 3uA x R3

The amount of external hysteresis is given by the equation below, based on R2 value:

## Hysteresis = 3uA x R2

The VPU test point on the EV kit is utilized to apply a pullup supply voltage between 2V and 6V for the open-drain output for proper operation.

The  MAX40070  can  be  disabled  by  placing  J1  to  1-2 position, which decreases the IDD to 400nA(TYP).

There  are  some  examples  for  different  threshold  and hysteresis combination:

- J4, J5, and J7 installed: VREF mode, internal hysteresis
- J4 DNI, J5, and J7 installed: VREF mode, customized hysteresis
- J4, J5, J7 DNI, J6 installed: IREF mode, external hysteresis and customized threshold
- J4, J5 DNI, J7 installed: VREF mode, external hysteresis and customized threshold

## Component List

| SUPPLIER                 | PHONE             | WEBSITE                         |
|--------------------------|-------------------|---------------------------------|
| KEYSTONE                 | (516) 328-7500    | www.keyelco.com/                |
| WURTH ELECTRONICS INC    | +1 877 6902207    | www.we-ics.com                  |
| TDK                      | +81 3 67 78 10 00 | www.tdk-electronics.tdk.com/    |
| KEMET                    | +91-95131-45888   | www.kemet.com/en/us.html        |
| AVX                      | +1 (864) 967-2150 | www.avx.com/                    |
| LITE-ON ELECTRONICS INC. | 0515-83368598     | www.liteon.com/en-us            |
| SAMTEC                   | 1-800-726-8329    | www.samtec.com/                 |
| VISHAY                   | 1-800-344-4539    | www.vishay.com/                 |
| PANASONIC                | 0571-87257895     | www.panasonic.cn/               |
| BOURNS                   | +1 951-781-5500   | www.bourns.com/                 |
| YAGEO                    | +886 2 6629 9999  | www.yageo.com/en/Home           |
| MAXIM                    | 408-601-1000      | www.maximintegrated.com/en.html |

Note:

Indicate that you are using the MAX40070 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40070EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX40070

## MAX40070 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                 | MAXINV             | MFG PART #                                                                                        | MANUFACTURER                                    | VALUE          | DESCRIPTION                                                                                                                                                                       | COMMENTS   |
|--------|-------|-----------------------------------------|--------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 |     1 | C1                                      | 20-0001U-P6        | GRM188R71E105KA12;TMK107B7105KA; 06033C105KAT2A;C1608X7R1E105K080AE                               | MURATA;TAIYO YUDEN;AVX;TAIYO YUDEN              | 1UF            | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                      |            |
|      2 |     1 | C2                                      | 20-000U1-03        | 885012206071;C1608X7R1E104K080AA; C0603C104K3RAC;GRM188R71E104KA01; C1608X7R1E104K;06033C104KAT2A | WURTH ELECTRONICS INC;TDK;KEMET;MURATA;TDK;AV X | 0.1UF          | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                    |            |
|      3 |     1 | C3                                      | 20-0005P-I2        | C0805C509C5GAC                                                                                    | KEMET                                           | 5PF            | CAP; SMT (0805); 5PF; 50V; C0G; CERAMIC                                                                                                                                           |            |
|      4 |     2 | C4, C5                                  | EC111000006353     | 06033C101KAT2A                                                                                    | AVX                                             | 100PF          | CAP; SMT (0603); 100PF; 10%; 25V; X7R; CERAMIC                                                                                                                                    |            |
|      5 |     8 | ENB, GND_1, HYST, IM, IP, OUT, REF, VPU | 02-TPCOMP5007-00   |                                                                                                   | 5007 KEYSTONE                                   | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |            |
|      6 |     1 | GND                                     | 02-TPCOMP5006-00   |                                                                                                   | 5006 KEYSTONE                                   | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |            |
|      7 |     1 | J1                                      | 01-TSW10307TS3P-17 | TSW-103-07-T-S                                                                                    | SAMTEC                                          | TSW-103-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                                                  |            |
|      8 |     7 | J2-J8                                   | 01-TSW10207TS2P-17 | TSW-102-07-T-S                                                                                    | SAMTEC                                          | TSW-102-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                                                                           |            |
|      9 |     4 | MH1-MH4                                 | 02-SOM35016H-00    | 9032                                                                                              | KEYSTONE                                        | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                         |            |
|     10 |     1 | R1                                      | 80-0100K-25        | CRCW0805100KFK;RK73H2ATTD1003; ERJ-6ENF1003                                                       | VISHAY DALE;KOA SPEER;PANASONIC                 | 100K           | RES; SMT (0805); 100K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                |            |
|     11 |     1 | R2                                      | 80-003K3-25        | CRCW08053K30FK                                                                                    | VISHAY DALE                                     | 3.3K           | RES; SMT (0805); 3.3K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                |            |
|     12 |     1 | R3                                      | 80-0499K-25        | CRCW0805499KFK                                                                                    | VISHAY DALE                                     | 499K           | RES; SMT (0805); 499K; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                                                |            |
|     13 |     1 | U1                                      | 00-SAMPLE-01       | MAX40070_WLP                                                                                      | MAXIM                                           | MAX40070_WLP   | EVKIT PART - IC; CC10; HIGH VOLTAGE COMPARATOR; PACKAGE OUTLINE DRAWING: 21-100566; PACKAGE CODE: N81B1+1; 0.35MM PITCH; WLP8                                                     |            |
|     14 |     1 | U2                                      | 00-SAMPLE-03       | MAX40070_TDFN                                                                                     | MAXIM                                           | MAX40070_TDFN  | EVKIT PART - IC; CC10; HIGH VOLTAGE COMPARATOR; PACKAGE OUTLINE DRAWING: 21-100514; LAND PATTERN NUMBER: 90-100183 PACKAGE CODE: T822C+6C; 0.50MM PITCH; TDFN8                    |            |
|     15 |     1 | VDD                                     | 02-TPCOMP5005-00   |                                                                                                   | 5005 KEYSTONE                                   | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN                      |            |
|     16 |     1 | PCB                                     | N/A                | CC10_WLP_LABS_P1                                                                                  | MAXIM                                           | PCB            | PCB:CC10_WLP_LABS_P1                                                                                                                                                              | -          |

| PURCHASE(DNP)   | PURCHASE(DNP)   | PURCHASE(DNP)   | PURCHASE(DNP)   | PURCHASE(DNP)   | PURCHASE(DNP)   | PURCHASE(DNP)   | PURCHASE(DNP)   |
|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| ITEM QTY        | REF             | MAXINV          | MFG PART #      | MANUFACTURER    | VALUE           | DESCRIPTION     | COMMENTS        |
| TOTAL           | 0               |                 |                 |                 |                 |                 |                 |

| not assembled on PCB and will be shipped with PCB)   | not assembled on PCB and will be shipped with PCB)   | not assembled on PCB and will be shipped with PCB)   | not assembled on PCB and will be shipped with PCB)   | not assembled on PCB and will be shipped with PCB)   | not assembled on PCB and will be shipped with PCB)   | not assembled on PCB and will be shipped with PCB)   | not assembled on PCB and will be shipped with PCB)   |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| ITEM QTY                                             | REF                                                  | MAXINV                                               | MFG PART #                                           | MANUFACTURER                                         | VALUE                                                | DESCRIPTION                                          | COMMENTS                                             |
| TOTAL                                                | 0                                                    |                                                      |                                                      |                                                      |                                                      |                                                      |                                                      |

Evaluates: MAX40070

## MAX40070 Evaluation Kit

## MAX40070 EV Kit Schematic

<!-- image -->

Evaluates: MAX40070

## MAX40070 Evaluation Kit

## MAX40070 EV Kit PCB Layouts

MAX40070 EV Kit PCB Layout-Silk Top

<!-- image -->

MAX40070 EV Kit PCB Layout-Bottom

<!-- image -->

Evaluates: MAX40070

MAX40070 EV Kit PCB Layout-Top

<!-- image -->

MAX40070 EV Kit PCB Layout-Silk Bottom

<!-- image -->

│

## MAX40070 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX40070