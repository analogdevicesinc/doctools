<!-- lastmod 2021-08-24 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for space qualified die per MIL-PRF-38534 class K except as modified herein.

The manufacturing flow described in the SPACE DIE BROCHURE is to be considered a part of this specification.

This datasheet specifically details the space grade version of this product. A more detailed operational description and a complete datasheet for commercial product grades can be found at www.analog.com/HMC424

- 2.0 Part Number . The complete part number(s) of this specification follow:

Part Number HMC8802

## Description

MMIC Digital Attenuator, DC-13GHz Die

## 3.0 Die Information

## 3.1 Die Dimensions

| Die Size        | DieThickness    | Bond Pad Metalization   |
|-----------------|-----------------|-------------------------|
| 33 mil x 57 mil | 4 mil ± 0.5 mil | Au                      |

## 3.2 Die Picture

<!-- image -->

## MMIC Digital Attenuator DC-13GHz Die

ADH424S

1. RF1 (DC coupled, matched to 50 ohms)*
2. VEE (Supply Voltage, -5V ±10%)
3. RF2 (DC coupled, matched to 50 ohms)*
4. V1
5. V2
6. V3
7. V4
8. V5
9. V6
10.  Die bottom must be connected to RF GND
11.  *Blocking capacitors are required if RF line potential is not equal to 0V

| Control Voltage Input   | Control Voltage Input   | Control Voltage Input   | Control Voltage Input   | Control Voltage Input   | Control Voltage Input   | Attenuation State RF1 - RF2   |
|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------------|
| V1 (16 dB)              | V2 (8 dB)               | V3 (4 dB)               | V4 (2 dB)               | V5 (1 dB)               | V6 (0.5 dB)             | Attenuation State RF1 - RF2   |
| Low                     | Low                     | Low                     | Low                     | Low                     | Low                     | Reference I.L.                |
| Low                     | Low                     | Low                     | Low                     | Low                     | High                    | 0.5 dB                        |
| Low                     | Low                     | Low                     | Low                     | High                    | Low                     | 1 dB                          |
| Low                     | Low                     | Low                     | High                    | Low                     | Low                     | 2 dB                          |
| Low                     | Low                     | High                    | Low                     | Low                     | Low                     | 4 dB                          |
| Low                     | High                    | Low                     | Low                     | Low                     | Low                     | 8 dB                          |
| High                    | Low                     | Low                     | Low                     | Low                     | Low                     | 16 dB                         |
| High                    | High                    | High                    | High                    | High                    | High                    | 31.5 dB                       |

Note: Any combination of the above states will provide an attenuation approximately equal to the sum of the bits selected

## 3.3 Absolute Maximum Ratings 1/

| Control Voltage Range........................................................VEE - 0.5 VDC         |
|----------------------------------------------------------------------------------------------------|
| Bias Voltage (VEE) ........................................................................ -7 VDC |
| Channel Temperature.......................................................................150  C  |
| RF Input Power (0.5 to 13 GHz) ..................................................+25 dBm           |
| Thermal Resistance (Junction to Die Bottom) .............................330  C /W                |
| Ambient Operating Temperature Range (T A )..................... -40  C to +85  C                 |
| Storage Temperature........................................................-65  C to +150  C     |

Absolute Maximum Ratings Notes:

- 1/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.

## 4.0 Die Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified Herein.

- (a) Pre-screen test post assembly required prior to die qualification, to remove all assembly related rejects.
- (b) Mechanical Shock or Constant Acceleration not performed; die qualification is performed in an open carrier.
- (c) Interim and post burn-in electrical tests will include static tests screened at +25  C only.

| Table I - Dice Electrical Characteristics                                                  | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics                   | Table I - Dice Electrical Characteristics                   | Table I - Dice Electrical Characteristics   |
|--------------------------------------------------------------------------------------------|---------------------------------------------|---------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|---------------------------------------------|
| Parameter                                                                                  | Symbol                                      | Conditions 1/, 2/, 3/, 4/ 50 ΩSystem        | Limit Min                                                   | Limit Max                                                   | Units                                       |
| Insertion Loss                                                                             | IL                                          | DC - 8.0 GHz 8 - 13.0 GHz                   |                                                             | 3.8 4.6                                                     | dB                                          |
| Attenuation Range                                                                          | AR                                          | DC - 13.0 GHz                               | 29.3                                                        | 33.7                                                        | dB                                          |
| Return Loss (RF1 & RF2 All Attenuation States)                                             | RL                                          | DC - 8.0 GHz 8 - 13.0 GHz                   | 8 9                                                         |                                                             | dB                                          |
| Attenuation Accuracy: (Referenced to Insertion Loss) 0.5 -7.5 dB States 8 - 31.5 dB States | Acc                                         | DC - 13.0 GHz DC - 13.0 GHz                 | ±0.3 +4% of Atten Setting Max ±0.3 + 6%of Atten Setting Max | ±0.3 +4% of Atten Setting Max ±0.3 + 6%of Atten Setting Max | dB                                          |
| IEE                                                                                        | IEE                                         | DC - 13 GHz                                 |                                                             | 4                                                           | mA                                          |

Table I Notes:

1/ Limits apply at +25  C only.

2/ Tested with VEE = -5V, V1-V6 Low = -3V, High = -4.2V

3/ S-par data to be tabulated at 250 MHz, 1 GHz, 3 GHz, 5 GHz, 9 GHz, 11 GHz, and 13 GHz. Pin = -25 dBm

4/ Measure major attenuation states only

C

C

C

## ADH424S

| Table II - Electrical Characteristics for Qual Samples                                                    | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples                                   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   |
|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| Parameter                                                                                                 | Symbol                                                   | Conditions 1/ 2/ 3/ 4/ 5/ 6/ -40°C ≤ T A ≤ 85°C unless otherwise specified, 50 OhmSystem | Sub- groups                                              | Min Limit                                                | Max Limit                                                | Units                                                    |
| Insertion Loss                                                                                            | IL                                                       | DC - 8.0 GHz                                                                             | 4,5,6                                                    |                                                          | 3.8                                                      | dB                                                       |
|                                                                                                           | IL                                                       | 8.0 - 13.0 GHz                                                                           | 4,5,6                                                    |                                                          | 4.6                                                      | dB                                                       |
| Attenuation Range                                                                                         | AR                                                       | DC - 13.0 GHz                                                                            | 4,5,6                                                    | 29.3                                                     | 33.7                                                     | dB                                                       |
| Return Loss (RF1 & RF2 All Attenuation States)                                                            | RL                                                       | DC - 8.0 GHz                                                                             | 4,5,6                                                    | 8                                                        |                                                          | dB                                                       |
|                                                                                                           | RL                                                       | 8.0 - 13.0 GHz                                                                           | 4,5,6                                                    | 10                                                       |                                                          | dB                                                       |
| Attenuation Accuracy: (Referenced to Insertion Loss) 0.5 - 7.5dB States                                   | Acc                                                      | DC - 13 GHz DC - 13 GHz                                                                  | 4,5,6                                                    | ±0.3 + 4%of Atten. Setting Max                           | ±0.3 + 4%of Atten. Setting Max                           | dB                                                       |
| 8 - 31.5 dB States                                                                                        | Acc                                                      | DC - 13 GHz DC - 13 GHz                                                                  | 4,5,6                                                    | ±0.3 + 6%of Atten. Setting Max                           | ±0.3 + 6%of Atten. Setting Max                           | dB                                                       |
| Input Power for 0.1dB Compression (REF State)                                                             | IP0.1dB                                                  | 1.0 - 13.0 GHz                                                                           | 4                                                        | 22                                                       |                                                          | dBm                                                      |
| Input Power for 0.1dB Compression (REF State)                                                             | IP0.1dB                                                  | 1.0 - 13.0 GHz                                                                           | 5,6                                                      | 17                                                       |                                                          | dBm                                                      |
| Input Third Order Intercept Point (REF State) Two-Tone Input Power = 0dBm each tone, 1MHz tone separation | IIP3                                                     | 1.0 - 13.0 GHz                                                                           | 4                                                        | 38                                                       |                                                          | dBm                                                      |
| Input Third Order Intercept Point (REF State) Two-Tone Input Power = 0dBm each tone, 1MHz tone separation | IIP3                                                     | 1.0 - 13.0 GHz                                                                           | 5,6                                                      | 34                                                       |                                                          | dBm                                                      |
| IEE                                                                                                       | IEE                                                      | DC - 13 GHz                                                                              | 4,5,6                                                    |                                                          | 5                                                        | mA                                                       |

Table II Notes:

- 1/ Pre burn-in and Post burn-in electrical require S-parameter testing only as defined. Final electrical tests shall incorporate power tests as defined.
- 2/ Temperature testing required for Final Electrical testing only
- 3/ Tested with VEE = -5V, V1-V6 Low = -3V, High = -4.2V
- 4/ Measure major attenuation states only
- 5/ S-par data to be tabulated at 250 MHz, 1 GHz, 3 GHz, 5 GHz, 9 GHz, 11 GHz, and 13 GHz. Pin = -25 dBm
- 6/ P0.1dB and IP3 shall be tabulated at 1 GHz, 3 GHz, 5 GHz, 9 GHz, and 11 GHz

| Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                     | Sub- groups                                                                                                                   | End-point                                                                                                                     | End-point                                                                                                                     | Delta                                                                                                                         | Units                                                                                                                         |
| Parameter                                                                                                                     | Sub- groups                                                                                                                   |                                                                                                                               | Max                                                                                                                           | Delta                                                                                                                         | Units                                                                                                                         |
| Insertion Loss                                                                                                                | 4                                                                                                                             |                                                                                                                               | 4.6                                                                                                                           | ±1.0                                                                                                                          | dB                                                                                                                            |
| IEE (Biased at -5V)                                                                                                           | 1                                                                                                                             |                                                                                                                               | 5                                                                                                                             | ±10                                                                                                                           | %                                                                                                                             |

Table III Notes:

- 1/ Table II limits will not be exceeded
- 2/ 240 hour burn in and Group C end point electrical parameters. Deltas are performed at TA = 25°C

## ADH424S

## 5.0 Die Outline

<!-- image -->

- 1.ALLDIMENSIONSAREININCHES(MILLIMETERS).
- 2.TYPICALBONDPADIS004SOUARE

3.TYPICALBONDPADSPACINGIS.006

CENTERTOCENTEREXCEPTASNOTED

- 4.BACKSIDEMETALIZATION:GOLD
- 5.BACKSIDEMETALISGROUND
- 6.BONDPAD METALIZATION:GOLD
1. RF1 (DC coupled, matched to 50 ohms)*
2. VEE (Supply Voltage, -5V ±10%)
3. RF2 (DC coupled, matched to 50 ohms)*
4. V1
5. V2
6. V3
7. V4
8. V5
9. V6
-  Die bottom must be connected to RF GND
-  *Blocking capacitors are required if RF line potential is not equal to 0V

| Rev   | Description of Change                                                                                                                                                                                   | Date             |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| A     | Initiate                                                                                                                                                                                                | 26-October-2015  |
| B     | Added Clarification to sections 3.2, 3.3 and 5.0. Adding IEE parameter to Tables I and II. Remove symbol Column from Tables I, II and III                                                               | 11-December-2015 |
| C     | Add note to clarify exception for temperatures for interim and post burn-in electrical tests. Remove exception notes for maximum die qual temperature and for sample size and qual acceptance criteria. | 4-June-2019      |

<!-- image -->