<!-- lastmod 2020-10-26 -->
<!-- image -->

Data Sheet

## FEATURES

Passive: no dc bias required Conversion loss: 11 dB maximum (downconverter) Input IP3: 17 dBm minimum (downconverter) LO to RF Isolation: 43 dB minimum IFx pad frequency range: dc to 3.5 GHz 12-pad, RoHS compliant, bare die (CHIP)

## APPLICATIONS

Test and measurement instrumentation Military, aerospace, and defense applications Microwave point to point base stations

## GENERAL DESCRIPTION

The HMC525ACHIPS is a compact gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), in phase and quadrature (I/Q), RoHS compliant mixer. The device can be used as either an image reject mixer or a single sideband upconverter. The mixer uses two standard double balanced mixer cells and a 90° hybrid fabricated in a GaAs, metal

## 4 GHz to 8.5 GHz, Wideband I/Q Mixer

[HMC525ACHIPS](https://www.analog.com/HMC525A-die?doc=HMC525ACHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

semiconductor field effect transistor (MESFET) process. The HMC525ACHIPS is a much smaller alternative to a hybrid style image reject mixer and a single sideband upconverter assembly. The HMC525ACHIPS eliminates the need for wire bonding, allowing the use of surface-mount manufacturing techniques.

## [HMC525ACHIPS](https://www.analog.com/HMC525A-die?doc=HMC525ACHIPS.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Functional Block Diagram.............................................................. 1                   |
| General Description......................................................................... 1             |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| Absolute Maximum Ratings ........................................................... 4                     |
| Electrostatic Discharge (ESD) Ratings...................................... 4                              |
| ESD Caution.................................................................................. 4            |
| Pin Configuration and Function Descriptions ............................ 5                                 |

## REVISION HISTORY

10/2020-Revision 0: Initial Version

| Interface Schematics.....................................................................5   |
|----------------------------------------------------------------------------------------------|
| Typical Performance Characteristics .............................................6           |
| Downconverter Performance......................................................6             |
| Upconverter Performance ........................................................ 18          |
| Spurious and Harmonics Performance .................................. 24                     |
| Theory of Operation...................................................................... 25 |
| Applications Information ............................................................. 26    |
| Outline Dimensions....................................................................... 27 |
| Ordering Guide .......................................................................... 27 |

## SPECIFICATIONS

TA = 25°C, intermediate frequency (IF) = 100 MHz, LO drive = 15 dBm, all measurements were performed as a downconverter with a lower sideband selected, with an external 90° hybrid at the IFx ports, and a LO amplifier in line with the lab bench LO source, unless otherwise noted.

Table 1.

| Parameter                              | Test Conditions/Comments             | Min   |   Typ |   Max | Unit    |
|----------------------------------------|--------------------------------------|-------|-------|-------|---------|
| FREQUENCY RANGE                        |                                      |       |       |       |         |
| RF Pad                                 |                                      | 4     |       |   8.5 | GHz     |
| LO Pad                                 |                                      | 4     |       |   8.5 | GHz     |
| IFx Pad                                |                                      | DC    |       |   3.5 | GHz     |
| LO AMPLITUDE                           |                                      | 13    |    15 |    17 | dBm     |
| 4 GHz to 8.5 GHz PERFORMANCE           |                                      |       |       |       |         |
| Downconverter                          | Taken as image reject mixer          |       |       |       |         |
| Conversion Loss                        |                                      |       |     8 |    11 | dB      |
| Noise Figure                           |                                      |       |  10.5 |       | dB      |
| Input Third-Order Intercept (IP3)      |                                      | 17    |    21 |       | dBm     |
| Input Power for 1dB Compression (P1dB) |                                      |       |    13 |       | dBm     |
| Image Rejection                        |                                      | 21    |    31 |       | dBc     |
| Upconverter                            | Taken as single sideband upconverter |       |       |       |         |
| Conversion Loss                        |                                      |       |     7 |       | dB      |
| Input IP3                              |                                      |       |    19 |       | dBm     |
| Input P1dB                             |                                      |       |   8.5 |       | dBm     |
| Sideband Rejection                     |                                      |       |    22 |       | dBc     |
| Isolation                              | Taken without external 90° IF        |       |       |       |         |
| LO to RF                               |                                      | 43    |    46 |       | dB      |
| LO to IF                               |                                      |       |    24 |       | dB      |
| RF to IF                               |                                      |       |    43 |       | dB      |
| Balance                                | Taken without external 90° IF        |       |       |       |         |
| Phase                                  |                                      |       |  0.24 |       | Degrees |
| Amplitude                              |                                      |       |  0.65 |       | dB      |
| 4.5 GHz to 6 GHz PERFORMANCE           |                                      |       |       |       |         |
| Downconverter                          | Taken as image reject mixer          |       |       |       |         |
| Conversion Loss                        |                                      |       |   7.5 |    11 | dB      |
| Noise Figure                           |                                      |       |    10 |       | dB      |
| Input IP3                              |                                      | 17    |  20.5 |       | dBm     |
| Input P1dB                             |                                      |       |  11.5 |       | dBm     |
| Image Rejection                        |                                      | 25    |  31.5 |       | dBc     |
| Upconverter                            | Taken as single sideband upconverter |       |       |       |         |
| Conversion Loss                        |                                      |       |   6.6 |       | dB      |
| Input IP3                              |                                      |       |    20 |       | dBm     |
| Input P1dB                             |                                      |       |   9.9 |       | dBm     |
| Sideband Rejection                     |                                      |       |  22.5 |       | dBc     |
| Isolation                              | Taken without external 90° IF        |       |       |       |         |
| LO to RF                               |                                      | 43    |  44.5 |       | dB      |
| LO to IF                               |                                      |       |  21.5 |       | dB      |
| RF to IF                               |                                      |       |  42.5 |       | dB      |
| Balance                                | Taken without external 90° IF        |       |       |       |         |
| Phase                                  |                                      |       |  0.09 |       | Degrees |
| Amplitude                              |                                      |       |   0.8 |       | dB      |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                   | Rating          |
|-----------------------------------------------------------------------------|-----------------|
| Input Power                                                                 |                 |
| RF                                                                          | 20 dBm          |
| LO                                                                          | 25 dBm          |
| IF                                                                          | 20 dBm          |
| IF Source and Sink Current                                                  | 2mA             |
| Continuous Power Dissipation, P DISS (T A =85°C, Derate 6.22mW/°CAbove85°C) | 560mW           |
| Temperature                                                                 |                 |
| Maximum Junction (T J )                                                     | 175°C           |
| Reflow                                                                      | 260°C           |
| Operating Range                                                             | -40°C to +85°C  |
| Storage Range                                                               | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings ADPA7004CHIP

## Table 3. HMC525ACHIPS, 12-Pad CHIP

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                       250 | 1A      |
| FICDV       |                       500 | C2A     |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

## Table 4. Pin Function Descriptions

| Pin No.          | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                    |
|------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 7, 9, 10 2 | GND RF     | Ground. The GNDpads must be connected to RF and dc ground. See Figure 3 for the interface schematic. Radio Frequency Input and Output. The RF pad is dc-coupled and matched to 50 ΩwhenLOis on. See Figure 4 for the interface schematic.                                                                                                                                      |
| 4, 5,6 8         | NC LO      | No Connect. Local Oscillator Input. The LO pad is dc-coupled and matched to 50 ΩwhenLOis on. See Figure 5 for the interface schematic.                                                                                                                                                                                                                                         |
| 11, 12           | IF2, IF1   | First and Second Quadrature Intermediate Frequency Input andOutputPads.The IFx pads are dc-coupled. For applications not requiring operation to dc, use an off-chip dc blocking capacitor. For operations to dc, the IFx pads must not source or sink more than 3 mAof current. Otherwise, the device may not function and may fail. See Figure 6 for the interface schematic. |

## INTERFACE SCHEMATICS

Figure 6. IF1, IF2 Interface Schematic

<!-- image -->

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

IF = 100 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 8. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 9. Noise Figure vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 11. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 12. Noise Figure vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 13. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 15. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 16. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 17. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 18. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## IF = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 19. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 20. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 21. Noise Figure vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 22. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 23. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 24. Noise Figure vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 25. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 26. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 27. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 28. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 29. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 30. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## IF = 2500 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 31. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

Figure 32. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 33. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

24049-035

<!-- image -->

Figure 34. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 35. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 36. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## IF = 2500 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 37. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 38. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 39. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 40. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 41. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 42. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## LO = 8 GHz Lower Sideband

Data taken as image reject mixer with external 90° hybrid at the IFx ports.

<!-- image -->

Figure 43. Conversion Gain vs. IF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 44. Image Rejection vs. IF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 45. Input IP3 vs. IF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 46. Conversion Gain vs. IF Frequency at Various LO Drives, TA = 25°C

Figure 47. Image Rejection vs. IF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 48. Input IP3 vs. IF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## Phase and Amplitude Balance-Upper Sideband, IF = 100 MHz

<!-- image -->

Figure 49. Amplitude Balance vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 50. Phase Balance vs. RF Frequency at Various Temperatures, LO = 15 dBm

Figure 51. Amplitude Balance vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 52. Phase Balance vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Phase and Amplitude Balance-Lower Sideband, IF = 100 MHz

<!-- image -->

Figure 53. Amplitude Balance vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 54. Phase Balance vs. RF Frequency at Various Temperatures, LO = 15 dBm

Figure 55. Amplitude Balance vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 56. Phase Balance vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Isolation and Return Loss-IF = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 57. LO to RF Isolation vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 58. LO to IF Isolation vs. RF Frequency at Various Temperatures and IF1 and IF2, LO Drive = 15 dBm

<!-- image -->

Figure 59. RF to IF Isolation vs. RF Frequency at Various Temperatures and IF1 and IF2, LO Drive = 15 dBm

<!-- image -->

Figure 60. LO to RF Isolation vs. RF Frequency at Various Power Levels, TA = 25°C

Figure 61. LO to IF Isolation vs. RF Frequency at Various Power Levels and IF1 and IF2, TA = 25°C

<!-- image -->

Figure 62. RF to IF Isolation vs. RF Frequency at Various Power Levels and IF1 and IF2, TA = 25°C

<!-- image -->

<!-- image -->

Figure 63. LO Return Loss vs. LO Frequency at LO = 15 dBm, TA = 25°C

Figure 64. RF Return Loss vs. RF Frequency at Various LO Power Levels, LO = 5 GHz, TA = 25°C

<!-- image -->

Figure 65. IF Return Loss vs. IF Frequency at Various Power Levels and IF1 and IF2, LO = 5 GHz, TA = 25°C

<!-- image -->

## IF Bandwidth-LO = 5 GHz Upper Side Band

Data taken as image reject mixer with external 90° hybrid at the IFx ports.

<!-- image -->

Figure 66. Conversion Gain vs. IF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 67. Image Rejection vs. IF Frequency at Various Temperatures, LO Drive = 15 dBm

Figure 68. Input IP3 vs. IF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

<!-- image -->

Figure 69. Conversion Gain vs. IF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

24049-198

Figure 70. Image Rejection vs. IF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 71. Input IP3 vs. IF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE

## Input IF (IFIN) = 100 MHz, Upper Side Band (Low-Side LO)

Data taken as single sideband upconverter with external 90° hybrid at the IFx ports.

<!-- image -->

Figure 72. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 73. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 74. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 75. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 76. Sideband vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 77. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 78. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 79. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## IFIN = 100 MHz, Lower Side Band (High-Side LO)

Data taken as single sideband upconverter with external 90° hybrid at the IFx ports.

<!-- image -->

Figure 80. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 81. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 82. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 83. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 84. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 85. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 86. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

<!-- image -->

Figure 87. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## IFIN = 2500 MHz, Upper Side Band (Low-Side LO)

Data taken as single sideband upconverter with external 90° hybrid at the IFx ports.

<!-- image -->

Figure 88. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 89. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 90. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 91. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 92. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 93. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## IFIN = 2500 MHz, Lower Side Band (High-Side LO)

Data taken as single sideband upconverter with external 90° hybrid at the IFx ports.

<!-- image -->

Figure 94. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 95. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 96. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 15 dBm

<!-- image -->

Figure 97. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 98. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 99. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE

## LO Harmonics Isolation

LO power = 15 dBm, TA = 25°C, and all values are in dBc below the input LO level measured at the RF port.

Table 5. N × LO Spur at RF Output

|                    |   N×LOSpuratRFPort |   N×LOSpuratRFPort | N×LOSpuratRFPort   | N×LOSpuratRFPort   |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| LO Frequency (GHz) |                  1 |                  2 | 3                  | 4                  |
| 2.5                |                 65 |                 44 | 71                 | 58                 |
| 3.5                |                 45 |                 57 | 53                 | 61                 |
| 4.5                |                 46 |                 42 | 48                 | 54                 |
| 5.5                |                 44 |                 62 | 60                 | >95                |
| 6.5                |                 45 |                 76 | 65                 | >95                |
| 7.5                |                 48 |                 84 | >95                | >95                |

LO power = 15 dBm, TA = 25°C, and all values are in dBc below the input LO level measured at the IFx port.

Table 6. N × LO Spur at IF Output

|                    |   N×LOSpuratIFx Port |   N×LOSpuratIFx Port | N×LOSpuratIFx Port   | N×LOSpuratIFx Port   |
|--------------------|----------------------|----------------------|----------------------|----------------------|
| LO Frequency (GHz) |                    1 |                    2 | 3                    | 4                    |
| 2.5                |                   24 |                   52 | 58                   | 78                   |
| 3.5                |                   19 |                   56 | 55                   | 78                   |
| 4.5                |                   19 |                   61 | 56                   | 87                   |
| 5.5                |                   23 |                   74 | 61                   | >95                  |
| 6.5                |                   26 |                   74 | 53                   | >95                  |
| 7.5                |                   27 |                   72 | >95                  | >95                  |

## Downconverter M × N Spurious Outputs

Mixer spurious products are measured in dBc from the IF output power level, unless otherwise specified. Spur values are (M × RF) (N × LO). N/A means not applicable.

IF = 100 MHz, RF = 5600 MHz, LO = 5500 MHz, RF power = -10 dBm, LO power = +15 dBm, and TA = 25°C.

|    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|----|--------|--------|--------|--------|--------|--------|
|    | 0      |      1 |      2 |      3 |      4 |      5 |
|  0 | N/A    |      6 |     73 |     22 |     37 |     57 |
|  1 | 39     |      0 |     46 |     73 |     73 |     66 |
|  2 | 76     |     65 |     72 |     62 |     72 |     73 |
|  3 | 71     |     76 |     85 |     92 |     84 |     69 |
|  4 | 67     |     72 |     77 |     87 |     96 |     86 |
|  5 | 56     |     62 |     73 |     78 |     86 |     94 |

IF = 100 MHz, RF = 7400 MHz, LO = 7500 MHz, RF power = -10 dBm, LO power = +15 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×RF |  0 | N/A    |     -9 |    +70 |    +10 |    +26 |    +50 |
| M×RF |  1 | +37    |      0 |    +50 |    +68 |    +64 |    +50 |
| M×RF |  2 | +70    |    +63 |    +75 |    +64 |    +70 |    +63 |
| M×RF |  3 | +58    |    +71 |    +83 |    +91 |    +83 |    +71 |
| M×RF |  4 | +58    |    +60 |    +70 |    +86 |    +95 |    +83 |
| M×RF |  5 | +49    |    +58 |    +61 |    +70 |    +86 |    +94 |

## Upconverter M × N Spurious Outputs

Mixer spurious products are measured in dBc from the RF output power level, unless otherwise specified. Spur values are (M × IFIN) + (N × LO). N/A means not applicable.

IFIN = 100 MHz, RF = 5600 MHz, LO = 5500 MHz, RF power = -10 dBm, LO power = 15 dBm, and TA = 25°C.

|         |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|---------|----|--------|--------|--------|--------|--------|--------|
|         |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×IF IN | +5 | 57     |     62 |     50 |      0 |      0 |      0 |
| M×IF IN | +4 | 68     |     56 |     63 |     48 |      0 |      0 |
| M×IF IN | +3 | 72     |     66 |     58 |     64 |     49 |      0 |
| M×IF IN | +2 | 76     |     71 |     66 |     56 |     64 |     46 |
| M×IF IN | +1 | 39     |     75 |     72 |     67 |     53 |     63 |
|         |  0 | N/A    |      6 |     73 |     22 |     37 |     57 |
|         | -1 | 39     |      0 |     46 |     73 |     73 |     66 |
|         | -2 | 76     |     65 |     72 |     62 |     72 |     73 |
|         | -3 | 71     |     76 |     85 |     92 |     84 |     69 |
|         | -4 | 67     |     72 |     77 |     87 |     96 |     86 |
|         | -5 | 56     |     62 |     73 |     78 |     86 |     94 |

IF = 100 MHz, RF = 7400 MHz, LO = 7500 GHz, RF power = -10 dBm, LO power = 15 dBm, and TA = 25°C.

|         |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|---------|----|--------|--------|--------|--------|--------|--------|
|         |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×IF IN | +5 | 98     |     83 |     86 |     83 |     79 |     73 |
| M×IF IN | +4 | 100    |     86 |     85 |     82 |     77 |     74 |
| M×IF IN | +3 | 99     |     51 |     85 |     82 |     78 |     72 |
| M×IF IN | +2 | 97     |     50 |     85 |     82 |     76 |     80 |
| M×IF IN | +1 | 96     |      3 |     86 |     26 |     50 |     73 |
| M×IF IN |  0 | N/A    |     18 |     52 |     30 |     15 |     72 |
| M×IF IN | -1 | 98     |      0 |     85 |     31 |     50 |     74 |
| M×IF IN | -2 | 99     |     49 |     87 |     81 |     80 |     73 |
| M×IF IN | -3 | 98     |     51 |     87 |     82 |     79 |     73 |
| M×IF IN | -4 | 98     |     80 |     84 |     82 |     78 |     74 |
| M×IF IN | -5 | 98     |     84 |     85 |     81 |     78 |     72 |

## THEORY OF OPERATION

The HMC525ACHIPS is a compact GaAs, MMIC, I/Q mixer. The device can be used as either an image reject mixer or a single sideband upconverter. The mixer uses two standard double balanced mixer cells and a 90° hybrid fabricated in a GaAs, MESFET process. This device is a much smaller alternative to a hybrid style image reject mixer and a single sideband upconverter assembly.

## APPLICATIONS INFORMATION

Figure 100 shows the typical application circuit for the HMC525ACHIPS. To select the appropriate sideband, an external 90° hybrid is needed. For applications not requiring operation to dc, use an off-chip dc blocking capacitor. For applications that require suppression of the LO signal at the output, use a bias tee or RF feed as shown in Figure 100. Ensure that the source or sink current used for LO suppression is &lt;2 mA for each IFx port to prevent damage to the device. The common-mode voltage for each IFx port is 0 V.

To select the upper sideband when using as an upconverter, connect the IF1 pad to the 90° port of the hybrid and connect the IF2 pad to the 0° port of the hybrid. To select the lower sideband, connect the IF1 pad to the 0° port of the hybrid and connect the IF2 pad to the 90° port of the hybrid. The input is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

To select the upper sideband (low-side LO) when using as downconverter, connect the IF1 pad to the 0° port of the hybrid and connect the IF2 pad to the 90° port of the hybrid. To select the lower sideband (high-side LO), connect the IF1 pad to the 90° port of the hybrid and connect the IF2 pad to the 0° port of the hybrid. The output is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

Figure 100. Typical Application Circuit

<!-- image -->

## OUTLINE DIMENSIONS

Figure 101. 12-Pad Bare Die [CHIP]

<!-- image -->

(C-12-4) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1    | Temperature Range   | Package Description    | Package Option   |
|------------|---------------------|------------------------|------------------|
| HMC525A    | -40°C to +85°C      | 12-Pad Bare Die [CHIP] | C-12-4           |
| HMC525A-SX | -40°C to +85°C      | 12-Pad Bare Die [CHIP] | C-12-4           |

<!-- image -->

03-10-2020-A