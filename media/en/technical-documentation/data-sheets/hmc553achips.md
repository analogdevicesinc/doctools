<!-- lastmod 2020-01-29 -->
<!-- image -->

Data Sheet

## FEATURES

Passive: no dc bias required

Conversion loss: 10 dB maximum

Input IP3 up to 21 dBm typical

LO to RF isolation: 37 dB typical

Wide IF bandwidth: dc to 5 GHz

7-pad, 0.950 mm × 0.750 mm, RoHS compliant, bare die

## APPLICATIONS

Microwave and very small aperture terminal (VSAT) radios Test equipment Point to point radios Military electronic warfare (EW), electronic countermeasure

(ECM), and command, control, communications and

intelligence (C3I)

## GENERAL DESCRIPTION

The HMC553ACHIPS is a general-purpose, double balanced, monolithic microwave integrated circuit (MMIC) mixer that can be used as an upconverter or a downconverter between 6 GHz and 14 GHz. This mixer is fabricated in a gallium arsenide (GaAs), metal semiconductor field effect transistor (MESFET) process and requires no external components or matching circuitry.

## 6 GHz to 14 GHz, GaAs, MMIC, Double-Balanced Mixer

[HMC553ACHIPS](https://www.analog.com/HMC553A-DIE?doc=HMC553ACHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

22727-001

Figure 1.

<!-- image -->

The HMC553ACHIPS provides high local oscillator (LO) to RF and LO to intermediate frequency (IF) suppression due to optimized balun structures for as low as 32 dB and 28 dB, respectively. The mixer operates with LO drive levels from 9 dBm to 15 dBm.

## [HMC553ACHIPS](https://www.analog.com/HMC553A-DIE?doc=HMC553ACHIPS.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 4                      |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |
| Interface Schematics .................................................................... 5                 |
| Typical Performance Characteristics ............................................. 6                         |
| Downconverter Performance...................................................... 6                           |
| Upconverter Performance.........................................................14                          |
| Isolation and Return Loss..........................................................18                       |

## REVISION HISTORY

12/2019-Revision 0: Initial Version

| IF Bandwidth ..............................................................................   |   20 |
|-----------------------------------------------------------------------------------------------|------|
| Spurious and Harmonics Performance...................................                         |   22 |
| Theory of Operation......................................................................     |   23 |
| Applications Information..............................................................        |   24 |
| Typical Application Circuit .......................................................           |   24 |
| Mounting and Bonding Techniques ........................................                      |   25 |
| Handling Precautions ................................................................         |   25 |
| Mounting..................................................................................... |   25 |
| Wire Bonding..............................................................................    |   25 |
| Assembly Diagram.....................................................................         |   26 |
| Outline Dimensions.......................................................................     |   27 |
| Ordering Guide ..........................................................................     |   27 |

## SPECIFICATIONS

TA = 25°C, IF = 100 MHz, RF = -10 dBm, and LO = +13 dBm, upper sideband. All measurements performed as a downconverter, unless otherwise noted.

Table 1.

| Parameter                    | Symbol   | Test Conditions/Comments         | Min   |   Typ |   Max | Unit   |
|------------------------------|----------|----------------------------------|-------|-------|-------|--------|
| FREQUENCYRANGE               |          |                                  |       |       |       |        |
| RF                           |          |                                  | 6     |       |    14 | GHz    |
| LO                           |          |                                  | 6     |       |    14 | GHz    |
| IF                           |          |                                  | DC    |       |     5 | GHz    |
| LO DRIVE LEVELS              |          |                                  | 9     |    13 |    15 | dBm    |
| 6 GHz to 11 GHz PERFORMANCE  |          |                                  |       |       |       |        |
| Downconverter                |          |                                  |       |       |       |        |
| Conversion Loss              |          |                                  |       |   7.5 |     9 | dB     |
| Noise Figure                 |          | Taken with external LO amplifier |       |   7.5 |       | dB     |
| Input Third-Order Intercept  | IP3      | 1 MHz separation between inputs  | 15    |  17.5 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                                  |       |   9.5 |       | dBm    |
| Input Second-Order Intercept | IP2      | 1 MHz separation between inputs  |       |    40 |       | dBm    |
| Upconverter                  |          |                                  |       |       |       |        |
| Conversion Loss              |          |                                  |       |     6 |       | dB     |
| Input Third-Order Intercept  | IP3      | 1 MHz separation between inputs  |       |    17 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                                  |       |     8 |       | dBm    |
| Isolation                    |          |                                  |       |       |       |        |
| RF to IF                     |          |                                  | 19    |    30 |       | dB     |
| LO to RF                     |          |                                  | 32    |    37 |       | dB     |
| LO to IF                     |          |                                  | 30    |    33 |       | dB     |
| Return Loss                  |          |                                  |       |       |       |        |
| RF                           |          | LO frequency = 10 GHz            |       |    12 |       | dB     |
| LO                           |          | LO power = 11 dBm                |       |    10 |       | dB     |
| 11 GHz to 14 GHz PERFORMANCE |          |                                  |       |       |       |        |
| Downconverter                |          |                                  |       |       |       |        |
| Conversion Loss              |          |                                  |       |     8 |    10 | dB     |
| Noise Figure                 |          | Taken with external LO amplifier |       |     8 |       | dB     |
| Input Third-Order Intercept  | IP3      | 1 MHz separation between inputs  | 20    |    21 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                                  |       |  10.5 |       | dBm    |
| Input Second-Order Intercept | IP2      | 1 MHz separation between inputs  |       |    44 |       | dBm    |
| Upconverter                  |          |                                  |       |       |       |        |
| Conversion Loss              |          |                                  |       |     7 |       | dB     |
| Input Third-Order Intercept  | IP3      | 1 MHz separation between inputs  |       |    17 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                                  |       |   7.5 |       | dBm    |
| Isolation                    |          |                                  |       |       |       |        |
| RF to IF                     |          |                                  | 20    |    25 |       | dB     |
| LO to RF                     |          |                                  | 32    |    37 |       | dB     |
| LO to IF                     |          |                                  | 28    |    35 |       | dB     |
| Return Loss                  |          |                                  |       |       |       |        |
| RF                           |          | LO frequency = 10 GHz            |       |    15 |       | dB     |
| LO                           |          | LO power = 11 dBm                |       |    11 |       | dB     |

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                                                     | Rating          |
|-------------------------------------------------------------------------------|-----------------|
| Input Power                                                                   |                 |
| RF                                                                            | 25dBm           |
| LO                                                                            | 25dBm           |
| IF                                                                            | 25dBm           |
| IF Source and Sink Current                                                    | 3mA             |
| Continuous Power Dissipation, P DISS (T A = 85°C, Derate 4.6 mW/°CAbove 85°C) | 414mW           |
| Temperature                                                                   |                 |
| Reflow                                                                        | 260°C           |
| Junction                                                                      | 175°C           |
| Operating Range                                                               | -40°C to +85°C  |
| Storage Range                                                                 | -65°C to +150°C |
| Electrostatic Discharge (ESD) Sensitivity                                     |                 |
| Human Body Model (HBM)                                                        | 1000V           |
| Field Induced Charged Device Model (FICDM)                                    | 1250V           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

## Table 3. Pad Function Descriptions

| Pad No.    | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                              |
|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 5, 7 | GND        | Ground. These GNDpads must be connected to RF and dc ground.                                                                                                                                                                                                                                                                             |
| 2          | LO         | LO Port. The LO pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                                   |
| 3          | RF         | RF Port. The RF pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                                   |
| 6          | IF         | IF Port. The IF pad is dc-coupled. For applications not requiring operation to dc, dc block the IF pad externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, the IF padmustnotsourceorsinkmore than 3mAofcurrentbecausedie malfunction andpossible die failure mayresult. |
| Die Bottom | GND        | Ground.The diebottommustbeattached directly to the ground plane eutectically or with conductive epoxy.                                                                                                                                                                                                                                   |

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

IF = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 9. Noise Figure vs. RF Frequency at Various Temperatures, LO = 13 dBm, Measurement Taken with an External LO Amplifier

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 11. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Input P1dB and Input IP2, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 12. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 13. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 14. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 15. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 100 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 16. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 17. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 18. Noise Figure vs. RF Frequency at Various Temperatures, LO = 13 dBm, Measurement Taken with an External LO Amplifier

Figure 19. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 20. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Input P1dB and Input IP2, Lower Sideband (High-Side LO)

<!-- image -->

Figure 21. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 22. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 23. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 24. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 4000 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 25. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 26. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 27. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 28. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Input P1dB and Input IP2, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 29. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 30. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 31. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 32. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 4000 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 33. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 34. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 35. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 36. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Input P1dB and Input IP2, Lower Sideband (High-Side LO)

<!-- image -->

Figure 37. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 38. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 39. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 40. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE

## Input IF (IFIN) = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 41. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 42. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 43. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 44. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 45. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 46. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IFIN = 100 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 47. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 48. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 49. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 50. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 51. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 52. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IFIN = 4000 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 53. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 54. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 55. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 56. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 57. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 58. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IFIN = 4000 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 59. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 60. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 61. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 62. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 63. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 64. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## ISOLATION AND RETURN LOSS

## Downconverter Performance at IF = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 65. LO to RF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 66. LO to IF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 67. RF to IF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 68. LO to RF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 69. LO to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 70. RF to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 71. LO Return Loss vs. LO Frequency at Various Temperatures, LO = 11 dBm, TA = 25°C

Figure 72. RF Return Loss vs. RF Frequency at LO Power Levels, TA = 25°C, LO = 10 GHz

<!-- image -->

Figure 73. IF Return Loss vs. IF Frequency at LO Power Levels, TA = 25°C, LO = 10 GHz

<!-- image -->

## IF BANDWIDTH

## Downconverter, Upper Sideband, LO Frequency = 8 GHz

<!-- image -->

Figure 74. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 75. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 76. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 77. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Downconverter, Lower Sideband, LO Frequency = 13 GHz

<!-- image -->

Figure 78. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 79. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 80. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 81. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE

## LO Harmonics

LO = 13 dBm, and all values in dBc are below the input LO level and measured at the RF port. N/A means not applicable.

Table 4. LO Harmonics at RF

|                    |   N LO Spur at RF Port (dBc) |   N LO Spur at RF Port (dBc) |   N LO Spur at RF Port (dBc) | N LO Spur at RF Port (dBc)   |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LO Frequency (GHz) |                            1 |                            2 |                            3 | 4                            |
| 6                  |                           35 |                           31 |                           64 | 57                           |
| 8                  |                           38 |                           31 |                           56 | 50                           |
| 9                  |                           37 |                           36 |                           61 | 46                           |
| 10                 |                           37 |                           41 |                           63 | 46                           |
| 12                 |                           38 |                           47 |                           39 | 50                           |
| 14                 |                           39 |                           59 |                           41 | N/A                          |

LO = 13 dBm, and all values in dBc are below the input LO level and measured at the IF port. N/A means not applicable.

Table 5. LO Harmonics at IF

|                    |   N LO Spur at IF Port (dBc) |   N LO Spur at IF Port (dBc) |   N LO Spur at IF Port (dBc) | N LO Spur at IF Port (dBc)   |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LO Frequency (GHz) |                            1 |                            2 |                            3 | 4                            |
| 6                  |                           30 |                           49 |                           50 | 68                           |
| 8                  |                           32 |                           45 |                           47 | 71                           |
| 9                  |                           33 |                           49 |                           46 | 62                           |
| 10                 |                           33 |                           50 |                           42 | 63                           |
| 12                 |                           34 |                           57 |                           33 | 61                           |
| 14                 |                           36 |                           54 |                           33 | N/A                          |

## M × N Spurious Outputs

## Downconversion, Upper Sideband

Spur values are (M × RF) - (N × LO). RF = 10.1 GHz, LO = 10 GHz, RF power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 | 4      |
|      |  0 | 0      |      3 |     21 |     12 | N/A    |
|      |  1 | 19     |      0 |     40 |     51 | 56     |
| M×RF |  2 | 63     |     68 |     57 |     74 | 77     |
| M×RF |  3 | 73     |     78 |     80 |     70 | 82     |
| M×RF |  4 | N/A    |     73 |     76 |     81 | >90    |

## Downconversion, Lower Sideband

Spur values are (M × RF) - (N × LO). RF = 14 GHz, LO = 14.1 GHz, RF power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|      |    | N×LO   | N×LO   |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 | 3      | 4      |
| M×RF |  0 | 0      | 5      |     22 | N/A    | N/A    |
| M×RF |  1 | 13     | 0      |     34 | 61     | N/A    |
|      |  2 | 67     | 78     |     62 | 78     | 70     |
|      |  3 | N/A    | 71     |     80 | 73     | 79     |
|      |  4 | N/A    | N/A    |     71 | 79     | >90    |

## Upconversion, Upper Sideband

Spur values are (M × IFIN) + (N × LO). IFIN = 0.1 GHz, LO = 10 GHz, IFIN power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the RF output power level.

|                                 | N×LO                                  | N×LO                          | N×LO                             | N×LO                             | N×LO                             |
|---------------------------------|---------------------------------------|-------------------------------|----------------------------------|----------------------------------|----------------------------------|
|                                 | 0                                     | 1                             | 2                                | 3                                | 4                                |
| -5 -4 -3 -2 -1 0 +1 +2 +3 +4 +5 | >90 >90 >90 76 35 0 36 76 >90 >90 >90 | 83 83 65 46 0 6 0 48 64 83 82 | 80 79 78 58 36 11 37 58 78 77 78 | 73 74 73 67 25 34 26 71 73 75 74 | 66 67 64 55 36 15 36 55 68 67 67 |

## Upconversion, Lower Sideband

Spur values are (M × IFIN) + (N × LO). IFIN = 0.1 GHz, LO = 14.1 GHz, IFIN power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|                                 | N×LO                                | N×LO                          | N×LO                             | N×LO                             | N×LO                                        |
|---------------------------------|-------------------------------------|-------------------------------|----------------------------------|----------------------------------|---------------------------------------------|
|                                 | 0                                   | 1                             | 2                                | 3                                | 4                                           |
| -5 -4 -3 -2 -1 0 +1 +2 +3 +4 +5 | >90 >90 88 70 33 0 33 73 87 >90 >90 | 81 79 62 46 0 7 0 49 63 80 79 | 73 71 73 74 34 28 34 72 73 73 74 | 65 65 63 58 21 10 20 57 64 64 63 | N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A |

## THEORY OF OPERATION

The HMC553ACHIPS is a general-purpose, double balanced mixer that can be used as an upconverter or a downconverter from 6 GHz to 14 GHz.

When used a downconverter, the HMC553ACHIPS down converts RF between 6 GHz and 14 GHz to intermediate frequencies between dc and 5 GHz.

When used as an upconverter, the mixer up converts IF between dc and 5 GHz to RF between 6 GHz and 14 GHz.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

Figure 82 shows the typical application circuit for the HMC553ACHIPS. The HMC553ACHIPS is a passive device and does not require any external components. The LO and RF pads are internally ac-coupled. The IF pad is internally dccoupled. When IF operation to dc is not required, use of an external series capacitor is recommended of a value chosen to pass the necessary IF frequency range. When IF operation to dc is required, do not exceed the IF source and sink current rating specified in the Absolute Maximum Ratings section.

Figure 82. Typical Application Circuit

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005') thick, alumina thin film substrates are recommended (see Figure 83). If using 0.254 mm (0.010') thick, alumina thin film substrates, raise the die 0.150 mm (0.006') so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.102 mm (0.004') thick die to a 0.150 mm (0.006') thick molybdenum heat spreader (moly tab) that is then attached to the ground plane (see Figure 84). Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm (0.003').

Figure 83. Bonding RF Pads to 0.127 mm Substrate

<!-- image -->

22727-086

Figure 84. Bonding RF Pads to 0.254 mm Substrate

<!-- image -->

## HANDLING PRECAUTIONS

Follow the precautions in the Storage section, the Cleanliness section, the Static Sensitivity section, the Transients section, and the General Handling section to avoid permanent damage to the HMC553ACHIPS.

## Storage

All bare dice are placed in either waffle-based or gel-based, ESD protective containers and then sealed in an ESD protective bag for shipment. Once the sealed ESD protective bag is open, store all dies in a dry nitrogen environment.

## Cleanliness

Handle the chips in a clean environment. Do not attempt to clean the chips using liquid cleaning systems.

## Static Sensitivity

Follow ESD precautions to protect against ESD strikes.

## Transients

Suppress instrument and bias supply transients while bias is applied. Use shielded signal and bias cables to minimize inductive pickup.

## General Handling

Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip has fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## MOUNTING

The chip is back metallized and can be die mounted either with gold (Au)/tin (Sn) eutectic preforms or with electrically conductive epoxy. The mounting surface must be clean and flat.

## Eutectic Die Attach

An 80/20 gold and tin preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90/10 nitrogen (N)/hydrogen (H) gas is applied, the tool tip temperature must be 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 seconds. No more than 3 seconds of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip when the chip is placed into position. Cure epoxy per the schedule of the manufacturer.

## WIRE BONDING

Ball or wedge bond with 0.025 mm (0.00098') diameter, pure gold wire is recommended. Thermosonic wire bonding with a nominal stage temperature of 150°C, and either a ball bonding force of 40 grams to 50 grams or a wedge bonding force of 18 grams to 22 grams, is recommended. Use the minimum level of ultrasonic energy to achieve reliable wire bonds. Wire bonds must start on the chip and terminate on the package or substrate. All bonds must be as short as possible at &lt;0.31 mm (0.01220').

## ASSEMBLY DIAGRAM

The assembly diagram of the HMC553ACHIPS is shown in Figure 85.

Figure 85. Evaluation Printed Circuit Board Top Layer

<!-- image -->

22727-087

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 86. 7-Pad Bare Die [CHIP]

(C-7-12)

Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1     | Temperature Range   | Package Description   | Package Option   |
|-------------|---------------------|-----------------------|------------------|
| HMC553AG    | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-12           |
| HMC553AG-SX | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-12           |

<!-- image -->

09-20-2019-A