<!-- lastmod 2023-08-03 -->
## TMC4331A DATASHEET

TMC4331A Document Revision 1.01 · 2016-NOV-25 SHORT SPEC

The S-ramp and sixPoint™ ramp motion controller for stepper motors is optimized for high velocities, allowing on-the-fly changes. TMC4331A offers SPI and Step/Dir interfaces.

## Features

-  SPI Interfaces for µC with easy-to-use protocol.
-  SPI Interfaces for SPI motor stepper drivers.
-  Integrated ChopSync™ and dcStep™ support.
-  Internal ramp generator generating S-shaped ramps or sixPoint™ ramps supporting on-the-fly changes.
-  Controlled PWM output.
-  Reference switch handling.
-  Hardware and virtual stop switches.
-  Extensive Support of TMC stepper motor drivers.
-  Electronic gearing support.

Figure 1: Sample Image TMC4331A *Marking details are explained on page 172.

<!-- image -->

## Applications

-  Textile, sewing machines
-  CCTV, security
-  Printers, scanners
-  ATM, cash recycler
-  Office automation
-  POS
-  Factory automation
-  Lab automation

## Block Diagram: TMC4331A Interfaces &amp; Features

Figure 2: Block Diagram

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany  -  Terms  of  delivery  and  rights  to  technical  change reserved. Download newest version at: www.trinamic.com.

Read entire documentation; especially the Supplemental Directives in chapter 18 (page 173).

<!-- image -->

-  Pumps and valves
-  Heliostat controllers
-  CNC machines
-  Robotics

<!-- image -->

## Functional Scope of TMC4331A

TMC4331A is a miniaturized high-performance motion controller for stepper motor drivers, particularly designed for fast and jerk-limited motion profile applications with a wide range of ramp profiles. The S-shaped or sixPoint™ velocity profile, and open-loop features offer many configuration options to suit the user's specifications, as presented below:

S-Shaped Velocity Profile

## Reference Switch Support

Open-loop Operation with dcStep™ Feature

## Order Codes

Table 1: TMC4331A Order Codes

| Order code   | Description                                   | Size       |
|--------------|-----------------------------------------------|------------|
| TMC4331A-LA  | Motion controller with dcStep features, QFN32 | 4 x 4 mm 2 |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

S-shaped ramp profiles  are  jerk-free.  Seven  ramp  segments  form  the  S-shaped ramp that can be optimally adapted to suit the user's requirements. High torque with  high  velocities  can  be  reached  by  calibrating  the  bows  of  the  ramp,  as explained in this user manual.

Figure 3: S-shaped Velocity Profile

<!-- image -->

- i More  information  on  ramp  configurations  and  other  velocity  profiles,  e.g. sixPoint™ ramps, are provided in chapter 6 (Page 24).

A typical hardware setup for open-loop operation with enhanced modifications, by use of external stop switches with the TMC26x motor stepper driver is shown below. Home switches with different configurations are also supported.

Figure 4: Open-Loop Hardware Set-up with TMC26x supporting External Stop Switches

<!-- image -->

A typical hardware setup for dcStep operation with a TMC2130 stepper motor driver is shown in the diagram below. This feature is also available for TMC26x stepper motor drivers.

<!-- image -->

Figure 5: Hardware Set-up for Open-loop Operation with TMC2130

<!-- image -->

## TABLE OF CONTENTS

| TMC4331A DATASHEET.................................................................................................... 1            | TMC4331A DATASHEET.................................................................................................... 1            | TMC4331A DATASHEET.................................................................................................... 1   |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| SHORT SPEC.....................................................................................................................     | SHORT SPEC.....................................................................................................................     | 1                                                                                                                          |
| Features........................................................................................................................... | Features........................................................................................................................... | 1                                                                                                                          |
| Applications .....................................................................................................................  | Applications .....................................................................................................................  | 1                                                                                                                          |
| Block Diagram: TMC4331A Interfaces & Features ...........................................................                           | Block Diagram: TMC4331A Interfaces & Features ...........................................................                           | 1                                                                                                                          |
| Functional Scope of TMC4331A........................................................................................                | Functional Scope of TMC4331A........................................................................................                | 2                                                                                                                          |
| Order Codes .....................................................................................................................   | Order Codes .....................................................................................................................   | 2                                                                                                                          |
| TABLE OF CONTENTS .......................................................................................................           | TABLE OF CONTENTS .......................................................................................................           | 3                                                                                                                          |
| MAIN MANUAL.................................................................................................................        | MAIN MANUAL.................................................................................................................        | 8                                                                                                                          |
| 1. Pinning and Design-In Process Information..............................................................                          | 1. Pinning and Design-In Process Information..............................................................                          | 8                                                                                                                          |
|                                                                                                                                     | Pin Assignment: Top View....................................................................................................        | 8                                                                                                                          |
|                                                                                                                                     | Pin Description                                                                                                                     | .................................................................................................................... 9     |
|                                                                                                                                     | System                                                                                                                              | Overview............................................................................................................... 10 |
| 2.                                                                                                                                  | Application Circuits..................................................................................................              | 11                                                                                                                         |
|                                                                                                                                     | TMC4331A Standard Connection: VCC=3.3V                                                                                              | ....................................................................... 11                                                 |
|                                                                                                                                     | TMC4331A with TMC26x Stepper                                                                                                        | Connection....................................................................... 11                                       |
|                                                                                                                                     | TMC4331A with TMC248 Stepper                                                                                                        | Driver.............................................................................. 12                                    |
|                                                                                                                                     | TMC4331A with TMC2130 Stepper Driver                                                                                                | ............................................................................ 12                                            |
| 3. SPI Interfacing ........................................................................................................         | 3. SPI Interfacing ........................................................................................................         | 13                                                                                                                         |
|                                                                                                                                     | SPI Datagram Structure                                                                                                              | ..................................................................................................... 13                   |
|                                                                                                                                     | SPI Timing                                                                                                                          | Description....................................................................................................... 16      |
| 4. Input Filtering..........................................................................................................        | 4. Input Filtering..........................................................................................................        | 17                                                                                                                         |
|                                                                                                                                     | Input Filtering                                                                                                                     | Examples..................................................................................................... 19           |
| 5. Status Flags and Events...........................................................................................               | 5. Status Flags and Events...........................................................................................               | 20                                                                                                                         |
|                                                                                                                                     | Status Event Description                                                                                                            | .................................................................................................... 21                    |
|                                                                                                                                     | SPI Status Bit                                                                                                                      | Transfer....................................................................................................... 22         |
|                                                                                                                                     | Generation of                                                                                                                       | Interrupts..................................................................................................... 22         |
|                                                                                                                                     | Connection of Multiple INTR Pins ........................................................................................           | 23                                                                                                                         |
| 6. Ramp Configurations for different Motion Profiles ..................................................                             | 6. Ramp Configurations for different Motion Profiles ..................................................                             | 24                                                                                                                         |
|                                                                                                                                     | Step/Dir Output Configuration                                                                                                       | ............................................................................................ 25                            |
|                                                                                                                                     | Step/Dir Output Configuration Steps                                                                                                 | ................................................................................... 25                                     |
|                                                                                                                                     | STPOUT: Changing Polarity                                                                                                           | ............................................................................................... 25                         |
|                                                                                                                                     | Altering the Internal Motion                                                                                                        | Direction.................................................................................. 26                             |
|                                                                                                                                     | Configuration Details for Operation Modes and                                                                                       | Motion Profiles ............................................. 27                                                           |
|                                                                                                                                     | Starting Point: Choose Operation Mode...............................................................................                | 28                                                                                                                         |
|                                                                                                                                     | Stop during Motion                                                                                                                  | ............................................................................................................ 28            |
|                                                                                                                                     | Motion Profile Configuration ...............................................................................................        | 29                                                                                                                         |
|                                                                                                                                     | No Ramp Motion Profile......................................................................................................        | 30                                                                                                                         |
|                                                                                                                                     | Trapezoidal 4-Point Ramp without Break Point.....................................................................                   | 31                                                                                                                         |
|                                                                                                                                     | Trapezoidal Ramp with Break Point....................................................................................               | 31                                                                                                                         |

<!-- image -->

<!-- image -->

|                                                                                                                                                                                                                                 | Configuration of S-Shaped                                                                                                                                                                                                                              | Ramps....................................................................................... 33   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                 | Changing Ramp Parameters during S-shaped Motion or Switching to Positiong Mode.............                                                                                                                                                            | 34                                                                                                |
|                                                                                                                                                                                                                                 | Configuration of S-shaped Ramp with ASTART and DFINAL..................................................                                                                                                                                                | 34                                                                                                |
|                                                                                                                                                                                                                                 | S-shaped Mode and Positioning: Fast Motion.......................................................................                                                                                                                                      | 35                                                                                                |
|                                                                                                                                                                                                                                 | Start Velocity VSTART and Stop Velocity VSTOP ..................................................................                                                                                                                                       | 36                                                                                                |
|                                                                                                                                                                                                                                 | S-shaped Ramps with Start and Stop Velocity......................................................................                                                                                                                                      | 40                                                                                                |
|                                                                                                                                                                                                                                 | Combined Use of VSTART and ASTART for S-shaped Ramps ...............................................                                                                                                                                                   | 41                                                                                                |
|                                                                                                                                                                                                                                 | sixPoint Ramps..................................................................................................................                                                                                                                       | 42                                                                                                |
|                                                                                                                                                                                                                                 | U-Turn Behavior ................................................................................................................                                                                                                                       | 43                                                                                                |
|                                                                                                                                                                                                                                 | Continuous Velocity Motion Profile for S-shaped Ramps ......................................................                                                                                                                                           | 44                                                                                                |
|                                                                                                                                                                                                                                 | Internal Ramp Generator Units ...........................................................................................                                                                                                                              | 45                                                                                                |
|                                                                                                                                                                                                                                 | Clock Frequency ................................................................................................................                                                                                                                       | 45                                                                                                |
|                                                                                                                                                                                                                                 | Velocity Value Units ...........................................................................................................                                                                                                                       | 45                                                                                                |
|                                                                                                                                                                                                                                 | Acceleration Value Units.....................................................................................................                                                                                                                          | 45                                                                                                |
|                                                                                                                                                                                                                                 | Bow Value Units ................................................................................................................                                                                                                                       | 46                                                                                                |
|                                                                                                                                                                                                                                 | Overview of Minimum and Maximum Values:.......................................................................                                                                                                                                         | 46                                                                                                |
| 7. External                                                                                                                                                                                                                     | Step Control and Electronic Gearing..........................................................                                                                                                                                                          | 47                                                                                                |
|                                                                                                                                                                                                                                 | Description of Electronic Gearing ........................................................................................                                                                                                                             | 48                                                                                                |
|                                                                                                                                                                                                                                 | Indirect External Control ....................................................................................................                                                                                                                         | 48                                                                                                |
|                                                                                                                                                                                                                                 | Switching from External to Internal Control .........................................................................                                                                                                                                  | 49                                                                                                |
| 8.                                                                                                                                                                                                                              | Reference Switches .................................................................................................                                                                                                                                   | 50                                                                                                |
|                                                                                                                                                                                                                                 | Hardware Switch Support...................................................................................................                                                                                                                             | 51                                                                                                |
|                                                                                                                                                                                                                                 | Stop Slope Configuration for Hard or Linear Stop Slopes ......................................................                                                                                                                                         | 51                                                                                                |
|                                                                                                                                                                                                                                 | How Active Stops are indicated and reset to Free Motion .....................................................                                                                                                                                          | 52                                                                                                |
|                                                                                                                                                                                                                                 | How to latch Internal Position on Switch Events ..................................................................                                                                                                                                     | 52                                                                                                |
|                                                                                                                                                                                                                                 | Virtual Stop Switches .........................................................................................................                                                                                                                        | 53                                                                                                |
|                                                                                                                                                                                                                                 | Enabling Virtual Stop Switches............................................................................................                                                                                                                             | 53                                                                                                |
|                                                                                                                                                                                                                                 | Virtual Stop Slope Configuration .........................................................................................                                                                                                                             | 53                                                                                                |
|                                                                                                                                                                                                                                 | How Active Virtual Stops are indicated and reset to Free Motion...........................................                                                                                                                                             | 54                                                                                                |
|                                                                                                                                                                                                                                 | Home Reference Configuration ...........................................................................................                                                                                                                               | 55                                                                                                |
|                                                                                                                                                                                                                                 | Home Event Selection ........................................................................................................                                                                                                                          | 55                                                                                                |
|                                                                                                                                                                                                                                 | HOME_REF Monitoring .......................................................................................................                                                                                                                            | 56                                                                                                |
|                                                                                                                                                                                                                                 | Homing with STOPL or STOPR............................................................................................                                                                                                                                 | 56                                                                                                |
|                                                                                                                                                                                                                                 | Target Reached / Position Comparison................................................................................                                                                                                                                   | 57                                                                                                |
|                                                                                                                                                                                                                                 | Connecting several Target-reached Pins..............................................................................                                                                                                                                   | 57                                                                                                |
|                                                                                                                                                                                                                                 | Use of TARGET_REACHED Output ......................................................................................                                                                                                                                    | 58                                                                                                |
|                                                                                                                                                                                                                                 | Position Comparison of Internal Values ...............................................................................                                                                                                                                 | 58 59                                                                                             |
|                                                                                                                                                                                                                                 | Repetitive and Circular Motion ............................................................................................                                                                                                                            | 59                                                                                                |
|                                                                                                                                                                                                                                 | Repetitive Motion to XTARGET............................................................................................ Activating Circular Motion................................................................................................... | 59                                                                                                |
|                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                        | 61                                                                                                |
|                                                                                                                                                                                                                                 | Uneven or Noninteger Microsteps per Revolution.................................................................                                                                                                                                        | 60                                                                                                |
|                                                                                                                                                                                                                                 | Release of the Revolution Counter ......................................................................................                                                                                                                               |                                                                                                   |
|                                                                                                                                                                                                                                 | Blocking Zones ..................................................................................................................                                                                                                                      | 61                                                                                                |
| Circular Motion with and without Blocking Zone................................................................... 9. Ramp Timing and Synchronization .......................................................................... | Circular Motion with and without Blocking Zone................................................................... 9. Ramp Timing and Synchronization ..........................................................................                        | 63                                                                                                |
|                                                                                                                                                                                                                                 | Basic Synchronization Settings............................................................................................                                                                                                                             |                                                                                                   |
|                                                                                                                                                                                                                                 | Start Signal Trigger Selection .............................................................................................                                                                                                                           | 64 64                                                                                             |

<!-- image -->

<!-- image -->

|                                                                                                                            | User-specified Impact Configuration of Timing Procedure.....................................................                                                                                                                                          | 64                                                                               |
|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
|                                                                                                                            | Delay Definition between Trigger and internally generated Start Signal .................................                                                                                                                                              | 65                                                                               |
|                                                                                                                            | Active START Pin Output Configuration ...............................................................................                                                                                                                                 | 65                                                                               |
|                                                                                                                            | Ramp Timing Examples......................................................................................................                                                                                                                            | 66                                                                               |
|                                                                                                                            | Shadow Register Settings...................................................................................................                                                                                                                           | 69                                                                               |
|                                                                                                                            | Shadow Register Configuration Options...............................................................................                                                                                                                                  | 70                                                                               |
|                                                                                                                            | Delayed Shadow Transfer...................................................................................................                                                                                                                            | 74                                                                               |
|                                                                                                                            | Pipelining Internal Parameters............................................................................................                                                                                                                            | 75                                                                               |
|                                                                                                                            | Configuration and Activation of Target Pipeline....................................................................                                                                                                                                   | 75                                                                               |
|                                                                                                                            | Using the Pipeline for different internal Registers.................................................................                                                                                                                                  | 76                                                                               |
|                                                                                                                            | Pipeline Mapping Overview.................................................................................................                                                                                                                            | 77                                                                               |
|                                                                                                                            | Cyclic Pipelining.................................................................................................................                                                                                                                    | 78                                                                               |
|                                                                                                                            | Pipeline Examples..............................................................................................................                                                                                                                       | 78                                                                               |
|                                                                                                                            | Masterless Synchronization of Several Motion Controllers via START Pin................................                                                                                                                                                | 80                                                                               |
| 10. Serial Data Output ................................................................................................... | 10. Serial Data Output ...................................................................................................                                                                                                                            | 81                                                                               |
|                                                                                                                            | Getting Started with TMC Motor Drivers ..............................................................................                                                                                                                                 | 82                                                                               |
|                                                                                                                            | Sine Wave Lookup Tables...................................................................................................                                                                                                                            | 83                                                                               |
|                                                                                                                            | Actual Current Values Output .............................................................................................                                                                                                                            | 84                                                                               |
|                                                                                                                            | How to Program the Internal MSLUT...................................................................................                                                                                                                                  | 84                                                                               |
|                                                                                                                            | Setup of MSLUT Segments .................................................................................................                                                                                                                             | 85                                                                               |
|                                                                                                                            | Current Waves Start Values................................................................................................                                                                                                                            | 86                                                                               |
|                                                                                                                            | Default MSLUT ..................................................................................................................                                                                                                                      | 86                                                                               |
|                                                                                                                            | Explanatory Notes for Base Wave Inclinations .....................................................................                                                                                                                                    | 87                                                                               |
|                                                                                                                            | SPI Output Interface Configuration Parameters ...................................................................                                                                                                                                     | 89                                                                               |
|                                                                                                                            | Pins dedicated to SPI Output Communication ......................................................................                                                                                                                                     | 89                                                                               |
|                                                                                                                            | Setup of SPI Output Timing Configuration ...........................................................................                                                                                                                                  | 89                                                                               |
|                                                                                                                            | Current Diagrams ..............................................................................................................                                                                                                                       | 90                                                                               |
|                                                                                                                            | Change of Microstep Resolution..........................................................................................                                                                                                                              | 90                                                                               |
|                                                                                                                            | Cover Datagrams Communication between µC and Driver ....................................................                                                                                                                                              | 90                                                                               |
|                                                                                                                            | Sending Cover Datagrams..................................................................................................                                                                                                                             | 91                                                                               |
|                                                                                                                            | Configuring Automatic Generation of Cover Datagrams ........................................................                                                                                                                                          | 92                                                                               |
|                                                                                                                            | Overview: TMC Motor Driver Connections............................................................................                                                                                                                                    | 93                                                                               |
|                                                                                                                            | TMC Stepper Motor Driver Settings .....................................................................................                                                                                                                               | 93                                                                               |
|                                                                                                                            | TMC Motor Driver Response Datagram and Status Bits.........................................................                                                                                                                                           | 94                                                                               |
|                                                                                                                            | Events and Interrupts based on Motor Driver Status Bits......................................................                                                                                                                                         | 94                                                                               |
|                                                                                                                            | Stall Detection and Stop-on-Stall.........................................................................................                                                                                                                            | 95                                                                               |
|                                                                                                                            | TMC23x, TMC24x Stepper Motor Driver...............................................................................                                                                                                                                    | 96                                                                               |
|                                                                                                                            | TMC23x Setup...................................................................................................................                                                                                                                       | 96                                                                               |
|                                                                                                                            | TMC24x Setup...................................................................................................................                                                                                                                       | 96                                                                               |
|                                                                                                                            | TMC23x/24x Status Bits .....................................................................................................                                                                                                                          | 97                                                                               |
|                                                                                                                            | Automatic Fullstep Switchover for TMC23x/24x....................................................................                                                                                                                                      | 97                                                                               |
|                                                                                                                            | Mixed Decay Configuration for TMC23x/24x ........................................................................                                                                                                                                     | 98                                                                               |
|                                                                                                                            | ChopSync Configuration for TMC23x/24x Stepper Drivers.....................................................                                                                                                                                            | 98                                                                               |
|                                                                                                                            | Doubling ChopSync Frequency during                                                                                                                                                                                                                    | Standstill................................................................... 98 |
|                                                                                                                            | Using TMC24x stallGuard Characteristics .............................................................................                                                                                                                                 | 99                                                                               |
|                                                                                                                            | TMC26x Stepper Motor Driver............................................................................................100 TMC26x Setup (SPI mode) ...............................................................................................100 |                                                                                  |
|                                                                                                                            | TMC26x Setup (S/D mode)................................................................................................100                                                                                                                            |                                                                                  |
|                                                                                                                            | Sending Cover Datagrams to TMC26x ................................................................................101                                                                                                                                 |                                                                                  |

<!-- image -->

<!-- image -->

|                                                                                                                                | Automatic Continuous Streaming of Cover Datagrams for TMC26x.......................................101                              |                                                                                                                                |
|--------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                | TMC26x SPI Mode: Automatic Fullstep Switchover .............................................................102                     |                                                                                                                                |
|                                                                                                                                | TMC26x S/D Mode: Automatic Fullstep Switchover..............................................................102                     |                                                                                                                                |
|                                                                                                                                | TMC 26x S/D Mode: Change of Current Scaling Parameter ..................................................103                         |                                                                                                                                |
|                                                                                                                                | TMC26x Status Bits...........................................................................................................103    |                                                                                                                                |
|                                                                                                                                | TMC26x Status Response                                                                                                              | ..................................................................................................103                          |
|                                                                                                                                | TMC389 Stepper Motor Driver                                                                                                         | ...........................................................................................104                                 |
|                                                                                                                                | TMC2130 Stepper Motor Driver..........................................................................................105           |                                                                                                                                |
|                                                                                                                                | Set-up TMC2130 Support (SPI Mode).................................................................................105               |                                                                                                                                |
|                                                                                                                                | Set-up TMC2130 Support (S/D Mode)                                                                                                   | ................................................................................105                                            |
|                                                                                                                                | Sending Cover Datagrams to TMC2130 ..............................................................................106                |                                                                                                                                |
|                                                                                                                                | Automatic Continuous Streaming of Cover Datagrams for TMC2130.....................................106                               |                                                                                                                                |
|                                                                                                                                | TMC2130 SPI Mode: Automatic Fullstep Switchover                                                                                     | ............................................................107                                                                |
|                                                                                                                                | TMC2130 S/D Mode: Automatic Fullstep Switchover............................................................107                      |                                                                                                                                |
|                                                                                                                                | TMC 2130 S/D Mode: Changing current Scaling Parameter..................................................107                          |                                                                                                                                |
|                                                                                                                                | TMC2130 Status Response ................................................................................................108         |                                                                                                                                |
|                                                                                                                                | Connecting Non-TMC Stepper Motor Driver or SPI-DAC at SPI output interface                                                          | ....................109                                                                                                        |
|                                                                                                                                | Connecting a SPI-DAC.......................................................................................................110      |                                                                                                                                |
|                                                                                                                                | DAC Data Transfer............................................................................................................110    |                                                                                                                                |
|                                                                                                                                | Changing SPI Output Protocol for SPI-DAC.........................................................................110                |                                                                                                                                |
|                                                                                                                                | DAC Address Values..........................................................................................................111     |                                                                                                                                |
|                                                                                                                                | DAC Data Values ..............................................................................................................111   |                                                                                                                                |
| 11. Current Scaling ...................................................................................................... 113 | 11. Current Scaling ...................................................................................................... 113      | 11. Current Scaling ...................................................................................................... 113 |
|                                                                                                                                | Hold Current Scaling                                                                                                                | .........................................................................................................114                   |
|                                                                                                                                | Freewheeling....................................................................................................................114 |                                                                                                                                |
|                                                                                                                                | Current Scaling during Motion                                                                                                       | ...........................................................................................115                                 |
|                                                                                                                                | Drive Scaling                                                                                                                       | ....................................................................................................................115        |
|                                                                                                                                | Alternative Drive Scaling ...................................................................................................115    |                                                                                                                                |
|                                                                                                                                | Boost Current                                                                                                                       | ...................................................................................................................116         |
|                                                                                                                                | Scale Mode Transition Process Control ...............................................................................117            |                                                                                                                                |
|                                                                                                                                | Current Scaling Examples..................................................................................................119       |                                                                                                                                |
| 12. Controlled PWMOutput......................................................................................... 121          | 12. Controlled PWMOutput......................................................................................... 121               | 12. Controlled PWMOutput......................................................................................... 121          |
|                                                                                                                                | PWM Output Generation and Scaling Possibilities                                                                                     | ................................................................122                                                            |
|                                                                                                                                | PWM Scale Example..........................................................................................................123      |                                                                                                                                |
|                                                                                                                                | PWM Output Generation for TMC23x/24x...........................................................................124                  |                                                                                                                                |
|                                                                                                                                | Switching between SPI and Voltage PWM Modes                                                                                         | ................................................................125                                                            |
| 13. dcStep Support for TMC26x or TMC2130............................................................... 126                    | 13. dcStep Support for TMC26x or TMC2130............................................................... 126                         | 13. dcStep Support for TMC26x or TMC2130............................................................... 126                    |
|                                                                                                                                | Enabling dcStep for TMC26x Stepper Motor Drivers                                                                                    | ............................................................128                                                                |
|                                                                                                                                | Setup: Minimum dcStep Velocity........................................................................................129           |                                                                                                                                |
|                                                                                                                                | Enabling dcStep for TMC2130 Stepper Motor Drivers                                                                                   | ..........................................................131                                                                  |
| 14. Reset and Clock Gating.......................................................................................... 132       | 14. Reset and Clock Gating.......................................................................................... 132            | 14. Reset and Clock Gating.......................................................................................... 132       |
|                                                                                                                                | Power-On-Reset                                                                                                                      | ...............................................................................................................132             |
|                                                                                                                                | Manual Software Reset                                                                                                               | .....................................................................................................132                       |
|                                                                                                                                | Reset Indication ...............................................................................................................132 |                                                                                                                                |
|                                                                                                                                | Activating Clock Gating manually .......................................................................................133         |                                                                                                                                |
|                                                                                                                                | Clock Gating Wake-up.......................................................................................................133      |                                                                                                                                |
|                                                                                                                                | Automatic Clock Gating Procedure .....................................................................................134           |                                                                                                                                |

<!-- image -->

<!-- image -->

| 15. Complete Register and Switches List.....................................................................                                                                                                                            | 15. Complete Register and Switches List.....................................................................                                                                                                                                                | 135                                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                         | General Configuration Register GENERAL_CONF 0x00.........................................................135                                                                                                                                                |                                                                                                                            |
|                                                                                                                                                                                                                                         | Reference Switch Configuration Register REFERENCE_CONF 0x01 .......................................138                                                                                                                                                      |                                                                                                                            |
|                                                                                                                                                                                                                                         | Start Switch Configuration Register START_CONF 0x02.......................................................141                                                                                                                                               |                                                                                                                            |
|                                                                                                                                                                                                                                         | Input Filter Configuration Register INPUT_FILT_CONF 0x03 ................................................143                                                                                                                                                |                                                                                                                            |
|                                                                                                                                                                                                                                         | SPI Output Configuration Register SPI_OUT_CONF 0x04.....................................................144                                                                                                                                                 |                                                                                                                            |
|                                                                                                                                                                                                                                         | Current Scaling Configuration Register CURRENT_CONF 0x05 .............................................147                                                                                                                                                   |                                                                                                                            |
|                                                                                                                                                                                                                                         | Current Scale Values Register SCALE_VALUES 0x06............................................................148                                                                                                                                              |                                                                                                                            |
|                                                                                                                                                                                                                                         | Various Scaling Configuration Registers..............................................................................148                                                                                                                                    |                                                                                                                            |
|                                                                                                                                                                                                                                         | Motor Driver Settings Register STEP_CONF 0x0A................................................................149                                                                                                                                            |                                                                                                                            |
|                                                                                                                                                                                                                                         | Event Selection Registers 0x0B..0X0D ................................................................................150                                                                                                                                    |                                                                                                                            |
|                                                                                                                                                                                                                                         | Status Event Register (0x0E).............................................................................................151                                                                                                                                |                                                                                                                            |
|                                                                                                                                                                                                                                         | Status Flag Register (0x0F) ...............................................................................................152 Various Configuration Registers .........................................................................................153 |                                                                                                                            |
|                                                                                                                                                                                                                                         | PWM Configuration Registers.............................................................................................154                                                                                                                                 |                                                                                                                            |
|                                                                                                                                                                                                                                         | External Clock Frequency Register .....................................................................................159                                                                                                                                  |                                                                                                                            |
|                                                                                                                                                                                                                                         | Target and Compare Registers ..........................................................................................159                                                                                                                                  |                                                                                                                            |
|                                                                                                                                                                                                                                         | Shadow                                                                                                                                                                                                                                                      |                                                                                                                            |
|                                                                                                                                                                                                                                         | Register...............................................................................................................160                                                                                                                                  |                                                                                                                            |
|                                                                                                                                                                                                                                         | Reset and Clock Gating Register ........................................................................................161                                                                                                                                 |                                                                                                                            |
|                                                                                                                                                                                                                                         | dcStep Registers...............................................................................................................161                                                                                                                          |                                                                                                                            |
|                                                                                                                                                                                                                                         | Transfer Registers ............................................................................................................162                                                                                                                          |                                                                                                                            |
|                                                                                                                                                                                                                                         | SinLUT Registers ..............................................................................................................163                                                                                                                          |                                                                                                                            |
|                                                                                                                                                                                                                                         | SPI-DAC Configuration Registers........................................................................................164 TMC Version Register........................................................................................................164  |                                                                                                                            |
| 16. Absolute Maximum Ratings ................................................................................... 165                                                                                                                    | 16. Absolute Maximum Ratings ................................................................................... 165                                                                                                                                        | 16. Absolute Maximum Ratings ................................................................................... 165       |
| 17. Electrical Characteristics........................................................................................ 166                                                                                                              | 17. Electrical Characteristics........................................................................................ 166                                                                                                                                  | 17. Electrical Characteristics........................................................................................ 166 |
|                                                                                                                                                                                                                                         | Power Dissipation .............................................................................................................166                                                                                                                          |                                                                                                                            |
|                                                                                                                                                                                                                                         | General IO Timing Parameters...........................................................................................167                                                                                                                                  |                                                                                                                            |
|                                                                                                                                                                                                                                         | Layout Examples ..............................................................................................................168                                                                                                                           |                                                                                                                            |
|                                                                                                                                                                                                                                         | Internal Cirucit Diagram for Layout Example.......................................................................168                                                                                                                                       |                                                                                                                            |
|                                                                                                                                                                                                                                         | Top Layer: Assembly Side .................................................................................................169                                                                                                                               |                                                                                                                            |
|                                                                                                                                                                                                                                         | Inner Layer (GND)............................................................................................................169                                                                                                                            |                                                                                                                            |
|                                                                                                                                                                                                                                         | Inner Layer (Supply VS)....................................................................................................170                                                                                                                              |                                                                                                                            |
|                                                                                                                                                                                                                                         | Package Dimensions .........................................................................................................171                                                                                                                             |                                                                                                                            |
|                                                                                                                                                                                                                                         | Package Material Information ............................................................................................172                                                                                                                                |                                                                                                                            |
|                                                                                                                                                                                                                                         | Marking Details provided on Single Chip.............................................................................172                                                                                                                                     |                                                                                                                            |
| APPENDICES................................................................................................................                                                                                                              | APPENDICES................................................................................................................                                                                                                                                  | 173                                                                                                                        |
| Directives........................................................................................                                                                                                                                      | Directives........................................................................................                                                                                                                                                          | 173                                                                                                                        |
| 18. Supplemental ESD-DEVICE INSTRUCTIONS...........................................................................................................173                                                                                  | 18. Supplemental ESD-DEVICE INSTRUCTIONS...........................................................................................................173                                                                                                      |                                                                                                                            |
| 19. Tables Index ..........................................................................................................                                                                                                             | 19. Tables Index ..........................................................................................................                                                                                                                                 | 175                                                                                                                        |
| 20. Figures Index......................................................................................................... History..................................................................................................... | 20. Figures Index......................................................................................................... History.....................................................................................................                     |                                                                                                                            |
| 21. Revision                                                                                                                                                                                                                            | 21. Revision                                                                                                                                                                                                                                                | 179                                                                                                                        |

<!-- image -->

<!-- image -->

## MAIN MANUAL

## 1. Pinning and Design-In Process Information

In this chapter you are provided with a list of all pin names and a functional description of each.

## Pin Assignment: Top View

Figure 6: Package Outline: Pin Assignments Top View

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Pin Description

| Pin Names and Descriptions   | Pin Names and Descriptions   | Pin Names and Descriptions   | Pin Names and Descriptions                                                                                                  |
|------------------------------|------------------------------|------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Pin                          | Number                       | Type                         | Function                                                                                                                    |
| Supply Pins                  | Supply Pins                  | Supply Pins                  | Supply Pins                                                                                                                 |
| GND                          | 5, 12, 19, 30                | GND                          | Digital ground pin for IOs and digital circuitry.                                                                           |
| VCC                          | 4, 20, 31                    | VCC                          | Digital power supply for IOs and digital circuitry (3.3V… 5V).                                                              |
| VDD1V8                       | 13, 29                       | VDD                          | Connection of internal generated core voltage of 1.8V.                                                                      |
| CLK_EXT                      | 32                           | I                            | Clock input to provide a clock with the frequency fCLK for all internal operations.                                         |
| TEST_MODE                    | 28                           | I                            | Test mode input. Tie to low for normal operation.                                                                           |
| Interface Pins for µC        | Interface Pins for µC        | Interface Pins for µC        | Interface Pins for µC                                                                                                       |
| NSCSIN                       | 1                            | I                            | Low active chip selects input of SPI interface to µC.                                                                       |
| SCKIN                        | 2                            | I                            | Serial clock for SPI interface to µC.                                                                                       |
| SDIIN                        | 3                            | I                            | Serial data input of SPI interface to µC.                                                                                   |
| SDOIN                        | 6                            | O                            | Serial data output of SPI interface to µC (Z if NSCSIN=1).                                                                  |
| INTR                         | 27                           | O                            | Interrupt output, programmable PD/PU for wired-and/or.                                                                      |
| TARGET_REACHED               | 25                           | O                            | Target reached output, programmable PD/PU for wired-and/or.                                                                 |
| Reference Pins               | Reference Pins               | Reference Pins               | Reference Pins                                                                                                              |
| STOPL                        | 9                            | I (PD)                       | Left stop switch. External signal to stop a ramp. If not connected, internal pull-down resistor is active.                  |
| HOME_REF                     | 10                           | I (PD)                       | Home reference signal input. External signal for reference search. If not connected, internal pull-down resistor is active. |
| STOPR                        | 11                           | I (PD)                       | Right stop switch. External signal to stop a ramp. If not connected, internal pull-down resistor is active.                 |
| STPIN                        | 14                           | I (PD)                       | Step input for external step control. If not connected, internal pull-down resistor is active.                              |
| DIRIN                        | 15                           | I (PD)                       | Direction input for external step control. If not connected, internal pull-down resistor is active.                         |
| START                        | 16                           | IO                           | Start signal input/output.                                                                                                  |
| S/D Output Pins              | S/D Output Pins              | S/D Output Pins              | S/D Output Pins                                                                                                             |
| STPOUT PWMA DACA             | 18                           | O                            | Step output. First PWM signal (Sine). First DAC output signal (Sine).                                                       |
| DIROUT PWMB DACB             | 17                           | O                            | Direction output. Second PWM signal (Cosine). Second DAC output signal (Cosine).                                            |
|   Continued on next page!  |   Continued on next page!  |   Continued on next page!  |   Continued on next page!                                                                                                 |

<!-- image -->

<!-- image -->

Table 2: Pin Names and Descriptions

| Pin Names and Descriptions               | Pin Names and Descriptions               | Pin Names and Descriptions               | Pin Names and Descriptions                                                                                                                                |
|------------------------------------------|------------------------------------------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pin                                      | Number                                   | Type                                     | Function                                                                                                                                                  |
| Interface Pins for Stepper Motor Drivers | Interface Pins for Stepper Motor Drivers | Interface Pins for Stepper Motor Drivers | Interface Pins for Stepper Motor Drivers                                                                                                                  |
| NSCSDRV PWMB                             | 24                                       | O                                        | Low active chip selects output of SPI interface to motor driver. Second PWM signal (Cosine) to connect with PHB (TMC23x/24x).                             |
| SCKDRV MDBN                              | 23                                       | O                                        | Serial clock output of SPI interface to motor driver. MDBN output signal for MDBN pin of TMC23x/24x.                                                      |
| SDODRV PWMA                              | 21                                       | O                                        | Serial data output of SPI interface to motor driver. First PWM signal (Sine) to connect with PHA (TMC23x/24x).                                            |
| SDIDRV ERR                               | 22                                       | I (PD)                                   | Serial data input of SPI interface to motor driver. Error input signal to ERR pin of TMC23x/24x. If not connected, internal pull-down resistor is active. |
| MP1                                      | 7                                        | I (PD)                                   | DC_IN as external dcStep input control signal. If not connected, internal pull-down resistor is active.                                                   |
| MP2                                      | 8                                        | IO                                       | DCSTEP_ENABLE as dcStep output control signal. SPE_OUT as output signal, connect to SPE pin of TMC23x/24x.                                                |
| STDBY_CLK                                | 26                                       | O                                        | StandBy signal or internal CLK output or ChopSync output.                                                                                                 |

## System Overview

Figure 7: System Overview

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 2. Application Circuits

In this chapter application circuit examples are provided that show how external components can be connected.

- TMC4331A Standard Connection: VCC=3.3V
- TMC4331A with TMC26x Stepper Connection

Figure 8: TMC4331A Connection: VCC=3.3V

<!-- image -->

Figure 9: TMC4331A with TMC26x Stepper Driver in SPI Mode or S/D Mode

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

- TMC4331A with TMC248 Stepper Driver
- TMC4331A with TMC2130 Stepper Driver

Figure 10: TMC4331A with TMC248 Stepper Driver in SPI Mode

<!-- image -->

Figure 11: TMC4331A with TMC2130 Stepper Driver in SPI Mode or S/D Mode

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 3. SPI Interfacing

TMC4331A uses 40-bit SPI datagrams for communication with a microcontroller. The bit-serial interface is synchronous to a bus clock. For every bit sent from the bus master to the bus slave, another  bit  is  sent  simultaneously  from  the  slave  to  the  master.  In  the  following  chapter information  is  provided  about  the  SPI  control  interface,  SPI  datagram  structure  and  SPI transaction process.

Table 3: SPI Input Control Interface Pins

| SPI Input Control Interface Pins   | SPI Input Control Interface Pins   | SPI Input Control Interface Pins             |
|------------------------------------|------------------------------------|----------------------------------------------|
| Pin Name                           | Type                               | Remarks                                      |
| NSCSIN                             | Input                              | Chip Select of SPI-µC interface (low active) |
| SCKIN                              | Input                              | Serial clock of SPI-µC interface             |
| SDIIN                              | Input                              | Serial data input of SPI-µC interface        |
| SDOIN                              | Output                             | Serial data output of SPI-µC interface       |

-  Microcontrollers that are equipped with hardware SPI are typically able to communicate using integer multiples of 8 bit.
-  The NSCSIN line of the TMC4331A has to stay active (low) for the complete duration of the datagram transmission.
-  Each datagram that is sent to TMC4331A is composed of an address byte followed by four data bytes. This allows direct 32-bit data word communication with the register set of TMC4331A. Each register is accessed via 32 data bits; even if it uses less than 32 data bits.
- i Each register is specified by a one-byte address:
- For read access the most significant bit of the address byte is 0.
- For write access the most significant bit of the address byte is 1.

## SPI Datagram Structure

## NOTE:

-  Some registers are write only registers. Most registers can be read also; and there are also some read only registers.

| TMC4331A SPI Datagram Structure                                   | TMC4331A SPI Datagram Structure                                   | TMC4331A SPI Datagram Structure   | TMC4331A SPI Datagram Structure   | TMC4331A SPI Datagram Structure   | TMC4331A SPI Datagram Structure   | TMC4331A SPI Datagram Structure   | TMC4331A SPI Datagram Structure   | TMC4331A SPI Datagram Structure   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| MSB (transmitted first)                                           | MSB (transmitted first)                                           | MSB (transmitted first)           | 40 bits                           | 40 bits                           | 40 bits                           | LSB (transmitted last)            | LSB (transmitted last)            | LSB (transmitted last)            |
| 39                                                                | 39                                                                | 39                                | ...                               | ...                               | ...                               |                                   |                                   |                                   |
|  8-bit address  8-bit SPI status                                |  8-bit address  8-bit SPI status                                |  32-bit data                    |  32-bit data                    |  32-bit data                    |  32-bit data                    |  32-bit data                    |  32-bit data                    |  32-bit data                    |
| 39 ... 32                                                         | 39 ... 32                                                         | 31 ... 0                          | 31 ... 0                          | 31 ... 0                          | 31 ... 0                          | 31 ... 0                          | 31 ... 0                          | 31 ... 0                          |
|  to TMC4331: RW + 7-bit address  from TMC4331: 8-bit SPI status |  to TMC4331: RW + 7-bit address  from TMC4331: 8-bit SPI status | 8-bit data                        | 8-bit data                        | 8-bit data                        | 8-bit data                        | 8-bit data                        | 8-bit data                        | 8-bit data                        |
| 39 / 38 ... 32                                                    | 39 / 38 ... 32                                                    | 31 ... 24                         | 31 ... 24                         | 23 ... 16                         | 23 ... 16                         | 15 ... 8                          | 7 ... 0                           | 7 ... 0                           |
| W                                                                 | 38...32                                                           | 31...28                           | 27...24                           | 23...20                           | 19...16                           | 15...12 11...8                    | 7...4                             | 3...0                             |

Figure 12: TMC4331A SPI Datagram Structure

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Read/Write Selection Principles and Process

## AREAS OF SPECIAL CONCERN !

Use of Dummy Write Data

## Read and Write Access Examples

Read and write selection is controlled by the MSB of the address byte (bit 39 of the SPI datagram). This bit is 0 for read access and 1 for write access. Consequently, the bit named W is a WRITE\_notREAD control bit.

The active high write bit is the MSB of the address byte.

Consequently, 0x80 must be added to the address for a write access.

The  SPI  interface always  delivers  data  back  to the  master,  independent  of the Write bit W.

Figure 13: Difference between Read and Write Access

| Difference between Read and Write Access   | Difference between Read and Write Access                                                                      |
|--------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| If…                                        | Then…                                                                                                         |
| The previous access was a read access.     | The data transferred back is the data read from the address which was transmitted with the previous datagram. |
| The previous access was a write access     | The data read back mirrors the previously received write data.                                                |

## Conclusion:

Consequently, the difference between a read and a write access is that the read access does not transfer data to the addressed register but it transfers the address only; and its 32 data bits are dummies.

## NOTE:

-  Please  note  that  the  following  read  delivers  back  data  read  from  the  address transmitted in the preceding read cycle. The data is latched immediately after the read request.

## A read access request datagram uses dummy write data.

Read data is transferred back to the master with the subsequent read or write access.

- i Reading  multiple  registers  can  be  done  in  a  pipelined  fashion.  Data  that  is delivered is latched immediately after the initiated data transfer.

For read access to register XACTUAL with the address 0x21, the address byte must be set to 0x21 in the access preceding the read access.

For write access to register VACTUAL, the address byte must be set to 0x80 + 0x22 = 0xA2. For read access, the data bit can have any value, e.g., 0.

Table 4: Read and Write Access Examples

| Read and Write Access Examples   | Read and Write Access Examples   | Read and Write Access Examples   |
|----------------------------------|----------------------------------|----------------------------------|
| Action                           | Data sent to TMC                 | Data received from TMC           |
| read XACTUAL                     |  0x2100000000                   |  0xSS 1) & unused data          |
| read XACTUAL                     |  0x2100000000                   |  0xSS & XACTUAL                 |
| write VACTUAL := 0x00ABCDEF      |  0xA200ABCDEF                   |  0xSS & XACTUAL                 |
| write VACTUAL := 0x00123456      |  0xA200123456                   |  0xSS00ABCDEF                   |

1)  SS is a placeholder for the status bits SPI\_STATUS.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Data Alignment

## SPI Transaction Process

## AREAS OF SPECIAL CONCERN

!

System Behavior Specifics

All data is right-aligned. Some registers represent unsigned (positive) values; others represent integer values (signed) as two's complement numbers. Some registers consist of switches that are represented as bits or bit vectors.

The SPI transaction process is as follows:

-  The slave is enabled for SPI transaction by a transition to low level on the chip select input NSCSIN.
-  Bit transfer is synchronous to the bus clock SCKIN, with the slave latching the data from SDIIN on the rising edge of SCKIN and driving data to SDOIN following the falling edge.
-  The most significant bit is sent first.
- i A  minimum  of  40  SCKIN  clock  cycles  is  required  for  a  bus  transaction  with TMC4331A.

## Take the following aspects into consideration:

-  Whenever data is read from or written to the TMC4331A, the first eight bits that are delivered back contain the SPI status SPI\_STATUS that consists of eight user-selected event bits. The selection of these bits are explained in chapter 5.2. (Page 22).
-  If less than 40 clock cycles are transmitted, the transfer is not valid; even for read access. However, sending only eight clock cycles can be useful to obtain the SPI status because it sends the status information back first.
-  If more than 40 clocks cycles are transmitted, the additional bits shifted into SDIIN are shifted out on SDOIN after a 40-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.
-  NSCSIN must be low during the whole bus transaction . When NSCSIN goes high, the contents of the internal shift register are latched into the internal control register and recognized as a command from the master to the slave. If more than 40 bits are sent, only the last 40 bits received - before the rising edge of NSCSIN - are recognized as the command.

Figure 14: SPI Timing Datagram

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

<!-- image -->

## SPI Timing Description

The SPI interface is synchronized to the internal system clock, which limits SPI bus clock SCKIN to a quarter of the system clock frequency. The signal processing of SPI inputs is supported with internal Schmitt Trigger, but not with RC elements.

## NOTE:

-  In order to avoid glitches at the inputs of the SPI interface between µC and TMC4331A, external RC elements have to be provided.

Figure 14 shows the timing parameters of an SPI bus transaction, and the table below specifies the parameter values.

Table 5: SPI Interface Timing

| SPI Interface Timing                                           | SPI Interface Timing   | SPI Interface Timing                                                              | SPI Interface Timing         | SPI Interface Timing         | SPI Interface Timing         | SPI Interface Timing         |
|----------------------------------------------------------------|------------------------|-----------------------------------------------------------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| SPI Interface Timing                                           | AC Characteristics:    | AC Characteristics:                                                               | External clock period: t CLK | External clock period: t CLK | External clock period: t CLK | External clock period: t CLK |
| Parameter                                                      | Symbol                 | Conditions                                                                        | Min                          | Type                         | Max                          | Unit                         |
| SCKIN valid before or after change of NSCSIN                   | t CC                   |                                                                                   | 10                           |                              |                              | ns                           |
| NSCSIN high time                                               | t CSH                  | Min. time is for synchronous CLK with SCKIN high one t CH before SCSIN high only. | t CLK                        | >2 · t CLK +10               |                              | ns                           |
| SCKIN low time                                                 | t CL                   | Min. time is for synchronous CLK only.                                            | t CLK                        | >t CLK +10                   |                              | ns                           |
| SCKIN high time                                                | t CH                   | Min. time is for synchronous CLK only.                                            | t CLK                        | >t CLK +10                   |                              | ns                           |
| SCKIN frequency using external clock (Example: f CLK = 16 MHz) | f SCK                  | Assumes synchronous CLK.                                                          |                              |                              | f CLK / 4 (4)                | MHz                          |
| SDIIN setup time before rising edge of SCKIN                   | t DU                   |                                                                                   | 10                           |                              |                              | ns                           |
| SDIIN hold time after rising edge of SCKIN                     | t DH                   |                                                                                   | 10                           |                              |                              | ns                           |
| Data out valid time after falling SCKIN clock edge             | t DO                   | No capacitive load on SDOIN.                                                      |                              |                              | t FILT +5                    | ns                           |

- i tCLK = 1 / fCLK

<!-- image -->

## 4. Input Filtering

Input signals can be noisy due to long cables and circuit paths. To prevent jamming, every input pin provides a Schmitt trigger. Additionally, several signals are passed through a digital filter. Particular input pins are separated into three filtering groups. Each group can be programmed individually according to its filter characteristics. In this chapter informed on the digital filtering feature of TMC4331A is provided; and how to separately set up the digital filter for input pins.

Table 6: Input Filtering Groups (Assigned Pins)

| Input Filtering Groups   | Input Filtering Groups   | Input Filtering Groups     |
|--------------------------|--------------------------|----------------------------|
| Pin Names                | Type                     | Remarks                    |
| STPIN DIRIN              | Inputs                   | Step/Dir interface inputs. |
| STOPL HOME_REF STOPR     | Inputs                   | Reference input pins.      |
| START                    | Input                    | START input pin.           |

Table 7: Input Filtering (Assigned Register)

| Register Names   | Register Names   | Register Names   | Register Names                                  |
|------------------|------------------|------------------|-------------------------------------------------|
| Register Names   | Register Address | Register Address | Remarks                                         |
| INPUT_FILT_CONF  | 0x03             | RW               | Filter configuration for all four input groups. |

Every filtering group can be configured separately with regard to input sample rate and digital filter length.

The following groups exist:

-  Step/Dir input pins.
-  Reference input pins.
-  Start input pin.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

## Input Filter Assignment

<!-- image -->

## Input Sample Rate (SR)

## Sample Rate Configuration

## Digital Filter Length (FILT\_L)

## Digital Filter Length Configuration Table

Input sample rate = fCLK 1/2 SR   where:

SR  (extended with a particular name extension) is in [0… 7].

- i This means that the next input value is considered after 2 SR  clock cycles.
- i The filter length FILT\_L can be set within the range [0… 7].
- i The filter length FILT\_L specifies the number of sampled bits that must have the same voltage level to set a new input bit voltage level.

Table 8: Sample Rate Configuration

| Sample Rate Configuration   | Sample Rate Configuration   |
|-----------------------------|-----------------------------|
| SR Value                    | Sample Rate                 |
| 0                           | f CLK                       |
| 1                           | f CLK /2                    |
| 2                           | f CLK /4                    |
| 3                           | f CLK /8                    |
| 4                           | f CLK /16                   |
| 5                           | f CLK /32                   |
| 6                           | f CLK /64                   |
| 7                           | f CLK /128                  |

Table 9: Configuration of Digital Filter Length

| Configuration of Digital Filter Length   | Configuration of Digital Filter Length   |
|------------------------------------------|------------------------------------------|
| FILT_L value                             | Filter Length                            |
| 0                                        | No filtering.                            |
| 1                                        | 2 equal bits.                            |
| 2                                        | 3 equal bits.                            |
| 3                                        | 4 equal bits.                            |
| 4                                        | 5 equal bits.                            |
| 5                                        | 6 equal bits.                            |
| 6                                        | 7 equal bits.                            |
| 7                                        | 8 equal bits.                            |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Input Filtering Examples

The following three examples depict input pin filtering of three different input filtering groups.

- i After passing Schmitt trigger, voltage levels are compared to internal signals, which are processed by the motion controller.
- i The sample points are depicted as green dashed lines.

Example 1: Reference Input Pins

Example 2: START Input Pin

Example 3: S/D Input Pins

In this example every second clock cycle is sampled. Two sampled input bits must be equal to receive a valid input voltage.

Figure 15: Reference Input Pins: SR\_REF = 1, FILT\_L\_REF = 1

<!-- image -->

This example shows the START input pattern at every fourth clock cycle:

Figure 16: START Input Pin: SR\_S = 2, FILT\_L\_S = 0

<!-- image -->

This example shows every clock cycle bit. Eight sampled input bits must be equal to receive a valid input voltage.

Figure 17: S/D Input Pins: SR\_SD\_IN = 0, FILT\_L\_SD\_IN = 7

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 5. Status Flags and Events

TMC4331A provides a range of over 20 status flags and status events in order to obtain short information on the internal status or motor driver status. These flags and events can be read out from dedicated registers. In the following chapter, you are informed about the generation of  interrupts  based  on  status  events.  Status  events  can  also  be  assigned  to  the  first eight SPI status bits, which are sent within each SPI datagram.

Table 10: Pins Names: Status Events

| Pin Names: Status Events   | Pin Names: Status Events   | Pin Names: Status Events                    |
|----------------------------|----------------------------|---------------------------------------------|
| Pin Names                  | Type                       | Remarks                                     |
| INTR                       | Output                     | Interrupt output to indicate status events. |

Table 11:Register Names: Status Flags and Events

| Register Names: Status Flags and Events   | Register Names: Status Flags and Events   | Register Names: Status Flags and Events   | Register Names: Status Flags and Events                           |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------------------------------|
| Register Name                             | Register Address                          | Register Address                          | Remarks                                                           |
| GENERAL_CONF                              | 0X00                                      | RW                                        | Bits: 15, 29, 30.                                                 |
| STATUS_FLAGS                              | 0X0F                                      | R                                         | Status flags of TMC4331A and the connected TMC motor driver chip. |
| EVENTS                                    | 0X0E                                      | R+C W                                     | Events triggered by altered TMC4331A status bits.                 |
| SPI_STATUS_SELECTION                      | 0X0B                                      | RW                                        | Selection of 8 out of 32 events for SPI status bits.              |
| EVENT_CLEAR_CONF                          | 0X0C                                      | RW                                        | Exceptions for cleared event bits.                                |
| INTR_CONF                                 | 0X0D                                      | RW                                        | Selection of events for INTR output.                              |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Status Event Description

Status events are based on status bits. If the status bits change, related events are triggered from inactive to active level. Resetting events back to inactive must be done manually.

## Association of Status Bits

## Automatic Clearance of EVENTS

## AREAS OF SPECIAL CONCERN

How to Avoid Lack of Information

<!-- image -->

Status bits and status events are associated in different ways:

-  Status flags reflect the as-is-condition, whereas status events indicate that the dedicated information has changed since the last read request of the EVENTS register. Several status events are associated with one status bit.
-  Some status events show the status transition of one or more status bits out of a status bit group. The motor driver flags, e.g., trigger only one  motor driver event MOTOR\_EV in case one of the selected motor driver status flags becomes active.
-  In case a flag consists of more than one bit, the number of associated events that  can  be  triggered  corresponds  to  the  valid  combinations.  The VEL\_STATE flag, e.g., has two bit but three associated velocity state events (b'00/b'01/b'10). Such an event is triggered if the associated combination switches from inactive to active.

## NOTE:

-  Some  events have no equivalence in the STATUS\_FLAGS  register 0x0F (e.g., COVER\_DONE which indicates new data from the motor driver chip).

The EVENTS  register  0x0E  is  automatically  cleared  after  reading  the  register; subsequent to an SPI datagram request. Events are important for interrupt generation and SPI status monitoring.

## NOTE:

-  It is recommended to clear EVENTS register 0x0E by read request before regular operation.
- Recognition of a status event can fail; in case it is triggered right before or during EVENTS register 0x0E becomes cleared.

In order to prevent events from being cleared, assign EVENT\_CLEAR\_CONF register 0x0C according to the particular event in the EVENTS register:

## Action:

-  Set related EVENT\_CLEAR\_CONF register bit position to 1.

## Result:

The related event is not cleared when EVENTS register is read out.

In order to clear these events, do the following, if necessary:

## Action:

-  Set related EVENTS register 0x0E bit position to 1.

## Result:

The related event is cleared by writing to the EVENTS register.

!

<!-- image -->

## SPI Status Bit Transfer

Up to eight events can be selected for permanent SPI status report. Consequently, these events are always transferred at the most significant transfer bits within each TMC4331A SPI response.

Assign an Event to a Status Bit

In order to select an event for the SPI status bits, assign the SPI\_STATUS\_SELECTION register 0x0B according to the particular event in the EVENTS register:

## Action:

-  Set the related SPI\_STATUS\_SELECTION register bit position to 1.

## Result:

The related event is transferred with every SPI datagram response as SPI\_STATUS.

## NOTE:

-  The bit positions are sorted according to the event bit positions in the EVENTS register 0x0E. In case more than eight events are selected, the first eight bits (starting from index 0 = LSB) are forwarded as SPI\_STATUS.

## Generation of Interrupts

Similar to EVENT\_CLEAR\_CONF register and SPI\_STATUS\_SELECTION register, events can be selected for forwarding via INTR output. The selected events are ORed to one signal which means that INTR output switches active as soon as one of the selected events triggers.

## Generate Interrupts

## INTR Output Polarity

<!-- image -->

In order to select an event for the INTR output pin, assign the INTR\_CONF register 0x0D according to the particular event in the EVENTS register:

## Action:

-  Set the related INTR\_CONF register bit position to 1.

## Result:

The  related  event  is  forwarded  at  the  INTR  output.  If  more  than  one  event  is requested, INTR becomes active as soon as one of the selected events is active.

Per default, the INTR output is low active.

In order to change the INTR polarity to high active, do the following:

## Action:

 Set intr\_pol =1 (GENERAL\_CONF register 0x00).

## Result:

INTR is high active.

<!-- image -->

## Connection of Multiple INTR Pins

INTR pin can be configured for a shared interrupt signal line of several TMC4331A interrupt signals to the microcontroller.

Connecting several Interrupt Pins

<!-- image -->

In  order  to  make  use  of  a  Wired-Or  or  Wired-And  behavior,  the  below described actions must be taken:

## Action:

 Step 1: Set intr\_tr\_pu\_pd\_en = 1 (GENERAL\_CONF register 0x00).

## OPTION 1: WIRED-OR

## Action :

-  Step 2: Set intr\_as\_wired\_and = 0 (GENERAL\_CONF register 0x00).

## Result:

The INTR pin works efficiently as Wired-Or (default configuration).

- i In case INTR pin is inactive, the pin drive has a weak inactive polarity output. If one of the connected pins is activated, the whole line is set to active polarity.

## OPTION 2: WIRED-AND

## Action:

-  Step 2: Set intr\_as\_wired\_and = 1 of the GENERAL\_CONF register 0x00.

## Result:

In case no interrupt is active, the INTR pin has a strong inactive polarity output. During the active state, the pin drive has a weak active polarity output. Consequently, the whole signal line is activated in case all pins are forwarding the active polarity.

<!-- image -->

## 6. Ramp Configurations for different Motion Profiles

Step generation is one of the main tasks of a stepper motor motion controller. The internal ramp generator of TMC4331A provides several step generation configurations with different motion profiles. They can be configured in combination with the velocity or positioning mode.

Table 12: Pin Names: Ramp Generator

| Pin Names: Ramp Generator   | Pin Names: Ramp Generator   | Pin Names: Ramp Generator   |
|-----------------------------|-----------------------------|-----------------------------|
| Pin Names                   | Type                        | Remarks                     |
| STPOUT_PWMA                 | Output                      | Step output signal.         |
| DIROUT_PWMB                 | Output                      | Direction output signal.    |

Table 13: Register Names: Ramp Generator

| Register Names: Ramp Generator   | Register Names: Ramp Generator   | Register Names: Ramp Generator   | Register Names: Ramp Generator                                                                                     |
|----------------------------------|----------------------------------|----------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Register Name                    | Register Address                 | Register Address                 | Remarks                                                                                                            |
| GENERAL_CONF                     | 0x00                             | RW                               | Ramp generator affecting bits 5:0.                                                                                 |
| STP_LENGTH_ADD                   | 0x10                             | RW                               | Additional step length in clock cycles; 16 bits. Additional time in clock cycles when no steps will occur after a  |
| DIR_SETUP_TIME RAMPMODE          | 0x20                             | RW                               | direction change; 16 bits. Requested motion profile and operation mode; 3 bits.                                    |
| XACTUAL                          | 0x21                             | RW                               | Current internal microstep position; signed; 32 bits.                                                              |
| VACTUAL                          | 0x22                             | R                                | Current step velocity; 24 bits; signed; no decimals.                                                               |
| AACTUAL                          | 0x23                             | R                                | Current step acceleration; 24 bits; signed; no decimals.                                                           |
| VMAX                             | 0x24                             | RW                               | Maximum permitted or target velocity; signed; 32 bits= 24+8 (24 bits integer part, 8 bits decimal places).         |
| VSTART                           | 0x25                             | RW                               | Velocity at ramp start; unsigned; 31 bits=23+8.                                                                    |
| VSTOP                            | 0x26                             | RW                               | Velocity at ramp end; unsigned; 31 bits=23+8.                                                                      |
| VBREAK                           | 0x27                             | RW                               | At this velocity value, the aceleration/deceleration will change during trapezoidal ramps; unsigned; 31 bits=23+8. |
| AMAX                             | 0x28                             | RW                               | Maximum permitted or target acceleration; unsigned; 24 bits=22+2 (22 bits integer part, 2 bits decimal places).    |
| DMAX                             | 0x29                             | RW                               | Maximum permitted or target deceleration; unsigned; 24 bits=22+2.                                                  |
| ASTART                           | 0x2A                             | RW                               | Acceleration at ramp start or below VBREAK; unsigned; 24 bits=22+2.                                                |
| DFINAL                           | 0x2B                             | RW                               | Deceleration at ramp end or below VBREAK; unsigned; 24 bits=22+2.                                                  |
| BOW1                             | 0x2D                             | RW                               | First bow value of a complete velocity ramp; unsigned; 24 bits=24+0 (24 bits integer part, no decimal places).     |
| BOW2                             | 0x2E                             | RW                               | Second bow value of a complete velocity ramp; unsigned; 24bits=24+0.                                               |
| BOW3                             | 0x2F                             | RW                               | Third bow value of a complete velocity ramp; unsigned; 24 bits=24+0.                                               |
| BOW4                             | 0x30                             | RW                               | Fourth bow value of a complete velocity ramp; unsigned; 24 bits=24+0.                                              |
| CLK_FREQ                         | 0x31                             | RW                               | External clock frequency f CLK ; unsigned; 25 bits.                                                                |
| XTARGET                          | 0x37                             | RW                               | Target position; signed; 32 bits.                                                                                  |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Step/Dir Output Configuration

## This section focuses on the description of the Step/Dir output configuration.

Step/Dir output signals can be configured for the driver circuit.

If step signals must be longer than one clock cycle, do as follows:

## Action:

 Set proper STP\_LENGTH\_ADD register 0x10 (bit 15:0).

Step/Dir Output Configuration Steps

## Result:

The resulting step length is equal to STP\_LENGTH\_ADD+1 clock cycles. This is how the step length is assigned within a range of up to 1-up-to-2 16  clock cycles.

## Action:

-  Set proper DIR\_SETUP\_TIME register 0x10 (bit 31:16).

## Result:

The  delay  period  between  DIROUT  and  STPOUT  voltage  level  transitions  last DIR\_SETUP\_TIME clock cycles. No steps are sent via STPOUT for DIR\_SETUP\_TIME clock cycles after a level change at DIROUT.

## PRINCIPLE:

DIROUT does not change the level:

-  During active step pulse signal
-  For (STP\_LENGTH\_ADD+1) clock cycles after the step signal returns to inactive level

## STPOUT characteristics can be set differently, as follows:

Per default, the step output is high active because a rising edge at STPOUT indicates a step.

## In order to change the polarity, do as follows:

## Action:

-  Set step\_inactive\_pol =1 (bit3 of GENERAL\_CONF register 0x00).

## Result:

Each falling edge indicates a step.

## In order to prompt a step at every level change, do as follows:

## Action:

 Set toggle\_step =1 (bit4 of GENERAL\_CONF register 0x00).

## Result :

Every level change indicates a step.

Per default, voltage level 1 at DIROUT  indicates  a  negative  step  direction. DIROUT characteristics can be set differently, as shown below.

## In order to change polarity, do as follows:

## Action:

 Set pol\_dir\_out =0 (bit5 of GENERAL\_CONF register 0x00).

## Result:

A high voltage level at DIROUT indicates a positive step direction.

## NOTE:

-  DIROUT is based on the internal µStep position MSCNT and is therefore based on the internal SinLUT, see 10.2. , page 83 .

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## STPOUT: Changing Polarity

## How to prompt Level Change with every Step

## DIROUT: Changing the Polarity

## Altering the Internal Motion Direction

Per default, a positive internal velocity VACTUAL results in a forward motion through internal SinLUT. Consequently, if VACTUAL &lt; 0, the SinLUT values are developed backwards.

How to change Motion Direction

<!-- image -->

In order to alter the default setting of the Internal Motion Direction, do as follows:

## Action:

 Set reverse\_motor\_dir =1 (bit28 of GENERAL\_CONF register 0x00).

## Result:

A positive internal velocity for VACTUAL results in a backward motion through the internal SinLUT.

<!-- image -->

## Configuration Details for Operation Modes and Motion Profiles

This section provides information on the two available operation modes (velocity mode and positioning  mode),  and  on  the  four  possible  motion  profiles  (no  ramp,  trapezoidal  ramp including sixPoint™ ramp, and S-shaped ramp). Different combinations are possible. Each one of  them  has  specific  advantages.  The  choice  of  configuration  depends  on  the  user's  design specification to best suit his design needs.

## Description of Internal Ramp Generator

With proper configuration, the internal ramp generator of the TMC4331A is able to generate various ramps with the related step outputs for STPOUT.

In order to configure the internal ramp generator successfully - i.e. to make it fit as best as possible with your specific use case - information about the scope of each possible combination is provided in the table below and on the following pages.

Table 14: Overview of General and Basic Ramp Configuration Options

| Ramp Generator Configuration Options   | Ramp Generator Configuration Options   | Ramp Generator Configuration Options   | Ramp Generator Configuration Options                                                                                                                                      |
|----------------------------------------|----------------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operation Mode                         | Motion Profile                         | RAMPMODE(2:0)                          | Description                                                                                                                                                               |
| Velocity Mode                          | No ramp                                | b'000                                  | Follows VMAX request only.                                                                                                                                                |
| Velocity Mode                          | Trapezoidal ramp                       | b'001                                  | Follows VMAX request and considers acceleration and deceleration values.                                                                                                  |
| Velocity Mode                          | sixPoint ramp                          | b'001                                  | Follows VMAX request and considers acceleration / deceleration values and start and stop velocity values.                                                                 |
| Velocity Mode                          | S-shaped ramp                          | b'010                                  | Follows VMAX request and considers maximum acceleration / deceleration values and adapts these values with 4 different bow values.                                        |
| Positioning Mode                       | No Ramp                                | b'100                                  | Follows XTARGET and VMAX requests only.                                                                                                                                   |
| Positioning Mode                       | Trapezoidal ramp                       | b'101                                  | Follows XTARGET request and a maximum velocity VMAX request and considers acceleration and deceleration values.                                                           |
| Positioning Mode                       | sixPoint ramp                          | b'101                                  | Follows XTARGET request and a maximum velocity VMAX request and considers acceleration / deceleration values and start and stop velocity values.                          |
| Positioning Mode                       | S-shaped ramp                          | b'110                                  | Follows XTARGET request and a maximum velocity VMAX request and considers maximum acceleration / deceleration values and adapts these values with 4 different bow values. |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Starting Point: Choose Operation Mode

## Two operation modes are available: velocity mode and positioning mode.

## ! BEFORE YOU BEGIN

## Operation Mode: Velocity Mode

## Operation Mode: Positioning Mode

## Stop during Motion

<!-- image -->

Before setting any parameters:

## First select:

-  Operation mode and
-  Motion profile

It  is  not  advisable  to  change  operation  mode  nor  motion  profile  during motion.

The RAMPMODE register provides a choice of two operation modes. Either velocity mode or positioning mode can be chosen.

## In order to use the velocity mode, do as follows:

## Action:

 Set RAMPMODE(2) =0 (RAMPMODE register 0x20).

## Result:

Velocity  mode  is  selected.  The  target  velocity VMAX is  reached  with  the  selected motion profile.

In order to make use of the positioning mode, do as follows:

## Action:

 Set RAMPMODE(2)=1 (RAMPMODE register 0x20).

## Result:

Positioning  mode  is  selected. VMAX is the maximum velocity  value of this  motion profile that is based on the condition that the ramp stops at target position XTARGET.

## NOTE:

-  The sign of  VMAX is not relevant during positioning. The direction of the steps depends on XACTUAL, XTARGET, and the current ramp motion profile status.

## NOTE:

-  Do NOT exceed VMAX ≤ fCLK ¼ pulses for positioning mode.

In order to stop the motion during positioning, do as follows:

## Action:

-  Set VMAX = 0 (register 0x24).

## Result:

The velocity ramp directs to VACTUAL = 0, using the actual ramp parameters.

- i Motion is proceeded with VMAX ≠ 0.

<!-- image -->

## Motion Profile Configuration

<!-- image -->

Three basic motion profiles are provided. Each one of them has a different velocity value development during the drive. See table below.

## For configuration of the motion profiles, do as follows:

## Action:

 Use the bits 1 and 0 of the RAMPMODE register 0x20.

## Result:

As specified in the table below.

You can choose different configuration options from the list below:

-  No Ramp motion profile
-  Trapezoidal Ramp motion profile (including sixPoint Ramp)
-  S-shaped Ramp motion profiles

| TMC4331A Motion Profile   | TMC4331A Motion Profile   | TMC4331A Motion Profile                                                                                                                                                       |
|---------------------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RAMPMODE (1:0)            | Motion Profile            | Function                                                                                                                                                                      |
| b'00                      | No Ramp                   | Follow VMAX only (rectangular velocity shape).                                                                                                                                |
| b'01                      | Trapezoidal Ramp          | Consideration of acceleration and deceleration values without adaptation of these acceleration values.                                                                        |
|                           | sixPoint Ramp             | Consideration of acceleration and deceleration values without adaptation of these acceleration values. Usage of start and stop velocity values. (see section 6.5. , Page 42 ) |
| b'10                      | S-shaped Ramp             | Use all ramp values (including bow values).                                                                                                                                   |

Table 15: Description of TMC4331A Motion Profiles

<!-- image -->

## No Ramp Motion Profile

Positioning Mode combined with No Ramp Motion Profile

<!-- image -->

t

Figure 18: No Ramp Motion Profile

In order to make use of the no ramp motion profile, which is rectangular, do as follows:

## Action:

-  Set RAMPMODE(1:0) =b'00 (register 0x20).
-  Set proper VMAX register 0x24.

## Result:

The internal velocity VACTUAL is immediately set to VMAX.

Combining positioning mode with the no ramp motion profile determines that the ramp holds VMAX until XTARGET is reached. The motion direction depends on XTARGET.

In order to make use of the no ramp motion profile in combination with the positioning mode, do as follows:

## Action:

-  Set RAMPMODE(2:0) =b'100.
-  Set proper VMAX register 0x24.
-  Set proper XTARGET register 0x37.

## Result:

VACTUAL is set instantly to 0 in case the target position is reached.

## NOTE:

-  Do NOT exceed VMAX ≤ fCLK / 4 pulses for positioning mode.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Trapezoidal 4-Point Ramp without Break Point

In order to make use of a trapezoidal 4-point ramp motion profile without break velocity, do as follows:

## Action:

-  Set RAMPMODE(1:0) =b'01 (register 0x20).
-  Set VBREAK =0 (register 0x27).
-  Set proper AMAX register 0x28 and DMAX register 0x29.
-  Set proper VMAX register 0x24.

## Result:

The internal velocity VACTUAL is changed successively to VMAX with a linear ramp. Only AMAX and DMAX define the acceleration/deceleration slopes.

## NOTE:

-  AMAX determines the rising slope from absolute low to absolute high velocities, whereas DMAX determines the falling slope from absolute high to absolute low velocities.
-  Acceleration  slope  and  deceleration  slopes  have  only  one  acceleration  and deceleration value each.

Figure 19: Trapezoidal Ramp without Break Point

<!-- image -->

## Trapezoidal Ramp with Break Point

Figure 20: Trapezoidal Ramp with Break Point

<!-- image -->

In  order  to  make  use  of  a  trapezoidal  ramp  motion  profile  with  break velocity, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'01 (register 0x20).
-  Set proper VBREAK register 0x27.
-  Set proper AMAX register 0x28 and DMAX register 0x29.
-  Set proper ASTART register 0x2A and DFINAL register 0x2B.
-  Set proper VMAX register 0x24.

## Result:

The internal velocity VACTUAL is changed successively to VMAX with a linear ramp. In addition  to AMAX  and DMAX, ASTART  and DFINAL  define  the  acceleration  or deceleration slopes (see Figure above).

## NOTES:

-  AMAX and ASTART determines the rising slope from absolute low to absolute high velocities.
-  DMAX and DFINAL determines the falling slope from absolute high to absolute low velocities.
-  The acceleration/deceleration factor alters at VBREAK. ASTART and DFINAL are valid below VBREAK, whereas AMAX and DMAX are valid beyond VBREAK.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Position Mode combined with Trapezoidal Ramps

## AACTUAL Assignments for Trapezoidal Ramps

## Motion direction depends on XTARGET.

In order to use a 4-point or sixPoint ramps during positioning mode, do as follows:

## Action:

-  Set RAMPMODE(2:0) =b'101 (register 0x20).
-  Set Trapezoidal ramp type accordingly, as explained above.
-  Set proper XTARGET register 0x37.

## Result:

The ramp finishes exactly at the target position XTARGET by keeping |VACTUAL| = VMAX as long as possible.

## AACTUAL assignments apply both for 4-point and sixPoint ramps.

The acceleration/deceleration factor AACTUAL register depends on the current ramp phase and the velocity that needs to be reached. The related sign assignment for different ramp phases is given in the following table:

Table 16: Trapezoidal Ramps: AACTUAL Assignments during Motion

| AACTUAL ASSIGNMENTS for Trapezoidal Ramps   | AACTUAL ASSIGNMENTS for Trapezoidal Ramps   | AACTUAL ASSIGNMENTS for Trapezoidal Ramps   | AACTUAL ASSIGNMENTS for Trapezoidal Ramps   | AACTUAL ASSIGNMENTS for Trapezoidal Ramps   | AACTUAL ASSIGNMENTS for Trapezoidal Ramps   |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| Ramp phase:                                 | A 1L                                        | A 1                                         | A 2                                         | A 3                                         | A 3L                                        |
| v>0: AACTUAL =                              | ASTART                                      | AMAX                                        | 0                                           | -DMAX                                       | -DFINAL                                     |
| v<0: AACTUAL =                              | -ASTART                                     | -AMAX                                       | 0                                           | DMAX                                        | DFINAL                                      |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Configuration of S-Shaped Ramps

## In order to make use of S-shaped ramps, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'10 (register 0x20).
-  Set proper BOW1 … BOW4 registers 0x2C…0x30.
-  Set proper AMAX register 0x28 and DMAX register 0x29.
-  Set ASTART = 0 (register 0x2A).
-  Set DFINAL = 0 (register 0x2B).
-  Set proper VMAX register 0x24.

## Result:

The internal velocity VACTUAL is changed successively to VMAX with S-shaped ramps. The acceleration/deceleration values are altered on the basis of the bow values.

Figure 21: S-shaped Ramp without initial and final Acceleration/Deceleration Values

<!-- image -->

Definition of Rising Slope for S-shaped Ramps

Definition of Falling Slope for S-shaped Ramps

## Rising slope (absolute lower velocities to absolute higher velocities):

-  BOW1 determines the value which increases the absolute acceleration value.
-  BOW2 determines the value which decreases the absolute acceleration value.
-  AMAX determines the maximum acceleration value.

## Falling slope (absolute higher velocities to absolute lower velocities):

-  BOW3 determines the value which increases the absolute deceleration value.
-  BOW4 determines the value which decreases the absolute deceleration value.
-  DMAX determines the maximum absolute deceleration value.
-   Description is continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Changing ramp parameters 1  and/or operation mode during motion is not advised. However, if this is necessary, the following applies:

## NOTICE

Changing Ramp Parameters during S-shaped Motion or Switching to Positiong Mode

Configuration of S-shaped Ramp with ASTART and DFINAL

## Avoid unintended system behavior during positioning mode! Ramp parameter value changes during ramp progress can lead to:

-  A temporary overshooting of XTARGET or mechanical stop positions.
-  A temporary overshooting of VACTUAL beyond VMAX because the bows B1, B2, B3, and B4 are maintained during the ramp progress.

## This will ensure smooth operation during positioning mode.

1  Exceptions are XTARGET and VMAX. These Parameters can be changed during motion.

However, if it is necessary to change ramp parameters for S-shaped ramps during motion or to switch from velocity to positioning mode, do as follows:

## Action:

-  Set  or  set  again  proper BOW3 registers  0x2F,  regardless  of  wether  the  value changes or not.
- i Set this parameter after all other parameters have been set.

## Result:

Internal ramp calculations are reset through which the velocity ramp operates at safe mode. During this mode, the target velocity is set to 0. In case the internal ramp calculations  are  up-to-date,  the  ramp,  which  is  configured  by  the  actual  ramp parameters, is continued.

In order to configure S-shaped ramps with starting and finishing values for acceleration or deceleration, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'10 (register 0x20).
-  Set S-Shaped ramp as explained above (BOW1 … BOW4, AMAX, DMAX).
-  Set proper ASTART register 0x2A.
-  Set proper DFINAL register 0x2B.
-  Set proper VMAX register 0x24.

## Result:

The internal velocity VACTUAL is changed successively to VMAX with S-Shaped ramps.

Figure 22: S-shaped Ramp with initial and final Acceleration/Deceleration Values

<!-- image -->

-   Description is continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Definitions for S-shaped Ramps

## AACTUAL Assignments for S-shaped Ramps

## S-shaped Mode and Positioning: Fast Motion

<!-- image -->

-  The acceleration/deceleration values are altered, based on the bow values.
-  The start phase and the end phase of an S-shaped ramp is accelerated/decelerated by ASTART and DFINAL.
-  The ramp starts with ASTART and stops with DFINAL.
-  DFINAL becomes valid when AACTUAL reaches the chosen DFINAL value.
- i The parameter DFINAL is not considered during positioning mode.

AACTUAL assignments and current bow value selection for S-shaped ramps. The acceleration/deceleration factor depends on the current ramp phase and alters every 64 clock cycles during the bow phases B1, B2, B3, and B4.

Details are provided in the table below:

Table 17: Parameter Assignments for S-shaped Ramps

| S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| Ramp phase:                                                      | Ramp phase:                                                      | B 1                                                              | B 12                                                             | B 2                                                              | B 23                                                             | B 3                                                              | B 34                                                             | B 4                                                              |
| v>0:                                                             | AACTUAL =                                                        | ASTART  AMAX                                                    | AMAX                                                             | AMAX  0                                                         | 0                                                                | 0  -DMAX                                                        | -DMAX                                                            | -DMAX  -DFINAL                                                  |
|                                                                  | BOW ACTUAL =                                                     | BOW1                                                             | 0                                                                | -BOW2                                                            | 0                                                                | -BOW3                                                            | 0                                                                | BOW4                                                             |
| v<0:                                                             | AACTUAL =                                                        | -ASTART  -AMAX                                                  | -AMAX                                                            | -AMAX  0                                                        | 0                                                                | 0  DMAX                                                         | DMAX                                                             | DMAX  DFINAL                                                    |
|                                                                  | BOW ACTUAL =                                                     | -BOW1                                                            | 0                                                                | BOW2                                                             | 0                                                                | BOW3                                                             | 0                                                                | -BOW4                                                            |

## RAMPMODE(2:0) =b'110

-  The ramp finishes exactly on target position; keeping |VACTUAL| = VMAX as long as possible until the ramp falls to reach XTARGET exactly.
-  It is possible that the phases B12, B23, and B34 are left out due to given values. Therefore, the highest speed performance is possible due to a maximum speed positioning ramp.
-  The fastest possible slopes are always performed if the phases B12 and/or B34 are not reached during a rising and/or falling S-shaped slope.
-  The ramp maintains the maximum velocity VMAX as long as possible in positioning mode until the falling slope finishes the ramp to reach XTARGET exactly. The result is the fastest possible positioning ramp in matters of time.

<!-- image -->

## Start Velocity VSTART and Stop Velocity VSTOP

S-shaped  and  trapezoidal  velocity  ramps  can  be  configured  with  unsigned  start  and  stop velocity values: VSTART, or VSTOP.

Per default, VSTART  and VSTOP  are set to 0. The sign is selected automatically, depending on the current ramp status and the target velocity, or target position. This section explains how to set up the respective values correctly.

Starting Ramps with initial Velocity

S-shaped and trapezoidal velocity ramps can be started with an initial velocity value, if you set the VSTART value higher than zero (see Figure below).

In order to use trapezoidal ramps with an initial start velocity, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'01 (register 0x20).
-  Set Trapezoidal ramp type accordingly, as explained before.
-  Set proper VSTART &gt; 0 (register 0x25).
-  Set VSTOP = 0 (register 0x26).

## Result:

The trapezoidal ramp starts with initial velocity.

## NOTE:

-  The initial acceleration value is AMAX if VBREAK &lt; VSTART, otherwise the starting acceleration value is ASTART.

Figure 23: Trapezoidal Ramp with initial Velocity

<!-- image -->

## If trapezoidal ramp with initial velocity VSTART is selected:

<!-- image -->

<!-- image -->

## Avoid unintended system behavior during positioning mode!

-  Use VSTART without setting VSTOP &gt; VSTART only in positioning mode if there is enough distance between the current position XACTUAL and the target position XTARGET.

## This will ensure smooth operation during positioning mode.

-   Turn page for information on how to configure S-shaped ramps with initial start velocity.

<!-- image -->

## S-shaped Ramps with initial Start Velocity

<!-- image -->

## In order to use S-shaped ramps with initial start velocity, do as follows: Action:

-  Set RAMPMODE(1:0)=b'10 (register 0x20).
-  Set S-shaped ramp type accordingly, as explained before.
-  Set proper VSTART &gt; 0 (register 0x25).
-  Set VSTOP = 0 (register 0x26).

## Result:

The S-shaped ramp starts with initial velocity.

## PRINCIPLE:

-  The initial  acceleration  value  is  equal  to  AMAX.  The  parameter  ASTART  is  not considered. Consequently, ramp phase B1 is not performed.

Figure 24: S-shaped Ramp with initial Start Velocity

<!-- image -->

## If S-shaped ramp with initial velocity VSTART is selected:

## NOTICE

## Avoid unintended system behavior during positioning mode!

-  Keep in mind that the S-shaped character of the curve is maintained. Because AMAX is the start acceleration value, the ramp will always execute phase B2 which could result in positioning overshoots.
-  Use VSTART only in positioning mode if there is enough distance between the current position XACTUAL and the target position XTARGET.

## This will ensure smooth operation during positioning mode.

-   Turn page for information on how to configure finishing ramps with stop velocity.

<!-- image -->

## Finishing Ramps with Stop Velocity

<!-- image -->

S-shaped and trapezoidal velocity ramps can be finished with a stop velocity value if you set VSTOP value higher than zero (see figure below).

## In order to configure trapezoidal ramps with stop velocity, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'01 (register 0x20).
-  Set Trapezoidal ramp type accordingly, as explained before.
-  Set VSTART = 0 (register 0x25).
-  Set proper VSTOP &gt; 0 (register 0x26).

## Result:

The trapezoidal ramp stops with defined velocity.

Figure 20: Trapezoidal Ramp with Stop Velocity

<!-- image -->

## If trapezoidal ramps are selected (VBREAK &gt; 0):

<!-- image -->

NOTICE

## Avoid unintended system behavior during positioning mode!

-  Set VBREAK &gt; VSTOP.
-  Set VSTART &lt; VSTOP.

This will ensure smooth operation during positioning mode.

-   Turn page for configuration information on S-shaped ramps with stop velocity.

<!-- image -->

## S-shaped Ramps with Stop Velocity

## In order to use S-shaped ramps with stop velocity, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'10 (register 0x20).
-  Set S-shaped ramp type accordingly, as explained before.
-  Set VSTART = 0 (register 0x25).
-  Set proper VSTOP &gt; 0 (register 0x26).

## Result:

The S-shaped ramp finishes with stop velocity.

## NOTE:

-  The  final  deceleration  value  is  equal  to  DMAX.  The  parameter  DFINAL  is  not considered. Consequently, ramp phase B4 is not performed.

Figure 25: S-shaped Ramp with Stop Velocity

<!-- image -->

## Interaction of VSTART, VSTOP, VACTUAL and VMAX:

-  VSTOP can be used in positioning mode, if the target position is reached. In velocity mode, VSTOP is also used if VACTUAL ≠ 0 and the target velocity VMAX is assigned to 0.
-  VSTART and VSTOP are not only used to start or end a velocity ramp. If the velocity direction alters due to register assignments while a velocity ramp is in progress, the velocity values develop according to the current velocity ramp type, using VSTART or VSTOP.
-  The unsigned values VSTART and VSTOP are valid for both velocity directions.
-  Every register value change is assigned immediately.
-   Turn page for information on how to configure S-shaped ramps with start and stop velocity.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## S-shaped Ramps with Start and Stop Velocity

S-shaped ramps can be configured with a combination of VSTART and VSTOP. It is possible to include both processes in one S-Shaped ramp to decrease the time between start and stop of the ramp.

In  order  to  use  S-Shaped  ramps  with  a  combination  of  start  and  stop velocity, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'10.
-  Set S-shaped ramp type accordingly, as explained before, but with BOW2 ≠ BOW4.
-  Set proper VSTART &gt; 0 (register 0x25).
-  Set proper VSTOP &gt; 0 (register 0x26).

## Result:

The S-shaped ramp starts with initial velocity and stops with defined velocity.

Figure 26: S-shaped Ramp with Start and Stop Velocity

<!-- image -->

## If S-shaped ramp with initial velocity VSTART and stop velocity VSTOP is selected:

## NOTICE

## Avoid unintended system behavior during positioning mode!

-  Keep in mind that the S-shaped character of the curve is maintained. Because AMAX is the start acceleration value, the ramp will always execute phase B2, which could result in positioning overshoots.
-  Use VSTART in positioning mode, if there is enough distance between the current position XACTUAL and the target position XTARGET.

This will ensure smooth operation during positioning mode.

-   Turn page for information on how to use VSTART and ASTART for S-shaped ramps.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Combined Use of VSTART and ASTART for S-shaped Ramps

For some S-shaped ramp applications it can be useful to start with a defined velocity value (VSTART  &gt; 0);but not with the maximum acceleration value AMAX.

## In order to start with a defined velocity value, do as follows:

## Action:

-  Set RAMPMODE(1:0) =b'10 (register 0x20).
-  Set S-shaped ramp type accordingly, as explained before.
-  Set proper VSTART &gt; 0 (register 0x25).
-  Set proper VSTOP &gt; 0 (register 0x26).
-  Set use\_astart\_and\_vstart =1 (bit0 of the GENERAL\_CONF register 0x00).

## Result:

The following special ramp types can be generated in this way, as shown below.

- i Section B1 is passed through although VSTART is used.

Using VSTART and starting acceleration of 0 for S-shaped ramps

Using VSTART and starting acceleration, which is smaller than AMAX for S-shaped ramps

<!-- image -->

Figure 27: S-shaped Ramps with combined VSTART and ASTART Parameters

<!-- image -->

## If S-shaped ramp with VSTART, ASTART, and VSTOP is selected:

## NOTICE

## Avoid unintended system behavior during positioning mode!

-  Keep in mind that the S-shaped character of the curve is maintained. Because ASTART is the start acceleration value, the ramp will always execute phase B2, which could result in positioning overshoots.
-  Use VSTART and ASTART &gt; 0 without setting VSTOP &gt; VSTART only in positioning mode, if there is enough distance between the current position XACTUAL and the target position XTARGET.

This will ensure smooth operation during positioning mode.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## sixPoint Ramps

sixPoint ramps are trapezoidal ramps with initial and stop velocity values that also make use of two acceleration and two deceleration values.

Configuration of sixPoint Ramps

## Diagram of sixPoint Ramp

sixPoint  ramps  are  trapezoidal  velocity  ramps  that  can  be  configured  with  a combination of VSTART and VSTOP.

In  order  to  use  trapezoidal  ramps  with  a  combination  of  start  and  stop velocity, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'01 (register 0x20).
-  Set a Trapezoidal ramp type appropriately as explained in section 6.3.6, page 31.
-  Set proper VSTART &gt; 0 (register 0x25).
-  Set proper VSTOP &gt; 0 (register 0x26).
-  Set proper VBREAK &gt; 0 (register 0x27).

## Result:

The sixPoint ramp starts with an initial velocity and stops with a defined velocity.

<!-- image -->

t

Figure 28: sixPoint Ramp: Trapezoidal Ramp with Start and Stop Velocity

## If a sixPoint ramp is used:

<!-- image -->

Avoid unintended system behavior during positioning mode!

-  Set VBREAK &gt; VSTOP.
-  Set VSTART &lt; VSTOP.

This will ensure smooth operation during positioning mode.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## U-Turn Behavior

## The process that is triggered when motion direction changes during motion, is described below, and applies to all ramp types.

U-Turn Behavior

Example: U-Turn for sixPoint Ramps

In case the motion direction is changed during motion in velocity mode (by direct assignment of VMAX) or in positioning mode (due to XTARGET reassignment), the following process is triggered:

1. Motion is directed to VACTUAL = 0.
2. i If VSTOP is used (≠ 0), motion terminates at VSTOP.
2. A standstill phase of TZEROWAIT clock cycles (register 0x7B) occurs.
4. i It is recommended to assign TZEROWAIT &gt; 0, if VSTOP and/or a trapezoidal ramp type are used, because motor oscillations can occur that must peter out.
3. Motion continues to the actual XTARGET (positioning mode), or to the newly assigned VMAX (velocity mode).
6. i If VSTART is used  (≠ 0), motion begins with VSTART if TZEROWAIT &gt; 0.

After reaching VSTOP, TZEROWAIT clock cycles are waited until motion continues to peter out motor oscillations.

Figure 29: Example for U-Turn Behavior of sixPoint Ramp

<!-- image -->

-   Turn page for information on U-Turn for S-shaped ramps.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Example: U-Turn for S-shaped Ramps

Continuous Velocity Motion Profile for S-shaped Ramps

When VACTUAL = 0 is  reached,  motion  immediately  continues.  In  most  S-shaped ramp applications that do not use VSTOP, a standstill phase is not required. If ASTART &gt; 0 and/or DFINAL &gt; 0, these parameters are also used during U-Turn.

Figure 30: Example for U-Turn Behavior of S-shaped Ramp

<!-- image -->

There is one exception to the above explained U-Turn process:

In case BOW2 equals BOW4 , the S-shaped ramp is not stopped at VACTUAL = 0. While passing VACTUAL = 0, motion acceleration does not equal 0. Thus, the fastest possible U-Turn behavior for this ramp is created.

In the figure below, this velocity ramp behavior is depicted as bold black line, whereas the velocity ramp behavior of the process explained above is depicted gray line:

Figure 31: Direct transition via VACTUAL=0 for S-shaped Ramps

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Internal Ramp Generator Units

## This section provides information about the arithmetical units of the ramp parameters.

All parameter units are real arithmetical units.

Therefore, it is necessary to set the CLK\_FREQ register 0x31 to proper [Hz] value, which is defined by the external clock frequency fCLK. Any value between fCLK = 4.2 MHz and 32 MHz can be selected.

Default configuration is 16 MHz.

Velocity values are always defined as pulses per second [pps].

VACTUAL is given as a  32-bit  signed  value  with  no  decimal  places.  The  unsigned velocity values VSTART, VSTOP, and VBREAK consist of 23 digits and 8 decimal places. VMAX is a signed value with 24 digits and 8 decimal places.

The maximum velocity VMAX is restricted as follows:

Velocity mode:

|VMAX| ≤ ½ pulse · fCLK

Positioning mode:  |VMAX| ≤ ¼ pulse · fCLK

## NOTE:

-  In case VACTUAL exceeds this limit INCORRECT step pulses at STPOUT output occur and/or positioning is not executed properly.

Furthermore, VMAX have to be the highest nominal value of all velocity values:

|VMAX|&gt; max(VSTART;VSTOP;VBREAK)

The unsigned values AMAX, DMAX, ASTART, DFINAL, and DSTOP consist of 22 digits and 2 decimal places.

AACTUAL shows a 32-bit nondecimal signed value. Acceleration and deceleration units are defined per default as pulses per second² [pps²].

If higher acceleration/deceleration values are required for short and steep ramps, do as follows:

## Action:

 Set direct\_acc\_val\_en =1 (GENERAL\_CONF register 0x00).

## Result:

The  parameters  are  defined  as  velocity  value  change  per  clock  cycle  with  24-bit unsigned decimal places (MSB =2 -14 ). The values are calculated as follows:

```
AMAX [pps 2 ] = AMAX / 2 37  · fCLK 2 DMAX [pps 2 ] = DMAX / 2 37  · fCLK 2 ASTART [pps 2 ] = ASTART / 2 37  · fCLK 2 DFINAL [pps 2 ] = DFINAL / 2 37  · fCLK 2
```

DSTOP [pps 2 ] = DSTOP / 2 37  · fCLK 2

The maximum acceleration or deceleration values are as follows:

max(AMAX;DMAX;ASTART;DFINAL;DSTOP)  [pps²] ≤ VMAX · fCLK / 1024

In case direct\_acc\_val\_en = 1, the maximum value is also limited to:

max(AMAX;DMAX;ASTART;DFINAL;DSTOP)  ≤ 2 20

-   Continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

## Clock Frequency

## Velocity Value Units

## Acceleration Value Units

<!-- image -->

## Bow Value Units

## Bow values BOW1…BOW4:

Bow values are unsigned 24-bit values without decimal places. They are defined per default as pulses per second³ [pps³].

## In case higher bow values are required for short and steep ramps, do as follows:

## Action:

 Set direct\_bow\_val\_en =1 (GENERAL\_CONF register 0x00)

## Result:

The parameters are defined as acceleration value change per clock cycle with 24-bit unsigned decimal places with the MSB defined as 2 -29 .

The particular bow values BOW1, BOW2, BOW3, BOW4 are calculated as follows:

BOWx [pps 3 ] = BOWx / 2 53  · fCLK 3

## The maximum bow values are as follows:

max(BOW1…4)  [pps³] ≤ max(AMAX;DMAX) [pps²] · fCLK / 1024

## In case direct\_bow\_val\_en = 1, the maximum value is also limited to:

max(BOW1…4)  ≤ 2 20

## Overview of Minimum and Maximum Values:

Table 18: Minimum and Maximum Values if Real World Units are selected

| Minimum and Maximum Values (Frequency Mode and in general)   | Minimum and Maximum Values (Frequency Mode and in general)   | Minimum and Maximum Values (Frequency Mode and in general)   | Minimum and Maximum Values (Frequency Mode and in general)   | Minimum and Maximum Values (Frequency Mode and in general)   |
|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| Value Classes                                                | Velocity                                                     | Acceleration                                                 | Bow                                                          | Clock                                                        |
| Affected Registers                                           | VMAX, VSTART, VSTOP, VBREAK                                  | AMAX, DMAX, ASTART, DFINAL                                   | BOW1, BOW2, BOW3, BOW4                                       | CLK_FREQ (f CLK )                                            |
| Minimum Nominal Value                                        | 3.906 mpps                                                   | 0.25 mpps 2                                                  | 1 mpps 3                                                     | 4.194 MHz                                                    |
| Maximum Nominal Value                                        | 8.388 Mpps                                                   | 4.194 Mpps 2                                                 | 16.777 Mpps 3                                                | 32 MHz                                                       |
| Maximum Related Value                                        | Velocity mode: ½pulse · f CLK                                | VMAX · f CLK / 1024                                          | max( AMAX;DMAX ) · f CLK / 1024                              |                                                              |
| Maximum Related Value                                        | Positioning mode: ¼pulse · f CLK                             | VMAX · f CLK / 1024                                          | max( AMAX;DMAX ) · f CLK / 1024                              |                                                              |
| Maximum Related Value                                        | &#124; VMAX &#124; > max( VSTART ; VSTOP ; VBREAK )          | VMAX · f CLK / 1024                                          | max( AMAX;DMAX ) · f CLK / 1024                              |                                                              |

Table 19: Minimum and Maximum Values for Steep Slopes for fCLK =16MHz

| Minimum and Maximum Values for Steep Slopes (Direct Mode, example with f CLK =16MHz)   | Minimum and Maximum Values for Steep Slopes (Direct Mode, example with f CLK =16MHz)   | Minimum and Maximum Values for Steep Slopes (Direct Mode, example with f CLK =16MHz)   |
|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Value Classes                                                                          | Acceleration ( direct_acc_val_en =1)                                                   | Bow ( direct_bow_val_en =1)                                                            |
| Affected Registers                                                                     | AMAX, DMAX, ASTART, DFINAL, DSTOP                                                      | BOW1, BOW2, BOW3, BOW4                                                                 |
| Calculation                                                                            | a[pps²] = (∆v/clk_cycle) / 2 37 · f CLK 2                                              | bow[pps³] = (∆a/clk_cycle) / 2 53 · f CLK 3                                            |
| Minimum Nominal Value                                                                  | ~1.86 kpps²                                                                            | ~454.75 kpps³                                                                          |
| Maximum Nominal Value                                                                  | ~1.95 Gpps²                                                                            | ~476.837 Gpps 3                                                                        |
| Maximum Related Value                                                                  | VMAX · 15625 Hz                                                                        | max( AMAX;DMAX ) · 15625 Hz                                                            |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 7. External Step Control and Electronic Gearing

Steps can also be generated by external steps that are manipulated internally by an electronic gearing process. In the following chapter, steps generation by external control and electronic gearing is presented.

Table 20: Pins used for External Step Control

| Pins for External Step Control   | Pins for External Step Control   | Pins for External Step Control   |
|----------------------------------|----------------------------------|----------------------------------|
| Pin Names                        | Type                             | Remarks                          |
| STPIN                            | Input                            | Step input signal.               |
| DIRIN                            | Input                            | Direction input signal.          |

Table 21: Registers used for External Step Control

| Registers used for external Step Control   | Registers used for external Step Control   | Registers used for external Step Control   | Registers used for external Step Control                                               |
|--------------------------------------------|--------------------------------------------|--------------------------------------------|----------------------------------------------------------------------------------------|
| Register Name                              | Register Address                           | Register Address                           | Remarks                                                                                |
| GENERAL_CONF                               | 0x00                                       | RW                                         | Bits 9:6, 26.                                                                          |
| GEAR_RATIO                                 | 0x12                                       | RW                                         | Electronic gearing factor; signed; 32 bits=8+24 (8-bit digits, 24-bit decimal places). |

In  order  to  synchronize  with  other  motion  controllers,  TMC4331A  offers  a  step direction input interface at the STPIN and DIRIN input pins.

- i Three options are available. In case one of these options is selected, the internal step generator is disabled.

## OPTION 1: HIGH ACTIVE EXTERNAL STEPS

## Action:

-  Set sdin\_mode = b'01 (GENERAL\_CONF register 0x00).

## Result:

As soon as the STPIN input signal switches to high state the control unit recognizes an external step.

## OPTION 2: LOW ACTIVE EXTERNAL STEPS

## Action:

-  Set sdin\_mode = b'10 (GENERAL\_CONF register 0x00).

## Result:

As soon as the STPIN input signal switches to low state the control unit recognizes an external step.

## OPTION 3: TOGGLING EXTERNAL STEPS

## Action:

-  Set sdin\_mode = b'11 (GENERAL\_CONF register 0x00).

## Result:

As  soon  as  the  STPIN  input  signal  switches  to  low  or  high  state  the  control  unit recognizes an external step.

-   Continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

## Enabling External Step Control

<!-- image -->

## Selecting the Input Direction Polarity

## Description of Electronic Gearing

## Indirect External Control

<!-- image -->

DIRIN polarity can be assigned. Per default, the negative direction is  indicated by DIRIN = 0.

## In order to change this polarity:

## Action:

 Set pol\_dir\_in = 1 (GENERAL\_CONF register 0x00).

## Result:

A negative input direction is assigned by DIRIN = 1.

If an external step is not congruent with an internal step, the GEAR\_RATIO register 0x12 must be set accordingly. This signed parameter consists of eight bit digits and 24 bits decimal places.

With  every  external  step  the  assigned GEAR\_RATIO  value  is  added  to  an  internal accumulation register. As soon as an overflow occurs, an internal step is generated and the remainder will be kept for the next external step. Any absolute gearing value between 2 -24  and 127 is possible.

## NOTE:

-  Gearing ratios beyond 1 are more reasonable for the SPI output. The internal SinLUTable  is  used  that  generates  multiple  steps  one  after  another  without interpolation, if the accumulation register value is above 1. In contrast to a burst of steps at the STPOUT pin, the SPI output will only forward the new position in the inner SinLUT where only some values have been skipped if |GEAR\_RATIO|&gt;1.
-  A negative gearing factor GEAR\_RATIO &lt; 0 inverts the interpretation of the input direction which is determined by DIRIN and pol\_dir\_in.

It is possible to use the internal ramp generator in combination with the external S/D interface.

In  this  case,  the  external  step  impulses  transferred  via  STPIN  and  DIRIN  cannot influence  the  internal XACTUAL counter directly. Instead,  the XTARGET register  is altered by 1 or -1 with every GEAR\_RATIO accumulation register overflow.

## NOTE:

-  Whether XTARGET is increased or decreased is determined similarly to the direct electronic gearing control. The accumulation register overflow direction indicates the target alteration. Respectively, the accumulation direction is determined by the GEAR\_RATIO sign, by pol\_dir\_in, and by DIRIN.
-  Consecutive input steps must occur with a distance of minimum 64 clock cycles.
- i This  feature  allows  a  synchronized  motion  of  different  positioning  ramps  for different TMC4331A chips with differently configured ramps.

## In order to select indirect external control, do as follows:

## Action:

-  Set sdin\_mode ≠ b'00 according to the required external control option.
-  Set sd\_indirect\_control = 1 (GENERAL\_CONF register 0x00).

## Result:

As  soon  as  an  external  step  is  generated, XTARGET  is  increased  or  decreased, according to the accumulation direction.

<!-- image -->

## Switching from External to Internal Control

## Smooth Switching for S-shaped Ramps

In some cases, it is useful to switch from external to internal ramp generation during motion.

TMC4331A supports a smooth transfer from direct external control to an internal ramp. The only parameter you need to know and apply is the current velocity when the switching occurs. In more detail, this means that when the external control is switched off, VSTART takes over the definition of the actual velocity value. The ramp direction is then selected automatically. The time step of the last internal step is also taken into account in order to provide a smooth transition from external to internal ramp control.

In order to select automatic switching from external to internal control, do as follows:

## PRECONDITION (EXTERNAL DIRECT CONTROL IS ACTIVE):

## Action:

-  Set sdin\_mode ≠ b'00 (GENERAL\_CONF register 0x00).
-  Set sd\_indirect\_control = 0 (GENERAL\_CONF register 0x00).
-  Set ASTART = 0 (register 0x2A).

## PROCEED WITH:

## Action:

-  Set automatic\_direct\_sdin\_switch\_off = 1  (GENERAL\_CONF register 0x00) once before switching to internal control.
-  Continually  adapt VSTART  register 0x25  according to the actual velocity of the TMC4331A that must be calculated in the µC.
-  If switching must be prompted, set sdin\_mode = b'00.

## Result:

The internal ramp velocity is started with the value of VSTART, and the direction is set automatically on the basis of the external steps that have occurred before.

In order to also support a smooth S-shaped ramp transition - when the external step control is switched off - the starting acceleration value can also be set separately at ASTART register 0x2A.

- i In contrast to the automatic direction assignment, the sign of ASTART must be set manually.

In order to select automatic switching from external to internal control with a starting acceleration value, do as follows:

## PRECONDITION (EXTERNAL DIRECT CONTROL IS ACTIVE):

## Action:

-  Set sdin\_mode ≠ b'00 (GENERAL\_CONF register 0x00).
-  Set sd\_indirect\_control = 0 (GENERAL\_CONF register 0x00).

## PROCEED WITH:

## Action:

-  Set automatic\_direct\_sdin\_switch\_off = 1 once before switching to internal control.
-  Continually  adapt VSTART  register 0x25  according to the actual velocity of the TMC4331A - that must be calculated in the µC.
-  Continually adapt ASTART according to the actual acceleration (unsigned value) of the TMC4331A - that must be calculated in the µC.
-  Continually set ASTART(31) = 0 or 1 according to the acceleration direction.
-  If switching must be prompted, set sdin\_mode = b'00.

## Result:

The internal ramp velocity is started with the value of VSTART, and the direction is set automatically on the basis of the external steps that have occurred before. The internal acceleration value is set to: +ASTART if ASTART(31) = 0 or

-ASTART

if ASTART(31) = 1.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 8. Reference Switches

The reference input signals of the TMC4331A function partly as safety features. The TMC4331A provides  a  range  of  reference  switch  settings  that  can  be  configured  for  many  different applications. The TMC4331A offers two hardware switches (STOPL, STOPR) and two additional virtual  stop  switches  (VIRT\_STOP\_LEFT, VIRT\_STOP\_RIGHT).  A  home  reference  switch HOME\_REF is also available.

Table 22: Pins used for Reference Switches

| Pins used for Reference Switches   | Pins used for Reference Switches   | Pins used for Reference Switches                |
|------------------------------------|------------------------------------|-------------------------------------------------|
| Pin Names                          | Type                               | Remarks                                         |
| STOPL                              | Input                              | Left reference switch.                          |
| STOPR                              | Input                              | Right reference switch.                         |
| HOME_REF                           | Input                              | Home switch.                                    |
| TARGET_REACHED                     | Output                             | Reference switch to indicate XACTUAL = XTARGET. |

Table 23: Dedicated Registers for Reference Switches

| Dedicated Registers for Reference Switches   | Dedicated Registers for Reference Switches   | Dedicated Registers for Reference Switches   | Dedicated Registers for Reference Switches                                                                                                                         |
|----------------------------------------------|----------------------------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Register Name                                | Register Address                             | Register Address                             | Remarks                                                                                                                                                            |
| REFERENCE_CONF                               | 0x01                                         | RW                                           | Configuration of interaction with reference pins.                                                                                                                  |
| HOME_SAFETY_MARGIN                           | 0x1E                                         | RW                                           | Region of uncertainty around X_HOME.                                                                                                                               |
| DSTOP                                        | 0x2C                                         | RW                                           | Deceleration value if stop switches STOPL / STOPR or virtual stops are used with soft stop ramps. The deceleration value allows for an automatic linear stop ramp. |
| POS_COMP                                     | 0x32                                         | RW                                           | Free configurable compare position; signed; 32 bits.                                                                                                               |
| VIRT_STOP_LEFT                               | 0x33                                         | RW                                           | Virtual left stop that triggers a stop event at XACTUAL ≤ VIRT_STOP_LEFT ; signed; 32 bits.                                                                        |
| VIRT_STOP_RIGHT                              | 0x34                                         | RW                                           | Virtual left stop that triggers a stop event at XACTUAL ≥ VIRT_STOP_RIGHT ; signed; 32 bits.                                                                       |
| X_HOME                                       | 0x35                                         | RW                                           | Home reference position; signed; 32 bits.                                                                                                                          |
| X_LATCH                                      | 0x36                                         | RW                                           | Stores XACTUAL at different conditions; signed; 32 bits.                                                                                                           |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Hardware Switch Support

## The TMC4331A offers two hardware switches that can be configured according to your design.

## STOPL and STOPR

Stop Slope Configuration for Hard or Linear Stop Slopes

<!-- image -->

The hardware provides a left and a right stop in order to stop the drive immediately in case one of them is triggered. Therefore, pin 12 and pin 14 of the motion controller must be used.

## NOTE:

-  Both switches must be enabled before motion occurs.

## In order to enable STOPL correctly, do as follows:

## Action:

-  Determine the active polarity voltage of STOPL and set pol\_stop\_left (REFERENCE\_CONF register 0x01) accordingly.
-  Set stop\_left\_en =1 (REFERENCE\_CONF register 0x01).

## Result:

The current velocity ramp stops in case the STOPL voltage level matches pol\_stop\_left and VACTUAL &lt; 0.

## In order to enable STOPR correctly, do as follows:

## Action:

-  Determine the active polarity voltage of STOPR and set pol\_stop\_right (REFERENCE\_CONF register 0x01) accordingly.
-  Set stop\_right\_en =1 (REFERENCE\_CONF register 0x01).

## Result:

The current velocity ramp stops in case STOPR voltage level matches pol\_stop\_right and VACTUAL &gt; 0.

The stop slope can be configured for hard or linear stop slopes. Per default, hard stops are selected.

## If hard stops are required, do as follows:

## OPTION 1: HARD STOP SLOPES

## Action:

-  Set soft\_stop\_en =0 (REFERENCE\_CONF register 0x01).

## Result:

If one of the stop switches is active and enabled, the velocity ramp is set immediately to VACTUAL = 0.

## OPTION 2: LINEAR STOP SLOPES

## If linear stop ramps are required:

## Action:

-  Set proper DSTOP &gt; max(DMAX; DFINAL) (register 0x2C).
-  Set soft\_stop\_en =1 (REFERENCE\_CONF register 0x01).

## Result:

If one of the stop switches is active and enabled, the velocity ramp is stopped with a linear deceleration slope until VACTUAL = 0 is reached. In this case the deceleration factor is determined by DSTOP. VSTOP is not considered during the stop deceleration slope.

<!-- image -->

## How Active Stops are indicated and reset to Free Motion

## How to latch Internal Position on Switch Events

When  a  enabled  stop  switch  becomes  active  the  related  status  flag  is  set  in  the STATUS flags register 0x0F. The flag remains active as long as the stop switch remains active.

The particular event is also released in the EVENTS register 0x0E, which remains active until the event bit is reset manually. When VACTUAL = 0 is reached after the stop event no motion toward this particular direction is possible.

## In order to move into the locked direction, the following is required:

## PRECONDITION 1:

The particular stop switch is NOT active anymore.

## AND/OR

## PRECONDITION 2:

The stop switch is disabled (stop\_left/right\_en = 0).

## Action:

-  Set back the active event by reading out or writing to the EVENTS register 0x0E.
- i See further  information about clearing events provided in section 5.1. , Page 21.

## Result:

The active stop event is reset to free motion into the locked direction.

It  is  possible  to  select  four  different  events  to  store  the  current  internal  position XACTUAL in the register X\_LATCH.

The table below show which transition of the reference signal leads to the X\_LATCH transfer.  For  each  transition  process  the  specified  reference  configurations  in  the REFERENCE\_CONF register 0x01 must be set accordingly.

Table 24: Reference Configuration and Corresponding Transition of particular Reference Switch

| Reference Configuration   | pol_stop_left =0   | pol_stop_left =1   | pol_stop_right =0   | pol_stop_right =1   |
|---------------------------|--------------------|--------------------|---------------------|---------------------|
| latch_x_on_inactive_l=1   | STOPL=0  1        | STOPL=1  0        | ---                 | ---                 |
| latch_x_on_active_l=1     | STOPL=1  0        | STOPL=0  1        | ---                 | ---                 |
| latch_x_on_inactive_r=1   | ---                | ---                | STOPR=0  1         | STOPR = 1  0       |
| latch_x_on_active_r=1     | ---                | ---                | STOPR=1  0         | STOPR = 0  1       |

Interchange the Reference Switches without Physical Reconnection

If  you  need  to  change  the  directions  of  the  reference  switches,  do  as follows:

## Action:

 Set invert\_stop\_direction = 1 (REFERENCE\_CONF register 0x01).

## Result:

STOPL is now the right reference switch and STOPR is now the left reference switch. Consequently, all configuration parameters for STOPL become valid for STOPR and vice versa.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Virtual Stop Switches

TMC4331A provides  additional  virtual  limits;  which  trigger  stop  slopes  in  case  the  specific virtual stop switch microstep position is reached. Virtual stop positions are assigned using the VIRTUAL\_STOP\_LEFT register 0x33 and VIRTUAL\_STOP\_RIGHT register 0x34. In this section, configuration details for virtual stop switches are provided for various design-in purposes.

## NOTE:

-  Virtual stop switches must be enabled in the same manner as nonvirtual reference switches. Hitting a virtual limit switch - by receiving the assigned position - triggers the same process as hitting STOPL or STOPR.

In order to enable left virtual stop correctly, do as follows:

## Action:

-  Set VIRTUAL\_STOP\_LEFT register 0x33 according to left stop position.
-  Set virtual\_left\_limit\_en =1 (REFERENCE\_CONF register 0x01).

## Result:

The actual velocity ramp stops in case XACTUAL ≤ VIRT\_STOP\_LEFT. The ramp is stopped according to the selected ramp type.

## In order to enable right virtual stop correctly, do as follows:

## Action:

-  Set VIRTUAL\_STOP\_RIGHT register 0x34 according to right stop position.
-  Set virtual\_right\_limit\_en =1 (REFERENCE\_CONF register 0x01).

## Result:

The actual velocity ramp stops in case XACTUAL ≥ VIRT\_STOP\_RIGHT. The ramp is stopped according to the selected ramp type.

The virtual stop slope can also be configured for hard or linear stop slopes.

If virtual hard stops are required, do as follows:

## Action:

-  Set virt\_stop\_mode = b'01 (REFERENCE\_CONF register 0x01).

## Result:

If one of the virtual stop switches is active and enabled, the velocity ramp will be set immediately to VACTUAL = 0.

## If virtual linear stop ramps are required, do as follows:

## Action:

-  Set proper DSTOP &gt; max(DMAX; DFINAL) (register 0x2C).
-  Set virt\_stop\_mode = b'10 (REFERENCE\_CONF register 0x01).

## Result:

If one of the virtual stop switches is active and enabled, the velocity ramp is stopped with  a  linear  deceleration  slope  until VACTUAL  =  0  is  reached.  In  this  case  the deceleration factor is determined by DSTOP. VSTOP is not considered during the stop deceleration slope.

-   Continued on next page.

## Enabling Virtual Stop Switches

## Virtual Stop Slope Configuration

<!-- image -->

<!-- image -->

## How Active Virtual Stops are indicated and reset to Free Motion

<!-- image -->

At the same time when an enabled virtual stop switch becomes active the related status flag is activated in the STATUS flags register 0x0F. The flag remains active as long as the stop switch remains active.

The particular event is also released in the EVENTS register 0x0E, which remains active until the event is reset manually. When VACTUAL = 0 is reached after the stop event no motion in the particular direction is possible.

## In order to move into the locked direction, the following is required:

## PRECONDITION 1:

The particular stop switch is NOT active anymore because the actual position does not exceed the specified limit.

## AND/OR

## PRECONDITION 2:

Virtual stop switch is disabled (virtual\_left/right\_limit\_en = 0).

## Action:

-  Set back active event by reading out or writing to the EVENTS register 0x0E.
- i See further  information about clearing events provided in section 5.1. , Page 21.

## Result:

The active virtual stop event bit is reset to free motion into the direction that was locked beforehand.

- i invert\_stop\_direction has no influence on VIRTUAL\_STOP\_LEFT and VIRTUAL\_STOP\_RIGHT.

<!-- image -->

## Home Reference Configuration

In  this  section  home  reference  switch  handling  is  explained  with  information  about  home tracking modes, possible home event configurations and home event monitoring.

## Switch

Reference Input HOME\_REF

## Home Event Selection

For monitoring, the switch reference input HOME\_REF is provided.

Perform the following to initiate the homing process:

## Action:

-  Assign a ramp according to your needs for the homing process.
-  Enable the home tracking mode with start\_home\_tracking = 1 (REFERENCE\_CONF register 0x01).
-  Set the correct home\_event (REFERENCE\_CONF register 0x01) for the HOME\_REF input pin (see table below).
-  Start the ramp towards the home switch HOME\_REF.

## Result:

-  When the next home event is recognized by TMC4331A, XACTUAL is latched to X\_HOME.
-  At the same time, the start\_home\_tracking switch is disabled automatically in case XLATCH\_DONE event is cleared.
-  The XLATCH\_DONE event is released in the events register 0x0E. This event can be used for an interrupt routine for the homing process in order to avoid polling.
- i X\_HOME can be overwritten manually.

Eight different home events are possible.

- i Home events are related to the voltage levels of the HOME\_REF input pin:

Table 25: Overview of different home\_event Settings

| Home Event Selection Table   | Home Event Selection Table                                       | Home Event Selection Table                                       | Home Event Selection Table              |
|------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|-----------------------------------------|
| home_event                   | Description                                                      | Description                                                      | X_HOME (direction: negative / positive) |
| b'0011                       | HOME_REF = 0 indicates negative direction in reference to X_HOME | HOME_REF = 0 indicates negative direction in reference to X_HOME | HOME_REF 0 1                            |
| b'1100                       | HOME_REF = 0 indicates positive direction in reference to X_HOME | HOME_REF = 0 indicates positive direction in reference to X_HOME | HOME_REF 0 1                            |
| b'0110                       | HOME_REF = 1 indicates home position                             | X_HOME in center                                                 | HOME_REF 0 1                            |
| b'0010                       | HOME_REF = 1 indicates home position                             | X_HOME on the left side                                          | HOME_REF 0 1                            |
| b'0100                       | HOME_REF = 1 indicates home position                             | X_HOME on the right side                                         | HOME_REF 0 1                            |
| b'1001                       | HOME_REF = 0 indicates home position                             | X_HOME in center                                                 | HOME_REF 0 1                            |
| b'1011                       | HOME_REF = 0 indicates home position                             | X_HOME on the right side                                         | HOME_REF 0 1                            |
| b'1101                       | HOME_REF = 0 indicates home position                             | X_HOME on the left side                                          | HOME_REF 0 1                            |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## HOME\_REF Monitoring Defining a Home

Range around HOME\_REF

## Homing with STOPL or STOPR

<!-- image -->

An  error  flag HOME\_ERROR\_F is permanently  evaluated.  This  error  flag  indicates whether the current voltage level of the HOME\_REF reference input is valid in regard to X\_HOME and the selected home\_event.

In  order  to  avoid  false  error  flags  (HOME\_ERROR\_F)  because  of  mechanical inaccuracies, it is possible to setup an uncertainty home range around X\_HOME. In this range, the error flag is not evaluated.

## If you want to define an uncertainty area around X\_HOME, do as follows:

## Action:

-  Set HOME\_SAFETY\_MARGIN register 0x1E according to the required range [ustep].

## Result:

The  homing  uncertainties  -  related  to  the  special  application  environment  -  are considered for the ongoing motion. The error flag is NOT evaluated in the following range:

X\_HOME - HOME\_SAFETY\_MARGIN ≤ XACTUAL ≤ X\_HOME + HOME\_SAFETY\_MARGIN

## NOTE:

-  It is recommended to assign to a higher range value for HOME\_SAFETY\_MARGIN in  which  the  HOME\_REF  level  is  active  for  the  home\_events  b'0110,  b'0010, b'0100, b'1001, b'1011, and b'1101. It avoids false positive HOME\_ERROR\_Flags.
-  The following  examples illustrate the points at which the error flag is release - based on the selected home\_event - here for home\_event = b'0011 (*), b'1100 (**), b'0110 (***), b'0010 (***), b'0100 (***), b'1001 (****), b'1011 (****), and b'1101 (****).

Figure 32: HOME\_REF Monitoring and HOME\_ERROR\_FLAG

<!-- image -->

STOPL and STOPR inputs can also be used as HOME\_REF inputs.

## OPTION 1: STOPL IS THE HOME SWITCH

## Action:

-  Set stop\_left\_is\_home = 1 (REFERENCE\_CONF register 0x01).

## Result:

The stop event at STOPL only occurs when the home range is crossed after STOPL becomes active. The home range is given by X\_HOME and HOME\_SAFETY\_MARGIN.

## OPTION 2: STOPR IS HOME SWITCH

## Action:

-  Set stop\_right\_is\_home = 1 (REFERENCE\_CONF register 0x01).

## Result:

The stop event at STOPR only occurs when the home region is crossed after STOPR becomes active. The home region is given by X\_HOME and HOME\_SAFETY\_MARGIN.

<!-- image -->

## Target Reached / Position Comparison

In this section, TARGET\_REACHED output pin configuration options are explained, as well as different ways how to compare different values internally.

## Target Reached Output Pin

## Connecting several Target-reached Pins

<!-- image -->

TARGET\_REACHED  output  pin  forwards  the TARGET\_REACHED\_Flag.  As  soon  as XACTUAL equals XTARGET, TARGET\_REACHED is active. Per default, the TARGET\_REACHED pin is high active.

## To change the TARGET\_REACHED output polarity, do the following:

## Action:

 Set invert\_pol\_target\_reached = 1 (bit16 of the GENERAL\_CONF register 0x00).

## Result:

TARGET\_REACHED pin is low active.

TARGET\_REACHED pins can also be configured for a shared signal line in the same way  as  several  INTR  pins  can  configured  for  one  interrupt  signal  transfer  -  see section 5.4. (page 23).

To use a Wired-Or or Wired-And behavior, the below described order of action must be executed:

## Action:

 Step 1: Set intr\_tr\_pu\_pd\_en = 1 (GENERAL\_CONF register 0x00).

## OPTION 1: WIRED-OR

## Action :

-  Step 2: Set tr\_as\_wired\_and = 0 (GENERAL\_CONF register 0x00).

## Result:

The TARGET\_REACHED pin works efficiently as Wired-Or (default configuration).

- i In  case  TARGET\_REACHED  pin  is  inactive,  the  pin  drive  has  a  weak  inactive polarity output. During active state, the output is driven strongly. Consequently, if one of the connected pins is activated, the whole line is set to active polarity.

## OPTION 2: WIRED-AND

## Action:

-  Step 2: Set tr\_as\_wired\_and = 1 (GENERAL\_CONF register 0x00).

## Result:

As long as the target position is not reached, the TARGET\_REACHED pin has a strong inactive polarity output. During active state, the pin drive has a weak active polarity output.  Consequently,  the  whole  signal  line  is  activated  if  all  connected  pins  are forwarding the active polarity.

<!-- image -->

## Use of TARGET\_REACHED Output

Per  default,  TARGET\_REACHED  pin  forwards  the TARGET\_REACHED\_Flag  that  signifies XACTUAL = XTARGET. The pin can also be used to forward two other flags: VELOCITY\_REACHED\_Flag, POS\_COMP\_REACHED\_Flag.

## NOTE:

-  Only one option can be selected.

Three Options for TARGET\_REACHE D

The TARGET\_REACHED output pin configuration switch is available at REFERENCE\_CONF register 0x01.

The available optons are as follows:

Table 26: TARGET\_REACHED Output Pin Configuration

| TARGET_REACHED Output Pin Configuration   | TARGET_REACHED Output Pin Configuration   |
|-------------------------------------------|-------------------------------------------|
| If pos_comp_output equals…                | Then TARGET_REACHED forwards…             |
| b'00                                      | TARGET_REACHED_F lag                      |
| b'01                                      | VELOCITY_REACHED_F lag                    |
| b'11                                      | POS_COMP_REACHED_F lag                    |

## Position Comparison of Internal Values

TMC4331A  provides  several  ways  of  comparing  internal  values.  The  position  comparison process  is  permanently  active  and  associated  with  one  flag  and  one  event.  A  positive comparison result  can  be  forwarded  through  the  INTR  pin  using  the  POS\_COMP\_REACHED event as interrupt source or by using the TARGET\_REACHED pin as explained before.

## Basic

Comparison Settings

Comparison selection grid

## SETTINGS ALERT !

How to compare the internal position with an arbitrary value:

## Action:

-  Select a comparison value in the POS\_COMP register 0x32.
-  Select pos\_comp\_source = 0 (REFERENCE\_CONF register 0x01).

## Result:

XACTUAL  is  compared  with POS\_COMP.  When  POS\_COMP  equals XACTUAL  the POS\_COMP\_REACHED\_Flag  becomes  set  and  the POS\_COMP\_REACHED  event becomes released.

In addition to comparing XACTUAL with POS\_COMP, it is also possible to conduct a comparison of one of both parameters with X\_HOME or X\_LATCH. TMC4331A also allows comparison of the revolution counter REV\_CNT against POS\_COMP.

Only  the  selected  combination  generates  the  POS\_COMP\_REACHED\_Flag and the corresponding event. Therefore, select modified\_pos\_compare in the REFERENCE\_CONF register 0x01 as outlined in the table below:

Table 27: Comparison Selection Grid to generate POS\_COMP\_REACHED\_Flag

| Comparison Selection Grid   | Comparison Selection Grid          |
|-----------------------------|------------------------------------|
| modified_pos_compare        | POS_COMP_REACHED_Flag is based on… |
| '00'                        | XACTUAL vs. POS_COMP               |
| '01'                        | XACTUAL vs. X_HOME                 |
| '10'                        | XACTUAL vs . X_LATCH               |
| '11'                        | REV_CNT vs. POS_COMP               |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Repetitive and Circular Motion

TMC4331A also provides options for auto-repetitive  or auto-circular  motion. In this section configuration options are explained.

Per default, reaching XTARGET in positioning mode finishes a positioning ramp.

In order to continuously repeat the specified ramp, do as follows:

## PRECONDITION:

-  Set RAMPMODE(2) = 1 (positioning mode is active).
-  Configure a velocity ramp according to your requirements.

## Action:

-  Set clr\_pos\_at\_target =1 (REFERENCE\_CONF register 0x01).

## Result:

After XTARGET is reached (TARGET\_REACHED\_Flag is active), XACTUAL is set to 0. As long as XTARGET is NOT 0, the ramp restarts in order to reach XTARGET again. This leads to repetitious positioning ramps from 0 towards XTARGET.

## NOTE:

-  It is possible to change XTARGET during repetitive motion. The reset of XACTUAL to 0 is always executed when XACTUAL equals XTARGET.

If  circular  motion  profiles  are  necessary  for  your  application,  TMC4331A  offers  a position limitation range of XACTUAL with an automatic overflow processing. As soon as XACTUAL reaches one of the two position range limits (positive / negative), the value of XACTUAL is set automatically to the value of the opposite range limit.

## In order to activate circular motion, do as follows:

## PRECONDITION:

If you want to activate circular motion, XACTUAL must be located within the defined range.

## PROCEED WITH:

## Action:

-  Set X\_RANGE ≠ 0 (register 0x36, only writing access!).
-  Set circular\_motion = 1 (REFERENCE\_CONF register 0x01).

## Result:

The positioning range of XACTUAL is limited to: -X\_RANGE ≤ XACTUAL &lt; X\_RANGE.

When XACTUAL reaches the most positive position (X\_RANGE  - 1) and the motion proceeds in positive direction; the next XACTUAL value is set to -X\_RANGE. The same applies to proceeding in negative direction; where (X\_RANGE - 1) is the position after -X\_RANGE.

- i During positioning mode, the motion direction will be dependent on the shortest path to the target position XTARGET.  For  example,  if XACTUAL = 200, X\_RANGE = 300 and XTARGET = -200, the positioning ramp will find its way across the overflow position (299  -300) (see Figure A) in Table 28 (page 62).

<!-- image -->

Repetitive Motion to XTARGET

## Activating Circular Motion

<!-- image -->

## Uneven or Noninteger Microsteps per Revolution

## Example 1: Uneven Number of Microsteps per Revolution

## Example 2: Noninteger Number of Microsteps per Revolution

Example 3: Noninteger and uneven Number of Microsteps per Revolution

Due  to  definition  of  the  limitation  range,  one  revolution  only  consists  of  an  even number of microsteps. TMC4331A provides an option to overcome this limitation.

-  Some applications demand different requirements because a revolution consists of an uneven or noninteger number of microsteps.
-  TMC4331A allows a high adjustment range of microsteps by using: CIRCULAR\_DEC register 0x7C.

This value represents one digit and 31 decimal places as extension for the number of microsteps per one revolution.

-  A revolution is completed at overflow position. With every completed revolution the CIRCULAR\_DEC value is added to an internal accumulation register. In case this register has an overflow, XACTUAL remains at its overflow position for one step.
-  On average, this leads to the following microsteps per revolution:
- Microsteps/rev = (2 · X\_RANGE) + CIRCULAR\_DEC / 2 31 .

One revolution consists of 601 microsteps.

A definition of X\_RANGE = 300 will only provide:

600 microsteps per revolution (-300 ≤ XACTUAL ≤ 299).

Whereas X\_RANGE = 301 will result in:

602 microsteps per revolution (-301 ≤ XACTUAL ≤ 300).

By setting:

<!-- formula-not-decoded -->

An overflow is generated at the decimals accumulation register with every revolution. Therefore, XACTUAL prolongs the step at the overflow position  for one step every time position overflow is overstepped. This results in a microstep count of 601 per revolution.

One revolution consists of 600.5 microsteps.

By setting:

<!-- formula-not-decoded -->

Every  second  revolution  an  overflow  is  produced  at  the  decimals'  accumulation register. This leads to a microstep count of 600 every second revolution and 601 for the  other  half  of  the  revolutions.  On  average,  this  leads  to  600.5  microsteps  per revolution.

One revolution consists of 601.25 microsteps.

By setting:

<!-- formula-not-decoded -->

With every revolution an overflow is produced at the decimals' accumulation register. Furthermore, at every fourth revolution an additional overflow occurs, which leads to another  prolonged  step.  This  leads  to  a  microstep  count  of  601  for  three  of  four revolutions and 602 for every fourth revolution. On average, this results in 601.25 microsteps per revolution.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Release of the Revolution Counter

<!-- image -->

By overstepping the position overflow, the internal REV\_CNT register is increased by one revolution as soon as XACTUAL oversteps from (X\_RANGE - 1) to -X\_RANGE or is  decreased  by  one  revolution  as  soon  as XACTUAL  oversteps  in  the  opposite direction.

The information  about  the  number  of  revolutions  can  be  obtained  by  reading  out register 0x36, which by default is the X\_LATCH register (read only).

## In order to gain information on the number of revolutions:

## Action:

-  Set circular\_cnt\_as\_xlatch = 1 (GENERAL\_CONF register 0x00).

## Result:

Register 0x36 cease to display the X\_LATCH value. Instead, the revolution counter REV\_CNT can be read out at this register address.

## NOTE:

-  As soon as circular motion is inactive (circular\_motion=0), REV\_CNT is reset to 0.

## Blocking Zones

Activating Blocking Zones during Circular Motion

During circular motion, virtual stops can be used to set blocking zones. Positions inside these blocking zones are NOT dedicated for motion.

## In order to activate the blocking zone, do as follows:

## PRECONDITION:

Circular motion is activated (circular\_motion = 0) and properly assigned (X\_RANGE ≠ 0).

## PROCEED WITH:

## Action:

-  Set VIRTUAL\_STOP\_LEFT register 0x33 as left limit for the blocking zone.
-  Set VIRTUAL\_STOP\_RIGHT register 0x34 as right limit for the blocking zone.
-  Enable both virtual limits as explained in section 8.2.1 (page 53).

## Result:

The  blocking  zone  reaches  from VIRTUAL\_STOP\_LEFT  to VIRTUAL\_STOP\_RIGHT. During positioning, the path from XACTUAL to XTARGET does not lead through the blocking zone; which can result in a longer path compared to the direct path through the blocking zone (see Figure B1 in Table 28 (page 62).

However, the selected virtual stop deceleration ramp is initiated as soon as one of the limits is reached. This can result from the velocity mode or if the target XTARGET is located in the blocking zone.

-   Continued on next page.

<!-- image -->

## Blocking Zone Definition

Circular Motion with and without Blocking Zone

The following positions are located within the blocking zone:

XACTUAL ≤ VIRT\_STOP\_LEFT

## AND / OR

XACTUAL ≥ VIRT\_STOP\_RIGHT

## NOTE:

-  In case VIRTUAL\_STOP\_LEFT &lt; VIRTUAL\_STOP\_RIGHT, one of these conditions must be met in order to be located inside the blocking zone.
-  In case VIRTUAL\_STOP\_LEFT &gt; VIRTUAL\_STOP\_RIGHT, both conditions must be met in order to be located inside the blocking zone.

The table below shows circular motion (X\_RANGE = 300). The green arrow depicts the path which is chosen for positioning.

The shortest path selection is shown in Figure A and the consideration of blocking zones are shown in Figures B1 and B2.

Table 28: Circular motion (X\_RANGE = 300)

<!-- image -->

When XACTUAL is located inside the blocking zone, it is possible to move out without redefining the blocking zone.

## In order to get out of the blocking zone, do the following:

## Action:

-  Activate positioning mode: RAMPMODE(2) = 1.
-  Configure velocity ramp according to your needs.
-  Clear virtual stop events by reading out EVENTS register 0x0E.
-  Set regular target position XTARGET outside of the blocking zone.

## Result:

TMC4331A initiates a ramp with the shortest way to the target XTARGET.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Moving out of the Blocking Zone

## 9. Ramp Timing and Synchronization

TMC4331A provides various options to initiate a new ramp. By default, every external register change is assigned immediately to the internal registers via an SPI input. With a proper start configuration, ramp sequences can be programmed without any intervention in between.

Three  levels  of  ramp  start  complexity  are  available.  Predefined  ramp  starts  are available,  which  are  independent  of  SPI  data  transfer  that  are  explained  in  the subsequent section 9.1. (page 64).

Two optional features can be configured that can either be used individually or combined, which are as follows:

A complete shadow motion register set can be loaded into the actual motion registers in order to start the next ramp with an altered motion profile.

Different target positions can be predefined, which are then activated successively. This pipeline can be configured as cyclic; and/or it can also be utilized to sequence different parameters.

Also, another start state 'busy' can be assigned in order to synchronize several motion controllers for one single start event without a master.

Synchronization Opportunities

Shadow Register Set

Target Position Pipeline

Masterless Synchronization

| Dedicated Ramp Timing Pins   | Dedicated Ramp Timing Pins   | Dedicated Ramp Timing Pins                                                                               |
|------------------------------|------------------------------|----------------------------------------------------------------------------------------------------------|
| Pin Names                    | Type                         | Remarks                                                                                                  |
| START                        | Input and Output             | External start input to get a start signal or external start output to indicate an internal start event. |

Table 29: Dedicated Ramp Timing Pins

| Dedicated Ramp Timing Registers   | Dedicated Ramp Timing Registers   | Dedicated Ramp Timing Registers   | Dedicated Ramp Timing Registers                           |
|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------------------------------|
| Register Name                     | Register Address                  | Register Address                  | Remarks                                                   |
| START_CONF                        | 0x02                              | RW                                | The configuration register of the synchronization unit.   |
| START_OUT_ADD                     | 0x11                              | RW                                | Additional active output length of external start signal. |
| START_DELAY                       | 0x13                              | RW                                | Delay time between start triggers and start signal.       |
| X_PIPE0… 7                        | 0x38…0x3F                         | RW                                | Target positions pipeline and/or parameter pipeline.      |
| SH_REG0…12                        | 0x40…0x4C                         | RW                                | Shadow register set                                       |

Table 30: Dedicated Ramp Timing Registers

<!-- image -->

<!-- image -->

## Basic Synchronization Settings

Usually, a ramp can be initiated internally or externally. Note that a start trigger is not the start signal itself but the transition slope to the active start state. After a defined delay, the internal start signal is generated.

For ramp start configuration, consider the following steps:

## Action:

-  Choose internal or external start trigger(s).
-  Set the triggers according to the table below.
- i All triggers can be used separately or in combination.

Table 31: Start Trigger Configuration

| Start Trigger Configuration Table   | Start Trigger Configuration Table                                                                                                                                               |
|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| trigger_events = START_CONF (8:5)   | Result                                                                                                                                                                          |
| b'0000                              | No start signal will be generated or processed further.                                                                                                                         |
| b'xxx0                              | Set trigger_events (0) = 0 for internal start triggers only. The internally generated start signal is forwarded to the START pin that is assigned as output .                   |
| b'xxx1                              | Set trigger_events (0) = 1 for an external start trigger. The START pin is assigned as input . For START input take filter settings into consideration. See chapter 4, page 17. |
| b'xx1x                              | TARGET_REACHED event is assigned as start signal trigger for the ramp timer.                                                                                                    |
| b'x1xx                              | VELOCITY_REACHED event is assigned as start signal trigger for the ramp timer.                                                                                                  |
| b'1xxx                              | POSCOMP_REACHED event is assigned as start signal trigger for the ramp timer.                                                                                                   |

Per default, every SPI datagram is processed immediately. By selecting one of the following  enable  switches,  the  assignment  of  SPI  requests  to  registers XTARGET, VMAX, RAMP\_MODE, and GEAR\_RATIO is uncoupled from the SPI transfer. The value assignment is only processed after an internally generated start signal.

In order to influence the impact of the start signal on internal parameter assignments, do the following:

## Action:

-  Choose between the following options as shown in the table below.

Table 32: Start Enable Switch Configuration

| Start Enable Switch Configuration Table (All switches can be used separately or in combination.)   | Start Enable Switch Configuration Table (All switches can be used separately or in combination.)                                                              |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| start_en = START_CONF (4:0)                                                                        | Result                                                                                                                                                        |
| b'xxxx1                                                                                            | XTARGET is altered only after an internally generated start signal.                                                                                           |
| b'xxx1x                                                                                            | VMAX is altered only after an internally generated start signal.                                                                                              |
| b'xx1xx                                                                                            | RAMPMODE is altered only after an internally generated start signal.                                                                                          |
| b'x1xxx                                                                                            | GEAR_RATIO is altered only after an internally generated start signal.                                                                                        |
| b'1xxxx                                                                                            | Shadow register is assigned as active ramp parameters after an internally generated start signal. This is explained in more detail in section 9.2. (page 69). |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Start Signal Trigger Selection

User-specified Impact Configuration of Timing Procedure

<!-- image -->

## Delay Definition between Trigger and internally generated Start Signal

## Prioritizing External Input

## START Pin Polarity

## Active START Pin Output Configuration

<!-- image -->

Per default, the trigger is closely followed by the internal start signal.

In  order  to  delay  the  generation  of  the  internal  start  signal,  do  the following:

## Action:

 Set START\_DELAY register 0x13 according to your specification.

## Result:

When  a  start  trigger  is  recognized,  the  internal  start  signal  is  generated  after START\_DELAY clock cycles.

Per default, an external trigger is also delayed for the internal start signal generation.

In order to immediately prompt an external start, trigger to an internally generated start signal (regardless of a defined delay), do the following:

## Action:

 Set immediate\_start\_in = 1 (START\_CONF register 0x02).

## Result:

When an external start trigger is recognized, the internal start signal is generated immediately, even if the internal start triggers have already initiated a timing process with an active delay.

The START pin can be used either as input or as output pin. However, the active voltage level polarity of the START pin can be selected with one configuration switch in the START\_CONF register 0x02.

Per default, the voltage level transition from high to low triggers a start signal (START is an input), or START output indicates an active START event by switching from high to low level.

## In order to invert active START polarity, do as follows:

## Action:

-  Set pol\_start\_signal = 1 (START\_CONF register 0x02).

## Result:

The START pin is high active. The voltage level transition from low to high triggers a start signal (START is an input), or START output indicates an active START event by switching from low to high level.

Per default, the active output voltage level of the START pin lasts one clock cycle.

## In order to extend this time span, do the following:

## Condition:

 START pin is assigned as output: trigger\_events(0) = 1.

## Action:

 Set START\_OUT\_ADD register 0x11 according to your specification.

## Result:

The active voltage level lasts (START\_OUT\_ADD + 1) clock cycles.

<!-- image -->

## Ramp Timing Examples Ramp Timing

## Example 1

Process Description

The following three examples depict SPI datagrams, internal and external signal levels, corresponding  velocity  ramps,  and  additional  explanations.  SPI  data  is  transferred internally at the end of each datagram.

In this example, the velocity value change is executed immediately.

-  The new XTARGET value is assigned after TARGET\_REACHED has been set and START\_DELAY has elapsed.
-  A new ramp does not start at the end of the second ramp because no new XTARGET value is assigned.
-  START is an output.
-  Internal start signal forwards with a step length of (START\_OUT\_ADD + 1) clock cycles.

This is how external devices can be synchronized:

Table 33: Parameter Settings Timing Example 1

| Parameter Settings Timing Example 1   | Parameter Settings Timing Example 1   |
|---------------------------------------|---------------------------------------|
| Parameter                             | Setting                               |
| RAMPMODE                              | b'101                                 |
| start_en                              | b'00001                               |
| trigger_events                        | b'0010                                |
| START_DELAY                           | >0                                    |
| START_OUT_ADD                         | >0                                    |
| pol_start_signal                      | 1                                     |

Figure 33: Ramp Timing Example 1

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Ramp Timing Example 2

Process Description

In this example, the velocity value and the ramp mode value change is executed after the first start signal.

-  The new ramp mode becomes positioning mode with S-shaped ramps.
-  The ramp then stops at target position XTARGET because of the ramp mode change.
-  A further XTARGET change starts the ramp again.
-  The ramp is initiated as soon as the start delay is completed, which was triggered by the first TARGET\_REACHED event.
-  The active START output signal lasts only one clock cycle.

Table 34: Parameter Settings Timing Example 2

| Parameter Settings Timing Example 2   | Parameter Settings Timing Example 2   |
|---------------------------------------|---------------------------------------|
| Parameter                             | Setting                               |
| RAMPMODE                              | b'001  b'110                         |
| start_en                              | b'00111                               |
| trigger_events                        | b'0110                                |
| START_DELAY                           | >0                                    |
| START_OUT_ADD                         | 0                                     |
| pol_start_signal                      | 0                                     |

Figure 34: Ramp Timing Example 2

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Ramp Timing Example 3

Process Description

In  this  example  external  start  signal  triggers  are  prioritized  by  making  use  of START\_DELAY &gt; 0 and simultaneously setting immediate\_start\_in to 1.

-  When XACTUAL equals POSCOMP the start timer is activated and the external start signal in between is ignored.
-  The second start event is triggered by an external start signal. The POSCOMP\_REACHED event is ignored.

The third start timer process is disrupted by the external START signal, which is forced to be executed immediately due to the setting of: immediate\_start\_in = 1.

Table 35: Parameter Settings Timing Example 3

| Parameter Settings Timing Example 3   | Parameter Settings Timing Example 3   |
|---------------------------------------|---------------------------------------|
| Parameter                             | Setting                               |
| RAMPMODE                              | b'000                                 |
| start_en                              | b'00010                               |
| trigger_events                        | b'1001                                |
| immediate_start_in                    | 0  1                                 |
| START_DELAY                           | >0                                    |
| pol_start_signal                      | 1                                     |

Figure 35: Ramp Timing Example 3

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Shadow Register Settings

Some  applications require a  complete  new  ramp  parameter  set  for  a  specific  ramp situation / point in time. TMC4331A provides up to 14 shadow registers, which are loaded into the corresponding ramp parameter registers after an internal start signal is generated.

Enabling Shadow Registers

## Enabling Cyclic Shadow Registers

<!-- image -->

In order to enable shadow registers, do as follows:

## Action

-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02), see section 9.1.2 (page 64).

## Result:

With every successive internal start signal the shadow registers are loaded into the corresponding active ramp register.

It is also possible to write back the current motion profile into the shadow motion registers to swap ramp motion profiles continually.

## In order to enable cyclic shadow registers, do as follows:

## Action

-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02) , see section 9.1.2 (page 64).
-  Set cyclic\_shadow\_regs = 1 (START\_CONF register 0x02).

## Result:

With every successive internal start signal the shadow registers are loaded into the corresponding active ramp register, whereas the active motion profile is loaded into the shadow registers.

-   Continued on next page.

<!-- image -->

## Shadow Register Configuration Options

## Option 1: Shadow Default Configuration

## AREAS OF SPECIAL CONCERN !

Four  different  optional  shadow  register  assignments  are  available  to  match  the shadow register set according to your selected ramp type. The available options are described on the next pages.

- i Please note that the only difference between the configuration of shadow option 3 and 4 is that VSTART is exchanged by VSTOP for the transfer of the shadow registers.

If the whole ramp register is needed to set in a single level stack, do as follows:

## Action:

-  Set shadow\_option = b'00 (START\_CONF register 0x02).
-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02)

## Action:

-  Default config: Set cyclic\_shadow\_regs = 0 (START\_CONF register 0x02)

-  Optional config: Set cyclic\_shadow\_regs = 1 (START\_CONF register 0x02)

## Result:

Every relevant motion parameter is altered at the next internal start signal by the corresponding shadow register parameter. In case cyclic shadow registers are used, the shadow register set is altered by the current motion profile set.

Figure 36: Single-level Shadow Register Option to replace complete Ramp Motion Profile.

<!-- image -->

- i Green arrows show default settings
- i Blue arrows show optional settings.

In case an S-shaped ramp type is selected and operation mode is switched from velocity to positioning mode (triggered by shadow register transfer), SH\_REG10 must not be equal to BOW3;  to  ensure  safe  operation  mode switching.

-   On the following pages more options are explained. Pleae turn page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Option 2: Double-stage Shadow Register Set for S-shaped Ramps

In case S-shaped ramps are configured, a double-stage shadow register set can be used. Seven relevant motion parameters for S-shaped ramps are affected when the shadow registers become active.

In  order  to  use  a  double-stage  shadow  register  pipeline  for  S-shaped ramps, do as follows:

## Action:

-  Set shadow\_option = b'01 (START\_CONF register 0x02).
-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02).

## Action:

-  Default  configuration: Set cyclic\_shadow\_regs  =  0  (START\_CONF  register 0x02).
-  Optional  configuration: Set cyclic\_shadow\_regs  =1  (START\_CONF  register 0x02)

## Result:

Seven motion parameters (VMAX, AMAX, DMAX, BOW1...4) are altered at the next internal start signal by the corresponding shadow register parameters (SH\_REG0...6). Simultaneously, these shadow registers are exchanged with the parameters of the second shadow stage (SH\_REG7…13).

In case cyclic shadow  registers are used, the second shadow  register set (SH\_REG7…13) is altered by the current motion profile set, e.g. 0x28 (AMAX) is written back to 0x48 (SH\_REG8).

The other ramp registers remain unaltered.

Figure 37:  Double-stage Shadow Register Option 1, suitable for S-shaped Ramps.

<!-- image -->

- i Green arrows show default settings
- i Blue arrows show optional settings.
-   Description is continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Option 3: Double-stage Shadow Register Set for Trapezoidal Ramps (VSTART)

In case trapezoidal ramps are configured, a double-stage shadow register set can be used. Seven relevant motion parameters for trapezoidal ramps are affected when the shadow registers become active.

In  order  to  use  a  double-stage  shadow  register  pipeline  for  trapezoidal ramps, do as follows:

## Action:

-  Set shadow\_option = b'10 (START\_CONF register 0x02).
-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02)

## Action:

-  Default configuration: Set cyclic\_shadow\_regs = 0 (START\_CONF register 0x02).
-  Optional  configuration: Set cyclic\_shadow\_regs  =  1  (START\_CONF  register 0x02).

## Result:

Seven  motion  parameters  (VMAX,  AMAX,  DMAX,  ASTART,  DFINAL,  VBREAK,  and VSTART) are altered at the next internal start signal by the corresponding shadow register  parameters  (SH\_REG0...6).  Simultaneously,  these  shadow  registers  are exchanged with the parameters of the second shadow stage (SH\_REG7…13). If cyclic shadow registers are used, the second shadow register set (SH\_REG7…13) is altered by the current motion profile set, e.g. 0x27 (VBREAK) is written back to 0x4C (SH\_REG12). The other ramp registers remain unaltered.

Figure 38: Double-stage Shadow Register Option 2, suitable for Trapezoidal Ramps.

<!-- image -->

- i Green arrows show default settings.
- i Blue arrows show optional settings.
-   Description is continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Option 4: Double-stage Shadow Register Set for Trapezoidal Ramps (VSTOP)

In case trapezoidal ramps are configured, a double-stage shadow register set can be used. Seven relevant motion parameters for trapezoidal ramps are affected when the shadow registers become active.

In  order  to  use  a  double-stage  shadow  register  pipeline  for  trapezoidal ramps, do as follows:

## Action:

-  Set shadow\_option = b'10 (START\_CONF register 0x02).
-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02)

## Action:

-  Default  configuration: Set cyclic\_shadow\_regs  =  0  (START\_CONF  register 0x02).
-  Optional  configuration: Set cyclic\_shadow\_regs  =  1  (START\_CONF  register 0x02)

## Result:

Seven  motion  parameters  (VMAX,  AMAX,  DMAX,  ASTART,  DFINAL,  VBREAK,  and VSTOP) are altered at the next  internal  start  signal  by  the  corresponding  shadow register  parameters  (SH\_REG0...6).  Simultaneously,  these  shadow  registers  are exchanged with the parameters of the second shadow stage (SH\_REG7…13). If cyclic shadow registers are used, the second shadow register set (SH\_REG7…13) is altered by the current motion profile set, e.g. 0x26 (VSTOP) is written back to 0x4D (SH\_REG13). The other ramp registers remain unaltered.

Figure 39: Double-Stage Shadow Register Option 3, suitable for Trapezoidal Ramps

<!-- image -->

- i Green arrows show default settings.
- i Blue Arrows show optional settings.
-   Turn page to see Areas of Special Concern pertaining to this section.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## ! AREAS OF SPECIAL CONCERN

Delayed Shadow Transfer

The values of ramp parameters, which are not selected by one of the four shadow options stay as originally configured, until the register is changed through an SPI write request.

Also, the last stage of the shadow register pipeline retains the values until they are overwritten by an SPI write request if no cyclic shadow registers are selected.

Up to 15 internal start signals can be skipped before the shadow register transfer is executed.

In order to skip a defined number of internal start signals for the shadow transfer, do as follows:

## Action:

-  Set shadow\_option according to your specification.
-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02)
-  OPTIONAL CONFIGURATION: Set cyclic\_shadow\_regs = 1.
-  Set SHADOW\_MISS\_CNT ≠ 0  (START\_CONF  register  0x02)  according  to  the number of consecutive internal start signals that you specify to be ignored.

## Result:

The shadow register transfer is not executed with every internal start signal. Instead, the specified number of start signals is ignored until the shadow transfer is executed through the (SHADOW\_MISS\_CNT+1) th  start signal.

The following figure shows an example of how to make use of SHADOW\_MISS\_CNT, in which the shadow register transfer is illustrated by an internal signal sh\_reg\_transfer. The signal miss counter CURRENT\_MISS\_CNT can be read out at register address START\_CONF (23:20):

Figure 40: SHADOW\_MISS\_CNT Parameter for several internal Start Signals

<!-- image -->

## AREAS OF SPECIAL CONCERN !

Internal  calculations  to  transfer  the  requested  shadow  BOW  values  into internal structures require at most (320 / fCLK) [sec]. before any shadow register transfer is prompted, it is necessary to wait for the completion of all internal calculations for the shadow bow parameters.

In order to make this better understood the following example is provided for a double-stage shadow pipeline for S-shaped ramps:

## PRECONDITION:

Shadow register transfer is activated (start\_en(1) = 1 and one or more trigger\_events are selected) for S-shaped ramps (shadow\_option = b'01)

## Action

-  Set SH\_REG0, SH\_REG1, SH\_REG2 (shadow register for VMAX, AMAX, DMAX).
-  Set SH\_REG3, SH\_REG4, SH\_REG5, SH\_REG6 (shadow register for BOW1…4).
-  Ensure that no shadow register transfer occurs during the next 320 / fCLK [s].

## Result:

Shadow register transfer can be initiated after this time span.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Pipelining Internal Parameters

## TMC4331A provides a target  pipeline  for  sequencing  subordinate  targets  in  order  to  easily arrange a complex target structure.

Configuration and Activation of Target Pipeline

## Configuration of a cyclic Target Pipeline

The different target values must be assigned to the X\_PIPE0…7 register. If the target pipeline is enabled, a new assignment cycle is initiated as soon as an internal start signal is generated; moving the values, as described, simultaneously:

## PROCESS DESCRIPTION:

-  A new XTARGET value is assigned that takes over the value of X\_PIPE0.
-  Every X\_PIPEn register takes over the value of its successor: X\_PIPEn = X\_PIPEn+1

## In order to activate the target pipeline, do as follows:

## Action:

-  Set pipeline\_en = b'0001 (START\_CONF register 0x02).

## Result:

The above mentioned process description is executed with every new internal start signal prompting.

It is also possible to reassign the value of XTARGET to one (or more) of the pipeline registers X\_PIPE0…7. Thereby, a cyclic target pipeline is created.

## In order to enable a cyclic target pipeline, do as follows:

## Action:

-  Set pipeline\_en = b'0001 (START\_CONF register 0x02).
-  Set XPIPE\_REWRITE\_REG in relation to the pipeline register where XTARGET have to written back (e.g. XPIPE\_REWRITE\_REG = b'00010000).

## Result:

The above mentioned process description is executed with every new internal start signal prompting, and XTARGET is written back to the selected X\_PIPEx register (e.g. XPIPE\_REWRITE\_REG = 0x10  XTARGET is written back to X\_PIPE4).

The  processes  and  actions  described  on  the  previous  page,  are  depicted  in  the following figure. The assignment cycle that is initiated when an internal start signal occurs is depicted.

Figure 41: Target Pipeline with Configuration Options

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Using the Pipeline for different internal Registers

The TMC4331A pipeline (registers 0x38…0x3F) can be configured so that it splits up into  maximal  four  segments.  These  segments  can  be  used  to  feed  the  following internal parameters:

-  XTARGET register 0x37.
-  POS\_COMP register 0x32.
-  GEAR\_RATIO register 0x12.
-  GENERAL\_CONF 0x00.

Consequently,  these  definite  parameter  value  changes  can  be  of  importance concerning a continuous ramp motion and/or for reduced overhead synchronizing of several motion controllers.

The POS\_COMP value can be used to initiate a start signal generation during motion. Therefore, it can be useful to pipeline this parameter in order to avoid dependence on SPI transfer speed.

For instance, if the distance between two POS\_COMP values is very close and the current  velocity  is  high  enough  that  it  misses  the  second  value  before  the SPI transfer is finished, it is advisable to change POS\_COMP immediately after the start signal.

The same is true for the GEAR\_RATIO parameter, which defines the step response on incoming step impulses. Some applications require very quick gear factor alteration of the slave controller. Note that when the start signal is prompted directly, an immediate change can be very useful instead of altering the parameter by an SPI transfer.

Likewise,  it  can  (but  must  not)  be  essential  to  change  general  configuration parameters  at  a  defined  point  in  time.  A  suitable  application  is  a  clearly  defined transfer  from  a  direct  external  control  (sd\_in\_mode = b'01)  to  an  internal  ramp (sd\_in\_mode = b'00) or vice versa because in this case the master/slave relationship is interchanged.

The following pipeline options are available, which can be adjusted accordingly:

Table 36: Pipeline Activation Options

| Pipeline Activation Options   | Pipeline Activation Options           |
|-------------------------------|---------------------------------------|
| pipeline_en (3:0)             | Description                           |
| b'xxx1                        | Pipeline for XTARGET is enabled.      |
| b'xx1x                        | Pipeline for POS_COMP is enabled.     |
| b'x1xx                        | Pipeline for GEAR_RATIO is enabled.   |
| b'1xxx                        | Pipeline for GENERAL_CONF is enabled. |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Pipeline Mapping Overview

## Pipeline Mapping Table

The pipeline\_en parameter offers an open configuration for 16 different combinations of the pipeline segregation. As a result, the number of pipelines range from 0 to 4. This also has an impact on the pipeline depth. The possible options are as follows: eight stages, four stages, three stages and two stages.

In the 'Pipeline Mapping' table below, the arrangement and depth of the pipeline is allocated  according  to  the  pipeline  setup.  The  final  register  destination  of  pipeline registers  are  also  depicted  in  order  to  illustrate  from  which  pipeline  registers (X\_PIPE0…7)  the final target registers  (XTARGET, POS\_COMP, GEAR\_RATIO, GENERAL\_CONF) are fed.

For example, if POS\_COMP and GEAR\_RATIO are chosen as parameters that are to be fed by the pipeline, two 4-stage pipelines are created. When an internal start signal is generated, POS\_COMP assumes the value of X\_PIPE0, whereas X\_PIPE4 feeds the GEAR\_RATIO register.

But if  POS\_COMP, GEAR\_RATIO and XTARGET are selected as parameter destinations, two 3-stage pipelines and one double-stage pipeline are created. When an internal start  signal  is  generated, XTARGET  assumes  the  value  of X\_PIPE0,  POS\_COMP assumes the value of X\_PIPE3, whereas X\_PIPE6 feeds the GEAR\_RATIO register.

More examples are described in detail on the following pages - explaining some of the possible configurations and referencing examples - listed in the Table below.

Table 37: Pipeline Mapping for different Pipeline Configurations

| Pipeline Mapping   | Pipeline Mapping   | Pipeline Mapping                                    | Pipeline Mapping              | Pipeline Mapping             | Pipeline Mapping             | Pipeline Mapping             |
|--------------------|--------------------|-----------------------------------------------------|-------------------------------|------------------------------|------------------------------|------------------------------|
| Ex.                | pipeline_en (3:0)  | Arrangement                                         | Final transfer register for…  | Final transfer register for… | Final transfer register for… | Final transfer register for… |
| Ex.                | pipeline_en (3:0)  | Arrangement                                         | GENERAL_CONF  pipeline_en(3) | GEAR_RATIO  pipeline_en(2)  | POS_COMP  pipeline_en(1)    | XTARGET  pipeline_en(0)     |
| -                  | b'0000             | No Pipelining                                       | -                             | -                            | -                            | -                            |
| -                  | b'0001             | One 8-stage pipeline                                | -                             | -                            | -                            | X_PIPE0                      |
| A                  | b'0010             | One 8-stage pipeline                                | -                             | -                            | X_PIPE0                      | -                            |
| B                  | b'0100             | One 8-stage pipeline                                | -                             | X_PIPE0                      | -                            | -                            |
| -                  | b'1000             | One 8-stage pipeline                                | X_PIPE0                       | -                            | -                            | -                            |
| C                  | b'0011             | Two 4-stage pipelines                               | -                             | -                            | X_PIPE4                      | X_PIPE0                      |
| -                  | b'0101             | Two 4-stage pipelines                               | -                             | X_PIPE4                      | -                            | X_PIPE0                      |
| -                  | b'1001             | Two 4-stage pipelines                               | X_PIPE4                       | -                            | -                            | X_PIPE0                      |
| -                  | b'0110             | Two 4-stage pipelines                               | -                             | X_PIPE4                      | X_PIPE0                      | -                            |
| -                  | b'1010             | Two 4-stage pipelines                               | X_PIPE4                       | -                            | X_PIPE0                      | -                            |
| D                  | b'1100             | Two 4-stage pipelines                               | X_PIPE4                       | X_PIPE0                      | -                            | -                            |
| F                  | b'0111             | Two 3-stage pipelines and one double-stage pipeline | -                             | X_PIPE6                      | X_PIPE3                      | X_PIPE0                      |
| -                  | b'1011             | Two 3-stage pipelines and one double-stage pipeline | X_PIPE6                       | -                            | X_PIPE3                      | X_PIPE0                      |
| E                  | b'1101             | Two 3-stage pipelines and one double-stage pipeline | X_PIPE6                       | X_PIPE3                      | -                            | X_PIPE0                      |
| -                  | b'1110             | Two 3-stage pipelines and one double-stage pipeline | X_PIPE6                       | X_PIPE3                      | X_PIPE0                      | -                            |
| G/H                | b'1111             | Four double- stage pipelines                        | X_PIPE6                       | X_PIPE4                      | X_PIPE2                      | X_PIPE0                      |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Cyclic Pipelining

Pipeline Examples

For all of the above shown configuration examples, it is possible to write back the current values of the selected registers (XTARGET, POS\_COMP, GEAR\_RATIO and/or GENERAL\_CONF) to any of the pipeline registers of their assigned pipeline in order to generate cyclic pipelines.

By  selecting  proper XPIPE\_REWRITE\_REG,  the  value  that  is  written  back  to  the pipeline register is selected automatically to fit the selected pipeline mapping.

Below, several pipeline mapping examples with the corresponding configuration are shown.

Example A: Cyclic pipeline for POS\_COMP, which has eight pipeline stages.

Example B: Cyclic pipeline for GEAR\_RATIO, which has six pipeline stages.

Examples A+B: Using one Pipeline

Figure 42: Pipeline Example A

<!-- image -->

Examples C+D: Using two Pipelines

Figure 43: Pipeline Example B

Example C: Cyclic pipelines for XTARGET and POS\_COMP, which have four pipeline stages each.

Example D: Cyclic pipelines for GEAR\_RATIO, which has three pipeline stages and GENERAL\_CONF, which has two pipeline stages.

Figure 44: Pipeline Example C

<!-- image -->

-   Continued on next page.
- © 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Figure 45: Pipeline Example D

<!-- image -->

## Examples E+F: Using three Pipelines

Example  E: Cyclic  pipelines  for XTARGET  and GEAR\_RATIO,  which  have  three pipeline stages each and GENERAL\_CONF, which has two pipeline stages.

Example F: Two cyclic pipelines for XTARGET and GEAR\_RATIO, which have two pipeline  stages  each  and  a  noncyclic  pipeline  for GEAR\_RATIO,  which  has  three pipeline stages.

Figure 46: Pipeline Example E

<!-- image -->

## Examples G+H: Using four Pipelines

Figure 47: Pipeline Example F

Example G: Cyclic pipelines for XTARGET, POS\_COMP, GEAR\_RATIO and GENERAL\_CONF, which have two pipeline stages each.

Example H: Four noncyclic pipelines for XTARGET, POS\_COMP, GEAR\_RATIO and GENERAL\_CONF, which have two pipeline stages each.

Figure 48: Pipeline Example G

<!-- image -->

Figure 49: Pipeline Example H

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Masterless Synchronization of Several Motion Controllers via START Pin

## START pin can also be assigned as tristate input in order to synchronize several microcontroller masterless.

## Activation of the Tristate START Pin

## START Pin Connection

<!-- image -->

In this case START is assigned as tristate. A busy state is enabled. During this busy state, START is set as output with a strongly driven inactive polarity. If the internal start  signal  is  generated  -  after  the  internal  start  timer  is  expired  -START  pin  is assigned as input. Additionally, a weak output signal is forwarded at START. During this phase, the active start polarity is emitted.

In case the signal at START input is set to active polarity, because all members of the signal  line  are  ready,  START  output  remains  active  (strong  driving  strength)  for START\_OUT\_ADD clock cycles.

Then, busy state is active again until the next start signal occurs.

## In order to activate tristate START pin, do as follows:

## Action:

 Set busy\_en = 1 (START\_CONF register 0x02).

## Result:

The above mentioned process description is executed.

In case START pin is connected with START pins of other TMC4331A devices, it is recommend that a series resistor (e.g. 220 Ω) is connected between the devices to limit  the  short  circuit  current  flowing  that  can  flow  during  the  configuration  phase when different voltage levels at the START pins of the different devices can occur.

## NOTE:

-  Avoid that short circuits last too long.

<!-- image -->

## 10. Serial Data Output

TMC4331A provides an SPI interface for initialization and configuration of the motor driver (in addition to the Step/Dir output) before and during motor motion. It is possible to control TMC stepper drivers during SPI motor drive.

SPI Interface Configuration

## The SPI interface is used for the following tasks:

-  TMC4331A integrates an adjustable cover register for configuration purposes in order to adjust TMC motor driver chips and third parties chips easily.
-  The  integrated  microstep  Sine  Wave  Lookup  Table  (MSLUT)  generates  two current values that represent sine and cosine values.
-  These two current values can be transferred to a TMC motor driver chip at a time, in order to energize the motor coils. This occurs within each SPI datagram. A series of current values is transferred to move the motor. Values of the MSLUT are adjusted using velocity ramp dependent scale values that align the maximum amplitude current values to the requirements of certain velocity slopes.

| Pin Names for SPI Motor Drive   | Pin Names for SPI Motor Drive   | Pin Names for SPI Motor Drive                           |
|---------------------------------|---------------------------------|---------------------------------------------------------|
| Pin Names                       | Type                            | Remarks                                                 |
| NSCSDRV                         | Output                          | Chip select output to motor driver, low active.         |
| SCKDRV                          | Output                          | Serial clock output to motor driver.                    |
| SDODRV                          | InOut as Output                 | Serial data output to motor driver.                     |
| SDIDRV                          | Input                           | Serial data input from motor driver.                    |
| STDBY_CLK                       | Output                          | Clock output, standby output, or ChopSync clock output. |

Table 38: Pin Names for SPI Motor Drive

| Register Names for SPI Output Registers   | Register Names for SPI Output Registers   | Register Names for SPI Output Registers   | Register Names for SPI Output Registers                                                                        |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| Register Name                             | Register Address                          | Register Address                          | Remarks                                                                                                        |
| GENERAL_CONF                              | 0x00                                      | RW                                        | Affect switches: Bit14:13, bit19, bit20, bit28.                                                                |
| REFERENCE_CONF                            | 0x01                                      | RW                                        | Affect switches: Bit26, bit27, bit30.                                                                          |
| SPIOUT_CONF                               | 0x04                                      | RW                                        | Configuration register for SPI output communication.                                                           |
| STEP_CONF                                 | 0x0A                                      | RW                                        | Microsteps per fullstep, fullsteps per revolution, and motor status bit event selection.                       |
| DAC_ADDR                                  | 0x1D                                      | RW                                        | SPI addresses/commands which are put in front of the DAC values: CoilA: DAC_ADDR(15:0), CoilB: DAC_ADDR(31:16) |
| SPI_SWITCH_VEL                            | 0x1D                                      | RW                                        | Velocity at which automatic cover datagram are sent.                                                           |
| CHOPSYNC_DIV                              | 0x1F                                      | RW                                        | Chopper clock divider (bit 11:0).                                                                              |
| FS_VEL                                    | 0x60                                      | W                                         | Velocity at which fullstep drive are enabled.                                                                  |
| COVER_LOW                                 | 0x6C                                      | W                                         | Lower 32 bits of the cover register (µC to motor driver).                                                      |
| COVER_HIGH                                | 0x6D                                      | W                                         | Upper 32 bits of the cover register (µC to motor driver).                                                      |
| COVER_DRV_LOW                             | 0x6E                                      | R                                         | Lower 32 bits of the cover response register (motor driver to µC).                                             |
| COVER_DRV_HIGH                            | 0x6F                                      | R                                         | Upper 32 bits of the cover response register (motor driver to µC).                                             |
| CURRENT_CONF                              | 0x05                                      | RW                                        | Current scaling configuration.                                                                                 |
| SCALE_VALUES                              | 0x06                                      | RW                                        | Current scaling values.                                                                                        |
| STDBY_DELAY                               | 0x15                                      | RW                                        | Delay time after standby mode is valid.                                                                        |

<!-- image -->

<!-- image -->

Table 39: Dedicated SPI Output Registers

| Register Names for SPI Output Registers   | Register Names for SPI Output Registers   | Register Names for SPI Output Registers   | Register Names for SPI Output Registers                                                                                            |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Register Name                             | Register Address                          | Register Address                          | Remarks                                                                                                                            |
| FREEWHEEL_DELAY                           | 0x16                                      | RW                                        | Delay time after freewheeling is valid.                                                                                            |
| VDRV_SCALE_LIMIT                          | 0x17                                      | RW                                        | Velocity setting for changing the drive scale value.                                                                               |
| UP_SCALE_DELAY                            | 0x18                                      | RW                                        | Increment delay to a higher scaling value; 24 bits.                                                                                |
| HOLD_SCALE_DELAY                          | 0x19                                      | RW                                        | Decrement delay to the hold scaling value; 24 bits.                                                                                |
| DRV_SCALE_DELAY                           | 0x1A                                      | RW                                        | Decrement delay to the drive scaling value.                                                                                        |
| BOOST_TIME                                | 0x1B                                      | RW                                        | Delay time after ramp start when boost scaling is valid.                                                                           |
| SCALE_PARAM                               | 0x7C                                      | R                                         | Actual current scaling parameter; 8 bits.                                                                                          |
| CURRENTA CURRENTB                         | 0x7A                                      | R                                         | Actual current values of the MSLUT: SIN (coil A) and SIN90_120 (coil B); 9 bit for each.                                           |
| CURRENTA_SPI CURRENTB_SPI                 | 0x7B                                      | R                                         | Actual scaled current values of the MSLUT: SIN (coil A) and SIN90_120 (coil B); 9 bits for each.                                   |
| MSLUT registers                           | 0x70…78                                   | W                                         | MSLUT values definitions.                                                                                                          |
| MSCNT                                     | 0x79                                      | R                                         | Actual microstep position of the MSLUT.                                                                                            |
| START_SIN START_SIN90_120 DAC_OFFSET      | 0x7E                                      | RW                                        | Sine start value of the MSLUT (bit7:0). Cosine start value of the MSLUT (bit23:16). Offset value for DAC output values (bit31:24). |

## Getting Started with TMC Motor Drivers

In this chapter information is provided about how to easily start up a connected TMC motor driver.

Setting up SPIOUT\_CONF correctly

In  order  to  start  up  a  connected  TMC  motor  stepper  driver,  proper  setup  of SPIOUT\_CONF  register  0x04  is  important.  TMC4331A  offers  presets  for  current transfer and automatic configuration routines if the correct  TMC driver is selected. Status bits of TMC motor drivers are also transmitted to the status register of the motion controller.

TMC4331A provides a programmable lookup table for storing the current wave. Per default, the tables are preprogrammed with a sine wave, which is a good starting point for most stepper motors.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Sine Wave Lookup Tables

TMC4331A  provides  a  programmable  lookup  table  (LUT)  for  storing  the  current  wave. Reprogramming the table from its predefined values to a motor-specific wave allows improved motor-reliant microstepping, particularly when using low-cost motors.

## SETTINGS ALERT !

## Programming Sine Wave Lookup Tables

## Sine Wave Table Structure

TMC4331A-LA provides a default configuration of the internal microstep table MSLUT. In case internal MSLUT is used, proceed with section 10.3. (page 89) in order to setup a well-defined serial data connection to the stepper motor driver. The following explanations that are provided in this section  only  address  engineers  who  use  their  own  microstep  table definition.

The  internal  microstep  wave  table  maps  the  microstep  wave  from  0°  to  90°  for 256 microsteps. It becomes automatically and symmetrically extended to 360° that consequently comprises 1024 microsteps. As a result, the microstep counter MSCNT ranges from 0 to 1023. Only a quarter of the wave is stored because this minimizes required memory and the amount of programmable data.

Therefore, only 256 bits (ofs00 to ofs255) are required to store the quarter wave. These  bits  are  mapped  to  eight  32-bit  registers MSLUT[0]  (register  0x70)  to MSLUT[7] (register 0x77).

When reading out the table the 10-bit microstep counter MSCNT addresses the fully extended wave table.

The MSLUT is an incremental table. This means that a certain order and succession is predefined at every next step based on the value before, using up to four flexible programmable segments within the quarter wave. The microstep limits of the four segments are controlled by the position registers X1, X2, and X3.

Within these segments the next value of the MSLUT is calculated by adding the base wave inclination Wx-1 (if ofs=0) or its successor Wx (if ofs=1). Because four segments are programmable, four base wave inclinations are available as basic increment value: 0, 1, 2, or 3. Thereby, even a negative wave inclination can be realized. This is shown in the next Figure where the values in last quarter segments are decreased or remain constant with every step towards MSCNT= 255.

Figure 50: LUT Programming Example

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Actual Current Values Output

## Actual Current Calculations

When  the  microstep  sequencer  advances  within  the  microstep  table  (MSLUT),  it calculates the actual current values for the motor coils with each microstep, and stores them to the register 0x7A , which comprises the values of both waves CURRENTA and CURRENTB.  However,  the  incremental  coding  requires  an  absolute  initialization  especially when the microstep table becomes modified. Therefore, CURRENTA and CURRENTB become re-initialized with the start values whenever MSCNT passes zero.

Characteristics of a 2-phase Stepper Motor Microstep Table

As mentioned above, the MSLUT can be adapted to the motor requirements. In order to  understand  the  nature  of  incremental  coding  of  the  microstep  table,  the characteristics of the microstep wave must be understood, as described in the list below:

## Characteristics of a 2-phase motor microstep table:

-  In principle, it is a reverse characteristic of the motor pole behavior.
-  It is a polished wave to provide a smooth motor behavior. There are no jumps within the wave.
-  The phase shift between both phases is exactly 90°, because this is the optimum angle of the poles inside the motor.
-  The zero transition is at 0°. The curve is symmetrical within each quadrant (like a sine wave).
-  The slope of the wave is normally positive, but due to torque variations it can also be (slightly) negative.
-  But it must not be strictly monotonic as shown in the figure above.

Considering these facts, it becomes clear that the wave table can be compressed. The incremental coding applied to the TMC4331A uses a format that reduces the required information - per entry of the 8-bit by a 256-entry wave table - to slightly more than a single bit.

## How to Program the Internal MSLUT

Principle of Incremental Encoding

The principle of incremental encoding only stores the difference between the actual and the next table entry. In order to attain an absolute start value, the first entry is directly stored in START\_SIN. Also, for ease-of-use, the first entry of the shifted table for the second motor phase is stored in START\_SIN\_90\_120.

Based  on  these  start  values,  every  next  table  entry  is  calculated  by  adding  an increment INC to the former value. This increment is the base wave inclination value Wx whenever its corresponding ofs bit is 1 or Wx - 1 if ofs = 0:

<!-- formula-not-decoded -->

The base wave inclination can be set to four different values (0, 1, 2, 3), because it consists of two bits.

Because the wave inclination does not change dramatically, TMC4331A provides four wave inclination segments with the base wave inclinations (W0, W1, W2, and W3) and the segment borders (0, X1, X2, X3, and 255), as shown in the left quarter of the MSLUT diagram in Figure 48, page 83.

Table 40: Wave Inclination Characteristics of Internal MSLUT

| Wave Inclination Characteristics   | Wave Inclination Characteristics   | Wave Inclination Characteristics   |
|------------------------------------|------------------------------------|------------------------------------|
| Wave Inclination Segment           | Base Wave Inclination              | Segment Ranges                     |
| 0                                  | W0                                 | 0 … X1                             |
| 1                                  | W1                                 | X1… X2                             |
| 2                                  | W2                                 | X2 … X3                            |
| 3                                  | W3                                 | X3 … 255                           |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Setup of MSLUT Segments

## Base Wave Inclination and Border Values

## AREAS OF SPECIAL CONCERN

!

## Zero Crossing

All base wave inclination values (each consists of two bits) as well as the border values (each consists of eight bit) between the segments are adjustable. They are assigned by MSLUTSEL register 0x78.

In  order  to  change  the  base  wave  inclination  values  and  the  segment borders, do as follows:

## Action:

-  Define the segment borders X1, X2, and X3 and the base wave inclination values W0…W3 according to the requirements
-  Set register MSLUTSEL(31:24) = X3.
-  Set register MSLUTSEL(23:16) = X2.
-  Set register MSLUTSEL(15:8) = X1.
-  Set register MSLUTSEL(7:6) = W3.
-  Set register MSLUTSEL(5:4) = W2.
-  Set register MSLUTSEL(3:2) = W1.
-  Set register MSLUTSEL(1:0) = W0.

## Result:

The  segments  and  the  base  wave  inclination  values  of  the  internal  MSLUT  are changed.

## NOTE:

-  It is not mandatory to define four segments. For instance, if only two segments are required, set X2 and X3 to 255. Then, W0 is valid for segment 0 between MSCNT = 0  and  MSCNT = X1,  and  W1  is  valid  between  MSCNT = X1  and MSCNT = 255 (segment 1).

## In order to change the ofs bits, do as follows:

## Action:

-  Set MSLUT[0] register 0x70 = ofs31…ofs00.
-  Set MSLUT[1] register 0x71 = ofs63…ofs32.
-  Set MSLUT[2] register 0x72 = ofs95…ofs64.
-  Set MSLUT[3] register 0x73 = ofs127…ofs96.
-  Set MSLUT[4] register 0x74 = ofs159…ofs128.
-  Set MSLUT[5] register 0x75 = ofs191…ofs160.
-  Set MSLUT[6] register 0x76 = ofs223…ofs192.
-  Set MSLUT[7] register 0x77 = ofs255…ofs224.

## Result:

The ofs bits of the internal MSLUT are changed.

## When modifying the wave:

Special  care  has  to  be  applied  in  order  to  ensure  a  smooth  and  symmetrical  zero transition whenever the quarter wave becomes expanded to a full wave.

## When adjusting the range:

The maximum resulting swing of the wave should be adjusted to a range of -248 to 248, in order to achieve the best possible resolution while at the same time leaving headroom for a hysteresis based chopper to add an offset.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

<!-- image -->

## Current Waves Start Values

## Starting Current Values of MSLUT Configuration

As both waves are shifted by 90° for two-phase stepper motors, the sine wave starts at 0°  when MSCNT = 0.  By  comparison,  the  cosine  wave  begins  at  90°  when MSCNT = 256. At this starting points the current values are CURRENTA = 0 for the sine wave and CURRENTB = 247 for the cosine wave.

In contrast to the starting microstep positions that are fixed, these starting current values can be redefined if the default start values do not fit for the actual MSLUT.

## In order to change the starting current values of the MSLUT, do as follows:

## Action:

-  Define  the  start  values START\_SIN  and  START\_SIN90\_120  according  to  the requirements.

-  Set register 0x7E (7:0) = START\_SIN

-  Set register 0x7E (23:16) = START\_SIN90\_120

## Result:

The starting values for both waves are adapted to MSLUT.

## Default MSLUT

## Base Wave Inclinations

The default sine wave table in TMC drivers uses one segment with a base inclination of 2 and one segment with a base inclination of 1 (see default value of the MSLUTSEL register 0x78 = 0xFFFF8056).

<!-- formula-not-decoded -->

As a result, between MSCNT = 0 and 128, the increment value INC is either

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

This reflects the stronger rise in the first segment of the MSLUT in contrast to the second segment. The maximum value is

START\_SIN90\_120 = 247.

<!-- image -->

## Explanatory Notes for Base Wave Inclinations

In the following example four segments are defined.

Each  segment  has  a  different  base  wave  inclination  to  illustrate  each possible entry:

Segment 0: W0 = 3 which means that the increment value is +2 or +3.

Segment 1: W0 = 2 which means that the increment value is +1 or +2.

Segment 2: W0 = 1 which means that the increment value is 0 or +1.

Segment 3: W0 = 0 which means that the increment value is -1 or 0.

Definition of Segments 0,1,2,3

- i In addition to the MSLUT curve (black line), which is defined by the given ofs bits, all  four  segments show upper limits (red line); in case all ofs bits in the particular segments are set to 1.
- i The green line shows the lower limit in case all ofs bits in the particular segments are set to 0.

Figure 51: MSLUT Curve with all possible Base Wave Inclinations (highest Inclination first)

<!-- image -->

In order to set up a standard sine wave table for the MSLUT, the following considerations have to be taken into account:

## PRECONSIDERATIONS:

-  The microstep table for the standard sine wave begins with eight entries         (0 to 7) {0, 1, 3, 4, 6, 7, 9, 10 …} etc.
-  The maximum difference between two values in this section is +2, whereas the minimum difference is +1.
-  While advancing according to the table, the very first time the difference between two MSLUT values is lower than +1 is between position 153 and position 154. Both entries are identical.
-  The start value is 0 for the sine wave.
-  The calculated value for position 256 (i.e. start of cosine wave) is 247.
-   Description is continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Standard Sine Wave Setup Considerations prior to SETUP of MSLUT

<!-- image -->

## Standard Sine Wave Setup

<!-- image -->

## In order to set up the standard sine wave table, proceed as follows:

## Action:

-  Set a starting value START\_SIN = 0 matching sine wave entry 0.
-  Set a base wave inclination range of W0 = b'10 = 2 to skip between +1 / +2, valid from 0 to X1.
-  Calculate the differences between every entry: {+1, +2, +1, +2, +1, +2, +1,…}.
-  Set the microstep table entries ofsXX to 0 for the lower value (+1); 1 for the higher value (+2). Thus, the first seven microstep table entries ofs00 to ofs06 are: {0, 1, 0, 1, 0, 1, 0 …}
-  The base wave inclination must be lowered at position 153, at very latest. Use the next base wave inclination range 1 with W1 = b'01 = 1 to skip between +0 and +1.
-  Set X1 = 153 in order to switch to the next inclination range. From here on, an offset ofsXX of 0 means add nothing; 1 means add +1.
-  Set START\_SIN90\_120 = 247, which is equal to the value at position 256.
-  Only two of four wave segments with different base wave inclinations are used. The remaining wave inclination ranges W2 and W3 should be set to the same value as  W1;  and  X2  and  X3  can  be  set  to  255.  Thereby,  only  two  wave  inclination segments are effective.

## Result:

A standard sine wave is defined as MSLUT. The following table shows an extract of this curve.

| Overview of the Microstep Behavior Example   |   Overview of the Microstep Behavior Example |   Overview of the Microstep Behavior Example |   Overview of the Microstep Behavior Example |   Overview of the Microstep Behavior Example |   Overview of the Microstep Behavior Example |   Overview of the Microstep Behavior Example |   Overview of the Microstep Behavior Example | Overview of the Microstep Behavior Example   | Overview of the Microstep Behavior Example   |   Overview of the Microstep Behavior Example | Overview of the Microstep Behavior Example   | Overview of the Microstep Behavior Example   |   Overview of the Microstep Behavior Example |
|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|
| Microstep number                             |                                            0 |                                            1 |                                            2 |                                            3 |                                            4 |                                            5 |                                            6 | 7                                            | …                                            |                                          153 | 154                                          | …                                            |                                          255 |
| Desired table entry                          |                                            0 |                                            1 |                                            3 |                                            4 |                                            6 |                                            7 |                                            9 | 10                                           | …                                            |                                          200 | 200                                          | …                                            |                                          247 |
| Difference to next entry                     |                                            1 |                                            2 |                                            1 |                                            2 |                                            1 |                                            2 |                                            1 | …                                            | …                                            |                                            0 | …                                            | …                                            |                                            0 |
| Required segment inclination                 |                                           +2 |                                           +2 |                                           +2 |                                           +2 |                                           +2 |                                           +2 |                                           +2 | …                                            | …                                            |                                           +1 | …                                            | …                                            |                                           +1 |
| Ofs bit entry                                |                                            0 |                                            1 |                                            0 |                                            1 |                                            0 |                                            1 |                                            0 | …                                            | …                                            |                                            0 | …                                            | …                                            |                                            0 |

Table 41: Overview of the Microstep Behavior Example

<!-- image -->

## SPI Output Interface Configuration Parameters

TMC4331A  provides  an  SPI  output  interface.  In  the  next  section,  the  configuration  of  the interface parameters is explained in detail.

The table below lists the pins that are dedicated to SPI output communication:

Table 42: SPI Output Communication Pins

| SPI Output Communication Pins   | SPI Output Communication Pins                                                                                                             |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Pin                             | Description                                                                                                                               |
| NSCSDRV                         | Low active chip select signal.                                                                                                            |
| SCKDRV                          | SPI output clock.                                                                                                                         |
| SDODRV                          | MOSI - Output pin to transfer the datagram to the motor driver.                                                                           |
| SDIDRV                          | MISO - Input pin which receives the response from the motor driver. The response is sampled during the data transfer to the motor driver. |

Because TMC4331A represents the master of SPI communication to the motor driver - which is the slave - it is mandatory to set up the timing configuration for the SPI output. TMC4331A provides an SPI clock, which is generated at the SCKDRV output pin.

In  order  to  configure  the  timing  of  the  SPI  clock,  set  up SPIOUT\_CONF register 0x04 as follows:

## Action:

-  Set  the  number  of  internal  clock  cycles  the  serial  clock  should  stay  low  at SPI\_OUT\_LOW\_TIME = SPIOUT\_CONF (23:20).
-  Set  the  number  of  internal  clock  cycles  the  serial  clock  should  stay  high  at SPI\_OUT\_HIGH\_TIME = SPIOUT\_CONF (27:24).
-  Also, an SPI\_OUT\_BLOCK\_TIME = SPIOUT\_CONF(31:28)  can  be  set  for a minimum time period during which  no new datagram is sent after the last SPI output datagram.

## Result:

SPI output communication scheme is set. During the inactive phase between to SPI datagrams - which is at least SPI\_OUT\_BLOCK\_TIME clock cycles long -  the SCKDRV and NSCSDRV pins remain at high output voltage level. The timing of the SPI output communication is illustrated in the following figure.

Figure 52: SPI Output Datagram Timing

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Pins dedicated to SPI Output Communication

## Setup of SPI Output Timing Configuration

<!-- image -->

## Minimum and Maximum Time Period

## Current Diagrams

## Process Description

## Change of Microstep Resolution

## Cover Datagrams Communication between µC and Driver

## How to Define Cover Datagram Length

The minimum time period for all three parameters is 2/fCLK. If an SPI output parameter is set to 0, it is altered to 2 clock cycles internally. A maximum time period of 15/fCLK can be set for all three parameters.

Thus, SPI clock frequency fSPI\_CLK covers the following range:

fCLK / 30 ≤ fSPI\_CLK ≤ fCLK / 2.

Basically, SPI output communication serves as automatic current datagram transfer to the connected motor driver. TMC4331A uses the internal microstep lookup table (MSLUT) in order to provide actual current motor driver data.

-  With every step that is  initialized  by  the  ramp  generator  the MSCNT value is increased or decreased, dependent on ramp direction.
-  The MSCNT  register  0x79  (readable  value)  contains  the  current  microstep position of the sine value.
-  Accordingly, the current values CURRENTA (0x7A) and CURRENTB (0x7B) are altered.
-  In  case  the  output  configuration  of  TMC4331A  allows  for  automatic  current transfer an updated current value leads to a new datagram transfer.
-  Thereby, the motor driver always receives the latest data. The length for current datagrams can be set automatically and TMC4331A converts new values into the selected datagram format, usually divided in amplitude and polarity bit for TMC motor drivers.

By altering the microstep resolution from 256 (MSTEP\_PER\_FS = b'0000) to a lower value, an internal step results in more than one MSLUT step.

For  instance,  if  the  microstep  resolution  is  set  to  64  (MSTEP\_PER\_FS  =  b'0010), MSCNT is either increased or decreased by 4 per each internal step. Accordingly, the passage through the MSLUT skips three current values per each internal step to match the new microstep resolution.

In addition to automatic current datagram  transfer, the microcontroller can communicate  directly  with  the  motor  driver  through  TMC4331A  by  using  cover datagrams.  This  communication  channel  can  be  useful  for  configuration  purposes because no additional SPI communication channel between microcontroller and motor driver is necessary.

Up to 64 bits can be assigned for one cover datagram. This 64-bit SPI cover register is separated into two 32-bit registers - COVER\_HIGH register 0x6D and COVER\_LOW register 0x6C. The COVER\_HIGH register is only required if more than 32 bits must be sent once.

How many bits are sent within one cover datagram is defined by the cover datagram length COVER\_DATA\_LENGTH .

## In order to define the cover datagram length, do as follows:

## Action:

-  Set the number of cover datagram bits at COVER\_DATA\_LENGTH = SPIOUT\_CONF (19:13).

## Result:

The cover datagram length is set to COVER\_DATA\_LENGTH  bits. If this parameter is set higher than 64, the cover register data length is still maximum 64 bits.

- i For TMC motor drivers it is possible to set COVER\_DATA\_LENGTH = 0. In this case, the cover data length is selected automatically, dependent on the chosen motor driver. More details are provided on the subsequent pages.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Sending Cover Datagrams

## Cover Datagrams with 33 Bits and more

The  LSB  (last  significant  bit)  of  the  whole  cover  datagram  register  is  located  at COVER\_LOW(0). As long as COVER\_DATA\_LENGTH &lt; 33, only COVER\_LOW or parts of this register are required for cover data transfer.

If  more than 32 bits are necessary, the complete COVER\_LOW and (parts of) the COVER\_HIGH register are required for SPI cover data transfer.

## NOTE:

-  Every SPI communication starts with the most significant bit (MSB).

## OPTION 1: COVER\_DATA\_LENGTH &lt; 33 BITS

In order to send a cover datagram - that is smaller than 33 bits - do as follows:

## Action:

-  Set COVER\_LOW (COVER\_DATA\_LENGTH-1:0) register 0x6C = cover\_data.

## Result:

After a valid register request to COVER\_LOW, SPI output is sent out COVER\_DATA\_LENGTH bits of COVER\_LOW register.

## OPTION 2: COVER\_DATA\_LENGTH &gt; 32 BITS

In order to send a cover datagram - that consists of more than 32 bits - do as follows:

## Action:

-  Split cover data into two segments:
-  cover\_data\_low = cover\_data(31:0).
-  cover\_data\_high = cover\_data &gt;&gt; 32.
-  cover\_data\_high = cover\_data(31:0).
-  Set COVER\_HIGH(COVER\_DATA\_LENGTH-32:0) register 0x6D=cover\_data\_high.
-  Set COVER\_LOW register 0x6C = cover\_data\_low.

## Result:

After a valid register request to COVER\_LOW, SPI output is sent out COVER\_DATA\_LENGTH  bits  that  comprises  register  values  of COVER\_HIGH  and COVER\_LOW.

The cover register and the datagram structure are illustrated in the figure below:

Figure 53: Cover Data Register Composition (CDL - COVER\_DATA\_LENGTH)

<!-- image -->

-   Continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Receiving Responses to Cover Datagrams

## COVER\_DONE Event

Configuring Automatic Generation of Cover Datagrams

<!-- image -->

Because the transfer of a cover datagram is usually accompanied by a data transfer from the motor driver, the response is stored in registers; and is thus available for the COVER\_DRV\_LOW  register microcontroller.  COVER\_DRV\_HIGH  register  0x6F  and 0x6E form this cover response register that can also comprise up to 64 bits. Similar to COVER\_LOW and COVER\_HIGH, the motor driver response is divided in the registers COVER\_DRV\_LOW and COVER\_DRV\_HIGH. The composition of the response cover register and also the positioning of the MSB follow the same structure.

At the end of a successful data transmission, the event COVER\_DONE becomes set. This indicates that the cover register data is sent to the motor driver and that the received response is stored in the COVER\_DRV\_HIGH register 0x6F and COVER\_DRV\_LOW register 0x6E.

In certain setups, it can be useful to automatically send ramp velocity-dependent cover datagrams, e.g. to change chopper settings during motion.

## NOTE:

-  This  feature  is  only  available  if  the  cover  datagram  length  does  not  exceed 32 bits.

In  order  to  activate  ramp  velocity-dependent  automatic  cover  data transfer, do as follows:

## Action:

-  Define  the  trigger  velocity  whenever  an  automatic  cover  datagram  transfer  is initiated.
-  Set SPI\_SWITCH\_VEL register 0x1D to this absolute velocity [pps].
-  Set COVER\_LOW register 0x6C to the cover\_data, which is valid for lower velocity values.
-  Set COVER\_HIGH register 0x6D to the cover\_data, which is valid for higher velocity values.
-  Set automatic\_cover = 1 (REFERENCE\_CONF register 0x01).

## Result:

Whenever the absolute internal ramp velocity |VACTUAL| passes the SPI\_SWITCH\_VEL  value,  the  particular  cover  data  is  sent  to  the  motor  driver, COVER\_LOW is sent in case |VACTUAL| &lt; SPI\_SWITCH\_VEL, COVER\_HIGH   is sent in case |VACTUAL| ≥ SPI\_SWITCH\_VEL.

<!-- image -->

## Overview: TMC Motor Driver Connections

As mentioned before, TMC4331A is able to set the cover register length automatically in case a TMC motor  driver  is  connected.  Also,  several  additional  automatic  features  for  the  SPI communication are available by selecting TMC motor drivers.

## TMC Stepper Motor Driver Settings

Available SPI and Step/Dir™ Communication Schemes for TMC Motors

How to enable SPI Output Settings for TMC Stepper Motor Drivers

The SPI and Step/Dir communication schemes are available for the following product lines that are explained in greater detail further below:

-  TMC236, TMC239
-  TMC246, TMC248, TMC249
-  TMC260, TMC261, TMC262, TMC2660
-  TMC389
-  TMC2130

In order to enable an operating SPI output setting for a connected TMC stepper motor driver, proceed as follows:

## Action:

-  Set SPI\_OUT\_LOW\_TIME,  SPI\_OUT\_HIGH\_TIME,  and SPI\_OUT\_BLOCK\_TIME according to the TMC motor driver specification, as explained before.
-  Set COVER\_DATA\_LENGTH = 0 (bit19:13 of SPIOUT\_CONF register 0x04).
-  Set spi\_output\_format  = SPI\_OUT\_CONF  (3:0) according to the connected SPI motor driver as seen below in the table below.

## Result:

The communication scheme is now prepared for the connected TMC motor driver with all available features.

Table 43: TMC Stepper Motor Driver Options

| TMC Stepper Motor Driver Options   | TMC Stepper Motor Driver Options       | TMC Stepper Motor Driver Options                    | TMC Stepper Motor Driver Options    | TMC Stepper Motor Driver Options   |
|------------------------------------|----------------------------------------|-----------------------------------------------------|-------------------------------------|------------------------------------|
| TMC Motor Driver                   | spi_output_format = SPI_OUT_CONF (3:0) | Cover Register Datagram Length COVER_DATA_LENTGH =0 | Automatic Current Datagram Transfer | Cover Register Datagram Transfer   |
| SPI output off                     | b'0000                                 | 0                                                   | --                                  | --                                 |
| TMC23x                             | b'1000                                 | 12                                                  |                                    |                                   |
| TMC24x                             | b'1001                                 | 12                                                  |                                    |                                   |
| TMC26x/389                         | b'1010 b'1011                          | 20 20                                               |  S/D output                        |                                   |
| TMC2130                            | b'1101 b'1100                          | 40 40                                               |  S/D output                        |                                   |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## TMC Motor Driver Response Datagram and Status Bits

## Events and Interrupts based on Motor Driver Status Bits

<!-- image -->

When a TMC motor driver receives a current datagram or a cover datagram that is transmitted via SPI output of TMC4331A, status data is sent back to the TMC4331A controller  immediately.  The  response  is  stored  in  the COVER\_DRV\_LOW 0x6E and COVER\_DRV\_HIGH 0x6F registers, just like all other cover requests.

The type and sequence of the status bits that are sent back are dependent on the selected motor driver. A detailed list for every motor driver is presented in the next sections, in which the motor driver communication specifics for every driver family are explained separately.

The mapping of the available status bits to the TMC4331A STATUS register is similar for each and every TMC stepper motor driver. The last eight bits - STATUS (31:24) are equal to the transferred motor status bits. A detailed overview is given in the register chapter 15.12. (page 152).

TMC4331A also provides one event at EVENTS (30) that is connected with the motor driver status bits. Here, any of the motor driver status bits can function as the base for this event.

In  order  to  activate  a  motor  driver  status  bit  for  the  motor  event EVENTS (30), do as follows:

## Action:

-  Selected one or more of the motor driver status for the motor event by assigning MSTATUS\_SELECTION = STEP\_CONF (23:16) register 0x0A accordingly.

## Result:

In case one of the selected motor status bits is activated (Wired-Or), the motor event switch EVENTS (30) generates an event.

In order to generate an interrupt  for this motor event, configure the INTR output accordingly, as explained in section 5.3. (page 22).

<!-- image -->

## Stall Detection and Stop-on-Stall

## stallGuard and stallGuard2 Functionality

## Representation of the Motor Stall Status

## Internal Velocity Ramp Stop-on-Stall

Activation

## Internal Velocity Ramp Activation after Stop-onStall

<!-- image -->

TMC stepper motor driver chips with stallGuard and stallGuard2 can detect stall and overload conditions based on the motor's back-EMF without the need of a position sensor. The stall detection status is returned via SPI.

For  more  information,  refer  to  the  AppNote  'Parameterization  of  stallGuard2  &amp; coolStep' that is available online at www.trinamic.com .

Except for TMC23x and TMC24x, which forward three load detection bits, the motor stall status is represented by one status bit. TMC4331A is able to stop the internal ramp as soon as a stall is recognized. Because stall bit activation can occur unwanted during motion with a low velocity, it is also possible to set up a velocity threshold for the Stop-on-Stall behavior.

## In order to activate a Stop-on-Stall for the internal velocity ramp, do as follows:

## Action:

-  Set VSTALL\_LIMIT register 0x67 [pps] according to  minimum absolute velocity value for a correct stall recognition.
-  Set stop\_on\_stall = 1 (bit26 of REFERENCE\_CONF register 0x01).
-  Set drive\_after\_stall = 0 (bit27 of REFERENCE\_CONF register 0x01).

## Result:

The internal ramp velocity is set immediately to 0 whenever a stall is detected and the following is true: |VACTUAL| &gt; VSTALL\_LIMIT.

Then, the STOP\_ON\_STALL  event is also generated.

- i The status bit stallGuard that is directly mapped from the motor stepper driver, which is listed in STATUS (24). This flag is always activated as soon as the motor driver generates the stall guard status bit.
- i The ACTIVE\_STALL status bit = STATUS (11) is activated as soon as a stall is detected and |VACTUAL| &gt; VSTALL\_LIMIT.

## In order to activate the internal velocity ramp AFTER a Stop-on-Stall, do as follows:

## Action:

-  Read out the EVENTS register 0x0E to unlock the event STOP\_ON\_STALL.
-  Set drive\_after\_stall = 1 (bit27 of REFERENCE\_CONF register 0x01).

## Result:

The internal ramp velocity is no longer blocked by the Stop-on-Stall event.

- i In order to activate the Stop-on-Stall behavior again, reset drive\_after\_stall again manually to 0.

<!-- image -->

## TMC23x, TMC24x Stepper Motor Driver

In this chapter specific information pertaining to the setup of TMC23x and TMC24x is provided.

## TMC23x/24x Support

## TMC23x Setup

## TMC24x Setup

<!-- image -->

TMC4331A provides the following features in order to support the TMC23x motor stepper driver family well:

-  Automatic Mixed Decay chopper mode
-  ChopSync
-  Automatic switchover between microstep and fullstep operation
-  Controlled PWM signal generation and automatic switchover between SPI and PWM mode; see section 12.2. (page 124).

In the following section, the features are explained in greater detail.

- i For further information, please refer to the manual of the particular stepper driver motor.

In  order  to  activate  the  SPI  data  transfer  and  SPI  feature  set  for  a connected TMC23x stepper motor driver, do as follows:

## Action:

-  Set spi\_output\_format = b'1000 (SPI\_OUT\_CONF register 0x04).
-  Set COVER\_DATA\_LENGTH = 0 (SPI\_OUT\_CONF register 0x04).

## Result:

TMC23x is selected as connected stepper motor driver.

In order to activate the SPI data transfer and feature set for a connected TMC24x stepper motor driver, do as follows:

## Action:

-  Set spi\_output\_format = b'1001 (SPI\_OUT\_CONF register 0x04).
-  Set COVER\_DATA\_LENGTH = 0 (SPI\_OUT\_CONF register 0x04).

## Result:

TMC24x is selected as connected stepper motor driver.

- i In addition to the TMC23x features mentioned above, the TMC24x stepper driver family provides three stallGuard bits as load measurement indicator. Therefore, the TMC24x stepper family is supported by the TMC4331A for the following:
-  Stall detection and
-  Stop-on-Stall behavior
-   Turn to next page for more information.

<!-- image -->

## TMC23x/24x Status Bits TMC23x/24x Microsteps

Automatic Fullstep Switchover for TMC23x/24x

<!-- image -->

TMC4331A maps the following status bits of TMC23x/24x stepper drivers - which are transferred with each SPI datagram - to the STATUS register 0x0F:

Table 44: Mapping of TMC23x/24x Status Flags

| Status Register Mapping for TMC23x/24x   | Status Register Mapping for TMC23x/24x   | Status Register Mapping for TMC23x/24x   |
|------------------------------------------|------------------------------------------|------------------------------------------|
| STATUS bit @TMC4331A                     | Status flag @TMC23x/24x                  | Description                              |
| STATUS (24)                              | UV                                       | Undervoltage flag.                       |
| STATUS (25)                              | OT                                       | Over temperature flag.                   |
| STATUS (26)                              | OTPW                                     | Temperature prewarning flag.             |
| STATUS (27)                              | OCA                                      | Overcurrent flag for bridge A.           |
| STATUS (28)                              | OCB                                      | Overcurrent flag for bridge B.           |
| STATUS (29)                              | OLA                                      | Open load flag for bridge A.             |
| STATUS (30)                              | OLB                                      | Open load flag for bridge B.             |
| STATUS (31)                              | OCHS                                     | Overcurrent high side flag.              |

TMC4331A only forward new current data (CURRENTA\_SPI and CURRENTB\_SPI at register 0x7B) for TMC23x/TMC24x in case the upper five bits of one of the two 9-bit current values changes; because TMC23x and TMC24x current data consist of four bit current values and one polarity bit for each coil.

Consequently, alterations of the internal microstep resolution only apply in case the new microstep resolution is lower than 16 bits.

Because SPI  current data  is  transmitted,  automatic  switchover  from  microsteps  to fullsteps and vice versa is only dependent on the internal ramp velocity.

In order to activate automatic switchover between microstep and fullstep operation, do as follows:

## Action:

-  Set FS\_VEL register 0x60 according to the velocity [pps] at which the switchover must happen.
-  Set fs\_en = 1 (bit19 of GENERAL\_CONF register 0x00).

## Result:

Now, current values are switched to fullstep values in case   |VACTUAL| ≥ FS\_VEL. A switchback from fullsteps to µsteps is executed in case      |VACTUAL| &lt; FS\_VEL. The  status  bit FS\_ACTIVE  is  set  active  as  long  as  fullstep  mode  is  enabled  and activated.

-   Turn to next page for more information.

<!-- image -->

## Mixed Decay Configuration for TMC23x/24x

ChopSync Configuration for TMC23x/24x Stepper Drivers

Doubling ChopSync Frequency during Standstill

<!-- image -->

TMC4331A  supports  the  mixed  decay  feature  for  the  TMC23x/24x  chopper  in SPI\_OUT\_CONF register 0x04.

## In order to configure mixed decay bits for TMC23x/24x, do as follows:

## Action:

-  Set mixed\_decay = b'00 if mixed decay must always be deactivated.
-  Set mixed\_decay = b'01 if mixed decay must be activated for each coil during the falling ramp of the sine curve until reaching value 0.
-  Set mixed\_decay = b'10 if mixed decay must always be activated, except during standstill.
-  Set mixed\_decay = b'11 if mixed decay must always be activated.

## Result:

The mixed decay bits for TMC23x/24x stepper motor drivers are set according to the configuration and the internal MSLUT values.

- i Please refer to the TMC23x/TMC24x datasheets to get more information about the configuration of mixed decay bits.

TMC4331A forwards the internal clock at the output pin STDBY\_CLK. This pin can also be used to provide an external clock for the TMC23x/24x stepper motor driver. This external clock generator automatically generates clock cycles that are modified by the chopSync  feature  if  TMC23x/24x  is  configured  as  connected  motor  driver.  Using chopSync enhances the motor drive for fast and smooth operation.

## In order to enable the chopSync clock via the STDBY\_CLK pin, do as follows:

## Action:

-  Set CHOPSYNC\_DIV register 0x1F to generate an external clock  frequency  fOSC according to the following equation: fOSC = fCLK / CHOP\_SYNC\_DIV.
-  Set stdby\_clk\_pin\_assignment = b'10 (GENERAL\_CONF register 0x00).

## Result:

STDBY\_CLK  generates  an  external  clock  with  the  selected  frequency  fOSC  that automatically provides the chopSync feature.

- i Recommended minimum external frequency fOSC: two times higher than audible range.

Because  chopper  noise  is  of  more  concern  during  standstill  than  during  motion, TMC4331A provides an option to automatically double the ChopSync frequency during standby.

If  seleceted,  a  ChopSync  frequency  within  the  audible  range  can  be  selected.  If doubled, ChopSync frequency operates outside audible range.

## In order to enable automatic chopSync frequency doubling, do as follows:

## Action:

-  Activate any of the above mentioned mixed\_decay options.
-  Set double\_freq\_at\_stdby = 1 (SPI\_OUT\_CONF register 0x04).

## Result:

ChopSync frequency is doubled during standby because CHOPSYNC\_DIV is halfed.

<!-- image -->

## Using TMC24x stallGuard Characteristics

TMC24x  forwards  stallGuard  values  ={LD2&amp;LD1&amp;LD0}  instead  of  one  stallGuard2 status bit. These bits represent an unsigned value between 0 and 7. The lower the value is the higher the mechanical load is. TMC4331A can generate a one-bit internal stall signal by analyzing the stallGuard values.

In order to set up the stall load limit for automatic stall recognition, do as follows:

## Action:

-  Set proper STALL\_LOAD\_LIMIT (bit10:8 of SPIOUT\_CONF register 0x04).

## Result:

Whenever {LD2&amp;LD1&amp;LD0} ≤ STALL\_LOAD\_LIMIT a stall is indicated.

This feature also allows use of the Stop-on-Stall feature - already explained in section 10.4.4, page 95 - because this also applies to other TMC motor stepper drivers.

Additionally,  a  standby  datagram  can  be  sent  automatically  when  a Stop-on-Stall is executed. In order to activate this behavior, do as follows:

## Action:

-  Set VSTALL\_LIMIT register 0x67 [pps] according to  minimum absolute velocity value for a correct stall recognition.
-  Set stop\_on\_stall = 1 (bit26 of REFERENCE\_CONF register 0x01).
-  Set drive\_after\_stall = 0 (bit27 of REFERENCE\_CONF register 0x01).
-  Set stdby\_on\_stall\_for\_24x = 1 (bit6 of SPIOUT\_CONF register 0x04).

## Result:

Whenever a stall is calculated by comparing STALL\_LOAD\_LIMIT to the response of TMC24x,  while at the same  time the absolute value of VACTUAL  exceeds VSTALL\_LIMIT, the internal ramp velocity is stopped immediately. Additionally, both current values are then set to 0 whereupon a standby mode for the TMC24x stepper motor driver is generated that switches off all power driver outputs and clears the error flags.

- i To return from Stop-on-Stall, drive\_after\_stall must be set manually, as stated further in section 10.4.4 (page 95).

In order to exchange the UV status bit in the STATUS register 0x0F with the calculated stallGuard bit, do as follows:

## Action:

-  Set stall\_flag\_instead\_of\_uv\_en = 1(bit10:8 of SPIOUT\_CONF register 0x04).

## Result:

STATUS (24) shows the calculated stallGuard bit by comparing STALL\_LOAD\_LIMIT with the received response datagram of TMC24x.

Connection of STDBY\_CLK output pin of TMC4331A and OSC input pin of TMC23x/24x 1

## NOTICE

Risk of Burns! Avoid overheating and damage of the TMC23x/24x stepper driver and damage of the connected motor!

-  You MUST use a low pass filter between STDBY\_CLK output of TMC4331A and the OSC input pin of TMC23x/24x.
-  You MUST keep the external clock frequency of the TMC23x/24x stepper motor driver below 50 kHz (to prevent overheating).

## This will ensure smooth and safe operation.

1 Per default (i.e. after power on and reset), STDBY\_CLK forwards the internal clock that is too high for the TMC23x/24x. See Figure 10 , (page 12) that provides a properly connected sample hardware setup.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## TMC26x Stepper Motor Driver

## TMC26x Stepper Motor Driver Support

## TMC26x Setup (SPI mode)

## TMC26x Setup (S/D mode)

TMC4331A provides  the  following  features  in  order  to  support  the  TMC26x  motor stepper driver family well:

-  SPI mode that sets up current values directly.
-  S/D mode in which the TMC26x processes S/D outputs of TMC4331A.
-  Automatic switchover between microstep and fullstep operation for both modes.
-  Stall detection and Stop-on-Stall behavior for both modes.
-  S/D mode only: Transfer of automatic scaling values from TMC4331A to TMC26x.
-  S/D mode only: Transfer of auto-generated polling datagrams sent by TMC4331A for reception of status data and microstep position from TMC26x.

In the following section, the features are explained in greater detail.

- i For more information, please refer to the manual of the connected stepper driver motor.

In  order  to  activate  the  SPI  data  transfer  mode  and  feature  set  for  a connected TMC26x stepper motor driver, do as follows:

## Action:

-  Set spi\_output\_format = b'1010 (SPI\_OUT\_CONF register 0x04).
-  Set COVER\_DATA\_LENGTH = 0 (SPI\_OUT\_CONF register 0x04).

## Result:

TMC26x in SPI mode is selected as connected stepper motor driver. Cover datagrams and current datagrams are sent via SPI output pins.

In order to activate the S/D mode and feature set for a connected TMC26x stepper motor driver, do as follows:

## Action:

-  Connect SPI output pins and S/D outputs to the TMC26x stepper motor driver.
-  Set spi\_output\_format = b'1011 (SPI\_OUT\_CONF register 0x04).
-  Set COVER\_DATA\_LENGTH = 0 (SPI\_OUT\_CONF register 0x04).
-  Set DIR\_SETUP\_TIME and STP\_LENGTH\_ADD (register  0x10)  according  to  the hardware setup.
-  Set proper POLL\_BLOCK\_EXP (bit11:8 of SPIOUT\_CONF register 0x04).

## Result:

TMC26x in S/D mode is selected as connected stepper motor driver. SPI output pins transfer only cover datagram and automatic configuration datagrams because motion is generated by processing the STPOUT/DIROUT output signals of TMC4331A.

The  next  polling  datagram  is  sent  2^POLL\_BLOCK\_EXP · SPI\_BLOCK\_TIME  clock cycles after the last polling datagram.

- i A high microstep frequency requires a short SPI datagram polling time.
-   Continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Sending Cover Datagrams to TMC26x

Automatic Continuous Streaming of Cover Datagrams for TMC26x

<!-- image -->

Based on the TMC26x settings - that were explained above - TMC4331A now sends 20-bit datagrams automatically.

In order to send cover datagrams to TMC26x motor stepper drivers, do as follows:

## Action:

 Set COVER\_LOW (19:0) to the register values that need to be transferred.

## Result:

A cover datagram is sent to the connected driver. COVER\_DONE is set after data transfer. The response of TMC26x is stored in COVER\_DRV\_LOW (19:0).

In case the TMC26x driver operates in SPI mode, COVER\_DONE is also set when a current datagram is transferred.

## In order to enable COVER\_DONE only for cover datagrams, do as follows:

## Action:

 Set cover\_done\_only\_for\_covers = 1 (bit12 of SPI\_OUT\_CONF register 0x04).

## Result:

COVER\_DONE event is only set if a cover datagram is sent, not for current datagrams.

It is a common approach that the microcontroller continuously rewrites register values for TMC26x to respond to possible voltage drops at the VS pin of TMC26x, which - if they occur - prompt an internal register reset, by design.

TMC4331A provides an option to continuously rewrite the five configuration registers of TMC26x, which take off workload from the microcontroller.

In  order  to  activate  automatic  continuous  streaming  of  TMC26x  cover datagrams, do as follows:

## Action:

 Set autorepeat\_cover\_en = 1 (bit7 of SPI\_OUT\_CONF register 0x04).

## Result:

In  case  cover  datagrams  are  sent  to  TMC26x  while autorepeat\_cover\_en = 1, TMC4331A  transfers  a  cover  datagram  every  2 20   clock  cycle.  Every  time  another register is addressed, the cover datagrams are retransferred one after the other in consecutive order; i.e. round-robin style.

- i However, the transfer rate remains at one datagram per 2 20  clock cycles.

## NOTE:

-  When TMC26x is operating in SPI mode, current datagrams are also repeated, if the value does not change; within one transfer interval cycle.
-  In case a TMC26x register is rewritten manually by cover datagrams, this last register value is, by definition, repeated.
-  Automatic register changes executed by TMC4331A - e.g. automatic scaling value transfers - are considered as well for repeated cover datagrams.

<!-- image -->

TMC26x SPI Mode: Automatic Fullstep Switchover

TMC26x S/D Mode: Automatic Fullstep Switchover

<!-- image -->

Because SPI current data is transmitted,  automatic  switchover from microsteps to fullsteps and vice versa entirely depends on internal ramp velocity.

In order to activate automatic switchover between microstep and fullstep operation, do as follows:

## Action:

-  Set FS\_VEL register 0x60 according to the absolute velocity [pps] at which the switchover should happen.
-  Set fs\_en = 1 (bit19 of GENERAL\_CONF register 0x00).

## Result:

Now, current values are switched to fullstep values, in case   |VACTUAL| ≥ FS\_VEL. A switchback from fullsteps to µsteps is executed, in case     |VACTUAL| &lt; FS\_VEL.

The  status  bit FS\_ACTIVE  is  set  active  as  long  as  fullstep  mode  is  enabled  and activated.

In  S/D  mode,  switchover  from  microsteps  to  fullsteps  and  vice  versa  is  not  only dependent on internal ramp velocity but also on the microstep position of the TMC26x MSLUT; because switching to a lower resolution must be executed carefully to catch the correct microstep position. Proper setting of read selection bits for TMC26x stepper drivers TMC4331A is required to execute switchover automatically.

In order to activate automatic switchover between microstep and fullstep operation in TMC26x S/D mode, do as follows:

## PRECONDITION:

## Mandatory TMC26x configuration MUST be executed via cover datagrams:

-  Set RDSEL1 = 0 and RDSEL0 = 0 @TMC26x.

## Action:

-  Set disable\_polling = 0 (bit6 of SPI\_OUT\_CONF register 0x04).
-  Set FS\_VEL register 0x60 according to the absolute switching velocity [pps].
-  Set fs\_en = 1 (bit19 of GENERAL\_CONF register 0x00).
-  Set fs\_sdout = 0 (bit20 of GENERAL\_CONF register 0x00).

## Result:

The µstep resolution of TMC26x is set to fullsteps, in case |VACTUAL| ≥ FS\_VEL. A switchback from fullsteps to µsteps is executed in case |VACTUAL| &lt; FS\_VEL. FS\_ACTIVE  is  set  active  as  long  as  fullstep  mode  is  enabled  and  activated. Presettings of the TMC26x DRVCTRL register - that is executed beforehand via cover datagrams - are considered whenever the particular register is overwritten with a newly assigned microstep resolution.

-   Turn page for information on changing current scaling parameters for TMC26x in S/D mode.

<!-- image -->

TMC 26x S/D Mode: Change of Current Scaling Parameter

## TMC26x Status Bits

TMC26x Status Response

SPI mode-supported TMC26x drivers are automatically scaled by means of current datagrams. In order to automatically scale the current of a connected TMC26x motor stepper driver in S/D mode, TMC4331A sends auto-generated cover datagrams by altering directly the CS value of the TMC26x SGCSCONF register.

TMC4331A provides features that change the current scaling automatically, which are explained in chapter 11, page 113.

In order to activate automatic current scaling for a connected TMC26x in S/D mode, do as follows:

## Action:

-  Set scale\_val\_transfer\_en = 1 (bit5 of SPI\_OUT\_CONF register 0x04).
-  Set the scale value register 0x06 and scale configuration register 0x05 according to your requirements (see chapter 11, page 113).

## Result:

If  the  current  scaling  is  adapted  internally,  TMC4331A  automatically  sends  cover datagrams to TMC26x that change the CS bit directly.

Presettings of the TMC26x SGCSCONF register - that are executed beforehand via cover datagrams - become considered whenever the particular register is overwritten with a newly assigned current scaling value.

## NOTE:

-  Please consider that the CS value consists of 5 bits only. Therefore, the scaling values in register 0x06 must be adapted to 5-bit values as well.

TMC4331A maps the following  status  bits  of  TMC26x  stepper  drivers  -  which  are transferred within each SPI response - to the STATUS register 0x0F:

Table 45: Mapping of TMC26x Status Flags

| Status Register Mapping for TMC26x   | Status Register Mapping for TMC26x   | Status Register Mapping for TMC26x                            |
|--------------------------------------|--------------------------------------|---------------------------------------------------------------|
| STATUS Bit @TMC4331A                 | Status Flag @TMC26x                  | Description                                                   |
| STATUS (24)                          | SG                                   | stallGuard2™ status flag                                      |
| STATUS (25)                          | OT                                   | Over temperature flag                                         |
| STATUS (26)                          | OTPW                                 | Temperature prewarning flag                                   |
| STATUS (27)                          | S2GA                                 | Short-to-ground detection flag for high side MOSFET of coil A |
| STATUS (28)                          | S2GB                                 | Short-to-ground detection flag for high side MOSFET of coil B |
| STATUS (29)                          | OLA                                  | Open load flag for bridge A                                   |
| STATUS (30)                          | OLB                                  | Open load flag for bridge B                                   |
| STATUS (31)                          | STST                                 | Standstill flag                                               |

- i If polling is not disabled, status data from TMC26x is also available in S/D mode.

The DRV\_STATUS register of TMC26x is always sent in response to any transferred datagram of TMC4331A.

## In order to store the DRV\_STATUS response of TMC26x, do as follows:

## Action:

 Set disbale\_polling = 0 (bit5 of SPI\_OUT\_CONF register 0x04).

## Result:

TMC4331A stores the value of this response in POLLING\_STATUS register 0x6C which then can be read out.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## TMC389 Stepper Motor Driver

Configuration for the TMC389 3--Phase Stepper Driver

<!-- image -->

If a TMC389 is connected to the SPI output and a microstep resolution of 256 is set, a 3-phase stepper output for coil B can be generated. All features of TMC26x stepper motor drivers in SPI mode are also available for TMC389.

In  order  to  activate  the  SPI  data  transfer  mode  and  feature  set  -  for  a connected TMC389 3-phase stepper motor driver - do as follows:

## Action:

-  Set spi\_output\_format = b'1010 (SPI\_OUT\_CONF register 0x04).
-  Set three\_phase\_stepper\_en = 1 (SPI\_OUT\_CONF register 0x04).
-  Set COVER\_DATA\_LENGTH = 0 (SPI\_OUT\_CONF register 0x04).

## Result:

Now,  the CURRENTB  and CURRENTB\_SPI  values  are  shifted  by  120°  towards CURRENTA  and CURRENTA\_SPI - in contrast to the 90° shift of the 2-phase stepper motors.

<!-- image -->

## TMC2130 Stepper Motor Driver

## TMC2130 Support

## Set-up TMC2130 Support (SPI Mode)

## Set-up TMC2130 Support (S/D Mode)

<!-- image -->

TMC4331A provides the following features in order to support the TMC2130 motor stepper driver well:

-  SPI mode that sets up current values directly.
-  S/D mode in which the TMC2130 processes S/D outputs of TMC4331A.
-  Automatic switchover between microstep and fullstep operation for both modes.
-  Stall detection and Stop-on-Stall behavior for both modes.
-  S/D mode only: Transfer of automatic scaling datagrams from TMC4331A to TMC2130.
-  S/D mode only: Transfer of auto-generated polling datagrams sent by TMC4331A for reception of status data and microstep position from TMC2130.

In the following section, the features are explained in greater detail.

- i For more information, please refer to the manual of the TMC2130 stepper driver motor.

In  order  to  activate  the  SPI  data  transfer  mode  and  feature  set  -  for  a connected TMC2130 stepper motor driver - do as follows:

## Action:

-  Set spi\_output\_format = b'1101 (SPI\_OUT\_CONF register 0x04).
-  Set COVER\_DATA\_LENGTH = 0 (SPI\_OUT\_CONF register 0x04).

## Result:

TMC2130 in SPI mode is selected as connected stepper motor driver. Cover datagrams and current datagrams are sent via SPI output pins.

In  order  to  activate  the  S/D  mode  and  feature  set  -  for  a  connected TMC2130 stepper motor driver - do as follows:

## Action:

-  Connect SPI output pins and S/D outputs to the TMC2130 stepper motor driver.
-  Set spi\_output\_format = b'1100 (SPI\_OUT\_CONF register 0x04).
-  Set COVER\_DATA\_LENGTH = 0 (SPI\_OUT\_CONF register 0x04).
-  Set DIR\_SETUP\_TIME and STP\_LENGTH\_ADD (register  0x10)  according  to  the hardware setup.
-  Set proper POLL\_BLOCK\_EXP (bit11:8 of SPIOUT\_CONF register 0x04).

## Result:

TMC2130 in S/D mode is selected as connected stepper motor driver. SPI output pins transfer only cover datagrams and automatic configuration datagrams because motion is generated by processing the STPOUT/DIROUT output signals of TMC4331A.

The  next  polling  datagram  is  sent  2^POLL\_BLOCK\_EXP · SPI\_BLOCK\_TIME  clock cycles after the last polling datagram.

- i A high microstep frequency requires a short SPI datagram polling time.

<!-- image -->

## Sending Cover Datagrams to TMC2130

Automatic Continuous Streaming of Cover Datagrams for TMC2130

<!-- image -->

Based upon the TMC2130-supported settings explained above, the TMC4331A now sends 40 bit datagrams automatically.

In  order  to  send  cover  datagrams  to  TMC2130  stepper  drivers,  do  as follows:

## Action:

-  Set COVER\_HIGH (7:0) register 0x6D to address value that needs to be sent.
-  Set COVER\_LOW (31:0) register 0x6C to data values that needs to be sent.

## Result:

A cover datagram is sent to the connected driver. COVER\_DONE is set after data transfer.  The  response  of  TMC2130  is  stored  in COVER\_DRV\_HIGH (7:0)  and COVER\_DRV\_LOW (31:0).

In case the TMC2130 driver operates in SPI mode, COVER\_DONE is also set when a current datagram is transferred. This also applies to polling datagrams, explained in section 10.8.8, page 108.

## In order to enable COVER\_DONE only for cover datagrams, do as follows:

## Action:

-  Set cover\_done\_only\_for\_covers = 1 (bit12 of SPI\_OUT\_CONF register 0x04).

## Result:

COVER\_DONE event is only set if a cover datagram is sent, not for current datagrams.

It is a common approach that the microcontroller continuously rewrites register values for TMC2130 to respond to possible voltage drops at the VS pin of TMC2130, which if they occur - prompt an internal register reset, by design.

TMC4331A provides an option to continuously rewrite five configuration registers of TMC2130, which take off workload from the microcontroller.

These  registers  are: GCONF  0x00,  IHOLD\_IRUN  0x10,  CHOPCONF  0x6C, COOLCONF 0x6D, and DCCTRL 0x6E .

In  order  to  activate  automatic  continuous  streaming  of  TMC2130  cover datagrams, do as follows:

## Action:

-  Set autorepeat\_cover\_en = 1 (bit7 of SPI\_OUT\_CONF register 0x04).

## Result:

In case cover datagrams are sent to TMC2130 register - that are mentioned above while autorepeat\_cover\_en = 1, TMC4331A transfers a cover datagram every 2 20  clock cycle. Everytime another register is addressed, the cover datagrams are retransferred one after the other in consecutive order; i.e. round-robin style.

- i However, the transfer rate remains at one datagram per 2 20  clock cycles.

## NOTE:

-  When TMC2130 is operating in SPI mode, current datagrams are also repeated, if the value does not change; within one transfer interval cycle.
-  In case one of the five above mentioned TMC2130 register is rewritten manually by cover datagrams, this last register value is, by definition, repeated.
-  Automatic register changes executed by TMC4331A - e.g. automatic scaling value transfers - are considered as well for repeated cover datagrams.

<!-- image -->

TMC2130 SPI Mode: Automatic Fullstep Switchover

TMC2130 S/D Mode: Automatic Fullstep Switchover

TMC 2130 S/D Mode: Changing current Scaling Parameter

<!-- image -->

Because SPI current data is transmitted, the automatic switchover from microsteps to fullsteps and vice versa entirely depends on the internal ramp velocity.

In order to activate automatic switchover between microstep and fullstep operation, do as follows:

## Action:

-  Set FS\_VEL  register  0x60  according  to  absolute  velocity  [pps]  at  which  the switchover should happen.
-  Set fs\_en = 1 (bit19 of GENERAL\_CONF register 0x00).

## Result:

Now, current values are switched to fullstep values, in case |VACTUAL| ≥ FS\_VEL. A switchback from fullsteps to µsteps is executed in case     |VACTUAL| &lt; FS\_VEL. The  status  bit

FS\_ACTIVE  is  set  active  as  long  as  fullstep  mode  is  enabled  and activated.

During  S/D  mode,  switchover  from  microsteps  to  fullsteps  and  vice  versa  is  only executed directly by TMC2130. Therefore, a fullstep velocity must only be defined in TMC2130. TMC4331A transfers microsteps whether TMC2130 is operating in fullstep or microstep mode.

TMC4331A provides features that change the current scaling automatically, which is explained in chapter 11, page 113. Stepper motor drivers that are supported by SPI current datagrams are automatically scaled via current datagrams. To automatically scale  the  current  of  a  connected  TMC2130  motor  stepper  driver  in  S/D  mode, TM4331A  sends  auto-generated  cover  datagrams  by  altering  the  CS  value  of  the TMC2130 IHOLD\_IRUN register.

## In order to activate automatic current scaling for TMC2130 in S/D mode:

## Action:

-  Set scale\_val\_transfer\_en = 1 (bit5 of SPI\_OUT\_CONF register 0x04).
-  Set scale value register 0x06 and scale configuration register 0x05 according to your requirements (see chapter 11, page 113).

## Result:

When  current  scaling  is  adapted  internally,  TMC4331A  sends  cover  datagrams  to TMC2130 automatically, which changes the CS bit directly.

Presettings of the IHOLD\_IRUN register of the TMC2130 - executed before via cover datagrams - are considered whenever the particular register is overwritten with a newly assigned current scaling value.

- i Please consider that the IRUN and IHOLD values consist of 5 bits only. Therefore, scaling values in register 0x06 must also be adapted to 5-bit values.

<!-- image -->

## TMC2130 Status Bits

## TMC2130 Status Response

<!-- image -->

TMC4331A maps the following status bits of TMC2130 stepper drivers - which are transferred within each SPI response - to the STATUS register 0x0F:

Table 46: Mapping of TMC2130 Status Flags

| Status Register Mapping for TMC2130   | Status Register Mapping for TMC2130   | Status Register Mapping for TMC2130                            |
|---------------------------------------|---------------------------------------|----------------------------------------------------------------|
| STATUS Bit @TMC4331A                  | Status Flag @TMC2130                  | Description                                                    |
| STATUS (24)                           | SG                                    | stallGuard2™ status flag.                                      |
| STATUS (25)                           | OT                                    | Over temperature flag.                                         |
| STATUS (26)                           | OTPW                                  | Temperature prewarning flag.                                   |
| STATUS (27)                           | S2GA                                  | Short-to-ground detection flag for high side MOSFET of coil A. |
| STATUS (28)                           | S2GB                                  | Short-to-ground detection flag for high side MOSFET of coil B. |
| STATUS (29)                           | OLA                                   | Open load flag for bridge A.                                   |
| STATUS (30)                           | OLB                                   | Open load flag for bridge B.                                   |
| STATUS (31)                           | STST                                  | Standstill flag.                                               |

- i If polling is not disabled (disable\_polling = 0), status data from TMC2130 is also available in S/D mode.

TMC4331A continuously polls five status registers of TMC2130, if not disabled. These register are GSTAT 0x01, PWM\_SCALE 0x71, LOST\_STEPS 0x73 and DRV\_STATUS 0x6F.

## In order to store the polled register values of TMC2130, do as follows:

## Action:

-  Set disbale\_polling = 0 (bit5 of SPI\_OUT\_CONF register 0x04).

## Result:

TMC4331A stores the value of DRV\_STATUS in POLLING\_STATUS register 0x6C, which then can be read out.

The response for polling of GSTAT, PWM\_SCALE and LOST\_STEPS are merged in the POLLING\_REG register 0x6D, which then can also be read out.

<!-- image -->

## Connecting Non-TMC Stepper Motor Driver or SPI-DAC at SPI output interface

TMC4331A also provides configuration data for driver chips of other companies via the cover registers. The following output format settings can be selected:

Table 47: Non-TMC Data Transfer Options

| Non-TMC Data Transfer Options   | Non-TMC Data Transfer Options   | Non-TMC Data Transfer Options                                                                                                                                                                                                                                                            |
|---------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Output Formats                  | spi_output_format               | Comment                                                                                                                                                                                                                                                                                  |
| SPI output off                  | b'0000                          | SPI output driver pins are switched off.                                                                                                                                                                                                                                                 |
| Cover output only               | b'1111                          | Only cover datagrams are sent via the SPI output pins.                                                                                                                                                                                                                                   |
| Unsigned scaling factor         | b'0100                          | The actual unsigned current scaling value is provided at the SPI output pins.                                                                                                                                                                                                            |
| Signed current data             | b'0101                          | Both actual signed current values are provided in one datagram at the SPI output pins.                                                                                                                                                                                                   |
| DAC scaling factor              | b'0110                          | The actual unsigned current scaling value is provided at the SPI output pins for a defined DAC address.                                                                                                                                                                                  |
| DAC absolute values             | b'0011                          | Both actual signed current values are provided in two datagrams at the SPI output pins for defined DAC addresses, which are absolute values. Phase bits are generated at the STPOUT/DIROUT interface. Phase bit = 0 signifies positive values.                                           |
| DAC absolute values             | b'0010                          | Both actual signed current values are provided in two datagrams at the SPI output pins for defined DAC addresses, which are absolute values. Phase bits are generated at the STPOUT/DIROUT interface. Phase bit = 1 signifies positive values.                                           |
| DAC adapted values              | b'0001                          | Both actual signed current values are provided in two datagrams at the SPI output pins for defined DAC addresses. These values are mapped to positive values: Current value equals minimum value (-255) = 0 Current value equals 0 = 128 Current value equals maximum value (+255) = 255 |

## NOTE:

-  Please note that the COVER\_DATA\_LENGTH must be set according to the predefined driver chip datagram length.

| Cover Output only               | In order to send cover datagrams only, use this option to avoid datagrams that send scaling or current values whenever these internal values are changed. !                                                                                                                                                                                                       |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sending unsigned Scaling Factor | Setting spi_output_format = b'0100 leads to a transfer of the 8-bit scaling factor if this value is altered internally: Output data(7:0) = SCALE_PARAM (7:0). The MSB 7 is sent first. If more than 8 bits are configured as COVER_DATA_LENGTH, leading zeros are inserted before the MSB.                                                                        |
| Sending signed Current Values   | Setting spi_output_format = b'0101 leads to a transfer of both signed current values that consists of 18 bits and are sent one after the other in one datagram: Output data(17:0) = CURRENTA_SPI (8:0) & CURRENTB_SPI (8:0). The MSB (bit17) is sent first. If more than 18 bits are configured as COVER_DATA_LENGTH , leading zeros are inserted before the MSB. |

<!-- image -->

<!-- image -->

## Connecting a SPI-DAC

## DAC Output Values

## DAC Data Transfer

## Changing SPI Output Protocol for SPI-DAC

<!-- image -->

Connecting a compatible SPI-DAC to SPI output pins, several possibilities are available for output configuration:

-  Output of the internal SPI current values.
-  Output of the internal current scaling value.
-  Several SPI protocols are available.

SPI-DACs can convert more than one digital value, but every value is transmitted in one datagram. Because TMC4331A provides two current values, a datagram transfer from TMC4331A to a connected SPI-DAC is split into two datagrams, one for each current value: CURRENTA\_SPI and CURRENTB\_SPI.

The transmission is initiated as soon as one of both values is changed internally. The data transfer of the second current value CURRENTB\_SPI is executed automatically whenever the transmission of CURRENTA\_SPI is completed.

If only the scaling factor SCALE\_PARAM needs to be transferred, only one datagram is sent out.

Per default, the SPI protocol follows the TMC style: To initiate a data transfer, the negated chip select signal NSCSDRV switches from high to low level. After a while, the serial clock SCKDRV switches from high to low level. When the transmission is finished, the  serial  clock  switches  to  high  level.  Afterwards,  the  negated  chip  select  signal switches to high level to finish the data transfer.

## Adaptations to suit other SPI protocols are also available:

In order to set serial clock to low level - before the negated chip select switches to low level - do as follows:

## Action:

-  Set sck\_low\_before\_csn = 1 (bit4 of SPIOUT\_CONF register 0x04).

## Result:

SCKDRV is tied low before NSCSDRV switches to low level to initiate data transfer.

Per default, TMC drivers sample master data with the rising edge of the serial master clock. Thus, TMC4331A shifts output data at SDODRV with the falling edge of SCKDRV.

If the data must be sampled with the falling edge of the master clock at the driver's side, do as follows:

## Action:

-  Set new\_out\_bit\_at\_rise = 1 (bit5 of SPIOUT\_CONF register 0x04).

## Result:

The output data at SDODRV is changed with the rising edge of SCKDRV.

<!-- image -->

## DAC Address Values

## DAC Data Values

SPI transmission to a DAC transfers an address or a command prior to the value that must be defined. The length of the prefixed command/address can be assigned by setting DAC\_CMD\_LENGTH according to specification of the SPI-DAC.

## In order to set up the DAC communication scheme, do as follows:

## Action:

-  Set DAC\_CMD\_LENGTH (bit11:7 of SPI\_OUT\_CONF register 0x04) according to the length of the address / command, which is placed in front of the values.
-  Set DAC\_ADDR register 0x1D according to your requirements:
- Address/command of the 1 st  value: Set DAC\_ADDR(15:0) = DAC\_ADDR\_A.
- Address/command of the 2 nd  value: Set DAC\_ADDR(31:16)= DAC\_ADDR\_B.

## Result:

DAC\_ADDR\_A is placed in front of the first transferred value that can be the current value of coilA (=CURRENTA\_SPI) or the scaling factor (=SCALE\_PARAM), whereas DAC\_ADDR\_B is placed before the second current value CURRENTB\_SPI.

- i COVER\_DATA\_LENGTH comprises the whole datagram length, which is the sum of the address/length DAC\_CMD\_LENGTH and the 8-bit data length.
- i If  the  cover  register  length  comprises  more  bits  than  the  combination  of address/command and value, trailing zeros are added at the end.
- i The  command bits  consist  of  the  least  significant  bits  of DAC\_ADDR\_x if the command length is less than 16 bits long.

## Several opportunities are available for the DAC data style:

-  Current  values  are  converted  to  absolute  values.  The  phases  of  the  values  are generated at the STPOUT (coilA) and DIROUT (coilB) pins. The base line (value equals 0) is located at 0 (see Table 48, Figures B and C ).
-  The current values - which range between -255 and 255 - are mapped to values between 0 and +255: the minimum value of -255 is an output value of 0, whereas the baseline is set to +128. The maximum value remains at +255. In detail, the value is divided by two and 128 is added to the quotient (Table 48, page 112, Fig. A ).

## TMC4381 provides an offset to compensate for a shifted DAC baseline.

## In order to shift the DAC baseline, do as follows:

## Action:

-  Set DAC\_OFFSET (bit31:24 of register 0x7E) according to your requirements.

## Result:

The  digital  values  are  shifted  accordingly.  Table  48,  page  112, Figure  D shows absolute DAC values. The DAC baseline is shifted  by 32 steps, whereas Table  48, page 112, Figure E shows mapped DAC values, which are shifted by 64 steps.

- i For the three available absolute values options - including the unsigned scale parameter transfer - the offset represents an unsigned number.
- i For the mapped values option the offset represents a signed number. To avoid a carry  over  at  the  value  limits  +255  and  -256  when  using  an  DAC  offset,  the MSLUT values must be scaled down for the SPI output values (see Table 48, page 112, figures D and E). This can be done by using the current scale feature, as explained in chapter 11, page 113.
-   Continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Table 48: Available SPI-DAC Options

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 11. Current Scaling

The current values of register 0x7A - CURRENTA and CURRENTB - of the microstep lookup table (MSLUT) represent the maximum 9-bit signed values, which can be sent via the SPIOUT output interface. In most sections of the velocity ramp it is not required to drive the motor with the full current amplitude. Various possibilities are implemented that allow adaptation of actual current values of the MSLUT to the present ramp status. Scale parameters are available for boost current, hold current, and drive current.

These parameters can be assigned independently in the SCALE\_VALUES register 0x06, and are used automatically for different states of the velocity ramp; if enabled, as described below. Prior  to  describing  the  various  feasible scaling situations, a  brief  explanation of  the scaling calculation is provided.

Calculation of the Current Output Values

Description of Scaling Calculation

## AREAS OF SPECIAL CONCERN

When scaling is enabled for the present ramp state, the actual current values of the MSLUT are multiplied with the MULT\_SCALE parameter that is deduced from one of the four SCALE\_VALUES:

MULT\_SCALE = (actual\_SCALE\_VAL + 1) / 256 with actual\_SCALE\_VAL = {HOLD, BOOST, DRV1, DRV2}.

Consequently, this MULT\_SCALE ranges from 0 to 1: 0 &lt; MULT\_SCALE ≤ 1.

MULT\_SCALE  is  then  multiplied  with  the  actual  current  values CURRENTA  and CURRENTB, which are generated by the MSLUT:

CURRENTA\_SPI = CURRENTA · MULT\_SCALE (bit8:0 of 0x7B) CURRENTB\_SPI = CURRENTB · MULT\_SCALE (bit24:16 of 0x7B)

These values are transferred via SPI output interface. If no current scaling is enabled, the output values CURRENTA\_SPI and CURRENTB\_SPI are equal to the MSLUT values CURRENTA and CURRENTB because the scaling values are equal to the maximum 255, per default. Thus, scaling will only decrease the original MSLUT values.

Also, the actual scale parameter can assume intermediate values because TMC4331A offers possibilities to convert smoothly from one scale value to another. The actual scale parameter SCALE\_PARAM can be read out at register 0x7C. It has the same range as the four SCALE\_VALUES.

## Use of TMC26x and TMC2130 stepper motor drivers in S/D mode:

If  TMC  motor  stepper  drivers  are  used  in  S/D mode,  scaling  values  comprise  only 5 bits because the CS value of TMC26x, and the IHOLD, IRUN values of TMC2130 motor  stepper  drivers  are  adapted  directly.  Therefore,  MULT\_SCALE  is  calculated slightly differently:

MULT\_SCALE = (actual\_SCALE\_VAL + 1) / 32

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

!

<!-- image -->

## Hold Current Scaling

## Standby Status

## Freewheeling

<!-- image -->

During standstill, the current can be scaled down considerably in most applications because the energy demand is lower than during motion. In addition to the scaling value, the standby delay must be configured. The delay defines the time between ramp stop and startup of hold scaling. Whenever the delay is set to 0, hold scaling is immediately enabled at the end of the velocity ramp. Because most applications require waiting for system oscillations after ramp stop, this delay must be set up in most cases.

## In order to set up and enable hold current scaling, do as follows:

## Action:

-  Set the time frame for STDBY\_DEALY register 0x15 after ramp stop, and before standby phase starts.
-  Set HOLD\_SCALE\_VAL  = SCALE\_VALUES (31:24)  according  to  the  maximum current during motor standstill.
-  Set hold\_current\_scale\_en = 1 (CURRENT\_CONF register 0x05).

## Result:

The standby timer is started as soon as VACTUAL reaches 0. After STDBY\_DELAY clock cycles the standby timer expires that activates the hold scaling phase.

The standby status can be forwarded via STDBY\_CLK output pin.

## In order to generate an output standby signal, do as follows:

## Action:

-  Set stdby\_clk\_pin\_assignment (1) = 0 (Bit14 of GENERAL\_CONF register 0x00).
-  Set stdby\_clk\_pin\_assignment (0) (Bit13 of GENERAL\_CONF  register 0x00) according to the active voltage level of the output pin.

## Result:

STDBY\_CLK output pin forwards the internally generated standby status. The active output level equals stdby\_clk\_pin\_assignment (0).

Some applications require a freewheeling behavior after ramp stop. This means that the current values are set to 0. A delay timer can be configured to define the time between standby start and the beginning of freewheeling.

## In order to set up and enable freewheeling, do as follows:

## Action:

-  Set FREEWHEEL\_DELAY register 0x16 according to the duration of the time after standby start, so that freewheeling is activated accordingly.
-  Set freewheeling\_en = 1 (CURRENT\_CONF register 0x05).

## Result:

The freewheeling timer is started as soon as the standby mode is activated. After completion of FREEWHEEL\_DELAY clock cycles, the freewheeling timer expires that activates the freewheeling phase.

- i Just before the velocity ramps starts internal scaling is set to the standby scaling value. This avoids starting the ramp at current values that are equal to 0.

<!-- image -->

## Current Scaling during Motion

If the current values need to be scaled during motion, several options are available. Up to three scaling values can be selected: Two drive scaling values and one boost scale value. Different scale values can be automatically assigned to the various sections of the velocity ramp.

## Drive Scaling

## Alternative Drive Scaling

<!-- image -->

Drive scaling is the preferred direct and mostly unconditional scaling option. If no boost scaling is enabled, the current values are scaled according to the given scale value, independent of the present ramp status.

## In order to set up and enable only drive current scaling, do as follows:

## Action:

-  Set DRV1\_SCALE\_VAL = SCALE\_VALUES (15:8) according to the maximum current during motion.
-  Set drive\_current\_scale\_en = 1 (CURRENT\_CONF register 0x05).

## Result:

As long as no other motion scale options are activated the current values of the MSLUT are scaled according to DRV1\_SCALE\_VAL during motion (VACTUAL &lt;&gt; 0).

A second drive scale parameter can be assigned in order to differentiate the motion scaling according to the internal ramp velocity.

In order to set up and enable drive current scaling with two different scaling values, do as follows:

## Action:

-  Set VDRV\_SCALE\_LIMIT  register  0x17  [pps]  according  to  switching  velocity  at which drive scaling will change.
-  Set  DRV1\_SCALE\_VAL  = SCALE\_VALUES(15:8)  according  to  maximum  current during motion below VDRV\_SCALE\_LIMIT.
-  Set DRV2\_SCALE\_VAL = SCALE\_VALUES(23:16) according to maximum current during motion beyond VDRV\_SCALE\_LIMIT.
-  Set drive\_current\_scale\_en = 1 (CURRENT\_CONF register 0x05).
-  Set sec\_drive\_current\_scale\_en = 1 (CURRENT\_CONF register 0x05).

## Result:

As long as no boost scaling is activated, the current values of the MSLUT are scaled according to DRV1\_SCALE\_VAL as long as VACTUAL ≤ VDRV\_SCALE\_LIMIT.

Whenever VACTUAL &gt; VDRV\_SCALE\_LIMIT the current values are scaled according to DRV2\_SCALE\_VAL.

<!-- image -->

## Boost Current

<!-- image -->

In certain sections of the velocity ramp it can be useful to boost the current. Boost current  can  be  assigned  temporarily  either  after  ramp  start  or  during  the  whole ac-/deceleration phase. All options can be selected separately, or in combination.

- i All three options use the same scaling value BOOST\_SCALE\_VAL.

## OPTION 1: BOOST SCALING AT RAMP START

In order to set up and enable boost current scaling within a defined time frame directly after the velocity ramp start-up, do as follows:

## Action:

-  Set BOOST\_TIME  register  0x18  according  to  the  delay  period  at  which  boost current scaling is activated after a velocity ramp start.
-  Set BOOST\_SCALE\_VAL = SCALE\_VALUES (7:0) according to the  maximum current during the boost phase.
-  Set boost\_current\_after\_start\_en = 1 (CURRENT\_CONF register 0x05).

## Result:

After  the  velocity  ramp  start  (VACTUAL = 0  before),  boost  scaling  is  activated according to BOOST\_SCALE\_VAL. The boost timer expires after BOOST\_TIME clock cycles. Afterwards, any other selected scaling value is used, if active and selected.

## OPTION 2: BOOST SCALING ON ACCELERATION SLOPES

In  order  to  set  up  and  enable  boost  current  scaling  for  the  acceleration phase of the velocity ramp, do as follows:

## Action:

-  Set BOOST\_SCALE\_VAL  = SCALE\_VALUES (7:0)  according  to  the  maximum current during the boost phase.
-  Set boost\_current\_on\_acc\_en = 1 (CURRENT\_CONF register 0x05).

## Result:

As  long  as  the  absolute  internal  velocity  |VACTUAL|  increases,  the  boost  scaling function is activated according to BOOST\_SCALE\_VAL. The present ramp state can be read out by the RAMP\_STATE flag. Acceleration slopes are indicated by RAMP\_STATE = b'01.

## OPTION 3: BOOST SCALING ON DECELERATION SLOPES

In order to set up and enable boost current scaling for the deceleration phase of the velocity ramp, do as follows:

## Action:

-  Set BOOST\_SCALE\_VAL  = SCALE\_VALUES(7:0)  according  to  maximum  current during the boost phase.
-  Set boost\_current\_on\_dec\_en = 1 (CURRENT\_CONF register 0x05).

## Result:

As  long  as  the  absolute  internal  velocity  |VACTUAL|  decreases,  boost  scaling  is activated according to BOOST\_SCALE\_VAL. The present ramp state can be read out at the RAMP\_STATE flag. Deceleration slopes are indicated by RAMP\_STATE = b'10.

<!-- image -->

## Scale Mode Transition Process Control

Transition from one scale value to the next active value can be configured as slight conversion. It  is  advisable  to  avoid  abrupt  scaling  alterations,  which  can  cause  unwanted  oscillations and/or motor stall. Three different parameters can be set to convert to higher or lower current scale values.

Transition to Hold Current Scaling

Transition to higher Motion Current Scaling

- It is often required to peter out the motion (by smoothening the transition process  from  motion  scaling  to  hold  scaling)  in  order  to  avoid  system standstill oscillations. !

In order to configure a smooth transition from motion current scaling to hold current scaling, do as follows:

## Action:

-  Set HOLD\_SCALE\_DELAY register 0x19 according to the delay period after which the actual scale parameter is decreased by one step towards hold current scale value.

## Result:

Immediately after the hold scaling current is activated, the actual scale parameter is decreased by one step per HOLD\_SCALE\_DELAY clock cycles until SCALE\_PARAM = HOLD\_SCALE\_VAL.

- i If HOLD\_SCALE\_DELAY = 0, the hold current scaling value HOLD\_SCALE\_VAL is assigned immediately whenever the hold current scaling is activated.
- To avoid step loss - in case a higher scale value is assigned during motion - the transition from low to high current scale values can also be adapted. !

In  order  to  configure  a  smooth  transition  from  a  lower  motion  current scaling value to a higher motion current scaling value, do as follows:

## Action:

-  Set UP\_SCALE\_DELAY register 0x18 according to the delay period after which the actual scale parameter is increased by one step towards the higher current scale value.

## Result:

Whenever  a  higher  current  scale  value  is  assigned  internally,  the  actual  scale parameter  is  increased  by  one  step  per UP\_SCALE\_DELAY  clock  cycles  until  the assigned scale parameter is reached.

- i If UP\_SCALE\_DELAY  = 0,  the higher current scaling value is assigned immediately whenever the corresponding current scaling phase is activated.
-   Description continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Transition to lower Motion Current Scaling

<!-- image -->

!

To avoid step loss or unwanted oscillations - in case a lower scale value is assigned  during  motion  -  the  transition  from  high  to  low  current  scale values can be adapted also.

In  order  to  configure  a  smooth  transition  from  a  higher  motion  current scaling value to a lower motion current scaling value, do as follows:

## Action:

-  Set DRIVE\_SCALE\_DELAY register 0x1A according to the delay period after which the actual scale parameter is decreased by one step towards  the lower current scale value.

## Result:

Whenever a lower current scale value is assigned internally, the actual scale parameter is  decreased by one step per DRIVE\_SCALE\_DELAY clock cycles until the assigned scale parameter is reached.

- i If DRIVE\_SCALE\_DELAY = 0,  the  lower  current  scaling  value  is  assigned immediately whenever the corresponding current scaling phase is activated.

Two  examples  are  provided  on  the  following  pages  that  illustrate  how scaling modes can be used.

The scale parameter SCALE\_PARAM  is shown in combination with its related scale timers in clock cycles and in combination with the underlying velocity ramp.

<!-- image -->

## Current Scaling Examples

## Scaling Mode Example 1

## In this example, the following scale options are enabled:

-  Standby scaling
-  Freewheeling
-  Boost scaling at start
-  Boost scaling on deceleration ramps
-  Drive scaling

The different scaling stages of the trapezoidal velocity ramp are shown in different colors in the Figure A below.

Figure B shows the internal scale parameter SCALE\_PARAM as function of time. The scale parameter is not switched immediately whenever the scaling situations alters; because  delay  timers  are  used.  A  transition  time  between  the  assigned  values  is generated. Four transition phases are shown that are calculated as follows:

tSTART\_SCALE = (BOOST\_SCALE\_VAL - HOLD\_SCALE\_VAL) · UP\_SCALE\_DELAY ·

```
fCLK fCLK fCLK fCLK
```

tDN\_SCALE    = (BOOST\_SCALE\_VAL - DRV1\_SCALE\_VAL) · DRV\_SCALE\_DELAY ·

tUP\_SCALE    = (BOOST\_SCALE\_VAL - DRV1\_SCALE\_VAL) · UP\_SCALE\_DELAY ·

tHOLD\_SCALE = (DRV1\_SCALE\_VAL - HOLD\_SCALE\_VAL) · HOLD\_SCALE\_DELAY ·

Figure C shows the different timers that are used:

-  To finish boost scaling after start.
-  To start standby scaling.
-  To start freewheeling.
- i These  three  delay  values  are  directly  determined  by  their  respective  register values 0x1B, 0x15, and 0x16.

Figure 54: Scaling Example 1

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Scaling Mode Example 2

## In this example, the following scale options are enabled:

-  Boost scaling on acceleration ramps
-  Drive scaling 1 and 2

As long as |VACTUAL| &lt; VDRV\_SCALE\_LIMIT, Drv1 scaling is active. Both drive scaling modes are used for the deceleration ramp because boost current is not enabled during deceleration slopes (boost\_current\_on\_dec = 0).

Whenever VACTUAL traverses 0 the RAMP\_STATUS switches to acceleration ramp, and boost scaling becomes enabled again.

This is shown in the figure A below. Figure B depicts the actual scale parameter, which is altered with the formerly specified delays. In contrast to example 1, tSTART\_SCALE is changed to the following calculation:

<!-- formula-not-decoded -->

Whereas  the  other  transition  phases  depend  on  whether DRV1\_SCALE\_VAL  or DRV2\_SCALE\_VAL is used either; before or after the transition process.

Figure 55: Scaling Example 2

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 12. Controlled PWM Output

TMC4331A offers controlled PWM (Pulse Width Modulation) signals at STPOUT and DIROUT output  pins.  These  PWM  signals  can  be  scaled,  depending  on  the  internal  velocity.  If  a TMC23x/24x stepper motor driver is connected and configured properly, the PWM signals are redirected to two SPI output interface pins. This avoids rerouting of signal lines at board level if SPI mode is switched to PWM mode, or vice versa.

In this chapter information is provided on the basic setup of the PWM output configuration; and also on TMC23x/24x control PWM input support.

Table 49: Dedicated PWM Output Pins

| Dedicated PWM Output Pins                                     | Dedicated PWM Output Pins                                     | Dedicated PWM Output Pins                                     |
|---------------------------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------------|
| Pin Names                                                     | Type                                                          | Remarks                                                       |
| STPOUT_PWMA                                                   | Output                                                        | PWM output for coil A.                                        |
| DIROUT_PWMB                                                   | Output                                                        | PWM output for coil B.                                        |
| Connected and selected TMC23x/24x stepper motor drivers only: | Connected and selected TMC23x/24x stepper motor drivers only: | Connected and selected TMC23x/24x stepper motor drivers only: |
| SDODRV                                                        | Output                                                        | PWM output for coil A.                                        |
| NSCSDRV                                                       | Output                                                        | PWM output for coil B.                                        |

Table 50: Dedicated PWM Output Registers

| Dedicated PWM Output Registers   | Dedicated PWM Output Registers   | Dedicated PWM Output Registers   | Dedicated PWM Output Registers                                                                                          |
|----------------------------------|----------------------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Register Name                    | Register Address                 | Register Address                 | Remarks                                                                                                                 |
| GENERAL_CONF                     | 0x00                             | RW                               | Bit 21: pwm_out_en.                                                                                                     |
| CURENT_CONF                      | 0x05                             | RW                               | pwm_scale_en = CURRENT_CONF (8): PWM scale enable switch PWM_AMPL = CURRENT_CONF (31:16): PWM amplitude at VACTUAL = 0. |
| PWM_VMAX                         | 0x17                             | RW                               | Second assignment to VDRV_SCALE_LIMIT : velocity at which the PWM scale parameter reaches 1 (maximum).                  |
| PWM_FREQ                         | 0x1F                             | RW                               | Number of clock cycles that forms one PWM period.                                                                       |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## PWM Output Generation and Scaling Possibilities

## Enable PWM Output Generation

The STPOUT and DIROUT output pins generally forward internal generated microsteps and motion direction. In contrast to that, it is possible to forward the internal MSLUT value as PWM output signals, which is dependent on the PWM frequency.

## In order to generate PWM output, do as follows:

## Action:

-  Set PWM\_FREQ register 0x1F to the number of clock cycles for one PWM cycle.
-  Set pwm\_out\_en = 1 (GENERAL\_CONF register 0x00).

## Result:

Step/Dir output is disabled and PWM signals are forwarded via STPOUT\_PWMA and DIROUT\_PWMB. PWM frequency fPWM is calculated by:

fPWM = fCLK / PWM\_FREQ

## If PWM Voltage mode is selected:

<!-- image -->

## PWM Duty Cycle Scaling

<!-- image -->

## Avoid unintended overheating to prevent motor damage during PWM mode!

-  At lower velocity values PWM voltage scaling MUST be enabled.

## This will ensure smooth operation during controlled PWM mode.

The duty cycle of both signals represent the sine (STPOUT) and cosine (DIROUT) values of the MSLUT.

PWM voltage scaling does not work the same way as presented for the SPI current output interface (see chapter 11, page 113). PWM scaling is adapted linearly, which depends on the internal ramp velocity. During Voltage PWM mode the scaling value at VACTUAL = 0  must  be  assigned,  and  also  the  velocity  at  which  full  scaling  is reached.

## In order to generate a scaled PWM output, do as follows:

## Action:

-  Set PWM\_AMPL (bit31:16 of register 0x05) as start PWM scaling value.
-  Set PWM\_VMAX register 0x17 to the internal ramp velocity [pps] at which full PWM scaling is reached.
-  Set pwm\_scale = 1 (bit8 of CURRENT\_CONF register 0x05).

## Result:

-  PWM\_SCALE is the actual scaling value.
-  In case VACTUAL = 0, PWM\_SCALE = (PWM\_AMPL + 1) / 2 17 .
- i Whenever  the  absolute  velocity  value  increases,  the  scale  parameter  also increases  linearly  until  it  reaches  the  maximum  of  PWM\_SCALE  =  0.5  at VACTUAL = PWM\_VMAX.
- i The minimum duty cycle is calculated by DUTY\_MIN = (0.5 - PWM\_SCALE).
- i The maximum duty cycle is calculated by   DUTY\_MAX = (0.5 + PWM\_SCALE).
- i These values set the PWM duty cycle limits of any internal ramp velocity.

<!-- image -->

## PWM Scale Example

In  the  figure  below,  the  calculation  of  minimum/maximum  PWM  duty  cycles  with PWM\_AMPL = 32767 is shown on the left side. Resulting duty cycles for different positions in the sine voltage curve are depicted on the right side. Calculated delays of minimum/maximum duty cycles are also shown.

Figure 56: Calculation of PWM Duty Cycles (PWM\_AMPL)

<!-- image -->

## NOTE:

-  If hold current scaling is enabled, see section 11.1. , page 114, HOLD\_SCALE\_VAL is used for PWM scaling during standstill.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## PWM Output Generation for TMC23x/24x

Controlled PWM Signals for TMC23x/24x

TMC4331A with TMC23x/24x Stepper Driver

PWM output signals can be used for TMC23x/24x stepper motor drivers Voltage PWM mode. TMC4331A forwards the internal PWM output signals at the corresponding SPI output interface pins because the drivers share input and output pins for the SPI mode and  the  Voltage  PWM  mode.  This  feature  enables  variable  operation  of  the TMC23x/24x in the one or the other mode without rerouting the particular signal lines at board level.

In order to generate a PWM output for TMC23x/24x stepper motor drivers, do as follows:

## Action:

-  Set PWM\_FREQ register 0x1F to the number of clock cycles for one PWM cycle.
-  Set  spi\_output\_format = b'1000 (TMC23x) or spi\_output\_format = b'1001 (TMC24x).
-  Set pwm\_out\_en = 1 (GENERAL\_CONF register 0x00).
-  Set SPI\_SWITCH\_VEL register 0x1D to 0.

## Result:

-  SPI output interface is disabled, controlled PWM output for TMC23x/24x is enabled.
-  SDODRV output pin forwards PWM PHA signal.
-  NSCSDRV output pin forwards PWM PHB signal.
-  MP2 is set to low voltage level that disables TMC23x/24x SPI mode.
-  SDODRV analyses the error flags that are forward via SDO output pin of TMC23x/24x. These error flags indicate overcurrent on any bridge or the overtemperature flag. Therefore, these three status bits of TMC4331A are altered according to the ERR flag.
-  SCKDRV is set to high voltage level to set MDBN of TMC23x/24x to high voltage level.

## NOTE:

-  Only the five pins mentioned above are set accordingly by TMC4331A.
-  Please be aware that all other pins of TMC23x/24x must be set according to your requirements,  especially  ANN/MDAN  =  high  voltage  level,  and  INA  resp.  INB according to the current limit.
- i For correct hardware setup information refer to TMC23x/24x manuals.

Figure 57: TMC4331A connected with TMC23x/24x operating in SPI Mode or PWM Mode

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Switching between SPI and Voltage PWM Modes

## Determining MS\_OFFSET

<!-- image -->

The hardware setup scenario, as shown on the previous page, also allows switching between SPI and Voltage PWM mode. It is advisable to enable or disable the Voltage PWM mode during standstill of the internal ramp.

## In order to disable Voltage PWM mode for TMC23x/24x, do as follows:

## Action:

-  Set pwm\_out\_en = 0 (GENERAL\_CONF register 0x00).

## Result:

SPI output interface is enabled and controlled PWM output for TMC23x/24x is disabled. MP2 - that must be connected with SPE@TMC23x/24x - is set to high voltage level, which enables TMC23x/24x SPI mode.

However, it is also possible to switch between both modes during motion. Because the internal MSLUT is used either as voltage specification or as current specification, microstep loss can occur whenever the mode is switched in case the switching velocity is passed by.

- i In order to overcome this, issue a microstep offset during PWM mode can be assigned.

In  order  to  set  up  a  TMC23x/24x  configuration  that  switches  between SPI and PWM voltage mode, do as follows:

## Action:

-  Set PWM\_FREQ register 0x1F to the number of clock cycles for one PWM cycle.
-  Set pwm\_out\_en = 1 (GENERAL\_CONF register 0x00).
-  Set  spi\_output\_format = b'1000 (TMC23x) or spi\_output\_format = b'1001 (TMC24x).
-  Set SPI\_SWITCH\_VEL register 0x1D to a value [pps] at which the mode change should happen.
-  Set MS\_OFFSET register 0x79 (only write access) to a value between 0 and 255.

## Result:

Whenever the internal velocity |VACTUAL|&lt; SPI\_SWITCH\_VEL, Voltage PWM mode is activated automatically.

Whenever  |VACTUAL|  ≥ SPI\_SWITCH\_VEL,  SPI  mode  is  activated  automatically. During PWM mode the internal MSLUT value is modified by MS\_OFFSET; in order to shift the resulting voltage curve of the motor coils.

## Observing the motor coil currents with current probes is the best method for determining the required MS\_OFFSET:

-  Triggering the SPE signal will gain the switching point.
-  At this point the current curves show a crack if no offset is assigned. This could lead to step loss.
- i The offset can attenuate this crack to overcome this step loss.

<!-- image -->

## 13. dcStep Support for TMC26x or TMC2130

dcStep  is  an  automatic  commutation  mode  for  stepper  motor  drivers.  It  allows  to  run  the stepper with its nominal velocity, which is generated by the internal ramp generator for as long as it can cope with the motor load.

In case the motor becomes overloaded, it slows down to a lower velocity at which the motor can still drive the load. This avoids that the stepper motor stalls, and enables the stepper motor to drive heavy loads as fast as possible. Its higher torque - available at lower velocity - in combination with dynamic torque (from its flywheel mass) compensates mechanical torque peaks without feedback.

Table 51: Dedicated dcStep Pins

| Dedicated dcStep Pins   | Dedicated dcStep Pins   | Dedicated dcStep Pins   |
|-------------------------|-------------------------|-------------------------|
| Pin Name                | Pin Type                | Remarks                 |
| MP1                     | Input                   | dcStep input signal.    |
| MP2                     | Inout as Output         | dcStep output signal.   |

Table 52: Dedicated dcStep Registers

| Dedicated dcStep Registers   | Dedicated dcStep Registers   | Dedicated dcStep Registers   | Dedicated dcStep Registers                                       |
|------------------------------|------------------------------|------------------------------|------------------------------------------------------------------|
| Register Name                | Register Address             | Register Address             | Remarks                                                          |
| GENERAL_CONF                 | 0x00                         | RW                           | Bit22:21: dc_step_mode.                                          |
| DC_VEL                       | 0x60                         | W                            | Velocity at which dcStep starts (fullstep); 24 bit.              |
| DC_TIME                      | 0x61(7:0)                    | W                            | Upper PWM on time limit for internal dcStep calculation.         |
| DC_SG                        | 0x61(15:8)                   | W                            | Maximum PWM on time for step loss detection (multiplied by 16!). |
| DC_BLKTIME                   | 0x61(31:16)                  | W                            | dcStep blank time after fullstep release.                        |
| DC_LSPTM                     | 0x62                         | W                            | dcStep low speed timer; 32 bit.                                  |

-   Turn page for more information on how dcStep increases the usable motor torque.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## dcStep increases usable Motor Torque

In a classical application, the operation area is limited by the maximum torque required at maximum application velocity. A safety margin of up to 50% torque is required, in order to compensate unforeseen load peaks, torque loss due to resonance, and aging of mechanical components. dcStep makes it possible to use the available motor torque to its fullest. Even higher short-time dynamic loads can be overcome by using motor and  application  flywheel  mass  without  the  danger  of  causing  a  motor  stall.  With dcStep, the nominal application load can be extended to a higher torque, which is only limited by the safety margin near the holding torque area (which is the highest torque the motor can provide). Additionally, maximum application velocity can be increased up to conditional maximum motor velocity.

<!-- image -->

MNOM: Nominal torque required by application

MMAX: Motor pull-out torque at v=0

Safety margin: Classical application operation area is limited by a certain percentage of motor pull-out torque

Figure 58: dcStep extended Application Operation Area

-   Turn page for more information about enabling dcStep forTMC26x stepper motor drivers.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Enabling dcStep for TMC26x Stepper Motor Drivers

<!-- image -->

If  connected  to  TMC26x  drivers,  TMC4331A  must  generate  the  dcStep  signal internally; despite particular motor settings dcStep requires only very few settings, which could be tunneled via SPI through TMC4331A.

dcStep directly feeds motor motion back to the ramp generator so that it becomes seamlessly integrated into the motion ramp; even if the motor becomes overloaded with  respect  to  the  target  velocity.  In  order  to  set  up  the  hardware  correctly  the SG\_TST output pin of TMC26x must be connected to the MP1 input pin of TMC4331A; and the TST\_MODE pin of TMC26x must be connected to VCCIO.

- i Please also refer to the corresponding TMC26x manuals for the correct motor driver settings.

## In order to set up a TMC26x dcStep configuration, do as follows:

## PRECONDITION: TMC26X MOTOR DRIVER SETUP:

-  Set CHM = 1 (constant tOFF-Chopper).
-  Set HSTRT = 0 (slow decay only).
-  Set SGTO = 1 and SGT1 = 1 (on\_state\_xy as test signal output).
-  Set TST = 1 (Test mode on).

## Action:

-  Set spi\_output\_format = b'1011 or b'1010 (automatic TMC26x setting)
-  Set the upper PWM time DC\_TIME  slightly higher than the driver effective blank time TBL (register 0x61).
-  Set DC\_BLKTIME [clock cycles] when no comparison should happen after a fullstep release (register 0x61).
-  Set DC\_SG [clock cycles · 16] as PWM on-time for step loss detection (0x61).
-  Set dcstep\_mode = b'01 (GENERAL\_CONF register 0x00).

## Result:

The internal dcStep at MP1 input signal approves further step generation in case the input step signals are smaller than the DC\_TIME step length in clock cycles.

## NOTE:

-  Even though dcStep is able to decelerate the motor  during overload, stalls can occur due to certain negative influences, such as:
- The motor may stall and lose steps, e.g. because deceleration drops below obligational minimum velocity. In order to safely detect a step loss and avoid restarting of the motor, the stop on stall can be enabled (see section 10.4.4, page 95).
- Concerning dcStep operation with TMC26x: the stall bit from the driver status is substituted by the dcStep stall detection bit.
- Therefore, the first step at MP1 input directly after a step release is checked against the DC\_SG value, which is the maximum PWM on-time. In case the signal step length is smaller than DC\_SG, a stall has occurred.
- DC\_BLKTIME specifies the number of clock cycles after a fullstep release in case nothing must be compared; because fragmented steps could occur at MP1. The first step after release that is checked is the first step after blank time. The switch to fullstep drive is performed automatically, as explained in section 10.6.5 and 10.6.6, page 102).

<!-- image -->

## Setup: Minimum dcStep Velocity

dcStep requires a minimum operation velocity DC\_VEL [pps]. DC\_VEL must be set to the lowest operating velocity at which dcStep provides a reliable detection of motor operation. In case an overload appears, an internal dcStep signal is generated that pauses internal step generation. Because dcStep operates the motor in fullstep mode, a minimum fullstep frequency fFS can be assigned.

Therefore,  a  dcStep  low  speed  timer  must  be  assigned  to  achieve  the  following minimum fullstep frequency:

fFS = fCLK / DC\_LSPTM.

## In order to set up a minimum dcStep velocity, do as follows:

## Action:

-  Set the low speed timer DC\_LSPTM register 0x62, as explained above.
-  Set DC\_VEL register  0x60  as  threshold  velocity  value  [pps]  at  which  dcStep  is activated.

## Result:

Whenever the internal velocity |VACTUAL| &gt; DC\_VEL, dcStep is activated, if enabled.

Figure 59: Velocity Profile with Impact through Overload Situation

<!-- image -->

-   Turn Page for important information about the chopper settings for microstep and fullstep/dcStep mode.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## AREAS OF SPECIAL CONCERN

<!-- image -->

!

Different  chopper  settings  for  microstep  and  fullstep/dcStep  mode  of TMC26x stepper driver can be transferred automatically during motion.

Switching between dcStep mode and microstep mode often requires different chopper settings for TMC26x stepper motor drivers.

It is possible to automatically transfer cover datagrams to TMC26x (see Section 10.3.7, page 92). Thereby, it is possible to switch the chopper settings of TMC26x rapidly, shortly before reaching the dcStep velocity.

## NOTE:

-  It is recommended to use this feature because dcStep requires constant off-time chopper  settings;  whereas  driving  with  µSteps  and  a  spreadCycle  chopper provides better driving characteristics.

## In order to set up a TMC26x dcStep configuration, do as follows:

## Action:

-  Set the SPI\_SWITCH\_VEL register 0x1D value a little bit smaller than the DC\_VEL register 0x60 value.
-  Fill in the COVER\_LOW 0x6C register the chopper settings for spreadCycle chopper below the DC\_VEL.
-  Fill in the COVER\_HIGH 0x6D register the chopper settings for a constant off-time chopper during dcStep operation (fullstep mode).
-  Set automatic\_cover = 1 (REFERENCE\_CONF register 0x01).

## Result:

In  case  dcStep  mode  is  not  activated  -  because  |VACTUAL| &lt; DC\_VEL  -  the spreadCycle chopper mode is activated, which is best suited for microstep operation.

In  case  dcStep  is  activated,  the  more  suited  constant  off-time  chopper  mode  for fullstep operation is activated.

  Turn Page for more information on enabling dcStep for TMC2130 stepper motor driver.

<!-- image -->

## Enabling dcStep for TMC2130 Stepper Motor Drivers

## Set up minimum dcStep/Fullstep Frequency

<!-- image -->

dcStep operation with TMC2130 is similar to a handshake procedure: The MP1 input must be connected to the DCO output pin of TMC2130, whereas MP2 must be connected to the DCEN input pin of TMC2130.

## In order to set up a TMC2130 dcStep configuration, do as follows:

## The  mandatory  TMC2130  configuration  MUST  be  executed  with  cover datagrams, as follows:

- i Please  refer  to  the  TMC2130  manual  for  correct  settings  pertaining  to  the TMC2130 CHOPCONF and DCCTRL registers.

## Action:

-  Set spi\_output\_format = b'1101 or b'1100 (automatic TMC2130 setting)
-  Set dcstep\_mode = b'01 (GENERAL\_CONF register 0x00).

## Result:

In case VACTUAL ≥ DC\_VEL, MP2 output is set to high voltage level to indicate that dcStep can be activated.

TMC2130 will wait for the next fullstep position to switch to dcStep operation. The dcStep signal is provided by the TMC2130 at DCO output pin.

TMC4331A is continually  providing  microsteps  even  though  dcStep  is  enabled  and activated. TMC2130 auto-generates the dcStep behavior internally.

Because dcStep operates the motor in fullstep mode, a minimum fullstep frequency fFS can be assigned. Therefore, a dcStep low speed timer must be assigned to achieve the following minimum fullstep frequency:

fFS = fCLK / DC\_LSPTM.

## In order to set up a minimum dcStep fullstep frequency, do as follows:

## Action:

 Set DC\_LSPTM register 0x62.

## Result:

After DC\_LSPTM clock cycles expires - without lifting the internal dcStep signal - a step is enforced when dcStep is enabled.

<!-- image -->

## 14. Reset and Clock Gating

In addition to the automatic Power-on-Reset procedure, TMC4331A provides a software reset option. If not in operation, clock gating can be used to reduce power consumption.

Table 53: Dedicated Reset and Clock Pins

| Reset and Clock Pins   | Reset and Clock Pins   | Reset and Clock Pins             |
|------------------------|------------------------|----------------------------------|
| Pin Names              | Types                  | Remarks                          |
| STPIN                  | Input                  | High active wake-up signal.      |
| CLK_EXT                | Input                  | Connected external clock signal. |

Table 54: Dedicated Reset and Clock Gating Registers

| Reset and Clock Gating Registers   | Reset and Clock Gating Registers   | Reset and Clock Gating Registers   | Reset and Clock Gating Registers          |
|------------------------------------|------------------------------------|------------------------------------|-------------------------------------------|
| Register Name                      | Register address                   | Register address                   | Remarks                                   |
| GENERAL_CONF                       | 0x00                               | RW                                 | Bit18:17                                  |
| CLK_GATING_DELAY                   | 0x14                               | RW                                 | Dela time before clock gating is enabled. |
| CLK_GATING_REG                     | 0x4F (2:0)                         | RW                                 | Trigger for clock gating.                 |
| RESET_REG                          | 0x4F (31:8)                        | RW                                 | Trigger for SW-Reset.                     |

A hardware reset is only provided during the power-up cycle, no dedicated hardware pin is available for the reset procedure. Power-on-Reset is executed automatically. All registers of TMC4331A are reset to default values.

In  order  to  reset  TMC4331A  without  switching  the  power  supply,  do  as follows:

## Action:

 Set RESET\_REG = 0x525354 (Bits31:8 of register 0x4F).

## Result:

TMC4331A registers are reset to default values.

RST\_EV = EVENTS(31) is set as indicator signifying that one of the possible reset conditions was triggered.

- Power-On-Reset

## Manual Software Reset

## Reset Indication

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Activating Clock Gating manually

## Clock Gating Wake-up

Clock  gating  must  be  enabled  before  activation.  In  addition,  the  delay  between activation and the active clock gating phase can be configured.

In order to activate clock gating manually, do as follows:

PRECONDITION: VEL\_STATE\_F = '00' INDICATING THAT VACTUAL = 0.

## Action:

-  Set clk\_gating\_en = 1 (bit17 of GENERAL\_CONF register 0x00).
-  Set proper CLK\_GATING\_DELAY register 0x14.
-  Set CLK\_GATING\_REG =  0x7 (bit2:0 of register 0x4F).

## Result:

When writing to CLK\_GATING\_REG, this activates the CLK\_GATING\_DELAY counter, which specifies the delay between clock gating trigger and activation in [number of cycles]. When the counter reaches 0, clock gating is activated. See figure below.

## NOTE :

-  In  case  CLK\_GATING\_REG = 0,  clock  gating  is  executed  immediately  after activating the CLK\_GATING\_REG register. See figure below.

## In order to conduct clock gating wake-up, do as follows:

## Action:

-  Set STPIN input pin to high voltage level.

## Result:

Clock-gating is terminated. See figure below.

If SPI datagram transfers from microcontroller to TMC4331A prompt wakeup, do as follows:

## Action:

-  Set CLK\_GATING\_DELAY = 0xFFFFFFFF (register 0x14).
-  Set CLK\_GATING\_REG =  0x0 (bit2:0 of register 0x4F).
-  Set CLK\_GATING\_REG =  0x7 (bit2:0 of register 0x4F).
-  Set clk\_gating\_en = 0 (bit17 of GENERAL\_CONF register 0x00).

## Result:

Clock-gating is terminated.

Figure 60: Manual Clock Gating Activation and Wake-Up

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Automatic Clock Gating Procedure

It is possible to use TMC4331A standby phase to automatically activate clock gating.

- i For further information about stdby timer, see section 11.1. , page 114.

In order to activate automatic clock gating, do as follows:

## Action:

-  Set the time frame for STDBY\_DEALY register 0x15 after ramp stop, and before standby phase starts.
-  Set hold\_current\_scale\_en = 1 (CURRENT\_CONF register 0x05).
-  Set clk\_gating\_en = 1 (bit17 of GENERAL\_CONF register 0x00).
-  Set proper CLK\_GATING\_DELAY register 0x14.
-  Set clk\_gating\_stdby\_en = 1 (bit17 of GENERAL\_CONF register 0x00).

## Result:

After standby phase activation, activation of clock gating counter follows. When the counter reaches 0, clock gating is activated.

In addition, the start signal generation, presented in chapter 9, page 63, can be used for an automated wake-up. An example is given in the figure below.

The chart below shows the TARGET\_REACHED (=TR) signal, which signifies ramp stop at which VACTUAL reaches 0.

When VACTUAL = 0, the following process occurs:

1. The start delay timer signifies the time frame between ramp stop and next ramp start.
2. When the standby delay timer expires, the standby phase is activated.
3. When the standby phase is activated, the clock gating delay timer is started.
4. After the clock gating delay timer expires, clock gating is activated.
5. Shortly before the start delay timer expires, clock gating is disabled, which occurs so that the next ramp is started with proper assigned registers.

Figure 61: Automatic Clock Gating Activation and Wake-Up

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## TECHNICAL SPECIFICATIONS

## 15. Complete Register and Switches List

## General Configuration Register GENERAL\_CONF 0x00

| GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)         | GENERAL_CONF 0x00 (Default value: 0x00006020)                                                          |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                                   | Remarks                                                                                                |
|                                                 |                                                 | use_astart_and_vstart (only valid for S-shaped ramps) | use_astart_and_vstart (only valid for S-shaped ramps)                                                  |
|                                                 | 0                                               | 0                                                     | Sets AACTUAL = AMAX or - AMAX at ramp start and in the case of VSTART ≠ 0.                             |
|                                                 |                                                 | 1                                                     | Sets AACTUAL = ASTART or - ASTART at ramp start and in the case of VSTART ≠ 0.                         |
| RW                                              |                                                 | direct_acc_val_en                                     | direct_acc_val_en                                                                                      |
| RW                                              | 1                                               | 0                                                     | Acceleration values are divided by CLK_FREQ.                                                           |
| RW                                              |                                                 | 1                                                     | Acceleration values are set directly as steps per clock cycle.                                         |
|                                                 | 2                                               | direct_bow_val_en                                     | direct_bow_val_en                                                                                      |
|                                                 | 2                                               | 0                                                     | Bow values are calculated due to division by CLK_FREQ.                                                 |
|                                                 | 2                                               | 1                                                     | Bow values are set directly as steps per clock cycle.                                                  |
|                                                 | 3                                               | step_inactive_pol                                     | step_inactive_pol                                                                                      |
|                                                 | 3                                               | 0                                                     | STPOUT = 1 indicates an active step.                                                                   |
|                                                 | 3                                               | 1                                                     | STPOUT = 0 indicates an active step.                                                                   |
|                                                 | 4                                               | toggle_step                                           | toggle_step                                                                                            |
|                                                 | 4                                               | 0                                                     | Only STPOUT transitions from inactive to active polarity indicate steps.                               |
|                                                 | 4                                               | 1                                                     | Every level change of STPOUT indicates a step.                                                         |
|                                                 |                                                 | pol_dir_out                                           | pol_dir_out                                                                                            |
|                                                 | 5                                               | 0                                                     | DIROUT = 0 indicates negative direction.                                                               |
|                                                 |                                                 | 1                                                     | DIROUT = 1 indicates negative direction.                                                               |
|                                                 | 7:6                                             | sdin_mode                                             | sdin_mode                                                                                              |
|                                                 | 7:6                                             | 0                                                     | Internal step control (internal ramp generator will be used)                                           |
|                                                 | 7:6                                             | 1                                                     | External step control via STPIN / DIRIN interface with high active steps at STPIN                      |
|                                                 | 7:6                                             | 2                                                     | External step control via STPIN / DIRIN interface with low active steps at STPIN                       |
|                                                 | 7:6                                             | 3                                                     | External step control via STPIN / DIRIN interface with toggling steps at STPIN                         |
|                                                 | 8                                               | pol_dir_in                                            | pol_dir_in                                                                                             |
|                                                 | 8                                               | 0                                                     | DIRIN = 0 indicates negative direction.                                                                |
|                                                 | 8                                               | 1                                                     | DIRIN = 1 indicates negative direction.                                                                |
|                                                 | 9                                               | sd_indirect_control                                   | sd_indirect_control                                                                                    |
|                                                 | 9                                               | 0                                                     | STPIN/DIRIN input signals will manipulate internal steps at XACTUAL directly.                          |
|                                                 | 9                                               | 1                                                     | STPIN/DIRIN input signals will manipulate XTARGET register value, the internal ramp generator is used. |
|                                                 | 12:10                                           | Reserved. Set to 0x0.                                 | Reserved. Set to 0x0.                                                                                  |
|                                                 |                                                 |   Continued on next page.                           |   Continued on next page.                                                                            |

<!-- image -->

<!-- image -->

| GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)                                     |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                             | Remarks                                                                           |
|                                                 |                                                 | stdby_clk_pin_assignment                        | stdby_clk_pin_assignment                                                          |
|                                                 |                                                 | 0                                               | Standby signal becomes forwarded with an active low level at STDBY_CLK output.    |
|                                                 | 14:13                                           | 1                                               | Standby signal becomes forwarded with an active high level at STDBY_CLK output.   |
|                                                 |                                                 | 2                                               | STDBY_CLK passes ChopSync clock (TMC23x, TMC24x stepper motor drivers only).      |
|                                                 |                                                 | 3                                               | Internal clock is forwarded to STDBY_CLK output pin.                              |
| RW                                              | 15                                              | intr_pol                                        | intr_pol                                                                          |
| RW                                              | 15                                              | 0                                               | INTR=0 indicates an active interrupt.                                             |
| RW                                              | 15                                              | 1                                               | INTR=1 indicates an active interrupt.                                             |
|                                                 |                                                 | invert_pol_target_reached                       | invert_pol_target_reached                                                         |
|                                                 | 16                                              | 0                                               | TARGET_REACHED signal is set to 1 to indicate a target reached event.             |
|                                                 |                                                 | 1                                               | TARGET_REACHED signal is set to 0 to indicate a target reached event.             |
|                                                 |                                                 | clk_gating_en                                   | clk_gating_en                                                                     |
|                                                 | 17                                              | 0                                               | Clock gating is disabled.                                                         |
|                                                 |                                                 | 1                                               | Internal clock gating is enabled.                                                 |
|                                                 | 18                                              | clk_gating_stdby_en                             | clk_gating_stdby_en                                                               |
|                                                 | 18                                              | 0                                               | No clock gating during standby phase.                                             |
|                                                 | 18                                              | 1                                               | Intenal clock gating during standby phase is enabled.                             |
|                                                 |                                                 | fs_en                                           | fs_en                                                                             |
|                                                 | 19                                              | 0                                               | Fullstep switchover is disabled.                                                  |
|                                                 |                                                 | 1                                               | SPI output forwards fullsteps, if &#124; VACTUAL &#124; > FS_VEL .                |
|                                                 |                                                 | fs_sdout                                        | fs_sdout                                                                          |
|                                                 | 20                                              | 0                                               | No fullstep switchover for Step/Dir output is enabled.                            |
|                                                 |                                                 | 1                                               | Fullsteps are forwarded via Step/Dir output also if fullstep operation is active. |
|                                                 |                                                 | dcstep_mode                                     | dcstep_mode                                                                       |
|                                                 |                                                 | 0                                               | dcStep is disabled.                                                               |
|                                                 |                                                 | 1                                               | dcStep signal generation will be selected automatically                           |
|                                                 | 22:21                                           | 2                                               | dcStep with external STEP_READY signal generation (TMC2130).                      |
|                                                 | 23                                              | pwm_out_en                                      | pwm_out_en                                                                        |
|                                                 | 23                                              | 0                                               | PWM output is disabled. Step/Dir output is enabled at STPOUT/DIROUT.              |
|                                                 | 23                                              | 1                                               | STPOUT/DIROUT output pins are used as PWM output (PWMA/PWMB).                     |
|                                                 | 25:24                                           | Reserved. Set to 0x0.                           | Reserved. Set to 0x0.                                                             |
|                                                 |                                                 |   Continued on next page.                     |   Continued on next page.                                                       |

<!-- image -->

<!-- image -->

Table 55: General Configuration 0x00

| GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)                                                  |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                             | Remarks                                                                                        |
| RW                                              | 26                                              | automatic_direct_sdin_switch_off                | automatic_direct_sdin_switch_off                                                               |
| RW                                              | 26                                              | 0                                               | VACTUAL =0 & AACTUAL =0 after switching off direct external step control.                      |
| RW                                              | 26                                              | 1                                               | VACTUAL = VSTART and AACTUAL = ASTART after switching off direct external step control.        |
|                                                 | 27                                              | circular_cnt_as_xlatch                          | circular_cnt_as_xlatch                                                                         |
|                                                 | 27                                              | 0                                               | The register value of X_LATCH is forwarded at register 0x36.                                   |
|                                                 | 27                                              | 1                                               | The register value of REV_CNT (#internal revolutions) is forwarded at register 0x36.           |
|                                                 | 28                                              | reverse_motor_dir                               | reverse_motor_dir                                                                              |
|                                                 | 28                                              | 0                                               | The direction of the internal SinLUT is regularly used.                                        |
|                                                 | 28                                              | 1                                               | The direction of internal SinLUT is reversed                                                   |
|                                                 | 29                                              | intr_tr_pu_pd_en                                | intr_tr_pu_pd_en                                                                               |
|                                                 | 29                                              | 0                                               | INTR and TARGET_REACHED are outputs with strongly driven output values..                       |
|                                                 | 29                                              | 1                                               | INTR and TARGET_REACHED are used as outputs with gated pull-up and/or pull-down functionality. |
|                                                 | 30                                              | intr_as_wired_and                               | intr_as_wired_and                                                                              |
|                                                 | 30                                              | 0                                               | INTR output function is used as Wired-Or in the case of intr_tr_pu_pd_en = 1.                  |
|                                                 | 30                                              | 1                                               | INTR output function is used as Wired-And. in the case of intr_tr_pu_pd_en = 1.                |
|                                                 | 31                                              | tr_as_wired_and                                 | tr_as_wired_and                                                                                |
|                                                 | 31                                              | 0                                               | TARGET_REACHED output function is used as Wired-Or in the case of intr_tr_pu_pd_en = 1.        |
|                                                 | 31                                              | 1                                               | TARGET_REACHED output function is used as Wired-And in the case of intr_tr_pu_pd_en = 1.       |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Reference Switch Configuration Register REFERENCE\_CONF 0x01

| REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                    |
|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------------------------------------------|
| R/W                                               | Bit                                               | Val                                               | Remarks                                                                            |
| RW                                                |                                                   | stop_left_en                                      | stop_left_en                                                                       |
|                                                   | 0                                                 | 0                                                 | STOPL signal processing disabled.                                                  |
|                                                   |                                                   | 1                                                 | STOPL signal processing enabled.                                                   |
|                                                   |                                                   | stop_right_en                                     | stop_right_en                                                                      |
|                                                   | 1                                                 | 0                                                 | STOPR signal processing disabled.                                                  |
|                                                   |                                                   | 1                                                 | STOPR signal processing enabled.                                                   |
|                                                   |                                                   | pol_stop_left                                     | pol_stop_left                                                                      |
|                                                   | 2                                                 | 0                                                 | STOPL input signal is low active.                                                  |
|                                                   |                                                   | 1                                                 | STOPL input signal is high active.                                                 |
|                                                   |                                                   | pol_stop_right                                    | pol_stop_right                                                                     |
|                                                   | 3                                                 | 0                                                 | STOPR input signal is low active.                                                  |
|                                                   |                                                   | 1                                                 | STOPR input signal is high active.                                                 |
|                                                   | 4                                                 | invert_stop_direction                             | invert_stop_direction                                                              |
|                                                   |                                                   | 0                                                 | STOPL/STOPR stops motor in negative/positive direction.                            |
|                                                   |                                                   | 1                                                 | STOPL/STOPR stops motor in positive/negative direction.                            |
|                                                   | 5                                                 | soft_stop_en                                      | soft_stop_en                                                                       |
|                                                   |                                                   | 0                                                 | Hard stop enabled. VACTUAL is immediately set to 0 on any external stop event.     |
|                                                   |                                                   | 1                                                 | Soft stop enabled. A linear velocity ramp is used for decreasing VACTUAL to v = 0. |
|                                                   |                                                   | virtual_left_limit_en                             | virtual_left_limit_en                                                              |
|                                                   | 6                                                 | 0                                                 | Position limit VIRT_STOP_LEFT disabled.                                            |
|                                                   |                                                   | 1                                                 | Position limit VIRT_STOP_LEFT enabled.                                             |
|                                                   | 7                                                 | virtual_right_limit_en                            | virtual_right_limit_en                                                             |
|                                                   |                                                   | 0                                                 | Position limit VIRT_STOP_RIGHT disabled.                                           |
|                                                   |                                                   | 1                                                 | Position limit VIRT_STOP_RIGHT enabled.                                            |
|                                                   | 9:8                                               | virt_stop_mode                                    | virt_stop_mode                                                                     |
|                                                   |                                                   | 0                                                 | Reserved.                                                                          |
|                                                   |                                                   | 1                                                 | Hard stop: VACTUAL is set to 0 on a virtual stop event.                            |
|                                                   |                                                   | 2                                                 | Soft stop is enabled with linear velocity ramp (from VACTUAL to v = 0).            |
|                                                   |                                                   | 3                                                 | Reserved.                                                                          |
|                                                   |                                                   | latch_x_on_inactive_l                             | latch_x_on_inactive_l                                                              |
|                                                   | 10                                                | 0                                                 | No latch of XACTUAL if STOPL becomes inactive.                                     |
|                                                   |                                                   | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes inactive.                    |
|                                                   |                                                   | latch_x_on_active_l                               | latch_x_on_active_l                                                                |
|                                                   | 11                                                | 0                                                 | No latch of XACTUAL if STOPL becomes active.                                       |
|                                                   |                                                   | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes active.                      |
|   Continued on next page.                       |   Continued on next page.                       |   Continued on next page.                       |   Continued on next page.                                                        |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

| REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                                                                                                      |
|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                               | Bit                                               | Val                                               | Remarks                                                                                                                                                              |
|                                                   | latch_x_on_inactive_r                             | latch_x_on_inactive_r                             | latch_x_on_inactive_r                                                                                                                                                |
|                                                   | 12                                                | 0                                                 | No latch of XACTUAL if STOPR becomes inactive.                                                                                                                       |
|                                                   |                                                   | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes inactive.                                                                                                      |
|                                                   |                                                   | latch_x_on_active_r                               | latch_x_on_active_r                                                                                                                                                  |
|                                                   | 13                                                | 0                                                 | No latch of XACTUAL if STOPR becomes active.                                                                                                                         |
|                                                   |                                                   | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes active.                                                                                                        |
|                                                   |                                                   | stop_left_is_home                                 | stop_left_is_home                                                                                                                                                    |
|                                                   | 14                                                | 0                                                 | STOPL input signal is not also the HOME position.                                                                                                                    |
|                                                   |                                                   | 1                                                 | STOPL input signal is also the HOME position.                                                                                                                        |
|                                                   |                                                   | stop_right_is_home                                | stop_right_is_home                                                                                                                                                   |
|                                                   | 15                                                | 0                                                 | STOPR input signal is not lso the HOME position.                                                                                                                     |
|                                                   |                                                   | 1                                                 | STOPR input signal is also the HOME position.                                                                                                                        |
|                                                   |                                                   | home_event                                        | home_event                                                                                                                                                           |
|                                                   |                                                   | 2                                                 | HOME_REF = 1 indicates an active home event X_HOME is located at the rising edge of the active range.                                                                |
|                                                   |                                                   | 3                                                 | HOME_REF = 0 indicates negative region/position from the home position.                                                                                              |
|                                                   |                                                   | 4                                                 | HOME_REF = 1 indicates an active home event X_HOME is located at the falling edge of the active range.                                                               |
|                                                   | 19:16                                             | 6                                                 | HOME_REF = 1 indicates an active home event X_HOME is located in the middle of the active range.                                                                     |
| RW                                                |                                                   | 9                                                 | HOME_REF = 0 indicates an active home event X_HOME is located in the middle of the active range.                                                                     |
|                                                   |                                                   | 11                                                | HOME_REF = 0 indicates an active home event X_HOME is located at the rising edge of the active range.                                                                |
|                                                   |                                                   | 12                                                | HOME_REF = 1 indicates negative region/position from the home position.                                                                                              |
|                                                   |                                                   | 13                                                | HOME_REF = 0 indicates an active home event X_HOME is located at the falling edge of the active range.                                                               |
|                                                   | 20                                                | start_home_tracking                               | start_home_tracking                                                                                                                                                  |
|                                                   |                                                   | 0                                                 | No storage to X_HOME by passing home position.                                                                                                                       |
|                                                   |                                                   | 1                                                 | Storage of XACTUAL as X_HOME at next regular home event. An XLATCH_DONE event is released. In case the event is cleared, start_home_tracking is reset automatically. |
|                                                   |                                                   | clr_pos_at_target                                 | clr_pos_at_target                                                                                                                                                    |
|                                                   | 21                                                | 0                                                 | Ramp stops at XTARGET if positioning mode is active.                                                                                                                 |
|                                                   |                                                   | 1                                                 | Set XACTUAL = 0 after XTARGET has been reached. The next ramp starts immediately.                                                                                    |
|                                                   |                                                   | circular_movement_en                              | circular_movement_en                                                                                                                                                 |
|                                                   | 22                                                | 0                                                 | Range of XACTUAL is not limited: -2 31 ≤ XACTUAL ≤ 2 31 -1                                                                                                           |
|                                                   |                                                   | 1                                                 | Range of XACTUAL is limited by X_RANGE : - X_RANGE ≤ XACTUAL ≤ X_RANGE -                                                                                             |
|   Continued on next page.                       |   Continued on next page.                       |   Continued on next page.                       |   Continued on next page.                                                                                                                                          |

<!-- image -->

<!-- image -->

Table 56: Reference Switch Configuration 0x01

| REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                             | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                                         |
|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| R/W                                               | Bit                                               | Val                                                                                         | Remarks                                                                                                 |
| RW                                                | 24:23                                             | pos_comp_output                                                                             | pos_comp_output                                                                                         |
| RW                                                | 24:23                                             | 0                                                                                           | TARGET_REACHED is set active on TARGET_REACHED_F lag.                                                   |
| RW                                                | 24:23                                             | 1                                                                                           | TARGET_REACHED is set active on VELOCITY_REACHED_F lag.                                                 |
| RW                                                | 24:23                                             | 3                                                                                           | TARGET_REACHED triggers on POSCOMP_REACHED_F lag.                                                       |
| RW                                                | 25                                                | Reserved. Set to 0.                                                                         | Reserved. Set to 0.                                                                                     |
| RW                                                | 26                                                | stop_on_stall                                                                               | stop_on_stall                                                                                           |
| RW                                                | 26                                                | 0                                                                                           | SPI and S/D output interface remain active in case of an stall event.                                   |
| RW                                                | 26                                                | 1                                                                                           | SPI and S/D output interface stops motion in case of an stall event (hard stop).                        |
| RW                                                | 27                                                | drv_after_stall                                                                             | drv_after_stall                                                                                         |
| RW                                                | 27                                                | 0                                                                                           | No further motion in case of an active stop-on-stall event.                                             |
| RW                                                | 27                                                | 1                                                                                           | Motion is possible in case of an active stop-on-stall event and after the stop-on-stall event is reset. |
| RW                                                | 29:28                                             | modified_pos_compare: POS_COMP_REACHED_F / event is based on comparison between XACTUAL and | modified_pos_compare: POS_COMP_REACHED_F / event is based on comparison between XACTUAL and             |
| RW                                                | 29:28                                             | 0                                                                                           | POS_COMP                                                                                                |
| RW                                                | 29:28                                             | 1                                                                                           | X_HOME                                                                                                  |
| RW                                                | 29:28                                             | 2                                                                                           | X_LATCH                                                                                                 |
| RW                                                | 29:28                                             | 3                                                                                           | REV_CNT                                                                                                 |
| RW                                                | 30                                                | automatic_cover                                                                             | automatic_cover                                                                                         |
| RW                                                | 30                                                | 0                                                                                           | SPI output interface will not transfer automatically any cover datagram.                                |
| RW                                                | 30                                                | 1                                                                                           | SPI output interface sends automatically cover datagrams when VACTUAL crosses SPI_SWITCH_VEL .          |
| RW                                                | 31                                                | Reserved. Set to 0.                                                                         | Reserved. Set to 0.                                                                                     |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Start Switch Configuration Register START\_CONF 0x02

| START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)                                                                                                                         |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                           | Bit                                           | Val                                           | Remarks                                                                                                                                                             |
|                                               | 4:0                                           | start_en                                      | start_en                                                                                                                                                            |
|                                               | 4:0                                           | xxxx1                                         | Alteration of XTARGET value requires distinct start signal.                                                                                                         |
|                                               | 4:0                                           | xxx1x                                         | Alteration of VMAX value requires distinct start signal.                                                                                                            |
|                                               | 4:0                                           | xx1xx                                         | Alteration of RAMPMODE value requires distinct start signal.                                                                                                        |
|                                               | 4:0                                           | x1xxx                                         | Alteration of GEAR_RATIO value requires distinct start signal.                                                                                                      |
|                                               | 4:0                                           | 1xxxx                                         | Shadow Register Feature Set is enabled.                                                                                                                             |
| RW                                            | 8:5                                           | trigger_events                                | trigger_events                                                                                                                                                      |
|                                               | 8:5                                           | 0000                                          | Timing feature set is disabled because start signal generation is disabled.                                                                                         |
|                                               | 8:5                                           | xxx0                                          | START pin is assigned as output.                                                                                                                                    |
|                                               | 8:5                                           | xxx1                                          | External start signal is enabled as timer trigger. START pin is assigned as input.                                                                                  |
|                                               | 8:5                                           | xx1x                                          | TARGET_REACHED event is assigned as start signal trigger.                                                                                                           |
|                                               | 8:5                                           | x1xx                                          | VELOCITY_REACHED event is assigned as start signal trigger.                                                                                                         |
|                                               | 8:5                                           | 1xxx                                          | POSCOMP_REACHED event is assigned as start signal trigger.                                                                                                          |
|                                               | 10                                            | pol_start_signal                              | pol_start_signal                                                                                                                                                    |
|                                               | 10                                            | 0                                             | START pin is low active (input resp. output).                                                                                                                       |
|                                               | 10                                            | 1                                             | START pin is high active (input resp. output).                                                                                                                      |
|                                               |                                               | immediate_start_in                            | immediate_start_in                                                                                                                                                  |
|                                               |                                               | 0                                             | Active START input signal starts internal start timer.                                                                                                              |
|                                               |                                               | 1                                             | Active START input signal is executed immediately.                                                                                                                  |
|                                               | 11                                            | busy_state_en                                 | busy_state_en                                                                                                                                                       |
|                                               | 11                                            | 0                                             | START pin is only assigned as input or output.                                                                                                                      |
|                                               | 11                                            | 1                                             | Busy start state is enabled. START pin is assigned as input with a weakly driven active start polarity or as output with a strongly driven inactive start polarity. |
|                                               | 15:12                                         | pipeline_en                                   | pipeline_en                                                                                                                                                         |
|                                               | 15:12                                         | 0000                                          | No pipelining is active.                                                                                                                                            |
|                                               | 15:12                                         | xxx1                                          | X_TARGET is considered for pipelining.                                                                                                                              |
|                                               | 15:12                                         | xx1x                                          | POS_COMP is considered for pipelining.                                                                                                                              |
|                                               | 15:12                                         | x1xx                                          | GEAR_RATIO is considered for pipelining.                                                                                                                            |
|                                               | 15:12                                         | 1xxx                                          | GENERAL_CONF is considered for pipelining.                                                                                                                          |
|                                               | 17:16                                         | shadow_option                                 | shadow_option                                                                                                                                                       |
|                                               | 17:16                                         | 0                                             | Single-level shadow registers for 13 relevant ramp parameters.                                                                                                      |
|                                               | 17:16                                         | 1                                             | Double-stage shadow registers for S-shaped ramps.                                                                                                                   |
|                                               | 17:16                                         | 2                                             | Double-stage shadow registers for trapezoidal ramps (excl. VSTOP ).                                                                                                 |
|                                               | 17:16                                         | 3                                             | Double-stage shadow registers for trapezoidal ramps (excl. VSTART ).                                                                                                |
|                                               |   Continued on next page.                   |   Continued on next page.                   |   Continued on next page.                                                                                                                                         |

<!-- image -->

<!-- image -->

<!-- image -->

| START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                           | Bit                                           | Val                                           | Remarks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| RW                                            | 18                                            | cyclic_shadow_regs                            | cyclic_shadow_regs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RW                                            | 18                                            | 0                                             | Current ramp parameters are not written back to the shadow register.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| RW                                            | 18                                            | 1                                             | Current ramp parameters are written back to the appropriate shadow register.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| RW                                            | 19                                            | Reserved. Set to 0.                           | Reserved. Set to 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| RW                                            | 23:20                                         | SHADOW_MISS_CNT                               | SHADOW_MISS_CNT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| RW                                            | 23:20                                         | U                                             | Number of unused start internal start signals between two consecutive shadow register transfers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| RW                                            | 31:24                                         | XPIPE_REWRITE_REG                             | XPIPE_REWRITE_REG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| RW                                            | 31:24                                         |                                               | Current assigned pipeline registers - START_CONF (15:12) - are written back to X_PIPEx in the case of an internal start signal generation and if assigned in this register with a '1': XPIPE_REWRITE_REG (0)  X_PIPE0 XPIPE_REWRITE_REG (1)  X_PIPE1 XPIPE_REWRITE_REG (2)  X_PIPE2 XPIPE_REWRITE_REG (3)  X_PIPE3 XPIPE_REWRITE_REG (4)  X_PIPE4 XPIPE_REWRITE_REG (5)  X_PIPE5 XPIPE_REWRITE_REG (6)  X_PIPE6 XPIPE_REWRITE_REG (7)  X_PIPE7 Ex.: START_CONF (15:12) = b'0011. START_CONF (31:24) = b'01000010. If an internal start signal is generated, the value of X_TARGET is written back to |

Table 57: Start Switch Configuration START\_CONF 0x02

<!-- image -->

<!-- image -->

## Input Filter Configuration Register INPUT\_FILT\_CONF 0x03

Table 58: Input Filter Configuration Register INPUT\_FILT\_CONF 0x03

<!-- image -->

| INPUT_FILT_CONF 0x03 (Default value: 0x00000000)   | INPUT_FILT_CONF 0x03 (Default value: 0x00000000)   | INPUT_FILT_CONF 0x03 (Default value: 0x00000000)   | INPUT_FILT_CONF 0x03 (Default value: 0x00000000)                                                                                                            |
|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                | Bit                                                | Val                                                | Remarks                                                                                                                                                     |
| RW                                                 | 2:0                                                | SR_SD_IN                                           | SR_SD_IN                                                                                                                                                    |
| RW                                                 | 2:0                                                | U                                                  | Input sample rate = f clk / 2 SR_SD_IN for the following pins: STPIN, DIRIN                                                                                 |
| RW                                                 | 3                                                  | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                         |
| RW                                                 | 6:4                                                | FILT_L_SD_IN                                       | FILT_L_SD_IN                                                                                                                                                |
| RW                                                 | 6:4                                                | U                                                  | Filter length for these pins: STPIN, DIRIN. Number of sample input bits that must have equal voltage levels to provide a valid input bit.                   |
| RW                                                 | 3                                                  | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                         |
| RW                                                 | 10:8                                               | SR_REF                                             | SR_REF                                                                                                                                                      |
| RW                                                 | 10:8                                               | U                                                  | Input sample rate = f clk / 2 REF for the following pins: STOPL, HOME_REF, STOPL                                                                            |
| RW                                                 | 11                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                         |
| RW                                                 | 14:12                                              | FILT_L_REF                                         | FILT_L_REF                                                                                                                                                  |
| RW                                                 | 14:12                                              | U                                                  | Filter length for the following pins: STOPL, HOME_REF, STOPL. Number of sample input bits that must have equal voltage levels to provide a valid input bit. |
| RW                                                 | 15                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                         |
| RW                                                 | 18:16                                              | SR_S                                               | SR_S                                                                                                                                                        |
| RW                                                 | 18:16                                              | U                                                  | Input sample rate = f clk / 2 S for the START pin.                                                                                                          |
| RW                                                 | 19                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                         |
| RW                                                 | 22:20                                              | FILT_L_S                                           | FILT_L_S                                                                                                                                                    |
| RW                                                 | 22:20                                              | U                                                  | Filter length for the START pin. Number of sample input bits that must have equal voltage levels to provide a valid input bit.                              |
| RW                                                 | 31:23                                              | Reserved. Set to 0x00.                             | Reserved. Set to 0x00.                                                                                                                                      |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## SPI Output Configuration Register SPI\_OUT\_CONF 0x04

| SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)                                                                                                                                                                     |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                             | Remarks                                                                                                                                                                                                           |
| RW                                              |                                                 | spi_output_format                               | spi_output_format                                                                                                                                                                                                 |
|                                                 |                                                 | 0                                               | SPI output interface is off .                                                                                                                                                                                     |
|                                                 |                                                 | 1                                               | SPI output interface is connected with a SPI-DAC . SPI output values are mapped to full amplitude: Current=0  VCC/2 Current=-max  0 Current=max  VCC                                                           |
|                                                 |                                                 | 2                                               | SPI output interface is connected with a SPI-DAC . SPI output values are absolute values . Phase of coilA is forwarded via STPOUT, whereas phase of coilB is forwarded via DIROUT. Phase bit = 0:positive value.  |
|                                                 |                                                 | 3                                               | SPI output interface is connected with a SPI-DAC . SPI output values are absolute values . Phase of coilA is forwarded via STPOUT, whereas phase of coilB is forwarded via DIROUT. Phase bit = 0: negative value. |
|                                                 |                                                 | 4                                               | The actual unsigned scaling factor is forwarded via SPI output interface.                                                                                                                                         |
|                                                 | 3:0                                             | 5                                               | Both actual signed current values CURRENTA and CURRENTB are forwarded in one datagram via SPI output interface.                                                                                                   |
|                                                 |                                                 | 6                                               | SPI output interface is connected with a SPI-DAC . The actual unsigned scaling factor is merged with DAC_ADDR_A value to an output datagram.                                                                      |
|                                                 |                                                 | 8                                               | SPI output interface is connected with a TMC23x stepper motor driver.                                                                                                                                             |
|                                                 |                                                 | 9                                               | SPI output interface is connected with a TMC24x stepper motor driver.                                                                                                                                             |
|                                                 |                                                 | 10                                              | SPI output interface is connected with a TMC26x/389 stepper motor driver. Configuration and current data are transferred to the stepper motor driver.                                                             |
|                                                 |                                                 | 11                                              | SPI output interface is connected with a TMC26x stepper motor driver. Only configuration data is transferred to the stepper motor driver. S/D output interface provides steps.                                    |
|                                                 |                                                 | 12                                              | SPI output interface is connected with a TMC2130 stepper motor driver. Only configuration data is transferred to the stepper motor driver. S/D output interface provides steps.                                   |
|                                                 |                                                 | 13                                              | SPI output interface is connected with a TMC2130 stepper motor driver. Configuration and current data are transferred to the stepper motor driver.                                                                |
|                                                 |                                                 | 15                                              | Only cover datagrams are transferred via SPI output interface.                                                                                                                                                    |
|                                                 |                                                 | COVER_DATA_LENGTH                               | COVER_DATA_LENGTH                                                                                                                                                                                                 |
|                                                 | 19:13                                           | U                                               | Number of bits for the complete datagram length. Maximum value = 64 Set to 0 in case a TMC stepper motor driver is selected. The datagram length is then selected automatically.                                  |
|                                                 | 23:20                                           | SPI_OUT_LOW_TIME                                | SPI_OUT_LOW_TIME                                                                                                                                                                                                  |
|                                                 | 23:20                                           | U                                               | Number of clock cycles the SPI output clock remains at low level.                                                                                                                                                 |
|                                                 |                                                 | SPI_OUT_HIGH_TIME                               | SPI_OUT_HIGH_TIME                                                                                                                                                                                                 |
|                                                 | 27:24                                           | U                                               | Number of clock cycles the SPI output clock remains at high level.                                                                                                                                                |
|                                                 |                                                 | SPI_OUT_BLOCK_TIME                              | SPI_OUT_BLOCK_TIME                                                                                                                                                                                                |
|                                                 | 31:28                                           | U                                               | Number of clock cycles the NSCSDRV output remains high (inactive) after a SPI output transmission.                                                                                                                |
|                                                 |   Continued on next page.                     |   Continued on next page.                     |   Continued on next page.                                                                                                                                                                                       |

<!-- image -->

<!-- image -->

| SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)                                                          | SPI_OUT_CONF 0x04 (Default value: 0x00000000)                                                                                                                                           |
|-------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                                                                                    | Remarks                                                                                                                                                                                 |
| RW                                              |                                                 | mixed_decay (TMC23x/24x only)                                                                          | mixed_decay (TMC23x/24x only)                                                                                                                                                           |
| RW                                              |                                                 | 0                                                                                                      | Both mixed decay bits are always off.                                                                                                                                                   |
| RW                                              | 5:4                                             | 1                                                                                                      | Mixed decay bits are on during falling ramps until reaching a current value of 0.                                                                                                       |
| RW                                              |                                                 | 2                                                                                                      | Mixed decay bits are always on, except during standstill.                                                                                                                               |
| RW                                              |                                                 | 3                                                                                                      | Mixed decay bits are always on.                                                                                                                                                         |
|                                                 |                                                 | stdby_on_stall_for_24x (TMC24x                                                                         | stdby_on_stall_for_24x (TMC24x                                                                                                                                                          |
|                                                 | 6                                               | 0                                                                                                      | No standby datagram is sent.                                                                                                                                                            |
|                                                 |                                                 | 1                                                                                                      | In case of a Stop-on-Stall event, a standby datagram is sent to the TMC24x.                                                                                                             |
|                                                 | 7                                               | stall_flag_instead_of_uv_en (TMC24x only)                                                              | stall_flag_instead_of_uv_en (TMC24x only)                                                                                                                                               |
|                                                 | 7                                               | 0                                                                                                      | Undervoltage flag of TMC24x is mapped at STATUS (24).                                                                                                                                   |
|                                                 | 7                                               | 1                                                                                                      | Calculated stall status of TMC24x is forwarded at STATUS (24).                                                                                                                          |
|                                                 | 10:8                                            | STALL_LOAD_LIMIT (TMC24x only)                                                                         | STALL_LOAD_LIMIT (TMC24x only)                                                                                                                                                          |
|                                                 | 10:8                                            | U                                                                                                      | A stall is detected if the stall limit value STALL_LOAD_LIMIT is higher than the combination of the load bits (LD2&LD1&LD0).                                                            |
|                                                 | 11                                              | pwm_phase_shft_en (TMC24x only)                                                                        | pwm_phase_shft_en (TMC24x only)                                                                                                                                                         |
|                                                 | 11                                              | 0                                                                                                      | No phase shift during PWM mode.                                                                                                                                                         |
|                                                 | 11                                              | 1                                                                                                      | During PWM mode, the internal SinLUT microstep position MSCNT is shifted to MS_OFFSET microsteps. Consequently, the sine/cosine values have a phase shift of ( MS_OFFSET / 1024 ∙ 360°) |
|                                                 |                                                 | double_freq_at_stdby (TMC23x/24x                                                                       | double_freq_at_stdby (TMC23x/24x                                                                                                                                                        |
|                                                 | 12                                              | 0                                                                                                      | ChopSync frequency remains stable during standby.                                                                                                                                       |
|                                                 |                                                 | 1                                                                                                      | CHOP_SYNC_DIV is halfed during standby.                                                                                                                                                 |
|                                                 |                                                 | three_phase_stepper_en (TMC389 only)                                                                   | three_phase_stepper_en (TMC389 only)                                                                                                                                                    |
|                                                 | 4                                               | 0                                                                                                      | A 2-phase stepper motor driver is connected to the SPI output (TMC26x).                                                                                                                 |
|                                                 |                                                 | 1                                                                                                      | A 3-phase stepper motor driver is connected to the SPI output (TMC389).                                                                                                                 |
|                                                 |                                                 | scale_val_transfer_en (TMC26x/2130 in SD mode only)                                                    | scale_val_transfer_en (TMC26x/2130 in SD mode only)                                                                                                                                     |
|                                                 | 5                                               | 0                                                                                                      | No transfer of scale values.                                                                                                                                                            |
|                                                 |                                                 | 1                                                                                                      | Transmission of current scale values to the appropriate driver registers.                                                                                                               |
|                                                 |                                                 | disable_polling (TMC26x/2130 in SD mode only)                                                          | disable_polling (TMC26x/2130 in SD mode only)                                                                                                                                           |
|                                                 | 6                                               | 0                                                                                                      | Permanent transfer of polling datagrams to check driver status.                                                                                                                         |
|                                                 |                                                 | 1                                                                                                      | No transfer of polling datagrams.                                                                                                                                                       |
|                                                 | 7                                               | autorepeat_cover_en (TMC26x/2130 only)                                                                 | autorepeat_cover_en (TMC26x/2130 only)                                                                                                                                                  |
|                                                 |                                                 | 0                                                                                                      | No automatic continuous streaming of cover datagrams.                                                                                                                                   |
|                                                 |                                                 | 1                                                                                                      | Enabling of automatic continuous streaming of cover datagrams.                                                                                                                          |
|                                                 |                                                 | POLL_BLOCK_EXP (TMC26x in SD mode only, TMC2130 only)                                                  | POLL_BLOCK_EXP (TMC26x in SD mode only, TMC2130 only)                                                                                                                                   |
|                                                 | 11:8                                            | U                                                                                                      | Multiplier for calculating the time interval between two consecutive polling datagrams: t = 2^ POLL_BLOCK_EXP ∙ SPI_OUT_BLOCK_TIME / f                                                  |
|                                                 | 11:8                                            | 0                                                                                                      | COVER_DONE event is set for every datagram that is sent to the motor                                                                                                                    |
|                                                 | 12                                              |                                                                                                        | driver.                                                                                                                                                                                 |
|                                                 |                                                 | COVER_DONE event is only set for cover datagrams sent to the motor driver.   Continued on next page. | COVER_DONE event is only set for cover datagrams sent to the motor driver.   Continued on next page.                                                                                  |

<!-- image -->

<!-- image -->

Table 59: SPI Output Configuration Register SPI\_OUT\_CONF 0x04

<!-- image -->

| SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)   | SPI_OUT_CONF 0x04 (Default value: 0x00000000)                      |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                             | Remarks                                                            |
| RW                                              | 4                                               | sck_low_before_csn (No TMC driver)              | sck_low_before_csn (No TMC driver)                                 |
| RW                                              | 4                                               | 0                                               | NSCSDRV is tied low before SCKDRV to initiate a new data transfer. |
| RW                                              | 4                                               | 1                                               | SCKDRV is tied low before NSCSDRV to initiate a new data transfer. |
| RW                                              | 5                                               | new_out_bit_at_rise (No TMC driver)             | new_out_bit_at_rise (No TMC driver)                                |
| RW                                              | 5                                               | 0                                               | New value bit at SDODRV is assigned at falling edge of SCKDRV.     |
| RW                                              | 5                                               | 1                                               | New value bit at SDODRV is assigned at rising edge of SCKDRV.      |
| RW                                              | 11:7                                            | DAC_CMD_LENGTH (SPI-DAC only)                   | DAC_CMD_LENGTH (SPI-DAC only)                                      |
| RW                                              | 11:7                                            | U                                               | Number of bits for command address.                                |
| RW                                              | 12                                              | Reserved. Set to 0.                             | Reserved. Set to 0.                                                |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Current Scaling Configuration Register CURRENT\_CONF 0x05

Table 60: Current Scale Configuration (0x05)

| CURRENT_CONF 0x05 (Default: 0x00000000)   | CURRENT_CONF 0x05 (Default: 0x00000000)   | CURRENT_CONF 0x05 (Default: 0x00000000)   | CURRENT_CONF 0x05 (Default: 0x00000000)                                                                                                                                                                      |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                       | Bit                                       | Val                                       | Remarks                                                                                                                                                                                                      |
|                                           | 0                                         | hold_current_scale_en                     | hold_current_scale_en                                                                                                                                                                                        |
|                                           | 0                                         | 0                                         | No hold current scaling during standstill phase.                                                                                                                                                             |
|                                           | 0                                         | 1                                         | Hold current scaling during standstill phase.                                                                                                                                                                |
|                                           | 1                                         | drive_current_scale_en                    | drive_current_scale_en                                                                                                                                                                                       |
|                                           | 1                                         | 0                                         | No drive current scaling during motion.                                                                                                                                                                      |
|                                           | 1                                         | 1                                         | Drive current scaling during motion.                                                                                                                                                                         |
| RW                                        | 2                                         | boost_current_on_acc_en                   | boost_current_on_acc_en                                                                                                                                                                                      |
| RW                                        | 2                                         | 0                                         | No boost current scaling for deceleration ramps.                                                                                                                                                             |
| RW                                        | 2                                         | 1                                         | Boost current scaling if RAMP_STATE = b'01 (acceleration slopes).                                                                                                                                            |
| RW                                        | 3                                         | boost_current_on_dec_en                   | boost_current_on_dec_en                                                                                                                                                                                      |
| RW                                        | 3                                         | 0                                         | No boost current scaling for deceleration ramps.                                                                                                                                                             |
| RW                                        | 3                                         | 1                                         | Boost current scaling if RAMP_STATE = b'10 (deceleration slopes).                                                                                                                                            |
| RW                                        |                                           | boost_current_after_start_en              | boost_current_after_start_en                                                                                                                                                                                 |
| RW                                        | 4                                         | 0                                         | No boost current at ramp start.                                                                                                                                                                              |
| RW                                        |                                           | 1                                         | Temporary boost current if VACTUAL = 0 and new ramp starts.                                                                                                                                                  |
| RW                                        |                                           | sec_drive_current_scale_en                | sec_drive_current_scale_en                                                                                                                                                                                   |
| RW                                        | 5                                         | 0                                         | One drive current value for the whole motion ramp.                                                                                                                                                           |
| RW                                        |                                           | 1                                         | Second drive current scaling for VACTUAL > VDRV_SCALE_LIMIT .                                                                                                                                                |
| RW                                        | 6                                         | freewheeling_en                           | freewheeling_en                                                                                                                                                                                              |
| RW                                        | 6                                         | 0                                         | No freewheeling.                                                                                                                                                                                             |
| RW                                        | 6                                         | 1                                         | Freewheeling after standby phase.                                                                                                                                                                            |
|                                           | 7                                         | Reserved. Set to 0.                       | Reserved. Set to 0.                                                                                                                                                                                          |
|                                           |                                           | pwm_scale_en                              | pwm_scale_en                                                                                                                                                                                                 |
|                                           | 8                                         | 0                                         | PWM scaling is disabled.                                                                                                                                                                                     |
|                                           | 8                                         | 1                                         | PWM scaling is enabled.                                                                                                                                                                                      |
|                                           | 15:9                                      | Reserved. Set to 0x00.                    | Reserved. Set to 0x00.                                                                                                                                                                                       |
|                                           |                                           | PWM_AMPL                                  | PWM_AMPL                                                                                                                                                                                                     |
|                                           | 31:16                                     | U                                         | PWM amplitude during Voltage PWM mode at VACTUAL = 0. i Maximum duty cycle = (0.5 + ( PWM_AMPL + 1) / 2 17 ) Minimum duty cycle = (0.5 - ( PWM_AMPL + 1) / 2 17 ) PWM_AMPL = 2 16 - 1 at VACTUAL = PWM_VMAX. |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Current Scale Values Register SCALE\_VALUES 0x06

Table 61: Current Scale Values (0x06)

| SCALE_VALUES 0x06 (Default: 0xFFFFFFFF)   | SCALE_VALUES 0x06 (Default: 0xFFFFFFFF)   | SCALE_VALUES 0x06 (Default: 0xFFFFFFFF)   | SCALE_VALUES 0x06 (Default: 0xFFFFFFFF)   | SCALE_VALUES 0x06 (Default: 0xFFFFFFFF)   |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| R/W                                       | Bit                                       | Val                                       | Scaling Value Name                        | Remarks                                   |
| RW                                        | 7:0                                       | U                                         | BOOST_SCALE_VAL                           | Open-loop boost scaling value.            |
| RW                                        | 15:8                                      | U                                         | DRV1_SCALE_VAL                            | Open-loop first drive scaling value.      |
| RW                                        | 23:16                                     | U                                         | DRV2_SCALE_VAL                            | Open-loop second drive scaling value.     |
| RW                                        | 31:24                                     | U                                         | HOLD_SCALE_VAL                            | Open-loop standby scaling value.          |

## NOTE:

-  BOOST\_SCALE\_VAL, DRV1/DRV2\_SCALE\_VAL, HOLD\_SCALE\_VAL.
-  Real scaling value   = (x+1) / 32 if spi\_output\_format = b'1011 or b'1100.
-  = (x+1) / 256 any other spi\_output\_format setting.

## Various Scaling Configuration Registers

Table 62: Various Scaling Configuration Registers (0x15…0x1B)

| Various Scaling Configuration Registers   | Various Scaling Configuration Registers   | Various Scaling Configuration Registers   | Various Scaling Configuration Registers                                           | Various Scaling Configuration Registers                                                                                                                      |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                       | Addr                                      | Bit                                       | Val                                                                               | Description                                                                                                                                                  |
| RW                                        | 0x15                                      | 31:0                                      | STDBY_DELAY (Default:0x00000000)                                                  | STDBY_DELAY (Default:0x00000000)                                                                                                                             |
| RW                                        | 0x15                                      | 31:0                                      | U                                                                                 | Delay time [# clock cycles] between ramp stop and activating standby phase.                                                                                  |
|                                           | 0x16                                      | 31:0                                      | FREEWHEEL_DELAY (Default:0x00000000)                                              | FREEWHEEL_DELAY (Default:0x00000000)                                                                                                                         |
|                                           | 0x16                                      | 31:0                                      | U                                                                                 | Delay time [# clock cycles] between initialization of active standby phase and freewheeling initialization.                                                  |
|                                           | 0x17                                      | 23:0                                      | VDRV_SCALE_LIMIT (Default:0x000000) (Voltage PWM mode is not active)              | VDRV_SCALE_LIMIT (Default:0x000000) (Voltage PWM mode is not active)                                                                                         |
|                                           | 0x17                                      | 23:0                                      | U                                                                                 | Drive scaling separator: DRV2_SCALE_VAL is active in case VACTUAL > VDRV _ SCALE_LIMIT DRV1_SCALE_VAL is active in case VACTUAL ≤ VDRV _ SCALE_LIMIT         |
|                                           | 0x17                                      | 23:0                                      | 2 nd assignment: Also used as PWM_VMAX if Voltage PWM is enabled (see)            | 2 nd assignment: Also used as PWM_VMAX if Voltage PWM is enabled (see)                                                                                       |
|                                           | 0x18                                      | 23:0                                      | UP_SCALE_DELAY (Default:0x000000) (Open-loop operation)                           | UP_SCALE_DELAY (Default:0x000000) (Open-loop operation)                                                                                                      |
|                                           | 0x18                                      | 23:0                                      | U                                                                                 | Increment delay [# clock cycles]. The value defines the clock cycles, which are used to increase the current scale value for one step towards higher values. |
|                                           | 0x19                                      | 23:0                                      | HOLD_SCALE_DELAY (Default:0x000000) (Open-loop operation)                         | HOLD_SCALE_DELAY (Default:0x000000) (Open-loop operation)                                                                                                    |
|                                           | 0x19                                      | 23:0                                      | U                                                                                 | Decrement delay [# clock cycles] to decrease the actual scale value by one step towards hold current.                                                        |
|                                           | 0x1A                                      | 23:0                                      | DRV_SCALE_DELAY (Default:0x000000)                                                | DRV_SCALE_DELAY (Default:0x000000)                                                                                                                           |
|                                           | 0x1A                                      | 23:0                                      | U                                                                                 | Decrement delay [# clock cycles], which signifies current scale value decrease by one step towards lower value.                                              |
|                                           | 0x1B                                      | 31:0                                      | BOOST_TIME (Default:0x00000000)                                                   | BOOST_TIME (Default:0x00000000)                                                                                                                              |
|                                           | 0x1B                                      | 31:0                                      | U                                                                                 | Time [# clk cycles] after a ramp start when boost scaling is active.                                                                                         |
| R                                         | 0x7C                                      | 8:0                                       | SCALE_PARAM (Default:0x000)                                                       | SCALE_PARAM (Default:0x000)                                                                                                                                  |
| R                                         | 0x7C                                      | 8:0                                       | U                                                                                 | Actual used scale parameter.                                                                                                                                 |
| W                                         |                                           | 31:0                                      | 2 nd assignment: Also used as CIRCULAR_DEC for write access (see section 15.13. ) | 2 nd assignment: Also used as CIRCULAR_DEC for write access (see section 15.13. )                                                                            |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Motor Driver Settings Register STEP\_CONF 0x0A

Table 63: Motor Driver Settings (0x0A)

| STEP_CONF 0x0A (Default: 0x00FB0C80)   | STEP_CONF 0x0A (Default: 0x00FB0C80)   | STEP_CONF 0x0A (Default: 0x00FB0C80)   | STEP_CONF 0x0A (Default: 0x00FB0C80)                                                                                                                                                                                                    |
|----------------------------------------|----------------------------------------|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                    | Bit                                    | Val                                    | Remarks                                                                                                                                                                                                                                 |
| RW                                     | 3:0                                    | MSTEP_PER_FS (Default: 0x0)            | MSTEP_PER_FS (Default: 0x0)                                                                                                                                                                                                             |
| RW                                     | 3:0                                    | 0                                      | Highest microsteps resolution: 256 microsteps per fullstep. i When using a Step/Dir driver, it must be capable of a 256 resolution via Step/Dir input for best performance (but lower resolution Step/Dir drivers can be used as well). |
| RW                                     | 3:0                                    | 1                                      | 128 microsteps per fullstep.                                                                                                                                                                                                            |
| RW                                     | 3:0                                    | 2                                      | 64 microsteps per fullstep.                                                                                                                                                                                                             |
| RW                                     | 3:0                                    | 3                                      | 32 microsteps per fullstep.                                                                                                                                                                                                             |
| RW                                     | 3:0                                    | 4                                      | 16 microsteps per fullstep.                                                                                                                                                                                                             |
| RW                                     | 3:0                                    | 5                                      | 8 microsteps per fullstep.                                                                                                                                                                                                              |
| RW                                     | 3:0                                    | 6                                      | 4 microsteps per fullstep.                                                                                                                                                                                                              |
| RW                                     | 3:0                                    | 7                                      | Halfsteps: 2 microsteps per fullstep.                                                                                                                                                                                                   |
| RW                                     | 3:0                                    | 8                                      | Full steps (maximum possible setting)                                                                                                                                                                                                   |
| RW                                     | 15:4                                   | FS_PER_REV (Default: 0x0C8)            | FS_PER_REV (Default: 0x0C8)                                                                                                                                                                                                             |
| RW                                     | 15:4                                   | U                                      | Fullsteps per motor axis revolution                                                                                                                                                                                                     |
| RW                                     | 23:16                                  | MSTATUS_SELECTION (Default: 0xFB)      | MSTATUS_SELECTION (Default: 0xFB)                                                                                                                                                                                                       |
| RW                                     | 23:16                                  |                                        | Selection of motor driver status bits for SPI response datagrams: ORed with Motor Driver Status Register Set (7:0): if set here and a particular flag is set from the motor stepper driver, an event will be generated at EVENTS (30)   |
| RW                                     | 31:24                                  | Reserved. Set to 0x00.                 | Reserved. Set to 0x00.                                                                                                                                                                                                                  |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

<!-- image -->

## Event Selection Registers 0x0B..0X0D

| Event Selection Registers   | Event Selection Registers   | Event Selection Registers                  | Event Selection Registers                                                                                                                                                                                                                        |
|-----------------------------|-----------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                         | Addr                        | Bit                                        | Remarks                                                                                                                                                                                                                                          |
| RW                          | 0x0B                        | SPI_STATUS_SELECTION (Default: 0x82029805) | SPI_STATUS_SELECTION (Default: 0x82029805)                                                                                                                                                                                                       |
| RW                          | 0x0B                        | 31:0                                       | Events selection for SPI datagrams: Event bits of EVENTS register 0x0E that are selected (=1) in this register are forwarded to the eight status bits that are transferred with every SPI datagram (first eight bits from LSB are significant!). |
| RW                          | 0x0C                        | EVENT_CLEAR_CONF ( Default: 0x00000000)    | EVENT_CLEAR_CONF ( Default: 0x00000000)                                                                                                                                                                                                          |
| RW                          | 0x0C                        | 31:0                                       | Event protection configuration: Event bits of EVENTS register 0x0E that are selected in this register (=1) are not cleared during the readout process of EVENTS register 0x0E.                                                                   |
| RW                          | 0x0D                        | INTR_CONF ( Default: 0x00000000)           | INTR_CONF ( Default: 0x00000000)                                                                                                                                                                                                                 |
| RW                          | 0x0D                        | 31:0                                       | Event selection for INTR output: All Event bits of EVENTS register 0x0E that are selected here (=1) are ORed with interrupt event register set: if any of the selected events is active, an interrupt at INTR is generated.                      |

Table 64: Event Selection Regsiters 0x0B…0x0D

<!-- image -->

## Status Event Register (0x0E)

Table 65: Status Event Register EVENTS (0x0E)

| Status Event Register EVENTS 0x0E   | Status Event Register EVENTS 0x0E   | Status Event Register EVENTS 0x0E                                                                                                                                                           |
|-------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                 | Bit                                 | Description                                                                                                                                                                                 |
| R+C W                               | 0                                   | TARGET_REACHED has been triggered.                                                                                                                                                          |
|                                     | 1                                   | POS_COMP_REACHED has been triggered.                                                                                                                                                        |
|                                     | 2                                   | VEL_REACHED has been triggered.                                                                                                                                                             |
|                                     | 3                                   | VEL_STATE = b'00 has been triggered ( VACTUAL = 0).                                                                                                                                         |
|                                     | 4                                   | VEL_STATE = b'01 has been triggered ( VACTUAL > 0).                                                                                                                                         |
|                                     | 5                                   | VEL_STATE = b'10 has been triggered ( VACTUAL < 0).                                                                                                                                         |
|                                     | 6                                   | RAMP_STATE = b'00 has been triggered ( AACTUAL = 0, VACTUAL is constant).                                                                                                                   |
|                                     | 7                                   | RAMP_STATE = b'01 has been triggered (&#124; VACTUAL &#124; increases).                                                                                                                     |
|                                     | 8                                   | RAMP_STATE = b'10 has been triggered (&#124; VACTUAL &#124; increases).                                                                                                                     |
|                                     | 9                                   | MAX_PHASE_TRAP : Trapezoidal ramp has reached its limit speed using maximum values for AMAX or DMAX (&#124; VACTUAL &#124; > VBREAK ; VBREAK ≠0).                                           |
|                                     | 10                                  | Reserved.                                                                                                                                                                                   |
|                                     | 11                                  | STOPL has been triggered. Motion in negative direction is not executed until this event is cleared and (STOPL is not active any more or stop_left_en is set to 0).                          |
|                                     | 12                                  | STOPR has been triggered. Motion in positive direction is not executed until this event is cleared and (STOPR is not active any more or stop_right_en is set to 0).                         |
|                                     | 13                                  | VSTOPL_ACTIVE: VSTOPL has been activated. No further motion in negative direction until this event is cleared and (a new value is chosen for VSTOPL or virtual_left_limit_en is set to 0).  |
|                                     | 14                                  | VSTOPR_ACTIVE: VSTOPR has been activated. No further motion in positive direction until this event is cleared and (a new value is chosen for VSTOPR or virtual_right_limit_en is set to 0). |
|                                     | 15                                  | HOME_ERROR: Unmatched HOME_REF polarity and HOME is outside of safety margin.                                                                                                               |
|                                     | 16                                  | XLATCH_DONE indicates if X_LATCH was rewritten or homing process has been completed.                                                                                                        |
|                                     | 17                                  | FS_ACTIVE : Fullstep motion has been activated.                                                                                                                                             |
|                                     | 24:18                               | Reserved .                                                                                                                                                                                  |
|                                     | 25                                  | COVER_DONE: SPI datagram was sent to the motor driver.                                                                                                                                      |
|                                     | 28:26                               | Reserved.                                                                                                                                                                                   |
|                                     | 29                                  | STOP_ON_STALL: Motor stall detected. Motor ramp has stopped.                                                                                                                                |
|                                     | 30                                  | MOTOR_EV: One of the selected TMC motor driver flags was triggered.                                                                                                                         |
|                                     | 31                                  | RST_EV : Reset was triggered.                                                                                                                                                               |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Status Flag Register (0x0F)

Table 66: Status Flag Register STATUS (0x0F)

| Status Flag Register STATUS 0x0F   | Status Flag Register STATUS 0x0F   | Status Flag Register STATUS 0x0F                                                | Status Flag Register STATUS 0x0F                                                | Status Flag Register STATUS 0x0F                                                            |
|------------------------------------|------------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| R/W                                | Bit                                | Description                                                                     | Description                                                                     | Description                                                                                 |
| R                                  | 0                                  | TARGET_REACHED_F is set high if XACTUAL = XTARGET                               | TARGET_REACHED_F is set high if XACTUAL = XTARGET                               | TARGET_REACHED_F is set high if XACTUAL = XTARGET                                           |
|                                    | 1                                  | POS_COMP_REACHED_F is set high if XACTUAL = POS_COMP                            | POS_COMP_REACHED_F is set high if XACTUAL = POS_COMP                            | POS_COMP_REACHED_F is set high if XACTUAL = POS_COMP                                        |
|                                    | 2                                  | VEL_REACHED_F is set high if VACTUAL = &#124; VMAX &#124;                       | VEL_REACHED_F is set high if VACTUAL = &#124; VMAX &#124;                       | VEL_REACHED_F is set high if VACTUAL = &#124; VMAX &#124;                                   |
|                                    | 4:3                                | VEL_STATE_F : Current velocity state:                                           |                                                                                 | 0  VACTUAL = 0; 1  VACTUAL > 0; 2  VACTUAL < 0                                           |
|                                    | 6:5                                | RAMP_STATE_F : Current ramp state:                                              | RAMP_STATE_F : Current ramp state:                                              | 0  AACTUAL = 0; 1  AACTUAL increases (acceleration); 2  AACTUAL decreases (deceleration) |
|                                    | 7                                  | STOPL_ACTIVE_F : Left stop switch is active.                                    | STOPL_ACTIVE_F : Left stop switch is active.                                    | STOPL_ACTIVE_F : Left stop switch is active.                                                |
|                                    | 8                                  | STOPR_ACTIVE_F : Right stop switch is active.                                   | STOPR_ACTIVE_F : Right stop switch is active.                                   | STOPR_ACTIVE_F : Right stop switch is active.                                               |
|                                    | 9                                  | VSTOPL_ACTIVE_F : Left virtual stop switch is active.                           | VSTOPL_ACTIVE_F : Left virtual stop switch is active.                           | VSTOPL_ACTIVE_F : Left virtual stop switch is active.                                       |
|                                    | 10                                 | VSTOPR_ACTIVE_F : Right virtual stop switch is active.                          | VSTOPR_ACTIVE_F : Right virtual stop switch is active.                          | VSTOPR_ACTIVE_F : Right virtual stop switch is active.                                      |
|                                    | 11                                 | ACTIVE_STALL_F : Motor stall is detected and VACTUAL > VSTALL_LIMIT .           | ACTIVE_STALL_F : Motor stall is detected and VACTUAL > VSTALL_LIMIT .           | ACTIVE_STALL_F : Motor stall is detected and VACTUAL > VSTALL_LIMIT .                       |
|                                    | 12                                 | HOME_ERROR_F : HOME_REF input signal level is not equal to expected home level. | HOME_ERROR_F : HOME_REF input signal level is not equal to expected home level. | HOME_ERROR_F : HOME_REF input signal level is not equal to expected home level.             |
|                                    | 13                                 | FS_ACTIVE_F : Fullstep operation is active.                                     | FS_ACTIVE_F : Fullstep operation is active.                                     | FS_ACTIVE_F : Fullstep operation is active.                                                 |
|                                    | 23:14                              | Reserved.                                                                       | Reserved.                                                                       | Reserved.                                                                                   |
|                                    | 24                                 | TMC26x / TMC2130 only: SG : Optional for TMC24x only:                           | TMC26x / TMC2130 only: SG : Optional for TMC24x only:                           | StallGuard2 status Calculated stallGuard status.                                            |
|                                    | 24                                 | TMC23x / TMC24x only:                                                           | UV_SF :                                                                         | Undervoltage flag.                                                                          |
|                                    | 25                                 | All TMC motor drivers :                                                         | OT :                                                                            | Overtemperature shutdown.                                                                   |
|                                    | 26                                 | All TMC motor drivers :                                                         | OTPW :                                                                          | Overtemperature warning.                                                                    |
|                                    | 27                                 | TMC26x / TMC2130 only:                                                          | S2GA :                                                                          | Short to ground detection bit for high side MOSFET of coil A.                               |
|                                    | 27                                 | TMC23x / TMC24x only:                                                           | OCA :                                                                           | Overcurrent bridge A.                                                                       |
|                                    | 28                                 | TMC26x / TMC2130 only:                                                          | S2GB :                                                                          | Short to ground detection bit for high side MOSFET of coil B.                               |
|                                    | 28                                 | TMC23x / TMC24x only:                                                           | OCB :                                                                           | Overcurrent bridge B.                                                                       |
|                                    | 29                                 | All TMC motor drivers :                                                         | OLA :                                                                           | Open load indicator of coil A.                                                              |
|                                    | 30                                 | All TMC motor drivers :                                                         | OLB :                                                                           | Open load indicator of coil B.                                                              |
|                                    | 31                                 | TMC26x / TMC2130 only:                                                          | STST :                                                                          | Standstill indicator.                                                                       |
|                                    | 31                                 | TMC23x / TMC24x only:                                                           | OCHS :                                                                          | Overcurrent high side.                                                                      |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Various Configuration Registers

Table 67: Various Configuration Registers

<!-- image -->

| Various Configuration Registers   | Various Configuration Registers   | Various Configuration Registers   | Various Configuration Registers                                                     | Various Configuration Registers                                                                                                                       |
|-----------------------------------|-----------------------------------|-----------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                               | Addr                              | Bit                               | Val Description                                                                     | Val Description                                                                                                                                       |
|                                   | 0x10                              | 15:0                              | STP_LENGTH_ADD (Default: 0x0000)                                                    | STP_LENGTH_ADD (Default: 0x0000)                                                                                                                      |
|                                   | 0x10                              |                                   | U Additional length [# clock cycles] for active step polarity of a step at STPOUT.  | U Additional length [# clock cycles] for active step polarity of a step at STPOUT.                                                                    |
|                                   | 0x10                              | 31:16                             | DIR_SETUP_TIME (Default: 0x0000)                                                    | DIR_SETUP_TIME (Default: 0x0000)                                                                                                                      |
|                                   | 0x10                              |                                   | U Delay [# clock cycles] between DIROUT and STPOUT voltage level changes.           | U Delay [# clock cycles] between DIROUT and STPOUT voltage level changes.                                                                             |
|                                   | 0x10                              |                                   | START_OUT_ADD (Default:0x00000000)                                                  | START_OUT_ADD (Default:0x00000000)                                                                                                                    |
|                                   | 0x11                              | 31:0                              | U                                                                                   | Additional length [# clock cycles] for active start signal. Active start signal length = 1+START_OUT_ADD                                              |
|                                   | 0x12                              |                                   | GEAR_RATIO (Default:0x01000000)                                                     | GEAR_RATIO (Default:0x01000000)                                                                                                                       |
|                                   | 0x12                              | 31:0                              | S                                                                                   | Constant value that is added to the internal position counter by an active step at STPIN. Value representation: 8 digits and 24 decimal places.       |
|                                   | 0x13                              | 31:0                              | START_DELAY (Default:0x00000000)                                                    | START_DELAY (Default:0x00000000)                                                                                                                      |
| RW                                | 0x13                              |                                   | U                                                                                   | Delay time [# clock cycles] between start trigger and internal start signal release.                                                                  |
|                                   | 0x14                              | 31:0                              | CLK_GATING_DELAY (Default:0x00000000)                                               | CLK_GATING_DELAY (Default:0x00000000)                                                                                                                 |
|                                   | 0x14                              |                                   | U Delay time [#                                                                     | clock cycles] between clock gating trigger and clock gating start.                                                                                    |
|                                   | 0x1D                              | 23:0                              | SPI_SWITCH_VEL                                                                      | SPI_SWITCH_VEL                                                                                                                                        |
|                                   | 0x1D                              |                                   | U Absolute velocity value [pps] at which automatic                                  | cover datagrams are sent                                                                                                                              |
|                                   | 0x1D                              | 31:0                              | 2 nd assignment: Also used as DAC_ADDR_A/B if SPI-DAC mode is enabled (see 15.24. ) | 2 nd assignment: Also used as DAC_ADDR_A/B if SPI-DAC mode is enabled (see 15.24. )                                                                   |
|                                   | 0x1E                              |                                   | HOME_SAFETY_MARGIN (Default: 0x0000)                                                | HOME_SAFETY_MARGIN (Default: 0x0000)                                                                                                                  |
|                                   | 0x1E                              | 15:0                              | U                                                                                   | HOME_REF polarity can be invalid within X_HOME ± HOME_SAFETY_MARGIN, which is not flagged as error.                                                   |
|                                   | 0x1F                              |                                   | CHOPSYNC_DIV (Default: 0x0280) (ChopSync for TMC23x/24x is enabled)                 | CHOPSYNC_DIV (Default: 0x0280) (ChopSync for TMC23x/24x is enabled)                                                                                   |
|                                   | 0x1F                              | 11:0                              | U                                                                                   | Chopper clock divider that defines the chopper frequency f OSC : f OSC = f CLK / CHOPSYNC_DIV with 96 ≤ CHOPSYNC_DIV ≤ 818                            |
|                                   |                                   | 15:0                              | 2 nd assignment: Also used as PWM_FREQ if Voltage PWM is enabled (see 15.14. )      | 2 nd assignment: Also used as PWM_FREQ if Voltage PWM is enabled (see 15.14. )                                                                        |
|                                   |                                   | 31:0                              | FS_VEL(Default:0x000000) (dcStep operation is disabled)                             | FS_VEL(Default:0x000000) (dcStep operation is disabled)                                                                                               |
|                                   | 0x60                              | 31:0                              | U                                                                                   | Minimum fullstep velocity [pps]. In case &#124; VACTUAL &#124; > FS_VEL fullstep operation is active, if enabled.                                     |
|                                   |                                   | 31:0                              | 2 nd assignment: Also used as DC_VEL if dcStep is enabled (see section 15.21. )     | 2 nd assignment: Also used as DC_VEL if dcStep is enabled (see section 15.21. )                                                                       |
|                                   | 0x64                              | 31:0                              | Reserved. Set to 0x00000000.                                                        | Reserved. Set to 0x00000000.                                                                                                                          |
| W                                 | 0x67                              | 23:0                              | VSTALL_LIMIT (Default:0x00000000)                                                   | VSTALL_LIMIT (Default:0x00000000)                                                                                                                     |
|                                   | 0x7B                              | 31:0                              | U                                                                                   | Stop on stall velocity limit [pps]: Only above this limit an active stall leads to a stop on stall, if enabled.                                       |
|                                   |                                   |                                   | TZEROWAIT (Default:0x00000000)                                                      | TZEROWAIT (Default:0x00000000)                                                                                                                        |
|                                   |                                   |                                   | U                                                                                   | Standstill phase after reaching VACTUAL = 0.                                                                                                          |
|                                   |                                   |                                   | 2 nd assignment: Also used as CURRENTA/B_SPI for read out (see section 15.23.       | 2 nd assignment: Also used as CURRENTA/B_SPI for read out (see section 15.23.                                                                         |
| W                                 | 0x7C                              | 31:0                              | CIRCULAR_DEC (Default:0x00000000)                                                   | CIRCULAR_DEC (Default:0x00000000)                                                                                                                     |
| W                                 | 0x7C                              | 31:0                              | U                                                                                   | Decimal places for circular motion if one revolution is not exactly mapped to an even number of µSteps per revolution. 1 digit and 31 decimal places. |
| R                                 |                                   | 8:0                               | 2nd assignment: Also used as SCALE_PARAM for read out (see section 15.8. )          | 2nd assignment: Also used as SCALE_PARAM for read out (see section 15.8. )                                                                            |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## PWM Configuration Registers

Table 68: PWM Configuration Registers.

<!-- image -->

| PWM Configuration Registers   | PWM Configuration Registers   | PWM Configuration Registers   | PWM Configuration Registers                                                         | PWM Configuration Registers                                                         |
|-------------------------------|-------------------------------|-------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| R/W                           | Addr                          | Bit                           | Val                                                                                 | Description                                                                         |
| RW                            | 0x17                          | 23:0                          | PWM_VMAX (Default:0x00000000) (Voltage PWM is enabled)                              | PWM_VMAX (Default:0x00000000) (Voltage PWM is enabled)                              |
| RW                            | 0x17                          | 23:0                          | U                                                                                   | PWM velocity value at which maximal scale parameter value 1.0 is reached.           |
| RW                            | 0x17                          | 23:0                          | 2 nd assignment: Also used as VDRV_SCALE_LIMIT if Voltage PWM is disabled (15.8. )  | 2 nd assignment: Also used as VDRV_SCALE_LIMIT if Voltage PWM is disabled (15.8. )  |
| RW                            | 0x1F                          | 15:0                          | PWM_FREQ (Default: 0x0280) (Voltage PWM is enabled)                                 | PWM_FREQ (Default: 0x0280) (Voltage PWM is enabled)                                 |
| RW                            | 0x1F                          | 15:0                          | U                                                                                   | Number of clock cycles for one PWM period.                                          |
| RW                            | 0x1F                          | 11:0                          | 2 nd assignment: Also used as CHOPSYNC_DIV if Voltage PWM is disabled (see 15.13. ) | 2 nd assignment: Also used as CHOPSYNC_DIV if Voltage PWM is disabled (see 15.13. ) |
| W                             | 0x79                          | 9:0                           | MSOFFSET (Default:0x000) (TMC23x/24x only)                                          | MSOFFSET (Default:0x000) (TMC23x/24x only)                                          |
| W                             | 0x79                          | 9:0                           | U                                                                                   | Microstep offset for PWM mode.                                                      |
| W                             | 0x79                          | 9:0                           | 2 nd assignment: Also used as MSCNT for read out (see section 15.23. )              | 2 nd assignment: Also used as MSCNT for read out (see section 15.23. )              |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Ramp Generator Registers

<!-- image -->

| Ramp Generator Registers    | Ramp Generator Registers    | Ramp Generator Registers    | Ramp Generator Registers      | Ramp Generator Registers                                                                                                                                       |
|-----------------------------|-----------------------------|-----------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                         | Addr                        | Bit                         | Val Description               | Val Description                                                                                                                                                |
| RW                          |                             | RAMPMODE                    | (Default:0x0)                 | (Default:0x0)                                                                                                                                                  |
| RW                          |                             | 2                           | Operation Mode:               | Operation Mode:                                                                                                                                                |
| RW                          |                             | 2                           | 1                             | Positioning mode : XTARGET is superior target of velocity ramp.                                                                                                |
| RW                          |                             | 2                           | 0                             | Velocitiy mode : VMAX is superior target of velocity ramp.                                                                                                     |
|                             | 0x20                        |                             | Motion Profile:               | Motion Profile:                                                                                                                                                |
|                             | 0x20                        |                             | 0                             | No ramp: VACTUAL follows only VMAX (rectangle velocity shape).                                                                                                 |
|                             | 0x20                        | 1:0                         | 1                             | Trapezoidal ramp (incl. sixPoint ramp): Consideration of acceleration and deceleration values for generating VACTUAL without adapting the acceleration values. |
|                             | 0x20                        |                             | 2                             | S-shaped ramp: Consideration of all ramp values (incl. bow values) for generating VACTUAL .                                                                    |
| RW                          | 0x21                        | 31:0                        | XACTUAL (Default: 0x00000000) | XACTUAL (Default: 0x00000000)                                                                                                                                  |
| RW                          | 0x21                        | 31:0                        | S                             | Actual internal motor position [pulses]: -2 31 ≤ XACTUAL ≤ 2 31 - 1                                                                                            |
| R                           | 0x22                        | 31:0                        | VACTUAL (Default: 0x00000000) | VACTUAL (Default: 0x00000000)                                                                                                                                  |
| R                           | 0x22                        | 31:0                        | S                             | Actual ramp generator velocity [pulses per second]: 1 pps ≤ &#124; VACTUAL &#124; ≤ CLK_FREQ · ½pulses (f CLK = 16 MHz  8 Mpps)                               |
| R                           | 0x23                        | 31:0                        | AACTUAL (Default: 0x00000000) | AACTUAL (Default: 0x00000000)                                                                                                                                  |
| R                           | 0x23                        | 31:0                        | S                             | Actual acceleration/deceleration value [pulses per sec 2 ]: -2 31 pps² ≤ AACTUAL ≤ 2 31 - 1 1 pps² ≤ &#124; AACTUAL &#124;                                     |
| RW                          | 0x24                        | 31:0                        | VMAX (Default: 0x00000000)    | VMAX (Default: 0x00000000)                                                                                                                                     |
|                             |                             |                             | S                             | Maximum ramp generator velocity in positioning mode or                                                                                                         |
|                             |                             |                             |                               | Target ramp generator velocity in velocity mode and no ramp motion profile .                                                                                   |
|                             |                             |                             |                               | Value representation: 23 digits and 8 decimal places Consider maximum values, represented in section 6.7.5, page 46                                            |
| RW                          | 0x25                        | 30:0                        | VSTART (Default: 0x00000000)  | VSTART (Default: 0x00000000)                                                                                                                                   |
| RW                          | 0x25                        | 30:0                        | U                             | Absolute start velocity in positioning mode and velocity mode In case VSTART is used: no first bow phase B 1 for S-shaped ramps                                |
| RW                          | 0x25                        | 30:0                        | U                             | VSTART in positioning mode: In case VACTUAL = 0 and XTARGET ≠ XACTUAL : no acceleration phase for VACTUAL = 0  VSTART.                                        |
| RW                          | 0x25                        | 30:0                        | U                             | VSTART in velocity mode: In case VACTUAL = 0 and VACTUAL ≠ VMAX : no acceleration phase for VACTUAL = 0  VSTART .                                             |
| RW                          | 0x25                        | 30:0                        | U                             | Value representation: 23 digits and 8 decimal places. Consider maximum values, represented in section 6.7.5, page 46                                           |
|   Continued on next page. |   Continued on next page. |   Continued on next page. |   Continued on next page.   |   Continued on next page.                                                                                                                                    |

<!-- image -->

<!-- image -->

<!-- image -->

| Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers                                                                                                                                                                                                                                                                                                                                                                                                      | Ramp Generator Registers   |
|----------------------------|----------------------------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| R/W                        | Addr                       | Bit                        | Val Description                                                                                                                                                                                                                                                                                                                                                                                                               |                            |
| RW                         | 0x26                       | 30:0                       | VSTOP (Default:0x00000000) Absolute stop velocity in positioning mode and velocity mode. In case VSTOP is used: no last bow phase B 4 for S-shaped ramps. In case VSTOP is very small and positioning mode is used, it is possible that the ramp is finished with a constant VACTUAL = VSTOP until XTARGET is reached . VSTOP in positioning mode: In case VACTUAL ≤ VSTOP and XTARGET = XACTUAL : VACTUAL is immediately set |                            |
| RW                         | 0x27                       | 30:0                       |                                                                                                                                                                                                                                                                                                                                                                                                                               |                            |
| RW                         | 0x27                       | 30:0                       | Absolute break velocity in positioning mode and in velocity mode, This only applies for trapezoidal ramp motion profiles. In case VBREAK = 0: pure linear ramps are generated with AMAX / DMAX only. In case &#124; VACTUAL &#124; < VBREAK : &#124; AACTUAL &#124; = ASTART or DFINAL In case &#124; VACTUAL &#124; ≥ VBREAK : &#124; AACTUAL &#124; = AMAX or DMAX                                                          |                            |
| RW                         | 0x27                       | 30:0                       | AMAX (Default: 0x000000) S-shaped ramp motion profile: Maximum acceleration value.                                                                                                                                                                                                                                                                                                                                            |                            |
| RW                         |                            |                            | Trapezoidal ramp motion profile: Acceleration value in case &#124; VACTUAL &#124; ≥ VBREAK or in case VBREAK = 0. Value representation: Frequency mode : [pulses per sec 2 ] 22 digits and 2 decimal places: 250 mpps 2 ≤ AMAX ≤ 4 Mpps 2 Direct mode: [∆v per clk cycle] a[∆v per clk_cycle]= AMAX / 2 37 AMAX [pps 2 ] = AMAX / 2 37 • f CLK 2                                                                              |                            |
| RW                         |                            |                            | Consider maximum values, represented in section 6.7.5, page                                                                                                                                                                                                                                                                                                                                                                   |                            |
| RW                         |                            |                            | 46 (Default: 0x000000) S-shaped ramp motion profile: Maximum deceleration value. Trapezoidal ramp motion profile: Deceleration value if &#124; VACTUAL &#124; ≥ VBREAK or if VBREAK = 0. Value representation: Frequency mode : [pulses per sec 2 ] 22 digits and 2 decimal places: 250 mpps 2 ≤ DMAX ≤ 4 Mpps 2 Direct mode: [∆v per clk cycle] d[∆v per clk_cycle]= DMAX / 2 37                                             |                            |
| RW                         | 0x29                       | 23:0                       |                                                                                                                                                                                                                                                                                                                                                                                                                               |                            |
| RW                         | 0x29                       | 23:0                       |                                                                                                                                                                                                                                                                                                                                                                                                                               |                            |
| RW                         | 0x29                       | 23:0                       | DMAX                                                                                                                                                                                                                                                                                                                                                                                                                          |                            |
| RW                         | 0x29                       | 23:0                       | DMAX [pps 2 ] = DMAX / 2 37 • f CLK 2 Consider maximum values, represented in section 6.7.5, page 46                                                                                                                                                                                                                                                                                                                          |                            |
| RW                         | 0x29                       | 23:0                       |                                                                                                                                                                                                                                                                                                                                                                                                                               |                            |
| RW                         |                            |                            |                                                                                                                                                                                                                                                                                                                                                                                                                               |                            |

<!-- image -->

<!-- image -->

| R/W                         | Addr                        | Bit                         | Val Description                                                                                                                                                                                                                                                                                       |                             |
|-----------------------------|-----------------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|
| RW                          | 0x2A                        | 23:0                        | S-shaped ramp motion profile: start acceleration value.                                                                                                                                                                                                                                               |                             |
| RW                          | 0x2A                        | 23:0                        | Trapezoidal ramp motion profile: Acceleration value in case &#124; VACTUAL &#124; < VBREAK .                                                                                                                                                                                                          |                             |
| RW                          | 0x2A                        | 23:0                        | Acceleration value after switching from external to internal step control.                                                                                                                                                                                                                            |                             |
| RW                          | 0x2A                        | 23:0                        | Value representation: Frequency mode : [pulses per sec 2 ] 22 digits and 2 decimal places: 250 mpps 2 ≤ ASTART ≤ 4 Mpps 2 Direct mode: [∆v per clk cycle] a[∆v per clk_cycle]= ASTART / 2 37 ASTART [pps 2 ] = ASTART / 2 37 • f CLK 2 Consider maximum values, represented in section 6.7.5, page 46 |                             |
| RW                          | 0x2A                        | 31                          | Sign of AACTUAL after switching from external to internal step control.                                                                                                                                                                                                                               |                             |
|                             | 0x2B                        | 23:0                        |                                                                                                                                                                                                                                                                                                       |                             |
|                             | 0x2B                        | 23:0                        | S-shaped ramp motion profile: Stop deceleration value, which is not used during positioning mode.                                                                                                                                                                                                     |                             |
|                             | 0x2B                        | 23:0                        | Trapezoidal ramp motion profile: Deceleration value in case &#124; VACTUAL &#124; < VBREAK .                                                                                                                                                                                                          |                             |
|                             | 0x2B                        | 23:0                        | Value representation: Frequency mode : [pulses per sec 2 ] 22 digits and 2 decimal places: 250 mpps 2 ≤ DFINAL ≤ 4 Mpps 2 Direct mode: [∆v per clk cycle] d[∆v per clk_cycle]= DFINAL / 2 37 DFINAL [pps 2 ] = DFINAL / 2 37 • f CLK 2                                                                |                             |
|                             | 0x2B                        | 23:0                        | Consider maximum values, represented in section 6.7.5, page 46 DSTOP (Default: 0x000000)                                                                                                                                                                                                              |                             |
|                             | 0x2C                        | 23                          |                                                                                                                                                                                                                                                                                                       |                             |
|                             | 0x2C                        | 23                          | Deceleration value for an automatic linear stop ramp to VACTUAL = 0. DSTOP is used with activated external stop switches (STOPL or STOPR) if soft_stop_enable is set to 1; or with activated virtual stop switches and virt_stop_mode is set to 2.                                                    |                             |
|                             | 0x2C                        | 23                          | Value representation: Frequency mode : [pulses per sec 2 ] 22 digits and 2 decimal places: 250 mpps 2 ≤ DSTOP ≤ 4 Mpps 2 Direct mode: [∆v per clk cycle] d[∆v per clk_cycle]= DSTOP / 2 37 DSTOP [pps 2 ] = DSTOP / 2 37 • f CLK 2                                                                    |                             |
|   Continued on next page! |   Continued on next page! |   Continued on next page! |   Continued on next page!                                                                                                                                                                                                                                                                           |   Continued on next page! |

<!-- image -->

<!-- image -->

<!-- image -->

| Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers                                                                                                                                                                                                                                                                      |
|----------------------------|----------------------------|----------------------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                        | Addr                       | Bit                        | Val                        | Description                                                                                                                                                                                                                                                                                   |
| RW                         | 0x2D                       | 23:0                       | BOW1 (Default: 0x000000)   | BOW1 (Default: 0x000000)                                                                                                                                                                                                                                                                      |
| RW                         | 0x2D                       | 23:0                       | U                          | Bow value 1 (first bow B 1 of the acceleration ramp).                                                                                                                                                                                                                                         |
| RW                         | 0x2D                       | 23:0                       | U                          | Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW1 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle] bow[av per clk_cycle]= BOW1 / 2 53 BOW1 [pps 3 ] = BOW1 / 2 53 • f CLK 3 Consider maximum values, represented in section 6.7.5, page 46 |
|                            | 0x2E                       | 23:0                       | BOW2 (Default: 0x000000)   | BOW2 (Default: 0x000000)                                                                                                                                                                                                                                                                      |
|                            | 0x2E                       | 23:0                       | U                          | Bow value 2 (second bow B2 of the acceleration ramp).                                                                                                                                                                                                                                         |
|                            | 0x2E                       | 23:0                       | U                          | Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW2 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle] bow[av per clk_cycle]= BOW2 / 2 53 BOW2 [pps 3 ] = BOW2 / 2 53 • f CLK 3 Consider maximum values, represented in section 6.7.5, page 46 |
|                            | 0x2F                       | 23:0                       | BOW3 (Default: 0x000000)   | BOW3 (Default: 0x000000)                                                                                                                                                                                                                                                                      |
|                            | 0x2F                       | 23:0                       | U                          | Bow value 3 (first bow B3 of the deceleration ramp). Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW3 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle]                                                                                    |
|                            | 0x30                       | 23:0                       | U                          | Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW4 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle] bow[av per clk_cycle]= BOW4 / 2 53 BOW4 [pps 3 ] = BOW4 / 2 53 • f CLK 3 Consider maximum values, represented in section 6.7.5, page 46 |

Table 69: Ramp Generator Registers

<!-- image -->

<!-- image -->

## External Clock Frequency Register

Table 70: External Clock Frequency Register

| External Clock Frequency Register   | External Clock Frequency Register   | External Clock Frequency Register   | External Clock Frequency Register   | External Clock Frequency Register                                       |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------------------------------------------|
| R/W                                 | Addr                                | Bit                                 | Val                                 | Description                                                             |
| RW                                  | 0x31                                | 24:0                                | CLK_FREQ (Default: 0x0F42400)       | CLK_FREQ (Default: 0x0F42400)                                           |
| RW                                  | 0x31                                | 24:0                                | U                                   | External clock frequency value f CLK [Hz] with 4.2 MHz ≤ f CLK ≤ 32 MHz |

## Target and Compare Registers

Table 71: Target and Compare Registers

| Target and Compare Registers   | Target and Compare Registers   | Target and Compare Registers   | Target and Compare Registers                                  | Target and Compare Registers                                                               |
|--------------------------------|--------------------------------|--------------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| R/W                            | Addr                           | Bit                            | Val                                                           | Description                                                                                |
| RW                             | 0x32                           | 31:0                           | POS_COMP (Default: 0x00000000)                                | POS_COMP (Default: 0x00000000)                                                             |
| RW                             | 0x32                           | 31:0                           | S                                                             | Compare position.                                                                          |
| RW                             | 0x33                           | 31:0                           | VIRT_STOP_LEFT (Default: 0x00000000)                          | VIRT_STOP_LEFT (Default: 0x00000000)                                                       |
| RW                             | 0x33                           | 31:0                           | S                                                             | Virtual left stop position.                                                                |
| RW                             | 0x34                           | 31:0                           | VIRT_STOP_RIGHT (Default: 0x00000000)                         | VIRT_STOP_RIGHT (Default: 0x00000000)                                                      |
| RW                             | 0x34                           | 31:0                           | S                                                             | Virtual right stop position.                                                               |
| RW                             | 0x35                           | 31:0                           | X_HOME (Default: 0x00000000)                                  | X_HOME (Default: 0x00000000)                                                               |
| RW                             | 0x35                           | 31:0                           | S                                                             | Actual home position.                                                                      |
| R                              |                                | 31:0                           | X_LATCH (Default: 0x00000000) (if circular_cnt_as_xlatch = 0) | X_LATCH (Default: 0x00000000) (if circular_cnt_as_xlatch = 0)                              |
| R                              |                                | 31:0                           | S                                                             | Storage position for certain triggers.                                                     |
| R                              |                                | 31:0                           | REV_CNT (Default: 0x00000000) (if circular_cnt_as_xlatch      | REV_CNT (Default: 0x00000000) (if circular_cnt_as_xlatch                                   |
| R                              | 0x36                           | 31:0                           | S                                                             | Number of revolutions during circular motion.                                              |
| W                              |                                | 30:0                           | X_RANGE (Default: 0x00000000)                                 | X_RANGE (Default: 0x00000000)                                                              |
| W                              |                                | 30:0                           | U                                                             | Limitation for X_ACTUAL during circular motion: - X_RANGE ≤ X_ACTUAL ≤ X_RANGE - 1         |
| RW                             | 0x37                           | 31:0                           | X_TARGET (Default: 0x00000000)                                | X_TARGET (Default: 0x00000000)                                                             |
| RW                             | 0x37                           | 31:0                           | U                                                             | Target motor position in positioning mode. Set all other motion profile parameters before! |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Pipeline Registers

Table 72: Pipeline Registers

| Pipeline Register   | Pipeline Register   | Pipeline Register   | Pipeline Register   | Pipeline Register                                      |
|---------------------|---------------------|---------------------|---------------------|--------------------------------------------------------|
| R/W                 | Addr                | Bit                 | Val                 | Description                                            |
| RW                  | 0x38                | 31:0                | S                   | X_PIPE0 (Default: 0x00000000): 1 st pipeline register. |
| RW                  | 0x39                | 31:0                | S                   | X_PIPE1 (Default: 0x00000000): 2 nd pipeline register. |
| RW                  | 0x3A                | 31:0                | S                   | X_PIPE2 (Default: 0x00000000): 3 rd pipeline register. |
| RW                  | 0x3B                | 31:0                | S                   | X_PIPE3 (Default: 0x00000000): 4 th pipeline register. |
| RW                  | 0x3C                | 31:0                | S                   | X_PIPE4 (Default: 0x00000000): 5 th pipeline register. |
| RW                  | 0x3D                | 31:0                | S                   | X_PIPE5 (Default: 0x00000000): 6 th pipeline register. |
| RW                  | 0x3E                | 31:0                | S                   | X_PIPE6 (Default: 0x00000000): 7 th pipeline register. |
| RW                  | 0x3F                | 31:0                | S                   | X_PIPE7 (Default: 0x00000000): 8 th pipeline register. |

## Shadow Register

Table 73: Shadow Registers

| Shadow Register   | Shadow Register   | Shadow Register   | Shadow Register   | Shadow Register                                         |
|-------------------|-------------------|-------------------|-------------------|---------------------------------------------------------|
| R/W               | Addr              | Bit               | Val               | Description                                             |
| RW                | 0x40              | 31:0              | S                 | SH_REG0 (Default: 0x00000000) : 1 st shadow register.   |
| RW                | 0x41              | 31:0              | U                 | SH_REG1 (Default: 0x00000000) : 2 nd shadow register.   |
| RW                | 0x42              | 31:0              | U                 | SH_REG2 (Default: 0x00000000) : 3 rd shadow register.   |
| RW                | 0x43              | 31:0              | U                 | SH_REG3 (Default: 0x00000000) : 4 th shadow register.   |
| RW                | 0x44              | 31:0              | U                 | SH_REG4 (Default: 0x00000000) : 5 th shadow register.   |
| RW                | 0x45              | 31:0              | U                 | SH_REG5 (Default: 0x00000000) : 6 th shadow register.   |
| RW                | 0x46              | 31:0              | U                 | SH_REG6 (Default: 0x00000000) : 7 th shadow register.   |
| RW                | 0x47              | 31:0              | S/U               | SH_REG7 (Default: 0x00000000) : 8 th shadow register.   |
| RW                | 0x48              | 31:0              | U                 | SH_REG8 (Default: 0x00000000) : 9 th shadow register.   |
| RW                | 0x49              | 31:0              | U                 | SH_REG9 (Default: 0x00000000) : 10 th shadow register.  |
| RW                | 0x4A              | 31:0              | U                 | SH_REG10 (Default: 0x00000000) : 11 th shadow register. |
| RW                | 0x4B              | 31:0              | U                 | SH_REG11 (Default: 0x00000000) : 12 th shadow register. |
| RW                | 0x4C              | 31:0              | U                 | SH_REG12 (Default: 0x00000000) : 13 th shadow register. |
| RW                | 0x4D              | 31:0              | U                 | SH_REG13 (Default: 0x00000000) : 14 th shadow register. |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Reset and Clock Gating Register

Table 74: Reset and Clock Gating Register

| Reset and Clock Gating Register   | Reset and Clock Gating Register   | Reset and Clock Gating Register   | Reset and Clock Gating Register   | Reset and Clock Gating Register   |
|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| R/W                               | Addr                              | Bit                               | Val                               | Description                       |
| RW                                |                                   | 2:0                               | CLK_GATING_REG (Default: 0x0)     | CLK_GATING_REG (Default: 0x0)     |
| RW                                |                                   | 2:0                               | 0                                 | Clock gating is not activated.    |
| RW                                |                                   | 2:0                               | 7                                 | Clock gating is activated.        |
| RW                                |                                   | 31:8                              | RESET_REG (Default: 0x000000)     | RESET_REG (Default: 0x000000)     |
| RW                                |                                   | 31:8                              | 0                                 | No reset is activated.            |
| RW                                |                                   | 31:8                              | 0x525354                          | Internal reset is activated.      |

## dcStep Registers

Table 75: dcStep Registers

| Micellaneous Registers   | Micellaneous Registers   | Micellaneous Registers   | Micellaneous Registers                                                      | Micellaneous Registers                                                                                                                                                                                                    |
|--------------------------|--------------------------|--------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                      | Addr                     | Bit                      | Val                                                                         | Description                                                                                                                                                                                                               |
|                          | 0x60                     | 23:0                     | DC_VEL (Default:0x000000) (dcStep only)                                     | DC_VEL (Default:0x000000) (dcStep only)                                                                                                                                                                                   |
|                          | 0x60                     | 23:0                     | U                                                                           | Minimum dcStep velocity [pps]. In case&#124; VACTUAL &#124; > DC_VEL dcStep is active, if enabled.                                                                                                                        |
|                          | 0x60                     | 23:0                     | 2 nd assignment: Also used as FS_VEL if dcStep is not enabled (see 15.13. ) | 2 nd assignment: Also used as FS_VEL if dcStep is not enabled (see 15.13. )                                                                                                                                               |
|                          | 0x61                     | 7:0                      | DC_TIME (Default:0x00) (TMC26x only and dcStep only)                        | DC_TIME (Default:0x00) (TMC26x only and dcStep only)                                                                                                                                                                      |
|                          | 0x61                     | 7:0                      | U                                                                           | Upper PWM on-time limit for commutation. i Set slightly above effective blank time TBL of the driver.                                                                                                                     |
|                          |                          |                          | DC_SG (Default:0x0000) (TMC26x and dcStep only)                             | DC_SG (Default:0x0000) (TMC26x and dcStep only)                                                                                                                                                                           |
|                          |                          | 15:8                     | U                                                                           | Maximum PWM on-time [# clock cycles ∙ 16] for step loss detection. If a loss is detected (step length of first regular step after blank time of the dcStep input signal is below DC_SG ), a stall event will be released. |
|                          |                          | 31:16                    | DC_BLKTIME (Default:0x0000) (TMC26x and dcStep only)                        | DC_BLKTIME (Default:0x0000) (TMC26x and dcStep only)                                                                                                                                                                      |
|                          |                          | 31:16                    | U                                                                           | Blank time [# clock cycles] after fullstep release when no signal comparison should happen.                                                                                                                               |
|                          | 0x62                     | 31:0                     | DC_LSPTM (Default:0x00FFFFFF) (dcStep only)                                 | DC_LSPTM (Default:0x00FFFFFF) (dcStep only)                                                                                                                                                                               |
|                          | 0x62                     | 31:0                     | U                                                                           | dcStep low speed timer [# clock cycles]                                                                                                                                                                                   |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Transfer Registers

Table 76: Transfer Registers

| Transfer Registers   | Transfer Registers   | Transfer Registers   | Transfer Registers                                          | Transfer Registers                                                                                                                                                                                                                        |
|----------------------|----------------------|----------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                  | Addr                 | Bit                  | Val                                                         | Description                                                                                                                                                                                                                               |
| W                    | 0x6C                 | 31:0                 | COVER_LOW (Default:0x00000000)                              | COVER_LOW (Default:0x00000000)                                                                                                                                                                                                            |
| W                    | 0x6C                 | 31:0                 | -                                                           | Lower configuration bits of SPI orders that can be sent from TMC4331A to the motor drivers via SPI output.                                                                                                                                |
| W                    | 0x6C                 | 31:0                 | -                                                           | Automatic cover data transfer ( automatic_cover = 1): Value in COVER_LOW are sent in case &#124; VACTUAL &#124; crosses SPI_SWITCH_VEL downwards. Set COVER_DATA_LENGTH ≤ 32. In case COVER_DATA_LENGTH = 0, no TMC2130 must be selected. |
| R                    | 0x6C                 | 31:0                 | POLLING_STATUS (Default:0x00000000) (TMC26x / TMC2130 only) | POLLING_STATUS (Default:0x00000000) (TMC26x / TMC2130 only)                                                                                                                                                                               |
| R                    | 0x6C                 | 31:0                 | -                                                           | DRV_STATUS response of TMC26x / TMC2130                                                                                                                                                                                                   |
| W                    | 0x6D                 | 31:0                 | COVER_HIGH (Default:0x00000000)                             | COVER_HIGH (Default:0x00000000)                                                                                                                                                                                                           |
| W                    | 0x6D                 | 31:0                 | -                                                           | Upper configuration bits of SPI orders that can be sent from TMC4331A to the motor drivers via SPI output.                                                                                                                                |
| W                    | 0x6D                 | 31:0                 | -                                                           | Automatic cover data transfer ( automatic_cover = 1): Value in COVER_LOW are sent if &#124; VACTUAL &#124; crosses SPI_SWITCH_VEL upwards. Set COVER_DATA_LENGTH ≤ 32. In case COVER_DATA_LENGTH = 0, no TMC2130 must be selected.        |
| R                    | 0x6D                 | 31:0                 | POLLING_REG (Default:0x00000000) (TMC2130 only)             | POLLING_REG (Default:0x00000000) (TMC2130 only)                                                                                                                                                                                           |
| R                    | 0x6D                 | 19:0                 | -                                                           | LOST_STEPS response of TMC2130                                                                                                                                                                                                            |
| R                    | 0x6D                 | 27:20                | -                                                           | PWM_SCALE response of TMC2130                                                                                                                                                                                                             |
| R                    | 0x6D                 | 31:28                | -                                                           | GSTAT response of TMC2130                                                                                                                                                                                                                 |
| R                    | 0x6E                 | 31:0                 | COVER_DRV_LOW (Default:0x00000000)                          | COVER_DRV_LOW (Default:0x00000000)                                                                                                                                                                                                        |
| R                    | 0x6E                 | 31:0                 | -                                                           | Lower configuration bits of SPI response received from the motor driver connected to the SPI output.                                                                                                                                      |
| R                    | 0x6F                 | 31:0                 | COVER_DRV_HIGH (Default:0x00000000)                         | COVER_DRV_HIGH (Default:0x00000000)                                                                                                                                                                                                       |
| R                    | 0x6F                 | 31:0                 | -                                                           | Upper configuration bits of SPI response received from the motor driver connected to the SPI output.                                                                                                                                      |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## SinLUT Registers

Table 77: SinLUT Registers

| SinLUT Registers   | SinLUT Registers   | SinLUT Registers   | SinLUT Registers                                                              | SinLUT Registers                                                                                                                 | SinLUT Registers                                                                                                                 |
|--------------------|--------------------|--------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| R/W                | Addr               | Bit                | Val Description                                                               | Val Description                                                                                                                  | Val Description                                                                                                                  |
| W                  | 0x70               | 31:0               | MSLUT[0]                                                                      | MSLUT[0]                                                                                                                         | (Default:0xAAAAB554)                                                                                                             |
| W                  | 0x71               | 31:0               | MSLUT[1]                                                                      | MSLUT[1]                                                                                                                         | (Default:0x4A9554AA)                                                                                                             |
| W                  | 0x72               | 31:0               | MSLUT[2]                                                                      | MSLUT[2]                                                                                                                         | (Default:0x24492929)                                                                                                             |
| W                  | 0x73               | 31:0               | MSLUT[3]                                                                      | MSLUT[3]                                                                                                                         | (Default:0x10104222)                                                                                                             |
| W                  | 0x74               | 31:0               | MSLUT[4]                                                                      | MSLUT[4]                                                                                                                         | (Default:0xFBFFFFFF)                                                                                                             |
| W                  | 0x75               | 31:0               | MSLUT[5]                                                                      | MSLUT[5]                                                                                                                         | (Default:0xB5BB777D)                                                                                                             |
| W                  | 0x76               | 31:0               | MSLUT[6]                                                                      | MSLUT[6]                                                                                                                         | (Default:0x49295556)                                                                                                             |
| W                  | 0x 77              | 31:0               | MSLUT[7]                                                                      | MSLUT[7]                                                                                                                         | (Default:0x00404222)                                                                                                             |
| W                  |                    |                    | -                                                                             | Each bit defines the difference between consecutive values in the microstep look-up table MSLUT (in combination with MSLUTSEL ). | Each bit defines the difference between consecutive values in the microstep look-up table MSLUT (in combination with MSLUTSEL ). |
| W                  | 0x78               | 31:0               | MSLUTSEL                                                                      | MSLUTSEL                                                                                                                         | (Default:0xFFFF8056)                                                                                                             |
| R                  | 0x79               | 31:0               | -                                                                             | Definition of the four segments within each quarter MSLUT wave.                                                                  | Definition of the four segments within each quarter MSLUT wave.                                                                  |
| W                  |                    | 9:0                | MSCNT (Default:0x000)                                                         | MSCNT (Default:0x000)                                                                                                            | MSCNT (Default:0x000)                                                                                                            |
| W                  |                    | 9:0                | U                                                                             | Actual µStep position of the sine value.                                                                                         | Actual µStep position of the sine value.                                                                                         |
| R                  |                    | 8:0                | CURRENTA (Default:0x000)                                                      | CURRENTA (Default:0x000)                                                                                                         | CURRENTA (Default:0x000)                                                                                                         |
| R                  | 0x7A               | 8:0                | S                                                                             | Actual current value of coilA (sine values).                                                                                     | Actual current value of coilA (sine values).                                                                                     |
| R                  |                    | 24:16              | CURRENTB (Default:0x0F7)                                                      | CURRENTB (Default:0x0F7)                                                                                                         | CURRENTB (Default:0x0F7)                                                                                                         |
| R                  |                    | 24:16              | S                                                                             | Actual current value of coilB (sine90_120 values).                                                                               | Actual current value of coilB (sine90_120 values).                                                                               |
| R                  | 0x7B               | 24:16              | CURRENTA_SPI (Default:0x000)                                                  | CURRENTA_SPI (Default:0x000)                                                                                                     | CURRENTA_SPI (Default:0x000)                                                                                                     |
| R                  |                    | 24:16              | S                                                                             | Actual scaled current value of coilA (sine values) that are sent to the driver.                                                  | Actual scaled current value of coilA (sine values) that are sent to the driver.                                                  |
| R                  |                    |                    | CURRENTB_SPI (Default:0x0F7)                                                  | CURRENTB_SPI (Default:0x0F7)                                                                                                     | CURRENTB_SPI (Default:0x0F7)                                                                                                     |
| R                  |                    |                    | S                                                                             | Actual scaled current value of coilB (sine90_120 values); sent to motor driver.                                                  | Actual scaled current value of coilB (sine90_120 values); sent to motor driver.                                                  |
| W                  |                    | 31:0               | 2 nd assignment: Also used as TZERO_WAIT for write access (see section 15.13. | 2 nd assignment: Also used as TZERO_WAIT for write access (see section 15.13.                                                    | 2 nd assignment: Also used as TZERO_WAIT for write access (see section 15.13.                                                    |
| W                  | 0x7E               | 7:0                | START_SIN (Default:0x00)                                                      | START_SIN (Default:0x00)                                                                                                         | START_SIN (Default:0x00)                                                                                                         |
| W                  |                    | 7:0                | U                                                                             | Start value for sine waveform.                                                                                                   | Start value for sine waveform.                                                                                                   |
| W                  |                    | 23:16              | START_SIN90_120 (Default:0xF7)                                                | START_SIN90_120 (Default:0xF7)                                                                                                   | START_SIN90_120 (Default:0xF7)                                                                                                   |
| W                  |                    | 23:16              | U                                                                             | Start value for cosine waveform.                                                                                                 | Start value for cosine waveform.                                                                                                 |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## SPI-DAC Configuration Registers

Table 78: SPI-DAC Configuration Registers.

| SPI-DAC Configuration Registers   | SPI-DAC Configuration Registers   | SPI-DAC Configuration Registers   | SPI-DAC Configuration Registers                                                    | SPI-DAC Configuration Registers                                                                 |
|-----------------------------------|-----------------------------------|-----------------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| R/W                               | Addr                              | Bit                               | Val                                                                                | Description                                                                                     |
| RW                                | 0x1D                              | 15:0                              | DAC_ADDR_A (Default:0x0000)                                                        | DAC_ADDR_A (Default:0x0000)                                                                     |
| RW                                | 0x1D                              | 15:0                              | U                                                                                  | Fixed command/address, which is sent via SPI output before sending CURRENTA_SPI values.         |
| RW                                | 0x1D                              | 31:16                             | DAC_ADDR_B (Default: 0x0000)                                                       | DAC_ADDR_B (Default: 0x0000)                                                                    |
| RW                                | 0x1D                              | 31:16                             | U                                                                                  | Fixed command/address, which is sent via SPI output before sending current CURRENTB_SPI values. |
| RW                                | 0x1D                              | 23:0                              | 2 nd assignment: Also used as SPI_SWITCH_VEL if SPI-DAC mode is disabled (15.13. ) | 2 nd assignment: Also used as SPI_SWITCH_VEL if SPI-DAC mode is disabled (15.13. )              |
| W                                 | 0x7E                              | 31:24                             | DAC_OFFSET (Default:0x00)                                                          | DAC_OFFSET (Default:0x00)                                                                       |
| W                                 | 0x7E                              | 31:24                             | U                                                                                  | Offset (absolute sine and cosine DAC values).                                                   |
| W                                 | 0x7E                              | 31:24                             | S                                                                                  | Offset (mapped DAC values).                                                                     |
| W                                 | 0x7E                              | 23:0                              | 2 nd assignment: Also used as START_SIN/90_120 for read out (see section 15.23. )  | 2 nd assignment: Also used as START_SIN/90_120 for read out (see section 15.23. )               |

## TMC Version Register

Table 79: Version Register

| Version Register   | Version Register   | Version Register   | Version Register            | Version Register            |
|--------------------|--------------------|--------------------|-----------------------------|-----------------------------|
| R/W                | Addr               | Bit                | Val                         | Description                 |
| R                  | 0x7F               | 15:0               | Version No (Default:0x0002) | Version No (Default:0x0002) |
| R                  | 0x7F               | 15:0               | U                           | TMC4331 version number.     |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 16. Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more than one maximum rating at a time for extended periods shall be avoided by application design.

| Maximum Ratings: 3.3V supply                    | Maximum Ratings: 3.3V supply   | Maximum Ratings: 3.3V supply   | Maximum Ratings: 3.3V supply   | Maximum Ratings: 3.3V supply   |
|-------------------------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter (VCC = 3.3V nominal  TEST_MODE = 0V) | Symbol                         | Min                            | Max                            | Unit                           |
| Supply voltage                                  | V CC                           | 3.0                            | 3.6                            | V                              |
| Input voltage IO                                | V IN                           | -0.3                           | 3.6                            | V                              |

Table 80: Maximum Ratings: 3.3V supply

Table 81: Maximum Ratings: 5.0V supply

| Maximum Ratings: 5.0V supply                  | Maximum Ratings: 5.0V supply   | Maximum Ratings: 5.0V supply   | Maximum Ratings: 5.0V supply   | Maximum Ratings: 5.0V supply   |
|-----------------------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter (VCC = 5V nominal  TEST_MODE = 0V) | Symbol                         | Min                            | Max                            | Unit                           |
| Supply voltage                                | V CC                           | 4.8                            | 5.2                            | V                              |
| Input voltage IO                              | V IN                           | -0.3                           | 5.2                            | V                              |

Table 82: Maximum Ratings: Temperature

| Maximum Ratings: Temperature   | Maximum Ratings: Temperature   | Maximum Ratings: Temperature   | Maximum Ratings: Temperature   | Maximum Ratings: Temperature   |
|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter                      | Symbol                         | Min                            | Max                            | Unit                           |
| Temperature                    | T                              | -40                            | 125                            | °C                             |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 17. Electrical Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range  unless  otherwise  specified.  Typical  values  represent  the  average  value  of  all  parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

Table 83: DC Characteristics

| DC Characteristics         | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   |
|----------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                  | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Extended temperature range | T COM                |                      | -40°C                |                      | 125                  | °C                   |
| Nominal core voltage       | V DD                 |                      |                      | 1.8                  |                      | V                    |
| Nominal IO voltage         | V DD                 |                      |                      | 3.3 / 5.0            |                      | V                    |
| Nominal input voltage      | V IN                 |                      | 0.0                  |                      | 3.3 / 5.0            | V                    |
| Input voltage low level    | V INL                | V DD = 3.3V / 5V     | -0.3                 |                      | 0.8 / 1.2            | V                    |
| Input voltage high level   | V INH                | V DD = 3.3V / 5V     | 2.3 / 3.5            |                      | 3.6 / 5.2            | V                    |
| Input with pull-down       |                      | V IN = V DD          | 5                    | 30                   | 110                  | µA                   |
| Input with pull-up         |                      | V IN = 0V            | -110                 | -30                  | -5                   | µA                   |
| Input low current          |                      | V IN = 0V            | -10                  |                      | 10                   | µA                   |
| Input high current         |                      | V IN = V DD          | -10                  |                      | 10                   | µA                   |
| Output voltage low level   | V OUTL               | V DD = 3.3V / 5V     |                      |                      | 0.4                  | V                    |
| Output voltage high level  | V OUTH               | V DD = 3.3V / 5V     | 2.64 / 4.0           |                      |                      | V                    |
| Output driver strength     | I OUT_DRV            | V DD = 3.3V / 5V     |                      | 4.0                  |                      | mA                   |

## Power Dissipation

Table 84: Power Dissipation

| Power Dissipation         | Power Dissipation   | Power Dissipation                                        | Power Dissipation   | Power Dissipation   | Power Dissipation   | Power Dissipation   |
|---------------------------|---------------------|----------------------------------------------------------|---------------------|---------------------|---------------------|---------------------|
| Parameter                 | Symbol              | Conditions                                               | Min                 | Typ                 | Max                 | Unit                |
| Static power dissipation  | PD STAT             | All inputs at VDD or GND V DD = 3.3V / 5V                |                     |                     | 1.1 / 1.7           | mW                  |
| Dynamic power dissipation | PD DYN              | All inputs at VDD or GND f CLK variable V DD = 3.3V / 5V |                     |                     | 2.7 / 4.0           | mW / MHz            |
| Total power dissipation   | PD                  | f CLK = 16 MHz V DD = 3.3V / 5V                          |                     |                     | 44.3 / 65.7         | mW                  |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## General IO Timing Parameters

Table 85: General IO Timing Parameters

| General IO Timing Parameters                           | General IO Timing Parameters   | General IO Timing Parameters   | General IO Timing Parameters   | General IO Timing Parameters   | General IO Timing Parameters   | General IO Timing Parameters   |
|--------------------------------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter                                              | Symbol                         | Conditions                     | Min                            | Typ                            | Max                            | Unit                           |
| Operation frequency                                    | f CLK                          | f CLK = 1 / t CLK              | 4.2 1)                         | 16                             | 30                             | MHz                            |
| Clock Period                                           | t CLK                          | Rising edge to rising edge     | 33.5                           | 62.5                           |                                | ns                             |
| Clock time low                                         |                                |                                | 16.5                           |                                |                                | ns                             |
| Clock time high                                        |                                |                                | 16.5                           |                                |                                | ns                             |
| CLK input signal rise time                             | t RISE_IN                      | 20 %to 80%                     |                                |                                | 20                             | ns                             |
| CLK input signal fall time                             | t FALL_IN                      | 80 %to 20%                     |                                |                                | 20                             | ns                             |
| Output signal rise time                                | t RISE_OUT                     | 20 %to 80% load 32 pF          |                                | 3.5                            |                                | ns                             |
| Output signal fall time                                | t FALL_OUT                     | 80 %to 20% load 32 pF          |                                | 3.5                            |                                | ns                             |
| Setup time for SPI input signals in synchronous design | t SU                           | Relative to rising clk edge    | 5                              |                                |                                | ns                             |
| Hold time                                              | t HD                           | Relative to rising clk edge    | 5                              |                                |                                | ns                             |

1)  The lower limit for fCLK refers to the limits of the internal unit conversion to physical units. The chip will also operate at lower frequencies.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Layout Examples

## Internal Cirucit Diagram for Layout Example

Figure 62: Internal Circuit Diagram for Layout Example

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Top Layer: Assembly Side 17.3.2.

Inner Layer (GND) 17.3.3.

Figure 63: Top Layer: Assembly Side

<!-- image -->

Figure 64: Inner Layer (GND)

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Inner Layer (Supply VS)

Figure 65: Inner Layer (Supply VS)

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Package Dimensions 17.4.

<!-- image -->

Table 86: Package Dimensions

| Package Dimensions     | Package Dimensions   | Package Dimensions   | Package Dimensions   | Package Dimensions   |
|------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter              | Ref                  | Min                  | Nom                  | Max                  |
| Total thickness        | A                    | 0.8                  | 0.85                 | 0.9                  |
| Stand off              | A1                   | 0                    | 0.035                | 0.05                 |
| Mold thickness         | A2                   | -                    | 0.65                 | 0.67                 |
| Lead frame thickness   | A3                   | 0.203 REF            | 0.203 REF            | 0.203 REF            |
| Lead width             | b                    | 0.15                 | 0.2                  | 0.25                 |
| Body size X            | D                    | 4 BSC                | 4 BSC                | 4 BSC                |
| Body size Y            | E                    | 4 BSC                | 4 BSC                | 4 BSC                |
| Lead pitch             | e                    | 0.4 BSC              | 0.4 BSC              | 0.4 BSC              |
| Exposed die pad size X | J                    | 2.5                  | 2.6                  | 2.7                  |
| Exposed die pad size Y | K                    | 2.5                  | 2.6                  | 2.7                  |
| Lead length            | L                    | 0.35                 | 0.4                  | 0.45                 |
| Lead length            | L1                   | 0.332                | 0.382                | 0.432                |
| Package edge tolerance | aaa                  | 0.1                  | 0.1                  | 0.1                  |
| Mold flatness          | bbb                  | 0.1                  | 0.1                  | 0.1                  |
| Coplanarity            | ccc                  | 0.08                 | 0.08                 | 0.08                 |
| Lead offset            | ddd                  | 0.1                  | 0.1                  | 0.1                  |
| Exposed pad offset     | eee                  | 0.1                  | 0.1                  | 0.1                  |

Figure 66: Package Dimensional Drawings

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Package Material Information 17.5.

Please refer to the associated document 'TMC43xx Package Material Information, V1.00' for information about available package dimensions and the various tray and reel package options. This document informs you about outside dimensions per tray and/reel and the number of ICs per tray/reel. It also provides information about available packaging units and their weight, as well as box dimension and weight details for outer packaging.

The document is available for download on the TMC4331A product page at www.trinamic.com.

- i Should  you  require  a  custom-made  component  packaging  solution  or  a  different  outer  packaging solution, or have questions pertaining to the component packaging choice, please contact our customer service.

## NOTE:

-  Our trays and reels are JEDEC-compliant.

## Marking Details provided on Single Chip 17.6.

## The marking on each single chip shows:

- ❶ Trinamic emblem.
- ❷ Product code.
- ❸ Date code.
- ❹ L ocation of the copyright holder, which is TRINAMIC in Hamburg, Germany.
- ❺ Lot number.

Figure 67: Marking Details on Chip 1

<!-- image -->

1  The image provided is not an accurate rendition of the original product but only serves as illustration.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## APPENDICES

## 18. Supplemental Directives

## ESD-DEVICE INSTRUCTIONS

<!-- image -->

## This product is an ESD-sensitive CMOS device. It is sensitive to electrostatic discharge.

-  Provide effective grounding to protect personnel and machines.
-  Ensure work is performed in a nonstatic environment.
-  Use personal ESD control footwear and ESD wrist straps, if necessary.

## Failure to do so can result in defects, damages and decreased reliability.

The producer of the product TMC4331A is TRINAMIC GmbH &amp; Co. KG in Hamburg, Germany; hereafter referred to as TRINAMIC. TRINAMIC is the supplier; and in this function provides the product and the production documentation to its customers.

TRINAMIC owns the content of this user manual  in  its  entirety,  including  but  not limited to pictures, logos, trademarks, and resources.

©  Copyright  2015  TRINAMIC®.  All  rights  reserved.  Electronically  published  by TRINAMIC®, Germany. All trademarks used are property of their respective owners.

Redistributions of source or derived format (for example, Portable Document Format or  Hypertext  Markup  Language)  must  retain  the  above  copyright  notice,  and  the complete Datasheet User Manual documentation of this product including associated Application Notes; and a reference to other available product-related documentation.

Trademark designations and symbols used in this documentation indicate that a product or feature  is  owned and registered as trademark and,'or  patent either by TRINAMIC or by ather  manufacturers,  whose  products  are  used  or  referred  to  in combination With TRINAMlC's products and TRINAMlC's product documentation.  This documentation is a noncommercial publication that seeks to provide concise scientific and technical  user  information  to  the  target  user.  Thus,  we  only  enter  trademark designations and symbols in the Short Spec of the documentation that introduces the product at a quick glance. We also enter the trademark designation 'symbol when the product or feature name occurs for the first time in the document. All trademarks used are property of their respective owners.

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products  for  use  in  life  support  systems,  without  the  specific  written  consent  of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Producer Information

## Copyright

## Trademark Designations and Symbols

## Target User

## Disclaimer: Life Support Systems

## Disclaimer: Intended Use

## Product Documentation Details

## Collateral Documents &amp; Tools

<!-- image -->

of patents or other rights of third parties which may result from its use. Specifications are subject to change without notice.

The data specified in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability,  fitness  for  a  particular  purpose  or  of  any  other  nature  are  made hereunder  with  respect  to  information/specification  or  the  products  to  which information refers and no guarantee with respect to compliance to the intended use is given.

In  particular,  this  also  applies  to  the  stated  possible  applications  or  areas  of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in significant personal injury or death (Safety-Critical Applications) without TRINAMIC's specific written consent.

TRINAMIC products are not designed nor intended for use in military or aerospace applications or environments  or  in automotive  applications unless specifically designated for such use by TRINAMIC. TRINAMIC conveys no patent, copyright, mask work right or other trade mark right to this product. TRINAMIC assumes no liability for any patent and/or other trade mark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

This document Datasheet User Manual contains the User Information for  the Target User .

The Short Spec forms  the  preface  of  the  document  and  is  aimed  at  providing  a general  product  overview.  The  Main  Manual  contains  detailed  product  information pertaining to functions, and configuration settings. It contains all other pages of this document.

This product documentation is related and/or associated with additional tool kits, firmware and other items, as provided on the product page at: www.trinamic.com .

<!-- image -->

## 19. Tables Index

| Table 1: TMC4331A Order Codes                                                                                                                                                                                               | .............................................................................................................2      |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Table 2: Pin Names and Descriptions......................................................................................................                                                                                   | 10                                                                                                                  |
| Table 3: SPI Input Control Interface Pins................................................................................................                                                                                   | 13                                                                                                                  |
| Table 4: Read and Write Access Examples..............................................................................................                                                                                       | 14                                                                                                                  |
| Table 5: SPI Interface Timing                                                                                                                                                                                               | ................................................................................................................ 16 |
| Table 6: Input Filtering Groups (Assigned Pins).......................................................................................                                                                                      | 17                                                                                                                  |
| Table 7: Input Filtering (Assigned Register)                                                                                                                                                                                | ............................................................................................ 17                     |
| Table 8: Sample Rate Configuration .......................................................................................................                                                                                  | 18                                                                                                                  |
| Table 9: Configuration of Digital Filter Length                                                                                                                                                                             | ......................................................................................... 18                        |
| Table 10: Pins Names: Status Events......................................................................................................                                                                                   | 20                                                                                                                  |
| Table 11:Register Names: Status Flags and Events                                                                                                                                                                            | ................................................................................. 20                                |
| Table 12: Pin Names: Ramp Generator...................................................................................................                                                                                      | 24                                                                                                                  |
| Table 13: Register Names: Ramp Generator                                                                                                                                                                                    | ........................................................................................... 24                      |
| Table 14: Overview of General and Basic Ramp Configuration Options .....................................................                                                                                                    | 27                                                                                                                  |
| Table 15: Description of TMC4331A Motion Profiles.................................................................................                                                                                          | 29                                                                                                                  |
| Table 16: Trapezoidal Ramps: AACTUAL Assignments during Motion........................................................                                                                                                      | 32                                                                                                                  |
| Table 17: Parameter Assignments for S-shaped Ramps                                                                                                                                                                          | ........................................................................... 35                                      |
| Table 18: Minimum and Maximum Values if Real World Units are selected................................................                                                                                                       | 46                                                                                                                  |
| Table 19: Minimum and Maximum Values for Steep Slopes for f CLK                                                                                                                                                             | =16MHz.............................................. 46                                                             |
| Table 20: Pins used for External Step Control                                                                                                                                                                               | ......................................................................................... 47                        |
| Table 21: Registers used for External Step Control                                                                                                                                                                          | .................................................................................. 47                               |
| Table 22: Pins used for Reference Switches                                                                                                                                                                                  | ............................................................................................ 50                     |
| Table 23: Dedicated Registers for Reference Switches............................................................................. Table 24: Reference Configuration and Corresponding Transition of particular Reference    | 50 Switch................ 52                                                                                        |
| Table 25: Overview of different home_event Settings..............................................................................                                                                                           | 55                                                                                                                  |
| Table 26: TARGET_REACHED Output Pin Configuration                                                                                                                                                                           | ........................................................................... 58                                      |
| Table 27: Comparison Selection Grid to generate POS_COMP_REACHED_Flag ..........................................                                                                                                            | 58                                                                                                                  |
| Table 28: Circular motion (X_RANGE = 300)...........................................................................................                                                                                        | 62                                                                                                                  |
| Table 29: Dedicated Ramp Timing Pins...................................................................................................                                                                                     | 63                                                                                                                  |
| Table 30: Dedicated Ramp Timing Registers ...........................................................................................                                                                                       | 63                                                                                                                  |
| Table 31: Start Trigger Configuration                                                                                                                                                                                       | ..................................................................................................... 64            |
| Table 32: Start Enable Switch Configuration ...........................................................................................                                                                                     | 64                                                                                                                  |
| Table 33: Parameter Settings Timing Example 1 .....................................................................................                                                                                         | 66                                                                                                                  |
| Table 34: Parameter Settings Timing Example 2 ..................................................................................... 3 ..................................................................................... | 67                                                                                                                  |
| Table 35: Parameter Settings Timing Example                                                                                                                                                                                 | 68                                                                                                                  |
| Table 36: Pipeline Activation Options......................................................................................................                                                                                 | 76                                                                                                                  |
| Table 37: Pipeline Mapping for different Pipeline Table 38: Pin Names for SPI Motor Drive................................................................................................                                   | Configurations............................................................... 77 81                                 |
| Table 39: Dedicated SPI Output Registers                                                                                                                                                                                    | .............................................................................................. 82                   |
| Table 40: Wave Inclination Characteristics of Internal                                                                                                                                                                      | MSLUT.................................................................. 84                                          |
| Table 41: Overview of the Microstep Behavior Example...........................................................................                                                                                             | 88                                                                                                                  |
| Table 42: SPI Output Communication Pins..............................................................................................                                                                                       | 89                                                                                                                  |
| Table 43: TMC Stepper Motor Driver Options ..........................................................................................                                                                                       | 93                                                                                                                  |
| Table 44: Mapping of TMC23x/24x Status Flags ......................................................................................                                                                                         | 97                                                                                                                  |
| Table 45: Mapping of TMC26x Status Flags...........................................................................................                                                                                         | 103                                                                                                                 |
| Table 46: Mapping of TMC2130 Status Flags.........................................................................................                                                                                          | 108                                                                                                                 |
| Table 47: Non-TMC Data Transfer Options............................................................................................                                                                                         | 109                                                                                                                 |
| Table 48: Available SPI-DAC Options....................................................................................................                                                                                     | 112                                                                                                                 |
| Table 49: Dedicated PWM Output Pins                                                                                                                                                                                         | ................................................................................................. 121               |
| Table 50: Dedicated PWM Output Registers..........................................................................................                                                                                          | 121                                                                                                                 |
| Table 51: Dedicated dcStep Pins ..........................................................................................................                                                                                  | 126                                                                                                                 |
| Table 52: Dedicated dcStep Registers...................................................................................................                                                                                     | 126                                                                                                                 |
| Table 53: Dedicated Reset and Clock Pins.............................................................................................                                                                                       | 132                                                                                                                 |
| Table 54: Dedicated Reset and Clock Gating Registers                                                                                                                                                                        | 132                                                                                                                 |
| .......................................................................... Table 55: General Configuration 0x00 ..................................................................................................          | 137 140                                                                                                             |
| Table 56: Reference Switch Configuration 0x01 ....................................................................................                                                                                          |                                                                                                                     |
| Table 57: Start Switch Configuration START_CONF 0x02 .......................................................................                                                                                                | 142                                                                                                                 |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

| Table 58: Input Filter Configuration Register INPUT_FILT_CONF 0x03 ...................................................                        | 143                                                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Table 59: SPI Output Configuration Register SPI_OUT_CONF 0x04 ........................................................                        | 146                                                              |
| Table 60: Current Scale Configuration (0x05)........................................................................................          | 147                                                              |
| Table 61: Current Scale Values (0x06)..................................................................................................       | 148                                                              |
| Table 62: Various Scaling Configuration Registers (0x15…0x1B)                                                                                 | ............................................................ 148 |
| Table 63: Motor Driver Settings (0x0A).................................................................................................       | 149                                                              |
| Table 64: Event Selection Regsiters 0x0B…0x0D ...................................................................................             | 150                                                              |
| Table 65: Status Event Register EVENTS (0x0E)....................................................................................             | 151                                                              |
| Table 66: Status Flag Register STATUS (0x0F)......................................................................................            | 152                                                              |
| Table 67: Various Configuration Registers.............................................................................................        | 153                                                              |
| Table 68: PWM Configuration Registers. ...............................................................................................        | 154                                                              |
| Table 69: Ramp Generator Registers ....................................................................................................       | 158                                                              |
| Table 70: External Clock Frequency Register.........................................................................................          | 159                                                              |
| Table 71: Target and Compare Registers..............................................................................................          | 159                                                              |
| Table 72: Pipeline Registers................................................................................................................. | 160                                                              |
| Table 73: Shadow Registers.................................................................................................................   | 160                                                              |
| Table 74: Reset and Clock Gating Register............................................................................................         | 161                                                              |
| Table 75: dcStep Registers .................................................................................................................. | 161                                                              |
| Table 76: Transfer Registers................................................................................................................  | 162                                                              |
| Table 77: SinLUT Registers..................................................................................................................  | 163                                                              |
| Table 78: SPI-DAC Configuration Registers. ..........................................................................................         | 164                                                              |
| Table 79: Version Register................................................................................................................... | 164                                                              |
| Table 80: Maximum Ratings: 3.3V supply .............................................................................................          | 165                                                              |
| Table 81: Maximum Ratings: 5.0V supply .............................................................................................          | 165                                                              |
| Table 82: Maximum Ratings: Temperature ...........................................................................................            | 165                                                              |
| Table 83: DC Characteristics ................................................................................................................ | 166                                                              |
| Table 84: Power Dissipation.................................................................................................................  | 166                                                              |
| Table 85: General IO Timing Parameters ..............................................................................................         | 167                                                              |
| Table 86: Package Dimensions.............................................................................................................     | 171                                                              |
| Table 85: Document Revision History ...................................................................................................       | 179                                                              |

<!-- image -->

<!-- image -->

## 20. Figures Index

| Figure 1: Sample Image TMC4331A                                                                                                                                                                                                                                         | .........................................................................................................1                  |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Figure 2: Block Diagram Figure 3: S-shaped Velocity                                                                                                                                                                                                                     | ..........................................................................................................................1 |
| Profile ...........................................................................................................2 Figure 4: Open-Loop Hardware Set-up with TMC26x supporting External Stop Switches                                                                  | ..............................2                                                                                             |
| Figure 5: Hardware Set-up for Open-loop Operation with TMC2130............................................................2                                                                                                                                             |                                                                                                                             |
| Figure 6: Package Outline: Pin Assignments Top View...............................................................................8                                                                                                                                     |                                                                                                                             |
| Figure 7: System Overview                                                                                                                                                                                                                                               | .................................................................................................................... 10     |
| Figure 8: TMC4331A Connection: VCC=3.3V...........................................................................................                                                                                                                                      | 11                                                                                                                          |
| Figure 9: TMC4331A with TMC26x Stepper Driver in SPI Mode or S/D Mode .............................................                                                                                                                                                     | 11                                                                                                                          |
| Figure 10: TMC4331A with TMC248 Stepper Driver in SPI Mode...............................................................                                                                                                                                               | 12                                                                                                                          |
| Figure 11: TMC4331A with TMC2130 Stepper Driver in SPI Mode or S/D Mode                                                                                                                                                                                                 | ......................................... 12                                                                                |
| Figure 12: TMC4331A SPI Datagram Structure........................................................................................                                                                                                                                      | 13                                                                                                                          |
| Figure 13: Difference between Read and Write Access                                                                                                                                                                                                                     | ............................................................................ 14                                             |
| Figure 14: SPI Timing Datagram                                                                                                                                                                                                                                          | ............................................................................................................ 15             |
| Figure 15: Reference Input Pins: SR_REF = 1, FILT_L_REF = 1 ...............................................................                                                                                                                                             | 19                                                                                                                          |
| Figure 16: START Input Pin: SR_S = 2, FILT_L_S = 0 .............................................................................                                                                                                                                        | 19                                                                                                                          |
| Figure 17: S/D Input Pins: SR_SD_IN = 0, FILT_L_SD_IN = 7.................................................................                                                                                                                                              | 19                                                                                                                          |
| Figure 18: No Ramp Motion Profile.........................................................................................................                                                                                                                              | 30                                                                                                                          |
| Figure 19: Trapezoidal Ramp without Break Point                                                                                                                                                                                                                         | ................................................................................... 31                                      |
| Figure 20: Trapezoidal Ramp with Break Point                                                                                                                                                                                                                            | ........................................................................................ 31                                 |
| Figure 21: S-shaped Ramp without initial and final Acceleration/Deceleration Values.................................                                                                                                                                                    | 33                                                                                                                          |
| Figure 22: S-shaped Ramp with initial and final Acceleration/Deceleration Values......................................                                                                                                                                                  | 34                                                                                                                          |
| Figure 23: Trapezoidal Ramp with initial Velocity.....................................................................................                                                                                                                                  | 36                                                                                                                          |
| Figure 24: S-shaped Ramp with initial Start Velocity................................................................................                                                                                                                                    | 37                                                                                                                          |
| Figure 25: S-shaped Ramp with Stop Velocity .........................................................................................                                                                                                                                   | 39                                                                                                                          |
| Figure 27: S-shaped Ramps with combined VSTART and ASTART Parameters...........................................                                                                                                                                                         | 41                                                                                                                          |
| Figure 28: sixPoint Ramp: Trapezoidal Ramp with Start and Stop Velocity                                                                                                                                                                                                 | ................................................ 42                                                                         |
| Figure 29: Example for U-Turn Behavior of sixPoint Ramp.......................................................................                                                                                                                                          | 43                                                                                                                          |
| Figure 30: Example for U-Turn Behavior of S-shaped Ramp.....................................................................                                                                                                                                            | 44                                                                                                                          |
| Figure 31: Direct transition via VACTUAL=0 for S-shaped Ramps                                                                                                                                                                                                           | ............................................................. 44                                                            |
| Figure 32: HOME_REF Monitoring and HOME_ERROR_FLAG                                                                                                                                                                                                                      | .................................................................... 56                                                     |
| Figure 33: Ramp Timing Example                                                                                                                                                                                                                                          | 1........................................................................................................ 66                |
| Figure 34: Ramp Timing Example 2........................................................................................................                                                                                                                                | 67                                                                                                                          |
| Figure 35: Ramp Timing Example                                                                                                                                                                                                                                          | 3........................................................................................................ 68                |
| Figure 36: Single-level Shadow Register Option to replace complete Ramp Motion Profile..........................                                                                                                                                                        | 70                                                                                                                          |
| Figure 37: Double-stage Shadow Register Option 1, suitable for S-shaped Ramps....................................                                                                                                                                                       | 71                                                                                                                          |
| Figure 38: Double-stage Shadow Register Option 2, suitable for Trapezoidal Ramps.                                                                                                                                                                                       | ................................ 72                                                                                         |
| Figure 39: Double-Stage Shadow Register Option 3, suitable for Trapezoidal Ramps.................................                                                                                                                                                       | 73                                                                                                                          |
| Figure 40: SHADOW_MISS_CNT Parameter for several internal Start Signals                                                                                                                                                                                                 | ............................................ 74                                                                             |
| Figure 41: Target Pipeline with Configuration Options .............................................................................                                                                                                                                     | 75                                                                                                                          |
| Figure 42: Pipeline Example A................................................................................................................                                                                                                                           | 78                                                                                                                          |
| Figure 43: Pipeline Example B................................................................................................................                                                                                                                           | 78                                                                                                                          |
| Figure 44: Pipeline Example C................................................................................................................                                                                                                                           | 78                                                                                                                          |
| Figure 45: Pipeline Example D ............................................................................................................... E................................................................................................................         | 78                                                                                                                          |
| Figure 46: Pipeline Example                                                                                                                                                                                                                                             | 79                                                                                                                          |
| Figure 47: Pipeline Example F................................................................................................................                                                                                                                           | 79                                                                                                                          |
| Figure 48: Pipeline Example G ...............................................................................................................                                                                                                                           | 79                                                                                                                          |
| Figure 49: Pipeline Example H                                                                                                                                                                                                                                           | ............................................................................................................... 79          |
| Figure 50: LUT Programming Example....................................................................................................                                                                                                                                  | 83                                                                                                                          |
| Figure 51: MSLUT Curve with all possible Base Wave Inclinations (highest Inclination first) Timing.................................................................................................                                                                     | ....................... 87                                                                                                  |
| Figure 52: SPI Output Datagram                                                                                                                                                                                                                                          | 89                                                                                                                          |
| Figure 53: Cover Data Register Composition (CDL - COVER_DATA_LENGTH)                                                                                                                                                                                                    | ........................................... 91 119                                                                          |
| Figure 54: Scaling Example 1...............................................................................................................                                                                                                                             | 120                                                                                                                         |
| Figure 55: Scaling Example 2............................................................................................................... Figure 56: Calculation of PWM Duty Cycles (PWM_AMPL) ...................................................................... | 123                                                                                                                         |
| Figure 57: TMC4331A connected with TMC23x/24x operating in SPI Mode or PWM Mode........................                                                                                                                                                                 | 124                                                                                                                         |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

| Figure 58: dcStep extended Application Operation Area.........................................................................              |   127 |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Figure 59: Velocity Profile with Impact through Overload Situation.........................................................                 |   129 |
| Figure 60: Manual Clock Gating Activation and Wake-Up .......................................................................               |   133 |
| Figure 61: Automatic Clock Gating Activation and Wake-Up...................................................................                 |   134 |
| Figure 62: Internal Circuit Diagram for Layout Example.........................................................................             |   168 |
| Figure 63: Top Layer: Assembly Side....................................................................................................     |   169 |
| Figure 64: Inner Layer (GND) .............................................................................................................. |   169 |
| Figure 65: Inner Layer (Supply VS) ......................................................................................................   |   170 |
| Figure 66: Package Dimensional Drawings............................................................................................         |   171 |
| Figure 67: Marking Details on Chip 1 ...................................................................................................... |   172 |

<!-- image -->

<!-- image -->

## 21. Revision History

| Document Revision History   | Document Revision History   | Document Revision History   | Document Revision History                     |
|-----------------------------|-----------------------------|-----------------------------|-----------------------------------------------|
| Version                     | Date                        | Author                      | Description                                   |
| 1.00                        | 2016-NOV-09                 | HS                          | First complete version.                       |
| 1.01                        | 2016-NOV-25                 | HS                          | Slight new arranges in the register overview. |

Table 87: Document Revision History

<!-- image -->

<!-- image -->