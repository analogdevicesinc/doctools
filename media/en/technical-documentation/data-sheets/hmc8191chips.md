<!-- lastmod 2020-04-28 -->
<!-- image -->

## Data Sheet

## FEATURES

Passive, wideband, I/Q mixer

RF and LO frequency range: 6 GHz to 26.5 GHz

Wide IF frequency range: dc to 5 GHz

Single-ended RF, LO, and IF

Conversion loss: 9.5 dB (typical)

Image rejection: 29.5 dBc (typical)

Single sideband noise figure: 12 dB (typical)

Input IP3: 22 dBm (typical)

Input P1dB: 15 dBm (typical) as a downconverter

Input IP2: 54 dBm (typical)

LO to RF isolation: 43.5 dB (typical)

LO to IF isolation: 42 dB (typical)

RF to IF isolation: 22 dB (typical)

Amplitude balance: 0.3 dB (typical)

Phase balance: 0.8° (typical)

RF return loss: 12 dB (typical)

LO return loss: 22.5 dB (typical)

IF return loss: 15.5 dB (typical)

## APPLICATIONS

Test and measurement instrumentation Military, aerospace, and defense Microwave point to point base stations

## GENERAL DESCRIPTION

The HMC8191CHIPS is a passive, wideband, inphase and quadrature (I/Q), monolithic microwave integrated circuit (MMIC) mixer that can be used either as an image rejection mixer for receiver operations or as a single sideband upconverter for transmitter operations. With an RF and local oscillator (LO) range of 6 GHz to 26.5 GHz, and an intermediate frequency (IF) bandwidth of dc to 5 GHz, the HMC8191CHIPS is ideal for applications requiring a wide frequency range, excellent RF performance, a simple design with fewer components, and a small printed circuit board (PCB) footprint. A single HMC8191CHIPS can replace multiple narrow-band mixers in a design.

The inherent I/Q architecture of the HMC8191CHIPS offers excellent image rejection of 29.5 dBc typical, eliminating the

## 6 GHz to 26.5 GHz,

## Wideband, I/Q, MMIC Mixer

## [HMC8191CHIPS](https://www.analog.com/HMC8191?doc=HMC8191CHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

need for expensive filtering for unwanted sidebands. The mixer provides excellent LO to RF isolation of 43.5 dB typical, and LO to IF isolation of 42 dB typical. The mixer also reduces the effect of LO leakage to ensure signal integrity.

As a passive mixer, the HMC8191CHIPS does not require any dc power sources. The device offers a lower noise figure compared to an active mixer, ensuring optimal dynamic range for high performance and precision applications.

The HMC8191CHIPS is fabricated on a gallium arsenide (GaAs), metal semiconductor field effect transistor (MESFET) process and uses Analog Devices, Inc., mixer cells and a 90° hybrid.

## [HMC8191CHIPS](https://www.analog.com/HMC8191?doc=HMC8191CHIPS.pdf)

## TABLE OF CONTENTS

| Features..............................................................................................                                            | 1                                                                                      |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Applications ......................................................................................                                               | 1                                                                                      |
| Functional Block Diagram..............................................................                                                            | 1                                                                                      |
| General Description.........................................................................                                                      | 1                                                                                      |
| Revision History ...............................................................................                                                  | 2                                                                                      |
| Specifications                                                                                                                                    | .................................................................................... 3 |
| Absolute Maximum Ratings ...........................................................                                                              | 4                                                                                      |
| Electrostatic Discharge (ESD) Ratings......................................                                                                       | 4                                                                                      |
| ESD Caution..................................................................................                                                     | 4                                                                                      |
| Pin Configuration and Function Descriptions ............................                                                                          | 5                                                                                      |
| Interface Schematics ....................................................................                                                         | 5                                                                                      |
| Typical Performance Characteristics.............................................                                                                  | 6                                                                                      |
| Downconverter Performance: IF = 100 MHz, Lower Sideband (High-Side LO)............................................................                | 6                                                                                      |
| Downconverter Performance: IF = 2500 MHz, Lower Sideband (High-Side LO)............................................................               | 8                                                                                      |
| Downconverter Performance: IF = 5000 MHz, Lower Sideband (High-Side LO)..........................................................10               |                                                                                        |
| Downconverter Performance: IF = 100 MHz, Upper Sideband (Low-Side LO)...........................................................12                |                                                                                        |
| Downconverter Performance: IF = 2500 MHz, Upper Sideband (Low-Side LO)...........................................................14               |                                                                                        |
| Downconverter Performance: IF = 5000 MHz, Upper Sideband (Low-Side LO)...........................................................16               |                                                                                        |
| Upconverter Performance: IF = 100 MHz, Lower Sideband (High-Side LO)...........................................................................18 |                                                                                        |

## REVISION HISTORY

4/2020-Revision 0: Initial Version

| Upconverter Performance: IF = 2500 MHz, Lower Sideband                                                                                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| (High-Side LO)........................................................................... 20 Performance: IF = 5000 MHz, Lower Sideband             |
| Upconverter (High-Side LO)........................................................................... 22                                            |
| Upconverter Performance: IF = 100 MHz, Upper Sideband (Low-Side LO)............................................................................ 24  |
| Upconverter Performance: IF = 2500 MHz, Upper Sideband LO)............................................................................              |
| (Low-Side 26                                                                                                                                        |
| Upconverter Performance: IF = 5000 MHz, Upper Sideband (Low-Side LO)............................................................................ 28 |
| Isolation and Return Loss ......................................................... 30                                                              |
| IF Bandwidth Performance: Downconverter, Lower Sideband (High-Side LO) ......................................................... 32                 |
| IF Bandwidth Performance: Downconverter, Upper Sideband (Low-Side LO)........................................................... 33                 |
| Amplitude and Phase Imbalance Performance: Downconverter, Lower Sideband (High-Side LO)................................................ 34          |
| Amplitude and Phase Imbalance Performance:                                                                                                          |
| Downconverter, Upper Sideband (Low-Side LO)..................... 36                                                                                 |
| Spurious and Harmonics Performance .................................. 38                                                                            |
| Theory of Operation...................................................................... 39                                                        |
| Applications Information ............................................................. 40                                                           |
| Outline Dimensions....................................................................... 41                                                        |
| Ordering Guide .......................................................................... 41                                                        |

## SPECIFICATIONS

TA = 25°C, IF = 100 MHz, LO drive = 18 dBm, all measurements are performed as downconverter with lower sideband selected, an external 90° hybrid at the IFx ports, and an LO amplifier in line with the lab bench LO source, unless otherwise noted.

Table 1.

| Parameter                           | Min   |   Typ |   Max | Unit    |
|-------------------------------------|-------|-------|-------|---------|
| FREQUENCY                           |       |       |       |         |
| RF                                  | 6     |       |  26.5 | GHz     |
| LO                                  | 6     |       |  26.5 | GHz     |
| IF                                  | DC    |       |     5 | GHz     |
| LO DRIVE LEVEL                      |       |    18 |       | dBm     |
| RF PERFORMANCE AS DOWNCONVERTER     |       |       |       |         |
| Conversion Loss                     |       |   9.5 |    11 | dB      |
| Image Rejection                     | 18    |  29.5 |       | dBc     |
| Single Sideband Noise Figure        |       |    12 |       | dB      |
| Input Third-Order Intercept (IP3)   | 20    |    22 |       | dBm     |
| Input 1 dB Compression Point (P1dB) |       |    15 |       | dBm     |
| Input Second-Order Intercept (IP2)  |       |    54 |       | dBm     |
| Balance                             |       |       |       |         |
| Amplitude 1                         |       |   0.3 |       | dB      |
| Phase 1                             |       |   0.8 |       | Degrees |
| ISOLATION                           |       |       |       |         |
| RF to IF                            |       |    22 |       | dB      |
| LO to RF                            | 30    |  43.5 |       | dB      |
| LO to IF                            |       |    42 |       | dB      |
| RF PERFORMANCE AS UPCONVERTER       |       |       |       |         |
| Conversion Loss                     |       |   9.5 |       | dB      |
| Sideband Rejection                  |       |  26.5 |       | dBc     |
| Input IP3                           |       |    22 |       | dBm     |
| Input P1dB                          |       |    12 |       | dBm     |
| RETURN LOSS PERFORMANCE 1           |       |       |       |         |
| RF                                  |       |    12 |       | dB      |
| LO                                  |       |  22.5 |       | dB      |
| IF                                  |       |  15.5 |       | dB      |

1  Measurements taken without a 90° hybrid at the IFx ports.

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                        | Rating          |
|----------------------------------------------------------------------------------|-----------------|
| Input Power                                                                      |                 |
| RF                                                                               | 24dBm           |
| LO                                                                               | 24dBm           |
| IF                                                                               | 24dBm           |
| IF Source and Sink Current                                                       | 3mA             |
| Continuous Power Dissipation (P DISS ), T A = 85°C, Derate 7.29 mW/°C Above 85°C | 657mW           |
| Temperature                                                                      |                 |
| Junction                                                                         | 175°C           |
| Peak Reflow (Moisture Sensitivity Level 3 (MSL3))                                | 260°C           |
| Operating Range                                                                  | -40°C to +85°C  |
| Storage Range                                                                    | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for HMC8191CHIPS

## Table 3. HMC8191CHIPS, 7-Pad CHIP

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                       750 | 1B      |
| FICDM       |                      1200 | C3      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 4. Pad Function Descriptions

| Pad No.   | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | LO         | LO Input. The LO pad is dc-coupled and matched to 50 Ωwhenthe LO turns on. See Figure 6 for the interface schematic.                                                                                                                                                                                                                                                                                         |
| 2,3,and5  | GND        | Ground. The GNDpads must be connected to RF and dc ground. See Figure 3 for the interface schematic.                                                                                                                                                                                                                                                                                                         |
| 4         | RF         | RF Input and Output. The RF pad is dc-coupled and matched to 50 Ωwhenthe LO turns on. See Figure 5 for the interface schematic.                                                                                                                                                                                                                                                                              |
| 6, 7      | IF2, IF1   | Second and First Quadrature IF Input and Output Pads. The IF2 andIF1 pads are dc-coupled. For applications that do not require operation to dc, use an off chip dc blocking capacitor. For applications that require operation to dc, the IF2 and IF1 pads must not source and sink more than 3 mAof current. Otherwise, the device may not function and may fail. See Figure 4 for the interface schematic. |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

Figure 4. IF1 and IF2 Interface Schematic

<!-- image -->

Figure 5. RF Interface Schematic

<!-- image -->

23122-006

Figure 6. LO Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE: IF = 100 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 8. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 9. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 11. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 12. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 13. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

Figure 15. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 16. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IF = 2500 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 17. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 18. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 19. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 20. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 21. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 22. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 23. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 24. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

Figure 25. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 26. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IF = 5000 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 27. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 28. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 29. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 30. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 31. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 32. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 33. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 34. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

Figure 35. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 36. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IF = 100 MHz, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 37. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 38. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 39. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 40. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 41. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 42. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 43. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 44. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

Figure 45. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 46. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IF = 2500 MHz, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 47. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 48. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 49. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 50. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 51. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 52. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 53. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 54. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

Figure 55. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 56. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IF = 5000 MHz, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 57. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 58. Image Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 59. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 60. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 61. Image Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 62. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 63. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 64. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

Figure 65. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 66. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE: IF = 100 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 67. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 68. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 69. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 70. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 71. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 72. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 73. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 74. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE: IF = 2500 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 75. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 76. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 77. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

23122-078

Figure 78. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 79. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 80. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 81. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 82. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE: IF = 5000 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 83. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 84. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 85. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 86. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 87. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 88. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 89. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 90. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE: IF = 100 MHz, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 91. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 92. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 93. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

23122-094

Figure 94. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 95. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 96. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 97. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 98. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE: IF = 2500 MHz, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 99. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 100. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 101. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 102. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 103. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 104. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 105. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 106. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE: IF = 5000 MHz, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 107. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 108. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 109. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 110. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 111. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 112. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 113. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 114. Input P1dB vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## ISOLATION AND RETURN LOSS

<!-- image -->

Figure 115. LO to IF Isolation vs. RF Frequency at Various IFx Temperatures, IF = 100 MHz, LO Drive = 18 dBm

<!-- image -->

Figure 116. LO to RF Isolation vs. RF Frequency at Various Temperatures, IF = 100 MHz, LO Drive = 18 dBm

<!-- image -->

Figure 117. RF to IF Isolation vs. RF Frequency at Various IFx Temperatures, IF = 100 MHz, LO Drive = 18 dBm

<!-- image -->

Figure 118. LO to IF Isolation vs. RF Frequency at Various IFx LO Drives, IF = 100 MHz, TA = 25°C

Figure 119. LO to RF Isolation vs. RF Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

<!-- image -->

Figure 120. RF to IF Isolation vs. RF Frequency at Various IFx LO Drives, IF = 100 MHz, TA = 25°C

<!-- image -->

<!-- image -->

Figure 121. LO Return Loss vs. LO Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 122. RF Return Loss vs. RF Frequency at Various Temperatures, LO Frequency = 16 GHz, LO Drive = 18 dBm

<!-- image -->

Figure 123. IF Return Loss vs. IF Frequency at Various IFx Temperatures, LO Frequency = 16 GHz, LO Drive = 18 dBm

<!-- image -->

23122-124

Figure 124. LO Return Loss vs. LO Frequency at Various LO Drives at TA = 25°C

<!-- image -->

Figure 125. RF Return Loss vs. RF Frequency at Various LO Drives, LO Frequency = 16 GHz

Figure 126. IF Return Loss vs. IF Frequency at Various IFx LO Drives, LO Frequency = 16 GHz

<!-- image -->

## IF BANDWIDTH PERFORMANCE: DOWNCONVERTER, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 127. Conversion Gain vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 16 GHz

<!-- image -->

Figure 128. Image Rejection vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 16 GHz

<!-- image -->

Figure 129. Input IP3 vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 16 GHz

<!-- image -->

Figure 130. Conversion Gain vs. IF Frequency at Various LO Drives, LO Frequency = 16 GHz, TA = 25°C

Figure 131. Image Rejection vs. IF Frequency at Various LO Drives, LO Frequency = 16 GHz, TA = 25°C

<!-- image -->

Figure 132. Input IP3 vs. IF Frequency at Various LO Drives, LO Frequency = 16 GHz, TA = 25°C

<!-- image -->

## IF BANDWIDTH PERFORMANCE: DOWNCONVERTER, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 133. Conversion Gain vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 16 GHz

<!-- image -->

Figure 134. Image Rejection vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 16 GHz

<!-- image -->

Figure 135. Input IP3 vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 16 GHz

<!-- image -->

23122-136

Figure 136. Conversion Gain vs. IF Frequency at Various LO Drives, LO Frequency = 16 GHz, TA = 25°C

23122-137

Figure 137. Image Rejection vs. IF Frequency at Various LO Drives, LO Frequency = 16 GHz, TA = 25°C

<!-- image -->

23122-138

Figure 138. Input IP3 vs. IF Frequency at Various LO Drives, LO Frequency = 16 GHz, TA = 25°C

<!-- image -->

## AMPLITUDE AND PHASE IMBALANCE PERFORMANCE: DOWNCONVERTER, LOWER SIDEBAND (HIGH-SIDE LO)

<!-- image -->

Figure 139. Amplitude Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 100 MHz

<!-- image -->

Figure 140. Phase Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 100 MHz

<!-- image -->

Figure 141. Amplitude Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 2500 MHz

<!-- image -->

Figure 142. Amplitude Imbalance vs. RF Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

Figure 143. Phase Imbalance vs. RF Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

<!-- image -->

Figure 144. Amplitude Imbalance vs. RF Frequency at Various LO Drives, IF = 2500 MHz, TA = 25°C

<!-- image -->

Figure 145. Phase Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 2500 MHz

<!-- image -->

Figure 146. Phase Imbalance vs. RF Frequency at Various LO Drives, IF = 2500 MHz, TA = 25°C

<!-- image -->

## AMPLITUDE AND PHASE IMBALANCE PERFORMANCE: DOWNCONVERTER, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 147. Amplitude Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 100 MHz

<!-- image -->

Figure 148. Phase Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 100 MHz

<!-- image -->

Figure 149. Amplitude Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 2500 MHz

<!-- image -->

Figure 150. Amplitude Imbalance vs. RF Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

Figure 151. Phase Imbalance vs. RF Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

<!-- image -->

Figure 152. Amplitude Imbalance vs. RF Frequency at Various LO Drives, IF = 2500 MHz, TA = 25°C

<!-- image -->

Figure 153. Phase Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 2500 MHz

<!-- image -->

Figure 154. Phase Imbalance vs. RF Frequency at Various LO Drives, IF = 2500 MHz, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE

## LO Harmonics Isolation

LO power = 18 dBm, TA = 25°C, and all values are in dBc below the input LO level measured at the RF port. N/A means not applicable.

Table 5. N × LO Spur at RF Output

|                  |   N×LOSpuratRFPort | N×LOSpuratRFPort   | N×LOSpuratRFPort   | N×LOSpuratRFPort   |
|------------------|--------------------|--------------------|--------------------|--------------------|
| LOFrequency(GHz) |                  1 | 2                  | 3                  | 4                  |
| 6                |                 39 | 48                 | 57                 | 58                 |
| 8                |                 39 | 55                 | 53                 | 71                 |
| 10               |                 46 | 68                 | 64                 | 81                 |
| 12               |                 48 | 61                 | 76                 | >95                |
| 14               |                 44 | 57                 | >95                | N/A                |
| 16               |                 39 | 70                 | >95                | N/A                |
| 18               |                 40 | 78                 | N/A                | N/A                |
| 20               |                 39 | 93                 | N/A                | N/A                |
| 22               |                 41 | >95                | N/A                | N/A                |
| 24               |                 42 | >95                | N/A                | N/A                |
| 26               |                 44 | N/A                | N/A                | N/A                |

## Downconverter M × N Spurious Outputs

Mixer spurious products are measured in dBc from the IF output power level, unless otherwise specified. Spur values are (M × RF) - (N × LO). N/A means not applicable.

IF = 100 MHz, RF = 15.9 GHz, LO = 16 GHz,

RF power = -10 dBm, LO power = +18 dBm, and TA = 25°C.

|      |    | N×LO   | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 |      3 | 4      | 5      |
| M×RF |  0 | 0      | -8     |    +18 |    +36 | N/A    | N/A    |
| M×RF |  1 | +6     | 0      |    +24 |    +33 | +38    | N/A    |
| M×RF |  2 | +62    | +68    |    +73 |    +73 | +52    | +37    |
| M×RF |  3 | +40    | +63    |    +69 |    +82 | +74    | +53    |
| M×RF |  4 | N/A    | +39    |    +62 |    +72 | +84    | +75    |
| M×RF |  5 | N/A    | N/A    |    +39 |    +62 | +71    | +85    |

IF = 2500 MHz, RF = 13.5 GHz, LO = 16 GHz,

RF power = -10 dBm, LO power = +18 dBm, and TA = 25°C.

|      |    | N×LO   | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 |      3 | 4      | 5      |
| M×RF |  0 | 0      | -14    |    +13 |    +32 | N/A    | N/A    |
| M×RF |  1 | -2     | 0      |    +20 |    +50 | N/A    | N/A    |
| M×RF |  2 | +52    | +54    |    +81 |    +58 | +47    | N/A    |
| M×RF |  3 | +50    | +57    |    +76 |    +79 | +54    | +47    |
| M×RF |  4 | N/A    | +46    |    +57 |    +80 | +70    | +45    |
| M×RF |  5 | N/A    | N/A    |    +42 |    +57 | +86    | +71    |

IF = 5000 MHz, RF = 11 GHz, LO = 16 GHz,

RF power = -10 dBm, LO power = +18 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 | 4      | 5      |
| M×RF |  0 | 0      |    -16 |    +11 |    +30 | N/A    | N/A    |
| M×RF |  1 | -7     |      0 |    +15 |    +44 | N/A    | N/A    |
| M×RF |  2 | +50    |    +76 |    +56 |    +42 | +30    | N/A    |
| M×RF |  3 | +51    |    +68 |    +82 |    +66 | +52    | +34    |
| M×RF |  4 | +43    |    +51 |    +69 |    +79 | +57    | +37    |
| M×RF |  5 | N/A    |    +43 |    +54 |    +81 | +73    | +57    |

## Upconverter M × N Spurious Outputs

Mixer spurious products are measured in dBc from the RF output power level, unless otherwise specified. Spur values are (M × IF) - (N × LO). N/A means not applicable.

IF = 100 MHz, RF = 15.9 GHz, LO = 16 GHz, RF power = -10 dBm, LO power = +18 dBm, and TA = 25°C.

|      |    |   N×LO |   N×LO |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    |      0 |      1 |      2 |      3 | 4      | 5      |
| M×IF |  0 |      0 |      4 |     40 |     37 | N/A    | N/A    |
| M×IF |  1 |     66 |      0 |     34 |     40 | N/A    | N/A    |
| M×IF |  2 |     79 |     54 |     71 |     60 | N/A    | N/A    |
| M×IF |  3 |     83 |     57 |     72 |     60 | N/A    | N/A    |
| M×IF |  4 |     83 |     84 |     76 |     62 | N/A    | N/A    |
| M×IF |  5 |     85 |     85 |     76 |     59 | N/A    | N/A    |

IF = 2500 MHz, RF = 13.5 GHz, LO = 16 GHz,

RF power = -10 dBm, LO power = +18 dBm, and TA = 25°C.

|      |    |   N×LO |   N×LO |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    |      0 |      1 |      2 |      3 | 4      | 5      |
| M×IF |  0 |      0 |      1 |     36 |     33 | N/A    | N/A    |
| M×IF |  1 |     17 |      0 |     43 |     56 | N/A    | N/A    |
| M×IF |  2 |     72 |     65 |     60 |     65 | N/A    | N/A    |
| M×IF |  3 |     72 |     80 |     78 |     67 | N/A    | N/A    |
| M×IF |  4 |     83 |     79 |     78 |     68 | N/A    | N/A    |
| M×IF |  5 |     83 |     88 |     79 |     68 | N/A    | N/A    |

IF = 5000 MHz, RF = 11 GHz, LO = 16 GHz, RF power = -10 dBm, LO power = +18 dBm, and TA = 25°C.

|      |    |   N×LO |   N×LO |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    |      0 |      1 |      2 |      3 | 4      | 5      |
| M×IF |  0 |      0 |     -2 |    +33 |    +30 | N/A    | N/A    |
| M×IF |  1 |     +3 |      0 |    +18 |    +38 | N/A    | N/A    |
| M×IF |  2 |    +64 |    +66 |    +61 |    +64 | N/A    | N/A    |
| M×IF |  3 |    +76 |    +84 |    +78 |    +68 | +59    | N/A    |
| M×IF |  4 |    +76 |    +79 |    +80 |    +72 | +64    | N/A    |
| M×IF |  5 |    +73 |    +81 |    +81 |    +73 | +63    | N/A    |

## THEORY OF OPERATION

The HMC8191CHIPS is a passive, wideband, I/Q, MMIC mixer that can be used either as an image rejection mixer for receiver operations or as a single sideband upconverter for transmitter operations. With an RF and LO range of 6 GHz to 26.5 GHz, and an IF bandwidth of dc to 5 GHz, the HMC8191CHIPS is ideal for applications requiring a wide frequency range, excellent RF performance, a simple design with fewer components, and a small PCB footprint. A single HMC8191CHIPS can replace multiple narrow-band mixers in a design.

The inherent I/Q architecture of the HMC8191CHIPS offers excellent image rejection of 29.5 dBc typical, eliminating the need for expensive filtering for unwanted sidebands. The double balanced architecture of the mixer provides excellent LO to RF isolation of 43.5 dB typical, and LO to IF isolation of 42 dB

typical. The mixer also reduces the effect of LO leakage to ensure signal integrity.

As a passive mixer, the HMC8191CHIPS does not require any dc power sources. The device offers a lower noise figure compared to an active mixer, ensuring superior dynamic range for high performance and precision applications.

The HMC8191CHIPS is fabricated on a GaAs, MESFET process and uses Analog Devices mixer cells and a 90° hybrid. The HMC8191CHIPS is a 7-pad bare die and operates over a -40°C to +85°C temperature range.

An external 90° hybrid is required for both upconversion and downconversion. See the Applications Information section for details on interfacing with an external 90° hybrid.

## APPLICATIONS INFORMATION

Figure 155 shows the typical application circuit for the HMC8191CHIPS. To select the appropriate sideband, an external 90° hybrid is needed. For applications that do not require operation to dc, use an off chip dc blocking capacitor. For applications that require suppression of the LO signal at the output, use a bias tee or an RF feed as shown in Figure 155. Ensure that the source or sink current used for LO suppression is less than 3 mA for each IFx port to prevent damage to the device. The common-mode voltage for each IFx port is 0 V.

To select the upper sideband when using the HMC8191CHIPS as an upconverter, connect the IF1 pad to the 90° port of the hybrid and connect the IF2 pad to the 0° port of the hybrid. To select the lower sideband, connect the IF1 pad to the 0° port of the hybrid and the IF2 pad to the 90° port of the hybrid. The input is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

To select the upper sideband (low-side LO) when using the HMC8191CHIPS as a downconverter, connect the IF1 pad to the 0° port of the hybrid and connect the IF2 pad to the 90° port of the hybrid. To select the lower sideband (high-side LO), connect the IF1 pad to the 90° port of the hybrid and the IF2 pad to the 0° port of the hybrid. The output is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

Figure 155. Typical Application Circuit

<!-- image -->

## OUTLINE DIMENSIONS

Figure 156. 7-Pad Bare Die [CHIP] (C-7-13) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1    | Temperature Range   | Package Description   | Package Option   |
|------------|---------------------|-----------------------|------------------|
| HMC8191    | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-13           |
| HMC8191-SX | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-13           |

<!-- image -->

11-26-2019-A