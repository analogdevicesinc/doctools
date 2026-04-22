<!-- lastmod 2023-09-13 -->
<!-- image -->

## FEATURES

- Measures up to 18 battery cells in series
- 3 mV maximum total measurement error
- Stackable architecture for high voltage systems
- Built-in isoSPI interface
- 1 Mb isolated serial communications
- Uses a single twisted pair, up to 100 meters
- Low EMI susceptibility and emissions
- Bidirectional for broken wire protection
- 290 µs to measure all cells in a system
- Synchronized voltage and current measurement
- 16-bit Δ-Σ ADC with programmable third-order noise filter
- Passive cell balancing up to 200 mA (maximum) with programmable pulse -width modulation
- 9 general-purpose digital I/O or analog inputs
- Temperature or other sensor inputs
- Configurable as an I 2 C or SPI master
- 6 µA sleep mode supply current
- 64-lead LQFP\_EP package

## APPLICATIONS

- Backup battery systems
- Grid energy storage
- Residential energy storage
- UPS
- High power portable equipment

1 Protected by U.S. patents, including 8,908,779; 9,182,428; and 9,270,133.

## 18-Cell Battery Monitor with Daisy Chain Interface

## TYPICAL APPLICATION CIRCUIT

Figure 1. Typical Application Circuit

<!-- image -->

## GENERAL DESCRIPTION

The ADBMS1818 1  is a multicell battery stack monitor that measures up to 18 series connected battery cells with a total measurement error (TME) of less than 3.0 mV. The cell measurement range of 0 V to 5 V makes the ADBMS1818 suitable for most battery chemistries. All 18 cells can be measured in 290 µs, and lower data acquisition rates can be selected for high noise reduction.

Multiple ADBMS1818 devices can be connected in series, permitting simultaneous cell monitoring of long, high voltage battery strings. Each ADBMS1818 has an isoSPI ™  interface for high speed, RF immune, long distance communications. Multiple devices are connected in a daisy chain with one host processor connection for all devices. This daisy chain can be operated bidirectionally, ensuring communication integrity, even in the event of a fault along the communication path.

The ADBMS1818 can be powered directly from the battery stack or from an isolated supply. The ADBMS1818 includes passive balancing for each cell, with individual pulse-width modulation (PWM) duty cycle control for each cell. Other features include an on-board 5 V regulator, nine general-purpose I/O lines, and a sleep mode, where current consumption is reduced to 6 µA.

## TABLE OF CONTENTS

| Features................................................................                                                                                       | 1                                                                                                                                                              | S Pin Pulse-Width Modulation for Cell Balancing........................................................40                                                      |                                                                |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| Applications........................................................... Typical Application Circuit......................................1                     | 1                                                                                                                                                              | Discharge Timer Monitor..................................41                                                                                                    |                                                                |
| General Description...............................................1                                                                                            |                                                                                                                                                                | I 2 C/SPI Master on ADBMS1818 Using                                                                                                                            |                                                                |
| Specifications........................................................                                                                                         | 4                                                                                                                                                              | GPIOs.............................................................41                                                                                           |                                                                |
| ADC DC Specifications......................................                                                                                                    | 4                                                                                                                                                              | S Pin Pulsing Using the S Pin Control                                                                                                                          |                                                                |
| Voltage Reference Specifications.......................5                                                                                                       |                                                                                                                                                                | Settings..........................................................                                                                                             | 45                                                             |
| General DC Specifications.................................5                                                                                                    |                                                                                                                                                                | S Pin Muting.....................................................47                                                                                            |                                                                |
| ADC Timing Specifications.................................7                                                                                                    |                                                                                                                                                                | Serial Interface Overview.................................47                                                                                                   |                                                                |
| SPI DC Specifications........................................8                                                                                                 |                                                                                                                                                                | 4-Wire Serial Peripheral Interface (SPI)                                                                                                                       |                                                                |
| IsoSPI DC Specifications...................................                                                                                                    | 8                                                                                                                                                              | Physical Layer................................................47                                                                                               |                                                                |
| IsoSPI Idle/Wake-Up Specifications...................9                                                                                                         |                                                                                                                                                                | 2-Wire Isolated Interface (isoSPI) Physical                                                                                                                    | 47                                                             |
| IsoSPI Pulse Timing Specifications....................9 SPI Timing Requirements..................................                                              | 9                                                                                                                                                              | Layer.............................................................. Data Link Layer................................................57                          |                                                                |
| isoSPI Timing Specifications............................10                                                                                                     |                                                                                                                                                                | Network Layer..................................................57                                                                                              |                                                                |
| Absolute Maximum Ratings.................................11                                                                                                    |                                                                                                                                                                | Memory Map........................................................65                                                                                           |                                                                |
| Thermal Resistance..........................................11                                                                                                 |                                                                                                                                                                | Applications Information......................................                                                                                                 | 71                                                             |
| Electrostatic Discharge (ESD) Ratings.............11                                                                                                           |                                                                                                                                                                | Providing DC Power.........................................71                                                                                                  |                                                                |
| ESD Caution.....................................................11                                                                                             |                                                                                                                                                                | Internal Protection and Filtering.......................                                                                                                       | 71                                                             |
| Pin Configuration and Function Descriptions......                                                                                                              | 12                                                                                                                                                             | Cell Balancing..................................................                                                                                               | 75                                                             |
| Typical Performance Characteristics...................14 Functional Block Diagram....................................23                                        |                                                                                                                                                                | Discharge Control During Cell                                                                                                                                  | Measurements................................................77 |
| Improvements from the LTC6811-1.....................24                                                                                                         |                                                                                                                                                                | Digital Communications....................................78                                                                                                   |                                                                |
| Theory of Operation.............................................25                                                                                             |                                                                                                                                                                | Enhanced Applications.....................................86                                                                                                   |                                                                |
| State Diagram..................................................                                                                                                | 25                                                                                                                                                             | Reading External Temperature Probes............88                                                                                                              |                                                                |
| ADBMS1818 Core State Descriptions..............25                                                                                                              |                                                                                                                                                                | Typical Application...............................................89                                                                                           |                                                                |
| isoSPI State Descriptions.................................26                                                                                                   |                                                                                                                                                                | Related Devices..................................................                                                                                              | 90                                                             |
| Power Consumption.........................................26                                                                                                   |                                                                                                                                                                | Outline Dimensions.............................................                                                                                                | 91                                                             |
| ADC Operation.................................................27                                                                                               |                                                                                                                                                                | Ordering Guide.................................................92                                                                                              |                                                                |
| Data Acquisition System Diagnostics...............33 Timer.......................39                                                                            |                                                                                                                                                                | Evaluation Boards............................................92                                                                                                |                                                                |
| Watchdog and Discharge                                                                                                                                         |                                                                                                                                                                |                                                                                                                                                                |                                                                |
| REVISION HISTORY                                                                                                                                               |                                                                                                                                                                |                                                                                                                                                                |                                                                |
| 9/2023-Rev. A to Rev. B                                                                                                                                        |                                                                                                                                                                |                                                                                                                                                                |                                                                |
| Changes to Table 11.......................................................................................................................................11   | Changes to Table 11.......................................................................................................................................11   | Changes to Table 11.......................................................................................................................................11   |                                                                |
| Moved Figure 3..............................................................................................................................................14 | Moved Figure 3..............................................................................................................................................14 | Moved Figure 3..............................................................................................................................................14 |                                                                |
| Changes to Table 19......................................................................................................................................27    | Changes to Table 19......................................................................................................................................27    | Changes to Table 19......................................................................................................................................27    |                                                                |
| Changes to Ordering Guide...........................................................................................................................92         | Changes to Ordering Guide...........................................................................................................................92         | Changes to Ordering Guide...........................................................................................................................92         |                                                                |
| 12/2021-Rev. 0 to Rev. A                                                                                                                                       |                                                                                                                                                                |                                                                                                                                                                |                                                                |
| Added 64-Lead LQFP_EP (SW-64-2)..............................................................................................................1                 | Added 64-Lead LQFP_EP (SW-64-2)..............................................................................................................1                 | Added 64-Lead LQFP_EP (SW-64-2)..............................................................................................................1                 |                                                                |
| Changes to V + Supply Current (I VP ) Parameter, Table 3.................................................................................                      | Changes to V + Supply Current (I VP ) Parameter, Table 3.................................................................................                      | Changes to V + Supply Current (I VP ) Parameter, Table 3.................................................................................                      | 5                                                              |
| Change to Regulator Start-Up Time (t WAKE ) Parameter, Table 4.....................................................................7                           | Change to Regulator Start-Up Time (t WAKE ) Parameter, Table 4.....................................................................7                           | Change to Regulator Start-Up Time (t WAKE ) Parameter, Table 4.....................................................................7                           |                                                                |
| Changes to Table 11.......................................................................................................................................11   | Changes to Table 11.......................................................................................................................................11   | Changes to Table 11.......................................................................................................................................11   |                                                                |
| Added Thermal Resistance Section and Table 12; Renumbered Sequentially..............................................11                                         | Added Thermal Resistance Section and Table 12; Renumbered Sequentially..............................................11                                         | Added Thermal Resistance Section and Table 12; Renumbered Sequentially..............................................11                                         |                                                                |
| Added Electrostatic Discharge (ESD) Ratings Section..................................................................................11                        | Added Electrostatic Discharge (ESD) Ratings Section..................................................................................11                        | Added Electrostatic Discharge (ESD) Ratings Section..................................................................................11                        |                                                                |
| Added ESD Ratings for ADBMS1818 and Table 13.......................................................................................11                          | Added ESD Ratings for ADBMS1818 and Table 13.......................................................................................11                          | Added ESD Ratings for ADBMS1818 and Table 13.......................................................................................11                          |                                                                |
| Changes to Figure 3......................................................................................................................................      | Changes to Figure 3......................................................................................................................................      | Changes to Figure 3......................................................................................................................................      | 12                                                             |

## TABLE OF CONTENTS

| Change to Figure 53......................................................................................................................................25   |    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Changes to Table 72......................................................................................................................................68   |    |
| Changes to Figure 96....................................................................................................................................      | 73 |
| Updated Outline Dimensions.........................................................................................................................91         |    |
| Changes to Ordering Guide...........................................................................................................................92        |    |
| Added Evaluation Boards..............................................................................................................................         | 92 |

## 1/2021-Revision 0: Initial Version

## SPECIFICATIONS

Specifications are at T A = 25°C, unless otherwise noted. The test conditions are V + = 59.4 V and V REG = 5.0 V, unless otherwise noted. The ISOMD pin is tied to the V -pin, unless otherwise noted.

## ADC DC SPECIFICATIONS

Table 1.

| Parameter              | Test Conditions/Comments                                                              | Min   | Typ   | Max   | Unit   |
|------------------------|---------------------------------------------------------------------------------------|-------|-------|-------|--------|
| Measurement Resolution |                                                                                       |       | 0.1   |       | mV/Bit |
| ADC Offset Voltage 1   |                                                                                       |       | 0.1   |       | mV     |
| ADC Gain Error 1       |                                                                                       |       | 0.01  |       | %      |
| TME in Normal Mode     | C(n) to C(n-1), GPIO(n) to V - = 0                                                    |       | ±0.2  |       | mV     |
|                        | C(n) to C(n-1) = 2.0                                                                  |       |       | ±2.6  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 2.0, apply over the full specified temperature range |       |       | ±2.8  | mV     |
|                        | C(n) to C(n-1) = 3.3                                                                  |       |       | ±3.0  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 3.3, apply over the full specified temperature range |       |       | ±4.0  | mV     |
|                        | C(n) to C(n-1) = 4.2                                                                  |       |       | ±3.8  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 4.2, apply over the full specified temperature range |       |       | ±4.8  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 5.0                                                  |       | ±1    |       | mV     |
|                        | Sum of all cells, apply over the full specified temperature range                     |       | ±0.05 | ±0.35 | %      |
|                        | Internal temperature, T = maximum specified temperature                               |       | ±5    |       | °C     |
|                        | V REG pin, apply over the full specified temperature range                            | -1    | -0.15 | 0     | %      |
|                        | V REF2 pin, apply over the full specified temperature range                           | -0.05 | 0.05  | 0.20  | %      |
|                        | Digital supply voltage, V REGD , apply over the full specified temperature range      | -0.5  | 0.5   | 1.5   | %      |
| TME in Filtered Mode   | C(n) to C(n-1), GPIO(n) to V - = 0                                                    |       | ±0.1  |       | mV     |
|                        | C(n) to C(n-1) = 2.0                                                                  |       |       | ±1.6  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 2.0, apply over the full specified temperature       |       |       | ±1.8  | mV     |
|                        | range C(n) to C(n-1) = 3.3                                                            |       |       | ±2.2  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 3.3, apply over the full specified temperature range |       |       | ±3.0  | mV     |
|                        | C(n) to C(n-1) = 4.2                                                                  |       |       | ±2.8  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 4.2, apply over the full specified temperature range |       |       | ±3.8  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 5.0                                                  |       | ±1    |       | mV     |
|                        | Sum of all cells, apply over the full specified temperature range                     |       | ±0.05 | ±0.35 | %      |
|                        | Internal temperature, T = maximum specified temperature                               |       | ±5    |       | °C     |
|                        | V REG pin, apply over the full specified temperature range                            | -1    | -0.15 | 0     | %      |
|                        | V REF2 pin, apply over the full specified temperature range                           | -0.05 | 0.05  | 0.20  | %      |
|                        | Digital supply voltage, V REGD , apply over the full specified temperature range      | -0.5  | 0.8   | 1.5   | %      |
| TME in Fast Mode       | C(n) to C(n-1), GPIO(n) to V - = 0                                                    |       | ±2    |       | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 2.0, apply over the full specified temperature range |       |       | ±6.5  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 3.3, apply over the full specified temperature range |       |       | ±8.5  | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 4.2, apply over the full specified temperature range |       |       | ±12.5 | mV     |
|                        | C(n) to C(n-1), GPIO(n) to V - = 5.0                                                  |       | ±10   |       | mV     |
|                        | Sum of all cells, apply over the full specified temperature range                     |       | ±0.15 | ±0.5  | %      |
|                        | Internal temperature, T = maximum specified temperature                               |       | ±5    |       | °C     |
|                        | V REG pin, apply over the full specified temperature range                            | -1.5  | -0.15 | 1     | %      |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                                            | Test Conditions/Comments                                                         | Min    | Typ   | Max        | Unit   |
|----------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|-------|------------|--------|
|                                                                      | V REF2 pin, apply over the full specified temperature range                      | -0.18  | 0.05  | 0.32       | %      |
|                                                                      | Digital supply voltage, V REGD , apply over the full specified temperature range | -2.5   | -0.4  | 2          | %      |
| Input Range                                                          | C(n), n = 1 to 18, apply over the full specified temperature range               | C(n-1) |       | C(n-1) + 5 | V      |
|                                                                      | C0, apply over the full specified temperature range                              | 0      |       | 1          | V      |
|                                                                      | GPIO(n), n = 1 to 9, apply over the full specified temperature range             | 0      |       | 5          | V      |
| Input Leakage Current (I L ) When Inputs Are Not Being Measured      | C(n), n = 0 to 18, apply over the full specified temperature range               |        | 10    | ±250       | nA     |
|                                                                      | GPIO(n), n = 1 to 9, apply over the full specified temperature range             |        | 10    | ±250       | nA     |
| Input Current When Inputs Are Being Measured (State: Core = Measure) | C(n), n = 0 to 18                                                                |        | ±1    |            | μA     |
|                                                                      | GPIO(n), n = 1 to 9                                                              |        | ±1    |            | μA     |
| Input Current During Open Wire Detection                             | Apply over the full specified temperature range                                  | 70     | 100   | 130        | μA     |

## VOLTAGE REFERENCE SPECIFICATIONS

Table 2.

| Parameter                                          | Test Conditions/Comments                                                       | Min   |    Typ | Max   | Unit     |
|----------------------------------------------------|--------------------------------------------------------------------------------|-------|--------|-------|----------|
| 1st Reference Voltage (V REF1 )                    | V REF1 pin, no load, apply over the full specified temperature range           | 3.0   |   3.15 | 3.3   | V        |
| 1st Reference Voltage Temperature Coefficient (TC) | V REF1 pin, no load                                                            |       |   3    |       | ppm/°C   |
| 1st Reference Voltage Thermal Hysteresis           | V REF1 pin, no load                                                            |       |  20    |       | ppm      |
| 1st Reference Voltage Long Term Drift              | V REF1 pin, no load                                                            |       |  20    |       | ppm/√KHR |
| 2nd Reference Voltage (V REF2 )                    | V REF2 pin, no load, apply over the full specified temperature range           | 2.993 |   3    | 3.007 | V        |
| 2nd Reference Voltage (V REF2 )                    | V REF2 pin, 5 kΩ load to V - , apply over the full specified temperature range | 2.992 |   3    | 3.008 | V        |
| 2nd Reference Voltage TC                           | V REF2 pin, no load                                                            |       |  10    |       | ppm/°C   |
| 2nd Reference Voltage Thermal Hysteresis           | V REF2 pin, no load                                                            |       | 100    |       | ppm      |
| 2nd Reference Voltage Long Term Drift              | V REF2 pin, no load                                                            |       |  60    |       | ppm/√KHR |

## GENERAL DC SPECIFICATIONS

Table 3.

| Parameter                                  | Test Conditions/Comments                                                                         | Min   |   Typ |    Max | Unit   |
|--------------------------------------------|--------------------------------------------------------------------------------------------------|-------|-------|--------|--------|
| V + Supply Current (I VP ) (See Figure 53) | State: core = sleep, isoSPI = idle, V REG = 0 V                                                  |       |  6.1  | 11     | µA     |
|                                            | State: core = sleep, isoSPI = idle, V REG = 0 V, apply over the full specified temperature range |       |  6.1  | 18     | µA     |
|                                            | State: core = sleep, isoSPI = idle, V REG = 5 V                                                  |       |  3    |  5     | µA     |
|                                            | State: core = sleep, isoSPI = idle, V REG = 5 V, apply over the full specified temperature range |       |  3    |  9     | µA     |
|                                            | State: core = standby                                                                            | 9     | 14    | 22     | µA     |
|                                            | State: core = standby, apply over the full specified temperature range                           | 6     | 14    | 28     | µA     |
|                                            | State: core = REFUP                                                                              | 0.4   |  0.55 |  0.8   | mA     |
|                                            | State: core = REFUP, apply over the full specified temperature range                             | 0.375 |  0.55 |  0.825 | mA     |
|                                            | State: core = measure                                                                            | 0.65  |  0.95 |  1.35  | mA     |

## SPECIFICATIONS

Table 3. (Continued)

| Parameter                                                                            | Test Conditions/Comments                                                                         | Min   | Typ   | Max   | Unit   |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
|                                                                                      | State: core = measure, apply over the full specified temperature range                           | 0.6   | 0.95  | 1.4   | mA     |
| V REG Supply Current (I REG(CORE) ) (See Figure 53)                                  | State: core = sleep, isoSPI = idle, V REG = 5 V                                                  |       | 3.1   | 6     | µA     |
|                                                                                      | State: core = sleep, isoSPI = idle, V REG = 5 V, apply over the full specified temperature range |       | 3.1   | 9     | µA     |
|                                                                                      | State: core = standby                                                                            | 10    | 35    | 60    | µA     |
|                                                                                      | State: core = standby, apply over the full specified temperature range                           | 6     | 35    | 65    | µA     |
|                                                                                      | State: core = REFUP                                                                              | 0.4   | 0.9   | 1.4   | mA     |
|                                                                                      | State: core = REFUP, apply over the full specified temperature range                             | 0.3   | 0.9   | 1.5   | mA     |
|                                                                                      | State: core = measure                                                                            | 14    | 15    | 16    | mA     |
|                                                                                      | State: core = measure, apply over the full specified temperature range                           | 13.5  | 15    | 16.5  | mA     |
| Additional V REG Supply Current If isoSPI Is in Ready/Active States (I REG(isoSPI) ) | ISOMD = 0, R B1 + R B2 = 2 kΩ, ready, apply over the full specified temperature range            | 3.6   | 4.5   | 5.2   | mA     |
| Note: Active State Current Assumes t CLK = 1 µs 1                                    | ISOMD = 0, R B1 + R B2 = 2 kΩ, active, apply over the full specified temperature range           | 5.6   | 6.8   | 8.1   | mA     |
|                                                                                      | ISOMD = 1, R B1 + R B2 = 2 kΩ, ready, apply over the full specified temperature range            | 4.0   | 5.2   | 6.5   | mA     |
|                                                                                      | ISOMD = 1, R B1 + R B2 = 2 kΩ, active, apply over the full specified temperature range           | 7.0   | 8.5   | 10.5  | mA     |
|                                                                                      | ISOMD = 0, R B1 + R B2 = 20 kΩ, ready, apply over the full specified temperature range           | 1.0   | 1.8   | 2.4   | mA     |
|                                                                                      | ISOMD = 0, R B1 + R B2 = 20 kΩ, active, apply over the full specified temperature range          | 1.3   | 2.3   | 3.3   | mA     |
|                                                                                      | ISOMD = 1, R B1 + R B2 = 20 kΩ, ready, apply over the full specified temperature range           | 1.6   | 2.5   | 3.5   | mA     |
|                                                                                      | ISOMD = 1, R B1 + R B2 = 20 kΩ, active, apply over the full specified temperature range          | 1.8   | 3.1   | 4.8   | mA     |
| V + Supply Voltage                                                                   | TME specifications met, apply over the full specified temperature range                          | 16    | 60    | 90    | V      |
| V + to C18 Voltage                                                                   | TME specifications met, apply over the full specified temperature range                          | -0.3  |       |       | V      |
| V + to C12 Voltage                                                                   | TME specifications met, apply over the full specified temperature range                          |       |       | 40    | V      |
| C13 Voltage                                                                          | TME specifications met, apply over the full specified temperature range                          | 2.5   |       |       | V      |
| C7 Voltage                                                                           | TME specifications met, apply over the full specified temperature range                          | 1     |       |       | V      |
| V REG Supply Voltage (V REG )                                                        | TME supply rejection < 1 mV/V, apply over the full specified temperature range                   | 4.5   | 5     | 5.5   | V      |
| DRIVE Output Voltage                                                                 | Sourcing 1 µA                                                                                    | 5.4   | 5.7   | 5.9   | V      |
| DRIVE Output Voltage                                                                 | Sourcing 1 µA, apply over the full specified temperature range                                   | 5.2   | 5.7   | 6.1   | V      |
| DRIVE Output Voltage                                                                 | Sourcing 500 µA, apply over the full specified temperature range                                 | 5.1   | 5.7   | 6.1   | V      |
| Digital Supply Voltage (V REGD )                                                     | Apply over the full specified temperature range                                                  | 2.7   | 3     | 3.6   | V      |
| Discharge Switch On Resistance                                                       | V CELL = 3.6 V, apply over the full specified temperature range                                  |       | 4     | 10    | Ω      |
| Thermal Shutdown Temperature                                                         |                                                                                                  |       | 150   |       | °C     |

## SPECIFICATIONS

Table 3. (Continued)

| Parameter                                 | Test Conditions/Comments                                                                        | Min   | Typ   |   Max | Unit   |
|-------------------------------------------|-------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| Watchdog Timer Pin Low (V OL(WDT) )       | WDT pin sinking 4 mA, apply over the full specified temperature range                           |       |       |   0.4 | V      |
| General-Purpose I/O Pin Low (V OL(GPIO) ) | GPIO pin sinking 4 mA (used as digital output), apply over the full specified temperature range |       |       |   0.4 | V      |

1 The active state current is calculated from dc measurements. The active state current is the additional average supply current into V REG when there are continuous 1 MHz communications on the isoSPI ports with 50% data 1s and 50% data 0s. Slower clock rates reduce the supply current.

## ADC TIMING SPECIFICATIONS

Table 4.

| Parameter                                                                                                                                                                            | Test Conditions/Comments                                                                                                    | Min     | Typ     | Max   | Unit   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|---------|---------|-------|--------|
| (t CYCLE ) (See Figure 55, Figure 56, and Figure 58)                                                                                                                                 |                                                                                                                             |         |         |       |        |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Normal Mode                                                                                             | Measure 18 cells, apply over the full specified temperature range                                                           | 2027    | 2343    | 2488  | µs     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Normal Mode                                                                                             | Measure 3 cells, apply over the full specified temperature range                                                            | 352     | 407     | 432   | µs     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Normal Mode                                                                                             | Measure 18 cells and 2 GPIO inputs, apply over the full specified temperature range                                         | 2717    | 3140    | 3335  | µs     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Filtered Mode                                                                                           | Measure 18 cells, apply over the full specified temperature range                                                           | 174.2   | 201.3   | 213.8 | ms     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Filtered Mode                                                                                           | Measure 3 cells, apply over the full specified temperature range                                                            | 29.1    | 33.6    | 35.7  | ms     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Filtered Mode                                                                                           | Measure 18 cells and 2 GPIO inputs, apply over the full specified temperature range                                         | 232.3   | 268.5   | 285.1 | ms     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Fast Mode                                                                                               | Measure 18 cells, apply over the full specified temperature range                                                           | 970     | 1121    | 1191  | µs     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Fast Mode                                                                                               | Measure 3 cells, apply over the full specified temperature range                                                            | 176     | 203     | 215   | µs     |
| Measurement and Calibration Cycle Time When Starting from the REFUP State in Fast Mode                                                                                               | Measure 18 cells and 2 GPIO inputs, apply over the full specified temperature range                                         | 1307    | 1511    | 1605  | µs     |
| Skew Time (t SKEW1 ). The Time Difference Between Cell 18 and GPIO1 Measurements, Command = ADCVAX (See Figure 58)                                                                   | Fast mode, apply over the full specified temperature range                                                                  | 168 470 | 194 543 | 206   | µs µs  |
|                                                                                                                                                                                      | Normal mode, apply over the full specified temperature range                                                                |         |         | 577   |        |
| Skew Time(t SKEW2 ). The Time Difference Between Cell 18 and Cell 1 Measurements, Command =                                                                                          | Fast mode, apply over the full specified temperature range                                                                  | 202     | 233     | 248   | µs     |
| ADCV (See Figure 55)                                                                                                                                                                 | Normal mode, apply over the full specified temperature range                                                                | 580     | 670     | 711   | µs     |
| Regulator Start-Up Time (t WAKE )                                                                                                                                                    | V REG generated from the DRIVE pin (see Figure 93), apply over the full specified temperature range                         |         | 200     | 400   | µs     |
| Watchdog or Discharge Timer (t SLEEP ) (See Figure 87)                                                                                                                               | DTEN pin = 0 or DCTO, Bits[3:0] = 0000, apply over the full specified temperature range                                     | 1.8     | 2       | 2.2   | sec    |
| Watchdog or Discharge Timer (t SLEEP ) (See Figure 87)                                                                                                                               | DTEN pin = 1 and DCTO, Bits[3:0] ≠ 0000                                                                                     | 0.5     |         | 120   | min    |
| Reference Wake-Up Time (t REFUP (See Figure 55)). Added to t CYCLE Time When Starting from the Standby State. t REFUP = 0 When Starting from Other States ADC Clock Frequency (f S ) | t REFUP is independent of the number of channels measured and the ADC mode, apply over the full specified temperature range | 2.7     | 3.5 3.3 | 4.4   | ms MHz |

## SPECIFICATIONS

## SPI DC SPECIFICATIONS

Table 5.

| Parameter                                                 | Test Conditions/Comments                                                              | Min   | Typ   | Max   | Unit   |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------|-------|-------|-------|--------|
| SPI Pin Digital Input Voltage High (V IH(SPI) )           | CSB, SCK, and SDI pins, apply over the full specified temperature range               | 2.3   |       |       | V      |
| SPI Pin Digital Input Voltage Low （ V IL(SPI) )           | CSB, SCK, and SDI pins, apply over the full specified temperature range               |       |       | 0.8   | V      |
| Configuration Pin Digital Input Voltage High (V IH(CFG) ) | ISOMD, DTEN, and GPIO1 to GPIO9 pins, apply over the full specified temperature range | 2.7   |       |       | V      |
| Configuration Pin Digital Input Voltage Low (V IL(CFG) )  | ISOMD, DTEN, and GPIO1 to GPIO9 pins, apply over the full specified temperature range |       |       | 1.2   | V      |
| Digital Input Current (I LEAK(DIG) )                      | CSB, SCK, SDI, ISOMD, and DTEN pins, apply over the full specified temperature range  |       |       | ±1    | μA     |
| Digital Output Low (V OL(SDO) )                           | SDO pin sinking 1 mA, apply over the full specified temperature range                 |       |       | 0.3   | V      |

## ISOSPI DC SPECIFICATIONS

See Figure 78.

Table 6.

| Parameter                                                | Test Conditions/Comments                                                                                                                                                | Min                          | Typ                          | Max                          | Unit        |
|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|------------------------------|------------------------------|-------------|
| Voltage on IBIAS Pin (V BIAS )                           | Ready/active state, apply over the full specified temperature range Idle state                                                                                          | 1.9                          | 2.0 0                        | 2.1                          | V V         |
| Isolated Interface Bias Current (I B )                   | R BIAS = 2 kΩ to 20 kΩ, apply over the full specified temperature range                                                                                                 | 0.1                          |                              | 1.0                          | mA          |
| Isolated Interface Current Gain (A IB )                  | Transmitter pulse amplitude (V A ) = ≤ 1.6 V, I B = 1 mA, apply over the full specified temperature range I B = 0.1 mA, apply over the full specified temperature range | 18 18                        | 20 20                        | 22 24.5                      | mA/mA mA/mA |
| Transmitter Pulse Amplitude (V A )                       | V A = IPx voltage (V IPx ) - IMx voltage (V IMx ), apply over the full specified temperature range                                                                      |                              |                              | 1.6                          | V           |
| Threshold-Setting Voltage on ICMP Pin (V ICMP )          | Receiver comparator threshold voltage (V TCMP ) = receiver comparator threshold voltage gain (A TCMP ) × V ICMP , apply over the full specified temperature range       | 0.2                          |                              | 1.5                          | V           |
| Input Leakage Current on ICMP Pin (I LEAK (ICMP) )       | V ICMP = 0 V to V REG , apply over the full specified temperature range                                                                                                 |                              |                              | ±1                           | µA          |
| Leakage Current on IPx and IMx Pins (I LEAK (IPx/ IMx) ) | Idle state, V IPx or V IMx , 0 V to V REG , apply over the full specified temperature range                                                                             |                              |                              | ±1                           | µA          |
| Receiver Comparator Threshold Voltage Gain (A TCMP )     | Receiver common-mode bias (V CM ) = V REG /2 to V REG - 0.2 V, V ICMP = 0.2 V to 1.5 V, apply over the full specified temperature range                                 | 0.4                          | 0.5                          | 0.6                          | V/V         |
| Receiver Common-Mode Bias (V CM )                        | IPx and IMx not driving                                                                                                                                                 | (V REG - V ICMP /3 - 167 mV) | (V REG - V ICMP /3 - 167 mV) | (V REG - V ICMP /3 - 167 mV) | V           |
| Receiver Input Resistance (R IN )                        | Single-ended to the IPA, IMA, IPB, and IMB pins, apply over the full specified temperature range                                                                        | 26                           | 35                           | 45                           | kΩ          |

## SPECIFICATIONS

## ISOSPI IDLE/WAKE-UP SPECIFICATIONS

See Figure 87.

Table 7.

| Parameter                                     | Test Conditions/Comments                                                                                        | Min   | Typ   | Max   | Unit   |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| Differential Wake-Up Voltage (V WAKE )        | Dwell time at V WAKE before wake detection (t DWELL ) = 240 ns, apply over the full specified temperature range | 200   |       |       | mV     |
| t DWELL                                       | V WAKE = 200 mV, apply over the full specified temperature range                                                | 240   |       |       | ns     |
| Start-Up Time After Wake Detection (t READY ) | Apply over the full specified temperature range                                                                 |       |       | 10    | µs     |
| Idle Timeout Duration (t IDLE )               | Apply over the full specified temperature range                                                                 | 4.3   | 5.5   | 6.7   | ms     |

## ISOSPI PULSE TIMING SPECIFICATIONS

See Figure 83.

Table 8.

| Parameter                                      | Test Conditions/Comments                                     |   Min |   Typ |   Max | Unit   |
|------------------------------------------------|--------------------------------------------------------------|-------|-------|-------|--------|
| Chip Select Half Pulse Width (t 1/2PW(CS) )    | Transmitter, apply over the full specified temperature range |   120 |   150 |   180 | ns     |
| Chip Select Signal Filter (t FILT(CS) )        | Receiver, apply over the full specified temperature range    |    70 |    90 |   110 | ns     |
| Chip Select Pulse Inversion Delay (t INV(CS) ) | Transmitter, apply over the full specified temperature range |   120 |   155 |   190 | ns     |
| Chip Select Valid Pulse Window (t WNDW(CS) )   | Receiver, apply over the full specified temperature range    |   220 |   270 |   330 | ns     |
| Data Half Pulse Width (t 1/2PW(D) )            | Transmitter, apply over the full specified temperature range |    40 |    50 |    60 | ns     |
| Data Signal Filter (t FILT(D) )                | Receiver, apply over the full specified temperature range    |    10 |    25 |    35 | ns     |
| Data Pulse Inversion Delay (t INV(D) )         | Transmitter, apply over the full specified temperature range |    40 |    55 |    65 | ns     |
| Data Valid Pulse Window (t WNDW(D) )           | Receiver, apply over the full specified temperature range    |    70 |    90 |   110 | ns     |

## SPI TIMING REQUIREMENTS

See Figure 77 and Figure 86.

Table 9.

| Parameter                                    | Test Conditions/Comments                                                  |    Min | Units   |
|----------------------------------------------|---------------------------------------------------------------------------|--------|---------|
| SCK Period (t CLK ) 1                        | Apply over the full specified temperature range                           |   1    | µs      |
| SDI Setup Time Before SCK Rising Edge (t 1 ) | Apply over the full specified temperature range                           |  25    | ns      |
| SDI Hold Time After SCK Rising Edge (t 2 ) d | Apply over the full specified temperature range                           |  25    | ns      |
| SCK Low (t 3 )                               | t CLK = t 3 + t 4 ≥ 1 µs, apply over the full specified temperature range | 200    | ns      |
| SCK High (t 4 )                              | t CLK = t 3 + t 4 ≥ 1 µs, apply over the full specified temperature range | 200    | ns      |
| CSB Rising Edge to CSB Falling Edge (t 5 )   | Apply over the full specified temperature range                           |   0.65 | µs      |
| SCK Rising Edge to CSB Rising Edge (t 6 ) 1  | Apply over the full specified temperature range                           |   0.8  | µs      |
| CSB Falling Edge to SCK Rising Edge (t 7 ) 1 | Apply over the full specified temperature range                           |   1    | µs      |

## SPECIFICATIONS

## ISOSPI TIMING SPECIFICATIONS

## See Figure 86.

Table 10.

| Parameter                                          | Test Conditions/Comments                                                                                 | Min   | Typ   |    Max | Units   |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------|-------|--------|---------|
| SCK Falling Edge to SDO Valid (t 8 ) 1             | Apply over the full specified temperature range                                                          |       |       |  60    | ns      |
| SCK Rising Edge to Short ±1 Transmit (t 9 )        | Apply over the full specified temperature range                                                          |       |       |  50    | ns      |
| CSB Transition to Long ±1 Transmit (t 10 )         | Apply over the full specified temperature range                                                          |       |       |  60    | ns      |
| CSB Rising Edge to SDO Rising (t 11 ) 1            | Apply over the full specified temperature range                                                          |       |       | 200    | ns      |
| Data Return Delay (t RTN )                         | Apply over the full specified temperature range                                                          | 325   | 375   | 425    | ns      |
| Chip-Select Daisy-Chain Delay (t DSY(CS) )         | Apply over the full specified temperature range                                                          |       | 120   | 180    | ns      |
| Data Daisy-Chain Delay (t DSY(D) )                 | Apply over the full specified temperature range                                                          | 200   | 250   | 300    | ns      |
| Data Daisy-Chain Lag (vs. Chip Select) (t LAG )    | = (t DSY(D) + t 1/2PW(D) ) - (t DSY(CS) + t 1/2PW(CS) ), apply over the full specified temperature range | 0     | 35    |  70    | ns      |
| Chip Select High to Low Pulse Governor (t 5(GOV) ) | Apply over the full specified temperature range                                                          | 0.6   |       |   0.82 | µs      |
| Data to Chip-Select Pulse Governor (t 6(GOV) )     | Apply over the full specified temperature range                                                          | 0.8   |       |   1.05 | µs      |
| isoSPI Port Reversal Blocking t BLOCK Window       | Apply over the full specified temperature range                                                          | 2     |       |  10    | µs      |

1 These specifications do not include rise or fall time of SDO. Although fall time (typically 5 ns due to the internal pull-down transistor) is not a concern, the rising edge transition time (t RISE ) is dependent on the pull-up resistance and load capacitance on the SDO pin. The time constant must be chosen such that SDO meets the setup time requirements of the microcontroller unit (MCU).

## ABSOLUTE MAXIMUM RATINGS

| Table 11. Parameter                                                                   | Rating                                |
|---------------------------------------------------------------------------------------|---------------------------------------|
| Total Supply Voltage, V + to V -                                                      | 112.5 V                               |
| Supply Voltage (Relative to C12), V + to C12                                          | 50 V                                  |
| Input Voltage (Relative to V - ) C0                                                   | -0.3 V to +6 V                        |
| C18                                                                                   | -0.3 V to MIN ( V + + 5.5 V, 112.5 V) |
| C(n), S(n)                                                                            | -0.3 V to MIN (8 × n, 112.5 V)        |
| IPA, IMA, IPB, and IMB                                                                | -0.3 V to V REG + 0.3 V, ≤ 6 V        |
| DRIVE                                                                                 | -0.3 V to +7 V                        |
| All Other Pins                                                                        | -0.3 V to +6 V                        |
| Voltage Between Inputs                                                                |                                       |
| C(n) to C(n-1) and S(n) to C(n-1)                                                     | -0.3 V to +8 V                        |
| C18 to C15, C15 to C12, C12 to C9, C9 to C6, C6 to C3, and C3 to C0                   | -0.3 V to +21 V                       |
| Current In and Out of Pins All Pins Except V REG , IPA, IMA, IPB, IMB, C(n), and S(n) | 10 mA                                 |
| IPA, IMA, IPB, and IMB                                                                | 30 mA                                 |
| Specified Junction Temperature Range ADBMS1818ASWZ and ADBMSASWAZ                     | -40°C to +85°C                        |
| ADBMS1818CSWAZ                                                                        | -40°C to +125°C                       |
| Junction Temperature (T JMAX )                                                        | 150°C                                 |
| Storage Temperature Range                                                             | -65°C to +150°C                       |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one-cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

## Table 12. Thermal Resistance

| Package Type 1   |   θ JA 2 |   θ JC | Unit   |
|------------------|----------|--------|--------|
| 05-08-1982       |       17 |    2.5 | °C/W   |
| SW-64-2          |       17 |    2.5 | °C/W   |

- 1 The exposed pad must be connected to the V- plane for proper thermal management.

2 Board layout impacts thermal characteristics such as θ JA .

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) and charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADBMS1818

Table 13. ADBMS1818, 64-Lead LQFP\_EP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±1000                     | 1C      |
| CDM         | ±750                      | C2b     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 14. Pin Function Descriptions

| Pin No.                                                                | Mnemonic           | Description                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                                                      | V +                | Positive Supply Pin.                                                                                                                                                                                                                                                                                                                         |
| 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38 | C0 to C18          | Cell Inputs.                                                                                                                                                                                                                                                                                                                                 |
| 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37     | S1 to S18          | Balance Inputs/Outputs. 18 internal N-channel metal-oxide semiconductor field effect transistors (MOSFETs) are connected between S(n) and C(n-1) for discharging cells.                                                                                                                                                                      |
| 39 to 47                                                               | GPIO1 to GPIO9     | General Purpose I/O. GPIO1 to GPIO9 can be used as digital inputs or digital outputs or as analog inputs with a measurement range from V - to 5 V. GPIO3, GPIO4, and GPIO5 can be used as I 2 C or SPI ports.                                                                                                                                |
| 48                                                                     | V REG              | 5 V Regulator Input. Bypass with an external 1 μF capacitor.                                                                                                                                                                                                                                                                                 |
| 49                                                                     | DRIVE              | Connect the base of an NPN transistor to the DRIVE pin. Connect the collector to V + and the emitter to V REG .                                                                                                                                                                                                                              |
| 50                                                                     | V REF2             | Buffered 2nd Reference Voltage for Driving Multiple 10 kΩ Thermistors. Bypass with an external 1 μF capacitor.                                                                                                                                                                                                                               |
| 51                                                                     | V REF1             | ADC Reference Voltage. Bypass with an external 1 μF capacitor. No dc loads allowed.                                                                                                                                                                                                                                                          |
| 52                                                                     | DTEN               | Discharge Timer Enable. Connect DTEN to V REG to enable the discharge timer.                                                                                                                                                                                                                                                                 |
| 53, 54, 61, 62                                                         | SDI, SDO, CSB, SCK | 4-Wire SPI. Active low chip select (CSB), serial clock (SCK), and serial data in (SDI) are digital inputs. Serial data out (SDO) is an open drain NMOS output pin. SDO requires a 5 kΩ pull-up resistor.                                                                                                                                     |
| 55                                                                     | ISOMD              | Serial Interface Mode. Connecting ISOMD to V REG configures Pin 53, Pin 54, Pin 61, and Pin 62 of the ADBMS1818 for 2-wire isoSPI mode. Connecting ISOMD to V - configures the ADBMS1818 for 4-wire SPI mode.                                                                                                                                |
| 56                                                                     | WDT                | Watchdog Timer Output Pin. This is an open drain negative metal-oxide semiconductor (NMOS) digital output. WDT can be left disconnected or connected with a 1 M resistor to V REG . If the ADBMS1818 does not receive a valid command within 2 seconds, the watchdog timer circuit resets the ADBMS1818 and the WDT pin goes high impedance. |
| 57                                                                     | IBIAS              | Isolated Interface Current Bias. Tie IBIAS to V - through a resistor divider to set the interface output current level. When the isoSPI interface is enabled, the IBIAS pin voltage is 2 V. The IPA and IMA or IPB and IMB output current drive is set to 20 times the current, IB, sourced from the IBIAS pin.                              |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## Table 14. Pin Function Descriptions (Continued)

| Pin No.   | Mnemonic    | Description                                                                                                                                                                                                                                         |
|-----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 58        | ICMP        | Isolated Interface Comparator Voltage Threshold Set. Tie ICMP to the resistor divider between IBIAS and V - to set the voltage threshold of the isoSPI receiver comparators. The comparator thresholds are set to half the voltage on the ICMP pin. |
| 59, 60    | V -         | Negative Supply Pins. The V - pins must be shorted together, external to the IC.                                                                                                                                                                    |
| 61, 62    | IMA, IPA    | Isolated 2-Wire Serial Interface Port A. IMA (negative) and IPA (positive) are a differential input/output pair.                                                                                                                                    |
| 63, 64    | IMB, IPB    | Isolated 2-Wire Serial Interface Port B. IMB (negative) and IPB (positive) are a differential input/output pair.                                                                                                                                    |
| 65        | EPAD (V - ) | Exposed Pad (V - ). The exposed pad must be soldered to the PCB.                                                                                                                                                                                    |

## Table 15. Serial Port Pins

| Port                                 | ISOMD = V REG   | ISOMD = V -   |
|--------------------------------------|-----------------|---------------|
| Port B                               | IPB             | IPB           |
| (Pin 57, Pin 58, Pin 63, and Pin 64) | IMB             | IMB           |
|                                      | ICMP            | ICMP          |
|                                      | IBIAS           | IBIAS         |
| Port A                               | NC              | SDO           |
| (Pin 53, Pin 54, Pin 61, and Pin 62) | NC              | SDI           |
|                                      | IPA             | SCK           |
|                                      | IMA             | CSB           |

## TYPICAL PERFORMANCE CHARACTERISTICS

TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 3. Cell 18 Measurement Error vs. Temperature

<!-- image -->

Figure 4. Measurement Noise vs. Input, Normal Mode

<!-- image -->

Figure 5. Measurement Noise vs. Input, Filtered Mode

<!-- image -->

Figure 6. Measurement Noise vs. Input, Fast Mode

Figure 7. Measurement Error Due to IR Reflow

<!-- image -->

Figure 8. Noise Filter Response

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Measurement Error vs. V REG

<!-- image -->

Figure 10. Measurement Error vs. V +

<!-- image -->

Figure 11. Top Cell Measurement Error vs. V +

<!-- image -->

Figure 12. Measurement Error vs. Common-Mode Voltage

Figure 13. Measurement Error Due to a V REG AC Disturbance

<!-- image -->

Figure 14. Measurement Error Due to a V +  AC Disturbance (PSRR is Power Supply Rejection Ratio)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 15. Measurement Error Common-Mode Rejection Ratio (CMRR) vs. Frequency

<!-- image -->

Figure 16. V REF1 and V REF2 Power-Up

<!-- image -->

Figure 17. V REG and V DRIVE Power-Up

<!-- image -->

Figure 18. Typical Wake-Up Pulse Amplitude, V WAKE vs. Wake-Up Dwell Time, t DWELL

Figure 19. Measurement Error vs. Temperature

<!-- image -->

Figure 20. Measurement Error vs. Input, Normal Mode

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 21. Measurement Error vs. Input, Filtered Mode

<!-- image -->

Figure 22. Measurement Error vs. Input, Fast Mode

<!-- image -->

Figure 23. Cell Measurement Error vs. Input RC Values

<!-- image -->

Figure 24. GPIO Measurement Error vs. Input RC Values

Figure 25. Measurement Time vs. Temperature

<!-- image -->

Figure 26. Sleep Supply Current vs. V +

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 27. Standby Supply Current vs. V +

<!-- image -->

Figure 28. REFUP Supply Current vs. V +

<!-- image -->

Figure 29. Measure Supply Current vs. V +

<!-- image -->

Figure 30. V REF1 vs. Temperature

Figure 31. V REF2 vs. Temperature

<!-- image -->

Figure 32. V REF2 and V REG Line Regulation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 37. V DRIVE and V + Line Regulation

<!-- image -->

<!-- image -->

<!-- image -->

Figure 38. V DRIVE Load Regulation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 39. Discharge Switch On Resistance vs. Cell Voltage

<!-- image -->

Figure 40. Increase in Die Temperature vs. Internal Discharge Current

<!-- image -->

Figure 41. Internal Die Temperature Measurement Error vs. Temperature

<!-- image -->

Figure 42. isoSPI Current (Ready) vs. Temperature

Figure 43. isoSPI Current (Active) vs. isoSPI Clock Frequency

<!-- image -->

Figure 44. IBIAS Pin Voltage vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 45. IBIAS Pin Voltage Load Regulation

<!-- image -->

Figure 46. isoSPI Driver Current Gain (Port A and Port B) vs. IBIAS Current

<!-- image -->

Figure 47. isoSPI Driver Current Gain (Port A and Port B) vs. Temperature

<!-- image -->

Figure 48. isoSPI Driver Common-Mode Voltage (Port A and Port B) vs. Pulse Amplitude

Figure 49. isoSPI Comparator Threshold Gain (Port A and Port B) vs. Receiver Common Mode

<!-- image -->

Figure 50. isoSPI Comparator Threshold Gain (Port A and Port B) vs. ICMP Voltage

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 51. isoSPI Comparator Threshold Gain (Port A and Port B) vs. Temperature

<!-- image -->

## FUNCTIONAL BLOCK DIAGRAM

Figure 52. Functional Block Diagram

<!-- image -->

## IMPROVEMENTS FROM THE LTC6811-1

The ADBMS1818 is an evolution of the LTC6811-1 design. Table 16 summarizes the feature changes and additions in the ADBMS1818.

Table 16.

| Additional ADBMS1818 Features                                                                                                                                                  | Benefits                                                                                  | Relevant Data Sheet Section(s)                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| The ADBMS1818 has 3 ADCs operating simultaneously vs. 2 ADCs on the LTC6811-1.                                                                                                 | 3 cells can be measured during each conversion cycle.                                     | ADC Operation                                                                             |
| In addition to the 3 ADC Digital filters, there is a 4th filter that is used for redundancy.                                                                                   | Checks that all digital filters are free of faults.                                       | ADC Conversion with Digital Redundancy for a description and PS, Bits[1:0] in Table 27    |
| Measure Cell 7 with ADC1 and ADC2 simultaneously and then measure Cell 13 with ADC2 and ADC3 simultaneously using the ADOL command.                                            | Checks that ADC2 is as accurate as ADC1 and also checks that ADC3 is as accurate as ADC2. | Overlap Cell Measurement (ADOL Command)                                                   |
| A monitoring feature can be enabled during the discharge timer. Cell balancing can be automatically terminated when cell voltages reach a programmable undervoltage threshold. | Improved cell balancing.                                                                  | Discharge Timer Monitor                                                                   |
| The internal discharge MOSFETs can provide 200 mA of balancing current (80 mA if the die temperature is over 85°C). The balancing current is independent of cell voltage.      | Faster cell balancing, especially for low cell voltages.                                  | Cell Balancing with Internal MOSFETs                                                      |
| The C0 pin voltage is allowed to range between 0 V and 1 V without affecting the TME.                                                                                          | C0 does not have to connect directly to V - .                                             | ADC DC Specifications                                                                     |
| The mute and unmute commands allow the host to turn off and turn on the discharge pins (S pins) without overwriting register values.                                           | Greater control of timing between S pins. Turning off and cell measurements.              | S Pin Muting                                                                              |
| Auxiliary measurements have an open-wire diagnostic feature                                                                                                                    | Improved fault detection.                                                                 | Auxiliary Open Wire Check (AXOW Command)                                                  |
| Four additional GPIO pins have been added for a total of nine.                                                                                                                 | Increased number of temperature or other sensors that can be measured.                    | Auxiliary (GPIO) Measurements (ADAX Command) and Auxiliary Open Wire Check (AXOW Command) |
| A daisy chain of ADBMS1818s can operate in both directions (both ports can be a master or slave).                                                                              | Redundant communication path.                                                             | Reversible isoSPI                                                                         |

## THEORY OF OPERATION

## STATE DIAGRAM

The operation of the ADBMS1818 is divided into two separate sections: the core circuit and the isoSPI circuit. Both sections have an independent set of operating states, as well as a shutdown timeout.

## ADBMS1818 CORE STATE DESCRIPTIONS

## Sleep State

The reference and ADCs are powered down. The watchdog timer (see the Watchdog and Discharge Timer section) has timed out. The discharge timer is either disabled or timed out. The supply currents are reduced to minimum levels. The isoSPI ports are in the idle state. The DRIVE pin is 0 V.

If a wake-up signal is received (see the Waking Up the Serial Interface section), the ADBMS1818 enters the standby state.

## Standby State

The reference and the ADCs are off. The watchdog timer and/or the discharge timer is running. The DRIVE pin powers the V REG pin to 5 V through an external transistor. Alternatively, V REG can be powered by an external supply.

When a valid ADC command is received or the REFON bit is set to 1 in Configuration Register Group A, the IC pauses for t REFUP to allow the reference to power up and then enters either the REFUP or measure state. Otherwise, if no valid commands are received for t SLEEP (when both the watchdog and discharge timer expire), the

ADBMS1818 returns to the sleep state. If the discharge timer is disabled, only the watchdog timer is relevant.

## REFUP State

To reach this state, the REFON bit in Configuration Register Group A must be set to 1 (using the WRCFGA command, see Table 52). The ADCs are off. The reference is powered up so that the ADBMS1818 can initiate ADC conversions more quickly than from the standby state.

When a valid ADC command is received, the IC goes to the measure state to begin the conversion. Otherwise, the ADBMS1818 returns to the standby state when the REFON bit is set to 0, either manually (using WRCFGA command) or automatically when the watchdog timer expires (the ADBMS1818 then moves straight into the sleep state if both timers are expired).

## Measure State

The ADBMS1818 performs ADC conversions in the measure state. The reference and ADCs are powered up.

After ADC conversions complete, the ADBMS1818 transitions to either the REFUP or standby state, depending on the REFON bit. Additional ADC conversions can be initiated more quickly by setting REFON = 1 to take advantage of the REFUP state.

Note that non ADC commands do not cause a core state transition. Only an ADC conversion or diagnostic commands place the core in the measure state.

Figure 53. ADBMS1818 Operation State Diagram

<!-- image -->

## THEORY OF OPERATION

## ISOSPI STATE DESCRIPTIONS

The ADBMS1818 has two isoSPI ports (Port A and Port B) for daisy-chain communication.

## Idle State

In the idle state, the isoSPI ports are powered down.

When isoSPI Port A or Port B receives a wake-up signal (see the Waking Up the Serial Interface section), the isoSPI enters the ready state. This transition happens quickly (within t READY ) if the core is in the standby state. If the core is in the sleep state when the isoSPI receives a wake-up signal, the core transitions to the ready state within t WAKE .

## Ready State

In the ready state, the isoSPI port(s) are ready for communication. The serial interface current in the ready state depends on the status of the ISOMD pin and R BIAS = R B1 + R B2 (the external resistors tied to the IBIAS pin). If there is no activity (that is, no wake-up signal) on Port A or Port B for greater than t IDLE , the ADBMS1818 enters the idle state. When the serial interface is transmitting or receiving data, the ADBMS1818 enters the active state.

## Active State

In the active state, the ADBMS1818 is transmitting and receiving data using one or both of the isoSPI ports. The serial interface consumes maximum power in the active state. The supply current increases with clock frequency as the density of isoSPI pulses increases.

Table 18. isoSPI Supply Current Equations

## POWER CONSUMPTION

The ADBMS1818 is powered via two pins: V + and V REG . The V + input requires voltage greater than or equal to the top cell voltage minus 0.3 V and provides power to the high voltage elements of the core circuits. The V REG input requires 5 V and provides power to the remaining core circuits and the isoSPI circuitry. The V REG input can be powered through an external transistor, driven by the regulated DRIVE output pin. Alternatively, V REG can be powered by an external supply.

The power consumption varies according to the operational states. Table 17 and Table 18 provide equations to approximate the supply pin currents in each state. The V + pin current depends only on the core state. However, the V REG pin current depends on both the core state and isoSPI state, and can therefore be divided into two components. The isoSPI interface draws current only from the V REG pin.

<!-- formula-not-decoded -->

In the sleep state, the V REG pin draws approximately 3.1 μA if powered by an external supply. Otherwise, the V + pin supplies the necessary current.

Table 17. Core Supply Current

| State       | I VP   | I REG(CORE)   |
|-------------|--------|---------------|
| Sleep       |        |               |
| V REG = 0 V | 6.1 µA | 0 µA          |
| V REG = 5 V | 3 µA   | 3.1 µA        |
| Standby     | 14 µA  | 35 µA         |
| REFUP       | 550 µA | 900 µA        |
| Measure     | 950 µA | 15 mA         |

| isoSPI State   | ISOMD Connection   | I REG(isoSPI)                                                                             |
|----------------|--------------------|-------------------------------------------------------------------------------------------|
| Idle           | Not applicable     | 0 mA                                                                                      |
| Ready          | V REG V -          | 2.2 mA + 3 × I B 1.5 mA + 3 × I B                                                         |
| Active         | V REG              | Write: 2.5mA + 3 + 20 × 100ns t CLK × I B Read: 2.5mA + 3 + 20 × 100ns ×1.5 t CLK × 100ns |
|                | V -                |                                                                                           |

+   20

×

t CLK

×   I

B

1. 8mA

+

3

## THEORY OF OPERATION

## ADC OPERATION

There are three ADCs inside the ADBMS1818. The three ADCs operate simultaneously when measuring 18 cells. Only one ADC is used to measure the general-purpose inputs. This section uses the term ADC to refer to one or all ADCs, depending on the operation being performed. This section refers to ADC1, ADC2, and ADC3 when it is necessary to distinguish between the three circuits, such as in the timing diagrams.

## ADC Modes

The ADCOPT bit (CFGAR0, Bit 0) in Configuration Register Group A and the mode selection bits, MD, Bits[1:0], in the conversion command together provide eight modes of operation for the ADC which correspond to different oversampling ratios (OSRs). The accuracy and timing of these modes are summarized in Table 19. In each mode, the ADC first measures the inputs and then performs a calibration of each channel. The names of the modes are based on the -3 dB bandwidth of the ADC measurement.

Mode 7 kHz (normal): In this mode, the ADC has high resolution and low TME. This mode is considered the normal operating mode because of the optimum combination of speed and accuracy.

Mode 27 kHz (fast): In this mode, the ADC has maximum throughput but has some increase in TME. Therefore, this mode is also

Table 19. ADC Filter Bandwidth and Accuracy

| Mode                  | -3 dB Filter BW   | -40 dB Filter BW   | TME Specification at 3.3 V, 25°C   | TME Specification at 3.3 V, -40°C, +85°C (ADBMS1818CSWAZ, +125°C)   |
|-----------------------|-------------------|--------------------|------------------------------------|---------------------------------------------------------------------|
| 27 kHz (Fast Mode)    | 27 kHz            | 84 kHz             | ±8.5 mV                            | ±8.5 mV                                                             |
| 14 kHz                | 13.5 kHz          | 42 kHz             | ±8.5 mV                            | ±8.5 mV                                                             |
| 7 kHz (Normal Mode)   | 6.8 kHz           | 21 kHz             | ±3 mV                              | ±4 mV                                                               |
| 3 kHz                 | 3.4 kHz           | 10.5 kHz           | ±3 mV                              | ±4 mV                                                               |
| 2 kHz                 | 1.7 kHz           | 5.3 kHz            | ±3 mV                              | ±4 mV                                                               |
| 1 kHz                 | 845 Hz            | 2.6 kHz            | ±3 mV                              | ±4 mV                                                               |
| 422 Hz                | 422 Hz            | 1.3 kHz            | ±3 mV                              | ±4 mV                                                               |
| 26 Hz (Filtered Mode) | 26 Hz             | 82 Hz              | ±2.2 mV                            | ±3.0 mV                                                             |

referred to as the fast mode. The increase in speed comes from a reduction in the OSR. This increase results in an increase in noise and average measurement error.

Mode 26 Hz (filtered): In this mode, the ADC digital filter -3 dB frequency is lowered to 26 Hz by increasing the OSR. This mode is also referred to as the filtered mode due to its low -3 dB frequency. The accuracy is similar to the 7 kHz (normal) mode with lower noise.

Modes 14 kHz, 3 kHz, 2 kHz, 1 kHz, and 422 Hz: Modes 14 kHz, 3 kHz, 2 kHz, 1 kHz, and 422 Hz provide additional options to set the ADC digital filter -3 dB at 13.5 kHz, 3.4 kHz, 1.7 kHz, 845 Hz, and 422 Hz, respectively. The accuracy of the 14 kHz mode is similar to the 27 kHz (fast) mode. The accuracy of the 3 kHz, 2 kHz, 1 kHz, and 422 Hz modes is similar to the 7 kHz (normal) mode.

The filter bandwidths and the conversion times for these modes are provided in Table 19. If the core is in the standby state, an additional t REFUP time is required to power up the reference before beginning the ADC conversions. The reference can remain powered up between ADC conversions if the REFON bit in Configuration Register Group A is set to 1 so that the core is in REFUP state after delay t REFUP . The subsequent ADC commands do not have the t REFUP delay before beginning ADC conversions.

## THEORY OF OPERATION

## ADC Range and Resolution

The C inputs and GPIO inputs have the same range and resolution. The ADC inside the ADBMS1818 has an approximate range from -0.82 V to +5.73 V. Negative readings are rounded to 0 V. The format of the data is a 16-bit unsigned integer where the LSB represents 100 μV. Therefore, a reading of 0x80E8 (33,000 decimal) indicates a measurement of 3.3 V.

Δ-Σ ADCs have quantization noise which depends on the input voltage, especially at low oversampling ratios, such as in fast mode. In some of the ADC modes, the quantization noise increases as the input voltage approaches the upper and lower limits of the ADC range. For example, the total measurement noise vs. input voltage in normal and filtered modes is shown in Figure 54.

The specified range of the ADC is 0 V to 5 V. In Table 20, the precision range of the ADC is arbitrarily defined as 0.5 V to 4.5 V. This range is where the quantization noise is relatively constant even in the lower OSR modes (see Figure 54). Table 20 summarizes the total noise in this range for all eight ADC operating modes. Also shown in Table 20 is the noise free resolution. For example, 14-bit noise free resolution in normal mode implies that the top 14 bits are noise free with a dc input, but that the 15th and 16th LSBs flicker.

Figure 54. Measurement Noise vs. Input Voltage

<!-- image -->

Table 20. ADC Range and Resolution

| Mode           | Full Range 1           | Specified Range   | Precision Range 2   | LSB    | Format           | Maximum Noise   | Noise Free Resolution 3   |
|----------------|------------------------|-------------------|---------------------|--------|------------------|-----------------|---------------------------|
| 27 kHz (Fast)  | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±4 mV p-p       | 10 bits                   |
| 14 kHz         | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±1 mV p-p       | 12 bits                   |
| 7 kHz (Normal) | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±250 μV p-p     | 14 bits                   |
| 3 kHz          | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±150 μV p-p     | 14 bits                   |
| 2 kHz          | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±100 μV p-p     | 15 bits                   |
| 1 kHz          | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±100 μV p-p     | 15 bits                   |

## ADC Range vs. Voltage Reference Value

Typical ADCs have a range that is exactly twice the value of the voltage reference, and the ADC measurement error is directly proportional to the error in the voltage reference. The ADBMS1818 ADC is not typical.

The absolute value of V REF1 is trimmed up or down to compensate for gain errors in the ADC. Therefore, the ADC TME specifications are superior to the V REF1 specifications. For example, the 25°C specification of the TME when measuring 3.300 V in 7 kHz (normal) mode is ±3 mV, and the 25°C specification for V REF1 is 3.150 V ± 150 mV.

## Measuring Cell Voltages (ADCV Command)

The ADCV command initiates the measurement of the battery cell inputs, Pin C0 through Pin C18. This command has options to select the number of channels to measure and the ADC mode. See the Commands section for the ADCV command format.

Figure 55 shows the timing of the ADCV command that measures all 18 cells. After the receipt of the ADCV command to measure all 18 cells, ADC1 sequentially measures the bottom 6 cells. ADC2 measures the middle 6 cells and ADC3 measures the top 6 cells. After the cell measurements complete, each channel is calibrated to remove any offset errors.

Table 21 shows the conversion times for the ADCV command measuring all 18 cells. The total conversion time is given by t 6C which indicates the end of the calibration step.

Figure 56 shows the timing of the ADCV command that measures only 3 cells.

## THEORY OF OPERATION

Table 20. ADC Range and Resolution (Continued)

| Mode             | Full Range 1           | Specified Range   | Precision Range 2   | LSB    | Format           | Maximum Noise   | Noise Free Resolution 3   |
|------------------|------------------------|-------------------|---------------------|--------|------------------|-----------------|---------------------------|
| 422 Hz           | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±100 μV p-p     | 15 bits                   |
| 26 Hz (Filtered) | -0.8192 V to +5.7344 V | 0 V to 5 V        | 0.5 V to 4.5 V      | 100 μV | Unsigned 16 bits | ±50 μV p-p      | 16 bits                   |

Figure 55. Timing for ADCV Command Measuring all 18 Cells

<!-- image -->

Table 21. Conversion and Synchronization Times for ADCV Command Measuring All 18 Cells in Different Modes

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Synchronization Time (μs)   |
|--------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-----------------------------|
| Mode   | t 0                     | t 1M                    | t 2M                    | t 5M                    | t 6M                    | t 6C                    | t SKEW2                     |
| 27 kHz | 0                       | 58                      | 104                     | 244                     | 291                     | 1,121                   | 233                         |
| 14 kHz | 0                       | 87                      | 163                     | 390                     | 466                     | 1,296                   | 379                         |
| 7 kHz  | 0                       | 145                     | 279                     | 681                     | 815                     | 2343                    | 670                         |
| 3 kHz  | 0                       | 261                     | 512                     | 1263                    | 1513                    | 3041                    | 1252                        |
| 2 kHz  | 0                       | 494                     | 977                     | 2426                    | 2909                    | 4437                    | 2415                        |
| 1 kHz  | 0                       | 960                     | 1,908                   | 4753                    | 5702                    | 7230                    | 4742                        |
| 422 Hz | 0                       | 1890                    | 3770                    | 9408                    | 11,287                  | 12,816                  | 9397                        |
| 26 Hz  | 0                       | 29,818                  | 59,624                  | 149,044                 | 178,851                 | 201,325                 | 149,033                     |

Figure 56. Timing for ADCV Command Measuring 3 Cells

<!-- image -->

Table 22 shows the conversion time for the ADCV command measuring only 3 cells. t 1C indicates the total conversion time for this command.

Table 22. Conversion Times for ADCV Command Measuring 3 Cells in Different Modes

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   |
|--------|-------------------------|-------------------------|-------------------------|
| Mode   | t 0                     | t 1M                    | t 1C                    |
| 27 kHz | 0                       | 58                      | 203                     |

## THEORY OF OPERATION

Table 22. Conversion Times for ADCV Command Measuring 3 Cells in Different Modes (Continued)

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   |
|--------|-------------------------|-------------------------|-------------------------|
| Mode   | t 0                     | t 1M                    | t 1C                    |
| 14 kHz | 0                       | 87                      | 232                     |
| 7 kHz  | 0                       | 145                     | 407                     |
| 3 kHz  | 0                       | 261                     | 523                     |
| 2 kHz  | 0                       | 494                     | 756                     |
| 1 kHz  | 0                       | 960                     | 1221                    |
| 422 Hz | 0                       | 1890                    | 2152                    |
| 26 Hz  | 0                       | 29,818                  | 33,570                  |

## THEORY OF OPERATION

## Undervoltage and Overvoltage Monitoring

Whenever the C inputs are measured, the results are compared to undervoltage and overvoltage thresholds stored in the memory. If the reading of a cell is above the overvoltage limit, a bit in the memory is set as a flag. Similarly, measurement results below the undervoltage limit cause a flag to be set. The overvoltage and undervoltage thresholds are stored in Configuration Register Group A. The flags are stored in Status Register Group B and Auxiliary Register Group D.

## Auxiliary (GPIO) Measurements (ADAX Command)

The ADAX command initiates the measurement of the GPIO inputs. This command has options to select which GPIO input to measure (GPIO1 to GPIO9) and which ADC mode to use. The ADAX command also measures the 2nd reference. There are options in the ADAX command to measure subsets of the GPIOs and the 2nd reference separately or to measure all nine GPIOs and the 2nd reference in a single command. See the Commands section for the ADAX command format. All auxiliary measurements are relative to the V -pin voltage. This command can be used to read external temperatures by connecting temperature sensors to the GPIOs. These sensors can be powered from the 2nd reference, which is also measured by the ADAX command, resulting in precise ratiometric measurements.

Figure 57 shows the timing of the ADAX command measuring all nine GPIOs and the 2nd reference. All 10 measurements are carried out on ADC1 alone. The 2nd reference is measured after GPIO5 and before GPIO6.

Table 23 shows the conversion time for the ADAX command measuring all nine GPIOs and the 2nd reference. t 10C indicates the total conversion time.

Figure 57. Timing for ADAX Command Measuring All GPIOs and 2nd Reference

<!-- image -->

Table 23. Conversion and Synchronization Times for ADAX Command Measuring All GPIOs and 2nd Reference in Different Modes

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Synchronization Time (μs)   |
|--------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-----------------------------|
| Mode   | t 0                     | t 1M                    | t 2M                    | t 9M                    | t 10M                   | t 10C                   | t SKEW                      |
| 27 kHz | 0                       | 58                      | 104                     | 431                     | 478                     | 1825                    | 420                         |
| 14 kHz | 0                       | 87                      | 163                     | 693                     | 769                     | 2116                    | 682                         |
| 7 kHz  | 0                       | 145                     | 279                     | 1217                    | 1350                    | 3862                    | 1205                        |
| 3 kHz  | 0                       | 261                     | 512                     | 2264                    | 2514                    | 5025                    | 2253                        |
| 2 kHz  | 0                       | 494                     | 977                     | 4358                    | 4841                    | 7353                    | 4347                        |
| 1 kHz  | 0                       | 960                     | 1908                    | 8547                    | 9496                    | 12,007                  | 8536                        |
| 422 Hz | 0                       | 1890                    | 3770                    | 16,926                  | 18,805                  | 21,316                  | 16,915                      |
| 26 Hz  | 0                       | 29,818                  | 59,624                  | 268,271                 | 298,078                 | 335,498                 | 268,260                     |

## THEORY OF OPERATION

## Auxiliary (GPIO) Measurements with Digital Redundancy (ADAXD Command)

The ADAXD command operates similarly to the ADAX command except that an additional diagnostic is performed using digital redundancy. PS, Bits[1:0] in Configuration Register Group B must be set to 0 or 1 during the ADAXD command to enable redundancy. See the ADC Conversion with Digital Redundancy section.

The execution time of the ADAX command and the ADAXD command is the same.

## Measuring Cell Voltages and GPIOs (ADCVAX Command)

The ADCVAX command combines 18 cell measurements with 2 GPIO measurements (GPIO1 and GPIO2). This command simpli-

Figure 58. Timing of ADCVAX Command

<!-- image -->

Table 24. Conversion and Synchronization Times for ADCVAX Command in Different Modes

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Synchronization Time (μs)   |
|--------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-----------------------------|
| Mode   | t 0                     | t 1M                    | t 2M                    | t 3M                    | t 4M                    | t 5M t 6M               | t 7M                    | t 8M                    | t 8C                    | t SKEW1                     |
| 27 kHz | 0                       | 58                      | 104                     | 151                     | 205                     | 252 306                 | 352                     | 399                     | 1511                    | 194                         |
| 14 kHz | 0                       | 87                      | 163                     | 238                     | 321                     | 397 480                 | 556                     | 632                     | 1744                    | 310                         |
| 7 kHz  | 0                       | 145                     | 279                     | 413                     | 554                     | 688 829                 | 963                     | 1097                    | 3140                    | 543                         |
| 3 kHz  | 0                       | 261                     | 512                     | 762                     | 1020                    | 1270 1527               | 1778                    | 2028                    | 4071                    | 1008                        |
| 2 kHz  | 0                       | 494                     | 977                     | 1460                    | 1,950                   | 2433 2924               | 3407                    | 3890                    | 5933                    | 1939                        |
| 1 kHz  | 0                       | 960                     | 1908                    | 2857                    | 3812                    | 4761 5717               | 6665                    | 7613                    | 9657                    | 3801                        |
| 422 Hz | 0                       | 1890                    | 3770                    | 5649                    | 7536                    | 9415 11,302             | 13,181                  | 15,061                  | 17,104                  | 7525                        |
| 26 Hz  | 0                       | 29,818                  | 59,624                  | 89,431                  | 119,245                 | 149,052 178,866         | 208,672                 | 238,479                 | 268,450                 | 119,234                     |

fies the synchronization of battery cell voltage and current measurements when current sensors are connected to the GPIO1 or GPIO2 inputs. Figure 58 shows the timing of the ADCVAX command. See the Commands section for the ADCVAX command format. The synchronization of the current and voltage measurements, t SKEW1 , in fast mode is within 194 μs.

Table 24 shows the conversion and synchronization time for the ADCVAX command in different modes. The total conversion time for the command is given by t 8C .

## THEORY OF OPERATION

## DATA ACQUISITION SYSTEM DIAGNOSTICS

The battery monitoring data acquisition system is comprised of the multiplexers, ADCs, 1st reference, digital filters, and memory. To ensure long term reliable performance, there are several diagnostic commands that can be used to verify the proper operation of these circuits.

## Measuring Internal Device Parameters (ADSTAT Command)

The ADSTAT command is a diagnostic command that measures the following internal device parameters: Sum of all cells (SC), internal die temperature (ITMP), analog power supply (VA), and digital power supply (VD). These parameters are described in Sum of All Cells Measurement section, Internal Die Temperature Measurement section, and Power Supply Measurements section. All 8 ADC modes described in the ADC Modes section are available for these conversions. See the Commands section for the ADSTAT command format. Figure 59 shows the timing of the ADSTAT command measuring all 4 internal device parameters.

Table 25 shows the conversion time of the ADSTAT command measuring all 4 internal parameters. t 4C indicates the total conversion time for the ADSTAT command.

Figure 59. Timing for ADSTAT Command Measuring SC, ITMP, VA, and VD

<!-- image -->

Table 25. Conversion and Synchronization Times for ADSTAT Command Measuring SC, ITMP, VA, and VD in Different Modes

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Synchronization Time (μs)   |
|--------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-----------------------------|
| Mode   | t 0                     | t 1M                    | t 2M                    | t 3M                    | t 4M                    | t 4C                    | t SKEW                      |
| 27 kHz | 0                       | 58                      | 104                     | 151                     | 198                     | 742                     | 140                         |
| 14 kHz | 0                       | 87                      | 163                     | 238                     | 314                     | 858                     | 227                         |
| 7 kHz  | 0                       | 145                     | 279                     | 413                     | 547                     | 1556                    | 402                         |
| 3 kHz  | 0                       | 261                     | 512                     | 762                     | 1012                    | 2022                    | 751                         |
| 2 kHz  | 0                       | 494                     | 977                     | 1460                    | 1943                    | 2953                    | 1449                        |
| 1 kHz  | 0                       | 960                     | 1908                    | 2857                    | 3805                    | 4814                    | 2845                        |
| 422 Hz | 0                       | 1890                    | 3770                    | 5649                    | 7529                    | 8538                    | 5638                        |
| 26 Hz  | 0                       | 29,818                  | 59,624                  | 89,431                  | 119,238                 | 134,211                 | 89,420                      |

## THEORY OF OPERATION

## Sum of All Cells Measurement

The sum of all cells (SC) measurement is the voltage between C18 and C0 with a 30:1 attenuation. The 16-bit ADC value of sum of all cells measurement is stored in Status Register Group A. Any potential difference between the C0 and V -pins results in an error in the SC measurement equal to this difference. From the SC value, the sum of all cell voltage measurements is given by:

Sum of all cells = SC × 30 × 100 µV

## Internal Die Temperature Measurement

The ADSTAT command can measure the internal die temperature (ITMP). The 16-bit ADC value of the ITMP is stored in Status Register Group A. From ITMP, the actual die temperature is calculated using the expression:

Internal Die Temperature (°C) =

<!-- formula-not-decoded -->

## Power Supply Measurements

The ADSTAT command is also used to measure the analog power supply (V REG) and digital power supply (V REGD ). The 16-bit ADC value of the analog power supply measurement (VA) is stored in Status Register Group A. The 16-bit ADC value of the digital power supply measurement (VD) is stored in Status Register Group B. From VA and VD, the power supply measurements are given by:

Analog power supply measurement (V REG ) = VA × 100 µV

Digital power supply measurement (V REGD ) = VD × 100 µV

The value of V REG is determined by external components. V REG must be between 4.5 V and 5.5 V to maintain accuracy. The value of V REGD is determined by internal components. The normal range of V REGD is 2.7 V to 3.6 V.

## Measuring Internal Device Parameters with Digital Redundancy (ADSTATD Command)

The ADSTATD command operates similarly to the ADSTAT command except that an additional diagnostic is performed using digital redundancy. PS, Bits[1:0] in Configuration Register Group B must be set to 0 or 1 during the ADSTATD command to enable redundancy. See the ADC Conversion with Digital Redundancy section.

The execution time of the ADSTAT command and the ADSTATD command is the same.

## ADC Conversion with Digital Redundancy

Each of the three internal ADCs contains its own digital integration and differentiation machine. The ADBMS1818 also contains a fourth digital integration and differentiation machine that is used for redundancy and error checking.

All of the ADC and self test commands, except ADAX and ADSTAT, can operate with digital redundancy. This includes ADCV, ADOW, CVST, ADOL, ADAXD, AXOW, AXST, ADSTATD, STATST, ADCVAX, and ADCVSC. When performing an ADC conversion with redundancy, the analog modulator sends its bit stream to both the primary digital machine and the redundant digital machine. At the end of the conversion, the results from the two machines are compared. If any mismatch occurs, a value of 0xFF0X (≥6.528 V) is written to the result register. This value is outside of the clamping range of the ADC and the host identifies this as a fault indication. The last four bits are used to indicate which nibble(s) of the result values did not match.

Table 26. Indication of Digital Redundancy Fault Bit Location

| Result                | Indication                            |
|-----------------------|---------------------------------------|
| 0b1111_1111_0000_0XXX | No fault detected in Bit 15 to Bit 12 |
| 0b1111_1111_0000_1XXX | Fault detected in Bit 15 to Bit 12    |
| 0b1111_1111_0000_X0XX | No fault detected in Bit 11 to Bit 8  |
| 0b1111_1111_0000_X1XX | Fault detected in Bit 11 to Bit 8     |
| 0b1111_1111_0000_XX0X | No fault detected in Bit 7 to Bit 4   |
| 0b1111_1111_0000_XX1X | Fault detected in Bit 7 to Bit 4      |
| 0b1111_1111_0000_XXX0 | No fault detected in Bit 3 to Bit 0   |
| 0b1111_1111_0000_XXX1 | Fault detected in Bit 3 to Bit 0      |

Because there is a single redundant digital machine, the machine can apply redundancy to only one ADC at a time. By default, the ADBMS1818 automatically selects the ADC path redundancy. However, the user can choose an ADC redundancy path selection by writing to the PS, Bits[1:0] in Configuration Register Group B.

Table 27 shows all possible ADC path redundancy selections.

When the FDRF bit in Configuration Register Group B is written to 1, this bit forces the digital redundancy comparison to fail during subsequent ADC conversions.

## Measuring Cell Voltages and Sum of All Cells (ADCVSC Command)

The ADCVSC command combines 18 cell measurements and the sum of all cells measurement. This command simplifies the synchronization of the individual battery cell voltage and the total sum of all cells measurements. Figure 60 shows the timing of the ADCVSC command. See the Commands section for the ADCVSC command format. The synchronization of the cell voltage and sum of all cells measurements, t SKEW , in fast mode is within 147 μs.

Table 28 shows the conversion and synchronization time for the ADCVSC command in different modes. The total conversion time for the command is given by t 7C .

## THEORY OF OPERATION

Table 27. ADC Path Redundancy Selection

|                 | PS, Bits[1:0] = 00   | PS, Bits[1:0] = 00   | PS, Bits[1:0] = 01   | PS, Bits[1:0] = 01   | PS, Bits[1:0] = 10   | PS, Bits[1:0] = 10   | PS, Bits[1:0] = 11   | PS, Bits[1:0] = 11   |
|-----------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Measure         | Path Select          | Redundant Measure    | Path Select          | Redundant Measure    | Path Select          | Redundant Measure    | Path Select          | Redundant Measure    |
| Cells 1, 7, 13  | ADC1                 | Cell 1               | ADC1                 | Cell 1               | ADC2                 | Cell 7               | ADC3                 | Cell 13              |
| Cells 2, 8, 14  | ADC2                 | Cell 8               | ADC1                 | Cell 2               | ADC2                 | Cell 8               | ADC3                 | Cell 14              |
| Cells 3, 9, 15  | ADC3                 | Cell 15              | ADC1                 | Cell 3               | ADC2                 | Cell 9               | ADC3                 | Cell 15              |
| Cells 4, 10, 16 | ADC1                 | Cell 4               | ADC1                 | Cell 4               | ADC2                 | Cell 10              | ADC3                 | Cell 16              |
| Cells 5, 11, 17 | ADC2                 | Cell 11              | ADC1                 | Cell 5               | ADC2                 | Cell 11              | ADC3                 | Cell 17              |
| Cells 6, 12, 18 | ADC3                 | Cell 18              | ADC1                 | Cell 6               | ADC2                 | Cell 12              | ADC3                 | Cell 18              |
| Cell 7 (ADOL)   | ADC2                 | Cell 7               | ADC1                 | Cell 7               | ADC2                 | Cell 7               | ADC3                 | N/A 1                |
| Cell 13 (ADOL)  | ADC2                 | Cell 13              | ADC1                 | N/A 1                | ADC2                 | Cell 13              | ADC3                 | Cell 13              |
| GPIO[n] 2       | ADC1                 | GPIO[n]              | ADC1                 | GPIO[n]              | ADC2                 | N/A 1                | ADC3                 | N/A 1                |
| 2nd Reference 2 | ADC1                 | 2nd Reference        | ADC1                 | 2nd Reference        | ADC2                 | N/A 1                | ADC3                 | N/A 1                |
| SC 2            | ADC1                 | SC                   | ADC1                 | SC                   | ADC2                 | N/A 1                | ADC3                 | N/A 1                |
| ITMP 2          | ADC1                 | ITMP                 | ADC1                 | ITMP                 | ADC2                 | N/A 1                | ADC3                 | N/A 1                |
| VA 2            | ADC1                 | VA                   | ADC1                 | VA                   | ADC2                 | N/A 1                | ADC3                 | N/A 1                |
| VD 2            | ADC1                 | VD                   | ADC1                 | VD                   | ADC2                 | N/A 1                | ADC3                 | N/A 1                |

1 N/A means not applicable.

2 Note that the ADAX and ADSTAT commands are identical to the ADAXD and ADSTATD commands except that ADAX and ADSTAT do not apply any digital redundancy.

Figure 60. Timing of ADCVSC Command Measuring All 19 Cells, SC

<!-- image -->

Table 28. Conversion and Synchronization Times for ADCVSC Command in Different Modes

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Synchronization Time (μs)   |
|--------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-----------------------------|
| Mode   | t 0                     | t 1M                    | t 2M                    | t 3M                    | t 4M                    | t 5M                    | t 6M                    | t 7M                    | t 7C                    | t SKEW                      |
| 27 kHz | 0                       | 58                      | 104                     | 151                     | 205                     | 259                     | 306                     | 352                     | 1331                    | 147                         |
| 14 kHz | 0                       | 87                      | 163                     | 238                     | 321                     | 404                     | 480                     | 556                     | 1534                    | 235                         |
| 7 kHz  | 0                       | 145                     | 279                     | 413                     | 554                     | 695                     | 829                     | 963                     | 2756                    | 409                         |
| 3 kHz  | 0                       | 261                     | 512                     | 762                     | 1020                    | 1277                    | 1527                    | 1778                    | 3571                    | 758                         |
| 2 kHz  | 0                       | 494                     | 977                     | 1460                    | 1950                    | 2441                    | 2924                    | 3407                    | 5200                    | 1456                        |
| 1 kHz  | 0                       | 960                     | 1908                    | 2857                    | 3812                    | 4768                    | 5717                    | 6665                    | 8458                    | 2853                        |
| 422 Hz | 0                       | 1890                    | 3770                    | 5649                    | 7536                    | 9423                    | 11,302                  | 13,181                  | 14,974                  | 5645                        |
| 26 Hz  | 0                       | 29,818                  | 59,624                  | 89,431                  | 119,245                 | 149,059                 | 178,866                 | 208,672                 | 234,902                 | 89,427                      |

## THEORY OF OPERATION

## Overlap Cell Measurement (ADOL Command)

The ADOL command first simultaneously measures Cell 7 with ADC1 and ADC2. Then, the ADOL command simultaneously measures Cell 13 with both ADC2 and ADC3. The host can compare the results against each other to look for inconsistencies that may indicate a fault. The result of the Cell 7 measurement from ADC2 is placed in Cell Voltage Register Group C where the Cell 7 result normally resides. The result from ADC1 is placed in Cell Voltage Register Group C where the Cell 8 result normally resides. The result of the Cell 13 measurement from ADC3 is placed in Cell Voltage Register Group E where the Cell 13 result normally resides. The result from ADC2 is placed in Cell Voltage Register Group E where the Cell 14 result normally resides. Figure 61 shows the timing of the ADOL command. See the Commands section for the ADOL command format.

Figure 61. Timing for ADOL Command

<!-- image -->

Table 29 shows the conversion time for the ADOL command. t 2C indicates the total conversion time for this command.

Table 29. Conversion Times for ADOL Command

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   |
|--------|-------------------------|-------------------------|-------------------------|-------------------------|
| Mode   | t 0                     | t 1M                    | t 2M                    | t 2C                    |
| 27 kHz | 0                       | 58                      | 106                     | 384                     |
| 14 kHz | 0                       | 87                      | 164                     | 442                     |
| 7 kHz  | 0                       | 146                     | 281                     | 791                     |
| 3 kHz  | 0                       | 262                     | 513                     | 1024                    |

## Table 29. Conversion Times for ADOL Command (Continued)

|        | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   | Conversion Times (μs)   |
|--------|-------------------------|-------------------------|-------------------------|-------------------------|
| Mode   | t 0                     | t 1M                    | t 2M                    | t 2C                    |
| 2 kHz  | 0                       | 495                     | 979                     | 1490                    |
| 1 kHz  | 0                       | 960                     | 1910                    | 2420                    |
| 422 Hz | 0                       | 1891                    | 3772                    | 4282                    |
| 26 Hz  | 0                       | 29,818                  | 59,626                  | 67,119                  |

## Digital Filter Check

The Δ-Σ ADC is composed of a 1-bit pulse density modulator followed by a digital filter. A pulse density modulated bit stream has a higher percentage of 1s for higher analog input voltages. The digital filter converts this high frequency 1-bit stream into a single 16-bit word.

This is why a Δ-Σ ADC is often referred to as an oversampling converter.

The self test commands verify the operation of the digital filters and memory. Figure 62 shows the operation of the ADC during self test. The output of the 1-bit pulse density modulator is replaced by a 1-bit test signal. The test signal passes through the digital filter and is converted to a 16-bit value. The 1-bit test signal undergoes the same digital conversion as the regular 1-bit signal from the modulator, so the conversion time for any self test command is exactly the same as the corresponding regular ADC conversion command. The 16-bit ADC value is stored in the same register groups as the corresponding regular ADC conversion command. The test signals are designed to place alternating one-zero patterns in the registers. Table 30 provides a list of the self test commands. If the digital filters and memory are working properly, then the registers contain the values shown in Table 30. For more details see the Commands section.

Figure 62. Operation of ADBMS1818 ADC Self Test

<!-- image -->

Table 30. Self Test Command Summary

|         |                    | Output Pattern in Different ADC Modes   | Output Pattern in Different ADC Modes   | Output Pattern in Different ADC Modes     |                                            |
|---------|--------------------|-----------------------------------------|-----------------------------------------|-------------------------------------------|--------------------------------------------|
| Command | Self Test Option   | 27 kHz                                  | 14 kHz                                  | 7 kHz, 3 kHz, 2 kHz, 1 kHz, 422 Hz, 26 Hz | Results Register Groups                    |
| CVST    | ST, Bits[1:0] = 01 | 0x9565                                  | 0x9553                                  | 0x9555                                    | C1V to C18V (CVA, CVB, CVC, CVD, CVE, CVF) |
|         | ST, Bits[1:0] = 10 | 0x6A9A                                  | 0x6AAC                                  | 0x6AAA                                    |                                            |
| AXST    | ST, Bits[1:0] = 01 | 0x9565                                  | 0x9553                                  | 0x9555                                    | G1V to GV9, REF (AUXA, AUXB, AUXC, AUXD)   |
|         | ST, Bits[1:0] = 10 | 0x6A9A                                  | 0x6AAC                                  | 0x6AAA                                    |                                            |

## THEORY OF OPERATION

Table 30. Self Test Command Summary (Continued)

|         |                    | Output Pattern in Different ADC Modes   | Output Pattern in Different ADC Modes   | Output Pattern in Different ADC Modes     |                                 |
|---------|--------------------|-----------------------------------------|-----------------------------------------|-------------------------------------------|---------------------------------|
| Command | Self Test Option   | 27 kHz                                  | 14 kHz                                  | 7 kHz, 3 kHz, 2 kHz, 1 kHz, 422 Hz, 26 Hz | Results Register Groups         |
| STATST  | ST, Bits[1:0] = 01 | 0x9565                                  | 0x9553                                  | 0x9555                                    | SC, ITMP, VA, VD (STATA, STATB) |
|         | ST, Bits[1:0] = 10 | 0x6A9A                                  | 0x6AAC                                  | 0x6AAA                                    |                                 |

## THEORY OF OPERATION

## Accuracy Check

Measuring an independent voltage reference is the optimal means to verify the accuracy of a data acquisition system. The ADBMS1818 contains a 2nd reference for this purpose. The ADAX command initiates the measurement of the 2nd reference. The results are placed in Auxiliary Register Group B. The range of the result depends on the ADC1 measurement accuracy and the accuracy of the 2nd reference, including thermal hysteresis and long term drift. Readings outside the 2.992 V to 3.012 V range indicate the system is out of its specified tolerance. ADC2 is verified by comparing it to ADC1 using the ADOL command. ADC3 is verified by comparing it to ADC2 using the ADOL command.

## Mux Decoder Check

The diagnostic command DIAGN ensures the proper operation of each multiplexer channel. The command cycles through all channels and sets the MUXFAIL bit to 1 in Status Register Group B if any channel decoder fails. The MUXFAIL bit is set to 0 if the channel decoder passes the test. The MUXFAIL bit is also set to 1 on a power-on reset (POR) or after a CLRSTAT command.

The DIAGN command takes approximately 400 μs to complete if the core is in the REFUP state and about 4.5 ms to complete if the core is in the standby state. The polling methods described in the Polling Methods section can be used to determine the completion of the DIAGN command.

## ADC Clear Commands

ADBMS1818 has 3 clear ADC commands: CLRCELL, CLRAUX, and CLRSTAT. These commands clear the registers that store all ADC conversion results.

The CLRCELL command clears Cell Voltage Register Groups A, B, C, D, E, and F. All bytes in these registers are set to 0xFF by the CLRCELL command.

The CLRAUX command clears Auxiliary Register Groups A, B, C, and D. All bytes in these registers, except the last four registers of Group D, are set to 0xFF by the CLRAUX command.

The CLRSTAT command clears Status Register Groups A and B, except for the REV and RSVD bits in Status Register Group B. A read back of the REV bits returns the revision code of the part. RSVD bits always read back 0s. All overvoltage (OV) and undervoltage (UV) flags, MUXFAIL bit, and THSD bit in Status Register Group B and Auxiliary Register Group D are set to 1 by the CLRSTAT command. The THSD bit is set to 0 after the RDSTATB command. The registers storing SC, ITMP, VA, and VD are all set to 0xFF by the CLRSTAT command.

## Open Wire Check (ADOW Command)

The ADOW command is used to check for any open wires between the ADCs of the ADBMS1818 and the external cells. This command performs ADC conversions on the C pin inputs identically to the ADCV command, except for two internal current sources sink or source current into the two C pins while they are being measured. The pull-up (PUP) bit of the ADOW command determines whether the current sources are sinking or sourcing 100 μA.

The following simple algorithm can be used to check for an open wire on any of the 19 C pins:

1. Run the 18-cell command ADOW with PUP = 1 at least twice. Read the cell voltages for cells 1 through 18 once at the end and store them in array CELL PU (n).
3. Take the difference between the pull-up and pull-down measurements made in Step 1 and Step 2 for cells 2 to 18: CELL ∆ (n) = CELL PU (n) - CELL PD (n).
2. Run the 18-cell command ADOW with PUP = 0 at least twice. Read the cell voltages for cells 1 through 18 once at the end and store them in array CELL PD (n).
4. For all values of n from 1 to 17: If CELL ∆ (n+1) &lt; -400 mV, then C(n) is open. If CELL PU (1) = 0.0000, then C(0) is open. If CELLPD (18) = 0.0000, then C(18) is open.

The above algorithm detects open wires using normal mode conversions with as much as 10 nF of capacitance remaining on the ADBMS1818 side of the open wire. However, if more external capacitance is on the open C pin, then the length of time that the open wire conversions run in Step 1 and Step 2 must be increased to give the 100 μA current sources time to create a large enough difference for the algorithm to detect an open connection. This action can be accomplished by running more than two ADOW commands in Step 1 and Step 2, or by using filtered mode conversions instead of normal mode conversions. Refer to Table 31 to determine how many conversions are necessary.

Table 31. Number of ADOW Commands Required

| External C Pin   | Number of ADOW Commands Required in Step 1 and Step 2   | Number of ADOW Commands Required in Step 1 and Step 2   |
|------------------|---------------------------------------------------------|---------------------------------------------------------|
| Capacitance      | Normal Mode                                             | Filtered Mode                                           |
| ≤10 nF           | 2                                                       | 2                                                       |
| 100 nF           | 10                                                      | 2                                                       |
| 1 μF             | 100                                                     | 2                                                       |
| C                | 1 + ROUNDUP (C/10 nF)                                   | 2                                                       |

## Auxiliary Open Wire Check (AXOW Command)

The AXOW command is used to check for any open wires between the GPIO pins of the ADBMS1818 and the external circuit. This command performs ADC conversions on the GPIO pin inputs identically to the ADAX command, except internal current sources sink or source current into each GPIO pin while it is being measured. The pull-up (PUP) bit of the AXOW command determines whether the current sources are sinking or sourcing 100 μA.

## THEORY OF OPERATION

## Thermal Shutdown

To protect the ADBMS1818 from overheating, there is a thermal shutdown circuit included inside the IC. If the temperature detected on the die rises above approximately 150°C, the thermal shutdown circuit trips and resets the configuration register groups and S Control Register Group (including S control bits in PWM/S Control Register Group B) to their default states and turns off all discharge switches. When a thermal shutdown event has occurred, the THSD bit in Status Register Group B goes high. The CLRSTAT command can also set the THSD bit high for diagnostic purposes. This bit is cleared when a read operation is performed on Status Register Group B (RDSTATB command). The CLRSTAT command sets the THSD bit high for diagnostic purposes but does not reset the configuration register groups.

## Revision Code

The Status Register Group B contains a 4-bit revision code (REV). If software detection of the device revision is necessary, contact the factory for details. Otherwise, ignore the code. In all cases, however, the values of all bits must be used when calculating the packet error code (PEC) on data reads.

## WATCHDOG AND DISCHARGE TIMER

When there is no valid command for more than 2 seconds, the watchdog timer expires, which resets the configuration register bytes CFGAR0-3 and the GPIO bits in Configuration Register Group B in all cases. CFGAR4, CFGAR5, the S Control Register Group (including S control bits in PWM/S Control Register Group B) and the remainder of Configuration Register Group B are reset by the watchdog timer when the discharge timer is disabled. The WDT pin is pulled high by the external pull-up when the watchdog time elapses. The watchdog timer is always enabled, and the timer resets after every valid command with matching command PEC.

The discharge timer is used to keep the discharge switches turned on for programmable time duration. If the discharge timer is being used, the discharge switches are not turned off when the watchdog timer is activated.

To enable the discharge timer, connect the DTEN pin to V REG (see Figure 63). In this configuration, the discharge switches remain on for the programmed time duration that is determined by the DCTO value written in Configuration Register Group A. Table 33 shows the various time settings and the corresponding DCTO value.

<!-- image -->

Figure 63. Watchdog and Discharge Timer

| Table 32. DCTO Settings   | Table 32. DCTO Settings   |   Table 32. DCTO Settings |   Table 32. DCTO Settings |   Table 32. DCTO Settings |   Table 32. DCTO Settings |   Table 32. DCTO Settings |   Table 32. DCTO Settings |   Table 32. DCTO Settings |   Table 32. DCTO Settings |   Table 32. DCTO Settings | Table 32. DCTO Settings   | Table 32. DCTO Settings   | Table 32. DCTO Settings   | Table 32. DCTO Settings   | Table 32. DCTO Settings   | Table 32. DCTO Settings   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| DCTO                      | 0                         |                       1   |                         2 |                         3 |                         4 |                         5 |                         6 |                         7 |                         8 |                         9 | A                         | B                         | C                         | D                         | E                         | F                         |
| Time (Minutes)            | Disabled                  |                       0.5 |                         1 |                         2 |                         3 |                         4 |                         5 |                        10 |                        15 |                        20 | 30                        | 40                        | 60                        | 75                        | 90                        | 120                       |

## THEORY OF OPERATION

Table 33. Discharge Timer Settings

|                       | Watchdog Timer                                        | Discharge Timer                                                 |
|-----------------------|-------------------------------------------------------|-----------------------------------------------------------------|
| DTEN = 0, DCTO = XXXX | Resets CFGAR0-5, CFGBR0-1 and SCTRL when it fires     | Disabled                                                        |
| DTEN = 1, DCTO = 0000 | Resets CFGAR0-5, CFGBR0-1 and SCTRL when it fires     | Disabled                                                        |
| DTEN = 1, DCTO = 0000 | Resets CFGAR0-3 and GPIO Bits in CFGBR0 when it fires | Resets CFGAR4-5, SCTRL, and remainder of CFGBR0-1 when it fires |

Table 33 summarizes the status of the configuration register groups after a watchdog timer or discharge timer event. The status of the discharge timer can be determined by reading Configuration Register Group A using the RDCFGA command. The DCTO value indicates the time left before the discharge timer expires, as shown in Table 34.

Table 34. Status of the Discharge Timer

| DCTO (Read Value)   | Discharge Timer Left (Minutes)                                    |
|---------------------|-------------------------------------------------------------------|
| 0 1 2               | Disabled (or) timer has timed out 0 < timer ≤ 0.5 0.5 < timer ≤ 1 |

Unlike the watchdog timer, the discharge timer does not reset when there is a valid command. The discharge timer can only be reset after a valid WRCFGA (Write Configuration Register Group A) command. There is a possibility that the discharge timer expires in the middle of some commands.

If the discharge timer activates in the middle of a WRCFGA command, the configuration register groups and S Control Register Group (including S control bits in PWM/S Control Register Group B) reset as per Table 33. However, at the end of the valid WRCFGA command, the new data is copied to Configuration Register Group A. The new configuration data is not lost when the discharge timer is activated.

If the discharge timer activates in the middle of an RDCFGA or RDCFGB command, the configuration register groups reset as per Table 33. As a result, the read back data from bytes CFGAR4

and CFGAR5 and CFGBR0 and CFGBR1 may be corrupted. If the discharge timer activates in the middle of an RDSCTRL or RDPSB command, the S Control Register Group (including S control bits in PWM/S Control Register Group B) resets, as per Table 33. As a result, the read back data may be corrupted.

## S PIN PULSE-WIDTH MODULATION FOR CELL BALANCING

For additional control of cell discharging, the host may configure the S pins to operate using PWM. While the watchdog timer is not expired, the DCC bits in the configuration register groups control the S pins directly. After the watchdog timer expires, PWM operation begins and continues for the remainder of the selected discharge time or until a wake-up event occurs (and the watchdog timer is reset). During PWM operation, the DCC bits must be set to 1 for the PWM feature to operate.

Once PWM operation begins, the configurations in the PWM register can cause some or all S pins to be periodically deasserted to achieve the desired duty cycle as shown in Table 35. Each PWM signal operates on a 30 second period. For each cycle, the duty cycle can be programmed from 0% to 100% in increments of 1/15 = 6.67% (2 seconds).

Each S pin PWM signal is sequenced at different intervals to ensure that no two pins switch on or off at the same time. The switching interval between channels is 62.5 ms, and 1.125 sec is required for all 18 pins to switch (18 × 62.5 ms).

Table 35. S Pin Pulse-Width Modulation Settings

|   DCC Bit (Configuration Register Groups) | PWMC Setting   | On Time (sec)   | Off Time (sec)   |   Duty Cycle (%) |
|-------------------------------------------|----------------|-----------------|------------------|------------------|
|                                         0 | 4'bXXXX        | 0               | Continuously Off |              0   |
|                                         1 | 4'b1111        | Continuously On | 0                |            100   |
|                                         1 | 4'b1110        | 28              | 2                |             93.3 |
|                                         1 | 4'b1101        | 26              | 4                |             86.7 |
|                                         1 | 4'b1100        | 24              | 6                |             80   |
|                                         1 | 4'b1011        | 22              | 8                |             73.3 |
|                                         1 | 4'b1010        | 20              | 10               |             66.7 |
|                                         1 | 4'b1001        | 18              | 12               |             60   |
|                                         1 | 4'b1000        | 16              | 14               |             53.3 |
|                                         1 | 4'b0111        | 14              | 16               |             46.7 |
|                                         1 | 4'b0110        | 12              | 18               |             40   |
|                                         1 | 4'b0101        | 10              | 20               |             33.3 |
|                                         1 | 4'b0100        | 8               | 22               |             26.7 |
|                                         1 | 4'b0011        | 6               | 24               |             20   |
|                                         1 | 4'b0010        | 4               | 26               |             13.3 |
|                                         1 | 4'b0001        | 2               | 28               |              6.7 |
|                                         1 | 4'b0000        | 0               | Continuously Off |              0   |

## THEORY OF OPERATION

The default values of the PWM control settings (located in PWM Register Group and PWM/S Control Register Group B) are all 1s. Upon entering sleep mode, the PWM control settings are initialized to their default values.

## DISCHARGE TIMER MONITOR

The ADBMS1818 has the ability to periodically monitor cell voltages while the discharge timer is active. The host writes the DTMEN bit in Configuration Register Group B to 1 to enable this feature.

When the discharge timer monitor is enabled and the watchdog timer has expired, the ADBMS1818 performs a conversion of all cell voltages in 7 kHz (normal) mode every 30 seconds. The overvoltage and undervoltage comparisons are performed and flags are set if cells have crossed a threshold. For any undervoltage cells, the discharge timer monitor automatically clears the associated DCC bit in Configuration Register Group A or Configuration Register Group B so that the cell is no longer discharged. Clearing the DCC bit also disables PWM discharge. With this feature, the host can write the undervoltage threshold to the desired discharge level and use the discharge timer monitor to discharge all, or selected, cells (using either constant discharge or PWM discharge) down to that level.

During discharge timer monitoring, digital redundancy checking is performed on the cell voltage measurements. If a digital redundancy failure occurs, all DCC bits are cleared.

## I 2 C/SPI MASTER ON ADBMS1818 USING GPIOS

The I/O ports GPIO3, GPIO4, and GPIO5 on the ADBMS1818 can be used as an I 2 C or SPI master port to communicate to an I 2 C or SPI slave. In the case of an I 2 C master, GPIO4 and GPIO5 form the SDA and SCL ports of the I 2 C interface, respectively. In the case of an SPI master, GPIO3, GPIO4, and GPIO5 are the CSBM, SDIOM,

Table 36. COMM Register Memory Map and SCKM ports of the SPI, respectively. The SPI master on the ADBMS1818 supports SPI Mode 3 (CHPA = 1 and CPOL = 1).

The GPIOs are open-drain outputs, so an external pull-up is required on these ports to operate as an I 2 C or SPI master. It is also important to write the GPIO bits to 1 in the configuration register groups so these ports are not pulled low internally by the device.

## COMM Register

ADBMS1818 has a 6-byte COMM register, as shown in Table 36. This register stores all data and control bits required for I 2 C or SPI communication to a slave. The COMM register contains three bytes of data Dn, Bits[7:0] to be transmitted to or received from the slave device. ICOMn, Bits[3:0] specify control actions before transmitting/receiving each data byte. FCOMn, Bits[3:0] specify control actions after transmitting/receiving each data byte.

If ICOMn, Bit 3 in the COMM register is set to 1, the device becomes an SPI master, and if the bit is set to 0, the device becomes an I 2 C master.

Table 37 describes the valid write codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] and their behavior when using the device as an I 2 C master.

Table 38 describes the valid write codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] and their behavior when using the device as an SPI master.

Note that only the codes listed in Table 37 and Table 38 are valid for ICOMn, Bits[3:0] and FCOMn, Bits[3:0]. Writing any other code that is not listed in Table 37 and Table 38 to ICOMn, Bits[3:0] and FCOMn, Bits[3:0] may result in unexpected behavior on the I 2 C or SPI port.

| Register   | R/W   | Bit 7        | Bit 6        | Bit 5        | Bit 4        | Bit 3        | Bit 2        | Bit 1        | Bit 0        |
|------------|-------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
| COMM0      | R/W   | ICOM0, Bit 3 | ICOM0, Bit 2 | ICOM0, Bit 1 | ICOM0, Bit 0 | D0, Bit 7    | D0, Bit 6    | D0, Bit 5    | D0, Bit 4    |
| COMM1      | R/W   | D0, Bit 3    | D0, Bit 2    | D0, Bit 1    | D0, Bit 0    | FCOM0, Bit 3 | FCOM0, Bit 2 | FCOM0, Bit 1 | FCOM0, Bit 0 |
| COMM2      | R/W   | ICOM1, Bit 3 | ICOM1, Bit 2 | ICOM1, Bit 1 | ICOM1, Bit 0 | D1, Bit 7    | D1, Bit 6    | D1, Bit 5    | D1, Bit 4    |
| COMM3      | R/W   | D1, Bit 3    | D1, Bit 2    | D1, Bit 1    | D1, Bit 0    | FCOM1, Bit 3 | FCOM1, Bit 2 | FCOM1, Bit 1 | FCOM1, Bit 0 |
| COMM4      | R/W   | ICOM2, Bit 3 | ICOM2, Bit 2 | ICOM2, Bit 1 | ICOM2, Bit 0 | D2, Bit 7    | D2, Bit 6    | D2, Bit 5    | D2, Bit 4    |
| COMM5      | R/W   | D2, Bit 3    | D2, Bit 2    | D2, Bit 1    | D2, Bit 0    | FCOM2, Bit 3 | FCOM2, Bit 2 | FCOM2, Bit 1 | FCOM2, Bit 0 |

Table 37. Write Codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] on I 2 C Master

| Control Bits     | Code                          | Action                                     | Description                                                                                                                                                                                                                                                                                                                                                                         |
|------------------|-------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ICOMn, Bits[3:0] | 0110 0001 0000 0111 0000 1000 | Start Stop Blank No transmit Master Master | Generate a start signal on I 2 C port followed by a data transmission Generate a stop signal on I 2 C port Proceed directly to data transmission on I 2 C port Release SDA and SCL and ignore the rest of the data Master generates an ACK Signal on ninth clock cycle Master generates a NACK signal on ninth clock cycle Master generates a NACK signal followed by a stop signal |
| FCOMn, Bits[3:0] |                               | ACK                                        |                                                                                                                                                                                                                                                                                                                                                                                     |
|                  |                               | NACK                                       |                                                                                                                                                                                                                                                                                                                                                                                     |
|                  | 1001                          | Master NACK + stop                         |                                                                                                                                                                                                                                                                                                                                                                                     |

## THEORY OF OPERATION

## Table 38. Write Codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] on SPI Master

| Control Bits     | Code   | Action                                       | Description                                                                        |
|------------------|--------|----------------------------------------------|------------------------------------------------------------------------------------|
| ICOMn, Bits[3:0] | 1000   | CSBM low CSBM CSBM high No transmit CSBM low | Generates a CSBM low signal on SPI port (GPIO3) Drives CSBM (GPIO3) high, then low |
|                  | 1010   | falling edge                                 |                                                                                    |
|                  | 1001   |                                              | Generates a CSBM high signal on SPI port (GPIO3)                                   |
|                  | 1111   |                                              | Releases the SPI port and ignores the rest of the data                             |
| FCOMn, Bits[3:0] | X000   |                                              | Holds CSBM low at the end of byte transmission                                     |
|                  | 1001   | CSBM high                                    | Transitions CSBM high at the end of byte transmission                              |

## THEORY OF OPERATION

## COMM Commands

Three commands help accomplish I 2 C or SPI communication to the slave device: WRCOMM, STCOMM, and RDCOMM.

WRCOMM Command: This command is used to write data to the COMM register. This command writes 6 bytes of data to the COMM register. The PEC needs to be written at the end of the data. If the PEC does not match, all data in the COMM register is cleared to 1s when CSB goes high. See the Bus Protocols section for more details on a write command format.

STCOMM Command: This command initiates I 2 C/SPI communication on the GPIO ports. The COMM register contains 3 bytes of data to be transmitted to the slave. During this command, the data bytes stored in the COMM register are transmitted to the slave I 2 C or SPI device and the data received from the I 2 C or SPI device is stored in the COMM register. This command uses GPIO4 (SDA), and GPIO5 (SCL) for I 2 C communication or GPIO3 (CSBM), GPIO4 (SDIOM), and GPIO5 (SCKM) for SPI communication.

The STCOMM command is followed by 24 clock cycles for each byte of data transmitted to the slave device while holding CSB low. For example, to transmit three bytes of data to the slave, send the STCOMM command and its PEC followed by 72 clock cycles. Pull CSB high at the end of the 72 clock cycles of the STCOMM command.

During I 2 C or SPI communication, the data received from the slave device is updated in the COMM register.

RDCOMM Command: The data received from the slave device can be read back from the COMM register using the RDCOMM command. The command reads back six bytes of data followed by the PEC. See the Bus Protocols section for more details on a read command format.

Table 39 describes the possible read back codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] when using the device as an I 2 C master. Dn, Bits[7:0] contain the data byte transmitted by the I 2 C slave.

Table 39. Read Codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] on I 2 C Master

| Control Bits     |   Code | Description                                                   |
|------------------|--------|---------------------------------------------------------------|
| ICOMn, Bits[3:0] |   0110 | Master generated a start signal                               |
|                  |   0001 | Master generated a stop signal                                |
|                  |   0000 | Blank, SDA was held low between bytes                         |
|                  |   0111 | Blank, SDA was held high between bytes                        |
| FCOMn, Bits[3:0] |   0000 | Master generated an ACK signal                                |
|                  |   0111 | Slave generated an ACK signal                                 |
|                  |   1111 | Slave generated a NACK signal                                 |
|                  |   0001 | Slave generated an ACK signal, master generated a stop signal |

Table 39. Read Codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] on I 2 C Master (Continued)

| Control Bits   |   Code | Description                                                   |
|----------------|--------|---------------------------------------------------------------|
|                |   1001 | Slave generated a NACK signal, master generated a stop signal |

In case of the SPI master, the read back codes for ICOMn, Bits[3:0] and FCOMn, Bits[3:0] are always 0111 and 1111, respectively. Dn, Bits[7:0] contain the data byte transmitted by the SPI slave.

Figure 64 shows the operation of ADBMS1818 as an I 2 C or SPI master using the GPIOs.

Figure 64. ADBMS1818 I 2 C or SPI Master Using GPIOs

<!-- image -->

Any number of bytes can be transmitted to the slave in groups of 3 bytes using these commands. The GPIO ports do not reset between different STCOMM commands. However, if the wait time between the commands is greater than 2 sec, the watchdog times out and resets the ports to their default values.

To transmit several bytes of data using an I 2 C master, a start signal is only required at the beginning of the entire data stream. A stop signal is only required at the end of the data stream. All intermediate data groups can use a blank code before the data byte and an ACK/NACK signal as appropriate after the data byte. SDA and SCL do not reset between different STCOMM commands.

To transmit several bytes of data using an SPI master, a CSBM low signal is sent at the beginning of the 1st data byte. CSBM can be held low or taken high for intermediate data groups using the appropriate code on FCOMn, Bits[3:0]. A CSBM high signal is sent at the end of the last byte of data. CSBM, SDIOM, and SCKM do not reset between different STCOMM commands.

Figure 65 shows the 24 clock cycles following the STCOMM command for an I 2 C master in different cases. Note that if ICOMn, Bits[3:0] specified a stop condition, after the stop signal is sent, the SDA and SCL lines are held high and all data in the rest of the word is ignored. If ICOMn, Bits[3:0] are a no transmit, both SDA and SCL lines are released, and the rest of the data in the word is ignored. This is used when a particular device in the stack does not have to communicate to a slave.

Figure 66 shows the 24 clock cycles following the STCOMM command for an SPI master. Similar to the I 2 C master, if ICOMn, Bits[3:0] specified a CSBM HIGH or a no transmit condition, the CSBM, SCKM, and SDIOM lines of the SPI master are released and the rest of the data in the word is ignored.

## THEORY OF OPERATION

<!-- image -->

Figure 65. STCOMM Timing Diagram for an I 2 C Master

Figure 66. STCOMM Timing Diagram for an SPI Master

## THEORY OF OPERATION

## Timing Specifications of I 2 C and SPI Master

The timing of the ADBMS1818 I 2 C or SPI master is controlled by the timing of the communication at the primary SPI of the ADBMS1818. Table 40 shows the I 2 C master timing relationship to the primary SPI clock. Table 41 shows the SPI master timing specifications.

## Table 40. I 2 C Master Timing

| I 2 C Master Parameter   | Timing Relationship to Primary SPI   | Timing Specifications at t CLK = 1 μs   |
|--------------------------|--------------------------------------|-----------------------------------------|
| SCL Clock Frequency      | 1/(2 × t CLK )                       | 500 kHz maximum                         |
| t HD , STA               | t3                                   | 200 ns minimum                          |
| t LOW                    | t CLK                                | 1 μs minimum                            |
| t HIGH                   | t CLK                                | 1 μs minimum                            |
| t SU , STA               | t CLK + t 4 1                        | 1.03 μs minimum                         |
| t HD , DAT               | t 4                                  | 30 ns minimum                           |
| t SU , DAT               | t 3                                  | 200 ns minimum                          |
| t SU , STO               | t CLK + t 4 1                        | 1.03 μs minimum                         |
| t BUF                    | 3 × t CLK                            | 3 μs minimum                            |

1 When using isoSPI, t 4 is generated internally and is a minimum of 30 ns. Also, t 3 = t CLK - t 4 . When using SPI, t 3 and t 4 are the low and high times of the SCK input, each with a specified minimum of 200 ns.

## Table 41. SPI Master Timing

| SPI Master Parameter               | Timing Relationship to Primary SPI   | Timing Specifications at t CLK = 1 μs   |
|------------------------------------|--------------------------------------|-----------------------------------------|
| SDIOM Valid to SCKM Rising Setup   | t 3                                  | 200 ns minimum                          |
| SDIO Valid from SCKM Rising Hold   | t CLK + t 4 1                        | 1.03 μs minimum                         |
| SCKM Low                           | t CLK                                | 1 μs minimum                            |
| SCKM High                          | t CLK                                | 1 μs minimum                            |
| SCKM Period (SCKM_Low + SCKM_High) | 2 × t CLK                            | 2 μs minimum                            |
| CSBM Pulse Width                   | 3 × t CLK                            | 3 μs minimum                            |
| SCKM Rising to CSBM Rising         | 5 × t CLK + t 4 1                    | 5.03 μs minimum                         |
| CSBM Falling to SCKM Falling       | t 3                                  | 200 ns minimum                          |
| CSBM Falling to SCKM Rising        | t CLK + t 3                          | 1.2 μs minimum                          |
| SCKM Falling to SDIOM Valid        | Master Requires < t CLK              | Master Requires < t CLK                 |

1 When using isoSPI, t 4 is generated internally and is a minimum of 30 ns. Also, t 3 = t CLK - t 4 . When using SPI, t 3 and t 4 are the low and high times of the SCK input, each with a specified minimum of 200 ns.

Figure 67. S Pin Behavior when S Pin Control Bits = 0000

## S PIN PULSING USING THE S PIN CONTROL SETTINGS

The S pins of the ADBMS1818 can be used as a simple serial interface, which is particularly useful for controlling the LT8584, a monolithic flyback dc-to-dc converter, designed to actively balance large battery stacks. The LT8584 has several operating modes which are controlled through a serial interface. The ADBMS1818 can communicate to an LT8584 by sending a sequence of pulses on each S pin to select a specific LT8584 mode. The S pin control settings (located in S Control Register Group and PWM/S Control Register Group B) are used to specify the behavior for each of the 18 S pins, where each nibble specifies whether the S pin drives high, drives low, or sends a pulse sequence between 1 and 7 pulses. The figures in this section show the possible S pin behaviors that can be sent to the LT8584.

The S pin pulses occur at a pulse rate of 6.44 kHz (155 μs period). The pulse width is 77.6 μs. The S pin pulsing begins when the STSCTRL command is sent, after the last command PEC clock, provided that the command PEC matches. The host can then continue to clock SCK in order to poll the status of the pulsing. This polling works similarly to the ADC polling feature. The data out remains logic low until the S pin pulsing sequence completes.

While the S pin pulsing is in progress, new STSCTRL, WRSCTRL, or WRPSB commands are ignored. The PLADC command can be used to determine when the S pin pulsing completes.

If the WRSCTRL (or WRPSB) command and command PEC are received correctly but the data PEC does not match, the S pin control settings are cleared.

If a DCC bit in Configuration Register Group A or Configuration Register Group B is asserted, the ADBMS1818 drives the selected S pin low, regardless of the S pin control settings. The host must leave the DCC bits set to 0 when using the S pin control settings.

The CLRSCTRL command can be used to quickly reset the S pin control settings to all 0s and force the pulsing machine to release control of the S pins. This command can be helpful in reducing the diagnostic control loop time in a high reliability application.

The following figures show the S pin pulsing behavior.

## THEORY OF OPERATION

<!-- image -->

## THEORY OF OPERATION

## S PIN MUTING

The S pins can be disabled by sending the mute command and reenabled by sending the unmute command. The mute and unmute commands do not require any subsequent data and thus the commands propagate quickly through a stack of ADBMS1818 devices. This action allows the host to quickly (&lt;100 µs) disable and reenable discharging without disturbing register contents. This ability can be useful, for instance, to allow a specific settling time before taking cell measurements. The mute status is reported in the read-only MUTE bit in Configuration Register Group B.

## SERIAL INTERFACE OVERVIEW

There are two types of serial ports on the ADBMS1818: a standard 4-wire SPI and a 2-wire isoSPI. The state of the ISOMD pin determines whether Pin 53, Pin 54, Pin 61, and Pin 62 are a 2-wire or 4-wire serial port.

The ADBMS1818 is used in a daisy-chain configuration.

A second isoSPI uses Pin 57, Pin 58, Pin 63, and Pin 64.

## 4-WIRE SERIAL PERIPHERAL INTERFACE (SPI) PHYSICAL LAYER

## External Connections

Connecting ISOMD to V -configures serial Port A for 4-wire SPI. The SDO pin is an open drain output that requires a pull-up resistor tied to the appropriate supply voltage (see Figure 76).

Figure 76. 4-Wire SPI Configuration

<!-- image -->

## Timing

The 4-wire serial port is configured to operate in an SPI system using CPHA = 1 and CPOL = 1. Consequently, data on SDI must be stable during the rising edge of SCK. The timing is depicted in Figure 77. The maximum data rate is 1 Mbps. However, the device is tested at a higher data rate in production to guarantee operation at the maximum specified data rate.

## 2-WIRE ISOLATED INTERFACE (ISOSPI) PHYSICAL LAYER

The 2-wire interface provides a means to interconnect ADBMS1818 devices using simple twisted pair cabling. The interface is designed for low packet error rates when the cabling is subjected to high RF fields. Isolation is achieved through an external transformer.

Standard SPI signals are encoded into differential pulses. The strength of the transmission pulse and the threshold level of the receiver are set by two external resistors. The values of the resistors allow the user to trade-off power dissipation for noise immunity.

Figure 78 shows how the isoSPI circuit operates. A 2 V reference drives the IBIAS pin. External resistors R B1 and R B2 create the reference current, IB. This current sets the drive strength of the transmitter. R B1 and R B2 also form a voltage divider to supply a fraction of the 2 V reference for the ICMP pin. The receiver circuit threshold is half of the voltage at the ICMP pin.

## External Connections

The ADBMS1818 has 2 serial ports, Port B and Port A. Port B is always configured as a 2-wire interface. Port A is either a 2-wire or 4-wire interface, depending on the connection of the ISOMD pin.

When Port A is configured as a 4-wire interface, Port A is always the slave port and Port B is the master port. Communication is always initiated on Port A of the first device in the daisy-chain configuration. The final device in the daisy chain does not use Port B, and it must be terminated into R M. Figure 79 shows the simplest port connections possible when the microprocessor and the ADBMS1818s are located on the same PCB. In Figure 79, capacitors are used to couple signals between the ADBMS1818s.

When Port A is configured as a 2-wire interface, communication can be initiated on either Port A or Port B. If communication is initiated on Port A, ADBMS1818 configures Port A as a slave and Port B as a master. Likewise, if communication is initiated on Port B, ADBMS1818 configures Port B as a slave and Port A as a master. See the Reversible isoSPI section for a detailed description of the reversible isoSPI.

Figure 80 is an example of a robust interconnection of multiple identical PCBs, each containing one ADBMS1818 configured for operation in a daisy chain. The microprocessor is located on a separate PCB. To achieve 2-wire isolation between the microprocessor PCB and the 1st ADBMS1818 PCB, use the LTC6820 support IC. The LTC6820 is functionally equivalent to the diagram in Figure 78. In this example, communication is initiated on Port A. Therefore, the ADBMS1818 configures Port A as a slave and Port B as a master.

## THEORY OF OPERATION

Figure 77. Timing Diagram of 4-Wire Serial Peripheral Interface

<!-- image -->

Figure 78. isoSPI Interface

<!-- image -->

## THEORY OF OPERATION

Figure 79. Capacitive-Coupled Daisy-Chain Configuration

<!-- image -->

## THEORY OF OPERATION

Figure 80. Transformer-Isolated Daisy-Chain Configuration

<!-- image -->

## THEORY OF OPERATION

## Using a Single ADBMS1818

When only one ADBMS1818 is needed, the device can be used as a single (non daisy-chained) device if the second isoSPI port (Port B) is properly biased and terminated, as shown in Figure 81 and

Figure 82. ICMP must not be tied to GND but can be tied directly to IBIAS. A bias resistance (2 kΩ to 20 kΩ) is required for IBIAS. Do not tie IBIAS directly to V REG or V -. Finally, IPB and IMB must be terminated into a 100 Ω resistor (not tied to V REG or V -).

Figure 81. Single Device Using 2-Wire Port A

<!-- image -->

Figure 82. Single Device Using 4-Wire Port A

<!-- image -->

## THEORY OF OPERATION

## Selecting Bias Resistors

The adjustable signal amplitude allows the system to trade power consumption for communication robustness, and the adjustable comparator threshold allows the system to account for signal losses.

The isoSPI transmitter drive current and comparator voltage threshold are set by a resistor divider (R BIAS = R B1 + R B2 ) between IBIAS and V . The divided voltage is connected to the ICMP pin, which sets the comparator threshold to half of this voltage (V ICMP ). When either isoSPI is enabled (not idle), IBIAS is held at 2 V, causing I B to flow out of the IBIAS pin. The IPx and IMx pin drive currents are 20 × I B .

As an example, if the divider resistor, R B1 , is 2.8 kΩ and resistor RB2 is 1.21 kΩ (so that R BIAS = 4 kΩ), then

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

In this example, the pulse drive current I DRV is 10 mA, and the receiver comparators detect pulses with IPx to IMx amplitudes greater than ±302 mV.

If the isolation barrier uses 1:1 transformers connected by a twisted pair and terminated with 120 Ω resistors on each end, then the transmitted differential signal amplitude (±) is the following:

<!-- formula-not-decoded -->

This calculation result ignores transformer and cable losses, which may reduce the amplitude.

## isoSPI Pulse Detail

Two ADBMS1818 devices can communicate by transmitting and receiving differential pulses back and forth through an isolation barrier. The transmitter can output three voltage levels: +V A , 0 V, and -V A . A positive output results from IPx sourcing current and IMx sinking current across the load resistor, R M. A negative voltage is developed by IPx sinking and IMx sourcing. When both outputs are off, the load resistance forces the differential output to 0 V.

To eliminate the dc signal component and enhance reliability, the isoSPI uses two different pulse lengths. This allows four types of pulses to be transmitted, as shown in Table 42. A +1 pulse is transmitted as a positive pulse followed by a negative pulse. A -1 pulse is transmitted as a negative pulse followed by a positive pulse. The duration of each pulse is defined as t 1/2PW because each pulse is half of the required symmetric pair. (The total isoSPI pulse duration is 2 × t 1/2PW ).

Table 42. isoSPI Pulse Types

| Pulse Type   | First Level (t 1/2PW )   | Second Level (t 1/2PW )   | Ending Level   |
|--------------|--------------------------|---------------------------|----------------|
| Long +1      | +V A (150 ns)            | -V A (150 ns)             | 0 V            |
| Long -1      | -V A (150 ns)            | +V A (150 ns)             | 0 V            |
| Short +1     | +V A (50 ns)             | -V A (50 ns)              | 0 V            |
| Short -1     | -V A (50 ns)             | +V A (50 ns)              | 0 V            |

The receiver is designed to detect each of these isoSPI pulse types. For successful detection, the incoming isoSPI pulses (CSB or data) must meet the following requirements:

- t 1/2PW of incoming pulse &gt; t FILT of the receiver and
- t INV of incoming pulse &lt; t WNDW of the receiver

The worst-case margin (Margin 1) for the first condition is the difference between the minimum t 1/2PW of the incoming pulse and the maximum t FILT of the receiver. Likewise, the worst-case margin (Margin 2) for the second condition is the difference between minimum t WNDW of the receiver and maximum t INV of the incoming pulse. These timing relations are shown in Figure 83.

A host microcontroller does not have to generate isoSPI pulses to use this 2-wire interface. The first ADBMS1818 in the system can communicate to the microcontroller using the 4-wire SPI on its Port A, then daisy chain to other ADBMS1818s using the 2-wire isoSPI on its Port B. Alternatively, the LTC6820 can be used to translate the SPI signals into isoSPI pulses.

Figure 83. isoSPI Pulse Detail

<!-- image -->

## Operation with Port A Configured for SPI

When the ADBMS1818 is operating with Port A as a SPI (ISOMD = V -), the SPI detects one of four communication events: CSB falling, CSB rising, SCK rising with SDI = 0, and SCK rising with SDI = 1. Each event is converted into one of the four pulse types for transmission through the daisy chain. Long pulses are used to

## THEORY OF OPERATION

transmit CSB changes and short pulses are used to transmit data, as explained in Table 43.

Table 43. Port B (Master) isoSPI Port Function

| Communication Event (Port A SPI)   | Transmitted Pulse (Port B isoSPI)   |
|------------------------------------|-------------------------------------|
| CSB Rising                         | Long +1                             |
| CSB Falling                        | Long -1                             |
| SCK Rising Edge, SDI = 1           | Short +1                            |
| SCK Rising Edge, SDI = 0           | Short -1                            |

## Operation with Port A Configured for isoSPI

On the other side of the isolation barrier (that is, at the other end of the cable), the 2nd ADBMS1818 has ISOMD = V REG so that its Port A is configured for isoSPI. The slave isoSPI port (Port A or Port B) receives each transmitted pulse and reconstructs the SPI signals internally, as shown in Table 44. In addition, during a read command this port can transmit return data pulses.

Table 44. Port A (Slave) isoSPI Port Function

| Received Pulse (Port A isoSPI)   | Internal SPI Port Action   | Return Pulse                      |
|----------------------------------|----------------------------|-----------------------------------|
| Long +1                          | Drive CSB high             | None                              |
| Long -1                          | Drive CSB low              |                                   |
| Short +1                         | 1. Set SDI = 1             | Short -1 pulse if reading a 0 bit |

Table 44. Port A (Slave) isoSPI Port Function (Continued)

| Received Pulse (Port A isoSPI)   | Internal SPI Port Action                 | Return Pulse                                                |
|----------------------------------|------------------------------------------|-------------------------------------------------------------|
| Short -1                         | 2. Pulse SCK 1. Set SDI = 0 2. Pulse SCK | (No return pulse if not in read mode or if reading a 1 bit) |

The slave isoSPI port never transmits long (CSB) pulses. Furthermore, a slave isoSPI port only transmits short -1 pulses, never a +1 pulse. The master port recognizes a null response as a Logic 1.

## Reversible isoSPI

When the ADBMS1818 is operating with Port A configured for isoSPI, communication can be initiated from either Port A or Port B. In other words, ADBMS1818 can configure either Port A or Port B as a slave or master, depending on the direction of communication. The reversible isoSPI feature permits communication from both directions in a stack of daisy-chained devices. See Figure 84 for an example schematic. Figure 85 shows the operation of the reversible isoSPI.

## THEORY OF OPERATION

Figure 84. Reversible isoSPI Daisy Chain

<!-- image -->

## THEORY OF OPERATION

Figure 85. Reversible isoSPI State Diagram

<!-- image -->

When ADBMS1818 is in the sleep state, the device responds to a valid wake-up signal on either Port A or Port B. This is true for either configuration of the ISOMD pin.

If the wake-up signal is sent on Port A, ADBMS1818 transmits a long +1 isoSPI pulse (CSB rising) on Port B after the isoSPI is powered up. If the wake-up signal is sent on Port B, ADBMS1818 powers up the isoSPI but does not transmit a long +1 isoSPI pulse on Port A.

When ADBMS1818 is in the ready state, communication can be initiated by sending a long -1 isoSPI pulse (CSB falling) on either Port A or Port B. The ADBMS1818 automatically configures the port that receives the long -1 isoSPI pulse as the slave and the other port is configured as the master. The isoSPI pulses are transmitted through the master port to the rest of the devices in the daisy chain.

In the active state, the ADBMS1818 is in the middle of the communication and CSB of the internal SPI port is low. At the end of communication a long +1 pulse (CSB rising) on the slave port returns the device to the ready state. Although it is not part of a normal communication routine, the ADBMS1818 allows Port A and Port B to be swapped inside the active state. This feature is useful for the master controller to reclaim control of the slave port of ADBMS1818, irrespective of the current state of the ports. This action can be done by sending a long -1 isoSPI pulse on the master port after a time delay of t BLOCK from the last isoSPI signal that was transmitted by the device. Any long isoSPI pulse sent to the master port inside t BLOCK is rejected by the device. This ensures the ADBMS1818 cannot switch ports because of signal reflections from poorly terminated cables (&lt;100 m cable length).

## Timing Diagrams

Figure 86 shows the isoSPI timing diagram for a read command to daisy-chained ADBMS1818 devices. The ISOMD pin is tied to V -on the bottom part so that its Port A is configured as an SPI port (CSB, SCK, SDI, and SDO). The isoSPI signals of three stacked devices are shown labeled with the port (Port A or Port B) and part number. Note that ISO B1 and ISO A2 are actually the same signal, but shown on each end of the transmission cable that connects Part 1 and Part 2. Likewise, ISO B2 and ISO A3 are the same signal, but with the cable delay shown between Part 2 and Part 3.

Bit W N to Bit W 0 refer to the 16-bit command code and the 16-bit PEC of a read command. At the end of Bit W 0 , the three parts decode the read command and begin shifting out data, which is valid on the next rising edge of clock SCK. Bit X N to Bit X 0 refer to the data shifted out by Part 1. Bit Y N to Bit Y 0 refer to the data shifted out by Part 2, and Bit Z N to Bit Z 0 refer to the data shifted out by Part 3. All this data is read back from the SDO port on Part 1 in a daisy-chained fashion.

## THEORY OF OPERATION

Figure 86. isoSPI Timing Diagram

<!-- image -->

## Waking Up the Serial Interface

The serial ports (SPI or isoSPI) enter the low power idle state if there is no activity on Port A or Port B for a time of t IDLE . The wake-up circuit monitors activity on Pin 61 through Pin 64. If ISOMD = V , Port A is in SPI mode. Activity on the CSB pin or SCK pin wakes up the SPI. If ISOMD = V REG , Port A is in isoSPI mode. Differential activity on IPA to IMA (or IPB to IMB) wakes up the isoSPI. The ADBMS1818 is ready to communicate when the isoSPI state changes to ready within t WAKE or t READY , depending on the core state (see Figure 53 and the Sleep State, Standby State, REFUP State, and Measure State sections for details).

up the next device in the stack which, in turn, wakes up the next device. If there are N devices in the stack, all the devices are powered up within the time N × t WAKE or N × t READY , depending on the core state. For large stacks, the time N × t WAKE may be equal to or larger than t IDLE . In this case, after waiting longer than the time of N × t WAKE , the host can send another dummy byte and wait for the time N × t READY to ensure that all devices are in the ready state.

Figure 87 shows the timing and the functionally equivalent circuit (only Port A shown). Common-mode signals do not wake up the serial interface. The interface is designed to wake up after receiving a large signal single-ended pulse, or a low-amplitude symmetric pulse. The differential signal (SCK(IPA) - CSB(IMA)), must be at least V WAKE = 200 mV for a minimum duration of t DWELL = 240 ns to qualify as a wake-up signal that powers up the serial interface.

## Waking a Daisy Chain-Method 1

The ADBMS1818 sends a long +1 pulse on Port B after it is ready to communicate. In a daisy-chained configuration, this pulse wakes

Method 1 can be used when all devices on the daisy chain are in the idle state, which guarantees that the devices propagate the wake-up signal up the daisy chain. However, this method fails to wake up all devices when a device in the middle of the chain is in the ready state instead of the idle state. When this happens, the device in the ready state does not propagate the wake-up pulse, so the devices above it remain in the idle state. This situation can occur when attempting to wake up the daisy chain after only t IDLE of idle time (some devices may be idle, some may not).

## THEORY OF OPERATION

Figure 87. Wake-Up Detection and Idle Timer

<!-- image -->

## Waking a Daisy Chain-Method 2

A more robust wake-up method does not rely on the built-in wakeup pulse, but manually sends isoSPI traffic for enough time to wake the entire daisy chain. At a minimum, a pair of long isoSPI pulses (-1 and +1) is needed for each device, separated by more than t READY or t WAKE (if the core state is standby mode or sleep mode, respectively), but less than t IDLE . This allows each device to wake up and propagate the next pulse to the following device. This method works even if some devices in the chain are not in the idle state. In practice, implementing Method 2 requires toggling the CSB pin (of the LTC6820, or bottom ADBMS1818 with ISOMD = 0) to generate the long isoSPI pulses. Alternatively, dummy commands (such as RDCFGA) can be executed to generate the long isoSPI pulses.

## DATA LINK LAYER

All data transfers on ADBMS1818 occur in byte groups. Every byte consists of 8 bits. Bytes are transferred with the MSB first. CSB must remain low for the entire duration of a command sequence, including between a command byte and subsequent data. On a write command, data is latched in on the rising edge of CSB.

## NETWORK LAYER

## Packet Error Code

The PEC is a 15-bit cyclic redundancy check (CRC) value calculated for all of the bits in a register group in the order they are passed, using the initial PEC value of 000000000010000 and the following characteristic polynomial: x 15 + x 14 + x 10 + x 8 + x 7 + x 4 + x 3 + 1.

To calculate the 15-bit PEC value, a simple procedure can be established:

1. Initialize the PEC to 000000000010000 (PEC is a 15 -bit register group).
2. For each bit DIN coming into the PEC register group, set:
- IN0 = DIN XOR PEC, Bit 14
- IN3 = IN0 XOR PEC, Bit 2
- IN4 = IN0 XOR PEC, Bit 3
- IN7 = IN0 XOR PEC, Bit 6
- IN8 = IN0 XOR PEC, Bit 7
- IN10 = IN0 XOR PEC, Bit 9
- IN14 = IN0 XOR PEC, Bit 13
3. Update the 15-bit PEC as follows:
- PEC, Bit 14 = IN14
- PEC, Bit 13 = PEC, Bit 12
- PEC, Bit 12 = PEC, Bit 11
- PEC, Bit 11 = PEC, Bit 10
- PEC, Bit 10 = IN10
- PEC, Bit 9 = PEC, Bit 8
- PEC, Bit 8 = IN8
- PEC, Bit 7 = IN7
- PEC, Bit 6 = PEC, Bit 5
- PEC, Bit 5 = PEC, Bit 4
- PEC, Bit 4 = IN4
- PEC, Bit 3 = IN3
- PEC, Bit 2 = PEC, Bit 1
- PEC, Bit 1 = PEC, Bit 0
- PEC, Bit 0 = IN0
4. Go back to Step 2 until all the data is shifted. The final PEC (16 bits) is the 15-bit value in the PEC register with a 0 bit appended to its LSB.

Figure 88 shows the 15-bit PEC algorithm. An example to calculate the PEC for a 16-bit word (0x0001) is listed in Table 45. The PEC for 0x0001 is computed as 0x3D6E after stuffing a 0 bit at the LSB. For longer data streams, the PEC is valid at the end of the last bit of data sent to the PEC register.

The ADBMS1818 calculates the PEC for any command or data received and compares it with the PEC following the command or data. The command or data is regarded as valid only if the PEC matches. ADBMS1818 also attaches the calculated PEC at the end of the data it shifts out. Table 46 shows the format of PEC while writing to or reading from ADBMS1818.

## THEORY OF OPERATION

<!-- image -->

Figure 88. 15-Bit PEC Computation Circuit

| PEC, Bit 13   |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   1 |   1 |   0 | 0   | 0        |
|---------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|----------|
| PEC, Bit 13   |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   1 |   1 | 0   | 0        |
| PEC, Bit 12   |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   1 |   1 |   0 | 1   | 1        |
| PEC, Bit 11   |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   1 |   1 |   0 |   1 | 1   | 1        |
| PEC, Bit 10   |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   1 |   1 |   0 |   1 |   1 | 1   | 1        |
| PEC, Bit 9    |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 | 1   | 1        |
| PEC, Bit 8    |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   1 | 0   | 0        |
| PEC, Bit 7    |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   0 |   1 | 1   | 1        |
| PEC, Bit 6    |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 | 0   | 0        |
| PEC, Bit 5    |   0 |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 | 1   | 1        |
| PEC, Bit 4    |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   1 | 1   | 1        |
| PEC, Bit 3    |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   0 |   0 | 0   | 0        |
| PEC, Bit 2    |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 | 1   | 1        |
| PEC, Bit 1    |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   1 | 1   | 1        |
| PEC, Bit 0    |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   1 |   1 | 1   | 1        |
| IN14          |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   1 |   1 |   0 |   0 |     | 0        |
| IN10          |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   1 |   1 |   0 |   1 |   1 |   1 |     | PEC Word |
| IN8           |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   1 |   0 |     |          |
| IN7           |   0 |   0 |   1 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   0 |   1 |   1 |     |          |
| IN4           |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   0 |   0 |   0 |   1 |   1 |     |          |
| IN3           |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   0 |   0 |   0 |     |          |
| IN0           |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |   1 |   1 |   1 |   1 |   1 |     |          |
| DIN           |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   0 |   1 |     |          |
| Clock Cycle   |   0 |   1 |   2 |   3 |   4 |   5 |   6 |   7 |   8 |   9 |  10 |  11 |  12 |  13 |  14 |  15 | 16  |          |

## Table 45. PEC Calculation for 0x0001

## Table 46. Write/Read PEC Format

| Name   | R/W   | Bit 7       | Bit 6       | Bit 5       | Bit 4       | Bit 3       | Bit 2      | Bit 1      | Bit 0       |
|--------|-------|-------------|-------------|-------------|-------------|-------------|------------|------------|-------------|
| PEC0   | R     | PEC, Bit 14 | PEC, Bit 13 | PEC, Bit 12 | PEC, Bit 11 | PEC, Bit 10 | PEC, Bit 9 | PEC, Bit 8 | PEC, Bit 17 |
| PEC1   | R     | PEC, Bit 6  | PEC, Bit 5  | PEC, Bit 4  | PEC, Bit 3  | PEC, Bit 2  | PEC, Bit 1 | PEC, Bit 0 | 0           |

## THEORY OF OPERATION

While writing any command to ADBMS1818, the command bytes CMD0 and CMD1 (see Table 49 and Table 50) and the PEC bytes PEC0 and PEC1 are sent on Port A in the following order:

## CMD0, CMD1, PEC0, PEC1

After a write command to daisy-chained ADBMS1818 devices, data is sent to each device followed by the PEC. For example, when writing Configuration Register Group A to two daisy-chained devices (primary device P, stacked device S), the data is sent to the primary device on Port A in the following order:

CFGAR0(S), … , CFGAR5(S), PEC0(S), PEC1(S), CFGAR0(P), … , CFGAR5(P), PEC0(P), PEC1(P)

After a read command for daisy-chained devices, each device shifts out its data and the PEC that it computed for its data on Port A followed by the data received on Port B. For example, when reading Status Register Group B from two daisy -chained devices (primary device P, stacked device S), the primary device sends out data on Port A in the following order:

STBR0(P), … , STBR5(P), PEC0(P), PEC1(P), STBR0(S), … , STBR5(S), PEC0(S), PEC1(S)

See the Bus Protocols section for the command format.

All devices in a daisy-chained configuration receive the command bytes simultaneously. For example, to initiate ADC conversions in a stack of devices, a single ADCV command is sent, and all devices start conversions at the same time. For read and write commands, a single command is sent, and the stacked devices effectively turn into a cascaded shift register, in which data is shifted through each device to the next higher (on a write) or the next lower (on a read) device in the stack. See the Serial Interface Overview section.

## Polling Methods

The simplest method to determine ADC completion is for the controller to start an ADC conversion and wait for the specified conversion time to pass before reading the results.

If using a single ADBMS1818 that communicates in SPI mode (ISOMD pin tied low), there are two methods of polling. The first method is to hold CSB low after an ADC conversion command is sent. After entering a conversion command, the SDO line is driven low when the device is busy performing conversions. SDO is pulled high when the device completes conversions. However, SDO also goes high when CSB goes high even if the device has not completed the conversion (see Figure 89). A problem with this method is that the controller is not free to perform other serial communications while waiting for ADC conversions to complete.

The next method overcomes this limitation. The controller can send an ADC start command, perform other tasks, and then send a poll ADC converter status (PLADC) command to determine the status of the ADC conversions (see Figure 90). After entering the PLADC command, SDO goes low if the device is busy performing conversions. SDO is pulled high at the end of conversions. However, SDO also goes high when CSB goes high even if the device has not completed the conversion.

If using a single ADBMS1818 that communicates in isoSPI mode, the low-side port transmits a data pulse only in response to a master isoSPI pulse received by it. Therefore, after entering the command in either method of polling described previously, isoSPI data pulses are sent to the part to update the conversion status. These pulses can be sent using the LTC6820 by simply clocking its SCK pin. In response to this pulse, the ADBMS1818 sends back a low isoSPI pulse if it is still busy performing conversions or a high data pulse if it has completed the conversions. If a CSB high isoSPI pulse is sent to the device, the device exits the polling command.

In a daisy-chained configuration of N stacked devices, the same two polling methods can be used. If the bottom device communicates in SPI mode, the SDO of the bottom device indicates the conversion status of the entire stack. That is, SDO remains low until all the devices in the stack have completed the conversions. In the first method of polling, after an ADC conversion command is sent, clock pulses are sent on SCK while keeping CSB low. The SDO status becomes valid only at the end of N clock pulses on SCK. During the first N clock pulses, the bottom ADBMS1818 in the daisy chain outputs a 0 or a low data pulse. After N clock pulses, the output data from the bottom ADBMS1818 gets updated for every clock pulse that follows (see Figure 91). In the second method, the PLADC command is sent followed by clock pulses on SCK while keeping CSB low. Similar to the first method, the SDO status is valid only after N clock cycles on SCK and gets updated after every clock cycle that follows (see Figure 92).

If the bottom device communicates in isoSPI mode, isoSPI data pulses are sent to the device to update the conversion status. Using the LTC6820, this action can be achieved by just clocking the SCK pin. The conversion status is valid only after the bottom ADBMS1818 device receives N isoSPI data pulses and the status gets updated for every isoSPI data pulse that follows. The device returns a low data pulse if any of the devices in the stack is busy performing conversions and returns a high data pulse if all the devices are free.

## THEORY OF OPERATION

<!-- image -->

Figure 89. SDO Polling After an ADC Conversion Command (Single ADBMS1818)

<!-- image -->

Figure 90. SDO Polling Using PLADC Command (Single ADBMS1818)

Figure 91. SDO Polling After an ADC Conversion Command (Daisy-Chain Configuration)

<!-- image -->

Figure 92. SDO Polling Using PLADC Command (Daisy-Chain Configuration)

<!-- image -->

## THEORY OF OPERATION

## Bus Protocols

The protocol formats for commands are depicted in Table 48, Table 49, and Table 50. Table 47 is the key for reading the protocol diagrams.

## Table 47. Protocol Key

| Byte   | Description                   |
|--------|-------------------------------|
| CMD0   | Command Byte 0 (see Table 51) |
| CMD1   | Command Byte 1 (see Table 51) |

## Table 48. Poll Command

8

CMD0

## Table 49. Write Command

8

8

CMD0

CMD1

## Table 50. Read Command

8

Data byte low

8

Data byte high

| 8    | 8    | 8    | 8    | 8             |    | 8              | 8    | 8    | 8            |    | 8            |
|------|------|------|------|---------------|----|----------------|------|------|--------------|----|--------------|
| CMD0 | CMD1 | PEC0 | PEC1 | Data byte low | …  | Data byte high | PEC0 | PEC1 | Shift Byte 1 | …  | Shift Byte n |

Command Format: The format for the commands is shown in Table 51. CC, Bits[10:0] is the 11-bit command code. A list of all the command codes is shown in Table 52. All commands have a value 0 for CMD0, Bit 7 through CMD0, Bit 3. The PEC must be computed on the entire 16-bit command (CMD0 and CMD1).

Table 51. Command Format

| Name   | R/W   | Bit 7     | Bit 6     | Bit 5     | Bit 4     | Bit 3     | Bit 2      | Bit 1     | Bit 0     |
|--------|-------|-----------|-----------|-----------|-----------|-----------|------------|-----------|-----------|
| CMD0   | W     | 0         | 0         | 0         | 0         | 0         | CC, Bit 10 | CC, Bit 9 | CC, Bit 8 |
| CMD1   | W     | CC, Bit 7 | CC, Bit 6 | CC, Bit 5 | CC, Bit 4 | CC, Bit 3 | CC, Bit 2  | CC, Bit 1 | CC, Bit 0 |

## Commands

Table 52 lists all the commands and their options.

## Table 52. Command Codes

|                                      |        |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |   CC, Bits[10:0] - Command Code |
|--------------------------------------|--------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| Command Description                  | Name   |                              10 |                               9 |                               8 |                               7 |                               6 |                               5 |                               4 |                               3 |                               2 |                               1 |                               0 |
| Write Configuration Register Group A | WRCFGA |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |
| Write Configuration Register Group B | WRCFGB |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |                               0 |                               1 |                               0 |                               0 |
| Read Configuration Register Group A  | RDCFGA |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |
| Read Configuration Register Group B  | RDCFGB |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |                               0 |                               1 |                               1 |                               0 |
| Read Cell Voltage Register Group A   | RDCVA  |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |                               0 |
| Read Cell Voltage Register Group B   | RDCVB  |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               1 |                               0 |
| Read Cell Voltage Register Group C   | RDCVC  |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |                               0 |                               0 |
| Read Cell Voltage Register Group D   | RDCVD  |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |                               1 |                               0 |
| Read Cell Voltage Register Group E   | RDCVE  |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |                               0 |                               1 |
| Read Cell Voltage Register Group F   | RDCVF  |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               0 |                               1 |                               1 |
| Read Auxiliary Register Group A      | RDAUXA |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               1 |                               0 |                               0 |
| Read Auxiliary Register Group B      | RDAUXB |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               1 |                               1 |                               0 |
| Read Auxiliary Register Group C      | RDAUXC |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               0 |                               1 |                               1 |                               0 |                               1 |

8

PEC0

8

CMD1

8

PEC1

8

PEC0

…

Table 47. Protocol Key (Continued)

| Byte   | Description                              |
|--------|------------------------------------------|
| PEC0   | PEC Byte 0 (see Table 46)                |
| PEC1   | PEC Byte 1 (see Table 46)                |
| n      | Number of bytes                          |
| …      | Continuation of protocol Master to slave |
|        | Slave to master                          |

8

PEC1

8

PEC0

8

PEC1

8

Shift Byte 1

Poll Data

…

8

Shift Byte n

## THEORY OF OPERATION

Table 52. Command Codes (Continued)

|                                                                                          |             | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   | CC, Bits[10:0] - Command Code   |
|------------------------------------------------------------------------------------------|-------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| Command Description                                                                      | Name        | 10                              | 9                               | 8                               | 7                               | 6                               | 5                               | 4                               | 3                               | 2                               | 1                               | 0                               |
| Read Auxiliary Register Group D                                                          | RDAUXD      | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 1                               | 1                               | 1                               |
| Read Status Register Group A                                                             | RDSTATA     | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 0                               | 0                               | 0                               | 0                               |
| Read Status Register Group B                                                             | RDSTATB     | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 0                               | 0                               | 1                               | 0                               |
| Write S Control Register Group                                                           | WRSCTRL     | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 0                               | 1                               | 0                               | 0                               |
| Write PWM Register Group                                                                 | WRPWM       | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 0                               | 0                               | 0                               | 0                               | 0                               |
| Write PWM/S Control Register Group B                                                     | WRPSB       | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 1                               | 1                               | 0                               | 0                               |
| Read S Control Register Group                                                            | RDSCTRL     | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 0                               | 1                               | 1                               | 0                               |
| Read PWM Register Group                                                                  | RDPWM       | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 0                               | 0                               | 0                               | 1                               | 0                               |
| Read PWM/S Control Register Group B                                                      | RDPSB       | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 1                               | 1                               | 1                               | 0                               |
| Start S Control Pulsing and Poll Status                                                  | STSCTRL     | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 1                               | 0                               | 0                               | 1                               |
| Clear S Control Register Group                                                           | CLRSCTRL    | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               | 1                               | 0                               | 0                               | 0                               |
| Start Cell Voltage ADC Conversion and Poll Status                                        | ADCV        | 0                               | 1                               | MD, Bit 1                       | MD, Bit 0                       | 1                               | 1                               | DCP                             | 0                               | CH, Bit 2                       | CH, Bit 1                       | CH, Bit 0                       |
| Start Open Wire ADC Conversion and Poll Status                                           | ADOW        | 0                               | 1                               | MD, Bit 1                       | MD, Bit 0                       | PUP                             | 1                               | DCP                             | 1                               | CH, Bit 2                       | CH, Bit 1                       | CH, Bit 0                       |
| Start Self Test Cell Voltage Conversion and Poll Status                                  | CVST        | 0                               | 1                               | MD, Bit 1                       | MD, Bit 0                       | ST, Bit 1                       | ST, Bit 0                       | 0                               | 0                               | 1                               | 1                               | 1                               |
| Start Overlap Measurements of Cell 7 and Cell 13 Voltages                                | ADOL        | 0                               | 1                               | MD, Bit 1                       | MD, Bit 0                       | 0                               | 0                               | DCP                             | 0                               | 0                               | 0                               | 1                               |
| Start GPIOs ADC Conversion and Poll Status                                               | ADAX        | 1                               | 0                               | MD, Bit 1                       | MD, Bit 0                       | 1                               | 1                               | 0                               | 0                               | CHG, Bit 2                      | CHG, Bit 1                      | CHG, Bit 0                      |
| Start GPIOs ADC Conversion with Digital Redundancy and Poll Status                       | ADAXD       | 1                               | 0                               | MD, Bit 1                       | MD, Bit 0                       | 0                               | 0                               | 0                               | 0                               | CHG, Bit 2                      | CHG, Bit 1                      | CHG, Bit 0                      |
| Start GPIOs Open Wire ADC Conversion and Poll Status                                     | AXOW        | 1                               | 0                               | MD, Bit 1                       | MD, Bit 0                       | PUP                             | 0                               | 1                               | 0                               | CHG, Bit 2                      | CHG, Bit 1                      | CHG, Bit 0                      |
| Start Self Test GPIOs Conversion and Poll Status                                         | AXST        | 1                               | 0                               | MD, Bit 1                       | MD, Bit 0                       | ST, Bit 1                       | ST, Bit 0                       | 0                               | 0                               | 1                               | 1                               | 1                               |
| Start Status Group ADC Conversion and Poll Status                                        | ADSTAT      | 1                               | 0                               | MD, Bit 1                       | MD, Bit 0                       | 1                               | 1                               | 0                               | 1                               | CHST, Bit 2                     | CHST, Bit 1                     | CHST, Bit 0                     |
| Start Status Group ADC Conversion with Digital                                           | ADSTATD     | 1                               | 0                               | MD, Bit                         | MD, Bit                         | 0                               | 0                               | 0                               | 1                               | CHST, Bit                       | CHST, Bit                       | CHST, Bit 0                     |
| Start Self Test Status Group Conversion and Poll                                         | STATST      | 1                               | 0                               | MD, Bit                         | MD, Bit 0                       | ST, Bit 1                       | ST, Bit 0                       | 0                               | 1                               | 1                               | 1                               | 1                               |
| Status Start Combined Cell Voltage and GPIO1, GPIO2                                      | ADCVAX      | 1                               | 0                               | 1 MD, Bit                       | MD, Bit                         | 1                               | 1                               | DCP                             | 1                               | 1                               | 1                               | 1                               |
| Conversion and Poll Status Start Combined Cell Voltage and SC Conversion and Poll Status | ADCVSC      | 1                               | 0                               | 1 MD, Bit 1                     | 0 MD, Bit 0                     | 1                               | 1                               | DCP                             | 0                               | 1                               | 1                               | 1                               |
| Clear Auxiliary Register Groups                                                          | CLRAUX      | 1 1                             | 1                               | 1                               | 0                               |                                 |                                 |                                 |                                 |                                 |                                 | 0                               |
| Clear Cell Voltage Register Groups                                                       | CLRCELL     | 1                               | 1                               | 1                               | 0                               | 0                               | 0 0                             | 1                               | 0                               | 0                               | 0                               | 1                               |
| Clear Status Register Groups                                                             | CLRSTAT     |                                 | 1                               | 1                               | 0                               | 0 0                             | 0                               | 1 1                             | 0 0                             | 0 0                             | 1 1                             | 1                               |
| Poll ADC Conversion Status                                                               |             |                                 |                                 |                                 |                                 |                                 |                                 |                                 |                                 |                                 |                                 |                                 |
|                                                                                          | PLADC       | 1                               | 1                               | 1                               | 0                               | 0                               | 0                               | 1                               | 0                               | 1                               | 0                               | 0                               |
| Diagnose MUX and Poll Status                                                             | DIAGN       | 1                               | 1                               | 1                               | 0                               | 0                               | 0                               | 1                               | 0                               | 1                               | 0                               | 1                               |
| Write COMM Register Group                                                                | WRCOMM      | 1                               | 1                               | 1                               | 0                               | 0                               | 1                               | 0                               | 0                               | 0                               | 0                               | 1                               |
| Read COMM Register Group                                                                 | RDCOMM      | 1 1                             | 1                               | 1                               | 0                               | 0                               | 1                               | 0                               | 0                               | 0                               | 1                               | 0                               |
| Start I2C/SPI Communication Mute Discharge                                               | STCOMM Mute | 0                               | 1 0                             | 1 0                             | 0 0                             | 0 0                             | 1 1                             | 0 0                             | 0 1                             | 0 0                             | 1 0                             | 1 0                             |
| Unmute                                                                                   |             |                                 | 0                               | 0                               | 0                               | 0                               | 1                               | 0                               | 1                               | 0                               | 0                               | 1                               |
| Discharge                                                                                | Unmute      | 0                               |                                 |                                 |                                 |                                 |                                 |                                 |                                 |                                 |                                 |                                 |

## THEORY OF OPERATION

## Table 53. Command Bit Descriptions

| Name           | Description                                          | Values                                   | Values                                      | Values                                      | Values                                      | Values                                      | Values                                      | Values                                      | Values                                      | Values                                      |
|----------------|------------------------------------------------------|------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| MD, Bits[1:0]  | ADC Mode                                             | MD                                       | ADCOPT(CFGAR0, Bit 0) = 0                   | ADCOPT(CFGAR0, Bit 0) = 0                   | ADCOPT(CFGAR0, Bit 0) = 0                   | ADCOPT(CFGAR0, Bit 0) = 0                   | ADCOPT(CFGAR0, Bit 0) = 1                   | ADCOPT(CFGAR0, Bit 0) = 1                   | ADCOPT(CFGAR0, Bit 0) = 1                   | ADCOPT(CFGAR0, Bit 0) = 1                   |
|                |                                                      | 00                                       | 422 Hz mode                                 | 422 Hz mode                                 | 422 Hz mode                                 | 422 Hz mode                                 | 1 kHz mode                                  | 1 kHz mode                                  | 1 kHz mode                                  | 1 kHz mode                                  |
|                |                                                      | 01                                       | 27 kHz mode (fast) 14                       | 27 kHz mode (fast) 14                       | 27 kHz mode (fast) 14                       | 27 kHz mode (fast) 14                       | kHz mode                                    | kHz mode                                    | kHz mode                                    | kHz mode                                    |
|                |                                                      | 10                                       | 7 kHz mode (normal) 3 kHz                   | 7 kHz mode (normal) 3 kHz                   | 7 kHz mode (normal) 3 kHz                   | 7 kHz mode (normal) 3 kHz                   | mode                                        | mode                                        | mode                                        | mode                                        |
|                |                                                      | 11                                       | 26 Hz mode (filtered) 2 kHz                 | 26 Hz mode (filtered) 2 kHz                 | 26 Hz mode (filtered) 2 kHz                 | 26 Hz mode (filtered) 2 kHz                 | mode                                        | mode                                        | mode                                        | mode                                        |
| DCP            | Discharge Permitted                                  | DCP 0                                    | Discharge Not Permitted                     | Discharge Not Permitted                     | Discharge Not Permitted                     | Discharge Not Permitted                     | Discharge Not Permitted                     | Discharge Not Permitted                     | Discharge Not Permitted                     | Discharge Not Permitted                     |
|                |                                                      | 1                                        | Discharge Permitted                         | Discharge Permitted                         | Discharge Permitted                         | Discharge Permitted                         | Discharge Permitted                         | Discharge Permitted                         | Discharge Permitted                         | Discharge Permitted                         |
| CH, Bits[2:0]  | Cell Selection for ADC Conversion                    |                                          | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    |
|                |                                                      | CH                                       |                                             | 27 kHz                                      | 14 kHz                                      | 7 kHz                                       | 3 kHz                                       | 2 kHz 1 kHz                                 | 422 Hz                                      | 26 Hz                                       |
|                |                                                      | 000                                      | All cells                                   | 1.1 ms                                      | 1.3 ms                                      | 2.3 ms                                      | 3.0 ms                                      | 4.4 ms 7.2 ms                               | 12.8 ms                                     | 201 ms                                      |
|                |                                                      | 001                                      | Cells 1, 7, 13                              | 203 μs                                      | 232 μs                                      | 407 μs                                      | 523 μs                                      | 756 μs 1.2 ms                               | 2.2 ms                                      | 34 ms                                       |
|                |                                                      | 010                                      | Cells 2, 8, 14                              | 203 μs                                      | 232 μs                                      | 407 μs                                      | 523 μs 756                                  | μs 1.2 ms                                   | 2.2 ms                                      | 34 ms                                       |
|                |                                                      | 011                                      | Cells 3, 9, 15                              | 203 μs                                      | 232 μs                                      | 407 μs                                      | 523 μs 756                                  | μs 1.2 ms                                   | 2.2 ms                                      | 34 ms                                       |
|                |                                                      | 100                                      | Cells 4, 10, 16                             | 203 μs                                      | 232 μs                                      | 407 μs                                      | 523 μs 756                                  | μs 1.2 ms                                   | 2.2 ms                                      | 34 ms                                       |
|                |                                                      | 101                                      | Cells 5, 11, 17                             | 203 μs                                      | 232 μs                                      | 407 μs 523                                  | μs 756 μs                                   | 1.2 ms                                      | 2.2 ms                                      | 34 ms                                       |
|                |                                                      | 110                                      | Cells 6, 12, 18                             | 203 μs                                      | 232 μs                                      | 407 μs 523                                  | μs 756 μs                                   | 1.2 ms                                      | 2.2 ms                                      | 34 ms                                       |
| PUP            | Pull-Up/Pull- Down Current for Open Wire Conversions | PUP                                      | PUP                                         | PUP                                         | PUP                                         | PUP                                         | PUP                                         | PUP                                         | PUP                                         | PUP                                         |
|                |                                                      | 0                                        | Pull-down current                           | Pull-down current                           | Pull-down current                           | Pull-down current                           | Pull-down current                           | Pull-down current                           | Pull-down current                           | Pull-down current                           |
|                |                                                      | 1                                        | Pull-up current Self Test Conversion Result | Pull-up current Self Test Conversion Result | Pull-up current Self Test Conversion Result | Pull-up current Self Test Conversion Result | Pull-up current Self Test Conversion Result | Pull-up current Self Test Conversion Result | Pull-up current Self Test Conversion Result | Pull-up current Self Test Conversion Result |
| ST, Bits[1:0]  | Self Test Mode                                       | ST                                       |                                             | 27 kHz                                      | 14 kHz                                      | 3 kHz                                       | 2 kHz                                       | 1 kHz                                       | 422 Hz                                      | 26 Hz                                       |
|                | Selection                                            | 01                                       | Self Test 1                                 | 0x9565                                      | 0x9553                                      | 7 kHz 0x9555                                | 0x9555 0x9555                               | 0x9555                                      | 0x9555                                      | 0x9555                                      |
|                |                                                      | 10                                       | Self test 2                                 | 0x6A9A                                      | 0x6AAC                                      | 0x6AAA                                      | 0x6AAA 0x6AAA                               | 0x6AAA                                      | 0x6AAA                                      | 0x6AAA                                      |
| CHG, Bits[2:0] | GPIO Selection for ADC Conversion                    | Total Conversion Time in the 8 ADC Modes | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    |
|                |                                                      | CHG                                      |                                             | 27 kHz                                      | 14 kHz                                      | 7 kHz 3                                     | kHz 2 kHz                                   | 1 kHz                                       | 422 Hz                                      | 26 Hz                                       |
|                |                                                      | 000                                      | GPIO1 to GPIO5, 2nd Reference, GPIO6 to     | 1.8 ms                                      | 2.1 ms                                      | 3.9 ms 5.0ms                                | 7.4 ms                                      | 12.0 ms                                     | 21.3 ms                                     | 335 ms                                      |
|                |                                                      | 001                                      | GPIO1 and GPIO6                             | 380 μs                                      | 439 μs                                      | 788 μs                                      | 1.0 ms 1.5                                  | ms 2.4 ms                                   | 4.3 ms                                      | 67.1 ms                                     |
|                |                                                      | 010                                      | GPIO2 and GPIO7                             | 380 μs                                      | 439 μs                                      | 788 μs                                      | 1.0 ms 1.5                                  | ms 2.4 ms                                   | 4.3 ms                                      | 67.1 ms                                     |
|                |                                                      | 011                                      | GPIO3 and GPIO8                             | 380 μs                                      | 439 μs                                      | 788 μs                                      | 1.0 ms 1.5                                  | ms 2.4 ms                                   | 4.3 ms                                      | 67.1 ms                                     |
|                |                                                      | 100                                      | GPIO4 and GPIO9                             | 380 μs                                      | 439 μs                                      | 788 μs 1.0                                  | ms 1.5 ms                                   | 2.4 ms                                      | 4.3 ms                                      | 67.1 ms                                     |
|                |                                                      | 101                                      | GPIO5                                       | 200 μs                                      | 229 μs                                      | 403 μs                                      | 520 μs 753                                  | μs 1.2 ms                                   | 2.1 ms                                      | 34 ms                                       |
|                |                                                      | 110                                      | 2nd Reference                               | 200 μs                                      | 229 μs                                      | 403 μs 520                                  | μs 753                                      | μs 1.2 ms                                   | 2.1 ms                                      | 34 ms                                       |
| CHST, 1        | Status Selection                                     | Total Conversion Time in the 8 ADC Modes | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    | Total Conversion Time in the 8 ADC Modes    |
| Bits[2:0]      | Group                                                | CHST                                     |                                             | 27 kHz                                      | 14 kHz                                      | 7 kHz 3 kHz                                 | 2 kHz                                       | 1 kHz                                       | 422 Hz                                      | 26 Hz                                       |
|                |                                                      | 000                                      | SC, ITMP, VA, VD                            | 742 μs                                      | 858 μs                                      | 1.6 ms 2.0                                  | ms 3.0 ms                                   | 4.8 ms                                      | 8.5 ms                                      | 134 ms                                      |

## THEORY OF OPERATION

Table 53. Command Bit Descriptions (Continued)

| Name Description Values   | Name Description Values   | Name Description Values   | Name Description Values   | Name Description Values   | Name Description Values   | Name Description Values   | Name Description Values   | Name Description Values   | Name Description Values   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| 001 010 011               | SC                        | 200 μs                    | 229 μs 229 μs 229 μs      | 403 μs                    | 520 μs                    | 753 μs                    | 1.2 ms                    | 2.1 ms                    | 34 ms 34 ms 34 ms ms      |
|                           | ITMP                      | 200 μs                    |                           | 403 μs                    | 520 μs                    | 753 μs                    | 1.2 ms                    | 2.1 ms                    |                           |
|                           | VA                        | 200 μs                    |                           | 403 μs                    | 520 μs                    | 753 μs                    | 1.2 ms                    | 2.1 ms                    |                           |
| 100                       | VD                        | 200 μs                    | 229 μs                    | 403 μs                    | 520 μs                    | 753 μs                    | 1.2 ms                    | 2.1 ms                    | 34                        |

## MEMORY MAP

## Table 54. Configuration Register Group A

| Register                                 | R/W                                      | Bit 7                                    | Bit 6                                    | Bit 5                                    | Bit 4                                    | Bit 3                                    | Bit 2                                    | Bit 1                                    | Bit 0                                    |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| CFGAR0                                   | R/W                                      | GPIO5                                    | GPIO4                                    | GPIO3                                    | GPIO2                                    | GPIO1                                    | REFON                                    | DTEN                                     | ADCOPT                                   |
| CFGAR1                                   | R/W                                      | VUV[7]                                   | VUV[6]                                   | VUV[5]                                   | VUV[4]                                   | VUV[3]                                   | VUV[2]                                   | VUV[1]                                   | VUV[0]                                   |
| CFGAR2                                   | R/W                                      | VOV[3]                                   | VOV[2]                                   | VOV[1]                                   | VOV[0]                                   | VUV[11]                                  | VUV[10]                                  | VUV[9]                                   | VUV[8]                                   |
| CFGAR3                                   | R/W                                      | VOV[11]                                  | VOV[10]                                  | VOV[9]                                   | VOV[8]                                   | VOV[7]                                   | VOV[6]                                   | VOV[5]                                   | VOV[4]                                   |
| CFGAR4                                   | R/W                                      | DCC8                                     | DCC7                                     | DCC6                                     | DCC5                                     | DCC4                                     | DCC3                                     | DCC2                                     | DCC1                                     |
| CFGAR5                                   | R/W                                      | DCTO[3]                                  | DCTO[2]                                  | DCTO[1]                                  | DCTO[0]                                  | DCC12                                    | DCC11                                    | DCC10                                    | DCC9                                     |
| Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B | Table 55. Configuration Register Group B |
| Register                                 | R/W                                      | Bit 7                                    | Bit 6                                    | Bit 5                                    | Bit 4                                    | Bit 3                                    | Bit 2                                    | Bit 1                                    | Bit 0                                    |
| CFGBR0                                   | R/W                                      | DCC16                                    | DCC15                                    | DCC14                                    | DCC13                                    | GPIO9                                    | GPIO8                                    | GPIO7                                    | GPIO6                                    |
| CFGBR1                                   | R/W                                      | MUTE                                     | FDRF                                     | PS[1]                                    | PS[0]                                    | DTMEN                                    | DCC0                                     | DCC18                                    | DCC17                                    |
| CFGBR2                                   | R/W                                      | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    |
| CFGBR3                                   | R/W                                      | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    |
| CFGBR4                                   | R/W                                      | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    |
| CFGBR5                                   | R/W                                      | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    | RSVD0                                    |
| Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  | Table 56. Cell Voltage Register Group A  |
| Register                                 | R/W                                      | Bit 7                                    | Bit 6                                    | Bit 5                                    | Bit 4                                    | Bit 3                                    | Bit 2                                    | Bit 1                                    | Bit 0                                    |
| CVAR0                                    | R                                        | C1V[7]                                   | C1V[6]                                   | C1V[5]                                   | C1V[4]                                   | C1V[3]                                   | C1V[2]                                   | C1V[1]                                   | C1V[0]                                   |
| CVAR1                                    | R                                        | C1V[15]                                  | C1V[14]                                  | C1V[13]                                  | C1V[12]                                  | C1V[11]                                  | C1V[10]                                  | C1V[9]                                   | C1V[8]                                   |
| CVAR2                                    | R                                        | C2V[7]                                   | C2V[6]                                   | C2V[5]                                   | C2V[4]                                   | C2V[3]                                   | C2V[2]                                   | C2V[1]                                   | C2V[0]                                   |
| CVAR3                                    | R                                        | C2V[15]                                  | C2V[14]                                  | C2V[13]                                  | C2V[12]                                  | C2V[11]                                  | C2V[10]                                  | C2V[9]                                   | C2V[8]                                   |
| CVAR4                                    | R                                        | C3V[7]                                   | C3V[6]                                   | C3V[5]                                   | C3V[4]                                   | C3V[3]                                   | C3V[2]                                   | C3V[1]                                   | C3V[0]                                   |
| CVAR5                                    | R                                        | C3V[15]                                  | C3V[14]                                  | C3V[13]                                  | C3V[12]                                  | C3V[11]                                  | C3V[10]                                  | C3V[9]                                   | C3V[8]                                   |
| Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  | Table 57. Cell Voltage Register Group B  |
| Register                                 | R/W                                      | Bit 7                                    | Bit 6                                    | Bit 5                                    | Bit 4                                    | Bit 3                                    | Bit 2                                    | Bit 1                                    | Bit 0                                    |
| CVBR0                                    | R                                        | C4V[7]                                   | C4V[6]                                   | C4V[5]                                   | C4V[4]                                   | C4V[3]                                   | C4V[2]                                   | C4V[1]                                   | C4V[0]                                   |
| CVBR1                                    | R                                        | C4V[15]                                  | C4V[14]                                  | C4V[13]                                  | C4V[12]                                  | C4V[11]                                  | C4V[10]                                  | C4V[9]                                   | C4V[8]                                   |
| CVBR2                                    | R                                        | C5V[7]                                   | C5V[6]                                   | C5V[5]                                   | C5V[4]                                   | C5V[3]                                   | C5V[2]                                   | C5V[1]                                   | C5V[0]                                   |
| CVBR3                                    | R                                        | C5V[15]                                  | C5V[14]                                  | C5V[13]                                  | C5V[12]                                  | C5V[11]                                  | C5V[10]                                  | C5V[9]                                   | C5V[8]                                   |
| CVBR4                                    | R                                        | C6V[7]                                   | C6V[6]                                   | C6V[5]                                   | C6V[4]                                   | C6V[3]                                   | C6V[2]                                   | C6V[1]                                   | C6V[0]                                   |
| CVBR5                                    | R                                        | C6V[15]                                  | C6V[14]                                  | C6V[13]                                  | C6V[12]                                  | C6V[11]                                  | C6V[10]                                  | C6V[9]                                   | C6V[8]                                   |
| Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  | Table 58. Cell Voltage Register Group C  |
| Register                                 | R/W                                      | Bit 7                                    | Bit 6                                    | Bit 5                                    | Bit 4                                    | Bit 3                                    | Bit 2                                    | Bit 1                                    | Bit 0                                    |
| CVCR0                                    | R                                        | C7V[7]                                   | C7V[6]                                   | C7V[5]                                   | C7V[4]                                   | C7V[3]                                   | C7V[2]                                   | C7V[1]                                   | C7V[0]                                   |
| CVCR1                                    | R                                        | C7V[15]                                  | C7V[14]                                  | C7V[13]                                  | C7V[12]                                  | C7V[11]                                  | C7V[10]                                  | C7V[9]                                   | C7V[8]                                   |
| CVCR2 1                                  | R                                        | C8V[7] 1                                 | C8V[6] 1                                 | C8V[5] 1                                 | C8V[4] 1                                 | C8V[3] 1                                 | C8V[2] 1                                 | C8V[1] 1                                 | C8V[0] 1                                 |
| CVCR3 1                                  | R                                        | C8V[15] 1                                | C8V[14] 1                                | C8V[13] 1                                | C8V[12] 1                                | C8V[11] 1                                | C8V[10] 1                                | C8V[9] 1                                 | C8V[8] 1                                 |
| CVCR4                                    | R                                        | C9V[7]                                   | C9V[6]                                   | C9V[5]                                   | C9V[4]                                   | C9V[3]                                   | C9V[2]                                   | C9V[1]                                   | C9V[0]                                   |
| CVCR5                                    | R                                        | C9V[15]                                  | C9V[14]                                  | C9V[13]                                  | C9V[12]                                  | C9V[11]                                  | C9V[10]                                  | C9V[9]                                   | C9V[8]                                   |

## Table 59. Cell Voltage Register Group D

| Register   | R/W   | Bit 7    | Bit 6    | Bit 5    | Bit 4    | Bit 3    | Bit 2    | Bit 1   | Bit 0   |
|------------|-------|----------|----------|----------|----------|----------|----------|---------|---------|
| CVDR0      | R     | C10V[7]  | C10V[6]  | C10V[5]  | C10V[4]  | C10V[3]  | C10V[2]  | C10V[1] | C10V[0] |
| CVDR1      | R     | C10V[15] | C10V[14] | C10V[13] | C10V[12] | C10V[11] | C10V[10] | C10V[9] | C10V[8] |

## MEMORY MAP

| Table 59. Register                                                                                                                       | Voltage Register R/W                                                                                                                     | Group D Bit 7                                                                                                                            | (Continued) Bit 6                                                                                                                        | Bit 5                                                                                                                                    | Bit 4                                                                                                                                    | Bit 3                                                                                                                                    | Bit 2                                                                                                                                    | Bit 1                                                                                                                                    | Bit 0                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| CVDR2                                                                                                                                    | R                                                                                                                                        | C11V[7]                                                                                                                                  | C11V[6]                                                                                                                                  | C11V[5]                                                                                                                                  | C11V[4]                                                                                                                                  | C11V[3]                                                                                                                                  | C11V[2]                                                                                                                                  | C11V[1]                                                                                                                                  | C11V[0]                                                                                                                                  |
| CVDR3                                                                                                                                    | R                                                                                                                                        | C11V[15]                                                                                                                                 | C11V[14]                                                                                                                                 | C11V[13]                                                                                                                                 | C11V[12]                                                                                                                                 | C11V[11]                                                                                                                                 | C11V[10]                                                                                                                                 | C11V[9]                                                                                                                                  | C11V[8]                                                                                                                                  |
| CVDR4                                                                                                                                    | R                                                                                                                                        | C12V[7]                                                                                                                                  | C12V[6]                                                                                                                                  | C12V[5]                                                                                                                                  | C12V[4]                                                                                                                                  | C12V[3]                                                                                                                                  | C12V[2]                                                                                                                                  | C12V[1]                                                                                                                                  | C12V[0]                                                                                                                                  |
| CVDR5                                                                                                                                    | R                                                                                                                                        | C12V[15]                                                                                                                                 | C12V[14]                                                                                                                                 | C12V[13]                                                                                                                                 | C12V[12]                                                                                                                                 | C12V[11]                                                                                                                                 | C12V[10]                                                                                                                                 | C12V[9]                                                                                                                                  | C12V[8]                                                                                                                                  |
| Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  | Table 60. Cell Voltage Register Group E                                                                                                  |
| Register                                                                                                                                 | R/W                                                                                                                                      | Bit 7                                                                                                                                    | Bit 6                                                                                                                                    | Bit 5                                                                                                                                    | Bit 4                                                                                                                                    | Bit 3                                                                                                                                    | Bit 2                                                                                                                                    | Bit 1                                                                                                                                    | Bit 0                                                                                                                                    |
| CVER0                                                                                                                                    | R                                                                                                                                        | C13V[7]                                                                                                                                  | C13V[6]                                                                                                                                  | C13V[5]                                                                                                                                  | C13V[4]                                                                                                                                  | C13V[3]                                                                                                                                  | C13V[2]                                                                                                                                  | C13V[1]                                                                                                                                  | C13V[0]                                                                                                                                  |
| CVER1                                                                                                                                    | R                                                                                                                                        | C13V[15]                                                                                                                                 | C13V[14]                                                                                                                                 | C13V[13]                                                                                                                                 | C13V[12]                                                                                                                                 | C13V[11]                                                                                                                                 | C13V[10]                                                                                                                                 | C13V[9]                                                                                                                                  | C13V[8]                                                                                                                                  |
| CVER2 1                                                                                                                                  | R                                                                                                                                        | C14V[7] 1                                                                                                                                | C14V[6] 1                                                                                                                                | C14V[5] 1                                                                                                                                | C14V[4] 1                                                                                                                                | C14V[3] 1                                                                                                                                | C14V[2] 1                                                                                                                                | C14V[1] 1                                                                                                                                | C14V[0] 1                                                                                                                                |
| CVER3 1                                                                                                                                  | R                                                                                                                                        | C14V[15] 1                                                                                                                               | C14V[14] 1                                                                                                                               | C14V[13] 1                                                                                                                               | C14V[12] 1                                                                                                                               | C14V[11] 1                                                                                                                               | C14V[10] 1                                                                                                                               | C14V[9] 1                                                                                                                                | C14V[8] 1                                                                                                                                |
| CVER4                                                                                                                                    | R                                                                                                                                        | C15V[7]                                                                                                                                  | C15V[6]                                                                                                                                  | C15V[5]                                                                                                                                  | C15V[4]                                                                                                                                  | C15V[3]                                                                                                                                  | C15V[2]                                                                                                                                  | C15V[1]                                                                                                                                  | C15V[0]                                                                                                                                  |
| CVER5                                                                                                                                    | R                                                                                                                                        | C15V[15]                                                                                                                                 | C15V[14]                                                                                                                                 | C15V[13]                                                                                                                                 | C15V[12]                                                                                                                                 | C15V[11]                                                                                                                                 | C15V[10]                                                                                                                                 | C15V[9]                                                                                                                                  | C15V[8]                                                                                                                                  |
| 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. | 1 After performing the ADOL command, CVER2 and CVER3 of Cell Voltage Register Group E contain the result of measuring Cell 13 from ADC2. |
| Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  | Table 61. Cell Voltage Register Group F                                                                                                  |
| Register                                                                                                                                 | R/W                                                                                                                                      | Bit 7                                                                                                                                    | Bit 6                                                                                                                                    | Bit 5                                                                                                                                    | Bit 4                                                                                                                                    | Bit 3                                                                                                                                    | Bit 2                                                                                                                                    | Bit 1                                                                                                                                    | Bit 0                                                                                                                                    |
| CVFR0                                                                                                                                    | R                                                                                                                                        | C16V[7]                                                                                                                                  | C16V[6]                                                                                                                                  | C16V[5]                                                                                                                                  | C16V[4]                                                                                                                                  | C16V[3]                                                                                                                                  | C16V[2]                                                                                                                                  | C16V[1]                                                                                                                                  | C16V[0]                                                                                                                                  |
| CVFR1                                                                                                                                    | R                                                                                                                                        | C16V[15]                                                                                                                                 | C16V[14]                                                                                                                                 | C16V[13]                                                                                                                                 | C16V[12]                                                                                                                                 | C16V[11]                                                                                                                                 | C16V[10]                                                                                                                                 | C16V[9]                                                                                                                                  | C16V[8]                                                                                                                                  |
| CVFR2                                                                                                                                    | R                                                                                                                                        | C17V[7]                                                                                                                                  | C17V[6]                                                                                                                                  | C17V[5]                                                                                                                                  | C17V[4]                                                                                                                                  | C17V[3]                                                                                                                                  | C17V[2]                                                                                                                                  | C17V[1]                                                                                                                                  | C17V[0]                                                                                                                                  |
| CVFR3                                                                                                                                    | R                                                                                                                                        | C17V[15]                                                                                                                                 | C17V[14]                                                                                                                                 | C17V[13]                                                                                                                                 | C17V[12]                                                                                                                                 | C17V[11]                                                                                                                                 | C17V[10]                                                                                                                                 | C17V[9]                                                                                                                                  | C17V[8]                                                                                                                                  |
| CVFR4                                                                                                                                    | R                                                                                                                                        | C18V[7]                                                                                                                                  | C18V[6]                                                                                                                                  | C18V[5]                                                                                                                                  | C18V[4]                                                                                                                                  | C18V[3]                                                                                                                                  | C18V[2]                                                                                                                                  | C18V[1]                                                                                                                                  | C18V[0]                                                                                                                                  |
| CVFR5                                                                                                                                    | R                                                                                                                                        | C18V[15]                                                                                                                                 | C18V[14]                                                                                                                                 | C18V[13]                                                                                                                                 | C18V[12]                                                                                                                                 | C18V[11]                                                                                                                                 | C18V[10]                                                                                                                                 | C18V[9]                                                                                                                                  | C18V[8]                                                                                                                                  |
| Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     | Table 62. Auxiliary Register Group A                                                                                                     |
| Register                                                                                                                                 | R/W                                                                                                                                      | Bit 7                                                                                                                                    | Bit 6                                                                                                                                    | Bit 5                                                                                                                                    | Bit 4                                                                                                                                    | Bit 3                                                                                                                                    | Bit 2                                                                                                                                    | Bit 1                                                                                                                                    | Bit 0                                                                                                                                    |
| AVAR0                                                                                                                                    | R                                                                                                                                        | G1V[7]                                                                                                                                   | G1V[6]                                                                                                                                   | G1V[5]                                                                                                                                   | G1V[4]                                                                                                                                   | G1V[3]                                                                                                                                   | G1V[2]                                                                                                                                   | G1V[1]                                                                                                                                   | G1V[0]                                                                                                                                   |
| AVAR1                                                                                                                                    | R                                                                                                                                        | G1V[15]                                                                                                                                  | G1V[14]                                                                                                                                  | G1V[13]                                                                                                                                  | G1V[12]                                                                                                                                  | G1V[11]                                                                                                                                  | G1V[10]                                                                                                                                  | G1V[9]                                                                                                                                   | G1V[8]                                                                                                                                   |
| AVAR2                                                                                                                                    | R                                                                                                                                        | G2V[7]                                                                                                                                   | G2V[6]                                                                                                                                   | G2V[5]                                                                                                                                   | G2V[4]                                                                                                                                   | G2V[3]                                                                                                                                   | G2V[2]                                                                                                                                   | G2V[1]                                                                                                                                   | G2V[0]                                                                                                                                   |
| AVAR3                                                                                                                                    | R                                                                                                                                        | G2V[15]                                                                                                                                  | G2V[14]                                                                                                                                  | G2V[13]                                                                                                                                  | G2V[12]                                                                                                                                  | G2V[11]                                                                                                                                  | G2V[10]                                                                                                                                  | G2V[9]                                                                                                                                   | G2V[8]                                                                                                                                   |
| AVAR4                                                                                                                                    | R                                                                                                                                        | G3V[7]                                                                                                                                   | G3V[6]                                                                                                                                   | G3V[5]                                                                                                                                   | G3V[4]                                                                                                                                   | G3V[3]                                                                                                                                   | G3V[2]                                                                                                                                   | G3V[1]                                                                                                                                   | G3V[0]                                                                                                                                   |
| AVAR5                                                                                                                                    | R                                                                                                                                        | G3V[15]                                                                                                                                  | G3V[14]                                                                                                                                  | G3V[13]                                                                                                                                  | G3V[12]                                                                                                                                  | G3V[11]                                                                                                                                  | G3V[10]                                                                                                                                  | G3V[9]                                                                                                                                   | G3V[8]                                                                                                                                   |
| Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     | Table 63. Auxiliary Register Group B                                                                                                     |
| Register                                                                                                                                 | R/W                                                                                                                                      | Bit 7                                                                                                                                    | Bit 6                                                                                                                                    | Bit 5                                                                                                                                    | Bit 4                                                                                                                                    | Bit 3                                                                                                                                    | Bit 2                                                                                                                                    | Bit 1                                                                                                                                    | Bit 0                                                                                                                                    |
| AVBR0                                                                                                                                    | R                                                                                                                                        | G4V[7]                                                                                                                                   | G4V[6]                                                                                                                                   | G4V[5]                                                                                                                                   | G4V[4]                                                                                                                                   | G4V[3]                                                                                                                                   | G4V[2]                                                                                                                                   | G4V[1]                                                                                                                                   | G4V[0]                                                                                                                                   |
| AVBR1                                                                                                                                    | R                                                                                                                                        | G4V[15]                                                                                                                                  | G4V[14]                                                                                                                                  | G4V[13]                                                                                                                                  | G4V[12]                                                                                                                                  | G4V[11]                                                                                                                                  | G4V[10]                                                                                                                                  | G4V[9]                                                                                                                                   | G4V[8]                                                                                                                                   |
| AVBR2                                                                                                                                    | R                                                                                                                                        | G5V[7]                                                                                                                                   | G5V[6]                                                                                                                                   | G5V[5]                                                                                                                                   | G5V[4]                                                                                                                                   | G5V[3]                                                                                                                                   | G5V[2]                                                                                                                                   | G5V[1]                                                                                                                                   | G5V[0]                                                                                                                                   |
| AVBR3                                                                                                                                    | R                                                                                                                                        | G5V[15]                                                                                                                                  | G5V[14]                                                                                                                                  | G5V[13]                                                                                                                                  | G5V[12]                                                                                                                                  | G5V[11]                                                                                                                                  | G5V[10]                                                                                                                                  | G5V[9]                                                                                                                                   | G5V[8]                                                                                                                                   |
| AVBR4                                                                                                                                    | R                                                                                                                                        | REF[7]                                                                                                                                   | REF[6]                                                                                                                                   | REF[5]                                                                                                                                   | REF[4]                                                                                                                                   | REF[3]                                                                                                                                   | REF[2]                                                                                                                                   | REF[1]                                                                                                                                   | REF[0]                                                                                                                                   |
| AVBR5                                                                                                                                    | R                                                                                                                                        | REF[15]                                                                                                                                  | REF[14]                                                                                                                                  | REF[13]                                                                                                                                  | REF[12]                                                                                                                                  | REF[11]                                                                                                                                  | REF[10]                                                                                                                                  | REF[9]                                                                                                                                   | REF[8]                                                                                                                                   |
| Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     | Table 64. Auxiliary Register Group C                                                                                                     |
| Register                                                                                                                                 | R/W                                                                                                                                      | Bit 7                                                                                                                                    | Bit 6                                                                                                                                    | Bit 5                                                                                                                                    | Bit 4                                                                                                                                    | Bit 3                                                                                                                                    | Bit 2                                                                                                                                    | Bit 1                                                                                                                                    | Bit 0                                                                                                                                    |
| AVCR0                                                                                                                                    | R                                                                                                                                        | G6V[7]                                                                                                                                   | G6V[6]                                                                                                                                   | G6V[5]                                                                                                                                   | G6V[4]                                                                                                                                   | G6V[3]                                                                                                                                   | G6V[2]                                                                                                                                   | G6V[1]                                                                                                                                   | G6V[0]                                                                                                                                   |
| AVCR1                                                                                                                                    | R                                                                                                                                        | G6V[15]                                                                                                                                  | G6V[14]                                                                                                                                  | G6V[13]                                                                                                                                  | G6V[12]                                                                                                                                  | G6V[11]                                                                                                                                  | G6V[10]                                                                                                                                  | G6V[9]                                                                                                                                   | G6V[8]                                                                                                                                   |
| AVCR2                                                                                                                                    | R                                                                                                                                        | G7V[7]                                                                                                                                   | G7V[6]                                                                                                                                   | G7V[5]                                                                                                                                   | G7V[4]                                                                                                                                   | G7V[3]                                                                                                                                   | G7V[2]                                                                                                                                   | G7V[1]                                                                                                                                   | G7V[0]                                                                                                                                   |
| AVCR3                                                                                                                                    | R                                                                                                                                        | G7V[15]                                                                                                                                  | G7V[14]                                                                                                                                  | G7V[13]                                                                                                                                  | G7V[12]                                                                                                                                  | G7V[11]                                                                                                                                  | G7V[10]                                                                                                                                  | G7V[9]                                                                                                                                   | G7V[8]                                                                                                                                   |

## MEMORY MAP

## Table 64. Auxiliary Register Group C (Continued)

| Register                             | R/W                                  | Bit 7                                | Bit 6                                | Bit 5                                | Bit 4                                | Bit 3                                | Bit 2                                | Bit 1                                | Bit 0                                |
|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|
| AVCR4                                | R                                    | G8V[7]                               | G8V[6]                               | G8V[5]                               | G8V[4]                               | G8V[3]                               | G8V[2]                               | G8V[1]                               | G8V[0]                               |
| AVCR5                                | R                                    | G8V[15]                              | G8V[14]                              | G8V[13]                              | G8V[12]                              | G8V[11]                              | G8V[10]                              | G8V[9]                               | G8V[8]                               |
| Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D | Table 65. Auxiliary Register Group D |
| Register                             | R/W                                  | Bit 7                                | Bit 6                                | Bit 5                                | Bit 4                                | Bit 3                                | Bit 2                                | Bit 1                                | Bit 0                                |
| AVDR0                                | R                                    | G9V[7]                               | G9V[6]                               | G9V[5]                               | G9V[4]                               | G9V[3]                               | G9V[2]                               | G9V[1]                               | G9V[0]                               |
| AVDR1                                | R                                    | G9V[15]                              | G9V[14]                              | G9V[13]                              | G9V[12]                              | G9V[11]                              | G9V[10]                              | G9V[9]                               | G9V[8]                               |
| AVDR2                                | R                                    | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                |
| AVDR3                                | R                                    | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                |
| AVDR4                                | R                                    | C16OV                                | C16UV                                | C15OV                                | C15UV                                | C14OV                                | C14UV                                | C13OV                                | C13UV                                |
| AVDR5                                | R                                    | RSVD1                                | RSVD1                                | RSVD1                                | RSVD1                                | C18OV                                | C18UV                                | C17OV                                | C17UV                                |
| Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    | Table 66. Status Register Group A    |
| Register                             | R/W                                  | Bit 7                                | Bit 6                                | Bit 5                                | Bit 4                                | Bit 3                                | Bit 2                                | Bit 1                                | Bit 0                                |
| STAR0                                | R                                    | SC[7]                                | SC[6]                                | SC[5]                                | SC[4]                                | SC[3]                                | SC[2]                                | SC[1]                                | SC[0]                                |
| STAR1                                | R                                    | SC[15]                               | SC[14]                               | SC[13]                               | SC[12]                               | SC[11]                               | SC[10]                               | SC[9]                                | SC[8]                                |
| STAR2                                | R                                    | ITMP[7]                              | ITMP[6]                              | ITMP[5]                              | ITMP[4]                              | ITMP[3]                              | ITMP[2]                              | ITMP[1]                              | ITMP[0]                              |
| STAR3                                | R                                    | ITMP[15]                             | ITMP[14] VA[6]                       | ITMP[13] VA[5]                       | ITMP[12]                             | ITMP[11] VA[3]                       | ITMP[10]                             | ITMP[9]                              | ITMP[8] VA[0]                        |
| STAR4                                | R R                                  | VA[7]                                |                                      |                                      | VA[4]                                | VA[11]                               | VA[2]                                | VA[1]                                |                                      |
| STAR5                                |                                      | VA[15]                               | VA[14]                               | VA[13]                               | VA[12]                               |                                      | VA[10]                               | VA[9]                                | VA[8]                                |
| Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    | Table 67. Status Register Group B    |
| Register                             | R/W                                  | Bit 7                                | Bit 6                                | Bit 5                                | Bit 4                                | Bit 3                                | Bit 2                                | Bit 1                                | Bit 0                                |
| STBR0                                | R                                    | VD[7]                                | VD[6]                                | VD[5]                                | VD[4]                                | VD[3]                                | VD[2]                                | VD[1]                                | VD[0]                                |
| STBR1                                | R                                    | VD[15]                               | VD[14]                               | VD[13]                               | VD[12]                               | VD[11]                               | VD[10]                               | VD[9]                                | VD[8]                                |
| STBR2                                | R                                    | C4OV                                 | C4UV                                 | C3OV                                 | C3UV                                 | C2OV                                 | C2UV                                 | C1OV                                 | C1UV                                 |
| STBR3                                | R                                    | C8OV                                 | C8UV                                 | C7OV                                 | C7UV                                 | C6OV                                 | C6UV                                 | C5OV                                 | C5UV                                 |
| STBR4                                | R                                    | C12OV                                | C12UV                                | C11OV                                | C11UV                                | C10OV                                | C10UV                                | C9OV                                 | C9UV                                 |
| STBR5                                | R                                    | REV[3]                               | REV[2]                               | REV[1]                               | REV[0]                               | RSVD                                 | RSVD                                 | MUXFAIL                              | THSD                                 |
| Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        | Table 68. COMM Register Group        |
| Register                             | R/W                                  | Bit 7                                | Bit 6                                | Bit 5                                | Bit 4                                | Bit 3                                | Bit 2                                | Bit 1                                | Bit 0                                |
| COMM0                                | R/W                                  | ICOM0[3]                             | ICOM0[2]                             | ICOM0[1]                             | ICOM0[0]                             | D0[7]                                | D0[6]                                | D0[5]                                | D0[4]                                |
| COMM1                                | R/W                                  | D0[3]                                | D0[2]                                | D0[1]                                | D0[0]                                | FCOM0[3]                             | FCOM0[2]                             | FCOM0[1]                             | FCOM0[0]                             |
| COMM2                                | R/W                                  | ICOM1[3]                             | ICOM1[2]                             | ICOM1[1]                             | ICOM1[0]                             | D1[7]                                | D1[6]                                | D1[5]                                | D1[4]                                |
| COMM3                                | R/W                                  | D1[3]                                | D1[2]                                | D1[1]                                | D1[0]                                | FCOM1[3]                             | FCOM1[2]                             | FCOM1[1]                             | FCOM1[0]                             |
| COMM4                                | R/W                                  | ICOM2[3]                             | ICOM2[2]                             | ICOM2[1]                             | ICOM2[0]                             | D2[7]                                | D2[6]                                | D2[5]                                | D2[4]                                |
| COMM5                                | R/W                                  | D2[3]                                | D2[2]                                | D2[1]                                | D2[0]                                | FCOM2[3]                             | FCOM2[2]                             | FCOM2[1]                             | FCOM2[0]                             |
| Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   | Table 69. S Control Register Group   |
| Register                             | R/W                                  | Bit 7                                | Bit 6                                | Bit 5                                | Bit 4                                | Bit 3                                | Bit 2                                | Bit 1                                | Bit 0                                |
| SCTRL0                               | R/W                                  | SCTL2[3]                             | SCTL2[2]                             | SCTL2[1]                             | SCTL2[0]                             | SCTL1[3]                             | SCTL1[2]                             | SCTL1[1]                             | SCTL1[0]                             |
| SCTRL1                               | R/W                                  | SCTL4[3]                             | SCTL4[2]                             | SCTL4[1]                             | SCTL4[0]                             | SCTL3[3]                             | SCTL3[2]                             | SCTL3[1]                             | SCTL3[0]                             |
| SCTRL2                               | R/W                                  | SCTL6[3]                             | SCTL6[2]                             | SCTL6[1]                             | SCTL6[0]                             | SCTL5[3]                             | SCTL5[2]                             | SCTL5[1]                             | SCTL5[0]                             |
| SCTRL3                               | R/W                                  | SCTL8[3]                             | SCTL8[2]                             | SCTL8[1]                             | SCTL8[0]                             | SCTL7[3]                             | SCTL7[2]                             | SCTL7[1]                             | SCTL7[0]                             |
| SCTRL4 SCTRL5                        | R/W R/W                              | SCTL10[3] SCTL12[3]                  | SCTL10[2] SCTL12[2]                  | SCTL10[1] SCTL12[1]                  | SCTL10[0] SCTL12[0]                  | SCTL9[3] SCTL11[3]                   | SCTL9[2] SCTL11[2]                   | SCTL9[1] SCTL11[1]                   | SCTL9[0] SCTL11[0]                   |

## MEMORY MAP

## Table 70. PWM Register Group

| Register   | R/W   | Bit 7    | Bit 6    | Bit 5    | Bit 4    | Bit 3    | Bit 2    | Bit 1    | Bit 0    |
|------------|-------|----------|----------|----------|----------|----------|----------|----------|----------|
| PWMR0      | R/W   | PWM2[3]  | PWM2[2]  | PWM2[1]  | PWM2[0]  | PWM1[3]  | PWM1[2]  | PWM1[1]  | PWM1[0]  |
| PWMR1      | R/W   | PWM4[3]  | PWM4[2]  | PWM4[1]  | PWM4[0]  | PWM3[3]  | PWM3[2]  | PWM3[1]  | PWM3[0]  |
| PWMR2      | R/W   | PWM6[3]  | PWM6[2]  | PWM6[1]  | PWM6[0]  | PWM5[3]  | PWM5[2]  | PWM5[1]  | PWM5[0]  |
| PWMR3      | R/W   | PWM8[3]  | PWM8[2]  | PWM8[1]  | PWM8[0]  | PWM7[3]  | PWM7[2]  | PWM7[1]  | PWM7[0]  |
| PWMR4      | R/W   | PWM10[3] | PWM10[2] | PWM10[1] | PWM10[0] | PWM9[3]  | PWM9[2]  | PWM9[1]  | PWM9[0]  |
| PWMR5      | R/W   | PWM12[3] | PWM12[2] | PWM12[1] | PWM12[0] | PWM11[3] | PWM11[2] | PWM11[1] | PWM11[0] |

## Table 71. PWM/S Control Register Group B

| Register   | R/W   | Bit 7     | Bit 6     | Bit 5     | Bit 4     | Bit 3     | Bit 2     | Bit 1     | Bit 0     |
|------------|-------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
| PSR0       | R/W   | PWM14[3]  | PWM14[2]  | PWM14[1]  | PWM14[0]  | PWM13[3]  | PWM13[2]  | PWM13[1]  | PWM13[0]  |
| PSR1       | R/W   | PWM16[3]  | PWM16[2]  | PWM16[1]  | PWM16[0]  | PWM15[3]  | PWM15[2]  | PWM15[1]  | PWM15[0]  |
| PSR2       | R/W   | PWM18[3]  | PWM18[2]  | PWM18[1]  | PWM18[0]  | PWM17[3]  | PWM17[2]  | PWM7[1]   | PWM17[0]  |
| PSR3       | R/W   | SCTL14[3] | SCTL14[2] | SCTL14[1] | SCTL14[0] | SCTL13[3] | SCTL13[2] | SCTL13[1] | SCTL13[0] |
| PSR4       | R/W   | SCTL16[3] | SCTL16[2] | SCTL16[1] | SCTL16[0] | SCTL15[3] | SCTL15[2] | SCTL15[1] | SCTL15[0] |
| PSR5       | R/W   | SCTL18[3] | SCTL18[2] | SCTL18[1] | SCTL18[0] | SCTL17[3] | SCTL17[2] | SCTL17[1] | SCTL17[0] |

## Table 72. Memory Map Bit Descriptions

| Bit    | Description                          | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                | Values                                                                                                                                                                                                |
|--------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GPIOx  | GPIOx pin control                    | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           | Write: 0: GPIOx pin pull-down on 1: GPIOx pin pull-down off (default) Read: 0: GPIOx pin at Logic 0 1: GPIOx pin at Logic 1                                                                           |
| REFON  | Reference powered up                 | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            | 1: reference remains powered up until watchdog timeout 0: reference shuts down after conversions (default)                                                                                            |
| DTEN   | Discharge timer enable (read on- ly) | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     | 0: disables discharge timer 1: enables the discharge timer for discharge switches                                                                                                                     |
| ADCOPT | ADC mode option bit                  | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands | 0: selects modes 27 kHz, 7 kHz, 422 Hz or 26 Hz with MD, Bits[1:0] in ADC conversion commands (default) 1: selects modes 14 kHz, 3 kHz, 1 kHz, or 2 kHz with MD, Bits[1:0] in ADC conversion commands |
| VUV    | Undervoltage comparison volt- age 1  | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    | Comparison voltage = (VUV + 1) × 16 × 100 μV, default: VUV = 0x000                                                                                                                                    |
| VOV    | Overvoltage comparison voltage 1     | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          | Comparison voltage = VOV × 16 × 100 μV, default: VOV = 0x000                                                                                                                                          |
| DCC[x] | Discharge Cell x                     | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           | x = 1 to 18: 1: turn on shorting switch for Cell x 0: turn off shorting switch for Cell x (default) x = 0: 1: turn on GPIO9 pull-down 0: turn off GPIO9 pull-down (default)                           |
| DCTO   | Discharge time out value             | DCTO (write) Time (minutes) DCTO (read)                                                                                                                                                               | 0 Disabled 0 Disabled                                                                                                                                                                                 | 1 0.5                                                                                                                                                                                                 | 2 1                                                                                                                                                                                                   | 3                                                                                                                                                                                                     | 5 4                                                                                                                                                                                                   | 6 5                                                                                                                                                                                                   | 7 10 7 5 to                                                                                                                                                                                           | 8 15 8 10                                                                                                                                                                                             | 9 20 9                                                                                                                                                                                                | A 30 A                                                                                                                                                                                                | B 40 B 30                                                                                                                                                                                             | C 60 C 40                                                                                                                                                                                             | D 75 D                                                                                                                                                                                                | E 90                                                                                                                                                                                                  | F 120 F                                                                                                                                                                                               |
| DCTO   | Discharge time out value             |                                                                                                                                                                                                       |                                                                                                                                                                                                       | 1                                                                                                                                                                                                     | 2                                                                                                                                                                                                     | 2 3                                                                                                                                                                                                   | 5                                                                                                                                                                                                     | 6                                                                                                                                                                                                     | to                                                                                                                                                                                                    |                                                                                                                                                                                                       | 15                                                                                                                                                                                                    | 20                                                                                                                                                                                                    |                                                                                                                                                                                                       |                                                                                                                                                                                                       |                                                                                                                                                                                                       | E 75                                                                                                                                                                                                  | 90                                                                                                                                                                                                    |
| DCTO   | Discharge time out value             | Time left (mi- nutes)                                                                                                                                                                                 | or time- out                                                                                                                                                                                          | 0 to 0.5                                                                                                                                                                                              | 0.5 to 1                                                                                                                                                                                              | 1 to 2                                                                                                                                                                                                | to 3 4                                                                                                                                                                                                | to 4 5                                                                                                                                                                                                | 10                                                                                                                                                                                                    | to 15                                                                                                                                                                                                 | to 20                                                                                                                                                                                                 | to 30                                                                                                                                                                                                 | to 40                                                                                                                                                                                                 | to 60                                                                                                                                                                                                 | 60 to 75                                                                                                                                                                                              | to 90                                                                                                                                                                                                 | to 120                                                                                                                                                                                                |

## MEMORY MAP

Table 72. Memory Map Bit Descriptions (Continued)

| Bit           | Description                       | Values                                                                                                                                                                                                                                                                                                                                 |
|---------------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MUTE          | Mute status (read only)           | 1: mute is activated and discharging is disabled 0: mute is deactivated                                                                                                                                                                                                                                                                |
| FDRF          | Force digital redundancy failure  | 1: forces the digital redundancy comparison for ADC conversions to fail 0: enables the normal redundancy comparison                                                                                                                                                                                                                    |
| PS, Bits[1:0] | Digital redundancy path selection | 11: redundancy is applied only to the ADC3 digital path 10: redundancy is applied only to the ADC2 digital path 01: redundancy is applied only to the ADC1 digital path 00: redundancy is applied sequentially to the ADC1, ADC2, and ADC3 digital paths during cell conversions and applied to ADC1 during AUX and STATUS conversions |
| DTMEN         | Enable discharge timer monitor    | 1: enables the discharge timer monitor function if the DTEN pin is asserted 0: disables the discharge timer monitor function. The normal discharge timer function is enabled if the DTEN pin is asserted                                                                                                                               |
| CxV           | Cell x voltage 1                  | x = 1 to 18 16-bit ADC measurement value for Cell x Cell voltage for Cell x = CxV × 100 μV CxV is rest to 0xFFFF on power-up and after clear command                                                                                                                                                                                   |
| GxV           | GPIO x voltage 1                  | x = 1 to 9 16-bit ADC measurement value for GPIOx Voltage for GPIOx = GxV × 100 μV GxV is reset to 0xFFFF on power-up and after clear command                                                                                                                                                                                          |
| REF           | 2nd reference voltage 1           | 16-bit ADC measurement value for 2nd reference                                                                                                                                                                                                                                                                                         |
| SC            | Sum of all cells measurement 1    | 16-bit ADC measurement value of the sum of all cell voltages, sum of all cells voltage = SC × 100 μV × 30                                                                                                                                                                                                                              |
| ITMP          | Internal die temperature 1        | 16-bit ADC measurement value of the internal die temperature, temperature measurement voltage = ITMP × 100 μV/7.6mV/°C - 276°C                                                                                                                                                                                                         |
| VA            | Analog power supply voltage 1     | 16-bit ADC measurement value of the analog power supply voltage, analog power supply voltage = VA × 100 μV, the value of VA is set by external components that must be in the range of 4.5 V to 5.5 V for normal operation                                                                                                             |
| VD            | Digital power supply voltage 1    | 16-bit ADC measurement value of the digital power supply voltage, digital power supply voltage = VD × μV, normal range is within 2.7 V to 3.6 V                                                                                                                                                                                        |
| CxOV          | Cell x overvoltage flag           | x = 1 to 18 Cell voltage compared to VOV comparison voltage 0: cell x not flagged for overvoltage condition 1: cell x flagged                                                                                                                                                                                                          |
| CxUV          | Cell x undervoltage flag          | x = 1 to 18 Cell voltage compared to VUV comparison voltage 0: cell x not flagged for undervoltage condition 1: cell x flagged                                                                                                                                                                                                         |
| REV           | Revision code                     | Device revision code                                                                                                                                                                                                                                                                                                                   |
| RSVD          | Reserved bits                     | Read: read back value can be 1 or 0                                                                                                                                                                                                                                                                                                    |
| RSVD0         | Reserved bits                     | Read: read back value is always 0                                                                                                                                                                                                                                                                                                      |
| RSVD1         | Reserved bits                     | Read: read back value is always 1                                                                                                                                                                                                                                                                                                      |
| MUXFAIL       | Multiplexer self test result      | Read: 0: multiplexer passed self test 1: multiplexer failed self test                                                                                                                                                                                                                                                                  |
| THSD          | Thermal shutdown status           | Read: 0: thermal shutdown has not occurred                                                                                                                                                                                                                                                                                             |

## MEMORY MAP

Table 72. Memory Map Bit Descriptions (Continued)

| Bit     | Description                       | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         |                                   | 1: thermal shutdown has occurred, THSD Bit cleared to 0 on read of Status Register Group B                                                                                                                                                                                                                                                                                                                                                                          | 1: thermal shutdown has occurred, THSD Bit cleared to 0 on read of Status Register Group B                                                                                                                                                                                                                                                                                                                                                                          | 1: thermal shutdown has occurred, THSD Bit cleared to 0 on read of Status Register Group B                                                                                                                                                                                                                                                                                                                                                                          | 1: thermal shutdown has occurred, THSD Bit cleared to 0 on read of Status Register Group B                                                                                                                                                                                                                                                                                                                                                                          | 1: thermal shutdown has occurred, THSD Bit cleared to 0 on read of Status Register Group B                                                                                                                                                                                                                                                                                                                                                                          | 1: thermal shutdown has occurred, THSD Bit cleared to 0 on read of Status Register Group B                                                                                                                                                                                                                                                                                                                                                                          | 1: thermal shutdown has occurred, THSD Bit cleared to 0 on read of Status Register Group B                                                                                                                                                                                                                                                                                                                                                                          |
| SCTx[x] | S pin control bits                | 0000: drive S pin high (deasserted) 0001: send 1 high pulse on S pin 0010: send 2 high pulses on S pin 0011: send 3 high pulses on S pin 0100: send 4 high pulses on S pin 0101: send 5 high pulses on S pin 0110: send 6 high pulses on S pin 0111: send 7 high pulses on S pin                                                                                                                                                                                    | 0000: drive S pin high (deasserted) 0001: send 1 high pulse on S pin 0010: send 2 high pulses on S pin 0011: send 3 high pulses on S pin 0100: send 4 high pulses on S pin 0101: send 5 high pulses on S pin 0110: send 6 high pulses on S pin 0111: send 7 high pulses on S pin                                                                                                                                                                                    | 0000: drive S pin high (deasserted) 0001: send 1 high pulse on S pin 0010: send 2 high pulses on S pin 0011: send 3 high pulses on S pin 0100: send 4 high pulses on S pin 0101: send 5 high pulses on S pin 0110: send 6 high pulses on S pin 0111: send 7 high pulses on S pin                                                                                                                                                                                    | 0000: drive S pin high (deasserted) 0001: send 1 high pulse on S pin 0010: send 2 high pulses on S pin 0011: send 3 high pulses on S pin 0100: send 4 high pulses on S pin 0101: send 5 high pulses on S pin 0110: send 6 high pulses on S pin 0111: send 7 high pulses on S pin                                                                                                                                                                                    | 0000: drive S pin high (deasserted) 0001: send 1 high pulse on S pin 0010: send 2 high pulses on S pin 0011: send 3 high pulses on S pin 0100: send 4 high pulses on S pin 0101: send 5 high pulses on S pin 0110: send 6 high pulses on S pin 0111: send 7 high pulses on S pin                                                                                                                                                                                    | 0000: drive S pin high (deasserted) 0001: send 1 high pulse on S pin 0010: send 2 high pulses on S pin 0011: send 3 high pulses on S pin 0100: send 4 high pulses on S pin 0101: send 5 high pulses on S pin 0110: send 6 high pulses on S pin 0111: send 7 high pulses on S pin                                                                                                                                                                                    | 0000: drive S pin high (deasserted) 0001: send 1 high pulse on S pin 0010: send 2 high pulses on S pin 0011: send 3 high pulses on S pin 0100: send 4 high pulses on S pin 0101: send 5 high pulses on S pin 0110: send 6 high pulses on S pin 0111: send 7 high pulses on S pin                                                                                                                                                                                    |
| PWMx[x] | PWM discharge control             | 1xxx: drive S pin low (asserted) 0000: selects 0% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0001: selects 6.7% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0010: selects 13.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired ... 1110: selects 93.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired 1111: selects 100% discharge duty cycle if DCCx = 1 and watchdog timer has expired | 1xxx: drive S pin low (asserted) 0000: selects 0% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0001: selects 6.7% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0010: selects 13.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired ... 1110: selects 93.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired 1111: selects 100% discharge duty cycle if DCCx = 1 and watchdog timer has expired | 1xxx: drive S pin low (asserted) 0000: selects 0% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0001: selects 6.7% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0010: selects 13.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired ... 1110: selects 93.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired 1111: selects 100% discharge duty cycle if DCCx = 1 and watchdog timer has expired | 1xxx: drive S pin low (asserted) 0000: selects 0% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0001: selects 6.7% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0010: selects 13.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired ... 1110: selects 93.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired 1111: selects 100% discharge duty cycle if DCCx = 1 and watchdog timer has expired | 1xxx: drive S pin low (asserted) 0000: selects 0% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0001: selects 6.7% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0010: selects 13.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired ... 1110: selects 93.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired 1111: selects 100% discharge duty cycle if DCCx = 1 and watchdog timer has expired | 1xxx: drive S pin low (asserted) 0000: selects 0% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0001: selects 6.7% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0010: selects 13.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired ... 1110: selects 93.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired 1111: selects 100% discharge duty cycle if DCCx = 1 and watchdog timer has expired | 1xxx: drive S pin low (asserted) 0000: selects 0% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0001: selects 6.7% discharge duty cycle if DCCx = 1 and watchdog timer has expired 0010: selects 13.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired ... 1110: selects 93.3% discharge duty cycle if DCCx = 1 and watchdog timer has expired 1111: selects 100% discharge duty cycle if DCCx = 1 and watchdog timer has expired |
| ICOMn   | Initial communication bits        | Write                                                                                                                                                                                                                                                                                                                                                                                                                                                               | I 2 C SPI                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0110 Start 1000 CSB low                                                                                                                                                                                                                                                                                                                                                                                                                                             | 0001 Stop                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0001 Stop                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0000 Blank 1001 CSB high                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0111 No trans- mit 1111 No trans- mit                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ICOMn   | Initial communication bits        | Read                                                                                                                                                                                                                                                                                                                                                                                                                                                                | I 2 C SPI                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0110 Start from mas- ter 0111                                                                                                                                                                                                                                                                                                                                                                                                                                       | edge 0001 stop from mas- ter                                                                                                                                                                                                                                                                                                                                                                                                                                        | edge 0001 stop from mas- ter                                                                                                                                                                                                                                                                                                                                                                                                                                        | 0000 SDA low be- tween bytes 0000                                                                                                                                                                                                                                                                                                                                                                                                                                   | 0111 SDA high between bytes 0111                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Dn      | I 2 C/SPI communication data byte | Data transmitted (received) to (from) I 2 C/SPI slave device                                                                                                                                                                                                                                                                                                                                                                                                        | Data transmitted (received) to (from) I 2 C/SPI slave device                                                                                                                                                                                                                                                                                                                                                                                                        | Data transmitted (received) to (from) I 2 C/SPI slave device                                                                                                                                                                                                                                                                                                                                                                                                        | Data transmitted (received) to (from) I 2 C/SPI slave device                                                                                                                                                                                                                                                                                                                                                                                                        | Data transmitted (received) to (from) I 2 C/SPI slave device                                                                                                                                                                                                                                                                                                                                                                                                        | Data transmitted (received) to (from) I 2 C/SPI slave device                                                                                                                                                                                                                                                                                                                                                                                                        | Data transmitted (received) to (from) I 2 C/SPI slave device                                                                                                                                                                                                                                                                                                                                                                                                        |
| FCOMn   | Final communication control bits  | Write                                                                                                                                                                                                                                                                                                                                                                                                                                                               | I 2 C SPI                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0000 1000 Master ACK Master X000 1001                                                                                                                                                                                                                                                                                                                                                                                                                               | 0000 1000 Master ACK Master X000 1001                                                                                                                                                                                                                                                                                                                                                                                                                               | 1001 NACK Master NACK + stop                                                                                                                                                                                                                                                                                                                                                                                                                                        | 1001 NACK Master NACK + stop                                                                                                                                                                                                                                                                                                                                                                                                                                        | 1001 NACK Master NACK + stop                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| FCOMn   | Final communication control bits  | Read                                                                                                                                                                                                                                                                                                                                                                                                                                                                | I 2 C                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0000 ACK from master                                                                                                                                                                                                                                                                                                                                                                                                                                                | 0111 1111 ACK from slave NACK from slave                                                                                                                                                                                                                                                                                                                                                                                                                            | 0111 1111 ACK from slave NACK from slave                                                                                                                                                                                                                                                                                                                                                                                                                            | 0001 ACK from slave + stop from master                                                                                                                                                                                                                                                                                                                                                                                                                              | 1001 NACK from slave + stop from master                                                                                                                                                                                                                                                                                                                                                                                                                             |
| FCOMn   | Final communication control bits  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SPI                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 1111                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 1111                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 1111                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 1111                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 1111                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## APPLICATIONS INFORMATION

## PROVIDING DC POWER

## Simple Linear Regulator

The primary supply pin for the ADBMS1818 is the 5 V (±0.5 V) VREG  input pin. To generate the required 5 V supply for V REG , the DRIVE pin can be used to form a discrete regulator with the addition of a few external components, as shown in Figure 93. The DRIVE pin provides a 5.7 V output, capable of sourcing 1 mA. When buffered with an NPN transistor, the DRIVE pin provides a stable 5 V over temperature. The NPN transistor must be chosen to have a sufficient Beta over temperature (&gt; 40) to supply the necessary supply current. The peak V REG current requirement of the ADBMS1818 approaches 35 mA when simultaneously communicating over isoSPI and making ADC conversions. If the V REG pin is required to support any additional load, a transistor with an even higher Beta may be required.

Figure 93. Simple V REG Power Source Using NPN Pass Transistor

<!-- image -->

The NPN collector can be powered from any voltage source that is a minimum 6 V above V -. This includes the cells that are being monitored, or an unregulated power supply. A 100 Ω, 100 nF RC decoupling network is recommended for the collector power connection to protect the NPN from transients. The emitter of the NPN must be bypassed with a 1 µF capacitor. Larger capacitance must be avoided because this increases the wake-up time of the ADBMS1818. Some attention must be given to the thermal characteristic of the NPN, as there can be significant heating with a high collector voltage.

## Improved Regulator Power Efficiency

For improved efficiency when powering the ADBMS1818 from the cell stack, V REG can be powered from a dc-to-dc converter, rather than the NPN pass transistor. An ideal circuit is based on the LT8631 step-down regulator, as shown in Figure 94. A 100 Ω resistor is recommended between the battery stack and the LT8631 input, which prevents in-rush current when connecting to the stack and reduces conducted electromagnetic interference (EMI). The EN/UV pin must be connected to the DRIVE pin, which puts the

LT8631 into a low power state when the ADBMS1818 is in the sleep state.

Figure 94. V REG Powered From Cell Stack with High Efficiency Regulator

<!-- image -->

## INTERNAL PROTECTION AND FILTERING

## Internal Protection Features

The ADBMS1818 incorporates various ESD safeguards to ensure robust performance. An equivalent circuit showing the specific protection structures is shown in Figure 95. Zener- like suppressors are shown with their nominal clamp voltage, and the unmarked diodes exhibit standard PN junction behavior.

## Filtering of Cell and GPIO Inputs

The ADBMS1818 uses a Δ-Σ ADC, which includes a Δ-Σ modulator followed by a sinc3 finite impulse response (FIR) digital filter, which greatly relaxes input filtering requirements. Furthermore, the programmable oversampling ratio allows the user to determine the best trade-off between measurement speed and filter cutoff frequency. Even with this high order low-pass filter, fast transient noise can still induce some residual noise in measurements, especially in the faster conversion modes. This noise can be minimized by adding an RC, low-pass decoupling to each ADC input, which also helps reject potentially damaging high energy transients. Adding more than about 100 Ω to the ADC inputs begins to introduce a systematic error in the measurement, which can be improved by raising the filter capacitance or mathematically compensating in software with a calibration procedure. For situations that demand the highest level of battery voltage ripple rejection, grounded capacitor filtering is recommended. This configuration has a series resistance and capacitors that decouple high frequency noise to V . In systems where noise is less periodic or higher oversampling rates are in use, a differential capacitor filter structure is adequate. In this configuration there are series resistors to each input, but the capacitors connect between the adjacent C pins. However, the differential capacitor sections interact. As a result, the filter response is less consistent and results in less attenuation than predicted by the RC, by approximately a decade. Note that the capacitors only see one cell of applied voltage (thus smaller and lower cost) and tend to distribute transient energy uniformly across the IC (reducing stress events on the internal protection structure). Figure 96 shows the two methods schematically. ADC accuracy

## APPLICATIONS INFORMATION

varies with R and C as shown in the typical performance curves, but the error is minimized if R = 100 Ω and C = 10 nF. The GPIO

pins always use a grounded capacitor configuration because the measurements are all with respect to V -.

Figure 95. Internal ESD Protection Structures of the ADBMS1818

<!-- image -->

## APPLICATIONS INFORMATION

Figure 96. Input Filter Structure Configurations

<!-- image -->

<!-- image -->

## APPLICATIONS INFORMATION

## Using Nonstandard Cell Input Filters

A cell pin filter of 100 Ω and 10 nF is recommended for all applications. This filter provides the best combination of noise rejection and TME performance. In applications that use C pin RC filters larger than 100 Ω and 10 nF, there may be additional measurement error. Figure 97 shows how both total TME and TME variation increase as the RC time constant increases. The increased error is related to the mux settling. It is possible to reduce TME levels to near data sheet specifications by implementing an extra single channel conversion before issuing a standard all channel

ADCV command. Figure 98 shows the standard ADCV command sequence. Figure 98 shows the recommended command sequence and timing that allow the mux to settle. The purpose of the modified procedure is to allow the mux to settle at C1/C7/C13 before the start of the measurement cycle. The delay between the C1/C7/C13 ADCV command and the all channel ADCV command is dependent on the time constant of the RC being used. The general guidance is to wait 6τ between the C1/C7/C13 ADCV command and the all channel ADCV command. Figure 97 shows the expected TME when using the recommended command sequence.

<!-- image -->

Figure 97. Cell Measurement TME

<!-- image -->

Figure 98. ADC Command Order

<!-- image -->

## APPLICATIONS INFORMATION

## CELL BALANCING

## Cell Balancing with Internal MOSFETs

With passive balancing, if one cell in a series stack becomes overcharged, an S output can slowly discharge this cell by connecting it to a resistor. Each S output is connected to an internal N-channel MOSFET with a maximum on resistance of 10 Ω. An external resistor must be connected in series with these MOSFETs to allow most of the heat to be dissipated outside of the ADBMS1818 package, as shown in Figure 99.

The internal discharge switches (MOSFETs) S1 through S18 can be used to passively balance cells as shown in Figure 99 with balancing current of 200 mA or less (80 mA or less if the die temperature is over 85°C). Balancing current larger than 200 mA is not recommended for the internal switches due to excessive die heating. When discharging cells with the internal discharge switches, the die temperature must be monitored. See the Thermal Shutdown section.

Note that the antialiasing filter resistor is part of the discharge path and must be removed or reduced. Use of an RC for added cell voltage measurement filtering is permitted, but the filter resistor must remain small, typically around 10 Ω to reduce the effect on the balance current.

Figure 99. Internal/External Discharge Circuits

<!-- image -->

## Cell Balancing with External Transistors

For applications that require balancing currents above 200 mA or large cell filters, the S outputs can be used to control external transistors. The ADBMS1818 includes an internal pull-up PMOS transistor with a 1 kΩ series resistor. The S pins can act as digital outputs suitable for driving the gate of an external MOSFET, as shown in Figure 99. Figure 96 shows external MOSFET circuits that include RC filtering. For applications with very low cell voltages, the PMOS in Figure 99 can be replaced with a PNP. When a PNP is used, the resistor in series with the base must be reduced.

## Choosing a Discharge Resistor

When sizing the balancing resistor, it is important to know the typical battery imbalance and the allowable time for cell balancing. In most small battery applications, it is reasonable for the balancing circuitry to be able to correct for a 5% state of charge (SOC) error with 5 hours of balancing. For example, a 5 AHr battery with a 5% SOC imbalance has approximately 250 mA Hrs of imbalance. Using a 50 mA balancing current, the error can be corrected in 5 hours. With a 100 mA balancing current, the error can be corrected in 2.5 hours. In systems with very large batteries, it is difficult to use passive balancing to correct large SOC imbalances in short periods of time. The excessive heat created during balancing generally limits the balancing current. In large capacity battery applications, if short balancing times are required, an active balancing solution must be considered. When choosing a balance resistor, the following equations can be used to help determine a resistor value:

## Balance Current = %   of   SOC   Imbalance × Battery   Capacity Number   of   Hours   to   Balance

## Active Cell Balancing

## Balance Resistor = Nominal   Cell   Voltage Balance   Current

Applications that require 1 A or greater of cell balancing current must consider implementing an active balancing system. Active balancing allows for much higher balancing currents without the generation of excessive heat. Active balancing also allows for energy recovery since most of the balance current is redistributed back to the battery pack. Figure 100 shows a simple active balancing implementation using the LT8584. The LT8584 also has advanced features that can be controlled via the ADBMS1818. See the S Pin Pulsing Using the S Pin Control Settings section and the LT8584 data sheet for more details.

## APPLICATIONS INFORMATION

Figure 100. 18-Cell Battery Stack Module with Active Balancing

<!-- image -->

## APPLICATIONS INFORMATION

## DISCHARGE CONTROL DURING CELL MEASUREMENTS

If the discharge permitted (DCP) bit is high at the time of a cell measurement command, the S pin discharge states do not change during cell measurements. If the DCP bit is low, S pin discharge states are disabled while the corresponding cell or adjacent cells are being measured. If using an external discharge transistor, the relatively low 1 kΩ impedance of the internal ADBMS1818 PMOS transistors allow the discharge currents to fully turn off before the cell measurement. Table 73 shows the ADCV command with DCP = 0. In this table, off indicates that the S pin discharge is forced off irrespective of the state of the corresponding DCC bit. On indicates that the S pin discharge remains on during the measurement period if it was on prior to the measurement command.

In some cases, it is not possible for the automatic discharge control to eliminate all measurement error caused by running the discharges. This is due to the discharge transistor not turning off

Table 73. Discharge Control During an ADCV Command with DCP = 0

fast enough for the cell voltage to completely settle before the measurement starts. For the best measurement accuracy when running discharge, the mute and unmute commands must be used. The mute command can be issued to temporarily disable all discharge transistors before the ADCV command is issued. After the cell conversion completes, an unmute command can be sent to reenable all discharge transistors that were previously on. Using this method maximizes the measurement accuracy with a very small time penalty.

## Method to Verify Discharge Circuits

When using the internal discharge feature, the ability to verify discharge functionality can be implemented in the software. In applications using an external discharge MOSFET, an additional resistor can be added between the battery cell and the source of the discharge MOSFET, which allows the system to test discharge functionality.

|               | Cell Measurement Periods            | Cell Measurement Periods             | Cell Measurement Periods             | Cell Measurement Periods              | Cell Measurement Periods              | Cell Measurement Periods              | Cell Calibration Periods             | Cell Calibration Periods             | Cell Calibration Periods             | Cell Calibration Periods              | Cell Calibration Periods              | Cell Calibration Periods              |
|---------------|-------------------------------------|--------------------------------------|--------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| Discharge Pin | Cell 1, Cell 7, Cell 13 t 0 to t 1M | Cell 2, Cell 8, Cell 14 t 1M to t 2M | Cell 3, Cell 9, Cell 15 t 2M to t 3M | Cell 4, Cell 10, Cell 16 t 3M to t 4M | Cell 5, Cell 11, Cell 17 t 4M to t 5M | Cell 6, Cell 12, Cell 18 t 5M to t 6M | Cell 1, Cell 7, Cell 13 t 6M to t 1C | Cell 2, Cell 8, Cell 14 t 1C to t 2C | Cell 3, Cell 9, Cell 15 t 2C to t 3C | Cell 4, Cell 10, Cell 16 t 3C to t 4C | Cell 5, Cell 11, Cell 17 t 4C to t 5C | Cell 6, Cell 12, Cell 18 t 5C to t 6C |
| S1            | Off                                 | Off                                  | On                                   | On                                    | On                                    | Off                                   | Off                                  | Off                                  | On                                   | On                                    | On                                    | Off                                   |
| S2            | Off                                 | Off                                  | Off                                  | On                                    | On                                    | On                                    | Off                                  | Off                                  | Off                                  | On                                    | On                                    | On                                    |
| S3            | On                                  | Off                                  | Off                                  | Off                                   | On                                    | On                                    | On                                   | Off                                  | Off                                  | Off                                   | On                                    | On                                    |
| S4            | On                                  | On                                   | Off                                  | Off                                   | Off                                   | On                                    | On                                   | On                                   | Off                                  | Off                                   | Off                                   | On                                    |
| S5            | On                                  | On                                   | On                                   | Off                                   | Off                                   | Off                                   | On                                   | On                                   | On                                   | Off                                   | Off                                   | Off                                   |
| S6            | Off                                 | On                                   | On                                   | On                                    | Off                                   | Off                                   | Off                                  | On                                   | On                                   | On                                    | Off                                   | Off                                   |
| S7            | Off                                 | Off                                  | On                                   | On                                    | On                                    | Off                                   | Off                                  | Off                                  | On                                   | On                                    | On                                    | Off                                   |
| S8            | Off                                 | Off                                  | Off                                  | On                                    | On                                    | On                                    | Off                                  | Off                                  | Off                                  | On                                    | On                                    | On                                    |
| S9            | On                                  | Off                                  | Off                                  | Off                                   | On                                    | On                                    | On                                   | Off                                  | Off                                  | Off                                   | On                                    | On                                    |
| S10           | On                                  | On                                   | Off                                  | Off                                   | Off                                   | On                                    | On                                   | On                                   | Off                                  | Off                                   | Off                                   | On                                    |
| S11           | On                                  | On                                   | On                                   | Off                                   | Off                                   | Off                                   | On                                   | On                                   | On                                   | Off                                   | Off                                   | Off                                   |
| S12           | Off                                 | On                                   | On                                   | On                                    | Off                                   | Off                                   | Off                                  | On                                   | On                                   | On                                    | Off                                   | Off                                   |
| S13           | Off                                 | Off                                  | On                                   | On                                    | On                                    | Off                                   | Off                                  | Off                                  | On                                   | On                                    | On                                    | Off                                   |
| S14           | Off                                 | Off                                  | Off                                  | On                                    | On                                    | On                                    | Off                                  | Off                                  | Off                                  | On                                    | On                                    | On                                    |
| S15           | On                                  | Off                                  | Off                                  | Off                                   | On                                    | On                                    | On                                   | Off                                  | Off                                  | Off                                   | On                                    | On                                    |
| S16           | On                                  | On                                   | Off                                  | Off                                   | Off                                   | On                                    | On                                   | On                                   | Off                                  | Off                                   | Off                                   | On                                    |
| S17           | On                                  | On                                   | On                                   | Off                                   | Off                                   | Off                                   | On                                   | On                                   | On                                   | Off                                   | Off                                   | Off                                   |
| S18           | Off                                 | On                                   | On                                   | On                                    | Off                                   | Off                                   | Off                                  | On                                   | On                                   | On                                    | Off                                   | Off                                   |

## APPLICATIONS INFORMATION

Both circuits are shown in Figure 101. The functionality of the discharge circuits can be verified by conducting cell measurements and comparing measurements when the discharge is off to measurements when the discharge is on. The measurement taken when the discharge is on requires that the discharge permit (DCP) bit be set. The change in the measurement when the discharge is turned on is calculable based on the resistor values. The following algorithm can be used in conjunction with Figure 101 to verify each discharge circuit:

- Step 1: Measure all cells with no discharging (all S outputs off) and read and store the results.
- Step 2: Turn on S1, S7, and S13.
- Step 3: Measure C1 to C0, C7 to C6, and C13 to C12.
- Step 4: Turn off S1, S7, and S13.
- Step 5: Turn on S2, S8, and S14.
- Step 6: Measure C2 to C1, C8 to C7, and C14 to C13.
- Step 7: Turn off S2, S8, and S14.

► ...

- Step 17: Turn on S6, S12, and S18.
- Step 18: Measure C6 to C5, C12 to C11, and C18 to C17.
- Step 19: Turn off S6, S12, and S18.
- Step 20: Read the Cell Voltage Register Groups to get the results of Step 2 through Step 19.
- Step 21: Compare new readings with old readings. Each cell voltage reading must have decreased by a fixed percentage set by R DISCHARGE and R FILTER for internal designs and R DISCHARGE1 and R DISCHARGE2 for external MOSFET designs. The exact amount of the decrease depends on the resistor values and MOSFET characteristics.

Figure 101. Balancing Self Test Circuit

<!-- image -->

## DIGITAL COMMUNICATIONS

## PEC Calculation

The PEC can be used to ensure that the serial data read from the ADBMS1818 is valid and has not been corrupted. This feature is critical for reliable communication, particularly in environments of high noise. The ADBMS1818 requires that a PEC be calculated for all data being read from and written to the ADBMS1818. For this reason, it is important to have an efficient method for calculating the PEC.

The C code provides a simple implementation of a lookup table derived PEC calculation method. There are two functions. The first function init\_PEC15\_Table() must only be called once when the microcontroller starts and initializes a PEC15 table array called pec15Table[]. This table is used in all future PEC calculations. The PEC15 table can also be hard coded into the microcontroller rather than running the init\_PEC15\_Table() function at startup. The pec15() function calculates the PEC and returns the correct 15-bit PEC for byte arrays of any given length.

/************************************

Copyright 2012 Analog Devices, Inc. (ADI)

Permission to freely use, copy, modify, and distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies: THIS SOFTWARE IS PROVIDED 'AS IS' AND ADI DISCLAIMS ALL WARRANTIES

INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ADI BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM ANY USE OF SAME, INCLUDING ANY LOSS OF USE OR DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTUOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

```
***************************************/ int16 pec15Table[256]; int16 CRC15_POLY = 0x4599; void init_PEC15_Table() { for (int i = 0; i < 256; i++) { remainder = i << 7; for (int bit = 8; bit > 0; --bit) {
```

## APPLICATIONS INFORMATION

```
if (remainder & 0x4000) { remainder = ((remainder << 1)); remainder = (remainder ^ CRC15_POLY) } else { remainder = ((remainder << 1)); } } pec15Table[i] = remainder&0xFFFF; } } unsigned int16 pec15 (char *data , int len) { int16 remainder,address; remainder = 16;//PEC seed for (int i = 0; i < len; i++) { address = ((remainder >> 7) ^ data[i]) & 0xff;//calculate PEC table address remainder = (remainder << 8 ) ^ pec15Table[address]; } return (remainder*2);//The CRC15 has a 0 in the LSB so the final value must be multiplied by 2 }
```

## isoSPI IBIAS and ICMP Setup

The ADBMS1818 allows the isoSPI links of each application to be optimized for power consumption or for noise immunity. The power and noise immunity of an isoSPI system is determined by the programmed I B current, which controls the isoSPI signaling currents. I B can range from 100 μA to 1 mA. Internal circuitry scales up this bias current to create the isoSPI signal currents equal to be 20 × IB. A low IB reduces the isoSPI power consumption in the ready and active states, whereas a high IB increases the amplitude of the differential signal voltage V A across the matching termination resistor, R M. The I B current is programmed by the sum of the R B1 and R B2 resistors connected between the 2 V IBIAS pin and GND, as shown in Figure 103. The receiver input threshold is set by the ICMP voltage that is programmed with the resistor divider created by the R B1 and R B2 resistors. The receiver threshold is half of the voltage present on the ICMP pin. The following guidelines must be followed when setting I B (100 μA to 1 mA) and the receiver comparator threshold voltage V ICMP /2: R M = Transmission   Line   Cℎaracteristic Impedance   Z 0 Signal Amplitude = V A = 20 ×   I B × R M /2 Receiver Comparator Threshold (V TCMP ) = K × VA Voltage on ICMP Pin (V CIMP ) = 2 × VTCMP RB2 = VICMP / I B RB1 = (2/ I B ) - ( RB2 ) Select I B and K (signal amplitude V A to receiver comparator threshold ratio) according to the application: ► For lower power links: I B = 0.5 mA and K = 0.5. ► For full power links: I B = 1 mA and K = 0.5. ► For long links (&gt;50m): I B = 1 mA and K = 0.25. For applications with little system noise, setting I to 0.5 mA is a to 1 mA. Higher

B good compromise between power consumption and noise immunity. Using this I B setting with a 1:1 transformer and R M = 100 Ω, RB1 must be set to 3.01 k, and R B2 set to 1 kΩ. With a typical CAT5 twisted pair, these settings allow communication up to 50 m. For applications in very noisy environments or that require cables longer than 50 m, it is recommended to increase I B drive current compensates for the increased insertion loss in the cable and provides high noise immunity. When using cables over 50 m and a transformer with a 1:1 turns ratio and R M = 100 Ω, R B1 is 1.5 k, and R B2 is 499 Ω.

The maximum clock rate of an isoSPI link is determined by the length of the isoSPI cable. For cables 10 m or less, the maximum 1 MHz SPI clock frequency is possible. As the length of the cable increases, the maximum possible SPI clock rate decreases. This dependence is a result of the increased propagation delays that can create possible timing violations. Figure 102 shows how the maximum data rate reduces as the cable length increases when using a CAT5 twisted pair.

Cable delay affects three timing specifications: t CLK , t 6 , and t 7 . In the electrical characteristics table, each of these specifications is derated by 100 ns to allow for 50 ns of cable delay. For longer cables, the minimum timing parameters may be calculated as shown below:

t CLK , t 6 , and t 7 &gt; 0.9 μs + 2 × t CABLE (0.2 m per ns)

## APPLICATIONS INFORMATION

Figure 102. Data Rate vs. Cable Length

<!-- image -->

Figure 103. isoSPI Circuit

<!-- image -->

## APPLICATIONS INFORMATION

## Implementing a Modular isoSPI Daisy Chain

The hardware design of a daisy-chain isoSPI bus is identical for each device in the network due to the daisy-chain point to point architecture. The simple design as shown in Figure 103 is functional, but inadequate for most designs. The termination resistor, R M, must be split and bypassed with a capacitor, as shown in Figure 104. This change provides both a differential and a common mode termination, and as such, increases the system noise immunity.

Figure 104. Daisy Chain Interface Components

<!-- image -->

The use of cables between battery modules, particularly in hazard applications, can lead to increased noise susceptibility in the communication lines. For high levels of electromagnetic interference (EMC), additional filtering is recommended. The circuit example in Figure 104 shows the use of common-mode chokes (CMC) to add common-mode noise rejection from transients on the battery lines. The use of a center tapped transformer also provides additional noise performance. A bypass capacitor connected to the center tap creates a low impedance for common-mode noise (see Figure 104). Since transformers without a center tap can be less expensive, they may be preferred. In this case, the addition of a split termination resistor and a bypass capacitor (see Figure 104) can enhance the isoSPI performance. Large center tap capacitors greater than 10 nF must be avoided as they may prevent the isoSPI common-mode voltage from settling. Common-mode chokes similar to those used in Ethernet or CANbus applications are recommended. Specific examples are provided in Table 75.

An important daisy chain design consideration is the number of devices in the isoSPI network. The length of the chain determines the serial timing and affects data latency and throughput. The maximum number of devices in an isoSPI daisy chain is strictly dictated by the serial timing requirements. However, it is important to note that the serial read back time, and the increased current consumption, might dictate a practical limitation.

For a daisy chain, the following two timing considerations for proper operation dominate (see Figure 86):

1. t 6 , the time between the last clock and the rising chip select, must be long enough.
2. t 5 , the time from a rising chip select to the next falling chip select (between commands), must be long enough.

Both t 5 and t 6 must be lengthened as the number of ADBMS1818 devices in the daisy chain increases. The equations for these times are below:

t 5 &gt; (Number of Devices × 70 ns) + 900 ns, t 6 &gt; (Number of Devices × 70 ns) + 950 ns

## Connecting Multiple ADBMS1818s on the Same PCB

When connecting multiple ADBMS1818 devices on the same PCB, only a single transformer is required between the ADBMS1818 isoSPI ports. The absence of the cable also reduces the noise levels on the communication lines and often only a split termination is required. Figure 105 shows an example application that has multiple ADBMS1818 devices on the same PCB, communicating to the bottom MCU through an LTC6820 isoSPI driver. If a transformer with a center tap is used, a capacitor can be added for improved noise rejection. Additional noise filtering can be provided with discrete common-mode chokes (not shown) placed on both sides of the single transformer.

On single board designs with low noise requirements, it is possible for a simplified capacitor isolated coupling as shown in Figure 106 to replace the transformer.

In this circuit, the transformer is directly replaced by two 10 nF capacitors. An optional CMC provides noise rejection similar to application circuits using transformers. The circuit is designed to use IBIAS and ICMP settings identical to the transformer circuit.

## APPLICATIONS INFORMATION

Figure 105. Daisy Chain Interface Components on Single Board

<!-- image -->

## APPLICATIONS INFORMATION

Figure 106. Capacitive Isolation Coupling for ADBMS1818s on the Same PCB

<!-- image -->

## Connecting an MCU to an ADBMS1818 with an isoSPI Data Link

The LTC6820 converts a standard 4-wire SPI into a 2-wire isoSPI link that can communicate directly with the ADBMS1818. An example is shown in Figure 107. The LTC6820 can be used in applications to provide isolation between the microcontroller and the stack of ADBMS1818 devices. The LTC6820 also enables system configurations that have the battery management system (BMS) controller at a remote location relative to the ADBMS1818 devices and the battery pack.

## Transformer Selection Guide

As shown in Figure 103, a transformer or pair of transformers isolates the isoSPI signals between two isoSPI ports. The isoSPI signals have programmable pulse amplitudes up to 1.6 V p-p and pulse widths of 50 ns and 150 ns. To be able to transmit these pulses with the necessary fidelity, the system requires that the transformers have primary inductances above 60 μH and a 1:1 turns ratio. It is also necessary to use a transformer with less than 2.5 μH of leakage inductance. In terms of pulse shape, the primary inductance mostly affects the pulse droop of the 50 ns and 150 ns pulses. If the primary inductance is too low, the pulse amplitude begins to droop and decay over the pulse period. When the pulse droop is severe enough, the effective pulse width seen by the receiver drops substantially, reducing noise margin. Some droop is acceptable as long as it is a relatively small percentage of the total pulse amplitude. The leakage inductance primarily affects the rise and fall times of the pulses. Slower rise and fall times effectively reduce the pulse width. Pulse width is determined by the receiver as the time the signal is above the threshold set at the ICMP pin. Slow rise and fall times cut into the timing margins. Generally, it is best to keep pulse edges as fast as possible. When evaluating transformers, it is also worth noting the parallel winding capacitance. While transformers have very good CMRR at a low frequency, this rejection degrades at higher frequencies, largely due to the winding to winding capacitance. When choosing a transformer, it is best to pick one with less parallel winding capacitance when possible.

When choosing a transformer, it is equally important to pick a device that has an adequate isolation rating for the application. The working voltage rating of a transformer is a key specification when selecting a device for an application. Interconnecting daisychain links between ADBMS1818 devices see &lt;60 V stress in typical applications. Ordinary pulse and local area network (LAN) type transformers suffice. Connections to the LTC6820, in general, may need much higher working voltage ratings for good long-term reliability. Usually, matching the working voltage to the voltage of the entire battery stack is conservative. Unfortunately, transformer vendors often only specify one-second high voltage testing, and this is not equal to the long-term (permanent) rating of the device. For example, according to most safety standards, a 1.5 kV rated transformer is expected to handle 230 V continuously, and a 3 kV device is capable of 1100 V long-term, though manufacturers may not always certify to those levels (refer to actual vendor data for specifics). Usually, the higher voltage transformers are called high-isolation or reinforced insulation types by the suppliers. Table 74 shows a list of transformers that have been evaluated in isoSPI links.

## APPLICATIONS INFORMATION

In most applications, a CMC is also necessary for noise rejection. Table 75 includes a list of suitable CMCs if the CMC is not already integrated into the transformer being used.

Figure 107. Interfacing an ADBMS1818 with a μC Using an LTC6820 for Isolated SPI Control

<!-- image -->

Table 74. Recommended Transformers

| Supplier                        | Part Number                     | Temperature Range               | Working Voltage (V WORKING )    | V HIPOT /60 sec                 | Cent er Tap                     | CMC                             | Height                          | Length                          | Width (with Leads)              | Pins                            | AEC-Q200                        |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   | Recommended Dual Transformers   |
| Pulse                           | HX1188FNL                       | -40°C to 85°C                   | 60 V (estimate)                 | 1.5 kV rms                      | Yes                             | Yes                             | 6.0 mm                          | 12.7 mm                         | 9.7 mm                          | 16SMT                           | No                              |
| Pulse                           | HX0068ANL                       | -40°C to 85°C                   | 60 V (estimate)                 | 1.5 kV rms                      | Yes                             | Yes                             | 2.1 mm                          | 12.7 mm                         | 9.7 mm                          | 16SMT                           | No                              |
| Pulse                           | HM2100NL                        | -40°C to 105°C                  | 1000 V                          | 4.3 kV dc                       | No                              | Yes                             | 3.4 mm                          | 14.7 mm                         | 14.9 mm                         | 10SMT                           | Yes                             |
| Pulse                           | HM2112ZNL                       | -40°C to 125°C                  | 1000 V                          | 4.3 kV dc                       | Yes                             | Yes                             | 4.9 mm                          | 14.8 mm                         | 14.7 mm                         | 12SMT                           | Yes                             |
| Sumida                          | CLP178-C20114                   | -40°C to 125°C                  | 1000 V (estimate)               | 3.75 kV rms                     | Yes                             | Yes                             | 9 mm                            | 17.5 mm                         | 15.1 mm                         | 12SMT                           | No                              |
| Sumida                          | CLP0612-C20115                  |                                 | 600 V rms                       | 3.75 kV rms                     | Yes                             | No                              | 5.7 mm                          | 12.7 mm                         | 9.4 mm                          | 16SMT                           | No                              |
| Wurth                           | 7490140110                      | -40°C to 85°C                   | 250 V rms                       | 4 kV rms                        | Yes                             | Yes                             | 10.9 mm                         | 24.6 mm                         | 17.0 mm                         | 16SMT                           | No                              |
| Wurth                           | 7490140111                      | 0°C to 70°C                     | 1000 V (estimate)               | 4.5 kV rms                      | Yes                             | No                              | 8.4 mm                          | 17.1 mm                         | 15.2 mm                         | 12SMT                           | No                              |
| Wurth                           | 749014018                       | 0°C to 70°C                     | 250 V rms                       | 4 kV rms                        | Yes                             | Yes                             | 8.4 mm                          | 17.1 mm                         | 15.2 mm                         | 12SMT                           | No                              |
| Halo                            | TG110-AE050N5LF                 | -40°C to 85/125°C               | 60 V (estimate)                 | 1.5 kV rms                      | Yes                             | Yes                             | 6.4 mm                          | 12.7 mm                         | 9.5 mm                          | 16SMT                           | Yes                             |
| Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers | Recommended Single Transformers |
| Pulse                           | PE-68386NL                      | -40°C to 130°C                  | 60 V (estimate)                 | 1.5 kV dc                       | No                              | No                              | 2.5 mm                          | 6.7 mm                          | 8.6 mm                          | 6SMT                            | No                              |
| Pulse                           | HM2101NL                        | -40°C to 105°C                  | 1000 V                          | 4.3 kV dc                       | No                              | Yes                             | 5.7 mm                          | 7.6 mm                          | 9.3 mm                          | 6SMT                            | Yes                             |
| Pulse                           | HM2113ZNL                       | -40°C to 125°C                  | 1600 V                          | 4.3 kV dc                       | Yes                             | Yes                             | 3.5 mm                          | 9 mm                            | 15.5 mm                         | 6SMT                            | Yes                             |
| Wurth                           | 750340848                       | -40°C to 105°C                  | 250 V                           | 3 kV rms                        | No                              | No                              | 2.2 mm                          | 4.4 mm                          | 9.1 mm                          | 4SMT                            | No                              |
| Halo                            | TGR04-6506V6LF                  | -40°C to 125°C                  | 300 V                           | 3 kV rms                        | Yes                             | No                              | 10 mm                           | 9.5 mm                          | 12.1 mm                         | 6SMT                            | No                              |
| Halo                            | TGR04-A6506NA6NL                | -40°C to 125°C                  | 300 V                           | 3 kV rms                        | Yes                             | No                              | 9.4 mm                          | 8.9 mm                          | 12.1 mm                         | 6SMT                            | Yes                             |
| Halo                            | TDR04-A550ALLF                  | -40°C to 105°C                  | 1000 V                          | 5 kV rms                        | Yes                             | No                              | 6.4 mm                          | 8.9 mm                          | 16.6 mm                         | 6TH                             | Yes                             |

## APPLICATIONS INFORMATION

Table 74. Recommended Transformers (Continued)

| Supplier   | Part Number           | Temperature Range   | Working Voltage (V WORKING )   | V HIPOT /60 sec   | Cent er Tap   | CMC   | Height   | Length   | Width (with Leads)   | Pins   | AEC-Q200   |
|------------|-----------------------|---------------------|--------------------------------|-------------------|---------------|-------|----------|----------|----------------------|--------|------------|
| TDK        | ALT4532V-201-T001     | -40°C to 105°C      | 60 V (estimate)                | ~1 kV             | Yes           | No    | 2.9 mm   | 3.2 mm   | 4.5 mm               | 6SMT   | Yes        |
| Sumida     | CEEH96BNP- LTC6804/11 | -40°C to 125°C      | 600 V                          | 2.5 kV rms        | No            | No    | 7 mm     | 9.2 mm   | 12.0 mm              | 4SMT   | No         |
| Sumida     | CEP99NP-LTC6804       | -40°C to 125°C      | 600 V                          | 2.5 kV rms        | Yes           | No    | 10 mm    | 9.2 mm   | 12.0 mm              | 8SMT   | No         |
| Sumida     | ESMIT-4180/A          | -40°C to 105°C      | 250 V rms                      | 3 kV rms          | No            | No    | 3.5 mm   | 5.2 mm   | 9.1 mm               | 4SMT   | Yes        |
| TDK        | VGT10/9EE-204S2P4     | -40°C to 125°C      | 250 V (estimate)               | 2.8 kV rms        | Yes           | No    | 10.6 mm  | 10.4 mm  | 12.7 mm              | 8SMT   | No         |

## Table 75. Recommended Common-Mode Chokes

| Manufacturer   | Part Number   |
|----------------|---------------|
| TDK            | ACT45B-101-2P |
| Murata         | DLW43SH101XK2 |

## APPLICATIONS INFORMATION

## isoSPI Layout Guidelines

The layout of the isoSPI signal lines also plays a significant role in maximizing the noise immunity of a data link. The following layout guidelines are recommended:

1. The transformer must be placed as close to the isoSPI cable connector as possible. The distance must be kept less than 2 cm. The ADBMS1818 must be placed close to but at least 1 cm to 2 cm away from the transformer to help isolate the IC from magnetic field coupling.
2. A V ground plane must not extend under the transformer, the isoSPI connector, or in between the transformer and the connector.
3. The isoSPI signal traces must be as direct as possible while isolated from adjacent circuitry by ground metal or space. No traces must cross the isoSPI signal lines, unless separated by a ground plane on an inner layer.

## System Supply Current

The ADBMS1818 has various supply current specifications for the different states of operation. The average supply current depends on the control loop in the system. It is necessary to know which commands are being executed each control loop cycle, and the duration of the control loop cycle. With this information, it is possible to determine the percentage of time the ADBMS1818 is in the measure state versus the low power sleep state. The amount of isoSPI or SPI communication also affects the average supply current.

## Calculating Serial Throughput

For any given ADBMS1818, the calculation to determine communication time is simple: it is the number of bits in the transmission multiplied by the SPI clock period being used. The control protocol of the ADBMS1818 is uniform. Therefore, almost all commands can be categorized as a write or read operation. Table 76 can be used to determine the number of bits in a given ADBMS1818 command.

## ENHANCED APPLICATIONS

## Using the ADBMS1818 with Fewer than 18 Cells

Cells can be connected in a conventional bottom (C1) to top (C18) sequence with all unused C inputs either shorted to the highest connected cell or left open. The unused S pins can simply be left disconnected.

Alternatively, to optimize measurement synchronization in applications with fewer than 18 cells, the unused C pins can be equally distributed between the top of the third mux (C18), the top of the second mux (C12) and the top of the first mux (C6) (see Figure 108). If the number of cells being measured is not a multiple of three, the top mux(es) must have fewer cells connected. The unused cell inputs must be tied to the other unused inputs on the same mux and connected to the battery stack through a 100 Ω resistor. The unused inputs result in a reading of 0.0 V for those cells.

## Current Measurement with a Hall-Effect Sensor

The ADBMS1818 auxiliary ADC inputs (GPIO pins) may be used for any analog signal, including active sensors with 0 V to 5 V analog outputs. For battery current measurements, Hall-effect sensors provide an isolated, low power solution. Figure 109 shows schematically a typical Hall-effect sensor that produces two outputs that proportion to the V CC provided. The sensor in Figure 109 has two bidirectional outputs centered at half of V CC . CH1 is a 0 A to 50 A low range and CH2 is a 0 A to 200 A high range. The sensor is powered from a 5 V source and produces analog outputs that are connected to the GPIO pins or inputs of the mux application shown in Figure 111. The use of GPIO1 and GPIO2 as the ADC inputs has the possibility of being digitized within the same conversion sequence as the cell inputs (using the ADCVAX command), thus synchronizing cell voltage and cell current measurements.

## Table 76. Daisy Chain Serial Time Equations

| Command Type   |   CMD Bytes + CMD PEC |   Data Bytes + Data PEC per IC | Total Bits           | Communication Time        |
|----------------|-----------------------|--------------------------------|----------------------|---------------------------|
| Read           |                     4 |                              8 | (4 + (8 × #ICs)) × 8 | Total bits × clock period |
| Write          |                     4 |                              8 | (4 + (8 × #ICs)) × 8 | Total bits × clock period |
| Operation      |                     4 |                              0 | 4 × 8 = 32           | 32 × clock period         |

## APPLICATIONS INFORMATION

Figure 109. Interfacing a Typical Hall-Effect Battery Current Sensor to Auxiliary ADC Inputs

<!-- image -->

## APPLICATIONS INFORMATION

## READING EXTERNAL TEMPERATURE PROBES

Figure 110 shows the typical biasing circuit for a negative temperature coefficient (NTC) thermistor. The 10 kΩ at 25°C is the most popular sensor value and the V REF2 output stage is designed to provide the current required to bias several of these probes. The biasing resistor is selected to correspond to the NTC value so the circuit provides 1.5 V at 25°C (V REF2 is 3 V nominal). The overall circuit response is approximately -1%/°C in the range of typical cell temperatures, as shown in the chart of Figure 110.

## Expanding the Number of Auxiliary Measurements

The ADBMS1818 has nine GPIO pins that can be used as ADC inputs. In applications that need to measure more than nine signals, a mux circuit can be implemented to expand the analog measure- ments to 16 different signals (Figure 111). The GPIO1 ADC input is used for measurement and mux control is provided by the I 2 C port on GPIO4 and GPIO5. The buffer amplifier is selected for fast settling and increases the usable throughput rate.

Figure 110. Typical Temperature Probe Circuit and Relative Output

<!-- image -->

Figure 111. Mux Circuit Supports 16 Additional Analog Measurements

<!-- image -->

## TYPICAL APPLICATION

Figure 112. Typical Application Circuit

<!-- image -->

## RELATED DEVICES

## Table 77. Related Devices

| Model               | Description                                                    | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|---------------------|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LTC6811-1/LTC6811-2 | 4th generation 12-cell battery stack monitor and balancing IC. | Measures cell voltages for up to 12 series battery cells. Daisy-chain capability allows multiple devices to be connected to measure many battery cells simultaneously via the built-in 1 MHz, 2-wire isoSPI. Includes capability for passive cell balancing.                                                                                                                                                                                                                               |
| LTC6820             | isoSPI isolated communications interface.                      | Provides an isolated interface for SPI communication up to 100 meters, using a twisted pair. Companion to the LTC6804-1, LTC6806, LTC6811-1, LTC6812-1, LTC6813-1, and ADBMS1818.                                                                                                                                                                                                                                                                                                          |
| LTC6812-1           | 4th generation 15-cell battery stack monitor and balancing IC. | Measures cell voltages for up to 15 series battery cells. The isoSPI daisy-chain capability allows multiple devices to be interconnected to measure many battery cells simultaneously. The isoSPI bus can operate up to 1 MHz and can be operated bidirectionally for fault conditions, such as a broken wire or connector. Includes internal passive cell balancing capability of up to 200 mA.                                                                                           |
| LTC6813-1           | 4th generation 18-cell battery stack monitor and balancing IC. | Automotive/industry application, measures cell voltages for up to 18 series battery cells. The isoSPI daisy-chain capability allows multiple devices to be interconnected to measure many battery cells simultaneously. The isoSPI bus can operate up to 1 MHz and can be operated bidirectionally for fault conditions, such as a broken wire or connector. Includes internal passive cell balancing capability of up to 200 mA with a wider temperature range compared to the ADBMS1818. |

## OUTLINE DIMENSIONS

Figure 113. 64-Lead Low Profile Quad Flat Package, Exposed Pad [LQFP\_EP] (05-08-1982) Dimensions shown in millimeters

<!-- image -->

## OUTLINE DIMENSIONS

Figure 114. 64-Lead Low Profile Quad Flat Package, Exposed Pad [LQFP\_EP] (SW-64-2) Dimensions shown in millimeters

<!-- image -->

Updated: May 12, 2023

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description              | Packing Quantity   | Package Option   |
|-------------------|---------------------|----------------------------------|--------------------|------------------|
| ADBMS1818ASWAZ    | -40°C to +85°C      | LQFP 1.4 MM W/ THERMAL PAD       |                    | SW-64-2          |
| ADBMS1818ASWAZ-R7 | -40°C to +85°C      | LQFP 1.4 MM W/ THERMAL PAD       | Reel, 300          | SW-64-2          |
| ADBMS1818ASWAZ-RL | -40°C to +85°C      | LQFP 1.4 MM W/ THERMAL PAD       | Reel, 1500         | SW-64-2          |
| ADBMS1818ASWZ     | -40°C to +85°C      | 64-Lead LQFP (10mm x 10mm w/ EP) |                    | 05-08-1982       |
| ADBMS1818ASWZ-R7  | -40°C to +85°C      | 64-Lead LQFP (10mm x 10mm w/ EP) | Reel, 300          | 05-08-1982       |
| ADBMS1818ASWZ-RL  | -40°C to +85°C      | 64-Lead LQFP (10mm x 10mm w/ EP) | Reel, 1500         | 05-08-1982       |
| ADBMS1818CSWAZ    | -40°C to +125°C     | LQFP 1.4 MM W/ THERMAL PAD       |                    | SW-64-2          |
| ADBMS1818CSWAZ-R7 | -40°C to +125°C     | LQFP 1.4 MM W/ THERMAL PAD       | Reel, 300          | SW-64-2          |
| ADBMS1818CSWAZ-RL | -40°C to +125°C     | LQFP 1.4 MM W/ THERMAL PAD       | Reel, 1500         | SW-64-2          |

## EVALUATION BOARDS

| Model 1         | Description      |
|-----------------|------------------|
| EVAL-ADBMS1818Z | Evaluation Board |

<!-- image -->