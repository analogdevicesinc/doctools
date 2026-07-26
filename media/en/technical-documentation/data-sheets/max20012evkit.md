<!-- lastmod 2022-08-02 -->
## MAX2012 Evaluation Kit

## General Description

The MAX20012 evaluation kit (EV kit) demonstrates the MAX20012B automotive 2-channel step-down converters. The EV kit operates over a 3V to 5.5V input range. Output 1 is set for 0.98V and up to 24A load and output 2 is set for 0.95V and up to 12A load.

## Benefits and Features

- Differential Remote Voltage Sensing
- 3V to 5.5V Input Supply Range
- I 2 C-Controlled 0.5V to 1.5875V Output Voltage Range
- 2.2MHz Operation
- ±2% Output-Voltage Accuracy
- Power-Good Output
- Current-Mode, Forced-PWM, and Skip Operation
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- MAX20012 EV Kit Board

## Quick Start

## Recommended Equipment

- MAX20012 EV kit
- 5V, 7A DC power supply
- Electronic load capable of 24A
- Digital voltmeter (DVM)

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are completed .

- 1) Verify  that  jumpers  J4  and  J5  have  shunts  placed across pins 1-2.
- 2) Connect the power supply between the PVDD and the PGND4 test points.
- 3) Preset the electronic load to 12A. Make sure the load is disabled.
- 4) Connect the electronic load between the OUT2 and the PGND2 test points. Use short high-gauge wires to ensure low voltage drop on the wires to help maintain voltage headroom on the load.
- 5) Connect the DVM between the OUT2 and PGND2 test points.
- 6) Turn on the power supply.
- 7) Enable the electronic load.
- 8) Verify  that  the  voltage  at  the  OUT2  test  point  is approximately 0.95V.
- 9) Disable the electronic load.
- 10) Turn off the power supply.
- 11) Disconnect  the  electronic  load  from  the  OUT2  and the PGND2 test points.
- 12) Disconnect the DVM from the OUT2 and the PGND2 test points.
- 13) Preset the electronic load up to 24A. Make sure the load is disabled.
- 14) Connect the electronic load between the OUT1 and the PGND1 test points. Use short high-gauge wires to ensure low voltage drop on the wires to help maintain voltage headroom on the load.
- 15) Connect the DVM between the OUT1 and the PGND1 test points.
- 16) Turn on the power supply.
- 17) Enable the electronic load.
- 18) Verify  that  the  voltage  at  the  OUT1  test  point  is approximately 0.98V.

<!-- image -->

Evaluates: MAX2012B

## MAX20012 Evaluation Kit

## Detailed Description of Hardware

## EN1, EN2 Enable (J4, J5)

Place a shunt across pins 1-2 on jumper J4 for normal operation of output 1. Place a shunt across pins 1-2 on jumper  J5  for  normal  operation  of  output  2.  To  disable either output, place the shunt across pins 2-3. When J4 and J5 are both shunted to GND, the IC is in shutdown mode  and  input  current  is  reduced  to  5µA  (typ).  See Table 1.

## Synchronization Input/Output (SYNC)

The EV kit  features  a  SYNC  connection  that  allows  for synchronization input or output. The function is set by the SO[1:0] bits, as defined in the MAX20012B IC data sheet. See Table 2.

## I 2 C Slave Address (ADDR)

The EV kit provides jumper J6 to set the ADDR register. Pulldown resistor R19 is used to set ADDR = 0. If ADDR = 1 is desired, place a shunt across pins 1-2 on jumper J6. Refer to Table 1 in the MAX20012B IC data sheet for more details on the I 2 C slave address.

## Power-Good Output ( PGOOD )

The  EV  kit  features  an  open-drain  PG\_  output  that asserts when the output voltage is between the PG\_UV and PG\_OV thresholds. PG\_ is asserted after the powergood active timeout period. An additional 220μs (typ) PG\_ delay exists  following  soft-start  or  DVS  slewing.  PG\_  is deasserted after a UV/OV propagation delay if the output voltage is outside the PG\_ UV/OV thresholds. PG\_ is connected to a 1kΩ pullup resistor.

## Output Voltage

Output voltage is selectable using the VID registers (refer to Table 9 and Table 10 in the MAX20012B IC data sheet). Be aware of the VIDMAX registers (Table 4 in the IC data sheet), as this might limit the maximum output voltage.

## OUT1 Single-Phase Operation

OUT1  can  be  configured  for  single-phase  operation. Remove  inductor  L3.  Move  the  0Ω  resistor  from  R33 to R34.

## Table 1. EN1, EN2 Configuration (J4, J5)

| SHUNT POSITION   | DESCRIPTION                                                     |
|------------------|-----------------------------------------------------------------|
| Pins 1-2         | Connects the EN pin to the voltage at PVDD for normal operation |
| Pins 2-3         | Connects the EN pin to ground to enter shutdown mode            |

*Default position.

## Table 2. SYNC Settings

| BIT     | BIT DESCRIPTION                                                                                                                                                       |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SO[1:0] | SYNC I/O Select 00 - Master: Input, rising edge starts cycle 01 - Master: Input, falling edge starts cycle 10 - Master: Output, falling edge starts cycle 11 - Unused |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20012EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX20012B

│

## MAX20012 EV Kit Bill of Materials

| REFERENCE DESIGNATORS                                                                                 |   QTY | DESCRIPTION                                                     | MFG. PART NUMBERS         | Y = Lead-free & RoHS Compliant R = RoHS Compliant Only N = Non-Compliant   |
|-------------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------|---------------------------|----------------------------------------------------------------------------|
| C1, C10, C20, C22, C23, C24 C41, C42, C43                                                             |     9 | 10uF 10%, 16V X7R ceramic capacitor (1206)                      | TDK C3216X7R1C106K        | Y                                                                          |
| C2, C11, C35                                                                                          |     3 | 0.1uF 10%, 50V X7R ceramic capacitor (0603)                     | Murata GRM188R71H104K     |                                                                            |
| C3, C9, C12, C21                                                                                      |     4 | 1uF 10%, 16V X7R ceramic capacitor (0603)                       | Murata GRM188R71C105K     |                                                                            |
| C4, C13, C36                                                                                          |     3 | 0.01uF 10%, 50V X7R ceramic capacitor (0603)                    | Murata GRM188R71H103K     |                                                                            |
| C5, C6, C7, C8, C14, C15, C16, C17, C18, C19                                                          |    10 | 47uF 10%, 6.3V X7R ceramic capacitor (1210)                     | Taiyo Yuden LMK325B7476MM |                                                                            |
| C25                                                                                                   |     1 | 47uF, 50V aluminum electrolytic capacitor (E)                   | Panasonic EEE-FK1H470P    | Y                                                                          |
| PVDD, PVDD1, PVDD2, PVDD3, OUT1, OUT2, PGND1, PGND2, PGND3, PGND4, EN1, EN2, PG1, PG2, SYNC, SDA, SCL |    17 | WIRE, BUSS, 20G plated solid copper 0.25 inch U-shape wire loop |                           |                                                                            |
| J1                                                                                                    |     1 | 2X10 RIGHT ANGLE RECEPTACLE(0.1IN)                              | SAMTEC, SSW-110-02-S-D-RA | Y                                                                          |
| J4, J5, J6                                                                                            |     3 | 3 pin header, 2.54MM, Comes in 36-40 Pin Strips (CUT TO FIT)    | SULLINS PEC36SAAN         | Y                                                                          |
| L1, L2, L3                                                                                            |     3 | 0.1uH, 3.6m Ω typ@25C, inductor                                 | Vishay IHLP2020BZERR10M01 | Y                                                                          |
| N1, N2, N3, N4, N5, N6                                                                                |     6 | MOSFET, N-CH, 8.3mohm, 20V, 20A                                 | Vishay SiS452DN           |                                                                            |
| R1, R7, R15                                                                                           |     3 | 2.49K ohms 1% resistor (0402)                                   |                           |                                                                            |
| R2, R6, R14                                                                                           |     3 | 5.36K ohms 1% resistor (0402)                                   |                           |                                                                            |
| R3, R4, R5, R8                                                                                        |     4 | 1K ohms 1% resistor (0402)                                      | Any                       |                                                                            |
| R9, R10, R11, R12, R13, R18, R27, R28, R29, R30, R31, R32, R33                                        |    13 | 0 ohms 1% resistor (0402)                                       | Any                       | Y                                                                          |
| R16, R17                                                                                              |     2 | 10K ohms 1% resistor (0402)                                     | Any                       |                                                                            |
| R19                                                                                                   |     1 | 100K ohms 1% resistor (0402)                                    | Any                       | Y                                                                          |
| U2                                                                                                    |     1 | MOSFET Driver                                                   | Maxim MAX15492            |                                                                            |
| U1                                                                                                    |     1 | Automotive Step-down Converter                                  | Maxim MAX20012BATJC/V+    | Y                                                                          |
|                                                                                                       |     2 | Shunts                                                          | Kycon SX1100-B            | Y                                                                          |
| 2 oz.                                                                                                 |     1 | PCB: MAX20012 EVALUATION KIT#                                   |                           |                                                                            |
|                                                                                                       |     0 |                                                                 |                           |                                                                            |
| DO NOT POPULATE                                                                                       |       | DO NOT POPULATE                                                 |                           |                                                                            |
| C30, C31, C32, C33, C34, C37, C38                                                                     |     0 | ceramic capacitor (0402)                                        |                           |                                                                            |
| C39, C40                                                                                              |     0 | Poscap (E)                                                      |                           |                                                                            |
| D1, D2                                                                                                |     0 |                                                                 |                           |                                                                            |
| R20, R21, R22,R23, R24, R25, R26, R34, R39, R40                                                       |     0 |                                                                 |                           |                                                                            |
| J2, J3                                                                                                |     0 | 2x5 receptacle                                                  |                           |                                                                            |
| J7, J8                                                                                                |     0 | 2 pin header                                                    |                           |                                                                            |

Evaluates: MAX20012B

## MAX20012 EV Kit Schematics

<!-- image -->

Evaluates: MAX20012B

## MAX20012 EV Kit Schematics (continued)

<!-- image -->

## MAX20012 EV Kit PCB Layouts

<!-- image -->

│

## MAX20012 EV Kit PCB Layouts (continued)

<!-- image -->

│

## MAX20012 EV Kit PCB Layouts (continued)

<!-- image -->

│

## MAX20012 EV Kit PCB Layouts (continued)

<!-- image -->

│

## MAX20012 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                        | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------|-----------------|
|                 0 | 4/15            | Initial release                                                    | -               |
|                 1 | 4/17            | Replaced BOM and embedded schematics and PCB layouts in data sheet | 2 - 9           |
|                 2 | 1/18            | Added MAX20012B to data sheet as one of the parts evaluated        | 1 - 9           |
|                 3 | 3/19            | Updated all instances of MAX20012 IC to MAX20012B                  | 1-9             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX20012B