<!-- lastmod 2019-08-22 -->
<!-- image -->

## 1.0 SCOPE

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Level V except as modified herein.

The manufacturing flow described in the ADI TRADITIONAL SPACE PRODUCTS PROGRAM brochure is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/HMC395

- 2.0 Part Number: The complete part number(s) of this specification follows:

- 2.1. The complete part number(s) of this specification follows:

Part Number

## Description

ADH395-701G8

DC to 4.0 GHz Gain Block

## 3.0 Case Outline

- 3.1. The case outline is as follows:

Figure 1 - Functional Block Diagram

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style                        |
|------------------|--------------------------|-------------|---------------|--------------------------------------|
| X                | FR-8-2                   | 8 Lead      | Gold          | Glass/Metal Hermetic Leaded SMT (G8) |

<!-- image -->

ADH395S

## ADH395S

Figure 2 - Terminal connections

| Package: X     | Package: X      | Package: X   | Package: X                                     | Package: X          |
|----------------|-----------------|--------------|------------------------------------------------|---------------------|
| Pin Number     | Terminal Symbol | PinType      | Pin Description                                | Interface Schematic |
| 1              | GND             | Power        | RF/DC ground.                                  |                     |
| 2              | GND             | Power        | RF/DC ground.                                  |                     |
| 3              | GND             | Power        | RF/DC ground.                                  |                     |
| 4              | RFIN            | RF Input     | RF Input. 1/                                   |                     |
| 5              | RFOUT           | RF Output    | RF Output and DC Bias for the output stage. 1/ |                     |
| 6              | GND             | Power        | RF/DC ground.                                  |                     |
| 7              | GND             | Power        | RF/DC ground.                                  |                     |
| 8              | GND             | Power        | RF/DC ground.                                  |                     |
| Package Bottom | GND             | Power        | RF/DC ground. 2/                               |                     |
| Lid            |                 | NIC          | 3/                                             |                     |

1/ This pin is DC coupled. An off-chip DC blocking capacitor is required.

2/ Package bottom must be connected to RF/DC ground.

3/ No internal connection on lid. Lid may be connected to RF/DC ground.

## 4.0 Specifications

| 4.1.                                                                                           | Absolute Maximum Ratings 1/   |
|------------------------------------------------------------------------------------------------|-------------------------------|
| Collector Bias Voltage (Vs) ...........................................................……. 7.0 | V 2/                          |
| RF Input Power (RFIN) (Vs = +5V) ...............................................…….            | +10 dBm                       |
| Junction Temperature to Maintain 1 Million MTTF ........................…….                    | +150 ° C                      |
| JunctionTemperature……………………………………………………….+175                                                  | ° C 3/                        |
| Continuous Pdiss (T A = +85 ° C) (Derate 9.61 mW/ ° C above +85 ° C) ...                       | 0.856W                        |
| Thermal resistance (Junction to Package bottom) ..........................….                   | 104 ° C/W                     |
| Storage temperature range ...........................................................…….       | -65 ° C to +150 ° C           |

- 4.2. Recommended Operating Conditions

Supply voltage (Vs)  .......................................................................  .… +4.5V to +5.5V

Ambient operating temperature range (TA)………………….…………. -40

°

°

C to +85

C

C

## 4.3. Nominal Operating Performance Characteristics 4/

| Input Return Loss (IRL) (DC - 1.0 GHz) ………………………….….….18              | dB          |
|-----------------------------------------------------------------------|-------------|
| Input Return Loss (IRL) (1.0 GHz - 4.0 GHz)……………………….….16             | dB          |
| Output Return Loss (ORL) (DC - 1.0 GHz) ……………………….........            | 18 dB       |
| Output Return Loss (ORL) (1.0 GHz - 4.0 GHz)……………………….13dB            |             |
| Reverse Isolation (RISO) (DC - 4.0 GHz) …………………..........…….          | 19 dB       |
| Noise Figure (NF) (DC - 4.0GHz)……………………………………….4.5dB                  |             |
| Output Third Order Intercept (OIP3) (DC - 1.0 GHz ) …………….…….33.5     | dBm 5/      |
| Output Third Order Intercept (OIP3) (1.0 GHz - 2.0 GHz ) …........……. | 30 dBm 5/   |
| Output Third Order Intercept (OIP3) (2.0 GHz - 4.0 GHz ) …........……. | 24.5 dBm 5/ |

## TABLE I - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter                                      | Symbol                                         | Conditions 1/ Unless otherwise                 | GroupA                                         | Limits                                         | Limits                                         | Units                                          |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|
| See notes at end of table                      |                                                | specified                                      | Subgroups                                      | Min                                            | Max                                            |                                                |
| Frequency = 100MHzContinuous Wave (CW) input   | Frequency = 100MHzContinuous Wave (CW) input   | Frequency = 100MHzContinuous Wave (CW) input   | Frequency = 100MHzContinuous Wave (CW) input   | Frequency = 100MHzContinuous Wave (CW) input   | Frequency = 100MHzContinuous Wave (CW) input   | Frequency = 100MHzContinuous Wave (CW) input   |
| Gain                                           | S21                                            | RFIN =-10dBm                                   | 4                                              | 13                                             |                                                | dB                                             |
|                                                | S21                                            | RFIN =-10dBm                                   | 5, 6                                           | 12.5                                           |                                                | dB                                             |
| Gain Variation Over Temperature                | S21/ ⁰ C                                       | RFIN =-10dBm                                   | 4, 5, 6                                        |                                                | 0.008                                          | dB/ ⁰ C                                        |
| Output Power for 1dB Compression               | OP1dB                                          |                                                | 7, 8A, 8B                                      | 13                                             |                                                | dBm                                            |
| Frequency = 2.05GHz Continuous Wave (CW) input | Frequency = 2.05GHz Continuous Wave (CW) input | Frequency = 2.05GHz Continuous Wave (CW) input | Frequency = 2.05GHz Continuous Wave (CW) input | Frequency = 2.05GHz Continuous Wave (CW) input | Frequency = 2.05GHz Continuous Wave (CW) input | Frequency = 2.05GHz Continuous Wave (CW) input |
| Gain                                           | S21                                            | RFIN =-10dBm                                   | 4                                              | 12.5                                           |                                                | dB                                             |
|                                                | S21                                            | RFIN =-10dBm                                   | 5, 6                                           | 12                                             |                                                | dB                                             |
| Gain Variation Over Temperature                | S21/ ⁰ C                                       | RFIN =-10dBm                                   | 4, 5, 6                                        |                                                | 0.012                                          | dB/ ⁰ C                                        |
| Output Power for 1 dB                          | OP1dB                                          |                                                | 7                                              | 11                                             |                                                | dBm                                            |
| Compression                                    | OP1dB                                          |                                                | 8A, 8B                                         | 10                                             |                                                | dBm                                            |
| Frequency = 4.0GHz Continuous Wave (CW) input  | Frequency = 4.0GHz Continuous Wave (CW) input  | Frequency = 4.0GHz Continuous Wave (CW) input  | Frequency = 4.0GHz Continuous Wave (CW) input  | Frequency = 4.0GHz Continuous Wave (CW) input  | Frequency = 4.0GHz Continuous Wave (CW) input  | Frequency = 4.0GHz Continuous Wave (CW) input  |
| Gain                                           | S21                                            | RFIN =-10dBm                                   | 4, 5, 6                                        | 11                                             |                                                | dB                                             |
| Gain Variation Over Temperature                | S21/ ⁰ C                                       | RFIN =-10dBm                                   | 4, 5, 6                                        |                                                | 0.012                                          | dB/ ⁰ C                                        |
| Output Power for 1dB                           | OP1dB                                          |                                                | 7                                              | 6.5                                            |                                                | dBm                                            |
| Compression                                    | OP1dB                                          |                                                | 8A, 8B                                         | 6                                              |                                                | dBm                                            |
| Power Supplies                                 | Power Supplies                                 | Power Supplies                                 | Power Supplies                                 | Power Supplies                                 | Power Supplies                                 | Power Supplies                                 |
| Quiescent Supply Current                       | Icq                                            | No Signal at RFIN                              | 1, 2, 3                                        |                                                | 65                                             | mA                                             |

T able I Note:

1/ TA nom = +25 ºC, TA max = +85 ºC, TA min = -40 ºC, Rbias = 22 Ohm  and Vs = +5V nom.

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III)   |
|-----------------------------------------|-----------------------------------------------------------|
| Interim Electrical Parameters           | 1, 4                                                      |
| Final Electrical Parameters             | 1, 4, 7 1/ 2/                                             |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6, 7, 8A, 8B                               |
| Group C end-point electrical parameters | 1, 4, 7 2/                                                |
| Group Dend-point electrical parameters  | 1,4, 7                                                    |

Table IIA Notes:

1/ PDA applies to Table I subgroup 1 only and Table IIB delta parameters.

2/ See Table IIB for delta parameters

## TABLE IIB - BURN-IN/LIFE TEST DELTA LIMITS 1/ 2/

| Parameter                | Test Conditions   | Symbol   | Delta   | Units   |
|--------------------------|-------------------|----------|---------|---------|
| Gain                     | Per Table I       | S21      | ± 1.0   | dB      |
| Quiescent Supply Current | Per Table I       | Icq      | ± 10    | %       |

Table IIB Notes:

1/ 240 hour burn in and 1000-hour life test (Group C) end point electrical parameters.

2/ Deltas are performed at TA = +25°C only.

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition B of MIL -STD - 883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 6.0 MIL-PRF-38535 QMLV Exceptions

The manufacturing flow described in the ADI TRADITIONAL SPACE PRODUCTS PROGRAM brochure is to be considered a part of this specification. The brochure describes standard QMLV exceptions for Aerospace products run at the ADI Chelmsford, MA facility.

## 6.1. Wafer Fabrication

Foundry information is available upon request.

- 6.2. Group D

Group D-5 Salt Atmosphere testing is not performed.

## ADH395S

## 7.0 Application Notes 1/ 2/

<!-- image -->

|           | Frequency (MHz)   | Frequency (MHz)   | Frequency (MHz)   | Frequency (MHz)   | Frequency (MHz)   |
|-----------|-------------------|-------------------|-------------------|-------------------|-------------------|
| Component | 50                | 100               | 500               | 1000              | 4000              |
| L1        | 270 nH            | 270 nH            | 100 nH            | 56 nH             | 8.2 nH            |
| C1, C2    | 0.01 µF           | 0.01 µF           | 500 pF            | 100 pF            | 100 pF            |

Notes:

1/ Select RBIAS to achieve Icq using equation below.

<!-- formula-not-decoded -->

2/ RBIAS ≥ 22 Ohm

Figure 3 - Recommended configuration and component values for the ADH395-701G8

## 8.0 Package Outline Dimensions

The G8 package and outline dimensions can be found at http://www.analog.com or upon request.

## ORDERING GUIDE

| Model        | Temperature Range   | Package Description             | Package Option   |
|--------------|---------------------|---------------------------------|------------------|
| ADH395-701G8 | -40 °C to 85 °C     | 8 Lead Glass/Metal Hermetic SMT | G8 (FR-8-2)      |

| Revision History   | Revision History                                           | Revision History   |
|--------------------|------------------------------------------------------------|--------------------|
| Rev                | Description of Change                                      | Date               |
| A                  | Initial Release                                            | 05/06/19           |
| B                  | Revise section 4.1                                         | 06/05/19           |
| C                  | Formatting improvements, Revise Figure 2 and Section 5.1.1 | 10/01/20           |
| D                  | Update Absolute Maximum Ratings in Section 4.1             | 05/19/26           |

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use,  nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their  respective owners. All Analog Devices products contained herein are subject to release and availability.