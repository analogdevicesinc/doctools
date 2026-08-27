<!-- lastmod 2019-12-19 -->
<!-- image -->

Data Sheet

## FEATURES

Low offset voltage: 50 µV maximum Very low offset voltage drift: 0.3 µV/ ° C maximum Low noise: 0.12 µV p-p (0.1 Hz to 10 Hz) Excellent output drive: ±10 V at ±50 mA Capacitive load stability: up to 1 µF Gain range: 0.1 to 10,000 Excellent linearity: 16-bit at G = 1000 High CMR: 125 dB minimum (G = 1000) Low bias current: 4 nA maximum Can be configured as a precision op amp Output-stage thermal shutdown Available in die form

## GENERAL DESCRIPTION

The AMP01 1  is a monolithic instrumentation amplifier designed for high-precision data acquisition and instrumentation applications. The design combines the conventional features of an instrumentation amplifier with a high current output stage. The output remains stable with high capacitance loads (1 µF), a unique ability for an instrumentation amplifier. Consequently, the AMP01 can amplify low level signals for transmission through long cables without requiring an output buffer. The output stage can be configured as a voltage or current generator.

Input offset voltage is very low (20 µV), which generally eliminates the external null potentiometer. Temperature

## Low Noise, Precision Instrumentation Amplifier

[AMP01](https://www.analog.com/AMP01?doc=AMP01.pdf)

changes have minimal effect on offset; TCVIOS is typically 0.15 µV/°C. Excellent low frequency noise performance is achieved with a minimal compromise on input protection. The bias current is very low, less than 10 nA over the military temperature range. High common-mode rejection of 130 dB, 16-bit linearity at a gain of 1000, and 50 mA peak output current are achievable simultaneously. This combination takes the instrumentation amplifier one step further towards the ideal amplifier.

AC performance complements the superb dc specifications. The AMP01 slews at 4.5 V/µs into capacitive loads of up to 15 nF, settles in 50 µs to 0.01% at a gain of 1000, and boasts a healthy 26 MHz gain bandwidth product. These features make the AMP01 ideal for high speed data acquisition systems.

The gain is set by the ratio of two external resistors over a range of 0.1 to 10,000. A very low gain temperature coefficient of 10 ppm/°C is achievable over the whole gain range. Output voltage swing is guaranteed with three load resistances: 50 Ω, 500 Ω, and 2 kΩ. Loaded with 500 Ω, the output delivers ±13.0 V minimum. A thermal shutdown circuit prevents destruction of the output transistors during overload conditions.

The AMP01 can also be configured as a high performance operational amplifier. In many applications, the AMP01 can be used in place of op amp/power buffer combinations.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

1 Protected under U.S. Patents 4,471,321 and 4,503,381.

## AMP01

## TABLE OF CONTENTS

| Features ..............................................................................................                                                                                               | 1                                        |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| General Description.........................................................................                                                                                                          | 1                                        |
| Functional Block Diagram ..............................................................                                                                                                               | 1                                        |
| Revision History ...............................................................................                                                                                                      | 2                                        |
| Specifications.....................................................................................                                                                                                   | 3                                        |
| Electrical Characteristics.............................................................                                                                                                               | 3                                        |
| Dice Characteristics .....................................................................                                                                                                            | 8                                        |
| Wafer Test Limits (AMP01NBC)...............................................                                                                                                                           | 9                                        |
| Absolute Maximum Ratings..........................................................                                                                                                                    | 10                                       |
| Thermal Resistance ....................................................................                                                                                                               | 10                                       |
| ESD Caution................................................................................                                                                                                           | 10                                       |
| Pin Configurations and Function Descriptions                                                                                                                                                          | ......................... 11             |
| Typical Performance Characteristics ...........................................                                                                                                                       | 13                                       |
| Theory of Operation ......................................................................                                                                                                            | 18                                       |
| Input and Output Offset Voltages ............................................                                                                                                                         | 18                                       |
| REVISION HISTORY                                                                                                                                                                                      |                                          |
| 12/2019-Rev. E to Rev. F Changes to Table 7..........................................................................                                                                                 | 10                                       |
| Changes to Ordering Guide..........................................................                                                                                                                   | 29                                       |
| 1/2017-Rev. Dto Rev. E Updated Format..................................................................Universal Deleted E-28A Package......................................................Universal |                                          |
| Changed R-20 Package to RW-20 Deleted Pin Connections Section and Figure 1 to Figure 3; Renumbered Sequentially................................................................                       | Package......................Universal 1 |
| Added Functional Block Diagram Section and Figure 1;                                                                                                                                                  |                                          |
| Renumbered Sequentially................................................................                                                                                                               | 1                                        |
| Changes to Figure 2.......................................................................... Changes to Table 5............................................................................          | 8 9                                      |

Input Bias and Offset Currents  ................................................. 18

Gain  .............................................................................................. 18

Common-Mode Rejection ........................................................ 19

Active Guard Drive .................................................................... 19

Grounding ................................................................................... 19

Sense and Reference Terminals ................................................ 20

Driving 50 Ω Loads  .................................................................... 21

Heatsinking ................................................................................. 22

Overvoltage Protection  .............................................................. 22

Power Supply Considerations  ................................................... 22

Applications Circuits  ...................................................................... 23

Outline Dimensions ....................................................................... 29

Ordering Guide .......................................................................... 29

Deleted Figure 5  .................................................................................  9

Deleted Table 6; Renumbered Sequentially ................................ 10

Added Table 6 and Table 7; Renumbered Sequentially ............. 10

Added Pin Configurations and Function Descriptions Section,

Figure 3, and Table 8 ...................................................................... 11

Added Figure 4 and Table 9 .......................................................... 12

Changes to Input and Output Offset Voltages Section and

Gain Section .................................................................................... 18

Changes to Power Supply Considerations Section .................... 22

Added Applications Circuits Section  ........................................... 29

Updated Package Drawings .......................................................... 29

Changes to Ordering Guide .......................................................... 29

## SPECIFICATIONS ELECTRICAL CHARACTERISTICS

VS = ±15 V, RS = 10 kΩ, RL = 2 kΩ, TA = 25°C, unless otherwise noted.

Table 1.

|                                              |         |                                | AMP01A   | AMP01A   | AMP01A   | AMP01B   | AMP01B   | AMP01B   |       |
|----------------------------------------------|---------|--------------------------------|----------|----------|----------|----------|----------|----------|-------|
| Parameter                                    | Symbol  | Test Conditions/Comments       | Min      | Typ      | Max      | Min      | Typ      | Max      | Unit  |
| OFFSET VOLTAGE                               |         |                                |          |          |          |          |          |          |       |
| Input Offset Voltage                         | V IOS   | T A = 25°C                     |          | 20       | 50       |          | 40       | 100      | µV    |
|                                              |         | -55°C ≤T A ≤ +125°C            |          | 40       | 80       |          | 60       | 150      | µV    |
| Input Offset Voltage Drift                   | TCV IOS | -55°C ≤T A ≤ +125°C            |          | 0.15     | 0.3      |          | 0.3      | 1.0      | µV°C  |
| Output Offset Voltage                        | V OOS   | T A = 25°C                     |          | 1        | 3        |          | 2        | 6        | mV    |
|                                              |         | -55°C ≤T A ≤ +125°C            |          | 3        | 6        |          | 6        | 10       | mV    |
| Output Offset Voltage Drift                  | TCV OOS | R G =∞ -55°C ≤T A ≤ +125°C     |          | 20       | 50       |          | 50       | 120      | µV/°C |
| Offset Referred to Input vs. Positive Supply | PSR     | V+ = +5V to +15V               |          |          |          |          |          |          |       |
|                                              |         | G = 1000                       | 120      | 130      |          | 110      | 120      |          | dB    |
|                                              |         | G = 100                        | 110      | 130      |          | 100      | 120      |          | dB    |
|                                              |         | G = 10                         | 95       | 110      |          | 90       | 100      |          | dB    |
|                                              |         | G = 1                          | 75       | 90       |          | 70       | 80       |          | dB    |
|                                              |         | -55°C ≤T A ≤ +125°C G = 1000   | 120      | 130      |          | 110      | 120      |          | dB    |
|                                              |         | G = 100                        | 110      | 130      |          | 100      | 120      |          | dB    |
|                                              |         | G = 10                         | 95       | 110      |          | 90       | 100      |          | dB    |
|                                              |         | G = 1                          | 75       | 90       |          | 70       | 80       |          | dB    |
| Offset Referred to Input vs. Negative Supply | PSR     | V- = -5V to -15V               |          |          |          |          |          |          |       |
|                                              |         | G = 1000                       | 105      | 125      |          | 105      | 115      |          | dB    |
|                                              |         | G = 100                        | 90       | 105      |          | 90       | 95       |          | dB    |
|                                              |         | G = 10                         | 70       | 85       |          | 70       | 75       |          | dB    |
|                                              |         | G = 1                          | 50       | 65       |          | 50       | 60       |          | dB    |
|                                              |         | -55°C ≤T A ≤ +125°C            |          |          |          |          |          |          |       |
|                                              |         | G = 1000                       | 105      | 125      |          | 105      | 115      |          | dB    |
|                                              |         | G = 100                        | 90       | 105      |          | 90       | 95       |          | dB    |
|                                              |         | G = 10                         | 70       | 85       |          | 70       | 75       |          | dB    |
|                                              |         | G = 1                          | 50       | 85       |          | 50       | 60       |          | dB    |
| Input Offset Voltage Trim Range              |         | V S = ±4.5V to ±18V 1          |          | ±6       |          |          | ±6       |          | mV    |
| Output Offset Voltage Trim Range             |         | V S = ±4.5V to ±18V 1          |          | ±100     |          |          | ±100     |          | mV    |
| INPUT CURRENT                                |         |                                |          |          |          |          |          |          |       |
| Input Bias Current                           | I B     | T A = 25°C                     |          | 1        | 4        |          | 2        | 6        | nA    |
|                                              |         | -55°C ≤T A ≤ +125°C            |          | 4        | 10       |          | 6        | 15       | nA    |
| Input Bias Current Drift                     | TCI B   | -55°C ≤T A ≤ +125°C            |          | 40       |          |          | 50       |          | pA/°C |
| Input Offset Current                         | I OS    | T A = 25°C -55°C ≤T A ≤ +125°C |          | 0.2 0.5  | 1.0 3.0  |          | 0.5 1.0  | 2.0 6.0  | nA nA |
| Input Offset Current Drift                   | TCI OS  | -55°C ≤T A ≤ +125°C            |          | 3        |          |          | 5        |          | pA/°C |

## AMP01

|                       |        |                                     | AMP01A   | AMP01A   | AMP01A   | AMP01B   | AMP01B   | AMP01B   |      |
|-----------------------|--------|-------------------------------------|----------|----------|----------|----------|----------|----------|------|
| Parameter             | Symbol | Test Conditions/Comments            | Min      | Typ      | Max      | Min      | Typ      | Max      | Unit |
| INPUT                 |        |                                     |          |          |          |          |          |          |      |
| Input Resistance      | R IN   | Differential, G = 1000              |          | 1        |          |          | 1        |          | GΩ   |
|                       |        | Differential, G ≤ 100               |          | 10       |          |          | 10       |          | GΩ   |
|                       |        | Commonmode, G = 1000                |          | 20       |          |          | 20       |          | GΩ   |
| Input Voltage Range   | IVR    | T A = 25°C 2                        | ±10.5    |          |          | ±10.5    |          |          | V    |
|                       |        | -55°C ≤T A ≤ +125°C                 | ±10.0    |          |          | ±10.0    |          |          | V    |
| Common-Mode Rejection | CMR    | V CM = ±10 V, 1 kΩ source imbalance |          |          |          |          |          |          |      |
|                       |        | G = 1000                            | 125      | 130      |          | 115      | 125      |          | dB   |
|                       |        | G = 100                             | 120      | 130      |          | 110      | 125      |          | dB   |
|                       |        | G = 10                              | 100      | 120      |          | 95       | 110      |          | dB   |
|                       |        | G = 1                               | 85       | 100      |          | 75       | 90       |          | dB   |
|                       |        | -55°C ≤T A ≤ +125°C                 |          |          |          |          |          |          |      |
|                       |        | G = 1000                            | 120      | 125      |          | 110      | 120      |          | dB   |
|                       |        | G = 100                             | 115      | 125      |          | 105      | 120      |          | dB   |
|                       |        | G = 10                              | 95       | 115      |          | 90       | 105      |          | dB   |
|                       |        | G = 1                               | 80       | 95       |          | 75       | 90       |          | dB   |

## Data Sheet

<!-- image -->

VS = ±15 V , RS = 10 kΩ, RL = 2 kΩ, TA = 25°C, -25°C ≤ TA ≤ +85°C for E and F grades, 0°C ≤ TA ≤ 70°C for G grade, unless otherwise noted.

## Table 2.

|                                              |         |                              | AMP01E   | AMP01E   | AMP01E   | AMP01F/AMP01G   | AMP01F/AMP01G   | AMP01F/AMP01G   |       |
|----------------------------------------------|---------|------------------------------|----------|----------|----------|-----------------|-----------------|-----------------|-------|
| Parameter                                    | Symbol  | Test Conditions/Comments     | Min      | Typ      | Max      | Min             | Typ             | Max             | Unit  |
| OFFSET VOLTAGE                               |         |                              |          |          |          |                 |                 |                 |       |
| Input Offset Voltage                         | V IOS   | T A = 25°C                   |          | 20       | 50       |                 | 40              | 100             | µV    |
|                                              |         | T MIN ≤T A ≤T MAX            |          | 40       | 80       |                 | 60              | 150             | µV    |
| Input Offset Voltage Drift                   | TCV IOS | T MIN ≤T A ≤T MAX 1          |          | 0.15     | 0.3      |                 | 0.3             | 1.0             | µV°C  |
| Output Offset Voltage                        | V OOS   | T A = 25°C                   |          | 1        | 3        |                 | 2               | 6               | mV    |
|                                              |         | T MIN ≤T A ≤T MAX            |          | 3        | 6        |                 | 6               | 10              | mV    |
| Output Offset Voltage Drift                  | TCV OOS | R G =∞ 1 -55°C ≤T A ≤ +125°C |          | 20       | 100      |                 | 50              | 120             | µV/°C |
| Offset Referred to Input vs. Positive Supply | PSR     | V+ = +5V to +15V             |          |          |          |                 |                 |                 |       |
|                                              |         | G = 1000                     | 120      | 130      |          | 110             | 120             |                 | dB    |
|                                              |         | G = 100                      | 110      | 130      |          | 100             | 120             |                 | dB    |
|                                              |         | G = 10                       | 95       | 110      |          | 90              | 100             |                 | dB    |
|                                              |         | G = 1                        | 75       | 90       |          | 70              | 80              |                 | dB    |
|                                              |         | T MIN ≤T A ≤T MAX            |          |          |          |                 |                 |                 |       |
|                                              |         | G = 1000                     | 120      | 130      |          | 110             | 120             |                 | dB    |
|                                              |         | G = 100                      | 110      | 130      |          | 100             | 120             |                 | dB    |
|                                              |         | G = 10                       | 95       | 110      |          | 90              | 100             |                 | dB    |
|                                              |         | G = 1                        | 75       | 90       |          | 70              | 80              |                 | dB    |
| Offset Referred to Input vs. Negative Supply | PSR     | V- = -5V to -15V             |          |          |          |                 |                 |                 |       |
|                                              |         | G = 1000                     | 110      | 125      |          | 105             | 115             |                 | dB    |
|                                              |         | G = 100                      | 95       | 105      |          | 90              | 95              |                 | dB    |
|                                              |         | G = 10                       | 75       | 85       |          | 70              | 75              |                 | dB    |
|                                              |         | G = 1                        | 55       | 65       |          | 50              | 60              |                 | dB    |
|                                              |         | T MIN ≤T A ≤T MAX            |          |          |          |                 |                 |                 |       |
|                                              |         | G = 1000                     | 110      | 125      |          | 105             | 115             |                 | dB    |
|                                              |         | G = 100                      | 95       | 105      |          | 90              | 95              |                 | dB    |
|                                              |         | G = 10                       | 75       | 85       |          | 70              | 75              |                 | dB    |
|                                              |         | G = 1                        | 55       | 85       |          | 50              | 60              |                 | dB    |
| Input Offset Voltage Trim Range              |         | V S = ±4.5V to ±18V 2        |          | ±6       |          |                 | ±6              |                 | mV    |
| Output Offset Voltage Trim Range             |         | V S = ±4.5V to ±18V 2        |          | ±100     |          |                 | ±100            |                 | mV    |
| INPUT CURRENT                                |         |                              |          |          |          |                 |                 |                 |       |
| Input Bias Current                           | I B     | T A = 25°C                   |          | 1        | 4        |                 | 2               | 6               | nA    |
|                                              |         | T MIN ≤T A ≤T MAX            |          | 4        | 10       |                 | 6               | 15              | nA    |
| Input Bias Current Drift                     | TCI B   | T MIN ≤T A ≤T MAX            |          | 40       |          |                 | 50              |                 | pA/°C |
|                                              |         | T MIN ≤T A ≤T MAX            |          | 0.5      | 3.0      |                 | 1.0             | 6.0             | nA    |
| Input Offset Current Drift                   | TCI OS  | T MIN ≤T A ≤T MAX            |          | 3        |          | 5               |                 |                 | pA/°C |

## AMP01

|                       |        |                                     | AMP01E   | AMP01E   | AMP01E   | AMP01F/AMP01G   | AMP01F/AMP01G   | AMP01F/AMP01G   |      |
|-----------------------|--------|-------------------------------------|----------|----------|----------|-----------------|-----------------|-----------------|------|
| Parameter             | Symbol | Test Conditions/Comments            | Min      | Typ      | Max      | Min             | Typ             | Max             | Unit |
| INPUT                 |        |                                     |          |          |          |                 |                 |                 |      |
| Input Resistance      | R IN   | Differential, G = 1000              |          | 1        |          |                 | 1               |                 | GΩ   |
|                       |        | Differential, G ≤ 100               |          | 10       |          |                 | 10              |                 | GΩ   |
|                       |        | Commonmode, G = 1000                |          | 20       |          |                 | 20              |                 | GΩ   |
| Input Voltage Range   | IVR    | T A = 25°C 3                        | ±10.5    |          |          | ±10.5           |                 |                 | V    |
|                       |        | T MIN ≤T A ≤T MAX                   | ±10.0    |          |          | ±10.0           |                 |                 | V    |
| Common-Mode Rejection | CMR    | V CM = ±10 V, 1 kΩ source imbalance |          |          |          |                 |                 |                 |      |
|                       |        | G = 1000                            | 125      | 130      |          | 115             | 125             |                 | dB   |
|                       |        | G = 100                             | 120      | 130      |          | 110             | 125             |                 | dB   |
|                       |        | G = 10                              | 100      | 120      |          | 95              | 110             |                 | dB   |
|                       |        | G = 1                               | 85       | 100      |          | 75              | 90              |                 | dB   |
|                       |        | T MIN ≤T A ≤T MAX                   |          |          |          |                 |                 |                 |      |
|                       |        | G = 1000                            | 120      | 125      |          | 110             | 120             |                 | dB   |
|                       |        | G = 100                             | 115      | 125      |          | 105             | 120             |                 | dB   |
|                       |        | G = 10                              | 95       | 115      |          | 90              | 105             |                 | dB   |
|                       |        | G = 1                               | 80       | 95       |          | 75              | 90              |                 | dB   |

VS = ±15 V , RS = 10 kΩ, RL = 2 kΩ, TA = 25°C, unless otherwise noted.

## Table 3.

|                                         |         |                                                     | AMP01A/AMP01E   | AMP01A/AMP01E   | AMP01A/AMP01E   | AMP01B/AMP01F/AMP01G   | AMP01B/AMP01F/AMP01G   | AMP01B/AMP01F/AMP01G   |         |
|-----------------------------------------|---------|-----------------------------------------------------|-----------------|-----------------|-----------------|------------------------|------------------------|------------------------|---------|
| Parameter                               | Symbol  | Test Conditions/Comments                            | Min             | Typ             | Max             | Min                    | Typ                    | Max                    | Unit    |
| GAIN                                    |         |                                                     |                 |                 |                 |                        |                        |                        |         |
| Gain Equation Accuracy                  |         | G=(20 × R S )/R G , accuracy measured from G=1to100 |                 | 0.3             | 0.6             |                        | 0.5                    | 0.8                    | %       |
| Gain Range                              | G       |                                                     | 0.1             |                 | 10,000          | 0.1                    |                        | 10,000                 | V/V     |
| Nonlinearity                            |         | G=1000 1                                            |                 | 0.0007          | 0.005           |                        | 0.0007                 | 0.005                  | %       |
|                                         |         | G=100 1                                             |                 |                 | 0.005           |                        |                        | 0.005                  | %       |
|                                         |         | G=10 1                                              |                 |                 | 0.005           |                        |                        | 0.007                  | %       |
|                                         |         | G=1 1                                               |                 |                 | 0.010           |                        |                        | 0.015                  | %       |
| Temperature Coefficient                 | G TC    | 1 ≤ G≤1000 1, 2                                     |                 | 5               | 10              |                        | 5                      | 15                     | ppm°C   |
| OUTPUT RATING                           |         |                                                     |                 |                 |                 |                        |                        |                        |         |
| Output Voltage Swing                    | V OUT   | R L = 2 kΩ                                          | ±13.0           | ±13.8           |                 | ±13.0                  | ±13.8                  |                        | V       |
|                                         |         | R L = 500 kΩ                                        | ±13.0           | ±13.5           |                 | ±13.0                  | ±13.5                  |                        | V       |
|                                         |         | R L = 50 kΩ                                         | ±2.5            | ±4.0            |                 | ±2.5                   | ±4.0                   |                        | V       |
|                                         |         | R L = 2 kΩ over temperature                         | ±12.0           | ±13.8           |                 | ±12.0                  | ±13.8                  |                        | V       |
|                                         |         | R L = 500 kΩ 3                                      | ±12.0           | ±13.5           |                 | ±12.0                  | ±13.5                  |                        | V       |
| Positive Current Limit                  |         | Output to ground short                              | 60              | 100             | 120             | 60                     | 100                    | 120                    | mA      |
| Negative Current Limit                  |         | Output to ground short                              | 60              | 90              | 120             | 60                     | 90                     | 120                    | mA      |
| Capacitive Load Stability               |         | 1 ≤ G≤1000, no oscillations 1                       | 0.1             | 1               |                 | 0.1                    | 1                      |                        | µF      |
| Thermal Shutdown Temperature            |         | Junction temperature                                |                 | 165             |                 |                        | 165                    |                        | °C      |
| NOISE                                   |         |                                                     |                 |                 |                 |                        |                        |                        |         |
| Voltage Density, RTI                    | e n     | f O = 1 kHz G=1000                                  |                 | 5               |                 |                        | 5                      |                        | nV/√Hz  |
|                                         |         | G=100                                               |                 | 10              |                 |                        | 10                     |                        | nV/√Hz  |
|                                         |         | G=10                                                |                 | 59              |                 |                        | 59                     |                        | nV/√Hz  |
|                                         |         | G=1                                                 |                 | 540             |                 |                        | 540                    |                        | nV/√Hz  |
| Noise Current Density, RTI              | i n     | f O = 1 kHz, G=1000                                 |                 | 0.15            |                 |                        | 0.15                   |                        | pV/√Hz  |
| Input Noise Voltage                     | e n p-p | 0.1 Hz to 10 Hz G = 1000                            |                 | 0.12            |                 |                        | 0.12                   |                        | µV p-p  |
|                                         |         | G = 100                                             |                 | 0.16            |                 |                        | 0.16                   |                        | µV p-p  |
|                                         |         | G = 10                                              |                 | 1.4             |                 |                        | 1.4                    |                        | µV p-p  |
|                                         |         | G=1                                                 |                 | 13              |                 |                        | 13                     |                        | µV p-p  |
|                                         | i n     | 0.1                                                 |                 |                 |                 |                        |                        |                        |         |
| Input Noise Current                     | p-p     | Hz to 10 Hz,G = 1000                                |                 | 2               |                 |                        | 2                      |                        | pV p-p  |
| DYNAMIC RESPONSE Small-Signal Bandwidth | BW      | G = 1                                               |                 | 570             |                 |                        | 570                    |                        | kHz     |
|                                         |         | G=10                                                |                 | 100             |                 |                        | 100                    |                        | kHz     |
|                                         |         | G=100 G=1000                                        |                 | 82 26           |                 |                        | 82 26                  |                        | kHz kHz |
| Slew Rate                               |         | G=10                                                |                 |                 |                 | 3.0                    | 4.5                    |                        | V/µs    |
|                                         |         | 20V step                                            | 3.5             | 4.5             |                 |                        |                        |                        |         |
| Settling Time                           |         | To 0.01%, G=1 G = 10                                |                 | 12 13           |                 |                        | 12 13                  |                        | µs µs   |
|                                         |         | G = 100                                             |                 | 15              |                 |                        | 15                     |                        | µs      |
|                                         |         | G = 1000                                            |                 | 50              |                 |                        | 50                     |                        | µs      |

VS = ±15 V , RS = 10 kΩ, RL = 2 kΩ, TA = 25°C, unless otherwise noted.

## Table 4.

|                      |        |                                      | AMP01A/AMP01E   | AMP01A/AMP01E   | AMP01A/AMP01E   | AMP01B/AMP01F/AMP01G   | AMP01B/AMP01F/AMP01G   | AMP01B/AMP01F/AMP01G   |       |
|----------------------|--------|--------------------------------------|-----------------|-----------------|-----------------|------------------------|------------------------|------------------------|-------|
| Parameter            | Symbol | Test Conditions/Comments             | Min             | Typ             | Max             | Min                    | Typ                    | Max                    | Unit  |
| SENSE INPUT          |        |                                      |                 |                 |                 |                        |                        |                        |       |
| Input Resistance     | R IN   | Referenced toV-                      | 35              | 50              | 65              | 35                     | 50                     | 65                     | kΩ µA |
| Input Current        | I IN   |                                      |                 | 280             |                 |                        | 280                    |                        |       |
| Voltage Range 1      |        |                                      | -10.5           |                 | +15             | -10.5                  |                        | +15                    | V     |
| REFERENCE INPUT      |        |                                      |                 |                 |                 |                        |                        |                        |       |
| Input Resistance     | R IN   |                                      | 35              | 50              | 65              | 35                     | 50                     | 65                     | kΩ    |
| Input Current        | I IN   | Referenced toV-                      |                 | 280             |                 |                        | 280                    |                        | µA    |
| Voltage Range 1      |        |                                      | -10.5           |                 | +15             | -10.5                  |                        | +15                    | V     |
| Gain to Output       |        |                                      |                 | 1               |                 |                        | 1                      |                        | V/V   |
| POWER SUPPLY         |        | -25°C≤T A ≤+85°C for E and F grades, |                 |                 |                 |                        |                        |                        |       |
| Supply Voltage Range | V S    | +V linked to +V OP                   | ±4.5            |                 | ±18             | ±4.5                   |                        | ±18                    | V     |
|                      |        | -V linked to -V OP                   | ±4.5            |                 | ±18             | ±4.5                   |                        | ±18                    | V     |
| Quiescent Current    | I Q    | +V linked to +V OP                   |                 | 3.0             | 4.8             |                        | 3.0                    | 4.8                    | mA    |
|                      |        | -V linked to -V OP                   |                 | 3.4             | 4.8             |                        | 3.4                    | 4.8                    | mA    |

## DICE CHARACTERISTICS

Figure 2. Die Size 0.111 in × 0.149 in, 16,539 sq. mils (2.82 mm × 3.78 mm, 10.67 sq. mm)

<!-- image -->

14335-102

## WAFER TEST LIMITS (AMP01NBC)

VS = ±15 V, RS = 10 kΩ, RL = 2 kΩ, TA = 25°C, unless otherwise noted. Electrical tests are performed at wafer probe to the limits shown. Due to variations in assembly methods and normal yield loss, yield after packaging is not guaranteed for standard product dice. Consult the factory to negotiate specifications based on dice lot qualification through sample lot assembly and testing.

## Table 5.

| Parameter                                    | Symbol   | Test Conditions/Comments   |   Min |    Typ | Max   | Unit   |
|----------------------------------------------|----------|----------------------------|-------|--------|-------|--------|
| OFFSETVOLTAGE                                |          |                            |       |        |       |        |
| Input Offset Voltage                         | V IOS    |                            |       |        | 60    | µV     |
| Input Offset Voltage Drift                   | TCV IOS  |                            |       |   0.15 |       | µV/°C  |
| Output Offset Voltage                        | V OOS    |                            |       |        | 4     | mV     |
| Output Offset Voltage Drift                  | TCV OOS  | R G =∞                     |       |     20 |       | µV/°C  |
| Offset Referred to Input vs. Positive        | PSR      | V+=5Vto15V                 |       |        |       |        |
| Supply                                       |          | G=1000                     |   120 |        |       | dB     |
|                                              |          | G=100                      |   110 |        |       | dB     |
|                                              |          | G=10                       |    95 |        |       | dB     |
|                                              |          | G=1                        |    75 |        |       | dB     |
| Offset Referred to Input vs. Negative Supply | PSR      | V-=-5Vto-15V               |       |        |       |        |
|                                              |          | G=1000                     |   105 |        |       | dB     |
|                                              |          | G=100                      |    90 |        |       | dB     |
|                                              |          |                            |       |        |       | dB     |
|                                              |          | G=10                       |    70 |        |       |        |
|                                              |          | G=1                        |    50 |        |       | dB     |
| INPUT CURRENT                                |          |                            |       |        |       |        |
| Input Bias Current                           | I B      |                            |       |        | 4     | nA     |
| Input Bias Current Drift                     | TCI B    |                            |       |     40 |       | pA/°C  |
| Input Offset Current                         | I OS     |                            |       |        | 1     | nA     |
| Input Offset Current Drift                   | TCI OS   |                            |       |      3 |       | pA/°C  |
| INPUT                                        |          |                            |       |        |       |        |
| Input Voltage Range                          | IVR      | Guaranteed by CMRtests     |       |        | ±10   | V min  |
| Common-ModeRejection                         | CMR      | V CM =±10V                 |       |        |       |        |
|                                              |          | G=1000                     |   125 |        |       | dB     |
|                                              |          | G=100                      |   120 |        |       | dB     |
|                                              |          | G=10                       |   100 |        |       | dB     |
|                                              |          | G=1                        |       |        |       |        |
|                                              |          |                            |    85 |        |       | dB     |
| GAIN                                         |          |                            |       |        |       |        |
| Gain Equation Accuracy                       |          | G=(20×R S )/R G            |       |        | 0.6   | %      |
| OUTPUTRATING                                 |          |                            |       |        |       |        |
| OutputVoltage Swing                          | V OUT    | R L =2kΩ                   |   -13 |        | +13   | V      |
|                                              |          | R L =500 kΩ                |   -13 |        | +13   | V      |
|                                              |          | R L =50kΩ                  |  -2.5 |        | +2.5  | V      |
| Output Current Limit                         |          | Output to ground short     |   -60 |        | +60   | mA     |
|                                              |          | Output to ground short     |  -120 |        | +120  | mA     |
| Quiescent Current                            | I Q      | +V linked to+V OP          |       |        | 4.8   | mA     |
|                                              |          | -V linked to-V OP          |       |        | 4.8   | mA     |
| NOISE                                        |          |                            |       |        |       |        |
| Nonlinearity                                 | e n      | G = 1000                   |       | 0.0007 |       | %      |
| Voltage Noise Density                        | i n      | G=1000, f O = 1 kHz        |       |      5 |       | nV/√Hz |
| Current Noise Density                        | e n p-p  | G = 1000, f O = 1 kHz      |       |   0.15 |       | pA/√Hz |
| Voltage Noise                                | i n p-p  | G = 1000, 0.1 Hz to 10 Hz  |       |   0.12 |       | µV p-p |
| Current Noise                                | BW       | G = 1000, 0.1 Hz to 10 Hz  |       |      2 |       | pA p-p |
| DYNAMIC RESPONSE                             |          |                            |       |        |       |        |
| Small-Signal Bandwidth (-3 dB)               | SR       | G=1000                     |       |     26 |       | kHz    |
| Slew Rate                                    | t S      | G=10                       |       |    4.5 |       | V/µs   |
| Settling Time                                |          | To 0.01%, 20V step, G=1000 |       |     50 |       | µs     |

## ABSOLUTE MAXIMUM RATINGS

Table 6.

| Parameter                                  | Rating          |
|--------------------------------------------|-----------------|
| Supply Voltage                             | ±18V            |
| Internal Power Dissipation 1               | 500mW           |
| Common-Mode Input Voltage                  | Supply voltage  |
| Differential Input Voltage R G ≥ 2 kΩ      | ±20V            |
| R G ≤ 2 kΩ                                 | ±10V            |
| Output Short-Circuit Duration              | Indefinite      |
| Storage Temperature Range                  | -65°C to +150°C |
| Operating Temperature Range AMP01A, AMP01B | -55°C to +125°C |
| AMP01E, AMP01F                             | -25°C to +85°C  |
| Lead Temperature (Soldering, 60 sec)       | 300°C           |
| Dice Junction Temperature (T J )           | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

θJA is specified for the worst-case conditions, that is, a device soldered in a circuit board for surface-mount packages.

## Table 7. Thermal Resistance

| PackageType                  |   θ JA |   θ JC | Unit   |
|------------------------------|--------|--------|--------|
| Q-18 (100°C Maximum Ambient) |   70.4 |   10.2 | °C/W   |
| RW-20                        |   73.7 |   23.9 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Figure 3. 18-Lead CERDIP

<!-- image -->

## Table 8. 18-Lead CERDIP Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                                        |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------|
|         1 | R G        | Gain Resistor Pin. Install a resistor between 200 kΩ and 100 Ωto Pin 2.                                            |
|         2 | R G        | Gain Resistor Pin. Install a resistor between 200 kΩ and 100 Ωto Pin 1.                                            |
|         3 | -IN        | Inverting Signal Input.                                                                                            |
|         4 | V OOS NULL | Output Offset Voltage Null. Connect a 100 kΩ trimmer across Pin 4 and Pin 5 with wiper to negative supply voltage. |
|         5 | V OOS NULL | Output Offset Voltage Null. Connect a 100 kΩ trimmer across Pin 4 and Pin 5 with wiper to negative supply voltage. |
|         6 | TEST PIN   | Test Pin. Pin 6 is reserved for factory test. Do not connect.                                                      |
|         7 | SENSE      | This pin completes the feedback loop for the inverting input amplifier. Normally connected to the output.          |
|         8 | REFERENCE  | This pin shifts the output CMV. Normally connected to ground.                                                      |
|         9 | OUTPUT     | Output of the In-Amp.                                                                                              |
|        10 | -V OP      | Negative Supply Voltage for Output Amplifier.                                                                      |
|        11 | V-         | Negative Supply Voltage for Input Amplifiers.                                                                      |
|        12 | V+         | Positive Supply Voltage for Input Amplifiers.                                                                      |
|        13 | +V OP      | Positive Supply Voltage for Output Amplifier.                                                                      |
|        14 | R S        | Scale Resistor. See the Gain section and Figure 32 for value.                                                      |
|        15 | R S        | Scale Resistor. See the Gain section and Figure 32 for value.                                                      |
|        16 | V IOS NULL | Input Offset Voltage Null. Connect a 100 kΩtrimmer across Pin 16 and Pin 17 with wiper to negative supply voltage. |
|        17 | V IOS NULL | Input Offset Voltage Null. Connect a 100 kΩtrimmer across Pin 16 and Pin 17 with wiper to negative supply voltage. |
|        18 | +IN        | Noninverting Signal Input.                                                                                         |

<!-- image -->

## Table 9. 20-Lead SOIC Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                                        |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------|
|         1 | R G        | Gain Resistor Pin. Install a resistor between 200 kΩ and 100 Ωto Pin 20.                                           |
|         2 | TEST PIN   | Test Pin. Pin 2 is reserved for factory test. Do not connect.                                                      |
|         3 | -IN        | Inverting Signal Input                                                                                             |
|         4 | V OOS NULL | Output Offset Voltage Null. Connect a 100 kΩ trimmer across Pin 4 and Pin 5 with wiper to negative supply voltage. |
|         5 | V OOS NULL | Output Offset Voltage Null. Connect a 100 kΩ trimmer across Pin 4 and Pin 5 with wiper to negative supply voltage. |
|         6 | TEST PIN   | Test Pin. Pin 6 is reserved for factory test. Do not connect.                                                      |
|         7 | SENSE      | This pin completes the feedback loop for the inverting input amplifier. Normally connected to the output.          |
|         8 | REFERENCE  | This pin shifts the output CMV. Normally connected to ground.                                                      |
|         9 | OUTPUT     | Output of the In-Amp.                                                                                              |
|        10 | -V OP      | Negative Supply Voltage for Output Amplifier.                                                                      |
|        11 | V-         | Negative Supply Voltage for Input Amplifiers.                                                                      |
|        12 | V+         | Positive Supply Voltage for Input Amplifiers.                                                                      |
|        13 | +V OP      | Positive Supply Voltage for Output Amplifier.                                                                      |
|        14 | R S        | Scale Resistor. See the Gain section and Figure 32 for value.                                                      |
|        15 | R S        | Scale Resistor. See the Gain section and Figure 32 for value.                                                      |
|        16 | V IOS NULL | Input Offset Voltage Null. Connect a 100 kΩtrimmer across Pin 16 and Pin 17 with wiper to negative supply voltage. |
|        17 | V IOS NULL | Input Offset Voltage Null. Connect a 100 kΩtrimmer across Pin 16 and Pin 17 with wiper to negative supply voltage. |
|        18 | +IN        | Noninverting Signal Input.                                                                                         |
|        19 | TEST PIN   | Test Pin. Pin 19 is reserved for factory test. Do not connect.                                                     |
|        20 | R G        | Gain Resistor Pin. Install a resistor between 200 kΩ and 100 Ωto Pin 1.                                            |

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 5. Input Offset Voltage vs. Temperature

<!-- image -->

14335-006

Figure 6. Input Offset Voltage vs. Supply Voltage

<!-- image -->

14335-007

<!-- image -->

Figure 7. Output Offset Voltage vs. Temperature

<!-- image -->

Figure 8. Output Offset Voltage Change vs. Supply Voltage

Figure 9. Input Bias Current vs. Temperature

<!-- image -->

Figure 10. Input Bias Current vs. Supply Voltage

<!-- image -->

<!-- image -->

Figure 11. Input Offset Current vs. Temperature

<!-- image -->

Figure 12. Common-Mode Rejection vs. Voltage Gain

<!-- image -->

Figure 13. Common-Mode Rejection vs. Frequency

<!-- image -->

Figure 14. Common-Mode Voltage Range vs. Temperature

Figure 15. Positive Power Supply Rejection (PSR) vs. Frequency

<!-- image -->

Figure 16. Negative PSR vs. Frequency

<!-- image -->

<!-- image -->

Figure 17. Maximum Output Voltage vs. Load Resistance

<!-- image -->

Figure 18. Maximum Output Swing vs. Frequency

Figure 19. Closed-Loop Output Impedance vs. Frequency

<!-- image -->

Figure 20. Closed-Loop Voltage Gain vs. Frequency

<!-- image -->

14335-021

Figure 21. Total Harmonic Distortion vs. Frequency

<!-- image -->

14335-022

Figure 22. Total Harmonic Distortion vs. Load Resistance

<!-- image -->

Figure 24. Slew Rate vs. Load Capacitance

<!-- image -->

<!-- image -->

14335-025

<!-- image -->

Figure 25. Settling Time to 0.01% vs. Voltage Gain

Figure 26. Voltage Noise Density vs. Frequency

<!-- image -->

Figure 27. RTI Voltage Noise Density vs. Gain

<!-- image -->

14335-028

Figure 28. Positive Supply Current vs. Supply Voltage

<!-- image -->

<!-- image -->

Figure 29. Negative Supply Current vs. Supply Voltage

Figure 30. Positive Supply Current vs. Temperature

<!-- image -->

Figure 31. Negative Supply Current vs. Temperature

<!-- image -->

## THEORY OF OPERATION

## INPUT AND OUTPUT OFFSET VOLTAGES

Instrumentation amplifiers have independent offset voltages associated with the input and output stages. Still, temperature variations cause offset shifts regardless of initial zero adjustments. Systems with auto-zero correct for offset errors, rendering initial adjustment unnecessary. However, many high gain applications do not have auto-zero. For such applications, both offsets can be nulled, which has minimal effect on TCVIOS and TCVOOS.

The input offset component is directly multiplied by the amplifier gain, whereas output offset is independent of gain. Therefore, at low gain, output offset errors dominate, whereas at high gain, input offset errors dominate. The overall offset voltage, VOS, referred to the output (RTO) is calculated as follows:

<!-- formula-not-decoded -->

where:

VIOS

VOOS

G

is the input offset voltage specification. is the output offset voltage specification. is the amplifier gain.

Input offset nulling alone is recommended with amplifiers having fixed gain above 50. Output offset nulling alone is recommended when gain is fixed at 50 or below.

In applications requiring both initial offsets to be nulled, the input offset is nulled first by short circuiting RG, then the output offset is nulled with the short removed.

The overall offset voltage drift, TCVOS, referred to the output is a combination of input and output drift specifications. Input offset voltage drift is multiplied by the amplifier gain, G, and summed with the output offset drift:

<!-- formula-not-decoded -->

where:

TCVIOS is the input offset voltage drift.

TCVOOS is the output offset voltage specification.

Frequently, the amplifier drift is referred back to the input (RTI), which is then equivalent to an input signal change:

<!-- formula-not-decoded -->

For example, the maximum input referred drift of an AMP01EX set to G = 1000 becomes,

<!-- formula-not-decoded -->

## INPUT BIAS AND OFFSET CURRENTS

Input transistor bias currents are additional error sources that can degrade the input signal. Bias currents flowing through the signal source resistance appear as an additional offset voltage. Equal source resistance on both inputs of an instrumentation amplifier (IA) minimizes offset changes due to bias current variations with signal voltage and temperature. However, the difference between the two bias currents, the input offset current, produces a nontrimmable error. The magnitude of the error is the offset current times the source resistance.

A current path must always be provided between the differential inputs and analog ground to ensure correct amplifier operation. Floating inputs, such as thermocouples, must be grounded close to the signal source for best common-mode rejection.

## GAIN

The AMP01 uses two external resistors for setting voltage gain over the range of 0.1 to 10,000. The magnitudes of the scale resistor, RS, and the gain set resistor, RG, are related by the formula G = 20 × RS/RG, where G is the selected voltage gain (see Figure 32).

Figure 32. Basic AMP01 Connections for Gains of 0.1 to 10,000

<!-- image -->

The magnitude of RS affects linearity and output referred errors. Circuit performance is characterized using RS = 10 kΩ when operating on ±15 V supplies and driving a ±10 V output. RS can be reduced to 5 kΩ in many applications, particularly when operating on ±5 V supplies, or if the output voltage swing is limited to ±5 V . Bandwidth is improved with RS = 5 kΩ, increasing the common-mode rejection by approximately 6 dB at low gain. Reducing the value below 5 kΩ can cause instability in some circuit configurations and usually has no advantage. High voltage gains between 2 and 10,000 require very low values of RG. For RS = 10 kΩ and AV = 2000, RG = 100 Ω; this value is the practical lower limit for RG. Below 100 Ω, mismatch of wire bond and resistor temperature coefficients (TCs) introduce significant gain TC errors. Therefore, for gains above 2000, RG must be kept constant at 100 Ω and RS increased. The maximum gain of 10,000 is obtained with RS set to 50 kΩ.

Metal film or wire wound resistors are recommended for best results. The absolute values and TCs are not too important, only the ratiometric parameters.

AC amplifiers require good gain stability with temperature and time, but dc performance is unimportant. Therefore, low cost metal film types with TCs of 50 ppm/°C are usually adequate for RS and RG. Realizing the full potential of the offset voltage and gain stability of the AMP01 requires precision metal film or wire wound resistors. Achieving a 15 ppm/°C gain TC at all gains requires RS and RG temperature coefficient matching to 5 ppm/°C or better.

Figure 33. RG and RS Selection

<!-- image -->

Gain accuracy is determined by the ratio accuracy of RS and RG combined with the gain equation error of the AMP01 (0.6% maximum for A and E grades).

All instrumentation amplifiers require attention to layout so that thermocouple effects are minimized. Thermocouples formed between copper and dissimilar metals can destroy the TCVOS performance of the AMP01, which is typically 0.15 µV/°C. Resistors themselves can generate thermoelectric EMFs when mounted parallel to a thermal gradient. Vishay resistors are recommended because a maximum value for thermoelectric generation is specified. However, where thermal gradients are low and gain TCs of 20 ppm to 50 ppm are sufficient, generalpurpose metal film resistors can be used for RG and RS.

## COMMON-MODE REJECTION

Ideally, an instrumentation amplifier responds only to the difference between the two input signals and rejects commonmode voltages and noise. In practice, there is a small change in output voltage when both inputs experience the same commonmode voltage change; the ratio of these voltages is called the common-mode gain. Common-mode rejection (CMR) is the logarithm of the ratio of differential-mode gain to commonmode gain, expressed in dB. CMR specifications are normally measured with a full-range input voltage change and a specified source resistance unbalance.

The current feedback design used in the AMP01 inherently yields high common-mode rejection. Unlike resistive feedback designs, typified by the 3-op-amp IA, the CMR is not degraded by small resistances in series with the reference input. A slight but trimmable output offset voltage change results from resistance in series with the reference input.

The common-mode input voltage range (CMVR) for linear operation can be calculated from the formula,

<!-- formula-not-decoded -->

where:

IVR is the data sheet specification for the input voltage range. VOUT is the maximum output signal. G is the chosen voltage gain.

For example, at 25°C, IVR is specified as ±10.5 V minimum with ±15 V supplies. Using a ±10 V maximum swing output and substituting the figures in Equation 4 simplifies the formula to

<!-- formula-not-decoded -->

For all gains greater than or equal to 10, CMVR is ±10 V minimum; at gains below 10, CMVR is reduced.

## ACTIVE GUARD DRIVE

Rejection of common-mode noise and line pickup can be improved by using shielded cable between the signal source and the IA. Shielding reduces pickup, but increases input capacitance, which in turn degrades the settling-time for signal changes. Furthermore, any imbalance in the source resistance between the inverting and noninverting inputs, when capacitively loaded, converts the common-mode voltage into a differential voltage. This effect reduces the benefits of shielding. AC common-mode rejection is improved by bootstrapping the input cable capacitance to the input signal, a technique called guard driving. This technique effectively reduces the input capacitance. A single guard-driving signal is adequate at gains above 100 and must be the average value of the two inputs. The value of the external gain resistor, RG, is split between two resistors, RG1 and RG2; the center tap provides the required signal to drive the buffer amplifier (see Figure 34).

## GROUNDING

The majority of instruments and data acquisition systems have separate grounds for analog and digital signals. Analog ground can also be divided into two or more grounds that are tied together at one point, usually the analog power-supply ground. In addition, the digital and analog grounds can be joined, normally at the analog ground pin on the analog-to-digital converter (ADC). Following this basic grounding practice is essential for good circuit performance (see Figure 35).

Mixing grounds causes interactions between digital circuits and the analog signals. Because the ground returns have finite resistance and inductance, hundreds of millivolts can be developed between the system ground and the data acquisition components. Using separate ground returns minimizes the current flow in the sensitive analog return path to the system ground point. Consequently, noisy ground currents from logic gates do not interact with the analog signals.

Inevitably, two or more circuits are joined together with their grounds at differential potentials. In these situations, the differential input of an instrumentation amplifier, with its high CMR, can accurately transfer analog information from one circuit to another.

## SENSE AND REFERENCE TERMINALS

The sense terminal completes the feedback path for the instrumentation amplifier output stage and is normally connected directly to the output. The output signal is specified with respect to the reference terminal, which is normally connected to analog ground.

Figure 34. AMP01 Evaluation Circuit Showing Guard-Drive Connection

<!-- image -->

Figure 35. Basic Grounding Practice

<!-- image -->

If heavy output currents are expected and the load is situated some distance from the amplifier, voltage drops due to track or wire resistance cause errors. Voltage drops are particularly troublesome when driving 50 Ω loads. Under these conditions, the sense and reference terminals can be used to remote sense the load, as shown in Figure 36. This method of connection puts the I × R drops inside the feedback loop and virtually eliminates the error. An unbalance in the lead resistances from the sense and reference pins does not degrade CMR, but does change the output offset voltage. For example, a large unbalance of 3 Ω changes the output offset by only 1 mV .

## DRIVING 50 Ω LOADS

Output currents of 50 mA are guaranteed into loads of up to 50 Ω and 26 mA into 500 Ω. In addition, the output is stable and free from oscillation even with a high load capacitance. The combination of these unique features in an instrumentation amplifier allows low level transducer signals to be conditioned and directly transmitted through long cables in voltage or current form. Increased output current brings increased internal dissipation, especially with 50 Ω loads. For this reason, the power-supply connections are split into two pairs; Pin 10 and Pin 13 connect to the output stage only, and Pin 11 and Pin 12 provide power to the input and following stages. Dual supply pins allow dropper resistors to be connected in series with the output stage so excess power is dissipated outside the package. Additional decoupling is necessary between Pin 10 and Pin 13 to ground to maintain stability when dropper resistors are used. Figure 37 shows a complete circuit for driving 50 Ω loads.

Figure 36. Remote Load Sensing

<!-- image -->

Figure 37. Driving 50 Ω Loads

<!-- image -->

14335-036

14335-037

## HEATSINKING

To maintain high reliability, the die temperature of any IC must be kept as low as practicable, preferably below 100°C. Although most AMP01 application circuits produce very little internal heat-little more than the quiescent dissipation of 90 mWsome circuits raise that to several hundred milliwatts (for example, the 4 mA to 20 mA current transmitter application; see Figure 40). Excessive dissipation causes thermal shutdown of the output stage, thus protecting the device from damage. A heatsink is recommended in power applications to reduce the die temperature.

Several appropriate heatsinks are available; the Thermalloy 6010B is especially easy to use and is inexpensive. Intended for dual-in-line packages, the heatsink can be attached with a cyanoacrylate adhesive. This heatsink reduces the thermal resistance between the junction and ambient environment to approximately 80°C/W. Junction (die) temperature can then be calculated by using the following relationship:

<!-- formula-not-decoded -->

where: Pd is the internal dissipation of the device. TJ is the junction temperature. TA is the ambient temperature.

θJA is the thermal resistance from junction to ambient.

## OVERVOLTAGE PROTECTION

Instrumentation amplifiers invariably sit at the front end of instrumentation systems where there is a high probability of exposure to overloads. Voltage transients, failure of a transducer, or removal of the amplifier power supply while the signal source is connected can destroy or degrade the performance of an unprotected amplifier. Although it is impractical to protect an IC internally against connection to power lines, it is relatively easy to provide protection against typical system overloads.

The AMP01 is internally protected against overloads for gains of up to 100. At higher gains, the protection is reduced and some external measures may be required. Limited internal overload protection is used so that noise performance is not significantly degraded.

AMP01 noise level approaches the theoretical noise floor of the input stage, which is 4 nV/√Hz at 1 kHz when the gain is set at 1000. Noise is the result of shot noise in the input devices and Johnson noise in the resistors. Resistor noise is calculated from the values of RG (200 Ω at a gain of 1000) and the input protection resistors (250 Ω). Active loads for the input transistors contribute less than 1 nV/√Hz of noise. The measured noise level is typically 5 nV/√Hz.

Diodes across the input transistor's base-emitter junctions, combined with 250 Ω input resistors and RG, protect against differential inputs of up to ±20 V for gains of up to 100. The diodes also prevent avalanche breakdown that degrade the IB and IOS specifications. Decreasing the value of RG for gains above 100 limits the maximum input overload protection to ±10 V .

External series resistors can be added to guard against higher voltage levels at the input, but resistors alone increase the input noise and degrade the signal-to-noise ratio, especially at high gains.

Protection can also be achieved by connecting back to back 9.1 V Zener diodes across the differential inputs. This technique does not affect the input noise level and can be used down to a gain of 2 with minimal increase in input current. Although voltage-clamping elements look like short circuits at the limiting voltage, the majority of signal sources provide less than 50 mA, producing power levels that are easily handled by low power Zener diodes.

Simultaneous connection of the differential inputs to a low impedance signal above 10 V during normal circuit operation is unlikely. However, additional protection involves adding 100 Ω current-limiting resistors in each signal path prior to the voltage clamp, the resistors increase the input noise level to just 5.4 nV/√Hz (refer to Figure 38).

Input components, whether multiplexers or resistors, should be carefully selected to prevent the formation of thermocouple junctions that would degrade the input signal.

Figure 38. Input Overvoltage Protection for Gains of 2 to 10,000

<!-- image -->

## POWER SUPPLY CONSIDERATIONS

Achieving the rated performance of precision amplifiers in a practical circuit requires careful attention to external influences. For example, supply noise and changes in the nominal voltage directly affect the input offset voltage. A PSR of 80 dB means that a change of 100 mV on the supply produces a 10 µV input offset change. Consequently, care must be taken in choosing a power source with low output noise, good line and load regulation, and good temperature stability.

## APPLICATIONS CIRCUITS

Figure 39. High Compliance Bipolar Current Source with 13-Bit Linearity

<!-- image -->

Figure 40. 13-Bit Linear 4 mA to 20 mA Transmitter Constructed by Adding a Voltage Reference; Thermocouple Signals can be Accepted Without Preamplification

<!-- image -->

Figure 41. Adding Two Transistors Increases Output Current to ±1 A Without Affecting the Quiescent Current of 4 mA; Power Bandwidth is 60 kHz

<!-- image -->

Figure 42. AMP01 Makes an Excellent Programmable-Gain Instrumentation Amplifier; Combined Gain-Switching and Settling Time to 13 Bits Falls Below 100 µs; Linearity is Better than 12 Bits over a Gain Range of 1 to 1000

<!-- image -->

14335-043

<!-- image -->

Figure 43. A Differential Input Instrumentation Amplifier with Differential Output Replaces a Transformer in Many Applications; Output Drives a 600 Ω Load at Low Distortion (0.01%)

<!-- image -->

Figure 44. Configuring the AMP01 as a Noninverting Operational Amplifier Provides Exceptional Performance; Output Handles Low Load Impedances at Very Low Distortion (0.006%)

<!-- image -->

Figure 45. Inverting Operational Amplifier Configuration has Excellent Linearity over the Gain Range 1 to 1000, Typically 0.005%; Offset Voltage Drift at Unity Gain is Improved over the Drift in the Instrumentation Amplifier Configuration

<!-- image -->

Figure 46. Stability with Large Capacitive Loads Combined with High Output Current Capability Make the AMP01 Ideal for Line Driving Applications; Offset Voltage Drift Approaches the TCVIOS Limit (0.3 µV/°C)

<!-- image -->

Figure 47. Noise Test Circuit (0.1 Hz to 10 Hz)

<!-- image -->

200Ω

1.91kΩ

Figure 48. Settling Time Test Circuit

<!-- image -->

## Data Sheet

Figure 49. Instrumentation Amplifier with Auto-Zero

<!-- image -->

Figure 50. Burn-In Circuit

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

CONTROLLING DIMENSIONS ARE IN INCHES; MILLIMETERS DIMENSIONS (IN PARENTHESES) ARE ROUNDED-OFF INCH EQUIVALENTS FOR REFERENCE ONLY AND ARE NOT APPROPRIATE FOR USE IN DESIGN.

Figure 51. 18-Lead Ceramic Dual In-Line Package [CERDIP] (Q-18)

Dimensions shown in inches and (millimeters)

<!-- image -->

BSC

COMPLIANT TO JEDEC STANDARDS MS-013-AC

CONTROLLING DIMENSIONS ARE IN MILLIMETERS; INCH DIMENSIONS (IN PARENTHESES) ARE ROUNDED-OFF MILLIMETER EQUIVALENTS FOR REFERENCE ONLY AND ARE NOT APPROPRIATE FOR USE IN DESIGN.

Figure 52. 20-Lead Standard Small Outline Package [SOIC\_W] Wide Body (RW-20)

Dimensions shown in millimeters and (inches)

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description                                               | Package Option   |
|---------------|---------------------|-------------------------------------------------------------------|------------------|
| AMP01AX       | -55°C to +125°C     | 18-Lead Ceramic Dual In-Line Package [CERDIP]                     | Q-18             |
| AMP01BX       | -55°C to +125°C     | 18-Lead Ceramic Dual In-Line Package [CERDIP]                     | Q-18             |
| AMP01EX       | -25°C to +85°C      | 18-Lead Ceramic Dual In-Line Package [CERDIP]                     | Q-18             |
| AMP01FX       | -25°C to +85°C      | 18-Lead Ceramic Dual In-Line Package [CERDIP]                     | Q-18             |
| AMP01GSZ      | 0°C to 70°C         | 20-Lead Standard Small Outline Package [SOIC_W]                   | RW-20            |
| AMP01GSZ-REEL | 0°C to 70°C         | 20-Lead Standard Small Outline Package [SOIC_W], 13'Tape and Reel | RW-20            |
| AMP01NBC      |                     | Die                                                               |                  |

<!-- image -->

06-07-2006-A