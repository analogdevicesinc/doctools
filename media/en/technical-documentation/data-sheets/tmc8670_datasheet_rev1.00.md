<!-- lastmod 2023-08-03 -->
## TMC8670 Datasheet

The TMC8670 is a CANopen-over EtherCAT (CoE) /uniFB01eld oriented control (FOC) servo controller for torque, velocity, and position control. It comes with a fully integrated EtherCAT Slave Controller (ESC), a /uniFB02exible sensor engine for different position feedback and current sensing options, as well as a complete CANopen-over-EtherCAT /uniFB01rmware stack for the CiA DS402 device pro/uniFB01le. TMC8670 is a building block that enables a servo controller with only a couple of components.

Hardware Version V1.0 | Document Revision V1.00 • 2021-Feb-04

<!-- image -->

## Applications

- Semiconductor Handling
- Robotics

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2021 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com

<!-- image -->

<!-- image -->

- Factory Automation

## Features

- Torque Control (FOC), Velocity Control, Position Control
- Field Oriented Control (FOC) Servo Controller
- Sensor Engine (Hall analog/digital, Encoder analog/digital)
- PWMEngine including SVPWM
- Support for 3-Phase PMSM and 2-Phase Stepper Motors
- Integrated EtherCAT Slave Controller, CoE protocol CiA 402 drive pro/uniFB01le · UART interface
- Manufacturing
- IIoT Applications
- Laboratory Automation

## Contents

| Order Codes                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                              | 6      |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
|                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                              | 7      |
| Principles of Operation / Key Concepts General Device Architecture . . .                                                                                                                                                                                                                     | . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                            | 7 7    |
| . EtherCAT Slave Controller . . . . .                                                                                                                                                                                                                                                        | . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                  |        |
| . . . Microcontroller and Firmware Stack . . . . . . . . . . . .                                                                                                                                                                                                                             | . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                  | 7      |
| Servo/FOC Controller . Flexible Sensor Engine                                                                                                                                                                                                                                                | . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                          | 8      |
| . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                    | . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                          | 8      |
| Communication Interfaces                                                                                                                                                                                                                                                                     | . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                          | 9      |
| Software- and Tool-Support . . . Device Pin De/uniFB01nitions                                                                                                                                                                                                                                | . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                          | 9      |
|                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                              | 12 12  |
|                                                                                                                                                                                                                                                                                              | . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                          |        |
| Pinout and Pin Coordinates of Pin Numbers and Signal Descriptions . .                                                                                                                                                                                                                        | . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                          |        |
| TMC8670-BA . . . .                                                                                                                                                                                                                                                                           | TMC8670-BA . . . .                                                                                                                                                                                                                                                                           | 12     |
|                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                              | 20 20  |
| Device Usage and Handling Reference Clock . . . . . . . . . . . . . . . . . . . . . . . . . . . Ethernet PHY Connection . . . . . . . . . . . . . . . . . . . . .                                                                                                                            | . . . . . . . . .                                                                                                                                                                                                                                                                            |        |
|                                                                                                                                                                                                                                                                                              | . . .                                                                                                                                                                                                                                                                                        | 20     |
| . . . . . . External Circuitry and Applications Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                   | . . .                                                                                                                                                                                                                                                                                        | 22     |
| 5.3.1                                                                                                                                                                                                                                                                                        | Supply and Filtering . . . Status LED Circuit . .                                                                                                                                                                                                                                            | 22 22  |
| 5.3.2 5.3.3                                                                                                                                                                                                                                                                                  | . . . . . . . . . . . . . . . . . . . . . . . . . . . . SII EEPROM Circuit . . . . . . . . . . . . . . . . .                                                                                                                                                                                 | 23     |
| . . . . . . . . . . . . Incremental Encoder Connection . . . . . . . . . Incremental ABN Encoder . . . . . . . .                                                                                                                                                                             | . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                            | 24     |
| 5.4.1                                                                                                                                                                                                                                                                                        | . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                            | 24     |
| 5.4.2                                                                                                                                                                                                                                                                                        | Secondary Incremental ABN Encoder . . . . . . . . . . . . . . . . . . Open Loop Encoder . . . . . . . . . .                                                                                                                                                                                  | 26 26  |
| 5.4.3 Hall                                                                                                                                                                                                                                                                                   | . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                          |        |
| Signal Connection . . . . . . . . . . Digital Hall Sensor Interface                                                                                                                                                                                                                          | . .                                                                                                                                                                                                                                                                                          | 27     |
| 5.5.1                                                                                                                                                                                                                                                                                        | . . . . . . . . . . . . . . . . . . . . with optional Interim Position Interpolation Digital Hall Sensor - Interim Position Interpolation . . . . . . . .                                                                                                                                    | 27 28  |
| 5.5.2                                                                                                                                                                                                                                                                                        | . . Filtering . . . . .                                                                                                                                                                                                                                                                      |        |
| 5.5.3                                                                                                                                                                                                                                                                                        | Digital Hall Sensors - Masking and . . . . . . . . . Digital                                                                                                                                                                                                                                 | 28     |
| 5.5.4                                                                                                                                                                                                                                                                                        | . Hall Sensors together with Incremental Encoder . . . . . . . . . .                                                                                                                                                                                                                         | 28     |
| ADC Interfaces . . . . . . . . . . . . . . . . . . . . . . . . . 5.6.1 ADC Interface - Delta Sigma Modulator . . . . .                                                                                                                                                                       | . . . . . . . . .                                                                                                                                                                                                                                                                            | 29     |
|                                                                                                                                                                                                                                                                                              | . . . . . . . . . . . . ADC . . . . . . . .                                                                                                                                                                                                                                                  | 29 30  |
| 5.6.2                                                                                                                                                                                                                                                                                        | ADC Interface - SPI                                                                                                                                                                                                                                                                          | 30     |
| 5.6.3 5.6.4                                                                                                                                                                                                                                                                                  | . . . . . . . . . . . . . . . . . . Analog Hall and Analog Encoder Interface (SinCos of 0°90° or 0°120°240°) Analog Position Decoder (SinCos of 0°90° or 0°120°240°) . . . . . .                                                                                                             | 31     |
| Brake Chopper Connection . Interfaces . . . . . . . .                                                                                                                                                                                                                                        | . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                      | 31     |
| UART UART                                                                                                                                                                                                                                                                                    | . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                              | 32     |
| . . . . . . . . . . . . 5.8.1 Software Interface for TMCL-IDE . . . . .                                                                                                                                                                                                                      | . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                              | 32     |
| 5.8.2                                                                                                                                                                                                                                                                                        | UART Hardware Register Interface . . . . . . . . . . . . . . . .                                                                                                                                                                                                                             | 32     |
|                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                              | 34 34  |
| FOC Basics Why FOC? . . . . . . . . . . . . What                                                                                                                                                                                                                                             | . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                      | 34     |
| . . . . . . . is FOC? . . . . . . . . . . . . . . . . . . Why .                                                                                                                                                                                                                              | . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                      |        |
| FOC as pure Hardware Solution? . . . . . . .                                                                                                                                                                                                                                                 | . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                      | 34     |
| How does FOC work? . . . . . . . What .                                                                                                                                                                                                                                                      | . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                    | 35     |
| is required for FOC? . . .                                                                                                                                                                                                                                                                   | is required for FOC? . . .                                                                                                                                                                                                                                                                   | 35 36  |
| . . . . . . . . . . . . . . . . . . . . . . . . . . 6.5.1 Coordinate Transformations - Clarke, Park, iClarke iPark . . . . . . . 6.5.2 Measurement of Stator Coil Currents . . . . . . . . . . . . . . . . . . 6.5.3 Stator Coil Currents I_U, I_V, I_W and Association to Terminal Voltages | . . . . . . . . . . . . . . . . . . . . . . . . . . 6.5.1 Coordinate Transformations - Clarke, Park, iClarke iPark . . . . . . . 6.5.2 Measurement of Stator Coil Currents . . . . . . . . . . . . . . . . . . 6.5.3 Stator Coil Currents I_U, I_V, I_W and Association to Terminal Voltages | 36     |
|                                                                                                                                                                                                                                                                                              | . . . . . . .                                                                                                                                                                                                                                                                                | U_W 36 |
| 6.5.4                                                                                                                                                                                                                                                                                        | Measurement of Rotor Angle . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                   | 37     |

5

<!-- image -->

1

Product Features

6.5.5

Measured Rotor Angle vs. Magnetic Axis of Rotor vs. Magnetic Axis ot Stator

.

.

.

.

37

| 6.5.6                                                                                                                                                                                                                          | Knowledge of Relevant Motor Parameters and Position Sensor (Encoder) Parameters Proportional Integral (PI) Controllers for Closed Loop Current Control . . . . . . . .                                                         | 38         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 6.5.7 6.5.8                                                                                                                                                                                                                    |                                                                                                                                                                                                                                | 38 38      |
|                                                                                                                                                                                                                                | Pulse Width Modulation (PWM) and Space Vector Pulse Width Modulation (SVPWM) Orientations, Models of Motors, and Coordinate Transformations . . . . . . . . .                                                                  | 39         |
| 6.5.9                                                                                                                                                                                                                          | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                  | . 39       |
| 6.6 FOC23 Engine                                                                                                                                                                                                               | . . . . . . . .                                                                                                                                                                                                                | .          |
| 6.6.1                                                                                                                                                                                                                          | PI Controllers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                     | . 40       |
| 6.6.2 6.6.3                                                                                                                                                                                                                    | . . . . . . . . . . . PI Controller Calculations - Classic . . . . . . . . . . . . . . . . . . . . . . PI Controller Calculations -                                                                                            | . 40       |
| 6.6.4                                                                                                                                                                                                                          | Structure . Advanced Structure . . . . . . . . . . . . . . . . . . . . . PI Controller - Clipping . . . . . . . . . . . . . .                                                                                                  | . 40       |
|                                                                                                                                                                                                                                | . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                    | . 41       |
| 6.6.5                                                                                                                                                                                                                          | PI Flux & PI Torque Controller . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . PI Velocity Controller . . . . .                                                                                                  | . 42       |
| 6.6.6                                                                                                                                                                                                                          | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . P Position Controller .                                                                                                                                        | . 42       |
| 6.6.7 6.6.8                                                                                                                                                                                                                    | . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                          | . 43 43    |
|                                                                                                                                                                                                                                | . . . . . . . . . Inner FOC Control Loop - Flux & Torque . . . . . . . . . . . . .                                                                                                                                             | .          |
| 6.6.9 6.6.10                                                                                                                                                                                                                   | . . . . . . . . . . . . FOC Transformations and PI(D) for control of Flux & Torque . . . . . . . . . . . . . Motion Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                              | . 43       |
| EtherCAT                                                                                                                                                                                                                       | . . . . . . . . . . . . .                                                                                                                                                                                                      | . 44       |
|                                                                                                                                                                                                                                |                                                                                                                                                                                                                                | 46 46      |
| Slave Controller Description General EtherCAT Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . EtherCAT Register Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                         | . . . . . . . .                                                                                                                                                                                                                | . 47       |
|                                                                                                                                                                                                                                | . . . . . . . .                                                                                                                                                                                                                | .          |
| . EtherCAT Register Set . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                        | . . . . . . . .                                                                                                                                                                                                                | . 53       |
| 7.3.1                                                                                                                                                                                                                          | ESC Information . . . . . . . . Station                                                                                                                                                                                        | . 53 57    |
| 7.3.2                                                                                                                                                                                                                          | Address . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                        | .          |
| 7.3.3 7.3.4                                                                                                                                                                                                                    | Write Protection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                               | . 58 60    |
| 7.3.5                                                                                                                                                                                                                          | Data Link Layer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Application Layer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                  | . . 64     |
| 7.3.6                                                                                                                                                                                                                          | PDI . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Interrupts                                                                                                                   | . 67 71    |
| 7.3.7                                                                                                                                                                                                                          | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                | .          |
|                                                                                                                                                                                                                                | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                            | .          |
| 7.3.8 7.3.9                                                                                                                                                                                                                    | . Error Counters Watchdogs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                     | 74 . 77    |
| 7.3.10                                                                                                                                                                                                                         | . . . SII EEPROM Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                               | . 80 84    |
|                                                                                                                                                                                                                                | . . MII Management Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                               | .          |
| 7.3.11 7.3.12                                                                                                                                                                                                                  | FMMUs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                          | . 88       |
| 7.3.13                                                                                                                                                                                                                         | SyncManagers . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                           | . 91       |
| 7.3.14                                                                                                                                                                                                                         | . . . . . . . . Distributed Clocks Receive Times . . . . . . . . . . . . . . . . . . . . . . . . . Distributed Clocks Time Loop                                                                                                | . 95       |
| 7.3.15 7.3.16                                                                                                                                                                                                                  | . . . . Control Unit . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                       | . 96       |
|                                                                                                                                                                                                                                | Distributed Clocks Cyclic Unit Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                           | .100 . 101 |
| 7.3.17 7.3.18                                                                                                                                                                                                                  | Distributed Clocks SYNC Out Unit . Distributed Clocks LATCH In Unit . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                    |            |
| 7.3.19                                                                                                                                                                                                                         | Distributed Clocks SyncManager Event Times . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                         | .105 .109  |
|                                                                                                                                                                                                                                | . . . . .                                                                                                                                                                                                                      |            |
| 7.3.20                                                                                                                                                                                                                         | ESC Speci/uniFB01c . . . . . . .                                                                                                                                                                                               | .110 . 111 |
| . . . . . . . . . . . . . . . . . . . . . . . . . . 7.3.21 Process Data RAM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Electrical Ratings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . . . . . . . . . . . . . . . . . . . . . . . . . . 7.3.21 Process Data RAM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Electrical Ratings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 112        |
| Absolute Maximum Ratings . . . . Operational Ratings . . . . . . . .                                                                                                                                                           | . . . .                                                                                                                                                                                                                        | .112       |
|                                                                                                                                                                                                                                | . . . . . . . . . . . . . . . .                                                                                                                                                                                                | .112       |
| . . . . . . . . . . . . . . . . . . Digital I/Os . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                               | . . . . . . . . . . . . . .                                                                                                                                                                                                    | .113 .113  |
| . . Power Consumption . . . . . . . . . . . . . . . . . . . . . . . . . . . . Package Thermal Behavior . . . . . . . . . . . . . . . . . . . . . . . .                                                                         | . . . . . . . . . . . . . .                                                                                                                                                                                                    | . 114      |
|                                                                                                                                                                                                                                | . . . . . . . . . . . . . .                                                                                                                                                                                                    |            |
| Manufacturing Data Package Dimensions . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                            | Manufacturing Data Package Dimensions . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                            | 115        |
| . . . . . . . . Marking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                          | . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                    | .115 . 117 |
| Board and Layout Considerations .                                                                                                                                                                                              | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                              | . 117      |

<!-- image -->

10 Abbreviations

118

| 11 Figures Index               |     120 |
|--------------------------------|---------|
| 12 Tables Index                | 121     |
| 13 Revision History .          | 123     |
| 13.1 IC Revision 13.2 Document |   0.123 |
| . . . . Revision               |   0.123 |

<!-- image -->

## 1 Product Features

## Advantages:

TMC8670 is a highly integrated SoC providing the interface between an EtherCAT real-time /uniFB01eld bus and the local drive application. It includes the real-time MAC layer for EtherCAT, the application software stack for the CiA DS402 CANopen device pro/uniFB01le, and the complete servo control block in dedicated hardware with interfaces to ADCs and position feedback. TMC8670 offers an extremely high function density in a small scale package.

- Fully standard compliant and proven EtherCAT Slave Controller and State Machine
- Robust silicon technology
- Highly integrated Servo Controller with rich feature set vs. package size
- Saves board space &amp; reduces BOM

## Major Features:

- Long-term availability
- Integrated EtherCAT Slave Controller with 2 MII ports for Ethernet bus interfacing
- Firmware update via EtherCAT or via UART
- Complete /uniFB01rmware stack with EtherCAT State Machine and CANopen over EtherCAT stack based on CiA DS402 device pro/uniFB01le
- Fully integrated hardware servo controller with /uniFB01eld-oriented control and rich interface support
- Analog SinCos encoder interface
- Two digital incremental encoder interfaces
- Digital hall sensor interface
- Flexible ADC interface to connect to external SPI ADCs or delta sigma modulators
- Analog hall sensor interface
- Industrial temperature range -40°C to +125°C
- Package: 325-pin BGA chip scale package with 0.5mm pitch, 11mm x 11mm

<!-- image -->

## 2 Order Codes

Order Code

Description

## Trademark and Patents

| TMC8670-BI   | TMC8670 Advanced EtherCAT ® Servo Controller in 325-pin BGA chip scale package with 0.5mm pitch                         | 11mm x 11mm   |
|--------------|-------------------------------------------------------------------------------------------------------------------------|---------------|
| TMC8670-EVAL | Evaluation Board for TMC8670-BI, compatible with the modular Landungsbruecke system, RJ45 twisted pair copper interface | 79mm x 85mm   |

Table 1: TMC8670 order codes

<!-- image -->

EtherCAT ® is a registered trademark and patented technology, licensed by Beckhoff Automation GmbH, Germany.

<!-- image -->

Size

## 3 Principles of Operation / Key Concepts

Figure 1 shows the general device architecture and major connections of TMC8670.

## 3.1 General Device Architecture

The EtherCAT Slave Controller (ESC) is realized in dedicated logic and provides two MII interfaces to external Ethernet PHYs suitable for EtherCAT.

The /uniFB01rmware in the MCU controls the servo and /uniFB01eld-oriented control (FOC) block, which is completely realized in dedicated logic. All PI-loops for position, velocity, and torque are fully con/uniFB01gurable.

The ESC connects to the integrated microcontroller, which executes the EtherCAT State Machine (ESM) and the CiA DS402 CANopen protocol stack. A debug UART interface connects to the MCU for debugging and /uniFB01rmware updates.

The FOC block drives external gate driver, which in turn are switching a power stage for 3-phase brushless motors or 2-phase stepper motors.

The FOC block provides a set of interfaces for different types of current sensing and position feedback. Current sensing and encoders are external components to the TMC8670.

Figure 1: General device architecture

<!-- image -->

## 3.2 EtherCAT Slave Controller

The ESC part of TMC8670 provides the following EtherCAT-related features. More information is available in Section 7.

TMC8670 contains a standard-conform and proven ESC engine providing real-time EtherCAT MAC layer functionality to EtherCAT slaves. It connects via MII interface to standard Ethernet PHYs and provides a digital control interface to a local application controller

- Two MII interfaces to external Ethernet PHYs plus management interface
- Four Sync Managers (SM)
- Four Fieldbus Memory Management Units (FMMU)
- 4 KByte of Process Data RAM (PDRAM)
- IIC interface for an external SII-EEPROM for ESC con/uniFB01guration
- 64 bit Distributed Clocks support

## 3.3 Microcontroller and Firmware Stack

The integrated microcontroller system contains and controls the application layer of TMC8670. Thereby, the /uniFB01rmware is split up into a bootloader section and the application layer section. The bootloader allows

<!-- image -->

for future /uniFB01rmware updates. The application layer comprises the ESM to communicate with the ESC and the CANopen-over-EtherCAT (CoE) protocol stack. The CoE stack is based on the CiA DS402 device pro/uniFB01le for drives. It controls the hardware servo/FOC controller block. The application layer also supports FileTransfer-over-EtherCAT (FoE), which is used for remote /uniFB01rmware updates via the EtherCAT master.

The integrated servo/FOC controller is completely realized in dedicated logic. Its control registers are directly mapped into the microcontrollers address space. It o/uniFB04oads the microcontroller from the repetitive and time-consuming computation tasks of control loop processing, FOC Park and Clark transformations, PWMgeneration, and interfacing to ADCs and position feedback. The servo/FOC controller supports PWM frequencies and current loop frequencies of up to 100kHZ. It not only supports 3-phase brushless motors but also 2-phase stepper motors and single phase motors, for example DC motors. More information is given the FOC Basics Section.

## 3.4 Servo/FOC Controller

## 3.5 Flexible Sensor Engine

A versatile and /uniFB02exible sensor engine is part of the servo/FOC controller block of TMC8670. The sensor engine handles digital hall sensors, digital incremental encoders, analog hall sensors, and analog sin-cossensors. Together with the relevant sensor parameters, it maps the measured sensor position to 16 bit signed values (s16) for the FOC engine.

Figure 2: TMC8670 Sensor Engine maps position sensor signals to mechanical angels and electrical angels as direct input for the FOC engine.

<!-- image -->

ADC Interfaces The TMC8670 is a pure digital IC with interfaces for external ADCs. As ADC one can either select LTC2351 from Linear Technology or Delta Sigma Modulators (AD7401). As an alternative to Delta Sigma Modulators, the TMC8670 supports low cost comparators (e.g. LM339) together with some passive components to form delta sigma modulators.

Digital Encoder Interfaces The digital encoder interface support a wide range of encoders with different resolutions, signal polarities and zero pulses.

Analog Encoder Interfaces The analog encoder interface is for analog hall signals - two phase SinCos or three phase - and for analog (incremental) encoders. An interpollator for SinCos encoders is integrated.

Digital Hall Sensor Interface The digital hall signal interface enables digital hall signals for initialization of incremental encoders. The digital hall signal interface can be used directly for the FOC. For torque ripple reduction an interpolator for the digital hall signals is integrated.

<!-- image -->

Analog Hall Sensor Interface The interface for analog hall signals is the same interface as available for SinCos analog encoders.

Field Bus Interface TMC8670provides two MII ports to connect to 100-Mbit Ethernet PHYs that connect to the /uniFB01eld bus. One port is the dedicated EtherCAT IN port. The second port is the dedicated EtherCAT OUT port. Depending on the physical medium (twisted pair copper or passive optical /uniFB01ber) an external transformer circuit connects to the RX and TX lines.

## 3.6 Communication Interfaces

IIC SII EEPROM Interface The IIC EEPROM interface is intended to be a point-to-point interface between TMC8670 and the SII EEPROM with TMC8670 being the master. Depending on the EEPROM's capacity the addressing mode must be properly set using the PROM\_SIZE con/uniFB01guration pin.

Con/uniFB01guration of the EtherCAT Slave Controller is done during boot time with con/uniFB01guration information read from the SII EEPROM after reset or power cycling. This information must be (pre)programmed into the SII EEPROM. This can be done via the EtherCAT master using a so-called EtherCAT Slave Information (ESI) /uniFB01le in standardized XML format.

Debug UART Interfaces TMC8670 has two UART interfaces that allow for basic local debugging. The MCUUART directly connects to the microcontroller and can also be used for local /uniFB01rmware updates. The HW UART directly connects to the servo/FOC controller block and allows for direct control via register read/write of this function block alone. This is usable for local tuning, monitoring of the registers, and debugging. More details on the two debug UART interfaces are given in the Debug UARTs' section

Evaluation Board An evaluation board is available for the TMC8670 with standard RJ45 connectors and transformers for interfacing twisted pair copper media.

<!-- image -->

## 3.7 Software- and Tool-Support

Figure 3: TMC8670 Evaluation Board

<!-- image -->

The complete board design /uniFB01les are available for download and can be used as reference. All information is available for download on the speci/uniFB01c product page on TRINAMIC's website at ❤/a116/a116♣/a115✿✴✴✇✇✇✳/a116/a114✐♥❛♠✐❝✳❝♦♠✴/a115✉♣♣♦/a114/a116✴❡✈❛❧✲❦✐/a116/a115✴ .

TMCL-IDE The TMCL-IDE is TRINAMIC's primary tool (for Windows PCs) to control TRINAMIC modules and evaluation boards. Besides, it provides feature like remote /uniFB01rmware updates, module monitoring options, and speci/uniFB01c Wizard support. The TMCL-IDE can be used along with TRINAMIC's modular evaluation board system.

## Info The TMLC-IDE is not an EtherCAT master system!

The TMC8670-EVAL can be accessed via the UART interface of the evaluation board to try out the servo functions without using an EtherCAT master in the /uniFB01rst place.

<!-- image -->

Figure 4: TMCL-IDE

<!-- image -->

The latest version and additional information is available for download from TRINAMIC's website at ❤/a116/a116♣/a115✿ ✴✴✇✇✇✳/a116/a114✐♥❛♠✐❝✳❝♦♠✴/a115✉♣♣♦/a114/a116✴/a115♦❢/a116✇❛/a114❡✴/a116♠❝❧✲✐❞❡✴ .

<!-- image -->

## 4 Device Pin De/uniFB01nitions

## 4.1 Pinout and Pin Coordinates of TMC8670-BA

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21

Figure 5: TMC8670-BI Pinout top view

<!-- image -->

## 4.2 Pin Numbers and Signal Descriptions

Pins not listed in the following table are N.C. (not connected). Pin types are I = input, O = output, PU = has pull-up, PD = has pull-down.

Name

Pin

Type

Function

| General Signals   | General Signals   | General Signals   | General Signals                                                                                                                   |
|-------------------|-------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| NRESET            | M9                | I                 | Lowactive system reset, pulluptoVDD_3V3with10K                                                                                    |
| CLK_25MHZ         | P1                | I                 | 25MHz Reference Clock Input, connect to clock source with <25ppm or better, typically same clock source as used for the ETH PHYs. |
| CLKOUT_25MHZ      | H17               | O                 |                                                                                                                                   |

<!-- image -->

Name

Pin

Type

| EtherCAT SII EEPROM IOs   | EtherCAT SII EEPROM IOs   | EtherCAT SII EEPROM IOs   | EtherCAT SII EEPROM IOs                                                                                                                                                                                                                                              |
|---------------------------|---------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PROM_CLK                  | F1                        | O                         | External IIC SII EEPROM clock signal, use 1K pull up resistor to VDD_3V3                                                                                                                                                                                             |
| PROM_DATA                 | F2                        | I/O                       | External IIC SII EEPROM data signal, use 1k pull up resistor to VDD_3V3                                                                                                                                                                                              |
| PROM_SIZE                 | K1                        | I, PU                     | Selects between two different EEPROM sizes since the communication protocol for SII EEPROM access changes if a size > 16kBit is used (an additional ad- dress byte is required then). 0 = up to 16kBit EEP- ROM, 1 = 32 kBit-4Mbit EEPROM, has weak internal pull-up |

EtherCAT Status LEDs

Function

| LED_RUN      | D1   | O   | ESM Run Status LED, connect to green LED (Anode) 0 = LED off, 1 = LED on                    |
|--------------|------|-----|---------------------------------------------------------------------------------------------|
| LED_ERR      | D2   | O   | ESM Error Status LED, connect to red LED (Anode) 0 = LED off, 1 = LED on                    |
| LED_LINK_IN  | E1   | O   | ETH Link In Port Status and Activity, connect to green LED (Anode) 0 = LED off, 1 = LED on  |
| LED_LINK_OUT | F3   | O   | ETH Link Out Port Status and Activity, connect to green LED (Anode) 0 = LED off, 1 = LED on |

Distributed Clocks Synchronization

| LATCH_IN0   | K2   | I, PD   | Distributed Clocks Latch Input, has weak internal pull-down   |
|-------------|------|---------|---------------------------------------------------------------|
| SYNC_OUT0   | K4   | O       | Distributed Clocks Synchronization Output                     |

<!-- image -->

Name

Pin

Type

Function

MII Interface to external ETH PHY (EtherCAT IN Port)

| MII1_LINK   | F18   | I   | Link indication input     |
|-------------|-------|-----|---------------------------|
| MII1_RXCLK  | G18   | I   | Receive clock             |
| MII1_RXD[0] | F19   | I   | Receive data bit 0        |
| MII1_RXD[1] | F20   | I   | Receive data bit 1        |
| MII1_RXD[2] | E21   | I   | Receive data bit 2        |
| MII1_RXD[3] | E20   | I   | Receive data bit 3        |
| MII1_RXDV   | G21   | I   | Receive data valid signal |
| MII1_RXER   | G20   | I   | Receive error signal      |
| MII1_TXCLK  | E18   | I   | Transmit clock            |
| MII1_TXD[0] | D21   | O   | Transmit data bit 0       |
| MII1_TXD[1] | C21   | O   | Transmit data bit 1       |
| MII1_TXD[2] | C20   | O   | Transmit data bit 2       |
| MII1_TXD[3] | B21   | O   | Transmit data bit 3       |
| MII1_TX_EN  | E17   | O   | Transmit enable           |

MII Interface to external ETH PHY (EtherCAT OUT Port)

| MII2_LINK   | K18   | I   | Link indication input     |
|-------------|-------|-----|---------------------------|
| MII2_RXCLK  | L18   | I   | Receive clock             |
| MII2_RXD[0] | N21   | I   | Receive data bit 0        |
| MII2_RXD[1] | M20   | I   | Receive data bit 1        |
| MII2_RXD[2] | L20   | I   | Receive data bit 2        |
| MII2_RXD[3] | L21   | I   | Receive data bit 3        |
| MII2_RXDV   | N20   | I   | Receive data valid signal |
| MII2_RXER   | M18   | I   | Receive error signal      |
| MII2_TXCLK  | J17   | I   | Transmit clock            |
| MII2_TXD[0] | L19   | O   | Transmit data bit 0       |
| MII2_TXD[1] | K21   | O   | Transmit data bit 1       |
| MII2_TXD[2] | J20   | O   | Transmit data bit 2       |
| MII2_TXD[3] | J21   | O   | Transmit data bit 3       |
| MII2_TX_EN  | J18   | O   | Transmit enable           |

<!-- image -->

Name

Pin

| ETH PHY Interface Con/uniFB01guration Pins and Management Interface   | ETH PHY Interface Con/uniFB01guration Pins and Management Interface   | ETH PHY Interface Con/uniFB01guration Pins and Management Interface   | ETH PHY Interface Con/uniFB01guration Pins and Management Interface                             |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| LINK_POLARITY                                                         | R9                                                                    | I, PD                                                                 | selects polarity of the ETH PHYs link signal: 0 = low active, 1 = high active                   |
| MII1_TX_SHIFT[0]                                                      | K15                                                                   | I                                                                     | Used for clock shift compensation on TX port                                                    |
| MII1_TX_SHIFT[1]                                                      | K17                                                                   | I                                                                     | Used for clock shift compensation on TX port                                                    |
| MII2_TX_SHIFT[0]                                                      | L15                                                                   | I                                                                     | Used for clock shift compensation on TX port                                                    |
| MII2_TX_SHIFT[1]                                                      | L17                                                                   | I                                                                     | Used for clock shift compensation on TX port                                                    |
| MCLK                                                                  | H20                                                                   | O                                                                     | PHY management clock, connect all ETH PHYs to this bus                                          |
| MDIO                                                                  | H21                                                                   | I/O                                                                   | PHY management data, connect all ETH PHYs to this busif required, use4K7pullupresistortoVDD_3V3 |
| Motor Position Feedback Signals                                       | Motor Position Feedback Signals                                       | Motor Position Feedback Signals                                       | Motor Position Feedback Signals                                                                 |
| ENC_A                                                                 | N1                                                                    | I, PU                                                                 | incremental encoder signal A                                                                    |
| ENC_B                                                                 | N2                                                                    | I, PU                                                                 | incremental encoder signal B                                                                    |
| ENC_N                                                                 | P2                                                                    | I, PU                                                                 | incremental encoder null pulse N                                                                |
| ENC_2_A                                                               | V6                                                                    | I, PU                                                                 | 2nd incremental encoder signal A                                                                |
| ENC_2_B                                                               | V7                                                                    | I, PU                                                                 | 2nd incremental encoder signal B                                                                |
| ENC_2_N                                                               | W6                                                                    | I, PU                                                                 | 2nd incremental encoder null pulse N                                                            |
| HALL_UX                                                               | M4                                                                    | I, PU                                                                 | digital Hall signal associated to U (H1)                                                        |
| HALL_V                                                                | N4                                                                    | I, PU                                                                 | digital Hall signal associated to V (H2)                                                        |
| HALL_WY                                                               | P4                                                                    | I, PU                                                                 | digital Hall signal associated to W(H1)                                                         |
| ENC_ADC_CSN                                                           | L3                                                                    | O                                                                     | analog encoder SPI ADC LTC2351 CONV                                                             |
| ENC_ADC_MISO                                                          | L1                                                                    | I                                                                     | analog encoder SPI ADC LTC2351 SDO                                                              |
| ENC_ADC_SCK                                                           | L2                                                                    | O                                                                     | analog encoder SPI ADC LTC2351 SCK                                                              |

Reference Switch Signals

Type

Function

| REF_SW_H   | H5   | I, PU   | Home Reference Switch   |
|------------|------|---------|-------------------------|
| REF_SW_L   | H4   | I, PU   | Left Reference Switch   |
| REF_SW_R   | J4   | I, PU   | Right Reference Switch  |

<!-- image -->

Name

Pin

Type

Function

| Motor and Supply Current Measurement Signals   | Motor and Supply Current Measurement Signals   | Motor and Supply Current Measurement Signals   | Motor and Supply Current Measurement Signals                        |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|---------------------------------------------------------------------|
| SPI_ADC_CSN                                    | U8                                             | O                                              | analog current measurement SPI ADC LTC2351 CONV                     |
| SPI_ADC_SCK                                    | U9                                             | O                                              | analog current measurement SPI ADC LTC2351 SCK                      |
| SPI_ADC_MISO                                   | U10                                            | I, PU                                          | analog current measurement SPI ADC LTC2351 SDO                      |
| ADC_PHASE_MISO_2ND                             | U11                                            | I, PU                                          | analog current measurement SPI ADC LTC2351 SDO                      |
| MCLK_AENC_UX                                   | P5                                             | IO                                             | DS-Mod Clock analog encoder/analog Hall U or X                      |
| MCLK_AENC_VN                                   | R4                                             | IO                                             | DS-Mod Clock analog encoder/analog Hall V or N                      |
| MCLK_AENC_WY                                   | U4                                             | IO                                             | DS-Mod Clock analog encoder/analog Hall Wor Y                       |
| MCLK_AGPI_A                                    | T2                                             | IO                                             | DS-Mod Clock for Analog General Purpose Input AGPI_A                |
| MCLK_AGPI_B                                    | U2                                             | IO                                             | DS-Mod Clock for Analog General Purpose Input AGPI_B                |
| MCLK_I_UX                                      | V1                                             | IO                                             | DS-Mod Clock for Analog Current Sense Voltage of I_U or I_X         |
| MCLK_I_WY                                      | AA2                                            | IO                                             | DS-Mod Clock for Analog Current Sense Voltage of I_W or I_Y         |
| MCLK_VM                                        | T3                                             | IO                                             | DS-Mod Clock for (down-divided) motor supply volt- age of V_M       |
| MDAT_AENC_UX                                   | R5                                             | I                                              | DS-Mod Data Stream for analog encoder/analog Hall U or X            |
| MDAT_AENC_VN                                   | T5                                             | I                                              | DS-Mod Data Stream for analog encoder/analog Hall V or N            |
| MDAT_AENC_WY                                   | U5                                             | I                                              | DS-Mod Data Stream for analog encoder/analog Hall Wor Y             |
| MDAT_AGPI_A                                    | T1                                             | I                                              | DS-Mod Data Stream for Analog General Purpose In- put AGPI_A        |
| MDAT_AGPI_B                                    | U1                                             | I                                              | DS-Mod Data Stream for Analog General Purpose In- put AGPI_B        |
| MDAT_I_UX                                      | W1                                             | I                                              | DS-Mod Data Stream for Analog Current Sense Volt- age of I_U or I_X |
| MDAT_I_WY                                      | W2                                             | I                                              | DS-Mod Clock for Analog Current Sense Voltage of I_W or I_Y         |
| MDAT_I_UX_2ND                                  | Y1                                             | I, PU                                          | DS-Mod Data stream for Analog Current Sense Volt- age of I_U or I_X |
| MDAT_I_WY_2ND                                  | Y2                                             | I, PU                                          | DS-Mod Data stream for Analog Current Sense Volt- age of I_W or I_Y |
| MDAT_VM                                        | R2                                             | I                                              | DS-Mod Data stream for (down-divided) motor sup- ply voltage of V_M |

<!-- image -->

Name

Pin

Type

| PWMSignals   | PWMSignals   | PWMSignals   | PWMSignals                                                               |
|--------------|--------------|--------------|--------------------------------------------------------------------------|
| PWM_UX1_H    | Y7           | O            | Digital gate control signal for High Side of Phase U (FOC3) or X1 (FOC2) |
| PWM_UX1_L    | AA7          | O            | Digital gate control signal for Low Side of Phase U (FOC3) or X1 (FOC2)  |
| PWM_VX2_H    | Y8           | O            | Digital gate control signal for High Side of Phase V (FOC3) or X2 (FOC2) |
| PWM_VX2_L    | AA8          | O            | Digital gate control signal for Low Side of Phase V (FOC3) or X2 (FOC2)  |
| PWM_WY1_H    | Y10          | O            | Digital gate control signal for High Side of Phase W (FOC3) or Y1 (FOC2) |
| PWM_WY1_L    | AA10         | O            | Digital gate control signal for Low Side of Phase W (FOC3) or Y1 (FOC2)  |
| PWM_Y2_H     | AA11         | O            | Digital gate control signal for High Side of Phase Y2 (FOC2)             |
| PWM_Y2_L     | Y11          | O            | Digital gate control signal for Low Side of Phase Y2 (FOC2)              |

Additional Control Signals

Function

| ENABLE_OUT    | W11   | O   | enable output                |
|---------------|-------|-----|------------------------------|
| BRAKE_CHOPPER | Y9    | O   | brake chopper control signal |

Debug UART Interfaces and Debug I/Os

| STATUS_OUT   | M5   | O     | status signal output                               |
|--------------|------|-------|----------------------------------------------------|
| RXD_HWI      | G5   | I, PU | HWdebug UART, RxD input                            |
| TXD_HWO      | G4   | O     | HWdebug UART, TxD output                           |
| RXD_MCU      | G2   | I, PU | MCU debug UART, RxD input                          |
| TXD_MCU      | G1   | O     | MCU debug UART, TxD output                         |
| MCU_GPO_15   | V8   | O     | reserved, keep open                                |
| MCU_GPO_16   | V10  | O     | reserved, keep open                                |
| MCU_GPO_17   | V11  | O     | reserved, keep open                                |
| MCU_GPO_18   | U12  | O     | reserved, keep open                                |
| PDI_IRQ      | K5   | O     | reserved, keep open (GPIO_3 on TMC8670 EVAL V.1.1) |

<!-- image -->

Name

Pin

| Device Supply and Ground   | Device Supply and Ground                                                                                                                                                                                                                                                                      | Device Supply and Ground                                                      | Device Supply and Ground   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|----------------------------|
| VDD_1V2                    | K10, K11, L10, L11, M12, M13, N12, N13, R12, R13, U14, V14, V16, W16                                                                                                                                                                                                                          | 1.2V DC Core supply voltage, use 100nF /uniFB01lter capacitors                |                            |
| VDD_3V3                    | M7, U15, V12, K9, H7, G15, R14, E2, J5, M2, N5, V2, V5, AA9, R10, V9, D20, F17, J15, K20                                                                                                                                                                                                      | 3.3V supply voltage for I/Os, PLL, and NVM, use 100nF /uniFB01lter capacitors |                            |
| GND                        | G7, H15, R15, A1, A11, A16, A21, A6, AA1, AA12, AA14, AA15, AA16, AA18, AA19, AA20, D12, D17, D7, F21, F4, G14, H1, H18, J10, J11, J7, K12, K13, L12, L13, L4, M10, M11, M17, M21, N10, N11, P15, P7, R1, T21, T4, U13, U16, U17, U6, U7, V13, V15, Y12, Y14, Y15, Y16, Y18, Y19, Y20, Y6, J9 | Supply Ground                                                                 |                            |

Explicitly Not Connected Pins

Type

Function

| R11, Y4, V17, V18, not connected Y13, Y17, Y5, D18, G12, G8, AA5, AA4,   |
|--------------------------------------------------------------------------|

<!-- image -->

Name

Pin

Type

Function

| Test Pins only   | Test Pins only   | Test Pins only   | Test Pins only                               |
|------------------|------------------|------------------|----------------------------------------------|
| DUMMY_OUT        | G17              | O                | reserved, keep open                          |
| JTAG_TCK         | L9               | I                | JTAG test clock, pull up to VDD_3V3 with 1K  |
| JTAG_TDI         | N9               | I                | JTAG Test data, N.C.                         |
| JTAG_TDO         | R7               | O                | JTAG Test data, N.C.                         |
| JTAG_TMS         | AA3              | I                | JTAG Test mode select, N.C.                  |
| JTAG_TRSTB       | Y3               | I                | JTAG Test reset, pull down to GND with 1K    |
| JTAGSEL          | V4               | I                | JTAG Select line, pull up to VDD_3V3 with 1K |

Table 2: Pin and Signal description for TMC8670-BA

<!-- image -->

## 5 Device Usage and Handling

TMC8670 and the external Ethernet PHYs must share the same clock source. For proper operation a stable and accurate 25MHz clock source is required. The recommended initial accuracy must be at least 25ppm or better.

## 5.1 Reference Clock

TMC8670 has been successfully used with the following crystal oscillators so far (this list ist not limited to the mentioned parts):

- TXC 7M-25.000MAAJ-T XO 25.0MHz, 30ppm
- FOX Electronics FOX924B TCXO, 25.0MHz, 2.5ppm, 3.3V
- CTS 636L5C025M00000, 25MHz, 25ppm

For connection to the Ethernet physical medium and to the EtherCAT master, TMC8670 offers two MII ports (media independent interface) and connects to standard 100Mbit/s Ethernet PHYs or 1Gbit/s Ethernet PHYs running in 100Mbit/s mode.

## 5.2 Ethernet PHY Connection

<!-- image -->

Figure 6: MII interface

<!-- image -->

TMC8670 pin

Description

Table 3: MII signal description

| MIIx_LINK          | Active link input signal, active high/active low determined by LINK_POLARITY pin   |
|--------------------|------------------------------------------------------------------------------------|
| MIIx_RXCLK         | Receive clock input                                                                |
| MIIx_RXD[3:0]      | Receive data inputs (4 bit wide)                                                   |
| MIIx_RXDV          | Receive data valid input                                                           |
| MIIx_RXER          | Receive error input                                                                |
| MIIx_TX_EN         | Transmit enable output                                                             |
| MIIx_TXCLK         | Transmit clock input, optional for automatic phase compensation                    |
| MIIx_TXD[3:0]      | Transmit data output (4 bit wide)                                                  |
| MCLK               | PHY MI con/uniFB01guration clock output                                            |
| MDIO               | PHY MI con/uniFB01guration data in-/output                                         |
| MIIx_TX_SHIFT[1:0] | Phase compensation of MII TX signals, tie either to GND or VDD_3V3                 |
| LINK_POLARITY      | Active level of MIIx_LINK signal, tie either to GND or VDD_3V3                     |

TMC8670 requires Ethernet PHYs with MII interface. The MII interface of TMC8670 is optimized for low additional delays by omitting a transmit FIFO. Additional requirements to Ethernet PHYs exist and not every Ethernet PHY is suited. Please see the Ethernet PHY Selection Guide provided by the ETG: ❤/a116/a116♣✿✴✴ ❞♦✇♥❧♦❛❞✳❜❡❝❦❤♦❢❢✳❝♦♠✴❞♦✇♥❧♦❛❞✴❉♦❝✉♠❡♥/a116✴❊/a116❤❡/a114❈❆❚✴❉❡✈❡❧♦♣♠❡♥/a116❴♣/a114♦❞✉❝/a116/a115✴❆◆❴/a80❍❨❴❙❡❧❡❝/a116✐♦♥❴●✉✐❞❡❱✷✳ ✻✳♣❞❢ .

- IC+ IP101GA: ❤/a116/a116♣✿✴✴✇✇✇✳✐❝♣❧✉/a115✳❝♦♠✳/a116✇

TMC8670 has been successfully tested in combination with the following Ethernet PHYs so far:

- Micrel KSZ8721BLI: ❤/a116/a116♣✿✴✴✇✇✇✳♠✐❝/a114❡❧✳❝♦♠

The clock source of the Ethernet PHYs is the same as for the TMC8670.

- Micrel KSZ8081: ❤/a116/a116♣✿✴✴✇✇✇✳♠✐❝/a114❡❧✳❝♦♠

## LINK\_POLARITY

In addition, some PHYs allow for bootstrap con/uniFB01guration with pull-up and pull-down resistors. This bootstrap information is used by the PHY at power-up/reset and also in/uniFB02uences the polarity of the original pin function.

This pin allows con/uniFB01guring the polarity of the link signal of the PHY. PHYs of different manufacturers may use different polarities at the PHY's pins.

ETH PHY Addressing The TMC8670 addresses Ethernet PHYs using the logical port numbers 0 (LINK IN port) and 1 (LINK OUT port). Typically, the Ethernet PHY addresses should correspond with the logical port number, so PHY addresses have to be set to 0 and 1 accordingly using the ETH PHYs' bootstrap and con/uniFB01guration options.

MII\_TX\_SHIFT[1:0] TMC8670 and Ethernet PHYs share the same clock source. TX\_CLK from the PHY has a /uniFB01xed phase relation to the MII interface TX part of TMC8670 ˙ Thus, TX\_CLK must not be connected and the delay of a TX FIFO inside the IP Core is saved. In order to ful/uniFB01ll the setup/hold requirements of the PHY, the phase shift between TX\_CLK and MIIx\_TX\_EN and MIIx\_TXD[3:0] has to be controlled.

<!-- image -->

- Manual TX Shift compensation with additional delays for MIIx\_TX\_EN/MIIx\_TXD[3:0] of 10, 20, or 30 ns. Such delays can be added using the TX Shift feature and applying MIIx\_TX\_SHIFT[1:0]. MIIx\_TX\_SHIFT[1:0] determine the delay in multiples of 10 ns for each port. Set MIIx\_TXCLK to zero if manual TX Shift compensation is used.

## 5.3 External Circuitry and Applications Examples

- Automatic TX Shift compensation if the TX Shift feature is selected: connect MIIx\_TXCLK and the automatic TX Shift compensation will determine correct shift settings. Set MIIx\_TX\_SHIFT[1:0] to 0 in this case.

## 5.3.1 Supply and Filtering

VDD\_1V2

## 5.3.2 Status LED Circuit

The LED colors are de/uniFB01ned by ETG.1300 (available on ✇✇✇✳❡/a116❤❡/a114❝❛/a116✳♦/a114❣ ).

There should be one 100nF cap for each two VDD\_1V2 pins. There should be one 100nF cap for circa each two VDD\_3V32 pins. They should be placed as near as possible to the pins.

TMC8670

<!-- image -->

VDD\_3V3

Figure 7: PLL supply /uniFB01lter

The TMC8670 has 4 status LED outputs. All outputs are supplied from VDD\_3V3, and drive a LED with current limiting resistor to GND. The use of low current LED is recommended to keep supply current low and to stay within the current limit of 10mA per pin. The appropriate resistor value must be chosen for the selected LED's forward voltage. For a 2V forward voltage at 2mA, a value of ca. 680 Ohm is a reasonable value.

<!-- image -->

TMC8670

Figure 8: Status LED circuit

<!-- image -->

AnIIC EEPROM is required for operation with the SII interface. Its size can be up to 4MBit. While the access protocol of the IIC EEPROMs is standardized, the addressing procedure changes from one address byte up to 16kBit to two address bytes from 32kBit.

## 5.3.3 SII EEPROM Circuit

Up to 16kBit the PROM\_SIZE pin must be tied to GND, above that, it must be tied to VDD\_3V3.

VDD\_3V3

<!-- image -->

VDD\_3V3

Figure 9: SII EEPROM circuit

VDD\_3V3

<!-- image -->

## 5.4 Incremental Encoder Connection

<!-- image -->

GND

Figure 10: Example circuit for connecting an incremental encoder with level shifters from typically 5V to 3.3V

## 5.4.1 Incremental ABN Encoder

The PPR parameter is the most important parameter of the incremental encoder interface. With that, it forms a modulo (PPR) counter, counting from 0 to (PPR-1). Depending on the direction, it counts up or down. The modulo PPR counter is mapped into the register bank as a dual ported register. the user can over over write it with an initial position. The ABN encoder interface provides both, the electrical position and the multi-turn position are dual-ported read-write registers.

The incremental encoders give two phase shifted incremental pulse signals A and B. Some incremental encoders have an additional null position signal N or zero pulse signal Z. An incremental encoder (called ABNencoderorABZencoder)hasanindividualnumberofincrementalpulses per revolution. The number of incremental pulses de/uniFB01ne the number of positions per revolution (PPR). The PPR might mean pulses per revolution or periods per revolution. Instead of positions per revolution some incremental encoder vendors call these CPR counts per revolution.

## Note

The PPR parameter must be set exactly according to the used encoder.

The N pulse from an encoder triggers either sampling of the actual encoder count to fetch the position at the N pulse or it re-writes the fetched n position on an N pulse. The N pulse can either be uses as stand alone pulse or and-ed with NAB = N and A and B. It depends on the decoder what kind of N pulse has to be used, either N or NAB. For those encoder with precise N pulse within on AB quadrat, the N pulse must be used. For those encoders with N pulse over four AB quadrants one can enhance the precision of the N pulse position detection by using NAB instead of N.

<!-- image -->

Figure 11: ABN Incremental Encoder N Pulse

<!-- image -->

The polarity of N pulse, A pulse and B pulse are programmable. The N pulse is for re-initialization with each turn of the motor. Once fetched, the ABN decoder can be con/uniFB01gured to write back the fetched N pulse position with each N pulse.

Incremental encoders are available with N pulse and without N pulse.

| Note   |                                                                                                        |
|--------|--------------------------------------------------------------------------------------------------------|
| Note   | The ABN encoder interface has a direction bit to set once the direction of motion for the application. |

Logical ABN = A and B and N might be useful for incremental encoders with low resolution N pulse to enhance the resolution. On the other hand, for incremental encoders with high resolution n pulse a logical abn = a and b and n might totally suppress the resulting n pulse.

<!-- image -->

Figure 12: Encoder ABN Timing - high precise n pulse and less precise N pulse

<!-- image -->

## 5.4.2 Secondary Incremental ABN Encoder

The TMC8670 is equipped with a secondary incremental encoders interface. This secondary encoder interface is available as source for velocity control or position control. This is for applications where a motor turns an object with a gear to position the object. An example is a robot arm where a motor moves an angle with a the mechanical angle of the arm as the target.

For commutating a motor with FOC one selects a position sensor source (digital incremental encoder, digital hall, analog hall, analog incremental encoder, ...) that is mounted close to the motor. The inner FOC loop control torque and /uniFB02ux of the motor based on the measured phase currents and the electrical angle of the rotor.

Info

The secondary incremental encoder is not available for commutation (phi\_e) for the inner FOC. In others words, there is no electrical angle phi\_e selectable from the secondary encoder.

## 5.4.3 Open Loop Encoder

For initial system setup the encoder engine is equipped with an open loop position generator. With one canturn the motor open-loop by specifying speed in rpm and acceleration in rpm/s together with a voltage UD\_EXT in D direction. So, the open-loop encoder it is not a real encoder, it just gives positions as an encoder does. The open-loop decoder has a direction bit to de/uniFB01ne once the direction of motion for the application.

Note

The open loop encoder is useful for initial ADC setup, encoder setup, hall signal validation, and for validation of the number of pole pairs of a motor. The open loop encoder turns a motor open with programmable velocity in unit [RPM] with programmable acceleration in unit [RPM/s].

<!-- image -->

So, with the open loop encoder one can turn a motor without any position sensor and without any current measurement as the /uniFB01rst step of doing the system setup. With the turning motor one can adjust the ADC scales and offsets and set up positions sensors (hall, incremental encoder, ...) according to resolution, orientation, direction of rotation.

## 5.5 Hall Signal Connection

Figure 13: Example circuit for connecting Hall sensor signals with level shifters from typically 5V to 3.3V

<!-- image -->

## 5.5.1 Digital Hall Sensor Interface with optional Interim Position Interpolation

The digital hall interface is the position sensor interface for digital Hall signals. The digital Hall signal interface /uniFB01rst maps the digital Hall signals to an electrical position PHI\_E\_RAW. An offset PHI\_E\_OFFSET can be used to rotate the orientation of the Hall signal angle. The electrical angle PHI\_E is for commutation. Optionally, the default electrical positions of the Hall sensors can be adjusted by writes into the associated registers.

<!-- image -->

UX

0°

Figure 14: Hall Sensor Angles

W

UX

30°60°90°120°150°180°210°240°270°300°330°360°

<!-- image -->

H3

H1

H2

H3

Hall sensors give an absolute positions within an electrical period with a resolution of 60° as 16 bit positions (s16 resp. u16) PHI. With activated interim Hall position interpolation the user gets high resolution interim positions, when the motor is running at speed beyond 60 rpm.

## 5.5.2 Digital Hall Sensor - Interim Position Interpolation

When the position interpolation is switched on, it becomes active on speed beyond 60 rpm. For lower speed it automatically disables. This is important especially, when the motor has to be at rest.

For lower torque ripple the user can switch on the position interpolation of interim Hall positions. This function is useful for motors that are compatible with sine wave commutation, but equipped with digital hall sensors.

Hall Sensor position interpolation might fail, when Hall sensors signals are not properly placed in the motor. Please adjust hall sensor positions for this case.

## 5.5.3 Digital Hall Sensors - Masking and Filtering

Sometimes digital Hall sensor signals get disturbed by switching events in the power stage. The TMC8670 can automatically mask switching distortions by correct setting of the HALL\_MASKING register. When a switching event occurs, the Hall sensor signals are held for HALL\_MASKING value times 10 ns. In this way Hall sensor distortions are eliminated. Uncorrelated distortions can be /uniFB01ltered via a digital /uniFB01lter of parametrizable length. If the input signal to the /uniFB01lter does not change for HALL\_DIG\_FILTER times 5 us, the signal can pass the /uniFB01lter. This /uniFB01lter eliminates issues with bouncing Hall signals.

## 5.5.4 Digital Hall Sensors together with Incremental Encoder

If a motor is equipped with both Hall sensors and incremental encoder, the Hall sensors can be used for the initialization as a low resolution absolute position sensor and later the incremental encoder can be used as a high resolution sensor for commutation.

<!-- image -->

## 5.6 ADC Interfaces

TheTMC8670evaluationboard(TMC8670EVALV.1.1)isequippedwithLMC339deltasigmaADCfrontends and LTC2351 SPI ADC frontends to enable evaluation of both alternatives.

The ADC interface is for measurement of sense voltages from sense resistor ampli/uniFB01ers for current measurement and for measurement of analog hall signals or analog encoder signals. There are two variants of external ADC interfaces supported: Delta Sigma ADC formed by linear comparator LM339 with two resistors and one caparitor per channel. External SPI ADC LTC2351 from Linear Technology. Both ADC groups (A and B) can be selected separately to process either dsADC or SPI ADC.

## 5.6.1 ADC Interface - Delta Sigma Modulator

As external delta sigma modulator the linear quad comparator LM339 is recommended together with R PU = 1 K Ω(1%) , R C = 100 K Ω(1%) , and R I = 100 K Ω(1%) , and C = 100 pF (5%) .

<!-- image -->

Figure 15: TMC8670 Delta Sigma ADC Con/uniFB01guration

<!-- image -->

## 5.6.2 ADC Interface - SPI ADC

Figure 16: TMC8670 con/uniFB01guration for LTC2351 SPI ADCs

<!-- image -->

Whene using LTC2351 as ADC frontend for the TMC8670, one can add /uniFB01lter elements R CHP = 50Ω(1%) and C PN = 47 pF (5%) for spike suppressen on each ADC analog input channel of Group A (CH0, CH1, CH2, CH3, CH4, CH5) and of Group B (CH0, CH1, CGH2, CH3).

Figure 17: LTC2351 with input /uniFB01lter elements for noise reduction and spike reduction

<!-- image -->

## 5.6.3 Analog Hall and Analog Encoder Interface (SinCos of 0°90° or 0°120°240°)

An analog encoder interface is part of the decoder engine. It is able to handle analog position signals of 0° and 90° and 0° 120° 240°. The analog decoder engine adds offset and scales the raw analog encoder signals and calculates the electrical angle PHI\_E from these analog position signals.

An individual signed offset is added each associated raw ADC channel and scaled by its associated scaling factors according to

<!-- formula-not-decoded -->

<!-- image -->

In addition, the AENC\_OFFSET is for conversion of unsigned ADC values into signed ADC values as required for the FOC.

Info

For details on the individual registers and how to access them please check the TMC8670 /uniFB01rmware manual.

Figure 18: Analog Encoder (AENC) Selector &amp; Scaler w/ Offset Correction

<!-- image -->

## Info

The analog N pulse is just a raw ADC value. Scaling, offset correction, hand handling of analog N pulse similar to N pulse handling of digital encoder N pulse is not implemented for analog encoder.

## 5.6.4 Analog Position Decoder (SinCos of 0°90° or 0°120°240°)

## 5.7 Brake Chopper Connection

The extracted positions from the analog decoder are available for read out from registers.

The brake chopper signal from the TMC8670 is just a digital 3V3 logic level signal. It can be used as switching / trigger signal for an external brake chopper circuit.

<!-- image -->

## 5.8 UART Interfaces

The software UART (TXD\_MCU, RXD\_MCU) is for optional /uniFB01rmware updates with TMCL-IDE without EtherCAT master and for debugging purposes during EtherCAT stack development. With an EtherCAT master one can update via FoE.

Figure 19: TMC8670 Brake Chopper Connection

<!-- image -->

The TMC8670 is equipped with two independant UART interfaces for initial evaluation and visualization purposes: The /uniFB01rst UART software interface for the TMCL-IDE with TMCL protocol and the second UART hardware register interface with a /uniFB01ve byte procotol.

The hardware UART (TXD\_HWO, RXD\_HWI) allows direct access to the TMC8670 registers handled by an arbiter. It is for debugging purposes and allows transparent access to internal registers of the TMC8670. It is intended to support EtherCAT slave controller hardware development.

Note

Both interfaces are intended for initial evaluation, debugging, development, and monitoring purposes. It is recommended not to over-write data from outside the EtherCAT into registers of the TMC8670 via these interfaces during regular operation. Read of data might be used for monitoring purposes during debugging or validation of own developments.

## 5.8.1 UART Software Interface for TMCL-IDE

The software UART interface is a simple three Pin (GND, TXD\_MCU, RXD\_MCU) 3.3V UART Interface with 115200 bps communication speed, one start bit, eight data bits, one stop bit, and no parity bits (1N8). With an 3.3V-UART-to-USB adapter cable (e.g. FTDI TTL-232R-RPi) the user can directly access registers of the TMC8670 via the TMCL-IDE.

## 5.8.2 UART Hardware Register Interface

This UART datagram consists of /uniFB01ve bytes. This UART interface has a time out feature: Five bytes of a UART datagram need to be send within one second. A pause of sending more than one second causes a time out and sets the UART protocol handler back into idle state. In other words, waiting for more than one second in sending via UART ensures that the UART protocol handler is in idle state. The UART is inactive with the RXD input pulled to high.

The UART hardware register interface is a simple three Pin (GND, TXD\_HWO, RXD\_HWI) 3.3V UART Interface with up to 3 Mbit/s transfer speed with one start bit, eight data bits, one stop bit, and no parity bits (1N8). The default speed is 9600 bps. Other supported speeds are 115200 bps, 921600 bps, and 3000000 bps. This UART port enables In-System-Setup-Support by multiple-ported register access of the TMC8670.

<!-- image -->

## A simple UART hardware register access example:

```
✵①✽✶ ✵①✵✵ ✵①✵✵ ✵①✵✵ ✵①✵✵ ✴✴ ✶/a115/a116 ✇/a114✐/a116❡ ✵①✵✵✵✵✵✵✵✵ ✐♥/a116♦ ❛❞❞/a114❡/a115/a115 ✵①✵✶ ✭❈❍■/a80■◆❋❖❴❆❉❉❘✮ ✵①✵✵ ✵①✵✵ ✵①✵✵ ✵①✵✵ ✵①✵✵ ✴✴ ✷♥❞ /a114❡❛❞ /a114❡❣✐/a115/a116❡/a114 ✵①✵✵ ✭❈❍■/a80■◆❋❖❴❉❆❚❆✮✱ /a114❡/a116✉/a114♥/a115 ✵①✸✽✸✻✸✼✸✵
```

Why UART Interface? It might be useful during system setup phase by simple access to some internal registers without disturbing the application and without changing the actual user application software and without adding additional debugging code that might disturb the application software itself. It enables access for monitoring purposes with its simple and direct /uniFB01ve byte protocol.

<!-- image -->

Figure 20: UART Read Datagram (TMC8670 register read via UART)

<!-- image -->

Figure 21: UART Write Datagram (TMC8670 register write via UART)

<!-- image -->

## 6 FOC Basics

## 6.1 Why FOC?

This section gives a short introduction into some basics of Field Oriented Control (FOC) of electric motors.

The Field Oriented Control (FOC) alternatively named Vector Control (VC) is a method for most energy e/uniFB03cient turning an electric motor.

The Field Oriented Control was independently developed by K. Hasse, TU Darmstadt, 1968, and by Felix Blaschke, TU Braunschweig, 1973. The FOC is a current regulation scheme for electro motors that takes the orientation of the magnetic /uniFB01eld and the position of the rotor of the motor into account regulating the strength in the way that the motor gives that amount of torque that is requested as target torque. The FOC maximizes active power and minimize idle power - that /uniFB01nally results in power dissipation - by intelligent closed-loop control illustrated by the cartoon /uniFB01gure 22.

Figure 22: Illustration of the FOC basic principle by cartoon: Maximize active power and minimize idle power and minimize power dissipation by intelligent closed-loop control.

<!-- image -->

## 6.3 Why FOC as pure Hardware Solution?

The hardware FOC as an existing standard building block drastically reduces the effort in system setup. With that of the shelf building block, the starting point of FOC is the setup of the parameters for the FOC and no longer the setup and implementation of the FOC itself and building and programming of required interface blocks. The real parallel processing of hardware blocks de-couples the higher lever application software from high speed real time tasks and simpli/uniFB01es the development of application software. With the TMC8670, the user is free to use its quali/uniFB01ed CPU together with its quali/uniFB01ed tool chain and it frees the user from /uniFB01ghting with processer speci/uniFB01c challenges concerning interrupt handling and direct memory access. There is no need for a dedicated tool chain to access TMC8670 registers and to operate it - just SPI (or UART) communication needs to be enabled for a given CPU.

The initial setup of the FOC is usually very time consuming and complex, although source code is freely available for various processors. This is because the FOC has many degrees of freedom that all need to /uniFB01t together in a chain in order to work.

The integration of the FOC as a SoC (System-on-Chip) drastically reduces the number of required components and reduces the required PCB space. This is in contrast to classical FOC servos formed by motor

<!-- image -->

## 6.2 What is FOC?

block and separate controller box wired with motor cable and encoder cable. The high integration of FOC, together with velocity controller and position controller as a SoC, enables the FOC as a standard peripheral component that transforms digital information into physical motion. Compact size together with high performance and energy e/uniFB03ciency especially for battery powered mobile systems are enabling factors when embedded goes autonomous.

Two force components act on the rotor of an electric motor. One component is just pulling in radial direction (ID) where the other component tangentially pulling (IQ) is applying torque. The ideal FOC performs a closed loop current regulation that results in a pure torque generating current IQ without direct current ID.

## 6.4 How does FOC work?

Figure 23: FOC optimizes torque by closed loop control while maximizing IQ and minimizing ID to 0

<!-- image -->

Fromtoppointofview, the FOC for three phase motors uses three phase currents of the stator interpreted as a current vector (Iu; Iv; Iw) and calculates three voltages interpreted as a voltage vector (Uu; Uv; Uw) taking the orientation of the rotor into account in a way that only a torque generating current IQ results.

To do so, the knowledge of some static parameters (number of pole pairs of the motor, number of pulses per revolution of a used encoder, orientation of encoder relative to magnetic axis of the rotor, count direction of the encoder) is required together with some dynamic parameters (phase currents, orientation of the rotor).

From top point of view, the FOC for two phase motors uses two phase currents of the stator interpreted as a current vector (Ix; Iy) and calculates two voltages interpreted as a voltage vector (Ux; Uy) taking the orientation of the rotor into account in a way that only a torque generating current IQ results.

The adjustment of P parameter and I parameters of two PI controllers for closed loop control of the phase currents depends on electrical parameters (resistance, inductance, back EMF constant of the motor that is also the torque constant of the motor, supply voltage) of the motor.

## 6.5 What is required for FOC?

The FOC needs to know the direction of the magnetic axis of the stator of the motor together with the magnetic axis of the rotor of the motor. The magnetic direction of the magnetic axis of the stator is calculated from the currents thought the phases of the motor. The magnetic direction of the rotor is determined by an encoder device.

The challenge of the FOC is the high number of degrees of freedom of all parameters together.

For the FOC one needs to measure the currents through the coils of the stator and the angle of the rotor. The measured angle of the rotor needs to be adjusted to the magnetic axes.

<!-- image -->

## 6.5.1 Coordinate Transformations - Clarke, Park, iClarke iPark

The TMC8670 takes care of the required transformations and get the user rid from /uniFB01ghting with details of implementation of theses transformations.

TheFOCrequiresdifferentcoordinatetransformations formulated as a set of matrix multiplications. These are the Clarke Transformation (Clarke), the Park Transformation (Park), the inverse Park Transformation (iPark) and the inverse Clarke Transformation (iClarke). Some put Park and Clarke together as DQ transformation and Park and Clarke as inverse DQ transformation.

## 6.5.2 Measurement of Stator Coil Currents

Coil current stands for motor torque in context of FOC. This is because motor torque is proportional to motor current, de/uniFB01ned by the torque constant of a motor. In addition, the torque depends on the orientation of the rotor of the motor relative to the magnetic /uniFB01eld produced by the current through the coils of the stator of the motor.

The measurement of the stator coil currents is required for the FOC to calculate a magnetic axis ot of the stator /uniFB01eld caused by the currents /uniFB02owing through the stator coils.

## 6.5.3 Stator Coil Currents I\_U, I\_V, I\_W and Association to Terminal Voltages U\_U, U\_V, U\_W

The correct association between stator terminal voltages U\_U, U\_V, U\_W and stator coil currents I\_U, I\_V, I\_W is essential for the FOC. In addition to the association, the signs of each current channel needs to /uniFB01t. Signs of the current can be adapted numerically by the ADC scaler. The mapping of ADC channles is programmable via con/uniFB01gurations registers for the ADC selector. Initial setup is supported by the integrated open loop encoder block that can turn a motor open loop.

## 6.5.3.1 Chain of Gains for ADC Raw Values

<!-- formula-not-decoded -->

An ADC raw value is a result of a chain of gains that determine it. A coil current I\_SENSE /uniFB02owing through a sense resistor causes a voltage difference according to Ohm's law. The resulting ADC raw value is result of the analog signal path according to

The ADC\_GAIN is a result of a chain of gains with individual signs. The sign of the ADC\_GAIN is positive or negative, depending on the association of connections between sense ampli/uniFB01er inputs and the sense resistor terminals. The ADC\_OFFSET is the result of electrical offsets of the phase current measurement signal path. For the TMC8670 the maximum ADC\_RAW value ADC\_RAW\_MAX = (2 16 -1) and the minimum ADC raw value is ADC\_RAW\_MIN = 0.

<!-- formula-not-decoded -->

For the FOC, the ADC\_RAW is scaled by the ADC scaler of the TMC8670 together with subtraction of offset to compensate it. Internally, the TMC8670 FOC engine calculates with s16 values. So, the ADC scaling needs to be chosen that the measures currents /uniFB01t into the s16 range. With the ADC scaler, one can choose a scaling with physical units like [ mA ] . A scaling to [ mA ] covers a current range of -32 A... +32 A with m [ A ] resolution. For higher currents con can go to un-usual units like centi Ampere [ cA ] covering -327 A... +327 A or deci Ampere -3276 A... +3276 A .

<!-- image -->

ADC scaler and offset compensators are for mapping of raw ADC values to s16 scaled an offset cleaned current measurement values that are adequate for the FOC. ADC scaling factor and ADC offset removal value needs to be programmed into associated registers. Finally, a current is mapped to an ADC raw value that is numerically mapped to signed ADC value with removed offset by the ADC scaler.

## 6.5.4 Measurement of Rotor Angle

The TMC8670 does not support sensorless FOC.

Determination of the rotor angle is either by done by sensors (digital encoder, analog encoder, digital hall sensors, analog hall sensors) or sensorless by reconstruction of the rotor angle from measurements of electrical parameters with or without a mathematical model of the motor. Currently, there is no sensorless methods available for FOC that work in a general purpose way as a sensor down to velocity zero.

## 6.5.5 Measured Rotor Angle vs. Magnetic Axis of Rotor vs. Magnetic Axis ot Stator

The direction of counting depends on the encoder, its mounting, and wiring and polarities of encoder signals and motor type. So, the direction of encoder counting is programmable for comfortable de/uniFB01nition for a given combination of motor and encoder.

The rotor angle, measured by an encoder, needs to be adjusted to the magnetic axis ot the rotor. This is because an incremental encoder has an arbitrary orientation relative to the magnetic axis of the rotor and the rotor has an arbitrary orientation to magnetic axis of the stator.

## 6.5.5.1 Direction of Motion - Magnetic Field vs. Position Sensor

With an absolute encoder, once adjusted to the relative orientation of the rotor and to the relative orientation of the stator, one could start the FOC without initialization of the relative orientations.

For FOC it is essential, that the direction of revolution of the magnetic /uniFB01eld is compatible with the direction of motion of the rotor position reconstructed from encoder signals: For revolution of magnetic /uniFB01eld with positive direction the decoder position need to turn into same positive direction. For revolution of magnetic /uniFB01eld with negative direction the decoder position need to turn into same negative direction.

## 6.5.5.2 Bang-Bang Encoder Initialization

For Bang-Bang initialization one sets a current into direction D that is strong enough the move the rotor into the desired direction.

## 6.5.5.3 Encoder Initialization using Hall Sensors

The encoder can initialized using digital Hall sensor signals. Digital Hall sensor signal give absolute positions within each electrical period with a resolution of sixty degree. If the hall sensor signals are used to initialize the encoder position on the /uniFB01rst change of a Hall sensor signal, one gets an absolute reference within the electrical period for commutation.

## 6.5.5.4 Encoder Minimum Movement Initialization

For encoder minimal movement initialization, one slowly increases a current into direction D and adjusts an offset of measured angel in a way the rotor of the motor does not move during initialization while the offset of measured angel is determined.

<!-- image -->

## 6.5.6 Knowledge of Relevant Motor Parameters and Position Sensor (Encoder) Parameters

The number of pole pairs is an essential motor parameter. It de/uniFB01nes the ratio between electrical revolutions and mechanical revolutions. For a motor with one pole pair one mechanical revolution is equivalent to one electrical revolution. For a motor with npp pole pairs, one mechanical revolution is equivalent to npp electrical revolutions, with n = 1, 2, 3, 4, ....

## 6.5.6.1 Number of Pole Pairs of a Motor

Some de/uniFB01ne the number of poles NP instead of number of pole pairs NPP for a motor, which results in a factor of two that might cause confusion. For the TMC8670 we use NPP number of pole pairs.

## 6.5.6.2 Number of Encoder Positions per Revolution

Some encoder vendors give the number of lines per revolution (LPR) or just named line count (LC) as encoder parameter. Line count and positions per revolution might differ by a factor of four. This is because of the quadrature encoding - A signal and B signal with phase shift - that give four positions per line and enables the determination of direction of revolution. Some encoder vendors associate counts per revolution (CPR) or pulses per revolution associated to PPR acronym.

For the encoder, the number of positions per revolution (PPR) is an essential parameter. The number of positions per revolution is essential for the FOC.

The TMC8670 uses PPR as Positions Per Revolution as encoder parameter.

## 6.5.7 Proportional Integral (PI) Controllers for Closed Loop Current Control

Last but not least two PI controllers are required for the FOC. The TMC8670 is equipped with two PI controllers. One for control of torque generating current I\_Q and one to control current I\_D to zero.

## 6.5.8 Pulse Width Modulation (PWM) and Space Vector Pulse Width Modulation (SVPWM)

Whit this, the TMC8670 is advanced compared to software solutions where PWM and SVPM con/uniFB01guration of CPU internal peripherals normally needs settings of many parameters.

The PWM power stage is must have for energy e/uniFB03cient motor control. The PWM engine of the TMC8670 just needs a couple of parameters to set PWM frequency fPWM and switching pauses for high side switches tBBM\_H and for low side switches tBBM\_L. Some control bis are for programming of power switch polarities for maximum /uniFB02exibility in selection in gate drivers for the power MOS-FETs. An additional control bit selects SVPWM on or off. The TMC8670 allows change of PWM frequency by a single parameter during operation.

<!-- image -->

## 6.5.9 Orientations, Models of Motors, and Coordinate Transformations

The actual magnetic axis of the stator - formed by the motor coils - is determined by measurement of the coil currents.

The orientation of magnetic axes (U, V, W for FOC3 resp. X, Y for FOC2) is essential for the FOC together with the relative orientation of the rotor. Here the rotor is modelled by a bar magnet with one pole pair (n\_pole\_pairs = 1) with magnetic axis in north-south-direction.

Theactual magnetic axis of the rotor is determined by incremental encoder or by hall sensors. Incremental encoders need an initialization of orientation, where hall sensors give an absolute orientation but with low resolution. A combination of hall sensor and incremental encoder is useful for start-up initialization.

<!-- image -->

Figure 24: Orientations UVW (FOC3) and XY (FOC2)

<!-- image -->

X

S

N

Figure 25: Compass Motor Model w/ 3 Phases UVW (FOC3) and Compass Motor Model w/ 2 Phases (FOC2)

## 6.6 FOC23 Engine

<!-- image -->

Info

Support for the TMC8670 is integrated into the TMCL-IDE including wizards for set up and con/uniFB01guration. With the TMCL-IDE con/uniFB01guration and operation can be doneinafewstepsandtheusergetsdirect access to all registers of the TMC8670.

The FOC23 engine performs the inner current control loop for the torque current I Q and the /uniFB02ux current I D including the required transformations. Programmable limiters take care of clipping of interim results. Per default, the programmable circular limiter clips U\_D and U\_Q to U\_D\_R = √ (2) · U\_QandU\_R\_R = √ (2) · U\_D. PI controllers perform the regulation tasks.

## 6.6.1 PI Controllers

PI controllers are used for current control and velocity control. A P controller is used for position control. The D part is not yet supported. The user can choose between two PI controller structures. Classic PI controller structure which is also used in the TMC4670 and the Advanced PI Controller Structure. The Advanced PI Controller Structure shows better performance in dynamics and is recommended for high performance applications.

## 6.6.2 PI Controller Calculations - Classic Structure

The PI controllers in the classic Structure perform the following calculation with

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where X\_TARGET stands for target /uniFB02ux, target torque, target velocity, or target position with error e, that is the difference between target value and actual values. The time constant d t is 1 µs with the integral part is divided by 256.

Info

Changing the I-parameter of the Classic PI Controller during operation causes the controller output to jump, as the control error is /uniFB01rst integrated and then gained by the I parameter. Be careful during controller tuning or use the advanced PI Controller Structure.

## 6.6.3 PI Controller Calculations - Advanced Structure

The PI controllers in the Advanced Controller Structure perform the calculation with

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where X\_TARGET represents target /uniFB02ux, target torque, target velocity, or target position with control error e that is the difference between target value and actual values. The time constant d t is set according to

<!-- image -->

the PWM period. Velocity and Position controller evaluation can be down sampled by a constant factor when needed.

Figure 26: Advanced PI Controller

<!-- image -->

The limiting of target values for PI controllers and output values of PI controllers is programmable. Per power on default these limits are set to maximum values. During initialization these limits should be properly set for correct operation and clipping. The target input is clipped to X\_TARGET\_LIMIT. The output of a PI controller is named dXdT, because it gives the desired derivative d/dt as a target value to the following stage: The position (x) controller gives velocity (dx/dt). The output of the PI Controller is clipped to dXdT\_LIMIT. The error integral of (4) is clipped to dXdT\_LIMIT / I in the classic controller structure and the integrator output is clipped to dXdT\_LIMIT in the advanced controller structure.

<!-- image -->

value

## 6.6.4 PI Controller - Clipping

targetvalue target position

PI Controller

FLUX&amp;TORQUE

Xtarget[S16]

Xtarget input \_imit target offset

Xoffset e (error)

Xactual actualvalue

Se(t)dt

Pparameter

<!-- image -->

targetpositionoffset

PI Controller

Xoffset

POSITION

Xtarget[S32]

Xtarget\_input\_limit e (error)

Xactual actual position

## 6.6.5 PI Flux &amp; PI Torque Controller

Se(t)dt

d

positionPparameter

Figure 27: PI Architectures

The P part is represented as q8.8 and I is the I part represented as q0.15.

## 6.6.6 PI Velocity Controller

The P part is represented as q8.8 and I is the I part represented as q0.15.

position Iparameter(normally set to 0)

dXdT\_LIMIT / 1

undnoLPXP

dXdT\_LIMIT / 1

Iparameter ndnoPxpm

dXdT[s16]

dXdT[s32]

outputvalue outputtargetvelocity

<!-- image -->

## 6.6.7 P Position Controller

This is because e = x - x\_target might result in larger e[s32] for x[s32] and x\_target[s32] represented as s32 for e = x - x\_target for x[s16] and x\_target[s16] represented as s16.

For the position regulator, the P part is represented as q4.12 to be compatible with the high resolution positions - one single rotation is handled as an s16.

## 6.6.8 Inner FOC Control Loop - Flux &amp; Torque

The inner FOC control loop gets a target torque value (I\_Q\_TARGET), which represents acceleration, the rotor position, and the measured currents as input data. Together with the programmed P and I parameters, the inner FOC loop calculates the target voltage values as input for the PWM engine.

The inner FOC loop (/uniFB01gure 28) controls the /uniFB02ux current to the /uniFB02ux target value and the torque current to the desired torque target. The inner FOC loop performs the desired transformations according to /uniFB01gure 29 for 3-phase motors (FOC3). For 2-phase motors (FOC2) both Clark (CLARK) transformation and inverse Clark (iCLARK) a by-passed. For control of DC motors transformations are bypassed and only the /uniFB01rst full bridge (X1 and X2) is used.

Figure 28: Inner FOC Control Loop

<!-- image -->

## 6.6.9 FOC Transformations and PI(D) for control of Flux &amp; Torque

In case of the FOC2, Clarke transformation CLARKE and inverse Clarke Transformation iCLARKE are skipped.

The Clarke transformation (CLARKE) maps three motor phase currents ( I U , I V , I W ) to a two dimensional coordinate system with two currents ( I α , I β ). Based on the actual rotor angle determined by an encoder or via sensorless techniques, the Park transformation (PARK) maps these two currents to a quasi-static coordinate system with two currents ( I D , I Q ). The current I D represents /uniFB02ux and the current I Q represents torque. The /uniFB02ux just pulls on the rotor but does not effect torque. The torque is effected by I Q . Two PI controllers determine two voltages ( U D , U Q ) to drive desired currents for a target torque and a target /uniFB02ux. The determined voltages ( U D , U Q ) are re-transformed into the stator system by the inverse Parke transformation (iPARK). The inverse Clarke Transformation (iCLARKE) transforms these two currents into three voltages ( U U , U V , U W ). Theses three voltage are the input of the PWM engine to drive the power stage.

<!-- image -->

Figure 29: FOC3 Transformations (FOC2 just skips CLARKE and iCLARKE)

<!-- image -->

## 6.6.10 Motion Modes

Theuser can operate the TMC8670 in several motion modes. Standard Motion Modes are position control, velocity control and torque control, where target values are fed into the controllers via register access. The motion mode UD\_UQ\_EXTERN allows the user to set voltages for open loop operation and for tests during setup.

Figure 30: Standard Motion Modes

<!-- image -->

In position control mode the user can feed the step and direction interface to generate a position target value for the controller cascade. Additional motion modes are the motion mode for Encoder Initialisation (ENCODER\_INIT\_MINI\_MOVE) and motion modes where target values are fed into the TMC8670 via

<!-- image -->

PWMinterface (Pin: PWM\_IN) or analog input via pin AGPI\_A. These motion modes are recommended for applications, where reference values have to be easily distributed.

There are additional Motion Modes, which are using input from the PWM\_I input and the AGPI\_A input. Input signals can be scaled via a standard scaler providing offset and gain correction. The interface can be con/uniFB01gured via the Registers SINGLE\_PIN\_IF\_OFFSET\_SCALE and SINGLE\_PIN\_IF\_STATUS\_CFG, where also the status of the interface can be monitored. PWM input signals, which are out of frequency range can be neglected. In case of wrong input data, last correct position is used or velocity and torque are set to zero.

<!-- image -->

## 7 EtherCAT Slave Controller Description

TMC8670 contains a proven and standard-conform EtherCAT Slave Controller (ESC) providing real-time EtherCAT MAC layer functionality to EtherCAT slave devices. The ESC part of TMC8670 provides the following EtherCAT-related features:

## 7.1 General EtherCAT Information

- 4 KByte of Process Data RAM (PDRAM): The PDRAM is a dual ported RAM, which allows exchange of data from the EtherCAT master to the local application.
- Four Fieldbus Memory Management Units (FMMU): FMMUs are used for mapping of logical addresses to physical addresses. The EtherCAT master uses logical addressing for data than spans multiple slaves. An FMMU can map such a logical address range to a continuous local physical address range.
- Four Sync Managers (SM): Sync Managers are used to control and secure the data exchange via the PDRAM in terms of data consistency, data security, and synchronized read/write operations on the data objects. Two modes -buffered mode and mailbox mode - are available.
- 64 bit Distributed Clock support (DC) as core function for EtherCAT's hard real-time capabilities.
- SPI Process Data Interface (PDI): The PDI is the interface between the local application controller and the ESC. Application-speci/uniFB01c process data and EtherCAT control and status information for the EtherCAT State Machine (ESM) is exchanged via this interface. This interface is internal to the TMC8670.
- IIC interface for external SII EEPROM for ESC con/uniFB01guration: After reset and at power up, the ESC requires reading basic (and advanced) con/uniFB01guration data from an external SII EEPROM to properly con/uniFB01gure interfaces, operation modes, and and feature availability. The SII EEPROM may be read and written by the master or the local application controller as well.

To manufacture own slaves devices, a registration with the EtherCAT Technology Group (ETG) is required. More information and resources on the EtherCAT technology and the EtherCAT standard are available here:

- EtherCATis standardized by the IEC ( ❤/a116/a116♣✿✴✴✇✇✇✳✐❡❝✳❝❤✴ http://www.iec.ch/) and /uniFB01led as IEC-Standard 61158.
- EtherCAT Technology Group (ETG) ( ❤/a116/a116♣✿✴✴✇✇✇✳❡/a116❤❡/a114❝❛/a116✳♦/a114❣✴ http://www.ethercat.org/)

<!-- image -->

## 7.2 EtherCAT Register Overview

The /uniFB01rst block of 4KByte ( ✵①✵✵✵✵✿✵①✵❋❋❋ ) is reserved for the standard ESC- and EtherCAT-relevant con/uniFB01guration and status registers. The Process Data RAM (PDRAM) starts at address ✵①✶✵✵✵ and has a size of 4 KByte.

TMC8670 has an address space of 8 KByte.

Address

Length

|               | (Byte)   |                        |
|---------------|----------|------------------------|
|               |          | ESC Information        |
| ✵①✵✵✵✵        | 1        | Type                   |
| ✵①✵✵✵✶        | 1        | Revision               |
| ✵①✵✵✵✷✿✵①✵✵✵✸ | 2        | Build                  |
| ✵①✵✵✵✹        | 1        | FMMUs supported        |
| ✵①✵✵✵✺        | 1        | SyncManagers supported |
| ✵①✵✵✵✻        | 1        | RAM Size               |
| ✵①✵✵✵✼        | 1        | Port Descriptor        |
| ✵①✵✵✵✽✿✵①✵✵✵✾ | 2        | ESC Features supported |

Description

Station Address

| ✵①✵✵✶✵✿✵①✵✵✶✶   |   2 | Con/uniFB01gured Station Address   |
|-----------------|-----|------------------------------------|
| ✵①✵✵✶✷✿✵①✵✵✶✸   |   2 | Con/uniFB01gured Station Alias     |

Write Protection

| ✵①✵✵✷✵   |   1 | Write Register Enable     |
|----------|-----|---------------------------|
| ✵①✵✵✷✶   |   1 | Write Register Protection |
| ✵①✵✵✸✵   |   1 | ESC Write Enable          |
| ✵①✵✵✸✶   |   1 | ESC Write Protection      |

Data Link Layer

| ✵①✵✶✵✵✿✵①✵✶✵✸   |   4 | ESC DL Control             |
|-----------------|-----|----------------------------|
| ✵①✵✶✵✽✿✵①✵✶✵✾   |   2 | Physical Read/Write Offset |
| ✵①✵✶✶✵✿✵①✵✶✶✶   |   2 | ESC DL Status              |

<!-- image -->

Address

✵①✵✶✹✵

✵①✵✶✹✶

✵①✵✶✹❊✿✵①✵✶✹❋

✵①✵✶✺✵

✵①✵✶✺✶

✵①✵✶✺✷✿✵①✵✶✺✸

✵①✵✷✵✵✿✵①✵✷✵✶

✵①✵✷✵✹✿✵①✵✷✵✼

✵①✵✷✶✵✿✵①✵✷✶✶

✵①✵✷✷✵✿✵①✵✷✷✸

✵①✵✸✵✵✿✵①✵✸✵✼

✵①✵✸✵✽✿✵①✵✸✵❇

✵①✵✸✵❈

✵①✵✸✵❉

✵①✵✸✵❊

✵①✵✸✶✵✿✵①✵✸✶✸

Length

|               | (Byte)   |                   |
|---------------|----------|-------------------|
|               |          | Application Layer |
| ✵①✵✶✷✵✿✵①✵✶✷✶ | 2        | AL Control        |
| ✵①✵✶✸✵✿✵①✵✶✸✶ | 2        | AL Status         |
| ✵①✵✶✸✹✿✵①✵✶✸✺ | 2        | AL Status Code    |
| ✵①✵✶✸✽        | 1        | RUN LED Override  |
| ✵①✵✶✸✾        | 1        | ERR LED Override  |

1

1

1

4

4

4

2

2

4

4

4x2

1

4x1

1

4x1

1

Description

PDI

ESC Con/uniFB01guration

PDI Control

PDI Information

SYNC/LATCH PDI Con/uniFB01guration

PDI SPI Slave Con/uniFB01guration

Extended PDI SPI Slave Con/uniFB01guration

Interrupts

AL Event Mask

ECAT Event Mask

ECAT Event Request

AL Event Request

Error Counters

Forward RX Error Counter[3:0]

RX Error Counter[3:0]

ECAT Processing Unit Error Counter

PDI Error Code

PDI Error Counter

Lost Link Counter[3:0]

<!-- image -->

Address

✵①✵✺✵✵

✵①✵✺✵✶

✵①✵✺✵✷✿✵①✵✺✵✸

✵①✵✺✵✹✿✵①✵✺✵✼

✵①✵✺✵✽✿✵①✵✺✵❋

✵①✵✺✶✵✿✵①✵✺✶✶

✵①✵✺✶✷

✵①✵✺✶✸

✵①✵✺✶✹✿✵①✵✺✶✺

✵①✵✺✶✻

✵①✵✺✶✼

✵①✵✺✶✽✿✵①✵✺✶❇

Length

|               | (Byte)   |                               |
|---------------|----------|-------------------------------|
|               |          | Watchdogs                     |
| ✵①✵✹✵✵✿✵①✵✹✵✶ | 2        | Watchdog Divider              |
| ✵①✵✹✶✵✿✵①✵✹✶✶ | 2        | Watchdog Time PDI             |
| ✵①✵✹✷✵✿✵①✵✹✷✶ | 2        | Watchdog Time Process Data    |
| ✵①✵✹✹✵✿✵①✵✹✹✶ | 2        | Watchdog Status Process Data  |
| ✵①✵✹✹✷        | 1        | Watchdog Counter Process Data |
| ✵①✵✹✹✸        | 1        | Watchdog Counter PDI          |

1

2

1

4

4/8

2

1

1

2

1

1

4

Description

SII EEPROM Interface

EEPROM PDI Access State

EEPROM Con/uniFB01guration

EEPROM Control/Status

EEPROM Data

EEPROM Address

MII Management Interface

PHY Address

MII Management Control/Status

PHY Register Address

MII Management ECAT Access State

PHY Data

MII Management PDI Access State

PHY Port Status

<!-- image -->

Address

|               | (Byte)   |                        |
|---------------|----------|------------------------|
| 0x0600:0x06FF | 16x16    | FMMU[15:0]             |
| ✰✵①✵✿✵①✸      | 4        | Logical Start Address  |
| ✰✵①✹✿✵①✺      | 2        | Length                 |
| ✰✵①✻          | 1        | Logical Start bit      |
| ✰✵①✼          | 1        | Logical Stop bit       |
| ✰✵①✽✿✵①✾      | 2        | Physical Start Address |
| ✰✵①❆          | 1        | Physical Start bit     |
| ✰✵①❇          | 1        | Type                   |
| ✰✵①❈          | 1        | Activate               |
| ✰✵①❉✿✵①❋      | 3        | Reserved               |

0x0800:0x087F

Length

16x8

Description

SyncManager[15:0]

| ✰✵①✵✿✵①✶   |   2 | Physical Start Address   |
|------------|-----|--------------------------|
| ✰✵①✷✿✵①✸   |   2 | Length                   |
| ✰✵①✹       |   1 | Control Register         |
| ✰✵①✺       |   1 | Status Register          |
| ✰✵①✻       |   1 | Activate                 |
| ✰✵①✼       |   1 | PDI Control              |

0x0900:0x09FF

Distributed Clocks (DC)

|               |    | DC Receive Times    |
|---------------|----|---------------------|
| ✵①✵✾✵✵✿✵①✵✾✵✸ |  4 | Receive Time Port 0 |
| ✵①✵✾✵✹✿✵①✵✾✵✼ |  4 | Receive Time Port 1 |
| ✵①✵✾✵✽✿✵①✵✾✵❇ |  4 | Receive Time Port 2 |
| ✵①✵✾✵❈✿✵①✵✾✵❋ |  4 | Receive Time Port 3 |

<!-- image -->

Address

✵①✵✾✽✵

✵①✵✾✽✶

✵①✵✾✽✷✿✵①✵✾✽✸

✵①✵✾✽✹

✵①✵✾✽❊

✵①✵✾✽❋

✵①✵✾✾✵✿✵①✵✾✾✼

✵①✵✾✾✽✿✵①✵✾✾❋

✵①✵✾❆✵✿✵①✵✾❆✸

✵①✵✾❆✹✿✵①✵✾❆✼

Length

|               | (Byte)   |                                     |
|---------------|----------|-------------------------------------|
|               |          | DC Time Loop Control Unit           |
| ✵①✵✾✶✵✿✵①✵✾✶✼ | 4/8      | System Time                         |
| ✵①✵✾✶✽✿✵①✵✾✶❋ | 4/8      | Receive Time ECAT Processing Unit   |
| ✵①✵✾✷✵✿✵①✵✾✷✼ | 4/8      | System Time Offset                  |
| ✵①✵✾✷✽✿✵①✵✾✷❇ | 4        | System Time Delay                   |
| ✵①✵✾✷❈✿✵①✵✾✷❋ | 4        | System Time Difference              |
| ✵①✵✾✸✵✿✵①✵✾✸✶ | 2        | Speed Counter Start                 |
| ✵①✵✾✸✷✿✵①✵✾✸✸ | 2        | Speed Counter Diff                  |
| ✵①✵✾✸✹        | 1        | System Time Difference Filter Depth |
| ✵①✵✾✸✺        | 1        | Speed Counter Filter Depth          |

1

1

1

2

1

4/8

1

4/8

4

4

Description

DC Cyclic Unit Control

Cyclic Unit Control

DC SYNC Out Unit

Pulse Length of SYNC signals

Activation

Activation Status

SYNC1 Status

SYNC0 Status

Start

Time Cyclic

Next SYNC1 Pulse

SYNC0 Pulse

SYNC0 Cycle Time

SYNC1 Cycle Time

Operation

/ Next

<!-- image -->

Address

Length

|               | (Byte)   |                                   |
|---------------|----------|-----------------------------------|
|               |          | DC LATCH In Unit                  |
| ✵①✵✾❆✽        | 1        | Latch0 Control                    |
| ✵①✵✾❆✾        | 1        | Latch1 Control                    |
| ✵①✵✾❆❊        | 1        | Latch0 Status                     |
| ✵①✵✾❆❋        | 1        | Latch1 Status                     |
| ✵①✵✾❇✵✿✵①✵✾❇✼ | 4/8      | Latch0 Time Positive Edge         |
| ✵①✵✾❇✽✿✵①✵✾❇❋ | 4/8      | Latch0 Time Negative Edge         |
| ✵①✵✾❈✵✿✵①✵✾❈✼ | 4/8      | Latch1 Time Positive Edge         |
| ✵①✵✾❈✽✿✵①✵✾❈❋ | 4/8      | Latch1 Time Negative Edge         |
|               |          | DC SyncManager Event Times        |
| ✵①✵✾❋✵✿✵①✵✾❋✸ | 4        | EtherCAT Buffer Change Event Time |
| ✵①✵✾❋✽✿✵①✵✾❋❇ | 4        | PDI Buffer Start Event Time       |
| ✵①✵✾❋❈✿✵①✵✾❋❋ | 4        | PDI Buffer Change Event Time      |
| 0x0E00:0x0EFF | 256      | ESC Speci/uniFB01c                |
| 0x0E00:0x0E07 | 8        | Product ID                        |
| 0x0E08:0x0E0F | 8        | Vendor ID                         |
| 0x0F80:0x0FFF | 128      | User RAM                          |
| ✵①✵❋✽✵✿✵①✵❋❋❋ | 20       | reserved                          |
|               |          | Process Data RAM                  |
| ✵①✶✵✵✵✿✵①✶❋❋❋ | 4KB      | TMC8670                           |

Description

Table 4: TMC8670 EtherCAT Registers

For Registers longer than one byte, the LSB has the lowest and MSB the highest address.

<!-- image -->

## 7.3 EtherCAT Register Set

## 7.3.1.1 Type ( ✵①✵✵✵✵ )

## 7.3.1 ESC Information

Bit

Description

## 7.3.1.2 Revision ( ✵①✵✵✵✶ )

Bit

Description

## 7.3.1.3 Build ( ✵①✵✵✵✷✿✵①✵✵✵✸ )

Bit

Description

| ✶✺✿✵   | Actual build of EtherCAT controller, minor version, maintenance version   | r/-   | r/-   | TMC8460: ✵①✶✵ TMC8461: ✵①✶✶ TMC8462: ✵①✶✶ TMC8670: ✵①✶✵   |
|--------|---------------------------------------------------------------------------|-------|-------|-----------------------------------------------------------|

ECAT

Table 5: Register 0x0000 (Type)

| ✼✿✵   | Type of EtherCAT controller   | r/-   | r/-   | TMC8460: ✵①❉✵ TMC8461: ✵①❉✵ TMC8462: ✵①❉✵ TMC8670: ✵①❉✵   |
|-------|-------------------------------|-------|-------|-----------------------------------------------------------|

ECAT

PDI

PDI

Table 6: Register 0x0001 (Revision)

| ✼✿✵   | Revision of EtherCAT controller   | r/-   | r/-   | TMC8460: ✵①✻✵ TMC8461: ✵①✻✶ TMC8462: ✵①✻✶ TMC8670: ✵①✼✵   |
|-------|-----------------------------------|-------|-------|-----------------------------------------------------------|

ECAT

Table 7: Register 0x0002 (Build)

PDI

Reset Value

Reset Value

Reset Value

<!-- image -->

## 7.3.1.4 FMMUs supported ( ✵①✵✵✵✹ )

Bit

Description

ECAT

PDI

Table 8: Register 0x0004 (FMMUs)

| ✼✿✵   | Number of supported FMMU channels (or en- tities) of the EtherCAT slave controlller.   | r/-   | r/-   | TMC8460: 6 TMC8461: 8 TMC8462: 8 TMC8670: 4   |
|-------|----------------------------------------------------------------------------------------|-------|-------|-----------------------------------------------|

## 7.3.1.5 SyncManagers supported ( ✵①✵✵✵✺ )

Bit

Description

## 7.3.1.6 RAM Size ( ✵①✵✵✵✻ )

Bit

Description

| ✼✿✵   | Process Data RAMsize supported by the Ether- CAT Slave Controller in KByte   | r/-   | r/-   | TMC8460: 16 TMC8461: 16 TMC8462: 16 TMC8670: 4   |
|-------|------------------------------------------------------------------------------|-------|-------|--------------------------------------------------|

ECAT

Table 9: Register 0x0005 (SMs)

| ✼✿✵   | Number of supported SyncManager channels (or entities) of the EtherCAT Slave Controller   | r/-   | r/-   | TMC8460: 6 TMC8461: 8 TMC8462: 8 TMC8670: 4   |
|-------|-------------------------------------------------------------------------------------------|-------|-------|-----------------------------------------------|

ECAT

PDI

PDI

Table 10: Register 0x0006 (RAM Size)

Reset Value

Reset Value

Reset Value

<!-- image -->

## 7.3.1.7 Port Descriptor ( ✵①✵✵✵✼ )

Bit

Description

ECAT

PDI

Table 11: Register 0x0007 (Port Descriptor)

|     | Port con/uniFB01guration: 00: Not implemented 01: Not con/uniFB01gured (SII EEPROM) 10: EBUS 11: MII RMII RGMII   |     |     |                                                 |
|-----|-------------------------------------------------------------------------------------------------------------------|-----|-----|-------------------------------------------------|
| ✶✿✵ | Port 0                                                                                                            | r/- | r/- | TMC8460: 11 TMC8461: 11 TMC8462: 11 TMC8670: 11 |
| ✸✿✷ | Port 1                                                                                                            | r/- | r/- | TMC8460: 11 TMC8461: 11 TMC8462: 11 TMC8670: 11 |
| ✼✿✹ | not supported                                                                                                     | r/- | r/- | 0                                               |

## 7.3.1.8 ESC Features supported ( ✵①✵✵✵✽✿✵①✵✵✵✾ )

Bit

Description

| ✵   | FMMU Operation: 0: Bit oriented 1: Byte oriented                                  |     | r/- r/-     |
|-----|-----------------------------------------------------------------------------------|-----|-------------|
| ✶   | Reserved                                                                          | r/- | r/-         |
| ✷   | Distributed Clocks: 0: Not available 1: Available                                 |     | r/- r/-     |
| ✸   | Distributed Clocks (width): 0: 32 bit 1: 64 bit                                   |     | r/- r/- r/- |
| ✹   | Low Jitter EBUS: 0: Not available, standard jitter 1: Available, jitter minimized | r/- | 0           |
| ✺   | Enhanced Link Detection EBUS: 0: Not available 1: Available                       | r/- | 0           |
| ✻   | Enhanced Link Detection MII 0: Not available 1: Available                         |     | r/- r/-     |

<!-- image -->

ECAT

PDI

Reset Value

Reset Value

Bit

Description

ECAT

PDI

Table 12: Register 0x0008:0x0009 (ESC Features)

| ✼     | Separate Handling of FCS Errors: 0: Not supported 1: Supported, frames with wrong FCS and addi- tional nibble will be counted separately in For- warded RX Error Counter   | r/-   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✽     | Enhanced DCSYNC Activation 0: Not available 1: Available NOTE: This feature refers to registers ✵①✾✽✶✳✭✼✿✸✮ , ✵①✵✾✽✹                                                       | r/-   | r/-   |
| ✾     | EtherCAT LRW command support: 0: Supported 1: Not Supported                                                                                                                | r/-   | r/-   |
| ✶✵    | EtherCAT read/write command support 0: Supported 1: Not Supported                                                                                                          | r/-   | r/-   |
| ✶✶    | Fixed FMMU/SyncManager con/uniFB01guration 0: Variable con/uniFB01guration 1: Fixed con/uniFB01guration (refer to documentation of supporting ESCs)                        | r/-   | r/-   |
| ✶✺✿✶✷ | Reserved                                                                                                                                                                   | r/-   | r/-   |

Reset Value

<!-- image -->

## 7.3.2 Station Address

## 7.3.2.1 Con/uniFB01gured Station Address ( ✵①✵✵✶✵✿✵①✵✵✶✶ )

Bit

Description

| ✶✺✿✵   | Address used for node addressing (FPxx com- mands)   | r/w   | r/-   |
|--------|------------------------------------------------------|-------|-------|

ECAT

PDI

Table 13: Register 0x0010:0x0011 (Station Addr)

## 7.3.2.2 Con/uniFB01gured Station Alias ( ✵①✵✵✶✷✿✵①✵✵✶✸ )

Bit

Description

| ✶✺✿✵   | Alias Address used for node addressing (FPxx commands) The use of this alias is activated by Register DL Control Bit 24 ( ✵①✵✶✵✵✳✷✹ / ✵①✵✶✵✸✳✵ ) NOTE: EEPROM value is only taken over at /uniFB01rst EEPROM load after power-on reset.   | r/-   | r/w   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 14: Register 0x0012:0x0013 (Station Alias)

Reset Value

Reset Value

<!-- image -->

## 7.3.3 Write Protection

## 7.3.3.1 Write Register Enable ( ✵①✵✵✷✵ )

Bit

Description

| ✵   | If write register protection is enabled, this register has to be written in the same Ether- net frame (value does not care) before other writes to this station are allowed. Write pro- tection is still active after this frame (if Write Register Protection register is not changed).   | r/w   | r/-   |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✶ | Reserved, wirte 0                                                                                                                                                                                                                                                                          | r/-   | r/-   |

ECAT

PDI

Table 15: Register 0x0020 (Write Register Enable)

## 7.3.3.2 Write Register Protection ( ✵①✵✵✷✶ )

Bit

Description

| ✵   | Write register protection: 0: Protection disabled 1: Protection enabled Registers ✵①✵✵✵✵✲✵①✵✶✸✼ , ✵①✵✶✸❆✲✵①✵❋✵❋ are write protected, except for ✵①✵✵✸✵   | r/w   | r/-   |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✶ | Reserved, write 0                                                                                                                                        | r/-   | r/-   |

ECAT

PDI

Table 16: Register 0x0021 (Write Register Prot.)

## 7.3.3.3 ESC Write Enable ( ✵①✵✵✸✵ )

Bit

Description

ECAT

PDI

Table 17: Register 0x0030 (ESC Write Enable)

| ✵   | If ESC write protection is enabled, this register has to be written in the same Ethernet frame (value does not care) before other writes to this station are allowed. ESC write protection is still active after this frame (if ESC Write Pro- tection register is not changed).   | r/w   | r/-   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✶ | Reserved, write 0                                                                                                                                                                                                                                                                  | r/-   | r/-   |

Reset Value

Reset Value

Reset Value

<!-- image -->

## 7.3.3.4 ESC Write Protection ( ✵①✵✵✸✶ )

Bit

Description

ECAT

PDI

Table 18: Register 0x0031 (ESC Write Prot.)

| ✶✺✿✵   | Write protect: 0: Protection disabled 1: Protection enabled All areas are write protected, except ✵①✵✵✸✵ .   | r/w   | r/-   |
|--------|--------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✶    | Reserved, write 0                                                                                            | r/-   | r/-   |

Reset Value

<!-- image -->

## 7.3.4 Data Link Layer

## 7.3.4.1 ESC DL Control ( ✵①✵✶✵✵✿✵①✵✶✵✸ )

Bit

Description

| ✵     | Forwarding rule: 0: EtherCAT frames are processed, Non-EtherCAT frames are forwarded without processing 1: EtherCAT frames are processed, Non- EtherCAT frames are destroyed The source MAC address is changed for every frame (SOURCE_MAC[1] is set to 1 - locally ad- ministered address) regardless of the forward- ing rule.                                                                                                                                                                               | r/-   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✶     | Temporary use of settings in Register ✵①✶✵✶ : 0: permanent use 1: use for about 1 second, then revert to previ- ous settings                                                                                                                                                                                                                                                                                                                                                                                   | r/-   | r/-   |
| ✼✿✷   | Reserved, write 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | r/-   | r/-   |
| ✾✿✽   | Loop Port 0: 00: Auto 01: Auto Close 10: Open 11: Closed NoteLoopopenmeanssending/receivingover this port is enabled, loop closed means send- ing/receiving is disabled and frames are for- warded to the next open port internally. Auto: loop closed at link down, opened at link up Auto Close: loop closed at link down, opened with writing 01 again after link up (or receiving avalidEthernetframeattheclosedport)Open: loop open regardless of link state Closed: loop closed regardless of link state | r/w*  | r/-   |
| ✶✶✿✶✵ | Loop Port 1: 00: Auto 01: Auto Close 10: Open 11: Closed                                                                                                                                                                                                                                                                                                                                                                                                                                                       | r/w*  | r/-   |
| ✶✸✿✶✷ | Loop Port 2: 00: Auto 01: Auto Close 10: Open 11: Closed                                                                                                                                                                                                                                                                                                                                                                                                                                                       | r/w*  | r/-   |
| ✶✺✿✶✹ | Loop Port 3: 00: Auto 01: Auto Close 10: Open 11: Closed                                                                                                                                                                                                                                                                                                                                                                                                                                                       | r/w*  | r/-   |

<!-- image -->

ECAT

PDI

Reset Value

Bit

Description

ECAT

PDI

Table 19: Register 0x0100:0x0103 (DL Control)

| ✶✽✿✶✻   | RX FIFO Size (ESC delays start of forwarding until FIFO is at least half full). RX FIFO Size/RX delay reduction** : Value (for MII): 0: -40 ns 1: -40 ns 2: -40 ns 3: -40 ns 4: no change 5: no change 6: no change 7: default default NOTE: EEPROM value is only taken over at /uniFB01rst EEPROM load after power-on or reset   | r/w   | r/-   |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✶✾      | EBUS Low Jitter: 0: Normal jitter / 1: Reduced jitter                                                                                                                                                                                                                                                                             | r/w   | r/-   |
| ✷✶✿✷✵   | Reserved, write 0                                                                                                                                                                                                                                                                                                                 | r/w   | r/-   |
| ✷✷      | EBUS remote link down signaling time: 0: Default ( ≈ 660 ms) 1: Reduced ( ≈ 80 µ s)                                                                                                                                                                                                                                               | r/w   | r/-   |
| ✷✸      | Reserved, write 0                                                                                                                                                                                                                                                                                                                 | r/w   | r/-   |
| ✷✹      | Station alias: 0: Ignore Station Alias 1: Alias can be used for all con/uniFB01gured address command types (FPRD, FPWR, . . . )                                                                                                                                                                                                   | r/w   | r/-   |
| ✸✶✿✷✺   | Reserved, write 0                                                                                                                                                                                                                                                                                                                 | r/-   | r/-   |

* Loop con/uniFB01guration changes are delayed until end of currently received or transmitted frame at the port. ** The possibility of RX FIFO Size reduction depends on the clock source accuracy of the ESC and of every connected EtherCAT/Ethernet devices (master, slave, etc.). RX FIFO Size of 7 is su/uniFB03cient for 100ppm accuracy, FIFO Size 0 is possible with 25ppm accuracy (frame size of 1518/1522 Byte).

## 7.3.4.2 Physical Read/Write Offset ( ✵①✵✶✵✽✿✵①✵✶✵✾ )

Bit

Description

| ✶✺✿✵   | Offset of R/W Commands (FPRW, APRW) between Read address and Write address. RD_ADR = ADR and WR_ADR = ADR + R/W- Offset 0   | r/w   | r/-   |
|--------|-----------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 20: Register 0x0108:0x0109 (R/W Offset)

Reset Value

Reset Value

<!-- image -->

## 7.3.4.3 ESC DL Status ( ✵①✵✶✶✵✿✵①✵✶✶✶ )

Bit

Description

| ✵   | PDI operational/EEPROM loaded correctly: 0: EEPROMnotloaded, PDI not operational (no access to Process Data RAM) 1: EEPROM loaded correctly, PDI operational (access to Process Data RAM)   | r*/-   | r/-   |    |
|-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-------|----|
| ✶   | PDI Watchdog Status: 0: Watchdog expired 1: Watchdog reloaded                                                                                                                               | r*/-   | r/-   |    |
| ✷   | Enhanced Link detection: 0: Deactivated for all ports 1: Activated for at least one port NOTE: EEPROM value is only taken over at /uniFB01rst EEPROM load after power-on or reset           | r*/-   | r/-   |    |
| ✸   | Reserved                                                                                                                                                                                    | r*/-   | r/-   |    |
| ✹   | Physical link on Port 0: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| ✺   | Physical link on Port 1: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| ✻   | Physical link on Port 2: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| ✼   | Physical link on Port 3: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| ✽   | Loop Port 0: 0: Open 1: Closed                                                                                                                                                              | r*/-   | r/-   |    |
| ✾   | Communication on Port 0: 0: No stable communication 1: Communication established                                                                                                            | r*/-   | r/-   |    |
|     | Loop Port 1: 0: Open 1: Closed                                                                                                                                                              | r*/-   | r/-   | ✶✵ |
|     | Communication on Port 1: 0: No stable communication 1: Communication established                                                                                                            | r*/-   | r/-   | ✶✶ |
| ✶✷  | Loop Port 2: Open 1: Closed                                                                                                                                                                 | r*/-   | r/-   | 0: |
| ✶✸  | Communication on Port 2: No stable communication 1: Communication established                                                                                                               | r*/-   | r/-   | 0: |

<!-- image -->

ECAT

PDI

Reset Value

Bit

Description

Register

ECAT

PDI

Table 21: Register 0x0110:0x0111 (DL Status)

| ✶✹   | Loop Port 3: 0: Open 1: Closed                                                   | r*/-   | r/-   |
|------|----------------------------------------------------------------------------------|--------|-------|
| ✶✺   | Communication on Port 3: 0: No stable communication 1: Communication established | r*/-   | r/-   |

* Reading DL Status register from ECAT clears ECAT Event Request ✵①✵✷✶✵✳✷ .

| ✵①✵✶✶✶   |                 |                 |                 |                 |
|----------|-----------------|-----------------|-----------------|-----------------|
| ✵①✺✺     | No link, closed | No link, closed | No link, closed | No link, closed |
| ✵①✺✻     | No link, closed | No link, closed | No link, closed | Link, open      |
| ✵①✺✾     | No link, closed | No link, closed | Link, open      | No link, closed |
| ✵①✺❆     | No link, closed | No link, closed | Link, open      | Link, open      |
| ✵①✻✺     | No link, closed | Link, open      | No link, closed | No link, closed |
| ✵①✻✻     | No link, closed | Link, open      | No link, closed | Link, open      |
| ✵①✻✾     | No link, closed | Link, open      | Link, open      | No link, closed |
| ✵①✻❆     | No link, closed | Link, open      | Link, open      | Link, open      |
| ✵①✾✺     | Link, open      | No link, closed | No link, closed | No link, closed |
| ✵①✾✻     | Link, open      | No link, closed | No link, closed | Link, open      |
| ✵①✾✾     | Link, open      | No link, closed | Link, open      | No link, closed |
| ✵①✾❆     | Link, open      | No link, closed | Link, open      | Link, open      |
| ✵①❆✺     | Link, open      | Link, open      | No link, closed | No link, closed |
| ✵①❆✻     | Link, open      | Link, open      | No link, closed | Link, open      |
| ✵①❆✾     | Link, open      | Link, open      | Link, open      | No link, closed |
| ✵①❆❆     | Link, open      | Link, open      | Link, open      | Link, open      |
| ✵①❉✺     | Link, closed    | No link, closed | No link, closed | No link, closed |
| ✵①❉✻     | Link, closed    | No link, closed | No link, closed | Link, open      |
| ✵①❉✾     | Link, closed    | No link, closed | Link, open      | No link, closed |
| ✵①❉❆     | Link, closed    | No link, closed | Link, open      | Link, open      |

Port 3

Port2

Port1

Reset Value

Port 0

Table 22: Decoding port state in ESC DL Status register 0x0111 (typical modes only)

<!-- image -->

## 7.3.5 Application Layer

## 7.3.5.1 AL Control ( ✵①✵✶✷✵✿✵①✵✶✷✶ )

Bit

Description

| ✸✿✵   | Initiate State Transition of the Device State Ma- chine: 1: Request Init State 3: Request Bootstrap State 2: Request Pre-Operational State 4: Request Safe-Operational State 8: Request Operational State   | r/(w)   | r/ (wack)*   |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------------|
| ✹     | Error Ind Ack: 0: No Ack of Error Ind in AL status register 1: Ack of Error Ind in AL status register                                                                                                       | r/(w)   | r/ (wack)*   |
| ✹     | Device Identi/uniFB01cation: 0: No request 1: Device Identi/uniFB01cation request                                                                                                                           | r/(w)   | r/ (wack)*   |
| ✶✺✿✻  | Reserved, write 0                                                                                                                                                                                           | r/(w)   | r/ (wack)*   |

ECAT

PDI

Table 23: Register 0x0120:0x0121 (AL Cntrl)

| Note   | ✵①✵✶✹✵✳✽ The PDI has to read/write* the AL Control register after ECAT has written it. Otherwise ECAT cannot write again to the AL Control register. After Reset, AL Control register can be written by ECAT. (Regarding mailbox functionality, both registers ✵①✵✶✷✵ and ✵①✵✶✷✶ are equivalent, e.g. reading ✵①✵✶✷✶ is su/uniFB03cient to make this register writeable again.) If Device Emulation is on, the AL Control register can always be written, its content is copied to the AL Status register. * PDI register function acknowledge by Write command is disabled: Reading AL Control from PDI clears AL Event Request ✵①✵✷✷✵✳✵ . Writing to this register from PDI is not possible. PDI register function acknowledge by Write commandisenabled: Writing AL Con- trol from PDI clears AL Event Request ✵①✵✷✷✵✳✵ . Writing to this register from PDI is possible; write value is ignored (write 0).   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

<!-- image -->

Reset Value

## 7.3.5.2 AL Status ( ✵①✵✶✸✵✿✵①✵✶✸✶ )

Bit

## Note

* Reading AL Status from ECAT clears ECAT Event Request ✵①✵✷✶✵✳✸ .

Description

ECAT

PDI

Table 24: Register 0x0130:0x0131 (AL Status)

| ✸✿✵   | Actual State of the Device State Machine: 1: Init State 3: Request Bootstrap State 2: Pre-Operational State 4: Safe-Operational State 8: Operational State      | r*/-   | r/(w)   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|---------|
| ✹     | Error Ind: 0: Device is in State as requested or Flag cleared by command 1: Device has not entered requested State or changed State as result of a local action | r*/-   | r/(w)   |
| ✺     | Device Identi/uniFB01cation: 0: Device Identi/uniFB01cation not valid 1: Device Identi/uniFB01cation loaded                                                     | r*/-   | r/(w)   |
| ✶✺✿✻  | Reserved, write 0                                                                                                                                               | r*/-   | r/(w)   |

AL Status register is only writable from PDI if Device Emulation is off ( ✵①✵✶✹✵✳✽ =0), otherwise AL Status register will re/uniFB02ect AL Control register values.

## 7.3.5.3 AL Status Code ( ✵①✵✶✸✹✿✵①✵✶✸✺ )

Bit

Description

ECAT

PDI

Table 25: Register 0x0134:0x0135 (AL Status Code)

| ✶✺✿✵   | AL Status Code   | r/-   | r/w   |
|--------|------------------|-------|-------|

Reset Value

Reset Value

<!-- image -->

## 7.3.5.4 RUN LED Override ( ✵①✵✶✸✽ )

Bit

Note

Description

ECAT

PDI

Table 26: Register 0x0138 (RUN LED Override)

| ✸✿✵   | LED code: (FSM State) ✵①✵ : Off (1-Init) ✵①✶✲✵①❈ : Flash 1x - 12x (4-SafeOp 1x) ✵①❉ : Blinking (2-PreOp) ✵①❊ : Flickering (3-Bootrap) ✵①❋ : On   | r/w   | r/w   |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✹     | Enable Override: 0: Override disabled 1: Override enabled                                                                                        | r/w   | r/w   |
| ✼✿✺   | Reserved, write 0                                                                                                                                | r/w   | r/w   |

ChangestoALStatusregister ( ✵①✵✶✸✵ ) with valid values will disable RUN LED Override ( ✵①✵✶✸✽✳✹ =0). The value read in this register always re/uniFB02ects current LED output.

## 7.3.5.5 ERR LED Override ( ✵①✵✶✸✾ )

Bit

Note

Description

ECAT

PDI

Table 27: Register 0x0139 (ERR LED Override)

| ✸✿✵   | LED code: ✵①✵ : Off ✵①✶✲✵①❈ : Flash 1x - 12x ✵①❉ : Blinking ✵①❊ : Flickering ✵①❋ : On   | r/w   | r/w   |
|-------|-----------------------------------------------------------------------------------------|-------|-------|
| ✹     | Enable Override: 0: Override disabled 1: Override enabled                               | r/w   | r/w   |
| ✼✿✺   | Reserved, write 0                                                                       | r/w   | r/w   |

Newerror conditions will disable ERR LED Override ( ✵①✵✶✸✾✳✹ =0). The value read in this register always re/uniFB02ects current LED output.

<!-- image -->

Reset Value

Reset Value

## 7.3.6 PDI

## 7.3.6.1 PDI Control ( ✵①✵✶✹✵ )

Bit

Description

| ✼✿✵   | Process data interface: ✵①✵✵ : Interface deactivated (no PDI) . . . ✵①✵✺ : SPI Slave . . . ✵①✽✵ : On-chip bus Others: Reserved   | r/-   | r/-   | TMC8460, TMC8461, TMC8462, TMC8670: ✵①✵✵ later EEPROM ADR ✵①✵✵✵✵ only SPI Slave ( ✵①✵✺ ) is supported in the hard- ware   |
|-------|----------------------------------------------------------------------------------------------------------------------------------|-------|-------|---------------------------------------------------------------------------------------------------------------------------|

ECAT

PDI

Table 28: Register 0x0140 (PDI Control)

## 7.3.6.2 ESC Con/uniFB01guration ( ✵①✵✶✹✶ )

Bit

Description

ECAT

PDI

Table 29: Register 0x0141 (ESC Con/uniFB01g)

| ✵   | Device emulation (control of AL status): 0: AL status register has to be set by PDI 1: AL status register will be set to value written to AL control register   | r/w   | r/-   |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✶   | Enhanced Link detection all ports: 0: disabled (if bits [7:4]=0) 1: enabled at all ports (overrides bits [7:4])                                                 | r/-   | r/-   |
| ✷   | Distributed Clocks SYNC Out Unit: 0: disabled (power saving) / 1: enabled                                                                                       | r/-   | r/-   |
| ✸   | Distributed Clocks Latch In Unit: 0: disabled (power saving) / 1: enabled                                                                                       | r/-   | r/-   |
| ✹   | Enhanced Link port 0: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |
| ✺   | Enhanced Link port 1: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |
| ✻   | Enhanced Link port 2: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |
| ✼   | Enhanced Link port 3: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |

Reset Value

Reset Value

<!-- image -->

## 7.3.6.3 PDI Information ( ✵①✵✶✹❊✿✵①✵✶✹❋ )

Bit

Description

| ✵   | PDI register function acknowledge by write: 0: Disabled 1: Enabled                                | r/w   | r/-   |   Depends on con/uniFB01guration |
|-----|---------------------------------------------------------------------------------------------------|-------|-------|----------------------------------|
| ✶   | PDI con/uniFB01gured: 0: PDI not con/uniFB01gured 1: PDI con/uniFB01gured (EEPROM loaded)         | r/w   | r/-   |                                0 |
| ✷   | PDI active: 0: PDI not active 1: PDI active                                                       | r/w   | r/-   |                                0 |
| ✸   | PDI con/uniFB01guration invalid: 0: PDI con/uniFB01guration ok 1: PDI con/uniFB01guration invalid | r/w   | r/-   |                                0 |
| ✼✿✹ | Reserved                                                                                          | r/w   | r/-   |                                0 |

ECAT

PDI

Table 30: Register 0x014E (PDI Information))

Reset Value

<!-- image -->

## 7.3.6.4 PDI SPI Slave Con/uniFB01guration ( ✵①✵✶✺✵ )

Bit

Description

The PDI con/uniFB01guration register ✵①✵✶✺✵ and the extended PDI con/uniFB01guration registers ✵①✵✶✺✷✿✵①✵✶✺✸ depend on the selected PDI. The Sync/Latch[1:0] PDI con/uniFB01guration register ✵①✵✶✺✶ is independent of the selected PDI. The TMC8460, TMC8461, TMC8462, and TMC8670 devices support SPI Slave PDI only.

| ✶✿✵   | SPI mode: 00: SPI mode 0 01: SPI mode 1 10: SPI mode 2 11: SPI mode 3 NOTE: SPI mode 3 is recommended for Slave Sample Code NOTE: SPI status /uniFB02ag is not available in SPI modes 0 and 2 with normal data out sample.   | r/-   | r/-   |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✸✿✷   | SPI_IRQ output driver/polarity: 00: Push-Pull active low 01: Open Drain (active low) 10: Push-Pull active high 11: Open Source (active high)                                                                                 | r/-   | r/-   |
| ✹     | SPI_CSNL polarity: 0: Active low 1: Active high                                                                                                                                                                              | r/-   | r/-   |
| ✺     | Data Out sample mode: 0: Normalsample(SPI_MISO andSPI_MOSI are sampled at the same SPI_CLK edge) 1: Late sample (SPI_MISO and SPI_MOSI are sampled at different SPI_CLK edges)                                               | r/-   | r/-   |
| ✼✿✻   | Reserved, set EEPROM value 0                                                                                                                                                                                                 | r/-   | r/-   |

ECAT

PDI

Table 31: Register 0x0150 (PDI SPI CFG)

## 7.3.6.5 SYNC/LATCH Con/uniFB01guration ( ✵①✵✶✺✶ )

Bit

Description

| ✶✿✵   | SYNC0 output driver/polarity: 00: Push-Pull active low 01: Open Drain (active low) 10: Push-Pull active high 11: Open Source (active high)   | r/-   | r/-   | TMC8461: 10 TMC8462: 10                            |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|----------------------------------------------------|
| ✷     | SYNC0/LATCH0 con/uniFB01guration: 0: LATCH0 Input 1: SYNC0 Output                                                                            | r/-   | r/-   | TMC8461: 1 TMC8462: 1                              |
| ✸     | SYNC0 mapped to AL Event Request register ✵①✵✷✷✵✳✷ : 0: Disabled 1: Enabled                                                                  | r/-   | r/-   | TMC8461, TMC8462: de- pends on con/uniFB01guration |

<!-- image -->

ECAT

PDI

Reset Value

Reset Value

Bit

Description

ECAT

PDI

Table 32: Register 0x0151 (SYNC/LATCH CFG)

| ✺✿✹   | SYNC1 output driver/polarity: 00: Push-Pull active low 01: Open Drain (active low) 10: Push-Pull active high 11: Open Source (active high)   | r/-   | r/-   | TMC8461: 10 TMC8462: 10                            |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|----------------------------------------------------|
| ✻     | SYNC1/LATCH1 con/uniFB01guration*: 0: LATCH1 input 1: SYNC1 output                                                                           | r/-   | r/-   | TMC8461: 1 TMC8462: 1                              |
| ✼     | SYNC1 mapped to AL Event Request register ✵①✵✷✷✵✳✸ : 0: Disabled 1: Enabled                                                                  | r/-   | r/-   | TMC8461, TMC8462: de- pends on con/uniFB01guration |

## 7.3.6.6 PDI SPI Slave Extended Con/uniFB01guration ( ✵①✵✶✺✷✿✵①✵✶✺✸ )

Bit

Description

ECAT

PDI

Table 33: Register 0x0152:0x0153 (PDI SPI extCFG)

| ✶✺✿✵   | Reserved, set EEPROM value 0   | r/-   | r/-   | TMC8461: 0 TMC8462: 0   |
|--------|--------------------------------|-------|-------|-------------------------|

Reset Value

Reset Value

<!-- image -->

## 7.3.7 Interrupts

## 7.3.7.1 ECAT Event Mask ( ✵①✵✷✵✵✿✵①✵✷✵✶ )

Bit

Description

| ✶✺✿✵   | ECATEventmaskingoftheECATEventRequest Events for mapping into ECAT event /uniFB01eld of EtherCAT frames: 0: Corresponding ECAT Event Request register bit is not mapped 1: Corresponding ECAT Event Request register bit is mapped   | r/w   | r/-   |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 34: Register 0x0200:0x0201 (ECAT Event M.)

## 7.3.7.2 AL Event Mask ( ✵①✵✷✵✹✿✵①✵✷✵✼

Bit

)

Description

ECAT

PDI

Table 35: Register 0x0204:0x0207 (AL Event Mask)

| ✸✶✿✵   | AL Event masking of the AL Event Request reg- ister Events for mapping to PDI IRQ signal: 0: Corresponding AL Event Request register bit is not mapped 1: Corresponding AL Event Request register bit is mapped   | r/-   | r/w   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

## 7.3.7.3 ECAT Event Request ( ✵①✵✷✶✵✿✵①✵✷✶✶ )

Bit

Description

| ✵   | DC Latch event: 0: No change on DC Latch Inputs 1: AtleastonechangeonDCLatchInputs(Bitis cleared by reading DC Latch event times from ECAT for ECAT controlled Latch Units, so that Latch 0/1 Status ✵①✵✾❆❊✿✵①✵✾❆❋ indicates no event)   | r/-   | r/-   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✶   | Reserved                                                                                                                                                                                                                                 | r/-   | r/-   |
| ✷   | DL Status event: 0: No change in DL Status 1: DL Status change (Bit is cleared by reading out DL Status ✵①✵✶✶✵✿✵①✵✶✶✶ from ECAT)                                                                                                         | r/-   | r/-   |

<!-- image -->

ECAT

PDI

Reset Value

Reset Value

Reset Value

Bit

Description

ECAT

PDI

Table 36: Register 0x0210:0x0211 (ECAT Event R.)

| ✸     | AL Status event: 0: No change in AL Status 1: AL Status change (Bit is cleared by reading out AL Status ✵①✵✶✸✵✿✵①✵✶✸✶ from ECAT)                                                                                                  | r/-   | r/-   |     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| ✹ ✺   | Mirrors values of each SyncManager Status: 0: No Sync Channel 0 event 1: Sync Channel 0 event pending 0: No Sync Channel 1 event 1: Sync Channel 1 event pending . . . 0: No Sync Channel 7 event 1: Sync Channel 7 event pending | r/w   | r/-   | ✳✳✳ |
| ✶✺✿✶✷ | Reserved                                                                                                                                                                                                                          | r/-   | r/-   |     |

## 7.3.7.4 AL Event Request ( ✵①✵✷✷✵✿✵①✵✷✷✸ )

Bit

Description

ECAT

PDI

Reset Value

Reset Value

| ✵   | AL Control event: 0: No AL Control Register change 1: AL Control Register has been written 1 (Bit is cleared by reading AL Control register ✵①✵✶✷✵✿✵①✵✶✷✶ from PDI)                                                                                       | r/-   | r/-   |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✶   | DC Latch event: 0: No change on DC Latch Inputs 1: At least one change on DC Latch Inputs (Bit is cleared by reading DC Latch event times from PDI, so that Latch 0/1 Status ✵①✵✾❆❊✿✵①✵✾❆❋ indicates no event. Available if Latch Unit is PDI controlled) | r/-   | r/-   |
| ✷   | State of DC SYNC0 (if register ✵①✵✶✺✶✳✸ =1): (Bit is cleared by reading SYNC0 status ✵①✵✾✽❊ from PDI, use only in Acknowledge mode)                                                                                                                       | r/-   | r/-   |
| ✸   | State of DC SYNC1 (if register ✵①✵✶✺✶✳✼ =1): (Bit is cleared by reading of SYNC1 status ✵①✵✾✽❋ from PDI, use only in Acknowledge mode)                                                                                                                    | r/-   | r/-   |

<!-- image -->

Bit

Description

ECAT

PDI

Table 37: Register 0x0220:0x0223 (AL Event R.)

| ✹     | SyncManager activation register (SyncMan- ager register offset ✵①✻ ) changed: 0: No change in any SyncManager 1: At least one SyncManager changed (Bit is cleared by reading SyncManager Activa- tion registers ✵①✵✽✵✻ etc. from PDI)                                                  | r/-   | r/-   |        |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|--------|
| ✺     | EEPROM Emulation: 0: No command pending 1: EEPROM command pending (Bit is cleared by acknowledging the command in EEPROM command register ✵①✵✺✵✷ from PDI)                                                                                                                             | r/-   | r/-   |        |
| ✻     | Watchdog Process Data: 0: Has not expired 1: Has expired (Bit is cleared by reading Watchdog Status Pro- cess Data ✵①✵✹✹✵ from PDI)                                                                                                                                                    | r/-   | r/-   |        |
| ✼     | Reserved                                                                                                                                                                                                                                                                               | r/-   | r/-   |        |
| ✽ ✾   | SyncManager interrupts (SyncManager regis- ter offset 0x5, bit [0] or [1]): 0: No SyncManager 0 interrupt 1: SyncManager 0 interrupt pending 0: No SyncManager 1 interrupt 1: SyncManager 1 interrupt pending . . . 0: No SyncManager 15 interrupt 1: SyncManager 15 interrupt pending | r/-   | r/-   | ✳✳✳ ✷✸ |
| ✸✶✿✷✹ | Reserved                                                                                                                                                                                                                                                                               | r/-   | r/-   |        |

Reset Value

<!-- image -->

## 7.3.8 Error Counters

Errors are only counted if the corresponding port is enabled.

## 7.3.8.1 RX Error Counter[3:0] ( ✵①✵✸✵✵✿✵①✵✸✵✼ )

Bit

Description

| ✼✿✵   | Invalid frame counter of Port y (counting is stopped when ✵①❋❋ is reached).                                                 | r/ w(clr)   | r/-   |
|-------|-----------------------------------------------------------------------------------------------------------------------------|-------------|-------|
| ✶✺✿✽  | RX Error counter of Port y (counting is stopped when ✵①❋❋ is reached). This is coupled directly to RX ERR of MII interface. | r/ w(clr)   | r/-   |

ECAT

PDI

Table 38: Register 0x0300:0x0307 (RX Err Cnt)

## 7.3.8.2 Forward RX Error Counter[3:0] ( ✵①✵✸✵✽✿✵①✵✸✵❇ )

Bit

Description

ECAT

PDI

Table 39: Register 0x0308:0x030B (FW RX Err Cnt)

| ✼✿✵   | Forwarded error counter of Port y (counting is stopped when 0xFF is reached).   | r/ w(clr)   | r/-   |
|-------|---------------------------------------------------------------------------------|-------------|-------|

Error Counters ✵①✵✸✵✵ -✵①✵✸✵❇ are cleared if one of the RX Error counters ✵①✵✸✵✵ -✵①✵✸✵❇ is written. Write value is ignored (write 0).

| Note   | ✵①✵✸✵✵ ✵①✵✸✵❇ ✵①✵✸✵✵ ✵①✵✸✵❇ is written. Write value is ignored (write 0).   |
|--------|-----------------------------------------------------------------------------|

## 7.3.8.3 ECAT Processing Unit Error Counter ( ✵①✵✸✵❈ )

Bit

Note

Description

| ✼✿✵   | ECAT Processing Unit error counter (counting is stopped when ✵①❋❋ is reached). Counts errors of frames passing the Processing Unit (e.g., FCS is wrong or datagram structure is wrong).   | r/ w(clr)   | r/-   |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------|

ECAT

PDI

Table 40: Register 0x030C (Proc. Unit Err Cnt)

Error Counter ✵①✵✸✵❈ is cleared if error counter ✵①✵✸✵❈ is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

Reset Value

Reset Value

## 7.3.8.4 PDI Error Counter ( ✵①✵✸✵❉ )

Bit

Note

Description

ECAT

PDI

Table 41: Register 0x030D (PDI Err Cnt)

| ✼✿✵   | PDI Error counter (counting is stopped when ✵①❋❋ is reached). Counts if a PDI access has an interface error.   | r/ w(clr)   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------|-------------|-------|

Error Counter ✵①✵✸✵❉ and Error Code ✵①✵✸✵❊ are cleared if error counter ✵①✵✸✵❉ is written. Write value is ignored (write 0).

## 7.3.8.5 PDI Error Code ( ✵①✵✸✵❊ )

Bit

Description

ECAT

PDI

Table 42: Register 0x030E (PDI Err Code)

|     | SPI access which caused last PDI Error. Cleared if register ✵①✵✸✵❉ is written.   | r/-   | r/-   |     |
|-----|----------------------------------------------------------------------------------|-------|-------|-----|
|     | Number of SPI clock cycles of whole access (modulo 8)                            | r/-   | r/-   | ✷✿✵ |
| ✸   | Busy violation during read access                                                | r/-   | r/-   |     |
| ✹   | Read termination missing                                                         | r/-   | r/-   |     |
| ✺   | Access continued after read termination byte                                     | r/-   | r/-   |     |
| ✼✿✻ | SPI command CMD[2:1]                                                             | r/-   | r/-   |     |

Error Counter ✵①✵✸✵❉ and Error Code ✵①✵✸✵❊ are cleared if error counter ✵①✵✸✵❉ is written. Write value is ignored (write 0).

| Note   | ✵①✵✸✵❉ ✵①✵✸✵❊ ✵①✵✸✵❉ is written. Write value is ignored (write 0).   |
|--------|----------------------------------------------------------------------|

<!-- image -->

Reset Value

Reset Value

## 7.3.8.6 Lost Link Counter[3:0] ( ✵①✵✸✶✵✿✵①✵✸✶✸ )

Bit

Note

Description

| ✼✿✵   | Lost Link counter of Port y (counting is stopped when ✵①❢❢ is reached). Counts only if port loop is Auto.   | r/w(clr)   | r/-   |
|-------|-------------------------------------------------------------------------------------------------------------|------------|-------|

ECAT

PDI

Table 43: Register 0x0310:0x0313 (LL Counter)

Only lost links at open ports are counted. Lost Link Counters ✵①✵✸✶✵ -✵①✵✸✶✸ are cleared if one of the Lost Link Counters ✵①✵✸✶✵ -✵①✵✸✶✸ is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

## 7.3.9 Watchdogs

## 7.3.9.1 Watchdog Divider ( ✵①✵✹✵✵✿✵①✵✹✵✶ )

Bit

Description

| ✶✺✿✵   | Watchdog Time PDI: number or basic watch- dog increments (Default value with Watchdog divider 100 µ s means 100ms Watchdog)   | r/w   | r/-   |
|--------|-------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 44: Register 0x0400:0x0401 (WD Divider)

## 7.3.9.2 Watchdog Time PDI ( ✵①✵✹✶✵✿✵①✵✹✶✶ )

Bit

Description

| ✶✺✿✵   | Watchdog Time PDI: number or basic watch- dog increments (Default value with Watchdog divider 100 µ s means 100ms Watchdog)   | r/w   | r/-   |
|--------|-------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 45: Register 0x0410:0x0411 (WD Time PDI)

Watchdog is disabled if Watchdog time is set to ✵①✵✵✵✵ . Watchdog is restarted with every PDI access.

| Note   | ✵①✵✵✵✵ with every PDI access.   |
|--------|---------------------------------|

## 7.3.9.3 Watchdog Time Process Data ( ✵①✵✹✷✵✿✵①✵✹✷✶ )

Bit

Description

| ✶✺✿✵   | Watchdog Time Process Data: numberofbasic watchdog increments (Default value with Watchdog divider 100 µ s means 100ms Watchdog)   | r/w   | r/-   |
|--------|------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 46: Register 0x0420:0x0421 (WD Time PD)

| Note   | time is set to ✵①✵✵✵✵ . Watchdog is restarted with every write access to SyncMan- agers with Watchdog Trigger Enable Bit set.   |
|--------|---------------------------------------------------------------------------------------------------------------------------------|

<!-- image -->

Reset Value

Reset Value

Reset Value

## 7.3.9.4 Watchdog Status Process Data ( ✵①✵✹✹✵✿✵①✵✹✹✶ )

Bit

Description

| ✶✺✿✵   | Watchdog Status of Process Data (triggered by SyncManagers) 0: Watchdog Process Data expired 1: Watchdog Process Data is active or disabled   | r/-   | r/ (w ack)*   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------|
| ✵      | Reserved                                                                                                                                      | r/-   | r/ (w ack)*   |

ECAT

PDI

Table 47: Register 0x0440:0x0441 (WD Status PD)

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI clears AL Event Request ✵①✵✷✷✵✳✻ . Writing to this register from PDI is not possible.

PDI register function acknowledge by Write command is enabled: Writing this register from PDI clears AL Event Request ✵①✵✷✷✵✳✻ . Writing to this register from PDI is possible; write value is ignored (write 0).

## 7.3.9.5 Watchdog Counter Process Data ( ✵①✵✹✹✷ )

Bit

Note

Description

| ✼✿✵   | Watchdog Counter Process Data (counting is stopped when ✵①❋❋ is reached). Counts if Pro- cess Data Watchdog expires.   | r/ w(clr)   | r/-   |
|-------|------------------------------------------------------------------------------------------------------------------------|-------------|-------|

ECAT

PDI

Table 48: Register 0x0442 (WD Counter PD)

Watchdog Counters ✵①✵✹✹✷ -✵①✵✹✹✸ are cleared if one of the Watchdog Counters ✵①✵✹✹✷ -✵①✵✹✹✸ is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

Reset Value

## 7.3.9.6 Watchdog Counter PDI ( ✵①✵✹✹✸ )

Bit

Note

Description

| ✼✿✵   | Watchdog PDI counter (counting is stopped when ✵①❋❋ is reached). Counts if PDI Watchdog expires.   | r/ w(clr)   | r/-   |
|-------|----------------------------------------------------------------------------------------------------|-------------|-------|

ECAT

PDI

Table 49: Register 0x0443 (WD Counter PDI)

WatchdogCounters ✵①✵✹✹✷ &amp; ✵①✵✹✹✸ are cleared if one of the Watchdog Counters ✵①✵✹✹✷ &amp; ✵①✵✹✹✸ is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

## 7.3.10 SII EEPROM Interface

Address

Length

|               | (Byte)   |                            |
|---------------|----------|----------------------------|
|               |          | SII EEPROM Interface       |
| ✵①✵✺✵✵        | 1        | EEPROM Con/uniFB01guration |
| ✵①✵✺✵✶        | 1        | EEPROM PDI Access State    |
| ✵①✵✺✵✷✿✵①✵✺✵✸ | 2        | EEPROM Control/Status      |
| ✵①✵✺✵✹✿✵①✵✺✵✼ | 4        | EEPROM Address             |
| ✵①✵✺✵✽✿✵①✵✺✵❋ | 4/8      | EEPROM Data                |

Description

Table 50: SII EEPROM Interface Register Overview

## 7.3.10.1 EEPROM Con/uniFB01guration ( ✵①✵✺✵✵ )

Bit

Description

| ✵   | EEPROM control is offered to PDI: 0: no 1: yes (PDI has EEPROM control)     | r/w   | r/-   |
|-----|-----------------------------------------------------------------------------|-------|-------|
| ✶   | Force ECAT access: 0: Do not change Bit ✵①✵✺✵✶✳✵ 1: Reset Bit ✵①✵✺✵✶✳✵ to 0 | r/w   | r/-   |
| ✼✿✷ | Reserved, write 0                                                           | r/w   | r/-   |

ECAT

PDI

Table 51: Register 0x0500 (PROM Con/uniFB01g)

## 7.3.10.2 EEPROM PDI Access State ( ✵①✵✺✵✶ )

Bit

## Note

Description

| ✵   | Access to EEPROM: 0: PDI releases EEPROM access 1: PDI takes EEPROM access (PDI has EEPROM control)   | r/-   | r/(w)   |
|-----|-------------------------------------------------------------------------------------------------------|-------|---------|
| ✼✿✶ | Reserved, write 0                                                                                     | r/-   | r/-     |

ECAT

PDI

Reset Value

Reset Value

Table 52: Register 0x0501 (PROM PDI Access)

r/(w): write access is only possible if ✵①✵✺✵✵✳✵ =1 and ✵①✵✺✵✵✳✶ =0.

<!-- image -->

## 7.3.10.3 EEPROM Control/Status ( ✵①✵✺✵✷✿✵①✵✺✵✸ )

Bit

Description

| ✵    | ECAT write enable ∗ 2 : Write requests are disabled Write requests are enabled This bit is always 1 if PDI has EEPROM control.                                                                                                                                                                                             | r/(w)   | r/-         | 0: 1:   |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------------|---------|
| ✹✿✶  | Reserved, write 0                                                                                                                                                                                                                                                                                                          | r/-     | r/-         |         |
| ✺    | EEPROM emulation: 0: Normal operation (I2C interface used) 1: PDI emulates EEPROM (I2C not used)                                                                                                                                                                                                                           | r/-     | r/-         |         |
| ✻    | Supported number of EEPROM read bytes: 0: 4 Bytes 1: 8 Bytes                                                                                                                                                                                                                                                               | r/-     | r/-         |         |
| ✼    | Selected EEPROM Algorithm: 0: 1 address byte (1KBit ...16KBit EEPROMs) 1: 2 address bytes (32KBit ...4 MBit EEPROMs)                                                                                                                                                                                                       | r/-     | r/- r/[w]   |         |
| ✶✵✿✽ | Command register ∗ 1 : Write: Initiate command. Read: Currently executed command Commands: 000: No command/EEPROM idle (clear error bits) 001: Read 010: Write 100: Reload Others: Reserved/invalidcommands(donotis- sue) EEPROM emulation only: after execution, PDI writes command value to indicate operation is ready. | r/(w)   | r/(w) r/[w] |         |
| ✶✶   | Checksum Error at in ESC Con/uniFB01guration Area: 0: Checksum ok 1: Checksum error                                                                                                                                                                                                                                        | r/-     | r/-         |         |
| ✶✷   | EEPROM loading status: 0: EEPROM loaded, device information ok 1: EEPROM not loaded, device information not available (EEPROM loading in progress or /uniFB01n- ished with a failure)                                                                                                                                      | r/-     | r/-         |         |
| ✶✸   | Error Acknowledge/Command ∗ 2 : 0: No error 1: Missing EEPROM acknowledge or invalid command EEPROM emulation only: PDI writes 1 if a tem- porary failure has occurred.                                                                                                                                                    | r/-     | r/- r/[w]   |         |

<!-- image -->

ECAT

PDI

Reset Value

Bit

Description

ECAT

PDI

| ✶✹   | Error Write Enable ∗ 2 : 0: No error 1: Write Command without Write enable   | r/-   | r/-   |
|------|------------------------------------------------------------------------------|-------|-------|
| ✶✺   | Busy: 0: EEPROM Interface is idle 1: EEPROM Interface is busy                | r/-   | r/-   |

Table 53: Register 0x0502:0x0503 (PROM Cntrl)

| Note   | (ECAT/PDI). Write access is generally blocked if EEPROM interface is busy ( ✵①✵✺✵✷✳✶✺ =1).                                                                                                                                                                                                                                               |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Note   | r/[w]: EEPROM emulation only: write access is possible if EEPROM interface is busy ( ✵①✵✺✵✷✳✶✺ =1). PDI acknowledges pending commands by writing a 1 into the corresponding command register bits ( ✵①✵✺✵✷✳✶✵✿✽ ). Errors can beindicated by writing a 1 into the error bit ✵①✵✺✵✷✳✶✸ . Acknowledging clears AL Event Request ✵①✵✷✷✵✳✺ . |

## 7.3.10.4 EEPROM Address ( ✵①✵✺✵✹✿✵①✵✺✵✼ )

Bit

Description

| ✸✶✿✵   | EEPROM Address 0: First word (= 16 bit) 1: Second word . . . Actually used EEPROM Address bits: [9:0]: EEPROM size up to 16 kBit [17:0]: EEPROM size 32 kBit ...4 Mbit [32:0]: EEPROM Emulation   | r/(w)   | r/(w)   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|

ECAT

PDI

Table 54: Register 0x0504:0x0507 (PROM Address)

| Note   | (ECAT/PDI). Write access is generally blocked if EEPROM interface is busy ( ✵①✵✺✵✷✳✶✺ =1).   |
|--------|----------------------------------------------------------------------------------------------|

<!-- image -->

Reset Value

Reset Value

## 7.3.10.5 EEPROM Data ( ✵①✵✺✵✽✿✵①✵✺✵❋ )

Bit

Description

ECAT

PDI

| ✶✺✿✵   | EEPROM Write data (data to be written to EEP- ROM) or EEPROM Read data (data read from EEPROM,. lower bytes)   | r/(w)   | r/[w]    |
|--------|----------------------------------------------------------------------------------------------------------------|---------|----------|
| ✻✸✿✶✻  | EEPROM Read data (data read from EEPROM, higher bytes)                                                         | r/-     | r/- r[w] |

Table 55: Register 0x0508:0x050F (PROM Data)

| Note   | (ECAT/PDI). Write access is generally blocked if EEPROM interface is busy ( ✵①✵✺✵✷✳✶✺ =1).   |
|--------|----------------------------------------------------------------------------------------------|
| Note   | r/[w]: write access for EEPROM emulation if read or reload command is pending.               |

<!-- image -->

Reset Value

## 7.3.11 MII Management Interface

Address

Length

|               | (Byte)   |                                  |
|---------------|----------|----------------------------------|
|               |          | MII Management Interface         |
| ✵①✵✺✶✵✿✵①✵✺✶✶ | 2        | MII Management Control/Status    |
| ✵①✵✺✶✷        | 1        | PHY Address                      |
| ✵①✵✺✶✸        | 1        | PHY Register Address             |
| ✵①✵✺✶✹✿✵①✵✺✶✺ | 2        | PHY Data                         |
| ✵①✵✺✶✻        | 1        | MII Management ECAT Access State |
| ✵①✵✺✶✼        | 1        | MII Management PDI Access State  |
| ✵①✵✺✶✽✿✵①✵✺✶❇ | 4        | PHY Port Status                  |

Description

Table 56: MII Management Interface Register Overview

## 7.3.11.1 MII Management Control/Status ( ✵①✵✺✶✵✿✵①✵✺✶✶ )

Bit

Description

ECAT

PDI

Reset Value

| ✵     | Write enable*: 0: Write disabled 1: Write enabled This bit is always 1 if PDI has MI control.                                                                                                      | r/(w)   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------|
| ✶     | Management Interface can be controlled by PDI (registers ✵①✵✺✶✻✿✵①✵✺✶✼ ): 0: Only ECAT control 1: PDI control possible                                                                             | r/-     | r/-   |
| ✷     | MI link detection (link con/uniFB01guration, link detec- tion, registers ✵①✵✺✶✽✿✵①✵✺✶❇ ): 0: Not available 1: MI link detection active                                                             | r/-     | r/-   |
| ✼✿✸   | PHY address of port 0                                                                                                                                                                              | r/-     | r/-   |
| ✾✿✽   | Command register*: Write: Initiate command. Read: Currently executed command Commands: 00: No command/MI idle (clear error bits) 01: Read 10: Write Others: Reserved/invalidcommands(donotis- sue) | r/(w)   | r/(w) |
| ✶✷✿✶✵ | Reserved, write 0                                                                                                                                                                                  | r/-     | r/-   |

<!-- image -->

Bit

## Note

* Write enable bit 0 is self-clearing at the SOF of the next frame (or at the end of the PDI access), Command bits [9:8] are self-clearing after the command is executed (Busy ends). Writing "'00"' to the command register will also clear the error bits [14:13]. The Command bits are cleared after the command is executed.

ECAT

PDI

Table 57: Register 0x0510:0x0511 (MI Cntrl/State)

| ✶✸   | Read error: 0: No read error 1: Read error occurred (PHY or register not available) Cleared by writing to this register.                                                                   | r/(w)   | r/(w)   |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|
| ✶✹   | Command error: 0: Last Command was successful 1: Invalid command or write command with- out Write Enable Cleared with a valid command or by writing "'00"' to Command register bits [9:8]. | r/-     | r/-     |
| ✶✺   | Busy: 0: MI control state machine is idle 1: MI control state machine is active                                                                                                            | r/-     | r/-     |

r/ (w): write access depends on assignment of MI (ECAT/PDI). Write access is generally blocked if Management interface is busy ( ✵①✵✺✶✵✳✶✺ =1).

## 7.3.11.2 PHY Address ( ✵①✵✺✶✷ )

Bit

Description

Note

| ✵✿✹   | PHY Address                                                                                                                                                                                                           | r/(w)   | r/(w)   |     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|-----|
|       | Reserved, write 0                                                                                                                                                                                                     | r/-     | r/-     | ✻✿✺ |
| ✼     | Show con/uniFB01gured PHY address of port 0-3 in register ✵①✵✺✶✵✳✼✿✸ . Select port x with bits [4:0] of this register (valid values are 0-3): 0: Show address of port 0 (offset) 1: Show individual address of port x | r/(w)   | r/(w)   |     |

ECAT

PDI

Table 58: Register 0x0512 (PHY Address)

r/ (w): write access depends on assignment of MI (ECAT/PDI). Write access is generally blocked if Management interface is busy ( ✵①✵✺✶✵✳✶✺ =1).

<!-- image -->

Description

Reset Value

Reset Value

## 7.3.11.3 PHY Register Address ( ✵①✵✺✶✸ )

Bit

Note

Description

ECAT

PDI

Table 59: Register 0x0513 (PHY Register Address)

| ✹✿✵   | Address of PHYRegister that shall beread/writ- ten   | r/(w)   | r/(w)   |
|-------|------------------------------------------------------|---------|---------|
| ✼✿✺   | Reserved, write 0                                    | r/(w)   | r/(w)   |

r/ (w): write access depends on assignment of MI (ECAT/PDI). Write access is generally blocked if Management interface is busy ( ✵①✵✺✶✵✳✶✺ =1).

## 7.3.11.4 PHY Data ( ✵①✵✺✶✹✿✵①✵✺✶✺ )

Bit

Note

Description

ECAT

PDI

Table 60: Register 0x0514:0x0515 (PHY Data)

| ✶✺✿✵   | PHY Read/Write Data   | r/(w)   | r/(w)   |
|--------|-----------------------|---------|---------|

r/ (w): write access depends on assignment of MI (ECAT/PDI). Access is generally blocked if Management interface is busy ( ✵①✵✺✶✵✳✶✺ =1).

## 7.3.11.5 MII Management ECAT Access State ( ✵①✵✺✶✻ )

Bit

Note

Description

| ✸✶✿✵   | Access to MII management: 0: ECAT enables PDI takeover of MII manage- ment control 1: ECAT claims exclusive access to MII manage- ment   | r/(w)   | r/-   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------|---------|-------|
| ✸✶✿✵   | Reserved, write 0                                                                                                                        | r/-     | r/-   |

ECAT

PDI

Table 61: Register 0x0516 (MI ECAT State)

r/ (w): write access is only possible if ✵①✵✺✶✼✳✵ =0.

Reset Value

Reset Value

Reset Value

<!-- image -->

## 7.3.11.6 MII Management PDI Access State ( ✵①✵✺✶✼ )

Bit

Description

| ✵   | Access to MII management: 0: ECAT has access to MII management 1: PDI has access to MII management   | r/-   | r/(w)   |
|-----|------------------------------------------------------------------------------------------------------|-------|---------|
| ✶   | Force PDI Access State: 0: Do not change Bit ✵①✵✺✶✼✳✵ 1: Reset Bit ✵①✵✺✶✼✳✵ to 0                     | r/w   | r/-     |
| ✼✿✷ | Reserved, write 0                                                                                    | r/-   | r/-     |

ECAT

PDI

Table 62: Register 0x0517 (MI PDI State)

## 7.3.11.7 PHY Port Status ( ✵①✵✺✶✽✿✵①✵✺✶❇ )

Bit

## Note

Description

| ✵    | Physical link status (PHY status register 1.2): 0: No physical link / 1: Physical link detected                                                                     | r/-        | r/-        |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| ✶    | Link status (100 Mbit/s, Full Duplex, Autonego- tiation): 0: No link / 1: Link detected                                                                             | r/-        | r/-        |
| ✷    | Link status error: 0: No error 1: Link error, link inhibited                                                                                                        | r/-        | r/-        |
| ✸    | Read error: 0: No read error occurred 1: A read error has occurred Cleared by writing any value to at least one of the PHY Status Port registers.                   | r/ (w/clr) | r/ (w/clr) |
| ✹    | Link partner error: 0: No error detected / 1: Link partner error                                                                                                    | r/-        | r/-        |
| ✺    | PHY con/uniFB01guration updated: 0: No update 1: PHY con/uniFB01guration was updated Cleared by writing any value to at least one of the PHY Status Port registers. | r/ (w/clr) | r/ (w/clr) |
| ✸✶✿✵ | Reserved                                                                                                                                                            | r/-        | r/-        |

ECAT

PDI

Reset Value

Reset Value

Table 63: Register 0x0518+y (PHY Port Status)

r/(w): write access depends on assignment of MI (ECAT/PDI).

<!-- image -->

## 7.3.12 FMMUs

Address

|               | (Byte)   |                        |
|---------------|----------|------------------------|
| 0x0600:0x06FF | 16x16    | FMMU[15:0]             |
| ✰✵①✵✿✵①✸      | 4        | Logical Start Address  |
| ✰✵①✹✿✵①✺      | 2        | Length                 |
| ✰✵①✻          | 1        | Logical Start bit      |
| ✰✵①✼          | 1        | Logical Stop bit       |
| ✰✵①✽✿✵①✾      | 2        | Physical Start Address |
| ✰✵①❆          | 1        | Physical Start bit     |
| ✰✵①❇          | 1        | Type                   |
| ✰✵①❈          | 1        | Activate               |
| ✰✵①❉✿✵①❋      | 3        | Reserved               |

Length

Description

Table 64: FMMU Register Overview

For the following registers use y as FMMU number.

See the device features on how many FMMUs are supported in a speci/uniFB01c ESC device.

## 7.3.12.1 Logical Start Address ( ✰✵①✵✿✵①✸ )

Bit

Description

| ✸✶✿✵   | Logical start address within the EtherCAT Ad- dress Space.   | r/w   | r/-   |
|--------|--------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 65: Register 0x06y0:0x06y3 (Log Start Addr)

## 7.3.12.2 Length ( ✰✵①✹✿✵①✺ )

Bit

Description

| ✶✺✿✵   | Offset from the /uniFB01rst logical FMMU Byte to the last FMMU Byte + 1 (e.g., if two bytes are used then this parameter shall contain 2)   | r/w   | r/-   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 66: Register 0x06y4:0x06y5 (FMMU Length)

Reset Value

Reset Value

<!-- image -->

## 7.3.12.3 Logical Start bit ( ✰✵①✻ )

Bit

Description

ECAT

PDI

Table 67: Register 0x06y6 (Log. Start Bit)

| ✷✿✵   | Logical starting bit that shall be mapped (bits are counted from least signi/uniFB01cant bit (=0) to most signi/uniFB01cant bit(=7)   | r/w   | r/-   |
|-------|---------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✸   | Reserved, write 0                                                                                                                     | r/-   | r/-   |

## 7.3.12.4 Logical Stop bit ( ✰✵①✼ )

Bit

Description

ECAT

PDI

Table 68: Register 0x06y7 (Log. Stop Bit))

| ✷✿✵   | Last logical bit that shall be mapped (bits are counted from least signi/uniFB01cant bit (=0) to most signi/uniFB01cant bit(=7)   | r/w   | r/-   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✸   | Reserved, write 0                                                                                                                 | r/-   | r/-   |

## 7.3.12.5 Physical Start Address ( ✰✵①✽✿✵①✾ )

Bit

Description

| Physical Start Address (mapped to logical Start address)   | r/w   | r/-   |
|------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 69: Register 0x06y8:0x06y9 (Phy. Start Addr

## 7.3.12.6 Physical Start bit ( ✰✵①❆ )

Bit

Description

ECAT

PDI

Table 70: Register 0x06yA (Phy. Start Bit)

| ✷✿✵   | Physical starting bit as target of logical start bit mapping (bits are counted from least signi/uniFB01- cant bit (=0) to most signi/uniFB01cant bit(=7)   | r/w   | r/-   |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✸   | Reserved, write 0                                                                                                                                          | r/-   | r/-   |

Reset Value

Reset Value

Reset Value

Reset Value

<!-- image -->

## 7.3.12.7 Type ( ✰✵①❇ )

Bit

Description

## 7.3.12.8 Activate ( ✰✵①❈ )

Bit

Description

## 7.3.12.9 Reserved ( ✰✵①❉✿✵①❋ )

Bit

Description

ECAT

PDI

Table 71: Register 0x06yB (FMMU Type)

| ✵   | 0: Ignore mapping for read accesses 1: Use mapping for read accesses   | r/w   | r/-   |
|-----|------------------------------------------------------------------------|-------|-------|
| ✶   | 0: Ignore mapping for write accesses 1: Use mapping for write accesses | r/w   | r/-   |
| ✼✿✷ | Reserved, write 0                                                      | r/-   | r/-   |

ECAT

PDI

Table 72: Register 0x06yC (FMMU Activate)

| ✵   | 0: FMMU deactivated 1: FMMU activated. FMMU checks logical ad- dressed blocks to be mapped according to mapping con/uniFB01gured   | r/w   | r/-   |
|-----|------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✼✿✶ | Reserved, write 0                                                                                                                  | r/-   | r/-   |

ECAT

PDI

Table 73: Register 0x06yD:0x06yF (Reserved)

| ✷✸✿✵   | Reserved, write 0   | r/-   | r/-   |
|--------|---------------------|-------|-------|

Reset Value

Reset Value

Reset Value

<!-- image -->

## 7.3.13 SyncManagers

Address

|               | (Byte)   |                        |
|---------------|----------|------------------------|
| 0x0800:0x087F | 16x8     | SyncManager[15:0]      |
| ✰✵①✵✿✵①✶      | 2        | Physical Start Address |
| ✰✵①✷✿✵①✸      | 2        | Length                 |
| ✰✵①✹          | 1        | Control Register       |
| ✰✵①✺          | 1        | Status Register        |
| ✰✵①✻          | 1        | Activate               |
| ✰✵①✼          | 1        | PDI Control            |

Length

Description

Table 74: SyncManager Register Overview

For the following registers use y as SM number.

See the device features on how many SMs are supported in a speci/uniFB01c ESC device.

## 7.3.13.1 Physical Start Address ( ✰✵①✵✿✵①✶ )

Bit

Note

ECAT

PDI

Reset Value

Table 75: Register 0x0800+y*8:0x0801+y*8 (Phy. Start Addr)

| ✶✺✿✵   | Speci/uniFB01es /uniFB01rst byte that will be handled by Sync- Manager   | r/(w)   | r/-   |
|--------|--------------------------------------------------------------------------|---------|-------|

r/(w): Register can only be written if SyncManager is disabled (+ ✵①✻✳✵ = 0).

## 7.3.13.2 Length ( ✰✵①✷✿✵①✸ )

Bit

## Note

Description

ECAT

PDI

Reset Value

Table 76: Register 0x0802+y*8:0x0803+y*8 (SM Length)

| ✶✺✿✵   | Number of bytes assigned to SyncManager (shall be greater 1, otherwise SyncManager is not activated. If set to 1, only WatchdogTrigger is generated if con/uniFB01gured)   | r/(w)   | r/-   |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------|

r/(w): Register can only be written if SyncManager is disabled ( ✰✵①✻✳✵ = 0).

<!-- image -->

Description

## 7.3.13.3 Control Register ( ✰✵①✹ )

Bit

## Note

Description

ECAT

PDI

Table 77: Register 0x0804+y*8 (SM Control)

| ✶✿✵   | Operation Mode: 00: Buffered (3 buffer mode) 01: Reserved 10: Mailbox (Single buffer mode) 11: Reserved                           | r/(w)   | r/-   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------|---------|-------|
| ✸✿✷   | Direction: 00: Read: ECAT read access, PDI write access. 01: Write: ECAT write access, PDI read access. 10: Reserved 11: Reserved | r/(w)   | r/-   |
| ✹     | Interrupt in ECAT Event Request Register: 0: Disabled 1: Enabled                                                                  | r/(w)   | r/-   |
| ✺     | Interrupt in PDI Event Request Register: 0: Disabled 1: Enabled                                                                   | r/(w)   | r/-   |
| ✻     | Watchdog Trigger Enable: 0: Disabled 1: Enabled                                                                                   | r/w     | r/-   |
| ✼     | Reserved, write 0                                                                                                                 | r/-     | r/-   |

r/(w): Register can only be written if SyncManager is disabled ( ✰✵①✻✳✵ = 0).

## 7.3.13.4 Status Register ( ✰✵①✺ )

Bit

Description

| ✵   | Interrupt Write: 1: Interrupt after buffer was completely and successfully written 0: Interrupt cleared after /uniFB01rst byte of buffer was read NOTE: This interrupt is signaled to the reading side if enabled in the SM Control register.   | r/-   | r/-   |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✶   | Interrupt Read: 1: Interrupt after buffer was completely and successful read 0: Interrupt cleared after /uniFB01rst byte of buffer was written NOTE: This interrupt is signaled to the writing side if enabled in the SM Control register.      | r/-   | r/-   |

<!-- image -->

ECAT

PDI

Reset Value

Reset Value

Bit

Description

## 7.3.13.5 Activate ( ✰✵①✻ )

Bit

Description

| ✵   | SyncManager Enable/Disable: 0: Disable: Access to Memory without Sync- Manager control 1: Enable: SyncManager is active and controls Memory area set in con/uniFB01guration   | r/w   | r/ (w ack)*   |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------|
| ✶   | Repeat Request: A toggle of Repeat Request means that a mail- box retry is needed (primarily used in conjunc- tion with ECAT Read Mailbox)                                    | r/w   | r/-           |
| ✺✿✷ | Reserved, write 0                                                                                                                                                             | r/-   | r/ (w ack)*   |
| ✻   | Latch Event ECAT: 0: No 1: Generate Latch event if EtherCAT master is- sues a buffer exchange                                                                                 | r/w   | r/ (w ack)*   |
| ✼   | Latch Event PDI: 0: No 1: Generate Latch events if PDI issues a buffer exchange or if PDI accesses buffer start address                                                       | r/w   | r/ (w ack)*   |

ECAT

PDI

Table 78: Register 0x0805+y*8 (SM Status)

| ✷   | Reserved                                                                                                                                     | r/-   | r/-   |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✸   | Mailbox mode: mailbox status: 0: Mailbox empty 1: Mailbox full Buffered mode: reserved                                                       | r/-   | r/-   |
| ✺✿✹ | Buffered mode: buffer status (last written buffer): 00: 1. buffer 01: 2. buffer 10: 3. buffer 11: (no buffer written) Mailbox mode: reserved | r/-   | r/-   |
| ✻   | Read buffer in use (opened)                                                                                                                  | r/-   | r/-   |
| ✼   | Write buffer in use (opened)                                                                                                                 | r/-   | r/-   |

ECAT

PDI

Table 79: Register 0x0806+y*8 (SM Activate)

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI in all SMs which have changed activation clears AL Event Request ✵①✵✷✷✵✳✹ . Writing to this register from PDI is

<!-- image -->

Reset Value

Reset Value

not possible.

PDI register function acknowledge by Write command is enabled: Writing this register from PDI in all SMs which have changed activation clears AL Event Request ✵①✵✷✷✵✳✹ . Writing to this register from PDI is possible; write value is ignored (write 0).

## 7.3.13.6 PDI Control ( ✰✵①✼ )

Bit

Description

| ✵   | Deactivate SyncManager: Read: 0: Normal operation, SyncManager activated. 1: SyncManager deactivated and reset Sync- Manager locks access to Memory area. Write: 0: Activate SyncManager 1: Request SyncManager deactivation NOTE: Writing 1 is delayed until the end of a frame which is currently processed.   | r/-   | r/w   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✶   | Repeat Ack: If this is set to the same value as set by Repeat Request, the PDI acknowledges the execution of a previous set Repeat request.                                                                                                                                                                      | r/-   | r/w   |
| ✼✿✷ | Reserved, write 0                                                                                                                                                                                                                                                                                                | r/-   | r/-   |

ECAT

PDI

Table 80: Register 0x0807+y*8 (SM PDI Control)

Reset Value

<!-- image -->

## 7.3.14 Distributed Clocks Receive Times

Depending on the available width of the Distributed Clocks feature the time stamp registers are either 32 bit (4 bytes) or 64 bits (8 bytes) wide. Please check the feature summary of the respective TRINAMIC ESC device.

## 7.3.14.1 Receive Time Port 0 ( ✵①✵✾✵✵✿✵①✵✾✵✸ )

Bit

Note

ECAT

PDI

Table 81: Register 0x0900:0x0903 (Rcv Time P0)

| ✸✶✿✵   | Write: A write access to register ✵①✵✾✵✵ with BWR or FPWRlatches the local time of the beginning of the receive frame (start /uniFB01rst bit of preamble) at each port. Read: Local time of the beginning of the last receive framecontaining awrite access to this register.   | r/w (special func- tion)   | r/-   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|-------|

The time stamps cannot be read in the same frame in which this register was written.

## 7.3.14.2 Receive Time Port 1 ( ✵①✵✾✵✹✿✵①✵✾✵✼ )

Bit

Description

| ✸✶✿✵   | Local time of the beginning of a frame (start /uniFB01rst bit of preamble) received at port 1 contain- ing a BWR or FPWR to Register ✵①✵✾✵✵ .   | r/-   | r/-   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 82: Register 0x0904:0x0907 (Rcv Time P1)

Description

Reset Value

Reset Value

<!-- image -->

## 7.3.15 Distributed Clocks Time Loop Control Unit

Time Loop Control unit is usually assigned to ECAT. Write access to Time Loop Control registers by PDI (and not ECAT) depends on explicit hardware con/uniFB01guration and on the used ESC type. Check the device features for availability.

## 7.3.15.1 System Time ( ✵①✵✾✶✵✿✵①✵✾✶✼ )

Bit

Description

ECAT

PDI

Table 83: Register 0x0910:0x0917 (System Time)

| ✵✿✻✸   | ECAT read access: Local copy of System Time whenframe passed the reference clock (i.e., in- cluding System Time Delay). Time latched at beginning of the frame (Ethernet SOF delim- iter)                                                                                                                          | r                          | -                          |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|----------------------------|
| ✻✸✿✵   | PDIreadaccess: LocalcopyoftheSystemTime. Time latched when reading /uniFB01rst byte ( ✵①✵✾✶✵ )                                                                                                                                                                                                                     | -                          | r                          |
| ✸✶✿✵   | Write access: Written value will be compared with the local copy of the System time. The re- sult is an input to the time control loop. NOTE: written value will be compared at the end of the frame with the latched (SOF) local copy of the System time if at least the /uniFB01rst byte ( ✵①✵✾✶✵ ) was written. | (w) (spe- cial func- tion) | r/-                        |
| ✸✶✿✵   | Write access: Written value will be compared with Latch0 Time Positive Edge time. The re- sult is an input to the time control loop. NOTE: written value will be compared at the end of the access with Latch0 Time Positive Edge ( ✵①✵✾❇✵✿✵①✵✾❇✸ ) if at least the last byte ( ✵①✵✾✶✸ ) was written.              | -                          | (w) (spe- cial func- tion) |

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled).

| Note   | only with explicit ESC con/uniFB01guration: System Time PDI controlled).   |
|--------|----------------------------------------------------------------------------|

## 7.3.15.2 Receive Time ECAT Processing Unit ( ✵①✵✾✶✽✿✵①✵✾✶❋ )

Bit

Description

ECAT

| ✻✸✿✵   | Local time of the beginning of a frame (start /uniFB01rst bit of preamble) received at the ECAT Pro- cessing Unit containing a write access to Regis- ter ✵①✵✾✵✵ NOTE: E.g., if port 0 is open, this register re- /uniFB02ects the Receive Time Port 0 as a 64 Bit value.   | r/-   | r/-   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

<!-- image -->

PDI

Reset Value

Reset Value

Bit

Description

ECAT

PDI

Table 84: Register 0x0918:0x091F (Rcv Time EPU)

## 7.3.15.3 System Time Offset ( ✵①✵✾✷✵✿✵①✵✾✷✼ )

Bit

Note

ECAT

PDI

Table 85: Register 0x0920:0x0927 (Sys Time Offset)

| ✻✸✿✵   | Difference between local time and System Time. Offset is added to the local time.   | r/(w)   | r/(w)   |
|--------|-------------------------------------------------------------------------------------|---------|---------|

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled). Reset internal system time difference /uniFB01lter and speed counter /uniFB01lter by writing Speed Counter Start ( ✵①✵✾✸✵✿✵①✵✾✸✶ ) after changing this value.

## 7.3.15.4 System Time Delay ( ✵①✵✾✷✽✿✵①✵✾✷❇ )

Bit

Note

ECAT

PDI

Table 86: Register 0x0928:0x092B (Sys Time Delay)

| ✸✶✿✵   | Delay between Reference Clock and the ESC   | r/(w)   | r/(w)   |
|--------|---------------------------------------------|---------|---------|

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled). Reset internal system time difference /uniFB01lter and speed counter /uniFB01lter by writing Speed Counter Start ( ✵①✵✾✸✵✿✵①✵✾✸✶ ) after changing this value.

## 7.3.15.5 System Time Difference ( ✵①✵✾✷❈✿✵①✵✾✷❋ )

Bit

Description

| ✸✵✿✵   | Meandifference between local copy of System Time and received System Time values                                                         | r/-   | r/-   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✸✶     | 0: Local copy of System Time greater than or equal received System Time 1: Local copy of System Time smaller than re- ceived System Time | r/-   | r/-   |

ECAT

PDI

Table 87: Register 0x092C:0x092F (Sys Time Diff)

Description

Description

Reset Value

Reset Value

Reset Value

Reset Value

<!-- image -->

## 7.3.15.6 Speed Counter Start ( ✵①✵✾✸✵✿✵①✵✾✸✶ )

Bit

Note

ECAT

PDI

Table 88: Register 0x0930:0x931 (Speed Cnt Start)

| ✶✹✿✵   | Bandwidth for adjustment of local copy of Sys- tem Time (larger values → smaller bandwidth and smoother adjustment) A write access resets System Time Differ- ence ( ✵①✵✾✷❈✿✵①✵✾✷❋ ) and Speed Counter Diff ( ✵①✵✾✸✷✿✵①✵✾✸✸ ). Minimum value: ✵①✵✵✽✵ to ✵①✸❋❋❋   | r/(w)   | r/(w)   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|
| ✶✺     | Reserved, write 0                                                                                                                                                                                                                                                | r/(w)   | r/-     |

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled).

## 7.3.15.7 Speed Counter Diff ( ✵①✵✾✸✷✿✵①✵✾✸✸ )

Bit

Description

| ✶✺✿✵   | Representation of the deviation between local clock period and reference clock's clock period (representation: two's complement) Range: ± (Speed Counter Start - ✵①✼❋ )   | r/-   | r/-   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 89: Register 0x0932:0x0933 (Speed Cnt Diff)

Calculate the clock deviation after System Time Difference has settled at a low value as follows:

Note

Deviation = 5 ∗ ( SpeedCntStart + SpeedCntDiff +2) ∗ ( SpeedCntStart - SpeedCntDiff +2)

SpeedCntDiff

<!-- image -->

Description

Reset Value

Reset Value

## 7.3.15.8 System Time Difference Filter Depth ( ✵①✵✾✸✹ )

Bit

## Note

ECAT

PDI

Table 90: Register 0x0934 (Sys Time Diff Filter)

| ✸✿✵   | Filter depth for averaging the received System Time deviation. A write access resets System Time Difference ( ✵①✵✾✷❈✿✵①✵✾✷❋ )   | r/(w)   | r/(w)   |
|-------|---------------------------------------------------------------------------------------------------------------------------------|---------|---------|
| ✼✿✹   | Reserved, write 0                                                                                                               | r/-     | r/-     |

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled).

## 7.3.15.9 Speed Counter Filter Depth ( ✵①✵✾✸✺ )

Bit

Description

| ✸✿✵   | Filter depth for averaging the clock period devi- ation. A write access resets the internal speed counter /uniFB01lter.   | r/(w)   | r/(w)   |
|-------|---------------------------------------------------------------------------------------------------------------------------|---------|---------|
| ✼✿✹   | Reserved, write 0                                                                                                         | r/-     | r/-     |

ECAT

PDI

Table 91: Register 0x0935 (Speed Cnt Filter Depth)

Description

Reset Value

Reset Value

<!-- image -->

## 7.3.16 Distributed Clocks Cyclic Unit Control

## 7.3.16.1 Cyclic Unit Control ( ✵①✵✾✽✵ )

Bit

Description

| ✵   | SYNC out unit control: 0: ECAT controlled 1: PDI controlled                                                                                                                             | r/w   | r/-   |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| ✸✿✶ | Reserved, write 0                                                                                                                                                                       | r/-   | r/-   |
| ✹   | Latch In unit 0: 0: ECAT controlled 1: PDI controlled NOTE: Always 1 (PDI controlled) if System Time is PDI controlled. Latch interrupt is routed to ECAT/PDI depending on this setting | r/w   | r/-   |
| ✺   | Latch In unit 1: 0: ECAT controlled 1: PDI controlled NOTE: Latch interrupt is routed to ECAT/PDI depending on this setting                                                             | r/w   | r/-   |
| ✼✿✻ | Reserved, write 0                                                                                                                                                                       | r/-   | r/-   |

ECAT

PDI

Table 92: Register 0x0980 (Cyclic Unit Cntrl)

Reset Value

<!-- image -->

## 7.3.17 Distributed Clocks SYNC Out Unit

## 7.3.17.1 SYNC Out Activation ( ✵①✵✾✽✶ )

Bit

Note

Description

| ✵   | Sync Out Unit activation: 0: Deactivated 1: Activated                                                                                                                                    | r/(w)   | r/(w)   |   0 |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|-----|
| ✶   | SYNC0 generation: 0: Deactivated 1: SYNC0 pulse is generated                                                                                                                             | r/(w)   | r/(w)   |   0 |
| ✷   | SYNC1 generation: 0: Deactivated 1: SYNC1 pulse is generated                                                                                                                             | r/(w)   | r/(w)   |   0 |
| ✸   | Auto-activation by writing Start Time Cyclic Op- eration (0x0990:0x0997): 0: Disabled 1: Auto-activation enabled. ✵①✵✾✽✶✳✵ is set au- tomatically after Start Time is written.           | r/(w)   | r/(w)   |   0 |
| ✹   | Extension of Start Time Cyclic Operation ( ✵①✵✾✾✵✿✵①✵✾✾✸ ): 0: No extension 1: Extend 32 bit written Start Time to 64 bit                                                                | r/(w)   | r/(w)   |   0 |
| ✺   | Start Time plausibility check: 0: Disabled. SyncSignal generation if Start Time is reached. 1: Immediate SyncSignal generation if Start Time is outside near future (see ✵①✵✾✽✶✳✻ )      | r/(w)   | r/(w)   |   0 |
| ✻   | Near future con/uniFB01guration (approx.): 0: 1 / 2 DC width future ( 2 31 ns or 2 63 ns) 1: 2.1 sec. future ( 2 31 ns)                                                                  | r/(w)   | r/(w)   |   0 |
| ✼   | SyncSignal debug pulse (Vasily bit): 0: Deactivated 1: Immediately generate one ping only on SYNC0-1 according to ✵①✵✾✽✶✳✭✷✿✶✮ for debug- ging This bit is self-clearing, always read 0. | r/(w)   | r/(w)   |   0 |

ECAT

PDI

Reset Value

Table 93: Register 0x0981 (SYNC Out Activation)

Write to this register depends upon setting of ✵①✵✾✽✵✳✵ .

<!-- image -->

## 7.3.17.2 Pulse Length of SYNC signals ( ✵①✵✾✽✷✿✵①✵✾✽✸ )

Bit

Description

| ✵   | Pulse length of SyncSignals (in Units of 10ns) 0: Acknowledge mode: SyncSignal will be cleared by reading SYNC[1:0] Status register   | r/-   | r/-   | 0, later EEPROM ADR ✵①✵✵✵✷   |
|-----|---------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------------|

ECAT

PDI

Reset Value

Table 94: Register 0x0982:0x0983 (SYNC Pulse Length)

## 7.3.17.3 Activation Status ( ✵①✵✾✽✹ )

Bit

Description

ECAT

PDI

Table 95: Register 0x0984 (Activation Status)

| ✵   | SYNC0 activation state: 0: First SYNC0 pulse is not pending 1: First SYNC0 pulse is pending                                                                                                      | r/-   | r/-   |   0 |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| ✶   | SYNC1 activation state: 0: First SYNC1 pulse is not pending 1: First SYNC1 pulse is pending                                                                                                      | r/-   | r/-   |   0 |
| ✷   | Start Time Cyclic Operation ( ✵①✵✾✾✵✿✵①✵✾✾✼ ) plausibility check result when Sync Out Unit was activated: 0: Start Time was within near future 1: Start Time was out of near future ( ✵①✵✾✽✶✳✻ ) | r/-   | r/-   |   0 |
| ✼✿✸ | Reserved                                                                                                                                                                                         | r/-   | r/-   |   0 |

## 7.3.17.4 SYNC0 Status ( ✵①✵✾✽❊ )

Bit

Description

ECAT

PDI

Table 96: Register 0x098E (SYNC0 Status)

| ✵   | SYNC0 activation state: 0: First SYNC0 pulse is not pending 1: First SYNC0 pulse is pending   | r/-   | r/ (w ack)*   |   0 |
|-----|-----------------------------------------------------------------------------------------------|-------|---------------|-----|
| ✼✿✶ | Reserved                                                                                      | r/-   | r/ (w ack)*   |   0 |

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI clears AL Event Request ✵①✵✷✷✵✳✷ . Writing to this register from PDI is not possible.

PDI register function acknowledge by Write command is enabled: Writing this register from PDI clears AL Event Request ✵①✵✷✷✵✳✷ . Writing to this register from PDI is possible; write value is ignored (write 0).

<!-- image -->

Reset Value

Reset Value

## 7.3.17.5 SYNC1 Status ( ✵①✵✾✽❋ )

Bit

Description

ECAT

PDI

Table 97: Register 0x098F (SYNC1 Status)

| ✵   | SYNC1 activation state: 0: First SYNC1 pulse is not pending 1: First SYNC1 pulse is pending   | r/-   | r/ (w ack)*   |   0 |
|-----|-----------------------------------------------------------------------------------------------|-------|---------------|-----|
| ✼✿✶ | Reserved                                                                                      | r/-   | r/ (w ack)*   |   0 |

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI clears AL Event Request ✵①✵✷✷✵✳✸ . Writing to this register from PDI is not possible.

PDI register function acknowledge by Write command is enabled: Writing this register from PDI clears AL Event Request ✵①✵✷✷✵✳✸ . Writing to this register from PDI is possible; write value is ignored (write 0).

## 7.3.17.6 Start Time Cyclic Operation / Next SYNC0 Pulse ( ✵①✵✾✾✵✿✵①✵✾✾✼ )

Bit

Note

Description

ECAT

PDI

Reset Value

Table 98: Register 0x0990:0x0997 (Start Time Cyclic Operation)

| ✻✸✿✵   | Write: Start time (System time) of cyclic opera- tion in ns Read: System time of next SYNC0 pulse in ns   | r/(w)   | r/(w)   | 0   |
|--------|-----------------------------------------------------------------------------------------------------------|---------|---------|-----|

Write to this register depends upon setting of ✵①✵✾✽✵✳✵ . Only writable if ✵①✵✾✽✶✳✵ =0. Auto-activation ( ✵①✵✾✽✶✳✸ =1): upper 32 bits are automatically extended if only lower 32 bits are written within one frame.

## 7.3.17.7 Next SYNC1 Pulse ( ✵①✵✾✾✽✿✵①✵✾✾❋ )

Bit

Description

| ✻✸✿✵   | System time of next SYNC1 pulse in ns   | r/-   | r/-   | 0   |
|--------|-----------------------------------------|-------|-------|-----|

ECAT

PDI

Table 99: Register 0x0998:0x099F (Next SYNC1)

Reset Value

Reset Value

<!-- image -->

## 7.3.17.8 SYNC0 Cycle Time ( ✵①✵✾❆✵✿✵①✵✾❆✸ )

Bit

Note

ECAT

PDI

Reset Value

Table 100: Register 0x09A0:0x09A3 (SYNC0 Cycle Time)

| ✸✶✿✵   | WTime between two consecutive SYNC0 pulses in ns. 0: Single shot mode, generate only one SYNC0 pulse.   | r/(w)   | r/(w)   | 0   |
|--------|---------------------------------------------------------------------------------------------------------|---------|---------|-----|

Write to this register depends upon setting of ✵①✵✾✽✵✳✵ .

## 7.3.17.9 SYNC1 Cycle Time ( ✵①✵✾❆✹✿✵①✵✾❆✼ )

Bit

Note

Description

| ✸✶✿✵   | Time between SYNC1 pulses and SYNC0 pulse in ns   | r/(w)   | r/(w)   | 0   |
|--------|---------------------------------------------------|---------|---------|-----|

ECAT

PDI

Reset Value

Table 101: Register 0x09A4:0x09A7 (SYNC1 Cycle Time)

Write to this register depends upon setting of ✵①✵✾✽✵✳✵ .

Description

<!-- image -->

## 7.3.18 Distributed Clocks LATCH In Unit

## 7.3.18.1 Latch0 Control ( ✵①✵✾❆✽ )

Bit

Note

ECAT

PDI

Table 102: Register 0x09A8 (Latch0 Control)

| ✵   | Latch0 positive edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)   | r/(w)   | r/(w)   |   0 |
|-----|----------------------------------------------------------------------------------------------------|---------|---------|-----|
| ✶   | Latch0 negative edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)   | r/(w)   | r/(w)   |   0 |
| ✼✿✷ | Reserved, write 0                                                                                  | r/-     | r/-     |   0 |

Write access depends upon setting of ✵①✵✾✽✵✳✹ .

## 7.3.18.2 Latch1 Control ( ✵①✵✾❆✾ )

Bit

Note

Description

ECAT

PDI

Table 103: Register 0x09A9 (Latch1 Control)

| ✵   | Latch1 positive edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)   | r/(w)   | r/(w)   |   0 |
|-----|----------------------------------------------------------------------------------------------------|---------|---------|-----|
| ✶   | Latch01 negative edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)  | r/(w)   | r/(w)   |   0 |
| ✼✿✷ | Reserved, write 0                                                                                  | r/-     | r/-     |   0 |

Write access depends upon setting of ✵①✵✾✽✵✳✺ .

Description

Reset Value

Reset Value

<!-- image -->

## 7.3.18.3 Latch0 Status ( ✵①✵✾❆❊ )

Bit

Description

ECAT

PDI

Table 104: Register 0x09AE (Latch0 Status)

| ✵   | Event Latch0 positive edge. 0: Positive edge not detected or continuous mode 1: Positive edge detected in single event mode only. Flag cleared by reading out Latch0 Time Posi- tive Edge.   | r/-   | r/-   |   0 |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| ✶   | Event Latch0 negative edge. 0: Negative edge not detected or continuous mode 1: Negative edge detected in single event mode only. Flag cleared by reading out Latch0 Time Nega- tive Edge.   | r/-   | r/-   |   0 |
| ✷   | Latch0 pin state                                                                                                                                                                             | r/-   | r/-   |   0 |
| ✼✿✸ | Reserved                                                                                                                                                                                     | r/-   | r/-   |   0 |

## 7.3.18.4 Latch1 Status ( ✵①✵✾❆❋ )

Bit

Description

ECAT

PDI

Table 105: Register 0x09AF (Latch1 Status)

| ✵   | Event Latch1 positive edge. 0: Positive edge not detected or continuous mode 1: Positive edge detected in single event mode only. Flag cleared by reading out Latch1 Time Posi- tive Edge.   | r/-   | r/-   |   0 |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| ✶   | Event Latch1 negative edge. 0: Negative edge not detected or continuous mode 1: Negative edge detected in single event mode only. Flag cleared by reading out Latch1 Time Nega- tive Edge.   | r/-   | r/-   |   0 |
| ✷   | Latch1 pin state                                                                                                                                                                             | r/-   | r/-   |   0 |
| ✼✿✸ | Reserved                                                                                                                                                                                     | r/-   | r/-   |   0 |

Reset Value

Reset Value

<!-- image -->

## 7.3.18.5 Latch0 Time Positive Edge ( ✵①✵✾❇✵✿✵①✵✾❇✼ )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if

ECAT

PDI

Reset Value

| ✻✸✿✵   | Register captures System time at the positive edge of the Latch0 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Table 106: Register 0x09B0:0x09B7 (Latch0 Time Pos Edge)

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch0 Status ✵①✵✾❆❊✳✵ if ✵①✵✾✽✵✳✹ =0. Writing to this register from ECAT is not possible.

✵①✵✾✽✵✳✹ =1 clears Latch0 Status ✵①✵✾❆❊✳✵ . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if ✵①✵✾✽✵✳✹ =1 clears Latch0 Status ✵①✵✾❆❊✳✵ . Writing to this register from PDI is possible; write value is ignored (write 0).

## 7.3.18.6 Latch0 Time Negative Edge ( ✵①✵✾❇✽✿✵①✵✾❇❋ )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if ✵①✵✾✽✵✳✹ =1 clears Latch0 Status ✵①✵✾❆❊✳✶ . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if ✵①✵✾✽✵✳✹ =1 clears Latch0 Status ✵①✵✾❆❊✳✶ . Writing to this register from PDI is possible; write value is ignored (write 0).

ECAT

PDI

Reset Value

Table 107: Register 0x09B8:0x09BF (Latch0 Time Neg Edge)

| ✻✸✿✵   | Register captures System time at the negative edge of the Latch0 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch0 Status ✵①✵✾❆❊✳✶ if ✵①✵✾✽✵✳✹ =0. Writing to this register from ECAT is not possible.

<!-- image -->

Description

Description

## 7.3.18.7 Latch1 Time Positive Edge ( ✵①✵✾❈✵✿✵①✵✾❈✼ )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if

ECAT

PDI

Reset Value

Table 108: Register 0x09C0:0x09C7 (Latch1 Time Pos Edge)

| ✻✸✿✵   | Register captures System time at the positive edge of the Latch1 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch1 Status ✵①✵✾❆❋✳✵ if ✵①✵✾✽✵✳✺ =0. Writing to this register from ECAT is not possible.

✵①✵✾✽✵✳✺ =1 clears Latch1 Status ✵①✵✾❆❋✳✵ . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if ✵①✵✾✽✵✳✺ =1 clears Latch1 Status ✵①✵✾❆❋✳✵ . Writing to this register from PDI is possible; write value is ignored (write 0).

## 7.3.18.8 Latch1 Time Negative Edge ( ✵①✵✾❈✽✿✵①✵✾❈❋ )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if ✵①✵✾✽✵✳✺ ✵①✵✾❆❋✳✶

ECAT

PDI

Reset Value

Table 109: Register 0x09C8:0x09CF (Latch1 Time Neg Edge)

| ✻✸✿✵   | Register captures System time at the negative edge of the Latch1 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch1 Status ✵①✵✾❆❋✳✵ if ✵①✵✾✽✵✳✺ =0. Writing to this register from ECAT is not possible.

=1 clears Latch1 Status . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if ✵①✵✾✽✵✳✺ =1 clears Latch1 Status ✵①✵✾❆❋✳✶ . Writing to this register from PDI is possible; write value is ignored (write 0).

<!-- image -->

Description

Description

## 7.3.19 Distributed Clocks SyncManager Event Times

## 7.3.19.1 EtherCAT Buffer Change Event Time ( ✵①✵✾❋✵✿✵①✵✾❋✸ )

Bit

Note

Description

ECAT

PDI

Reset Value

Table 110: Register 0x09F0:0x09F3 (ECAT Buffer Change Event Time)

| ✸✶✿✵   | Register captures local time of the beginning of the frame which causes at least one SM to assert an ECAT event   | r/-   | r/-   | 0   |
|--------|-------------------------------------------------------------------------------------------------------------------|-------|-------|-----|

Register bits [31:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value.

## 7.3.19.2 PDI Buffer Start Event Time ( ✵①✵✾❋✽✿✵①✵✾❋❇ )

Bit

Note

Description

ECAT

PDI

Reset Value

Table 111: Register 0x09F8:0x09FB (PDI Buffer Start Event Time)

| ✸✶✿✵   | Register captures local time when at least one SyncManager asserts an PDI buffer start event   | r/-   | r/-   | 0   |
|--------|------------------------------------------------------------------------------------------------|-------|-------|-----|

Register bits [31:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value.

## 7.3.19.3 PDI Buffer Change Event Time ( ✵①✵✾❋❈✿✵①✵✾❋❋ )

Bit

Description

ECAT

PDI

Reset Value

Table 112: Register 0x09FC:0x09FF (PDI Buffer Change Event Time)

| ✸✶✿✵   | Register captures local time when at least one SyncManager asserts an PDI buffer start event   | r/-   | r/-   | 0   |
|--------|------------------------------------------------------------------------------------------------|-------|-------|-----|

Register bits [31:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value.

| Note   | [7:0] are read, which guarantees reading a consistent value.   |
|--------|----------------------------------------------------------------|

<!-- image -->

## 7.3.20 ESC Speci/uniFB01c

## 7.3.20.1 Product ID ( ✵①✵❊✵✵✿✵①✵❊✵✼ )

Bit

Description

| ✻✸✿✵   | Product ID   | r/-   | r/-   | TMC8460: ✵①✵✵✵✵✵✵✵✵✵✶✵✵✽✹✻✵ TMC8461: ✵①✵✵✵✵✵✵✵✵✵✶✶✵✽✹✻✶ TMC8462: ✵①✵✵✵✵✵✵✵✵✵✶✶✵✽✹✻✶ TMC8670: ✵①✵✵✵✵✵✵✵✵✵✶✵✵✽✻✼✵   |
|--------|--------------|-------|-------|-------------------------------------------------------------------------------------------------------------------|

ECAT

PDI

Reset Value

Table 113: Register 0x0E00:0x0E07 (Product ID)

## 7.3.20.2 Vendor ID ( ✵①✵❊✵✽✿✵①✵❊✵❋ )

Bit

Description

ECAT

PDI

Reset Value

| ✻✸✿✵   | Vendor ID: [23:0] Company [31:24] Department NOTE: Test Vendor IDs [31:28]= ✵①❊   | r/-   | r/-   | TMC8460: ✵①✵✵✵✵✵✵✵✶✵✵✵✵✵✷✽✻ TMC8461: ✵①✵✵✵✵✵✵✵✶✵✵✵✵✵✷✽✻ TMC8462: ✵①✵✵✵✵✵✵✵✶✵✵✵✵✵✷✽✻ TMC8670: ✵①✵✵✵✵✵✵✵✶✵✵✵✵✵✷✽✻   |
|--------|-----------------------------------------------------------------------------------|-------|-------|-------------------------------------------------------------------------------------------------------------------|

Table 114: Register 0x0E08:0x0E0F (Vendor ID)

<!-- image -->

## 7.3.21 Process Data RAM

The Process Data RAM starts at address ✵①✶✵✵✵ .

## 7.3.21.1 Process Data RAM ( ✵①✶✵✵✵✿✵①❋❋❋❋ )

The size of the Process Data RAM depends on the device.

| - - -   | Process Data RAM   | (r/w)   | (r/w)   | Random/unde/uniFB01ned   |
|---------|--------------------|---------|---------|--------------------------|

ECAT

PDI

Table 115: Process Data RAM (0x1000:0xFFFF)

(r/w): Process Data RAM is only accessible if EEPROM was correctly loaded (register ✵①✵✶✶✵✳✵ = 1).

Device

Process Data RAM Size

Upper RAM Address

Table 116: Process Data RAM Size

| TMC8460   | 16kBytes   | ✵①✹❋❋❋   |
|-----------|------------|----------|
| TMC8461   | 16kBytes   | ✵①✹❋❋❋   |
| TMC8462   | 16kBytes   | ✵①✹❋❋❋   |
| TMC8670   | 4kBytes    | ✵①✶❋❋❋   |

Bytes

## Note

Description

Reset Value

<!-- image -->

## 8 Electrical Ratings

## 8.1 Absolute Maximum Ratings

| Note   | the circuit at or near more than one maximum rating at a time for extended periods shall be avoided by application design.   |
|--------|------------------------------------------------------------------------------------------------------------------------------|

Parameter

Symbol

Table 117: Absolute Maximum Ratings for TMC8670-BI

| DC supply              | VDD_3V3   |   -0.3 |   3.63 | V   |
|------------------------|-----------|--------|--------|-----|
| DC core supply voltage | VDD_1V2   |   -0.3 |   1.32 | V   |
| IO supply voltage      | VDD_3V3   |   -0.3 |   3.63 | V   |
| PLL supply voltage     | VDD_3V3   |   -0.3 |   3.63 | V   |
| Junction temperature   | TJ        |  -55   | 125    | °C  |
| Storage temperature    | TSTG      |  -65   | 150    | °C  |

## 8.2 Operational Ratings

Parameter

| DC supply                      | VDD_3V3   |   3.15 |   3.3 |   3.45 | V   |
|--------------------------------|-----------|--------|-------|--------|-----|
| DC core supply voltage         | VDD_1V2   |   1.14 |   1.2 |   1.26 | V   |
| IO supply voltage              | VDD_3V3   |   3.15 |   3.3 |   3.45 | V   |
| PLL supply voltage             | VDD_3V3   |   3.15 |   3.3 |   3.45 | V   |
| Operating Junction temperature | TJ        | -40    |  25   | 100    | °C  |

Symbol

Table 118: Operational Ratings for TMC8670-BI

Min

Typ

Max

Unit

Max

Unit

<!-- image -->

Min

## 8.3 Digital I/Os

The following table contains information on the I/O characteristics. LVCMOS is a widely used switching standard and is de/uniFB01ned by JEDEC (JESD 8-5). TMC8670supports LVCMOS standard LVCMOS33, which is a general standard for 3V3 applications.

Parameter

## 8.4 Power Consumption

Symbol

Conditions

Min

Table 119: Digital I/Os DC Characteristics

| Input voltage low level         | VIL      | VDD_3V3 = 3.3V   | -0.3        |    | 0.8   | V    |
|---------------------------------|----------|------------------|-------------|----|-------|------|
| Input voltage high level        | VIH      | VDD_3V3 = 3.3V   | 2.0         |    | 3.45  | V    |
| Weak pull-down                  | RPD      | at VOL           | 9.9         |    | 14.5  | kOhm |
| Weak pull-up                    | RPU      | at VOH           | 9.98        |    | 14.9  | kOhm |
| Input low current               | IIL      | V IN = 0V        | -           |    | 10    | µ A  |
| Input high current              | IIL      | V IN = VDD_3V3   | -           |    | 10    | µ A  |
| Output voltage low level        | VOL      | VDD_3V3 = 3.3V   | -           |    | 0.4   | V    |
| Output voltage high level       | VOH      | VDD_3V3 = 3.3V   | VDD_3V3-0.4 |    | -     | V    |
| Output driver strength standard | IOUT_DRV |                  |             | 8  |       | mA   |
| Output capacitance              | COUT     |                  |             | 10 |       | pF   |

The values given here are typical values only. The real values depend on con/uniFB01guration, activity, and temperature.

Parameter

Parameter

Symbol

Table 120: TMC8670 power consumption

| Total power consumption   | P TOTAL   |   562 | mW   |   100 | P S + P D   |
|---------------------------|-----------|-------|------|-------|-------------|
| Static power consumption  | P S       |    28 | mW   |     5 |             |
| Dynamic power consumption | P D       |   534 | mW   |    95 |             |

Symbol

Power (mW)

Voltage (V)

Table 121: TMC8670 power consumption by rail

| DC core supply voltage      | VDD_1V2   |   470 |   1.2 |   392 |
|-----------------------------|-----------|-------|-------|-------|
| Supply voltage I/Os and PLL | VDD_3V3   |    92 |   3.3 |    28 |

Typical

Unit

%

Current (mA)

Notes

Notes

<!-- image -->

Typ

Max

Unit

## 8.5 Package Thermal Behavior

Dynamic and static power consumption cause the junction temperature of the TMC8670 to be higher than the ambient, case, or board temperature. The equations below show the relationships.

Theta JA = ( TJ -TA ) /P Total

Theta JB = ( TJ -TB ) /P Total

Theta JC = ( TJ -TC ) /P Total

Parameter

## Symbols used:

TB = Board temperature measured 1.0mm away from the package

TA = Ambient temperature

TJ = Junction temperature

TC = Case temperature

Theta JA = Junction-to-ambient thermal resistance is determined under standard conditions speci/uniFB01ed by JEDEC (JESD-51), but it has little relevance in the actual performance of the product. It must be used with caution, but it is useful for comparing the thermal performance of one package with another. The maximum power dissipation allowed is calculated as follows:

Maximum power allowed = ( TJ MAX -TA MAX ) /Theta JA

Theta JB = Junction-to-board thermal resistance measures the ability of the package to dissipate heat from the surface of the chip to the PCB. As de/uniFB01ned by the JEDEC (JESD-51) standard, the thermal resistance from the junction to the board uses an isothermal ring cold plate zone concept. The ring cold plate is simply a means to generate an isothermal boundary condition at the perimeter. The cold plate is mounted on a JEDEC standard board with a minimum distance of 5.0 mm away from the package edge.

Theta JC = Junction-to-case thermal resistance measures the ability of a device to dissipate heat from the surface of the chip to the top or bottom surface of the package. It is applicable to packages used with external heat sinks. Constant temperature is applied to the surface, which acts as a boundary condition. This only applies to situations where all or nearly all of the heat is dissipated through the surface in consideration.

<!-- image -->

|                                        |          |   27.03 | °C/W   | at still air   |
|----------------------------------------|----------|---------|--------|----------------|
| Junction-to-ambient thermal resistance | Theta JA |   22.91 | °C/W   | at 1.0 m/s     |
|                                        |          |   21.25 | °C/W   | at 2.5 m/s     |
| Junction-to-board thermal resistance   | Theta JB |   12.33 | °C/W   |                |
| Junction-to-case thermal resistance    | Theta JC |    1.54 | °C/W   |                |

Symbol

Table 122: TMC8670 package thermal behavior

Typ

Unit

Notes

## 9 Manufacturing Data

## 9.1 Package Dimensions

Figure 31: TMC8670-BI package outline drawing (dimensions are in millimeter)

<!-- image -->

Symbol

Min

Normal

Max

| A   |           |           | 1.01      |
|-----|-----------|-----------|-----------|
| A1  | 0.15      | 0.21      |           |
| A2  | 0.40      | 0.45      | 0.50      |
| aaa | 0.08      | 0.08      | 0.08      |
| b   | 0.25      | 0.30      | 0.35      |
| bbb | n.a.      | n.a.      | n.a.      |
| c   | 0.21      | 0.25      | 0.29      |
| ccc | 0.10      | 0.10      | 0.10      |
| D   | 11.00     | 11.00     | 11.00     |
| D1  | 10.00 BSC | 10.00 BSC | 10.00 BSC |

<!-- image -->

Symbol

Min

Normal

Table 123: Dimensions of TMC8670-BI (BSC = Basic Spacing between Centers)

| E   | 11.00     | 11.00     | 11.00     |
|-----|-----------|-----------|-----------|
| ddd | 0.15      | 0.15      | 0.15      |
| E1  | 10.00 BSC | 10.00 BSC | 10.00 BSC |
| e   | 0.5 TYP   | 0.5 TYP   | 0.5 TYP   |
| eee | 0.15      | 0.15      | 0.15      |

Max

<!-- image -->

## 9.2 Marking

Pin 1 location is highlighted with a dot. yyww = date code. LLLLL = lot number.

The device marking is shown below.

Figure 32: TMC8670-BI device marking

<!-- image -->

## 9.3 Board and Layout Considerations

- Package drawings, recommended land patterns, and soldering pro/uniFB01les for all TRINAMIC IC packages are available online at ❤/a116/a116♣/a115✿✴✴✇✇✇✳/a116/a114✐♥❛♠✐❝✳❝♦♠✴/a115✉♣♣♦/a114/a116✴❤❡❧♣✲❝❡♥/a116❡/a114✴✐❝✲♣❛❝❦❛❣❡/a115✴
- Examplepartlibraries for different CAD tools are available as downloads on the respective IC product page on the TRINAMIC website at ❤/a116/a116♣/a115✿✴✴✇✇✇✳/a116/a114✐♥❛♠✐❝✳❝♦♠✴♣/a114♦❞✉❝/a116/a115✴✐♥/a116❡❣/a114❛/a116❡❞✲❝✐/a114❝✉✐/a116/a115✴ .
- TRINAMIC's evaluation boards are fully available as layout examples and recommendations and are free for download. Design data, Gerber data, and additional information is available at ❤/a116/a116♣/a115✿✴✴✇✇✇✳ /a116/a114✐♥❛♠✐❝✳❝♦♠✴/a115✉♣♣♦/a114/a116✴❡✈❛❧✲❦✐/a116/a115✴ .

<!-- image -->

## 10 Abbreviations

Abbreviation

Description

| MCU      | Microcontroller unit, application controller                                            |
|----------|-----------------------------------------------------------------------------------------|
| AL       | Application Layer                                                                       |
| ASIC     | Application Speci/uniFB01c Integrated Circuit                                           |
| CoE      | CAN application protocol over EtherCAT                                                  |
| COMM     | Common Anode or common cathode                                                          |
| CPU      | Central Processing Unit                                                                 |
| DC       | Distributed Clocks                                                                      |
| DPRAM    | Dual Ported Random Access Memory                                                        |
| DS-Mod   | Delta Sigma Modulator                                                                   |
| ECAT     | EtherCAT                                                                                |
| ENI      | EtherCAT Network Information (Information on Network con/uniFB01guration in XML format) |
| EOF      | End of Frame                                                                            |
| ESC      | EtherCAT Slave Controller                                                               |
| ESI      | EtherCAT Slave Information (device description/con/uniFB01guration data in XML format)  |
| ESM      | EtherCAT State Machine                                                                  |
| ETG      | EtherCAT Technology Group                                                               |
| EtherCAT | Ethernet for Control Automation Technology Unit                                         |
| FMMU     | Fieldbus Memory Management                                                              |
| FoE      | File Access over EtherCAT                                                               |
| GPIO     | General Purpose I/O                                                                     |
| GPI      | General Purpose Input                                                                   |
| GPO      | General Purpose Output                                                                  |
| IDE      | Integrated Development Environment                                                      |
| IEC      | International Electrotechnical Commission                                               |
| IRQ      | Interrupt Request                                                                       |
| LED      | Light Emitting Diode                                                                    |
| MI       | (PHY) Management Interface                                                              |
| MII      | Media Independent Interface                                                             |
| MISO     | Master In - Slave Out                                                                   |
| MOSI     | Master Out - Slave In                                                                   |
| PDI      | Process Data Interface                                                                  |
| PDO      | Process Data Object                                                                     |

<!-- image -->

PDRAM

Process Data Random Access Memory

| POF   | Plastic/polymer Optical Fiber               |
|-------|---------------------------------------------|
| RMS   | Root Mean Square value                      |
| SII   | Slave Information Interface                 |
| SM    | SyncManager                                 |
| SOF   | Start of Frame                              |
| SPI   | Serial Peripheral Interface                 |
| TMCL  | TRINAMIC Motion Control Language            |
| TTAP  | TRINAMIC Technology Access Package          |
| TTL   | Transistor Transistor Logic                 |
| UART  | Universal Asynchronous Receiver Transmitter |
| USB   | Universal Serial Bus                        |
| XML   | Extended Mark-up Language                   |

Table 124: Abbreviations used in this Manual

<!-- image -->

## 11 Figures Index

|     |                                                                                                                                                                                       |       |          | tion . . . . . . . . . . . . . . . . . . . .                                                                           |         |
|-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------|------------------------------------------------------------------------------------------------------------------------|---------|
| 2   | TMC8670 Sensor Engine maps posi-                                                                                                                                                      | 8     | 16       | TMC8670 con/uniFB01guration for LTC2351 SPI ADCs . . . . . . . . . . . . . . . . .                                     | 29 30   |
| 3   | tion sensor signals to mechanical an- gels and electrical angels as direct in- put for the FOC engine. . . . . . . . . TMC8670 Evaluation Board . . . . . . . . . . . . . . . . . . . | 10    | 17       | LTC2351 with input /uniFB01lter elements for noise reduction . . . . . . . . . . . . nPolePairsNumberOfPolePairs . . . | 30      |
| 4   | TMCL-IDE . . . .                                                                                                                                                                      | 11 12 | 18       | . .                                                                                                                    | 31      |
| 5   | TMC8670-BI Pinout top view . . . . . MII interface . . . . . . . . .                                                                                                                  | 20    | 19       | TMC8670 Brake Chopper Connector . UartDatagramSingleRead . . . . .                                                     | 32 33   |
| 6   | . . . . . . /uniFB01lter . . . . .                                                                                                                                                    |       | 20 21    | . . . . . .                                                                                                            |         |
| 7 8 | PLL supply . . . . . . . . Status LED                                                                                                                                                 | 22 23 |          | UartDatagramSingleWrite . . . . .                                                                                      | 33 34   |
|     | circuit . . . . . . . . . . . .                                                                                                                                                       |       | 22       | FOC Basic Principle . . . .                                                                                            |         |
| 9   |                                                                                                                                                                                       | 23    | 23       | . . . . . PID Architectures and Motion Modes . .                                                                       | 35 39   |
|     | SII EEPROM circuit                                                                                                                                                                    |       | 24       | Compass Motor w/ 3 Phases . . .                                                                                        |         |
| 10  | . . . . . . . . . . . Example circuit for connecting an in- cremental encoder with level shifters from typically 5V to 3.3V . . . . . . . .                                           | 24    | 25 26 27 | Compass Motor w/ 3 Phases . . . . . Advanced PI Controller Structure . . .                                             | 39 41   |
| 11  | ABN Incremental Encoder N Pulse anywhere between 0° and 360° . . . Encoder ABN Timing . . . . . . . . .                                                                               | 25 26 | 28 29    | PI Architectures and Motion Modes . Inner FOC Control Loop . . . . . . . . FOC Transformations . . . . . . . . .       | 42 43   |
| 12  | . Example circuit for connecting Hall                                                                                                                                                 |       |          | .                                                                                                                      | 44 44   |
| 13  | sensor signals with level shifters from typically 5V to 3.3V . . . . . . . . . .                                                                                                      |       | 30 31    | . Motion Modes . . . . . . . . . . . . . TMC8670-BI package outline drawing . . .                                      |         |
| 14  | . Hall Sensor Angles . . . . . . . . . . .                                                                                                                                            | 27 27 | 32       | (dimensions are in millimeter) . . TMC8670-BI device marking . . . . .                                                 | 115 117 |

TMC8670 Delta Sigma ADC Con/uniFB01gura-

<!-- image -->

1

General device architecture

.

.

.

.

.

.

7

15

## 12 Tables Index

| 2                                         | Pin and Signal TMC8670-BA . . . . .                                                                                                                                                                                                                                                                                                                                                                            | description                                                                                                                                                                                                                                          |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                           | for . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                                                                                                                                                                                                                                              | 19                                                                                                                                                                                                                                                   |
| 3 4                                       | MII signal description                                                                                                                                                                                                                                                                                                                                                                                         | 21                                                                                                                                                                                                                                                   |
|                                           | TMC8670 EtherCAT Registers . . Register 0x0000 (Type) . . . . . .                                                                                                                                                                                                                                                                                                                                              | 52 53                                                                                                                                                                                                                                                |
| 5 6                                       | . . .                                                                                                                                                                                                                                                                                                                                                                                                          | . . .                                                                                                                                                                                                                                                |
| 7                                         | Register 0x0001 (Revision) Register 0x0002 (Build) . .                                                                                                                                                                                                                                                                                                                                                         | . . . . 53 53                                                                                                                                                                                                                                        |
|                                           | . . Register 0x0004 (FMMUs) . .                                                                                                                                                                                                                                                                                                                                                                                | . . . . .                                                                                                                                                                                                                                            |
| 8                                         |                                                                                                                                                                                                                                                                                                                                                                                                                | . . . . . 54 54                                                                                                                                                                                                                                      |
| 9                                         | Register 0x0005 (SMs) . . . Size)                                                                                                                                                                                                                                                                                                                                                                              | . . . . . . 54                                                                                                                                                                                                                                       |
| 10                                        | Register 0x0006 (RAM                                                                                                                                                                                                                                                                                                                                                                                           | . . .                                                                                                                                                                                                                                                |
| 11 12                                     | . . . Register 0x0007 (Port Descriptor)                                                                                                                                                                                                                                                                                                                                                                        | 55                                                                                                                                                                                                                                                   |
|                                           | . . Features) Addr)                                                                                                                                                                                                                                                                                                                                                                                            | 56 57                                                                                                                                                                                                                                                |
| 13                                        | Register 0x0008:0x0009 (ESC                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                      |
|                                           | Register 0x0010:0x0011 (Station                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                      |
| 14                                        | Register 0x0012:0x0013 (Station Alias) Enable)                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                      |
| 15                                        | Register 0x0020 (Write Register Register 0x0021 (Write Register Prot.) Register 0x0030 (ESC Write Enable)                                                                                                                                                                                                                                                                                                      | 57 58 58 . 58                                                                                                                                                                                                                                        |
| 16 17 18 19 20 21 22 23 24 25 26 27 28 29 | Register 0x0031 (ESC Register 0x0100:0x0103 Register 0x0108:0x0109 Register 0x0110:0x0111 Decoding port state register 0x0111 (typical Register 0x0120:0x0121 Register 0x0130:0x0131 Register 0x0134:0x0135 Code) . . . . . . . . Register 0x0138 (RUN Register 0x0139 (ERR Register 0x0140 (PDI Register 0x0141 (ESC Err Cnt) Cnt) Register 0x030D (PDI Err Cnt) . . . . Register 0x030E (PDI Err Code) . . . | Write Prot.) . . . 59 (DL Control) 61 (R/W Offset) 61 (DL Status) . 63 in ESC DL Status modes only) . (AL Cntrl) . . (AL Status) . (AL Status . . . . . . . . . . . LED Override) . LED Override) . Control) . . . . . Con/uniFB01g) . . . . . 71 72 |
| 30 31 32 34 35 36 37                      | Register 0x0300:0x0307 (RX Err Register 0x0308:0x030B (FW RX Register 0x030C (Proc. Unit Err                                                                                                                                                                                                                                                                                                                   | 63 64 . .                                                                                                                                                                                                                                            |
| 39 40 41 42                               | Register 0x014E (PDI Information)) Register 0x0150 (PDI SPI CFG) . Register 0x0151 (SYNC/LATCH Register 0x0204:0x0207                                                                                                                                                                                                                                                                                          | 70 71 (AL Event Mask)                                                                                                                                                                                                                                |
|                                           | Register 0x0410:0x0411 (WD Time PDI)                                                                                                                                                                                                                                                                                                                                                                           | 76 77                                                                                                                                                                                                                                                |
| 43 44                                     | Register 0x0310:0x0313 (LL Counter) Register 0x0400:0x0401 (WD Divider)                                                                                                                                                                                                                                                                                                                                        | 77                                                                                                                                                                                                                                                   |
|                                           |                                                                                                                                                                                                                                                                                                                                                                                                                | 77                                                                                                                                                                                                                                                   |
| 33 45                                     | Register 0x0420:0x0421 (WD Time PD)                                                                                                                                                                                                                                                                                                                                                                            | 65 65                                                                                                                                                                                                                                                |
| 46 47                                     | . . . . CFG) . Register 0x0152:0x0153 (PDI SPI extCFG) . . . . . . . . . . . . . . . . . . Register 0x0200:0x0201 (ECAT Event M.) Register 0x0210:0x0211 Register 0x0220:0x0223                                                                                                                                                                                                                                | 66 66 67 67 (ECAT Event R.) (AL Event R.) 73                                                                                                                                                                                                         |
| 38                                        | Register 0x0440:0x0441 (WD Status PD) Register 0x0442 (WD Counter PD) . .                                                                                                                                                                                                                                                                                                                                      | 68 69 70 Cnt) . 74 74 . 74 . 75 . 75                                                                                                                                                                                                                 |
|                                           |                                                                                                                                                                                                                                                                                                                                                                                                                | 78                                                                                                                                                                                                                                                   |
| 48                                        |                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                      |
|                                           |                                                                                                                                                                                                                                                                                                                                                                                                                | 78                                                                                                                                                                                                                                                   |

1

TMC8670 order codes

.

.

.

.

.

.

.

.

.

6

49

52

50

53

51

54

56

55

57

60

59

58

61

64

62

65

63

66

69

67

70

68

71

74

72

75

73

76

78

77

80

79

82

81

84

83

86

85

87

90

88

91

89

92

93

Register 0x0443 (WD Counter PDI)

.

Register 0x0501 (PROM PDI Access)

Register 0x0500 (PROM Con/uniFB01g) .

SII EEPROM Interface Register Overview 80

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

79

Register 0x0502:0x0503 (PROM Cntrl)

82

80

80

Register 0x0508:0x050F (PROM Data)

83

82

0x0504:0x0507

Register

MII

(PROM

Ad-

Management Interface

Register dress)

.

.

.

.

.

.

.

Overview . .

.

.

.

.

.

.

.

.

.

.

.

.

84

.

.

.

Register 0x0513 (PHY Register Address) 86

Register 0x0512 (PHY Address)

.

.

.

.

Register 0x0510:0x0511 (MI Cntrl/State) 85

Register 0x0514:0x0515 (PHY Data)

.

86

85

Register 0x0517 (MI PDI State)

.

.

.

.

87

Register 0x0516 (MI ECAT State)

FMMU Register Overview

.

.

.

Register 0x0518+y (PHY Port Status)

.

87

.

.

.

.

.

.

86

88

Register 0x06y0:0x06y3 (Log Start Addr) 88

.

Register 0x06y7 (Log. Stop Bit))

.

Register 0x06y6 (Log. Start Bit)

.

.

Register 0x06y4:0x06y5 (FMMU Length) 88

Register 0x06y8:0x06y9 (Phy. Start Addr 89

.

.

Register 0x06yA (Phy. Start Bit)

.

.

Register 0x06yD:0x06yF (Reserved)

Register 0x06yB (FMMU Type)

.

.

.

89

.

89

Register 0x06yC (FMMU Activate) .

Register

.

.

.

.

.

SyncManager Register Overview

.

.

.

.

.

.

0x0800+y*8:0x0801+y*8

Length)

.

.

.

.

.

.

.

.

.

.

.

.

.

.

Register 0x0802+y*8:0x0803+y*8 (SM

(Phy. Start Addr) .

.

.

.

.

.

.

.

.

.

.

.

.

Register 0x0804+y*8 (SM Control)

.

.

.

.

.

.

Register 0x0806+y*8 (SM Activate)

.

.

Register 0x0805+y*8 (SM Status)

.

.

.

Register 0x0900:0x0903 (Rcv Time P0)

Register 0x0807+y*8 (SM PDI Control)

Register 0x0910:0x0917 (System Time)

Register 0x0904:0x0907 (Rcv Time P1)

Register 0x0920:0x0927 (Sys Time Off-

Register 0x0918:0x091F (Rcv Time EPU)

89

90

90

91

90

91

92

91

93

93

95

94

96

97

95

Register 0x0928:0x092B (Sys Time De-

.

.

.

.

.

.

.

.

.

.

.

set)

.

.

.

.

.

.

.

.

.

Register 0x092C:0x092F (Sys Time Diff)

97

97

.

.

.

.

.

.

.

.

.

.

.

.

97

lay)

.

.

.

.

.

.

.

.

Register 0x0932:0x0933 (Speed Cnt Diff) 98

Register 0x0930:0x931 (Speed Cnt Start) 98

Register 0x0935 (Speed Cnt Filter Depth) 99

Register 0x0934 (Sys Time Diff Filter) .

99

Register 0x0981 (SYNC Out Activation) 101

Register 0x0980 (Cyclic Unit Cntrl)

100

.

.

<!-- image -->

94

Register 0x0982:0x0983 (SYNC Pulse

110

Register 0x09F0:0x09F3 (ECAT Buffer

|         | Length) . . . . . . . . . . . . . . . . . . Register 0x0984 (Activation Status) .                                        | 102     |         | Change Event Time) . . . . . . . . . . Register 0x09F8:0x09FB (PDI                                              | 109     |
|---------|--------------------------------------------------------------------------------------------------------------------------|---------|---------|-----------------------------------------------------------------------------------------------------------------|---------|
| 95 96   | . . . . .                                                                                                                | 102     | 111     | . Buffer Start Event Time) . . . . . . . . . . .                                                                |         |
|         | Register 0x098E (SYNC0 Status) .                                                                                         | 102     | 112     | . Register 0x09FC:0x09FF (PDI Buffer Change Event Time) . . . . . . . . . . Register 0x0E00:0x0E07 (Product ID) | 109     |
| 97 98   | Register 0x098F (SYNC1 Status) . . . Register 0x0990:0x0997 (Start Time Cyclic Operation) . . . . . . . . . . .          | 103     |         | . .                                                                                                             | 109 110 |
| 99      | . Register 0x0998:0x099F (Next SYNC1)                                                                                    | 103 103 | 113 114 | Register 0x0E08:0x0E0F (Vendor ID) . .                                                                          | 110     |
|         | Register 0x09A0:0x09A3 (SYNC0 Cycle                                                                                      |         | 115 116 | Process Data RAM (0x1000:0xFFFF) Process Data RAM Size . . . . . . .                                            | 111     |
| 100     | Time) . . . . . . . . . . . . . . . . . .                                                                                | 104     | 117     | . . Absolute Maximum Ratings                                                                                    | 111     |
| 101     | . Register 0x09A4:0x09A7 (SYNC1 Cycle Time) . . . . . . . . . . . . . . . . . . . Register 0x09A8 (Latch0 Control) . . . | 104 105 |         | for TMC8670-BI . . . . . . . . . . . . . . . Operational Ratings for TMC8670-BI . .                             | 112 112 |
| 102     | Register 0x09A9 (Latch1 Control)                                                                                         | 105     | 118     | Digital I/Os DC Characteristics . . .                                                                           | 113     |
| 103 104 | . . .                                                                                                                    | 106     | 119 120 |                                                                                                                 |         |
| 105     | Register 0x09AE (Latch0 Status) . . . Register 0x09AF (Latch1 Status) .                                                  |         | 121     | TMC8670 power consumption . . .                                                                                 | 113 113 |
|         | . .                                                                                                                      | 106     |         | . TMC8670 power consumption by rail .                                                                           | 114     |
| 106     | . . Register 0x09B0:0x09B7 (Latch0 Time Pos Edge) . . . . . . . . . . . . . . . . .                                      | 107     | 122 123 | TMC8670 package thermal behavior Dimensions of TMC8670-BI (BSC = Ba- sic Spacing between Centers) . . . . . .   |         |
| 107     | Register 0x09B8:0x09BF (Latch0 Time Neg Edge) . . . . . . . . . . . . . . . .                                            | 107     | 124     | Abbreviations used in this Manual . .                                                                           | 116 119 |
| 108     | Register 0x09C0:0x09C7 (Latch1 Time Pos Edge) . . . . . . . . . . . . . . . . .                                          | 108     | 125 126 | IC Revision . . . . . . . . . . . . . . . Document Revision . . . . . . . . . . .                               | 123 123 |
| 109     | Register 0x09C8:0x09CF (Latch1 Time Neg Edge) . . . . . . . . . . . . . . . .                                            | 108     |         |                                                                                                                 |         |

<!-- image -->

## 13 Revision History

## 13.1 IC Revision

Version

Date

Author

## 13.2 Document Revision

Version

Date

Author

| V1.0   | 2017-OCT-31   | SK, LL   | Initial version                                                |
|--------|---------------|----------|----------------------------------------------------------------|
| V1.0   | 2018-JUN-06   | LL       | pin names updated, ADC front-end part (LM339, LTC2351) updated |
| V1.0   | 2018-JUN-12   | SK       | typos /uniFB01xed                                              |
| V1.0   | 2019-MAR-20   | LL       | IC version time stamp updated                                  |
| V1.0   | 2019-AUG-21   | LL       | UART interface description for TMCL-IDE updated                |

Description

Table 125: IC Revision

| V1.00   | 2017-OCT-30   | LL/SL/ED   | First IC version engineering samples.   |
|---------|---------------|------------|-----------------------------------------|
| V1.00   | 2018-MAY-31   | LL         | First IC version.                       |

Description

Table 126: Document Revision

<!-- image -->