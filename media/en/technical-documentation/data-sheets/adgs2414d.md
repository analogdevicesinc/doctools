<!-- lastmod 2023-12-18 -->
<!-- image -->

## FEATURES

- 0.56 Ω typical on resistance
- High continuous current of up to 768 mA
- Flat R ON across signal range, 0.004 Ω
- THD of -122 dB at 1 kHz
- Route through pins for digital signals and supplies
- Integrated passive components
- SPI interface with error detection
- Guaranteed break-before-make switching, allowing external wiring of switches to deliver multiplexer configurations
- Fully specified at ±15 V and +12 V
- 1.8 V logic compatibility with 2.7 V ≤ V L ≤ 3.3 V (excludes SPI read-back to a 1.8 V device)
- 4 mm × 5 mm, 30-terminal LGA

## APPLICATIONS

- Automatic test equipment
- Instrumentation
- Data acquisition
- Relay replacement
- Avionics
- Audio and video switching
- Communication systems

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## 0.56 Ω On Resistance High Density Octal SPST Switch

## GENERAL DESCRIPTION

The ADGS2414D contains eight independent, low on-resistance, single-pole/single-throw (SPST) switches in a 4 mm x 5 mm, 30 pin LGA package.

The ADGS2414D enables higher channel density in systems where printed circuit board space is constrained or existing system form factors restrict expansion.

When using SPI daisy-chain mode, the unique route through pins, provide considerable space savings when multiple ADGS2414D instances are combined to design very high channel count systems, such as large switching matrices and fanout applications. The integrated supply decoupling capacitors and SDO pullup resistor further increase the space savings and reduce printed circuit board complexity.

The low on-resistance (0.56 Ω typical) of each switch channel allows for higher current density in systems where heat dissipation is an issue, and the on-resistance profile of the switch channels is exceptionally flat over the full-analog input range, which ensures good linearity and low distortion when switching precision analog signals.

Each switch has an input signal range from V SS to V DD - 2 V. When on, each switch conducts equally well in both directions, and in the off condition, signal levels up to the supplies are blocked.

The SPI has robust error detection features, such as cyclic redundancy check (CRC) error detection, invalid read and write address detection, and SCLK count error detection.

## PRODUCT HIGHLIGHTS

1. The SPI removes the need for parallel conversion, logic traces, and reduces the general-purpose input/output (GPIO) channel count.
2. Daisy-chain mode removes additional logic traces when multiple devices are used.
3. Route through of digital signals and supplies eases routing and allows for an increase in channel density.
4. Integrated passive components eliminate the need for external passive components.
5. CRC error detection, invalid read and write address detection, and SCLK count error detection ensure a robust digital interface.
6. CRC, invalid read and write address, and SCLK error detection capabilities allow for the use of the ADGS2414D in safety-critical systems.
7. Pin for pin replacement for the ADGS1414D.

## TABLE OF CONTENTS

| Features................................................................                                | 1   |
|---------------------------------------------------------------------------------------------------------|-----|
| Applications...........................................................                                 | 1   |
| Functional Block Diagram......................................1                                         |     |
| General Description...............................................1                                     |     |
| Product Highlights.................................................                                     | 1   |
| Specifications........................................................                                  | 3   |
| Operating Supply Voltages.................................3                                             |     |
| ±15 V Dual Supply..............................................3                                        |     |
| 12 V Single Supply.............................................5                                        |     |
| Continuous Current Per Channel, Sx or Dx.......                                                         | 7   |
| Timing Characteristics........................................8                                         |     |
| Timing Diagrams................................................                                         | 9   |
| Absolute Maximum Ratings.................................10                                             |     |
| Thermal Resistance.........................................                                             | 10  |
| Electrostatic Discharge (ESD) Ratings.............10                                                    |     |
| ESD Caution.....................................................10                                      |     |
| Pin Configuration and Function Descriptions.......11                                                    |     |
| Typical Performance Characteristics...................12                                                |     |
| Test Circuits.........................................................16                                |     |
| Terminology.........................................................                                    | 20  |
| Theory of Operation.............................................21                                      |     |
| Address Mode..................................................21                                        |     |
| Error Detection Features..................................21                                            |     |
| Cyclic Redundancy Check (CRC) Error Detection........................................................21 |     |
| SCLK Count Error Detection............................22                                                |     |
| Invalid Read and Write Address Error..............22                                                    |     |

## REVISION HISTORY

12/2023-Revision 0: Initial Version

| Clearing the Error Flags Register.....................22                                                  |    |
|-----------------------------------------------------------------------------------------------------------|----|
| Burst Mode.......................................................22                                       |    |
| Software Reset.................................................22                                         |    |
| Daisy-Chain Mode............................................22                                            |    |
| Power-On Reset...............................................24                                           |    |
| Applications Information......................................                                            | 25 |
| Large Voltage, High Frequency Signal Tracking..........................................................25 |    |
| System Channel Density..................................25                                                |    |
| Route Through Pins.........................................                                               | 25 |
| Integrated Passive Components......................25                                                     |    |
| Break-Before-Make Switching..........................26                                                   |    |
| Digital Input Buffers..........................................26                                         |    |
| Power Supply Rails..........................................26                                            |    |
| Power Supply Recommendations....................26                                                        |    |
| 1.8 V Logic Compatibility..................................26                                             |    |
| Register Summary...............................................27                                         |    |
| Register Details...................................................                                       | 28 |
| Switch Data Register........................................28                                            |    |
| Error Configuration Register.............................28                                               |    |
| Error Flags Register.........................................29                                           |    |
| Burst Enable Register......................................                                               | 29 |
| Software Reset Register..................................                                                 | 30 |
| Outline Dimensions.............................................                                           | 31 |
| Ordering Guide.................................................31                                         |    |
| Evaluation Boards............................................31                                           |    |

## SPECIFICATIONS

## OPERATING SUPPLY VOLTAGES

## Table 1. Operating Supply Voltages

| Supply Voltage   | Min   | Max   | Unit   |
|------------------|-------|-------|--------|
| Dual Supply      | ±4.5  | ±16.5 | V      |
| Single Supply    | +5    | +20   | V      |

## ±15 V DUAL SUPPLY

VDD  = +15 V ± 10%, V SS = -15 V ± 10%, V L = 2.7 V to 5.5 V, and GND = 0 V, unless otherwise noted.

## Table 2. ±15 V Dual Supply

| Parameter                                              | +25°C                 | -40°C to +85°C   | -40°C to +125°C                           | Unit                        | Test Conditions/Comments                                                                                                              |
|--------------------------------------------------------|-----------------------|------------------|-------------------------------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| ANALOG SWITCH                                          |                       |                  |                                           |                             | V DD = +13.5 V, V SS = -13.5 V                                                                                                        |
| Analog Signal Range On Resistance, R ON                | 0.56                  |                  | V DD - 2 V to V SS                        | V Ω typ                     | Source voltage, (V S ) = -13.5 V to +10 V, source current, (I S ) = -100 mA, see Figure 29                                            |
|                                                        | 0.7 0.6               | 0.85             | 1.0                                       | Ω max Ω typ                 | V S = -13.5 V to +11 V, I S = -100 mA                                                                                                 |
| On-Resistance Match Between Channels, ∆R ON            | 0.75 0.045 0.12       | 0.9 0.14         | 1.05 0.16                                 | Ω max Ω typ Ω max           | V S = -13.5 V to +11 V, I S = -100 mA                                                                                                 |
| On Resistance Flatness, R FLAT(ON)                     | 0.004 0.035 0.04 0.08 | 0.035 0.1        | 0.035 0.1                                 | Ω typ Ω max Ω typ Ω max     | V S = -13.5 V to +10 V, I S = -100 mA V S = -13.5 V to +11 V, I S = -100 mA                                                           |
| CURRENTS Off Leakage, I S (Off)                        | ±4.0                  |                  |                                           | nA typ                      |                                                                                                                                       |
| Source Drain Off Leakage, I D (Off)                    | ±1.7 ±4.0             | +40/-5.5         | +120/-5.5                                 | nA max nA typ nA max nA typ | ∓                                                                                                                                     |
| LEAKAGE                                                |                       |                  |                                           |                             | V DD = +16.5 V, V SS = -16.5 V                                                                                                        |
|                                                        | ±1.7                  |                  |                                           |                             | VS = ±10 V, drain voltage, V D = ∓ 10 V, see Figure 30                                                                                |
|                                                        |                       | +40/-5.5         | +120/-5.5                                 |                             | V S = ±10 V, V D = 10 V, see Figure 30                                                                                                |
| Channel On Leakage, I D (On), I S (On)                 | ±0.1                  |                  |                                           |                             | V S = V D = ±10 V, see Figure 31                                                                                                      |
| OUTPUT Output Voltage                                  | ±1.3                  | ±3.0             | +12.5/-3.0                                | nA max                      |                                                                                                                                       |
| DIGITAL                                                |                       |                  |                                           |                             |                                                                                                                                       |
| Low, V OL High, V OH Digital Output Capacitance, C OUT | 4                     |                  | 0.4 0.3 V L - 1.25 V V L - 0.125 V 2 1.35 | V max V max V min V min min | Sink current, I SINK = 1 mA I SINK = 100 µA Source current, I SOURCE = 1 mA I SOURCE = 100 µA 3.3 V < V L ≤ 5.5 V 2.7 V ≤ V L ≤ 3.3 V |
| DIGITAL INPUTS Input Voltage High, V INH Low, V INL    |                       |                  |                                           | pF typ V V min              | 3.3 V < V L ≤ 5.5 V                                                                                                                   |
|                                                        |                       |                  | 0.8                                       | V max V max                 |                                                                                                                                       |
|                                                        |                       |                  | 0.8                                       |                             | 2.7 V ≤ V L ≤ 3.3 V                                                                                                                   |
| Input Current                                          |                       |                  | ±0.1                                      | µA typ                      | Input voltage, V IN = ground voltage, V GND or V                                                                                      |
| Low, I INL or High, I INH                              | 0.001                 |                  |                                           | µA max                      | L                                                                                                                                     |

## SPECIFICATIONS

## Table 2. ±15 V Dual Supply (Continued)

| Parameter                                  | +25°C   | -40°C to +85°C   | -40°C to +125°C   | Unit          | Test Conditions/Comments                                                                        |
|--------------------------------------------|---------|------------------|-------------------|---------------|-------------------------------------------------------------------------------------------------|
| Digital Input Capacitance, C               | 4       |                  |                   | pF typ        |                                                                                                 |
| IN DYNAMIC CHARACTERISTICS                 |         |                  |                   |               |                                                                                                 |
| On Time, t ON                              | 600     |                  |                   | ns typ        | Load resistance, R L = 300 Ω, load capacitance, C L = 35 pF, V S = 10 V, see Figure 38          |
|                                            | 701     | 723              | 749               | ns max        |                                                                                                 |
| Off Time, t OFF                            | 196     |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF, V S = 10 V, see Figure 38                                             |
|                                            | 250     | 252              | 254               | ns max        |                                                                                                 |
| Break-Before-Make Time Delay, t D          | 429     |                  |                   | ns typ        | R L = 300 Ω, C L = 35 pF, Source 1 voltage, V S1 = Source 2 voltage, V S2 = 10 V, see Figure 37 |
|                                            | 349     | 358              | 385               | ns min        |                                                                                                 |
| Charge Injection, Q INJ                    | -1.8    |                  |                   | nC typ        | V S = 0 V, source resistance R S = 0 Ω, C L = 1 nF, see Figure 39                               |
| Off Isolation                              | -76     |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF, frequency, f = 100 kHz, see Figure 33                                   |
| Channel to Channel Crosstalk               | -85     |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF, f = 100 kHz, see Figure 32                                              |
| Total Harmonic Distortion + Noise, THD + N | 0.002   |                  |                   | %typ          | R L = 1 kΩ, 20 V p-p, f = 20 Hz to 20 kHz, see Figure 34                                        |
| Total Harmonic Distortion, THD             | -122    |                  |                   | dB typ        | R L = 1 kΩ, 20 V p-p, f = 1 kHz                                                                 |
|                                            | -96     |                  |                   | dB typ        | R L = 1 kΩ, 20 V p-p, f = 20 kHz                                                                |
|                                            | -80     |                  |                   | dB typ        | R L = 1 kΩ, 20 V p-p, f = 100 kHz                                                               |
| -3 dB Bandwidth                            | 171     |                  |                   | MHz typ       | R L = 50 Ω, C L = 5 pF, see Figure 35                                                           |
| Insertion Loss                             | -0.06   |                  |                   | dB typ        | R L = 50 Ω, C L = 5 pF, f = 1 MHz, see Figure 35                                                |
| Source Capacitance, C S (Off)              | 76      |                  |                   | pF typ        | V S = 0 V, f = 1 MHz                                                                            |
| Drain Capacitance, C D (Off)               | 76      |                  |                   | pF typ        | V S = 0 V, f = 1 MHz                                                                            |
| C D (On), C S (On)                         | 28      |                  |                   | pF typ        | V S = 0 V, f = 1 MHz                                                                            |
| POWER REQUIREMENTS                         |         |                  |                   |               | V DD = +16.5 V, V SS = -16.5 V                                                                  |
| Positive Supply Current, I DD              | 330     |                  |                   | µA typ        | All switches open                                                                               |
|                                            | 350     |                  | 440               | µA max µA typ | All switches closed, V L = 5.5 V                                                                |
|                                            |         |                  | 460               | µA max        |                                                                                                 |
|                                            | 350     |                  | 460               | µA typ µA max | All switches closed, V L = 2.7 V                                                                |
| Load Current, I L                          |         |                  |                   |               |                                                                                                 |
| Inactive                                   | 6.3     |                  |                   | µA typ        | Digital inputs = 0 V or V L                                                                     |
|                                            | 2.5     |                  |                   | µA typ        | Digital inputs = 0 V or 3 V                                                                     |
|                                            |         |                  | 4.0               | µA max        |                                                                                                 |
| Inactive, SCLK = 1 MHz                     | 14      |                  |                   | µA typ        | CS = V L and SDI = 0 V or V L , V L = 5 V                                                       |
|                                            | 7       |                  |                   | µA typ        | CS = V L and SDI = 0 V or V L , V L = 3 V                                                       |
| SCLK = 50 MHz                              | 390     |                  |                   | µA typ        | CS = V L and SDI = 0 V or V L , V L = 5 V                                                       |
|                                            | 210     |                  |                   | µA typ        | CS = V L and SDI = 0 V or V L , V L = 3 V                                                       |
| Inactive, SDI = 1 MHz                      | 15      |                  |                   | µA typ        | CS and SCLK = 0 V or V L , V L = 5 V                                                            |
|                                            | 7.5     |                  |                   | µA typ        | CS and SCLK = 0 V or V L , V L = 3 V                                                            |
| SDI = 25 MHz                               | 230     |                  |                   | µA typ        | CS and SCLK = 0 V or V L , V L = 5 V                                                            |
|                                            | 120     |                  |                   | µA typ        | CS and SCLK = 0 V or V L , V L = 3 V                                                            |
| Active at 50 MHz                           | 7.0     |                  |                   | mA typ        | Digital inputs toggle between 0 V and V L , V L = 5.5 V                                         |
|                                            |         | 9.0              |                   | mA max        |                                                                                                 |

## SPECIFICATIONS

Table 2. ±15 V Dual Supply (Continued)

| Parameter                     | +25°C   | -40°C to +85°C   | -40°C to +125°C   | Unit                        | Test Conditions/Comments                                                            |
|-------------------------------|---------|------------------|-------------------|-----------------------------|-------------------------------------------------------------------------------------|
| Negative Supply Current, I SS | 3.3 180 |                  | 5.0 250           | mA typ mA max µA typ µA max | Digital inputs toggle between 0 V and V L , V L = 2.7 V Digital inputs = 0 V or V L |

## 12 V SINGLE SUPPLY

VDD  = 12 V ± 10%, V SS = 0 V, V L = 2.7 V to 5.5 V, and GND = 0 V, unless otherwise noted.

Table 3. 12 V Single Supply

| Parameter                 | +25°C     | -40°C to +85°C   | -40°C to +125°C   | Unit Test Conditions/Comments           | Unit Test Conditions/Comments           |
|---------------------------|-----------|------------------|-------------------|-----------------------------------------|-----------------------------------------|
| ANALOG SWITCH             |           |                  |                   | V DD = 10.8 V, V SS = 0 V               | V DD = 10.8 V, V SS = 0 V               |
| Analog Signal Range       |           |                  | 0 V to V - 2      | V                                       | V                                       |
|                           | 0.56      |                  | DD V              | Ω typ                                   | Ω typ                                   |
| R ON                      |           |                  |                   | V S = 0 V to 7.3 V, I S = -100 mA       | V S = 0 V to 7.3 V, I S = -100 mA       |
|                           | 0.7       | 0.85             | 1.0               | Ω max                                   | Ω max                                   |
|                           | 0.6       |                  |                   | Ω typ V S = 0 V to 8.3 V, I S = -100 mA | Ω typ V S = 0 V to 8.3 V, I S = -100 mA |
|                           |           | 0.9              |                   | Ω max                                   | Ω max                                   |
|                           | 0.75      |                  | 1.05              | V = 0 V to 8.3 V, I = -100 mA           | V = 0 V to 8.3 V, I = -100 mA           |
| ∆R ON                     | 0.45      |                  |                   | Ω typ S S                               | Ω typ S S                               |
|                           | 0.12      | 0.14             | 0.16              | Ω max                                   | Ω max                                   |
| R FLAT (ON)               | 0.004     | 0.035            |                   | S S = -100 mA                           | S S = -100 mA                           |
|                           | 0.035     |                  |                   | Ω typ V = 0 V to 7.3 V, I               | Ω typ V = 0 V to 7.3 V, I               |
|                           | 0.04      |                  | 0.035             | Ω max 8.3 V,                            | Ω max 8.3 V,                            |
|                           | 0.08      |                  |                   | Ω typ V S = 0 V to                      | Ω typ V S = 0 V to                      |
|                           |           | 0.1              | 0.1               |                                         |                                         |
|                           |           |                  |                   | Ω max                                   | Ω max                                   |
|                           |           |                  |                   | V = 13.2                                | V = 13.2                                |
| LEAKAGE CURRENTS I (Off)  | ±1.7      |                  |                   | DD V, V SS                              | DD V, V SS                              |
| S                         |           |                  |                   | nA typ V S = 1 V/10 V, V D =            | nA typ V S = 1 V/10 V, V D =            |
|                           | ±4.0      | +40/-5.5         | +120/-5.5         | nA max                                  | nA max                                  |
| I (Off)                   | ±1.7      |                  |                   | nA typ V = 1 V/10 V, V =                | nA typ V = 1 V/10 V, V =                |
| D                         |           |                  |                   | S D                                     | S D                                     |
|                           | ±4.0      | +40/-5.5         | +120/-5.5         |                                         |                                         |
| I D (On), I S (On)        | ±0.1 ±1.3 |                  |                   | nA max nA typ V = V = 1 V/10            | S D                                     |
|                           |           | ±3               |                   | nA max                                  | nA max                                  |
|                           |           |                  | +12.5/-3.0        |                                         |                                         |
| OH                        |           |                  | L V - 0.125 V     | I SOURCE = 1 mA V min                   | I SOURCE = 1 mA V min                   |
|                           |           |                  |                   | I = 100 µA                              | I = 100 µA                              |
|                           |           |                  | L                 |                                         |                                         |
|                           | 4         |                  |                   |                                         |                                         |
|                           |           |                  |                   | SOURCE                                  | SOURCE                                  |
| C                         |           |                  |                   |                                         |                                         |
| OUT                       |           |                  | 0.8               | V max                                   | V max                                   |
| DIGITAL INPUTS            |           |                  |                   | pF typ                                  | pF typ                                  |
| Low, V INL                |           |                  |                   | 3.3 V < V L ≤ 5.5 V                     | 3.3 V < V L ≤ 5.5 V                     |
|                           |           |                  |                   | V                                       | V                                       |
|                           |           |                  | 0.8               | V max                                   | V max                                   |
|                           |           |                  |                   | 2.7 V ≤ V ≤ 3.3                         | 2.7 V ≤ V ≤ 3.3                         |
| Input Current             |           |                  |                   | L                                       | L                                       |
|                           |           |                  | ±0.1              |                                         |                                         |
| Low, I INL or High, I INH | 0.001     |                  |                   | µA typ                                  | µA typ                                  |
| C                         |           |                  |                   |                                         |                                         |
| IN                        |           |                  |                   |                                         |                                         |
|                           |           |                  |                   | µA max                                  | µA max                                  |
|                           |           |                  |                   | IN GND                                  | IN GND                                  |
|                           | 4         |                  |                   |                                         |                                         |
|                           |           |                  |                   | V = V or V                              | V = V or V                              |
|                           |           |                  |                   | pF typ                                  |                                         |
| DYNAMIC CHARACTERISTICS   |           |                  |                   |                                         |                                         |
|                           |           |                  |                   | L                                       | L                                       |

## SPECIFICATIONS

Table 3. 12 V Single Supply (Continued)

| Parameter                    | +25°C   | -40°C to +85°C   | -40°C to +125°C   | Unit    | Test Conditions/Comments                                |
|------------------------------|---------|------------------|-------------------|---------|---------------------------------------------------------|
| t ON                         | 473     |                  |                   | ns typ  | R L = 300 Ω, C L = 35 pF, V S = 8 V                     |
|                              | 550     | 551              | 556               | ns max  |                                                         |
| t OFF                        | 297     |                  |                   | ns typ  | R L = 300 Ω, C L = 35 pF, V S = 8 V                     |
|                              | 348     | 352              | 356               | ns max  |                                                         |
| t D                          | 245     |                  |                   | ns typ  | R L = 300 Ω, C L = 35 pF, V S1 = V S2 = 8 V             |
|                              | 195     | 200              | 207               | ns min  |                                                         |
| Q INJ                        | -1.1    |                  |                   | nC typ  | V S = 6 V, R S = 0 Ω, C L = 1 nF                        |
| Off Isolation                | -61     |                  |                   | dB typ  | R L = 50 Ω, C L = 5 pF, f = 100 kHz                     |
| Channel to Channel Crosstalk | -85     |                  |                   | dB typ  | R L = 50 Ω, C L = 5 pF, f = 100 kHz                     |
| THD + N                      | 0.005   |                  |                   | %typ    | R L = 1 kΩ, 6 V p-p, f = 20 Hz to 20 kHz                |
| THD                          | -111    |                  |                   | dB typ  | R L = 1 kΩ, 6 V p-p, f = 1 kHz                          |
|                              | -85     |                  |                   | dB typ  | R L = 1 kΩ, 6 V p-p, f = 20 kHz                         |
|                              | -71     |                  |                   | dB typ  | R L = 1 kΩ, 6 V p-p, f = 100 kHz                        |
| -3 dB Bandwidth              | 114     |                  |                   | MHz typ | R L = 50 Ω, C L = 5 pF                                  |
| Insertion Loss               | -0.06   |                  |                   | dB typ  | R L = 50 Ω, C L = 5 pF, f = 1 MHz                       |
| C S (Off)                    | 100     |                  |                   | pF typ  | V S = 6 V, f = 1 MHz                                    |
| C D (Off)                    | 100     |                  |                   | pF typ  | V S = 6 V, f = 1 MHz                                    |
| C D (On), C S (On)           | 37      |                  |                   | pF typ  | V S = 6 V, f = 1 MHz                                    |
| POWER REQUIREMENTS           |         |                  |                   |         | V DD = 13.2 V                                           |
| I DD                         | 330     |                  |                   | µA typ  | All switches open                                       |
|                              |         |                  | 440               | µA max  |                                                         |
|                              | 350     |                  |                   | µA typ  | All switches closed, V L = 5.5 V                        |
|                              |         |                  | 460               | µA max  |                                                         |
|                              | 350     |                  |                   | µA typ  | All switches closed, V L = 2.7 V                        |
|                              |         |                  | 460               | µA max  |                                                         |
| I L                          |         |                  |                   |         |                                                         |
| Inactive                     | 6.3     |                  |                   | µA typ  | Digital inputs = 0 V or V L                             |
|                              |         |                  | 8.5               | µA max  |                                                         |
|                              | 2.5     |                  |                   | µA typ  | Digital inputs = 0 V or 3 V                             |
|                              |         |                  | 4.0               | µA max  |                                                         |
| Inactive, SCLK = 1 MHz       | 14      |                  |                   | µA typ  | CS = V L and SDI = 0 V or V L , V L = 5 V               |
|                              | 7       |                  |                   | µA typ  | CS = V L and SDI = 0 V or V L , V L = 3 V               |
| SCLK = 50 MHz                | 390     |                  |                   | µA typ  | CS = V L and SDI = 0 V or V L , V L = 5 V               |
|                              | 210     |                  |                   | µA typ  | CS = V L and SDI = 0 V or V L , V L = 3 V               |
| Inactive, SDI = 1 MHz        | 15      |                  |                   | µA typ  | CS and SCLK = 0 V or V L , V L = 5 V                    |
|                              | 7.5     |                  |                   | µA typ  | CS and SCLK = 0 V or V L , V L = 3 V                    |
| SDI = 25 MHz                 | 230     |                  |                   | µA typ  | CS and SCLK = 0 V or V L , V L = 5 V                    |
|                              | 120     |                  |                   | µA typ  | CS and SCLK = 0 V or V L , V L = 3 V                    |
| Active at 50 MHz             | 7.0     |                  |                   | mA typ  | Digital inputs toggle between 0 V and V L , V L = 5.5 V |
|                              |         |                  | 9.0               | mA max  |                                                         |
|                              | 3.3     |                  |                   | mA typ  | Digital inputs toggle between 0 V and V L , V L = 2.7 V |
|                              |         |                  | 5.0               | mA max  |                                                         |

## SPECIFICATIONS

## CONTINUOUS CURRENT PER CHANNEL, SX OR DX

## Table 4. Eight Channels On

| Parameter                                     | 25°C   | 85°C   | 125°C   | Unit       |
|-----------------------------------------------|--------|--------|---------|------------|
| CONTINUOUS CURRENT, Sx OR Dx 1                |        |        |         |            |
| V DD = +15 V, V SS = -15 V (θ JA = 56.74°C/W) | 439    | 232    | 112     | mA maximum |
| V DD = +12 V, V SS = 0 V (θ JA = 56.74°C/W)   | 439    | 232    | 112     | mA maximum |

## Table 5. One Channel On

| Parameter                                     | 25°C   | 85°C   | 125°C   | Unit       |
|-----------------------------------------------|--------|--------|---------|------------|
| CONTINUOUS CURRENT, Sx OR Dx 1                |        |        |         |            |
| V DD = +15 V, V SS = -15 V (θ JA = 56.74°C/W) | 768    | 313    | 122     | mA maximum |
| V DD = +12 V, V SS = 0 V (θ JA = 56.74°C/W)   | 768    | 313    | 122     | mA maximum |

## SPECIFICATIONS

## TIMING CHARACTERISTICS

VL = 2.7 V to 5.5 V, GND = 0 V, and all specifications T MIN to T MAX , unless otherwise noted. See Figure 2 to Figure 4 for the timing diagrams.

Table 6. Timing Characteristics

| Parameter              | Limit   | Unit   | Test Conditions/Comments                |
|------------------------|---------|--------|-----------------------------------------|
| TIMING CHARACTERISTICS |         |        |                                         |
| t 1                    | 20      | ns min | SCLK period                             |
| t 2                    | 8       | ns min | SCLK high pulse width                   |
| t 3                    | 8       | ns min | SCLK low pulse width                    |
| t 4                    | 10      | ns min | CS falling edge to SCLK active edge     |
| t 5                    | 6       | ns min | Data setup time                         |
| t 6                    | 8       | ns min | Data hold time                          |
| t 7                    | 10      | ns min | SCLK active edge to rising edge         |
| t 8                    | 20      | ns max | CS falling edge to SDO data available   |
| t 9 1                  | 30      | ns max | SCLK falling edge to SDO data available |
| t 10                   | 30      | ns max | CS rising edge to SDO returns to high   |
| t 11                   | 20      | ns min | CS high time between SPI commands       |
| t 12                   | 8       | ns min | CS falling edge to SCLK becomes stable  |
| t 13                   | 8       | ns min | CS rising edge to SCLK becomes stable   |

## SPECIFICATIONS

## TIMING DIAGRAMS

<!-- image -->

Figure 2. Address Mode Timing Diagram

<!-- image -->

Figure 3. Daisy-Chain Timing Diagram

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

Table 7. Absolute Maximum Ratings

| Parameter                                  | Rating                                                        |
|--------------------------------------------|---------------------------------------------------------------|
| V DD to V SS                               | 35 V                                                          |
| V DD to GND                                | -0.3 V to +25 V                                               |
| V SS to GND                                | +0.3 V to -25 V                                               |
| V L to GND                                 |                                                               |
| For V DD ≤ 5.5 V                           | -0.3 V to V DD + 0.3 V                                        |
| For V DD > 5.5 V                           | -0.3 V to +6 V                                                |
| SDO                                        | -0.3 V to V L + 0.3 V or 6 mA, whichever occurs first         |
| Analog Inputs 1                            | V SS - 0.3 V to V DD + 0.3 V or 30 mA, whichever occurs first |
| Digital Inputs 1                           | -0.3 V to +6 V                                                |
| Peak Current, Sx or Dx 2                   | 1180 mA (pulsed at 1 ms, 10% duty cycle maximum)              |
| Continuous Current, Sx or Dx 2             | Data 3 + 15%                                                  |
| Temperature                                |                                                               |
| Operating Range                            | -40°C to +125°C                                               |
| Storage Range                              | -65°C to +150°C                                               |
| Junction                                   | 150°C                                                         |
| Reflow Soldering Peak Temperature, Pb Free | As per JEDEC J-STD-020                                        |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at any one time.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction-to-ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JCB is the junction to the bottom of the case value.

## Table 8. Thermal Resistance

| Package Type 1   |   θ JA |   θ JCB | Unit   |
|------------------|--------|---------|--------|
| CC-30-3          |  56.81 |   29.82 | °C/W   |

- 1 Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with nine thermal vias. See JEDEC JESD-51.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADGS2414D

Table 9. ADGS2414D, 30-Terminal LGA

| Package Type   | Withstand Threshold (V)   | Class   |
|----------------|---------------------------|---------|
| HBM            | ±4000                     | 3A      |
| FICDM          | ±1250                     | C3      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 5. Pin Configuration

<!-- image -->

Table 10. Pin Function Descriptions

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                                                                                                                           |
|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | D1         | Drain Terminal 1. The D1 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 2         | D2         | Drain Terminal 2. The D2 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 3         | S1         | Source Terminal 1. The S1 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 4         | S2         | Source Terminal 2. The S2 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 5         | V SS       | Most Negative Power Supply Potential. In single-supply applications, tie the V SS pin to ground.                                                                                                                                                                                                      |
| 6         | S3         | Source Terminal 3. The S3 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 7         | S4         | Source Terminal 4. The S4 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 8         | D3         | Drain Terminal 3. The D3 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 9         | D4         | Drain Terminal 4. The D4 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 10, 30    | V DD       | Most Positive Power Supply Potential. Both V DD pins are connected internally.                                                                                                                                                                                                                        |
| 11, 29    | GND        | Ground (0 V) Reference. Both GND pins are connected internally.                                                                                                                                                                                                                                       |
| 12, 28    | RESET/V L  | RESET/Logic Power Supply Input (V L ). Under normal operation, drive RESET)/V L with a 2.7 V to 5.5 V supply. Pull RESET/V L low to complete a hardware reset. After a reset, all switches open, and the appropriate registers are set to their default. Both RESET and V L are connected internally. |
| 13        | SDO        | Serial Data Output. Use the SDO pin for daisy-chaining a number of these devices together or for reading back the data stored in a register for diagnostic purposes. The serial data is propagated on the falling edge of SCLK.                                                                       |
| 14, 26    | SCLK       | Serial Clock Input. Data is captured on the positive edge of SCLK. Data can be transferred at rates up to 50 MHz. Both SCLK pins are connected internally.                                                                                                                                            |
| 15, 25    | CS         | Active Low Control Input.CS is the frame synchronization signal for the input data. Both CS pins are connected internally.                                                                                                                                                                            |
| 16        | D5         | Drain Terminal 5. The D5 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 17        | D6         | Drain Terminal 6. The D6 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 18        | S5         | Source Terminal 5. The S5 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 19        | S6         | Source Terminal 6. The S6 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 20        | NIC        | Not Internally Connected.                                                                                                                                                                                                                                                                             |
| 21        | S7         | Source Terminal 7. The S7 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 22        | S8         | Source Terminal 8. The S8 pin can be an input or an output.                                                                                                                                                                                                                                           |
| 23        | D7         | Drain Terminal 7. The D7 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 24        | D8         | Drain Terminal 8. The D8 pin can be an input or an output.                                                                                                                                                                                                                                            |
| 27        | SDI        | Serial Data Input. Data is captured on the positive edge of SCLK.                                                                                                                                                                                                                                     |
|           | EPAD       | Exposed Pad. The exposed pad is connected internally. For increased reliability of the solder joints and maximum thermal capability, it is recommended that the exposed pad is connected to V SS .                                                                                                    |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. On Resistance vs. V S or V D for ±15 V Dual Supply

<!-- image -->

Figure 7. On Resistance vs. V S or V D for ±5 V Dual Supply

<!-- image -->

Figure 8. On Resistance vs. V S or V D for +12 V Single Supply

<!-- image -->

Figure 9. On Resistance vs. V S or V D for Various Temperatures, ±15 V Dual Supply

Figure 10. On Resistance vs. V S or V D for Various Temperatures, ±5 V Dual Supply

<!-- image -->

Figure 11. On Resistance vs. V S or V D for Various Temperatures, +12 V Single Supply

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 12. On Leakage Currents vs. Temperature, ±15 V Dual Supply

<!-- image -->

Figure 13. On Leakage Currents vs. Temperature, ±5 V Dual Supply

<!-- image -->

Figure 14. On Leakage Currents vs. Temperature, +12 V Single Supply

<!-- image -->

Figure 15. Off Leakage Currents vs. Temperature, ±15 V Dual Supply

Figure 16. On Leakage Currents vs. Temperature, ±5 V Dual Supply

<!-- image -->

Figure 17. On Leakage Currents vs. Temperature, +12 V Single Supply

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 18. Crosstalk vs. Frequency, ±15 V Dual Supply

<!-- image -->

Figure 19. Off Isolation vs. Frequency, ±15 V Dual Supply

<!-- image -->

Figure 20. Charge Injection vs. V S

<!-- image -->

Figure 21. AC Power Supply Rejection Ratio (AC PSRR) vs. Frequency, ±15 V Dual Supply

Figure 22. Insertion Loss vs. Frequency, ±15 V Dual Supply

<!-- image -->

Figure 23. THD + N vs. Frequency, ±15 V Dual Supply

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 24. THD vs. Frequency, ±15 V Dual Supply

<!-- image -->

Figure 25. Large AC Signal Voltage vs. Frequency

<!-- image -->

Figure 26. Capacitance vs. V S , ±15 V Dual Supply

Figure 27. T ON /T OFF Time vs. Temperature for Single Supply (SS) and Dual Supply (DS)

<!-- image -->

Figure 28. I L vs. SCLK Frequency When CS Is High

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 29. On Resistance (I DS = Drain and Source Current)

<!-- image -->

Figure 30. Off Leakage

Figure 31. On Leakage

<!-- image -->

Figure 32. Channel to Channel Crosstalk

<!-- image -->

## TEST CIRCUITS

Figure 33. Off Isolation

<!-- image -->

Figure 34. THD + N

<!-- image -->

## TEST CIRCUITS

Figure 35. -3 dB Bandwidth

<!-- image -->

Figure 36. AC PSRR

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 37. Break-Before-Make Time Delay, t D

Figure 38. Switching Times, t ON and t OFF

<!-- image -->

Figure 39. Charge Injection, Q INJ (ΔV OUT = Change in Output Voltage)

<!-- image -->

## TERMINOLOGY

## IDD

I DD represents the positive supply current.

## ISS

I SS represents the negative supply current.

## VD, VS

VD and V S represent the analog voltage on Terminal Dx and Terminal Sx, respectively.

## RON

RON represents the ohmic resistance between Terminal Dx and Terminal Sx.

## ∆RON

∆RON represents the difference between the R ON of any two channels.

## RFLAT (ON)

RFLAT (ON) is flatness that is defined as the difference between the maximum and minimum value of on resistance measured over the specified analog signal range.

## I S (Off)

I S (Off) is the source leakage current with the switch off.

## I D (Off)

I D (Off) is the drain leakage current with the switch off.

## I D (On), IS (On)

I D (On) and I S (On) represent the channel leakage currents with the switch on.

## VINL

VINL is the maximum input voltage for Logic 0.

## VINH

VINH is the minimum input voltage for Logic 1.

## I INL , I INH

I INL and I INH represent the low and high input currents of the digital inputs.

## CD (Off)

CD (Off) represents the off switch drain capacitance, which is measured with reference to ground.

## CS (Off)

CS (Off) represents the off switch source capacitance, which is measured with reference to ground.

## CD (On), CS (On)

CD (On) and C S (On) represent on switch capacitances, which are measured with reference to ground.

## CIN

CIN is the digital input capacitance.

## COUT

COUT  is the digital output capacitance.

## tON

t ON represents the delay between applying the digital control input and the output switching on.

## tOFF

t OFF represents the delay between applying the digital control input and the output switching off.

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

AC PSRR is the ratio of the amplitude of the signal on the output to the amplitude of the modulation. AC PSRR is a measure of the ability of the device to avoid coupling noise and spurious signals that appear on the supply voltage pin to the output of the switch. The DC voltage on the device is modulated by a sine wave of 0.62 V p-p.

## THEORY OF OPERATION

The ADGS2414D is a set of serially controlled, octal SPST switches with error detection features. SPI Mode 0 and Mode 3 can be used with the ADGS2414D, and the device operates with SCLK frequencies up to 50 MHz. The default mode for the ADGS2414D is address mode in which the registers of the device are accessed by a 16-bit SPI command that is bounded by CS. The SPI command is a 24-bit command if the user enables CRC error detection. Other error detection features include SCLK count error and invalid read and write error. Read the error flags register to detect if any of these SPI errors occur. The ADGS2414D can also operate in two other modes: burst mode and daisy-chain mode.

The interface pins of the ADGS2414D are CS, SCLK, SDI, and SDO. Hold CS low when using the SPI. Data is captured on the SDI on the rising edge of SCLK, and data is propagated out on the SDO on the falling edge of SCLK.

## ADDRESS MODE

Address mode is the default mode for the ADGS2414D upon power-up. A single SPI frame in address mode is bounded by a CS falling edge and the succeeding CS rising edge. The SPI frame is comprised of 16 SCLK cycles. The timing diagram for address mode is shown in Figure 40. The first SDI bit indicates if the SPI command is a read or write command. When the first bit is set to 0, a write command is issued, and if the first bit is set to 1, a read command is issued. The next seven bits determine the target register address. The remaining eight bits provide the data to the addressed register. The last eight bits are ignored during a read command because, during these clock cycles, SDO propagates out the data contained in the addressed register.

The target register address of an SPI command is determined on the eighth SCLK rising edge. Data from this register propagates out on SDO from the eighth to the 15 th SCLK falling edge during SPI reads. A register write occurs on the 16 th SCLK rising edge during SPI writes.

During any SPI command, SDO sends out eight alignment bits as the first eight bits. The alignment bits observed at SDO are 0x25.

## ERROR DETECTION FEATURES

Protocol and communication errors on the SPI are detectable. There are three error detection features: incorrect SCLK count error detection, invalid read and write address error detection, and CRC error detection. Each of these error detection features has a corresponding enable bit in the error configuration register. In addition, there is an error flag bit for each of these error detection features in the error flags register.

## CYCLIC REDUNDANCY CHECK (CRC) ERROR DETECTION

The CRC error detection feature extends a valid SPI frame by eight SCLK cycles. These eight extra cycles are needed to send the CRC byte for that SPI frame. The CRC byte is calculated by the SPI block using the 16-bit payload: the R/W bit, the register address, Bits[6:0], and the register data, Bits[7:0]. The CRC polynomial used in the SPI block is x 8 + x 2 + x 1 + 1 with a seed value of 0. For a timing diagram with CRC enabled, see Figure 41. Register writes occur at the 24 th SCLK rising edge with CRC error checking enabled.

During an SPI write, the microcontroller or central processing unit (CPU) provides the CRC byte through SDI. The SPI block checks the CRC byte just before the 24th SCLK rising edge. On this same edge, the register write is prevented if an incorrect CRC byte is received by the SPI. The CRC error flag asserts in the error flags register in the case of the incorrect CRC byte being detected.

During an SPI read, the CRC byte is provided to the microcontroller through SDO.

The CRC error detection feature is disabled by default and can be configured by the user through the error configuration register.

Figure 41. Timing Diagram with CRC Enabled

<!-- image -->

## THEORY OF OPERATION

## SCLK COUNT ERROR DETECTION

SCLK count error detection allows the user to detect if an incorrect number of SCLK cycles are sent by the microcontroller or CPU. When in address mode, with CRC disabled, 16 SCLK cycles are expected. If 16 SCLK cycles are not detected, the SCLK count error flag asserts in the error flags register. When less than 16 SCLK cycles are received by the device, a write to the register map does not occur. When the ADGS2414D receives more than 16 SCLK cycles, a write to the memory map still occurs at the 16 th  SCLK rising edge, and the flag asserts in the error flags register. With CRC enabled, the expected number of SCLK cycles is 24. SCLK count error detection is enabled by default and can be configured by the user through the error configuration register.

## INVALID READ AND WRITE ADDRESS ERROR

An invalid read and write address error detects when a nonexistent register address is a target for a read or write. In addition, this error asserts when a write to a read only register is attempted. The invalid read and write address error flag asserts in the error flags register when an invalid read and write address error occurs. The invalid read and write address error is detected on the ninth SCLK rising edge, which means a write to the register does not occur when an invalid address is targeted. Invalid read and write address error detection is enabled by default and can be disabled by the user through the error configuration register.

## CLEARING THE ERROR FLAGS REGISTER

To clear the error flags register, write the special 16-bit SPI frame, 0x6CA9, to the device. This SPI command does not trigger the invalid R/W address error. When CRC is enabled, the user must also send the correct CRC byte for a successful error clear command. At the 16 th or 24 th SCLK rising edge, the error flags register resets to zero.

## BURST MODE

The SPI can accept consecutive SPI commands without the need to deassert the CS line, which is called burst mode. Burst mode is enabled through the burst enable register. This mode uses the same 16-bit command to communicate with the device. In addition, the response of the device at SDO is still aligned with the corresponding SPI command. Figure 42 shows an example of SDI and SDO during burst mode.

The invalid read and write address and CRC error checking functions operate similarly during burst mode as these error checking functions do during address mode. However, SCLK count error detection operates in a slightly different manner. The total number of SCLK cycles within a given CS frame are counted, and if the total is not a multiple of 16, or a multiple of 24 when CRC is enabled, the SCLK count error flag asserts.

Figure 42. Burst Mode Frame

<!-- image -->

## SOFTWARE RESET

When in address mode, the user can initiate a software reset by writing two consecutive SPI commands, 0xA3 followed by 0x05, targeting Register 0x0B. After a software reset, all register values are set to default.

## DAISY-CHAIN MODE

The connection of several ADGS2414D devices in a daisy-chain configuration is possible, and Figure 43 illustrates this setup. All devices share the same CS, SCLK, and V L line, whereas the SDO of a device forms a connection to the SDI of the next device, creating a shift register. In daisy-chain mode, SDO is an eight-cycle delayed version of SDI. When in daisy-chain mode, all commands target the switch data register. Therefore, it is not possible to make configuration changes while in daisy-chain mode.

When in address mode, the ADGS2414D can only enter daisychain mode by sending the 16-bit SPI command, 0x2500 (see Figure 44). When the ADGS2414D receives this command, the SDO of the device sends out the same command because the alignment bits at the SDO are 0x25, which allows multiple daisyconnected devices to enter daisy-chain mode in a single SPI frame. A hardware reset is required to exit daisy-chain mode.

For the timing diagram of a typical daisy-chain SPI frame, see Figure 45. When CS goes high, Device 1 writes Command 0, Bits[7:0] to its switch data register, Device 2 writes Command 1, Bits[7:0] to its switches, and so on. The SPI block uses the last eight bits it received through SDI to update the switches. After entering daisy-chain mode, the first eight bits sent out by SDO on each device in the chain are 0x00. When CS goes high, the internal shift register value does not reset back to zero.

An SCLK rising edge reads data on SDI while data is propagated out of SDO on an SCLK falling edge.

## THEORY OF OPERATION

Figure 45. Example of an SPI Frame Where Four ADGS2414D Devices Connect in Daisy-Chain Mode

<!-- image -->

## THEORY OF OPERATION

## POWER-ON RESET

The digital section of the ADGS2414D goes through an initialization phase during V L power-up. This initialization also occurs after a hardware or software reset. After V L power-up or a reset, ensure that a minimum of 120 µs passes from the time of power-up or reset before any SPI command is issued. Ensure that V L does not drop out during the 120 µs initialization phase because it may result in the incorrect operation of the ADGS2414D.

## APPLICATIONS INFORMATION

## LARGE VOLTAGE, HIGH FREQUENCY SIGNAL TRACKING

Figure 25 shows the voltage range and corresponding frequencies that the ADGS2414D can reliably convey. The tracking voltage (V TRACK ) in the figure shows the source voltage and the drain voltage difference, which is less than 50 mV for a given amplitude and frequency. For large voltage, high frequency signals, the frequency must be kept below 10 MHz. If the required frequency is greater than 10 MHz, decrease the signal range appropriately to ensure signal integrity.

## SYSTEM CHANNEL DENSITY

The ADGS2414D feature set allows for large system channel density. These features include route through pins for the digital signals and power supplies, as well as integrated passive components.

## ROUTE THROUGH PINS

When multiple ADGS2414D devices are used in a system, the route through pins allow for a greater channel density layout. The route through pins enable the passing of power supplies and digital lines between devices with ease. The V DD , RESET/V L , and GND power lines, as well as the SCLK, CS, SDI, and SDO digital lines, are available on both the top and bottom pins of the package. These route through pins simplify PCB routing and reduce the need for vias when connecting many ADGS2414D devices together. Figure 46 shows an example layout where the route through pins on four ADGS2414D devices configured in daisy-chain mode are used to reduce the overall size of the layout.

## INTEGRATED PASSIVE COMPONENTS

Note the lack of external passive components in the layout in Figure 46. The ADGS2414D has integrated decoupling capacitors for the V DD , V SS , and RESET/V L power supplies. Therefore, the need for external decoupling capacitors is eliminated, reducing the total system footprint of the ADGS2414D. If additional decoupling is required for extremely noise-sensitive applications, add an external decoupling capacitor. Figure 21 shows the AC PSRR performance with and without external decoupling capacitors. The ADG2414D also contains an integrated pullup resistor to V L for the SDO pin.

Figure 46. Layout Example Showing the Use of the Route Pins and the Elimination of External Passive Components

<!-- image -->

## APPLICATIONS INFORMATION

## BREAK-BEFORE-MAKE SWITCHING

The ADGS2414D exhibits break-before-make switching action. This feature allows for the use of the device in multiplexer applications. To use the device as a multiplexer, externally hardwire a device into the desired mux configuration, as shown in Figure 47.

Figure 47. An SPI Controlled Switch Configured into a 4:1 Mux

<!-- image -->

## DIGITAL INPUT BUFFERS

There are input buffers present on the digital input pins (CS, SCLK, and SDI). These buffers are active at all times. Therefore, there is a current draw from the V L supply if SCLK or SDI is toggled, regardless of whether CS is active. For typical values of this current draw, refer to the Specifications section and Figure 28.

## POWER SUPPLY RAILS

The ADGS2414D can operate with bipolar supplies between ±4.5 V and ±16.5 V. The supplies on V DD and V SS do not have to be symmetrical. However, the V DD to V SS range must not exceed 33 V. The ADGS2414D can also operate with single supplies between 5 V and 20 V with V SS connected to GND. The voltage range that can be supplied to V L is from 2.7 V to 5.5 V. The device is fully specified at ±15 V and +12 V analog supply voltage ranges.

## POWER SUPPLY RECOMMENDATIONS

Analog Devices, Inc., has a wide range of power management products to meet the requirements of high-performance signal chains.

An example of a bipolar power solution is shown in Figure 48. The LT3463 (a dual switching regulator) generates a positive and negative supply rail for the ADGS2414D, an amplifier, and/or a precision converter in a typical signal chain. Also shown in Figure 48 are two optional low dropout regulators (LDOs), the ADP7142 and ADP7182 (positive and negative LDOs, respectively), which can reduce the output ripple of the LT3463 in ultralow noise-sensitive applications.

The ADP7142 can generate the V L voltage that is required to power the digital circuitry within the ADGS2414D.

Figure 48. Bipolar Power Solution

<!-- image -->

Table 11. Recommended Power Management Devices

| Product   | Description                                              |
|-----------|----------------------------------------------------------|
| LT3463    | Dual micropower, DC to DC converter with Schottky diodes |
| ADP7142   | 40 V, 200 mA, low noise, CMOS, LDO linear regulator      |
| ADP7182   | -28 V, -200 mA, low noise, LDO linear regulator          |

## 1.8 V LOGIC COMPATIBILITY

The SDI, CS, and SCLK digital inputs of the ADGS2414D are compatible with 1.8 V logic when V L is between or equal to 2.7 V and 3.3 V.

The SDO digital output levels are proportional to the V L voltage. For example, if V L = 3 V, a logic high on the SDO is approximately 3 V. When performing an SPI readback from the ADGS2414D with a controller device using 1.8 V logic, there may be an issue if the digital pins on the controller cannot tolerate digital input signals that exceed 1.8 V.

Figure 49 describes how to use the ADG3231 level translator to perform a 1.8 V SPI readback with a device that has 1.8 V logic ports, such as a microcontroller or field programmable gate array (FPGA). Place the ADG3231 between the SDO of the ADGS2414D and the microcontroller or FPGA. Supply V CC1 of the ADG3231 with the V L voltage of the ADGS2414D and connect V CC2 to the 1.8 V supply from the microcontroller or FPGA. The ADG3231 then translates the logic level of the SDO from V L to 1.8 V.

This solution is only required if the 1.8 V microcontroller or FPGA cannot tolerate digital input signals that exceed 1.8 V.

Figure 49. Using the ADG3231 to Perform a 1.8 V SPI Readback

<!-- image -->

## REGISTER SUMMARY

## Table 12. Register Summary

| Reg.   | Name        | Bit 7       | Bit 6       | Bit 5       | Bit 4       | Bit 3       | Bit 2       | Bit 1         | Bit 0         | Default   | R/W   |
|--------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|---------------|---------------|-----------|-------|
| 0x01   | SW_DATA     | SW8_EN      | SW7_EN      | SW6_EN      | SW5_EN      | SW4_EN      | SW3_EN      | SW2_EN        | SW1_EN        | 0x00      | R/W   |
| 0x02   | ERR_CONFIG  | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | RW_ERR_EN   | SCLK_ERR_EN   | CRC_ERR_EN    | 0x06      | R/W   |
| 0x03   | ERR_FLAGS   | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | RW_ERR_FLAG | SCLK_ERR_FLAG | CRC_ERR_FLAG  | 0x00      | R     |
| 0x05   | BURST_EN    | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | Reserved    | Reserved      | BURST_MODE_EN | 0x00      | R/W   |
| 0x0B   | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB | SOFT_RESETB   | SOFT_RESETB   | 0x00      | W     |

## REGISTER DETAILS

## SWITCH DATA REGISTER

## Address: 0x01, Reset: 0x00, Name: SW\_DATA

Use the switch data register to control the status of the eight switches of the ADGS2414D.

Table 13. Bit Descriptions for SW\_DATA

|   Bit | Bit Name   | Setting   | Description                                                         | Default   | Access   |
|-------|------------|-----------|---------------------------------------------------------------------|-----------|----------|
|     7 | SW8_EN     |           | Enable the SW8_EN bit for Switch 8. Switch 8 open.                  | 0x0       | R/W      |
|     6 | SW7_EN     |           | Enable the SW7_EN bit for Switch 7. Switch 7 open. Switch 7 closed. | 0x0       | R/W      |
|     5 | SW6_EN     |           | Enable the SW6_EN bit for Switch 6. Switch 6 open. Switch 6 closed. | 0x0       | R/W      |
|     4 | SW5_EN     |           | Enable the SW5_EN bit for Switch 5. Switch 5 open. Switch 5 closed. | 0x0       | R/W      |
|     3 | SW4_EN     |           | Enable the SW4_EN bit for Switch 4. Switch 4 open. Switch 4 closed. | 0x0       | R/W      |
|     2 | SW3_EN     |           | Enable the SW3_EN bit for Switch 3. Switch 3 open. Switch 3 closed. | 0x0       | R/W      |
|     1 | SW2_EN     |           | Enable the SW2_EN bit for Switch 2. Switch 2 open. Switch 2 closed. | 0x0       | R/W      |
|     0 | SW1_EN     |           | Enable the SW1_EN bit for Switch 1. Switch 1 open.                  | 0x0       | R/W      |

## ERROR CONFIGURATION REGISTER

Address: 0x02, Reset: 0x06, Name: ERR\_CONFIG

Use the error configuration register to enable and disable the relevant error features as required.

Table 14. Bit Descriptions for ERR\_CONFIG

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                              | Default   | Access   |
|--------|-------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| [7:3]  | Reserved    |            | Bits[7:3] are reserved. Set Bits[7:3] to 0.                                                                                                                                                                                                              | 0x0       | R        |
| 2      | RW_ERR_EN   |            | Enable the RW_ERR_EN bit to detect an invalid read and write address.                                                                                                                                                                                    | 0x1       | R/W      |
|        |             | 0          | Disabled.                                                                                                                                                                                                                                                |           |          |
|        |             | 1          | Enabled.                                                                                                                                                                                                                                                 |           |          |
| 1      | SCLK_ERR_EN |            | Enable the SCLK_ERR_EN bit to detect the correct number of SCLK cycles in an SPI frame. 16 SCLK cycles are expected when CRC is disabled and burst mode is disabled. SCLK cycles are expected when CRC is enabled and burst mode is disabled. A multiple | 0x1       | R/W      |
|        |             |            | 24 of                                                                                                                                                                                                                                                    |           |          |
|        |             |            | 16 SCLK cycles is expected when CRC is disabled and burst mode is enabled. A multiple of 24 SCLK cycles is expected when CRC is enabled and burst mode is enabled.                                                                                       |           |          |
|        |             | 0          | Disabled.                                                                                                                                                                                                                                                |           |          |
|        |             | 1          | Enabled.                                                                                                                                                                                                                                                 |           |          |

## REGISTER DETAILS

## Table 14. Bit Descriptions for ERR\_CONFIG (Continued)

|   Bits | Bit Name   | Settings   | Description                                                                                                     | Default   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------------------------|-----------|----------|
|      0 | CRC_ERR_EN | 0 1        | Enable the CRC_ERR_EN bit for CRC error detection. SPI frames are 24 bits wide when enabled. Disabled. Enabled. | 0x0       | R/W      |

## ERROR FLAGS REGISTER

## Address: 0x03, Reset: 0x00, Name: ERR\_FLAGS

Use the error flags register to determine if an error has occurred. To clear the error flags register, write the special 16-bit SPI command, 0x6CA9, to the device. This SPI command does not trigger the invalid R/W address error. When CRC is enabled, include the correct CRC byte during the SPI write for the clear error flags register command to succeed.

Table 15. Bit Descriptions for ERR\_FLAGS

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                  | Default   | Access   |
|--------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| [7:3]  | Reserved      |            | Bits[7:3] are reserved and are set to 0.                                                                                                                                                                                                     | 0x0       | R        |
| 2      | RW_ERR_FLAG   | 0          | Error flag for invalid read and write address. The error flag asserts during an SPI read if the target address does not exist. The error flag also asserts when the target address of an SPI write does not exist or is read only. No error. | 0x0       | R        |
| 1      | SCLK_ERR_FLAG |            | Error flag for the detection of the correct number of SCLK cycles in an SPI frame.                                                                                                                                                           | 0x0       | R        |
| 0      | CRC_ERR_FLAG  | 0          | Error flag that determines if a CRC error has occurred during a register write. No error.                                                                                                                                                    | 0x0       | R        |

## BURST ENABLE REGISTER

## Address: 0x05, Reset: 0x00, Name: BURST\_EN

Use the burst enable register to enable or disable burst mode. When burst mode is enabled, the user can send multiple consecutive SPI commands without deasserting CS.

Table 16. Bit Descriptions for BURST\_EN

| Bits   | Bit Name      | Settings   | Description                                 | Default   | Access   |
|--------|---------------|------------|---------------------------------------------|-----------|----------|
| [7:1]  | Reserved      |            | Bits[7:1] are reserved. Set Bits[7:1] to 0. | 0x0       | R        |
| 0      | BURST_MODE_EN |            | Burst mode enable bit.                      | 0x0       | R/W      |
|        |               | 0          | Disabled.                                   |           |          |
|        |               | 1          | Enabled.                                    |           |          |

## REGISTER DETAILS

## SOFTWARE RESET REGISTER

## Address: 0x0B, Reset: 0x00, Name: SOFT\_RESETB

Use the software reset register to perform a software reset. Consecutively write 0xA3 followed by 0x05 to this register, and the registers of the device reset to their default state.

Table 17. Bit Descriptions for SOFT\_RESETB

| Bits   | Bit Name    | Settings   | Description                                                                                         | Default   | Access   |
|--------|-------------|------------|-----------------------------------------------------------------------------------------------------|-----------|----------|
| [7:0]  | SOFT_RESETB |            | To perform a software reset, consecutively write 0xA3 followed by 0x05 to the SOFT_RESETB register. | 0x0       | W        |

## OUTLINE DIMENSIONS

Figure 50. 30-Terminal Land Grid Array [LGA] (CC-30-3) 4 mm × 5 mm Body and 1.63 mm Package Height

<!-- image -->

<!-- image -->

Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description                | Packing Quantity   | Package Option   |
|-------------------|---------------------|------------------------------------|--------------------|------------------|
| ADGS2414DBCCZ     | -40°C to +125°C     | 30-lead LGA (4 mm x 5 mm x 1.63mm) | Tray, 490          | CC-30-3          |
| ADGS2414DBCCZ-RL7 | -40°C to +125°C     | 30-lead LGA (4 mm x 5 mm x 1.63mm) | Reel, 1000         | CC-30-3          |

## EVALUATION BOARDS

## Table 18. Evaluation Boards

| Model 1         | Description      |
|-----------------|------------------|
| EV-ADGS2414DSDZ | Evaluation Board |

<!-- image -->

A

-

2

0

0

7

-

2

2

-

0

4

Updated: August 19, 2023