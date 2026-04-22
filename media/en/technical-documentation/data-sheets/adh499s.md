<!-- lastmod 2023-10-11 -->
<!-- image -->

## 21 - 32 GHz Medium Power Amplifier

ADH499S

## 1.0 SCOPE

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Class V except as modified herein.

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/HMC499

## 2.0 Part Number

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH499-701LSH6

21 - 32 GHz GaAs PHEMT MMIC Medium Power Amplifier

## 3.0 Case Outline

The case outline(s) are as designated in MIL-STD-1835 and as follows:

Figure 1 - Functional Block Diagram

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style               |
|------------------|--------------------------|-------------|---------------|-----------------------------|
| X                | EH-16-2                  | 16 Lead     | Gold          | Ceramic Hermetic SMT (LSH6) |

<!-- image -->

## Package: X

One Analog  Way, Wilmington,  MA 01887 , U.S.A.

Tel: 781.329.4700

www.analog.com © 2023 Analog Devices, Inc. All rights reserved.

Fax: 781.326.8703

## ADH499S

Figure 2 - Terminal Connections

| Pin Number     | Terminal Symbol   | Pin Type   | Pin Description                                                                                                                           | Interface Schematic   |
|----------------|-------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| 1              | Vdd3              | Power      | Power Supply Voltages for the amplifier. External bypass capacitors of 100 pF, 1000 pF, and 2.2 µ F are required.                         |                       |
| 2              | Vdd2              | Power      | Power Supply Voltages for the amplifier. External bypass capacitors of 100 pF, 1000 pF, and 2.2 µ F are required.                         |                       |
| 3              | Vdd1              | Power      | Power Supply Voltages for the amplifier. External bypass capacitors of 100 pF, 1000 pF, and 2.2 µ F are required.                         |                       |
| 4              | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 5              | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 6              | RFIN              | RF I/O     | This pin is AC coupled and matched to 50 Ohms.                                                                                            |                       |
| 7              | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 8              | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 9              | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 10             | Vgg               | Power      | Gate control for the amplifier. Adjust to achieve Idd of 200 mA.. External bypass capacitors of 100 pF, 1000 pF and 2.2 µ F are required. |                       |
| 11             | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 12             | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 13             | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 14             | RF OUT            | RF I/O     | This pin is AC coupled and matched to 50 Ohms.                                                                                            |                       |
| 15             | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| 16             | GND               | Power      | Signal/Supply ground                                                                                                                      |                       |
| Package Bottom | GND               | Power      | Signal/Supply ground 1/                                                                                                                   |                       |
| Package Lid    | GND               | Power      | Signal/Supply ground 2/                                                                                                                   |                       |

1/ Package bottom ground paddle must be connected to Signal/Supply ground

2/ Package lid is internally connected to Signal/Supply ground

## 4.0 Specifications

| 4.1. Absolute Maximum Ratings 1/ Drain Bias Voltage (Vdd1, Vdd2, Vdd3) ....................................... Gate Bias Voltage (Vgg) ...............................................................                                                                                                                        | +5.5 Vdc -4 V to 0 Vdc +20 dBm 59.3  C/W …. 1.0W +175  C   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Recommended Operating Conditions Operating Temperature .................................................................                                                                                                                                                                                                      | -40  C to +85  C +5 Vdc                                    |
| RF Input Power (RFIN ) (Vdd1, Vdd2, Vdd3 = +5 Vdc) ...............                                                                                                                                                                                                                                                            |                                                              |
| Thermal resistance (Channel to Package bottom) .......................                                                                                                                                                                                                                                                        |                                                              |
| Continuous Pdiss (T A = +85 ⁰ C) (Derate 25 mW/ ⁰ C above +85 ⁰ C)                                                                                                                                                                                                                                                            |                                                              |
| Maximum Junction Temperature ..................................................                                                                                                                                                                                                                                               |                                                              |
| Storage Temperature range ..........................................................                                                                                                                                                                                                                                          | -65  C to +150  C                                          |
| ESD Sensitivity (HBM) ..................................................................                                                                                                                                                                                                                                      |                                                              |
|                                                                                                                                                                                                                                                                                                                               | Class 0                                                      |
| 4.2. Supply Voltage (Vdd1, Vdd2, Vdd3) ............................................. 4.3. Nominal Operating Performance Characteristics 2/                                                                                                                                                                                    | 10 dB                                                        |
| Input Return Loss (S11) (21-24 GHz) ........................................... Input Return Loss (S11) (24-28 GHz) ........................................... Input Return Loss (S11) (28-32 GHz) ........................................... Output Return Loss (S22) (21-24 GHz) ........................................ | 8 dB                                                         |
|                                                                                                                                                                                                                                                                                                                               | 8 dB                                                         |
|                                                                                                                                                                                                                                                                                                                               | 11 dB                                                        |
| Output Return Loss (S22) (24-28 GHz) ........................................                                                                                                                                                                                                                                                 | 12 dB                                                        |
| Output Return Loss (S22) (28-32 GHz) ........................................                                                                                                                                                                                                                                                 | 8 dB                                                         |
| Saturated Output Power (Psat) (21-24 GHz) ...............................                                                                                                                                                                                                                                                     | 23.5 dBm                                                     |
| Saturated Output Power (Psat) (24-28 GHz) ...............................                                                                                                                                                                                                                                                     | 23.5 dBm                                                     |
| Saturated Output Power (Psat) (28-32 GHz) ...............................                                                                                                                                                                                                                                                     | 24 dBm                                                       |

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ All typical specifications are at TA = 25°C, Vdd1, Vdd2, Vdd3= 5V, Idd = 200mA unless otherwise noted.

3/ Psat specified as OP5dB.

## TABLE IA - ELECTRICAL PERFORMANCE CHARACTERISTICS

| Parameter See notes at end of table   | Symbol   | Conditions 1/ Unless otherwise specified   | Sub- Group   | Limit Min   | Limit Max   | Units   |
|---------------------------------------|----------|--------------------------------------------|--------------|-------------|-------------|---------|
| Supply Current                        | IDD      | Vgg = -0.8 V typical                       | 1, 2, 3      |             | 225         | mA      |
|                                       |          |                                            | 4            | 14          |             | dB      |
|                                       |          | 21 GHz                                     | 5            | 12.2        |             | dB      |
|                                       |          |                                            | 6            | 14          |             | dB      |
|                                       |          |                                            | 4            | 13          |             | dB      |
| Gain                                  | S21      | 28 GHz                                     | 5            | 11.2        |             | dB      |
| Gain                                  |          |                                            | 6            | 13          |             | dB      |
| Gain                                  |          |                                            | 4            | 9           |             | dB      |
|                                       |          | 32 GHz                                     | 5            | 7.2         |             | dB      |
|                                       |          |                                            | 6            | 9           |             | dB      |
| Gain Variation over Temperature 2/    | A V /°C  | 21 GHz, 28 GHz, 32 GHz                     | 4, 5, 6      |             | 0.04        | dB/°C   |
|                                       |          |                                            | 4            |             | 8           | dB      |
|                                       |          | 21 GHz                                     | 5            |             | 9           |         |
|                                       |          |                                            | 6            |             | 7.5         |         |
|                                       |          |                                            | 4            |             | 4.5         |         |
| Noise Figure                          | NF       | 28 GHz                                     | 5            |             | 5.5         | dB      |
| Noise Figure                          |          |                                            | 6            |             | 4           | dB      |
| Noise Figure                          |          |                                            | 4            |             | 6           |         |
| Noise Figure                          |          | 32 GHz                                     | 5            |             | 7           | dB      |
| Noise Figure                          |          |                                            | 6            |             | 5           | dB      |
|                                       |          | 21GHz                                      | 4, 5, 6      | 24          |             | dBm     |
| Output Power for 1dB Compression      | OP1dB    | 28 GHz                                     | 4, 5, 6      | 22.5        |             | dBm     |
|                                       |          | 32 GHz                                     | 4, 5, 6      | 21.5        |             | dBm     |
| Third Order Intercept 2/ 3/           | OIP3     | 21 GHz                                     | 4, 5, 6      | 28          |             | dBm     |
| Output                                |          | 28 GHz                                     | 4, 5, 6      | 31          |             | dBm     |
| Output                                |          | 32 GHz                                     | 4, 5, 6      | 30          |             | dBm     |

## TABLE IA NOTES:

1/ TA nom = +25 ºC, TA max = +85 ºC, TA min = -40 ºC, Vdd1 = Vdd2 = Vdd3 = 5V, Idd = 200mA (Adjust Vgg between -2V to 0V to achieve Idd = 200mA).

2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ RFOUT = 0 dBm per tone. 1 MHz spacing.

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III)   |
|-----------------------------------------|-----------------------------------------------------------|
| Interim Electrical Parameters           | 1, 4                                                      |
| Final Electrical Parameters             | 1, 4 1/ 2/                                                |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6                                          |
| Group C end-point electrical parameters | 1, 4 2/                                                   |
| Group Dend-point electrical parameters  | 1, 4                                                      |

Table IIA Notes:

1/ PDA applies to Table I subgroup 1 and Table IIB delta parameters.

2/ See Table IIB for delta parameters

## TABLE IIB - BURN-IN/ LIFE TEST DELTA LIMITS  1/ 2/ 3/

| Parameter      | Symbol   | Delta   | Units   |
|----------------|----------|---------|---------|
| Gain at 21 GHz | S21      | ±1.0    | dB      |
| Gain at 24 GHz | S21      | ±1.0    | dB      |
| Gain at 28 GHz | S21      | ±1.0    | dB      |
| Supply Current | IDD      | ±10     | %       |

## 5.0 Burn-In Life Test,

## 5.1.  Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition B  of MIL -STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 6.0 MIL-PRF-38535 QMLV Exceptions

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM is to be considered a part of this specification. The brochure describes standard QMLV exceptions for Aerospace products run at the ADI Chelmsford, MA facility

## 6.1. Wafer Fabrication

Foundry information is available upon request.

- 6.2. Group D Group D-5 Salt Atmosphere testing is not performed.

## 7.0 Application Notes

Figure 3 - Application Circuit

| Component   | Value   |
|-------------|---------|
| C1          | 100pf   |
| C2          | 1000 pf |
| C3          | 2.2µf   |

<!-- image -->

## 8.0 Package Outline Dimensions

The LSH6 package and outline dimensions can be found at http://www.analog.com or upon request.

## ORDERING GUIDE

| Model          | Temperature Range   | Package Description          | Package Option   |
|----------------|---------------------|------------------------------|------------------|
| ADH499-701LSH6 | -40° C to +85 °C    | 16 Lead Ceramic Leadless SMT | LSH6 (EH-16-2)   |

| Revision History   | Revision History      | Revision History   |
|--------------------|-----------------------|--------------------|
| Rev                | Description of Change | Date               |
| A                  | Initial Release       | 3/20/2023          |

<!-- image -->