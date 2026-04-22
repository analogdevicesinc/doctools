<!-- lastmod 2023-08-03 -->
## TMC4330A DATASHEET

TMC4330A Document Revision 1.00 · 2016-NOV-25 SHORT SPEC

The S-ramp and sixPoint™ ramp motion controller for stepper motors is optimized for high velocities, allowing on-the-fly changes. TMC4330A offers Step/Dir interfaces, as well as an encoder interface for closed-loop operation.

## Features

-  SPI Interfaces for µC with easy-to-use protocol.
-  Encoder interface for incremental or serial encoders.
-  Closed-loop operation for Step drivers.
-  Internal ramp generator generating S-shaped ramps or sixPoint™ ramps supporting on-the-fly changes.
-  Controlled PWM output.
-  Reference switch handling.
-  Hardware and virtual stop switches.

## Applications

-  Office automation

Figure 1: Sample Image TMC4330A Closed-Loop Drive

<!-- image -->

*Marking details are explained on page 159.

-  Textile, sewing machines
-  CCTV, security
-  Printers, scanners
-  ATM, cash recycler
-  POS
-  Factory automation
-  Lab automation

## Block Diagram: TMC4330A Interfaces &amp; Features

Figure 2: Block Diagram

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany  -  Terms  of  delivery  and  rights  to  technical  change reserved. Download newest version at: www.trinamic.com.

Read entire documentation; especially the Supplemental Directives in chapter 17 (page 160).

<!-- image -->

-  Pumps and valves
-  Heliostat controllers
-  CNC machines
-  Robotics

<!-- image -->

## Functional Scope of TMC4330A

TMC4330A is a miniaturized high-performance motion controller for stepper motor drivers, particularly designed for fast and jerk-limited motion profile applications with a wide range of  ramp  profiles.  The  S-shaped  or  sixPoint™  velocity  profile,  closed-loop  and  open-loop features  offer  many  configuration  options  to  suit  the  user's  specifications,  as  presented below:

S-Shaped Velocity Profile

## Closed-loop Operation Feature

Reference Switch Support

## Order Codes

Table 1: TMC4330A Order Codes

| Order code   | Description                                        | Size       |
|--------------|----------------------------------------------------|------------|
| TMC4330A-LA  | Motion controller with closed-loop features, QFN32 | 4 x 4 mm 2 |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

S-shaped ramp profiles  are  jerk-free.  Seven  ramp  segments  form  the  S-shaped ramp that can be optimally adapted to suit the user's requirements. High torque with  high  velocities  can  be  reached  by  calibrating  the  bows  of  the  ramp,  as explained in this user manual.

Figure 3: S-shaped Velocity Profile

<!-- image -->

- i More  information  on  ramp  configurations  and  other  velocity  profiles,  e.g. sixPoint™ ramps, are provided in chapter 6 (Page 24).

A typical hardware setup for closed-loop operation with a TMC220x/222x stepper motor driver is shown in the figure below.

Figure 4: Hardware Set-up for Closed-loop Operation with TMC220x/222x

<!-- image -->

A typical hardware setup for open-loop operation with enhanced modifications, by use of external stop switches with the  TMC2100 motor stepper driver is shown below. Home switches with different configurations are also supported.

<!-- image -->

Figure 5: Hardware Set-up for Open-loop Operation with TMC2100 supporting External Stop Switches

<!-- image -->

## TABLE OF CONTENTS

| TMC4330A DATASHEET.................................................................................................... 1            | TMC4330A DATASHEET.................................................................................................... 1            | TMC4330A DATASHEET.................................................................................................... 1   |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| SHORT SPEC.....................................................................................................................     | SHORT SPEC.....................................................................................................................     | 1                                                                                                                          |
| Features........................................................................................................................... | Features........................................................................................................................... | 1                                                                                                                          |
| Applications .....................................................................................................................  | Applications .....................................................................................................................  | 1                                                                                                                          |
| Block Diagram: TMC4330A Interfaces & Features ...........................................................                           | Block Diagram: TMC4330A Interfaces & Features ...........................................................                           | 1                                                                                                                          |
| Functional Scope of TMC4330A........................................................................................                | Functional Scope of TMC4330A........................................................................................                | 2                                                                                                                          |
| Order Codes .....................................................................................................................   | Order Codes .....................................................................................................................   | 2                                                                                                                          |
| TABLE OF CONTENTS .......................................................................................................           | TABLE OF CONTENTS .......................................................................................................           | 3                                                                                                                          |
| MAIN MANUAL.................................................................................................................        | MAIN MANUAL.................................................................................................................        | 8                                                                                                                          |
| 1. Pinning and Design-In Process Information..............................................................                          | 1. Pinning and Design-In Process Information..............................................................                          | 8                                                                                                                          |
|                                                                                                                                     | Pin Assignment: Top View....................................................................................................        | 8                                                                                                                          |
|                                                                                                                                     | Pin Description                                                                                                                     | .................................................................................................................... 9     |
|                                                                                                                                     | System                                                                                                                              | Overview............................................................................................................... 11 |
| 2.                                                                                                                                  | Application Circuits..................................................................................................              | 12                                                                                                                         |
|                                                                                                                                     | TMC4330A Standard Connection: VCC=3.3V                                                                                              | ....................................................................... 12                                                 |
|                                                                                                                                     | TMC4330A with TMC2100 Stepper Connection                                                                                            | and Encoder feedback................................... 12                                                                 |
|                                                                                                                                     | TMC4330A with TMC22xx Stepper                                                                                                       | Connection..................................................................... 12                                         |
| 3. SPI Interfacing ........................................................................................................         | 3. SPI Interfacing ........................................................................................................         | 13                                                                                                                         |
|                                                                                                                                     | SPI Datagram Structure                                                                                                              | ..................................................................................................... 13                   |
|                                                                                                                                     | SPI Timing Description.......................................................................................................       | 16                                                                                                                         |
| 4. Input Filtering..........................................................................................................        | 4. Input Filtering..........................................................................................................        | 17                                                                                                                         |
|                                                                                                                                     | Input Filtering Examples.....................................................................................................       | 19                                                                                                                         |
| 5. Status Flags and Events...........................................................................................               | 5. Status Flags and Events...........................................................................................               | 20                                                                                                                         |
|                                                                                                                                     | Status Event Description ....................................................................................................       | 21                                                                                                                         |
|                                                                                                                                     | SPI Status Bit                                                                                                                      | Transfer....................................................................................................... 22         |
|                                                                                                                                     | Generation of Interrupts.....................................................................................................       | 22                                                                                                                         |
|                                                                                                                                     | Connection of Multiple INTR Pins ........................................................................................           | 23                                                                                                                         |
| 6. Ramp Configurations for different Motion Profiles ..................................................                             | 6. Ramp Configurations for different Motion Profiles ..................................................                             | 24                                                                                                                         |
|                                                                                                                                     | Step/Dir Output Configuration                                                                                                       | ............................................................................................ 25                            |
|                                                                                                                                     | Step/Dir Output Configuration Steps                                                                                                 | ................................................................................... 25                                     |
|                                                                                                                                     | STPOUT: Changing Polarity                                                                                                           | ............................................................................................... 25                         |
|                                                                                                                                     | Configuration Details for Operation Modes and Motion Profiles .............................................                         | 26                                                                                                                         |
|                                                                                                                                     | Starting Point: Choose Operation                                                                                                    | Mode............................................................................... 27                                     |
|                                                                                                                                     | Stop during Motion                                                                                                                  | ............................................................................................................ 27            |
|                                                                                                                                     | Motion Profile Configuration ...............................................................................................        | 28                                                                                                                         |
|                                                                                                                                     | No Ramp Motion Profile......................................................................................................        | 29                                                                                                                         |
|                                                                                                                                     | Trapezoidal 4-Point Ramp without Break Point.....................................................................                   | 30                                                                                                                         |
|                                                                                                                                     | Trapezoidal Ramp with Break Point....................................................................................               | 30                                                                                                                         |
|                                                                                                                                     | Position Mode combined with Trapezoidal Ramps ................................................................                      | 31                                                                                                                         |
|                                                                                                                                     | Configuration of S-Shaped Ramps.......................................................................................              | 32                                                                                                                         |

<!-- image -->

<!-- image -->

|    |                                                                                                                                   | Configuration of S-shaped Ramp with ASTART and DFINAL.................................................. 33   |
|----|-----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
|    | S-shaped Mode and Positioning: Fast Motion.......................................................................                 | 34                                                                                                           |
|    | Start Velocity VSTART and Stop Velocity VSTOP ..................................................................                  | 35                                                                                                           |
|    | S-shaped Ramps with Start and Stop Velocity......................................................................                 | 39                                                                                                           |
|    | Combined Use of VSTART and ASTART for S-shaped Ramps ...............................................                              | 40                                                                                                           |
|    | sixPoint Ramps..................................................................................................................  | 41                                                                                                           |
|    | U-Turn Behavior ................................................................................................................  | 42                                                                                                           |
|    | Continuous Velocity Motion Profile for S-shaped Ramps ......................................................                      | 43                                                                                                           |
|    | Internal Ramp Generator Units ...........................................................................................         | 44                                                                                                           |
|    | Clock Frequency ................................................................................................................  | 44                                                                                                           |
|    | Velocity Value Units ...........................................................................................................  | 44                                                                                                           |
|    | Acceleration Value Units.....................................................................................................     | 44                                                                                                           |
|    | Bow Value Units ................................................................................................................  | 45                                                                                                           |
|    | Overview of Minimum and Maximum Values:.......................................................................                    | 45                                                                                                           |
| 7. | External Step Control and Electronic Gearing..........................................................                            | 46                                                                                                           |
|    | Description of Electronic Gearing ........................................................................................        | 47                                                                                                           |
|    | Indirect External Control ....................................................................................................    | 47                                                                                                           |
|    | Switching from External to Internal Control .........................................................................             | 48                                                                                                           |
| 8. | Reference Switches .................................................................................................              | 49                                                                                                           |
|    | Hardware Switch Support...................................................................................................        | 50                                                                                                           |
|    | Stop Slope Configuration for Hard or Linear Stop Slopes ......................................................                    | 50                                                                                                           |
|    | How Active Stops are indicated and reset to Free Motion .....................................................                     | 51                                                                                                           |
|    | How to latch Internal Position on Switch Events ..................................................................                | 51                                                                                                           |
|    | Virtual Stop Switches .........................................................................................................   | 52                                                                                                           |
|    | Enabling Virtual Stop Switches............................................................................................        | 52                                                                                                           |
|    | Virtual Stop Slope Configuration .........................................................................................        | 52                                                                                                           |
|    | How Active Virtual Stops are indicated and reset to Free Motion...........................................                        | 53                                                                                                           |
|    | Home Reference Configuration ...........................................................................................          | 54                                                                                                           |
|    | Home Event Selection ........................................................................................................     | 54                                                                                                           |
|    | HOME_REF Monitoring .......................................................................................................       | 55                                                                                                           |
|    | Homing with STOPL or STOPR............................................................................................            | 56                                                                                                           |
|    | Target Reached / Position Comparison................................................................................              | 57                                                                                                           |
|    | Connecting several Target-reached Pins..............................................................................              | 57                                                                                                           |
|    | Use of TARGET_REACHED Output                                                                                                      | ...................................................................................... 58                    |
|    | Position Comparison of Internal Values ...............................................................................            | 59                                                                                                           |
|    | Repetitive and Circular Motion ............................................................................................       | 60                                                                                                           |
|    | Repetitive Motion to XTARGET............................................................................................          | 60                                                                                                           |
|    | Activating Circular Motion...................................................................................................     | 60                                                                                                           |
|    | Uneven or Noninteger Microsteps per Revolution.................................................................                   | 61                                                                                                           |
|    | Release of the Revolution Counter ......................................................................................          | 62                                                                                                           |
|    | Blocking Zones .................................................................................................................. | 62                                                                                                           |
|    | Activating Blocking Zones during Circular Motion .................................................................                | 62                                                                                                           |
|    | Circular Motion with and without Blocking Zone...................................................................                 | 63                                                                                                           |
| 9. | Timing and Synchronization ..........................................................................                             | 64                                                                                                           |
|    | Basic Synchronization Settings............................................................................................        | 65                                                                                                           |
|    | Start Signal Trigger Selection .............................................................................................      | 65                                                                                                           |
|    | User-specified Impact Configuration of Timing Procedure.....................................................                      | 65                                                                                                           |
|    | Delay Definition between Trigger and internally generated Start Signal .................................                          | 66                                                                                                           |

<!-- image -->

<!-- image -->

|                                                                                                                     | Active START Pin Output Configuration ...............................................................................              | 66                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
|                                                                                                                     | Ramp Timing Examples......................................................................................................         | 67                                                                                                    |
|                                                                                                                     | Shadow Register Settings...................................................................................................        | 70                                                                                                    |
|                                                                                                                     | Shadow Register Configuration Options...............................................................................               | 71                                                                                                    |
|                                                                                                                     | Delayed Shadow Transfer...................................................................................................         | 75                                                                                                    |
|                                                                                                                     | Pipelining Internal Parameters............................................................................................         | 76                                                                                                    |
|                                                                                                                     | Configuration and Activation of Target Pipeline....................................................................                | 76                                                                                                    |
|                                                                                                                     | Using the Pipeline for different internal Registers.................................................................               | 77                                                                                                    |
|                                                                                                                     | Pipeline Mapping Overview.................................................................................................         | 78                                                                                                    |
|                                                                                                                     | Cyclic Pipelining................................................................................................................. | 79                                                                                                    |
|                                                                                                                     | Pipeline Examples..............................................................................................................    | 79                                                                                                    |
|                                                                                                                     | Masterless Synchronization of Several Motion Controllers via START Pin................................                             | 81                                                                                                    |
| 10. Controlled PWMOutput........................................................................................... | 10. Controlled PWMOutput...........................................................................................                | 82                                                                                                    |
|                                                                                                                     | How to change Motion Direction                                                                                                     | ......................................................................................... 82          |
|                                                                                                                     | Change of Microstep Resolution..........................................................................................           | 82                                                                                                    |
|                                                                                                                     | PWM Output Generation and Scaling Possibilities .................................................................                  | 83                                                                                                    |
|                                                                                                                     | PWM Scale Example...........................................................................................................       | 84                                                                                                    |
|                                                                                                                     | Microstep Lookup Tables....................................................................................................        | 85                                                                                                    |
|                                                                                                                     | Actual Microstep Values Output ..........................................................................................          | 86                                                                                                    |
|                                                                                                                     | How to Program the Internal MSLUT...................................................................................               | 86                                                                                                    |
|                                                                                                                     | Setup of MSLUT Segments .................................................................................................          | 87                                                                                                    |
|                                                                                                                     | Microstep Waves Start Values.............................................................................................          | 88                                                                                                    |
|                                                                                                                     | Default MSLUT ..................................................................................................................   | 88                                                                                                    |
|                                                                                                                     | Explanatory Notes for Base Wave Inclinations .....................................................................                 | 89                                                                                                    |
| 11. Decoder Unit: Connecting ABN, SSI, or SPI Encoders correctly...............................                     | 11. Decoder Unit: Connecting ABN, SSI, or SPI Encoders correctly...............................                                    | 91                                                                                                    |
|                                                                                                                     | Selecting the correct Encoder .............................................................................................        | 92                                                                                                    |
|                                                                                                                     | Disabling digital differential Encoder Signals ........................................................................            | 93                                                                                                    |
|                                                                                                                     | Inverting of Encoder Direction ............................................................................................        | 93                                                                                                    |
|                                                                                                                     | Encoder Misalignment Compensation ..................................................................................               | 94                                                                                                    |
|                                                                                                                     | Incremental ABN Encoder Settings......................................................................................             | 95                                                                                                    |
|                                                                                                                     | Automatic Constant Configuration of Incremental ABN Encoder ............................................                           | 95                                                                                                    |
|                                                                                                                     | Manual Constant Configuration of Incremental ABN Encoder ................................................                          | 95                                                                                                    |
|                                                                                                                     | Incremental Encoders: Index Signal: N resp. Z ....................................................................                 | 96                                                                                                    |
|                                                                                                                     | Setup of Active Polarity for Index Channel..........................................................................               | 96                                                                                                    |
|                                                                                                                     | Configuration of N Event ....................................................................................................      | 96                                                                                                    |
|                                                                                                                     | External Position Counter ENC_POS Clearing .......................................................................                 | 97                                                                                                    |
|                                                                                                                     | Latching External Position                                                                                                         | .................................................................................................. 98 |
|                                                                                                                     | Latching Internal Position...................................................................................................      | 98                                                                                                    |
|                                                                                                                     | Absolute Encoder Settings..................................................................................................        | 99                                                                                                    |
|                                                                                                                     | Singleturn or Multiturn Data ...............................................................................................       | 99                                                                                                    |
|                                                                                                                     | Automatic Constant Configuration of Absolute Encoder .......................................................100                    |                                                                                                       |
|                                                                                                                     | Manual Constant Configuration of incremental ABN Encoder................................................100                        |                                                                                                       |
|                                                                                                                     | Absolute Encoder Data Setup ............................................................................................101        |                                                                                                       |
|                                                                                                                     | Emitting Encoder Data Variation ........................................................................................102        |                                                                                                       |
|                                                                                                                     | SSI Clock Generation ........................................................................................................103   |                                                                                                       |
|                                                                                                                     | Enabling Multicycle SSI request ........................................................................................104        |                                                                                                       |
|                                                                                                                     | Gray-encoded SSI Data Streams.......................................................................................104            |                                                                                                       |
|                                                                                                                     | SPI Encoder Data Evaluation .............................................................................................105       |                                                                                                       |

<!-- image -->

<!-- image -->

| TMC4330A Datasheet &#124; Document Revision 1.00 • 2016-NOV-25                                                               | TMC4330A Datasheet &#124; Document Revision 1.00 • 2016-NOV-25                                                                      | 6/166                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| SPI Encoder Mode Selection ..............................................................................................106 | SPI Encoder Mode Selection ..............................................................................................106        |                                                                                                                  |
| SPI Encoder Configuration via TMC4330A...........................................................................107         | SPI Encoder Configuration via TMC4330A...........................................................................107                |                                                                                                                  |
| 12. Possible Regulation Options with Encoder Feedback ............................................                           | 12. Possible Regulation Options with Encoder Feedback ............................................                                  | 108                                                                                                              |
|                                                                                                                              | Feedback Monitoring.........................................................................................................108     |                                                                                                                  |
|                                                                                                                              | Target-Reached during Regulation.....................................................................................108            |                                                                                                                  |
|                                                                                                                              | PID-based Control of XACTUAL..........................................................................................109           |                                                                                                                  |
|                                                                                                                              | PID Readout Parameters...................................................................................................109        |                                                                                                                  |
|                                                                                                                              | PID Control Parameters and Clipping Values.......................................................................110                |                                                                                                                  |
|                                                                                                                              | Enabling PID Regulation....................................................................................................110      |                                                                                                                  |
|                                                                                                                              | Closed-Loop Operation......................................................................................................111      |                                                                                                                  |
|                                                                                                                              | Basic Closed-Loop Parameters...........................................................................................111          |                                                                                                                  |
|                                                                                                                              | Enabling and calibrating Closed-Loop Operation .................................................................112                 |                                                                                                                  |
|                                                                                                                              | Limiting Closed-Loop Catch-Up Velocity..............................................................................113             |                                                                                                                  |
|                                                                                                                              | Enabling the Limitation of the Catch-Up Velocity.................................................................113                |                                                                                                                  |
|                                                                                                                              | Enabling Closed-Loop Velocity Mode                                                                                                  | ..................................................................................114                            |
|                                                                                                                              | Back-EMF Compensation during Closed-loop Operation .......................................................115                       |                                                                                                                  |
|                                                                                                                              | Encoder Velocity Readout Parameters................................................................................116              |                                                                                                                  |
|                                                                                                                              | Encoder Velocity Filter Configuration..................................................................................116          |                                                                                                                  |
|                                                                                                                              | Encoder Velocity equals 0 Event ........................................................................................116         |                                                                                                                  |
| 13. Reset and Clock Gating..........................................................................................         | 13. Reset and Clock Gating..........................................................................................                | 117                                                                                                              |
|                                                                                                                              | Manual Hardware Reset                                                                                                               | ....................................................................................................117          |
|                                                                                                                              | Manual Software Reset .....................................................................................................117      |                                                                                                                  |
|                                                                                                                              | Reset Indication ...............................................................................................................117 |                                                                                                                  |
|                                                                                                                              | Activating Clock Gating manually .......................................................................................118         |                                                                                                                  |
|                                                                                                                              | Clock Gating Wake-up.......................................................................................................118      |                                                                                                                  |
|                                                                                                                              | Automatic Clock Gating Procedure .....................................................................................119           |                                                                                                                  |
| TECHNICAL SPECIFICATIONS......................................................................................               | TECHNICAL SPECIFICATIONS......................................................................................                      | 120                                                                                                              |
| 14. Complete Register and Switches List.....................................................................                 | 14. Complete Register and Switches List.....................................................................                        | 120                                                                                                              |
|                                                                                                                              | General Configuration Register GENERAL_CONF 0x00.........................................................120                        |                                                                                                                  |
|                                                                                                                              | Reference Switch Configuration Register REFERENCE_CONF 0x01                                                                         | .......................................123                                                                       |
|                                                                                                                              | Start Switch Configuration Register START_CONF 0x02.......................................................126                       |                                                                                                                  |
|                                                                                                                              | Input Filter Configuration Register INPUT_FILT_CONF 0x03                                                                            | ................................................128                                                              |
|                                                                                                                              | Scaling Configuration Register SCALE_CONF 0x05                                                                                      | ..............................................................129                                                |
|                                                                                                                              | Encoder Signal Configuration (0x07) ..................................................................................130           |                                                                                                                  |
|                                                                                                                              | Serial Encoder Data Input Configuration (0x08)..................................................................133                 |                                                                                                                  |
|                                                                                                                              | Microstep Settings Register STEP_CONF 0x0A ....................................................................134                  |                                                                                                                  |
|                                                                                                                              | Event Selection Registers 0x0B..0X0D                                                                                                | ................................................................................135                              |
|                                                                                                                              | Status Event Register (0x0E).............................................................................................136        |                                                                                                                  |
|                                                                                                                              | Status Flag Register (0x0F)                                                                                                         | ...............................................................................................137               |
|                                                                                                                              | Various Configuration Registers: Synchronization, PWM,                                                                              | etc................................................138                                                           |
|                                                                                                                              | Ramp Generator Registers.................................................................................................139        |                                                                                                                  |
|                                                                                                                              | External Clock Frequency Register .....................................................................................143          |                                                                                                                  |
|                                                                                                                              | Target and Compare Registers ..........................................................................................143          |                                                                                                                  |
|                                                                                                                              | Pipeline Registers                                                                                                                  | .............................................................................................................144 |
|                                                                                                                              | Shadow Register...............................................................................................................144   |                                                                                                                  |
|                                                                                                                              | Encoder Registers.............................................................................................................146   |                                                                                                                  |

<!-- image -->

<!-- image -->

| TMC4330A Datasheet &#124; Document Revision 1.00 • 2016-NOV-25                                                                                                                                                                                            | TMC4330A Datasheet &#124; Document Revision 1.00 • 2016-NOV-25                                                                                                                                                                                            | 7/166   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
|                                                                                                                                                                                                                                                           | PID & Closed-Loop Registers .............................................................................................148                                                                                                                              |         |
|                                                                                                                                                                                                                                                           | Transfer Registers ............................................................................................................150                                                                                                                        |         |
|                                                                                                                                                                                                                                                           | MSLUT Registers...............................................................................................................151                                                                                                                         |         |
|                                                                                                                                                                                                                                                           | TMC Version Register........................................................................................................151                                                                                                                           |         |
| 15. Absolute Maximum Ratings ...................................................................................                                                                                                                                          | 15. Absolute Maximum Ratings ...................................................................................                                                                                                                                          | 152     |
| 16. Electrical Characteristics........................................................................................                                                                                                                                    | 16. Electrical Characteristics........................................................................................                                                                                                                                    | 153     |
|                                                                                                                                                                                                                                                           | Power Dissipation .............................................................................................................153                                                                                                                        |         |
|                                                                                                                                                                                                                                                           | General IO Timing Parameters...........................................................................................154                                                                                                                                |         |
|                                                                                                                                                                                                                                                           | Layout Examples ..............................................................................................................155                                                                                                                         |         |
|                                                                                                                                                                                                                                                           | Internal Cirucit Diagram for Layout Example.......................................................................155                                                                                                                                     |         |
|                                                                                                                                                                                                                                                           | Components Assembly for Application with Encoder............................................................156                                                                                                                                           |         |
|                                                                                                                                                                                                                                                           | Top Layer: Assembly Side .................................................................................................156                                                                                                                             |         |
|                                                                                                                                                                                                                                                           | Inner Layer (GND)............................................................................................................157                                                                                                                          |         |
|                                                                                                                                                                                                                                                           | Inner Layer (Supply VS)....................................................................................................157                                                                                                                            |         |
|                                                                                                                                                                                                                                                           | Package Dimensions .........................................................................................................158                                                                                                                           |         |
|                                                                                                                                                                                                                                                           | Package Material Information ............................................................................................159                                                                                                                              |         |
|                                                                                                                                                                                                                                                           | Marking Details provided on Single Chip.............................................................................159                                                                                                                                   |         |
| APPENDICES................................................................................................................                                                                                                                                | APPENDICES................................................................................................................                                                                                                                                | 160     |
| 17. Supplemental Directives........................................................................................ ESD-DEVICE INSTRUCTIONS...........................................................................................................160 | 17. Supplemental Directives........................................................................................ ESD-DEVICE INSTRUCTIONS...........................................................................................................160 | 160     |
| 18. Tables Index ..........................................................................................................                                                                                                                               | 18. Tables Index ..........................................................................................................                                                                                                                               | 162     |
| 19. Figures Index.........................................................................................................                                                                                                                                | 19. Figures Index.........................................................................................................                                                                                                                                | 164     |

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
| GND                          | 6, 13, 22, 28                | GND                          | Digital ground pin for IOs and digital circuitry.                                                                           |
| VCC                          | 5, 23, 29                    | VCC                          | Digital power supply for IOs and digital circuitry (3.3V… 5V).                                                              |
| VDD1V8                       | 14, 27                       | VDD                          | Connection of internal generated core voltage of 1.8V.                                                                      |
| CLK_EXT                      | 30                           | I                            | Clock input to provide a clock with the frequency fCLK for all internal operations.                                         |
| NRST                         | 31                           | I (PU)                       | Low active reset. If not connected, Power-on-Reset and internal pull-up resistor is active.                                 |
| TEST_MODE                    | 26                           | I                            | Test mode input. Tie to low for normal operation.                                                                           |
| Interface Pins for µC        | Interface Pins for µC        | Interface Pins for µC        | Interface Pins for µC                                                                                                       |
| NSCSIN                       | 2                            | I                            | Low active chip selects input of SPI interface to µC.                                                                       |
| SCKIN                        | 3                            | I                            | Serial clock for SPI interface to µC.                                                                                       |
| SDIIN                        | 4                            | I                            | Serial data input of SPI interface to µC.                                                                                   |
| SDOIN                        | 7                            | O                            | Serial data output of SPI interface to µC (Z if NSCSIN=1).                                                                  |
| INTR                         | 25                           | O                            | Interrupt output, programmable PD/PU for wired-and/or.                                                                      |
| TARGET_REACHED               | 24                           | O                            | Target reached output, programmable PD/PU for wired-and/or.                                                                 |
| Reference Pins               | Reference Pins               | Reference Pins               | Reference Pins                                                                                                              |
| STOPL                        | 10                           | I (PD)                       | Left stop switch. External signal to stop a ramp. If not connected, internal pull-down resistor is active.                  |
| HOME_REF                     | 11                           | I (PD)                       | Home reference signal input. External signal for reference search. If not connected, internal pull-down resistor is active. |
| STOPR                        | 12                           | I (PD)                       | Right stop switch. External signal to stop a ramp. If not connected, internal pull-down resistor is active.                 |
| STPIN                        | 15                           | I (PD)                       | Step input for external step control. If not connected, internal pull-down resistor is active.                              |
| DIRIN                        | 16                           | I (PD)                       | Direction input for external step control. If not connected, internal pull-down resistor is active.                         |
| START                        | 17                           | IO                           | Start signal input/output.                                                                                                  |
| S/D Output Pins              | S/D Output Pins              | S/D Output Pins              | S/D Output Pins                                                                                                             |
| STPOUT PWMA                  | 21                           | O                            | Step output. First PWM signal (Sine).                                                                                       |
| DIROUT PWMB                  | 20                           | O                            | Direction output. Second PWM signal (Cosine).                                                                               |
|   Continued on next page!  |   Continued on next page!  |   Continued on next page!  |   Continued on next page!                                                                                                 |

<!-- image -->

<!-- image -->

Table 2: Pin Names and Descriptions

| Pin Names and Descriptions   | Pin Names and Descriptions   | Pin Names and Descriptions   | Pin Names and Descriptions                                                                                                                                                             |
|------------------------------|------------------------------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pin                          | Number                       | Type                         | Function                                                                                                                                                                               |
| Encoder Interface Pins       | Encoder Interface Pins       | Encoder Interface Pins       | Encoder Interface Pins                                                                                                                                                                 |
| N                            | 18                           | I (PD)                       | N signal input of incremental encoder input interface. If not connected, internal pull-down resistor will be active.                                                                   |
| NNEG                         | 19                           | I (PD)                       | Negated N signal input of incremental encoder input interface. If not connected, internal pull-down resistor will be active.                                                           |
| B SDI                        | 8                            | I (PD)                       | B signal input of incremental encoder input interface. Serial data input signal of serial encoder interface (SSI/SPI). If not connected, internal pull-down resistor is active.        |
| BNEG NSDI SDO_ENC            | 9                            | IO                           | Negated B signal input of incremental encoder input interface. Negated serial data input signal of SSI encoder input interface. Serial data output of SPI encoder input interface.     |
| A SCLK                       | 32                           | IO                           | A signal input of incremental encoder interface. Serial clock output signal of serial encoder interface (SSI/SPI).                                                                     |
| ANEG NSCLK NSCS_ENC          | 1                            | IO                           | Negated A signal input of incremental encoder interface. Negated serial clock output signal of serial encoder interface. Low active chip select output of SPI encoder input interface. |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## System Overview

Figure 7: System Overview

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 2. Application Circuits

In this chapter application circuit examples are provided that show how external components can be connected.

- TMC4330A Standard Connection: VCC=3.3V
- TMC4330A with TMC2100 Stepper Connection and Encoder feedback
- TMC4330A with TMC22xx Stepper Connection

<!-- image -->

+3.3 V

Figure 8: TMC4330A Connection: VCC=3.3V

<!-- image -->

Figure 9: TMC4330A with TMC2100 Stepper Driver in stealthChop Mode

Figure 10: TMC4330A with TMC22xx Stepper Driver (32 microsteps settings)

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 3. SPI Interfacing

TMC4330A uses 40-bit SPI datagrams for communication with a microcontroller. The bit-serial interface is synchronous to a bus clock. For every bit sent from the bus master to the bus slave, another  bit  is  sent  simultaneously  from  the  slave  to  the  master.  In  the  following  chapter information  is  provided  about  the  SPI  control  interface,  SPI  datagram  structure  and  SPI transaction process.

Table 3: SPI Input Control Interface Pins

| SPI Input Control Interface Pins   | SPI Input Control Interface Pins   | SPI Input Control Interface Pins             |
|------------------------------------|------------------------------------|----------------------------------------------|
| Pin Name                           | Type                               | Remarks                                      |
| NSCSIN                             | Input                              | Chip Select of SPI-µC interface (low active) |
| SCKIN                              | Input                              | Serial clock of SPI-µC interface             |
| SDIIN                              | Input                              | Serial data input of SPI-µC interface        |
| SDOIN                              | Output                             | Serial data output of SPI-µC interface       |

-  Microcontrollers that are equipped with hardware SPI are typically able to communicate using integer multiples of 8 bit.
-  The NSCSIN line of the TMC4330A has to stay active (low) for the complete duration of the datagram transmission.
-  Each datagram that is sent to TMC4330A is composed of an address byte followed by four data bytes. This allows direct 32-bit data word communication with the register set of TMC4330A. Each register is accessed via 32 data bits; even if it uses less than 32 data bits.
- i Each register is specified by a one-byte address:
- For read access the most significant bit of the address byte is 0.
- For write access the most significant bit of the address byte is 1.

## SPI Datagram Structure

## NOTE:

-  Some registers are write only registers. Most registers can be read also; and there are also some read only registers.

| TMC4330A SPI Datagram Structure                                     | TMC4330A SPI Datagram Structure                                     | TMC4330A SPI Datagram Structure   | TMC4330A SPI Datagram Structure   | TMC4330A SPI Datagram Structure   | TMC4330A SPI Datagram Structure   | TMC4330A SPI Datagram Structure   | TMC4330A SPI Datagram Structure   | TMC4330A SPI Datagram Structure   |
|---------------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| MSB (transmitted first)                                             | MSB (transmitted first)                                             | MSB (transmitted first)           | 40 bits                           | 40 bits                           | 40 bits                           | LSB (transmitted last)            | LSB (transmitted last)            | LSB (transmitted last)            |
| 39                                                                  | 39                                                                  | 39                                | ...                               | ...                               | ...                               |                                   |                                   |                                   |
|  8-bit address  8-bit SPI status                                  |  8-bit address  8-bit SPI status                                  |  32-bit data                    |  32-bit data                    |  32-bit data                    |  32-bit data                    |                                   |                                   |                                   |
| 39 ... 32                                                           | 39 ... 32                                                           | 31 ... 0                          | 31 ... 0                          | 31 ... 0                          | 31 ... 0                          |                                   |                                   |                                   |
|  to TMC4330A: RW + 7-bit address  from TMC4330A: 8-bit SPI status |  to TMC4330A: RW + 7-bit address  from TMC4330A: 8-bit SPI status | 8-bit data                        | 8-bit data                        | 8-bit data                        | 8-bit data                        | 8-bit data 8-bit data             | 8-bit data 8-bit data             | 8-bit data 8-bit data             |
| 39 / 38 ... 32                                                      | 39 / 38 ... 32                                                      | 31 ... 24                         | 31 ... 24                         | 23 ... 16                         | 23 ... 16                         | 15 ... 8 7 ... 0                  | 15 ... 8 7 ... 0                  | 15 ... 8 7 ... 0                  |
| W                                                                   | 38...32                                                             | 31...28                           | 27...24                           | 23...20                           | 19...16                           | 11...8                            | 7...4                             | 3...0                             |

Figure 11: TMC4330A SPI Datagram Structure

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

Figure 12: Difference between Read and Write Access

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
- i A  minimum  of  40  SCKIN  clock  cycles  is  required  for  a  bus  transaction  with TMC4330A.

## Take the following aspects into consideration:

-  Whenever data is read from or written to the TMC4330A, the first eight bits that are delivered back contain the SPI status SPI\_STATUS that consists of eight user-selected event bits. The selection of these bits are explained in chapter 5.2. (Page 22).
-  If less than 40 clock cycles are transmitted, the transfer is not valid; even for read access. However, sending only eight clock cycles can be useful to obtain the SPI status because it sends the status information back first.
-  If more than 40 clocks cycles are transmitted, the additional bits shifted into SDIIN are shifted out on SDOIN after a 40-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.
-  NSCSIN must be low during the whole bus transaction . When NSCSIN goes high, the contents of the internal shift register are latched into the internal control register and recognized as a command from the master to the slave. If more than 40 bits are sent, only the last 40 bits received - before the rising edge of NSCSIN - are recognized as the command.

Figure 13: SPI Timing Datagram

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

<!-- image -->

## SPI Timing Description

The SPI interface is synchronized to the internal system clock, which limits SPI bus clock SCKIN to a quarter of the system clock frequency. The signal processing of SPI inputs is supported with internal Schmitt Trigger, but not with RC elements.

## NOTE:

-  In order to avoid glitches at the inputs of the SPI interface between µC and TMC4330A, external RC elements have to be provided.

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

Input signals can be noisy due to long cables and circuit paths. To prevent jamming, every input pin provides a Schmitt trigger. Additionally, several signals are passed through a digital filter. Particular input pins are separated into four filtering groups. Each group can be programmed individually according to its filter characteristics. In this chapter informed on the digital filtering feature of TMC4330A is provided; and how to separately set up the digital filter for input pins.

Table 6: Input Filtering Groups (Assigned Pins)

| Input Filtering Groups                   | Input Filtering Groups   | Input Filtering Groups        |
|------------------------------------------|--------------------------|-------------------------------|
| Pin Names                                | Type                     | Remarks                       |
| A_SCLK B_SDI N ANEG_NSCLK BNEG_NSDI NNEG | Inputs                   | Encoder interface input pins. |
| STOPL HOME_REF STOPR                     | Inputs                   | Reference input pins.         |
| START                                    | Input                    | START input pin.              |
| STPIN DIRIN                              | Inputs                   | Step/Dir interface inputs.    |

Table 7: Input Filtering (Assigned Register)

| Register Names   | Register Names   | Register Names   | Register Names                                  |
|------------------|------------------|------------------|-------------------------------------------------|
| Register Names   | Register Address | Register Address | Remarks                                         |
| INPUT_FILT_CONF  | 0x03             | RW               | Filter configuration for all four input groups. |

Every filtering group can be configured separately with regard to input sample rate and digital filter length.

The following groups exist:

-  Encoder interface input pins.
-  Reference input pins.
-  Start input pin.
-  Step/Dir input pins.

## NOTE:

-  For  the  correct  set-up  of  the  INPUT\_FILT\_CONF  register  0x03,  please  check section 14.4. , page 128.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Input Filter Assignment

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

Example 3: Encoder Interface Input Pins

In this example every second clock cycle is sampled. Two sampled input bits must be equal to receive a valid input voltage.

Figure 14: Reference Input Pins: SR\_REF = 1, FILT\_L\_REF = 1

<!-- image -->

This example shows the START input pattern at every fourth clock cycle:

Figure 15: START Input Pin: SR\_S = 2, FILT\_L\_S = 0

<!-- image -->

This example shows every clock cycle bit. Eight sampled input bits must be equal to receive a valid input voltage.

Figure 16: Encoder Interface Input Pins: SR\_ENC\_IN = 0, FILT\_L\_ENC\_IN = 7

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 5. Status Flags and Events

TMC4330A provides several status flags and status events to obtain short information on the internal status or motor driver status. These flags and events can be read out from dedicated registers. In the following chapter, you are informed about the generation of interrupts based on status events. Status events can also be assigned to the first eight SPI status bits, which are sent within each SPI datagram.

Table 10: Pins Names: Status Events

| Pin Names: Status Events   | Pin Names: Status Events   | Pin Names: Status Events                    |
|----------------------------|----------------------------|---------------------------------------------|
| Pin Names                  | Type                       | Remarks                                     |
| INTR                       | Output                     | Interrupt output to indicate status events. |

Table 11:Register Names: Status Flags and Events

| Register Names: Status Flags and Events   | Register Names: Status Flags and Events   | Register Names: Status Flags and Events   | Register Names: Status Flags and Events                              |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|----------------------------------------------------------------------|
| Register Name                             | Register Address                          | Register Address                          | Remarks                                                              |
| GENERAL_CONF                              | 0X00                                      | RW                                        | Bits: 15, 29, 30.                                                    |
| STATUS_FLAGS                              | 0X0F                                      | R                                         | 32 status flags of TMC4330A and the connected TMC motor driver chip. |
| EVENTS                                    | 0X0E                                      | R+C W                                     | 32 events triggered by altered TMC4330A status bits.                 |
| SPI_STATUS_SELECTION                      | 0X0B                                      | RW                                        | Selection of 8 out of 32 events for SPI status bits.                 |
| EVENT_CLEAR_CONF                          | 0X0C                                      | RW                                        | Exceptions for cleared event bits.                                   |
| INTR_CONF                                 | 0X0D                                      | RW                                        | Selection of 32 events for INTR output.                              |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Status Event Description

Status events are based on status bits. If the status bits change, related events are triggered from inactive to active level. Resetting events back to inactive must be carried out manually.

## Association of Status Bits

## Automatic Clearance of EVENTS

## AREAS OF SPECIAL CONCERN

How to Avoid Lack of Information

<!-- image -->

Status bits and status events are associated in different ways:

-  Status flags reflect the as-is-condition, whereas status events indicate that the dedicated information has changed since the last read request of the EVENTS register. Several status events are associated with one status bit.
-  Some status events show the status transition of one or more status bits out of a status bit group.
-  In case a flag consists of more than one bit, the number of associated events that  can  be  triggered  corresponds  to  the  valid  combinations.  The VEL\_STATE flag, e.g., has two bit but three associated velocity state events (b'00/b'01/b'10). Such an event is triggered if the associated combination switches from inactive to active.

## NOTE:

-  Some events have no equivalence in the STATUS\_FLAGS register 0x0F.

The EVENTS  register  0x0E  is  automatically  cleared  after  reading  the  register; subsequent to an SPI datagram request. Events are important for interrupt generation and SPI status monitoring.

## NOTE:

-  It is recommended to clear EVENTS register 0x0E by read request before regular operation.

Recognition of a status event can fail; in case it is triggered right before or during EVENTS register 0x0E becomes cleared.

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

Up to eight events can be selected for permanent SPI status report. Consequently, these events are always transferred at the most significant transfer bits within each TMC4330A SPI response.

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

INTR pin can be configured for a shared interrupt signal line of several TMC4330A interrupt signals to the microcontroller.

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

Step generation is one of the main tasks of a stepper motor motion controller. The internal ramp generator of TMC4330A provides several step generation configurations with different motion profiles. They can be configured in combination with the velocity or positioning mode.

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

In order to prompt a step at every level change, do as follows:

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

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

## STPOUT: Changing Polarity

## How to prompt Level Change with every Step

## DIROUT: Changing the Polarity

<!-- image -->

## Configuration Details for Operation Modes and Motion Profiles

This section provides information on the two available operation modes (velocity mode and positioning  mode),  and  on  the  four  possible  motion  profiles  (no  ramp,  trapezoidal  ramp including sixPoint™ ramp, and S-shaped ramp). Different combinations are possible. Each one of  them  has  specific  advantages.  The  choice  of  configuration  depends  on  the  user's  design specification to best suit his design needs.

## Description of Internal Ramp Generator

With proper configuration, the internal ramp generator of the TMC4330A is able to generate various ramps with the related step outputs for STPOUT.

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

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

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

| TMC4330A Motion Profile   | TMC4330A Motion Profile   | TMC4330A Motion Profile                                                                                                                                                       |
|---------------------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RAMPMODE (1:0)            | Motion Profile            | Function                                                                                                                                                                      |
| b'00                      | No Ramp                   | Follow VMAX only (rectangular velocity shape).                                                                                                                                |
| b'01                      | Trapezoidal Ramp          | Consideration of acceleration and deceleration values without adaptation of these acceleration values.                                                                        |
|                           | sixPoint Ramp             | Consideration of acceleration and deceleration values without adaptation of these acceleration values. Usage of start and stop velocity values. (see section 6.5. , Page 41 ) |
| b'10                      | S-shaped Ramp             | Use all ramp values (including bow values).                                                                                                                                   |

Table 15: Description of TMC4330A Motion Profiles

<!-- image -->

## No Ramp Motion Profile

Positioning Mode combined with No Ramp Motion Profile

<!-- image -->

t

Figure 17: No Ramp Motion Profile

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

Figure 18: Trapezoidal Ramp without Break Point

<!-- image -->

## Trapezoidal Ramp with Break Point

Figure 19: Trapezoidal Ramp with Break Point

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

Figure 20: S-shaped Ramp without initial and final Acceleration/Deceleration Values

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

Avoid unintended system behavior during positioning mode! Ramp parameter value changes during ramp progress can lead to:

-  A temporary overshooting of XTARGET or mechanical stop positions.
-  A temporary overshooting of VACTUAL beyond VMAX because the bows B1, B2, B3, and B4 are maintained during the ramp progress.

## This will ensure smooth operation during positioning mode.

1  Exceptions are XTARGET and VMAX. These Parameters can be changed during motion.

However, if it is necessary to change ramp parameters for S-shaped ramps during motion or to swtich from velocity to positioning mode, do as follows:

## Action:

-  Set  or  set  again  proper BOW3 registers  0x2F,  regardless  of  wether  the  value changes or not.
- i Set this parameter after all other parameters have been set.

## Result:

Internal ramp calculations are reset through which the velocity ramp operates at safe mode. During this mode, the target velocity is set  to 0. In case the internal ramp calculations  are  up-to-date,  the  ramp,  which  is  configured  by  the  actual  ramp parameters, is continued.

In order to configure S-shaped ramps with starting and finishing values for acceleration or deceleration, do as follows:

## Action:

-  Set RAMPMODE(1:0)=b'10 (register 0x20).
-  Set S-Shaped ramp as explained above (BOW1 … BOW4, AMAX, DMAX).
-  Set proper ASTART register 0x2A.
-  Set proper DFINAL register 0x2B.
-  Set proper VMAX register 0x24.

## Result:

The internal velocity VACTUAL is changed successively to VMAX with S-Shaped ramps.

Figure 21: S-shaped Ramp with initial and final Acceleration/Deceleration Values

<!-- image -->

-   Description is continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Definitions for S-shaped Ramps

## AACTUAL Assignments for S-shaped Ramps

## S-shaped Mode and Positioning: Fast Motion

-  The acceleration/deceleration values are altered, based on the bow values.
-  The start phase and the end phase of an S-shaped ramp is accelerated/decelerated by ASTART and DFINAL.
-  The ramp starts with ASTART and stops with DFINAL.
-  DFINAL becomes valid when AACTUAL reaches the chosen DFINAL value.
- i The parameter DFINAL is not considered during positioning mode.

AACTUAL assignments and current bow value selection for S-shaped ramps. The acceleration/deceleration factor depends on the current ramp phase and alters every 64 clock cycles during the bow phases B1, B2, B3, and B4.

Details are provided in the table below:

Table 17: Parameter Assignments for S-shaped Ramps

| S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   | S-shaped Ramps: Assignments for AACTUAL and Internal Bow Value   |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| Ramp phase:                                                      | Ramp phase:                                                      | B 1                                                              | B 12                                                             | B 2                                                              | B 23                                                             | B 34                                                             | B 4                                                              |
| v>0:                                                             | AACTUAL =                                                        | ASTART  AMAX                                                    | AMAX                                                             | AMAX  0                                                         | 0                                                                |  -DMAX -DMAX                                                    | -DMAX  -DFINAL                                                  |
|                                                                  | BOW ACTUAL =                                                     | BOW1                                                             | 0                                                                | -BOW2                                                            | 0                                                                | -BOW3 0                                                          | BOW4                                                             |
| v<0:                                                             | AACTUAL =                                                        | -ASTART  -AMAX                                                  | -AMAX                                                            | -AMAX  0                                                        | 0                                                                |  DMAX DMAX                                                      | DMAX  DFINAL                                                    |
|                                                                  | BOW ACTUAL =                                                     | -BOW1                                                            | 0                                                                | BOW2                                                             | 0                                                                | BOW3 0                                                           | -BOW4                                                            |

## RAMPMODE(2:0) =b'110

-  The ramp finishes exactly on target position; keeping |VACTUAL| = VMAX as long as possible until the ramp falls to reach XTARGET exactly.
-  It is possible that the phases B12, B23, and B34 are left out due to given values. Therefore, the highest speed performance is possible due to a maximum speed positioning ramp.
-  The fastest possible slopes are always performed if the phases B12 and/or B34 are not reached during a rising and/or falling S-shaped slope.
-  The ramp maintains the maximum velocity VMAX as long as possible in positioning mode until the falling slope finishes the ramp to reach XTARGET exactly. The result is the fastest possible positioning ramp in matters of time.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

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

Figure 22: Trapezoidal Ramp with initial Velocity

<!-- image -->

## If trapezoidal ramp with initial velocity VSTART is selected:

<!-- image -->

## Avoid unintended system behavior during positioning mode!

-  Use VSTART without setting VSTOP &gt; VSTART only in positioning mode if there is enough distance between the current position XACTUAL and the target position XTARGET.

## This will ensure smooth operation during positioning mode.

-   Turn page for information on how to configure S-shaped ramps with initial start velocity.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## S-shaped Ramps with initial Start Velocity

## In order to use S-shaped ramps with initial start velocity, do as follows: Action:

-  Set RAMPMODE(1:0)=b'10 (register 0x20).
-  Set S-shaped ramp type accordingly, as explained before.
-  Set proper VSTART &gt; 0 (register 0x25).
-  Set VSTOP = 0 (register 0x26).

## Result:

The S-shaped ramp starts with initial velocity.

## PRINCIPLE:

-  The initial  acceleration  value  is  equal  to  AMAX.  The  parameter  ASTART  is  not considered. Consequently, ramp phase B1 is not performed.

Figure 23: S-shaped Ramp with initial Start Velocity

<!-- image -->

## If S-shaped ramp with initial velocity VSTART is selected:

## NOTICE

## Avoid unintended system behavior during positioning mode!

-  Keep in mind that the S-shaped character of the curve is maintained. Because AMAX is the start acceleration value, the ramp will always execute phase B2 which could result in positioning overshoots.
-  Use VSTART only in positioning mode if there is enough distance between the current position XACTUAL and the target position XTARGET.

## This will ensure smooth operation during positioning mode.

-   Turn page for information on how to configure finishing ramps with stop velocity.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Finishing Ramps with Stop Velocity

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

## Avoid unintended system behavior during positioning mode!

-  Set VBREAK &gt; VSTOP.
-  Set VSTART &lt; VSTOP.

This will ensure smooth operation during positioning mode.

-   Turn page for configuration information on S-shaped ramps with stop velocity.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

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

Figure 24: S-shaped Ramp with Stop Velocity

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

Figure 25: S-shaped Ramp with Start and Stop Velocity

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

Figure 26: S-shaped Ramps with combined VSTART and ASTART Parameters

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
-  Set a Trapezoidal ramp type appropriately as explained in section 6.2.6, page 30.
-  Set proper VSTART &gt; 0 (register 0x25).
-  Set proper VSTOP &gt; 0 (register 0x26).
-  Set proper VBREAK &gt; 0 (register 0x27).

## Result:

The sixPoint ramp starts with an initial velocity and stops with a defined velocity.

<!-- image -->

t

Figure 27: sixPoint Ramp: Trapezoidal Ramp with Start and Stop Velocity

## If a sixPoint ramp is used:

<!-- image -->

## Avoid unintended system behavior during positioning mode!

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

Figure 28: Example for U-Turn Behavior of sixPoint Ramp

<!-- image -->

-   Turn page for information on U-Turn for S-shaped ramps.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Example: U-Turn for S-shaped Ramps

Continuous Velocity Motion Profile for S-shaped Ramps

When VACTUAL = 0 is  reached,  motion  immediately  continues.  In  most  S-shaped ramp applications that do not use VSTOP, a standstill phase is not required. If ASTART &gt; 0 and/or DFINAL &gt; 0, these parameters are also used during U-Turn.

Figure 29: Example for U-Turn Behavior of S-shaped Ramp

<!-- image -->

There is one exception to the above explained U-Turn process:

In case BOW2 equals BOW4 , the S-shaped ramp is not stopped at VACTUAL = 0. While passing VACTUAL = 0, motion acceleration does not equal 0. Thus, the fastest possible U-Turn behavior for this ramp is created.

In the figure below, this velocity ramp behavior is depicted as bold black line, whereas the velocity ramp behavior of the process explained above is depicted gray line:

Figure 30: Direct transition via VACTUAL=0 for S-shaped Ramps

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

|VMAX| &gt; max(VSTART;VSTOP;VBREAK)

The unsigned values AMAX, DMAX, ASTART, DFINAL, and DSTOP consist of 22 digits and 2 decimal places.

AACTUAL shows a 32-bit nondecimal signed value. Acceleration and deceleration units are defined per default as pulses per second² [pps²].

If higher acceleration/deceleration values are required for short and steep ramps, do as follows:

## Action:

-  Set direct\_acc\_val\_en =1 (GENERAL\_CONF register 0x00).

## Result:

The  parameters  are  defined  as  velocity  value  change  per  clock  cycle  with  24-bit unsigned decimal places (MSB =2 -14 ). The values are calculated as follows:

```
AMAX [pps 2 ] = AMAX / 2 37  · fCLK 2 DMAX [pps 2 ] = DMAX / 2 37  · fCLK 2 ASTART [pps 2 ] = ASTART / 2 37  · fCLK 2 DFINAL [pps 2 ] = DFINAL / 2 37  · fCLK 2 DSTOP [pps 2 ] = DSTOP / 2 37  · fCLK 2
```

The maximum acceleration or deceleration values are as follows:

max(AMAX;DMAX;ASTART;DFINAL;DSTOP)  [pps²] ≤ VMAX · fCLK / 1024

In case direct\_acc\_val\_en = 1, the maximum value is also limited to:

max(AMAX;DMAX;ASTART;DFINAL;DSTOP) ≤ 2 20

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

In case higher bow values are required for short and steep ramps, do as follows:

## Action:

 Set direct\_bow\_val\_en =1 (GENERAL\_CONF register 0x00)

## Result:

The parameters are defined as acceleration value change per clock cycle with 24-bit unsigned decimal places with the MSB defined as 2 -29 .

The particular bow values BOW1, BOW2, BOW3, BOW4 are calculated as follows:

BOWx [pps 3 ] = BOWx / 2 53  · fCLK 3

## The maximum bow are as follows:

max(BOW1…4)  [pps²] ≤ max(AMAX;DMAX) [pps²] · fCLK / 1024

In case direct\_bow\_val\_en = 1, the maximum value is also limited to:

max(BOW1…4) ≤ 2 20

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

In  order  to  synchronize  with  other  motion  controllers,  TMC4330A  offers  a  step direction input interface at the STPIN and DIRIN input pins.

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

-  Gearing ratios beyond 1 generate a burst of steps at the STPOUT pin.
-  A negative gearing factor GEAR\_RATIO &lt; 0 inverts the interpretation of the input direction which is determined by DIRIN and pol\_dir\_in.

It is possible to use the internal ramp generator in combination with the external S/D interface.

In  this  case,  the  external  step  impulses  transferred  via  STPIN  and  DIRIN  cannot influence  the  internal XACTUAL counter directly. Instead,  the XTARGET register  is altered by 1 or -1 with every GEAR\_RATIO accumulation register overflow.

## NOTE:

-  Whether XTARGET is increased or decreased is determined similarly to the direct electronic gearing control. The accumulation register overflow direction indicates the target alteration. Respectively, the accumulation direction is determined by the GEAR\_RATIO sign, by pol\_dir\_in, and by DIRIN.
-  Consecutive input steps must occur with a distance of minimum 64 clock cycles.
- i This  feature  allows  a  synchronized  motion  of  different  positioning  ramps  for different TMC4330A chips with differently configured ramps.

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

TMC4330A supports a smooth transfer from direct external control to an internal ramp. The only parameter you need to know and apply is the current velocity when the switching occurs. In more detail, this means that when the external control is switched off, VSTART takes over the definition of the actual velocity value. The ramp direction is then selected automatically. The time step of the last internal step is also taken into account in order to provide a smooth transition from external to internal ramp control.

In order to select automatic switching from external to internal control, do as follows:

## PRECONDITION (EXTERNAL DIRECT CONTROL IS ACTIVE):

## Action:

-  Set sdin\_mode ≠ b'00 (GENERAL\_CONF register 0x00).
-  Set sd\_indirect\_control = 0 (GENERAL\_CONF register 0x00).
-  Set ASTART = 0 (register 0x2A).

## PROCEED WITH:

## Action:

-  Set automatic\_direct\_sdin\_switch\_off = 1  (GENERAL\_CONF register 0x00) once before switching to internal control.
-  Continually  adapt VSTART  register 0x25  according to the actual velocity of the TMC4330A that must be calculated in the µC.
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
-  Continually  adapt VSTART  register 0x25  according to the actual velocity of the TMC4330A - that must be calculated in the µC.
-  Continually adapt ASTART according to the actual acceleration (unsigned value) of the TMC4330A - that must be calculated in the µC.
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

The reference input signals of the TMC4330A function partly as safety features. The TMC4330A provides  a  range  of  reference  switch  settings  that  can  be  configured  for  many  different applications. The TMC4330A offers two hardware switches (STOPL, STOPR) and two additional virtual  stop  switches  (VIRT\_STOP\_LEFT, VIRT\_STOP\_RIGHT).  A  home  reference  switch HOME\_REF is also available.

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

## The TMC4330A offers two hardware switches that can be configured according to your design.

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

When an enabled stop switch becomes active the related status flag is set in the STATUS flags register 0x0F. The flag remains active as long as the stop switch remains active.

The particular event is also released in the EVENTS register 0x0E, which remains active until the event bit is reset manually. When VACTUAL = 0 is reached after the stop event no motion toward this particular direction is possible.

## In order to move into the locked direction, the following is required:

## PRECONDITION 1:

The particular stop switch is NOT active anymore.

## AND/OR

## PRECONDITION 2:

The stop switch is disabled (stop\_left/right\_en = 0).

## Action:

-  Set back the active event by reading out the EVENTS register 0x0E.
- i See information about clearing events provided in section 5.1. , page 21.

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

-  Set invert\_stop\_direction=1 (REFERENCE\_CONF register 0x01).

## Result:

STOPL is now the right reference switch and STOPR is now the left reference switch. Consequently, all configuration parameters for STOPL become valid for STOPR and vice versa.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Virtual Stop Switches

TMC4330A provides  additional  virtual  limits;  which  trigger  stop  slopes  in  case  the  specific virtual stop switch microstep position is reached. Virtual stop positions are assigned using the VIRTUAL\_STOP\_LEFT register 0x33 and VIRTUAL\_STOP\_RIGHT register 0x34. In this section, configuration details for virtual stop switches are provided for various design-in purposes.

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

-  Set back active event by reading out EVENTS register 0x0E.
- i See information about clearing events provided in section 5.1. , page 21.

## Result:

The active virtual stop event bit is reset to free motion into the direction that was locked beforehand.

- i invert\_stop\_direction has no influence on VIRTUAL\_STOP\_LEFT and VIRTUAL\_STOP\_RIGHT.

<!-- image -->

## Home Reference Configuration

In  this  section  home  reference  switch  handling  is  explained  with  information  about  home tracking  modes,  possible  home  event  configurations  and  home  event  monitoring. For monitoring, the switch reference input HOME\_REF is provided.

## Switch Reference Input HOME\_REF

## Home Event Selection

## Perform the following to initiate the homing process:

## Action:

-  Assign a ramp according to your needs for the homing process.
-  Enable the home tracking mode with start\_home\_tracking = 1 (REFERENCE\_CONF register 0x01).
-  Set the correct home\_event (REFERENCE\_CONF register 0x01) for the HOME\_REF input pin (see table below).
-  Start the ramp towards the home switch HOME\_REF.

## Result:

-  When the next home event is recognized, XACTUAL is latched to X\_HOME.
-  At the same time, the start\_home\_tracking switch is disabled automatically in case XLATCH\_DONE event is cleared.
-  The XLATCH\_DONE event is released in the events register 0x0E. This event can be used for an interrupt routine for the homing process to avoid polling.
- i If an incremental encoder is used to monitor the motion, the N channel can be used to fine-tune the homing position (home\_event = b'0000). After performing the homing process - as explained before - the N channel events can be used to obtain a more precise home position.
- i X\_HOME can be overwritten manually.

Nine different home events are possible.

- i Except  for  the home\_event  =  b'0000,  which  uses  the  index  channel  of  an incremental encoder, home events are related to the the HOME\_REF input pin:

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

## HOME\_REF Monitoring

## Defining a Home Range around HOME\_REF

An  error  flag HOME\_ERROR\_F is permanently  evaluated.  This  error  flag  indicates whether the current voltage level of the HOME\_REF reference input is valid in regard to X\_HOME and the selected home\_event.

In  order  to  avoid  false  error  flags  (HOME\_ERROR\_F)  because  of  mechanical inaccuracies, it is possible to setup an uncertainty home range around X\_HOME. In this range, the error flag is not evaluated.

## If you want to define an uncertainty area around X\_HOME, do as follows:

## Action:

-  Set HOME\_SAFETY\_MARGIN register 0x1E according to the required range [ustep].

## Result:

The homing uncertainties - related to the application environment - are considered for the ongoing motion. The error flag is NOT evaluated in the following range:

X\_HOME - HOME\_SAFETY\_MARGIN ≤ XACTUAL ≤ X\_HOME + HOME\_SAFETY\_MARGIN

## NOTE:

-  It is recommended to assign to a higher range value for HOME\_SAFETY\_MARGIN in  which  the  HOME\_REF  level  is  active  for  the  home\_events  b'0110,  b'0010, b'0100, b'1001, b'1011, and b'1101. It avoids false positive HOME\_ERROR\_Flags.
-  After  homing  with  the  index  channel  (home\_event  =  b'0000)  for  a  precise assignment of X\_HOME the correct home\_event has to be assigned in order to activate the generation of HOME\_ERROR\_Flags. Note that home\_event = b'0000 results in HOME\_ERROR\_Flag=0 permanently.
-  The following  examples illustrate the points at which the error flag is release - based on the selected home\_event - here for home\_event = b'0011 (*), b'1100 (**), b'0110 (***), b'0010 (***), b'0100 (***), b'1001 (****), b'1011 (****), and b'1101 (****).

Figure 31: HOME\_REF Monitoring and HOME\_ERROR\_FLAG

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Homing with STOPL or STOPR

<!-- image -->

STOPL and STOPR inputs can also be used as HOME\_REF inputs.

## OPTION 1: STOPL IS THE HOME SWITCH

## Action:

 Set stop\_left\_is\_home = 1 (REFERENCE\_CONF register 0x01).

## Result:

The stop event at STOPL only occurs when the home range is crossed after STOPL becomes active. The home range is given by X\_HOME and HOME\_SAFETY\_MARGIN.

## OPTION 2: STOPR IS HOME SWITCH

## Action:

 Set stop\_right\_is\_home = 1 (REFERENCE\_CONF register 0x01).

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

TARGET\_REACHED pins can also be configured for a shared signal line in the same way  as  several  INTR  pins  can  configured  for  one  interrupt  signal  transfer  (see section 5.4. (page 23).

To use a Wired-Or or Wired-And behavior, the below described order of action must be executed:

## Action:

-  Step 1: Set intr\_tr\_pu\_pd\_en = 1 (GENERAL\_CONF register 0x00).

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

Per  default,  TARGET\_REACHED  pin  forwards  the TARGET\_REACHED\_Flag  that  signifies XACTUAL = XTARGET. The pin can also be used to forward three other flags: VELOCITY\_REACHED\_Flag, ENC\_FAIL\_Flag, POS\_COMP\_REACHED\_Flag.

## NOTE:

-  Only one option can be selected.

## Four Options for TARGET\_REACHED

The TARGET\_REACHED output pin configuration switch is available at REFERENCE\_CONF register 0x01.

## The available optons are as follows:

Table 26: TARGET\_REACHED Output Pin Configuration

| TARGET_REACHED Output Pin Configuration   | TARGET_REACHED Output Pin Configuration   |
|-------------------------------------------|-------------------------------------------|
| If pos_comp_output…                       | Then TARGET_REACHED forwards…             |
| b'00                                      | TARGET_REACHED_F lag                      |
| b'01                                      | VELOCITY_REACHED_F lag                    |
| b'10                                      | ENC_FAIL_F lag                            |
| b'11                                      | POS_COMP_REACHED_F lag                    |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Position Comparison of Internal Values

TMC4330A  provides  several  ways  of  comparing  internal  values.  The  position  comparison process  is  permanently  active  and  associated  with  one  flag  and  one  event.  A  positive comparison result  can  be  forwarded  through  the  INTR  pin  using  the  POS\_COMP\_REACHED event as interrupt source or by using the TARGET\_REACHED pin as explained in section 8.4.2, page 58.

## Basic

Comparison Settings

Select External Position as Comparison Base

Comparison selection grid

## SETTINGS ALERT

## How to compare the internal position with an arbitrary value:

## Action:

-  Select a comparison value in the POS\_COMP register 0x32.
-  Select pos\_comp\_source = 0 (REFERENCE\_CONF register 0x01).

## Result:

XACTUAL  is  compared  with POS\_COMP.  When  POS\_COMP  equals XACTUAL  the POS\_COMP\_REACHED\_Flag  becomes  set  and  the POS\_COMP\_REACHED  event becomes released.

## How to compare the external position with an arbitrary value:

## Action:

-  Select a comparison value in the POS\_COMP register 0x32.
-  Select pos\_comp\_source = 1 (REFERENCE \_CONF register 0x01).

## Result:

ENC\_POS  is  compared  with POS\_COMP.  When  POS\_COMP  equals  ENC\_POS  the POS\_COMP\_REACHED\_Flag  becomes  set  and  the POS\_COMP\_REACHED  event becomes released.

## NOTE:

-  Because  ENC\_POS  represents  microsteps  and  not  encoder  steps,  POS\_COMP represents also microsteps for the comparison process with external positions.
-  In case ENC\_POS moves past POS\_COMP without assuming the same value as POS\_COMP, the POS\_COMP\_REACHED event is not flagged but is nonetheless listed in the EVENTS register in order to indicate that it has traversed.

In addition to comparing XACTUAL / ENC\_POS with POS\_COMP, it is also possible to conduct a comparison of one of both parameters with X\_HOME or X\_LATCH resp. ENC\_LATCH. TMC4330A also allows comparison of the revolution counter REV\_CNT against POS\_COMP.

Only  the  selected  combination  generates  the  POS\_COMP\_REACHED\_Flag and the corresponding event. Therefore, select modified\_pos\_compare in the REFERENCE\_CONF register 0x01 as outlined in the table below:

!

<!-- image -->

Table 27: Comparison Selection Grid to generate POS\_COMP\_REACHED\_Flag

| Comparison Selection Grid   | Comparison Selection Grid   | Comparison Selection Grid   |
|-----------------------------|-----------------------------|-----------------------------|
| modified_pos_compare        | pos_comp_source '0'         | '1'                         |
| '00'                        | XACTUAL vs. POS_COMP        | ENC_POS vs. POS_COMP        |
| '01'                        | XACTUAL vs. X_HOME          | ENC_POS vs. X_HOME          |
| '10'                        | XACTUAL vs . X_LATCH        | ENC_POS vs. ENC_LATCH       |
| '11'                        | REV_CNT vs. POS_COMP        | REV_CNT vs. POS_COMP        |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Repetitive and Circular Motion

TMC4330A also provides options for auto-repetitive  or auto-circular  motion. In this section configuration options are explained.

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

If  circular  motion  profiles  are  necessary  for  your  application,  TMC4330A  offers  a position limitation range of XACTUAL with an automatic overflow processing. As soon as XACTUAL reaches one of the two position range limits (positive / negative), the value of XACTUAL is set automatically to the value of the opposite range limit.

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

- i During positioning mode, the motion direction will be dependent on the shortest path to the target position XTARGET.  For  example,  if XACTUAL = 200, X\_RANGE = 300 and XTARGET = -200, the positioning ramp will find its way across the overflow position (299  -300) (see Figure A) in Table 27 (page 63).

<!-- image -->

Repetitive Motion to XTARGET

## Activating Circular Motion

<!-- image -->

## Uneven or Noninteger Microsteps per Revolution

## Example 1: Uneven Number of Microsteps per Revolution

## Example 2: Noninteger Number of Microsteps per Revolution

Example 3: Noninteger and uneven Number of Microsteps per Revolution

Due  to  definition  of  the  limitation  range,  one  revolution  only  consists  of  an  even number of microsteps. TMC4330A provides an option to overcome this limitation.

-  Some applications demand different requirements because a revolution consists of an uneven or noninteger number of microsteps.
-  TMC4330A allows a high adjustment range of microsteps by using: CIRCULAR\_DEC register 0x7C.

This value represents one digit and 31 decimal places as extension for the number of microsteps per one revolution.

-  A revolution is completed at overflow position. With every completed revolution the CIRCULAR\_DEC value is added to an internal accumulation register. In case this register has an overflow, XACTUAL remains at its overflow position for one step.
- 
- On average, this leads to the following microsteps per revolution: Microsteps/rev = (2 · X\_RANGE) + CIRCULAR\_DEC / 2 31 .

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
-  Enable both virtual limits as explained in section 8.2.1 (page 52).

## Result:

The  blocking  zone  reaches  from VIRTUAL\_STOP\_LEFT  to VIRTUAL\_STOP\_RIGHT. During positioning, the path from XACTUAL to XTARGET does not lead through the blocking zone; which can result in a longer path compared to the direct path through the blocking zone (see Figure B1 in Table 28, page 63).

However, the selected virtual stop deceleration ramp is initiated as soon as one of the limits is reached. This can result from the velocity mode or if the target XTARGET is located in the blocking zone.

-   Continued on next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

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

TMC4330A initiates a ramp with the shortest way to the target XTARGET.

- i In  order  to  match  an  incremental  encoder  in  the  same  manner,  select circular\_enc\_en =1 (REFERENCE\_CONF register 0x01).

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Moving out of the Blocking Zone

## 9. Ramp Timing and Synchronization

TMC4330A provides various options to initiate a new ramp. By default, every external register change is assigned immediately to the internal registers via an SPI input. With a proper start configuration, ramp sequences can be programmed without any intervention in between.

Three  levels  of  ramp  start  complexity  are  available.  Predefined  ramp  starts  are available,  which  are  independent  of  SPI  data  transfer  that  are  explained  in  the subsequent section 9.1. (page 65).

Two optional features can be configured that can either be used individually or combined, which are as follows:

A complete shadow motion register set can be loaded into the actual motion registers in order to start the next ramp with an altered motion profile.

Different target positions can be predefined, which are then activated successively. This pipeline can be configured as cyclic; and/or it can also be utilized to sequence different parameters.

Also, another start state 'busy' can be assigned in order to synchronize several motion controllers for one single start event without a master.

## Synchronization Opportunities

Shadow Register Set

Target Position Pipeline

Masterless Synchronization

Table 29: Dedicated Ramp Timing Pins

| Dedicated Ramp Timing Pins   | Dedicated Ramp Timing Pins   | Dedicated Ramp Timing Pins                                                                               |
|------------------------------|------------------------------|----------------------------------------------------------------------------------------------------------|
| Pin Names                    | Type                         | Remarks                                                                                                  |
| START                        | Input and Output             | External start input to get a start signal or external start output to indicate an internal start event. |

Table 30: Dedicated Ramp Timing Registers

| Dedicated Ramp Timing Registers   | Dedicated Ramp Timing Registers   | Dedicated Ramp Timing Registers   | Dedicated Ramp Timing Registers                           |
|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------------------------------|
| Register Name                     | Register Address                  | Register Address                  | Remarks                                                   |
| START_CONF                        | 0x02                              | RW                                | The configuration register of the synchronization unit.   |
| START_OUT_ADD                     | 0x11                              | RW                                | Additional active output length of external start signal. |
| START_DELAY                       | 0x13                              | RW                                | Delay time between start triggers and start signal.       |
| X_PIPE0… 7                        | 0x38…0x3F                         | RW                                | Target positions pipeline and/or parameter pipeline.      |
| SH_REG0…12                        | 0x40…0x4C                         | RW                                | Shadow register set                                       |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

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
| b'1xxxx                                                                                            | Shadow register is assigned as active ramp parameters after an internally generated start signal. This is explained in more detail in section 9.2. (page 70). |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Start Signal Trigger Selection

## User-specified Impact Configuration of Timing Procedure

<!-- image -->

## Delay Definition between Trigger and internally generated Start Signal

## Prioritizing External Input

## START Pin Polarity

## Active START Pin Output Configuration

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

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

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

Figure 32: Ramp Timing Example 1

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Ramp Timing Example 2

## Process Description

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

Figure 33: Ramp Timing Example 2

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

Figure 34: Ramp Timing Example 3

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Shadow Register Settings

Some  applications require a  complete  new  ramp  parameter  set  for  a  specific  ramp situation / point in time. TMC4330A provides up to 14 shadow registers, which are loaded into the corresponding ramp parameter registers after an internal start signal is generated.

In order to enable shadow registers, do as follows:

## Action

-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02), see section 9.1.2 (page 65).

Enabling Shadow Registers

## Result:

With every successive internal start signal the shadow registers are loaded into the corresponding active ramp register.

It is also possible to write back the current motion profile into the shadow motion registers to swap ramp motion profiles continually.

## In order to enable cyclic shadow registers, do as follows:

## Action

-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02) , see section 9.1.2 (page 65).
-  Set cyclic\_shadow\_regs = 1 (START\_CONF register 0x02).

## Result:

With every successive internal start signal the shadow registers are loaded into the corresponding active ramp register, whereas the active motion profile is loaded into the shadow registers.

-   Continued on next page.

## Enabling Cyclic Shadow Registers

<!-- image -->

<!-- image -->

## Shadow Register Configuration Options

## Option 1: Shadow Default Configuration

## AREAS OF SPECIAL CONCERN

!

Four  different  optional  shadow  register  assignments  are  available  to  match  the shadow register set according to your selected ramp type. The available options are described on the next pages.

- i Please note that the only difference between the configuration of shadow option 3 and 4 is that VSTART is exchanged by VSTOP for the transfer of the shadow registers.

If the whole ramp register is needed to set in a single level stack, do as follows:

## Action:

-  Set shadow\_option = b'00 (START\_CONF register 0x02).
-  Set start\_en(4) = 1 and select one or more trigger\_events (START\_CONF register 0x02)

## Action:

-  Default  configuration: Set cyclic\_shadow\_regs  =  0  (START\_CONF  register 0x02)
-  Optional  configuration: Set cyclic\_shadow\_regs  =  1  (START\_CONF  register 0x02)

## Result:

Every relevant motion parameter is altered at the next internal start signal by the corresponding shadow register parameter. In case cyclic shadow registers are used, the shadow register set is altered by the current motion profile set.

Figure 35: Single-level Shadow Register Option to replace complete Ramp Motion Profile.

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

Figure 36:  Double-stage Shadow Register Option 1, suitable for S-shaped Ramps.

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

Figure 37: Double-stage Shadow Register Option 2, suitable for Trapezoidal Ramps.

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

Seven  motion  parameters  (VMAX,  AMAX,  DMAX,  ASTART,  DFINAL,  VBREAK,  and VSTOP) are altered at the next  internal  start  signal  by  the  corresponding  shadow register  parameters  (SH\_REG0...6).  Simultaneously,  these  shadow  registers  are exchanged with the parameters of the second shadow stage (SH\_REG7…13).

If cyclic shadow registers are used, the second shadow register set (SH\_REG7…13) is altered by the current motion profile set, e.g. 0x26 (VSTOP) is written back to 0x4D (SH\_REG13). The other ramp registers remain unaltered.

Figure 38: Double-Stage Shadow Register Option 3, suitable for Trapezoidal Ramps

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

Figure 39: SHADOW\_MISS\_CNT Parameter for several internal Start Signals

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

## TMC4330A provides a target  pipeline  for  sequencing  subordinate  targets  in  order  to  easily arrange a complex target structure.

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

Figure 40: Target Pipeline with Configuration Options

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Using the Pipeline for different internal Registers

The TMC4330A pipeline (registers 0x38…0x3F) can be configured so that it splits up into  maximal  four  segments.  These  segments  can  be  used  to  feed  the  following internal parameters:

-  XTARGET register 0x37
-  POS\_COMP register 0x32
-  GEAR\_RATIO register 0x12
-  GENERAL\_CONF 0x00

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

Figure 41: Pipeline Example A

<!-- image -->

Examples C+D: Using two Pipelines

Figure 42: Pipeline Example B

Example C: Cyclic pipelines for XTARGET and POS\_COMP, which have four pipeline stages each.

Example D: Cyclic pipelines for GEAR\_RATIO, which has three pipeline stages and GENERAL\_CONF, which has two pipeline stages.

Figure 43: Pipeline Example C

<!-- image -->

Figure 44: Pipeline Example D

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Examples E+F: Using three Pipelines

Example  E: Cyclic  pipelines  for XTARGET  and GEAR\_RATIO,  which  have  three pipeline stages each and GENERAL\_CONF, which has two pipeline stages.

Example F: Two cyclic pipelines for XTARGET and GEAR\_RATIO, which have two pipeline  stages  each  and  a  noncyclic  pipeline  for GEAR\_RATIO,  which  has  three pipeline stages.

Figure 45: Pipeline Example E

<!-- image -->

## Examples G+H: Using four Pipelines

Figure 46: Pipeline Example F

Example G: Cyclic pipelines for XTARGET, POS\_COMP, GEAR\_RATIO and GENERAL\_CONF, which have two pipeline stages each.

Example H: Four noncyclic pipelines for XTARGET, POS\_COMP, GEAR\_RATIO and GENERAL\_CONF, which have two pipeline stages each.

Figure 47: Pipeline Example G

<!-- image -->

Figure 48: Pipeline Example H

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

In case START pin is connected with START pins of other TMC4330A devices, it is recommend that a series resistor (e.g. 220 Ω) is connected between the devices to limit  the  short  circuit  current  flowing  that  can  flow  during  the  configuration  phase when different voltage levels at the START pins of the different devices can occur.

## NOTE:

-  Avoid that short circuits last too long.

<!-- image -->

## 10. Controlled PWM Output

TMC4330A offers controlled PWM (Pulse Width Modulation) signals at STPOUT and DIROUT output pins. These PWM signals are generated by using the internal microstep look-up table (MSLUT) that can be adapted according to the design specifications, see section 10.3. , page 85. Additionally, these PWM vanlues can be scaled, depending on the internal velocity.

Table 38: Dedicated PWM Output Pins

| Dedicated PWM Output Pins   | Dedicated PWM Output Pins   | Dedicated PWM Output Pins   |
|-----------------------------|-----------------------------|-----------------------------|
| Pin Names                   | Type                        | Remarks                     |
| STPOUT_PWMA                 | Output                      | PWM output for coil A.      |
| DIROUT_PWMB                 | Output                      | PWM output for coil B.      |

Table 39: Dedicated PWM Output Registers

| Dedicated PWM Output Registers   | Dedicated PWM Output Registers   | Dedicated PWM Output Registers   | Dedicated PWM Output Registers                                                                                      |
|----------------------------------|----------------------------------|----------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Register Name                    | Register Address                 | Register Address                 | Remarks                                                                                                             |
| GENERAL_CONF                     | 0x00                             | RW                               | Bit 21: pwm_out_en.                                                                                                 |
| CURENT_CONF                      | 0x05                             | RW                               | pwm_scale_en = SCALE_CONF (8): PWM scale enable switch PWM_AMPL = SCALE_CONF (31:16): PWM amplitude at VACTUAL = 0. |
| PWM_VMAX                         | 0x17                             | RW                               | Second assignment to VDRV_SCALE_LIMIT : velocity at which the PWM scale parameter reaches 1 (maximum).              |
| PWM_FREQ                         | 0x1F                             | RW                               | Number of clock cycles that forms one PWM period.                                                                   |

Per default, a positive internal velocity VACTUAL results in a forward motion through internal  MSLUT.  Consequently,  if VACTUAL &lt; 0,  the  MSLUT  values  are  developed backwards.

In order to alter the default setting of the Internal Motion Direction, do as follows:

## Action:

-  Set reverse\_motor\_dir =1 (bit28 of GENERAL\_CONF register 0x00).

## Result:

A positive internal velocity for VACTUAL results in a backward motion through the internal MSLUT.

The  MSLUT  is  based  on  256  micorsteps  per  fullstep.  By  altering  the  microstep resolution  from  256  (MSTEP\_PER\_FS  = b'0000) to a lower value, an internal step results in more than one MSLUT step.

For  instance,  if  the  microstep  resolution  is  set  to  64  (MSTEP\_PER\_FS  =  b'0010), MSCNT is either increased or decreased by 4 per each internal step. Accordingly, the passage through the MSLUT skips three current values per each internal step to match the new microstep resolution

## How to change Motion Direction

## Change of Microstep Resolution

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

PWM scaling is adapted linearly, which depends on the internal ramp velocity. During Voltage PWM mode the scaling value at VACTUAL = 0 must be assigned, and also the velocity at which full scaling is reached.

## In order to generate a scaled PWM output, do as follows:

## Action:

-  Set PWM\_AMPL (bit31:16 of register 0x05) as start PWM scaling value.
-  Set PWM\_VMAX register 0x17 to the internal ramp velocity [pps] at which full PWM scaling is reached.
-  Set pwm\_scale = 1 (bit8 of SCALE\_CONF register 0x05).

## Result:

-  PWM\_SCALE is the actual scaling value.
-  In case VACTUAL = 0, PWM\_SCALE = (PWM\_AMPL + 1) / 2 17 .
- i Whenever  the  absolute  velocity  value  increases,  the  scale  parameter  also increases  linearly  until  it  reaches  the  maximum  of  PWM\_SCALE  =  0.5  at VACTUAL = PWM\_VMAX.
- i The minimum duty cycle is calculated by DUTY\_MIN = (0.5 - PWM\_SCALE).
- i The maximum duty cycle is calculated by DUTY\_MAX = (0.5 + PWM\_SCALE).
- i These values set the PWM duty cycle limits of any internal ramp velocity.

<!-- image -->

## PWM Scale Example

In Figure  54  below,  the  calculation  of  minimum/maximum  PWM  duty  cycles  with PWM\_AMPL = 32767 is shown on the left side. Resulting duty cycles for different positions in the sine voltage curve are depicted on the right side. Calculated delays of minimum/maximum duty cycles are also shown.

Figure 49: Calculation of PWM Duty Cycles (PWM\_AMPL)

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Microstep Lookup Tables

TMC4330A provides a programmable lookup table (LUT) for storing the microstep values, which are the basis for the Voltage PWM output. Reprogramming the table from its predefined values to a motor-specific wave allows improved motor-reliant microstepping, particularly when using low-cost motors.

## SETTINGS ALERT !

## Programming Sine Wave Lookup Tables

Sine Wave Table Structure

TMC4330A-LA provides a default configuration of the internal microstep table MSLUT. The following explanations that are provided in this section only address engineers who use their own microstep table definition.

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

## Actual Microstep Values Output

## Actual Microstep Calculations

When  the  microstep  sequencer  advances  within  the  microstep  table  (MSLUT),  it calculates the actual microstep values for the motor coils with each microstep, and stores them to the register 0x7A , which comprises the values of both waves USTEPA and USTEPB. However, the incremental coding requires an absolute initialization  especially  when  the  microstep  table  becomes  modified.  Therefore, USTEPA  and USTEPB become re-initialized with the start values whenever MSCNT passes zero.

Characteristics of a 2-phase Stepper Motor Microstep Table

As mentioned above, the MSLUT can be adapted to the motor requirements. In order to  understand  the  nature  of  incremental  coding  of  the  microstep  table,  the characteristics of the microstep wave must be understood, as described in the list below:

## Characteristics of a 2-phase motor microstep table:

-  In principle, it is a reverse characteristic of the motor pole behavior.
-  It is a polished wave to provide a smooth motor behavior. There are no jumps within the wave.
-  The phase shift between both phases is exactly 90°, because this is the optimum angle of the poles inside the motor.
-  The zero transition is at 0°. The curve is symmetrical within each quadrant (like a sine wave).
-  The slope of the wave is normally positive, but due to torque variations it can also be (slightly) negative.
-  But it must not be strictly monotonic as shown in the figure above.

Considering these facts, it becomes clear that the wave table can be compressed. The incremental coding applied to the TMC4330A uses a format that reduces the required information - per entry of the 8-bit by a 256-entry wave table - to slightly more than a single bit.

## How to Program the Internal MSLUT

Principle of Incremental Encoding

The principle of incremental encoding only stores the difference between the actual and the next table entry. In order to attain an absolute start value, the first entry is directly stored in START\_SIN. Also, for ease-of-use, the first entry of the shifted table for the second motor phase is stored in START\_SIN\_90\_120.

Based  on  these  start  values,  every  next  table  entry  is  calculated  by  adding  an increment INC to the former value. This increment is the base wave inclination value Wx whenever its corresponding ofs bit is 1 or Wx - 1 if ofs = 0:

<!-- formula-not-decoded -->

The base wave inclination can be set to four different values (0, 1, 2, 3), because it consists of two bits.

Because the wave inclination does not change dramatically, TMC4330A provides four wave inclination segments with the base wave inclinations (W0, W1, W2, and W3) and the segment borders (0, X1, X2, X3, and 255), as shown in the left quarter of the MSLUT diagram in Figure 48, page 85.

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

## Microstep Waves Start Values

Starting Microstep Values of MSLUT Configuration

As both waves are shifted by 90° for two-phase stepper motors, the sine wave starts at 0°  when MSCNT = 0.  By  comparison,  the  cosine  wave  begins  at  90°  when MSCNT = 256. At this starting points the microstep values are USTEPA = 0 for the sine wave and USTEPB = 247 for the cosine wave.

In contrast to the starting microstep positions that are fixed, these starting microstep values can be redefined if the default start values do not fit for the actual MSLUT.

## In  order  to  change  the  starting  microstep  values  of  the  MSLUT,  do  as follows:

## Action:

-  Define  the  start  values START\_SIN  and  START\_SIN90\_120  according  to  the requirements.
-  Set register 0x7E (7:0) = START\_SIN
-  Set register 0x7E (23:16) = START\_SIN90\_120

## Result:

The starting values for both waves are adapted to MSLUT.

## Default MSLUT

Base Wave Inclinations

The default sine wave table in TMC drivers uses one segment with a base inclination of 2 and one segment with a base inclination of 1 (see default value of the MSLUTSEL register 0x78 = 0xFFFF8056).

The segment border X1 is located at MSCNT = 128. The base wave inclinations are

<!-- formula-not-decoded -->

As a result, between MSCNT = 0 and 128, the increment value INC is either

<!-- formula-not-decoded -->

And between MSCNT = 128 and 255, the increment value INC is either

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

- i In addition to the MSLUT curve (black line), which is defined by the given ofs bits,  all  four  segments show upper limits (red line); in case all ofs bits in the particular segments are set to 1.
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

## 11. Decoder Unit: Connecting ABN, SSI, or SPI Encoders correctly

TMC4330A is equipped with an encoder input interface for incremental ABN encoders, absolute SSI  or  SPI  encoders.  This  chapter  provides  basic  setup  information  for  correct  analysis  of connected encoder signals.

Table 42: Dedicated Decoder Unit Pins

| Decoder Pins   | Decoder Pins    | Decoder Pins                                                                                                                      |
|----------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Pin Names      | Type            | Remarks                                                                                                                           |
| A_SCLK         | Input or Output | A signal of ABN encoder or Serial Clock output for absolute SSI, or SPI encoders.                                                 |
| ANEG_NSCLK     | Input or Output | Negated A signal of ABN encoder or Negated Serial Clock output for SSI encoder or Low active Chip Select signal for SPI encoders. |
| B_SDI          | Input           | B signal of ABN encoder or Serial Data Input of SSI, or SPI encoders.                                                             |
| BNEG_NSDI      | Input or Output | Negated B signal of ABN encoder or Negated Serial Data Input of SSI encoders or Serial Data Output of SPI encoder.                |
| N              | Input           | N signal of ABN encoder.                                                                                                          |
| NNEG           | Input           | Negated N signal of ABN encoder.                                                                                                  |

Table 43: Dedicated Decoder Unit Registers

| Decoder Unit Registers      | Decoder Unit Registers   | Decoder Unit Registers   | Decoder Unit Registers                                                         |
|-----------------------------|--------------------------|--------------------------|--------------------------------------------------------------------------------|
| Register Name               | Register address         | Register address         | Remarks                                                                        |
| GENERAL_CONF                | 0x00                     | RW                       | Bit11:10: serial_enc_in_mode, Bit12: diff_enc_in_disable                       |
| INPUT_FILT_CONF             | 0x03                     | RW                       | Input filter configuration (SR_ENC_IN, FILT_L_ENC_IN).                         |
| ENC_IN_CONF                 | 0x07                     | RW                       | Encoder configuration register.                                                |
| ENC_IN_DATA                 | 0x08                     | RW                       | Serial encoder input data structure.                                           |
| ENC_POS                     | 0x50                     | RW                       | Current absolute encoder position in microsteps.                               |
| ENC_LATCH                   | 0x51                     | R                        | Latched absolute encoder position.                                             |
| ENC_POS_DEV                 | 0x52                     | R                        | Deviation between XACTUAL and ENC_POS .                                        |
| ENC_CONST                   | 0x54                     | R                        | Internally calculated encoder constant.                                        |
| Encoder Register Set        | 0x51…58 0x62…63          | W                        | Encoder configuration parameter.                                               |
| Encoder velocity            | 0x65 0x66                | R                        | Current encoder velocity (signed). Current filtered encoder velocity (signed). |
| ADDR_TO_ENC DATA_TO_ENC     | 0x68 0x69                | W                        | Serial encoder request data.                                                   |
| ADDR_FROM_ENC DATA_FROM_ENC | 0x6A 0x6B                | R                        | Serial encoder request data response.                                          |
| Encoder compensation        | 0x7D                     | W                        | Encoder compensation register set.                                             |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Selecting the correct Encoder

<!-- image -->

The encoder interface consists of six pins that can be connected with different encoder types. Depending on the encoder type, the pins serve as inputs or as outputs. If inputs are assigned, the incoming signals can be filtered, as explained in chapter 4, page 17. Consequently, SR\_ENC\_IN  and FILT\_L\_ENC\_IN  must  be  set  accordingly.  In  the following, three options are presented to select a connected encoder properly.

## OPTION 1: INCREMENTAL ABN ENCODERS

In order to set up a connected incremental ABN encoder, do as follows:

## Action:

-  Set serial\_enc\_in\_mode = b'00 (GENERAL\_CONF register 0x00).

## Result:

An incremental ABN encoder is selected.

## OPTION 2: ABSOLUTE SSI ENCODERS

In order to set up a connected absolute SSI encoder, do as follows:

## Action:

-  Set serial\_enc\_in\_mode = b'01 (GENERAL\_CONF register 0x00).

## Result:

An absolute SSI encoder is selected.

- i In order to avoid an erroneous status of the connected absolute SSI encoder, a proper configuration is necessary prior to enabling; as described further down below on the subsequent pages: see section 15.4. on page 99.

## OPTION 3: ABSOLUTE SPI ENCODERS

In order to set up a connected absolute SPI encoder:

## Action:

-  Set serial\_enc\_in\_mode = b'11 (GENERAL\_CONF register 0x00).

## Result:

An absolute SPI encoder is selected.

- i In order to avoid an erroneous status of the connected absolute SPI encoder, a proper configuration is necessary prior to enabling; as described further down below on the subsequent pages: see section 15.4. on page 99.
-   Turn page for encoder pin assignment overview.

<!-- image -->

## Disabling digital differential Encoder Signals

## Inverting of Encoder Direction

If  incremental  ABN  or  absolute  SSI  encoders  are  selected,  the  dedicated  encoder signals are treated as digital differential signals per default. For internally displaying a valid input level, the levels of a dedicated pair must be digitally inversed.

- i No analog differential circuit is available.

## In order to disable the digital differential input signals, do as follows:

## Action:

-  Set diff\_enc\_in\_disable = 1 (GENERAL\_CONF register 0x00).

## Result:

Dedicated  encoder  signals  are  treated  as  single  signals  and  every  negated  pin  is ignored.

- i Concerning absolute SPI encoders, this is done automatically.

Table 44: Pin Assignment based on selected Encoder Setup

| Pin Assignment based on selected Encoder Setup   | Pin Assignment based on selected Encoder Setup   | Pin Assignment based on selected Encoder Setup   | Pin Assignment based on selected Encoder Setup   | Pin Assignment based on selected Encoder Setup   | Pin Assignment based on selected Encoder Setup   | Pin Assignment based on selected Encoder Setup   |
|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| Pin No.                                          | Pin Name                                         | Incremental ABN                                  | Incremental ABN                                  | Absolute SSI                                     | Absolute SSI                                     | Absolute SPI                                     |
| Pin No.                                          | Pin Name                                         | Differential                                     | Single-ended                                     | Differential                                     | Single-ended                                     | Single-ended                                     |
| 40                                               | A_SCLK                                           | A                                                | A                                                | SCLK                                             | SCLK                                             | SCLK                                             |
| 1                                                | ANEG_NSCLK                                       | ¬A                                               | -                                                | ¬SCLK                                            | -                                                | CS                                               |
| 10                                               | B_SDI                                            | B                                                | B                                                | SDI                                              | SDI                                              | SDI                                              |
| 11                                               | BNEG_NSDI                                        | ¬B                                               | -                                                | ¬SDI                                             | -                                                | SDO                                              |
| 21                                               | N                                                | N                                                | N                                                | -                                                | -                                                | -                                                |
| 22                                               | NNEG                                             | ¬N                                               | -                                                | -                                                | -                                                | -                                                |

In order to easily align the encoder direction with the motor direction it is possible to invert the encoder direction by setting one switch.

## In order to invert the encoder direction, do as follows:

## Action:

 Set invert\_direction = 1 (ENC\_CONF  register 0x07).

## Result:

The calculation of the in external position ENC\_POS is inverted, turning increment to decrement and vice versa.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Encoder Misalignment Compensation

If the encoder is installed correctly, the encoder values form a circle for one motor revolution. Thus, the deviation ENC\_POS\_DEV between real position ENC\_POS und internal position XACTUAL forms a constant function over the whole motor revolution. Consequently, the resulting form of a deficiently installed encoder is oval-shaped. This system failure results in a new function  of ENC\_POS\_DEV that is similar to a sine function. In figure A below, the position deviation is shown as function of one motor revolution, which comprises 51200 microsteps.

TMC4330A provides an option to compensate this kind of misalignment by adding a triangular  shape  function  that  counteracts  the  system  error.  This  can  improve  the encoder value evaluation significantly. Per default, this function is constant at 0.

## In order to setup the triangular compensation function, do as follows:

## Action:

-  Set proper ENC\_COMP\_XOFFSET register 0x7D (15:0).
-  Set proper ENC\_COMP\_YOFFSET register 0x7D (23:16).
-  Set proper ENC\_COMP\_AMPL register 0x7D (31:24).

## Result:

ENC\_COMP\_XOFFSET is 16-bit register which represents a numeral figure between 0 and 1. The resulting offset on the abscissa is calculated by:

XOFF\_LOW = ENC\_COMP\_XOFFSET · microsteps/rev / 65536.

A triangular function is generated, which has its lowest point at (XOFF\_LOW; ENC\_COMP\_YOFFSET) .

The  peak  is  shifted  at  a  distance  of  half  a  revolution.  The peak  coordinate (XOFF\_PEAK;YOFF\_PEAK) is calculated as follows:

XOFF\_PEAK = ENC\_COMP\_XOFFSET · microsteps/rev / 65536 + microsteps/rev / 2. YOFF\_PEAK = ENC\_COMP\_YOFFSET + ENC\_COMP\_AMPL.

In figure A below, the red line illustrates this compensation function. Internally, the triangular function is added to the ENC\_POS value. As a result, the position deviation is harmonized as a function of the motor revolution; which can be seen in figure B below.

<!-- image -->

-8

-8

Figure 52: Triangular Function that compensates Encoder Misalignments

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Incremental ABN Encoder Settings

Incremental  ABN  encoders  increment  or  decrement  the  external  position  counter  register ENC\_POS 0x50. This is based on A- and B-signal level transitions.

Automatic Constant Configuration of Incremental ABN Encoder

Manual Constant Configuration of Incremental ABN Encoder

The external position register ENC\_POS 0x50 is based on internal microsteps. Thus, every AB transition is transferred to microsteps by a fixed constant value. TMC4330A is able to calculated this constant automatically.

In order to configure the incremental ABN encoder constant automatically, do as follows:

## Action:

-  Set fullstep resolution of the motor in FS\_PER\_REV (STEP\_CONF register 0x0A).
-  Set microstep resolution MSTEP\_PER\_FS (STEP\_CONF register 0x0A).
-  Set encoder resolution - the number of AB transitions during one revolution - in register ENC\_IN\_RES 0x54 (write access).

## Result:

The encoder constant value ENC\_CONST (readable at register 0x54) is calculated as follows:

## ENC\_CONST = MSTEP\_PER\_FS · FS\_PER\_REV / ENC\_IN\_RES

This constant is the number of microsteps through which ENC\_POS is incremented or decremented by one AB transition.

- i ENC\_CONST consists of 15 digits and 16 decimal places.
- i In case 16 bits are not sufficient for a binary representation of the decimal places, TMC4330A tries to match them to a multiple of 10000 within these 16 decimal places. Thereby, a perfect match can be achieved in case decimal representation is preferred to a binary one.
- i In case the decimal representation also does not fit completely, the type of the decimal places of ENC\_CONST can be selected manually with ENC\_IN\_CONF (0). Set ENC\_IN\_CONF (0) to 0 for binary representation; or set it to 1 for the decimal one. Keep in mind that with this approach ENC\_POS can slightly differ from the real position; especially the further away the position moves from 0.

For some applications it can be useful to define the encoder constant value, which in this case does not correspond to the number of microsteps per revolution; e.g. if the encoder is not mounted directly on the motor.

In order to configure the incremental ABN encoder constant manually, do as follows:

## Action:

-  Set ENC\_IN\_RES(31) =1.
-  Set ENC\_IN\_CONF(0) to 0 for a binary or to 1 for a decimal representation as explained in the previous section.
-  Set required encoder resolution in ENC\_IN\_RES (30:0) register 0x54.

## Result:

ENC\_CONST consists of 15 digits and 16 decimal places. The constant is the number of microsteps by which ENC\_POS  is incremented or decremented by one AB transition.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Incremental Encoders: Index Signal: N resp. Z

The index signal (N or Z channel) represents a recurrence of the same position in one motor encoder revolution. TMC4330A makes use of this signal to clear the external position counter, or to take a snapshot of the external or internal position, which then can be used to refine the home position more precisely.

Figure 53: Outline of ABN Signals of an incremental Encoder

<!-- image -->

Per default, the index channel is configured low active.

In order to set up high active polarity for the index channel, do as follows:

## Action:

 Set pol\_n =1 (register ENC\_CONF 0x07).

## Result:

The index channel is high active.

The active polarity of the index channel can be used to clear the external position counter  or  to  take  a  snapshot  of  the  external  or  internal  position.  Therefore, N event is created internally. N event is based on the active polarity of the index channel. As addition, they can also be based on the polarities of the A and B channels.

Four active polarity configuration options for the index channel are available, which are  presented  below.  Configuration  choice  depends  on  customer-specific  design wishes.

In order to set up the index channel sensitivity based on active polarity, do as follows:

## Action:

-  Set n\_chan\_sensitivity (register ENC\_CONF 0x07) to:
-   Description continued on next page.

Table 45: Index Channel Sensitivity

| Index Channel Sensitivity   | Index Channel Sensitivity                                                                                 |
|-----------------------------|-----------------------------------------------------------------------------------------------------------|
| n_chan_sensitivity          | Result                                                                                                    |
| b'00                        | N event is active in case index voltage level fits pol_n.                                                 |
| b'01                        | N event is triggered when the index channel switches to active polarity.                                  |
| b'10                        | N event is triggered when the index channel switches to inactive polarity.                                |
| b'11                        | N event is triggered at both edges when the index channel switches to either active or inactive polarity. |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Setup of Active Polarity for Index Channel

Configuration of N Event

Index Channel Sensitivity

<!-- image -->

A and B Channel Signal Polarities for N Event

External Position Counter ENC\_POS Clearing

ENC\_POS Continous Clearing

ENC\_POS Single Clearing

It can be useful to specify A and B channel signal polarities for N event. Per default, the polarities of both signal lines are set to 0 (low active).

In  order  to  set  up  A  channel  polarity  to  high  active  for  N  event,  do  as follows:

## Action:

-  Set pol\_a\_for\_n = 1 (ENC\_CONF  register 0x07).

## Result:

Now, A channel signal polarity for N event is high active.

In  order  to  set  up  B  channel  polarity  to  high  active  for  N  event,  do  as follows:

## Action:

-  Set pol\_b\_for\_n = 1 (ENC\_CONF  register 0x07).

## Result:

Now, B channel signal polarity for N event is high active.

In case A and B channel polarities do not have an influence on N event, both A and B channel polarity signals can be ignored.

## In order to ignore A and B channel polarities, do as follows:

## Action:

-  Set ignore\_ab = 1 (ENC\_CONF  register 0x07).

## Result:

Now, the A and B channel signal polarities have no influence on N event.

N event can be used to clear the external position register ENC\_POS 0x50. Two choices are available: continous clearing and single clearing.

- i Common practice is to clear to 0. However, TMC4330A offers the possibility to clear to any single microstep count.

## In order to set ENC\_POS on N event to continuous clearing, do as follows:

## Action:

-  Set ENC\_RESET\_VAL register 0x51 to the requested microstep position.
-  Set clr\_latch\_cont\_on\_n = 1 (ENC\_CONF  register 0x07).
-  Set clear\_on\_n = 1 (ENC\_CONF  register 0x07).

## Result:

On every N event ENC\_POS is set to ENC\_RESET\_VAL.

## In order to only clear ENC\_POS for the next N event, do as follows:

## Action:

-  Set ENC\_RESET\_VAL register 0x51 to the requested microstep position.
-  Set clr\_latch\_cont\_on\_n = 0 (ENC\_CONF  register 0x07).
-  Set clr\_latch\_once\_on\_n = 1 (ENC\_CONF  register 0x07).
-  Set clear\_on\_n = 1 (ENC\_CONF  register 0x07).

## Result:

When  the  next  N  event  occurs, ENC\_POS  is  set  to ENC\_RESET\_VAL.  After  the particular N event, clr\_latch\_once\_on\_n is automatically reset to 0.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Latching External Position

Continous Encoder Latching

Single Encoder Latching

## Latching Internal Position

Continous Latching

Single Latching

N event can be used to latch external position register ENC\_POS 0x50 to storage register ENC\_LATCH 0x51 (read access). Two choices are available: Continous latching and single latching.

In order to continuously latch ENC\_POS to ENC\_LATCH on N event, do as follows:

## Action:

-  Set clr\_latch\_cont\_on\_n  = 1 (ENC\_CONF  register 0x07).
-  Set latch\_enc\_on\_n = 1 (ENC\_CONF  register 0x07).

## Result:

On every N event ENC\_POS register 0x50 is latched to ENC\_LATCH register 0x51.

In order to only latch ENC\_POS to ENC\_LATCH for the next N event, do as follows:

## Action:

-  Set clr\_latch\_cont\_on\_n = 0 (ENC\_CONF  register 0x07).
-  Set clr\_latch\_once\_on\_n = 1 (ENC\_CONF  register 0x07).
-  Set latch\_enc\_on\_n = 1 (ENC\_CONF  register 0x07).

## Result:

When the next  N  event  occurs, ENC\_POS  register  0x50  is  latched  to ENC\_LATCH register 0x51. After the particular N event, clr\_latch\_once\_on\_n is automatically reset to 0.

N event can be used to latch internal position register X\_ACTUAL 0x21 to storage register X\_LATCH  0x36 (read access). Two choices are available: Continous latching and single latching.

In order to continuously latch X\_ACTUAL to X\_LATCH on N event, do as follows:

## Action:

-  Set clr\_latch\_cont\_on\_n = 1 (ENC\_CONF  register 0x07).
-  Set latch\_enc\_on\_n = 1 (ENC\_CONF  register 0x07).
-  Set latch\_x\_on\_n = 1 (ENC\_CONF  register 0x07).

## Result:

On every N event X\_ACTUAL register 0x21 is latched to X\_LATCH register 0x36.

In order to only latch X\_ACTUAL to X\_LATCH for the next N event, do as follows:

## Action:

-  Set clr\_latch\_cont\_on\_n = 0 (ENC\_CONF  register 0x07).
-  Set clr\_latch\_once\_on\_n = 1 (ENC\_CONF  register 0x07).
-  Set latch\_enc\_on\_n = 1 (ENC\_CONF  register 0x07).
-  Set latch\_x\_on\_n = 1 (ENC\_CONF  register 0x07).

## Result:

When the next N event occurs, X\_ACTUAL register 0x21 is latched to X\_LATCH register 0x36. After the particular N event, clr\_latch\_once\_on\_n is automatically reset to 0.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Absolute Encoder Settings

Serial encoders provide absolute encoder angle data in contrast to step transitions, which are delivered from incremental encoders.

TMC4330A provides an external clock for the encoder in order to trigger serial data input,

Singleturn or Multiturn Data

<!-- image -->

TMC4330A  offers  singleturn  and  multiturn  options  for  the  serial  data  stream interpretation. Per default, multiturn data is not enabled. In case multiturn data is enabled, it is interpreted as unsigned count of revolutions.

In case multiturn encoder data is transmitted, do as follows:

## Action:

-  Set multi\_turn\_in\_en = 1 (ENC\_CONF register 0x07).
-  OPTIONAL CONFIGURATION: Set multi\_turn\_in\_signed = 1. In case multiturn data is provided as signed count of encoder revolutions.

## Result:

Data from connected encoders are interpreted as multiturn data.

In case only singleturn data is transmitted TMC4330A is able to permanently calculate internally  the  number  of  encoder  revolutions  as  if  it  where  externally  transferred multiturn data.

In case singleturn encoder data is transmitted but internally multiturn data is required, do as follows:

## Action:

-  Set multi\_turn\_in\_en = 0 (ENC\_CONF  register 0x07).
-  Set calc\_multi\_turn\_behav = 1 (ENC\_CONF  register 0x07).

## Result:

Data from connected singleturn encoders is internally transferred to multiturn data.

## NOTE:

-  Multiturn  calculations  are  only  correct  in  case  two  consecutive  singleturn  data values differ only by one step less than a half turn difference, or even less.

<!-- image -->

## Automatic Constant Configuration of Absolute Encoder

## Manual Constant Configuration of incremental ABN Encoder

<!-- image -->

The external position register ENC\_POS 0x50 is based on internal microsteps. Thus, every  input  data  angle  is  transferred  to  microsteps  by  a  fixed  constant  value. TMC4330A is able to automatically calculate this constant.

## In order to configure the absolute encoder constant automatically, do as follows:

## Action:

-  Set fullstep resolution of the motor in FS\_PER\_REV (STEP\_CONF  register 0x0A).
-  Set microstep resolution MSTEP\_PER\_FS (STEP\_CONF  register 0x0A).
-  Set encoder resolution in register ENC\_IN\_RES 0x54 (write access).

## Result:

The encoder constant value ENC\_CONST (readable at register 0x54) is calculated as follows:

## ENC\_CONST = MSTEP\_PER\_FS · FS\_PER\_REV / ENC\_IN\_RES

The external position ENC\_POS 0x50 is calculated by multiplying the constant with the transmitted input angle.

- i ENC\_CONST consists of 15 digits and 16 decimal places.
- i In contrast to incremental ABN encoders, ENC\_CONST is always represented as binary constant.

For some applications it can be useful to define the encoder constant value, which in this  case  does  not  correspond  to  the  number  of  microsteps  per  revolution; e.g. if the encoder is not mounted directly on the motor.

## In  order  to  configure  the  absolute  encoder  constant  manually,  do  as follows:

## Action:

-  Set ENC\_IN\_RES (31) =1.
-  Set required encoder resolution in ENC\_IN\_RES (30:0) register 0x54.

## Result:

ENC\_CONST  consists  of  15  digits  and  16  decimal  places.  The  external  position ENC\_POS 0x50 is calculated by multiplying the constant with the transmitted input angle.

<!-- image -->

## Absolute Encoder Data Setup

## Key:

- a) SINGLE\_TURN\_RES=6; MULTI\_TURN\_RES=4; STATUS\_BIT\_CNT=0; left\_aligned\_data=0
- b) SINGLE\_TURN\_RES=6; MULTI\_TURN\_RES=0; STATUS\_BIT\_CNT=2; left\_aligned\_data=0
- c) SINGLE\_TURN\_RES=5; MULTI\_TURN\_RES=4; STATUS\_BIT\_CNT=1; left\_aligned\_data=0
- d) SINGLE\_TURN\_RES=4; MULTI\_TURN\_RES=2; STATUS\_BIT\_CNT=3; left\_aligned\_data=1

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Encoder Data must be maintained correctly. Consequently, certain settings must be configured so that TMC4330A displays them as specified.

## In order to configure absolute encoder data, do as follows:

## Action:

-  Set SINGLE\_TURN\_RES (ENC\_IN\_DATA register 0x08) to the number of singleturn data bits -1.

## OPTION A1: IF MULTITURN DATA IS TRANSMITTED

-  Set MULTI\_TURN\_RES (ENC\_IN\_DATA register 0x08) to the number of multiturn data bits -1.

## OR OPTION A2: IF MULTITURN DATA IS NOT TRANSMITTED

-  Set MULTI\_TURN\_RES = 0 (ENC\_IN\_DATA register 0x08).
-  Set STATUS\_BIT\_CNT (also register 0x08) to the number of status bits.

## OPTION B1: IF STATUS FLAGS ARE ORDERED IN FRONT

-  Set left\_aligned\_data = 0 (ENC\_IN\_CONF register 0x07).

## OR OPTION B2: IF STATUS FLAGS ARE ORDERED IN FRONT

-  Set left\_aligned\_data = 1 (ENC\_IN\_CONF register 0x07).

## Result:

SINGLE\_TURN\_RES defines  the  most  significant  bit  (MSB)  of  the  angle  data  bits, whereas MULTI\_TURN\_RES defines the MSB of the revolution counter bits. Up to three status bits can be received. The number of transferred clock bits that are sent to the encoder is calculated as follows:

#SCLK Cycles= (SINGLE\_TURN\_RES+1) + (MULTI\_TURN\_RES+1) + STATUS\_BIT\_CNT

Also,  the  order  in  which  the  status  bits  occur  in  one  encoder  data  stream  can  be configured. In Figure 54, example setups are depicted.

## NOTE:

-  In case more than three status bits or additional fill bits are sent from the encoder, clock errors can occur because the number of transferred clock bits does not fit.
-  In order to prevent clock failures, MULTI\_TURN\_RES can be set to a higher value than otherwise required; even if the encoder does not provide multiturn data. This can  result  in  erroneous  multiturn  data,  which  can  be  corrected  by  setting multi\_turn\_in\_en=0 in order to skip multiturn data automatically.
-  In order to compensate unavailable multiturn data make use of calc\_multi\_turn\_behav, as explained in section 15.4.1 on page 99.

<!-- image -->

Figure 54:Serial Data Output: Four Examples

<!-- image -->

## Emitting Encoder Data Variation

For some applications it can be useful to limit the difference between two consecutive encoder data values; for instance, if encoder data lines are subject to too much noise. Per default, encoder data values can show a difference of 1/8 th  per encoder revolution, only if the limitation is enabled. The difference can be configured to a smaller value, if necessary.

In order to enable and configure encoder data variation limitation, do as follows:

## Action:

-  OPTIONAL: Set proper SER\_ENC\_VARIATION register 0x63 (7:0).
-  Set serial\_enc\_variation\_limit =1 (ENC\_IN\_CONF register 0x07).

## Result:

The encoder data value that is received subsequently must not exceed the previous data more than:

Maximum tolerated deviation = SER\_ENC\_VARIATION / 256 · 1/8 · ENC\_IN\_RES.

In  case  the  variation  exceeds  the  above  mentioned  limit,  the  new  data  value  is rejected internally and the status flag SER\_ENC\_DATA\_FAIL is raised.

- i In case SER\_ENC\_VARIATION = 0, the limit is defined by 1/8 · ENC\_IN\_RES.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## SSI Clock Generation

In  order  to  receive  encoder  data  from  the  absolute  encoder,  TMC4330A  generates  clock patterns according to SSI standard. Data transfer is initiated by switching the clock line SCLK from high to low level. The transfer starts with the next rising edge of SCLK. The number of emitted clock cycles depends on the expected data width, as explained in section 15.4.4.

## Configuration Details

One clock cycle has a high and a low phase, which can be defined separately according to internal clock cycles. Per default, sample points of serial data are set at the falling edges of SCLK. Some encoders need more clock cycles - than are available during the low clock phase - in order to prepare data for transfer. Also, due to long wires, data transfer can take more time. To counteract the above mentioned issues, the delay time SSI\_IN\_CLK\_DELAY (default value equals 0) for compensation can be specified in  order  to  prolong  the  sampling  start.  Therefore,  this  delay  configuration  can automatically generate more clock cycles.

After a data request - when all clock cycles have been emitted - the serial clock must remain idle for a certain interval before the next request is automatically initiated. This interval SER\_PTIME can also be configured in internal clock cycles.

- i According to SSI standard, select an interval that is longer than 21 µs.

## In order to configure the SSI clock generation, do as follows:

## Action:

-  Set SINGLE\_TURN\_RES (ENC\_IN\_DATA register 0x08) to the number of singleturn data bits -1.
-  Set MULTI\_TURN\_RES (ENC\_IN\_DATA register 0x08) to the number of multiturn data bits -1 in case multiturn data is enabled and used.
-  Set STATUS\_BIT\_CNT (ENC\_IN\_DATA reg. 0x08) to the number of status bits.
-  Set proper left\_aligned\_data (ENC\_IN\_CONF register 0x07).
-  Set proper SER\_CLK\_IN\_LOW (register 0x56) in internal clock cycles.
-  Set proper SER\_CLK\_IN\_HIGH (register 0x56) in internal clock cycles.
-  OPTIONAL CONFIG: Set proper SSI\_IN\_CLK\_DELAY (register 0x57) in internal clock cycles.
-  OPTIONAL CONFIG: Set proper SER\_PTIME (reg. 0x58) in internal clk cycles.
-  Finally, set serial\_enc\_in\_mode = b'01 .

## Result:

TMC4330A emits serial clock streams at SCLK in order to receive absolute encoder data at SDI. If SSI\_IN\_CLK\_DELAY &gt; 0, the SDI sample points are delayed (see figures below). SER\_PTIME defines the interval between two consecutive data requests.

- i If differential encoder is selected, the negated clock emits at ¬SCLK; and ¬SDI is also evaluated.

Figure 55: SSI: SSI\_IN\_CLK\_DELAY=0

<!-- image -->

Figure 56: SSI: SSI\_IN\_CLK\_DELAY&gt;SER\_CLK\_IN\_HIGH

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Enabling Multicycle SSI request

## Gray-encoded SSI Data Streams

<!-- image -->

If safe transmission must be determined, it is possible to send a second request so that  the  encoder  repeats  the  same  encoder  data.  Therefore,  a  second  interval SSI\_WTIME must be defined.

- i According to SSI standard, select an interval that is shorter than 19 µs.

## In order to enable multicycle requests, do as follows:

## Action:

-  Set ssi\_multi\_cycle\_data =1 (ENC\_IN\_CONF register 0x07).
-  Set proper SSI\_WTIME (register 0x57) in internal clk cycles.

## Result:

After  a  data  request  -  when  all  clock  cycles  have  been  emitted  -  the  serial  clock remains  idle  for SSI\_WTIME  clock  cycles.  Afterwards,  the  second  request  is automatically initiated to receive the same encoder data. If the second encoder data differs  from  the  first  one,  error  flag MULTI\_CYCLE\_FAIL (register 0x0F) and error event SER\_ENC\_DATA\_FAIL (register 0x0E) is generated.

After  the  second  data  request,  the  next  interval  lasts SER\_PTIME  clock  cycles  to request new encoder data.

Several but not all SSI encoders emit angle data, which is gray-encoded. TMC4330A is able to decode this data automatically.

## In order to enable gray-encoded angle data, do as follows:

## Action:

 Set ssi\_gray\_code\_en =1 (ENC\_IN\_CONF  register 0x07).

## Result:

Encoder data is recognized as gray-encoded and thus also decoded accordingly.

<!-- image -->

## SPI Encoder Data Evaluation

SPI encoder interfaces typically consist of four signal lines. In addition to SSI encoder signal lines (SCLK, MISO), a chip select line (CS) and a data input (MOSI) to the master is provided.

## SPI Encoder Communication Process

The  number  of  bits  per  transfer  is  calculated  automatically;  based  on  proper multi\_turn\_in\_en, SINGLE\_TURN\_RES, MULTI\_TURN\_RES, and STATUS\_BIT\_CNT, as explained in sections 15.4.1 (page 99) and 15.4.4  (page 101).

A typical SPI communication process responds to any SPI data transfer request when the next transmission occurs. When TMC4330A receives an answer from the encoder, it calculates ENC\_POS immediately. The encoder slave does not send any data without receiving a request first.

Therefore, TMC4330A always sends ADDR\_TO\_ENC  value to request encoder data from the SPI  encoder slave device. The  LSB  of the serial data output is ADDR\_TO\_ENC (0).

Received encoder data is stored in ADDR\_FROM\_ENC. Thus, encoder values can be verified and compared to microcontroller data later on.

- i The clock  generation  works  similarly  to  SSI  clock  generation,  as  described  in section 15.4.5 on page 103; based on proper SER\_CLK\_IN\_HIGH, SER\_PTIME, and SER\_CLK\_IN\_LOW.

## In order to configure a basic SPI communication procedure, do as follows:

## Action:

-  Set SINGLE\_TURN\_RES (ENC\_IN\_DATA register 0x08) to the number of singleturn data bits -1.
-  Set MULTI\_TURN\_RES (ENC\_IN\_DATA register 0x08) to the number of multiturn data bits -1 in case multiturn data is enabled and used.
-  Set STATUS\_BIT\_CNT (ENC\_IN\_DATA register 0x08) to the number of status bits.
-  Set proper left\_aligned\_data (ENC\_IN\_CONF register 0x07).
-  Set correct SPI transfer mode that is described in the next section .
-  Set ADDR\_TO\_ENC register 0x68 to the specified SPI encoder address that contains angle data.
-  Set proper SER\_CLK\_IN\_LOW (register 0x56) in internal clock cycles.
-  Set proper SER\_CLK\_IN\_HIGH (register 0x56) in internal clock cycles.
-  OPTIONAL CONFIG: Set proper SER\_PTIME (register 0x58) in internal clk cycles.
-  Finally, set serial\_enc\_in\_mode = b'11 .

## Result:

TMC4330A emits serial clock streams at SCLK in order to receive absolute encoder data at SDI pin. The number of generated clock cycles depends on SINGLE\_TURN\_RES, MULTI\_TURN\_RES, and STATUS\_BIT\_CNT.

Pin ANEG\_NSCLK functions as negated chip select line for the SPI encoder that is generated according to the serial clock and the selected SPI mode; which is described in the next section.

Pin BNEG\_NSDI is the MOSI line that transfers SPI datagrams to the SPI encoder. Datagrams, which  are transferred  permanently  to  receive  angle  data,  consists  of ADDR\_TO\_ENC data.

SER\_PTIME defines the interval between two consecutive data requests.

-   Turn page for information on SPI mode selection.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## SPI Encoder Mode Selection

Per  default,  SPI  encoder  data  transfer  is  managed  in  the  same  way  as  the communication between microcontroller and TMC4330A. TMC4330A supports all four SPI modes with proper setting of switches spi\_low\_before\_cs and spi\_data\_on\_cs.

## THE PROCESS IS AS FOLLOWS:

By  setting spi\_low\_before\_cs = 0 ,  negated  chip  select  line  at  ANEG\_NSCLK  is switched to active low before the serial clock line SCLK switches.

By  setting spi\_low\_before\_cs = 1 ,  negated  chip  select  line  at  ANEG\_NSCLK  is switched to active low after the serial clock line SCLK switches.

By setting spi\_data\_on\_cs = 0 , the first data bit at BNEG\_NSDI is changed at the same time as the first slope of the serial clock SCLK.

By setting spi\_data\_on\_cs = 1 , the first data bit at BNEG\_NSDI is changed at the same time as the negated chip select signal at BNEG\_NSDI switches to active level.

In the table below, all four SPI modes are presented.

Per default, the delay between serial clock line and negated chip select line has a time frame of either SER\_CLK\_IN\_HIGH or SER\_CLK\_IN\_LOW clock cycles, which depends on the actual voltage level of the serial clock.

This  particular  interval  does  not  always  match  the  encoder  behavior  perfectly. Therefore,  both  the  first  and  last  intervals  between  the  serial  clock  line  and  the negated chip select line can be specified separately in clock cycles at SSI\_IN\_CLK\_DELAY register 0x57.

Below, the SSI\_IN\_CLK\_DELAY interval is highlighted in red in all four diagrams.

Table 46: Supported SPI Encoder Data Transfer Modes

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## SPI Encoder Configuration via TMC4330A

Connected SPI encoder can be configured via TMC4330A., which renders a connection between microcontroller and encoder unnecessary.

SPI Encoder Configuration Communication Process

<!-- image -->

A  configuration  request  is  sent  using  the  settings  of SERIAL\_ADDR\_BITS  and SERIAL\_DATA\_BITS, which define the transferring bit numbers.

## In order to prepare SPI encoder configuration procedures, do as follows:

## Action:

-  Set SERIAL\_ADDR\_BITS (ENC\_IN\_DATA register 0x08) to the number of address bits of any SPI encoder configuration datagram.
-  Set SERIAL\_DATA\_BITS (ENC\_IN\_DATA register 0x08) to the number of data bits of any SPI encoder configuration datagram.

## Result:

In case configuration data is transferred to the SPI encoder, SERIAL\_ADDR\_BITS bits and SERIAL\_DATA\_BITS bits are sent in two SPI configuration datagrams; exactly in this order.

Because encoder data requests occur as an endless stream, it is necessary to interrupt data  requests  when  a  configuration  request  occurs.  Consequently,  a  handshake behavior is implemented.

## In order to transfer configuration data to the SPI encoder, do as follows:

## Action:

-  Set DATA\_TO\_ENC register 0x69 to any value.
-  Set ADDR\_TO\_ENC register 0x68 to the configuration address of the SPI encoder.
-  Set DATA\_TO\_ENC register 0x69 to the configuration data of the SPI encoder.

## Result:

The first DATA\_TO\_ENC access stops the repetitive encoder data request. After the second DATA\_TO\_ENC access, three datagrams are sent to SPI encoder:

1. One address datagram is transmitted, which contains the ADDR\_TO\_ENC value. Data that is received simultaneously with the request is not stored.
2. One data datagram is transmitted that contains the DATA\_TO\_ENC value. Data that is received simultaneously with the request is stored in ADDR\_FROM\_ENC register 0x6A because this is the response of the ADDR\_TO\_ENC request.
3. One  no-operation datagram  (NOP)  is transmitted. Data that is received simultaneously  with  the  request  is  stored  in DATA\_FROM\_ENC  register  0x6B because this is the response of the DATA\_TO\_ENC request.

## In  order  to  finalize  the  configuration  procedure  and  continue  with  the encoder data requests, do as follows:

-  Read out ADDR\_FROM\_ENC register 0x6A first.
-  Set ADDR\_TO\_ENC  register  0x68  to  the  specified  SPI  encoder  address  that contains angle data.
-  Obligatory at finalization: Read out DATA\_FROM\_ENC register 0x6B.

## Result:

The configuration request data is read out. After DATA\_FROM\_ENC register readout, the encoder data request stream of angle data continues.

<!-- image -->

## 12. Possible Regulation Options with Encoder Feedback

Beyond  simple  feedback  monitoring,  encoder  feedback  can  be  used  for  controlling  motion controller outputs in such a way that the internal actual position matches or follows the real position ENC\_POS. Two options are provided: PID control and closed-loop operation. Closed-loop operation is preferable if the encoder is mounted directly on the back of the motor and position data is evaluated precisely. PID control is preferable if the encoder is located on the drive side with no fixed connection between motor and drive side; e.g. belt drives.

Table 47: Dedicated Closed-Loop and PID Registers

| Closed-Loop and PID Registers    | Closed-Loop and PID Registers   | Closed-Loop and PID Registers   | Closed-Loop and PID Registers                                                  |
|----------------------------------|---------------------------------|---------------------------------|--------------------------------------------------------------------------------|
| Register Name                    | Register address                | Register address                | Remarks                                                                        |
| ENC_IN_CONF                      | 0x07                            | RW                              | Encoder configuration register: Closed-Loop configuration switches.            |
| CL_TR_TOLERANCE                  | 0x51                            | R                               | Absolute tolerated deviation to trigger TARGET_REACHED during regulation.      |
| ENC_POS_DEV                      | 0x52                            | R                               | Deviation between XACTUAL and ENC_POS .                                        |
| Closed-Loop and PID Register Set | 0x59…5F 0x60…61                 | W                               | Closed-Loop and PID configuration parameters.                                  |
| Encoder velocity configuration   | 0x63                            | W                               | Encoder velocity filter configuration parameters.                              |
| Encoder velocity                 | 0x65 0x66                       | R                               | Current encoder velocity (signed). Current filtered encoder velocity (signed). |

Based on the difference ENC\_POS\_DEV (readout at register 0x52) between internal position XACTUAL and external position ENC\_POS, a status flag ENC\_FAIL\_F and a corresponding error event ENC\_FAIL is generated automatically.

## In order to set a tolerated position mismatch, do as follows:

## Action:

-  Set ENC\_POS\_DEV\_TOL  register  0x53  to  the  maximum  microstep  value  that represents no mismatch failure.

## Result:

In case |ENC\_POS\_DEV| ≤ ENC\_POS\_DEV\_TOL, no encoder failure flag is set.

In case |ENC\_POS\_DEV| &gt; ENC\_POS\_DEV\_TOL, ENC\_FAIL\_Flag is set.

- i At this point, the corresponding encoder event ENC\_FAIL is also triggered.

In case one of the regulation modes is selected, TARGET\_REACHED event and status flag is only released when:

XACTUAL = XTARGET and |ENC\_POS\_DEV| ≤ CL\_TR\_TOLERANCE.

Consequently, CL\_TR\_TOLERANCE register 0x52 (only write access) is the maximal tolerated position mismatch for target reached status.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Feedback Monitoring

## Target-Reached during Regulation

## PID-based Control of XACTUAL

## PID Readout Parameters

Actual PID output velocity.

Actual PID position deviation between XACTUAL and ENC\_POS.

Actual PID integrator sum (update frequency: fCLK/128), which is calculated by:

PID\_ISUM=PID\_E · fCLK /128

PID\_VEL 0x5A

PID\_E 0x5D

PID\_ISUM 0x5B

-   Turn page for information on configuration of PID regulation.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

Based on a position difference error PID\_E = XACTUAL - ENC\_POS the PID  (proportional  integral  differential)  controller  calculates  a  signed  velocity  value (vPID), which is used for minimizing the position error. During this process, TMC4330A moves with vPID until |PID\_E| - PID\_TOLERANCE ≤ 0 is reached and the position error is removed.

vPID is calculated by:

<!-- formula-not-decoded -->

Key:

PID\_P = proportional term;  PID\_I = integral term; PID\_D = derivate term

The following parameters can be read out during PID operation.

<!-- image -->

## PID Control Parameters and Clipping Values

PID\_DV\_CLIP 0x5E

## PID\_I\_CLIP 0x5D (14:0)

## PID\_D\_CLKDIV 0x5D (23:16)

## VEL\_ACT\_PID

## PID\_TOLERANC E 0x5F

## Enabling PID Regulation

In order to set parameters and clipping values for PID regulation correctly, consider the following details:

Large velocity variations are avoided by limiting vPID value with PID\_DV\_CLIP (register 0x5E). This clipping parameter limits both vPID and PID\_VEL.

The error sum PID\_ISUM (read out at 0x5B) is generated by the integral term. PID\_ISUM is limited by setting PID\_I\_CLIP  register 0x5D.

- i The maximum value of PID\_I\_CLIP must meet the condition PID\_I\_CLIP ≤ PID\_DV\_CLIP / PID\_I.
- i If the error sum PID\_ISUM is not clipped, it is increased with each time step by PID\_I · PID\_E. This continues as long as the motor does not follow.

Time scaling for deviation (with respect to error correction periods) is controlled by PID\_D\_CLKDIV register.

- i During error correction, fixed clock frequency fPID\_INTEGRAL is valid:

fPID\_INTEGRAL[Hz] = fCLK[Hz] / 128

The internal velocity VEL\_ACT\_PID alters actual ramp velocity VACTUAL. Two settings are provided:

In case regulation\_modus = b'11, VACTUAL is assigned as pulse generator base value and VEL\_ACT\_PID is calculated by VEL\_ACT\_PID = VACTUAL + vPID.

In case regulation\_modus = b'10, zero is assigned as pulse generator base value. Now, VEL\_ACT\_PID = vPID is valid.

TMC4330A provides the programmable hysteresis PID\_TOLERANCE for target position stabilization;  which  avoids  oscillations  through  error  correction  in  case XACTUAL is close to the real mechanical position.

The PID controller of TMC4330A is programmable up to approximate 100 kHz update rate (at fCLK = 16 MHz). This high speed update rate qualifies PID regulation for motion stabilization.

Now that PID control parameters and clipping values  are configured, as explained above, PID regulation can be enabled. Two options can be selected.

In order to enable PID control, do as follows:

## Action:

## OPTION 1: BASE PULSE GENERATOR VELOCITY = 0

-  Set regulation\_modus = b'10 (ENC\_IN\_CONF register 0x07).

## OPTION 2: BASE PULSE GENERATOR VELOCITY = VACTUAL

-  Set regulation\_modus = b'11 (ENC\_IN\_CONF register 0x07).

## Result:

PID regulation is enabled.

## NOTE

-  Detailed knowledge of a particular application (including dynamics of mechanics) is necessary for PID controller parameterization.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Closed-Loop Operation

The  closed-loop  unit  of  TMC4330A  directly  modifies  Step/Dir  outputs  of  the  internal  step generator;  which  is  dependent  on  the  feedback  data.  The  2-phase  closed-loop  control  of TMC4330A follows a different approach than Field-Oriented Control (FOC); which is similar to PID control cascades. The ramp generator, which assigns target and velocity, is independent of position control (commutation angle control); which is also independent of S/D output control.

Basic ClosedLoop Parameters

CL\_OFFSET 0x59

ENC\_POS\_DEV 0x52

CL\_BETA 0x1C (8:0)

CL\_TOLERANCE 0x5F (7:0)

CL\_DELTA\_P 0x5C

CL\_CYCLE 0x63 (31:16)

Closed-loop  does  not  control  current  values  via  the  internal  step  generator.  The currents  values  at  the  SPI  output  and  the  Step/Dir  outputs  are  verified  using  the evaluated  difference  between  internal  position XACTUAL  and  external  position ENC\_POS; considering the calibrated offset parameter CL\_OFFSET.

In order to set parameters and clipping values for closed-loop regulation correctly, consider the following details:

This register contains the basic offset value between internal and external position during calibration process, which is necessary for closed-loop operation, and offers read-write  access.  The  write  access  can  be  used  if  a  defined  fixed  offset  value  is preferred, which is verified beforehand.

The continuously updated parameter ENC\_POS\_DEV displays the deviation between XACTUAL and ENC\_POS; considering CL\_OFFSET.

CL\_BETA is the maximum commutation angle that is used to compensate an evaluated deviation ENC\_POS\_DEV.  In  case  the  deviation  reaches CL\_BETA  value,  the commutation angle remains stable at this value to follow the overload. Also, CL\_MAX event is triggered at this point.

This  parameter is set  to  select  the  tolerance  range  for  position  deviation.  In  case |ENC\_POS\_DEV| ≤ CL\_TOLERANCE, CL\_FIT\_F lag becomes set. In case a mismatch between internal and external position occurs, CL\_FIT event is triggered to signify when the mismatch is removed.

CL\_DELTA\_P  is  a  proportional  controller  that  compensates  a  detected  position deviation between internal and external position. See also Figure 57, page 112. In case |ENC\_POS\_DEV| ≤ CL\_TOLERANCE, CL\_DELTA\_P is automatically set to 1.0. In case |ENC\_POS\_DEV| &gt; CL\_TOLERANCE, the closed-loop unit of TMC4330A multiplies ENC\_POS\_DEV with CL\_DELTA\_P and adds the resulting value to the current ENC\_POS. Thus, a current commutation angle for higher stiffness position maintenance, which is clipped at CL\_BETA, is calculated.

- i CL\_DELTA\_P consists of 24 bits. The last 16 bits represent decimal places. The final proportional term is thus calculated by: pPID = CL\_DELTA\_P / 65536.
- i Therefore, the higher pPID the faster the reaction on position deviations.

## NOTE:

-  A high pPID term can lead to oscillations that must be avoided.

In case, one absolute encoder is connected, this value represents the delay time in numbers of clock cycles between two consecutive regulation cycles. It is recommended to adjust this value to the regulation cycle; which is either equal or slower than the encoder request rate. In case incremental ABN encoder is selected, this value is automatically set to fetch the fastest possible regulation rate; which in most cases are five clock cycles.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Enabling and calibrating Closed-Loop Operation

Figure 57: Calculation of the Output Angle with appropriate CL\_DELTA\_P

<!-- image -->

Now that basic closed-loop control parameters are configured, as explained above, closed-loop regulation can be enabled.

- i The  presented  calibration  process  is  very  basic.  Refer  to  the  closed-loop Application Note for detailed calibration process information.

In order to enable and calibrate closed-loop control, do as follows:

PRECONDITION: SET TO BEST POSSIBLE MAXIMUM CURRENT SCALING

## PROCEED WITH: OPTION 1: CL\_OFFSET IS GENERATED DURING CALIBRATION

## Action:

-  Set MSTEPS\_PER\_FS = 0  (STEP\_CONF  register  0x0A)  [256  microsteps  per fullstep].
-  Move to any fullstep position (MSCNT mod 128 = 0).
-  Set regulation\_modus = b'01 (ENC\_IN\_CONF register 0x07).
-  Set cl\_caclibration\_en =1 (ENC\_IN\_CONF register 0x07).
-  Wait for a defined time span (system settle down).
-  Set cl\_caclibration\_en =0 (ENC\_IN\_CONF register 0x07).

## Result:

Closed-loop operation is enabled with basic calibration. CL\_OFFSET is set to position mismatch during calibration process.

## OR PROCEED WITH OPTION 2: CL\_OFFSET IS USED FOR CALIBRATION

In case CL\_OFFSET was saved and no position loss has occurred while closed-loop operation was disabled, it can be used to replace the calibration process.

## Action:

-  Set MSTEPS\_PER\_FS = 0  (STEP\_CONF  register  0x0A)  256  microsteps  per fullstep.
-  Set regulation\_modus = b'01 (ENC\_IN\_CONF register 0x07).
-  Set CL\_OFFSET to any preferred microstep value.

## Result:

Closed-loop operation is enabled.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

In order to limit catch-up velocities in case a disturbance of regular motor motion must be compensated, the following parameters can be configured accordingly:

- i Refer to section 16.2. on page 109 for more information about PI regulation of the maximum velocity because it uses the same PI regulator like the position PID regulator. The base velocity is the actual ramp velocity VACTUAL.

P parameter of the PI regulator, which controls the maximum velocity.

I parameter of the PI regulator, which controls the maximum velocity.

PID\_DV\_CLIP can be set in order to avoid large velocity variations; and also to limit the maximum velocity deviation above the maximum velocity VMAX.

This parameter is used together with PID\_DV\_CLIP in order to limit the velocity for error compensation. The error sum PID\_ISUM is generated by the integral term. In case this error sum must be limited, set PID\_I\_CLIP.

It is advisable to set the maximum value of PID\_I\_CLIP to:

## Limiting Closed-Loop Catch-Up Velocity

CL\_VMAX\_CALC\_P 0x5A

CL\_VMAX\_CALC\_I 0x5B

PID\_DV\_CLIP 0x5E

PID\_I\_CLIP 0x5D

PID\_I\_CLIP  ≤  PID\_DV\_CLIP / PID\_I.

- i In case the error sum PID\_ISUM is not clipped, it is increased with each time step by PID\_I  · PID\_E. This continues as long as the motor does not follow.

Now  that  PI  control  parameters  and  clipping  values  are  configured,  as  explained above, limiting catch-up velocities can be enabled.

## In order to enable limitation of closed-loop catch-up velocity, do as follows:

## Action:

-  Set cl\_vlimit\_en = 1 (ENC\_IN\_CONF register 0x07).

## Result:

Closed-loop catch-up velocity is limited according to the configured parameters.

## NOTE:

-  A higher motor velocity than specified VMAX ( for negative velocity: -VMAX) is possible if the following conditions are met:
- Closed-loop operation is enabled.
- Closed-loop catch-up velocity is not enabled, or is enabled with PID\_DV\_CLIP &gt; 0; and CL\_VMAX\_CALC\_P and CL\_VMAX\_CALC\_I are higher than 0.
- ENC\_POS\_DEV &gt; CL\_TOLERANCE resp. ENC\_POS\_DEV &lt; CL\_TOLERANCE.

## AREAS OF SPECIAL CONCERN

- In case the internal ramp has stopped, and the position mismatch still needs to be corrected, the base velocity for catch-up velocity limitation is zero. !

The  mismatch  correction  ramp  is  a  linear  deceleration  ramp,  independent  of  the specified ramp profile. This occurs because the catch-up velocity is regulated via PI regulation, as explained above.

Thus, this final ramp for error compensation is a function of both ENC\_POS\_DEV and the PI control parameters.

-   Turn page for information on closed-loop velocity mode.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

## Enabling the Limitation of the Catch-Up Velocity

<!-- image -->

## Enabling ClosedLoop Velocity Mode

<!-- image -->

Some applications only require maintaining a specified velocity value during closedloop behavior, regardless of position mismatches. TMC4330A also provides this option.

## NOTE:

-  The closed-loop velocity mode is set independent of the internal ramp operation mode (velocity or positioning mode).

## In order to enable and calibrate closed-loop control, do as follows:

## Action:

-  Set the catch-up velocity parameters, as explained in detail in section 16.3.3, page 113.
-  Set cl\_vlimit\_en = 1 (ENC\_IN\_CONF register 0x07).
-  Set cl\_velocity\_mode\_en = 1 (ENC\_IN\_CONF register 0x07).

## Result:

Closed-loop operation velocity mode is enabled.

In case position mismatch |ENC\_POS\_DEV| exceeds 768 microsteps, internal position counter XACTUAL  is  set  automatically  to ENC\_POS ± 768  to  limit  the  position mismatch.

Thus, closed-loop operation maintains the specified velocity value VMAX.

- i A higher motor velocity than specified VMAX (for negative velocity: -VMAX ) is possible if PID\_DV\_CLIP &gt; 0.

<!-- image -->

## Back-EMF Compensation during Closed-loop Operation

When higher velocities are reached, a phase shift between current and voltage occurs at the motor coils. Consequently, current control is transformed into voltage control.

This  motor-  and  setup-dependent  effect  must  be  compensated  because  currents  are  still continuously assigned for motor control. TMC4330A attributes γ-correction to the compensation process, which adds a velocity-dependent angle - in motion direction - to the current commutation angle.

Load Angle Calculation

## Areas of Special Concern

Gamma correction constantly adds one compensation angle, GAMMA, to the actual commutation angle; because the velocity-dependent amount of the influence of BackEMF, GAMMA is also velocity-dependent. Thus,  velocity  limits  are  assigned.  These limits are based on REAL motor velocity V\_ENC (register 0x65). The value of the motor velocity is internally calculated and can be filtered (V\_ENC\_MEAN register 0x66) to smoothen the γ-correction, which is explained in the next section.

In order to configure and enable Back-EMF compensation during closedloop operation, do as follows:

## Action:

-  Set proper CL\_GAMMA  register 0x1C.
-  Set proper CL\_VMIN\_EMF  register 0x60.
-  Set proper CL\_VMAX\_EMF  register 0x61.
-  Set cl\_emf\_en = 1 (ENC\_IN\_CONF register 0x07).

## Result:

Back-EMF  compensation during closed-loop operation is enabled. CL\_GAMMA represents  the  maximum  value  of  GAMMA.  Per  default, CL\_GAMMA  is  set  to  its maximal possible value of 255, which represents a 90° angle.

The following compensation situations are possible:

1. In case |V\_ENC\_MEAN| ≤ CL\_VMIN\_EMF, GAMMA is set to 0.
2. In case |V\_ENC\_MEAN| &gt; CL\_VMIN\_EMF  and |V\_ENC\_MEAN| ≤ (CL\_VMIN\_EMF + CL\_VADD\_EMF),  GAMMA is scaled linearly between 0 and its maximum value.
3. In case |V\_ENC\_MEAN| &gt; (CL\_VMIN\_EMF + CL\_VADD\_EMF), GAMMA = CL\_GAMMA.

The chart below identifies the actual parameter GAMMA, which is dependent on the above described situations:

- If  γ-correction  is  turned  on,  the  maximum  possible  commutation  is (CL\_BETA + CL\_GAMMA ). !

This  value  must  not  exceed  180°  (511  microsteps  at  256  microsteps  per  fullstep) because angles of 180° or more will result in unwanted motion direction changes.

Figure 58: Calculation of the actual Load Angle GAMMA

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Encoder Velocity Readout Parameters

In case an encoder is connected, REAL motor velocity can be read out. The actual encoder velocity flickers. This is system-immanent. TMC4330A provides filter options that back-EMF compensation is based on. The following velocity parameters can be read out.

Actual encoder velocity in pulses (microsteps) per second [pps].

Actual filtered encoder velocity in pulses (microsteps) per second [pps].

V\_ENC 0x65

V\_ENC\_MEAN 0x66

In order to set filter parameters correctly, consider the following details:

ENC\_VMEAN\_WAIT represents the delay period in number of clock cycles between two consecutive V\_ENC values that are used for the encoder filter velocity calculation. The  lower  this  value,  the  faster  the  adaptation  process  of V\_ENC\_MEAN    is. Accordingly: The higher the gradient of V\_ENC\_MEAN is.

In case incremental ABN encoders are connected, ENC\_VMEAN\_WAIT must be set above 32.

In case absolute encoders are connected, ENC\_VMEAN\_WAIT is automatically set to SER\_PTIME.

This filter exponent is used for filter calculations. The lower this value, the faster the adaptation  process  of V\_ENC\_MEAN  is.  Accordingly:    The  higher  the  gradient  of V\_ENC\_MEAN  is.  Every ENC\_VMEAN\_WAIT  clock  cycles,  the  following  calculation applies:

<!-- formula-not-decoded -->

The refresh frequency of high encoder velocity values V\_ENC is determined by this encoder velocity update period.

In case incremental ABN encoders are connected, the minimum value of ENC\_VMEAN\_INT is automatically set to 256.

In case absolute encoders are connected, ENC\_VMEAN\_INT is automatically adapted to encoder value request rate.

Because internal calculation of low V\_ENC values is triggered by AB signal changes and not by the refresh frequency defined by ENC\_VMEAN\_INT, any occurring idle state of the encoder is not recognized.

In order to determine that V\_ENC = 0, it is possible to limit the number of clock cycles while no AB signal changes occur; which then signifies encoder idle state.

## In order to evoke encoder idle state, do as follows:

## Action:

 Set proper ENC\_VEL\_ZERO register 0x62.

## Result:

In case no AB signal changes occur during ENC\_VEL\_ZERO clock cycles, ENC\_VEL0 event is triggered, which indicates encoder idle state.

<!-- image -->

## Encoder Velocity Filter Configuration

ENC\_VMEAN\_WAIT 0x63 (7:0)

## ENC\_VMEAN\_FILTER 0x63 (11:8)

## ENC\_VMEAN\_INT 0x63 (31:16)

## Encoder Velocity equals 0 Event

<!-- image -->

## 13. Reset and Clock Gating

In  addition  to  the  hardware  reset  pin  NRST  and  the  automatic  Power-on-Reset  procedure, TMC4330A provides a software reset option. If not in operation, clock gating can be used to reduce power consumption.

Table 48: Dedicated Reset and Clock Pins

| Reset and Clock Pins   | Reset and Clock Pins   | Reset and Clock Pins             |
|------------------------|------------------------|----------------------------------|
| Pin Names              | Types                  | Remarks                          |
| NRST                   | Input                  | Low active hardware reset.       |
| STPIN                  | Input                  | High active wake-up signal.      |
| CLK_EXT                | Input                  | Connected external clock signal. |

Table 49: Dedicated Reset and Clock Gating Registers

| Reset and Clock Gating Registers   | Reset and Clock Gating Registers   | Reset and Clock Gating Registers   | Reset and Clock Gating Registers          |
|------------------------------------|------------------------------------|------------------------------------|-------------------------------------------|
| Register Name                      | Register address                   | Register address                   | Remarks                                   |
| GENERAL_CONF                       | 0x00                               | RW                                 | Bit18:17                                  |
| CLK_GATING_DELAY                   | 0x14                               | RW                                 | Dela time before clock gating is enabled. |
| CLK_GATING_REG                     | 0x4F (2:0)                         | RW                                 | Trigger for clock gating.                 |
| RESET_REG                          | 0x4F (31:8)                        | RW                                 | Trigger for SW-Reset.                     |

A hardware reset is provided by the NRST input pin.

In order to reset TMC4330A, do as follows:

## Action:

 Set NRST input to low voltage level.

## Result:

TMC4330A registers are reset to default values.

## NOTE:

-  During power-up of TMC4330A, Power-on-Reset is executed automatically.

In order to reset TMC4330A without use of NRST pin, do as follows:

## Action:

 Set RESET\_REG = 0x525354 (Bits31:8 of register 0x4F).

## Result:

TMC4330A registers are reset to default values.

RST\_EV = EVENTS(31) is set as indicator signifying that one of the possible reset conditions was triggered.

## Manual Hardware Reset

## Manual Software Reset

Reset Indication

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

If SPI datagram transfers from microcontroller to TMC4330A prompt wakeup, do as follows:

## Action:

-  Set CLK\_GATING\_DELAY = 0xFFFFFFFF (register 0x14).
-  Set CLK\_GATING\_REG =  0x0 (bit2:0 of register 0x4F).
-  Set CLK\_GATING\_REG =  0x7 (bit2:0 of register 0x4F).
-  Set clk\_gating\_en = 0 (bit17 of GENERAL\_CONF register 0x00).

## Result:

Clock-gating is terminated.

<!-- image -->

<!-- image -->

<!-- image -->

## Automatic Clock Gating Procedure

It is possible to use TMC4330A standby phase to automatically activate clock gating.

## In order to activate automatic clock gating, do as follows:

## Action:

-  Set the time frame for STDBY\_DELAY register 0x15 after ramp stop, and before standby phase starts.
-  Set stdby\_en = 1 (SCALE\_CONF register 0x05).
-  Set clk\_gating\_en = 1 (bit17 of GENERAL\_CONF register 0x00).
-  Set proper CLK\_GATING\_DELAY register 0x14.
-  Set clk\_gating\_stdby\_en = 1 (bit17 of GENERAL\_CONF register 0x00).

## Result:

After standby phase activation, activation of clock gating counter follows. When the counter reaches 0, clock gating is activated.

In addition, the start signal generation, presented in chapter 9, page 64, can be used for an automated wake-up. An example is given in the figure below.

The chart below shows the TARGET\_REACHED (=TR) signal, which signifies ramp stop at which VACTUAL reaches 0.

When VACTUAL = 0, the following process occurs:

1. The start delay timer signifies the time frame between ramp stop and next ramp start.
2. When the standby delay timer expires, the standby phase is activated.
3. When the standby phase is activated, the clock gating delay timer is started.
4. After the clock gating delay timer expires, clock gating is activated.
5. Shortly before the start delay timer expires, clock gating is disabled, which occurs so that the next ramp is started with proper assigned registers.

Figure 60: Automatic Clock Gating Activation and Wake-Up

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## TECHNICAL SPECIFICATIONS

## 14. Complete Register and Switches List

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
|                                                 |                                                 | sdin_mode                                             | sdin_mode                                                                                              |
|                                                 |                                                 | 0                                                     | Internal step control (internal ramp generator will be used)                                           |
|                                                 | 7:6                                             | 1                                                     | External step control via STPIN / DIRIN interface with high active steps at STPIN                      |
|                                                 |                                                 | 2                                                     | External step control via STPIN / DIRIN interface with low active steps at STPIN                       |
|                                                 |                                                 | 3                                                     | External step control via STPIN / DIRIN interface with toggling steps at STPIN                         |
|                                                 | 8                                               | pol_dir_in                                            | pol_dir_in                                                                                             |
|                                                 | 8                                               | 0                                                     | DIRIN = 0 indicates negative direction.                                                                |
|                                                 | 8                                               | 1                                                     | DIRIN = 1 indicates negative direction.                                                                |
|                                                 | 9                                               | sd_indirect_control                                   | sd_indirect_control                                                                                    |
|                                                 | 9                                               | 0                                                     | STPIN/DIRIN input signals will manipulate internal steps at XACTUAL directly.                          |
|                                                 | 9                                               | 1                                                     | STPIN/DIRIN input signals will manipulate XTARGET register value, the internal ramp generator is used. |
|                                                 |   Continued on next page.                     |   Continued on next page.                           |   Continued on next page.                                                                            |

<!-- image -->

<!-- image -->

| GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)                                           |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                             | Remarks                                                                                 |
|                                                 | 11:10                                           | serial_enc_in_mode                              | serial_enc_in_mode                                                                      |
|                                                 | 11:10                                           | 0                                               | An incremental encoder is connected to encoder interface.                               |
|                                                 | 11:10                                           | 1                                               | An absolute SSI encoder is connected to encoder interface.                              |
|                                                 | 11:10                                           | 2                                               | Reserved                                                                                |
|                                                 | 11:10                                           | 3                                               | An absolute SPI encoder is connected to encoder interface.                              |
|                                                 | 12                                              | diff_enc_in_disable                             | diff_enc_in_disable                                                                     |
|                                                 | 12                                              | 0                                               | Differential encoder interface inputs enabled.                                          |
|                                                 | 12                                              | 1                                               | Differential encoder interface inputs is disabled (automatically set for SPI encoder).  |
|                                                 | 14:13                                           | Reserved. Set to 0.                             | Reserved. Set to 0.                                                                     |
|                                                 | 15                                              | intr_pol                                        | intr_pol                                                                                |
|                                                 | 15                                              | 0                                               | INTR=0 indicates an active interrupt.                                                   |
|                                                 | 15                                              | 1                                               | INTR=1 indicates an active interrupt.                                                   |
|                                                 | 16                                              | invert_pol_target_reached                       | invert_pol_target_reached                                                               |
|                                                 | 16                                              | 0                                               | TARGET_REACHED signal is set to 1 to indicate a target reached event.                   |
|                                                 | 16                                              | 1                                               | TARGET_REACHED signal is set to 0 to indicate a target reached event.                   |
|                                                 |                                                 | clk_gating_en                                   | clk_gating_en                                                                           |
|                                                 | 17                                              | 0                                               | Clock gating is disabled.                                                               |
|                                                 |                                                 | 1                                               | Internal clock gating is enabled.                                                       |
|                                                 | 18                                              | clk_gating_stdby_en                             | clk_gating_stdby_en                                                                     |
|                                                 | 18                                              | 0                                               | No clock gating during standby phase.                                                   |
|                                                 | 18                                              | 1                                               | Intenal clock gating during standby phase is enabled.                                   |
|                                                 | 22:19                                           | Reserved. Set to 0x0.                           | Reserved. Set to 0x0.                                                                   |
|                                                 | 23                                              | pwm_out_en                                      | pwm_out_en                                                                              |
|                                                 | 23                                              | 0                                               | PWM output is disabled. Step/Dir output is enabled at STPOUT/DIROUT.                    |
|                                                 | 23                                              | 1                                               | STPOUT/DIROUT output pins are used as PWM output (PWMA/PWMB).                           |
|                                                 | 25:24                                           | Reserved. Set to 0x0.                           | Reserved. Set to 0x0.                                                                   |
|                                                 |                                                 | automatic_direct_sdin_switch_off                | automatic_direct_sdin_switch_off                                                        |
|                                                 | 26                                              | 0                                               | VACTUAL =0 & AACTUAL =0 after switching off direct external step control.               |
|                                                 |                                                 | 1                                               | VACTUAL = VSTART and AACTUAL = ASTART after switching off direct external step control. |
|                                                 | 27                                              | circular_cnt_as_xlatch                          | circular_cnt_as_xlatch                                                                  |
|                                                 | 27                                              | 0                                               | The register value of X_LATCH is forwarded at register 0x36.                            |
|                                                 | 27                                              | 1                                               | The register value of REV_CNT (#internal revolutions) is forwarded at register 0x36.    |
|                                                 | 28                                              | reverse_motor_dir                               | reverse_motor_dir                                                                       |
|                                                 | 28                                              | 0                                               | The direction of the internal MSLUT is regularly used.                                  |
|                                                 | 28                                              | 1                                               | The direction of internal MSLUT is reversed                                             |
|                                                 |   Continued on next page.                     |   Continued on next page.                     |   Continued on next page.                                                             |

<!-- image -->

<!-- image -->

Table 50: General Configuration 0x00

| GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)   | GENERAL_CONF 0x00 (Default value: 0x00006020)                                                  |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------|
| R/W                                             | Bit                                             | Val                                             | Remarks                                                                                        |
| RW                                              | 29                                              | intr_tr_pu_pd_en                                | intr_tr_pu_pd_en                                                                               |
| RW                                              | 29                                              | 0                                               | INTR and TARGET_REACHED are outputs with strongly driven output values..                       |
| RW                                              | 29                                              | 1                                               | INTR and TARGET_REACHED are used as outputs with gated pull-up and/or pull-down functionality. |
| RW                                              | 30                                              | intr_as_wired_and                               | intr_as_wired_and                                                                              |
| RW                                              | 30                                              | 0                                               | INTR output function is used as Wired-Or in the case of intr_tr_pu_pd_en = 1.                  |
| RW                                              | 30                                              | 1                                               | INTR output function is used as Wired-And. in the case of intr_tr_pu_pd_en = 1.                |
| RW                                              | 31                                              | tr_as_wired_and                                 | tr_as_wired_and                                                                                |
| RW                                              | 31                                              | 0                                               | TARGET_REACHED output function is used as Wired-Or in the case of intr_tr_pu_pd_en = 1.        |
| RW                                              | 31                                              | 1                                               | TARGET_REACHED output function is used as Wired-And in the case of intr_tr_pu_pd_en = 1.       |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Reference Switch Configuration Register REFERENCE\_CONF 0x01

| REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                    |
|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|------------------------------------------------------------------------------------|
| R/W                                               | Bit                                               | Val                                               | Remarks                                                                            |
| RW                                                | 0                                                 | stop_left_en                                      | stop_left_en                                                                       |
|                                                   | 0                                                 | 0                                                 | STOPL signal processing disabled.                                                  |
|                                                   | 0                                                 | 1                                                 | STOPL signal processing enabled.                                                   |
|                                                   | 1                                                 | stop_right_en                                     | stop_right_en                                                                      |
|                                                   | 1                                                 | 0                                                 | STOPR signal processing disabled.                                                  |
|                                                   | 1                                                 | 1                                                 | STOPR signal processing enabled.                                                   |
|                                                   | 2                                                 | pol_stop_left                                     | pol_stop_left                                                                      |
|                                                   | 2                                                 | 0                                                 | STOPL input signal is low active.                                                  |
|                                                   | 2                                                 | 1                                                 | STOPL input signal is high active.                                                 |
|                                                   | 3                                                 | pol_stop_right                                    | pol_stop_right                                                                     |
|                                                   | 3                                                 | 0                                                 | STOPR input signal is low active.                                                  |
|                                                   | 3                                                 | 1                                                 | STOPR input signal is high active.                                                 |
|                                                   |                                                   | invert_stop_direction                             | invert_stop_direction                                                              |
|                                                   | 4                                                 | 0                                                 | STOPL/STOPR stops motor in negative/positive direction.                            |
|                                                   |                                                   | 1                                                 | STOPL/STOPR stops motor in positive/negative direction.                            |
|                                                   |                                                   | soft_stop_en                                      | soft_stop_en                                                                       |
|                                                   | 5                                                 | 0                                                 | Hard stop enabled. VACTUAL is immediately set to 0 on any external stop event.     |
|                                                   |                                                   | 1                                                 | Soft stop enabled. A linear velocity ramp is used for decreasing VACTUAL to v = 0. |
|                                                   | 6                                                 | virtual_left_limit_en                             | virtual_left_limit_en                                                              |
|                                                   | 6                                                 | 0                                                 | Position limit VIRT_STOP_LEFT disabled.                                            |
|                                                   | 6                                                 | 1                                                 | Position limit VIRT_STOP_LEFT enabled.                                             |
|                                                   | 7                                                 | virtual_right_limit_en                            | virtual_right_limit_en                                                             |
|                                                   | 7                                                 | 0                                                 | Position limit VIRT_STOP_RIGHT disabled.                                           |
|                                                   | 7                                                 | 1                                                 | Position limit VIRT_STOP_RIGHT enabled.                                            |
|                                                   | 9:8                                               | virt_stop_mode                                    | virt_stop_mode                                                                     |
|                                                   | 9:8                                               | 0                                                 | Reserved.                                                                          |
|                                                   | 9:8                                               | 1                                                 | Hard stop: VACTUAL is set to 0 on a virtual stop event.                            |
|                                                   | 9:8                                               | 2                                                 | Soft stop is enabled with linear velocity ramp (from VACTUAL to v = 0).            |
|                                                   | 9:8                                               | 3                                                 | Reserved.                                                                          |
|                                                   | 10                                                | latch_x_on_inactive_l                             | latch_x_on_inactive_l                                                              |
|                                                   | 10                                                | 0                                                 | No latch of XACTUAL if STOPL becomes inactive.                                     |
|                                                   | 10                                                | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes inactive.                    |
|                                                   | 11                                                | latch_x_on_active_l                               | latch_x_on_active_l                                                                |
|                                                   | 11                                                | 0                                                 | No latch of XACTUAL if STOPL becomes active.                                       |
|                                                   | 11                                                | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes active.                      |
|   Continued on next page.                       |   Continued on next page.                       |   Continued on next page.                       |   Continued on next page.                                                        |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

| REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                                                                                                      |
|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                               | Bit                                               | Val                                               | Remarks                                                                                                                                                              |
|                                                   | 12                                                | latch_x_on_inactive_r                             | latch_x_on_inactive_r                                                                                                                                                |
|                                                   | 12                                                | 0                                                 | No latch of XACTUAL if STOPR becomes inactive.                                                                                                                       |
|                                                   | 12                                                | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes inactive.                                                                                                      |
|                                                   | 13                                                | latch_x_on_active_r                               | latch_x_on_active_r                                                                                                                                                  |
|                                                   | 13                                                | 0                                                 | No latch of XACTUAL if STOPR becomes active.                                                                                                                         |
|                                                   | 13                                                | 1                                                 | X_LATCH = XACTUAL is stored in the case STOPL becomes active.                                                                                                        |
|                                                   | 14                                                | stop_left_is_home                                 | stop_left_is_home                                                                                                                                                    |
|                                                   | 14                                                | 0                                                 | STOPL input signal is not also the HOME position.                                                                                                                    |
|                                                   | 14                                                | 1                                                 | STOPL input signal is also the HOME position.                                                                                                                        |
|                                                   | 15                                                | stop_right_is_home                                | stop_right_is_home                                                                                                                                                   |
|                                                   | 15                                                | 0                                                 | STOPR input signal is not lso the HOME position.                                                                                                                     |
|                                                   | 15                                                | 1                                                 | STOPR input signal is also the HOME position.                                                                                                                        |
|                                                   | 19:16                                             | home_event                                        | home_event                                                                                                                                                           |
|                                                   | 19:16                                             | 0                                                 | Next active N event of connected ABN encoder signal indicates HOME position.                                                                                         |
|                                                   | 19:16                                             | 2                                                 | HOME_REF = 1 indicates an active home event X_HOME is located at the rising edge of the active range.                                                                |
|                                                   | 19:16                                             | 3                                                 | HOME_REF = 0 indicates negative region/position from the home position.                                                                                              |
|                                                   | 19:16                                             | 4                                                 | HOME_REF = 1 indicates an active home event X_HOME is located at the falling edge of the active range.                                                               |
| RW                                                | 19:16                                             | 6                                                 | HOME_REF = 1 indicates an active home event X_HOME is located in the middle of the active range.                                                                     |
|                                                   | 19:16                                             | 9                                                 | HOME_REF = 0 indicates an active home event X_HOME is located in the middle of the active range.                                                                     |
|                                                   | 19:16                                             | 11                                                | HOME_REF = 0 indicates an active home event X_HOME is located at the rising edge of the active range.                                                                |
|                                                   | 19:16                                             | 12                                                | HOME_REF = 1 indicates negative region/position from the home position.                                                                                              |
|                                                   | 19:16                                             | 13                                                | HOME_REF = 0 indicates an active home event X_HOME is located at the falling edge of the active range.                                                               |
|                                                   | 20                                                | start_home_tracking                               | start_home_tracking                                                                                                                                                  |
|                                                   | 20                                                | 0                                                 | No storage to X_HOME by passing home position.                                                                                                                       |
|                                                   | 20                                                | 1                                                 | Storage of XACTUAL as X_HOME at next regular home event. An XLATCH_DONE event is released. In case the event is cleared, start_home_tracking is reset automatically. |
|                                                   | 21                                                | clr_pos_at_target                                 | clr_pos_at_target                                                                                                                                                    |
|                                                   | 21                                                | 0                                                 | Ramp stops at XTARGET if positioning mode is active.                                                                                                                 |
|                                                   | 21                                                | 1                                                 | Set XACTUAL = 0 after XTARGET has been reached. The next ramp starts immediately.                                                                                    |
|                                                   | 22                                                | circular_movement_en                              | circular_movement_en                                                                                                                                                 |
|                                                   | 22                                                | 0                                                 | Range of XACTUAL is not limited: -2 31 ≤ XACTUAL ≤ 2 31 -1                                                                                                           |
|                                                   | 22                                                | 1                                                 | Range of XACTUAL is limited by X_RANGE : - X_RANGE ≤ XACTUAL ≤ X_RANGE - 1                                                                                           |
|                                                   |   Continued on next page.                       |   Continued on next page.                       |   Continued on next page.                                                                                                                                          |

<!-- image -->

<!-- image -->

Table 51: Reference Switch Configuration 0x01

| REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)   | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                                           | REFERENCE_CONF 0x01 (Default value: 0x00000000)                                                           |
|---------------------------------------------------|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| R/W                                               | Bit                                               | Val                                                                                                       | Remarks                                                                                                   |
| RW                                                | 24:23                                             | pos_comp_output                                                                                           | pos_comp_output                                                                                           |
| RW                                                | 24:23                                             | 0                                                                                                         | TARGET_REACHED is set active on TARGET_REACHED_F lag.                                                     |
| RW                                                | 24:23                                             | 1                                                                                                         | TARGET_REACHED is set active on VELOCITY_REACHED_F lag.                                                   |
| RW                                                | 24:23                                             | 2                                                                                                         | TARGET_REACHED is set active on ENC_FAIL flag.                                                            |
| RW                                                | 24:23                                             | 3                                                                                                         | TARGET_REACHED triggers on POSCOMP_REACHED_F lag.                                                         |
| RW                                                | 25                                                | pos_comp_source                                                                                           | pos_comp_source                                                                                           |
| RW                                                | 25                                                | 0                                                                                                         | POS_COMP is compared to internal position XACTUAL .                                                       |
| RW                                                | 25                                                | 1                                                                                                         | POS_COMP is compared with external position ENC_POS .                                                     |
| RW                                                | 27:26                                             | Reserved. Set to 0x0.                                                                                     | Reserved. Set to 0x0.                                                                                     |
| RW                                                | 29:28                                             | modified_pos_compare: POS_COMP_REACHED_F / event is based on comparison between XACTUAL resp. ENC_POS and | modified_pos_compare: POS_COMP_REACHED_F / event is based on comparison between XACTUAL resp. ENC_POS and |
| RW                                                | 29:28                                             | 0                                                                                                         | POS_COMP                                                                                                  |
| RW                                                | 29:28                                             | 1                                                                                                         | X_HOME                                                                                                    |
| RW                                                | 29:28                                             | 2                                                                                                         | X_LATCH resp. ENC_LATCH                                                                                   |
| RW                                                | 29:28                                             | 3                                                                                                         | REV_CNT                                                                                                   |
| RW                                                | 30                                                | Reserved. Set to 0.                                                                                       | Reserved. Set to 0.                                                                                       |
| RW                                                | 31                                                | circular_enc_en                                                                                           | circular_enc_en                                                                                           |
| RW                                                | 31                                                | 0                                                                                                         | Range of ENC_POS is not limited: -2 31 ≤ ENC_POS ≤ 2 31 -1                                                |
| RW                                                | 31                                                | 1                                                                                                         | Range of ENC_POS is limited by X_RANGE : - X_RANGE ≤ ENC_POS ≤ X_RANGE -1                                 |

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
|                                               | 3                                             |                                               | Double-stage shadow registers for trapezoidal ramps (excl. VSTART ).                                                                                                |
|                                               |   Continued on next page.                   |   Continued on next page.                   |   Continued on next page.                                                                                                                                         |

<!-- image -->

<!-- image -->

Table 52: Start Switch Configuration START\_CONF 0x02

<!-- image -->

| START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)   | START_CONF 0x02 (Default value: 0x00000000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                           | Bit                                           | Val                                           | Remarks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RW                                            | 18                                            | cyclic_shadow_regs                            | cyclic_shadow_regs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| RW                                            | 18                                            | 0                                             | Current ramp parameters are not written back to the shadow register.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| RW                                            | 18                                            | 1                                             | Current ramp parameters are written back to the appropriate shadow register.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| RW                                            | 19                                            | Reserved. Set to 0.                           | Reserved. Set to 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| RW                                            | 23:20                                         | SHADOW_MISS_CNT                               | SHADOW_MISS_CNT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| RW                                            | 23:20                                         | U                                             | Number of unused start internal start signals between two consecutive shadow register transfers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| RW                                            | 31:24                                         | XPIPE_REWRITE_REG                             | XPIPE_REWRITE_REG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| RW                                            | 31:24                                         |                                               | Current assigned pipeline registers - START_CONF (15:12) - are written back to X_PIPEx in the case of an internal start signal generation and if assigned in this register with a '1': XPIPE_REWRITE_REG (0)  X_PIPE0 XPIPE_REWRITE_REG (1)  X_PIPE1 XPIPE_REWRITE_REG (2)  X_PIPE2 XPIPE_REWRITE_REG (3)  X_PIPE3 XPIPE_REWRITE_REG (4)  X_PIPE4 XPIPE_REWRITE_REG (5)  X_PIPE5 XPIPE_REWRITE_REG (6)  X_PIPE6 XPIPE_REWRITE_REG (7)  X_PIPE7 Ex.: START_CONF (15:12) = b'0011. START_CONF (31:24) = b'01000010. If an internal start signal is generated, the value of X_TARGET is written back to X_PIPE1 , whereas the value of POS_COMP is written back to X_PIPE6 . |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Input Filter Configuration Register INPUT\_FILT\_CONF 0x03

Table 53: Input Filter Configuration Register INPUT\_FILT\_CONF 0x03

<!-- image -->

| INPUT_FILT_CONF 0x03 (Default value: 0x00000000)   | INPUT_FILT_CONF 0x03 (Default value: 0x00000000)   | INPUT_FILT_CONF 0x03 (Default value: 0x00000000)   | INPUT_FILT_CONF 0x03 (Default value: 0x00000000)                                                                                                                           |
|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                | Bit                                                | Val                                                | Remarks                                                                                                                                                                    |
| RW                                                 | 2:0                                                | SR_ENC_IN                                          | SR_ENC_IN                                                                                                                                                                  |
|                                                    | 2:0                                                | U                                                  | Input sample rate = f clk / 2 SR_ENC_IN for the following pins: A_SCLK, ANEG_NSCLK, B_SDI, BNEG_NSDI, N, NNEG                                                              |
|                                                    | 3                                                  | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                                        |
|                                                    | 6:4                                                | FILT_L_ENC_IN                                      | FILT_L_ENC_IN                                                                                                                                                              |
|                                                    | 6:4                                                | U                                                  | Filter length for these pins: A_SCLK, ANEG_NSCLK, B_SDI, BNEG_NSDI, N, NNEG. Number of sample input bits that must have equal voltage levels to provide a valid input bit. |
|                                                    | 7                                                  | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                                        |
|                                                    | 10:8                                               | SR_REF                                             | SR_REF                                                                                                                                                                     |
|                                                    | 10:8                                               | U                                                  | Input sample rate = f clk / 2 REF for the following pins: STOPL, HOME_REF, STOPL                                                                                           |
|                                                    | 11                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                                        |
|                                                    | 14:12                                              | FILT_L_REF                                         | FILT_L_REF                                                                                                                                                                 |
|                                                    | 14:12                                              | U                                                  | Filter length for the following pins: STOPL, HOME_REF, STOPL. Number of sample input bits that must have equal voltage levels to provide a valid input bit.                |
|                                                    | 15                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                                        |
|                                                    | 18:16                                              | SR_S                                               | SR_S                                                                                                                                                                       |
|                                                    | 18:16                                              | U                                                  | Input sample rate = f clk / 2 S for the START pin.                                                                                                                         |
|                                                    | 19                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                                        |
|                                                    | 22:20                                              | FILT_L_S                                           | FILT_L_S                                                                                                                                                                   |
|                                                    | 22:20                                              | U                                                  | Filter length for the START pin. Number of sample input bits that must have equal voltage levels to provide a valid input bit.                                             |
|                                                    | 23                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                                        |
|                                                    | 26:24                                              | SR_SD_IN                                           | SR_SD_IN                                                                                                                                                                   |
|                                                    | 26:24                                              | U                                                  | Input sample rate = f clk / 2 SR_SD_IN for these pins: STPIN, DIRIN                                                                                                        |
|                                                    | 27                                                 | Reserved. Set to 0.                                | Reserved. Set to 0.                                                                                                                                                        |
|                                                    |                                                    | FILT_L_ENC_OUT                                     | FILT_L_ENC_OUT                                                                                                                                                             |
|                                                    | 30:28                                              | U                                                  | Filter length for the following pins: STPIN, DIRIN. Number of sample input bits that must have equal voltage levels to provide a valid input bit.                          |
|                                                    | 31                                                 |                                                    | Reserved. Set to 1 .                                                                                                                                                       |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Scaling Configuration Register SCALE\_CONF 0x05

Table 54: Current Scale Configuration (0x05)

<!-- image -->

| SCALE_CONF 0x05 (Default: 0x00000000)   | SCALE_CONF 0x05 (Default: 0x00000000)   | SCALE_CONF 0x05 (Default: 0x00000000)   | SCALE_CONF 0x05 (Default: 0x00000000)                                                                                                                                                                        |
|-----------------------------------------|-----------------------------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                     | Bit                                     | Val                                     | Remarks                                                                                                                                                                                                      |
| RW                                      | 0                                       | stdby_en                                | stdby_en                                                                                                                                                                                                     |
| RW                                      | 0                                       | 0                                       | Standby phase is disabled.                                                                                                                                                                                   |
| RW                                      | 0                                       | 1                                       | Standby phase is enabled.                                                                                                                                                                                    |
| RW                                      | 7:1                                     | Reserved. Set to 0x00.                  | Reserved. Set to 0x00.                                                                                                                                                                                       |
| RW                                      | 8                                       | pwm_scale_en                            | pwm_scale_en                                                                                                                                                                                                 |
| RW                                      | 8                                       | 0                                       | PWM scaling is disabled.                                                                                                                                                                                     |
| RW                                      | 8                                       | 1                                       | PWM scaling is enabled.                                                                                                                                                                                      |
| RW                                      | 15:9                                    | Reserved. Set to 0x00.                  | Reserved. Set to 0x00.                                                                                                                                                                                       |
| RW                                      | 31:16                                   | PWM_AMPL                                | PWM_AMPL                                                                                                                                                                                                     |
| RW                                      | 31:16                                   | U                                       | PWM amplitude during Voltage PWM mode at VACTUAL = 0. i Maximum duty cycle = (0.5 + ( PWM_AMPL + 1) / 2 17 ) Minimum duty cycle = (0.5 - ( PWM_AMPL + 1) / 2 17 ) PWM_AMPL = 2 16 - 1 at VACTUAL = PWM_VMAX. |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Encoder Signal Configuration (0x07)

<!-- image -->

| ENC_IN_CONF 0x07 (Default 0x00000400)   | ENC_IN_CONF 0x07 (Default 0x00000400)   | ENC_IN_CONF 0x07 (Default 0x00000400)   | ENC_IN_CONF 0x07 (Default 0x00000400)                                                                                                                                            |
|-----------------------------------------|-----------------------------------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                     | Bit                                     | Val                                     | Description                                                                                                                                                                      |
|                                         | 0                                       | enc_sel_decimal                         | enc_sel_decimal                                                                                                                                                                  |
|                                         | 0                                       | 0                                       | Encoder constant represents a binary number.                                                                                                                                     |
|                                         | 0                                       | 1                                       | Encoder constant represents a decimal number (for ABN only).                                                                                                                     |
| RW                                      | 1                                       | clear_on_n                              | clear_on_n                                                                                                                                                                       |
| RW                                      | 1                                       | 0                                       | ENC_POS is not set to ENC_RESET_VAL .                                                                                                                                            |
| RW                                      | 1                                       | 1                                       | ENC_POS is set to ENC_RESET_VAL on every N event in case clr_latch_cont_on_n =1, or on the next N event in case clr_latch_once_on_n =1. Do NOT use during closed-loop operation. |
|                                         | 2                                       | clr_latch_cont_on_n                     | clr_latch_cont_on_n                                                                                                                                                              |
|                                         | 2                                       | 0                                       | Value of ENC_POS is not cleared and/or latched on every N event.                                                                                                                 |
|                                         | 2                                       | 1                                       | Value of ENC_POS is cleared and/or latched on every N event.                                                                                                                     |
|                                         |                                         | clr_latch_once_on_n                     | clr_latch_once_on_n                                                                                                                                                              |
|                                         | 3                                       | 0                                       | Value of ENC_POS is not cleared and/or latched on the next N event.                                                                                                              |
|                                         |                                         | 1                                       | Value of ENC_POS is cleared and/or latched on the next N event. i This bit is set to 0 after latching/clearing once.                                                             |
|                                         | 4                                       | pol_n                                   | pol_n                                                                                                                                                                            |
|                                         | 4                                       | 0                                       | Active polarity for N event is low active.                                                                                                                                       |
|                                         | 4                                       | 1                                       | Active polarity for N event is high active.                                                                                                                                      |
|                                         | 6:5                                     | n_chan_sensitivity                      | n_chan_sensitivity                                                                                                                                                               |
|                                         | 6:5                                     | 0                                       | N event is active as long as N equals active N event polarity.                                                                                                                   |
|                                         | 6:5                                     | 1                                       | N event triggers when N switches to active N event polarity.                                                                                                                     |
|                                         | 6:5                                     | 2                                       | N event triggers when N switches to inactive N event polarity.                                                                                                                   |
|                                         | 6:5                                     | 3                                       | N event triggers when N switches to in-/active N event polarity (both slopes).                                                                                                   |
|                                         | 7                                       | pol_a_for_n                             | pol_a_for_n                                                                                                                                                                      |
|                                         | 7                                       | 0                                       | A polarity has to be low for a valid N event.                                                                                                                                    |
|                                         | 7                                       | 1                                       | A polarity has to be high for a valid N event.                                                                                                                                   |
|                                         | 8                                       | pol_b_for_n                             | pol_b_for_n                                                                                                                                                                      |
|                                         | 8                                       | 0                                       | B polarity has to be low for valid N event                                                                                                                                       |
|                                         | 8                                       | 1                                       | B polarity has to be high for valid N event                                                                                                                                      |
|                                         | 9                                       | ignore_ab                               | ignore_ab                                                                                                                                                                        |
|                                         | 9                                       | 0                                       | TMC4330A considers A and B polarities for valid N event.                                                                                                                         |
|                                         | 9                                       | 1                                       | Polarities of A and B signals for a valid N event are ignored.                                                                                                                   |
|   Continued on next page.             |   Continued on next page.             |   Continued on next page.             |   Continued on next page.                                                                                                                                                      |

<!-- image -->

<!-- image -->

<!-- image -->

|    | Val                                                                                                                                                                                            | ENC_IN_CONF 0x07 (Default 0x00000400)                                                                                                                                                          |
|----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | latch_enc_on_n                                                                                                                                                                                 | latch_enc_on_n                                                                                                                                                                                 |
|    | 0                                                                                                                                                                                              | ENC_POS is not latched.                                                                                                                                                                        |
|    | 1                                                                                                                                                                                              | ENC_POS is latched to ENC_LATCH on every N event in case clr_latch_cont_on_n =1, or on the next N event in case clr_latch_once_on_n =1.                                                        |
| 11 | latch_x_on_n                                                                                                                                                                                   | latch_x_on_n                                                                                                                                                                                   |
| 11 | 0                                                                                                                                                                                              | XACTUAL is not latched.                                                                                                                                                                        |
| 11 | 1                                                                                                                                                                                              | XACTUAL is latched to X_LATCH on every N event in case clr_latch_cont_on_n =1, or on the next N event in case clr_latch_once_on_n =1.                                                          |
|    | multi_turn_in_en (Absolute encoder only)                                                                                                                                                       | multi_turn_in_en (Absolute encoder only)                                                                                                                                                       |
|    | 0                                                                                                                                                                                              | Connected serial encoder transmits singleturn values.                                                                                                                                          |
|    | 1                                                                                                                                                                                              | Connected serial encoder input transmits singleturn and multiturn values.                                                                                                                      |
| 13 | multi_turn_in_signed (Absolute encoder only)                                                                                                                                                   | multi_turn_in_signed (Absolute encoder only)                                                                                                                                                   |
| 13 | 0                                                                                                                                                                                              | Multiturn values from serial encoder input are unsigned numbers.                                                                                                                               |
| 13 | 1                                                                                                                                                                                              | Multiturn values from serial encoder input are signed numbers.                                                                                                                                 |
| 14 | Reserved. Set to 0.                                                                                                                                                                            | Reserved. Set to 0.                                                                                                                                                                            |
| 14 | 0                                                                                                                                                                                              | X_RANGE is valid in case circular motion is also enabled for encoders.                                                                                                                         |
| 14 | 1                                                                                                                                                                                              | USTEPS_PER_REV is valid in case circular motion is also enabled for encoders.                                                                                                                  |
| 14 | calc_multi_turn_behav (Absolute encoder only)                                                                                                                                                  | calc_multi_turn_behav (Absolute encoder only)                                                                                                                                                  |
|    | 0                                                                                                                                                                                              | No multiturn calculation.                                                                                                                                                                      |
|    | 1                                                                                                                                                                                              | TMC4330A calculates internally multiturn data for singleturn encoder data.                                                                                                                     |
| 18 |                                                                                                                                                                                                |                                                                                                                                                                                                |
| 18 | 0 1                                                                                                                                                                                            | Every SSI value request is executed once.                                                                                                                                                      |
| 18 |                                                                                                                                                                                                | Every SSI value request is executed twice.                                                                                                                                                     |
| 19 | ssi_gray_code_en (Absolute encoder only)                                                                                                                                                       | ssi_gray_code_en (Absolute encoder only)                                                                                                                                                       |
| 19 | 0                                                                                                                                                                                              | SSI input data is binary-coded.                                                                                                                                                                |
| 19 | 1                                                                                                                                                                                              | SSI input data is gray-coded.                                                                                                                                                                  |
|    | left_aligned_data (Absolute encoder only) Serial input data is aligned right (first flags, then data). Serial input data is aligned left (first data, then flags).   Continued on next page. | left_aligned_data (Absolute encoder only) Serial input data is aligned right (first flags, then data). Serial input data is aligned left (first data, then flags).   Continued on next page. |

<!-- image -->

<!-- image -->

|                             |                                           | ENC_IN_CONF 0x07 (Default 0x00000400)                                                                                                                                                                              |
|-----------------------------|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                             | spi_data_on_cs (SPI encoder               | spi_data_on_cs (SPI encoder                                                                                                                                                                                        |
|                             | 0                                         | BNEG_NSDI provides serial output data at next serial clock line (A_SCLK) transition.                                                                                                                               |
|                             | 1                                         | BNEG_NSDI provides serial output data immediately in case negated chip select line ANEG_NSCLK switches to low level.                                                                                               |
|                             | spi_low_before_cs (SPI encoder only)      | spi_low_before_cs (SPI encoder only)                                                                                                                                                                               |
|                             | 0                                         | Serial clock line A_SCLK switches to low level after negated chip select line ANEG_NSCLK switches to low level.                                                                                                    |
|                             | 1                                         | Serial clock line A_SCLK switches to low level before negated chip select line ANEG_NSCLK switches to low level.                                                                                                   |
|                             | regulation_modus                          | regulation_modus                                                                                                                                                                                                   |
|                             | 0                                         | No internal regulation on encoder feedback data.                                                                                                                                                                   |
|                             | 1                                         | Closed-loop operation is enabled. Use full microstep resolution only! (256 µSteps/FS  MSTEPS_PER_FS=0).                                                                                                           |
|                             | 2                                         | PID regulation is enabled. Pulse generator base velocity equals 0.                                                                                                                                                 |
|                             | 3                                         | PID regulation is enabled. Pulse generator base velocity equals VACTUAL .                                                                                                                                          |
|                             | cl_calibration_en (Closed-loop            | cl_calibration_en (Closed-loop                                                                                                                                                                                     |
|                             | 0                                         | Closed-loop calibration is deactivated.                                                                                                                                                                            |
|                             | 1                                         | Closed-loop calibration is active. Use maximum current without scaling during calibration. It is recommend to keep the motor driver at fullstep position with no motion occurrence during the calibration process. |
|                             | cl_emf_en (Closed-loop operation only)    | cl_emf_en (Closed-loop operation only)                                                                                                                                                                             |
|                             | 0                                         | Back-EMF compensation deactivated during closed-loop operation.                                                                                                                                                    |
|                             | 1                                         | Back-EMF compensation is enabled during closed-loop operation. Closed-loop operation compensates Back-EMF in case &#124; VACTUAL &#124; > CL_VMIN .                                                                |
|                             | cl_clr_xact (Closed-loop operation only)  | cl_clr_xact (Closed-loop operation only)                                                                                                                                                                           |
|                             | 0                                         | XACTUAL is not reset to ENC_POS during closed-loop operation.                                                                                                                                                      |
|                             | 1                                         | XACTUAL is set to ENC_POS in case &#124; ENC_POS_DEV &#124; > ENC_POS_DEV_TOL during closed-loop operation. This feature must only be used if understood completely.                                               |
|                             | cl_vlimit_en (Closed-loop operation only) | cl_vlimit_en (Closed-loop operation only)                                                                                                                                                                          |
|                             | 0                                         | No catch-up velocity limit during closed-loop regulation.                                                                                                                                                          |
|                             | 1                                         | Catch-up velocity during closed-loop operation is limited by internal PI regulator.                                                                                                                                |
|                             | cl_velocity_mode_en                       | cl_velocity_mode_en                                                                                                                                                                                                |
|                             | 0                                         | Closed-loop velocity mode is deactivated.                                                                                                                                                                          |
|                             | 1                                         | Closed-loop velocity mode is deactivated. In case &#124; ENC_POS_DEV &#124; > 768, XACTUAL is adjusted accordingly.                                                                                                |
|                             | invert_enc_dir                            | invert_enc_dir                                                                                                                                                                                                     |
|                             | 0                                         | Encoder direction is NOT inverted internally.                                                                                                                                                                      |
|                             | 1                                         | Encoder direction is inverted internally.                                                                                                                                                                          |
|   Continued on next page. |   Continued on next page.               |   Continued on next page.                                                                                                                                                                                        |

<!-- image -->

<!-- image -->

Table 55: Encoder Signal Configuration ENC\_IN\_CONF (0x07)

<!-- image -->

| ENC_IN_CONF 0x07 (Default 0x00000400)   | ENC_IN_CONF 0x07 (Default 0x00000400)   | ENC_IN_CONF 0x07 (Default 0x00000400)         | ENC_IN_CONF 0x07 (Default 0x00000400)                                                                                                                                                                                                  |
|-----------------------------------------|-----------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                     | Bit                                     | Val                                           | Description                                                                                                                                                                                                                            |
| RW                                      | 30                                      | Reserved. Set to 0x0.                         | Reserved. Set to 0x0.                                                                                                                                                                                                                  |
| RW                                      | 31                                      | no_enc_vel_preproc (Incremental ABN encoder)  | no_enc_vel_preproc (Incremental ABN encoder)                                                                                                                                                                                           |
| RW                                      | 31                                      | 0                                             | AB signal is preprocessed for internal encoder velocity calculation.                                                                                                                                                                   |
| RW                                      | 31                                      | 1                                             | No AB signal preprocessing. It is recommend to maintain AB preprocessing in order to filter encoder resonances.                                                                                                                        |
| RW                                      | 31                                      | serial_enc_variation_limit (Absolute encoder) | serial_enc_variation_limit (Absolute encoder)                                                                                                                                                                                          |
| RW                                      | 31                                      | 0                                             | No variation limit on absolute encoder data.                                                                                                                                                                                           |
| RW                                      | 31                                      | 1                                             | Two consecutive serial encoder values must no deviate from specified limit to be valid. In case &#124; ENC_POS X - ENC_POS X-1 &#124; > 1/8 · SER_ENC_VARIATION · ENC_IN_RES , ENC_POS X is not valid and is not assigned to ENC_POS . |

## Serial Encoder Data Input Configuration (0x08)

Table 56: Serial Encoder Data Input Configuration ENC\_IN\_DATA (0x08)

<!-- image -->

| ENC_IN_DATA 0x08 (Default: 0x00000000)   | ENC_IN_DATA 0x08 (Default: 0x00000000)   | ENC_IN_DATA 0x08 (Default: 0x00000000)              | ENC_IN_DATA 0x08 (Default: 0x00000000)                                                           |
|------------------------------------------|------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------|
| R/W                                      | Bit                                      | Val                                                 | Remarks                                                                                          |
| RW                                       | 4:0                                      | SINGLE_TURN_RES (Default: 0x00)                     | SINGLE_TURN_RES (Default: 0x00)                                                                  |
| RW                                       | 4:0                                      | U                                                   | Number of angle data bits within one revolution = SINGLE_TURN_RES + 1. Set SINGLE_TURN_RES < 31. |
| RW                                       | 9:5                                      | MULTI_TURN_RES (Default: 0x00)                      | MULTI_TURN_RES (Default: 0x00)                                                                   |
| RW                                       | 9:5                                      | U                                                   | Number of data bits for revolution count = MULTI_TURN_RES + 1                                    |
| RW                                       | 11:10                                    | STATUS_BIT_CNT (Default: 0x0)                       | STATUS_BIT_CNT (Default: 0x0)                                                                    |
| RW                                       | 11:10                                    | U                                                   | Number of status data bits                                                                       |
| RW                                       | 15:12                                    | Reserved. Set to 0x0.                               | Reserved. Set to 0x0.                                                                            |
| RW                                       | 23:16                                    | SERIAL_ADDR_BITS (Default: 0x00) (SPI encoder only) | SERIAL_ADDR_BITS (Default: 0x00) (SPI encoder only)                                              |
| RW                                       | 23:16                                    | U                                                   | Number of address bits within one SPI datagram for SPI encoder configuration                     |
| RW                                       | 31:24                                    | SERIAL_DATA_BITS (Default: 0x00) (SPI encoder only) | SERIAL_DATA_BITS (Default: 0x00) (SPI encoder only)                                              |
| RW                                       | 31:24                                    | U                                                   | Number of data bits within one SPI datagram for SPI encoder configuration                        |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Microstep Settings Register STEP\_CONF 0x0A

Table 57: Motor Driver Settings (0x0A)

| STEP_CONF 0x0A (Default: 0x00FB0C80)   | STEP_CONF 0x0A (Default: 0x00FB0C80)   | STEP_CONF 0x0A (Default: 0x00FB0C80)   | STEP_CONF 0x0A (Default: 0x00FB0C80)                                                                                                                                                                                                                                            |
|----------------------------------------|----------------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                    | Bit                                    | Val                                    | Remarks                                                                                                                                                                                                                                                                         |
| RW                                     | 3:0                                    | MSTEP_PER_FS (Default: 0x0)            | MSTEP_PER_FS (Default: 0x0)                                                                                                                                                                                                                                                     |
| RW                                     | 3:0                                    | 0                                      | Highest microsteps resolution: 256 microsteps per fullstep. i Set to 256 for closed-loop operation. i When using a Step/Dir driver, it must be capable of a 256 resolution via Step/Dir input for best performance (but lower resolution Step/Dir drivers can be used as well). |
| RW                                     | 3:0                                    | 1                                      | 128 microsteps per fullstep.                                                                                                                                                                                                                                                    |
| RW                                     | 3:0                                    | 2                                      | 64 microsteps per fullstep.                                                                                                                                                                                                                                                     |
| RW                                     | 3:0                                    | 3                                      | 32 microsteps per fullstep.                                                                                                                                                                                                                                                     |
| RW                                     | 3:0                                    | 4                                      | 16 microsteps per fullstep.                                                                                                                                                                                                                                                     |
| RW                                     | 3:0                                    | 5                                      | 8 microsteps per fullstep.                                                                                                                                                                                                                                                      |
| RW                                     | 3:0                                    | 6                                      | 4 microsteps per fullstep.                                                                                                                                                                                                                                                      |
| RW                                     | 3:0                                    | 7                                      | Halfsteps: 2 microsteps per fullstep.                                                                                                                                                                                                                                           |
| RW                                     | 3:0                                    | 8                                      | Full steps (maximum possible setting)                                                                                                                                                                                                                                           |
| RW                                     | 15:4                                   | FS_PER_REV (Default: 0x0C8)            | FS_PER_REV (Default: 0x0C8)                                                                                                                                                                                                                                                     |
| RW                                     | 15:4                                   | U                                      | Fullsteps per motor axis revolution                                                                                                                                                                                                                                             |
| RW                                     | 31:16                                  | Reserved. Set to 0x0000.               | Reserved. Set to 0x0000.                                                                                                                                                                                                                                                        |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Event Selection Registers 0x0B..0X0D

Table 58: Event Selection Regsiters 0x0B…0x0D

| Event Selection Registers   | Event Selection Registers   | Event Selection Registers                  | Event Selection Registers                                                                                                                                                                                                                        |
|-----------------------------|-----------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                         | Addr                        | Bit                                        | Remarks                                                                                                                                                                                                                                          |
| RW                          | 0x0B                        | SPI_STATUS_SELECTION (Default: 0x82029805) | SPI_STATUS_SELECTION (Default: 0x82029805)                                                                                                                                                                                                       |
| RW                          | 0x0B                        | 31:0                                       | Events selection for SPI datagrams: Event bits of EVENTS register 0x0E that are selected (=1) in this register are forwarded to the eight status bits that are transferred with every SPI datagram (first eight bits from LSB are significant!). |
| RW                          | 0x0C                        | EVENT_CLEAR_CONF ( Default: 0x00000000)    | EVENT_CLEAR_CONF ( Default: 0x00000000)                                                                                                                                                                                                          |
| RW                          | 0x0C                        | 31:0                                       | Event protection configuration: Event bits of EVENTS register 0x0E that are selected in this register (=1) are not cleared during the readout process of EVENTS register 0x0E.                                                                   |
| RW                          | 0x0D                        | INTR_CONF ( Default: 0x00000000)           | INTR_CONF ( Default: 0x00000000)                                                                                                                                                                                                                 |
| RW                          | 0x0D                        | 31:0                                       | Event selection for INTR output: All Event bits of EVENTS register 0x0E that are selected here (=1) are ORed with interrupt event register set: if any of the selected events is active, an interrupt at INTR is generated.                      |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Status Event Register (0x0E)

Table 59: Status Event Register EVENTS (0x0E)

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
|                                     | 17                                  | Reserved.                                                                                                                                                                                   |
|                                     | 18                                  | ENC _ FAIL : Mismatch between XACTUAL and ENC _ POS has exceeded specified limit.                                                                                                           |
|                                     | 19                                  | N_ACTIVE: N event has been activated.                                                                                                                                                       |
|                                     | 20                                  | ENC_DONE indicates if ENC_LATCH was rewritten.                                                                                                                                              |
|                                     | 21                                  | SER_ENC_DATA_FAIL: Failure during multi-cycle data evaluation or between two consecutive data requests has occured.                                                                         |
|                                     | 22                                  | Reserved.                                                                                                                                                                                   |
|                                     | 23                                  | SER_DATA_DONE: Configuration data was received from serial SPI encoder.                                                                                                                     |
|                                     | 24                                  | One of the SERIAL _ ENC _ F lags was set.                                                                                                                                                   |
|                                     | 25                                  | Reserved.                                                                                                                                                                                   |
|                                     | 26                                  | ENC_VEL0: Encoder velocity has reached 0.                                                                                                                                                   |
|                                     | 27                                  | CL_MAX: Closed-loop commutation angle has reached maximum value.                                                                                                                            |
|                                     | 28                                  | CL_FIT: Closed-loop deviation has reached inner limit.                                                                                                                                      |
|                                     | 29                                  | Reserved.                                                                                                                                                                                   |
|                                     | 30                                  | Reserved.                                                                                                                                                                                   |
|                                     | 31                                  | RST_EV : Reset was triggered.                                                                                                                                                               |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Status Flag Register (0x0F)

Table 60: Status Flag Register STATUS (0x0F)

| Status Flag Register STATUS 0x0F   | Status Flag Register STATUS 0x0F   | Status Flag Register STATUS 0x0F                                                                                                                                                   |
|------------------------------------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                | Bit                                | Description                                                                                                                                                                        |
| R                                  | 0                                  | TARGET_REACHED_F is set high if XACTUAL = XTARGET                                                                                                                                  |
|                                    | 1                                  | POS_COMP_REACHED_F is set high if XACTUAL = POS_COMP                                                                                                                               |
|                                    | 2                                  | VEL_REACHED_F is set high if VACTUAL = &#124; VMAX                                                                                                                                 |
|                                    | 4:3                                | &#124; VEL_STATE_F : Current velocity state: 0  VACTUAL = 0; 1  VACTUAL > 0;                                                                                                     |
|                                    | 6:5                                | RAMP_STATE_F : Current ramp state: 0  AACTUAL = 0; 1  AACTUAL increases (acceleration); 2  AACTUAL decreases (deceleration)                                                     |
|                                    | 7                                  | STOPL_ACTIVE_F : Left stop switch is active.                                                                                                                                       |
|                                    | 8                                  | STOPR_ACTIVE_F : Right stop switch is active.                                                                                                                                      |
|                                    | 9                                  | VSTOPL_ACTIVE_F : Left virtual stop switch is active.                                                                                                                              |
|                                    | 10                                 | VSTOPR_ACTIVE_F : Right virtual stop switch is active.                                                                                                                             |
|                                    | 11                                 | Reserved.                                                                                                                                                                          |
|                                    | 12                                 | HOME_ERROR_F : HOME_REF input signal level is not equal to expected home level.                                                                                                    |
|                                    | 13                                 | Reserved.                                                                                                                                                                          |
|                                    | 14                                 | ENC_FAIL_F : Mismatch between XACTUAL and ENC_POS is out of tolerated range.                                                                                                       |
|                                    | 15                                 | N_ACTIVE_F : N event is active.                                                                                                                                                    |
|                                    | 16                                 | ENC_LATCH_F : ENC_LATCH is rewritten.                                                                                                                                              |
|                                    | 17                                 | Applies to absolute encoders only: MULTI_CYCLE_FAIL_F indicates a failure during last multi cycle data evaluation.                                                                 |
|                                    | 17                                 | Applies to absolute encoders only: SER_ENC_VAR_F indicates a failure during last serial data evaluation due to a substantial deviation between two consecutive serial data values. |
|                                    | 18                                 | Reserved.                                                                                                                                                                          |
|                                    | 19                                 | CL_FIT_F : Active if ENC_POS_DEV < CL_TOLERANCE. The current mismatch between XACTUAL and ENC_POS is within tolerated range.                                                       |
|                                    | 23:20                              | Applies to absolute encoders only: SERIAL_ENC_F LAGS received from encoder. These flags are reset with a new encoder transfer request.                                             |
|                                    | 31:24                              | Reserved.                                                                                                                                                                          |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Various Configuration Registers: Synchronization, PWM, etc.

Table 61: Various Configuration Registers: Synchronization, PWM, etc.

<!-- image -->

| Various Configuration Registers: Closed-loop, Switches…   | Various Configuration Registers: Closed-loop, Switches…   | Various Configuration Registers: Closed-loop, Switches…   | Various Configuration Registers: Closed-loop, Switches…   | Various Configuration Registers: Closed-loop, Switches…                                                                                                                     |
|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                       | Addr                                                      | Bit                                                       | Val Description                                           | Val Description                                                                                                                                                             |
| RW                                                        | 0x04                                                      | 31:0                                                      | Reserved. Set to 0x00000000.                              | Reserved. Set to 0x00000000.                                                                                                                                                |
|                                                           | 0x10                                                      | 15:0                                                      | STP_LENGTH_ADD (Default: 0x0000)                          | STP_LENGTH_ADD (Default: 0x0000)                                                                                                                                            |
|                                                           | 0x10                                                      | 15:0                                                      | U                                                         | Additional length [# clock cycles] for active step polarity to indicate an active output step at STPOUT.                                                                    |
|                                                           |                                                           | 31:16                                                     | DIR_SETUP_TIME (Default: 0x0000)                          | DIR_SETUP_TIME (Default: 0x0000)                                                                                                                                            |
|                                                           |                                                           | 31:16                                                     | U                                                         | Delay [# clock cycles] between DIROUT and STPOUT voltage level changes.                                                                                                     |
|                                                           | 0x11                                                      | 31:0                                                      | START_OUT_ADD (Default:0x00000000)                        | START_OUT_ADD (Default:0x00000000)                                                                                                                                          |
|                                                           | 0x11                                                      | 31:0                                                      | U                                                         | Additional length [# clock cycles] for active start signal. Active start signal length = 1+START_OUT_ADD                                                                    |
|                                                           | 0x12                                                      | 31:0                                                      | GEAR_RATIO (Default:0x01000000)                           | GEAR_RATIO (Default:0x01000000)                                                                                                                                             |
|                                                           | 0x12                                                      | 31:0                                                      | S                                                         | Constant value that is added to the internal position counter by an active step at STPIN. Value representation: 8 digits and 24 decimal places.                             |
|                                                           | 0x13                                                      | 31:0                                                      | START_DELAY (Default:0x00000000)                          | START_DELAY (Default:0x00000000)                                                                                                                                            |
|                                                           | 0x13                                                      | 31:0                                                      | U                                                         | Delay time [# clock cycles] between start trigger and internal start signal release.                                                                                        |
|                                                           | 0x14                                                      | 31:0                                                      | CLK_GATING_DELAY (Default:0x00000000)                     | CLK_GATING_DELAY (Default:0x00000000)                                                                                                                                       |
|                                                           | 0x14                                                      | 31:0                                                      | U                                                         | Delay time [# clock cycles] between clock gating trigger and clock gating start.                                                                                            |
|                                                           | 0x15                                                      | 31:0                                                      | STDBY_DELAY (Default:0x00000000)                          | STDBY_DELAY (Default:0x00000000)                                                                                                                                            |
|                                                           | 0x15                                                      | 31:0                                                      | U                                                         | Delay time [# clock cycles] between ramp stop and activating standby phase.                                                                                                 |
|                                                           | 0x17                                                      | 23:0                                                      | PWM_VMAX (Default:0x00000000)                             | PWM_VMAX (Default:0x00000000)                                                                                                                                               |
|                                                           | 0x17                                                      | 23:0                                                      | U                                                         | PWM velocity value at which maximal scale parameter value 1.0 is reached.                                                                                                   |
|                                                           | 0x1E                                                      |                                                           | HOME_SAFETY_MARGIN (Default: 0x0000)                      | HOME_SAFETY_MARGIN (Default: 0x0000)                                                                                                                                        |
|                                                           | 0x1E                                                      | 15:0                                                      | U                                                         | HOME_REF polarity can be invalid within X_HOME ± HOME_SAFETY_MARGIN, which is not flagged as error.                                                                         |
|                                                           | 0x1F                                                      | 15:0                                                      | PWM_FREQ (Default: 0x0280)                                | PWM_FREQ (Default: 0x0280)                                                                                                                                                  |
|                                                           | 0x1F                                                      | 15:0                                                      | U                                                         | Number of clock cycles for one PWM period.                                                                                                                                  |
| W                                                         | 0x64                                                      | 31:0                                                      | Reserved. Set to 0x00000000.                              | Reserved. Set to 0x00000000.                                                                                                                                                |
| W                                                         | 0x64                                                      | 31:0                                                      | TZEROWAIT (Default:0x00000000)                            | TZEROWAIT (Default:0x00000000)                                                                                                                                              |
| W                                                         | 0x64                                                      | 31:0                                                      | U                                                         | Standstill phase after reaching VACTUAL = 0.                                                                                                                                |
| W                                                         | 0x64                                                      | 31:0                                                      | CIRCULAR_DEC (Default:0x00000000)                         | CIRCULAR_DEC (Default:0x00000000)                                                                                                                                           |
| W                                                         | 0x7C                                                      | 31:0                                                      | U                                                         | Decimal places for circular motion if one revolution is not exactly mapped to an even number of µSteps per revolution. Value representation: 1 digit and 31 decimal places. |

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
|                             |                             |                             |                               | Value representation: 23 digits and 8 decimal places Consider maximum values, represented in section 6.6.5, page 45                                            |
| RW                          | 0x25                        | 30:0                        | VSTART (Default: 0x00000000)  | VSTART (Default: 0x00000000)                                                                                                                                   |
| RW                          | 0x25                        | 30:0                        | U                             | Absolute start velocity in positioning mode and velocity mode In case VSTART is used: no first bow phase B 1 for S-shaped ramps                                |
| RW                          | 0x25                        | 30:0                        | U                             | VSTART in positioning mode: In case VACTUAL = 0 and XTARGET ≠ XACTUAL : no acceleration phase for VACTUAL = 0  VSTART.                                        |
| RW                          | 0x25                        | 30:0                        | U                             | VSTART in velocity mode: In case VACTUAL = 0 and VACTUAL ≠ VMAX : no acceleration phase for VACTUAL = 0  VSTART .                                             |
| RW                          | 0x25                        | 30:0                        | U                             | Value representation: 23 digits and 8 decimal places. Consider maximum values, represented in section 6.6.5, page 45                                           |
|   Continued on next page. |   Continued on next page. |   Continued on next page. |   Continued on next page.   |   Continued on next page.                                                                                                                                    |

<!-- image -->

<!-- image -->

<!-- image -->

| Ramp Generator Registers    | Ramp Generator Registers    | Ramp Generator Registers    | Ramp Generator Registers    | Ramp Generator Registers                                                                                                                                                                                                                                                                      |
|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                         | Addr                        | Bit                         | Val Description             | Val Description                                                                                                                                                                                                                                                                               |
|                             | 0x26                        | 30:0                        | VSTOP (Default:0x00000000)  | VSTOP (Default:0x00000000)                                                                                                                                                                                                                                                                    |
|                             | 0x26                        | 30:0                        | U                           | Absolute stop velocity in positioning mode and velocity mode. In case VSTOP is used: no last bow phase B 4 for S-shaped ramps. In case VSTOP is very small and positioning mode is used, it is possible that the ramp is finished with a constant VACTUAL = VSTOP until XTARGET is reached .  |
|                             | 0x26                        | 30:0                        | U                           | VSTOP in positioning mode: In case VACTUAL ≤ VSTOP and XTARGET = XACTUAL : VACTUAL is immediately set to 0.                                                                                                                                                                                   |
|                             | 0x26                        | 30:0                        | U                           | VSTOP in velocity mode: In case VACTUAL ≤ VSTOP and VMAX = 0: VACTUAL is immediately set to 0.                                                                                                                                                                                                |
|                             | 0x26                        | 30:0                        | U                           | Value representation: 23 digits and 8 decimal places. Consider maximum values, represented in section 6.6.5, page 45                                                                                                                                                                          |
| RW                          | 0x27                        | 30:0                        | VBREAK (Default:0x00000000) | VBREAK (Default:0x00000000)                                                                                                                                                                                                                                                                   |
|                             | 0x27                        | 30:0                        |                             | Absolute break velocity in positioning mode and in velocity mode, This only applies for trapezoidal ramp motion profiles. In case VBREAK = 0: pure linear ramps are generated with AMAX / DMAX only.                                                                                          |
|                             | 0x27                        | 30:0                        |                             | In case &#124; VACTUAL &#124; < VBREAK : &#124; AACTUAL &#124; = ASTART or DFINAL In case &#124; VACTUAL &#124; ≥ VBREAK : &#124; AACTUAL &#124; = AMAX or DMAX                                                                                                                               |
|                             | 0x27                        | 30:0                        |                             | Always set VBREAK > VSTOP ! If VBREAK ≠ 0.                                                                                                                                                                                                                                                    |
|                             | 0x27                        | 30:0                        |                             | Value representation: 23 digits and 8 decimal places. Consider maximum values, represented in section 6.6.5, page 45                                                                                                                                                                          |
|                             |                             |                             | AMAX (Default: 0x000000)    | AMAX (Default: 0x000000)                                                                                                                                                                                                                                                                      |
|                             |                             |                             | U                           | S-shaped ramp motion profile: Maximum acceleration value.                                                                                                                                                                                                                                     |
|                             |                             |                             | U                           | Trapezoidal ramp motion profile: Acceleration value in case &#124; VACTUAL &#124; ≥ VBREAK or in case VBREAK = 0.                                                                                                                                                                             |
|                             | 0x28                        | 23:0                        | U                           | Value representation: Frequency mode : [pulses per sec 2 ] 22 digits and 2 decimal places: 250 mpps 2 ≤ AMAX ≤ 4 Mpps 2 Direct mode: [∆v per clk cycle] a[∆v per clk_cycle]= AMAX / 2 37 AMAX [pps 2 ] = AMAX / 2 37 • f CLK 2 Consider maximum values, represented in section 6.6.5, page 45 |
|                             | 0x29                        | 23:0                        | DMAX (Default: 0x000000)    | DMAX (Default: 0x000000)                                                                                                                                                                                                                                                                      |
|                             | 0x29                        | 23:0                        | U                           | S-shaped ramp motion profile: Maximum deceleration value.                                                                                                                                                                                                                                     |
|                             | 0x29                        | 23:0                        | U                           | Trapezoidal ramp motion profile: Deceleration value if &#124; VACTUAL &#124; ≥ VBREAK or if VBREAK = 0.                                                                                                                                                                                       |
|   Continued on next page. |   Continued on next page. |   Continued on next page. |   Continued on next page. |   Continued on next page.                                                                                                                                                                                                                                                                   |

<!-- image -->

<!-- image -->

R/W Addr

0x2A

RW

<!-- image -->

0x2B

0x2C

Bit

23:0

31

23:0

23

U

U

U

## Ramp Generator Registers

Val Description

ASTART (Default: 0x000000)

S-shaped ramp motion profile: start acceleration value.

Trapezoidal ramp motion profile:

Acceleration value in case |VACTUAL| &lt; VBREAK.

Acceleration value after switching from external to internal step control.

Value representation:

Frequency mode

: [pulses per sec 2 ]

22 digits and 2 decimal places: 250 mpps 2  ≤ ASTART ≤ 4 Mpps 2

Direct mode:

[∆v per clk cycle]

a[∆v per clk\_cycle]= ASTART / 2 37

ASTART [pps 2 ] = ASTART / 2 37  • fCLK 2

Consider maximum values, represented in section 6.6.5, page 45

Sign of AACTUAL after switching from external to internal step control.

DFINAL (Default: 0x000000)

S-shaped ramp motion profile: Stop deceleration value, which is not used during positioning mode.

Trapezoidal ramp motion profile:

Deceleration value in case |VACTUAL| &lt; VBREAK.

Value representation:

Frequency mode

: [pulses per sec 2 ]

22 digits and 2 decimal places: 250 mpps 2  ≤ DFINAL ≤ 4 Mpps 2

Direct mode:

[∆v per clk cycle]

d[∆v per clk\_cycle]= DFINAL / 2 37

DFINAL [pps 2 ] = DFINAL / 2 37  • fCLK 2

Consider maximum values, represented in section 6.6.5, page 45

DSTOP (Default: 0x000000)

Deceleration value for an automatic linear stop ramp to VACTUAL = 0.

DSTOP is used with activated external stop switches (STOPL or STOPR) if soft\_stop\_enable is set to 1; or with activated virtual stop switches and

virt\_stop\_mode is set to 2.

Value representation:

Frequency mode

: [pulses per sec 2 ]

22 digits and 2 decimal places: 250 mpps 2  ≤ DSTOP ≤ 4 Mpps 2

Direct mode:

[∆v per clk cycle]

d[∆v per clk\_cycle]= DSTOP / 2 37

DSTOP [pps 2 ] = DSTOP / 2 37  • fCLK 2

Consider maximum values, represented in section 6.6.5, page 45

-   Continued on next page!

<!-- image -->

<!-- image -->

| Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers   | Ramp Generator Registers                                                                                                                                                                                                                                                                      |
|----------------------------|----------------------------|----------------------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                        | Addr                       | Bit                        | Val                        | Description                                                                                                                                                                                                                                                                                   |
| RW                         | 0x2D                       | 23:0                       | BOW1 (Default: 0x000000)   | BOW1 (Default: 0x000000)                                                                                                                                                                                                                                                                      |
| RW                         | 0x2D                       | 23:0                       | U                          | Bow value 1 (first bow B 1 of the acceleration ramp).                                                                                                                                                                                                                                         |
| RW                         | 0x2D                       | 23:0                       | U                          | Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW1 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle] bow[av per clk_cycle]= BOW1 / 2 53 BOW1 [pps 3 ] = BOW1 / 2 53 • f CLK 3 Consider maximum values, represented in section 6.6.5, page 45 |
|                            | 0x2E                       | 23:0                       | BOW2 (Default: 0x000000)   | BOW2 (Default: 0x000000)                                                                                                                                                                                                                                                                      |
|                            | 0x2E                       | 23:0                       | U                          | Bow value 2 (second bow B2 of the acceleration ramp).                                                                                                                                                                                                                                         |
|                            | 0x2E                       | 23:0                       | U                          | Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW2 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle] bow[av per clk_cycle]= BOW2 / 2 53 BOW2 [pps 3 ] = BOW2 / 2 53 • f CLK 3 Consider maximum values, represented in section 6.6.5, page 45 |
|                            | 0x2F                       | 23:0                       | BOW3 (Default: 0x000000)   | BOW3 (Default: 0x000000)                                                                                                                                                                                                                                                                      |
|                            | 0x2F                       | 23:0                       | U                          | Bow value 3 (first bow B3 of the deceleration ramp). Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW3 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle]                                                                                    |
|                            | 0x30                       | 23:0                       | U                          | Value representation: Frequency mode : [pulses per sec 3 ] 24 digits and 0 decimal places: 1 pps 3 ≤ BOW4 ≤ 16 Mpps 3 Direct mode: [∆a per clk cycle] bow[av per clk_cycle]= BOW4 / 2 53 BOW4 [pps 3 ] = BOW4 / 2 53 • f CLK 3 Consider maximum values, represented in section 6.6.5, page 45 |

Table 62: Ramp Generator Registers

<!-- image -->

<!-- image -->

## External Clock Frequency Register

Table 63: External Clock Frequency Register

| External Clock Frequency Register   | External Clock Frequency Register   | External Clock Frequency Register   | External Clock Frequency Register   | External Clock Frequency Register                                       |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------------------------------------------|
| R/W                                 | Addr                                | Bit                                 | Val                                 | Description                                                             |
| RW                                  | 0x31                                | 24:0                                | CLK_FREQ (Default: 0x0F42400)       | CLK_FREQ (Default: 0x0F42400)                                           |
| RW                                  | 0x31                                | 24:0                                | U                                   | External clock frequency value f CLK [Hz] with 4.2 MHz ≤ f CLK ≤ 30 MHz |

## Target and Compare Registers

Table 64: Target and Compare Registers

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

Table 65: Pipeline Register

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

Table 66: Shadow Register

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

Table 67: Reset and Clock Gating Register

| Reset and Clock Gating Register   | Reset and Clock Gating Register   | Reset and Clock Gating Register   | Reset and Clock Gating Register   | Reset and Clock Gating Register   |
|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| R/W                               | Addr                              | Bit                               | Val                               | Description                       |
| RW                                |                                   | 2:0                               | CLK_GATING_REG (Default: 0x0)     | CLK_GATING_REG (Default: 0x0)     |
| RW                                |                                   | 2:0                               | 0                                 | Clock gating is not activated.    |
| RW                                |                                   | 2:0                               | 7                                 | Clock gating is activated.        |
| RW                                |                                   | 31:8                              | RESET_REG (Default: 0x000000)     | RESET_REG (Default: 0x000000)     |
| RW                                |                                   | 31:8                              | 0                                 | No reset is activated.            |
| RW                                |                                   | 31:8                              | 0x525354                          | Internal reset is activated.      |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Encoder Registers

| Encoder Registers           | Encoder Registers           | Encoder Registers                                  | Encoder Registers                                                                                     |
|-----------------------------|-----------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| R/W                         | Addr                        | Bit Val Description                                | Bit Val Description                                                                                   |
| RW                          | 31:0                        | ENC_POS (Default: 0x00000000)                      | ENC_POS (Default: 0x00000000)                                                                         |
| RW                          | 31:0                        | S                                                  | Actual encoder position [µsteps].                                                                     |
|                             | 31:0                        | ENC_LATCH (Default: 0x00000000)                    | ENC_LATCH (Default: 0x00000000)                                                                       |
|                             | 31:0                        | S                                                  | Latched encoder position.                                                                             |
|                             | 31:0                        | ENC_RESET_VAL(Default: 0x00000000)                 | ENC_RESET_VAL(Default: 0x00000000)                                                                    |
| W                           | 31:0                        | S                                                  | Defined reset value for ENC_POS in case the encoder position must be cleared to another value than 0. |
|                             | 31:0                        | ENC_POS_DEV (Default: 0x00000000)                  | ENC_POS_DEV (Default: 0x00000000)                                                                     |
|                             | 31:0                        | S                                                  | Deviation between XACTUAL and ENC_POS .                                                               |
| W                           |                             | CL_TR_TOLERANCE (Default: 0x00000000) (Closed-loop | CL_TR_TOLERANCE (Default: 0x00000000) (Closed-loop                                                    |
| W                           | 0x52                        |                                                    | operation) Tolerated absolute tolerance between XACTUAL and ENC_POS to trigger                        |
| W                           |                             | S                                                  | TARGET_REACHED (incl. TARGET_REACHED_F lag and event).                                                |
| W                           | 31:0                        | ENC_POS_DEV_TOL (Default: 0xFFFFFFFF)              | ENC_POS_DEV_TOL (Default: 0xFFFFFFFF)                                                                 |
| W                           | 31:0                        | U                                                  | Maximum tolerated value of ENC_POS_DEV , which is not flagged as error.                               |
|                             | 30:0                        | ENC_IN_RES (Default: 0x00000000)                   | ENC_IN_RES (Default: 0x00000000)                                                                      |
|                             | 30:0                        | U                                                  | Resolution [encoder steps per revolution] of the encoder connected to the encoder inputs.             |
| R                           | 0x54                        | ENC_CONST (Default: 0x00000000)                    | ENC_CONST (Default: 0x00000000)                                                                       |
| R                           | 0x54                        | U                                                  | Encoder constant. i Value representation: 15 digits and 16 decimal places                             |
| W                           | 31                          | manual_enc_const (Default: 0)                      | manual_enc_const (Default: 0)                                                                         |
| W                           | 31                          |                                                    | 0 ENC_CONST will be calculated automatically. 1 Manual definition of ENC_CONST = ENC_IN_RES           |
|   Continued on next page. |   Continued on next page. |   Continued on next page.                        |   Continued on next page.                                                                           |

<!-- image -->

<!-- image -->

Table 68: Encoder Registers

<!-- image -->

| Encoder Registers   | Encoder Registers   | Encoder Registers   | Encoder Registers                  | Encoder Registers                                                                                                                                                                             |
|---------------------|---------------------|---------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                 | Addr                | Bit                 | Val Description                    | Val Description                                                                                                                                                                               |
| W                   | 0x56                | 15:0                | SER_CLK_IN_HIGH (Default: 0x00A0)  | SER_CLK_IN_HIGH (Default: 0x00A0)                                                                                                                                                             |
| W                   | 0x56                | 15:0                | U                                  | High voltage level time of serial clock output [# clock cycles].                                                                                                                              |
| W                   | 0x56                | 31:16               | SER_CLK_IN_LOW (Default: 0x00A0)   | SER_CLK_IN_LOW (Default: 0x00A0)                                                                                                                                                              |
| W                   | 0x56                | 31:16               | U                                  | Low voltage level time of serial clock output [# clock cycles].                                                                                                                               |
|                     | 0x57                | 15:0                | SSI_IN_CLK_DELAY (Default: 0x0000) | SSI_IN_CLK_DELAY (Default: 0x0000)                                                                                                                                                            |
|                     | 0x57                | 15:0                | U                                  | SSI encoder: Delay time [# clock cycles] between next data transfer after a rising edge of serial clock output. i In case SSI_IN_CLK_DELAY = 0: SSI_IN_CLK_DELAY = SER_CLK_IN_HIGH            |
|                     | 0x57                | 15:0                | U                                  | SPI encoder: Delay [# clock cycles] at start and end of data transfer between serial clock output and negated chip select. i In case SSI_IN_CLK_DELAY = 0: SSI_IN_CLK_DELAY = SER_CLK_IN_HIGH |
|                     | 0x57                | 31:16               | SSI_IN_WTIME (Default: 0x0F0)      | SSI_IN_WTIME (Default: 0x0F0)                                                                                                                                                                 |
|                     | 0x57                | 31:16               | U                                  | Delay parameter tw [# clock cycles] between two clock sequences for a multiple data transfer (of the same data). i SSI recommendation: tw < 19 µs.                                            |
|                     | 0x58                | 19:0                | SER_PTIME (Default: 0x00190)       | SER_PTIME (Default: 0x00190)                                                                                                                                                                  |
|                     | 0x58                | 19:0                | U                                  | SSI and SPI encoder: Delay time period tp [# clock cycles] between two consecutive clock sequences for new data request. i SSI recommendation: tp > 21 µs.                                    |
|                     | 0x7D                |                     | ENC_COMP_XOFFSET (Default:0x0000)  | ENC_COMP_XOFFSET (Default:0x0000)                                                                                                                                                             |
|                     | 0x7D                | 15:0                | U                                  | Start offset for triangular compensation in horizontal direction. 0 ≤ ENC_COMP_XOFFSET < 2 16                                                                                                 |
|                     | 0x7D                | 23:16               | ENC_COMP_YOFFSET (Default:0x00)    | ENC_COMP_YOFFSET (Default:0x00)                                                                                                                                                               |
|                     | 0x7D                | 23:16               | S                                  | Start offset for triangular compensation in vertical direction. -128 ≤ ENC_COMP_YOFFSET ≤ 127                                                                                                 |
|                     | 0x7D                | 31:24               | ENC_COMP_AMPL (Default:0x00)       | ENC_COMP_AMPL (Default:0x00)                                                                                                                                                                  |
|                     | 0x7D                | 31:24               | U                                  | Maximum amplitude for encoder compensation.                                                                                                                                                   |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## PID &amp; Closed-Loop Registers

| PID and Closed-Loop Registers   | PID and Closed-Loop Registers   | PID and Closed-Loop Registers                                         | PID and Closed-Loop Registers                                                                                                                                                                                                                                                                   | PID and Closed-Loop Registers                                         |
|---------------------------------|---------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| R/W                             | Addr                            | Bit Val                                                               | Description                                                                                                                                                                                                                                                                                     |                                                                       |
| RW                              | 0x1C                            | CL_BETA (0x0FF)                                                       | CL_BETA (0x0FF)                                                                                                                                                                                                                                                                                 | CL_BETA (0x0FF)                                                       |
| RW                              | 8:0                             | U                                                                     | Maximum commutation angle for closed-loop regulation. i Set CL_BETA > 255 carefully (esp. if cl_vlimit_en = 1). i Exactly 255 is recommended for best performance.                                                                                                                              |                                                                       |
| RW                              | 23:16                           | CL_GAMMA (Default:0xFF)                                               | CL_GAMMA (Default:0xFF)                                                                                                                                                                                                                                                                         | CL_GAMMA (Default:0xFF)                                               |
| RW                              | 23:16                           | U                                                                     | Maximum balancing angle to compensate back-EMF at higher velocities during closed-loop regulation.                                                                                                                                                                                              |                                                                       |
| RW                              | 31:0                            | CL_OFFSET                                                             | (Default: 0x00000000) (Closed-loop operation)                                                                                                                                                                                                                                                   |                                                                       |
| RW                              | 31:0                            | S Offset during                                                       | between ENC_POS and XACTUAL after closed-loop calibration. It is set closed-loop calibration process. It can be written manually.                                                                                                                                                               |                                                                       |
| W W                             | 23:0                            | PID_P (Default: 0x000000) (PID regulation)                            | PID_P (Default: 0x000000) (PID regulation)                                                                                                                                                                                                                                                      | PID_P (Default: 0x000000) (PID regulation)                            |
| W W                             | 23:0                            | U Parameter                                                           | P of PID regulator. Proportional term = PID_E · PID_P / 256                                                                                                                                                                                                                                     |                                                                       |
|                                 | 23:0                            | CL_VMAX_CALC_P                                                        | (Default: 0x000000) (Closed-loop operation)                                                                                                                                                                                                                                                     |                                                                       |
|                                 | 23:0                            | U Parameter                                                           | P of PI regulator controls maximum catch-up velocity limitation.                                                                                                                                                                                                                                |                                                                       |
| R                               | 31:0                            | PID_VEL                                                               | (Default: 0x00000000) (PID regulation)                                                                                                                                                                                                                                                          |                                                                       |
| R                               | 31:0                            | S Actual                                                              | PID output velocity.                                                                                                                                                                                                                                                                            |                                                                       |
| W W                             | 23:0                            | PID_I ( Default: 0x000000) (PID regulation)                           | PID_I ( Default: 0x000000) (PID regulation)                                                                                                                                                                                                                                                     | PID_I ( Default: 0x000000) (PID regulation)                           |
| W W                             | 23:0                            | U                                                                     | Parameter I of PID regulator. Integral term = PID_ISUM / 256 · PID_I / 256                                                                                                                                                                                                                      |                                                                       |
|                                 | 23:0                            |                                                                       | CL_VMAX_CALC_I (Default: 0x000000) (Closed-loop operation)                                                                                                                                                                                                                                      |                                                                       |
|                                 | 23:0                            | U Parameter                                                           | I of PI regulator controls maximum catch-up velocity limitation.                                                                                                                                                                                                                                |                                                                       |
| R                               | 31:0                            | PID_ISUM_RD ( Default: 0x00000000)                                    | (PID regulation)                                                                                                                                                                                                                                                                                |                                                                       |
| R                               | 31:0                            | S                                                                     | Actual PID integrator sum. Update frequency = f CLK /128                                                                                                                                                                                                                                        |                                                                       |
|                                 | 23:0                            | PID_D (Default: 0x000000) (PID regulation)                            | PID_D (Default: 0x000000) (PID regulation)                                                                                                                                                                                                                                                      | PID_D (Default: 0x000000) (PID regulation)                            |
| W                               | 23:0                            | U                                                                     | Parameter D of PID regulator. PID_E is sampled with f CLK / 128 / PID_D_CLKDIV . Derivative term = (PID_E LAST - PID_E ACTUAL ) · PID_D                                                                                                                                                         |                                                                       |
|                                 | 23:0                            | CL_DELTA_P (Default: 0x000000) (Closed-loop operation)                | CL_DELTA_P (Default: 0x000000) (Closed-loop operation)                                                                                                                                                                                                                                          | CL_DELTA_P (Default: 0x000000) (Closed-loop operation)                |
| W                               | 23:0                            | U                                                                     | Gain parameter that is multiplied with the actual position difference in order to calculate the actual commutation angle for position maintenance stiffness. Clipped at CL_BETA. Real value = CL_DELTA_P / 2 16 ;Ex: 65536  1.0 (gain=1) Value representation: 8 digits and 16 decimal places. |                                                                       |
| W                               | 14:0                            | PID_I_CLIP (Default: 0x0000) (PID regulation) (Closed-loop operation) | PID_I_CLIP (Default: 0x0000) (PID regulation) (Closed-loop operation)                                                                                                                                                                                                                           | PID_I_CLIP (Default: 0x0000) (PID regulation) (Closed-loop operation) |
| W                               | 14:0                            | U                                                                     | Clipping parameter for PID_ISUM . Real value = PID_ISUM • 2 16 • PID_ICLIP                                                                                                                                                                                                                      |                                                                       |
| W                               | 14:0                            | PID_D_CLKDIV (Default:0x00) (PID regulation)                          | PID_D_CLKDIV (Default:0x00) (PID regulation)                                                                                                                                                                                                                                                    | PID_D_CLKDIV (Default:0x00) (PID regulation)                          |
| W                               | 14:0                            | U Clock                                                               | divider for D part calculation.                                                                                                                                                                                                                                                                 |                                                                       |
| R                               | 31:0                            | PID_E (Default:0x00000000) (PID regulation)                           | PID_E (Default:0x00000000) (PID regulation)                                                                                                                                                                                                                                                     | PID_E (Default:0x00000000) (PID regulation)                           |
| R                               | 31:0                            | S                                                                     | Actual position deviation.                                                                                                                                                                                                                                                                      |                                                                       |
| W                               | 0x5E 30:0                       | PID_DV_CLIP U Clipping                                                | (Default:0x00000000) (PID regulation) (Closed-loop operation) parameter for PID_VEL .                                                                                                                                                                                                           |                                                                       |
|   Continued on next page.     |   Continued on next page.     |   Continued on next page.                                           |   Continued on next page.                                                                                                                                                                                                                                                                     |   Continued on next page.                                           |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Table 69: PID and Closed-Loop Registers

|    |      |       | PID_TOLERANCE (Default:0x00000) (PID regulation)           | PID_TOLERANCE (Default:0x00000) (PID regulation)                                                                                                                                                                                             |
|----|------|-------|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    |      |       | U                                                          | Tolerated position deviation: PID_E = 0 in case &#124; PID_E &#124; < PID_TOLERANCE                                                                                                                                                          |
| W  | 0x5F | 7:0   | CL_TOLERANCE (Default:0x00) (Closed-loop operation)        | CL_TOLERANCE (Default:0x00) (Closed-loop operation)                                                                                                                                                                                          |
| W  | 0x5F | 7:0   | U                                                          | Tolerated position deviation: CL_DELTA_P = 65536 (gain=1) in case &#124; ENC_POS_DEV &#124; < CL_TOLERANCE                                                                                                                                   |
| W  | 0x60 | 23:0  | CL_VMIN_EMF (Default:0x000000)                             | CL_VMIN_EMF (Default:0x000000)                                                                                                                                                                                                               |
| W  | 0x60 | 23:0  | U                                                          | Encoder velocity at which back-EMF compensation starts.                                                                                                                                                                                      |
| W  | 0x61 | 23:0  | CL_VADD_EMF (Default:0x000000)                             | CL_VADD_EMF (Default:0x000000)                                                                                                                                                                                                               |
| W  | 0x61 | 23:0  | U                                                          | Additional velocity value to calculate the encoder velocity at which back-EMF compensation reaches the maximum angle CL_GAMMA.                                                                                                               |
| W  | 0x62 | 31:0  | ENC_VEL_ZERO (Default:0xFFFFFF)                            | ENC_VEL_ZERO (Default:0xFFFFFF)                                                                                                                                                                                                              |
| W  | 0x62 | 31:0  | U                                                          | Delay time [# clock cycles] after the last incremental encoder change to set V_ENC_MEAN = 0.                                                                                                                                                 |
| W  | 0x63 | 7:0   | ENC_VMEAN_WAIT (Default:0x00) (incremental encoders only)  | ENC_VMEAN_WAIT (Default:0x00) (incremental encoders only)                                                                                                                                                                                    |
| W  | 0x63 | 7:0   | U                                                          | Delay period [# clock cycles] between two consecutive actual encoder velocity values that account for calculaton of mean encoder velocity. Set ENC_VMEAN_WAIT > 32. i Is set automatically to SER_PTIME for absolute SSI/SPI encoder.        |
| W  | 0x63 | 7:0   | SER_ENC_VARIATION (Default:0x00) (absolute encoders only)  | SER_ENC_VARIATION (Default:0x00) (absolute encoders only)                                                                                                                                                                                    |
| W  | 0x63 | 7:0   | U                                                          | Multiplier for maximum permitted serial encoder variation between consecutive absolute encoder requests. Maximum permitted value = ENC_VARIATION / 256 • 1/8 • ENC_IN_RES. If ENC_VARIATION = 0: Maximum permitted value = 1/8 • ENC_IN_RES. |
| W  | 0x63 | 11:8  | ENC_VMEAN_FILTER (Default:0x0)                             | ENC_VMEAN_FILTER (Default:0x0)                                                                                                                                                                                                               |
| W  | 0x63 | 11:8  | U                                                          | Filter exponent to calculate mean encoder velocity.                                                                                                                                                                                          |
| W  | 0x63 | 31:16 | ENC_VMEAN_INT (Default:0x0000) (incremental encoders only) | ENC_VMEAN_INT (Default:0x0000) (incremental encoders only)                                                                                                                                                                                   |
| W  | 0x63 | 31:16 | U                                                          | Encoder velocity update time [# clock cycles]. i Minimum value is set automatically to 256.                                                                                                                                                  |
| W  | 0x63 | 31:16 | CL_CYCLE (Default:0x0000) (absolute encoders only)         | CL_CYCLE (Default:0x0000) (absolute encoders only)                                                                                                                                                                                           |
| W  | 0x63 | 31:16 | U                                                          | Closed-loop control cycle [# clock cycles]. i Is set automatically to fastest possible cycle for ABN encoders.                                                                                                                               |
| R  | 0x65 | 31:0  | V_ENC (Default:0x00000000)                                 | V_ENC (Default:0x00000000)                                                                                                                                                                                                                   |
| R  | 0x65 | 31:0  | S                                                          | Actual encoder velocity [pps].                                                                                                                                                                                                               |
| R  |      |       | V_ENC_MEAN (Default:0x00000000)                            | V_ENC_MEAN (Default:0x00000000)                                                                                                                                                                                                              |
| R  | 0x66 | 31:0  | S Filtered encoder velocity [pps].                         | S Filtered encoder velocity [pps].                                                                                                                                                                                                           |
| R  | 0x66 | 31:0  |                                                            |                                                                                                                                                                                                                                              |
| R  |      |       |                                                            |                                                                                                                                                                                                                                              |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Transfer Registers

Table 70: Transfer Registers

| Transfer Registers   | Transfer Registers   | Transfer Registers   | Transfer Registers                                     | Transfer Registers                                                                         |
|----------------------|----------------------|----------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------|
| R/W                  | Addr                 | Bit                  | Val                                                    | Description                                                                                |
| W                    | 0x68                 | 31:0                 | ADDR_TO_ENC (Default:0x00000000) (SPI encoders only)   | ADDR_TO_ENC (Default:0x00000000) (SPI encoders only)                                       |
| W                    | 0x68                 | 31:0                 | -                                                      | Address data permanently sent to get encoder angle data from the SPI encoder slave device. |
| W                    | 0x68                 | 31:0                 | -                                                      | Address data sent from TMC4330A to SPI encoder for one-time data transfer.                 |
| W                    | 0x69                 | 31:0                 | DATA_TO_ENC (Default:0x00000000) (SPI encoders only)   | DATA_TO_ENC (Default:0x00000000) (SPI encoders only)                                       |
| W                    | 0x69                 | 31:0                 | -                                                      | Configuration data sent from TMC4330A to SPI encoder for one-time data transfer.           |
| R                    | 0x6A                 | 31:0                 | ADDR_FROM_ENC (Default:0x00000000) (SPI encoders only) | ADDR_FROM_ENC (Default:0x00000000) (SPI encoders only)                                     |
| R                    | 0x6A                 | 31:0                 | -                                                      | Repeated request data is stored here.                                                      |
| R                    | 0x6A                 | 31:0                 | -                                                      | Address data received from SPI encoder as response of the one-time data transfer.          |
| R                    | 0x6B                 | 31:0                 | DATA_FROM_ENC (Default:0x00000000) (SPI encoders only) | DATA_FROM_ENC (Default:0x00000000) (SPI encoders only)                                     |
| R                    | 0x6B                 | 31:0                 | -                                                      | Data received from SPI encoder as response of the one-time data transfer.                  |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## MSLUT Registers

Table 71: MSLUT Registers

| MSLUT Registers   | MSLUT Registers   | MSLUT Registers   | MSLUT Registers                                                   | MSLUT Registers                                                                                                                  | MSLUT Registers                                                                                                                  |
|-------------------|-------------------|-------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| R/ W              | Addr              | Bit               | Val                                                               | Description                                                                                                                      | Description                                                                                                                      |
| W                 | 0x70              | 31:0              | MSLUT[0]                                                          | MSLUT[0]                                                                                                                         | (Default:0xAAAAB554)                                                                                                             |
| W                 | 0x71              | 31:0              | MSLUT[1]                                                          | MSLUT[1]                                                                                                                         | (Default:0x4A9554AA)                                                                                                             |
| W                 | 0x72              | 31:0              | MSLUT[2]                                                          | MSLUT[2]                                                                                                                         | (Default:0x24492929)                                                                                                             |
| W                 | 0x73              | 31:0              | MSLUT[3]                                                          | MSLUT[3]                                                                                                                         | (Default:0x10104222)                                                                                                             |
| W                 | 0x74              | 31:0              | MSLUT[4]                                                          | MSLUT[4]                                                                                                                         | (Default:0xFBFFFFFF)                                                                                                             |
| W                 | 0x75              | 31:0              | MSLUT[5]                                                          | MSLUT[5]                                                                                                                         | (Default:0xB5BB777D)                                                                                                             |
| W                 | 0x76              | 31:0              | MSLUT[6]                                                          | MSLUT[6]                                                                                                                         | (Default:0x49295556)                                                                                                             |
| W                 | 0x 77             | 31:0              | MSLUT[7]                                                          | MSLUT[7]                                                                                                                         | (Default:0x00404222)                                                                                                             |
| W                 |                   |                   | -                                                                 | Each bit defines the difference between consecutive values in the microstep look-up table MSLUT (in combination with MSLUTSEL ). | Each bit defines the difference between consecutive values in the microstep look-up table MSLUT (in combination with MSLUTSEL ). |
| W                 | 0x78              | 31:0              | MSLUTSEL                                                          | MSLUTSEL                                                                                                                         | (Default:0xFFFF8056)                                                                                                             |
| R                 | 0x79              | 31:0              | -                                                                 | Definition of the four segments within each quarter MSLUT wave.                                                                  | Definition of the four segments within each quarter MSLUT wave.                                                                  |
| R                 |                   | 9:0               | MSCNT (Default:0x000)                                             | MSCNT (Default:0x000)                                                                                                            | MSCNT (Default:0x000)                                                                                                            |
|                   | 0x7A              | 8:0               | U Actual µStep position of the sine value. USTEPA (Default:0x000) | U Actual µStep position of the sine value. USTEPA (Default:0x000)                                                                | U Actual µStep position of the sine value. USTEPA (Default:0x000)                                                                |
|                   | 0x7A              | 8:0               | S                                                                 | Actual microstep value of PWMA output (sine values).                                                                             | Actual microstep value of PWMA output (sine values).                                                                             |
|                   | 0x7A              | 24:16             | USTEPB (Default:0x0F7)                                            | USTEPB (Default:0x0F7)                                                                                                           | USTEPB (Default:0x0F7)                                                                                                           |
|                   | 0x7A              | 24:16             | S                                                                 | Actual microstep value of PWMB output (cosine values).                                                                           | Actual microstep value of PWMB output (cosine values).                                                                           |
| R                 | 0x7B              | 8:0               | USTEPA_SCALE (Default:0x000)                                      | USTEPA_SCALE (Default:0x000)                                                                                                     | USTEPA_SCALE (Default:0x000)                                                                                                     |
| R                 | 0x7B              | 8:0               | S                                                                 | Actual scaled microstep value of PWMA output (sine values).                                                                      | Actual scaled microstep value of PWMA output (sine values).                                                                      |
| R                 | 0x7B              | 24:16             | USTEPB_SCALE (Default:0x0F7)                                      | USTEPB_SCALE (Default:0x0F7)                                                                                                     | USTEPB_SCALE (Default:0x0F7)                                                                                                     |
| R                 | 0x7B              |                   | S                                                                 | Actual scaled microstep value of PWMB output (cosine values).                                                                    | Actual scaled microstep value of PWMB output (cosine values).                                                                    |
| W                 | 0x7E              | 7:0               | START_SIN (Default:0x00)                                          | START_SIN (Default:0x00)                                                                                                         | START_SIN (Default:0x00)                                                                                                         |
| W                 | 0x7E              | 7:0               | U                                                                 | Start value for sine waveform.                                                                                                   | Start value for sine waveform.                                                                                                   |
| W                 | 0x7E              | 23:16             | START_SIN90 (Default:0xF7)                                        | START_SIN90 (Default:0xF7)                                                                                                       | START_SIN90 (Default:0xF7)                                                                                                       |
| W                 | 0x7E              | 23:16             | U                                                                 | Start value for cosine waveform.                                                                                                 | Start value for cosine waveform.                                                                                                 |

## TMC Version Register

Table 72: Version Register

| Version Register   | Version Register   | Version Register   | Version Register            | Version Register            |
|--------------------|--------------------|--------------------|-----------------------------|-----------------------------|
| R/W                | Addr               | Bit                | Val                         | Description                 |
| R                  | 0x7F               | 15:0               | Version No (Default:0x0002) | Version No (Default:0x0002) |
| R                  | 0x7F               | 15:0               | U                           | TMC4330A version number.    |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 15. Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more than one maximum rating at a time for extended periods shall be avoided by application design.

| Maximum Ratings: 3.3V supply                    | Maximum Ratings: 3.3V supply   | Maximum Ratings: 3.3V supply   | Maximum Ratings: 3.3V supply   | Maximum Ratings: 3.3V supply   |
|-------------------------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter (VCC = 3.3V nominal  TEST_MODE = 0V) | Symbol                         | Min                            | Max                            | Unit                           |
| Supply voltage                                  | V CC                           | 3.0                            | 3.6                            | V                              |
| Input voltage IO                                | V IN                           | -0.3                           | 3.6                            | V                              |

Table 73: Maximum Ratings: 3.3V supply

Table 74: Maximum Ratings: 5.0V supply

| Maximum Ratings: 5.0V supply                  | Maximum Ratings: 5.0V supply   | Maximum Ratings: 5.0V supply   | Maximum Ratings: 5.0V supply   | Maximum Ratings: 5.0V supply   |
|-----------------------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter (VCC = 5V nominal  TEST_MODE = 0V) | Symbol                         | Min                            | Max                            | Unit                           |
| Supply voltage                                | V CC                           | 4.8                            | 5.2                            | V                              |
| Input voltage IO                              | V IN                           | -0.3                           | 5.2                            | V                              |

Table 75: Maximum Ratings: Temperature

| Maximum Ratings: Temperature   | Maximum Ratings: Temperature   | Maximum Ratings: Temperature   | Maximum Ratings: Temperature   | Maximum Ratings: Temperature   |
|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter                      | Symbol                         | Min                            | Max                            | Unit                           |
| Temperature                    | T                              | -40                            | 125                            | °C                             |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 16. Electrical Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range  unless  otherwise  specified.  Typical  values  represent  the  average  value  of  all  parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

Table 76: DC Characteristics

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

Table 77: Power Dissipation

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

Table 78: General IO Timing Parameters

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

## Layout Examples 16.3.

## Internal Cirucit Diagram for Layout Example

Figure 61: Internal Circuit Diagram for Layout Example

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Components Assembly for Application with Encoder 16.3.2.

Top Layer: Assembly Side 16.3.3.

Figure 62: Components Assembly for Application with Encoder

<!-- image -->

Figure 63: Top Layer: Assembly Side

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

Inner Layer (GND)

Inner Layer (Supply VS) 16.3.5.

99

Figure 64: Inner Layer (GND)

<!-- image -->

Figure 65: Inner Layer (Supply VS)

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## Package Dimensions 16.4.

<!-- image -->

Table 79: Package Dimensions

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

## Package Material Information 16.5.

Please refer to the associated document 'TMC43xx Package Material Information, V1.00' for information about available package dimensions and the various tray and reel package options. This document informs you about outside dimensions per tray and/reel and the number of ICs per tray/reel. It also provides information about available packaging units and their weight, as well as box dimension and weight details for outer packaging.

The document is available for download on the TMC4330A product page at www.trinamic.com.

- i Should  you  require  a  custom-made  component  packaging  solution  or  a  different  outer  packaging solution, or have questions pertaining to the component packaging choice, please contact our customer service.

## NOTE:

-  Our trays and reels are JEDEC-compliant.

## Marking Details provided on Single Chip 16.6.

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

## 17. Supplemental Directives

## ESD-DEVICE INSTRUCTIONS

<!-- image -->

## This product is an ESD-sensitive CMOS device. It is sensitive to electrostatic discharge.

-  Provide effective grounding to protect personnel and machines.
-  Ensure work is performed in a nonstatic environment.
-  Use personal ESD control footwear and ESD wrist straps, if necessary.

## Failure to do so can result in defects, damages and decreased reliability.

The producer of the product TMC4330A is TRINAMIC GmbH &amp; Co. KG in Hamburg, Germany; hereafter referred to as TRINAMIC. TRINAMIC is the supplier; and in this function provides the product and the production documentation to its customers.

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

## 18. Tables Index

| Table 1: TMC4330A Order Codes                                                                                                                                                                                            | .............................................................................................................2      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Table 2: Pin Names and Descriptions......................................................................................................                                                                                | 10                                                                                                                  |
| Table 3: SPI Input Control Interface Pins................................................................................................                                                                                | 13                                                                                                                  |
| Table 4: Read and Write Access Examples..............................................................................................                                                                                    | 14                                                                                                                  |
| Table 5: SPI Interface Timing                                                                                                                                                                                            | ................................................................................................................ 16 |
| Table 6: Input Filtering Groups (Assigned Pins).......................................................................................                                                                                   | 17                                                                                                                  |
| Table 7: Input Filtering (Assigned Register)                                                                                                                                                                             | ............................................................................................ 17                     |
| Table 8: Sample Rate Configuration .......................................................................................................                                                                               | 18                                                                                                                  |
| Table 9: Configuration of Digital Filter Length                                                                                                                                                                          | ......................................................................................... 18                        |
| Table 10: Pins Names: Status Events......................................................................................................                                                                                | 20                                                                                                                  |
| Table 11:Register Names: Status Flags and Events                                                                                                                                                                         | ................................................................................. 20                                |
| Table 12: Pin Names: Ramp Generator...................................................................................................                                                                                   | 24                                                                                                                  |
| Table 13: Register Names: Ramp Generator                                                                                                                                                                                 | ........................................................................................... 24                      |
| Table 14: Overview of General and Basic Ramp Configuration Options .....................................................                                                                                                 | 26                                                                                                                  |
| Table 15: Description of TMC4330A Motion Profiles.................................................................................                                                                                       | 28                                                                                                                  |
| Table 16: Trapezoidal Ramps: AACTUAL Assignments during Motion........................................................                                                                                                   | 31                                                                                                                  |
| Table 17: Parameter Assignments for S-shaped Ramps                                                                                                                                                                       | ........................................................................... 34                                      |
| Table 18: Minimum and Maximum Values if Real World Units are f                                                                                                                                                           | selected................................................ 45                                                         |
| Table 19: Minimum and Maximum Values for Steep Slopes for CLK                                                                                                                                                            | =16MHz.............................................. 45                                                             |
| Table 20: Pins used for External Step Control                                                                                                                                                                            | ......................................................................................... 46                        |
| Table 21: Registers used for External Step Control                                                                                                                                                                       | .................................................................................. 46                               |
| Table 22: Pins used for Reference Switches                                                                                                                                                                               | ............................................................................................ 49                     |
| Table 23: Dedicated Registers for Reference Switches.............................................................................                                                                                        | 49                                                                                                                  |
| Table 24: Reference Configuration and Corresponding Transition of particular Reference Table 25: Overview of different home_event Settings.............................................................................. | Switch................ 51 54                                                                                        |
| Table 26: TARGET_REACHED Output Pin Configuration                                                                                                                                                                        | ........................................................................... 58                                      |
| Table 27: Comparison Selection Grid to generate POS_COMP_REACHED_Flag                                                                                                                                                    | .......................................... 59                                                                       |
| Table 28: Circular motion (X_RANGE = 300)...........................................................................................                                                                                     | 63                                                                                                                  |
| Table 29: Dedicated Ramp Timing Pins...................................................................................................                                                                                  | 64                                                                                                                  |
| Table 30: Dedicated Ramp Timing Registers ...........................................................................................                                                                                    | 64                                                                                                                  |
| Table 31: Start Trigger Configuration                                                                                                                                                                                    | ..................................................................................................... 65            |
| Table 32: Start Enable Switch Configuration ...........................................................................................                                                                                  | 65                                                                                                                  |
| Table 33: Parameter Settings Timing Example 1                                                                                                                                                                            | ..................................................................................... 67                            |
| Table 34: Parameter Settings Timing Example 2                                                                                                                                                                            | ..................................................................................... 68                            |
| Table 35: Parameter Settings Timing Example 3                                                                                                                                                                            | ..................................................................................... 69                            |
| Table 36: Pipeline Activation Options......................................................................................................                                                                              | 77                                                                                                                  |
| Table 37: Pipeline Mapping for different Pipeline Table 38: Dedicated PWM Output Pins ...................................................................................................                                | Configurations............................................................... 78 82                                 |
| Table 39: Dedicated PWM Output Registers............................................................................................                                                                                     | 82                                                                                                                  |
| Table 40: Wave Inclination Characteristics of Internal                                                                                                                                                                   | MSLUT.................................................................. 86                                          |
| Table 41: Overview of the Microstep Behavior Example...........................................................................                                                                                          | 90                                                                                                                  |
| Table 42: Dedicated Decoder Unit Pins ...................................................................................................                                                                                | 91                                                                                                                  |
| Table 43: Dedicated Decoder Unit Registers ...........................................................................................                                                                                   | 91                                                                                                                  |
| Table 44: Pin Assignment based on selected Encoder Setup                                                                                                                                                                 | .................................................................... 93                                             |
| Table 45: Index Channel Sensitivity........................................................................................................                                                                              | 96                                                                                                                  |
| Table 46: Supported SPI Encoder Data Transfer Modes.........................................................................                                                                                             | 106                                                                                                                 |
| Table 47: Dedicated Closed-Loop and PID Registers ..............................................................................                                                                                         | 108                                                                                                                 |
| Table 48: Dedicated Reset and Clock Pins.............................................................................................                                                                                    | 117                                                                                                                 |
| Table 49: Dedicated Reset and Clock Gating Registers ..........................................................................                                                                                          | 117                                                                                                                 |
| Table 50: General Configuration 0x00 ..................................................................................................                                                                                  | 122                                                                                                                 |
| Table 51: Reference Switch Configuration 0x01 ....................................................................................                                                                                       | 125                                                                                                                 |
| Table 52: Start Switch Configuration START_CONF 0x02 .......................................................................                                                                                             | 127                                                                                                                 |
| Table 53: Input Filter Configuration Register INPUT_FILT_CONF 0x03 ...................................................                                                                                                   | 128                                                                                                                 |
| Table 54: Current Scale Configuration (0x05)........................................................................................                                                                                     | 129 133                                                                                                             |
| Table 55: Encoder Signal Configuration ENC_IN_CONF (0x07)............................................................... Table 56: Serial Encoder Data Input Configuration                                               | 133                                                                                                                 |
| ENC_IN_DATA (0x08)............................................... Table 57: Motor Driver Settings (0x0A).................................................................................................                | 134                                                                                                                 |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

| Table 58: Event Selection Regsiters 0x0B…0x0D ...................................................................................              |   135 |
|------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Table 59: Status Event Register EVENTS (0x0E)....................................................................................              |   136 |
| Table 60: Status Flag Register STATUS (0x0F)......................................................................................             |   137 |
| Table 61: Various Configuration Registers: Synchronization, PWM, etc. ..................................................                       |   138 |
| Table 62: Ramp Generator Registers ....................................................................................................        |   142 |
| Table 63: External Clock Frequency Register.........................................................................................           |   143 |
| Table 64: Target and Compare Registers..............................................................................................           |   143 |
| Table 65: Pipeline Register .................................................................................................................. |   144 |
| Table 66: Shadow Register ..................................................................................................................   |   144 |
| Table 67: Reset and Clock Gating Register............................................................................................          |   145 |
| Table 68: Encoder Registers ................................................................................................................   |   147 |
| Table 69: PID and Closed-Loop Registers .............................................................................................          |   149 |
| Table 70: Transfer Registers................................................................................................................   |   150 |
| Table 71: MSLUT Registers ..................................................................................................................   |   151 |
| Table 72: Version Register...................................................................................................................  |   151 |
| Table 73: Maximum Ratings: 3.3V supply .............................................................................................           |   152 |
| Table 74: Maximum Ratings: 5.0V supply .............................................................................................           |   152 |
| Table 75: Maximum Ratings: Temperature ...........................................................................................             |   152 |
| Table 76: DC Characteristics ................................................................................................................  |   153 |
| Table 77: Power Dissipation.................................................................................................................   |   153 |
| Table 78: General IO Timing Parameters ..............................................................................................          |   154 |
| Table 79: Package Dimensions.............................................................................................................      |   158 |
| Table 80: Document Revision History ...................................................................................................        |   166 |

<!-- image -->

<!-- image -->

## 19. Figures Index

| Figure 1: Sample Image TMC4330A Closed-Loop                                                                                                                                                                                                                                                 | Drive............................................................................1                                                                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2: Block Diagram                                                                                                                                                                                                                                                                     | ..........................................................................................................................1                                     |
| Figure 3: S-shaped Velocity Profile Figure 4: Hardware Set-up for Closed-loop                                                                                                                                                                                                               | ...........................................................................................................2 .................................................2 |
| Operation with TMC220x/222x Figure 5: Hardware Set-up for Open-loop Operation with TMC2100 supporting External Stop Switches                                                                                                                                                                | ........2                                                                                                                                                       |
| Figure 6: Package Outline: Pin Assignments Top View...............................................................................8                                                                                                                                                         |                                                                                                                                                                 |
| Figure 7: System Overview                                                                                                                                                                                                                                                                   | .................................................................................................................... 11                                         |
| Figure 8: TMC4330A Connection: VCC=3.3V...........................................................................................                                                                                                                                                          | 12                                                                                                                                                              |
| Figure 9: TMC4330A with TMC2100 Stepper Driver in stealthChop Mode                                                                                                                                                                                                                          | .................................................. 12                                                                                                           |
| Figure 10: TMC4330A with TMC22xx Stepper Driver (32 microsteps settings)                                                                                                                                                                                                                    | ........................................... 12                                                                                                                  |
| Figure 11: TMC4330A SPI Datagram Structure........................................................................................                                                                                                                                                          | 13                                                                                                                                                              |
| Figure 12: Difference between Read and Write Access                                                                                                                                                                                                                                         | ............................................................................ 14                                                                                 |
| Figure 13: SPI Timing Datagram                                                                                                                                                                                                                                                              | ............................................................................................................ 15                                                 |
| Figure 14: Reference Input Pins: SR_REF = 1, FILT_L_REF = 1                                                                                                                                                                                                                                 | ............................................................... 19                                                                                              |
| Figure 15: START Input Pin: SR_S = 2, FILT_L_S = 0 .............................................................................                                                                                                                                                            | 19                                                                                                                                                              |
| Figure 16: Encoder Interface Input Pins: SR_ENC_IN = 0, FILT_L_ENC_IN = 7                                                                                                                                                                                                                   | ........................................ 19                                                                                                                     |
| Figure 17: No Ramp Motion Profile.........................................................................................................                                                                                                                                                  | 29                                                                                                                                                              |
| Figure 18: Trapezoidal Ramp without Break Point                                                                                                                                                                                                                                             | ................................................................................... 30                                                                          |
| Figure 19: Trapezoidal Ramp with Break Point                                                                                                                                                                                                                                                | ........................................................................................ 30                                                                     |
| Figure 20: S-shaped Ramp without initial and final Acceleration/Deceleration                                                                                                                                                                                                                | Values................................. 32                                                                                                                      |
| Figure 21: S-shaped Ramp with initial and final Acceleration/Deceleration Values......................................                                                                                                                                                                      | 33                                                                                                                                                              |
| Figure 22: Trapezoidal Ramp with initial Velocity.....................................................................................                                                                                                                                                      | 35                                                                                                                                                              |
| Figure 23: S-shaped Ramp with initial Start Velocity                                                                                                                                                                                                                                        | ................................................................................ 36                                                                             |
| Figure 24: S-shaped Ramp with Stop Velocity                                                                                                                                                                                                                                                 | ......................................................................................... 38                                                                    |
| Figure 25: S-shaped Ramp with Start and Stop Velocity...........................................................................                                                                                                                                                            | 39                                                                                                                                                              |
| Figure 26: S-shaped Ramps with combined VSTART and ASTART Parameters........................................... Velocity                                                                                                                                                                    | 40                                                                                                                                                              |
| Figure 27: sixPoint Ramp: Trapezoidal Ramp with Start and Stop                                                                                                                                                                                                                              | ................................................ 41                                                                                                             |
| Figure 28: Example for U-Turn Behavior of sixPoint Ramp.......................................................................                                                                                                                                                              | 42 43                                                                                                                                                           |
| Figure 29: Example for U-Turn Behavior of S-shaped Ramp..................................................................... Figure 30: Direct transition via VACTUAL=0 for S-shaped Ramps                                                                                                  | ............................................................. 43                                                                                                |
| Figure 31: HOME_REF Monitoring and HOME_ERROR_FLAG                                                                                                                                                                                                                                          | .................................................................... 55                                                                                         |
| Figure 32: Ramp Timing Example                                                                                                                                                                                                                                                              | 1........................................................................................................ 67                                                    |
| Figure 33: Ramp Timing Example                                                                                                                                                                                                                                                              | 2........................................................................................................ 68                                                    |
| Figure 34: Ramp Timing Example 3........................................................................................................                                                                                                                                                    | 69                                                                                                                                                              |
| Figure 35: Single-level Shadow Register Option to replace complete Ramp Motion Profile..........................                                                                                                                                                                            | 71                                                                                                                                                              |
| Figure 36: Double-stage Shadow Register Option 1, suitable for S-shaped Ramps....................................                                                                                                                                                                           | 72                                                                                                                                                              |
| Figure 37: Double-stage Shadow Register Option 2, suitable for Trapezoidal Ramps.                                                                                                                                                                                                           | ................................ 73                                                                                                                             |
| Figure 38: Double-Stage Shadow Register Option 3, suitable for Trapezoidal Ramps.................................                                                                                                                                                                           | 74                                                                                                                                                              |
| Figure 39: SHADOW_MISS_CNT Parameter for several internal Start Signals                                                                                                                                                                                                                     | ............................................ 75                                                                                                                 |
| Figure 40: Target Pipeline with Configuration Options                                                                                                                                                                                                                                       | ............................................................................. 76                                                                                |
| Figure 41: Pipeline Example A................................................................................................................ Figure 42: Pipeline Example B................................................................................................................ | 79 79                                                                                                                                                           |
| Figure 43: Pipeline Example C................................................................................................................                                                                                                                                               | 79                                                                                                                                                              |
| Figure 44: Pipeline Example D ...............................................................................................................                                                                                                                                               | 79                                                                                                                                                              |
| Figure 45: Pipeline Example E................................................................................................................                                                                                                                                               | 80                                                                                                                                                              |
| Figure 46: Pipeline Example F................................................................................................................                                                                                                                                               | 80                                                                                                                                                              |
| Figure 47: Pipeline Example G                                                                                                                                                                                                                                                               | 80                                                                                                                                                              |
| ............................................................................................................... Figure 48: Pipeline Example H                                                                                                                                               | 80                                                                                                                                                              |
| ............................................................................................................... Figure 49: Calculation of PWM Duty Cycles (PWM_AMPL) ........................................................................                                               | 84                                                                                                                                                              |
| Figure 50: LUT Programming                                                                                                                                                                                                                                                                  | 85                                                                                                                                                              |
| Example.................................................................................................... Figure 51: MSLUT Curve with all possible Base Wave Inclinations                                                                                                                 | 89                                                                                                                                                              |
| (highest Inclination first) Figure 52: Triangular Function that compensates Encoder Misalignments .................................................                                                                                                                                         | ....................... 94                                                                                                                                      |
| Figure 53: Outline of ABN Signals of an incremental Encoder...................................................................                                                                                                                                                              | 96                                                                                                                                                              |
| Figure 54:Serial Data Output: Four                                                                                                                                                                                                                                                          | 101                                                                                                                                                             |
| Examples........................................................................................ Figure 55: SSI: SSI_IN_CLK_DELAY=0.................................................................................................                                                        | 103                                                                                                                                                             |
| Figure 56: SSI: SSI_IN_CLK_DELAY>SER_CLK_IN_HIGH ...................................................................... ..............................................                                                                                                                      | 103                                                                                                                                                             |
| Figure 57: Calculation of the Output Angle with appropriate CL_DELTA_P                                                                                                                                                                                                                      | 112                                                                                                                                                             |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

| Figure 58: Calculation of the actual Load Angle GAMMA ........................................................................              |   115 |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Figure 59: Manual Clock Gating Activation and Wake-Up .......................................................................               |   118 |
| Figure 60: Automatic Clock Gating Activation and Wake-Up...................................................................                 |   119 |
| Figure 61: Internal Circuit Diagram for Layout Example.........................................................................             |   155 |
| Figure 62: Components Assembly for Application with Encoder ..............................................................                  |   156 |
| Figure 63: Top Layer: Assembly Side....................................................................................................     |   156 |
| Figure 64: Inner Layer (GND) .............................................................................................................. |   157 |
| Figure 65: Inner Layer (Supply VS) ......................................................................................................   |   157 |
| Figure 66: Package Dimensional Drawings............................................................................................         |   158 |
| Figure 67: Marking Details on Chip 1 ...................................................................................................... |   159 |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->

## 20. Revision History

Table 80: Document Revision History

| Document Revision History   | Document Revision History   | Document Revision History   | Document Revision History   |
|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
| Version                     | Date                        | Author                      | Description                 |
| 1.00                        | 2016-NOV-25                 | HS                          | First complete version.     |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany   - Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com .

<!-- image -->

<!-- image -->