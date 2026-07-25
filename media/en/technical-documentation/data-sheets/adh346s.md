<!-- lastmod 2022-03-01 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for space qualified die per MIL-PRF-38534 class K except as modified herein.

The manufacturing flow described in the SPACE DIE BROCHURE is to be considered a part of this specification.

This datasheet specifically details the space grade version of this product. A more detailed operational description and a complete datasheet for commercial product grades can be found at www.analog.com/HMC346

## 2.0 Part Number . The complete part number(s) of this specification follow:

Part Number HMC8801

Description

MMIC Voltage-Variable Attenuator DC-20GHz Die

## 3.0 Die Information

## 3.1 Die Dimensions

| Die Size        | DieThickness    | Bond Pad and Backside Metalization   |
|-----------------|-----------------|--------------------------------------|
| 33 mil x 33 mil | 4 mil ± 0.5 mil | Au                                   |

## 3.2 Die Picture

<!-- image -->

Rev. C

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

## MMIC Voltage-Variable Attenuator DC-20GHz Die

ADH346S

1. RF1 Input (DC coupled, matched to 50 ohms) *
2. RF2 Output (DC coupled, matched to 50 ohms) *
3. V2 (Control input, master)
4. I (Control input, slave)
5. 500 (This pad must be DC grounded)
6. V1 (Control input, master)
7. O (DO NOT CONNECT)
8.  Die bottom must be connected to RF GND
9.  No connection required for unlabeled bond pads

* Blocking capacitors required if RF line potential is not equal to 0V

## ADH346S

| 3.3   | Absolute Maximum Ratings 1/                                                                                               |
|-------|---------------------------------------------------------------------------------------------------------------------------|
|       | Control Voltage Range.....................................................................................+1 to -5 VDC    |
|       | RF input power (RFIN)............................................................................................+18 dBm  |
|       | Ambient Operating Temperature Range (T A )................................................-40  C to +85  C              |
|       | Storage Temperature..................................................................................-65  C to +150  C  |
|       | ESD Sensitivity (HBM)............................................................................................Class 1A |

Absolute Maximum Ratings Notes:

- 1/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.

## 4.0 Die Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a) Pre-screen test post assembly required prior to die qualification, to remove all assembly related rejects.
- (b) Mechanical Shock or Constant Acceleration not performed; die qualification is performed in an open carrier.
- (c) Interim and post burn-in electrical tests will include static tests screened at +25  C only.

| Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| Parameter                                   | Symbol                                      | Conditions 1/, 2/, 3/ 50 ΩSystem            | Limit Min                                   | Limit Max                                   | Units                                       |
| Insertion Loss                              | IL                                          | DC - 12 GHz 12 GHz - 20 GHz                 |                                             | 2.0 2.5                                     | dB                                          |
| Attenuation Range                           | AR                                          | DC - 12 GHz 12 GHz - 20 GHz                 | 27 22                                       |                                             | dB                                          |
| Return Loss                                 | RL                                          | DC - 12 GHz 12 GHz - 20 GHz                 | 6 10                                        |                                             | dB                                          |

Table I Notes:

- 1/ Limits apply at +25  C only.
- 2/ Min and Max Attenuation tested only with VCTL = 0/-3 V.
- 3/ S-par data to be taken at 50 MHz, 1 GHz, 3 GHz, 6 GHz, 12 GHz, 16 GHz, and 20 GHz. Pin = -25 dBm

C

## ADH346S

| Table II - Electrical Characteristics for Qual Samples                                                         | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples                                   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| Parameter                                                                                                      | Symbol                                                   | Conditions 1/, 2/, 3/, 4/, 5/ -40°C ≤ T A ≤ 85°C unless otherwise specified,50Ohm System | Sub- groups                                              | Min Limit                                                | MaxLimit                                                 | Units                                                    |
| Insertion Loss                                                                                                 | IL                                                       | DC - 12.0 GHz                                                                            | 4,5,6                                                    |                                                          | 2.0                                                      | dB                                                       |
| Insertion Loss                                                                                                 | IL                                                       | 12.0 - 20.0 GHz                                                                          | 4,5,6                                                    |                                                          | 2.5                                                      | dB                                                       |
| Attenuation Range                                                                                              | AR                                                       | DC - 12.0 GHz                                                                            | 4,5,6                                                    | 27                                                       |                                                          | dB                                                       |
| Attenuation Range                                                                                              | AR                                                       | 12.0 - 20.0 GHz                                                                          | 4,5,6                                                    | 22                                                       |                                                          | dB                                                       |
| Return Loss                                                                                                    | RL                                                       | DC - 12.0 GHz                                                                            | 4,5,6                                                    | 6                                                        |                                                          | dB                                                       |
| Return Loss                                                                                                    | RL                                                       | 12.0 - 20.0 GHz                                                                          | 4,5,6                                                    | 10                                                       |                                                          | dB                                                       |
| Input Power for 0.25dB Compression (Min Attenuation)                                                           | IP0.25dB                                                 | 0.5 - 20.0 GHz                                                                           | 4,5,6                                                    | 7                                                        |                                                          | dBm                                                      |
| Input Third Order Intercept Point (Min Attenuation) Two-Tone Input Power -8dBm each tone, 1MHz tone separation | IIP3                                                     | DC - 12.0 GHz                                                                            | 4                                                        | 20                                                       |                                                          | dBm                                                      |
| Input Third Order Intercept Point (Min Attenuation) Two-Tone Input Power -8dBm each tone, 1MHz tone separation | IIP3                                                     | DC - 12.0 GHz                                                                            | 5,6                                                      | 17                                                       |                                                          | dBm                                                      |
| Input Third Order Intercept Point (Min Attenuation) Two-Tone Input Power -8dBm each tone, 1MHz tone separation | IIP3                                                     | 12.0 - 20.0 GHz                                                                          | 4                                                        | 16                                                       |                                                          | dBm                                                      |
| Input Third Order Intercept Point (Min Attenuation) Two-Tone Input Power -8dBm each tone, 1MHz tone separation | IIP3                                                     | DC - 12.0 GHz                                                                            | 5,6                                                      | 13                                                       |                                                          | dBm                                                      |

Table II Notes:

- 1/ Pre burn-in and Post burn-in electrical require S-parameter testing only as defined. Final electrical tests shall incorporate power tests as defined.
- 2/ Temperature testing required for Final Electrical testing only
- 3/ Min and Max Attenuation tested only with VCTL = 0/-3V.
- 4/ S-par data to be tabulated at 50 MHz, 1 GHz, 3 GHz, 6 GHz, 12 GHz, 16 GHz, and 20 GHz. Pin = -25 dBm
- 5/ P0.25dB and IP3 shall be measured at 0.5 GHz, 3 GHz, 6 GHz, 12 GHz, and 20 GHz at Min Attenuation only

| Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                     | Symbol                                                                                                                        | Sub- groups                                                                                                                   | End-point                                                                                                                     | End-point                                                                                                                     | Delta                                                                                                                         | Units                                                                                                                         |
| Parameter                                                                                                                     | Symbol                                                                                                                        | Sub- groups                                                                                                                   |                                                                                                                               | Max                                                                                                                           | Delta                                                                                                                         | Units                                                                                                                         |
| Insertion Loss                                                                                                                | IL                                                                                                                            | 4                                                                                                                             |                                                                                                                               | 2.5                                                                                                                           | ±1.0                                                                                                                          | dB                                                                                                                            |

Table III Notes:

1/ Table II limits will not be exceeded

- 2/ 240 hour burn in and Group C end point electrical parameters. Deltas are performed at TA = 25°C

## ADH346S

## 5.0 Die Outline

<!-- image -->

- 2.TYPICALBONDPADIS.004"SQUARE.
- 3.TYPICALBONDPADSPACINGIS.006" CENTERTOCENTEREXCEPTASNOTED.
- 4.BACKSIDEMETALIZATION:GOLD
- 5.BACKSIDEMETALISGROUND
- 6.BONDPADMETALIZATION:GOLD
1. RF1 Input (DC coupled, matched to 50 ohms)*
2. RF2 Output (DC coupled, matched to 50 ohms)*
3. V2 (Control input, master)
4. I (Control input, slave)
5. 500 (This pad must be DC grounded)
6. V1 (Control input, master)
7. O (DO NOT CONNECT)
-  Die bottom must be connected to RF GND
-  No connection required for unlabeled bond pads
* Blocking capacitors required if RF line potential is not equal to 0V

| Rev   | Description of Change                                                                 | Date             |
|-------|---------------------------------------------------------------------------------------|------------------|
| A     | Initiate                                                                              | 27-October-2015  |
| B     | Added Clarification to sections 3.2, 5.0 and Table II                                 | 11-December-2015 |
| C     | Added note to clarify test temperatures for interim and post burn-in electrical tests | 5-June-2019      |

<!-- image -->