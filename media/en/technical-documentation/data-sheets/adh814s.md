<!-- lastmod 2023-01-10 -->
<!-- image -->

## 13 to 24.6 GHz Output x2 Active Frequency Multiplier

ADH814S

## 1.0 SCOPE

This specification documents the detail requirements for space qualified die per MIL-PRF-38534 class K except as modified herein.

The manufacturing flow described in the SPACE DIE BROCHURE is to be considered a part of this specification.

This datasheet specifically details the space grade version of this product. A more detailed operational description and a complete datasheet for commercial product grades can be found at https://www.analog.com/hmc814-die

## 2.0 Part Number:

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH814-000C

13 to 24.6 GHz Output GaAs PHEMT MMIC x2 Active Frequency Multiplier

## 3.0 Die Information

## 3.1. Die Dimensions

| Die Size              | Die Thickness   | Bond Pad and Backside Metallization   |
|-----------------------|-----------------|---------------------------------------|
| 45.6 mils x 44.5 mils | 4 mils          | Au                                    |

## 3.2. Die Picture

<!-- image -->

## ASD0016611

## Rev. A

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is  granted  by  implication  or  otherwise  under  any  patent  or  patent  rights  of Analog  Devices.  Trademarks  and  registered  trademarks  are  the  property  of their respective companies.

1. RFIN
2. Vdd1
3. Vdd2
4.  RFOUT

Die bottom is GND

One Analog Way, Wilmington, MA 01887, U.S.A. Tel: 781.935.5565 www.analog.com

Fax: 800.262.5643 © 2023 Analog Devices, Inc. All rights reserved.

## ADH814S

## 3.3. Pad Descriptions

| Pad Number   | Function   | Description                                                                                                          | Interface Schematic   |
|--------------|------------|----------------------------------------------------------------------------------------------------------------------|-----------------------|
| 1            | RFIN       | Pad is AC coupled and matched to 50 Ohms.                                                                            |                       |
| 2, 3         | Vdd1, Vdd2 | Supply Voltage (+5 V ± 0.5 V) External bypass capacitors of 100 pF, 1,000 pF and 2.2 µF are recommended on each pad. |                       |
| 4            | RFOUT      | Pad is AC coupled and matched to 50 Ohms.                                                                            |                       |
| Die Bottom   | GND        | Die bottom must be connected to RF/DC ground.                                                                        |                       |

## 4.0 Specifications

| 4.1.   | Absolute Maximum Ratings 1/ RF Input Power (Vdd1 = Vdd2 = +5 V) Supply Voltage (Vdd1, Vdd2) Channel Temperature Continuous Pdiss ( T = +85 ° C) (Derate 8.7 mW/ ° C Thermal Resistance (Channel to die bottom) Storage Temperature Range Operating Temperature Range (T A ) (Performance) Operating Temperature Range (T A ) ESD Sensitivity (HBM)   | ............................................................. +10 dBm ............................................................................ +5.5 Vdc ....................................................................................... 175 ° C above +85 ° C) ................. 782mW ................................................... 115 ° C/W ............................................................................ -65 ° C to +150 ° C .......................................... -40 ° C to +85 ° C .................................................................. -55 ° C to +85 ° C ...................................................................................... Class 0   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 4.2    | Recommended Operating Conditions Supply Voltage (Vdd1 = Vdd2) .........................................................................                                                                                                                                                                                                              | +4.5 Vdc to +5.5 Vdc +0 dBm to +6 dBm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|        | Nominal Operating Performance Characteristics 2/ Fo Isolation (with respect to output level) 3Fo Isolation (with respect to output level) 4Fo                                                                                                                                                                                                        | 24 dBc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.3    | ......................................................... .......................................................                                                                                                                                                                                                                                    | 22 dBc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|        | Isolation (with respect to output level) ....................................................... Input Return Loss...............................................................................................                                                                                                                                    | 23 dBc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|        | 7 dB                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|        | Output Return Loss............................................................................................ 7 SSB Phase Noise (100 kHz Offset at Output Frequency = 19 GHz) ................ -136                                                                                                                                                 | dB dBc/Hz                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|        | Drive Level Range ............................................................................................                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## 4.4 Nominal Isolation Performance Characteristics 3/

Fo Isolation (with respect to output level)  ......................................................... 24 dBc

3Fo Isolation (with respect to output level)   ........................................................ 19 dBc

4Fo Isolation (with respect to output level)  ....................................................... 13 dBc

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ All specifications apply with TA = 25 °C, Vdd1 = Vdd2 = +5 Vdc, +4 dBm Drive Level and RFOUT Frequency Range = 13 GHz to 24.6 GHz only,  unless otherwise noted.

3/ All specifications apply with TA = 25 °C, Vdd1 = Vdd2 = +3.5 Vdc, +4 dBm Drive Level and RFOUT Frequency Range = 13 GHz to 24.6 GHz only.

## 5.0 Die Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a)  Pre-screen test post assembly required prior to die qualification, to remove all assembly related rejects.
- (b)  Mechanical Shock or Constant Acceleration not performed.
- (c)  Interim and post burn-in electrical tests will include tests screened at +25 °C only.

## 6.0 Dice Electrical Characteristics

| TABLE I - DIE ELECTRICAL CHARACTERISTICS   | TABLE I - DIE ELECTRICAL CHARACTERISTICS   | TABLE I - DIE ELECTRICAL CHARACTERISTICS   | TABLE I - DIE ELECTRICAL CHARACTERISTICS   | TABLE I - DIE ELECTRICAL CHARACTERISTICS   | TABLE I - DIE ELECTRICAL CHARACTERISTICS   |
|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                  | Symbol                                     | Conditions 1/2/                            | Limits                                     | Limits                                     | Unit                                       |
|                                            |                                            | Unless otherwise specified                 | Min                                        | Max                                        |                                            |
| Output Power                               | POUT                                       |                                            | 14                                         |                                            | dBm                                        |
| Supply Current (Idd1 + Idd2)               | Idd                                        | No Drive level applied at RFIN             |                                            | 100                                        | mA                                         |

## TABLE I Notes:

1/ Limits apply at TA = +25 ° C only with Vdd1 = Vdd2 = +5 Vdc and +4 dBm Drive level.

2/ Parameters measured at FOUT = 14 GHz and 24.6 GHz only.

| TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES   | TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES   | TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES   | TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES   | TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES   | TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES   | TABLE II - ELECTRICAL CHARACTERISTICS FOR QUALIFICATION SAMPLES   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|
| Parameter                                                         | Symbol                                                            | Conditions 1/2/3/ Unless otherwise specified                      | Sub- Group                                                        | Limits                                                            | Limits                                                            | Unit                                                              |
|                                                                   |                                                                   |                                                                   | 4/                                                                | Min                                                               | Max                                                               |                                                                   |
| Output Power                                                      | POUT                                                              |                                                                   | 4                                                                 | 14                                                                |                                                                   | dBm                                                               |
|                                                                   |                                                                   |                                                                   | 5, 6                                                              | 10                                                                |                                                                   | dBm                                                               |
| Supply Current (Idd1 + Idd2)                                      | Idd                                                               | No Drive level applied at RFIN                                    | 1, 2, 3                                                           |                                                                   | 100                                                               | mA                                                                |

## TABLE II Notes:

1/ TA Nom = +25 ºC, TA Max = +85 ºC, TA Min = -40 ºC.

2/ Vdd1 = Vdd2 = +5 Vdc and +5.5 dBm Drive level. Additional drive level needed due to fixure loss.

3/ Parameters measured at FOUT = 14 GHz and 24.6 GHz only.

4/ See ML-PRF-38534 Table C-Xa for Sub-Group parameter definitions.

## ADH814S

| TABLE III - BURN-IN/LIFE TEST DELTA LIMITS 1/2/3/4/   | TABLE III - BURN-IN/LIFE TEST DELTA LIMITS 1/2/3/4/   | TABLE III - BURN-IN/LIFE TEST DELTA LIMITS 1/2/3/4/   | TABLE III - BURN-IN/LIFE TEST DELTA LIMITS 1/2/3/4/   |
|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| Parameter                                             | Symbol                                                | Delta                                                 | Unit                                                  |
| Output Power                                          | POUT                                                  | ± 1                                                   | dB                                                    |
| Supply Current (Idd1 + Idd2)                          | Idd                                                   | ± 10                                                  | %                                                     |

## TABLE III Notes:

1/ 240 hour burn-in and 1000 hour life test end point electrical parameters.

- 2/ Deltas are performed at TA = +25 °C only.

3/ Product is tested in accordance with conditions in Table II.

4/ Table II limits shall not be exceeded.

## 7.0 Die Outline

<!-- image -->

|   PAD | DESCRIPTION   | PAD SIZE                  |
|-------|---------------|---------------------------|
|     1 | RFIN          | .0054[.136] × .0039[.100] |
|     2 | Vdd1          | .0039[.100] × .0039[.100] |
|     3 | Vdd2          | .0039[.100] × .0039[.100] |
|     4 | RFOUT         | .0074[.188] × .0039[.100] |

## NOTES:

1. ALL DIMENSIONS ARE IN INCHES [MM]
2. DIE THICKNESS IS .OO4"
3. TYPICAL BOND PAD IS .OO4" SQUARE
4. BOND PAD METALIZATION:GOLD
5. BACKSIDE METALIZATION: GOLD
6. BACKSIDE METALIS GROUND
7. 7.
8. OVERALL DIE SIZE ±.002"

## ADH814S

## 8.0 Application Notes

Figure 1 shows the assembly diagram. The die should be attached directly to the ground plane using an eutectic mixture or with conductive epoxy. The 50 Ω microstrip transmission lines on 0.127 mm (5 mils) thick alumina thin film substrates are recommended for bringing RF to and from the chip (Figure 2). If 0.254 mm (10 mils) thick alumina thin film substrates must be used, the die should be raised 0.15 mm (6 mils) so that the surface of the die is coplanar with the surface of the substrate. This can be accomplished by attaching the 0.102 mm (4 mils) thick die to a 0.150 mm (6 mils) thick molybdenum heat spreader (moly-tab) which is then attached to the ground plane (Figure 3). Microstrip substrates should be brought as close to the die as possible in order to minimize wire bond length. Typical die-to-substrate spacing is 0.076 mm (3 mils). Gold ribbon of 0.075 mm (3 mils) width and minimal length  &lt; 0.31 mm ( &lt; 12 mils) is recommended to minimize inductance on the RF ports.

An RF bypass capacitor should be used on each of the Vdd1 and Vdd2 inputs. A 100 pF single layer capacitor (mounted eutectically or by conductive epoxy) placed no further than 0.762 mm (30 mils) from the chip is recommended.

<!-- image -->

Figure 1. Assembly Diagram

Figure 2. Die without Moly Tab

<!-- image -->

Figure 3. Die with Moly Tab

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

All typical performance characteristics apply with Vdd1 = Vdd2 = +5 Vdc, +4 dBm Drive Level and TA = +25 ° C unless otherwise noted.

<!-- image -->

<!-- image -->

Figure 4. Output Power vs. Temperature                               Figure 7. Output Power vs. Drive Level

<!-- image -->

Figure 5. Output Power vs. Supply Voltage                          Figure 8. Isolation (with respect to output level) vs. Output Frequency

<!-- image -->

<!-- image -->

Figure 6. Output Power vs. Drive Level                         Figure 9. Isolation (with respect to output level) vs. T emperature

<!-- image -->

## ADH814S

## Die Packaging Information

| Standard        | Alternate   |
|-----------------|-------------|
| GP-2 (Gel Pack) | 1/          |

Note:

1/ For alternate packaging information, contact Analog Devices Inc.

| Revision History   | Revision History           | Revision History   |
|--------------------|----------------------------|--------------------|
| Rev                | Description of Change      | Date               |
| A                  | Initial Production Release | 4-Jan-2023         |

<!-- image -->