<!-- lastmod 2024-12-16 -->
<!-- image -->

Commercial Space

## 1.0 SCOPE

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Level V expect as modified herein.

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/HMC451

## 2.0 Part Number

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH451-701LH5

5.0 GHz to 18.0 GHz Medium Power Amplifier

## 3.0 Case Outline

The case outline(s) are as designated in MIL-STD-1835 and as follows:

Figure 1 - Functional Block Diagram

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style              |
|------------------|--------------------------|-------------|---------------|----------------------------|
| X                | E-12-5                   | 12 Lead     | Gold          | Ceramic Hermetic SMT (LH5) |

<!-- image -->

## 5.0 GHz to 18.0 GHz Medium Power Amplifier

ADH451S

Figure 2 - Terminal Connections

| Package:X    | Package:X       | Package:X   | Package:X                                  | Package:X           |
|--------------|-----------------|-------------|--------------------------------------------|---------------------|
| Pin Number   | Terminal Symbol | Pin Type    | Pin Description                            | Interface Schematic |
| 1            | GND             | Power       | RF/DC Ground.                              |                     |
| 2            | RFIN            | Input       | RF Input 1/                                |                     |
| 3            | GND             | Power       | RF/DC Fround.                              |                     |
| 4            | GND             | Power       | RF/DC Ground.                              |                     |
| 5            | GND             | Power       | RF/DC Ground.                              |                     |
| 6            | GND             | Power       | RF/DC Ground.                              |                     |
| 7            | GND             | Power       | RF/DC Ground.                              |                     |
| 8            | RFOUT           | Output      | RF Output 1/                               |                     |
| 9            | GND             | Power       | RF/DC Ground.                              |                     |
| 10           | VDD2            | Power       | Power Supply Voltage for the Amplifier. 2/ |                     |
| 11           | VDD1            | Power       | Power Supply Voltage for the Amplifier. 2/ |                     |
| 12           | GND             | Power       | RF/DC Ground.                              |                     |
| Package Base | GND             | Power       | RF/DC Ground 3/ 4/                         |                     |
| Package Lid  | GND             | Power       | RF/DC Ground 3/ 4/                         |                     |

1/ This pin is AC coupled and matched to 50 Ω .

2/ External bypass capacitors of 100 pF, 1000 pF, and 2.2 µ F are required.

3/ Package base must be connected to RF/DC ground.

4/ Package lid is internally connected to RF/DC ground.

## Commercial Space

## 4.0 Specifications

- 4.1. Absolute Maximum Ratings 1/

Drain Bias Voltage (Vdd1 = Vdd2)   ....................................................  5.5 V 2/

RF Input Power (RFIN) (Vdd1 = Vdd2 = +5V)   ..................................  10 dBm

Channel Temperature  .......................................................................  175 ° C

Continuous Pdiss (T = 85°C, Derates 17.36mW/°C Above 85°C)  ...  1.563 W

Thermal Resistance (Channel to Package Bottom)  .........................  57.6

°

C/W

Storage Temperature Range  ............................................................

-

65

°

C to +150

°

C

ESD Sensitivity (HBM)   ......................................................................  Class 1A, passed 250V

- 4.2. Recommended Operating Conditions
- 4.3. Nominal Operating Performance Characteristics 3/

Supply Voltage (Vdd1 = Vdd2)  .........................................................  4.5 V to 5.5 V

Ambient Operating Temperature Range (TA) .................................... - 40 ° C to +85 ° C

Input Return Loss (IRL) (5 GHz - 13 GHz)  ......................................  11 dB

Input Return Loss (IRL) (13 GHz - 18 GHz)  ....................................  5 dB

Output Return Loss (ORL) (5 GHz - 13 GHz)   ..................................  11 dB

Output Return Loss (ORL) (13 GHz - 18 GHz)   ................................  5 dB

Noise Figure (5 GHz - 13 GHz)  .......................................................  8 dB

Noise Figure (13 GHz - 18 GHz)  .....................................................  6.5 dB

Saturated Output Power (Psat) (5 GHz - 13 GHz)  ..........................  22 dBm 4/

Psat (13 GHz - 18 GHz)   ...................................................................  20 dBm 4/

Output Third-Order Intercept (OIP3) (5 GHz - 13 GHz)   ...................  30 dBm 5/

OIP3 (13 GHz - 18 GHz)   ..................................................................  28 dBm 5/

1/ Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

2/ All voltages are relative to their respective grounds.

3/ All typical specifications are at TA = 25°C and Vdd1 = Vdd2 = 5 V, unless otherwise noted.

4/ Psat specified as OP5dB.

5/ RFOUT = 0 dBm per tone, 1MHz spacing.

TABLE I - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter                                | Symbol                                   | Conditions 1/ otherwise                  | GroupA                                   | Limits                                   | Limits                                   | Unit                                     |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| See note at end of table                 |                                          | Unless specified                         | Subgroups                                | Min                                      | Max                                      | Unit                                     |
| Frequency = 5.0GHz Continuous WaveInput  | Frequency = 5.0GHz Continuous WaveInput  | Frequency = 5.0GHz Continuous WaveInput  | Frequency = 5.0GHz Continuous WaveInput  | Frequency = 5.0GHz Continuous WaveInput  | Frequency = 5.0GHz Continuous WaveInput  | Frequency = 5.0GHz Continuous WaveInput  |
| Gain                                     | S21                                      | RF In =-10dBm                            | 4                                        | 16                                       |                                          | dB                                       |
| Gain                                     | S21                                      | RF In =-10dBm                            | 5, 6                                     | 14                                       |                                          | dB                                       |
| Gain Variation Over Temperature          | S21/ ⁰ C                                 | RF In =-10dBm                            | 4, 5, 6                                  |                                          | 0.035                                    | dB/ ⁰ C                                  |
| Output Power for 1dB                     | OP1dB                                    |                                          | 7                                        | 16.5                                     |                                          | dBm                                      |
| Compression                              | OP1dB                                    |                                          | 8A, 8B                                   | 16                                       |                                          | dBm                                      |
| Frequency = 11.5GHz Continuous WaveInput | Frequency = 11.5GHz Continuous WaveInput | Frequency = 11.5GHz Continuous WaveInput | Frequency = 11.5GHz Continuous WaveInput | Frequency = 11.5GHz Continuous WaveInput | Frequency = 11.5GHz Continuous WaveInput | Frequency = 11.5GHz Continuous WaveInput |
| Gain                                     | S21                                      | RF In =-10dBm                            | 4                                        | 15                                       |                                          | dB                                       |
| Gain                                     | S21                                      | RF In =-10dBm                            | 5, 6                                     | 13                                       |                                          | dB                                       |
| Gain Variation Over Temperature          | S21/ ⁰ C                                 | RF In =-10dBm                            | 4, 5, 6                                  |                                          | 0.035                                    | dB/ ⁰ C                                  |
| Output Power for 1dB Compression         | OP1dB                                    |                                          | 7                                        | 16                                       |                                          | dBm                                      |
| Output Power for 1dB Compression         | OP1dB                                    |                                          | 8A, 8B                                   | 15                                       |                                          | dBm                                      |
| Frequency = 18.0GHz Continuous WaveInput | Frequency = 18.0GHz Continuous WaveInput | Frequency = 18.0GHz Continuous WaveInput | Frequency = 18.0GHz Continuous WaveInput | Frequency = 18.0GHz Continuous WaveInput | Frequency = 18.0GHz Continuous WaveInput | Frequency = 18.0GHz Continuous WaveInput |
| Gain                                     | S21                                      | RF In =-10dBm                            | 4                                        | 14                                       |                                          | dB                                       |
| Gain                                     | S21                                      | RF In =-10dBm                            | 5, 6                                     | 12                                       |                                          | dB                                       |
| Gain Variation Over Temperature          | S21/ ⁰ C                                 | RF In =-10dBm                            | 4, 5, 6                                  |                                          | 0.035                                    | dB/ ⁰ C                                  |
| Output Power for 1dB                     | OP1dB                                    |                                          | 7                                        | 16.5                                     |                                          | dBm                                      |
| Compression                              | OP1dB                                    |                                          | 8A, 8B                                   | 16                                       |                                          | dBm                                      |
| Power Supplies                           | Power Supplies                           | Power Supplies                           | Power Supplies                           | Power Supplies                           | Power Supplies                           | Power Supplies                           |
| Quiescent Supply Current                 | Idd                                      | No signal at RFIN                        | 1, 2, 3                                  |                                          | 150                                      | mA                                       |

Table I Note:

1/ TA nom = +25 ºC, TA max = +85 ºC, TA min = -40 ºC and Vdd1 = Vdd2 =+ 5V nom.

TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Test Requirements                       | Subgroups (in Accordance with MIL-PRF-38535, Table III)   |
|-----------------------------------------|-----------------------------------------------------------|
| Interim Electrical Parameters           | 1, 4                                                      |
| Final Electrical Parameters             | 1, 4, 7 1/ 2/                                             |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6, 7, 8A, 8B                               |
| Group C End-Point Electrical Parameters | 1, 4, 7 2/                                                |
| Group DEnd-Point Electrical Parameters  | 1, 4, 7                                                   |

## TABLE IIB - BURN-IN/LIFE TEST DELTA LIMITS 1/ 2/

| Parameter                | Test Conditions   | Symbol   | Delta   | Unit   |
|--------------------------|-------------------|----------|---------|--------|
| Gain                     | Per Table I       | S21      | ± 1.0   | dB     |
| Quiescent Supply Current | Per Table I       | Idd      | ± 10    | %      |

Table IIB Notes:

1/ 240 hour burn in and 1000 hour life test (Group C) end-point electrical parameters.

2/ Deltas are performed at room temperature TA = 25°C only.

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition B of MIL-STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 6.0 MIL-PRF-38535 QMLV Exceptions

- 6.1. Wafer Fabrication

Foundry information is available on request.

- 6.2. Group D

Group D-5 Salt Atmosphere is not performed.

## 7.0 Application Notes

Figure 3 - Recommended Configuration for the ADH451-701LH5

<!-- image -->

The circuit board used in the final application should use RF circuit design techniques. Signal lines should have 50 Ω impedance while the package ground leads and package bottom should be connected directly to the ground plane. A sufficient number of via holes should be used to connect the top and bottom ground planes. The circuit board should be mounted to an appropriate heat sink.

## 8.0 Package Outline Dimensions

The ADH451-701LH5 package and outline dimensions are found here.

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description                             | Package Option   |
|---------------|---------------------|-------------------------------------------------|------------------|
| ADH451-701LH5 | -40°C to +85°C      | 12-Terminal Ceramic Leadless Chip Carrier [LCC] | E-12-5           |

| Revision History   | Revision History                                                           | Revision History   |
|--------------------|----------------------------------------------------------------------------|--------------------|
| Rev                | Description of Change                                                      | Date               |
| A                  | Initiate                                                                   | 12/21/2018         |
| B                  | Update Section 3.0, Section 4.3, Section 6.0, Section 7.0, and Section 8.0 | 5/06/2019          |
| C                  | Corrected Figure Labels, Update Figure 2, and Section 5.1.1                | 10/01/2020         |
| D                  | Update Section 4.1                                                         | 3/17/2026          |

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.