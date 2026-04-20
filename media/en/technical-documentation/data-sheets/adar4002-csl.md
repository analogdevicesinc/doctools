<!-- lastmod 2026-01-26 -->
<!-- image -->

## 0.5 GHz to 19 GHz, 1-Channel, Bidirectional True Time Delay Unit

## FEATURES

- 0.5 GHz to 19 GHz frequency range
- Programmable 7-bit time delay
- Programmable time delay range (typical)
- Range 0: 0 ps to 508 ps with 4 ps standard resolution
- Range 1: 0 ps to 254 ps with 2 ps high resolution
- Programmable 6-bit attenuation
- 31.5 dB adjustment range
- 0.5 dB resolution
- Performance at 10 GHz for minimum time delay and attenuation ► Insertion loss
- Time Delay Range 0: -20.5 dB
- Time Delay Range 1: -16.2 dB
- Input IP3
- Time Delay Range 0: 15.2 dBm
- Time Delay Range 1: 14.1 dBm
- Input P1dB
- Time Delay Range 0: 5 dBm
- Time Delay Range 1: 4.1 dBm
- Noise figure
- Time Delay Range 0: 21.2 dB
- Time Delay Range 1: 16.6 dB
- Fully programmable via a 3-wire or 4-wire SPI
- 14-bit shift register for daisy chaining and quick data load
- Power consumption: 1 mW with 1.2 V and 1.0 V dual supplies
- 14-lead, 3 mm × 2 mm, LFCSP

## COMMERCIAL SPACE FEATURES

- Wafer diffusion lot traceability
- Radiation benchmark
- Single event latch-up (SEL)
- Total ionizing dose (TID)

## APPLICATIONS

- Electronic steerable antenna arrays
- Multifunction arrays
- Satellite communications (SATCOM)
- Radar
- Data links
- Test equipment

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. ADAR4002-CSL Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADAR4002-CSL is a low power broadband, bidirectional, single-channel, true time delay unit (TDU) and a digital step attenuator (DSA). The IC has 18.5 GHz of bandwidth over a frequency range of 0.5 GHz to 19 GHz with 50 Ω input impedance at both RF ports. The TDU has two programmable maximum time delays, each with 7-bit control. Range 0 has a maximum delay of 508 ps with a resolution of 4 ps (typical). This range is used at lower frequencies where the ADAR4002-CSL has less insertion loss and where more time delay is required for full 360° phase coverage. Range 1 has a maximum delay of 254 ps and a resolution of 2 ps (typical). This range has less insertion loss compared to Range 0 and is useful at higher frequencies where the ADAR4002-CSL has higher insertion loss, and where less time delay and smaller resolution are required. The DSA has 6-bit resolution with an attenuation range of 0 dB to 31.5 dB and a step size of 0.5 dB.

The ADAR4002-CSL is designed to provide flexible digital control through either a serial port interface (SPI) or a shift register to allow daisy chaining multiple chips together. The ADAR4002-CSL contains register memory for 32 TDU and DSA states. The memory combined with on-chip sequencers, allows a fast bidirectional memory advance via the UPDATE pin.

The ADAR4002-CSL is available in a 14-lead, 3 mm × 2 mm, LFCSP and is specified from -40°C to +85°C. Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADAR4002 data sheet.

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Commercial Space Features.................................1                |     |
| Applications...........................................................    | 1   |
| Functional Block Diagram......................................1            |     |
| General Description...............................................1        |     |
| Specifications........................................................     | 3   |
| Timing Specifications.........................................             | 8   |
| Timing Diagrams................................................            | 9   |
| SPI Block Write Mode......................................                 | 10  |
| Short Control Command...................................10                 |     |
| Shift Register Mode..........................................11            |     |

## REVISION HISTORY

1/2026-Revision A: Initial Version

...........................................................................................................................................................................

| Radiation Test and Limit Specifications............11              |    |
|--------------------------------------------------------------------|----|
| Absolute Maximum Ratings.................................12        |    |
| Thermal Resistance.........................................        | 12 |
| Outgas Testing.................................................    | 12 |
| Radiation Features...........................................12    |    |
| Electrostatic Discharge (ESD) Ratings.............12               |    |
| ESD Caution.....................................................12 |    |
| Pin Configuration and Function Descriptions......                  | 13 |
| Typical Performance Characteristics...................14           |    |
| Outline Dimensions.............................................    | 15 |
| Ordering Guide.................................................15  |    |

## SPECIFICATIONS

V1P2 = 1.2 V, V1P0 = 1.0 V, T A = 25°C, frequency = 10 GHz, TDU code = 0, and DSA code = 0, unless otherwise specified. Input second-order intercept (IP2) has 1 GHz tone spacing. Input third-order intercept (IP3) has 10 MHz tone spacing. Low-side tone reported for IP2. Port 1 = RF1 and Port 2 = RF2. Gain is S21, and reverse gain is S12.

Table 1. Specifications

| Parameter                      | Test Conditions/Comments                           | Min   | Typ       | Max   | Unit   |
|--------------------------------|----------------------------------------------------|-------|-----------|-------|--------|
| OPERATING CONDITIONS           |                                                    |       |           |       |        |
| Minimum Frequency              |                                                    |       | 500       |       | MHz    |
| Maximum Frequency              |                                                    |       | 19        |       | GHz    |
| Operating Temperature          |                                                    | -40   |           | +85   | °C     |
| RF SECTION                     | RF1 and RF2                                        |       |           |       |        |
| DC Bias Voltage                |                                                    |       | 0 1       |       | V      |
| Insertion Loss                 |                                                    |       |           |       |        |
| Time Delay Range 0             | 500 MHz                                            |       | -11.5     |       | dB     |
|                                | 2 GHz                                              |       | -12.6     |       | dB     |
|                                | 10 GHz                                             |       | -20.5     |       | dB     |
|                                | 18 GHz                                             |       | -30.8     |       | dB     |
| Time Delay Range 1             | 500 MHz                                            |       | -9.3      |       | dB     |
|                                | 2 GHz                                              |       | -10.1     |       | dB     |
|                                | 10 GHz                                             |       | -16.2     |       | dB     |
|                                | 18 GHz                                             |       | -22.9     |       | dB     |
| Attenuation Range              | 2 GHz, either time delay range                     |       | 31.5      |       | dB     |
| Attenuation Resolution         |                                                    |       | 0.5       |       | dB     |
| Gain Flatness vs. Frequency    | From 2 GHz to 18 GHz, across any 500 MHz bandwidth |       |           |       |        |
|                                | Time Delay Range 0                                 |       | ≤1.2      |       | dB     |
|                                | Time Delay Range 1                                 |       | ≤0.8      |       | dB     |
| Gain Variation vs. Temperature | 10 GHz                                             |       |           |       | dB     |
|                                | Time Delay Range 0                                 |       | +1.6/-2   |       | dB     |
|                                | Time Delay Range 1                                 |       | +1.6/-1.8 |       | dB     |
| RMS Gain Error 2               |                                                    |       |           |       |        |
| Time Delay Range 0             |                                                    |       |           |       |        |
| 500 MHz                        | DSA Sweep 0 to 15.5 dB                             |       | 0.25      |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 0.2       |       | dB     |
| 2 GHz                          | DSA Sweep 0 to 15.5 dB                             |       | 0.11      |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 0.28      |       | dB     |
| 10 GHz                         | DSA Sweep 0 to 15.5 dB                             |       | 0.11      |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 1.45      |       | dB     |
| 18 GHz                         | DSA Sweep 0 to 15.5 dB                             |       | 0.77      |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 3.16      |       | dB     |
| Time Delay Range 1             |                                                    |       |           |       |        |
| 500 MHz                        | DSA Sweep 0 to 15.5 dB                             |       | 0.3       |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 0.23      |       | dB     |
| 2 GHz                          | DSA Sweep 0 to 15.5 dB                             |       | 0.16      |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 0.24      |       | dB     |
| 10 GHz                         | DSA Sweep 0 to 15.5 dB                             |       | 0.08      |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 1.3       |       | dB     |
| 18 GHz                         | DSA Sweep 0 to 15.5 dB                             |       | 0.32      |       | dB     |
|                                | DSA Sweep 0 to 31.5 dB                             |       | 3.4       |       | dB     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                | Test Conditions/Comments   | Min   | Typ        | Max   | Unit            |
|------------------------------------------|----------------------------|-------|------------|-------|-----------------|
| RMS Gain Variation                       |                            |       |            |       |                 |
| Time Delay Range 0                       |                            |       |            |       |                 |
| 500 MHz                                  | TDU Sweep 0 to 127         |       | 1.45       |       | dB              |
| 2 GHz                                    | TDU Sweep 0 to 127         |       | 0.72       |       | dB              |
| 10 GHz                                   | TDU Sweep 0 to 127         |       | 1.43       |       | dB              |
| 18 GHz                                   | TDU Sweep 0 to 127         |       | 1.52       |       | dB              |
| Time Delay Range 1                       |                            |       |            |       |                 |
| 500 MHz                                  | TDU Sweep 0 to 127         |       | 0.98       |       | dB              |
| 2 GHz                                    | TDU Sweep 0 to 127         |       | 0.53       |       | dB              |
| 10 GHz                                   | TDU Sweep 0 to 127         |       | 0.46       |       | dB              |
| 18 GHz                                   | TDU Sweep 0 to 127         |       | 1.12       |       | dB              |
| Time Delay Adjustment Range              |                            |       |            |       |                 |
| Time Delay Range 0                       |                            |       |            |       |                 |
| Time Delay                               | 500 MHz                    |       | 543.5      |       | ps              |
|                                          | 2 GHz                      |       | 512.5      |       | ps              |
|                                          | 10 GHz                     |       | 531.2      |       | ps              |
|                                          | 18 GHz                     |       | 516.3      |       | ps              |
| Phase 3                                  | 500 MHz                    |       | 97.83      |       | Degrees         |
|                                          | 2 GHz                      |       | 369        |       | Degrees         |
|                                          | 10 GHz                     |       | 1921.32    |       | Degrees         |
|                                          | 18 GHz                     |       | 3345.6     |       | Degrees         |
| Time Delay Range 1                       |                            |       |            |       |                 |
| Time Delay                               | 500 MHz                    |       | 276.2      |       | ps              |
|                                          | 2 GHz                      |       | 254.7      |       | ps              |
|                                          | 10 GHz                     |       | 264.8      |       | ps              |
|                                          | 18 GHz                     |       | 260.9      |       | ps              |
| Phase                                    | 500 MHz                    |       | 49.7       |       | Degrees         |
|                                          | 2 GHz                      |       | 183.4      |       | Degrees         |
|                                          | 10 GHz                     |       | 953.3      |       | Degrees         |
|                                          | 18 GHz                     |       | 1690.6     |       | Degrees         |
| Time Delay Resolution Time Delay Range 0 |                            |       |            |       |                 |
| Time Delay                               | 500 MHz                    |       | 4          |       | ps              |
|                                          | 2 GHz                      |       | 4          |       | ps              |
|                                          | 10 GHz                     |       | 4.15       |       | ps              |
|                                          | 18 GHz                     |       | 4.06       |       | ps              |
| Phase                                    | 500 MHz                    |       | 0.72       |       | Degrees         |
|                                          | 2 GHz 10 GHz               |       | 2.88       |       | Degrees Degrees |
|                                          | 18 GHz                     |       | 14.4 25.92 |       | Degrees         |
| Time Delay Range 1                       |                            |       |            |       |                 |
| Time Delay                               | 500 MHz                    |       | 2          |       | ps              |
|                                          | 2 GHz                      |       | 2          |       | ps              |
|                                          | 10 GHz                     |       | 2.1        |       | ps              |
|                                          | 18 GHz                     |       | 2.1        |       | ps              |
| Phase                                    | 500 MHz                    |       | 0.36       |       | Degrees         |
|                                          | 2 GHz                      |       | 1.44       |       | Degrees         |
|                                          | 10 GHz                     |       | 7.2        |       | Degrees         |
|                                          | 18 GHz                     |       | 12.96      |       | Degrees         |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                | Test Conditions/Comments     | Min   | Typ       | Max   | Unit   |
|--------------------------|------------------------------|-------|-----------|-------|--------|
| RMS Time Delay Error 4   |                              |       |           |       |        |
| Time Delay Range 0       |                              |       |           |       |        |
| 500 MHz                  | TDU Sweep 0 to TDU Sweep 127 |       | 22.59     |       | ps     |
| 2 GHz                    | TDU Sweep 0 to TDU Sweep 127 |       | 2.58      |       | ps     |
| 10 GHz                   | TDU Sweep 0 to TDU Sweep 127 |       | 13.68     |       | ps     |
| 18 GHz                   | TDU Sweep 0 to TDU Sweep 127 |       | 4.83      |       | ps     |
| Time Delay Range 1       |                              |       |           |       |        |
| 500 MHz                  | TDU Sweep 0 to TDU Sweep 127 |       | 14.56     |       | ps     |
| 2 GHz                    | TDU Sweep 0 to TDU Sweep 127 |       | 1.15      |       | ps     |
| 10 GHz                   | TDU Sweep 0 to TDU Sweep 127 |       | 7.1       |       | ps     |
| 18 GHz                   | TDU Sweep 0 to TDU Sweep 127 |       | 4.04      |       | ps     |
| RMS Time Delay Variation |                              |       |           |       |        |
| Time Delay Range 0       |                              |       |           |       |        |
| 500 MHz                  | DSA sweep, 0 dB to 15.5 dB   |       | 2.62      |       | ps     |
|                          | DSA sweep, 0 dB to 31.5 dB   |       | 3.52      |       | ps     |
| 2 GHz                    | DSA sweep, 0 dB to 15.5 dB   |       | 0.84      |       | ps     |
|                          | DSA sweep, 0 dB to 31.5 dB   |       | 4.1       |       | ps     |
| 10 GHz                   | DSA sweep, 0 dB to 15.5 dB   |       | 0.65      |       | ps     |
| 18 GHz                   | DSA sweep, 0 dB to 15.5 dB   |       | 0.89      |       | ps     |
|                          | DSA sweep, 0 dB to 31.5 dB   |       | 8.97      |       | ps     |
| Time Delay Range 1       |                              |       |           |       |        |
| 500 MHz                  | DSA sweep, 0 dB to 15.5 dB   |       | 2.41      |       | ps     |
|                          | DSA sweep, 0 dB to 31.5 dB   |       | 3.34      |       | ps     |
| 2 GHz                    | DSA sweep, 0 dB to 15.5 dB   |       | 0.94      |       | ps     |
|                          | DSA sweep, 0 dB to 31.5 dB   |       | 4.28      |       | ps     |
| 10 GHz                   | DSA sweep, 0 dB to 15.5 dB   |       | 0.57      |       | ps     |
|                          | DSA sweep, 0 dB to 31.5 dB   |       | 3.4       |       | ps     |
| 18 GHz                   | DSA sweep, 0 dB to 15.5 dB   |       | 0.57      |       | ps     |
|                          | DSA sweep, 0 dB to 31.5 dB   |       | 4.46      |       | ps     |
| Noise Figure 5           |                              |       |           |       |        |
| Time Delay Range 0       | 500 MHz                      |       | 11.4      |       | dB     |
|                          | 2 GHz                        |       | 12.77     |       | dB     |
|                          | 10 GHz                       |       | 21.2      |       | dB     |
|                          | 18 GHz                       |       | 32        |       | dB     |
| Time Delay Range 1       | 500 MHz                      |       | 9.1       |       | dB     |
|                          | 2 GHz 10 GHz                 |       | 10.4 16.6 |       | dB dB  |
|                          | GHz                          |       |           |       |        |
|                          | 18                           |       | 24.4      |       | dB     |
| Input Return Loss        | RF1                          |       |           |       |        |
| Time Delay Range 0       | 500 MHz                      |       | -13.5     |       | dB     |
|                          | 2 GHz                        |       | -20.2     |       | dB     |
|                          | 10 GHz                       |       | -10.4     |       | dB     |
|                          | 18 GHz                       |       | -14.7     |       | dB     |
| Time Delay Range 1       | 500 MHz                      |       | -13.3     |       | dB     |
|                          | 2 GHz                        |       | -20.7     |       | dB     |
|                          | 18 GHz                       |       | -14.1     |       | dB     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                  | Test Conditions/Comments                                                             | Min         | Typ   | Max    | Unit    |
|--------------------------------------------|--------------------------------------------------------------------------------------|-------------|-------|--------|---------|
| Output Return Loss                         | RF2                                                                                  |             |       |        |         |
| Time Delay Range 0                         | 500 MHz                                                                              |             | -10.9 |        | dB      |
|                                            | 2 GHz                                                                                |             | -12.6 |        | dB      |
|                                            | 10 GHz                                                                               |             | -13.2 |        | dB      |
|                                            | 18 GHz                                                                               |             | -25.4 |        | dB      |
| Time Delay Range 1                         | 500 MHz                                                                              |             | -11.2 |        | dB      |
|                                            | 2 GHz                                                                                |             | -12.4 |        | dB      |
|                                            | 10 GHz                                                                               |             | -13.4 |        | dB      |
|                                            | 18 GHz                                                                               |             | -25.2 |        | dB      |
| Input Third-Order Intercept (IP3)          | RF1                                                                                  |             |       |        |         |
| Time Delay Range 0                         | 500 MHz                                                                              |             | 8.6   |        | dBm     |
|                                            | 2 GHz                                                                                |             | 10.6  |        | dBm     |
|                                            | 10 GHz                                                                               |             | 15.2  |        | dBm     |
|                                            | 18 GHz                                                                               |             | 16.4  |        | dBm     |
| Time Delay Range 1                         | 500 MHz                                                                              |             | 7.7   |        | dBm     |
|                                            |                                                                                      |             | 9.4   |        |         |
|                                            | 2 GHz 10 GHz                                                                         |             | 14.1  |        | dBm dBm |
|                                            | 18 GHz                                                                               |             | 16.4  |        | dBm     |
| Input 1 dB Compression (P1dB)              | RF1                                                                                  |             |       |        |         |
| Time Delay Range 0                         | 500 MHz                                                                              |             | 0.05  |        | dBm     |
|                                            | 2 GHz                                                                                |             | 1.7   |        | dBm     |
|                                            | 10 GHz                                                                               |             | 5     |        | dBm     |
|                                            | 18 GHz                                                                               |             | 6.4   |        | dBm     |
|                                            | 500 MHz                                                                              |             | -0.08 |        | dBm     |
| Time Delay Range 1                         | 2 GHz                                                                                |             | 0.52  |        | dBm     |
|                                            | 10 GHz                                                                               |             | 4.1   |        | dBm     |
|                                            | 18 GHz                                                                               |             | 6.0   |        | dBm     |
| DSA Settling Time                          | From 90% of active edge to 10% of RF output,                                         |             | ≤10   |        | ns      |
| TDU Settling Time                          | 500 MHz, from DSA Code 0 to DSA Code 63 From 90% of active edge to 90% of RF output, |             | ≤20   |        | ns      |
| LOGIC INPUTS 6                             | 500 MHz, from TDU Code 0 to TDU Code 127 CSB/CLKO, CLK_IN, DATA_IO, MODE, and        |             |       |        |         |
| Input Voltage                              |                                                                                      |             |       |        |         |
| High, V IH                                 |                                                                                      | 0.75 7      |       |        | V       |
|                                            | Maximum operating value 8                                                            |             |       | 1.2    | V       |
| Low, V IL                                  | Minimum operating value 10                                                           |             |       | 0.18 9 | V V     |
| High and Low Input Currents, I INH , I INL | 0 V ≤ input voltage ≤ 1 V, 25°C                                                      | -0.5        | ±1    |        | µA      |
| Input Capacitance, C IN                    |                                                                                      |             | 1     |        |         |
| 11                                         |                                                                                      |             |       |        | pF      |
| LOGIC OUTPUTS                              | DATA_IO, DATA_O, CSB/CLKO                                                            |             |       |        |         |
| Output Voltage                             |                                                                                      |             |       |        |         |
| High, V OH                                 | No load                                                                              |             | V1P0  |        | V       |
|                                            | Output high current (I OH ) = -5 mA                                                  | V1P0 - 0.25 |       |        | V       |
| Low, V OL                                  | No load                                                                              |             | 0     |        | V       |
| POWER SUPPLIES                             |                                                                                      |             |       |        |         |
| V1P2                                       |                                                                                      | 1.1         | 1.2   | 1.3    | V       |
| V1P0                                       |                                                                                      | 0.9         | 1.0   | 1.1    | V       |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter           | Test Conditions/Comments           | Min   | Typ   | Max   | Unit   |
|---------------------|------------------------------------|-------|-------|-------|--------|
| I V1P2              | Quiescent, SPI mode                |       |       |       |        |
| DSA = 0, TDU = 0    | Time Delay Range 0                 |       | 0.2   |       | mA     |
| DSA = 63, TDU = 127 | Time Delay Range 0                 |       | 0.5   |       | mA     |
| DSA = 0, TDU = 0    | Time Delay Range 1                 |       | 0.175 |       | mA     |
| DSA = 63, TDU = 127 | Time Delay Range 1                 |       | 0.525 |       | mA     |
| I V1P0              | Quiescent, SPI mode                |       |       |       |        |
| DSA = 0, TDU = 0    | Time Delay Range 0                 |       | 0.45  |       | mA     |
| DSA = 63, TDU = 127 | Time Delay Range 0                 |       | 0.62  |       | mA     |
| DSA = 0, TDU = 0    | Time Delay Range 1                 |       | 0.45  |       | mA     |
| DSA = 63, TDU = 127 | Time Delay Range 1                 |       | 0.625 |       | mA     |
| DSA = 0, TDU = 0    | Quiescent, shift register mode     |       | 0.6   |       | mA     |
| DSA = 0, TDU = 0    | 100 MHz clock, shift register mode |       | 2.38  |       | mA     |
| Power Consumption   | Quiescent                          |       | 1     |       | mW     |

## SPECIFICATIONS

## TIMING SPECIFICATIONS

V1P2 = 1.2 V, V1P0 = 1.0 V, and T A = 25°C, unless otherwise noted. See Figure 3, Figure 4, Figure 5, and Figure 8 for the supporting timing figures.

Table 2. SPI Timing

| Parameter                                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                 |
|-------------------------------------------------|-------|-------|-------|--------|----------------------------------------------------------|
| Maximum Clock Rate (1/t CLK_IN )                |       |       | 100   | MHz    |                                                          |
| Minimum Clock Period (t CLK_IN )                | 10    |       |       | ns     |                                                          |
| Minimum Pulse Width High (t PWH ) 1             | 4     |       |       | ns     |                                                          |
| Minimum Pulse Width Low (t PWL ) 1              | 4     |       |       | ns     |                                                          |
| Minimum Setup Time, DATA_IO to CLK_IN (t DS )   |       | 2.5   |       | ns     |                                                          |
| Minimum Hold Time, DATA_IO to CLK_IN (t DH )    |       | 1     |       | ns     |                                                          |
| Data Valid, CLK_IN to DATA_O (t DV )            |       | 2     |       | ns     |                                                          |
| Setup Time, CSB_CLKO to CLK_IN (t DCS )         |       | 5     |       | ns     |                                                          |
| DATA_IO and DATA_O Rise Time (t R )             |       | 1     |       | ns     | Outputs loaded with 80 pF, 10% to 90%                    |
| Minimum Clock to Update (t CLK_IN-UPDATE )      |       | 10    |       | ns     |                                                          |
| Minimum CSB_CLKO to Update (t CSB_CLKO-UPDATE ) |       | 10    |       | ns     |                                                          |
| Minimum Update to Update (t UPDATE-UPDATE )     |       | 10    |       | ns     |                                                          |
| Minimum Update Pulse width (t UPW )             |       | 5     |       | ns     |                                                          |
| RF Settling Time (t RF_SETTLE )                 |       | 20    |       | ns     | TDU settling time between TDU code = 0 to TDU code = 127 |

Table 3. Shift Register Mode Timing

| Parameter                                     | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                 |
|-----------------------------------------------|-------|-------|-------|--------|----------------------------------------------------------|
| Maximum Clock Rate (1/t CLK_IN )              |       |       | 100   | MHz    |                                                          |
| Minimum Clock Period (t CLK_IN )              | 10    |       |       | ns     |                                                          |
| Minimum Pulse Width High (t PWH ) 1           | 4     |       |       | ns     |                                                          |
| Minimum Pulse Width Low (t PWL ) 1            | 4     |       |       | ns     |                                                          |
| Minimum Setup Time, DATA_IO to CLK_IN (t DS ) |       | 2.5   |       | ns     |                                                          |
| Minimum Hold Time, DATA_IO to CLK_IN (t DH )  |       | 1     |       | ns     |                                                          |
| Data Valid, CLK_IN to DATA_O (t DV )          |       | 2     |       | ns     |                                                          |
| DATA_IO, DATA_O Rise Time (t R )              |       | 1     |       | ns     | Outputs loaded with 80 pF, 10% to 90%                    |
| Minimum Clock to Update (t CLK_IN-UPDATE )    |       | 10    |       | ns     |                                                          |
| RF Settling Time (t RF_SETTLE )               |       | 20    |       | ns     | TDU settling time between TDU code = 0 to TDU code = 127 |

## SPECIFICATIONS

## TIMING DIAGRAMS

<!-- image -->

Figure 2. SPI Register Timing (MSB First)

<!-- image -->

Figure 3. Timing Diagram for the SPI Register Write

Figure 4. Timing Diagram for SPI Register Read (4-Wire SPI Protocol)

<!-- image -->

Figure 5. Timing Diagram for UPDATE Pin

<!-- image -->

## SPECIFICATIONS

## SPI BLOCK WRITE MODE

Data can be written to and read from the SPI registers in block write or read modes, where the register address automatically increments (given Bit 5 and Bit 2 are asserted high in Register 0x00). Data for consecutive registers can be written or read without sending new address bits. During the transaction, the rising edge of CLK\_IN during the final bit (D0) of the register triggers the data to load into the register. Data writing or reading can be continued indefinitely until CSB/CLKO is raised again, ending the write or read process.

Figure 6. Timing Diagram for SPI Block Write Mode

<!-- image -->

## SHORT CONTROL COMMAND

The short control command is a quick and efficient 6-bit SPI transaction used for eight different commands. The first two bits clocked in must be 0b11 to initiate a short control command. Each command is given with a 3-bit command code within the SPI transaction. After the 3-bit command code, a final don't care bit must be clocked in. Table 4 outline the various commands and their unique command code bits. The same commands are available via the normal 24-bit SPI transaction; however, these shorter versions allow much faster operation. The active edge of a short control command is the CSB/CLKO rising edge, which completes the command. Timing is shown in Figure 7, wherein the don't care bit is shown as a zero.

Figure 7. Short Control Command

<!-- image -->

Table 4. Short Control Commands

| Short Control Command        | Control Command Bits [CC2:CC0]   | Description                                                                                     |
|------------------------------|----------------------------------|-------------------------------------------------------------------------------------------------|
| Switch to Sequencer B        | 0 0 0                            | Sources the TDU/DSA data from Sequencer B. In addition, sets Bit 0 = 1 in Register 0x16.        |
| Switch to Sequencer A        | 0 0 1                            | Sources the TDU/DSA data from Sequencer A. In addition, sets Bit 0 = 0 in Register 0x16.        |
| Reset Sequencer A            | 0 1 0                            | Resets Sequencer A to its start position. In addition, sets Bit 3 in Register 0x15.             |
| Reset Sequencer B            | 0 1 1                            | Resets Sequencer B to its start position. In addition, sets Bit 0 in Register 0x15.             |
| Toggle Sequencer A Direction | 1 0 0                            | Changes Sequencer A ascending/descending direction. In addition, sets Bit 3 in Register 0x14.   |
| Toggle Sequencer B Direction | 1 0 1                            | Changes Sequencer B ascending/descending direction. In addition, sets Bit 0 in Register 0x14.   |
| Data Load Command            | 1 1 0                            | Loads all 32 TDU and DSA state data from the first rank registers to the second rank registers. |
| Update Command               | 1 1 1                            | Advances sequencer while in SPI mode.                                                           |

## SPECIFICATIONS

## SHIFT REGISTER MODE

The ADAR4002-CSL offers an extremely simple serial shift register mode by asserting the MODE pin high. In this mode, there are no register addresses, no sequencer functionality, and no short commands. The shift register has dual rank data registers and is controlled with the UPDATE pin. The digital pins of the ADAR4002-CSL are configured for a daisy-chain operation, with the possibility of one ADAR4002-CSL driving another, in as long a chain as required. Data comes in on CLK\_IN and DATA\_IO and shifts out on CSB/CLKO and DATA\_O. Data is serially shifted through the full chain of the devices. Once the correct TDU and DSA data are in the correct devices, an update signal is given to load the data into the second rank register of the several devices. The second rank register data is immediately applied to the various TDUs and DSAs on all the daisy chained ADAR4002-CSL devices. Shift register mode timing is shown in Figure 8.

Figure 8. Timing Diagram for Two ADAR4002-CSL Chips Daisy-Chained Together While in Shift Register Mode (Chip 1 Drives Chip 2)

<!-- image -->

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V1P2 = 1.2 V, V1P0 = 1.0 V, T A = 25°C, and frequency = 10 GHz, unless otherwise noted. TID testing characterized to 30 krads, 50 krads, and 100 krads. Tested per MIL-STD-883 TM1019 with any deviations noted.

Table 5. Radiation Specifications

| Parameter              | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|------------------------|----------------------------|-------|-------|-------|--------|
| SUPPLY CHARACTERISTICS |                            |       |       |       |        |
| Quiescent Current      |                            |       |       |       |        |
| V1P2                   |                            |       |       | 0.4   | mA     |
| V1P0                   |                            |       |       | 0.6   | mA     |
| RF SECTION             |                            |       |       |       |        |
| Time Delay Slope       | Range 0                    | 3.9   |       | 4.2   | ps/LSB |
|                        | Range 1                    | 1.9   |       | 2.15  | ps/LSB |
| Attenuation Slope      |                            |       |       |       |        |
|                        | 5 GHz                      | 0.43  |       | 0.60  | dB/LSB |
|                        | 10 GHz                     | 0.47  |       | 0.57  | dB/LSB |
|                        | 15 GHz                     | 0.48  |       | 0.55  | dB/LSB |
| Gain                   | Range = 1                  |       |       |       |        |
|                        | 5 GHz                      | -11.8 |       | -9.8  | dB     |
|                        | 10 GHz                     | -17.8 |       | -15.8 | dB     |
|                        | 15 GHz                     | -23.2 |       | -21.2 | dB     |

## ABSOLUTE MAXIMUM RATINGS

## Table 6. Absolute Maximum Ratings

| Parameter                                           | Rating           |
|-----------------------------------------------------|------------------|
| V1P2 to GND                                         | 1.35 V           |
| V1P0 to GND                                         | 1.15 V           |
| CSB/CLKO, CLK_IN, DATA_IO, DATA_O, UPDATE, and MODE | -0.5 V to +1.8 V |
| Maximum RF Input Power (RF1 or RF2)                 | 18 dBm           |
| Temperature                                         |                  |
| Operating Range                                     | -40°C to +85°C   |
| Storage Range                                       | -65°C to +150°C  |
| Reflow Soldering, Peak                              | 260°C            |
| Maximum Junction (T J )                             | 125°C            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. The PCB thermal design requires careful attention.

θ JA is the junction to the ambient with the exposed pad soldered down, θ JB is junction to board, θ JC\_TOP is the junction to the top of the package, and θ JC\_BOTTOM is the junction to the exposed pad.

## Table 7. Thermal Resistance

| Package Type 1   |   θ JA |   θ JB |   θ JC_TOP |   θ JC_BOTTOM | Unit   |
|------------------|--------|--------|------------|---------------|--------|
| CP-14-6          |   63.9 |   24.9 |       68.5 |          15.4 | °C/W   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 8. Outgas Testing Results

| Specification         | Value   | Unit   |
|-----------------------|---------|--------|
| TML                   | 0.03    | %      |
| CVCM                  | <0.01   | %      |
| Water Vapor Recovered | 0.03    | %      |

## RADIATION FEATURES

## Table 9. Radiation Features

| Specification                                                                  | Value   | Unit       |
|--------------------------------------------------------------------------------|---------|------------|
| Maximum Total Dose Available (Dose Rate = 50 rad (Si)/sec to 300 rad (Si)/sec) | 100     | Krad (Si)  |
| No Single-Event Latch-Up (SEL) Occurs at Effective                             | ≤60     | MeV-cm2/mg |
| Linear Energy Transfer (LET) 1                                                 |         |            |

1 Limits are characterized at the initial qualification and after any design or process changes that may affect the SEL characteristics but are not production lot tested, unless specified by the customer through the purchase order or contract. For more information on single-event effect (SEE) test results, contact Analog Devices, Inc, Technical Support for further data beyond the published report.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001-2014

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for the ADAR4002-CSL

Table 10. ADAR4002-CSL, 14-Lead LFCSP

| ESD Model   | Withstand Threshold (kV)   | Class   |
|-------------|----------------------------|---------|
| HBM         | ±2                         | 2       |
| CDM         | ±1.25                      | C5      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 9. Pin Configuration

<!-- image -->

Table 11. Pin Function Descriptions

| Pin No.     | Mnemonic    | Description                                                                                                                                                                                                                                                                                                          |
|-------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 8, 10 | GND         | RF and Analog Ground. Tie all ground pads together to a low impedance plane on the circuit board.                                                                                                                                                                                                                    |
| 2           | RF1         | RF Input or Output Looking into the DSA. Internal DC bias is 0 V. AC coupling is required if the bias of the connected device differs so that the ADAR4002-CSL internal bias is not disturbed.                                                                                                                       |
| 4           | V1P0        | Digital Supply. Apply 1.0 V.                                                                                                                                                                                                                                                                                         |
| 5           | CLK_IN      | Serial Clock Input for Both Digital Modes (1.0 V Logic).                                                                                                                                                                                                                                                             |
| 6           | DATA_IO     | Dual Direction Pin. DATA_IO is used for both SPI mode and shift register mode. While in the 3-wire SPI protocol, this pin is the serial data input and output. While in the 4-wire SPI protocol, this pin is the serial data input. While in shift register mode, this pin is the register data input (1.0 V logic). |
| 7           | MODE        | Digital Mode Select for Digital Input and Output Data (1.0 V Logic). If MODE is low (ground), it is in SPI mode, and if MODE is high, it is in shift register mode.                                                                                                                                                  |
| 9           | RF2         | RF Input or Output Looking into the TDU. Internal DC bias is 0 V. AC coupling is required if the bias of the connected device differs so that the ADAR4002-CSL internal bias is not disturbed.                                                                                                                       |
| 11          | V1P2        | RF Supply Voltage. Apply 1.2 V.                                                                                                                                                                                                                                                                                      |
| 12          | DATA_O      | Serial Data Output for Both Digital Modes. While in the 4-wire SPI protocol, this pin is the serial data output. While in shift register mode, this pin is the shift register data output (1.0 V logic).                                                                                                             |
| 13          | CSB/CLKO    | While in SPI mode, chip select (CSB).                                                                                                                                                                                                                                                                                |
| 14          | UPDATE      | While in SPI mode, UPDATE advances the sequencer. While in shift register mode, UPDATE loads data from the shift register to TDU and DSA (1.0 V logic).                                                                                                                                                              |
| EP          | Exposed Pad | RF and Analog Ground. Tie to a low impedance ground plane on the PCB.                                                                                                                                                                                                                                                |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADAR4002 data sheet for typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                                                                          |
|----------------------------|----------------|----------------------------------------------------------------------------------------------|
| CP-14-6                    | LFCSP          | 14-Lead Lead Frame Chip Scale Package, 3 mm × 2 mm Body and 0.75 mm Package Height with EPAD |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                                | Package Quantity   | Package Option   | Marking Code   |
|--------------------|---------------------|----------------------------------------------------|--------------------|------------------|----------------|
| ADAR4002ACPZ-CSL   | -40°C to +85°C      | 14-Lead LFCSP (3 mm × 2 mm × 0.75 mm with an EPAD) |                    | CP-14-6          | Q2A            |
| ADAR4002ACPZR7-CSL | -40°C to +85°C      | 14-Lead LFCSP (3 mm × 2 mm × 0.75 mm with an EPAD) | Reel, 3000         | CP-14-6          | Q2A            |

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.