<!-- lastmod 2019-10-03 -->
<!-- image -->

Data Sheet

## FEATURES

8.5 GHz to 13.5 GHz frequency range Conversion loss to 7 dB typical Image rejection to 22 dBc typical LO to RF isolation: 38 dB typical Input IP3: 19 dBm typical Wide IF frequency range: dc to 3.5 GHz 11-pad bare die (CHIP)

## APPLICATIONS

Microwave and very small aperture terminal (VSAT) radios Test equipment

Military electronic warfare (EW), electronic countermeasure (ECM), and command, control, communications, and intelligence (C3I)

## GENERAL DESCRIPTION

The HMC521ACHIPS is a passive, compact, inphase/quadrature (I/Q) monolithic microwave integrated circuit (MMIC) mixer that can be used either as an image reject mixer for receiver operations or as a single sideband upconverter for transmitter operations. With a RF and local oscillator (LO) range of 8.5 GHz to 13.5 GHz, and an intermediate frequency (IFx) bandwidth of dc to 3.5 GHz, the HMC521ACHIPS is ideal for applications requiring excellent RF performance and a simple design with fewer components. A single HMC521ACHIPS can replace multiple narrow-band mixers in a design. The inherent I/Q architecture of the HMC521ACHIPS offers exceptional image rejection and thereby eliminates the need for expensive

## 8.5 GHz to 13.5 GHz, GaAs, MMIC, I/Q Mixer

[HMC521ACHIPS](https://www.analog.com/HMC521ACHIPS?doc=HMC521ACHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

filtering for unwanted sidebands. The mixer also provides high LO to RF isolation (&gt;35 dB) and reduces the effect of LO leakage to ensure signal integrity. Being a passive mixer, the HMC521ACHIPS does not require any dc power sources. The device offers a lower noise figure compared to an active mixer, ensuring outstanding dynamic range for high performance and precision applications. The HMC521ACHIPS is fabricated on a gallium arsenide (GaAs), metal semiconductor field effect transistor (MESFET) process and uses Analog Devices, Inc., mixer cells and a 90° hybrid. The HMC521ACHIPS operates over a -40°C to +85°C temperature range.

## [HMC521ACHIPS](https://www.analog.com/HMC521ACHIPS?doc=HMC521ACHIPS.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 4                      |
| Thermal Resistance ...................................................................... 4                 |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |
| Interface Schematics .................................................................... 5                 |
| Typical Performance Characteristics ............................................. 6                         |
| Downconverter Performance, IF = 100 MHz........................... 6                                        |
| Downconverter Performance, IF = 3500 MHz....................... 10                                          |
| Upconverter Performance, IF = 100 MHz.............................. 12                                      |

## REVISION HISTORY

10/2019-Revision 0: Initial Version

| Upconverter Performance, IF = 3500 MHz............................                            |   14 |
|-----------------------------------------------------------------------------------------------|------|
| IF Bandwidth Downconverter..................................................                  |   18 |
| Spurious and Harmonics Performance...................................                         |   20 |
| Theory of Operation......................................................................     |   21 |
| Applications Information..............................................................        |   22 |
| Typical Application Circuit.......................................................            |   22 |
| Mounting and Bonding Techniques ........................................                      |   23 |
| Handling Precautions ................................................................         |   23 |
| Mounting..................................................................................... |   23 |
| Wire Bonding..............................................................................    |   23 |
| Assembly Diagram.....................................................................         |   24 |
| Outline Dimensions.......................................................................     |   25 |
| Ordering Guide ..........................................................................     |   25 |

## SPECIFICATIONS

TA = 25°C, intermediate frequency (IF) = 100 MHz, and LO = 15 dBm on the upper sideband. All measurements performed as a downconverter, with the chip mounted in a 50 Ω test fixture and external hybrid, unless otherwise noted.

Table 1.

| Parameter                           | Test Conditions/Comments                     | Min   |   Typ |   Max | Unit    |
|-------------------------------------|----------------------------------------------|-------|-------|-------|---------|
| FREQUENCY RANGE                     |                                              |       |       |       |         |
| RF Pad                              |                                              | 8.5   |       |  13.5 | GHz     |
| IFx Pad                             |                                              | DC    |       |   3.5 | GHz     |
| LO Pad                              |                                              | 8.5   |       |  13.5 | GHz     |
| LOAMPLITUDE                         |                                              | 13    |    15 |    19 | dBm     |
| 8.5 GHzTO 13.5 GHz PERFORMANCE      |                                              |       |       |       |         |
| Downconverter                       | Taken as image reject mixer                  |       |       |       |         |
| Conversion Loss                     |                                              |       |     7 |   8.5 | dB      |
| Noise Figure                        | Taken with LO amplifier                      |       |     8 |       | dB      |
| Image Rejection                     |                                              | 17.5  |    21 |       | dBc     |
| Input Third-Order Intercept (IP3)   |                                              | 16    |    19 |       | dBm     |
| Input 1 dB Compression Point (P1dB) |                                              |       |     8 |       | dBm     |
| Upconverter                         | Taken as a single sideband upconverter mixer |       |       |       |         |
| Conversion Loss                     |                                              |       |     4 |       | dB      |
| Single Sideband Rejection           |                                              |       |    21 |       | dBc     |
| Input IP3                           |                                              |       |    17 |       | dBm     |
| Isolation                           | Taken without external 90° hybrid            |       |       |       |         |
| RF to IFx                           |                                              |       |    42 |       | dB      |
| LO to RF                            |                                              | 36    |    38 |       | dB      |
| LO to IFx                           |                                              |       |    18 |       | dB      |
| Balance                             | Taken without external 90° hybrid            |       |       |       |         |
| Amplitude Balance                   |                                              |       |   0.1 |       | dB      |
| Phase Balance                       |                                              |       |     5 |       | Degrees |
| 10.5 GHzTO 11.7 GHz PERFORMANCE     |                                              |       |       |       |         |
| Downconverter                       |                                              |       |       |       |         |
| Conversion Loss                     |                                              |       |   6.5 |     8 | dB      |
| Noise Figure                        | Taken with LO amplifier                      |       |     7 |       | dB      |
| Image Rejection                     |                                              | 19    |    22 |       | dBc     |
| Input IP3                           |                                              | 16    |    19 |       | dBm     |
| Input P1dB                          |                                              |       |     7 |       | dBm     |
| Upconverter                         | Taken as a single sideband upconverter mixer |       |       |       |         |
| Conversion Loss                     |                                              |       |     4 |       | dB      |
| Single Sideband Rejection           |                                              |       |    23 |       | dBc     |
| Input IP3                           |                                              |       |    18 |       | dBm     |
| Isolation                           | Taken without external 90° hybrid            |       |       |       |         |
| RF to IFx                           |                                              |       |    43 |       | dB      |
| LO to RF                            |                                              | 35    |    38 |       | dB      |
| LO to IFx                           |                                              |       |    18 |       | dB      |
| Balance                             | Taken without external 90° hybrid            |       |       |       |         |
| Amplitude Balance                   |                                              |       |   0.1 |       | dB      |
| Phase Balance                       |                                              |       |   2.5 |       | Degrees |

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                                                     | Rating          |
|-------------------------------------------------------------------------------|-----------------|
| RF Input Power                                                                | 20dBm           |
| LO Input Power                                                                | 27dBm           |
| IFx Input Power                                                               | 20dBm           |
| IFx Source and Sink Current                                                   | 2mA             |
| Junction Temperature (T J )                                                   | 175°C           |
| Lifetime at MaximumT J                                                        | >1 × 10 6 hours |
| Continuous Power Dissipation, P DISS (T A =85°C, Derates6.22mW/°CAbove85°C) 1 | 608mW           |
| Temperature Range                                                             |                 |
| Operating                                                                     | -40°C to +85°C  |
| Storage                                                                       | -65°C to +150°C |
| Lead                                                                          | -65°C to +150°C |
| Electrostatic Discharge (ESD) Sensitivity                                     |                 |
| Human Body Model (HBM)                                                        | 250V            |
| Field Induced Charged Device Model (FICDM)                                    | 500V            |

1 PDISS is a theoretical number calculated by (TJ - 85°C)/θJC.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| C-11-2 1      |    148 | °C/W   |

1  Test Condition 1: JEDEC Standard JESD51-2.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 4. Pad Function Descriptions

| Pad No.           | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 6, 8, and 9 | GND        | Grounds. These pads must be connected toRF anddcground. See Figure 3for the GNDinterface schematic.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2                 | RF         | Radio Frequency Port. This pad is ac-coupledandmatchedto50Ω.SeeFigure 6for the RF interface schematic.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 4, 10             | IF1        | First Quadrature Intermediate Frequency Ports. These pads are dc-coupled. For applications not requiring operation to dc, dc block these ports externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, these pads must not source or sink more than 2 mAof current. Otherwise, die malfunction or die failure may result. Users can select either of the IF1 pads. However, the unused IF1 pad must be left open. See Figure 5 for the IFx interface schematic. |
| 5, 11             | IF2        | Second Quadrature Intermediate Frequency Ports. These pads are dc-coupled. For applications not requiring operation to dc, dc block these ports externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, these pads must not source or sink more than2mA of current. Otherwise, die malfunction or die failure may result. Users can select either of the IF2 pads. However, the unused IF2 pad must be left open. See Figure 5 for the IFx interface schematic. |
| 7                 | LO         | Local Oscillator Port. This pad is ac-coupled and matchedto50Ω.SeeFigure 4for the LOinterface schematic.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Die bottom        | GND        | Ground. The diebottommustbe attached directly to the groundplane eutectically or with conductive epoxy.                                                                                                                                                                                                                                                                                                                                                                                                                      |

## INTERFACE SCHEMATICS

Figure 4. LO Interface Schematic

<!-- image -->

<!-- image -->

Figure 6. RF Interface Schematic

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE, IF = 100 MHz

Upper Sideband (Low-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 8. Image Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 9. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 11. Image Rejection vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 12. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 13. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 14. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 15. Noise Figure vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 16. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 17. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 18. Noise Figure vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 19. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 20. Image Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 21. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 22. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 23. Image Rejection vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 24. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 25. Input IP2 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 26. Input P1dB vs. RF Frequency at Various Temperatures, LO = 15 dBm

Figure 27. Noise Figure vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 28. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

21137-029

Figure 29. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

21137-030

Figure 30. Noise Figure vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE, IF = 3500 MHz

## Upper Sideband (Low-Side LO)

<!-- image -->

21137-031

Figure 31. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 32. Image Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 33. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 34. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 35. Image Rejection vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 36. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 37. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 38. Image Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 39. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 40. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 41. Image Rejection vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 42. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE, IF = 100 MHz

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 43. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 44. Sideband Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 45. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 46. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 47. Sideband Rejection vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 48. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 49. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 50. Sideband Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 51. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 52. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 53. Sideband Rejection vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 54. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE, IF = 3500 MHz

## Upper Sideband (Low-Side LO)

<!-- image -->

Figure 55. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 56. Sideband Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 57. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 58. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 59. Sideband Rejection vs. RF Frequency at Various LO Power Levels TA = 25°C

<!-- image -->

Figure 60. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 61. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 62. Sideband Rejection vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 63. Input IP3 vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 64. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 65. Sideband Rejection vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 66. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Isolation and Return Loss

<!-- image -->

Figure 67. LO to RF Isolation vs. RF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 68. LO to IF Isolation vs. RF Frequency at IF1 or IF2 and Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 69. RF to IF Isolation vs. RF Frequency at IF1 or IF2 and Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 70. LO to RF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 71. LO to IF Isolation vs. RF Frequency at IF1 or IF2 and Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 72. RF to IF Isolation vs. RF Frequency at IF1 or IF2 and Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 73. LO Return Loss vs. LO Frequency at LO = 13 dBm, TA = 25°C

Figure 74. RF Return Loss vs. RF Frequency at Various LO Power Levels, TA = 25°C, LO = 10.5 GHz

<!-- image -->

Figure 75. IF Return Loss vs. IF Frequency at IF1 or IF2 and Various LO Power Levels, TA = 25°C, LO = 10.5 GHz

<!-- image -->

## IF BANDWIDTH DOWNCONVERTER

## Upper Sideband, LO Frequency = 8.5 GHz

<!-- image -->

Figure 76. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 77. Image Rejection vs. IF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 78. Input IP3 vs. IF Frequency at Various Temperatures, LO = 15 dBm

<!-- image -->

Figure 79. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

Figure 80. Image Rejection vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 81. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Amplitude and Phase Balance, Downconverter: IF = 100 MHz

<!-- image -->

Figure 82. Amplitude Balance vs. RF Frequency at Various LO Powers, Upper Sideband, TA = 25°C

<!-- image -->

Figure 83. Phase Balance vs. RF Frequency at Various LO Powers, Upper Sideband, TA = 25°C

Figure 84. Amplitude Balance vs. RF Frequency at Various LO Powers, Lower Sideband, TA = 25°C

<!-- image -->

Figure 85. Phase Balance vs. RF Frequency at Various LO Powers, Lower Sideband, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE

Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

## LO Harmonics

LO = 15 dBm, all values in dBc are below input LO level and are measured at the RF port.

## Table 5. LO Harmonics at RF

|                    |   N×LOSpuratRFPort |   N×LOSpuratRFPort |   N×LOSpuratRFPort | N×LOSpuratRFPort   |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| LO Frequency (GHz) |                  1 |                  2 |                  3 | 4                  |
| 6.5                |                 55 |                 40 |                 72 | 61                 |
| 7.5                |                 55 |                 37 |                 52 | 62                 |
| 8.5                |                 45 |                 39 |                 51 | 67                 |
| 9.5                |                 41 |                 51 |                 46 | 61                 |
| 10.5               |                 43 |                 57 |                 54 | 50                 |
| 11.5               |                 43 |                 57 |                 68 | 50                 |
| 12.5               |                 46 |                 59 |                 65 | 53                 |
| 13.5               |                 49 |                 60 |                 63 | N/A                |
| 14.5               |                 51 |                 57 |                 53 | N/A                |
| 15.5               |                 38 |                 66 |                 52 | N/A                |

LO = 15 dBm, all values in dBc are below input LO level and are measured at the IF ports.

## Table 6. LO Harmonics at IF1

|                    |   N×LOSpuratIF1 Port |   N×LOSpuratIF1 Port |   N×LOSpuratIF1 Port | N×LOSpuratIF1 Port   |
|--------------------|----------------------|----------------------|----------------------|----------------------|
| LO Frequency (GHz) |                    1 |                    2 |                    3 | 4                    |
| 6.5                |                   24 |                   63 |                   51 | 92                   |
| 7.5                |                   22 |                   53 |                   62 | 78                   |
| 8.5                |                   21 |                   56 |                   59 | 91                   |
| 9.5                |                   23 |                   57 |                   53 | 84                   |
| 10.5               |                   23 |                   50 |                   71 | 91                   |
| 11.5               |                   25 |                   59 |                   64 | 90                   |
| 12.5               |                   25 |                   56 |                   52 | 87                   |
| 13.5               |                   25 |                   57 |                   55 | N/A                  |
| 14.5               |                   26 |                   76 |                   67 | N/A                  |
| 15.5               |                   26 |                   87 |                   67 | N/A                  |

## Table 7. LO Harmonics at IF2

|                    |   N×LOSpuratIF2 Port |   N×LOSpuratIF2 Port |   N×LOSpuratIF2 Port | N×LOSpuratIF2 Port   |
|--------------------|----------------------|----------------------|----------------------|----------------------|
| LO Frequency (GHz) |                    1 |                    2 |                    3 | 4                    |
| 6.5                |                   26 |                   61 |                   57 | 96                   |
| 7.5                |                   23 |                   53 |                   62 | 85                   |
| 8.5                |                   21 |                   57 |                   49 | 99                   |
| 9.5                |                   25 |                   65 |                   61 | 85                   |
| 10.5               |                   25 |                   60 |                   78 | 85                   |
| 11.5               |                   30 |                   64 |                   65 | 84                   |
| 12.5               |                   29 |                   59 |                   57 | 91                   |
| 13.5               |                   30 |                   59 |                   56 | N/A                  |
| 14.5               |                   29 |                   73 |                   62 | N/A                  |
| 15.5               |                   28 |                   89 |                   66 | N/A                  |

## M × N Spurious Outputs

## Downconverter, Upper Sideband

Spur values are (M × RF) - (N × LO). RF = 10.6 GHz at -10 dBm, and LO = 10.5 GHz at +15 dBm.

|    | N×LO   | N×LO   | N×LO   |   N×LO | N×LO   | N×LO   |
|----|--------|--------|--------|--------|--------|--------|
|    | 0      | 1      | 2      |      3 | 4      | 5      |
|  0 | N/A    | -9     | +11    |    +16 | N/A    | N/A    |
|  1 | +35    | 0      | +39    |    +41 | +46    | N/A    |
|  2 | +67    | +58    | +60    |    +56 | +71    | +43    |
|  3 | +51    | +71    | +76    |    +75 | +76    | +71    |
|  4 | N/A    | N/A    | +69    |    +73 | +86    | +75    |
|  5 | N/A    | N/A    | N/A    |    +70 | +75    | +87    |

## Upconverter, Upper Sideband

Spur values are (M × IF input (IFIN)) + (N × LO). IFIN = 100 MHz at -10 dBm, and LO = 10.5 GHz at +15 dBm.

|      |    | N×LO   |   N×LO |   N×LO | N×LO   |
|------|----|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 | 3      |
| M×IF | +5 | >90    |     82 |     79 | N/A    |
| M×IF | +4 | >90    |     81 |     76 | N/A    |
| M×IF | +3 | >90    |     77 |     78 | 73     |
| M×IF | +2 | >90    |     46 |     64 | 68     |
| M×IF | +1 | 90     |      0 |     33 | 63     |
|      |  0 | N/A    |     10 |     24 | 23     |
|      | -1 | 89     |     24 |     32 | 40     |
|      | -2 | >90    |     55 |     65 | 66     |
|      | -3 | >90    |     60 |     75 | 72     |
|      | -4 | >90    |     81 |     80 | 74     |
|      | -5 | >90    |     85 |     80 | 73     |

## THEORY OF OPERATION

The HMC521ACHIPS is a passive, compact, I/Q MMIC mixer that can be used either as an image reject mixer for receiver operations or as a single-sideband upconverter for transmitter operations. With a RF and LO range of 8.5 GHz to 13.5 GHz, and an IF bandwidth of dc to 3.5 GHz, the HMC521ACHIPS is ideal for applications requiring excellent RF performance, and a simple design with fewer components. A single HMC521ACHIPS can replace multiple narrow-band mixers in a design. The inherent I/Q architecture of the HMC521ACHIPS offers exceptional image rejection and thereby eliminates the need for expensive filtering for unwanted sidebands. The mixer also provides high LO to RF isolation (&gt;35 dB) and reduces the effect of LO leakage to ensure signal integrity. Being a passive mixer, the HMC521ACHIPS does not require any dc power sources. The device offers a lower noise figure compared to an active mixer, ensuring outstanding dynamic range for high performance and precision applications. The HMC521ACHIPS is fabricated on a GaAs, MESFET process and uses Analog Devices mixer cells and a 90° hybrid. The HMC521ACHIPS operates over a -40°C to +85°C temperature range.

The IF1 and IF2 pads of the HMC521ACHIPS can be connected either on the south side or north side of the chip. Leave unconnected IF1 and IF2 ports open, that is, unconnected. See the Mounting and Bonding Techniques section for more information.

An external 90° hybrid is required to combine the quadrature outputs for downconversion or to split the IF input to quadrature inputs to the IF1 and IF2 pads for upconversion. See the Typical Application Circuit section for more information.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

Figure 86 shows the typical application circuit for the HMC521ACHIPS. The HMC521ACHIPS is a passive device and does not require any external components. The LO and RF pads are internally ac-coupled. The IFx pads are internally dc-coupled. For applications not requiring operation to dc, dc block these ports externally using a series capacitor of a value chosen to pass the necessary IF frequency range. When IF operation to dc is required, do not exceed the IFx source and sink current rating specified in the Absolute Maximum Ratings section.

To select the upper sideband when using the HMC521ACHIPS as an upconverter, connect the IF1 pad to the 90° port of the hybrid and connect the IF2 pad to the 0° port of the hybrid. To select the lower sideband, connect the IF1 pad to the 0° port of the hybrid and the IF2 pad to the 90° port of the hybrid. The input is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

To select the upper sideband (low-side LO) when using as downconverter, connect the IF1 pad to the 0° port of the hybrid and connect the IF2 pad to the 90° port of the hybrid. To select the lower sideband (high-side LO), connect the IF1 pad to the 90° port of the hybrid and connect the IF2 pad to the 0° port of the hybrid. The output is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

21137 -086

Figure 86. Typical Application

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005') thick alumina thin film substrates are recommended (see Figure 87). If using 0.254 mm (0.010') thick alumina thin film substrates, raise the die 0.150 mm (0.006') so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.102 mm (0.004') thick die to a 0.150 mm (0.006') thick molybdenum heat spreader (moly tab) which is then attached to the ground plane (see Figure 88). Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm (0.003').

Figure 87. Bonding RF Pads to 5 mil Substrate

<!-- image -->

Figure 88. Bonding RF Pads to 10 mil Substrate

<!-- image -->

## HANDLING PRECAUTIONS

Follow the precautions detailed in the Storage section, the Cleanliness section, the Static Sensitivity section, the Transients section, and the General Handling section to avoid permanent damage.

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

A 80/20 gold and tin preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90/10 nitrogen(N)/hydrogen (H) gas is applied, the tool tip temperature must be 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 seconds. No more than 3 seconds of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip when the chip is placed into position. Cure epoxy per the schedule of the manufacturer.

## WIRE BONDING

Ball or wedge bond with 0.025 mm (0.00098') diameter pure gold wire is recommended. Thermosonic wire bonding with a nominal stage temperature of 150°C and a ball bonding force of 40 grams to 50 grams or a wedge bonding force of 18 grams to 22 grams is recommended. Use the minimum level of ultrasonic energy to achieve reliable wire bonds. Wire bonds must started on the chip and terminate on the package or substrate. All bonds must be as short as possible &lt;0.31 mm (0.01220').

## ASSEMBLY DIAGRAM

The assembly diagram of the HMC521ACHIPS is shown in Figure 89.

Figure 89. Evaluation PCB Top Layer

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

Figure 90. 11-Pad Bare Die [CHIP] (C-11-2) Dimensions shown in millimeter

| Model 1      | Temperature Range   | Package Description    | Package Option   |
|--------------|---------------------|------------------------|------------------|
| HMC521ACHIPS | -40°C to +85°C      | 11-Pad Bare Die [CHIP] | C-11-2           |
| HMC521A-SX   | -40°C to +85°C      | 11-Pad Bare Die [CHIP] | C-11-2           |

## ORDERING GUIDE

1  The HMC521ACHIPS and HMC521A-SX are RoHS compliant parts.

<!-- image -->