<!-- lastmod 2023-09-20 -->
<!-- image -->

## 2 - 20 GHz Low Noise AGC Amplifier

ADH463S

## 1.0 SCOPE

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Class V except as modified herein.

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/HMC463LH250.

## 2.0 Part Number

- 2.1.  The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH463-701LH250

2 - 20 GHz, Low Noise AGC Amplifier

## 3.0 Case Outline

The case outline is as follows:

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style                |
|------------------|--------------------------|-------------|---------------|------------------------------|
| X                | E-12-6                   | 12 Lead     | Gold          | Ceramic Hermetic SMT (LH250) |

## FUNCTIONAL BLOCK DIAGRAM 1/

Figure 1 - Functional Block Diagram

<!-- image -->

1/ Package top view

ASD0016629B                                                                          Rev.  B

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

One Analog Way, Wilmington, MA 01887, U.S.A.

Tel: 781.935.5565                                                                   www.analog.com

Fax: 800.262.5643   © 2023 Analog Devices, Inc. All rights reserved.

## ADH463S

Figure 2 - Terminal Connections

| Package:X       | Package:X       | Package:X   | Package:X                                   | Package:X           |
|-----------------|-----------------|-------------|---------------------------------------------|---------------------|
| Pin Number      | Terminal Symbol | LeadType    | Pin Description                             | Interface Schematic |
| 1,2,4,5,7,8 ,10 | GND             | Power       | Ground 1/                                   |                     |
| 3               | RFIN            | RF I/O      | RF Input 2/                                 |                     |
| 6               | Vgg1            | Power       | Gate Control                                |                     |
| 9               | RFOUT           | RF I/O      | RF Output 2/                                |                     |
| 11              | Vdd             | Power       | Power Supply Voltage                        |                     |
| 12              | Vgg2            | Power       | Optional Gate Control if AGC is required 3/ |                     |
| Package Base    | GND             | Power       | Ground 1/                                   |                     |
| Package Lid     | GND             | Power       | Ground 1/                                   |                     |

1/ The package bottom has an exposed metal pad that must connect the printed circuit board (PCB) RF/DC ground.

- 2/ This lead is DC-coupled and matched to 50 ohms. A DC blocking capacitor is required if the RF line potential does not equal 0 Vdc.

3/ Leave Vgg2 open circuited if AGC is not required.

## 4.0 Specifications

| 4.1.   | Absolute Maximum Ratings 1/                                                                 |                        |
|--------|---------------------------------------------------------------------------------------------|------------------------|
|        | Drain Bias Voltage (Vdd)..................................................................  | +9 Vdc                 |
|        | Gate Bias Voltage (Vgg1).................................................................   | -2 Vdc to 0 Vdc        |
|        | Gate Bias Current (Igg1) .................................................................. | 2.5 mA                 |
|        | Gate Bias Voltage (Vgg2) (AGC) .....................................................        | (Vdd -9) Vdc to +2 Vdc |
|        | RF Input Power (RFIN) (Vdd= +5 Vdc) ............................................            | +18 dBm 2/             |
|        | Continuous Pdiss (T = 85  C) (derate 16.7 mW/  C above 85  C) ..                         | 1.08W                  |
|        | Channel Temperature.......................................................................  | +175  C               |
|        | Storage Temperature Range ...........................................................       | -65  C to +150  C    |
|        | Junction Temperature Maximum (T J ) ..............................................          | 102.97  C             |
|        | Thermal Resistance (Channel to package bottom) .........................                    | 59.9  C/W             |
|        | ESD Sensitivity (HBM) ....................................................................  | Class 0B, passed 150 V |
| 4.2.   | Recommended Operating Conditions                                                            |                        |
|        | Ambient Operating Temperature Range (T A )...................................               | -40  C to +85  C     |
| 4.3.   | Nominal Operating Performance Characteristics 3/                                            |                        |
|        | Input Return Loss (S11) (2-6 GHz) ..................................................        | 15 dB                  |
|        | Input Return Loss (S11) (6-16 GHz)................................................          | 15 dB                  |
|        | Input Return Loss (S11) (16-20 GHz)..............................................           | 9 dB                   |
|        | Output Return Loss (S22) (2-6 GHz)...............................................           | 11 dB                  |
|        | Output Return Loss (S22) (6-16 GHz).............................................            | 15 dB                  |
|        | Output Return Loss (S22) (16-20 GHz)...........................................             | 9 dB                   |
|        | Saturated Output Power (2-6 GHz)..................................................          | 21.5 dBm               |
|        | Saturated Output Power (6-16 GHz)................................................           | 20.5 dBm               |
|        | Saturated Output Power (16-20 GHz)..............................................            | 19 dBm                 |

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ Frequency = 2 GHz - 20 GHz

3/ All typical specifications are at TA = +25 °C, Vdd = +5 Vdc, Vgg2 = Open, Idd = 60 mA. ( Adjust Vgg1 between -2 Vdc to -0 Vdc to achieve Idd= 60 mA typical.)

4/ Psat specified as OP5dB.

## TABLE I - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter                                        | Symbol                                       | Conditions 1/                                | GroupA                                       | Limits                                       | Limits                                       | Units                                        |
|--------------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|
| See notes at end of table                        |                                              | Unless otherwise specified                   | Subgroups                                    | Min                                          | Max                                          |                                              |
| Frequency = 2 GHz Continuous Wave(CW) input      | Frequency = 2 GHz Continuous Wave(CW) input  | Frequency = 2 GHz Continuous Wave(CW) input  | Frequency = 2 GHz Continuous Wave(CW) input  | Frequency = 2 GHz Continuous Wave(CW) input  | Frequency = 2 GHz Continuous Wave(CW) input  | Frequency = 2 GHz Continuous Wave(CW) input  |
| Gain                                             | S21                                          | RFIN =-25 dBm                                | 4,5,6                                        | 11.5                                         |                                              | dB                                           |
|                                                  |                                              | RFIN =-25 dBm                                | 4                                            |                                              | ± 0.35                                       | dB                                           |
| Gain Flatness                                    | ∆GP                                          |                                              | 5,6                                          |                                              | ± 0.45                                       | dB                                           |
| Gain Variation Over Temperature 2/               | S21/ ⁰ C                                     | RFIN =-25 dBm                                | 4, 5, 6                                      |                                              | 0.025                                        | dB/ ⁰ C                                     |
| Noise Figure                                     | NF                                           |                                              | 4                                            |                                              | 5.5                                          | dB                                           |
| Output Power for 1dB Compression 2/ 3/           | OP1dB                                        |                                              | 5,6 4,5,6                                    | 16                                           | 6                                            | dB dBm                                       |
|                                                  |                                              |                                              | 4,5                                          | 25                                           |                                              |                                              |
| Output Third Order Intercept 2/ 4/               | OIP3                                         |                                              | 6                                            | 22                                           |                                              | dBm                                          |
| Frequency = 6 GHz Continuous Wave(CW) input      | Frequency = 6 GHz Continuous Wave(CW) input  | Frequency = 6 GHz Continuous Wave(CW) input  | Frequency = 6 GHz Continuous Wave(CW) input  | Frequency = 6 GHz Continuous Wave(CW) input  | Frequency = 6 GHz Continuous Wave(CW) input  | Frequency = 6 GHz Continuous Wave(CW) input  |
| Gain                                             | S21                                          | RFIN =-25 dBm                                | 4,5,6                                        | 11.5                                         |                                              | dB                                           |
|                                                  | ∆GP                                          | RFIN =-25 dBm                                | 4                                            |                                              | ± 0.7                                        | dB                                           |
| Gain Flatness                                    |                                              |                                              | 5,6                                          |                                              | ± 0.85                                       | dB                                           |
| Gain Variation Over Temperature 2/               | S21/ ⁰ C                                     | RFIN =-25 dBm                                | 4, 5, 6                                      |                                              | 0.025                                        | dB/ ⁰ C                                     |
| Noise Figure                                     | NF                                           |                                              | 4                                            |                                              | 5.5                                          | dB                                           |
| Output Power for 1dB Compression 2/ 3/           | OP1dB                                        |                                              | 5,6 4,5,6                                    | 16                                           | 6                                            | dB dBm                                       |
|                                                  |                                              |                                              | 4,5                                          | 25                                           |                                              |                                              |
| Output Third Order Intercept 2/ 4/               | OIP3                                         |                                              | 6                                            | 22                                           |                                              | dBm                                          |
| Frequency = 16 GHz Continuous Wave(CW) input     | Frequency = 16 GHz Continuous Wave(CW) input | Frequency = 16 GHz Continuous Wave(CW) input | Frequency = 16 GHz Continuous Wave(CW) input | Frequency = 16 GHz Continuous Wave(CW) input | Frequency = 16 GHz Continuous Wave(CW) input | Frequency = 16 GHz Continuous Wave(CW) input |
| Gain                                             | S21                                          | RFIN =-25 dBm                                | 4,5,6                                        | 10.2                                         |                                              | dB                                           |
|                                                  | ∆GP                                          | RFIN =-25 dBm                                | 4                                            |                                              | ± 0.9                                        | dB                                           |
| Gain Flatness Gain Variation Over Temperature 2/ | S21/ ⁰ C                                     | RFIN =-25 dBm                                | 5,6 4, 5, 6                                  |                                              | ± 1.35 0.025                                 | dB dB/ C                                    |
|                                                  |                                              |                                              | 4                                            |                                              | 4.5                                          | ⁰ dB                                         |
| Noise Figure                                     | NF                                           |                                              | 5,6                                          |                                              | 5.5                                          | dB                                           |
| Output Power for 1dB Compression 2/ 3/           | OP1dB                                        |                                              | 4,5,6                                        | 13                                           |                                              | dBm                                          |
|                                                  |                                              |                                              | 4                                            | 23                                           |                                              |                                              |
| Output Third Order Intercept 2/ 4/               | OIP3                                         |                                              | 5                                            | 22                                           |                                              | dBm                                          |
| Frequency = 20 GHz Continuous Wave(CW) input     | Frequency = 20 GHz Continuous Wave(CW) input | Frequency = 20 GHz Continuous Wave(CW) input | Frequency = 20 GHz Continuous Wave(CW) input | Frequency = 20 GHz Continuous Wave(CW) input | Frequency = 20 GHz Continuous Wave(CW) input | Frequency = 20 GHz Continuous Wave(CW) input |
| Gain                                             | S21                                          | RFIN =-25 dBm                                | 4,5,6                                        | 8                                            |                                              | dB                                           |
| Gain Flatness                                    | ∆GP                                          | RFIN =-25 dBm                                | 4                                            |                                              | ± 0.9 ±                                      | dB dB                                        |
| Gain Variation Over Temperature 2/               | S21/ ⁰ C                                     | RFIN =-25 dBm                                | 5,6 4, 5, 6                                  |                                              | 1.35 0.025                                   | dB/ ⁰ C                                     |
|                                                  |                                              |                                              | 4                                            |                                              | 5.5                                          | dB                                           |
| Noise Figure                                     | NF                                           |                                              | 5,6                                          |                                              | 6.5                                          | dB                                           |
| Output Power for 1dB Compression 2/ 3/           | OP1dB                                        |                                              | 4,5,6                                        | 10                                           |                                              | dBm                                          |
|                                                  |                                              |                                              | 4                                            | 20                                           |                                              |                                              |
| Output Third Order Intercept 2/ 4/               | OIP3                                         |                                              | 5 6                                          | 18 15                                        |                                              | dBm                                          |
| Power Supplies                                   | Power Supplies                               | Power Supplies                               | Power Supplies                               | Power Supplies                               | Power Supplies                               | Power Supplies                               |
| Quiescent supply current                         | Idd                                          | No signal at RFIN                            | 1, 2, 3                                      |                                              | 80                                           | mA                                           |

## TABLE I NOTES:

1/ TA nom = +25 ºC, TA max = 85 ºC, and TA min = -40 ºC unless otherwise noted, Vdd = +5 Vdc, Vgg2 = Open, Idd = 60 mA ( Adjust Vgg1 between -2 Vdc to -0 Vdc to achieve Idd= 60 mA typical.)

2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots. Five (5) flight units are randomly selected to test this parameter.

3/ Input power sweep -5 to 14 dBm

4/ Two-Tone Output Power = 0 dBm per tone with 1 MHz spacing.

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III)   |
|-----------------------------------------|-----------------------------------------------------------|
| Interim Electrical Parameters           | 1                                                         |
| Final Electrical Parameters             | 1, 4 1/ 2/                                                |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6                                          |
| Group C end-point electrical parameters | 1, 4 2/                                                   |
| Group Dend-point electrical parameters  | 1, 4                                                      |

Table IIA Notes:

1/ PDA applies to Table I subgroup 1 and Table IIB delta parameters.

2/ See Table IIB for delta parameters

## TABLE IIB - BURN-IN / LIFE TEST DELTA LIMITS 1/

| Parameter            | Symbol   | Delta   | Units   |
|----------------------|----------|---------|---------|
| Gain 2/ 3/           | S21      | ±1.0    | dB      |
| Supply Current 2/ 4/ | Idd      | ±10     | %       |

Table IIB Notes:

- 1/ 240 hour burn in and group C end point electrical parameters.
- 2/ Deltas are performed at room temperature TA = +25 °C only.
- 3/ Deltas apply with Vdd = +5 Vdc, Vgg2 = Open, Idd = 60 mA unless otherwise noted.
- 4/ Deltas apply with Vdd = +5 Vdc, Vgg2 = Open, Vgg1 = -0.9 Vdc Typ.

## ADH463S

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition B of MIL-STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 6.0 MIL-PRF-38535 QMLV Exceptions

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM is to be considered a part of this specification. The brochure describes standard QMLV exceptions for Aerospace products run at the ADI Chelmsford, MA facility.

## 6.1. Wafer Fabrication

Foundry information is available on request.

## 6.2. Group D

Group D-5 Salt Atmosphere testing is not being performed.

## 7.0 Application Notes

The circuit board used in the final application should be generated with proper RF circuit design techniques. Signal lines at the RF ports (RFIN &amp; RFOUT) should have 50 Ohm impedence. Also, the package ground leads, and package bottom should be connected directly to the ground plane. The recommended circuit board material is Rogers 4350.

## Application Circuit

Figure 3 - Typical application circuit for the ADH463-701LH250

<!-- image -->

## 8.0 Package Outline Dimensions

The LH250 package and outline dimensions can be found at http://www.analog.com or upon request.

## ORDERING GUIDE

| Model           | Temperature Range   | Package Description                   | Package Option   |
|-----------------|---------------------|---------------------------------------|------------------|
| ADH463-701LH250 | -40 °C to +85 °C    | 12 Lead Ceramic Leadless Chip Carrier | LH250 (E-12-6)   |

| Revision History   | Revision History        | Revision History   |
|--------------------|-------------------------|--------------------|
| Rev                | Description of Change   | Date               |
| A                  | Initial Product Release | 4/20/23            |
| B                  | UpdateTable I           | 5/9/23             |

<!-- image -->