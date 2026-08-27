<!-- lastmod 2022-08-02 -->
## MAX20412 Evaluation Kit

## General Description

The MAX20412 evaluation kit (EV kit) demonstrates the MAX20412  automotive  2-channel  step-down  controller. The EV kit operates over a 3V to 5.5V input range. Output 1 is set for 0.825V and up to 60A load and output 2 is set for 0.825V and up to 30A load.

## Benefits and Features

- Differential Remote Voltage Sensing
- 3V to 5.5V Input Supply Range
- I 2 C-Controlled 0.25V to 1.275V Output Voltage Range
- 2.2MHz Operation
- ±2% Output-Voltage Accuracy
- Power-Good Output
- Current-Mode, Forced-PWM, and Skip Operation
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- MAX20412 EV Kit Board

## Quick Start

## Recommended Equipment

- MAX20412 EV kit
- 5V, 20A DC power supply
- Load capable of up to 60A
- Digital voltmeter (DVM)

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are completed .

- 1) Verify  that  jumpers  J1  and  J4  have  shunts  placed across pins 1-2.
- 2) Connect the power supply between the PVDD and the PGND test points.
- 3) Preset the load to the desired level, up to 30A. Make sure the load is disabled.
- 4) Connect the electronic load between the OUT2 and the PGND test points. Use short high-gauge wires to ensure low voltage drop on the wires to help maintain voltage headroom on the load.
- 5) Connect the DVM between the V2 SNS and G SNS pins of J38.
- 6) Turn on the power supply.
- 7) Enable the electronic load.
- 8) Verify  that  the  voltage  at  the  OUT2  test  point  is approximately 0.825V.
- 9) Disable the load.
- 10) Turn off the power supply.
- 11) Disconnect the load from the OUT2 and the PGND test points.
- 12) Disconnect the DVM from the V2 SNS and G SNS pins.
- 13) Preset the load to the desired level, up to 60A. Make sure the load is disabled.
- 14) Connect the electronic load between the OUT1 and the PGND test points. Use short high-gauge wires to ensure low voltage drop on the wires to help maintain voltage headroom on the load.
- 15) Connect the DVM between the V1 SNS and G SNS pins of J39.
- 16) Turn on the power supply.
- 17) Enable the load.
- 18) Verify  that  the  voltage  at  the  OUT1  test  point  is approximately 0.825V.

<!-- image -->

Evaluates: MAX20412

## MAX20412 Evaluation Kit

## Detailed Description of Hardware

## EN1, EN2 Enable (J1, J4)

Place a shunt across pins 1-2 on jumper J1 for normal operation of output 1. Place a shunt across pins 1-2 on jumper  J4  for  normal  operation  of  output  2.  To  disable either output, place the shunt across pins 2-3. When J1 and J4 are both shunted to GND, the IC is in shutdown mode  and  input  current  is  reduced  to  5µA  (typ).  See Table 1.

## Synchronization Input/Output (SYNC)

The EV kit  features  a  SYNC  connection  that  allows  for synchronization input or output. The function is set by the SO[1:0] bits, as defined in the MAX20412 IC data sheet. See Table 2.

## I 2 C Slave Address (ADDR)

The EV kit provides jumper J3 to set the ADDR register. Pulldown resistor R1 is used to set ADDR = 0. If ADDR = 1 is desired, place a shunt across pins 1-2 on jumper J3. Refer to Table 1 in the MAX20412 IC data sheet for more details on the I 2 C slave address.

## Power-Good Output ( PGOOD )

The  EV  kit  features  an  open-drain  PG\_  output  that asserts when the output voltage is between the PG\_UV and PG\_OV thresholds. PG\_ is asserted after the powergood active timeout period. An additional 220μs (typ) PG\_ delay exists  following  soft-start  or  DVS  slewing.  PG\_  is deasserted after a UV/OV propagation delay if the output voltage is outside the PG\_ UV/OV thresholds. PG\_ is connected to a 10kΩ pullup resistor.

## V1 Sense/V2 Sense (J39/J38)

The  EV  kit  provides  output  sense  lines  for  VOUT1  and VOUT2 (V1 SNS and V2 SNS on J39 and J38). V SNS and G SNS are Kelvin connected to the output capacitors for  accurate  measurements,  even  under  load.  A  ground reference pin is also provided.

## Output Voltage

Output voltage is selectable using the VID registers (refer to Table 10 in the MAX20412 IC data sheet). Be aware of the VIDMAX registers (Table 4 in the IC data sheet), as this might limit the maximum output voltage.

## OUT1 Single-Phase Operation

OUT1  can  be  configured  for  single-phase  operation. Remove  inductor  L2.  Move  the  0Ω  resistor  from  R16 to R9.

## Table 1. EN1, EN2 Configuration (J1, J4)

| SHUNT POSITION   | DESCRIPTION                                                     |
|------------------|-----------------------------------------------------------------|
| Pins 1-2         | Connects the EN pin to the voltage at PVDD for normal operation |
| Pins 2-3         | Connects the EN pin to ground to enter shutdown mode            |

## Table 2. SYNC Settings

| BIT     | BIT DESCRIPTION                                                                                                                                                       |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SO[1:0] | SYNC I/O Select 00 - Master: Input, rising edge starts cycle 01 - Master: Input, falling edge starts cycle 10 - Master: Output, falling edge starts cycle 11 - Unused |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20412EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX20412

│

## MAX20412 EV Kit Bill of Materials

| REFERENCE                       | DESCRIPTION                                                     | MFR       | MFR P/N              | DIGIKEY P/N            | ALTERNATIVE                         |
|---------------------------------|-----------------------------------------------------------------|-----------|----------------------|------------------------|-------------------------------------|
| 4 C1-3, C6                      | 1uF 10%, 16V X7R Ceramic (0603)                                 | TDK       | CGA3E1X7R1C105K080AC | 445-12539-2-ND         | or equivalent 16V/25V               |
| 3 C4, C10, C11                  | 100nF 10%, 16V X7R Ceramic (0402)                               | TDK       | CGA2B1X7R1C104K050BC | 445-5613-2-ND          | or equivalent 16V/25V               |
| 12 C5, C7-9, C13-18, C21, C24   | 10uF 20%, 16V X7R Ceramic (1206)                                | TDK       | CGA5L1X7R1C106M160AC | 445-12903-1-ND         | or equivalent 16V/25V and/or 10%    |
| 3 C12, C23, C25                 | 18nF 5%, 50V X7R Ceramic (0402)                                 | Murata    | GCM155R71H183JA55D   | GCM155R71H183JA55D-Nor | equivalent                          |
| 16 C19, C22, C26, C28-40        | 47uF 20%, 4V X7S Ceramic (1206)                                 | TDK       | CGA5L1X7S0E476M      | 445-8037-1-ND          | or equivalent                       |
| 3 C20, C27, C50                 | 47nF 10%, 16V X7R Ceramic (0402)                                | TDK       | CGA2B2X7R1C473K050BA | 445-5611-1-ND          | or equivalent 16V/25V               |
| 1 C48                           | 470uF 20%, 6.3V POSCAP (2917)                                   | Panasonic | 6TPB470M             | P16619CT-ND            |                                     |
| 5 J1, J3-4, J38-39              | 3-pin header, 2.54mm, comes in 36-40 pin strips (cut to fit)    | Sullins   | PEC36SAAN            | S1012E-36-ND           | or equivalent                       |
| 2 (J1, J4)                      | Shunts                                                          | Kycon     | SX1100-B             |                        | or equivalent                       |
| 16 J2, J14, J17, J22-23, J27-37 | WIRE, BUSS, 20G plated solid copper 0.25 inch U-shape wire loop |           |                      |                        |                                     |
| 1 J24                           | 2x10 Right Angle Receptacle (0.1in)                             | Samtec    | SSQ-110-02-T-D-RA    | SAM1224-10-ND          | or equivalent                       |
| 3 L1-3                          | 80nH, 1.5mΩ typ@25C, inductor                                   | TDK       | HPL505028F080KD3P    |                        |                                     |
| 6 Q1-6                          | MOSFET N-Ch, 1.6mΩ, 25V, 31A                                    | Infineon  | BSZ014NE2LS5IFATMA1  |                        |                                     |
| 7 R5-8, R10-11, R16             | 0Ω Resistor (0402)                                              | Panasonic | ERJ-2GE0R00X         | P0.0JTR-ND             | or equivalent                       |
| 3 R15, R24, R32                 | 2Ω, 1% Resistor (0402)                                          | Panasonic | ERJ-2GEJ2R0X         | P2.0JTR-ND             | or equivalent                       |
| 3 R2, R19, R25                  | 10Ω, 1% Resistor (0402)                                         | Panasonic | ERJ-2RKF10R0X        | P10.0LTR-ND            | or equivalent                       |
| 2 R26-27                        | 100Ω, 1% Resistor (0402)                                        | Panasonic | ERJ-2RKF1000X        | P100LTR-ND             | or equivalent                       |
| 3 R13, R20-21                   | 2.37kΩ, 1% Resistor (0402)                                      | Panasonic | ERJ-2RKF2371X        | P2.37KLTR-ND           | or equivalent                       |
| R12, R17-18                     | 3.09kΩ, 1% Resistor (0402)                                      | Panasonic | ERJ-2RKF3091X        | P3.09KLTR-ND           | or equivalent                       |
| 3 3 R14, R22-23                 | 6.19kΩ, 1% Resistor (0402)                                      | Panasonic | ERJ-2RKF6191X        | P6.19KLTR-ND           | or equivalent                       |
| R3-4, R28-31                    | 10.0kΩ, 1% Resistor (0402)                                      | Panasonic | ERJ-2RKF1002X        | P10.0KLTR-ND           | or equivalent                       |
| 6 1 R1                          | 100kΩ, 1% Resistor (0402)                                       | Panasonic | ERJ-2RKF1003X        | P100KLTR-ND            | or equivalent                       |
| 3 TH1-3                         | 10kΩ, NTC Thermistor (0603)                                     | TDK       | NTCG163JX103DTDS     | 445-174519-1-ND        | NTCG163JF103FTDS (445- 174516-1-ND) |
| 1 U1                            | Automotive Step-Down Converter                                  | Maxim     | MAX20412ATJA/V+      |                        |                                     |
| 1 U2                            | MOSFET Driver                                                   | Maxim     | MAX15492BGTA/V+      |                        |                                     |
| 1                               | PCB: MAX20412 EVALUATION                                        |           |                      |                        |                                     |
| 2 oz.                           | KIT#                                                            |           |                      |                        |                                     |
| DO NOT INSTALL                  |                                                                 |           |                      |                        |                                     |
| C41-47, C49                     |                                                                 |           |                      |                        |                                     |
| 11 J5-13, J20-21 TP 1.27mm      | drill                                                           |           |                      |                        |                                     |
| 6 J18-19, J25-26 Banana Jack    |                                                                 |           |                      |                        |                                     |
| J15-16, 1 R9                    |                                                                 |           |                      |                        |                                     |

## MAX20412 EV Kit Schematic

<!-- image -->

│

## MAX20412 EV Kit PCB Layouts

MAX20412 EV Kit -Top

<!-- image -->

MAX20412 EV Kit -Internal 2

<!-- image -->

## Evaluates: MAX20412

MAX20412 EV Kit -Internal 1

<!-- image -->

MAX20412 EV Kit -Internal 3

<!-- image -->

│

## MAX20412 EV Kit PCB Layouts (continued)

MAX20412 EV Kit -Internal 4

<!-- image -->

MAX20412 EV Kit -Internal 6

<!-- image -->

MAX20412 EV Kit -Internal 5

<!-- image -->

MAX20412 EV Kit -Bottom

<!-- image -->

│

## MAX20412 EV Kit PCB Layouts (continued)

MAX20412 EV Kit -Top Silkscreen

<!-- image -->

MAX20412 EV Kit -Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/19            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX20412