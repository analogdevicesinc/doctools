<!-- lastmod 2019-08-29 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for space qualified die per MIL-PRF-38534 class K except as modified herein.

The manufacturing flow described in the SPACE DIE BROCHURE is to be considered a part of this specification.

This datasheet specifically details the space grade version of this product. A more detailed operational description and a complete datasheet for commercial product grades can be found at www.analog.com/HMC141

- 2.0 Part Number . The complete part number(s) of this specification follow:

Part Number HMC8804

## Description

MMIC Mixer, 6-18GHz Die

## 3.0 Die Information

## 3.1 Die Dimensions

| Die Size        | DieThickness    | Bond Pad and Backside Metalization   |
|-----------------|-----------------|--------------------------------------|
| 60 mil x 60 mil | 4 mil ± 0.5 mil | Au                                   |

## 3.2 Die Picture

<!-- image -->

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

## MMIC Mixer, 6-18GHz Die

ADH141S

1. RF (AC coupled, matched to 50 Ohms)
2. LO (AC coupled, matched to 50 Ohms)
3. IF (DC coupled)
4.  For applications not requiring operation to DC, port should be DC blocked externally using series capacitor with value chosen to pass necessary IF frequency range
5.  For operation to DC, pin must not source/sink more than 2mA else malfunction or possible failure will result

Backside (must be connected to RF/DC GND) No connection required for unlabeled bond pads

## ADH141S

## 3.3 Absolute Maximum Ratings 1/

| RF/IF Input........................................................................................................+20 dBm   |
|------------------------------------------------------------------------------------------------------------------------------|
| LO Drive............................................................................................................+27 dBm  |
| Channel Temperature...........................................................................................150  C        |
| IF DC Current .......................................................................................................±2 mA   |
| Thermal Resistance (Junction to Die Bottom)...............................................101.7  C/W                        |
| Ambient Operating Temperature Range (T A ) .........................................-40  C to +85  C                       |
| Storage Temperature ...........................................................................-65  C to +150  C           |

Absolute Maximum Ratings Notes:

- 1/ Stresses above the absolute maximum rating may cause permanent damage to the device.  Extended operation at the maximum levels may degrade performance and affect reliability.

## 4.0 Die Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a) Pre-screen test post assembly required prior to die qualification, to remove all assembly related rejects.
- (b) Mechanical Shock or Constant Acceleration not performed; die qualification is performed in an open carrier.
- (c) Interim and post burn-in electrical tests will include static tests screened at +25  C only.

| Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics                                                                                                             | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   | Table I - Dice Electrical Characteristics   |
|---------------------------------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| Parameter                                   | Symbol                                      | Conditions 1/, 2/, 3/, 50 ΩSystem, IF=DC-6GHz                                                                                                         | Limit Min                                   | Limit Max                                   | Units                                       |
| Conversion Loss                             | CL                                          | RF&LO = 6-16 GHz, IF = 0.1 & 1.0 GHz RF&LO = 6-16 GHz, IF = 3.0 & 6.0 GHz RF&LO = 16-18 GHz, IF = 0.1 & 1.0 GHz RF&LO = 16-18 GHz, IF = 3.0 & 6.0 GHz |                                             | 11 13 12 14                                 | dB                                          |
| LO to RF Isolation                          | Iso LO-RF                                   | RF&LO = 6-16 GHz RF&LO = 16-18 GHz                                                                                                                    | 27 25                                       |                                             | dB                                          |
| LO to IF Isolation                          | Iso LO-IF                                   | RF&LO = 6-16 GHz RF&LO = 16-18 GHz                                                                                                                    | 20 13                                       |                                             | dB                                          |
| RF to IF Isolation                          | Iso RF-IF                                   | RF&LO = 6-16 GHz RF&LO = 16-18 GHz                                                                                                                    | 8 15                                        |                                             | dB                                          |

## Table I Notes:

1/

Limits apply at +25  C only.

2/ Tested as Down Converter only

3/ S-par data to be tabulated at 6, 12, 16, and 18GHz only

a. RF: 6 - 20 GHz, 1 GHz steps, Pin = -10 dBm

b. LO: 7-21 GHz, 1GHz steps, Pin = +20 dBm

c. IF: 1 GHz

C

C

C

## ADH141S

| Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples                                       | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   | Table II - Electrical Characteristics for Qual Samples   |
|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| Parameter                                                | Symbol                                                   | Conditions 1/ 2/ 3/ 4/ -40°C ≤ T A ≤ 85°C unless otherwise specified,50Ohm System,IF=DC-6GHz | Sub- groups                                              | Min Limit                                                | MaxLimit                                                 | Units                                                    |
| Conversion Loss                                          | CL                                                       | RF&LO = 6-16 GHz                                                                             | 4                                                        |                                                          | 11                                                       | dB                                                       |
| Conversion Loss                                          | CL                                                       | RF&LO = 6-16 GHz                                                                             | 5,6                                                      |                                                          | 12                                                       | dB                                                       |
| Conversion Loss                                          | CL                                                       | RF&LO = 16-18 GHz                                                                            | 4                                                        |                                                          | 12                                                       | dB                                                       |
| Conversion Loss                                          | CL                                                       | RF&LO = 16-18 GHz                                                                            | 5,6                                                      |                                                          | 12.5                                                     | dB                                                       |
| LO to RF Isolation                                       | Iso LO-RF                                                | RF&LO = 6-16 GHz                                                                             | 4,5,6                                                    | 27                                                       |                                                          | dB                                                       |
| LO to RF Isolation                                       | Iso LO-RF                                                | RF&LO = 16-18 GHz                                                                            | 4                                                        | 25                                                       |                                                          | dB                                                       |
| LO to RF Isolation                                       | Iso LO-RF                                                | RF&LO = 16-18 GHz                                                                            | 5,6                                                      | 23                                                       |                                                          | dB                                                       |
| LO to IF Isolation Iso                                   | LO-IF                                                    | RF&LO = 6-16 GHz                                                                             | 4,5,6                                                    | 20                                                       |                                                          | dB                                                       |
| LO to IF Isolation Iso                                   | LO-IF                                                    | RF&LO = 16-18 GHz                                                                            | 4,5,6                                                    | 13                                                       |                                                          | dB                                                       |
| RF to IF Isolation Iso                                   | RF-IF                                                    | RF&LO = 6-16 GHz                                                                             | 4,5,6                                                    | 8                                                        |                                                          | dB                                                       |
| RF to IF Isolation Iso                                   | RF-IF                                                    | RF&LO = 16-18 GHz                                                                            | 4,5,6                                                    | 15                                                       |                                                          | dB                                                       |
| Input Third Order Intercept Point                        | IIP3                                                     | RF&LO = 6-16 GHz                                                                             | 4,5,6                                                    | 15                                                       |                                                          | dBm                                                      |
| Input Third Order Intercept Point                        | IIP3                                                     | RF&LO = 16-18 GHz                                                                            | 4,5,6                                                    | 20                                                       |                                                          | dBm                                                      |
| Input 1dB Compression                                    | IP1dB                                                    | RF&LO = 6-16 GHz                                                                             | 4                                                        | 11                                                       |                                                          | dBm                                                      |
| Input 1dB Compression                                    | IP1dB                                                    | RF&LO = 6-16 GHz                                                                             | 5,6                                                      | 10                                                       |                                                          | dBm                                                      |
| Input 1dB Compression                                    | IP1dB                                                    | RF&LO = 16-18 GHz                                                                            | 4                                                        | 13                                                       |                                                          | dBm                                                      |
| Input 1dB Compression                                    | IP1dB                                                    |                                                                                              | 5,6                                                      | 12                                                       |                                                          | dBm                                                      |

Table II Notes:

- 1/ Pre burn-in and Post burn-in electrical require S-parameter testing only as defined. Final electrical tests shall incorporate additional tests as defined.
- 2/ Temperature testing required for Final Electrical testing only
- 3/ S-par data to be tabulated at 6, 12, 16, and 18 GHz only
- -RF: 6 - 20 GHz, 1 GHz steps, Pin = -10 dBm
- -LO: 7 - 21 GHz, 1 GHz steps, Pin = +20 dBm
- -IF: 1 GHz
- 4/ IP3, P1dB to be tabulated at 6, 12, 16, and 18 GHz only
- -RF: 6 - 20 GHz, 2 GHz steps, Pin = -10 dBm
- -LO: 7 - 21 GHz, 2 GHz steps, Pin = +20 dBm
- -IF: 1 GHz

| Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   | Table III - Endpoint and Delta Limits (+25°C) (Product is tested in accordance with Table II with the following exceptions)   |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                                                                                     | Symbol                                                                                                                        | Sub- groups                                                                                                                   | End-point                                                                                                                     | End-point                                                                                                                     | Delta                                                                                                                         | Units                                                                                                                         |
| Parameter                                                                                                                     | Symbol                                                                                                                        | Sub- groups                                                                                                                   |                                                                                                                               | Max                                                                                                                           | Delta                                                                                                                         | Units                                                                                                                         |
| Conversion Loss                                                                                                               | CL                                                                                                                            | 4                                                                                                                             |                                                                                                                               | 11                                                                                                                            | ±0.5                                                                                                                          | dB                                                                                                                            |

Table III Notes:

- 1/ Table II limits will not be exceeded
- 2/ 240 hour burn in and Group C end point electrical parameters. Deltas are performed at TA = 25°C

## ADH141S

## 5.0 Die Outline

<!-- image -->

## NOTES:

- 1.ALLDIMENSIONSAREININCHES[MM].
- 2.DIETHICKNESSIS.004"
- 3.TYPICALBONDPADIS.004"SQUARE.
- 4.BACKSIDEMETALLIZATION:GOLD.
- 5.BONDPADMETALLIZATION:GOLD.
- 6.BACKSIDEMETALISGROUND.
- 7.CONNECTIONNOTREQUIREDFOR UNLABELEDBONDPADS.
1. RF (AC coupled, matched to 50 Ohms)
2. LO (AC coupled, matched to 50 Ohms)
3. IF (DC coupled)
-  For applications not requiring operation to DC, port should be DC blocked externally using series capacitor with value chosen to pass necessary IF frequency range
-  For operation to DC, pin must not source/sink more than 2mA else malfunction or possible failure will result

| Rev   | Description of Change                                                                                  | Date            |
|-------|--------------------------------------------------------------------------------------------------------|-----------------|
| A     | Initiate                                                                                               | 27-October-2015 |
| B     | Add note to exceptions list to clarify test temperatures for interim and post burn-in electrical tests | 4-June-2019     |

<!-- image -->

Backside (must be connected to RF/DC GND) No connection required for unlabeled bond pads