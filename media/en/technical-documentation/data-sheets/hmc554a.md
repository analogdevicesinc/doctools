<!-- lastmod 2019-10-29 -->
<!-- image -->

Data Sheet

## FEATURES

Conversion loss: 8.5 dB LO to RF isolation: 37 dB Input IP3: 20 dBm RoHS compliant, 2.90 mm × 2.90 mm, 12-terminal LCC package

## APPLICATIONS

Microwave and very small aperture terminal (VSAT) radios Test equipment

Military electronic warfare (EW); electronic countermeasure

(ECM); and command, control, communications and

intelligence (C3I)

## GENERAL DESCRIPTION

The HMC554ALC3B is a general-purpose, double balanced mixer in a leadless RoHS compliant leadless chip carrier (LCC) package that can be used as an upconverter or downconverter between 10 GHz and 20 GHz. This mixer is fabricated in a gallium arsenide (GaAs) metal semiconductor field effect transistor (MESFET) process and requires no external

## 10 GHz to 20 GHz, GaAs, MMIC, Double Balanced Mixer

[HMC554ALC3B](https://www.analog.com/HMC554ALC3B?doc=HMC554A.pdf)

## FUNCTIONAL BLOCK DIAGRAM HMC554ALC3B

Figure 1.

<!-- image -->

components or matching circuitry. The HMC554ALC3B provides excellent local oscillator (LO) to RF and LO to intermediate frequency (IF) isolation due to optimized balun structures. The RoHS compliant HMC554ALC3B eliminates the need for wire bonding and is compatible with high volume surface-mount manufacturing techniques.

## [HMC554ALC3B](https://www.analog.com/HMC554ALC3B?doc=HMC554A.pdf)

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
| Interface Schematics..................................................................... 5                 |
| Typical Performance Characteristics ............................................. 6                         |
| Downconverter Performance, IF = 100 MHz........................... 6                                        |

## REVISION HISTORY

## 10/2019-Rev. 0 to Rev. A

Changes to 10 GHz to 20 GHz Performance, Downconverter,

Input 1 dB Compression Point Parameter, Table 1 and 12 GHz to

16 GHz Performance, Downconverter, Input 1 dB Compression

Point Parameter, Table 1 .................................................................... 3

Changes to Figure 13 and Figure 15  ............................................... 7

Changes to Figure 27 and Figure 30  ............................................. 10

4/2018-Revision 0: Initial Version

| Downconverter Performance, IF = 3000 MHz......................                             |   10 |
|--------------------------------------------------------------------------------------------|------|
| Upconverter Performance, IF IN = 100 MHz...........................                        |   13 |
| Upconverter Performance, IF IN = 3000 MHz.........................                         |   16 |
| Isolation and Return Loss .........................................................        |   19 |
| IF Bandwidth-Downconverter...............................................                  |   21 |
| Spurious and Harmonics Performance...................................                      |   23 |
| Theory of Operation ...................................................................... |   24 |
| Applications Information..............................................................     |   25 |
| Typical Application Circuit.......................................................         |   25 |
| Evaluation PCB Information ....................................................            |   25 |
| Outline Dimensions.......................................................................  |   26 |
| Ordering Guide ..........................................................................  |   26 |

## SPECIFICATIONS

TA = 25°C, IF = 100 MHz, LO = 13 dBm, upper side band. All measurements performed as a downconverter, unless otherwise noted, on the evaluation printed circuit board (PCB).

Table 1.

| Parameter                    | Symbol   | Min   |   Typ |   Max | Unit   |
|------------------------------|----------|-------|-------|-------|--------|
| FREQUENCY                    |          |       |       |       |        |
| RF Pin                       |          | 10    |       |    20 | GHz    |
| IF Pin                       |          | DC    |       |     6 | GHz    |
| LO Pin                       |          | 10    |       |    20 | GHz    |
| LO AMPLITUDE                 |          | 9     |    13 |    15 | dBm    |
| 10 GHzTO 20 GHz PERFORMANCE  |          |       |       |       |        |
| Downconverter                |          |       |       |       |        |
| Conversion Loss              |          |       |   8.5 |  11.5 | dB     |
| Single Sideband Noise Figure | SSB NF   |       |   9.5 |       | dB     |
| Input Third-Order Intercept  | IP3      | 19    |    20 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |       |    10 |       | dBm    |
| Input Second-Order Intercept | IP2      |       |    46 |       | dBm    |
| Upconverter                  | IF IN    |       |       |       |        |
| Conversion Loss              |          |       |     7 |       | dB     |
| Input Third-Order Intercept  | IP3      |       |  19.5 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |       |    10 |       | dBm    |
| Isolation                    |          |       |       |       |        |
| RF to IF                     |          | 24    |    41 |       | dB     |
| LO to RF                     |          | 25    |    37 |       | dB     |
| LO to IF                     |          | 23    |    41 |       | dB     |
| 12 GHzTO 16 GHz PERFORMANCE  |          |       |       |       |        |
| Downconverter                |          |       |       |       |        |
| Conversion Loss              |          |       |     8 |       | dB     |
| Single Sideband Noise Figure | SSB NF   |       |     9 |       | dB     |
| Input Third-Order Intercept  | IP3      | 16    |  19.5 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |       |   9.5 |       | dBm    |
| Input Second-Order Intercept | IP2      |       |    45 |       | dBm    |
| Upconverter                  | IF IN    |       |       |       |        |
| Conversion Loss              |          |       |   6.5 |       | dB     |
| Input Third-Order Intercept  | IP3      |       |    18 |       | dBm    |
| Input 1 dB Compression Point | P1dB     |       |    10 |       | dBm    |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                  | Rating           |
|----------------------------------------------------------------------------|------------------|
| RF Input Power                                                             | 25dBm            |
| LO Input Power                                                             | 26 dBm           |
| IF Input Power                                                             | 25dBm            |
| IF Source/Sink Current                                                     | 3mA              |
| Reflow Temperature                                                         | 260°C            |
| Maximum Junction Temperature                                               | 175°C            |
| Continuous Power Dissipation, P DISS (T A =85°C, Derate 3.7mW/°CAbove85°C) | 333mW            |
| Operating Temperature Range                                                | -40°C to +85°C   |
| Storage Temperature Range                                                  | -65°C to +150°C  |
| Electrostatic Discharge (ESD) Sensitivity HumanBodyModel(HBM)              | 250 V; Class 0B  |
| Field Induced Charged Device Model (FICDM)                                 | 1250 V; Class IV |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JA |   θ JC | Unit   |
|---------------|--------|--------|--------|
| E-12-4 1      |    120 |    195 | °C/W   |

1  Test Condition 1: JEDEC standard JESD51-2.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin No.          | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                             |
|------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 4, 6, 7, 9 | GND        | Ground. These pins and package bottom must be connected to RF/dc ground.                                                                                                                                                                                                                                                                |
| 2                | LO         | LO Port. This pin is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                                    |
| 5                | IF         | IF Port. This pin is dc-coupled. For applications not requiring operation to dc, dc block this port externally using a series capacitor of a value chosen to pass the necessary IF frequency range. For operation to dc, this pin must not source/sink more than 3 mAof current or die malfunction and possible die failure may result. |
| 8                | RF         | RF Port. This pin is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                                    |
| 10, 11, 12       | NIC EPAD   | Not Internally Connected. These pins can be connected to RF/dc ground. Performance is not affected. Exposed Pad. The exposed pad must be connected to RF/dc ground.                                                                                                                                                                     |

## Table 4. Pin Function Descriptions

## INTERFACE SCHEMATICS

Figure 4. LO Interface Schematic

<!-- image -->

Figure 6. RF Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE, IF = 100 MHz

Upper Sideband (Low-Side LO)

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 9. Noise Figure vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 11. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 12. Noise Figure vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 13. Input P1dB vs. RF Frequency at Various Temperatures, LO = 13 dBm

Figure 14. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 15. Input P1dB vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

13895-014

Figure 16. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband (High-Side LO)

<!-- image -->

Figure 17. Conversion Gain vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 18. Input IP3 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 19. Noise Figure vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 20. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 21. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 22. Noise Figure vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 23. Input IP2 vs. RF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 24. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE, IF = 3000 MHz

## Upper Sideband (Low-Side LO)

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

Figure 35. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 36. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

Figure 37. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 38. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE, IFIN = 100 MHz Upper Sideband (Low-Side LO)

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

13895-044

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

Figure 50. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 51. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

13895-052

Figure 52. Input IP2 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE, IFIN = 3000 MHz

## Upper Sideband (Low-Side LO)

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

Figure 64. Conversion Gain vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 65. Input IP3 vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

13895-066

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

Figure 70. LO to RF Isolation vs. RF Frequency at Various LO Power levels, TA = 25°C

Figure 71. LO to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 72. RF to IF Isolation vs. RF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

<!-- image -->

Figure 73. LO Return Loss vs. LO Frequency at LO = 13 dBm, TA = 25°C

Figure 74. RF Return Loss vs. RF Frequency at LO Power Levels, TA = 25°C, LO = 15 GHz

<!-- image -->

Figure 75. IF Return Loss vs. IF Frequency at LO Power Levels, TA = 25°C, LO = 15 GHz

<!-- image -->

## IF BANDWIDTH-DOWNCONVERTER Upper Sideband, LO Frequency = 12 GHz

<!-- image -->

Figure 76. Conversion Gain vs. IF Frequency at Various Temperatures, LO = 13 dBm

<!-- image -->

Figure 77. Input IP3 vs. IF Frequency at Various Temperatures, LO = 13 dBm

Figure 78. Conversion Gain vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

Figure 79. Input IP3 vs. IF Frequency at Various LO Power Levels, TA = 25°C

<!-- image -->

## Lower Sideband, LO Frequency = 19 GHz

13895-080

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

LO = 13 dBm, all values in dBc below input LO level and measured at RF port.

## Table 5. LO Harmonics at RF

|                    |   N×LOSpuratRFPort |   N×LOSpuratRFPort | N×LOSpuratRFPort   | N×LOSpuratRFPort   |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| LO Frequency (GHz) |                  1 |                  2 | 3                  | 4                  |
| 12                 |                 39 |                 39 | 59                 | 57                 |
| 13                 |                 38 |                 40 | 70                 | N/A                |
| 15                 |                 38 |                 48 | 49                 | N/A                |
| 16                 |                 37 |                 56 | 50                 | N/A                |
| 18                 |                 36 |                 54 | N/A                | N/A                |
| 19                 |                 36 |                 53 | N/A                | N/A                |
| 21                 |                 36 |                 46 | N/A                | N/A                |

LO = 13 dBm, all values in dBc below input LO level and measured at IF port.

## Table 6. LO Harmonics at IF

|                    |   N×LOSpuratIFPort |   N×LOSpuratIFPort | N×LOSpuratIFPort   | N×LOSpuratIFPort   |
|--------------------|--------------------|--------------------|--------------------|--------------------|
| LO Frequency (GHz) |                  1 |                  2 | 3                  | 4                  |
| 12                 |                 38 |                 77 | 67                 | 89                 |
| 13                 |                 41 |                 63 | 74                 | N/A                |
| 15                 |                 44 |                 72 | 56                 | N/A                |
| 16                 |                 42 |                 53 | 56                 | N/A                |
| 18                 |                 44 |                 79 | N/A                | N/A                |
| 19                 |                 53 |                 70 | N/A                | N/A                |
| 21                 |                 47 |                 75 | N/A                | N/A                |

## M × N Spurious Outputs

## Downconverter, Upper Sideband

Spur values are (M × RF) - (N × LO).

RF = 15.1 GHz at -10 dBm, LO = 15 GHz at 13 dBm.

|      |    | N×LO   | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      |      2 |      3 | 4      | 5      |
| M×RF |  0 | N/A    | 14     |     47 |     27 | N/A    | N/A    |
| M×RF |  1 | 48     | 0      |     70 |     72 | 65     | N/A    |
| M×RF |  2 | 75     | 77     |     60 |     79 | 74     | 68     |
| M×RF |  3 | 65     | 74     |     79 |     70 | 78     | 71     |
| M×RF |  4 | N/A    | 60     |     74 |     80 | 88     | 78     |
| M×RF |  5 | N/A    | N/A    |     56 |     72 | 81     | 88     |

## Upconverter, Upper Sideband

Spur values are (M × IF) + (N × LO).

IFIN = 100 MHz at -10 dBm, LO = 15 GHz at 13 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |
| M×IF | -5 | 89     |     80 |     73 |     67 |
| M×IF | -4 | 88     |     79 |     73 |     68 |
| M×IF | -3 | 91     |     66 |     74 |     66 |
| M×IF | -2 | 91     |     67 |     74 |     66 |
| M×IF | -1 | 36     |      0 |     35 |     20 |
| M×IF |  0 | N/A    |      6 |     17 |     22 |
| M×IF | +1 | 36     |      0 |     35 |     19 |
| M×IF | +2 | 88     |     63 |     73 |     65 |
| M×IF | +3 | 90     |     63 |     74 |     66 |
| M×IF | +4 | 90     |     80 |     73 |     65 |
| M×IF | +5 | 88     |     78 |     72 |     66 |

## THEORY OF OPERATION

The HMC554ALC3B is a general-purpose, double balanced mixer that can be used as an upconverter or a downconverter from 10 GHz to 20 GHZ.

When used as a downconverter, the HMC554ALC3B downconverts RF between 10 GHz and 20 GHz to IF between dc and 6 GHz.

When used as an upconverter, the mixer upconverts intermediate frequencies between dc and 6 GHz to radio frequencies between 10 GHz and 20 GHz.

## APPLICATIONS INFORMATION TYPICAL APPLICATION CIRCUIT

Figure 84 shows the typical application circuit for the HMC554ALC3B. The HMC554ALC3B is a passive device and does not require any external components. The IF pin is internally dc-coupled. The RF and LO pins are internally ac-coupled. When IF operation to dc is not required, using an external series capacitor is recommended, of a value chosen to pass the necessary IF frequency range. When IF operation to dc is required, do not exceed the IF source and sink current rating specified in the Absolute Maximum Ratings section.

Figure 84. Typical Application Circuit

<!-- image -->

Figure 85. Evaluation PCB Top Layer

<!-- image -->

## EVALUATION PCB INFORMATION

Use RF circuit design techniques for the circuit board used in the application. Ensure that signal lines have 50 Ω impedance and connect the package ground leads and the exposed pad directly to the ground plane (see Figure 84). Use a sufficient number of via holes to connect the top and bottom ground planes. The evaluation circuit board shown in Figure 85 is available from Analog Devices, Inc., upon request.

## Table 7. List of Materials for Evaluation PCB EV1HMC554ALC3B

| Item   | Description                              |
|--------|------------------------------------------|
| J1, J2 | PCB mount SRI 2.92 mmconnectors          |
| J3     | PCB mount Johnson SMA connector          |
| U1     | HMC554ALC3B                              |
| PCB 1  | 117611-1 evaluation board on Rogers 4350 |

- 1  117611-1 is the raw bare PCB identifier. Reference EV1HMC554ALC3B when ordering complete evaluation PCB.

## OUTLINE DIMENSIONS

<!-- image -->

0.90

0.80

0.70

SEATING

PLANE

SIDE VIEW

<!-- image -->

Figure 86. 12-Terminal Ceramic Leadless Chip Carrier (LCC) (E-12-4) Dimensions shown in millimeters

| Model 1          | Temperature Range   | MSLRating 2   | Package Description       | Package Option   |
|------------------|---------------------|---------------|---------------------------|------------------|
| HMC554ALC3B      | -40°C to +85°C      | MSL3          | 12-Terminal Ceramic [LCC] | E-12-4           |
| HMC554ALC3BTR    | -40°C to +85°C      | MSL3          | 12-Terminal Ceramic [LCC] | E-12-4           |
| HMC554ALC3BTR-R5 | -40°C to +85°C      | MSL3          | 12-Terminal Ceramic [LCC] | E-12-4           |
| EV1HMC554ALC3B   |                     |               | Evaluation PCB Assembly   |                  |

PKG-004837

## ORDERING GUIDE

1  All models are RoHS compliant.

2  The peak reflow temperature is 260°C. See the Absolute Maximum Ratings section, Table 2.

<!-- image -->

03-02-2017-A