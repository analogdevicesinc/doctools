<!-- lastmod 2023-08-03 -->
## TMC5072 DATASHEET

Dual controller/driver for up to two 2-phase bipolar stepper motors. No-noise stepper operation. Integrated motion controller and encoder counter. SPI, UART (single wire) and Step/Dir.

<!-- image -->

## FEATURES AND BENEFITS

Two 2-phase stepper motors

Drive Capability up to 2x 1.1A coil current (2x 1.5A peak)

Parallel Option for one motor at 2.2A (3A peak)

Motion Controller with SixPoint ™ ramp

Voltage Range 4.75… 2 6V DC

SPI &amp; Single Wire UART with special bus ring option

Dual Encoder Interface and 2x Ref.-Switch input per axis

Highest Resolution up to 256 microsteps per full step

StealthChop ™ for extremely quiet operation and smooth motion

SpreadCycle ™ highly dynamic motor control chopper

DCStep ™ load dependent speed control

StallGuard 2™ high precision sensorless motor load detection

CoolStep ™ current control for energy savings up to 75%

Passive Braking and freewheeling mode

Full Protection &amp; Diagnostics

Compact Size 7x7mm 2  QFN48 package

## BLOCK DIAGRAM

<!-- image -->

<!-- image -->

## APPLICATIONS

CCTV, Security Office Automation Antenna Positioning Heliostat Controller Battery powered applications ATM, Cash recycler, POS Lab Automation Liquid Handling Medical Printer and Scanner Pumps and Valves

## DESCRIPTION

The  TMC5072  is  a  single  /  dual  high performance stepper motor controller and driver IC with serial communication interfaces. It combines flexible ramp generators for automatic target positioning with industries' most advanced  stepper  motor  drivers.  Based on TRINAMICs sophisticated StealthChop chopper, the driver ensures noiseless operation, maximum efficiency, and best motor  torque.  High  integration,  energy saving  functions  like  CoolStep,  and  a small  form  factor  enable  miniaturized and scalable systems. The complete solution-on-a-chip reduces learning curve to  a  minimum  while  giving  best  userexperience and a high cost-efficiency.

<!-- image -->

## APPLICATION EXAMPLES: HIGH FLEXIBILITY -MULTIPURPOSE USE

The  TMC5072  scores  with  power  density,  complete  motion  controlling  features  and  integrated  power stages.  It  offers  a  versatility  that  covers  a  wide  spectrum  of  applications  from  battery  systems  up  to embedded  applications  with  1.5A  motor  current  per  coil.  The  small  form  factor  keeps  costs  down  and allows  for  miniaturized  layouts.  Extensive  support  at  the  chip,  board,  and  software  levels  enables  rapid design  cycles  and  fast  time-to-market  with  competitive  products.  High  energy  efficiency  and  reliability deliver cost savings in related systems such as power supplies and cooling.

## MINIATURIZED DESIGN FOR ONE STEPPER MOTOR

<!-- image -->

## COMPACT DESIGN FOR UP TO 510 STEPPER MOTORS

<!-- image -->

<!-- image -->

The stepper motor driver outputs are switched in parallel. A dual ABN encoder interface  and  two  reference switch inputs are used.

An application for up to 510 stepper motors is  shown. The  UART  single  wire  differential interface allows for a decentralized distributed system with a minimized number of components. Additionally, an ABN encoder and up to two reference  switches  can  be used for each motor. A single  CPU  can  control  the whole system. The CPUboard and controller / driver boards  are  highly  economical and space saving.

## TMC5072-EVAL EVALUATION BOARD EVALUATION &amp; DEVELOPMENT PLATFORM

The  TMC5072-EVAL  is  part  of  TRINAMICs  universal evaluation board system which provides a convenient  handling  of  the  hardware  as  well  as  a user-friendly software tool for evaluation. The TMC5072 evaluation board system consists of three parts: STARTRAMPE (base board), ESELSBRÜCKE (connector board including several test points), and TMC5072-EVAL.

## ORDER CODES

| Order code       | Description                                                                                            | Size [ mm 2 ]   |
|------------------|--------------------------------------------------------------------------------------------------------|-----------------|
| TMC5072-LA       | 2-Axis Stepper Motor Controller/Driver IC, SPI, Step/Dir, UART, 5-26V Supply, 1.1A, QFN48, Tray        | 7 x 7           |
| TMC5072-LA-T     | 2-Axis Stepper Motor Controller/Driver IC, SPI, Step/Dir, UART, 5-26V Supply, 1.1A, QFN48, Tape & Reel | 7 x 7           |
| TMC5072-EVAL-KIT | Full Evaluation Kit for TMC5072                                                                        | 126 x 85        |
| TMC5072-EVAL     | Evaluation Board for TMC5072 (excl. Landungsbrücke and Eselsbrücke)                                    | 85 x 55         |
| TMC5072-BOB      | Breakout board for simple prototyping                                                                  | 25 x 36         |

## TABLE OF CONTENTS

| 1 PRINCIPLES OF OPERATION           | 1 PRINCIPLES OF OPERATION                 | 5   | 7 CURRENT SETTING                     | 7 CURRENT SETTING                        | 46   |
|-------------------------------------|-------------------------------------------|-----|---------------------------------------|------------------------------------------|------|
| 1.1                                 | KEY CONCEPTS                              | 5   | 7.1                                   | SENSE RESISTORS                          | 47   |
| 1.2                                 | CONTROL I NTERFACES                       | 6   |                                       |                                          |      |
| 1.3                                 | SOFTWARE                                  | 6   | 8 STEALTHCHOP™                        | 8 STEALTHCHOP™                           | 48   |
| 1.4                                 | MOVING AND CONTROLLING THE MOTOR          | 7   | 8.1                                   | TWO MODES FOR CURRENT REGULATION         | 48   |
| 1.5                                 | STEALTHCHOP DRIVER WITH PROGRAMMABLE      |     | 8.2                                   | AUTOMATIC SCALING                        | 49   |
|                                     | MICROSTEPPING WAVE                        | 7   | 8.3                                   | FIXED SCALING                            | 52   |
| 1.6                                 | STALLGUARD2 - MECHANICAL LOAD SENSING     | 7   | 8.4                                   | COMBINING STEALTHCHOP WITH OTHER CHOPPER |      |
| 1.7                                 | COOLSTEP - LOAD ADAPTIVE CURRENT CONTROL8 |     |                                       | MODES                                    | 53   |
| 1.8                                 | DCSTEP - LOAD DEPENDENT SPEED CONTROL     | 8   | 8.5                                   | FLAGS IN STEALTHCHOP                     | 54   |
| 1.9                                 | ENCODER I NTERFACES                       | 8   | 8.6                                   | FREEWHEELING AND PASSIVE MOTOR BRAKING   | 55   |
| 2 PIN ASSIGNMENTS                   | 2 PIN ASSIGNMENTS                         | 9   | 9 SPREADCYCLE AND CLASSIC CHOPPER     | 9 SPREADCYCLE AND CLASSIC CHOPPER        | 56   |
| 2.1                                 | PACKAGE OUTLINE                           | 9   | 9.1                                   | SPREADCYCLE CHOPPER                      | 57   |
| 2.2                                 | SIGNAL DESCRIPTIONS                       | 9   | 9.2                                   | CLASSIC CONSTANT OFF TIME CHOPPER        | 60   |
| 3 SAMPLE CIRCUITS                   | 3 SAMPLE CIRCUITS                         | 12  | 9.3                                   | RANDOM OFF TIME                          | 61   |
| 3.1 STANDARD APPLICATION CIRCUIT    | 3.1 STANDARD APPLICATION CIRCUIT          | 12  | 10 DRIVER DIAGNOSTIC FLAGS            | 10 DRIVER DIAGNOSTIC FLAGS               | 62   |
| 3.2                                 | 5 V ONLY SUPPLY                           | 13  | 10.1                                  | TEMPERATURE MEASUREMENT                  | 62   |
| 3.3                                 | ONE MOTOR WITH HIGH CURRENT               | 14  | 10.2                                  | SHORT TO GND PROTECTION                  | 62   |
| 3.4                                 | EXTERNAL 5V POWER SUPPLY                  | 15  | 10.3                                  | OPEN LOAD DIAGNOSTICS                    | 62   |
| 3.5                                 | OPTIMIZING ANALOG PRECISION               | 15  | RAMP GENERATOR                        | RAMP GENERATOR                           | 63   |
| 3.6                                 | DRIVER PROTECTION AND EME CIRCUITRY       | 16  | 11                                    | REAL WORLD UNIT CONVERSION               | 63   |
| 4 SPI INTERFACE                     | 4 SPI INTERFACE                           | 17  | 11.1 11.2                             | MOTION PROFILES                          | 64   |
| 4.1                                 | SPI DATAGRAM STRUCTURE                    | 17  | 11.3                                  | I NTERRUPT HANDLING                      | 66   |
| 4.2                                 | SPI SIGNALS                               | 18  | 11.4                                  | VELOCITY THRESHOLDS                      | 66   |
| 4.3                                 | TIMING                                    | 19  | 11.5                                  | REFERENCE SWITCHES                       | 67   |
| 5 UART SINGLE WIRE INTERFACE        | 5 UART SINGLE WIRE INTERFACE              | 20  | 11.6 RAMP GENERATOR RESPONSE TIME     | 11.6 RAMP GENERATOR RESPONSE TIME        | 68   |
| 5.1 DATAGRAM STRUCTURE              | 5.1 DATAGRAM STRUCTURE                    | 20  | 12 STALLGUARD2 LOAD MEASUREMENT       | 12 STALLGUARD2 LOAD MEASUREMENT          | 69   |
| 5.2                                 | CRC CALCULATION                           | 22  | 12.1                                  | TUNING STALLGUARD2 THRESHOLD SGT         | 70   |
| 5.3                                 | UART SIGNALS                              | 22  | 12.2                                  | STALLGUARD2 UPDATE RATE AND FILTER       | 72   |
| 5.4                                 | ADDRESSING MULTIPLE NODES                 | 23  | 12.3                                  | DETECTING A MOTOR STALL                  | 72   |
| 5.5                                 | RING MODE                                 | 25  | 12.4                                  | HOMING WITH STALLGUARD                   | 72   |
| 6 REGISTER MAPPING                  | 6 REGISTER MAPPING                        | 26  | 12.5 L IMITS OF STALLGUARD2 OPERATION | 12.5 L IMITS OF STALLGUARD2 OPERATION    | 72   |
| 6.1 GENERAL CONFIGURATION REGISTERS | 6.1 GENERAL CONFIGURATION REGISTERS       | 27  | 13 COOLSTEP OPERATION                 | 13 COOLSTEP OPERATION                    | 73   |
| 6.2                                 | RAMP GENERATOR REGISTERS                  | 30  | 13.1                                  | USER BENEFITS                            | 73   |
| 6.3                                 | ENCODER REGISTERS                         | 36  | 13.2                                  | SETTING UP FOR COOLSTEP                  | 73   |
| 6.4                                 | MICROSTEP TABLE REGISTERS                 | 38  | 13.3                                  | TUNING COOLSTEP                          | 75   |
| 6.5                                 | MOTOR DRIVER REGISTERS                    | 40  |                                       |                                          |      |
| 6.6                                 | VOLTAGE PWM MODE STEALTHCHOP              | 45  | 14 DCSTEP                             | 14 DCSTEP                                | 76   |

| 14.1                                    | USER BENEFITS                                | 76        | 21.2                                              | USING AN EXTERNAL CLOCK                           | 94      |
|-----------------------------------------|----------------------------------------------|-----------|---------------------------------------------------|---------------------------------------------------|---------|
| 14.2                                    | DESIGNING -IN DCSTEP                         | 76        | 21.3                                              | CONSIDERATIONS ON THE FREQUENCY                   | 95      |
| 14.3                                    | ENABLING DCSTEP                              | 77        | 22                                                | 22                                                |         |
| 14.4                                    | STALL DETECTION IN DCSTEP MODE               | 77        | ABSOLUTE MAXIMUM RATINGS                          | ABSOLUTE MAXIMUM RATINGS                          | 96      |
| 14.5                                    | MEASURING ACTUAL MOTOR VELOCITY IN OPERATION | DCSTEP 78 | 23 ELECTRICAL CHARACTERISTICS                     | 23 ELECTRICAL CHARACTERISTICS                     | 96      |
| 15 SINE-WAVE LOOK-UP TABLE              | 15 SINE-WAVE LOOK-UP TABLE                   | 79        | 23.1 23.2                                         | OPERATIONAL RANGE DC CHARACTERISTICS AND TIMING   | 96      |
|                                         |                                              |           |                                                   | CHARACTERISTICS                                   | 97      |
| 15.1                                    | USER BENEFITS                                | 79        | 23.3                                              | THERMAL CHARACTERISTICS                           | 100     |
| 15.2                                    | MICROSTEP TABLE                              | 79        | 24 LAYOUT CONSIDERATIONS                          | 24 LAYOUT CONSIDERATIONS                          | 101     |
| 16 STEP/DIR INTERFACE                   | 16 STEP/DIR INTERFACE                        | 81        |                                                   |                                                   |         |
| 16.1 TIMING                             | 16.1 TIMING                                  | 81        | 24.1                                              | EXPOSED DIE PAD                                   | 101     |
| 16.2                                    | CHANGING RESOLUTION                          | 82        | 24.2                                              | WIRING GND                                        | 101     |
| 16.3                                    | MICROPLYER STEP I NTERPOLATOR AND STAND      |           | 24.3 SUPPLY FILTERING                             | 24.3 SUPPLY FILTERING                             | 101 101 |
| STILL DETECTION                         | STILL DETECTION                              | 82        | 24.4 SINGLE DRIVER CONNECTION 24.5 LAYOUT EXAMPLE | 24.4 SINGLE DRIVER CONNECTION 24.5 LAYOUT EXAMPLE | 102     |
| 17 ABN INCREMENTAL ENCODER INTERFACE    | 17 ABN INCREMENTAL ENCODER INTERFACE         | 84        | 25 PACKAGE MECHANICAL DATA                        | 25 PACKAGE MECHANICAL DATA                        | 103     |
| 17.1 ENCODER TIMING                     | 17.1 ENCODER TIMING                          | 85        |                                                   |                                                   | 103     |
| 17.2 SETTING THE ENCODER TO MATCH MOTOR | RESOLUTION                                   | 86        | 25.1 DIMENSIONAL DRAWINGS 25.2 PACKAGE CODES      | 25.1 DIMENSIONAL DRAWINGS 25.2 PACKAGE CODES      | 103     |
| 17.3 CLOSING THE                        | 17.3 CLOSING THE                             | 86        | 26 DESIGN PHILOSOPHY                              | 26 DESIGN PHILOSOPHY                              | 104     |
| 18 QUICK                                | LOOP CONFIGURATION GUIDE                     | 87        | 27                                                | DISCLAIMER                                        | 104     |
| 19 GETTING STARTED                      | 19 GETTING STARTED                           | 92        | 28 ESD SENSITIVE DEVICE                           | 28 ESD SENSITIVE DEVICE                           | 104     |
| 19.1 NITIALIZATION EXAMPLES             | 19.1 NITIALIZATION EXAMPLES                  | 92        | 29 DESIGNED FOR SUSTAINABILITY                    | 29 DESIGNED FOR SUSTAINABILITY                    | 104     |
| 20 POWER-UP                             | I RESET                                      | 94        | 30 TABLE OF FIGURES                               | 30 TABLE OF FIGURES                               | 105     |
| 21                                      | CLOCK OSCILLATOR AND CLOCK INPUT             | 94        | 31 REVISION HISTORY                               | 31 REVISION HISTORY                               | 106     |
|                                         |                                              |           | 32                                                | 32                                                |         |
| 21.1 USING THE I NTERNAL CLOCK          | 21.1 USING THE I NTERNAL CLOCK               | 94        | REFERENCES                                        | REFERENCES                                        | 106     |

## 1 Principles of Operation

<!-- image -->

step &amp; dir (motor 2)

Figure 1.1 Basic application and block diagram

The TMC5072 motion controller and driver chip is an intelligent power component interfacing between the CPU and one or two stepper motors. All stepper motor logic is completely within the TMC5072. No software is required to control the motor -just provide target positions. The TMC5072 offers several unique enhancements which are enabled by the system-on-chip integration of driver and controller. The  SixPoint  ramp  generator  of  the  TMC5072  uses  StealthChop,  DcStep,  CoolStep,  and  StallGuard2 automatically to optimize every motor movement. The clear concept and the comprehensive solution save design time.

## 1.1 Key Concepts

The TMC5072 implements several advanced features which are exclusive to TRINAMIC products. These features  contribute  toward  greater  precision,  greater  energy  efficiency,  higher  reliability,  smoother motion, and cooler operation in many stepper motor applications.

StealthChop ™

No-noise,  high-precision  chopper  algorithm  for  inaudible  motion  and  inaudible standstill of the motor.

DcStep ™

Load dependent speed control. The motor moves as fast as possible and never loses a step.

StallGuard2 ™

High-precision load measurement using the back EMF on the motor coils.

CoolStep ™

Load-adaptive  current  control  which  reduces  energy  consumption  by  as  much  as 75%.

SpreadCycle ™

High-precision  chopper  algorithm  available  as  an  alternative  to  the  traditional constant off-time algorithm.

SixPoint ™

Fast  and  precise  positioning  using  a  hardware  ramp  generator  with  a  set  of  four acceleration / deceleration settings. Quickest response due to dedicated hardware.

In addition to these performance enhancements, TRINAMIC motor drivers offer safeguards to detect and protect against shorted outputs, output open-circuit, overtemperature, and undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

## 1.2 Control Interfaces

The  TMC5072  supports  both,  an  SPI  and  a  UART  based  single  wire  interface  with  CRC  checking. Selection of the actual interface is done via the configuration pin SW\_SEL, which can be hardwired to GND or VCC\_IO depending on the desired interface.

## 1.2.1 SPI Interface

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  node  another  bit  is  sent  simultaneously  from  the  node  to  the  master. Communication between an SPI master and the TMC5072 node always consists of sending one 40-bit command word and receiving one 40-bit status word.

The SPI command rate typically is a few commands per complete motor motion.

## 1.2.2 UART Interface

The single wire interface allows differential operation similar to RS485 (using SWIOP and SWION) or single wire interfacing (leaving open SWION). It can be driven by any standard UART. No baud rate configuration is required. An optional ring mode allows chaining of nodes to optimize interfacing for applications with regularly distributed drives.

## 1.3 Software

From  a  software  point  of  view  the  TMC5072  is  a  peripheral  with  a  number  of  control  and  status registers. Most of them can either be written only or read only. Some of the registers allow both read and  write  access.  In  case  read-modify-write  access  is  desired  for  a  write  only  register,  a  shadow register can be realized in master software.

## 1.4 Moving and Controlling the Motor

## 1.4.1 Integrated Motion Controller

The  integrated  32-bit  motion  controller  automatically  drives  the  motor  to  target  positions  or accelerates  to  target  velocities.  All  motion  parameters  can  be  changed  on  the  fly.  The  motion controller recalculates immediately. A minimum set of configuration data consists of acceleration and deceleration values and the maximum motion velocity. A start and stop velocity is supported as well as  a  second  acceleration  and  deceleration  setting.  The  integrated  motion  controller  supports immediate reaction to mechanical reference switches and to the sensorless stall detection StallGuard2.

## Benefits are:

- ­ Flexible ramp programming
- ­ Efficient use of motor torque for acceleration and deceleration allows higher machine throughput
- ­ Immediate reaction to stop and stall conditions

## 1.4.2 STEP/DIR Interface

One  or  both  motors  can  optionally  be  controlled  by  a  step  and  direction  input.  In  this  case,  the respective motion controller remains unused. Active edges on the STEP input can be rising edges or both rising and falling edges as controlled by another mode bit (DEDGE). Using both edges cuts the toggle rate of the STEP signal in half, which is useful for communication over slow interfaces such as optically isolated interfaces. On each active edge, the state sampled from the DIR input determines whether to step forward or back. Each step can be a fullstep or a microstep, in which there are 2, 4, 8, 16, 32, 64, 128, or 256 microsteps per fullstep. A step impulse with a low state on DIR increases the microstep counter and a high state decreases the counter by an amount controlled by the microstep resolution.  An  internal  table  translates  the  counter  value  into  the  sine  and  cosine  values  which control the motor current for microstepping.

## 1.5 StealthChop Driver with Programmable Microstepping Wave

Current into the motor coils is controlled using a cycle-by-cycle chopper mode. Up to three chopper modes are available: a traditional constant off-time mode and the SpreadCycle mode as well as the unique  StealthChop.  The  constant  off-time  mode  provides  higher  torque  at  highest  velocity,  while SpreadCycle mode offers smoother operation and greater power efficiency over a wide range of speed and load. The SpreadCycle chopper scheme automatically integrates a fast decay cycle and guarantees smooth zero crossing performance. In contrast to the other chopper modes, StealthChop is a voltage chopper-based principle. It guarantees that the motor is quiet in standstill and in slow motion, except for  noise  generated  by  ball  bearings.  The  extremely  smooth  motion  is  beneficial  for  many applications.

Programmable microstep shapes allow optimizing the motor performance.

## Benefits of using StealthChop:

- -Significantly improved microstepping with low-cost motors
- -Motor runs smooth and quiet
- -Absolutely no standby noise
- -Reduced mechanical resonances yields improved torque

## 1.6 StallGuard2 -Mechanical Load Sensing

StallGuard2  provides  an  accurate  measurement  of  the  load  on  the  motor.  It  can  be  used  for  stall detection as well as other uses at loads below those which stall the motor, such as CoolStep loadadaptive  current  reduction.  This  gives  more  information  on  the  drive  allowing  functions  like sensorless homing and diagnostics of the drive mechanics.

## 1.7 CoolStep -Load Adaptive Current Control

CoolStep  drives  the  motor  at  the  optimum  current.  It  uses  the  StallGuard2  load  measurement information to adjust the motor current to the minimum amount required in the actual load situation. This saves energy and keeps the components cool.

## Benefits are:

- -Energy efficiency
- -Motor generates less heat
- -Less or no cooling
- -Use of smaller motor

power consumption decreased up to 75%

improved mechanical precision improved reliability

less torque reserve required → cheaper motor does the job

Figure 1.2  shows  the  efficiency  gain  of  a  42mm  stepper  motor  when  using  CoolStep  compared  to standard operation with 50% of torque reserve. CoolStep is enabled above 60RPM in the example.

<!-- image -->

Figure 1.2 Energy efficiency with CoolStep (example)

## 1.8 DcStep -Load Dependent Speed Control

DcStep allows the motor to run near its load limit and at its velocity limit without losing a step. If the mechanical load on the motor increases to the stalling load, the motor automatically decreases velocity so that it can still drive the load. With this feature, the motor will never stall. In addition to the  increased  torque  at  a  lower  velocity,  dynamic  inertia  will  allow  the  motor  to  overcome mechanical overloads by decelerating. DcStep directly integrates with the ramp generator, so that the target position will be reached, even if the motor velocity needs to be decreased due to increased mechanical load. A dynamic range of up to factor 10 or more can be covered by DcStep without any step  loss.  By  optimizing  the  motion  velocity  in  high  load  situations,  this  feature  further  enhances overall system efficiency.

## Benefits are:

- -Motor does not loose steps in overload conditions
- -Application works as fast as possible
- -Highest possible acceleration automatically
- -Highest energy efficiency at speed limit
- -Highest possible motor torque using fullstep drive
- -Cheaper motor does the job

## 1.9 Encoder Interfaces

The TMC5072 provides two encoder interfaces for external incremental encoders. The encoders can be used for homing of the motion controllers (alternatively to reference switches) and for consistency checks on-the-fly between encoder position and ramp generator position. A programmable pre-scaler allows the adaptation of the encoder resolution to the motor resolution. 32-bit encoder counters are provided.

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC5072 pin assignments.

<!-- image -->

## 2.2 Signal Descriptions

| Pin    | Number   | Type   | Function                                                                                                                                                                      |
|--------|----------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GND    | 6, 34    | GND    | Digital ground pin for IO pins and digital circuitry.                                                                                                                         |
| VCC_IO | 7        |        | 3.3V or 5V I/O supply voltage pin for all digital pins. Does not supply digital circuitry!                                                                                    |
| VSA    | 30       |        | Analog supply voltage for 5V regulator - typically supplied with driver supply voltage. An additional 100nF capacitor to GND (GND plane) is recommended for best performance. |
| GNDA   | 31       | GND    | Analog GND. Tie to GND plane.                                                                                                                                                 |

| Pin     | Number   | Type   | Function                                                                                                                                                                                                                                                                                                                                |
|---------|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 5VOUT   | 32       |        | Output of internal 5V regulator. Attach 2.2μF or larger ceramic capacitor to GNDA near to pin for best performance. May be used to supply VCC of chip.                                                                                                                                                                                  |
| VCC     | 33       |        | 5V supply input for digital circuitry within chip and charge pump. Attach 470nF capacitor to GND (GND plane). May be supplied by 5VOUT. A 2.2Ω resistor is recommended for decoupling noise from 5VOUT. When using an external supply, make sure, that VCC comes up before or in parallel to 5VOUT or VCC_IO, whichever comes up later! |
| DIE_PAD | -        | GND    | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane.                                                                                                                                                                                                                            |

Table 2.1 Low voltage digital and analog power supply pins

| Pin   |   Number | Type   | Function                                                                                                   |
|-------|----------|--------|------------------------------------------------------------------------------------------------------------|
| CPO   |       35 | O(VCC) | Charge pump driver output. Outputs 5V (GND to VCC) square wave with 1/16 of internal oscillator frequency. |
| CPI   |       36 | I(VCP) | Charge pump capacitor input: Provide external 22nF or 33nF / 50V capacitor to CPO.                         |
| VCP   |       37 |        | Output of charge pump. Provide external 100nF capacitor to VS.                                             |

Table 2.2 Charge pump pins

| Pin                |   Number | Type   | Function                                                                                                                                                                                                                                      |
|--------------------|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ENC1A/INT          |        1 | I/O    | Input A for incremental encoder 1. Can be programmed to provide positive active interrupt output based on ramp generator flags RAMP_STAT bits 4, 5, 6 & 7 and encoder null event status ENC_STATUS bit 0 ( poscmp_enable =1).                 |
| ENC1B/PP           |        2 | I/O    | Input B for incremental encoder 1. Can be programmed to provide position compare output for motor 1 ( poscmp_enable =1).                                                                                                                      |
| CSN/IO0            |        3 | I/O    | Chip select input of SPI interface, programmable IO in UART mode                                                                                                                                                                              |
| SCK/IO1            |        4 | I/O    | Serial clock input of SPI interface, programmable IO in UART mode                                                                                                                                                                             |
| SDI/IO2            |        5 | I/O    | Data input of SPI interface, programmable IO in UART mode                                                                                                                                                                                     |
| SDO/RING           |        8 | I/O    | Data output of SPI interface (Tristate, enabled with CSN=0), mode configuration input in UART mode (0 = Normal mode, 1 = Single wire ring mode - SWIO_P is input, SWIO_N is output)                                                           |
| SWIOP (ENC1N)      |        9 | I/O    | Single wire I/O (positive). Serial input in ring mode. Multi-purpose input in SPI mode or encoder 1 N input.                                                                                                                                  |
| SWION (ENC2N)      |       10 | I/O    | Single wire I/O (negative) for differential mode. Leave open in non- differential mode when operating at 5V IO voltage or tie to desired threshold voltage. Serial output in ring mode. Multi-purpose input in SPI mode or encoder 2 N input. |
| CLK                |       11 | I      | Clock input. Tie to GND using short wire for internal clock or supply external clock. The first high signal disables the internal oscillator until power down.                                                                                |
| SWSEL              |       12 | I      | Interface selection input. Tie to GND for SPI mode, tie to VCC_IO for single wire (UART) interface mode.                                                                                                                                      |
| NEXTADDR           |       24 | I      | Address increment (if tied high) for single wire (UART) mode. General purpose input in SPI mode                                                                                                                                               |
| REFR2/DIR2 (ENC2B) |       25 | I      | Right reference switch input for motor 2, optional DIR input for STEP/DIR operation of motor 2 or encoder 2 B input                                                                                                                           |
| REFL2/STEP2        |       26 | I      | Left reference switch input for motor 2, optional STEP input for STEP/DIR operation of motor 2                                                                                                                                                |
| REFR1/DIR1 (ENC2A) |       27 | I      | Right reference switch input for motor 1, optional DIR input for STEP/DIR operation of motor 1 or encoder 2 A input                                                                                                                           |
| REFL1/STEP1        |       28 | I      | Left reference switch input for motor 1, optional STEP input for STEP/DIR operation of motor 1                                                                                                                                                |

Table 2.3 Digital I/O pins (all related to VCC\_IO supply)

| Pin      | Number     | Type   | Function                                                                                                                                                                         |
|----------|------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DRV_ENN  | 29         | I      | Enable input for motor drivers. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a high level. Tie to GND for normal operation. |
| TST_MODE | 48         | I      | Test mode input. Tie to GND using short wire.                                                                                                                                    |
| -        | 13, 23, 38 | N.C.   | Unused pins - no internal electrical connection. Leave open or tie to GND for compatibility with future devices.                                                                 |

Table 2.4 Power driver pins

| Pin   | Number   | Type   | Function                                                                                                                       |
|-------|----------|--------|--------------------------------------------------------------------------------------------------------------------------------|
| O2A1  | 14       | O (VS) | Motor 2 coil A output 1                                                                                                        |
| BR2A  | 15       |        | Sense resistor connection for motor 2 coil A. Place sense resistor to GND near pin.                                            |
| O2A2  | 16       | O (VS) | Motor 2 coil A output 2                                                                                                        |
| VS    | 17, 19   |        | Motor supply voltage. Provide filtering capacity near pin with shortest loop to nearest GNDP pin (respectively via GND plane). |
| GNDP  | 18       | GND    | Power GND. Connect to GND plane near pin.                                                                                      |
| O2B1  | 20       | O (VS) | Motor 2 coil B output 1                                                                                                        |
| BR2B  | 21       |        | Sense resistor connection for motor 2 coil B. Place sense resistor to GND near pin.                                            |
| O2B2  | 22       | O (VS) | Motor 2 coil B output 2                                                                                                        |
| O1B2  | 39       | O (VS) | Motor 1 coil B output 2                                                                                                        |
| BR1B  | 40       |        | Sense resistor connection for motor 1 coil B. Place sense resistor to GND near pin.                                            |
| O1B1  | 41       | O (VS) | Motor 1 coil B output 1                                                                                                        |
| VS    | 42, 44   |        | Motor supply voltage. Provide filtering capacity near pin with shortest loop to nearest GNDP pin (respectively via GND plane). |
| GNDP  | 43       | GND    | Power GND. Connect to GND plane near pin.                                                                                      |
| O1A2  | 45       | O (VS) | Motor 1 coil A output 2                                                                                                        |
| BR1A  | 46       |        | Sense resistor connection for motor 1 coil A. Place sense resistor to GND near pin.                                            |
| O1A1  | 47       | O (VS) | Motor 1 coil A output 1                                                                                                        |

## 3 Sample Circuits

The  sample  circuits  show  the  connection  of  the  external  components  in  different  operation  and supply modes. The connection of the bus interface and further digital signals is left out for clarity.

## 3.1 Standard Application Circuit

Figure 3.1 Standard application circuit

<!-- image -->

The standard application circuit uses two sense resistors to set the motor coil current. Use low ESR capacitors for filtering the power supply. The capacitors need to cope with the current ripple cause by chopper  operation.  A  minimum  capacity  of  100µF  near  the  driver  is  recommended  for  best performance.  Current  ripple  in  the  supply  capacitors  also  depends  on  the  power  supply  internal resistance and cable length. VCC\_IO can be supplied from 5VOUT, or from an external source, e.g., a low drop 3.3V regulator.  To minimize linear voltage  regulator power dissipation of the internal 5V voltage regulator in applications where VM is high, a different (lower) supply voltage can be used for VSA, if available. For example, many applications provide a 12V supply in addition to a higher supply voltage like 24V. Using the 12V supply for VSA will reduce the power dissipation of the internal 5V regulator  to  about  37%  of  the  dissipation  caused  by  supply  with  the  full  motor  voltage.  For  best motor  chopper  performance,  an  optional  R/C-filter  de-couples  5VOUT  from  digital  noise  cause  by power drawn from VCC.

## Basic layout hints

Place sense resistors and all filter capacitors as close as possible to the related IC pins. Use a solid common GND for all GND connections, also for sense resistor GND. Connect 5VOUT filtering capacitor directly to 5VOUT and GNDA pin. See layout hints for more details. Low ESR electrolytic capacitors are recommended for VS filtering.

## Attention

Ensure sufficient capacity on VS to limit supply ripple, and to keep power slopes below 1V/µs. Failure to  do  so  could  result  in  destructive  currents  via  the  charge  pump  capacitor.  Provide  overvoltage protection in case the motor could be manually turned at a high velocity, or in case the driver could become cut off from the main supply capacitors. Significant energy can be fed back from motor coils to the power supply in the event of quick deceleration, or when the driver becomes disabled.

## 3.2 5 V Only Supply

Figure 3.2 5V only operation

<!-- image -->

While  the  standard  application  circuit  is  limited  to  roughly  5.5 V  lower  supply  voltage,  a  5 V  only application lets the IC run from a normal 5 V +/-5% supply. In this application, linear regulator drop must  be  minimized.  Therefore,  the  major  5 V  load  is  removed  by  supplying  VCC  directly  from  the external supply. To keep supply ripple away from the analog voltage reference, 5VOUT should have an own filtering capacity and the 5VOUT pin does not become bridged to the 5V supply.

## 3.3 One Motor with High Current

The TMC5072 supports double motor current for a single driver by paralleling both power stages. It requires setting a flag in GCONF as  well  as  modifying the board layout to match the single motor configuration. As the TMC5072 offers up to 1.5A peak per motor, this way it can drive up to 3 Amperes into each motor coil (i.e., up to 2A RMS) while offering the same feature set as for a single motor.

Activate the single\_driver in the global configuration register GCONF .  This register can be locked for subsequent write accesses to prevent reverting to a wrong configuration.

In a parallel connection setup, driver 1 takes over the complete control for both power stages. Thus, driver 1 layout should be optimized concerning sense resistor placement, etc. Connect driver 2 bridge outputs  and  BR  pins  in  parallel  to  the  corresponding  driver  1  pins  using  low  ohmic,  short interconnections.  Especially  for  the  BR  pins  of  driver  2,  it  is  important  to  use  low  inductivity interconnection lines to the driver 1 pin BR pins. A straight routing should be preferred. As the output pins Oxxx are also paralleled, the PCB routing can access the outputs from one or the other side of the driver, or even mixed.

Pay special attention to provide enough cooling area and vias to transfer heat into the GND plane. A 70µm GND plane will bring additional enhancements, leading to a higher motor current capability.

Figure 3.3 Driving a single motor with high current

<!-- image -->

## Attention

Be sure to switch the IC to single motor mode, before enabling drivers: Set single\_driver = 1.

## 3.4 External 5V Power Supply

When a clean external 5V power supply is available, the power  dissipation  caused by  the  internal linear regulator can be eliminated by directly supplying the analog and digital part (Figure 3.4) of the driver.  This  especially  is  beneficial  in  high  voltage  applications,  and  when  thermal  conditions  are critical. Make sure, that the 5V supply does not exceed VS level by more than a diode drop.

The circuit  will  benefit  from  a  well-regulated  supply,  e.g.,  when  using  a  +/-1%  regulator.  A  precise supply  guarantees  increased  motor  current  precision  because  the  voltage  at  5VOUT  directly  is  the reference  voltage  for  all  internal  units  of  the  driver,  especially  for  motor  current  control.  For  best performance, the power supply should have low ripple to give a precise and stable supply at 5VOUT pin with remaining ripple well below 5mV. Some switching regulators have a higher remaining ripple, or  different  loads  on  the  supply  may  cause  lower  frequency  ripple.  In  this  case,  increase  capacity attached to 5VOUT. In case the external supply voltage has poor stability or low frequency ripple, this would affect the precision of the motor current regulation as well as add chopper noise.

Figure 3.4 Using an external 5V supply to bypass internal regulator

<!-- image -->

## 3.5 Optimizing Analog Precision

The 5VOUT pin is used as an analog reference for operation of the TMC5072. Performance will degrade when there  is  voltage  ripple  on  this  pin.  Most  of  the  high  frequency  ripple  in  a  TMC5072  design results from the operation of the internal digital logic. The digital logic switches with each edge of the  clock  signal.  Further,  ripple  results  from  operation  of  the  charge  pump,  which  operates  with roughly  1 MHz  and  draws  current  from  the  VCC  pin.  To  keep  this  ripple  as  low  as  possible,  an additional filtering capacitor can be put directly next to the VCC pin with vias to the GND plane giving a short connection to the digital GND pins (pin 6 and pin 34). Analog performance is best, when this ripple is kept away from the analog supply pin 5VOUT, using an additional series resistor of 2.2 Ω . The voltage drop on this resistor will be roughly 100 mV (IVCC * R).

Figure 3.5 RC-Filter on VCC for reduced ripple

<!-- image -->

## 3.6 Driver Protection and EME Circuitry

Some applications have to cope with ESD events caused by motor operation or external influence. Despite ESD circuitry within the driver chips, ESD events occurring during operation can cause a reset or even a destruction of the motor driver, depending on their energy. Especially plastic housings and belt drive systems tend to cause ESD events of several kV. It is best practice to avoid ESD events by attaching all conductive parts, especially the motors themselves to PCB ground, or to apply electrically conductive plastic parts. In addition, the driver can be protected up to a certain degree against ESD events or live plugging / pulling the motor, which also causes high voltages and high currents into the motor connector terminals. A simple scheme uses capacitors at the driver outputs to reduce the dV/dt caused by ESD events. Larger capacitors will bring more benefit concerning ESD suppression, but cause additional current flow in each chopper cycle, and thus increase driver power dissipation, especially  at  high  supply  voltages.  The  values  shown  are  example  values -they  might  be  varied between 100pF and 1nF. The capacitors also dampen high frequency noise injected from digital parts of the application PCB circuitry and thus reduce electromagnetic emission. A more elaborate scheme uses LC filters to de-couple the driver outputs from the motor connector. Varistors in between of the coil terminals eliminate coil overvoltage caused by live plugging. Optionally protect all outputs by a varistor against ESD voltage.

Figure 3.6 Simple ESD enhancement and more elaborate motor output protection

<!-- image -->

## 4 SPI Interface

## 4.1 SPI Datagram Structure

The TMC5072 uses 40-bit SPI ™ (Serial Peripheral Interface, SPI is Trademark of Motorola) datagrams for communication with a microcontroller. Microcontrollers which are equipped with hardware SPI are typically able to communicate using integer multiples of 8 bit. The NCS line of the TMC5072 must be handled in a way, that it stays active (low) for the complete duration of the datagram transmission.

Each datagram sent to the device is composed of an address byte followed by four data bytes. This allows direct 32-bit data word communication with the register set. Each register is accessed via 32 data bits even if it uses less than 32 data bits.

For simplification, each register is specified by a one-byte address:

- -For a read access the most significant bit of the address byte is 0.
- -For a write access the most significant bit of the address byte is 1.

Most registers are write-only registers, some can be read additionally, and there are also some read only registers.

<!-- image -->

| SPI DATAGRAM STRUCTURE   |
|--------------------------|

## 4.1.1 Selection of Write / Read (WRITE\_notREAD)

The  read  and  write  selection  is  controlled  by  the  MSB  of  the  address  byte  (bit  39  of  the  SPI datagram).  This  bit  is  0  for  read  access  and  1  for  write  access.  So,  the  bit  named  W  is  a WRITE\_notREAD control bit. The active high write bit is the MSB of the address byte. So, 0x80 has to be added to the address for a write access. The SPI interface always delivers data back to the master, independent of the W bit. The data transferred back is the data read from the address, which was transmitted  with  the previous datagram,  if  the  previous  access  was  a  read  access.  If  the  previous access was a write access, then the data read back mirrors the previously received write data. So, the difference between a read and a write access is that the read access does not transfer data to the addressed register, but it transfers the address only and its 32 data bits are dummies, and further the following  read  or  write  access  delivers  back  the  data  read  from  the  address  transmitted  in  the preceding read cycle.

A read access request datagram uses dummy write data. Read data is transferred back to the master with  the  subsequent  read  or  write  access.  Hence,  reading  multiple  registers  can  be  done  in  a pipelined fashion.

Whenever  data  is  read  from  or  written  to  the  TMC5072,  the  MSBs  delivered  back  contain  the  SPI status, SPI\_STATUS , a number of eight selected status bits.

## Example :

For a read access to the register ( XACTUAL ) with the address 0x21, the address byte has to be set to 0x21 in the access preceding the read access. For a write access to the register ( VACTUAL ), the address byte has to be set to 0x80 + 0x22 = 0xA2. For read access, the data bit might have any value (-). So, one can set them to 0.

action read XACTUAL

read XACTUAL

write VMAX := 0x00ABCDEF

write VMAX := 0x00123456

## data sent to TMC5072 data received from TMC5072

- → 0x2100000000
- → 0x2100000000
- → 0xA700ABCDEF
- → 0xA700123456
- *)S: is a placeholder for the status bits SPI\_STATUS

## 4.1.2 SPI Status Bits Transferred with Each Datagram Read Back

New status information becomes latched at the end of each access and is available with the next SPI transfer.

| SPI_STATUS - status flags transmitted with each SPI access in bits 39 to 32   | SPI_STATUS - status flags transmitted with each SPI access in bits 39 to 32   | SPI_STATUS - status flags transmitted with each SPI access in bits 39 to 32   |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| Bit                                                                           | Name                                                                          | Comment                                                                       |
| 7                                                                             | -                                                                             | reserved (0)                                                                  |
| 6                                                                             | status_stop_l(2)                                                              | RAMP_STAT2 [0] - 1: Signals motor 2 stop left switch status                   |
| 5                                                                             | status_stop_l(1)                                                              | RAMP_STAT1 [0] - 1: Signals motor 1 stop left switch status                   |
| 4                                                                             | velocity_reached(2)                                                           | RAMP_STAT2 [8] - 1: Signals motor 2 has reached its target velocity           |
| 3                                                                             | velocity_reached(1)                                                           | RAMP_STAT1 [8] - 1: Signals motor 1 has reached its target velocity           |
| 2                                                                             | driver_error(2)                                                               | GSTAT [2] - 1: Signals driver 2 driver error (clear by reading GSTAT )        |
| 1                                                                             | driver_error(1)                                                               | GSTAT [1] - 1: Signals driver 1 driver error (clear by reading GSTAT )        |
| 0                                                                             | reset_flag                                                                    | GSTAT [0] - 1: Signals, that a reset has occurred (clear by reading GSTAT )   |

## 4.1.3 Data Alignment

All data are right aligned. Some registers represent unsigned (positive) values, some represent integer values (signed) as two's complement numbers, single bits or groups of bits are represented as single bits respectively as integer groups.

## 4.2 SPI Signals

The SPI bus on the TMC5072 has four signals:

- -SCK -bus clock input
- -SDI -serial data input
- -SDO -serial data output
- -CSN -chip select input (active low)

The node is enabled  for an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the node latching the data from SDI on the rising edge of SCK  and  driving  data  to  SDO  following  the  falling  edge.  The  most  significant  bit  is  sent  first.  A minimum of 40 SCK clock cycles is required for a bus transaction with the TMC5072.

If more than 40 clocks are driven, the additional bits shifted into SDI are shifted out on SDO after a 40-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the node. If more than 40 bits are sent, only the last 40 bits received before the rising edge of CSN are recognized as the command.

-  0xSS &amp; unused data
-  0xSS &amp; XACTUAL
-  0xSS &amp; XACTUAL
-  0xSS00ABCDEF

## 4.3 Timing

The SPI interface is synchronized to the internal system clock, which limits the SPI bus clock SCK to half of the system clock frequency. If the system clock is based on the on-chip oscillator, an additional 10% safety margin must be used to ensure reliable data transmission. All SPI inputs as well as the ENN input are internally filtered to avoid triggering on pulses shorter than 20ns. Figure 4.1 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

Figure 4.1 SPI timing

<!-- image -->

Hint

Usually this SPI timing is referred to as SPI MODE 3

| SPI interface timing                             | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK                                         | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK   |
|--------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| Parameter                                        | Symbol                                   | Conditions                                                                     | Min                                      | Typ                                      | Max                                      | Unit                                     |
| SCK valid before or after change of CSN          | t CC                                     |                                                                                | 10                                       |                                          |                                          | ns                                       |
| CSN high time                                    | t CSH                                    | *) Min time is for synchronous CLK with SCK high one t CH before CSN high only | t CLK *)                                 | >2t CLK +10                              |                                          | ns                                       |
| SCK low time                                     | t CL                                     | *) Min time is for synchronous CLK only                                        | t CLK *)                                 | >t CLK +10                               |                                          | ns                                       |
| SCK high time                                    | t CH                                     | *) Min time is for synchronous CLK only                                        | t CLK *)                                 | >t CLK +10                               |                                          | ns                                       |
| SCK frequency using internal clock               | f SCK                                    | assumes minimum OSC frequency                                                  |                                          |                                          | 4                                        | MHz                                      |
| SCK frequency using external 16MHz clock         | f SCK                                    | assumes synchronous CLK                                                        |                                          |                                          | 8                                        | MHz                                      |
| SDI setup time before rising edge of SCK         | t DU                                     |                                                                                | 10                                       |                                          |                                          | ns                                       |
| SDI hold time after rising edge of SCK           | t DH                                     |                                                                                | 10                                       |                                          |                                          | ns                                       |
| Data out valid time after falling SCK clock edge | t DO                                     | no capacitive load on SDO                                                      |                                          |                                          | t FILT +5                                | ns                                       |
| SDI, SCK and CSN filter delay time               | t FILT                                   | rising and falling edge                                                        | 12                                       | 20                                       | 30                                       | ns                                       |

## 5 UART Single Wire Interface

The UART single wire interface allows the control of the TMC5072 with any microcontroller UART. It shares transmit and receive line like an RS485 based interface. Data transmission is secured using a cyclic redundancy check, so that increased interface distances (e.g., over cables between two PCBs) can be bridged without the danger of wrong or missed commands even in the event of electro-magnetic disturbance.  The  automatic  baud  rate  detection  and  an  advanced  addressing  scheme  make  this interface easy and flexible to use.

## 5.1 Datagram Structure

## 5.1.1 Write Access

| UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           | UART WRITE ACCESS DATAGRAM STRUCTURE           |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|
| LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 | LSB…MSB, highest byte transmitted first 0 … 63 |
|                                                |                                                |                                                |                                                |                                                |                                                |                                                |                                                | 8 bit node address                             | 8 bit node address                             | 8 bit node address                             | RW + 7 bit register addr.                      | RW + 7 bit register addr.                      | RW + 7 bit register addr.                      | 32 bit data                                    | 32 bit data                                    | 32 bit data                                    | CRC                                            | CRC                                            | CRC                                            |
| 0…7                                            | 0…7                                            | 0…7                                            | 0…7                                            | 0…7                                            | 0…7                                            | 0…7                                            | 0…7                                            | 8…15                                           | 8…15                                           | 8…15                                           | 16…23                                          | 16…23                                          | 16…23                                          | 24…55                                          | 24…55                                          | 24…55                                          | 56…63                                          | 56…63                                          | 56…63                                          |
| 1                                              | 0                                              | 1                                              | 0                                              | Reserved (don't cares but included in CRC)     | Reserved (don't cares but included in CRC)     | Reserved (don't cares but included in CRC)     | Reserved (don't cares but included in CRC)     | NODEADDR                                       | NODEADDR                                       | NODEADDR                                       | register address                               | register address                               | 1                                              | data bytes 3, 2, 1, 0 (high to low byte)       | data bytes 3, 2, 1, 0 (high to low byte)       | data bytes 3, 2, 1, 0 (high to low byte)       | CRC                                            | CRC                                            | CRC                                            |
| 0                                              | 1                                              | 2                                              | 3                                              | 4                                              | 5                                              | 6                                              | 7                                              | 8                                              | …                                              | 15                                             | 16                                             | …                                              | 23                                             | 24                                             | …                                              | 55                                             | 56                                             | …                                              | 63                                             |

A sync nibble precedes each transmission to and from the TMC5072 and is embedded into the first transmitted byte, followed by an addressing byte. Each transmission allows a synchronization of the internal baud rate divider to the master clock. The actual baud rate is adapted, and variations of the internal clock frequency are compensated. Thus, the baud rate can be freely chosen within the valid range. Each transmitted byte starts with a start bit (logic 0, low level on SWIOP) and ends with a stop bit  (logic  1,  high  level  on  SWIOP).  The  bit  time  is  calculated  by  measuring  the  time  from  the beginning of start bit (1 to 0 transition) to the end of the sync frame (1 to 0 transition from bit 2 to bit 3). All data is transmitted byte wise. The 32-bit data words are transmitted with the highest byte first.

A minimum baud rate of 9000 baud is permissible, assuming 20 MHz clock (worst case for low baud rate). Maximum baud rate is fCLK/16 due to the required stability of the baud clock.

The node address is determined by the register NODEADDR . If the external address pin NEXTADDR is set, the node address becomes incremented by one.

The communication becomes reset if a pause time of longer than 63 bit times between the start bits of two successive bytes occurs. This timing is based on the last correctly received datagram. In this case, the transmission needs to be restarted after a failure recovery time of minimum 12 bit times of bus idle time. This scheme allows the master to reset communication in case of transmission errors. Any pulse on an idle data line below 16 clock cycles will be treated as a glitch and leads to a timeout of 12 bit times, for which the data line must be idle. Other errors like wrong CRC are also treated the same  way.  This  allows  a  safe  re-synchronization  of  the  transmission  after  any  error  conditions. Remark, that due to this mechanism, an abrupt reduction of the baud rate to less than 15 percent of the previous value is not possible.

Each  accepted  write  datagram  becomes  acknowledged  by  the  receiver  by  incrementing  an  internal cyclic  datagram  counter  (8  bit).  Reading  out  the  datagram  counter  allows  the  master  to  check  the success  of  an  initialization  sequence  or  single  write  accesses.  Read  accesses  do  not  modify  the counter.

## 5.1.2 Read Access

| UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first |
| sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | node address                                         | node address                                         | RW + 7 bit register address                          | RW + 7 bit register address                          | CRC                                                  | CRC                                                  |                                                      |                                                      |
| 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 8…15                                                 | 8…15                                                 | 16…23                                                | 16…23                                                | 24…31                                                | 24…31                                                |                                                      |                                                      |
| 1                                                    | 0                                                    | 1                                                    | 0                                                    | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | NODEADDR                                             | NODEADDR                                             | register address                                     | 0                                                    | CRC                                                  | CRC                                                  |                                                      |                                                      |
| 0                                                    | 1                                                    | 2                                                    | 3                                                    | 4                                                    | 5                                                    | 6                                                    | 7                                                    | 8                                                    | 15                                                   | 16                                                   | 23 24                                                | …                                                    | 31                                                   |                                                      |                                                      |

The read access request  datagram structure  is  identical  to  the  write  access  datagram  structure  but uses a lower number of user bits. Its function is the addressing of the node and the transmission of the desired register address for the read access. The TMC5072 responds with the same baud rate as the master uses for the read request.

To ensure a clean bus transition from the master to the node, the TMC5072 does not immediately send the reply to a read access, but it uses a programmable delay time after which the first reply byte becomes sent following a read request. This delay time can be set in multiples of eight bit times using SENDDELAY time setting (default=8 bit times) according to the needs of the master. In a multinode system, set SENDDELAY to min. 2 for all nodes. Otherwise, a non-addressed node might detect a transmission error upon read access to a different node.

| UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   | UART READ ACCESS REPLY DATAGRAM STRUCTURE each byte is LSB…MSB, highest byte transmitted first   |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      | 0 ...... 63                                                                                      |
|                                                                                                  |                                                                                                  |                                                                                                  |                                                                                                  |                                                                                                  |                                                                                                  |                                                                                                  |                                                                                                  | 8 bit node address                                                                               | 8 bit node address                                                                               | 8 bit node address                                                                               | RW + 7 bit register addr.                                                                        | RW + 7 bit register addr.                                                                        | RW + 7 bit register addr.                                                                        | 32 bit data                                                                                      | 32 bit data                                                                                      | 32 bit data                                                                                      | CRC                                                                                              | CRC                                                                                              | CRC                                                                                              |
| 0…7                                                                                              | 0…7                                                                                              | 0…7                                                                                              | 0…7                                                                                              | 0…7                                                                                              | 0…7                                                                                              | 0…7                                                                                              | 0…7                                                                                              | 8…15                                                                                             | 8…15                                                                                             | 8…15                                                                                             | 16…23                                                                                            | 16…23                                                                                            | 16…23                                                                                            | 24…55                                                                                            | 24…55                                                                                            | 24…55                                                                                            | 56…63                                                                                            | 56…63                                                                                            | 56…63                                                                                            |
| 1                                                                                                | 0                                                                                                | 1                                                                                                | 0                                                                                                | reserved (0)                                                                                     | reserved (0)                                                                                     | reserved (0)                                                                                     | reserved (0)                                                                                     | 0xFF                                                                                             | 0xFF                                                                                             | 0xFF                                                                                             | register address                                                                                 | register address                                                                                 | 0                                                                                                | data bytes 3, 2, 1, 0 (high to low byte)                                                         | data bytes 3, 2, 1, 0 (high to low byte)                                                         | data bytes 3, 2, 1, 0 (high to low byte)                                                         | CRC                                                                                              | CRC                                                                                              | CRC                                                                                              |
| 0                                                                                                | 1                                                                                                | 2                                                                                                | 3                                                                                                | 4                                                                                                | 5                                                                                                | 6                                                                                                | 7                                                                                                |                                                                                                  | …                                                                                                | 15                                                                                               | 16                                                                                               | …                                                                                                | 23                                                                                               | 24                                                                                               | …                                                                                                | 55                                                                                               | 56                                                                                               | …                                                                                                | 63                                                                                               |

The read response is sent to the master using address code %1111. The transmitter becomes switched inactive four bit times after the last bit is sent.

Address  %11111111  is  reserved  for  read  accesses  going  to  the  master.  A  node  cannot  use  this address.

## ERRATA IN READ ACCESS

A known bug in the UART interface implementation affects read access to registers that change during the access. While the SPI interface takes a snapshot of the read register before transmission, the UART interface  transfers  the  register  directly  MSB  to  LSB  without  taking  a  snapshot.  This  may  lead  to inconsistent data when reading out a register that changes during the transmission. Further, the CRC sent  from  the  driver  may  be  incorrect  in  this  case  (but  must  not),  which  will  lead  to  the  master repeating the read access. As a workaround, it is advised not to read out quickly changing registers like XACTUAL , MSCNT or X\_ENC during  a  motion,  but  instead  first  stop  the  motor  or  check  the position\_reached flag to become active and read out these values afterwards. If possible, use X\_LATCH and ENC\_LATCH for  a  safe  readout  during  motion  (e.g.,  for  homing).  As  the  encoder  cannot  be guaranteed to stand still during motor stop, only a  dual read access and check for identical result ensures correct X\_ENC read data. Use the vzero and velocity\_reached flag rather than reading VACTUAL . Reading INPUT register may always cause CRC errors.

## 5.2 CRC Calculation

An 8-bit CRC polynomial is used for checking both read and write access. It allows detection of up to eight single bit errors. The CRC8-ATM polynomial with an initial value of zero is applied LSB to MSB, including  the  sync-  and  addressing  byte.  The  sync  nibble  is  assumed  to  always  be  correct.  The TMC5072  responds  only  to  correctly  transmitted  datagrams  containing  its  own  node  address.  It increases its datagram counter for each correctly received write access datagram.

<!-- formula-not-decoded -->

## SERIAL CALCULATION EXAMPLE

CRC = (CRC &lt;&lt; 1) OR (CRC.7 XOR CRC.1 XOR CRC.0 XOR [new incoming bit])

```
C-CODE EXAMPLE FOR CRC CALCULATION void swuart_calcCRC(UCHAR* datagram, UCHAR datagramLength) { int i,j; UCHAR* crc = datagram + (datagramLength-1); // CRC located in last byte of message UCHAR currentByte; *crc = 0; for (i=0; i<(datagramLength-1); i++) {      // Execute for all bytes of a message currentByte = datagram[i];                // Retrieve a byte to be sent from Array for (j=0; j<8; j++) { if ((*crc >> 7) ^ (currentByte&0x01))   // update CRC based result of XOR operation { *crc = (*crc << 1) ^ 0x07; } else { *crc = (*crc << 1); } currentByte = currentByte >> 1; } // for CRC bit } // for message byte }
```

## 5.3 UART Signals

The UART interface on the TMC5072 has following signals:

| TMC5072 UART I NTERFACE SIGNALS   | TMC5072 UART I NTERFACE SIGNALS                                                                                                                                                                                            |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SWIOP                             | Non-inverted data input and output                                                                                                                                                                                         |
| SWION                             | Inverted data input and output for use in differential transmission. Can be left open in a 5V IO voltage system. Tie to the half IO level voltage for best performance in a 3.3V single wire non-differential application. |
| NEXTADDR                          | Address increment pin for sequential addressing scheme                                                                                                                                                                     |
| SDO/RING                          | A low level on this input selects standard mode, a high-level switches to ring mode                                                                                                                                        |

In  UART  mode  (SW\_SEL  high)  the  node  checks  the  single  wire  SWIOP  and  SWION  for  correctly received datagrams with its own address continuously. Both signals are switched as input during this time.  It  adapts  to  the  baud  rate  based  on  the  sync  nibble,  as  described  before.  In  case  of  a  read access, it switches on its output drivers on SWIOP and SWION and sends its response using the same baud rate.

## 5.4 Addressing Multiple Nodes

## ADDRESSING ONE OR TWO NODES

If  only  one  or  two  TMC5072  are  addressed  by  a  master  using  a  single  UART  interface,  a  hardware address selection can be done by setting the NEXTADDR pins to different levels .

## ADDRESSING UP TO 255 NODES

A different approach can address any number of devices by using the input NEXTADDR as a selection pin . Addressing up to 255 units is possible.

address 0, IO0 is high-Z

program to address 254 &amp; set IO0 low

address 254

address 254

Addressing phase 1:

Addressing phase 2:

Addressing phase 3:

Addressing phase 4:

Addressing phase X :

continue procedure

Figure 5.1 Addressing multiple TMC5072 via single wire interface using chaining

<!-- image -->

## Proceed as follows:

- -Tie the NEXTADDR pin of your first TMC5072 to GND.
- -Interconnect one of the general-purpose IO-pins of the first TMC5072 to the next drivers NEXTADDR pin using an additional pull-up resistor. Connect further drivers in the same fashion.
- -Now, the first driver responds to address 0. Following drivers are set to address 1.
- -Program the first driver to its dedicated node address. Note: once a driver is initialized with its node address, its general-purpose output, which is tied to the next drivers NEXTADDR has to be programmed as output and set to 0.
- -Now, the second driver is accessible and can get its node address. Further units can be programmed to their node addresses sequentially.

Figure 5.2 Addressing multiple TMC5072 via differential interface, additional filtering for NEXTADDR

<!-- image -->

A different scheme (not shown) uses bus switches (like 74HC4066) to connect the bus to the next unit in the chain without using the NAI input. The bus switch can be controlled in the same fashion, using the NAO output to enable it (low level shall enable the bus switch). Once the bus switch is enabled it allows  addressing  the  next  bus  segment.  As  bus  switches  add  a  certain  resistance,  the  maximum number of nodes will be reduced.

It  is  possible  to  mix  different  styles  of  addressing  in  a  system.  For  example,  a  system  using  two boards with each two TMC5072 can have both devices on a board with a different level on NEXTADDR, while the next board is chained using analog switches separating the bus until the drivers on the first board have been programmed.

## 5.5 Ring Mode

In a second mode of operation, all nodes are cascaded in a ring. The intention is to allow a simple scheme  of  addressing  without  the  need  for  additional  NEXTADDR  wires.  At  the  same  time,  the distance between each two chips can be kept short due to the chain structure, and the load on each line is only a single input. Therefore, the logical ring is optimum when wiring cost is critical. In case the physical structure more resembles a line rather than a ring, the devices can be cascaded in a way that each second IC is chained in direction left to right and back. This way, the distance from the last node 's data output to the master is no longer than the distance between three nodes.

Figure 5.3 Ring Mode Example

<!-- image -->

The ring mode is enabled by tying SDO/RING high and enabling UART mode. In this mode, SWIO\_P is the data input (CMOS level), while SWIO\_N is the data output. SWIO\_N stays high (idle state) and does forward data coming in via SWIO\_P, until NODEADDR has been programmed. This way, the addressing phase can be accomplished for a number of cascaded nodes. All data is forwarded from SWIO\_P to SWIO\_N after the address setting has been programmed to a value different from 0. Having addressed all nodes in the chain allows master requests to go to all nodes, while node response travels via all devices to the master. The NEXTADDR input is not required for addressing in this mode, unless two rings with a common start point are intended. Please be aware, that data can only pass from any node through the ring structure back to the master after all nodes have been assigned an address different from 0. Do not assign two identical addresses.

## 6 Register Mapping

This chapter gives an overview of the complete register set. Some of the registers bundling a number of  single  bits  are  detailed  in  extra  tables.  The  functional  practical  application  of  the  settings  is detailed in dedicated chapters.

## Note

- All registers become reset to 0 upon power up, unless otherwise noted.
- Add 0x80 to the address Addr for write accesses!

| NOTATION OF HEXADECIMAL AND BINARY NUMBERS   | NOTATION OF HEXADECIMAL AND BINARY NUMBERS    |
|----------------------------------------------|-----------------------------------------------|
| 0x                                           | precedes a hexadecimal number, e.g. 0x04      |
| %                                            | precedes a multi-bit binary number, e.g. %100 |

| NOTATION OF R/W FIELD   |                             |
|-------------------------|-----------------------------|
| R                       | Read only                   |
| W                       | Write only                  |
| R/W                     | Read- and writable register |
| R+C                     | Clear upon read             |

## OVERVIEW REGISTER MAPPING

| REGISTER                                           | DESCRIPTION                                                                                                                                                                                                                                                                                                 |
|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General Configuration Registers                    | These registers contain - global configuration - global status flags - node address configuration - and I/O configuration                                                                                                                                                                                   |
| Ramp Generator Motion Control Register Set         | This register set offers registers for - choosing a ramp mode - choosing velocities - homing - acceleration and deceleration - target positioning                                                                                                                                                           |
| Ramp Generator Driver Feature Control Register Set | This register set offers registers for - driver current control - setting thresholds for CoolStep operation - setting thresholds for different chopper modes - setting thresholds for DcStep operation - reference switch and StallGuard2 event configuration - a ramp and reference switch status register |
| Encoder Register Set                               | The encoder register set offers all registers needed for proper ABN encoder operation.                                                                                                                                                                                                                      |
| Motor Driver Register Set                          | This register set offers registers for - setting / reading out microstep table and counter - chopper and driver configuration - CoolStep and StallGuard2 configuration - DcStep configuration, and - reading out StallGuard2 values and driver error flags                                                  |

## 6.1 General Configuration Registers

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                             | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        |                                                                                                                                                           |                                                 |
|                                                 |                                                 |                                                 |                                                 | Description / bit names GCONF - Global configuration flags                                                                                                |                                                 |
| RW                                              | 0x00                                            | 11                                              | GCONF                                           | 1: N channel 1 mapped to REFL1. enc2_enable 0: Right reference switches are available. 1: Encoder 2 A and B signals are mapped to REFR1 and REFR2 inputs. |                                                 |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                                                      | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                                                      |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                                                                                                            | Description / bit names                                                                                                                                                                                                                                                                            |
|                                                 |                                                 |                                                 |                                                 | Bit                                                                                                                                                                                                                                                                                                | GSTAT - Global status flags                                                                                                                                                                                                                                                                        |
|                                                 |                                                 |                                                 |                                                 | 0                                                                                                                                                                                                                                                                                                  | reset 1: Indicates that the IC has been reset since the last read access to GSTAT. All registers have been cleared to reset values.                                                                                                                                                                |
|                                                 |                                                 |                                                 |                                                 | 1                                                                                                                                                                                                                                                                                                  | drv_err1 1: Indicates, that driver 1 has been shut down due to overtemperature or short circuit detection                                                                                                                                                                                          |
| R+C                                             | 0x01                                            | 4                                               | GSTAT                                           |                                                                                                                                                                                                                                                                                                    | since the last read access. Read DRV_STATUS1 for details. The flag can only be reset when all error conditions are cleared. drv_err2                                                                                                                                                               |
|                                                 |                                                 |                                                 |                                                 | 2                                                                                                                                                                                                                                                                                                  | 1: Indicates, that driver 2 has been shut to overtemperature or short circuit                                                                                                                                                                                                                      |
|                                                 |                                                 |                                                 |                                                 |                                                                                                                                                                                                                                                                                                    | down due detection since the last read access. Read DRV_STATUS2 for details. The flag can only be reset when all error conditions are cleared.                                                                                                                                                     |
|                                                 |                                                 |                                                 |                                                 | 3                                                                                                                                                                                                                                                                                                  | uv_cp 1: Indicates an undervoltage on the charge                                                                                                                                                                                                                                                   |
|                                                 |                                                 |                                                 |                                                 |                                                                                                                                                                                                                                                                                                    | pump.                                                                                                                                                                                                                                                                                              |
|                                                 |                                                 |                                                 |                                                 | The driver is disabled in this case.                                                                                                                                                                                                                                                               | The driver is disabled in this case.                                                                                                                                                                                                                                                               |
| R                                               | 0x02                                            | 8                                               | IFCNT                                           | Interface transmission counter. This register becomes incremented with each successful UART interface write access. It can be read out to check the serial transmission for lost data. Read accesses do not change the content. Disabled in SPI operation. The counter wraps around from 255 to 0. | Interface transmission counter. This register becomes incremented with each successful UART interface write access. It can be read out to check the serial transmission for lost data. Read accesses do not change the content. Disabled in SPI operation. The counter wraps around from 255 to 0. |
|                                                 |                                                 |                                                 |                                                 | Bit                                                                                                                                                                                                                                                                                                | NODECONF                                                                                                                                                                                                                                                                                           |
|                                                 |                                                 |                                                 |                                                 | 7..0                                                                                                                                                                                                                                                                                               | NODEADDR : Sets the address of unit for the UART interface. The address becomes incremented by one when the external address pin NEXTADDR is active. Range: 0-253 (254), default=0                                                                                                                 |
| W                                               | 0x03                                            | 8 + 4                                           | NODECONF                                        | 11..8                                                                                                                                                                                                                                                                                              | In ring mode, 0 disables forwarding. SENDDELAY : 0, 1: 8 bit times (not allowed with multiple nodes) 2, 3: 3*8 bit times                                                                                                                                                                           |
|                                                 |                                                 |                                                 |                                                 | Bit                                                                                                                                                                                                                                                                                                | INPUT                                                                                                                                                                                                                                                                                              |
|                                                 |                                                 |                                                 |                                                 |                                                                                                                                                                                                                                                                                                    | Reads the digital state of all input pins available plus the state of IO pins set to output.                                                                                                                                                                                                       |
|                                                 |                                                 |                                                 |                                                 | 0                                                                                                                                                                                                                                                                                                  | io0_in : IO0 polarity                                                                                                                                                                                                                                                                              |
|                                                 |                                                 |                                                 |                                                 | 1                                                                                                                                                                                                                                                                                                  | io1_in : IO1 polarity                                                                                                                                                                                                                                                                              |
|                                                 |                                                 |                                                 |                                                 | 2                                                                                                                                                                                                                                                                                                  | io2_in : IO2 polarity                                                                                                                                                                                                                                                                              |
| R                                               | 0x04                                            | 9 +                                             | INPUT                                           | 3                                                                                                                                                                                                                                                                                                  | io3_in : IO3 polarity                                                                                                                                                                                                                                                                              |
|                                                 |                                                 | 8                                               |                                                 | 4 5                                                                                                                                                                                                                                                                                                | iop_in: IOP pin polarity (always input in                                                                                                                                                                                                                                                          |
|                                                 |                                                 |                                                 |                                                 |                                                                                                                                                                                                                                                                                                    | SPI mode) ion_in : ION pin polarity (always input in SPI mode)                                                                                                                                                                                                                                     |
|                                                 |                                                 |                                                 |                                                 | 6                                                                                                                                                                                                                                                                                                  | : NEXTADDR pin polarity                                                                                                                                                                                                                                                                            |
|                                                 |                                                 |                                                 |                                                 |                                                                                                                                                                                                                                                                                                    | nextaddr_in                                                                                                                                                                                                                                                                                        |
|                                                 |                                                 |                                                 |                                                 | 7                                                                                                                                                                                                                                                                                                  | drv_enn_in : DRV_ENN pin polarity                                                                                                                                                                                                                                                                  |
|                                                 |                                                 |                                                 |                                                 | 8                                                                                                                                                                                                                                                                                                  | sw_comp_in : UART input comparator (1: IOP voltage is above ION voltage). The accuracy is about 20mV.                                                                                                                                                                                              |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                                                    |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                                                                                                          |
| W                                               |                                                 | 4 + 4                                           | OUTPUT                                          | 31.. 24 VERSION : 0x10=version of the IC Identical numbers mean full digital compatibility. Bit OUTPUT Sets the IO output pin polarity and data direction. 0 io0_out : IO0 output polarity 1 io1_out : IO1 output polarity 2 io2_out : IO2 output polarity 3 - 8 ioddr0 (IO0: 0=input, 1=output) |

## 6.2 Ramp Generator Registers

Addresses Addr are specified for motor 1 (upper value) and motor 2 (second address).

## 6.2.1 Ramp Generator Motion Control Register Set

| RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)                                                                                                                                                                     | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| R/W                                                                                       | Addr                                                                                      | n                                                                                         | Register                                                                                  | Description / bit names                                                                                                                                                                                                                                     | Range [Unit] 0…3                                                                          |
| RW                                                                                        | 0x20 0x40                                                                                 | 2                                                                                         | RAMPMODE                                                                                  | RAMPMODE: 0: Positioning mode (using all A, D and V parameters) 1: Velocity mode to positive VMAX (using AMAX acceleration) 2: Velocity mode to negative VMAX (using AMAX acceleration) 3: Hold mode (velocity remains unchanged, unless stop event occurs) |                                                                                           |
| RW                                                                                        | 0x21 0x41                                                                                 | 32                                                                                        | XACTUAL                                                                                   | Actual motor position (signed) Hint: This value normally should only be modified, when homing the drive. In positioning mode, modifying the register content will start a motion.                                                                           | - 2^31… +(2^31)-1                                                                         |
| R                                                                                         | 0x22 0x42                                                                                 | 24                                                                                        | VACTUAL                                                                                   | Actual motor velocity from ramp generator (signed) The sign matches the motion direction. A negative sign means motion to lower XACTUAL.                                                                                                                    | +-(2^23)-1 [µsteps / t]                                                                   |
| W                                                                                         | 0x23 0x43                                                                                 | 18                                                                                        | VSTART                                                                                    | Motor start velocity (unsigned) Normally, set VSTOP ≥ VSTART! VSTART may be set to a higher value, when motion distance is sufficient to allow deceleration to VSTOP.                                                                                       | 0…(2^18) -1 [µsteps / t]                                                                  |
| W                                                                                         | 0x24 0x44                                                                                 | 16                                                                                        | A1                                                                                        | First acceleration between VSTART and V1 (unsigned)                                                                                                                                                                                                         | 0…(2^16) -1 [µsteps / ta²]                                                                |
| W                                                                                         | 0x25 0x45                                                                                 | 20                                                                                        | V1                                                                                        | First acceleration / deceleration phase threshold velocity (unsigned) 0: Disables A1 and D1 phase, use AMAX , DMAX only                                                                                                                                     | 0…(2^20) -1 [µsteps / t]                                                                  |
| W                                                                                         | 0x26 0x46                                                                                 | 16                                                                                        | AMAX                                                                                      | Second acceleration between V1 and VMAX (unsigned) This is the acceleration and deceleration value for velocity mode.                                                                                                                                       | 0…(2^16) -1 [µsteps / ta²]                                                                |
| W                                                                                         | 0x27 0x47                                                                                 | 23                                                                                        | VMAX                                                                                      | Motion ramp target velocity (for positioning ensure VMAX ≥ VSTART ) (unsigned) This is the target velocity in velocity mode. It can be changed any time during a motion.                                                                                    | 0…(2^23) -512 [µsteps / t]                                                                |
| W                                                                                         | 0x28 0x48                                                                                 | 16                                                                                        | DMAX                                                                                      | Deceleration between VMAX and V1 (unsigned)                                                                                                                                                                                                                 | 0…(2^16) -1 [µsteps / ta²]                                                                |

| RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| R/W                                                                                       | Addr                                                                                      | n                                                                                         | Register                                                                                  | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Range [Unit]                                                                              |
| W                                                                                         | 0x2A 0x4A                                                                                 | 16                                                                                        | D1                                                                                        | Deceleration between V1 and VSTOP (unsigned) Attention: Do not set 0 in positioning mode, even if V1=0!                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 1…( 2^16)-1 [µsteps / ta²]                                                                |
| W                                                                                         | 0x2B 0x4B                                                                                 | 18                                                                                        | VSTOP                                                                                     | Motor stop velocity (unsigned) Attention: Set VSTOP ≥ VSTART! Attention: Do not set 0 in positioning mode, minimum 10 recommended!                                                                                                                                                                                                                                                                                                                                                                                                                                    | 1…(2^18) -1 [µsteps / t]                                                                  |
| W                                                                                         | 0x2C 0x4C                                                                                 | 16                                                                                        | TZEROWAIT                                                                                 | Waiting time after ramping down to zero velocity before next movement or direction inversion can start and before motor power down starts. Time range is about 0 to 2 seconds. This setting avoids excess acceleration e.g.                                                                                                                                                                                                                                                                                                                                           | 0…(2^16) -1 * 512 t CLK                                                                   |
| RW                                                                                        | 0x2D 0x4D                                                                                 | 32                                                                                        | XTARGET                                                                                   | from VSTOP to - VSTART . Target position for ramp mode (signed). Write a new target position to this register to activate the ramp generator positioning in RAMPMODE =0. Initialize all velocity, acceleration, and deceleration parameters before. Hint: The position is allowed to wrap around, thus, XTARGET value optionally can be treated as an unsigned number. Hint: The maximum possible displacement is +/-((2^31)-1). Hint: When increasing V1, D1 or DMAX during a motion, rewrite XTARGET afterwards to trigger a second acceleration phase, if desired. | - 2^31… +(2^31)-1                                                                         |

## 6.2.2 Ramp Generator Driver Feature Control Register Set

| RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                                                               | Addr                                                                                              | n                                                                                                 | Register                                                                                          | Description / bit names                                                                           | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| W                                                                                                 | 0x30 0x50                                                                                         | 5 + 5 + 4                                                                                         | IHOLD_IRUN                                                                                        | Bit 4..0 12..8 19..16                                                                             | IHOLD_IRUN - Driver current control IHOLD Standstill current (0=1/32…31=32/32) In combination with StealthChop mode, setting IHOLD =0 allows to choose freewheeling or coil short circuit for motor stand still. IRUN Motor run current (0=1/32…31=32/32) Hint: Choose sense resistors in a way, that normal IRUN is 16 to 31 for best microstep performance. IHOLDDELAY Controls the number of clock cycles for motor power down after a motion as soon as TZEROWAIT has expired. The smooth transition avoids a motor jerk upon power down. 0: instant power down 1..15: Delay per current reduction step in multiple |
| W                                                                                                 | 0x31 0x51                                                                                         | 23                                                                                                | VCOOLTHRS                                                                                         | becomes threshold. blanking                                                                       | disabled again once the velocity falls below this This allows for homing procedures with StallGuard out the StallGuard signal at low velocities (will not                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| W                                                                                                 | 0x32 0x52                                                                                         | 23                                                                                                | VHIGH                                                                                             | scale) - If                                                                                       | vhighchm is set, the chopper switches to chm =1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

| RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                         | Addr                                                        | n                                                           | Register                                                    | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| W                                                           | 0x33 0x53                                                   | 23                                                          | VDCMIN                                                      | Automatic commutation DcStep becomes enabled above velocity V DCMIN (unsigned) In this mode, the actual position is determined by the sensor- less motor commutation and becomes fed back to XACTUAL . In case the motor becomes heavily loaded, VDCMIN also is used as the minimum step velocity. 0: Disable, DcStep off &#124;VACT&#124; ≥ VDCMIN ≥ 256: - Triggers the same actions as exceeding VHIGH . - Switches on automatic commutation DcStep Hint: Also set bits vhighfs and vhighchm and set DCCTRL parameters to operate DcStep. (Only bits 22 … 8 are used for value and for comparison) |
| RW                                                          | 0x34 0x54                                                   | 12                                                          | SW_MODE                                                     | Switch mode configuration See separate table!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| R+C                                                         | 0x35 0x55                                                   | 14                                                          | RAMP_STAT                                                   | Ramp status and switch event status See separate table!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| R                                                           | 0x36 0x56                                                   | 32                                                          | XLATCH                                                      | Ramp generator latch position, latches XACTUAL upon a programmable switch event (see SW_MODE ). Hint: The encoder position can be latched to ENC_LATCH together with XLATCH to allow consistency checks.                                                                                                                                                                                                                                                                                                                                                                                              |

Time reference t for velocities: t = 2^24 / fCLK

Time reference ta² for accelerations: ta² = 2^41 / (fCLK)²

## 6.2.2.1 SW\_MODE -Reference Switch &amp; StallGuard2 Event Configuration Register

| 0X34, 0X54: SW_MODE - REFERENCE SWITCH AND STALLGUARD2 EVENT CONFIGURATION REGISTER   | 0X34, 0X54: SW_MODE - REFERENCE SWITCH AND STALLGUARD2 EVENT CONFIGURATION REGISTER   | 0X34, 0X54: SW_MODE - REFERENCE SWITCH AND STALLGUARD2 EVENT CONFIGURATION REGISTER                                                                                                                                                                                                                                                                                                                                                                                                           |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                                   | Name                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11                                                                                    | en_softstop                                                                           | Comment 0: Hard stop 1: Soft stop The soft stop mode always uses the deceleration ramp settings DMAX , V 1 , D1 , VSTOP and TZEROWAIT for stopping the motor. A stop occurs when the velocity sign matches the reference switch position (REFL for negative velocities, REFR for positive velocities) and the respective switch stop function is enabled. A hard stop also uses TZEROWAIT before the motor becomes released. Attention: Do not use soft stop in combination with StallGuard2. |
| 10                                                                                    | sg_stop                                                                               | 1: Enable stop by StallGuard2. Disable to release motor after stop event. Attention: Do not enable during motor spin-up, wait until the motor velocity exceeds a certain value, where StallGuard2 delivers a stable result, or set VCOOLTHRS to a suitable value.                                                                                                                                                                                                                             |
| 9                                                                                     | en_latch_encoder                                                                      | 1: Latch encoder position to ENC_LATCH upon reference switch event.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 8                                                                                     | latch_r_inactive                                                                      | 1: Activates latching of the position to XLATCH upon an inactive going edge on the right reference switch input REFR. The active level is defined by pol_stop_r.                                                                                                                                                                                                                                                                                                                              |
| 7                                                                                     | latch_r_active                                                                        | 1: Activates latching of the position to XLATCH upon an active going edge on the right reference switch input REFR. Hint: Activate latch_r_active to detect any spurious stop event by reading status_latch_r.                                                                                                                                                                                                                                                                                |
| 6                                                                                     | latch_l_inactive                                                                      | 1: Activates latching of the position to XLATCH upon an inactive going edge on the left reference switch input REFL. The active level is defined by pol_stop_l.                                                                                                                                                                                                                                                                                                                               |
| 5                                                                                     | latch_l_active                                                                        | 1: Activates latching of the position to XLATCH upon an active going edge on the left reference switch input REFL. Hint: Activate latch_l_active to detect any spurious stop event by reading status_latch_l.                                                                                                                                                                                                                                                                                 |
| 4                                                                                     | swap_lr                                                                               | 1: Swap the left and the right reference switch input REFL and REFR                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3                                                                                     | pol_stop_r                                                                            | Sets the active polarity of the right reference switch input 0=non-inverted, high active: a high level on REFR stops the motor 1=inverted, low active: a low level on REFR stops the motor                                                                                                                                                                                                                                                                                                    |
| 2                                                                                     | pol_stop_l                                                                            | Sets the active polarity of the left reference switch input 0=non-inverted, high active: a high level on REFL stops the motor 1=inverted, low active: a low level on REFL stops the motor                                                                                                                                                                                                                                                                                                     |
| 1                                                                                     | stop_r_enable                                                                         | 1: Enables automatic motor stop during active right reference switch input Hint: The motor restarts in case the stop switch becomes released.                                                                                                                                                                                                                                                                                                                                                 |
| 0                                                                                     | stop_l_enable                                                                         | 1: Enables automatic motor stop during active left reference switch input Hint: The motor restarts in case the stop switch becomes released.                                                                                                                                                                                                                                                                                                                                                  |

## 6.2.2.2 RAMP\_STAT -Ramp and Reference Switch Status Register

| 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER   | 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER   | 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER   | 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                                 | Bit                                                                 | Name                                                                | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| R                                                                   | 13                                                                  | status_sg                                                           | 1: Signals an active StallGuard2 input from the CoolStep driver or from the DcStep unit, if enabled. Hint: When polling this flag, stall events may be missed - activate sg_stop to be sure not to miss the stall event.                                                                                                                                                                                                                                                                                 |
| R+C                                                                 | 12                                                                  | second_move                                                         | 1: Signals that the automatic ramp required moving back in the opposite direction, e.g., due to on-the-fly parameter change (Flag is cleared upon reading)                                                                                                                                                                                                                                                                                                                                               |
| R                                                                   | 11                                                                  | t_zerowait_ active                                                  | 1: Signals, that TZEROWAIT is active after a motor stop. During this time, the motor is in standstill.                                                                                                                                                                                                                                                                                                                                                                                                   |
| R                                                                   | 10                                                                  | vzero                                                               | 1: Signals, that the actual velocity is 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| R                                                                   | 9                                                                   | position_ reached                                                   | 1: Signals, that the target position is reached. This flag becomes set while XACTUAL and XTARGET match.                                                                                                                                                                                                                                                                                                                                                                                                  |
| R                                                                   | 8                                                                   | velocity_ reached                                                   | 1: Signals, that the target velocity is reached. This flag becomes set while VACTUAL and VMAX match.                                                                                                                                                                                                                                                                                                                                                                                                     |
| R+C                                                                 | 7                                                                   | event_pos_ reached                                                  | 1: Signals, that the target position has been reached ( position_reached becoming active). (Flag and interrupt condition are cleared upon reading) This bit is ORed to the interrupt output signal.                                                                                                                                                                                                                                                                                                      |
| R+C                                                                 | 6                                                                   | event_stop_ sg                                                      | 1: Signals an active StallGuard2 stop event. Reading the register will clear the stall condition and the motor may re-start motion unless the motion controller has been stopped. (Flag and interrupt condition are cleared upon reading) This bit is ORed to the interrupt output signal.                                                                                                                                                                                                               |
| R                                                                   | 5                                                                   | event_stop_r                                                        | 1: Signals an active stop right condition due to stop switch. The stop condition and the interrupt condition can be removed by setting RAMP_MODE to hold mode or by commanding a move to the opposite direction. In soft_stop mode, the condition will remain active until the motor has stopped motion into the direction of the stop switch. Disabling the stop switch or the stop function also clears the flag, but the motor will continue motion. This bit is ORed to the interrupt output signal. |
| R                                                                   | 4                                                                   | event_stop_l                                                        | 1: Signals an active stop left condition due to stop switch. The stop condition and the interrupt condition can be removed by setting RAMP_MODE to hold mode or by commanding a move to the opposite direction. In soft_stop mode, the condition will remain active until the motor has stopped motion into the direction of the stop switch. Disabling the stop switch or the stop function also clears the flag, but the motor will continue motion. This bit is ORed to the interrupt output signal.  |
| R+C                                                                 | 3                                                                   | status_latch_r                                                      | 1: Latch right ready (enable position latching using SWITCH_MODE settings latch_r_active or latch_r_inactive ) (Flag is cleared upon reading)                                                                                                                                                                                                                                                                                                                                                            |
| R+C                                                                 | 2                                                                   | status_latch_l                                                      | 1: Latch left ready (enable position latching using SWITCH_MODE settings latch_l_active or latch_l_inactive ) (Flag is cleared upon reading)                                                                                                                                                                                                                                                                                                                                                             |
| R                                                                   | 1                                                                   | status_stop_r                                                       | Reference switch right status (1=active)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## 6.3 Encoder Registers

| ENCODER REGISTER SET (MOTOR 1: 0X 38…0 X3C, MOTOR 2: 0X 58…0 X5C)   | ENCODER REGISTER SET (MOTOR 1: 0X 38…0 X3C, MOTOR 2: 0X 58…0 X5C)   | ENCODER REGISTER SET (MOTOR 1: 0X 38…0 X3C, MOTOR 2: 0X 58…0 X5C)   | ENCODER REGISTER SET (MOTOR 1: 0X 38…0 X3C, MOTOR 2: 0X 58…0 X5C)   | ENCODER REGISTER SET (MOTOR 1: 0X 38…0 X3C, MOTOR 2: 0X 58…0 X5C)                                                                                                                                                                                                                                    | ENCODER REGISTER SET (MOTOR 1: 0X 38…0 X3C, MOTOR 2: 0X 58…0 X5C)                                     |
|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| R/W                                                                 | Addr                                                                | n                                                                   | Register                                                            | Description / bit names                                                                                                                                                                                                                                                                              | Range [Unit]                                                                                          |
| RW                                                                  | 0x38 0x58                                                           | 12                                                                  | ENCMODE                                                             | Encoder configuration and use of N channel See separate table!                                                                                                                                                                                                                                       |                                                                                                       |
| RW                                                                  | 0x39 0x59                                                           | 32                                                                  | X_ENC                                                               | Actual encoder position (signed)                                                                                                                                                                                                                                                                     | - 2^31… +(2^31)-1                                                                                     |
| W                                                                   | 0x3A 0x5A                                                           | 32                                                                  | ENC_CONST                                                           | Accumulation constant (signed) 16 bit integer part, 16 bit fractional part X_ENC accumulates +/- ENC_CONST / (2^16* X_ENC ) (binary) or +/- ENC_CONST / (10^4* X_ENC ) (decimal) ENCMODE bit enc_sel_decimal switches between decimal and binary setting. Use the sign, to match rotation direction! | binary: ± [µsteps/2^16] ±(0 … 32767.999847) decimal: ±(0.0 … 32767.9999) reset default = 1.0 (=65536) |
| R+C                                                                 | 0x3B 0x5B                                                           | 1                                                                   | ENC_STATUS                                                          | bit 0: n_event 1: Encoder N event detected. Status bit is cleared on read: Read (R) + clear (C) This bit is ORed to the interrupt output signal.                                                                                                                                                     |                                                                                                       |
| R                                                                   | 0x3C 0x5C                                                           | 32                                                                  | ENC_LATCH                                                           | Encoder position X_ENC latched on N event                                                                                                                                                                                                                                                            |                                                                                                       |

## 6.2.2.3 ENCMODE -Encoder Register

| 0X38, 0X58: ENCMODE - ENCODER REGISTER   | 0X38, 0X58: ENCMODE - ENCODER REGISTER   | 0X38, 0X58: ENCMODE - ENCODER REGISTER                                                                                                                          | 0X38, 0X58: ENCMODE - ENCODER REGISTER                                                                                                                                               |
|------------------------------------------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                      | Name                                     | Comment                                                                                                                                                         | Comment                                                                                                                                                                              |
| 11                                       | latch_now                                | 1                                                                                                                                                               | Latch X_ENC (and XACTUAL if selected by bit latch_x_act ) directly upon write access to ENCMODE . This allows checking the encoder deviation by comparing the X_LATCH and ENC_LATCH. |
| 11                                       | latch_now                                | 0                                                                                                                                                               | No action                                                                                                                                                                            |
| 10                                       | enc_sel_decimal                          | 0                                                                                                                                                               | Encoder prescaler divisor binary mode: Counts ENC_CONST(fractional part) /65536                                                                                                      |
| 10                                       | enc_sel_decimal                          | 1                                                                                                                                                               | Encoder prescaler divisor decimal mode: Counts in ENC_CONST(fractional part) /10000                                                                                                  |
| 9                                        | latch_x_act                              | 1: Also latch XACTUAL position together with X_ENC . Allows latching the ramp generator position upon an N channel event as selected by pos_edge and neg_edge . | 1: Also latch XACTUAL position together with X_ENC . Allows latching the ramp generator position upon an N channel event as selected by pos_edge and neg_edge .                      |
| 8                                        | clr_enc_x                                | 0                                                                                                                                                               | Upon N event, X_ENC becomes latched to ENC_LATCH only                                                                                                                                |
| 8                                        | clr_enc_x                                | 1                                                                                                                                                               | Latch and additionally clear encoder counter X_ENC at N-event                                                                                                                        |
| 7                                        | neg_edge                                 | n p                                                                                                                                                             | N channel event sensitivity                                                                                                                                                          |
| 6                                        | pos_edge                                 | 0 0                                                                                                                                                             | N channel event is active during an active N event level                                                                                                                             |
| 6                                        | pos_edge                                 | 0 1                                                                                                                                                             | N channel is valid upon active going N event                                                                                                                                         |
| 6                                        | pos_edge                                 | 1 0                                                                                                                                                             | N channel is valid upon inactive going N event                                                                                                                                       |
| 6                                        | pos_edge                                 | 1 1                                                                                                                                                             | N channel is valid upon active going and inactive going N event                                                                                                                      |
| 5                                        | clr_once                                 | 1: Latch or latch and clear X_ENC on the next N event following the write access                                                                                | 1: Latch or latch and clear X_ENC on the next N event following the write access                                                                                                     |
| 4                                        | clr_cont                                 | 1: Always latch or latch and clear X_ENC upon an N event (once per revolution, it is recommended to combine this setting with edge sensitive N event)           | 1: Always latch or latch and clear X_ENC upon an N event (once per revolution, it is recommended to combine this setting with edge sensitive N event)                                |
| 3                                        | ignore_AB                                | 0                                                                                                                                                               | An N event occurs only when polarities given by pol_N , pol_A and pol_B match.                                                                                                       |
| 3                                        | ignore_AB                                | 1                                                                                                                                                               | Ignore A and B polarity for N channel event                                                                                                                                          |
| 2                                        | pol_N                                    | Defines active polarity of N (0=neg., 1=pos.)                                                                                                                   | Defines active polarity of N (0=neg., 1=pos.)                                                                                                                                        |
| 1                                        | pol_B                                    | Required B polarity for an N channel event (0=neg., 1=pos.)                                                                                                     | Required B polarity for an N channel event (0=neg., 1=pos.)                                                                                                                          |
| 0                                        | pol_A                                    | Required A polarity for an N channel event (0=neg., 1=pos.)                                                                                                     | Required A polarity for an N channel event (0=neg., 1=pos.)                                                                                                                          |

## 6.4 Microstep Table Registers

| COMMON MICROSTEP TABLE REGISTERS (MOTOR 1/2: 0X 60…0 X69)   | COMMON MICROSTEP TABLE REGISTERS (MOTOR 1/2: 0X 60…0 X69)   | COMMON MICROSTEP TABLE REGISTERS (MOTOR 1/2: 0X 60…0 X69)   | COMMON MICROSTEP TABLE REGISTERS (MOTOR 1/2: 0X 60…0 X69)   | COMMON MICROSTEP TABLE REGISTERS (MOTOR 1/2: 0X 60…0 X69)                                                                                                                                                                                                                                                                     | COMMON MICROSTEP TABLE REGISTERS (MOTOR 1/2: 0X 60…0 X69)   |
|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| R/W                                                         | Addr                                                        | n                                                           | Register                                                    | Description / bit names                                                                                                                                                                                                                                                                                                       | Range [Unit]                                                |
| W                                                           | 0x60                                                        | 32                                                          | MSLUT[0] microstep table entries 0…31                       | Each bit gives the difference between entry x and entry x+1 when combined with the cor- responding MSLUTSEL W bits: 0: W = %00: -1 %01: +0                                                                                                                                                                                    | 32x 0 or 1 reset default= sine wave table                   |
| W                                                           | 0x61 … 0x67                                                 | 7 x 32                                                      | MSLUT[1...7] microstep table entries 32…255                 | %10: +1 %11: +2 1: W = %00: +0 %01: +1 %10: +2 %11: +3 This is the differential coding for the first quarter of a wave. Start values for CUR_A and CUR_B are stored for MSCNT position 0 in START_SIN and START_SIN90 . ofs31, ofs30, …, ofs01, ofs00 …                                                                       | 7x 32x 0 or 1 reset default= sine wave table                |
| W                                                           | 0x68                                                        | 32                                                          | MSLUTSEL                                                    | ofs255, ofs254, …, ofs225, ofs224 This register defines four segments within each quarter MSLUT wave. Four 2-bit entries determine the meaning of a 0 and a 1 bit in the corresponding segment of MSLUT . See separate table!                                                                                                 | 0 < X1 < X2 < X3 reset default= sine wave table             |
| W                                                           | 0x69                                                        | 8 + 8                                                       | MSLUTSTART                                                  | bit 7… 0: START_SIN bit 23… 16: START_SIN90 START_SIN gives the absolute current at microstep table entry 0. START_SIN90 gives the absolute current for microstep table entry at positions 256. Start values are transferred to the microstep registers CUR_A and CUR_B , whenever the reference position MSCNT =0 is passed. | START_SIN reset default =0 START_SIN90 reset default =247   |

## MIRCOSTEP TABLE CALCULATION FOR A SINE WAVE EQUIVALENT TO THE POWER ON DEFAULT:

<!-- formula-not-decoded -->

- -i :[0… 255] is the table index
- -The amplitude of the wave is 248. The resulting maximum positive value is 247 and the maximum negative value is -248.
- -The round function rounds values from 0.5 to 1.4999 to 1

## 6.4.1 MSLUTSEL -Look up Table Segmentation Definition

| 0X68: MSLUTSEL - LOOK UP TABLE SEGMENTATION DEFINITION   | 0X68: MSLUTSEL - LOOK UP TABLE SEGMENTATION DEFINITION   | 0X68: MSLUTSEL - LOOK UP TABLE SEGMENTATION DEFINITION                                                                                                                                                     |
|----------------------------------------------------------|----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                      | Name                                                     | Comment                                                                                                                                                                                                    |
| 31 30 29                                                 | Function LUT segment 3 start                             | The sine wave look-up table can be divided into up to four segments using an individual step width control entry Wx . The segment borders are selected by X1 , X2 and X3 . Segment 0 goes from 0 to X1 -1. |
| 24 23 X2 22 21                                           | LUT segment 2 start                                      | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                             |
| 15 X1 14 13 12 11 10 9                                   | LUT segment 1 start                                      | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                             |
| 8 7 6                                                    | LUT width select from ofs(X3) to ofs255                  | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                     |
| 5 W2                                                     | LUT width select from ofs(X2) to ofs(X3-1)               | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                     |
| 4 3 W1                                                   | LUT width select from ofs(X1) to ofs(X2-1)               | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                     |
| 2 1 W0                                                   | LUT width select from                                    | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                     |
| 0                                                        | ofs00 to ofs(X1-1)                                       | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                     |
| 15 X1 14 13 12 11 10 9                                   | LUT segment 1 start                                      | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                     |
| 15 X1 14 13 12 11 10 9                                   | LUT segment 1 start                                      |                                                                                                                                                                                                            |

## 6.5 Motor Driver Registers

| MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 6A…0 X6F, MOTOR 2: 0X 7A…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 6A…0 X6F, MOTOR 2: 0X 7A…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 6A…0 X6F, MOTOR 2: 0X 7A…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 6A…0 X6F, MOTOR 2: 0X 7A…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 6A…0 X6F, MOTOR 2: 0X 7A…0 X7F)                                                                                                                                                                                                                                                                                                | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 6A…0 X6F, MOTOR 2: 0X 7A…0 X7F)   |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| R/W                                                                      | Addr                                                                     | n                                                                        | Register                                                                 | Description / bit names                                                                                                                                                                                                                                                                                                                                               | Range [Unit]                                                             |
| R                                                                        | 0x6A 0x7A                                                                | 10                                                                       | MSCNT                                                                    | Microstep counter. Indicates actual position in the microstep table for CUR_B . CUR_A uses an offset of 256. Hint: Move to a position where MSCNT is zero before re-initializing MSLUTSTART or MSLUT and MSLUTSEL .                                                                                                                                                   | 0…1023                                                                   |
| R                                                                        | 0x6B 0x7B                                                                | 9 + 9                                                                    | MSCURACT                                                                 | bit 8… 0: Sine CUR_B (signed): Actual microstep current for motor phase B as read from MSLUT (not scaled by current) bit 24… 16: Cosine CUR_A (signed): Actual microstep current for motor phase A as read from MSLUT (not scaled by current)                                                                                                                         | +/-0...255                                                               |
| RW                                                                       | 0x6C 0x7C                                                                | 32                                                                       | CHOPCONF                                                                 | chopper and driver configuration See separate table!                                                                                                                                                                                                                                                                                                                  |                                                                          |
| W                                                                        | 0x6D 0x7D                                                                | 25                                                                       | COOLCONF                                                                 | CoolStep smart current control register and StallGuard2 configuration See separate table!                                                                                                                                                                                                                                                                             |                                                                          |
| W                                                                        | 0x6E 0x7E                                                                | 8 + 8                                                                    | DCCTRL                                                                   | DcStep ( DC ) automatic commutation configuration register: bit 7… 0: DC_TIME : Upper PWM on time limit for commutation ( DC_TIME * 1/f CLK ). Set slightly above effective blank time TBL . bit 15… 8: DC_SG : Max. PWM on time for step loss detection using DcStep StallGuard2 in DcStep mode. ( DC_SG * 16/f CLK ) Set slightly higher than DC_TIME /16 0=disable |                                                                          |
| R                                                                        | 0x6F 0x7F                                                                | 32                                                                       | DRV_ STATUS                                                              | StallGuard2 value and driver error flags See separate table!                                                                                                                                                                                                                                                                                                          |                                                                          |

## 6.5.1 CHOPCONF -Chopper Configuration

| 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                                   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                                                                                                                                                                   |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                            | Name                                           | Function                                       | Comment                                                                                                                                                                        | Comment                                                                                                                                                                                                                                                                                                        |
| 31                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                       | set to 0                                                                                                                                                                                                                                                                                                       |
| 30                                             | diss2g                                         | short to GND protection disable                | 0: Short to GND protection is on 1: Short to GND protection is disabled                                                                                                        | 0: Short to GND protection is on 1: Short to GND protection is disabled                                                                                                                                                                                                                                        |
| 29                                             | dedge                                          | enable double edge step pulses                 | 1: Enable step impulse at each step edge to reduce step frequency requirement. Attention: Use only in Step/Dir mode .                                                          | Step/Dir                                                                                                                                                                                                                                                                                                       |
| 28                                             | intpol16                                       | 16 microsteps with interpolation               | 1: In 16 microstep mode with Step/Dir interface, the microstep resolution becomes extrapolated to 256 microsteps for smoothest motor operation                                 | options,                                                                                                                                                                                                                                                                                                       |
| 27                                             | mres3                                          | MRES                                           | %0000:                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                |
| 26                                             | mres2                                          | micro step resolution                          | Native 256 microstep setting. Use this setting when IC is operated with the internal ramp generator.                                                                           | set                                                                                                                                                                                                                                                                                                            |
| 25                                             | mres1                                          |                                                | the                                                                                                                                                                            | 0                                                                                                                                                                                                                                                                                                              |
| 24                                             | mres0                                          |                                                | %0001 128, 64, 32, Reduced The per sine Especially microsteps microstep determines                                                                                             | when stepdir_enable = … %1000: 16, 8, 4, 2, FULLSTEP microstep resolution for Step/Dir operation. resolution gives the number of microstep entries quarter wave. when switching to a low resolution of 8 and below, take care to switch at certain positions. The switching position the sequence of patterns. |
| 23                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                |
| 22                                             | -                                              |                                                |                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |
| 21                                             | -                                              |                                                |                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |
| 20                                             | -                                              |                                                |                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                |
| 19                                             | vhighchm                                       | high velocity chopper mode                     | This bit enables switching to chm =1 and fd =0, when VHIGH is exceeded. This way, a higher velocity can be achieved. Can be combined with vhighfs =1. If set, the TOFF setting | This bit enables switching to chm =1 and fd =0, when VHIGH is exceeded. This way, a higher velocity can be achieved. Can be combined with vhighfs =1. If set, the TOFF setting                                                                                                                                 |
| 18                                             | vhighfs                                        | high velocity fullstep selection               | operation to avoid doubling of the chopper frequency. This bit enables switching to fullstep, when VHIGH is exceeded. Switching takes place only at 45° position.              | operation to avoid doubling of the chopper frequency. This bit enables switching to fullstep, when VHIGH is exceeded. Switching takes place only at 45° position.                                                                                                                                              |
| 17                                             | vsense                                         | sense resistor voltage based current scaling   | 0: Low sensitivity, high sense resistor voltage 1: High sensitivity, low sense resistor voltage                                                                                | 0: Low sensitivity, high sense resistor voltage 1: High sensitivity, low sense resistor voltage                                                                                                                                                                                                                |
| 16                                             | tbl1                                           | TBL                                            | %00 … %11:                                                                                                                                                                     | %00 … %11:                                                                                                                                                                                                                                                                                                     |
| 15                                             | tbl0                                           | blank time select                              | Set comparator blank time to 16, 24, 36 or 54 clocks Hint : %01 or %10 recommended for most applications                                                                       | Set comparator blank time to 16, 24, 36 or 54 clocks Hint : %01 or %10 recommended for most applications                                                                                                                                                                                                       |
| 14                                             | chm                                            | chopper mode                                   | 0 Standard mode (SpreadCycle) 1 Constant off time with fast decay time.                                                                                                        | Fast decay time is also terminated when the                                                                                                                                                                                                                                                                    |
| 13                                             | rndtf                                          | random TOFF time                               | 0 1                                                                                                                                                                            | Chopper off time is fixed as set by TOFF Random mode, TOFF is random modulated by                                                                                                                                                                                                                              |
| 12                                             | disfdcc                                        | fast decay mode                                | chm =1: disfdcc =1 disables current comparator usage for termi-                                                                                                                | chm =1: disfdcc =1 disables current comparator usage for termi-                                                                                                                                                                                                                                                |

| 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                               | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                                                               |
|------------------------------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                            | Name                                           | Function                                                                                                                                                                   | Comment                                                                                                                                                                                                    |
| 11                                             | fd3                                            | TFD [3]                                                                                                                                                                    | chm =1: MSB of fast decay time setting TFD                                                                                                                                                                 |
| 10                                             | hend3                                          | HEND hysteresis low value OFFSET sine wave offset                                                                                                                          | chm =0 %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes                                                    |
| 9                                              | hend2                                          | HEND hysteresis low value OFFSET sine wave offset                                                                                                                          | chm =0 %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes                                                    |
| 8                                              | hend1                                          | HEND hysteresis low value OFFSET sine wave offset                                                                                                                          | chm =0 %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes                                                    |
| 7                                              | hend0                                          | HEND hysteresis low value OFFSET sine wave offset                                                                                                                          | chm =0 %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes                                                    |
| 7                                              | hend0                                          | HEND hysteresis low value OFFSET sine wave offset                                                                                                                          | used for the hysteresis chopper. chm =1 %0000 … %1111: Offset is -3, -2, - 1, 0, 1, …, 12 This is the sine wave offset and 1/512 of the value becomes added to the absolute value of each sine wave entry. |
| 6                                              | hstrt2                                         | HSTRT chm =0                                                                                                                                                               | %000 … %111: Add 1, 2, …, 8 to hysteresis low value HEND (1/512 of this setting adds to current setting) Attention: Effective HEND+HSTRT ≤ 16. Hint: Hysteresis decrement is done each 16 clocks           |
| 5                                              | hstrt1                                         | hysteresis start value                                                                                                                                                     | %000 … %111: Add 1, 2, …, 8 to hysteresis low value HEND (1/512 of this setting adds to current setting) Attention: Effective HEND+HSTRT ≤ 16. Hint: Hysteresis decrement is done each 16 clocks           |
| 4                                              | hstrt0                                         | HSTRT chm =0                                                                                                                                                               | %000 … %111: Add 1, 2, …, 8 to hysteresis low value HEND (1/512 of this setting adds to current setting) Attention: Effective HEND+HSTRT ≤ 16. Hint: Hysteresis decrement is done each 16 clocks           |
| 4                                              | hstrt0                                         | TFD [2..0] fast decay time setting                                                                                                                                         | chm =1 Fast decay time setting (MSB: fd3 ): %0000 … %1111: Fast decay time setting TFD with N CLK = 32* HSTRT (%0000: slow decay only)                                                                     |
| 3                                              | toff3                                          | TOFF off time Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks | TOFF off time Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks                                 |
| 2                                              | toff2                                          | and driver enable                                                                                                                                                          | TOFF off time Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks                                 |
| 1                                              | toff1                                          | TOFF off time Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks | TOFF off time Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks                                 |
| 0                                              | toff0                                          | TOFF off time Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks | TOFF off time Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks                                 |

## 6.5.2 COOLCONF -Smart Energy Control CoolStep and StallGuard2

| 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2   | 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2   | 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2   | 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2                                                                                                                                                                                                                                     |
|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                    | Name                                                                   | Function                                                               | Comment                                                                                                                                                                                                                                                                                                  |
| … 24                                                                   | - sfilt                                                                | reserved StallGuard2 filter                                            | set to 0 0 Standard mode, high time resolution for                                                                                                                                                                                                                                                       |
| 23                                                                     | -                                                                      | reserved                                                               | tolerances set to 0                                                                                                                                                                                                                                                                                      |
| 22 21 20 19                                                            | sgt6 sgt5 sgt4 sgt3 sgt2                                               | StallGuard2 threshold value                                            | This signed value controls StallGuard2 level for stall output and sets the optimum measurement range for readout. A lower value gives a higher sensitivity. Zero is the starting value working with most motors. -64 to +63: A higher value makes StallGuard2 less sensitive and requires more torque to |
| 18 17 16 15                                                            | sgt1 sgt0 seimin                                                       | minimum current for smart current control current down step speed      | indicate a stall. 0: 1/2 of current setting ( IRUN )                                                                                                                                                                                                                                                     |
| 14 13                                                                  | sedn1 sedn0                                                            | reserved                                                               | 1: 1/4 of current setting ( IRUN ) %00: For each 32 StallGuard2 values decrease by one %01: For each 8 StallGuard2 values decrease by one %10: For each 2 StallGuard2 values decrease by one %11: For each StallGuard2 value decrease by one                                                             |
| 12 11 10 9                                                             | - semax3                                                               | StallGuard2 hysteresis                                                 | set to 0 If the StallGuard2 result is equal to or above ( SEMIN + SEMAX+ 1)*32, the motor current becomes decreased to save energy.                                                                                                                                                                      |
| 8 7                                                                    | semax2 semax1 semax0                                                   | value for smart current control reserved                               | %0000 … %1111: 0 … 15 set to 0                                                                                                                                                                                                                                                                           |
| 6                                                                      | - seup1                                                                | current up step width                                                  | Current increment steps per measured StallGuard2 value %00 … %11: 1, 2, 4, 8 set to 0                                                                                                                                                                                                                    |
| 5 4                                                                    | seup0 -                                                                | reserved minimum StallGuard2 value for smart current                   | If the StallGuard2 result falls below SEMIN *32, the current becomes increased to reduce motor load angle. %0000: smart current control CoolStep off                                                                                                                                                     |
| 3                                                                      | semin2                                                                 | control and                                                            |                                                                                                                                                                                                                                                                                                          |
| 2                                                                      | semin0                                                                 | smart current enable                                                   |                                                                                                                                                                                                                                                                                                          |
|                                                                        | semin3                                                                 |                                                                        | motor                                                                                                                                                                                                                                                                                                    |
| 1                                                                      | semin1                                                                 |                                                                        |                                                                                                                                                                                                                                                                                                          |
|                                                                        |                                                                        |                                                                        | … %1111: 1 … 15                                                                                                                                                                                                                                                                                          |
| 0                                                                      |                                                                        |                                                                        |                                                                                                                                                                                                                                                                                                          |
|                                                                        |                                                                        |                                                                        | %0001                                                                                                                                                                                                                                                                                                    |

## 6.5.3 DRV\_STATUS -StallGuard2 Value and Driver Error Flags

| 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS   | 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS   | 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS                                    | 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------------------------------------------------------------|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                 | Name                                                                | Function                                                                                             | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 31                                                                  | stst                                                                | standstill indicator                                                                                 | This flag indicates motor stand still in each operation mode. It is especially useful for step & dir mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 30                                                                  | olb                                                                 | open load indicator phase B                                                                          | 1: Open load detected on phase A or B. Hint: This is just an informative flag. The driver takes no action                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 29                                                                  | ola                                                                 | open load indicator phase A                                                                          | upon it. False detection may occur in fast motion and standstill. Check during slow motion or after a motion, only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 28                                                                  | s 2gb                                                               | short to ground indicator phase B                                                                    | 1: Short to GND detected on phase A or B. The driver becomes disabled. The flags stay active, until the driver is disabled by                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 27                                                                  | s 2ga                                                               | short to ground indicator phase A                                                                    | software ( TOFF =0) or by the ENN input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 26                                                                  | otpw                                                                | overtemperature pre- warning flag                                                                    | 1: Overtemperature pre-warning threshold is exceeded. The overtemperature pre-warning flag is common for both drivers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 25                                                                  | ot                                                                  | overtemperature flag                                                                                 | 1: Overtemperature limit has been reached. Drivers become disabled until otpw is also cleared due to cooling down of the IC. The overtemperature flag is common for both drivers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 24                                                                  | StallGuard                                                          | StallGuard2 status                                                                                   | 1: Motor stall detected ( SG_RESULT =0) or DcStep stall in DcStep mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 23 22 21                                                            | -                                                                   | reserved                                                                                             | Ignore these bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 20 19 18 17                                                         | CS ACTUAL                                                           | actual motor current / smart energy current                                                          | Actual current control scaling, for monitoring smart energy current scaling controlled via settings in register COOLCONF , or for monitoring the function of the automatic current scaling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 15                                                                  | fsactive                                                            | full step active indicator                                                                           | 1: Indicates that the driver has switched to fullstep as defined                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 14 13 12 11 10                                                      | -                                                                   | reserved                                                                                             | by chopper mode settings and velocity thresholds. Ignore these bits Mechanical load measurement: The StallGuard2 result gives a means to measure                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 9 8 7 6 5 4 3 2 1 0                                                 | SG_ RESULT                                                          | StallGuard2 result respectively PWM on time for coil A in standstill for motor temperature detection | mechanical motor load. A higher value means lower mechanical load. A value of 0 signals highest load. With optimum SGT setting, this is an indicator for a motor stall. The stall detection compares SG_RESULT to 0 to detect a stall. SG_RESULT is used as a base for CoolStep operation, by comparing it to a pro- grammable upper and a lower limit. It is not applicable in StealthChop mode. SG_RESULT is also applicable when DcStep is active. StallGuard2 works best with microstep operation. Temperature measurement: In standstill, no StallGuard2 result can be obtained. SG_RESULT shows the chopper on-time for motor coil A instead. If the motor is moved to a determined microstep position at a certain current setting, a comparison of the chopper on-time can help to get a rough estimation of motor temperature. As the motor heats up, its coil resistance rises, and the chopper on-time increases. |

## 6.6 Voltage PWM mode StealthChop

| MOTOR DRIVER PWM REGISTER SET (MOTOR 1: 0X 10…0 X17, MOTOR 2: 0X 18…0 X1F)   | MOTOR DRIVER PWM REGISTER SET (MOTOR 1: 0X 10…0 X17, MOTOR 2: 0X 18…0 X1F)   | MOTOR DRIVER PWM REGISTER SET (MOTOR 1: 0X 10…0 X17, MOTOR 2: 0X 18…0 X1F)   | MOTOR DRIVER PWM REGISTER SET (MOTOR 1: 0X 10…0 X17, MOTOR 2: 0X 18…0 X1F)   | MOTOR DRIVER PWM REGISTER SET (MOTOR 1: 0X 10…0 X17, MOTOR 2: 0X 18…0 X1F)   | MOTOR DRIVER PWM REGISTER SET (MOTOR 1: 0X 10…0 X17, MOTOR 2: 0X 18…0 X1F)   |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| R/W                                                                          | Addr                                                                         | n                                                                            | Register                                                                     | Description / bit names                                                      | Range [Unit]                                                                 |
| W                                                                            | 0x10 0x18                                                                    | 22                                                                           | PWMCONF                                                                      | Voltage PWM mode chopper configuration See separate table!                   |                                                                              |
| R                                                                            | 0x11 0x19                                                                    | 8                                                                            | PWM_ STATUS                                                                  | Actual PWM scaler (255=max. Voltage)                                         | 0…255                                                                        |

## 6.6.1 PWMCONF -Voltage PWM mode StealthChop

| 0X10, 0X18: PWMCONF - VOLTAGE MODE PWM   | 0X10, 0X18: PWMCONF - VOLTAGE MODE PWM   | 0X10, 0X18: PWMCONF - VOLTAGE MODE PWM                                         | 0X10, 0X18: PWMCONF - VOLTAGE MODE PWM                                                                                                                                                                      | 0X10, 0X18: PWMCONF - VOLTAGE MODE PWM                                                                                                                                                                      |
|------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                      | Name                                     | Function                                                                       | Comment                                                                                                                                                                                                     | Comment                                                                                                                                                                                                     |
| …                                        | -                                        | reserved                                                                       | Set to 0                                                                                                                                                                                                    | Set to 0                                                                                                                                                                                                    |
| 21 20                                    | freewheel1 freewheel0                    | Allows different standstill modes                                              | Stand still option when motor current setting is zero                                                                                                                                                       | Stand still option when motor current setting is zero                                                                                                                                                       |
| 19                                       | -                                        | reserved                                                                       | Set to 0                                                                                                                                                                                                    | Set to 0                                                                                                                                                                                                    |
| 18                                       | pwm_ autoscale                           | PWM automatic amplitude scaling                                                | 0 User defined PWM amplitude. The current settings have no influence. 1 Enable automatic current control Attention: When using a user defined sine wave table, the amplitude of this sine wave table should | 0 User defined PWM amplitude. The current settings have no influence. 1 Enable automatic current control Attention: When using a user defined sine wave table, the amplitude of this sine wave table should |
| 17 16                                    | pwm_freq1 pwm_freq0                      | PWM frequency selection                                                        | 247 to 252 as peak values. %00: f PWM =2/1024 f CLK %01: f PWM =2/683 f CLK %10: f PWM =2/512 f CLK                                                                                                         | 247 to 252 as peak values. %00: f PWM =2/1024 f CLK %01: f PWM =2/683 f CLK %10: f PWM =2/512 f CLK                                                                                                         |
| 15 14 13 12                              | PWM_ GRAD                                | User defined regulation loop gradient (bits 15… 12 currently unused, set to 0) | pwm_ autoscale=0                                                                                                                                                                                            | actual                                                                                                                                                                                                      |
| 11 10 9 8                                | PWM_ GRAD                                | User defined regulation loop gradient (bits 15… 12 currently unused, set to 0) | pwm_ autoscale=0                                                                                                                                                                                            | actual                                                                                                                                                                                                      |
| 7 6 5                                    | PWM_ AMPL User defined                   | amplitude                                                                      | pwm_ autoscale=0                                                                                                                                                                                            | 0: StealthChop disabled 1…15: User defined maximum PWM amplitude change per half wave (1 to 15) User defined PWM amplitude                                                                                  |
| 4 3 2 1 0                                | PWM_ AMPL User defined                   | amplitude                                                                      | pwm_ autoscale=0                                                                                                                                                                                            | 0: StealthChop disabled 1…15: User defined maximum PWM amplitude change per half wave (1 to 15) User defined PWM amplitude                                                                                  |
|                                          | PWM_ AMPL User defined                   | amplitude                                                                      | pwm_ autoscale=0                                                                                                                                                                                            | 0: StealthChop disabled 1…15: User defined maximum PWM amplitude change per half wave (1 to 15) User defined PWM amplitude                                                                                  |

## 7 Current Setting

The internal 5 V supply voltage available at the pin 5VOUT is used as a reference for the coil current regulation based on the sense resistor voltage measurement. The desired maximum motor current is set by selecting an appropriate value for the sense resistor. The sense resistor voltage range can be selected  by  the vsense bit  in CHOPCONF .  The  low  sensitivity  setting  (high  sense  resistor  voltage, vsense =0) brings best and most robust current regulation, while high sensitivity (low sense resistor voltage, vsense =1) reduces power dissipation in the sense resistor. The high sensitivity setting reduces the power dissipation in the sense resistor by nearly half.

After  choosing  the vsense setting  and  selecting  the  sense  resistor,  the  currents  to  both  coils  are scaled by the 5-bit current scale parameters ( IHOLD , IRUN ). The sense resistor value is chosen so that the  maximum  desired  current  (or  slightly  more)  flows  at  the  maximum  current  setting  ( IRUN = %11111).

Using the internal sine wave table, which has the amplitude of 248, the RMS motor current can be calculated by:

<!-- formula-not-decoded -->

The momentary motor current is calculated by:

<!-- formula-not-decoded -->

CS is the current scale setting as set by the IHOLD and IRUN and CoolStep.

VFS is the full-scale voltage  as  determined  by vsense control bit (please refer to electrical characteristics, V SRTL and VSRTH).

CURA/B is the actual value from the internal sine wave table.

The internal resistance of 20mΩ will be increased by external trace resistance, 5mΩ are realistic.

| CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| R SENSE [Ω]                                          | RMS current [A] (CS=31, vsense=0)                    | RMS current [A] (CS=31, vsense=1)                    |
| 1.00                                                 | 0.21                                                 | 0.12                                                 |
| 0.82                                                 | 0.26                                                 | 0.15                                                 |
| 0.75                                                 | 0.28                                                 | 0.16                                                 |
| 0.68                                                 | 0.31                                                 | 0.18                                                 |
| 0.50                                                 | 0.42                                                 | 0.24                                                 |
| 0.47                                                 | 0.45                                                 | 0.25                                                 |
| 0.33                                                 | 0.63                                                 | 0.35                                                 |
| 0.27                                                 | 0.76                                                 | 0.43                                                 |
| 0.22                                                 | 0.91                                                 | 0.51                                                 |
| 0.15                                                 | 1.29*)                                               | 0.72                                                 |

Hint

For best precision of current setting, it is advised to measure and fine tune the current in the application.

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Setting   | Comment                                                     |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------|
| IRUN        | Current scale when motor is running. Scales coil current values as taken from the internal sine wave table. For high precision motor operation, work with a current scaling factor in the range 16 to 31, because scaling down the current values reduces the effective microstep resolution by making microsteps coarser. This setting also controls the maximum current value set by CoolStep.                                                                                                                      | 0 … 31    | scaling factor 1/32, 2/32, … 32/32                          |
| IHOLD       | Identical to IRUN , but for motor in stand still.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 0 … 31    |                                                             |
| IHOLD DELAY | Allows smooth current reduction from run current to hold current. IHOLDDELAY controls the number of clock cycles for motor power down after TZEROWAIT in increments of 2^18 clocks: 0=instant power down, 1..15: Current reduction delay per current step in multiple of 2^18 clocks. Example: When using IRUN =31 and IHOLD =16, 15 current steps are required for hold current reduction. A IHOLDDELAY setting of 4 thus results in a power down time of 4*15*2^18 clock cycles, i.e., roughly one second at 16MHz. | 0 1 …15   | instant IHOLD 1*2 18 … 15*2 18 clocks per current decrement |
| vsense      | Allows control of the sense resistor voltage range for full scale current.                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0 1       | V FS = 0.32V V FS = 0.18V                                   |

## 7.1 Sense Resistors

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. They also see the switching spikes from the MOSFET bridges. A low-inductance type such as film or composition  resistors  is  required  to  prevent  spikes  causing  ringing  on  the  sense  voltage  inputs leading  to  unstable  measurement  results.  A  low-inductance,  low-resistance  PCB  layout  is  essential. Any common GND path for the two sense resistors  must be  avoided, because this  would lead to coupling between the two current sense signals. A massive ground plane is best. Please also refer to layout considerations in chapter 24.

The  sense  resistor  needs  to  be  able  to  conduct  the  peak  motor  coil  current  in  motor  standstill conditions  unless  standby  power  is  reduced.  Under  normal  conditions,  the  sense  resistor  conducts less than the coil RMS current, because no current flows through the sense resistor during the slow decay phases.

The peak sense resistor power dissipation is:

<!-- formula-not-decoded -->

For high current applications, power dissipation is halved by using the low vsense setting and using an adapted resistance value. Please be aware, that in this case any voltage drop in PCB traces has a larger influence on the result. A compact layout with massive ground plane is best to avoid parasitic resistance effects.

## 8 StealthChop ™

<!-- image -->

StealthChop is an extremely quiet mode of operation for low and medium velocities. It is based on a voltage mode PWM. In case of standstill and at low velocities, the motor is absolutely  noiseless.  Thus,  StealthChop  operated  stepper  motor  applications  are  very suitable for indoor or home use. The motor operates free of vibration at low velocities. With StealthChop, the motor current is applied by driving a certain effective voltage into the  coil,  using  a  voltage  mode  PWM.  There  are  no  more  configurations  required  except  for  the regulation  of  the  PWM  voltage  to  yield  the  motor  target  current.  Two  algorithms  are  provided,  a manual and an automatic mode.

Figure 8.1 Motor coil sine wave current with StealthChop (measured with current probe)

<!-- image -->

## 8.1 Two Modes for Current Regulation

In order to match the motor current to a certain level, the voltage mode PWM voltage must be scaled depending on the actual motor velocity. Several additional factors influence the required voltage level to drive the motor at the target current: The motor resistance, its back EMF (directly proportional to its velocity)  as  well  as  actual  level  of  the  supply  voltage.  For  the  ease  of  use,  two  modes  of  PWM regulation are provided: An automatic mode using current feedback ( pwm\_autoscale = 1) and a fixed scale  mode  ( pwm\_autoscale =  0).  The  fixed  scale  mode  will  not  react  to  a  change  of  operating conditions  like  the  supply  voltage  or  to  events  like  a  motor  stall,  but  it  provides  very  stable amplitude.  It  does  not  use  nor  require  any  means  of  current  measurement.  This  is  perfect  when motor type, velocity and supply voltage are well known. Since this mode does not measure the actual current, it  will  not  respond to modification of the current setting, like stand still  current reduction. Therefore, we recommend the automatic mode, unless current regulation is not satisfying in the given operating conditions.

The PWM frequency can be chosen in a range in four steps  to adapt the frequency divider to the frequency of the clock source. An optimum setting is slightly above the audible frequency range. A slightly higher value might bring a benefit for some applications.

Table 8.1 Choice of PWM frequency -green: recommended

| CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Clock frequency f CLK                     | PWM_FREQ=%00 f PWM =2/1024 f CLK          | PWM_FREQ=%01 f PWM =2/683 f CLK           | PWM_FREQ=%10 f PWM =2/512 f CLK           | PWM_FREQ=%11 f PWM =2/410 f CLK           |
| 18MHz                                     | 35.2kHz                                   | 52.7kHz                                   | 70.3kHz                                   | 87.8kHz                                   |
| 16MHz                                     | 31.3kHz                                   | 46.9kHz                                   | 62.5kHz                                   | 78.0kHz                                   |
| (internal)                                |  26kHz                                   |  38kHz                                   |  52kHz                                   |  64kHz                                   |
| 12MHz                                     | 23.4kHz                                   | 35.1kHz                                   | 46.9kHz                                   | 58.5kHz                                   |
| 10MHz                                     | 19.5kHz                                   | 29.3kHz                                   | 39.1kHz                                   | 48.8kHz                                   |
| 8MHz                                      | 15.6kHz                                   | 23.4kHz                                   | 31.2kHz                                   | 39.0kHz                                   |

## 8.2 Automatic Scaling

In StealthChop voltage PWM mode, the autoscaling function ( pwm\_autoscale = 1) regulates the motor current to the desired current setting. The driver measures the motor current during the chopper on time and uses a proportional regulator to regulate the PWM\_SCALE in order match the motor current to  the  target  current. PWM\_GRAD is  the  proportionality  coefficient  for  this  regulator.  Basically,  the proportionality coefficient should be as small as possible to get a stable and soft regulation behavior, but it must be large enough to allow the driver to quickly react to changes caused by variation of the motor target current, the motor velocity or effects resulting from changes of the supply voltage. As the supply voltage level and motor temperature normally change only slowly, a minimum setting of the  regulation  gradient  often  is  sufficient  ( PWM\_GRAD =1).  If  StealthChop  operation  is  desired  for  a higher velocity range, variations of the motor back EMF caused by motor acceleration and deceleration may  require  a  quicker  regulation. PWM\_GRAD setting  should  be  optimized  for  the  fastest  required acceleration and deceleration ramp (see Figure 8.4). The quality of a given setting can be examined when  monitoring PWM\_SCALE and  motor  velocity.  Just  as  in  the  acceleration  phase,  during  a deceleration  phase  the  voltage  PWM  amplitude  must  be  adapted  to  keep  the  motor  coil  current constant.  When  the  upper  acceleration  and  the  upper  deceleration  used  in  the  application  are identical, the value determined for the acceleration phase will already be optimum for both.

Figure 8.2 Scope shot: good setting for PWM\_GRAD

<!-- image -->

Figure 8.3 Scope shot: too small setting for PWM\_GRAD

<!-- image -->

<!-- image -->

Setting for PWM\_GRAD slightly too small.

Figure 8.4 Good and too small setting for PWM\_GRAD

Be sure to use a symmetrical sense resistor layout and sense resistor traces of identical length and well matching sense resistors for best performance.

Quick Start

For a quick start, see the Quick Configuration Guide in chapter 18.

## 8.2.1 Lower Current Limit

The autoscaling function imposes a lower limit for motor current regulation. As the coil current can be measured in the shunt resistor  during  chopper  on  phase,  only,  a  minimum  chopper  duty  cycle allowing  coil  current  regulation  is  given  by  the  blank  time  as  set  by TBL and  by  the  chopper frequency  setting.  Therefore,  the  motor  specific  minimum  coil  current  in  StealthChop  autoscaling mode rises with the supply voltage and the chopper frequency. A lower blanking time allows a lower current limit. Extremely low currents (e.g., for standstill power down) can be realized with the nonautomatic current scaling or with the freewheeling option, only. The run current setting needs to be kept  above  the  lower  limit:  In  case  the PWM\_SCALE drops  to  a  too  low  value,  e.g.,  because  the current scale was too low, the regulator may not be able to recover. The regulator will recover once the motor is in standstill. The freewheeling option allows going to zero motor current.

The lower motor coil current limit can be calculated from motor parameters and chopper settings:

<!-- formula-not-decoded -->

With VM the motor supply voltage and RCOIL the motor coil resistance.

ILower Limit can be treated as a thumb value for the minimum possible motor current setting.

Example :

A  motor  has  a  coil resistance of 5Ω, the supply  voltage  is  24V.  With TBL =%01  and PWM\_FREQ =%00, tBLANK is 24 clock cycles, f PWM is 2/(1024 clock cycles):

<!-- formula-not-decoded -->

## Attention

For pwm\_autoscale mode, a lower coil current limit applies. This limit can be calculated or measured using a current probe. Keep the motor run-current setting IRUN well above this lower current limit.

## Attention

For pwm\_autoscale mode, the motor run-current setting IRUN must not be set below 6 to maintain correct current regulation.

## 8.2.2 PWM\_AMPL for Using StealthChop and SpreadCycle

When combining StealthChop with SpreadCycle or constant off time classic PWM, a switching velocity can be chosen using VCOOLTHRS . With this, StealthChop is only active at low velocities. Often, a very low velocity in the range of 1 to a few 10 RPM fits best. In case a high switching velocity is chosen, special care should be taken for switching back to StealthChop during deceleration, because the phase jerk  can  produce  a  short  time  overcurrent.  (Refer  to  chapter  8.4  for  more  details  about  combining StealthChop with other chopper modes.)

To avoid a short time overcurrent and to minimize the jerk, the initial amplitude for switching back to StealthChop at sinking velocity can be determined using the setting PWM\_AMPL . Tune PWM\_AMPL to a value  which  gives  a  smooth  and  safe  transition  back  to  StealthChop  within  the  application.  As  a thumb rule, ½ to ¾ of the last PWM\_SCALE value which was valid after the switching event at rising velocity  can  be  used.  For  high  resistive  steppers  as  well  as  for  low  transfer  velocities  (as  set  by VCOOLTHRS ), PWM\_AMPL can be set to 255 as most universal setting.

## Note

The autoscaling function only starts up regulation during motor standstill. After enabling StealthChop and setting all parameters, be sure to wait until PWM\_SCALE has reached a stable state before starting a motion. Failure to do so will result in zero motor current!

In case the automatic scaling regulation is instable at your desired motion velocity, try modifying the chopper  frequency  divider PWM\_FREQ .  Also  adapt  the  blank  time TBL and  motor  current  for  best result.

## 8.2.3 Acceleration

In  automatic  current  regulation  mode  ( pwm\_autoscale =  1),  the PWM\_GRAD setting  should  be optimized for the fastest required acceleration ramp. Use a current probe and check the motor current during (quick) acceleration. A setting of 1 may result in a too slow regulation, while a setting of 15 responds  very  quickly  to  velocity  changes  but  might  produce  regulation  instabilities  in  some constellations. A setting of 4 is a good starting value.

## Hint

Operate the motor within your application when exploring StealthChop. Motor performance often is better with a mechanical load, because it prevents the motor from stalling due mechanical oscillations which can occur without load.

## 8.3 Fixed Scaling

Non-automatic,  fixed  scaling  scales  the  StealthChop  amplitude  based  on  the  user  defined  value PWM\_AMPL .  The  stepper  motor  has  a  certain  coil  resistance  and  thus  needs  a  certain  voltage amplitude to yield a target current based on the basic formula I=U/R. With R being the coil resistance, U the supply voltage scaled by the PWM value, the current I results. The initial value for PWM\_AMPL at low velocities can be calculated:

<!-- formula-not-decoded -->

With VM the motor supply voltage and ICOIL the target RMS current

The effective PWM voltage UPWM (1/SQRT(2) x peak value) results considering the 8 bit resolution and 248 sine wave peak for the actual PWM amplitude shown as PWM\_SCALE :

<!-- formula-not-decoded -->

With rising motor velocity, the motor generates an increasing back EMF voltage. The back EMF voltage is proportional to the motor velocity. It reduces the PWM voltage effective at the coil resistance and thus current decreases. A higher scale value is necessary to compensate for this. When a higher value is  choosen,  it  should  be  made  sure,  that  the  maximum  driver  current  is  not  exceeded  during  the acceleration phase. This can be checked with the above formula. A short time excess current will not do harm to the motor.

## Hint

The setting for PWM\_AMPL can easily be optimized by tracing the motor current with a current probe on the oscilloscope. It is not even necessary to calculate the formulas if you carefully start with a low setting for both.

## 8.4 Combining StealthChop with other Chopper Modes

The  TMC5072  allows  combining  StealthChop  and  different  chopper  modes  based  on  velocity thresholds. This way, the optimum chopper principle can be chosen for different velocity ranges. As a first step, both chopper principles should be parameterized and optimized individually. In a next step, a transfer velocity has to be fixed. For example, StealthChop operation is used for precise low speed positioning, while SpreadCycle shall be used for highly dynamic motion. VCOOLTHRS determines the transition  velocity.  Use  a  low  transfer  velocity  to  avoid  a  jerk  at  the  switching  point.  A  jerk  occurs when  switching  at  higher  velocities,  because  the  back-EMF  of  the  motor  (which  rises  with  the velocity)  causes  a  phase  shift  of  up  to  90°  between  motor  voltage  and  motor  current.  So,  when switching at higher velocities between voltage PWM and current PWM mode, this jerk will occur with increased intensity. At low velocities (e.g., 1 to a few 10 RPM), it can be completely neglected for most motors. Therefore, the VCOOLTHRS should be set to a low velocity, to eliminate any jerk in case an automatic  switching  between  two  chopper  modes  is  desired.  Set VCOOLTHRS and VHIGH to  high values (above VMAX ) if you want to work with StealthChop only.

When enabling the StealthChop mode the first time using automatic current regulation, the motor must be at stand still to allow a proper current regulation. When the drive switches to a different chopper mode at a higher velocity, StealthChop logic stores the last current regulation setting until the  motor  returns  to  a  lower  velocity  again.  This  way,  the  regulation  has  a  known  starting  point when returning to a lower velocity,  where  StealthChop  becomes  re-enabled.  Therefore,  neither  the velocity threshold nor the supply voltage must be considerably changed during the phase while the chopper  is  switched  to  a  different  mode,  because  otherwise  the  motor  might  lose  steps,  or  the instantaneous current might be too high or too low.

A  motor  stall  or  a  sudden  change  in  the  motor  velocity  may  lead  to  the  driver  detecting  a  short circuit or to a state of automatic current regulation, from which it cannot recover. Clear the error flags and restart the motor from zero velocity to recover from this situation.

## Hint

Start the motor from standstill when switching on StealthChop the first time and keep it stopped for at least 128 chopper periods to allow StealthChop to do initial standstill current control.

## 8.5 Flags in StealthChop

## 8.5.1 Open Load Flags

In StealthChop mode, status information is different from the cycle-by-cycle regulated chopper modes. OLA and OLB show if the current regulation sees that the nominal current can be reached on both coils.

- -A  flickering  OLA  or  OLB  can  result  from  tiny  asymmetries  in  the  sense  resistors  or  in  the motor coils.
- -An interrupted motor coil leads to a continuously active open load flag for the coil.
- -Both flags are active, if the current regulation did not succeed in scaling up to the full target current  within  the  last  few  fullsteps  (because  no  motor  is  attached,  or  a  high  acceleration required a quick action of the current regulator).

With  automatic  scaling  and PWM\_GRAD &gt;  1,  the  current  regulation  checks  for  current  at  a single  coil  at  a  time,  only,  taking  into  account  the  coil  with  the  larger  target  current.  The other  coil  becomes  scaled  up  accordingly.  This  behavior  can  lead  to  the  PWM  duty  cycle increasing to its limit and might stay undetected or might trigger overcurrent protection.

Therefore, it is recommended to do an on-demand open load test using the SpreadCycle or classic chopper prior to operation in StealthChop, and not to switch on StealthChop in case of open load failure. Alternatively, PWM\_SCALE can be checked for plausible values.

## Attention

For pwm\_autoscale mode, an open load situation on a single coil can lead to the current regulation algorithm scaling up the non-interrupted coil to too high current values. Therefore, it is recommended to test for open load prior to operation in StealthChop using SpreadCycle. Do not enable StealthChop in case of an open load situation.

## 8.5.2 PWM\_SCALE Informs about the Motor State

Information about the motor state is available with automatic scaling by reading out PWM\_SCALE . As this  parameter  reflects  the  actual  voltage  required  to  drive  the  target  current  into  the  motor,  it depends on several factors: motor load, coil resistance, supply voltage, and current setting. Therefore, an  evaluation  of  the PWM\_SCALE value  allows  seeing  the  motor  load  (similar  to  StallGuard2)  and finding  out  if  the  target  current  can  be  reached.  It  even  gives  an  idea  on  the  motor  temperature (evaluate at a well-known state of operation).

## 8.6 Freewheeling and Passive Motor Braking

StealthChop provides different options for motor standstill. These options can be enabled by setting the standstill current IHOLD to  zero  and choosing the desired option using the FREEWHEEL setting. The desired option becomes enabled after a time period specified by TZEROWAIT and IHOLD\_DELAY . The PWM\_SCALE regulation becomes frozen once the motor target current is at zero current to ensure a quick startup.

| Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                  | Setting              | Comment                                                                     |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-----------------------------------------------------------------------------|
| VCOOLTHRS VHIGH | Whichever is lower, specifies the upper velocity for operation in StealthChop voltage PWM mode.                                                                                                                                                                                                                                                                                              | 0 … 2^23-1           |                                                                             |
| pwm_ autoscale  | Enable automatic current scaling using current measurement or use fixed scaling mode.                                                                                                                                                                                                                                                                                                        | 0                    | Fixed mode                                                                  |
| pwm_ autoscale  | Enable automatic current scaling using current measurement or use fixed scaling mode.                                                                                                                                                                                                                                                                                                        | 1                    | Automatic scaling with current regulator                                    |
| PWM_FREQ        | PWM frequency selection. StealthChop uses a fixed PWM frequency by dividing the system clock frequency using a programmable divider. Use the lowest setting giving good results.                                                                                                                                                                                                             | 0                    | f PWM =2/1024 f CLK                                                         |
| PWM_FREQ        | PWM frequency selection. StealthChop uses a fixed PWM frequency by dividing the system clock frequency using a programmable divider. Use the lowest setting giving good results.                                                                                                                                                                                                             | 1                    | f PWM =2/683 f CLK                                                          |
| PWM_FREQ        | PWM frequency selection. StealthChop uses a fixed PWM frequency by dividing the system clock frequency using a programmable divider. Use the lowest setting giving good results.                                                                                                                                                                                                             | 2                    | f PWM =2/512 f CLK                                                          |
| PWM_FREQ        | PWM frequency selection. StealthChop uses a fixed PWM frequency by dividing the system clock frequency using a programmable divider. Use the lowest setting giving good results.                                                                                                                                                                                                             | 3                    | f PWM =2/410 f CLK                                                          |
| PWM_GRAD        | Global enable and regulation loop gradient when pwm_autoscale =1.                                                                                                                                                                                                                                                                                                                            | 0                    | Do not use StealthChop                                                      |
| PWM_GRAD        | Global enable and regulation loop gradient when pwm_autoscale =1.                                                                                                                                                                                                                                                                                                                            | 1 … 15               | StealthChop enabled                                                         |
| PWM_AMPL        | User defined PWM amplitude for fixed scaling or amplitude limit for re-entry into StealthChop mode when pwm_autoscale =1.                                                                                                                                                                                                                                                                    | 0 … 255              |                                                                             |
| FREEWHEEL       | Stand still option when motor current setting is zero ( I_HOLD =0). Only available with StealthChop enabled. The freewheeling option makes the motor easy movable, while both coil short options realize a passive brake. Mode 2 will brake more intensely than mode 3, because low side drivers (LS) have lower resistance than high side drivers.                                          | 0                    | Normal operation                                                            |
| FREEWHEEL       | Stand still option when motor current setting is zero ( I_HOLD =0). Only available with StealthChop enabled. The freewheeling option makes the motor easy movable, while both coil short options realize a passive brake. Mode 2 will brake more intensely than mode 3, because low side drivers (LS) have lower resistance than high side drivers.                                          | 1                    | Freewheeling                                                                |
| FREEWHEEL       | Stand still option when motor current setting is zero ( I_HOLD =0). Only available with StealthChop enabled. The freewheeling option makes the motor easy movable, while both coil short options realize a passive brake. Mode 2 will brake more intensely than mode 3, because low side drivers (LS) have lower resistance than high side drivers.                                          | 2                    | Coil shorted using LS drivers                                               |
| FREEWHEEL       | Stand still option when motor current setting is zero ( I_HOLD =0). Only available with StealthChop enabled. The freewheeling option makes the motor easy movable, while both coil short options realize a passive brake. Mode 2 will brake more intensely than mode 3, because low side drivers (LS) have lower resistance than high side drivers.                                          | 3                    | Coil shorted using HS drivers                                               |
| PWM_SCALE       | Read back of the actual StealthChop voltage PWM scaling as determined by the current regulation. Can be used to detect motor load and stall when autoscale =1.                                                                                                                                                                                                                               | 0 … 255 (read- only) | The scaling value becomes frozen when operating in a different chopper mode |
| TOFF            | General enable for the motor driver, the actual value does not influence StealthChop                                                                                                                                                                                                                                                                                                         | 0                    | Driver off                                                                  |
| TOFF            | General enable for the motor driver, the actual value does not influence StealthChop                                                                                                                                                                                                                                                                                                         | 1 … 15               | Driver enabled                                                              |
| TBL             | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. A lower setting allows StealthChop to regulate down to lower coil current values. | 0                    | 16 t CLK                                                                    |
| TBL             | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. A lower setting allows StealthChop to regulate down to lower coil current values. | 1                    | 24 t CLK                                                                    |
| TBL             | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. A lower setting allows StealthChop to regulate down to lower coil current values. | 2                    | 36 t CLK                                                                    |
| TBL             | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. A lower setting allows StealthChop to regulate down to lower coil current values. | 3                    | 54 t CLK                                                                    |
| IRUN IHOLD      | Run and hold current setting for stealth Chop operation - only used with pwm_autoscale =1                                                                                                                                                                                                                                                                                                    |                      | See chapter on current setting for details                                  |

## 9 SpreadCycle and Classic Chopper

While StealthChop is a voltage mode PWM controlled chopper, SpreadCycle is a cycle-by-cycle current control. Therefore, it can react extremely fast to changes in motor velocity or motor load. The currents through both motor coils are controlled using choppers. The choppers work independently of each other. In Figure 9.1 the different chopper phases are shown.

<!-- image -->

<!-- image -->

On Phase: current flows in direction of target current

Fast Decay Phase: current flows in opposite direction of target current

Figure 9.1 Chopper phases

Although the current could be regulated using only on phases and fast decay phases, insertion of the slow  decay  phase  is  important  to  reduce  electrical  losses  and  current  ripple  in  the  motor.  The duration of the slow decay phase is specified in a control parameter and sets an upper limit on the chopper frequency. The current comparator can measure coil current during phases when the current flows through the sense resistor, but not during the slow decay phase, so the slow decay phase is terminated by a timer. The on phase is terminated by the comparator when the current through the coil reaches the target current. The fast decay phase may be terminated by either the comparator or another timer.

When the coil current is switched, spikes at the sense resistors occur due to charging and discharging parasitic  capacitances.  During  this  time,  typically  one  or  two  microseconds,  the  current  cannot  be measured. Blanking is the time when the input to the comparator is masked to block these spikes.

There  are  two  cycle-by-cycle  chopper  modes  available:  a  new  high-performance  chopper  algorithm called SpreadCycle and a proven constant off-time chopper mode. The constant off-time mode cycles through  three  phases:  on,  fast  decay,  and  slow  decay.  The  SpreadCycle  mode  cycles  through  four phases: on, slow decay, fast decay, and a second slow decay.

The chopper frequency is an important parameter for a chopped motor driver. A too low frequency might generate audible noise. A higher frequency reduces current ripple in the motor, but with a too high frequency magnetic losses may rise. Also, power dissipation in the driver rises with increasing frequency due to the increased influence of switching slopes causing dynamic dissipation. Therefore, a compromise needs to be found. Most motors are optimally working in a frequency range of 16 kHz to 30 kHz.  The  chopper  frequency  is  influenced  by  a  number  of  parameter  settings  as  well  as  by  the motor inductivity and supply voltage.

## Hint

A  chopper  frequency  in  the  range  of  16 kHz  to  30 kHz  gives  a  good  result  for  most  motors  when using SpreadCycle. A higher frequency leads to increased switching losses. It is advised to check the resulting frequency and to work below 50 kHz.

Slow Decay Phase: current re-circulation

<!-- image -->

Three parameters are used for controlling both chopper modes:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                               | Setting   | Comment                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------|
| TOFF        | Sets the slow decay time ( off time ). This setting also limits the maximum chopper frequency. For operation with StealthChop, this parameter is not used, but it is required to enable the motor. In case of operation with StealthChop only, any setting is OK. Setting this parameter to zero completely disables all driver transistors and the motor can free-wheel. | 0         | chopper off                                                                               |
| TOFF        | Sets the slow decay time ( off time ). This setting also limits the maximum chopper frequency. For operation with StealthChop, this parameter is not used, but it is required to enable the motor. In case of operation with StealthChop only, any setting is OK. Setting this parameter to zero completely disables all driver transistors and the motor can free-wheel. | 1…15      | off time setting N CLK = 24 + 32* TOFF (1 will work with minimum blank time of 24 clocks) |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g. when filter networks are used, a setting of 2 or 3 will be required.                                                                 | 0         | 16 t CLK                                                                                  |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g. when filter networks are used, a setting of 2 or 3 will be required.                                                                 | 1         | 24 t CLK                                                                                  |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g. when filter networks are used, a setting of 2 or 3 will be required.                                                                 | 2         | 36 t CLK                                                                                  |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g. when filter networks are used, a setting of 2 or 3 will be required.                                                                 | 3         | 54 t CLK                                                                                  |
| chm         | Selection of the chopper mode                                                                                                                                                                                                                                                                                                                                             | 0         | SpreadCycle                                                                               |
| chm         | Selection of the chopper mode                                                                                                                                                                                                                                                                                                                                             | 1         | classic const. off time                                                                   |

## 9.1 SpreadCycle Chopper

The SpreadCycle (patented) chopper algorithm is a precise and simple to use chopper mode which automatically determines the optimum length for the fast-decay phase. The SpreadCycle will provide superior  microstepping  quality  even  with  default  settings.  Several  parameters  are  available  to optimize the chopper to the application.

Each  chopper  cycle  is  comprised  of  an  on  phase,  a  slow  decay  phase,  a  fast  decay  phase  and  a second slow decay phase (see Figure 9.3). The two slow decay phases and the two blank times per chopper cycle put an upper limit to the chopper frequency. The slow decay phases typically make up for  about  30%-70%  of  the  chopper  cycle  in  standstill  and  are  important  for  low  motor  and  driver power dissipation.

Calculation of a starting value for the slow decay time TOFF :

Assumptions:

Target Chopper frequency: 25kHz

Two slow decay cycles make up for 50% of overall chopper cycle time

For the TOFF setting this means:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

With 12 MHz clock this gives a setting of TOFF=3.0, i.e. 3.

With 16 MHz clock this gives a setting of TOFF=4.25, i.e. 4 or 5.

The hysteresis start setting forces the driver to introduce a minimum amount of current ripple into the motor coils. The current ripple must be higher than the current ripple which is caused by resistive losses  in  the  motor  to  give  best  microstepping  results.  This  will  allow  the  chopper  to  precisely regulate the current both for rising and for falling target current. The time required to introduce the current ripple into the motor coil also reduces the chopper frequency. Therefore, a higher hysteresis setting will lead to a lower chopper frequency. The motor inductance limits the ability of the chopper to follow a changing motor current. Further the duration of the on phase and the fast decay must be longer than the blanking time because the current comparator is disabled during blanking.

It is easiest to find the best setting by starting from a low hysteresis setting (e.g., HSTRT =0, HEND =0) and  increasing  HSTRT,  until  the  motor  runs  smoothly  at  low  velocity  settings.  This  can  best  be checked  when  measuring  the  motor  current  either  with  a  current  probe  or  by  probing  the  sense

resistor voltages (see Figure 9.2). Checking the sine wave shape near zero transition will show a small ledge between both half waves in case the hysteresis setting is too small. At medium velocities (i.e. 100 to 400 fullsteps per second), a too low hysteresis setting will lead to increased humming and vibration of the motor.

<!-- image -->

f: 93.07 Hz

Figure  9.2  No  ledges  in  current  wave  with  sufficient  hysteresis  (magenta:  current  A,  yellow  &amp; blue: sense resistor voltages A and B)

A too high hysteresis setting will lead to reduced chopper frequency and increased chopper noise but will not yield any benefit for the wave shape.

```
Quick Start For a quick start, see the Quick Configuration Guide in chapter 18. For detail procedure see Application Note AN001 Parameterization of SpreadCycle
```

As experiments show, the setting is quite independent of the motor, because higher current motors typically also have a lower coil resistance. Therefore, choosing a low to medium default value for the hysteresis (for example, effective hysteresis = 4) normally fits most applications. The setting can be optimized  by  experimenting  with  the  motor:  A  too  low  setting  will  result  in  reduced  microstep accuracy,  while  a  too  high  setting  will  lead  to  more  chopper  noise  and  motor  power  dissipation. When measuring  the  sense  resistor  voltage  in  motor  standstill  at  a  medium  coil  current  with  an oscilloscope, a too low setting shows a fast decay phase not longer than the blanking time. When the fast decay time becomes slightly longer than the blanking time, the setting is optimum. You can reduce the off-time setting, if this is hard to reach.

The hysteresis principle could in some cases lead to the chopper frequency becoming too low, e.g., when the coil resistance is high when compared to the supply voltage. This is avoided by splitting the  hysteresis  setting  into  a  start  setting  ( HSTRT+HEND )  and  an  end  setting  ( HEND ).  An  automatic hysteresis  decrementer  (HDEC)  interpolates  between  both  settings,  by  decrementing  the  hysteresis value stepwise each 16 system clocks. At the beginning of each chopper cycle, the hysteresis begins with a value which is the sum of the start and the end values ( HSTRT + HEND ), and decrements during the cycle, until either the chopper cycle ends, or the hysteresis end value ( HEND ) is reached. This way, the  chopper  frequency  is  stabilized  at  high  amplitudes  and  low  supply  voltage  situations,  if  the frequency gets too low. This avoids the frequency reaching the audible range.

Figure 9.3 SpreadCycle chopper scheme showing coil current during a chopper cycle

<!-- image -->

Two parameters control SpreadCycle mode:

| Parameter   | Description                                                                                                                                                                                                | Setting   | Comment                             |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------|
| HSTRT       | Hysteresis start setting. This value is an offset from the hysteresis end value HEND .                                                                                                                     | 0…7       | HSTRT =1…8 This value adds to HEND. |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited. | 0…2       | - 3… -1: negative HEND              |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited. | 3         | 0: zero HEND                        |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited. | 4…15      | 1…12: positive HEND                 |

Even at HSTRT=0 and HEND=0, the TMC5072 sets a minimum hysteresis via analog circuitry.

## Example:

In  the  example  a  hysteresis  of  4  has  been  chosen.  You  might  decide  to  not  use  hysteresis decrement. In this case set:

HEND =6

(sets an effective end value of 6-3=3)

HSTRT =0

(sets minimum hysteresis, i.e. 1: 3+1=4)

In  order  to  take  advantage  of  the  variable  hysteresis,  we  can  set  most  of  the  value  to  the HSTRT, i.e., 4, and the remaining 1 to hysteresis end. The resulting configuration register values are as follows:

| HEND =0   | (sets an effective end value of -3)                         |
|-----------|-------------------------------------------------------------|
| HSTRT =6  | (sets an effective start value of hysteresis end +7: 7-3=4) |

Hint

Highest motor velocities sometimes benefit from setting TOFF to 1, 2 or 3 and a short TBL of 1 or 0.

## 9.2 Classic Constant Off Time Chopper

The classic constant off time chopper is an alternative to  SpreadCycle. Perfectly tuned, it also gives good results. Also, the classic constant off time chopper (automatically) is used in combination with fullstepping in DcStep operation.

The classic constant off-time chopper uses a fixed-time fast decay following each on phase. While the duration of the on-phase is determined by the chopper comparator, the fast decay time needs to be long enough for the driver to follow the falling slope of the sine wave, but it should not be so long that  it  causes  excess  motor  current  ripple  and  power  dissipation.  This  can  be  tuned  using  an oscilloscope or evaluating motor smoothness at different velocities.  A good starting value is a fast decay time setting similar to the slow decay time setting.

Figure 9.4 Classic const. off time chopper with offset showing coil current

<!-- image -->

After  tuning  the  fast  decay  time,  the  offset  should  be  tuned  for  a  smooth  zero  crossing.  This  is necessary because the fast decay phase makes the absolute value of the motor current lower than the target current (see Figure 9.5). If the zero offset is too low, the motor stands still for a short moment during current zero crossing. If it is set too high, it makes a larger microstep. Typically, a positive offset setting is required for smoothest operation.

<!-- image -->

Coil current does not have optimum shape

<!-- image -->

Target current corrected for optimum shape of coil current

Figure 9.5 Zero crossing with classic chopper and correction using sine wave offset

Three parameters control constant off-time mode:

| Parameter           | Description                                                                                                                                                                                                                               | Setting   | Comment                                           |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------|
| TFD ( fd3 & HSTRT ) | Fast decay time setting. With CHM=1, these bits control the portion of fast decay for each chopper cycle.                                                                                                                                 | 0         | slow decay only                                   |
| TFD ( fd3 & HSTRT ) | Fast decay time setting. With CHM=1, these bits control the portion of fast decay for each chopper cycle.                                                                                                                                 | 1…15      | duration of fast decay phase                      |
| OFFSET ( HEND )     | Sine wave offset . With CHM=1, these bits control the sine wave offset. A positive offset corrects for zero crossing error.                                                                                                               | 0…2       | negative offset: - 3… -1                          |
| OFFSET ( HEND )     | Sine wave offset . With CHM=1, these bits control the sine wave offset. A positive offset corrects for zero crossing error.                                                                                                               | 3         | no offset: 0                                      |
| OFFSET ( HEND )     | Sine wave offset . With CHM=1, these bits control the sine wave offset. A positive offset corrects for zero crossing error.                                                                                                               | 4…15      | positive offset 1…12                              |
| disfdcc             | Selects usage of the current comparator for termination of the fast decay cycle. If current comparator is enabled, it terminates the fast decay cycle in case the current reaches a higher negative value than the actual positive value. | 0         | enable comparator termination of fast decay cycle |
| disfdcc             | Selects usage of the current comparator for termination of the fast decay cycle. If current comparator is enabled, it terminates the fast decay cycle in case the current reaches a higher negative value than the actual positive value. | 1         | end by time only                                  |

## 9.3 Random Off Time

In the constant off-time chopper mode, both coil choppers run freely without synchronization. The frequency of each chopper mainly depends on the coil current and the motor coil inductance. The inductance varies with the microstep position. With some motors, a slightly audible beat can occur between  the  chopper  frequencies  when  they  are  close  together.  This  typically  occurs  at  a  few microstep positions within each quarter wave. This effect is usually not audible when compared to mechanical noise generated by ball bearings, etc. Another factor which can cause a similar effect is a poor layout of the sense resistor GND connections.

## Hint

A common factor, which can cause motor noise, is a bad PCB layout causing coupling of both sense resistor voltages (please refer layouts hint in chapter 24).

To minimize the effect of a beat between both chopper frequencies, an internal random generator is provided.  It  modulates  the  slow  decay  time  setting  when  switched  on  by  the rndtf bit.  The rndtf feature further spreads the chopper spectrum, reducing electromagnetic emission on single frequencies.

| Parameter   | Description                                                                                                             | Setting   | Comment                          |
|-------------|-------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------------|
| rndtf       | This bit switches on a random off time generator, which slightly modulates the off-time TOFF using a random polynomial. | 0 1       | disable random modulation enable |

## 10 Driver Diagnostic Flags

The TMC5072 drivers supply a complete set of diagnostic and protection capabilities, like short to GND protection  and  undervoltage  detection.  A  detection  of  an  open  load  condition  allows  testing  if  a motor coil connection is interrupted. See the DRV\_STATUS table for details.

## 10.1 Temperature Measurement

The driver integrates a two-level temperature sensor (120°C pre-warning and 150°C thermal shutdown) for  diagnostics  and  for  protection  of  the  IC  against  excess  heat.  Heat  is  mainly  generated  by  the motor  driver  stages,  and,  at  increased  voltage,  by  the  internal  voltage  regulator.  Most  critical situations, where the driver MOSFETs could be overheated, are avoided when enabling the short to GND protection.  For  many  applications,  the  overtemperature  pre-warning  will  indicate  an  abnormal operation situation and can be used to initiate user warning or power reduction measures like motor current reduction. The thermal shutdown is just an emergency measure and temperature rising to the shutdown level should be prevented by design.

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the pre-warning level ( otpw ) to avoid continuous heating to the shutdown level.

## 10.2 Short to GND Protection

The TMC5072 power stages are protected against a short circuit condition by an additional measurement of the current flowing through the high-side MOSFETs. This is important, as most short circuit conditions  result  from  a  motor  cable  insulation  defect,  e.g.,  when  touching  the  conducting  parts connected to the system ground. The short detection is protected against spurious triggering, e.g., by ESD discharges, by retrying three times before switching off the motor.

Once a short condition is safely detected, the corresponding driver bridge becomes switched off, and the s2ga or s2gb flag becomes set. To restart the motor, the user must intervene by disabling and reenabling the driver. It should be noted, that the short to GND protection cannot protect the system and  the  power  stages  for  all  possible  short  events,  as  a  short  event  is  rather  undefined,  and  a complex network of external components may be involved. Therefore, short circuits should basically be avoided.

## 10.3 Open Load Diagnostics

Interrupted  cables  are  a  common  cause  for  systems  failing,  e.g.,  when  connectors  are  not  firmly plugged. The TMC5072 detects open load conditions by checking if it can reach the desired motor coil current. This way, also undervoltage conditions, high motor  velocity settings or short  and overtemperature  conditions  may  cause  triggering  of  the  open  load  flag,  and  inform  the  user,  that motor torque  may  suffer.  In  motor  stand  still,  open  load  cannot  be  measured,  as  the  coils  might eventually have zero current.

Open load detection is provided for system debugging.

To safely detect an interrupted coil connection, operate in SpreadCycle, and check the open load flags following a motion of minimum four times the selected microstep resolution into a single direction using  low  or  nominal  motor  velocity  operation,  only.  However,  the ola and olb flags  have  just informative character and do not cause any action of the driver.

## 11 Ramp Generator

The  ramp  generator  allows  motion  based  on  target  position  or  target  velocity.  It  automatically calculates  the  optimum  motion  profile  taking  into  account  acceleration  and  velocity  settings.  The TMC5072 integrates a new type of ramp generator, which offers faster machine operation compared to the classical linear acceleration ramps. The SixPoint ramp generator allows adapting the acceleration ramps to the torque curves of a stepper motor and uses two different acceleration settings each for the acceleration phase and for the deceleration phase. See Figure 11.2.

## 11.1 Real World Unit Conversion

The TMC5072 uses its internal or external clock signal as a time reference for all internal operations. Thus,  all  time,  velocity  and  acceleration  settings  are  referenced  to  fCLK.  For  best  stability  and reproducibility, it is recommended to use an external quartz oscillator as a time base, or to provide a clock signal from a microcontroller.

The units of a TMC5072 register content are written as register[5072].

| PARAMETER VS. UNITS         | PARAMETER VS. UNITS   | PARAMETER VS. UNITS                                                                                                  |
|-----------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------|
| Parameter / Symbol          | Unit                  | calculation / description / comment                                                                                  |
| f CLK [Hz]                  | [Hz]                  | clock frequency of the TMC5072 in [Hz]                                                                               |
| s                           | [s]                   | second                                                                                                               |
| US                          | µstep                 |                                                                                                                      |
| FS                          | fullstep              |                                                                                                                      |
| µstep velocity v[Hz]        | µsteps / s            | v[Hz] = v[5072] * ( f CLK [Hz]/2 / 2^23 )                                                                            |
| µstep acceleration a[Hz/s]  | µsteps / s^2          | a[Hz/s] = a[5072] * f CLK [Hz]^2 / (512*256) / 2^24                                                                  |
| USC microstep count         | counts                | microstep resolution in number of microsteps (this is the number of microsteps between two fullsteps - normally 256) |
| rotations per second v[rps] | rotations / s         | v[rps] = v[µsteps/s] / USC / FSC FSC: motor fullsteps per rotation, e.g., 200                                        |
| rps acceleration a[rps/s^2] | rotations / s^2       | a[rps/s^2] = a[µsteps/s^2] / USC / FSC                                                                               |
| ramp steps[µsteps] = rs     | µsteps                | rs = (v[5072])^2 / a[5072] / 2^8 microsteps during linear acceleration ramp (assuming acceleration from 0 to v)      |

In rare  cases, the upper acceleration limit might impose a limitation to the application,  e.g., when working with a reduced clock frequency or high gearing and low load on the motor. To increase the effective  acceleration  possible,  the  microstep  resolution  of  the  sequencer  input  may  be  decreased. Setting the CHOPCONF option MRES =%0001 will double the motor velocity for the same speed setting and  thus  also  double  effective  acceleration  and  deceleration.  The  motor  will  have  half  position resolution with this setting.

Quick Start

For a quick start, see the Quick Configuration Guide in chapter 18.

## 11.2 Motion Profiles

For the ramp generator register set, please refer to the chapter 6.2.

## 11.2.1 Ramp Mode

The  ramp  generator  delivers  two  phase  acceleration  and  two-phase  deceleration  ramps  with additional programmable start and stop velocities (see Figure 11.1).

## Note

The start velocity can be set to zero, if not used.

The stop velocity can be set to ten (or down to one), if not used.

Take  care  to  always  set VSTOP identical  to  or  above VSTART .  This  ensures  that  even  a  short motion can be terminated successfully at the target position.

The two different sets of acceleration and deceleration can be combined freely. A common transition speed  V1  allows  for  velocity  dependent  switching  between  both  acceleration  and  deceleration settings . A typical use case will use lower acceleration and deceleration values at higher velocities, as the motors torque declines at higher velocity. When considering friction in the system, it becomes clear, that typically deceleration of the system is quicker than acceleration. Thus, deceleration values can  be  higher  in  many  applications.  This  way,  operation  speed  of  the  motor  in  time  critical applications can be maximized.

As target positions and ramp parameters may be changed any time during the motion, the motion controller  will  always  use  the  optimum  (fastest)  way  to  reach  the  target,  while  sticking  to  the constraints  set  by  the  user.  This  way  it  might  happen,  that  the  motion  becomes  automatically stopped, crosses zero and drives back again. This case is flagged by the special flag second\_move.

## 11.2.2 Start and Stop Velocity

When using increased levels of start- and stop velocity, it becomes clear, that a subsequent move into the opposite direction would provide a jerk identical to VSTART + VSTOP ,  rather than only VSTART . As the motor probably is not able to follow this, you can set a time delay for a subsequent move by setting TZEROWAIT .  An  active  delay  time  is  flagged  by  the  flag t\_zerowait\_active .  Once  the  target position is reached, the flag position\_reached becomes active.

Figure 11.1 Ramp generator velocity trace showing consequent move in negative direction

<!-- image -->

Figure 11.2 Illustration of optimized motor torque usage with TMC5072 ramp generator

<!-- image -->

## 11.2.3 Velocity Mode

For the ease of use, velocity mode movements do not use the different acceleration and deceleration settings. You need to set VMAX and AMAX only for velocity mode. The ramp generator always uses AMAX to accelerate or decelerate to VMAX in this mode.

To  decelerate  the  motor  to  stand  still,  it  is  sufficient  to  set VMAX to  zero.  The  flag vzero signals standstill  of  the  motor.  The  flag velocity\_reached always  signals,  that  the  target  velocity  has  been reached.

## 11.2.4 Early Ramp Termination

In cases where users can interact with a system, some applications require terminating a motion by ramping down to zero velocity before the target position has been reached.

## OPTIONS TO TERMINATE MOTION USING ACCELERATION SETTINGS:

- a) Switch to velocity mode, set VMAX =0 and AMAX to the desired deceleration value. This will stop the motor using a linear ramp.
- b) For a stop in positioning mode, set VSTART =0 and VMAX =0. VSTOP is not used in this case. The driver will use AMAX and A1 (as determined by V1 ) for going to zero velocity.
- c) For  a  stop  using D1 , DMAX and VSTOP ,  trigger  the  deceleration  phase  by  copying XACTUAL to XTARGET . Set TZEROWAIT sufficiently to allow the CPU to interact during this time. The driver will decelerate  and  eventually  come  to  a  stop.  Poll  the  actual  velocity  to  terminate  motion  during TZEROWAIT time using option a) or b).
- d) Activate a stop switch. This can be done by means of the hardware input, e.g. using a wired 'OR' to the REF switch input. If you do not use the hardware input and have tied the REFL and REFR to a  fixed  level,  enable  the  stop  function  ( stop\_l\_enable , stop\_r\_enable )  and  use  the  inverting function ( pol\_stop\_l , pol\_stop\_r ) to simulate the switch activation.

## 11.2.5 Application Example: Joystick Control

Applications like surveillance cameras can be optimally enhanced using the motion controller: while joystick commands operate the motor at a user defined velocity, the target ramp generator ensures that the valid motion range never is left.

## REALIZE JOYSTICK CONTROL

1. Use positioning mode to control the motion direction and to set the motion limit(s).
2. Modify VMAX at any time in the range VSTART to your maximum value. With VSTART =0, you can also stop motion by setting VMAX =0. The motion controller will use A1, and AMAX as determined by V1 to adapt velocity for ramping up and ramping down.
3. In case you do not modify the acceleration settings, you do not need to rewrite XTARGET ,  just modify VMAX .
4. DMAX, D1 and VSTOP only become used when the ramp controller slows down due to reaching the target position, or when the target position has been modified to point to the other direction.

## 11.3 Interrupt Handling

The motion controllers provide the capability to issue an interrupt to the microcontroller, e.g., to react on a position reached event. In case more than one interrupt source is possible, it is necessary to carefully check for the actual event, without risking losing an event.

## INTERRUPT HANDLING FOR 2 AXIS (EXAMPLE FOR TARGET\_REACHED):

1. Read RAMP\_STAT1 to clear the interrupt flags. This will turn off the interrupt source.
2. Check XACTUAL1 for reaching of the target position (and any other conditions you want to check for ramp 1).
3. Do the same for RAMP\_STAT2 and XACTUAL2 .

This way, you are sure that you will not miss any target\_reached condition, because you first clear the flags, and afterwards read out the condition.

## 11.4 Velocity Thresholds

The ramp generator provides several velocity thresholds coupled to the actual velocity VACTUAL . The different  ranges  allow  programming  the  motor  to  the  optimum  step  mode,  coil  current  and acceleration  settings.  For  the  range  labeled  'microstepping'  in Figure  11.3,  either  StealthChop  or SpreadCycle can be used, if enabled.

Figure 11.3 Ramp generator velocity dependent motor control

<!-- image -->

## Note

Since it is not necessary to differentiate the velocity to the last detail, the velocity thresholds use a reduced  number  of  bits  for  comparison  and  the  lower  eight  bits  of  the  compare  values  become ignored.

## 11.5 Reference Switches

Prior  to  normal  operation  of  the  drive  an  absolute  reference  position  must  be  set.  The  reference position  can  be  found  using  a  mechanical  stop  which  can  be  detected  by  stall  detection,  or  by  a reference switch.

In case of a linear drive, the mechanical motion range must not be left. This can be ensured also for abnormal situations by enabling the stop switch functions for the left and the right reference switch. Therefore, the ramp generator responds to a number of stop events as configured in the SW\_MODE register. There are two ways to stop the motor:

- -it can be stopped abruptly when a switch is hit. This is useful in an emergency case and for StallGuard based homing.
- -Or the motor can be softly decelerated to zero using deceleration settings (DMAX, V1, D1).

## Hint

Latching of the ramp position XACTUAL to the holding register XLATCH upon a switch event gives a precise snapshot of the position of the reference switch.

Figure 11.4 Using reference switches (example)

<!-- image -->

Normally  open  or  normally  closed  switches  can  be  used  by  programming  the  switch  polarity  or selecting  the  pull-up  or  pull-down  resistor  configuration.  A  normally  closed  switch  is  failsafe  with respect to an interrupt of the switch connection. Switches which can be used are:

- -mechanical switches,
- -photo interrupters, or
- -hall sensors.

Be careful to select reference switch resistors matching your switch requirements! In case of long cables additional RC filtering might be required near the TMC5072 reference inputs. Adding an RC filter will also reduce the danger of destroying the logic level inputs by wiring faults, but it will add a certain delay which should be considered with respect to the application.

## IMPLEMENTING A HOMING PROCEDURE

1. Make sure, that the home switch is not pressed, e.g., by moving away from the switch.
2. Activate  position  latching  upon  the  desired  switch  event  and  activate  motor  (soft)  stop  upon active switch. StallGuard based homing requires using a hard stop ( en\_softstop =0).
3. Start a motion ramp into the direction of the switch. (Move to a more negative position for a left switch, to a more positive position for a right switch). You may timeout this motion by using a position ramping command.
4. As soon as the switch is hit, the position becomes latched, and the motor is stopped. Wait until the motor is in standstill again by polling the actual velocity VACTUAL or checking vzero or the standstill flag. Please be aware that reading RAMP\_STAT may clear flags (e.g., sg\_stop ) and thus the motor may restart after expiration of TZEROWAIT . In case the stop condition might be reset by the read and clear (R+C) function, be sure to execute step 5 within the time range set by TZEROWAIT .
5. Switch  the  ramp  generator  to  hold  mode  and  calculate  the  difference  between  the  latched position and the actual position. For StallGuard based homing or when using hard stop, XACTUAL stops exactly at the home position, so there is no difference (0).
6. Write the calculated difference into the actual position register. Now, homing is finished. A move to  position  0  will  bring  back  the  motor  exactly  to  the  switching  point.  In  case  StallGuard  was used for homing, a read access to RAMP\_STAT clears the StallGuard stop event event\_stop\_sg and releases the motor from the stop condition.

## 11.6 Ramp Generator Response Time

The ramp generator is realized in hardware and executes commands within less than a microsecond, switching over to the desired mode and target values taking effect. The velocity accumulator updates the  velocities  each  512  clock  cycles,  based  on  the  actual  acceleration  setting,  to  give  a  smooth acceleration.  However,  at  low  motion  velocities  and  low  acceleration  settings,  e.g.,  at  the  start  of positioning ra mp (VSTART) or it's stop (VSTOP), the actual step pulse rate is very low. Therefore, a significant  delay  can  add  for  execution  of  the  first  and  last  steps,  as  determined  by  the  selected microstep velocity. For example, a microstep velocity of 10Hz means, that 100ms expire in between of each two steps. As (at least a part) of the last microstep of a ramp is executed with a velocity equal to  VSTOP,  this  can  cause  significant  delay  to  reach  the  target  position.  Set  VSTOP  in  a  range  of minimum 100 to 1000 for quick ramp termination (100 yields roughly &lt;10ms, 1000 roughly &lt;1ms).

## 12 StallGuard2 Load Measurement

StallGuard2  provides  an  accurate  measurement  of  the  load  on  the  motor.  It  can  be  used  for  stall detection as well as other uses at loads below those which stall the motor, such as CoolStep loadadaptive current reduction. The StallGuard2 measurement value changes linearly over a wide range of load, velocity, and current settings, as shown in Figure 12.1. At maximum motor load, the value goes to zero or near to zero. This corresponds to a load angle of 90° between the magnetic field of the coils and magnets in the rotor. This also is the most energy-efficient point of operation for the motor.

<!-- image -->

Figure 12.1 Function principle of StallGuard2

| Parameter   | Description                                                                                                                                                                                                                                                                                                                     | Setting   | Comment                                                    |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|------------------------------------------------------------|
| SGT         | This signed value controls the StallGuard2 threshold level for stall detection and sets the optimum measurement range for readout. A lower value gives a higher sensitivity. Zero is the starting value working with most motors. A higher value makes StallGuard2 less sensitive and requires more torque to indicate a stall. | 0         | indifferent value                                          |
| SGT         | This signed value controls the StallGuard2 threshold level for stall detection and sets the optimum measurement range for readout. A lower value gives a higher sensitivity. Zero is the starting value working with most motors. A higher value makes StallGuard2 less sensitive and requires more torque to indicate a stall. | +1… +63   | less sensitivity                                           |
| sfilt       | Enables the StallGuard2 filter for more precision of the measurement. If set, reduces the measurement frequency to one measurement per electrical period of the motor (4 fullsteps).                                                                                                                                            | 0         | standard mode                                              |
| sfilt       | Enables the StallGuard2 filter for more precision of the measurement. If set, reduces the measurement frequency to one measurement per electrical period of the motor (4 fullsteps).                                                                                                                                            | 1         | filtered mode                                              |
| Status word | Description                                                                                                                                                                                                                                                                                                                     | Range     | Comment                                                    |
| SG          | This is the StallGuard2 result . A higher reading indicates less mechanical load. A lower reading indicates a higher load and thus a higher load angle. Tune the SGT setting to show a SG reading of roughly 0 to 100 at maximum load before motor stall.                                                                       | 0… 1023   | 0: highest load low value: high load high value: less load |

## Attention

In order to use StallGuard2 and CoolStep, the StallGuard2 sensitivity should first be tuned using the SGT setting!

## 12.1 Tuning StallGuard2 Threshold SGT

The StallGuard2 value SG is affected by motor-specific characteristics and application-specific demands on load and velocity. Therefore, the easiest way to tune the StallGuard2 threshold SGT for a specific motor type and operating conditions is interactive tuning in the actual application.

## INITIAL PROCEDURE FOR TUNING STALLGUARD SGT

1. Operate the motor at the normal operation velocity for your application and monitor SG .
2. Apply slowly increasing mechanical load to the motor. If the motor stalls before SG reaches zero, decrease SGT . If SG reaches zero before the motor stalls, increase SGT . A good SGT starting value is zero. SGT is signed, so it can have negative or positive values.
3. Now  enable sg\_stop and  make  sure,  that  the  motor  is  safely  stopped  whenever  it  is  stalled. Increase SGT if the motor becomes stopped before a stall occurs. Restart the motor by disabling sg\_stop or by reading the RAMP\_STAT register (read and clear function).
4. The optimum setting is reached when SG is between 0 and roughly 100 at increasing load shortly before the motor stalls, and SG increases by 100 or more without load. SGT in most cases can be tuned for a certain motion velocity or a velocity range. Make sure, that the setting works reliable in  a  certain  range  (e.g.,  80%  to  120%  of  desired  velocity)  and  also  under  extreme  motor conditions (lowest and highest applicable temperature).

## OPTIONAL PROCEDURE ALLOWING AUTOMATIC TUNING OF SGT

The basic idea behind the SGT setting is a factor, which compensates the StallGuard measurement for resistive losses inside the motor. At standstill and very low velocities, resistive losses are the main factor for the balance of energy in the motor, because mechanical power is zero or near to zero. This way, SGT can be set to an optimum at near zero velocity. This algorithm is especially useful for tuning SGT within  the  application  to  give  the  best  result  independent  of  environment  conditions,  motor stray, etc.

1. Operate the motor at low velocity &lt; 10 RPM (i.e., a few to a few fullsteps per second) and target operation current and supply voltage. In this velocity range, there is not much dependence of SG on  the  motor  load,  because  the  motor  does  not  generate  significant  back  EMF.  Therefore, mechanical load will not make a big difference on the result.
2. Switch on sfilt . Now increase SGT starting from 0 to a value, where SG starts rising. With a high SGT , SG will rise up to the maximum value. Reduce again to the highest value, where SG stays at 0.  Now  the SGT value  is  set  as  sensibly  as  possible.  When  you  see SG increasing  at  higher velocities, there will be useful stall detection.

The upper velocity for the stall detection with this setting is determined by the velocity, where the motor back EMF approaches the supply voltage, and the motor current starts dropping when further increasing velocity.

SG goes  to  zero  when  the  motor  stalls  and  the  ramp  generator  can  be  programmed  to  stop  the motor  upon  a  stall  event  by  enabling sg\_stop in SW\_MODE .  Set VCOOLTHRS to  match  the  lower velocity threshold where StallGuard delivers a good result to use sg\_stop .

The  system  clock  frequency  affects SG .  An  external  crystal-stabilized  clock  should  be  used  for applications  that  demand  the  highest  performance.  The  power  supply  voltage  also  affects SG ,  so tighter regulation results in more accurate values. SG measurement has a high resolution, and there are a few ways to enhance its accuracy, as described in the following sections.

Quick Start For a quick start, see the Quick Configuration Guide in chapter 18.

For detail procedure see Application Note AN002 Parameterization of StallGuard2 &amp; CoolStep

## 12.1.1 Variable Velocity Limits VCOOLTHRS and VHIGH

The SGT setting chosen as a result of the previously described SGT tuning can be used for a certain velocity range. Outside this range, a stall may not be detected safely, and CoolStep might not give the optimum result.

Figure 12.2 Example: Optimum SGT setting and StallGuard2 reading with an example motor

<!-- image -->

In many applications, operation at or near a single operation point is used most of the time and a single setting is sufficient. The ramp generator provides a lower ( VCOOLTHRS ) and an upper velocity threshold ( VHIGH ) to match this. The stall detection is automatically disabled outside the determined operation  point,  e.g.,  during  acceleration  phases  preceding  a  sensorless  homing  procedure  when setting VCOOLTHRS to a matching value. An upper limit can be specified by VHIGH .

In some applications, a velocity dependent tuning of the SGT value can be expedient, using a small number of support points and linear interpolation.

## 12.1.2 Small Motors with High Torque Ripple and Resonance

Motors with a high detent torque show an increased variation of the StallGuard2 measurement value SG with varying motor currents, especially at low currents. For these motors, the current dependency should be checked for best result.

## 12.1.3 Temperature Dependence of Motor Coil Resistance

Motors working over a wide temperature range may require temperature correction, because motor coil resistance increases with rising temperature. This can be corrected as a linear reduction of SG at increasing temperature, as motor efficiency is reduced.

## 12.1.4 Accuracy and Reproducibility of StallGuard2 Measurement

In a production environment, it may be desirable to use a fixed SGT value within an application for one motor type. Most of the unit-to-unit variation in StallGuard2 measurements results from manufacturing tolerances in motor construction. The measurement error of StallGuard2 -provided that all other parameters remain stable -can be as low as:

𝑠𝑡𝑎𝑙𝑙𝐺𝑢𝑎𝑟𝑑 𝑚𝑒𝑎𝑠𝑢𝑟𝑒𝑚𝑒𝑛𝑡 𝑒𝑟𝑟𝑜𝑟 = ±𝑚𝑎𝑥(1, |𝑆𝐺𝑇|)

## 12.2 StallGuard2 Update Rate and Filter

The StallGuard2 measurement value SG is updated with each full step of the motor. This is enough to safely detect a stall because a stall always means the loss of four full steps. In a practical application, especially  when  using  CoolStep,  a  more  precise  measurement  might  be  more  important  than  an update for each fullstep because the mechanical load never changes instantaneously from one step to the next. For these applications, the sfilt bit enables a filtering function over four load measurements. The filter should always be enabled when high-precision measurement is required. It compensates for variations  in  motor  construction,  for  example  due  to  misalignment  of  the  phase  A  to  phase  B magnets. The filter should be disabled when rapid response to increasing load is required and for best results of sensorless homing using StallGuard.

## 12.3 Detecting a Motor Stall

For best stall detection, work without StallGuard filtering ( sfilt =0). To safely detect a motor stall the stall threshold must be determined using a specific SGT setting. Therefore, the maximum load needs to be determined, which the motor can drive without stalling. At the same time, monitor the SG value at this load, e.g., some value within the range 0 to 100. The stall threshold should be a value safely within the operating limits, to allow for parameter stray. The response at an SGT setting at or near 0 gives some idea on the quality of the signal: Check the SG value without load and with maximum load. They should show a difference of at least 100 or a few 100, which shall be large compared to the offset. If you set the SGT value in a way, that a reading of 0 occurs at maximum motor load, the stall can be automatically detected by the motion controller to issue a motor stop. In the moment of the step resulting in a step loss, the lowest reading will be visible. After the step loss, the motor will vibrate and show a higher SG reading.

## 12.4 Homing with StallGuard

The  homing  of  a  linear  drive  requires  moving  the  motor  into  the  direction  of  a  hard  stop.  As StallGuard needs a certain velocity to work (as set by VCOOLTHRS ), make sure that the start point is far enough away from the hard stop to provide the distance required for the acceleration phase. After setting up SGT and the ramp generator registers, start a motion into the direction of the hard stop and activate the stop on stall function (set sg\_stop in SW\_MODE ). Once a stall is detected, the ramp generator  stops  motion  and  sets VACTUAL zero,  stopping  the  motor.  The  stop  condition  also  is indicated by the flag StallGuard in DRV\_STATUS . After setting up new motion parameters to prevent the motor from restarting right away, StallGuard can be disabled, or the motor can be re-enabled by reading RAMP\_STAT . The read and clear function of the event\_stop\_sg flag in RAMP\_STAT would restart the motor after expiration of TZEROWAIT in case the motion parameters have not been modified.

## 12.5 Limits of StallGuard2 Operation

StallGuard2 does not operate reliably at extreme motor velocities: Very low motor velocities (for many motors, less than one revolution per second) generate a low back EMF and make the measurement unstable  and  dependent  on  environment  conditions  (temperature,  etc.).  The  automatic  tuning procedure  described  above  will  compensate  for  this.  Other  conditions  will  also  lead  to  extreme settings of SGT and poor response of the measurement value SG to the motor load.

Very high motor velocities, in which the full sinusoidal current is not driven into the motor coils also leads to poor response. These velocities are typically characterized by the motor back EMF reaching the supply voltage.

## 13 CoolStep Operation

CoolStep  is  an  automatic  smart  energy  optimization  for  stepper  motors  based  on  the  motor mechanical load, making them 'green'.

## 13.1 User Benefits

<!-- image -->

Energy efficiency Motor generates less heat Less cooling infrastructure Cheaper motor

- -consumption decreased up to 75%
- -improved mechanical precision
- -for motor and driver
- -does the job!

CoolStep allows substantial energy savings, especially for motors which see varying loads or operate at a high duty cycle. Because a stepper motor application needs to work with a torque reserve of 30% to  50%,  even  a  constant-load  application  allows  significant  energy  savings  because  CoolStep automatically enables torque reserve when required. Reducing power consumption keeps the system cooler, increases motor life, and allows reducing cost in the power supply and cooling components.

Reducing motor current by half results in reducing power by a factor of four.

## 13.2 Setting up for CoolStep

CoolStep is controlled by several parameters, but two are critical for understanding how it works:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                             | Range   | Comment                             |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------------------------------------|
| SEMIN       | 4-bit unsigned integer that sets a lower threshold . If SG goes below this threshold, CoolStep increases the current to both coils. The 4-bit SEMIN value is scaled by 32 to cover the lower half of the range of the 10-bit SG value. (The name of this parameter is derived from smartEnergy, which is an earlier name for CoolStep.) | 0       | disable CoolStep                    |
| SEMIN       | 4-bit unsigned integer that sets a lower threshold . If SG goes below this threshold, CoolStep increases the current to both coils. The 4-bit SEMIN value is scaled by 32 to cover the lower half of the range of the 10-bit SG value. (The name of this parameter is derived from smartEnergy, which is an earlier name for CoolStep.) | 1…15    | threshold is SEMIN *32              |
| SEMAX       | 4-bit unsigned integer that controls an upper threshold . If SG is sampled equal to or above this threshold enough times, CoolStep decreases the current to both coils. The upper threshold is ( SEMIN + SEMAX + 1)*32.                                                                                                                 | 0…15    | threshold is ( SEMIN + SEMAX +1)*32 |

Figure 13.1 shows the operating regions of CoolStep:

- -The black line represents the SG measurement value.
- -The blue line represents the mechanical load applied to the motor.
- -The red line represents the current into the motor coils.

When the load increases, SG falls below SEMIN ,  and CoolStep increases the current. When the load decreases, SG rises above ( SEMIN + SEMAX + 1) * 32, and the current is reduced.

Figure 13.1 CoolStep adapts motor current to the load

<!-- image -->

Five more parameters control CoolStep and one status value is returned:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                    | Range   | Comment                                                            |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------|
| SEUP        | Sets the current increment step . The current becomes incremented for each measured StallGuard2 value below the lower threshold.                                                                                                                                                                                               | 0…3     | step width is 1, 2, 4, 8                                           |
| SEDN        | Sets the number of StallGuard2 readings above the upper threshold necessary for each current decrement of the motor current.                                                                                                                                                                                                   | 0…3     | number of StallGuard2 measurements per decrement: 32, 8, 2, 1      |
| SEIMIN      | Sets the lower motor current limit for CoolStep operation by scaling the IRUN current setting.                                                                                                                                                                                                                                 | 0 1     | 0: 1/2 of IRUN 1: 1/4 of IRUN                                      |
| VCOOL THRS  | Lower ramp generator velocity threshold. Below this velocity CoolStep becomes disabled (not used in Step/Dir mode). Adapt to the lower limit of the velocity range where StallGuard2 gives a stable result. Hint: May be adapted to disable CoolStep during acceleration and deceleration phase by setting identical to VMAX . | 1… 2^23 |                                                                    |
| VHIGH       | Upper ramp generator velocity threshold value. Above this velocity CoolStep becomes disabled (not used in Step/Dir mode). Adapt to the velocity range where StallGuard2 gives a stable result.                                                                                                                                 | 1… 2^23 | Also controls additional functions like switching to fullstepping. |
| Status word | Description                                                                                                                                                                                                                                                                                                                    | Range   | Comment                                                            |
| CSACTUAL    | This status value provides the actual motor current scale as controlled by CoolStep. The value goes up to the IRUN value and down to the portion of IRUN as specified by SEIMIN .                                                                                                                                              | 0…31    | 1/32, 2/32, … 32/32                                                |

## 13.3 Tuning CoolStep

Before tuning CoolStep, first tune the StallGuard2 threshold level SGT , which affects the range of the load measurement value SG . CoolStep uses SG to operate the motor near the optimum load angle of +90°.

The current  increment  speed  is  specified  in SEUP ,  and  the  current  decrement  speed  is  specified  in SEDN .  They  can  be  tuned  separately  because  they  are  triggered  by  different  events  that  may  need different responses. The encodings for these parameters allow the coil currents to be increased much more quickly than decreased, because crossing the lower threshold is a more serious event that may require  a  faster  response.  If  the  response  is  too  slow,  the  motor  may  stall.  In  contrast,  a  slow response  to  crossing  the  upper  threshold  does  not  risk  anything  more  serious  than  missing  an opportunity to save power.

CoolStep operates between limits controlled by the current scale parameter IRUN and the seimin bit.

## 13.3.1 Response Time

For fast response to increasing motor load, use a high current increment step SEUP . If the motor load changes slowly, a lower current increment step can be used to avoid motor oscillations. If the filter controlled by sfilt is enabled, the measurement rate and regulation speed are cut by a factor of four.

## Hint

The most common and most beneficial use is to adapt CoolStep for operation at the typical system target operation velocity and  to set the velocity thresholds according. As acceleration  and decelerations normally shall be quick, they will require the full motor current, while they have only a small contribution to overall power consumption due to their short duration.

## 13.3.2 Low Velocity and Standby Operation

Because CoolStep is not able to measure the motor load in standstill and at very low RPM, a lower velocity  threshold  is  provided  in  the  ramp  generator.  It  should  be  set  to  an  application  specific default value. Below this threshold the normal current setting via IRUN respectively IHOLD is valid. An upper  threshold  is  provided  by  the VHIGH setting.  Both  thresholds  can  be  set  as  a  result  of  the StallGuard2 tuning process.

## 14 DcStep

DcStep is an automatic commutation mode for the stepper motor. It allows the stepper to run with its target velocity as commanded by the ramp generator as long as it can cope with the load. In case the motor becomes overloaded, it slows down to a velocity, where the motor can still drive the load. This  way,  the  stepper  motor  never  stalls  and  can  drive  heavy  loads  as  fast  as  possible.  Its  higher torque available at lower velocity, plus dynamic torque from its flywheel mass allows compensating for mechanical torque peaks. In case the motor becomes completely blocked, the stall flag becomes set.

## 14.1 User Benefits

<!-- image -->

Motor Application Acceleration Energy efficiency Cheaper motor

- never loses steps

- works as fast as possible

- automatically as high as possible

- highest at speed limit

- does the job!

## 14.2 Designing-In DcStep

In a classical application, the operation area is limited by the maximum torque required at maximum application velocity. A safety margin of up to 50% torque is required, to compensate for unforeseen load peaks, torque loss due to resonance and aging of mechanical components. DcStep allows using up to the full available motor torque. Even higher short time dynamic loads can be overcome using motor and application flywheel mass without the danger of a motor stall. With DcStep the nominal application  load  can  be  extended  to  a  higher  torque  only  limited  by  the  safety  margin  near  the holding  torque  area  (which  is  the  highest  torque  the  motor  can  provide).  Additionally,  maximum application velocity can be increased up to the actually reachable motor velocity.

<!-- image -->

MNOM: Nominal torque required by application

MMAX: Motor pull-out torque at v=0

Safety margin:

Classical application operation area is limited by a certain percentage of motor pull-out torque

Figure 14.1 DcStep extended application operation area

## Quick Start

For a quick start, see the Quick Configuration Guide in chapter 18. For detail configuration procedure see Application Note AN003 DcStep

## 14.3 Enabling DcStep

DcStep requires only a few settings. It directly feeds back motor motion to the ramp generator, so that it becomes seamlessly integrated into the motion ramp, even if the motor becomes overloaded with respect to the target velocity. DcStep operates the motor in fullstep mode at the ramp generator target velocity VACTUAL or at reduced velocity if the motor becomes overloaded. It requires setting the minimum operation velocity VDCMIN . VDCMIN shall be set to the lowest operating velocity where DcStep gives a reliable detection of motor operation. The motor never stalls unless it becomes braked to a velocity below VDCMIN . In case the velocity should fall below this value, the motor would restart once its load is released, unless the stall detection becomes enabled (set sg\_stop ). Stall detection is covered by StallGuard2.

<!-- image -->

Nominal ramp profile

Ramp profile with torque overload and same target position

Figure 14.2 Velocity profile with impact by overload situation

## Attention:

DcStep requires that the phase polarity of the sine wave is positive within the MSCNT range 768 to 255 and negative within 256 to 767. The cosine polarity must be positive from 0 to 511 and negative from 512 to 1023. A phase shift by 1 would disturb DcStep operation. Therefore, it is advised to work with the default wave. Please refer chapter 15.2 for an initialization with the default table.

## 14.4 Stall detection in DcStep mode

While DcStep is able to decelerate the motor upon overload, it cannot avoid a stall in every operation situation. Once the motor is blocked, or it becomes decelerated below a motor dependent minimum velocity  where  the  motor  operation  cannot  safely  be  detected  any  more,  the  motor  may  stall  and loose steps. To safely detect a step loss and avoid restarting of the motor, the stop on stall can be enabled (set flag sg\_stop ).  In  this  case VACTUAL becomes set to zero once the motor is stalled. It remains stopped until reading the RAMP\_STAT status flags. The flag event\_stop\_sg shows the active stop  condition.  A  StallGuard2  load  value  also  is  available  during  DcStep  operation.  The  range  of values is limited to 0 to 255, in certain situations up to 511 will be read out. To enable StallGuard, also set VCOOLTHRS to a velocity slightly above VDCMIN or up to VMAX .

Stall detection in this mode may trigger falsely due to resonances when flywheel loads are loosely coupled to the motor axis.

| Parameter          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Range   | Comment                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| vhighfs & vhighchm | These chopper configuration flags in CHOPCONF need to be set for DcStep operation. As soon as VDCMIN becomes exceeded, the chopper becomes switched to fullstepping.                                                                                                                                                                                                                                                                                                                                                  | 0 / 1   | set to 1 for DcStep                                                         |
| TOFF               | DcStep often benefits from an increased off time value in CHOPCONF . Settings >2 should be preferred.                                                                                                                                                                                                                                                                                                                                                                                                                 | 2… 15   | Settings 8…15 do not make any difference to setting 8 for DcStep operation. |
| VDCMIN             | This is the lower threshold for DcStep operation. Below this threshold, the motor operates in normal microstep mode. In DcStep operation, the motor operates at minimum VDCMIN , even when it is completely blocked. Tune together with DC_TIME setting. StealthChop is disabled in DcStep mode above VDCMIN .                                                                                                                                                                                                        | 0… 2^22 | 0: Disable DcStep Set to the lower velocity limit for DcStep operation.     |
| DC_TIME            | This setting controls the reference pulse width for DcStep load measurement. It must be optimized for robust operation with maximum motor torque. A higher value allows higher torque and higher velocity, a lower value allows operation down to a lower velocity as set by VDCMIN . Check best setting under nominal operation conditions, and re-check under extreme operating conditions (e.g. lowest operation supply voltage, highest motor temperature, and highest supply voltage, lowest motor temperature). | 0… 255  | Lower limit is t BLANK (as defined by TBL ) in clock cycles + 1             |
| DC_SG              | This setting controls stall detection in DcStep mode. Increase for higher sensitivity. A stall can be used as an error condition by issuing a hard stop for the motor. Enable sg_stop flag for stopping the motor upon a stall event. This way the motor will be stopped once it stalls.                                                                                                                                                                                                                              | 0… 255  | Set slightly higher than DC_TIME / 16                                       |

## 14.5 Measuring Actual Motor Velocity in DcStep Operation

DcStep has the ability to reduce motor velocity in case the motor becomes slower than the target velocity  due  to  mechanical  load. VACTUAL shows  the  ramp  generator  target  velocity.  It  is  not influenced by DcStep. Measuring DcStep velocity is possible based on the position counter XACTUAL .

Therefore, take two snapshots of the position counter with a known time difference:

<!-- formula-not-decoded -->

## Example:

At  16.0 MHz  clock  frequency,  a  0.954  second  measurement  delay  would  directly  yield  in  the velocity value, a 9.54 ms delay would yield in 1/100 of the actual DcStep velocity.

To grasp the time interval as precisely as possible, snapshot a timer each time the transmission of XACTUAL from the IC starts or ends. The rising edge of NCS for SPI transmission provides the most exact time reference.

## 15 Sine-Wave Look-up Table

The TMC5072 driver provides a programmable look-up table for storing the microstep current wave. It is common to both drivers. As a default, the table is pre-programmed with a sine wave, which is a good  starting  point  for  most  stepper  motors.  Reprogramming  the  table  to  a  motor  specific  wave allows drastically improved microstepping especially with low-cost motors.

## 15.1 User Benefits

Microstepping -

- extremely improved with low-cost motors

Motor

- runs smooth and quiet

Torque

- reduced mechanical resonances yields improved torque

## 15.2 Microstep Table

To minimize required memory and the amount of data to be programmed, only a quarter of the wave becomes stored. The internal microstep table maps the microstep wave from 0° to 90°. It becomes symmetrically  extended  to  360°.  When  reading  out  the  table  the  10-bit  microstep  counter MSCNT addresses the fully extended wave table. The table is stored in an incremental fashion, using each one bit per entry. Therefore only 256 bits ( ofs00 to ofs255 )  are  required to store the quarter wave. These bits are mapped to eight 32-bit registers. Each ofs bit controls the addition of an inclination Wx or Wx +1  when advancing  one step in  the  table.  When Wx is  0,  a  1  bit  in  the  table  at  the  actual microstep position means 'add one' when advancing to the next microstep. As the wave can have a higher inclination than 1, the base inclinations Wx can be programmed to -1, 0, 1, or 2 using up to four flexible programmable segments within the quarter wave. This way even negative inclination can be realized. The four inclination segments are controlled by the position registers X1 to X3 . Inclination segment  0  goes  from  microstep  position  0  to X1 -1  and  its  base  inclination  is  controlled  by W0 , segment 1 goes from X1 to X2 -1 with its base inclination controlled by W1 , etc.

When modifying the wave, care must be taken to ensure a smooth and symmetrical zero transition when the quarter wave becomes expanded to a full wave. The maximum resulting swing of the wave should be adjusted to a range of -248 to 248, in  order  to  give  the  best  possible  resolution  while leaving headroom for the hysteresis-based chopper to add an offset.

Figure 15.1 LUT programming example

<!-- image -->

When the microstep sequencer advances within the table, it calculates the actual current values for the motor coils with each microstep and stores them to the registers CUR\_A and CUR\_B . However, the incremental coding requires an absolute initialization, especially when the microstep table becomes modified. Therefore CUR\_A and CUR\_B become initialized whenever MSCNT passes zero.

Two registers control the starting values of the tables:

- -As the starting value at zero is not necessarily 0 (it might be 1 or 2), it can be programmed into the starting point register START\_SIN .
- -In the same way, the start of the second wave for the second motor coil needs to be stored in START\_SIN90 . This register stores the resulting table entry for a phase shift of 90° for a 2phase motor.

## Hint

Refer  chapter  6.4  for  the  register  set  and  for  the  default  table  function  stored  in  the  drivers.  The default table is a good base for realizing an own table.

The TMC5072-EVAL comes with a calculation tool for own waves.

Initialization example for the default microstep table:

```
MSLUT[0] = %10101010101010101011010101010100 = 0xAAAAB554 MSLUT[1] = %01001010100101010101010010101010 = 0x4A9554AA MSLUT[2] = %00100100010010010010100100101001 = 0x24492929 MSLUT[3] = %00010000000100000100001000100010 = 0x10104222 MSLUT[4] = %11111011111111111111111111111111 = 0xFBFFFFFF MSLUT[5] = %10110101101110110111011101111101 = 0xB5BB777D MSLUT[6] = %01001001001010010101010101010110 = 0x49295556
```

MSLUT[7] = %00000000010000000100001000100010 = 0x00404222 MSLUTSEL = 0xFFFF8056: X1 =128, X2 =255, X3 =255 W3 =%01, W2 =%01, W1 =%01, W0 =%10 MSLUTSTART = 0x00F70000: START\_SIN\_0 = 0, START\_SIN90 = 247

## 16 Step/Dir Interface

The STEP and DIR inputs provide a simple, standard interface compatible with many existing motion controllers.  The  MicroPlyer  STEP  pulse  interpolator  brings  the  smooth  motor  operation  of  highresolution microstepping to applications originally designed for coarser stepping. In case an external step source is used, the complete integrated motion controller can be switched off for one or both motors at any time. The only motion controller registers remaining active in this case are the current settings in register IHOLD\_IRUN .

DcStep  cannot  be  used  in  this  mode,  as  the  driver  has  no  means  to  feedback  taken  steps  to  the external motion controller!

## 16.1 Timing

Figure 16.1 shows the timing parameters for the STEP and DIR signals, and the table below gives their specifications. When the DEDGE mode bit in the DRVCTRL register is set, both edges of STEP are active. If DEDGE is cleared, only rising edges are active. STEP and DIR are sampled and synchronized to the system clock. An internal analog filter removes glitches on the signals, such as those caused by long PCB traces. If the signal source is far from the chip, and especially if the signals are carried on cables, the signals should be filtered or differentially transmitted.

<!-- image -->

Figure 16.1 STEP and DIR timing, Input pin filter

| STEP and DIR interface timing                      | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|----------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                          | Symbol                                     | Conditions                                 | Min                                        | Typ                                        | Max                                        | Unit                                       |
| step frequency (at maximum microstep resolution)   | f STEP                                     | dedge =0                                   |                                            |                                            | ½ f CLK                                    |                                            |
| step frequency (at maximum microstep resolution)   | f STEP                                     | dedge =1                                   |                                            |                                            | ¼ f CLK                                    |                                            |
| fullstep frequency                                 | f FS                                       |                                            |                                            |                                            | f CLK /512                                 |                                            |
| STEP input low time *)                             | t SL                                       |                                            | max(t FILTSD , t CLK +20)                  |                                            |                                            | ns                                         |
| STEP input high time *)                            | t SH                                       |                                            | max(t FILTSD , t CLK +20)                  |                                            |                                            | ns                                         |
| DIR to STEP setup time                             | t DSU                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| DIR after STEP hold time                           | t DSH                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| STEP and DIR spike filtering time *)               | t FILTSD                                   | rising and falling edge                    | 36                                         | 60                                         | 85                                         | ns                                         |
| STEP and DIR sampling relative to rising CLK input | t SDCLKHI                                  | before rising edge of CLK input            |                                            | t FILTSD                                   |                                            | ns                                         |

- *) These values are valid with full input logic level swing, only. Asymmetric logic levels will increase filtering delay t FILTSD, due to an internal input RC filter.

## 16.2 Changing Resolution

Sometimes operation of a motor in reduced microstep resolution is desired, to stay compatible to an older, less performing driver, or, when using motion controllers with limited frequency capabilities for the  STEP/DIR  interface.  The  internal  microstep  table  uses  1024  sine  wave  entries  to  generate  the wave. The step width taken within the table depends on the microstep resolution setting. Depending on  the  DIR  input,  the  microstep  counter  is  increased  (DIR=0)  or  decreased  (DIR=1)  with  each  STEP pulse  by  the  step  width.  In  principle,  the  microstep  resolution  can  be  changed  at  any  time.  The microstep  resolution  determines  the  increment  respectively  the  decrement,  the  TMC5072  uses  for advancing in the microstep table. At maximum resolution, it advances one step for each step pulse. At half  resolution,  it  advances  two  steps  and  so  on.  This  way,  a  change  of  resolution  is  possible transparently at each time.

## 16.2.1 Working with Half- and Fullstep Resolution

Fullstepping is desirable in some applications, where maximum torque at maximum velocity with a given motor is desired. Especially at low microstep resolutions like full- or halfstepping, the absolute current values and thus the absolute positions in the table are important for best motor performance. Thus, a software which uses resolution switching to get maximum torque and velocity from the drive, should switch the resolution at or near certain positions, as shown in the following table.

Table 16.1 Optimum position sequence for half- and full stepping

| Step position   |   MSCNT value | current coil A   | current coil B   |
|-----------------|---------------|------------------|------------------|
| half step 0     |             0 | 0%               | 100%             |
| full step 0     |           128 | 70.7%            | 70.7%            |
| half step 1     |           256 | 100%             | 0%               |
| full step 1     |           384 | 70.7%            | -70.7%           |
| half step 2     |           512 | 0%               | -100%            |
| full step 2     |           640 | -70.7%           | -70.7%           |
| half step 3     |           768 | -100%            | 0%               |
| full step 3     |           896 | -70.7%           | 70.7%            |

## 16.3 MicroPlyer Step Interpolator and Stand Still Detection

For  each  active  edge  on  STEP,  MicroPlyer  produces  16  microsteps  at  256x  resolution,  as  shown  in Figure 16.2.

Enable MicroPlyer by setting the intpol16 bit in the CHOPCONF register. It only supports input at 16x setting, which it transforms into 256x resolution. Operation is only possible in STEP/DIR mode.

The step rate for the 16 microsteps is determined by measuring the time interval of the previous step period and dividing it into 16 equal parts. The maximum time between two microsteps corresponds to 2 20  (roughly one million system clock cycles), for an even distribution of 256 microsteps. At 16 MHz system  clock  frequency,  this  results  in  a  minimum  step  input  frequency  of  16 Hz  for  MicroPlyer operation (one fullstep per second). A lower step rate causes the STST bit to be set, which indicates a standstill event. At that frequency, microsteps occur at a rate of (system clock frequency)/2 16  ~ 256 Hz. When a stand still is detected, the driver automatically switches the motor to holding current IHOLD .

## Attention

MicroPlyer only works well with a stable STEP frequency. Do not use the dedge option if the STEP signal does not have a 50% duty cycle.

Figure 16.2 MicroPlyer microstep interpolation with rising STEP frequency

<!-- image -->

In Figure 16.2, the first STEP cycle is long enough to set the standstill bit stst . This bit is cleared on the next STEP active edge. Then, the external STEP frequency increases. After one cycle at the higher rate MicroPlyer adapts the interpolated microstep rate to the higher frequency. During the last cycle at the  slower  rate,  MicroPlyer  did  not  generate  all  16  microsteps,  so  there  is  a  small  jump  in  motor angle between the first and second cycles at the higher rate.

## 17 ABN Incremental Encoder Interface

The  TMC5072  is  equipped  with  two  incremental  encoder  interfaces  for  ABN  encoders.  The  encoder inputs are multiplexed with other signals to keep the pin count of the device low. The basic selection of the peripheral configuration is set by the register GCONF . The use of the N channel is optional, as some applications might use a reference switch or stall detection rather than an encoder N channel for  position  referencing.  The  encoders  give  positions  via  digital  incremental  quadrature  signals (usually named A and B) and a clear signal (usually named N for null or Z for zero).

## N SIGNAL

The N signal can be used to clear the position counter or to take a snapshot. To continuously monitor the N channel and trigger clearing of the encoder position or latching of the position, where the N channel event has been detected, set the flag clr\_cont . Alternatively it is possible to react to the next encoder  N  channel  event  only,  and  automatically  disable  the  clearing  or  latching  of  the  encoder position after the first N signal event (flag clr\_once ). This might be desired because the encoder gives this signal once for each revolution.

Some encoders require a validation of the N signal by a certain configuration of A and B polarity. This can be controlled by pol\_A and pol\_B flags in the ENCMODE register. For example, when both pol\_A and pol\_B are set, an active N-event is only accepted during a high polarity of both, A and B channel.

For  clearing  the  encoder  position ENC\_POS with  the  next  active  N  event  set clear\_on\_n = 1  and clr\_once = 1 or clr\_cont = 1.

Figure 17.1 Outline of ABN signals of an incremental encoder

<!-- image -->

## THE ENCODER CONSTANT ENC\_CONST

The encoder constant ENC\_CONST is added to or subtracted from the encoder counter on each polarity change of the quadrature signals AB of the incremental encoder. The encoder constant ENC\_CONST represents a signed fixed-point number (16.16) to facilitate the generic adaption between motors and encoders. In decimal mode, the lower 16 bits represent the decimals as number between 0 and 9999. For  stepper  motors  equipped  with  incremental  encoders  this  fixed-point  representation  allows comfortable parameterization. Additionally, mechanical gearing can easily be considered. Negating the sign of ENC\_CONST allows inversion of the counting direction to match motor and encoder direction. In  decimal  mode,  a  negative  encoder  constant  is  calculated  using  the  following  equation:  (2^16(FACTOR+1)).(10000-DECIMALS).

## Examples:

- -Encoder factor of 1.0: ENC\_CONST = 0x0001.0x0000 = FACTOR.FRACTION
- -Encoder factor of -1.0: ENC\_CONST = 0xFFFF.0x0000. This is the two's complement of 0x00010000. It equals (2^16-(FACTOR+1)).(2^16-FRACTION)
- -Decimal mode encoder factor 25.6: 00025.6000 = 0x0019.0x1770 = FACTOR.DECIMALS (DECIMALS=first 4 digits of fraction)

- -Decimal mode encoder factor -25.6: (2^16-(25+1)).(10000-6000) = (2^16-26).(4000) = 0xFFE6.0x0FA0.

## THE ENCODER COUNTER X\_ENC

The encoder counter X\_ENC holds the current encoder position ready for read out. Different modes concerning handling of the signals A, B, and N take into account active low and active high signals found  with  different  types  of  encoders.  For  more  details,  please  refer  to  the  register  mapping  in section 6.3.

## THE REGISTER ENC\_STATUS

The  register ENC\_STATUS holds  the  status  concerning  the  event  of  an  encoder  clear  upon  an  N channel signals. The register ENC\_LATCH stores the actual encoder position on an N signal event.

## Checking for encoder latched event:

Option 1: Check ENC\_LATCH for change. It starts up with 0 and will show the encoder count where the N-event occurred, after starting motion for the first time. For consecutive rotations, it will show increased / decreased values and thus always changes.

Option  2:  Check  for  the  interrupt  output  active  and  read  the  flag  only  following  active  interrupt output.

Please do not use the ENC\_STATUS event flag for active, high-frequent polling, as in the event of a parallel read event and encoder N event, the flag will be cleared at the same moment, and will be missed.

## 17.1 Encoder Timing

The encoder inputs use analog and digital filtering to ensure reliable operation even with increased cable length. The maximum continuous counting rate is limited by input filtering to 2/3 of fCLK.

| Encoder interface timing   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|----------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                  | Symbol                                     | Conditions                                 | Min                                        | Typ                                        | Max                                        | Unit                                       |
| Encoder counting frequency | f CNT                                      |                                            |                                            | <2/3 f CLK                                 | f CLK                                      |                                            |
| A/B/N input low time       | t ABNL                                     |                                            | 3 t CLK +20                                |                                            |                                            | ns                                         |
| A/B/N input high time      | t ABNH                                     |                                            | 3 t CLK +20                                |                                            |                                            | ns                                         |
| A/B/N spike filtering time | t FILTABN                                  | Rising and falling edge                    |                                            | 3 t CLK                                    |                                            |                                            |

## 17.2 Setting the Encoder to Match Motor Resolution

Encoder example settings for motor parameters: USC=256 µsteps, 200 fullstep motor Factor = FSC*USC / encoder resolution

| ENCODER EXAMPLE SETTINGS FOR A 200 FULLSTEP MOTOR WITH 256 MICROSTEPS   | ENCODER EXAMPLE SETTINGS FOR A 200 FULLSTEP MOTOR WITH 256 MICROSTEPS   | ENCODER EXAMPLE SETTINGS FOR A 200 FULLSTEP MOTOR WITH 256 MICROSTEPS   |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Encoder resolution                                                      | Required encoder factor                                                 | Comment                                                                 |
| 200                                                                     | 256                                                                     |                                                                         |
| 360                                                                     | 142.2222 = 9320675.5555 / 2^16 = 1422222.2222 / 10000                   | No exact match possible!                                                |
| 500                                                                     | 102.4 = 6710886.4 / 2^16 = 1024000 / 10000                              | Exact match with decimal setting                                        |
| 1000                                                                    | 51.2                                                                    | Exact match with decimal setting                                        |
| 1024                                                                    | 50                                                                      |                                                                         |
| 4000                                                                    | 12.8                                                                    | Exact match with decimal setting                                        |
| 4096                                                                    | 12.5                                                                    |                                                                         |
| 16384                                                                   | 3.125                                                                   |                                                                         |

## Example:

The encoder constant register shall be programmed to 51.2 in decimal mode. Therefore, set 𝐸𝑁𝐶\_𝐶𝑂𝑁𝑆𝑇 = 51 ∗ 2 16 +0.2 ∗ 10000

## 17.3 Closing the Loop

Depending on the application, an encoder can be used for different purposes. Medical applications often require an additional and independent monitoring to detect hard or soft failure. Upon failure, the machine can be stopped and restarted manually. Less critical applications may use the encoder to detect failure, stop the motors upon step loss and restart automatically. A different use of the encoder allows increased positioning precision by positioning directly  to encoder positions. The application can modify target positions based on the deviation, or even regularly update the actual position with the  encoder  position.  To  realize  a  directly  encoder-based  commutation,  TRINAMIC  offers  the  new motion controller TMC4361A.

## 18 Quick Configuration Guide

This  guide  is  meant  as  a  practical  tool  to  come  to  a  first  configuration  and  do  a  minimum  set  of measurements and decisions for tuning the driver. It does not cover all advanced functionalities but concentrates on the basic function set to make a motor run smoothly. Once the motor runs, you may decide to explore  additional features,  e.g.,  freewheeling,  and  further  functionality  in  more  detail.  A current probe on one motor coil is a good aid to find the best settings, but it is not a must.

## CURRENT SETTING AND FIRST STEPS WITH STEALTHCHOP

Figure 18.1 Current setting and first steps with StealthChop

<!-- image -->

## TUNING STEALTHCHOP AND SPREADCYCLE

Figure 18.2 Tuning StealthChop and SpreadCycle

<!-- image -->

## MOVING THE MOTOR USING THE MOTION CONTROLLER

Figure 18.3 Moving the motor using the motion controller

<!-- image -->

## ENABLING COOLSTEP (ONLY IN COMBINATION WITH SPREADCYCLE)

Figure 18.4 Enabling CoolStep (only in combination with SpreadCycle)

<!-- image -->

## SETTING UP DCSTEP

Figure 18.5 Setting up DcStep

<!-- image -->

## 19 Getting Started

Please refer to the TMC5072 evaluation board to allow a quick start with the device, and in order to allow interactive tuning of the device setup in your application. Chapter 18 will guide you through the process of correctly setting up all registers.

## 19.1 Initialization Examples

Initialization SPI datagram example sequence to enable driver 1 for step and direction operation and initialize the chopper for a 2-phase motor:

```
SPI send: 0xEC000100C5;    // CHOPCONF: TOFF=5, HSTRT=4, HEND=1, TBL=2, CHM=0 (SpreadCycle) SPI send: 0xB000061F05;  // IHOLD_IRUN: IHOLD=5, IRUN=31 (max. current), IHOLDDELAY=6 SPI send: 0xAC00002710;  // TZEROWAIT=10000 SPI send: 0x8000000006;  // GCONF=6: Switch both drivers to step and direction operation
```

SPI datagram example sequence to enable and initialize driver 1 for SpreadCycle operation combined with StealthChop at low velocities. Ramp generator 1 moves the motor in velocity mode. Additional read access to the position register:

```
SPI send: 0x8000000008;  // GCONF=8: Enable PP and INT outputs SPI send: 0xEC000100C5;  // CHOPCONF: TOFF=5, HSTRT=4, HEND=1, TBL=2, CHM=0 (SpreadCycle) SPI send: 0xB000011F05;  // IHOLD_IRUN: IHOLD=5, IRUN=31 (max. current), IHOLDDELAY=1 SPI send: 0x90000401C8;  // PWM_CONF: AUTO=1, 2/1024 Fclk, Switch amplitude limit=200, Grad=1 SPI send: 0xB200061A80;  // VHIGH=400 000: Set VHIGH to a high value to allow StealthChop SPI send: 0xB100007530;  // VCOOLTHRS=30000: Set upper limit for StealthChop to about 30RPM SPI send: 0xA600001388;  // AMAX=5000 SPI send: 0xA700004E20;  // VMAX=20000 SPI send: 0xA000000001;  // RAMPMODE=1 (positive velocity) // Now motor 1 should start rotating SPI send: 0x2100000000;  // Query X Actual -The next read access delivers X Actual SPI read; // Read X Actual
```

Initialization SPI datagram example sequence to enable and initialize the motion controller and then move one rotation (51200 microsteps) using the ramp generator.

```
SPI send: 0xA4000003E8; // A1 = 1 000 First acceleration SPI send: 0xA50000C350; // V1 = 50 000 Acceleration threshold velocity V1 SPI send: 0xA6000001F4; // AMAX = 500 Acceleration above V1 SPI send: 0xA7000304D0; // VMAX = 200 000 SPI send: 0xA8000002BC; // DMAX = 700 Deceleration above V1 SPI send: 0xAA00000578; // D1 = 1400 Deceleration below V1 SPI send: 0xAB0000000A; // VSTOP = 10 Stop velocity (Near to zero) SPI send: 0xA000000000; // RAMPMODE = 0 (Target position move) // Ready to move! SPI send: 0xADFFFF3800; // XTARGET = -51200 (Move one rotation left (200*256 microsteps))
```

For UART based operation it is important to make sure that the CRC byte is correct. The following example shows initialization for a TMC5072 with node address 1 (NEXTADDR pin high). It programs driver 1 to SpreadCycle mode and ramp generator 1 to move the motor in velocity mode and read accesses the position and actual velocity registers:

```
UART write: 0x05 0x01 0xEC 0x00 0x01 0x00 0xC5 0xD3;   // TOFF=5, HEND=1, HSTR=4, // TBL=2, MRES=0, CHM=0 UART write: 0x05 0x01 0xB0 0x00 0x01 0x14 0x05 0x57; // IHOLD=5, IRUN=20, IHOLDDELAY=1 UART write: 0x05 0x01 0xA6 0x00 0x00 0x13 0x88 0xB4;   // AMAX=5000
```

## Hint

Tune the configuration parameters for your motor and application for optimum performance.

UART write: 0x05 0x01 0xA0 0x00 0x00 0x00 0x01 0xA3;   // RAMPMODE=1 (positive velocity)

```
UART write: 0x05 0x01 0xA7 0x00 0x00 0x4E 0x20 0x85;   // VMAX=20000 // Now motor 1 should start rotating UART write: 0x05 0x01 0x21 0x6B; // Query XACTUAL UART read 8 bytes; UART write: 0x05 0x01 0x22 0x25; // Query VACTUAL UART read 8 bytes;
```

## 20 Power-Up Reset

The chip is loaded with default values during power-up via its internal power-on reset. It will also reset to  power-up defaults in case any of the supply voltages monitored by internal reset  circuitry (VSA, +5VOUT or VCC\_IO) falls below the undervoltage threshold. VCC is not monitored. Therefore, VCC must not be lost during operation of the chip. In case of a microcontroller software re-boot, disable the driver ( TOFF =0), re-initialize all registers used by the software and stop any motion in progress by slowing down the ramp generator. A hardware reset requires cycling VCC\_IO while keeping all digital inputs at a low level at the same time. Actively drive VCC\_IO to a low level to ensure that it falls below the lower reset threshold. Current consumed from VCC\_IO is low and therefore it has simple driving requirements. Due to the input protection diodes not allowing the digital inputs to rise above VCC\_IO level, any active high input would hinder VCC\_IO from going down.

In case, VCC becomes supplied by an external source, make sure that VCC is at a stable value above the  lower  operation  limit  once  the  reset  ends.  This  normally  is  satisfied  when  generating  a  3.3V VCC\_IO from the +5V supply supplying the VCC pin, because it will then come up with a certain delay.

## 21 Clock Oscillator and Clock Input

The clock is the timing reference for all functions: the chopper, the velocity, the acceleration control, etc.  Many  parameters  are  scaled  with  the  clock  frequency.  Thus,  a  precise  reference  allows  a  more deterministic  result.  The  on-chip  clock  oscillator  provides  timing  in  case  no  external  clock  is  easily available.

## 21.1 Using the Internal Clock

Directly tie the CLK input to GND near to the TMC5072 if the internal clock oscillator is to be used. The internal clock can be calibrated by driving the ramp generator at a certain velocity setting. Reading out position values via the interface and comparing the resulting velocity to the remote masters' clock gives a time reference. A similar procedure also is described in 14.5. This allows scaling acceleration and  velocity  settings  as  a  result.  The  temperature  dependency  and  ageing  of  the  internal  clock  is comparatively low.

## IMPLEMENTING FREQUENCY DEPENDENT SCALING

Frequency  dependent  scaling  allows  using  the  internal  clock  for  a  motion  control  application.  The time reference of the external microcontroller is used to calculate a scaler for all velocity settings. The following steps are required:

1. You may leave the motor driver disabled during the calibration.
2. Start  motor  in  velocity  mode,  with VMAX =10000  and AMAX =60000  (for  quick  acceleration).  The acceleration phase is ended after a few ms.
3. Read out XACTUAL twice, at time point t1 and time point t2, e.g., 100ms later (dt=0.1s). The time difference between both read accesses shall be exactly timed by the external microcontroller.
4. Stop the motion ramp by setting VMAX =0.
5. The number of steps done in between of t1 and t2 now can be used to calculate the factor
6. 𝑓 = 𝑉𝑀𝐴𝑋  ∗  𝑑𝑡 𝑋𝐴𝐶𝑇𝑈𝐴𝐿(𝑡2) - 𝑋𝐴𝐶𝑇𝑈𝐴𝐿(𝑡1) = 1000 𝑋𝐴𝐶𝑇𝑈𝐴𝐿(𝑡2) - 𝑋𝐴𝐶𝑇𝑈𝐴𝐿(𝑡1)
6. Now multiply each velocity value with this factor f, to normalize the velocity to steps per second. At a nominal value of the internal clock frequency, 780 steps will be done in 100ms.

## Hint

In case well defined velocity settings and precise motor chopper operation are desired, it is supposed to work with an external clock source.

## 21.2 Using an External Clock

When an external clock is available, a frequency of 10 MHz to 16 MHz is recommended for optimum performance. The duty cycle of the clock signal is uncritical, as long as minimum high or low input

time for the pin is satisfied (refer to electrical characteristics). Up to 18 MHz can be used, when the clock duty cycle is 50%. Make sure, that the clock source supplies clean CMOS output logic levels and steep slopes when using a high clock frequency. The external clock input is enabled with the first positive polarity seen on the CLK input.

## Attention

Switching off the external clock frequency prevents the driver from operating normally. Therefore, be careful to switch off the motor drivers before switching off the clock (e.g., using the enable input), because otherwise the chopper would stop, and the motor current level could rise uncontrolled. The short to GND detection stays active even without clock, if enabled.

## 21.3 Considerations on the Frequency

A higher frequency allows faster step rates, faster SPI operation and higher chopper frequencies. On the other hand, it may cause more electromagnetic emission of the system and causes more power dissipation in the TMC5072 digital core and voltage regulator. Generally, a frequency of 10 MHz to 16 MHz  should  be  sufficient  for  most  applications.  For  reduced  requirements  concerning  the  motor dynamics, a clock frequency of down to 8 MHz can be considered.

## 22 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                          | Symbol       | Min   | Max        | Unit   |
|--------------------------------------------------------------------|--------------|-------|------------|--------|
| Supply voltage operating with inductive load                       | V VS , V VSA | -0.5  | 27         | V      |
| Supply and bridge voltage max. *)                                  | V VS         | -0.5  | 28         | V      |
| I/O supply voltage                                                 | V VIO        | -0.5  | 5.5        | V      |
| digital VCC supply voltage (if not supplied by internal regulator) | V VCC        | -0.5  | 5.5        | V      |
| Logic input voltage                                                | V I          | -0.5  | V VIO +0.5 | V      |
| Maximum current to / from digital pins and analog low voltage I/Os | I IO         |       | +/-10      | mA     |
| 5V regulator output current (internal plus external load)          | I 5VOUT      |       | 50         | mA     |
| 5V regulator continuous power dissipation (V VM -5V) * I 5VOUT     | P 5VOUT      |       | 1          | W      |
| Power bridge repetitive output current                             | I Ox         |       | 2.0        | A      |
| Junction temperature                                               | T J          | -50   | 150        | °C     |
| Storage temperature                                                | T STG        | -55   | 150        | °C     |
| ESD-Protection for interface pins (Human body model, HBM)          | V ESDAP      |       | 4          | kV     |
| ESD-Protection for handling (Human body model, HBM)                | V ESD        |       | 1          | kV     |

## 23 Electrical Characteristics

## 23.1 Operational Range

| Parameter                                                                                                                                         | Symbol   | Min   |    Max | Unit   |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------|--------|--------|
| Junction temperature                                                                                                                              | T J      | -40   | 125    | °C     |
| Supply voltage (using internal +5V regulator)                                                                                                     | V VSA    | 5.5   |  26    | V      |
| Supply voltage (internal +5V regulator bridged: V VCC =V VSA )                                                                                    | V VSA    | 4.7   |   5.4  | V      |
| Motor Driver Supply voltage                                                                                                                       | V VS     | 4.5   |  26    | V      |
| I/O supply voltage                                                                                                                                | V VIO    | 3.00  |   5.25 | V      |
| VCC voltage when using optional external source (supplies digital logic and charge pump)                                                          | V VCC    | 4.6   |   5.25 | V      |
| RMS motor coil current per coil (value for design guideline)                                                                                      | I RMS    |       |   0.8  | A      |
| Peak output current per motor coil output (sine wave peak)                                                                                        | I Ox     |       |   1.1  | A      |
| Peak output current per motor coil output (sine wave peak) Limit T J ≤ 105°C , e.g. for 100ms short time acceleration phase below 50% duty cycle. | I Ox     |       |   1.5  | A      |

## 23.2 DC Characteristics and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| Power supply current                                         | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V           | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V   |
|--------------------------------------------------------------|-----------------------------------|-------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Parameter                                                    | Symbol                            | Conditions                                | Min                               | Typ                               | Max                               | Unit                              |
| Total supply current, driver disabled I VS + I VSA + I VCC   | I S                               | f CLK =16MHz                              |                                   | 25                                | 40                                | mA                                |
| Total supply current, operating, I VS + I VSA + I VCC        | I S                               | f CLK =16MHz, 40kHz chopper               |                                   | 28                                |                                   | mA                                |
| Static supply current                                        | I VS0                             | f CLK =0Hz                                | 3                                 | 4.5                               | 7                                 | mA                                |
| Supply current, driver disabled, dependency on CLK frequency | I VSX                             | f CLK variable, additional to I VS0       |                                   | 1.3                               |                                   | mA/MHz                            |
| Internal current consumption from 5V supply on VCC pin       | I VCC                             | f CLK =16MHz, 40kHz chopper               |                                   | 25                                | 40                                | mA                                |
| IO supply current                                            | I VIO                             | no load on outputs, inputs at V IO or GND |                                   | 15                                | 30                                | µA                                |

| Motor driver section         | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   |
|------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                    | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| RDS ON lowside MOSFET        | R ONL                                         | measure at 100mA, 25°C, static state          |                                               | 0.4                                           | 0.5                                           | Ω                                             |
| RDS ON highside MOSFET       | R ONH                                         | measure at 100mA, 25°C, static state          |                                               | 0.5                                           | 0.6                                           | Ω                                             |
| slope, MOSFET turning on     | t SLPON                                       | measured at 700mA load current                | 50                                            | 120                                           | 250                                           | ns                                            |
| slope, MOSFET turning off    | t SLPOFF                                      | measured at 700mA load current                | 50                                            | 220                                           | 450                                           | ns                                            |
| Current sourcing, driver off | I OIDLE                                       | O XX pulled to GND                            | 120                                           | 180                                           | 250                                           | µA                                            |

| Charge pump                                              | DC-Characteristics   | DC-Characteristics                  | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------------------------------|----------------------|-------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                | Symbol               | Conditions                          | Min                  | Typ                  | Max                  | Unit                 |
| Charge pump output voltage                               | V VCP -V VS          | operating, typical f chop <40kHz    | 4.0                  | V 5VOUT - 0.4        | V 5VOUT              | V                    |
| Charge pump voltage threshold for undervoltage detection | V VCP -V VS          | using internal 5V regulator voltage | 3.1                  | 3.6                  | 3.9                  | V                    |
| Charge pump frequency                                    | f CP                 |                                     |                      | 1/16 f CLKOSC        |                      |                      |

| Linear regulator                                            | DC-Characteristics   | DC-Characteristics              | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-------------------------------------------------------------|----------------------|---------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                   | Symbol               | Conditions                      | Min                  | Typ                  | Max                  | Unit                 |
| Output voltage                                              | V 5VOUT              | I 5VOUT = 0mA T J = 25°C        | 4.75                 | 5.0                  | 5.25                 | V                    |
| Output resistance                                           | R 5VOUT              | Static load                     |                      | 3                    |                      |                     |
| Deviation of output voltage over the full temperature range | V 5VOUT(DEV)         | I 5VOUT = 30mA T J = full range |                      | 30                   | 100                  | mV                   |

| Clock oscillator and input                                               | Timing-Characteristics   | Timing-Characteristics              | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   |
|--------------------------------------------------------------------------|--------------------------|-------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                                                                | Symbol                   | Conditions                          | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency                                               | f CLKOSC                 | t J =-50°C                          | 9                        | 12.4                     |                          | MHz                      |
| Clock oscillator frequency                                               | f CLKOSC                 | t J =50°C                           | 10.1                     | 13.2                     | 17.2                     | MHz                      |
| Clock oscillator frequency                                               | f CLKOSC                 | t J =150°C                          |                          | 13.4                     | 18                       | MHz                      |
| External clock frequency (operating)                                     | f CLK                    |                                     | 4                        | 10-16                    | 18                       | MHz                      |
| External clock high / low level time                                     | t CLKL / t CLKH          | CLK driven to 0.1 V VIO / 0.9 V VIO | 10                       |                          |                          | ns                       |
| External clock first cycle triggering switching to external clock source | t CLK1                   | CLK driven high                     | 30                       | 25                       |                          | ns                       |

| Detector levels                                                     | DC-Characteristics   | DC-Characteristics                   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|---------------------------------------------------------------------|----------------------|--------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                           | Symbol               | Conditions                           | Min                  | Typ                  | Max                  | Unit                 |
| V VSA undervoltage threshold for RESET                              | V UV_VSA             | V VS rising                          | 3.8                  | 4.2                  | 4.6                  | V                    |
| V 5VOUT undervoltage threshold for RESET                            | V UV_5VOUT           | V 5VOUT rising                       |                      | 3.5                  |                      | V                    |
| V VCC_IO undervoltage threshold for RESET                           | V UV_VIO             | V VCC_IO rising                      | 1.9                  | 2.55                 | 3.0                  | V                    |
| V VCC_IO undervoltage detector hysteresis                           | V UV_VIOHYST         |                                      | 0.1                  | 0.3                  | 0.5                  | V                    |
| Short to GND detector threshold (V VSP - V Ox )                     | V OS2G               |                                      | 1.5                  | 2.2                  | 3                    | V                    |
| Short to GND detector delay (high side switch on to short detected) | t S2G                | High side output clamped to V SP -3V | 0.8                  | 1.3                  | 2                    | µs                   |
| Overtemperature prewarning                                          | t OTPW               | Temperature rising                   | 100                  | 120                  | 140                  | °C                   |
| Overtemperature shutdown                                            | t OT                 | Temperature rising                   | 135                  | 150                  | 170                  | °C                   |

| Sense resistor voltage levels                                                                 | DC-Characteristics   | DC-Characteristics                                   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                                                     | Symbol               | Conditions                                           | Min                  | Typ                  | Max                  | Unit                 |
| Sense input peak threshold voltage (low sensitivity)                                          | V SRTL               | vsense =0 csactual =31 sin_x =248 Hyst.=0; I BRxy =0 |                      | 320                  |                      | mV                   |
| sense input peak threshold voltage (high sensitivity)                                         | V SRTH               | vsense =1 csactual =31 sin_x =248 Hyst.=0; I BRxy =0 |                      | 180                  |                      | mV                   |
| Sense input tolerance / motor current full-scale tolerance                                    | I COIL               | vsense =0                                            | -5                   |                      | +5                   | %                    |
| Internal resistance from pin BRxy to internal sense comparator (additional to sense resistor) | R BRxy               |                                                      |                      | 20                   |                      | mΩ                   |

| Digital logic levels             | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                        | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Input voltage low level          | V INLO               |                      | -0.3                 |                      | 0.3 V VIO            | V                    |
| Input voltage high level         | V INHI               |                      | 0.7 V VIO            |                      | V VIO +0.3           | V                    |
| Input Schmitt trigger hysteresis | V INHYST             |                      |                      | 0.12 V VIO           |                      | V                    |
| Output voltage low level         | V OUTLO              | I OUTLO = 2mA        |                      |                      | 0.2                  | V                    |
| Output voltage high level        | V OUTHI              | I OUTHI = -2mA       | V VIO -0.2           |                      |                      | V                    |
| Input leakage current            | I ILEAK              |                      | -10                  |                      | 10                   | µA                   |
| Digital pin capacitance          | C                    |                      |                      | 3.5                  |                      | pF                   |

## 23.3 Thermal Characteristics

The following table shall give an idea on the thermal resistance of the QFN-48 package. The thermal resistance for a four-layer board will provide a good idea on a typical application.  The single layer board example is kind of a worst-case condition, as the typical application will require a 4-layer board. Actual thermal characteristics will depend on the PCB layout, PCB type and PCB size.

A thermal resistance of 23°C/W for a typical board means, that the package is capable of continuously dissipating 4W at an ambient temperature of 25°C with the die temperature staying below 125°C.

| Parameter                                                                       | Symbol   | Conditions                                                                                                                                                                                                                                                                                        | Typ     | Unit   |
|---------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------|
| Typical power dissipation One motor active, one motor in standby at low current | P D      | One motor 1.00A RMS 115°C (125°C) One motor 0.71A RMS 85°C (93°C) Surface temperature at package center (peak surface temperature), board 55mm x 85mm, 25°C environment StealthChop or SpreadCycle, sinewave, 40 or 20kHz chopper, 24V, 16MHz, internal supply for VCC Motors: QSH4218-035-10-027 | 3.7 2.4 | W W    |
| Typical power dissipation Two motors active                                     | P D      | Two motors 0.71A RMS 113°C (119°C) Two motors 0.35A RMS 64°C (68°C)                                                                                                                                                                                                                               | 3.7 1.4 | W W    |
| Thermal resistance junction to ambient on a single layer board                  | R TJA    | Single signal layer board (1s) as defined in JEDEC EIA JESD51-3 (FR4, 76.2mm x 114.3mm, d=1.6mm)                                                                                                                                                                                                  | 80      | K/W    |
| Thermal resistance junction to ambient on a multilayer board                    | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 76.2mm x 114.3mm, d=1.6mm)                                                                                                                                                              | 23      | K/W    |
| Thermal resistance junction to ambient on a multilayer board with air flow      | R TMJA1  | Identical to R TMJA , but with air flow 1m/s                                                                                                                                                                                                                                                      | 20      | K/W    |
| Thermal resistance junction to board                                            | R TJB    | PCB temperature measured within 1mm distance to the package                                                                                                                                                                                                                                       | 10      | K/W    |
| Thermal resistance junction to case                                             | R TJC    | Junction temperature to heat slug of package                                                                                                                                                                                                                                                      | 3       | K/W    |

The thermal resistance in an actual layout can be tested by checking for the heat up caused by the standby power consumption of the chip. When no motor is attached, all power seen on the power supply is dissipated within the chip.

Note

A spreadsheet for calculating TMC5072 power dissipation is available on www.trinamic.com.

## 24 Layout Considerations

## 24.1 Exposed Die Pad

The TMC5072 uses its die attach pad to dissipate heat from the drivers and the linear regulator to the board.  For  best  electrical  and  thermal  performance,  use  a  reasonable  amount  of  solid,  thermally conducting vias between the die attach pad and the ground plane. The printed circuit board should have a solid ground plane spreading heat into the board and providing for a stable GND reference.

## 24.2 Wiring GND

All signals of the TMC5072 are referenced to their respective GND. Directly connect all GND pins under the TMC5072 to a common ground area (GND, GNDP, GNDA and die attach pad). The GND plane right below the die attach pad should be treated as a virtual star point. For thermal reasons, the PCB top layer shall be connected to a large PCB GND plane spreading heat within the PCB.

## Attention

Especially,  the  sense  resistors  are  susceptible  to  GND  differences  and  GND  ripple  voltage,  as  the microstep  current  steps  make  up  for  voltages  down  to  0.5 mV.  No  current  other  than  the  sense resistor current should flow on their connections to GND and to the TMC5072. Optimally place them close to the TMC5072, with one or more vias to the GND plane for each sense resistor. The two sense resistors for one coil should not share a common ground connection trace or vias, as also PCB traces have a certain resistance.

## 24.3 Supply Filtering

The 5VOUT output voltage ceramic filtering capacitor (4.7 µF recommended) should be placed as close as possible to the 5VOUT pin, with its GND return going directly to the GNDA pin. Use as short and as thick  connections  as  possible.  For  best  microstepping  performance  and  lowest  chopper  noise  an additional filtering capacitor can be used for the VCC pin to GND, to avoid charge pump and digital part ripple influencing motor current regulation. Therefore, place a ceramic filtering capacitor (470nF recommended) as close as possible (1-2mm distance) to the VCC pin with GND return going to the ground plane. VCC can be coupled to 5VOUT using a 2.2 Ω resistor  to  supply  the  digital  logic  from 5VOUT while keeping ripple away from this pin.

A 100 nF filtering capacitor should be placed as close as possible to the VSA pin to ground plane. The motor  supply  pins  VS  should  be  decoupled  with  an  electrolytic  capacitor  (47 μF  or  larger  is recommended) and a ceramic capacitor, placed close to the device.

Consider that  the  switching motor coil outputs  have a high  dV/dt. Thus, capacitive stray into high resistive signals can occur, if the motor traces are near other traces over longer distances.

## 24.4 Single Driver Connection

In a parallel connection setup, where the TMC5072 drives one motor with double current, consider, that  driver  1  takes  over  the  complete  control.  Thus,  the  driver  1  layout  should  be  optimized concerning sense resistor placement, etc. Connect driver 2 bridge outputs and BR pins in parallel to the  corresponding  driver  1  pins.  Especially  for  the  BR  pins  of  driver  2,  it  is  important  to  use  low inductivity interconnection lines to driver 1.

## 24.5 Layout Example

Figure 24.1 Layout example

<!-- image -->

## 25 Package Mechanical Data

## 25.1 Dimensional Drawings

Attention: Drawings not to scale.

<!-- image -->

Figure 25.1 Dimensional drawings

| Parameter              | [mm] Ref   | Min   | Nom   | Max   |
|------------------------|------------|-------|-------|-------|
| total thickness        | A          | 0.80  | 0.85  | 0.90  |
| stand off              | A1         | 0.00  | 0.035 | 0.05  |
| mold thickness         | A2         | -     | 0.65  | 0.67  |
| lead frame thickness   | A3         |       | 0.203 |       |
| lead width             | b          | 0.2   | 0.25  | 0.3   |
| body size X            | D          |       | 7.0   |       |
| body size Y            | E          |       | 7.0   |       |
| lead pitch             | e          |       | 0.5   |       |
| exposed die pad size X | J          | 5.2   | 5.3   | 5.4   |
| exposed die pad size Y | K          | 5.2   | 5.3   | 5.4   |
| lead length            | L          | 0.35  | 0.4   | 0.45  |
| package edge tolerance | aaa        |       |       | 0.1   |
| mold flatness          | bbb        |       |       | 0.1   |
| coplanarity            | ccc        |       |       | 0.08  |
| lead offset            | ddd        |       |       | 0.1   |
| exposed pad offset     | eee        |       |       | 0.1   |

## 25.2 Package Codes

| Type         | Package                      | Temperature range            | Code & marking               | MSL level                    |
|--------------|------------------------------|------------------------------|------------------------------|------------------------------|
| TMC5072-LA   | QFN48 (RoHS)                 | -40°C ... +125°C             | TMC5072-LA                   | MSL 3 / 160h                 |
| TMC5072-LA-T | Tape on reel packed products | Tape on reel packed products | Tape on reel packed products | Tape on reel packed products |

## 26 Design Philosophy

We feel that this is one of the coolest chips which we did within the last years. The TMC50XX and TMC5130 family brings premium functionality, reliability and coherence previously reserved to costly motion control units. Integration at street level cost was possible by squeezing know-how into a few mm²  of  layout  using  one  of  the  most  modern  smart  power  processes.  The  IC  comprises  all  the knowledge  gained  from  designing  motion  controller  and  driver  chips  and  complex  motion  control systems for more than 20 years. We are often asked if our motion controllers contain software -they definitely do not. The reason is that sharing resources in software leads to complex timing constraints and can create interrelations between parts which should not be related. This makes debugging of software  so  difficult.  Therefore,  the  IC  is  completely  designed  as  a  hardware  solution,  i.e.,  each internal  calculation  uses  a  specially  designed  dedicated  arithmetic  unit.  The  basic  philosophy  is  to integrate  all  real-time  critical  functionality  in  hardware,  and  to  leave  additional  starting  points  for highest  flexibility.  Parts  of  the  design  go  back  to  previous  ICs,  starting  from  the  TMC453  motion controller developed in 1997. Our deep involvement, practical testing and the stable team ensure a high level of confidence and functional safety.

Bernhard Dwersteg, former Trinamic CTO and founder

## 27 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information  given  in  this  data  sheet  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 28 ESD Sensitive Device

The TMC5072 is an ESD sensitive CMOS device sensitive to electrostatic discharge. Take special care to use adequate grounding of personnel and machines in manual handling. After soldering the devices to the board, ESD requirements are more relaxed. Failure to do so can result in defect or decreased reliability.

<!-- image -->

## 29 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 30 Table of Figures

| Figure 1.1 Basic application and block diagram..........................................................................................................5                        |                                                                                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 1.2 Energy efficiency with CoolStep (example)...............................................................................................8                             |                                                                                                                                                  |
| Figure 2.1 TMC5072 pin assignments..............................................................................................................................9                |                                                                                                                                                  |
| Figure 3.1 Standard application circuit.........................................................................................................................12               |                                                                                                                                                  |
| Figure 3.2 5V only operation...........................................................................................................................................13        |                                                                                                                                                  |
| Figure 3.3 Driving a single motor with high current...............................................................................................14                             |                                                                                                                                                  |
| Figure 3.5 Using an external 5V supply to bypass internal regulator ................................................................15                                           |                                                                                                                                                  |
| Figure 3.6 RC-Filter on VCC for reduced ripple ..........................................................................................................15                      |                                                                                                                                                  |
| Figure 3.7 Simple ESD enhancement and more elaborate motor output protection ....................................16                                                              |                                                                                                                                                  |
| Figure 4.1 SPI timing.........................................................................................................................................................19 |                                                                                                                                                  |
| Figure 5.1 Addressing multiple TMC5072 via single wire interface using chaining .......................................23                                                        |                                                                                                                                                  |
| Figure 5.2 Addressing multiple TMC5072 via differential interface, additional filtering for NEXTADDR                                                                             | ...24                                                                                                                                            |
| Figure 5.3 Ring Mode Example .......................................................................................................................................25           |                                                                                                                                                  |
| Figure 8.1 Motor coil sine wave current with StealthChop (measured with current probe).......................48                                                                  |                                                                                                                                                  |
| Figure 8.2 Scope shot: good setting for PWM_GRAD...............................................................................................49                                |                                                                                                                                                  |
| Figure 8.3 Scope shot: too small setting for PWM_GRAD......................................................................................49                                    |                                                                                                                                                  |
| Figure 8.4 Good and too small setting for PWM_GRAD..........................................................................................50                                   |                                                                                                                                                  |
| Figure 9.1 Chopper phases                                                                                                                                                        | ..............................................................................................................................................56 |
| Figure 9.2 No ledges in current wave with sufficient hysteresis (magenta: current A, yellow                                                                                      | blue:                                                                                                                                            |
| sense resistor voltages A and B) ...................................................................................................................................58           |                                                                                                                                                  |
| Figure 9.3 SpreadCycle chopper scheme showing coil current during a chopper cycle...............................59                                                               |                                                                                                                                                  |
| Figure 9.4 Classic const. off time chopper with offset showing coil current...................................................60                                                 |                                                                                                                                                  |
| Figure 9.5 Zero crossing with classic chopper and correction using sine wave offset.................................60                                                           |                                                                                                                                                  |
| Figure 11.1 Ramp generator velocity trace showing consequent move in negative direction...................64                                                                     |                                                                                                                                                  |
| Figure 11.2 Illustration of optimized motor torque usage with TMC5072 ramp generator.........................65                                                                  |                                                                                                                                                  |
| Figure 11.3 Ramp generator velocity dependent motor control ..........................................................................66                                         |                                                                                                                                                  |
| Figure 11.4 Using reference switches (example) .......................................................................................................67                         |                                                                                                                                                  |
| Figure 12.1 Function principle of StallGuard2............................................................................................................69                      |                                                                                                                                                  |
| Figure 12.2 Example: Optimum SGT setting and StallGuard2 reading with an example motor.................71                                                                        |                                                                                                                                                  |
| Figure 13.1 CoolStep adapts motor current to the load.........................................................................................74                                 |                                                                                                                                                  |
| Figure 14.1 DcStep extended application operation area.......................................................................................76                                  |                                                                                                                                                  |
| Figure 14.2 Velocity profile with impact by overload situation ...........................................................................77                                     |                                                                                                                                                  |
| Figure 15.1 LUT programming example                                                                                                                                              | .......................................................................................................................79                        |
| Figure 16.1 STEP and DIR timing, Input pin filter ....................................................................................................81                         |                                                                                                                                                  |
| Figure 16.2 MicroPlyer microstep interpolation with rising STEP frequency ....................................................83                                                 |                                                                                                                                                  |
| Figure 17.1 Outline of ABN signals of an incremental encoder ...........................................................................84                                       |                                                                                                                                                  |
| Figure 18.1 Current setting and first steps with StealthChop...............................................................................87                                    |                                                                                                                                                  |
| Figure 18.2 Tuning StealthChop and SpreadCycle ....................................................................................................88                            |                                                                                                                                                  |
| Figure 18.3 Moving the motor using the motion controller                                                                                                                         | .................................................................................89                                                              |
| Figure 18.4 Enabling CoolStep (only in combination with SpreadCycle)...........................................................90                                                |                                                                                                                                                  |
| Figure 18.5 Setting up DcStep                                                                                                                                                    | ........................................................................................................................................91       |
| Figure 24.1 Layout example...........................................................................................................................................102         |                                                                                                                                                  |
| Figure 25.1 Dimensional drawings..............................................................................................................................103                |                                                                                                                                                  |

## 31 Revision History

Table 31.1 Documentation revisions

| Version   | Date        | Author BD - Bernhard Dwersteg SD - Sonja Dwersteg   | Description                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------|-------------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.00      | 2012-JUL-20 | SD                                                  | New design (based on V2 silicon)                                                                                                                                                                                                                                                                                                                                                             |
| 1.10      | 2013-DEC-01 | BD                                                  | Revision for V3 silicon - 8 Bit addressing for UART, Ring option - no three-phase option - single sinewave table for both motors: Changed table for motor driver register (common microstep table) - additional StealthChop option for 2 phase chopper - blanking of StallGuard - dcCoolStep - UART ring option: IO3 as config input, Address=0 selects no forwarding - Sense resistor table |
|           | 2014-AUG-26 | BD                                                  | Silicon V3.0A                                                                                                                                                                                                                                                                                                                                                                                |
| 1.12      | 2014-OCT-15 | BD                                                  | - Second StallGuard tuning algorithm - No 3 Phase chopper - Adapted hint for optimum chopper frequency - Added Parts from Rhino Documentation V0.47                                                                                                                                                                                                                                          |
| 1.18      | 2015-FEB-24 | BD                                                  | StallGuard Stop details: Improved homing algorithm in 14.4, Added 12.4, Text for event_stop_sg, improved 19.1, Limits VCC_IO UV, VCP UV, Detail wording in many chapters, 320mV VSRTL, SPI example, Added chapter Closing the Loop. Added UART interface errata. Explanation VACTUAL sign, improved blue blocks, DcStep Description & Procedure                                              |
| 1.19      | 2015-MAR-25 | BD                                                  | Removed preliminary, slight corrections in wording                                                                                                                                                                                                                                                                                                                                           |
| 1.20      | 2015-OCT-13 | BD                                                  | Correct SPI write access example, SPI mode 3, added TCLK1 data, corrected TOFF calculation example, comments in GSTAT, comment on SPI_STATUS, 5V only +-5%, X1=128 in microstep table defaults                                                                                                                                                                                               |
| 1.21      | 2016-APR-22 | BD                                                  | More details on: Setting negative encoder factors, StealthChop lower current limit, Ramp generator Joystick control, Terminate Ramp, Adaptation to internal fCLK, Interrupt handling Corrected: effective StealthChop PWM frequency is 2*divider setting, Wording V1 and VMAX register, ESD schematic w. varistors instead of snubber                                                        |
| 1.22      | 2017-MAY-16 | BD                                                  | Minor Corrections, UART software example                                                                                                                                                                                                                                                                                                                                                     |
| 1.23      | 2020-JUN-12 | BD                                                  | Updated front page, minor corrections, flowchart update for StealthChop                                                                                                                                                                                                                                                                                                                      |
| 1.24      | 2022-FEB-03 | BD                                                  | Updated logo & order codes; minor re-wording; Added chapter on ramp generator response time; Improved several text segments                                                                                                                                                                                                                                                                  |
| 1.25      | 2022-JUN-01 | BD                                                  | Improved description of encoder pre-scaler                                                                                                                                                                                                                                                                                                                                                   |
| 1.26      | 2023-FEB-21 | BD                                                  | Removed wrong constraint for VSA<=VS+0.7V: Removed box on p.12, P96: Removed AbsMax rating for this limit, added supply scenario with VSA separate supply in El. Characteristics; Removed term ' slave ' P51: Added hint for min. current IRUN in StealthChop P54: Added attention box to test for open load prior to StealthChop                                                            |

## 32 References

[AN001]  Trinamic Application Note 001 - Parameterization of SpreadCycle ™, www.trinamic.com

[AN002]  Trinamic Application Note 002 - Parameterization of StallGuard 2™ &amp; CoolStep ™, www.trinamic.com

[AN003] Trinamic Application Note 003 - DcStep ™ with TMC5 072, www.trinamic.com Calculation sheet TMC50XX\_Calculations.xlsx