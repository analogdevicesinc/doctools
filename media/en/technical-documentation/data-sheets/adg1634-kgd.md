<!-- lastmod 2020-11-20 -->
<!-- image -->

Data Sheet

## FEATURES

4.5 Ω typical on resistance at ±5 V and 25°C 1 Ω typical on-resistance flatness at ±5 V and 25°C Up to 234 mA continuous current ±3.3 V to ±8 V dual-supply operation 3.3 V to 16 V single-supply operation No VL supply required 3 V logic-compatible inputs Rail-to-rail operation

## APPLICATIONS

Communication systems Medical systems Audio signal routing Video signal routing Automatic test equipment Data acquisition systems Battery-powered systems Sample-and-hold systems Relay replacements

## GENERAL DESCRIPTION

The ADG1634-KGD is a monolithic industrial CMOS ( i CMOS®) analog switch comprising four independently selectable SPDT switches.

All channels exhibit break-before-make switching action that prevents momentary shorting when switching channels. An EN input on the ADG1634-KGD is used to enable or disable the device. When disabled, all channels are switched off.

The ultralow, on resistance and on-resistance flatness of this switch make the device an ideal solution for data acquisition and gain switching applications, where low distortion is critical. Its i CMOS construction ensures ultralow power dissipation, making the ADG1634-KGD ideally suited for portable and batterypowered instruments.

Additional application and technical information can be found in the ADG1634 data sheet.

Known Good Die (KGD): this die is fully guaranteed to data sheet specifications.

## 4.5 Ω RON, Quad SPDT ±5 V,

## +12 V, +5 V, and +3.3 V Switch

[ADG1634-KGD](https://www.analog.com/ADG1634?doc=ADG1634-KGD.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

## [ADG1634-KGD](https://www.analog.com/ADG1634?doc=ADG1634-KGD.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| General Description......................................................................... 1             |
| Functional Block Diagram.............................................................. 1                   |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| ±5 VDual Supply......................................................................... 3                 |
| 12 VSingle Supply ....................................................................... 4                |
| 5 VSingle Supply.......................................................................... 5               |
| 3.3 VSingle Supply ...................................................................... 6                |

## REVISION HISTORY

11/2020-Revision 0: Initial Version

| Continuous Current per Channel, S or D.................................7                              |
|-------------------------------------------------------------------------------------------------------|
| Absolute Maximum Ratings............................................................8                 |
| ESD Caution ..................................................................................8       |
| Pin Configuration and Function Descriptions .............................9                            |
| Test Circuits .................................................................................... 11 |
| Outline Dimensions....................................................................... 13          |
| Die Specifications and Assembly Recommendations........... 13                                         |
| Ordering Guide .......................................................................... 13          |

## SPECIFICATIONS

## ±5 V DUAL SUPPLY

VDD = +5 V ± 10%, VSS = -5 V ± 10%, and GND = 0 V, unless otherwise noted.

## Table 1.

| Parameter                                       | 25°C        | -40°C to +85°C   | -40°C to +125°C   | Unit           | Test Conditions/Comments                                                         |
|-------------------------------------------------|-------------|------------------|-------------------|----------------|----------------------------------------------------------------------------------|
| ANALOG SWITCH                                   |             |                  |                   |                |                                                                                  |
| Analog Signal Range                             |             |                  | V DD toV SS       | V              |                                                                                  |
| On Resistance, R ON                             | 4.5         |                  |                   | Ωtyp           | Supply voltage (V S ) = ±4.5 V, supply current (I S ) = -10 mA, see Figure 3     |
|                                                 | 5           | 7                | 8                 | Ωmax           | V DD = ±4.5 V,V SS = ±4.5V                                                       |
| On-Resistance MatchBetweenChannels,∆R ON        | 0.12 0.25 1 | 0.3              | 0.35              | Ωtyp Ωmax Ωtyp | V S = ±4.5 V, I S =-10mA V S = ±4.5 V, I S =-10mA                                |
| On-Resistance Flatness, R FLAT(ON)              | 1.3         | 1.7              | 2                 | Ωmax           |                                                                                  |
| LEAKAGE CURRENTS                                |             |                  |                   |                | V = +5.5 V,V = -5.5V                                                             |
| Source Off Leakage, I S (Off)                   | ±0.01       |                  |                   | nA typ         | DD SS V S = ±4.5 V, drain voltage (V D ) = ±4.5 V, see Figure 4                  |
|                                                 | ±0.1        | ±1.5             | ±12               | nA max nA typ  | V S = ±4.5 V,V D = ±4.5 V, see Figure 4                                          |
| Drain Off Leakage, I D (Off)                    | ±0.02 ±0.15 | ±2               | ±20               | nA max nA typ  | V S =V D = ±4.5 V, see Figure 5                                                  |
| ChannelOn Leakage, I D , I S (On)               | ±0.02 ±0.15 | ±2               | ±20               | nA max         |                                                                                  |
| DIGITAL INPUTS                                  |             |                  |                   |                |                                                                                  |
| Input HighVoltage,V INH                         |             |                  | 2.0               | V min          |                                                                                  |
| Input LowVoltage,V INL                          |             |                  |                   | V max          |                                                                                  |
| Input Current, I INL or I                       |             |                  | 0.8               |                |                                                                                  |
| INH                                             | ±1          |                  |                   | nA typ         | Input voltage (V IN ) = GNDvoltage (V GND ) orV DD                               |
| Digital Input Capacitance, C IN                 | 8           |                  |                   | pF typ         |                                                                                  |
| DYNAMIC CHARACTERISTICS 1                       |             |                  |                   |                |                                                                                  |
| Transition Time, t TRANSITION                   | 161         |                  |                   | ns typ         | Load resistance (R L ) = 300 Ω, load capacitance (C ) = 35 pF                    |
|                                                 | 200         | 236              | 264               | ns max         | V S = 2.5 V, see Figure 6                                                        |
| t ON (EN)                                       | 61          |                  |                   | ns typ         | R L = 300 Ω, C L = 35 pF                                                         |
|                                                 | 79          | 88               | 98                | ns max ns typ  | V S = 2.5 V, see Figure 8 R L = 300 Ω, C L = 35 pF                               |
| t OFF (EN)                                      | 162         |                  |                   |                | V S = 2.5 V, see Figure 8                                                        |
| Break-Before-Make Time Delay, t D               | 199         | 232              | 259               | ns max ns typ  | R L = 300 Ω, C L = 35 pF                                                         |
|                                                 | 44          |                  | 30                | ns min         | S1x voltage (V S1x ) = S2x voltage (V S2x ) = 2.5 V, see Figure 7                |
| Charge Injection                                | -12.5       |                  |                   | pC typ         | V S = 0V, R S = 0 Ω, C L = 1 nF, see Figure 9 R = 50 Ω, C = 5 pF, frequency (f)= |
| Off Isolation                                   | -64         |                  |                   | dB typ         | L L 1 MHz, see Figure 10                                                         |
| Channel-to-Channel Crosstalk                    | -64         |                  |                   | dB typ         | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 12                                 |
| Total Harmonic Distortion + Noise,THD+N         | 0.3         |                  |                   | %typ           | R L = 110 Ω,V S = 5V p-p, f = 20 Hz to 20 kHz, see Figure 13                     |
| -3 dB Bandwidth                                 | 103         |                  |                   | MHz typ        | R L = 50 Ω, C L = 5 pF, see Figure 11                                            |
| Source Capacitance Off, C S (Off)               | 19          |                  |                   | pF typ         | V S = 0V, f = 1MHz                                                               |
| Drain Capacitance Off, C D (Off)                | 33          |                  |                   | pF typ         | V S = 0V, f = 1MHz                                                               |
| Source and Drain Capacitance On, C D , C S (On) | 57          |                  |                   | pF typ         | V S = 0V, f = 1MHz                                                               |

| Parameter                               |   25°C | -40°C to +85°C   | -40°C to +125°C   | Unit     | Test Conditions/Comments                              |
|-----------------------------------------|--------|------------------|-------------------|----------|-------------------------------------------------------|
| POWER REQUIREMENTS Supply Current, I DD |  0.001 |                  |                   | µA typ   | V DD = +5.5 V,V SS = -5.5V Digital inputs = 0V orV DD |
|                                         |        |                  | 1.0               | µA max   |                                                       |
| V DD /V SS                              |        |                  | ±3.3/±8           | Vmin/max |                                                       |

## 12 V SINGLE SUPPLY

VDD = 12 V ± 10%, VSS = 0 V, and GND = 0 V, unless otherwise noted.

## Table 2.

| Parameter                     | 25°C        | -40°C to +85°C   | -40°C to +125°C   | Unit          | Test Conditions/Comments                         |
|-------------------------------|-------------|------------------|-------------------|---------------|--------------------------------------------------|
| ANALOG SWITCH                 |             |                  |                   |               |                                                  |
| Analog Signal Range           |             |                  | 0 toV DD          | V             |                                                  |
| R ON                          | 4           |                  |                   | Ωtyp          | V S =0Vto10V,I S =-10mA,seeFigure 3              |
|                               | 4.5         | 6.5              | 7.5               | Ωmax          | V DD = 10.8 V,V SS = 0V                          |
| ∆R ON                         | 0.12 0.25   | 0.3              | 0.35              | Ωtyp Ωmax     | V S = 10V, I S = -10mA                           |
| R FLAT(ON)                    | 0.9 1.2     | 1.6              | 1.9               | Ωtyp Ωmax     | V S = 0V to 10V, I S = -10mA                     |
| LEAKAGE CURRENTS              |             |                  |                   |               | V DD = 13.2 V,V SS = 0V                          |
| I S (Off)                     | ±0.01       |                  |                   | nA typ        | V S = 1V/10V,V D = 10V/1V, see Figure 4          |
|                               | ±0.1        | ±1.5             | ±12               | nA max        |                                                  |
| I D (Off)                     | ±0.02 ±0.15 | ±2               | ±20               | nA typ nA max | V S = 1V/10V,V D = 10V/1V, see Figure 4          |
| I D , I S (On)                | ±0.02       |                  |                   | nA typ        | V S =V D = 1V or 10V, see Figure 5               |
| DIGITAL INPUTS                |             |                  |                   |               |                                                  |
| V INH                         |             |                  | 2.0               | V min         |                                                  |
| V INL                         |             |                  | 0.8               | V max         |                                                  |
| I INL or I INH                | ±1          |                  |                   | nA typ        | V IN =V GND orV DD                               |
| C IN                          | 8           |                  | ±0.1              | µA max pF typ |                                                  |
| DYNAMIC CHARACTERISTICS 1     |             |                  |                   |               |                                                  |
| Transition Time, t TRANSITION | 127         |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                         |
| t ON (EN)                     | 151 31      | 182              | 205               | ns max ns typ | V S = 8V, see Figure 6 R L = 300 Ω, C L = 35 pF  |
|                               | 38          | 43               | 47                | ns max        | V S = 8V, see Figure 8                           |
| t OFF (EN)                    | 128         | 180              | 200               | ns typ        | R L = 300 Ω, C L = 35 pF                         |
|                               | 152         |                  |                   | ns max        | V S = 8V, see Figure 8                           |
| t D                           | 45          |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                         |
|                               |             |                  | 30                | ns min        | V S1 =V S2 = 8V, see Figure 7                    |
| Charge Injection              | -12.4       |                  |                   | pC typ        | V S = 6V, R S = 0 Ω, C L = 1 nF, see Figure 9    |
| Off Isolation                 | -64         |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 10 |
| Channel-to-Channel            | -64         |                  |                   | dB            | R L = 50 Ω, C L = 5 pF, f = 1 MHz,               |
| Crosstalk                     |             |                  |                   | typ           | see Figure 12                                    |

| Parameter          |   25°C | -40°C to +85°C   | -40°C to +125°C   | Unit     | Test Conditions/Comments                                     |
|--------------------|--------|------------------|-------------------|----------|--------------------------------------------------------------|
| THD+N              |    0.3 |                  |                   | %typ     | R L = 110 Ω,V S = 5V p-p, f = 20 Hz to 20 kHz, see Figure 13 |
| -3 dB Bandwidth    |    109 |                  |                   | MHz typ  | R L = 50 Ω, C L = 5 pF; see Figure 11                        |
| C S (Off)          |     19 |                  |                   | pF typ   | V S = 6V, f = 1MHz                                           |
| C D (Off)          |     32 |                  |                   | pF typ   | V S = 6V, f = 1MHz                                           |
| C D , C S (On)     |     56 |                  |                   | pF typ   | V S = 6V, f = 1MHz                                           |
| POWER REQUIREMENTS |        |                  |                   |          | V DD = 12V                                                   |
| I DD               |  0.001 |                  |                   | µA typ   | Digital inputs = 0V orV DD                                   |
|                    |        |                  | 1.0               | µA max   | Digital inputs = 0V orV DD                                   |
|                    |    375 |                  |                   | µA typ   | Digital inputs = 5V                                          |
|                    |        |                  | 600               | µA max   | Digital inputs = 5V                                          |
| V DD               |        |                  | 3.3/16            | Vmin/max |                                                              |

## 5 V SINGLE SUPPLY

VDD = 5 V ± 10%, VSS = 0 V, and GND = 0 V, unless otherwise noted.

## Table 3.

| Parameter                     | 25°C        | -40°C to +85°C   | -40°C to +125°C   | Unit          | Test Conditions/Comments                     |
|-------------------------------|-------------|------------------|-------------------|---------------|----------------------------------------------|
| ANALOG SWITCH                 |             |                  |                   |               |                                              |
| Analog Signal Range           |             |                  | 0toV DD           | V             |                                              |
| R ON                          | 8.5         |                  |                   | Ωtyp          | V S =0Vto4.5V,I S =-10mA,seeFigure 3         |
|                               | 10          | 12.5             | 14                | Ωmax          | V DD = 4.5 V,V SS = 0V                       |
| ∆R ON                         | 0.15        |                  |                   | Ωtyp Ωmax     | V S = 0V to 4.5 V, I S =-10mA                |
|                               | 0.3 1.7     | 0.35             | 0.4               | Ωtyp          | V S = 0V to 4.5 V, I S =-10mA                |
| R FLAT(ON)                    |             |                  |                   |               |                                              |
|                               | 2.3         | 2.7              |                   | Ωmax          |                                              |
| LEAKAGE CURRENTS              |             |                  | 3                 |               | V DD = 5.5 V,V SS = 0V                       |
| I S (Off)                     | ±0.01       |                  |                   | nA typ        | V S = 1V/4.5 V,V D = 4.5 V/1 V, see Figure 4 |
|                               | ±0.1        | ±1.5             | ±12               | nA max        |                                              |
| I D (Off)                     | ±0.02 ±0.15 | ±2               | ±20               | nA typ nA max | V S = 1V/4.5 V,V D = 4.5 V/1 V, see Figure 4 |
| I D , I S (On)                | ±0.02       |                  |                   |               | V S =V D = 1V or 4.5 V, see Figure 5         |
|                               |             |                  |                   | nA typ        |                                              |
|                               |             | ±2               | ±20               | nA max        |                                              |
| DIGITAL INPUTS                | ±0.15       |                  |                   |               |                                              |
| V INH                         |             |                  | 2.0               | V min         |                                              |
| V INL                         |             |                  | 0.8               | V max         |                                              |
| I INL or I INH                | ±1          |                  |                   | nA typ        |                                              |
|                               |             |                  | ±0.1              | µA max        | V IN =V GND orV DD                           |
| C IN                          | 8           |                  |                   | pF typ        |                                              |
| DYNAMIC CHARACTERISTICS 1     |             |                  |                   |               |                                              |
| Transition Time, t TRANSITION | 199         |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                     |
|                               | 254         | 303              | 337               | ns max        | V S = 2.5 V, see Figure 6                    |
| t ON (EN)                     | 68          |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                     |
|                               | 90          | 102              | 110               | ns max        | V S = 2.5 V, see Figure 8                    |
| t OFF (EN)                    | 201         |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                     |
|                               | 256         | 300              | 333               | ns max        | V S = 2.5 V, see Figure 8                    |

| Parameter                    |   25°C | -40°C to +85°C   | -40°C to +125°C   | Unit      | Test Conditions/Comments                                        |
|------------------------------|--------|------------------|-------------------|-----------|-----------------------------------------------------------------|
| t D                          |     57 |                  |                   | ns typ    | R L = 300 Ω, C L = 35 pF                                        |
|                              |        |                  | 37                | ns min    | V S1 =V S2 = 2.5 V, see Figure 7                                |
| Charge Injection             |     -5 |                  |                   | pC typ    | V S = 2.5 V, R S = 0 Ω, C L = 1 nF, see Figure 9                |
| Off Isolation                |    -64 |                  |                   | dB typ    | R L = 50 Ω, C L = 5 pF, f = 100 kHz, see Figure 10              |
| Channel-to-Channel Crosstalk |    -64 |                  |                   | dB typ    | R L = 50 Ω, C L = 5 pF, f = 100 kHz, see Figure 12              |
| THD+N                        |   0.27 |                  |                   | %typ      | R L = 110 Ω, f = 20 Hz to 20 kHz, V S = 3.5V p-p, see Figure 13 |
| -3 dB Bandwidth              |    104 |                  |                   | MHz typ   | R L = 50 Ω, C L = 5 pF, see Figure 11                           |
| C S (Off)                    |     21 |                  |                   | pF typ    | V S = 2.5 V, f = 1MHz                                           |
| C D (Off)                    |     37 |                  |                   | pF typ    | V S = 2.5 V, f = 1MHz                                           |
| C D , C S (On)               |     62 |                  |                   | pF typ    | V S = 2.5 V, f = 1MHz                                           |
| POWER REQUIREMENTS           |        |                  |                   |           | V DD = 5.5V                                                     |
| I DD                         |  0.001 |                  |                   | µA typ    | Digital inputs = 0V orV DD                                      |
|                              |        |                  | 1.0               | µA max    |                                                                 |
| V DD                         |        |                  | 3.3/16            | V min/max |                                                                 |

## 3.3 V SINGLE SUPPLY

VDD = 3.3 V, VSS = 0 V , and GND = 0 V, unless otherwise noted.

## Table 4.

| Parameter                       | 25°C       | -40°C to +85°C   | -40°C to +125°C   | Unit          | Test Conditions/Comments                                            |
|---------------------------------|------------|------------------|-------------------|---------------|---------------------------------------------------------------------|
| ANALOG SWITCH                   |            |                  |                   |               |                                                                     |
| Analog Signal Range             |            |                  | 0 toV DD          | V             |                                                                     |
| R ON                            | 13.5       | 15               | 16.5              | Ωtyp          | V S = 0V toV DD , I S = -10 mA, see Figure 3,V DD = 3.3 V,V SS = 0V |
| ∆R ON                           | 0.25       | 0.28             | 0.3               | Ωtyp          | V S = 0V toV DD , I S =-10mA                                        |
| R FLAT(ON)                      | 5          | 5.5              | 6.5               | Ωtyp          | V S = 0V toV DD , I S =-10mA                                        |
| LEAKAGE CURRENTS                |            |                  |                   |               | V DD = 3.6 V,V SS = 0V                                              |
| I S (Off)                       | ±0.01      |                  |                   | nA typ        | V S =0.6V/3V,V D =3V/0.6V, see Figure 4                             |
| I D (Off)                       | ±0.1 ±0.01 | ±1.5             | ±12               | nA max nA typ | V S =0.6V/3V,V D =3V/0.6V, see Figure 4                             |
|                                 | ±0.15      | ±2               | ±20               | nA max        | V S =V D = 0.6V or 3V, see Figure 5                                 |
| I D , I S (On)                  | ±0.01      |                  | ±20               | nA typ        |                                                                     |
|                                 | ±0.15      | ±2               |                   | nA max        |                                                                     |
| DIGITAL INPUTS                  |            |                  |                   |               |                                                                     |
| V INH                           |            |                  | 2.0               | V min         |                                                                     |
| V INL                           |            |                  | 0.8               | V max         |                                                                     |
| I INL or I INH                  | ±1         |                  | ±0.1              | nA typ        | V IN =V GND orV DD                                                  |
| Digital Input Capacitance, C IN | 8          |                  |                   | pF typ        |                                                                     |
| DYNAMIC CHARACTERISTICS 1       |            |                  |                   |               |                                                                     |
| t TRANSITION                    | 309        |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                                            |
|                                 | 429        | 466              | 508               | ns max        | V S = 1.5 V, see Figure 6                                           |
| t ON (EN)                       | 132        |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                                            |
|                                 | 184        | 201              | 210               | ns max        | V S = 1.5 V, see Figure 8                                           |
| t OFF (EN)                      | 313        |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF                                            |
|                                 | 416        | 470              | 509               | ns max        | V S = 1.5 V, see Figure 8                                           |

| Parameter                    |   25°C | -40°C to +85°C   | -40°C to +125°C   | Unit      | Test Conditions/Comments                                      |
|------------------------------|--------|------------------|-------------------|-----------|---------------------------------------------------------------|
| t D                          |     81 |                  |                   | ns typ    | R L = 300 Ω, C L = 35 pF                                      |
|                              |        |                  | 48                | ns min    | V S1 =V S2 = 1.5 V, see Figure 7                              |
| Charge Injection             |    -10 |                  |                   | pC typ    | V S = 1.5 V, R S = 0 Ω, C L = 1 nF, see Figure 9              |
| Off Isolation                |    -64 |                  |                   | dBtyp     | R L = 50 Ω, C L = 5 pF, f = 100 kHz, see Figure 10            |
| Channel-to-Channel Crosstalk |    -64 |                  |                   | dB typ    | R L = 50 Ω, C L = 5 pF, f = 100 kHz, see Figure 12            |
| THD+N                        |    0.6 |                  |                   | %typ      | R L = 110 Ω, f = 20 Hz to 20 kHz, V S = 2V p-p, see Figure 13 |
| -3 dB Bandwidth              |    117 |                  |                   | MHz typ   | R L = 50 Ω, C L = 5 pF, see Figure 11                         |
| C S (Off)                    |     22 |                  |                   | pF typ    | V S = 1.5 V, f = 1MHz                                         |
| C D (Off)                    |     39 |                  |                   | pF typ    | V S = 1.5 V, f = 1MHz                                         |
| C D , C S (On)               |     64 |                  |                   | pF typ    | V S = 1.5 V, f = 1MHz                                         |
| POWER REQUIREMENTS           |        |                  |                   |           | V DD = 3.6V                                                   |
| I DD                         |  0.001 |                  |                   | µA typ    | Digital inputs = 0V orV DD                                    |
|                              |        |                  | 1.0               | µA max    |                                                               |
| V DD                         |        |                  | 3.3/16            | V min/max |                                                               |

## CONTINUOUS CURRENT PER CHANNEL, S OR D

Table 5.

| Parameter               |   25°C |   85°C |   125°C | Unit   |
|-------------------------|--------|--------|---------|--------|
| CONTINUOUS CURRENT,SORD |        |        |         |        |
| V DD = +5V,V SS = -5V   |        |        |         |        |
| θ JA = 95°C/W           |    112 |     77 |      52 | mAmax  |
| θ JA = 30.4°C/W         |    220 |    136 |      73 | mAmax  |
| V DD = 12V,V SS = 0V    |        |        |         |        |
| θ JA = 95°C/W           |    119 |     80 |      52 | mAmax  |
| θ JA = 30.4°C/W         |    234 |    140 |      73 | mAmax  |
| V DD = 5V,V SS = 0V     |        |        |         |        |
| θ JA = 95°C/W           |     87 |     63 |      42 | mAmax  |
| θ JA = 30.4°C/W         |    171 |    112 |      66 | mAmax  |
| V DD = 3.3 V,V SS = 0V  |        |        |         |        |
| θ JA = 95°C/W           |     70 |     52 |      35 | mAmax  |
| θ JA = 30.4°C/W         |    140 |     94 |      59 | mAmax  |

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

## Table 6.

| Parameter                       | Rating                                                     |
|---------------------------------|------------------------------------------------------------|
| V DD toV SS                     | 18V                                                        |
| V DD toGND                      | -0.3V to +18V                                              |
| V SS toGND                      | +0.3V to -18V                                              |
| Analog Inputs 1                 | V SS - 0.3V toV DD + 0.3V or 30 mA, whichever occurs first |
| Digital Inputs 1                | GND-0.3V toV DD + 0.3V or 30 mA, whichever occurs first    |
| Peak Current, Sxx or Dx         | 450 mA(pulsed at 1 ms, 10% duty cycle maximum)             |
| Continuous Current, Sxx or Dx 2 | Data + 15%                                                 |
| Temperature                     |                                                            |
| Operating Range                 | -40°C to +125°C                                            |
| Storage Range                   | -65°C to +150°C                                            |
| Junction                        | 150°C                                                      |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Table 7. Pad Function Descriptions

|   PadNo. | Mnemonic   | XCoordinate    | Y Coordinate   | Description                                                                                      |
|----------|------------|----------------|----------------|--------------------------------------------------------------------------------------------------|
|        1 | S1A        | -710           | +710           | Source Terminal 1A. This pad can be an input or an output.                                       |
|        2 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                      |
|        3 | D1         | -710           | +413           | Drain Terminal 1. This pad can be an input or an output.                                         |
|        4 | D1         | -710           | +328           | Drain Terminal 1. This pad can be an input or an output.                                         |
|        5 | S1B        | -710           | +55            | Source Terminal 1B. This pad can be an input or an output.                                       |
|        6 | S1B        | -710           | -30            | Source Terminal 1B. This pad can be an input or an output.                                       |
|        7 | V SS       | -710           | -117           | Most Negative Power Supply Potential. In single-supply applications, connect this pad to ground. |
|        8 | GND        | -710           | -203           | Ground (0 V) Reference.                                                                          |
|        9 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                      |
|       10 | S2B        | -710           | -480           | Source Terminal 2B. This pad can be an input or an output.                                       |
|       11 | S2B        | -710           | -565           | Source Terminal 2B. This pad can be an input or an output.                                       |
|       12 | D2         | -641           | -651           | Drain Terminal 2. This pad can be an input or an output.                                         |
|       13 | D2         | -545           | -710           | Drain Terminal 2. This pad can be an input or an output.                                         |
|       14 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                      |
|       15 | S2A        | -215           | -710           | Source Terminal 2A. This pad can be an input or an output.                                       |
|       16 | S2A        | -130           | -710           | Source Terminal 2A. This pad can be an input or an output.                                       |
|       17 | IN2        | -43            | -710           | Logic Control Input 2.                                                                           |
|       18 | IN3        | +43            | -710           | Logic Control Input 3.                                                                           |
|       19 | S3A        | +130           | -710           | Source Terminal 3A. This pad can be an input or an output.                                       |
|       20 | S3A        | +215           | -710           | Source Terminal 3A. This pad can be an input or an output.                                       |
|       21 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                      |
|       22 | D3         | +545           | -710           | Drain Terminal 2. This pad can be an input or an output.                                         |
|       23 | D3         | +641           | -651           | Drain Terminal 2. This pad can be an input or an output.                                         |

## [ADG1634-KGD](https://www.analog.com/ADG1634?doc=ADG1634-KGD.pdf)

|   Pad No. | Mnemonic   | XCoordinate    | YCoordinate    | Description                                                                                                                                                        |
|-----------|------------|----------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        24 | S3B        | +710           | -565           | Source Terminal 3B. This pad can be an input or an output.                                                                                                         |
|        25 | S3B        | +710           | -480           | Source Terminal 3B. This pad can be an input or an output.                                                                                                         |
|        26 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                                                                                        |
|        27 | V DD       | +710           | -117           | Most Positive Power Supply Potential.                                                                                                                              |
|        28 | S4B        | +710           | -30            | Source Terminal 4B. This pad can be an input or an output.                                                                                                         |
|        29 | S4B        | +710           | +55            | Source Terminal 4B. This pad can be an input or an output.                                                                                                         |
|        30 | D4         | +710           | +328           | Drain Terminal 4. This pad can be an input or an output.                                                                                                           |
|        31 | D4         | +710           | +413           | Drain Terminal 4. This pad can be an input or an output.                                                                                                           |
|        32 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                                                                                        |
|        33 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                                                                                        |
|        34 | S4A        | +710           | +710           | Source Terminal 4A. This pad can be an input or an output.                                                                                                         |
|        35 | S4A        | +510           | +710           | Source Terminal 4A. This pad can be an input or an output.                                                                                                         |
|        36 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                                                                                        |
|        37 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                                                                                        |
|        38 | IN4        | +43            | +710           | Logic Control Input 4.                                                                                                                                             |
|        39 | EN         | -43            | +710           | Active Low Digital Input.When this pad is high, the device is disabled, and all switches are off.When this pad is low, INx logic inputs determine the on switches. |
|        40 | DNC        | Not applicable | Not applicable | Do Not Connect. Do not connect to this pad.                                                                                                                        |
|        41 | IN1        | -320           | +710           | Logic Control Input 1.                                                                                                                                             |
|        42 | S1A        | -510           | +710           | Source Terminal 1A. This pad can be an input or an output.                                                                                                         |

## Table 8. Truth Table

|   EN | INx            | SxA   | SxB   |
|------|----------------|-------|-------|
|    1 | X (don't care) | Off   | Off   |
|    0 | 0              | Off   | On    |
|    0 | 1              | On    | Off   |

## TEST CIRCUITS

<!-- image -->

<!-- image -->

Figure 9. Charge Injection

Figure 10. Off Isolation

<!-- image -->

<!-- image -->

Figure 11. Bandwidth

<!-- image -->

Figure 12. Channel-to-Channel Crosstalk

<!-- image -->

Figure 13. THD + Noise

## OUTLINE DIMENSIONS

Figure 14. 42-Pad Bare Die [CHIP]

<!-- image -->

(C-42-1) Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 9. Die Specifications

| Parameter            | Value                            | Unit           |
|----------------------|----------------------------------|----------------|
| Chip Size            | 1565 × 1565                      | µm             |
| Scribe Line Width    | 80 × 80                          | µm             |
| Die Size             | 1645 × 1645                      | µm             |
| Thickness            | 305                              | µm             |
| Backside             | V SS                             | Not applicable |
| Passivation          | Oxynitride                       | Not applicable |
| Bond Pads (Minimum)  | 70 × 70                          | µm             |
| Bond Pad Composition | Aluminum (Al), Copper (Cu), 0.5% | Not applicable |

## Table 10. Assembly Recommendations

| Assembly Component   | Recommendation                |
|----------------------|-------------------------------|
| Die Attach           | Epoxy dispense                |
| Bonding Method       | Thermosonic gold ball bonding |

## ORDERING GUIDE

| Model 1        | Temperature Range   | Description            | EN Pin   | Package Option   |
|----------------|---------------------|------------------------|----------|------------------|
| ADG1634-KGD-WP | -40°C to +125°C     | 42-Pad Bare Die [CHIP] | Yes      | C-42-1           |

<!-- image -->