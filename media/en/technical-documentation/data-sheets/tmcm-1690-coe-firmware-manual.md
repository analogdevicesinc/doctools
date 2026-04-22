<!-- lastmod 2025-04-24 -->
## TMCM-1690 CoE Firmware Manual

Firmware Version V1.03 | Rev 1: 04/25

The TMCM-1690 is a single axis FOC servo controller gate driver module for 3-phase BLDC and DC motors with up to 1.5A gate drive current and +60V (+48 V nominal) supply. It offers UART (RS232), CAN, and EtherCAT ® interfaces with TMCL, CANopen, or CANopen-over-EtherCAT protocol support for communication. The TMCM-1690 supports incremental encoders, digital hall sensors, and absolute encoder as position feedback.

<!-- image -->

<!-- image -->

## Applications

- Laboratory Automation
- Robotics
- Manufacturing

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2025, Analog Devices Inc.

EtherCAT® is a registered trademark and patented technology, licensed by Beckhoff Automation GmbH, Germany.

Terms of delivery and rights to technical change reserved. Download newest version at www.analog.com.

<!-- image -->

<!-- image -->

## Features

- FOCservocontroller gate driver module for BLDC and DC motors
- Supply voltage +10V to +60V DC
- 0.5A/1.0A/1.5A gate drive current
- Onboard current-sense ampli/uniFB01ers
- Up to 120kHz PWM frequency
- Supports UART (RS232), CAN, and EtherCAT™ interface
- Reference switch inputs
- Supportsincrementalencoders(ABN), digital HALL sensors, absolute (SPI/SSI) encoders
- Compact size 27mm x 22.5mm
- Motorized Tables and Chairs
- Industrial BLDC and DC Motor Drives
- Factory Automation · Servo Drives

## Contents

| 1.1 General . . . . . . . . . . . . . . . . .                 | 1.1 General . . . . . . . . . . . . . . . . .                                                                                       | 1.1 General . . . . . . . . . . . . . . . . .   |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
|                                                               | Features of this CoE Implementation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               | 3 4                                             |
| 1.2 1.3                                                       | Abbreviations Used in this Manual . . . . . . . . . . .                                                                             | 4                                               |
|                                                               | Firmware Update . . . . . .                                                                                                         |                                                 |
| Motor Regulation                                              | .                                                                                                                                   | 5                                               |
| 2 2.1                                                         | Structure of Motor Control Regulation Modes . . . . . . . . Current Regulation . . . . . . . . . . . . . . . . . . . . . . . .      | 5                                               |
| 2.2                                                           | . . . . . . . . . . . .                                                                                                             | 5 6                                             |
|                                                               | 2.2.1 Structure of the Current Regulator Velocity Regulation . . . . . . . . . . . . . . . . . . . .                                | 7                                               |
| 2.3                                                           | . . . . . Structure of the Velocity Regulator . . . . . . . . . . . . . . . . . . .                                                 | 7                                               |
| 2.4                                                           | 2.3.1 Velocity Ramp Generator . . . . . . . . . . . . . .                                                                           | 8                                               |
| 2.5                                                           | Position Regulation . . . . . . . . . . . . . . . . . . 2.5.1                                                                       | 8                                               |
|                                                               | . . . . . Structure of the Position Regulator 2.5.2                                                                                 | 8                                               |
|                                                               | . . . . . . . . . . . . . . . . . . . Correlation of Target Position and the Position End Flag . . . . . . .                        |                                                 |
|                                                               | . . . . . .                                                                                                                         | 9                                               |
| 3 Ramps . . . . . . . . . . . . . . . . . . . . . . . . . . . | 3 Ramps . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                       | 10                                              |
| 3.1                                                           | . . . . . . .                                                                                                                       | 10 10                                           |
|                                                               | Linear Ramp . . . . . . . . . . . . . . . .                                                                                         |                                                 |
| 3.2                                                           | Sine Shaped Ramp . . . . . . . . . . . . .                                                                                          |                                                 |
| 4 Module                                                      | Speci/uniFB01c Functions . . . . . .                                                                                                | 12 12                                           |
| 4.1                                                           | Filters . . . . . . . . . . . . . . . . . . . . . . . . . . Biquad Filter (for Future Use) . . . . . . . . . . . . . . .            | 13                                              |
| 4.2                                                           | 4.1.1 Mechanical Brake . . . . . . . . . . . . . . . . . . . . . . . . . Brake Chopper . . . . .                                    | 13 14                                           |
| 4.3                                                           | . . . . . . . . . . . . . . . . . . . . . .                                                                                         | 14                                              |
| 4.3.1                                                         | PWMBraking . . . . . . . . . . . . . . . . . . .                                                                                    | 14                                              |
| 4.3.2                                                         | . . . . . Resistive/Shunt Braking . . . . . . . . .                                                                                 |                                                 |
| 4.4 IIT .                                                     | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               | 15                                              |
| 4.5                                                           | Lower Velocity PI . . . . . . . . . .                                                                                               |                                                 |
| 5 Communication                                               |                                                                                                                                     | 16 17                                           |
| 5.1 5.2 NMT                                                   | Reference Model . . . . . . . . . . . . . . . . . . . . . . . . . . State Machine . . . . . . . . . . . . . . . . . . . . . . . . . | 17 19                                           |
| 5.3                                                           | . . . . . . . . . . . . . . . .                                                                                                     | 20                                              |
|                                                               | Device Model . . . . . . . . . .                                                                                                    |                                                 |
| 5.4                                                           | . Object Dictionary . . . . . . . . . .                                                                                             | 21                                              |
| 6 Communication                                               | . . . . . . . . . . . . . . . . . . . . . . Area . . . . . . . . . . . . . . . . . . . . .                                          | 22                                              |
| 6.1 6.1.1 6.1.2                                               | Detailed Object Speci/uniFB01cations . . .                                                                                          |                                                 |
|                                                               | Object 1000 h : Device Type . . . . . . . . . . . . . Object 1001 : Error Register .                                                | 22 22                                           |
|                                                               | . . . h . . . . . . .                                                                                                               | 22                                              |
| 6.1.3                                                         | . . . . . . . Object 1008 h : Manufacturer Device Name . . . .                                                                      | 23                                              |
| 6.1.4 6.1.5                                                   | . . . Object 1009 h : Manufacturer Hardware Version . . . . . . . . . .                                                             | 23 24                                           |
| 6.1.6                                                         | Object 100A h : Manufacturer Software Version . Object 1010 : Store Parameters . . . . . . . . . . . . . . . .                      | 24                                              |
| 6.1.7                                                         | h . . . . .                                                                                                                         | 25                                              |
| 6.1.8                                                         | Object 1011 h : Restore Parameters . . Object 1018 : Identity Object . . . . .                                                      | 26                                              |
| 6.1.9                                                         | h . . . Object 1600 : Receive PDO Mapping                                                                                           | 27                                              |
| 6.1.10                                                        | . . . . . . . h Parameter . . . Objects 1A00 h : Transmit PDO Mapping Parameter . .                                                 | 28                                              |
|                                                               | Objects 1C00 h : Sync Manager Communication Type . . .                                                                              | 29                                              |
|                                                               | . .                                                                                                                                 | 30                                              |
| 6.1.11 6.1.12                                                 | Objects 1C12 h : Sync Manager 2 PDO Assignment Objects 1C13 : Sync Manager 3 PDO Assignment .                                       | 30                                              |
| 6.1.13                                                        | h .                                                                                                                                 | 32                                              |
| 7 Manufacturer                                                | Speci/uniFB01c Area                                                                                                                 |                                                 |

3

<!-- image -->

1

Preface

7.1

Detailed Object Speci/uniFB01cations

h

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

.

.

32

|                                                                                | . . . . . . . . . .                                                                                |       |
|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-------|
| 7.1.1                                                                          | Object 2000 h : Motor Settings                                                                     | 32    |
| 7.1.2                                                                          | Object 2003 h : Drive Settings . . . . . . . . . .                                                 | 33 34 |
| 7.1.3                                                                          | Object 2005 h : ADC Settings . . . . . . . .                                                       |       |
| 7.1.4                                                                          | . . . Object 200A h : Open Loop Settings . . . . . . .                                             | 35    |
| 7.1.5                                                                          | Object 200F h : Digital Hall Settings . . . . .                                                    | 35    |
| 7.1.6                                                                          | . . Object 2014 h : ABN Encoder Settings . . . . Object 2015 : ABN Encoder 2 Settings              | 37    |
| 7.1.7                                                                          | . h . . . . Object 2019 : Absolute Encoder                                                         | 39 40 |
| 7.1.8                                                                          | h Settings . . . . . . . . .                                                                       |       |
| 7.1.9                                                                          | Object 201E h : Torque Mode . . . . Mode                                                           | 42    |
| 7.1.10                                                                         | Object 2023 h : Velocity . . . . . . . . . . Mode                                                  | 42 43 |
| 7.1.11 7.1.12                                                                  | Object 2028 h : Position . . . . . . . . . . Object 202B : Gearbox . .                             |       |
|                                                                                | h . . . . . . . . . . . Object 202D : IIT . . .                                                    | 44 45 |
| 7.1.13 7.1.14                                                                  | h . . . . . . . . . . . . .                                                                        | 46    |
|                                                                                | . Object 2032 h : Windows . . . . . . . . . . . . . . .                                            |       |
| 7.1.15 7.1.16                                                                  | Object 2037 h : Ramp . . . . . . . . . . . . .                                                     | 47 47 |
|                                                                                | Object 203C h : Homing . . . . . . . .                                                             |       |
| 7.1.17 7.1.18                                                                  | . . . . . . Object 2041 h : Filter target torque . . . . . . . Object 2046 : Filter Actual Torque  | 48 49 |
|                                                                                | h . . . . .                                                                                        |       |
| 7.1.19 7.1.20                                                                  | . . Object 204B h : Filter Target Velocity . . . . . . Object 2050 : Filter Actual Velocity .      | 50    |
|                                                                                | h . . . . . Object 2055 : Filter Target Position                                                   | 50    |
| 7.1.21 7.1.22                                                                  | h . . . . . . Brake . . .                                                                          | 51    |
| 7.1.23                                                                         | Object 205A h : Mechanical . . . . . Object 205F : Brake Chopper .                                 | 52    |
| 7.1.24                                                                         | h . . . . . . . .                                                                                  | 53 54 |
| 7.1.25                                                                         | . Object 2064 h : Reference Switch . . . . . . . . Object 2069 : Monitoring . . . .                |       |
| 7.1.26                                                                         | h . . . . . . . .                                                                                  | 55    |
| 7.1.27                                                                         | Object 206B h : Lower Velocity PI . . . . . . . . Object 206C : Linear Drive Settings . . . . . .  | 55 56 |
|                                                                                | h . . . . . . . .                                                                                  | 56    |
| 7.1.28 7.1.29                                                                  | Object 206D h : Driver Status . . Object 206E : Controller                                         |       |
| 7.1.30                                                                         | . h Initialize . . . . . . . Object 207D : Switch                                                  | 57 57 |
| 7.1.31                                                                         | h Parameters . . . . . . . Object 2082 : Home Offset Display . . . . . .                           | 57    |
| 7.1.32                                                                         | h . . . . . .                                                                                      |       |
|                                                                                | Object 2702 h : Device Digital Inputs Inputs                                                       | 58    |
| 7.1.33                                                                         | Object 270E h : Device Analog . . . . . .                                                          | 58    |
| 8 Pro/uniFB01le Speci/uniFB01c Area 8.1 Detailed Object Speci/uniFB01cations . | 8 Pro/uniFB01le Speci/uniFB01c Area 8.1 Detailed Object Speci/uniFB01cations .                     | 60    |
| . .                                                                            | . . . .                                                                                            | 60    |
| 8.1.1                                                                          | . . . . . . Object 605A h : Quick Stop Option Code . . . Object 605B : Shutdown Option Code        | 60 61 |
| 8.1.2                                                                          | . h .                                                                                              | 61    |
| 8.1.3                                                                          | . . . Object 605C h : Disable Operation Option Code Object 605D : Halt Option Code . . . . . . . . |       |
| 8.1.4                                                                          | h                                                                                                  | 62    |
| 8.1.5                                                                          | Object 605E h : Fault Reaction Option Code . . . . .                                               | 62    |
| 8.1.6 8.1.7                                                                    | Object 6060 h : Modes of Operation . . .                                                           | 63 64 |
|                                                                                | Object 6061 h : Modes of Operation Display . . . . . . . . . .                                     |       |
| 8.1.8                                                                          | Object 60FD h : Digital Inputs . .                                                                 | 65 65 |
| 8.1.9                                                                          | Object 6502 h : Supported Drive Modes . . . . . . .                                                |       |
|                                                                                | . . . . .                                                                                          | 66    |
| 8.1.10                                                                         | Object 67FF h : Single Device Type                                                                 |       |
| Pro/uniFB01le Position Mode 9.1                                                | Pro/uniFB01le Position Mode 9.1                                                                    | 68    |
| Detailed Object Speci/uniFB01cations . Object 6040 : Controlword               | . . . . . . . . . . . .                                                                            |       |
| 9.1.1                                                                          | . . . . . . . . . . .                                                                              | 68 69 |
| 9.1.2                                                                          | h Object 6041 h : Statusword . . . . . .                                                           | 70    |
| 9.1.3                                                                          | . . . . . . Object 6062 h : Position Demand Value . . . .                                          | 71 72 |
| 9.1.4                                                                          | Object 6063 : Position Actual Internal Value .                                                     |       |

<!-- image -->

9.1.5

Object 6064

h

: Position Actual Value

h

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

72

| 9.1.6                                                                                                                                                 | Object 6067 : Position Window                                                                                                                                    | . . . .                                                                                                                                               | 73         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 9.1.7                                                                                                                                                 |                                                                                                                                                                  | . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                             |            |
|                                                                                                                                                       | Object 6068                                                                                                                                                      | h . . . . h : Position Window Time . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                            | 73 74      |
|                                                                                                                                                       | 9.1.8                                                                                                                                                            | Object 606C h : Velocity Actual Value . . . . . . . . . . . . . . . . . . . . . . Object . . .                                                        | .          |
|                                                                                                                                                       | 9.1.9 9.1.10                                                                                                                                                     | 607A h : Target Position . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                        | . 74       |
| 9.1.11                                                                                                                                                |                                                                                                                                                                  | . Object 607D h : Software Position Limit . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                   | . 75       |
|                                                                                                                                                       | Object 6081 h :                                                                                                                                                  | Pro/uniFB01le Velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                      | . 75       |
| 9.1.12 9.1.13                                                                                                                                         |                                                                                                                                                                  | Object 6083 h : Pro/uniFB01le Acceleration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Object 6084 : Pro/uniFB01le Deceleration         | . 76 76    |
| 9.1.14                                                                                                                                                |                                                                                                                                                                  | h . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                           | .          |
|                                                                                                                                                       | How to                                                                                                                                                           | Object 6085 h : Quick Stop Deceleration . . . . . . . . . . . . . . . . . . . Move a Motor in pp Mode . . .                                           | . 76       |
| 9.2                                                                                                                                                   | . . . . . . . . . . . . . . . . . .                                                                                                                              | . . . . . . . . . . . . . . . . . . .                                                                                                                 | . 77       |
| 10 Pro/uniFB01le Velocity Mode 10.0.1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                             | 10 Pro/uniFB01le Velocity Mode 10.0.1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | 10 Pro/uniFB01le Velocity Mode 10.0.1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                             | 78         |
|                                                                                                                                                       |                                                                                                                                                                  | Object 6040 h : Controlword .                                                                                                                         | 78 79      |
|                                                                                                                                                       | 10.0.2                                                                                                                                                           | Object 6041 h : Statusword . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                    | .          |
|                                                                                                                                                       | 10.0.3                                                                                                                                                           | . . . . . Object 6062 h : Position Demand Value . . . . . . . . . . . . . . . . . . . . . . . .                                                       | . 81       |
|                                                                                                                                                       | 10.0.4                                                                                                                                                           | . . Object 6063 h : Position Actual Internal Value . . . . . . . . . . . . . . . . . . . . . . Object 6064 : Position Actual Value . . .              | . 81       |
|                                                                                                                                                       | 10.0.5                                                                                                                                                           | . h . . . . . . . . . . . . . . . . . . . . . . .                                                                                                     | . 82 82    |
|                                                                                                                                                       | 10.0.6 10.0.7                                                                                                                                                    | . . Object 606C h : Velocity Actual Value . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                           | . 82       |
|                                                                                                                                                       |                                                                                                                                                                  | Object 607D h : Software Position Limit . . . . . . . . . . . . . . . . . . . . . .                                                                   | .          |
|                                                                                                                                                       | 10.0.8                                                                                                                                                           | Object 6083 h : Pro/uniFB01le Acceleration . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6085 : Quick Stop Deceleration .                   | . 83       |
|                                                                                                                                                       | 10.0.9 10.0.10                                                                                                                                                   | Object h . . . . Object 60FF : Target Velocity . . . . . . .                                                                                          | . 83 84    |
|                                                                                                                                                       | . . . . . . . . . . . . . . . . . . . . . h . . . . . . . . . . . . . . . . . . . . .                                                                            | . . . . . . . . . . . . . . . . . . . . . h . . . . . . . . . . . . . . . . . . . . .                                                                 |            |
| . . . . . 10.1 How to Move a Motor in pv Mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Mode                                | . . . . . 10.1 How to Move a Motor in pv Mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Mode                                           | . . . . . 10.1 How to Move a Motor in pv Mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Mode                                | 84         |
| 11 Homing 11.1 Homing                                                                                                                                 | . . . . . . . .                                                                                                                                                  | . . . . . . . . .                                                                                                                                     | 86 . 87 87 |
|                                                                                                                                                       | 11.1.1                                                                                                                                                           | Methods . . . . . . . . . . . . . . . . . . . . . . . . . . Homing Method 17: Homing on Negative Limit Switch . . . . . . . . . . . . . . .           | . 87       |
|                                                                                                                                                       | 11.1.2                                                                                                                                                           | . . Homing Method 18: Homing on Positive Limit Switch . . . . . . . . . . . . . . . . . Homing Method 19: Homing on Positive Home Switch . .          | .          |
|                                                                                                                                                       | 11.1.3 11.1.4                                                                                                                                                    | . . . . . . . . . . . . . . .                                                                                                                         | . 88 88    |
|                                                                                                                                                       | 11.1.5                                                                                                                                                           | Homing Method 21: Homing on Negative Home Switch . . . . . . . . . . . . . . . . Homing Method 35: Current Position as Home Position                  | .          |
| 11.2                                                                                                                                                  | Detailed                                                                                                                                                         | . . . . Object Speci/uniFB01cations . . . . . . . . . . . . . . . . . . . .                                                                           | . 89 90    |
| 11.2.1                                                                                                                                                | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                  | . . . .                                                                                                                                               | .          |
|                                                                                                                                                       |                                                                                                                                                                  | Object 6040 h : Controlword . . . . . . . . . . . . . . . . . . . . . . . . Object 6041 : Statusword .                                                | . 90       |
|                                                                                                                                                       | 11.2.2 11.2.3                                                                                                                                                    | h . . . . . . . . . . . . . . . . . . . . . . . . . Object                                                                                            | . 91 92    |
| 11.2.4                                                                                                                                                |                                                                                                                                                                  | . . . . . . . . 606C h : Velocity Actual Value . . . . . . . . . . . . . . . . . . . . . . . . . . . . Home Offset . . . . . . . .                    | . 93       |
|                                                                                                                                                       | Object 607C h : Object 6098 :                                                                                                                                    | . . . . . . . . . . . . . . . . . . . . . . . . . Homing Method . . . . . . . . . . . . . . . . . . . . . . . . . . . .                               | . . 94     |
| 11.2.5 11.2.6                                                                                                                                         |                                                                                                                                                                  | h . . . Object 6099 : Homing Speeds . . . . . . . . . . . . . . . . .                                                                                 | . 94       |
|                                                                                                                                                       |                                                                                                                                                                  | h . . . . . . . . . . . . . .                                                                                                                         | . 94       |
| 11.2.7 11.3                                                                                                                                           | . . . . . . . . . . . . . . Object 609A h : Homing Acceleration . . . . . . . . . . . . . . How to Start a Homing in hm Mode . . . . . . . . . . . . . . . . . . | . . . . . . . . . . . . . .                                                                                                                           | . 95       |
| 12 Cyclic Synchronous Position Mode 12.1 Detailed Object Speci/uniFB01cations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 12 Cyclic Synchronous Position Mode 12.1 Detailed Object Speci/uniFB01cations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            | 12 Cyclic Synchronous Position Mode 12.1 Detailed Object Speci/uniFB01cations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 96 96      |
| 12.1.1                                                                                                                                                |                                                                                                                                                                  | Object 6040 h : Controlword . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                         | . 96       |
|                                                                                                                                                       | 12.1.2                                                                                                                                                           | Object 6041 h : Statusword . . . . . . . . . . . . . . . . . . . . . . . . . . . . Object 6062 : Position                                             | . 97 99    |
|                                                                                                                                                       | 12.1.3                                                                                                                                                           | . . . . . . h Demand Value . . . . . . . . . . . . . . . . . . . . . . . Object 6063 : Position Actual                                                | .          |
|                                                                                                                                                       | 12.1.4                                                                                                                                                           | . . . h Internal Value . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                        | . 99       |
|                                                                                                                                                       | 12.1.5 12.1.6                                                                                                                                                    | Object 6064 h : Position Actual Value . . . . . . . . . . . . . . . . . . . . . . . Value . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | . 99 .100  |
|                                                                                                                                                       | 12.1.7                                                                                                                                                           | Object 606C h : Velocity Actual Object 607A h : Target Position . . . . . . . . . . . . . . . . . . . . . . . . . . .                                 | .100       |
|                                                                                                                                                       | 12.1.8                                                                                                                                                           | . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                     | . 101      |
|                                                                                                                                                       |                                                                                                                                                                  | . . . . Object 607D h : Software Position Limit . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                               |            |
|                                                                                                                                                       | 12.1.9 12.1.10                                                                                                                                                   | Object 60B0 h : Position Offset . . . . . Object 60C2 : Interpolation Time Period . . . . . . . . . . . . . . . . . . . . . . . . .                   | . 101 .102 |

<!-- image -->

13 Cyclic Synchronous Velocity Mode

103

| . .                                                                                | . .                                                                                                         |             |
|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------|
| 13.1 Detailed Object Speci/uniFB01cations . . . 13.1.1 Object 6040 : Controlword . | . . . . . . .                                                                                               | .103 .103   |
|                                                                                    | h . . . . . . . . .                                                                                         |             |
| 13.1.2                                                                             | Object 6041 h : Statusword . . . . . . . Object 606C : Velocity                                             | . 104 .106  |
| 13.1.3                                                                             | . . . . h Actual Value . . . . . Velocity . . .                                                             |             |
| 13.1.4 13.1.5                                                                      | Object 60FF h : Target . . . . Object 607D : Software                                                       | .106 . 107  |
| 13.1.6                                                                             | . . h Position Limit . . . Object 60B1 : Velocity Offset . . . . .                                          | 107         |
| 13.1.7                                                                             | h . . .                                                                                                     | .           |
|                                                                                    | . Object 60C2 h : Interpolation Time Period . .                                                             | .108        |
| 14 Cyclic Synchronous Torque Mode 14.1                                             | 14 Cyclic Synchronous Torque Mode 14.1                                                                      | 109 .109    |
| Detailed Object Speci/uniFB01cations 14.1.1 Object 6040 :                          | . . . . . . . . . . .                                                                                       |             |
|                                                                                    | . h Controlword . . . . . . . . . . Statusword                                                              | .109 .110   |
| 14.1.2 14.1.3                                                                      | Object 6041 h : . .                                                                                         |             |
|                                                                                    | . . . . . . . . . Object 6062 h : Position Demand Value .                                                   | . 111       |
| 14.1.4 14.1.5                                                                      | . . Object 6063 h : Position Actual Internal Value . .                                                      | .112 .112   |
|                                                                                    | Object 6064 h : Position Actual Value . . . . . . . . . .                                                   |             |
| 14.1.6                                                                             | Object 6071 h : Target Torque . .                                                                           | .113 .113   |
| 14.1.7                                                                             | Object 6077 h : Torque Actual Value . . .                                                                   | .113        |
| 14.1.8                                                                             | . . Object 607D h : Software Position Limit . . . Object 60B2 : Torque Offset . . . . . . .                 |             |
| 14.1.9                                                                             | h . .                                                                                                       | . 114 . 114 |
| 14.1.10                                                                            | Object 60C2 h : Interpolation Time Period . .                                                               |             |
| 15 Emergency Messages (EMCY)                                                       | 15 Emergency Messages (EMCY)                                                                                | 116         |
| 16 SDO Abort Codes                                                                 | 16 SDO Abort Codes                                                                                          | 117         |
| 17 Firmware Update 17.1 Over RS232 . . . . . .                                     | 17 Firmware Update 17.1 Over RS232 . . . . . .                                                              | 119 .119    |
| 17.2                                                                               | . . . . . . . . . . . . . . . . . Over FoE . .                                                              |             |
|                                                                                    | . . . . Updating                                                                                            | .119        |
| 17.3                                                                               | . . . . . . . . . . . . . . . . . . . the SII EEPROM Using TwinCAT 3 . . . .                                | .119        |
| 18 Figures Index                                                                   | 18 Figures Index                                                                                            | 122         |
| 19 Tables Index                                                                    | 19 Tables Index                                                                                             | 123         |
| 20 Supplemental Directives 20.1 Producer Information                               | 20 Supplemental Directives 20.1 Producer Information                                                        | 124 . 124   |
|                                                                                    | . . . . . . . . . . . . . . . . . Copyright . . . . . .                                                     |             |
| 20.2                                                                               | . . . . . . .                                                                                               | 124 124     |
| 20.3                                                                               | . . . . . . . . . . . Trademark Designations and Symbols . . . . . . . User . . . . . . . . . . . . . . . . | . . . 124   |
| 20.4 20.5                                                                          | Target . . . . . . . Disclaimer:                                                                            | . 124       |
|                                                                                    | Life Support Systems . . . . . . . . . . . . . .                                                            | 124         |
| 20.6                                                                               | Disclaimer: Intended Use . . . . . . . . . . .                                                              | . .125      |
| 20.7                                                                               | Collateral Documents and Tools . . . . . . . . . . .                                                        |             |
| 21 Revision History                                                                | 21 Revision History                                                                                         | 126         |
| 21.1                                                                               | Firmware Revision . . . . . . . . . . . . . . . . . . . Document Revision                                   | .126 .126   |
| 21.2                                                                               | . . . . . . . . . . . . . . . . . .                                                                         |             |

<!-- image -->

## 1 Preface

If necessary, it is always possible to turn the module into a TMCL or CANopen module by loading the TMCM-1690 TMCL or CANopen /uniFB01mware again through the CAN or RS232 interface using the /uniFB01rmware update function of the TMCL-IDE 3.0 or higher.

This document speci/uniFB01es objects and modes of operation of the Triamic TMCM-1690 BLDC and DC motor control module with CANopen-over-EtherCAT (CoE) /uniFB01rmware. The CoE /uniFB01rmware is designed to ful/uniFB01ll the EtherCAT® version of the CANopen DS402 standards. The EtherCAT® conformance has also been tested. This manual assumes that the reader is already familiar with the basics of EtherCAT® and the CoE protocol (especially DS402).

## 1.1 General Features of this CoE Implementation

- Communication according to EtherCAT® standards

## Main Characteristics

- Protocols: CoE, FoE

## SDO Communication

- Expedited transfer
- One server
- Segmented transfer
- No block transfer

## PDO Communication

- Consumer
- Producer
- RPDOs
- -Default mappings: manufacturer speci/uniFB01c.
- -Dynamic mapping with max. 6 mapping entries.
- TPDOs
- -Default mappings: manufacturer speci/uniFB01c.
- -Dynamic mapping with max. 9 mapping entries.

## Sync Managers

- Sync manager 1: send mailbox used for SDO communication
- Sync manager 0: receive mailbox used for SDO communication
- Sync manager 2: process data output (used for TPDO)
- Sync manager 3: process data input (used for RPDO)

## Further Characteristics

- Emergency: producer

<!-- image -->

## 1.2 Abbreviations Used in this Manual

Abbreviations

## 1.3 Firmware Update

Table 1: Abbreviations Used in this Manual

| CAN   | Controller area network      |
|-------|------------------------------|
| CoE   | CANopen over EtherCAT        |
| CHGND | Chassis Ground/Earth ground  |
| COB   | Communication object         |
| FoE   | File transfer over EtherCAT  |
| FSA   | Finite state automaton       |
| FSM   | Finite state machine         |
| NMT   | Network management           |
| ID    | Identi/uniFB01er             |
| LSB   | Least signi/uniFB01cant bit  |
| MSB   | Most signi/uniFB01cant bit   |
| PDO   | Process data object          |
| PDS   | Power drive system           |
| RPDO  | Receive process data object  |
| SDO   | Service data object          |
| TPDO  | Transmit process data object |
| EMCY  | Emergency object             |
| rw    | Read and write               |
| ro    | Read only                    |
| hm    | Homing mode                  |
| pp    | Pro/uniFB01le position mode  |
| pv    | Pro/uniFB01le velocity mode  |
| vm    | Velocity mode                |

The software running on the microprocessor consists of two parts, a bootloader and the CoE /uniFB01rmware itself. Whereas the boot loader is installed during production and testing at TRINAMIC and remains untouched throughout the whole lifetime, the CoE /uniFB01rmware can easily be updated. The new /uniFB01rmware can either be loaded into the module through /uniFB01le transfer over EtherCAT (FoE) or through the /uniFB01rmware update function of the TMCL-IDE, using the RS-232 interface of the module.

<!-- image -->

## 2 Motor Regulation

The TMCM-1690 supports a current, velocity, and position PI regulation mode for motor control in different application areas. Figure 1 shows these regulation modes. Individual modes are explained in the following subsections.

## 2.1 Structure of Motor Control Regulation Modes

Figure 1: Motion Regulation

<!-- image -->

It can be seen that the target current signal is /uniFB01rst limited by maximum current. There is an option for having a /uniFB01lter (average or biquad) to this signal. This is followed by having an impact of P and I parameters to the signal and the target voltage (PWM) is fed to the motor. There is a feedback coming from the actual current forming a closed loop. In the same fashion, the velocity and position regulation are performed.

The current regulation mode uses a /uniFB01eld-orientated current (FOC) and /uniFB02ux regulator to adjust a desired motor current. The current loop is running typically at 20KHz, and the PWM loop is variable and can be set using object 2003 h sub-object PWM frequency The PWM frequency ranges from 20KHz to 120KHz. The target current can be set by object 6071 h (Target torque) . The maximal target current is limited by object 2003 h (Drive settings) sub-object Maximumcurrent . The current regulation uses two basic parameters:

<!-- image -->

## 2.2 Current Regulation

the P and I parameters.

## 2.2.1 Structure of the Current Regulator

Figure 2: Current Regulation (See Parameter Descriptions in Table 2)

<!-- image -->

Current Regulation Parameters

Table 2: Current Regulation Parameters

| Parameter   | Description                                                       |
|-------------|-------------------------------------------------------------------|
| I ACTUAL    | Actual current (object 6077 h )                                   |
| I TARGET    | Target current (object 6071 h )                                   |
| I Max       | Max. target current (object 2003 h , sub-object Maximum current ) |
| e SUM       | Error sum for integral calculation                                |
| P PARAM     | Current P parameter (object 201E h , sub-object P )               |
| I PARAM     | Current I parameter (object 201E h , sub-object I )               |

## 2.2.1.1 Parametrizing the Current Regulator Set

1. Set the P parameter and the I parameter to zero.

Parametrizing the current regulator set is preferably done with the PI tuning tool using auto tuning. Further details can be seen in the TMCL-IDE documentation under the section PI tuning. However, it can be done manually as well without the tool. To parameterize the current regulator set properly, do as follows:

2. Start the motor by using a low target /uniFB02ux (example: 1000mA).
4. Do the same with the current I parameter.
3. Modify the current P parameter. Start from a low value and go to a higher value, until the actual current reaches nearly 70% of the desired target current.

For all tests, set the motor current limitation to a realistic value, so that the power supply does not become overloaded during acceleration phases. If the power supply reaches current limitation, the unit may reset or undetermined regulation results may occur.

<!-- image -->

## 2.3 Velocity Regulation

Based on the current regulation, the motor velocity can be controlled by the velocity PI regulator. The velocity regulation runs in the velocity loop clocked at 2KHz

## 2.3.1 Structure of the Velocity Regulator

Figure 3: Velocity Regulation (See Parameter Descriptions in Table 3)

<!-- image -->

Velocity Regulation Parameters

Table 3: Velocity Regulation Parameters

| Parameter   | Description                                                       |
|-------------|-------------------------------------------------------------------|
| V ACTUAL    | Actual motor velocity (object 606C h )                            |
| V RAMPGEN   | Target velocity of ramp generator (object 60FF h )                |
| V Max       | Max. target velocity (object 607F h )                             |
| e SUM       | Error sum for integral calculation                                |
| P PARAM     | Velocity P parameter (object 2023 h , sub-object P )              |
| I PARAM     | Velocity I parameter (object 2023 h , sub-object I )              |
| I Max       | Max. target current (object 2003 h , sub-object Maximum current ) |

## 2.3.1.1 Parametrizing the Velocity Regulator Set

1. Set the velocity I parameter to zero.

Parametrizing the velocity regulator set is preferably done with the PI tuning tool using auto tuning. Further details can be seen in the TMCL-IDE documentation under the section PI tuning. However, it can be done manually as well without the tool. To parameterize the velocity regulator set properly, do as follows:

2. Start the motor by using a medium target velocity (example: 2000rpm).
2. (a) Start from a low value and go to a higher value, until the actual motor speed reaches 80% or 90% of the target velocity.
3. Modify the current P parameter.
4. (b) The lasting 10% or 20% speed difference can be reduced by slowly increasing the velocity I parameter.

<!-- image -->

## 2.4 Velocity Ramp Generator

## 2.5 Position Regulation

For a controlled start-up of the motor's velocity, a velocity ramp generator can be activated/deactivated by object 2037 h , sub-object Enable . The ramp generator uses the maximum allowed motor velocity (object 607F h ), the acceleration (object 6083 h ) and the desired target velocity (object 60FF h ) to calculate a ramp generator velocity for the following velocity PI regulator.

Based on current and velocity regulators, the TMCM-1690 supports a positioning mode based on encoder (ABN or absolute) or hall sensor position. During positioning, the velocity ramp generator can be activated to enable motor positioning with controlled acceleration or it can be disabled to support motor positioning with maximum allowed speed.

The position regulation uses only one basic parameter: the P regulation parameter

## 2.5.1 Structure of the Position Regulator

Figure 4: Positioning Regulation (See Parameter Descriptions in Table 4)

<!-- image -->

Position Regulation Parameters

Table 4: Position Regulation Parameters

| Parameter   | Description                                          |
|-------------|------------------------------------------------------|
| n ACTUAL    | Actual motor position (object 6064 h )               |
| n TARGET    | Target motor position (object 607A h )               |
| P PARAM     | Position P parameter (object 2028 h , sub-object P ) |
| V MAX       | Max. allowed velocity (object 607F h )               |
| V TARGET    | New target velocity for the ramp generator           |

## 2.5.1.1 Parametrizing the Position Regulation

1. Disable the velocity ramp generator and set position P parameter to zero.

Based on the velocity regulator, only the position regulator P has to be parameterized. Parametrizing the position regulator is preferably done with the PI tuning tool using auto tuning. Further details can be seen in the TMCL-IDE documentation under the section PI tuning. However, it can be done manually as well without the tool. To parameterize the position regulator, do as follows:

2. Choose a target position and increase the position P parameter until the motor reaches the target position approximately.

<!-- image -->

3. Switch on the velocity ramp generator. Based on the max. positioning velocity (object 607F h ) and the acceleration value (object 6083 h ) the ramp generator automatically calculates the slow down point, that is, the point at which the velocity must be reduced to stop at the desired target position.

To minimize the time until this /uniFB02ag becomes set, the positioning tolerance MVP target reached distance can be chosen with object 2028 h sub-object Position reached distance .

4. Reaching the target position is signaled by setting the position end /uniFB02ag.

Since the motor typically is assumed not to signal target reached when the target is just passed in a short moment at a high velocity, additionally, the maximum target reached velocity (MVP target reached velocity) can be de/uniFB01ned by object 6082 h .

A value of zero for object 6082 h is the most universal, since it implies that the motor stands still at the target. But when a fast rising of the position end /uniFB02ag is desired, a higher value for the MVP target reached velocity parameter saves a lot of time. The best value should be tried out in the actual application.

## 2.5.2 Correlation of Target Position and the Position End Flag

Figure 5: Positioning Algorithm

<!-- image -->

Depending on motor and mechanics, a low oscillation is normal. This can be reduced to at least +/-1 steps. Without oscillation, the regulation cannot keep the position!

<!-- image -->

this area.

## 3 Ramps

- Linear ramp

TMCM-1690 supports two forms of ramps for motion control:

- Sine shaped ramp

A linear ramp or a trapezoidal ramp predicts the acceleration rates by using a constant gradient. This constant gradient results in constant increase in the velocity. The acceleration and velocity are limited by the object 6083 h (Pro/uniFB01le acceleration) and 607F h (Max pro/uniFB01le velocity) , respectively. This ramp can be used to perform positioning tasks as well. There are some resonances in the system but for many systems they can be ignored. The linear ramp is selected by setting 0 to object 2003 h sub-object Ramp type .

## 3.1 Linear Ramp

## 3.2 Sine Shaped Ramp

In contrast to linear shaped ramps, the sine shape ramps follow a constant increase in the acceleration as it is one order higher. This results in a smoother response with far less resonances in the system. Sine shaped ramp is selected setting by 1 to object 2003 h sub-object Ramp type . Figure 6 below gives an impression of how s shaped ramp looks like and how it is different from linear ramp. In the /uniFB01gure, desired position Pt is reached with the maximum acceleration and maximum velocity.

Figure 6: Linear Shaped Ramp (Left) S Shaped Ramp (Right)

<!-- image -->

It can be seen that s shaped ramps provide smoother operation as the acceleration is changed linearly compared to abrupt change of acceleration as in the linear ramp. This results from controling a /uniFB01nite amount of jerk at the time when the ramp is accelerating or deccelerating.

After the ramp type is selected, the motor can be turned in both velocity and position mode. For turning the motor in velocity mode, the target velocity object 60FF h is set to the desired velocity. The ramp tries

<!-- image -->

to reach its desired value with fastest acceleration limited by the object 6083 h . For turning the motor with position mode, the target position is set with the object 607A h . The ramp is calculated to try to reach its desired position with the fastest acceleration (which is also limited by object 6083 h ) and fastest velocity (limited by maximum velocity object 6081 h ).

TMCM-1690 supports all three modes (torque, velocity, and position mode) with both linear and sine shaped ramps. The parameters such as maximum velocity, maximum acceleration, target velocity, and target position can be changed on the /uniFB02y and the ramp is adjusted accordingly.

<!-- image -->

## 4 Module Speci/uniFB01c Functions

This module supports software /uniFB01lters for /uniFB01ve signals, as shown in Figure 7. Each signal can be /uniFB01ltered using either a biquad /uniFB01lter or an averaging /uniFB01lter. Of course, there is the option to not /uniFB01lter at all. The averaging /uniFB01lter averages over the last number of samples, in exponents of 2, up to 2 8 . The biquad /uniFB01lter, on the other hand, can be con/uniFB01gured as a lowpass /uniFB01lter of the 1st and 2nd orders, and also as resonanceanitresonance /uniFB01lter. As the equation determining the biquad /uniFB01lter is the same, only a different set of coe/uniFB03cients is required to alter its behaviour. See section 4.1.1 for more details.

Figure 7: Filter Blocks

<!-- image -->

The /uniFB01lter for the target position value is intended to smoothen the position input to the control structure. It is evaluated at every tenth PWM cycle. The /uniFB01lter for the target velocity value is intended to smoothen the velocity input from an external master or the position controller. It is also evaluated at every tenth PWM cycle. The /uniFB01lter for the target torque value is intended to smoothen the torque input from an external master or the velocity controller. It is also evaluated at every tenth PWM cycle. The /uniFB01lter for the actual current value is intended to smoothen the measured actual current value. It is evaluated at every PWM cycle. The /uniFB01lter for the actual velocity value is intended to smoothen the measured actual velocity value. It is evaluated at every tenth PWM cycle.It can be used as a low-pass /uniFB01lter for bandwidth limitation and noise suppression. Moreover, it can be designed to suppress a resonance or anti-resonance. Same statements are correct for all the /uniFB01lters.

There are a total of seven sub-objects for each signal. To set the type of /uniFB01lter for Target Torque, for example, sub-object Filter type in object 2041 h (Filter target torque) can be set to values 0, 1, or 2. Where 0 disables the /uniFB01lter, 1 enables the averaging /uniFB01lter, and 2 enables the biquad /uniFB01lter. Sub-object Average /uniFB01lter size of object 2041 h sets the sample size for the averaging /uniFB01lter. Sub-objects 3 through

<!-- image -->

## 4.1 Filters

7 of object 2041 h correspond to the biquad /uniFB01lter coe/uniFB03cients in Q3.29 format. A similar layout of /uniFB01lter settings is followed by all /uniFB01ve signals. See the object table for the /uniFB01lter under consideration.

## 4.1.1 Biquad Filter (for Future Use)

<!-- formula-not-decoded -->

The biquad /uniFB01lters implemented inside of TMCM-1690 use standard biquad /uniFB01lters (standard IIR /uniFB01lter of second order, Wikipedia Article) in the following structure.

In this equation, X(n) is the actual input sample, while Y(n-1) is the /uniFB01lter output of the last cycle. All coe/uniFB03cients are S32 values and are normalized to a Q3.29 format. Take care of correct parametrization of the /uniFB01lter. There is no built-in plausibility or stability check. Biquad state variables are reset when parameters are changed. The TRINAMIC IDE supports parametrization with the Control Settings tool. A standard biquad /uniFB01lter has the following transfer function in the Laplace-Domain:

<!-- formula-not-decoded -->

The transfer function needs to be transformed to time discrete domain by Z-Transformation and coe/uniFB03cients need to be normalized. This is done by the following equations.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

A standard second order lowpass /uniFB01lter with given cutoff frequency ω c and damping factor D has the following transfer function in the Laplace-Domain:

while T is the sampling time according to PWM\_MAX\_COUNT × 10ns and variables with index z are auxiliary variables.

<!-- formula-not-decoded -->

Determine /uniFB01lter coe/uniFB03cients with the equations above by comparing coe/uniFB03cients of both transfer functions.

The TMCM-1690 also supports a mechanical brake that can have a seperate power source. As the brake is operated by MOSFETs on the baseboard, there is an upper limit to the current it can handle. Thus, provide the brake's electrical resistance and supply voltage to set the upper limit of PWM duty cycle.

<!-- image -->

## 4.2 Mechanical Brake

The object used for mechanical brake for TMCM-1690 is 205A h (Mechanical brake) . For setup, /uniFB01rst provide the supply voltage with sub-object Supply voltage andbrake's resistance with sub-object Resistance . Then, provide the duty cycles that the brake has on release with sub-object Rleasing duty cycle and as hold with sub-object Holding duty cycle , while also providing release duration with sub-object Releasing duration . Setting sub-object Enable brake output enables the brake to be used. Now, the brake can be released by setting sub-object Release brake . This causes the brake line to output a PWM signal with release duty cycle for the release duration. After the release duration, the PWM signal goes to holding duty cycle. See Figure 8.

Figure 8: Mechanical Brake Settings

<!-- image -->

A servo system feeds back energy to the power supply line during deceleration and load control. The energy can lead to a voltage rise on the power supply system if it is not dissipated. The voltage overshoot of a system without brake chopper depends on the motor deceleration time, kinetic energy, and the servo module buffer capacity. The brake chopper dissipates this energy from the system, and thus avoids system damage. TMCM-1690 supports two kinds of brake chopper

## 4.3 Brake Chopper

- PWMbraking
- Resistive/Shunt braking

## 4.3.1 PWMBraking

In PWM braking, the motor coils are used to perform the dissipation of the energy from the system. This is done by applying 50% duty cycle on all three phases of the motor. The object used for brake chopper in TMCM-1690 is 205F h . For enabling PWM braking, sub-object Type is set to 0. Additionally, the voltage limits (sub-object Voltage limit ) is selected such that the supply voltage is larger than it. After that the brake is enabled by setting sub-object Enable . This results in the extra regenerative energy produced due to slowing down dissipated through the coils of the motor.

## 4.3.2 Resistive/Shunt Braking

TMCM-1690 provides a continuous motor voltage monitoring as well as brake chopper output. The brake resistor is connected between the supply voltage and brake output. For setup, /uniFB01rst provide the supply voltage sub-object Supply voltage and brake's resistance (sub-object Resistance ). Shunt braking is selected by setting sub-object Type to 1. The voltage limits and hysteresis are selected using the sub-objects

<!-- image -->

Voltage limit and Type , respectively. Lastly, the brake is enabled by setting sub-object Enable . For a full speed ramp stop, the brake resistor should be able to dissipate the complete kinetic energy fed back during deceleration phase. The following /uniFB01gure shows an example of brake chopper schematic

Figure 9: Brake Chopper Example Schematic

<!-- image -->

The IIT monitor provides a check on the energy consumption. The actual current is being monitored, and these values are being squared and summed up periodically over the con/uniFB01gured winding time using a 1ms cycle. If one of the limits gets exceeded during this time, the motor is stopped and the IIT error /uniFB02ag is set. The object corresponding to IIT settings is 202D h (IIT) . The IIT error /uniFB02ag can be reset by writing any value to sub-object Clear exceed /uniFB02ags . There are two IIT windows (see Figure 10). The /uniFB01rst one directly uses the actual current, and the second one uses the actual current divided by √ 2 (less power over longer time). Sub-objects Limit 1 and Limit 2 are limits for the two windows. Sub-objects Sum 1 and Sum 2 show the actual integration sums.

## 4.4 IIT

<!-- image -->

Figure 10: IIt Monitor Windows

<!-- image -->

## 4.5 Lower Velocity PI

The TMCM-1690 supports having different PI parameters for lower velocities. This provides a better control and smoother operation. It is possible to have a stronger set of PI parameters for the lower velocities and a relatively weaker set for the higher velocities. It is good to have the set of both PI parameters and the velocity to perform the switch (to get the parameters, PI tuning tool can be used). The object used for lower velocity PI parameters is 206B h (Lower velocity PI) . The velocity at which the switch is performed can be set using the sub-object Switch over speed (default value is 0). After that, P and I parameters can be set using the sub-objects Lower velocity P and Lower velocity I , respectively. These are the PI parameters for the velocities less than the switch over velocity. Parameters for higher velocities are set by writing on the standard PI velocity parameters

<!-- image -->

## 5 Communication

The application layer comprises a concept to con/uniFB01gure and communicate real-time-data as well as the mechanisms for synchronization between devices. The functionality that the application layer offers to an application is logically divided over different service data objects (SDO) in the application layer. A service object offers a speci/uniFB01c functionality and all the related services.

## 5.1 Reference Model

Applications interact by invoking services of a service object in the application layer. To realize these services, this object exchanges data through the EtherCAT with peer service object(s) using a protocol.

The application and the application layer interact with service primitives.

Service Primitives

Table 5: Service Primitives

| Primitive          | De/uniFB01nition                                                                                                                                          |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Request            | Issued by the application to the application layer to request a service.                                                                                  |
| Indication         | Issued by the application layer to the application to report an internal event detected by the application layer or indicate that a service is requested. |
| Response           | Issued by the application to the application layer to respond to a previous received indication.                                                          |
| Con/uniFB01rmation | Issued by the application layer to the application to report the result of a previously issued request.                                                   |

A service type de/uniFB01nes the primitives exchanged between the application layer and the cooperating applications for a particular service of a service object. Uncon/uniFB01rmed and con/uniFB01rmed services are collectively called remote services.

<!-- image -->

Service Types

| Type                       | De/uniFB01nition                                                                                                                                                                                                                                                                                                                                                                             |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Local service              | Involves only the local service object. The application issues a request to its local service object that executes the requested service withoutcommu- nicating with peer service object(s).                                                                                                                                                                                                 |
| Uncon/uniFB01rmed service  | Involves oneormorepeerservice objects. The application issues a request to its local service object. This request is transferred to the peer service object(s) that each passes it to their application as an indication. The result is not con/uniFB01rmed back.                                                                                                                            |
| Con/uniFB01rmed service    | Can involve only one peer service object. The application issues a request to its local service object. This request is transferred to the peer service object that passes it to the other application as an indication. The other application issues a response that is transferred to the originating service object that passes it as a con/uniFB01rmation to the requesting application. |
| Provider initiated service | Involves only the local service object. The service object (being the service provider) detects an event not solicited by a requested service. This event is then indicated to the application.                                                                                                                                                                                              |

Table 6: Service Types

<!-- image -->

## 5.2 NMT State Machine

Starting and resetting the device is controlled through the state machine. The NMT state machine consists of the states shown in /uniFB01gure 11.

The/uniFB01nite state machine (FSM) or simply state machine is a model of behavior composed of a /uniFB01nite number of states, transitions between those states, and actions. It shows which way the logic runs when certain conditions are met.

Figure 11: NMT State Machine

<!-- image -->

After power-on or reset, the device enters the initialization (INIT) state.

In safe-operational (SAFE-OP) state, PDO communication is possible. Inputs can be read, but outputs cannot be switched and the motor cannot be run.

The main device can then switch the device to pre-operational (PRE-OP) state. In this state, only SDO communication is possible. PDO communication is not possible.

In operational (OP) state, all features of the module can be used. PDO communication is possible, outputs can be switched, and the motor can be used. During operational state the device can use all supported communication objects.

When switching from operational to safe-operational state, the motor is stopped if it is running. When the EtherCAT connection is lost during operational state, the device also automatically switches to safe-

<!-- image -->

operational state.

The bootstrap (BOOT) state is used for /uniFB01rmware updates through FoE. Before FoE can be used, the device has to be switched to this state.

## 5.3 Device Model

- Communication: This function unit provides the communication objects and the appropriate functionality to transport data items through the underlying network structure.

A CoE device mainly consists of the following parts:

- Object dictionary: The object dictionary is a collection of all the data items that have an in/uniFB02uence on the behavior of the application objects, communication objects, and state machine used on this device.
- Application: The application comprises the functionality of the device with respect to the interaction with the process environment.

<!-- image -->

Figure 12: Device Model

<!-- image -->

## 5.4 Object Dictionary

The most important part of a device pro/uniFB01le is the object dictionary description. The object dictionary is essentially a grouping of objects accessible through the network in an ordered prede/uniFB01ned fashion. Each object within the dictionary is addressed using a 16-bit index. The overall layout of the standard object dictionary is shown in table 7:

Object Dictionary

Table 7: Object Dictionary

| Index           | Object                                                  |
|-----------------|---------------------------------------------------------|
| 0000 h          | Not used.                                               |
| 0001 h - 001F h | Static data types.                                      |
| 0020 h - 003F h | Complex data types.                                     |
| 0040 h - 005F h | Manufacturer speci/uniFB01c complex data types.         |
| 0060 h - 007F h | Device pro/uniFB01le speci/uniFB01c static data types.  |
| 0080 h - 009F h | Device pro/uniFB01le speci/uniFB01c complex data types. |
| 00A0 h - 0FFF h | Reserved for further use.                               |
| 1000 h - 1FFF h | Communication pro/uniFB01le area.                       |
| 2000 h - 5FFF h | Manufacturer speci/uniFB01c pro/uniFB01le area.         |
| 6000 h - 9FFF h | Standardized device pro/uniFB01le area.                 |
| A000 h - BFFF h | Standardized interface pro/uniFB01le area.              |
| C000 h - FFFF h | Reserved for further use.                               |

The communication pro/uniFB01le area at indices 1000 h through 1FFF h contains the communication speci/uniFB01c parameters for the CAN network. These entries are common to all devices.

The standardized device pro/uniFB01le area at indices 6000 h through 9FFF h contains all data objects common to a class of devices that can be read or written through the network. They describe the device parameters and device functionality of the device pro/uniFB01le.

The manufacturer segment at indices 2000 h through 5FFF h contains manufacturer speci/uniFB01c objects. These objects control the special features of the Trinamic TMCM-1690 motion control device.

<!-- image -->

## 6 Communication Area

## 6.1 Detailed Object Speci/uniFB01cations

The communication area contains all objects that de/uniFB01ne the communication parameters of the CoE device according to the EtherCAT standard.

## 6.1.1 Object 1000 h : Device Type

This object contains information about the device type. The object 1000 h describes the type of device and its functionality. It is composed of a 16-bit /uniFB01eld that describes the device pro/uniFB01le used and a second 16-bit /uniFB01eld that provides additional information about optional functionality of the device.

Object Description

Table 8: Object Description (1000h)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 1000 h  | Device Type | Variable      | UNSIGNED32  |

Entry Description

Table 9: Entry Description (1000h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | no            | UNSIGNED32    | FFFC0192 h      |

## 6.1.2 Object 1001 h : Error Register

This object contains error information. The CANopen device maps internal errors into object 1001 h . It is part of an emergency object.

Object Description

Table 10: Object Description (1001h)

| Index   | Name           | Object Type   | Data Type   |
|---------|----------------|---------------|-------------|
| 1001 h  | Error register | Variable      | UNSIGNED8   |

Entry Description

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | no            | UNSIGNED8     |               0 |

Table 11: Entry Description (1001h)

<!-- image -->

Error Register Bits

Table 12: Error Register Bits

|   Bit | De/uniFB01nition                    |
|-------|-------------------------------------|
|     0 | Generic error                       |
|     1 | Current                             |
|     2 | Voltage                             |
|     3 | Temperature                         |
|     4 | Communication error                 |
|     5 | Device pro/uniFB01le speci/uniFB01c |
|     6 | Reserved (always 0)                 |
|     7 | Manufacturer speci/uniFB01c         |

## 6.1.3 Object 1008 h : Manufacturer Device Name

This object contains the name of the device given by the manufacturer.

Object Description

Table 13: Object Description (1008h)

| Index   | Name                     | Object Type   | Data Type      |
|---------|--------------------------|---------------|----------------|
| 1008 h  | Manufacturer Device Name | Variable      | Visible String |

Entry Description

Table 14: Entry Description (1008h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | no            | -             | TMCM-1690       |

## 6.1.4 Object 1009 h : Manufacturer Hardware Version

This object contains the hardware version description.

Object Description

| Index   | Name                          | Object Type   | Data Type      |
|---------|-------------------------------|---------------|----------------|
| 1009 h  | Manufacturer Hardware Version | Variable      | Visible String |

Table 15: Object Description (1009h)

<!-- image -->

Entry Description

Table 16: Entry Description (1009h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value                    |
|-------------|----------|---------------|---------------|----------------------------------|
|           0 | ro       | no            | -             | Depends on device. Example: 1.00 |

## 6.1.5 Object 100A h : Manufacturer Software Version

This object contains the software version description.

Object Description

Table 17: Object Description (100Ah)

| Index   | Name                          | Object Type   | Data Type      |
|---------|-------------------------------|---------------|----------------|
| 100A h  | Manufacturer Software Version | Variable      | Visible String |

Entry Description

Table 18: Entry Description (100Ah)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value                    |
|-------------|----------|---------------|---------------|----------------------------------|
|           0 | ro       | no            | -             | Depends on device. Example: 1.00 |

## 6.1.6 Object 1010 h : Store Parameters

The TMCM-1690 module supports saving of the following parameter groups:

This object supports the saving of parameters in non-volatile memory. By read access, the device provides information about its saving capabilities.

- Subindex 1: save all parameters.
- Subindex 3: save device pro/uniFB01le parameters (not used).
- Subindex 2: save communication parameters.
- Subindex 4: save motor 0 parameters.
- Subindex 5: save device parameters (other non axis-related parameters).

Note

To avoid storage of parameters by mistake, storage is only executed when a speci/uniFB01c signature is written to the appropriate subindex. This signature is "save" (65766173 h , see also Table 19).

<!-- image -->

Save Signature

Table 19: Save Signature

| e    | v    | a    | s    |
|------|------|------|------|
| 65 h | 76 h | 61 h | 73 h |

On reception of the correct signature in the appropriate subindex, the device stores the parameter and then con/uniFB01rms the SDO transmission (initiate download response). If the storing failed, the device responds with an abort SDO transfer (abort code: 06060000 h ). If a wrong signature is written, the device refuses to store and responds with abort SDO transfer (abort code: 0800002x h ).

Onread access, each subindex provides information if it is possible to store the parameter group. It reads 1 if yes and 0 if no.

Object Description

Table 20: Object Description (1010h)

| Index   | Name             | Object Type   | Data Type   |
|---------|------------------|---------------|-------------|
| 1010 h  | Store Parameters | Array         | UNSIGNED32  |

Entry Description

Table 21: Entry Description (1010h)

|   Sub-index | Description                          | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|--------------------------------------|----------|---------------|---------------|-----------------|
|           0 | Highest supported sub-index          | ro       | no            | UNSIGNED8     |               5 |
|           1 | Save all parameters                  | rw       | no            | UNSIGNED32    |               1 |
|           2 | Save communication parameters        | rw       | no            | UNSIGNED32    |               1 |
|           3 | Save device pro/uniFB01le parameters | rw       | no            | UNSIGNED32    |               0 |
|           4 | Save motor 0 parameters              | rw       | no            | UNSIGNED32    |               1 |
|           5 | Save device parameters               | rw       | no            | UNSIGNED32    |               1 |

## 6.1.7 Object 1011 h : Restore Parameters

The TMCM-1690 module supports restoring of the following parameter groups:

With this object, the default values of parameters according to the communication or device pro/uniFB01le are restored. By read access, the device provides information about its capabilities to restore these values.

- Subindex 1: restore all parameters.
- Subindex 3: restore device pro/uniFB01le parameters (not used).
- Subindex 2: restore communication parameters.
- Subindex 4: restore motor 0 parameters.
- Subindex 5: restore device parameters (other non axis-related parameters).

<!-- image -->

Note

Load Signature

To avoid restoring the parameters by mistake, restoring is only executed when a speci/uniFB01c signature is written to the appropriate subindex. This signature is "load" (64616F6C h , see also Table 22).

Table 22: Load Signature

| d    | a    | o    | l    |
|------|------|------|------|
| 64 h | 61 h | 6F h | 6C h |

Onreception of the correct signature in the appropriate subindex, the device restores the parameter and then con/uniFB01rms the SDO transmission (initiate download response). If the restoring failed, the device responds with an abort SDO transfer (abort code: 06060000 h ). If a wrong signature is written, the device refuses to restore and responds with abort SDO transfer (abort code: 0800002x h ).

After the default values are restored, they become active after the next reset or power cycle of the TMCM1690.

On read access, each subindex provides information if it is possible to restore the parameter group. It reads 1 if yes and 0 if no.

Object Description

Table 23: Object Description (1011h)

| Index   | Name               | Object Type   | Data Type   |
|---------|--------------------|---------------|-------------|
| 1011 h  | Restore Parameters | Array         | UNSIGNED32  |

Entry Description

Table 24: Entry Description (1011h)

|   Sub-index | Description                             | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|-----------------------------------------|----------|---------------|---------------|-----------------|
|           0 | Highest supported sub-index             | ro       | no            | UNSIGNED8     |               5 |
|           1 | Restore all parameters                  | rw       | no            | UNSIGNED32    |               1 |
|           2 | Restore communication parameters        | rw       | no            | UNSIGNED32    |               1 |
|           3 | Restore device pro/uniFB01le parameters | rw       | no            | UNSIGNED32    |               0 |
|           4 | Restore motor 0 parameters              | rw       | no            | UNSIGNED32    |               1 |
|           5 | Restore device parameters               | rw       | no            | UNSIGNED32    |               1 |

## 6.1.8 Object 1018 h : Identity Object

The object 1018 h contains general information about the device:

<!-- image -->

- The vendor ID (subindex 01 h ) contains a unique value allocated to each manufacturer. The vendor ID of ADI Trinamic is 286 h .
- The manufacturer speci/uniFB01c revision number (subindex 3 h ) consists of a major revision number and a minor revision number.
- The manufacturer speci/uniFB01c product code (subindex 2 h ) identi/uniFB01es a speci/uniFB01c device version.

Object Description

Table 25: Object Description (1018h)

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 1018 h  | Identity Object | Record        | Identity    |

Entry Description

Table 26: Entry Description (1018h)

|   Sub-index | Description       | Access   | PDO Mapping   | Value Range   | Default Value                |
|-------------|-------------------|----------|---------------|---------------|------------------------------|
|           0 | Number of entries | ro       | no            | 0...3         | 3                            |
|           1 | Vendor ID         | ro       | no            | UNSIGNED32    | 0286 h                       |
|           2 | Product code      | ro       | no            | UNSIGNED32    | 1690                         |
|           3 | Revision number   | ro       | no            | UNSIGNED32    | e.g. 20003 h for version 2.3 |
|           4 | Serial number     | ro       | no            | UNSIGNED32    | depends on module            |

## 6.1.9 Object 1600 h : Receive PDO Mapping Parameter

This object contains the mapping parameters for the RPDO the device is able to receive. The sub-index 00 h contains the number of valid entries within the mapping record. This number of entries is also the number of the application variables that shall be received with the corresponding RPDO. The sub-indices from 01 h to the number of entries contain the information about the mapped application variables. These entries describe the PDO contents by their index, sub-index, and length.

Object Description

| Index   | Name                          | Object Type   | Data Type   |
|---------|-------------------------------|---------------|-------------|
| 1600 h  | Receive PDO mapping parameter | RECORD        | PDO Mapping |

Table 27: Object Description (1600h)

<!-- image -->

Entry Description

Table 28: Entry Description (1600h)

| Sub-index   | Description                                   | Access   | Value Range   | Default Value    |
|-------------|-----------------------------------------------|----------|---------------|------------------|
| 00 h        | Number of mapped appli- cation objects in PDO | rw       | 0...9         | Index 1600 h : 4 |
| 01 h        | Mapping entry 1                               | rw       | UNSIGNED32    | 60400010 h       |
| 02 h        | Mapping entry 3                               | rw       | UNSIGNED32    | 607A0020 h       |
| 03 h        | Mapping entry 4                               | rw       | UNSIGNED32    | 60710010 h       |
| 04 h        | Mapping entry 5                               | rw       | UNSIGNED32    | 60FF0020 h       |
| 05 h        | Mapping entry 2                               | rw       | UNSIGNED32    | 0 h              |
| 06 h        | Mapping entry 6                               | rw       | UNSIGNED32    | 0 h              |
| 07 h        | Mapping entry 7                               | rw       | UNSIGNED32    | 0 h              |
| 08 h        | Mapping entry 8                               | rw       | UNSIGNED32    | 0 h              |
| 09 h        | Mapping entry 9                               | rw       | UNSIGNED32    | 0 h              |

## 6.1.10 Objects 1A00 h : Transmit PDO Mapping Parameter

This object contains the mapping parameters for the TPDO the device is able to transmit. The sub-index 00 h contains the number of valid entries within the mapping record. This number of entries is also the number of the application variables that shall be transmitted with the corresponding TPDO. The subindices from 01 h to the number of entries contain the information about the mapped application variables. These entries describe the PDO contents by their index, sub-index, and length.

Object Description

| Index   | Name                           | Object Type   | Data Type   |
|---------|--------------------------------|---------------|-------------|
| 1A00 h  | Transmit PDO mapping parameter | RECORD        | PDO Mapping |

Table 29: Object Description (1A00h)

<!-- image -->

Entry Description

Table 30: Entry Description (1A00h)

| Sub-index   | Description                                   | Access   | Value Range   | Default Value   |
|-------------|-----------------------------------------------|----------|---------------|-----------------|
| 00 h        | Number of mapped aapli- cation objects in PDO | rw       | 0...9         | 6               |
| 01 h        | Mapping entry 1                               | rw       | UNSIGNED32    | 60410010 h      |
| 02 h        | Mapping entry 2                               | rw       | UNSIGNED32    | 60610008 h      |
| 03 h        | Mapping entry 3                               | rw       | UNSIGNED32    | 60640020 h      |
| 04 h        | Mapping entry 4                               | rw       | UNSIGNED32    | 60770010 h      |
| 05 h        | Mapping entry 5                               | rw       | UNSIGNED32    | 606C0020 h      |
| 06 h        | Mapping entry 6                               | rw       | UNSIGNED32    | 60FD0020 h      |
| 07 h        | Mapping entry 7                               | rw       | UNSIGNED32    | 0 h             |
| 08 h        | Mapping entry 8                               | rw       | UNSIGNED32    | 0 h             |
| 09 h        | Mapping entry 9                               | rw       | UNSIGNED32    | 0 h             |

## 6.1.11 Objects 1C00 h : Sync Manager Communication Type

This object describes the communication types of the EtherCAT sync managers. The types of the /uniFB01rst four synch managers are normally /uniFB01xed and should not be changed. Sync managers can have the following four communication types:

Sync Manager Communication Types

Table 31: Sync Manager Communication Types

|   Type | Description         |
|--------|---------------------|
|      1 | Mailbox receive     |
|      2 | Mailbox send        |
|      3 | Process data input  |
|      4 | Process data output |

Object Description

| Index   | Name                            | Object Type   | Data Type   |
|---------|---------------------------------|---------------|-------------|
| 1C00 h  | Sync manager communication type | RECORD        | UNSIGNED8   |

Table 32: Object Description (1C00h)

<!-- image -->

Entry Description

Table 33: Entry Description (1C00h)

| Sub-index   | Description                       | Access   | Value Range   |   Default Value |
|-------------|-----------------------------------|----------|---------------|-----------------|
| 00 h        | Number of entries                 | rw       | 0...3         |               4 |
| 01 h        | Communication type sync manager 1 | rw       | UNSIGNED8     |               1 |
| 02 h        | Communication type sync manager 2 | rw       | UNSIGNED8     |               2 |
| 03 h        | Communictaion type sync manager 3 | rw       | UNSIGNED8     |               3 |
| 04 h        | Communictaion type sync manager 4 | rw       | UNSIGNED8     |               4 |

## 6.1.12 Objects 1C12 h : Sync Manager 2 PDO Assignment

This object contains the index of the PDO de/uniFB01niton object assigned to sync manager 2. Normally, the RPDO objects are assigned to sync manager 2. Under most cicumstances, there is no need to change this setting.

Object Description

Table 34: Object Description (1C12h)

| Index   | Name                          | Object Type   | Data Type      |
|---------|-------------------------------|---------------|----------------|
| 1C12 h  | Sync manager 2 PDO assignment | RECORD        | PDO assignment |

Entry Description

Table 35: Entry Description (1C12h)

| Sub-index   | Description                        | Access   | Value Range   | Default Value   |
|-------------|------------------------------------|----------|---------------|-----------------|
| 00 h        | Number of assigned PDOs            | rw       | 0...1         | 1               |
| 01 h        | PDO mapping index of assigned RPDO | rw       | UNSIGNED16    | 1600 h          |

## 6.1.13 Objects 1C13 h : Sync Manager 3 PDO Assignment

This object contains the index of the PDO de/uniFB01niton object assigned to sync manager 3. Normally, the TPDO objects are assigned to sync manager 3. Under most cicumstances, there is no need to change this setting.

Object Description

| Index   | Name                          | Object Type   | Data Type      |
|---------|-------------------------------|---------------|----------------|
| 1C13 h  | Sync manager 3 PDO assignment | RECORD        | PDO assignment |

Table 36: Object Description (1C13h)

<!-- image -->

Entry Description

| Sub-index   | Description                        | Access   | Value Range   | Default Value   |
|-------------|------------------------------------|----------|---------------|-----------------|
| 00 h        | Number of assigned PDOs            | rw       | 0...1         | 1               |
| 01 h        | PDO mapping index of assigned TPDO | rw       | UNSIGNED16    | 1A00 h          |

Table 37: Entry Description (1C13h)

<!-- image -->

## 7 Manufacturer Speci/uniFB01c Area

The manufacturer segment contains manufacturer speci/uniFB01c objects. These objects control the special features of the Trinamic device TMCM-1690.

## 7.1 Detailed Object Speci/uniFB01cations

This object provides information about motor settings that can be deduced from the data sheet.

## 7.1.1 Object 2000 h : Motor Settings

Object Description

Table 38: Object Description (2000h)

| Index   | Name           | Object Type   | Data Type   |
|---------|----------------|---------------|-------------|
| 2000 h  | Motor settings | Variable      | Record      |

Entry Description

|   Sub- index | Name                    | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|-------------------------|---------------|-------|-------|-----------|--------|----------|
|            1 | Motor type              | no            |     0 |     1 |         0 | -      | RW       |
|            2 | Motor family            | no            |     0 |     1 |         0 | -      | RW       |
|            3 | Pole pairs              | no            |     0 |   255 |         4 | -      | RW       |
|            4 | Pole pair distance      | no            |     1 | 65535 |        10 | µ m    | RW       |
|            5 | Nominal current         | no            |     0 | 10000 |      3470 | mA     | RW       |
|            6 | Peak current            | no            |     0 | 10000 |     10000 | mA     | RW       |
|            7 | Line to line resistance | no            |     1 | 65535 |       720 | mΩ     | RW       |
|            8 | Line to line inductance | no            |     1 | 65535 |      1200 | µ H    | RW       |
|            9 | Torque constant         | no            |     1 | 65535 |        30 | mNm/A  | RW       |
|           10 | Inertia                 | no            |     1 | 65535 |       480 | gcm 2  | RW       |

Table 39: Entry Description (2000h)

<!-- image -->

Parameter

Description

Table 40: Parameter Description (2000h)

| Motor type   | Select a motor type connected to the module 0. 3-phase BLDC 1. DC motor   |
|--------------|---------------------------------------------------------------------------|
| Motor family | Select the motor family 0. Rotary 1. Linear                               |

## 7.1.2 Object 2003 h : Drive Settings

This object is used to con/uniFB01gure the drive settings. It has parameters such as ramp type, commutation mode, sensors, maximum current that are used to initialize the drive.

Object Description

Table 41: Object Description (2003h)

| Index   | Name           | Object Type   | Data Type   |
|---------|----------------|---------------|-------------|
| 2003 h  | Drive settings | Variable      | Record      |

Entry Description

|   Sub- index | Name                     | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|--------------------------|---------------|-------|-------|-----------|--------|----------|
|            1 | Ramp type                | no            |     0 |     1 |         0 | -      | RW       |
|            2 | Motor direction          | no            |     0 |     1 |         0 | -      | RW       |
|            3 | Commutation mode         | no            |     0 |     5 |         0 | -      | RW       |
|            4 | Peripherals              | no            |     0 |    63 |        34 | -      | RW       |
|            5 | Current sensor selection | no            |     0 |     0 |         0 | -      | RO       |
|            6 | Maximum current          | no            |     0 | 10000 |      4000 | mA     | RW       |
|            7 | PWMscheme                | no            |     0 |     1 |         0 | -      | RW       |
|            8 | PWMfrquency              | no            |     0 |     5 |         0 | -      | RW       |
|            9 | PWMdead time             | no            |     0 |   255 |         1 | ms     | RW       |

Table 42: Entry Description (2003h)

<!-- image -->

Parameter

Description

Table 43: Parameter Description (2003h)

| Ramp type        | Select a ramp type between linear and s shaped ramp 0. Linear ramp 1. S-shaped ramp                                                                       |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Motor direction  | Used for reversing motor shaft direction 0. Rotate clockwise 1. Rotate counter clockwise                                                                  |
| Commutation mode | Select commutation mode based on the sensor used 0: Disabled 1: Open loop 2: Digital hall(foc) 3: Digital hall (Block) 4: ABN encoder 5: Absolute encoder |
| PWMscheme        | Select the PWMscheme 0. Center alligned 1. Down counting                                                                                                  |
| PWMfrequency     | Select the desired PWMfrequency(Hz) 0. 20000 1. 40000 2. 60000 3. 80000 4. 100000 5. 120000                                                               |

## 7.1.3 Object 2005 h : ADC Settings

Using this object, the ADC offsets for the coil current measurement can be con/uniFB01gured. This is necessary for each new motor type.

Object Description

| Index   | Name         | Object Type   | Data Type   |
|---------|--------------|---------------|-------------|
| 2005 h  | ADC settings | Variable      | Record      |

Table 44: Object Description (2005h)

<!-- image -->

Entry Description

Table 45: Entry Description (2005h)

|   Sub- index | Name         | PDO Mapping   |    Min |   Max |   Default | Unit   | Access   |
|--------------|--------------|---------------|--------|-------|-----------|--------|----------|
|            1 | ADC_u_raw    | no            |      0 |  4095 |         0 | -      | RO       |
|            2 | ADC_v_raw    | no            |      0 |  4095 |         0 | -      | RO       |
|            3 | ADC_w_raw    | no            |      0 |  4095 |         0 | -      | RO       |
|            4 | ADC_u_offset | no            |      0 |  4095 |      2047 | -      | RW       |
|            5 | ADC_v_offset | no            |      0 |  4095 |      2047 | -      | RW       |
|            6 | ADC_w_offset | no            |      0 |  4095 |      2047 | -      | RW       |
|            7 | ADC_u        | no            | -32768 | 32767 |         0 | -      | RO       |
|            8 | ADC_v        | no            | -32768 | 32767 |         0 | -      | RO       |
|            9 | ADC_w        | no            | -32768 | 32767 |         0 | -      | RO       |

## 7.1.4 Object 200A h : Open Loop Settings

This object deals with the open loop settings such as commutation angle, current velocity, and position.

Object Description

Table 46: Object Description (200Ah)

| Index   | Name               | Object Type   | Data Type   |
|---------|--------------------|---------------|-------------|
| 200A h  | Open loop settings | Variable      | Record      |

Entry Description

Table 47: Entry Description (200Ah)

|   Sub- index | Name              | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|-------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Commutation angle | no            |      -32768 |      32767 |         0 | -      | RO       |
|            2 | Current           | no            |           0 |      10000 |      2000 | mA     | RW       |
|            3 | Velocity          | no            | -2147483648 | 2147483648 |         0 | -      | RO       |
|            4 | Position          | no            | -2147483648 | 2147483648 |         0 | -      | RW       |

## 7.1.5 Object 200F h : Digital Hall Settings

This object relates to the digital hall sensor settings. It has parameters used to initialize the hall sensor and run the motor using hall sensor as commutation mode.

<!-- image -->

Object Description

Table 48: Object Description (200Fh)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 200F h  | Digital hall settings | Variable      | Record      |

Entry Description

|   Sub- index | Name                                 | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|--------------------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Sector offset                        | no            |           0 |          5 |         0 | -      | RW       |
|            2 | Direction                            | no            |           0 |          1 |         0 | -      | RW       |
|            3 | Interpolation                        | no            |           0 |          1 |         0 | -      | RW       |
|            4 | Offset                               | no            |      -32768 |      32767 |         0 | -      | RW       |
|            5 | Inputs                               | no            |           0 |          7 |         0 | -      | RO       |
|            6 | Identify trigger con/uniFB01guration | no            |           0 |          2 |         0 | -      | RW       |
|            7 | Commutation angle                    | no            |      -32768 |      32767 |         0 | -      | RO       |
|            8 | Open Loop angle difference           | no            |      -32768 |      32767 |         0 | -      | RO       |
|            9 | Velocity                             | no            | -2147483648 | 2147483648 |         0 | -      | RO       |
|           10 | Position                             | no            | -2147483648 | 2147483648 |         0 | -      | RW       |

Table 49: Entry Description (200Fh)

<!-- image -->

Parameter

Description

Table 50: Parameter Description (200Fh)

| Sector offset                        | Select the sector offset for con/uniFB01guring hall sensor (degrees) 0. 0 1. 60 2. 120 3. 180                                               |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Direction                            | 5. 300 Hall sensor direction 0. Standard 1. Inverted                                                                                        |
| Interpolation                        | Hall sensor interpolation 0. Off 1. On                                                                                                      |
| Identify trigger con/uniFB01guration | Select the method for identifying trigger con/uniFB01guration of hall sensor 0: Standby 1: Direction estimation 2: Sector offset estimation |

## 7.1.6 Object 2014 h : ABN Encoder Settings

This object relates to the ABN encoder settings. It has parameters to initialize the ABN encoder and run the motor using ABN encoder as commutation mode.

Object Description

| Index   | Name                 | Object Type   | Data Type   |
|---------|----------------------|---------------|-------------|
| 2014 h  | ABN encoder settings | Variable      | Record      |

Table 51: Object Description (2014h)

<!-- image -->

Entry Description

|   Sub- index | Name                       | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|----------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Steps                      | no            |           0 |    1050000 |      4096 | -      | RW       |
|            2 | Direction                  | no            |           0 |          1 |         0 | -      | RW       |
|            3 | Offset                     | no            |           0 |    1050000 |         0 | -      | RW       |
|            4 | Clear on null              | no            |           0 |          1 |         0 | -      | WO       |
|            5 | Clear once                 | no            |           0 |          1 |         0 | -      | WO       |
|            6 | Init mode                  | no            |           0 |          5 |         0 | -      | RW       |
|            7 | Init state                 | no            |           0 |          3 |         0 | -      | RO       |
|            8 | Init delay                 | no            |           0 |      10000 |      1000 | ms     | RW       |
|            9 | Init velocity              | no            |     -200000 |     200000 |         0 | rpm    | RW       |
|           10 | Inputs                     | no            |           0 |          7 |         0 | -      | RO       |
|           11 | Encoder value              | no            | -2147483648 | 2147483648 |         0 | -      | RO       |
|           12 | Sensor side                | no            |           0 |          1 |         0 | -      | RW       |
|           13 | Commutation angle          | no            |      -32768 |      32767 |         0 | -      | RO       |
|           14 | Open loop angle difference | no            |      -32768 |      32767 |         0 | -      | RO       |
|           15 | Velocity                   | no            | -2147483648 | 2147483648 |         0 | -      | RO       |
|           16 | Position                   | no            | -2147483648 | 2147483648 |         0 | -      | RW       |
|           17 | Linear resolution          | no            |           1 |      65535 |       500 | nm     | RW       |

Table 52: Entry Description (2014h)

<!-- image -->

Parameter

Description

Table 53: Parameter Description (2014h)

| Direction   | ABN encoder direction 0. Standard 1. Inverted                                                                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Init mode   | Select the method for initialization of ABN encoder 0. Estimate offset 1. Estimate offset (Shake) 2. Use offset 3. Use hall 4. Estimate offset (OL) 5. Estimate offset (Linear) |
| Sensor side | Select where the encoder is connected 0: Disabled 1: Motor side                                                                                                                 |

## 7.1.7 Object 2015 h : ABN Encoder 2 Settings

This object relates to the second ABN encoder settings. It has parameters used to initialize second ABN encoder and run the motor with second ABN encoder as a backup encoder.

Object Description

| Index   | Name                   | Object Type   | Data Type   |
|---------|------------------------|---------------|-------------|
| 2015 h  | ABN encoder 2 settings | Variable      | Record      |

Table 54: Object Description (2015h)

<!-- image -->

Entry Description

Table 55: Entry Description (2015h)

|   Sub- index | Name              | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|-------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Steps             | no            |           0 |      65535 |      4096 | -      | RW       |
|            2 | Direction         | no            |           0 |          1 |         0 | -      | RW       |
|            3 | Inputs            | no            |           0 |          7 |         0 | -      | RO       |
|            4 | Sensor side       | no            |           0 |          2 |         0 | -      | RW       |
|            5 | Commutation angle | no            |      -32768 |      32767 |         0 | -      | RO       |
|            6 | Velocity          | no            | -2147483648 | 2147483648 |         0 | -      | RO       |
|            7 | Position          | no            | -2147483648 | 2147483648 |         0 | -      | RW       |

Description

Table 56: Parameter Description (2015h)

| Direction   | ABN 2 encoder direction 0. Standard 1. Inverted                              |
|-------------|------------------------------------------------------------------------------|
| Sensor side | Select where the encoder is connected 0: Disabled 1: Motor side 2: Load side |

## 7.1.8 Object 2019 h : Absolute Encoder Settings

This object relates to the absolute encoder settings. It has parameters to initialize the absolute encoder and run the motor using the absolute encoder as commutation mode.

Object Description

Table 57: Object Description (2019h)

| Index   | Name                      | Object Type   | Data Type   |
|---------|---------------------------|---------------|-------------|
| 2019 h  | Absolute encoder settings | Variable      | Record      |

Parameter

<!-- image -->

Entry Description

Table 58: Entry Description (2019h)

|   Sub- index | Name                       | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|----------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Type                       | no            |           0 |          2 |         0 | -      | RW       |
|            2 | Init mode                  | no            |           0 |          2 |         0 | -      | RW       |
|            3 | Direction                  | no            |           0 |          1 |         0 | -      | RW       |
|            4 | Offset                     | no            |      -32768 |      32767 |         0 | -      | RW       |
|            5 | Sensor side                | no            |           0 |          2 |         0 | -      | RW       |
|            6 | Commutation angle          | no            |      -32768 |      32767 |         0 | -      | RO       |
|            7 | Open loop angle difference | no            |      -32768 |      32767 |         0 | -      | RO       |
|            8 | Velocity                   | no            | -2147483648 | 2147483648 |         0 | -      | RO       |
|            9 | Position                   | no            | -2147483648 | 2147483648 |         0 | -      | RW       |

Description

Table 59: Parameter Description (2019h)

| Type        | Select the absolute encoder connected 0. Disabled 1. AM4096 2. IC MU_150                                             |
|-------------|----------------------------------------------------------------------------------------------------------------------|
| Direction   | Absolute encoder direction 0. Standard 1. Inverted                                                                   |
| Init mode   | Select the method for initialization of absolute encoder 0. Estimate offset 1. Estimate offset (shake) 2. Use offset |
| Sensor side | Select where the encoder is connected 0: Disabled 1: Motor side 2: Load side                                         |

Parameter

<!-- image -->

## 7.1.9 Object 201E h : Torque Mode

Object Description

Table 60: Object Description (201Eh)

| Index   | Name                 | Object Type   | Data Type   |
|---------|----------------------|---------------|-------------|
| 201E h  | Torque mode settings | Variable      | Record      |

Entry Description

Table 61: Entry Description (201Eh)

|   Sub- index | Name                | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Target /uniFB02ux   | no            |      -10000 |      10000 |         0 | mA     | RW       |
|            2 | Actual /uniFB02ux   | no            | -2147483648 | 2147483647 |         0 | mA     | RO       |
|            3 | P                   | no            |           0 |      32767 |       300 | -      | RW       |
|            4 | I                   | no            |           0 |      32767 |       600 | -      | RW       |
|            5 | Torque PI error sum | no            | -2147483648 | 2147483647 |         0 | -      | RO       |
|            6 | Flux PI error sum   | no            | -2147483648 | 2147483647 |         0 | -      | RO       |
|            7 | Torque PI error     | no            | -2147483648 | 2147483647 |         0 | -      | RO       |
|            8 | Flux PI error       | no            | -2147483648 | 2147483647 |         0 | -      | RO       |

Description

Table 62: Parameter Description (201Eh)

| P   | P parameter for the torque PI controller.   |
|-----|---------------------------------------------|
| I   | I parameter for the torque PI controller.   |

## 7.1.10 Object 2023 h : Velocity Mode

Object Description

Table 63: Object Description (2023h)

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 2023 h  | Velocity mode | Variable      | Record      |

Parameter

<!-- image -->

Entry Description

Table 64: Entry Description (2023h)

|   Sub- index | Name             | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Sensor selection | no            |           0 |          4 |         0 | -      | RW       |
|            2 | Unit selection   | no            |           0 |          1 |         0 | -      | RW       |
|            3 | Halted velocity  | no            |           0 |     200000 |         0 | rpm    | RW       |
|            4 | P                | no            |           0 |      32767 |       600 | -      | RW       |
|            5 | I                | no            |           0 |      32767 |       300 | -      | RW       |
|            6 | PI error sum     | no            | -2147483648 | 2147483647 |         0 | -      | RO       |
|            7 | PI error         | no            | -2147483648 | 2147483647 |         0 | -      | RO       |

Description

Table 65: Parameter Descritption (2023h)

| P                | P parameter for the velocity PI controller.                                                                                                                      |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| I                | I parameter for the velocity PI controller.                                                                                                                      |
| Sensor selection | Select a commutation mode that /uniFB01ts best to the motor's sensors. 0: Same as commutation 1: Hall sensor 2. ABN encoder 3. ABN encoder 2 4. Absolute encoder |
| Unit selection   | Select mechanical or electrical velocity unit. 0. Mechanical rpm 1. Electrical rpm                                                                               |
| Halted velocity  | If the actual velocity is below this value, the motor halted /uniFB02ag is set.                                                                                  |

## 7.1.11 Object 2028 h : Position Mode

Object Description

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 2028 h  | Position mode | Variable      | Record      |

Table 66: Object Description (2028h)

Parameter

<!-- image -->

Entry Description

Table 67: Entry Description (2028h)

|   Sub- index | Name                      | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Sensor selection          | no            |           0 |          4 |         0 | -      | RW       |
|            2 | Position reached distance | no            |           0 |     100000 |         0 | -      | RW       |
|            3 | P                         | no            |           0 |      32767 |        20 | -      | RW       |
|            4 | PI error                  | no            | -2147483648 | 2147483647 |         0 | -      | RO       |

Description

Table 68: Parameter Description (2028h)

| P                | P parameter for the velocity PI controller.                                                                                                                      |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sensor selection | Select a commutation mode that /uniFB01ts best to the motor's sensors. 0: Same as commutation 1: Hall sensor 2. ABN encoder 3. ABN encoder 2 4. Absolute encoder |

## 7.1.12 Object 202B h : Gearbox

This object deals with the gearbox and is used to include a gear ratio at the output. This can be rotary to rotary or rotary to linear.

Object Description

Table 69: Object Description (202Bh)

| Index   | Name    | Object Type   | Data Type   |
|---------|---------|---------------|-------------|
| 202B h  | Gearbox | Variable      | Record      |

Parameter

<!-- image -->

Entry Description

Table 70: Entry Description (202Bh)

|   Sub- index | Name               | PDO Mapping   |   Min |        Max |   Default | Unit   | Access   |
|--------------|--------------------|---------------|-------|------------|-----------|--------|----------|
|            1 | Transmission type  | no            |     0 |          1 |         0 | -      | RW       |
|            2 | Motor displacement | no            |     1 | 2147483647 |         1 | -      | RW       |
|            3 | Load displacement  | no            |     1 | 2147483647 |         1 | -      | RW       |
|            4 | Invert direction   | no            |     0 |          1 |         0 | -      | RW       |

Description

Table 71: Parameter Description (202Bh)

| Transmission type   | Select the transmission type from rotary to linear or rotary 0: Rotary to rotary 1: Rotary to linear   |
|---------------------|--------------------------------------------------------------------------------------------------------|
| Invert direction    | Use this sub object to invert the direction of gearbox 0. Off 1. On                                    |

Parameter

## 7.1.13 Object 202D h : IIT

Object Description

| Index   | Name   | Object Type   | Data Type   |
|---------|--------|---------------|-------------|
| 202D h  | IIT    | Variable      | Record      |

Table 72: Object Description (202Dh)

<!-- image -->

Entry Description

Table 73: Entry Description (202Dh)

|   Sub- index | Name                            | PDO Mapping   |   Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------------------|---------------|-------|------------|-----------|--------|----------|
|            1 | Thermal winding time constant 1 | no            |  1000 |      60000 |     30000 | ms     | RW       |
|            2 | Limit 1                         | no            |     0 |   54000000 |  10300000 | -      | RW       |
|            3 | Sum 1                           | no            |     0 | 4294967295 |         0 | -      | RO       |
|            4 | Thermal winding time constant 2 | no            |  1000 |      60000 |     30000 | ms     | RW       |
|            5 | Limit 2                         | no            |     0 |   54000000 |  10300000 | -      | RW       |
|            6 | Sum 2                           | no            |     0 | 4294967295 |         0 | -      | RO       |
|            7 | Clear exceeded /uniFB02ags      | no            |     0 |          1 |         0 | -      | RW       |

This object is used to set the position and velocity windows and to clear the windows in case of an error.

## 7.1.14 Object 2032 h : Windows

Object Description

Table 74: Object Description (2032h)

| Index   | Name    | Object Type   | Data Type   |
|---------|---------|---------------|-------------|
| 2032 h  | Windows | Variable      | Record      |

Entry Description

|   Sub- index | Name                        | PDO Mapping   |   Min |        Max |   Default | Unit   | Access   |
|--------------|-----------------------------|---------------|-------|------------|-----------|--------|----------|
|            1 | Velocity window             | no            |     0 |     200000 |       500 | -      | RW       |
|            2 | Clear velocity window error | no            |     0 |          1 |         0 | -      | RW       |
|            3 | Position window             | no            |     0 | 2147483647 |   1638400 | -      | RW       |
|            4 | Clear position window error | no            |     0 |          1 |         0 | -      | RW       |

Table 75: Entry Description (2032h)

<!-- image -->

## 7.1.15 Object 2037 h : Ramp

Object Description

Table 76: Object Description (2037h)

| Index   | Name   | Object Type   | Data Type   |
|---------|--------|---------------|-------------|
| 2037 h  | Ramp   | Variable      | Record      |

Entry Description

Table 77: Entry Description (2037h)

| Sub- index   | Name            | PDO Mapping   | Min         | Max        | Default   | Unit   | Access   |
|--------------|-----------------|---------------|-------------|------------|-----------|--------|----------|
| 1            | Enable          | no            | 0           | 1          | 0         | -      | RW       |
| 2            | Enable velocity | no            | 0           | 1          | 0         | -      | RW       |
|              | feed forward    |               |             |            |           |        |          |
| 3            | Acceleration    | no            | 0           | 200000     | 0         | rpm/s  | RO       |
| 4            | Velocity        | no            | -200000     | 200000     | 0         | rpm    | RO       |
| 5            | Position        | no            | -2147483648 | 2147483647 | 0         | -      | RO       |

This object deals with the homing routine.

## 7.1.16 Object 203C h : Homing

Object Description

| Index   | Name   | Object Type   | Data Type   |
|---------|--------|---------------|-------------|
| 203C h  | Homing | Variable      | Record      |

Table 78: Object Description (203Ch)

<!-- image -->

Entry Description

Table 79: Entry Description (203Ch)

|   Sub- index | Name                 | PDO Mapping   |   Min |        Max |   Default | Unit   | Access   |
|--------------|----------------------|---------------|-------|------------|-----------|--------|----------|
|            1 | State                | no            |     0 |        255 |         0 | -      | RO       |
|            2 | Position offset CW   | no            |     0 | 4294967295 |     40000 | -      | RW       |
|            3 | Position offset CCW  | no            |     0 | 4294967295 |     40000 | -      | RW       |
|            4 | Current threshold    | no            |     0 |      10000 |      2000 | mA     | RW       |
|            5 | Teach position limit | no            |     0 |          3 |         0 | -      | RW       |

## 7.1.17 Object 2041 h : Filter target torque

This object is used to con/uniFB01gure /uniFB01lter for target torque.

Object Description

Table 80: Object Description (2041h)

| Index   | Name                 | Object Type   | Data Type   |
|---------|----------------------|---------------|-------------|
| 2041 h  | Filter target torque | Variable      | Record      |

Entry Description

|   Sub- index | Name                      | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Filter type               | no            |           0 |          2 |         1 | -      | RW       |
|            2 | Average /uniFB01lter size | no            |           1 |          8 |         1 | -      | RW       |
|            3 | Biquad coeff a1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            4 | Biquad coeff a2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            5 | Biquad coeff b0           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            6 | Biquad coeff b1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            7 | Biquad coeff b2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |

Table 81: Entry Description (2041h)

<!-- image -->

Parameter

Description

Table 82: Parameter Description (2041h)

| Filter type   | Select the /uniFB01lter type 0: Disabled 1: Average 2. Biquad   |
|---------------|-----------------------------------------------------------------|

## 7.1.18 Object 2046 h : Filter Actual Torque

This object is used to con/uniFB01gure the /uniFB01lter for actual torque.

Object Description

Table 83: Object Description (2046h)

| Index   | Name                 | Object Type   | Data Type   |
|---------|----------------------|---------------|-------------|
| 2046 h  | Filter actual torque | Variable      | Record      |

Entry Description

Table 84: Entry Description (2046h)

|   Sub- index | Name                      | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Filter type               | no            |           0 |          2 |         1 | -      | RW       |
|            2 | Average /uniFB01lter size | no            |           1 |          8 |         1 | -      | RW       |
|            3 | Biquad coeff a1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            4 | Biquad coeff a2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            5 | Biquad coeff b0           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            6 | Biquad coeff b1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            7 | Biquad coeff b2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |

Table 85: Parameter Description (2046h)

| Filter type   | Select the /uniFB01lter type 0: Disabled 1: Average 2. Biquad   |
|---------------|-----------------------------------------------------------------|

Parameter

Description

<!-- image -->

## 7.1.19 Object 204B h : Filter Target Velocity

This object is used to con/uniFB01gure the /uniFB01lter for target velocity.

Object Description

Table 86: Object Description (204Bh)

| Index   | Name                   | Object Type   | Data Type   |
|---------|------------------------|---------------|-------------|
| 204B h  | Filter target velocity | Variable      | Record      |

Entry Description

Table 87: Entry Description (204Bh)

|   Sub- index | Name                      | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Filter type               | no            |           0 |          2 |         1 | -      | RW       |
|            2 | Average /uniFB01lter size | no            |           1 |          8 |         1 | -      | RW       |
|            3 | Biquad coeff a1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            4 | Biquad coeff a2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            5 | Biquad coeff b0           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            6 | Biquad coeff b1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            7 | Biquad coeff b2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |

Table 88: Parameter Description (204Bh)

| Filter type   | Select the /uniFB01lter type 0: Disabled 1: Average 2. Biquad   |
|---------------|-----------------------------------------------------------------|

## 7.1.20 Object 2050 h : Filter Actual Velocity

This object is used to con/uniFB01gure the /uniFB01lter for actual velocity.

Object Description

Table 89: Object Description (2050h)

| Index   | Name                   | Object Type   | Data Type   |
|---------|------------------------|---------------|-------------|
| 2050 h  | Filter actual velocity | Variable      | Record      |

Parameter

Description

<!-- image -->

Entry Description

Table 90: Entry Description (2050h)

|   Sub- index | Name                      | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Filter type               | no            |           0 |          2 |         1 | -      | RW       |
|            2 | Average /uniFB01lter size | no            |           1 |          8 |         1 | -      | RW       |
|            3 | Biquad coeff a1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            4 | Biquad coeff a2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            5 | Biquad coeff b0           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            6 | Biquad coeff b1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            7 | Biquad coeff b2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |

Table 91: Parameter Description (2050h)

| Filter type   | Select the /uniFB01lter type 0: Disabled 1: Average 2. Biquad   |
|---------------|-----------------------------------------------------------------|

## 7.1.21 Object 2055 h : Filter Target Position

This object is used to con/uniFB01gure the /uniFB01lter for target position.

Object Description

Table 92: Object Description (2055h)

| Index   | Name                   | Object Type   | Data Type   |
|---------|------------------------|---------------|-------------|
| 2055 h  | Filter target position | Variable      | Record      |

Parameter

Description

<!-- image -->

Entry Description

Table 93: Entry Description (2055h)

|   Sub- index | Name                      | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Filter type               | no            |           0 |          2 |         1 | -      | RW       |
|            2 | Average /uniFB01lter size | no            |           1 |          8 |         1 | -      | RW       |
|            3 | Biquad coeff a1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            4 | Biquad coeff a2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            5 | Biquad coeff b0           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            6 | Biquad coeff b1           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |
|            7 | Biquad coeff b2           | no            | -2147483648 | 2147483647 |         0 | -      | RW       |

Description

Parameter

| Filter type   | Select the /uniFB01lter type 0: Disabled 1: Average 2. Biquad   |
|---------------|-----------------------------------------------------------------|

## 7.1.22 Object 205A h : Mechanical Brake

This object is used to set up and use the mechanical brake.

Object Description

| Index   | Name             | Object Type   | Data Type   |
|---------|------------------|---------------|-------------|
| 205A h  | Mechanical brake | Variable      | Record      |

Table 94: Object Description (205Ah)

<!-- image -->

Entry Description

Table 95: Entry Description (205Ah)

|   Sub- index | Name                 | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|----------------------|---------------|-------|-------|-----------|--------|----------|
|            1 | Release brake        | no            |     0 |     1 |         0 | -      | RW       |
|            2 | Releasing duty cycle | no            |     0 |   100 |        75 | %      | RW       |
|            3 | Holding duty cycle   | no            |     0 |   100 |        11 | %      | RW       |
|            4 | Releasing duration   | no            |     0 | 65535 |      1000 | ms     | RW       |
|            5 | Enable brake output  | no            |     0 |     1 |         0 | -      | RW       |
|            6 | Invert brake output  | no            |     0 |     1 |         0 | -      | RW       |
|            7 | Supply voltage       | no            |     0 | 65535 |       240 | 0.1V   | RW       |
|            8 | Resistance           | no            |     0 | 65535 |       440 | mΩ     | RW       |

Description

Table 96: Parameter Description (205Ah)

| Release brake       | Use this sub object to switch the brake PWMfunctionality 0. Brake PWMdeactivated 1. Brake PWMactivated   |
|---------------------|----------------------------------------------------------------------------------------------------------|
| Enable brake output | Use this sub object to switch the brake functionality 0. Brake deactivated 1. Brake activated            |

## 7.1.23 Object 205F h : Brake Chopper

This object deals with setting up and using the brake chopper.

Object Description

Table 97: Object Description (205Fh)

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 205F h  | Brake chopper | Variable      | Record      |

Parameter

<!-- image -->

Entry Description

|   Sub- index | Name           | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|----------------|---------------|-------|-------|-----------|--------|----------|
|            1 | Enable         | no            |     0 |     1 |         0 | -      | RW       |
|            2 | Voltage limit  | no            |    50 |  1000 |       300 | 0.1V   | RW       |
|            3 | Hysterisis     | no            |     0 |    50 |         5 | 0.1V   | RW       |
|            4 | Type           | no            |     0 |     1 |         0 | -      | RW       |
|            5 | Active         | no            |     0 |     1 |         0 | -      | RW       |
|            6 | Supply voltage | no            |     0 | 65535 |       240 | 0.1V   | RW       |
|            7 | Resistance     | no            |     0 | 65535 |     22000 | mΩ     | RW       |

Table 98: Entry Description (205Fh)

| Type   | Select the brake chopper type 0. PWMbraking 1. Shunt braking   |
|--------|----------------------------------------------------------------|

Description

Table 99: Parameter Description (205Fh)

## 7.1.24 Object 2064 h : Reference Switch

Object Description

Table 100: Object Description (2064h)

| Index   | Name             | Object Type   | Data Type   |
|---------|------------------|---------------|-------------|
| 2064 h  | Reference switch | Variable      | Record      |

Entry Description

Table 101: Entry Description (2064h)

|   Sub- index | Name     | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|----------|---------------|-------|-------|-----------|--------|----------|
|            1 | Enable   | no            |     0 |     3 |         0 | -      | RW       |
|            2 | Polarity | no            |     0 |     3 |         0 | -      | RW       |

Parameter

<!-- image -->

## 7.1.25 Object 2069 h : Monitoring

Object Description

Table 102: Object Description (2069h)

| Index   | Name       | Object Type   | Data Type   |
|---------|------------|---------------|-------------|
| 2069 h  | Monitoring | Variable      | Record      |

Entry Description

Table 103: Entry Description (2069h)

|   Sub- index | Name                         | PDO Mapping   |   Min |        Max |   Default | Unit   | Access   |
|--------------|------------------------------|---------------|-------|------------|-----------|--------|----------|
|            1 | Status /uniFB02ags           | no            |     0 | 4294967295 |         0 | -      | RO       |
|            2 | Supply voltage               | no            |     0 |       1000 |         0 | 0.1V   | RO       |
|            3 | Supply voltage threshold     | no            |     0 |       1000 |       480 | 0.1V   | RW       |
|            4 | Driver temperature           | no            |   -20 |        150 |         0 | ° C    | RO       |
|            5 | Driver temperature threshold | no            |   -20 |        150 |         0 | ° C    | RW       |

## 7.1.26 Object 206B h : Lower Velocity PI

Object Description

Table 104: Object Description (206Bh)

| Index   | Name              | Object Type   | Data Type   |
|---------|-------------------|---------------|-------------|
| 206B h  | Lower velocity PI | Variable      | Record      |

Entry Description

|   Sub- index | Name                | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|---------------------|---------------|-------|-------|-----------|--------|----------|
|            1 | Switchover velocity | no            |     0 | 32767 |         0 | rpm    | RW       |
|            2 | Lower velocity P    | no            |     0 | 32767 |       600 | -      | RW       |
|            3 | Lower velocity I    | no            |     0 | 32767 |       300 | -      | RW       |

Table 105: Entry Description (206Bh)

<!-- image -->

## 7.1.27 Object 206C h : Linear Drive Settings

Object Description

Table 106: Object Description (206Ch)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 206C h  | Linear drive settings | Variable      | Record      |

Entry Description

Table 107: Entry Description (206Ch)

|   Sub- index | Name             | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|------------------|---------------|-------------|------------|-----------|--------|----------|
|            1 | Ramp velocity    | no            | -2147483647 | 2147483647 |         0 | µ m/s  | RO       |
|            2 | Ramp position    | no            | -2147483647 | 2147483647 |         0 | µ m    | RW       |
|            3 | Velocity window  | no            |           0 |   10000000 |    125000 | µ m/s  | RW       |
|            4 | Position window  | no            |           0 | 4294967295 |    500000 | µ m    | RW       |
|            5 | Catchup velocity | no            |           0 |   10000000 |         0 | µ m/s  | RW       |

## 7.1.28 Object 206D h : Driver Status

This object deals with the error handling for the driver.

Object Description

Table 108: Object Description (206Dh)

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 206D h  | Driver status | Variable      | Record      |

Entry Description

|   Sub- index | Name                          | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|-------------------------------|---------------|-------|-------|-----------|--------|----------|
|            1 | Driver status /uniFB02ag      | no            |     0 | 65535 |         0 | -      | RO       |
|            2 | Clear driver error /uniFB02ag | no            |     0 |     1 |         0 | -      | RW       |

Table 109: Entry Description (206Dh)

<!-- image -->

## 7.1.29 Object 206E h : Controller Initialize

Object Description

Table 110: Object Description (206Eh)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 206E h  | Controller initialize | Variable      | Record      |

Entry Description

Table 111: Entry Description (206Eh)

|   Sub- index | Name                  | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|-----------------------|---------------|-------|-------|-----------|--------|----------|
|            0 | Controller initialize | no            |     0 |     1 |         0 | -      | RW       |

## 7.1.30 Object 207D h : Switch Parameters

Object Description

Table 112: Object Description (207Dh)

| Index   | Name              | Object Type   | Data Type   |
|---------|-------------------|---------------|-------------|
| 207D h  | Switch parameters | Variable      | Record      |

Entry Description

Table 113: Entry Description (207Dh)

|   Sub- index | Name              | PDO Mapping   |   Min |        Max |   Default | Unit   | Access   |
|--------------|-------------------|---------------|-------|------------|-----------|--------|----------|
|            0 | Switch parameters | no            |     0 | 4294967295 |         0 | -      | RW       |

## 7.1.31 Object 2082 h : Home Offset Display

Object Description

| Index   | Name                | Object Type   | Data Type   |
|---------|---------------------|---------------|-------------|
| 2082 h  | Home offset display | Variable      | INTEGER32   |

Table 114: Object Description (2082h)

<!-- image -->

Entry Description

Table 115: Entry Description (2082h)

|   Sub- index | Name                | PDO Mapping   |         Min |        Max |   Default | Unit   | Access   |
|--------------|---------------------|---------------|-------------|------------|-----------|--------|----------|
|            0 | Home offset display | no            | -2147483648 | 2147483647 |         0 | -      | RW       |

## 7.1.32 Object 2702 h : Device Digital Inputs

Bit De/uniFB01nitions

Table 116: Bit De/uniFB01nitions (2702 h )

|   Bit | Description   |
|-------|---------------|
|     0 | REF_R         |
|     1 | REF_L         |

Object Description

Table 117: Object Description (2702h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 2702 h  | Device digital inputs | Variable      | UNSIGNED32  |

Entry Description

Table 118: Entry Description (2702h)

|   Sub- index | Name                  | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|-----------------------|---------------|-------|-------|-----------|--------|----------|
|            0 | Device digital inputs | no            |     0 |     3 |         0 | -      | R        |

## 7.1.33 Object 270E h : Device Analog Inputs

Object Description

| Index   | Name                 | Object Type   | Data Type   |
|---------|----------------------|---------------|-------------|
| 270E h  | Device analog inputs | Variable      | Record      |

Table 119: Object Description (270Eh)

<!-- image -->

Entry Description

Table 120: Entry Description (270Eh)

|   Sub- index | Name            | PDO Mapping   |   Min |   Max |   Default | Unit   | Access   |
|--------------|-----------------|---------------|-------|-------|-----------|--------|----------|
|            1 | ADC_u           | no            |     0 |  4095 |         0 |        | R        |
|            2 | ADC_v           | no            |     0 |  4095 |         0 |        | R        |
|            3 | ADC_w           | no            |     0 |  4095 |         0 |        | R        |
|            4 | ADC voltage     | no            |     0 |  4095 |         0 |        | R        |
|            5 | ADC temperature | no            |     0 |  4095 |         0 |        | R        |
|            6 | ADC ain         | no            |     0 |  4095 |         0 |        | R        |

ADC value of the analog input pins AIN0 to AIN2, as well as ADC values of some on-board voltages.

<!-- image -->

## 8 Pro/uniFB01le Speci/uniFB01c Area

The following operating modes (selectable through object 6060 h , see 8.1.6) are implemented on the TMCM-1690:

The pro/uniFB01le segment contains CiA-402 standard motion control objects. These objects control the motion control functions of the TMCM-1690. Since it is not possible to operate the modes in parallel, activate the required function by selecting a mode of operation. The control device writes to the modes of operation object to select the operation mode. The drive device provides the modes of operation display object to indicate the actual activated operation mode. Controlword, statusword, and set-points are used mode-speci/uniFB01c. This implies the responsibility of the control device to avoid inconsistencies and erroneous behavior.

- Pro/uniFB01le position mode (pp)
- Homing mode (hm)
- Pro/uniFB01le velocity mode (pv)
- Cyclic position mode (csp)
- Cyclic torque mode (cst)
- Cyclic velocity mode (csv)

## 8.1 Detailed Object Speci/uniFB01cations

This object indicates what action is performed when the quick stop function is executed. The slow down ramp is the deceleration value of the used mode of operation. The following quick stop option codes are supported in the current version of the CANopen /uniFB01rmware:

## 8.1.1 Object 605A h : Quick Stop Option Code

Value De/uniFB01nition

Table 121: Value Description (605Ah)

|   Value | De/uniFB01nition                                                 |
|---------|------------------------------------------------------------------|
|       1 | Slow down on slow down ramp and transit into switch on disabled  |
|       2 | Slow down on quick stop ramp and transit into switch on disabled |
|       5 | Slow down on slow down ramp and stay in quick stop active        |
|       6 | Slow down on quick stop ramp and stay in quick stop active       |

Object Description

| Index   | Name                   | Object Type   | Data Type   |
|---------|------------------------|---------------|-------------|
| 605A h  | Quick Stop Option Code | Variable      | SIGNED16    |

Table 122: Object Description (605Ah)

<!-- image -->

Entry Description

Table 123: Entry Description (605Ah)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | 1/2/5/6       |               2 |

## 8.1.2 Object 605B h : Shutdown Option Code

This object indicates what action is performed if there is a transition from operation enabled state to ready to switch on state . The shutdown option code always has the value 0 as only this is supported.

Value De/uniFB01nition

Table 124: Value Description (605Bh)

|   Value | De/uniFB01nition                                    |
|---------|-----------------------------------------------------|
|       0 | Disable drive function (switch off the power stage) |

Object Description

Table 125: Object Description (605Bh)

| Index   | Name                 | Object Type   | Data Type   |
|---------|----------------------|---------------|-------------|
| 605B h  | Shutdown Option Code | Variable      | SIGNED16    |

Entry Description

Table 126: Entry Description (605Bh)

|   Sub-index | Access   | PDO Mapping   |   Value Range |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            |             0 |               0 |

## 8.1.3 Object 605C h : Disable Operation Option Code

This object indicates what action is performed if there is a transition from operation enabled state to switched on state. The disable operation option code always has the value 1 as only this is supported. The slow down ramp is the deceleration value of the used mode of operation.

Value De/uniFB01nition

|   Value | De/uniFB01nition            |
|---------|-----------------------------|
|       1 | Slow down on slow down ramp |

Table 127: Value Description (605Ch)

<!-- image -->

Object Description

Table 128: Object Description (605Ch)

| Index   | Name                          | Object Type   | Data Type   |
|---------|-------------------------------|---------------|-------------|
| 605C h  | Disable Operation Option Code | Variable      | SIGNED16    |

Entry Description

Table 129: Entry Description (605Ch)

|   Sub-index | Access   | PDO Mapping   |   Value Range |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            |             1 |               1 |

## 8.1.4 Object 605D h : Halt Option Code

This object indicates what action is performed when the halt function is executed. The slow down ramp is the deceleration value of the used mode of operation.

Value De/uniFB01nition

Table 130: Value Description (605Dh)

|   Value | De/uniFB01nition                                          |
|---------|-----------------------------------------------------------|
|       1 | Slow down on slow down ramp and stay in operation enabled |

Object Description

Table 131: Object Description (605Dh)

| Index   | Name             | Object Type   | Data Type   |
|---------|------------------|---------------|-------------|
| 605D h  | Halt Option Code | Variable      | SIGNED16    |

Entry Description

Table 132: Entry Description (605Dh)

|   Sub-index | Access   | PDO Mapping   |   Value Range |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            |             1 |               1 |

## 8.1.5 Object 605E h : Fault Reaction Option Code

This object indicates what action is performed when fault is detected in the power drive system. The slow downrampisthedeceleration value of the used mode of operation. The fault reaction option code always has the value 2 as only this is supported.

<!-- image -->

Value De/uniFB01nition

Table 133: Value Description (605Eh)

|   Value | De/uniFB01nition             |
|---------|------------------------------|
|       2 | Slow down on quick stop ramp |

Object Description

Table 134: Object Description (605Eh)

| Index   | Name                       | Object Type   | Data Type   |
|---------|----------------------------|---------------|-------------|
| 605E h  | Fault Reaction Option Code | Variable      | SIGNED16    |

Entry Description

Table 135: Entry Description (605Eh)

|   Sub-index | Access   | PDO Mapping   |   Value Range |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            |             2 |               2 |

## 8.1.6 Object 6060 h : Modes of Operation

This object indicates the requested operation mode. Supported operating modes are as follows:

Value De/uniFB01nition

Table 136: Value Description (6060h)

|   Value | Mode                                   |
|---------|----------------------------------------|
|       0 | No mode                                |
|       1 | Pro/uniFB01le position mode (pp)       |
|       3 | Pro/uniFB01le velocity mode (pv)       |
|       6 | Homing mode (hm)                       |
|       8 | Cyclic synchronous position mode (csp) |
|       9 | Cyclic synchronous velocity mode (csv) |
|      10 | Cyclic synchronous torque mode (cst)   |

The motor does not run when the operating mode is set to 0. It is stopped when the motor is running in one of the supported operating modes and the operating mode is then switched to 0.

<!-- image -->

Object Description

Table 137: Object Description (6060h)

| Index   | Name               | Object Type   | Data Type   |
|---------|--------------------|---------------|-------------|
| 6060 h  | Modes of Operation | Variable      | SIGNED8     |

Entry Description

Table 138: Entry Description (6060h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | See Table 136 |               0 |

## 8.1.7 Object 6061 h : Modes of Operation Display

This object shows the operating mode that is currently set.

Value De/uniFB01nition

Table 139: Value Description (6061h)

|   Value | Mode                                   |
|---------|----------------------------------------|
|       0 | No mode                                |
|       1 | Pro/uniFB01le position mode (pp)       |
|       3 | Pro/uniFB01le velocity mode (pv)       |
|       6 | Homing mode (hm)                       |
|       8 | Cyclic synchronous position mode (csp) |
|       9 | Cyclic synchronous velocity mode (csv) |
|      10 | Cyclic synchronous torque mode (cst)   |

The motor does not run when the operating mode is set to 0. It is stopped when the motor is running in one of the supported operating modes and the operating mode is then switched to 0.

Object Description

| Index   | Name                       | Object Type   | Data Type   |
|---------|----------------------------|---------------|-------------|
| 6061 h  | Modes of Operation Display | Variable      | SIGNED8     |

Table 140: Object Description (6061h)

<!-- image -->

Entry Description

Table 141: Entry Description (6061h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | See Table 139 |               0 |

## 8.1.8 Object 60FD h : Digital Inputs

Object Description

This object contains the states of the digital inputs of the module. Starting from bit 0, every bit re/uniFB02ects the state of one digital input. The number of valid bits depends on the number of digital inputs on the module used.

Table 142: Object Description (60FDh)

| Index   | Name           | Object Type   | Data Type   |
|---------|----------------|---------------|-------------|
| 60FD h  | Digital Inputs | Variable      | UNSIGNED32  |

Entry Description

Table 143: Entry Description (60FDh)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | UNSIGNED32    |               0 |

## 8.1.9 Object 6502 h : Supported Drive Modes

This object provides information on the supported drive modes. A bit that is set means the mode is supported, a bit that is not set means the mode is not supported by the drive.

<!-- image -->

Value De/uniFB01nition

Table 144: Value De/uniFB01nition (6502 h )

|   Bit | Mode                                   |
|-------|----------------------------------------|
|     0 | Pro/uniFB01le position mode (pp)       |
|     1 | Velocity mode (vl)                     |
|     2 | Pro/uniFB01le velocity mode (pv)       |
|     3 | Torque mode (tq)                       |
|     4 | Reserved                               |
|     5 | Homing mode (hm)                       |
|     6 | Interpolated position mode (ip)        |
|     7 | Cyclic synchronous position mode (csp) |
|     8 | Cyclic synchronous velocity mode (csv) |
|     9 | Cyclic synchronous torque mode (cst)   |

Object Description

Table 145: Object Description (6502h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6502 h  | Supported Drive Modes | Variable      | UNSIGNED32  |

Entry Description

Table 146: Entry Description (6502h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value               |
|-------------|----------|---------------|---------------|-----------------------------|
|           0 | ro       | no            | UNSIGNED32    | Depends on supported modes. |

## 8.1.10 Object 67FF h : Single Device Type

This object provides information on the device pro/uniFB01le used for the individual axis. Its structure is similar to object 1000 h . The lower sixteen bits contain the device pro/uniFB01le number, which is always 402 (0192 h ) with ADI Trinamic motion control modules. The upper sixteen bits contain more information about the drive pro/uniFB01le.

<!-- image -->

Value De/uniFB01nition

Table 147: Value De/uniFB01nition (67FF h )

| Bit     | Meaning                                            |
|---------|----------------------------------------------------|
| 0...15  | Device pro/uniFB01le number                        |
| 16      | Frequency converter (0 = no, 1 = yes)              |
| 17      | Servo drive (0 = no, 1 = yes)                      |
| 18      | Stepper motor (0 = no, 1 = yes)                    |
| 19...21 | Reserved                                           |
| 22      | PDO set for generic drive device (0 = yes, 1 = no) |
| 23      | Multi device module (0 = no, 1 = yes)              |
| 24...31 | Reserved                                           |

Object Description

Table 148: Object Description (67FFh)

| Index   | Name               | Object Type   | Data Type   |
|---------|--------------------|---------------|-------------|
| 67ff h  | Single Device Type | Variable      | UNSIGNED32  |

Entry Description

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value               |
|-------------|----------|---------------|---------------|-----------------------------|
|           0 | ro       | no            | UNSIGNED32    | Depends on individual axis. |

Table 149: Entry Description (67FFh)

<!-- image -->

## 9 Pro/uniFB01le Position Mode

See object 6060 h (section 8.1.6) on how to choose an operation mode. Object 6061 h (section 8.1.7) shows the operation mode that is set.

A target position is applied to the trajectory generator. It generates a position demand value for the position control loop described in the position control function.

## 9.1 Detailed Object Speci/uniFB01cations

The following text offers detailed object speci/uniFB01cations. For a better understanding, it is necessary to see how the state machine works.

Figure 13: DS402 Finite State Machine

<!-- image -->

- Commands directing a change in state are processed completely and the new state achieved before additional state change commands are processed.

## Notes on state transitions:

- Transitions 0 and 1 occur automatically at drive power-on or reset. Transition 14 occurs automatically too. All other state changes must be directed by the host.
- Drive function enabled indicates that current is available for the motor, and pro/uniFB01le position and pro/uniFB01le velocity reference values may be processed.
- Drive function disabled indicates that no current is being supplied to the motor.

<!-- image -->

## 9.1.1 Object 6040 h : Controlword

This object indicates the received command controlling the power drive system /uniFB01nite state machine (PDS FSM). The CiA-402 state machine can be controlled using this object. See Figure 13 for detailed information.

Structure of the Controlword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; eo = enable operation; qs = quick stop; ev = enable voltage; so = switch on.

Table 150: Structure of the Controlword in pp Mode

| 15   | 11 10   | 9   | 8   | 7   | 6   | 4   | 3   | 2   | 1   | 0   |
|------|---------|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| nu   | nu      | r   | oms | h   | fr  | oms | eo  | qs  | ev  | so  |
| MSB  | MSB     |     |     |     |     |     |     |     |     | LSB |

Operation Mode Speci/uniFB01c Bits in pp Mode

Table 151: Operation Mode Speci/uniFB01c Bits in pp Mode

|   Bit | Name               | De/uniFB01nition                                          |
|-------|--------------------|-----------------------------------------------------------|
|     4 | New set point      | 0-to-1: the next positioning is started.                  |
|     5 | Change immediately | Not supported.                                            |
|     6 | Absolute/relative  | 0: New position is absolute. 1: New position is relative. |
|     9 | Change set point   | Not supported.                                            |

Command Coding

| Controlword                    | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   |
|--------------------------------|---------------|---------------|---------------|---------------|---------------|---------------|
| Command                        | Bits of       | Bits of       | Bits of       | Bits of       | Bits of       | Transitions   |
|                                | Bit 7         | Bit 3         | Bit 2         | Bit 1         | Bit 0         |               |
| Shutdown                       | 0             | x             | 1             | 1             | 0             | 2, 6, 8       |
| Switch on                      | 0             | 0             | 1             | 1             | 1             | 3             |
| Switch on and enable operation | 0             | 1             | 1             | 1             | 1             | 3, 4          |
| Disable voltage                | 0             | x             | x             | 0             | x             | 7, 9, 10, 12  |
| Quick stop                     | 0             | x             | 0             | 1             | x             | 7, 10, 11     |
| Disable operation              | 0             | 0             | 1             | 1             | 1             | 5             |
| Enable operation               | 0             | 1             | 1             | 1             | 1             | 4, 16         |
| Fault reset                    | 0-to-1        | x             | x             | x             | x             | 15            |

Table 152: Command Coding

<!-- image -->

Object Description

Table 153: Object Description (6040h in pp Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6040 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 154: Entry Description (6040h in pp Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range               | Default Value             |
|-------------|----------|---------------|---------------------------|---------------------------|
|           0 | rw       | yes           | See command coding above. | See command coding above. |

## 9.1.2 Object 6041 h : Statusword

For more information about the coding, refer to the CANopen drives and motion control device pro/uniFB01le, part 2.

This object provides the status of the PDS FSA. It re/uniFB02ects the status of the CiA-402 state machine. See Figure 13 for detailed information. The object is structured as de/uniFB01ned below.

Structure of the Statusword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; oe = operation enable; qs = quick stop; ve = voltage enable; so = switch on.

Table 155: Structure of the Statusword in pp Mode

| 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0    |
|------|------|------|------|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| dir  | mot  | oms  |      | ila  | tr   | rm  | ms  | w   | sod | qs  | ve  | f   | oe  | so  | rtso |
| MSB  |      |      |      |      |      |     |     |     |     |     |     |     |     |     | LSB  |

Manufacturer Speci/uniFB01c Bits

|   Bit | Name                  | De/uniFB01nition                          |
|-------|-----------------------|-------------------------------------------|
|    14 | Motor activity        | 0: Motor stands still. 1: Motor rotates.  |
|    15 | Direction of rotation | This bit shows the direction of rotation. |

Table 156: Manufacturer Speci/uniFB01c Bits

<!-- image -->

Operation Mode Speci/uniFB01c Bits in pp Mode

Table 157: Operation Mode Speci/uniFB01c Bits in pp Mode

|   Bit | Name                   | De/uniFB01nition                                       |
|-------|------------------------|--------------------------------------------------------|
|    10 | Target reached         | Set when the motor is within the position window.      |
|    12 | Set point acknowledged | 0: Set point processed. 1: Set point still in process. |
|    13 | Following error        | Not supported.                                         |

State Coding

Object Description

| Statusword            | FSA State              |
|-----------------------|------------------------|
| xxxx xxxx x0xx 0000 h | Not ready to switch on |
| xxxx xxxx x1xx 0000 h | Switch on disabled     |
| xxxx xxxx x01x 0001 h | Ready to switch on     |
| xxxx xxxx x01x 0011 h | Switched on            |
| xxxx xxxx x01x 0111 h | Operation enabled      |
| xxxx xxxx x00x 0111 h | Quick stop active      |
| xxxx xxxx x0xx 1111 h | Fault reaction active  |
| xxxx xxxx x0xx 1000 h | Fault                  |

Table 158: State Coding

Table 159: Object Description (6041h in pp Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6041 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 160: Entry Description (6041h in pp Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range             | Default Value           |
|-------------|----------|---------------|-------------------------|-------------------------|
|           0 | rw       | yes           | See state coding above. | See state coding above. |

## 9.1.3 Object 6062 h : Position Demand Value

This object provides the demanded position value. The value is given in encoder steps. Object 6062 h indicates the actual position of the motor. Do not confuse it with objects 6063 h and 6064 h .

<!-- image -->

Object Description

Table 161: Object Description (6062h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6062 h  | Position Demand Value | Variable      | SIGNED32    |

Entry Description

Table 162: Entry Description (6062h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 9.1.4 Object 6063 h : Position Actual Internal Value

This object provides the demanded position value. The value is given in encoder steps. It is the same as object 6062 h .

Object Description

Table 163: Object Description (6063h)

| Index   | Name                           | Object Type   | Data Type   |
|---------|--------------------------------|---------------|-------------|
| 6063 h  | Position Actual Internal Value | Variable      | SIGNED32    |

Entry Description

Table 164: Entry Description (6063h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 9.1.5 Object 6064 h : Position Actual Value

This object provides the actual value of the position measurement device. It always contains the same value as object 6063 h .

Object Description

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6064 h  | Position Actual Value | Variable      | SIGNED32    |

Table 165: Object Description (6064h)

<!-- image -->

Entry Description

Table 166: Entry Description (6064h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 9.1.6 Object 6067 h : Position Window

This object indicates the con/uniFB01gured symmetrical range of accepted positions relative to the target position. If the actual value of the position encoder is within the position window, this target position is regarded as reached. The value is given in increments. If the value of the position window is FFFFFFFF h , the position window control is switched off. If this object is set to zero, the target reached event is signaled when the demand position (6062 h ) has reached the target position (6064 h ). When the position window is set to a value greater than zero, the target reached event is signaled when the actual encoder position value (6064 h ) is within ( target \_ position -position \_ window ) and ( target \_ position + position \_ window ) .

Object Description

Table 167: Object Description (6067h)

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 6067 h  | Position Window | Variable      | UNSIGNED32  |

Entry Description

Table 168: Entry Description (6067h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | UNSIGNED32    | FFFFFFFF h      |

## 9.1.7 Object 6068 h : Position Window Time

This object indicates the con/uniFB01gured time, during which the actual position within the position window is measured. The value is given in ms. If this object is set to a value greater than zero and also the position window (6067 h ) is set to a value greater than zero, the target reached event is not signaled until the actual position (6064 h ) is at least as many milliseconds within the position window as de/uniFB01ned by this object.

Object Description

| Index   | Name                 | Object Type   | Data Type   |
|---------|----------------------|---------------|-------------|
| 6068 h  | Position Window Time | Variable      | UNSIGNED16  |

Table 169: Object Description (6068h)

<!-- image -->

Entry Description

Table 170: Entry Description (6068h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | UNSIGNED16    |               0 |

## 9.1.8 Object 606C h : Velocity Actual Value

This object shows the actual velocity value of the motor. The value is given in units of rpm.

Object Description

Table 171: Object Description (606Ch)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 606C h  | Velocity Actual Value | Variable      | SIGNED32    |

Entry Description

Table 172: Entry Description (606Ch)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 9.1.9 Object 607A h : Target Position

The target position is the position the drive should move to in pro/uniFB01le position mode using the current settings of motion control parameters (such as velocity, acceleration, deceleration, motion pro/uniFB01le type, etc.). The value of this object is interpreted as absolute or relative depending on the ABS/REL /uniFB02ag in the controlword. It is given in encoder steps.

Object Description

Table 173: Object Description (607Ah in pp Mode)

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 607A h  | Target Position | Variable      | SIGNED32    |

Entry Description

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | SIGNED32      |               0 |

Table 174: Entry Description (607Ah in pp Mode)

<!-- image -->

## 9.1.10 Object 607D h : Software Position Limit

This object indicates the con/uniFB01gured maximal and minimal software position limits. These parameters de/uniFB01ne the absolute position limits for the position demand value and position actual value. Every new target position is checked against these limits. The limit positions are always relative to the machine home position. Before being compared with the target position, they are corrected internally by the home offset as follows:

Corrected \_ min \_ position \_ limit = min \_ position \_ limit -home \_ offset Corrected \_ max \_ position \_ limit = max \_ position \_ limit -home \_ offset

Object Description

Table 175: Object Description (607Dh)

| Index   | Name                    | Object Type   | Data Type   |
|---------|-------------------------|---------------|-------------|
| 607D h  | Software Position Limit | Array         | SIGNED32    |

Entry Description

Table 176: Entry Description (607Dh)

|   Sub-index | Description            | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|------------------------|----------|---------------|---------------|-----------------|
|           1 | Minimum Position Limit | rw       | no            | SIGNED32      |     -2147483648 |
|           2 | Maximum Position Limit | rw       | no            | SIGNED32      |      2147483647 |

## 9.1.11 Object 6081 h : Pro/uniFB01le Velocity

This object indicates the con/uniFB01gured velocity normally attained at the end of the acceleration ramp during a pro/uniFB01led motion and is valid for both directions of motion. The pro/uniFB01le velocity is the maximum velocity used when driving to a new position. It is given in units of rpm.

Object Description

Table 177: Object Description (6081h)

| Index   | Name                   | Object Type   | Data Type   |
|---------|------------------------|---------------|-------------|
| 6081 h  | Pro/uniFB01le Velocity | Variable      | UNSIGNED32  |

Entry Description

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | UNSIGNED32    |               0 |

Table 178: Entry Description (6081h)

<!-- image -->

## 9.1.12 Object 6083 h : Pro/uniFB01le Acceleration

In pro/uniFB01le velocity mode, this object also sets the deceleration to be used (the deceleration ramp is always the same as the acceleration ramp in pv mode).

This object indicates the con/uniFB01gured acceleration. Object 6083 h sets the maximum acceleration to be used in pro/uniFB01le position and pro/uniFB01le velocity mode. This value is given using rpm/s units.

Object Description

Table 179: Object Description (6083h)

| Index   | Name                       | Object Type   | Data Type   |
|---------|----------------------------|---------------|-------------|
| 6083 h  | Pro/uniFB01le Acceleration | Variable      | UNSIGNED32  |

Entry Description

Table 180: Entry Description (6083h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | UNSIGNED32    |               0 |

## 9.1.13 Object 6084 h : Pro/uniFB01le Deceleration

This object indicates the con/uniFB01gured deceleration. Object 6084 h sets the maximum deceleration to be used in pro/uniFB01le positioning mode. This value is given in units of rpm/s.

Object Description

Table 181: Object Description (6084h)

| Index   | Name                       | Object Type   | Data Type   |
|---------|----------------------------|---------------|-------------|
| 6084 h  | Pro/uniFB01le Deceleration | Variable      | UNSIGNED32  |

Entry Description

Table 182: Entry Description (6084h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | no            | UNSIGNED32    |               0 |

## 9.1.14 Object 6085 h : Quick Stop Deceleration

This object indicates the con/uniFB01gured deceleration used to stop the motor when the quick stop function is activated and the quick stop code object 605A h is set to 2 (or 6). The value is given in the same unit as pro/uniFB01le acceleration object 6083 h .

<!-- image -->

Object Description

Table 183: Object Description (6085h)

| Index   | Name                    | Object Type   | Data Type   |
|---------|-------------------------|---------------|-------------|
| 6085 h  | Quick Stop Deceleration | Variable      | UNSIGNED32  |

Entry Description

Table 184: Entry Description (6085h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | UNSIGNED32    |           51200 |

## 9.2 How to Move a Motor in pp Mode

Here is a small example that shows how to get a motor running in pp mode. In this example, assume the module is reset (and then switched to operational) by NMT commands before. Note that the values are decimal.

- If there are no limit switches connected, /uniFB01rst disable the limit switch inputs by writing 3 to object 2005 h .
- Write 6 to object 6040 h to switch to READY\_TO\_SWITCH\_ON state.
- Select pp mode by writing 1 to object 6060 h .
- Write 7 to object 6040 h to switch to SWITCHED\_ON state.
- Write the desired target position (example: 500000) to object 607A h .
- Write 15 to object 6040 h to switch to OPERATION\_ENABLED state.
- Mark the new target position active by writing 31 to object 6040 h . The motor starts moving now.
- Reset the activation by writing 15 to object 6040 h (this can be done while the motor is still moving).

<!-- image -->

## 10 Pro/uniFB01le Velocity Mode

The pro/uniFB01le velocity mode covers the following sub-functions:

The pro/uniFB01le velocity mode is used to control the velocity of the drive without a special regard of the position. It contains limit functions and trajectory generation.

- Demand value input through trajectory generator.
- Monitoring of the velocity actual value using a threshold.
- Monitoring of the pro/uniFB01le velocity using a window-function.

The operation of the reference value generator and its input parameters include:

- Pro/uniFB01le acceleration
- Pro/uniFB01le velocity
- Motion pro/uniFB01le type

## 10.0.1 Object 6040 h : Controlword

In pv mode, the Controlword does not contain any operation mode speci/uniFB01c bits.

This object indicates the received command controlling the power drive system /uniFB01nite state machine (PDS FSM). The CiA-402 state machine can be controlled using this object. See Figure 13 for detailed information.

Structure of the Controlword

Legend: nu = not used; r = reserved; h = halt; fr = fault reset; eo = enable operation; qs = quick stop; ev = enable voltage; so = switch on.

| 10   | 10   | 10   | 10   | 10   | 10   | 10   | 10   | 10   | 10   | 10   |
|------|------|------|------|------|------|------|------|------|------|------|
| 15   | 11   | 9    | 8    | 7    | 6    | 4    | 3    | 2    | 1    | 0    |
| nu   | r    | r    | h    | fr   |      | r    | eo   | qs   | ev   | so   |
| MSB  |      |      |      |      |      |      |      |      |      | LSB  |

Table 185: Structure of the Controlword in pv Mode

<!-- image -->

Command Coding

| Controlword                    | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   |
|--------------------------------|---------------|---------------|---------------|---------------|---------------|---------------|
| Command                        | Bits of       | Bits of       | Bits of       | Bits of       | Bits of       | Transitions   |
|                                | Bit 7         | Bit 3         | Bit 2         | Bit 1         | Bit 0         |               |
| Shutdown                       | 0             | x             | 1             | 1             | 0             | 2,6,8         |
| Switch on                      | 0             | 0             | 1             | 1             | 1             | 3             |
| Switch on and enable operation | 0             | 1             | 1             | 1             | 1             | 3, 4          |
| Disable voltage                | 0             | x             | x             | 0             | x             | 7,9,10,12     |
| Quick stop                     | 0             | x             | 0             | 1             | x             | 7,10,11       |
| Disable operation              | 0             | 0             | 1             | 1             | 1             | 5             |
| Enable operation               | 0             | 1             | 1             | 1             | 1             | 4, 16         |
| Fault reset                    | 0-to-1        | x             | x             | x             | x             | 15            |

Table 186: Command Coding

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6040 h  | Controlword | Variable      | UNSIGNED16  |

Object Description

Table 187: Object Description (6040h in pv Mode)

Entry Description

Table 188: Entry Description (6040h in pv Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range               | Default Value             |
|-------------|----------|---------------|---------------------------|---------------------------|
|           0 | rw       | yes           | See command coding above. | See command coding above. |

## 10.0.2 Object 6041 h : Statusword

For more information about the coding, refer to the CANopen drives and motion control device pro/uniFB01le, part 2.

This object provides the status of the PDS FSA. It re/uniFB02ects the status of the CiA-402 state machine. See Figure 13 for detailed information. The object is structured as de/uniFB01ned below.

<!-- image -->

Structure of the Statusword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; oe = operation enable; qs = quick stop; ve = voltage enable; so = switch on.

Table 189: Structure of the Statusword in pv Mode

| 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0    |
|------|------|------|------|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| dir  | mot  | oms  |      | ila  | tr   | rm  | ms  | w   | sod | qs  | ve  | f   | oe  | so  | rtso |
| MSB  |      |      |      |      |      |     |     |     |     |     |     |     |     |     | LSB  |

Manufacturer Speci/uniFB01c Bits

Table 190: Manufacturer Speci/uniFB01c Bits

|   Bit | Name                  | De/uniFB01nition                          |
|-------|-----------------------|-------------------------------------------|
|    14 | Motor activity        | 0: Motor stands still. 1: Motor rotates.  |
|    15 | Direction of rotation | This bit shows the direction of rotation. |

Operation Mode Speci/uniFB01c Bits in pv Mode

Table 191: Operation Mode Speci/uniFB01c Bits in pv Mode

|   Bit | Name                | De/uniFB01nition                       |
|-------|---------------------|----------------------------------------|
|    10 | Target reached      | Indicates the target speed is reached. |
|    12 | Speed               | Not supported.                         |
|    13 | Max. slippage error | Not supported.                         |

State Coding

| Statusword            | FSA State              |
|-----------------------|------------------------|
| xxxx xxxx x0xx 0000 h | Not ready to switch on |
| xxxx xxxx x1xx 0000 h | Switch on disabled     |
| xxxx xxxx x01x 0001 h | Ready to switch on     |
| xxxx xxxx x01x 0011 h | Switched on            |
| xxxx xxxx x01x 0111 h | Operation enabled      |
| xxxx xxxx x00x 0111 h | Quick stop active      |
| xxxx xxxx x0xx 1111 h | Fault reaction active  |
| xxxx xxxx x0xx 1000 h | Fault                  |

Table 192: State Coding

<!-- image -->

Object Description

Table 193: Object Description (6041h in pv Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6041 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 194: Entry Description (6041h in pv Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range            | Default Value          |
|-------------|----------|---------------|------------------------|------------------------|
|           0 | rw       | yes           | See state coding above | See state coding above |

## 10.0.3 Object 6062 h : Position Demand Value

This object provides the demanded position value. The value is given in encoder steps. Object 6062 h indicates the actual position of the motor. Do not confuse it with objects 6063 h and 6064 h .

Object Description

Table 195: Object Description (6062h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6062 h  | Position Demand Value | Variable      | SIGNED32    |

Entry Description

Table 196: Entry Description (6062h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 10.0.4 Object 6063 h : Position Actual Internal Value

This object provides the demanded position value. The value is given in encoder steps. It is the same as object 6062 h .

Object Description

| Index   | Name                           | Object Type   | Data Type   |
|---------|--------------------------------|---------------|-------------|
| 6063 h  | Position Actual Internal Value | Variable      | SIGNED32    |

Table 197: Object Description (6063h)

<!-- image -->

Entry Description

Table 198: Entry Description (6063h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 10.0.5 Object 6064 h : Position Actual Value

This object provides the actual value of the position measurement device. It always contains the same value as object 6063 h .

Object Description

Table 199: Object Description (6064h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6064 h  | Position Actual Value | Variable      | SIGNED32    |

Entry Description

Table 200: Entry Description (6064h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 10.0.6 Object 606C h : Velocity Actual Value

This object shows the actual velocity value of the motor. The value is given in units of rpm.

Object Description

Table 201: Object Description (606Ch)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 606C h  | Velocity Actual Value | Variable      | SIGNED32    |

Entry Description

Table 202: Entry Description (606Ch)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 10.0.7 Object 607D h : Software Position Limit

This object indicates the con/uniFB01gured maximal and minimal software position limits. These parameters de/uniFB01ne the absolute position limits for the position demand value and position actual value. Every new target position is checked against these limits. The limit positions are always relative to the machine home

<!-- image -->

position. Before being compared with the target position, they are corrected internally by the home offset as follows:

Corrected \_ min \_ position \_ limit = min \_ position \_ limit -home \_ offset Corrected \_ max \_ position \_ limit = max \_ position \_ limit -home \_ offset

Object Description

Table 203: Object Description (607Dh)

| Index   | Name                    | Object Type   | Data Type   |
|---------|-------------------------|---------------|-------------|
| 607D h  | Software Position Limit | Array         | SIGNED32    |

Entry Description

Table 204: Entry Description (607Dh)

|   Sub-index | Description            | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|------------------------|----------|---------------|---------------|-----------------|
|           1 | Minimum Position Limit | rw       | no            | SIGNED32      |     -2147483648 |
|           2 | Maximum Position Limit | rw       | no            | SIGNED32      |      2147483647 |

## 10.0.8 Object 6083 h : Pro/uniFB01le Acceleration

In pro/uniFB01le velocity mode, this object also sets the deceleration to be used (the deceleration ramp is always the same as the acceleration ramp in pv mode).

This object indicates the con/uniFB01gured acceleration. Object 6083 h sets the maximum acceleration to be used in pro/uniFB01le position and pro/uniFB01le velocity mode. This value is given using rpm/s units.

Object Description

Table 205: Object Description (6083h)

| Index   | Name                       | Object Type   | Data Type   |
|---------|----------------------------|---------------|-------------|
| 6083 h  | Pro/uniFB01le Acceleration | Variable      | UNSIGNED32  |

Entry Description

Table 206: Entry Description (6083h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | UNSIGNED32    |               0 |

## 10.0.9 Object 6085 h : Quick Stop Deceleration

This object indicates the con/uniFB01gured deceleration used to stop the motor when the quick stop function is activated and the quick stop code object 605A h is set to 2 (or 6). The value is given in the same unit as pro/uniFB01le acceleration object 6083 h .

<!-- image -->

Object Description

Table 207: Object Description (6085h)

| Index   | Name                    | Object Type   | Data Type   |
|---------|-------------------------|---------------|-------------|
| 6085 h  | Quick Stop Deceleration | Variable      | UNSIGNED32  |

Entry Description

Table 208: Entry Description (6085h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | UNSIGNED32    |           51200 |

## 10.0.10 Object 60FF h : Target Velocity

This object indicates the con/uniFB01gured target velocity and is used as input for the trajectory generator. Object 60FF h sets the target velocity when using pro/uniFB01le velocity mode. The drive then accelerates or decelerates to that velocity using the acceleration and deceleration set by objects 6083 h and 6084 h . The values are given in rpm units.

Object Description

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 60FF h  | Target Velocity | Variable      | SIGNED32    |

Table 209: Object Description (60FFh)

Entry Description

Table 210: Entry Description (60FFh)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | SIGNED32      |               0 |

## 10.1 How to Move a Motor in pv Mode

Here is a small example that shows how to get a motor running in pv mode. In this example, assume the module is reset (and then switched to operational) by NMT commands before.

- If there are no limit switches connected, /uniFB01rst disable the limit switch inputs by writing 3 to object 2005 h .
- Write 6 to object 6040 h to switch to READY\_TO\_SWITCH\_ON state.
- Select pv mode by writing 3 to object 6060 h .
- Write 7 to object 6040 h to switch to SWITCHED\_ON state.
- Write 15 to object 6040 h to switch to OPERATION\_ENABLED state.

<!-- image -->

- Write the desired target speed (example: 100000) to object 60FF h . The motor now accelerates to that speed.
- Stop the motor by writing 0 to object 60FF h .

<!-- image -->

## 11 Homing Mode

There is no output data except for those bits in the statusword that return the status or result of the homing process and the demand to the position control loops.

This section describes the method by which a drive seeks the home position (reference point). There are various methods of achieving this using limit switches at the ends of travel or a home switch in mid-travel. Some methods also use the index (zero) pulse train from an incremental encoder. It is possible to specify the speeds, acceleration, and the method of homing.

There are four sources of the homing signal available: these are positive and negative limit switches, the home switch, and the index pulse from an encoder.

Figure 14 shows the de/uniFB01ned input objects as well as the output objects. It is possible to specify the speeds, acceleration, and method of homing. The home offset object 607C h allows to displace zero in the coordinate system from the home position.

Figure 14: Homing Mode Function

<!-- image -->

Choosing a homing mode determines the following things:

- The direction of actuation, where appropriate.
- The homing signal (positive limit switch, negative limit switch, and home switch).
- The position of the index pulse.

Depending on the module, there are different sources of homing methods:

The home position and the zero position are offset by the home offset (see object 607C h , Section 11.2.4).

- Negative and positive limit switches
- Index pulse of an encoder
- Home switch

An exact knowledge of the absolute position is normally required to operate positioning drives. For cost reasons, drives often do not have an absolute encoder. So, a homing operation is necessary.

<!-- image -->

## 11.1 Homing Methods

The TMCM-1690 supports a subset of different standard CANopen homing methods. The homing method can be chosen through object 6098 h (section 11.2.5).

Supported Homing Methods

Table 211: Supported CANopen Homing Methods

|   Method | Description                                                                                                                                       |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
|        0 | No homing (default value for object 6098 h ).                                                                                                     |
|       17 | Search the left end switch.                                                                                                                       |
|       18 | Search the right end switch.                                                                                                                      |
|       19 | Search the positive edge of the home switch.                                                                                                      |
|       21 | Search the negative edge of the home switch.                                                                                                      |
|       35 | The actual position is used as home position. All position values (objects 6062h, 6063h, and 6064h) are set to zero, but the motor does not move. |

When using homing methods that need end switch inputs or home switch inputs, take care of their con/uniFB01guration (object 2005 h , section 7.1.3).

## 11.1.1 Homing Method 17: Homing on Negative Limit Switch

Using this method, the initial direction of movement shall be leftward if the negative limit switch is inactive (here: low). The home position shall be at the point where the negative limit switch becomes inactive.

Figure 15: Homing Method 17

<!-- image -->

## 11.1.2 Homing Method 18: Homing on Positive Limit Switch

Using this method, the initial direction of movement shall be rightward if the positive limit switch is inactive (here: low). The home position shall be at the point where the positive limit switch becomes inactive.

<!-- image -->

Figure 16: Homing Method 18

<!-- image -->

## 11.1.3 Homing Method 19: Homing on Positive Home Switch

Using this method, the initial direction of movement shall be dependent on the state of the home switch. The home position shall be at the point where the home switch changes state. If the initial direction of movement leads away from the home switch, the drive shall reverse on encountering the relevant limit switch.

Figure 17: Homing Method 19

<!-- image -->

## 11.1.4 Homing Method 21: Homing on Negative Home Switch

Using this method, the initial direction of movement shall be dependent on the state of the home switch. The home position shall be at the point where the home switch changes state. If the initial direction of movement leads away from the home switch, the drive shall reverse on encountering the relevant limit switch.

<!-- image -->

Figure 18: Homing Method 21

<!-- image -->

## 11.1.5 Homing Method 35: Current Position as Home Position

In this method, the current position is considered the home position. This method does not require the drive device to be in operation enabled state.

<!-- image -->

## 11.2 Detailed Object Speci/uniFB01cations

This object indicates the received command controlling the power drive system /uniFB01nite state machine (PDS FSM). The CiA-402 state machine can be controlled using this object. See Figure 13 for detailed information.

## 11.2.1 Object 6040 h : Controlword

Structure of the Controlword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; eo = enable operation; qs = quick stop; ev = enable voltage; so = switch on.

Table 212: Structure of the Controlword in hm Mode

| 8 7   | 8 7   | 8 7   | 8 7   | 8 7   | 8 7   | 8 7   | 8 7   | 8 7   | 8 7   | 8 7   |
|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|
| 15    | 10 r  | 9     |       | 6     | 4     | 3     | 2     | 1     | 0     |       |
| nu    | oms   | h     | fr    | oms   |       | eo    | qs    | ev    | so    |       |
| MSB   |       |       |       |       |       |       |       |       | LSB   |       |

Operation Mode Speci/uniFB01c Bits in hm Mode

Table 213: Operation Mode Speci/uniFB01c Bits in hm Mode

|   Bit | Name                   | De/uniFB01nition                |
|-------|------------------------|---------------------------------|
|     4 | Homing operation start | 1: start homing; 0: stop homing |
|     8 | Halt                   | Not supported.                  |

Command Coding

| Command                        | Bits of Controlword   | Bits of Controlword   | Bits of Controlword   | Bits of Controlword   | Bits of Controlword   | Transitions   |
|--------------------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|---------------|
|                                | Bit 7                 | Bit 3                 | Bit 2                 | Bit 1                 | Bit 0                 |               |
| Shutdown                       | 0                     | x                     | 1                     | 1                     | 0                     | 2, 6, 8       |
| Switch on                      | 0                     | 0                     | 1                     | 1                     | 1                     | 3             |
| Switch on and enable operation | 0                     | 1                     | 1                     | 1                     | 1                     | 3, 4          |
| Disable voltage                | 0                     | x                     | x                     | 0                     | x                     | 7, 9, 10, 12  |
| Quick stop                     | 0                     | x                     | 0                     | 1                     | x                     | 7, 10, 11     |
| Disable operation              | 0                     | 0                     | 1                     | 1                     | 1                     | 5             |
| Enable operation               | 0                     | 1                     | 1                     | 1                     | 1                     | 4, 16         |
| Fault reset                    | 0-to-1                | x                     | x                     | x                     | x                     | 15            |

Table 214: Command Coding

<!-- image -->

Object Description

Table 215: Object Description (6040h in hm Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6040 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 216: Entry Description (6040h in hm Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range               | Default Value             |
|-------------|----------|---------------|---------------------------|---------------------------|
|           0 | rw       | yes           | See command coding above. | See command coding above. |

## 11.2.2 Object 6041 h : Statusword

For more information about the coding, refer to the CANopen drives and motion control device pro/uniFB01le, part 2.

This object provides the status of the PDS FSA. It re/uniFB02ects the status of the CiA-402 state machine. See Figure 13 for detailed information. The object is structured as de/uniFB01ned below.

Structure of the Statusword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; oe = operation enable; qs = quick stop; ve = voltage enable; s o =switch on.

Table 217: Structure of the Statusword in hm Mode

| 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0    |
|------|------|------|------|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| dir  | mot  | oms  |      | ila  | tr   | rm  | ms  | w   | sod | qs  | ve  | f   | oe  | so  | rtso |
| MSB  |      |      |      |      |      |     |     |     |     |     |     |     |     |     | LSB  |

Manufacturer Speci/uniFB01c Bits

|   Bit | Name                  | De/uniFB01nition                          |
|-------|-----------------------|-------------------------------------------|
|    14 | Motor activity        | 0: Motor stands still. 1: Motor rotates.  |
|    15 | Direction of rotation | This bit shows the direction of rotation. |

Table 218: Manufacturer Speci/uniFB01c Bits

<!-- image -->

Operation Mode Speci/uniFB01c Bits in hm Mode

Table 219: Operation Mode Speci/uniFB01c Bits in hm Mode

|   Bit | Name           | De/uniFB01nition                                                                               |
|-------|----------------|------------------------------------------------------------------------------------------------|
|    10 | Target reached | Set when the zero position is found or homing is stopped by setting controlword bit 4 to zero. |
|    12 | Home attained  | Set when zero position is found.                                                               |
|    13 | Homing error   | Not supported.                                                                                 |

State Coding

Object Description

| Statusword            | FSA State              |
|-----------------------|------------------------|
| xxxx xxxx x0xx 0000 h | Not ready to switch on |
| xxxx xxxx x1xx 0000 h | Switch on disabled     |
| xxxx xxxx x01x 0001 h | Ready to switch on     |
| xxxx xxxx x01x 0011 h | Switched on            |
| xxxx xxxx x01x 0111 h | Operation enabled      |
| xxxx xxxx x00x 0111 h | Quick stop active      |
| xxxx xxxx x0xx 1111 h | Fault reaction active  |
| xxxx xxxx x0xx 1000 h | Fault                  |

Table 220: State Coding

Table 221: Object Description (6041h in hm Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6041 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 222: Entry Description (6041h in hm Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range             | Default Value           |
|-------------|----------|---------------|-------------------------|-------------------------|
|           0 | rw       | yes           | See state coding above. | See state coding above. |

## 11.2.3 Object 606C h : Velocity Actual Value

This object shows the actual velocity value of the motor. The value is given in units of rpm.

<!-- image -->

Object Description

Table 223: Object Description (606Ch)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 606C h  | Velocity Actual Value | Variable      | SIGNED32    |

Entry Description

Table 224: Entry Description (606Ch)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 11.2.4 Object 607C h : Home Offset

This object indicates the con/uniFB01gured difference between the zero position for the application and the machine home position/home switch (found during homing). While homing, the machine home position is found and once the homing is completed, the zero position is offset from the home position by adding the homeoffset to the home position. The effect of setting the home position to a non-zero value depends on the selected homing method. The value of this object is given in encoder steps. Negative values indicate the opposite direction.

<!-- image -->

Figure 19: Home Offset

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 607C h  | Home Offset | Variable      | SIGNED32    |

Object Description

Table 225: Object Description (607Ch)

Entry Description

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | SIGNED32      |               0 |

Table 226: Entry Description (607Ch)

<!-- image -->

## 11.2.5 Object 6098 h : Homing Method

The homing method to be used can be selected by writing to this object. See Table 211 for a list of homing methods supported by the current version of the TMCM-1690 CANopen /uniFB01rmware.

Object Description

Table 227: Object Description (6098h)

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 6098 h  | Homing Method | Variable      | SIGNED8     |

Entry Description

Table 228: Entry Description (6098h)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | SIGNED8       |               0 |

## 11.2.6 Object 6099 h : Homing Speeds

This object indicates the con/uniFB01gured speeds used during homing procedure. The values are given in rpm units. Using object 6099 h , a fast and a slow homing speed can be set. In most homing modes, the home switch is searched with the fast speed /uniFB01rst. When the home switch is found, the motor is decelerated to the slow speed (using the homing acceleration, object 609A h ) to search for the exact switch point. When the switch point is found, the motor is stopped at that point.

Object Description

Table 229: Object Description (6099h)

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 6099 h  | Homing Speeds | Array         | UNSIGNED32  |

Entry Description

Table 230: Entry Description (6099h)

|   Sub-index | Description       | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|-------------------|----------|---------------|---------------|-----------------|
|           1 | Fast homing speed | rw       | no            | UNSIGNED32    |               0 |
|           2 | Slow homing speed | rw       | no            | UNSIGNED32    |               0 |

## 11.2.7 Object 609A h : Homing Acceleration

This object indicates the con/uniFB01gured acceleration and deceleration to be used during homing operation. This object uses rpm/s units.

<!-- image -->

Object Description

Table 231: Object Description (609Ah)

| Index   | Name                | Object Type   | Data Type   |
|---------|---------------------|---------------|-------------|
| 609A h  | Homing Acceleration | Variable      | UNSIGNED32  |

Entry Description

Table 232: Entry Description (609Ah)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | no            | UNSIGNED32    |               0 |

## 11.3 How to Start a Homing in hm Mode

Here is a small example that shows how to home the motor in hm mode. In this example, assume the module is reset (and then switched to operational) by NMT commands before. The home switch must be connected to the home switch input. It can be operated manually.

- Select hm mode by writing 6 to object 6060 h .
- Write 7 to object 6040 h to switch to SWITCHED\_ON state.
- Write 6 to object 6040 h to switch to READY\_TO\_SWITCH\_ON state.
- Write 15 to object 6040 h to switch to OPERATION\_ENABLED state.
- Set the homing speeds by writing, example, 50000 to object 6099 h subindex 1 and, example, 10000 to object 6099 h subindex 2.
- Select homing method 19 by writing 19 to object 6098 h .
- Write 31 to object 6040 h to start the homing process.
- When homing has /uniFB01nished, write 15 to object 6040 h again.
- Press and release the home switch.

<!-- image -->

## 12 Cyclic Synchronous Position Mode

The main control parameters are the target position (object 607A h , see section 12.1.7) and the interpolation time period (object 60C2 h , see section 12.1.10). The drive automatically sets the velocity in such a manner that the next target position is reached within the interpolation time period. Acceleration and deceleration ramps are not used in this mode.

The cyclic synchronous position mode is used to directly control the position of the motor. It contains limit functions, but not a trajectory generator. The trajectory generator is located in the control device (the main device), not in the drive device. In cyclic synchronous manner, the control device provides a target position to the drive device, which performs position control, velocity control, and torque control.

The cyclic synchronous position mode covers the following sub-functions:

- Monitoring of the position.
- Position demand value input directly through an object.
- Limiting the position using the software limits or the hardware limit switches.

## 12.1.1 Object 6040 h : Controlword

## 12.1 Detailed Object Speci/uniFB01cations

This object indicates the received command controlling the power drive system /uniFB01nite state machine (PDS FSM). The CiA-402 state machine can be controlled using this object. See Figure 13 for detailed information. The cyclic synchronous position mode does not use any mode speci/uniFB01c bits of the Controlword.

Structure of the Controlword

Legend: nu = not used; h = halt; fr = fault reset; eo = enable operation; qs = quick stop; ev = enable voltage; so = switch on.

| 4   | 4   | 4   | 4   | 4   | 4   | 4   | 4   | 4   |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 15  | 9   | 8   | 7   | 6   | 3   | 2   | 1   | 0   |
| nu  | nu  | h   | fr  | nu  | eo  | qs  | ev  | so  |
| MSB | MSB |     |     |     |     |     |     | LSB |

Table 233: Structure of the Controlword in csp Mode

<!-- image -->

Command Coding

| Controlword                    | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   |
|--------------------------------|---------------|---------------|---------------|---------------|---------------|---------------|
| Command                        | Bits of       | Bits of       | Bits of       | Bits of       | Bits of       | Transitions   |
|                                | Bit 7         | Bit 3         | Bit 2         | Bit 1         | Bit 0         |               |
| Shutdown                       | 0             | x             | 1             | 1             | 0             | 2, 6, 8       |
| Switch on                      | 0             | 0             | 1             | 1             | 1             | 3             |
| Switch on and enable operation | 0             | 1             | 1             | 1             | 1             | 3, 4          |
| Disable voltage                | 0             | x             | x             | 0             | x             | 7, 9, 10, 12  |
| Quick stop                     | 0             | x             | 0             | 1             | x             | 7, 10, 11     |
| Disable operation              | 0             | 0             | 1             | 1             | 1             | 5             |
| Enable operation               | 0             | 1             | 1             | 1             | 1             | 4, 16         |
| Fault reset                    | 0-to-1        | x             | x             | x             | x             | 15            |

Table 234: Command Coding

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6040 h  | Controlword | Variable      | UNSIGNED16  |

Object Description

Table 235: Object Description (6040h in csp Mode)

Entry Description

Table 236: Entry Description (6040h in csp Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range               | Default Value             |
|-------------|----------|---------------|---------------------------|---------------------------|
|           0 | rw       | yes           | See command coding above. | See command coding above. |

## 12.1.2 Object 6041 h : Statusword

For more information about the coding, refer to the CANopen drives and motion control device pro/uniFB01le, part 2.

This object provides the status of the PDS FSA. It re/uniFB02ects the status of the CiA-402 state machine. See Figure 13 for detailed information. The object is structured as de/uniFB01ned below.

Structure of the Statusword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; oe = operation enable; qs = quick stop; ve = voltage enable; so = switch on.

| 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0    |
|------|------|------|------|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| dir  | mot  | oms  |      | ila  | r    | rm  | ms  | w   | sod | qs  | ve  | f   | oe  | so  | rtso |
| MSB  |      |      |      |      |      |     |     |     |     |     |     |     |     |     | LSB  |

Table 237: Structure of the Statusword in csp Mode

<!-- image -->

Manufacturer Speci/uniFB01c Bits

Table 238: Manufacturer Speci/uniFB01c Bits

|   Bit | Name                  | De/uniFB01nition                          |
|-------|-----------------------|-------------------------------------------|
|    14 | Motor activity        | 0: Motor stands still. 1: Motor rotates.  |
|    15 | Direction of rotation | This bit shows the direction of rotation. |

Operation Mode Speci/uniFB01c Bits in csp Mode

Table 239: Operation Mode Speci/uniFB01c Bits in csp Mode

|   Bit | Name                    | De/uniFB01nition                                                                     |
|-------|-------------------------|--------------------------------------------------------------------------------------|
|    10 | Reserved                | Not used.                                                                            |
|    12 | Target position ignored | 0: Target position ignored. 1: Target position used as input to position controller. |
|    13 | Following error         | 0: No following error. 1: Following error.                                           |

State Coding

Object Description

| Statusword            | FSA State              |
|-----------------------|------------------------|
| xxxx xxxx x0xx 0000 h | Not ready to switch on |
| xxxx xxxx x1xx 0000 h | Switch on disabled     |
| xxxx xxxx x01x 0001 h | Ready to switch on     |
| xxxx xxxx x01x 0011 h | Switched on            |
| xxxx xxxx x01x 0111 h | Operation enabled      |
| xxxx xxxx x00x 0111 h | Quick stop active      |
| xxxx xxxx x0xx 1111 h | Fault reaction active  |
| xxxx xxxx x0xx 1000 h | Fault                  |

Table 240: State Coding

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6041 h  | Controlword | Variable      | UNSIGNED16  |

Table 241: Object Description (6041h in csp Mode)

<!-- image -->

Entry Description

Table 242: Entry Description (6041h in csp Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range            | Default Value          |
|-------------|----------|---------------|------------------------|------------------------|
|           0 | rw       | yes           | See state coding above | See state coding above |

## 12.1.3 Object 6062 h : Position Demand Value

This object provides the demanded position value. The value is given in encoder steps. Object 6062 h indicates the actual position of the motor. Do not confuse it with objects 6063 h and 6064 h .

Object Description

Table 243: Object Description (6062h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6062 h  | Position Demand Value | Variable      | SIGNED32    |

Entry Description

Table 244: Entry Description (6062h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 12.1.4 Object 6063 h : Position Actual Internal Value

This object provides the demanded position value. The value is given in encoder steps. It is the same as object 6062 h .

Object Description

Table 245: Object Description (6063h)

| Index   | Name                           | Object Type   | Data Type   |
|---------|--------------------------------|---------------|-------------|
| 6063 h  | Position Actual Internal Value | Variable      | SIGNED32    |

Entry Description

Table 246: Entry Description (6063h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 12.1.5 Object 6064 h : Position Actual Value

This object provides the actual value of the position measurement device. It always contains the same value as object 6063 h .

<!-- image -->

Object Description

Table 247: Object Description (6064h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6064 h  | Position Actual Value | Variable      | SIGNED32    |

Entry Description

Table 248: Entry Description (6064h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 12.1.6 Object 606C h : Velocity Actual Value

This object shows the actual velocity value of the motor. The value is given in units of rpm.

Object Description

Table 249: Object Description (606Ch)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 606C h  | Velocity Actual Value | Variable      | SIGNED32    |

Entry Description

Table 250: Entry Description (606Ch)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 12.1.7 Object 607A h : Target Position

The target position is the position the drive should move to in cyclic synchronous position mode using the current interpolation time period. In csp mode, this value is always interpreted as an absolute value.

Object Description

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 607A h  | Target Position | Variable      | SIGNED32    |

Table 251: Object Description (607Ah in csp Mode)

<!-- image -->

Entry Description

Table 252: Entry Description (607Ah in csp Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | SIGNED32      |               0 |

## 12.1.8 Object 607D h : Software Position Limit

This object indicates the con/uniFB01gured maximal and minimal software position limits. These parameters de/uniFB01ne the absolute position limits for the position demand value and position actual value. Every new target position is checked against these limits. The limit positions are always relative to the machine home position. Before being compared with the target position, they are corrected internally by the home offset as follows:

Corrected \_ min \_ position \_ limit = min \_ position \_ limit -home \_ offset Corrected \_ max \_ position \_ limit = max \_ position \_ limit -home \_ offset

Object Description

Table 253: Object Description (607Dh)

| Index   | Name                    | Object Type   | Data Type   |
|---------|-------------------------|---------------|-------------|
| 607D h  | Software Position Limit | Array         | SIGNED32    |

Entry Description

Table 254: Entry Description (607Dh)

|   Sub-index | Description            | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|------------------------|----------|---------------|---------------|-----------------|
|           1 | Minimum Position Limit | rw       | no            | SIGNED32      |     -2147483648 |
|           2 | Maximum Position Limit | rw       | no            | SIGNED32      |      2147483647 |

## 12.1.9 Object 60B0 h : Position Offset

This object provides an offset to the target position (object 607A h , see section 12.1.7). The value is given in encoder steps and is added to the target position.

Object Description

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 60B0 h  | Position Offset | Variable      | SIGNED32    |

Table 255: Object Description (60B0h)

<!-- image -->

Entry Description

Table 256: Entry Description (60B0h)

|   Sub-index | Access   | PDO Mapping   | Value Range              |   Default Value |
|-------------|----------|---------------|--------------------------|-----------------|
|           0 | rw       | yes           | -2147483648...2147483647 |               0 |

## 12.1.10 Object 60C2 h : Interpolation Time Period

This object indicates the interpolation cycle time. The interpolation time period (subindex 01 h ) is given in 10 interpolation \_ time \_ index s. The interpolation time index (subindex 02 h ) is dimensionless.

Object Description

Table 257: Object Description (60C2h)

| Index   | Name                      | Object Type   | Data Type                                  |
|---------|---------------------------|---------------|--------------------------------------------|
| 60C2 h  | Interpolation Time Period | Record        | Interpolation time period record (0080 h ) |

Entry Description

|   Sub-index | Description                     | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|---------------------------------|----------|---------------|---------------|-----------------|
|           0 | Highest sub-index supported     | ro       | no            | UNSIGNED8     |               2 |
|           1 | Interpolation Time Period Value | rw       | no            | UNSIGNED8     |               1 |
|           2 | Interpolation Time Index        | rw       | no            | -3...3        |              -3 |

Table 258: Entry Description (60C2h)

<!-- image -->

## 13 Cyclic Synchronous Velocity Mode

The main control parameters are the target velocity (object 60FF h , see section 13.1.4) and the interpolation time period (object 60C2 h , see section 13.1.7). The drive automatically sets the acceleration in such a manner that the next target velocity is reached within the interpolation time period. Acceleration and deceleration ramps are not used in this mode.

The cyclic synchronous velocity mode is used to directly control the velocity of the motor. It contains limit functions, but not a trajectory generator. The trajectory generator is located in the control device (the manager), not in the drive device. In cyclic synchronous manner, the control device provides a target velocity to the drive device, which performs position control, velocity control, and torque control.

The cyclic synchronous velocity mode covers the following sub-functions:

- Monitoring of the position.
- Velocity demand value input directly through an object.
- Limiting the position using the software limits or hardware limit switches.

## 13.1.1 Object 6040 h : Controlword

## 13.1 Detailed Object Speci/uniFB01cations

This object indicates the received command controlling the power drive system /uniFB01nite state machine (PDS FSM). The CiA-402 state machine can be controlled using this object. See Figure 13 for detailed information. The cyclic synchronous velocity mode does not use any mode speci/uniFB01c bits of the Controlword.

Structure of the Controlword

Legend: nu = not used; h = halt; fr = fault reset; eo = enable operation; qs = quick stop; ev = enable voltage; so = switch on.

| 4   | 4   | 4   | 4   | 4   | 4   | 4   | 4   | 4   |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 15  | 9   | 8   | 7   | 6   | 3   | 2   | 1   | 0   |
| nu  | nu  | h   | fr  | nu  | eo  | qs  | ev  | so  |
| MSB | MSB |     |     |     |     |     |     | LSB |

Table 259: Structure of the Controlword in csv Mode

<!-- image -->

Command Coding

| Controlword                    | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   |
|--------------------------------|---------------|---------------|---------------|---------------|---------------|---------------|
| Command                        | Bits of       | Bits of       | Bits of       | Bits of       | Bits of       | Transitions   |
|                                | Bit 7         | Bit 3         | Bit 2         | Bit 1         | Bit 0         |               |
| Shutdown                       | 0             | x             | 1             | 1             | 0             | 2, 6, 8       |
| Switch on                      | 0             | 0             | 1             | 1             | 1             | 3             |
| Switch on and enable operation | 0             | 1             | 1             | 1             | 1             | 3, 4          |
| Disable voltage                | 0             | x             | x             | 0             | x             | 7, 9, 10, 12  |
| Quick stop                     | 0             | x             | 0             | 1             | x             | 7, 10, 11     |
| Disable operation              | 0             | 0             | 1             | 1             | 1             | 5             |
| Enable operation               | 0             | 1             | 1             | 1             | 1             | 4, 16         |
| Fault reset                    | 0-to-1        | x             | x             | x             | x             | 15            |

Table 260: Command Coding

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6040 h  | Controlword | Variable      | UNSIGNED16  |

Object Description

Table 261: Object Description (6040h in csv Mode)

Entry Description

Table 262: Entry Description (6040h in csv Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range               | Default Value             |
|-------------|----------|---------------|---------------------------|---------------------------|
|           0 | rw       | yes           | See command coding above. | See command coding above. |

## 13.1.2 Object 6041 h : Statusword

For more information about the coding, refer to the CANopen drives and motion control device pro/uniFB01le, part 2.

This object provides the status of the PDS FSA. It re/uniFB02ects the status of the CiA-402 state machine. See Figure 13 for detailed information. The object is structured as de/uniFB01ned below.

<!-- image -->

Structure of the Statusword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; oe = operation enable; qs = quick stop; ve = voltage enable; so = switch on.

Table 263: Structure of the Statusword in csv Mode

| 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0    |
|------|------|------|------|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| dir  | mot  | oms  |      | ila  | r    | rm  | ms  | w   | sod | qs  | ve  | f   | oe  | so  | rtso |
| MSB  |      |      |      |      |      |     |     |     |     |     |     |     |     |     | LSB  |

Manufacturer Speci/uniFB01c Bits

Table 264: Manufacturer Speci/uniFB01c Bits

|   Bit | Name                  | De/uniFB01nition                          |
|-------|-----------------------|-------------------------------------------|
|    14 | Motor activity        | 0: Motor stands still. 1: Motor rotates.  |
|    15 | Direction of rotation | This bit shows the direction of rotation. |

Operation Mode Speci/uniFB01c Bits in csv Mode

Table 265: Operation Mode Speci/uniFB01c Bits in csv Mode

|   Bit | Name                    | De/uniFB01nition                                                                     |
|-------|-------------------------|--------------------------------------------------------------------------------------|
|    10 | Reserved                | Not used.                                                                            |
|    12 | Target position ignored | 0: Target velocity ignored. 1: Target velocity used as input to velocity controller. |
|    13 | Reserved                | Not used.                                                                            |

State Coding

| Statusword            | FSA State              |
|-----------------------|------------------------|
| xxxx xxxx x0xx 0000 h | Not ready to switch on |
| xxxx xxxx x1xx 0000 h | Switch on disabled     |
| xxxx xxxx x01x 0001 h | Ready to switch on     |
| xxxx xxxx x01x 0011 h | Switched on            |
| xxxx xxxx x01x 0111 h | Operation enabled      |
| xxxx xxxx x00x 0111 h | Quick stop active      |
| xxxx xxxx x0xx 1111 h | Fault reaction active  |
| xxxx xxxx x0xx 1000 h | Fault                  |

Table 266: State Coding

<!-- image -->

Object Description

Table 267: Object Description (6041h in csv Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6041 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 268: Entry Description (6041h in csv Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range            | Default Value          |
|-------------|----------|---------------|------------------------|------------------------|
|           0 | rw       | yes           | See state coding above | See state coding above |

## 13.1.3 Object 606C h : Velocity Actual Value

This object shows the actual velocity value of the motor. The value is given in units of rpm.

Object Description

Table 269: Object Description (606Ch)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 606C h  | Velocity Actual Value | Variable      | SIGNED32    |

Entry Description

Table 270: Entry Description (606Ch)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 13.1.4 Object 60FF h : Target Velocity

In csv mode, the target velocity speci/uniFB01es the velocity to be reached within the interpolation time period. The values are given in rpm units.

Object Description

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 60FF h  | Target Velocity | Variable      | SIGNED32    |

Table 271: Object Description (60FFh)

<!-- image -->

Entry Description

Table 272: Entry Description (60FFh)

|   Sub-index | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|----------|---------------|---------------|-----------------|
|           0 | rw       | yes           | SIGNED32      |               0 |

## 13.1.5 Object 607D h : Software Position Limit

This object indicates the con/uniFB01gured maximal and minimal software position limits. These parameters de/uniFB01ne the absolute position limits for the position demand value and position actual value. Every new target position is checked against these limits. The limit positions are always relative to the machine home position. Before being compared with the target position, they are corrected internally by the home offset as follows:

Corrected \_ min \_ position \_ limit = min \_ position \_ limit -home \_ offset Corrected \_ max \_ position \_ limit = max \_ position \_ limit -home \_ offset

Object Description

Table 273: Object Description (607Dh)

| Index   | Name                    | Object Type   | Data Type   |
|---------|-------------------------|---------------|-------------|
| 607D h  | Software Position Limit | Array         | SIGNED32    |

Entry Description

Table 274: Entry Description (607Dh)

|   Sub-index | Description            | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|------------------------|----------|---------------|---------------|-----------------|
|           1 | Minimum Position Limit | rw       | no            | SIGNED32      |     -2147483648 |
|           2 | Maximum Position Limit | rw       | no            | SIGNED32      |      2147483647 |

## 13.1.6 Object 60B1 h : Velocity Offset

This object provides an offset to the target velocity (object 60FF h , see section 13.1.4). The value is added to the target velocity.

Object Description

| Index   | Name            | Object Type   | Data Type   |
|---------|-----------------|---------------|-------------|
| 60B1 h  | Velocity Offset | Variable      | SIGNED32    |

Table 275: Object Description (60B1h)

<!-- image -->

Entry Description

Table 276: Entry Description (60B1h)

|   Sub-index | Access   | PDO Mapping   | Value Range              |   Default Value |
|-------------|----------|---------------|--------------------------|-----------------|
|           0 | rw       | yes           | -2147483648...2147483647 |               0 |

## 13.1.7 Object 60C2 h : Interpolation Time Period

This object indicates the interpolation cycle time. The interpolation time period (subindex 01 h ) is given in 10 interpolation \_ time \_ index s. The interpolation time index (subindex 02 h ) is dimensionless.

Object Description

Table 277: Object Description (60C2h)

| Index   | Name                      | Object Type   | Data Type                                  |
|---------|---------------------------|---------------|--------------------------------------------|
| 60C2 h  | Interpolation Time Period | Record        | Interpolation time period record (0080 h ) |

Entry Description

|   Sub-index | Description                     | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|---------------------------------|----------|---------------|---------------|-----------------|
|           0 | Highest sub-index supported     | ro       | no            | UNSIGNED8     |               2 |
|           1 | Interpolation Time Period Value | rw       | no            | UNSIGNED8     |               1 |
|           2 | Interpolation Time Index        | rw       | no            | -3...3        |              -3 |

Table 278: Entry Description (60C2h)

<!-- image -->

## 14 Cyclic Synchronous Torque Mode

- Demand value input directly through an object.

The cyclic synchronous torque mode is used to directly control the torque of the motor, without the need for position or velocity control. It contains limit functions, but not a trajectory generator. The cyclic synchronous torque mode covers the following sub-functions:

- Monitoring of the torque.

## 14.1 Detailed Object Speci/uniFB01cations

- Limiting the position using the software limits or hardware limit switches.

## 14.1.1 Object 6040 h : Controlword

This object indicates the received command controlling the power drive system /uniFB01nite state machine (PDS FSM). The CiA-402 state machine can be controlled using this object. See Figure 13 for detailed information. The cyclic synchronous torque mode does not use any mode speci/uniFB01c bits of the Controlword.

Structure of the Controlword

Legend: nu = not used; h = halt; fr = fault reset; eo = enable operation; qs = quick stop; ev = enable voltage; so = switch on.

Table 279: Structure of the Controlword in cst Mode

| 4   | 4   | 4   | 4   | 4   | 4   | 4   | 4   | 4   |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 15  | 9   | 8   | 7   | 6   | 3   | 2   | 1   | 0   |
| nu  | nu  | h   | fr  | nu  | eo  | qs  | ev  | so  |
| MSB | MSB |     |     |     |     |     |     | LSB |

Command Coding

| Controlword                    | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   | Controlword   |
|--------------------------------|---------------|---------------|---------------|---------------|---------------|---------------|
| Command                        | Bits of       | Bits of       | Bits of       | Bits of       | Bits of       | Transitions   |
|                                | Bit 7         | Bit 3         | Bit 2         | Bit 1         | Bit 0         |               |
| Shutdown                       | 0             | x             | 1             | 1             | 0             | 2, 6, 8       |
| Switch on                      | 0             | 0             | 1             | 1             | 1             | 3             |
| Switch on and enable operation | 0             | 1             | 1             | 1             | 1             | 3, 4          |
| Disable voltage                | 0             | x             | x             | 0             | x             | 7, 9, 10, 12  |
| Quick stop                     | 0             | x             | 0             | 1             | x             | 7, 10, 11     |
| Disable operation              | 0             | 0             | 1             | 1             | 1             | 5             |
| Enable operation               | 0             | 1             | 1             | 1             | 1             | 4, 16         |
| Fault reset                    | 0-to-1        | x             | x             | x             | x             | 15            |

Table 280: Command Coding

<!-- image -->

Object Description

Table 281: Object Description (6040h in cst Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6040 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 282: Entry Description (6040h in cst Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range               | Default Value             |
|-------------|----------|---------------|---------------------------|---------------------------|
|           0 | rw       | yes           | See command coding above. | See command coding above. |

## 14.1.2 Object 6041 h : Statusword

For more information about the coding, refer to the CANopen drives and motion control device pro/uniFB01le, part 2.

This object provides the status of the PDS FSA. It re/uniFB02ects the status of the CiA-402 state machine. See Figure 13 for detailed information. The object is structured as de/uniFB01ned below.

Structure of the Statusword

Legend: nu = not used; r = reserved; oms = operation mode speci/uniFB01c; h = halt; fr = fault reset; oe = operation enable; qs = quick stop; ve = voltage enable; so = switch on.

Table 283: Structure of the Statusword in cst Mode

| 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0    |
|------|------|------|------|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| dir  | mot  | oms  |      | ila  | r    | rm  | ms  | w   | sod | qs  | ve  | f   | oe  | so  | rtso |
| MSB  |      |      |      |      |      |     |     |     |     |     |     |     |     |     | LSB  |

Manufacturer Speci/uniFB01c Bits

|   Bit | Name                  | De/uniFB01nition                          |
|-------|-----------------------|-------------------------------------------|
|    14 | Motor activity        | 0: Motor stands still. 1: Motor rotates.  |
|    15 | Direction of rotation | This bit shows the direction of rotation. |

Table 284: Manufacturer Speci/uniFB01c Bits

<!-- image -->

Operation Mode Speci/uniFB01c Bits in cst Mode

Table 285: Operation Mode Speci/uniFB01c Bits in cst Mode

|   Bit | Name                  | De/uniFB01nition                                                          |
|-------|-----------------------|---------------------------------------------------------------------------|
|    10 | Reserved              | Not used.                                                                 |
|    12 | Target torque ignored | 0: Target torque ignored. 1: Target torque used as input to control loop. |
|    13 | Reserved              | Not used.                                                                 |

State Coding

Object Description

| Statusword            | FSA State              |
|-----------------------|------------------------|
| xxxx xxxx x0xx 0000 h | Not ready to switch on |
| xxxx xxxx x1xx 0000 h | Switch on disabled     |
| xxxx xxxx x01x 0001 h | Ready to switch on     |
| xxxx xxxx x01x 0011 h | Switched on            |
| xxxx xxxx x01x 0111 h | Operation enabled      |
| xxxx xxxx x00x 0111 h | Quick stop active      |
| xxxx xxxx x0xx 1111 h | Fault reaction active  |
| xxxx xxxx x0xx 1000 h | Fault                  |

Table 286: State Coding

Table 287: Object Description (6041h in cst Mode)

| Index   | Name        | Object Type   | Data Type   |
|---------|-------------|---------------|-------------|
| 6041 h  | Controlword | Variable      | UNSIGNED16  |

Entry Description

Table 288: Entry Description (6041h in cst Mode)

|   Sub-index | Access   | PDO Mapping   | Value Range            | Default Value          |
|-------------|----------|---------------|------------------------|------------------------|
|           0 | rw       | yes           | See state coding above | See state coding above |

## 14.1.3 Object 6062 h : Position Demand Value

This object provides the demanded position value. The value is given in encoder steps. Object 6062 h indicates the actual position of the motor. Do not confuse it with objects 6063 h and 6064 h .

<!-- image -->

Object Description

Table 289: Object Description (6062h)

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6062 h  | Position Demand Value | Variable      | SIGNED32    |

Entry Description

Table 290: Entry Description (6062h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 14.1.4 Object 6063 h : Position Actual Internal Value

This object provides the demanded position value. The value is given in encoder steps. It is the same as object 6062 h .

Object Description

Table 291: Object Description (6063h)

| Index   | Name                           | Object Type   | Data Type   |
|---------|--------------------------------|---------------|-------------|
| 6063 h  | Position Actual Internal Value | Variable      | SIGNED32    |

Entry Description

Table 292: Entry Description (6063h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 14.1.5 Object 6064 h : Position Actual Value

This object provides the actual value of the position measurement device. It always contains the same value as object 6063 h .

Object Description

| Index   | Name                  | Object Type   | Data Type   |
|---------|-----------------------|---------------|-------------|
| 6064 h  | Position Actual Value | Variable      | SIGNED32    |

Table 293: Object Description (6064h)

<!-- image -->

Entry Description

Table 294: Entry Description (6064h)

|   Sub-index | Access   | PDO Mapping   | Value Range   | Default Value   |
|-------------|----------|---------------|---------------|-----------------|
|           0 | ro       | yes           | SIGNED32      | no              |

## 14.1.6 Object 6071 h : Target Torque

This object sets the desired torque value. The value is given in mA.

Object Description

Table 295: Object Description (6071h)

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 6071 h  | Target torque | Variable      | INTEGER16   |

Entry Description

Table 296: Entry Description (6071h)

|   Sub-index | Access   | PDO Mapping   | Value Range    |   Default Value |
|-------------|----------|---------------|----------------|-----------------|
|           0 | rw       | yes           | -32768...32767 |               0 |

## 14.1.7 Object 6077 h : Torque Actual Value

This object provides the actual torque value. The value is given in mA.

Object Description

Table 297: Object Description (6077h)

| Index   | Name                | Object Type   | Data Type   |
|---------|---------------------|---------------|-------------|
| 6077 h  | Torque actual value | Variable      | INTEGER16   |

Entry Description

Table 298: Entry Description (6077h)

|   Sub-index | Access   | PDO Mapping   | Value Range    |   Default Value |
|-------------|----------|---------------|----------------|-----------------|
|           0 | ro       | yes           | -32768...32767 |               0 |

## 14.1.8 Object 607D h : Software Position Limit

This object indicates the con/uniFB01gured maximal and minimal software position limits. These parameters de/uniFB01ne the absolute position limits for the position demand value and position actual value. Every new

<!-- image -->

target position is checked against these limits. The limit positions are always relative to the machine home position. Before being compared with the target position, they are corrected internally by the home offset as follows:

Corrected \_ min \_ position \_ limit = min \_ position \_ limit -home \_ offset Corrected \_ max \_ position \_ limit = max \_ position \_ limit -home \_ offset

Object Description

Table 299: Object Description (607Dh)

| Index   | Name                    | Object Type   | Data Type   |
|---------|-------------------------|---------------|-------------|
| 607D h  | Software Position Limit | Array         | SIGNED32    |

Entry Description

Table 300: Entry Description (607Dh)

|   Sub-index | Description            | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|------------------------|----------|---------------|---------------|-----------------|
|           1 | Minimum Position Limit | rw       | no            | SIGNED32      |     -2147483648 |
|           2 | Maximum Position Limit | rw       | no            | SIGNED32      |      2147483647 |

## 14.1.9 Object 60B2 h : Torque Offset

This object provides an offset to the torque value. It is added to the target torque (object 6071 h , see Section 14.1.6).

Object Description

Table 301: Object Description (60B2h)

| Index   | Name          | Object Type   | Data Type   |
|---------|---------------|---------------|-------------|
| 60B2 h  | Torque Offset | Variable      | SIGNED16    |

Entry Description

Table 302: Entry Description (60B2h)

|   Sub-index | Access   | PDO Mapping   | Value Range    |   Default Value |
|-------------|----------|---------------|----------------|-----------------|
|           0 | rw       | yes           | -32768...32767 |               0 |

## 14.1.10 Object 60C2 h : Interpolation Time Period

This object indicates the interpolation cycle time. The interpolation time period (subindex 01 h ) is given in 10 interpolation \_ time \_ index s. The interpolation time index (subindex 02 h ) is dimensionless.

<!-- image -->

Object Description

Table 303: Object Description (60C2h)

| Index   | Name                      | Object Type   | Data Type                                  |
|---------|---------------------------|---------------|--------------------------------------------|
| 60C2 h  | Interpolation Time Period | Record        | Interpolation time period record (0080 h ) |

Entry Description

|   Sub-index | Description                     | Access   | PDO Mapping   | Value Range   |   Default Value |
|-------------|---------------------------------|----------|---------------|---------------|-----------------|
|           0 | Highest sub-index supported     | ro       | no            | UNSIGNED8     |               2 |
|           1 | Interpolation Time Period Value | rw       | no            | UNSIGNED8     |               1 |
|           2 | Interpolation Time Index        | rw       | no            | -3...3        |              -3 |

Table 304: Entry Description (60C2h)

<!-- image -->

## 15 Emergency Messages (EMCY)

The module sends an emergency message if an error occurs. The message contains information about the error type. The module can map internal errors and object 1001 h (error register) is part of every emergency object.

Emergency Messages (EMCY) of the TMCM-1690

| Error code   |   Additional byte |   Additional byte |   Additional byte |   Additional byte |   Additional byte | Description                                                                                                                    |
|--------------|-------------------|-------------------|-------------------|-------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Error code   |                 1 |                 2 |                 3 |                 4 |                 5 | Description                                                                                                                    |
| 0000 h       |                 0 |                 0 |                 0 |                 0 |                 0 | Fault reset The fault reset command is executed.                                                                               |
| 4310 h       |                 2 |                 0 |                 0 |                 0 |                 0 | Overtemperature error Themotordriveris switched off becausethetemperaturelimit is exceeded.                                    |
| 5441 h       |                 0 |               255 |                 0 |                 0 |                 0 | Shutdown switch active The enable signal is missing (due to the shutdown switch) and the motor driver has been switched off.   |
| 6320 h       |                 0 |               255 |                 0 |                 0 |                 0 | Parameter error The data in the received PDO is either wrong or cannot be ac- cepted due to the internal state of the drive.   |
| 8611 h       |                 0 |                 0 |                 0 |                 0 |                 0 | Following error The deviation between motor position counter and encoder position counter exceeded the following error window. |
| ff00 h       |                 0 |                 0 |                 0 |                 0 |                 0 | Undervoltage The supply voltage is too low to drive a motor.                                                                   |
| ff01 h       |                 1 |                 0 |                 0 |                 0 |                 0 | Positive software limit The actual position is outside the range de/uniFB01ned by object 607d h .                              |
| ff01 h       |                 2 |                 0 |                 0 |                 0 |                 0 | Negative software limit The actual position is outside the range de/uniFB01ned by object 607d h .                              |
| ff01 h       |                 3 |                 0 |                 0 |                 0 |                 0 | Positive limit switch Thepositive limit switch is touched outside of the homingfunc- tion.                                     |
| ff01 h       |                 4 |                 0 |                 0 |                 0 |                 0 | Negative limit switch The negative limit switch is touched outside of the homing function.                                     |

Table 305: Emergency Messages (EMCY)

<!-- image -->

## 16 SDO Abort Codes

Trying to access an object through SDO read or SDO write may result in an error. In such a case, an SDO abort transfer message containing an abort code is sent. The following table lists all SDO abort codes de/uniFB01ned by the ETG.1000.6 standard. Not all of these are used by the TMCM-1690 module.

SDO Abort Codes

| Abort code   | Description                                                                                 |
|--------------|---------------------------------------------------------------------------------------------|
| 05030000 h   | Toggle bit not alternated.                                                                  |
| 05040000 h   | SDO protocol timed out.                                                                     |
| 05040001 h   | Client/server command speci/uniFB01er not valid or unknown.                                 |
| 05040005 h   | Out of memory.                                                                              |
| 06010000 h   | Unsupported access to an object.                                                            |
| 06010001 h   | Attempt to read a write only object.                                                        |
| 06010002 h   | Attempt to write a read only object.                                                        |
| 06010003 h   | Subindex cannot be written, SI0 must be 0 for write access.                                 |
| 06010004 h   | SDO complete access not supported for objects of variable length such as ENUM object types. |
| 06010005 h   | Object length exceeds mailbox size.                                                         |
| 06010006 h   | Object mapped to RPDO, SDO download blocked.                                                |
| 06020000 h   | Object does not exist in object dictionary.                                                 |
| 06040041 h   | Object cannot be mapped to the PDO.                                                         |
| 06040042 h   | The number and length of the objects to be mapped exceeds the PDO length.                   |
| 06040043 h   | General parameter incompatibility reason.                                                   |
| 06040047 h   | General internal incompatibility in the device.                                             |
| 06060000 h   | Access failed due to a hardware error.                                                      |
| 06070010 h   | Data type does not match, length of service parameter does not match.                       |
| 06070012 h   | Data type does not match, length of service parameter too high.                             |
| 06070013 h   | Data type does not match, length of service parameter too low.                              |
| 06090011 h   | Sub-index does not exist.                                                                   |
| 06090030 h   | Value range of parameter exceeded.                                                          |
| 06090031 h   | Value of parameter too high.                                                                |
| 06090032 h   | Value of parameter too low.                                                                 |
| 06090036 h   | Maximum value is less than minimum value.                                                   |
| 08000000 h   | General error.                                                                              |
| 08000020 h   | Data cannot be transferred or stored to the application.                                    |
| 08000021 h   | Data cannot be transferred or stored to the application because of local control.           |

<!-- image -->

Abort code

Description

| 08000022 h   | Data cannot be transferred or stored to the application because of the present device state.   |
|--------------|------------------------------------------------------------------------------------------------|
| 08000023 h   | Object dictionary dynamic generation failed or no object dictionary is present.                |

Table 306: SDO Abort Codes

<!-- image -->

## 17 Firmware Update

Download the /uniFB01rmware update /uniFB01les from the TMCM-1690's product page.

Note

## 17.1 Over RS232

## 17.2 Over FoE

Once the update is completed, it is mandatory to also update the 'Revision Number' in the SII EEPROM of the TMCM-1690. Check on how to accomplish this using TwinCAT 3 in section 17.3.

If the used base board for the TMCM-1690 is equipped with an RS232 transceiver, the /uniFB01rmware can be updated with an USB-RS232 converter using the TMCL-IDE 1 . For the upload through RS232, the .hex-/uniFB01le is used.

The /uniFB01rmware can also be updated using the File over EtherCAT (FoE) protocol. Before starting the download, the TMCM-1690 must be set to bootstrap mode. To make the upload work, it is necessary to set the mailbox timeout to at least 5000 ms. The FoE protocol requires a /uniFB01le name and password for a /uniFB01le upload. Both are not evaluated by the TMCM-1690, so these values do not matter. Make sure to upload a valid /uniFB01rmware /uniFB01le. For FoE, .bin-/uniFB01les are used. After the upload is complete, a power cycle is required to complete the update.

This is a step-by-step description on how to update the SII EEPROM after a /uniFB01rmware update. It is expected that the TMCM-1690 to update is connected to the TwinCAT master system. Also make sure the new ESIXML /uniFB01le that came with the new /uniFB01rmware is copied into the TwinCAT install directory.

## 17.3 Updating the SII EEPROM Using TwinCAT 3

- Right-click the EtherCAT master, the TMCM-1690 is connected to, and click 'Add New Item...'.

1 TMCL-IDE: ❤/a116/a116♣/a115✿✴✴✇✇✇✳/a116/a114✐♥❛♠✐❝✳❝♦♠✴/a115✉♣♣♦/a114/a116✴/a115♦❢/a116✇❛/a114❡✴/a116♠❝❧✲✐❞❡

<!-- image -->

<!-- image -->

- In the Dialog that comes up, select the revision the /uniFB01rmware is updated to.
- Click 'Reload Devices' and if asked to 'Activate Free Run' click 'No'.
- Now, open the 'Advanced Settings Dialog'.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

- There, just download the EEPROM content generated from the ESI-XML information into the TMCM1690.
- The download takes several minutes.

<!-- image -->

To check if the revision number in the SII EEPROM is in sync with the /uniFB01rmware version in the /uniFB02ash memory, compare the revision number in the SII EEPROM with the number stored in subindex 3 of object Object 1018 h : Identity Object. They must be equal.

<!-- image -->

## 18 Figures Index

|     | . . . . . . . . . . .                                                                           | 6     | 11    | NMT . . . . .                              |       |
|-----|-------------------------------------------------------------------------------------------------|-------|-------|--------------------------------------------|-------|
| 2 3 | Current Regulation Regulation . . . . . . . . .                                                 |       |       | State Machine Model . . .                  | 19    |
| 4   | Velocity                                                                                        | 7 8   | 12    | Device Finite                              | 20 68 |
| 5   | . . Positioning Regulation . . . . . . . . . Algorithm                                          |       | 13 14 | . . . . . DS402 State Machine Function . . | 86    |
| 6   | Positioning                                                                                     | 9     | 15    | Homing Mode Homing Method 17 . .           | 87    |
|     | . . . . . . . . . Linear Shaped Ramp (Left) S Shaped Ramp (Right) . . . . . . . . . . . . . . . |       |       | . . . Homing Method 18                     |       |
| 7   | . . . . . . .                                                                                   | 10    | 16 17 | . . . . . Homing Method 19 . . . . .       | 88    |
|     | Filter Blocks Mechanical                                                                        | 12 14 | 18    | Homing Method 21                           | 88 88 |
| 8   | . . . . . . . . Brake Settings .                                                                |       |       | . . . . . . . . .                          |       |
| 9   | . . . . . . Brake Chopper Example Schematic .                                                   | 15    | 19    | Home Offset . . . . .                      | 93    |

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

15

<!-- image -->

1

Motor Regulation

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

5

10

IIt Monitor Windows

## 19 Tables Index

|       | Current Regulation Parameters . .                                       |       |         | h Description (2015 ) . .                                      |       |
|-------|-------------------------------------------------------------------------|-------|---------|----------------------------------------------------------------|-------|
| 2     | .                                                                       | 6     | 54      | Object h                                                       | 39    |
| 3     | Velocity Regulation Parameters . Parameters                             | 7     | 55      | Entry Description (2015 h ) . . (2015                          | 40    |
| 4     | Position Regulation . . . . . . . . .                                   | 8     | 56      | Parameter Description h ) .                                    | 40    |
| 5     | Service Primitives . . . .                                              | 17    | 57      | Object Description (2019 h .                                   | 40    |
| 6     | Service Types . . . . . . . . . .                                       | 18    | 58      | Entry Description (2019 h ) .                                  | 41    |
| 7     | Object Dictionary . . . . . .                                           | 21    | 59      | . Parameter Description (2019 h .                              | 41    |
| 8     | . . . . Object Description (1000 ) . . . . .                            | 22    | 60      | Object Description (201E h ) . Entry Description (201E )       | 42    |
| 9     | h Entry Description (1000 h ) . . . . . Object Description (1001        | 22    | 61      | h . Parameter Description                                      | 42 42 |
| 10    | h ) . . . . . )                                                         | 22    | 62      | . (201E h (2023 h ) .                                          |       |
| 11 12 | Entry Description (1001 h . . . . . Bits . . . .                        | 22    | 63      | Object Description . Entry Description (2023                   | 42    |
| 13    | Error Register . . . . . .                                              | 23 23 | 64 65   | h ) . Parameter Descritption                                   | 43 43 |
|       | Object Description (1008 h . . . . . Entry Description (1008 )          |       |         | . (2023 Object Description (2028 ) .                           | 43    |
| 14 15 | ) h . . . . .                                                           | 23 23 | 66      | h . Entry Description (2028 )                                  |       |
|       | Object Description (1009 h . . . . .                                    |       | 67      | h .                                                            | 44    |
| 16 17 | ) Entry Description (1009 h ) . . . . . )                               | 24 24 | 68      | . Parameter Description (2028 h Object Description (202B )     | 44    |
|       | Object Description (100A h . . . .                                      |       | 69      | h . )                                                          | 44    |
| 18    | Entry Description (100A h ) . . . . . . . . . . . .                     | 24    | 70      | Entry Description (202B h .                                    | 45    |
| 19 20 | Save Signature . . . . . Object                                         | 25    | 71 72   | . Parameter Description (202B Object Description (202D )       | 45 45 |
|       | Description (1010 h . . . . . Entry                                     | 25    |         | h . )                                                          | 46    |
| 21 22 | ) Description (1010 h ) . . . . . Signature . . . . . .                 | 25 26 | 73 74   | Entry Description (202D h . . Object Description (2032         | 46    |
|       | Load . . . . . Object                                                   |       |         | h ) . . )                                                      |       |
| 23 24 | Description (1011 h ) . . . . . Entry Description (1011 )               | 26    | 75 76   | Entry Description (2032 h . . Object Description (2037         | 46    |
| 25    | h . . . . . Object Description (1018                                    | 26    |         | . .                                                            | 47    |
| 26    | h ) . . . . .                                                           | 27 27 | 77      | h ) Entry Description (2037 h ) . .                            | 47    |
|       | Entry Description (1018 h ) . . . . .                                   |       | 78      | Object Description (203C h ) . Entry )                         | 47 48 |
| 27 28 | Object Description (1600 h ) . . . . .                                  | 27 28 | 79      | Description (203C h . . Description                            |       |
|       | Entry Description (1600 h ) . . . .                                     |       | 80      | Object (2041 h ) . .                                           | 48    |
| 29    | . Object Description (1A00 h ) . . . .                                  | 28 29 | 81      | Entry Description (2041 h ) .                                  | 48 49 |
| 30    | Entry Description (1A00 h ) . . .                                       |       | 82      | . Parameter Description (2041 h .                              | 49    |
| 31 32 | . . Sync Manager Communication Types (1C00 h ) .                        | 29 29 | 83 84   | Object Description (2046 h ) . Entry Description (2046 )       |       |
|       | Object Description . . .                                                |       |         | h .                                                            | 49    |
| 33    | Entry Description (1C00 h ) . . . . . )                                 | 30    | 85      | . Parameter Description (2046 h ) .                            | 49    |
| 34    | Object Description (1C12 h . . . . Entry Description (1C12 )            | 30    | 86      | Object Description (204B h Entry Description (204B )           | 50 50 |
| 35    | h . . . . . )                                                           | 30    | 87      | h . .                                                          |       |
| 36    | Object Description (1C13 h . . . .                                      | 30    | 88      | Parameter Description (204B )                                  | 50    |
| 37    | Entry Description (1C13 h ) . . . . . )                                 | 31    | 89      | Object Description (2050 . .                                   | 50 51 |
| 38    | Object Description (2000 h . . . . .                                    | 32    | 90 91   | h Entry Description (2050 h ) . .                              |       |
| 39    | Entry Description (2000 h ) . . . .                                     | 32    |         | Parameter Description (2050 h )                                | 51    |
| 40    | . Parameter Description (2000 h ) . . (2003 ) .                         | 33    | 92      | Object Description (2055 h . . )                               | 51    |
| 41    | Object Description . . . .                                              | 33    | 93      | Entry Description (2055 h . . Object Description               | 52 52 |
| 42    | h Entry Description (2003 h ) . . . . . (2003                           | 33 34 | 94      | (205A h ) .                                                    |       |
| 43    | Parameter Description h ) . .                                           |       | 95      | Entry Description (205A h ) .                                  | 53    |
| 44    | Object Description (2005 h ) . . . . . )                                | 34 35 | 96      | . Parameter Description (205A ) .                              | 53    |
| 45    | Entry Description (2005 . . . . .                                       |       | 97      | Object Description (205F h . )                                 | 53    |
| 46    | h Object Description (200A h ) . . . . )                                | 35 35 | 98      | Entry Description (205F . Parameter Description                | 54    |
| 47 48 | Entry Description (200A h . . . . .                                     | 36    | 99      | h . (205F h Object Description (2064 ) .                       | 54 54 |
|       | Object Description (200F h ) . . . . .                                  |       | 100     | h .                                                            |       |
| 49 50 | Entry Description (200F h ) . . . . . Parameter Description (200F ) . . | 36 37 | 101 102 | Entry Description (2064 h ) . . Object Description (2069 ) . . | 54 55 |
| 51    | h Object Description (2014 h ) . . . . .                                | 37    | 103     | h Entry Description (2069 h ) . . h                            | 55    |
| 52    | Entry Description (2014 h ) . . . . .                                   | 38    | 104     | Object Description (206B ) .                                   | 55    |

Parameter Description (2014

)

.

.

.

.

39

<!-- image -->

1

Abbreviations Used in this Manual

.

.

4

53

105

Entry Description (206B

)

.

.

.

.

.

.

.

55

157

Operation Mode Speci/uniFB01c

| 106     | h Object Description (206C h ) . . . . . . .                                        | 56    |         | Mode . . . . . . . . . . . . . . . . . . . .                                       | 71 71   |
|---------|-------------------------------------------------------------------------------------|-------|---------|------------------------------------------------------------------------------------|---------|
| 107     | Entry . . . . . .                                                                   |       |         |                                                                                    |         |
| 108     | Description (206C h ) h                                                             | 56    | 158 159 | State Coding . . . . . . . . . . . . . . Object Description (6041 in pp            |         |
| 109     | Object Description (206D ) . . . . . . Entry                                        | 56    |         | h Mode) Mode)                                                                      | 71 71   |
|         | Description (206D h ) . . . . . . . (206E                                           | 56    | 160     | Entry Description (6041 h in pp ) . . . .                                          | 72      |
| 110     | Object Description ) . . . . . . .                                                  | 57 57 | 161 162 | Object Description (6062 h . . . Entry Description (6062 )                         |         |
| 111 112 | h Entry Description (206E h ) . . . . . . . Description (207D                       | 57    |         | h . . . . . . . Object Description (6063 ) .                                       | 72 72   |
| 113     | Object h ) . . . . . . Entry Description (207D )                                    |       | 163 164 | h . . . . . . Entry Description (6063 )                                            |         |
| 114     | h . . . . . . . Object Description (2082 h )                                        | 57    |         | h . . . . . . . Object Description (6064 ) .                                       | 72 72   |
|         | . . . . . . . Entry                                                                 | 57    | 165 166 | h . . . . . .                                                                      |         |
| 115     | Description (2082 h ) . . . . . . . .                                               | 58    | 167     | Entry Description (6064 h ) . . . . . . . ) .                                      | 73      |
| 116 117 | Bit De/uniFB01nitions (2702 h ) . . . . . . Description                             | 58 58 |         | Object Description (6067 h . . . . . .                                             | 73 73   |
|         | . . Object (2702 h ) . . . . . . . Entry Description (2702 ) .                      | 58    | 168     | Entry Description (6067 h ) . . . . . . . ) .                                      |         |
| 118     | h . . . . . . Description (270E                                                     |       | 169     | Object Description (6068 h . . . . . . Entry Description (6068 )                   | 73      |
| 119     | Object h ) . . . . . . . .                                                          | 58    | 170     | h . . . . . . .                                                                    | 74      |
| 120 121 | Entry Description (270E h ) . . . . . . Description (605A )                         | 59 60 | 171 172 | Object Description (606C h ) . . . . . .                                           | 74 74   |
| 122     | Value h . . . . . . . )                                                             |       |         | Entry Description (606C h ) . . .                                                  | 74      |
|         | Object Description (605A h . . . . . .                                              | 60    | 173 174 | . . . . Object Description (607A h in pp Mode) Mode)                               |         |
| 123 124 | Entry Description (605A h ) . . . . . . . Value Description (605B )                 | 61    |         | Entry Description (607A h in pp Object Description (607D h ) . . .                 | 74 75   |
|         | h . . . . . . . Object Description (605B                                            | 61 61 | 175 176 | . . . Entry Description (607D                                                      |         |
| 125     | h ) . . . . . .                                                                     |       |         | h ) . . . . . . . (6081 h                                                          | 75      |
| 126     | Entry Description (605B h ) . . . . . . . Value Description (605C )                 | 61 61 | 177 178 | Object Description ) . . . . . . . )                                               | 75 75   |
| 127 128 | h . . . . . . . Object                                                              |       |         | Entry Description (6081 h . . . . . . .                                            |         |
|         | Description (605C h ) . . . . . . Description (605C )                               | 62 62 | 179     | Object Description (6083 h ) . . . . . . . Entry Description (6083 )               | 76      |
| 129 130 | Entry h . . . . . . . Value Description (605D                                       | 62    | 180 181 | h . . . . . . .                                                                    | 76      |
|         | h ) . . . . .                                                                       |       | 182     | Object Description (6084 h . . . . . .                                             | 76      |
| 131     | . . Object Description (605D h ) . . . . . . Entry . .                              | 62    |         | ) . Entry Description (6084 h ) . . . . . . .                                      | 76      |
| 132     | Description (605D h ) . . . . . Value )                                             | 62    | 183 184 | Object Description (6085 h ) . . . . .                                             | 77      |
| 133     | Description (605E h . . . . . .                                                     | 63    |         | . . Entry Description (6085 h ) . . . . . .                                        |         |
| 134 135 | . . . . . .                                                                         | 63    |         | . in pv .                                                                          | 77      |
|         | . Object Description (605E h ) . Entry Description (605E h ) . . . . . . .          | 63    | 185     | Structure of the Controlword Mode . . . . . . . . . . . . . . . . . .              | 78 79   |
| 136 137 | Value Description (6060 h ) . . . . . . . Object Description (6060 ) . . . . . . .  | 63 64 | 186 187 | Command Coding . . . . . . . . . . . . Object Description (6040 h in pv Mode)      |         |
| 138     | h Entry Description (6060 h ) . . . . . . .                                         | 64    |         | Entry Description (6040 h in pv Mode) Structure of the Statusword in pv            | 79      |
| 139     | Value Description (6061 ) . . . . . .                                               |       | 188 189 | Mode .                                                                             | 79 80   |
|         | h . . . . . .                                                                       | 64    |         | . .                                                                                |         |
| 140 141 | . Object Description (6061 h ) . Entry Description (6061 ) . . . . . . .            | 64 65 | 190 191 | Manufacturer Speci/uniFB01c Bits . . . . Operation Mode Speci/uniFB01c Bits in pv  | 80      |
| 142     | h Object Description (60FD h ) . . . . . . )                                        | 65    | 192     | Mode . . . . . . . . . . . . . . . . . . . State Coding . . . . . . . . . . .      | 80 80   |
| 143     | Entry Description (60FD h . . . . . . .                                             | 65    |         | . .                                                                                |         |
| 144 145 | Value De/uniFB01nition (6502 h ) . . . . . . . . Object Description (6502           | 66    | 193     | . . Object Description (6041 h in pv Mode) Entry Description (6041 in pv Mode) . . | 81      |
| 146     | h ) . . . . . . . Description (6502 )                                               | 66 66 | 194     | h Object Description (6062 ) . . . .                                               | 81      |
|         | Entry h . . . . . . . .                                                             |       | 195     | h . .                                                                              | 81      |
| 147     | Value De/uniFB01nition (67FF h ) . . . . . .                                        | 67    | 196 197 | Entry Description (6062 h ) . . . . . . Object Description (6063 )                 | 81 81   |
| 148     | . Object Description (67FF h ) . . . . . . . .                                      | 67    |         | h . . . . . . . .                                                                  |         |
| 149 150 | Entry Description (67FF h )                                                         | 67    | 198     | Entry Description (6063 h ) . . . . . .                                            | 82      |
|         | . . . . .                                                                           |       | 199     | Object Description (6064 h ) . . . . . . .                                         | 82      |
|         | . Structure of the Controlword in pp Mode . . . . . . . . . . . . . . . . . . .     | 69    | 200 201 | Entry Description (6064 h ) . . . . . . . Object Description (606C . . . . . .     | 82      |
| 151     | Operation Mode Speci/uniFB01c Bits in pp Mode . . . . . . . . . . . . . . . . . . . | 69 69 | 202 203 | h ) Entry Description (606C h ) . . . . . .                                        | 82 82   |
| 152     | Command Coding . . . . . . . . . . .                                                |       |         | . . . . . . . .                                                                    | 83      |
| 153     | . Object Description (6040 in pp Mode)                                              | 70 70 | 204     | Object Description (607D h ) Entry Description (607D ) . . . . . .                 | 83      |
| 154     | h Entry Description (6040 in pp Mode)                                               |       | 205     | h Object Description (6083 ) . . . . . . .                                         | 83      |
| 155     | h Structure of the Statusword in pp Mode                                            | 70    | 206 207 | h Entry Description (6083 h ) . . . . . . . )                                      | 83      |
| 156     | Manufacturer Speci/uniFB01c Bits . . . . . . .                                      | 70    |         | Object Description (6085 h . . . . . . .                                           | 84      |

Bits in pp

<!-- image -->

208

Entry Description (6085

)

.

.

.

.

.

.

.

84

258

Entry Description (60C2

|         | h Object Description (60FF h ) . . . . . . .                                                                             | 84      | 259     | h Structure of the csv                                                            |              |
|---------|--------------------------------------------------------------------------------------------------------------------------|---------|---------|-----------------------------------------------------------------------------------|--------------|
| 209 210 | Entry Description (60FF h                                                                                                | 84      |         | Controlword in Mode . . . . . . . . . . . . . . . . . . . . . . . . . . .         | 103          |
| 211     | ) . . . . . . . Supported CANopen Homing Methods                                                                         | 87      | 260     | Command Coding . .                                                                | 104          |
| 212     | Structure of the Controlword in hm Mode . . . . . . . . . . . . . . . . . . .                                            | 90      | 261 262 | Object Description (6040 h in csv Mode)104 Entry Description (6040 h in csv Mode) | 104          |
|         | Operation Mode Speci/uniFB01c Bits in hm . .                                                                             |         | 263     | Structure of the Statusword in csv Mode105 . .                                    |              |
| 213     | Mode . . . . . . . . . . . . . . . . . . Coding . . . . . . . . . . .                                                    | 90      | 264     | Manufacturer Speci/uniFB01c Bits . . . . Bits in                                  | 105          |
| 214     | Command                                                                                                                  | 90      | 265     | Operation Mode Speci/uniFB01c csv Mode . . . . . . . . . . . . .                  |              |
| 215     | Object Description (6040 h in hm Mode)                                                                                   | 91      |         | . . . .                                                                           | 105          |
| 216 217 | Entry Description (6040 h in hm Mode)                                                                                    | 91      | 266 267 | . State Coding . . . . . . . . . . . Object                                       | 105          |
|         | StructureoftheStatuswordinhmMode Manufacturer Speci/uniFB01c Bits . . . . . . .                                          | 91      |         | . . . Description (6041 h in csv Description (6041 in csv Mode)                   | Mode)106 106 |
| 218     |                                                                                                                          | 91      | 268 269 | Entry h Object Description (606C h ) . . . . .                                    | 106          |
| 219     | Operation Mode Speci/uniFB01c Bits in hm Mode . . . . . . . . . . . . . . . . . . . Coding . . . . . . . . . . . . . . . | 92 92   | 270     | Entry Description (606C h ) . . . . . . Object Description (60FF                  | 106          |
| 220 221 | State                                                                                                                    | 92      | 271     | . . . . . .                                                                       | 106          |
|         | Object Description (6041 h in hm Mode) Entry Description (6041 in hm Mode)                                               |         | 272     | h ) Entry Description (60FF h ) . . . . . . Object Description (607D h            | 107 107      |
| 222 223 | h Object Description (606C ) . . . . . .                                                                                 | 92      | 273     | ) . . . . .                                                                       |              |
|         | h Description (606C ) . . . .                                                                                            | 93      | 274 275 | Entry Description (607D h ) . . . . . .                                           | 107 107      |
| 224 225 | Entry h . . . Object                                                                                                     | 93      |         | Object Description (60B1 ) . . . . . Entry Description (60B1                      |              |
|         | Description (607C h ) . . . . . . . .                                                                                    | 93      | 276     | h h ) . . . . . . Object Description (60C2                                        | 108 108      |
| 226 227 | Entry Description (607C h ) . . . . . Object                                                                             | 93      | 277     | h . . . .                                                                         |              |
|         | Description (6098 h ) . . . . . . . . . . . . . .                                                                        | 94      | 278 279 | ) . Entry Description (60C2 h ) . . . . . . Controlword in cst                    | 108          |
| 228 229 | Entry Description (6098 h ) Object Description (6099 h ) . . . . . . .                                                   | 94 94   |         | Structure of the Mode . . . . . . . . . . . . . . . . . .                         | 109          |
| 230 231 | Entry Description (6099 h ) . . . . . . Object Description (609A ) . .                                                   | 94 95   | 280 281 | Command Coding . . . . . Object Description (6040                                 | 109 110      |
|         | . h .                                                                                                                    |         |         | . . . . . . h in cst Mode)                                                        |              |
| 232     | . . . Entry Description (609A h ) . . . . . Structure of the Controlword in                                              | 95      | 282 283 | Entry Description (6040 h in cst Mode) Structure of the Statusword in cst .       | 110 Mode110  |
| 233     | . . csp Mode . . . . . . . . . . . . . . . . . . .                                                                       | 96      | 284     | Manufacturer Speci/uniFB01c Bits . . . . . Operation Mode Speci/uniFB01c Bits in  | 110          |
| 234     | Command Coding . . . . . . . . . . . . Object Description (6040 in csp Mode)                                             | 97 97   | 285     | cst Mode . . . . . . . . . . . . . . . . . . .                                    | 111          |
| 235     | h Entry Description (6040 in csp Mode)                                                                                   | 97      | 286     | State Coding . . . . . . . . . . . . . Object Description (6041 in cst            | 111          |
| 236 237 | h StructureoftheStatuswordincspMode                                                                                      | 97      | 287     | h Mode) Entry Description (6041 in cst Mode) .                                    | 111          |
| 238     | Manufacturer Speci/uniFB01c Bits . . . . . . .                                                                           | 98      | 288     | h ) . . .                                                                         | 111          |
| 239     | Operation Mode Speci/uniFB01c Bits in csp Mode . . . . . . . . . . . . . . . . . . . .                                   | 98      | 289 290 | Object Description (6062 h . . Entry Description (6062 h ) . . . . . .            | 112 112      |
|         | State Coding . . . . . . . . . . . . . .                                                                                 | 98      | 291     | Object Description (6063 ) . . . . . .                                            | 112          |
| 240 241 | Object                                                                                                                   | 98      | 292     | h Entry Description (6063 ) . . . . . .                                           | 112          |
| 242     | Description (6041 h in csp Mode) Entry Description (6041 h in csp Mode)                                                  | 99      | 293 294 | h Object Description (6064 ) . . . . . .                                          | 112 113      |
| 243     | Object Description (6062 ) . . . . . . . . . . .                                                                         |         |         | h . . . . . .                                                                     |              |
| 244     | h Entry Description (6062 ) . . . . . .                                                                                  | 99 99   | 295     | Entry Description (6064 h ) . . . . . .                                           | 113          |
|         | h . . . .                                                                                                                |         |         | Object Description (6071 h ) . . . . . .                                          |              |
| 245     | Object Description (6063 h ) . . . . . .                                                                                 | 99 99   | 296 297 | Entry Description (6071 h ) ) . . . . . .                                         | 113 113      |
| 246     | Entry Description (6063 h ) . . . . . .                                                                                  |         | 298     | Object Description (6077 h . . . . . .                                            | 113          |
| 247 248 | . Object Description (6064 h ) . Entry Description (6064 ) . . . . . .                                                   | 100 100 | 299     | Entry Description (6077 h ) Object Description (607D . . . . .                    | 114          |
| 249     | h Object Description (606C ) . . . . .                                                                                   | 100     | 300     | h Entry Description (607D ) . . . . . .                                           | 114          |
| 250     | . h . Entry Description (606C ) . .                                                                                      | 100     | 301     | ) h Object Description (60B2 ) . . . . .                                          | 114          |
| 251     | h . . . . Object Description (607A h in csp Mode)100                                                                     |         | 302     | h Entry Description (60B2 h ) . . . . . .                                         | 114          |
|         | . Mode) .                                                                                                                | 101     | 303     | ) . . . . .                                                                       | 115          |
| 252 253 | Entry Description (607A h in csp Object Description (607D ) . . . . . . . . . .                                          | 101     | 304     | Object Description (60C2 h Entry Description (60C2 ) . . . . . .                  | 115          |
| 254     | h . .                                                                                                                    | 101     | 305     | h Emergency Messages (EMCY) . . . . . .                                           | 116          |
| 255     | Entry Description (607D h ) . . . . . .                                                                                  | 101     | 306     | SDO Abort Codes . . . . . . . . . . .                                             | 118          |
|         | Object Description (60B0 h ) Entry Description (60B0 ) .                                                                 | 102     | 307     |                                                                                   |              |
| 256     | h . . . . . . Object Description (60C2 )                                                                                 | 102     | 308     | Firmware Revision . . . . . . . . Revision                                        | 126          |
| 257     | h . . . . . .                                                                                                            |         |         | Document . . . . . . . . . .                                                      | 126          |

)

.

.

.

.

.

.

.

102

<!-- image -->

## 20 Supplemental Directives

## 20.2 Copyright

## 20.1 Producer Information

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources.

## 20.3 Trademark Designations and Symbols

Redistribution of sources or derived formats (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete data sheet, user manual, and documentation of this product including associated application notes; and a reference to other available product-related documentation.

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by ADI Trinamic or by other manufacturers, whose products are used or referred to in combination with ADI Trinamic's products and ADI Trinamic's product documentation.

## 20.4 Target User

This CoE Firmware Manual is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

## 20.5 Disclaimer: Life Support Systems

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

## 20.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without ADI Trinamic's/Trinamic Motion Control GmbH &amp; Co. KG speci/uniFB01c written consent.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG conveys no patent, copyright, mask work right or other trademark right to this product. ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG assumes no liability for any patent and/or other trademark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.analog.com.

<!-- image -->

## 20.7 Collateral Documents and Tools

## 21 Revision History

## 21.1 Firmware Revision

Version

Description

Table 307: Firmware Revision

|   1.00 | 06/23   | First release                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   1.01 | 07/23   | New release: • Fixed on the /uniFB02y change of motion parameters • Fixed issue with the block hall                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   1.03 | 10/24   | Bug/uniFB01x and update release • Fixed overshoot in ramp position for linear ramp. • Added support for 12 bits axis parameters. • Added support for IC MU_150 absolute encoder. • Added initialization routines for abn encoder for linear drive. • Increased resolution of abn encoder upto 1050000. • Added a catchup velocity object which is used in positionmode for actual position to jump up to ramp position. • Added sub objects for linear stage velocity and position win- dow. • Removed redundant linear drive parameters to merge them with the pro/uniFB01le speci/uniFB01c area parameters. • Increased linear stage acceleration and velocity maximum lim- its. |

## 21.2 Document Revision

Version

Description

Table 308: Document Revision

|   0 | 02/24   | First release         |
|-----|---------|-----------------------|
|   1 | 04/25   | Firmware update v1.03 |

Date

Date

<!-- image -->