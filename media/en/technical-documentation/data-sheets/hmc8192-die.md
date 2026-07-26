<!-- lastmod 2019-03-15 -->
<!-- image -->

## Data Sheet

## FEATURES

Passive, wideband I/Q mixer

RF and LO range: 20 GHz to 42 GHz

Wide IF bandwidth of dc to 5 GHz

Single-ended RF, LO, and IF

Conversion loss: 10 dB typical, from 20 GHz to 32 GHz

Image rejection: 25 dB typical, from 20 GHz to 32 GHz

Noise figure: 12 dB typical, from 20 GHz to 32 GHz

Input IP3 (downconverter): 24 dBm typical, from 20 GHz to 32 GHz

Input P1dB (downconverter) compression: 15 dBm typical, from 20 GHz to 32 GHz

Input IP2: 56 dB typical, from 20 GHz to 32 GHz

LO to RF isolation: 42 dB typical, from 20 GHz to 32 GHz

LO to IFx isolation: 51 dB typical, from 20 GHz to 32 GHz

RF to IF isolation: 30 dB typical, from 20 GHz to 32 GHz

Amplitude balance: ±3 dB typical

Phase balance (downconverter): ±11° typical

RF return loss: 14 dB typical

LO return loss: 11 dB typical

IFx return loss: 20 dB typical

Die size: 2.160 mm × 1.430 mm × 0.102 mm

## APPLICATIONS

Test and measurement instrumentation Military, radar, aerospace, and defense applications Microwave point to point base stations

## GENERAL DESCRIPTION

The HMC8192-Die is a passive, wideband, inphase/quadrature (I/Q), monolithic microwave integrated circuit (MMIC) mixer that can be used either as an image rejection mixer for receiver operations or as a single-sideband upconverter for transmitter operations. With a radio frequency (RF) and local oscillator (LO) range of 20 GHz to 42 GHz, and an intermediate frequency (IF) bandwidth of dc to 5 GHz, the HMC8192-Die is ideal for applications requiring a wide frequency range, excellent RF performance, and a simple design with fewer components. A single HMC8192-Die can replace multiple narrow-band mixers in a design.

The inherent I/Q architecture of the HMC8192-Die offers excellent image rejection, typically better than 25 dBc,

## 20 GHz to 42 GHz, Wideband I/Q Mixer

[HMC8192-Die](https://www.analog.com/hmc8192?doc=hmc8192-die.pdf)

## FUNCTIONAL BLOCK DIAGRAM

17252-001

Figure 1.

<!-- image -->

eliminating the need for additional filtering of unwanted sidebands. The mixer also provides excellent LO to RF and LO to IFx isolation of 42 dB and 51 dB, respectively, from 20 GHz to 32 GHz, and reduces the effect of LO leakage to ensure signal integrity.

As a passive mixer, the HMC8192-Die does not require any dc power sources. The HMC8192-Die offers a lower noise figure compared to an active mixer, ensuring superior dynamic range for high performance and precision applications.

The HMC8192-Die is fabricated on a gallium arsenide (GaAs), metal semiconductor field effect transistor (MESFET) process and uses Analog Devices, Inc., mixer cells and a 90° hybrid. The HMC8192-Die operates over a -55°C to +85°C temperature range.

## [HMC8192-Die](https://www.analog.com/hmc8192?doc=hmc8192-die.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| 20 GHz to 32 GHz........................................................................ 3                  |
| 32 GHz to 42 GHz........................................................................ 4                  |
| Absolute Maximum Ratings............................................................ 5                      |
| Thermal Resistance ...................................................................... 5                 |
| ESD Caution.................................................................................. 5             |
| Pin Configuration and Function Descriptions............................. 6                                  |
| Interface Schematics..................................................................... 6                 |
| Typical Performance Characteristics ............................................. 7                         |
| Downconverter Performance...................................................... 7                           |
| Upconverter Performance............................................................. 9                      |

## REVISION HISTORY

3 /201 9 -Revision 0: Initial Version

| Isolation and Return Loss Without External 90° Hybrid at the IFx Ports ...................................................................................... 11   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IF Bandwidth Performance....................................................... 13                                                                                 |
| Amplitude and Phase Imbalance Performance: Downconverter,                                                                                                          |
| Upper Sideband (Low-Side LO) ................................................. 15                                                                                  |
| Spurious and Harmonics Performance................................... 16                                                                                           |
| Theory of Operation ...................................................................... 18                                                                      |
| Applications Information.............................................................. 19                                                                          |
| Mounting and Bonding Techniques for Millimeter Wave GaAs MMiCs............................................................................................. 20     |
| Handling Precautions ................................................................ 20                                                                           |
| Mounting..................................................................................... 20                                                                   |
| Wire Bonding.............................................................................. 20                                                                      |
| Outline Dimensions....................................................................... 21                                                                       |
| Ordering Guide .......................................................................... 21                                                                       |

## SPECIFICATIONS

## 20 GHz TO 32 GHz

TA = 25°C, IF = 100 MHz, LO drive = 18 dBm, all measurements performed as a downconverter with upper sideband selected, external 90° hybrid at the IFx ports, and LO amplifier in line with lab bench LO source, unless otherwise noted.

Table 1.

| Parameter                       | Symbol   | Min   | Typ   |   Max | Unit    |
|---------------------------------|----------|-------|-------|-------|---------|
| FREQUENCY                       |          |       |       |       |         |
| Radio                           | RF       | 20    |       |    32 | GHz     |
| LO                              | f LO     | 20    |       |    32 | GHz     |
| Intermediate                    | IF       | DC    |       |     5 | GHz     |
| LO DRIVE LEVEL                  |          | 16    | 18    |    20 | dBm     |
| RF PERFORMANCE AS DOWNCONVERTER |          |       |       |       |         |
| Conversion Loss                 |          |       | 10    |    12 | dB      |
| Image Rejection                 |          | 15    | 25    |       | dBc     |
| Single-Sideband Noise Figure    | SSB NF   |       | 12    |       | dB      |
| Input Third-Order Intercept     | IP3      | 22    | 24    |       | dBm     |
| Input 1 dB Compression Point    | P1dB     |       | 15    |       | dBm     |
| Input Second-Order Intercept    | IP2      |       | 56    |       | dBm     |
| Amplitude Balance 1             |          |       | ±3    |       | dB      |
| Phase Balance 1                 |          |       | ±11   |       | Degrees |
| RF PERFORMANCE AS UPCONVERTER   |          |       |       |       |         |
| Conversion Loss                 |          |       | 7     |       | dB      |
| Sideband Rejection              |          |       | 19    |       | dBc     |
| Input Third-Order Intercept     | IP3      |       | 21    |       | dBm     |
| Input 1 dB Compression Point    | P1dB     |       | 13    |       | dBm     |
| ISOLATION PERFORMANCE           |          |       |       |       |         |
| LO to RF                        |          | 36    | 42    |       | dB      |
| LO to IFx 1                     |          |       | 51    |       | dB      |
| RF to IF 1                      |          |       | 30    |       | dB      |
| RETURN LOSS PERFORMANCE 1       |          |       |       |       |         |
| RF                              |          |       | 14    |       | dB      |
| LO                              |          |       | 11    |       | dB      |
| IFx                             |          |       | 20    |       | dB      |

1  Measurements taken without 90° hybrid at the IFx ports.

## 32 GHz TO 42 GHz

TA = 25°C, IF = 100 MHz, LO drive = 18 dBm, all measurements performed as downconverter with upper sideband selected, external 90° hybrid at the IFx ports, and LO amplifier in line with lab bench LO source, unless otherwise noted.

Table 2.

| Parameter                       | Symbol   | Min   | Typ   |   Max | Unit    |
|---------------------------------|----------|-------|-------|-------|---------|
| FREQUENCY                       |          |       |       |       |         |
| Radio                           | RF       | 32    |       |    42 | GHz     |
| LO                              | f LO     | 32    |       |    42 | GHz     |
| Intermediate                    | IF       | DC    |       |     5 | GHz     |
| LO DRIVE LEVEL                  |          | 16    | 18    |    20 | dBm     |
| RF PERFORMANCE AS DOWNCONVERTER |          |       |       |       |         |
| Conversion Loss                 |          |       | 13    |  15.5 | dB      |
| Image Rejection                 |          | 12    | 18    |       | dBc     |
| Single-Sideband Noise Figure    | SSB NF   |       | 16    |       | dB      |
| Input Third-Order Intercept     | IP3      | 17    | 24    |       | dBm     |
| Input 1 dB Compression Point    | P1dB     |       | 16    |       | dBm     |
| Input Second-Order Intercept    | IP2      |       | 46    |       | dBm     |
| Amplitude Balance 1             |          |       | ±3    |       | dB      |
| Phase Balance 1                 |          |       | ±11   |       | Degrees |
| RF PERFORMANCE AS UPCONVERTER   |          |       |       |       |         |
| Conversion Loss                 |          |       | 8     |       | dB      |
| Sideband Rejection              |          |       | 15    |       | dBc     |
| Input Third-Order Intercept     | IP3      |       | 17    |       | dBm     |
| Input 1 dB Compression Point    | P1dB     |       | 12    |       | dBm     |
| ISOLATION PERFORMANCE           |          |       |       |       |         |
| LO to RF                        |          | 34    | 41    |       | dB      |
| LO to IFx 1                     |          |       | 55    |       | dB      |
| RF to IF 1                      |          |       | 34    |       | dB      |
| RETURN LOSS PERFORMANCE 1       |          |       |       |       |         |
| RF                              |          |       | 14    |       | dB      |
| LO                              |          |       | 11    |       | dB      |
| IFx                             |          |       | 20    |       | dB      |

## ABSOLUTE MAXIMUM RATINGS

Table 3.

| Parameter                                                                   | Rating          |
|-----------------------------------------------------------------------------|-----------------|
| RF Input Power                                                              | 23dBm           |
| LO Input Power                                                              | 23dBm           |
| IF Input Power                                                              | 23dBm           |
| IF Source or Sink Current                                                   | 3mA             |
| Continuous Power Dissipation, P DISS (T A =85°C, Derate7.2mW/°CAbove85°C) 1 | 647mW           |
| Maximum Junction Temperature (T J )                                         | 175°C           |
| Operating Temperature Range                                                 | -55°C to +85°C  |
| Storage Temperature Range                                                   | -65°C to +150°C |
| Electrostatic Discharge Sensitivity                                         |                 |
| HumanBody Model                                                             | 4000V           |
| Field Induced Charged Device Model                                          | 1250V           |

1 PDISS is a theoretical number calculated by (TJ - 85°C)/θJC.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 4. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| C-7-6         |    139 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin No.             | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                           |
|---------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                   | LO         | LO Input. This pin is ac-coupled and matched to 50 Ω. See Figure 3 for the interface schematic.                                                                                                                                                                                                                                                       |
| 2, 3, 5, Die Bottom | GND        | Ground Connections. These pins and the die bottom must be connected to RF and dc ground. See Figure 4 for the interface schematic.                                                                                                                                                                                                                    |
| 4                   | RF         | RF Input/Output. This pin is ac-coupled and matched to 50 Ω. See Figure 5 for the interface schematic.                                                                                                                                                                                                                                                |
| 6, 7                | IF1, IF2   | First and Second Quadrature IF Input/Output Pins. These pins are dc-coupled. For applications not requiring operation to dc, use an off-chip dc blocking capacitor. For operations to dc, these pins must not source or sink more than 3 mAof current. Otherwise, the device may not function and may fail. See Figure 6 for the interface schematic. |

## Table 5. Pin Function Descriptions

## INTERFACE SCHEMATICS

<!-- image -->

<!-- image -->

Figure 4. GND Interface Schematic

Figure 5. RF Interface Schematic

<!-- image -->

Figure 6. IF1 and IF2 Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

IF = 100 MHz, Upper Sideband (Low-Side LO)

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

Figure 13. Noise Figure vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 14. Input IP2 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 15. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

Figure 16. Noise Figure vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 17. Input IP2 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## UPCONVERTER PERFORMANCE

## IF = 100 MHz, Upper Sideband

<!-- image -->

Figure 18. Conversion Gain vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 19. Sideband Rejection vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 20. Input IP3 vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 21. Conversion Gain vs. RF Frequency at Various LO Drives, TA = 25°C

Figure 22. Sideband Rejection vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

Figure 23. Input IP3 vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

## [HMC8192-Die](https://www.analog.com/hmc8192?doc=hmc8192-die.pdf)

Figure 24. Input P1dB vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

## ISOLATION AND RETURN LOSS WITHOUT EXTERNAL 90° HYBRID AT THE IFx PORTS

<!-- image -->

Figure 25. LO to IF Isolation vs. LO Frequency at Various Temperatures, IF = 100 MHz, LO Drive = 18 dBm

<!-- image -->

Figure 26. LO to RF Isolation vs. LO Frequency at Various Temperatures, IF = 100 MHz, LO Drive = 18 dBm

<!-- image -->

Figure 27. RF to IF Isolation vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 28. LO to IF Isolation vs. LO Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

Figure 29. LO to RF Isolation vs. LO Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

<!-- image -->

Figure 30. RF to IF Isolation vs. RF Frequency at Various LO Drives, TA = 25°C

<!-- image -->

<!-- image -->

Figure 31. LO Return Loss vs. LO Frequency at Various Temperatures, LO Drive = 18 dBm

<!-- image -->

Figure 32. RF Return Loss vs. RF Frequency at Various Temperatures, LO Frequency = 32 GHz, LO Drive = 18 dBm

<!-- image -->

Figure 33. IF1/IF2 Return Loss vs. IF Frequency at Various Temperatures, LO Frequency = 32 GHz, LO Drive = 18 dBm

Figure 34. LO Return Loss vs. LO Frequency at Various LO Drives

<!-- image -->

Figure 35. RF Return Loss vs. RF Frequency at Various LO Drives, LO Frequency = 32 GHz

<!-- image -->

17252-036

Figure 36. IF1/IF2 Return Loss vs. IF Frequency at Various LO Drives, LO Frequency = 32 GHz

<!-- image -->

## IF BANDWIDTH PERFORMANCE

## Downconverter, Upper Sideband (Low-Side LO)

Data over the IF frequency was taken without an external 90° hybrid at the IFx ports.

<!-- image -->

Figure 37. Conversion Gain vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 32 GHz

<!-- image -->

Figure 38. Input IP3 vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 32 GHz

Figure 39. Conversion Gain vs. IF Frequency at Various LO Drives, LO Frequency = 32 GHz, TA = 25°C

<!-- image -->

Figure 40. Input IP3 vs. IF Frequency at Various LO Drives, LO Frequency = 32 GHz, TA = 25°C

<!-- image -->

## Downconverter, Lower Sideband (High-Side LO)

Data over the IF frequency was taken without an external 90° hybrid at the IFx ports.

<!-- image -->

Figure 41. Conversion Gain vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 32 GHz

<!-- image -->

Figure 42. Input IP3 vs. IF Frequency at Various Temperatures, LO Drive = 18 dBm at 32 GHz

Figure 43. Conversion Gain vs. IF Frequency at Various LO Drives, LO Frequency = 32 GHz, TA = 25°C

<!-- image -->

Figure 44. Input IP3 vs. IF Frequency at Various LO Drives, LO Frequency = 32 GHz, TA = 25°C

<!-- image -->

## AMPLITUDE AND PHASE IMBALANCE PERFORMANCE: DOWNCONVERTER, UPPER SIDEBAND (LOW-SIDE LO)

<!-- image -->

Figure 45. Amplitude Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 100 MHz

<!-- image -->

Figure 46. Phase Imbalance vs. RF Frequency at Various Temperatures, LO Drive = 18 dBm, IF = 100 MHz

Figure 47. Amplitude Imbalance vs. RF Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

<!-- image -->

Figure 48. Phase Imbalance vs. RF Frequency at Various LO Drives, IF = 100 MHz, TA = 25°C

<!-- image -->

## SPURIOUS AND HARMONICS PERFORMANCE

Data was taken without an IF hybrid at the IFx ports. N/A means not applicable.

## Downconverter M × N Spurious Outputs

Mixer spurious products are measured in dBc from the IF output power level, unless otherwise specified. Spur values are (M × RF) (N × LO).

IF = 100 MHz, RF = 20,000 MHz, LO = 19,900 MHz, RF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      | 2      | 3      | 4      | 5      |
| M×RF |  0 | N/A    | 6      | 39     | N/A    | N/A    | N/A    |
| M×RF |  1 | 6      | 0      | 37     | 5      | N/A    | N/A    |
| M×RF |  2 | 60     | 66     | 64     | 80     | 67     | N/A    |
| M×RF |  3 | N/A    | 70     | 78     | 66     | 79     | 70     |
| M×RF |  4 | N/A    | N/A    | 71     | 79     | 95     | 78     |
| M×RF |  5 | N/A    | N/A    | N/A    | 71     | 82     | 92     |

IF = 100 MHz, RF = 30,000 MHz, LO = 29,900 MHz, RF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      | 2      | 3      | 4      | 5      |
| M×RF |  0 | N/A    | 12     | N/A    | N/A    | N/A    | N/A    |
| M×RF |  1 | 9      | 0      | 42     | N/A    | N/A    | N/A    |
| M×RF |  2 | N/A    | 75     | 71     | 74     | N/A    | N/A    |
| M×RF |  3 | N/A    | N/A    | 77     | 84     | 75     | N/A    |
| M×RF |  4 | N/A    | N/A    | N/A    | 77     | 95     | 77     |
| M×RF |  5 | N/A    | N/A    | N/A    | N/A    | 76     | 95     |

IF = 100 MHz, RF = 40,000 MHz, LO = 39,900 MHz, RF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      | 2      | 3      | 4      | 5      |
| M×RF |  0 | N/A    | 8      | N/A    | N/A    | N/A    | N/A    |
| M×RF |  1 | 3      | 0      | 28     | N/A    | N/A    | N/A    |
| M×RF |  2 | N/A    | 67     | 58     | 67     | N/A    | N/A    |
| M×RF |  3 | N/A    | N/A    | 68     | 74     | 66     | N/A    |
| M×RF |  4 | N/A    | N/A    | N/A    | 68     | 90     | 67     |
| M×RF |  5 | N/A    | N/A    | N/A    | N/A    | 68     | 92     |

IF = 100 MHz, RF = 20,000 MHz, LO = 20,100 MHz, RF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      | 2      | 3      | 4      | 5      |
| M×RF |  0 | N/A    | 6      | 32     | N/A    | N/A    | N/A    |
| M×RF |  1 | 6      | 0      | 40     | 59     | N/A    | N/A    |
| M×RF |  2 | 59     | 66     | 64     | 77     | 68     | N/A    |
| M×RF |  3 | N/A    | 69     | 79     | 65     | 78     | 68     |
| M×RF |  4 | N/A    | N/A    | 68     | 78     | 95     | 81     |
| M×RF |  5 | N/A    | N/A    | N/A    | 70     | 81     | 94     |

IF = 100 MHz, RF = 30,000 MHz, LO = 31.100 MHz, RF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      | 1      | 2      | 3      | 4      | 5      |
| M×RF |  0 | N/A    | 13     | N/A    | N/A    | N/A    | N/A    |
| M×RF |  1 | 8      | 0      | 39     | N/A    | N/A    | N/A    |
| M×RF |  2 | N/A    | 76     | 68     | 76     | N/A    | N/A    |
| M×RF |  3 | N/A    | N/A    | 77     | 87     | 76     | N/A    |
| M×RF |  4 | N/A    | N/A    | N/A    | 75     | 97     | 75     |
| M×RF |  5 | N/A    | N/A    | N/A    | N/A    | 78     | 96     |

IF = 100 MHz, RF = 40,000 MHz, LO = 40,100 MHz, RF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|    | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   |
|----|--------|--------|--------|--------|--------|--------|
|    | 0      | 1      | 2      | 3      | 4      | 5      |
|  0 | N/A    | 8      | N/A    | N/A    | N/A    | N/A    |
|  1 | 1      | 0      | 28     | N/A    | N/A    | N/A    |
|  2 | N/A    | 67     | 57     | 65     | N/A    | N/A    |
|  3 | N/A    | N/A    | 68     | 67     | 66     | N/A    |
|  4 | N/A    | N/A    | N/A    | 67     | 83     | 66     |
|  5 | N/A    | N/A    | N/A    | N/A    | 67     | 90     |

## Upconverter M × N Spurious Outputs

Mixer spurious products are measured in dBc from the RF output power level, unless otherwise specified. Hybrid loss is not de-embedded.

IF = 100 MHz, RF = 20,000 MHz, LO = 19,900 MHz, IF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 | 3      | 4      | 5      |
| M×IF | -5 | 95     |     79 |     70 | N/A    | N/A    | N/A    |
| M×IF | -4 | 93     |     79 |     67 | N/A    | N/A    | N/A    |
| M×IF | -3 | 94     |     67 |     69 | N/A    | N/A    | N/A    |
| M×IF | -2 | 75     |     44 |     67 | N/A    | N/A    | N/A    |
| M×IF | -1 | 39     |      0 |     27 | N/A    | N/A    | N/A    |
| M×IF |  0 | N/A    |      4 |     22 | N/A    | N/A    | N/A    |
| M×IF | +1 | 39     |      0 |     27 | N/A    | N/A    | N/A    |
| M×IF | +2 | 75     |     43 |     61 | N/A    | N/A    | N/A    |
| M×IF | +3 | 96     |     68 |     70 | N/A    | N/A    | N/A    |
| M×IF | +4 | 94     |     80 |     69 | N/A    | N/A    | N/A    |
| M×IF | +5 | 93     |     78 |     70 | N/A    | N/A    | N/A    |

IF = 100 MHz, RF = 30,000 MHz, LO = 29,900 MHz, IF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 | 2      | 3      | 4      | 5      |
| M×IF | -5 | 94     |     77 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -4 | 92     |     77 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -3 | 97     |     64 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -2 | 78     |     44 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -1 | 40     |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF |  0 | N/A    |      2 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +1 | 40     |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +2 | 78     |     45 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +3 | 96     |     65 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +4 | 93     |     72 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +5 | 95     |     74 | N/A    | N/A    | N/A    | N/A    |

IF = 100 MHz, RF = 40,000 MHz, LO = 39,900 MHz, IF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 | 2      | 3      | 4      | 5      |
| M×IF | -5 | +93    |    +70 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -4 | +94    |    +69 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -3 | +92    |    +61 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -2 | +77    |    +45 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -1 | +38    |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF |  0 | N/A    |     -3 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +1 | +38    |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +2 | +77    |    +43 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +3 | +94    |    +59 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +4 | +92    |    +68 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +5 | +93    |    +67 | N/A    | N/A    | N/A    | N/A    |

IF = 100 MHz, RF = 20,000 MHz, LO = 20,100 MHz, IF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO |   N×LO | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 | 3      | 4      | 5      |
| M×IF | -5 | 93     |     80 |     73 | N/A    | N/A    | N/A    |
| M×IF | -4 | 94     |     80 |     70 | N/A    | N/A    | N/A    |
| M×IF | -3 | 95     |     67 |     68 | N/A    | N/A    | N/A    |
| M×IF | -2 | 71     |     44 |     64 | N/A    | N/A    | N/A    |
| M×IF | -1 | 39     |      0 |     27 | N/A    | N/A    | N/A    |
| M×IF |  0 | N/A    |      4 |     19 | N/A    | N/A    | N/A    |
| M×IF | +1 | 39     |      0 |     26 | N/A    | N/A    | N/A    |
| M×IF | +2 | 70     |     43 |     59 | N/A    | N/A    | N/A    |
| M×IF | +3 | 95     |     69 |     71 | N/A    | N/A    | N/A    |
| M×IF | +4 | 95     |     80 |     71 | N/A    | N/A    | N/A    |
| M×IF | +5 | 96     |     81 |     70 | N/A    | N/A    | N/A    |

IF = 100 MHz, RF = 30,000 MHz, LO = 30,100 MHz, IF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 | 2      | 3      | 4      | 5      |
| M×IF | -5 | 94     |     74 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -4 | 98     |     74 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -3 | 96     |     64 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -2 | 79     |     44 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -1 | 41     |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF |  0 | N/A    |      1 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +1 | 41     |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +2 | 79     |     44 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +3 | 96     |     66 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +4 | 97     |     75 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +5 | 95     |     74 | N/A    | N/A    | N/A    | N/A    |

IF = 100 MHz, RF = 40,000 MHz, LO = 40,100 MHz, IF power = -10 dBm, LO power = 18 dBm, and TA = 25°C.

|      |    | N×LO   |   N×LO | N×LO   | N×LO   | N×LO   | N×LO   |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 | 2      | 3      | 4      | 5      |
| M×IF | -5 | +93    |    +68 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -4 | +94    |    +70 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -3 | +95    |    +62 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -2 | +77    |    +45 | N/A    | N/A    | N/A    | N/A    |
| M×IF | -1 | +39    |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF |  0 | N/A    |     -3 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +1 | +39    |      0 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +2 | +77    |    +42 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +3 | +95    |    +62 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +4 | +95    |    +70 | N/A    | N/A    | N/A    | N/A    |
| M×IF | +5 | +94    |    +69 | N/A    | N/A    | N/A    | N/A    |

## THEORY OF OPERATION

The HMC8192-Die is a passive, wideband, I/Q MMIC mixer that can be used either as an image rejection mixer for receiver operations or as a single-sideband upconverter for transmitter operations. The RF and LO range from 20 GHz to 42 GHz and the IF ranges from dc to 5 GHz.

The HMC8192-Die offers excellent image rejection due to its I/Q architecture design. This mixer is also excellent at LO to RF and LO to IF isolation and reduces the effect of LO leakage due to its double balanced architecture.

The HMC8192-Die is a passive mixer and does not require any dc power sources. As a result, the HMC8192-Die offers a lower noise figure compared to an active mixer, which also ensures superior dynamic range for high performance and precision applications.

The HMC8192-Die is fabricated on a GaAs MESFET process and uses Analog Devices mixer cells and a 90° hybrid. The HMC8192-Die operates over a -55°C to +85°C temperature range.

For both upconversion and downconversion, an external 90° hybrid is required. See the Applications Information section for details on interfacing with an external 90° hybrid as well as information about switching between upconverter and downconverter modes and how to select sidebands in each mode.

## APPLICATIONS INFORMATION

Figure 49 shows the typical application circuit for the HMC8192Die. To select the appropriate sideband, an external 90° hybrid is needed. For applications not requiring operation to dc, use an off-chip dc blocking capacitor. For applications that require the LO signal at the output to be suppressed, use a bias tee or RF feed as shown in Figure 49. Ensure that the source or sink current used for LO suppression is less than 3 mA for each IFx port to prevent damage to the device. The common-mode voltage for each IFx port is 0 V .

To select the upper sideband when using the HMC8192-Die as an upconverter, connect the IF1 pin to the 90° port of the hybrid and connect the IF2 pin to the 0° port of the hybrid. To select the lower sideband, connect the IF1 pin to the 0° port of the hybrid and the IF2 pin to the 90° port of the hybrid. The input is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

To select the upper sideband (low-side LO) when using the HMC8192-Die as a downconverter, connect the IF1 pin to the 0° port of the hybrid and connect the IF2 pin to the 90° port of the hybrid. To select the lower sideband (high-side LO), connect the IF1 pin to the 90° port of the hybrid and the IF2 pin to the 0° port of the hybrid. The output is from the sum port of the hybrid, and the difference port is 50 Ω terminated.

Figure 49. Typical Applications Circuit

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETER WAVE GAAS MMICS

Attach the die directly to the ground plane eutectically or with conductive epoxy.

To bring RF to and from the chip use 50 Ω microstrip transmission lines on 0.127 mm (0.005 in.) thick alumina thin film substrates (see Figure 50).

Figure 50. Routing RF Signals

<!-- image -->

If 0.254 mm (0.010 in.) thick alumina thin film substrates must be used, raise the die 0.152 mm (0.006 in.) so that the surface of the die is coplanar with the surface of the substrate. One way to accomplish this is to attach the 0.102 mm (0.004 in.) thick die to a 0.152 mm (0.006 in.) thick molybdenum heat spreader (molytab), which is then attached to the ground plane (see Figure 51).

Figure 51. Routing RF Signals (Raised)

<!-- image -->

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.075 mm to 0.152 mm (0.003 in. to 0.006 in.). Gold ribbon of 0.075 mm (0.003 in.) width and minimal length &lt; 0.31 mm (&lt;0.012 in.) is recommended to minimize inductance on the RF, LO, and IF ports.

## HANDLING PRECAUTIONS

To avoid permanent damage, adhere to the following precautions.

## Storage

All bare die ship in either waffle-based or gel-based ESD protective containers, and then sealed in an ESD protective bag.

After opening the sealed ESD protective bag, all die must be stored in a dry nitrogen environment.

## Cleanliness

Handle the chips in a clean environment. Never use liquid cleaning systems to clean the chip.

## Static Sensitivity

Follow ESD precautions to protect against ESD strikes.

## Transients

Suppress instrument and bias supply transients while bias is applied. To minimize inductive pickup, use shielded signal and bias cables.

## General Handling

Handle the chip only on the edges using a vacuum collet or with a sharp pair of bent tweezers. Because the surface of the chip has fragile air bridges, never touch the surface of the chip with a vacuum collet, tweezers or fingers.

## MOUNTING

The chip is back metallized and can be die mounted with gold/tin (Au/Sn) eutectic preforms or with electrically conductive epoxy. The mounting surface must be clean and flat.

## Eutectic Die Attach

It is best to use an 80% Au/20% Sn preform with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90% nitrogen/10% hydrogen gas is applied, maintain a tool tip temperature at 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 sec. No more than 3 sec of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after placing it into position. Cure the epoxy per the schedule provided by the manufacturer.

## WIRE BONDING

RF bonds made with 0.003 in. × 0.0005 in. gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. DC bonds of 0.025 mm (0.001 in.) diameter, thermosonically bonded, are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm (0.012 in.).

## OUTLINE DIMENSIONS

<!-- image -->

Figure 52. 7-Pad Bare Die [CHIP] (C-7-6) Dimensions shown in millimeters

| Model 1    | Temperature Range   | Package Description   | Package Option   |
|------------|---------------------|-----------------------|------------------|
| HMC8192    | -55°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-6            |
| HMC8192-SX | -55°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-6            |

## ORDERING GUIDE

1  The HMC8192 and the HMC8192-SX are RoHS compliant parts.

<!-- image -->