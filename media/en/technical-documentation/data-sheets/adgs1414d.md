<!-- lastmod 2020-06-25 -->
<!-- image -->

Data Sheet

## FEATURES

SPI with error detection

Includes CRC, invalid read and write address, and SCLK count error detection Industry-standard SPI Mode 0 and Mode 3 interface

Supports burst mode and daisy-chain mode compatible

Integrated passive components

Route through of digital signals and supplies

Guaranteed break-before-make switching allowing external

wiring of switches to deliver multiplexer configurations

1.5 Ω typical on resistance at 25°C (±15 V dual supply)

0.3 Ω typical on resistance flatness at 25°C (±15 V dual supply)

- 0.1 Ω typical on resistance match between channels at 25°C (±15 V dual supply)

VSS to VDD analog signal range

Fully specified at ±15 V, ±5 V, and +12 V 1.8 V logic compatibility with 2.7 V ≤ VL ≤ 3.3 V (excludes SPI readback to a 1.8 V device)

4 mm × 5 mm, 30-terminal LGA

## APPLICATIONS

Automated test equipment Data acquisition systems Sample-and-hold systems Audio and video signal routing Communications systems Relay replacement

## GENERAL DESCRIPTION

The ADGS1414D contains eight independent SPST switches. A serial peripheral interface (SPI) controls the switches. The SPI has robust error detection features, such as cyclic redundancy check (CRC) error detection, invalid read and write address detection, and SCLK count error detection.

It is possible to daisy-chain multiple ADGS1414D devices together. Daisy-chain mode enables the configuration of multiple devices with a minimal amount of digital lines. The route of digital signals and supplies through the ADGS1414D allows for a further increase in channel density. Integrated passive components eliminate the need for external passive components.

[Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADGS1414D.pdf&product=ADGS1414D&rev=0)

## SPI, 1.5 Ω RON, ±15 V/±5 V/+12 V, High

## Density Octal SPST Switch

[ADGS1414D](https://www.analog.com/ADGS1414D?doc=ADGS1414D.pdf)

## FUNCTIONAL BLOCK DIAGRAM

23895-001

Figure 1.

<!-- image -->

The ADGS1414D is suited to high density switching applications, such as large switching matrices and fanout applications.

Each switch conducts equally well in both directions when on, and each switch has an input signal range that extends to the supplies. In the off condition, signal levels up to the supplies are blocked.

Multifunction pin names may be referenced by their relevant function only.

## PRODUCT HIGHLIGHTS

1. The SPI removes the need for parallel conversion and logic traces and reduces the general-purpose input and output (GPIO) channel count.
2. Daisy-chain mode removes additional logic traces when multiple devices are used.
3. Route through of digital signals and supplies eases routing and allows for an increase in channel density.
4. Integrated passive components eliminate the need for external passive components.
5. CRC error detection, invalid read and write address detection, and SCLK count error detection ensure a robust digital interface.
6. CRC, invalid read and write address, and SCLK error detection capabilities allow for the use of the ADGS1414D in safety critical systems.
7. Minimum distortion.

<!-- image -->

## [ADGS1414D](https://www.analog.com/ADGS1414D?doc=ADGS1414D.pdf)

## TABLE OF CONTENTS

| Features..............................................................................................   |   1 |
|----------------------------------------------------------------------------------------------------------|-----|
| Applications ......................................................................................      |   1 |
| General Description.........................................................................             |   1 |
| Functional Block Diagram..............................................................                   |   1 |
| Product Highlights...........................................................................            |   1 |
| Revision History ...............................................................................         |   2 |
| Specifications ....................................................................................      |   3 |
| ±15 VDual Supply.......................................................................                  |   3 |
| ±5 VDual Supply.........................................................................                 |   5 |
| 12 VSingle Supply .......................................................................                |   7 |
| Continuous Current per Channel, Sx or Dx ............................                                    |   9 |
| Timing Characteristics ................................................................                  |   9 |
| Absolute Maximum Ratings .........................................................11                     |     |
| Thermal Resistance....................................................................11                 |     |
| Electrostatic Discharge (ESD) Ratings....................................                                |  11 |
| ESD Caution................................................................................11            |     |
| Pin Configuration and Function Descriptions ..........................                                   |  12 |
| Typical Performance Characteristics...........................................13                         |     |
| Test Circuits ....................................................................................17     |     |
| Terminology....................................................................................19        |     |
| Theory of Operation ......................................................................20             |     |
| Address Mode.............................................................................20              |     |
| Error Detection Features...........................................................20                    |     |

## REVISION HISTORY

6/2020-Revision 0: Initial Version

| Clearing the Error Flags Register.............................................                   |   21 |
|--------------------------------------------------------------------------------------------------|------|
| Burst Mode..................................................................................     |   21 |
| Software Reset.............................................................................      |   21 |
| Daisy-Chain Mode.....................................................................            |   21 |
| Power-On Reset..........................................................................         |   22 |
| Applications Information .............................................................           |   23 |
| System Channel Density ...........................................................               |   23 |
| Break-Before-Make Switching .................................................                    |   24 |
| Digital Input Buffers..................................................................          |   24 |
| Power Supply Rails.....................................................................          |   24 |
| Power Supply Recommendations............................................                         |   24 |
| 1.8 VLogic Compatibility.........................................................                |   24 |
| Register Summary..........................................................................       |   25 |
| Register Details ............................................................................... |   26 |
| Switch Data Register..................................................................           |   26 |
| Error Configuration Register ...................................................                 |   26 |
| Error Flags Register....................................................................         |   27 |
| Burst Enable Register.................................................................           |   27 |
| Software Reset Register .............................................................            |   27 |
| Outline Dimensions.......................................................................        |   28 |
| Ordering Guide ..........................................................................        |   28 |

## SPECIFICATIONS ±15 V DUAL SUPPLY

VDD = +15 V ± 10%, VSS = -15 V ± 10%, VL = 2.7 V to 5.5 V, and GND = 0 V, unless otherwise noted.

## Table 1.

| Parameter                                      | +25°C       | -40°C to +85°C   | -40°C to +125°C            | Unit         | Test Conditions/Comments                                                          |
|------------------------------------------------|-------------|------------------|----------------------------|--------------|-----------------------------------------------------------------------------------|
| ANALOG SWITCH                                  |             |                  |                            |              |                                                                                   |
| Analog Signal Range                            |             |                  | V DD to V SS               | V            |                                                                                   |
| On Resistance, R ON                            |             |                  |                            | Ωtyp         |                                                                                   |
|                                                | 1.5         |                  |                            |              | Source voltage, V S = ±10 V, source current, I S = -10 mA, see Figure 29          |
| On-Resistance Match                            | 1.8         | 2.3              | 2.6                        | Ωmax         | V DD = +13.5 V, V SS = -13.5 V                                                    |
| Between Channels, ∆R ON                        | 0.1         |                  |                            | Ωtyp         | V S = ±10 V, I S =-10mA                                                           |
| On-Resistance Flatness, R FLAT (ON)            | 0.3         |                  |                            | Ωmax         |                                                                                   |
|                                                | 0.18        | 0.19             | 0.21                       | Ωtyp         | V S = ±10 V, I S =-10mA                                                           |
|                                                |             | 0.4              | 0.45                       |              |                                                                                   |
| LEAKAGE CURRENTS Source Off Leakage, I S (Off) | 0.36 ±0.03  |                  |                            | Ωmax nA typ  | V DD = +16.5 V, V SS = -16.5 V V S =±10V,drain voltage,V D =  10 V, see Figure32 |
|                                                | ±0.55       | ±2               | ±12.5                      | nA max       |                                                                                   |
| Drain Off Leakage, I D (Off)                   | ±0.03 ±0.55 |                  |                            | nA typ       |                                                                                   |
|                                                |             |                  |                            |              | V S =±10V,V D =  10 V, see Figure32                                              |
| D I S (On)                                     | ±0.15       | ±2               | ±12.5                      | nA max       |                                                                                   |
| Channel OnLeakage, I (On),                     |             |                  |                            | nA typ       | V S = V D = ±10 V, see Figure 28                                                  |
|                                                | ±2          | ±4               | ±30                        | nA max       |                                                                                   |
| DIGITAL OUTPUT                                 |             |                  |                            |              |                                                                                   |
| Low, V OL                                      |             |                  | 0.4                        | V max        | Sink current, I SINK =1mA                                                         |
|                                                |             |                  | 0.3                        | V max        | I SINK = 100 µA Source current, I =1mA                                            |
| High, V OH                                     |             |                  | V L - 1.25 V V L - 0.125 V | V min        | SOURCE I SOURCE = 100 µA                                                          |
| Digital Output Capacitance, C OUT              | 4           |                  |                            | V min pF typ |                                                                                   |
| DIGITAL INPUTS                                 |             |                  |                            |              |                                                                                   |
| Input Voltage                                  |             |                  |                            |              |                                                                                   |
| High, V INH                                    |             |                  | 2                          | V min        | 3.3 V < V L ≤ 5.5 V                                                               |
|                                                |             |                  | 1.35                       | V min        | 2.7 V ≤ V L ≤ 3.3 V 3.3 V < V L ≤ 5.5 V                                           |
| Low, V INL                                     |             |                  | 0.8 0.8                    | V max V max  | 2.7 V ≤ V L ≤ 3.3 V                                                               |
| Input Current                                  |             |                  |                            |              |                                                                                   |
| Low, I INL or High, I INH                      | 0.001       |                  |                            | µA typ       | Input voltage, V IN = ground voltage, V GND or V L                                |
|                                                |             |                  | ±0.1                       | µA max       |                                                                                   |
| DYNAMIC CHARACTERISTICS 1                      |             |                  |                            |              |                                                                                   |
| On Time, t ON                                  | 400         |                  |                            | ns typ       | Load resistance, R L = 300 Ω, load capacitance, C L = 35 pF                       |
|                                                | 475         | 480              | 485                        | ns max       | V S = 10 V, see Figure 37                                                         |
|                                                | 190         | 210              | 225                        | ns max       | V S = 10 V, see Figure 37                                                         |

<!-- image -->

## [ADGS1414D](https://www.analog.com/ADGS1414D?doc=ADGS1414D.pdf)

## Data Sheet

| Parameter                             | +25°C     | -40°C to +85°C   |   -40°C to +125°C | Unit                 | Test Conditions/Comments                                                                                                      |
|---------------------------------------|-----------|------------------|-------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Break-Before-Make Time Delay, t D     | 215       |                  |               170 | ns typ ns min        | R L = 300 Ω, C L = 35 pF Source1 voltage,V =Source2voltage,                                                                   |
| Charge Injection,Q INJ                | -20       |                  |                   | pC typ               | V S = 0 V, source resistance, R S = 0 Ω, C L = 1 nF, see Figure 38                                                            |
| Off Isolation                         | -76       |                  |                   | dB typ               | R L = 50 Ω, C L = 5 pF, frequency, f = 1 MHz, see Figure 31                                                                   |
| Channel to Channel Crosstalk          | -75       |                  |                   | dB typ               | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 30                                                                              |
| TotalHarmonic Distortion+ Noise,THD+N | 0.014     |                  |                   | %typ                 | R L = 110 Ω, 15 V p-p, f = 20 Hz to 20 kHz, see Figure 33                                                                     |
| -3 dB Bandwidth                       | 170       |                  |                   | MHz typ              | R L = 50 Ω, C L = 5 pF, see Figure 34                                                                                         |
| Insertion Loss                        | -0.2      |                  |                   | dB typ               | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 34                                                                              |
| Source Capacitance,C S (Off)          | 20        |                  |                   | pF typ               | V S = 0 V,f=1MHz                                                                                                              |
| Drain Capacitance, C D (Off)          | 21        |                  |                   | pF typ               | V S = 0 V,f=1MHz                                                                                                              |
| C D (On),C S (On)                     | 111       |                  |                   | pF typ               | V S = 0 V,f=1MHz                                                                                                              |
| POWER REQUIREMENTS                    |           |                  |                   |                      | V DD = +16.5 V, V SS = -16.5 V                                                                                                |
| Positive Supply Current, I DD         | 0.04      |                  |               4.0 | µA typ µA max        | All switches open                                                                                                             |
|                                       | 480       |                  |                   | µA typ µA max        | All switches closed, V L = 5.5 V                                                                                              |
|                                       | 480       |                  |               800 | µA typ               | All switches closed, V L = 2.7 V                                                                                              |
|                                       |           |                  |               800 | µA max               |                                                                                                                               |
| Load Current, I L Inactive            | 6.3       |                  |                   | µA typ               | Digital inputs = 0 V or V L                                                                                                   |
| Inactive, SCLK = 1 MHz                | 14        |                  |                   | µA typ               | CS = V L and SDI = 0 V or V L , V L = 5 V                                                                                     |
| SCLK = 50 MHz                         | 7 390 210 |                  |                   | µA typ µA typ µA typ | CS = V L and SDI = 0 V or V L , V L = 3 V CS = V L and SDI = 0 V or V L , V L = 5 V CS = V L and SDI = 0 V or V L , V L = 3 V |
| Inactive, SDI = 1 MHz                 | 15 7.5    |                  |                   | µA typ µA typ        | CS and SCLK = 0 V or V L , V L = 5 V CS and SCLK = 0 V or V L , V L = 3 V                                                     |
| SDI = 25 MHz                          | 230       |                  |                   | µA typ               | CS and SCLK = 0 V or V L , V L = 5 V                                                                                          |
|                                       | 120       |                  |                   | µA typ               | CS and SCLK = 0 V or V L , V L = 3 V                                                                                          |
| Active at 50 MHz                      | 1.8       |                  |               2.1 | mAtyp mAmax          | Digital inputs toggle between 0 V and V L , V L = 5.5 V                                                                       |
| Negative Supply Current, I SS         | 0.7 0.04  |                  |               1.0 | mAtyp mAmax µA typ   | Digital inputs toggle between 0 V and V L , V L = 2.7 V Digital inputs = 0 V or V L                                           |

## ±5 V DUAL SUPPLY

VDD = +5 V ± 10%, VSS = -5 V ± 10%, VL = 2.7 V to 5.5 V, and GND = 0 V, unless otherwise noted.

## Table 2.

| Parameter                                                                       | +25°C       | -40°C to +85°C   | -40°C to +125°C   | Unit          | Test Conditions/Comments                                                    |
|---------------------------------------------------------------------------------|-------------|------------------|-------------------|---------------|-----------------------------------------------------------------------------|
| ANALOG SWITCH                                                                   |             |                  |                   |               |                                                                             |
| Analog Signal Range                                                             |             |                  | V DD to V SS      | V             |                                                                             |
| On Resistance, R ON                                                             | 3.3         |                  |                   | Ωtyp          | V S = ±4.5 V, I S = -10 mA, see Figure 29                                   |
|                                                                                 | 4 0.13      | 4.9              | 5.4               | Ωmax Ωtyp     | V DD = +4.5 V, V SS = -4.5 V V S = ±4.5 V, I S =-10mA                       |
| On-Resistance Match Between Channels, ∆R ON On-Resistance Flatness, R FLAT (ON) | 0.35 0.9    | 0.43             | 0.45              | Ωmax Ωtyp     | V S = ±4.5 V, I S =-10mA                                                    |
|                                                                                 | 1.1         | 1.24             | 1.31              | Ωmax          |                                                                             |
| LEAKAGE CURRENTS                                                                |             |                  |                   |               | V DD = +5.5 V, V SS = -5.5 V                                                |
| Source Off Leakage, I S (Off)                                                   | ±0.03       |                  |                   | nA typ        | V S = ±4.5 V, V D =  4.5 V, see Figure 32                                  |
|                                                                                 | ±0.55       | ±2               | ±12.5             | nA max nA typ | V S = ±4.5 V, V D =  4.5 V, see                                            |
| Drain Off Leakage, I D (Off)                                                    | ±0.03 ±0.55 | ±2               | ±12.5             | nA max nA typ | Figure 32 V S = V D = ±4.5 V, see Figure                                    |
| Channel On Leakage, I D (On), I S (On)                                          | ±0.05 ±1.0  | ±4               | ±30               | nA max        | 28                                                                          |
| DIGITAL OUTPUT                                                                  |             |                  |                   |               |                                                                             |
| Output Voltage                                                                  |             |                  |                   |               |                                                                             |
| Low, V OL                                                                       |             |                  | 0.4               | V max         | I SINK =1mA                                                                 |
|                                                                                 |             |                  | 0.3               | V max         | I SINK = 100 µA                                                             |
| High, V OH                                                                      |             |                  | V L - 1.25 V      | V min         | I SOURCE =1mA                                                               |
| Digital Output Capacitance,C OUT                                                | 4           |                  | V L - 0.125 V     | V min pF typ  | I SOURCE = 100 µA                                                           |
| DIGITAL INPUTS                                                                  |             |                  |                   |               |                                                                             |
| Input Voltage                                                                   |             |                  |                   |               |                                                                             |
| High, V INH                                                                     |             |                  | 2                 | V min         | 3.3 V < V L ≤ 5.5 V                                                         |
|                                                                                 |             |                  | 1.35              | V min         | 2.7 V ≤ V L ≤ 3.3 V                                                         |
| Low, V INL                                                                      |             |                  | 0.8               | V max         | 3.3 V < V L ≤ 5.5 V                                                         |
|                                                                                 |             |                  | 0.8               | V max         | 2.7 V ≤ V L ≤ 3.3 V                                                         |
| Input Current                                                                   |             |                  |                   |               |                                                                             |
| Low, I INL or High, I INH                                                       | 0.001       |                  |                   | µA typ µA max | V IN = V GND or V L                                                         |
| Digital Input Capacitance, C                                                    |             |                  | ±0.1              | pF typ        |                                                                             |
| IN                                                                              | 4           |                  |                   |               |                                                                             |
| On Time, t ON                                                                   | 510         |                  |                   |               |                                                                             |
|                                                                                 | 645         | 680              | 710               | ns typ ns max | R L = 300 Ω, C L = 35 pF V S = 3 V, see Figure 37                           |
| Off Time, t OFF                                                                 | 280 365     | 400              | 435               | ns typ ns max | R L = 300 Ω, C L = 35 pF V S = 3 V, see Figure 37                           |
| Break-Before-Make Time Delay, t D                                               | 245         |                  | 200               | ns typ ns min | R L = 300 Ω, C L = 35 pF                                                    |
| Charge Injection,Q INJ                                                          | 10          |                  |                   | pC typ        | V S1 =V S2 =3V,seeFigure 36 V S = 0 V, R S = 0 Ω, C L = 1 nF, see Figure 38 |
| Off Isolation                                                                   | -76         |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 31                            |
| Channel to Channel Crosstalk                                                    | -75         |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 30                            |

<!-- image -->

## [ADGS1414D](https://www.analog.com/ADGS1414D?doc=ADGS1414D.pdf)

## Data Sheet

| Parameter                                | +25°C   | -40°C to +85°C   | -40°C to +125°C   | Unit               | Test Conditions/Comments                                                            |
|------------------------------------------|---------|------------------|-------------------|--------------------|-------------------------------------------------------------------------------------|
| Total Harmonic Distortion + Noise, THD+N | 0.03    |                  |                   | %typ               | R L = 110 Ω, 5 V p-p, f = 20 Hz to 20 kHz, see Figure 33                            |
| -3 dB Bandwidth                          | 130     |                  |                   | MHz typ            | R L = 50 Ω, C L = 5 pF, see Figure 34                                               |
| Insertion Loss                           | -0.3    |                  |                   | dB typ             | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 34                                    |
| Source Capacitance,C S (Off)             | 30 31   |                  |                   | pF typ pF typ      | V S = 0 V,f=1MHz                                                                    |
| Drain Capacitance, C D (Off)             |         |                  |                   |                    | V S = 0 V,f=1MHz                                                                    |
| C D (On), C S (On)                       | 116     |                  |                   | pF typ             | V S = 0 V,f=1MHz                                                                    |
| POWER REQUIREMENTS                       |         |                  |                   |                    | V DD = +5.5 V, V SS = -5.5 V                                                        |
| Positive Supply Current, I DD            | 0.04    |                  |                   | µA typ             | Digital inputs = 0 V or V L , V L = 5.5 V                                           |
|                                          | 28      |                  | 4.0               | µA max µA typ      | All switches closed, V L = 2.7 V                                                    |
| Load Current, I L                        |         |                  |                   |                    |                                                                                     |
| Inactive                                 | 6.3     |                  |                   | µA typ             | Digital inputs = 0 V or V L                                                         |
| Inactive, SCLK = 1 MHz                   | 14      |                  |                   | µA typ             | CS=V L andSDI=0VorV L ,V L =5V                                                      |
|                                          | 7       |                  |                   | µA typ             | CS=V L andSDI=0VorV L ,V L =3V                                                      |
| SCLK = 50 MHz Inactive, SDI = 1 MHz      | 390 210 |                  |                   | µA typ µA typ      | CS=V L andSDI=0VorV L ,V L =5V CS=V L andSDI=0VorV L ,V L =3V                       |
|                                          | 15      |                  |                   | µA typ             | CS and SCLK = 0 V or V L , V L = 5 V                                                |
| SDI = 25 MHz                             | 7.5     |                  |                   | µA typ             | CS and SCLK = 0 V or V L , V L = 3 V                                                |
|                                          | 230     |                  |                   | µA typ             | CS and SCLK = 0 V or V L , V L = 5 V                                                |
|                                          | 120     |                  |                   | µA typ             | CS and SCLK = 0 V or V L , V L = 3 V                                                |
| Active at 50 MHz                         | 1.8     |                  | 2.1               | mAtyp mAmax        | Digital inputs toggle between 0 V and V L , V L = 5.5 V                             |
|                                          | 0.7     |                  | 1.0               | mAtyp mAmax µA typ | Digital inputs toggle between 0 V and V L , V L = 2.7 V Digital inputs = 0 V or V L |
| Negative Supply Current, I SS            | 0.04    |                  | 4.0               | µA max             |                                                                                     |
| V DD /V SS                               |         |                  | ±4.5/±16.5        | V min/V max        | GND=0V                                                                              |

## 12 V SINGLE SUPPLY

VDD = 12 V ± 10%, VSS = 0 V, VL = 2.7 V to 5.5 V, and GND = 0 V, unless otherwise noted.

## Table 3.

| Parameter                                   | +25°C       | -40°C to +85°C   | -40°C to +125°C            | Unit           | Test Conditions/Comments                                                    |
|---------------------------------------------|-------------|------------------|----------------------------|----------------|-----------------------------------------------------------------------------|
| ANALOG SWITCH                               |             |                  |                            |                |                                                                             |
| Analog Signal Range                         |             |                  | 0 V to V DD                | V              |                                                                             |
| On Resistance, R ON                         | 2.8         |                  |                            | Ωtyp           | V S = 0 V to 10 V, I S = -10 mA, see Figure 29                              |
|                                             | 3.5         | 4.3              | 4.8                        | Ωmax           | V DD = 10.8 V, V SS = 0 V                                                   |
| On-Resistance Match Between Channels, ∆R ON | 0.13 0.35   | 0.43             | 0.45                       | Ωtyp Ωmax Ωtyp | V S = 0 V to 10 V, I S =-10mA                                               |
| On-Resistance Flatness, R FLAT (ON)         | 0.6         |                  |                            |                | V S = 0 V to 10 V, I S =-10mA                                               |
|                                             | 1.1         | 1.2              | 1.3                        | Ωmax           |                                                                             |
| LEAKAGE CURRENTS                            |             |                  |                            |                | V DD = 13.2 V, V SS = 0 V                                                   |
| Source Off Leakage, I S (Off)               | ±0.02       |                  |                            | nA typ         | V S = 1 V/10 V, V D = 10 V/1 V, see Figure 32                               |
|                                             | ±0.55       | ±2               | ±12.5                      | nA max         |                                                                             |
| Drain Off Leakage, I D (Off)                | ±0.02 ±0.55 | ±2               | ±12.5                      | nA typ nA max  | V S = 1 V/10 V, V D = 10 V/1 V, see Figure 32                               |
| Channel On Leakage, I D (On), I S (On)      | ±0.15       |                  |                            | nA typ         | V S = V D =1V/10V,seeFigure28                                               |
|                                             | ±1.5        | ±4               | ±30                        | nA max         |                                                                             |
| DIGITAL OUTPUT                              |             |                  |                            |                |                                                                             |
| Output Voltage                              |             |                  |                            |                |                                                                             |
| Low, V OL                                   |             |                  | 0.4 0.3                    | V max          | I SINK =1mA SINK = 100                                                      |
| High, V OH                                  |             |                  |                            | V max          | I µA                                                                        |
|                                             |             |                  | V L - 1.25 V V L - 0.125 V | V min          | I SOURCE =1mA I SOURCE = 100 µA                                             |
| Digital Output Capacitance, C OUT           | 4           |                  |                            | V min pF typ   |                                                                             |
| DIGITAL INPUTS                              |             |                  |                            |                |                                                                             |
| Input Voltage                               |             |                  |                            |                |                                                                             |
| High, V INH                                 |             |                  | 2                          | V min          | 3.3 V < V L ≤ 5.5 V                                                         |
|                                             |             |                  | 1.35                       | V min          | 2.7 V ≤ V L ≤ 3.3 V                                                         |
| Low, V INL                                  |             |                  | 0.8                        | V max          | 3.3 V < V L ≤ 5.5 V                                                         |
| Input Current                               |             |                  | 0.8                        | V max          | 2.7 V ≤ V L ≤ 3.3 V                                                         |
| Low, I INL or High, I INH                   | 0.001       |                  |                            | µA typ µA max  | V IN = V GND or V L                                                         |
| Digital Input Capacitance, C IN             | 4           |                  | ±0.1                       | pF typ         |                                                                             |
| DYNAMIC CHARACTERISTICS 1                   |             |                  |                            |                |                                                                             |
| On Time, t ON                               | 470         |                  |                            | ns typ         | R L = 300 Ω, C L = 35 pF                                                    |
|                                             | 570         | 595              | 615                        | ns max         | V S = 8 V, see Figure 37                                                    |
| Off Time, t OFF                             | 170         |                  |                            | ns typ         | R L = 300 Ω, C L = 35 pF                                                    |
| Break-Before-Make Time Delay, t D           | 215 280     | 240              | 265                        | ns max ns typ  | V S = 8 V, see Figure 37 R L = 300 Ω, C L = 35 pF                           |
| Charge Injection,Q INJ                      | 10          |                  | 225                        | ns min pC typ  | V S1 =V S2 =8V,seeFigure 36 V S = 6 V, R S = 0 Ω, C L = 1 nF, see Figure 38 |
| Off Isolation                               | -76         |                  |                            | dB typ         | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 31                            |

<!-- image -->

## [ADGS1414D](https://www.analog.com/ADGS1414D?doc=ADGS1414D.pdf)

## Data Sheet

| Parameter                               |   +25°C | -40°C to +85°C   | -40°C to +125°C   | Unit              | Test Conditions/Comments                               |
|-----------------------------------------|---------|------------------|-------------------|-------------------|--------------------------------------------------------|
| Channel to Channel Crosstalk            |     -75 |                  |                   | dB typ            | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 30       |
| Total Harmonic Distortion + Noise,THD+N |    0.06 |                  |                   | %typ              | R L =110Ω,6Vp-p,f=20Hzto20 kHz, see Figure 33          |
| -3 dB Bandwidth                         |     130 |                  |                   | MHz typ           | R L = 50 Ω, C L = 5 pF, see Figure 34                  |
| Insertion Loss                          |    -0.3 |                  |                   | dB typ            | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 34       |
| Source Capacitance,C S (Off)            |      27 |                  |                   | pF typ            | V S = 6 V,f=1MHz                                       |
| Drain Capacitance, C D (Off)            |      28 |                  |                   | pF typ            | V S = 6 V,f=1MHz                                       |
| C D (On), C S (On)                      |     116 |                  |                   | pF typ            | V S = 6 V,f=1MHz                                       |
| POWER REQUIREMENTS                      |         |                  |                   |                   | V DD = 13.2 V                                          |
| Positive Supply Current, I DD           |    0.04 |                  | 4.0               | µA typ µA max     | All switches open                                      |
|                                         |     420 |                  | 800               | µA typ µA max     | All switches closed, V L = 5.5 V                       |
|                                         |     520 |                  | 850               | µA typ µA max     | All switches closed, V L = 2.7 V                       |
| Load Current, I L                       |         |                  |                   |                   |                                                        |
| Inactive                                |     6.3 |                  |                   | µA typ            | Digital inputs = 0 V or V L                            |
| Inactive, SCLK = 1 MHz                  |      14 |                  | 8.0               | µA max µA typ     | CS = V L and SDI = 0 V or V L , V L = 5 V              |
|                                         |       7 |                  |                   | µA typ            | CS = V L and SDI = 0 V or V L , V L = 3 V              |
| SCLK = 50 MHz                           |     390 |                  |                   | µA typ            | CS = V L and SDI = 0 V or V L , V L = 5 V              |
|                                         |     210 |                  |                   | µA typ            | CS = V L and SDI = 0 V or V L , V L = 3 V              |
| Inactive, SDI = 1 MHz                   |      15 |                  |                   | µA typ            | CS and SCLK = 0 V or V L , V L = 5 V                   |
|                                         |     7.5 |                  |                   | µA typ            | CS and SCLK = 0 V or V L , V L = 3 V                   |
| SDI = 25 MHz                            |     230 |                  |                   | µA typ            | CS and SCLK = 0 V or V L , V L = 5 V                   |
|                                         |     120 |                  |                   | µA typ            | CS and SCLK = 0 V or V L , V L = 3 V                   |
| Active at 50 MHz                        |     1.8 |                  |                   | mAtyp             | Digital inputs togglebetween 0 V and V L , V L = 5.5 V |
|                                         |     0.7 |                  | 2.1               | mAmax mAtyp       | Digital inputs togglebetween 0 V and V L , V L = 2.7 V |
| V DD                                    |         |                  | 1.0 5/20          | mAmax V min/V max | GND=0V,V SS = 0 V                                      |

## CONTINUOUS CURRENT PER CHANNEL, Sx OR Dx

## Table 4. Eight Channels On

| Parameter                                    |   25°C |   85°C |   125°C | Unit      |
|----------------------------------------------|--------|--------|---------|-----------|
| CONTINUOUS CURRENT, Sx OR Dx 1               |        |        |         |           |
| V DD = +15 V, V SS = -15 V (θ JA = 65.5°C/W) |    273 |    156 |      80 | mAmaximum |
| V DD = +12 V, V SS = 0 V (θ JA = 65.5°C/W)   |    221 |    133 |      72 | mAmaximum |
| V DD = +5 V, V SS = -5 V (θ JA = 65.5°C/W)   |    206 |    126 |      70 | mAmaximum |

## Table 5. One Channel On

| Parameter                                    |   25°C |   85°C |   125°C | Unit      |
|----------------------------------------------|--------|--------|---------|-----------|
| CONTINUOUS CURRENT, Sx OR Dx 1               |        |        |         |           |
| V DD = +15 V, V SS = -15 V (θ JA = 65.5°C/W) |    490 |    225 |      87 | mAmaximum |
| V DD = +12 V, V SS = 0 V (θ JA = 65.5°C/W)   |    399 |    200 |      84 | mAmaximum |
| V DD = +5 V, V SS = -5 V (θ JA = 65.5°C/W)   |    373 |    192 |      83 | mAmaximum |

## TIMING CHARACTERISTICS

VL = 2.7 V to 5.5 V, GND = 0 V, and all specifications minimum temperature (TMIN) to maximum temperature (TMAX), unless otherwise noted. Guaranteed by design and characterization, not production tested. See Figure 2 to Figure 4 for the timing diagrams.

## Table 6.

| Parameter              |   Limit | Unit   | Test Conditions/Comments                |
|------------------------|---------|--------|-----------------------------------------|
| TIMING CHARACTERISTICS |         |        |                                         |
| t 1                    |      20 | ns min | SCLK period                             |
| t 2                    |       8 | ns min | SCLK high pulse width                   |
| t 3                    |       8 | ns min | SCLK low pulse width                    |
| t 4                    |      10 | ns min | CS falling edge to SCLK active edge     |
| t 5                    |       6 | ns min | Data setup time                         |
| t 6                    |       8 | ns min | Data hold time                          |
| t 7                    |      10 | ns min | SCLK active edge to CS rising edge      |
| t 8                    |      20 | ns max | CS falling edge to SDO data available   |
| t 9 1                  |      30 | ns max | SCLK falling edge to SDO data available |
| t 10                   |      30 | ns max | CS rising edge to SDO returns to high   |
| t 11                   |      20 | ns min | CS high time between SPI commands       |
| t 12                   |       8 | ns min | CS falling edge to SCLK becomes stable  |
| t 13                   |       8 | ns min | CS rising edge to SCLK becomes stable   |

<!-- image -->

## Timing Diagrams

<!-- image -->

Figure 2. Address Mode Timing Diagram

Figure 3. Daisy-Chain Timing Diagram

<!-- image -->

Figure 4. SCLK and CS Timing Relationship

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

## Table 7.

| Parameter                                  | Rating                                                       |
|--------------------------------------------|--------------------------------------------------------------|
| V DD to V SS                               | 35 V                                                         |
| V DD toGND                                 | -0.3 V to +25 V                                              |
| V SS toGND                                 | +0.3 V to -25 V                                              |
| V L toGND                                  |                                                              |
| For V DD ≤ 5.5 V                           | -0.3 V to V DD + 0.3 V                                       |
| For V DD > 5.5 V                           | -0.3 V to +6 V                                               |
| SDO                                        | -0.3 V to V L + 0.3 V or 6 mA, whichever occurs first        |
| Analog Inputs 1                            | V SS - 0.3 V to V DD + 0.3 V or 30 mA,whichever occurs first |
| Digital Inputs 1                           | -0.3 V to +6 V                                               |
| Peak Current, Sx or Dx 2                   | 550 mA(pulsed at 1 ms, 10% duty cycle maximum)               |
| Continuous Current, Sx or Dx 2, 3          | Data + 15%                                                   |
| Temperature                                |                                                              |
| Operating Range                            | -40°C to +125°C                                              |
| Storage Range                              | -65°C to +150°C                                              |
| Junction                                   | 150°C                                                        |
| Reflow Soldering Peak Temperature, Pb Free | 260(+0/-5)°C                                                 |

1 Overvoltages at the digital Sx and Dx pins are clamped by internal diodes. Limit current to the maximum ratings given.

2 Sx refers to the S1 to S8 pins, and Dx refers to the D1 to D8 pins.

3 See Table 4 and Table 5.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at any one time.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θJCB is the junction to the bottom of the case value.

## Table 8. Thermal Resistance

| Package Type   |   θ JA |   θ JCB | Unit   |
|----------------|--------|---------|--------|
| LGA 1          |   65.5 |   48.12 | °C/W   |

1  Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with four thermal vias. See JEDEC JESD-51.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADGS1414D

## Table 9. ADGS1414D, 30-Terminal LGA

| Package Type   | Withstand Threshold (V)   | Class   |
|----------------|---------------------------|---------|
| HBM            | ±2000                     | 2       |
| FICDM          | ±1250                     | C3      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## ADGS1414D

<!-- image -->

Table 10. Pin Function Descriptions

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                                                                                                                          |
|-----------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | D1         | Drain Terminal 1. The D1 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 2         | D2         | Drain Terminal 2. The D2 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 3         | S1         | Source Terminal 1. The S1 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 4         | S2         | Source Terminal 2. The S2 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 5         | V SS       | Most Negative Power Supply Potential. In single-supply applications, tie the V SS pin to ground.                                                                                                                                                                                                     |
| 6         | S3         | Source Terminal 3. The S3 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 7         | S4         | Source Terminal 4. The S4 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 8         | D3         | Drain Terminal 3. The D3 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 9         | D4         | Drain Terminal 4. The D4 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 10, 30    | V DD       | Most Positive Power Supply Potential. Both V DD pins are connected internally.                                                                                                                                                                                                                       |
| 11, 29    | GND        | Ground (0 V) Reference. Both GNDpins are connected internally.                                                                                                                                                                                                                                       |
| 12, 28    | RESET/V L  | RESET/Logic Power Supply Input (V L ). Under normal operation, drive RESET/V L with a 2.7 V to 5.5 V supply. Pull RESET/V L low to complete a hardware reset. After a reset, all switches open, and the appropriate registers are set to their default. Both RESET and V L are connected internally. |
| 13        | SDO        | Serial Data Output. Use the SDO pin for daisy-chaining a number of these devices together or for reading back the data stored in a register for diagnostic purposes. The serial data is propagated on the falling edge of SCLK.                                                                      |
| 14, 26    | SCLK       | Serial Clock Input. Data is captured on the positive edge of SCLK. Data can be transferred at rates up to 50 MHz. Both SCLK pins are connected internally.                                                                                                                                           |
| 15, 25    | CS         | Active Low Control Input. CS is the frame synchronization signal for the input data. Both CS pins are connected internally.                                                                                                                                                                          |
| 16        | D5         | Drain Terminal 5. The D5 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 17        | D6         | Drain Terminal 6. The D6 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 18        | S5         | Source Terminal 5. The S5 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 19        | S6         | Source Terminal 6. The S6 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 20        | NIC        | Not Internally Connected.                                                                                                                                                                                                                                                                            |
| 21        | S7         | Source Terminal 7. The S7 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 22        | S8         | Source Terminal 8. The S8 pin can be an input or an output.                                                                                                                                                                                                                                          |
| 23        | D7         | Drain Terminal 7. The D7 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 24        | D8         | Drain Terminal 8. The D8 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 27        | SDI        | Serial Data Input. Data is captured on the positive edge of SCLK.                                                                                                                                                                                                                                    |
|           | EPAD       | Exposed Pad. The exposed pad is connected internally. For increased reliability of the solder joints and maximum thermal capability, it is recommended that the exposed pad is connected to V SS .                                                                                                   |

## NOTES

1. NIC = NOT INTERNALLY CONNECTED. 2. EXPOSED PAD. THE EXPOSED PAD IS CONNECTED INTERNALLY. FOR INCREASED RELIABILITY OF THE SOLDER JOINTS AND MAXIMUM THERMAL CAPABILITY, IT IS RECOMMENDED THAT THE EXPOSED PAD IS CONNECTED TO VSS .

Figure 5. Pin Configuration

23895-005

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. On Resistance vs. VS or VD for Various Dual Supplies, ±10 V to ±16.5 V

<!-- image -->

Figure 7. On Resistance vs. VS or VD for Various Dual Supplies, ±4.5 V to ±7 V

<!-- image -->

Figure 8. On Resistance vs. VS or VD for Various Single Supplies

<!-- image -->

Figure 9. On Resistance vs. VS or VD for Various Temperatures, ±15 V Dual Supply

Figure 10. On Resistance vs. VS or VD for Various Temperatures, ±5 V Dual Supply

<!-- image -->

Figure 11. On Resistance vs. VS or VD for Various Temperatures, 12 V Single Supply

<!-- image -->

<!-- image -->

Figure 12. On Resistance vs. VS or VD for Various Current Levels and Temperatures, ±5 V Dual Supply

<!-- image -->

Figure 13. Leakage Current vs. Temperature, ±15 V Dual Supply (VBIAS = Bias Voltage)

Figure 14. Leakage Current vs. Temperature, ±5 V Dual Supply

<!-- image -->

Figure 15. Leakage Current vs. Temperature, 12 V Single Supply

<!-- image -->

23895-016

Figure 16. Charge Injection vs. VS

<!-- image -->

Figure 17. tON and tOFF vs. Temperature for Single Supply and Dual Supply

<!-- image -->

Figure 18. Off Isolation vs. Frequency, ±15 V Dual Supply

<!-- image -->

Figure 19. Crosstalk vs. Frequency, ±15 V Dual Supply

<!-- image -->

23895-020

<!-- image -->

Figure 20. Insertion Loss vs. Frequency, ±15 V Dual Supply

<!-- image -->

Figure 21. AC Power Supply Rejection Ratio (AC PSRR) vs. Frequency, ±15 V Dual Supply

Figure 22. THD + N vs. Frequency, ±15 V Dual Supply

<!-- image -->

Figure 23. THD + N vs. Frequency, ±5 V Dual Supply

<!-- image -->

<!-- image -->

Figure 24. THD + N vs. Frequency, 12 V Single Supply

<!-- image -->

Figure 25. Digital Feedthrough (VOUT = Output Voltage)

Figure 26. IDD vs. VL

<!-- image -->

Figure 27. IL vs. SCLK Frequency When CS Is High

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 28. On Leakage

<!-- image -->

Figure 29. On Resistance (IDS = Drain and Source Current)

<!-- image -->

23895-026

Figure 30. Channel to Channel Crosstalk

<!-- image -->

Figure 31. Off Isolation

<!-- image -->

<!-- image -->

Figure 33. THD + N

<!-- image -->

Figure 34. -3 dB Bandwidth

<!-- image -->

NOTES

1. BOARD AND COMPONENT EFFECTS ARE NOT DE-EMBEDDED FROM THE AC PSRR MEASUREMENT.

Figure 35. AC PSRR

23895-235

<!-- image -->

Figure 36. Break-Before-Make Time Delay, tD

Figure 37. Switching Times, tON and tOFF

<!-- image -->

Figure 38. Charge Injection, QINJ (∆VOUT = Change in Output Voltage)

<!-- image -->

23895-031

## TERMINOLOGY

## IDD

IDD represents the positive supply current.

## ISS

ISS represents the negative supply current.

## VD, VS

VD and VS represent the analog voltage on Terminal Dx and Terminal Sx, respectively.

## RON

RON represents the ohmic resistance between Terminal Dx and Terminal Sx.

## ∆RON

∆RON represents the difference between the RON of any two channels.

## RFLAT (ON)

RFLAT (ON) is flatness that is defined as the difference between the maximum and minimum value of on resistance measured over the specified analog signal range.

## IS (Off)

IS (Off) is the source leakage current with the switch off.

## ID (Off)

ID (Off) is the drain leakage current with the switch off.

## ID (On), IS (On)

ID (On) and IS (On) represent the channel leakage currents with the switch on.

## VINL

VINL is the maximum input voltage for Logic 0.

## VINH

VINH is the minimum input voltage for Logic 1.

## IINL, IINH

IINL and IINH represent the low and high input currents of the digital inputs.

## CD (Off)

CD (Off) represents the off switch drain capacitance, which is measured with reference to ground.

## CS (Off)

CS (Off) represents the off switch source capacitance, which is measured with reference to ground.

## CD (On), CS (On)

CD (On) and CS (On) represent on switch capacitances, which are measured with reference to ground.

## CIN

CIN is the digital input capacitance.

## COUT

COUT is the digital output capacitance.

## tON

tON represents the delay between applying the digital control input and the output switching on.

## tOFF

tOFF represents the delay between applying the digital control input and the output switching off.

## Off Isolation

Off isolation is a measure of unwanted signal coupling through an off switch.

## Charge Injection

Charge injection is a measure of the glitch impulse transferred from the digital input to the analog output during switching.

## Crosstalk

Crosstalk is a measure of unwanted signal that is coupled through from one channel to another as a result of parasitic capacitance.

## -3 dB Bandwidth

Bandwidth is the frequency at which the output is attenuated by 3 dB.

## On Response

On response is the frequency response of the on switch.

## Insertion Loss

Insertion loss is the loss due to the on resistance of the switch.

## Total Harmonic Distortion + Noise (THD + N)

THD + N is the ratio of the harmonic amplitude plus noise of the signal to the fundamental.

## AC Power Supply Rejection Ratio (AC PSRR)

AC PSRR is the ratio of the amplitude of the signal on the output to the amplitude of the modulation. AC PSRR is a measure of the ability of the device to avoid coupling noise and spurious signals that appear on the supply voltage pin to the output of the switch. The dc voltage on the device is modulated by a sine wave of 0.62 V p-p.

## THEORY OF OPERATION

The ADGS1414D is a set of serially controlled, octal SPST switches with error detection features. SPI Mode 0 and Mode 3 can be used with the ADGS1414D, and the device operates with SCLK frequencies up to 50 MHz. The default mode for the ADGS1414D is address mode in which the registers of the device are accessed by a 16-bit SPI command that is bounded by CS. The SPI command is a 24-bit command if the user enables CRC error detection. Other error detection features include SCLK count error and invalid read and write error. Read the error flags register to detect if any of these SPI errors occur. The ADGS1414D can also operate in two other modes: burst mode and daisy-chain mode.

The interface pins of the ADGS1414D are CS, SCLK, SDI, and SDO. Hold CS low when using the SPI. Data is captured on the SDI on the rising edge of SCLK, and data is propagated out on the SDO on the falling edge of SCLK.

## ADDRESS MODE

Address mode is the default mode for the ADGS1414D upon power up. A single SPI frame in address mode is bounded by a CS falling edge and the succeeding CS rising edge. The SPI frame is comprised of 16 SCLK cycles. The timing diagram for address mode is shown in Figure 39. The first SDI bit indicates if the SPI command is a read or write command. When the first bit is set to 0, a write command is issued, and if the first bit is set to 1, a read command is issued. The next seven bits determine the target register address. The remaining eight bits provide the data to the addressed register. The last eight bits are ignored during a read command, because during these clock cycles, SDO propagates out the data contained in the addressed register.

The target register address of an SPI command is determined on the eighth SCLK rising edge. Data from this register propagates out on SDO from the 8 th to the 15 th SCLK falling edge during SPI reads. A register write occurs on the 16 th SCLK rising edge during SPI writes.

During any SPI command, SDO sends out eight alignment bits as the first eight bits. The alignment bits observed at SDO are 0x25.

## ERROR DETECTION FEATURES

Protocol and communication errors on the SPI are detectable. There are three error detection features: incorrect SCLK count error detection, invalid read and write address error detection, and CRC error detection. Each of these error detection features has a corresponding enable bit in the error configuration register. In addition, there is an error flag bit for each of these error detection features in the error flags register.

## Cyclic Redundancy Check (CRC) Error Detection

The CRC error detection feature extends a valid SPI frame by 8 SCLK cycles. These eight extra cycles are needed to send the CRC byte for that SPI frame. The CRC byte is calculated by the SPI block using the 16-bit payload: the R/W bit, the register address, Bits[6:0], and the register data, Bits[7:0]. The CRC polynomial used in the SPI block is x 8 + x 2 + x 1 + 1 with a seed value of 0. For a timing diagram with CRC enabled, see Figure 40. Register writes occur at the 24 th SCLK rising edge with CRC error checking enabled.

During an SPI write, the microcontroller or central processing unit (CPU) provides the CRC byte through SDI. The SPI block checks the CRC byte just before the 24th SCLK rising edge. On this same edge, the register write is prevented if an incorrect CRC byte is received by the SPI. The CRC error flag asserts in the error flags register in the case of the incorrect CRC byte being detected.

During an SPI read, the CRC byte is provided to the microcontroller through SDO.

The CRC error detection feature is disabled by default and can be configured by the user through the error configuration register.

Figure 40. Timing Diagram with CRC Enabled

<!-- image -->

## SCLK Count Error Detection

SCLK count error detection allows the user to detect if an incorrect number of SCLK cycles are sent by the microcontroller or CPU. When in address mode, with CRC disabled, 16 SCLK cycles are expected. If 16 SCLK cycles are not detected, the SCLK count error flag asserts in the error flags register. When less than 16 SCLK cycles are received by the device, a write to the register map does not occur. When the ADGS1414D receives more than 16 SCLK cycles, a write to the memory map still occurs at the 16 th SCLK rising edge, and the flag asserts in the error flags register. With CRC enabled, the expected number of SCLK cycles is 24. SCLK count error detection is enabled by default and can be configured by the user through the error configuration register.

## Invalid Read and Write Address Error

An invalid read and write address error detects when a nonexistent register address is a target for a read or write. In addition, this error asserts when a write to a read only register is attempted. The invalid read and write address error flag asserts in the error flags register when an invalid read and write address error occurs. The invalid read and write address error is detected on the ninth SCLK rising edge, which means a write to the register does not occur when an invalid address is targeted. Invalid read and write address error detection is enabled by default and can be disabled by the user through the error configuration register.

## CLEARING THE ERROR FLAGS REGISTER

To clear the error flags register, write the special 16-bit SPI frame, 0x6CA9, to the device. This SPI command does not trigger the invalid R/W address error. When CRC is enabled, the user must also send the correct CRC byte for a successful error clear command. At the 16 th or 24 th SCLK rising edge, the error flags register resets to zero.

## BURST MODE

The SPI can accept consecutive SPI commands without the need to deassert the CS line, which is called burst mode. Burst mode is enabled through the burst enable register. This mode uses the same 16-bit command to communicate with the device. In addition, the response of the device at SDO is still aligned with the corresponding SPI command. Figure 41 shows an example of SDI and SDO during burst mode.

The invalid read and write address and CRC error checking functions operate similarly during burst mode as these error checking functions do during address mode. However, SCLK count error detection operates in a slightly different manner. The total number of SCLK cycles within a given CS frame are counted, and if the total is not a multiple of 16, or a multiple of 24 when CRC is enabled, the SCLK count error flag asserts.

Figure 41. Burst Mode Frame

<!-- image -->

## SOFTWARE RESET

When in address mode, the user can initiate a software reset by writing two consecutive SPI commands, 0xA3 followed by 0x05, targeting Register 0x0B. After a software reset, all register values are set to default.

## DAISY-CHAIN MODE

The connection of several ADGS1414D devices in a daisy-chain configuration is possible, and Figure 42 illustrates this setup. All devices share the same CS, SCLK, and VL line, whereas the SDO of a device forms a connection to the SDI of the next device, creating a shift register. In daisy-chain mode, SDO is an eight cycle delayed version of SDI. When in daisy-chain mode, all commands target the switch data register. Therefore, it is not possible to make configuration changes while in daisy-chain mode.

Figure 42. Two ADGS1414D Devices Connected in a Daisy-Chain Configuration

<!-- image -->

## [ADGS1414D](https://www.analog.com/ADGS1414D?doc=ADGS1414D.pdf)

When in address mode, the ADGS1414D can only enter daisychain mode by sending the 16-bit SPI command, 0x2500 (see Figure 43). When the ADGS1414D receives this command, the SDO of the device sends out the same command because the alignment bits at SDO are 0x25, which allows multiple daisy connected devices to enter daisy-chain mode in a single SPI frame. A hardware reset is required to exit daisy-chain mode.

For the timing diagram of a typical daisy-chain SPI frame, see Figure 44. When CS goes high, Device 1 writes Command 0, Bits[7:0] to its switch data register, Device 2 writes Command 1, Bits[7:0] to its switches, and so on. The SPI block uses the last eight bits it received through SDI to update the switches. After entering daisy-chain mode, the first eight bits sent out by SDO

on each device in the chain are 0x00. When CS goes high, the internal shift register value does not reset back to zero.

An SCLK rising edge reads data on SDI while data is propagated out SDO on an SCLK falling edge.

## POWER-ON RESET

The digital section of the ADGS1414D goes through an initialization phase during VL power up. This initialization also occurs after a hardware or software reset. After VL power-up or a reset, ensure that a minimum of 120 µs passes from the time of power-up or reset before any SPI command is issued. Ensure that VL does not drop out during the 120 µs initialization phase because it may result in the incorrect operation of the ADGS1414D.

Figure 43. SPI Command to Enter Daisy-Chain Mode

<!-- image -->

Figure 44. Example of an SPI Frame Where Four ADGS1414D Devices Connect in Daisy-Chain Mode

<!-- image -->

## APPLICATIONS INFORMATION

## SYSTEM CHANNEL DENSITY

The ADGS1414D feature set allows for large system channel density. These features include route through pins for the digital signals and power supplies, as well as integrated passive components.

## Route Through Pins

When multiple ADGS1414D devices are used in a system, the route through pins allow for a greater channel density layout. The route through pins enable the passing of power supplies and digital lines between devices with ease. The VDD, RESET/VL, and GND power lines, as well as the SCLK, CS, SDI, and SDO digital lines, are available on both the top and bottom pins of the package. These route through pins simplify PCB routing and reduce the need for vias when connecting many ADGS1414D devices together. Figure 45 shows an example layout where the route through pins on four ADGS1414D devices configured in daisy-chain mode are used to reduce the overall size of the layout.

## Integrated Passive Components

Note the lack of external passive components in the layout in Figure 45. The ADGS1414D has integrated decoupling capacitors for the VDD, VSS, and RESET/VL power supplies. Therefore, the need for external decoupling capacitors is eliminated, reducing the total system footprint of the ADGS1414D. If additional decoupling is required for extremely noise sensitive applications, add an external decoupling capacitor. Figure 21 shows the AC PSRR performance with and without external decoupling capacitors.

Figure 45. Layout Example Showing the Use of the Route Pins and the Elimination of External Passive Components

<!-- image -->

## BREAK-BEFORE-MAKE SWITCHING

The ADGS1414D exhibits break-before-make switching action. This feature allows for the use of the device in multiplexer applications. To use the device as a multiplexer, externally hardwire a device into the desired mux configuration, as shown in Figure 46.

Figure 46. An SPI Controlled Switch Configured into a 4:1 Mux

<!-- image -->

## DIGITAL INPUT BUFFERS

There are input buffers present on the digital input pins (CS, SCLK, and SDI). These buffers are active at all times. Therefore, there is current draw from the VL supply if SCLK or SDI is toggled, regardless of whether CS is active. For typical values of this current draw, refer to the Specifications section and Figure 27.

## POWER SUPPLY RAILS

The ADGS1414D can operate with bipolar supplies between ±4.5 V and ±16.5 V. The supplies on VDD and VSS do not have to be symmetrical. However, the VDD to VSS range must not exceed 33 V. The ADGS1414D can also operate with single supplies between 5 V and 20 V with VSS connected to GND. The voltage range that can be supplied to VL is from 2.7 V to 5.5 V. The device is fully specified at ±15 V, ±5 V, and +12 V analog supply voltage ranges.

## POWER SUPPLY RECOMMENDATIONS

Analog Devices, Inc., has a wide range of power management products to meet the requirements of high performance signal chains.

An example of a bipolar power solution is shown in Figure 47. The LT3463 (a dual switching regulator) generates a positive and negative supply rail for the ADGS1414D, an amplifier, and/or a precision converter in a typical signal chain. Also shown in Figure 47 are two optional low dropout regulators (LDOs), the ADP7142 and ADP7182 (positive and negative LDOs, respectively), which can reduce the output ripple of the LT3463 in ultralow noise sensitive applications.

The ADP7142 can generate the VL voltage that is required to power digital circuitry within the ADGS1414D.

<!-- image -->

Table 11. Recommended Power Management Devices

| Product   | Description                                              |
|-----------|----------------------------------------------------------|
| LT3463    | Dual micropower, dc to dc converter with Schottky diodes |
| ADP7142   | 40 V, 200 mA, low noise, CMOS, LDO linear regulator      |
| ADP7182   | -28 V, -200 mA, low noise, LDO linear regulator          |

## 1.8 V LOGIC COMPATIBILITY

The SDI, CS, and SCLK digital inputs of the ADGS1414D are compatible with 1.8 V logic when VL is between or equal to 2.7 V and 3.3 V.

The SDO digital output levels are proportional to the VL voltage. For example, if VL = 3 V, a logic high on the SDO is approximately 3 V. When performing an SPI readback from the ADGS1414D with a controller device using 1.8 V logic, there may be an issue if the digital pins on the controller cannot tolerate digital input signals that exceed 1.8 V.

Figure 48 describes how to use the ADG3231 level translator to perform a 1.8 V SPI readback with a device that has 1.8 V logic ports, such as a microcontroller or field programmable gate array (FPGA). Place the ADG3231 between the SDO of the ADGS1414D and the microcontroller or FPGA. Supply VCC1 of the ADG3231 with the VL voltage of the ADGS1414D and connect VCC2 to the 1.8 V supply from the microcontroller or FPGA. The ADG3231 then translates the logic level of the SDO from VL to 1.8 V.

This solution is only required if the 1.8 V microcontroller or FPGA cannot tolerate digital input signals that exceed 1.8 V.

Figure 48. Using the ADG3231 to Perform a 1.8 V SPI Readback

<!-- image -->

## REGISTER SUMMARY

## Table 12. Register Summary

| Reg. Name        | Bit 7       | Bit 6       | Bit 5       | Bit 4       | Bit 3       | Bit 2       | Bit 1         | Bit 0         | Default   | R/W   |
|------------------|-------------|-------------|-------------|-------------|-------------|-------------|---------------|---------------|-----------|-------|
| 0x01 SW_DATA     | SW8_EN      | SW7_EN      | SW6_EN      | SW5_EN      | SW4_EN      | SW3_EN      | SW2_EN        | SW1_EN        | 0x00      | R/W   |
| 0x02 ERR_CONFIG  | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | RW_ERR_EN   | SCLK_ERR_EN   | CRC_ERR_EN    | 0x06      | R/W   |
| 0x03 ERR_FLAGS   | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | RW_ERR_FLAG | SCLK_ERR_FLAG | CRC_ERR_FLAG  | 0x00      | R     |
| 0x05 BURST_EN    | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | Reserved      | BURST_MODE_EN | 0x00      | R/W   |
| 0x0B SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB   | SOFT_RESETB   | 0x00      | W     |

<!-- image -->

<!-- image -->

## REGISTER DETAILS SWITCH DATA REGISTER

Address: 0x01, Reset: 0x00, Name: SW\_DATA

Use the switch data register to control the status of the eight switches of the ADGS1414D.

## Table 13. Bit Descriptions for SW\_DATA

|   Bit | BitName   | Setting   | Description                                                         | Default   | Access   |
|-------|-----------|-----------|---------------------------------------------------------------------|-----------|----------|
|     7 | SW8_EN    | 0 1       | Enable the SW8_EN bit for Switch 8. Switch 8 open. Switch 8 closed. | 0x0       | R/W      |
|     6 | SW7_EN    | 0         | Enable the SW7_EN bit for Switch 7.                                 | 0x0       | R/W      |
|     5 | SW6_EN    | 0         | Enable the SW6_EN bit for Switch 6. Switch 6 open.                  | 0x0       | R/W      |
|     4 | SW5_EN    | 0 1       | Enable the SW5_EN bit for Switch 5. Switch 5 open. Switch 5 closed. | 0x0       | R/W      |
|     3 | SW4_EN    | 0         | Enable the SW4_EN bit for Switch 4. Switch 4 open.                  | 0x0       | R/W      |
|     2 | SW3_EN    | 0         | Enable the SW3_EN bit for Switch 3. Switch 3 open.                  | 0x0       | R/W      |
|     1 | SW2_EN    | 0 1       | Enable the SW2_EN bit for Switch 2. Switch 2 open. Switch 2 closed. | 0x0       | R/W      |
|     0 | SW1_EN    | 0         | Enable the SW1_EN bit for Switch 1. Switch 1 open.                  | 0x0       | R/W      |

## ERROR CONFIGURATION REGISTER

Address: 0x02, Reset: 0x06, Name: ERR\_CONFIG

Use the error configuration register to enable and disable the relevant error features as required.

## Table 14. Bit Descriptions for ERR\_CONFIG

| Bits   | BitName     |   Settings | Description                                                                                                                                                                                                                                                                                                                                                                                                                         | Default   | Access   |
|--------|-------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| [7:3]  | Reserved    |            | Bits[7:3] are reserved. Set Bits[7:3] to 0.                                                                                                                                                                                                                                                                                                                                                                                         | 0x0       | R        |
| 2      | RW_ERR_EN   |            | Enable the RW_ERR_EN bit to detect an invalid read and write address.                                                                                                                                                                                                                                                                                                                                                               | 0x1       | R/W      |
|        |             |          0 | Disabled.                                                                                                                                                                                                                                                                                                                                                                                                                           |           |          |
|        |             |          1 | Enabled.                                                                                                                                                                                                                                                                                                                                                                                                                            |           |          |
| 1      | SCLK_ERR_EN |            | Enable the SCLK_ERR_EN bit to detect the correct number of SCLK cycles in an SPI frame. 16 SCLK cycles are expected when CRC is disabled and burst mode is disabled. 24 SCLK cycles are expected when CRC is enabled and burst mode is disabled. A multiple of 16 SCLK cycles are expected when CRC is disabled and burst mode is enabled. A multiple of 24 SCLK cycles are expected when CRC is enabled and burst mode is enabled. | 0x1       | R/W      |
|        |             |          0 | Disabled.                                                                                                                                                                                                                                                                                                                                                                                                                           |           |          |
|        |             |          1 | Enabled.                                                                                                                                                                                                                                                                                                                                                                                                                            |           |          |

<!-- image -->

|   Bits | BitName    |   Settings | Description                                                                                  | Default   | Access   |
|--------|------------|------------|----------------------------------------------------------------------------------------------|-----------|----------|
|      0 | CRC_ERR_EN |            | Enable the CRC_ERR_EN bit for CRC error detection. SPI frames are 24 bits wide when enabled. | 0x0       | R/W      |
|        |            |          0 | Disabled.                                                                                    |           |          |
|        |            |          1 | Enabled.                                                                                     |           |          |

## ERROR FLAGS REGISTER

## Address: 0x03, Reset: 0x00, Name: ERR\_FLAGS

Use the error flags register to determine if an error has occurred. To clear the error flags register, write the special 16-bit SPI command, 0x6CA9, to the device. This SPI command does not trigger the invalid R/W address error. When CRC is enabled, include the correct CRC byte during the SPI write for the clear error flags register command to succeed.

## Table 15. Bit Descriptions for ERR\_FLAGS

| Bits   | BitName       |   Settings | Description                                                                                                                                                                                                                                  | Default   | Access   |
|--------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| [7:3]  | Reserved      |            | Bits[7:3] are reserved and are set to 0.                                                                                                                                                                                                     | 0x0       | R        |
| 2      | RW_ERR_FLAG   |          0 | Error flag for invalid read and write address. The error flag asserts during an SPI read if the target address does not exist. The error flag also asserts when the target address of an SPI write does not exist or is read only. No error. | 0x0       | R        |
| 1      | SCLK_ERR_FLAG |            | Error flag for the detection of the correct number of SCLK cycles in an SPI frame.                                                                                                                                                           | 0x0       | R        |
|        |               |          0 | No error.                                                                                                                                                                                                                                    |           |          |
|        |               |          1 | Error.                                                                                                                                                                                                                                       |           |          |
| 0      | CRC_ERR_FLAG  |            | Error flag that determines if a CRC error has occurred during a register write.                                                                                                                                                              | 0x0       | R        |
|        |               |          0 | No error.                                                                                                                                                                                                                                    |           |          |
|        |               |          1 | Error.                                                                                                                                                                                                                                       |           |          |

## BURST ENABLE REGISTER

## Address: 0x05, Reset: 0x00, Name: BURST\_EN

Use the burst enable register to enable or disable burst mode. When burst mode is enabled, the user can send multiple consecutive SPI commands without deasserting CS.

## Table 16. Bit Descriptions for BURST\_EN

| Bits   | BitName       |   Settings | Description                                 | Default   | Access   |
|--------|---------------|------------|---------------------------------------------|-----------|----------|
| [7:1]  | Reserved      |            | Bits[7:1] are reserved. Set Bits[7:1] to 0. | 0x0       | R        |
| 0      | BURST_MODE_EN |            | Burst mode enable bit.                      | 0x0       | R/W      |
|        |               |          0 | Disabled.                                   |           |          |
|        |               |          1 | Enabled.                                    |           |          |

## SOFTWARE RESET REGISTER

Address: 0x0B, Reset: 0x00, Name: SOFT\_RESETB

Use the software reset register to perform a software reset. Consecutively write 0xA3 followed by 0x05 to this register, and the registers of the device reset to their default state.

## Table 17. Bit Descriptions for SOFT\_RESETB

| Bits   | BitName     | Settings   | Description                                                                                         | Default   | Access   |
|--------|-------------|------------|-----------------------------------------------------------------------------------------------------|-----------|----------|
| [7:0]  | SOFT_RESETB |            | To perform a software reset, consecutively write 0xA3 followed by 0x05 to the SOFT_RESETB register. | 0x0       | W        |

## OUTLINE DIMENSIONS

<!-- image -->

Figure 49. 30-Terminal Land Grid Array [LGA] (CC-30-3) 4 mm × 5 mm Body and 1.63 mm Package Height Dimensions shown in millimeters

| Model 1                                         | Temperature Range   | Package Description                                                 | Package Option   |
|-------------------------------------------------|---------------------|---------------------------------------------------------------------|------------------|
| ADGS1414DBCCZ ADGS1414DBCCZ-RL7 EV-ADGS1414DSDZ | -40°C to +125°C     | 30-Terminal Land Grid Array [LGA] 30-Terminal Land Grid Array [LGA] | CC-30-3          |
|                                                 | -40°C to +125°C     |                                                                     | CC-30-3          |
|                                                 |                     | Evaluation Board                                                    |                  |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->

04-27-2020-A