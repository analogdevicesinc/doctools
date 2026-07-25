<!-- lastmod 2021-04-13 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Level V except as modified herein.

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at https://www.analog.com/HMC244

## 2.0 Part Number

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH244-701G16

GaAs MMIC SP4T Non-Reflective Switch, DC - 4 GHz

## 3.0 Case Outline

The case outline is as follows:

Figure 1 - Functional Block Diagram

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style                         |
|------------------|--------------------------|-------------|---------------|---------------------------------------|
| X                | FR-16-2                  | 16 Lead     | Gold          | Glass/Metal Hermetic Leaded SMT (G16) |

<!-- image -->

ASD0016609                                                                            Rev.  A

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

## DC to 4 GHz SP4T Non-Reflective Switch

ADH244S

Figure 2 - Terminal Connections

| Package:X      | Package:X       | Package:X   | Package:X                                                                     | Package:X           |
|----------------|-----------------|-------------|-------------------------------------------------------------------------------|---------------------|
| Pin Number     | Terminal Symbol | Pin Type    | Pin Description                                                               | Interface Schematic |
| 1              | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| 2              | RF4             | RF Output   | This pin is DC coupled and matched to 50 Ohms. Blocking capacitor is required |                     |
| 3              | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| 4              | RF3             | RF Output   | This pin is DC coupled and matched to 50 Ohms. Blocking capacitor is required |                     |
| 5              | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| 6              | VDD             | Power       | Supply Voltage. Typical: +5.0 Vdc ± 10%                                       |                     |
| 7              | B               | Power       | Control Inputs                                                                |                     |
| 8              | A               | Power       | See Truth Table (Table III) and TTL/CMOS Control Voltages Table (Table IV)    |                     |
| 9              | RF2             | RF Output   | This pin is DC coupled and matched to 50 Ohms. Blocking capacitor is required |                     |
| 10             | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| 11             | RF1             | RF Output   | This pin is DC coupled and matched to 50 Ohms. Blocking capacitor is required |                     |
| 12             | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| 13             | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| 14             | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| 15             | RFC             | RF Input    | This pin is DC coupled and matched to 50 Ohms. Blocking capacitor is required |                     |
| 16             | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| Package Bottom | GND             | Power       | RF/DC Ground 1/                                                               |                     |
| Package Lid    |                 | NIC         | No Internal Connection. Package Lid is not connected to RF/DC Ground          |                     |

1/ The package bottom has an exposed metal paddle that must also be connected to RF/DC ground.

## 4.0 Specifications

| Bias Voltage Range (VDD)………………………………………………………….….+7.0Vdc Control Input Voltage Range (A& B) ………………………………………………….-0.5Vdcto(VDD + 1 ChannelTemperature……………………………………………………...……………150°C Thermal Resistance (Insertion Loss Path) …………………………...………….……137.8 ° C/W Thermal Resistance (Terminated Path)…………………………………………….….295.7 ° C/W StorageTemperature…………………………………………………………………….-65°Cto+150°C Maximum Input Power (VDD = +5 Vdc & 0.05 GHz - 0.5 GHz) …………………….+20dBm Maximum Input Power (VDD = +5 Vdc & 0.5 GHz - 4 GHz) …………………...…… +27 dBm   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Recommended Operating Conditions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ESD Sensitivity(HBM)……………………………………………………………………Class0(<250V)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Positive Supply Voltage(VDD)………………………………………………………….+5.0Vdc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Ambient Operating Temperature Range (T ) …………………………………….……-40°Cto+85 °C                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Positive Supply Current(IDD)…………………………………………………….……+3.0mA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Return Loss 'On-State' (RL ON ) (DC - 3.5 GHz)………………………………….….18dB                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Return Loss 'On-State' (RL ON ) (DC - 4.0 GHz)………………………….………….13dB                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Return Loss RF1-RF4 'Off-State' (RL OFF ) (0.2 GHz - 4.0 GHz) ……....……...…. 10 dB                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| tRISE, tFALL (10/90% RF) (DC - 4.0GHz)……………………………………….….40ns                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| tON, tOFF (50% A/B to 10/90% RF) (DC - 4.0 GHz)……………………………….150ns                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ All typical specifications apply at TA = 25 °C with VDD = +5.0 V and A &amp; B Control Input Voltage Low = 0 V, High = +5.0 V unless otherwise noted.

## TABLE I - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter                                    | Symbol                                       | Conditions 1/ Unless otherwise specified     | GroupA Subgroups                             | Limits                                       | Limits                                       | Units                                        |
|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|
| See notes at end of table                    |                                              |                                              |                                              | Min                                          | Max                                          |                                              |
| Frequency = 0.1 GHzContinuous Wave(CW) Input | Frequency = 0.1 GHzContinuous Wave(CW) Input | Frequency = 0.1 GHzContinuous Wave(CW) Input | Frequency = 0.1 GHzContinuous Wave(CW) Input | Frequency = 0.1 GHzContinuous Wave(CW) Input | Frequency = 0.1 GHzContinuous Wave(CW) Input | Frequency = 0.1 GHzContinuous Wave(CW) Input |
| Insertion Loss                               | IL                                           | RFC P IN = -25 dBm                           | 4, 5, 6                                      |                                              | 1.1                                          | dB                                           |
| Isolation                                    | ISO                                          | RFC P IN = -25 dBm                           | 4, 5, 6                                      | 40                                           |                                              | dB                                           |
| Input Power for 1dB Compression 2/           | IP1dB                                        |                                              | 7, 8A, 8B                                    | 21                                           |                                              | dBm                                          |
| Frequency = 0.5 GHzContinuous Wave(CW) Input | Frequency = 0.5 GHzContinuous Wave(CW) Input | Frequency = 0.5 GHzContinuous Wave(CW) Input | Frequency = 0.5 GHzContinuous Wave(CW) Input | Frequency = 0.5 GHzContinuous Wave(CW) Input | Frequency = 0.5 GHzContinuous Wave(CW) Input | Frequency = 0.5 GHzContinuous Wave(CW) Input |
| Input Third Order Intercept 3/4/             | IIP3                                         |                                              | 4                                            | 43                                           |                                              | dBm                                          |
| Frequency = 2.0 GHzContinuous Wave(CW) Input | Frequency = 2.0 GHzContinuous Wave(CW) Input | Frequency = 2.0 GHzContinuous Wave(CW) Input | Frequency = 2.0 GHzContinuous Wave(CW) Input | Frequency = 2.0 GHzContinuous Wave(CW) Input | Frequency = 2.0 GHzContinuous Wave(CW) Input | Frequency = 2.0 GHzContinuous Wave(CW) Input |
| Insertion Loss                               | IL                                           | RFC P IN = -25 dBm                           | 4, 5, 6                                      |                                              | 1.2                                          | dB                                           |
| Isolation                                    | ISO                                          | RFC P IN = -25 dBm                           | 4, 5, 6                                      | 35                                           |                                              | dB                                           |
| Input Power for 1dB Compression 2/           | IP1dB                                        |                                              | 7, 8A, 8B                                    | 21                                           |                                              | dBm                                          |
| Input Third Order Intercept 3/4/             | IIP3                                         |                                              | 4                                            | 43                                           |                                              | dBm                                          |
| Frequency = 4.0 GHzContinuous Wave(CW) Input | Frequency = 4.0 GHzContinuous Wave(CW) Input | Frequency = 4.0 GHzContinuous Wave(CW) Input | Frequency = 4.0 GHzContinuous Wave(CW) Input | Frequency = 4.0 GHzContinuous Wave(CW) Input | Frequency = 4.0 GHzContinuous Wave(CW) Input | Frequency = 4.0 GHzContinuous Wave(CW) Input |
| Insertion Loss                               | IL                                           | RFC P IN = -25 dBm                           | 4, 5, 6                                      |                                              | 2                                            | dB                                           |
| Isolation                                    | ISO                                          | RFC P IN = -25 dBm                           | 4, 5, 6                                      | 22                                           |                                              | dB                                           |
| Input Power for 1dB Compression 2/           | IP1dB                                        |                                              | 7, 8A, 8B                                    | 21                                           |                                              | dBm                                          |
| Input Third Order Intercept 3/4/             | IIP3                                         |                                              | 4                                            | 40                                           |                                              | dBm                                          |
| Power Supplies                               | Power Supplies                               | Power Supplies                               | Power Supplies                               | Power Supplies                               | Power Supplies                               | Power Supplies                               |
| VDD Supply Current                           | IDD                                          | No Signal at RFC, RF1 - RF4                  | 1, 2, 3                                      |                                              | 7                                            | mA                                           |

TABLE I Notes:

1/ TA Nom = +25 °C, TA Max = +85 °C, TA Min = -40 °C, VDD = +5.0 V, A &amp; B Control Input Voltage Low = 0 V, High = +5.0 V.

2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Guaranteed by design and shall not be tested. It shall be repeated after major design or process changes.

4/ Two-Tone Input Power = +7 dBm per Tone with1 MHz spacing.

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Test Requirements                       | Subgroups (in accordance with MIL- PRF-38535, Table III)   |
|-----------------------------------------|------------------------------------------------------------|
| Interim Electrical Parameters           | 1, 4                                                       |
| Final Electrical Parameters             | 1, 4 1/ 2/                                                 |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6                                           |
| Group C end-point electrical parameters | 1, 4 2/                                                    |
| Group Dend-point electrical parameters  | 1, 4                                                       |

TABLE IIA Notes:

1/ PDA applies to Table I subgroup 1 and Table IIB delta parameters.

2/ See Table IIB for delta parameters

## TABLE IIB - BURN-IN/LIFE TEST DELTA LIMITS 1/2/

| Parameter          | Test Conditions   | Symbol   | Delta   | Units   |
|--------------------|-------------------|----------|---------|---------|
| Insertion Loss     | 3/                | IL       | ± 1     | dB      |
| VDD Supply Current | 4/                | IDD      | ± 10    | %       |

TABLE IIB Notes:

1/ 240 hour burn in and 1000 hour life test (Group C) end point electrical parameters.

2/ Deltas are performed at TA = +25 °C only with VDD = + 5.0 V

3/ A &amp; B Control Input Voltage Low = 0 V, High = +5.0 V.

4/ No Signal at RFC, RF1 - RF4.

TABLE III - TRUTH TABLE

| Control Input   | Control Input   | Signal Path State   |
|-----------------|-----------------|---------------------|
| A               | B               | RFC to:             |
| Low             | Low             | RF1                 |
| High            | Low             | RF2                 |
| Low             | High            | RF3                 |
| High            | High            | RF4                 |

TABLE IV - TTL/CMOS CONTROL VOLTAGES

| State   | Bias Condition                 |
|---------|--------------------------------|
| Low     | 0 Vdc to +0.8 Vdc @5µATyp.     |
| High    | +2.0 Vdc to +5.0 Vdc @70µATyp. |

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition D of MIL -STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## ADH244S

## 6.0 MIL-PRF-38535 QMLV Exceptions

The  manufacturing  flow  described  in  the  RF  &amp;  MICROWAVE  STANDARD  SPACE  LEVEL  PRODUCTS PROGRAM is to be considered a part of this specification. The brochure describes standard QMLV exceptions for Aerospace products run at the ADI Chelmsford, MA facility.

## 6.1. Wafer Fabrication

Foundry information is available upon request.

## 6.2. Group D

Group D-5 Salt Atmosphere testing is not being performed.

## 7.0 Application Notes

The circuit board used in the final application should be generated with proper RF circuit design techniques. Signal lines at the RF ports (RFC, RF1 - RF4) should have 50 Ohm impedance. Also, the package ground leads, and package bottom should be connected directly to the ground plane. The recommended circuit board material is Rogers 4350.

## 8.0 Package Outline Dimensions

The G16 package and outline dimensions can be found at http://www.analog.com or upon request.

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description              | Package Option   |
|---------------|---------------------|----------------------------------|------------------|
| ADH244-701G16 | -40 °C to +85 °C    | 16 Lead Glass/Metal Hermetic SMT | G16 (FR-16-2)    |

| Revision History   | Revision History      | Revision History   |
|--------------------|-----------------------|--------------------|
| Rev                | Description of Change | Date               |
| A                  | Initial Release       | 03/24/2021         |

<!-- image -->