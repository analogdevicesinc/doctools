<!-- lastmod 2020-03-24 -->
<!-- image -->

Data Sheet

## FEATURES

Conversion loss: 8 dB typical at 5.5 GHz to 10 GHz Local oscillator (LO) to radio frequency (RF) isolation: 45 dB LO to intermediate frequency (IF) isolation: 35 dB (typical) Input third-order intercept (IIP3): 18 dBm (typical) Input P1dB: 10 dBm (typical) Input second-order intercept (IIP2): 50 dBm Passive, double balanced topology Wide IF bandwidth: dc to 6 GHz 8-pad bare die

## APPLICATIONS

Point to point microwave radios Point to multipoint radios Military end use

Instrumentation, automatic test equipment (ATE), and sensors

## GENERAL DESCRIPTION

The HMC558ACHIPS is a general-purpose, double balanced mixer that can be used as an upconverter or a downconverter between 5.5 GHz and 14 GHz. This mixer is fabricated in a gallium arsenide (GaAs), metal semiconductor field effect transistor (MESFET) process and requires no external

## 5.5 GHz to 14 GHz, GaAs MMIC Fundamental Mixer

[HMC558ACHIPS](https://www.analog.com/HMC558A?doc=HMC558ACHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

components or matching circuitry. The HMC558ACHIPS optimized balun structures provide high, 45 dB local oscillator (LO) to RF isolation. These balun structures also provide 35 dB of LO to intermediate frequency (IF) isolation.

## [HMC558ACHIPS](https://www.analog.com/HMC558A?doc=HMC558ACHIPS.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Functional Block Diagram.............................................................. 1                   |
| General Description......................................................................... 1             |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| Absolute Maximum Ratings ........................................................... 4                     |
| Thermal Resistance...................................................................... 4                 |
| ESD Caution.................................................................................. 4            |
| Pin Configuration and Function Descriptions ............................ 5                                 |
| Interface Schematics .................................................................... 5                |
| Typical Performance Characteristics............................................. 6                         |
| Downconverter Performance..................................................... 6                           |
| Upconverter Performance ........................................................ 15                        |

## REVISION HISTORY

3/2020-Revision 0: Initial Version

| Isolation and Return Loss .........................................................           |   24 |
|-----------------------------------------------------------------------------------------------|------|
| IF Bandwidth-Downconverter ..............................................                     |   26 |
| Spurious Performance...............................................................           |   28 |
| Theory of Operation......................................................................     |   29 |
| Applications Information .............................................................        |   30 |
| Typical Application Circuit......................................................             |   30 |
| Mounting and Bonding Techniques .......................................                       |   31 |
| Handling Precautions................................................................          |   31 |
| Mounting..................................................................................... |   31 |
| Wire Bonding .............................................................................    |   31 |
| Outline Dimensions.......................................................................     |   32 |
| Ordering Guide ..........................................................................     |   32 |

## SPECIFICATIONS

TA = 25°C, IF = 100 MHz, and LO = 15 dBm for upper sideband. All measurements were performed as a downconverter, unless otherwise noted.

Table 1.

| Parameter                           | Test Conditions/Comments                      | Min   |   Typ |   Max | Unit   |
|-------------------------------------|-----------------------------------------------|-------|-------|-------|--------|
| FREQUENCY                           |                                               |       |       |       |        |
| RF Pad                              |                                               | 5.5   |       |    14 | GHz    |
| IF Pad                              |                                               | dc    |       |     6 | GHz    |
| LO Pad                              |                                               | 5.5   |       |    14 | GHz    |
| LO AMPLITUDE                        |                                               | 9     |    15 |    20 | dBm    |
| 5.5 GHz TO 10 GHz PERFORMANCE       |                                               |       |       |       |        |
| Downconverter                       |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       |     8 |     9 | dB     |
| Single Sideband Noise Figure        | Measurements taken with external LO amplifier |       |   8.5 |       | dB     |
| Input Third-Order Intercept (IP3)   | 1 MHz separation between inputs               | 15    |    18 |       | dBm    |
| Input 1 dB Compression Point (P1dB) |                                               |       |    10 |       | dBm    |
| Input Second-Order Intercept (IP2)  | 1 MHz separation between inputs               |       |    50 |       | dBm    |
| Upconverter                         |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       |     7 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs               |       |    19 |       | dBm    |
| Input P1dB                          |                                               |       |    15 |       | dBm    |
| Isolation                           |                                               |       |       |       |        |
| RF to IF                            |                                               | 13    |    16 |       | dB     |
| LO to RF                            |                                               | 35    |    45 |       | dB     |
| LO to IF                            |                                               | 28    |    35 |       | dB     |
| 10 GHz TO 14 GHz PERFORMANCE        |                                               |       |       |       |        |
| Downconverter                       |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       |     9 |    11 | dB     |
| Single Sideband Noise Figure        | Measurementstaken with external LO amplifier  |       |   9.5 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs               | 18    |    21 |       | dBm    |
| Input P1dB                          |                                               |       |    12 |       | dBm    |
| Input IP2                           | 1 MHz separation between inputs               |       |    57 |       | dBm    |
| Upconverter                         |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       |     8 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs               |       |    17 |       | dBm    |
| Input P1dB                          |                                               |       |    10 |       | dBm    |
| Isolation                           |                                               |       |       |       |        |
| RF to IF                            |                                               | 16    |    19 |       | dB     |
| LO to RF                            |                                               | 30    |    40 |       | dB     |
| LO to IF                            |                                               | 30    |    35 |       | dB     |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                     | Rating            |
|---------------------------------------------------------------|-------------------|
| RF Input Power                                                | 25dBm             |
| LO Input Power                                                | 25dBm             |
| IF Input Power                                                | 25dBm             |
| IF Source/Sink Current                                        | 3mA               |
| Maximum Junction Temperature                                  | 175°C             |
| Continuous P DISS (T = 85°C) (Derate 5.5 mW/°C Above 85°C)    | 495mW             |
| Operating Temperature Range                                   | -40°C to +85°C    |
| Storage Temperature Range                                     | -65°C to +150°C   |
| Lead Temperature Range (Soldering 60 sec)                     | -65°C to +150°C   |
| Electrostatic Discharge (ESD) Sensitivity HumanBodyModel(HBM) | 2500 V (Class 2)  |
| Field Induced Charged Device Model (FICDM)                    | 1000 V (Class C5) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| Package Type   |   NonJEDEC Junction to Case Thermal Resistance (θ JC ) | Unit   |
|----------------|--------------------------------------------------------|--------|
| C-8-23 1       |                                                    103 | °C/W   |

1  The non JEDEC junction to case value was simulated under the following conditions: the heat transfer is due solely to thermal conduction from the channel through the ground pad to the PCB, and the ground pad is held constant at the operating temperature of 85°C.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

NOTES

IMPEDANCE THERMAL AND ELECTRICAL GROUND PLANE.

1. EXPOSED PAD. CONNECT THE EXPOSED PAD TO A LOW

Figure 2. Pad Configuration

| Pad No.           | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                   |
|-------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 5, 6, and 8 | GND        | Ground. See Figure 6 for the ground interface schematic.                                                                                                                                                                                                                                                                                                                      |
| 3                 | LO         | Local Oscillator Pad. This padis ac-coupledand matchedto50Ω.SeeFigure4fortheLOinterface schematic.                                                                                                                                                                                                                                                                            |
| 7                 | IF         | DC-Coupled IF. For applications not requiring operation to dc, dc block this port externally using a series capacitor with a value chosen to pass the necessary IF frequency range. For operation to dc, this pad must not source or sink more than 3 mAofcurrent, or device nonfunction and possible device failure may result. See Figure 5 for the IF interface schematic. |
| 4                 | RF EPAD    | RF Pad. This padis ac-coupled internally and matched to50Ω.SeeFigure 3for the RF interface schematic. Exposed Pad. Connect the exposed pad to a low impedance thermal and electrical ground plane.                                                                                                                                                                            |

## Table 4. Pad Function Descriptions

## INTERFACE SCHEMATICS

Figure 3. RF Interface

<!-- image -->

Figure 4. LO Interface

<!-- image -->

23159-002

Figure 5. IF Interface

<!-- image -->

Figure 6. Ground Interface

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

IF = 100 MH z , Upper Sideband (Low-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 9. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 11 . Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 12. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 13. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 100 MH z , Lower Sideband (High-Side LO)

<!-- image -->

Figure 15. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 16. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 17. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 18. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 19. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 20. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 2000 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 21. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 22. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 23. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 24. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 25. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 26. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 27. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

23159-032

Figure 28. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 2000 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 29. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 30. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 31. Input P1dB vs. RF Frequency at Various LO Power Levels, LO = 15 dBm

<!-- image -->

Figure 32. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 33. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 34. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 6000 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 35. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 36. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 37. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 38. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 39. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 40. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 41. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 42. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 6000 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 43. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 44. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 45. Input P1dB vs. RF Frequency at Various LO Power Levels, LO = 15 dBm

<!-- image -->

Figure 46. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 47. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 48. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE

## IF = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 49. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 50. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 51. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 52. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 53. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 54. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 55. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

23159-060

Figure 56. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 100 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 57. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 58. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 59. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 60. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 61. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 62. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 2000 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 63. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 64. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 65. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 66. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 67. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 68. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 69. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 70. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 2000 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 71. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 72. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 73. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 74. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 75. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 76. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 6000 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 77. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 78. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 79. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 80. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 81. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 82. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## [HMC558ACHIPS](https://www.analog.com/HMC558A?doc=HMC558ACHIPS.pdf)

Figure 83. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 84. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 6000 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 85. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 86. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 87. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 88. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 89. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 90. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## ISOLATION AND RETURN LOSS

<!-- image -->

Figure 91. LO to RF Isolation vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 92. LO to IF Isolation vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 93. RF to IF Isolation vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 94. LO to RF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 95. LO to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 96. RF to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 97. LO Return Loss vs. LO Frequency at LO = 15 dBm, TA = 25°C

Figure 98. RF Return Loss vs. RF Frequency at Various LO Power Levels, TA = 25°C, LO = 10 GHz

<!-- image -->

Figure 99. IF Return Loss vs. IF Frequency at Various LO Power Levels, TA = 25°C, LO = 10 GHz

<!-- image -->

## IF BANDWIDTH-DOWNCONVERTER

## LO Frequency = 6 GHz, Upper Sideband

<!-- image -->

Figure 100. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 101. Input IP3 vs. IF Frequency at Various Temperatures, LO = 15 dBm

Figure 102. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 103. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## LO Frequency = 13 GHz, Lower Sideband

<!-- image -->

Figure 104. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 105. Input IP3 vs. IF Frequency at Various Temperatures, LO = 15 dBm

Figure 106. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 107. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## SPURIOUS PERFORMANCE

## LO Harmonics

LO = 15 dBm, and all values in dBc are below the input LO level and measured at the RF port. N/A means not applicable.

Table 5. LO Harmonics at RF

|                   |   N LO Spur at RF Port (dBc) |   N LO Spur at RF Port (dBc) |   N LO Spur at RF Port (dBc) | N LO Spur at RF Port (dBc)   |
|-------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LOFrequency (GHz) |                            1 |                            2 |                            3 | 4                            |
| 5                 |                           49 |                           49 |                           59 | 75                           |
| 6                 |                           44 |                           44 |                           52 | 78                           |
| 7                 |                           45 |                           42 |                           43 | 72                           |
| 8                 |                           43 |                           42 |                           50 | 63                           |
| 9                 |                           44 |                           47 |                           57 | 62                           |
| 11                |                           41 |                           61 |                           54 | 63                           |
| 12                |                           40 |                           69 |                           57 | 79                           |
| 14                |                           36 |                           66 |                           50 | N/A                          |

LO = 15 dBm, and all values in dBc are below the input LO level and measured at the IF port. N/A means not applicable.

Table 6. LO Harmonics at IF

|                   |   N LO Spur at IF Port (dBc) |   N LO Spur at IF Port (dBc) |   N LO Spur at IF Port (dBc) | N LO Spur at IF Port (dBc)   |
|-------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LOFrequency (GHz) |                            1 |                            2 |                            3 | 4                            |
| 5                 |                           41 |                           55 |                           54 | 78                           |
| 6                 |                           36 |                           62 |                           56 | 76                           |
| 7                 |                           33 |                           58 |                           50 | 78                           |
| 8                 |                           32 |                           58 |                           57 | 78                           |
| 9                 |                           33 |                           62 |                           60 | 76                           |
| 11                |                           35 |                           63 |                           53 | 62                           |
| 12                |                           34 |                           64 |                           59 | 67                           |
| 14                |                           35 |                           64 |                           58 | N/A                          |

## M × N Spurious Outputs

## Downconversion, Upper Sideband

Spur values are (M × RF) - (N × LO). RF = 6.1 GHz, LO = 6 GHz, RF power = -10 dBm, and LO power = +15 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|      |    |   N×LO |   N×LO |   N×LO |   N×LO | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    |      0 |      1 |      2 |      3 | 4      |
| M×RF |  1 |      8 |      0 |     18 |     24 | 44     |
| M×RF |  2 |     65 |     54 |     63 |     66 | 83     |
| M×RF |  3 |     80 |     78 |     67 |     67 | 72     |
| M×RF |  4 |     74 |     78 |     81 |     84 | >90    |

## Downconversion, Lower Sideband

Spur values are (M × RF) - (N × LO). RF = 13.9 GHz, LO = 14 GHz, RF power = -10 dBm, and LO power = +15 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 | 4      |
| M×RF |  1 | 10     |      0 |     39 |     53 | 32     |
| M×RF |  2 | 61     |     70 |     78 |     72 | 71     |
| M×RF |  3 | 63     |     71 |     78 |     73 | 76     |
| M×RF |  4 | N/A    |     63 |     70 |     79 | >90    |

## Upconversion, Upper Sideband

Spur values are (M × IFIN) + (N × LO). IFIN = 0.1 GHz, LO = 6 GHz, IFIN power = -10 dBm, and LO power = +15 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|         |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |
|---------|----|--------|--------|--------|--------|--------|
|         |    | 0      |      1 |      2 |      3 |      4 |
| M×IF IN | -5 | >90    |     83 |     84 |     81 |     77 |
| M×IF IN | -4 | >90    |     86 |     83 |     81 |     76 |
| M×IF IN | -3 | >90    |     68 |     70 |     70 |     76 |
| M×IF IN | -2 | 71     |     57 |     70 |     70 |     76 |
| M×IF IN | -1 | 81     |      0 |     18 |     19 |     54 |
| M×IF IN |  0 | N/A    |     12 |     12 |     20 |     48 |
| M×IF IN | +1 | 80     |      0 |     19 |     20 |     52 |
| M×IF IN | +2 | 73     |     66 |     72 |     71 |     77 |
| M×IF IN | +3 | >90    |     64 |     69 |     74 |     75 |
| M×IF IN | +4 | >90    |     83 |     83 |     79 |     77 |
| M×IF IN | +5 | >90    |     85 |     82 |     80 |     76 |

## Upconversion, Lower Sideband

Spur values are (M × IFIN) + (N × LO). IFIN = 0.1 GHz, LO = 14 GHz, IFIN power = -10 dBm, and LO power = +15 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|         |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   |
|---------|----|--------|--------|--------|--------|--------|
|         |    | 0      |      1 |      2 |      3 | 4      |
| M×IF IN | -5 | >90    |     78 |     72 |     65 | N/A    |
| M×IF IN | -4 | >90    |     81 |     70 |     62 | N/A    |
| M×IF IN | -3 | >90    |     62 |     72 |     64 | N/A    |
| M×IF IN | -2 | 68     |     53 |     70 |     58 | N/A    |
| M×IF IN | -1 | 74     |      0 |     38 |     23 | N/A    |
| M×IF IN |  0 | N/A    |      1 |     32 |     16 | N/A    |
| M×IF IN | +1 | 74     |      0 |     46 |     24 | N/A    |
| M×IF IN | +2 | 68     |     71 |     71 |     62 | N/A    |
| M×IF IN | +3 | >90    |     62 |     72 |     61 | N/A    |
| M×IF IN | +4 | >90    |     78 |     71 |     64 | N/A    |
| M×IF IN | +5 | >90    |     78 |     73 |     64 | N/A    |

## THEORY OF OPERATION

The HMC558ACHIPS is a general-purpose, double balanced mixer that can be used as an upconverter or downconverter between 5.5 GHz and 14 GHz. This mixer is fabricated in a GaAs MESFET process, and requires no external components or matching circuitry. When used as downconverter, the HMC558ACHIPS downconverts RF between 5.5 GHz and 14 GHz to IF between dc and 6 GHz. When used as upconverter, the HMC558ACHIPS upconverts IF between dc and 6 GHz to RF between 5.5 GHz and 14 GHz.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

Figure 108 shows the typical application circuit for the HMC558ACHIPS. The HMC558ACHIPS is a passive device and does not require any external components. The LO and RF pads are internally ac-coupled. The IF pad is internally dc-coupled. For applications not requiring operation to dc, dc block these ports externally using a series capacitor of a value chosen to pass the necessary IF frequency range. When IF operation to dc is required, do not exceed the IF source and sink current rating specified in the Absolute Maximum Ratings section.

Figure 108. Typical Application Circuit

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005') thick alumina thin film substrates are recommended (see Figure 109). If using 0.254 mm (0.010') thick alumina thin film substrates, raise the die 0.150 mm (0.006') so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.102 mm (0.004') thick die to a 0.150 mm (0.006') thick molybdenum heat spreader (moly tab) which is then attached to the ground plane (see Figure 110). Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm (0.003').

23159-113

Figure 109. Bonding RF Pads to 5 mil Substrate

<!-- image -->

Figure 110. Bonding RF Pads to 10 mil Substrate

<!-- image -->

## HANDLING PRECAUTIONS

Follow the precautions in the Storage section, Cleanliness section, Static Sensitivity section, Transients section, and General Handling section to avoid permanent damage.

## Storage

All bare dice are placed in either waffle- or gel-based ESD protective containers and then sealed in an ESD protective bag for shipment. Once the sealed ESD protective bag is open, store all dies in a dry nitrogen environment.

## Cleanliness

Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.

## Static Sensitivity

Follow ESD precautions to protect against ESD strikes.

## Transients

Suppress instrument and bias supply transients while bias is applied. Use shielded signal and bias cables to minimize inductive pickup.

## General Handling

Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip has fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers

## MOUNTING

The chip is back metallized and can be die mounted with gold (Au)/tin (Sn) eutectic preforms or with electrically conductive epoxy. The mounting surface must be clean and flat.

## Eutectic Die Attach

An 80/20 gold and tin preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90/10 nitrogen(N)/hydrogen (H) gas is applied, the tool tip temperature must be 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 seconds. No more than 3 seconds of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip when the chip is placed into position. Cure epoxy per the schedule of the manufacturer.

## WIRE BONDING

Ball or wedge bond with 0.025 mm (0.00098') diameter pure gold wire is recommended. Thermosonic wire bonding with a nominal stage temperature of 150°C and a ball bonding force of 40 grams to 50 grams or a wedge bonding force of 18 grams to 22 grams is recommended. Use the minimum level of ultrasonic energy to achieve reliable wire bonds. Wire bonds must be started on the chip and terminate on the package or substrate. All bonds must be as short as possible &lt;0.31 mm (0.01220').

## OUTLINE DIMENSIONS

<!-- image -->

Figure 111. 8-Pad Bare Die [CHIP] (C-8-23) Dimensions shown in millimeters

| Model 1    | Temperature Range   | Package Description   | Package Option   |
|------------|---------------------|-----------------------|------------------|
| HMC558A    | -40°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-23           |
| HMC558A-SX | -40°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-23           |

## ORDERING GUIDE

1  The HMC558A and HMC558A-SX are RoHS compliant parts.

<!-- image -->

11-27-2019-A