<!-- lastmod 2021-12-20 -->
<!-- image -->

Known Good Die

## FEATURES

- Low power at high voltage (18 V): 725 µA maximum
- Low offset voltage
- 150 µV maximum at V SY /2
- 300 µV maximum over entire common-mode range
- Low input bias current: 15 pA maximum
- Gain bandwidth product: 4 MHz typical at A V = 100
- Unity-gain crossover: 4 MHz typical
- -3 dB closed-loop gain: 2.1 MHz typical
- Single-supply operation: 3 V to 18 V
- Dual-supply operation: ±1.5 V to ±9 V
- Unity-gain stable

## APPLICATIONS

- Current shunt monitors
- Active filters
- Portable medical equipment
- Buffer/level shifting
- High impedance sensor interfaces
- Battery-powered instrumentation

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

Rev. 0

## [ADA4661-2-KGD](http://www.analog.com/ADA4661-2)

## 18 V, Precision, 725 µA, 4 MHz, CMOS RRIO Operational Amplifier

## GENERAL DESCRIPTION

The ADA4661-2-KGD is a dual, precision, rail-to-rail input/output amplifier optimized for low power, high bandwidth, and wide operating supply voltage range applications.

The ADA4661-2-KGD performance is guaranteed at 3.0 V, 10 V, and 18 V power supply voltages. It uses the Analog Devices, Inc., patented DigiTrim ®  trimming technique, which achieves low offset voltage. Additionally, the unique design architecture of the ADA4661-2-KGD allows it to have excellent power supply rejection, common-mode rejection, and offset voltage when operating in the common-mode voltage range of -V SY + 1.5 V to +V SY - 1.5 V.

The ADA4661-2-KGD is specified over the extended industrial temperature range (-40°C to +125°C). Additional application and technical information can be found in the ADA4661-2 data sheet.

Known Good Die (KGD): these die are guaranteed to data sheet specifications.

## TABLE OF CONTENTS

Features................................................................ 1

Applications........................................................... 1

General Description...............................................1

Functional Block Diagram......................................1

Specifications........................................................ 3

Electrical Characteristics-18 V...........................3

Electrical Characteristics-10 V...........................4

Electrical Characteristics-3 V.............................6

## REVISION HISTORY

12/2021-Revision 0: Initial Version

| Absolute Maximum Ratings...................................8                             |    |
|------------------------------------------------------------------------------------------|----|
| Electrostatic Discharge (ESD) Ratings...............8                                    |    |
| ESD Caution.......................................................8                      |    |
| Pin Configuration and Function Description..........                                     |  9 |
| Outline Dimensions.............................................                          | 10 |
| Die Specifications and Assembly Recommendations......................................... | 10 |
| Ordering Guide.................................................11                        |    |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-18 V

VSY = 18 V, V CM  = V SY /2 V, and T A = 25°C, unless otherwise noted.

Table 1.

| Parameter                    | Symbol    | Test Conditions/Comments                                                   |   Min | Typ   |   Max | Unit   |
|------------------------------|-----------|----------------------------------------------------------------------------|-------|-------|-------|--------|
| INPUT CHARACTERISTICS        |           |                                                                            |       |       |       |        |
| Offset Voltage               | V OS      |                                                                            |       | 30    |   150 | µV     |
|                              |           | V CM = 1.5 V to 16.5 V                                                     |       |       |   150 | µV     |
|                              |           | V CM = 1.5 V to 16.5 V, -40°C ≤ T A ≤ +125°C                               |       |       |   500 | µV     |
|                              |           | V CM = 0 V to 18 V                                                         |       |       |   300 | µV     |
|                              |           | V CM = 0 V to 18 V, -40°C ≤ T A ≤ +125°C                                   |       |       |   600 | µV     |
| Offset Voltage Drift         | ∆V OS /∆T | -40°C ≤ T A ≤ +125°C                                                       |       | 0.6   |   3.1 | µV/°C  |
| Input Bias Current           | I B       |                                                                            |       | 0.5   |    15 | pA     |
|                              |           | -40°C ≤ T A ≤ +85°C                                                        |       |       |   100 | pA     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                       |       |       |   900 | pA     |
| Input Offset Current         | I OS      |                                                                            |       |       |    11 | pA     |
|                              |           | -40°C ≤ T A ≤ +85°C                                                        |       |       |    30 | pA     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                       |       |       |   300 | pA     |
| Input Voltage Range          |           |                                                                            |     0 |       |    18 | V      |
| Common-Mode Rejection Ratio  | CMRR      | V CM = 1.5 V to 16.5 V                                                     |   115 | 135   |       | dB     |
|                              |           | V CM = 1.5 V to 16.5 V, -40°C ≤ T A ≤ +125°C                               |   110 |       |       | dB     |
|                              |           | V CM = 0 V to 18 V                                                         |   100 | 118   |       | dB     |
|                              |           | V CM = 0 V to 18 V, -40°C ≤ T A ≤ +125°C                                   |    91 |       |       | dB     |
| Large Signal Voltage Gain    | A VO      | Load resistance (R L ) = 100 kΩ, output voltage (V OUT ) = 0.5 V to 17.5 V |   120 | 147   |       | dB     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                       |   120 |       |       | dB     |
| Input Resistance             |           |                                                                            |       |       |       |        |
| Differential Mode            | R INDM    |                                                                            |       | >10   |       | GΩ     |
| Common Mode                  | R INCM    |                                                                            |       | >10   |       | GΩ     |
| Input Capacitance            |           |                                                                            |       |       |       |        |
| Differential Mode            | C INDM    |                                                                            |       | 8.5   |       | pF     |
| Common Mode                  | C INCM    |                                                                            |       | 3     |       | pF     |
| OUTPUT CHARACTERISTICS       |           |                                                                            |       |       |       |        |
| Output Voltage               |           |                                                                            |       |       |       |        |
| High                         | V OH      | R L = 10 kΩ to V CM                                                        |       | 17.97 |       | V      |
|                              |           | R L = 1 kΩ to V CM                                                         |       | 17.97 |       | V      |
| Low                          | V OL      | R L = 10 kΩ to V CM                                                        |       | 14    |       | mV     |
|                              |           | R L = 1 kΩ to V CM                                                         |       | 120   |       | mV     |
| Continuous Output Current    | I OUT     | Dropout voltage = 1 V                                                      |       | 40    |       | mA     |
| Short-Circuit Current        | I SC      | Pulse width = 10 ms                                                        |       | ±220  |       | mA     |
| Closed-Loop Output Impedance | Z OUT     | f = 100 kHz, voltage gain (A V ) = 1                                       |       | 0.2   |       | Ω      |
| POWER SUPPLY                 |           |                                                                            |       |       |       |        |
| Power Supply Rejection Ratio | PSRR      | V SY = 3.0 V to 18 V                                                       |   120 | 145   |       | dB     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                       |   120 |       |       | dB     |
| Supply Current per Amplifier | I SY      | Output current (I OUT ) = 0 mA                                             |       | 630   |   725 | µA     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                       |       |       |   975 | µA     |

## SPECIFICATIONS

Table 1.

| Parameter                                                   | Symbol   | Test Conditions/Comments                                                               | Min   |    Typ | Max   | Unit    |
|-------------------------------------------------------------|----------|----------------------------------------------------------------------------------------|-------|--------|-------|---------|
| DYNAMIC PERFORMANCE                                         |          |                                                                                        |       |        |       |         |
| Slew Rate                                                   | SR       | Source resistance (R S ) = 1 kΩ, R L = 10 kΩ, load capacitance (C L ) = 10 pF, A V = 1 |       |      2 |       | V/µs    |
| Gain Bandwidth Product                                      | GBP      | Input voltage (V IN ) = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 100                 |       |      4 |       | MHz     |
| Unity-Gain Crossover                                        | UGC      | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1                                    |       |      4 |       | MHz     |
| -3 dB Closed-Loop Bandwidth                                 | f -3 dB  | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1                                    |       |    2.1 |       | MHz     |
| Phase Margin                                                | Φ M      | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1                                    |       |     60 |       | Degrees |
| Settling Time to 0.1%                                       | t S      | V IN = 1 V step, R L = 10 kΩ, C L = 10 pF                                              |       |    1.3 |       | µs      |
| Channel Separation                                          | CS       | V IN = 17.9 V p-p, f = 10 kHz, R L = 10 kΩ                                             |       |     80 |       | dB      |
| Electromagnetic Interference (EMI) Rejection Ratio of +IN x | EMIRR    | V IN = 100 mV peak (200 mV p-p)                                                        |       |     34 |       |         |
| f = 400 MHz                                                 |          |                                                                                        |       |        |       | dB      |
| f = 900 MHz                                                 |          |                                                                                        |       |     42 |       | dB      |
| f = 1800 MHz                                                |          |                                                                                        |       |     50 |       | dB      |
| f = 2400 MHz                                                |          |                                                                                        |       |     60 |       | dB      |
| NOISE PERFORMANCE                                           |          |                                                                                        |       |        |       |         |
| Total Harmonic Distortion Plus Noise Bandwidth = 80 kHz     | THD + N  | A V = 1, V IN = 5.4 V rms at 1 kHz                                                     |       | 0.0004 |       | %       |
| Bandwidth = 500 kHz                                         |          |                                                                                        |       | 0.0008 |       | %       |
| Peak-to-Peak Noise                                          | e n p-p  | f = 0.1 Hz to 10 Hz                                                                    |       |      3 |       | µV p-p  |
| Voltage Noise Density                                       | e n      | f = 1 kHz                                                                              |       |     18 |       | nV/√Hz  |
|                                                             |          | f = 10 kHz                                                                             |       |     14 |       | nV/√Hz  |
| Current Noise Density                                       | i n      | f = 1 kHz                                                                              |       |    360 |       | fA/√Hz  |

## ELECTRICAL CHARACTERISTICS-10 V

Power supply voltage (V SY ) = 10 V, common-mode voltage (V CM ) = V SY /2 V, and T A = 25°C, unless otherwise noted.

## Table 2.

| Parameter                   | Symbol    | Test Conditions/Comments                    |   Min |   Typ |   Max | Unit   |
|-----------------------------|-----------|---------------------------------------------|-------|-------|-------|--------|
| INPUT CHARACTERISTICS       |           |                                             |       |       |       |        |
| Offset Voltage              | V OS      |                                             |       |    30 |   150 | µV     |
|                             |           | V CM = 1.5 V to 8.5 V                       |       |       |   150 | µV     |
|                             |           | V CM = 1.5 V to 8.5 V, -40°C ≤ T A ≤ +125°C |       |       |   450 | µV     |
|                             |           | V CM = 0 V to 10 V                          |       |       |   300 | µV     |
|                             |           | V CM = 0 V to 10 V, -40°C ≤ T A ≤ +125°C    |       |       |   600 | µV     |
| Offset Voltage Drift        | ∆V OS /∆T | -40°C ≤ T A ≤ +125°C                        |       |   0.6 |   3.1 | µV/°C  |
| Input Bias Current          | I B       |                                             |       |  0.25 |    15 | pA     |
|                             |           | -40°C ≤ T A ≤ +85°C                         |       |       |    80 | pA     |
|                             |           | -40°C ≤ T A ≤ +125°C                        |       |       |   750 | pA     |
| Input Offset Current        | I OS      |                                             |       |       |    11 | pA     |
|                             |           | -40°C ≤ T A ≤ +85°C                         |       |       |    30 | pA     |
|                             |           | -40°C ≤ T A ≤ +125°C                        |       |       |   270 | pA     |
| Input Voltage Range         |           |                                             |     0 |       |    10 | V      |
| Common-Mode Rejection Ratio | CMRR      | V CM = 1.5 V to 8.5 V                       |   115 |   140 |       | dB     |
|                             |           | V CM = 1.5 V to 8.5 V, -40°C ≤ T A ≤ +125°C |   115 |       |       | dB     |
|                             |           | V CM = 0 V to 10 V                          |    95 |   114 |       | dB     |
|                             |           | V CM = 0 V to 10 V, -40°C ≤ T A ≤ +125°C    |    86 |       |       | dB     |

## SPECIFICATIONS

Table 2.

| Parameter                            | Symbol   | Test Conditions/Comments                                                               |   Min | Typ    |   Max | Unit    |
|--------------------------------------|----------|----------------------------------------------------------------------------------------|-------|--------|-------|---------|
| Large Signal Voltage Gain            | A VO     | Load resistance (R L ) = 100 kΩ, output voltage (V OUT ) = 0.5 V to 9.5 V              |   120 | 145    |       | dB      |
|                                      |          | -40°C ≤ T A ≤ +125°C                                                                   |   120 |        |       | dB      |
| Input Resistance                     |          |                                                                                        |       |        |       |         |
| Differential Mode                    | R INDM   |                                                                                        |       | >10    |       | GΩ      |
| Common Mode                          | R INCM   |                                                                                        |       | >10    |       | GΩ      |
| Input Capacitance                    |          |                                                                                        |       |        |       |         |
| Differential Mode                    | C INDM   |                                                                                        |       | 8.5    |       | pF      |
| Common Mode                          | C INCM   |                                                                                        |       | 3      |       | pF      |
| OUTPUT CHARACTERISTICS               |          |                                                                                        |       |        |       |         |
| Output Voltage                       |          |                                                                                        |       |        |       |         |
| High                                 | V OH     | R L = 10 kΩ to V CM                                                                    |       | 9.98   |       | V       |
|                                      |          | R L = 1 kΩ to V CM                                                                     |       | 9.88   |       |         |
| Low                                  | V OL     | R L = 10 kΩ to V CM                                                                    |       | 10     |       | mV      |
|                                      |          | R L = 1 kΩ to V CM                                                                     |       | 77     |       |         |
| Continuous Output Current            | I OUT    | Dropout voltage = 1 V                                                                  |       | 40     |       | mA      |
| Short-Circuit Current                | I SC     | Pulse width = 10 ms                                                                    |       | ±220   |       | mA      |
| Closed-Loop Output Impedance         | Z OUT    | f = 100 kHz, voltage gain (A V ) = 1                                                   |       | 0.2    |       | Ω       |
| POWER SUPPLY                         |          |                                                                                        |       |        |       |         |
| Power Supply Rejection Ratio         | PSRR     | V SY = 3.0 V to 18 V                                                                   |   120 | 145    |       | dB      |
|                                      |          | -40°C ≤ T A ≤ +125°C                                                                   |   120 |        |       | dB      |
| Supply Current per Amplifier         | I SY     | Output current (I OUT ) = 0 mA                                                         |       | 620    |   725 | µA      |
|                                      |          | -40°C ≤ T A ≤ +125°C                                                                   |       |        |   975 | µA      |
| DYNAMIC PERFORMANCE                  |          |                                                                                        |       |        |       |         |
| Slew Rate                            | SR       | Source resistance (R S ) = 1 kΩ, R L = 10 kΩ, load capacitance (C L ) = 10 pF, A V = 1 |       | 1.8    |       | V/µs    |
| Gain Bandwidth Product               | GBP      | Input voltage (V IN ) = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 100                 |       | 4      |       | MHz     |
| Unity-Gain Crossover                 | UGC      | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1                                    |       | 4      |       | MHz     |
| -3 dB Closed-Loop Bandwidth          | f -3 dB  | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1                                    |       | 2.1    |       | MHz     |
| Phase Margin                         | Φ M      | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1                                    |       | 60     |       | Degrees |
| Settling Time to 0.1%                | t S      | V IN = 1 V step, R L = 10 kΩ, C L = 10 pF                                              |       | 1.3    |       | µs      |
| Channel Separation                   | CS       | V IN = 9.9 V p-p, f = 10 kHz, R L = 10 kΩ                                              |       | 85     |       | dB      |
| EMI Rejection Ratio of +IN x         | EMIRR    | V IN = 100 mV peak (200 mV p-p)                                                        |       |        |       |         |
| f = 400 MHz                          |          |                                                                                        |       | 34     |       | dB      |
| f = 900 MHz                          |          |                                                                                        |       | 42     |       | dB      |
| f = 1800 MHz                         |          |                                                                                        |       | 50     |       | dB      |
| f = 2400 MHz                         |          |                                                                                        |       | 60     |       | dB      |
| NOISE PERFORMANCE                    |          |                                                                                        |       |        |       |         |
| Total Harmonic Distortion Plus Noise | THD + N  | A V = 1, V IN = 2.2 V rms at 1 kHz                                                     |       |        |       |         |
| Bandwidth = 80 kHz                   |          |                                                                                        |       | 0.0004 |       | %       |
| Bandwidth = 500 kHz                  |          |                                                                                        |       | 0.0008 |       | %       |
| Peak-to-Peak Noise                   | e n p-p  | f = 0.1 Hz to 10 Hz                                                                    |       | 3      |       | µV p-p  |
| Voltage Noise Density                | e n      | f = 1 kHz                                                                              |       | 18     |       | nV/√Hz  |
|                                      |          | f = 10 kHz                                                                             |       | 14     |       | nV/√Hz  |
| Current Noise Density                | i n      | f = 1 kHz                                                                              |       | 360    |       | fA/√Hz  |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-3 V

VSY = 3 V, V CM  = V SY /2 V, and T A = 25°C, unless otherwise specified.

| Parameter                    | Symbol    | Test Conditions/Comments                                                               |   Min | Typ   |   Max | Unit   |
|------------------------------|-----------|----------------------------------------------------------------------------------------|-------|-------|-------|--------|
| INPUT CHARACTERISTICS        |           |                                                                                        |       |       |       |        |
| Offset Voltage               | V OS      |                                                                                        |       | 30    |   150 | µV     |
|                              |           | V CM = V SY /2, -40°C ≤ T A ≤ +125°C                                                   |       |       |   450 | µV     |
|                              |           | V CM = 0 V to 3.0 V                                                                    |       |       |   300 | µV     |
|                              |           | V CM = 0 V to 3.0 V, -40°C ≤ T A ≤ +125°C                                              |       |       |   600 | µV     |
| Offset Voltage Drift         | ∆V OS /∆T | -40°C ≤ T A ≤ +125°C                                                                   |       | 0.6   |   3.1 | µV/°C  |
| Input Bias Current           | I B       |                                                                                        |       | 0.15  |     8 | pA     |
|                              |           | -40°C ≤ T A ≤ +85°C                                                                    |       |       |    45 | pA     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                                   |       |       |   650 | pA     |
| Input Offset Current         | I OS      |                                                                                        |       |       |    11 | pA     |
|                              |           | -40°C ≤ T A ≤ +85°C                                                                    |       |       |    30 | pA     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                                   |       |       |   270 | pA     |
| Input Voltage Range          |           |                                                                                        |     0 |       |     3 | V      |
| Common-Mode Rejection Ratio  | CMRR      | V CM = 0 V to 3.0 V                                                                    |    85 | 100   |       | dB     |
|                              |           | V CM = 0 V to 3.0 V, -40°C ≤ T A ≤ +125°C                                              |    75 |       |       | dB     |
| Large Signal Voltage Gain    | A VO      | Load resistance (R L ) = 100 kΩ, output voltage (V OUT ) = 0.5 V to 2.5 V              |   105 | 130   |       | dB     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                                   |   105 |       |       | dB     |
| Input Resistance             |           |                                                                                        |       |       |       |        |
| Differential Mode            | R INDM    |                                                                                        |       | >10   |       | GΩ     |
| Common Mode                  | R INCM    |                                                                                        |       | >10   |       | GΩ     |
| Input Capacitance            |           |                                                                                        |       |       |       |        |
| Differential Mode            | C INDM    |                                                                                        |       | 8.5   |       | pF     |
| Common Mode                  | C INCM    |                                                                                        |       | 3     |       | pF     |
| OUTPUT CHARACTERISTICS       |           |                                                                                        |       |       |       |        |
| Output Voltage               |           |                                                                                        |       |       |       |        |
| High                         | V OH      | R L = 10 kΩ to V CM                                                                    |       | 2.99  |       | V      |
|                              |           | R L = 1 kΩ to V CM                                                                     |       | 2.96  |       | V      |
| Low                          | V OL      | R L = 10 kΩ to V CM                                                                    |       | 4     |       | mV     |
|                              |           | R L = 1 kΩ to V CM                                                                     |       | 25    |       | mV     |
| Continuous Output Current    | I OUT     | Dropout voltage = 1 V                                                                  |       | 30    |       | mA     |
| Short-Circuit Current        | I SC      | Pulse width = 10 ms                                                                    |       | ±220  |       | mA     |
| Closed-Loop Output Impedance | Z OUT     | f = 100 kHz, voltage gain (A V ) = 1                                                   |       | 0.2   |       | Ω      |
| POWER SUPPLY                 |           |                                                                                        |       |       |       |        |
| Power Supply Rejection Ratio | PSRR      | V SY = 3.0 V to 18 V                                                                   |   120 | 145   |       | dB     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                                   |   120 |       |       | dB     |
| Supply Current per Amplifier | I SY      | Output current (I OUT ) = 0 mA                                                         |       | 615   |   725 | µA     |
|                              |           | -40°C ≤ T A ≤ +125°C                                                                   |       |       |   975 | µA     |
| DYNAMIC PERFORMANCE          |           |                                                                                        |       |       |       |        |
| Slew Rate                    | SR        | Source resistance (R S ) = 1 kΩ, R L = 10 kΩ, load capacitance (C L ) = 10 pF, A V = 1 |       | 1.7   |       | V/µs   |
| Gain Bandwidth Product       | GBP       | Input voltage (V IN ) = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 100                 |       | 4     |       | MHz    |

## SPECIFICATIONS

| Parameter                            | Symbol   | Test Conditions/Comments                            | Min   |   Typ | Max   | Unit    |
|--------------------------------------|----------|-----------------------------------------------------|-------|-------|-------|---------|
| Unity-Gain Crossover                 | UGC      | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1 |       |     4 |       | MHz     |
| -3 dB Closed-Loop Bandwidth          | f -3 dB  | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1 |       |   1.7 |       | MHz     |
| Phase Margin                         | Φ M      | V IN = 10 mV p-p, R L = 10 kΩ, C L = 10 pF, A V = 1 |       |    60 |       | Degrees |
| Settling Time to 0.1%                | t S      | V IN = 1 V step, R L = 10 kΩ, C L = 10 pF           |       |   1.3 |       | µs      |
| Channel Separation                   | CS       | V IN = 2.9 V p-p, f = 10 kHz, R L = 10 kΩ           |       |    90 |       | dB      |
| EMI Rejection Ratio of +IN x         | EMIRR    | V IN = 100 mV peak (200 mV p-p)                     |       |       |       |         |
| f = 400 MHz                          |          |                                                     |       |    34 |       | dB      |
| f = 900 MHz                          |          |                                                     |       |    42 |       | dB      |
| f = 1800 MHz                         |          |                                                     |       |    50 |       | dB      |
| f = 2400 MHz                         |          |                                                     |       |    60 |       | dB      |
| NOISE PERFORMANCE                    |          |                                                     |       |       |       |         |
| Total Harmonic Distortion Plus Noise | THD + N  | A V = 1, V IN = 0.44 V rms at 1 kHz                 |       |       |       |         |
| Bandwidth = 80 kHz                   |          |                                                     |       | 0.002 |       | %       |
| Bandwidth = 500 kHz                  |          |                                                     |       | 0.003 |       | %       |
| Peak-to-Peak Noise                   | e n p-p  | f = 0.1 Hz to 10 Hz                                 |       |     3 |       | µV p-p  |
| Voltage Noise Density                | e n      | f = 1 kHz                                           |       |    18 |       | nV/√Hz  |
|                                      |          | f = 10 kHz                                          |       |    14 |       | nV/√Hz  |
| Current Noise Density                | i n      | f = 1 kHz                                           |       |   360 |       | fA/√Hz  |

## ABSOLUTE MAXIMUM RATINGS

## Table 3.

| Parameter                               | Rating                             |
|-----------------------------------------|------------------------------------|
| Supply Voltage                          | 20.5 V                             |
| Input Voltage Range                     | (V-) - 300 mV to (V+) + 300 mV     |
| Input Current 1                         | ±10 mA                             |
| Differential Input Voltage              | Limited by maximum input cur- rent |
| Output Short-Circuit Duration to Ground | See ADA4661-2 data sheet           |
| Temperature Range                       | Temperature Range                  |
| Storage                                 | -65°C to +150°C                    |
| Operating                               | -40°C to +125°C                    |
| Junction                                | -65°C to +150°C                    |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

Machine model (MM) per ANSI/ESD STM5.2. MM voltage values are for characterization only.

## ESD Ratings for ADA4661-2-KGD

Table 4. ADA4661-2-KGD, 8-Pad CHIP

| ESD Model   | Withstand Threshold (V)   | Class          |
|-------------|---------------------------|----------------|
| HBM         | ±4000                     | 3A             |
| FICDM       | ±1250                     | IV             |
| MM          | ±400                      | Not applicable |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTION

Figure 2. Pad Configuration

<!-- image -->

Table 5. Pad Configuration Descriptions 1

|   Pad No. | Mnemonic   |   X Coordinate |   Y Coordinate | Description                   |
|-----------|------------|----------------|----------------|-------------------------------|
|         1 | OUT A      |           -566 |           +792 | Output, Channel A             |
|         2 | -IN A      |           -553 |           +512 | Inverting Input, Channel A    |
|         3 | +IN A      |           -553 |           +281 | Noninverting Input, Channel A |
|         4 | V-         |           -566 |           -624 | Negative Supply Voltage       |
|         5 | +IN B      |           +553 |           -601 | Noninverting Input, Channel B |
|         6 | -IN B      |           +553 |           -370 | Inverting Input, Channel B    |
|         7 | OUT B      |           +566 |           -112 | Output, Channel B             |
|         8 | V+         |           +566 |           +628 | Positive Supply Voltage       |

1 All dimensions are referenced from the center of the die to the center of each bond pad.

## OUTLINE DIMENSIONS

Figure 3. 8-Pad Bare Die [CHIP] (C-8-25) Dimensions shown in millimeters

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 6. Die Specifications

| Parameter            | Value                                          | Unit           |
|----------------------|------------------------------------------------|----------------|
| Chip Size            | 1265 × 1755                                    | µm             |
| Scribe Line Width    | 160                                            | µm             |
| Die Size             | 1425 × 1915                                    | µm             |
| Thickness            | 305                                            | µm             |
| Backside             | V- or left floating                            | V              |
| Passivation          | 10 kA high density plasma oxide + 7 kA nitride | Not applicable |
| Topcoat Thickness    | 7, Polyimide                                   | µm             |
| Bond Pads (Minimum)  | 80 × 80                                        | µm             |
| Bond Pad Composition | Aluminum (Al), 0.5 Copper (Cu)                 | %              |

## OUTLINE DIMENSIONS

Table 7. Assembly Recommendations

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description   | Packing Quantity   | Package Option   | Marking Code   |
|------------------|---------------------|-----------------------|--------------------|------------------|----------------|
| ADA4661-2-KGD-WP | -40°C to +125°C     | CHIPS OR DIE          | Tray, 320          | C-8-25           | A33            |

<!-- image -->

| Assembly Component   | Recommendation         |
|----------------------|------------------------|
| Die Attach           | Hitachi CEL 9240HF10AK |
| Bonding Method       | 1 mil gold             |
| Bonding Sequence     | Unspecified            |

Updated: December 15, 2021