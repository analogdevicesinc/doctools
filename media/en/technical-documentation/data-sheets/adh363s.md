<!-- lastmod 2025-12-17 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Level V expect as modified herein

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/HMC363G8

## 2.0 Part Number

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH363R701G8

DC to 12 GHz Divide-by-8

## 3.0 Case Outline

The case outline is as follows:

Outline Letter

X

Figure 1 - Functional Block Diagram

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style                 |
|------------------|--------------------------|-------------|---------------|-------------------------------|
| X                | FR-8-2                   | 8 Lead      | Gold          | Glass/Metal Hermetic SMT (G8) |

<!-- image -->

## DC - 12 GHz

ADH363S

## ADH363S

Figure 2 - Terminal Connections

| Package:X      | Package:X       | Package:X   | Package:X                          | Package:X           |
|----------------|-----------------|-------------|------------------------------------|---------------------|
| Pin Number     | Terminal Symbol | Pin Type    | Pin Description                    | Interface Schematic |
| 1              | RFIN            | RF Input    | Positive RF differential Input 1/  |                     |
| 2              | N/C             |             | No Connection                      |                     |
| 3              | RFIN            | RF Input    | Negative RF differential Input 2/  |                     |
| 4              | GND             | Power       | RF/DC ground                       |                     |
| 5              | RFOUT           | RF Output   | Negative RF differential Output 3/ |                     |
| 6              | N/C             | N/C         | No Connection                      |                     |
| 7              | RFOUT           | RF Output   | Positive RF differential Output 4/ |                     |
| 8              | Vcc             | Power       | Supply Voltage 5/                  |                     |
| Package Bottom | GND             | Power       | RF/DC ground 6/                    |                     |
| Package Lid    |                 | NIC         | 7/                                 |                     |

1/ RF Input must be DC blocked.

2/ RF Input 180° out of phase with pin 1 for differential operation. Must be DC blocked.  AC ground for single ended operation.

- 3/ Divided output 180° out of phase with pin 7.  Must be DC blocked.

4/ RF Input must be DC blocked.  Divided output.

- 5/ Supply voltage 4.75 V to 5.25 V
- 6/ Package bottom must be connected to RF/DC ground.
- 7/ No internal connection on lid. Lid may be connected to RF/DC ground.

## 4.0 Specifications

## 4.1.  Absolute Maximum Ratings 1/

Supply voltage (Vcc)   .....................................................................  5.5 Vdc

RF Input (Vcc = +5 V)  ....................................................................  +13 dBm

Junction temperature maximum (TJ)   ............................................  +135 ° C

Continuous PDiss (T= 85 ° C) ........................................................  676 mW

(derate 13.5 mW/ ° C above 85 ° C)

Thermal resistance, junction-to-case ( θ JC)  ...................................  74 ° C/W

Thermal resistance, junction-to-ambient (

θ

JA)   ..............................  107.56

°

C/W

Storage temperature range  ..........................................................  -65

°

C to +150

°

C

ESD Sensitivity (HBM)   ..................................................................  Class 1A, Passed 250 V

## 4.2.  Recommended Operating Conditions

Supply voltage (Vcc)   .....................................................................  +4.75 V to +5.25 V

Ambient operating temperature range (TA)…………………………. -40 ° C to +85 ° C

## 4.3.  Nominal Operating Performance Characteristics  2/

Input Sensitivity near DC Operation (Square Wave input)

0.01 to 0.2 GHz ..........................................................................  -10 dBm to +10 dBm

- 0.2 to 0.5 GHz  ............................................................................  -15 dBm to +10 dBm

Input Sensitivity near DC Operation (Sine Wave input)

- 0.5 to 1 GHz  ................................................................................  -15 dBm to +10 dBm

Output Transition Time (FOUT = 882 MHz, PIN= 0 dBm)  ................  100 ps

Reverse Leakage (both outputs terminated) .................................  -55 dB

SSB Phase Noise (100 kHz offset) ...…......…...…........................ -153 dBc/Hz 3/

## Radiation Features

Maximum total dose available (dose rate = 50 - 300 rads (Si)/s) …. 100k rads (Si)

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ All typical specifications are at TA = 25 °C, Vcc = 5 V, unless otherwise noted.

3/ PIN = 0 dBm, FIN = 6 GHz

## TABLE I - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter See notes at end of table   | Symbol             | Conditions 1/                        | Conditions 1/                        | Sub-Group          | Limits             | Limits             | Units              |
|---------------------------------------|--------------------|--------------------------------------|--------------------------------------|--------------------|--------------------|--------------------|--------------------|
|                                       |                    | Unless otherwise specified           | Unless otherwise specified           | Sub-Group          | Min                | Max                | Units              |
| RF CHARACTERISTICS                    | RF CHARACTERISTICS | RF CHARACTERISTICS                   | RF CHARACTERISTICS                   | RF CHARACTERISTICS | RF CHARACTERISTICS | RF CHARACTERISTICS | RF CHARACTERISTICS |
| Input Frequency                       | F IN               |                                      |                                      | 4,5,6              | 1                  | 12                 | GHz                |
|                                       | Pout               | M,D,P,L,R                            | M,D,P,L,R                            | 4                  | 1                  | 12                 | dBm                |
|                                       | Pout               |                                      | M,D,P,L,R                            | 4,6 4              | 1                  |                    | dBm                |
|                                       | Pout               |                                      |                                      |                    | 1                  |                    | dBm                |
|                                       | Pout               | F IN = 1 GHz P IN = -10 dBm, +10 dBm | F IN = 1 GHz P IN = -10 dBm, +10 dBm | 5                  | 1                  |                    | dBm                |
|                                       | Pout               |                                      | M,D,P,L,R                            | 4,5,6 4            | 1                  |                    | dBm                |
| Output Power 4/                       | Pout               | F IN = 8 GHz                         | F IN = 8 GHz                         | 4,5,6              | 1                  |                    | dBm                |
|                                       | Pout               |                                      | M,D,P,L,R                            |                    | 1                  |                    | dBm                |
|                                       | Pout               |                                      |                                      | 4                  | 1                  |                    | dBm                |
|                                       | Pout               |                                      |                                      | 4,6                | 1                  |                    | dBm                |
|                                       | Pout               | M,D,P,L,R                            | M,D,P,L,R                            | 4                  | 1                  |                    | dBm                |
|                                       | Pout               |                                      |                                      | 5                  | 1                  |                    | dBm                |
| SUPPLYCURRENT                         | SUPPLYCURRENT      | SUPPLYCURRENT                        | SUPPLYCURRENT                        | SUPPLYCURRENT      | SUPPLYCURRENT      | SUPPLYCURRENT      | SUPPLYCURRENT      |
| Supply Current                        | Icc                | Vcc = 5.0 V                          | Vcc = 5.0 V                          | 1,2,3              |                    | 105                | mA                 |
| Supply Current                        | Icc                | No RF M,D,P,L,R                      | No RF M,D,P,L,R                      | 1                  |                    | 105                | mA                 |
| Supply Current                        | Icc                | Vcc = 4.75 V, 5.25 V 2/ 3/ No RF     | Vcc = 4.75 V, 5.25 V 2/ 3/ No RF     | 1,2,3              |                    | 105                | mA                 |
| HARMONICCONTENT                       | HARMONICCONTENT    | HARMONICCONTENT                      | HARMONICCONTENT                      | HARMONICCONTENT    | HARMONICCONTENT    | HARMONICCONTENT    | HARMONICCONTENT    |
| Feedthrough                           | FTHRU              | P IN = 0 dBm, F IN = 6 GHz 2/ 3/     | P IN = 0 dBm, F IN = 6 GHz 2/ 3/     | 4,5,6              |                    | -24                | dBm                |
| 2nd harmonic                          | 2nd                | P IN = 0 dBm, F IN = 6 GHz 2/ 3/     | P IN = 0 dBm, F IN = 6 GHz 2/ 3/     | 4,5,6              |                    | -31                | dBm                |
| 3rd harmonic                          | 3rd                | P IN = 0 dBm, F IN = 6 GHz 2/ 3/     | P IN = 0 dBm, F IN = 6 GHz 2/ 3/     | 4,5,6              |                    | -4                 | dBm                |

## TABLE I Notes:

1/ Vcc = 5 V, TA nom = 25 ºC, TA max = 85 ºC, and TA min = -40 ºC unless otherwise noted.

- 2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation.

4/ Apply for both pin 5 and pin 7. Output power is single-ended.

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Test Requirements                       | Sub-groups (in accordance with MIL-PRF-38535, Table III)   |
|-----------------------------------------|------------------------------------------------------------|
| Interim Electrical Parameters           | 1, 4                                                       |
| Final Electrical Parameters             | 1, 4 1/ 2/                                                 |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6                                           |
| Group C end-point electrical parameters | 1, 4 2/                                                    |
| Group Dend-point electrical parameters  | 1, 4                                                       |
| Group E end-point electrical parameters | 1, 4 3/                                                    |

Table IIA Notes:

1/ PDA applies to Table I sub-group 1 and Table IIB delta parameters.

2/ See Table IIB for delta parameters

3/ Parameters noted in Table I are not tested post irradiation.

## TABLE IIB - BURN-IN/ LIFE TEST DELTA LIMITS 1/ 2/

| Parameter       | Test Conditions                                                                                                                                                                                                                               | Symbol   | Delta   | Units   |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|---------|
| Supply Current  | Vcc = 5.0 V No RF                                                                                                                                                                                                                             | Icc      | ±10     | %       |
| Output Power 3/ | Vcc = 5.0 V F IN = 1 GHz, P IN = -15 dBm F IN = 1 GHz, P IN = +10dBm F IN = 6 GHz, P IN = -15dBm F IN = 6 GHz, P IN = +10dBm F IN = 8 GHz, P IN = -10 dBm F IN = 8 GHz, P IN =+5dBm F IN = 12 GHz, P IN = -10 dBm F IN = 12 GHz, P IN = 0 dBm | Pout     | ±1      | dB      |

TABLE IIB Notes:

- 1/ 240 hour burn in and 1000 hour life test (Group C) end point electrical parameters.

2/ Deltas are performed at TA = +25 °C only.

- 3/ Apply for both pin 5 and pin 7. Output power is single-ended.

## 5.0 Burn-In, Life Test, and Radiation

## 5.1.  Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition D of MIL -STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 5.2.  Radiation Exposure Circuit

- 5.2.1.  The radiation exposure circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing and acquiring activity upon request. Total dose irradiation testing shall be performed in accordance with MIL-STD-883 method 1019, condition A.

## 6.0 MIL-PRF-38535 QMLV Exceptions

## 6.1. Wafer Fabrication

Foundry information is available upon request.

## 6.2. Group D

Group D-5 Salt Atmosphere testing is not performed.

## 7.0 Application Notes

Figure 3 - Application Circuit

<!-- image -->

## 8.0 Package Outline Dimensions

The G8 package and outline dimensions can be found at http://www.analog.com or upon request.

## ORDERING GUIDE

| Model        | Temperature Range   | Package Description             | Package Option   |
|--------------|---------------------|---------------------------------|------------------|
| ADH363R701G8 | -40 °C to +85 °C    | 8 Lead Glass/Metal Hermetic SMT | G8 (FR-8-2)      |

| Revision History   | Revision History                               | Revision History   |
|--------------------|------------------------------------------------|--------------------|
| Rev                | Description of Change                          | Date               |
| A                  | Initial Release                                | 7/8/2020           |
| B                  | Corrected Typo In Table IIB                    | 8/4/2020           |
| C                  | Corrected Typo In Table IIB, Added HBMESDLevel | 12/9/2020          |
| D                  | Revise Sections 1 & 6.2 and Table I, IIA & IIB | 01/27/2021         |

<!-- image -->