<!-- lastmod 2023-04-13 -->
<!-- image -->

## FEATURES

- Downconverter
- Conversion loss
- 9 dB typical for 24 GHz to 29 GHz
- 11 dB typical for 29 GHz to 38 GHz
- LO to RF isolation
- 40 dB typical for 24 GHz to 29 GHz
- 38 dB typical for 29 GHz to 38 GHz
- LO to IF isolation
- 27 dB typical for 24 GHz to 29 GHz
- 44 dB typical for 29 GHz to 38 GHz
- RF to IF isolation
- 20 dB typical for 24 GHz to 29 GHz
- 28 dB typical for 29 GHz to 38 GHz
- Input IP3
- 18 dBm typical for 24 GHz to 29 GHz
- 19 dBm typical for 29 GHz to 38 GHz (downconverter)
- IF frequency: dc to 18 GHz
- Passive, no dc bias required

## APPLICATIONS

- Point to point radios
- Point to multipoint radios and very small aperture terminal (VSAT) radios
- Test equipment and sensors
- Military end use

## 24 GHz to 38 GHz, GaAs, MMIC, Double Balanced Mixer

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The HMC560A chip is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), double balanced mixer that can be used as an upconverter or downconverter from 24 GHz to 38 GHz in a small chip area. This mixer requires no external component or matching circuitry.

The HMC560A provides high local oscillator (LO) to RF and LO to intermediate frequency (IF) suppression, 40 dB and 44 dB, respectively, due to optimized balun structures. The mixer operates with LO amplitudes from 9 dBm to 15 dBm.

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Electrical Specifications......................................3 Absolute Maximum Ratings...................................4 Electrostatic Discharge (ESD) Ratings...............4 ESD Caution.......................................................4 Pin Configuration and Function Descriptions........ 5 Interface Schematics..........................................5 Typical Performance Characteristics.....................6 Downconverter Performance, IF = 1 GHz..........6 Downconverter Performance, IF = 10 GHz........9 Downconverter Performance, IF = 18 GHz......12   | Upconverter Performance, IF = 1 GHz.............15 Upconverter Performance, IF = 10 GHz...........17 Upconverter Performance, IF = 18 GHz...........19 Isolation and Return Loss.................................21 IF Bandwidth-Downconverter.........................23 Spurious Performance......................................25 Theory of Operation.............................................26 Applications Information...................................... 27 Typical Application Circuit................................ 27 Mounting and Bonding Techniques..................27 Handling Precautions.......................................27 Mounting...........................................................28 Wire Bonding....................................................28 Outline Dimensions............................................. 29 Ordering Guide.................................................29   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4/2023-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Updated Outline                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Dimensions.........................................................................................................................29                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

9/2020-Revision 0: Initial Version

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

TA = 25°C, IF = 1 GHz, LO drive level = 13 dBm, and all measurements performed as a downconverter with the upper sideband selected, unless otherwise noted.

| Parameter                           | Test Conditions/Comments                      | Min   | Typ   | Max   | Unit   |
|-------------------------------------|-----------------------------------------------|-------|-------|-------|--------|
| FREQUENCY                           |                                               |       |       |       |        |
| RF Pad                              |                                               | 24    |       | 38    | GHz    |
| IF Pad                              |                                               | DC    |       | 18    | GHz    |
| LO Pad                              |                                               | 22    |       | 38    | GHz    |
| LO AMPLITUDE                        |                                               | 9     | 13    | 15    | dBm    |
| 24 GHz TO 29 GHz PERFORMANCE        |                                               |       |       |       |        |
| Downconverter                       |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       | 9     | 12    | dB     |
| Single-Sideband Noise Figure        | Measurements taken with external LO amplifier |       | 12    |       | dB     |
| Input Third-Order Intercept (IP3)   | 1 MHz separation between inputs               | 13    | 18    |       | dBm    |
| Input 1 dB Compression Point (P1dB) |                                               |       | 10    |       | dBm    |
| Input Second-Order Intercept (IP2)  | 1 MHz separation between inputs               |       | 42    |       | dBm    |
| Upconverter                         |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       | 9     |       | dB     |
| Input IP3                           | 1 MHz separation between inputs               |       | 18    |       | dBm    |
| Input P1dB                          |                                               |       | 8     |       | dBm    |
| Isolation                           |                                               |       |       |       |        |
| RF to IF                            |                                               | 13    | 20    |       | dB     |
| LO to RF                            |                                               |       | 40    |       | dB     |
| LO to IF                            |                                               | 20    | 27    |       | dB     |
| 29 GHz TO 38 GHz PERFORMANCE        |                                               |       |       |       |        |
| Downconverter                       |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       | 11    | 14    | dB     |
| Single-Sideband Noise Figure        | Measurements taken with external LO amplifier |       | 14    |       | dB     |
| Input IP3                           | 1 MHz separation between inputs               | 14    | 19    |       | dBm    |
| Input P1dB                          |                                               |       | 12    |       | dBm    |
| Input IP2                           | 1 MHz separation between inputs               |       | 38    |       | dBm    |
| Upconverter                         |                                               |       |       |       |        |
| Conversion Loss                     |                                               |       | 10    |       | dB     |
| Input IP3                           | 1 MHz separation between inputs               |       | 18    |       | dBm    |
| Input P1dB                          |                                               |       | 9     |       | dBm    |
| Isolation                           |                                               |       |       |       |        |
| RF to IF                            |                                               | 24    | 28    |       | dB     |
| LO to RF                            |                                               |       | 38    |       | dB     |
| LO to IF                            |                                               | 34    | 44    |       | dB     |

## ABSOLUTE MAXIMUM RATINGS

| Table 2.                                                      |                 |
|---------------------------------------------------------------|-----------------|
| Parameter                                                     | Rating          |
| Input Power                                                   |                 |
| RF                                                            | 25 dBm          |
| LO                                                            | 23 dBm          |
| IF                                                            | 25 dBm          |
| IF Source and Sink Current                                    | 2 mA            |
| Continuous Power Dissipation, P DISS (T A = 85°C, Above 85°C) | 344mW           |
| Derate 5.3 mW/°C                                              |                 |
| Temperature                                                   |                 |
| Channel                                                       | 150°C/W         |
| Storage Range                                                 | -65°C to +150°C |
| Operating Range                                               | -40°C to +85°C  |

Stresses at or above listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per JESD22-C101F.

## ESD Ratings for HMC560A

Table 3. HMC560A, 7-Pad Bare Die (CHIP)

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                       500 | 1B      |
| FICDM       |                      1250 | C3      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 4. Pad Function Descriptions

| Pad No.    | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                |
|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 5, 7 | GND        | Not Internally Connected. No connection is required. The GND pads can be connected to RF and dc ground without affecting performance. See Figure 3 for the GND interface schematic.                                                                                                                                                                                                                        |
| 2          | LO         | Local Oscillator Port. LO is ac-coupled and matched to 50 Ω. See Figure 4 for the LO interface schematic.                                                                                                                                                                                                                                                                                                  |
| 3          | RF         | Radio Frequency Port. RF is ac-coupled and matched to 50 Ω. See Figure 5 for the RF interface schematic.                                                                                                                                                                                                                                                                                                   |
| 6          | IF         | Intermediate Frequency Port. IF is dc-coupled. For applications not requiring operation to dc, dc block the IF port externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, the IF pad must not source or sink more than 2 mA of current or die malfunction and possible die failure may result. See Figure 6 for the IF interface schematic. |
| Die Bottom |            | The die bottom must be attached directly to the ground plane eutectically or with conductive epoxy.                                                                                                                                                                                                                                                                                                        |

## INTERFACE SCHEMATICS

Figure 4. LO Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE, IF = 1 GHZ

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 9. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 11. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 12. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 13. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 15. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 16. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 17. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 18. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 19. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 20. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE, IF = 10 GHZ

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 21. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 22. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 23. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 24. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 25. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 26. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 27. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 28. Input IP2 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 29. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 30. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 31. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 32. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 33. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 34. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE, IF = 18 GHZ

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 35. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 36. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 37. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 38. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 39. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 40. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 41. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 42. Input IP2 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 43. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 44. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 45. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 46. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 47. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 48. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## UPCONVERTER PERFORMANCE, IF = 1 GHZ

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 49. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 50. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 51. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 52. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 53. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 54. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 55. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 56. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 57. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 58. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 59. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 60. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## UPCONVERTER PERFORMANCE, IF = 10 GHZ

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 61. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 62. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 63. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 64. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 65. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 66. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 67. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 68. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 69. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 70. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 71. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 72. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## UPCONVERTER PERFORMANCE, IF = 18 GHZ

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 73. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 74. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 75. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 76. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 77. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 78. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 79. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 80. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 81. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 82. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 83. Input IP3 vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 84. Input P1dB vs. RF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## ISOLATION AND RETURN LOSS

<!-- image -->

Figure 85. LO to RF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 86. LO to IF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 87. RF to IF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 88. LO to RF Isolation vs. RF Frequency at Various LO Power Levels, TA  = 25°C

Figure 89. LO to IF Isolation vs. RF Frequency at Various LO Power Levels, TA  = 25°C

<!-- image -->

Figure 90. RF to IF Isolation vs. RF Frequency at Various LO Power Levels, TA  = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 91. LO Return Loss vs. LO Frequency at Various LO Power Levels, T A = 25°C

Figure 92. RF Return Loss vs. RF Frequency at Various LO Power Levels, T A = 25°C, LO = 15 GHz

<!-- image -->

Figure 93. IF Return Loss vs. IF Frequency at Various LO Power Levels, T A = 25°C, LO = 15 GHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## IF BANDWIDTH-DOWNCONVERTER

## Upper Sideband, LO Frequency = 24 GHz

<!-- image -->

Figure 94. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 95. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 96. Conversion Gain vs. IF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

Figure 97. Input IP3 vs. IF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Lower Sideband, LO Frequency = 36 GHz

<!-- image -->

Figure 98. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 99. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 100. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA  = 25°C

<!-- image -->

Figure 101. Input IP3 vs. IF Frequency at Various LO Power Levels, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## SPURIOUS PERFORMANCE

## LO Harmonics

LO = 13 dBm, and all values in dBc are below the input LO level and measured at the RF port. N/A means not applicable.

Table 5. LO Harmonics at RF

|                    |   N LO Spur at RF Port (dBc) | N LO Spur at RF Port (dBc)   | N LO Spur at RF Port (dBc)   | N LO Spur at RF Port (dBc)   |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LO Frequency (GHz) |                            1 | 2                            | 3                            | 4                            |
| 24                 |                           40 | 33                           | N/A                          | N/A                          |
| 28                 |                           36 | N/A                          | N/A                          | N/A                          |
| 30                 |                           36 | N/A                          | N/A                          | N/A                          |
| 32                 |                           38 | N/A                          | N/A                          | N/A                          |
| 36                 |                           38 | N/A                          | N/A                          | N/A                          |
| 40                 |                           48 | N/A                          | N/A                          | N/A                          |

LO = 13 dBm, and all values in dBc are below the input LO level and measured at the IF port. N/A means not applicable.

Table 6. LO Harmonics at IF

|                    |   N LO Spur at IF Port (dBc) | N LO Spur at IF Port (dBc)   | N LO Spur at IF Port (dBc)   | N LO Spur at IF Port (dBc)   |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| LO Frequency (GHz) |                            1 | 2                            | 3                            | 4                            |
| 24                 |                           27 | 68                           | N/A                          | N/A                          |
| 28                 |                           37 | N/A                          | N/A                          | N/A                          |
| 30                 |                           47 | N/A                          | N/A                          | N/A                          |
| 32                 |                           50 | N/A                          | N/A                          | N/A                          |
| 36                 |                           45 | N/A                          | N/A                          | N/A                          |
| 40                 |                           43 | N/A                          | N/A                          | N/A                          |

## M × N Spurious Outputs

## Downconversion, Upper Sideband

Spur values are (M × RF) - (N × LO). RF = 25 GHz, LO = 24 GHz, RF power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|        |    | N × LO   | N × LO   | N × LO   |   N × LO | N × LO   |
|--------|----|----------|----------|----------|----------|----------|
|        |    | 0        | 1        | 2        |        3 | 4        |
| M × RF | 1  | 11       | 0        | 34       |       38 | N/A      |
| M × RF | 2  | 61       | 63       | 62       |       56 | 66       |
| M × RF | 3  | N/A      | N/A      | 75       |       67 | 76       |
| M × RF | 4  | N/A      | N/A      | N/A      |       74 | 80       |

## Downconversion, Lower Sideband

Spur values are (M × RF) - (N × LO). RF = 35 GHz, LO = 36 GHz, RF power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

|        |    | N × LO   | N × LO   | N × LO   |   N × LO | N × LO   |
|--------|----|----------|----------|----------|----------|----------|
|        |    | 0        | 1        | 2        |        3 | 4        |
| M × RF | 1  | 19       | 0        | 35       |        0 | N/A      |
| M × RF | 2  | N/A      | 70       | 54       |       67 | N/A      |
| M × RF | 3  | N/A      | N/A      | 67       |       65 | N/A      |
| M × RF | 4  | N/A      | N/A      | N/A      |       73 | N/A      |

## Upconversion, Upper Sideband

Spur values are (M × IF input (IF IN )) + (N × LO). IF IN = 1 GHz, LO = 24 GHz, IF IN power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|                           | N × LO                    | N × LO                  | N × LO                      | N × LO                              | N × LO                              |
|---------------------------|---------------------------|-------------------------|-----------------------------|-------------------------------------|-------------------------------------|
|                           | 0                         | 1                       | 2                           | 3                                   | 4                                   |
| -4 -3 -2 -1 0 +1 +2 +3 +4 | 82 84 57 16 0 16 57 85 82 | 76 69 49 0 7 0 49 73 76 | 66 68 51 31 1 34 53 N/A N/A | N/A N/A N/A N/A N/A N/A N/A N/A N/A | N/A N/A N/A N/A N/A N/A N/A N/A N/A |

## Upconversion, Lower Sideband

Spur values are (M × IF IN ) + (N × LO). IF IN = 1 GHz, LO = 36 GHz, IF IN power = -10 dBm, and LO power = +13 dBm. Mixer spurious products are measured in dBc from the RF output power level. N/A means not applicable.

|           |    |   N × LO |   N × LO | N × LO   | N × LO   | N × LO   |
|-----------|----|----------|----------|----------|----------|----------|
|           |    |        0 |        1 | 2        | 3        | 4        |
| M × IF IN | -4 |       80 |       72 | N/A      | N/A      | N/A      |
| M × IF IN | -3 |       83 |       59 | N/A      | N/A      | N/A      |
| M × IF IN | -2 |       55 |       46 | N/A      | N/A      | N/A      |
| M × IF IN | -1 |       14 |        0 | N/A      | N/A      | N/A      |
| M × IF IN | 0  |        0 |        5 | N/A      | N/A      | N/A      |
| M × IF IN | +1 |       14 |        0 | N/A      | N/A      | N/A      |
| M × IF IN | +2 |       55 |       47 | N/A      | N/A      | N/A      |
| M × IF IN | +3 |       82 |       63 | N/A      | N/A      | N/A      |
| M × IF IN | +4 |       79 |       64 | N/A      | N/A      | N/A      |

## THEORY OF OPERATION

The HMC560A is a GaAs, MMIC, double balanced mixer that can be used as an upconverter or a downconverter from 24 GHz to 38 GHz. A single HMC560A can replace multiple narrow-band mixers in a design with a small printed circuit board (PCB) footprint.

When used as a downconverter, the HMC560A downconverts RF between 24 GHz and 38 GHz to IF values between dc and 18 GHz.

When used as an upconverter, the mixer upconverts IF values between dc and 18 GHz to RF values between 24 GHz and 38 GHz.

The mixer performs well with LO drive level values of 13 dBm or greater and provides excellent LO to RF and LO to IF suppression due to optimized balun structures.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

Figure 102 shows the typical application circuit for the HMC560A. The HMC560A is a passive device and does not require any external components. The LO and RF pads are internally ac-coupled. When IF operation is not required until dc, it is recommended to use an ac-coupled capacitor at the IF port if dc operation is not required

Figure 102. Typical Application Circuit

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005″) thick alumina, thin film substrates are recommended (see Figure 103).

Figure 103. Bonding RF Pads to 5 mil Substrate

<!-- image -->

If using 0.254 mm (0.010″) thick alumina, thin film substrates, raise the die 0.150 mm (0.006″) so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.102 mm (0.004″) thick die to a 0.150 mm (0.006″) thick molybdenum heat spreader (moly tab), which is then attached to the ground plane (see Figure 104). To minimize bond wire length, place microstrip substrates as close to the die as possible. Typical die to substrate spacing is 0.076 mm (0.003″).

Figure 104. Bonding RF Pads to 10 mil Substrate

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

## APPLICATIONS INFORMATION

## MOUNTING

The chip is back metallized and can be die mounted with gold (Au)/tin (Sn) eutectic preforms or with electrically conductive epoxy. The mounting surface must be clean and flat.

## Eutectic Die Attach

An 80/20 gold and tin preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90/10 nitrogen(N)/hydrogen (H) gas is applied, the tool tip temperature must be 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 seconds. No more than 3 seconds of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip when the chip is placed into position. Cure epoxy per the schedule of the manufacturer.

## WIRE BONDING

Ball or wedge bond with 0.025 mm (0.00098″) diameter pure gold wire is recommended. Thermosonic wire bonding with a nominal stage temperature of 150°C and a ball bonding force of 40 grams to 50 grams, or a wedge bonding force of 18 grams to 22 grams, is recommended. Use the minimum level of ultrasonic energy to achieve reliable wire bonds. Wire bonds must begin on the chip and terminate on the package or substrate. All bonds must be as short as possible &lt;0.31 mm (0.01220″).

## OUTLINE DIMENSIONS

Figure 105. 7-Pad Bare Die [CHIP] (C-7-10) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1    | Temperature Range   | Package Description   | Package Option   |
|------------|---------------------|-----------------------|------------------|
| HMC560A    | -40°C to +85°C      | CHIPS OR DIE          | C-7-10           |
| HMC560A-SX | -40°C to +85°C      | CHIPS OR DIE          | C-7-10           |

<!-- image -->

03-31-2023-C

Updated: March 22, 2023