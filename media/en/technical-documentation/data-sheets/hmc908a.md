<!-- lastmod 2019-05-11 -->
<!-- image -->

Data Sheet

## FEATURES

Conversion gain: 11 dB (typical) at IFOUT = 100 MHz Image rejection: 25 dB (typical) at IFOUT = 100 MHz LO to RF isolation: 46 dB (typical) LO to IF isolation: 26 dB (typical) IF output frequency: dc to 3.5 GHz

32-lead, 4.9 mm × 4.9 mm ceramic leadless chip carrier

## APPLICATIONS

Point to point radios Point to multipoint radios and very small aperture terminals (VSATs)

Test equipment and sensors

Military end use

## GENERAL DESCRIPTION

The HMC908A is a compact, gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), inphase/ quadrature (I/Q) downconverter in a leadless, RoHS compliant ceramic leadless chip carrier. This device provides a small signal conversion gain of 11 dB with a noise figure of 2 dB and 25 dB of image rejection at 100 MHz. The HMC908A utilizes a low noise amplifier (LNA) followed by an image rejection mixer that is driven by a local oscillator (LO) buffer amplifier. The

## 9 GHz to 12 GHz,

## GaAs, MMIC, I/Q Downconverter

[HMC908A](https://www.analog.com/hmc908a?doc=hmc908a.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

image rejection mixer eliminates the need for a filter following the LNA, and removes thermal noise at the image frequency. I and Q mixer outputs are provided and an external 90° hybrid is needed to select the required sideband. The HMC908A is a much smaller alternative to hybrid style image rejection mixer downconverter assemblies, and it eliminates the need for wire bonding by allowing the use of surface-mount manufacturing techniques.

## [HMC908A](https://www.analog.com/hmc908a?doc=hmc908a.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................                                 |   1 |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----|
| Applications.......................................................................................                                     |   1 |
| Functional Block Diagram ..............................................................                                                 |   1 |
| General Description.........................................................................                                            |   1 |
| Revision History ...............................................................................                                        |   2 |
| Specifications.....................................................................................                                     |   3 |
| Absolute Maximum Ratings............................................................                                                    |   4 |
| Solder Profile.................................................................................                                         |   4 |
| Thermal Resistance ......................................................................                                               |   4 |
| ESD Caution..................................................................................                                           |   4 |
| Pin Configuration and Function Descriptions.............................                                                                |   5 |
| Interface Schematics.....................................................................                                               |   5 |
| Typical Performance Characteristics .............................................                                                       |   6 |
| Downconverter Performance: IF OUT = 100 MHz, Upper Sideband (Low-Side LO).............................................................  |   6 |
| Downconverter Performance: IF OUT = 100 MHz, Lower Sideband (High-Side LO)............................................................  |   8 |
| Downconverter Performance: IF OUT = 3500 MHz, Upper Sideband (Low-Side LO)............................................................. |   9 |

## REVISION HISTORY

4/2019-Revision 0: Initial Version

## Data Sheet

| Downconverter Performance: IF OUT = 3500 MHz, Lower Sideband (High-Side LO).......................................................... 11             |
|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Downconverter Performance: IF Bandwidth, Upper Sideband (Low-Side LO)............................................................................ 13 |
| Downconverter Performance: IF Bandwidth, Lower Sideband (High-Side LO)........................................................................... 16 |
| Amplitude/Phase Balance, Downconverter............................ 19                                                                                |
| Isolation and Return Loss ......................................................... 20                                                               |
| Spurious Output Performance.................................................. 21                                                                     |
| Theory of Operation ...................................................................... 22                                                        |
| LO Driver Amplifier .................................................................. 22                                                            |
| Mixer............................................................................................ 22                                                 |
| LNA.............................................................................................. 22                                                 |
| Applications Information.............................................................. 23                                                            |
| 25                                                                                                                                                   |
| Performance at Lower IF Frequencies.....................................                                                                             |
| Outline Dimensions....................................................................... 26                                                         |
| Ordering Guide .......................................................................... 26                                                         |

## SPECIFICATIONS

TA = 25°C, LO drive level = 0 dBm, VD1 = VD2 = 3 V , VD3 = 5 V . All measurements performed on the evaluation printed circuit board (PCB).

Table 1.

| Parameter                                  | Test Conditions/Comments          | Min   | Typ   |   Max | Unit    |
|--------------------------------------------|-----------------------------------|-------|-------|-------|---------|
| FREQUENCY                                  |                                   |       |       |       |         |
| Radio Frequency (RF)                       |                                   | 9     |       |    12 | GHz     |
| Intermediate Frequency (IF) Output         |                                   | DC    |       |   3.5 | GHz     |
| LO Input                                   |                                   | 8.5   |       |  15.5 | GHz     |
| LO DRIVE LEVEL                             |                                   | -4    | 0     |    +6 | dBm     |
| RF PERFORMANCE                             |                                   |       |       |       |         |
| Downconverter (IF OUT ), IF OUT = 100 MHz  | Upper sideband                    |       |       |       |         |
| Conversion Gain                            |                                   | 8     | 11    |       | dB      |
| Image Rejection                            |                                   | 15    | 25    |       | dB      |
| Input Third-Order Intercept (IP3)          |                                   | -3    | 0     |       | dBm     |
| Input Second-Order Intercept (IP2)         |                                   |       | 31    |       |         |
| Input 1 dB Compression Point (P1dB)        |                                   |       | -8    |       | dBm     |
| Noise Figure                               |                                   |       | 2     |   3.5 | dB      |
| Downconverter (IF OUT ), IF OUT = 3500 MHz | Lower sideband                    |       |       |       |         |
| Conversion Gain                            |                                   | 7     | 9     |       | dB      |
| Image Rejection                            |                                   | 18    | 30    |       | dB      |
| Input IP3                                  |                                   | -3    | +1    |       | dBm     |
| Input IP2                                  |                                   |       | 27    |       |         |
| Input P1dB                                 |                                   |       | -9    |       | dBm     |
| Noise Figure                               |                                   |       | 3     |       | dB      |
| Amplitude Balance                          | Taken without external 90° hybrid |       | ±1    |       | dB      |
| Phase Balance                              | Taken without external 90° hybrid |       | ±6    |       | Degrees |
| Isolation                                  | Taken without external 90° hybrid |       |       |       |         |
| LO to RF                                   |                                   | 36    | 46    |       | dB      |
| LO to IF                                   |                                   | 17    | 26    |       | dB      |
| RF to IF                                   |                                   |       | 5     |       | dB      |
| Return Loss                                | Taken without external 90° hybrid |       |       |       |         |
| LO                                         |                                   |       | 12    |       | dB      |
| RF                                         |                                   |       | 18    |       | dB      |
| IF1                                        |                                   |       | 12    |       | dB      |
| IF2                                        |                                   |       | 10    |       | dB      |
| SUPPLIES                                   |                                   |       |       |       |         |
| Supply Current of RF LNA (I D1 + I D2 )    | VD1=VD2=3V                        |       | 53    |    85 | mA      |
| Supply Current of LO Amplifier (I D3 )     | VD3 = 5V                          |       | 100   |   125 | mA      |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2

| Parameter                                                                     | Rating          |
|-------------------------------------------------------------------------------|-----------------|
| RF Input Power                                                                | 5 dBm           |
| IFx Input Power (LO = 10 dBm, RF = -10 dBm)                                   | 15.5dBm         |
| LO Input Power                                                                | 20 dBm          |
| VD1,VD2                                                                       | 4.0V            |
| VD3                                                                           | 5.5V            |
| IFx Source or Sink Current                                                    | 5mA             |
| Maximum Junction Temperature (T J )                                           | 175°C           |
| Lifetime at MaximumT J                                                        | >1 × 10 6 hours |
| Continuous Power Dissipation, P DISS 1 (T A =85°C, Derate 9.56mW/°CAbove85°C) | 0.65W           |
| Operating Temperature Range                                                   | -40°C to +85°C  |
| Storage Temperature Range                                                     | -65°C to +150°C |
| Lead Temperature (Soldering 60 sec)                                           | 260°C           |
| Moisture Sensitivity Level (MSL) 2                                            | MSL3            |
| Electrostatic Discharge (ESD) Sensitivity                                     |                 |
| Human Body Model (HBM)                                                        | 250V            |
| Field Induced Charged Device Model (FICDM)                                    | 1250V           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## SOLDER PROFILE

The typical Pb-free reflow solder profile shown in Figure 2 is based on JEDEC J-STD-20C.

Figure 2. Pb-free Reflow Solder Profile

<!-- image -->

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one-cubic foot sealed enclosure. θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType 1   |   θ JA |   θ JC | Unit   |
|-----------------|--------|--------|--------|
| E-32-1          |     46 |     71 | °C/W   |

- 1  Test Condition 1: JEDEC standard JESD51-2.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. NIC = NO INTERNAL CONNECTION. THESE PINS ARE NOT CONNECTED INTERNALLY.
2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED TO THE RF AND DC GROUND.

Figure 3. Pin Configuration

Table 4. Pin Function Descriptions

| Pin No.                               | Mnemonic     | Description                                                                                                                                                                                                                 |
|---------------------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 5,7to9,13to 16, 22 to 27, 30 to 32 | NIC          | No Internal Connection. These pins are not connected internally.                                                                                                                                                            |
| 2, 4, 10, 12, 17, 19, 21              | GND          | Ground Connect. These pins and package bottom must be connected to RF and dc ground.                                                                                                                                        |
| 3                                     | RF           | Radio Frequency Port. This pin is ac-coupled and matched to 50 Ω.                                                                                                                                                           |
| 6                                     | VD3          | Power Supply for LO Amplifier.                                                                                                                                                                                              |
| 11                                    | LO           | Local Oscillator Port. The pin is ac-coupled and matched to 50 Ω.                                                                                                                                                           |
| 18                                    | IF2          | Second Quadrature Intermediate Frequency Output Pin. For applications not requiring operation to dc, use an off chip dc blocking capacitor. For operation to dc, these pinsmust not sourceorsinkmorethan5mA of current.     |
| 20                                    | IF1          | First Quadrature Intermediate Frequency Output Pin. For applications not requiring operation to dc, use an off chip dc blocking capacitor. For operation to dc, these pins must not source or sink more than5mA of current. |
| 28, 29                                | VD2,VD1 EPAD | Power Supply for RF Low Noise Amplifier. Exposed Pad. The exposed pad must be connected to the RF and dc ground.                                                                                                            |

## INTERFACE SCHEMATICS

Figure 6. VD3 Interface Schematic

<!-- image -->

20070-002

<!-- image -->

Figure 7. LO Interface Schematic

<!-- image -->

Figure 8. IF1, IF2 Interface Schematic

<!-- image -->

Figure 9. VD1, VD2 Interface Schematic

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE: IFOUT = 100 MHz, UPPER SIDEBAND (LOW-SIDE LO)

Data taken as an image rejection mixer with external 90° hybrid at the IF ports, LO = 0 dBm, unless otherwise noted.

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 11. Image Rejection vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 12. Noise Figure vs. RF Frequency at Various Temperatures

<!-- image -->

20070-012

Figure 13. Conversion Gain vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 14. Image Rejection vs. RF Frequency at Various LO Powers, TA = 25°C

Figure 15. Noise Figure vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

Figure 16. Input IP3 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 17. Input IP2 vs. RF Frequency at Various Temperatures

<!-- image -->

20070-017

<!-- image -->

Figure 18. Input P1dB vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 19. Input IP3 vs. RF Frequency at Various LO Powers, TA = 25°C

Figure 20. Input IP2 vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 21. Input P1dB vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IFOUT = 100 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

Data taken as an image rejection mixer with external 90° hybrid at the IF ports, LO = 0 dBm, unless otherwise noted.

<!-- image -->

Figure 22. Conversion Gain vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 23. Image Rejection vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 24. Noise Figure vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 25. Input IP3 vs. RF Frequency at Various LO Powers, TA = 25°C

Figure 26. Input IP2 vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 27. Input P1dB vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IFOUT = 3500 MHz, UPPER SIDEBAND (LOW-SIDE LO)

Data taken as an image rejection mixer with external 90° hybrid at the IF ports, LO = 0 dBm, unless otherwise noted.

<!-- image -->

Figure 28. Conversion Gain vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 29. Image Rejection vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 30. Input IP3 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 31. Conversion Gain vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 32. Image Rejection vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 33. Input IP3 vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

Figure 34. Input IP2 vs. RF Frequency at Various Temperatures

<!-- image -->

20070-034

<!-- image -->

Figure 35. Input P1dB vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 36. Noise Figure vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 37. Input IP2 vs. RF Frequency at Various LO Powers, TA = 25°C

Figure 38. Input P1dB vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 39. Noise Figure vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IFOUT = 3500 MHz, LOWER SIDEBAND (HIGH-SIDE LO)

Data taken as an image rejection mixer with external 90° hybrid at the IF ports, LO = 0 dBm, unless otherwise noted.

<!-- image -->

Figure 40. Conversion Gain vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 41. Image Rejection vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 42. Input IP3 vs. RF Frequency at Various Temperatures

<!-- image -->

<!-- image -->

20070-042

Figure 43. Conversion Gain vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 44. Image Rejection vs. RF Frequency at Various LO Powers, TA = 25°C

Figure 45. Input IP3 vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

Figure 46. Input IP2 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 47. Input P1dB vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 48. Noise Figure vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 49. Input IP2 vs. RF Frequency at Various LO Powers, TA = 25°C

Figure 50. Input P1dB vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 51. Noise Figure vs. RF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IF BANDWIDTH, UPPER SIDEBAND (LOW-SIDE LO)

Data taken as an image rejection mixer with external 90° hybrid at the IF ports, LO = 0 dBm at 8.5 GHz, unless otherwise noted.

<!-- image -->

Figure 52. Conversion Gain vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 53. Image Rejection vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 54. Input IP3 vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 55. Conversion Gain vs. IF Frequency at Various LO Powers, TA = 25°C

Figure 56. Image Rejection vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 57. Input IP3 vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

Figure 58. Input IP2 vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 59. Input IP2 vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

## Noise Figure, IF Bandwidth, Upper Sideband at LO = 10 GHz

Figure 60. Noise Figure vs. IF Frequency at Various Temperatures

<!-- image -->

<!-- image -->

Figure 61. Noise Figure vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

## DOWNCONVERTER PERFORMANCE: IF BANDWIDTH, LOWER SIDEBAND (HIGH-SIDE LO)

Data taken as an image rejection mixer with external 90° hybrid at the IF ports, LO = 0 dBm at 12.5 GHz, unless otherwise noted.

<!-- image -->

Figure 62. Conversion Gain vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 63. Image Rejection vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 64. Input IP3 vs. IF Frequency at Various Temperatures

<!-- image -->

20070-064

Figure 65. Conversion Gain vs. IF Frequency at Various LO Powers, TA = 25°C

20070-065

Figure 66. Image Rejection vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 67. Input IP3 vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

Figure 68. Input IP2 vs. IF Frequency at Various Temperatures

<!-- image -->

<!-- image -->

Figure 69. Input IP2 vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

<!-- image -->

## [HMC908A](https://www.analog.com/hmc908a?doc=hmc908a.pdf)

## Noise Figure, IF Bandwidth, Lower Sideband at LO = 10 GHz

Figure 70. Noise Figure vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 71. Noise Figure vs. IF Frequency at Various LO Powers, TA = 25°C

<!-- image -->

## AMPLITUDE/PHASE BALANCE, DOWNCONVERTER

Data taken at various LO powers.

<!-- image -->

Figure 72. Amplitude Balance vs. IF Frequency at Various LO powers, Upper Sideband, TA = 25°C

<!-- image -->

Figure 73. Phase Balance vs. IF Frequency at Various LO Powers, Upper Sideband, TA = 25°C

<!-- image -->

Figure 74. Amplitude Balance vs. IF Frequency at Various LO powers, Lower Sideband, TA = 25°C

<!-- image -->

Figure 75. Phase Balance vs. IF Frequency at Various LO Powers, Lower Sideband, TA = 25°C

<!-- image -->

<!-- image -->

## ISOLATION AND RETURN LOSS

<!-- image -->

Figure 76. Isolation vs. RF Frequency at LO = 0 dBm, TA = 25°C

<!-- image -->

Figure 77. Isolation vs. RF Frequency at LO = 0 dBm, TA = 25°C

Figure 78. Return Loss vs. IF Frequency, LO = 17 dBm, TA = 25°C

<!-- image -->

Figure 79. Return Loss vs. Frequency, LO = 0 dBm at 10 GHz, TA = 25°C

<!-- image -->

## SPURIOUS OUTPUT PERFORMANCE

## LO Harmonics

When measuring the LO harmonics, the 0 dBm LO input power is applied at various LO frequencies.

All values are in decibels below the LO power level measured at the RF port. N/A means not applicable.

## Table 5. LO Harmonics at RF

|                    |   N×LOSpurat RF Port (dBc) |   N×LOSpurat RF Port (dBc) |   N×LOSpurat RF Port (dBc) |   N×LOSpurat RF Port (dBc) |
|--------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| LO Frequency (MHz) |                          1 |                          2 |                          3 |                          4 |
| 8500               |                         43 |                         50 |                         52 |                         68 |
| 9000               |                         43 |                         46 |                         57 |                         65 |
| 9500               |                         44 |                         52 |                         57 |                         78 |
| 10,000             |                         45 |                         57 |                         60 |                         66 |
| 10,500             |                         47 |                         78 |                         58 |                         66 |
| 11,000             |                         51 |                         80 |                         59 |                         67 |
| 11,500             |                         57 |                         61 |                         52 |                         68 |
| 12,000             |                         49 |                         64 |                         49 |                         78 |
| 12,500             |                         49 |                         72 |                         56 |                         86 |

## Downconverter, M × N, Upper Sideband

RF = 10.6 GHz, LO = 10.5 GHz, RF power = -20 dBm, and LO power = 0 dBm, data taken without external hybrid. Mixer spurious products are measured in dBc from the IF output power level. (M × RF) - (N × LO) values are positive. N/A means not applicable.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 | 4      |
| M×RF |  0 | N/A    |     14 |     38 |     48 | N/A    |
| M×RF |  1 | 14     |      0 |     38 |     45 | 71     |
| M×RF |  2 | 66     |     57 |     55 |     57 | 84     |
| M×RF |  3 | 78     |     84 |     73 |     56 | 69     |
| M×RF |  4 | N/A    |     83 |     83 |     89 | 95     |

## Downconverter, M × N, Lower Sideband

RF = 10.4 GHz, LO = 10.5 GHz, RF power = -20 dBm, and LO power = 0 dBm, data taken without external hybrid. Mixer spurious products are measured in dBc from the IF output power level. (M × RF) - (N × LO) values are positive. N/A means not applicable.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO | N×LO   |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 | 4      |
| M×RF |  0 | N/A    |     15 |     39 |     45 | N/A    |
| M×RF |  1 | 12     |      0 |     41 |     47 | 70     |
| M×RF |  2 | 69     |     55 |     53 |     57 | 85     |
| M×RF |  3 | 75     |     83 |     72 |     51 | 69     |
| M×RF |  4 | N/A    |     82 |     82 |     89 | 89     |

## THEORY OF OPERATION

The HMC908A is a compact, GaAs, MMIC, I/Q downconverter in a RoHS compliant package optimized for point to point and point to multipoint microwave radio applications operating in the 9 GHz to 12 GHz input RF frequency range. The HMC908A supports LO input frequencies of 8.5 GHz to 15.5 GHz and IF output frequencies of dc to 3.5 GHz.

The HMC908A uses an RF LNA amplifier followed by an I/Q double balanced mixer, where a driver amplifier drives the LO (see Figure 1).

## LO DRIVER AMPLIFIER

The LO driver amplifier takes a single LO input and amplifies it to the desired LO signal level for the mixer to operate optimally. The LO driver amplifier is self biased, and it only requires a single dc bias voltage (VD3) to operate. The bias current for the LO amplifier is 100 mA at 5 V , typically. The LO drive level of -4 dBm to +6 dBm makes it compatible with the Analog Devices, Inc., wideband synthesizer portfolio without the need for an external LO driver amplifier.

## MIXER

The mixer is an I/Q double balanced mixer, and this mixer topology reduces the need for filtering the unwanted sideband. An external 90° hybrid is required to select the desired sideband of operation.

## LNA

The LNA (RF amplifier) is self biased. The bias current for the LNA is 53 mA at 3 V , typically.

The typical application circuit (see Figure 81) shows the necessary external components on the bias lines to eliminate any undesired stability problems for the RF amplifier and the LO amplifier.

The HMC908A is a much smaller alternative to hybrid style image rejection converter assemblies, and it eliminates the need for wire bonding by allowing the use of surface-mount manufacturing assemblies.

The HMC908A downconverter comes in a compact, 4.9 mm × 4.9 mm, 32-terminal ceramic LCC. The HMC908A operates over the -40°C to +85°C temperature range.

## APPLICATIONS INFORMATION

Figure 81 shows the typical application circuit for the HMC908A. To select the appropriate sideband, an external 90° hybrid coupler is needed. For applications not requiring operation to dc, using an off chip, dc blocking capacitor is recommended. For applications that require the LO signal at the output to be suppressed, use a bias tee or RF feed. Ensure that the source or sink current used for LO suppression is &lt;5 mA for each IF port to prevent damage to the device. The common-mode voltage for each IF port is 0 V .

To select the upper sideband (low-side LO), connect the IF1 pin to the 0° port of the hybrid and connect the IF2 pin to the 90° port of the hybrid. To select the lower sideband (high-side LO), connect the IF1 pin to the 90° port of the hybrid and connect the IF2 pin to the 0° port of the hybrid. The output is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

The EV1HMC908ALC5 evaluation PCB used in the application must use RF circuit design techniques. Signal lines must have 50 Ω impedance, and connect the package ground leads and exposed pad directly to the ground plane, similar to Figure 82. Use a sufficient number of via holes to connect the top and bottom ground planes. The evaluation circuit board shown in Figure 82 is available from Analog Devices upon request.

## LAYOUT

Solder the exposed pad on the underside of the HMC908A to a low thermal and electrical impedance ground plane. This pad is typically soldered to an exposed opening in the solder mask on the evaluation board. Connect these ground vias to all other ground layers on the evaluation board to maximize heat dissipation from the device package. Figure 80 shows the PCB land pattern footprint for the EV1HMC908ALC5 evaluation board.

<!-- image -->

GROUND PAD

Figure 80. PCB Land Pattern Footprint of the EV1HMC908ALC5

<!-- image -->

Figure 81. Typical Application Circuit Evaluation Board Information

<!-- image -->

Figure 82. EV1HMC908ALC5 Evaluation PCB Top Layer

<!-- image -->

Table 6. Bill of Materials for the EV1HMC908ALC5 Evaluation PCB

| Reference Designator   | Description                                                                                                         |
|------------------------|---------------------------------------------------------------------------------------------------------------------|
| 08-050536 1            | Evaluation board, 2 EV1HMC908ALC5.                                                                                  |
| J1, J2                 | PCB mount Subminiature Version A (SMA) RF connectors, SRI connector gage. J1 connects to RF, and J2 connects to LO. |
| J3, J4                 | PCB mount SMA connectors, Johnson SMA connectors. J3 connects to IF1, and J4 connects to IF2.                       |
| J5, J6, J7             | DC Mill-Max pins. J5 connects to VD1, J6 connects to VD2, and J7 connects to VD3.                                   |
| C1, C2, C3             | 100 pF capacitor, 0402 package.                                                                                     |
| C4, C5, C6             | 1000 pF capacitor, 0402 package.                                                                                    |
| C7, C8, C9             | 2.2 µF capacitor, Tantalum Case A.                                                                                  |
| R1, R2                 | 0 Ωresistor, 0402 package.                                                                                          |
| U1                     | Device under test, HMC908A.                                                                                         |

## PERFORMANCE AT LOWER IF FREQUENCIES

The HMC908A can operate at low IF frequencies approaching dc. Figure 83 shows the conversion gain and image rejection performance at lower IF frequencies.

<!-- image -->

Figure 83. Conversion Gain and Image Rejection vs. IF Frequency at Low IF Frequencies, LO = 10.5 GHz at 0 dBm

<!-- image -->

## OUTLINE DIMENSIONS

Figure 84. 32-Terminal Ceramic Leadless Chip Carrier (LCC)

<!-- image -->

(E-32-1) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1                                               | Temperature Range                            | Package Body Material                           | Lead Finish    | Package Description                                                                      | Package Option       |
|-------------------------------------------------------|----------------------------------------------|-------------------------------------------------|----------------|------------------------------------------------------------------------------------------|----------------------|
| HMC908ALC5 HMC908ALC5TR HMC908ALC5TR-R5 EV1HMC908ALC5 | -40°C to +85°C -40°C to +85°C -40°C to +85°C | Alumina Ceramic Alumina Ceramic Alumina Ceramic | Gold Gold Gold | 32-Terminal Ceramic LCC 32-Terminal Ceramic LCC 32-Terminal Ceramic LCC Evaluation Board | E-32-1 E-32-1 E-32-1 |

<!-- image -->

04-24-2017-D