<!-- lastmod 2021-03-15 -->
<!-- image -->

Data Sheet

## FEATURES

## Downconverter

Conversion loss 8 dB typical for 3 GHz to 7 GHz 10 dB typical for 7 GHz to 10 GHz LO to IF isolation 44 dB typical for 3 GHz to 7 GHz 42 dB typical for 7 GHz to 10 GHz RF to IF isolation 21 dB typical for 3 GHz to 7 GHz 32 dB typical for 7 GHz to 10 GHz Input IP3 22 dBm typical for 3 GHz to 7 GHz 28 dBm typical for 7 GHz to 10 GHz Input P1dB 15 dBm typical for 3 GHz to 7 GHz 17 dBm typical for 7 GHz to 10 GHz Passive double balanced topology Wide IF frequency range: dc to 4 GHz 6-pad, bare die [CHIP]

## APPLICATIONS

Microwave radio Industrial, scientific, and medical (ISM) band and ultrawide band (UWB) radio Test equipment and sensors Military end use

## GENERAL DESCRIPTION

The HMC787AG is a general-purpose, double balanced mixer that can be used as an upconverter or downconverter from 3 GHz to 10 GHz. This mixer is fabricated in a gallium arsenide (GaAs), metal semiconductor field effect transistor (MESFET) process and requires no external components or matching circuitry.

## 3 GHz to 10 GHz,

## GaAs, MMIC, Fundamental Mixer

[HMC787AG](http://www.analog.com/HMC787A?doc=HMC787AG.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

The HMC787AG provides high local oscillator (LO) to RF and LO to intermediate frequency (IF) isolation due to optimized balun structures and operates with a LO drive level between 13 dBm to 21 dBm.

## [HMC787AG](http://www.analog.com/HMC787A?doc=HMC787AG.pdf)

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
| Electrostatic Discharge (ESD) Ratings ...................................... 4                              |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |
| Interface Schematics .................................................................... 5                 |
| Typical Performance Characteristics ............................................. 6                         |
| Downconverter Performance, IF = 100 MHz........................... 6                                        |
| Downconverter Performance, IF = 1.1 GHz........................... 10                                       |
| Downconverter Performance, IF = 3 GHz.............................. 14                                      |

## REVISION HISTORY

3/2021-Revision 0: Initial Version

| Upconverter Performance, IF = 100 MHz..............................                           |   18 |
|-----------------------------------------------------------------------------------------------|------|
| Upconverter Performance, IF = 1.1 GHz................................                         |   20 |
| Upconverter Performance, IF = 3 GHz...................................                        |   22 |
| Isolation and Return Loss .........................................................           |   24 |
| IF Bandwidth-Downconverter...............................................                     |   26 |
| Spurious Performance ...............................................................          |   28 |
| Theory of Operation......................................................................     |   29 |
| Applications Information..............................................................        |   30 |
| Typical Application Circuit.......................................................            |   30 |
| Mounting and Bonding Techniques ........................................                      |   31 |
| Handling Precautions ................................................................         |   31 |
| Mounting..................................................................................... |   31 |
| Wire Bonding..............................................................................    |   31 |
| Outline Dimensions.......................................................................     |   32 |
| Ordering Guide ..........................................................................     |   32 |

## SPECIFICATIONS ELECTRICAL SPECIFICATIONS

TA = 25°C, IF = 100 MHz, LO drive level = 17 dBm, and all measurements performed as a downconverter, unless otherwise noted.

| Parameter                           | Test Conditions/Comments                     | Min   |   Typ |   Max | Unit   |
|-------------------------------------|----------------------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE                     |                                              |       |       |       |        |
| RF                                  |                                              | 3     |       |    10 | GHz    |
| IF                                  |                                              | DC    |       |     4 | GHz    |
| LO                                  |                                              | 3     |       |    10 | GHz    |
| LO DRIVE LEVEL                      |                                              | 13    |    17 |    21 | dBm    |
| 3 GHz TO 7 GHz PERFORMANCE          |                                              |       |       |       |        |
| Downconverter                       |                                              |       |       |       |        |
| Conversion Loss                     |                                              |       |     8 |    10 | dB     |
| Single Sideband Noise Figure        | Measurementstaken with external LO amplifier |       |     8 |       | dB     |
| Input Third-Order Intercept (IP3)   | 1 MHz separation between inputs              | 16    |    22 |       | dBm    |
| Input 1 dB Compression Point (P1dB) |                                              |       |    15 |       | dBm    |
| Input Second-Order Intercept (IP2)  | 1 MHz separation between inputs              |       |    74 |       | dBm    |
| Upconverter                         |                                              |       |       |       |        |
| Conversion Loss                     |                                              |       |     8 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs              |       |    37 |       | dBm    |
| Isolation                           |                                              |       |       |       |        |
| RF to IF                            |                                              | 15    |    21 |       | dB     |
| LO to RF                            |                                              |       |    47 |       | dB     |
| LO to IF                            |                                              | 36    |    44 |       | dB     |
| 7 GHz TO 10 GHz PERFORMANCE         |                                              |       |       |       |        |
| Downconverter                       |                                              |       |       |       |        |
| Conversion Loss                     |                                              |       |    10 |    11 | dB     |
| Single Sideband Noise Figure        | Measurementstaken with external LO amplifier |       |    10 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs              | 22    |    28 |       | dBm    |
| Input P1dB                          |                                              |       |    17 |       | dBm    |
| Input IP2                           | 1 MHz separation between inputs              |       |    70 |       | dBm    |
| Upconverter                         |                                              |       |       |       |        |
| Conversion Loss                     |                                              |       |     9 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs              |       |    36 |       | dBm    |
| Isolation                           |                                              |       |       |       |        |
| RF to IF                            |                                              | 24    |    32 |       | dB     |
| LO to RF                            |                                              |       |    43 |       | dB     |
| LO to IF                            |                                              | 25    |    42 |       | dB     |

Table 1.

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                   | Rating          |
|-----------------------------------------------------------------------------|-----------------|
| Input Power                                                                 |                 |
| RF                                                                          | 28 dBm          |
| LO                                                                          | 28dBm           |
| IF                                                                          | 28 dBm          |
| IF Source and Sink Current                                                  | 12mA            |
| Continuous Power Dissipation, P DISS (T A =85°C, Derate 11.6mW/°CAbove85°C) | 1044mW          |
| Temperature                                                                 |                 |
| Maximum Junction                                                            | 175°C           |
| Operating Range                                                             | -40°C to +85°C  |
| Storage Range                                                               | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for HMC787AG

## Table 3. HMC787AG, 6-Pad CHIP

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                       350 | 1A      |
| FICDM       |                      1250 | C3      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 4. Pad Function Descriptions

| Pad No.   | Mnemonic   | Description                                                                                                                                                       |
|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 6 2 | GND LO     | Ground. See Figure 3 for the GNDinterface schematic. Local Oscillator. The LO pad is dc-coupled and matched to 50 Ω. See Figure 4 for the LO interface schematic. |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 4. LO Interface Schematic

<!-- image -->

Figure 5. RF Interface Schematic

<!-- image -->

Figure 6. IF Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE, IF = 100 MHz

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 9. Input P1dB vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 11. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 12. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 13. Input IP2 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 15. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 16. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 17. Input P1dB vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 18. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 19. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 20. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 21. Input IP2 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 22. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

## DOWNCONVERTER PERFORMANCE, IF = 1.1 GHz

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 23. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 24. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 25. Input P1dB vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 26. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 27. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 28. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 29. Input IP2 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 30. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

<!-- image -->

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 31. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 32. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 33. Input P1dB vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 34. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 35. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 36. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 37. Input IP2 vs. RF Frequency at Various Temperatures LO = 17 dBm

<!-- image -->

Figure 38. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

## DOWNCONVERTER PERFORMANCE, IF = 3 GHz

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 39. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 40. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 41. Input P1dB vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 42. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 43. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 44. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 45. Input IP2 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 46. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 47. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 48. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 49. Input P1dB vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 50. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 51. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 52. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 53. Input IP2 vs RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 54. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

## UPCONVERTER PERFORMANCE, IF = 100 MHz

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 55. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 56. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

Figure 57. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 58. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 59. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 60. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

Figure 61. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 62. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE, IF = 1.1 GHz

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 63. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 64. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

Figure 65. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 66. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 67. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 68. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

Figure 69. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 70. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

## UPCONVERTER PERFORMANCE, IF = 3 GHz

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 71. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 72. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

Figure 73. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 74. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 75. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 76. Input IP3 vs. RF Frequency at Various Temperatures, LO = 17 dBm

Figure 77. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 78. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## ISOLATION AND RETURN LOSS

<!-- image -->

Figure 79. LO to RF Isolation vs. RF Frequency at Various Temperatures, LO = 17 dBm, IF = 100 MHz

<!-- image -->

Figure 80. LO to IF Isolation vs. RF Frequency at Various Temperatures, LO = 17 dBm, IF = 100 MHz

<!-- image -->

Figure 81. RF to IF Isolation vs. RF Frequency at Various Temperatures, LO = 17 dBm, IF = 100 MHz

<!-- image -->

Figure 82. LO to RF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C, IF = 100 MHz

Figure 83. LO to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C, IF = 100 MHz

<!-- image -->

Figure 84. RF to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C, IF = 100 MHz

<!-- image -->

<!-- image -->

Figure 85. LO Return Loss vs. LO Frequency at Various Temperatures, LO = 17 dBm

Figure 86. RF Return Loss vs. RF Frequency at Various Temperatures, LO Frequency = 9510 MHz

<!-- image -->

Figure 87. IF Return Loss vs. IF Frequency at Various Temperatures, LO Frequency = 9510 MHz

<!-- image -->

<!-- image -->

<!-- image -->

## IF BANDWIDTH-DOWNCONVERTER

## Lower Sideband, LO Frequency = 9.51 GHz

<!-- image -->

Figure 88. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 89. Input IP3 vs. IF Frequency at Various Temperatures, LO = 17 dBm

Figure 90. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 91. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Upper Sideband, LO Frequency = 9.51 GHz

<!-- image -->

Figure 92. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 17 dBm

<!-- image -->

Figure 93. Input IP3 vs. IF Frequency at Various Temperatures, LO = 17 dBm

Figure 94. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 95. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## SPURIOUS PERFORMANCE

## LO Harmonics

LO = 17 dBm, and all values in dBc are below the input LO level and measured at the RF port.

Table 5. LO Harmonics at RF

|                   |   N LO Spur at RF Port (dBc) |   N LO Spur at RF Port (dBc) |   N LO Spur at RF Port (dBc) |   N LO Spur at RF Port (dBc) |
|-------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LOFrequency (GHz) |                            1 |                            2 |                            3 |                            4 |
| 3                 |                         54.2 |                         50.4 |                         55.3 |                         61.1 |
| 4                 |                         48.2 |                         43.8 |                         51.3 |                         70.7 |
| 5                 |                         46.2 |                         42.3 |                         62.2 |                         81.5 |
| 6                 |                         45.9 |                         42.4 |                         64.4 |                         71.8 |
| 7                 |                         46.1 |                         49.6 |                         62.7 |                         80.1 |
| 8                 |                         44.7 |                           54 |                           63 |                         62.7 |
| 9                 |                         42.6 |                         58.2 |                         69.6 |                         59.1 |
| 10                |                           43 |                         64.5 |                         63.5 |                         56.7 |

LO = 17 dBm, and all values in dBc are below the input LO level and measured at the IF port.

Table 6. LO Harmonics at IF

|                   |   N LO Spur at IF Port (dBc) |   N LO Spur at IF Port (dBc) |   N LO Spur at IF Port (dBc) |   N LO Spur at IF Port (dBc) |
|-------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LOFrequency (GHz) |                            1 |                            2 |                            3 |                            4 |
| 3                 |                         47.8 |                         67.5 |                           71 |                         86.3 |
| 4                 |                         42.1 |                         68.3 |                           62 |                         73.8 |
| 5                 |                         41.2 |                         58.7 |                         73.3 |                         73.5 |
| 6                 |                         41.7 |                         76.8 |                         77.2 |                           74 |
| 7                 |                         43.7 |                           62 |                         68.7 |                         75.3 |
| 8                 |                         44.8 |                         58.9 |                         64.2 |                         74.5 |
| 9                 |                         44.7 |                         56.9 |                         65.5 |                         67.8 |
| 10                |                         29.7 |                         57.3 |                         66.8 |                         69.9 |

## M × N Spurious Outputs

## Downconversion, Upper Sideband

Spur values are (M × RF) - (N × LO). RF = 3.1 GHz, LO = 3 GHz, RF power = -5 dBm, and LO power = +17 dBm. Mixer spurious products are measured in dBc from the IF output power level.

|      |    |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|
|      |    |      0 |      1 |      2 |      3 |      4 |
| M×RF |  1 |   12.6 |      0 |   31.6 |   27.1 |   56.3 |
| M×RF |  2 |   86.2 |   88.5 |   75.9 |   77.7 |   85.2 |
| M×RF |  3 |   82.2 |   84.6 |   89.5 |   59.7 |   69.5 |
| M×RF |  4 |     82 |   81.5 |   84.9 |   88.6 |   92.9 |

## Downconversion, Lower Sideband

Spur values are (M × RF) - (N × LO). RF = 2.9 GHz, LO = 3 GHz, RF power = -5 dBm, and LO power = +17 dBm. Mixer spurious products are measured in dBc from the IF output power level.

|      |    |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|
|      |    |      0 |      1 |      2 |      3 |      4 |
| M×RF |  1 |      0 |   23.6 |   27.1 |   59.1 |   81.2 |
| M×RF |  2 |   81.2 |   80.2 |   76.7 |   87.5 |     83 |
| M×RF |  3 |     82 |   84.3 |   62.6 |   59.2 |   88.1 |
| M×RF |  4 |   81.4 |   81.7 |   84.1 |   87.1 |   93.6 |

## Upconversion, Upper Sideband

Spur values are (M × Input IF (IFIN)) + (N × LO). IFIN = 100 MHz, LO = 6 GHz, IFIN power = -5 dBm, and LO power = +1 7 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|         |   N×LO | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |
|---------|--------|--------|--------|--------|--------|--------|
|         |        | 0      |      1 |      2 |      3 |      4 |
| M×IF IN |     -4 | 92.2   |   84.2 |   82.6 |   80.8 |   75.7 |
| M×IF IN |     -3 | 87.9   |   85.5 |   82.3 |   79.5 |   73.2 |
| M×IF IN |     -2 | 83.1   |   84.7 |   81.1 |     81 |     75 |
| M×IF IN |     -1 | 29.1   |      0 |   82.9 |   80.4 |   74.9 |
| M×IF IN |      0 | N/A    |   15.6 |   12.3 |   33.1 |   76.7 |
| M×IF IN |     +1 | 29.1   |      0 |   84.5 |   79.3 |   77.3 |
| M×IF IN |     +2 | 82.9   |   84.9 |     80 |   80.5 |   76.9 |
| M×IF IN |     +3 | 87.3   |   82.4 |   83.7 |   78.7 |   76.0 |
| M×IF IN |     +4 | 95..1  |   84.3 |   80.3 |   77.1 |   76.9 |

## Upconversion, Lower Sideband

Spur values are (M × IFIN) + (N × LO). IFIN = 100 MHz, LO = 3 GHz, IFIN power = -5 dBm, and LO power = +17 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |
| M×IF | -4 | 94.1   |   88.3 |   84.5 |   84.7 |   81.3 |
| M×IF | -3 | 87.6   |   53.9 |   85.8 |   85.8 |     83 |
| M×IF | -2 | 83.8   |   62.1 |   84.4 |   81.3 |   81.1 |
| M×IF | -1 | 29.4   |      0 |   21.6 |   11.4 |   29.5 |
| M×IF |  0 | N/A    |   24.4 |   20.1 |   24.9 |   30.5 |
| M×IF | +1 | 29.4   |      0 |   20.1 |     12 |   28.8 |
| M×IF | +2 | 83.2   |   88.5 |   83.4 |   84.1 |   82.9 |
| M×IF | +3 | 86     |   87.6 |     84 |     82 |     82 |
| M×IF | +4 | 94.4   |   91.1 |   84.1 |   82.2 |   81.5 |

## THEORY OF OPERATION

The HMC787A is a general-purpose, double balanced mixer that can be used as an upconverter or downconverter from 3 GHz to 10 GHz. This mixer is fabricated in a GaAs, MESFET process and requires no external components or matching circuitry. The HMC787A provides high LO to RF and LO to IF isolation due to optimized balun structures and operates with a LO drive level between 13 dBm to 21 dBm.

## [HMC787AG](http://www.analog.com/HMC787A?doc=HMC787AG.pdf)

## APPLICATIONS INFORMATION TYPICAL APPLICATION CIRCUIT

Figure 96 shows the typical application circuit for the HMC787AG. The LO and RF pads are internally ac-coupled. When IF operation is not required until dc, it is recommended to use an ac-coupled capacitor at the IF port. When IF operation to dc is required, do not exceed the IF source and sink currents specified in the Absolute Maximum Ratings section.

Data Sheet

24588-112

Figure 96. Typical Application Circuit

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005˝) thick alumina thin film substrates are recommended (see Figure 97).

Figure 97. Bonding RF Pads to 5 mil Substrate

<!-- image -->

If using 0.254 mm (0.010˝) thick alumina thin film substrates, raise the die 0.150 mm (0.006˝) so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.102 mm (0.004˝) thick die to a 0.150 mm (0.006˝) thick molybdenum heat spreader (moly tab), which is then attached to the ground plane (see Figure 98). To minimize bond wire length, place microstrip substrates as close to the die as possible. Typical die to substrate spacing is 0.076 mm (0.003˝).

Figure 98. Bonding RF Pads to 10 mil Substrate

<!-- image -->

## HANDLING PRECAUTIONS

To avoid permanent damage to the device, follow the precautions in the following Storage, Cleanliness, Static Sensitivity, Transients, and General Handling sections.

## Storage

All bare dice are placed in either waffle- or gel-based ESD protective containers and then sealed in an ESD protective bag for shipment. After opening the sealed ESD protective bag, store all dice in a dry nitrogen environment.

## Cleanliness

Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.

## Static Sensitivity

Follow ESD precautions to protect against ESD strikes.

## Transients

Suppress instrument and bias supply transients while bias is applied. Use shielded signal and bias cables to minimize inductive pickup.

## General Handling

Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip has fragile air bridges. Do not touch the chip with a vacuum collet, tweezers, or fingers.

## MOUNTING

The chip is back metallized and can be die mounted with gold (Au)/tin (Sn) eutectic preforms or with electrically conductive epoxy. The mounting surface must be clean and flat.

## Eutectic Die Attach

An 80/20 gold and tin preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90/10 nitrogen(N)/hydrogen (H) gas is applied, the tool tip temperature must be 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 seconds. No more than 3 sec of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip when the chip is placed into position. Cure epoxy per the schedule of the manufacturer.

## WIRE BONDING

Ball or wedge bond with 0.025 mm (0.00098˝) diameter pure gold wire is recommended. Thermosonic wire bonding with a nominal stage temperature of 150°C and a ball bonding force of 40 grams to 50 grams, or a wedge bonding force of 18 grams to 22 grams, is recommended. Use the minimum level of ultrasonic energy to achieve reliable wire bonds. Wire bonds must begin on the chip and terminate on the package or substrate. All bonds must be as short as possible &lt;0.31 mm (0.01220˝).

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

PKG-004837

## ORDERING GUIDE

Figure 99. 6-Pad Bare Die [CHIP] (C-6-15) Dimensions shown in millimeters

| Model 1     | Temperature Range   | Package Description   | Package Option   |
|-------------|---------------------|-----------------------|------------------|
| HMC787AG    | -40°C to +85°C      | 6-Pad Bare Die [CHIP] | C-6-15           |
| HMC787AG-SX | -40°C to +85°C      | 6-Pad Bare Die [CHIP] | C-6-15           |

<!-- image -->

10-20-2020-A