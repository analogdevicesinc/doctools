<!-- lastmod 2023-08-03 -->
## TMC2660C DATASHEET

Universal, cost-effective stepper driver for two-phase bipolar motors with state-of-the-art features. Integrated MOSFETs for up to 4 A motor current per coil. With Step/Dir Interface and SPI.

<!-- image -->

## FEATURES AND BENEFITS

Drive Capability up to 4A motor current

Voltage 5V to 30V DC

Highest Resolution up to 256 microsteps per full step

Compact Size 10x10mm QFP-44 package

Low Power Dissipation

very low RDSON &amp; sync. rectification programmable slope

EMI-optimized

Protection  &amp;  Diagnostics short  to  GND,  overtemperature  &amp; undervoltage, overcurrent and short to VS

StallGuard2 ™ high precision sensorless motor load detection

CoolStep ™ load dependent current control saves up to 75%

MicroPlyer ™ 256 microstep smoothness with 1/16 step input.

SpreadCycle ™ high-precision chopper for best current sine wave form and zero crossing

Improved Silent Motor operation

Stand Alone option

## BLOCK DIAGRAM

## APPLICATIONS

Textile, Sewing Machines Factory Automation Lab Automation Liquid Handling Medical Office Automation Printer and Scanner CCTV, Security ATM, Cash recycler POS Pumps and Valves Heliostat Controller CNC Machines

## DESCRIPTION

The TMC2660 driver for two-phase stepper motors  offers  an  industry-leading  feature set, including high-resolution microstepping, sensorless mechanical load measurement, load-adaptive power  optimization, and low-resonance chopper operation. Standard SPI ™ and STEP/DIR interfaces simplify  communication.  Integrated  power MOSFETs handle motor currents up to 2.2A RMS  continuously  or  2.8A  RMS  boost  current  per  coil.  Integrated  protection  and diagnostic features support robust and reliable  operation.  High  integration,  high energy  efficiency  and  small  form  factor enable  miniaturized  designs  with  low  external  component  count  for  cost-effective and highly competitive solutions.

The new -C device improves motor silence and adds low side short protection.

<!-- image -->

<!-- image -->

<!-- image -->

## APPLICATION EXAMPLES:  SMALL SIZE -BEST PERFORMANCE

The TMC2660 scores with power density, integrated power MOSFETs, and a versatility that covers a wide spectrum of applications and motor sizes, all while keeping costs down. Extensive support at the chips, board, and software levels enables rapid design cycles and fast time-to-market with competitive products. High  ene rgy  efficiency  from  TRINAMIC's CoolStep  technology  delivers  further  cost  savings  in  related systems such as power supplies and cooling.

## TMC4210+TMC2660-EVAL EVALUATION-BOARD FOR 1 AXIS

<!-- image -->

This evaluation board is a development platform for applications based on the TMC2660. The board features a USB interface for communication with the TMCL-IDE control software running on a PC. The power MOSFETs of the TMC2660 support drive currents up to 2.4A RMS and 29V.

The control software provides a user-friendly GUI for setting control parameters and visualizing the dynamic response of the motor.

Evaluation board system with TMC2660

Motor  movement  can  be  controlled  through the  Step/Dir  interface  using  inputs  from  an external  source  or  signals  generated  by  the onboard  microcontroller acting as a step generator. Optionally add a motion controller card between CPU board and TMC2660-EVAL.

Top level layout of TMC2660-EVAL

<!-- image -->

## ORDER CODES

| Order code       | Description                                                                    | Size [mm²]   |
|------------------|--------------------------------------------------------------------------------|--------------|
| TMC2660C-PA      | Stepper Motor Driver IC, SPI, Step/Dir, 5-30V Supply, 2.8A, QFP44, Tray        | 10 x 10      |
| TMC2660C-PA-T    | Stepper Motor Driver IC, SPI, Step/Dir, 5-30V Supply, 2.8A, QFP44, Tape & Reel | 10 x 10      |
| TMC2660-EVAL-KIT | Evaluation board for TMC2660                                                   | 126 x 85     |
| TMC2660-EVAL     | Evaluation Board for TMC2590 (excl. Landungsbrücke and Eselsbrücke)            | 85 x 55      |
| TMC2660-BOB      | Breakout Board with TMC2660                                                    | 25 x 38      |

## TABLE OF CONTENTS

| 1                                                                                                   | PRINCIPLES OF OPERATION.........................4                                                            | PRINCIPLES OF OPERATION.........................4                                                            |                                                            |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
|                                                                                                     | 1.1 KEY CONCEPTS ...............................................4                                            | 1.1 KEY CONCEPTS ...............................................4                                            |                                                            |
| 1.2                                                                                                 | CONTROL I NTERFACES ....................................5                                                    | CONTROL I NTERFACES ....................................5                                                    |                                                            |
| 1.3                                                                                                 | MECHANICAL LOAD SENSING                                                                                      | MECHANICAL LOAD SENSING                                                                                      | .........................5                                 |
| 1.4                                                                                                 | CURRENT CONTROL                                                                                              | CURRENT CONTROL                                                                                              | ........................................5                  |
|                                                                                                     | ASSIGNMENTS..........................................6                                                       | ASSIGNMENTS..........................................6                                                       |                                                            |
| 2.1                                                                                                 | PACKAGE OUTLINE                                                                                              | PACKAGE OUTLINE                                                                                              | .........................................6                 |
| 2.2                                                                                                 | SIGNAL DESCRIPTIONS                                                                                          | SIGNAL DESCRIPTIONS                                                                                          | ..................................6                        |
| INTERNAL ARCHITECTURE.............................8                                                 | INTERNAL ARCHITECTURE.............................8                                                          | INTERNAL ARCHITECTURE.............................8                                                          |                                                            |
| STANDALONE OPERATION ............................9                                                  | STANDALONE OPERATION ............................9                                                           | STANDALONE OPERATION ............................9                                                           |                                                            |
| STALLGUARD2 LOAD MEASUREMENT.......10                                                               | STALLGUARD2 LOAD MEASUREMENT.......10                                                                        | STALLGUARD2 LOAD MEASUREMENT.......10                                                                        |                                                            |
| 5.1                                                                                                 |                                                                                                              | TUNING THE STALLGUARD2 THRESHOLD ......11                                                                    |                                                            |
| 5.2                                                                                                 | 5.2                                                                                                          | STALLGUARD2 MEASUREMENT FREQUENCY AND FILTERING ............................................12               |                                                            |
| 5.3                                                                                                 | 5.3                                                                                                          | DETECTING A MOTOR STALL ........................12                                                           |                                                            |
| 5.4                                                                                                 | 5.4                                                                                                          | L IMITS OF STALLGUARD2 OPERATION                                                                             | .........12                                                |
| COOLSTEP LOAD-ADAPTIVE CURRENT CONTROL...........................................................13 | COOLSTEP LOAD-ADAPTIVE CURRENT CONTROL...........................................................13          | COOLSTEP LOAD-ADAPTIVE CURRENT CONTROL...........................................................13          |                                                            |
| 6.1 TUNING COOLSTEP                                                                                 | 6.1 TUNING COOLSTEP                                                                                          | 6.1 TUNING COOLSTEP                                                                                          | ......................................15                   |
| SPI INTERFACE................................................16                                     | SPI INTERFACE................................................16                                              | SPI INTERFACE................................................16                                              |                                                            |
| 7.1                                                                                                 | BUS SIGNALS                                                                                                  | BUS SIGNALS                                                                                                  | ...............................................16          |
| 7.2                                                                                                 | BUS TIMING ................................................16                                                | BUS TIMING ................................................16                                                |                                                            |
| 7.3                                                                                                 | BUS ARCHITECTURE .....................................17                                                     | BUS ARCHITECTURE .....................................17                                                     |                                                            |
| 7.4                                                                                                 | REGISTER WRITE COMMANDS......................18                                                              | REGISTER WRITE COMMANDS......................18                                                              |                                                            |
| 7.5                                                                                                 | DRIVER CONTROL REGISTER (DRVCTRL)                                                                            | DRIVER CONTROL REGISTER (DRVCTRL)                                                                            | ....20                                                     |
| 7.6                                                                                                 | CHOPPER CONTROL REGISTER (CHOPCONF)..                                                                        | CHOPPER CONTROL REGISTER (CHOPCONF)..                                                                        |                                                            |
| 7.7                                                                                                 | ...................................................................22 COOLSTEP CONTROL REGISTER (SMARTEN)... | ...................................................................22 COOLSTEP CONTROL REGISTER (SMARTEN)... |                                                            |
| 7.8                                                                                                 | ...................................................................23 STALLGUARD2 CONTROL REGISTER           | ...................................................................23 STALLGUARD2 CONTROL REGISTER           |                                                            |
| 7.9                                                                                                 | (SGCSCONF) .............................................24                                                   | (SGCSCONF) .............................................24                                                   | (DRVCONF)...25                                             |
| 7.10                                                                                                | DRIVER CONTROL REGISTER READ RESPONSE ..........................................26                           | DRIVER CONTROL REGISTER READ RESPONSE ..........................................26                           |                                                            |
| 7.11                                                                                                | DEVICE I NITIALIZATION ...............................27                                                     | DEVICE I NITIALIZATION ...............................27                                                     |                                                            |
|                                                                                                     | STEP/DIR INTERFACE....................................28                                                     | STEP/DIR INTERFACE....................................28                                                     |                                                            |
| 8.1                                                                                                 |                                                                                                              | TIMING                                                                                                       |                                                            |
| 8.2                                                                                                 |                                                                                                              |                                                                                                              | ........................................................28 |
| 8.3                                                                                                 | MICROSTEP TABLE .......................................29 CHANGING RESOLUTION                                | MICROSTEP TABLE .......................................29 CHANGING RESOLUTION                                | ..............................30                           |
| 8.4                                                                                                 | MICROPLYER STEP I NTERPOLATOR                                                                                | MICROPLYER STEP I NTERPOLATOR                                                                                | ...............30                                          |
| 8.5                                                                                                 | STANDSTILL CURRENT REDUCTION                                                                                 | STANDSTILL CURRENT REDUCTION                                                                                 | ................31                                         |
|                                                                                                     | CURRENT SETTING.........................................32                                                   | CURRENT SETTING.........................................32                                                   |                                                            |
| 9.1                                                                                                 | SENSE RESISTORS                                                                                              | SENSE RESISTORS                                                                                              | ........................................33                 |
|                                                                                                     | CHOPPER OPERATION...................................34                                                       | CHOPPER OPERATION...................................34                                                       |                                                            |
|                                                                                                     | SPREADCYCLE CHOPPER ...............................35                                                        | SPREADCYCLE CHOPPER ...............................35                                                        |                                                            |
| 10.1                                                                                                |                                                                                                              |                                                                                                              |                                                            |
| 10.2                                                                                                | CONSTANT OFF-T IME MODE ........................38 POWER MOSFET STAGE................................40      | CONSTANT OFF-T IME MODE ........................38 POWER MOSFET STAGE................................40      |                                                            |
| 11.1                                                                                                |                                                                                                              |                                                                                                              |                                                            |
|                                                                                                     | BREAK-B EFORE-MAKE L OGIC                                                                                    | BREAK-B EFORE-MAKE L OGIC                                                                                    | ........................40                                 |

11.2

ENN INPUT  .................................................  40

12

DIAGNOSTICS AND PROTECTION ............  41

12.1

SHORT PROTECTION.....................................  41

12.2

12.3

12.4

OPEN-LOAD DETECTION ..............................  42

TEMPERATURE SENSORS  ...............................  43

UNDERVOLTAGE DETECTION  .........................  43

13

POWER SUPPLY SEQUENCING ...................  45

14

SYSTEM CLOCK  ................................................  45

14.1

FREQUENCY SELECTION  ................................  46

15

COMPATIBILITY TO NON-C-TYPE  ..............  47

16

DRIVER PROTECTION AND EME

CIRCUITRY .......................................................  48

17

LAYOUT CONSIDERATIONS ........................  49

17.1

SENSE RESISTORS  ........................................  49

17.2

17.3

17.4

17.5

POWER MOSFET OUTPUTS  .........................  49

POWER SUPPLY PINS  ..................................  49

POWER FILTERING  .......................................  49

LAYOUT EXAMPLE  ........................................  50

18

ABSOLUTE MAXIMUM RATINGS  ................  51

19

ELECTRICAL CHARACTERISTICS  ................  52

19.1

OPERATIONAL RANGE  ..................................  52

19.2

19.3

DC AND AC SPECIFICATIONS  ......................  52

THERMAL CHARACTERISTICS  ........................  55

20

PACKAGE MECHANICAL DATA ...................  56

20.1

DIMENSIONAL DRAWINGS  ...........................  56

20.2

PACKAGE CODE ...........................................  56

21

DISCLAIMER ....................................................  57

22

23

24

25

ESD SENSITIVE DEVICE  ...............................  57

DESIGNED FOR SUSTAINABILITY ............  57

TABLE OF FIGURES  ........................................  58

REVISION HISTORY ......................................  58

## 1 Principles of Operation

Figure 1.1 Block diagram: applications

<!-- image -->

The  TMC2660  motor  driver  chip  with  included  MOSFETs  is  the  intelligence  and  power  between  a motion controller and the two-phase stepper motor as shown in Figure 1.1. Following power-up, an embedded  microcontroller  initializes  the  driver  by  sending  commands  over  an  SPI  bus  to  write control parameters and mode bits in the TMC2660. The microcontroller may implement the motioncontrol function as shown in the upper part of the figure, or it may send commands to a dedicated motion controller chip such as TRINAMIC's TMC429 as shown in the lower part.

The motion controller can control  the  motor  position  by  sending  pulses  on  the  STEP  signal  while indicating the direction on the DIR signal. The TMC2660 has a microstep counter and sine table to convert  these  signals  into  the  coil  currents  which  control  the  position  of  the  motor.  If  the microcontroller  implements  the  motion-control  function,  it  can  write  values  for  the  coil  currents directly to the TMC2660 over the SPI interface, in which case the STEP/DIR interface may be disabled. This mode of operation requires software to track the motor position and reference a sine table to calculate the coil currents.

To  optimize  power  consumption  and  heat  dissipation,  software  may  also  adjust  CoolStep  and StallGuard2 parameters in real-time, for example to implement different tradeoffs between speed and power consumption in different modes of operation.

The motion control function is a hard real-time task which may be a burden to implement reliably alongside other tasks on the embedded microcontroller. By offloading the motion-control function to the TMC429, up to three motors can be operated reliably with very little demand for service from the microcontroller.  Software  only  needs  to  send  target  positions,  and  the  TMC429  generates  precisely timed step pulses. Software retains full control over both the TMC2660 and TMC429 through the SPI bus.

## 1.1 Key Concepts

The  TMC2660  motor  driver  implements  several  advanced  features  which  are  exclusive  to  TRINAMIC products.  These  features  contribute  toward  greater  precision,  greater  energy  efficiency,  higher reliability, smoother motion, and cooler operation in many stepper motor applications.

StallGuard2 ™

High-precision load measurement using the back EMF on the coils

CoolStep ™

Load-adaptive  current  control  which  reduces  energy  consumption  by  as  much  as 75%

SpreadCycle ™

High-precision  chopper  algorithm  available  as  an  alternative  to  the  traditional constant off-time algorithm

MicroPlyer ™

Microstep interpolator for obtaining increased smoothness of microstepping over a STEP/DIR interface

In  addition  to  these  performance  enhancements,  TRINAMIC  motor  drivers  also  offer  safeguards  to detect  and  protect  against  shorted  outputs,  open-circuit  output,  overtemperature,  and  undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

## 1.2 Control Interfaces

There  are  two  control  interfaces  from  the  motion  controller  to  the  motor  driver:  the  SPI  serial interface and the STEP/DIR interface. The SPI interface is used to write control information to the chip and  read  back  status  information.  This  interface  must  be  used  to  initialize  parameters  and  modes necessary to enable driving the motor. This interface may also be used for directly setting the currents flowing  through  the  motor  coils,  as  an  alternative  to  stepping  the  motor  using  the  STEP  and  DIR signals, so the motor can be controlled through the SPI interface alone.

The STEP/DIR interface is a traditional motor control interface available for adapting existing designs to use TRINAMIC motor drivers. Using only the SPI interface requires slightly more CPU overhead to look up the sine tables and send out new current values for the coils.

## 1.2.1 SPI Interface

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  slave,  another  bit  is  sent  simultaneously  from  the  slave  to  the  master. Communication between an SPI master and the TMC2660 slave always consists of sending one 20-bit command word and receiving one 20-bit status word.

The SPI command rate typically corresponds to the microstep rate at low velocities. At high velocities, the  rate  may  be  limited  by  CPU  bandwidth  to  10-100  thousand  commands  per  second,  so  the application may need to change to fullstep resolution.

## 1.2.2 STEP/DIR Interface

The STEP/DIR interface is enabled by default. Active edges on the STEP input can be rising edges or both rising and falling edges, as controlled by another mode bit (DEDGE). Using both edges cuts the toggle rate of the STEP signal in half, which is useful for communication over slow interfaces such as optically isolated interfaces.

On each active edge, the state sampled from the DIR input determines whether to step forward or back. Each step can be a fullstep or a microstep, in which there are 2, 4, 8, 16, 32, 64, 128, or 256 microsteps per fullstep. During microstepping, a step impulse with a low state on DIR increases the microstep counter and a high level decreases the counter by an amount controlled by the microstep resolution.  An  internal  table  translates  the  counter  value  into  the  sine  and  cosine  values  which control the motor current for microstepping.

## 1.3 Mechanical Load Sensing

The TMC2660 provides StallGuard2 high-resolution load measurement for determining the mechanical load  on  the  motor by measuring the  back EMF. In  addition to detecting when a motor stalls, this feature can be used for homing to a mechanical stop without a limit switch or proximity detector. The CoolStep  power-saving  mechanism  uses  StallGuard2  to  reduce  the  motor  current  to  the  minimum motor current required to meet the actual load placed on the motor.

## 1.4 Current Control

Current into the motor coils is controlled using a cycle-by-cycle chopper mode. Two chopper modes are available: a traditional constant off-time mode and the new SpreadCycle mode. SpreadCycle mode offers smoother operation and greater power efficiency over a wide range of speed and load.

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC2660 pin assignment (top view)

<!-- image -->

## 2.2 Signal Descriptions

| Pin     | Number        | Type   | Function                                                                                                                                 |
|---------|---------------|--------|------------------------------------------------------------------------------------------------------------------------------------------|
| OA1     | 2, 3 7, 8     | O (VS) | Bridge A1 output. Interconnect all of these pins using thick traces capable to carry the motor current and distribute heat into the PCB. |
| OA2     | 5, 6 10, 11   | O (VS) | Bridge A2 output. Interconnect all of these pins using thick traces capable to carry the motor current and distribute heat into the PCB. |
| OB1     | 26, 27 31, 32 | O (VS) | Bridge B1 output. Interconnect all of these pins using thick traces capable to carry the motor current and distribute heat into the PCB. |
| OB2     | 23, 24 28, 29 | O (VS) | Bridge B2 output. Interconnect all of these pins using thick traces capable to carry the motor current and distribute heat into the PCB. |
| VSA VSB | 4 30          |        | Bridge A/B positive power supply. Connect to VS and provide sufficient filtering capacity for chopper current ripple.                    |

| Pin                | Number     | Type            | Function                                                                                                                                                                                                                                                                   |
|--------------------|------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BRA BRB            | 9 25       | AI              | Bridge A/B negative power supply via sense resistor in bridge foot point.                                                                                                                                                                                                  |
| SRA SRB            | 12 22      | AI              | Sense resistor inputs for chopper current regulation.                                                                                                                                                                                                                      |
| 5VOUT              | 13         |                 | Output of the on-chip 5V linear regulator. This voltage is used to supply the low-side MOSFETs and internal analog circuitry. An external capacitor to GND close to the pin is required. Place the capacitor near pins 13 and 17. A 470nF ceramic capacitor is sufficient. |
| SDO                | 14         | DO VIO          | SPI serial data output.                                                                                                                                                                                                                                                    |
| SDI (CFG3)         | 15         | DI VIO          | Data input of SPI interface / Microstep resolution control input in standalone mode: 0: MRES=256 microsteps; 1: MRES=16 microsteps with interpolation                                                                                                                      |
| SCK (CFG2)         | 16         | DI VIO          | Serial clock input of SPI interface / Chopper hysteresis control input in standalone mode: 0: HEND=4, HSTRT=2; 1: HEND=4, HSTRT=6                                                                                                                                          |
| GND                | 17, 39, 44 |                 | Digital and analog low power GND.                                                                                                                                                                                                                                          |
| CSN (CFG1)         | 18         | DI VIO          | Chip select input of SPI interface / Current control input in standalone mode: 0: Current scale CS=15; 1: Current scale CS=31                                                                                                                                              |
| ENN                | 19         | DI VIO          | Power MOSFET enable input. All MOSFETs are switched off when disabled. (Active low.)                                                                                                                                                                                       |
| CLK                | 21         | DI VIO          | System clock input for all internal operations. Tie low to use the on-chip oscillator. A high signal disables the on-chip oscillator until power down.                                                                                                                     |
| VHS                | 35         |                 | High-side supply voltage (motor supply voltage - 10V)                                                                                                                                                                                                                      |
| VS                 | 36         |                 | Motor supply voltage                                                                                                                                                                                                                                                       |
| TST_ANA / ST_ALONE | 37         | AO/ DI VIO (pd) | non-C-Type: Leave open for normal operation. C-Type only: Tie to VCC_IO for non-SPI, stand-alone mode. Internal 10k pulldown resistor.                                                                                                                                     |
| SG_TST             | 38         | DO VIO          | StallGuard2 output. Signals a motor stall. (Active high.)                                                                                                                                                                                                                  |
| VCC_IO             | 40         |                 | Input/output supply voltage VIO for all digital pins. Tie to digital logic supply voltage. Operation is allowed in 3.3V and 5V systems.                                                                                                                                    |
| DIR                | 41         | DI VIO          | Direction input. Sampled on an active edge of the STEP input to determine stepping direction. Sampling a low level increases the microstep counter, while sampling a high level decreases the counter. A 60-ns internal glitch filter rejects short pulses on this input.  |
| STEP               | 42         | DI VIO          | Step input. Active edges can be rising or both rising and falling, as controlled by the DEDGE mode bit. A 60-ns internal glitch filter rejects short pulses on this input.                                                                                                 |
| TST_MODE           | 43         | DI VIO          | Test mode input. Puts IC into test mode. Tie to GND for normal operation.                                                                                                                                                                                                  |
| n.c.               | 1, 33      |                 | No internal connection - can be tied to any net, e.g., to improve power routing to pins VSA and VSB.                                                                                                                                                                       |
| n.c.               | 20, 34     |                 | No internal connection                                                                                                                                                                                                                                                     |

## 3 Internal Architecture

Figure 3.1 shows the internal architecture of TMC2660.

<!-- image -->

Figure 3.1 TMC2660 block diagram

## PROMINENT FEATURES INCLUDE:

| Oscillator and clock selector      | provide the system clock from the on-chip oscillator or an external source.                                                                                                                          |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Step and direction interface       | uses a microstep counter and sine table to generate target currents for the coils.                                                                                                                   |
| SPI interface                      | configures current setting, and chopper and optionally receives commands that directly set the coil current values.                                                                                  |
| Multiplexer                        | selects either the output of the sine table or the SPI interface for controlling the current into the motor coils.                                                                                   |
| Multipliers                        | scale down the currents to both coils when the currents are greater than those required by the load on the motor or as set by the CS current scale parameter.                                        |
| DACs and comparators               | convert the digital current values to analog signals that are compared with the voltages on the sense resistors. Comparator outputs terminate chopper drive phases when target currents are reached. |
| Break-before-make and gate drivers | ensure non-overlapping pulses, boost pulse voltage, and control pulse slope to the gates of the power MOSFETs.                                                                                       |
| On-chip voltage regulators         | provide high-side voltage for P-channel MOSFET gate drivers and supply voltage for on-chip analog and digital circuits.                                                                              |

## 4 Standalone Operation

Standalone operation is the easiest way to use the IC. In this mode, three pins configure for the most common settings. Just use the standard application circuit, tie low / high the SPI input pins to set the desired  basic  operation  parameters  and  choose  a  sense  resistor  to  fit  the  required  motor  current. However, advanced configuration and access to individual diagnostics only is possible via SPI.

Figure 2 Standalone configuration

| CSN: SELECTION OF MOTOR CURRENT (USE FOR STANDSTILL CURRENT REDUCTION)   | CSN: SELECTION OF MOTOR CURRENT (USE FOR STANDSTILL CURRENT REDUCTION)                             |
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| CSN (CFG1)                                                               | Chopper Setting                                                                                    |
| GND                                                                      | Current Scale CS=15. Use for standstill current reduction, or to adapt lower sense resistor value. |
| VCC_IO                                                                   | Current Scale CS=31. Maximum current. Control motor current by adapting sense resistors.           |

| SCK: SELECTION OF CHOPPER HYSTERESIS (ADAPT FOR LOWEST MOTOR NOISE & VIBRATION)   | SCK: SELECTION OF CHOPPER HYSTERESIS (ADAPT FOR LOWEST MOTOR NOISE & VIBRATION)                                             |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| SCK (CFG2)                                                                        | Chopper Setting                                                                                                             |
| GND                                                                               | Low hysteresis (HSTRT=2, HEND=4), use for larger motor.                                                                     |
| VCC_IO                                                                            | Medium hysteresis (HSTRT=6, HEND=4), typical for Nema17 or smaller motor, or for high speed motors with high coil currents. |

| SDI: SELECTION OF MICROSTEP RESOLUTION (ADAPT TO STEP PULSE GENERATOR)   | SDI: SELECTION OF MICROSTEP RESOLUTION (ADAPT TO STEP PULSE GENERATOR)   |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| SDI (CFG3)                                                               | Chopper Setting                                                          |
| GND                                                                      | 256 Microsteps full resolution for Step/Dir interface                    |
| VCC_IO                                                                   | 16 Microsteps with internal interpolation to 256 microsteps              |

<!-- image -->

Standalone mode automatically enables resonance dampening (EN\_PFD), 4.25V undervoltage threshold, 136°C overtemperature detection (OT\_SENSE), sensitive high-side short detection (SHRTSENSE) and low side short protection (S2VS). Driver strength becomes set to SLPL=SLPH=3. TOFF is 4, TBL is 36 clocks in this mode. All other bits are cleared to 0.

In standalone configuration, StallGuard level is fixed to SGT=2. This setting will work for homing with many 42mm and larger motors in a suitable velocity range. Adapt to full or half current as fitting using CSN configuration pin.

Resulting configuration words:

SDI=0: $00200 / SDI=1: $00204

SCK=0: $90224 / SCK=1: $90264

CSN=0: $C020F / CSN=1: $C021F

$E810F, $A0000

## 5 StallGuard2 Load Measurement

StallGuard2  provides  an  accurate  measurement  of  the  load  on  the  motor.  It  can  be  used  for  stall detection as well as other uses at loads below those which stall the motor, such as CoolStep loadadaptive  current  reduction.  (StallGuard2  is  a  more  precise  evolution  of  the  earlier  StallGuard technology.)

The StallGuard2 measurement value changes linearly over a wide range of load, velocity, and current settings, as shown in Figure 5.1. At maximum motor load, the value goes to zero or near to zero. This corresponds to a load angle of 90° between the magnetic field of the coils and magnets in the rotor. This also is the most energy-efficient point of operation for the motor.

Figure 5.1 StallGuard2 load measurement SG as a function of load

<!-- image -->

Two parameters control StallGuard2 and one status value is returned.

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     | Setting   | Comment            |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------|
| SGT         | 7-bit signed integer that sets the StallGuard2 threshold level for asserting the SG_TST output and sets the optimum measurement range for readout. Negative values increase sensitivity, and positive values reduce sensitivity, so more torque is required to indicate a stall. Zero is a good starting value.                                                                                                                                 | 0         | indifferent value  |
| SGT         | 7-bit signed integer that sets the StallGuard2 threshold level for asserting the SG_TST output and sets the optimum measurement range for readout. Negative values increase sensitivity, and positive values reduce sensitivity, so more torque is required to indicate a stall. Zero is a good starting value.                                                                                                                                 | +1… +63   | less sensitivity   |
| SGT         | 7-bit signed integer that sets the StallGuard2 threshold level for asserting the SG_TST output and sets the optimum measurement range for readout. Negative values increase sensitivity, and positive values reduce sensitivity, so more torque is required to indicate a stall. Zero is a good starting value.                                                                                                                                 | - 1… -64  | higher sensitivity |
| SFILT       | This bit enables the StallGuard2 filter for more precision. If set, reduces the measurement frequency to one measurement per four fullsteps. If cleared, no filtering is performed. Filtering compensates for mechanical asymmetries in the construction of the motor, but at the expense of response time. Unfiltered operation is recommended for rapid stall detection. Filtered operation is recommended for more precise load measurement. | 0         | standard mode      |
| SFILT       | This bit enables the StallGuard2 filter for more precision. If set, reduces the measurement frequency to one measurement per four fullsteps. If cleared, no filtering is performed. Filtering compensates for mechanical asymmetries in the construction of the motor, but at the expense of response time. Unfiltered operation is recommended for rapid stall detection. Filtered operation is recommended for more precise load measurement. | 1         | filtered mode      |

| Status word   | Description                                                                                                                                                                                                                                                                                         | Range   | Comment                                                    |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------|
| SG            | 10-bit unsigned integer StallGuard2 measurement value. A higher value indicates lower mechanical load. A lower value indicates a higher load and therefore a higher load angle. For stall detection, adjust SGT to return an SG value of 0 or slightly higher upon maximum motor load before stall. | 0… 1023 | 0: highest load low value: high load high value: less load |

## 5.1 Tuning the StallGuard2 Threshold

Due to the dependency of the StallGuard2 value SG from motor-specific characteristics and applicationspecific  demands on load and velocity the easiest way to tune the StallGuard2 threshold SGT for  a specific motor type and operating conditions is interactive tuning in the actual application.

## The procedure is:

1. Operate the motor at a reasonable velocity for your application and monitor SG.
2. Apply slowly increasing mechanical load to the motor. If the motor stalls before SG reaches zero,  decrease  SGT.  If  SG  reaches  zero  before  the  motor  stalls,  increase  SGT.  A  good  SGT starting value is zero. SGT is signed, so it can have negative or positive values.
3. The optimum setting is reached when SG is between 0 and 400 at increasing load shortly before the motor stalls, and SG increases by 100 or more without load. SGT in most cases can be tuned together with the motion velocity in a way that SG goes to zero when the motor stalls and the stall output SG\_TST is asserted. This indicates that a step has been lost.

The  system  clock  frequency  affects  SG.  An  external  crystal-stabilized  clock  should  be  used  for applications that demand the highest precision. The power supply voltage also affects SG, so tighter regulation results in more accurate values. SG measurement has a high resolution, and there are a few ways to enhance its accuracy, as described in the following sections.

## 5.1.1 Variable Velocity Operation

Across  a  range  of  velocities,  on-the-fly  adjustment  of  the  StallGuard2  threshold  SGT  improves  the accuracy of the load measurement SG. This also improves the power reduction provided by CoolStep, which is driven by SG. Linear interpolation between two SGT values optimized at different velocities is a  simple  algorithm  for  obtaining  most  of  the  benefits  of  on-the-fly  SGT  adjustment,  as  shown  in Figure 5.2. An optimal SGT curve in black and a two-point interpolated SGT curve in red are shown.

Figure 5.2 Linear interpolation for optimizing SGT with changes in velocity.

<!-- image -->

## 5.1.2 Small Motors with High Torque Ripple and Resonance

Motors with a high detent torque show an increased variation of the StallGuard2 measurement value SG with varying motor currents, especially at low currents. For these motors, the current dependency might need correction in a similar manner to velocity correction for obtaining the highest accuracy.

## 5.1.3 Temperature Dependence of Motor Coil Resistance

Motors working over a wide temperature range may require temperature correction, because motor coil resistance increases with rising temperature. This can be corrected as a linear reduction of SG at increasing temperature, as motor efficiency is reduced.

## 5.1.4 Accuracy and Reproducibility of StallGuard2 Measurement

In a production environment, it may be desirable to use a fixed SGT value within an application for one  motor  type.  Most  of  the  unit-to-unit  variation  in  StallGuard2  measurements  results  from manufacturing  tolerances  in  motor  construction.  The  measurement  error  of  StallGuard2 -provided that all other parameters remain stable -can be as low as:

𝑠𝑡𝑎𝑙𝑙𝐺𝑢𝑎𝑟𝑑 𝑚𝑒𝑎𝑠𝑢𝑟𝑒𝑚𝑒𝑛𝑡 𝑒𝑟𝑟𝑜𝑟 = ±𝑚𝑎𝑥(1, |𝑆𝐺𝑇|)

## 5.2 StallGuard2 Measurement Frequency and Filtering

The StallGuard2 measurement value SG is updated with each full step of the motor. This is enough to safely detect a stall because a stall always means the loss of four full steps. In a practical application, especially  when  using  CoolStep,  a  more  precise  measurement  might  be  more  important  than  an update for each fullstep because the mechanical load never changes instantaneously from one step to the next. For these applications, the SFILT bit enables a filtering function over four load measurements. The filter should always be enabled when high-precision measurement is required. It compensates for variations in motor construction, for example due to misalignment of the phase A to phase  B  magnets.  The  filter  should  only  be  disabled  when  rapid  response  to  increasing  load  is required, such as for stall detection at high velocity.

## 5.3 Detecting a Motor Stall

To  safely  detect  a  motor  stall,  a  stall  threshold  must  be  determined  using  a  specific  SGT  setting. Therefore,  you  need  to  determine  the  maximum  load  the  motor  can  drive  without  stalling  and  to monitor  the  SG  value  at  this  load,  for  example  some  value  within  the  range  0  to  400.  The  stall threshold should be a value safely within the operating limits, to allow for parameter stray. So, your microcontroller software should set a stall threshold which is slightly higher than the minimum value seen before an actual motor stall occurs. The response at an SGT setting at or near 0 gives some idea on the quality of the signal: Check the SG value without load and with maximum load. These values should show a difference of at least 100 or a few 100, which shall be large compared to the offset. If you set the  SGT  value so  that  a  reading  of  0  occurs  at  maximum  motor  load,  an  active  high  stall output signal will be available at SG\_TST output.

## 5.4 Limits of StallGuard2 Operation

StallGuard2 does not operate reliably at extreme motor velocities: Very low motor velocities (for many motors, less than one revolution per second) generate a low back EMF and make the measurement unstable and dependent on environment conditions (temperature, etc.). Other conditions will also lead to extreme settings of SGT and poor response of the measurement value SG to the motor load.

Very high motor velocities, in which the full sinusoidal current is not driven into the motor coils also lead to poor response. These velocities are typically characterized by the motor back EMF reaching the supply voltage.

## 6 CoolStep Load-Adaptive Current Control

CoolStep allows substantial energy savings, especially for motors which see varying loads or operate at a high duty cycle. Because a stepper motor application needs to work with a torque reserve of 30% to  50%,  even  a  constant-load  application  allows  significant  energy  savings  because  CoolStep automatically enables torque reserve when required. Reducing power consumption keeps the system cooler, increases motor life, and allows reducing cost in the power supply and cooling components.

Hint

Reducing motor current by half results in reducing power by a factor of four.

Energy efficiency -

power consumption decreased up to 75%.

Motor generates less heat -

improved mechanical precision.

Less cooling infrastructure -

for motor and driver.

Cheaper motor -

does the job.

Figure 6.1 Energy efficiency example with CoolStep

<!-- image -->

Figure 6.1  shows  the  efficiency  gain  of  a  42mm  stepper  motor  when  using  CoolStep  compared  to standard operation with 50% of torque reserve. CoolStep is enabled above 60rpm in the example.

CoolStep is controlled by several parameters, but two are critical for understanding how it works:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                            | Range   | Comment                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------------|
| SEMIN       | 4-bit unsigned integer that sets a lower threshold. If SG goes below this threshold, CoolStep increases the current to both coils. The 4-bit SEMIN value is scaled by 32 to cover the lower half of the range of the 10-bit SG value. (The name of this parameter is derived from smartEnergy, which is an earlier name for CoolStep.) | 0… 15   | lower CoolStep threshold: SEMINx32           |
| SEMAX       | 4-bit unsigned integer that controls an upper threshold. If SG is sampled equal to or above this threshold enough times, CoolStep decreases the current to both coils. The upper threshold is (SEMIN + SEMAX + 1) x 32.                                                                                                                | 0… 15   | upper CoolStep threshold: (SEMIN+SEMAX+1)x32 |

Figure 6.2 shows the operating regions of CoolStep. The black line represents the SG measurement value, the blue line represents the mechanical load applied to the motor, and the red line represents

the  current  into  the  motor  coils.  When  the  load  increases,  SG  falls  below  SEMIN,  and  CoolStep increases the  current.  When  the  load  decreases  and  SG  rises  above  (SEMIN  +  SEMAX  +  1)  x  32  the current becomes reduced.

Figure 6.2 CoolStep adapts motor current to the load.

<!-- image -->

Four more parameters control CoolStep and one status value is returned:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                 | Range   | Comment                                                                  |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------|
| CS          | Current scale. Scales both coil current values as taken from the internal sine wave table or from the SPI interface. For high precision motor operation, work with a current scaling factor in the range 16 to 31, because scaling down the current values reduces the effective microstep resolution by making microsteps coarser. This setting also controls the maximum current value set by CoolStep ™. | 0… 31   | scaling factor: 1/32, 2/32, … 32/32                                      |
| SEUP        | Number of increments of the coil current for each occurrence of an SG measurement below the lower threshold.                                                                                                                                                                                                                                                                                                | 0… 3    | step width is: 1, 2, 4, 8                                                |
| SEDN        | Number of occurrences of SG measurements above the upper threshold before the coil current is decremented.                                                                                                                                                                                                                                                                                                  | 0… 3    | number of StallGuard measurements per decrement: 32, 8, 2, 1             |
| SEIMIN      | Mode bit that controls the lower limit for scaling the coil current. If the bit is set, the limit is ¼ CS. If the bit is clear, the limit is ½ CS.                                                                                                                                                                                                                                                          | 0       | Minimum motor current: 1/2 of CS                                         |
| SEIMIN      | Mode bit that controls the lower limit for scaling the coil current. If the bit is set, the limit is ¼ CS. If the bit is clear, the limit is ½ CS.                                                                                                                                                                                                                                                          | 1       | 1/4 of CS                                                                |
| Status word | Description                                                                                                                                                                                                                                                                                                                                                                                                 | Range   | Comment                                                                  |
| SE          | 5-bit unsigned integer reporting the actual cur- rent scaling value determined by CoolStep. This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. The value will not be greater than the value of CS or lower than either ¼ CS or ½ CS depending on SEIMIN setting.                                                                                                                   | 0… 31   | Actual motor current scaling factor set by CoolStep: 1/32, 2/32, … 32/32 |

## 6.1 Tuning CoolStep

Before tuning CoolStep, first tune the StallGuard2 threshold level SGT, which affects the range of the load measurement value SG. CoolStep uses SG to operate the motor near the optimum load angle of +90°.

The current  increment  speed  is  specified  in  SEUP,  and  the  current  decrement  speed  is  specified  in SEDN. They can be tuned  separately  because  they  are  triggered  by  different  events  that  may  need different responses. The encodings for these parameters allow the coil currents to be increased much more quickly than decreased, because crossing the lower threshold is a more serious event that may require  a  faster  response.  If  the  response  is  too  slow,  the  motor  may  stall.  In  contrast,  a  slow response  to  crossing  the  upper  threshold  does  not  risk  anything  more  serious  than  missing  an opportunity to save power.

Hint

CoolStep operates between limits controlled by the current scale parameter CS and the SEIMIN bit.

## 6.1.1 Response Time

For fast response to increasing motor load, use a high current increment step SEUP. If the motor load changes slowly, a lower current increment step can be used to avoid motor current oscillations. If the filter controlled by SFILT is enabled, the measurement rate and regulation speed are cut by a factor of four.

## 6.1.2 Low Velocity and Standby Operation

Because StallGuard2 is not able to measure the motor load in standstill and at very low RPM, the current  at  low  velocities  should  be  set  to  an  application-specific  default  value  and  combined  with standstill current reduction settings programmed through the SPI interface.

## 7 SPI Interface

The  TMC2660  allows  full  control  over  all  configuration  parameters  and  mode  bits  through  the  SPI interface. An initialization is required prior to motor operation. The SPI interface also allows reading back status values and bits.

## 7.1 Bus Signals

The SPI bus on the TMC2660 has four signals:

- SCK bus clock input
- SDI serial data input
- SDO serial data output
- CSN chip select input (active low)

The slave  is  enabled  for  an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the slave latching the data from SDI on the rising edge of SCK and driving data to SDO following the falling edge. The most significant bit is sent first. A minimum of 20 SCK clock cycles is required for a bus transaction with the TMC2660.

If more than 20 clocks are driven, the additional bits shifted into SDI are shifted out on SDO after a 20-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the slave. If more than 20 bits are sent, only the last 20 bits received before the rising edge of CSN are recognized as the command.

## 7.2 Bus Timing

SPI interface is synchronized to the internal system clock, which limits the SPI bus clock SCK to half of the system clock frequency. If the system clock is based on the on-chip oscillator, an additional 10% safety margin must be used to ensure reliable data transmission. All SPI inputs as well as the ENN input are internally filtered to avoid triggering on pulses shorter than 20ns. Figure 7.1 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

Figure 7.1 SPI Timing

<!-- image -->

## Hint

Usually, this SPI timing is referred to as SPI MODE 3. Data change is at the negative SCK edge, and SCK return to high level. CSN spans the complete 20 Bit transmission, or 24 Bit, filled with dummy bits in the MSBs.

| SPI Interface Timing                             | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK                                       | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|--------------------------------------------------|--------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                        | Symbol                                     | Conditions                                                                     | Min                                        | Typ                                        | Max                                        | Unit                                       |
| SCK valid before or after change of CSN          | t CC                                       |                                                                                | 10                                         |                                            |                                            | ns                                         |
| CSN high time                                    | t CSH                                      | *) Min time is for synchronous CLK with SCK high one t CH before CSN high only | t CLK                                      | >2t CLK +10                                |                                            | ns                                         |
| SCK low time                                     | t CL                                       | *) Min time is for synchronous CLK only                                        | t CLK                                      | >t CLK +10                                 |                                            | ns                                         |
| SCK high time                                    | t CH                                       | *) Min time is for synchronous CLK only                                        | t CLK                                      | >t CLK +10                                 |                                            | ns                                         |
| SCK frequency using internal clock               | f SCK                                      | Assumes minimum OSC frequency                                                  |                                            |                                            | 4                                          | MHz                                        |
| SCK frequency using external 16MHz clock         | f SCK                                      | Assumes synchronous CLK                                                        |                                            |                                            | 8                                          | MHz                                        |
| SDI setup time before rising edge of SCK         | t DU                                       |                                                                                | 10                                         |                                            |                                            | ns                                         |
| SDI hold time after rising edge of SCK           | t DH                                       |                                                                                | 10                                         |                                            |                                            | ns                                         |
| Data out valid time after falling SCK clock edge | t DO                                       | No capacitive load on SDO                                                      |                                            |                                            | t FILT +5                                  | ns                                         |
| SDI, SCK, and CSN filter delay time              | t FILT                                     | Rising and falling edge                                                        | 12                                         | 20                                         | 30                                         | ns                                         |

## 7.3 Bus Architecture

SPI slaves can be chained and used with a single chip select line. If slaves are chained, they behave like a long shift register. For example, a chain of two motor drivers requires 40 bits to be sent. The last bits shifted to each register in the chain are loaded into an internal register on the rising edge of the CSN input. For example, 24 or 32 bits can be sent to a single motor driver, but it latches just the last 20 bits received before CSN goes high.

Figure 7.2 Interfaces to a TMC429 motion controller chip and a TMC2660 motor driver

<!-- image -->

Figure 7.2 shows the interfaces in a typical application. The SPI bus is used by an embedded MCU to initialize the control registers of both a motion controller and one or more motor drivers. STEP/DIR interfaces are used between the motion controller and the motor drivers.

## 7.4 Register Write Commands

An SPI bus transaction to the TMC2660 is a write command to one of the five write-only registers that hold configuration parameters and mode bits:

| Register                                      | Description                                                                                                                                                                                                                                                                               |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Driver Control Register (DRVCTRL)             | The DRVCTRL register has different formats for controlling the interface to the motion controller depending on whether the STEP/DIR interface is enabled.                                                                                                                                 |
| Chopper Configuration Register (CHOPCONF)     | The CHOPCONF register holds chopper parameters and mode bits.                                                                                                                                                                                                                             |
| CoolStep Configuration Register (SMARTEN)     | The SMARTEN register holds CoolStep parameters and a mode bit. (smartEnergy is an earlier name for CoolStep.)                                                                                                                                                                             |
| StallGuard2 Configuration Register (SGCSCONF) | The SGCSCONF register holds StallGuard2 parameters and a mode bit.                                                                                                                                                                                                                        |
| Driver Configuration Register (DRVCONF)       | The DRVCONF register holds parameters and mode bits used to control the power MOSFETs and the protection circuitry. It also holds the SDOFF bit which controls the STEP/DIR interface and the RDSEL parameter which controls the contents of the response returned in an SPI transaction. |

In the following sections, multibit binary values are prefixed with a % sign, for example %0111.

## 7.4.1 Write Command Overview

The table below shows the formats for the five register write commands. Bits 19, 18, and sometimes 17  select  the  register  being  written,  as  shown  in  bold.  The  DRVCTRL  register  has  two  formats,  as selected by the SDOFF bit. Bits shown as 0 must always be written as 0, and bits shown as 1 must always  be  written  with  1.  Detailed  descriptions  of  each  parameter  and  mode  bit  are  given  in  the following sections.

|   Register/ Bit | DRVCTRL ( SDOFF =1)   | DRVCTRL ( SDOFF =0)   | CHOPCONF   | SMARTEN   | SGCSCONF   | DRVCONF     |
|-----------------|-----------------------|-----------------------|------------|-----------|------------|-------------|
|              19 | 0                     | 0                     | 1          | 1         | 1          | 1           |
|              18 | 0                     | 0                     | 0          | 0         | 1          | 1           |
|              17 | PHA                   | 0                     | 0          | 1         | 0          | 1           |
|              16 | CA7                   | 0                     | TBL1       | 0         | SFILT      | TST         |
|              15 | CA6                   | 0                     | TBL0       | SEIMIN    | 0          | SLPH1       |
|              14 | CA5                   | 0                     | CHM        | SEDN1     | SGT6       | SLPH0       |
|              13 | CA4                   | 0                     | RNDTF      | SEDN0     | SGT5       | SLPL1       |
|              12 | CA3                   | 0                     | HDEC1      | 0         | SGT4       | SLPL0       |
|              11 | CA2                   | 0                     | HDEC0      | SEMAX3    | SGT3       | 0           |
|              10 | CA1                   | 0                     | HEND3      | SEMAX2    | SGT2       | DISS2G      |
|               9 | CA0                   | INTPOL                | HEND2      | SEMAX1    | SGT1       | TS2G1       |
|               8 | PHB                   | DEDGE                 | HEND1      | SEMAX0    | SGT0       | TS2G0       |
|               7 | CB7                   | 0                     | HEND0      | 0         | 0          | SDOFF       |
|               6 | CB6                   | 0                     | HSTRT2     | SEUP1     | 0          | VSENSE      |
|               5 | CB5                   | 0                     | HSTRT1     | SEUP0     | 0          | RDSEL1      |
|               4 | CB4                   | 0                     | HSTRT0     | 0         | CS4        | RDSEL0      |
|               3 | CB3                   | MRES3                 | TOFF3      | SEMIN3    | CS3        | OTSENS *)   |
|               2 | CB2                   | MRES2                 | TOFF2      | SEMIN2    | CS2        | SHRTSENS *) |
|               1 | CB1                   | MRES1                 | TOFF1      | SEMIN1    | CS1        | EN_PFD *)   |
|               0 | CB0                   | MRES0                 | TOFF0      | SEMIN0    | CS0        | EN_S2VS *)  |

## 7.4.2 Read Response Overview

The  table  below  shows  the  formats  for  the  read  response.  The  RDSEL  parameter  in  the  DRVCONF register selects the format of the read response.

|   Bit | RDSEL =%00                   | RDSEL =%01                   | RDSEL =%10                   | RDSEL =%11*)                 |
|-------|------------------------------|------------------------------|------------------------------|------------------------------|
|    19 | MSTEP9                       | SG9                          | SG9                          | UV_7V                        |
|    18 | MSTEP8                       | SG8                          | SG8                          | ENN input                    |
|    17 | MSTEP7                       | SG7                          | SG7                          | S2VSB                        |
|    16 | MSTEP6                       | SG6                          | SG6                          | S2GB                         |
|    15 | MSTEP5                       | SG5                          | SG5                          | S2VSA                        |
|    14 | MSTEP4                       | SG4                          | SE4                          | S2GA                         |
|    13 | MSTEP3                       | SG3                          | SE3                          | OT150                        |
|    12 | MSTEP2                       | SG2                          | SE2                          | OT136                        |
|    11 | MSTEP1                       | SG1                          | SE1                          | OT120                        |
|    10 | MSTEP0                       | SG0                          | SE0                          | OT100                        |
|     9 | 0                            | 0                            | 0                            | 1                            |
|     8 | 0                            | 0                            | 0                            | 1                            |
|     7 | STST                         | STST                         | STST                         | STST                         |
|     6 | OLB                          | OLB                          | OLB                          | OLB                          |
|     5 | OLA                          | OLA                          | OLA                          | OLA                          |
|     4 | SHORTB (S2GB for non-C-type) | SHORTB (S2GB for non-C-type) | SHORTB (S2GB for non-C-type) | SHORTB (S2GB for non-C-type) |
|     3 | SHORTA (S2GA for non-C-type) | SHORTA (S2GA for non-C-type) | SHORTA (S2GA for non-C-type) | SHORTA (S2GA for non-C-type) |
|     2 | OTPW                         | OTPW                         | OTPW                         | OTPW                         |
|     1 | OT                           | OT                           | OT                           | OT                           |
|     0 | SG                           | SG                           | SG                           | SG                           |

## 7.5 Driver Control Register (DRVCTRL)

The format of the DRVCTRL register depends on the state of the SDOFF mode bit.

SPI Mode

SDOFF bit is set, the STEP/DIR interface is disabled, and DRVCTRL is the interface for specifying the currents through each coil.

STEP/DIR Mode

SDOFF bit is clear, the STEP/DIR interface is enabled, and DRVCTRL is a configuration register for the STEP/DIR interface.

## 7.5.1 DRVCTRL Register in SPI Mode

| DRVCTRL   | DRVCTRL   | Driver Control in SPI Mode (SDOFF=1)   | Driver Control in SPI Mode (SDOFF=1)                                                                                                                                                                    |
|-----------|-----------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit       | Name      | Function                               | Comment                                                                                                                                                                                                 |
| 19        | 0         | Register address bit                   |                                                                                                                                                                                                         |
| 18        | 0         | Register address bit                   |                                                                                                                                                                                                         |
| 17        | PHA       | Polarity A                             | Sign of current flow through coil A: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                            |
| 16        | CA7       | Current A MSB                          | Magnitude of current flow through coil A. The range is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255. |
| 15        | CA6       |                                        | Magnitude of current flow through coil A. The range is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255. |
| 14        | CA5       |                                        | Magnitude of current flow through coil A. The range is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255. |
| 13        | CA4       |                                        | Magnitude of current flow through coil A. The range is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255. |
| 12        | CA3       |                                        | Magnitude of current flow through coil A. The range is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255. |
| 11        | CA2       |                                        | Magnitude of current flow through coil A. The range is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255. |
| 10        | CA1       |                                        | Magnitude of current flow through coil A. The range is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255. |
| 9         | CA0       | Current A LSB                          |                                                                                                                                                                                                         |
| 8         | PHB       | Polarity B                             | Sign of current flow through coil B: 0: Current flows from OB1 pins to OB2 pins. 1: Current flows from OB2 pins to OB1 pins. Magnitude of current flow through coil B. The range                        |
| 7         | CB7       | Current B MSB                          | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |
| 6         | CB6       |                                        | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |
| 5         | CB5       |                                        | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |
| 4         | CB4       |                                        | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |
| 3         | CB3       |                                        | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |
| 2         | CB2       |                                        | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |
| 1         | CB1       |                                        | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |
| 0         | CB0       | Current B LSB                          | is 0 to 248, if hysteresis or offset are used up to their full extent. The resulting value after applying hysteresis or offset must not exceed 255.                                                     |

## 7.5.2 DRVCTRL Register in STEP/DIR Mode

| DRVCTRL   | DRVCTRL   | Driver Control in STEP/DIR Mode (SDOFF=0)   | Driver Control in STEP/DIR Mode (SDOFF=0)                                                                                         |
|-----------|-----------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Bit       | Name      | Function                                    | Comment                                                                                                                           |
| 19        | 0         | Register address bit                        |                                                                                                                                   |
| 18        | 0         | Register address bit                        |                                                                                                                                   |
| 17        | 0         | Reserved                                    |                                                                                                                                   |
| 16        | 0         | Reserved                                    |                                                                                                                                   |
| 15        | 0         | Reserved                                    |                                                                                                                                   |
| 14        | 0         | Reserved                                    |                                                                                                                                   |
| 13        | 0         | Reserved                                    |                                                                                                                                   |
| 12        | 0         | Reserved                                    |                                                                                                                                   |
| 11        | 0         | Reserved                                    |                                                                                                                                   |
| 10        | 0         | Reserved                                    |                                                                                                                                   |
| 9         | INTPOL    | Enable STEP interpolation                   | 0: Disable STEP pulse interpolation. 1: Enable STEP pulse multiplication by 16.                                                   |
| 8         | DEDGE     | Enable double edge STEP pulses              | 0: Rising STEP pulse edge is active, falling edge is inactive. 1: Both rising and falling STEP pulse edges are active.            |
| 7         | 0         | Reserved                                    |                                                                                                                                   |
| 6         | 0         | Reserved                                    |                                                                                                                                   |
| 5         | 0         | Reserved                                    |                                                                                                                                   |
| 4         | 0         | Reserved                                    |                                                                                                                                   |
| 3         | MRES3     | Microstep resolution for STEP/DIR mode      | Microsteps per 90°: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |
| 2         | MRES2     | Microstep resolution for STEP/DIR mode      | Microsteps per 90°: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |
| 1         | MRES1     | Microstep resolution for STEP/DIR mode      | Microsteps per 90°: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |
| 0         | MRES0     | Microstep resolution for STEP/DIR mode      | Microsteps per 90°: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |

## 7.6 Chopper Control Register (CHOPCONF)

| CHOPCONF   | CHOPCONF                                                     |                                                                                                                                                                                                                                                                                                                                                                                            |
|------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit        | Name Function                                                | Comment                                                                                                                                                                                                                                                                                                                                                                                    |
| 19         | 1                                                            |                                                                                                                                                                                                                                                                                                                                                                                            |
| 18         | Register address bit 0 Register address bit                  |                                                                                                                                                                                                                                                                                                                                                                                            |
| 17         | 0 Register address bit                                       |                                                                                                                                                                                                                                                                                                                                                                                            |
| 16         | TBL1 Blanking time                                           | interval, in system clock periods:                                                                                                                                                                                                                                                                                                                                                         |
| 15         | TBL0                                                         | Blanking time %00: 16 %01: 24 %10: 36 %11: 54                                                                                                                                                                                                                                                                                                                                              |
| 14         | CHM Chopper mode                                             | This mode bit affects the interpretation of the HDEC, HEND, and HSTRT parameters shown below. 0 Standard mode (SpreadCycle) 1 Constant t OFF with fast decay time.                                                                                                                                                                                                                         |
| 13         | RNDTF Random TOFF time                                       | decay is after on time. Enable randomizing the slow decay phase duration: 0: Chopper off time is fixed as set by bits t OFF 1: Random mode, t OFF is random modulated by dN CLK = -24 … + 6 clocks.                                                                                                                                                                                        |
| 12         | HDEC1 Hysteresis decrement interval or Fast decay mode HDEC0 | CHM=0 Hysteresis decrement period setting, in system clock periods: %00: 16 %01: 32 %10: 48                                                                                                                                                                                                                                                                                                |
| 11 10 9    | HEND3 Hysteresis end (low) value or HEND2                    | %11: 64 CHM=1 HDEC1=0: current comparator can terminate the fast decay phase before timer expires. HDEC1=1: only the timer terminates the fast decay phase. HDEC0: MSB of fast decay time setting. CHM=0 %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes used for the hysteresis chopper. |
| 8 7        | Sine wave offset                                             | CHM=1 %0000 … %1111: Offset is -3, -2, - 1, 0, 1, …, 12 This is the sine wave offset and 1/512 of the value becomes added to the absolute value of each sine wave entry. Hysteresis start offset from HEND: %000: 1 %100: 5 %001: 2 %101: 6 %010: 3 %110: 7 %011: 4 %111: 8 Effective: HEND+HSTRT must be ≤ 15                                                                             |
| 6          | HEND1 HEND0 HSTRT2 Hysteresis start value                    | CHM=0                                                                                                                                                                                                                                                                                                                                                                                      |
| 5          | or                                                           |                                                                                                                                                                                                                                                                                                                                                                                            |
|            | Fast decay time setting                                      |                                                                                                                                                                                                                                                                                                                                                                                            |
|            | HSTRT1                                                       |                                                                                                                                                                                                                                                                                                                                                                                            |
| 4          | HSTRT0                                                       | CHM=1 Three least-significant bits of the duration of the fast decay phase. The MSB is HDEC0. Fast decay time is a multiple of system clock periods: N CLK = 32 x ( HDEC0+HSTRT )                                                                                                                                                                                                          |

| CHOPCONF   | CHOPCONF   | Chopper Configuration   | Chopper Configuration                                                                                                                                                                                                                                         |
|------------|------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit        | Name       | Function                | Comment                                                                                                                                                                                                                                                       |
| 3          | TOFF3      | Off time/MOSFET disable | Duration of slow decay phase. If TOFF is 0, the MOSFETs are shut off. If TOFF is nonzero, slow decay time is a multiple of system clock periods: N CLK = 24 + (32 x TOFF) %0000: Driver disable, all bridges off %0001: 1 (use with TBL of minimum 24 clocks) |
| 2          | TOFF2      | Off time/MOSFET disable |                                                                                                                                                                                                                                                               |
| 1          | TOFF1      | Off time/MOSFET disable |                                                                                                                                                                                                                                                               |
| 0          | TOFF0      | Off time/MOSFET disable | %0010 … %1111: 2 … 15                                                                                                                                                                                                                                         |

## 7.7 CoolStep Control Register (SMARTEN)

| SMARTEN   | SMARTEN   | CoolStep Configuration                               | CoolStep Configuration                                                                                                                                                |
|-----------|-----------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit       | Name      | Function                                             | Comment                                                                                                                                                               |
| 19        | 1         | Register address bit                                 |                                                                                                                                                                       |
| 18        | 0         | Register address bit                                 |                                                                                                                                                                       |
| 17        | 1         | Register address bit                                 |                                                                                                                                                                       |
| 16        | 0         | Reserved                                             |                                                                                                                                                                       |
| 15        | SEIMIN    | Minimum CoolStep current                             | 0: ½ CS current setting 1: ¼ CS current setting                                                                                                                       |
| 14        | SEDN1     | Current decrement speed                              | Number of times that the StallGuard2 value must be sampled equal to or above the upper threshold for each decrement of the coil current: %00: 32 %01: 8 %10: 2 %11: 1 |
| 13        | SEDN0     | Current decrement speed                              | Number of times that the StallGuard2 value must be sampled equal to or above the upper threshold for each decrement of the coil current: %00: 32 %01: 8 %10: 2 %11: 1 |
| 12        | 0         | Reserved                                             |                                                                                                                                                                       |
| 11        | SEMAX3    | Upper CoolStep threshold as an offset from the lower | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 10        | SEMAX2    | Upper CoolStep threshold as an offset from the lower | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 9         | SEMAX1    | Upper CoolStep threshold as an offset from the lower | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 8         | SEMAX0    | threshold                                            | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 7         | 0         | Reserved                                             |                                                                                                                                                                       |
| 6         | SEUP1     | Current increment size                               | Number of current increment steps for each time that the StallGuard2 value SG is sampled below the lower threshold: %00: 1 %01: 2 %10: 4 %11: 8                       |
| 5         | SEUP0     | Current increment size                               | Number of current increment steps for each time that the StallGuard2 value SG is sampled below the lower threshold: %00: 1 %01: 2 %10: 4 %11: 8                       |
| 4         | 0         | Reserved                                             |                                                                                                                                                                       |
| 3         | SEMIN3    | Lower CoolStep threshold/CoolStep disable            | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |
| 2         | SEMIN2    | Lower CoolStep threshold/CoolStep disable            | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |
| 1         | SEMIN1    | Lower CoolStep threshold/CoolStep disable            | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |
| 0         | SEMIN0    | Lower CoolStep threshold/CoolStep disable            | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |

## 7.8 StallGuard2 Control Register (SGCSCONF)

| SGCSCONF   | SGCSCONF   | StallGuard 2™ and Current Setting               | StallGuard 2™ and Current Setting                                                                                                                                                                                                                                                        |
|------------|------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit        | Name       | Function                                        | Comment                                                                                                                                                                                                                                                                                  |
| 19         | 1          | Register address bit                            |                                                                                                                                                                                                                                                                                          |
| 18         | 1          | Register address bit                            |                                                                                                                                                                                                                                                                                          |
| 17         | 0          | Register address bit                            |                                                                                                                                                                                                                                                                                          |
| 16         | SFILT      | StallGuard2 filter enable                       | 0: Standard mode, fastest response time. 1: Filtered mode, updated once for each four fullsteps to compensate for variation in motor construction, highest accuracy.                                                                                                                     |
| 15         | 0          | Reserved                                        |                                                                                                                                                                                                                                                                                          |
| 14         | SGT6       | StallGuard2 threshold value                     | The StallGuard2 threshold value controls the optimum measurement range for readout and stall indicator output (SG_TST). A lower value results in a higher sensitivity and less torque is required to indicate a stall. The value is a two's complement signed integer. Range: -64 to +63 |
| 13         | SGT5       | StallGuard2 threshold value                     | The StallGuard2 threshold value controls the optimum measurement range for readout and stall indicator output (SG_TST). A lower value results in a higher sensitivity and less torque is required to indicate a stall. The value is a two's complement signed integer. Range: -64 to +63 |
| 12         | SGT4       | StallGuard2 threshold value                     | The StallGuard2 threshold value controls the optimum measurement range for readout and stall indicator output (SG_TST). A lower value results in a higher sensitivity and less torque is required to indicate a stall. The value is a two's complement signed integer. Range: -64 to +63 |
| 11         | SGT3       | StallGuard2 threshold value                     | The StallGuard2 threshold value controls the optimum measurement range for readout and stall indicator output (SG_TST). A lower value results in a higher sensitivity and less torque is required to indicate a stall. The value is a two's complement signed integer. Range: -64 to +63 |
| 10         | SGT2       | StallGuard2 threshold value                     | The StallGuard2 threshold value controls the optimum measurement range for readout and stall indicator output (SG_TST). A lower value results in a higher sensitivity and less torque is required to indicate a stall. The value is a two's complement signed integer. Range: -64 to +63 |
| 9          | SGT1       | StallGuard2 threshold value                     | The StallGuard2 threshold value controls the optimum measurement range for readout and stall indicator output (SG_TST). A lower value results in a higher sensitivity and less torque is required to indicate a stall. The value is a two's complement signed integer. Range: -64 to +63 |
| 8          | SGT0       | StallGuard2 threshold value                     | The StallGuard2 threshold value controls the optimum measurement range for readout and stall indicator output (SG_TST). A lower value results in a higher sensitivity and less torque is required to indicate a stall. The value is a two's complement signed integer. Range: -64 to +63 |
| 7          | 0          | Reserved                                        |                                                                                                                                                                                                                                                                                          |
| 6          | 0          | Reserved                                        |                                                                                                                                                                                                                                                                                          |
| 5          | 0          | Reserved                                        |                                                                                                                                                                                                                                                                                          |
| 4          | CS4        | Current scale (scales digital currents A and B) | Current scaling for SPI and step/direction operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current                                                                             |
| 3          | CS3        | Current scale (scales digital currents A and B) | Current scaling for SPI and step/direction operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current                                                                             |
| 2          | CS2        | Current scale (scales digital currents A and B) | Current scaling for SPI and step/direction operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current                                                                             |
| 1          | CS1        | Current scale (scales digital currents A and B) | Current scaling for SPI and step/direction operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current                                                                             |
| 0          | CS0        | Current scale (scales digital currents A and B) | Current scaling for SPI and step/direction operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current                                                                             |

## 7.9 Driver Control Register (DRVCONF)

| DRVCONF   | DRVCONF     | Driver Configuration                                  | Driver Configuration                                                                                                                                                                                                                                                           |
|-----------|-------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit       | Name        | Function                                              | Comment                                                                                                                                                                                                                                                                        |
| 19        | 1           | Register address bit                                  |                                                                                                                                                                                                                                                                                |
| 18        | 1           | Register address bit                                  |                                                                                                                                                                                                                                                                                |
| 17        | 1           | Register address bit                                  |                                                                                                                                                                                                                                                                                |
| 16        | TST         | Reserved TEST mode                                    | Must be cleared for normal operation. When set, the SG_TST output exposes digital test values, and the TEST_ANA output exposes analog test values.                                                                                                                             |
| 15        | SLPH1       | Slope control, high side                              | %00: Minimum %01: Minimum (+tc) %10: Medium (+tc) %11: Maximum Temperature compensated mode (tc) increases the high- side MOSFET gate driver strength if the overtemperature temperature is reached. This compensates for temperature dependency of high-side slope control. 0 |
| 14        | SLPH0       | Slope control, high side                              | %00: Minimum %01: Minimum (+tc) %10: Medium (+tc) %11: Maximum Temperature compensated mode (tc) increases the high- side MOSFET gate driver strength if the overtemperature temperature is reached. This compensates for temperature dependency of high-side slope control. 0 |
| 13        | SLPL1       | Slope control, low                                    | warning                                                                                                                                                                                                                                                                        |
| 12        | SLPL0       | side                                                  | warning                                                                                                                                                                                                                                                                        |
| 11        | 0           | Reserved                                              | Set to                                                                                                                                                                                                                                                                         |
| 10        | DISS2G      | Short to GND protection disable                       | 0: Short to GND protection is enabled. 1: Short to GND protection is disabled.                                                                                                                                                                                                 |
| 9         | TS2G1       | Short to GND                                          | %00: 3.2µs.                                                                                                                                                                                                                                                                    |
| 8         | TS2G0       | detection timer                                       | %01: 1.6µs. %10: 1.2µs. %11: 0.8µs.                                                                                                                                                                                                                                            |
| 7         | SDOFF       | STEP/DIR interface disable                            | 0: Enable STEP and DIR interface. 1: Disable STEP and DIR interface. SPI interface is used to move motor.                                                                                                                                                                      |
| 6         | VSENSE      | Sense resistor voltage-based current scaling          | 0: Full-scale sense resistor voltage is 310mV. 1: Full-scale sense resistor voltage is 165mV. (Full-scale refers to a current setting of 31 and a DAC value of 255.)                                                                                                           |
| 5         | RDSEL1      | Select value for read out (RD bits)                   | %00 Microstep position read back %01 StallGuard2 level read back %10 StallGuard2 & CoolStep current level read                                                                                                                                                                 |
| 4         | RDSEL0      | Select value for read out (RD bits)                   | back %11 *) All status flags and detectors                                                                                                                                                                                                                                     |
| 3         | OTSENS *)   | Overtemperature sensitivity                           | 0: Shutdown at 150°C 1: Sensitive shutdown at 136°C                                                                                                                                                                                                                            |
| 2         | SHRTSENS *) | Short to GND detection sensitivity                    | 0: Low sensitivity 1: High sensitivity - better protection for high side FETs                                                                                                                                                                                                  |
| 1         | EN_PFD *)   | Enable Passive fast decay / 5V undervoltage threshold | 0: No additional motor dampening. 1: Motor dampening to reduce motor resonance at medium velocity. In addition, this bit reduces the lower nominal operation voltage limit from 7V to 4.5V                                                                                     |
| 0         | EN_S2VS *)  | Enable short to VS & CLK fail protection              | 0: Short to VS and clock failsafe protection disabled 1: Short to VS / overcurrent protection enabled. In addition, enables protection against clock input CLK fail, when using an external clock source.                                                                      |

## 7.10 Read Response

For  every  write  command  sent  to  the  motor  driver,  a  20-bit  response  is  returned  to  the  motion controller.  The  response  has  one  of  three  formats,  as  selected  by  the  RDSEL  parameter  in  the DRVCONF register. The table below shows these formats. Software must not depend on the value of any bit shown as reserved.

| DRVSTATUS   | DRVSTATUS   | DRVSTATUS   | DRVSTATUS   | DRVSTATUS   | Read Response                           | Read Response                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------------|-------------|-------------|-------------|-------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit         | Name        | Name        | Name        | Name        | Function                                | Comment                                                                                                                                                                                                                                                                                                                                                                                                              |
| Bit         | RDSEL %00   | %01         | %10         | %11         | Function                                | Comment                                                                                                                                                                                                                                                                                                                                                                                                              |
| 19          | MSTEP9      | SG9         | SG9         | UV_7V       | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                                                                                                                    |
| 18          | MSTEP8      | SG8         | SG8         | ENN in      | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                                                                                                                    |
| 17          | MSTEP7      | SG7         | SG7         | S2VSB       | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                                                                                                                    |
| 16          | MSTEP6      | SG6         | SG6         | S2GB        | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                                                                                                                    |
| 15          | MSTEP5      | SG5         | SG5         | S2VSA       | StallGuard2                             | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                                                                                                                    |
| 14          | MSTEP4      | SG4         | SE4         | S2GA        | SG9:5 and                               | StallGuard2 value SG9:0. StallGuard2 value SG9:5 and the actual CoolStep scaling value SE4:0.                                                                                                                                                                                                                                                                                                                        |
| 13          | MSTEP3      | SG3         | SE3         | OT150       | CoolStep                                | StallGuard2 value SG9:0. StallGuard2 value SG9:5 and the actual CoolStep scaling value SE4:0.                                                                                                                                                                                                                                                                                                                        |
| 12          | MSTEP2      | SG2         | SE2         | OT136       | SE4:0 /                                 | Full diagnostic: <7V VS flag, state of ENN                                                                                                                                                                                                                                                                                                                                                                           |
| 11          | MSTEP1      | SG1         | SE1         | OT120       | Diagnostic                              | input, individual short to GND and short to                                                                                                                                                                                                                                                                                                                                                                          |
| 10          | MSTEP0      | SG0         | SE0         | OT100       | status                                  | VS flags, temperature detector readout                                                                                                                                                                                                                                                                                                                                                                               |
| 9           | 0           | 0           | 0           | 1           | -                                       | %11 response allows to distinguish -C type.                                                                                                                                                                                                                                                                                                                                                                          |
| 8           | 0 1         | 0 1         | 0 1         | 0 1         |                                         | %11 response allows to distinguish -C type.                                                                                                                                                                                                                                                                                                                                                                          |
| 7           | STST        | STST        | STST        | STST        | Standstill indicator                    | Non-C-type delivers %00 in each case. 0: No standstill condition detected. 1: No active edge occurred on the STEP input during the last 2 20 system clock cycles.                                                                                                                                                                                                                                                    |
| 6           | OLB         | OLB         | OLB         | OLB         | Open load                               | 0: No open load condition detected. 1: No chopper event has happened the last period with constant coil                                                                                                                                                                                                                                                                                                              |
| 5           | OLA         | OLA         | OLA         | OLA         | indicator                               | during polarity. Only a current above 1/16 of the maximum setting can clear this bit! Hint: This bit is only a status indicator. The chip takes no other action when this bit is set. False indications may occur during fast motion and at standstill. Check this bit only during slow motion.                                                                                                                      |
| 4           | SHORTB      | SHORTB      | SHORTB      | SHORTB      | Short detection status                  | 0: No short condition. 1: Short condition. The short counter is incremented by each short circuit and the chopper cycle is suspended. The counter is decremented for each phase polarity change. The MOSFETs are shut off when the counter reaches 3 and remain shut off until the shutdown condition is cleared by disabling and re-enabling the driver. The shutdown condition reset by de-asserting the ENN input |
| 3           | SHORTA      | SHORTA      | SHORTA      | SHORTA      | Overtemp. warning                       | becomes or clearing the TOFF parameter. 0: No overtemperature warning condition. 1: Warning threshold is active. 0: No overtemperature shutdown condition. 1: Overtemperature shutdown has occurred.                                                                                                                                                                                                                 |
| 2           | OTPW        | OTPW        | OTPW        | OTPW        |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1           | OT          | OT          | OT          | OT          | Overtemp. shutdown                      |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0           | SG          | SG          | SG          | SG          | StallGuard2 status                      | 0: No motor stall detected. 1: StallGuard2 threshold has been reached, and the SG_TST output is driven high.                                                                                                                                                                                                                                                                                                         |

## 7.11 Device Initialization

The following sequence of SPI commands is an example of enabling the driver and initializing the chopper:

```
SPI = $901B4; // Hysteresis mode or SPI = $94557; // Constant toff mode SPI = $D001F; // Current setting: $d001F (max. current) SPI = $E0010; // low driver strength, StallGuard2 read, SDOFF=0 SPI = $00000; // 256 microstep setting First test of CoolStep current control: SPI = $A8202; // Enable CoolStep with minimum current ¼ CS
```

The configuration parameters should be tuned to the motor and application for  optimum performance.

## 8 STEP/DIR Interface

The STEP and DIR inputs provide a simple, standard interface compatible with many existing motion controllers.  The  MicroPlyer  STEP  pulse  interpolator  brings  the  smooth  motor  operation  of  highresolution microstepping to applications originally designed for coarser stepping and reduces pulse bandwidth.

## 8.1 Timing

Figure 8.1 shows the timing parameters for the STEP and DIR signals, and the table below gives their specifications.  When  the  DEDGE  mode  bit  in  the  DRVCTRL  register  is  set,  both  edges  of  STEP  are active. If DEDGE is cleared, only rising edges are active. STEP and DIR are sampled and synchronized to the system clock. An internal analog filter removes glitches on the signals, such as those caused by long PCB traces. If the signal source is far from the chip, and especially if the signals are carried on cables, the signals should be filtered or differentially transmitted.

<!-- image -->

Figure 8.1 STEP and DIR timing.

| STEP and DIR Interface Timing                      | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|----------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                          | Symbol                                     | Conditions                                 | Min                                        | Typ                                        | Max                                        | Unit                                       |
| Step frequency (at maximum microstep resolution)   | f STEP                                     | DEDGE=0                                    |                                            |                                            | ½ f CLK                                    |                                            |
| Step frequency (at maximum microstep resolution)   | f STEP                                     | DEDGE=1                                    |                                            |                                            | ¼ f CLK                                    |                                            |
| Fullstep frequency                                 | f FS                                       |                                            |                                            |                                            | f CLK /512                                 |                                            |
| STEP input low time                                | t SL                                       |                                            | max(t FILTSD , t CLK +20)                  |                                            |                                            | ns                                         |
| STEP input high time                               | t SH                                       |                                            | max(t FILTSD , t CLK +20)                  |                                            |                                            | ns                                         |
| DIR to STEP setup time                             | t DSU                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| DIR after STEP hold time                           | t DSH                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| STEP and DIR spike filtering time TMC2660C *)      | t FILTSD                                   | Rising and falling edge                    | 12                                         | 20                                         | 40                                         | ns                                         |
| STEP and DIR sampling relative to rising CLK input | t SDCLKHI                                  | Before rising edge of CLK                  |                                            | t FILTSD                                   |                                            | ns                                         |

## 8.2 Microstep Table

The internal microstep table maps the sine function from 0° to 90°. Symmetries allow mapping the sine and cosine functions from 0° to 360° with this table. The angle is encoded as a 10-bit unsigned integer MSTEP provided by the microstep counter. The size of the increment applied to the counter while microstepping through this table is controlled by the microstep resolution setting MRES in the DRVCTRL  register.  Depending  on  the  DIR  input,  the  microstep  counter  is  increased  (DIR=0)  or decreased  (DIR=1)  by  the  step  size  with  each  STEP  active  edge.  Despite  many  entries  in  the  last quarter of the table being equal, the electrical angle continuously changes, because either the sine wave or cosine wave is in an area, where the current vector changes monotonically from position to position.  Figure  8.2  shows  the  table.  The  largest  values  are  248,  which  leaves  headroom  used  for adding an offset.

Figure 8.2 Internal microstep table showing the first quarter of the sine wave.

| Entry    |   32-63 |   64-95 |   96-127 | 128-159   | 160-191   |   192-223 |   224-255 |
|----------|---------|---------|----------|-----------|-----------|-----------|-----------|
| 0-31 0 1 |      49 |      96 |      138 | 176 207   |           |       229 |       243 |
| 1 2      |      51 |      97 |      140 | 177       | 207       |       230 |       244 |
| 2 4      |      52 |      98 |      141 | 178       | 208       |       231 |       244 |
| 3 5      |      54 |     100 |      142 | 179       | 209       |       231 |       244 |
| 4 7      |      55 |     101 |      143 | 180       | 210       |       232 |       244 |
| 5 8      |      57 |     103 |      145 | 181       | 211       |       232 |       245 |
| 6 10     |      58 |     104 |      146 | 182       | 212       |       233 |       245 |
| 7 11     |      60 |     105 |      147 | 183       | 212       |       233 |       245 |
| 8 13     |      61 |     107 |      148 | 184       | 213       |       234 |       245 |
| 9 14     |      62 |     108 |      150 | 185       | 214       |       234 |       246 |
| 10 16    |      64 |     109 |      151 | 186       | 215       |       235 |       246 |
| 11 17    |      65 |     111 |      152 | 187       | 215       |       235 |       246 |
| 12 19    |      67 |     112 |      153 | 188       | 216       |       236 |       246 |
| 13 21    |      68 |     114 |      154 | 189       | 217       |       236 |       246 |
| 14 22    |      70 |     115 |      156 | 190       | 218       |       237 |       247 |
| 15 24    |      71 |     116 |      157 | 191       | 218       |       237 |       247 |
| 16 25    |      73 |     118 |      158 | 192       | 219       |       238 |       247 |
| 17 27    |      74 |     119 |      159 | 193       | 220       |       238 |       247 |
| 18 28    |      76 |     120 |      160 | 194       | 220       |       238 |       247 |
| 19 30    |      77 |     122 |      161 | 195       | 221       |       239 |       247 |
| 20 31    |      79 |     123 |      163 | 196       | 222       |       239 |       247 |
| 21 33    |      80 |     124 |      164 | 197       | 223       |       240 |       247 |
| 22 34    |      81 |     126 |      165 | 198       | 223       |       240 |       248 |
| 23 36    |      83 |     127 |      166 | 199       | 224       |       240 |       248 |
| 24 37    |      84 |     128 |      167 | 200       | 225       |       241 |       248 |
| 25 39    |      86 |     129 |      168 | 201       | 225       |       241 |       248 |
| 26 40    |      87 |     131 |      169 | 201       | 226       |       241 |       248 |
| 27 42    |      89 |     132 |      170 | 202       | 226       |       242 |       248 |
| 28 43    |      90 |     133 |      172 | 203       | 227       |       242 |       248 |
| 29 45    |      91 |     135 |      173 | 204       | 228       |       242 |       248 |
| 30 46    |      93 |     136 |      174 | 205       | 228       |       243 |       248 |
| 31 48    |      94 |     137 |      175 | 206       | 229       |       243 |       248 |

## 8.3 Changing Resolution

The application may need to change the microstepping resolution to get the best performance from the  motor.  For  example,  high-resolution  microstepping  may  be  used  for  precision  operations  on  a workpiece, and then fullstepping may be used for maximum torque at maximum velocity to advance to  the  next  workpiece.  When  changing  to  coarse  resolutions  like  fullstepping  or  halfstepping, switching  should  occur  at  or  near  positions  that  correspond  to  steps  in  the  lower  resolution,  as shown in Table 8.1.

Table 8.1 Optimum positions for changing to halfstep and fullstep resolution

| Step Position   |   MSTEP Value | Coil A Current   | Coil B Current   |
|-----------------|---------------|------------------|------------------|
| Half step 0     |             0 | 0%               | 100%             |
| Full step 0     |           128 | 70.7%            | 70.7%            |
| Half step 1     |           256 | 100%             | 0%               |
| Full step 1     |           384 | 70.7%            | -70.7%           |
| Half step 2     |           512 | 0%               | -100%            |
| Full step 2     |           640 | -70.7%           | -70.7%           |
| Half step 3     |           768 | -100%            | 0%               |
| Full step 3     |           896 | -70.7%           | 70.7%            |

## 8.4 MicroPlyer Step Interpolator

For  each  active  edge  on  STEP,  MicroPlyer  produces  16  microsteps  at  256x  resolution,  as  shown  in Figure 8.3. MicroPlyer is enabled by setting the INTPOL bit in the DRVCTRL register. It supports input at  16x  resolution,  which it transforms into 256x resolution. The step rate for  each 16 microsteps is determined by measuring the time interval of the previous step period and dividing it into 16 equal parts.  The  maximum time  between two microsteps corresponds to 2 20  (roughly one million system clock  cycles),  for  an  even  distribution  of  1/256  microsteps.  At  16MHz  system  clock  frequency,  this results in a minimum step input frequency of 16Hz for MicroPlyer operation (one fullstep per second). A lower step rate causes the STST bit to be set, which indicates a standstill event. At that frequency, microsteps occur at a rate of 𝑠𝑦𝑠𝑡𝑒𝑚 𝑐𝑙𝑜𝑐𝑘 𝑓𝑟𝑒𝑞𝑢𝑒𝑛𝑐𝑦 2 16 ≈ 250𝐻𝑧 = 244 .

## Attention

MicroPlyer only works well with a stable STEP frequency. Do not use the DEDGE option if the STEP signal does not have a 50% duty cycle.

Figure 8.3 MicroPlyer microstep interpolation with rising STEP frequency.

<!-- image -->

In Figure 8.3, the first STEP cycle is long enough to set the STST bit. This bit is cleared on the next STEP active edge. Then, the STEP frequency increases and after one cycle at the higher rate MicroPlyer increases the interpolated microstep rate. During the last cycle at the slower rate, MicroPlyer did not generate all 16 microsteps, so there is a small jump in motor angle between the first and second cycles at the higher rate.

## 8.5 Standstill current reduction

When a standstill event is detected, the motor current should be reduced to save energy and reduce heat dissipation in the power MOSFET stage. This is especially true at halfstep positions, which are a worst-case condition for the driver and motor because the full energy is consumed in one bridge and one motor coil.

## Attention:

Stand still  current  reduction  is  required  when  operating  near  the  thermal  limits  of  the  application. Refer the stand still current limitations in chapter 18 as a guideline.

## Hint

Implement a current reduction to 10% to 75% of the required run current for motor standstill. This saves more than 50% to more than 90% of energy. The actual level depends on the required holding force and on the required microstep precision during standstill. In standalone mode, a reduction to 50% current is possible using a configuration input.

## 9 Current Setting

The internal 5V supply voltage available at the pin 5VOUT is used as a reference for the coil current regulation based on the sense resistor voltage measurement. The desired maximum motor current is set by selecting an appropriate value for the sense resistor. The sense resistor voltage range can be selected by the VSENSE bit in the DRVCONF register. The low sensitivity (high sense resistor voltage, VSENSE=0) brings best and most robust current regulation, while high sensitivity (low sense resistor voltage; VSENSE=1) reduces power dissipation in the sense resistor. This setting reduces the power dissipation in the sense resistor by nearly half.

After  choosing  the  VSENSE  setting  and  selecting  the  sense  resistor,  the  currents  to  both  coils  are scaled by the 5-bit current scale parameter CS in the SGCSCONF register. The sense resistor value is chosen so that the maximum desired current (or slightly more) flows at the maximum current setting (CS = %11111).

Using  the  internal  sine  wave  table,  which  has  amplitude  of  248,  the  RMS  motor  current  can  be calculated by:

<!-- formula-not-decoded -->

The momentary motor current is calculated as:

<!-- formula-not-decoded -->

where:

CS is the effective current scale setting as set by the CS bits and modified by CoolStep. The effective value ranges from 0 to 31.

VFS is  the  sense  resistor  voltage  at  full  scale,  as  selected  by  the  VSENSE  control  bit  (refer  to  the electrical characteristics).

CURRENTA/B is the value set by the current setting in SPI mode or the internal sine table in STEP/DIR mode.

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                | Setting   | Comment                             |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------|
| CS          | Current scale . Scales both coil current values as taken from the internal sine wave table or from the SPI interface. For high precision motor operation, work with a current scaling factor in the range 16 to 31, because scaling down the current values reduces the effective microstep resolution by making microsteps coarser. This setting also controls the maximum current value set by CoolStep. | 0 … 31    | Scaling factor: 1/32, 2/32, … 32/32 |
| VSENSE      | Allows control of the sense resistor voltage range or adaptation of one electronic module to different maximum motor currents.                                                                                                                                                                                                                                                                             | 0         | 325mV                               |
| VSENSE      | Allows control of the sense resistor voltage range or adaptation of one electronic module to different maximum motor currents.                                                                                                                                                                                                                                                                             | 1         | 173mV                               |

Pay special attention concerning the thermal design and current limits imposed by it! Be  sure  to  reduce  the  current  to  a  value  at  or  below  the  maximum  standstill  current  limits  as specified in chapter 18. This is important due to thermal restrictions for continuous current in a single bride. The worst case is standstill in a half step position where one bridge has 0  current, and the other bridge has RMS value * √2 current .

## 9.1 Sense Resistors

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. As they also see the switching spikes from the MOSFET bridges, a low-inductance type such as film or composition resistors is required to prevent spikes causing ringing. A low-inductance, low-resistance PCB  layout  is  essential.  Keep  the  high-current  interconnections  as  short  as  possible  as  shown  in Figure  9.1.  A  massive  ground  plane  is  best.  Because  the  sense  resistor  inputs  are  susceptible  to damage from negative overvoltages, an additional input protection  resistor helps protect against  a motor cable break or ringing on long motor cables.

Figure 9.1 Sense resistor grounding and protection components

<!-- image -->

The  sense  resistor  needs  to  be  able  to  conduct  the  peak  motor  coil  current,  especially  in  motor standstill  conditions, unless standby power is reduced. Under normal conditions, the sense resistor sees the motor coil current with a duty cycle well below 50%.

The peak sense resistor power dissipation is:

<!-- formula-not-decoded -->

For high-current applications, power dissipation is halved by using the lower sense resistor voltage setting and the corresponding lower resistance value. In this case, any voltage drop in the PCB traces has a larger influence on the result. A compact power stage layout with massive ground plane is best to avoid parasitic resistance effects.

| CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT FOR CS=31   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT FOR CS=31   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT FOR CS=31   |
|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|
| R SENSE [Ω]                                                    | RMS current [A] VSENSE=0                                       | RMS current [A] VSENSE=1                                       |
| 0.33                                                           | 0.7                                                            | 0.35                                                           |
| 0.27                                                           | 0.8                                                            | 0.43                                                           |
| 0.22                                                           | 1.0                                                            | 0.53                                                           |
| 0.15                                                           | 1.5                                                            | 0.8                                                            |
| 0.12                                                           | 1.8                                                            | 1.0                                                            |
| 0.10                                                           | 2.2                                                            | 1.2                                                            |

## 10 Chopper Operation

The currents through both motor coils are controlled using choppers. The choppers work independently of each other. Figure 10.1 shows the three chopper phases:

On Phase: current flows in direction of target current

<!-- image -->

<!-- image -->

Fast Decay Phase: current flows in opposite direction of target current

Figure 10.1 Chopper phases.

Although the current could be regulated using only on phases and fast decay phases, insertion of the slow  decay  phase  is  important  to  reduce  electrical  losses  and  current  ripple  in  the  motor.  The duration of the slow decay phase is specified in a control parameter and sets an upper limit on the chopper frequency. The current comparator can measure coil current during phases when the current flows through the sense resistor, but not during the slow decay phase, so the slow decay phase is terminated by a timer. The on phase is terminated by the comparator when the current through the coil reaches the target current. The fast decay phase may be terminated by either the comparator or another timer.

When the coil current is switched, spikes at the sense resistors occur due to charging and discharging parasitic  capacitances.  During  this  time,  typically  one  or  two  microseconds,  the  current  cannot  be measured. Blanking is the time when the input to the comparator is masked to block these spikes.

There are two  chopper  modes  available: a new  high-performance  chopper  algorithm  called SpreadCycle and a proven constant off-time chopper mode. The constant off-time mode cycles through three phases: on, fast decay, and slow decay. The SpreadCycle mode cycles through four phases: on, slow decay, fast decay, and a second slow decay.

These parameters are used for controlling both chopper modes:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                             | Setting   | Comment                                                                                                            |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------|
| TOFF        | Off time. This setting controls the duration of the slow decay time and limits the maximum chopper frequency. For most applications an off time within the range of 5µs to 20µs will fit. If the value is 0, the MOSFETs are all shut off and the motor can freewheel. If the value is 1 to 15, the number of system clock cycles in the slow decay phase is: 𝑁 𝐶𝐿𝐾 = (𝑇𝑂𝐹𝐹 ∙ 32) +24 The SD-Time is 𝑡 = 1 𝑓 𝐶𝐿𝐾 ∙𝑁 𝐶𝐿𝐾 | 0         | Chopper off.                                                                                                       |
| TOFF        | Off time. This setting controls the duration of the slow decay time and limits the maximum chopper frequency. For most applications an off time within the range of 5µs to 20µs will fit. If the value is 0, the MOSFETs are all shut off and the motor can freewheel. If the value is 1 to 15, the number of system clock cycles in the slow decay phase is: 𝑁 𝐶𝐿𝐾 = (𝑇𝑂𝐹𝐹 ∙ 32) +24 The SD-Time is 𝑡 = 1 𝑓 𝐶𝐿𝐾 ∙𝑁 𝐶𝐿𝐾 | 1… 15     | Off time setting. A setting in the range of 2-5 is recommended for SpreadCycle, higher values for classic chopper. |

Slow Decay Phase: current re-circulation

<!-- image -->

| Parameter   | Description                                                                                                                                                                                                                                                |   Setting | Comment                 |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------|
| TBL         | Blanking time. This time needs to cover the switching event and the duration of the ringing on the sense resistor. For most low-current applications, a setting of 16 or 24 is good. For high-current applications, a setting of 36 or 54 may be required. |         0 | 16 system clock cycles  |
| TBL         | Blanking time. This time needs to cover the switching event and the duration of the ringing on the sense resistor. For most low-current applications, a setting of 16 or 24 is good. For high-current applications, a setting of 36 or 54 may be required. |         1 | 24 system clock cycles  |
| TBL         | Blanking time. This time needs to cover the switching event and the duration of the ringing on the sense resistor. For most low-current applications, a setting of 16 or 24 is good. For high-current applications, a setting of 36 or 54 may be required. |         2 | 36 system clock cycles  |
| TBL         | Blanking time. This time needs to cover the switching event and the duration of the ringing on the sense resistor. For most low-current applications, a setting of 16 or 24 is good. For high-current applications, a setting of 36 or 54 may be required. |         3 | 54 system clock cycles  |
| CHM         | Chopper mode bit. SpreadCycle is recommended for most applications.                                                                                                                                                                                        |         0 | SpreadCycle mode        |
| CHM         | Chopper mode bit. SpreadCycle is recommended for most applications.                                                                                                                                                                                        |         1 | Constant off time mode  |
| EN_PFD      | Enable passive fast decay. Setting this bit, adds a passive fast decay phase of 512 clock cycles for each bridge following zero crossing of the motor current. The passive fast decay will dampen the energy of motor resonances at medium velocity.       |         1 | Resonance dampening on. |

## 10.1 SpreadCycle Chopper

The SpreadCycle (patented) chopper algorithm is a precise and simple to use chopper mode which automatically determines the optimum length for the fast-decay phase. The SpreadCycle will provide superior  microstepping  quality  even  with  default  settings.  Several  parameters  are  available  to optimize the chopper to the application.

Each  chopper  cycle  is  comprised  of  an  on  phase,  a  slow  decay  phase,  a  fast  decay  phase  and  a second slow decay phase (see Figure 10.3). The two slow decay phases and the two blank times per chopper cycle put an upper limit to the chopper frequency. The slow decay phases typically make up for  about  30%-70%  of  the  chopper  cycle  in  standstill  and  are  important  for  low  motor  and  driver power dissipation.

Calculation of a starting value for the slow decay time TOFF :

## EXAMPLE:

Target Chopper frequency: 25kHz.

Assumption: Two slow decay cycles make up for 50% of overall chopper cycle time

For the TOFF setting this means:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

With 12 MHz clock this gives a setting of TOFF=3.0, i.e. 3.

With 16 MHz clock this gives a setting of TOFF=4.25, i.e. 4 or 5.

The hysteresis start setting forces the driver to introduce a minimum amount of current ripple into the motor coils. The current ripple must be higher than the current ripple which is caused by resistive losses  in  the  motor  to  give  best  microstepping  results.  This  will  allow  the  chopper  to  precisely regulate the current both for rising and for falling target current. The time required to introduce the current ripple into the motor coil also reduces the chopper frequency. Therefore, a higher hysteresis setting will lead to a lower chopper frequency. The motor inductance limits the ability of the chopper to follow a changing motor current. Further the duration of the on phase and the fast decay must be longer than the blanking time because the current comparator is disabled during blanking.

It is easiest to find the best setting by starting from a low hysteresis setting (e.g. HSTRT =0, HEND =0) and  increasing HSTRT ,  until  the  motor  runs  smoothly  at  low  velocity  settings.  This  can  best  be checked  when  measuring  the  motor  current  either  with  a  current  probe  or  by  probing  the  sense resistor  voltages  (see  Figure  10.2).  Checking  the  sine  wave  shape  near  zero  transition  will  show  a

small ledge between both half waves in case the hysteresis setting is too small. At medium velocities (i.e. 100 to 400 fullsteps per second), a too low hysteresis setting will lead to increased humming and vibration of the motor.

<!-- image -->

f: 93.07Hz

Figure 10.2 No ledges in current wave with sufficient hysteresis (magenta: current A, yellow &amp; blue: sense resistor voltages A and B)

A too high hysteresis setting will lead to reduced chopper frequency and increased chopper noise but will not yield any benefit for the wave shape.

## Quick Start

For detail tuning procedure see Application Note AN001 Parameterization of SpreadCycle

As experiments show, the setting is quite independent of the motor, because higher current motors typically also have a lower coil resistance. Choosing a medium default value for the hysteresis (for example, effective HSTRT+HEND=10) normally fits most applications. The setting can be optimized by experimenting with the motor: A too low setting will result in reduced microstep accuracy, while a too high setting will lead to more chopper noise and motor power dissipation. When measuring the sense resistor voltage in motor standstill at a medium coil current with an oscilloscope, a too low setting  shows  a  fast  decay  phase  not  longer  than  the  blanking  time.  When  the  fast  decay  time becomes slightly longer than the blanking time, the setting is optimum. You can reduce the off-time setting, if this is hard to reach.

The hysteresis principle could in some cases lead to the chopper frequency becoming too low, for example when the coil resistance is high compared to the supply voltage. This is avoided by splitting the  hysteresis  setting  into  a  start  setting  (HSTRT + HEND)  and  an  end  setting  (HEND).  An  automatic hysteresis  decrementer  (HDEC)  interpolates  between  these  settings,  by  decrementing  the  hysteresis value stepwise each 16, 32, 48, or 64 system clock cycles. At the beginning of each chopper cycle, the hysteresis begins with a value which is the sum of the start and the end values (HSTRT+HEND), and decrements during the cycle, until either the chopper cycle ends, or the hysteresis end value (HEND) is reached.  This  way,  the  chopper  frequency  is  stabilized  at  high  amplitudes  and  low  supply  voltage situations, if the frequency gets too low. This avoids the frequency reaching the audible range.

Figure 10.3 SpreadCycle chopper mode showing the coil current during a chopper cycle

<!-- image -->

Three parameters control SpreadCycle mode:

| Parameter   | Description                                                                                                                                                                                                                                               | Setting   | Comment                                                                                                                              |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------|
| HSTRT       | Hysteresis start setting. Please remark, that this value is an offset to the hysteresis end value HEND.                                                                                                                                                   | 0 … 7     | This setting adds to HEND. %000: 1 %100: 5 %001: 2 %101: 6                                                                           |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. Decrement interval time is controlled by HDEC. The sum HSTRT+HEND must be <16. At a current setting CS of max. 30 (amplitude reduced to 240), the sum is not limited. | 0… 2      | Negative HEND: - 3… -1 %0000: -3 %0001: -2 %0010: -1                                                                                 |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. Decrement interval time is controlled by HDEC. The sum HSTRT+HEND must be <16. At a current setting CS of max. 30 (amplitude reduced to 240), the sum is not limited. | 3         | Zero HEND: 0 %0011: 0                                                                                                                |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. Decrement interval time is controlled by HDEC. The sum HSTRT+HEND must be <16. At a current setting CS of max. 30 (amplitude reduced to 240), the sum is not limited. | 4… 15     | P ositive HEND: 1… 12 %0100: 1 %1010: 7 %0101: 2 %1011: 8 %0110: 3 %1100: 9 %0111: 4 %1101: 10 %1000: 5 %1110: 11 %1001: 6 %1111: 12 |
| HDEC        | Hysteresis decrement setting. This setting determines the slope of the hysteresis during on time and during fast decay time. It sets the number of system clocks for each decrement.                                                                      | 0… 3      | 0: fast decrement 3: very slow decrement %00: 16 %01: 32 %10: 48 %11: 64                                                             |

## EXAMPLE:

A hysteresis of 4 has been chosen. You might decide to not use hysteresis decrement. In this case set:

| HEND =6   | (sets an effective end value of 6-3=3)   |
|-----------|------------------------------------------|
| HSTRT =0  | (sets minimum hysteresis, i.e. 1: 3+1=4) |

In order to take advantage of the variable hysteresis, we can set most of the value to the HSTRT, i.e. 4, and the remaining 1 to hysteresis end. The resulting configuration register values are as follows:

| HEND =0   | (sets an effective end value of -3)                         |
|-----------|-------------------------------------------------------------|
| HSTRT =6  | (sets an effective start value of hysteresis end +7: 7-3=4) |

1100: 9

1101: 10

1110: 11

Hint

Highest motor velocities benefit from setting TOFF to 2 or 3 and a short TBL of 2 or 1.

## 10.2 Constant Off-Time Mode

The classic constant off-time chopper uses a fixed-time fast decay following each on phase. While the duration of the on phase is determined by the chopper comparator, the fast decay time needs to be fast enough for the driver to follow the falling slope of the sine wave, but it should not be so long that  it  causes  excess  motor  current  ripple  and  power  dissipation.  This  can  be  tuned  using  an oscilloscope or evaluating motor smoothness at different velocities. A good starting value is a fast decay time setting similar to the slow decay time setting.

Figure 10.4 Constant off-time chopper with offset showing the coil current during two cycles

<!-- image -->

After  tuning  the  fast  decay  time,  the  offset  should  be  tuned  for  a  smooth  zero  crossing.  This  is necessary because the fast decay phase makes the absolute value of the motor current lower than the target  current  (see  Figure  10.5).  If  the  zero  offset  is  too  low,  the  motor  stands  still  for  a  short moment during current zero crossing. If it is set too high, it makes a larger microstep. Typically, a positive offset setting is required for smoothest operation.

<!-- image -->

<!-- image -->

Target current corrected for optimum shape of coil current

Figure 10.5 Zero crossing with correction using sine wave offset.

Three parameters control constant off-time mode:

| Parameter            | Description                                                                                                                                                                                                                               | Setting   | Comment                                            |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------|
| TFD (HSTART & HDEC0) | Fast decay time setting. With CHM=1, these control the portion of fast decay for each chopper cycle.                                                                                                                                      | 0         | Slow decay only.                                   |
| TFD (HSTART & HDEC0) | Fast decay time setting. With CHM=1, these control the portion of fast decay for each chopper cycle.                                                                                                                                      | 1… 15     | Duration of fast decay phase.                      |
| OFFSET (HEND)        | Sine wave offset . With CHM=1, these bits control the sine wave offset. A positive offset corrects for zero crossing error.                                                                                                               | 0…2       | Negative offset: -3 … -1                           |
| OFFSET (HEND)        | Sine wave offset . With CHM=1, these bits control the sine wave offset. A positive offset corrects for zero crossing error.                                                                                                               | 3         | No offset: 0                                       |
| OFFSET (HEND)        | Sine wave offset . With CHM=1, these bits control the sine wave offset. A positive offset corrects for zero crossing error.                                                                                                               | 4… 15     | P ositive offset: 1… 12                            |
| NCCFD (HDEC1)        | Selects usage of the current comparator for termination of the fast decay cycle. If current comparator is enabled, it terminates the fast decay cycle in case the current reaches a higher negative value than the actual positive value. | 0         | Enable comparator termination of fast decay cycle. |
| NCCFD (HDEC1)        | Selects usage of the current comparator for termination of the fast decay cycle. If current comparator is enabled, it terminates the fast decay cycle in case the current reaches a higher negative value than the actual positive value. | 1         | End by time only.                                  |

## 10.2.1 Random Off Time

In the constant off-time chopper mode, both coil choppers run freely without synchronization. The frequency of each chopper mainly depends on the coil current and the motor coil inductance. The inductance varies with the microstep position. With some motors, a slightly audible beat can occur between  the  chopper  frequencies  when  they  are  close  together.  This  typically  occurs  at  a  few microstep positions within each quarter wave. This effect is usually not audible when compared to mechanical noise generated by ball bearings, etc. Another factor which can cause a similar effect is a poor layout of the sense resistor GND connections.

Hint

A  common  cause  of  motor  noise  is  a  bad  PCB  layout  causing  coupling  of  both  sense  resistor voltages. Noise caused by an insufficient PCB layout cannot be overcome by chopper settings.

To minimize the effect of a beat between both chopper frequencies, an internal random generator is provided. It modulates the slow decay time setting when switched on by the RNDTF bit. The RNDTF feature further spreads the chopper spectrum, reducing electromagnetic emission on single frequencies.

| Parameter   | Description                                                                                                 | Setting   | Comment                            |
|-------------|-------------------------------------------------------------------------------------------------------------|-----------|------------------------------------|
| RNDTF       | Enables a random off-time generator, which slightly modulates the off time t OFF using a random polynomial. | 0 1       | Disable. Random modulation enable. |

## 11 Power MOSFET Stage

The gate current for the power MOSFETs can be adapted to influence the slew rate at the coil outputs. The main features of the stage are:

- -5V gate drive voltage for low-side N-MOS transistors, 10V for high-side P-MOS transistors.
- -The gate drivers protect the bridges actively against cross-conduction using an internal QGD protection that holds the MOSFETs safely off.
- -Automatic break-before-make logic minimizes dead time and diode-conduction time.
- -Integrated  overcurrent  protection  detects  a  short  of  the  motor  wires  and  protects  the MOSFETs.

The low-side gate driver is supplied by the 5VOUT pin. The low-side driver supplies 0V to the MOSFET gate to close the MOSFET, and 5VOUT to open it. The high-side gate driver voltage is supplied by the VS and the VHS pin. VHS is more negative than VS and allows opening the VS referenced high-side MOSFET. The high-side driver supplies VS to the P channel MOSFET gate to close the MOSFET and VHS to open it. The effective low-side gate voltage is roughly 5V; the effective high-side gate voltage is roughly 8V.

| Parameter   | Description                                                                                                                                 | Setting   | Comment                                                      |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------------------------------------------------|
| SLPL        | Low-side slope control. Controls the MOSFET gate driver current. Set to 0, 1 or 2. Use fastest slope to minimize package power dissipation. | 0… 3      | %00: Minimum. %01: Minimum. %10: Medium. %11: Maximum.       |
| SLPH        | High-side slope control. Controls the MOSFET gate driver current. For the TMC2660 set identical to SLPL to match LS slope.                  | 0… 3      | %00: Minimum. %01: Minimum+TC. %10: Medium+TC. %11: Maximum. |

## 11.1 Break-Before-Make Logic

Each  half-bridge  has  to  be  protected  against  cross-conduction  during  switching  events.  When switching off the low-side MOSFET, its gate first needs to be discharged before the high-side MOSFET is allowed to switch on. The same goes when switching off the high-side MOSFET and switching on the low-side MOSFET. The time for charging and discharging of the MOSFET gates depends on the MOSFET gate charge and the gate driver current set by SLPL and SLPH. The BBM (break-before-make) logic measures the gate voltage and automatically delays turning on the opposite bridge transistor until  its  counterpart  is  discharged.  This  way,  the  bridge  will  always  switch  with  optimized  timing independent of the slope setting.

## 11.2 ENN Input

The MOSFETs can be completely disabled in hardware by pulling the ENN input high. This allows the motor to free-wheel. An equivalent function can be performed in software by setting the parameter TOFF to zero. The hardware disable is available for allowing the motor to be hot plugged. For the TMC2660, it can be used in overvoltage situations. The TMC2660 can withstand voltages of up to 60V when the MOSFETs are disabled. If a hardware disable function is not needed, tie ENN low.

## 12 Diagnostics and Protection

## 12.1 Short Protection

The  TMC2660C  protects  the  MOSFET  power  stages  against  a  short  circuit  or  overload  condition  by monitoring the voltage drop in the high-side MOSFETs, as well as the voltage drop in sense resistor and  low-side  MOSFETs  (Figure  12.1).  A  programmable  short  detection  delay  ( shortdelay )  allows adjusting  the  detector  to  work  with  different  power  stages  and  load  conditions.  Additionally,  the short detection is protected against single events, e.g., caused by ESD discharges, by retrying three times  before  switching  off  the  motor  continuously.  The  low  side  short  detector  also  provides  for overcurrent detection. It needs to be explicitly enabled by programming.

Figure 12.1 Short detection timing

| Parameter   | Description                                                                                                                                                                                                                         | Setting   | Comment                                         |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------|
| SHRTSENS    | The high-side overcurrent detector can be set to a higher sensitivity by setting this flag. This will allow detection of wrong cabling even with higher resistive motors.                                                           | 0/1       | 0: Low sensitivity 1: High sensitivity          |
| TS2G        | Short detection delay for high-side and low side detectors. The short detection delay shall cover the bridge switching time. %01 will work for most applications. A higher delay makes detection less sensitive to capacitive load. | 0/1       | %00: 3.2µs. %01: 1.6µs. %10: 1.2µs. %11: 0.8µs. |
| DIS_S2G     | Allows to disable short to VS protection.                                                                                                                                                                                           | 0/1       | Leave detection enabled for normal use (0).     |
| EN_S2VS     | Explicitly enable short to VS and overcurrent protection by setting this bit.                                                                                                                                                       | 0/1       | Enable detection for normal use (1).            |

<!-- image -->

As the low-side short detection includes the sense resistor, it is sensitive to the actual sense resistor and provides a good precision of overcurrent detection. This way, it will safely cover most overcurrent conditions.

| Status flag             | Description                                                                                                                                                                                                                                                                                              | Range   | Comment                                |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------|
| SHORTA S2VSA S2VSB S2GA | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short 0 | / 1     | 0: No short detected 1: Short detected |
| SHORTB                  | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short 0 | / 1     |                                        |
| S2GB                    | detector)                                                                                                                                                                                                                                                                                                | / 1     |                                        |
|                         | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short 0 | / 1     |                                        |
|                         | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short 0 | / 1     |                                        |
|                         |                                                                                                                                                                                                                                                                                                          | / 1     |                                        |

## Hint

Once a short condition is safely detected, the corresponding driver bridge (A or B) becomes switched off, and the s2ga or s2gb flag, respectively s2vsa or s2vsb becomes set.

To restart the motor, disable and re-enable the driver.

## Attention

Short protection cannot protect the system and the power stages for all possible short events, as a short  event  is  rather  undefined,  and  a  complex  network  of  external  components  may  be  involved. Therefore, short circuits should basically be avoided.

## 12.2 Open-Load Detection

Interrupted  cables  are  a  common  cause  for  systems  failing,  e.g.,  when  connectors  are  not  firmly plugged. The TMC2660 detects open load conditions by checking if it can reach the desired motor coil current. This way, also undervoltage conditions, high motor  velocity settings or short  and overtemperature  conditions  may  cause  triggering  of  the  open  load  flag,  and  inform  the  user,  that motor torque  may  suffer.  In  motor  stand  still,  open  load  cannot  be  measured,  as  the  coils  might eventually have zero current.

## Hint

Open  load  detection  is  provided  for  system  debugging.  Open  load  detection  does  not  necessarily indicate a malfunction of the driver.

To  safely  detect  an  interrupted  coil  connection,  check  the  open  load  flags  following  a  motion  of minimum four times the selected microstep resolution into a single direction using low or nominal motor velocity operation, only. However, the ola and olb flags have just informative character and do not cause any action of the driver.

False  indication may result after changing motion direction or with full- or halfstep operation. Use microstepping for a safe result.

The open-load detection status is indicated by two bits:

| Status flag   | Description                                                                                                                                                                                                                                                                                                                              | Range   | Comment                                        |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------|
| OLA           | These bits indicate an open-load condition on coil A and coil B. The flags become set, if no chopper event has happened during the last period with constant coil polarity. The flag is not updated with too low actual coil current below 1/16 of maximum setting. It is a pure indicator. No action is taken depending on these flags. | 0 / 1   | 0: No open-load detected 1: Open-load detected |
| OLB           | These bits indicate an open-load condition on coil A and coil B. The flags become set, if no chopper event has happened during the last period with constant coil polarity. The flag is not updated with too low actual coil current below 1/16 of maximum setting. It is a pure indicator. No action is taken depending on these flags. | 0 / 1   | 0: No open-load detected 1: Open-load detected |

## 12.3 Temperature Sensors

The  driver  integrates  a  four-level  temperature  sensor  (100°C  pre-warning,  120°C  overtemperature release and selectable 136°C / 150°C thermal shutdown) for diagnostics and for protection of the IC and  the  integrated  MOSFETs  as  well  as  for  adjacent  components  against  excess  heat.  Choose  the overtemperature level  to  safely  cover  error  conditions  like  missing  heat  convection.  Heat  is  mainly generated by the power MOSFETs, and, at increased voltage, by the internal voltage regulators. For many  applications,  already  the  overtemperature  pre-warning  will  indicate  an  abnormal  operation situation and can be used to initiate user warning or power reduction measures like motor current reduction.  The  thermal  shutdown  is  just  an  emergency  measure  and  temperature  rising  to  the shutdown level should be prevented by design.

Hint for TMC2660C, only

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the overtemperature release level (120°C) to avoid continuous heating to the shutdown level. Cool down typically needs a few 100ms to 1 second.

The high-side P-channel gate drivers have a temperature dependency which can be compensated to some  extent  by  increasing  the  gate  driver  current  when  the  warning  temperature  threshold  is reached.  The  chip  automatically  corrects  for  the  temperature  dependency  above  the  warning temperature when the temperature-compensated modes of SLPH is used. In these modes, the gate driver current is increased by one step when the temperature warning threshold is reached.

| Status                 | Description                                                                                                                                                                             | Range   | Comment                                      |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------------|
| OTPW                   | Overtemperature warning. This bit indicates whether the warning threshold is reached. Software can react to this setting by reducing current.                                           | 0 / 1   | 1: temperature prewarning level reached      |
| OT                     | Overtemperature shutdown. This bit indicates whether the shutdown threshold has been reached and the driver has been disabled.                                                          | 0 / 1   | 1: driver shut down due to over- temperature |
| OTSENS (TMC2660C only) | Program overtemperature threshold to a reduced level to give better protection for the power stage and other components. The driver re- enables when the temperature falls below 120°C. | 0 / 1   | 0: 150°C 1: 136°C                            |

## 12.4 Undervoltage Detection

The undervoltage detector monitors both the internal logic supply voltage and the supply voltage. It prevents operation of the chip when the MOSFETs cannot be guaranteed to operate properly because the gate drive voltage is too low. It also initializes the chip at power up.

In  undervoltage  conditions,  the  logic  control  block  becomes  reset  and  the  driver  is  disabled.  All MOSFETs are switched off. All internal registers are reset to zero. Software should additionally monitor the  supply  voltage  to  detect  an  undervoltage  condition.  If  software  cannot  measure  the  supply voltage, an undervoltage condition can be detected by reading out the SE current value. Following a reset due to undervoltage occurs, the CS parameter is cleared, which is reflected in an SE status of 0 in the read response.

| Status                 | Description                                                                                                               | Range   | Comment                            |
|------------------------|---------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------|
| EN_PFD (TMC2660C only) | Set this bit to allow operation with a 5V only supply. This bit additionally controls resonance dampening of the motor. 0 | / 1     | Undervoltage level 0: <7V 1: <4.5V |

Figure 12.2 Undervoltage reset timing

<!-- image -->

## Note

Be sure to operate the IC significantly above the undervoltage threshold to ensure reliable operation! Check for SE reading back as zero to detect an undervoltage event.

## 13 Power Supply Sequencing

The TMC2660 generates its own 5V supply for all internal operations. The internal reset of the chip is derived from the supply voltage regulator to ensure a clean start-up of the device after power up. During start up, the SPI unit is in reset and cannot be addressed. All registers become cleared.

VCC\_IO limits the voltage allowable on the inputs and outputs and is used for driving the outputs. It is included in undervoltage detection and reset (C-type, only). Therefore, the startup sequence of the VCC\_IO power supply with respect to VS is not important. VCC\_IO may start up before or after VS.

## 14 System Clock

The system clock is the timing reference for all functions. The internal system clock frequency for all operations is nominally 15MHz. An external clock of 8MHz to 20MHz can be supplied for more exact timing, especially when using CoolStep and StallGuard2.

## USING THE INTERNAL CLOCK

To  use  the  on-chip  oscillator  of  the  TMC2660,  tie  CLK  to  GND  near  the  chip.  The  actual  on-chip oscillator clock frequency can be determined by measuring the delay time between the last step and assertion  of the  STST (standstill)  status  bit,  which is 2 20 clocks.  There  is  some  delay  in  reading  the STST bit through the SPI interface, but it is easily possible to measure the oscillator frequency within 1%. Chopper timing parameters can then be corrected using this measurement, because the oscillator is relatively stable over a wide range of environmental temperatures.

## Hint

In case well defined precise motor chopper operation are desired, it is supposed to work with an external clock source.

## USING EXTERNAL CLOCK

An external clock frequency of up to 20MHz can be supplied. It is recommended to use an external clock frequency between 10MHz and 16MHz for best performance. Pay attention to using a near 50% duty-cycle. The external clock is enabled, and the on-chip oscillator is disabled with the first logic high driven on the CLK input.

## Attention :

Never leave the external clock input floating. It is not allowed to remain within the transition region (between valid low and high levels), as spurious clock signals might lead to short impulses and can corrupt  internal  logic  state.  Provide  an  external  pull-down  resistor,  in  case  the  driver  pin  (i.e., microcontroller output) does not provide a safe level directly after power up. If the external clock is suspended or disabled after the internal oscillator has been disabled, the chip will not operate. Be careful to switch off the power MOSFETs (by driving the ENN input high or setting the TOFF parameter to  0)  before  switching  off  the  clock,  because  otherwise  the  chopper  would  stop,  and  the  motor current level could rise uncontrolled. If the short to GND detection is enabled, it stays active even without clock.

The TMC2660C provides a clock failover option to switch back to internal clock, in case of the external clock failing. The function is coupled to enabling short to VS protection (EN\_S2VS).

| Status                  | Description                                                                                                                                                                                                                                  | Range   | Comment                                                                            |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------|
| EN_S2VS (TMC2660C only) | Set this bit to enable protection against a failing external CLK source. If set, the IC switches back to external clock after 32 to 48 internal clock cycles. At the same time, this bit controls the higher side short detector sensitivity | 0 / 1   | Undervoltage level 0: Stopping clock will stop the IC. 1: CLK fail safe protection |

Figure 14.1 Start-up requirements of CLK input

<!-- image -->

## 14.1 Frequency Selection

A higher frequency allows faster step rates, faster SPI operation, and higher chopper frequencies. On the  other  hand,  it  may  cause  more  electromagnetic  emission  and  more  power  dissipation  in  the digital  logic.  Generally,  a  system  clock  frequency  of  10MHz  to  16MHz  is  best  for  most  applications, unless the motor is to operate at the highest velocities. If the application can tolerate reduced motor velocity and increased chopper noise, a clock frequency of 4MHz to 10MHz should be considered.

| CLK frequency   | Comment                                                                                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| internal        | 13-16MHz, typical. Tie clock input firmly to GND. See electrical characteristics for limits. The internal clock is sufficient, unless a good reproducibility of StallGuard values is desired. |
| 4-10 MHz        | Lower range sufficient for higher inductance motors                                                                                                                                           |
| 10-16 MHz       | Recommended for best results                                                                                                                                                                  |
| 16-20 MHz       | Option in case a lower frequency is not available Ensure 40-60% duty cycle                                                                                                                    |

## 15 Compatibility to non-C-type

The TMC2660C is downward compatible to the TMC2660. It is designed for compatibility to existing applications, while offering several enhancements and options for new designs.

## ENHANCEMENTS IN C-TYPE

- More silent chopper operation, silent motor at low motor velocity.
- VCC\_IO is monitored by internal reset circuitry to ensure clean power-up and power-down.
- Overtemperature shutdown has added hysteresis. After exceeding the temperature threshold, the driver stage remains off, until temperature falls below the 120°C pre-warning threshold.
- Reduced power dissipation of internal circuitry, leading to lower heat-up.
- CMOS input levels are increased with 5V VCC\_IO level to increase noise rejection.
- Reduced filtering time for STEP &amp; DIR inputs to reduce the risk of missed step pulses.

## OPTIONAL ENHANCEMENTS IN C-TYPE (ENABLE VIA CONFIGURATION BITS)

- Clock fail-safe option. In case the external clock fails, the IC defaults back to internal clock. This avoids damage to motor and driver stage. (Enable: EN\_S2VS, together with short protection)
- Low-Side short detection (Short to VS) for improved robustness in case of mis-wiring or overcurrent, e.g. due to wrongly attached motor. (Enable: EN\_S2VS)
- Optional higher sensitivity high-side protection for improved protection. (Enable: SHRTSENS)
- Optional lower overtemperature threshold of 136°C for more sensitive protection of the power driver. Enable: OTSENSE
- Option to work down to 5V supply voltage and to add resonance dampening. (Enable: EN\_PFD)

The additional settings for C-types are highlighted in this document using green background.

The major differences to be considered when migrating an existing application from the TMC2660 to TMC2660C, are summarized in the following table:

| Item                                    | Change in C-type                                                                                                                                                                                   | Impact                                                                                                                 |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| More silent chopper in C- type          | Internal noise sources have been reduced. Noise caused by internal wiring voltage drop makes up for up to 10mV for non-C-devices. This reflects in a slightly lower sense input threshold voltage. | More silent motor, especially with low velocity. C-type effective motor current about 2-3% higher.                     |
| Undervoltage monitoring of VCC_IO       | IO voltage VCC_IO is monitored by the internal reset circuitry. The device becomes reset upon VCC_IO undervoltage.                                                                                 | Increased VCC_IO supply current (50µA), device resets upon VCC_IO undervoltage.                                        |
| Hysteresis for overtemperature detector | Following overtemperature detection at 136°C or 150°C, the driver stage remains switched off until the IC cools down below 120°C.                                                                  | Longer shutdown time upon overtemperature detection, safe detection by interface.                                      |
| Input levels depend on VCC_IO voltage   | Non-C-type input level detectors are supplied by internal 5V supply, leading to fixed 0.8V and 2.4V levels. C-types use VCC_IO supplied CMOS Schmitt- Trigger inputs instead.                      | Higher positive logic level for 5V VCC_IO supply. No change with 3.3V VCC_IO supply. Check levels in 5V systems.       |
| Spike filtering time on STEP/DIR input  | The filtering has been improved, while reducing the filtering time in order to reduce the risk of missing short step pulses.                                                                       | Potential impact in systems with high noise level on STEP & DIR input pins.                                            |
| CLK input filter                        | C-type provides better filtering against short pulses (10ns typ.).                                                                                                                                 | More robust against reflec- tions on CLK. Check timing in case of SPI rate at ½ f CLK . Invert CLK signal if required. |

## 16 Driver Protection and EME Circuitry

Some applications have to cope with ESD events caused by motor operation or external influence. Despite ESD circuitry within the driver chips, ESD events occurring during operation can cause a reset or even a destruction of the motor driver, depending on their energy. Especially plastic housings and belt drive systems tend to cause ESD events of several kV. It is best practice to avoid ESD events by attaching all conductive parts, especially the motors themselves to PCB ground, or to apply electrically conductive plastic parts. In addition, the driver can be protected up to a certain degree against ESD events or live plugging / pulling the motor, which also causes high voltages and high currents into the motor connector terminals. A simple scheme uses capacitors at the driver outputs to reduce the dV/dt caused by ESD events. Larger capacitors will bring more benefit concerning ESD suppression, but cause additional current flow in each chopper cycle, and thus increase driver power dissipation, especially  at  high  supply  voltages.  The  values  shown  are  example  values -they  might  be  varied between 100pF and 1nF. The capacitors also dampen high frequency noise injected from digital parts of the application PCB circuitry and thus reduce electromagnetic emission. A more elaborate scheme uses LC filters to de-couple the driver outputs from the motor connector. Varistors in between of the coil terminals eliminate coil overvoltage caused by live plugging. Optionally protect all outputs by a varistor against ESD voltage.

Figure 16.1 Simple ESD enhancement and more elaborate motor output protection

<!-- image -->

## 17 Layout Considerations

The  PCB  layout  is  critical  to  good  performance,  because  the  environment  includes  both  highsensitivity analog signals and high-current motor drive signals.

## 17.1 Sense Resistors

The sense resistors are susceptible to ground differences and ground ripple voltage, as the microstep current  steps  result  in  voltages  down  to  0.5mV.  No  current  other  than  the  sense  resistor  currents should flow through their connections to ground. Place the sense resistors close to chip with one or more vias to the ground plane for each sense resistor.

The  sense  resistor  layout  is  also  sensitive  to  coupling  between  the  axes.  The  two  sense  resistors should  not  share  a  common  ground  connection  trace  or  vias,  because  PCB  traces  have  some resistance.

## 17.2 Power MOSFET Outputs

The OA and OB dual pin outputs on the TMC2660 are directly connected electrically and thermally to the drain of the MOSFETs of the power stage. A symmetrical, thermally optimized layout is required to ensure proper heat dissipation of all MOSFETs into the PCB. Use thick traces and areas for vertical heat transfer into the GND plane and enough vias for the motor outputs.

The  printed  circuit  board  should  have  a  solid  ground  plane  spreading  heat  into  the  board  and providing  for  a  stable  GND  reference.  All  signals  of  the  TMC2660  are  referenced  to  GND.  Directly connect all GND pins to a common ground area to avoid voltage differences disturbing the operation.

The switching motor coil outputs have a high dV/dt, so stray capacitive coupling into high-impedance signals can occur, if the motor traces are parallel to other traces over long distances.

## 17.3 Power Supply Pins

Both, the VSA and VSB pins, as well as the BRA and BRB pins conduct the full motor current for a limited amount of time during each chopper cycle. Due to the resistance of bond wires connected to these pins, the pins heat up. Therefore, it is essential for current capability above 2A RMS to use a wide PCB trace for cooling and to avoid additional heat up of the pins caused by PCB trace resistance. This is simplified by also contacting the N.C. pins located next to VSA and VSB to the supply voltage. Failure to do so might affect reliability; despite heat-up of bond wires might not be visible with a thermal camera.

## 17.4 Power Filtering

The 470nF ceramic filtering capacitor on 5VOUT should be placed as close as possible to the 5VOUT pin, with its GND return going directly to the nearest GND pin. Use as short and as thick connections as possible. A 100nF filtering capacitor should be placed as close as possible from the VS pin to the ground plane. The motor supply pins, VSA and VSB, should be decoupled with an electrolytic (&gt;100 μF recommended)  capacitor  and  a  ceramic  capacitor,  placed  close  to  the  device.  Also  place  minimum 100nF capacitor for VCC\_IO close to the supply pin.

## 17.5 Layout Example

## EXAMPLE FOR UP TO 2.8A RMS

Here, an example for a layout with small board size ( ≈ 20cm²) is shown. See also the evaluation board.

neg/Juoet

Figure 17.1 Layout example for TMC2660

<!-- image -->

## 18 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                                                               | Parameter                                                        | Symbol   | Min   | Max        | Unit   |
|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|----------|-------|------------|--------|
| Supply voltage                                                                                          | Supply voltage                                                   | V VS     | -0.5  | 30         | V      |
| Supply voltage when disabled (ENN V VIO ) with I OXX =0                                                 | Supply voltage when disabled (ENN V VIO ) with I OXX =0          | V VSDIS  |       | 60         | V      |
| Logic supply voltage                                                                                    | Logic supply voltage                                             | V VCC    | -0.5  | 6.0        | V      |
| I/O supply voltage                                                                                      | I/O supply voltage                                               | V VIO    | -0.5  | 6.0        | V      |
| Logic input voltage                                                                                     | Logic input voltage                                              | V I      | -0.5  | V VIO +0.5 | V      |
| Analog input voltage                                                                                    | Analog input voltage                                             | V IA     | -0.5  | V CC +0.5  | V      |
| Relative high-side gate driver voltage (V VM - V HS )                                                   | Relative high-side gate driver voltage (V VM - V HS )            | V HSVM   | -0.5  | 15         | V      |
| Maximum current to/from digital pins and analog low voltage I/Os                                        | Maximum current to/from digital pins and analog low voltage I/Os | I IO     |       | +/-10      | mA     |
| Non-destructive short time peak current into input/output pins                                          | Non-destructive short time peak current into input/output pins   | I IO     |       | 500        | mA     |
| Bridge output peak current (10µs pulse)                                                                 | Bridge output peak current (10µs pulse)                          | I OP     |       | +/-7       | A      |
| Output current, RMS per coil, T A ≤ 50°C 20cm² board with sample layout, ≤ 40kHz chopper, fastest slope | running >4 fullsteps/s                                           | I OC     |       | 2.0        | A      |
| Output current, RMS per coil, T A ≤ 50°C 20cm² board with sample layout, ≤ 40kHz chopper, fastest slope | duty cycle 2s on 6s off                                          | I OC     |       | 2.5        | A      |
| Output current, RMS per coil, T A ≤ 50°C 20cm² board with sample layout, ≤ 40kHz chopper, fastest slope | standstill, single coil on (halfstep position) *)                | I OC     |       | 2.2        | A      |
| Output current, RMS per coil, T A ≤ 50°C 50cm² board with sample layout ≤ 40kHz chopper, fastest slope  | running >4 fullsteps/s                                           | I OC     |       | 2.2        | A      |
| Output current, RMS per coil, T A ≤ 50°C 50cm² board with sample layout ≤ 40kHz chopper, fastest slope  | duty cycle 2s on 6s off                                          | I OC     |       | 2.8        | A      |
| Output current, RMS per coil, T A ≤ 50°C 50cm² board with sample layout ≤ 40kHz chopper, fastest slope  | standstill, single coil on (halfstep position) *)                | I OC     |       | 2.4        | A      |
| Output current, RMS per coil, T A ≤ 85°C 20cm² board with sample layout, ≤ 40kHz chopper, fastest slope | running >4 fullsteps/s                                           | I OC     |       | 1.6        | A      |
| Output current, RMS per coil, T A ≤ 85°C 20cm² board with sample layout, ≤ 40kHz chopper, fastest slope | duty cycle 2s on 6s off                                          | I OC     |       | 2.0        | A      |
| Output current, RMS per coil, T A ≤ 85°C 20cm² board with sample layout, ≤ 40kHz chopper, fastest slope | standstill, single coil on (halfstep position) *)                | I OC     |       | 1.8        | A      |
| Output current, RMS per coil, T A ≤ 85°C                                                                | running >4 fullsteps/s                                           | I OC     |       | 1.8        | A      |
| Output current, RMS per coil, T A ≤ 85°C                                                                | duty cycle 2s on 6s off                                          | I OC     |       | 2.3        | A      |
| 50cm² board with sample layout ≤ 40kHz chopper, fastest slope                                           | standstill, single coil on (halfstep position) *)                | I OC     |       | 2.0        | A      |
| 5V regulator output current                                                                             | 5V regulator output current                                      | I 5VOUT  |       | 50         | mA     |
| 5V regulator peak power dissipation (V VM -5V) * I 5VOUT                                                | 5V regulator peak power dissipation (V VM -5V) * I 5VOUT         | P 5VOUT  |       | 1          | W      |
| Junction temperature                                                                                    | Junction temperature                                             | T J      | -50   | 150        | °C     |
| Storage temperature                                                                                     | Storage temperature                                              | T STG    | -55   | 150        | °C     |
| ESD-Protection (Human body model, HBM), in application                                                  | ESD-Protection (Human body model, HBM), in application           | V ESDAP  |       | 2          | kV     |
| ESD-Protection (Human body model, HBM), device handling                                                 | ESD-Protection (Human body model, HBM), device handling          | V ESDDH  |       | 300        | V      |

## 19 Electrical Characteristics

## 19.1 Operational Range

| Parameter               | Symbol   |   Min |    Max | Unit   |
|-------------------------|----------|-------|--------|--------|
| Junction temperature    | T J      |   -40 | 125    | °C     |
| Supply voltage TMC2660C | V VS     |     5 |  29    | V      |
| I/O supply voltage      | V VIO    |     3 |   5.25 | V      |

## 19.2 DC and AC Specifications

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes some values to stray. A device with typical values will not leave Min/Max range within the full temperature range.

| Power Supply Current                                     | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V           | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V   |
|----------------------------------------------------------|-----------------------------------|-------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Parameter                                                | Symbol                            | Conditions                                | Min                               | Typ                               | Max                               | Unit                              |
| Supply current, operating                                | I VS                              | f CLK =16MHz, 40kHz chopper               |                                   | 8                                 |                                   | mA                                |
| Supply current, MOSFETs off                              | I VS                              | f CLK =12MHz                              |                                   | 5                                 |                                   | mA                                |
| Supply current, MOSFETs off, dependency on CLK frequency | I VS                              | f CLK variable additional to I VS0        |                                   | 0.1                               |                                   | mA/ MHz                           |
| Static supply current                                    | I VS0                             | f CLK =0Hz, digital inputs at +5V or GND  |                                   | 3.5                               | 5.7                               | mA                                |
| Part of supply current NOT consumed from 5V supply       | I VSHV                            | MOSFETs off                               |                                   | 1.2                               |                                   | mA                                |
| IO supply current                                        | I VIO                             | No load on outputs, inputs at V IO or GND |                                   | 50                                | 100                               | µA                                |

| High-Side Voltage Regulator                 | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V           | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V   | DC-Characteristics V VS = 24.0V   |
|---------------------------------------------|-----------------------------------|-------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Parameter                                   | Symbol                            | Conditions                                | Min                               | Typ                               | Max                               | Unit                              |
| Output voltage (V VS - V HS )               | V HSVS                            | I OUT = 0mA T J = 25°C                    | 9.3                               | 10.0                              | 10.8                              | V                                 |
| Lower voltage for VHS regulator to activate | V VS                              | VS rising, first time VHS goes up from 0V |                                   | 12.5                              | 13                                | V                                 |
| Output resistance                           | R VHS                             | Static load                               |                                   | 50                                |                                   |                                  |

| Linear Regulator                                            | DC Characteristics   | DC Characteristics              | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   |
|-------------------------------------------------------------|----------------------|---------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                   | Symbol               | Conditions                      | Min                  | Typ                  | Max                  | Unit                 |
| Output voltage                                              | V 5VOUT              | I 5VOUT = 10mA T J = 25°C       | 4.75                 | 5.0                  | 5.25                 | V                    |
| Output resistance                                           | R 5VOUT              | Static load                     |                      |                      | 1                    |                     |
| Deviation of output voltage over the full temperature range | V 5VOUT(DEV)         | I 5VOUT = 10mA T J = full range |                      | 0                    | 60                   | mV                   |

| Internal MOSFETs TMC2660C      | DC Characteristics V VS = V VSX ≥ 12.0V, V BRX = 0V   | DC Characteristics V VS = V VSX ≥ 12.0V, V BRX = 0V   | DC Characteristics V VS = V VSX ≥ 12.0V, V BRX = 0V   | DC Characteristics V VS = V VSX ≥ 12.0V, V BRX = 0V   | DC Characteristics V VS = V VSX ≥ 12.0V, V BRX = 0V   | DC Characteristics V VS = V VSX ≥ 12.0V, V BRX = 0V   |
|--------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| Parameter                      | Symbol                                                | Conditions                                            | Min                                                   | Typ                                                   | Max                                                   | Unit                                                  |
| N-channel MOSFET on resistance | R ONN                                                 | T J = 25°C                                            |                                                       | 63                                                    | 76                                                    | mΩ                                                    |
| P-channel MOSFET on resistance | R ONP                                                 | T J = 25°C                                            |                                                       | 93                                                    | 110                                                   | mΩ                                                    |
| N-channel MOSFET on resistance | R ONN                                                 | T J = 150°C                                           |                                                       | 110                                                   |                                                       | mΩ                                                    |
| P-channel MOSFET on resistance | R ONP                                                 | T J = 150°C                                           |                                                       | 160                                                   |                                                       | mΩ                                                    |

| Clock Oscillator and CLK Input                                  | Timing Characteristics   | Timing Characteristics                          | Timing Characteristics   | Timing Characteristics   | Timing Characteristics   | Timing Characteristics   |
|-----------------------------------------------------------------|--------------------------|-------------------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                                                       | Symbol                   | Conditions                                      | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =-50°C                                      | 10.0                     | 13.5                     |                          | MHz                      |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =50°C                                       | 10.8                     | 14.3                     | 17.5                     | MHz                      |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =150°C                                      |                          | 14.5                     | 18.0                     | MHz                      |
| External clock frequency (operating)                            | f CLK                    | Typ. at 40%/60% dutycycle, Max at 50% dutycycle | 4                        | 10-16                    | 20                       | MHz                      |
| External clock high / low level time                            | t CLK                    |                                                 | 16                       |                          |                          | ns                       |
| External clock first pulse to trigger switching to external CLK | t CLKH / t CLKL          |                                                 | 16                       |                          |                          | ns                       |
| External clock transition time                                  | t TRCLK                  | V INLO to V INHI or back                        |                          |                          | 20                       | ns                       |
| External clock timeout detection in cycles of internal f CLKOSC | x timeout                | External clock stuck at low or high             | 32                       |                          | 48                       | cycles f CLKOSC          |

| Detector Levels                                                             | DC Characteristics   | DC Characteristics                | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   |
|-----------------------------------------------------------------------------|----------------------|-----------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                                   | Symbol               | Conditions                        | Min                  | Typ                  | Max                  | Unit                 |
| V VS undervoltage threshold high                                            | V UV                 | EN_PFD=0                          | 6.5                  | 7                    | 7.5                  | V                    |
| V VS undervoltage threshold low                                             | V UV                 | EN_PFD=1                          | 3.25                 | 3.8                  | 4.25                 | V                    |
| V VCC_IO undervoltage threshold for RESET                                   | V UV_VIO             | V VCC_IO rising (delay typ. 10µs) | 2.1                  | 2.55                 | 3.0                  | V                    |
| V VCC_IO undervoltage detector hysteresis                                   | V UV_VIOHYS T        |                                   |                      | 0.3                  |                      | V                    |
| Short to GND detector threshold (high setting) (V VS - V BMx )              | V BMS2G              |                                   | 1.2                  | 1.7                  | 2.3                  | V                    |
| Short to GND detector threshold (sensitive setting) (V VS - V BMx )         | V BMS2G              |                                   | 0.7                  | 1.0                  | 1.3                  | V                    |
| Short to VS detector threshold (V BMx )                                     | V BMS2VS             |                                   | 1.3                  | 1.5                  | 1.8                  | V                    |
| Short to GND detector delay (low-side gate off detected to short detection) | t S2G                | TS2G=00                           | 2.0                  | 3.2                  | 4.5                  | µs                   |
| Short to GND detector delay (low-side gate off detected to short detection) | t S2G                | TS2G=10                           |                      | 1.6                  |                      | µs                   |
| Short to GND detector delay (low-side gate off detected to short detection) | t S2G                | TS2G=01                           |                      | 1.2                  |                      | µs                   |
| Short to GND detector delay (low-side gate off detected to short detection) | t S2G                | TS2G=11                           |                      | 0.8                  |                      | µs                   |
| Overtemperature warning                                                     | t OTPW               |                                   | 85                   | 100                  | 115                  | °C                   |
| Overtemperature release                                                     | t OTR                | Temperature falling               |                      | 120                  |                      | °C                   |
| Overtemperature shutdown lo                                                 | t OTL                | Temperature rising                |                      | 136                  |                      | °C                   |
| Overtemperature shutdown hi                                                 | t OTH                | Temperature rising                | 135                  | 150                  | 170                  | °C                   |

| Sense Resistor Voltage Levels                         | DC Characteristics   | DC Characteristics       | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   |
|-------------------------------------------------------|----------------------|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                             | Symbol               | Conditions               | Min                  | Typ                  | Max                  | Unit                 |
| Sense input peak threshold voltage (low sensitivity)  | V SRTRIPL            | VSENSE=0 Cx=248; Hyst.=0 | 310                  | 323                  | 340                  | mV                   |
| Sense input peak threshold voltage (high sensitivity) | V SRTRIPH            | VSENSE=1 Cx=248; Hyst.=0 | 155                  | 173                  | 190                  | mV                   |

| Digital Logic Levels        | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   | DC Characteristics   |
|-----------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                   | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Input voltage low level a)  | V INLO               |                      | -0.3                 |                      | 0.3 V VIO            | V                    |
| Input voltage high level a) | V INHI               |                      | 0.7 V VIO            |                      | V VIO +0.3           | V                    |
| Output voltage low level    | V OUTLO              | I OUTLO = 2mA        |                      |                      | 0.2                  | V                    |
| Output voltage high level   | V OUTHI              | I OUTHI = -2mA       | V VIO -0.2           |                      |                      | V                    |
| Input leakage current       | I ILEAK              |                      | -10                  |                      | 10                   | µA                   |
| Digital pin capacitance     | C                    |                      |                      | 3.5                  |                      | pF                   |

## Notes:

- a) Digital inputs left within or near the transition region substantially increase power supply current by drawing power from the internal 5V regulator. Make sure that digital inputs become driven near to 0V and up to the VIO I/O voltage. There are no on-chip pull-up or pulldown resistors on inputs.

## 19.3 Thermal Characteristics

| Parameter                                                                                                                                       | Symbol    | Conditions                           |   Typ | Unit   |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------------------------|-------|--------|
| Thermal resistance bridge transistor junction to ambient, soldered to 4-layer 20cm² PCB (or 20cm² size per driver IC for multiple driver board) | R THA14   | one bridge chopping, fixed polarity  | 80    | K/W    |
| Thermal resistance bridge transistor junction to ambient, soldered to 4-layer 20cm² PCB (or 20cm² size per driver IC for multiple driver board) | R THA24   | two bridges chopping, fixed polarity | 50    | K/W    |
| Thermal resistance bridge transistor junction to ambient, soldered to 4-layer 20cm² PCB (or 20cm² size per driver IC for multiple driver board) | R THA44   | Motor running                        | 37    | K/W    |
| Thermal resistance bridge transistor junction to ambient, soldered to 4-layer 50cm² PCB                                                         | R THA44a  | Motor running                        | 28    | K/W    |
| Power dissipation in bridge MOSFETs (MOSFETs at 125°C) 24V, 30kHz chopper, fast slope                                                           | P BRIDGES | 2A RMS per coil                      |  2.6  | W      |
| Power dissipation in bridge MOSFETs (MOSFETs at 125°C) 24V, 30kHz chopper, fast slope                                                           | P BRIDGES | 2.2A RMS per coil                    |  3.2  | W      |
| Power dissipation in bridge MOSFETs (MOSFETs at 125°C) 24V, 30kHz chopper, fast slope                                                           | P BRIDGES | 2.8A RMS per coil                    |  5    | W      |
| Additional for core                                                                                                                             | P CORE    | 24V supply, 16MHz f CLK              |  0.28 | W      |

When operating the device near its current limits, ensure a good thermal design of the PCB layout to avoid overheating of the power integrated MOSFETs. Due to its multichip construction with individual heat transfer for each MOSFET of the power stage to the PCB using two pins, thermal characteristics depend on the layout symmetry. The actual thermal resistance also depends on the duty cycle and the die temperature. Use the thermal characteristics and the sample layout as a guideline for your own board layout. In case, the driver is to be operated at high current levels, special care should be taken to spread the heat generated by the driver power bridges efficiently within the PCB.

The worst-case thermal resistance occurs during motor stand still with the motor stopped in a half step position (one coil full current, other coil 0), as well as cyclic in slow motion below 4FS/s. Assume roughly 80°C/W, when there is only one bridge chopping. This is the worst-case scenario for heat-up. In stand still, with two bridges chopping at identical current (fullstep position), thermal resistance is reduced, because the power dissipation is distributed to more MOSFETs. Reduce stand still current to 68%  or  less,  to  compensate  for  both  stand  still  scenarios.  When  the  motor  is  running,  calculate thermal resistance for the complete chip (all 8 MOSFETs working).

The MOSFET and bond wire temperature should not exceed 150°C, despite temperatures up to 200°C will  not  immediately  destroy  the  devices.  But  the  package  plastics  will  apply  strain  onto  the  bond wires,  so  that  cyclic,  repetitive  exposure  to  temperatures  above  150°C  may  damage  the  electrical contacts  and  increase  contact  resistance  and  eventually  lead  to  contract  break.  As  the  MOSFET temperatures cannot be monitored within the system, it is a good practice to react to the temperature pre-warning by reducing motor current, rather than relying on the overtemperature switch off.

Check MOSFET temperature under worst case conditions not to exceed 150°C using a thermal camera to validate your layout. Please carefully check your layout against the sample layout or the layout of the TMC2660-Evaluation board on the TRINAMIC website in order to ensure proper cooling of the IC!

Figure 19.1 TMC2660 operating at 2.3A RMS (3.2A peak) on a 50cm² sized board

<!-- image -->

## 20 Package Mechanical Data

## 20.1 Dimensional Drawings

Attention: Drawings not to scale.

<!-- image -->

Figure 20.1 Dimensional drawings (PQFP44)

| Parameter                | Ref   | Min   | Nom   | Max   |
|--------------------------|-------|-------|-------|-------|
| Size over pins (X and Y) | A     |       | 12    |       |
| Body size (X and Y)      | C     |       | 10    |       |
| Pin length               | D     |       | 1     |       |
| Total thickness          | E     |       |       | 1.6   |
| Lead frame thickness     | F     | 0.09  |       | 0.2   |
| Stand off                | G     | 0.05  | 0.10  | 0.15  |
| Pin width                | H     | 0.30  |       | 0.45  |
| Flat lead length         | I     | 0.45  |       | 0.75  |
| Pitch                    | K     |       | 0.8   |       |
| Coplanarity              | ccc   |       |       | 0.08  |

## 20.2 Package Code

| Device   | Package       | Temperature range   | Code/marking       |
|----------|---------------|---------------------|--------------------|
| TMC2660C | PQFP44 (RoHS) | -40° to +125°C      | TMC2660C-PA / YYWW |

WW=Week, YY=Year

## 21 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information  given  in  this  data  sheet  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 22 ESD Sensitive Device

The TMC2660 is a ESD-sensitive CMOS device and sensitive to electrostatic discharge, due to discrete MOSFETs integrated into the package. Take special care to use adequate grounding of personnel and machines in manual handling. After soldering the device to the board, ESD requirements are more relaxed. Failure to do so can result in defects or decreased reliability.

<!-- image -->

Note: In a modern SMD manufacturing process, ESD voltages well below 100V are standard. A major source  for  ESD  is  hot-plugging  the  motor  during  operation.  As  the  power  MOSFETs  are  discrete devices, the device in fact is very rugged concerning any ESD event on the motor outputs. All other connections are typically protected due to external circuitry on the PCB.

## 23 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 24 Table of Figures

| Figure 1.1 Block diagram: applications...........................................................................................................................4               |       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Figure 2.1 TMC2660 pin assignment (top view)...........................................................................................................6                         |       |
| Figure 3.1 TMC2660 block diagram..................................................................................................................................8              |       |
| Figure 2 Standalone configuration..................................................................................................................................9             |       |
| Figure 5.1 StallGuard2 load measurement SG as a function of load..................................................................10                                             |       |
| Figure 5.2 Linear interpolation for optimizing SGT with changes in velocity..................................................11                                                  |       |
| Figure 6.1 Energy efficiency example with CoolStep ...............................................................................................13                             |       |
| Figure 6.2 CoolStep adapts motor current to the load. ..........................................................................................14                               |       |
| Figure 7.1 SPI Timing ........................................................................................................................................................16 |       |
| Figure 7.2 Interfaces to a TMC429 motion controller chip and a TMC2660 motor driver.............................17                                                               |       |
| Figure 8.1 STEP and DIR timing. ....................................................................................................................................28           |       |
| Figure 8.2 Internal microstep table showing the first quarter of the sine wave. ..........................................29                                                     |       |
| Figure 8.3 MicroPlyer microstep interpolation with rising STEP frequency. .....................................................30                                                |       |
| Figure 9.1 Sense resistor grounding and protection components......................................................................33                                            |       |
| Figure 10.1 Chopper phases. ...........................................................................................................................................34        |       |
| Figure 10.2 No ledges in current wave with sufficient hysteresis (magenta: current A, yellow &                                                                                   | blue: |
| sense resistor voltages A and B) ...................................................................................................................................36           |       |
| Figure 10.3 SpreadCycle chopper mode showing the coil current during a chopper cycle.........................37                                                                  |       |
| Figure 10.4 Constant off-time chopper with offset showing the coil current during two cycles..............38                                                                     |       |
| Figure 10.5 Zero crossing with correction using sine wave offset......................................................................38                                         |       |
| Figure 12.1 Short detection timing................................................................................................................................41             |       |
| Figure 12.2 Undervoltage reset timing.........................................................................................................................44                 |       |
| Figure 14.1 Start-up requirements of CLK input ........................................................................................................46                        |       |
| Figure 3.10 Simple ESD enhancement and more elaborate motor output protection ..................................48                                                               |       |
| Figure 16.1 Layout example for TMC2660....................................................................................................................50                     |       |
| Figure 18.1 TMC2660 operating at 2.3A RMS (3.2A peak) on a 50cm² sized board .........................................55                                                         |       |
| Figure 19.1 Dimensional drawings (PQFP44)..............................................................................................................56                        |       |

## 25 Revision History

|   Version | Date        | Author BD - Bernhard Dwersteg   | Description                                                                                              |
|-----------|-------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
|      1    | 2020-JUL-06 | BD                              | New version for -C types. Non-C-type information only for reference                                      |
|      1.01 | 2020-AUG-11 | BD                              | Corrected pinning table                                                                                  |
|      1.02 | 2021-JUN-17 | BD                              | Added EME example, minor fixes                                                                           |
|      1.03 | 2022-FEB-15 | BD                              | Updated logo; corrected open load detection conditions; corrected upper limit for I VS0 from 5 to 5.7mA. |