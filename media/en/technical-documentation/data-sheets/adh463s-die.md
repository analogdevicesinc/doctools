<!-- lastmod 2023-09-20 -->
<!-- image -->

## 2 to 20 GHz Low Noise AGC Amplifier

ADH463S

## 1.0 SCOPE

This specification documents the detail requirements for space qualified die per MIL-PRF-38534 class K except as modified herein.

The manufacturing flow described in the SPACE DIE BROCHURE is to be considered a part of this specification.

This datasheet specifically details the space grade version of this product. A more detailed operational description and a complete datasheet for commercial product grades can be found at https://www.analog.com/hmc463.

## 2.0 Part Number:

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH463-000C

2 to 20 GHz GaAs PHEMT MMIC Low Noise AGC Amplifier

## 3.0 Die Information

## 3.1. Die Dimensions

| Die Size           | Die Thickness   | Bond Pad and Backside Metallization   |
|--------------------|-----------------|---------------------------------------|
| 120 mils x 51 mils | 4 mils          | Au                                    |

## 3.2. Die Picture

<!-- image -->

1. RFIN
2. Vgg2
3. Vdd
4.  RFOUT
5. Vgg1

Die bottom is GND

One Analog Way, Wilmington, MA 01887, U.S.A. Tel: 781.935.5565                                                                   www.analog.com Fax: 800.262.5643   © 2023 Analog Devices, Inc. All rights reserved.

## ADH463S

## 3.3. Pad Descriptions

| Pad Number   | Function   | Description                                                                                | Interface Schematic   |
|--------------|------------|--------------------------------------------------------------------------------------------|-----------------------|
| 1            | RFIN       | This pad is AC coupled and matched to 50 Ohms.                                             |                       |
| 2            | Vgg2       | Optional gate control ifAGC is required. Leave Vgg2 open circuited if AGC is not required. |                       |
| 3            | Vdd        | Power supply voltage for the amplifier. External bypass capacitors are required            |                       |
| 4            | RFOUT      | This pad is AC coupled and matched to 50 Ohms.                                             |                       |
| 5            | Vgg1       | Gate control for amplifier. Adjust to achieve Idd= 60 mA.                                  |                       |
| Die Bottom   | GND        | Die bottom must be connected to RF/DC ground.                                              |                       |

## 4.0 Specifications

| 4.1.   | Absolute Maximum Ratings                                                                                     | 1/                                                                                                           | 1/                                                                                                           | 1/                     |
|--------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------|
|        | Drain Bias Voltage (Vdd)                                                                                     | ..................................................................................                           | ..................................................................................                           | +9 Vdc                 |
|        | Gate Bias Voltage (Vgg1)                                                                                     | .................................................................................                            | .................................................................................                            | -2 Vdc to 0 Vdc        |
|        | Gate Bias Current (Igg1) ................................................................................... | Gate Bias Current (Igg1) ................................................................................... | Gate Bias Current (Igg1) ................................................................................... | 2.5 mA                 |
|        | Gate Bias Voltage (Vgg2)(AGC) .......................................................................        | Gate Bias Voltage (Vgg2)(AGC) .......................................................................        | Gate Bias Voltage (Vgg2)(AGC) .......................................................................        | (Vdd -9) Vdc to +2 Vdc |
|        | RF Input Power (RFIN) (Vdd = +5V) .................................................................          | RF Input Power (RFIN) (Vdd = +5V) .................................................................          | RF Input Power (RFIN) (Vdd = +5V) .................................................................          | +18 dBm                |
|        | Channel Temperature .......................................................................................  | Channel Temperature .......................................................................................  | Channel Temperature .......................................................................................  | 175 ° C                |
|        | Continuous Pdiss (T = 85 ° C) (derate 20.6 mW/ ° C above +85 ° C) ..................                         | Continuous Pdiss (T = 85 ° C) (derate 20.6 mW/ ° C above +85 ° C) ..................                         | Continuous Pdiss (T = 85 ° C) (derate 20.6 mW/ ° C above +85 ° C) ..................                         | 1.85W                  |
|        | Thermal Resistance (Channel to die bottom)                                                                   | Thermal Resistance (Channel to die bottom)                                                                   | ...................................................                                                          | 48.6 ° C/W             |
|        | Storage Temperature Range ............................................................................       | Storage Temperature Range ............................................................................       | Storage Temperature Range ............................................................................       | -65 ° C to +150 ° C    |
|        | Operating Temperature Range (Performance)                                                                    | Operating Temperature Range (Performance)                                                                    | .................................................                                                            | -40 ° C to +85 ° C     |
|        | Operating Temperature Range .........................................................................        | Operating Temperature Range .........................................................................        | Operating Temperature Range .........................................................................        | -55 ° C to +85 ° C     |
|        | ESD Sensitivity (HBM) ...................................................................................... | ESD Sensitivity (HBM) ...................................................................................... | ESD Sensitivity (HBM) ...................................................................................... | Class 0B, passed 150 V |

- 4.2 Nominal Operating Performance Characteristics   2/3/

| Saturated Output Power (Psat) (2-6 GHz).........................................................   | 21 dBm 4/   |
|----------------------------------------------------------------------------------------------------|-------------|
| Saturated Output Power (Psat) (6-18 GHz) .......................................................   | 20 dBm 4/   |
| Saturated Output Power (Psat) (18-20 GHz).....................................................     | 19 dBm 4/   |
| Output Power for 1dB Compression (OP1dB) (2-6 GHz)..................................               | 19 dBm      |
| Output Power for 1dB Compression (OP1dB) (6-18 GHz)................................                | 16 dBm      |
| Output Power for 1dB Compression (OP1dB) (18-20 GHz)..............................                 | 14 dBm      |
| Output Third Order Intercept (OIP3) (2-6 GHz) .................................................    | 29 dBm 5/   |
| Output Third Order Intercept (OIP3) (6-18 GHz)................................................     | 28 dBm 5/   |
| Output Third Order Intercept (OIP3) (18-20 GHz)..............................................      | 26 dBm 5/   |

## 5.0 Die Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a)  Pre-screen test post assembly required prior to die qualification, to remove all assembly related rejects.
- (b)  Mechanical Shock or Constant Acceleration not performed.
- (c)  Interim and post burn-in electrical tests will include tests screened at +25 °C only.

## 6.0 Dice Electrical Characteristics

TABLE I - DIE ELECTRICAL CHARACTERISTICS

| Parameter          | Symbol   | Conditions 1/2/3/4/5       | Conditions 1/2/3/4/5   | Limits   | Limits   | Unit   |
|--------------------|----------|----------------------------|------------------------|----------|----------|--------|
|                    |          | Unless otherwise specified |                        | Min      | Max      |        |
| Gain               | S21      | 2 GHz, 18 GHz & 20 GHz     | RFIN = -25dBm          | 13.5     |          | dB     |
| Gain               | S21      | 6 GHz                      | RFIN = -25dBm          | 12.5     |          | dB     |
| Input Return Loss  | S11      | 2 GHz                      | RFIN = -25dBm          | 10       |          | dB     |
| Input Return Loss  | S11      | 6 GHz                      | RFIN = -25dBm          | 12       |          | dB     |
| Input Return Loss  | S11      | 18 GHz & 20 GHz            | RFIN = -25dBm          | 11       |          | dB     |
| Output Return Loss | S22      | 2 GHz                      | RFIN = -25dBm          | 8        |          | dB     |
| Output Return Loss | S22      | 6 GHz, 18 GHz & 20 GHz     | RFIN = -25dBm          | 7        |          | dB     |
| Noise Figure       | NF       | 2 GHz, 18 GHz & 20 GHz     |                        |          | 4.0      | dB     |
| Noise Figure       | NF       | 6 GHz                      |                        |          | 3.7      | dB     |
| Supply Current     | Idd      | No RFIN                    |                        |          | 80       | mA     |

## TABLE I Notes:

1/ Limits apply at TA = +25 ºC only.

2/ Tested with Vdd = +5 Vdc, Vgg1 set between -1.5 Vdc and -0.5 Vdc to target an Idd of 60 mA.

3/ S-par data measured at 2 GHz, 6 GHz, 18 GHz and 20 GHz

4/ Noise Figure measured at 2 GHz, 6 GHz, 18 GHz and 20 GHz

5/ Performance limits based upon direct to die measurements. Limits differ than that of actual performance in a 50 ohm system with wire bonds.

## ADH463S

## TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES

| Parameter                        | Symbol   | Conditions 1/2/3/4/ Unless otherwise specified   | Conditions 1/2/3/4/ Unless otherwise specified   | Sub-Group 7/   | Limits   | Limits   | Unit   |
|----------------------------------|----------|--------------------------------------------------|--------------------------------------------------|----------------|----------|----------|--------|
|                                  |          |                                                  |                                                  |                | Min      | Max      |        |
| Gain                             | S21      | 2 GHz, 6 GHz, 18 GHz, 20 GHz                     | Gain Input                                       | 4              | 13       |          | dB     |
|                                  | S21      | 2 GHz, 6 GHz, 18 GHz, 20 GHz                     | Gain Input                                       | 5,6            | 12       |          | dB     |
| Variation Over Temperature       | S21/°C   | 2 GHz, 6 GHz, 18 GHz, 20 GHz                     | Gain Input                                       | 4,5,6          |          | 0.025    | dB/°C  |
| Return Loss                      | S11      | 2 GHz                                            | Gain Input                                       | 4,5,6          | 10       |          | dB     |
| Return Loss                      | S11      | 6 GHz & 18 GHz                                   | Gain Input                                       | 4,5,6          | 12       |          | dB     |
| Return Loss                      | S11      | 20 GHz                                           | Gain Input                                       | 4              | 12       |          | dB     |
|                                  |          |                                                  | Gain Input                                       | 5,6            | 10       |          | dB     |
| Output Return Loss               | S22      | 2 GHz, 6 GHz & 18 GHz                            | Gain Input                                       | 4              | 8        |          | dB     |
| Output Return Loss               | S22      |                                                  | Gain Input                                       | 5,6            | 7        |          | dB     |
| Output Return Loss               | S22      | 20 GHz                                           | Gain Input                                       | 4              | 7        |          | dB     |
| Output Return Loss               | S22      |                                                  | Gain Input                                       | 5,6            | 6        |          | dB     |
| Noise Figure                     | NF       | 2 GHz                                            |                                                  | 4              |          | 4        | dB     |
| Noise Figure                     | NF       |                                                  |                                                  | 5,6            |          | 5        | dB     |
| Noise Figure                     | NF       | 6 GHz & 18 GHz                                   |                                                  | 4              |          | 3.7      | dB     |
| Noise Figure                     | NF       |                                                  |                                                  | 5,6            |          | 4.7      | dB     |
| Noise Figure                     | NF       | 20 GHz                                           |                                                  | 4              |          | 4        | dB     |
| Output Power for 1dB Compression | OP1dB    | 2 GHz                                            |                                                  | 4,5,6          | 16       |          | dBm    |
| Output Power for 1dB Compression | OP1dB    | 6 GHz                                            |                                                  | 4,5,6          | 13       |          | dBm    |
| Output Power for 1dB Compression | OP1dB    | 18 GHz & 20 GHz                                  |                                                  | 4,5,6          | 11       |          | dBm    |
| Output Power 5/                  | PSAT     | 2 GHz                                            | Saturated                                        | 4              | 17.5     |          | dBm    |
| Output Power 5/                  | PSAT     |                                                  | Saturated                                        | 5,6            | 17       |          | dBm    |
| Output Power 5/                  | PSAT     | 6 GHz                                            | Saturated                                        | 4              | 18       |          | dBm    |
| Output Power 5/                  | PSAT     |                                                  | Saturated                                        | 5,6            | 17.5     |          | dBm    |
| Output Power 5/                  | PSAT     | 18 GHz & 20 GHz                                  | Saturated                                        | 4,5,6          | 17       |          | dBm    |
| Output Third Order Intercept 6/  | OIP3     | 2 GHz                                            |                                                  | 4              | 27       |          | dBm    |
| Output Third Order Intercept 6/  | OIP3     |                                                  |                                                  | 5,6            | 25       |          | dBm    |
| Output Third Order Intercept 6/  | OIP3     | 6 GHz                                            |                                                  | 4              | 24.5     |          | dBm    |
| Output Third Order Intercept 6/  | OIP3     |                                                  |                                                  | 5,6            | 20       |          | dBm    |
| Output Third Order Intercept 6/  | OIP3     | 18 GHz & 20 GHz                                  |                                                  | 4              | 23       |          | dBm    |
| Supply Current                   | Idd      | No RFIN                                          |                                                  | 1,2,3          |          | 80       | mA     |

## TABLE II Notes:

- 1/ TA Nom = +25 ºC, TA Max = +85 ºC, TA Min = -40 ºC.
- 2/ Tested with Vdd = +5 Vdc, Vgg1 set between -1.5 Vdc and -0.5 Vdc to target an Idd of 60 mA.
- 3/ S-par data measured at 2 GHz, 6 GHz, 18 GHz and 20 GHz
- 4/ Noise Figure measured at 2 GHz, 6 GHz, 18 GHz and 20 GHz
- 5/ Psat specified as OP5dB.
- 6/ Two-Tone Output Power = 0 dBm per tone with 1 MHz spacing.
- 7/ See ML-PRF-38534 Table C-Xa for Sub-Group parameter definitions.

TABLE III - BURN-IN/LIFE TEST DELTA LIMITS 1/ 2/ 3/ 4/ 5/

| Parameter      | Symbol   | Delta   | Units   |
|----------------|----------|---------|---------|
| Gain           | S21      | ± 1     | dB      |
| Supply Current | Idd      | ± 10    | %       |

## TABLE III Notes:

- 1/ 240 hour burn-in and 1000 hour life test end point electrical parameters.
- 2/ Deltas are performed at TA = +25 °C only.
- 3/ Product is tested in accordance with conditions in Table II.
- 4/ Table II limits shall not be exceeded.
- 5/ Gain deltas are measured at 2 GHz, 6 GHz, 18 GHz and 20 GHz.

## 7.0 Die Outline

<!-- image -->

## NOTES:

1. ALL DIMENSIONS IN INCHES [MILLIMETERS]
2. 2.NO CONNECTION REOUIRED FOR UNLABELED BOND PADS
3. 3.DIE THICKNESS IS 0.004 (0.100)
4. TYPICAL BOND PAD IS 0.004 (0.100) SQUARE
5. 5.BACKSIDE METALLIZATION:GOLD
6. 6.BACKSIDEMETALISGROUND
7. 7.BOND PAD METALIZATION:GOLD
8. 8.OVERALLDIESIZE±002"

## ADH463S

## ADH463S

## 8.0 Application Notes

Figure 1 shows the assembly diagram. The die should be attached directly to the ground plane using an eutectic mixture or with conductive epoxy. The 50 Ω microstrip transmission lines on 0.127 mm (5 mil) thick alumina thin film substrates are recommended for bringing RF to and from the chip (Figure 2). If 0.254 mm (10 mil) thick alumina thin film substrates must be used, the die should be raised 0.15 mm (6 mil) so that the surface of the die is coplanar with the surface of the substrate. This can be accomplished by attaching the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick molybdenum heat spreader (moly-tab) which is then attached to the ground plane (Figure 3). Microstrip substrates should be brought as close to the die as possible in order to minimize wire bond length. Typical die-to-substrate spacing is 0.076 mm to 0.152 mm (3 to 6 mils).

<!-- image -->

Figure 1. Assembly Diagram

Figure 2. Die without Moly Tab

<!-- image -->

Figure 3. Die with Moly Tab

<!-- image -->

## Die Packaging Information

| Standard        | Alternate   |
|-----------------|-------------|
| GP-2 (Gel Pack) | 1/          |

Note:

1/ For alternate packaging information, contact Analog Devices Inc.

| Revision History   | Revision History           | Revision History   |
|--------------------|----------------------------|--------------------|
| Rev                | Description of Change      | Date               |
| A                  | Initial Production Release | 4/18/23            |

<!-- image -->