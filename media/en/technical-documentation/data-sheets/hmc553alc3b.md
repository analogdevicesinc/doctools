<!-- lastmod 2019-03-21 -->
<!-- image -->

Data Sheet

## FEATURES

Passive: no dc bias required Conversion loss: 7 dB typical at 6 GHz to 11 GHz Input IP3: 18 dBm typical at 6 GHz to 11 GHz LO to RF isolation: 36 dB typical Wide IF bandwidth: dc to 5 GHz

RoHS compliant, 12-terminal, 2.90 mm × 2.90 mm LCC package

## APPLICATIONS

Microwave and very small aperture terminal (VSAT) radios Test equipment Point to point radios Military electronic warfare (EW); electronic countermeasure

(ECM); and command, control, communications and intelligence (C3I)

## GENERAL DESCRIPTION

The HMC553ALC3B is a general-purpose, double-balanced, gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC) mixer housed in a leadless Pb-free, RoHS compliant LCC package. The HMC553ALC3B can be used as an upconverter or downconverter between 6 GHz and 14 GHz. This mixer requires no external components or matching circuitry.

## 6 GHz to 14 GHz, GaAs, MMIC, Double-Balanced Mixer

[HMC553ALC3B](https://www.analog.com/HMC553ALC3B?doc=HMC553ALC3B.pdf)

## FUNCTIONAL BLOCK DIAGRAM HMC553ALC3B

Figure 1.

<!-- image -->

The HMC553ALC3B provides local oscillator (LO) to radio frequency (RF) and LO to intermediate frequency (IF) suppression due to optimized balun structures. The mixer operates with LO drive levels from 9 dBm to 15 dBm. The HMC553ALC3B eliminates the need for wire bonding, allowing use of surfacemount manufacturing techniques.

## [HMC553ALC3B](https://www.analog.com/HMC553ALC3B?doc=HMC553ALC3B.pdf)

| TABLE OF CONTENTS Features .............................................................................................. 1                                                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1                                                                                                                                  |
| Functional Block Diagram .............................................................. 1                                                                                                                                              |
| General Description......................................................................... 1                                                                                                                                         |
| Revision History ............................................................................... 2                                                                                                                                     |
| Specifications..................................................................................... 3                                                                                                                                  |
| Absolute Maximum Ratings............................................................ 4                                                                                                                                                 |
| Thermal Resistance ...................................................................... 4                                                                                                                                            |
| ESD Caution.................................................................................. 4                                                                                                                                        |
| Pin Configuration and Function Descriptions............................. 5                                                                                                                                                             |
| Interface Schematics..................................................................... 5                                                                                                                                            |
| Typical Performance Characteristics ............................................. 6                                                                                                                                                    |
| Downconverter Performance...................................................... 6                                                                                                                                                      |
| REVISION HISTORY                                                                                                                                                                                                                       |
| 3/2019-Rev.A to Rev. B Change to Table 5 ........................................................................... 22 Changes to Downconversion, Upper Sideband Section, Downconversion, Lower Sideband Section, Upconversion, Upper |
| 6/2018-Rev.0 to Rev.A Added 6 GHz to 11 GHz Downconverter Performance, Noise Figure Parameter and 11 GHz to 14 GHz Downconverter Performance, Noise Figure Parameter, Table 1............................. 3                           |

| Upconverter Performance.........................................................           |   14 |
|--------------------------------------------------------------------------------------------|------|
| Isolation and Return Loss .........................................................        |   18 |
| IF Bandwidth-Downconverter, Upper Sideband.................                                |   20 |
| IF Bandwidth-Downconverter, Lower Sideband.................                                |   21 |
| Spurious and Harmonics Performance...................................                      |   22 |
| Theory of Operation ...................................................................... |   23 |
| Applications Information..............................................................     |   24 |
| Typical Application Circuit.......................................................         |   24 |
| Evaluation PCB Information ....................................................            |   24 |
| Outline Dimensions.......................................................................  |   25 |
| Ordering Guide ..........................................................................  |   25 |

2/2018-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, IF = 100 MHz, RF = -10 dBm, LO = 13 dBm, upper side band. All measurements performed as a downconverter, unless otherwise noted, on the evaluation printed circuit board (PCB).

Table 1.

| Parameter                    | Symbol   | Test Conditions/Comments   | Min   |   Typ |   Max | Unit   |
|------------------------------|----------|----------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE              |          |                            |       |       |       |        |
| RF                           |          |                            | 6     |       |    14 | GHz    |
| LO Input                     |          |                            | 6     |       |    14 | GHz    |
| IF                           |          |                            | DC    |       |     5 | GHz    |
| DRIVE LEVELS                 |          |                            |       |    13 |       | dBm    |
| LO                           |          |                            | 9     |       |    15 |        |
| 6 GHz to 11 GHz PERFORMANCE  |          |                            |       |       |       |        |
| Downconverter                |          |                            |       |       |       |        |
| Conversion Loss              |          |                            |       |     7 |     9 | dB     |
| Noise Figure                 |          |                            |       |   8.5 |       | dB     |
| Input Third-Order Intercept  | IP3      |                            | 15    |    18 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                            |       |   9.5 |       | dBm    |
| Input Second-Order Intercept | IP2      |                            |       |    40 |       | dBm    |
| Upconverter                  | IF IN    |                            |       |       |       |        |
| Conversion Loss              |          |                            |       |     7 |       | dB     |
| Input Third-Order Intercept  | IP3      |                            |       |    19 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                            |       |     8 |       | dBm    |
| Isolation                    |          |                            |       |       |       |        |
| RF to IF                     |          |                            | 18    |    32 |       | dB     |
| LO to RF                     |          |                            | 30    |    36 |       | dB     |
| LO to IF                     |          |                            | 28    |    32 |       | dB     |
| 11 GHz to 14 GHz PERFORMANCE |          |                            |       |       |       |        |
| Downconverter                |          |                            |       |       |       |        |
| Conversion Loss              |          |                            |       |     9 |    10 | dB     |
| Noise Figure                 |          |                            |       |    10 |       | dB     |
| Input Third-Order Intercept  | IP3      |                            | 18    |    22 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                            |       |  11.5 |       | dBm    |
| Input Second-Order Intercept | IP2      |                            |       |    45 |       | dBm    |
| Upconverter                  | IF IN    |                            |       |       |       |        |
| Conversion Loss              |          |                            |       |     8 |       | dB     |
| Input Third-Order Intercept  | IP3      |                            |       |    19 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |                            |       |     8 |       | dBm    |
| Isolation                    |          |                            |       |       |       |        |
| RF to IF                     |          |                            | 25    |    29 |       | dB     |
| LO to RF                     |          |                            | 30    |    37 |       | dB     |
| LO to IF                     |          |                            | 28    |    33 |       | dB     |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                      | Rating          |
|--------------------------------------------------------------------------------|-----------------|
| RF Input Power                                                                 | 25 dBm          |
| LO Input Power                                                                 | 25 dBm          |
| IF Input Power                                                                 | 25 dBm          |
| IF Source/Sink Current                                                         | 3mA             |
| Reflow Temperature                                                             | 260°C           |
| Maximum Junction Temperature                                                   | 175°C           |
| Continuous Power Dissipation, P DISS (T A = 85°C, Derate 4.6 mW/°C Above 85°C) | 414mW           |
| Operating Temperature Range                                                    | -40°C to +85°C  |
| Storage Temperature Range                                                      | -65°C to +150°C |
| Lead Temperature Range                                                         | -65°C to +150°C |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM)               | 1000V           |
| Field Induced Charged Device Model (FICDM)                                     | 1250V           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JA |   θ JC | Unit   |
|---------------|--------|--------|--------|
| E-12-4 1      |    120 |    175 | °C/W   |

1  See JEDEC standard JESD51-2 for additional information on optimizing the thermal impedance (PCB with 3 × 3 vias).

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. NOT INTERNALLY CONNECTED. THESE PINS CAN BE CONNECTED TO RF/DC GROUND. PERFORMANCE IS NOT AFFECTED.
2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED TO RF/DC GROUND.

Figure 2. Pin Configuration

## Table 4. Pin Function Descriptions

| Pin No.                | Mnemonic     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 4, 6, 7, 9 2 5 8 | GND LO IF RF | Ground. These pins and package bottom must be connected to RF/dc ground. Local Oscillator Port. This pin is ac-coupled and matched to 50 Ω. Intermediate Frequency Port. This pin is dc-coupled. For applications not requiring operation to dc, dc block this port externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, this pin must not source or sink more than 3 mAof current or die malfunction and possible die failure may result. Radio Frequency Port. This pin is ac-coupled and matched to 50 Ω. |

## INTERFACE SCHEMATICS

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. LO Interface Schematic

<!-- image -->

16420-002

Figure 5. IF Interface Schematic

<!-- image -->

Figure 6. RF Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

IF = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 9. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 10. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Downconverter P1dB and IP2, IF = 100 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 11. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 12. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 13. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 100 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 15. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 16. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 17. Noise Figure vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 18. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 19. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 20. Noise Figure vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Downconverter P1dB and IP2, IF = 100 MHz, Lower Sideband (High-Side LO)

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

## Downconverter P1dB and IP2, IF = 40000 MHz, Upper Sideband (Low-Side LO)

<!-- image -->

Figure 29. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 30. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 31. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 32. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF = 4000 MHz, Lower Sideband (High-Side LO)

16420-035

<!-- image -->

Figure 33. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 34. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 35. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 36. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Downconverter P1dB and IP2, IF = 4000 MHz, Lower Sideband (High-Side LO)

<!-- image -->

Figure 37. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 38. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 39. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 40. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE

## IFIN = 100 MHz, Upper sideband (Low-Side LO)

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

16420-055

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

Downconverter performance at IF = 100 MHz, upper sideband (low-side LO).

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

Figure 71. LO Return Loss vs. LO Frequency at LO = 13 dBm, TA = 25°C

Figure 72. RF Return Loss vs. RF Frequency at LO Power Levels, TA = 25°C, LO = 10 GHz

<!-- image -->

Figure 73. IF Return Loss vs. IF Frequency at LO Power Levels, TA = 25°C, LO = 10 GHz

<!-- image -->

## IF BANDWIDTH-DOWNCONVERTER, UPPER SIDEBAND

LO frequency = 8 GHz.

<!-- image -->

16420-076

Figure 74. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 75. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 76. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 77. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## IF BANDWIDTH-DOWNCONVERTER, LOWER SIDEBAND

LO frequency = 13 GHz.

<!-- image -->

Figure 78. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 79. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 80. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 81. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE LO Harmonics

LO = 13 dBm, all values in dBc below input LO level and measured at RF port. N/A means not applicable.

Table 5. LO Harmonics at RF

|                    |   N×LOSpuratRFPort(dBc) |   N×LOSpuratRFPort(dBc) |   N×LOSpuratRFPort(dBc) | N×LOSpuratRFPort(dBc)   |
|--------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| LO Frequency (GHz) |                       1 |                       2 |                       3 | 4                       |
| 6                  |                      37 |                      21 |                      51 | 53                      |
| 8                  |                      38 |                      41 |                      43 | 64                      |
| 9                  |                      38 |                      46 |                      49 | 70                      |
| 10                 |                      37 |                      45 |                      58 | 82                      |
| 12                 |                      37 |                      50 |                      45 | 105                     |
| 14                 |                      39 |                      50 |                      71 | N/A                     |

LO = 13 dBm, all values in dBc below input LO level and measured at IF port. N/A means not applicable.

## Table 6. LO Harmonics at IF

|                    |   N×LOSpuratIFPort (dBc) |   N×LOSpuratIFPort (dBc) |   N×LOSpuratIFPort (dBc) | N×LOSpuratIFPort (dBc)   |
|--------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| LO Frequency (GHz) |                        1 |                        2 |                        3 | 4                        |
| 6                  |                       43 |                       38 |                       60 | 74                       |
| 8                  |                       28 |                       50 |                       88 | 104                      |
| 9                  |                       29 |                       66 |                      102 | 109                      |
| 10                 |                       29 |                       76 |                      103 | 108                      |
| 12                 |                       31 |                       84 |                       88 | 10                       |
| 14                 |                       43 |                       93 |                      107 | N/A                      |

## M × N Spurious Outputs

## Downconversion, Upper Sideband

Spur values are (M × RF) - (N × LO). RF = 10.1 GHz, LO = 10 GHz, RF power = -10 dBm, and LO power = 13 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 | 4      |
| M×RF |  0 | N/A    |    0.6 |     26 |     25 | N/A    |
| M×RF |  1 | 22     |      0 |     44 |     70 | 68     |
| M×RF |  2 | 71     |     67 |     58 |     70 | 78     |
| M×RF |  3 | 84     |     92 |     93 |     71 | 91     |
| M×RF |  4 | N/A    |     82 |     93 |     98 | 101    |

## Downconversion, Lower Sideband

Spur values are (M × RF) - (N × LO). RF = 14 GHz, LO = 14.1 GHz, RF power = -10 dBm, and LO power = 13 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|      |    | N×LO   | N×LO   |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 | 3      | 4      |
| M×RF |  0 | N/A    | 3      |     26 | N/A    | N/A    |
| M×RF |  1 | 18     | 0      |     40 | 65     | N/A    |
| M×RF |  2 | 55     | 72     |     70 | 77     | 56     |
| M×RF |  3 | N/A    | 57     |     93 | 74     | 89     |
| M×RF |  4 | N/A    | N/A    |     58 | 95     | 101    |

## Upconversion, Upper Sideband

Spur values are (M × IFIN) + (N × LO). IFIN = 0.1 GHz, LO = 10 GHz, RF power = -10 dBm, and LO power = 13 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|         |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   |
|---------|----|--------|--------|--------|--------|--------|
|         |    | 0      |      1 |      2 |      3 | 4      |
| M×IF IN | -5 | N/A    |     99 |     96 |     64 | 61     |
| M×IF IN | -4 | N/A    |     86 |     94 |     62 | 61     |
| M×IF IN | -3 | N/A    |     81 |     83 |     75 | 61     |
| M×IF IN | -2 | N/A    |     51 |     59 |     72 | 59     |
| M×IF IN | -1 | N/A    |      0 |     35 |     22 | 43     |
| M×IF IN |  0 | N/A    |      6 |     10 |     27 | 19     |
| M×IF IN | +1 | 36     |      0 |     36 |     20 | N/A    |
| M×IF IN | +2 | 81     |     50 |     58 |     68 | N/A    |
| M×IF IN | +3 | 95     |     63 |     84 |     76 | N/A    |
| M×IF IN | +4 | 101    |     85 |     92 |     84 | N/A    |
| M×IF IN | +5 | 102    |    100 |     94 |     84 | N/A    |

## Upconversion, Lower Sideband

Spur values are (M × IFIN) + (N × LO).

IFIN = 0.1 GHz, LO = 14.1 GHz, RF power = -10 dBm, and LO power = 13 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|         |    | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   |
|---------|----|--------|--------|--------|--------|--------|
|         |    | 0      |      1 |      2 | 3      | 4      |
| M×IF IN | -5 | N/A    |     96 |     82 | N/A    | N/A    |
| M×IF IN | -4 | N/A    |     85 |     84 | N/A    | N/A    |
| M×IF IN | -3 | N/A    |     71 |     77 | N/A    | N/A    |
| M×IF IN | -2 | N/A    |     52 |     60 | N/A    | N/A    |
| M×IF IN | -1 | N/A    |      0 |     28 | N/A    | N/A    |
| M×IF IN |  0 | N/A    |      8 |     20 | N/A    | N/A    |
| M×IF IN | +1 | 34     |      0 |     28 | N/A    | N/A    |
| M×IF IN | +2 | 79     |     50 |     61 | N/A    | N/A    |
| M×IF IN | +3 | 96     |     63 |     61 | N/A    | N/A    |
| M×IF IN | +4 | 100    |     86 |     84 | N/A    | N/A    |
| M×IF IN | +5 | 100    |     95 |     62 | N/A    | N/A    |

## THEORY OF OPERATION

The HMC553ALC3B is a general-purpose, double-balanced mixer that can be used as an upconverter or a downconverter from 6 GHz to 14 GHz.

When used a downconverter, the HMC553ALC3B downconverts radio frequencies (RF) between 6 GHz and 14 GHz to intermediate frequencies (IF) between dc and 5 GHz.

When used as an upconverter, the mixer upconverts intermediate frequencies between dc and 5 GHz to radio frequencies between 6 GHz and 14 GHz.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

Figure 82 shows the typical application circuit for the HMC553ALC3B. The HMC553ALC3B is a passive device and does not require any external components. The LO and RF pins are internally ac-coupled. The IF pin is internally dc-coupled. When IF operation to dc is not required, use of an external series capacitor is recommended, of a value chosen to pass the necessary IF frequency range. When IF operation to dc is required, do not exceed the IF source and sink current rating specified in the Absolute Maximum Ratings section.

Figure 82. Typical Application Circuit

<!-- image -->

Figure 83. Evaluation PCB Top Layer

<!-- image -->

## EVALUATION PCB INFORMATION

Use RF circuit design techniques for the circuit board used in the application. Ensure that signal lines have 50 Ω impedance, and connect the package ground leads and the exposed pad directly to the ground plane (see Figure 83). Use a sufficient number of via holes to connect the top and bottom ground planes. The evaluation circuit board shown in Figure 83 is available from Analog Devices, Inc., upon request.

Table 7. List of Materials for Evaluation PCB

## [EV1HMC553ALC3B](http://www.analog.com/EVAL-HMC553ALC3B?doc=HMC553ALC3B.pdf)

| Item   | Description                                  |
|--------|----------------------------------------------|
| J1, J2 | SRI 2.92 mmconnector                         |
| J3     | Johnson Surface-Mount Type A (SMA) connector |
| U1     | HMC553ALC3B                                  |
| PCB 1  | 117611-7 evaluation board                    |

- 1  117611-7 is the raw bare PCB identifier. Reference EV1HMC553ALC3B when ordering the complete evaluation PCB.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

<!-- image -->

Figure 84. 12-Terminal Ceramic Leadless Chip Carrier (LCC) (E-12-4) Dimensions shown in millimeters

| Model 1          | Temperature Range   | Moisture Sensitivity Level (MSL) Rating 2   | Package Description     | Package Option   |
|------------------|---------------------|---------------------------------------------|-------------------------|------------------|
| HMC553ALC3B      | -40°C to +85°C      | MSL3                                        | 12-Terminal Ceramic LCC | E-12-4           |
| HMC553ALC3BTR    | -40°C to +85°C      | MSL3                                        | 12-Terminal Ceramic LCC | E-12-4           |
| HMC553ALC3BTR-R5 | -40°C to +85°C      | MSL3                                        | 12-Terminal Ceramic LCC | E-12-4           |
| EV1HMC553ALC3B   |                     |                                             | Evaluation PCB Assembly |                  |

<!-- image -->

03-02-2017-A