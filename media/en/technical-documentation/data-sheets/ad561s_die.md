<!-- lastmod 2022-01-10 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detailed requirements for Analog Devices space qualified die including die qualification as described for Class K in MIL-PRF-38534, Appendix C, Table C-II except as modified herein.

The manufacturing flow described in the STANDARD DIE PRODUCTS PROGRAM brochure at http://www.analog.com/aerospace is to be considered a part of this specification.

This data sheet specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at www.analog.com/AD561

- The complete part number(s) of this specification follow: 2.0

Part Number

## Description

AD561-000C

Low Cost 10-Bit Monolithic D/A Converter

## Die Information

| Die Size          | Die Thickness   | Bond Pad Metalization   |
|-------------------|-----------------|-------------------------|
| 106 mil x 153 mil | 19 mil ± 2 mil  | Al/Cu                   |

## 3.2 Die Picture

<!-- image -->

Rev.G

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

1.   GND
2.   BPOS
3.   -Vs
4.   LSB
5.   BIT 9
6.   BIT 8
7.   BIT 7
8.   BIT 6
9.   BIT 5
10. BIT 4
11. BIT 3
12. BIT 2
13. MSB
14. +Vs
15. IOUT
16. RFB

## Low Cost 10-Bit

AD561

## AD561

## 3.3

| Digital Input Voltage (V IN ) ..........................................................   | V CC to Ground      |
|--------------------------------------------------------------------------------------------|---------------------|
| Output Voltage Compliance (V OUT ) .............................................           | -2V to +10V         |
| 10V Span Resistor to Ground ...................................................            | V CC to V EE        |
| Bipolar Offset Resistor To Ground ............................................             | V CC to V EE        |
| Operating Temperature Range .................................................              | -55  C to +125  C |
| Storage Temperature Range ....................................................             | -65  C to +150  C |
| Supply Voltage ..........................................................................  | ±16.5V              |
| Junction Temperature (T J )………………………………... ............                                    | 175°C               |

## Absolute Maximum Ratings Notes

- 1/ TA = 25  C, unless otherwise noted.
- 2/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a)  Qual Sample Size and Qual Acceptance Criteria - 25/2
- (b)  Qual Sample Package - Sidebrazed DIP
- (c)  Pre-screen electrical test over temperature performed post-assembly prior to die qualification.

|    |
|-----|
|    |
|    |
|    |
|    |
|    |

## 4.0

| AD561   |
|---------|

|    |    |
|-----|----|
|    |   |

Table I Notes:

- 1/ VCC = +5V, VEE = -15V, TA = 25  C, unless otherwise specified.
- 2/ Also tested in CMOS mode. VCC = +15V, VEE = -15V, VIH = 10.5V, VIL = 4.5V.

|    |    |
|-----|----|
|    |    |
|    |    |
|    |   |
|    |    |
|    |   |
|    |   |
|    |    |
|    |    |
|    |    |
|    |   |

## Table II Notes:

- 1/ VCC = +5V, VEE = -15V, unless otherwise specified.
- 2/ Also tested in CMOS mode. VCC = +15V, VEE = -15V, VIH = 10.5V, VIL = 4.5V.

| Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table Il with the following exceptions)   |
|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                          | Symbol                                                                                                                             | Sub- groups                                                                                                                        |                                                                                                                                    |                                                                                                                                    | Post Burn In LimitPost Life Test Limit                                                                                             | Post Burn In LimitPost Life Test Limit                                                                                             | Life Test Delta                                                                                                                    | Units                                                                                                                              |
| Parameter                                                                                                                          | Symbol                                                                                                                             | Sub- groups                                                                                                                        | Min                                                                                                                                | Max                                                                                                                                | Min                                                                                                                                | Max                                                                                                                                | Life Test Delta                                                                                                                    | Units                                                                                                                              |
| Power Supply Current                                                                                                               | lcc                                                                                                                                | 1                                                                                                                                  |                                                                                                                                    | 10                                                                                                                                 |                                                                                                                                    | 13                                                                                                                                 | ±3                                                                                                                                 | mA                                                                                                                                 |
| Power Supply Current                                                                                                               | lEE                                                                                                                                | 1                                                                                                                                  |                                                                                                                                    | 16                                                                                                                                 |                                                                                                                                    | 19                                                                                                                                 | ±3                                                                                                                                 | mA                                                                                                                                 |
| Output Current                                                                                                                     | loun                                                                                                                               | 1                                                                                                                                  | 1.5                                                                                                                                | 2.4                                                                                                                                | 1.4                                                                                                                                | 2.5                                                                                                                                | ±5                                                                                                                                 | mA                                                                                                                                 |

## 5.0 Life Test/Burn-In Information

- 5.1 HTRB is not applicable for this drawing.
- 5.2 Burn-in is per MIL-STD-883 Method 1015 test condition B or C.
- 5.3 Steady state life test is per MIL-STD-883 Method 1005.

## AD561

## AD561

| Rev   | Description of Change                                                           | Date           |
|-------|---------------------------------------------------------------------------------|----------------|
| A     | Initiate                                                                        | 4-Nov-111      |
| B     | Update web address                                                              | Jan. 25, 2002  |
| C     | Update web address. Change lOUT delta from 5 to 0.5.                            | Aug. 14, 2003  |
| D     | Update header/footer and add to 1.0 Scope description.                          | Feb. 26, 2008  |
| E     | Add Junction Temperature (Tj)....175C to 3.3 Absolute Max. Ratings              | March 28, 2008 |
| F     | Updated Section 4.0c note to indicated pre-screen temp testing being performed. | June 6 2009    |
| G     | Updated Fonts and Sizes to ADI Standards                                        | 22-Sept-2011   |

<!-- image -->