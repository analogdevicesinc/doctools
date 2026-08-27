<!-- lastmod 2020-11-09 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Level V except as modified herein.

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/HMC554

## 2.0 Part Number

- 2.1. The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH554-701LH5

11 GHz to 18 GHz Fundamental Mixer

## 3.0 Case Outline

- 3.1. The case outline is as follows:

Figure 1 - Functional Block Diagram

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style              |
|------------------|--------------------------|-------------|---------------|----------------------------|
| X                | E-12-5                   | 12 lead     | Gold          | Ceramic Hermetic SMT (LH5) |

<!-- image -->

ASD0016594                                                                            Rev. C

## 11 GHz to 18 GHz

## Fundamental Mixer

ADH554S

Figure 2 - Terminal Connections

| Package:X      | Package:X       | Package:X   | Package:X                                        | Package:X           |
|----------------|-----------------|-------------|--------------------------------------------------|---------------------|
| Pin Number     | Terminal Symbol | Pin Type    | Pin Description                                  | Interface Schematic |
| 1              | GND             | Power       | RF/DC ground                                     |                     |
| 2              | LO              | Input       | LO Input 1/                                      |                     |
| 3              | GND             | Power       | RF/DC ground                                     |                     |
| 4              | GND             | Power       | RF/DC ground                                     |                     |
| 5              | IF              | I/O         | IF up converter Input / down converter Output 2/ |                     |
| 6              | GND             | Power       | RF/DC ground                                     |                     |
| 7              | GND             | Power       | RF/DC ground                                     |                     |
| 8              | RF              | I/O         | RF down converter Input / up converter Output 1/ |                     |
| 9              | GND             | Power       | RF/DC ground                                     |                     |
| 10             | GND             | Power       | RF/DC ground                                     |                     |
| 11             | GND             | Power       | RF/DC ground                                     |                     |
| 12             | GND             | Power       | RF/DC ground                                     |                     |
| Package Bottom | GND             | Power       | RF/DC ground 3/                                  |                     |
| Package Lid    | GND             | Power       | RF/DC ground 4/                                  |                     |

1/ This pin is DC coupled and matched to 50 Ohms.

2/ This pin is DC coupled. For applications not requiring operation to DC, this port should be DC blocked externally using a series capacitor whose value has been chosen to pass the necessary IF frequency range. For operation to DC, this pin must not source or sink more than 2 mA of current or part non-function and possible part failure will result.

3/ Package bottom must be connected to RF/DC ground

4/ Package lid is internally connected to RF/DC ground

## 4.0 Specifications

| 4.1. Absolute Maximum Ratings 1/ RF / IF Input ..................................................................................                                                                                                                                                                                                                                                                                                                                   | .……. +24 dBm             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| LO Drive ........................................................................................ Recommended Operating Conditions                                                                                                                                                                                                                                                                                                                                  | .……. +24 dBm             |
| IF Source and Sink Current …………...……………….………….…….….                                                                                                                                                                                                                                                                                                                                                                                                                 | ± 2 mA                   |
| Channel temperature ....................................................................                                                                                                                                                                                                                                                                                                                                                                            | ….…. +150 ° C            |
| Continuous Pdiss (T A = +85 ° C) (Derate 3.67 mW/ ° C above +85 ° C)                                                                                                                                                                                                                                                                                                                                                                                                | .... 0.238W              |
| Thermal Resistance (Junction to Package Bottom) ….………............….                                                                                                                                                                                                                                                                                                                                                                                                 | 272.8 ° C/W              |
| Storage temperature range ..........................................................                                                                                                                                                                                                                                                                                                                                                                                | .……. -65 ° C to +150 ° C |
| ESD Sensitivity (HBM) ..................................................................                                                                                                                                                                                                                                                                                                                                                                            | .….... Class 1C          |
| 4.2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                          |
| 4.3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | dBm 3/ 4/                |
| Nominal Operating Performance Characteristics 2/ Input Third Order Intercept (IIP3) (11 GHz - 18 GHz) ..................………. 17.5 Input Second Order Intercept (IIP2) (11 GHz - 18 GHz) ..............………. 42 dBm Input Second Order Intercept (IIP2) (12 GHz - 16 GHz) ..............………. 44 dBm 1 dB Gain Compression (IP1dB) (11 GHz - 18 GHz) ...................………. 11 dBm LO to RF Isolation (16 GHz -18GHz)…………………………………….. 30 dB ……………………………….…….... 20 dB | 3/ 4/                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 3/ 4/                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 3/                       |
| LO to IF Isolation (16 GHz - 18 GHz)                                                                                                                                                                                                                                                                                                                                                                                                                                |                          |
| RF to IF Isolation (16GHz-18GHz)…………………………………….…16dB                                                                                                                                                                                                                                                                                                                                                                                                                |                          |

C

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ All typical specifications apply at TA = 25 °C only with LO = +13 dBm, RF = -10 dBm, unless otherwise noted.

3/ Measured as downconverter, IF =100 MHz.

4/ Two-tone RF input power = -10 dBm each tone, 1 MHz spacing.

## TABLE I - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter                                     | Symbol                                        | Conditions 1/ Unless otherwise specified      | GroupA                                        | Limits                                        | Limits                                        | Units                                         |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| See notes at end of table                     |                                               |                                               | Subgroups                                     | Min                                           | Max                                           |                                               |
| Frequency = 11.0 GHzContinuous Wave(CW) input | Frequency = 11.0 GHzContinuous Wave(CW) input | Frequency = 11.0 GHzContinuous Wave(CW) input | Frequency = 11.0 GHzContinuous Wave(CW) input | Frequency = 11.0 GHzContinuous Wave(CW) input | Frequency = 11.0 GHzContinuous Wave(CW) input | Frequency = 11.0 GHzContinuous Wave(CW) input |
| Conversion Loss                               | S21                                           | RF = 11 GHz, LO = 10.9 GHz                    | 4                                             |                                               | 11                                            | dB                                            |
|                                               | S21                                           | RF = 11 GHz, LO = 10.9 GHz                    | 5, 6                                          |                                               | 12                                            | dB                                            |
| Noise Figure (SSB) 2/                         | NF                                            | RF = 11 GHz, LO = 10.9 GHz                    | 4                                             |                                               | 11                                            | dB                                            |
| Noise Figure (SSB) 2/                         | NF                                            | RF = 11 GHz, LO = 10.9 GHz                    | 5, 6                                          |                                               | 12                                            | dB                                            |
| LO to RF Isolation                            | ISO LO-RF                                     | RF = 11 GHz, LO = 10.9 GHz                    | 4                                             | 40                                            |                                               | dB                                            |
| LO to RF Isolation                            | ISO LO-RF                                     | RF = 11 GHz, LO = 10.9 GHz                    | 5, 6                                          | 35                                            |                                               | dB                                            |
| LO to IF Isolation                            | ISO LO-IF                                     | RF = 11 GHz, LO = 10.9 GHz                    | 4                                             | 29                                            |                                               | dB                                            |
| LO to IF Isolation                            | ISO LO-IF                                     | RF = 11 GHz, LO = 10.9 GHz                    | 5, 6                                          | 26                                            |                                               | dB                                            |
|                                               | ISO RF-IF                                     | RF = 11 GHz, LO = 10.9 GHz                    | 4                                             | 15                                            |                                               | dB                                            |
| RF to IF Isolation                            | ISO RF-IF                                     | RF = 11 GHz, LO = 10.9 GHz                    | 5, 6                                          | 13                                            |                                               | dB                                            |
| Frequency = 14.5 GHzContinuous Wave(CW) input | Frequency = 14.5 GHzContinuous Wave(CW) input | Frequency = 14.5 GHzContinuous Wave(CW) input | Frequency = 14.5 GHzContinuous Wave(CW) input | Frequency = 14.5 GHzContinuous Wave(CW) input | Frequency = 14.5 GHzContinuous Wave(CW) input | Frequency = 14.5 GHzContinuous Wave(CW) input |
| Conversion Loss                               | S21                                           | RF = 14.5 GHz, LO = 14.4 GHz                  | 4                                             |                                               | 9                                             | dB                                            |
| Conversion Loss                               | S21                                           | RF = 14.5 GHz, LO = 14.4 GHz                  | 5, 6                                          |                                               | 10                                            | dB                                            |
| Noise Figure (SSB) 2/                         | NF                                            | RF = 14.5 GHz, LO = 14.4 GHz                  | 4                                             |                                               | 9                                             | dB                                            |
| Noise Figure (SSB) 2/                         | NF                                            | RF = 14.5 GHz, LO = 14.4 GHz                  | 5, 6                                          |                                               | 10                                            | dB                                            |
| LO to RF Isolation                            | ISO LO-RF                                     | RF = 14.5 GHz, LO = 14.4 GHz                  | 4                                             | 36                                            |                                               | dB                                            |
| LO to RF Isolation                            | ISO LO-RF                                     | RF = 14.5 GHz, LO = 14.4 GHz                  | 5, 6                                          | 34                                            |                                               | dB                                            |
| LO to IF Isolation                            | ISO                                           | RF = 14.5 GHz, LO = 14.4 GHz                  | 4                                             | 34                                            |                                               | dB                                            |
|                                               | LO-IF                                         | RF = 14.5 GHz, LO = 14.4 GHz                  | 5, 6                                          | 31                                            |                                               | dB                                            |
| RF to IF Isolation                            | ISO RF-IF                                     | RF = 14.5 GHz, LO = 14.4 GHz                  | 4                                             | 18                                            |                                               | dB                                            |
|                                               | ISO RF-IF                                     | RF = 14.5 GHz, LO = 14.4 GHz                  | 5, 6                                          | 16                                            |                                               | dB                                            |
| Frequency = 18.0 GHzContinuous Wave(CW) input | Frequency = 18.0 GHzContinuous Wave(CW) input | Frequency = 18.0 GHzContinuous Wave(CW) input | Frequency = 18.0 GHzContinuous Wave(CW) input | Frequency = 18.0 GHzContinuous Wave(CW) input | Frequency = 18.0 GHzContinuous Wave(CW) input | Frequency = 18.0 GHzContinuous Wave(CW) input |
| Conversion Loss                               | S21                                           | RF = 18 GHz, LO = 17.9 GHz                    | 4                                             |                                               | 12                                            | dB                                            |
| Conversion Loss                               | S21                                           | RF = 18 GHz, LO = 17.9 GHz                    | 5, 6                                          |                                               | 13                                            | dB                                            |
| Noise Figure (SSB) 2/                         | NF                                            | RF = 18 GHz, LO = 17.9 GHz                    | 4                                             |                                               | 12                                            | dB                                            |
| Noise Figure (SSB) 2/                         | NF                                            | RF = 18 GHz, LO = 17.9 GHz                    | 5, 6                                          |                                               | 13                                            | dB                                            |
| LO to RF Isolation                            | ISO LO-RF                                     | RF = 18 GHz, LO = 17.9 GHz                    | 4                                             | 40                                            |                                               | dB                                            |
| LO to RF Isolation                            | ISO LO-RF                                     | RF = 18 GHz, LO = 17.9 GHz                    | 5, 6                                          | 35                                            |                                               | dB                                            |
| LO to IF Isolation                            | ISO LO-IF                                     | RF = 18 GHz, LO = 17.9 GHz                    | 4                                             | 30                                            |                                               | dB                                            |
| LO to IF Isolation                            | ISO LO-IF                                     | RF = 18 GHz, LO = 17.9 GHz                    | 5, 6                                          | 27                                            |                                               | dB                                            |
|                                               | ISO                                           | RF = 18 GHz, LO = 17.9 GHz                    | 4                                             | 16                                            |                                               | dB                                            |
| RF to IF Isolation                            | RF-IF                                         | RF = 18 GHz, LO = 17.9 GHz                    | 5, 6                                          | 14                                            |                                               | dB                                            |

Table I Notes:

1/ Tested as downconverter at TA nom = +25 ºC, TA max = +85 ºC, TA min = -40 ºC, IF = 100 MHz, LO = +13 dBm and RF = -10 dBm, unless otherwise noted.

2/ Noise Figure not tested, guaranteed by Conversion Loss.

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III)   |
|-----------------------------------------|-----------------------------------------------------------|
| Interim Electrical Parameters           | 4                                                         |
| Final Electrical Parameters             | 4 1/ 2/                                                   |
| Group A Test Requirements               | 4, 5, 6                                                   |
| Group C end-point electrical parameters | 4 2/                                                      |
| Group Dend-point electrical parameters  | 4                                                         |

Table IIA Notes:

1/ PDA applies to Table I subgroup 1 and Table IIB delta parameters.

2/ See Table IIB for delta parameters

## TABLE IIB - BURN-IN/LIFE TEST DELTA LIMITS 1/ 2/

| Parameter       | Test Conditions   | Symbol   | Delta   | Units   |
|-----------------|-------------------|----------|---------|---------|
| Conversion Loss | Per Table I       | S21      | ± 1.0   | dB      |

Table IIB Notes:

1/ 240 hour burn in and 1000 hour life test (Group C) end point electrical parameters.

2/ Deltas are performed at TA = +25°C only.

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition C of MIL -STD - 883.
- 5.1.2.  HTRB is not applicable for this drawing.

## ADH554S

## 6.0 MIL-PRF-38535 QMLV Exceptions

The  manufacturing  flow  described  in  the  RF  &amp;  MICROWAVE  STANDARD  SPACE  LEVEL  PRODUCTS PROGRAM is to be considered a part of this specification. The brochure describes standard QMLV exceptions for Aerospace products run at the ADI Chelmsford, MA facility.

## 6.1. Wafer Fabrication

Foundry information is available upon request.

- 6.2. Group D

Group D-5 Salt Atmosphere testing is not being performed.

## 7.0 Application Notes

The circuit board used in this application should use RF circuit design techniques. Signal lines should have 50 Ohm impedance while the package ground leads and exposed paddle should be connected directly to the ground plane. Enough via holes should be used to connect the top and bottom ground planes.

## 8.0 Package Outline Dimensions

The LH5 package and outline dimensions can be found at http://www.analog.com or upon request.

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description          | Package Option   |
|---------------|---------------------|------------------------------|------------------|
| ADH554-701LH5 | -40°C to +85°C      | 12 Lead Ceramic Hermetic SMT | LH5 (E-12-5)     |

LH5 (E-12-5)

| Revision History   | Revision History                                        | Revision History   |
|--------------------|---------------------------------------------------------|--------------------|
| Rev                | Description of Change                                   | Date               |
| A                  | Initial release.                                        | 12/21/18           |
| B                  | Update Table I, Section 3.0, 4.1, 4.3, 6.0, 7.0 and 8.0 | 05/06/19           |
| C                  | Revise Section 5.1.1                                    | 10/01/2020         |

<!-- image -->