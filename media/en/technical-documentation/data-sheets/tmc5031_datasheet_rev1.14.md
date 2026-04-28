<!-- lastmod 2023-08-03 -->
## TMC5031 DATASHEET

Dual, cost-effective controller and driver for up to two 2-phase bipolar stepper motors. Integrated motion controller with SPI interface.

<!-- image -->

<!-- image -->

## FEATURES AND BENEFITS

2-phase stepper motors

Drive Capability up to 2 x 1.1A coil current

Motion Controller with SixPoint ™ ramp

Voltage Range 4.75… 16V DC

SPI Interface

2x Ref.-Switch input per axis

Highest Resolution 256 microsteps per full step

Full Protection &amp; Diagnostics

StallGuard 2™ high precision sensorless motor load detection

CoolStep ™ load dependent current saves up to 75% energy

SpreadCycle ™ high-precision chopper for best current sine wave form and zero crossing with additional ChopSync2 ™

Compact Size 7x7mm QFN48 package

## BLOCK DIAGRAM

<!-- image -->

<!-- image -->

<!-- image -->

## APPLICATIONS

CCTV, Security Antenna Positioning Heliostat Controller Battery powered applications Office Automation ATM, Cash recycler, POS Lab Automation Liquid Handling Medical Printer and Scanner Pumps and Valves

## DESCRIPTION

The TMC5031 is a cost-efficient motion controller and driver IC for up to two stepper motors. It combines two flexible ramp motion controllers with energy efficient stepper  motor  drivers.  The  drivers  support two-phase stepper motors and offer an industry-leading  feature  set,  including  highresolution microstepping, sensorless mechanical  load  measurement,  load-adaptive power optimization, and low-resonance chopper operation. All features are controlled by a s tandard SPI™  interface. Integrated protection  and  diagnostic  features  support robust and reliable operation. High integration, high energy efficiency and small form factor enable miniaturized designs with low external component count for costeffective and highly competitive solutions.

<!-- image -->

## APPLICATION EXAMPLES: HIGH FLEXIBILITY -MULTIPURPOSE USE

The  TMC5031  scores  with  power  density,  complete  motion  controlling  features  and  integrated  power stages.  It  offers  a  versatility  that  covers  a  wide  spectrum  of  applications  from  battery  systems  up  to embedded applications with 1.1A current per motor. The small form factor keeps costs down and allows for miniaturized layouts. Extensive support at the chip, board, and software levels enables rapid design cycles and fast time-to-market with competitive products. High energy efficiency and reliability from TRINAMIC's CoolStep  technology  deliver  cost  savings  in  related  systems  such  as  power  supplies  and  cooling.  The TMC5041 provides a pin-compatible upgrade capable of working at up to 26V and adding silent StealthChop chopper. It does not support dual programmable microstep tables.

## MINIATURIZED DESIGN FOR UP TO TWO STEPPER MOTORS

<!-- image -->

Two reference switch inputs can  be  used  for each  motor. A single  CPU controls the whole system, which  is highly economical and space saving.

<!-- image -->

<!-- image -->

## ORDER CODES

| Order code       | Description                                                                            | Size [ mm 2 ]   |
|------------------|----------------------------------------------------------------------------------------|-----------------|
| TMC5031-LA       | 2-Axis Stepper Motor Controller/Driver IC, SPI, 5-16V Supply, 1.1A, QFN48, Tray        | 7 x 7           |
| TMC5031-LA-T     | 2-Axis Stepper Motor Controller/Driver IC, SPI, 5-16V Supply, 1.1A, QFN48, Tape & Reel | 7 x 7           |
| TMC5031-EVAL-KIT | Full Evaluation Kit for TMC5031                                                        | 126 x 85        |
| TMC5031-EVAL     | Evaluation Board for TMC5031 (excl. Landungsbrücke and Eselsbrücke)                    | 85 x 55         |

## TMC5031-EVAL EVALUATION BOARD

## EVALUATION &amp; DEVELOPMENT PLATFORM

The  TMC5031-EVAL  is  part  of  TRINAMICs  universal evaluation board system which provides a convenient  handling  of  the  hardware  as  well  as  a user-friendly software tool for evaluation. The TMC5031 evaluation board system consists of three parts: LANDUNGSBRÜCKE (base board), ESELSBRÜCKE (connector board including several test points), and TMC5031-EVAL.

## TABLE OF CONTENTS

| 1 PRINCIPLES OF OPERATION                                                                             | 4                                                                                                     | 10 STALLGUARD2 LOAD MEASUREMENT 50                        | 10 STALLGUARD2 LOAD MEASUREMENT 50                        | 10 STALLGUARD2 LOAD MEASUREMENT 50   |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|--------------------------------------|
| 1.1 KEY CONCEPTS                                                                                      | 4                                                                                                     | 10.1                                                      | TUNING THE STALLGUARD2 THRESHOLD SGT                      | 51                                   |
| 1.2 SPI CONTROL I NTERFACE                                                                            | 5                                                                                                     | 10.2                                                      | STALLGUARD2 UPDATE RATE AND FILTER                        | 53                                   |
| 1.3 SOFTWARE                                                                                          | 5                                                                                                     | 10.3                                                      | DETECTING A MOTOR STALL                                   |                                      |
| 1.4 MOVING AND CONTROLLING THE MOTOR                                                                  | 5                                                                                                     | 1.4 MOVING AND CONTROLLING THE MOTOR                      |                                                           | 53                                   |
| 1.5 PRECISION DRIVER WITH PROGRAMMABLE                                                                | 1.5 PRECISION DRIVER WITH PROGRAMMABLE                                                                | 10.4                                                      | HOMING WITH STALLGUARD                                    | 53                                   |
| MICROSTEPPING WAVE                                                                                    | 5                                                                                                     | 10.5 L IMITS OF STALLGUARD2 OPERATION                     | 10.5 L IMITS OF STALLGUARD2 OPERATION                     | 53                                   |
| 1.6 STALLGUARD2 - MECHANICAL LOAD SENSING                                                             | 5                                                                                                     | 11 COOLSTEP                                               | OPERATION                                                 | 54                                   |
| 1.7 COOLSTEP - LOAD ADAPTIVE CURRENT CONTROL6                                                         | 1.7 COOLSTEP - LOAD ADAPTIVE CURRENT CONTROL6                                                         | 11.1                                                      | USER BENEFITS                                             | 54                                   |
| 2 PIN ASSIGNMENTS                                                                                     | 7                                                                                                     | 11.2 SETTING UP FOR COOLSTEP 11.3 TUNING COOLSTEP         | 11.2 SETTING UP FOR COOLSTEP 11.3 TUNING COOLSTEP         | 54 56                                |
| 2.1 PACKAGE OUTLINE                                                                                   | 7                                                                                                     | 2.1 PACKAGE OUTLINE                                       |                                                           |                                      |
| 2.2 SIGNAL DESCRIPTIONS 3 SAMPLE CIRCUITS                                                             | 7                                                                                                     | 12 SINE-WAVE LOOK-UP TABLE                                | 12 SINE-WAVE LOOK-UP TABLE                                | 57                                   |
|                                                                                                       | 10                                                                                                    | 12.1                                                      | USER BENEFITS                                             | 57                                   |
| 3.1 STANDARD APPLICATION CIRCUIT                                                                      | 10                                                                                                    | 12.2                                                      | MICROSTEP TABLE                                           | 57                                   |
| 3.2 5 V ONLY SUPPLY                                                                                   | 12                                                                                                    | 13 QUICK CONFIGURATION GUIDE                              | 13 QUICK CONFIGURATION GUIDE                              | 59                                   |
| 3.3 EXTERNAL VCC SUPPLY                                                                               | 13 14                                                                                                 | 14 GETTING STARTED                                        | 14 GETTING STARTED                                        | 62                                   |
| 3.4 OPTIMIZING ANALOG PRECISION                                                                       | 3.4 OPTIMIZING ANALOG PRECISION                                                                       | 14.1                                                      | I NITIALIZATION EXAMPLES                                  | 62                                   |
| 3.5 DRIVER PROTECTION AND EME CIRCUITRY SPI INTERFACE                                                 | 15 16                                                                                                 | 15 CLOCK OSCILLATOR AND CLOCK INPUT                       | 15 CLOCK OSCILLATOR AND CLOCK INPUT                       | 63                                   |
| 4.1 SPI DATAGRAM STRUCTURE                                                                            | 16                                                                                                    | 4.1 SPI DATAGRAM STRUCTURE                                |                                                           | 63                                   |
|                                                                                                       |                                                                                                       | 15.1 USING THE I NTERNAL CLOCK                            | 15.1 USING THE I NTERNAL CLOCK                            |                                      |
| 4.2 SPI SIGNALS                                                                                       | 17                                                                                                    | 15.2                                                      | USING AN EXTERNAL CLOCK                                   | 63                                   |
| 4.3 TIMING                                                                                            | 18                                                                                                    | 15.3                                                      | CONSIDERATIONS ON THE FREQUENCY                           | 63                                   |
| 5 REGISTER MAPPING                                                                                    | 19                                                                                                    | 16 ABSOLUTE MAXIMUM RATINGS                               | 16 ABSOLUTE MAXIMUM RATINGS                               | 65                                   |
|                                                                                                       | 20                                                                                                    |                                                           |                                                           | 65                                   |
| 5.1 GENERAL CONFIGURATION REGISTERS 5.2 RAMP GENERATOR REGISTERS                                      | 21                                                                                                    | 17 ELECTRICAL CHARACTERISTICS                             | 17 ELECTRICAL CHARACTERISTICS                             | 65                                   |
| 5.3 MOTOR DRIVER REGISTERS                                                                            | 26                                                                                                    | 17.1 OPERATIONAL RANGE 17.2 DC CHARACTERISTICS AND TIMING | 17.1 OPERATIONAL RANGE 17.2 DC CHARACTERISTICS AND TIMING | 66                                   |
| CURRENT SETTING                                                                                       | 32 33                                                                                                 | CHARACTERISTICS 17.3 THERMAL CHARACTERISTICS              | CHARACTERISTICS 17.3 THERMAL CHARACTERISTICS              | 68                                   |
| 6.1 SENSE RESISTORS                                                                                   | 6.1 SENSE RESISTORS                                                                                   | 18 LAYOUT CONSIDERATIONS                                  | 18 LAYOUT CONSIDERATIONS                                  | 69                                   |
|                                                                                                       | 34                                                                                                    |                                                           |                                                           | 69                                   |
|                                                                                                       |                                                                                                       | 18.1 EXPOSED DIE PAD 18.2 WIRING GND                      | 18.1 EXPOSED DIE PAD 18.2 WIRING GND                      |                                      |
|                                                                                                       | 35                                                                                                    |                                                           |                                                           | 69                                   |
| 7.2 CLASSIC 2-P HASE MOTOR CONSTANT OFF TIME                                                          | 7.2 CLASSIC 2-P HASE MOTOR CONSTANT OFF TIME                                                          | 18.3 SUPPLY FILTERING                                     | 18.3 SUPPLY FILTERING                                     | 69                                   |
| CHOPPER 7.3 RANDOM OFF TIME                                                                           | 38 39                                                                                                 | 18.4 LAYOUT EXAMPLE                                       | 18.4 LAYOUT EXAMPLE                                       | 70                                   |
| 7.4 CHOPSYNC2 FOR QUIET MOTORS                                                                        | 40                                                                                                    | 19 PACKAGE MECHANICAL DATA                                | 19 PACKAGE MECHANICAL DATA                                | 71                                   |
| DRIVER DIAGNOSTIC FLAGS                                                                               | 41                                                                                                    | DRIVER DIAGNOSTIC FLAGS                                   |                                                           | 71                                   |
|                                                                                                       |                                                                                                       | 19.1 DIMENSIONAL DRAWINGS 19.2 PACKAGE CODES              | 19.1 DIMENSIONAL DRAWINGS 19.2 PACKAGE CODES              | 71                                   |
| 8.1 TEMPERATURE MEASUREMENT                                                                           | 41 41                                                                                                 | 20 DISCLAIMER                                             | 20 DISCLAIMER                                             | 72                                   |
| 8.2 SHORT TO GND PROTECTION 8.3 OPEN LOAD DIAGNOSTICS                                                 | 41                                                                                                    | 21 ESD                                                    | SENSITIVE DEVICE                                          |                                      |
| RAMP GENERATOR                                                                                        | 42                                                                                                    | RAMP GENERATOR                                            |                                                           | 72                                   |
| 9                                                                                                     | 9                                                                                                     | 9                                                         |                                                           | 72                                   |
|                                                                                                       |                                                                                                       |                                                           |                                                           | 73                                   |
|                                                                                                       | 42 43 44                                                                                              | 22 DESIGNED FOR SUSTAINABILITY 23 TABLE OF FIGURES        | 22 DESIGNED FOR SUSTAINABILITY 23 TABLE OF FIGURES        | 74                                   |
| 9.2 MOTION PROFILES                                                                                   | 44                                                                                                    | 24 REVISION HISTORY                                       | 24 REVISION HISTORY                                       |                                      |
| 9.1 REAL WORLD UNIT CONVERSION 9.3 I NTERRUPT HANDLING 9.4 VELOCITY THRESHOLDS 9.5 REFERENCE SWITCHES | 9.1 REAL WORLD UNIT CONVERSION 9.3 I NTERRUPT HANDLING 9.4 VELOCITY THRESHOLDS 9.5 REFERENCE SWITCHES | 25 REFERENCES                                             | 25 REFERENCES                                             | 74                                   |
|                                                                                                       | 46                                                                                                    |                                                           |                                                           |                                      |
| 9.6 RESTRICTIONS OF RAMP GENERATOR (E RRATA )                                                         | 47                                                                                                    | 9.6 RESTRICTIONS OF RAMP GENERATOR (E RRATA )             |                                                           |                                      |
| 9.7 RAMP GENERATOR RESPONSE TIME                                                                      | 49                                                                                                    | 9.7 RAMP GENERATOR RESPONSE TIME                          |                                                           |                                      |

## 1 Principles of Operation

Figure 1.1 Basic application and block diagram

<!-- image -->

The TMC5031 motion controller and driver chip is an intelligent power component interfacing between the CPU and up to two stepper motors. All stepper motor logic is completely within the TMC5031. No software is required to control the motor -just provide target positions. The TMC5031 offers several unique enhancements which are enabled by the system-on-chip integration of driver and controller. The SixPoint ramp generator of the TMC5031 uses CoolStep and StallGuard2 automatically to optimize every  motor  movement:  TRINAMICs  special  features  contribute  toward  lower  system  cost,  greater precision,  greater  energy  efficiency,  smoother  motion,  and  cooler  operation  in  stepper  motor applications. The clear concept and the comprehensive solution save design-in time.

## 1.1 Key Concepts

The TMC5031 implements several advanced features which are exclusive to TRINAMIC products. These features  contribute  toward  greater  precision,  greater  energy  efficiency,  higher  reliability,  smoother motion, and cooler operation in many stepper motor applications.

StallGuard2 ™

High-precision load measurement using the back EMF on the motor coils.

CoolStep ™

Load-adaptive  current  control  which  reduces  energy  consumption  by  as  much  as 75%.

SpreadCycle ™

High-precision  chopper  algorithm  available  as  an  alternative  to  the  traditional constant off-time algorithm.

SixPoint ™

Fast  and  precise  positioning  using  a  hardware  ramp  generator  with  a  set  of  four acceleration / deceleration settings. Quickest response due to dedicated hardware.

In  addition  to  these  performance  enhancements,  TRINAMIC  motor  drivers  also  offer  safeguards  to detect  and  protect  against  shorted  outputs,  output  open-circuit,  overtemperature,  and  undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

opt. driver enable

## 1.2 SPI Control Interface

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  slave,  another  bit  is  sent  simultaneously  from  the  slave  to  the  master. Communication between an SPI master and the TMC5031 slave always consists of sending one 40-bit command word and receiving one 40-bit status word.

The SPI command rate typically is a few commands per complete motor motion.

## 1.3 Software

From  a  software  point  of  view  the  TMC5031  is  a  peripheral  with  a  number  of  control  and  status registers. Most of them can either be written only or read only, some of the registers allow both read and  write  access.  In  case  read-modify-write  access  is  desired  for  a  write  only  register,  a  shadow register can be realized in master software.

## 1.4 Moving and Controlling the Motor

## 1.4.1 Integrated Motion Controller

The  integrated  32-bit  motion  controller  automatically  drives  the  motors  to  target  positions  or accelerates  to  target  velocities.  All  motion  parameters  can  be  changed  on  the  fly.  The  motion controller recalculates immediately. A minimum set of configuration data consists of acceleration and deceleration values and the maximum motion velocity. A start and stop velocity is supported as well as  a  second  acceleration  and  deceleration  setting.  The  integrated  motion  controller  supports immediate reaction to mechanical reference switches and to the sensorless stall detection StallGuard2.

## Benefits are:

- ­ Flexible ramp programming
- ­ Efficient use of motor torque for acceleration and deceleration allows higher machine throughput
- ­ Immediate reaction to stop and stall conditions

## 1.5 Precision Driver with Programmable Microstepping Wave

Current into the motor coils is controlled using a cycle-by-cycle chopper mode. Two chopper modes are available: a traditional constant off-time mode and the new SpreadCycle mode. Constant off-time mode  provides  higher  torque  at  the  highest  velocity,  while  SpreadCycle  mode  offers  smoother operation and greater power efficiency over a wide range of speed and load. The SpreadCycle chopper scheme automatically integrates a fast decay cycle and guarantees smooth zero crossing performance. Programmable microstep shapes allow optimizing the motor performance.

## Benefits are:

- -Significantly improved microstepping with low-cost motors
- -Motor runs smooth and quiet
- -Reduced mechanical resonances yields improved torque

## 1.6 StallGuard2 -Mechanical Load Sensing

StallGuard2  provides  an  accurate  measurement  of  the  load  on  the  motor.  It  can  be  used  for  stall detection as well as other uses at loads below those which stall the motor, such as CoolStep loadadaptive  current  reduction.  This  gives  more  information  on  the  drive  allowing  functions  like sensorless homing and diagnostics of the drive mechanics.

## 1.7 CoolStep -Load Adaptive Current Control

CoolStep  drives  the  motor  at  the  optimum  current.  It  uses  the  StallGuard2  load  measurement information to adjust the motor current to the minimum amount required in the actual load situation. This saves energy and keeps the components cool, making the drive an efficient and precise solution.

## Benefits are:

- Energy efficiency

power consumption decreased up to 75%

- Motor generates less heat

improved mechanical precision

- Less or no cooling

improved reliability

- Use of smaller motor

less torque reserve required → cheaper motor does the job

Figure 1.2  shows  the  efficiency  gain  of  a  42mm  stepper  motor  when  using  CoolStep  compared  to standard operation with 50% of torque reserve. CoolStep is enabled above 60RPM in the example.

<!-- image -->

Figure 1.2 Energy efficiency with CoolStep (example)

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC5031 pin assignments.

<!-- image -->

## 2.2 Signal Descriptions

| Pin    | Number               | Type   | Function                                                                                                                                                                      |
|--------|----------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GND    | 6, 9, 10, 12, 24, 34 | GND    | Digital ground pin for IO pins and digital circuitry.                                                                                                                         |
| VCC_IO | 7                    |        | 3.3V or 5V I/O supply voltage pin for all digital pins. Does not supply digital circuitry.                                                                                    |
| VSA    | 30                   |        | Analog supply voltage for 5V regulator - typically supplied with driver supply voltage. An additional 100nF capacitor to GND (GND plane) is recommended for best performance. |
| GNDA   | 31                   | GND    | Analog GND                                                                                                                                                                    |
| 5VOUT  | 32                   |        | Output of internal 5V regulator. Attach 2.2 μ F or larger ceramic capacitor to GNDA near to pin for best performance. May be used to supply VCC of chip.                      |

| Pin     | Number   | Type   | Function                                                                                                                                                                                                                                                                                            |
|---------|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VCC     | 33       |        | 5V supply input for digital circuitry within chip and charge pump. Attach 470nF capacitor to GND (GND plane). May be supplied by 5VOUT. A 2.2Ω resistor is recommended for decoupling noise from 5VOUT. When using an external supply, make sure, that VCC comes up before or in parallel to 5VOUT. |
| DIE_PAD | -        | GND    | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane.                                                                                                                                                                                        |

Table 2.1 Low voltage digital and analog power supply pins

Table 2.2 Charge pump pins

| Pin   |   Number | Type   | Function                                                                                                   |
|-------|----------|--------|------------------------------------------------------------------------------------------------------------|
| CPO   |       35 | O(VCC) | Charge pump driver output. Outputs 5V (GND to VCC) square wave with 1/16 of internal oscillator frequency. |
| CPI   |       36 | I(VCP) | Charge pump capacitor input: Provide external 22nF / 50V capacitor to CPO.                                 |
| VCP   |       37 |        | Output of charge pump. Provide external 100nF capacitor to VS.                                             |

Table 2.3 Digital I/O pins (all related to VCC\_IO supply)

| Pin      | Number     | Type   | Function                                                                                                                                                                         |
|----------|------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| INT      | 1          | O (Z)  | Tristate interrupt output. Can be programmed to provide interrupt output based on ramp generator flags RAMP_STAT bits 4, 5, 6 & 7 ( poscmp_enable =1).                           |
| PP       | 2          | O (Z)  | Tristate position compare output for motor 1 ( poscmp_enable =1).                                                                                                                |
| CSN      | 3          | I      | Chip select input of SPI interface                                                                                                                                               |
| SCK      | 4          | I      | Serial clock input of SPI interface                                                                                                                                              |
| SDI      | 5          | I      | Data input of SPI interface                                                                                                                                                      |
| SDO      | 8          | O (Z)  | Tristate data output of SPI interface (enabled with CSN=0)                                                                                                                       |
| CLK      | 11         | I      | Clock input. Tie to GND using short wire for internal clock or supply external clock. The first high signal disables the internal oscillator until power down.                   |
| REFR2    | 25         | I      | Right reference switch input for motor 2                                                                                                                                         |
| REFL2    | 26         | I      | Left reference switch input for motor 2                                                                                                                                          |
| REFR1    | 27         | I      | Right reference switch input for motor 1                                                                                                                                         |
| REFL1    | 28         | I      | Left reference switch input for motor 1                                                                                                                                          |
| DRV_ENN  | 29         | I      | Enable input for motor drivers. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a high level. Tie to GND for normal operation. |
| TST_MODE | 48         | I      | Test mode input. Puts IC into test mode. Tie to GND for normal operation.                                                                                                        |
| -        | 13, 23, 38 | N.C.   | Unused pins - no internal electrical connection. Leave open or tie to GND for compatibility with future devices.                                                                 |

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

## Table 2.4 Power driver pins

## 3 Sample Circuits

The  sample  circuits  show  the  connection  of  the  external  components  in  different  operation  and supply modes. The connection of the bus interface and further digital signals is left out for clarity.

## 3.1 Standard Application Circuit

<!-- image -->

Figure 3.1 Standard application circuit

The standard application circuit uses two sense resistors to set the motor coil current. Use low ESR capacitors for filtering the power supply. The capacitors need to cope with the current ripple cause by chopper  operation.  A  minimum  capacity  of  100µF  near  the  driver  is  recommended  for  best performance.  Current  ripple  in  the  supply  capacitors  also  depends  on  the  power  supply  internal resistance and cable length. VCC\_IO can be supplied from 5VOUT, or from a fast startup 3.3V regulator. To  minimize  linear  voltage  regulator  power  dissipation  of  the  internal  5V  voltage  regulator  in applications where VM is high, a different (lower) supply voltage can be used for VSA, if available. For best motor chopper performance, an optional R/C-filter de-couples 5VOUT from digital noise cause by power drawn from VCC.

## Basic layout hints

Place sense resistors and all filter capacitors as close as possible to the related IC pins. Use a solid common GND for all GND connections, also for sense resistor GND. Connect 5VOUT filtering capacitor directly to 5VOUT and GNDA pin. See layout hints for more details. Low ESR electrolytic capacitors are recommended for VS filtering.

## Attention

In  case  VSA  is  supplied  by  a  different  voltage  source,  make  sure  that  VSA  does  not  exceed  VS  by more than one diode drop upon power up or power down.

## Attention

Ensure sufficient capacity on VS to limit supply ripple, and to keep power slopes below 1V/µs. Failure to  do  so  could  result  in  destructive  currents  via  the  charge  pump  capacitor.  Provide  overvoltage protection in case the motor could be manually turned at a high velocity, or in case the driver could become cut off from the main supply capacitors. Significant energy can be fed back from motor coils to the power supply in the event of quick deceleration, or when the driver becomes disabled.

## 3.1.1 VCC\_IO Requirements

For a reliable start-up it is essential that VCC\_IO comes up to a minimum of 1.5V before the TMC5031 leaves the reset condition. The reset condition ends earliest 50µs after the time when VSA exceeds its undervoltage  threshold  of  typically  4.2V,  or  when  5VOUT  exceeds  its  undervoltage  threshold  of typically 3.5V, whichever comes last.

## THERE ARE THREE WAYS TO COME UP TO VCC\_IO REQUIREMENTS

- -5VOUT can be used directly to supply VCC\_IO. In this case there are no further requirements.
- -An external low drop regulator can be used in a 3.3V environment as shown in Figure 3.1. Note, that most voltage regulators are not suitable for this application because they show a delayed boot up. The following external regulators are proved by TRINAMIC:
- -VCC\_IO can be supplied externally as shown in Figure 3.2 . In this case it is mandatory to connect the Schottky diode to the logic supply of the external circuitry. Please note, that the 2K resistor is not to be used with 5V I/O voltage.

TS3480CX33

This regulator can be used within the full supply voltage range when tied to the motor supply voltage.

LD1117-3.3

This regulator can be used to supply VCC\_IO from 5VOUT, or from a supply voltage of up to 15V.

Figure 3.2 External supply of VCC\_IO (showing optional filtering for VCC)

<!-- image -->

Refer  to  application  note  no.  028 Supply  Voltage  Considerations:  VCC\_IO  in  TMC50xx  Designs (www.trinamic.com). Here you will find complete information about connecting VCC\_IO.

## 3.2 5 V Only Supply

Figure 3.3 5V only operation

<!-- image -->

While  the  standard  application  circuit  is  limited  to  roughly  5.5 V  lower  supply  voltage,  a  5 V  only application lets the IC run from a normal 5 V +/-5% supply. In this application, linear regulator drop must  be  minimized.  Therefore,  the  major  5 V  load  is  removed  by  supplying  VCC  directly  from  the external supply. To keep supply ripple away from the analog voltage reference, 5VOUT should have an own filtering capacity and the 5VOUT pin does not become bridged to the 5V supply.

## 3.3 External VCC Supply

Supplying VCC from an external supply is advised, when cooling of the chip is critical,  e.g., at high environment temperatures in combination with high supply voltages (16 V), as the linear regulator is a major source of on-chip power dissipation. It must be made sure that the external VCC supply comes up before or synchronously with the 5VOUT supply, because otherwise the power-up reset event may be  missed  by  the  TMC5031.  A  diode  from  5VOUT  to  VCC  ensures  this  in  case  the  external  voltage regulator is  not  a  low  drop  type  linear  regulator.  To  prevent  overload  of  the  internal  5V  regulator when using this diode, an additional series resistor has been added to VSA.

An alternative for reduced power dissipation is using a lower supply voltage for VSA, e.g., 6V to 12V. If power dissipation is critical, but no external supply is available, the clock frequency can be reduced as a first step by supplying external 12 MHz clock.

Figure 3.4 Using an external 5V supply to reduce linear regulator power dissipation

<!-- image -->

## 3.3.1 Internal Regulator Bridged

In  case  a  clean  external  5V  supply  is  available,  it  can  be  used  for  complete  supply  of  analog  and digital part (Figure 3.5). The circuit will benefit from a well-regulated supply, e.g., when using a +/-1% regulator.  A  precise  supply  guarantees  increased  motor  current  precision  because  the  voltage  at 5VOUT directly is the reference voltage for all internal units of the driver, especially for motor current control. For best performance, the power supply should have low ripple to give a precise and stable supply at 5VOUT pin with remaining ripple well below 5mV. Some switching regulators have a higher remaining  ripple,  or  different  loads  on  the  supply  may  cause  lower  frequency  ripple.  In  this  case, increase  capacity  attached  to  5VOUT.  In  case  the  external  supply  voltage  has  poor  stability  or  low frequency  ripple,  this  would  affect  the  precision  of  the  motor  current  regulation  as  well  as  add chopper noise.

Figure 3.5 Using an external 5V supply to bypass internal regulator

<!-- image -->

## 3.4 Optimizing Analog Precision

The 5VOUT pin is used as an analog reference for operation of the TMC5031. Performance will degrade when there  is  voltage  ripple  on  this  pin.  Most  of  the  high  frequency  ripple  in  a  TMC5031  design results from the operation of the internal digital logic. The digital logic switches with each edge of the  clock  signal.  Further,  ripple  results  from  operation  of  the  charge  pump,  which  operates  with roughly  1 MHz  and  draws  current  from  the  VCC  pin.  To  keep  this  ripple  as  low  as  possible,  an additional filtering capacitor can be put directly next to the VCC pin with vias to the GND plane giving a short connection to the digital GND pins (pin 6 and pin 34). Analog performance is best, when this ripple is kept away from the analog supply pin 5VOUT, using an additional series resistor of 2.2 Ω to 3.3 Ω . The voltage drop on this resistor will be roughly 100 mV (IVCC * R).

Figure 3.6 Adding an RC-Filter on VCC for reduced ripple

<!-- image -->

## 3.5 Driver Protection and EME Circuitry

Some applications have to cope with ESD events caused by motor operation or external influence. Despite ESD circuitry within the driver chips, ESD events occurring during operation can cause a reset or even a destruction of the motor driver, depending on their energy. Especially plastic housings and belt drive systems tend to cause ESD events of several kV. It is best practice to avoid ESD events by attaching all conductive parts, especially the motors themselves to PCB ground, or to apply electrically conductive plastic parts. In addition, the driver can be protected up to a certain degree against ESD events or live plugging / pulling the motor, which also causes high voltages and high currents into the motor connector terminals. A simple scheme uses capacitors at the driver outputs to reduce the dV/dt caused by ESD events. Larger capacitors will bring more benefit concerning ESD suppression, but cause additional current flow in each chopper cycle, and thus increase driver power dissipation, especially  at  high  supply  voltages.  The  values  shown  are  example  values -they  might  be  varied between 100pF and 1nF. The capacitors also dampen high frequency noise injected from digital parts of the application PCB circuitry and thus reduce electromagnetic emission. A more elaborate scheme uses LC filters to de-couple the driver outputs from the motor connector. Varistors in between of the coil terminals eliminate coil overvoltage caused by live plugging. Optionally protect all outputs by a varistor against ESD voltage.

Figure 3.7 Simple ESD enhancement and more elaborate motor output protection

<!-- image -->

## 4 SPI Interface

## 4.1 SPI Datagram Structure

The TMC5031 uses 40-bit SPI ™ (Serial Peripheral Interface, SPI is Trademark of Motorola) datagrams for communication with a microcontroller. Microcontrollers which are equipped with hardware SPI are typically able to communicate using integer multiples of 8 bit. The NCS line of the TMC5031 must be handled in a way, that it stays active (low) for the complete duration of the datagram transmission.

Each datagram sent to the TMC5031 is composed of an address byte followed by four data bytes. This allows direct 32-bit data word communication with the register set of the TMC5031. Each register is accessed via 32 data bits even if it uses less than 32 data bits.

For simplification, each register is specified by a one-byte address:

- -For a read access the most significant bit of the address byte is 0.
- -For a write access the most significant bit of the address byte is 1.

Most registers are write-only registers, some can be read additionally, and there are also some read only registers.

<!-- image -->

| TMC5031 SPI DATAGRAM STRUCTURE   |
|----------------------------------|

## 4.1.1 Selection of Write / Read (WRITE\_notREAD)

The  read  and  write  selection  is  controlled  by  the  MSB  of  the  address  byte  (bit  39  of  the  SPI datagram).  This  bit  is  0  for  read  access  and  1  for  write  access.  So,  the  bit  named  W  is  a WRITE\_notREAD control bit. The active high write bit is the MSB of the address byte. So, 0x80 has to be added to the address for a write access. The SPI interface always delivers data back to the master, independent of the W bit. The data transferred back is the data read from the address, which was transmitted  with  the previous datagram,  if  the  previous  access  was  a  read  access.  If  the  previous access was a write access, then the data read back mirrors the previously received write data. So, the difference between a read and a write access is that the read access does not transfer data to the addressed register, but it transfers the address only and its 32 data bits are dummies, and further the following  read  or  write  access  delivers  back  the  data  read  from  the  address  transmitted  in  the preceding read cycle.

A read access request datagram uses dummy write data. Read data is transferred back to the master with  the  subsequent  read  or  write  access.  Hence,  reading  multiple  registers  can  be  done  in  a pipelined fashion.

Whenever  data  is  read  from  or  written  to  the  TMC5031,  the  MSBs  delivered  back  contain  the  SPI status, SPI\_STATUS , a number of eight selected status bits.

## Example :

For a read access to the register ( XACTUAL ) with the address 0x21, the address byte has to be set to 0x21 in the access preceding the read access. For a write access to the register ( VMAX ), the address byte has to be set to 0x80 + 0x27 = 0xA7. For read access, the data bit might have any value (-). So, one can set them to 0.

action read XACTUAL

read XACTUAL

write VMAX := 0x00ABCDEF

write VMAX := 0x00123456

## data sent to TMC5031 data received from TMC5031

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

All data are right aligned. Some registers represent unsigned (positive) values, some represent integer values (signed) as two's complement numbers, single bits or groups o f bits are represented as single bits respectively as integer groups.

## 4.2 SPI Signals

The SPI bus on the TMC5031 has four signals:

- -SCK -bus clock input
- -SDI -serial data input
- -SDO -serial data output
- -CSN -chip select input (active low)

The slave  is  enabled  for  an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the slave latching the data from SDI on the rising edge of SCK and driving data to SDO following the falling edge. The most significant bit is sent first. A minimum of 40 SCK clock cycles is required for a bus transaction with the TMC5031.

If more than 40 clocks are driven, the additional bits shifted into SDI are shifted out on SDO after a 40-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the slave. If more than 40 bits are sent, only the last 40 bits received before the rising edge of CSN are recognized as the command.

-  0xSS &amp; unused data
-  0xSS &amp; XACTUAL
-  0xSS &amp; XACTUAL
-  0xSS00ABCDEF

## 4.3 Timing

The SPI interface is synchronized to the internal system clock, which limits the SPI bus clock SCK to half of the system clock frequency. If the system clock is based on the on-chip oscillator, an additional 10% safety margin must be used to ensure reliable data transmission. All SPI inputs as well as the ENN input are internally filtered to avoid triggering on pulses shorter than 20ns. Figure 4.1 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

<!-- image -->

## Figure 4.1 SPI timing

## Hint

Usually, this SPI timing is referred to as SPI MODE 3 (CPOL=1 and CPHA=1).

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

## 5 Register Mapping

This chapter gives an overview of the complete register set. Some of the registers bundling a number of  single  bits  are  detailed  in  extra  tables.  The  functional  practical  application  of  the  settings  is detailed in dedicated chapters.

## Note

- All registers become reset to 0 upon power up, unless otherwise noted.
- Add 0x80 to the address Addr for write accesses!

| NOTATION OF HEXADECIMAL AND BINARY NUMBERS   | NOTATION OF HEXADECIMAL AND BINARY NUMBERS    |
|----------------------------------------------|-----------------------------------------------|
| 0x                                           | precedes a hexadecimal number, e.g. 0x04      |
| %                                            | precedes a multi-bit binary number, e.g. %100 |

| NOTATION OF R/W FIELD   | NOTATION OF R/W FIELD                                         |
|-------------------------|---------------------------------------------------------------|
| R                       | Read only                                                     |
| W                       | Write only                                                    |
| R/W                     | Read- and writable register                                   |
| R+C                     | Clear upon read (i.e. status bit becomes reset after readout) |

## OVERVIEW REGISTER MAPPING

| REGISTER                                           | DESCRIPTION                                                                                                                                                                                                                                                         |
|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General Configuration Registers                    | These registers contain - global configuration - global status flags                                                                                                                                                                                                |
| Ramp Generator Motion Control Register Set         | This register set offers registers for - choosing a ramp mode - choosing velocities - homing - acceleration and deceleration - target positioning                                                                                                                   |
| Ramp Generator Driver Feature Control Register Set | This register set offers registers for - driver current control - setting thresholds for CoolStep operation - setting thresholds for different chopper modes - a reference switch and StallGuard2 event configuration - a ramp and reference switch status register |
| Motor Driver Register Set                          | This register set offers registers for - setting / reading out microstep table and counter - chopper and driver configuration - CoolStep and StallGuard2 configuration - reading out StallGuard2 values and driver error flags                                      |

## 5.1 General Configuration Registers

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| RW                                              | 0x00                                            | 11                                              | GCONF                                           | Bit GCONF - Global configuration flags 0..2 Reserved, set to 0 3 poscmp_enable 0: Outputs INT and PP are tristated. 1: Position compare pulse (PP) and interrupt output (INT) are available Attention - do not leave the outputs floating in tristate condition, provide an external pull-up or set this bit 1. 4..6 Reserved, set to 0 7 test_mode 0: Normal operation 1: Enable analog test output on pin REFR2 TEST_SEL selects the function of REFR2: 0…4: T120, DAC1, VDDH1, DAC2, VDDH2 Attention: Not for user, set to 0 for normal operation! 8 shaft1 1: Inverse motor 1 direction 9 shaft2 1: Inverse motor 2 direction 10 lock_gconf 1: GCONF is locked against further write access. |
| R+C                                             | 0x01                                            | 4                                               | GSTAT                                           | 0 reset 1: Indicates that the IC has been reset since the last read access to GSTAT. 1 drv_err1 1: Indicates, that driver 1 has been shut down due to overtemperature or short circuit detection since the last read access. Read DRV_STATUS1 for details. The flag can only be reset when all error conditions are cleared. 2 drv_err2 1: Indicates, that driver 2 has been shut down due to overtemperature or short circuit detection since the last read access. Read DRV_STATUS2 for details. The flag can only be reset when all error conditions are cleared. 3 uv_cp 1: Indicates an undervoltage on the charge pump. The driver is disabled in this case.                               |
| W                                               | 0x03                                            | 4                                               | TEST_SEL                                        | Bit SLAVECONF 3..0 TEST_SEL : selects the function of REFR2 in test mode: 0…4: T120, DAC1, VDDH1, DAC2, VDDH2 Attention: Not for user, set to 0 for normal operation!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                 | 0x04                                            | 8 + 8                                           |                                                 | Bit INPUT 0..6 Unused, ignore these bits Reads the state of the DRV_ENN pin VERSION : 0x01=first version of the IC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| R                                               |                                                 |                                                 | INPUT                                           | 7 31.. 24 Identical numbers mean full digital compatibility.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X1F)                                                                                                                                                                              |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                                    |
| W                                               | 0x05                                            | 32                                              | X_COMPARE                                       | Position comparison register for motor 1 position strobe. Activate poscmp_enable to get position pulse on output PP. XACTUAL = X_COMPARE : - Output PP becomes high. It returns to a low state, if the positions mismatch. |

## 5.2 Ramp Generator Registers

Addresses Addr are specified for motor 1 (upper value) and motor 2 (second address).

## 5.2.1 Ramp Generator Motion Control Register Set

| RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)                                                                                                                                                                     | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| R/W                                                                                       | Addr                                                                                      | n                                                                                         | Register                                                                                  | Description / bit names                                                                                                                                                                                                                                     | Range [Unit]                                                                              |
| RW                                                                                        | 0x20 0x40                                                                                 | 2                                                                                         | RAMPMODE                                                                                  | RAMPMODE: 0: Positioning mode (using all A, D and V parameters) 1: Velocity mode to positive VMAX (using AMAX acceleration) 2: Velocity mode to negative VMAX (using AMAX acceleration) 3: Hold mode (velocity remains unchanged, unless stop event occurs) | 0…3                                                                                       |
| RW                                                                                        | 0x21 0x41                                                                                 | 32                                                                                        | XACTUAL                                                                                   | Actual motor position (signed) Hint: This value normally should only be modified, when homing the drive. In positioning mode, modifying the register content will start a motion.                                                                           | - 2^31… +(2^31)-1                                                                         |
| R                                                                                         | 0x22 0x42                                                                                 | 24                                                                                        | VACTUAL                                                                                   | Actual motor velocity from ramp generator (signed) The sign matches the motion direction. A negative sign means motion to lower XACTUAL.                                                                                                                    | +-(2^23)-1 [µsteps / t]                                                                   |
| W                                                                                         | 0x23 0x43                                                                                 | 18                                                                                        | VSTART                                                                                    | Motor start velocity (unsigned) Set VSTOP ≥ VSTART!                                                                                                                                                                                                         | 0…(2^18) -1 [µsteps / t]                                                                  |
| W                                                                                         | 0x24 0x44                                                                                 | 16                                                                                        | A1                                                                                        | First acceleration between VSTART and V1 (unsigned)                                                                                                                                                                                                         | 0…(2^16) -1 [µsteps / ta²]                                                                |
| W                                                                                         | 0x25 0x45                                                                                 | 20                                                                                        | V1                                                                                        | First acceleration / deceleration phase target velocity (unsigned) 0: Disables A1 and D1 phase, use AMAX , DMAX only                                                                                                                                        | 0…(2^20) -1 [µsteps / t]                                                                  |
| W                                                                                         | 0x26 0x46                                                                                 | 16                                                                                        | AMAX                                                                                      | Second acceleration between V1 and VMAX (unsigned) This is the acceleration and deceleration value for velocity mode.                                                                                                                                       | 0…(2^16) -1 [µsteps / ta²]                                                                |

| RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | RAMP GENERATOR MOTION CONTROL REGISTER SET (MOTOR 1: 0X 20…0 X2D, MOTOR 2: 0X 40…0 X4D)   |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| R/W                                                                                       | Addr                                                                                      | n                                                                                         | Register                                                                                  | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Range [Unit]                                                                              |
| W                                                                                         | 0x27 0x47                                                                                 | 23                                                                                        | VMAX                                                                                      | Motion ramp target velocity (for positioning ensure VMAX ≥ VSTART ) (unsigned) This is the target velocity in velocity mode. It can be changed any time during a motion.                                                                                                                                                                                                                                                                                                                                                                                                               | 0…(2^23) -512 [µsteps / t]                                                                |
| W                                                                                         | 0x28 0x48                                                                                 | 16                                                                                        | DMAX                                                                                      | Deceleration between VMAX and V1 (unsigned)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0…(2^16) -1 [µsteps / ta²]                                                                |
| W                                                                                         | 0x2A 0x4A                                                                                 | 16                                                                                        | D1                                                                                        | Deceleration between V1 and VSTOP (unsigned) Attention: Do not set 0 in positioning mode, even if V1=0!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 1…(2^16) -1 [µsteps / ta²]                                                                |
| W                                                                                         | 0x2B 0x4B                                                                                 | 18                                                                                        | VSTOP                                                                                     | Motor stop velocity (unsigned) Attention: Set VSTOP ≥ VSTART! Attention: Do not set 0 in positioning mode!                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 1…(2^18) -1 [µsteps / t]                                                                  |
| W                                                                                         | 0x2C 0x4C                                                                                 | 16                                                                                        | TZEROWAIT                                                                                 | Waiting time after ramping down to zero velocity before next movement or direction inversion can start and before motor power down starts. Time range is about 0 to 2 seconds. This setting avoids excess acceleration e.g.                                                                                                                                                                                                                                                                                                                                                            | 0…(2^16) -1 * 512 t CLK                                                                   |
| RW                                                                                        | 0x2D 0x4D                                                                                 | 32                                                                                        | XTARGET                                                                                   | from VSTOP to - VSTART . Target position for ramp mode (signed). Write a new target position to this register in order to activate the ramp generator positioning in RAMPMODE =0. Initialize all velocity, acceleration and deceleration parameters before. Hint: The position is allowed to wrap around, thus, XTARGET value optionally can be treated as an unsigned number. Hint: The maximum possible displacement is +/-((2^31)-1). Hint: When increasing V1, D1 or DMAX during a motion, rewrite XTARGET afterwards in order to trigger a second acceleration phase, if desired. | - 2^31… +(2^31)-1                                                                         |

## 5.2.2 Ramp Generator Driver Feature Control Register Set

| RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)   | RAMP GENERATOR DRIVER FEATURE CONTROL REGISTER SET (MOTOR 1: 0X 30…0 X36, MOTOR 2: 0X 50…0 X56)                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                                                               | Addr                                                                                              | n                                                                                                 | Register                                                                                          | Description / bit names Bit IHOLD_IRUN - Driver current control                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| W                                                                                                 | 0x30 0x50                                                                                         | 5 + 5 + 4                                                                                         | IHOLD_IRUN                                                                                        | 12..8 IRUN Motor run current (0=1/32…31=32/32) Hint: Choose sense resistors in a way, that normal IRUN is 16 to 31 for best microstep performance. 19..16 IHOLDDELAY Controls the number of clock cycles for motor power down after a motion as soon as TZEROWAIT has expired. The smooth transition avoids a motor jerk upon power down. 0: instant power down 1..15: Delay per current reduction step in multiple                                                                                     |
| W                                                                                                 | 0x31 0x51                                                                                         | 23                                                                                                | VCOOLTHRS                                                                                         | of 2^18 clocks This is the lower threshold velocity for switching on smart energy CoolStep. (unsigned) Set this parameter to disable CoolStep at low speeds, where it cannot work reliably. VHIGH ≥ &#124; VACT &#124; ≥ VCOOLTHRS: - CoolStep is enabled, if configured (Only bits 22..8 are used for value and for comparison)                                                                                                                                                                        |
| W                                                                                                 | 0x32 0x52                                                                                         | 23                                                                                                | VHIGH                                                                                             | This velocity setting allows velocity dependent switching into a different chopper mode and fullstepping to maximize torque. (unsigned) &#124; VACT &#124; ≥ VHIGH : - CoolStep is disabled (motor runs with normal current scale) - If vhighchm is set, the chopper switches to chm =1 with TFD =0 (constant off time with slow decay, only). - ChopSync2 is switched off ( SYNC =0) - If vhighfs is set, the motor operates in fullstep mode. (Only bits 22..8 are used for value and for comparison) |
| RW                                                                                                | 0x34 0x54                                                                                         | 11                                                                                                | SW_MODE                                                                                           | Switch mode configuration See separate table!                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| R+C                                                                                               | 0x35 0x55                                                                                         | 14                                                                                                | RAMP_STAT                                                                                         | Ramp status and switch event status See separate table!                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| R                                                                                                 | 0x36 0x56                                                                                         | 32                                                                                                | XLATCH                                                                                            | Ramp generator latch position, latches XACTUAL upon a programmable switch event (see SW_MODE ).                                                                                                                                                                                                                                                                                                                                                                                                         |

)²

time reference t for velocities: t = 2^24 / f

CLK

time reference ta² for accelerations: ta² = 2^41 / (fCLK

## 6.2.2.1 SW\_MODE -Reference  Switch  and StallGuard2 Event Configuration Register

| 0X34, 0X54: SW_MODE - REFERENCE SWITCH AND STALLGUARD2 EVENT CONFIGURATION REGISTER   | 0X34, 0X54: SW_MODE - REFERENCE SWITCH AND STALLGUARD2 EVENT CONFIGURATION REGISTER   | 0X34, 0X54: SW_MODE - REFERENCE SWITCH AND STALLGUARD2 EVENT CONFIGURATION REGISTER                                                                                                                                                                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                                   | Name                                                                                  | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11                                                                                    | en_softstop                                                                           | 0: Hard stop 1: Soft stop The soft stop mode always uses the deceleration ramp settings DMAX , V 1 , D1 , VSTOP and TZEROWAIT for stopping the motor. A stop occurs when the velocity sign matches the reference switch position (REFL for negative velocities, REFR for positive velocities) and the respective switch stop function is enabled. A hard stop also uses TZEROWAIT before the motor becomes released. Attention: Do not use soft stop in combination with StallGuard2. |
| 10                                                                                    | sg_stop                                                                               | 1: Enable stop by StallGuard2. Disable to release motor after stop event. Attention: Do not enable during motor spin-up, wait until the motor velocity exceeds a certain value, where StallGuard2 delivers a stable result.                                                                                                                                                                                                                                                           |
| 9                                                                                     | -                                                                                     | Reserved, set to 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 8                                                                                     | latch_r_inactive                                                                      | 1: Activates latching of the position to XLATCH upon an inactive going edge on the right reference switch input REFR. The active level is defined by pol_stop_r.                                                                                                                                                                                                                                                                                                                      |
| 7                                                                                     | latch_r_active                                                                        | 1: Activates latching of the position to XLATCH upon an active going edge on the right reference switch input REFR. Hint: Activate latch_r_active to detect any spurious stop event by reading status_latch_r.                                                                                                                                                                                                                                                                        |
| 6                                                                                     | latch_l_inactive                                                                      | 1: Activates latching of the position to XLATCH upon an inactive going edge on the left reference switch input REFL. The active level is defined by pol_stop_l.                                                                                                                                                                                                                                                                                                                       |
| 5                                                                                     | latch_l_active                                                                        | 1: Activates latching of the position to XLATCH upon an active going edge on the left reference switch input REFL. Hint: Activate latch_l_active to detect any spurious stop event by reading status_latch_l.                                                                                                                                                                                                                                                                         |
| 4                                                                                     | swap_lr                                                                               | 1: Swap the left and the right reference switch input                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3                                                                                     | pol_stop_r                                                                            | Sets the active polarity of the right reference switch input 0=non-inverted, high active: a high level on REFR stops the motor 1=inverted, low active: a low level on REFR stops the motor                                                                                                                                                                                                                                                                                            |
| 2                                                                                     | pol_stop_l                                                                            | Sets the active polarity of the left reference switch input 0=non-inverted, high active: a high level on REFL stops the motor 1=inverted, low active: a low level on REFL stops the motor                                                                                                                                                                                                                                                                                             |
| 1                                                                                     | stop_r_enable                                                                         | 1: Enables automatic motor stop during active right reference switch input Hint: The motor restarts in case the stop switch becomes released.                                                                                                                                                                                                                                                                                                                                         |
| 0                                                                                     | stop_l_enable                                                                         | 1: Enables automatic motor stop during active left reference switch input Hint: The motor restarts in case the stop switch becomes released.                                                                                                                                                                                                                                                                                                                                          |

## 6.2.2.2 RAMP\_STAT -Ramp and Reference Switch Status Register

| 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER   | 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER   | 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER   | 0X35, 0X55: RAMP_STAT - RAMP AND REFERENCE SWITCH STATUS REGISTER                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                                 | Bit                                                                 | Name                                                                | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| R                                                                   | 13                                                                  | status_sg                                                           | 1: Signals an active StallGuard2 input from the CoolStep driver, if enabled. Hint: When polling this flag, stall events may be missed - activate sg_stop to be sure not to miss the stall event.                                                                                                                                                                                                                                                                                                         |
| R+C                                                                 | 12                                                                  | second_move                                                         | 1: Signals that the automatic ramp requires moving back in the opposite direction, e.g., due to on-the-fly parameter change (Flag is cleared upon reading)                                                                                                                                                                                                                                                                                                                                               |
| R                                                                   | 11                                                                  | t_zerowait_ active                                                  | 1: Signals, that TZEROWAIT is active after a motor stop. During this time, the motor is in standstill.                                                                                                                                                                                                                                                                                                                                                                                                   |
| R                                                                   | 10                                                                  | vzero                                                               | 1: Signals, that the actual velocity is 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| R                                                                   | 9                                                                   | position_ reached                                                   | 1: Signals, that the target position is reached. This flag becomes set while XACTUAL and XTARGET match.                                                                                                                                                                                                                                                                                                                                                                                                  |
| R                                                                   | 8                                                                   | velocity_ reached                                                   | 1: Signals, that the target velocity is reached. This flag becomes set while VACTUAL and VMAX match.                                                                                                                                                                                                                                                                                                                                                                                                     |
| R+C                                                                 | 7                                                                   | event_pos_ reached                                                  | 1: Signals, that the target position has been reached ( position_reached becoming active). (Flag and interrupt condition are cleared upon reading) This bit is ORed to the interrupt output signal.                                                                                                                                                                                                                                                                                                      |
| R+C                                                                 | 6                                                                   | event_stop_ sg                                                      | 1: Signals an active StallGuard2 stop event. Reading the register will clear the stall condition and the motor may re-start motion, unless the motion controller has been stopped. (Flag and interrupt condition are cleared upon reading) This bit is ORed to the interrupt output signal.                                                                                                                                                                                                              |
| R                                                                   | 5                                                                   | event_stop_r                                                        | 1: Signals an active stop right condition due to stop switch. The stop condition and the interrupt condition can be removed by setting RAMP_MODE to hold mode or by commanding a move to the opposite direction. In soft_stop mode, the condition will remain active until the motor has stopped motion into the direction of the stop switch. Disabling the stop switch or the stop function also clears the flag, but the motor will continue motion. This bit is ORed to the interrupt output signal. |
| R                                                                   | 4                                                                   | event_stop_l                                                        | 1: Signals an active stop left condition due to stop switch. The stop condition and the interrupt condition can be removed by setting RAMP_MODE to hold mode or by commanding a move to the opposite direction. In soft_stop mode, the condition will remain active until the motor has stopped motion into the direction of the stop switch. Disabling the stop switch or the stop function also clears the flag, but the motor will continue motion. This bit is ORed to the interrupt output signal.  |
| R+C                                                                 | 3                                                                   | status_latch_r                                                      | 1: Latch right ready (enable position latching using SWITCH_MODE settings latch_r_active or latch_r_inactive ) (Flag is cleared upon reading)                                                                                                                                                                                                                                                                                                                                                            |
| R+C                                                                 | 2                                                                   | status_latch_l                                                      | 1: Latch left ready (enable position latching using SWITCH_MODE settings latch_l_active or latch_l_inactive ) (Flag is cleared upon reading)                                                                                                                                                                                                                                                                                                                                                             |
| R                                                                   | 1                                                                   | status_stop_r                                                       | Reference switch right status (1=active)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## 5.3 Motor Driver Registers

| MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)                                                                                                                                                                                                                                                                  | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| R/W                                                                      | Addr                                                                     | n                                                                        | Register                                                                 | Description / bit names                                                                                                                                                                                                                                                                                                                 | Range [Unit]                                                             |
| W                                                                        | 0x60 0x70                                                                | 32                                                                       | MSLUT1[0] MSLUT2[0] microstep table entries 0…31                         | Each bit gives the difference between microstep x and x+1 when combined with the corresponding MSLUTSEL W bits: 0: W = %00: -1 %01: +0 %10: +1                                                                                                                                                                                          | 32x 0 or 1 reset default= sine wave table                                |
| W                                                                        | 0x61 … 0x67 0x71 … 0x77                                                  | 7 x 32                                                                   | MSLUT1[1...7] MSLUT2[1...7] microstep table entries 32…255               | %11: +2 1: W = %00: +0 %01: +1 %10: +2 %11: +3 This is the differential coding for the first quarter of a wave. Start values for CUR_A and CUR_B are stored for MSCNT position 0 in START_SIN and START_SIN90_120 . ofs31, ofs30, …, ofs01, ofs00 …                                                                                     | 7x 32x 0 or 1 reset default= sine wave table                             |
| W                                                                        | 0x68 0x78                                                                | 32                                                                       | MSLUTSEL1 MSLUTSEL2                                                      | This register defines four segments within each quarter MSLUT wave. Four 2-bit entries determine the meaning of a 0 and a 1 bit in the corresponding segment of MSLUT . See separate table!                                                                                                                                             | 0 < X1 < X2 < X3 reset default= sine wave table                          |
| W                                                                        | 0x69 0x79                                                                | 8 + 8                                                                    | MSLUTSTART                                                               | bit 7 … 0: START_SIN bit 23 … 16: START_SIN90_120 START_SIN gives the absolute current at microstep table entry 0. START_SIN90_120 gives the absolute current for microstep table entry at positions 256. Start values are transferred to the microstep registers CUR_A and CUR_B , whenever the reference position MSCNT =0 is passed. | START_SIN reset default =0 START_SIN90_1 20 reset default =247           |
| R                                                                        | 0x6A 0x7A                                                                | 10                                                                       | MSCNT                                                                    | Microstep counter. Indicates actual position in the microstep table for CUR_B . CUR_A uses an offset of 256. Hint: Move to a position where MSCNT is zero before re-initializing MSLUTSTART or MSLUT and MSLUTSEL .                                                                                                                     |                                                                          |
| R                                                                        | 0x6B 0x7B                                                                | 9 + 9                                                                    | MSCURACT                                                                 | bit 8… 0: Sine CUR_B (signed): Actual microstep current for motor phase B as read from MSLUT (not scaled by current) bit 24… 16: Cosine CUR_A (signed): Actual microstep current for motor phase A as read from MSLUT (not scaled by current)                                                                                           |                                                                          |
| RW                                                                       | 0x6C 0x7C                                                                | 32                                                                       | CHOPCONF                                                                 | chopper and driver configuration See separate table!                                                                                                                                                                                                                                                                                    |                                                                          |
| W                                                                        | 0x6D 0x7D                                                                | 25                                                                       | COOLCONF                                                                 | CoolStep smart current control register and StallGuard2 configuration See separate table!                                                                                                                                                                                                                                               |                                                                          |

| MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   | MOTOR DRIVER REGISTER SET (MOTOR 1: 0X 60…0 X6F, MOTOR 2: 0X 70…0 X7F)   |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| R/W                                                                      | Addr                                                                     | n                                                                        | Register                                                                 | Description / bit names                                                  | Range [Unit]                                                             |
| R                                                                        | 0x6F 0x7F                                                                | 32                                                                       | DRV_ STATUS                                                              | StallGuard2 value and driver error flags See separate table!             |                                                                          |

## MIRCOSTEP TABLE CALCULATION FOR A SINE WAVE EQUIVALENT TO THE POWER ON DEFAULT:

<!-- formula-not-decoded -->

- -i :[0… 255] is the table index
- -The amplitude of the wave is 248. The resulting maximum positive value is 247 and the maximum negative value is -248.
- -The round function rounds values from 0.5 to 1.4999 to 1

## 5.3.1 MSLUTSEL -Look up Table Segmentation Definition

| Bit      |                     |                                                               | Name Function                                                                                                                                                                                                                                       |
|----------|---------------------|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 31 30 29 | X3                  | LUT segment 3 start                                           | Comment The sine wave look-up table can be divided into up to four segments using an individual step width control entry Wx . The segment borders are selected by X1 , X2 and X3 . Segment 0 goes from 0 to X1 -1. Segment 1 goes from X1 to X2 -1. |
| 28       | X3                  | LUT segment 3 start                                           | Comment The sine wave look-up table can be divided into up to four segments using an individual step width control entry Wx . The segment borders are selected by X1 , X2 and X3 . Segment 0 goes from 0 to X1 -1. Segment 1 goes from X1 to X2 -1. |
| 27       | X3                  | LUT segment 3 start                                           | Comment The sine wave look-up table can be divided into up to four segments using an individual step width control entry Wx . The segment borders are selected by X1 , X2 and X3 . Segment 0 goes from 0 to X1 -1. Segment 1 goes from X1 to X2 -1. |
| 26       | X3                  | LUT segment 3 start                                           | Comment The sine wave look-up table can be divided into up to four segments using an individual step width control entry Wx . The segment borders are selected by X1 , X2 and X3 . Segment 0 goes from 0 to X1 -1. Segment 1 goes from X1 to X2 -1. |
| 25       | X3                  | LUT segment 3 start                                           | Comment The sine wave look-up table can be divided into up to four segments using an individual step width control entry Wx . The segment borders are selected by X1 , X2 and X3 . Segment 0 goes from 0 to X1 -1. Segment 1 goes from X1 to X2 -1. |
| 24       | X3                  | LUT segment 3 start                                           | Comment The sine wave look-up table can be divided into up to four segments using an individual step width control entry Wx . The segment borders are selected by X1 , X2 and X3 . Segment 0 goes from 0 to X1 -1. Segment 1 goes from X1 to X2 -1. |
| 23       | LUT segment 2 start | LUT segment 3 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 22       | LUT segment 2 start | LUT segment 3 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 21       | LUT segment 2 start |                                                               | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 20       | LUT segment 2 start |                                                               | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 19       | LUT segment 2 start |                                                               | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 18       | LUT segment 2 start |                                                               | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 17       | LUT segment 2 start |                                                               | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 16       | LUT segment 2 start |                                                               | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 15       | X1                  | LUT segment 1 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 14       | X1                  | LUT segment 1 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 13       | X1                  | LUT segment 1 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 12       | X1                  | LUT segment 1 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 11       | X1                  | LUT segment 1 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 10       | X1                  | LUT segment 1 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 9 8      | X1                  | LUT segment 1 start                                           | Segment 2 goes from X2 to X3 -1. Segment 3 goes from X3 to 255. For defined response the values shall satisfy: 0< X1 < X2 < X3                                                                                                                      |
| 7        | W3                  | LUT width select from ofs(X3) to ofs255 LUT width select from | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |
| 6        | W3                  | LUT width select from ofs(X3) to ofs255 LUT width select from | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |
| 5        | W2                  | ofs(X2) to ofs(X3-1)                                          | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |
| 4        | W2                  | ofs(X2) to ofs(X3-1)                                          | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |
| 3        | W1 W0               | LUT width select from ofs(X1) to ofs(X2-1)                    | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |
| 2 1      | W1 W0               | LUT width select from ofs(X1) to ofs(X2-1)                    | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |
| 0        |                     | LUT width select from ofs00 to ofs(X1-1)                      | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |
|          |                     | LUT width select from ofs00 to ofs(X1-1)                      | Width control bit coding W0 … W3 : %00: MSLUT entry 0, 1 select: -1, +0 %01: MSLUT entry 0, 1 select: +0, +1 %10: MSLUT entry 0, 1 select: +1, +2 %11: MSLUT entry 0, 1 select: +2, +3                                                              |

## 5.3.2 CHOPCONF -Chopper Configuration

| 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                                                                                                                                                     |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                            | Name                                           | Function                                       | Comment                                                                                                                                                                                                                                                                                          |
| 31                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                                                                                                                         |
| 30                                             | diss2g                                         | short to GND protection disable                | 0: Short to GND protection is on 1: Short to GND protection is disabled                                                                                                                                                                                                                          |
| 29                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                                                                                                                         |
| 28                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                                                                                                                         |
| 27                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                                                                                                                         |
| 26                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                                                                                                                         |
| 25                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                                                                                                                         |
| 24                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                                                                                                                         |
| 23                                             | sync3                                          | SYNC                                           | This register allows synchronization of the chopper for                                                                                                                                                                                                                                          |
| 22                                             | sync2                                          | PWM synchronization                            | both phases of a two-phase motor in order to avoid the occurrence of a beat, especially at low motor velocities.                                                                                                                                                                                 |
| 21                                             | sync1                                          | clock                                          | It is automatically switched off above VHIGH . %0000: Chopper sync function ChopSync off                                                                                                                                                                                                         |
| 20                                             | sync0                                          |                                                | %0001 … %1111: Synchronization with f SYNC = f CLK /(sync*64) Hint: Set TOFF to a low value, so that the chopper cycle is ended, before the next sync clock pulse occurs. Set for the double desired chopper frequency for chm=0, for the desired base chopper frequency for chm=1.              |
| 19                                             | vhighchm                                       | high velocity chopper mode                     | This bit enables switching to chm =1 and fd =0, when VHIGH is exceeded. This way, a higher velocity can be achieved. Can be combined with vhighfs =1. If set, the TOFF setting automatically becomes doubled during high velocity operation in order to avoid doubling of the chopper frequency. |
| 18                                             | vhighfs                                        | high velocity fullstep selection               | This bit enables switching to fullstep, when VHIGH is exceeded. Switching takes place only at 45° position. The fullstep target current uses the current value from the microstep table at the 45° position.                                                                                     |
| 17                                             | vsense                                         | sense resistor voltage based current scaling   | 0: Low sensitivity, high sense resistor voltage 1: High sensitivity, low sense resistor voltage                                                                                                                                                                                                  |
| 16                                             | tbl1                                           | TBL                                            | %00 … %11:                                                                                                                                                                                                                                                                                       |
| 15                                             | tbl0                                           | blank time select                              | Set comparator blank time to 16, 24, 36 or 54 clocks Hint: %10 is recommended for most applications                                                                                                                                                                                              |
| 14                                             | chm                                            | chopper mode                                   | 0 Standard mode (SpreadCycle) 1 Constant off time with fast decay time. Fast decay time is also terminated when the negative nominal current is reached. Fast decay is after on time.                                                                                                            |
| 13                                             | rndtf                                          | random TOFF time                               | 0 Chopper off time is fixed as set by TOFF 1 Random mode, TOFF is random modulated by d NCLK = - 12 … +3 clocks.                                                                                                                                                                                 |
| 12                                             | disfdcc                                        | fast decay mode                                | chm=1: disfdcc=1 disables current comparator usage for termi- nation of the fast decay cycle                                                                                                                                                                                                     |
| 11                                             | fd3                                            | TFD [3]                                        | chm=1: MSB of fast decay time setting TFD                                                                                                                                                                                                                                                        |

| 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                                                       | 0X6C, 0X7C: CHOPCONF - CHOPPER CONFIGURATION   |
|------------------------------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Bit                                            | Name                                           |                                                                                                                                                                                                    |                                                |
| 10                                             | hend3                                          | %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes used for the hysteresis chopper.                  |                                                |
| 9                                              | hend2                                          | %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes used for the hysteresis chopper.                  |                                                |
| 8                                              | hend1                                          | %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes used for the hysteresis chopper.                  |                                                |
| 7                                              | hend0                                          | %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes used for the hysteresis chopper.                  |                                                |
| 7                                              | hend0                                          | %0000 … %1111: Offset is -3, -2, -1, 0, 1, …, 12 This is the sine wave offset and 1/512 of the value becomes added to the absolute value of each sine wave entry.                                  |                                                |
| 6                                              | hstrt2                                         | %000 … %111: Add 1, 2, …, 8 to hysteresis low value HEND (1/512 of this setting adds to current setting) Attention: Effective HEND + HSTRT ≤ 16. Hint: Hysteresis decrement is done each 16 clocks |                                                |
| 5                                              | hstrt1                                         | %000 … %111: Add 1, 2, …, 8 to hysteresis low value HEND (1/512 of this setting adds to current setting) Attention: Effective HEND + HSTRT ≤ 16. Hint: Hysteresis decrement is done each 16 clocks |                                                |
| 4                                              | hstrt0                                         | %000 … %111: Add 1, 2, …, 8 to hysteresis low value HEND (1/512 of this setting adds to current setting) Attention: Effective HEND + HSTRT ≤ 16. Hint: Hysteresis decrement is done each 16 clocks |                                                |
| 4                                              | hstrt0                                         | Fast decay time setting (MSB: fd3 ): %0000 … %1111: Fast decay time setting TFD with NCLK = 32* HSTRT (%0000: slow decay only)                                                                     |                                                |
| 3                                              | toff3                                          | Off time setting controls duration of slow decay phase NCLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks %0010 … %1111: 2 … 15                  |                                                |
| 2                                              | toff2                                          | Off time setting controls duration of slow decay phase NCLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks %0010 … %1111: 2 … 15                  |                                                |
| 1                                              | toff1                                          | Off time setting controls duration of slow decay phase NCLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks %0010 … %1111: 2 … 15                  |                                                |
| 0                                              | toff0                                          | Off time setting controls duration of slow decay phase NCLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 36 clocks %0010 … %1111: 2 … 15                  |                                                |

## 5.3.3 COOLCONF -Smart Energy Control CoolStep and StallGuard2

| 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2   | 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2   | 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2   | 0X6D, 0X7D: COOLCONF - SMART ENERGY CONTROL COOLSTEP AND STALLGUARD2                                                                                                                                                                                                                                     |
|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                    | Name                                                                   | Function                                                               | Comment                                                                                                                                                                                                                                                                                                  |
| … 24                                                                   | - sfilt                                                                | reserved StallGuard2 filter                                            | set to 0 0 Standard mode, high time resolution for                                                                                                                                                                                                                                                       |
| 23                                                                     | -                                                                      | reserved                                                               | tolerances set to 0                                                                                                                                                                                                                                                                                      |
| 22 21 20 19                                                            | sgt6 sgt5 sgt4 sgt3 sgt2                                               | StallGuard2 threshold value                                            | This signed value controls StallGuard2 level for stall output and sets the optimum measurement range for readout. A lower value gives a higher sensitivity. Zero is the starting value working with most motors. -64 to +63: A higher value makes StallGuard2 less sensitive and requires more torque to |
| 18 17 16 15                                                            | sgt1 sgt0 seimin                                                       | minimum current for smart current control current down step speed      | indicate a stall. 0: 1/2 of current setting ( IRUN )                                                                                                                                                                                                                                                     |
| 14 13                                                                  | sedn1 sedn0                                                            | reserved                                                               | 1: 1/4 of current setting ( IRUN ) %00: For each 32 StallGuard2 values decrease by one %01: For each 8 StallGuard2 values decrease by one %10: For each 2 StallGuard2 values decrease by one %11: For each StallGuard2 value decrease by one                                                             |
| 12 11 10 9                                                             | - semax3                                                               | StallGuard2 hysteresis value for smart current                         | set to 0 If the StallGuard2 result is equal to or above ( SEMIN + SEMAX+ 1)*32, the motor current becomes decreased to save energy.                                                                                                                                                                      |
| 8 7                                                                    | semax2 semax1 semax0                                                   | control reserved                                                       | %0000 … %1111: 0 … 15 set to 0                                                                                                                                                                                                                                                                           |
| 6                                                                      | - seup1                                                                | current up step width                                                  | Current increment steps per measured StallGuard2 value %00 … %11: 1, 2, 4, 8 set to 0                                                                                                                                                                                                                    |
| 5 4                                                                    | seup0 -                                                                | reserved minimum StallGuard2 value for smart current                   | If the StallGuard2 result falls below SEMIN *32, the current becomes increased to reduce motor load angle. %0000: smart current control CoolStep off                                                                                                                                                     |
| 3                                                                      | semin2                                                                 | control and                                                            |                                                                                                                                                                                                                                                                                                          |
| 2                                                                      | semin0                                                                 | smart current enable                                                   |                                                                                                                                                                                                                                                                                                          |
|                                                                        | semin3                                                                 |                                                                        | motor                                                                                                                                                                                                                                                                                                    |
| 1                                                                      | semin1                                                                 |                                                                        |                                                                                                                                                                                                                                                                                                          |
|                                                                        |                                                                        |                                                                        | … %1111: 1 … 15                                                                                                                                                                                                                                                                                          |
| 0                                                                      |                                                                        |                                                                        |                                                                                                                                                                                                                                                                                                          |
|                                                                        |                                                                        |                                                                        | %0001                                                                                                                                                                                                                                                                                                    |

## 5.3.4 DRV\_STATUS -StallGuard2 Value and Driver Error Flags

| 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS   | 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS   | 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS   | 0X6F, 0X7F: DRV_STATUS - STALLGUARD2 VALUE AND DRIVER ERROR FLAGS                                                                                                                           |
|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                 | Name                                                                | Function                                                            | Comment                                                                                                                                                                                     |
| 31                                                                  | stst                                                                | standstill indicator                                                | This flag indicates motor stand still in each operation mode.                                                                                                                               |
| 30                                                                  | olb                                                                 | open load indicator phase B                                         | 1: Open load detected on phase A or B Hint: This is just an informative flag. The driver takes no action                                                                                    |
| 29                                                                  | ola                                                                 | open load indicator phase A                                         | upon it. False detection may occur in fast motion and standstill. Check during slow motion or after a motion, only                                                                          |
| 28                                                                  | s 2gb                                                               | short to ground indicator phase B                                   | 1: Short to GND detected on phase A or B. The driver becomes disabled. The flags stay active, until the driver is disabled by software ( TOFF =0) or by the ENN input.                      |
| 27                                                                  | s 2ga                                                               | short to ground indicator phase A                                   | 1: Short to GND detected on phase A or B. The driver becomes disabled. The flags stay active, until the driver is disabled by software ( TOFF =0) or by the ENN input.                      |
| 26                                                                  | otpw                                                                | overtemperature pre- warning flag                                   | 1: Overtemperature pre-warning threshold is exceeded. The overtemperature pre-warning flag is common for both drivers.                                                                      |
| 25                                                                  | ot                                                                  | overtemperature flag                                                | 1: Overtemperature limit has been reached. Drivers become disabled until otpw is also cleared due to cooling down of the IC. The overtemperature flag is common for both drivers.           |
| 24                                                                  | StallGuard                                                          | StallGuard2 status                                                  | 1: Motor stall detected ( SG_RESULT =0)                                                                                                                                                     |
| 23                                                                  | -                                                                   | reserved                                                            | Ignore these bits                                                                                                                                                                           |
| 20 19 18 17                                                         | CS ACTUAL                                                           | actual motor current / smart energy current                         | Actual current control scaling, for monitoring smart energy current scaling controlled via settings in register COOLCONF , or for monitoring the function of the automatic current scaling. |
| 16 15                                                               | fsactive                                                            | full step active indicator                                          | 1: Indicates that the driver has switched to fullstep as defined by chopper mode settings and velocity thresholds.                                                                          |
| 14 13 12 11 10                                                      | -                                                                   | reserved                                                            | Ignore these bits                                                                                                                                                                           |

## 6 Current Setting

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
| vsense      | Allows control of the sense resistor voltage range for full scale current.                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0 1       | 0.32V 0.18V                                                 |

## 6.1 Sense Resistors

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. They also see the switching spikes from the MOSFET bridges. A low-inductance type such as film or composition  resistors  is  required  to  prevent  spikes  causing  ringing  on  the  sense  voltage  inputs leading  to  unstable  measurement  results.  A  low-inductance,  low-resistance  PCB  layout  is  essential. Any common GND path for the two sense resistors  must be  avoided, because this  would lead to coupling between the two current sense signals. A massive ground plane is best. Please also refer to layout considerations in chapter 17.3.

The  sense  resistor  needs  to  be  able  to  conduct  the  peak  motor  coil  current  in  motor  standstill conditions unless standby power is reduced. Under normal conditions, the sense resistor sees a bit less than the coil RMS current, because no current flows through the sense resistor during the slow decay phases.

The peak sense resistor power dissipation is:

<!-- formula-not-decoded -->

For high current applications, power dissipation is halved by using the low vsense setting and using an adapted resistance value. Please be aware, that in this case any voltage drop in PCB traces has a larger influence on the result. A compact layout with massive ground plane is best to avoid parasitic resistance effects.

## 7 Chopper Operation

The currents through both motor coils are controlled using choppers. The choppers work independently of each other. In Figure 7.1 the different chopper phases are shown.

On Phase: current flows in direction of target current

<!-- image -->

<!-- image -->

Fast Decay Phase: current flows in opposite direction of target current

Figure 7.1 Chopper phases

Although the current could be regulated using only on phases and fast decay phases, insertion of the slow  decay  phase  is  important  to  reduce  electrical  losses  and  current  ripple  in  the  motor.  The duration of the slow decay phase is specified in a control parameter and sets an upper limit on the chopper frequency. The current comparator can measure coil current during phases when the current flows through the sense resistor, but not during the slow decay phase, so the slow decay phase is terminated by a timer. The on phase is terminated by the comparator when the current through the coil reaches the target current. The fast decay phase may be terminated by either the comparator or another timer.

When the coil current is switched, spikes at the sense resistors occur due to charging and discharging parasitic  capacitances.  During  this  time,  typically  one  or  two  microseconds,  the  current  cannot  be measured. Blanking is the time when the input to the comparator is masked to block these spikes.

There are two  chopper  modes  available: a new  high-performance  chopper  algorithm  called SpreadCycle and a proven constant off-time chopper mode. The constant off-time mode cycles through three phases: on, fast decay, and slow decay. The SpreadCycle mode cycles through four phases: on, slow decay, fast decay, and a second slow decay.

The chopper frequency is an important parameter for a chopped motor driver. A too low frequency might generate audible noise. A higher frequency reduces current ripple in the motor, but with a too high frequency magnetic losses may rise. Also, power dissipation in the driver rises with increasing frequency due to the increased influence of switching slopes causing dynamic dissipation. Therefore, a compromise needs to be found. Most motors are optimally working in a frequency range of 20 kHz to 30 kHz.  The  chopper  frequency  is  influenced  by  a  number  of  parameter  settings  as  well  as  by  the motor inductivity and supply voltage.

## Hint

A chopper frequency in the range of 16 kHz to 30 kHz gives a good result for most motors. A higher frequency leads to increased switching losses. It is advised to check the resulting frequency and to work below 50 kHz.

Slow Decay Phase: current re-circulation

<!-- image -->

Three parameters are used for controlling both chopper modes:

| Parameter   | Description                                                                                                                                                                                                                                                                                                | Setting   | Comment                                                                                   |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------|
| TOFF        | Sets the slow decay time ( off time ). This setting also limits the maximum chopper frequency. Setting this parameter to zero completely disables all driver transistors and the motor can free-wheel.                                                                                                     | 0         | chopper off                                                                               |
| TOFF        | Sets the slow decay time ( off time ). This setting also limits the maximum chopper frequency. Setting this parameter to zero completely disables all driver transistors and the motor can free-wheel.                                                                                                     | 1…15      | off time setting N CLK = 24 + 32* TOFF (1 will work with minimum blank time of 24 clocks) |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. | 0         | 16 t CLK                                                                                  |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. | 1         | 24 t CLK                                                                                  |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. | 2         | 36 t CLK                                                                                  |
| TBL         | Selects the comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, e.g., when filter networks are used, a setting of 2 or 3 will be required. | 3         | 54 t CLK                                                                                  |
| chm         | Selection of the chopper mode                                                                                                                                                                                                                                                                              | 0         | SpreadCycle                                                                               |
| chm         | Selection of the chopper mode                                                                                                                                                                                                                                                                              | 1         | classic const. off time                                                                   |

## 7.1 SpreadCycle Chopper

The  SpreadCycle  (pat.)  chopper  algorithm  is  a  precise  and  simple  to  use  chopper  mode  which automatically  determines  the  optimum  length  for  the  fast-decay  phase.  Several  parameters  are available to optimize the chopper to the application.

Each  chopper  cycle  is  comprised  of  an  on  phase,  a  slow  decay  phase,  a  fast  decay  phase  and  a second slow decay phase (see Figure 7.3). The two slow decay phases and the two blank times per chopper cycle put an upper limit to the chopper frequency. The slow decay phases typically make up for  about  30%-70%  of  the  chopper  cycle  in  standstill  and  are  important  for  low  motor  and  driver power dissipation.

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

It is easiest to find the best setting by starting from a low hysteresis setting (e.g., HSTRT =0, HEND =0) and  increasing  HSTRT,  until  the  motor  runs  smoothly  at  low  velocity  settings.  This  can  best  be checked  when  measuring  the  motor  current  either  with  a  current  probe  or  by  probing  the  sense resistor voltages (see Figure 7.2). Checking the sine wave shape near zero transition will show a small ledge between both half waves in case the hysteresis setting is too small. At medium velocities (i.e., 100 to 400 fullsteps per second), a too low hysteresis setting will lead to increased humming and vibration of the motor.

<!-- image -->

f: 93.07 Hz

Figure  7.2  No  ledges  in  current  wave  with  sufficient  hysteresis  (magenta:  current  A,  yellow  &amp; blue: sense resistor voltages A and B)

A too high hysteresis setting will lead to reduced chopper frequency and increased chopper noise but will not yield any benefit for the wave shape.

```
Quick Start For a quick start, see the Quick Configuration Guide in chapter 13.
```

For detail procedure see Application Note AN001 Parameterization of SpreadCycle

As experiments show, the setting is quite independent of the motor, because higher current motors typically also have a lower coil resistance. Therefore, choosing a low to medium default value for the hysteresis (for example, effective hysteresis = 4) normally fits most applications. The setting can be optimized  by  experimenting  with  the  motor:  A  too  low  setting  will  result  in  reduced  microstep accuracy,  while  a  too  high  setting  will  lead  to  more  chopper  noise  and  motor  power  dissipation. When measuring  the  sense  resistor  voltage  in  motor  standstill  at  a  medium  coil  current  with  an oscilloscope, a too low setting shows a fast decay phase not longer than the blanking time. When the fast decay time becomes slightly longer than the blanking time, the setting is optimum. You can reduce the off-time setting, if this is hard to reach.

The hysteresis principle could in some cases lead to the chopper frequency becoming too low, e.g. when the coil resistance is high when compared to the supply voltage. This is avoided by splitting the  hysteresis  setting  into  a  start  setting  ( HSTRT+HEND )  and  an  end  setting  ( HEND ).  An  automatic hysteresis  decrementer  (HDEC)  interpolates  between  both  settings,  by  decrementing  the  hysteresis value stepwise each 16 system clocks. At the beginning of each chopper cycle, the hysteresis begins with a value which is the sum of the start and the end values ( HSTRT + HEND ), and decrements during the cycle, until either the chopper cycle ends, or the hysteresis end value ( HEND ) is reached. This way, the  chopper  frequency  is  stabilized  at  high  amplitudes  and  low  supply  voltage  situations,  if  the frequency gets too low. This avoids the frequency reaching the audible range.

Figure 7.3 SpreadCycle chopper scheme showing coil current during a chopper cycle

<!-- image -->

Two parameters control SpreadCycle mode:

| Parameter   | Description                                                                                                                                                                                                                                                                               | Setting   | Comment                             |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------|
| HSTRT       | Hysteresis start setting. This value is an offset from the hysteresis end value HEND .                                                                                                                                                                                                    | 0…7       | HSTRT =1…8 This value adds to HEND. |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited. The TMC5031 automatically uses a minimum hysteresis added by analog circuitry. | 0…2       | - 3… -1: negative HEND              |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited. The TMC5031 automatically uses a minimum hysteresis added by analog circuitry. | 3         | 0: zero HEND                        |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited. The TMC5031 automatically uses a minimum hysteresis added by analog circuitry. | 4…15      | 1…12: positive HEND                 |

Even at HSTRT=0 and HEND=0, the TMC5031 sets a minimum hysteresis via analog circuitry.

## Example:

In  the  example  a  hysteresis  of  4  has  been  chosen.  You  might  decide  to  not  use  hysteresis decrement. In this case set:

| HEND =6   | (sets an effective end value of 6-3=3)   |
|-----------|------------------------------------------|
| HSTRT =0  | (sets minimum hysteresis, i.e. 1: 3+1=4) |

In  order  to  take  advantage  of  the  variable  hysteresis,  we  can  set  most  of  the  value  to  the HSTRT, i.e. 4, and the remaining 1 to hysteresis end. The resulting configuration register values are as follows:

HEND =0

(sets an effective end value of -3)

HSTRT =6

(sets an effective start value of hysteresis end +7: 7-3=4)

## Hint

Highest motor velocities sometimes benefit from setting TOFF to 1, 2 or 3 and a short TBL of 1 or 0.

## 7.2 Classic 2-Phase Motor Constant Off Time Chopper

The classic constant off time chopper is an alternative to  SpreadCycle. Perfectly tuned, it also gives good results. The classic constant off time chopper is best when using the high velocity switch to fullstepping option.

The classic constant off-time chopper uses a fixed-time fast decay following each on phase. While the duration of the on phase is determined by the chopper comparator, the fast decay time needs to be long enough for the driver to follow the falling slope of the sine wave, but it should not be so long that  it  causes  excess  motor  current  ripple  and  power  dissipation.  This  can  be  tuned  using  an oscilloscope or evaluating motor smoothness at different velocities. A  good starting value is a fast decay time setting similar to the slow decay time setting.

Figure 7.4 Classic const. off time chopper with offset showing coil current

<!-- image -->

After  tuning  the  fast  decay  time,  the  offset  should  be  tuned  for  a  smooth  zero  crossing.  This  is necessary because the fast decay phase makes the absolute value of the motor current lower than the target current (see Figure 7.5). If the zero offset is too low, the motor stands still for a short moment during current zero crossing. If it is set too high, it makes a larger microstep. Typically, a positive offset setting is required for smoothest operation.

<!-- image -->

<!-- image -->

Target current corrected for optimum shape of coil current

Figure 7.5 Zero crossing with classic chopper and correction using sine wave offset

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

## 7.3 Random Off Time

In the constant off-time chopper mode, both coil choppers run freely without synchronization. The frequency of each chopper mainly depends on the coil current and the motor coil inductance. The inductance varies with the microstep position. With some motors, a slightly audible beat can occur between  the  chopper  frequencies  when  they  are  close  together.  This  typically  occurs  at  a  few microstep positions within each quarter wave. This effect is usually not audible when compared to mechanical noise generated by ball bearings, etc. Another factor which can cause a similar effect is a poor layout of the sense resistor GND connections.

## Hint

A common factor, which can cause motor noise, is a bad PCB layout causing coupling of both sense resistor voltages (please refer layouts hint in chapter 17.3).

To minimize the effect of a beat between both chopper frequencies, an internal random generator is provided.  It  modulates  the  slow  decay  time  setting  when  switched  on  by  the rndtf bit.  The rndtf feature further spreads the chopper spectrum, reducing electromagnetic emission on single frequencies.

| Parameter   | Description                                                                                                             | Setting   | Comment                          |
|-------------|-------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------------|
| rndtf       | This bit switches on a random off time generator, which slightly modulates the off-time TOFF using a random polynomial. | 0 1       | disable random modulation enable |

## 7.4 ChopSync2 for Quiet Motors

While  a  frequency  adaptive  chopper  like  SpreadCycle  provides  excellent  high  velocity  operation,  in some  applications,  a  constant  frequency  chopper  is  preferred  rather  than  a  frequency  adaptive chopper. This may be due to chopper noise in motor standstill, or due to electro-magnetic emission. ChopSync  provides  a  means  to  synchronize  the  choppers  for  both  coils  with  a  common  clock,  by extending the off time of the coils. It integrates with both chopper principles. However, a careful set up of the chopper is necessary, because ChopSync2 can just increment the off times, but not reduce the duration of the chopper cycles themselves. Therefore, it is necessary to test successful operation best  with  an  oscilloscope.  Set  up  the  chopper  as  detailed  above  but  take  care  to  have  chopper frequency  higher  than  the  ChopSync2  frequency.  As  high  motor  velocities  take  advantage  of  the normal,  adaptive  chopper  style,  ChopSync2  becomes  automatically  switched  off  using  the VHIGH velocity limit programmed within the motion controller.

A suitable chopSync2 SYNC value can be calculated as follows:

<!-- formula-not-decoded -->

## Example:

The  motor  is  operated  in  SpreadCycle  mode  ( chm =0).  The  minimum  chopper  frequency  for standstill and slow motion (up to VHIGH ) has been determined to be 25 kHz under worst case operation  conditions  (hot  motor,  low  supply  voltage).  The  standstill  noise  needs  to  be minimized by using ChopSync. The IC uses an external 16 MHz clock.

Considering  the  chopper  mode  0, SYNC has  to  be  set  for  the  closest  value  resulting  in  or below the double frequency, e.g., 50 kHz. Using above formula, a value of 5 results exactly and can be used. Trying a value of 6, a frequency of 41.7 kHz results, which still gives an effective chopper frequency of slightly above 20 kHz, and thus would also be a valid solution. A value of 7 might still be good but could already give high frequency noise.

In  chopper  mode 1, SYNC could  be  set  to  any  value  between  10  and  13  to  be  within  the chopper frequency range of 19.8 kHz to 25 kHz.

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         | Setting   | Comment                    |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------|
| SYNC        | This register allows synchronization of the chopper for both phases of a two-phase motor in order to avoid the occurrence of a beat, especially at low motor velocities. It is automatically switched off above VHIGH . Hint: Set TOFF to a low value, so that the chopper cycle is ended before the next sync clock pulse occurs. Set SYNC for the double desired chopper frequency for chm =0, for the desired base chopper frequency for chm =1. | 0         | ChopSync off               |
| SYNC        | This register allows synchronization of the chopper for both phases of a two-phase motor in order to avoid the occurrence of a beat, especially at low motor velocities. It is automatically switched off above VHIGH . Hint: Set TOFF to a low value, so that the chopper cycle is ended before the next sync clock pulse occurs. Set SYNC for the double desired chopper frequency for chm =0, for the desired base chopper frequency for chm =1. | 1…15      | f CLK /64 … f CLK /(15*64) |

## 8 Driver Diagnostic Flags

The TMC5031 drivers supply a complete set of diagnostic and protection capabilities, like short to GND protection  and  undervoltage  detection.  A  detection  of  an  open  load  condition  allows  testing  if  a motor coil connection is interrupted. See the DRV\_STATUS table for details.

## 8.1 Temperature Measurement

The driver integrates a two-level temperature sensor (120°C pre-warning and 150°C thermal shutdown) for  diagnostics  and  for  protection  of  the  IC  against  excess  heat.  Heat  is  mainly  generated  by  the motor  driver  stages,  and,  at  increased  voltage,  by  the  internal  voltage  regulator.  Most  critical situations, where the driver MOSFETs could be overheated, are avoided when enabling the short to GND protection.  For  many  applications,  the  overtemperature  pre-warning  will  indicate  an  abnormal operation situation and can be used to initiate user warning or power reduction measures like motor current reduction. The thermal shutdown is just an emergency measure and temperature rising to the shutdown level should be prevented by design.

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the pre-warning level ( otpw ) to avoid continuous heating to the shutdown level.

## 8.2 Short to GND Protection

The TMC5031 power stages are protected against a short circuit condition by an additional measurement of the current flowing through the high-side MOSFETs. This is important, as most short circuit conditions  result  from  a  motor  cable  insulation  defect,  e.g.,  when  touching  the  conducting  parts connected to the system ground. The short detection is protected against spurious triggering, e.g., by ESD discharges, by retrying three times before switching off the motor.

Once a short condition is safely detected, the corresponding driver bridge becomes switched off, and the s2ga or s2gb flag becomes set. To restart the motor, the user must intervene by disabling and reenabling the driver. It should be noted, that the short to GND protection cannot protect the system and  the  power  stages  for  all  possible  short  events,  as  a  short  event  is  rather  undefined,  and  a complex network of external components may be involved. Therefore, short circuits should basically be avoided.

## 8.3 Open Load Diagnostics

Interrupted  cables  are  a  common  cause  for  systems  failing,  e.g.,  when  connectors  are  not  firmly plugged. The TMC5031 detects open load conditions by checking if it can reach the desired motor coil current. This way, also undervoltage conditions, high motor  velocity settings or short  and overtemperature  conditions  may  cause  triggering  of  the  open  load  flag,  and  inform  the  user,  that motor torque  may  suffer.  In  motor  stand  still,  open  load  cannot  be  measured,  as  the  coils  might eventually have zero current.

Open load detection is provided for system debugging.

To safely detect an interrupted coil connection, operate in SpreadCyle, and check the open load flags following a motion of minimum four times the selected microstep resolution into a single direction using  low  or  nominal  motor  velocity  operation,  only.  However,  the ola and olb flags  have  just informative character and do not cause any action of the driver.

## 9 Ramp Generator

The  ramp  generator  allows  motion  based  on  target  position  or  target  velocity.  It  automatically calculates  the  optimum  motion  profile  taking  into  account  acceleration  and  velocity  settings.  The TMC5031 integrates a new type of ramp generator, which offers faster machine operation compared to the classical linear acceleration ramps. The SixPoint ramp generator allows adapting the acceleration ramps to the torque curves of a stepper motor and uses two different acceleration settings each for the acceleration phase and for the deceleration phase. See Figure 9.2.

## 9.1 Real World Unit Conversion

The TMC5031 uses its internal or external clock signal as a time reference for all internal operations. Thus,  all  time,  velocity  and  acceleration  settings  are  referenced  to  fCLK.  For  best  stability  and reproducibility, it is recommended to use an external quartz oscillator as a time base, or to provide a clock signal from a microcontroller.

The units of a TMC5031 register content are written as register[5031].

| PARAMETER VS. UNITS         | PARAMETER VS. UNITS   | PARAMETER VS. UNITS                                                                                               |
|-----------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------|
| Parameter / Symbol          | Unit                  | calculation / description / comment                                                                               |
| f CLK [Hz]                  | [Hz]                  | clock frequency of the TMC5031 in [Hz]                                                                            |
| s                           | [s]                   | second                                                                                                            |
| US                          | µstep                 |                                                                                                                   |
| FS                          | fullstep              |                                                                                                                   |
| µstep velocity v[Hz]        | µsteps / s            | v[Hz] = v[5031] * ( f CLK [Hz]/2 / 2^23 )                                                                         |
| µstep acceleration a[Hz/s]  | µsteps / s^2          | a[Hz/s] = a[5031] * f CLK [Hz]^2 / (512*256) / 2^24                                                               |
| USC microstep count         | counts                | microstep resolution in number of microsteps (i.e. the number of microsteps between two fullsteps - normally 256) |
| rotations per second v[rps] | rotations / s         | v[rps] = v[µsteps/s] / USC / FSC FSC: motor fullsteps per rotation, e.g. 200                                      |
| rps acceleration a[rps/s^2] | rotations / s^2       | a[rps/s^2] = a[µsteps/s^2] / USC / FSC                                                                            |
| ramp steps[µsteps] = rs     | µsteps                | rs = (v[5031])^2 / a[5031] / 2^8 microsteps during linear acceleration ramp (assuming acceleration from 0 to v)   |

Quick Start

For a quick start, see the Quick Configuration Guide in chapter 13.

## 9.2 Motion Profiles

For the ramp generator register set, please refer to the chapter 0.

## 9.2.1 Ramp Mode

The  ramp  generator  delivers  two  phase  acceleration  and  two-phase  deceleration  ramps  with additional programmable start and stop velocities (see Figure 9.1).

## Note

The start velocity can be set to zero, if not used.

The stop velocity can be set to ten (or down to one), if not used.

Take  care  to  always  set VSTOP identical  to  or  above VSTART .  This  ensures  that  even  a  short motion can be terminated successfully at the target position.

The two different sets of acceleration and deceleration can be combined freely. A common transition speed  V1  allows  for  velocity  dependent  switching  between  both  acceleration  and  deceleration settings . A typical use case will use lower acceleration and deceleration values at higher velocities, as the motors torque declines at higher velocity. When considering friction in the system, it becomes clear, that typically deceleration of the system is quicker than acceleration. Thus, deceleration values can  be  higher  in  many  applications.  This  way,  operation  speed  of  the  motor  in  time  critical applications can be maximized.

As target positions and ramp parameters may be changed any time during the motion, the motion controller  will  always  use  the  optimum  (fastest)  way  to  reach  the  target,  while  sticking  to  the constraints  set  by  the  user.  This  way  it  might  happen,  that  the  motion  becomes  automatically stopped, crosses zero and drives back again. This case is flagged by the special flag second\_move.

## 9.2.2 Start and Stop Velocity

When using increased levels of start- and stop velocity, it becomes clear, that a subsequent move into the opposite direction would provide a jerk identical to VSTART + VSTOP ,  rather than only VSTART . As the motor probably is not able to follow this, you can set a time delay for a subsequent move by setting TZEROWAIT .  An  active  delay  time  is  flagged  by  the  flag t\_zerowait\_active .  Once  the  target position is reached, the flag position\_reached becomes active.

Figure 9.1 Ramp generator velocity trace showing consequent move in negative direction

<!-- image -->

Figure 9.2 Illustration of optimized motor torque usage with TMC5031 ramp generator

<!-- image -->

## 9.2.3 Velocity Mode

For the ease of use, velocity mode movements do not use the different acceleration and deceleration settings. You need to set VMAX and AMAX only for velocity mode. The ramp generator always uses AMAX to accelerate or decelerate to VMAX in this mode.

To  decelerate  the  motor  to  stand  still,  it  is  sufficient  to  set VMAX to  zero.  The  flag vzero signals standstill  of  the  motor.  The  flag velocity\_reached always  signals,  that  the  target  velocity  has  been reached.

Please see chapter 9.6 for a known restriction of the velocity mode.

## 9.3 Interrupt Handling

The motion controllers provide the capability to issue an interrupt to the microcontroller, e.g., to react on a position reached event. In case more than one interrupt source is possible, it is necessary to carefully check for the actual event, without risking losing an event.

## INTERRUPT HANDLING FOR 2 AXIS (EXAMPLE FOR POSITION\_REACHED):

1. Read RAMP\_STAT1 to clear the interrupt flags. This will turn off the interrupt source.
2. Check XACTUAL1 for reaching of the target position (and any other conditions you want to check for ramp 1).
3. Do the same for RAMP\_STAT2 and XACTUAL2

.

This way, you are sure that you will not miss any position\_reached condition, because you first clear the flags, and afterwards read out the condition.

## 9.4 Velocity Thresholds

The ramp generator provides a number of velocity thresholds coupled to the actual velocity VACTUAL . The  different  ranges  allow  programming  the  motor  to  the  optimum  step  mode,  coil  current  and acceleration settings.

Figure 9.3 Ramp generator velocity dependent motor control

<!-- image -->

## Note

Since it is not necessary to differentiate the velocity to the last detail, the velocity thresholds use a reduced  number  of  bits  for  comparison  and  the  lower  eight  bits  of  the  compare  values  become ignored.

## 9.5 Reference Switches

Prior  to  normal  operation  of  the  drive  an  absolute  reference  position  must  be  set.  The  reference position  can  be  found  using  a  mechanical  stop  which  can  be  detected  by  stall  detection,  or  by  a reference switch.

In case of a linear drive, the mechanical motion range must not be left. This can be ensured also for abnormal situations by enabling the stop switch functions for the left and the right reference switch. Therefore, the ramp generator responds to a number of stop events as configured in the SW\_MODE register. There are two ways to stop the motor:

- -it can be stopped abruptly when a switch is hit. This is useful in an emergency case and for StallGuard based homing.
- -Or the motor can be softly decelerated to zero using deceleration settings ( DMAX , V1 , D1 ).

## Hint

Latching of the ramp position XACTUAL to the holding register XLATCH upon a switch event gives a precise snapshot of the position of the reference switch.

Figure 9.4 Using reference switches (example)

<!-- image -->

Normally  open  or  normally  closed  switches  can  be  used  by  programming  the  switch  polarity  or selecting  the  pull-up  or  pull-down  resistor  configuration.  A  normally  closed  switch  is  failsafe  with respect to an interrupt of the switch connection. Switches which can be used are:

- -mechanical switches,
- -photo interrupters, or
- -hall sensors.

Be careful to select reference switch resistors matching your switch requirements! In case of long cables additional RC filtering might be required near the TMC5031 reference inputs. Adding an RC filter will also reduce the danger of destroying the logic level inputs by wiring faults, but it will add a certain delay which should be considered with respect to the application.

## IMPLEMENTING A HOMING PROCEDURE

1. Make sure, that the home switch is not pressed, e.g., by moving away from the switch.
2. Activate  position  latching  upon  the  desired  switch  event  and  activate  motor  (soft)  stop  upon active switch. StallGuard based homing requires using a hard stop ( en\_softstop =0).
3. Start a motion ramp into the direction of the switch. (Move to a more negative position for a left switch, to a more positive position for a right switch). You may timeout this motion by using a position ramping command.
4. As soon as the switch is hit, the position becomes latched, and the motor is stopped. Wait until the motor is in standstill again by polling the actual velocity VACTUAL or checking vzero or the standstill flag. Please be aware that reading RAMP\_STAT may clear flags (e.g., sg\_stop ) and thus the motor may restart after expiration of TZEROWAIT . In case the stop condition might be reset

- by the read and clear (R+C) function, be sure to execute step 5 within the time range set by TZEROWAIT .
5. Switch  the  ramp  generator  to  hold  mode  and  calculate  the  difference  between  the  latched position and the actual position. For StallGuard based homing or when using hard stop, XACTUAL stops exactly at the home position, so there is no difference (0).
6. Write the calculated difference into the actual position register. Now, homing is finished. A move to  position  0  will  bring  back  the  motor  exactly  to  the  switching  point.  In  case  StallGuard  was used for homing, a read access to RAMP\_STAT clears the StallGuard stop event event\_stop\_sg and releases the motor from the stop condition.

## 9.6 Restrictions of Ramp Generator (Errata)

When the TMC5031 becomes stopped in velocity mode, there is an irregularity of the position counter failing and counting continuously with clock frequency until the next move is commanded.

## Failure condition:

1. Motor is moving in velocity mode
2. Master sets VMAX =0 to stop the motion
3. Upon reaching of VACTUAL =0, the position counter may start counting with clock frequency (The deterministically probability for this behavior occurring is about 1/16 Million.)

In this situation the motor is correctly in standstill and also the ramp state reports the motor to be stopped.  When  starting  the  motor  again,  the  position  counter  continues  from  the  new  (wrong) position. This behavior leads to a loss of the synchronization between the position counter and the motor position.

## Background:

The  restriction  is  caused  by  a  failure  state,  which  involves  the  state  of  the  internal  velocity  pulse generator and the actual point of time, when the velocity becomes zero. When the velocity VACTUAL becomes decreased from one to zero with the 24-bit ramp generator register in a certain state, the XACTUAL position counter gets to a state where it counts up despite the velocity now being zero. This can occur in velocity mode only, because in this mode the internal change of the velocity register is not coupled to an advance in the actual position. The statistical probability for the occurrence of the failure  is  given  by  the  combination  of  2^24  (i.e.,  16M)  possible  states  of  the  accumulation  register, with one of the states leading to a failure. If the one state of the accumulation register, which leads to an overflow of the register in case of an accumulation of the last velocity value (1) before reaching zero  occurs  at  exactly  the  same  moment  where  the  velocity  actually  goes  to  zero,  the XACTUAL counter gets caught in an endless loop.

## Hint

These issues have been solved in the pin-compatible TMC5041.

## 9.6.1 Velocity Mode Workaround

There  are  two  alternatives  for  a  workaround.  The  first  workaround  is  recommended  for  most applications which require the use of velocity mode. Therefore, the application software must allow polling a register on a deterministic, regular time interval. The second workaround has less real time relevance, as it just requires a read-modify-write instruction to execute within limited time.

## First Software Workaround for Applications Using Velocity Mode Intensively

The velocity mode can be used, but to stop the motor, do not directly set VMAX =0.

Workaround for stopping the motor:

1. Set VMAX to a low velocity, in the range 1 to 2000 (e.g. 100). Even if VMAX has been lower before, this ensures a quick termination of the stop procedure. Exit the stop procedure in case VMAX already had been set to 0 before (motor is stopped).

2. Check the velocity\_reached flag to become active. Alternatively, check if the absolute value of VACTUAL is at or below the value selected for step 1.
3. Poll XACTUAL until a new step has been executed (i.e., XACTUAL has changed) (with VMAX =100 this will need at maximum about 10ms, with VMAX =1000, about 1ms) (*)
4. Set AMAX to 65535 (0xFFFF) and set VMAX to zero to finally stop the motor. This will stop the motor within a few microseconds.
5. Wait until the motor is actually stopped ( vzero flag active) before starting a new motion. Remember to set AMAX back to the original value before starting the next motion.

Step (3.) and (4.) are time critical:

Make sure that the delay between detection of the step execution by reading XACTUAL and setting VMAX =0 is significantly lower than the time between each two steps. No additional step shall be executed between (3.) and (4.). For example, when XACTUAL can be checked once each 5ms, use a step frequency of max. 100Hz (10ms) for VMAX in step (1.). You can test the procedure by checking that no further position change has been executed until step 5.

Do not switch between RAMPMODE 1  and  2  (velocity  in  positive  direction  and  velocity  in  negative direction), without stopping the motion as described above before changing the direction.

## Second Software Workaround Avoiding Velocity Mode

Operate the device in positioning mode instead of velocity mode.

Use a target position far away to simulate a velocity mode movement, e.g. XTARGET := XACTUAL +2^30 to yield  a  positive  motion  direction,  or XTARGET := XACTUAL2^30  for  a  negative  direction.  A  smaller increment down to the span of the deceleration ramp also can be used, depending on how often the procedure is called. The target position this way can be increased in regular intervals in order to have an infinite running (even longer than the 32 bit position range).

In  order  to  stop  the  motor,  cease  incrementing XTARGET .  The  motor  will  continue  turning  and decelerate in time to stop as commanded by the last increment.

To stop the motor at the next possible position:

1. Set VMAX to a low velocity, in the range of minimum equal to VSTOP or up to about 1000 (e.g. 100). Depending on the speed of execution of step 4 (mostly limited by communication between MCU and TMC), higher values can be chosen to speed up the motor stop process.
2. Check the velocity\_reached flag to become active. In case the position\_reached flag becomes active, exit the procedure as the motion has finished normally.
3. Read out XACTUAL. For a motion in positive direction, increase it by 2 (or more, e.g. 10 or 100, if desired), and write it to XTARGET , for a motion in negative direction, decrease it accordingly. Increase VSTOP to the same value which was selected for VMAX in step 1. This will stop the motor within two steps (or 10, or 100) of the write access to XTARGET . (with VMAX =100 this will need at maximum about 10-20ms, with VMAX =1000, about 1-2ms)
4. Wait until the motor is actually stopped ( vzero flag active) before starting a new motion. Remember to set VSTOP and VMAX back to the original values before starting the next positioning move.

The read-modify-write access in step (3.) is time critical: Make sure that the delay between reading XACTUAL and writing to XTARGET and VSTOP is significantly lower than the time required doing the remaining 2 steps (or more, as decided for the increment in step (3.)). Otherwise, the motor might  reverse  before  stopping).  With VSTOP =10,  the  remaining  motion  ramp  will  need  about 200ms (*), with VSTOP =100 it will need about 20ms.

(*) The time delays given relate to a clock frequency of about 16MHz. At 12MHz they are 25% longer.

## Optional Detection and Correction

This  option  risks  the  occurrence  of  the  error  and  detects  and  corrects  it.  The  irregularity  of  the position counter can easily be detected by reading the counter twice whenever the motor is brought to  standstill  (VZERO  flag  set).  In  case,  two  subsequent  read  accesses  of XACTUAL show  a  different result during standstill, the position is lost. Trigger a new homing sequence.

This solution will work well for applications with a low sequence of motion tasks, which allow doing a new homing sequence. In case only one critical motion command per minute is issued, the mean time to failure and automatic correction will be &gt; 10 years.

## 9.6.2 TZEROWAIT and VSTART Restriction

This restriction applies in case that positioning mode is used with alternation of target-positions onthe-fly, i.e., when a reversal of the motion direction can occur due to a change of the target position, while the motor is moving.

In this case, set TZEROWAIT =0.  Set VSTART to  minimum 1 (or to a higher value) and VSTOP to  the lowest value usable for the application, e.g. 2.

Hint: Take care, that VSTOP is always required to be higher than VSTART , i.e. VSTOP must be minimum 2.

## 9.6.3 Stop Switch Handling Restriction

In  case  a  stop  switch  is  used  for  homing  in  conjunction  with  the  automatic  motor  stop ( stop\_l\_enable =1 or stop\_r\_enable =1), a soft stop shall be used (set en\_softstop =1). Set the deceleration parameters to the desired value.

Hint: In any case, a homing requires use of the soft stop, as a hard stop might lead to motor step loss. When reaching the reference switch, use the automatic position latch register in order to have an exact reference of where the stop switch became active.

Use hard stop only for emergency stop. After a hard stop, initiate a new homing sequence, because position might be lost.

Hint: There is no  restriction of using  a hard stop in conjunction  with  StallGuard2 ( sg\_stop =1).  Hard stop should be used with StallGuard in any case, as a stall event means, that the motor is forced into stop.

## 9.7 Ramp Generator Response Time

The ramp generator is realized in hardware and executes commands within less than a microsecond, switching over to the desired mode and target values taking effect. The velocity accumulator updates the  velocities  each  512  clock  cycles,  based  on  the  actual  acceleration  setting,  to  give  a  smooth acceleration.  However,  at  low  motion  velocities  and  low  acceleration  settings,  e.g.,  at  the  start  of positioning ramp (VSTART) or it's stop (VSTOP), the actual step pulse rate is very low. Therefore, a significant  delay  can  add  for  execution  of  the  first  and  last  steps,  as  determined  by  the  selected microstep velocity. For example, a microstep velocity of 10Hz means, that 100ms expire in between of each two steps. As (at least a part) of the last microstep of a ramp is executed with a velocity equal to  VSTOP,  this  can  cause  significant  delay  to  reach  the  target  position.  Set  VSTOP  in  a  range  of minimum 100 to 1000 for quick ramp termination (100 yields roughly &lt;10ms).

## 10 StallGuard2 Load Measurement

StallGuard2  provides  an  accurate  measurement  of  the  load  on  the  motor.  It  can  be  used  for  stall detection as well as other uses at loads below those which stall the motor, such as CoolStep loadadaptive current reduction. The StallGuard2 measurement value changes linearly over a wide range of load, velocity, and current settings, as shown in Figure 10.1. At maximum motor load, the value goes to zero or near to zero. This corresponds to a load angle of 90° between the magnetic field of the coils and magnets in the rotor. This also is the most energy-efficient point of operation for the motor.

<!-- image -->

Figure 10.1 Function principle of StallGuard2

| Parameter   | Description                                                                                                                                                                                                                                                                                                                     | Setting   | Comment                                                    |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|------------------------------------------------------------|
| SGT         | This signed value controls the StallGuard2 threshold level for stall detection and sets the optimum measurement range for readout. A lower value gives a higher sensitivity. Zero is the starting value working with most motors. A higher value makes StallGuard2 less sensitive and requires more torque to indicate a stall. | 0         | indifferent value                                          |
| SGT         | This signed value controls the StallGuard2 threshold level for stall detection and sets the optimum measurement range for readout. A lower value gives a higher sensitivity. Zero is the starting value working with most motors. A higher value makes StallGuard2 less sensitive and requires more torque to indicate a stall. | +1… +63   | less sensitivity                                           |
| SGT         | This signed value controls the StallGuard2 threshold level for stall detection and sets the optimum measurement range for readout. A lower value gives a higher sensitivity. Zero is the starting value working with most motors. A higher value makes StallGuard2 less sensitive and requires more torque to indicate a stall. | - 1… -64  | higher sensitivity                                         |
| sfilt       | Enables the StallGuard2 filter for more precision of the measurement. If set, reduces the measurement frequency to one measurement per electrical period of the motor (4 fullsteps).                                                                                                                                            | 0         | standard mode                                              |
| sfilt       | Enables the StallGuard2 filter for more precision of the measurement. If set, reduces the measurement frequency to one measurement per electrical period of the motor (4 fullsteps).                                                                                                                                            | 1         | filtered mode                                              |
| Status word | Description                                                                                                                                                                                                                                                                                                                     | Range     | Comment                                                    |
| SG          | This is the StallGuard2 result . A higher reading indicates less mechanical load. A lower reading indicates a higher load and thus a higher load angle. Tune the SGT setting to show a SG reading of roughly 0 to 100 at maximum load before motor stall.                                                                       | 0… 1023   | 0: highest load low value: high load high value: less load |

## Attention

To  use  StallGuard2  and  CoolStep,  the  StallGuard2  sensitivity  should  first  be  tuned  using  the  SGT setting!

## 10.1 Tuning the StallGuard2 Threshold SGT

The StallGuard2 value SG is affected by motor-specific characteristics and application-specific demands on load and velocity. Therefore, the easiest way to tune the StallGuard2 threshold SGT for a specific motor type and operating conditions is interactive tuning in the actual application.

## INITIAL PROCEDURE FOR TUNING STALLGUARD SGT

1. Operate the motor at the normal operation velocity for your application and monitor SG .
2. Apply slowly increasing mechanical load to the motor. If the motor stalls before SG reaches zero, decrease SGT . If SG reaches zero before the motor stalls, increase SGT . A good SGT starting value is zero. SGT is signed, so it can have negative or positive values.
3. Now  enable sg\_stop and  make  sure,  that  the  motor  is  safely  stopped  whenever  it  is  stalled. Increase SGT if the motor becomes stopped before a stall occurs. Restart the motor by disabling sg\_stop or by reading the RAMP\_STAT register (read and clear function).
4. The optimum setting is reached when SG is between 0 and roughly 100 at increasing load shortly before the motor stalls, and SG increases by 100 or more without load. SGT in most cases can be tuned for a certain motion velocity or a velocity range. Make sure, that the setting works reliable in  a  certain  range  (e.g.,  80%  to  120%  of  desired  velocity)  and  also  under  extreme  motor conditions (lowest and highest applicable temperature).

## OPTIONAL PROCEDURE ALLOWING AUTOMATIC TUNING OF SGT

The basic idea behind the SGT setting is a factor, which compensates the StallGuard measurement for resistive losses inside the motor. At standstill and very low velocities, resistive losses are the main factor for the balance of energy in the motor, because mechanical power is zero or near to zero. This way, SGT can be set to an optimum at near zero velocity. This algorithm is especially useful for tuning SGT  within  the  application  to  give  the  best  result  independent  of  environment  conditions,  motor stray, etc.

1. Operate the motor at low velocity &lt; 10 RPM (i.e., a few to a few fullsteps per second) and target operation current and supply voltage. In this velocity range, there is not much dependence of SG on  the  motor  load,  because  the  motor  does  not  generate  significant  back  EMF.  Therefore, mechanical load will not make a big difference on the result.
2. Switch on sfilt . Now increase SGT starting from 0 to a value, where SG starts rising. With a high SGT, SG will rise up to the maximum value. Reduce again to the highest value, where SG stays at 0.  Now  the  SGT  value  is  set  as  sensibly  as  possible.  When  you  see  SG  increasing  at  higher velocities, there will be useful stall detection.

The upper velocity for the stall detection with this setting is determined by the velocity,  where the motor back EMF approaches the supply voltage, and the motor current starts dropping when further increasing velocity.

SG goes  to  zero  when  the  motor  stalls  and  the  ramp  generator  can  be  programmed  to  stop  the motor upon a stall event by enabling sg\_stop in SW\_MODE .  Monitor VACTUAL to  exceed  the  lower velocity threshold where StallGuard delivers a good result and enable sg\_stop during this time only.

The  system  clock  frequency  affects SG .  An  external  crystal-stabilized  clock  should  be  used  for applications  that  demand  the  highest  performance.  The  power  supply  voltage  also  affects SG ,  so tighter regulation results in more accurate values. SG measurement has a high resolution, and there are a few ways to enhance its accuracy, as described in the following sections.

Quick Start For a quick start, see the Quick Configuration Guide in chapter 13.

For detail procedure see Application Note AN002 Parameterization of StallGuard2 &amp; CoolStep

## 10.1.1 Variable Velocity Operation

The SGT setting chosen as a result of the previously described SGT tuning can be used for a certain velocity range. Outside this range, a stall may not be detected safely, and CoolStep might not give the optimum result.

Figure 10.2 Example: Optimum SGT setting and StallGuard2 reading with an example motor

<!-- image -->

In many applications, operation at or near a single operation point is used most of the time and a single setting is sufficient. The ramp generator provides a lower ( VCOOLTHRS ) and an upper velocity threshold ( VHIGH ) to match this. The stall detection is automatically disabled outside the determined operation  point,  e.g.,  during  acceleration  phases  preceding  a  sensorless  homing  procedure  when setting VCOOLTHRS to a matching value. An upper limit can be specified by VHIGH .

In some applications, a velocity dependent tuning of the SGT value can be expedient, using a small number of support points and linear interpolation.

## 10.1.2 Small Motors with High Torque Ripple and Resonance

Motors with a high detent torque show an increased variation of the StallGuard2 measurement value SG with varying motor currents, especially at low currents. For these motors, the current dependency should be checked for best result.

## 10.1.3 Temperature Dependence of Motor Coil Resistance

Motors working over a wide temperature range may require temperature correction, because motor coil resistance increases with rising temperature. This can be corrected as a linear reduction of SG at increasing temperature, as motor efficiency is reduced.

## 10.1.4 Accuracy and Reproducibility of StallGuard2 Measurement

In a production environment, it may be desirable to use a fixed SGT value within an application for one motor type. Most of the unit-to-unit variation in StallGuard2 measurements results from manufacturing tolerances in motor construction. The measurement error of StallGuard2 -provided that all other parameters remain stable -can be as low as:

𝑠𝑡𝑎𝑙𝑙𝐺𝑢𝑎𝑟𝑑 𝑚𝑒𝑎𝑠𝑢𝑟𝑒𝑚𝑒𝑛𝑡 𝑒𝑟𝑟𝑜𝑟 = ±𝑚𝑎𝑥(1, |𝑆𝐺𝑇|)

## 10.2 StallGuard2 Update Rate and Filter

The StallGuard2 measurement value SG is updated with each full step of the motor. This is enough to safely detect a stall because a stall always means the loss of four full steps. In a practical application, especially  when  using  CoolStep,  a  more  precise  measurement  might  be  more  important  than  an update for each fullstep because the mechanical load never changes instantaneously from one step to the next. For these applications, the sfilt bit enables a filtering function over four load measurements. The filter should always be enabled when high-precision measurement is required. It compensates for variations  in  motor  construction,  for  example  due  to  misalignment  of  the  phase  A  to  phase  B magnets. The filter should only be disabled when rapid response to increasing load is required, such as for stall detection at high velocity.

## 10.3 Detecting a Motor Stall

For best stall detection, work without StallGuard filtering ( sfilt =0). To safely detect a motor stall the stall threshold must be determined using a specific SGT setting. Therefore, the maximum load needs to be determined, which the motor can drive without stalling. At the same time, monitor the SG value at this load, e.g., some value within the range 0 to 100. The stall threshold should be a value safely within the operating limits, to allow for parameter stray. The response at an SGT setting at or near 0 gives some idea on the quality of the signal: Check the SG value without load and with maximum load. They should show a difference of at least 100 or a few 100, which shall be large compared to the offset. If you set the SGT value in a way, that a reading of 0 occurs at maximum motor load, the stall can be automatically detected by the motion controller to issue a motor stop. In the moment of the step resulting in a step loss, the lowest reading will be visible. After the step loss, the motor will vibrate and show a higher SG reading.

## 10.4 Homing with StallGuard

The  homing  of  a  linear  drive  requires  moving  the  motor  into  the  direction  of  a  hard  stop.  As StallGuard needs a certain velocity to work (as set by VCOOLTHRS ), make sure that the start point is far enough away from the hard stop to provide the distance required for the acceleration phase. After setting up SGT and the ramp generator registers, start a motion into the direction of the hard stop and activate the stop on stall function (set sg\_stop in SW\_MODE ). Once a stall is detected, the ramp generator  stops  motion  and  sets VACTUAL zero,  stopping  the  motor.  The  stop  condition  also  is indicated by the flag StallGuard in DRV\_STATUS . After setting up new motion parameters to prevent the motor from restarting right away, StallGuard can be disabled, or the motor can be re-enabled by reading RAMP\_STAT . The read and clear function of the event\_stop\_sg flag in RAMP\_STAT would restart the motor after expiration of TZEROWAIT in case the motion parameters have not been modified.

## 10.5 Limits of StallGuard2 Operation

StallGuard2 does not operate reliably at extreme motor velocities: Very low motor velocities (for many motors, less than one revolution per second) generate a low back EMF and make the measurement unstable  and  dependent  on  environment  conditions  (temperature,  etc.).  The  automatic  tuning procedure  described  above  will  compensate  for  this.  Other  conditions  will  also  lead  to  extreme settings of SGT and poor response of the measurement value SG to the motor load.

Very high motor velocities, in which the full sinusoidal current is not driven into the motor coils also leads to poor response. These velocities are typically characterized by the motor back EMF reaching the supply voltage.

## 11 CoolStep Operation

CoolStep  is  an  automatic  smart  energy  optimization  for  stepper  motors  based  on  the  motor mechanical load, making them 'green'.

## 11.1 User Benefits

<!-- image -->

Energy efficiency Motor generates less heat Less cooling infrastructure Cheaper motor

- -consumption decreased up to 75%
- -improved mechanical precision
- -for motor and driver
- -does the job!

CoolStep allows substantial energy savings, especially for motors which see varying loads or operate at a high duty cycle. Because a stepper motor application needs to work with a torque reserve of 30% to  50%,  even  a  constant-load  application  allows  significant  energy  savings  because  CoolStep automatically enables torque reserve when required. Reducing power consumption keeps the system cooler, increases motor life, and allows reducing cost in the power supply and cooling components.

Reducing motor current by half results in reducing power by a factor of four.

## 11.2 Setting up for CoolStep

CoolStep is controlled by several parameters, but two are critical for understanding how it works:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                             | Range   | Comment                             |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------------------------------------|
| SEMIN       | 4-bit unsigned integer that sets a lower threshold . If SG goes below this threshold, CoolStep increases the current to both coils. The 4-bit SEMIN value is scaled by 32 to cover the lower half of the range of the 10-bit SG value. (The name of this parameter is derived from smartEnergy, which is an earlier name for CoolStep.) | 0       | disable CoolStep                    |
| SEMIN       | 4-bit unsigned integer that sets a lower threshold . If SG goes below this threshold, CoolStep increases the current to both coils. The 4-bit SEMIN value is scaled by 32 to cover the lower half of the range of the 10-bit SG value. (The name of this parameter is derived from smartEnergy, which is an earlier name for CoolStep.) | 1…15    | threshold is SEMIN *32              |
| SEMAX       | 4-bit unsigned integer that controls an upper threshold . If SG is sampled equal to or above this threshold enough times, CoolStep decreases the current to both coils. The upper threshold is ( SEMIN + SEMAX + 1)*32.                                                                                                                 | 0…15    | threshold is ( SEMIN + SEMAX +1)*32 |

Figure 11.1 shows the operating regions of CoolStep:

- -The black line represents the SG measurement value.
- -The blue line represents the mechanical load applied to the motor.
- -The red line represents the current into the motor coils.

When the load increases, SG falls below SEMIN ,  and CoolStep increases the current. When the load decreases, SG rises above ( SEMIN + SEMAX + 1) * 32, and the current is reduced.

Figure 11.1 CoolStep adapts motor current to the load

<!-- image -->

Five more parameters control CoolStep and one status value is returned:

| Parameter   | Description                                                                                                                                                                                                                                                                                        | Range   | Comment                                                            |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------|
| SEUP        | Sets the current increment step . The current becomes incremented for each measured StallGuard2 value below the lower threshold.                                                                                                                                                                   | 0…3     | step width is 1, 2, 4, 8                                           |
| SEDN        | Sets the number of StallGuard2 readings above the upper threshold necessary for each current decrement of the motor current.                                                                                                                                                                       | 0…3     | number of StallGuard2 measurements per decrement: 32, 8, 2, 1      |
| SEIMIN      | Sets the lower motor current limit for CoolStep operation by scaling the IRUN current setting.                                                                                                                                                                                                     | 0 1     | 0: 1/2 of IRUN 1: 1/4 of IRUN                                      |
| VCOOL THRS  | Lower ramp generator velocity threshold. Below this velocity CoolStep becomes disabled. Adapt to the lower limit of the velocity range where StallGuard2 gives a stable result. Hint: May be adapted to disable CoolStep during acceleration and deceleration phase by setting identical to VMAX . | 1… 2^23 |                                                                    |
| VHIGH       | Upper ramp generator velocity threshold value. Above this velocity CoolStep becomes disabled. Adapt to the velocity range where StallGuard2 gives a stable result.                                                                                                                                 | 1… 2^23 | Also controls additional functions like switching to fullstepping. |
| Status word | Description                                                                                                                                                                                                                                                                                        | Range   | Comment                                                            |
| CSACTUAL    | This status value provides the actual motor current scale as controlled by CoolStep. The value goes up to the IRUN value and down to the portion of IRUN as specified by SEIMIN .                                                                                                                  | 0…31    | 1/32, 2/32, … 32/32                                                |

## 11.3 Tuning CoolStep

Before tuning CoolStep, first tune the StallGuard2 threshold level SGT , which affects the range of the load measurement value SG . CoolStep uses SG to operate the motor near the optimum load angle of +90°.

The current  increment  speed  is  specified  in SEUP ,  and  the  current  decrement  speed  is  specified  in SEDN .  They  can  be  tuned  separately  because  they  are  triggered  by  different  events  that  may  need different responses. The encodings for these parameters allow the coil currents to be increased much more quickly than decreased, because crossing the lower threshold is a more serious event that may require  a  faster  response.  If  the  response  is  too  slow,  the  motor  may  stall.  In  contrast,  a  slow response  to  crossing  the  upper  threshold  does  not  risk  anything  more  serious  than  missing  an opportunity to save power.

CoolStep operates between limits controlled by the current scale parameter IRUN and the seimin bit.

## 11.3.1 Response Time

For fast response to increasing motor load, use a high current increment step SEUP . If the motor load changes slowly, a lower current increment step can be used to avoid motor oscillations. If the filter controlled by sfilt is enabled, the measurement rate and regulation speed are cut by a factor of four.

## Hint

The most common and most beneficial use is to adapt CoolStep for operation at the typical system target operation velocity and  to set the velocity thresholds according. As acceleration  and decelerations normally shall be quick, they will require the full motor current, while they have only a small contribution to overall power consumption due to their short duration.

## 11.3.2 Low Velocity and Standby Operation

Because CoolStep is not able to measure the motor load in standstill and at very low RPM, a lower velocity  threshold  is  provided  in  the  ramp  generator.  It  should  be  set  to  an  application  specific default value. Below this threshold the normal current setting via IRUN respectively IHOLD is valid. An upper  threshold  is  provided  by  the VHIGH setting.  Both  thresholds  can  be  set  as  a  result  of  the StallGuard2 tuning process.

## 12 Sine-Wave Look-up Table

Each of the TMC5031 drivers provides a programmable look-up table for storing the microstep current wave. As a default, the tables are pre-programmed with a sine wave, which is a good starting point for  most  stepper  motors.  Reprogramming  the  table  to  a  motor  specific  wave  allows  drastically improved microstepping especially with low-cost motors.

## 12.1 User Benefits

Microstepping -

- extremely improved with low-cost motors

Motor

- runs smooth and quiet

Torque

- reduced mechanical resonances yields improved torque

## 12.2 Microstep Table

To minimize required memory and the amount of data to be programmed, only a quarter of the wave becomes stored. The internal microstep table maps the microstep wave from 0° to 90°. It becomes symmetrically  extended  to  360°.  When  reading  out  the  table  the  10-bit  microstep  counter MSCNT addresses the fully extended wave table. The table is stored in an incremental fashion, using each one bit per entry. Therefore only 256 bits ( ofs00 to ofs255 )  are  required to store the quarter wave. These bits are mapped to eight 32-bit registers. Each ofs bit controls the addition of an inclination Wx or Wx +1  when advancing  one step in  the  table.  When Wx is  0,  a  1  bit  in  the  table  at  the  actual microstep position means 'add one' when advancing to the next microstep. As the wave can have a higher inclination than 1, the base inclinations Wx can be programmed to -1, 0, 1, or 2 using up to four flexible programmable segments within the quarter wave. This way even negative inclination can be realized. The four inclination segments are controlled by the position registers X1 to X3 . Inclination segment  0  goes  from  microstep  position  0  to X1 -1  and  its  base  inclination  is  controlled  by W0 , segment 1 goes from X1 to X2 -1 with its base inclination controlled by W1 , etc.

When modifying the wave, care must be taken to ensure a smooth and symmetrical zero transition when the quarter wave becomes expanded to a full wave. The maximum resulting swing of the wave should be adjusted to a range of -248 to 248, in  order  to  give  the  best  possible  resolution  while leaving headroom for the hysteresis-based chopper to add an offset.

Figure 12.1 LUT programming example

<!-- image -->

When the microstep sequencer advances within the table, it calculates the actual current values for the motor coils with each microstep and stores them to the registers CUR\_A and CUR\_B . However, the incremental coding requires an absolute initialization, especially when the microstep table becomes modified. Therefore CUR\_A and CUR\_B become initialized whenever MSCNT passes zero.

Two registers control the starting values of the tables:

- -As the starting value at zero is not necessarily 0 (it might be 1 or 2), it can be programmed into the starting point register START\_SIN .
- -In the same way, the start of the second wave for the second motor coil needs to be stored in START\_SIN90\_120 . This register stores the resulting table entry for a phase shift of 90° for 2-phase stepper motors.

## Hint

Refer  chapter  5.3  for  the  register  set  and  for  the  default  table  function  stored  in  the  drivers.  The default table is a good base for realizing an own table.

The TMC5031-EVAL comes with a calculation tool for own waves.

Initialization example for the default microstep table:

```
MSLUTx[0] = %10101010101010101011010101010100 = 0xAAAAB554 MSLUTx[1] = %01001010100101010101010010101010 = 0x4A9554AA MSLUTx[2] = %00100100010010010010100100101001 = 0x24492929 MSLUTx[3] = %00010000000100000100001000100010 = 0x10104222 MSLUTx[4] = %11111011111111111111111111111111 = 0xFBFFFFFF MSLUTx[5] = %10110101101110110111011101111101 = 0xB5BB777D MSLUTx[6] = %01001001001010010101010101010110 = 0x49295556 MSLUTx[7] = %00000000010000000100001000100010 = 0x00404222 MSLUTSELx = 0xFFFF8056: X1 =128, X2 =255, X3 =255 W3 =%01, W2 =%01, W1 =%01, W0 =%10 MSLUTSTARTx = 0x00F70000: START_SIN_0 = 0, START_SIN90_120 = 247
```

## 13 Quick Configuration Guide

This  guide  is  meant  as  a  practical  tool  to  come  to  a  first  configuration  and  do  a  minimum  set  of measurements and decisions for tuning the driver. It does not cover all advanced functionalities but concentrates on the basic function set to make a motor run smoothly. Once the motor runs, you may decide to explore additional features and further functionality in more detail. A current probe on one motor coil is a good aid to find the best settings, but it is not a must.

## CURRENT SETTING AND SETTING UP SPREADCYCLE

Figure 13.1 Current setting and setting up SpreadCycle

<!-- image -->

## MOVING THE MOTOR USING THE MOTION CONTROLLER

Figure 13.2 Moving the motor using the motion controller

<!-- image -->

## ENABLING COOLSTEP (IN COMBINATION WITH SPREADCYCLE)

Figure 13.3 Enabling CoolStep (in combination with SpreadCycle)

<!-- image -->

## 14 Getting Started

Please refer to the TMC5031 evaluation board to allow a quick start with the device, and in order to allow interactive tuning of the device setup in your application. Chapter 13 will guide you through the process of correctly setting up all registers.

## 14.1 Initialization Examples

Initialization SPI datagram example sequence to enable and initialize driver 1 and ramp generator 1 to move the motor in velocity mode and read access the position register:

```
SPI send: 0x8000000008;  // GCONF=8: Enable PP and INT outputs SPI send: 0xEC000100C5;  // CHOPCONF: TOFF=5, HSTRT=4, HEND=1, TBL=2, CHM=0 (SpreadCycle) SPI send: 0xB000011F05;  // IHOLD_IRUN: IHOLD=5, IRUN=31 (max. current), IHOLDDELAY=1 SPI send: 0xA600001388;  // AMAX=5000 SPI send: 0xA700004E20;  // VMAX=20000 SPI send: 0xA000000001;  // RAMPMODE=1 (positive velocity) // Now motor 1 should start rotating SPI send: 0x2100000000;  // Query X Actual -The next read access delivers X Actual SPI read; // Read X Actual
```

Initialization SPI datagram example sequence to enable and initialize the motion controller and then move one rotation (51200 microsteps) using the ramp generator.

```
SPI send: 0xA4000003E8; // A1 = 1 000 First acceleration SPI send: 0xA50000C350; // V1 = 50 000 Acceleration threshold velocity V1 SPI send: 0xA6000001F4; // AMAX = 500 Acceleration above V1 SPI send: 0xA7000304D0; // VMAX = 200 000 SPI send: 0xA8000002BC; // DMAX = 700 Deceleration above V1 SPI send: 0xAA00000578; // D1 = 1400 Deceleration below V1 SPI send: 0xAB0000000A; // VSTOP = 10 Stop velocity (Near to zero) SPI send: 0xA000000000; // RAMPMODE = 0 (Target position move) // Ready to move! SPI send: 0xADFFFF3800; // XTARGET = -51200 (Move one rotation left (200*256 microsteps))
```

## Hint

Tune the configuration parameters for your motor and application for optimum performance.

## 15 Clock Oscillator and Clock Input

The clock is the timing reference for all functions: the chopper, the velocity, the acceleration control, etc.  Many  parameters  are  scaled  with  the  clock  frequency;  thus,  a  precise  reference  allows  a  more deterministic  result.  The  on-chip  clock  oscillator  provides  timing  in  case  no  external  clock  is  easily available.

## 15.1 Using the Internal Clock

Directly tie the CLK input to GND near to the TMC5031 if the internal clock oscillator is to be used. The internal clock can be calibrated by driving the ramp generator at a certain velocity setting. Reading out position values via the interface and comparing the resulting velocity to the remote masters' clock gives  a  time  reference.  This  allows  scaling  acceleration  and  velocity  settings  as  a  result.  The temperature dependency and ageing of the internal clock is comparatively low.

## IMPLEMENTING FREQUENCY DEPENDENT SCALING

Frequency  dependent  scaling  allows  using  the  internal  clock  for  a  motion  control  application.  The time reference of the external microcontroller is used to calculate a scaler for all velocity settings. The following steps are required:

1. You may leave the motor driver disabled during the calibration.
2. Start  motor  in  velocity  mode,  with VMAX =10000  and AMAX =60000  (for  quick  acceleration).  The acceleration phase is ended after a few ms.
3. Read out XACTUAL twice, at time point t1 and time point t2, e.g., 100ms later (dt=0.1s). The time difference between both read accesses shall be exactly timed by the external microcontroller.
4. Stop the motion ramp by setting VMAX =0.
5. The number of steps done in between of t1 and t2 now can be used to calculate the factor

<!-- formula-not-decoded -->

6. Now multiply each velocity value with this factor f, to normalize the velocity to steps per second. At a nominal value of the internal clock frequency, 780 steps will be done in 100ms.

## Hint

In case well defined velocity settings and precise motor chopper operation are desired, it is supposed to work with an external clock source.

## 15.2 Using an External Clock

When an external clock is available, a frequency of 12 MHz to 16 MHz is recommended for optimum performance. The duty cycle of the clock signal is uncritical, as long as minimum high or low input time for the pin is satisfied (refer to electrical characteristics). Up to 18 MHz can be used, when the clock duty cycle is 50%. Make sure, that the clock source supplies clean CMOS output logic levels and steep slopes when using a high clock frequency. The external clock input is enabled with the first positive polarity seen on the CLK input.

## Attention

Switching off the external clock frequency prevents the driver from operating normally. Therefore, be careful to switch off the motor drivers before switching off the clock (e.g. using the enable input), because otherwise the chopper would stop and the motor current level could rise uncontrolled. The short to GND detection stays active even without clock, if enabled.

## 15.3 Considerations on the Frequency

A higher frequency allows faster step rates, faster SPI operation and higher chopper frequencies. On the other hand, it may cause more electromagnetic emission of the system and causes more power dissipation in the TMC5031 digital core and voltage regulator. Generally, a frequency of 10 MHz to 16

MHz  should  be  sufficient  for  most  applications.  For  reduced  requirements  concerning  the  motor dynamics, a clock frequency of down to 8 MHz can be considered.

## 16 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                          | Symbol   | Min   | Max        | Unit   |
|--------------------------------------------------------------------|----------|-------|------------|--------|
| Supply voltage                                                     | V VS     | -0.5  | 18         | V      |
| I/O supply voltage                                                 | V VIO    | -0.5  | 5.5        | V      |
| digital VCC supply voltage (if not supplied by internal regulator) | V VCC    | -0.5  | 5.5        | V      |
| Logic input voltage                                                | V I      | -0.5  | V VIO +0.5 | V      |
| Maximum current to / from digital pins and analog low voltage I/Os | I IO     |       | +/-10      | mA     |
| 5V regulator output current (internal plus external load)          | I 5VOUT  |       | 50         | mA     |
| 5V regulator continuous power dissipation (V VM -5V) * I 5VOUT     | P 5VOUT  |       | 1          | W      |
| Power bridge repetitive output current                             | I Ox     |       | 2.0        | A      |
| Junction temperature                                               | T J      | -50   | 150        | °C     |
| Storage temperature                                                | T STG    | -55   | 150        | °C     |
| ESD-Protection for interface pins (Human body model, HBM)          | V ESDAP  |       | 4 (tbd.)   | kV     |
| ESD-Protection for handling (Human body model, HBM)                | V ESD    |       | 1 (tbd.)   | kV     |

## 17 Electrical Characteristics

## 17.1 Operational Range

| Parameter                                                                                                                                         | Symbol   | Min   |    Max | Unit   |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------|--------|--------|
| Junction temperature                                                                                                                              | T J      | -40   | 125    | °C     |
| Supply voltage (using internal +5V regulator)                                                                                                     | V VS     | 5.5   |  16    | V      |
| Supply voltage (internal +5V regulator bridged: V VCC =V VSA )                                                                                    | V VS     | 4.7   |   5.4  | V      |
| I/O supply voltage                                                                                                                                | V VIO    | 3.00  |   5.25 | V      |
| VCC voltage when using optional external source (supplies digital logic and charge pump)                                                          | V VCC    | 4.75  |   5.25 | V      |
| RMS motor coil current per coil (value for design guideline)                                                                                      | I RMS    |       |   0.8  | A      |
| Peak output current per motor coil output (sine wave peak)                                                                                        | I Ox     |       |   1.1  | A      |
| Peak output current per motor coil output (sine wave peak) Limit T J ≤ 105°C , e.g. for 100ms short time acceleration phase below 50% duty cycle. | I Ox     |       |   1.5  | A      |

## 17.2 DC Characteristics and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| Power supply current                                         | DC-Characteristics V VS = 16.0V   | DC-Characteristics V VS = 16.0V           | DC-Characteristics V VS = 16.0V   | DC-Characteristics V VS = 16.0V   | DC-Characteristics V VS = 16.0V   | DC-Characteristics V VS = 16.0V   |
|--------------------------------------------------------------|-----------------------------------|-------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Parameter                                                    | Symbol                            | Conditions                                | Min                               | Typ                               | Max                               | Unit                              |
| Supply current, driver disabled                              | I VS                              | f CLK =16MHz                              |                                   | 30                                | 40                                | mA                                |
| Supply current, operating                                    | I VS                              | f CLK =16MHz, 40kHz chopper               |                                   | 33                                |                                   | mA                                |
| Static supply current                                        | I VS0                             | f CLK =0Hz                                |                                   | 7                                 |                                   | mA                                |
| Supply current, driver disabled, dependency on CLK frequency | I VSX                             | f CLK variable, additional to I VS0       |                                   | 1.6                               |                                   | mA/MHz                            |
| Internal current consumption from 5V supply on VCC pin       | I VCC                             | f CLK =16MHz, 40kHz chopper               |                                   | 30                                | 40                                | mA                                |
| IO supply current                                            | I VIO                             | no load on outputs, inputs at V IO or GND |                                   | 10                                |                                   | µA                                |

| Motor driver section         | DC- and Timing-Characteristics V VS = 16.0V   | DC- and Timing-Characteristics V VS = 16.0V   | DC- and Timing-Characteristics V VS = 16.0V   | DC- and Timing-Characteristics V VS = 16.0V   | DC- and Timing-Characteristics V VS = 16.0V   | DC- and Timing-Characteristics V VS = 16.0V   |
|------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                    | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| RDS ON lowside MOSFET        | R ONL                                         | measure at 100mA, 25°C, static state          |                                               | 0.4                                           | 0.5                                           | Ω                                             |
| RDS ON highside MOSFET       | R ONH                                         | measure at 100mA, 25°C, static state          |                                               | 0.5                                           | 0.6                                           | Ω                                             |
| slope, MOSFET turning on     | t SLPON                                       | measured at 700mA load current                |                                               | 120                                           | 250                                           | ns                                            |
| slope, MOSFET turning off    | t SLPOFF                                      | measured at 700mA load current                |                                               | 220                                           | 450                                           | ns                                            |
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

| Clock oscillator and input           | Timing-Characteristics   | Timing-Characteristics              | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   |
|--------------------------------------|--------------------------|-------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                            | Symbol                   | Conditions                          | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency           | f CLKOSC                 | t J =-50°C                          | 8.8                      | 12.4                     | 17.9                     | MHz                      |
| Clock oscillator frequency           | f CLKOSC                 | t J =50°C                           | 9.4                      | 13.2                     | 18.8                     | MHz                      |
| Clock oscillator frequency           | f CLKOSC                 | t J =150°C                          | 9.6                      | 13.4                     | 18.9                     | MHz                      |
| External clock frequency (operating) | f CLK                    |                                     | 8                        | 12-16                    | 18                       | MHz                      |
| External clock high / low level time | t CLKL /t CLKH           | CLK driven to 0.1 V VIO / 0.9 V VIO | 25                       |                          |                          | ns                       |

| Detector levels                                                     | DC-Characteristics   | DC-Characteristics                   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|---------------------------------------------------------------------|----------------------|--------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                           | Symbol               | Conditions                           | Min                  | Typ                  | Max                  | Unit                 |
| V VSA undervoltage threshold for RESET                              | V UV_VSA             | V VSA rising                         | 3.8                  | 4.2                  | 4.6                  | V                    |
| V 5VOUT undervoltage threshold for RESET                            | V UV_5VOUT           | V 5VOUT rising                       |                      | 3.5                  |                      | V                    |
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

## 17.3 Thermal Characteristics

The following table shall give an idea on the thermal resistance of the QFN-48 package. The thermal resistance for a four-layer board will provide a good idea on a typical application. The single layer board example is kind of a worst-case condition, as the typical application will require a 4-layer board. Actual thermal characteristics will depend on the PCB layout, PCB type and PCB size.

A thermal resistance of 23°C/W for a typical board means, that the package is capable of continuously dissipating 4W at an ambient temperature of 25°C with the die temperature staying below 125°C.

| Parameter                                                                       | Symbol   | Conditions                                                                                                                                                                                                                                                                                  | Typ     | Unit   |
|---------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------|
| Typical power dissipation One motor active, one motor in standby at low current | P D      | One motor 1.00A RMS 112°C (120°C) One motor 0.71A RMS 83°C (90°C) Surface temperature at package center (peak surface temperature), board 55mm x 85mm, 25°C environment stealthChop or SpreadCycle, sinewave, 20kHz chopper, 16V, 16MHz, internal supply for VCC Motors: QSH4218-035-10-027 | 3.5 2.3 | W W    |
| Typical power dissipation Two motors active                                     | P D      | Two motors 0.71A RMS 110°C (114°C) Two motors 0.35A RMS 64°C (65°C)                                                                                                                                                                                                                         | 3.5 1.3 | W W    |
| Thermal resistance junction to ambient on a single layer board                  | R TJA    | Single signal layer board (1s) as defined in JEDEC EIA JESD51-3 (FR4, 76.2mm x 114.3mm, d=1.6mm)                                                                                                                                                                                            | 80      | K/W    |
| Thermal resistance junction to ambient on a multilayer board                    | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 76.2mm x 114.3mm, d=1.6mm)                                                                                                                                                        | 23      | K/W    |
| Thermal resistance junction to ambient on a multilayer board with air flow      | R TMJA1  | Identical to R TMJA , but with air flow 1m/s                                                                                                                                                                                                                                                | 20      | K/W    |
| Thermal resistance junction to board                                            | R TJB    | PCB temperature measured within 1mm distance to the package                                                                                                                                                                                                                                 | 10      | K/W    |
| Thermal resistance junction to case                                             | R TJC    | Junction temperature to heat slug of package                                                                                                                                                                                                                                                | 3       | K/W    |

The thermal resistance in an actual layout can be tested by checking for the heat up caused by the standby power consumption of the chip. When no motor is attached, all power seen on the power supply is dissipated within the chip.

Note:

A spreadsheet for calculating TMC5031 power dissipation is available on www.trinamic.com.

## 18 Layout Considerations

## 18.1 Exposed Die Pad

The TMC5031 uses its die attach pad to dissipate heat from the drivers and the linear regulator to the board.  For  best  electrical  and  thermal  performance,  use  a  reasonable  amount  of  solid,  thermally conducting vias between the die attach pad and the ground plane. The printed circuit board should have a solid ground plane spreading heat into the board and providing for a stable GND reference.

## 18.2 Wiring GND

All signals of the TMC5031 are referenced to their respective GND. Directly connect all GND pins under the TMC5031 to a common ground area (GND, GNDP, GNDA and die attach pad). The GND plane right below the die attach pad should be treated as a virtual star point. For thermal reasons, the PCB top layer shall be connected to a large PCB GND plane spreading heat within the PCB.

## Attention

Especially,  the  sense  resistors  are  susceptible  to  GND  differences  and  GND  ripple  voltage,  as  the microstep  current  steps  make  up  for  voltages  down  to  0.5 mV.  No  current  other  than  the  sense resistor current should flow on their connections to GND and to the TMC5031. Optimally place them close to the TMC5031, with one or more vias to the GND plane for each sense resistor. The two sense resistors for one coil should not share a common ground connection trace or vias, as also PCB traces have a certain resistance.

## 18.3 Supply Filtering

The 5VOUT output voltage ceramic filtering capacitor (4.7 µF recommended) should be placed as close as possible to the 5VOUT pin, with its GND return going directly to the GNDA pin. Use as short and as thick  connections  as  possible.  For  best  microstepping  performance  and  lowest  chopper  noise  an additional filtering capacitor can be used for the VCC pin to GND, to avoid charge pump and digital part ripple influencing motor current regulation. Therefore, place a ceramic filtering capacitor (470nF recommended) as close as possible (1-2mm distance) to the VCC pin with GND return going to the ground plane. VCC can be coupled to 5VOUT using a 2.2 Ω resistor  to  supply  the  digital  logic  from 5VOUT while keeping ripple away from this pin.

A 100 nF filtering capacitor should be placed as close as possible to the VSA pin to ground plane. The motor  supply  pins  VS  should  be  decoupled  with  an  electrolytic  capacitor  (47 μF  or  larger  is recommended) and a ceramic capacitor, placed close to the device.

Consider that  the  switching motor coil outputs  have a high  dV/dt. Thus, capacitive stray into high resistive signals can occur if the motor traces are near other traces over longer distances.

## 18.4 Layout Example

Figure 18.1 Layout example

<!-- image -->

## 19 Package Mechanical Data

## 19.1 Dimensional Drawings

Attention: Drawings not to scale.

<!-- image -->

Figure 19.1 Dimensional drawings

| Parameter              | Ref   | Min   | Nom   | Max   |
|------------------------|-------|-------|-------|-------|
| total thickness        | A     | 0.80  | 0.85  | 0.90  |
| stand off              | A1    | 0.00  | 0.035 | 0.05  |
| mold thickness         | A2    | -     | 0.65  | 0.67  |
| lead frame thickness   | A3    |       | 0.203 |       |
| lead width             | b     | 0.2   | 0.25  | 0.3   |
| body size X            | D     |       | 7.0   |       |
| body size Y            | E     |       | 7.0   |       |
| lead pitch             | e     |       | 0.5   |       |
| exposed die pad size X | J     | 5.2   | 5.3   | 5.4   |
| exposed die pad size Y | K     | 5.2   | 5.3   | 5.4   |
| lead length            | L     | 0.35  | 0.4   | 0.45  |
| package edge tolerance | aaa   |       |       | 0.1   |
| mold flatness          | bbb   |       |       | 0.1   |
| coplanarity            | ccc   |       |       | 0.08  |
| lead offset            | ddd   |       |       | 0.1   |
| exposed pad offset     | eee   |       |       | 0.1   |

## 19.2 Package Codes

| Type         | Package                      | Temperature range            | Code & marking               | MSL level                    |
|--------------|------------------------------|------------------------------|------------------------------|------------------------------|
| TMC5031-LA   | QFN48 (RoHS)                 | -40°C ... +125°C             | TMC5031-LA                   | MSL 3 / 160h                 |
| TMC5031-LA-T | Tape on reel packed products | Tape on reel packed products | Tape on reel packed products | Tape on reel packed products |

## 20 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information  given  in  this  data  sheet  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 21 ESD Sensitive Device

The TMC5031 is an ESD sensitive CMOS device sensitive to electrostatic discharge. Take special care to use adequate grounding of personnel and machines in manual handling. After soldering the devices to the board, ESD requirements are more relaxed. Failure to do so can result in defect or decreased reliability.

<!-- image -->

## 22 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 23 Table of Figures

| Figure 1.1 Basic application and block diagram..........................................................................................................4                                                                                                            |       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Figure 1.2 Energy efficiency with CoolStep (example)...............................................................................................6                                                                                                                 |       |
| Figure 2.1 TMC5031 pin assignments..............................................................................................................................7                                                                                                    |       |
| Figure 3.1 Standard application circuit.........................................................................................................................10                                                                                                   |       |
| Figure 3.2 External supply of VCC_IO (showing optional filtering for VCC)......................................................11                                                                                                                                    |       |
| Figure 3.3 5V only operation...........................................................................................................................................12                                                                                            |       |
| Figure 3.4 Using an external 5V supply to reduce linear regulator power dissipation.................................13                                                                                                                                               |       |
| Figure 3.5 Using an external 5V supply to bypass internal regulator ................................................................13                                                                                                                               |       |
| Figure 3.6 Adding an RC-Filter on VCC for reduced ripple .....................................................................................14                                                                                                                     |       |
| Figure 3.7 Simple ESD enhancement and more elaborate motor output protection ....................................15                                                                                                                                                  |       |
| Figure 4.1 SPI timing.........................................................................................................................................................18                                                                                     |       |
| Figure 7.1 Chopper phases ..............................................................................................................................................34                                                                                           |       |
| Figure 7.2 No ledges in current wave with sufficient hysteresis (magenta: current A, yellow & sense resistor voltages A and B) ...................................................................................................................................36 | blue: |
| Figure 7.3 SpreadCycle chopper scheme showing coil current during a chopper cycle...............................37                                                                                                                                                   |       |
| Figure 7.4 Classic const. off time chopper with offset showing coil current...................................................38                                                                                                                                     |       |
| Figure 7.5 Zero crossing with classic chopper and correction using sine wave offset.................................38                                                                                                                                               |       |
| Figure 9.1 Ramp generator velocity trace showing consequent move in negative direction.....................43                                                                                                                                                        |       |
| Figure 9.2 Illustration of optimized motor torque usage with TMC5031 ramp generator...........................44                                                                                                                                                     |       |
| Figure 9.3 Ramp generator velocity dependent motor control ............................................................................45                                                                                                                            |       |
| Figure 9.4 Using reference switches (example) .........................................................................................................46                                                                                                            |       |
| Figure 10.1 Function principle of StallGuard2............................................................................................................50                                                                                                          |       |
| Figure 10.2 Example: Optimum SGT setting and StallGuard2 reading with an example motor.................52                                                                                                                                                            |       |
| Figure 11.1 CoolStep adapts motor current to the load.........................................................................................55                                                                                                                     |       |
| Figure 12.1 LUT programming example .......................................................................................................................57                                                                                                        |       |
| Figure 13.1 Current setting and setting up SpreadCycle ........................................................................................59                                                                                                                    |       |
| Figure 13.2 Moving the motor using the motion controller .................................................................................60                                                                                                                         |       |
| Figure 13.3 Enabling CoolStep (in combination with SpreadCycle).....................................................................61                                                                                                                               |       |
| Figure 18.1 Layout example.............................................................................................................................................70                                                                                            |       |
| Figure 19.1 Dimensional drawings................................................................................................................................71                                                                                                   |       |

## 24 Revision History

Table 24.1 Documentation revisions

|   Version | Date        | Author BD - Bernhard Dwersteg SD - Sonja Dwersteg   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------|-------------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1.04 | 2012_NOV-18 | BD / SD                                             | First version of product TMC5031 datasheet based on TMC562 prototype datasheet V1.04                                                                                                                                                                                                                                                                                                                                                                                                   |
|      1.06 | 2013-MAR-25 | SD                                                  | ­ Chapter 17.3 (thermal characteristics) added. ­ Chapter 10.1 (tuning the StallGuard2 threshold) updated. ­ CSACTUAL in DRV_STATUS corrected (chapter 5.3.4). ­ Interrupt output remark in RAMP_STAT for status_latch_l and status_latch_r removed. Description event_stop_l and event_stop_r updated (chapter 6.2.2.2) ­ Description of the reference switch actions improved. ­ SW_MODE register updated. ­ Order codes updated. ­ Consecutive numbering of the document corrected. |
|      1.07 | 2013-APR-30 | SD                                                  | New description of VCC_IO requirements.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|      1.08 | 2014-MAY-12 | SD                                                  | - Standard application circuit updated. - Motor current calculation updated.                                                                                                                                                                                                                                                                                                                                                                                                           |
|      1.09 | 2014-JUL-01 | BD                                                  | - Integrated errata sheet V1.1 & workaround in 9.5 - Order code - LA updated                                                                                                                                                                                                                                                                                                                                                                                                           |
|      1.1  | 2015-MAR-24 | BD                                                  | StallGuard Stop details: Improved homing algorithm, Added 10.4, Text for event_stop_sg, Limits VCP UV, Detail wording in many chapters, 320mV VSRTL, SPI example, Explanation VACTUAL sign, improved blue blocks, added Quick Configuration Guide                                                                                                                                                                                                                                      |
|      1.11 | 2016-APR-28 | BD                                                  | corrected TOFF calculation example, comments in GSTAT, comment on SPI_STATUS, 5V only +-5%, X1=128 in microstep table defaults, Setting negative encoder factors, Adaptation to internal fCLK, Interrupt handling, Wording V1 and VMAX register, ESD schematic w. varistors instead of snubber                                                                                                                                                                                         |
|      1.12 | 2020-JUN-12 | BD                                                  | Updated front page, minor corrections                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|      1.13 | 2022-FEB-08 | BD                                                  | Updated logo & order codes; minor re-wording; Added chapter on ramp generator response time; Improved several text segments                                                                                                                                                                                                                                                                                                                                                            |
|      1.14 | 2022-MAR-15 | BD                                                  | Adapted p.2 to new type of Evaluation board                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## 25 References

[AN001]  Trinamic Application Note 001 - Parameterization of SpreadCycle ™

[AN002]  Trinamic Application Note 002 - Parameterization of StallGuard 2™ &amp; CoolStep ™

www.trinamic.com

Calculation sheet TMC50XX\_Calculations.xlsx

, www.trinamic.com ,