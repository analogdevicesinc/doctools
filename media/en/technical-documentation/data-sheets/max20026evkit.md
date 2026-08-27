<!-- lastmod 2022-11-23 -->
<!-- image -->

## Evaluates: MAX20026/MAX20026S

## General Description

The MAX20026 evaluation kit (EV kit) demonstrates the MAX20026/MAX20026S  Automotive  quad,  low-voltage step-down DC-DC converters with low noise LDO.

The EV kit operates over an input range of 3V to 5.5V. DC-DC outputs 1-4 are factory set to 3.3V, 1.0V, 1.8V and 1.5V, respectively. The LDO output is set to 2.5V. Each DC-DC output can deliver up to 1A load, and the LDO can deliver up to 0.3A load.

## Features and Benefits

- Complete Power Solution
- Quad Step-Down DC-DC Converters up to 1A Each
- 3V to 5.5V Input Supply Range
- Integrated Linear Regulator (LDO)
- Adjustable LDO Output Voltage
- Separate	LDO	Input	to	Increase	Efficiency
- Individual Enables, One System Power Good
- 3.2MHz Switching Frequency Operation
- ±3% Output Voltage Accuracy
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

©

## MAX20026 Evaluation Kit

## Quick Start

## Required Equipment

- MAX20026EVKIT#
- 6V, 1A DC power supply
- Electronic load capable of 1A
- Digital Voltameter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation: Caution: Do not turn on supplies until all connections are made .

- 1) Verify that jumpers are installed on EN1, EN2, EN3, EN4, EN5 and J1.
- 2) Connect the power supply between the +5V and GND.
- 3) Connect the electronic load between the OUT1 and GND1.
- 4) Connect the DVM between OUT1 and GND1.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT1 test point is approximately 3.3V.
- 8) Turn	off	the	electronic	load.
- 9) Repeat the testing on OUT2, OUT3, OUT4 and verify OUT2 = 1.0V, OUT3 = 1.8V, OUT4 = 1.5V
- 10)  Connect the DVM between OUT5 and the nearest GND\_.
- 11)  Do not connect the electronic load to OUT5 as the LDO is rated for 300mA.
- 12)  Verify OUT5 = 2.5V

owners.

## Detailed Description of Hardware

## Enable (EN)

Place a shunt on the EN\_ jumpers for normal operation. To place the device into shutdown mode, remove the shunt.

## Power Good (PGOOD)

The  EV  kit  provides  a PGOOD test  point  to  monitor the  status  of  the  device  output.  PGOOD  operation  is explained in the MAX20026/MAX20026S IC data sheet. Place a shunt on J1 to pull the open drain PGOOD up to	OUT1	through	a	10kΩ	resistor.	The	jumper	allows	for quick removal of the resistor for operating and shutdown current measurements and allows for PGOOD to pull-up to other voltages. Please observe the absolute maximum rating for PGOOD listed in the IC data sheet.

## LDO Input Supply (PV5)

The input to the LDO is powered from +5V through the R4	0Ω	resistor.	Removing	R4	allows	an	alternate	voltage to  be  applied  to  the  PV5  test  point.  Connecting  PV5  to

## Evaluates: MAX20026/MAX20026S

OUT1 increases efficiency from 50% to 75%. Observe the absolute  maximum  rating  for  PV5  listed  in  the  IC  data sheet.

## Adjustable Output Voltage

For  adjustable  variants  of  the  MAX20026/MAX20026S, the LDO and buck converter output voltages can be set by an external resistor-divider. The FB\_ input is shorted to  ground  through  R TOP .  This  sets  the  output  for  the factory  setting.  Removing  R TOP   and  using  R TOP   and RBOT as a resistor-divider allows for an adjustable voltage to be set.

<!-- formula-not-decoded -->

where V FB\_ = 1.25V for MAX20026 LDO, 1V for MAX20026 buck  converters,  1V  for  MAX20026S  LDO,  0.8V  for MAX20026S buck converters.

Select R BOT less	than	or	equal	to	100kΩ.

## Ordering Information

| PART           | TYPE            |
|----------------|-----------------|
| MAX20026EVKIT# | MAX20026 EV Kit |

#Denotes RoHS compliant.

## MAX20026 EV Kit Bill of Materials

| ITEM REF_DES                       | DNI/DNP QTY   | MFGPART #                                                             | MANUFACTURER                         | VALUE           | DESCRIPTION                                                                                                                               | COMMENTS   |
|------------------------------------|---------------|-----------------------------------------------------------------------|--------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1 +5V, GND, GND1-GND4, VOUT1-VOUT5 | -             | 11 9020 BUSS                                                          | WEICO WIRE                           | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUS TYPE-S; 20AWG                                                   |            |
| 2 C1-C4                            | -             | 4 C1206C106K8RAC; GRM31CR71A106K; LMK316B7106KL                       | KEMET; TAIYO YUDEN; MURATA           | 10UF            | CAPACITOR; SMT; 1206; CERAMIC; 10uF; 10V; 10%; X7R; -55degC to + 125degC; +/- 15% from -55degC to +125degC, USE 20-0010u-A4 FOR NEWDESIGN |            |
| 3 C5, C21                          | -             | 2 GRM188R71A105K; C0603X7R100-105; C1608X7R1A105K080AC; LMK107B7105KA | MURATA; VENKEL LTD; TDK; TAIYO YUDEN | 1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                                 |            |
| 4 C6-C9                            | -             | 4 GRM188R71A225KE15; CL10B225KP8NNN                                   | MURATA; SAMSUNG                      | 2.2UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                |            |
| 5 C10                              | -             | 1 EEHZC1V470P                                                         | PANASONIC                            | 47UF            | CAPACITOR; SMT(CASE_D); POLYMER; 47UF; 35V; TOL=20%                                                                                       |            |
| 6 C15                              | -             | 1 GRM21BR71A475KA73; LMK212B7475KG-T                                  | MURATA/TAIYO YUDEN                   | 4.7UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
| 7 J1, EN1-EN5                      | -             | 6 PEC02SAAN                                                           | SULLINS                              | PEC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                 |            |
| 8 L1-L4                            | -             | 4 MDT2520-CR1R5MDD                                                    | TOKO                                 | 1.5UH           | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 1.5UH; TOL=+/-20%; 2.20A                                                                     |            |
| 9 PG1, PV5, SYNC                   | -             | 3                                                                     | 5000 KEYSTONE                        | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                          |            |
| 10 R1                              | -             | 1 CRCW060310K0JN; ERJ-3GEYJ103V                                       | VISHAY DALE; PANASONIC               | 10K             | RESISTOR; 0603; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                    |            |
| 11 U1                              | -             | 1 MAX20026ATIA/V+                                                     | MAXIM                                | MAX20026ATIA/V+ | IC; PMIC; AUTOMOTIVE QUAD; LOW-VOLTAGE STEP-DOWN DC-DC CONVERTERS WITH LOWNOISE LDO; TQFN28-EP 4X4                                        |            |
| 12 C11-C14                         | DNP           | 4 N/A                                                                 | N/A                                  | OPEN            | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                                  |            |
| 13 R2, R11, R13, R15, R17          | DNP           | 5 N/A                                                                 | N/A                                  | SHORT           | PACKAGE OUTLINE 0402 RESISTOR                                                                                                             |            |
| 14 R3                              | DNP           | 1 N/A                                                                 | N/A                                  | OPEN            | PACKAGE OUTLINE 0603 RESISTOR                                                                                                             |            |
| 15 R4                              | DNP           | 1 N/A                                                                 | N/A                                  | SHORT           | PACKAGE OUTLINE 0805 RESISTOR                                                                                                             |            |
| 16 R12, R14, R16, R18              | DNP           | 4 N/A                                                                 | N/A                                  | OPEN            | PACKAGE OUTLINE 0402 RESISTOR                                                                                                             |            |

TOTAL

53

## MAX20026 EV Kit Schematic

<!-- image -->

## MAX20026 EV Kit PCB Layout Diagrams

MAX20026 EV Kit PCB Layout-Silk Top

<!-- image -->

MAX20026 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX20026 EV Kit PCB Layout Diagrams (continued)

MAX20026 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX20026 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX20026 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20026 EV Kit PCB Layout-Solder View

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/16            | Initial release                                                                                  | -               |
|                 1 | 4/19            | Updated title to add MAX20026S; updated General Description and Detailed Description of Hardware | 1-7             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX20026/MAX20026S