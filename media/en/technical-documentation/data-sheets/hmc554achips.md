<!-- lastmod 2019-11-04 -->
<!-- image -->

Data Sheet

## FEATURES

Conversion loss of up to 8.5 dB (typical) LO to RF Isolation: 38 dB (typical) Input IP3 of up to 20 dBm (typical) RoHS compliant, 7-pad, bare die CHIP

## APPLICATIONS

Microwave and very small aperture terminal (VSAT) radios Test equipment Military electronic warfare (EW), electronic countermeasure (ECM), and command, control, communications and intelligence (C3I)

## GENERAL DESCRIPTION

The HMC554ACHIPS is a general-purpose, double-balanced mixer that can be used as an upconverter or a downconverter between 10 GHz and 20 GHz. This mixer is fabricated in a gallium arsenide (GaAs), metal semiconductor field effect transistor (MESFET) process and requires no external

## 10 GHz to 20 GHz, GaAs, MMIC, Double-Balanced Mixer

[HMC554ACHIPS](https://www.analog.com/HMC554A-DIE?doc=HMC554ACHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

components or matching circuitry. The HMC554ACHIPS optimized balun structures provide high local oscillator (LO) to RF isolation and LO to intermediate frequency (IF) isolation, 38 dB and 52 dB, respectively.

## [HMC554ACHIPS](https://www.analog.com/HMC554A-DIE?doc=HMC554ACHIPS.pdf)

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
| Interface Schematics..................................................................... 5                 |
| Typical Performance Characteristics ............................................. 6                         |
| Downconverter Performance, IF = 100 MHz........................... 6                                        |
| Downconverter Performance, IF= 3000 MHz.......................... 10                                        |
| Upconverter Performance, IF = 100 MHz.............................. 13                                      |
| Upconverter Performance, IF = 3000 MHz............................ 16                                       |

## REVISION HISTORY

10/2019-Revision 0: Initial Version

| Isolation and Return Loss .........................................................           |   19 |
|-----------------------------------------------------------------------------------------------|------|
| IF Bandwidth-Downconverter...............................................                     |   21 |
| Spurious and Harmonics Performance...................................                         |   23 |
| Theory of Operation ......................................................................    |   24 |
| Applications Information..............................................................        |   25 |
| Typical Application Circuit.......................................................            |   25 |
| Mounting and Bonding Techniques ........................................                      |   26 |
| Handling Precautions ................................................................         |   26 |
| Mounting..................................................................................... |   26 |
| Wire Bonding..............................................................................    |   26 |
| Assembly Diagram.....................................................................         |   27 |
| Outline Dimensions.......................................................................     |   28 |
| Ordering Guide ..........................................................................     |   28 |

## SPECIFICATIONS

TA = 25°C, IF = 100 MHz, and LO = 13 dBm for upper sideband. All measurements were performed as a downconverter, unless otherwise noted, on the evaluation printed circuit board (PCB).

Table 1.

| Parameter                           | Test Conditions/Comments                    | Min   |   Typ |   Max | Unit   |
|-------------------------------------|---------------------------------------------|-------|-------|-------|--------|
| FREQUENCY                           |                                             |       |       |       |        |
| RF Pad                              |                                             | 10    |       |    20 | GHz    |
| IF Pad                              |                                             | DC    |       |     6 | GHz    |
| LO Pad                              |                                             | 10    |       |    20 | GHz    |
| LO AMPLITUDE                        |                                             | 9     |    13 |    15 | dBm    |
| 10 GHz to 20 GHz PERFORMANCE        |                                             |       |       |       |        |
| Downconverter                       |                                             |       |       |       |        |
| Conversion Loss                     |                                             |       |   8.5 |    10 | dB     |
| Single Sideband Noise Figure        | Measurementtaken with external LO amplifier |       |   8.5 |       | dB     |
| Input Third-Order Intercept (IP3)   | 1 MHz separation between inputs             | 17    |    20 |       | dBm    |
| Input 1 dB Compression Point (P1dB) |                                             |       |    12 |       | dBm    |
| Input Second-Order Intercept (IP2)  | 1 MHz separation between inputs             |       |    57 |       | dBm    |
| Upconverter                         |                                             |       |       |       |        |
| Conversion Loss                     |                                             |       |   7.5 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs             |       |    19 |       | dBm    |
| Input P1dB                          |                                             |       |   8.5 |       | dBm    |
| Isolation                           |                                             |       |       |       |        |
| RF to IF                            |                                             | 28    |    40 |       | dB     |
| LO to RF                            |                                             | 30    |    38 |       | dB     |
| LO to IF                            |                                             | 32    |    52 |       | dB     |
| 12 GHz to 16 GHz PERFORMANCE        |                                             |       |       |       |        |
| Downconverter                       |                                             |       |       |       |        |
| Conversion Loss                     |                                             |       |     8 |     9 | dB     |
| Single Sideband Noise Figure        | Measurementtaken with external LO amplifier |       |     8 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs             | 18    |    20 |       | dBm    |
| Input P1dB                          |                                             |       |    11 |       | dBm    |
| Input IP2                           | 1 MHz separation between inputs             |       |    57 |       | dBm    |
| Upconverter                         |                                             |       |       |       |        |
| Conversion Loss                     |                                             |       |     7 |       | dB     |
| Input IP3                           | 1 MHz separation between inputs             |       |  18.5 |       | dBm    |
| Input P1dB                          |                                             |       |     9 |       | dBm    |
| Isolation                           |                                             |       |       |       |        |
| RF to IF                            |                                             | 38    |    43 |       | dB     |
| LO to RF                            |                                             | 33    |    38 |       | dB     |
| LO to IF                            |                                             | 45    |    62 |       | dB     |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                    | Rating           |
|------------------------------------------------------------------------------|------------------|
| RF Input Power                                                               | 25 dBm           |
| LO Input Power                                                               | 26 dBm           |
| IF Input Power                                                               | 25 dBm           |
| IF Source/Sink Current                                                       | 3mA              |
| Reflow Temperature                                                           | 260 °C           |
| Junction Temperature                                                         | 175°C            |
| Continuous Power Dissipation (P DISS ) (T A =85°C, Derate 3.7mW/°CAbove85°C) | 333mW            |
| Operating Temperature Range                                                  | -40°C to +85°C   |
| Storage Temperature Range                                                    | -65°C to +150°C  |
| Electrostatic Discharge (ESD) Sensitivity                                    |                  |
| HumanBodyModel(HBM)                                                          | 250 V, Class 1A  |
| Field Induced Charged DeviceModel(FICDM)                                     | 1250 V, Class IV |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 3. Pad Function Descriptions

| Pad No.    | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                     |
|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 5, 7 | GND        | Ground. These pads must be connected to RF and dc ground.                                                                                                                                                                                                                                                                                       |
| 2          | LO         | LO Port. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                                            |
| 3          | RF         | RF Port. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                                            |
| 6          | IF         | IF Port. This pad is dc-coupled. For applications not requiring operation to dc, dc block this port externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, this pad must not source or sink more than 3 mAof current because die malfunction and possible die failure may result. |
| Die Bottom | GND        | Ground.Thediebottom must beattached directly to the ground plane eutectically or with conductive epoxy.                                                                                                                                                                                                                                         |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 6. RF Interface Schematic

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE, IF = 100 MHz

Upper Sideband (Low-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 9. Noise Figure vs. RF Frequency at Various Temperatures, LO = 13 dBm, Measurement Taken with External LO Amplifier

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 11. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 12. Noise Figure vs. RF Frequency at Various LO Power Levels, TA = 25°C, Measurement Taken with External LO Amplifier

<!-- image -->

<!-- image -->

Figure 13. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 15. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 16. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 17. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 18. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 19. Noise Figure vs. RF Frequency at Various Temperatures, LO = 13 dBm, Measurement Taken with External LO Amplifier

<!-- image -->

Figure 20. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 21. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 22. Noise Figure vs. RF Frequency at Various LO Power Levels, TA = 25°C, Measurement Taken with External LO Amplifier

<!-- image -->

## Data Sheet

Figure 23. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 24. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE, IF = 3000 MHz Upper Sideband (Low-Side LO)

<!-- image -->

Figure 25. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 26. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 27. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 28. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 29. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 30. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 31. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 32. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 33. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 34. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 35. Input IP2 vs. RF Frequency at Various LO Power Levels, LO = 13 dBm

<!-- image -->

Figure 36. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 37. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 38. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE, IF = 100 MHz Upper Sideband (Low-Side LO)

<!-- image -->

Figure 39. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 40. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 41. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 42. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 43. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 44. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 45. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 46. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 47. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 48. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 49. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 50. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 51. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 52. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE, IF = 3000 MHz Upper Sideband (Low-Side LO)

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

Figure 59. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 60. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 61. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 62. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 63. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 64. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 65. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 66. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## ISOLATION AND RETURN LOSS

<!-- image -->

Figure 67. LO to RF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 68. LO to IF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 69. RF to IF Isolation vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 70. LO to RF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 71. LO to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 72. RF to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 73. LO Return Loss vs. LO Frequency at LO = 13 dBm, TA = 25°C

Figure 74. RF Return Loss vs. RF Frequency at Various LO Power Levels, TA = 25°C, LO = 15 GHz

<!-- image -->

Figure 75. IF Return Loss vs. IF Frequency at Various LO Power Levels, TA = 25°C, LO = 15 GHz

<!-- image -->

## IF BANDWIDTH-DOWNCONVERTER Upper Sideband, LO Frequency = 12 GHz

<!-- image -->

Figure 76. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 77. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 78. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 79. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband, LO Frequency = 19 GHz

<!-- image -->

Figure 80. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 81. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 82. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 83. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE

Mixer spurious products are measured in dBc from the IF output power level. N/A means not applicable.

## LO Harmonics

LO = 13 dBm, all values in dBc are below the input LO level and are measured at the RF port.

## Table 4. LO Harmonics at RF

|                    |   N×LOSpuratRFPort |   N×LOSpuratRFPort | N×LOSpuratRFPort   | N×LOSpuratRFPort   |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| LO Frequency (GHz) |                  1 |                  2 | 3                  | 4                  |
| 12                 |                 34 |                 36 | 68                 | 48                 |
| 13                 |                 35 |                 44 | 53                 | N/A                |
| 15                 |                 32 |                 43 | 48                 | N/A                |
| 16                 |                 32 |                 50 | 47                 | N/A                |
| 18                 |                 30 |                 55 | N/A                | N/A                |
| 19                 |                 32 |                 45 | N/A                | N/A                |
| 21                 |                 33 |                 41 | N/A                | N/A                |

LO = 13 dBm, all values in dBc are below the input LO level and are measured at the IF port.

## Table 5. LO Harmonics at IF

|                    |   N×LOSpuratIFPort |   N×LOSpuratIFPort | N×LOSpuratIFPort   | N×LOSpuratIFPort   |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| LO Frequency (GHz) |                  1 |                  2 | 3                  | 4                  |
| 12                 |                 55 |                 64 | 57                 | 76                 |
| 13                 |                 58 |                 61 | 55                 | N/A                |
| 15                 |                 50 |                 63 | 51                 | N/A                |
| 16                 |                 46 |                 67 | 50                 | N/A                |
| 18                 |                 31 |                 62 | N/A                | N/A                |
| 19                 |                 37 |                 58 | N/A                | N/A                |
| 21                 |                 45 |                 56 | N/A                | N/A                |

## M × N Spurious Outputs

## Downconverter, Upper Sideband

Spur values are (M × RF) - (N × LO).

RF = 15.1 GHz at -10 dBm, and LO = 15 GHz at +13 dBm.

|      |    | N×LO   | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 |      3 | 4      | 5      |
| M×RF |  0 | N/A    | 24     |     36 |     23 | N/A    | N/A    |
| M×RF |  1 | 33     | 0      |     54 |     57 | 52     | N/A    |
| M×RF |  2 | 72     | 81     |     60 |     81 | 73     | 62     |
| M×RF |  3 | 60     | 73     |     83 |     72 | 83     | 71     |
| M×RF |  4 | N/A    | 62     |     71 |     81 | >90    | 78     |
| M×RF |  5 | N/A    | N/A    |     61 |     74 | 81     | >90    |

## Upconverter, Upper Sideband

Spur values are (M × IF) + (N × LO).

IF = 100 MHz at -10 dBm, and LO = 15 GHz at +13 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |
| M×IF | -5 | >90    |     89 |     77 |     67 |
| M×IF | -4 | >90    |     83 |     77 |     68 |
| M×IF | -3 | 79     |     52 |     67 |     53 |
| M×IF | -2 | 87     |     67 |     65 |     50 |
| M×IF | -1 | 33     |      0 |     30 |     12 |
| M×IF |  0 | N/A    |     14 |     20 |     24 |
| M×IF | +1 | 33     |      0 |     30 |     11 |
| M×IF | +2 | 85     |     55 |     66 |     48 |
| M×IF | +3 | 78     |     52 |     67 |     50 |
| M×IF | +4 | >90    |     86 |     79 |     64 |
| M×IF | +5 | >90    |     87 |     76 |     63 |

## THEORY OF OPERATION

The HMC554ACHIPS is a general-purpose, double balanced mixer that can be used as an upconverter or a downconverter from 10 GHz to 20 GHz.

When used as a downconverter, the HMC554ACHIPS downconverts RF between 10 GHz and 20 GHz to IF between dc and 6 GHz.

When used as an upconverter, the mixer upconverts IF between dc and 6 GHz to RF between 10 GHz and 20 GHz.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

Figure 84 shows the typical application circuit for the HMC554ACHIPS. The HMC554ACHIPS is a passive device that does not require any external components. The IF pad is internally dc-coupled, and the RF and LO pads are internally ac-coupled. When IF operation to dc is not required, it is recommended to use an external series capacitor of a value chosen to pass the necessary IF frequency range. When IF operation to dc is required, do not exceed the IF source and sink current rating specified in the Absolute Maximum Ratings section.

22421-090

Figure 84. Typical Application Circuit

<!-- image -->

## [HMC554ACHIPS](https://www.analog.com/HMC554A-DIE?doc=HMC554ACHIPS.pdf)

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005') thick, alumina thin film substrates are recommended (see Figure 85). If using 0.254 mm (0.010') thick, alumina thin film substrates, raise the die 0.150 mm (0.006') so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.102 mm (0.004') thick die to a 0.150 mm (0.006') thick molybdenum heat spreader (moly tab) which is then attached to the ground plane (see Figure 86). Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm (0.003').

Figure 85. Bonding RF Pads to 0.127 mm Substrate

<!-- image -->

Figure 86. Bonding RF Pads to 0.254 mm Substrate

<!-- image -->

## HANDLING PRECAUTIONS

Follow the precautions in the Storage section, the Cleanliness section, the Static Sensitivity section, the Transients section, and the General Handling section to avoid permanent damage to the HMC554ACHIPS.

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

Ball or wedge bond with 0.025 mm (0.00098') diameter, pure gold wire is recommended. Thermosonic wire bonding with a nominal stage temperature of 150°C, and either a ball bonding force of 40 grams to 50 grams or a wedge bonding force of 18 grams to 22 grams is recommended. Use the minimum level of ultrasonic energy to achieve reliable wire bonds. Wire bonds must start on the chip and terminate on the package or substrate. All bonds must be as short as possible at &lt;0.31 mm (0.01220').

## ASSEMBLY DIAGRAM

The assembly diagram of the HMC554ACHIPS is shown in Figure 87.

<!-- image -->

Figure 87. Evaluation PCB Top Layer

<!-- image -->

22421-093

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 88. 7-Pad Bare Die [CHIP] (C-7-11) Dimensions shown in millimeters

| Model 1    | Temperature Range   | Package Description   | Package Option   |
|------------|---------------------|-----------------------|------------------|
| HMC554A    | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-11           |
| HMC554A-SX | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-11           |

## ORDERING GUIDE

1  The HMC554A and HMC554A-SX are RoHS compliant parts.

<!-- image -->

09-19-2019-A