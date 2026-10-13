<!-- lastmod 2021-06-23 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detailed requirements for Analog Devices space qualified die including die qualification as described for Class K in MIL-PRF-38534, Appendix C, Table C-II  except as modified herein.

The manufacturing flow described in the STANDARD DIE PRODUCTS PROGRAM brochure at http://www.analog.com/marketSolutions/militaryAerospace/pdf/Die\_Broc.pdf is to be considered a part of this specification.

This data sheet specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at www.analog.com/PM108

- 2.0 Part Number . The complete part number(s) of this specification follow:

## Part Number

## Description

PM108-000C

Low-Input-Current Operational Amplifier

PM108R000C

Radiation tested Low-Input-Current Operational Amplifier

## 3.0 Die Information

## 3.1 Die Dimensions

| Die Size        | Die Thickness   | Bond Pad Metalization   |
|-----------------|-----------------|-------------------------|
| 54 mil x 74 mil | 19 mil ± 2 mil  | Al/Cu                   |

## 3.2 Die Picture

<!-- image -->

Rev. I

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

## Low-Input-Current Operational Amplifier

PM108

1. COMP
2. -IN
3. +IN
4. V-
5. NC
6. OUT
7. V+
8. COMP

## 3.3 Absolute Maximum Ratings 1/

Supply Voltage (VCC)........................................................... ±22 V

Input Voltage (VIN) 2/ .......................................................... ±15 V

Differential Input Current 3/................................................. ±10 mA

Output Short-Circuit Duration.............................................. Indefinite

Storage Temperature Range .............................................. -65 °C to +150 °C

Junction Temperature (TJ)………………………….……….  +175 °C

Ambient Temperature Range  ............................................. -55 °C to +125 °C

Absolute Maximum Ratings Notes:

- 1/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.
- 2/ For supply voltages less than ±15 V, the absolute maximum input voltage is equal to the supply voltage.
- 3/ The inputs are shunted with back-to-back diodes for overvoltage protection. Therefore, if a differential input voltage in excess of 1 V is applied between the inputs, excessive current will flow, unless some limiting resistance is provided.

## 4.0 Die Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a) Qual Sample Size and Qual Acceptance Criteria - 10/0
- (b) Qual Sample Package - DIP
- (c) Pre-screen electrical test over temperature performed post-assembly prior to die qualification.

## Table I - Dice Electrical Characteristics

| Parameter                           | Symbol   | Conditions 1/                            | Limit Min   |   Limit Max | Units   |
|-------------------------------------|----------|------------------------------------------|-------------|-------------|---------|
| Input Offset Voltage                | V IO     |                                          | -0.5        |         0.5 | mV      |
| Input Offset Current                | I IO     |                                          | -0.2        |         0.2 | nA      |
| Input Bias Current                  | ±I IB    |                                          | -0.1        |           2 | nA      |
| Power Supply Rejection Ratio        | +PSRR    | +V CC = +10 V to +20 V, -V CC = -20 V    | -16         |          16 | µV/V    |
| Power Supply Rejection Ratio        | -PSRR    | +V CC = +20 V, -V CC = -10 V to -20 V    | -16         |          16 | µV/V    |
| Input Voltage Range                 | IVR      |                                          | ±15         |             | V       |
| Input Voltage Common Mode Rejection | CMR      | V CM = IVR                               | 96          |             | dB      |
| Supply Current                      | I CC     | ±V CC = ±15 V                            |             |         0.6 | mA      |
| Output Voltage Swing                | ±V OP    | ±V CC = ±20 V, R L = 10 kΩ               | ±16         |             | V       |
| Open Loop Voltage Gain              | A VS     | ±V CC = ±15 V, R L = 10 kΩ V OUT = ±10 V | 80          |             | V/mV    |

## Table I Notes:

1/ VCC = ±20 V, RS = 50 Ω, V CM = 0 V, and TA = 25 °C, unless otherwise specified .

Table I Notes:

| Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   |
|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| Parameter                                                | Symbol                                                   | Conditions 1/ 3/                                         | Conditions 1/ 3/                                         | Sub- groups                                              | Limit Min                                                | Limit Max                                                | Units                                                    |
|                                                          |                                                          |                                                          |                                                          | 1                                                        | -0.5                                                     | 0.5                                                      | mV                                                       |
| Input Offset Voltage 3/                                  | V IO                                                     |                                                          |                                                          | 2, 3                                                     | -1                                                       | 1                                                        | mV                                                       |
|                                                          |                                                          |                                                          | M, D, L, R                                               | 1                                                        | -2                                                       | 2                                                        | mV                                                       |
| Input Offset Current 3/                                  |                                                          |                                                          |                                                          | 1                                                        | -0.2                                                     | 0.2                                                      | nA                                                       |
| Input Offset Current 3/                                  | I IO                                                     |                                                          |                                                          | 2, 3                                                     | -0.4                                                     | 0.4                                                      | nA                                                       |
| Input Offset Current 3/                                  |                                                          |                                                          | M, D, L, R                                               | 1                                                        | -1                                                       | 1                                                        | nA                                                       |
| Input Bias Current 3/                                    |                                                          |                                                          |                                                          | 1                                                        | -0.1                                                     | 2                                                        | nA                                                       |
| Input Bias Current 3/                                    | ±I IB                                                    |                                                          |                                                          | 2, 3                                                     | -0.4                                                     | 0.4                                                      | nA                                                       |
| Input Bias Current 3/                                    |                                                          |                                                          | M, D, L, R                                               | 1                                                        | -25                                                      | 25                                                       | nA                                                       |
| Input Offset Voltage Temperature Sensitivity 2/          | Δ V IO / ΔT                                              |                                                          |                                                          | 2, 3                                                     | -5                                                       | 5                                                        | µV/°C                                                    |
| Open Loop Voltage Gain 3/                                | V VS                                                     | ±V CC = ±15 V, R L = 10 KΩ,                              | ±V CC = ±15 V, R L = 10 KΩ,                              | 4                                                        | 80                                                       |                                                          | µ V/V                                                    |
| Open Loop Voltage Gain 3/                                |                                                          | V OUT = ±10 V                                            | V OUT = ±10 V                                            | 5, 6                                                     | 40                                                       |                                                          | µ V/V                                                    |
| Open Loop Voltage Gain 3/                                |                                                          |                                                          | M, D, L, R                                               | 4                                                        | 10                                                       |                                                          | µ V/V                                                    |
| Power Supply Rejection Ratio 2/                          | +PSRR                                                    | +V CC = +10 V to +20 V -V CC = -20 V                     | +V CC = +10 V to +20 V -V CC = -20 V                     | 1, 2, 3                                                  | -16                                                      | 16                                                       |                                                          |
| Power Supply Rejection Ratio 2/                          | -PSRR                                                    | +V CC = +20 V -V CC = -10 V to -20 V                     | +V CC = +20 V -V CC = -10 V to -20 V                     | 1, 2, 3                                                  | -16                                                      | 16                                                       |                                                          |
| Input Voltage Range 2/                                   | IVR                                                      |                                                          |                                                          | 1, 2, 3                                                  | ±15                                                      |                                                          | V                                                        |
| Supply Current 2/                                        | I CC                                                     |                                                          |                                                          | 1, 2                                                     |                                                          | 0.6                                                      | mA                                                       |
| Supply Current 2/                                        |                                                          | V CC = ±15 V                                             | V CC = ±15 V                                             | 3                                                        |                                                          | 0.8                                                      | mA                                                       |
| Input Voltage Common Mode Rejection Ratio 2/             | CMRR                                                     | V CM = IVR                                               | V CM = IVR                                               | 1, 2, 3                                                  | 96                                                       |                                                          | dB                                                       |
| Output Short-Circuit Current 2/                          | I OS(+)                                                  |                                                          |                                                          | 1                                                        | -15                                                      |                                                          | mA                                                       |
|                                                          | I OS(-)                                                  | ±V CC = ±15 V, t ≤ 25 mS                                 | ±V CC = ±15 V, t ≤ 25 mS                                 | 1                                                        |                                                          | 15                                                       | mA                                                       |
| Output Voltage Swing 2/                                  | ±V OP                                                    | ±V CC = ±20 V, R L = 10 KΩ                               | ±V CC = ±20 V, R L = 10 KΩ                               | 4, 5, 6                                                  | ±16                                                      |                                                          | V                                                        |

## Table II Notes:

1/

2/ Not tested post-irradiation

3/

VCC = ±20 V, RS = 50 Ω, and V CM = 0 V, unless otherwise specified.

Irradiated at dose rate = 50 - 300 rads (Si)/s in accordance with MIL-STD-883, method 1019, condition A, and is guaranteed to a maximum total dose specified of 100 krad (Si). The effective dose rate after extended room temperature anneal = 1.15 rad (Si)/s per MIL-STD-883, method 1019, condition A, section 3.11.2. The total dose specification for this device only applies to the specified effective dose rate, or lower, environment.

| Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   | Table III - Life Test Endpoint and Delta Parameter (Product is tested in accordance with Table II with the following exceptions)   |
|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                          | Symbol                                                                                                                             | Sub- groups                                                                                                                        | Post Burn-in Limit                                                                                                                 | Post Burn-in Limit                                                                                                                 | Post Life Test Limit                                                                                                               | Post Life Test Limit                                                                                                               | Life Test Delta                                                                                                                    | Units                                                                                                                              |
| Parameter                                                                                                                          | Symbol                                                                                                                             | Sub- groups                                                                                                                        | Min                                                                                                                                | Max                                                                                                                                | Min                                                                                                                                | Max                                                                                                                                | Life Test Delta                                                                                                                    | Units                                                                                                                              |
| Input Offset Voltage                                                                                                               | V IO                                                                                                                               | 1                                                                                                                                  |                                                                                                                                    | ±0.75                                                                                                                              |                                                                                                                                    | ±1                                                                                                                                 | ±0.25                                                                                                                              | mV                                                                                                                                 |
| Input Offset Voltage                                                                                                               | V IO                                                                                                                               | 2, 3                                                                                                                               |                                                                                                                                    |                                                                                                                                    |                                                                                                                                    | ±1.5                                                                                                                               |                                                                                                                                    | mV                                                                                                                                 |
| Input Bias Current                                                                                                                 | ±I IB                                                                                                                              | 1                                                                                                                                  | -0.1                                                                                                                               | 2.5                                                                                                                                | -0.1                                                                                                                               | ±3                                                                                                                                 | ±0.5                                                                                                                               | nA                                                                                                                                 |
| Input Bias Current                                                                                                                 | ±I IB                                                                                                                              | 2                                                                                                                                  |                                                                                                                                    |                                                                                                                                    | -1                                                                                                                                 | ±3                                                                                                                                 |                                                                                                                                    | nA                                                                                                                                 |
| Input Bias Current                                                                                                                 | ±I IB                                                                                                                              | 3                                                                                                                                  |                                                                                                                                    |                                                                                                                                    | -0.1                                                                                                                               | ±4                                                                                                                                 |                                                                                                                                    | nA                                                                                                                                 |
| Input Offset Current                                                                                                               | I IO                                                                                                                               | 1                                                                                                                                  |                                                                                                                                    | ±0.3                                                                                                                               |                                                                                                                                    | ±0.3                                                                                                                               |                                                                                                                                    | nA                                                                                                                                 |
| Input Offset Current                                                                                                               | I IO                                                                                                                               | 2, 3                                                                                                                               |                                                                                                                                    |                                                                                                                                    |                                                                                                                                    | ±0.5                                                                                                                               |                                                                                                                                    | nA                                                                                                                                 |

## 5.0 Life Test/Burn-In Information

- 5.1 HTRB is not applicable for this drawing.
- 5.2 Burn-in is per MIL-STD-883 Method 1015 test condition B or C.
- 5.3 Steady state life test is per MIL-STD-883 Method 1005.

| Rev   | Description of Change                                                          | Date           |
|-------|--------------------------------------------------------------------------------|----------------|
| A     | Initiate                                                                       | 7-Feb-02       |
| B     | Add radiation test limits. Update web address.                                 | 9-Jan-03       |
| C     | Make correction file names (see OP215)                                         | 9-Jan-03       |
| D     | Update 1.0 Scope description.                                                  | 09-Jul-07      |
| E     | Update header/footer & add to 1.0 scope description.                           | 19-Feb-08      |
| F     | Add Junction Temperature(T J )…..175°C to 3.3 Absolute Maximum Ratings         | March 31, 2008 |
| G     | Updated Section 4.0c note to indicate pre-screen temp testing being performed. | 6-JUN-2009     |
| H     | Update fonts and sizes to ADI standard                                         | 3-Oct-2011     |
| I     | Add dose rate environment at Table II Notes.                                   | 08-Jun-21      |

<!-- image -->