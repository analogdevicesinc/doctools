<!-- lastmod 2021-07-07 -->
<!-- image -->

Data Sheet

## FEATURES

## High speed

270 MHz, 1090 V/µs at G = +1 High CMRR 90 dB (minimum), dc to 100 kHz 80 dB (minimum) at 2 MHz 70 dB (typical) at 10 MHz High input impedance: 6 MΩ differential Input common-mode range: ±10.5 V Low noise: 12.5 nV/√Hz Low distortion, 1 V p-p at 5 MHz -79 dBc worst harmonic at 5 MHz User adjustable gain No external components for G = +1 Power supply range: ±2.25 to ±12.6 V Power-down

## APPLICATIONS

High speed differential line receivers Differential-to-single-ended converters High speed instrumentation amps Level shifting

## GENERAL DESCRIPTION

The AD8130ACHIPS is designed as a receiver for the transmission of high speed signals over twisted pair cables to work with the AD8131 or AD8132 driver. The AD8130ACHIPS can be used for analog or digital video signals and for high speed data transmission.

The AD8130ACHIPS is a differential to single-ended amplifier with an extremely high common-mode rejection ratio (CMRR) at high frequency. Therefore, this device can also be effectively used as a high speed instrumentation amp or for converting differential signals to single-ended signals.

The AD8130ACHIPS is stable at a gain of 1 and can be used for applications where lower gains are required. The AD8130ACHIPS has a very high input impedance on both inputs, regardless of the gain setting.

## Low Cost, 270 MHz

## Differential Receiver Amplifier

[AD8130ACHIPS](https://www.analog.com/ad8130?doc=AD8130ACHIPS.pdf)

## FUNCTION BLOCK DIAGRAM

Figure 1.

<!-- image -->

The AD8130ACHIPS has excellent common-mode rejection (70 dB at 10 MHz), allowing the use of low cost, unshielded twisted pair cables without fear of corruption by external noise sources or crosstalk. The AD8130ACHIPS has a wide power supply range from a single +5 V to ±12 V, allowing wide common-mode and differential mode voltage ranges while maintaining signal integrity. The wide common-mode voltage range enables the driver and receiver pair to operate without isolation transformers in many systems where the ground potential difference between drive and receive locations is many volts. The AD8130ACHIPS has considerable cost and performance improvements over op amps and other multiamplifier receiving solutions.

Additional application and technical information can be found in the AD8130 data sheet.

## [AD8130ACHIPS](https://www.analog.com/ad8130?doc=AD8130ACHIPS.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1       |
| Function Block Diagram ................................................................. 1                  |
| General Description ......................................................................... 1             |
| Revision History ............................................................................... 2          |
| Specifications .................................................................................... 3       |
| Electrical Characteristics-5 V Operation ................................ 3                                 |
| Electrical Characteristics-±5 V Operation ............................. 5                                   |

## REVISION HISTORY

6 /2021-Revision 0: Initial Version

| Electrical Characteristics-±12 V Operation ............................7                        |
|-------------------------------------------------------------------------------------------------|
| Absolute Maximum Ratings ............................................................9          |
| ESD Caution ..................................................................................9 |
| Pin Configuration and Function Description ............................ 10                      |
| Outline Dimensions ....................................................................... 11   |
| Die Specifications and Assembly Recommendations ........... 11                                  |
| Ordering Guide .......................................................................... 11    |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-5 V OPERATION

G = +1, TA = 25°C, +VS = 5 V, -VS = 0 V, REF = 2.5 V, PD ≥ VIH, load resistance (RLOAD) = 1 kΩ, load capacitance (CL) = 2 pF, unless otherwise specified. TMIN to TMAX = -40°C to +85°C, unless otherwise noted.

Table 1.

| Parameter                                     | Test Conditions/Comments                                    | Min     | Typ      | Max   | Unit     |
|-----------------------------------------------|-------------------------------------------------------------|---------|----------|-------|----------|
| DYNAMIC PERFORMANCE                           |                                                             |         |          |       |          |
| -3 dB Bandwidth                               | Output voltage (V OUT ) ≤ 0.3 V p-p                         | 220     | 250      |       | MHz      |
| Slew Rate                                     | V OUT = 1 V p-p V OUT = 2 V p-p, 25% to 75%                 | 180 810 | 205 930  |       | MHz V/µs |
| Settling Time                                 | V OUT = 2 V p-p, 0.1%                                       |         | 20       |       | ns       |
| Rise and Fall Times                           | V OUT ≤ 1 V p-p, 10% to 90%                                 |         | 1.5      |       | ns       |
| Output Overdrive Recovery                     |                                                             |         | 30       |       | ns       |
| NOISE/DISTORTION                              |                                                             |         |          |       |          |
| Second Harmonic                               | V OUT = 1 V p-p, 5 MHz                                      |         | -72      |       | dBc      |
|                                               | V OUT = 2 V p-p, 5 MHz                                      |         | -65      |       | dBc      |
|                                               | V OUT = 1 V p-p, 10 MHz                                     |         | -60      |       | dBc      |
|                                               | V OUT = 2 V p-p, 10 MHz                                     |         | -68      |       | dBc      |
| Third Harmonic                                | V OUT = 1 V p-p, 5 MHz                                      |         | -79      |       | dBc      |
|                                               | V OUT = 2 V p-p, 5 MHz                                      |         | -71      |       | dBc      |
|                                               | V OUT = 1 V p-p, 10 MHz                                     |         | -62      |       | dBc      |
|                                               | V OUT = 2 V p-p, 10 MHz                                     |         | -68      |       | dBc      |
| Intermodulation Distortion (IMD)              | V OUT = 2 V p-p, 10 MHz                                     |         | -70      |       | dBc      |
| Output Third-Order Intercept (IP3)            | V OUT = 2 V p-p, 10 MHz                                     |         | 26       |       | dBm      |
| Input Voltage Noise (Referred to Input (RTI)) | f ≥ 10 kHz                                                  |         | 12.3     |       | nV/√Hz   |
| Input Current Noise (+IN, -IN)                | f ≥ 100 kHz                                                 |         | 1        |       | pA/√Hz   |
| Input Current Noise (REF, FB)                 | f ≥ 100 kHz                                                 |         | 1.4      |       | pA/√Hz   |
| Differential Gain Error                       | G = +2, NTSC 100 IRE, R LOAD ≥ 150 Ω                        |         | 0.13     |       | %        |
| Differential Phase Error                      | G = +2, NTSC 100 IRE, R LOAD ≥ 150 Ω                        |         | 0.15     |       | Degrees  |
| INPUT CHARACTERISTICS                         |                                                             |         |          |       |          |
| Common-Mode Rejection Ratio (CMRR)            | DC to 100 kHz, common-mode voltage (V CM ) = 1.5 V to 3.5 V | 86      | 96       |       | dB       |
|                                               | V CM = 1 V p-p at 1 MHz                                     | 80      |          |       | dB       |
|                                               | V CM = 1 V p-p at 10 MHz                                    |         | 70       |       | dB       |
| CMRR with V OUT = 1 V p-p                     | V CM = 1 V p-p at 1 kHz, V OUT = ±0.5 V dc                  |         | 72       |       | dB       |
| Common-Mode Voltage Range                     | +IN voltage (V +IN ) - -IN voltage (V -IN ) = 0 V           |         | 1.25 to  |       | V        |
| Differential Operating Range                  |                                                             |         | 3.8 ±2.5 |       | V        |
| Differential Clipping Level                   |                                                             | ±2.3    | ±2.8     | ±3.3  | V        |
| Resistance                                    | Differential                                                |         | 6        |       | MΩ       |
|                                               | Common mode                                                 |         | 4        |       | MΩ       |
|                                               | Common mode                                                 |         | 4        |       | pF       |
| DC PEFORMANCE                                 |                                                             |         |          |       |          |
| Closed-Loop Gain Error                        | V OUT = ±1 V, R LOAD ≥ 150 Ω                                |         | ±0.1     | ±0.6  | %        |
|                                               | T MIN to T MAX                                              |         | 20       |       | ppm/°C   |
| Open-Loop Gain                                | V OUT = ±1 V                                                |         | 71       |       | dB       |
| Gain Nonlinearity                             | V OUT = ±1 V                                                |         | 200      |       | ppm      |
| Input Offset Voltage                          |                                                             |         | 0.4      | 1.8   | mV       |
|                                               | T MIN to T MAX                                              |         | 20       |       | µV/°C    |
|                                               | T MIN to T MAX                                              |         |          | 3.5   | mV       |

## [AD8130ACHIPS](https://www.analog.com/ad8130?doc=AD8130ACHIPS.pdf)

## Data Sheet

| Parameter                                                     | Test Conditions/Comments                                              | Min   | Typ         | Max           | Unit          |
|---------------------------------------------------------------|-----------------------------------------------------------------------|-------|-------------|---------------|---------------|
| Input Offset Voltage vs. Supply                               | +V S = 5 V, -V S = -0.5 V to +0.5 V -V S = 0 V, +V S = 4.5 V to 5.5 V |       | -74 -90     | -70 -76       | dB dB         |
|                                                               |                                                                       |       | ±0.5        | ±2            | µA            |
| Input Bias Current (+IN, -IN) Input Bias Current (REF, FB)    | T MIN to T MAX (+IN, -IN, REF, (+IN, -IN, REF, FB)                    |       | ±1 5        | ±3.5 ±0.4     | µA nA/°C µA   |
| Input Offset Current PERFORMANCE                              | FB)                                                                   |       | ±0.08       |               | nA/°C         |
| OUTPUT Voltage Swing                                          | T MIN to T MAX                                                        |       | 0.2         |               |               |
| Output Current                                                | R LOAD ≥ 150 Ω                                                        | 1.1   | 35          | 3.9           | V mA          |
| Sourcing Output Impedance                                     | PD ≤ V IL , in power-down                                             |       | 10          |               | pF            |
|                                                               | T MIN to T MAX                                                        |       | -240        |               | µA/°C         |
|                                                               | mode                                                                  |       |             |               |               |
| POWER SUPPLY Operating Voltage Range Quiescent Supply Current | Total supply voltage T MIN to T MAX                                   | ±2.25 | 9.9 33 0.65 | ±12.6 10.6    | V mA µA/°C mA |
| PD PIN Input Voltage                                          | PD ≤ V IL PD ≤ V IL , T MIN to T MAX                                  | +Vs - |             | 0.85 1        | mA V V        |
| High (V IH ) Low (V IL ) Input Current High (I IH )           |                                                                       |       |             | +Vs - -30 -50 | µA            |
| Low (I IL )                                                   | PD = minimum V IH PD = maximum V IH                                   |       |             |               | µA            |
|                                                               | PD ≤ +V S - 3 V                                                       |       |             |               | kΩ            |
| Input Resistance                                              |                                                                       |       |             |               |               |
|                                                               |                                                                       |       | 12.5        |               |               |
|                                                               | PD ≥ +V S - 2 V                                                       |       |             |               |               |
|                                                               |                                                                       |       | 100         |               | kΩ            |
| Enable Time                                                   |                                                                       |       | 0.5         |               | µs            |
|                                                               |                                                                       | -40   |             |               |               |
|                                                               |                                                                       |       |             | +85           |               |
| OPERATING TEMPERATURE RANGE                                   |                                                                       |       |             |               | °C            |

## ELECTRICAL CHARACTERISTICS-±5 V OPERATION

G = +1, TA = 25°C, +VS = ±5 V, REF = 0 V, PD ≥ VIH, RLOAD = 1 kΩ, CL = 2 pF, unless otherwise specified. TMIN to TMAX = -40°C to +85°C, unless otherwise noted.

Table 2.

| Parameter                       | Test Conditions/Comments                | Min   | Typ   | Max   | Unit    |
|---------------------------------|-----------------------------------------|-------|-------|-------|---------|
| DYNAMIC PERFORMANCE             |                                         |       |       |       |         |
| -3 dB Bandwidth                 | V OUT ≤ 0.3 V p-p                       | 240   | 270   |       | MHz     |
|                                 | V OUT = 2 V p-p                         | 140   | 155   |       | MHz     |
| Slew Rate                       | V OUT = 2 V p-p, 25% to 75%             | 950   | 1090  |       | V/µs    |
| Settling Time                   | V OUT = 2 V p-p, 0.1%                   |       | 20    |       | ns      |
| Rise and Fall Times             | V OUT ≤ 1 V p-p, 10% to 90%             |       | 1.4   |       | ns      |
| Output Overdrive Recovery       |                                         |       | 40    |       | ns      |
| NOISE/DISTORTION                |                                         |       |       |       |         |
| Second Harmonic                 | V OUT = 1 V p-p, 5 MHz                  |       | -79   |       | dBc     |
|                                 | V OUT = 2 V p-p, 5 MHz                  |       | -74   |       | dBc     |
|                                 | V OUT = 1 V p-p, 10 MHz                 |       | -74   |       | dBc     |
|                                 | V OUT = 2 V p-p, 10 MHz                 |       | -74   |       | dBc     |
| Third Harmonic                  | V OUT = 1 V p-p, 5 MHz                  |       | -86   |       | dBc     |
|                                 | V OUT = 2 V p-p, 5 MHz                  |       | -81   |       | dBc     |
|                                 | V OUT = 1 V p-p, 10 MHz                 |       | -80   |       | dBc     |
|                                 | V OUT = 2 V p-p, 10 MHz                 |       | -76   |       | dBc     |
| IMD                             | V OUT = 2 V p-p, 10 MHz                 |       | -70   |       | dBc     |
| Output IP3                      | V OUT = 2 V p-p, 10 MHz                 |       | 26    |       | dBm     |
| Input Voltage Noise (RTI)       | f ≥ 10 kHz                              |       | 12.5  |       | nV/√Hz  |
| Input Current Noise (+IN, -IN)  | f ≥ 100 kHz                             |       | 1     |       | pA/√Hz  |
| Input Current Noise (REF, FB)   | f ≥ 100 kHz                             |       | 1.4   |       | pA/√Hz  |
| Differential Gain Error         | G = +2, NTSC 100 IRE, R LOAD ≥ 150 Ω    |       | 0.13  |       | %       |
| Differential Phase Error        | G = +2, NTSC 100 IRE, R LOAD ≥ 150 Ω    |       | 0.15  |       | Degrees |
| INPUT CHARACTERISTICS           |                                         |       |       |       |         |
| CMRR                            | DC to 100 kHz, V CM = -3 V to +3.5 V    | 90    | 110   |       | dB      |
|                                 | V CM = 1 V p-p at 2 MHz                 | 80    |       |       | dB      |
|                                 | V CM = 1 V p-p at 10 MHz                |       | 70    |       | dB      |
| CMRR with V OUT = 1 V p-p       | V CM = 2 V p-p at 1 kHz, V OUT = ±0.5 V |       | 83    |       | dB      |
| Common-Mode Voltage Range       | V +IN - V -IN = 0 V                     |       | ±3.8  |       | V       |
| Differential Operating Range    |                                         |       | ±2.5  |       | V       |
| Differential Clipping Level     |                                         | ±2.3  | ±2.8  | ±3.3  | V       |
| Resistance                      | Differential                            |       | 6     |       | MΩ      |
|                                 | Common mode                             |       | 4     |       | MΩ      |
| Capacitance                     | Differential                            |       | 3     |       | pF      |
|                                 | Common mode                             |       | 4     |       | pF      |
| DC PEFORMANCE                   |                                         |       |       |       |         |
| Closed-Loop Gain Error          | V OUT = ±1 V, R LOAD ≥ 150 Ω            |       | ±0.15 | ±0.6  | %       |
|                                 | T MIN to T MAX                          |       | 10    |       | ppm/°C  |
| Open-Loop Gain                  | V OUT = ±1 V                            |       | 74    |       | dB      |
| Gain Nonlinearity               | V OUT = ±1 V                            |       | 200   |       | ppm     |
| Input Offset Voltage            |                                         |       | 0.4   | 1.8   | mV      |
|                                 | T MIN to T MAX                          |       | 20    |       | µV/°C   |
|                                 | T MIN to T MAX                          |       |       | 3.5   | mV      |
| Input Offset Voltage vs. Supply | +V S = +5 V, -V S = -4.5 V to -5.5 V    |       | -78   | -74   | dB      |
|                                 | -V S = -5 V, +V S = +4.5 V to +5.5 V    |       | -80   | -74   | dB      |

## [AD8130ACHIPS](https://www.analog.com/ad8130?doc=AD8130ACHIPS.pdf)

## Data Sheet

| Parameter                   | Test Conditions/Comments       | Min        | Typ   | Max        | Unit   |
|-----------------------------|--------------------------------|------------|-------|------------|--------|
| Input Bias Current          |                                |            |       |            |        |
| +IN, -IN                    |                                |            | ±0.5  | ±2         | µA     |
| REF, FB                     |                                |            | ±1    | ±3.5       | µA     |
| +IN, -IN, REF, FB           | T MIN to T MAX                 |            | 5     |            | nA/°C  |
| Input Offset Current        | +IN, -IN, REF, FB              |            | ±0.08 | ±0.4       | µA     |
|                             | T MIN to T MAX                 |            | 0.2   |            | nA/°C  |
| OUTPUT PERFORMANCE          |                                |            |       |            |        |
| Voltage Swing               | R LOAD = 150 Ω                 | ±3.6       |       |            | V      |
|                             | R LOAD = 1 k Ω                 | ±4.0       |       |            | V      |
| Output Current              |                                |            | 40    |            | mA     |
| Short-Circuit Current       | To common                      |            |       |            | mA     |
| Sinking                     |                                |            | -60   |            | mA     |
| Sourcing                    |                                |            | 55    |            | mA     |
|                             |                                |            | 10    |            |        |
| Output Impedance            | PD ≤ V IL , in power-down mode |            |       |            | pF     |
| POWER SUPPLY                |                                |            |       |            |        |
| Operating Voltage Range     | Total supply voltage           | ±2.25      |       | ±12.6      | V      |
| Quiescent Supply Current    |                                |            | 10.8  | 11.6       | mA     |
|                             | T MIN to T MAX                 |            | 36    |            | µA/°C  |
|                             | PD ≤ V IL                      |            | 0.68  | 0.85       | mA     |
|                             | PD ≤ V IL , T MIN to T MAX     |            |       | 1          | mA     |
| PD PIN                      |                                |            |       |            |        |
| V IH                        |                                | +V S - 1.5 |       |            | V      |
| V IL                        |                                |            |       | +V S - 2.5 | V      |
| I IH                        | PD = minimum V IH              |            |       | -30        | µA     |
| I IL                        | PD = maximum V IH              |            |       | -50        | µA     |
| Input Resistance            | PD ≤ +V S - 3 V                |            | 12.5  |            | kΩ     |
|                             | PD ≥ +V S - 2 V                |            | 100   |            | kΩ     |
| Enable Time                 |                                |            | 0.5   |            | µs     |
| OPERATING TEMPERATURE RANGE |                                | -40        |       | +85        | °C     |

## ELECTRICAL CHARACTERISTICS-±12 V OPERATION

G = +1, TA = 25°C, +VS = ±12 V, REF = 0 V, PD ≥ VIH, RLOAD = 1 kΩ, CL = 2 pF, unless otherwise specified. TMIN to TMAX = -40°C to +85°C, unless otherwise noted.

Table 3.

| Parameter                       | Test Conditions/Comments                   | Min   | Typ     | Max   | Unit     |
|---------------------------------|--------------------------------------------|-------|---------|-------|----------|
| DYNAMIC PERFORMANCE             |                                            |       |         |       |          |
| -3 dB Bandwidth                 | V OUT ≤ 0.3 V p-p                          | 250   | 290     |       | MHz      |
|                                 | V OUT = 2 V p-p                            | 150   | 175     |       | MHz      |
| Slew Rate                       | V OUT = 2 V p-p, 25% to 75%                | 960   | 1100    |       | V/µs     |
| Settling Time                   | V OUT = 2 V p-p, 0.1%                      |       | 20      |       | ns       |
| Rise and Fall Times             | V OUT ≤ 1 V p-p, 10% to 90%                |       | 1.4     |       | ns       |
| Output Overdrive Recovery       |                                            |       | 40      |       | ns       |
| NOISE/DISTORTION                |                                            |       |         |       |          |
| Second Harmonic                 | V OUT = 1 V p-p, 5 MHz                     |       | -79     |       | dBc      |
|                                 | V OUT = 2 V p-p, 5 MHz                     |       | -74     |       | dBc      |
|                                 | V OUT = 1 V p-p, 10 MHz                    |       | -74     |       | dBc      |
|                                 | V OUT = 2 V p-p, 10 MHz                    |       | -74     |       | dBc      |
| Third Harmonic                  | V OUT = 1 V p-p, 5 MHz                     |       | -86     |       | dBc      |
|                                 | V OUT = 2 V p-p, 5 MHz                     |       | -81     |       | dBc      |
|                                 | V OUT = 1 V p-p, 10 MHz                    |       | -80     |       | dBc      |
|                                 | V OUT = 2 V p-p, 10 MHz                    |       | -74     |       | dBc      |
| IMD                             | V OUT = 2 V p-p, 10 MHz                    |       | -70     |       | dBc      |
| Output IP3                      | V OUT = 2 V p-p, 10 MHz                    |       | 26      |       | dBm      |
| Input Voltage Noise (RTI)       | f ≥ 10 kHz                                 |       | 13      |       | nV/√Hz   |
| Input Current Noise (+IN, -IN)  | f ≥ 100 kHz                                |       | 1       |       | pA/√Hz   |
| Input Current Noise (REF, FB)   | f ≥ 100 kHz                                |       | 1.4     |       | pA/√Hz   |
| Differential Gain Error         | G = +2, NTSC 100 IRE, R LOAD ≥ 150 Ω       |       | 0.13    |       | %        |
| Differential Phase Error        | G = +2, NTSC 100 IRE, R LOAD ≥ 150 Ω       |       | 0.2     |       | Degrees  |
| INPUT CHARACTERISTICS           |                                            |       |         |       |          |
| CMRR                            | DC to 100 kHz, V CM = ±10 V                | 88    | 105     |       | dB       |
|                                 | V CM = 1 V p-p at 2 MHz                    | 80    |         |       | dB       |
|                                 | V CM = 1 V p-p at 10 MHz                   |       | 70      |       | dB       |
| CMRR with V OUT = 1 V p-p       | V CM = 4 V p-p at 1 kHz, V OUT = ±0.5 V dc |       | 80      |       | dB       |
| Common-Mode Voltage Range       | V +IN - V -IN = 0 V                        |       | ±10.5   |       | V        |
| Differential Operating Range    |                                            |       | ±2.5    |       | V        |
| Differential Clipping Level     |                                            | ±2.3  | ±2.8    | ±3.3  | V        |
| Resistance                      | Differential                               |       | 6       |       | MΩ       |
| Capacitance                     | Differential                               |       | 3       |       | pF       |
|                                 | Common mode                                |       | 4       |       | pF       |
| DC PEFORMANCE                   |                                            |       |         |       |          |
| Closed-Loop Gain Error          | V OUT = ±1 V, R LOAD ≥ 150 Ω               |       | ±0.15   | ±0.6  | %        |
|                                 | T MIN to T MAX                             |       | 10      |       | ppm/°C   |
| Open-Loop Gain                  | V OUT = ±1 V                               |       | 73      |       | dB       |
| Gain Nonlinearity               | V OUT = ±1 V                               |       | 200 0.4 |       | ppm      |
| Input Offset Voltage            | T to T                                     |       | 20      | 1.8   | mV µV/°C |
|                                 | T MIN to T MAX                             |       |         | 3.5   | mV       |
| Input Offset Voltage vs. Supply | +V S = +12 V, -V S = -11.0 V to -13.0 V    |       | -77     | -70   | dB       |
|                                 | -V S = -12 V, +V S = 11.0 V to 13.0 V      |       | -88     | -70   | dB       |

## [AD8130ACHIPS](https://www.analog.com/ad8130?doc=AD8130ACHIPS.pdf)

## Data Sheet

| Parameter                   | Test Conditions/Comments       | Min        | Typ   | Max        | Unit   |
|-----------------------------|--------------------------------|------------|-------|------------|--------|
| Input Bias Current          |                                |            |       |            |        |
| +IN, -IN                    |                                |            | ±0.25 | ±2         | µA     |
| REF, FB                     |                                |            | ±0.5  | ±3.5       | µA     |
| +IN, -IN, REF, FB           | T MIN to T MAX                 |            | 2.5   |            | nA/°C  |
| Input Offset Current        | +IN, -IN, REF, FB              |            | ±0.08 | ±0.4       | µA     |
|                             | T MIN to T MAX                 |            | 0.2   |            | nA/°C  |
| OUTPUT PERFORMANCE          |                                |            |       |            |        |
| Voltage Swing               | R LOAD = 700 Ω                 | ±10.8      |       |            | V      |
| Output Current              |                                |            | 40    |            | mA     |
| Short-Circuit Current       | To common                      |            |       |            | mA     |
| Sinking                     |                                |            | -60   |            | mA     |
| Sourcing                    |                                |            | 55    |            | mA     |
|                             | T MIN to T MAX                 |            | -240  |            | µA/°C  |
| Output Impedance            | PD ≤ V IL , in power-down mode |            | 10    |            | pF     |
| POWER SUPPLY                |                                |            |       |            |        |
| Operating Voltage Range     | Total supply voltage           | ±2.25      |       | ±12.6      | V      |
| Quiescent Supply Current    |                                |            | 13    | 13.9       | mA     |
|                             | T MIN to T MAX                 |            | 43    |            | µA/°C  |
|                             | PD ≤ V IL                      |            | 0.73  | 0.9        | mA     |
|                             | PD ≤ V IL , T MIN to T MAX     |            |       | 1.1        | mA     |
| PDPIN                       |                                |            |       |            |        |
| V IH                        |                                | +V S - 1.5 |       |            | V      |
| V IL                        |                                |            |       | +V S - 2.5 | V      |
| I IH                        | PD = minimum V IH              |            |       | -30        | µA     |
| I IL                        | PD = maximum V IH              |            |       | -50        | µA     |
| Input Resistance            | PD ≤ +V S - 3 V                |            | 3     |            | kΩ     |
|                             | PD ≥ +V S - 2 V                |            | 100   |            | kΩ     |
| Enable Time                 |                                |            | 0.5   |            | µs     |
| OPERATING TEMPERATURE RANGE |                                | -40        |       | +85        | °C     |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                  | Rating                       |
|----------------------------|------------------------------|
| Supply Voltage             | 26.4 V                       |
| Input Voltage (Any Input)  | -V S - 0.3 V to +V S + 0.3 V |
| Differential Input Voltage | ±8.4 V                       |
| Storage Temperature Range  | -40°C to +85°C               |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device. Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to

## PIN CONFIGURATION AND FUNCTION DESCRIPTION

Figure 2. Pad Configuration

<!-- image -->

Table 5. Pad Configuration Descriptions 1

|   Pad No. | Mnemonic   |   X-Axis (µm) |   Y-Axis (µm) | Description             |
|-----------|------------|---------------|---------------|-------------------------|
|         1 | +IN        |          -385 |          +465 | Noninverting Input      |
|         2 | -V S       |          -385 |          -204 | Negative Supply Voltage |
|         3 | PD         |          -385 |          -352 | Power-Down              |
|         4 | REF        |          -385 |          -484 | Reference               |
|         5 | FB         |          +385 |          -506 | Feedback                |
|         6 | OUT        |          +385 |           -41 | Output                  |
|         7 | +V S       |          +385 |          +198 | Positive Supply Voltage |
|         8 | -IN        |          +385 |          +465 | Inverting Input         |

1 All dimensions are referenced from the center of the die to the center of each bond pad.

## OUTLINE DIMENSIONS

Figure 3. 8-Pad Bare Die [CHIP] (C-8-26)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 6. Die Specifications

| Parameter            | Value                               | Unit           |
|----------------------|-------------------------------------|----------------|
| Chip Size            | 1020 × 1330                         | µm             |
| Scribe Line Width    | 75                                  | µm             |
| Die Size             | 1095 × 1405                         | µm             |
| Thickness            | 305                                 | µm             |
| Backside             | -V S or left floating               | V              |
| Passivation          | Doped oxide/silicon nitride (SiN)   | Not applicable |
| Polyimide Thickness  | 7                                   | µm             |
| Bond Pads (Minimum)  | 92 × 92                             | µm             |
| Bond Pad Composition | 99.5 aluminum (Al), 0.5 copper (Cu) | %              |

## Table 7. Assembly Recommendations

| Assembly Component   | Recommendation               |
|----------------------|------------------------------|
| Die Attach           | Hitachi EN 4900GC conductive |
| Bonding Method       | 1 mil gold                   |
| Bonding Sequence     | Unspecified                  |

## ORDERING GUIDE

| Model 1      | Temperature Range   | Package Description                | Package Option   |   Ordering Quantity |
|--------------|---------------------|------------------------------------|------------------|---------------------|
| AD8130ACHIPS | -40°C to +85°C      | 8-Pad Bare Die [CHIP], Waffle Pack | C-8-26           |                1980 |

<!-- image -->

12-01-2020-A