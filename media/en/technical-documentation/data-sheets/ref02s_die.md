<!-- lastmod 2021-12-17 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detailed requirements for Analog Devices space qualified die including die qualification as described for Class K in MIL-PRF-38534, Appendix C, Table C-II except as modified herein.

The manufacturing flow described in the STANDARD DIE PRODUCTS PROGRAM brochure at http://www.analog.com/aerospace is to be considered a part of this specification.

This data sheet specifically details the space grade version of this product.

Part Number . The complete part number(s) of this specification follow:

Part Number

## Description

REF02-000C

+5V Precision Voltage Reference / Temperature Transducer Radiation tested +5V Precision Voltage Reference

REF02R000C

## 2.0 Die Information

## 2.1 Die Dimensions

| Die Size        | Die Thickness   | Bond Pad Metalization   |
|-----------------|-----------------|-------------------------|
| 48 mil x 74 mil | 19 mil ± 2 mil  | Al/Cu                   |

## 3.2 Die Picture

<!-- image -->

1. NC
2. VIN
3. TEMP
4. GND
5. TRIM
6. VOUT
7. NC
8. NC

## +5V Precision Voltage Reference/

## Temperature Transducer

REF02

## 3.3 Absolute Maximum Ratings 1/

| Input Voltage (V IN )                                                                                                                             | ..................................................................... 40V dc                                                                      |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Output Short Circuit Duration .................................................... Indefinite                                                     | Output Short Circuit Duration .................................................... Indefinite                                                     |
| Storage Temperature                                                                                                                               | ................................................................ -65 ° C to +150 ° C                                                              |
| Ambient Operating Temperature Range (T A ) ............................ -55 ° C to +125 ° C Junction Temperature (T J )……………………..…………………....150°C | Ambient Operating Temperature Range (T A ) ............................ -55 ° C to +125 ° C Junction Temperature (T J )……………………..…………………....150°C |

Absolute Maximum Ratings Notes:

- 1/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.

## 4.0 Die Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a) Qual Sample Size and Qual Acceptance Criteria - 25/2
- (b)  Qual Sample Package - DIP
- (c)  Pre-screen electrical test over temperature performed post-assembly prior to die qualification.

| Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| Parameter                                   | Symbol                                      | Conditions 1/                               | Limit Min                                   | Limit Max                                   | Units                                       |
| Quiescent Supply Current                    | I SY                                        | No Load                                     |                                             | 1.4                                         | mA                                          |
| Output Adjustment Range                     | ∆V TRIM                                     | R P = 10kΩ                                  | ±3.0                                        |                                             | %                                           |
| Output Voltage                              | V O                                         | I L = 0mA                                   | 4.985                                       | 5.015                                       | V                                           |
| Line Regulation                             | LN reg                                      | V IN = 8V to 33V                            |                                             | 0.010                                       | %/V                                         |

Table I Notes:

1/ VIN = 15V, TA = 25 ° C, unless otherwise specified. No external components required. Refer to section 6.0 Application Notes for more external trim details.

## Table II - Electrical Characteristics for Qual Samples

| Parameter                                 | Symbol   | Conditions 1/     | Conditions 1/   | Sub- groups   | Limit Min   | Limit Max   | Units   |
|-------------------------------------------|----------|-------------------|-----------------|---------------|-------------|-------------|---------|
| Quiescent Supply Current                  |          | No Load           |                 | 1             |             | 1.4         | mA      |
| Quiescent Supply Current                  | I SY     |                   |                 | 2, 3          |             | 2.0         | mA      |
| Quiescent Supply Current                  |          | M,                | D, L, R 5/      | 1             |             | 1.4         | mA      |
| Output Adjustment Range 6/                | ∆V TRIM  | R P = 10kΩ        |                 | 1             | ±3.0        |             | %       |
| Output Voltage                            | V O      | I L = 0mA         |                 | 1             | 4.985       | 5.015       | V       |
| Output Voltage                            | V O      |                   |                 | 2, 3          | 4.978       | 5.022       | V       |
| Output Voltage                            | V O      | M,                | D, L, R 5/      | 1             | 4.975       | 5.025       | V       |
| Short Circuit Current 6/                  | I OS     | V O = 0V          |                 | 1             | +15         | +60         | mA      |
| Sink Current 6/                           | I S      |                   |                 | 1             | -0.3        |             | mA      |
| Load Regulation 2/                        | LD reg   | I L = 0mA to 10mA |                 | 1             |             | 0.010       | %/mA    |
| Load Regulation 2/                        |          | M,                | D, L, R 5/      | 1             |             | 0.015       | %/mA    |
| Load Regulation 2/                        |          | I L = 0mA to 8mA  |                 | 2, 3          |             | 0.012       | %/mA    |
| Line Regulation 2/                        |          | V IN = 8V to 33V  |                 | 1             |             | 0.010       | %/V     |
| Line Regulation 2/                        | LN reg   |                   |                 | 2, 3          |             | 0.015       | %/V     |
| Line Regulation 2/                        | LN reg   | M, D,             | L, R 5/         | 1             |             | 0.030       | %/V     |
| Load Current 6/                           | I L      | 3/                |                 | 1             | 10          |             | mA      |
| Output Voltage Temperature Coefficient 6/ | TCV O    | 4/                |                 | 8             |             | ±15         | ppm/°C  |

## Table II Notes:

- 1/ VIN = 15V, unless otherwise specified. No external components required.
- 2/ Line and Load Regulation specifications include effect of self heating.
- 3/ Minimum of 10mA Load Current guaranteed by Load Regulation test.
- 4/ TCVO = ABS (VMAX - VMIN) / (5V * 180°C * 10 -6  ) where -55 ° C ≤ TA ≤ 125 ° C.
- 5/ Radiation tested to 100Krad.
- 6/ Not tested post irradiation. Refer to section 6.0 Application Notes for more external trim details.

| Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   |
|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                          |                                                                                                                                    | Sub- groups                                                                                                                        | Post Burn In Limit                                                                                                                 | Post Burn In Limit                                                                                                                 | Post Life Test Limit                                                                                                               | Post Life Test Limit                                                                                                               | Life Test Delta                                                                                                                    | Units                                                                                                                              |
| Parameter                                                                                                                          |                                                                                                                                    | Sub- groups                                                                                                                        | Min                                                                                                                                | Max                                                                                                                                | Min                                                                                                                                | Max                                                                                                                                | Life Test Delta                                                                                                                    | Units                                                                                                                              |
| Output Voltage                                                                                                                     | V O                                                                                                                                | 1                                                                                                                                  | 4.979                                                                                                                              | 5.021                                                                                                                              | 4.973                                                                                                                              | 5.027                                                                                                                              | ±0.006                                                                                                                             | V                                                                                                                                  |
| Output Voltage                                                                                                                     | V O                                                                                                                                | 2, 3                                                                                                                               |                                                                                                                                    |                                                                                                                                    | 4.966                                                                                                                              | 5.034                                                                                                                              |                                                                                                                                    | V                                                                                                                                  |

## REF02

## 5.0 Life Test/Burn-In Information

- 5.1 HTRB is not applicable for this drawing.
- 5.2 Burn-in is per MIL-STD-883 Method 1015 test condition B.
- 5.3 Steady state life test is per MIL-STD-883 Method 1005.

## 6.0 Application Note

- 6.1 No external components required.
- 6.2 The REF02 trim terminal can be used to adjust the output voltage over a 5V ±300mV range. This feature allows the system designer to trim system errors by setting the reference to a voltage other than 5V. Of course, the output can also be set to exactly 5.000V, or to 5.12V for binary applications.

Adjustment of the output does not significantly affect the temperature performance of the device. Typically, the temperature coefficient change is 0.7ppm/°C for 100mV of output adjustment.

<!-- image -->

Vout Trim Circuit

| Rev   | Description of Change                                                           | Date           |
|-------|---------------------------------------------------------------------------------|----------------|
| A     | Initiate                                                                        | 20-DEC-01      |
| B     | Update web address. Add radiation part number and limits.                       | May 29, 2003   |
| C     | Update header/footer & add to 1.0 Scope description.                            | Feb. 26,2008   |
| D     | Add Junction Temperature….150°C to 3.3 Absolute Max Ratings                     | March 27, 2008 |
| E     | Updated Section 4.0c note to indicated pre-screen temp testing being performed. | June 5, 2009   |
| F     | Updated fonts and sizes to ADI standard                                         | Oct 7, 2011    |
| G     | Added application note for no external components required                      | Dec. 16, 2013  |
| H     | Update Die Picture                                                              | Dec 2, 2021    |

<!-- image -->