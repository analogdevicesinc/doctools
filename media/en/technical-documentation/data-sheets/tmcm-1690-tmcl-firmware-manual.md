<!-- lastmod 2025-05-02 -->
## TMCM-1690 TMCL ™ Firmware Manual

Firmware Version V1.03 | Rev 1: 04/25

The TMCM-1690 is a single axis FOC servo controller gate driver module for 3-phase BLDC and DC motors with up to 1.5A gate drive current and +60V (+48 V nominal) supply. It offers UART (RS232/RS485-ready), CAN, and EtherCAT ® interfaces with TMCL, CANopen, or CANopen-over-EtherCAT protocol support for communication. The TMCM-1690 supports incremental encoders, digital hall sensors, and absolute encoder as position feedback.

<!-- image -->

## Applications

- Laboratory Automation
- Robotics
- Manufacturing

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2025, Analog Devices Inc. Terms of delivery and rights to technical change reserved. Download newest version at www.analog.com.

<!-- image -->

<!-- image -->

- Factory Automation · Servo Drives

## Features

- FOCservocontroller gate driver module for BLDC and DC motors
- Supply voltage +10V to +60V DC
- 0.5A/1.0A/1.5A gate drive current
- Onboard current-sense ampli/uniFB01ers
- Up to 120kHz PWM frequency
- SupportsUART(RS232/RS485-ready), CAN, and EtherCAT™ interface
- Reference switch inputs
- Supportsincrementalencoders(ABN), digital HALL sensors, absolute (SPI/SSI) encoders
- Compact size 27mm x 22.5mm
- Motorized Tables and Chairs
- Industrial BLDC and DC Motor Drives

## Contents

| 2                                                                     | 2                                                                             | 2                                                                                                                                                         |       |
|-----------------------------------------------------------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| First Steps with TMCL 2.1 Basic Setup . . .                           | First Steps with TMCL 2.1 Basic Setup . . .                                   | First Steps with TMCL 2.1 Basic Setup . . .                                                                                                               | 6     |
| 2.2                                                                   | .                                                                             | . . . . . . . . . . . . . . . . . . . . . .                                                                                                               | 6     |
|                                                                       | . . . . . . Using the TMCL Direct Mode Changing Axis Parameters .             | . . . . . . . . . . . . . . . . . . . . . .                                                                                                               | 6     |
| 2.3                                                                   |                                                                               | . . . . . . . . . . . . . . .                                                                                                                             | 6     |
| 2.4                                                                   | . . . . . . . Testing with a Simple TMCL Program . .                          | . . . . . . . . . . . . . . .                                                                                                                             | 7     |
| 3 TMCL and the TMCL-IDE -AnIntroduction 3.1 . . . . . . . . . . . . . | 3 TMCL and the TMCL-IDE -AnIntroduction 3.1 . . . . . . . . . . . . .         | 3 TMCL and the TMCL-IDE -AnIntroduction 3.1 . . . . . . . . . . . . .                                                                                     | 9     |
|                                                                       | Binary Command Format . . Checksum Calculation                                | . . . . . . . . .                                                                                                                                         | 9     |
| 3.2                                                                   | 3.1.1 . . . . . .                                                             | . . . . . . . . . . . . . . . . . . . . . .                                                                                                               | 10    |
|                                                                       | Reply Format . . 3.2.1 Status Codes                                           | . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                           | 10    |
| 3.3                                                                   | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 | . . . . . . . . . . . .                                                                                                                                   | 11 11 |
|                                                                       | Standalone Applications . . TMCL Command Overview                             | . . . . . . . . . . . . . . . . .                                                                                                                         |       |
| 3.4                                                                   | . . . . . . . . . . . . . . .                                                 | . . . . . . . . . . . . . . .                                                                                                                             | 13    |
| 3.5                                                                   | TMCL Commands by Subject . . .                                                | . . . . . . . . . . . . . . . . .                                                                                                                         | 15 15 |
|                                                                       | 3.5.1                                                                         | Motion Commands . . . . . . . . . . . . . . . . . . . . . .                                                                                               |       |
|                                                                       | 3.5.2 3.5.3                                                                   | Parameter Commands . . . . . . . . . . . . . . . . . . . . . .                                                                                            | 15 16 |
|                                                                       | 3.5.4                                                                         | Branch Commands . . . . . . . . . . . . . . . . . . . . . . . . I/O Port Commands .                                                                       |       |
|                                                                       |                                                                               | . . . . . . . . . . . . . . . . . . . . .                                                                                                                 | 16    |
|                                                                       | 3.5.5                                                                         | . Calculation Commands . . . . . . . . . . . . . . . . . .                                                                                                | 17    |
|                                                                       | 3.5.6                                                                         | . . . Interrupt Processing Commands . . . . . . . . . . . . . . . . New TMCL Commands . . . .                                                             | 17    |
| 3.6                                                                   | 3.5.7                                                                         | . . . . . . . . . . TMCL Command                                                                                                                          | 20    |
|                                                                       | . . . . . . . . Detailed Descriptions . . . . . . . . . . . . . . . . . . . . | . . . . . . . . . .                                                                                                                                       | 21    |
|                                                                       | 3.6.1                                                                         | ROR (Rotate Right) . . . . . . . . . . ROL Left) .                                                                                                        | 21 22 |
|                                                                       | 3.6.2                                                                         | (Rotate . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                   |       |
|                                                                       | 3.6.3                                                                         | MST (Motor Stop) . . . . . . . . . . . . . . . . . . . . . .                                                                                              | 23    |
|                                                                       | 3.6.4                                                                         | . . . MVP (Move to Position) . . . . . . . . . . . . . . . . . . . .                                                                                      | 24    |
|                                                                       | 3.6.5                                                                         | . SAP (Set Axis Parameter) . . . . . . . . . . . . . . . . . . . . GAP (Get Axis Parameter)                                                               | 27 28 |
|                                                                       | 3.6.6                                                                         | . . . . . . . . . . . . . . . . . . STAP (Store Axis                                                                                                      |       |
|                                                                       | 3.6.7                                                                         | . . Parameter) . . . . . . . . . . . . . . . .                                                                                                            | 29 30 |
|                                                                       | 3.6.8                                                                         | . . RSAP (Restore Axis Parameter) . . . . . . . . . . . . . . . . . SGP (Set Global Parameter) . . .                                                      |       |
|                                                                       | 3.6.9                                                                         | . . . . . . . . . . . . . . . .                                                                                                                           | 31    |
|                                                                       | 3.6.10                                                                        | GGP (Get Global Parameter) . . . . . . . . . . . . . . . . . . STGP (Store Global Parameter)                                                              | 33 35 |
|                                                                       | 3.6.11                                                                        | . . . . . . . . . . . . . . . . .                                                                                                                         | 36    |
|                                                                       | 3.6.12                                                                        | RSGP (Restore Global Parameter) . . . . . . . . . . . . . . . Output) . . . . . . . .                                                                     |       |
|                                                                       | 3.6.13                                                                        | SIO (Set . . . . . . . . . . . . . . . . . . GIO (Get Input)                                                                                              | 37 39 |
|                                                                       | 3.6.14 3.6.15                                                                 | . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                       | 42    |
|                                                                       |                                                                               | CALC (Calculate) . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                        |       |
|                                                                       | 3.6.16 3.6.17                                                                 | . COMP (Compare) . . . . . . . . . . . . . . . . . . . . . . .                                                                                            | 44    |
|                                                                       | 3.6.18                                                                        | . . JC (Jump Conditional) . . . . . . . . . . . . . . . . . . . . . . . JA (Jump Always) . .                                                              | 45    |
|                                                                       |                                                                               | . . . . . . . . . . . . . . . . . . . . . .                                                                                                               | 47 48 |
|                                                                       | 3.6.19 3.6.20                                                                 | . CSUB (Call Subroutine) . . . . . . . . . . . . . . . . . . RSUB (Return from                                                                            | 49    |
|                                                                       | 3.6.21                                                                        | . . . . Subroutine) . . . . . . . . . . . . . . . . WAIT (Wait for an Event to                                                                            | 50    |
|                                                                       |                                                                               | Occur)                                                                                                                                                    |       |
|                                                                       | 3.6.22 3.6.23                                                                 | . . . . . . . . . . . . . . . STOP (Stop TMCL Program Execution - End of TMCL Program) SCO (Set Coordinate) . . . . . . . . . . . . . . . . . . . . . . . | 52 53 |
|                                                                       | 3.6.24                                                                        | . . . . . . . . . . . . . . . . . . . .                                                                                                                   | 54    |
|                                                                       | 3.6.25                                                                        | GCO (Get Coordinate) CCO (Capture . . . . . . . . . . . . .                                                                                               | 56    |
|                                                                       |                                                                               | . . Coordinate) . . . . . . . . . . . . .                                                                                                                 | 57    |
|                                                                       | 3.6.26 3.6.27                                                                 | . . . . . . . ACO (Accumulator to Coordinate) . . CALCX (Calculate Using the X Register) . . . . . . . . . . . .                                          | 58    |
|                                                                       | 3.6.28                                                                        | AAP (Accumulator to Axis Parameter) . . . . . . . . . . . . .                                                                                             | 60    |

5

<!-- image -->

1

Features

3.6.29

AGP (Accumulator to Global Parameter)

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

61

|            |                                                                                                                                                                                   | CLE (Clear Error Flags) . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                 | . 62        |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
|            | 3.6.30                                                                                                                                                                            | EI . . .                                                                                                                                                                          |             |
|            | 3.6.31                                                                                                                                                                            | (Enable Interrupt) . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                          | . 64 65     |
|            | 3.6.32 3.6.33                                                                                                                                                                     | DI (Disable Interrupt) . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                            | . 66        |
|            |                                                                                                                                                                                   | . . . . . . VECT (De/uniFB01ne Interrupt Vector) . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                | . 68        |
|            | 3.6.34                                                                                                                                                                            | RETI (Return from Interrupt) . . . . . . . . . . . . . . . .                                                                                                                      | . 69        |
|            | 3.6.35 3.6.36                                                                                                                                                                     | . . . . . . . . CALCVV (Calculate Using Two User Variables) CALCVA (Calculate Using a User Variable and                                                                           | .           |
|            |                                                                                                                                                                                   | . . . . . . . . . . . . . . . the Accumulator Register) CALCAV (Calculate Using the Accumulator Register and a User Variable)                                                     | . 71        |
|            | 3.6.37 3.6.38                                                                                                                                                                     | . . . . .                                                                                                                                                                         | . 73        |
|            |                                                                                                                                                                                   | CALCVX (Calculate Using a User Variable and the X Register) . Variable) .                                                                                                         | . 75        |
|            | 3.6.39                                                                                                                                                                            | CALCXV (Calculate Using the X Register and a User . . . . . Value)                                                                                                                | . 77        |
|            | 3.6.40                                                                                                                                                                            | CALCV (Calculate Using a User Variable and a Direct . . . . . . . RST (Restart) . . . . . . . . . . . . . . . . . . . . . . . . . . .                                             | . 79        |
|            | 3.6.41 3.6.42                                                                                                                                                                     | . . . . . . . . DJNZ                                                                                                                                                              | . 81        |
|            |                                                                                                                                                                                   | (Decrement and Jump if not Zero) . . . . . . . . . . . . . . . . . . . CALL (Conditional Subroutine Call) . . .                                                                   | . 82        |
|            | 3.6.43                                                                                                                                                                            | . . . . . . . . MVPA                                                                                                                                                              | . 83        |
|            | 3.6.44                                                                                                                                                                            | . . . . . . . . . . . (Move to Position Speci/uniFB01ed by Accumulator Register) . . . . . . (Rotate Left Using the Accumulator Register) . . . .                                 | . 85 87     |
|            | 3.6.45 3.6.46                                                                                                                                                                     | ROLA . . . . . . . .                                                                                                                                                              | .           |
|            | 3.6.47                                                                                                                                                                            | RORA (Rotate Right Using the Accumulator Register) . . . . . . . . . . . SIV (Set Indexed Variable) . . . . . . . . . . . . . . . . .                                             | . 88 89     |
|            |                                                                                                                                                                                   | . . . . . . . . . .                                                                                                                                                               | . 90        |
|            | 3.6.48                                                                                                                                                                            | GIV (Get Indexed Variable) . . . . . . . . . . . . . . . . .                                                                                                                      | . 91        |
|            | 3.6.49 3.6.50                                                                                                                                                                     | . . . . . . . . . AIV (Accumulator to Indexed Variable) . .                                                                                                                       | . 92        |
|            |                                                                                                                                                                                   | . . . . . . . . . . . . . . . . . Customer Speci/uniFB01c Command Extensions (UF0...UF7 - User Functions) . . . . . . . . . . . . . . . . . . . . . .                             | .           |
|            | 3.6.51                                                                                                                                                                            | TMCL Control Commands . . . . .                                                                                                                                                   | . 93        |
|            | Axis Parameters                                                                                                                                                                   | Axis Parameters                                                                                                                                                                   | 95          |
| 4 5        | Global Parameters Bank 0 . . . . . . . . . . . . . . . . .                                                                                                                        | . . . . . . . . . . . . . . . . . .                                                                                                                                               | 113         |
|            |                                                                                                                                                                                   |                                                                                                                                                                                   | .113        |
| 5.1 5.2    | . . . . Bank 2 . . . . . . . . . . . . . . . . . . . . .                                                                                                                          | . . . . . . . . . . . . . . . . . .                                                                                                                                               | .115        |
| Motor 6.1  | . . . . . . Regulation                                                                                                                                                            | . . . . . . Regulation                                                                                                                                                            |             |
| 6          | Structure of Motor Control Regulation Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                               | . . . . .                                                                                                                                                                         | 116 .116    |
| 6.2        | Current Regulation . . . . . . . . . . . . . . . . . . .                                                                                                                          | . . . . .                                                                                                                                                                         | .116        |
|            | 6.2.1 Structure of the Current Regulator Velocity Regulation . . . . . . . . . . . . . .                                                                                          | . . . . . . . . . . . . . . . . . . .                                                                                                                                             |             |
| 6.3        | .                                                                                                                                                                                 | . . . . . . . . . . . . . . . . . . .                                                                                                                                             | . 117 .118  |
|            | 6.3.1 Structure of the Velocity Regulator . .                                                                                                                                     | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                       | .118 .119   |
| 6.4 6.5    | Velocity Ramp Generator . . . . . . . . . . . . Position Regulation . . . . . . . . . . . . . . .                                                                                 | Velocity Ramp Generator . . . . . . . . . . . . Position Regulation . . . . . . . . . . . . . . .                                                                                 |             |
|            | 6.5.1                                                                                                                                                                             | 6.5.1                                                                                                                                                                             | .119        |
|            | . . . . . . . . . . . . . . . . . . . Structure of the Position Regulator . . . . . . . . . . . . . . . . . . . . .                                                               | . . . . . . . . . . . . . . . . . . . Structure of the Position Regulator . . . . . . . . . . . . . . . . . . . . .                                                               | .119        |
|            | . . 6.5.2 Correlation of Axis Parameters 105 and 109, the Target Position and the Position End Flag . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . . 6.5.2 Correlation of Axis Parameters 105 and 109, the Target Position and the Position End Flag . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | .120        |
| 7          | Ramps . . .                                                                                                                                                                       | Ramps . . .                                                                                                                                                                       | 121         |
| 7.1 7.2    | Linear Ramp . . . . . . . . . . . . . Sine Shaped Ramp . . . . . . . . . .                                                                                                        | . . . . . . . . . . . . . . . . .                                                                                                                                                 | . 121 . 121 |
| Module 8.1 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Speci/uniFB01c Functions                                                                                              | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Speci/uniFB01c Functions                                                                                              | 123 .123    |
| 8          |                                                                                                                                                                                   |                                                                                                                                                                                   |             |
|            | Filters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8.1.1 Biquad Filter (for Future Use) . . . . . . . . . . . . . . . . . . . . . . . . . .              | . . . . . . . . . . . . . . . .                                                                                                                                                   | . 124       |
| 8.2        | Mechanical brake . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                            | . . . . . . . .                                                                                                                                                                   | . 124       |
| 8.3        |                                                                                                                                                                                   | . . . . . . . . . . . . . . . .                                                                                                                                                   | .125 .125   |
|            | Brake Chopper . . . PWMBraking                                                                                                                                                    | . . . . . . . . . . . . . . . .                                                                                                                                                   |             |
|            | . 8.3.1 . . . . . . . . . . . . . . . . . . 8.3.2 Resistive/Shunt Braking . . . . . . . . . . . . IIT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | . . . . . . . . . . . . . . . .                                                                                                                                                   | .125        |
| 8.4        | . . . . . . . . . .                                                                                                                                                               | . . . . . . . . . .                                                                                                                                                               | .126 . 127  |
| 8.5        | Lower Velocity PI . . .                                                                                                                                                           | . . . . . . . . . . . . . . . .                                                                                                                                                   |             |

<!-- image -->

8.6

General-Purpose Inputs/Outputs

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

. 127

| 8.7                                                                                 | UART . . . . . .                                                                                             | .         |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-----------|
|                                                                                     | Communication . . . . . . . . .                                                                              | 127       |
| 9 TMCL Programming Techniques and Structure 9.1 . . . . . . . . . . . . . . . . . . | 9 TMCL Programming Techniques and Structure 9.1 . . . . . . . . . . . . . . . . . .                          | 128       |
|                                                                                     | Initialization . . . .                                                                                       | .128 .128 |
| 9.2 9.3                                                                             | Main Loop . . . . . . . . . . . . . Using                                                                    |           |
| 9.4                                                                                 | . . . . . . . . Symbolic Constants . . . . . . . . . . . . Variables . . . . . .                             | .128 .129 |
| 9.5                                                                                 | Using . . . . . . . . . . . . . Using                                                                        |           |
|                                                                                     | Subroutines                                                                                                  | .130      |
| 9.6 9.7                                                                             | . . . . . . . . . . . . . . . . . Combining Direct Mode and Standalone Mode Make .                           | .130 131  |
|                                                                                     | the TMCL Program Start Automatically                                                                         | .         |
| 10 Figures Index                                                                    | 10 Figures Index                                                                                             | 132       |
| 11 Tables Index                                                                     | 11 Tables Index                                                                                              | 133       |
| 12 Supplemental Directives 12.1 Producer                                            | 12 Supplemental Directives 12.1 Producer                                                                     | 134 134   |
| 12.2                                                                                | Information . . . . . . . . . . . . . . . . . . . . . .                                                      | . . 134   |
|                                                                                     | Copyright . . . . .                                                                                          |           |
| 12.3 12.4                                                                           | . . . . . . . . . . Trademark Designations and Symbols . . . . . Target User . . . . . . . . . . . . . . . . | . 134     |
| 12.5                                                                                | . . . . . Disclaimer:                                                                                        | . 134 134 |
| 12.6                                                                                | Life Support Systems . . . . . . . . Disclaimer: Intended Use . . . . .                                      | . 134     |
| 12.7                                                                                | . . . . . . . . Collateral Documents                                                                         | . .135    |
|                                                                                     | and Tools . . . . . . . . .                                                                                  |           |
| 13 Revision History 13.1                                                            | 13 Revision History 13.1                                                                                     | 136       |
| 13.2                                                                                | Firmware Revision . . . . . . . . . . . . . . . . . Document                                                 | .136 .136 |
|                                                                                     | Revision . . . . . . . . . . . . . . . .                                                                     |           |

<!-- image -->

## 1 Features

The TMCM-1690 is a controller/driver module for BLDC motors. It is highly integrated, offers a convenient handling, and can be used in many decentralized applications. The module is designed for phase currents up to 1.5A gate drive current and 60V DC (48V nominal) supply voltage. All motors are controlled using /uniFB01eld oriented control (FOC), using either encoder (ABN or absolute) feedback or hall sensor feedback. The TMCL /uniFB01rmware allows for both standalone and direct mode operation.

## Main characteristics

- -Field oriented control
- Motion and motor controller for single and 3-phase motors:
- -On-the-/uniFB02y modi/uniFB01cation of motion parameters (example: position, velocity, acceleration).
- -High-e/uniFB03cient operation, low power dissipation.
- -High performance microcontroller for overall system control and communication protocol handling.
- -Supports incremental encoders, absolute encoders, and digital hall sensors.
- -UART (RS485-ready or RS232 with external transceiver)
- Interfaces
- -CAN interface with external transceiver.
- -Two digital inputs, one analog input, and six additional digital inputs/outputs.

## Software

TMCL remote controlled operation through UART (RS485-ready/RS232) or CAN interface and/or standalone operation through TMCL programming. PC-based application development software TMCL-IDE is available for free.

## Electrical data

- Gate drive current: up to 1.5A (programmable).
- Supply voltage: 10V to 60V (48V nominal).

Also see the separate hardware manual.

<!-- image -->

## 2 First Steps with TMCL

This section provides some hints for the /uniFB01rst steps with the TMCM-1690 and TMCL. Skip this section if already familiar with TMCL and the TMCL-IDE.

## Requirements

- A CAN interface supported by the TMCL-IDE or a UART (RS232/RS485-ready with transceiver) interface connected to the PC.
- A TMCM-1690 module
- A power supply (24V DC) for the TMCM-1690 module.
- A BLDC motor
- The TMCL-IDE (3.x or higher) already installed on the PC.

## 2.1 Basic Setup

Ensure the TMCM-1690 is properly connected to the power supply and the BLDC motor is properly connected to the module. See the TMCM-1690 hardware manual for instructions on how to do this. Do not connect or disconnect a motor to or from the module while the module is powered! Then, start the TMCL-IDE. After that, connect the TMCM-1690 through CAN or UART (RS232-/RS485-ready) interface and switch on the power supply for the module (while the TMCL-IDE is running on the PC). When

First of all, the basic setup needs a PC with Windows (at least Windows 7) and the latest TMCL-IDE (&gt; V3.0) installed on it. If the TMCL-IDE is not installed on the PC, download it from the TMCL-IDE product page on the ADI Trinamic website.

the module is connected properly, it is recognized by the TMCL-IDE and is ready for use.

The TMCL-IDE displays a tree view showing the TMCM-1690 and all tools available for it. Click the Direct Mode entry of the tool tree. The Direct Mode tool pops up.

## 2.2 Using the TMCL Direct Mode

In the Direct Mode tool, choose a TMCL command, enter the necessary parameters, and execute the command. For example, choose the command ROL (rotate left). Then, choose the appropriate motor (motor 0 if the motor is connected to the motor 0 connector). Now, enter the desired speed. Try entering 500 rpm as the value and then click Execute . The motor now runs. Choose the MST (motor stop) command and click Execute again to stop the motor.

## 2.3 Changing Axis Parameters

value and click to execute the command, which then changes the desired parameter. The following table points out the most important axis parameters. See Section 4 for a complete list of all axis parameters.

Next, try changing some settings (also called axis parameters) using the SAP command in the direct mode. Choose the SAP command. Then choose the parameter type and motor number. Last, enter the desired Execute

<!-- image -->

Most Important Axis Parameters

Table 1: Most important Axis Parameters

|   Number | Axis Parameter    | Description                                                                                                                                                                            | Range [Units]       | Access   |
|----------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|----------|
|        0 | Motor type        | Select the motor type. 0 - Three-phase BLDC 1 - Single-phase DC                                                                                                                        | 0 ...1              | RWEX     |
|        2 | Motor pole pairs  | Number of motor pole pairs.                                                                                                                                                            | 1 ...255            | RWEX     |
|       13 | Commutation mode  | Select a commutation mode that /uniFB01ts best to the motor's sensors. 0 - Disabled 1 - Open loop 2 - Digital hall (foc) 3 - Digital hall (block) 4 - ABN encoder 5 - Absolute encoder | 0 ...5              | RWEX     |
|       16 | Maximum current   | Maximum allowed absolute motor current. This value can be temporarily exceeded marginally due to the operation of the current regulator.                                               | 0 ...10000 [mA]     | RWEX     |
|       32 | Open loop current | Motor current for controlled commutation. This parameter is used in commutation mode 1.                                                                                                | 0 ...10000 [mA]     | RWEX     |
|       94 | Maximum velocity  | Maximum absolute velocity for velocity and po- sitioning mode.                                                                                                                         | 0 ...200000 [rpm]   | RWEX     |
|       95 | Acceleration      | Acceleration parameter for ROL, ROR, and the velocity ramp of MVP.                                                                                                                     | 0 ...200000 [rpm/s] | RWEX     |

## 2.4 Testing with a Simple TMCL Program

Now, test the TMCL standalone mode with a simple TMCL program. Type in, assemble, and download the program using the TMCL creator. This is also a tool that can be found in the tool tree of the TMCL-IDE. Click the TMCL creator entry to open the TMCL creator. In the TMCL creator, type in the following small TMCL program:

```
✶ ❙❆/a80 ✷✹✱ ✵✱ ✶✽✻✽ ✴✴/a115❡/a116 ❆❉❈ ♦❢❢/a115❡/a116 /a115 ❙❆/a80 ✷✺✱ ✵✱ ✶✽✻✻ ✸ ❙❆/a80 ✷✻✱ ✵✱ ✶✽✻✻ ✺ ❙❆/a80 ✶✵✼✱ ✵✱ ✶✵✵✵ ✴✴/a115❡/a116 ♣♦/a115 ✐ /a116 ✐ ♦ ♥ /a114 ❡ ❛ ❝ ❤ ❡ ❞ ❞✐/a115 /a116 ❛ ♥ ❝ ❡ ❙❆/a80 ✶✵✽✱ ✵✱ ✺✵✵ ✴✴/a115❡/a116 ♣♦/a115 ✐ /a116 ✐ ♦ ♥ /a114 ❡ ❛ ❝ ❤ ❡ ❞ ✈❡❧♦❝✐/a116② ❬/a114 ♣ ♠ ❪ ✼ ❙❆/a80 ✶✶✵✱ ✵✱ ✺✵✵ ✴✴/a115❡/a116 ♣♦/a115 ✐ /a116 ✐ ♦ ♥ /a80 ❙❆/a80 ✾✺✱ ✵✱ ✶✵✵✵✵ ✴✴/a115❡/a116 ❛❝❝❡❧❡/a114❛/a116✐♦♥ ❬/a114 ♣ ♠ ✴ /a115 ❪ ✾ ❙❆/a80 ✶✸✱ ✵✱ ✺ ✴✴/a115 ✇ ✐/a116 ❝ ❤ /a116 ♦ ❛❜/a115 ❡♥❝♦❞❡/a114 ♠♦❞❡ ✶✶ ❘❖❘ ✵✱ ✷✵✵ ✴✴/a114 ♦ /a116 ❛ /a116 ❡ ♠♦/a116 ♦ /a114 ✶✸ ❲❆■❚ ❚■❈❑❙ ✱ ✵✱ ✸✵✵
```

<!-- image -->

```
✶✺ /a80 ♦ /a115 ✐ /a116 ✐ ♦ ♥ ❚ ❡ /a115 /a116 ✿ ▼❱/a80 ❆❇❙✱ ✵✱ ✵ ✶✼ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ▼❱/a80 ❆❇❙✱ ✵✱ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵
```

## After that, follow these steps:

```
✻✺✺✸✻✵ ✶✾ ❏❆ /a80 ♦ /a115 ✐ /a116 ✐ ♦ ♥ ❚ ❡ /a115 /a116
```

2. Click the Download icon (or choose Download from the TMCL menu) in the TMCL creator to download the program to the module.
1. Click the Assemble icon (or choose Assemble from the TMCL menu) in the TMCL creator to assemble the program.
3. Click the Run icon (or choose Run from the TMCL menu) in the TMCL creator to run the program on the module.
1. Click Debug to start the debugger.

## Also try out the debugging functions in the TMCL creator:

2. Click Animate to see the single steps of the program.
4. To end the debug mode, click Debug again.
3. At any time, pause the program, set or reset breakpoints, and resume program execution.

<!-- image -->

## 3 TMCL and the TMCL-IDE - An Introduction

TheTMCM-1690supportstheTMCLdirectmode(binarycommands). It also implements standalone TMCL program execution. This makes it possible to write TMCL programs using the TMCL-IDE and store them in the memory of the module.

As with most TRINAMIC modules, the software running on the microprocessor of the TMCM-1690 consists of two parts: a bootloader and the /uniFB01rmware itself. Whereas the boot loader is installed during production, and remains untouched throughout the whole lifetime, the /uniFB01rmware can be updated. Download new versions free of charge from the ADI Trinamic software and tools website.

In direct mode, the TMCL communication over RS-232, RS-485, CAN, and USB follows a strict client/server relationship. That is, a computer (example, PC/PLC) acting as the interface bus host sends a command to the TMCM-1690. The TMCL interpreter on the module then interprets this command, does the initialization of the motion controller, and reads inputs and writes outputs or whatever is necessary according to the speci/uniFB01ed command. As soon as this step is done, the module sends a reply over the interface to the host. The host must not send any next command before the reply for a preceding command is received.

any collision on the bus is avoided when there are more than two nodes connected to a single bus. The TMCL provides a set of structured motion control commands. Every motion control command can be given by a host computer or can be stored in an electrically erasable programmable read-only memory (EEPROM) on the TMCM module to form programs that run standalone on the module. For this purpose, there are not only motion control commands but also commands to control the program structure (like conditional jumps, compare, and calculating).

Normally, the module just switches to transmission and occupies the bus for a reply. Otherwise, it stays in receive mode. It does not send any data over the interface without receiving a command /uniFB01rst. This way,

Every command has a binary representation and a mnemonic. The binary format is used to send commands from the host to a module in direct mode, whereas the mnemonic format is used for easy usage of the commands when developing standalone TMCL applications using the TMCL-IDE (IDE means integrated development environment).

## 3.1 Binary Command Format

There is also a set of con/uniFB01guration variables for the axis and for global parameters that allow individual con/uniFB01guration of nearly every function of a module. This manual gives a detailed description of all TMCL commands and their usage.

Every command has a mnemonic and a binary representation. When commands are sent from a host to a module, the binary format has to be used. Every command consists of a one-byte command /uniFB01eld, a one-byte type /uniFB01eld, a one-byte motor/bank /uniFB01eld, and a four-byte value /uniFB01eld. So, the binary representation of a command always has seven bytes. When a command is to be sent through RS-232, RS-485, RS-422, or USB interface, it has to be enclosed by an address byte at the beginning and a checksum byte at the end. In these cases, it consists of nine bytes.

<!-- image -->

The binary command format with RS-232, RS-485, RS-422, and USB is as follows:

✶✵

TMCL Command Format

Table 2: TMCL Command Format

|   Bytes | Meaning                  |
|---------|--------------------------|
|       1 | Module address           |
|       1 | Command number           |
|       1 | Type number              |
|       1 | Motor or Bank number     |
|       4 | Value (MSB /uniFB01rst!) |
|       1 | Checksum                 |

The checksum is calculated by accumulating all the other bytes using an 8-bit addition.

| Info   | addition.                                                                                                                                                                                                     |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Note   | When using the CAN interface, leave out the address byte and checksum byte. With CAN, the CAN-ID is used as the module address and the checksum is not needed because the CAN bus uses hardware CRC checking. |

## 3.1.1 Checksum Calculation

As mentioned above, the checksum is calculated by adding up all bytes (including the module address byte) using 8-bit addition. Here is an example on how to do this:

## Checksum calculation in C:

```
✉♥/a115 ✐ ❣ ♥ ❡ ❞ ❝❤❛/a114 ✐✱ ❈❤❡❝❦/a115✉♠ ❀ ✷ ✉♥/a115 ✐ ❣ ♥ ❡ ❞ ❝❤❛/a114 ❈♦♠♠❛♥❞❬✾❪❀ ✹ ✴✴❙❡/a116 /a116 ❤ ❡ ❈♦♠♠❛♥❞ ❛/a114 /a114 ❛ ② /a116 ♦ /a116 ❤ ❡ ❞❡/a115 ✐ /a114 ❡ ❞ ❝♦♠♠❛♥❞ ❈❤❡❝❦/a115✉♠ ❂ ❈♦♠♠❛♥❞❬✵❪❀ ✻ ❢♦/a114 ✭ ✐ ❂✶❀ ✐❁✽❀ ✐✰✰✮ ❈❤❡❝❦/a115✉♠ ✰❂ ❈♦♠♠❛♥❞❬✐❪❀ ✽ ❈♦♠♠❛♥❞❬✽❪❂❈❤❡❝❦/a115✉♠❀ ✴✴✐♥/a115❡/a114/a116 ❝❤❡❝❦/a115✉♠ ❛/a115 ❧❛/a115 /a116 ❜②/a116 ❡ ♦❢ /a116 ❤ ❡ ❝♦♠♠❛♥❞ ✴✴◆♦✇✱ /a115 ❡ ♥ ❞ ✐/a116 /a116 ♦ /a116 ❤ ❡ ♠♦❞✉❧❡
```

## 3.2 Reply Format

Every time a command is sent to a module, the module sends a reply. The reply format with RS-232, RS485, RS-422, and USB is as follows:

<!-- image -->

TMCL Reply Format

Table 3: TMCL Reply Format

|   Bytes | Meaning                              |
|---------|--------------------------------------|
|       1 | Reply address                        |
|       1 | Module address                       |
|       1 | Status (example, 100 means no error) |
|       1 | Command number                       |
|       4 | Value (MSB /uniFB01rst!)             |
|       1 | Checksum                             |

The checksum is also calculated by adding up all the other bytes using an 8-bit

| Info   | addition. Do not send the next command before having received the reply!                                                                                                                                                     |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Note   | When using CAN interface, the reply does not contain an address byte and a checksum byte. With CAN, the CAN-ID is used as the reply address and the check- sum is not needed because the CAN bus uses hardware CRC checking. |

## 3.2.1 Status Codes

The reply contains a status code. The status code can have one of the following values:

TMCL Status Codes

Table 4: TMCL Status Codes

|   Code | Meaning                                 |
|--------|-----------------------------------------|
|    100 | Successfully executed, no error         |
|    101 | Command loaded into TMCL program EEPROM |
|      1 | Wrong checksum                          |
|      2 | Invalid command                         |
|      3 | Wrong type                              |
|      4 | Invalid value                           |
|      5 | Con/uniFB01guration EEPROM locked       |
|      6 | Command not available                   |

The module is equipped with a TMCL memory for storing TMCL applications. Use the TMCL-IDE for developing standalone TMCL applications. Download a program into the EEPROM and afterwards it runs on

<!-- image -->

## 3.3 Standalone Applications

the module. The TMCL-IDE contains an editor and the TMCL assembler, where the commands can be entered using their mnemonic format. They are assembled automatically into their binary representations. Afterwards, this code can be downloaded into the module to be executed there.

<!-- image -->

## 3.4 TMCL Command Overview

This section gives a short overview of all TMCL commands.

Overview of All TMCL Commands

| Command   |   Number | Parameter                                                       | Description                                                                                                                 |
|-----------|----------|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| ROR       |        1 | <motor number>, <velocity>                                      | Rotate right with speci/uniFB01ed velocity                                                                                  |
| ROL       |        2 | <motor number>, <velocity>                                      | Rotate left with speci/uniFB01ed velocity                                                                                   |
| MST       |        3 | <motor number>                                                  | Stop motor movement                                                                                                         |
| MVP       |        4 | ABS&#124;REL&#124;COORD, <motor number>, <position&#124;offset> | Move to position (absolute or rela- tive)                                                                                   |
| SAP       |        5 | <parameter>, <motor number>, <value>                            | Set axis parameter (motion control speci/uniFB01c settings)                                                                 |
| GAP       |        6 | <parameter>, <motor number>                                     | Get axis parameter (read out motion control speci/uniFB01c settings)                                                        |
| STAP      |        7 | <parameter>, <motor number>, <value>                            | Store axis parameter (store motion control speci/uniFB01c settings)                                                         |
| RSAP      |        8 | <parameter>, <motor number>                                     | Restore axis parameter (restore mo- tion control speci/uniFB01c settings)                                                   |
| SGP       |        9 | <parameter>, <bank number>, <value>                             | Set global parameter (module spe- ci/uniFB01c settings). Example: communica- tion settings or TMCL user variables.          |
| GGP       |       10 | <parameter>, <bank number>                                      | Get global parameter (read out mod- ule speci/uniFB01c settings). Example: com- munication settings or TMCL user variables. |
| STGP      |       11 | <parameter>, <bank number>                                      | Store global parameter (TMCL user variables only)                                                                           |
| RSGP      |       12 | <parameter>, <bank number>                                      | Restore global parameter (TMCL user variables only)                                                                         |
| SIO       |       14 | <port number>, <bank number>, <value>                           | Set digital output to speci/uniFB01ed value                                                                                 |
| GIO       |       15 | <port number>, <bank number>                                    | Get value of analog/digital input                                                                                           |
| CALC      |       19 | <operation>, <value>                                            | Arithmetical operationbetweenaccu- mulator and direct value                                                                 |
| COMP      |       20 | <value>                                                         | Compare accumulator with value                                                                                              |
| JC        |       21 | <condition>, <jump address>                                     | Jump conditional                                                                                                            |
| JA        |       22 | <jump address>                                                  | Jump absolute                                                                                                               |
| CSUB      |       23 | <subroutine address>                                            | Call subroutine                                                                                                             |
| RSUB      |       24 |                                                                 | Return from subroutine                                                                                                      |
| EI        |       25 | <interrupt number>                                              | Enable interrupt                                                                                                            |

<!-- image -->

Command

Number

Parameter

Description

| DI     |   26 | <interrupt number>                                | Disable interrupt                                             |
|--------|------|---------------------------------------------------|---------------------------------------------------------------|
| WAIT   |   27 | <condition>, <motor number>, <ticks>              | Wait with further program execution                           |
| STOP   |   28 |                                                   | Stop program execution                                        |
| SCO    |   30 | <coordinate number>, <motor num- ber>, <position> | Set coordinate                                                |
| GCO    |   31 | <coordinate number>, <motor num- ber>             | Get coordinate                                                |
| CCO    |   32 | <coordinate number>, <motor num- ber>             | Capture coordinate                                            |
| CALCX  |   33 | <operation>                                       | Arithmetical operationbetweenaccu- mulator and X-register     |
| AAP    |   34 | <parameter>, <motor number>                       | Accumulator to axis parameter                                 |
| AGP    |   35 | <parameter>, <bank number>                        | Accumulator to global parameter                               |
| CLE    |   36 | </uniFB02ag>                                      | Clear an error /uniFB02ag                                     |
| VECT   |   37 | <interrupt number>, <address>                     | De/uniFB01ne interrupt vector                                 |
| RETI   |   38 |                                                   | Return from interrupt                                         |
| ACO    |   39 | <coordinate number>, <motor num- ber>             | Accumulator to coordinate                                     |
| CALCVV |   40 | <operation>, <user variable 1>, <user variable 2> | Arithmetical operation between two user variables             |
| CALCVA |   41 | <operation>, <user variable>                      | Arithmetical operation between user variable and accumulator  |
| CALCAV |   42 | <operation>, <user variable>                      | Arithmetical operationbetweenaccu- mulator and user variable  |
| CALCVX |   43 | <operation>, <user variable>                      | Arithmetical operation between user variable and X register   |
| CALCXV |   44 | <operation>, <user variable>                      | Arithmetical operation between X register and user variable   |
| CALCV  |   45 | <operation>, <value>                              | Arithmetical operation between user variable and direct value |
| MVPA   |   46 | ABS&#124;REL&#124;COORD, <motor number>           | Move to position speci/uniFB01ed by accu- mulator             |
| RST    |   48 | <jump address>                                    | Restart the program from the given address                    |
| DJNZ   |   49 | <user variable>, <jump address>                   | Decrement and jump if not zero                                |
| ROLA   |   50 | <motor number>                                    | Rotate left, velocity speci/uniFB01ed by accu- mulator        |

<!-- image -->

Command

Number

## 3.5.1 Motion Commands

Parameter

Description

Table 5: Overview of All TMCL Commands

| RORA   |   51 | <motor number>   | Rotate right, velocity speci/uniFB01ed by ac- cumulator   |
|--------|------|------------------|-----------------------------------------------------------|
| SIV    |   55 | <value>          | Set indexed variable                                      |
| GIV    |   56 |                  | Get indexed variable                                      |
| AIV    |   57 |                  | Accumulator to indexed variable                           |

## 3.5 TMCL Commands by Subject

These commands control the motion of the motor. They are the most important commands and can be used in direct mode or standalone mode.

Motion Commands

Table 6: Motion Commands

| Mnemonic   |   Command Number | Meaning            |
|------------|------------------|--------------------|
| ROL        |                2 | Rotate left        |
| ROR        |                1 | Rotate right       |
| MVP        |                4 | Move to position   |
| MST        |                3 | Motor stop         |
| SCO        |               30 | Store coordinate   |
| CCO        |               32 | Capture coordinate |
| GCO        |               31 | Get coordinate     |

These commands are used to set, read, and store axis parameters or global parameters. Axis parameters can be set independently for each axis, whereas global parameters control the behavior of the module itself. These commands can also be used in direct mode and standalone mode.

<!-- image -->

## 3.5.2 Parameter Commands

Parameter Commands

Table 7: Parameter Commands

| Mnemonic   |   Command Number | Meaning                  |
|------------|------------------|--------------------------|
| SAP        |                5 | Set axis parameter       |
| GAP        |                6 | Get axis parameter       |
| STAP       |                7 | Store axis parameter     |
| RSAP       |                8 | Restore axis parameter   |
| SGP        |                9 | Set global parameter     |
| GGP        |               10 | Get global parameter     |
| STGP       |               11 | Store global parameter   |
| RSGP       |               12 | Restore global parameter |

These commands are used to control the program /uniFB02ow (loops, conditions, jumps, etc.). Using them in direct mode does not make sense. They are intended for standalone mode only.

Branch Commands

## 3.5.3 Branch Commands

Table 8: Branch Commands

| Mnemonic   |   Command Number | Meaning                                 |
|------------|------------------|-----------------------------------------|
| JA         |               22 | Jump always                             |
| JC         |               21 | Jump conditional                        |
| COMP       |               20 | Compare accumulator with constant value |
| CSUB       |               23 | Call subroutine                         |
| RSUB       |               24 | Return from subroutine                  |
| WAIT       |               27 | Wait for a speci/uniFB01ed event        |
| STOP       |               28 | End of a TMCL program                   |

These commands control the external I/O ports and can be used in direct mode as well as standalone mode.

<!-- image -->

## 3.5.4 I/O Port Commands

I/O Port Commands

Table 9: I/O Port Commands

| Mnemonic   |   Command Number | Meaning    |
|------------|------------------|------------|
| SIO        |               14 | Set output |
| GIO        |               15 | Get input  |

These commands are intended for calculations within TMCL applications. Although they can also be used in direct mode, it does not make much sense to do so.

Calculation Commands

## 3.5.5 Calculation Commands

Table 10: Calculation Commands

| Mnemonic   |   Command Number | Meaning                                              |
|------------|------------------|------------------------------------------------------|
| CALC       |               19 | Calculate using the accumulator and a constant value |
| CALCX      |               33 | Calculate using the accumulator and the X register   |
| AAP        |               34 | Copy accumulator to an axis parameter                |
| AGP        |               35 | Copy accumulator to a global parameter               |
| ACO        |               39 | Copy accumulator to coordinate                       |

For calculating purposes, there is an accumulator (also called accu or A register) and an X register. When executed in a TMCL program (in standalone mode), all TMCL commands that read a value store the result in the accumulator. The X register can be used as an additional memory when doing calculations. It can be loaded from the accumulator.

Also see Section 3.5.7 for more calculation commands.

When a command that reads a value is executed in direct mode, the accumulator is not affected. This means that while a TMCL program is running on the module (standalone mode), a host can still send commands like GAP and GGP to the module (for example, to query the actual position of the motor) without affecting the /uniFB02ow of the TMCL program running on the module.

## 3.5.6 Interrupt Processing Commands

TMCL also contains functions for a simple way of interrupt processing. Using interrupts, many tasks can be programmed in an easier way. The following commands are used to de/uniFB01ne and handle interrupts:

<!-- image -->

Interrupt Processing Commands

Table 11: Interrupt Processing Commands

| Mnemonic   |   Command Number | Meaning               |
|------------|------------------|-----------------------|
| EI         |               25 | Enable interrupt      |
| DI         |               26 | Disable interrupt     |
| VECT       |               37 | Set interrupt vector  |
| RETI       |               38 | Return from interrupt |

There are many different interrupts in TMCL, like timer interrupts, stop switch interrupts, position reached interrupts, and input pin change interrupts. Each of these interrupts has its own interrupt vector. Each interrupt vector is identi/uniFB01ed by its interrupt number. Use the TMCL include /uniFB01le Interrupts.inc to have symbolic constants for the interrupt numbers. Table 12 shows all interrupts available on the TMCM-1690.

Interrupt Vectors

Table 12: Interrupt Vectors

|   Interrupt number | Interrupt type            |
|--------------------|---------------------------|
|                  0 | Timer 0                   |
|                  1 | Timer 1                   |
|                  2 | Timer 2                   |
|                  3 | Target position reached 0 |
|                 27 | Left stop switch 0        |
|                 28 | Right stop switch 0       |
|                 39 | Input change 0            |
|                 40 | Input change 1            |
|                 41 | Input change 2            |
|                255 | Global interrupts         |

When an interrupt occurs and this interrupt is enabled, and a valid interrupt vector is de/uniFB01ned for that interrupt, the normal TMCL program /uniFB02ow is interrupted, and the interrupt handling routine is called. Before an interrupt handling routine gets called, the context of the normal program (that is, accumulator register, X register, /uniFB02ags) is saved automatically.

## 3.5.6.2 Interrupt Processing

There is no interrupt nesting, which is all other interrupts are disabled while an interrupt handling routine is being executed.

On return from an interrupt handling routine (RETI command), the context of the normal program is automatically restored, and the execution of the normal program is continued.

## 3.5.6.3 Further Con/uniFB01guration of Interrupts

Some interrupts need further con/uniFB01guration (example, the timer interval of a timer interrupt). This can

<!-- image -->

## 3.5.6.1 Interrupt Types

be done using SGP commands with parameter bank 3 (SGP &lt;type&gt; , 3, &lt;value&gt;). See the SGP command (Section 3.6.9) for further information about this.

## 3.5.6.4 Using Interrupts in TMCL

- De/uniFB01ne an interrupt handling routine using the VECT command.

To use an interrupt, the following things have to be done:

- If necessary, con/uniFB01gure the interrupt using an SGP &lt;type&gt;, 3, &lt;value&gt; command.
- Globally enable interrupts using an EI 255 command.
- Enable the interrupt using an EI &lt;interrupt&gt; command.
- An interrupt handling routine must always end with a RETI command.

The following example shows the use of a timer interrupt:

- Do not allow the normal program /uniFB02ow to run into an interrupt handling routine.

```
❱❊❈❚ ✵✱ ❚✐♠❡/a114✵■/a114/a113 ✴✴❞❡❢✐♥❡ /a116 ❤ ❡ ✐♥/a116 ❡ /a114 /a114 ✉ ♣ /a116 ✈❡❝/a116♦/a114 ✷ ❙●/a80 ✵✱ ✸✱ ✶✵✵✵ ✴✴❝♦♥❢✐❣✉/a114❡ /a116 ❤ ❡ ✐♥/a116 ❡ /a114 /a114 ✉ ♣ /a116 ✿ /a115 ❡ /a116 ✐/a116 /a115 ♣❡/a114 ✐ ♦ ❞ /a116 ♦ ✶✵✵✵♠/a115 ❊■ ✵ ✴✴❡♥❛❜❧❡ /a116 ❤ ✐ /a115 ✐♥/a116 ❡ /a114 /a114 ✉ ♣ /a116 ✹ ❊■ ✷✺✺ ✴✴❣❧♦❜❛❧❧② /a115 ✇ ✐ /a116 ❝ ❤ ♦♥ ✐♥/a116 ❡ /a114 /a114 ✉ ♣ /a116 ♣/a114 ♦ ❝ ❡ /a115 /a115 ✐ ♥ ❣ ✻ ✴✴▼❛✐♥ ♣/a114 ♦ ❣ /a114 ❛ ♠ ✿ /a116 ♦ ❣ ❣ ❧ ❡ /a115 ♦✉/a116 ♣ ✉ /a116 ✸✱ ✉/a115 ✐ ♥ ❣ ❛ ❲❆■❚ ❝♦♠♠❛♥❞ ❢♦/a114 /a116 ❤ ❡ ❞❡❧❛② ▲♦♦♣✿ ✽ ❙■❖ ✸✱ ✷✱ ✶ ❲❆■❚ ❚■❈❑❙ ✱ ✵✱ ✺✵ ✶✵ ❙■❖ ✸✱ ✷✱ ✵ ❲❆■❚ ❚■❈❑❙ ✱ ✵✱ ✺✵ ✶✷ ❏❆ ▲♦♦♣ ✶✹ ✴✴❍❡/a114❡ ✐/a115 /a116 ❤ ❡ ✐♥/a116 ❡ /a114 /a114 ✉ ♣ /a116 ❤❛♥❞❧✐♥❣ /a114 ♦ ✉ /a116 ✐ ♥ ❡ ❚✐♠❡/a114✵■/a114/a113 ✿ ✶✻ ●■❖ ✵✱ ✷ ✴✴❝❤❡❝❦ ✐❢ ❖❯❚✵ ✐/a115 ❤✐❣❤ ❏❈ ◆❩✱ ❖✉/a116 ✵ ❖ ❢ ❢ ✴✴❥✉♠♣ ✐❢ ♥♦/a116 ✶✽ ❙■❖ ✵✱ ✷✱ ✶ ✴✴/a115 ✇ ✐/a116 ❝ ❤ ❖❯❚✵ ❤✐❣❤ ❘❊❚■ ✴✴❡♥❞ ♦❢ ✐♥/a116 ❡ /a114 /a114 ✉ ♣ /a116 ✷✵ ❖✉/a116 ✵ ❖ ❢❢ ✿ ❙■❖ ✵✱ ✷✱ ✵ ✴✴/a115 ✇ ✐/a116 ❝ ❤ ❖❯❚✵ ❧♦✇ ❘❊❚■ ✴✴❡♥❞ ♦❢ ✐♥/a116 ❡ /a114 /a114 ✉ ♣ /a116
```

✷✷

In the example above, the interrupt numbers are being used directly. To make the program better readable use the provided include /uniFB01le Interrupts.inc. This /uniFB01le de/uniFB01nes symbolic constants for all interrupt numbers that can be used in all interrupt commands. The beginning of the program above then looks as follows:

```
★✐♥❝❧✉❞❡ ■♥/a116 ❡ /a114 /a114 ✉ ♣ /a116 /a115 ✳ ✐ ♥ ❝ ✷ ❱❊❈❚ ❚■❴❚■▼❊❘✵ ✱ ❚✐♠❡/a114✵■/a114/a113 ❙●/a80 ❚■❴❚■▼❊❘✵ ✱ ✸✱ ✶✵✵✵ ❊■ ❚■❴❚■▼❊❘✵
```

```
✹ ❊■ ❚■❴●▲❖❇❆▲
```

<!-- image -->

## 3.5.7 New TMCL Commands

Note that these commands are not available on TMCM-1690 modules with /uniFB01rmware versions before 1.00. So, make sure that at least /uniFB01rmware version 1.00 is installed before using them.

To make several operations easier, the following new commands have been introduced from /uniFB01rmware version 1.00 on. Using these new commands, many tasks can be programmed in an easier way. This can save some code, thus making a TMCL program shorter, faster, and easier to understand.

New TMCL Commands

| Mnemonic   |   Command Number | Meaning                                             |
|------------|------------------|-----------------------------------------------------|
| CALCVV     |               40 | Calculate using two user variables                  |
| CALCVA     |               41 | Calculate using a user variable and the accumulator |
| CALCAV     |               42 | Calculate using the accumulator and a user variable |
| CALCVX     |               43 | Calculate using a user variable and the X register  |
| CALCXV     |               44 | Calculate using the X register and a user variable  |
| CALCV      |               45 | Calculate using a user variable and a direct value  |
| MVPA       |               46 | Move to position speci/uniFB01ed by accumulator     |
| RST        |               48 | Restart the program                                 |
| DJNZ       |               49 | Decrement and jump if not zero                      |
| CALL       |               80 | Conditional subroutine call                         |
| ROLA       |               50 | Rotate left using the accumulator                   |
| RORA       |               51 | Rotate right using the accumulator                  |
| SIV        |               55 | Set indexed variable                                |
| GIV        |               56 | Get indexed variable                                |
| AIV        |               57 | Accu to indexed variable                            |

Table 13: New TMCL Commands

<!-- image -->

## 3.6 Detailed TMCL Command Descriptions

The module speci/uniFB01c commands are explained in more detail on the following pages. They are listed according to their command number.

## 3.6.1 ROR (Rotate Right)

Internal function: Velocity mode is selected. Then, the velocity value is transferred to the target velocity.

Themotorisinstructedtorotate with a speci/uniFB01ed velocity in right direction (increasing the position counter). The velocity is given in rounds per minute (rpm).

Mnemonic:

ROR &lt; axis &gt; , &lt; velocity &gt;

Related commands: ROL, MST, SAP, GAP

Binary Representation

|   Instruction |   Type |   Motor/Bank | Value                    |
|---------------|--------|--------------|--------------------------|
|             1 |      0 |            0 | -2147483648...2147583647 |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Rotate right motor 0, velocity 500. Mnemonic: ROR 0, 500.

Binary Form of ROR 0, 500

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 01 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 01 h    |
| Value (Byte 0)     | F4 h    |
| Checksum           | F7 h    |

<!-- image -->

## 3.6.2 ROL (Rotate Left)

Internal function: Velocity mode is selected. Then, the velocity value is transferred to the target velocity.

The motor is instructed to rotate with a speci/uniFB01ed velocity in left direction (decreasing the position counter). The velocity is given in rounds per minute (rpm).

Related commands:

ROR, MST, SAP, GAP

Mnemonic:

ROL &lt; axis &gt; , &lt; velocity &gt;

Binary Representation

|   Instruction |   Type |   Motor/Bank | Value                    |
|---------------|--------|--------------|--------------------------|
|             2 |      0 |            0 | -2147483648...2147583647 |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Rotate left motor 0, velocity 500. Mnemonic: ROL 0, 500.

Binary Form of ROL 0, 500

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 02 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 01 h    |
| Value (Byte 0)     | F4 h    |
| Checksum           | F8 h    |

<!-- image -->

## 3.6.3 MST (Motor Stop)

Internal function:

The velocity mode is selected. Then, the target velocity is set to zero.

Related commands:

ROR, ROL, SAP, GAP

Mnemonic:

MST &lt; axis &gt;

The MST command stops the motor using a soft stop.

Binary Representation

|   Instruction |   Type |   Motor/Bank |   Value |
|---------------|--------|--------------|---------|
|             3 |      0 |            0 |       0 |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Mnemonic:

Stop motor 0.

MST 0.

Binary Form of MST 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 03 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 04 h    |

<!-- image -->

## 3.6.4 MVP (Move to Position)

The range of the MVP command is 32-bit signed (-2147483648...2147483647). Positioning can be interrupted using MST, ROL, or ROR commands.

With this command, the motor is instructed to move to a speci/uniFB01ed relative or absolute position. It uses the acceleration/deceleration ramp and the positioning speed programmed into the unit. This command is non-blocking. That is, a reply is sent immediately after command interpretation and initialization of the motion controller. Further commands may follow without waiting for the motor reaching its end position. The maximum velocity and acceleration as well as other ramp parameters are de/uniFB01ned by the appropriate axis parameters. For a list of these parameters, see section 4.

Three operation types are available:

- Starting a relative movement by means of an offset to the actual position. In this case, the new resulting position value must not exceed the above mentioned limits too.
- Moving to an absolute position in the range from -2147483648...2147483647 ( -2 31 ... 2 31 -1 ).
- Moving the motor to a (previously stored) coordinate. See the SCO instruction (Section 3.6.23) for details.

## Note

The distance between the actual position and the new position must not be more than 2147483647 ( 2 31 -1 ) position steps. Otherwise, the motor runs in the opposite direction to take the shorter distance (caused by 32-bit over/uniFB02ow).

SAP, GAP, SCO, GCO, CCO, ACO, MST

Mnemonic:

MVP &lt; ABS|REL|COORD &gt; , &lt; axis &gt; , &lt; position|offset|coordinate &gt;

Binary Representation

Related commands:

|   Instruction | Type                   | Motor/Bank   | Value                         |
|---------------|------------------------|--------------|-------------------------------|
|             4 | 0 - ABS - absolute     | 0            | < position >                  |
|             4 | 1 - REL - relative     | 0            | < offset >                    |
|             4 | 2 - COORD - coordinate | 0...255      | < coordinate number (0..20) > |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Move motor 0 to position 90000.

Mnemonic:

MVP ABS, 0, 90000

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 04 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 01 h    |
| Value (Byte 1)     | 5F h    |
| Value (Byte 0)     | 90 h    |
| Checksum           | F5 h    |

## Example

Move motor 0 from current position 10000 steps backward. Mnemonic: MVP REL, 0, -10000

## Binary Form of MVP REL, 0, -10000

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 04 h    |
| Type               | 01 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | FF h    |
| Value (Byte 2)     | FF h    |
| Value (Byte 1)     | D8 h    |
| Value (Byte 0)     | F0 h    |
| Checksum           | CC h    |

## Example

Move motor 0 to stored coordinate #8.

Mnemonic:

MVP COORD, 0, 8

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 04 h    |
| Type               | 02 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 08 h    |
| Checksum           | 0F h    |

## Note

Before moving to a stored coordinate, the coordinate has to be set using an SCO, CCO, or ACO command.

<!-- image -->

## 3.6.5 SAP (Set Axis Parameter)

With this command, most motion control parameters of the module can be speci/uniFB01ed. The settings are stored in SRAM and therefore are volatile. That is, information is lost after power off.

For a table with parameters and values that can be used together with this command, see section 4.

| Info   | mand, see section 4.   |
|--------|------------------------|

Internal function: The speci/uniFB01ed value is written to the axis parameter speci/uniFB01ed by the parameter number.

Mnemonic:

SAP &lt;parameter number&gt;, &lt;axis&gt;, &lt;value&gt;

Related commands:

GAP, AAP

## Binary representation

Binary Representation

|   Instruction | Type          |   Motor/Bank | Value   |
|---------------|---------------|--------------|---------|
|             5 | See Section 4 |            0 | <value> |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Set the maximum velocity for motor #0 to 200 rpm. Mnemonic: SAP 94, 0, 200.

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 05 h    |
| Type               | 5E h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | C0 h    |
| Checksum           | F9 h    |

<!-- image -->

## 3.6.6 GAP (Get Axis Parameter)

Most motion/driver related parameters of the TMCM-1690 can be adjusted using for example, the SAP command. With the GAP command, these can be read out. In standalone mode, the requested value is also transferred to the accumulator register for further processing purposes (such as conditional jumps). In direct mode, the requested value is only returned in the value /uniFB01eld of the reply, without affecting the accumulator.

Info

Internal function:

For a table with parameters and values that can be used together with this command, see Section 4.

The speci/uniFB01ed value gets copied to the accumulator.

Related commands:

SAP, AAP

Mnemonic:

GAP &lt;parameter number&gt;, &lt;axis&gt;

Binary Representation

|   Instruction | Type          |   Motor/Bank | Value   |
|---------------|---------------|--------------|---------|
|             6 | See Section 4 |            0 | <value> |

Reply in Direct Mode

| Status   | Value                      |
|----------|----------------------------|
| 100 - OK | Value read by this command |

## Example

Get the actual position of motor #0. Mnemonic: GAP 106, 0.

Binary Form of GAP 106, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 06 h    |
| Type               | 6A h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 3B h    |

<!-- image -->

## 3.6.7 STAP (Store Axis Parameter)

This command is used to store TMCL axis parameters permanently in the EEPROM of the module. This command is mainly needed to store the default con/uniFB01guration of the module. The contents of the user variables can either be automatically or manually restored at power on.

Info

Internal function:

For a table with parameters and values that can be used together with this command, see section 4.

The axis parameter speci/uniFB01ed by the type and axis number is stored in the EEPROM.

Related commands:

SAP, AAP, GAP, RSAP

Mnemonic:

STAP &lt;parameter number&gt;, &lt;axis&gt;

Binary Representation

|   Instruction | Type          |   Motor/Bank | Value          |
|---------------|---------------|--------------|----------------|
|             7 | See Section 4 |            0 | 0 (Don't care) |

Reply in Direct Mode

| Status   | Value          |
|----------|----------------|
| 100 - OK | 0 (don't care) |

## Example

Store axis parameter #6 of motor #0. Mnemonic: STAP 6, 0.

Binary Form of STAP 6, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 07 h    |
| Type               | 06 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 0E h    |

<!-- image -->

## 3.6.8 RSAP (Restore Axis Parameter)

With this command, the contents of an axis parameter can be restored from the EEPROM. By default, all axis parameters are automatically restored after power up. An axis parameter changed before can be reset to the stored value by this instruction.

Info

Internal function:

For a table with parameters and values that can be used together with this command, see section 4.

Theaxisparameterspeci/uniFB01ed by the type and axis number is restored from the EEPROM.

Related commands:

SAP, AAP, GAP, RSAP

Mnemonic:

RSAP &lt;parameter number&gt;, &lt;axis&gt;

Binary Representation

|   Instruction | Type          |   Motor/Bank | Value          |
|---------------|---------------|--------------|----------------|
|             8 | See Section 4 |            0 | 0 (Don't care) |

Reply in Direct Mode

| Status   | Value          |
|----------|----------------|
| 100 - OK | 0 (Don't care) |

## Example

Restore axis parameter #6 of motor #0.

Mnemonic:

RSAP 6, 0.

Binary Form of RSAP 6, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 08 h    |
| Type               | 06 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 0F h    |

<!-- image -->

## 3.6.9 SGP (Set Global Parameter)

All module settings in bank 0 are automatically stored in the non-volatile memory (EEPROM).

With this command, most module speci/uniFB01c parameters not directly related to motion control can be speci/uniFB01ed and the TMCL user variables can be changed. Global parameters are related to the host interface, peripherals, or application speci/uniFB01c variables. The different groups of these parameters are organized in banks to allow a larger total number for future products. Currently, bank 0 is used for global parameters, and bank 2 is used for user variables. Bank 3 is used for interrupt con/uniFB01guration.

Info

For a table with parameters and values that can be used together with this command, see section 5.

Internal function: The speci/uniFB01ed value is copied to the global parameter speci/uniFB01ed by the type and bank number. Most parameters of bank 0 are automatically stored in the non-volatile memory.

Mnemonic:

SGP &lt;parameter number&gt;, &lt;bank&gt;, &lt;value&gt;

Related commands:

GGP, AGP

Binary Representation

|   Instruction | Type          | Motor/Bank   | Value   |
|---------------|---------------|--------------|---------|
|             9 | See Section 5 | 0/2/3        | <value> |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Set the serial address of the device to 3. Mnemonic: SGP 66, 0, 3.

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 09 h    |
| Type               | 42 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 03 h    |
| Checksum           | 4F h    |

<!-- image -->

## 3.6.10 GGP (Get Global Parameter)

All global parameters can be read with this function. Global parameters are related to the host interface, peripherals, or application speci/uniFB01c variables. The different groups of these parameters are organized in banks to allow a larger total number for future products. Currently, bank 0 is used for global parameters, and bank 2 is used for user variables. Bank 3 is used for interrupt con/uniFB01guration. In standalone mode, the requested value is also transferred to the accumulator register for further processing purposes (such as conditional jumps). In direct mode, the requested value is only returned in the value /uniFB01eld of the reply, without affecting the accumulator.

## Info

Internal function:

For a table with parameters and values that can be used together with this command, see section 5.

The global parameter speci/uniFB01ed by the type and bank number is read.

Related commands:

SGP, AGP

Mnemonic:

GGP &lt;parameter number&gt;, &lt;bank&gt;

Binary Representation

|   Instruction | Type          | Motor/Bank   | Value          |
|---------------|---------------|--------------|----------------|
|            10 | See Section 5 | 0/2/3        | 0 (Don't care) |

Reply in Direct Mode

| Status   | Value                      |
|----------|----------------------------|
| 100 - OK | Value read by this command |

## Example

Get the serial address of the device. Mnemonic: GGP 66, 0.

<!-- image -->

## Binary Form of GGP 66, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 0A h    |
| Type               | 42 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 4D h    |

<!-- image -->

## 3.6.11 STGP (Store Global Parameter)

This command is used to store TMCL global parameters permanently in the EEPROM of the module. This commandismainlyneededtostoretheTMCLuservariables (located in bank 2) in the EEPROM of the module, as most other global parameters (located in bank 0) are stored automatically when being modi/uniFB01ed. The contents of the user variables can either be automatically or manually restored at power on.

## Info

Internal function:

For a table with parameters and values that can be used together with this command, see section 5.2.

The global parameter speci/uniFB01ed by the type and bank number is stored in the EEPROM.

Related commands:

SGP, AGP, GGP, RSGP

Mnemonic:

STGP &lt;parameter number&gt;, &lt;bank&gt;

Binary Representation

|   Instruction | Type            |   Motor/Bank | Value          |
|---------------|-----------------|--------------|----------------|
|            11 | See Section 5.2 |            2 | 0 (don't care) |

Reply in Direct Mode

| Status   | Value          |
|----------|----------------|
| 100 - OK | 0 (Don't care) |

## Example

Store user variable #42. Mnemonic: STGP 42, 2.

Binary Form of STGP 42, 2

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 0B h    |
| Type               | 2A h    |
| Motor/Bank         | 02 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 38 h    |

<!-- image -->

## 3.6.12 RSGP (Restore Global Parameter)

With this command, the contents of a TMCL user variable can be restored from the EEPROM. By default, all user variables are automatically restored after power up. A user variable that has been changed before can be reset to the stored value by this instruction.

For a table with parameters and values that can be used together with this command, see section 5.2.

| Info   | mand, see section 5.2.   |
|--------|--------------------------|

Internal function: The global parameter speci/uniFB01ed by the type and bank number is restored from the EEPROM.

Mnemonic:

RSGP &lt;parameter number&gt;, &lt;bank&gt;

Related commands:

SGP, AGP, GGP, STGP

Binary Representation

|   Instruction | Type            |   Motor/Bank | Value          |
|---------------|-----------------|--------------|----------------|
|            12 | See Section 5.2 |            2 | 0 (don't care) |

Reply in Direct Mode

| Status   | Value          |
|----------|----------------|
| 100 - OK | 0 (Don't care) |

## Example

Restore user variable #42. Mnemonic: RSGP 42, 2.

Binary Form of RSGP 42, 2

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 0C h    |
| Type               | 2A h    |
| Motor/Bank         | 02 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 39 h    |

<!-- image -->

## 3.6.13 SIO (Set Output)

Internal function: The state of the output line speci/uniFB01ed by the type parameter is set according to the value passed to this command.

This command sets the states of the general-purpose digital outputs.

Mnemonic:

SIO &lt;port number&gt;, &lt;bank number&gt;, &lt;value&gt;

Related commands: GIO.

Binary Representation

|   Instruction | Type          | Motor/Bank        | Value   |
|---------------|---------------|-------------------|---------|
|            14 | <port number> | <bank number> (2) | 0/1     |

Reply in Direct Mode

| Status   | Value          |
|----------|----------------|
| 100 - OK | 0 (don't care) |

Example Set output 2 (bank 2) to high. Mnemonic: SIO 2, 2, 1.

## Binary Form of SIO 2, 2, 1

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 0E h    |
| Type               | 02 h    |
| Motor/Bank         | 02 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 01 h    |
| Checksum           | 12 h    |

## Bank 2 - Digital Outputs

The following output lines can be set by the SIO command using bank 2.

<!-- image -->

Digital Outputs in Bank 2

| Port   | Command           | Range   |
|--------|-------------------|---------|
| GPIO_2 | SIO 2, 2, <value> | 0/1     |
| GPIO_3 | SIO 3, 2, <value> | 0/1     |
| GPIO_4 | SIO 4, 2, <value> | 0/1     |
| GPIO_5 | SIO 5, 2, <value> | 0/1     |
| GPIO_6 | SIO 6, 2, <value> | 0/1     |
| GPIO_7 | SIO 7, 2, <value> | 0/1     |

<!-- image -->

## 3.6.14 GIO (Get Input)

Internal function:

The state of the I/O line speci/uniFB01ed by the type parameter and bank parameter is read.

With this command, the status of the available general-purpose inputs of the module can be read. The function reads a digital or an analog input port. Digital lines read as 0 or 1, while the ADC channels deliver their 12-bit result in the range of 0...4095. In standalone mode, the requested value is copied to the accumulator register for further processing purposes such as conditional jumps. In direct mode, the value is only returned in the value /uniFB01eld of the reply, without affecting the accumulator. The actual status of a digital output line can also be read.

Related commands:

SIO.

Mnemonic:

GIO &lt;port number&gt;, &lt;bank number&gt;

Binary Representation

|   Instruction | Type          | Motor/Bank    | Value          |
|---------------|---------------|---------------|----------------|
|            15 | <port number> | <bank number> | 0 (don't care) |

Reply in Direct Mode

| Status   | Value              |
|----------|--------------------|
| 100 - OK | Status of the port |

## Example

Get the value of ADC channel 0. Mnemonic: GIO 0, 1.

Binary Form of GIO 0, 1

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 0F h    |
| Type               | 00 h    |
| Motor/Bank         | 01 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 11 h    |

<!-- image -->

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 0F h    |
| Value (Byte 3) | 00 h    |
| Value (Byte 2) | 00 h    |
| Value (Byte 1) | 01 h    |
| Value (Byte 0) | 2E h    |
| Checksum       | A5 h    |

## Bank 0 - Digital Inputs

The analog input lines can be read as digital or analog inputs at the same time. The digital input states can be accessed in bank 0.

Digital Inputs in Bank 0

| Port   | Command   | Range   |
|--------|-----------|---------|
| REF_R  | GIO 0, 0  | 0/1     |
| REF_L  | GIO 1, 0  | 0/1     |

## Bank 1 - Analog Inputs

The analog input lines can be read back as digital or analog inputs at the same time. The analog values can be accessed in bank 1.

Analog Inputs in Bank 1

| Port        | Command   | Range    |
|-------------|-----------|----------|
| ACU_U       | GIO 0, 1  | 0...4095 |
| ADC_V       | GIO 1, 1  | 0...4095 |
| ADC_W       | GIO 2, 1  | 0...4095 |
| ADC_VOLTAGE | GIO 3, 1  | 0...4095 |
| ADC_TEMP    | GIO 4, 1  | 0...4095 |
| ADC_AIN     | GIO 5, 1  | 0...4095 |

## Bank 2 - States of the Digital Outputs

The states of the output lines (set by SIO commands) can be read back using bank 2.

<!-- image -->

| Port   | Command   | Range   |
|--------|-----------|---------|
| GPIO_2 | GIO 2, 2  | 0/1     |
| GPIO_3 | GIO 3, 2  | 0/1     |
| GPIO_4 | GIO 4, 2  | 0/1     |
| GPIO_5 | GIO 5, 2  | 0/1     |
| GPIO_6 | GIO 6, 2  | 0/1     |
| GPIO_7 | GIO 7, 2  | 0/1     |

<!-- image -->

## 3.6.15 CALC (Calculate)

Related commands:

A value in the accumulator variable, previously read by a function such as GAP (get axis parameter) can be modi/uniFB01ed with this instruction. Nine different arithmetic functions can be chosen, and one constant operand value must be speci/uniFB01ed. The result is written back to the accumulator, for further processing like comparisons or data transfer. This command is mainly intended for use in standalone mode.

Mnemonic:

CALC &lt;operation&gt;, &lt;operand&gt;

Binary Representation

CALCX, COMP, AAP, AGP, GAP, GGP, GIO

## Binary representation

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                  | Motor/Bank     | Value     |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|-----------|
|            19 | 0 ADD - add to accumulator 1 SUB - subtract from accumulator 2 MUL - multiply accumulator by 3 DIV - divide accumulator by 4 MOD-modulo divide accumulator by 5 AND - logical and accumulator with 6 OR - logical or accumulator with 7 XOR - logical exor accumulator with 8 NOT - logical invert accumulator 9 LOAD - load operand into accumulator | 0 (don't care) | <operand> |

Reply in Direct Mode

| Status   | Value                    |
|----------|--------------------------|
| 100 - OK | The operand (don't care) |

## Example

Multiply accumulator by -5000. Mnemonic: CALC MUL, -5000

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 13 h    |
| Type               | 02 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | FF h    |
| Value (Byte 2)     | FF h    |
| Value (Byte 1)     | EC h    |
| Value (Byte 0)     | 78 h    |
| Checksum           | 78 h    |

Reply (Status = No Error, Value = -5000)

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 13 h    |
| Value (Byte 3) | FF h    |
| Value (Byte 2) | FF h    |
| Value (Byte 1) | EC h    |
| Value (Byte 0) | 78 h    |
| Checksum       | DC h    |

<!-- image -->

## 3.6.16 COMP (Compare)

Internal function: The accumulator register is compared with the speci/uniFB01ed value. The internal arithmetic status /uniFB02ags are set according to the result of the comparison. These can then control, for example, a conditional jump.

The speci/uniFB01ed number is compared to the value in the accumulator register. The result of the comparison can, for example, be used by the conditional jump (JC) instruction. This command is intended for use in standalone operation only.

Related commands: JC, GAP, GGP, GIO, CALC, CALCX

COMP &lt;operand&gt;

Binary Representation

Mnemonic:

|   Instruction | Type           | Motor/Bank     | Value     |
|---------------|----------------|----------------|-----------|
|            20 | 0 (don't care) | 0 (don't care) | <operand> |

## Example

Jump to the address given by the label when the position of motor #0 is greater than or equal to 1000.

```
✶ ●❆/a80 ✶✵✻✱ ✵ ✴✴❣❡/a116 ❛❝/a116 ✉ ❛ ❧ ♣♦/a115 ✐ /a116 ✐ ♦ ♥ ♦❢ ♠♦/a116 ♦ /a114 ✵ ❈❖▼/a80 ✶✵✵✵ ✴✴❝♦♠♣❛/a114❡ ❛❝/a116 ✉ ❛ ❧ ✈❛❧✉❡ ✇✐/a116 ❤ ✶✵✵✵ ✸ ❏❈ ●❊✱ ▲❛❜❡❧ ✴✴❥✉♠♣ /a116 ♦ ▲❛❜❡❧ ✐❢ ❣/a114 ❡ ❛ /a116 ❡ /a114 ♦/a114 ❡/a113 ✉ ❛ ❧ /a116 ♦ ✶✵✵✵
```

## Binary Form of COMP 1000

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 14 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 03 h    |
| Value (Byte 0)     | E8 h    |
| Checksum           | 00 h    |

<!-- image -->

## 3.6.17 JC (Jump Conditional)

Internal function: The TMCL program counter is set to the value passed to this command if the status /uniFB02ags are in the appropriate states.

The JC instruction enables a conditional jump to a /uniFB01xed address in the TMCL program memory, if the speci/uniFB01ed condition is met. The conditions refer to the result of a preceding comparison. See the COMP instruction (Section 3.6.16) for examples. This command is intended for standalone operation only.

Related commands: JA, COMP, WAIT, CLE

Mnemonic: JC &lt;condition&gt;, &lt;label&gt;

Binary Representation

|   Instruction | Type                                                                                                                                                                                           | Motor/Bank     | Value          |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|----------------|
|            21 | 0 ZE - zero 1 NZ - not zero 2 EQ - equal 3 NE - not equal 4 GT - greater 5 GE - greater/equal 6 LT - lower 7 LE - lower/equal 8 ETO - time out error 9 EAL - external alarm 10 EDV - deviation | 0 (don't care) | <jump address> |
|            21 | error                                                                                                                                                                                          |                |                |
|            21 | 11 EPO - position error                                                                                                                                                                        |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |
|            21 |                                                                                                                                                                                                |                |                |

## Example

Jump to the address given by the label when the position of motor #0 is greater than or equal to 1000.

```
✶ ●❆/a80 ✶✵✻✱ ✵ ✴✴❣❡/a116 ❛❝/a116 ✉ ❛ ❧ ♣♦/a115 ✐ /a116 ✐ ♦ ♥ ♦❢ ♠♦/a116 ♦ /a114 ✵ ❈❖▼/a80 ✶✵✵✵ ✴✴❝♦♠♣❛/a114❡ ❛❝/a116 ✉ ❛ ❧ ✈❛❧✉❡ ✇✐/a116 ❤ ✶✵✵✵ ❏❈ ●❊✱ ▲❛❜❡❧ ✴✴❥✉♠♣ /a116 ♦ ▲❛❜❡❧ ✐❢ ❣/a114 ❡ ❛ /a116 ❡ /a114 ♦/a114 ❡/a113 ✉ ❛ ❧ /a116 ♦ ✳✳✳
```

✺

```
✸ ✶✵✵✵ ▲❛❜❡❧✿ ❘❖▲ ✵✱ ✶✵✵✵
```

<!-- image -->

| Assuming Label at Address 10   | Assuming Label at Address 10   |
|--------------------------------|--------------------------------|
| Field                          | Value                          |
| Target address                 | 01 h                           |
| Instruction number             | 15 h                           |
| Type                           | 05 h                           |
| Motor/Bank                     | 00 h                           |
| Value (Byte 3)                 | 00 h                           |
| Value (Byte 2)                 | 00 h                           |
| Value (Byte 1)                 | 00 h                           |
| Value (Byte 0)                 | 0A h                           |
| Checksum                       | 25 h                           |

<!-- image -->

## 3.6.18 JA (Jump Always)

Internal function: The TMCL program counter is set to the value passed to this command.

Jump to a /uniFB01xed address in the TMCL program memory. This command is intended for standalone operation only.

Related commands: JC, WAIT, CSUB

Mnemonic: JA &lt;label&gt;

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value          |
|---------------|----------------|----------------|----------------|
|            22 | 0 (don't care) | 0 (don't care) | <jump address> |

## Example

An in/uniFB01nite loop in TMCL:

```
✶ ▲♦♦♣✿ ▼❱/a80 ❆❇❙✱ ✵✱ ✺✶✷✵✵ ✸ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ▼❱/a80 ❆❇❙✱ ✵✱ ✵ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ❏❆ ▲♦♦♣
```

Binary form of the JA Loop command when the label Loop is at address 10:

Binary Form of 'JA Loop' (As-

| suming Loop at Address 10)   | suming Loop at Address 10)   |
|------------------------------|------------------------------|
| Field                        | Value                        |
| Target address               | 01 h                         |
| Instruction number           | 16 h                         |
| Type                         | 00 h                         |
| Motor/Bank                   | 00 h                         |
| Value (Byte 3)               | 00 h                         |
| Value (Byte 2)               | 00 h                         |
| Value (Byte 1)               | 00 h                         |
| Value (Byte 0)               | 0A h                         |
| Checksum                     | 21 h                         |

```
✺
```

<!-- image -->

## 3.6.19 CSUB (Call Subroutine)

Internal function: The actual TMCL program counter value is saved to an internal stack, afterwards overwritten with the passed value. The number of entries in the internal stack is limited to 8. This also limits nesting of subroutine calls to 8. The command is ignored if there is no more stack space left.

This function calls a subroutine in the TMCL program memory. It is intended for standalone operation only.

## Related commands: RSUB, JA

Mnemonic: CSUB &lt;label&gt;

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value                |
|---------------|----------------|----------------|----------------------|
|            23 | 0 (don't care) | 0 (don't care) | <subroutine address> |

## Example

Call a subroutine:

```
▲♦♦♣✿ ✷ ▼❱/a80 ❆❇❙✱ ✵✱ ✶✵✵✵✵ ❈❙❯❇ ❙✉❜❲ ✴✴❙❛✈❡ ♣/a114 ♦ ❣ /a114 ❛ ♠ ❝♦✉♥/a116❡/a114 ❛♥❞ ❥✉♠♣ /a116 ♦ ❧❛❜❡❧ ❙✉❜❲ ✹ ▼❱/a80 ❆❇❙✱ ✵✱ ✵ ❈❙❯❇ ❙✉❜❲ ✴✴❙❛✈❡ ♣/a114 ♦ ❣ /a114 ❛ ♠ ❝♦✉♥/a116❡/a114 ❛♥❞ ❥✉♠♣ /a116 ♦ ❧❛❜❡❧ ❙✉❜❲ ✻ ❏❆ ▲♦♦♣ ✽ ❙✉❜❲✿ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ✶✵ ❲❆■❚ ❚■❈❑❙ ✱ ✵✱ ✺✵ ❘❙❯❇ ✴✴❈♦♥/a116✐♥✉❡ ✇✐/a116 ❤ /a116 ❤ ❡ ❝♦♠♠❛♥❞ ❢♦❧❧♦✇✐♥❣ /a116 ❤ ❡ ❈❙❯❇ ❝♦♠♠❛♥❞
```

| (Assuming SubW at Address 100)   | (Assuming SubW at Address 100)   |
|----------------------------------|----------------------------------|
| Field                            | Value                            |
| Target address                   | 01 h                             |
| Instruction number               | 17 h                             |
| Type                             | 00 h                             |
| Motor/Bank                       | 00 h                             |
| Value (Byte 3)                   | 00 h                             |
| Value (Byte 2)                   | 00 h                             |
| Value (Byte 1)                   | 00 h                             |
| Value (Byte 0)                   | 64 h                             |
| Checksum                         | 7C h                             |

<!-- image -->

## 3.6.20 RSUB (Return from Subroutine)

Internal function: The TMCL program counter is set to the last value saved on the stack. The command is ignored if the stack is empty.

Return from a subroutine to the command after the CSUB command. This command is intended for use in standalone mode only.

Mnemonic:

RSUB

Related commands:

CSUB

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value          |
|---------------|----------------|----------------|----------------|
|            24 | 0 (don't care) | 0 (don't care) | 0 (don't care) |

## Example

Binary form:

See the CSUB example (section 3.6.19).

Binary Form of RSUB

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 18 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 19 h    |

<!-- image -->

## 3.6.21 WAIT (Wait for an Event to Occur)

- TICKS: Wait until the number of timer ticks speci/uniFB01ed by the &lt;ticks&gt; parameter has been reached.

This instruction interrupts the execution of the TMCL program until the speci/uniFB01ed condition is met. This command is intended for standalone operation only. There are different wait conditions that can be used:

- POS: Wait until the target position of the motor speci/uniFB01ed by the &lt;motor&gt; parameter has been reached. An optional timeout value (0 for no timeout) must be speci/uniFB01ed by the &lt;ticks&gt; parameter.
- LIMSW: Wait until a limit switch of the motor speci/uniFB01ed by the &lt;motor&gt; parameter has been triggered. An optional timeout value (0 for no timeout) must be speci/uniFB01ed by the &lt;ticks&gt; parameter.
- REFSW: Wait until the reference switch of the motor speci/uniFB01ed by the &lt;motor&gt; parameter has been triggered. An optional timeout value (0 for no timeout) must be speci/uniFB01ed by the &lt;ticks&gt; parameter.

Special case for the &lt;ticks&gt; parameter: When this parameter is set to -1, the contents of the accumulator register are taken for this value. So, for example, WAIT TICKS, 0, -1 waits as long as speci/uniFB01ed by the value stored in the accumulator. The accumulator must not contain a negative value when using this option.

Internal function: The TMCL program counter is held at the address of this WAIT command until the condition is met or the timeout has expired.

The timeout /uniFB02ag (ETO) is set after a timeout limit is reached. Then, use a JC ETO command to check for such errors or clear the error using the CLE command.

## Related commands: JC, CLE

Mnemonic: WAIT &lt;condition&gt;, &lt;motor number&gt;, &lt;ticks&gt;

Binary Representation

|   Instruction | Type                            | Motor/Bank     | Value                                          |
|---------------|---------------------------------|----------------|------------------------------------------------|
|            27 | 0 TICKS - timer ticks           | 0 (don't care) | <no. of ticks to wait 1 >                      |
|            27 | 1 POS - target position reached | <motor number> | <no. of ticks for timeout 1 > 0 for no timeout |
|            27 | 2 REFSW - reference switch      | <motor number> | <no. of ticks for timeout 1 > 0 for no timeout |
|            27 | 3 LIMSW - limit switch          | <motor number> | <no. of ticks for timeout 1 > 0 for no timeout |

## Example

Wait for motor 0 to reach its target position, without timeout. Mnemonic: WAIT POS, 0, 0

1 one tick is 10 milliseconds

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 1B h    |
| Type               | 01 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 1D h    |

<!-- image -->

## 3.6.22 STOP (Stop TMCL Program Execution - End of TMCL Program)

Internal function:

Execution of a TMCL program in standalone mode is stopped.

This command stops the execution of a TMCL program. It is intended for use in standalone operation only.

Related commands:

None

Mnemonic:

STOP

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value          |
|---------------|----------------|----------------|----------------|
|            28 | 0 (don't care) | 0 (don't care) | 0 (don't care) |

## Example

Mnemonic:

STOP

Binary Form of STOP

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 1C h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 1D h    |

<!-- image -->

## 3.6.23 SCO (Set Coordinate)

Up to 20 position values (coordinates) can be stored for every axis for use with the MVP COORD command. This command sets a coordinate to a speci/uniFB01ed value. Depending on the global parameter 84, the coordinates are only stored in RAM or also stored in the EEPROM and copied back on start-up (with the default setting, the coordinates are stored in RAM only).

Note

Internal function:

Coordinate #0 is always stored in RAM only.

The passed value is stored in the internal position array.

Related commands:

GCO, CCO, ACO, MVP COORD

Mnemonic:

SCO &lt;coordinate number&gt;, &lt;motor number&gt;, &lt;position&gt;

Binary Representation

| Instruction   | Type                | Motor/Bank     | Value                 |
|---------------|---------------------|----------------|-----------------------|
| 30            | <coordinate number> | <motor number> | <position>            |
|               | 0...20              | 0              | - 2 31 . . . 2 31 - 1 |

## Example

Set coordinate #1 of motor #0 to 1000.

Mnemonic:

SCO 1, 0, 1000

Binary Form of SCO 1, 0, 1000

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 1E h    |
| Type               | 01 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 03 h    |
| Value (Byte 0)     | E8 h    |
| Checksum           | 0B h    |

Two special functions of this command have been introduced to copy all coordinates or one selected coordinate to the EEPROM. These functions can be accessed using the following special forms of the SCO command:

- SCO &lt;coordinate number&gt;, 255, 0 copies the coordinate selected by &lt;coordinate number&gt; to the EEPROM. The coordinate number must be a value between 1 and 20.
- SCO 0, 255, 0 copies all coordinates (except coordinate number 0) from RAM to the EEPROM.

<!-- image -->

## 3.6.24 GCO (Get Coordinate)

Using this command, a previously stored coordinate can be read back. In standalone mode, the requested value is copied to the accumulator register for further processing purposes such as conditional jumps. In direct mode, the value is only returned in the value /uniFB01eld of the reply, without affecting the accumulator. Depending on the global parameter 84, the coordinates are only stored in RAM or also stored in the EEPROM and copied back on start-up (with the default setting, the coordinates are stored in RAM only).

| Note   | Coordinate #0 is always stored in RAM only.   |
|--------|-----------------------------------------------|

Internal function: The desired value is read out of the internal coordinate array, copied to the accumulator register and, in direct mode, returned in the value /uniFB01eld of the reply.

Mnemonic:

GCO &lt;coordinate number&gt;, &lt;motor number&gt;

Related commands:

SCO, CCO, ACO, MVP COORD

Binary Representation

|   Instruction | Type                       | Motor/Bank       | Value          |
|---------------|----------------------------|------------------|----------------|
|            31 | <coordinate number> 0...20 | <motor number> 0 | 0 (don't care) |

Reply in Direct Mode

| Status   | Value                      |
|----------|----------------------------|
| 100 - OK | Value read by this command |

## Example

Get coordinate #1 of motor #0. Mnemonic: GCO 1, 0

## Binary Form of GCO 1, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 1F h    |
| Type               | 01 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 21 h    |

<!-- image -->

Two special functions of this command have been introduced to copy all coordinates or one selected coordinate from the EEPROM to the RAM. These functions can be accessed using the following special forms of the GCO command:

- GCO&lt;coordinate number&gt;, 255, 0 copies the coordinate selected by &lt;coordinate number&gt; from the EEPROM to the RAM. The coordinate number must be a value between 1 and 20.
- GCO 0, 255, 0 copies all coordinates (except coordinate number 0) from the EEPROM to the RAM.

<!-- image -->

## 3.6.25 CCO (Capture Coordinate)

This command copies the actual position of the axis to the selected coordinate variable. Depending on the global parameter 84, the coordinates are only stored in RAM or also stored in the EEPROM and copied back on start up (with the default setting, the coordinates are stored in RAM only). See the SCO and GCO commands on how to copy coordinates between RAM and EEPROM.

Note

Internal function:

Coordinate #0 is always stored in RAM only.

The actual position of the selected motor is copied to selected coordinate array entry.

Related commands:

SCO, GCO, ACO, MVP COORD

Mnemonic:

CCO &lt;coordinate number&gt;, &lt;motor number&gt;

Binary Representation

|   Instruction | Type                       | Motor/Bank       | Value          |
|---------------|----------------------------|------------------|----------------|
|            32 | <coordinate number> 0...20 | <motor number> 0 | 0 (don't care) |

Reply in Direct Mode

| Status   | Value                      |
|----------|----------------------------|
| 100 - OK | Value read by this command |

## Example

Store current position of motor #0 to coordinate array entry #3.

Mnemonic:

CCO 3, 0

Binary Form of CCO 3, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 20 h    |
| Type               | 01 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 22 h    |

<!-- image -->

## 3.6.26 ACO (Accumulator to Coordinate)

With the ACO command, the actual value of the accumulator is copied to a selected coordinate of the motor. Depending on the global parameter 84, the coordinates are only stored in RAM or also stored in the EEPROM and copied back on start up (with the default setting, the coordinates are stored in RAM only).

Coordinate #0 is always stored in RAM only.

Note

Internal function: The actual position of the selected motor is copied to the selected coordinate array entry.

Related commands:

SCO, GCO, CO, MVP COORD

Mnemonic:

ACO &lt;coordinate number&gt;, &lt;motor number&gt;

Binary Representation

|   Instruction | Type                       | Motor/Bank       | Value          |
|---------------|----------------------------|------------------|----------------|
|            39 | <coordinate number> 0...20 | <motor number> 0 | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Copy the actual value of the accumulator to coordinate #1 of motor #0.

Mnemonic:

ACO 1, 0

Binary Form of ACO 1, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 27 h    |
| Type               | 01 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 29 h    |

<!-- image -->

## 3.6.27 CALCX (Calculate Using the X Register)

This instruction is very similar to CALC, but the second operand comes from the X register. The X register can be loaded with the LOAD or the SWAP type of this instruction. The result is written back to the accumulator for further processing like comparisons or data transfer. This command is mainly intended for use in standalone mode.

Mnemonic:

CALCX &lt;operation&gt;

CALC, COMP, JC, AAP, AGP, GAP, GGP, GIO

Binary Representation

Related commands:

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Motor/Bank     | Value          |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|----------------|
|            33 | 0 ADD - add X register to accumulator 1 SUB - subtract X register from accumulator 2 MUL - multiply accumulator by X register 3 DIV - divide accumulator by X register 4 MOD-modulo divide accumulator by X register 5 AND - logical and accumulator with X register 6 OR - logical or accumulator with X register 7 XOR - logical exor accumulator with X register 8 NOT - logical invert X register 9 LOAD - copy accumulator to X register 10 SWAP - swap accumulator and X register | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Multiply accumulator and X register. Mnemonic: CALCX MUL

<!-- image -->

## Binary Form of CALCX MUL

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 21 h    |
| Type               | 02 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 24 h    |

<!-- image -->

✺

## 3.6.28 AAP (Accumulator to Axis Parameter)

The content of the accumulator register is transferred to the speci/uniFB01ed axis parameter. For practical usage, the accumulator has to be loaded, example, by a preceding GAP instruction. The accumulator may have been modi/uniFB01ed by the CALC or CALCX (calculate) instruction. This command is mainly intended for use in standalone mode.

## Info

For a table with parameters and values that can be used together with this command, see section 4.

Mnemonic: AAP &lt;parameter number&gt;, &lt;motor number&gt;

Related commands: AGP, SAP, GAP, SGP, GGP, GIO, CALC, CALCX

Binary Representation

|   Instruction | Type          |   Motor/Bank | Value   |
|---------------|---------------|--------------|---------|
|            34 | See Section 4 |            0 | <value> |

Reply in Direct Mode

## Example

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

Position motor #0 by a potentiometer connected to analog input #0:

```
✶ ❙/a116 ❛ /a114 /a116 ✿ ●■❖ ✵✱✶ ✴✴❣❡/a116 ✈❛❧✉❡ ♦❢ ❛♥❛❧♦❣ ✐♥♣✉/a116 ❧✐♥❡ ✵ ✸ ❈❆▲❈ ▼❯▲✱ ✹ ✴✴♠✉❧/a116✐♣❧② ❜② ✹ ❆❆/a80 ✶✵✺✱✵ ✴✴/a116 /a114 ❛ ♥ /a115 ❢ ❡ /a114 /a114 ❡ /a115 ✉ ❧ /a116 /a116 ♦ /a116 ❛ /a114 ❣ ❡ /a116 ♣♦/a115 ✐ /a116 ✐ ♦ ♥ ♦❢ ♠♦/a116 ♦ /a114 ✵ ❏❆ ❙/a116 ❛ /a114 /a116 ✴✴❥✉♠♣ ❜❛❝❦ /a116 ♦ /a115 /a116 ❛ /a114 /a116
```

Binary Form of AAP 105, 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 22 h    |
| Type               | 69 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 55 h    |

<!-- image -->

## 3.6.29 AGP (Accumulator to Global Parameter)

The content of the accumulator register is transferred to the speci/uniFB01ed global parameter. For practical usage, the accumulator has to be loaded, example, by a preceding GAP instruction. The accumulator may have been modi/uniFB01ed by the CALC or CALCX (calculate) instruction. This command is mainly intended for use in standalone mode.

## Info

For an overview of parameter and bank indices that can be used with this command, see section 5.

Mnemonic:

AGP &lt;parameter number&gt;, &lt;bank number&gt;

AAP, SGP, GGP, SAP, GAP, GIO

Binary Representation

Related commands:

|   Instruction | Type               | Motor/Bank          | Value          |
|---------------|--------------------|---------------------|----------------|
|            35 | <parameter number> | 0/2/3 <bank number> | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Copy accumulator to user variable #42: Mnemonic: AGP 42, 2

Binary Form of AGP 42, 2

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 23 h    |
| Type               | 2A h    |
| Motor/Bank         | 02 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 50 h    |

<!-- image -->

## 3.6.30 CLE (Clear Error Flags)

- ALL: clear all error /uniFB02ags.

This command clears the internal error /uniFB02ags. It is mainly intended for use in standalone mode. The following error /uniFB02ags can be cleared by this command (determined by the &lt;/uniFB02ag&gt; parameter):

- ETO: clear the timeout /uniFB02ag.
- EDV: clear the deviation /uniFB02ag.
- EAL: clear the external alarm /uniFB02ag.
- EPO: clear the position error /uniFB02ag.

## Related commands: JC, WAIT

Binary Representation

## Mnemonic:

CLE &lt;/uniFB02ags&gt;

|   Instruction | Type                                                                                                                                                                       | Motor/Bank     | Value          |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|----------------|
|            36 | 0 ALL - all /uniFB02ags 1 - (ETO) timeout /uniFB02ag 2 - (EAL) alarm /uniFB02ag 3 - (EDV) deviation /uniFB02ag 4 - (EPO) position /uniFB02ag 5 - (ESD) shutdown /uniFB02ag | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Reset the timeout /uniFB02ag. Mnemonic: CLE ETO

<!-- image -->

## Binary Form of CLE ETO

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 24 h    |
| Type               | 01 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 26 h    |

<!-- image -->

## 3.6.31 EI (Enable Interrupt)

The EI command enables an interrupt. It needs the interrupt number as parameter. Interrupt number 255 globally enables interrupt processing. This command is mainly intended for use in standalone mode.

## Info

See Table 12 for a list of interrupts that can be used on the TMCM-1690 module.

Mnemonic:

EI &lt;interrupt number&gt;

DI, VECT, RETI

Binary Representation

Related commands:

|   Instruction | Type               | Motor/Bank     | Value          |
|---------------|--------------------|----------------|----------------|
|            25 | <interrupt number> | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Globally enable interrupt processing: Mnemonic: EI 255

Binary Form of EI 255

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 19 h    |
| Type               | FF h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 19 h    |

<!-- image -->

## 3.6.32 DI (Disable Interrupt)

The DI command disables an interrupt. It needs the interrupt number as parameter. Interrupt number 255 globally disables interrupt processing. This command is mainly intended for use in standalone mode.

## Info

Related commands:

See Table 12 for a list of interrupts that can be used on the TMCM-1690 module.

EI, VECT, RETI

Mnemonic:

DI &lt;interrupt number&gt;

Binary Representation

|   Instruction | Type               | Motor/Bank     | Value          |
|---------------|--------------------|----------------|----------------|
|            26 | <interrupt number> | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Globally disable interrupt processing: Mnemonic: DI 255

Binary Form of DI 255

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 1A h    |
| Type               | FF h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 1A h    |

<!-- image -->

## 3.6.33 VECT (De/uniFB01ne Interrupt Vector)

The VECT command de/uniFB01nes an interrupt vector. It takes an interrupt number and a label (just like with JA, JC, and CSUB commands) as parameters. The label must be the entry point of the interrupt handling routine for this interrupts. Interrupt vectors can also be rede/uniFB01ned. This command is intended for use in standalone mode only.

## Info

See Table 12 for a list of interrupts that can be used on the TMCM-1690 module.

Mnemonic:

VECT &lt;interrupt number&gt;, &lt;label&gt;

## Related commands: EI, DI, RETI

Binary Representation

|   Instruction | Type               | Motor/Bank     | Value   |
|---------------|--------------------|----------------|---------|
|            37 | <interrupt number> | 0 (don't care) | <label> |

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

De/uniFB01ne interrupt vector for timer #0 interrupt:

```
✶ ❱❊❈❚ ✵✱ ❚✐♠❡/a114✵■/a114/a113 ✳✳✳ ✸ ▲♦♦♣✿ ✳✳✳ ✺ ❏❆ ▲♦♦♣ ✳✳✳ ✼ ❚✐♠❡/a114✵■/a114/a113 ✿ ❙■❖ ✵✱ ✷✱ ✶ ❘❊❚■
```

✾

<!-- image -->

## Binary Form of VECT (Assuming Label is at Address 50)

| ing Label is at Address 50)   | ing Label is at Address 50)   |
|-------------------------------|-------------------------------|
| Field                         | Value                         |
| Target address                | 01 h                          |
| Instruction number            | 25 h                          |
| Type                          | FF h                          |
| Motor/Bank                    | 00 h                          |
| Value (Byte 3)                | 00 h                          |
| Value (Byte 2)                | 00 h                          |
| Value (Byte 1)                | 00 h                          |
| Value (Byte 0)                | 32 h                          |
| Checksum                      | 58 h                          |

<!-- image -->

## 3.6.34 RETI (Return from Interrupt)

This command terminates an interrupt handling routine. Normal program /uniFB02ow is continued then. This command is intended for use in standalone mode only.

An interrupt routine must always end with a RETI command. Do not allow the normal program /uniFB02ow to run into an interrupt routine.

Internal function: The saved registers (accumulator, X registers, /uniFB02ags, and program counter) are copied back so that normal program /uniFB02ow continues.

Mnemonic:

RETI

Related commands:

EI, DI, VECT

Binary Representation

|   Instruction | Type               | Motor/Bank     | Value          |
|---------------|--------------------|----------------|----------------|
|            38 | <interrupt number> | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Return from an interrupt handling routine. Mnemonic: RETI

Binary Form of RETI

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 26 h    |
| Type               | FF h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 27 h    |

<!-- image -->

## 3.6.35 CALCVV (Calculate Using Two User Variables)

Related commands:

The CALCVV instruction directly uses the contents of two user variables for an arithmetic operation, storing the result in the /uniFB01rst user variable. This eliminates the need for using the accumulator register and/or X register for such purposes. The parameters of this command are the arithmetic function, the index of the /uniFB01rst user variable (0...255), and the index of the second user variable (0...255). This command is mainly intended for use in standalone mode.

CALCVA, CALCAV, CALCVX, CALCXV, CALCV

Mnemonic:

CALCVV &lt;operation&gt;, &lt;var1&gt;, &lt;var2&gt;

## Binary representation

Binary Representation

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Motor/Bank         | Value            |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|------------------|
|            40 | 0 ADD - add <var2> to <var1> 1 SUB - subtract <var2> from <var1> 2 MUL - multiply <var2> with <var1> 3 DIV - divide <var2> by <var1> 4 MOD-modulo divide <var2> by <var1> 5 AND - logical and <var2> with <var1> 6 OR - logical or <var2> with <var1> 7 XOR - logical exor <var2> with <var1> 8 NOT - copy logical inverted <var2> to <var1> 9 LOAD - copy <var2> to <var1> 10 SWAP - swap contents of <var1> and <var2> 11 COMP - compare <var1> with <var2> | 0 <var1> (0...255) | <var2> (0...255) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Subtract user variable #42 from user variable #65.

Mnemonic:

CALCVV SUB, 65, 42

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 28 h    |
| Type               | 01 h    |
| Motor/Bank         | 41 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 2A h    |
| Checksum           | 95 h    |

Reply (Status = No Error, Value = 0:

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 28 h    |
| Value (Byte 3) | 00 h    |
| Value (Byte 2) | 00 h    |
| Value (Byte 1) | 00 h    |
| Value (Byte 0) | 00 h    |
| Checksum       | 8F h    |

<!-- image -->

## 3.6.36 CALCVA (Calculate Using a User Variable and the Accumulator Register)

The CALCVA instruction directly modi/uniFB01es a user variable using an arithmetical operation and the contents of the accumulator register. The parameters of this command are the arithmetic function and the index of a user variable (0...255). This command is mainly intended for use in standalone mode.

Mnemonic:

CALCVA &lt;operation&gt;, &lt;var&gt;

## Binary representation

CALCV, CALCAV, CALCVX, CALCXV, CALCVV

Binary Representation

Related commands:

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Motor/Bank        | Value          |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------|
|            41 | 0 ADD - add accumulator to <var> 1 SUB - subtract accumulator from <var> 2 MUL - multiply <var> with accumulator 3 DIV - divide <var> by accumulator 4 MOD-modulo divide <var> by accumulator 5 AND - logical and <var> with accumulator 6 OR - logical or <var> with accumulator 7 XOR - logical exor <var> with accumulator 8 NOT - copy logical inverted accumulator to <var> 9 LOAD - copy accumulator to <var> 10 SWAP - swap contents of <var> and accumulator 11 COMP - compare <var> with accumulator | 0 <var> (0...255) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Subtract accumulator from user variable #27.

Mnemonic:

CALCVA SUB, 27

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 29 h    |
| Type               | 01 h    |
| Motor/Bank         | 1B h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 46 h    |

Reply (Status = No Error, Value=0:

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 29 h    |
| Value (Byte 3) | 00 h    |
| Value (Byte 2) | 00 h    |
| Value (Byte 1) | 00 h    |
| Value (Byte 0) | 00 h    |
| Checksum       | 90 h    |

<!-- image -->

## 3.6.37 CALCAV (Calculate Using the Accumulator Register and a User Variable)

The CALCAV instruction modi/uniFB01es the accumulator register using an arithmetical operation and the contents of a user variable. The parameters of this command are the arithmetic function and the index of a user variable (0...255). This command is mainly intended for use in standalone mode.

Mnemonic:

CALCAV &lt;operation&gt;, &lt;var&gt;

## Binary representation

CALCV, CALCAV, CALCVX, CALCXV, CALCVV

Binary Representation

Related commands:

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Motor/Bank        | Value          |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------|
|            42 | 0 ADD - add <var> to accumulator 1 SUB - subtract <var> from accumulator 2 MUL - multiply accumulator with <var> 3 DIV - divide accumulator by <var> 4 MOD-modulo divide accumulator by <var> 5 AND - logical and accumulator with <var> 6 OR - logical or accumulator with <var> 7 XOR - logical exor accumulator with <var> 8 NOT - copy logical inverted <var> to accumulator 9 LOAD - copy <var> to accumulator 10 SWAP - swap contents of <var> and accumulator 11 COMP - compare accumulator with <var> | 0 <var> (0...255) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Subtract user variable #27 from accumulator. Mnemonic: CALCXV SUB, 27

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 2A h    |
| Type               | 01 h    |
| Motor/Bank         | 1B h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 47 h    |

Reply (Status = No Error, Value = 0:

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 2A h    |
| Value (Byte 3) | 00 h    |
| Value (Byte 2) | 00 h    |
| Value (Byte 1) | 00 h    |
| Value (Byte 0) | 00 h    |
| Checksum       | 91 h    |

<!-- image -->

## 3.6.38 CALCVX (Calculate Using a User Variable and the X Register)

The CALCVX instruction directly modi/uniFB01es a user variable using an arithmetical operation and the contents of the X register. The parameters of this command are the arithmetic function and the index of a user variable (0...255). This command is mainly intended for use in standalone mode.

Mnemonic:

CALCVX &lt;operation&gt;, &lt;var&gt;

## Binary representation

CALCV, CALCAV, CALCVA, CALCXV, CALCVV

Binary Representation

Related commands:

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Motor/Bank        | Value          |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------|
|            43 | 0 ADD - add X register to <var> 1 SUB - subtract X register from <var> 2 MUL - multiply <var> with X register 3 DIV - divide <var> by X register 4 MOD-modulo divide <var> by X register 5 AND - logical and <var> with X register 6 OR - logical or <var> with X register 7 XOR - logical exor <var> with X register 8 NOT - copy logical inverted X register to <var> 9 LOAD - copy X register to <var> 10 SWAP - swap contents of <var> and X register 11 COMP - compare <var> with X register | 0 <var> (0...255) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Subtract X register from user variable #27. Mnemonic: CALCVX SUB, 27

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 2B h    |
| Type               | 01 h    |
| Motor/Bank         | 1B h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 48 h    |

Reply (Status = No Error, Value = 0:

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 2B h    |
| Value (Byte 3) | 00 h    |
| Value (Byte 2) | 00 h    |
| Value (Byte 1) | 00 h    |
| Value (Byte 0) | 00 h    |
| Checksum       | 92 h    |

<!-- image -->

## 3.6.39 CALCXV (Calculate Using the X Register and a User Variable)

The CALCXV instruction modi/uniFB01es the X register using an arithmetical operation and the contents of a user variable. The parameters of this command are the arithmetic function and the index of a user variable (0. . . 255). This command is mainly intended for use in standalone mode.

Mnemonic:

CALCXV &lt;operation&gt;, &lt;var&gt;

## Binary representation

## Related commands: CALCV, CALCAV, CALCVA, CALCVX, CALCVV

Binary Representation

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Motor/Bank        | Value          |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------|
|            44 | 0 ADD - add <var> to X register 1 SUB - subtract <var> from X register 2 MUL - multiply X register with <var> 3 DIV - divide X register by <var> 4 MOD-modulo divide X register by <var> 5 AND - logical and X register with <var> 6 OR - logical or X register with <var> 7 XOR - logical exor X register with <var> 8 NOT - copy logical inverted <var> to X register 9 LOAD - copy <var> to X register 10 SWAP - swap contents of <var> and X register 11 COMP - compare X register with <var> | 0 <var> (0...255) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Subtract user variable #27 from X register. Mnemonic: CALCXV SUB, 27

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 2C h    |
| Type               | 01 h    |
| Motor/Bank         | 1B h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 49 h    |

Reply (Status = No Error, Value = 0:

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 2C h    |
| Value (Byte 3) | 00 h    |
| Value (Byte 2) | 00 h    |
| Value (Byte 1) | 00 h    |
| Value (Byte 0) | 00 h    |
| Checksum       | 93 h    |

<!-- image -->

## 3.6.40 CALCV (Calculate Using a User Variable and a Direct Value)

Related commands:

The CALCV directly modi/uniFB01es a user variable using an arithmetical operation and a direct value. This eliminates the need of using the accumulator register for such a purpose and thus can make the program shorter and faster. The parameters of this command are the arithmetic function, the index of a user variable (0...255), and a direct value. This command is mainly intended for use in standalone mode.

Mnemonic:

CALCV &lt;operation&gt;, &lt;var&gt;, &lt;value&gt;

Binary Representation

CALCVA, CALCAV, CALCVX, CALCXV, CALCVV

## Binary representation

|   Instruction | Type                                                                                                                                                                                                                                                                                                                                                                                                             | Motor/Bank        | Value   |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|---------|
|            45 | 0 ADD - add <value> to <var> 1 SUB - subtract <value> from <var> 2 MUL - multiply <var> with <value> 3 DIV - divide <var> by <value> 4 MOD-modulo divide <var> by <value> 5 AND - logical and <var> with <value> 6 OR - logical or <var> with <value> 7 XOR - logical exor <var> with <value> 8 NOT - logical invert <var> (<value> ignored) 9 LOAD - copy <value> to <var> 11 COMP - compare <var> with <value> | 0 <var> (0...255) | <value> |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Subtract 5000 from user variable #27.

Mnemonic:

CALCV SUB, 27, 5000

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 2D h    |
| Type               | 01 h    |
| Motor/Bank         | 1B h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 13 h    |
| Value (Byte 0)     | 88 h    |
| Checksum           | E5 h    |

Reply (Status= No Error, Value = 5000:

| Field          | Value   |
|----------------|---------|
| Host address   | 02 h    |
| Target address | 01 h    |
| Status         | 64 h    |
| Instruction    | 2D h    |
| Value (Byte 3) | 00 h    |
| Value (Byte 2) | 00 h    |
| Value (Byte 1) | 13 h    |
| Value (Byte 0) | 88 h    |
| Checksum       | 2F h    |

<!-- image -->

## 3.6.41 RST (Restart)

Internal function: The TMCL interpreter is reset (the subroutine stack, interrupt stack, and registers are cleared) and then the program counter is set to the value passed to this command.

Stop the program, reset the TMCL interpreter, and then restart the program at the given label. This command can be used to restart the TMCL program from anywhere in the program, and also out of subroutines or interrupt routines. This command is intended for standalone operation only.

Related commands: JA, CSUB, STOP

Mnemonic: RST &lt;label&gt;

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value             |
|---------------|----------------|----------------|-------------------|
|            48 | 0 (don't care) | 0 (don't care) | <restart address> |

## Example

Restart the program from a label, out of a subroutine:

```
✶ ❊♥/a116 /a114 ② ✿ ▼❱/a80 ❆❇❙✱ ✵✱ ✺✶✷✵✵ ✸ ❈❙❯❇ ❙✉❜/a114♦✉/a116 ✐ ♥ ❡ ✳✳✳ ✺ ✳✳✳ ❙✉❜/a114♦✉/a116 ✐ ♥❡ ✿ ✼ ❘❙❚ ❊♥/a116 /a114 ② ❘❙❯❇
```

Binary form of the RST Entry command when the label Entry is at address 10:

Binary Form of RST Entry (As-

| suming 'Entry' at Address 10)   | suming 'Entry' at Address 10)   |
|---------------------------------|---------------------------------|
| Field                           | Value                           |
| Target address                  | 01 h                            |
| Instruction number              | 30 h                            |
| Type                            | 00 h                            |
| Motor/Bank                      | 00 h                            |
| Value (Byte 3)                  | 00 h                            |
| Value (Byte 2)                  | 00 h                            |
| Value (Byte 1)                  | 00 h                            |
| Value (Byte 0)                  | 0A h                            |
| Checksum                        | 3A h                            |

<!-- image -->

✻

## 3.6.42 DJNZ (Decrement and Jump if not Zero)

Internal function: The user variable passed to this command is decremented. If it is not zero, then the TMCL program counter is set to the value passed to this command.

Decrement a given user variable and jump to the given address if the user variable is greater than zero. This command can, for example, be used to easily program a counting loop, using any user variable as the loop counter. This command is intended for standalone operation only.

Related commands: JC, WAIT, CSUB

Mnemonic:

DJNZ &lt;var&gt;, &lt;label&gt;

Binary Representation

|   Instruction | Type                      | Motor/Bank     | Value          |
|---------------|---------------------------|----------------|----------------|
|            49 | <user variable> (0...255) | 0 (don't care) | <jump address> |

## Example

A counting loop in TMCL, using user variable #42:

- ✺✶✷✵✵

```
❙●/a80 ✹✷✱ ✷✱ ✶✵✵ ✷ ▲♦♦♣✿ ▼❱/a80 ❆❇❙✱ ❘❊▲✱ ✹ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ❲❆■❚ ❚■❈❑❙ ✱ ✵✱ ✺✵✵ ❉❏◆❩ ✹✷✱ ▲♦♦♣
```

Binary form of the DJNZ 42, Loop command when the label Loop is at address 1:

Binary Form of DJNZ Loop (As-

| suming 'Loop' at Address 1)   | suming 'Loop' at Address 1)   |
|-------------------------------|-------------------------------|
| Field                         | Value                         |
| Target address                | 01 h                          |
| Instruction number            | 31 h                          |
| Type                          | 64 h                          |
| Motor/Bank                    | 00 h                          |
| Value (Byte 3)                | 00 h                          |
| Value (Byte 2)                | 00 h                          |
| Value (Byte 1)                | 00 h                          |
| Value (Byte 0)                | 01 h                          |
| Checksum                      | 97 h                          |

<!-- image -->

## 3.6.43 CALL (Conditional Subroutine Call)

Internal function: When the condition is met, the actual TMCL program counter value is saved to an internal stack. Afterwards, the program counter is overwritten with the address supplied to this command. The number of entries in the internal stack is limited to 8. This also limits nesting of subroutine calls to 8. The command is ignored if there is no more stack space left.

The CALL command calls a subroutine in the TMCL program, but only if the specifed condition is met. Otherwise, the program execution is continued with the next command following the CALL command. The conditions refer to the result of a preceding comparison or assignment. This command is intended for standalone operation only.

Related commands: RSUB, JC

Mnemonic: CALL &lt;condition&gt;, &lt;label&gt;

Binary Representation

|   Instruction | Type                                                                                                                                                                                                                         | Motor/Bank     | Value          |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|----------------|
|            21 | 0 ZE - zero 1 NZ - not zero 2 EQ - equal 3 NE - not equal 4 GT - greater 5 GE - greater/equal 6 LT - lower 7 LE - lower/equal 8 ETO - time out error 9 EAL - external alarm 10 EDV - deviation error 11 EPO - position error | 0 (don't care) | <jump address> |

## Example

Call a subroutine if a condition is met:

```
▲♦♦♣✿ ✷ ●■❖ ✵✱ ✶ ✴✴/a114 ❡❛❞ ❛♥❛❧♦❣ ✈❛❧✉❡ ❈❆▲❈ ❙❯❇✱ ✺✶✷ ✴✴/a115 ✉ ❜ /a116 /a114 ❛ ❝ /a116 ✺✶✷ ✹ ❈❖▼/a80 ✵ ✴✴❝♦♠♣❛/a114❡ ✇✐/a116 ❤ ③❡/a114 ♦ ❈❆▲▲ ▲❚✱ ❘✉♥▲❡❢/a116 ✴✴❈❛❧❧ /a114 ♦ ✉ /a116 ✐ ♥ ❡ ✧❘✉♥▲❡❢/a116 ✧ ✐❢ ❛❝❝✉ ❁✵ ✻ ❈❆▲▲ ❩❊✱ ▼♦/a116 ♦ /a114 ❙ /a116 ♦ ♣ ✴✴❈❛❧❧ /a114 ♦ ✉ /a116 ✐ ♥ ❡ ✧▼♦/a116♦/a115 ❙ /a116 ♦ ♣ ✧ ✐❢ ❛❝❝✉❂✵ ❈❆▲▲ ●❚✱ ❘✉♥❘✐❣❤/a116 ✴✴❈❛❧❧ /a114 ♦ ✉ /a116 ✐ ♥ ❡ ✧❘✉♥❘✐❣❤/a116 ✧ ✐❢ ❛❝❝✉ ❃✵ ✽ ❏❆ ▲♦♦♣ ✶✵ ❘✉♥▲❡❢/a116 ✿ ❈❆▲❈ ▼❯▲✱ ✲✶ ✶✷ ❘❖▲❆ ✵ ❘❙❯❇
```

<!-- image -->

```
✶✹ ❘✉♥❘✐❣❤/a116 ✿ ✶✻ ❘❖❘❆ ✵ ❘❙❯❇ ✶✽ ▼♦/a116 ♦ /a114 ❙ /a116 ♦ ♣ ✿ ✷✵ ●❆/a80 ✷✱ ✵ ❏❈ ❩❊✱ ▼♦/a116 ♦ /a114 ■ /a115 ❙ /a116 ♦ ♣ ♣ ❡ ❞ ✷✷ ▼❙❚ ✵ ▼♦/a116 ♦ /a114 ■ /a115 ❙ /a116 ♦ ♣ ♣ ❡ ❞ ✿ ❘❙❯❇
```

Binary Form of

| CALL LT, RunLeft (Assuming 'RunLeft' at Address 100)   | CALL LT, RunLeft (Assuming 'RunLeft' at Address 100)   |
|--------------------------------------------------------|--------------------------------------------------------|
| Field                                                  | Value                                                  |
| Target address                                         | 01 h                                                   |
| Instruction number                                     | 50 h                                                   |
| Type                                                   | 06 h                                                   |
| Motor/Bank                                             | 00 h                                                   |
| Value (Byte 3)                                         | 00 h                                                   |
| Value (Byte 2)                                         | 00 h                                                   |
| Value (Byte 1)                                         | 00 h                                                   |
| Value (Byte 0)                                         | 64 h                                                   |
| Checksum                                               | BB h                                                   |

✷✹

<!-- image -->

## 3.6.44 MVPA (Move to Position Speci/uniFB01ed by Accumulator Register)

## Three operation types are available:

With this command, the motor is instructed to move to a speci/uniFB01ed relative or absolute position. The contents of the accumulator register are used as the target position. This command is non-blocking, which means that a reply is sent immediately after command interpretation and initialization of the motion controller. Further commands may follow without waiting for the motor reaching its end position. The maximumvelocity and acceleration as well as other ramp parameters are de/uniFB01ned by the appropriate axis parameters. For a list of these parameters, see Section 4. Positioning can be interrupted using MST, ROL or ROR commands.

- Moving to an absolute position speci/uniFB01ed by the accumulator register contents.
- Moving the motor to a (previously stored) coordinate (refer to SCO for details).
- Starting a relative movement by means of an offset to the actual position.

## Note

Related commands:

The distance between the actual position and the new position must not be more than 2147483647 ( 2 31 -1 ) microsteps. Otherwise, the motor runs in the opposite direction to take the shorter distance (caused by 32-bit over/uniFB02ow).

MVPXA, SAP, GAP, SCO, GCO, CCO, ACO, MST

Mnemonic:

MVPA &lt; ABS|REL|COORD &gt; , &lt; axis &gt;

Binary Representation

|   Instruction | Type                   | Motor/Bank   | Value          |
|---------------|------------------------|--------------|----------------|
|            46 | 0 - ABS - absolute     | 0            | 0 (don't care) |
|            46 | 1 - REL - relative     | 0            | 0 (don't care) |
|            46 | 2 - COORD - coordinate | 0...255      | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Move motor 0 to position speci/uniFB01ed by accumulator. Mnemonic: MVPA ABS, 0

<!-- image -->

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 2E h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 2F h    |

<!-- image -->

## 3.6.45 ROLA (Rotate Left Using the Accumulator Register)

Rotate in left direction (decreasing the position counter) using the velocity speci/uniFB01ed by the contents of the accumulator register. The velocity is given in rounds per minute (rpm).

Mnemonic:

ROLA &lt; axis &gt;

Related commands:

RORA, MST, SAP, GAP

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value          |
|---------------|----------------|----------------|----------------|
|            50 | 0 (don't care) | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Rotate left motor 0, velocity speci/uniFB01ed by accumulator. Mnemonic: ROLA 0.

Binary Form of ROLA 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 32 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 33 h    |

<!-- image -->

## 3.6.46 RORA (Rotate Right Using the Accumulator Register)

Rotate in right direction (increasing the position counter) using the velocity speci/uniFB01ed by the contents of the accumulator register. The velocity is given in rounds per minute (rpm).

Mnemonic:

ROLA &lt; axis &gt;

Related commands:

ROLA, MST, SAP, GAP

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value          |
|---------------|----------------|----------------|----------------|
|            51 | 0 (don't care) | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Rotate right motor 0, velocity speci/uniFB01ed by accumulator. Mnemonic: RORA 0.

Binary Form of RORA 0

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 33 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 33 h    |

<!-- image -->

## 3.6.47 SIV (Set Indexed Variable)

Internal function: The direct value supplied to this command is copied to the user variable speci/uniFB01ed by the X register.

This command copies a direct value to a TMCL user variable. The index of the user variable (0...255) is speci/uniFB01ed by the content of the X register. Therefore, the value in the X register must not be lower than zero or greater than 255. Otherwise, this command is ignored. This command is mainly intended for use in standalone mode.

Mnemonic:

SIV

Related commands:

AIV, GIV

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value   |
|---------------|----------------|----------------|---------|
|            55 | 0 (don't care) | 0 (don't care) | <value> |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Copy the value 3 to the user variable indexed by the X register. Mnemonic: SIV 3.

Binary Form of SIV 3

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 37 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 03 h    |
| Checksum           | 3B h    |

<!-- image -->

## 3.6.48 GIV (Get Indexed Variable)

Internal function:

This command reads a TMCL user variable and copies its content to the accumulator register. The index of the user variable (0...255) is speci/uniFB01ed by the X register. Therefore, the content of the X register must not be lower than zero or greater than 255. Otherwise, this command is ignored. This command is mainly intended for use in standalone mode.

The user variable speci/uniFB01ed by the x register is copied to the accumulator register.

Related commands:

SIV, AIV

Mnemonic:

GIV

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value          |
|---------------|----------------|----------------|----------------|
|            55 | 0 (don't care) | 0 (don't care) | 0 (don't care) |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Read the user variable indexed by the X register. Mnemonic: GIV.

Binary Form of GIV

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 38 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 03 h    |
| Checksum           | 39 h    |

<!-- image -->

## 3.6.49 AIV (Accumulator to Indexed Variable)

Internal function:

This command copies the content of the accumulator to a TMCL user variable. The index of the user variable (0...255) is speci/uniFB01ed by the content of the X register. Therefore, the value in the X register must not be lower than zero or greater than 255. Otherwise, this command is ignored. This command is mainly intended for use in standalone mode.

The accumulator is copied to the user variable speci/uniFB01ed by the X register.

Related commands:

SIV, GIV

Mnemonic:

AIV

Binary Representation

|   Instruction | Type           | Motor/Bank     | Value   |
|---------------|----------------|----------------|---------|
|            55 | 0 (don't care) | 0 (don't care) | <value> |

Reply in Direct Mode

| Status   | Value      |
|----------|------------|
| 100 - OK | Don't care |

## Example

Copy the accumulator to the user variable indexed by the X register. Mnemonic: AIV.

Binary Form of AIV

| Field              | Value   |
|--------------------|---------|
| Target address     | 01 h    |
| Instruction number | 39 h    |
| Type               | 00 h    |
| Motor/Bank         | 00 h    |
| Value (Byte 3)     | 00 h    |
| Value (Byte 2)     | 00 h    |
| Value (Byte 1)     | 00 h    |
| Value (Byte 0)     | 00 h    |
| Checksum           | 3A h    |

<!-- image -->

## 3.6.50 Customer Speci/uniFB01c Command Extensions (UF0...UF7 - User Functions)

Thesecommandsareusedforcustomer-speci/uniFB01c extensions of TMCL. They are implemented in C language by Analog Devices. Contact the sales department of Analog Devices for a customized TMCL /uniFB01rmware.

Mnemonic:

UF0...UF7

Related commands:

None

Binary Representation

| Instruction   | Type                 | Motor/Bank             | Value                  |
|---------------|----------------------|------------------------|------------------------|
| 64...71       | <user de/uniFB01ned> | 0 <user de/uniFB01ned> | 0 <user de/uniFB01ned> |

Reply in Direct Mode

| Status   | Value              |
|----------|--------------------|
| 100 - OK | User-de/uniFB01ned |

<!-- image -->

## 3.6.51 TMCL Control Commands

The motor/bank parameter is not used by any of these functions and thus is not listed in the table. It should always be set to 0 with these commands.

There is a set of TMCL commands called TMCL control commands. These commands can only be used in direct mode and not in a standalone program. So, they only have opcodes, but no mnemonics. Most of these commands are only used by the TMCL-IDE (to implement, example, the debugging functions in the TMCL creator). Some of them are also interesting for use in custom host applications, for example, to start a TMCL routine on a module, when combining direct mode and standalone mode (also see section 9.6). The following table lists all TMCL control commands.

TMCL Control Commands

| Instruction               | Description                                                                                                                                    | Type                                                     | Value                             |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|-----------------------------------|
| 128 - stop application    | Stop a running TMCL application.                                                                                                               | 0 (don't care)                                           | 0 (don't care)                    |
| 129 - run application     | Start or continue TMCL program execution.                                                                                                      | 0 - from current address 1 - from speci/uniFB01c address | 0 (don't care) Starting ad- dress |
| 130 - step application    | Execute only the next TMCL command.                                                                                                            | 0 (don't care)                                           | 0 (don't care)                    |
| 131 - reset application   | Stop a running TMCL program. Reset program counter and stack pointer to zero. Reset accumulator and X register to zero. Reset all /uniFB02ags. | 0 (don't care)                                           | 0 (don't care)                    |
| 132 - enter download mode | All following commands (except control commands) are not executed but stored in the TMCL memory.                                               | 0 (don't care)                                           | Start address for download        |
| 133 - exit download mode  | End the download mode. All following commands are executed normally again.                                                                     | 0 (don't care)                                           | 0 (don't care)                    |
| 134 - read program memory | Return contents of the speci/uniFB01ed program memory location (special reply format).                                                         | 0 (don't care)                                           | Address of memory loca- tion      |

<!-- image -->

Instruction

Description

Type

Table 14: TMCL Control Commands

| 135 - get application status     | Return information about the current status, depending on the type /uniFB01eld.                             | 0 - return mode, wait /uniFB02ag, memory pointer 1 - return mode, wait /uniFB02ag, program counter 2 - return accumulator 3 - return X register   | 0 (don't care)   |
|----------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| 136 - get /uniFB01rmware version | Return /uniFB01rmware version in string format (special reply) or binary format.                            | 0 - string format 1 - binary format                                                                                                               | 0 (don't care)   |
| 137 - restore factory settings   | Reset all settings in the EEPROM to their factory defaults. This command does not send a reply.             | 0 (don't care)                                                                                                                                    | Set to 1234      |
| 255 - software reset             | Restart the CPU of the module (like a power cycle). The reply of this command might not always get through. | 0 (don't care)                                                                                                                                    | Set to 1234      |

The commands 128, 129, 131, 136, and 255 are interesting for use in custom host applications. The other control commands are mainly being used by the TMCL-IDE.

<!-- image -->

Value

## 4 Axis Parameters

There are different parameter access types, like read only or read/write. Table 15 shows the different parameter access types used in the axis parameter tables.

Most motor controller features of the TMCM-1690 module are controlled by axis parameters. Axis parameters can be modi/uniFB01ed or read using SAP, GAP, and AAP commands. Some axis parameters can also be stored to or restored from the EEPROM using STAP and RSAP commands. This section describes all axis parameters that can be used on the TMCM-1690 module.

Meaning of the Letters in the Access Column

Table 15: Meaning of the Letters in the Access Column

| Access Type   | Command    | Description                           |
|---------------|------------|---------------------------------------|
| R             | GAP        | Parameter readable                    |
| W             | SAP, AAP   | Parameter writable                    |
| E             | STAP, RSAP | Parameter can be stored in the EEPROM |

Axis 0 Parameters of the TMCM-1690 Module

|   Number | Axis Parameter                | Description                                                     | Range [Units]          |   Default | Access   |
|----------|-------------------------------|-----------------------------------------------------------------|------------------------|-----------|----------|
|        0 | Motor type                    | Select the motor type: 0 - Three phase BLDC 1 - Single phase DC | 0 . . . 1              |         0 | RWEX     |
|        1 | Motor family                  | Select the motor family: 0 - Rotary 1 - Linear                  | 0 . . . 1              |         0 | RWEX     |
|        2 | Motor pole pairs              | Number of motor poles pairs.                                    | 0 . . . 255            |         4 | RWEX     |
|        3 | Motor pole pair distance      | Distance between motor poles for lin- ear motor.                | 1 . . . 65535 [ µ m]   |        10 | RWEX     |
|        4 | Motor nominal current         | Motor nominal current.                                          | 0 . . . 10000 [mA]     |      3470 | RWEX     |
|        5 | Motor peak current            | Motor peak current.                                             | 0 . . . 10000 [mA]     |     10000 | RWEX     |
|        6 | Motor line to line resistance | Motor line to line resistance.                                  | 1 . . . 65535 [mΩ ]    |       720 | RWEX     |
|        7 | Motor line to line inductance | Motor line to line inductance.                                  | 1 . . . 65535 [ µ H ]  |      1200 | RWEX     |
|        8 | Motor torque constant         | Motor torque constant.                                          | 1 . . . 65535 [mNm/A]  |        30 | RWEX     |
|        9 | Motor inertia                 | Motor inertia.                                                  | 1 . . . 65535 [gcm 2 ] |       480 | RWEX     |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   11 | Motor ramp type          | Type of ramp for motor (linear and sine). 0 - Linear 1 - Sine                                                                                                                                                                | 0 . . . 1          |    0 | RWE   |
|------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|------|-------|
|   12 | Motor direction          | Set motor direction. 0 - Rotate clockwise. 1 - Rotate counter-clockwise.                                                                                                                                                     | 0 . . . 1          |    0 | RWEX  |
|   13 | Commutation mode         | Select a commutation mode that /uniFB01ts best to the motor's sensors. 0 - Disabled 1 - Open loop 2 - Digital hall (foc) 3 - Digital hall (block) 4 - ABN encoder 5 - Absolute encoder                                       | 0 . . . 5          |    0 | RWEX  |
|   14 | Motor peripherals        | Sensors, gearbox and brakes attached to the motor 0 x 01 - Motor side encoder (ABN, ABS, ABN2) 0 x 02 - Hall sensor 0 x 04 - Gearbox 0 x 08 - Load side encoder (ABS, ABN2) 0 x 10 - Mechanical brake 0 x 20 - Brake chopper | 0 . . . 63         |   34 | RWEX  |
|   15 | Current sensor selection | Select current measurement type to commutate the motor. 0 - Bottom shunt                                                                                                                                                     | 0 . . . 0          |    0 | R     |
|   16 | Max current              | Max. allowed absolute motor cur- rent. This value can be temporarily exceeded marginally due to the oper- ation of the current regulator.                                                                                    | 0 . . . 10000 [mA] | 4000 | RWEX  |
|   17 | PWMscheme                | PWMscheme. 0 - Center aligned 1 - Down counting                                                                                                                                                                              | 0 . . . 1          |    0 | RWEX  |
|   18 | PWM frequency            | Frequency of the PWMused for com- mutation. 0 - 20kHz pwm frequeny 1 - 40kHz pwm frequeny 2 - 60kHz pwm frequeny 3 - 80kHz pwm frequeny 4 - 100kHz pwm frequeny 5 - 120kHz pwm frequeny                                      | 0 . . . 5          |    0 | RWEX  |
|   19 | PWMdead time             | PWMdead(breakbefore make) time.                                                                                                                                                                                              | 0 . . . 100 [ms]   |    1 | RWEX  |
|   21 | ADC_u_raw                | Raw ADC measurement of the phase_A shunt                                                                                                                                                                                     | 0 . . . 4095       |    0 | R     |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   22 | ADC_v_raw                                     | Raw ADC measurement of the phase_B shunt                                               | 0 . . . 4095                  |    0 | R    |
|------|-----------------------------------------------|----------------------------------------------------------------------------------------|-------------------------------|------|------|
|   23 | ADC_w_raw                                     | Raw ADC measurement of the phase_C shunt                                               | 0 . . . 4095                  |    0 | R    |
|   24 | ADC_u_offset                                  | Manually set/get the bottom-shunt phase_A offset.                                      | 0 . . . 4095                  | 2047 | RWEX |
|   25 | ADC_v_offset                                  | Manually set/get the bottom-shunt phase_B offset.                                      | 0 . . . 4095                  | 2047 | RWEX |
|   26 | ADC_w_offset                                  | Manually set/get the bottom-shunt phase_C offset.                                      | 0 . . . 4095                  | 2047 | RWEX |
|   27 | ADC_u                                         | Calculated current measurement for phase_A shunt and used offset                       | - 32768 . . . 32767           |    0 | R    |
|   28 | ADC_v                                         | Calculated current measurement for phase_B shunt and used offset                       | - 32768 . . . 32767           |    0 | R    |
|   29 | ADC_w                                         | Calculated current of phase_C from phase_A and phase_B measurements                    | - 32768 . . . 32767           |    0 | R    |
|   31 | Open loop commutation angle                   | Actual controlled angle value.                                                         | - 32768 . . . 32767           |    0 | R    |
|   32 | Open loop current                             | Motor current for controlled commu- tation. Thisparameterisusedincom- mutation mode 1. | 0 . . . 10000 [mA]            | 2000 | RWEX |
|   33 | Open loop velocity                            | Actual open loop velocity value.                                                       | - 2147483648 . . . 2147483647 |    0 | R    |
|   34 | Open loop position                            | The open loop position counter.                                                        | - 2147483648 . . . 2147483647 |    0 | RW   |
|   36 | Digital hall commutation angle                | Actual digital hall angle value.                                                       | - 32768 . . . 32767           |    0 | R    |
|   37 | Digital hall/open loop commutation angle diff | Actual digital hall and open loop an- gle difference.                                  | - 32768 . . . 32767           |    0 | R    |
|   38 | Digital hall velocity                         | Actual digital hall velocity value.                                                    | - 2147483648 . . . 2147483647 |    0 | R    |
|   39 | Digital hall position                         | The actual digital hall position counter.                                              | - 2147483648 . . . 2147483647 |    0 | RW   |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   40 | Digital hall sector offset                         | Hall sensor sector offset. 0 - 0° sector offset 1 - 60° sector offset 2 - 120° sector offset 3 - 180° sector offset 4 - 240° sector offset 5 - 300° sector offset   | 0 . . . 5                     |    0 | RWEX   |
|------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|------|--------|
|   41 | Digital hall direction                             | Hall sensor direction. 0 - Standard 1 - Inverted                                                                                                                    | 0 . . . 1                     |    0 | RWEX   |
|   42 | Digital hall interpolation                         | Hall sensor interpolation. 0 - Off 1 - On                                                                                                                           | 0 . . . 1                     |    0 | RWEX   |
|   43 | Digital hall phi_e offset                          | Offset for electrical angle hall_phi_e of hall sensor.                                                                                                              | - 32768 . . . 32767           |    0 | RWEX   |
|   44 | Digital hall inputs                                | Raw hall sensor inputs.                                                                                                                                             | 0 . . . 7                     |    0 | R      |
|   45 | Digital hall auto con/uniFB01guration trigger      | Hall sensor auto con/uniFB01guration trig- ger. 0 - Standby 1 - Direction estimation 2 - Sector offset estimation                                                   | 0 . . . 2                     |    0 | RW     |
|   46 | ABN encoder commutation angle                      | Actual ABN encoder angle value.                                                                                                                                     | - 32768 . . . 32767           |    0 | R      |
|   47 | ABN encoder/open loop commutation angle difference | Actual ABN encoder and open loop angle difference.                                                                                                                  | - 32768 . . . 32767           |    0 | R      |
|   48 | ABN encoder velocity                               | Actual ABN encoder velocity value.                                                                                                                                  | - 2147483648 . . . 2147483647 |    0 | R      |
|   49 | ABN encoder position                               | The actual ABN encoder position counter.                                                                                                                            | - 2147483648 . . . 2147483647 |    0 | RW     |
|   50 | ABN encoder steps                                  | ABN encoder steps per full motor ro- tation.                                                                                                                        | 0 . . . 1050000               | 4096 | RWEX   |
|   51 | ABN encoder direction                              | Set the ABN encoder direction in a way that ROR increases position counter. 0 - Standard 1 - Inverted                                                               | 0 . . . 1                     |    0 | RWEX   |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   52 | ABN encoder init mode     | Select an ABNencoder init modethat /uniFB01ts best to the motor's sensors. 0 - Estimate offset 1 - Estimate offset (shake) 2 - Use offset 3 - Use hall 4 - Estimate offset (OL) 5 - Estimate offset (linear)   | 0 . . . 5                   |    0 | RWEX   |
|------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|------|--------|
|   53 | ABN encoder init state    | Actual state of ABNencoder initializa- tion. 0 - Nothing to do 1 - Start initialization 2 - Wait for initialization 3 - Estimate offset                                                                        | 0 . . . 3                   |    0 | R      |
|   54 | ABN encoder init delay    | Duration for encodersine initializa- tion sequence. Set this parame- ter in a way so that the motor has stopped mechanical oscillations after the speci/uniFB01ed time.                                        | 0 . . . 10000 [ms]          | 1000 | RWEX   |
|   55 | ABN encoder init velocity | Init velocity for ABN encoder initial- ization with the N-channel of the en- coder.                                                                                                                            | - 200000 . . . 200000 [rpm] |  200 | RWEX   |
|   56 | ABN encoder offset        | This value represents the internal commutation offset. (0...max. en- coder steps per rotation).                                                                                                                | 0 . . . 1050000             |    0 | RWE    |
|   57 | Clear on null             | Clear the positioncounteronABNen- coder N-channel. 0 - Do not clear position counter at next N-channel event 1 - Set position counter to zero at next N-channel event                                          | 0 . . . 1                   |    0 | RW     |
|   58 | Clear once                | Clear the position counter on the N- channel of the encoder. 0 - Clear position counter always at an N-channel event 1 - Set position counter to zero only once                                                | 0 . . . 1                   |    0 | RW     |
|   59 | ABN encoder inputs        | Raw ABN encoder inputs. Enc_A = Bit_0, Enc_B = Bit_1, Enc_N = bit_2 Bit_x = 1 - Encoder channel signal is high Bit_x = 0 - Encoder channel signal is low                                                       | 0 . . . 7                   |    0 | R      |
|   60 | ABN encoder value         | Raw ABN encoder counter value.                                                                                                                                                                                 | 0 . . . 16777215            |    0 | R      |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   61 | ABN encoder side                                  | Select side of the gearbox the enocder is mounted on: 0 - Disabled 1 - Motor side                                                                          | 0 . . . 1                     |    0 | RWEX   |
|------|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|------|--------|
|   62 | ABN encoder 2 velocity                            | Actual ABN encoder 2 velocity value.                                                                                                                       | - 2147483648 . . . 2147483647 |    0 | R      |
|   63 | ABN encoder 2 position                            | The actual ABN encoder 2 position counter.                                                                                                                 | - 2147483648 . . . 2147483647 |    0 | RW     |
|   64 | ABN encoder 2 steps                               | ABN encoder 2 steps per full motor rotation.                                                                                                               | 0 . . . 65535                 | 4096 | RWEX   |
|   65 | ABN encoder 2 direction                           | Set the ABN encoder 2 direction in a way that ROR increases position counter. 0 - Standard 1 - Inverted                                                    | 0 . . . 1                     |    0 | RWEX   |
|   66 | ABN encoder 2 inputs                              | Raw abn encoder 2 inputs. Enc_A = Bit_0, Enc_B = Bit_1, Enc_N = bit_2 Bit_x = 1 - Encoder channel signal is high Bit_x = 0 - Encoder channel signal is low | 0 . . . 7                     |    0 | R      |
|   67 | ABN Encoder 2 Side                                | Select side of the gearbox the enocder is mounted on: 0 - Disabled 1 - Motor side 2 - Load side                                                            | 0 . . . 2                     |    0 | RWEX   |
|   68 | Absolute encoder commutation angle                | Actual absolute encoder angle value.                                                                                                                       | - 32768 . . . 32767           |    0 | R      |
|   69 | Absolute encoder/open loop commutation angle diff | Actual absolute encoder and open- loop angle difference.                                                                                                   | - 32768 . . . 32767           |    0 | R      |
|   70 | Absolute encoder velocity                         | Actual absolute encoder velocity value.                                                                                                                    | - 2147483648 . . . 2147483647 |    0 | R      |
|   71 | Absolute encoder position                         | The actual absolute encoder counter.                                                                                                                       | - 2147483648 . . . 2147483647 |    0 | RW     |
|   72 | Absolute encoder type                             | Select the used absolute encoder: 0 - Disabled 1 - AM4096 2 - IC MU150                                                                                     | 0 . . . 2                     |    0 | RWEX   |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   73 | Absolute encoder init      | Select the used absolute encoder init mode: 0 - Estimate offset 1 - Estimate offset (shake) 2 - Use offset                                                      | 0 . . . 2                          |   0 | RWEX   |
|------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|-----|--------|
|   74 | Absolute encoder direction | Set the absolute encoder direction in a way that ROR increases position counter. 0 - Standard 1 - Inverted                                                      | 0 . . . 1                          |   0 | RWEX   |
|   75 | Absolute encoder offset    | This value represents the internal commutation offset. (0...max. en- coder steps per rotation).                                                                 | 0 . . . 65535                      |   0 | RWE    |
|   76 | Absolute encoder side      | Select side of the gearbox the enocder is mounted on: 0 - Disabled 1 - Motor side 2 - Load side                                                                 | 0 . . . 2                          |   0 | RWEX   |
|   77 | Target torque              | Get desired target current or set tar- get current to activate current regu- lation mode. (+= turn motor in right direction; -= turn motor in left direc- tion) | - 10000 . . . 10000 [mA]           |   0 | RW     |
|   78 | Actual torque              | The actual motor current.                                                                                                                                       | - 2147483648 . . . 2147483647 [mA] |   0 | R      |
|   79 | Target /uniFB02ux          | Get desired target /uniFB02ux or set tar- get /uniFB02ux to activate current regulation mode.                                                                   | - 10000 . . . 10000 [mA]           |   0 | RW     |
|   80 | Actual /uniFB02ux          | The actual motor /uniFB02ux.                                                                                                                                    | - 2147483648 . . . 2147483647 [mA] |   0 | R      |
|   82 | Torque offset              | The desired torque offset.                                                                                                                                      | - 4700 . . . 4700 [mA]             |   0 | RW     |
|   83 | Torque P                   | P parameter for current PID regula- tor.                                                                                                                        | 0 . . . 32767                      | 300 | RWEX   |
|   84 | Torque I                   | I parameterforcurrent PIDregulator.                                                                                                                             | 0 . . . 32767                      | 600 | RWEX   |
|   85 | Torque PI error sum        | Sumof errors of current PI regulator.                                                                                                                           | - 2147483648 . . . 2147483647      |   0 | R      |
|   86 | Flux PI error sum          | Sum of errors of /uniFB02ux PI regulator.                                                                                                                       | - 2147483648 . . . 2147483647      |   0 | R      |
|   87 | Torque PI error            | Error of torque PI regulator.                                                                                                                                   | - 2147483648 . . . 2147483647      |   0 | R      |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   88 | Flux PI error             | Error of /uniFB02ux PI regulator.                                                                                                                                      | - 2147483648 . . . 2147483647       |    0 | R    |
|------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|------|------|
|   90 | Velocity sensor selection | Select a commutation mode that /uniFB01ts best to the motor's sensors. 0 - Same as commutation 1 - Digital hall 2 - ABN encoder 3 - ABN encoder 2 4 - Absolute encoder | 0 . . . 4                           |    0 | RWEX |
|   91 | Velocity unit selection   | Select mechanical or electrical veloc- ity unit. 0 - Mechanical rpm 1 - Electrical rpm                                                                                 | 0 . . . 1                           |    0 | RWEX |
|   92 | Target velocity           | The desired target velocity.                                                                                                                                           | - 200000 . . . 200000 [rpm]         |    0 | RW   |
|   93 | Actual velocity           | The actual velocity of the motor.                                                                                                                                      | - 2147483648 . . . 2147483647 [rpm] |    0 | R    |
|   94 | Max velocity              | Max. absolute velocity for velocity and positioning mode.                                                                                                              | 0 . . . 200000 [rpm]                | 4000 | RWEX |
|   95 | Acceleration              | AccelerationparameterforROL,ROR, and the velocity ramp of MVP.                                                                                                         | 0 . . . 1000000 [rpm/s]             | 2000 | RWEX |
|   96 | Motor halted velocity     | If the actual velocity is below this value, the motor halted /uniFB02ag is set.                                                                                        | 0 . . . 200000 [rpm]                |   10 | RWEX |
|   98 | Velocity offset           | The desired velocity offset.                                                                                                                                           | - 200000 . . . 200000 [rpm]         |    0 | RW   |
|   99 | Velocity P                | P parameter for velocity PID regula- tor.                                                                                                                              | 0 . . . 32767                       |  600 | RWEX |
|  100 | Velocity I                | I parameter for velocity PID regulator                                                                                                                                 | 0 . . . 32767                       |  300 | RWEX |
|  101 | Velocity PI error sum     | Sumoferrors of velocity PI regulator.                                                                                                                                  | - 2147483648 . . . 2147483647       |    0 | R    |
|  102 | Velocity PI error         | Error of velocity PI regulator.                                                                                                                                        | - 2147483648 . . . 2147483647       |    0 | R    |
|  104 | Position sensor selection | Select a commutation mode that /uniFB01ts best to the motor's sensors. 0 - Same as commutation 1 - Digital hall 2 - ABN encoder 3 - ABN encoder 2 4 - Absolute encoder | 0 . . . 4                           |    0 | RWEX |
|  105 | Target position           | The target position of a currently ex- ecuted ramp.                                                                                                                    | - 2147483648 . . . 2147483647       |    0 | RW   |
|  106 | Actual position           | The actual position counter.                                                                                                                                           | - 2147483648 . . . 2147483647       |    0 | RW   |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   107 | Position reached distance         | Maximum distance at which the posi- tion end /uniFB02ag is set.                                                                                     | 0 . . . 100000                |       50 | RWEX   |
|-------|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------|--------|
|   108 | Position reached velocity         | Max. velocity at which end position /uniFB02ag can be set. Prevents issuing of end position /uniFB02ag when the target is passed at high velocity.  | 0 . . . 200000 [rpm]          |      500 | RWEX   |
|   109 | Position reached /uniFB02ag       | This /uniFB02ag is set when actual positon and velocity matches target position window. 0 - Position window not reached 1 - Position window reached | 0 . . . 1                     |        0 | R      |
|   110 | Position P                        | P parameter for position PID regula- tor.                                                                                                           | 0 . . . 32767                 |       20 | RWEX   |
|   111 | Position PI error                 | Error of position PI regulator.                                                                                                                     | - 2147483648 . . . 2147483647 |        0 | R      |
|   113 | Gearbox transmission type         | Select the transmission type of the Gearbox. 0 - Rotary to rotary 1 - Rotary to linear                                                              | 0 . . . 1                     |        0 | RWEX   |
|   114 | Gearbox input displacement        | The input displacement to the gear- box.                                                                                                            | 1 . . . 2147483647            |        1 | RWEX   |
|   115 | Gearbox output displacement       | The output displacement to the gear- box.                                                                                                           | 1 . . . 2147483647            |        1 | RWEX   |
|   116 | Gearbox invert direction          | Gearbox inverts the direction of mo- tion: 0 - Direction not inverted 1 - Direction inverted                                                        | 0 . . . 1                     |        0 | RWEX   |
|   118 | Thermal winding time constant (1) | Thermal winding time constant for the used motor. Used for IIt monitor- ing.                                                                        | 1000 . . . 60000 [ms]         |    30000 | RWEX   |
|   119 | IIt limit (1)                     | An actual IIt sum that exceeds this limit leads to trigger the IIt_exceed_/uniFB02ag_1.                                                             | 0 . . . 54000000              | 10300000 | RWEX   |
|   120 | IIt sum (1)                       | Actual sum of the IIt monitor_1.                                                                                                                    | 0 . . . 4294967295            |        0 | R      |
|   121 | Thermal winding time constant (2) | Thermal winding time constant for the used motor. Used for IIt monitor- ing.                                                                        | 1000 . . . 60000 [ms]         |    30000 | RWEX   |
|   122 | IIt limit (2)                     | An actual IIt sum that exceeds this limit leads to trigger the IIt_exceed_/uniFB02ag_2.                                                             | 0 . . . 54000000              | 10300000 | RWEX   |
|   123 | IIt sum (2)                       | Actual sum of the IIt monitor_2.                                                                                                                    | 0 . . . 4294967295            |        0 | R      |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   124 | Clear IIt exceeded /uniFB02ags   | Clear the /uniFB02ags that indicates that the IIt sum has exceeded the IIt limit.                                                                                                                                                                 | 0 . . . 0                       |       0 | RW   |
|-------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|---------|------|
|   126 | Velocity window                  | A velocity window error occurs, if the difference between rampvelocity and actual velocity is bigger than this window.                                                                                                                            | 0 . . . 200000                  |     500 | RWEX |
|   127 | Clear velocity window error      | Clear the /uniFB02ag that indicates that the velocity window has been left.                                                                                                                                                                       | 0 . . . 0                       |       0 | RW   |
|   128 | Position window                  | A position window error occurs, if the difference between ramp posi- tion andactual position is bigger than this window.                                                                                                                          | 0 . . . 2147483647              | 1638400 | RWEX |
|   129 | Clear position window error      | Clear the /uniFB02ag that indicates that the position window has been left.                                                                                                                                                                       | 0 . . . 0                       |       0 | RW   |
|   131 | Ramp acceleration                | The actual acceleration used for mea- suring velocity and position.                                                                                                                                                                               | - 1000000 . . . 1000000 [rpm/s] |       0 | R    |
|   132 | Ramp velocity                    | The actual velocity of the velocity ramp used for positioning and veloc- ity mode.                                                                                                                                                                | - 200000 . . . 200000 [rpm]     |       0 | R    |
|   133 | Enable velocity ramp             | An activated ramp allows a de/uniFB01ned acceleration for velocity and position mode. 0 - Deactivate velocity ramp genera- tor. 1 - Activate velocity ramp generator.                                                                             | 0 . . . 1                       |       1 | RWEX |
|   134 | Enable velocity feed forward     | An activated velocity feed forward al- lows to use the velocity computed by the position ramp generator to be used as feed forward value for the ve- locity controller. 0 - Deactivate velocity feed forward. 1 - Activate velocity feed forward. | 0 . . . 1                       |       1 | RWEX |
|   135 | Ramp position                    | The actual position of the position ramp used for positioning mode.                                                                                                                                                                               | - 2147483648 . . . 2147483647   |       0 | R    |
|   137 | Homing mode                      | 0 - HOMING_OFF 1 - Single ended HARD_STOP_CW 2 - Single ended HARD_STOP_CCW 3 - Double ended HARD_STOP_CW 4 - Double ended HARD_STOP_CCW                                                                                                          | 0 . . . 4                       |       0 | RWX  |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   138 | Homing state                               | 0 - NOT_HOMED 1 - HOMED 2 - START 3 - MOVE_TO_END_POSITION 4 - CHECK_NEGATIVE_STOP 5 - CHECK_POSITIVE_STOP 252 - STOP_ERROR 253 - STOP_TORQUE 254 - STOP_VELOCITY 255 - STOP_POSITION   | 0 . . . 255                   | 0            | RW   |
|-------|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|--------------|------|
|   139 | Homing fast velocity                       | The velocity is used to drive to the po- sition limit at the end of the homing function.                                                                                                | 0 . . . 65535                 | 1000         | RWEX |
|   140 | Homing slow velocity                       | The velocity is used during homing to search the hard stops or N-channels.                                                                                                              | 0 . . . 65535                 | 500          | RWEX |
|   141 | Homing current threshold                   | Current threshold value to detect the hard stops.                                                                                                                                       | 0 . . . 10000 [mA]            | 2000         | RWEX |
|   142 | Position offset CW                         | Absolute position offset between clockwise hardstop/N-channel and max position limit.                                                                                                   | 0 . . . 2147483647            | 40000        | RWEX |
|   143 | Position offset CCW                        | Absolute position offset between counterclockwise hardstop/N- channel and min position limit.                                                                                           | 0 . . . 2147483647            | 40000        | RWEX |
|   144 | Min position limit                         | Min position limit for positioning tasks.                                                                                                                                               | - 2147483648 . . . 2147483647 | - 2147483648 | RWEX |
|   145 | Max position limit                         | Max position limit for positioning tasks.                                                                                                                                               | - 2147483648 . . . 2147483647 | 2147483647   | RWEX |
|   146 | teach position limit                       | Teach position limit 0. Do not teach position 1. Teach left position 2. Teach Right position 3. Rescale to 16 bit                                                                       | 0 . . . 3                     | 0            | RW   |
|   148 | Target torque /uniFB01lter type            | Target-torque /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                                                                                                    | 0 . . . 2                     | 1            | RWEX |
|   149 | Target torque simple /uniFB01lter size     | Target-torque simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n                                                                       | 1 . . . 8                     | 1            | RWEX |
|   150 | Target torque biquad /uniFB01lter aCoeff_1 | Target-torque biquad-/uniFB01lter aCoeff_1.                                                                                                                                             | - 2147483648 . . . 2147483647 | 0            | RWEX |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   151 | Target torque biquad /uniFB01lter aCoeff_2   | Target-torque biquad-/uniFB01lter aCoeff_2.                                                                         | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|-------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------|-----|--------|
|   152 | Target torque biquad /uniFB01lter bCoeff_0   | Target-torque biquad-/uniFB01lter bCoeff_0.                                                                         | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   153 | Target torque biquad /uniFB01lter bCoeff_1   | Target-torque biquad-/uniFB01lter bCoeff_1.                                                                         | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   154 | Target torque biquad /uniFB01lter bCoeff_2   | Target-torque biquad-/uniFB01lter bCoeff_2.                                                                         | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   156 | Actual current /uniFB01lter type             | Actual-current /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                               | 0 . . . 2                       |   1 | RWEX   |
|   157 | Actual current simple /uniFB01lter size      | Actual-torque simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n   | 1 . . . 8                       |   1 | RWEX   |
|   158 | Actual current biquad /uniFB01lter aCoeff_1  | Actual-current biquad-/uniFB01lter aCoeff_1.                                                                        | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   159 | Actual current biquad /uniFB01lter aCoeff_2  | Actual-current biquad-/uniFB01lter aCoeff_2.                                                                        | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   160 | Actual current biquad /uniFB01lter bCoeff_0  | Actual-current biquad-/uniFB01lter bCo- eff_0.                                                                      | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   161 | Actual current biquad /uniFB01lter bCoeff_1  | Actual-current biquad-/uniFB01lter bCo- eff_1.                                                                      | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   162 | Actual current biquad /uniFB01lter bCoeff_2  | Actual-current biquad-/uniFB01lter bCo- eff_2.                                                                      | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   164 | Target velocity /uniFB01lter type            | Target-velocity /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                              | 0 . . . 2                       |   1 | RWEX   |
|   165 | Target velocity simple /uniFB01lter size     | Target-velocity simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n | 1 . . . 8                       |   1 | RWEX   |
|   166 | Target velocity biquad /uniFB01lter aCoeff_1 | Target-velocity biquad-/uniFB01lter aCo- eff_1.                                                                     | - 2147483648 . . . 2147483647   |   0 | RWEX   |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   167 | Target velocity biquad /uniFB01lter aCoeff_2   | Target-velocity eff_2.                                                                                              | biquad-/uniFB01lter                                                                                                 | aCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|-------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------|-----|--------|
|   168 | Target velocity biquad /uniFB01lter bCoeff_0   | Target-velocity eff_0.                                                                                              | biquad-/uniFB01lter                                                                                                 | bCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   169 | Target velocity biquad /uniFB01lter bCoeff_1   | Target-velocity eff_1.                                                                                              | biquad-/uniFB01lter                                                                                                 | bCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   170 | Target velocity biquad /uniFB01lter bCoeff_2   | Target-velocity eff_2.                                                                                              | biquad-/uniFB01lter                                                                                                 | bCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   172 | Actual velocity /uniFB01lter type              | Actual-velocity /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                              | Actual-velocity /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                              |                                                                                                                     | 0 . . . 2                       |   1 | RWEX   |
|   173 | Actual velocity simple /uniFB01lter size       | Actual-velocity simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n | Actual-velocity simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n | Actual-velocity simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n | 1 . . . 8                       |   1 | RWEX   |
|   174 | Actual velocity biquad /uniFB01lter aCoeff_1   | Actual-velocity eff_1.                                                                                              | biquad-/uniFB01lter                                                                                                 | aCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   175 | Actual velocity biquad /uniFB01lter aCoeff_2   | Actual-velocity eff_2.                                                                                              | biquad-/uniFB01lter                                                                                                 | aCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   176 | Actual velocity biquad /uniFB01lter bCoeff_0   | Actual-velocity eff_0.                                                                                              | biquad-/uniFB01lter                                                                                                 | bCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   177 | Actual velocity biquad /uniFB01lter bCoeff_1   | Actual-velocity eff_1.                                                                                              | biquad-/uniFB01lter                                                                                                 | bCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   178 | Actual velocity biquad /uniFB01lter bCoeff_2   | Actual-velocity eff_2.                                                                                              | biquad-/uniFB01lter                                                                                                 | bCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |
|   180 | Target position /uniFB01lter type              | Target position /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                              | Target position /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                              | Target position /uniFB01lter type. 0 - Disabled 1 - Average 2 - Biquad                                              | 0 . . . 2                       |   1 | RWEX   |
|   181 | Target position simple /uniFB01lter size       | Target-position simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n | Target-position simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n | Target-position simple-/uniFB01lter size, value entered is the order of the /uniFB01lter n, where sample size = 2 n | 1 . . . 8                       |   1 | RWEX   |
|   182 | Target position biquad /uniFB01lter aCoeff_1   | Target-position eff_1.                                                                                              | biquad-/uniFB01lter                                                                                                 | aCo-                                                                                                                | - 2147483648 . . . 2147483647   |   0 | RWEX   |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|     |                                              |                                                                                                                 | biquad-/uniFB01lter                                                                                             |                               |      |      |
|-----|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------|------|------|
| 183 | Target position biquad /uniFB01lter aCoeff_2 | Target-position eff_2.                                                                                          | aCo-                                                                                                            | - 2147483648 . . . 2147483647 |    0 | RWEX |
| 184 | Target position biquad /uniFB01lter bCoeff_0 | Target-position eff_0.                                                                                          | biquad-/uniFB01lter bCo-                                                                                        | - 2147483648 . . . 2147483647 |    0 | RWEX |
| 185 | Target position biquad /uniFB01lter bCoeff_1 | Target-position eff_1.                                                                                          | biquad-/uniFB01lter bCo-                                                                                        | - 2147483648 . . . 2147483647 |    0 | RWEX |
| 186 | Target position biquad /uniFB01lter bCoeff_2 | Target-position eff_2.                                                                                          | biquad-/uniFB01lter bCo-                                                                                        | - 2147483648 . . . 2147483647 |    0 | RWEX |
| 188 | Release brake                                | Controls the external brake of the module. 0 - Brake PWMdeactivated. 1 - Brake PWMactivated.                    | Controls the external brake of the module. 0 - Brake PWMdeactivated. 1 - Brake PWMactivated.                    | 0 . . . 1                     |    0 | RW   |
| 189 | Brake releasing duty cycle                   | Controls the duty cycle of the /uniFB01rst PWMphase for releasing the brake.                                    | Controls the duty cycle of the /uniFB01rst PWMphase for releasing the brake.                                    | 0 . . . 100 [%]               |   75 | RWEX |
| 190 | Brake holding duty cycle                     | Controls the duty cycle of the second PWMphase to hold the brake.                                               | Controls the duty cycle of the second PWMphase to hold the brake.                                               | 0 . . . 100 [%]               |   11 | RWEX |
| 191 | Brake releasing duration                     | ControlsthedurationthebrakePWM uses the /uniFB01rst duty cycle.                                                 | ControlsthedurationthebrakePWM uses the /uniFB01rst duty cycle.                                                 | 0 . . . 65535 [ms]            | 1000 | RWEX |
| 192 | Enable brake output                          | Enables the brake functionality. 0 - Brake functionality enabled 1 - Brake functionality disabled               | Enables the brake functionality. 0 - Brake functionality enabled 1 - Brake functionality disabled               | 0 . . . 1                     |    0 | RWEX |
| 193 | Invert brake output                          | Inverts the brake output. 0 - Brake output inverted 1 - Brake output normal                                     | Inverts the brake output. 0 - Brake output inverted 1 - Brake output normal                                     | 0 . . . 1                     |    0 | RWEX |
| 194 | Brake supply voltage                         | Brake supply voltage.                                                                                           | Brake supply voltage.                                                                                           | 0 . . . 65535 [0.1V]          |  240 | RWEX |
| 195 | Brake resistance                             | Brake resistance.                                                                                               | Brake resistance.                                                                                               | 0 . . . 65535 [mΩ ]           |  440 | RWEX |
| 197 | Enable brake chopper                         | Enable brake chopper functionality. 0 - Deactivate brake chopper. 1 - Activate brake chopper.                   | Enable brake chopper functionality. 0 - Deactivate brake chopper. 1 - Activate brake chopper.                   | 0 . . . 1                     |    0 | RWE  |
| 198 | Brake chopper voltage limit                  | If the brake chopper is enabled and supply voltage exceedsthis value, the brake chopper output is activated.    | If the brake chopper is enabled and supply voltage exceedsthis value, the brake chopper output is activated.    | 50 . . . 1000 [0.1V]          |  300 | RWE  |
| 199 | Brake chopper hysteresis                     | An activated brake chopper is dis- abled if the actual supply voltage is lower than (limit voltage-hysteresis). | An activated brake chopper is dis- abled if the actual supply voltage is lower than (limit voltage-hysteresis). | 0 . . . 50 [0.1V]             |    5 | RWE  |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   200 | Brake chopper type            | Type of brake chopper. 0 - PWMbraking 1 - Shunt braking                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 0 . . . 1 [0.1V]     |     0 | RWEX   |
|-------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-------|--------|
|   201 | Brake chopper active          | A value unequal to zero indicates an active brake chopper.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 0 . . . 1            |     0 | R      |
|   202 | Brake chopper supply voltage  | Brake supply voltage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 0 . . . 65535 [0.1V] |   240 | RWEX   |
|   203 | Brake chopper resistance      | Brake resistance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0 . . . 65535 [mΩ ]  | 22000 | RWEX   |
|   205 | Reference switch enable       | REF_L = Bit_1, REF_R = Bit_0 Bit_x = 1 - Reference switch function- ality is enabled. Bit_x = 0 - Reference switch function- ality is disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 0 . . . 3            |     0 | RWEX   |
|   206 | Reference switch polarity     | REF_L = Bit_1, REF_R = Bit_0 Bit_x = 1 - Reference switch is high ac- tive. Bit_x = 0 - Reference switch is low ac- tive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 0 . . . 3            |     0 | RWEX   |
|   207 | Right reference switch active | 0 - Right reference switch deacti- vated. 1 - Right reference switch activated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 0 . . . 1            |     0 | R      |
|   208 | Left reference switch active  | 0 - Left reference switch deactivated. 1 - Left reference switch activated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 0 . . . 1            |     0 | R      |
|   210 | Status /uniFB02ags            | Actual status /uniFB02ags. 0 x 00000001 - OVERCURRENT 0 x 00000002 - UNDERVOLTAGE 0 x 00000004 - OVERVOLTAGE 0 x 00000008 - OVERTEMPERATURE 0 x 00000010 - MOTORHALTED 0 x 00000020 - HALLERROR 0 x 00000040 - DRIVER_ERROR 0 x 00000080 - INIT_ERROR 0 x 00000100 - STOP_MODE 0 x 00000200 - VELOCITY_MODE 0 x 00000400 - POSITION_MODE 0 x 00000800 - TORQUE_MODE 0 x 00001000 - VELOCITY_WINDOW 0 x 00002000 - POSITION_WINDOW 0 x 00004000 - POSITION_END 0 x 00008000 - MODULE_INITIALIZED 0 x 08000000 - ABN1_INITIALIZED 0 x 04000000 - MODULE_ENABLED 0 x 00020000 - IIT_EXCEEDED (1) 0 x 00040000 - IIT_EXCEEDED(2) | 0 . . . 4294967295   |     0 | R      |
|   211 | Supply voltage                | The actual supply voltage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 0 . . . 1000 [0.1V]  |     0 | R      |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   212 | Supply voltage threshold             | The supply voltage threshold.                                                       | 0 . . . 1000 [0.1V]           |   480 | RWEX   |
|-------|--------------------------------------|-------------------------------------------------------------------------------------|-------------------------------|-------|--------|
|   213 | Driver temperature                   | The actual temperature of the motor driver.                                         | - 20 . . . 136 [° C]          |     0 | R      |
|   214 | Driver temperature threshold         | The temperature threshold at which the motor driver is shut down.                   | - 20 . . . 136 [° C]          |     0 | RWEX   |
|   216 | ABN encoder 2 angle                  | ABN encoder 2 angle value.                                                          | - 32768 . . . 32767           |     0 | R      |
|   220 | Switchover velocity for PI parameter | The velocity threshold where the low speed and standard PI parameters are switched. | 0 . . . 32767                 |     0 | RWEX   |
|   221 | Velocity P for lower velocity        | P parameter for lower velocity PID regulator.                                       | 0 . . . 32767                 |   600 | RWEX   |
|   222 | Velocity I for lower velocity        | I parameter for lower velocity PID reg- ulator.                                     | 0 . . . 32767                 |   300 | RWEX   |
|   238 | Driver status register               | Information regarding the current status of the driver.                             | 0 . . . 65535                 |     0 | R      |
|   239 | Clear driver error /uniFB02ag        | Check/clear the driver error /uniFB02ag                                             | 0 . . . 1                     |     0 | RW     |
|   240 | Main loops                           | Main loops per second.                                                              | 0 . . . 4294967295 [1/s]      |     0 | R      |
|   241 | PWMloops                             | Torque loops per second.                                                            | 0 . . . 4294967295 [1/s]      |     0 | R      |
|   242 | Torque loops                         | Torque loops per second.                                                            | 0 . . . 4294967295 [1/s]      |     0 | R      |
|   243 | Velocity loops                       | Velocity loops per second.                                                          | 0 . . . 4294967295 [1/s]      |     0 | R      |
|   244 | debug value 0                        | Free used debugging value.                                                          | - 2147483648 . . . 2147483647 |     0 | RW     |
|   245 | debug value 1                        | Free used debugging value.                                                          | - 2147483648 . . . 2147483647 |     0 | RW     |
|   246 | debug value 2                        | Free used debugging value.                                                          | - 2147483648 . . . 2147483647 |     0 | RW     |
|   247 | debug value 3                        | Free used debugging value.                                                          | - 2147483648 . . . 2147483647 |     0 | RW     |
|   248 | debug value 4                        | Free used debugging value.                                                          | - 2147483648 . . . 2147483647 |     0 | RW     |
|   249 | debug value 5                        | Free used debugging value.                                                          | - 2147483648 . . . 2147483647 |     0 | RW     |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Default

Access

|   250 | debug value 6                 | Free used debugging value.                                                                                               | - 2147483648 . . . 2147483647          |         0 | RW   |
|-------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------|----------------------------------------|-----------|------|
|   251 | debug value 7                 | Free used debugging value.                                                                                               | - 2147483648 . . . 2147483647          |         0 | RW   |
|   252 | debug value 8                 | Free used debugging value.                                                                                               | - 2147483648 . . . 2147483647          |         0 | RW   |
|   253 | debug value 9                 | Free used debugging value.                                                                                               | - 2147483648 . . . 2147483647          |         0 | RW   |
|   254 | Reinit bldc regulation        | Reinit bldc regulation.                                                                                                  | 0 . . . 1                              |         0 | W    |
|   255 | Enable driver                 | Enables the motor driver (enabled by default): 0 - Driver disabled 1 - Driver enabled                                    | 0 . . . 1                              |         1 | RW   |
|   260 | Velocity window linear stage  | A velocity window error occurs, if the difference between rampvelocity and actual velocity is bigger than this window.   | 0 . . . 2000000 [ µ m/s]               |    125000 | RWEX |
|   261 | Position window linear stage  | A position window error occurs, if the difference between ramp posi- tion andactual position is bigger than this window. | 0 . . . 2147483647 [ µ m]              |    500000 | RWEX |
|   262 | ABN encoder linear resolution | Linear resolution of the encoder per increment.                                                                          | 1 . . . 65535 [nm]                     |       500 | RWEX |
|   263 | Linear maximum speed          | Max. absolute velocity for velocity and positioning mode.                                                                | 0 . . . 2000000 [ µ m/s]               |    300000 | RWEX |
|   264 | Linear acceleration           | AccelerationparameterforROL,ROR, and the velocity ramp of MVP.                                                           | 0 . . . 300000000 [ µ m/s 2 ]          | 100000000 | RWEX |
|   265 | Linear target velocity        | The desired target velocity.                                                                                             | - 2147483648 . . . 2147483647 [ µ m/s] |         0 | RW   |
|   266 | Linear actual velocity        | The actual velocity of the drive.                                                                                        | - 2147483648 . . . 2147483647 [ µ m/s] |         0 | R    |
|   267 | Linear target position        | The target position of a currently ex- ecuted ramp.                                                                      | - 2147483648 . . . 2147483647 [ µ m]   |         0 | RW   |
|   268 | Linear actual position        | The actual position counter.                                                                                             | - 2147483648 . . . 2147483647 [ µ m]   |         0 | RW   |

<!-- image -->

Number

Axis Parameter

Description

Range [Units]

Table 16: All TMCM-1690 Axis 0 Parameters

|   269 | Linear ramp velocity        | The actual velocity of the velocity ramp used for positioning and veloc- ity mode.                                    | - 2147483648 . . . 2147483647 [ µ m/s]   |   0 | R    |
|-------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------|-----|------|
|   270 | Linear ramp position        | The actual position of the position ramp used for positioning mode.                                                   | - 2147483648 . . . 2147483647 [ µ m]     |   0 | RW   |
|   271 | Linear velocity offset      | The desired velocity offset.                                                                                          | - 2147483648 . . . 2147483647 [ µ m/s]   |   0 | RWEX |
|   272 | Linear switch over velocity | The velocity threshold where the low speed and standard PI parameters are switched.                                   | - 2147483648 . . . 2147483647 [ µ m/s]   |   0 | RW   |
|   273 | Catch-up velocity           | The additional velocity in the position mode which is used so actual posi- tion can catch up with the ramp po- sition | 0 . . . 1000000 [ µ m/s]                 |   0 | RW   |

Default

Access

<!-- image -->

## 5 Global Parameters

- Bank 0: Global con/uniFB01guration of the module.

The following sections describe all global parameters that can be used with the SGP, GGP, AGP, STGP, and RSGP commands. Global parameters are grouped into banks:

- Bank 2: TMCL user variables.

Global parameters in bank 0 con/uniFB01gure all settings that affect the overall behavior of a module. These are things like the serial address, RS485 baud rate, or CAN bit rate (where appropriate). Change these parameters per needs. The best and easiest way to do this is to use the appropriate functions of the TMCL-IDE. The parameters with numbers between 64 and 128 are automatically stored in the EEPROM.

## 5.1 Bank 0

## Note

- An SGP command on such a parameter always stores it permanently and no extra STGP command is needed.
- Some con/uniFB01gurations of the interface (for example, baud rates not supported by the PC) may lead to a situation in which the module cannot be reached any more. In such a case, refer to the TMCM-1690 Hardware Manual on how to reset all parameters to factory default settings.
- Take care when changing these parameters and use the appropriate functions of the TMCL-IDE to do it in an interactive way.
- Some settings (especially interface bit rate settings) do not take effect immediately. For those settings, power cycle the module after changing them to make the changes take effect.

There are different parameter access types, like read only or read/write. Table 17 shows the different parameter access types used in the global parameter tables.

Meaning of the Letters in the Access Column

| Access Type   | Command    | Description                           |
|---------------|------------|---------------------------------------|
| R             | GGP        | Parameter readable                    |
| W             | SGP, AGP   | Parameter writable                    |
| E             | STGP, RSGP | Parameter can be stored in the EEPROM |
| A             | SGP        | Automatically stored in the EEPROM    |

Table 17: Meaning of the Letters in the Access Column

<!-- image -->

## All Global Parameters of the TMCM-1690 Module in Bank 0

|   Number | Global Parameter    | Description                                                                                                                                                                    | Range [Units]    |   Default | Access   |
|----------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-----------|----------|
|       65 | Serial baud rate    | RS485/RS232 baud rate: 0 - 9600 [kBit/s] 1 - 14400 [kBit/s] 2 - 19200 [kBit/s] 3 - 28800 [kBit/s] 4 - 38400 [kBit/s] 5 - 57600 [kBit/s] 6 - 76800 [kBit/s] 7 - 115200 [kBit/s] | 0 . . . 7        |         7 | RW       |
|       66 | Serial address      | The module (target) address for RS485, RS232, and virtual COM port.                                                                                                            | 1 . . . 255      |         1 | RWX      |
|       69 | CAN bit rate        | CAN bit rate: 2 - 20 [kBit/s] 3 - 50 [kBit/s] 4 - 100 [kBit/s] 5 - 125 [kBit/s] 6 - 250 [kBit/s] 7 - 500 [kBit/s] 8 - 1000 [kBit/s]                                            | 2 . . . 8        |         8 | RW       |
|       70 | CAN send ID         | The CAN send ID of the module.                                                                                                                                                 | 0 . . . 255      |         2 | RWX      |
|       71 | CAN receive ID      | The CAN receive ID of the module.                                                                                                                                              | 0 . . . 255      |         1 | RWX      |
|       75 | Telegram pause time | Pause time before the reply through RS485/RS232 is sent.                                                                                                                       | 0 . . . 255 [ms] |         0 | RWX      |
|       76 | Serial host address | Host address used in the reply tele- grams sent back via RS485/RS232.                                                                                                          | 1 . . . 255      |         2 | RWX      |
|       77 | Auto start mode     | UseautomaticTMCLapplicationstart after power up. 0 - do not start TMCL application af- ter power up 1 - start TMCL application automati- cally after power up                  | 0 . . . 1        |         1 | RWX      |
|       78 | IO direction mask   | IO direction for selecting GPIOs as in- puts or outputs                                                                                                                        | 0 . . . 511      |         0 | RWX      |
|       79 | IO output mask      | Mask for digital IOs                                                                                                                                                           | 0 . . . 511      |         0 | RWX      |
|       80 | RS485_Dir/GPIO3     | The usage of the pin X202 of the cookie 0 - RS485-Direction 1 - GPIO3                                                                                                          | 0 . . . 1        |         0 | RW       |

<!-- image -->

Number

Global Parameter

Description

Range [Units]

Default

Access

Table 18: All Global Parameters of the TMCM-1690 Module in Bank 0

|   128 | Application status   | Actual TMCL application status. 0 - stop 1 - run 2 - step 3 - reset   | 0 . . . 3          |   0 | R   |
|-------|----------------------|-----------------------------------------------------------------------|--------------------|-----|-----|
|   130 | Program counter      | TMCL program counter.                                                 | 0 . . . 4294967295 |   0 | R   |
|   132 | Tick timer           | TMCL tick timer.                                                      | 0 . . . 2147483647 |   0 | RW  |

## 5.2 Bank 2

Bank 2 contains general-purpose, 32-bit variables for use in TMCL applications. They are located in the RAM, and the /uniFB01rst 56 variables can also be stored permanently in the EEPROM. After booting, their values are automatically restored to the RAM. Up to 256 user variables are available. See Table 17 for an explanation of the different parameter access types.

User Variables in Bank 2

| Number   | Global Parameter          | Description         | Range [Units]                | Access   |
|----------|---------------------------|---------------------|------------------------------|----------|
| 0...55   | user variables #0...#55   | TMCL user variables | -2147483648 . . . 2147483647 | RWE      |
| 56...255 | user variables #56...#255 | TMCL user variables | -2147483648 . . . 2147483647 | RW       |

Table 19: User Variables in Bank 2

<!-- image -->

## 6 Motor Regulation

The TMCM-1690 supports a current, velocity, and position PI regulation mode for motor control in different application areas. Figure 1 shows these regulation modes. Individual modes are explained in the following subsections.

## 6.1 Structure of Motor Control Regulation Modes

Figure 1: Motion Regulation

<!-- image -->

It can be seen that the target current signal is /uniFB01rst limited by maximum current. There is an option for having a /uniFB01lter (average or biquad) to this signal. This is followed by having an impact of P and I parameters to the signal and the target voltage (PWM) is fed to the motor. There is a feedback coming from the actual current forming a closed loop. In the same fashion, the velocity and position regulation are performed.

The current regulation mode uses a /uniFB01eld-oriented current (FOC) and /uniFB02ux regulator to adjust a desired motor current. The current loop is running typically at 20KHz and the PWM loop is variable and can be set using AP 18. The PWM frequency ranges from 20KHz to 120KHz. The target current can be set by axis parameter 77. The maximal target current is limited by axis parameter 16. The current regulation uses

<!-- image -->

## 6.2 Current Regulation

two basic parameters: the P and I parameters.

## 6.2.1 Structure of the Current Regulator

Figure 2: Current Regulation (See Parameter Descriptions in Table 20)

<!-- image -->

Current Regulation Parameters

Table 20: Current Regulation Parameters

| Parameter   | Description                        |
|-------------|------------------------------------|
| I ACTUAL    | Actual current (GAP 78)            |
| I TARGET    | Target current (SAP 77)            |
| I Max       | Max. target current (SAP 16)       |
| e SUM       | Error sum for integral calculation |
| P PARAM     | Current P parameter (SAP 83)       |
| I PARAM     | Current I parameter (SAP 84)       |

## 6.2.1.1 Parametrizing the Current Regulator Set

1. Set the P parameter and the I parameter to zero.

Parametrizing the current regulator set is preferably done with the PI tuning tool using auto tuning. Further details can be seen in the TMCL-IDE documentation under the section PI tuning. However, it can be done manually as well without the tool. To parameterize the current regulator set properly, do as follows:

2. Start the motor by using a low target /uniFB02ux (example, 1000mA).
4. Do the same with the current I parameter.
3. Modify the current P parameter. Start from a low value and go to a higher value, until the actual current nearly reaches 70% of the desired target current.

For all tests, set the motor current limitation to a realistic value, so that the power supply does not become overloaded during acceleration phases. If the power supply reaches current limitation, the unit may reset or undetermined regulation results may occur.

<!-- image -->

## 6.3 Velocity Regulation

Based on the current regulation, the motor velocity can be controlled by the velocity PI regulator. The velocity regulation runs in the velocity loop clocked at 2KHz.

## 6.3.1 Structure of the Velocity Regulator

Figure 3: Velocity Regulation (See Parameter Descriptions in Table 21)

<!-- image -->

Velocity Regulation Parameters

Table 21: Velocity Regulation Parameters

| Parameter   | Description                                |
|-------------|--------------------------------------------|
| V ACTUAL    | Actual motor velocity (GAP 93)             |
| V RAMPGEN   | Target velocity of ramp generator (SAP 92) |
| V Max       | Max. target velocity (SAP 94)              |
| e SUM       | Error sum for integral calculation         |
| P PARAM     | Velocity P parameter (SAP 99)              |
| I PARAM     | Velocity I parameter (SAP 100)             |
| I Max       | Max. target current (SAP 16)               |

## 6.3.1.1 Parametrizing the Velocity Regulator Set

1. Set the velocity I parameter to zero.

Parametrizing the velocity regulator set is preferably done with the PI tuning tool using auto tuning. Further details can be seen in the TMCL-IDE documentation under the section PI tuning. However, it can be done manually as well without the tool. To parameterize the velocity regulator set properly, do as follows:

2. Start the motor by using a medium target velocity (example, 2000 rpm).
2. (a) Start from a low value and go to a higher value, until the actual motor speed reaches 80% or 90% of the target velocity.
3. Modify the current P parameter.
4. (b) The lasting 10% or 20% speed difference can be reduced by slowly increasing the velocity I parameter.

<!-- image -->

## 6.4 Velocity Ramp Generator

## 6.5 Position Regulation

For a controlled startup of the motor's velocity, a velocity ramp generator can be activated/deactivated by axis parameter 133. The ramp generator uses the maximal allowed motor velocity (axis parameter 94), the acceleration (axis parameter 95), and the desired target velocity (axis parameter 92) to calculate a ramp generator velocity for the following velocity PI regulator.

Based on current and velocity regulators, the TMCM-1690 supports a positioning mode based on encoder (ABN or absolute) or hall sensor position. During positioning, the velocity ramp generator can be activated to enable motor positioning with controlled acceleration or it can be disabled to support motor positioning with maximum allowed speed.

The position regulation uses only one basic parameter: the P regulation parameter

## 6.5.1 Structure of the Position Regulator

Figure 4: Positioning Regulation (See Parameter Descriptions in Table 22)

<!-- image -->

Position Regulation Parameters

Table 22: Position Regulation Parameters

| Parameter   | Description                                |
|-------------|--------------------------------------------|
| n ACTUAL    | Actual motor position (GAP 106)            |
| n TARGET    | Target motor position (SAP 105)            |
| P PARAM     | Position P parameter (SAP 110)             |
| V MAX       | Max. allowed velocity (SAP 94)             |
| V TARGET    | New target velocity for the ramp generator |

## 6.5.1.1 Parametrizing the Position Regulation

1. Disable the velocity ramp generator and set position P parameter to zero.

Based on the velocity regulator, only the position regulator P has to be parameterized. Parametrizing the position regulator is preferably done with the PI tuning tool using auto tuning. Further details can be seen in the TMCL-IDE documentation under the section PI tuning. However, it can be done manually as well without the tool. To parameterize the position regulator, do as follows:

2. Choose a target position and increase the position P parameter until the motor reaches the target position approximately.

<!-- image -->

3. Switch on the velocity ramp generator. Based on the maximum positioning velocity (axis parameter 94) and the acceleration value (axis parameter 95), the ramp generator automatically calculates the slow down point, that is, the point at which the velocity has to be reduced to stop at the desired target position.

To minimize the time until this /uniFB02ag becomes set, the positioning tolerance MVP target reached distance can be chosen with axis parameter 107.

4. Reaching the target position is signaled by setting the position end /uniFB02ag.

Since the motor typically is assumed not to signal target reached when the target is just passed in a short moment at a high velocity, additionally, the maximum target reached velocity (MVP target reached velocity) can be de/uniFB01ned by axis parameter 108.

A value of zero for axis parameter 108 is the most universal, since it implies that the motor stands still at the target. But when a fast rising of the position end /uniFB02ag is desired, a higher value for the MVP target reached velocity parameter saves a lot of time. The best value should be tried out in the actual application.

## 6.5.2 Correlation of Axis Parameters 105 and 109, the Target Position and the Position End Flag

Figure 5: Positioning Algorithm

<!-- image -->

Depending on motor and mechanics, a low oscillation is normal. This can be reduced to at least +/-1 steps. Without oscillation the regulation cannot keep the position!

<!-- image -->

## 7 Ramps

- Linear ramp

TMCM-1690 supports two forms of ramps for motion control:

- Sine shaped ramp

A linear ramp or a trapezoidal ramp predicts the acceleration rates using a constant gradient. This constant gradient results in constant increase in the velocity. The acceleration and velocity are limited by the AP 95 (maximum acceleration) and 94 (maximum velocity) respectively. This ramp can be used to perform positioning tasks as well. There are some resonances in the system but for many systems they can be ignored. The linear ramp is selected by setting 0 to AP 11

## 7.1 Linear Ramp

## 7.2 Sine Shaped Ramp

In contrast to linear shaped ramps, the sine shape ramps follow a constant increase in the acceleration as it is one order higher. This results in a smoother response with far less resonances in the system. Sine shaped ramp is selected by setting 1 to AP 11. Figure 6 below gives an impression of how s shaped ramp looks like and how it is different than linear ramp. In the /uniFB01gure, desired position Pt is reached with the maximum acceleration and maximum velocity.

Figure 6: Linear Shaped Ramp (Left) S Shaped Ramp (Right)

<!-- image -->

It can be seen that s shaped ramps provide smoother operation as the acceleration is changed linearly compared to abrupt change of acceleration as in the linear ramp. This results from controling a /uniFB01nite amount of jerk at the time when the ramp is accelerating or deccelerating

After the ramp type is selected, the motor can be turned in both velocity and position mode. For turning the motor in velocity mode, the target velocity (AP 92) is set to the desired velocity. The ramp tries to reach its desired value with fastest acceleration limited by the parameter maximum acceleration (AP 95).

<!-- image -->

For turning the motor with position mode, the target position is set with the parameter AP 105. The ramp is calculated that it tries to reach its desired position with the fastest accelration (which is also limited by (AP 95)) and fastest velocity (limited by maximum velocity (AP 94)).

TMCM-1690 supports all three modes (torque, velocitye and position mode) with both linear and sine shaped ramps. The parameters such as maximum velocity, maximum acceleration, target velocity, and target position can be changed on the /uniFB02y, and the ramp is adjusted accordingly.

<!-- image -->

## 8 Module Speci/uniFB01c Functions

This module supports software /uniFB01lters for /uniFB01ve signals, as shown in Figure 7. Each signal can be /uniFB01ltered using either a biquad /uniFB01lter or an averaging /uniFB01lter. Of course, there is the option to not /uniFB01lter at all. The averaging /uniFB01lter averages over the last number of samples, in exponents of 2, up to 2 8 . The biquad /uniFB01lter, on the other hand, can be con/uniFB01gured as a lowpass /uniFB01lter of the 1st and 2nd orders, and also as resonanceanitresonance /uniFB01lter. As the equation determining the biquad /uniFB01lter is the same, only a different set of coe/uniFB03cients is required to alter its behaviour. See section 8.1.1 for more details.

Figure 7: Filter Blocks

<!-- image -->

The /uniFB01lter for the target position value is intended to smoothen the position input to the control structure. It is evaluated at every tenth PWM cycle. The /uniFB01lter for the target velocity value is intended to smoothen the velocity input from an external master or the position controller. It is also evaluated at every tenth PWM cycle. The /uniFB01lter for the target torque value is intended to smoothen the torque input from an external master or the velocity controller. It is also evaluated at every tenth PWM cycle. The /uniFB01lter for the actual current value is intended to smoothen the measured actual current value. It is evaluated at every PWM cycle. The /uniFB01lter for the actual velocity value is intended to smoothen the measured actual velocity value. It is evaluated at every tenth PWM cycle. It can be used as a low-pass /uniFB01lter for bandwidth limitation and noise suppression. Moreover, it can be designed to suppress a resonance or anti-resonance. Same statements are correct for all the /uniFB01lters.

There are a total of seven axis-paramters for each signal. To set the type of /uniFB01lter for target torque, for example, AP 148 can be set to values 0, 1, or 2. Where 0 disables the /uniFB01lter, 1 enables the averaging /uniFB01lter, and 2 enables the biquad /uniFB01lter. AP 149 sets the sample size for the averaging /uniFB01lter. APs 150 to 154

<!-- image -->

## 8.1 Filters

correspond to the biquad /uniFB01lter coe/uniFB03cients in Q3.29 format. A similar layout of /uniFB01lter settings is followed by all /uniFB01ve signals. See the axis-parameters table.

## 8.1.1 Biquad Filter (for Future Use)

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

The TMCM-1690 also supports a mechanical brake that can have a seperate power source. As the brake is operated by MOSFET on the baseboard, there is an upper limit to the current it can handle. Thus, provide the brake's electrical resistance and supply voltage to set the upper limit of PWM duty cycle.

<!-- image -->

## 8.2 Mechanical brake

For setup, /uniFB01rst provide the supply voltage (AP 194) and brake's resistance (195). Then provide the duty cycles that the brake has on on release (AP 189) and as hold (AP 190), while also providing release duration (AP 191). Setting AP 192 enables the brake to be used. Now, the brake can be released by setting AP 188. This causes the brake line to output a PWM signal with release duty cycle for the release duration. After the release duration, the PWM signal goes to holding duty cycle. See Figure 8.

Figure 8: Mechanical Brake Settings

<!-- image -->

A servo system feeds back energy to the power supply line during deceleration and load control. The energy can lead to a voltage rise on the power supply system if it is not dissipated. The voltage overshoot of a system without brake chopper depends on the motor deceleration time, kinetic energy, and the servo module buffer capacity. The brake chopper dissipates this energy from the system, and thus avoids system damage. TMCM-1690 supports two kinds of brake chopper

## 8.3 Brake Chopper

- PWMbraking
- Resistive/Shunt braking

## 8.3.1 PWMBraking

In PWM braking, the motor coils are used to perform the dissipation of the energy from the system. This is done by applying 50 % duty cycle on all three phases of the motor. For enabling PWM braking, AP 200 is set to 0. Additionally, the voltage limits (AP 198) is selected such that the supply voltage is larger than it. After that the brake is enabled by setting AP 197. This results in the extra regenerative energy produced due to slowing down dissipated through the coils of the motor.

## 8.3.2 Resistive/Shunt Braking

TMCM-1690 provides a continuous motor voltage monitoring as well as brake chopper output. The brake resistor is connected between the supply voltage and brake output. For setup, /uniFB01rst provide the supply voltage (AP202) and brake's resistance (AP 203). Shunt braking is selected by setting AP 200 to 1. The voltage limits and hysteresis are selected using the AP 198 and 199, respectively. Lastly, the brake is enabled by setting AP 197. For a full speed ramp stop, the brake resistor should be able to dissipate the complete kinetic energy fed back during deceleration phase. The following /uniFB01gure shows an example of brake chopper schematic

<!-- image -->

## 8.4 IIT

Figure 9: Brake Chopper Example Schematic

<!-- image -->

The IIT monitor provides a check on the energy consumption. The actual current is being monitored, and these values are being squared and summed up periodically over the con/uniFB01gured winding time using a 1ms cycle. If one of the limits gets exceeded during this time, the motor is stopped and the IIT error /uniFB02ag is set. The IIT error /uniFB02ag can be reset by writing any value to axis-parameter 124. There are two IIT windows (see Figure 10). The /uniFB01rst one directly uses the actual current, and the second one uses the actual current divided by √ 2 (less power over longer time). Axis-parameters 119 and 122 are limits for the two windows. Axis-parameters 120 and 123 show the actual integration sums.

<!-- image -->

Figure 10: IIt Monitor Windows

<!-- image -->

## 8.5 Lower Velocity PI

## 8.6 General-Purpose Inputs/Outputs

The TMCM-1690 supports having different PI parameters for lower velocities. This provides a better control and smoother operation. It is possible to have a stronger set of PI parameters for the lower velocities and a relatively weaker set for the higher velocities. It is good to have the set of both PI parameters and the velocity to perform the switch (to get the parameters, PI tuning tool can be used). The velocity at which the switch is performed can be set using the axis parameter 220 (default value is 0). After that, P and I parameters can be set using the axis parameters 221 and 222, respectively. These are the PI parameters for the velocities less than the switch over velocity. Parameters for higher velocities are set using the axis parameters 99 and 100 for P and I, respectively.

The TMCM-1690 offers versatile General-Purpose Input/Output (GPIO) capabilities, enabling GPIO pins (GPIO2 to GPIO7) to be con/uniFB01gured as either an input or an output. By default, all GPIOs are set as inputs with GPIO3 used as rs485-direction as explained in the section 8.7. To switch each GPIO state between input and output, the global parameter 78 is modi/uniFB01ed.

Global parameter 78 is a bit vector, where each bit determines if the corresponding digital line is an input or an output. A bit that is clear means input, and a bit that is set means output.

GPIO Pin

Bit Setting

Value

Table 23: GPIO Pin Con/uniFB01guration

| GPIO2   |   2 |   4 |
|---------|-----|-----|
| GPIO3   |   3 |   8 |
| GPIO4   |   4 |  16 |
| GPIO5   |   5 |  32 |
| GPIO6   |   6 |  64 |
| GPIO7   |   7 | 128 |

By adjusting these bits, it is possible to control the input/output con/uniFB01guration of each GPIO pin on the TMCM-1690. For example, setting global parameter 78 to 20 programs GPIO2 and GPIO4 as outputs and the rest of the GPIOs as inputs.

The TMCM-1690 supports both RS232 and RS485 communication protocols, allowing seamless switching between the two. By default, the communication mode is set to RS485, where GPIO3 serves as the RS485 direction pin and is unavailable for general-purpose use. To switch to RS232, adjust the global parameter 80 to 1 (0 for RS485). When RS232 is selected, GPIO3 reverts to a standard GPIO.

## 8.7 UART Communication

Note

A hard reset is necessary for the changes to take effect after modifying the communication mode.

<!-- image -->

## 9 TMCL Programming Techniques and Structure

The /uniFB01rst task in a TMCL program (like in other programs also) is to initialize all parameters where different values than the default values are necessary. For this purpose, SAP and SGP commands are used.

## 9.1 Initialization

## 9.2 Main Loop

There are exceptions to this, for example, when TMCL routines are called from a host in direct mode.

Embedded systems normally use a main loop that runs in/uniFB01nitely. This is also the case in a TMCL application running standalone. Normally, the auto start mode of the module should be turned on. After power up, the module then starts the TMCL program, which /uniFB01rst does all necessary initializations and then enters the main loop, which does all necessary tasks and never ends (only when the module is powered off or reset).

So, most (but not all) standalone TMCL programs look like this:

```
✴✴■♥✐/a116✐❛❧✐③❛/a116✐♦♥ ✷ ❙❆/a80 ✾✹✱ ✵✱ ✺✵✵✵ ✴✴❞❡❢✐♥❡ ♠❛①✐♠✉♠ ♣♦/a115 ✐ /a116 ✐ ♦ ♥ ✐ ♥ ❣ /a115 ♣ ❡ ❡ ❞ ❙❆/a80 ✾✺✱ ✵✱ ✶✵✵✵ ✴✴❞❡❢✐♥❡ ♠❛①✐♠✉♠ ❛❝❝❡❧❡/a114❛/a116✐♦♥ ✹ ▼❛✐♥▲♦♦♣✿ ✻ ✴✴❞♦ /a115 ♦ ♠ ❡ /a116 ❤ ✐ ♥ ❣ ✱ ✐♥ /a116 ❤ ✐ /a115 ❡①❛♠♣❧❡ ❥✉/a115 /a116 /a114 ✉ ♥ ♥ ✐ ♥ ❣ ❜❡/a116 ✇ ❡ ❡ ♥ /a116 ✇ ♦ ♣♦/a115 ✐ /a116 ✐ ♦ ♥ /a115 ▼❱/a80 ❆❇❙✱ ✵✱ ✺✵✵✵ ✽ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ▼❱/a80 ❆❇❙✱ ✵✱ ✵ ✶✵ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ❏❆ ▼❛✐♥▲♦♦♣ ✴✴❡♥❞ ♦❢ /a116 ❤ ❡ ♠❛✐♥ ❧♦♦♣ ❂❃ /a114 ✉ ♥ ✐♥❢✐♥✐/a116❡❧②
```

To make the program better readable and understandable, symbolic constants should be taken for allimportant numerical values used in the program. The TMCL-IDE provides an include /uniFB01le with symbolic names for all-important axis parameters and global parameters. Consider the following example:

## 9.3 Using Symbolic Constants

```
✶ ✴✴❉❡❢✐♥❡ /a115 ♦ ♠ ❡ ❝♦♥/a115/a116 ❛ ♥ /a116 /a115 ★✐♥❝❧✉❞❡ ❚▼❈▲/a80❛/a114❛♠ ✳ /a116♠❝ ✸ ▼❛①❙♣❡❡❞ ❂ ✺✵✵✵✵ ▼❛①❆❝❝ ❂ ✶✵✵✵✵ ✺ /a80 ♦ /a115 ✐ /a116 ✐ ♦ ♥ ✵ ❂ ✵ /a80 ♦ /a115 ✐ /a116 ✐ ♦ ♥ ✶ ❂ ✺✵✵✵✵✵ ✼ ✴✴■♥✐/a116✐❛❧✐③❛/a116✐♦♥ ✾ ❙❆/a80 ❆/a80 ▼ ❛ ① /a80 ♦ /a115 ✐ /a116 ✐ ♦ ♥ ✐ ♥ ❣ ❙ ♣ ❡ ❡ ❞ ✱ ▼♦/a116♦/a114 ✵ ✱ ▼❛①❙♣❡❡❞ ❙❆/a80 ❆/a80 ▼ ❛ ① ❆ ❝ ❝❡❧❡/a114❛/a116 ✐ ♦ ♥ ✱ ▼♦/a116♦/a114 ✵ ✱ ▼❛①❆❝❝ ✶✶ ▼❛✐♥▲♦♦♣✿ ✶✸ ▼❱/a80 ❆❇❙✱ ▼♦/a116♦/a114 ✵ ✱ /a80 ♦ /a115 ✐ /a116 ✐ ♦ ♥ ✶ ❲❆■❚ /a80 ❖ ❙ ✱ ▼♦/a116♦/a114 ✵ ✱ ✵ ✶✺ ▼❱/a80 ❆❇❙✱ ▼♦/a116♦/a114 ✵ ✱ /a80 ♦ /a115 ✐ /a116 ✐ ♦ ♥ ✵ ❲❆■❚ /a80 ❖ ❙ ✱ ▼♦/a116♦/a114 ✵ ✱ ✵
```

<!-- image -->

✶✼

## ❏❆ ▼❛✐♥▲♦♦♣

Using constants for other values makes it easier to change them when they are used more than once in a program. Change the de/uniFB01nition of the constant and do not change all occurrences of it in the program.

Go through the /uniFB01le TMCLParam.tmc provided with the TMCL-IDE. It contains symbolic constants that de/uniFB01ne all-important parameter numbers.

## 9.4 Using Variables

- SGP is used to set a variable to a constant value (example, during initialization phase).

The user variables can be used if variables are needed in the program. They can store temporary values. The commands SGP, GGP, and AGP as well as STGP and RSGP are used to work with user variables:

- GGP is used to read the contents of a user variable and to copy it to the accumulator register for further usage.
- The STGP command stores the contents of a user varaible in the EEPROM.
- AGP can be used to copy the contents of the accumulator register to a user variable, for example, to store the result of a calculation.
- The RSGP command copies the value stored in the EEPROM back to the user variable.

See the following example:

- Global parameter 85 controls if user variables are restored from the EEPROM automatically on startup (default setting) or not (user variables are then initialized with 0 instead).

```
✶ ▼②❱❛/a114✐❛❜❧❡ ❂ ✹✷ ✴✴❯/a115❡ ❛ /a115 ② ♠ ❜ ♦ ❧ ✐ ❝ ♥❛♠❡ ❢♦/a114 /a116 ❤ ❡ ✉/a115 ❡ /a114 ✈❛/a114 ✐ ❛ ❜ ❧ ❡ ✸ ✴✴✭❚❤✐/a115 ♠❛❦❡/a115 /a116 ❤ ❡ ♣/a114 ♦ ❣ /a114 ❛ ♠ ❜❡/a116 /a116 ❡ /a114 /a114 ❡ ❛ ❞ ❛ ❜ ❧ ❡ ❛♥❞ ✉♥❞❡/a114/a115 /a116 ❛ ♥ ❞ ❛ ❜ ❧ ❡ ✳✮ ✺ ❙●/a80 ▼②❱❛/a114✐❛❜❧❡ ✱ ✷✱ ✶✷✸✹ ✴✴■♥✐/a116✐❛❧✐③❡ /a116 ❤ ❡ ✈❛/a114 ✐ ❛ ❜ ❧❡ ✇✐/a116 ❤ /a116 ❤ ❡ ✈❛❧✉❡ ✶✷✸✹ ✳✳✳ ✼ ✳✳✳ ●●/a80 ▼②❱❛/a114✐❛❜❧❡ ✱ ✷ ✴✴❈♦♣② ❝♦♥/a116❡♥/a116 /a115 ♦❢ ✈❛/a114 ✐ ❛ ❜ ❧ ❡ /a116 ♦ ❛❝❝✉♠✉❧❛/a116♦/a114 /a114 ❡ ❣ ✐ /a115 /a116 ❡ /a114 ✾ ❈❆▲❈ ▼❯▲✱ ✷ ✴✴▼✉❧/a116✐♣❧② ❛❝❝✉♠✉❧❛/a116♦/a114 /a114 ❡ ❣ ✐ /a115 /a116 ❡ /a114 ✇✐/a116 ❤ /a116 ✇ ♦ ❆●/a80 ▼②❱❛/a114✐❛❜❧❡ ✱ ✷ ✴✴❙/a116♦/a114 ❡ ❝♦♥/a116❡♥/a116 /a115 ♦❢ ❛❝❝✉♠✉❧❛/a116♦/a114 /a114 ❡ ❣ ✐ /a115 /a116 ❡ /a114 /a116 ♦ ✈❛/a114 ✐ ❛ ❜ ❧❡ ✶✶ ✳✳✳ ✳✳✳
```

The host can also poll a variable using GGP in direct mode and see if it has been changed by the TMCL program.

Furthermore, these variables can provide a powerful way of communication between a TMCL program running on a module and a host. The host can change a variable by issuing a direct mode SGP command (remember that while a TMCL program is running, direct mode commands can still be executed, without interfering with the running program). If the TMCL program polls this variable regularly, it can react on such changes of its contents.

<!-- image -->

## 9.5 Using Subroutines

This mechanism can also be nested. From a subroutine called by a CSUB command, other subroutines can be called. In the current version of TMCL, eight levels of nested subroutine calls are allowed.

TheCSUBandRSUBcommandsprovideamechanismforusingsubroutines. TheCSUBcommandbranches to the given label. When an RSUB command is executed, the control goes back to the command that follows the CSUB command that called the subroutine.

## 9.6 Combining Direct Mode and Standalone Mode

Communication between a program running in standalone mode and a host can be done using the TMCL user variables. The host can then change the value of a user variable (using a direct mode SGP command) that is regularly polled by the TMCL program (example, in its main loop) and so the TMCL program can react on such changes. Vice versa, a TMCL program can change a user variable polled by the host (using a direct mode GGP command).

Direct mode and standalone mode can also be combined. When a TMCL program is being executed in standalone mode, direct mode commands are also processed (and they do not disturb the /uniFB02ow of the program running in standalone mode). So, it is also possible to query, example, the actual position of the motor in direct mode while a TMCL program is running.

A TMCL program can be started by the host using the run command in direct mode. This way, also a set of TMCL routines can be de/uniFB01ned that are called by a host. In this case, it is recommended to place JA commands at the beginning of the TMCL program that jump to the speci/uniFB01c routines. This assures that the entry addresses of the routines do not change even when the TMCL routines are changed (so, when changing the TMCL routines, the host program does not have to be changed).

## Example:

```
✴✴❏✉♠♣ ❝♦♠♠❛♥❞/a115 /a116 ♦ /a116 ❤ ❡ ❚▼❈▲ /a114 ♦ ✉ /a116 ✐ ♥ ❡ /a115 ✷ ❋✉♥❝✶✿ ❏❆ ❋✉♥❝✶❙/a116❛/a114/a116 ❋✉♥❝✷✿ ❏❆ ❋✉♥❝✷❙/a116❛/a114/a116 ✹ ❋✉♥❝✸✿ ❏❆ ❋✉♥❝✸❙/a116❛/a114/a116 ✻ ❋✉♥❝✶❙/a116❛/a114/a116 ✿ ▼❱/a80 ❆❇❙✱ ✵✱ ✶✵✵✵ ✽ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ▼❱/a80 ❆❇❙✱ ✵✱ ✵ ✶✵ ❲❆■❚ /a80 ❖ ❙ ✱ ✵✱ ✵ ❙❚❖/a80 ✶✷ ❋✉♥❝✷❙/a116❛/a114/a116 ✿ ✶✹ ❘❖▲ ✵✱ ✺✵✵ ❲❆■❚ ❚■❈❑❙ ✱ ✵✱ ✶✵✵ ✶✻ ▼❙❚ ✵ ❙❚❖/a80 ✶✽ ❋✉♥❝✸❙/a116❛/a114/a116 ✿ ✷✵ ❘❖❘ ✵✱ ✶✵✵✵ ❲❆■❚ ❚■❈❑❙ ✱ ✵✱ ✼✵✵ ✷✷ ▼❙❚ ✵ ❙❚❖/a80
```

<!-- image -->

This example provides three very simple TMCL routines. They can be called from a host by issuing a run command with address 0 to call the /uniFB01rst function, or a run command with address 1 to call the second function, or a run command with address 2 to call the third function. See the addresses of the TMCL labels (needed for the run commands) using the 'Generate symbol /uniFB01le function' of the TMCL-IDE.

For standalone operation, the module has to start the TMCL program in its memory automatically after power-on. To achieve this, switch on the Autostart option of the module. This is controlled by global parameter #77. There are different ways to switch on the Autostart option:

## 9.7 Make the TMCL Program Start Automatically

- Execute the command SGP 77, 0, 1 in direct mode (using the Direct Mode tool in the TMCL-IDE).
- Use the Autostart entry in the TMCL menu of the TMCL creator in the TMCL-IDE. Go to the Autostart entry in the TMCL menu and select "'On"'.
- Use the Global Parameters tool in the TMCL-IDE to set global parameter #77 to 1.

<!-- image -->

## 10 Figures Index

|    | . .                     |     |     | Ramp (Right) . . . . . . . . . . . . . . . . . . .                          | 121     |
|----|-------------------------|-----|-----|-----------------------------------------------------------------------------|---------|
| 2  | Current Regulation      | 117 | 7 8 | Filter Blocks                                                               |         |
| 3  | Velocity Regulation . . | 118 | 7 8 | . . . Mechanical Brake                                                      | 123 125 |
| 4  | Positioning Regulation  | 119 |     | . . . . . . Settings . .                                                    |         |
|    | Positioning Algorithm   | 120 | 9   | . . . . Brake Chopper Example Schematic IIt Monitor Windows . . . . . . . . | 126 126 |
| 5  |                         |     | 10  | .                                                                           |         |

Linear Shaped Ramp (Left) S Shaped

<!-- image -->

1

Motion Regulation

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

116

6

## 11 Tables Index

|       | . . . . .                                                                         |       |       | Column . . . . . . . . . . . . . . . . .                                 |         |
|-------|-----------------------------------------------------------------------------------|-------|-------|--------------------------------------------------------------------------|---------|
| 2 3   | TMCL Command Format . . . .                                                       | 10 11 |       |                                                                          | 95      |
| 4     | TMCL Reply Format . . . . . . TMCL Status Codes                                   |       | 16 17 | All TMCM-1690 Axis 0 Parameters Meaning of the Letters in the            | 112     |
|       |                                                                                   | 11 15 |       | . Access . . . . . . . . . . . . . . . . .                               | 113     |
| 5 6   | . . . . . . . . . Overview of All TMCL Commands Motion Commands . . . . . . . . . | 15    | 18    | Column                                                                   |         |
|       |                                                                                   |       |       | All Global Parameters of the TMCM- 1690 Module in Bank 0 . . . . . . . . |         |
| 7     | Parameter Commands . . . . . . . . .                                              | 16    | 19    | User Variables in Bank 2                                                 | 115 115 |
| 8     | Branch Commands . . . . . . .                                                     | 16 17 |       | . . Current Regulation                                                   |         |
| 9     | I/O Port Commands . . . . . . . Calculation                                       | 17    | 20 21 | . . . . . Parameters . . . .                                             | 117     |
| 10 11 | . Commands .                                                                      |       |       | Velocity Regulation Parameters . . Position Regulation Parameters        | 118     |
|       | . . . . . Interrupt Processing Commands . Interrupt Vectors . . . . . . . . .     | 18    | 22    | . . GPIO Pin Con/uniFB01guration . . . .                                 | 119 127 |
| 12    | . New TMCL                                                                        | 18    | 23 24 | . . . Firmware Revision . .                                              | 136     |
| 13    | Commands . . . . .                                                                | 20    |       | . . . . . . . .                                                          |         |
| 14    | . . TMCL Control Commands . . . . .                                               | 94    | 25    | Document Revision . . . . . . . . . .                                    | 136     |

Meaning of the Letters in the Access

<!-- image -->

1

Most important Axis Parameters .

.

.

7

15

## 12 Supplemental Directives

## 12.2 Copyright

## 12.1 Producer Information

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources.

## 12.3 Trademark Designations and Symbols

Redistribution of sources or derived formats (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete data sheet, user manual, and documentation of this product including associated application notes; and a reference to other available product-related documentation.

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by ADI Trinamic or by other manufacturers, whose products are used or referred to in combination with ADI Trinamic's products and ADI Trinamic's product documentation.

## 12.4 Target User

This TMCL ™ Firmware Manual is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

## 12.5 Disclaimer: Life Support Systems

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

## 12.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without ADI Trinamic's/Trinamic Motion Control GmbH &amp; Co. KG speci/uniFB01c written consent.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG conveys no patent, copyright, mask work right or other trademark right to this product. ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG assumes no liability for any patent and/or other trademark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.analog.com.

<!-- image -->

## 12.7 Collateral Documents and Tools

## 13 Revision History

## 13.1 Firmware Revision

Version

Description

Table 24: Firmware Revision

|   1.00 | 06/23   | First release                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   1.01 | 07/23   | New release: • Fixed on-the-/uniFB02y change of motion parameters • Fixed issue with the block hall                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   1.03 | 10/24   | Bug/uniFB01x and update release • Fixed overshoot in ramp position for linear ramp. • Added support for 12 bits axis parameters. • Added support for IC MU_150 absolute encoder. • Added functionality of switching between rs485-dir and GPIO3. • Added initialization routines for abn encoder for linear drive. • Increased resolution of abn encoder upto 1050000. • Added a catchup velocity AP which is used in position modefor actual position to jump up to ramp position. • Added linear stage velocity and position window APs. • Increased linear stage acceleration and velocity APs maximum limits. |

## 13.2 Document Revision

Version

Description

Table 25: Document Revision

|   0 | 02/24   | First release         |
|-----|---------|-----------------------|
|   1 | 04/25   | Firmware update v1.03 |

Date

Date

<!-- image -->