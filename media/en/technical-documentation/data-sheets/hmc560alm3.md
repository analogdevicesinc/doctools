<!-- lastmod 2020-05-05 -->
<!-- image -->

Data Sheet

## FEATURES

## Downconverter

Conversion loss 10 dB typical for 22 GHz to 29 GHz 11 dB typical for 29 GHz to 38 GHz LO to RF isolation 34 dB typical for 22 GHz to 29 GHz 38 dB typical for 29 GHz to 38 GHz LO to IF isolation 29 dB typical for 22 GHz to 29 GHz 31 dB typical for 29 GHz to 38 GHz RF to IF isolation 24 dB typical for 22 GHz to 29 GHz 39 dB typical for 29 GHz to 38 GHz Input IP3 20 dBm typical for 22 GHz to 29 GHz 19.5 dBm typical for 29 GHz to 38 GHz IF bandwidth: dc to 18 GHz Passive, no dc bias required

## APPLICATIONS

Point to multipoint radios and very small aperture terminal

Point to point radios (VSAT) radios Test equipment and sensors Military end use

## GENERAL DESCRIPTION

The HMC560ALM3 chip is a general-purpose, double balanced mixer that can be used as an upconverter or downconverter from 22 GHz to 38 GHz in a small chip area. This mixer requires no external component or matching circuitry.

## 22 GHz to 38 GHz, GaAs, MMIC, Double Balanced Mixer

[HMC560ALM3](http://www.analog.com/HMC560A?doc=HMC560A.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The HMC560ALM3 provides excellent local oscillator (LO) to radio frequency (RF) and LO to intermediate frequency (IF) suppression due to optimized balun structures. The mixer operates with LO drive levels above 9 dBm.

## [HMC560ALM3](http://www.analog.com/HMC560A?doc=HMC560A.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Electrical Specifications............................................................... 3                  |
| Absolute Maximum Ratings............................................................ 4                      |
| Thermal Resistance ...................................................................... 4                 |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |
| Interface Schematics..................................................................... 5                 |
| Typical Performance Characteristics ............................................. 6                         |

## REVISION HISTORY

6 /201 9 -Revision 0: Initial Version

| Downconverter Performance ......................................................6          |    |
|--------------------------------------------------------------------------------------------|----|
| Upconverter Performance.........................................................           | 12 |
| Isolation and Return Loss .........................................................        | 16 |
| IF Bandwidth-Downconverter...............................................                  | 18 |
| Spurious and Harmonics Performance...................................                      | 19 |
| Theory of Operation ...................................................................... | 20 |
| Applications Information..............................................................     | 21 |
| Typical Application Circuit.......................................................         | 21 |
| Evaluation PCB Information ....................................................            | 21 |
| Outline Dimensions.......................................................................  | 22 |
| Ordering Guide ..........................................................................  | 22 |

## SPECIFICATIONS ELECTRICAL SPECIFICATIONS

TA = 25°C, IF = 1 GHz, LO drive level = 13 dBm, RF frequency range = 22 GHz to 29 GHz, all measurements performed as a downconverter with the upper sideband selected, unless otherwise noted.

Table 1.

| Parameter                    | Symbol   | Min   |   Typ |   Max | Unit   |
|------------------------------|----------|-------|-------|-------|--------|
| FREQUENCY RANGE              |          |       |       |       |        |
| Radio Frequency              | RF       | 22    |       |    29 | GHz    |
| Local Oscillator             | LO       | 22    |       |    29 | GHz    |
| Intermediate Frequency       | IF       | dc    |       |    18 | GHz    |
| CONVERSION LOSS              |          |       |    10 |    14 | dB     |
| NOISE FIGURE                 |          |       |  10.5 |       | dB     |
| ISOLATION                    |          |       |       |       |        |
| LO to RF                     |          |       |    34 |       | dB     |
| LO to IF                     |          | 16    |    29 |       | dB     |
| RF to IF                     |          | 8     |    24 |       | dB     |
| INPUTTHIRD-ORDER INTERCEPT   | IP3      | 9     |    20 |       | dBm    |
| INPUT SECOND-ORDER INTERCEPT | IP2      |       |    38 |       | dBm    |
| INPUT POWER                  |          |       |       |       |        |
| 1 dB Compression             | P1dB     |       |     9 |       | dBm    |
| UPCONVERTER PERFORMANCE      |          |       |       |       |        |
| Conversion Loss              |          |       |    10 |       | dB     |
| IP3                          |          |       |  13.5 |       | dBm    |
| RETURN LOSS                  |          |       |       |       |        |
| RF                           |          |       |     7 |       | dB     |
| LO                           |          |       |     8 |       | dB     |

TA = 25°C, IF = 1 GHz, LO drive level = 13 dBm, RF frequency range = 29 GHz to 38 GHz, all measurements performed as a downconverter with the upper sideband selected, unless otherwise noted.

Table 2.

| Parameter                    | Symbol   | Min   |   Typ |   Max | Unit   |
|------------------------------|----------|-------|-------|-------|--------|
| FREQUENCY RANGE              |          |       |       |       |        |
| Radio Frequency              | RF       | 29    |       |    38 | GHz    |
| Local Oscillator             | LO       | 29    |       |    38 | GHz    |
| Intermediate Frequency       | IF       | dc    |       |    18 | GHz    |
| CONVERSION LOSS              |          |       |    11 |    15 | dB     |
| NOISE FIGURE                 |          |       |  11.5 |       | dB     |
| ISOLATION                    |          |       |       |       |        |
| LO to RF                     |          |       |    38 |       | dB     |
| LO to IF                     |          | 10    |    31 |       | dB     |
| RF to IF                     |          | 11    |    39 |       | dB     |
| INPUTTHIRD-ORDER INTERCEPT   | IP3      | 9     |  19.5 |       | dBm    |
| INPUT SECOND-ORDER INTERCEPT | IP2      |       |    38 |       | dBm    |
| INPUT POWER                  |          |       |       |       |        |
| 1 dB Compression             | P1dB     |       |  11.5 |       | dBm    |
| UPCONVERTER PERFORMANCE      |          |       |       |       |        |
| Conversion Loss              |          |       |     9 |       | dB     |
| IP3                          |          |       |  16.5 |       | dBm    |
| RETURN LOSS                  |          |       |       |       |        |
| RF                           |          |       |    14 |       | dB     |
| LO                           |          |       |     7 |       | dB     |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 3.

| Parameter                                                                      | Rating          |
|--------------------------------------------------------------------------------|-----------------|
| RF Input Power                                                                 | 25 dBm          |
| LO Input Power                                                                 | 23 dBm          |
| IF Input Power                                                                 | 25 dBm          |
| IF Source and Sink Current                                                     | 2mA             |
| Channel Temperature                                                            | 150°C/W         |
| Maximum Peak Reflow Temperature (MSL3)                                         | 260 ° C         |
| Continuous Power Dissipation, P DISS (T A = 85°C, Derate 5.3 mW/°C Above 85°C) | 344mW           |
| Storage Temperature Range                                                      | -65°C to +150°C |
| Operating Temperature Range                                                    | -40°C to +85°C  |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM)               | 500V            |
| Field Induced Charged Device Model (FICDM)                                     | 1250V           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required. θJC is the junction to case thermal resistance, from the channel to the bottom of the die.

## Table 4. Thermal Resistance

| PackageType   |   θ JA |   θ JC | Unit   |
|---------------|--------|--------|--------|
| CE-6-3        |   67.6 |    188 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## NOTES

<!-- image -->

1. NIC = NOT INTERNALLY CONNECTED. THESE PINS CAN BE CONNECTED TO RF/DC GROUND WITHOUT AFFECTING PERFORMANCE.
2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED TO RF AND DC GROUND.

Figure 2.

Table 5. Pin Function Descriptions

| Pin No.     | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 3     | NIC        | Not Internally Connected. No connection is required. These pins can be connected to RF/dc ground without affecting performance.                                                                                                                                                                                                                                                                             |
| 4           | RF         | Radio Frequency Port.This pin is ac-coupled andmatchedto50Ω.SeeFigure 6for the RF interface schematic.                                                                                                                                                                                                                                                                                                      |
| 5           | IF         | Intermediate Frequency Port. This pin is dc-coupled. For applications not requiring operation to dc, dc block this port externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, this pin must not source or sink more than 2 mAof current or die malfunction and possible die failure may result. See Figure 5 for the IF interface schematic. |
| 6           | LO         | Local Oscillator Port. This pin is ac-coupled and matched to 50 Ω. See Figure 4 for the LO interface schematic.                                                                                                                                                                                                                                                                                             |
| Exposed Pad | GND        | Exposed Pad. The exposed pad must be connected to RF and dc ground. See Figure 3 for the GNDinterface schematic.                                                                                                                                                                                                                                                                                            |

## INTERFACE SCHEMATICS

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. LO Interface Schematic

<!-- image -->

17001-002

<!-- image -->

Figure 5. IF Interface Schematic

<!-- image -->

Figure 6. RF Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

## Downconverter Performance at IF = 1 GHz, Upper Sideband

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 9. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 11. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 12. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 13. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 14. Noise Figure vs. RF Frequency at TA = 25°C, LO = 13 dBm

<!-- image -->

Figure 15. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

## Downconverter Performance at IF = 10 GHz, Upper Sideband

17001-016

<!-- image -->

Figure 16. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 17. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 18. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 19. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Downconverter Performance at IF = 1 GHz, Lower Sideband

<!-- image -->

Figure 20. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 21. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 22. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 23. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 24. Input IP2 vs. RF Frequency at Various Temperatures, TA = 25°C

Figure 25. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 26. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Downconverter Performance at IF = 10 GHz, Lower Sideband

17001-027

<!-- image -->

Figure 27. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 28. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 29. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 30. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE

## Upconverter Performance at IF = 1 GHz, Upper Sideband

<!-- image -->

Figure 31. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 32. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 33. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 34. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 35. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Upconverter Performance at IF = 10 GHz, Upper Sideband

<!-- image -->

Figure 36. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 37. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 38. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 39. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Upconverter Performance at IF = 1 GHz, Lower Sideband

<!-- image -->

Figure 40. Conversion Gain vs. RF Frequency at Various Temperatures LO = 13 dBm

<!-- image -->

Figure 41. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 42. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 43. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Upconverter Performance at IF = 10 GHz, Lower Sideband

<!-- image -->

Figure 44. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 45. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 46. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 47. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## ISOLATION AND RETURN LOSS

Downconverter performance at IF = 1 GHz, upper sideband (low-side LO).

<!-- image -->

Figure 48. LO to RF Isolation vs. LO Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 49. LO to IF Isolation vs. LO Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 50. RF to IF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 51. LO to RF Isolation vs. LO Frequency at Various LO Power Levels, TA = 25°C

Figure 52. LO to IF Isolation vs. LO Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 53. RF to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 54. LO Return Loss vs. LO Frequency at Various Temperatures, LO = 13 dBm

Figure 55. RF Return Loss vs. RF Frequency at Various Temperatures, LO = 29 GHz, 13 dBm

<!-- image -->

Figure 56. IF Return Loss vs. IF Frequency at Various Temperatures, LO = 29 GHz, 13 dBm

<!-- image -->

<!-- image -->

## IF BANDWIDTH-DOWNCONVERTER

Upper sideband, LO frequency = 24 GHz.

<!-- image -->

Figure 57. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 58. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 59. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 60. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE

Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

## LO Harmonics

LO power = 13 dBm, TA =25°C, and all values are in dBc below the input LO level measured at the RF port.

|                    |   N×LOSpurattheRFPort | N×LOSpurattheRFPort   | N×LOSpurattheRFPort   |
|--------------------|-----------------------|-----------------------|-----------------------|
| LO Frequency (GHz) |                     1 | 2                     | 3                     |
| 24                 |                    +1 | +40                   | N/A                   |
| 30                 |                    -3 | N/A                   | N/A                   |
| 36                 |                   -19 | N/A                   | N/A                   |

## Downconverter, Upper Sideband, M × N Spurious Outputs

Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

Spur values are (M × RF) - (N × LO). RF = 24 GHz at -10 dBm, LO = 23 GHz at 13 dBm.

|      |    | N×LO   | N×LO   |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 | 3      | 4      |
| M×RF |  0 | N/A    | 1      |     40 | N/A    | N/A    |
| M×RF |  1 | 10     | 0      |     30 | 40     | N/A    |
| M×RF |  2 | 61     | 64     |     50 | 60     | 65     |
| M×RF |  3 | N/A    | 63     |     73 | 61     | 74     |
| M×RF |  4 | N/A    | N/A    |     60 | 72     | 81     |

## Downconverter, Lower Sideband, M × N Spurious Outputs

Spur values are (M × RF) - (N × LO). RF = 24 GHz at -10 dBm, LO = 25 GHz at 13 dBm.

|      |    | N×LO   | N×LO   |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 | 3      | 4      |
| M×RF |  0 | N/A    | 1      |     33 | N/A    | N/A    |
| M×RF |  1 | 8      | 0      |     32 | N/A    | N/A    |
| M×RF |  2 | 63     | 57     |     51 | 59     | N/A    |
| M×RF |  3 | N/A    | 61     |     76 | 63     | 74     |
| M×RF |  4 | N/A    | N/A    |     63 | 76     | 80     |

## Upconverter, Upper Sideband, M × N Spurious Outputs

Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

IFIN = 1 GHz at -10 dBm, LO = 23 GHz at 13 dBm.

|         |    | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   |
|---------|----|--------|--------|--------|--------|--------|
|         |    | 0      |      1 |      2 | 3      | 4      |
| M×IF IN | -4 | 79     |     77 |     65 | N/A    | N/A    |
| M×IF IN | -3 | 61     |     55 |     64 | N/A    | N/A    |
| M×IF IN | -2 | 54     |     41 |     56 | N/A    | N/A    |
| M×IF IN | -1 | 13     |      0 |     31 | N/A    | N/A    |
| M×IF IN |  0 | N/A    |      1 |     17 | N/A    | N/A    |
| M×IF IN | +1 | 13     |      0 |     40 | N/A    | N/A    |
| M×IF IN | +2 | 54     |     47 |     51 | N/A    | N/A    |
| M×IF IN | +3 | 61     |     53 |     62 | N/A    | N/A    |
| M×IF IN | +4 | 92     |     74 |     61 | N/A    | N/A    |

## Upconverter, Lower Sideband, M × N Spurious Outputs

IFIN = 1 GHz at -10 dBm, LO = 25 GHz at 13 dBm.

|         |    | N×LO   |   N×LO | N×LO   | N×LO   | N×LO   |
|---------|----|--------|--------|--------|--------|--------|
|         |    | 0      |      1 | 2      | 3      | 4      |
| M×IF IN | -4 | 82     |     76 | 63     | N/A    | N/A    |
| M×IF IN | -3 | 54     |     46 | 60     | N/A    | N/A    |
| M×IF IN | -2 | 49     |     38 | 43     | N/A    | N/A    |
| M×IF IN | -1 | 13     |      0 | 49     | N/A    | N/A    |
| M×IF IN |  0 | N/A    |      3 | 10     | N/A    | N/A    |
| M×IF IN | +1 | 13     |      0 | N/A    | N/A    | N/A    |
| M×IF IN | +2 | 49     |     47 | N/A    | N/A    | N/A    |
| M×IF IN | +3 | 54     |     52 | N/A    | N/A    | N/A    |
| M×IF IN | +4 | 78     |     72 | N/A    | N/A    | N/A    |

<!-- image -->

## THEORY OF OPERATION

The HMC560ALM3 is a general-purpose, double balanced mixer that can be used as an upconverter or a downconverter from 22 GHz to 38 GHz.

When used as a downconverter, the HMC560ALM3 downconverts RF between 22 GHz and 38 GHz to IF values between dc and 18 GHz.

When used as an upconverter, the mixer upconverts IF values between dc and 18 GHz to RF values between 22 GHz and 38 GHz.

The mixer performs well with LO drive values of 13 dBm or greater and provides excellent LO to RF and LO to IF suppression due to optimized balun structures.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

Figure 61 shows the typical application circuit for the HMC560ALM3. The HMC560ALM3 is a passive device and does not require any external components. The LO and RF pins are internally ac-coupled. When IF operation is not required until dc, it is recommended to use an ac-coupled capacitor at the IF port.

Figure 61. Typical Application Circuit

<!-- image -->

## EVALUATION PCB INFORMATION

The PCB used in this application must use RF circuit design techniques. Signal lines must have 50 Ω impedance, and the package ground lead and exposed pad must be connected directly to the ground planes. The grounded coplanar wave guide (CPWG) PCB input/output transitions allow the use of ground signal ground (GSG) probes for testing. The suggested probe pitch is 400 mm (16 mils). The evaluation circuit board shown in Figure 62 is available from Analog Devices, Inc., upon request.

Figure 62. EV1HMC560ALM3 Evaluation PCB

<!-- image -->

## OUTLINE DIMENSIONS

PKG-000000

Figure 63. 6-Terminal Chip Array Small Outline No Lead Cavity [LGA\_CAV]

<!-- image -->

5.08 mm × 5.08 mm Body and 1.01 mm Package Height (CE-6-3)

Dimensions shown in millimeters

| Model 1       | Temperature Range   | Package Description                                          | Package Option   |
|---------------|---------------------|--------------------------------------------------------------|------------------|
| HMC560ALM3    | -40°C to +85°C      | 6-Terminal Chip Array Small Outline No Lead Cavity [LGA_CAV] | CE-6-3           |
| HMC560ALM3TR  | -40°C to +85°C      | 6-Terminal Chip Array Small Outline No Lead Cavity [LGA_CAV] | CE-6-3           |
| EV1HMC560ALM3 |                     | Evaluation PCB Assembly                                      |                  |

## ORDERING GUIDE

1  The HMC560ALM3 and HMC560ALM3TR are RoHS compliant devices.

<!-- image -->