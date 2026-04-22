<!-- lastmod 2024-03-07 -->
## TMC2208/2 &amp; TMC2224 family Datasheet

TMC2202, TMC2208, TMC2224 Step/Dir Drivers for Two-Phase Bipolar Stepper Motors up to 2A peak StealthChop ™ for Quiet Movement - UART Interface Option.

<!-- image -->

## FEATURES AND BENEFITS

2-phase stepper motors up to 2A coil current (peak)

STEP/DIR  Interface with  2,  4,  8,  16  or  32  microstep  pin setting

Smooth Running 256 microsteps by MicroPlyer ™

interpolation silent motor operation

StealthChop2™

SpreadCycle ™ highly dynamic motor control chopper

Low RDSon LS 280mΩ &amp; HS 290mΩ (typ. at 25°C)

Voltage Range 4.75… 36V DC

Automatic Standby current reduction (option)

Internal Sense Resistor option (no sense resistors required)

Passive Braking and Freewheeling

Single Wire UART &amp; OTP for advanced configuration options

Integrated Pulse Generator for standalone motion

Full Protection &amp; Diagnostics

Choice of QFN and wettable QFN packages for best fit

## BLOCK DIAGRAM

## APPLICATIONS

Compatible Design Upgrade 3D Printers Printers, POS Office and home automation Textile, Sewing Machines CCTV, Security ATM, Cash recycler

HVAC

## DESCRIPTION

The  TMC2202,  TMC2208  and  TMC2224  are ultra-silent  motor  driver  ICs  for  two-phase stepper motors. Their pinning is compatible to  a  number  of  legacy  drivers.  TRINAMICs sophisticated StealthChop2 chopper ensures noiseless operation, maximum efficiency, and best motor torque.  Its fast current regulation and optional combination  with  SpreadCycle  allow  for highly  dynamic  motion.  Integrated  powerMOSFETs handle  motor  current  up  to  1.4A RMS. Protection and  diagnostic features support  robust  and  reliable  operation.  A simple  to  use  UART  interface  opens  up more tuning and control options. Application specific tuning can be stored to OTP  memory. Industries'  most  advanced STEP/DIR stepper motor driver family upgrades  designs  to  noiseless  and  most precise operation for cost-effective and highly competitive solutions.

<!-- image -->

<!-- image -->

<!-- image -->

## APPLICATION EXAMPLES: SIMPLE SOLUTIONS -HIGHLY EFFECTIVE

The  TMC22xx  family  scores  with  power  density,  integrated  power  MOSFETs,  smooth  and  quiet operation,  and  a  congenial  simplicity.  The  TMC22xx  covers  a  wide  spectrum  of  applications  from battery systems to embedded applications with up to 2A motor current per coil. TRINAMICs unique chopper modes SpreadCycle and StealthChop2 optimize drive performance. StealthChop reduces motor noise  to  the  point  of  silence  at  low  velocities.  Standby  current  reduction  keeps  costs  for  power dissipation and cooling down. Extensive support enables rapid design cycles and fast time-to-market with competitive products.

## STANDALONE REPLACEMENT FOR LEGACY STEPPER DRIVER

<!-- image -->

## UART INTERFACE FOR FULL DIAGNOSTICS AND CONTROL

<!-- image -->

## TMC2208-EVAL EVALUATION BOARD

<!-- image -->

In  this  example,  configuration  is  hard wired via pins. Software based motion control generates STEP and DIR (direction)  signals,  INDEX  and  ERROR signals report back status information.

A CPU operates the driver via step and direction signals. It accesses diagnostic information and configures the TMC22xx  via  the  UART  interface.  The CPU  manages  motion  control  and  the TMC22xx  drives  the  motor  and  smoothens and optimizes drive performance.

The TMC22xx-EVAL is part of TRINAMICs  universal  evaluation  board system  which  provides  a  convenient handling of the hardware as well as a user-friendly software tool for evaluation. The TMC22xx evaluation board  system  consists  of  three  parts: LANDUNGSBRÜCKE (base board), ESELSBRÜCKE  (connector board with test points), and TMC22xx-EVAL.

## ORDER CODES

| Order code              | Description                                                                            | Size [mm 2 ]   |
|-------------------------|----------------------------------------------------------------------------------------|----------------|
| TMC2202-WA              | Stepper Motor Driver/Controller IC, Step/Dir, UART, 4.75-36V, 1.4A, QFN32, Tray        | 5 x 5          |
| TMC2202-WA-T            | Stepper Motor Driver/Controller IC, Step/Dir, UART, 4.75-36V, 1.4A, QFN32, Tape & Reel | 5 x 5          |
| TMC2208-LA              | Stepper Motor Driver IC, Step/Dir, UART, 4.75-36V Supply, 1.4A, QFN28, Tray            | 5 x 5          |
| TMC2208-LA-T            | Stepper Motor Driver IC, Step/Dir, UART, 4.75-36V Supply, 1.4A, QFN28, Tape & Reel     | 5 x 5          |
| TMC2208-EVAL-KIT        | Full Evaluation Kit for TMC2208                                                        | 126 x 85       |
| TMC2208-EVAL            | Evaluation Board for TMC2208 (excl. Landungsbrücke and Eselsbrücke)                    | 85 x 55        |
| TMC2208 SilentStepStick | Step Direction Driver Board with TMC2208                                               | 20 x 15        |
| TMC2224-LA              | Stepper Motor Driver IC, Step/Dir, UART, 4.75-36V Supply, 1.4A, QFN28, Tray            | 5 x 5          |
| TMC2224-LA-T            | Stepper Motor Driver IC, Step/Dir, UART, 4.75-36V Supply, 1.4A, QFN28, Tape & Reel     | 5 x 5          |
| TMC2224-EVAL-KIT        | Full Evaluation Kit for TMC2224                                                        | 126 x 85       |
| TMC2224-EVAL            | Evaluation Board for TMC2224 (excl. Landungsbrücke and Eselsbrücke)                    | 85 x 55        |

## Table of Contents

.

| 1   | PRINCIPLES OF OPERATION .........................5               | PRINCIPLES OF OPERATION .........................5               |                                                                         |
|-----|------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------|
|     | 1.1                                                              | KEY CONCEPTS ................................................6   |                                                                         |
|     | 1.2                                                              | CONTROL I NTERFACES                                              | .....................................7                                  |
|     | 1.3                                                              | MOVING AND CONTROLLING THE MOTOR                                 | ........7                                                               |
|     | 1.4                                                              | STEALTHCHOP2 & SPREADCYCLE DRIVER                                | .......7                                                                |
|     | 1.5                                                              | PRECISE CLOCK GENERATOR AND CLK INPUT                            | ...8                                                                    |
|     | 1.6                                                              | AUTOMATIC STANDSTILL POWER DOWN                                  | .........8                                                              |
|     | 1.7                                                              | INDEX OUTPUT                                                     | ................................................8                       |
| 2   | PIN ASSIGNMENTS                                                  | PIN ASSIGNMENTS                                                  | ...........................................9                            |
|     | 2.1                                                              | PACKAGE OUTLINE TMC2208                                          | ........................9                                               |
|     | 2.2                                                              | SIGNAL DESCRIPTIONS TMC2208                                      | ..................9                                                     |
|     | 2.3                                                              | PACKAGE OUTLINE TMC2202                                          | ......................10                                                |
|     | 2.4                                                              | SIGNAL DESCRIPTIONS TMC2202                                      | ................10                                                      |
|     | 2.5                                                              | PACKAGE OUTLINE TMC2224                                          | ......................11                                                |
|     | 2.6                                                              | SIGNAL DESCRIPTIONS TMC2224                                      | ................12                                                      |
| 3   | SAMPLE CIRCUITS ..........................................13     | SAMPLE CIRCUITS ..........................................13     |                                                                         |
|     | 3.1                                                              | STANDARD APPLICATION CIRCUIT                                     | ................13                                                      |
|     | 3.2                                                              | I NTERNAL RDSON SENSING                                          | ..........................14                                            |
|     | 3.3                                                              | 5V ONLY SUPPLY                                                   | ..........................................15                            |
|     | 3.4                                                              | CONFIGURATION PINS                                               | ..................................16                                    |
|     | 3.5                                                              | HIGH MOTOR CURRENT                                               | .................................16                                     |
| 4   | 3.6 DRIVER PROTECTION AND EME CIRCUITRY UART                     | SINGLE WIRE                                                      | INTERFACE ................18                                            |
|     | 4.1                                                              | DATAGRAM STRUCTURE                                               | .................................18                                     |
|     | 4.2                                                              | CRC CALCULATION                                                  | .......................................20                               |
|     | 4.3                                                              | UART SIGNALS                                                     | ............................................20                          |
|     | 4.4                                                              | ADDRESSING MULTIPLE SLAVES                                       | ....................21                                                  |
| 5   | REGISTER MAP .................................................22 | REGISTER MAP .................................................22 |                                                                         |
|     | 5.1                                                              | GENERAL REGISTERS                                                | .....................................23                                 |
|     | 5.2                                                              | VELOCITY DEPENDENT CONTROL                                       | ...................28                                                   |
|     | 5.3                                                              | SEQUENCER REGISTERS                                              | .................................29                                     |
|     | 5.4                                                              | CHOPPER CONTROL REGISTERS                                        | .....................30                                                 |
| 6   | ST EALTHCHOP™ ..............................................36   | ST EALTHCHOP™ ..............................................36   |                                                                         |
|     | 6.1                                                              | AUTOMATIC TUNING                                                 | .....................................36                                 |
|     | 6.2                                                              | STEALTHCHOP OPTIONS                                              | ................................39                                      |
|     | 6.3                                                              | STEALTHCHOP CURRENT REGULATOR                                    | .............39                                                         |
|     | 6.4                                                              | VELOCITY BASED SCALING ............................41            |                                                                         |
|     | 6.5                                                              | COMBINING STEALTHCHOP AND SPREADCYCLE                            | .                                                                       |
|     |                                                                  |                                                                  | .....................................................................43 |
|     | 6.6                                                              | FLAGS IN STEALTHCHOP ...............................44           |                                                                         |
|     | 6.7                                                              | FREEWHEELING AND PASSIVE BRAKING                                 | ........45                                                              |
| 7   | SPREADCYCLE CHOPPER ...............................47            | SPREADCYCLE CHOPPER ...............................47            |                                                                         |
|     | 7.1                                                              | SPREADCYCLE SETTINGS                                             | ...............................48                                       |

8

9

SELECTING SENSE RESISTORS

....................  51

MOTOR CURRENT CONTROL

9.1

........................  52

ANALOG CURRENT SCALING VREF

10

...............  53

INTERNAL SENSE RESISTORS

11

STEP/DIR INTERFACE

11.1

.....................  55

....................................  57

TIMING

.........................................................  57

11.2

CHANGING RESOLUTION

...............................  58

11.3

MICROPLYER STEP INTERPOLATOR AND STAND

STILL DETECTION

.......................................................  59

11.4

INDEX OUTPUT

.............................................  60

12

INTERNAL STEP PULSE GENERATOR

13

.........  61

DRIVER DIAGNOSTIC FLAGS

13.1

TEMPERATURE MEASUREMENT

13.2

13.3

13.4

......................  62

.......................  62

SHORT PROTECTION

......................................  62

OPEN LOAD DIAGNOSTICS

...........................  63

DIAGNOSTIC OUTPUT

...................................  63

14

QUICK CONFIGURATION GUIDE

15

16

17

................  64

EXTERNAL RESET

.............................................  67

CLOCK OSCILLATOR AND INPUT

...............  67

ABSOLUTE MAXIMUM RATINGS

18

ELECTRICAL CHARACTERISTICS

18.1

.................  68

.................  68

OPERATIONAL RANGE

18.2

18.3

...................................  68

DC AND TIMING CHARACTERISTICS

..............  69

THERMAL CHARACTERISTICS

19

..........................  73

LAYOUT CONSIDERATIONS

19.1

.........................  74

EXPOSED DIE PAD

........................................  74

19.2

19.3

19.4

WIRING GND

..............................................  74

SUPPLY FILTERING

........................................  74

LAYOUT EXAMPLE TMC2208

........................  75

20

PACKAGE MECHANICAL DATA

20.1

....................  76

DIMENSIONAL DRAWINGS QFN28

20.2

20.3

...............  76

DIMENSIONAL DRAWINGS QFN32-WA

.......  78

PACKAGE CODES

...........................................  79

21

DESIGNED FOR SUSTAINABILITY

22

23

24

.............  79

TABLE OF FIGURES

.........................................  80

REVISION HISTORY

.......................................  81

REFERENCES

......................................................  81

## 1 Principles of Operation

The TMC22xx family of stepper drivers is intended as a drop-in upgrade for existing low-cost stepper driver  applications.  Its  silent  drive  technology  StealthChop  enables  non-bugging  motion  control  for home and office applications. A highly efficient power stage enables high current from a tiny package.

The TMC22xx requires just a few control pins on its tiny package. They allow selection of the most important setting: the desired microstep resolution. A choice of 2, 4, 8, 16 or 32 microsteps adapts the driver to the capabilities of the motion controller. Some package options also allow chopper mode selection by pin.

Even  at  low  microstepping  rate,  the  TMC22xx  offers  a  number  of  unique  enhancements  over comparable products: TRINAMICs sophisticated StealthChop2 chopper plus the microstep enhancement MicroPlyer  ensure  noiseless  operation,  maximum  efficiency  and  best  motor  torque.  Its  fast  current regulation  and  optional  combination  with  SpreadCycle  allow  for highly  dynamic motion. Protection and diagnostic  features  support  robust  and  reliable  operation.  A  simple-to-use  8  bit  UART  interface opens up more tuning and control options. Application specific tuning can be stored to on-chip OTP memory. Industries' most advanced step &amp; dir ection stepper motor driver family upgrades designs to noiseless and most precise operation for cost-effective and highly competitive solutions.

Figure 1.1 TMC22xx basic application block diagram

<!-- image -->

## THREE MODES OF OPERATION:

## OPTION 1: Standalone STEP/DIR Driver (Legacy Mode)

A  CPU  (µC)  generates  step  &amp;  direction  signals  synchronized  to  additional  motors  and  other components within the system. The TMC22xx operates the motor as commanded by the configuration pins and STEP/DIR signals. Motor run current either is fixed or set by the CPU using the analog input VREF. The pin PDN\_UART selects automatic standstill current reduction. Feedback from the driver to the CPU is granted by the INDEX and DIAG output signals. Enable or disable the motor using the ENN pin.

## OPTION 2: Standalone STEP/DIR Driver with OTP pre-configuration

Additional options enabled by pre-programming OTP memory (label UART &amp; OTP):

+ Tuning of the chopper to the application for application tailored performance
+ Cost reduction by switching the driver to internal sense resistor mode
+ Adapting the automatic power down level and timing for best application efficiency

Figure 1.2 Stand-alone driver with pre-configuration

<!-- image -->

To  enable  the  additional  options,  either  one-time  program  the  driver 's  OTP  memory ,  or  store configuration in the CPU and transfer it to the on-chip registers following each power-up. Operation uses the same signals as Option 1. Programming does not need to be done within the application - it can be executed during testing of the PCB! Alternatively, use bit-banging by CPU firmware to configure the driver. Multiple drivers can be programmed at the same time using a single TXD line.

## OPTION 3: STEP/DIR Driver with Full Diagnostics and Control

Similar to Option 2, but pin PDN\_UART is connected to the CPU UART interface. Additional options (label UART):

+ Detailed diagnostics and thermal management
+ Passive braking and freewheeling for flexible, lowest power stop modes
+ More options for microstep resolution setting (fullstep to 256 microstep)
+ Software controlled motor current setting and more chopper options

This  mode  allows  replacing  all  control  lines  like  ENN,  DIAG,  INDEX,  MS1,  MS2,  and  analog  current setting VREF by a single interface line. This way, only three signals are required for full control: STEP, DIR  and  PDN\_UART.  Even  motion  without  external  STEP pulses is provided by an  internal programmable  step  pulse  generator:  Just  set  the  desired  motor  velocity.  However,  no  ramping  is provided by the TMC22xx. Access to multiple driver ICs is possible using an analog multiplexer IC.

## 1.1 Key Concepts

The TMC22xx implements advanced features which are exclusive to TRINAMIC products. These features contribute toward greater precision, greater energy efficiency, higher reliability, smoother motion, and cooler operation in many stepper motor applications.

StealthChop2 ™

No-noise,  high-precision  chopper  algorithm  for  inaudible  motion  and  inaudible standstill  of  the  motor.  Allows  faster  motor  acceleration  and  deceleration  than StealthChop ™ and extends StealthChop to low stand still motor currents.

SpreadCycle ™

MicroPlyer ™

High-precision cycle-by-cycle current control algorithm for highest dynamic movements.

Microstep  interpolator  for  obtaining  full  256  microstep  smoothness  with  lower resolution step inputs starting from fullstep

In addition to these performance enhancements, TRINAMIC motor drivers offer safeguards to detect and protect against shorted outputs, output open-circuit, overtemperature, and undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

<!-- image -->

<!-- image -->

<!-- image -->

## 1.2 Control Interfaces

The TMC22xx supports both, discrete control lines for basic mode selection and a UART based single wire  interface  with  CRC  checking.  The  UART  interface  automatically  becomes  enabled  when  correct UART data is sent. When using UART, the pin selection may be disabled by control bits.

## 1.2.1 UART Interface

<!-- image -->

The single wire interface allows unidirectional operation (for parameter setting only), or bi-directional operation for full control and diagnostics. It can be driven by any standard microcontroller UART or even by bit  banging  in  software.  Baud  rates  from  9600  Baud  to  500k  Baud  or  even  higher  (when using  an  external  clock)  may  be  used.  No  baud  rate  configuration  is  required,  as  the  TMC22xx automatically  adapts  to  the  masters'  baud  rate .  The  frame  format  is  identical  to  the  intelligent TRINAMIC controller &amp; driver ICs  TMC5130 and TMC5072. A CRC checksum allows data transmission over longer distance. For fixed initialization sequences, store the data including CRC into the µC, thus consuming only a few 100 bytes of  code for a full initialization.  CRC  may  be  ignored  during  read access, if not desired. This makes CRC use an optional feature! The IC has a fixed address. Multiple drivers can be programmed in parallel by tying together all interface pins, in case no read access is required. An optional addressing can be provided by analog multiplexers, like 74HC4066.

From  a  software  point  of  view  the  TMC22xx  is  a  peripheral  with  a  number  of  control  and  status registers. Most of them can either be written only or are read only. Some of the registers allow both, read and write access. In case read-modify-write access is desired for a write only register, a shadow register can be realized in master software.

## 1.3 Moving and Controlling the Motor

## 1.3.1 STEP/DIR Interface

The motor is controlled by a step and direction input. Active edges on the STEP input can be rising edges or both rising and falling edges as controlled by a special mode bit (DEDGE). Using both edges cuts the toggle rate of the STEP signal in half, which is useful for communication over slow interfaces such as optically isolated interfaces. The state sampled from the DIR input upon an active STEP edge determines whether to step forward or back. Each step can be a fullstep or a microstep, in which there are 2, 4, 8, 16, 32, 64, 128, or 256 microsteps per fullstep. A step impulse with a low state on DIR increases the microstep counter and a high state decreases the counter by an amount controlled by the microstep resolution. An internal table translates the counter value into the sine and cosine values which control the motor current for microstepping.

## 1.3.2 Internal Step Pulse Generator

<!-- image -->

Some applications do not require a precisely co-ordinate motion -the motor just is required to move for a certain time and at a certain velocity. The TMC22xx comes with an internal pulse generator for these applications: Just provide the velocity via UART interface to move the motor. The velocity sign automatically controls the direction of the motion. However, the pulse generator does not integrate a ramping function. Motion at higher velocities will require ramping up and ramping down the velocity value via software.

STEP/DIR mode and internal pulse generator mode can be mixed in an application!

## 1.4 StealthChop2 &amp; SpreadCycle Driver

StealthChop is a voltage chopper based principle. It especially guarantees that the motor is absolutely quiet  in  standstill  and  in  slow  motion,  except  for  noise  generated  by  ball  bearings.  Unlike  other voltage mode choppers, StealthChop2 does not require any configuration. It automatically learns the best settings during the first motion after power up and further optimizes the settings in subsequent motions. An initial homing sequence is sufficient for learning. Optionally, initial learning parameters can be stored to OTP. StealthChop2 allows high motor dynamics, by reacting at once to a change of motor velocity.

For  highest  velocity  applications,  SpreadCycle  is  an  option  to  StealthChop2.  It  can  be  enabled  via input  pin  (TMC222x)  or  via  UART  and  OTP.  StealthChop2  and  SpreadCycle  may  even  be  used  in  a combined configuration for the best of both worlds: StealthChop2 for no-noise stand still, silent and smooth performance, SpreadCycle at higher velocity for high dynamics and highest peak velocity at low vibration.

SpreadCycle  is  an  advanced  cycle-by-cycle  chopper  mode.  It  offers  smooth  operation  and  good resonance  dampening  over  a  wide  range  of  speed  and  load.  The  SpreadCycle  chopper  scheme automatically integrates and tunes fast decay cycles to guarantee smooth zero crossing performance.

## Benefits of using StealthChop2:

- -Significantly improved microstepping with low-cost motors
- -Motor runs smooth and quiet
- -Absolutely no standby noise
- -Reduced mechanical resonance yields improved torque

## 1.5 Precise clock generator and CLK input

The TMC22xx provides a factory trimmed internal clock generator for precise chopper frequency and performance. However, an optional external clock input is available for cases, where quartz precision is  desired,  or  where  a  lower  or  higher  frequency  is  required.  For  safety,  the  clock  input  features timeout detection, and switches back to internal clock upon fail of the external source.

## 1.6 Automatic Standstill Power Down

An  automatic  current reduction  drastically  reduces  application  power  dissipation  and  cooling requirements. Per default, the stand still current reduction is enabled by pulling PDN\_UART input to GND. It reduces standstill power dissipation to less than 33% by going to slightly more than half of the run current.

Modify  stand  still  current,  delay  time  and  decay  via  UART,  or  pre-programmed  via  internal  OTP. Automatic freewheeling and passive motor braking are provided as an option for stand still. Passive braking reduces motor  standstill power  consumption  to  zero, while still providing effective dampening and braking!

Figure 1.3 Automatic Motor Current Power Down

<!-- image -->

## 1.7 Index Output

The  index  output  gives  one  pulse  per  electrical  rotation,  i.e.  one  pulse  per  each  four  fullsteps.  It shows the internal sequencer microstep 0 position ( MSTEP near 0). This is the power on position. In combination with a mechanical home switch, a more precise homing is enabled.

## 2 Pin Assignments

The TMC22xx family comes in a number of package variants in order to fit different footprints. Please check for availability.

## 2.1 Package Outline TMC2208

Figure 2.1 TMC2208 Pinning Top View -type: QFN28, 5x5mm², 0.5mm pitch

<!-- image -->

## 2.2 Signal Descriptions TMC2208

| Pin      | Number    | Type    | Function                                                                                                                                                             |
|----------|-----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OB2      | 1         |         | Motor coil B output 2                                                                                                                                                |
| ENN      | 2         | DI      | Enable not input. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a high level.                                    |
| GND      | 3, 18     |         | GND. Connect to GND plane near pin.                                                                                                                                  |
| CPO      | 4         |         | Charge pump capacitor output.                                                                                                                                        |
| CPI      | 5         |         | Charge pump capacitor input. Tie to CPO using 22nF 50V capacitor.                                                                                                    |
| VCP      | 6         |         | Charge pump voltage. Tie to VS using 100nF capacitor.                                                                                                                |
| N.C.     | 7, 20, 25 |         | Unused pin, leave open or connect to GND for compatibility to future versions.                                                                                       |
| 5VOUT    | 8         |         | Output of internal 5V regulator. Attach 2.2µF to 4.7µF ceramic capacitor to GND near to pin for best performance. Provide the shortest possible loop to the GND pad. |
| MS1      | 9         | DI (pd) | Microstep resolution configuration (internal pull-down resistors) MS2, MS1: 00: 1/8, 01: 1/2, 10: 1/4 11: 1/16                                                       |
| MS2      | 10        | DI (pd) | Microstep resolution configuration (internal pull-down resistors) MS2, MS1: 00: 1/8, 01: 1/2, 10: 1/4 11: 1/16                                                       |
| DIAG     | 11        | DO      | Diagnostic output. Hi level upon driver error. Reset by ENN=high.                                                                                                    |
| INDEX    | 12        | DO      | Configurable index output. Provides index pulse.                                                                                                                     |
| CLK      | 13        | DI      | CLK input. Tie to GND using short wire for internal clock or supply external clock.                                                                                  |
| PDN_UART | 14        | DIO     | Power down not control input (low = automatic standstill current reduction). Optional UART Input/Output. Power down function can be disabled in UART mode.           |
| VCC_IO   | 15        |         | 3.3V to 5V IO supply voltage for all digital pins.                                                                                                                   |

| Pin             | Number   | Type    | Function                                                                                                                                                                 |
|-----------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| STEP            | 16       | DI      | STEP input                                                                                                                                                               |
| VREF            | 17       | AI      | Analog reference voltage for current scaling or reference current for use of internal sense resistors (optional mode)                                                    |
| DIR             | 19       | DI (pd) | DIR input (internal pull-down resistor)                                                                                                                                  |
| VS              | 22, 28   |         | Motor supply voltage. Provide filtering capacity near pin with shortest possible loop to GND pad.                                                                        |
| OA2             | 21       |         | Motor coil A output 2                                                                                                                                                    |
| BRA             | 23       |         | Sense resistor connection for coil A. Place sense resistor to GND near pin. Tie to GND when using internal sense resistor.                                               |
| OA1             | 24       |         | Motor coil A output 1                                                                                                                                                    |
| OB1             | 26       |         | Motor coil B output 1                                                                                                                                                    |
| BRB             | 27       |         | Sense resistor connection for coil B. Place sense resistor to GND near pin. Tie to GND when using internal sense resistor.                                               |
| Exposed die pad | -        |         | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. Serves as GND pin for power drivers and analogue circuitry. |

## 2.3 Package Outline TMC2202

Figure 2.2 TMC2202 Pinning Top View -type: QFN32, 5x5mm², 0.5mm pitch

<!-- image -->

## 2.4 Signal Descriptions TMC2202

| Pin   | Number                       | Type   | Function                                                                                                                          |
|-------|------------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| OB2   | 1                            |        | Motor coil B output 2                                                                                                             |
| N.C.  | 2, 4, 21, 23, 26, 28, 29, 31 |        | Unused pin, leave open to provide for higher creeping voltage distances.                                                          |
| VS    | 3, 22                        |        | Motor supply voltage. Provide filtering capacity near pin with shortest possible loop to GND pad.                                 |
| ENN   | 5                            | DI     | Enable not input. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a high level. |

| Pin             | Number   | Type    | Function                                                                                                                                                                 |
|-----------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GND             | 6, 19    |         | GND. Connect to GND plane near pin.                                                                                                                                      |
| CPO             | 7        |         | Charge pump capacitor output.                                                                                                                                            |
| CPI             | 8        |         | Charge pump capacitor input. Tie to CPO using 22nF 50V capacitor.                                                                                                        |
| VCP             | 9        |         | Charge pump voltage. Tie to VS using 100nF capacitor.                                                                                                                    |
| 5VOUT           | 10       |         | Output of internal 5V regulator. Attach 2.2µF to 4.7µF ceramic capacitor to GND near to pin for best performance. Provide the shortest possible loop to the GND pad.     |
| MS1             | 11       | DI (pd) | Microstep resolution configuration (internal pull-down resistors)                                                                                                        |
| MS2             | 12       | DI (pd) | MS2, MS1: 00: 1/8, 01: 1/2, 10: 1/4 11: 1/16                                                                                                                             |
| DIAG            | 13       | DO      | Diagnostic output. Hi level upon driver error. Reset by ENN=high.                                                                                                        |
| CLK             | 14       | DI      | CLK input. Tie to GND using short wire for internal clock or supply external clock.                                                                                      |
| PDN_UART        | 15       | DIO     | Power down not control input (low = automatic standstill current reduction). Optional UART Input/Output. Power down function can be disabled in UART mode.               |
| VCC_IO          | 16       |         | 3.3V to 5V IO supply voltage for all digital pins.                                                                                                                       |
| STEP            | 17       | DI      | STEP input                                                                                                                                                               |
| VREF            | 18       | AI      | Analog reference voltage for current scaling or reference current for use of internal sense resistors (optional mode)                                                    |
| DIR             | 20       | DI (pd) | DIR input (internal pull-down resistor)                                                                                                                                  |
| OA2             | 24       |         | Motor coil A output 2                                                                                                                                                    |
| BRA             | 25       |         | Sense resistor connection for coil A. Place sense resistor to GND near pin. Tie to GND when using internal sense resistor.                                               |
| OA1             | 27       |         | Motor coil A output 1                                                                                                                                                    |
| OB1             | 30       |         | Motor coil B output 1                                                                                                                                                    |
| BRB             | 32       |         | Sense resistor connection for coil B. Place sense resistor to GND near pin. Tie to GND when using internal sense resistor.                                               |
| Exposed die pad | -        |         | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. Serves as GND pin for power drivers and analogue circuitry. |

## 2.5 Package Outline TMC2224

Figure 2.3 TMC2224 Pinning Top View -type: QFN28, 5x5mm², 0.5mm pitch

<!-- image -->

## 2.6 Signal Descriptions TMC2224

| Pin             | Number   | Type     | Function                                                                                                                                                                                 |
|-----------------|----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MS1             | 28       | DI (pd)  | Microstep resolution configuration (internal pull-down resistors)                                                                                                                        |
| MS2             | 1        | DI (pd)  | MS2, MS1: 00: 1/4, 01: 1/8, 10: 1/16, 11: 1/32                                                                                                                                           |
| INDEX           | 2        | DO       | Configurable index output. Provides index pulse.                                                                                                                                         |
| GND             | 3, 17    |          | GND. Connect to GND plane near pin.                                                                                                                                                      |
| CPO             | 4        |          | Charge pump capacitor output.                                                                                                                                                            |
| CPI             | 5        |          | Charge pump capacitor input. Tie to CPO using 22nF 50V capacitor.                                                                                                                        |
| VCP             | 6        |          | Charge pump voltage. Tie to VS using 100nF capacitor.                                                                                                                                    |
| VS              | 7, 14    |          | Motor supply voltage. Provide filtering capacity near pin with shortest possible loop to GND pad.                                                                                        |
| OA2             | 8        |          | Motor coil A output 2                                                                                                                                                                    |
| BRA             | 9        |          | Sense resistor connection for coil A. Place sense resistor to GND near pin. Tie to GND when using internal sense resistor.                                                               |
| OA1             | 10       |          | Motor coil A output 1                                                                                                                                                                    |
| OB1             | 11       |          | Motor coil B output 1                                                                                                                                                                    |
| BRB             | 12       |          | Sense resistor connection for coil B. Place sense resistor to GND near pin. Tie to GND when using internal sense resistor.                                                               |
| OB2             | 13       |          | Motor coil B output 2                                                                                                                                                                    |
| VREF            | 15       | AI       | Analog reference voltage for current scaling or reference current for use of internal sense resistors (optional mode)                                                                    |
| TEST            | 16       |          | Connect to GND. May alternatively be left open or connected to VREF.                                                                                                                     |
| 5VOUT           | 18       |          | Output of internal 5V regulator. Attach 2.2µF to 4.7µF ceramic capacitor to GND near to pin for best performance. Provide the shortest possible loop to the GND pad.                     |
| VCC_IO          | 19       |          | 3.3V to 5V IO supply voltage for all digital pins (does not power logic block).                                                                                                          |
| PDN_UART        | 20       | DIO (pd) | Power down not control input (low = automatic standstill current reduction). (internal pull-down resistor) Optional UART Input/Output. Power down function can be disabled in UART mode. |
| DIAG            | 21       | DO       | Diagnostic output. Hi level upon driver error. Reset by ENN=high.                                                                                                                        |
| SPREAD          | 22       | DI (pd)  | Chopper mode selection: Low=StealthChop, High=SpreadCycle                                                                                                                                |
| DIR             | 23       | DI (pd)  | DIR input (internal pull-down resistor)                                                                                                                                                  |
| ENN             | 24       | DI (pd)  | Enable not input. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a high level. (internal pull-down resistor)                          |
| STEP            | 25       | DI (pd)  | STEP input (internal pull-down resistor)                                                                                                                                                 |
| N.C.            | 26       |          | Unused pin, leave open or connect to GND for compatibility to future versions.                                                                                                           |
| CLK             | 27       | DI       | CLK input. Tie to GND using short wire for internal clock or supply external clock.                                                                                                      |
| Exposed die pad | -        |          | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. Serves as GND pin for power drivers and analogue circuitry.                 |

## 3 Sample Circuits

The sample circuits show the connection of external components in different operation and supply modes. The connection of the bus interface and further digital signals is left out for clarity.

## 3.1 Standard Application Circuit

Figure 3.1 Standard application circuit

<!-- image -->

The standard application circuit uses a minimum set of additional components. Two sense resistors set the motor coil current. See chapter 8 to choose the right sense resistors. Use low ESR capacitors for filtering the power supply. The capacitors need to cope with the current ripple cause by chopper operation.  A  minimum  capacity  of  100µF  near  the  driver  is  recommended  for  best  performance. Current  ripple  in  the  supply  capacitors  also  depends  on  the  power  supply  internal  resistance  and cable length. VCC\_IO can be supplied from 5VOUT, or from an external source, e.g. a 3.3V regulator.

## Basic layout hints

Place sense resistors and all filter capacitors as close as possible to the related IC pins. Use a solid common GND for all GND connections, also for sense resistor GND. Connect 5VOUT filtering capacitor directly to 5VOUT and the die pad. See layout hints for more details. Low ESR electrolytic capacitors are recommended for VS filtering.

## Attention

Ensure sufficient capacity on VS to limit supply ripple, and to keep power slopes below 1V/µs. Failure to  do  so  could  result  in  destructive  currents  via  the  charge  pump  capacitor.  Provide  overvoltage protection in case the motor could be manually turned at a high velocity, or in case the driver could become cut off from the main supply capacitors. Significant energy can be fed back from motor coils to the power supply in the event of quick deceleration, or when the driver becomes disabled.

## 3.2 Internal RDSon Sensing

For  cost  critical  or  space  limited  applications,  sense  resistors  can  be  omitted.  For  internal  current sensing, a reference current set by a tiny external resistor programs the output current. For calculation of the reference resistor, refer chapter 9.1.

## Attention

Be sure to switch the IC to RDSon mode, before enabling drivers: Set otp\_internalRsense = 1.

Figure 3.2 Application circuit using RDSon based sensing

<!-- image -->

## 3.3 5V Only Supply

Figure 3.3 5V only operation

<!-- image -->

While  the  standard  application  circuit  is  limited  to  roughly  5.2 V  lower  supply  voltage,  a  5 V  only application lets the IC run from a 5 V +/-5% supply. In this application, linear regulator drop must be minimized.  Therefore,  the  internal  5V  regulator  is  filtered  with  a  higher  capacitance.  An  optional resistor bridges the internal 5V regulator by connecting 5VOUT to the external power supply. This RC filter keeps chopper ripple away from 5VOUT. With this resistor, the external supply is the reference for the absolute motor current and must not exceed 5.5V.

## 3.4 Configuration Pins

The  TMC22xx  family  members  provide  three  or  four  configuration  pins  depending  on  the  package option. These pins allow quick configuration for standalone operation. Several additional options can be set by OTP programming. In UART mode, the configuration pins can be disabled in order to set a different configuration via registers.

| PDN_UART: CONFIGURATION OF STANDSTILL POWER DOWN   | PDN_UART: CONFIGURATION OF STANDSTILL POWER DOWN                                                                                                    |
|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| PDN_UART                                           | Current Setting                                                                                                                                     |
| GND                                                | Enable automatic power down in standstill periods                                                                                                   |
| VCC_IO                                             | Disable                                                                                                                                             |
| UART interface                                     | When using the UART interface, the configuration pin should be disabled via GCONF.pdn_disable = 1. Program IHOLD as desired for standstill periods. |

## OPTIONS FOR TMC220X DEVICES, ONLY:

| MS1/MS2: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT (TMC220X)   | MS1/MS2: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT (TMC220X)   | MS1/MS2: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT (TMC220X)   |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| MS2                                                                       | MS1                                                                       | Microstep Setting                                                         |
| GND                                                                       | GND                                                                       | 8 microsteps                                                              |
| GND                                                                       | VCC_IO                                                                    | 2 microsteps (half step)                                                  |
| VCC_IO                                                                    | GND                                                                       | 4 microsteps (quarter step)                                               |
| VCC_IO                                                                    | VCC_IO                                                                    | 16 microsteps                                                             |

## OPTIONS FOR TMC222X DEVICES, ONLY:

| SPREAD (ONLY WITH TMC222X): SELECTION OF CHOPPER MODE   | SPREAD (ONLY WITH TMC222X): SELECTION OF CHOPPER MODE                                                                      |
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| SPREAD                                                  | Chopper Setting                                                                                                            |
| GND or Pin open / not available                         | StealthChop is selected. Automatic switching to SpreadCycle in dependence of the step frequency can be programmed via OTP. |
| VCC_IO                                                  | SpreadCycle operation.                                                                                                     |

| MS1/MS2: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT (TMC222X)   | MS1/MS2: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT (TMC222X)   | MS1/MS2: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT (TMC222X)   |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| MS2                                                                       | MS1                                                                       | Microstep Setting                                                         |
| GND                                                                       | GND                                                                       | 4 microsteps (quarter step)                                               |
| GND                                                                       | VCC_IO                                                                    | 8 microsteps                                                              |
| VCC_IO                                                                    | GND                                                                       | 16 microsteps                                                             |
| VCC_IO                                                                    | VCC_IO                                                                    | 32 microsteps                                                             |

## 3.5 High Motor Current

When operating  at  a  high  motor  current,  the  driver  power  dissipation  due  to  MOSFET  switch  onresistance significantly heats up the driver. This power dissipation will significantly heat up the PCB cooling infrastructure, if operated at an increased duty cycle. This in turn leads to a further increase of driver  temperature.  An  increase  of  temperature  by  about  100°C  increases  MOSFET  resistance  by roughly 50%. This is a typical behavior of MOSFET switches. Therefore, under high duty cycle, high load  conditions,  thermal  characteristics  have  to  be  carefully  taken  into  account,  especially  when increased  environment  temperatures  are  to  be  supported.  Refer  the  thermal  characteristics  and  the layout hints for more information. As  a thumb rule, thermal properties  of the PCB design become critical for the tiny QFN 5mm x 5mm package at or above 1A RMS motor current for increased periods of time. Keep in mind that resistive power dissipation raises with the square of the motor current. On the other hand, this means that a small reduction of motor current significantly saves heat dissipation and energy.

Pay special attention to good thermal properties of your PCB layout, when going for 1A RMS current or more.

An effect which might be perceived at medium motor velocities and motor sine wave peak currents above roughly 1.4A peak is a slight sine distortion of the current wave when using SpreadCycle. It results  from  an  increasing  negative  impact  of  parasitic  internal  diode  conduction,  which  in  turn negatively influences the duration of the fast decay cycle of the SpreadCycle chopper. This is, because the  current  measurement  does  not  see  the  full  coil  current  during  this  phase  of  the  sine  wave, because an increasing part of the current flows directly from the power MOSFETs' drain to GND and does not flow through the sense resistor. This effect with most motors does not negatively influence the smoothness of operation, as it does not impact the critical current zero transition. The effect does not occur with StealthChop.

## 3.6 Driver Protection and EME Circuitry

Some applications have to cope with ESD events caused by motor operation or external influence. Despite ESD circuitry within the driver chips, ESD events occurring during operation can cause a reset or even a destruction of the motor driver, depending on their energy. Especially plastic housings and belt drive systems tend to cause ESD events of several kV. It is best practice to avoid ESD events by attaching all conductive parts, especially the motors themselves to PCB ground, or to apply electrically conductive plastic parts. In addition, the driver can be protected up to a certain degree against ESD events or live plugging / pulling the motor, which also causes high voltages and high currents into the motor connector terminals. A simple scheme uses capacitors at the driver outputs to reduce the dV/dt caused by ESD events. Larger capacitors will bring more benefit concerning ESD suppression, but cause additional current flow in each chopper cycle, and thus increase driver power dissipation, especially  at  high  supply  voltages.  The  values  shown  are  example  values -they  may  be  varied between 100pF and 1nF. The capacitors also dampen high frequency noise injected from digital parts of the application PCB circuitry and thus reduce electromagnetic emission. A more elaborate scheme uses LC filters to de-couple the driver outputs from the motor connector. Varistors in between of the coil terminals eliminate coil overvoltage caused by live plugging. Optionally protect all outputs by a varistor to GND against ESD voltage.

Figure 3.4 Simple ESD enhancement and more elaborate motor output protection

<!-- image -->

## 4 UART Single Wire Interface

<!-- image -->

The UART single wire interface allows control of the TMC22xx with any microcontroller UART. It shares transmit and receive line like an RS485 based interface. Data transmission is secured using a cyclic redundancy check, so that increased interface distances (e.g. over cables between two PCBs) can be bridged  without  danger  of  wrong  or  missed  commands  even  in  the  event  of  electro-magnetic disturbance. The automatic baud rate detection makes this interface easy to use.

## 4.1 Datagram Structure

## 4.1.1 Write Access

| UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        |
|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 |
|                                                             |                                                             |                                                             |                                                             |                                                             |                                                             |                                                             |                                                             | 8 bit slave address                                         | 8 bit slave address                                         | 8 bit slave address                                         | RW + 7 bit register addr.                                   | RW + 7 bit register addr.                                   | RW + 7 bit register addr.                                   | 32 bit data                                                 | 32 bit data                                                 | 32 bit data                                                 | CRC                                                         | CRC                                                         | CRC                                                         |
| 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 8…15                                                        | 8…15                                                        | 8…15                                                        | 16…23                                                       | 16…23                                                       | 16…23                                                       | 24…55                                                       | 24…55                                                       | 24…55                                                       | 56…63                                                       | 56…63                                                       | 56…63                                                       |
| 1                                                           | 0                                                           | 1                                                           | 0                                                           | Reserved (don't cares but included in CRC)                  | Reserved (don't cares but included in CRC)                  | Reserved (don't cares but included in CRC)                  | Reserved (don't cares but included in CRC)                  | SLAVEADDR =0                                                | SLAVEADDR =0                                                | SLAVEADDR =0                                                | register address                                            | register address                                            | 1                                                           | data bytes 3, 2, 1, 0 (high to low byte)                    | data bytes 3, 2, 1, 0 (high to low byte)                    | data bytes 3, 2, 1, 0 (high to low byte)                    | CRC                                                         | CRC                                                         | CRC                                                         |
| 0                                                           | 1                                                           | 2                                                           | 3                                                           | 4                                                           | 5                                                           | 6                                                           | 7                                                           | 8                                                           | …                                                           | 15                                                          | 16                                                          | …                                                           | 23                                                          | 24                                                          | …                                                           | 55                                                          | 56                                                          | …                                                           | 63                                                          |

A sync nibble precedes each transmission to and from the TMC22xx and is embedded into the first transmitted  byte,  followed  by  an  addressing  byte  (0  for  TMC22xx).  Each  transmission  allows  a synchronization of the internal baud rate divider to the master clock. The actual baud rate is adapted and  variations  of  the  internal  clock  frequency  are  compensated.  Thus,  the  baud  rate  can  be  freely chosen  within  the  valid  range.  Each  transmitted  byte  starts  with  a  start  bit  (logic  0,  low  level  on SWIOP)  and  ends  with  a  stop  bit  (logic  1,  high  level  on  SWIOP).  The  bit  time  is  calculated  by measuring the time from the beginning of start bit (1 to 0 transition) to the end of the sync frame (1 to  0  transition  from  bit  2  to  bit  3).  All  data  is  transmitted  bytewise.  The  32  bit  data  words  are transmitted with the highest byte first.

A minimum baud rate of 9000 baud is permissible, assuming 20 MHz clock (worst case for low baud rate). Maximum baud rate is fCLK/16 due to the required stability of the baud clock.

The slave address SLAVEADDR is always 0 for the TMC22xx.

The communication becomes reset if a pause time of longer than 63 bit times between the start bits of two successive bytes occurs. This timing is based on the last correctly received datagram. In this case, the transmission needs to be restarted after a failure recovery time of minimum 12 bit times of bus idle time. This scheme allows the master to reset communication in case of transmission errors. Any pulse on an idle data line below 16 clock cycles will be treated as a glitch and leads to a timeout of 12 bit times, for which the data line must be idle. Other errors like wrong CRC are also treated the same  way.  This  allows  a  safe  re-synchronization  of  the  transmission  after  any  error  conditions. Remark, that due to this mechanism an abrupt reduction of the baud rate to less than 15 percent of the previous value is not possible.

Each  accepted  write  datagram  becomes  acknowledged  by  the  receiver  by  incrementing  an  internal cyclic  datagram  counter  (8  bit).  Reading  out  the  datagram  counter  allows  the  master  to  check  the success  of  an  initialization  sequence  or  single  write  accesses.  Read  accesses  do  not  modify  the counter.

The UART line must be logic high during idle state. Therefore, the power down function cannot be assigned  by  the  pin  PDN\_UART  in  between  of  transmissions.  In  an  application  using  the  UART interface, set the desired power down function by register access and set pdn\_disable in GCONF to disable the pin function.

## 4.1.2 Read Access

| UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first |
| sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | slave address                                        | slave address                                        | RW + 7 bit register address                          | RW + 7 bit register address                          | RW + 7 bit register address                          | CRC                                                  | CRC                                                  |                                                      |
| 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 8…15                                                 | 8…15                                                 | 16…23                                                | 16…23                                                | 16…23                                                | 24…31                                                | 24…31                                                |                                                      |
| 1                                                    | 0                                                    | 1                                                    | 0                                                    | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | SLAVEADDR =0                                         | SLAVEADDR =0                                         | register address                                     | register address                                     | 0                                                    | CRC                                                  | CRC                                                  |                                                      |
| 0                                                    | 1                                                    | 2                                                    | 3                                                    | 4                                                    | 5                                                    | 6                                                    | 7                                                    | 8                                                    | 15                                                   | 16                                                   | …                                                    | 23 24                                                | …                                                    | 31                                                   |                                                      |

The read access request datagram structure is identical to the write access datagram structure, but uses a lower number of user bits. Its function is the addressing of the slave and the transmission of the desired register address for the read access. The TMC22xx responds with the same baud rate as the master uses for the read request.

In  order  to  ensure  a  clean  bus  transition  from  the  master  to  the  slave,  the  TMC22xx  does  not immediately send the reply to a read access, but it uses a programmable delay time after which the first  reply  byte  becomes  sent  following  a  read  request.  This  delay  time  can  be  set  in  multiples  of eight  bit  times  using SENDDELAY time  setting  (default=8  bit  times)  according  to  the  needs  of  the master.

| UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 |
|                                                                  |                                                                  |                                                                  |                                                                  |                                                                  |                                                                  |                                                                  |                                                                  | 8 bit master                                                     | 8 bit master                                                     | 8 bit master                                                     | RW + 7 bit register addr.                                        | RW + 7 bit register addr.                                        | RW + 7 bit register addr.                                        | 32 bit data                                                      | 32 bit data                                                      | 32 bit data                                                      | CRC                                                              | CRC                                                              | CRC                                                              |
| 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 8…15                                                             | 8…15                                                             | 8…15                                                             | 16…23                                                            | 16…23                                                            | 16…23                                                            | 24…55                                                            | 24…55                                                            | 24…55                                                            | 56…63                                                            | 56…63                                                            | 56…63                                                            |
| 1                                                                | 0                                                                | 1                                                                | 0                                                                | reserved (0)                                                     | reserved (0)                                                     | reserved (0)                                                     | reserved (0)                                                     | 0xFF                                                             | 0xFF                                                             | 0xFF                                                             | register address                                                 | register address                                                 | 0                                                                | data bytes 3, 2, 1, 0 (high to low byte)                         | data bytes 3, 2, 1, 0 (high to low byte)                         | data bytes 3, 2, 1, 0 (high to low byte)                         | CRC                                                              | CRC                                                              | CRC                                                              |
| 0                                                                | 1                                                                | 2                                                                | 3                                                                | 4                                                                | 5                                                                | 6                                                                | 7                                                                |                                                                  | …                                                                | 15                                                               | 16                                                               | …                                                                | 23                                                               | 24                                                               | …                                                                | 55                                                               | 56                                                               | …                                                                | 63                                                               |

The  read  response  is  sent  to  the  master  using  address  code  %11111111.  The  transmitter  becomes switched inactive four bit times after the last bit is sent.

Address %11111111 is reserved for read access replies going to the master.

## 4.2 CRC Calculation

An 8 bit CRC polynomial is used for checking both read and write access. It allows detection of up to eight single bit errors. The CRC8-ATM polynomial with an initial value of zero is applied LSB to MSB, including  the  sync-  and  addressing  byte.  The  sync  nibble  is  assumed  to  always  be  correct.  The TMC22xx  responds  only  to  correctly  transmitted  datagrams  containing  its  own  slave  address.  It increases its datagram counter for each correctly received write access datagram.

<!-- formula-not-decoded -->

## SERIAL CALCULATION EXAMPLE

CRC = (CRC &lt;&lt; 1) OR (CRC.7 XOR CRC.1 XOR CRC.0 XOR [new incoming bit])

```
C-CODE EXAMPLE FOR CRC CALCULATION void swuart_calcCRC(UCHAR* datagram, UCHAR datagramLength) { int i,j; UCHAR* crc = datagram + (datagramLength-1); // CRC located in last byte of message UCHAR currentByte; *crc = 0; for (i=0; i<(datagramLength-1); i++) {      // Execute for all bytes of a message currentByte = datagram[i];                // Retrieve a byte to be sent from Array for (j=0; j<8; j++) { if ((*crc >> 7) ^ (currentByte&0x01))   // update CRC based result of XOR operation { *crc = (*crc << 1) ^ 0x07; } else { *crc = (*crc << 1); } currentByte = currentByte >> 1; } // for CRC bit } // for message byte }
```

## 4.3 UART Signals

The UART interface on the TMC22xx uses a single bi-direction pin:

```
UART INTERFACE SIGNAL PDN_UART Non-inverted data input and output. I/O with Schmitt Trigger and VCC_IO level.
```

The IC checks PDN\_UART for correctly received datagrams with its own address continuously. It adapts to the baud rate based on the sync nibble, as described before. In case of a read access, it switches on its output drivers and sends its response using the same baud rate. The output becomes switched off four bit times after transfer of the last stop bit.

Figure 4.1 Attaching the TMC22xx to a microcontroller UART

<!-- image -->

## 4.4 Addressing Multiple Slaves

## WRITE ONLY ACCESS

If read access is not used, and all slaves are to be programmed with the same initialization values, no addressing is required. All slaves can be programmed in parallel like a single device (Figure 4.1.).

## ADDRESSING MULTIPLE SLAVES

As  the  TMC22xx  uses  a  fixed  UART  address,  in  principle  only  one  IC  can  be  accessed  per  UART interface channel. Adding analog switches allows separated access to individual ICs. This scheme is similar to an SPI bus with individual slave select lines (Figure 4.2).

Figure 4.2 Addressing multiple TMC22xx via single wire interface using analog switches

<!-- image -->

## PROCEED AS FOLLOWS TO CONTROL MULTIPLE SLAVES:

- -Set  the  UART  to  8  bits,  no  parity.  Select  a  baud  rate  safely  within  the  valid  range.  At 250kBaud, a write access transmission requires 320µs (=8 Bytes * (8+2) bits * 4µs).
- -Before starting an access, activate the select pin going to the analog switch by setting it high. All other slaves select lines shall be off, unless a broadcast is desired.
- -When using the optional buffer, set TMC22xx transmission send delay to an appropriate value allowing the µC to switch off the buffer before receiving reply data.
- -To start a transmission, activate the TXD line buffer by setting the control pin low.
- -When sending a read access request, switch off the buffer after transmission of the last stop bit is finished.
- -Take into account, that all transmitted data also is received by the RXD input.

## 5 Register Map

<!-- image -->

This chapter gives an overview of the complete register set. Some of the registers bundling a number of single bits are detailed in extra tables. The functional practical application of the settings is detailed in dedicated chapters.

## Note

- -Reset default : All registers become reset to 0 upon power up, unless otherwise noted.
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

| REGISTER                                               | DESCRIPTION                                                                                                                                                                                                     |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General Configuration Registers                        | These registers contain - global configuration - global status flags - OTP read access and programming - interface configuration                                                                                |
| Velocity Dependent Driver Feature Control Register Set | This register set offers registers for - driver current control, stand still reduction - setting thresholds for different chopper modes - internal pulse generator control                                      |
| Chopper Register Set                                   | This register set offers registers for - optimization of StealthChop2 and SpreadCycle and read out of internal values - passive braking and freewheeling options - driver diagnostics - driver enable / disable |

## 5.1 General Registers

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                     |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                                                                           |
|                                                 |                                                 |                                                 |                                                 | Bit GCONF - Global configuration flags 0 I_scale_analog ( Reset default=1 )                                                                                                                                                                                       |
|                                                 |                                                 |                                                 |                                                 | 1: Use voltage supplied to VREF as current reference 1 internal_Rsense ( Reset default: OTP ) 0: Operation with external sense resistors                                                                                                                          |
|                                                 |                                                 |                                                 |                                                 | pin internally is driven to GND in this mode. 2 en_SpreadCycle ( Reset default: OTP ) 0: StealthChop PWM mode enabled (depending on velocity thresholds). Initially switch from off to on state while in stand still, only.                                       |
|                                                 |                                                 |                                                 |                                                 | this flag to switch between both chopper modes. 3 shaft 1: Inverse motor direction                                                                                                                                                                                |
|                                                 |                                                 |                                                 |                                                 | 4 index_otpw 0: INDEX shows the first microstep position of sequencer 1: INDEX pin outputs overtemperature prewarning                                                                                                                                             |
| RW                                              | 0x00                                            | 10                                              | GCONF                                           | flag ( otpw ) instead 5 index_step 0: INDEX output as selected by index_otpw 1: INDEX output shows step pulses from internal                                                                                                                                      |
|                                                 |                                                 |                                                 |                                                 | 6 pdn_disable                                                                                                                                                                                                                                                     |
|                                                 |                                                 |                                                 |                                                 | when using the UART interface! 7 mstep_reg_select                                                                                                                                                                                                                 |
|                                                 |                                                 |                                                 |                                                 | 0: Microstep resolution selected by pins MS1, MS2 1: Microstep resolution selected by MSTEP register 8 multistep_filt ( Reset default= 1) 0: No filtering of STEP pulses 1: Software pulse generator optimization enabled                                         |
|                                                 |                                                 |                                                 |                                                 | when fullstep frequency > 750Hz (roughly). TSTEP shows filtered step time values when active. 9 test_mode 0: Normal operation 1: Enable analog test output on pin ENN (pull-down resistor off), ENN treated as enabled. IHOLD [1..0] selects the function of DCO: |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                         | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| R+ WC                                           | 0x01                                            |                                                 |                                                 | Bit 0                                           | GSTAT - Global status flags (Re- Write with '1' bit to clear respective flags) reset                                                                                                                                                                                                                                                                                                                                                                                                |
| R                                               | 0x02                                            | 3                                               | GSTAT                                           | 1 2                                             | 1: Indicates that the IC has been reset since the last read access to GSTAT . All registers have been cleared to reset values. drv_err 1: Indicates, that the driver has been shut down due to overtemperature or short circuit detection since the last read access. Read DRV_STATUS for details. The flag can only be cleared when all error conditions are cleared. uv_cp 1: Indicates an undervoltage on the charge pump. The driver is disabled in this case. This flag is not |
|                                                 |                                                 | 8                                               | IFCNT                                           |                                                 | latched and thus does not need to be cleared. Interface transmission counter. This register becomes incremented with each successful UART interface write access. Read out to check the serial transmission for lost data. Read accesses do not change the content. The counter wraps around from 255 to 0.                                                                                                                                                                         |
| W                                               | 0x03                                            | 4                                               | SLAVECONF                                       | Bit 11..8                                       | SLAVECONF SENDDELAY for read access (time until reply is sent): 0, 1: 8 bit times 2, 3: 3*8 bit times 4, 5: 5*8 bit times 6, 7: 7*8 bit times 8, 9: 9*8 bit times 10, 11: 11*8 bit times 12, 13: 13*8 bit times 14, 15: 15*8 bit times                                                                                                                                                                                                                                              |
| W                                               | 0x04                                            | 16                                              | OTP_PROG                                        | Bit 2..0 5..4                                   | OTP_PROGRAM - OTP programming Write access programs OTP memory (one bit at a time), Read access refreshes read data from OTP after a write OTPBIT Selection of OTP bit to be programmed to the selected byte location (n=0..7: programs bit n to a logic 1) OTPBYTE                                                                                                                                                                                                                 |
| R                                               | 0x05                                            | 24                                              | OTP_READ                                        | Bit 7..0 15..8                                  | by reading OTP_READ ). OTP_READ (Access to OTP memory result and update) See separate table! OTP0 byte 0 read data                                                                                                                                                                                                                                                                                                                                                                  |
| R                                               |                                                 |                                                 |                                                 | 23..16 Bit                                      | OTP1 byte 1 read data OTP2 byte 2 read data                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                 | 0x06                                            | 10 + 8                                          | IOIN                                            | 0 1 2                                           | INPUT (Reads the state of all input pins available) ENN (TMC220x) PDN_UART (TMC222x) MS1 (TMC220x), SPREAD (TMC222x)                                                                                                                                                                                                                                                                                                                                                                |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                      |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                            |
|                                                 |                                                 |                                                 |                                                 | 4 DIAG (TMC220x), ENN (TMC222x)                                                                                                                    |
|                                                 |                                                 |                                                 |                                                 | 5 STEP (TMC222x)                                                                                                                                   |
|                                                 |                                                 |                                                 |                                                 | 6 PDN_UART (TMC220x), MS1 (TMC222x)                                                                                                                |
|                                                 |                                                 |                                                 |                                                 | 7 STEP (TMC220x), MS2 (TMC222x)                                                                                                                    |
|                                                 |                                                 |                                                 |                                                 | 8 SEL_A: Driver type                                                                                                                               |
|                                                 |                                                 |                                                 |                                                 | 0: TMC222x 9 DIR                                                                                                                                   |
|                                                 |                                                 |                                                 |                                                 | (TMC220x) 31.. 24 VERSION : 0x20=first version of the IC Identical numbers mean full digital compatibility.                                        |
| RW                                              | 0x07                                            | 5+2                                             | FACTORY_ CONF                                   | 4..0 FCLKTRIM ( Reset default: OTP ) 0…31 : Lowest to highest clock frequency. Check at charge pump output. The frequency span is not              |
| RW                                              | 0x07                                            | 5+2                                             | FACTORY_ CONF                                   | 12MHz clock frequency by OTP programming. 9..8 OTTRIM (Default: OTP) %00: OT=143°C, OTPW=120°C %01: OT=150°C, OTPW=120°C %10: OT=150°C, OTPW=143°C |

## 5.1.1 OTP\_READ -OTP configuration memory

The OTP memory holds power up defaults for certain registers. All OTP memory bits are cleared to 0 by default. Programming only can set bits, clearing bits is not possible. Factory tuning of the clock frequency affects otp0.0 to otp0.4 . The state of these bits therefore may differ between individual ICs.

| 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP                                                                                                                                                                                                                                                | 0X05: OTP_READ - OTP MEMORY MAP   |
|-----------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| Bit                               | Name Function                     | Comment                                                                                                                                                                                                                                                                        |                                   |
| 23                                | otp2.7 otp_en_SpreadCycle         | This flag determines if the driver defaults to SpreadCycle or to StealthChop.                                                                                                                                                                                                  |                                   |
| 23                                | otp2.7 otp_en_SpreadCycle         | 0 Default: StealthChop ( GCONF.en_SpreadCycle =0) OTP 1.0 to 1.7 and 2.0 used for StealthChop                                                                                                                                                                                  |                                   |
| 23                                | otp2.7 otp_en_SpreadCycle         | SpreadCycle settings: HEND =0; HSTART =5; TOFF =3 1 Default: SpreadCycle ( GCONF.en_SpreadCycle =1) OTP 1.0 to 1.7 and 2.0 used for SpreadCycle StealthChop settings: PWM_GRAD =0; TPWM_THRS =0; PWM_OFS =36; pwm_autograd =1                                                  |                                   |
| 22                                | otp2.6 OTP_IHOLD                  |                                                                                                                                                                                                                                                                                |                                   |
| 21                                | otp2.5                            | Reset default for standstill current IHOLD (used only if current reduction enabled, e.g. pin PDN_UART low). %00: IHOLD = 16 (53% of IRUN ) %01: IHOLD = 2 ( 9% of IRUN ) %10: IHOLD = 8 (28% of IRUN ) %11: IHOLD = 24 (78% of IRUN ) (Reset default for run current IRUN =31) |                                   |
| 20                                | otp2.4 OTP_IHOLDDELAY             | Reset default for IHOLDDELAY                                                                                                                                                                                                                                                   |                                   |
| 19                                | otp2.3                            | %00: IHOLDDELAY = 1 %01: IHOLDDELAY = 2 %10: IHOLDDELAY = 4 %11: IHOLDDELAY = 8                                                                                                                                                                                                |                                   |
| 18                                | otp2.2 otp_PWM_FREQ               | Reset default for PWM_FREQ :                                                                                                                                                                                                                                                   |                                   |
| 17                                | otp2.1 otp_PWM_REG                | Reset default for PWM_REG : 0: PWM_REG =%1000: max. 4 increments / cycle 1: PWM_REG =%0010: max. 1 increment / cycle                                                                                                                                                           |                                   |
| 16                                | otp2.0 otp_PWM_OFS                | Depending on otp_en_SpreadCycle 0 0: PWM_OFS =36 1: PWM_OFS =00 (no feed forward scaling);                                                                                                                                                                                     |                                   |
| 16                                | OTP_CHOPCONF8                     | pwm_autograd =0 1 Reset default for CHOPCONF .8 ( hend1 )                                                                                                                                                                                                                      |                                   |
| 15                                | otp1.7 OTP_TPWMTHRS               | Depending on otp_en_SpreadCycle                                                                                                                                                                                                                                                |                                   |
| 14                                | otp1.6                            | 0 Reset default for TPWM_THRS as defined by (0..7):                                                                                                                                                                                                                            |                                   |
| 13                                | otp1.5                            | 0 Reset default for TPWM_THRS as defined by (0..7):                                                                                                                                                                                                                            |                                   |
| 13                                | OTP_CHOPCONF7...5                 | 7: TPWM_THRS = 4000 1 Reset default for CHOPCONF .5 to CHOPCONF .7 ( hstrt1, hstrt2 and hend0 )                                                                                                                                                                                |                                   |
| 12                                | otp1.4 otp_pwm_autograd           | Depending on otp_en_SpreadCycle 0 0: pwm_autograd =1                                                                                                                                                                                                                           |                                   |

| 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP                                                                                                                                                                    | 0X05: OTP_READ - OTP MEMORY MAP                                                                                                                                                                    |
|-----------------------------------|-----------------------------------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                               | Name                              | Function                          | Comment                                                                                                                                                                                            | Comment                                                                                                                                                                                            |
|                                   |                                   | OTP_CHOPCONF4                     | 1                                                                                                                                                                                                  | Reset default for CHOPCONF.4 ( hstrt0 ); ( pwm_autograd =1)                                                                                                                                        |
| 11                                | otp1.3                            | OTP_PWM_GRAD                      |                                                                                                                                                                                                    |                                                                                                                                                                                                    |
| 10                                | otp1.2                            | OTP_PWM_GRAD                      | Depending on otp_en_SpreadCycle 0 Reset default for PWM_GRAD as defined 0: PWM_GRAD = 14 1: PWM_GRAD = 16 2: PWM_GRAD = 18 3: PWM_GRAD = 21 4: PWM_GRAD = 24                                       | by (0..15):                                                                                                                                                                                        |
| 9                                 | otp1.1                            | OTP_PWM_GRAD                      | Depending on otp_en_SpreadCycle 0 Reset default for PWM_GRAD as defined 0: PWM_GRAD = 14 1: PWM_GRAD = 16 2: PWM_GRAD = 18 3: PWM_GRAD = 21 4: PWM_GRAD = 24                                       | by (0..15):                                                                                                                                                                                        |
| 8                                 | otp1.0                            | OTP_PWM_GRAD                      | Depending on otp_en_SpreadCycle 0 Reset default for PWM_GRAD as defined 0: PWM_GRAD = 14 1: PWM_GRAD = 16 2: PWM_GRAD = 18 3: PWM_GRAD = 21 4: PWM_GRAD = 24                                       | by (0..15):                                                                                                                                                                                        |
| 7                                 | otp0.7                            | otp_TBL                           | 1 Reset default for CHOPCONF .0 to CHOPCONF .3 ( TOFF ) Reset default for TBL :                                                                                                                    | 1 Reset default for CHOPCONF .0 to CHOPCONF .3 ( TOFF ) Reset default for TBL :                                                                                                                    |
| 6                                 | otp0.6                            | otp_internalRsense                | 1: TBL =%01 Reset default for GCONF.internal_Rsense 0: External sense resistors                                                                                                                    | 1: TBL =%01 Reset default for GCONF.internal_Rsense 0: External sense resistors                                                                                                                    |
| 5                                 | otp0.5                            | otp_OTTRIM                        | 1: Internal sense resistors Reset default for OTTRIM : 0: OTTRIM = %00 (143°C) 1: OTTRIM = %01 (150°C) (internal power stage temperature about 10°C above the sensor temperature limit)            | 1: Internal sense resistors Reset default for OTTRIM : 0: OTTRIM = %00 (143°C) 1: OTTRIM = %01 (150°C) (internal power stage temperature about 10°C above the sensor temperature limit)            |
| 4                                 | otp0.4                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and |
| 3                                 | otp0.3                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and |
| 2                                 | otp0.2                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and |
| 1                                 | otp0.1                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and |
| 0                                 | otp0.0                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 12MHz and |

## 5.2 Velocity Dependent Control

| VELOCITY DEPENDENT DRIVER FEATURE CONTROL REGISTER SET (0X 10…0 X1F)   | VELOCITY DEPENDENT DRIVER FEATURE CONTROL REGISTER SET (0X 10…0 X1F)   | VELOCITY DEPENDENT DRIVER FEATURE CONTROL REGISTER SET (0X 10…0 X1F)   | VELOCITY DEPENDENT DRIVER FEATURE CONTROL REGISTER SET (0X 10…0 X1F)   | VELOCITY DEPENDENT DRIVER FEATURE CONTROL REGISTER SET (0X 10…0 X1F)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | VELOCITY DEPENDENT DRIVER FEATURE CONTROL REGISTER SET (0X 10…0 X1F)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                                                    | Addr                                                                   | n                                                                      | Register                                                               | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description / bit names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| W                                                                      | 0x10                                                                   | 5 + 5 + 4                                                              | IHOLD_IRUN                                                             | Bit 4..0 12..8 19..16                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | IHOLD_IRUN - Driver current control IHOLD ( Reset default: OTP ) Standstill current (0=1/32 … 31=32/32) In combination with StealthChop mode, setting IHOLD =0 allows to choose freewheeling or coil short circuit (passive braking) for motor stand still. IRUN ( Reset default=31 ) Motor run current (0=1/32 … 31=32/32) Hint: Choose sense resistors in a way, that normal IRUN is 16 to 31 for best microstep performance. IHOLDDELAY ( Reset default: OTP )                                                                                                                               |
| W                                                                      | 0x11                                                                   | 8                                                                      | TPOWER DOWN                                                            | of 2^18 clocks TPOWERDOWN ( Reset default=20 ) Sets the delay time from stand still ( stst ) detection to motor current power down. Time range is about 0 to 5.6 seconds. 0…((2^8) -1) * 2^18 t CLK Attention: A minimum setting of 2 is required to allow                                                                                                                                                                                                                                                                                                                                      | of 2^18 clocks TPOWERDOWN ( Reset default=20 ) Sets the delay time from stand still ( stst ) detection to motor current power down. Time range is about 0 to 5.6 seconds. 0…((2^8) -1) * 2^18 t CLK Attention: A minimum setting of 2 is required to allow                                                                                                                                                                                                                                                                                                                                      |
| R                                                                      | 0x12                                                                   | 20                                                                     | TSTEP                                                                  | Actual measured time between two 1/256 microsteps derived from the step input frequency in units of 1/fCLK. Measured value is (2^20)-1 in case of overflow or stand still. TSTEP always relates to 1/256 step, independent of the actual MRES . The TSTEP related threshold uses a hysteresis of 1/16 of the compare value to compensate for jitter in the clock or the step frequency: ( Txxx *15/16)-1 is the lower compare value for each TSTEP based comparison. This means, that the lower switching velocity equals the calculated setting, but the upper switching velocity is higher as | Actual measured time between two 1/256 microsteps derived from the step input frequency in units of 1/fCLK. Measured value is (2^20)-1 in case of overflow or stand still. TSTEP always relates to 1/256 step, independent of the actual MRES . The TSTEP related threshold uses a hysteresis of 1/16 of the compare value to compensate for jitter in the clock or the step frequency: ( Txxx *15/16)-1 is the lower compare value for each TSTEP based comparison. This means, that the lower switching velocity equals the calculated setting, but the upper switching velocity is higher as |
| W                                                                      | 0x13                                                                   | 20                                                                     | TPWMTHRS                                                               | defined by the hysteresis setting. Sets the upper velocity for StealthChop voltage PWM mode. TSTEP ≥ TPWMTHRS - StealthChop PWM mode is enabled, if configured When the velocity exceeds the limit set by TPWMTHRS , the driver switches to SpreadCycle.                                                                                                                                                                                                                                                                                                                                        | defined by the hysteresis setting. Sets the upper velocity for StealthChop voltage PWM mode. TSTEP ≥ TPWMTHRS - StealthChop PWM mode is enabled, if configured When the velocity exceeds the limit set by TPWMTHRS , the driver switches to SpreadCycle.                                                                                                                                                                                                                                                                                                                                        |
| W                                                                      | 0x22                                                                   | 24                                                                     | VACTUAL                                                                | VACTUAL allows moving the motor by UART It gives the motor velocity in +-(2^23)-1 0: Normal operation. Driver reacts to STEP /=0: Motor moves with the velocity given pulses can be monitored via INDEX                                                                                                                                                                                                                                                                                                                                                                                         | input. by VACTUAL. Step                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## 5.3 Sequencer Registers

The sequencer registers have a pure informative character and are read-only. They help for special cases like storing the last motor position before power off in battery powered applications.

| MICROSTEPPING CONTROL REGISTER SET (0X 60…0 X6B)   | MICROSTEPPING CONTROL REGISTER SET (0X 60…0 X6B)   | MICROSTEPPING CONTROL REGISTER SET (0X 60…0 X6B)   | MICROSTEPPING CONTROL REGISTER SET (0X 60…0 X6B)   | MICROSTEPPING CONTROL REGISTER SET (0X 60…0 X6B)                                                                                                                                                                                                                                                                           | MICROSTEPPING CONTROL REGISTER SET (0X 60…0 X6B)   |
|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| R/W                                                | Addr                                               | n                                                  | Register                                           | Description / bit names                                                                                                                                                                                                                                                                                                    | Range [Unit]                                       |
| R                                                  | 0x6A                                               | 10                                                 | MSCNT                                              | Microstep counter. Indicates actual position in the microstep table for CUR_A . CUR_B uses an offset of 256 into the table. Reading out MSCNT allows determination of the motor position within the electrical wave.                                                                                                       | 0…1023                                             |
| R                                                  | 0x6B                                               | 9 + 9                                              | MSCURACT                                           | bit 8… 0: CUR_A (signed): Actual microstep current for motor phase B (sine wave) as read from the internal sine wave table (not scaled by current setting) bit 24… 16: CUR_A (signed): Actual microstep current for motor phase A (co-sine wave) as read from the internal sine wave table (not scaled by current setting) | +/-0...255                                         |

## 5.4 Chopper Control Registers

| DRIVER REGISTER SET (0X 6C…0 X7F)   | DRIVER REGISTER SET (0X 6C…0 X7F)   | DRIVER REGISTER SET (0X 6C…0 X7F)   | DRIVER REGISTER SET (0X 6C…0 X7F)   | DRIVER REGISTER SET (0X 6C…0 X7F)                                                                                                                       | DRIVER REGISTER SET (0X 6C…0 X7F)                                                                                                                                   | DRIVER REGISTER SET (0X 6C…0 X7F)   |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| R/W                                 | Addr                                | n                                   | Register                            | Description / bit names                                                                                                                                 | Description / bit names                                                                                                                                             | Range [Unit]                        |
| RW                                  | 0x6C                                | 32                                  | CHOPCONF                            | Chopper and driver configuration See separate table!                                                                                                    | Chopper and driver configuration See separate table!                                                                                                                | Reset default= 0x10000053           |
| R                                   | 0x6F                                | 32                                  | DRV_ STATUS                         | Driver status flags and current level read back See separate table!                                                                                     | Driver status flags and current level read back See separate table!                                                                                                 |                                     |
| RW                                  | 0x70                                | 22                                  | PWMCONF                             | StealthChop PWM chopper configuration                                                                                                                   | StealthChop PWM chopper configuration                                                                                                                               | Reset default= 0xC10D0024           |
| R                                   |                                     | 9+8                                 | PWM_SCALE                           | See separate table! Results of StealthChop amplitude regulator. These values can be used to monitor automatic PWM amplitude scaling (255=max. voltage). | See separate table! Results of StealthChop amplitude regulator. These values can be used to monitor automatic PWM amplitude scaling (255=max. voltage).             |                                     |
| R                                   | 0x71                                | 9+8                                 | PWM_SCALE                           | bit 7 … 0                                                                                                                                               | PWM_SCALE_SUM : Actual PWM duty cycle. This value is used for scaling the values CUR_A and CUR_B read from the sine wave table.                                     | 0…255                               |
| R                                   |                                     | 9+8                                 | PWM_SCALE                           | bit 24… 16                                                                                                                                              | PWM_SCALE_AUTO : 9 Bit signed offset added to the calculated PWM duty cycle. This is the result of the automatic amplitude regulation based on current measurement. | signed - 255…+255                   |
| R                                   | 0x72                                | 8+8                                 | PWM_AUTO                            | These automatically generated values can be read out in order to determine a default / power up setting for PWM_GRAD and PWM_OFS .                      | These automatically generated values can be read out in order to determine a default / power up setting for PWM_GRAD and PWM_OFS .                                  |                                     |
| R                                   | 0x72                                | 8+8                                 | PWM_AUTO                            | bit 7… 0                                                                                                                                                | PWM_OFS_AUTO : Automatically determined offset value                                                                                                                | 0…255                               |
| R                                   | 0x72                                | 8+8                                 | PWM_AUTO                            | bit 23… 16                                                                                                                                              | PWM_GRAD_AUTO : Automatically determined gradient value                                                                                                             | 0…255                               |

## 5.4.1 CHOPCONF -Chopper Configuration

| 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION       | 0X6C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                                                                                                                                                                                                                                                        |
|------------------------------------------|------------------------------------------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                      | Name                                     | Function                                     | Comment                                                                                                                                                                                                                                                                                                                                                                                       |
| 31                                       | diss2vs                                  | Low side short protection disable            | 0: Short protection low side is on 1: Short protection low side is disabled                                                                                                                                                                                                                                                                                                                   |
| 30                                       | diss2g                                   | short to GND protection disable              | 0: Short to GND protection is on 1: Short to GND protection is disabled                                                                                                                                                                                                                                                                                                                       |
| 29                                       | dedge                                    | enable double edge step pulses               | 1: Enable step impulse at each step edge to reduce step frequency requirement. This mode is not compatible with the step filtering function ( multistep_filt )                                                                                                                                                                                                                                |
| 28                                       | intpol                                   | interpolation to 256 microsteps              | 1: The actual microstep resolution ( MRES ) becomes extrapolated to 256 microsteps for smoothest motor operation. (Default: 1)                                                                                                                                                                                                                                                                |
| 27                                       | mres3                                    | MRES                                         | %0000:                                                                                                                                                                                                                                                                                                                                                                                        |
| 26                                       | mres2                                    | micro step resolution                        | Native 256 microstep setting.                                                                                                                                                                                                                                                                                                                                                                 |
| 25                                       | mres1                                    |                                              | %0001 … %1000:                                                                                                                                                                                                                                                                                                                                                                                |
| 24                                       | mres0                                    |                                              | 128, 64, 32, 16, 8, 4, 2, FULLSTEP Reduced microstep resolution. The resolution gives the number of microstep entries per sine quarter wave. When choosing a lower microstep resolution, the driver automatically uses microstep positions which result in a symmetrical wave. Number of microsteps per step pulse = 2^ MRES (Selection by pins unless disabled by GCONF . mstep_reg_select ) |
| 23                                       | -                                        | reserved                                     | set to 0                                                                                                                                                                                                                                                                                                                                                                                      |
| 22 21                                    |                                          |                                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| 20                                       |                                          |                                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| 19                                       |                                          |                                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| 18                                       |                                          |                                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| 17                                       | vsense                                   | sense resistor voltage based current scaling | 0: Low sensitivity, high sense resistor voltage 1: High sensitivity, low sense resistor voltage                                                                                                                                                                                                                                                                                               |
| 16                                       | tbl1                                     | TBL                                          | %00 … %11:                                                                                                                                                                                                                                                                                                                                                                                    |
| 15                                       | tbl0                                     | blank time select                            | Set comparator blank time to 16, 24, 32 or 40 clocks Hint : %00 or %01 is recommended for most applications (Default: OTP)                                                                                                                                                                                                                                                                    |
| 14                                       | -                                        | reserved                                     | set to 0                                                                                                                                                                                                                                                                                                                                                                                      |
| 13                                       |                                          |                                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| 12                                       |                                          |                                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| 11                                       |                                          |                                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| 10                                       | hend3                                    | HEND                                         | %0000 … %1111: Hysteresis is -3, -2, - 1, 0, 1, …, 12 (1/512 of this setting adds to current setting) This is the hysteresis value which becomes used for hysteresis chopper.                                                                                                                                                                                                                 |
| 9                                        | hend2                                    | hysteresis low value                         |                                                                                                                                                                                                                                                                                                                                                                                               |
| 8                                        | hend1                                    | OFFSET                                       |                                                                                                                                                                                                                                                                                                                                                                                               |
| 7                                        | hend0                                    | sine wave offset                             | the (Default: OTP, resp. 0 in StealthChop mode)                                                                                                                                                                                                                                                                                                                                               |
| 6                                        | hstrt2                                   | HSTRT                                        | %000 … %111:                                                                                                                                                                                                                                                                                                                                                                                  |
| 5                                        | hstrt1                                   | hysteresis start value                       | Add 1, 2, …, 8 to hysteresis low value HEND                                                                                                                                                                                                                                                                                                                                                   |
| 4                                        | hstrt0                                   | added to HEND                                | (1/512 of this setting adds to current setting) Attention: Effective HEND+HSTRT ≤ 16.                                                                                                                                                                                                                                                                                                         |

| 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION                                                                                                                                                                                 |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                      | Name                                     | Function                                 | Comment                                                                                                                                                                                                                |
|                                          |                                          |                                          | (Default: OTP, resp. 5 in StealthChop mode)                                                                                                                                                                            |
| 3                                        | toff3                                    | TOFF off time and driver enable          | Off time setting controls duration of slow decay phase N CLK = 24 + 32* TOFF %0000: Driver disable, all bridges off %0001: 1 - use only with TBL ≥ 2 %0010 … %1111: 2 … 15 (Default: OTP, resp. 3 in StealthChop mode) |
| 2                                        | toff2                                    | TOFF off time and driver enable          |                                                                                                                                                                                                                        |
| 1                                        | toff1                                    | TOFF off time and driver enable          |                                                                                                                                                                                                                        |
| 0                                        | toff0                                    | TOFF off time and driver enable          |                                                                                                                                                                                                                        |

## 5.4.2 PWMCONF -Voltage PWM Mode StealthChop

| 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP          | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------------------------------------------|------------------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                            | Name                                           | Function                                              | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 31 30 29 28                                    | PWM_LIM                                        | PWM automatic scale amplitude limit when switching on | Limit for PWM_SCALE_AUTO when switching back from SpreadCycle to StealthChop. This value defines the upper limit for bits 7 to 4 of the automatic current control when switching back. It can be set to reduce the current jerk during mode change back to StealthChop. It does not limit PWM_GRAD or PWM_GRAD_AUTO offset. (Default = 12)                                                                                                                                         |
| 27 26 25 24                                    | PWM_REG                                        | Regulation loop gradient                              | User defined maximum PWM amplitude change per half wave when using pwm_autoscale =1 . (1…15): 1: 0.5 increments (slowest regulation) 2: 1 increment (default with OTP2 .1=1) 3: 1.5 increments 4: 2 increments … 8: 4 increments (default with OTP2 .1=0) ...                                                                                                                                                                                                                      |
| 23                                             | -                                              | reserved                                              | set to 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 22                                             | -                                              | reserved                                              | set to 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 21 20                                          | freewheel1 freewheel0                          | Allows different standstill modes                     | Stand still option when motor current setting is zero ( I_HOLD =0). %00: Normal operation %01: Freewheeling                                                                                                                                                                                                                                                                                                                                                                        |
| 19                                             | pwm_ autograd                                  | PWM automatic gradient adaptation                     | %10: Coil shorted using LS drivers %11: Coil shorted using HS drivers 0 Fixed value for PWM_GRAD ( PWM_GRAD_AUTO = PWM_GRAD ) 1 Automatic tuning (only with pwm_autoscale =1) PWM_GRAD_AUTO is initialized with PWM_GRAD                                                                                                                                                                                                                                                           |
| 18                                             | pwm_ autoscale                                 | PWM automatic amplitude scaling                       | 1.5 * PWM_OFS_AUTO * ( IRUN +1)/32 < PWM_SCALE_SUM < 4 * PWM_OFS_AUTO * ( IRUN +1)/32. Time required for tuning PWM_GRAD_AUTO About 8 fullsteps per change of +/-1. 0 User defined feed forward PWM amplitude. The current settings IRUN and IHOLD are not enforced by regulation but scale the PWM amplitude, only! The resulting PWM amplitude (limited to 0…255) is: PWM_OFS * ((CS_ACTUAL+1) / 32) + PWM_GRAD * 256 / TSTEP 1 Enable automatic current control (Reset default) |

| 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                            | Name                                           | Function                                       | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 17                                             | pwm_freq1                                      | PWM frequency selection                        | %00: f PWM =2/1024 f CLK %01: f PWM =2/683 f CLK %10: f PWM =2/512 f CLK %11: f PWM =2/410 f CLK                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 16                                             | pwm_freq0                                      | PWM frequency selection                        | %00: f PWM =2/1024 f CLK %01: f PWM =2/683 f CLK %10: f PWM =2/512 f CLK %11: f PWM =2/410 f CLK                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 15                                             | PWM_ User gradient                             | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 14                                             | GRAD                                           | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 13                                             | PWM_ User gradient                             | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 12                                             | PWM_ User gradient                             | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 11                                             | PWM_ User gradient                             | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 10                                             | PWM_ User gradient                             | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 9                                              | PWM_ User gradient                             | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 8                                              | PWM_ User gradient                             | defined amplitude                              | Velocity dependent gradient for PWM amplitude: PWM_GRAD * 256 / TSTEP This value is added to PWM_AMPL to compensate for the velocity-dependent motor back-EMF. Use PWM_GRAD as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_GRAD to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. Alternatively program the determined value to OTP. It automatically will be loaded upon power up, even when StealthChop becomes enabled right away. Hint: After initial tuning, the required initial value can be read out from PWM_GRAD_AUTO. User defined PWM amplitude offset (0-255) related to full motor current ( CS_ACTUAL =31) in stand still. ( Reset default=36 ) Use PWM_OFS as initial value for automatic scaling to speed up the automatic tuning process. To do this, set PWM_OFS to the determined, application specific value, with pwm_autoscale =0. Only afterwards, set pwm_autoscale =1. Enable StealthChop when finished. PWM_OFS = 0 will disable scaling down motor current below a motor specific lower measurement threshold. This setting should only be used under certain conditions, i.e., when the power supply voltage can vary up and down by a factor of two or more. It prevents the motor going out of regulation, but it also prevents power down below the regulation limit. PWM_OFS > 0 allows automatic scaling to low PWM duty |
| 7                                              | PWM_ OFS                                       | User defined amplitude (offset)                | cycles even below the lower regulation threshold. This allows low (standstill) current settings based on the actual (hold) current scale (register IHOLD_IRUN ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5                                              | PWM_ OFS                                       | User defined amplitude (offset)                | cycles even below the lower regulation threshold. This allows low (standstill) current settings based on the actual (hold) current scale (register IHOLD_IRUN ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4                                              | PWM_ OFS                                       | User defined amplitude (offset)                | cycles even below the lower regulation threshold. This allows low (standstill) current settings based on the actual (hold) current scale (register IHOLD_IRUN ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3                                              | PWM_ OFS                                       | User defined amplitude (offset)                | cycles even below the lower regulation threshold. This allows low (standstill) current settings based on the actual (hold) current scale (register IHOLD_IRUN ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2                                              | PWM_ OFS                                       | User defined amplitude (offset)                | cycles even below the lower regulation threshold. This allows low (standstill) current settings based on the actual (hold) current scale (register IHOLD_IRUN ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1                                              | PWM_ OFS                                       | User defined amplitude (offset)                | cycles even below the lower regulation threshold. This allows low (standstill) current settings based on the actual (hold) current scale (register IHOLD_IRUN ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0                                              | PWM_ OFS                                       | User defined amplitude (offset)                | cycles even below the lower regulation threshold. This allows low (standstill) current settings based on the actual (hold) current scale (register IHOLD_IRUN ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## 5.4.3 DRV\_STATUS -Driver Status Flags

| 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK   | 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK   | 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK   | 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK                                                                                                                             |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                  | Name                                                                 | Function                                                             | Comment                                                                                                                                                                                        |
| 31                                                                   | stst                                                                 | standstill indicator                                                 | This flag indicates motor stand still in each operation mode. This occurs 2^20 clocks after the last step pulse.                                                                               |
| 30                                                                   | stealth                                                              | StealthChop indicator                                                | 1: Driver operates in StealthChop mode 0: Driver operates in SpreadCycle mode                                                                                                                  |
| 29                                                                   | -                                                                    | reserved                                                             | Ignore these bits.                                                                                                                                                                             |
| 28                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 27                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 26                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 25                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 24                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 23                                                                   | -                                                                    | reserved                                                             | Ignore these bits.                                                                                                                                                                             |
| 22                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 20                                                                   | CS_                                                                  | actual motor current /                                               | Actual current control scaling, for monitoring the                                                                                                                                             |
| 19                                                                   | ACTUAL                                                               | smart energy current                                                 | function of the automatic current scaling.                                                                                                                                                     |
| 18                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 17                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 15                                                                   | -                                                                    | reserved                                                             | Ignore these bits.                                                                                                                                                                             |
| 14                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 13                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 12                                                                   |                                                                      |                                                                      |                                                                                                                                                                                                |
| 11                                                                   | t157                                                                 | 157°C comparator                                                     | 1: Temperature threshold is exceeded                                                                                                                                                           |
| 10                                                                   | t150                                                                 | 150°C comparator                                                     | 1: Temperature threshold is exceeded                                                                                                                                                           |
| 9                                                                    | t143                                                                 | 143°C comparator                                                     | 1: Temperature threshold is exceeded                                                                                                                                                           |
| 8                                                                    | t120                                                                 | 120°C comparator                                                     | 1: Temperature threshold is exceeded                                                                                                                                                           |
| 7                                                                    | olb                                                                  | open load indicator phase B                                          | 1: Open load detected on phase A or B. Hint: This is just an informative flag. The driver                                                                                                      |
| 6                                                                    | ola                                                                  | open load indicator phase A                                          | takes no action upon it. False detection may occur in fast motion and standstill. Check during slow motion, only.                                                                              |
| 5                                                                    | s 2vsb                                                               | low side short indicator phase B                                     | 1: Short on low-side MOSFET detected on phase A or B. The driver becomes disabled. The flags stay active, until                                                                                |
| 4                                                                    | s 2vsa                                                               | low side short indicator phase A                                     | the driver is disabled by software (TOFF=0) or by the ENN input. Flags are separate for both chopper modes.                                                                                    |
| 3                                                                    | s 2gb                                                                | short to ground indicator phase B                                    | 1: Short to GND detected on phase A or B. The driver becomes disabled. The flags stay active, until the driver                                                                                 |
| 2                                                                    | s 2ga                                                                | short to ground indicator phase A                                    | is disabled by software (TOFF=0) or by the ENN input. Flags are separate for both chopper modes.                                                                                               |
| 1                                                                    | ot                                                                   | overtemperature flag                                                 | 1: The selected overtemperature limit has been reached. Drivers become disabled until otpw is also cleared due to cooling down of the IC. The overtemperature flag is common for both bridges. |
| 0                                                                    | otpw                                                                 | overtemperature                                                      | 1: The selected overtemperature pre-warning threshold is exceeded. The overtemperature pre-warning flag is common for both bridges.                                                            |
|                                                                      |                                                                      | pre- warning flag                                                    |                                                                                                                                                                                                |

## 6 StealthChop ™

<!-- image -->

StealthChop is an extremely quiet mode of operation for stepper motors. It is based on a voltage mode PWM. In case of standstill and at low velocities, the motor is absolutely noiseless.  Thus,  StealthChop  operated  stepper  motor  applications  are  very  suitable  for indoor or home use. The motor operates absolutely free of vibration at low velocities. With StealthChop, the motor current is applied by driving a certain effective voltage into the coil, using a voltage mode PWM. With the enhanced StealthChop2, the driver automatically adapts to the application for best performance. No more configurations are required. Optional configuration allows for tuning the setting in special cases, or for storing initial values for the automatic adaptation algorithm. For high velocity drives consider SpreadCycle in combination with StealthChop.

Figure 6.1 Motor coil sine wave current with StealthChop (measured with current probe)

<!-- image -->

## 6.1 Automatic Tuning

StealthChop2  integrates  an  automatic  tuning  procedure  (AT),  which  adapts  the  most  important operating parameters to the motor automatically. This way, StealthChop2 allows high motor dynamics and supports powering down the motor to very low currents. Just two steps have to be respected by the motion controller for best results: Start with the motor in standstill but powered with nominal run current (AT#1). Move the motor at a medium velocity, e.g., as part of a homing procedure (AT#2). Figure 6.2 shows the tuning procedure.

Border conditions in for AT#1 and AT#2 are shown in the following table:

| AUTOMATIC TUNING TIMING AND BORDER CONDITIONS   | AUTOMATIC TUNING TIMING AND BORDER CONDITIONS   | AUTOMATIC TUNING TIMING AND BORDER CONDITIONS                                                                                                                                                                                                                                                                                                                                                                    | AUTOMATIC TUNING TIMING AND BORDER CONDITIONS                                                                                                                                    |
|-------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Step                                            | Parameter                                       | Conditions                                                                                                                                                                                                                                                                                                                                                                                                       | Duration                                                                                                                                                                         |
| AT#1                                            | PWM_ OFS_AUTO                                   | - Motor in standstill and actual current scale ( CS ) is identical to run current ( IRUN ). - If standstill reduction is enabled (pin PDN_UART=0), provide an initial step pulse to switch the drive to run current. - Pins VS and VREF at operating level.                                                                                                                                                      | ≤ 2^20+2*2^18 t CLK , ≤ 130ms (with internal clock)                                                                                                                              |
| AT#2                                            | PWM_ GRAD_AUTO                                  | - Motor must move at a velocity, where a significant amount of back EMF is generated and where the full run current can be reached. Conditions: - 1.5* PWM_OFS_AUTO *( IRUN +1)/32 < PWM_SCALE_SUM < 4* PWM_OFS_AUTO *( IRUN +1)/32 - PWM_SCALE_SUM < 255. Hint: A typical range is 60-300 RPM. Determine best conditions with the evaluation board and monitor PWM_SCALE_AUTO going down to zero during tuning. | 8 fullsteps are required for a change of +/-1. For a typical motor with PWM_GRAD_AUTO optimum at 64 or less, up to 400 fullsteps are required when starting from OTP default 14. |

Determine best conditions for automatic tuning with the evaluation board. going  down  to  zero  during  the  constant  velocity  phase  in  AT#2  tuning.  This

Monitor PWM\_SCALE\_AUTO indicates a successful tuning.

## Attention

:

Operating in StealthChop without proper tuning can lead to high motor currents during a deceleration ramp, especially with low resistive motors and fast deceleration settings. Follow the automatic tuning process and check optimum tuning conditions using the evaluation board. It is recommended to use an initial value for settings PWM\_OFS and PWM\_GRAD determined per motor type. Avoid hard stops from high velocities, even after tuning StealthChop settings. A deceleration ramp is required in each case.

When powering up in StealthChop,  make  sure  that  the  supply  voltage  ramps  to  the  final  voltage. Powering  up  to  a  lower  voltage  (e.g.  5V)  will  lead  to  wrong  tuning,  in  case  the  motor  becomes enabled at the lower voltage. Alternatively disable the motor during power-up.

## Known Limitations :

Successful  completion  of  AT#1  tuning  phase  is  not  safely  detected  in  all  cases.  It  might  require multiple motor start / stop events to safely detect completion. will not start when AT#1 has

Successful determination is mandatory for AT#2: Tuning of PWM\_GRAD not completed.

## Solution a) :

Complete  automatic  tuning  phase  AT#1  process,  by  using  a  slow-motion  sequence  which  leads  to standstill  detection in between of each two steps. Use a velocity of 8 (6 Hz) or lower and execute minimum 10 steps during AT#1 phase.

## Solution b) :

Complete automatic tuning phase AT#1 process, by a doing sequence of four or more initial motions (using reduced acceleration, to match the fact that AT#2 has not yet completed) after power up. Make sure, that the driver is at standstill more than 130ms in between of each two motions.

## Solution c):

Store application specific PWM\_GRAD to OTP memory.

Optionally  store  initial  parameters  for PWM\_GRAD\_AUTO for  the  application  and  initialize  by  UART interface.

Therefore, use the motor and operating conditions determined for the application and do a complete automatic  tuning  sequence  (refer  to a) ).  Note  the  resulting PWM\_GRAD\_AUTO value  and  use  it  for initialization of PWM\_GRAD or program the value to OTP memory. With this, tuning of AT#2 phase is not mandatory in the application and can be skipped. Automatic tuning will optimize settings during further operation. Combine with a) if desired.

Figure 6.2 StealthChop2 automatic tuning procedure

<!-- image -->

## Attention

Modifying VREF or the supply voltage VS invalidates the result of the automatic tuning process. Motor current  regulation  cannot  compensate  significant  changes  until  next  AT#1  phase.  Automatic  tuning adapts to changed conditions whenever AT#1 and AT#2 conditions are fulfilled in the later operation.

## 6.2 StealthChop Options

<!-- image -->

In  order  to  match  the  motor  current  to  a  certain  level,  the  effective  PWM  voltage  becomes  scaled depending on the actual motor velocity. Several additional factors influence the required voltage level to drive the motor at the target current: The motor resistance, its back EMF (i.e. directly proportional to its velocity) as well as the actual level of the supply voltage. Two modes of PWM regulation are provided: The automatic tuning mode (AT) using current feedback ( pwm\_autoscale = 1, pwm\_autograd =  1)  and  a  feed  forward  velocity-controlled  mode  ( pwm\_autoscale =  0).  The  feed  forward  velocitycontrolled mode will not react to a change of the supply voltage or to events like a motor stall, but it provides very stable amplitude. It does not use nor require any means of current measurement. This is  perfect  when  motor  type  and  supply  voltage  are  well  known.  Therefore,  we  recommend  the automatic mode, unless current regulation is not satisfying in the given operating conditions.

It is recommended to operate in automatic tuning mode for general use.

Half-automatic regulation ( pwm\_autograd=0 ),  or  velocity-based  scaling  ( pwm\_autoscale=0 )  should  be considered only with fixed motor type and supply voltage. In this case, initializing PWM\_GRAD resp. PWM\_GRAD and PWM\_OFS via  the  UART  interface  is  required.  The  operating  parameters  can  be determined in automatic tuning mode initially. These modes offer reduced PWM amplitude jitter.

Hint: In non-automatic mode the power supply current directly reflects mechanical load on the motor.

The StealthChop PWM frequency can be chosen in four steps to adapt the frequency divider to the frequency of the clock source. A setting in the range of  20-50kHz is good for most applications. It balances low current ripple and good higher velocity performance vs. dynamic power dissipation.

Table 6.1 Choice of PWM frequency -green / light green: recommended

| CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP      | CHOICE OF PWM FREQUENCY FOR STEALTHCHOP   |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|----------------------------------------------|-------------------------------------------|
| Clock frequency f CLK                     | PWM_FREQ=%00 f PWM =2/1024 f CLK          | PWM_FREQ=%01 f PWM =2/683 f CLK (default) | PWM_FREQ=%10 f PWM =2/512 f CLK (OTP option) | PWM_FREQ=%11 f PWM =2/410 f CLK           |
| 18MHz                                     | 35.2kHz                                   | 52.7kHz                                   | 70.3kHz                                      | 87.8kHz                                   |
| 16MHz                                     | 31.3kHz                                   | 46.9kHz                                   | 62.5kHz                                      | 78.0kHz                                   |
| 12MHz (internal)                          | 23.4kHz                                   | 35.1kHz                                   | 46.9kHz                                      | 58.5kHz                                   |
| 10MHz                                     | 19.5kHz                                   | 29.3kHz                                   | 39.1kHz                                      | 48.8kHz                                   |
| 8MHz                                      | 15.6kHz                                   | 23.4kHz                                   | 31.2kHz                                      | 39.0kHz                                   |

## 6.3 StealthChop Current Regulator

In StealthChop voltage PWM mode, the autoscaling function ( pwm\_autoscale = 1, pwm\_auto\_grad = 1) regulates the motor current to the desired current setting. Automatic scaling is used as part of the automatic tuning process (AT), and for subsequent tracking of changes within the motor parameters. The driver measures the motor current during the chopper on time and uses a proportional regulator to regulate PWM\_SCALE\_AUTO in order match the motor current to the target current. PWM\_REG is the proportionality  coefficient  for  this  regulator.  Basically,  the  proportionality  coefficient  should  be  as small as possible in order to get a stable and soft regulation behavior, but it must be large enough to allow  the  driver  to  quickly  react  to  changes  caused  by  variation  of  the  motor  target  current  (e.g. change of VREF). During initial tuning step AT#2, PWM\_REG also compensates for the change of motor velocity. Therefore, a high acceleration during AT#2 will require a higher setting of PWM\_REG .  With careful selection of homing velocity and acceleration, a minimum setting of the regulation gradient often  is  sufficient  ( PWM\_REG =1). PWM\_REG setting  should  be  optimized  for  the  fastest  required acceleration  and  deceleration  ramp  (compare  Figure  6.3  and  Figure  6.4).  The  quality  of  the  setting PWM\_REG in phase AT#2 and the finished automatic tuning procedure (or non-automatic settings for PWM\_OFS and PWM\_GRAD ) can be examined when monitoring motor current during an acceleration phase Figure 6.5.

<!-- image -->

Figure 6.3 Scope shot: good setting for PWM\_REG

Figure 6.4 Scope shot: too small setting for PWM\_REG during AT#2

<!-- image -->

Figure 6.5 Successfully determined PWM\_GRAD(\_AUTO) and PWM\_OFS(\_AUTO)

<!-- image -->

Quick Start

For a quick start, see the Quick Configuration Guide in chapter 14.

## 6.3.1 Lower Current Limit

The  StealthChop  current  regulator  imposes  a  lower  limit  for  motor  current  regulation.  As  the  coil current can be measured in the shunt resistor during chopper on phase only, a minimum chopper duty  cycle  allowing  coil  current  regulation  is  given  by  the  blank  time  as  set  by TBL and  by  the chopper  frequency  setting.  Therefore,  the  motor  specific  minimum  coil  current  in  StealthChop autoscaling mode rises with the supply voltage and  with the chopper frequency. A lower blanking time allows a lower current limit. It is important for the correct  determination of PWM\_OFS\_AUTO , that in AT#1 the run current set by the sense resistor, VREF and IRUN is well within the regulation range. Lower  currents  (e.g.,  for  standstill  power  down)  are  automatically  realized  based  on PWM\_OFS\_AUTO and PWM\_GRAD\_AUTO respectively  based  on PWM\_OFS and PWM\_GRAD with  nonautomatic current scaling. The freewheeling option allows going to zero motor current.

Lower motor coil current limit for StealthChop2 automatic tuning:

<!-- formula-not-decoded -->

With VM the motor supply voltage and RCOIL the motor coil resistance. ILower Limit can be treated as a thumb value for the minimum nominal IRUN motor current setting.

## EXAMPLE:

A motor has a coil resistance of 5Ω, the supply voltage is 24V. With TBL =%01 and PWM\_FREQ =%00, t BLANK is 24 clock cycles, f PWM is 2/(1024 clock cycles):

<!-- formula-not-decoded -->

This  means,  the  motor  target  current  for  automatic  tuning  must  be  225mA  or  more,  taking  into account  all  relevant  settings.  This  lower  current  limit  also  applies  for  modification  of  the  motor current via the analog input VREF.

## Attention

For automatic tuning, a lower coil current limit applies. The motor current in automatic tuning phase AT#1 must exceed this lower limit. ILOWER LIMIT can be calculated or measured using a current probe. Setting  the  motor  run-current  or  hold-current  below  the  lower  current  limit  during  operation  by modifying IRUN and IHOLD is possible after successful automatic tuning.

The lower current limit also limits the capability of the driver to respond to changes of VREF.

## 6.4 Velocity Based Scaling

<!-- image -->

Velocity based scaling scales the StealthChop amplitude based on the time between each two steps ( TSTEP )  measured  in  clock  cycles.  This  concept  basically  does  not  require  a  current  measurement, because  no  regulation  loop  is  necessary.  A  pure  velocity-based  scaling  is  available  via  UART programming, only, when setting pwm\_autoscale = 0. The basic idea is to have a linear approximation of the voltage required to drive the target current into the motor. The stepper motor has a certain coil resistance and thus needs a certain voltage amplitude to yield a  target current based on the basic formula I=U/R. With R being the coil resistance, U the supply voltage scaled by the PWM value, the current I results. The initial value for PWM\_AMPL can be calculated:

<!-- formula-not-decoded -->

With VM the motor supply voltage and ICOIL the target RMS current

The effective PWM voltage UPWM (1/SQRT(2) x peak value) results considering the 8 bit resolution and 248 sine wave peak for the actual PWM amplitude shown as PWM\_SCALE :

<!-- formula-not-decoded -->

With rising motor velocity, the motor generates an increasing back EMF voltage. The back EMF voltage is proportional to the motor velocity. It reduces the PWM voltage effective at the coil resistance and thus  current  decreases.  The  TMC22xx  provides  a  second  velocity  dependent  factor  ( PWM\_GRAD )  to compensate  for this. The overall effective PWM  amplitude  ( PWM\_SCALE\_SUM ) in this  mode automatically is calculated in dependence of the microstep frequency as:

<!-- formula-not-decoded -->

With fSTEP being the microstep frequency for 256 microstep resolution equivalent and fCLK the clock frequency supplied to the driver or the actual internal frequency

As a first approximation, the back EMF subtracts from the supply voltage and thus the effective current amplitude decreases. This way, a first approximation for PWM\_GRAD setting can be calculated:

<!-- formula-not-decoded -->

CBEMF is the back EMF constant of the motor in Volts per radian/second.

MSPR is the number of microsteps per rotation assuming a 256 microstep resolution, e.g., 51200 = 256µsteps multiplied by 200 fullsteps for a 1.8° motor.

Figure 6.6 Velocity based PWM scaling (pwm\_autoscale=0)

<!-- image -->

## Hint

The values for PWM\_OFS and PWM\_GRAD can easily be optimized by tracing the motor current with a current probe on the oscilloscope. Alternatively, automatic tuning determines these values, and they can be read out from PWM\_OFS\_AUTO and PWM\_GRAD\_AUTO .

## UNDERSTANDING THE BACK EMF CONSTANT OF A MOTOR

The back EMF constant is the voltage a motor generates when turned with a certain velocity. Often motor datasheets do not specify this value, as it can be deducted from motor torque and coil current rating. Within SI units, the numeric value of the back EMF constant CBEMF has the same numeric value as the numeric value of the torque constant. For example, a motor with a torque constant of 1 Nm/A would have a CBEMF of 1V/rad/s. Turning such a motor with 1 rps (1 rps = 1 revolution per second = 6.28 rad/s) generates a back EMF voltage of 6.28V. Thus, the back EMF constant can be calculated as:

<!-- formula-not-decoded -->

I COILNOM is the motor's rated phase current for the specified holding torque

HoldingTorque is the motor specific holding torque, i.e. the torque reached at ICOILNOM on both coils. The torque unit is [Nm] where 1Nm = 100Ncm = 1000mNm.

The  voltage  is  valid  as  RMS  voltage  per  coil,  thus  the  nominal  current  is  multiplied  by  2  in  this formula, since the nominal current assumes a full step position, with two coils operating.

## 6.5 Combining StealthChop and SpreadCycle

<!-- image -->

For applications requiring high velocity motion, SpreadCycle may bring more stable operation in the upper velocity range. To combine no-noise operation with highest dynamic performance, the TMC22xx allows combining StealthChop and SpreadCycle based on a velocity threshold (Figure 6.7). A velocity threshold  ( TPWMTHRS )  can  be  preprogrammed  to  OTP  to  support  this  mode  even  in  standalone operation. With this, StealthChop is only active at low velocities.

Figure 6.7 TPWMTHRS for optional switching to SpreadCycle

<!-- image -->

As  a  first  step,  both  chopper  principles  should  be  parameterized  and  optimized  individually (SpreadCycle settings may be programmed to OTP memory). In a next step, a transfer velocity has to be  fixed.  For  example,  StealthChop  operation  is  used  for  precise  low  speed  positioning,  while SpreadCycle shall be used for highly dynamic motion. TPWMTHRS determines the transition velocity. Read out TSTEP when moving at the desired velocity and program the resulting value to TPWMTHRS . Use a low transfer velocity to avoid a jerk at the switching point.

A jerk  occurs  when switching at higher velocities, because the back-EMF of the motor (which rises with the velocity) causes a phase shift of up to 90° between motor voltage and motor current. So when switching at higher velocities between voltage PWM and current PWM mode, this jerk will occur with increased intensity. A high jerk may even produce a temporary overcurrent condition (depending on  the  motor  coil  resistance).  At  low  velocities  (e.g.  1  to  a  few  10  RPM),  it  can  be  completely neglected  for  most  motors.  Therefore,  consider  the  switching  jerk  when  choosing TPWMTHRS .  Set TPWMTHRS zero if you want to work with StealthChop only.

When enabling the StealthChop mode the first time using automatic current regulation, the motor must  be  at  stand  still  in  order  to  allow  a  proper  current  regulation.  When  the  drive  switches  to StealthChop at a higher velocity, StealthChop logic stores the last current regulation setting until the motor returns to a lower velocity again. This way, the regulation has a known starting point when returning to a lower velocity, where StealthChop becomes re-enabled. Therefore, neither the velocity threshold nor the supply voltage must be considerably changed during the phase while the chopper is switched to a different mode, because otherwise the motor might lose steps or the instantaneous current might be too high or too low.

A  motor  stall  or  a  sudden  change  in  the  motor  velocity  may  lead  to  the  driver  detecting  a  short circuit or to a state of automatic current regulation, from which it cannot recover. Clear the error flags and restart the motor from zero velocity to recover from this situation.

## Hint

Start the motor from standstill when switching on StealthChop the first time and keep it stopped for at least 128 chopper periods to allow StealthChop to do initial standstill current control.

## 6.6 Flags in StealthChop

<!-- image -->

As  StealthChop  uses  voltage  mode  driving,  status  flags  based  on  current  measurement  respond slower, respectively the driver reacts delayed to sudden changes of back EMF, like on a motor stall.

## Attention

A  motor  stall,  or  abrupt  stop  of  the  motion  during  operation  in  StealthChop  can  trigger  an overcurrent condition. Depending on the previous motor velocity, and on the coil resistance of the motor, it significantly increases motor current for a time of several 10ms. With low velocities, where the  back  EMF  is  just  a  fraction  of  the  supply  voltage,  there  is  no  danger  of  triggering  the  short detection.

## 6.6.1 Open Load Flags

In  StealthChop  mode,  status  information  is  different  from  the  cycle-by-cycle  regulated  SpreadCycle mode. OLA and OLB show if the current regulation sees that the nominal current can be reached on both coils.

- -A flickering OLA or OLB can result from asymmetries in the sense resistors or in the motor coils.
- -An interrupted motor coil leads to a continuously active open load flag for the coil.
- -One or both flags are active, if the current regulation did not succeed in scaling up to the full target current within the last few fullsteps (because no motor is attached or a high velocity exceeds the PWM limit).

If desired, do an on-demand open load test using the SpreadCycle chopper, as it delivers the safest result. With StealthChop, PWM\_SCALE\_SUM can be checked to detect the correct coil resistance.

## 6.6.2 PWM\_SCALE\_SUM Informs about the Motor State

Information about the motor state is available with automatic scaling by reading out PWM\_SCALE\_SUM . As this parameter reflects the actual voltage required to drive the target current into the  motor,  it  depends  on  several  factors:  motor  load,  coil  resistance,  supply  voltage,  and  current setting. Therefore, an evaluation of the PWM\_SCALE\_SUM value allows checking the motor operation point. When reaching the limit (255), the current regulator cannot sustain the full motor current, e.g. due to a drop in supply voltage.

## 6.7 Freewheeling and Passive Braking

<!-- image -->

StealthChop provides different options for motor standstill. These options can be enabled by setting the standstill current IHOLD to  zero  and  choosing the desired option using the FREEWHEEL setting. The desired option becomes  enabled after a time period specified by TPOWERDOWN and IHOLD\_DELAY .  Current regulation becomes frozen once the motor target current is at zero current in order  to  ensure  a  quick  startup.  With  the  freewheeling  options,  both  freewheeling  and  passive braking can be realized. Passive braking is an effective eddy current motor braking, which consumes a minimum of energy, because no active current is driven into the coils. However, passive braking will allow slow turning of the motor when a continuous torque is applied.

## Hint

Operate the motor within your application when exploring StealthChop. Motor performance often is better with a mechanical load, because it prevents the motor from stalling due mechanical oscillations which can occur without load.

| PARAMETERS RELATED TO STEALTHCHOP   | PARAMETERS RELATED TO STEALTHCHOP                                                                                                                                                                                                                        | PARAMETERS RELATED TO STEALTHCHOP   | PARAMETERS RELATED TO STEALTHCHOP                                                  |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------------------------------------------------|
| Parameter                           | Description                                                                                                                                                                                                                                              | Setting                             | Comment                                                                            |
| en_spread_ cycle                    | General disable for use of StealthChop (register GCONF ). The input SPREAD is XORed to this flag.                                                                                                                                                        | 1 0                                 | Do not use StealthChop StealthChop enabled                                         |
| TPWMTHRS                            | Specifies the upper velocity for operation in StealthChop. Entry the TSTEP reading (time between two 1/256 microsteps) when operating at the desired threshold velocity.                                                                                 | 0 … 1048575                         | StealthChop is disabled if TSTEP falls TPWMTHRS                                    |
| PWM_LIM                             | Limiting value for limiting the current jerk when switching from SpreadCycle to StealthChop. Reduce the value to yield a lower current jerk.                                                                                                             | 0 … 15                              | Upper four bits of 8 bit amplitude limit (Default=12)                              |
| pwm_ autoscale                      | Enable automatic current scaling using current measurement or use forward controlled velocity based mode.                                                                                                                                                | 0 1                                 | Forward controlled mode Automatic scaling with current regulator                   |
| pwm_ autograd                       | Enable automatic tuning of PWM_GRAD_AUTO                                                                                                                                                                                                                 | 0 1                                 | disable, use PWM_GRAD from register instead enable                                 |
| PWM_FREQ                            | PWM frequency selection. Use the lowest setting giving good results. The frequency measured at each of the chopper outputs is half of the effective chopper frequency f PWM .                                                                            | 0 1 2 3                             | f PWM =2/1024 f CLK f PWM =2/683 f CLK f PWM =2/512 f CLK f PWM =2/410 f CLK       |
| PWM_REG                             | User defined PWM amplitude (gradient) for velocity based scaling or regulation loop gradient when pwm_autoscale =1. User defined PWM amplitude (offset) for velocity                                                                                     | 1 … 15                              | Results in 0.5 to 7.5 steps for PWM_SCALE_AUTO regulator per fullstep              |
| PWM_OFS                             | based scaling and initialization value for automatic tuning of PWM_OFFS_AUTO .                                                                                                                                                                           | 0 … 255                             | PWM_OFS =0 disables linear current scaling based on current setting                |
| PWM_GRAD                            | User defined PWM amplitude (gradient) for velocity based scaling and initialization value for automatic tuning of PWM_GRAD_AUTO .                                                                                                                        | 0 … 255                             | Reset value can be pre- programmed by OTP                                          |
| FREEWHEEL                           | Stand still option when motor current setting is zero ( I_HOLD =0). Only available with StealthChop enabled. The freewheeling option makes the motor easy movable, while both coil short options realize a passive brake.                                | 0 1 2 3                             | Normal operation Freewheeling Coil short via LS drivers Coil short cia HS drivers  |
| PWM_SCALE _AUTO                     | Read back of the actual StealthChop voltage PWM scaling correction as determined by the current regulator. Should regulate to a value close to 0 during tuning procedure. Allow monitoring of the automatic tuning and of initial values for PWM_OFS and | -255 … 255 0 … 255                  | (read only) Scaling value becomes frozen when operating in SpreadCycle (read only) |
| PWM_GRAD _AUTO PWM_OFS _AUTO        | determination PWM_GRAD . Set pwm_autoscale =0 resp. pwm_autograd =0 to initialize from PWM_OFS and PWM_GRAD.                                                                                                                                             |                                     |                                                                                    |
| TOFF                                | General enable for the motor driver, the actual value does not influence StealthChop                                                                                                                                                                     | 0 1 … 15                            | Driver off Driver enabled                                                          |
| TBL                                 | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. Choose a setting of 1 or 2 for typical applications. For higher capacitive loads, 3 may be required. Lower            | 0 1 2 3                             | 16 t CLK 24 t CLK 32 t CLK 40 t CLK                                                |

## 7 SpreadCycle Chopper

While StealthChop is a voltage mode PWM controlled chopper, SpreadCycle is a cycle-by-cycle current control. Therefore, it can react extremely fast to changes in motor velocity or motor load. SpreadCycle will  give  better  performance  in  medium  to  high  velocity  range  for  motors  and  applications  which tend to resonance. The currents through both motor coils are controlled using choppers. The choppers work independently of each other. In Figure 7.1 the different chopper phases are shown.

On Phase: current flows in direction of target current

<!-- image -->

<!-- image -->

Fast Decay Phase: current flows in opposite direction of target current

Figure 7.1 Chopper phases

Although the current could be regulated using only on phases and fast decay phases, insertion of the slow  decay  phase  is  important  to  reduce  electrical  losses  and  current  ripple  in  the  motor.  The duration of the slow decay phase is specified in a control parameter and sets an upper limit on the chopper frequency. The current comparator can measure coil current during phases when the current flows through the sense resistor, but not during the slow decay phase, so the slow decay phase is terminated by a timer. The on phase is terminated by the comparator when the current through the coil reaches the target current. The fast decay phase may be terminated by either the comparator or another timer.

When the coil current is switched, spikes at the sense resistors occur due to charging and discharging parasitic  capacitances.  During  this  time,  typically  one  or  two  microseconds,  the  current  cannot  be measured. Blanking is the time when the input to the comparator is masked to block these spikes.

The SpreadCycle chopper mode cycles through four phases: on, slow decay, fast decay, and a second slow decay.

The chopper frequency is an important parameter for a chopped motor driver. A too low frequency might generate audible noise. A higher frequency reduces current ripple in the motor, but with a too high frequency magnetic losses may rise. Also power dissipation in the driver rises with increasing frequency due to the increased influence of switching slopes causing dynamic dissipation. Therefore, a compromise needs to be found. Most motors are optimally working in a frequency range of 16 kHz to 30 kHz.  The  chopper  frequency  is  influenced  by  a  number  of  parameter  settings  as  well  as  by  the motor inductivity and supply voltage.

## Hint

A  chopper  frequency  in  the  range  of  16 kHz  to  30 kHz  gives  a  good  result  for  most  motors  when using SpreadCycle. A higher frequency leads to increased switching losses.

Slow Decay Phase: current re-circulation

<!-- image -->

## 7.1 SpreadCycle Settings

<!-- image -->

<!-- image -->

The SpreadCycle (patented) chopper algorithm is a precise and simple to use chopper mode which automatically determines the optimum length for the fast-decay phase. The SpreadCycle will provide superior  microstepping  quality  even  with  default  settings.  Several  parameters  are  available  to optimize the chopper to the application.

Each  chopper  cycle  is  comprised  of  an  on  phase,  a  slow  decay  phase,  a  fast  decay  phase  and  a second slow decay phase (see Figure 7.3). The two slow decay phases and the two blank times per chopper cycle put an upper limit to the chopper frequency. The slow decay phases typically make up for  about  30%-70%  of  the  chopper  cycle  in  standstill  and  are  important  for  low  motor  and  driver power dissipation.

Calculation of a starting value for the slow decay time TOFF :

## EXAMPLE:

Target Chopper frequency: 25kHz.

Assumption: Two slow decay cycles make up for 50% of overall chopper cycle time

For the TOFF setting this means:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

With 12 MHz clock this gives a setting of TOFF=3.0, i.e. 3.

With 16 MHz clock this gives a setting of TOFF=4.25, i.e. 4 or 5.

The hysteresis start setting forces the driver to introduce a minimum amount of current ripple into the motor coils. The current ripple must be higher than the current ripple which is caused by resistive losses  in  the  motor  in  order  to  give  best  microstepping  results.  This  will  allow  the  chopper  to precisely  regulate  the  current  both  for  rising  and  for  falling  target  current.  The  time  required  to introduce  the  current  ripple  into  the  motor  coil  also  reduces  the  chopper  frequency.  Therefore,  a higher  hysteresis  setting  will  lead  to  a  lower  chopper  frequency.  The  motor  inductance  limits  the ability of the chopper to follow a changing motor current. Further the duration of the on phase and the  fast  decay  must  be  longer  than  the  blanking  time  because  the  current  comparator  is  disabled during blanking.

It is easiest to find the best setting by starting from a low hysteresis setting (e.g. HSTRT =0, HEND =0) and  increasing HSTRT ,  until  the  motor  runs  smoothly  at  low  velocity  settings.  This  can  best  be checked  when  measuring  the  motor  current  either  with  a  current  probe  or  by  probing  the  sense resistor voltages (see Figure 7.2). Checking the sine wave shape near zero transition will show a small ledge between both half waves in case the hysteresis setting is too small. At medium velocities (i.e. 100 to 400 fullsteps per second), a too low hysteresis setting will lead to increased humming and vibration of the motor.

<!-- image -->

f: 93.07Hz

Figure  7.2  No  ledges  in  current  wave  with  sufficient  hysteresis  (magenta:  current  A,  yellow  &amp; blue: sense resistor voltages A and B)

A too high hysteresis setting will lead to reduced chopper frequency and increased chopper noise but will not yield any benefit for the wave shape.

```
Quick Start For a quick start, see the Quick Configuration Guide in chapter 14.
```

For detail procedure see Application Note AN001 Parameterization of SpreadCycle

As experiments show, the setting is quite independent of the motor, because higher current motors typically also have a lower coil resistance. Therefore, choosing a low to medium default value for the hysteresis (for example, effective hysteresis = 4) normally fits most applications. The setting can be optimized  by  experimenting  with  the  motor:  A  too  low  setting  will  result  in  reduced  microstep accuracy,  while  a  too  high  setting  will  lead  to  more  chopper  noise  and  motor  power  dissipation. When measuring  the  sense  resistor  voltage  in  motor  standstill  at  a  medium  coil  current  with  an oscilloscope, a too low setting shows a fast decay phase not longer than the blanking time. When the fast decay time becomes slightly longer than the blanking time, the setting is optimum. You can reduce the off-time setting, if this is hard to reach.

The hysteresis principle could in some cases lead to the chopper frequency becoming too low, e.g. when the coil resistance is high when compared to the supply voltage. This is avoided by splitting the  hysteresis  setting  into  a  start  setting  ( HSTRT+HEND )  and  an  end  setting  ( HEND ).  An  automatic hysteresis  decrementer  (HDEC)  interpolates  between  both  settings,  by  decrementing  the  hysteresis value stepwise each 16 system clocks. At the beginning of each chopper cycle, the hysteresis begins with a value which is the sum of the start and the end values ( HSTRT + HEND ), and decrements during the cycle, until either the chopper cycle ends, or the hysteresis end value ( HEND ) is reached. This way, the  chopper  frequency  is  stabilized  at  high  amplitudes  and  low  supply  voltage  situations,  if  the frequency gets too low. This avoids the frequency reaching the audible range.

## Hint

Highest motor velocities sometimes benefit from setting TOFF to 1 or 2 and a short TBL of 1 or 0.

Figure 7.3 SpreadCycle chopper scheme showing coil current during a chopper cycle

<!-- image -->

These parameters control SpreadCycle mode:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                               | Setting   | Comment                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------|
| TOFF        | Sets the slow decay time ( off time ). This setting also limits the maximum chopper frequency. For operation with StealthChop, this parameter is not used, but it is required to enable the motor. In case of operation with StealthChop only, any setting is OK. Setting this parameter to zero completely disables all driver transistors and the motor can free-wheel. | 0         | chopper off                                                                               |
| TOFF        | Sets the slow decay time ( off time ). This setting also limits the maximum chopper frequency. For operation with StealthChop, this parameter is not used, but it is required to enable the motor. In case of operation with StealthChop only, any setting is OK. Setting this parameter to zero completely disables all driver transistors and the motor can free-wheel. | 1…15      | off time setting N CLK = 24 + 32* TOFF (1 will work with minimum blank time of 24 clocks) |
| TBL         | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, a setting of 2 or 3 will be required.                                                                                                                 | 0         | 16 t CLK                                                                                  |
| TBL         | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, a setting of 2 or 3 will be required.                                                                                                                 | 1         | 24 t CLK                                                                                  |
| TBL         | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, a setting of 2 or 3 will be required.                                                                                                                 | 2         | 32 t CLK                                                                                  |
| TBL         | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 1 or 2 is good. For highly capacitive loads, a setting of 2 or 3 will be required.                                                                                                                 | 3         | 40 t CLK                                                                                  |
| HSTRT       | Hysteresis start setting. This value is an offset from the hysteresis end value HEND .                                                                                                                                                                                                                                                                                    | 0…7       | HSTRT =1…8 This value adds to HEND.                                                       |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited.                                                                                                                                                                | 0…2       | - 3… -1: negative HEND                                                                    |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited.                                                                                                                                                                | 3         | 0: zero HEND                                                                              |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. The sum HSTRT + HEND must be ≤ 16. At a current setting of max. 30 (amplitude reduced to 240), the sum is not limited.                                                                                                                                                                | 4…15      | 1…12: positive HEND                                                                       |

Even at HSTRT=0 and HEND=0, the TMC22xx sets a minimum hysteresis via analog circuitry.

## EXAMPLE:

A hysteresis of 4 has been chosen. You might decide to not use hysteresis decrement. In this case set:

| HEND =6   | (sets an effective end value of 6-3=3)   |
|-----------|------------------------------------------|
| HSTRT =0  | (sets minimum hysteresis, i.e. 1: 3+1=4) |

In order to take advantage of the variable hysteresis, we can set most of the value to the HSTRT, i.e., 4, and the remaining 1 to hysteresis end. The resulting configuration register values are as follows:

HEND =0 HSTRT =6

(sets an effective end value of -3)

(sets an effective start value of hysteresis end +7: 7-3=4)

## 8 Selecting Sense Resistors

Set the desired maximum motor current by selecting an appropriate value for the sense resistor. The following  table  shows  the  RMS  current  values  which  can  be  reached  using  standard  resistors  and motor types fitting without additional motor current scaling.

| CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT                  | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   |
|------------------------------------------------------|---------------------------------------------------------------------|------------------------------------------------------|
| R SENSE [Ω]                                          | RMS current [A] VREF=2.5V (or open), IRUN =31, vsense =0 (standard) | Fitting motor type (examples)                        |
| 1.00                                                 | 0.22                                                                |                                                      |
| 0.82                                                 | 0.27                                                                |                                                      |
| 0.75                                                 | 0.29                                                                | 300mA motor                                          |
| 0.68                                                 | 0.32                                                                | 400mA motor                                          |
| 0.50                                                 | 0.43                                                                |                                                      |
| 470m                                                 | 0.46                                                                | 500mA motor                                          |
| 390m                                                 | 0.55                                                                | 600mA motor                                          |
| 330m                                                 | 0.64                                                                | 700mA motor                                          |
| 270m                                                 | 0.77                                                                | 800mA motor                                          |
| 220m                                                 | 0.92                                                                | 1A motor                                             |
| 180m                                                 | 1.09                                                                | 1.2A motor                                           |
| 150m                                                 | 1.28                                                                |                                                      |
| 120m                                                 | 1.53*)                                                              |                                                      |
| 100m                                                 | 1.77*)                                                              | 1.5A motor                                           |

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. Due to chopper operation the sense resistors see pulsed current from the MOSFET bridges. Therefore, a  low-inductance  type  such  as  film  or  composition  resistors  is  required  to  prevent  voltage  spikes causing ringing on the sense voltage inputs leading to unstable measurement results. Also, a lowinductance, low-resistance PCB layout is essential. Any common GND path for the two sense resistors must  be  avoided,  because  this  would  lead  to  coupling  between  the  two  current  sense  signals.  A massive ground plane is best. Please also refer to layout considerations in chapter 19.

The  sense  resistor  needs  to  be  able  to  conduct  the  peak  motor  coil  current  in  motor  standstill conditions  unless  standby  power  is  reduced.  Under  normal  conditions,  the  sense  resistor  conducts less than the coil RMS current, because no current flows through the sense resistor during the slow decay phases. A 0.5W type is sufficient for most applications up to 1.2A RMS current.

## Attention

Properly  select  sense  resistors  especially  for  applications,  where  the  ENN  pin  is  fixed  to  an  active level,  because  the  full  current  for  default  setting IRUN =31  will  flow  through  the  motor  right  after power up for a short moment, until the driver goes to hold current reduction, or a lower setting has been issued  via  UART.  Too  low  resistor  values  not  matching  the  motor,  thus  lead  to  a  significant increase in supply current, up to the current limit determined by the motor coil resistance.

## Attention

Be sure to use a symmetrical sense resistor layout  and  short  and  straight  sense  resistor  traces  of identical length. Well matching sense resistors ensure best performance.

A compact layout with massive ground plane is best to avoid parasitic resistance effects.

## 9 Motor Current Control

The  basic  motor  current  is  set  by  the  resistance  of  the  sense  resistors.  Several  possibilities  allow scaling  down  motor  current,  e.g.,  to  adapt  for  different  motors,  or  to  reduce  motor  current  in standstill or low load situations.

| METHODS FOR SCALING MOTOR CURRENT   | METHODS FOR SCALING MOTOR CURRENT                                          | METHODS FOR SCALING MOTOR CURRENT                                 | METHODS FOR SCALING MOTOR CURRENT                                                                                                                                         |
|-------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method                              | Parameters                                                                 | Range                                                             | Primary Use                                                                                                                                                               |
| Pin VREF voltage (chapter 9.1)      | VREF input scales IRUN and IHOLD . Can be disabled by GCONF.i_scale_analog | 2.5V: 100% … 0.5V: 20% >2.5V or open: 100% <0.5V: not recommended | - Fine tuning of motor current to fit the motor type - Manual tuning via poti - Delayed or soft power-up - Standstill current reduction (preferred only with SpreadCycle) |
| Pin ENN                             | Disable / enable driver stage                                              | 0: Motor enable 1: Motor disable                                  | - Disable motor to allow freewheeling                                                                                                                                     |
| Pin PDN_UART                        | Disable / enable standstill current reduction to IHOLD                     | 0: Standstill current reduction enabled. 1: Disable               | - Enable current reduction to reduce heat up in stand still                                                                                                               |
| OTP memory                          | OTP_IHOLD , OTP_IHOLDDELAY                                                 | 9% to 78% standby current. Reduction in about 300ms to 2.5s       | - Program current reduction to fit application for highest efficiency and lowest heat up                                                                                  |
| OTP memory                          | otp_internalRsense                                                         | 0: Use sense resistors 1: Internal resistors                      | - Save two sense resistors on BOM, set current by single inexpensive 0603 resistor.                                                                                       |
| UART interface                      | IHOLD_IRUN TPOWERDOWN OTP                                                  | IRUN , IHOLD : 1/32 to 32/32 of full- scale current.              | - Fine programming of run and hold (stand still) current - Change IRUN for situation specific motor current - Set OTP options                                             |
| UART interface                      | CHOPCONF.vsense flag                                                       | 0: Normal, most robust 1: Reduced voltage level                   | - Set vsense for half power dissipation in sense resistor to use smaller 0.25W resistors.                                                                                 |

Select the sense resistor to deliver enough current for the motor at full current scale (VREF=2.5V). This is the default current scaling ( IRUN = 31).

## STANDALONE MODE RMS RUN CURRENT CALCULATION:

<!-- formula-not-decoded -->

IRUN and IHOLD allow for scaling of the actual current scale ( CS ) from 1/32 to 32/32 when using UART interface, or via automatic standstill current reduction:

## RMS CURRENT CALCULATION WITH UART CONTROL OPTIONS OR HOLD CURRENT SETTING:

<!-- formula-not-decoded -->

CS is the current scale setting as set by the IHOLD and IRUN .

VFS is the full-scale voltage  as  determined  by vsense control bit (please refer to electrical characteristics, VSRTL and VSRTH). Default is 325mV.

With analog scaling of VFS ( I\_scale\_analog =1, default), the resulting voltage VFS ' is calculated by:

<!-- formula-not-decoded -->

with VVREF the voltage on pin VREF in the range 0V to V5VOUT/2

## Hint

For best precision of current setting, measure and fine tune the current in the application.

| PARAMETERS FOR MOTOR CURRENT CONTROL   | PARAMETERS FOR MOTOR CURRENT CONTROL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | PARAMETERS FOR MOTOR CURRENT CONTROL   | PARAMETERS FOR MOTOR CURRENT CONTROL                                                                    |
|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------------------|
| Parameter                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Setting                                | Comment                                                                                                 |
| IRUN                                   | Current scale when motor is running. Scales coil current values as taken from the internal sine wave table. For high precision motor operation, work with a current scaling factor in the range 16 to 31, because scaling down the current values reduces the effective microstep resolution by making microsteps coarser.                                                                                                                                                                                                            | 0 … 31                                 | scaling factor 1/32, 2/32, … 32/32 IRUN is full scale (setting 31) in standalone mode.                  |
| IHOLD                                  | Identical to IRUN , but for motor in stand still.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 0 … 31                                 | scaling factor 1/32, 2/32, … 32/32 IRUN is full scale (setting 31) in standalone mode.                  |
| IHOLD DELAY                            | Allows smooth current reduction from run current to hold current. IHOLDDELAY controls the number of clock cycles for motor power down after TPOWERDOWN in increments of 2^18 clocks: 0=instant power down, 1..15: Current reduction delay per current step in multiple of 2^18 clocks. Example: When using IRUN =31 and IHOLD =16, 15 current steps are required for hold current reduction. A IHOLDDELAY setting of 4 thus results in a power down time of 4*15*2^18 clock cycles, i.e. roughly one second at 16MHz clock frequency. | 0 1 … 15                               | instant IHOLD 1*2 18 … 15*2 18 clocks per current decrement                                             |
| TPOWER DOWN                            | Sets the delay time from stand still ( stst ) detection to motor current power down. Time range is about 0 to 5.6 seconds. Setting 0 is no delay, 1 a minimum delay. Further increment is in discrete steps of 2^18 clock cycles.                                                                                                                                                                                                                                                                                                     | 0 … 255                                | 0…((2^8) -1) * 2^18 t CLK A minimum setting of 2 is required to allow automatic tuning of PWM_OFFS_AUTO |
| vsense                                 | Allows control of the sense resistor voltage range for full scale current. The low voltage range allows a reduction of sense resistor power dissipation.                                                                                                                                                                                                                                                                                                                                                                              | 0                                      | V FS = 0.32 V                                                                                           |
| vsense                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 1                                      | V FS = 0.18 V                                                                                           |

## 9.1 Analog Current Scaling VREF

When a high flexibility of the output current scaling is desired, the analog input of the driver can be used for current control, rather than choosing a different set of sense resistors or scaling down the run  current  via  the  interface  using IRUN or IHOLD parameters.  This  way,  a  simple  voltage  divider adapts a board to different motors.

## VREF SCALES THE MOTOR CURRENT

The  TMC22xx  provides  an  internal  reference  voltage  for  current  control,  directly  derived  from  the 5VOUT supply output. Alternatively, an external reference voltage can be used. This reference voltage becomes scaled down for the chopper comparators. The chopper comparators compare the voltages on BRA and BRB to the scaled reference voltage for current regulation. When I\_scale\_analog in GCONF is  enabled  (default),  the  external  voltage  on  VREF  is  amplified  and  filtered  and  becomes  used  as reference  voltage.  A  voltage  of  2.5V  (or  any  voltage  between  2.5V  and  5V)  gives  the  same  current

scaling as the internal reference voltage. A voltage between 0V and 2.5V linearly scales the current between 0 and the current scaling defined by the sense resistor setting. It is not advised to work with reference voltages below about 0.5V to 1V for full scale, because relative analog noise caused by digital  circuitry  and  power  supply  ripple  has  an  increased  impact  on  the  chopper  precision  at  low VREF  voltages.  For  best  precision,  choose  the  sense  resistors  in  a  way  that  the  desired  maximum current is reached with VREF in the range 2V to 2.4V. Be sure to optimize the chopper settings for the normal run current of the motor.

## DRIVING VREF

The easiest way to provide a voltage to VREF is to use a voltage divider from a stable supply voltage or  a  microcontroller's  DAC  output.  A  PWM  signal  also  allows  current  control.  The  PWM becomes transformed to an analog voltage using an additional R/C low-pass at the VREF pin. The PWM duty cycle  controls  the  analog  voltage.  Choose  the  R  and  C  values  to  form  a  low  pass  with  a  corner frequency of several milliseconds while using PWM frequencies well above 10 kHz. VREF additionally provides an internal low-pass filter with 3.5kHz bandwidth.

## Hint

Using a low reference voltage (e.g. below 1V), for adaptation of a high current driver to a low current motor will lead to reduced analog  performance. Adapt the sense resistors to fit the desired motor current for the best result.

<!-- image -->

Fixed resistor divider to set current scale (use external reference for enhanced precision)

Precision current scaler

Figure 9.1 Scaling the motor current using the analog input

Simple PWM based current scaler

## 10 Internal Sense Resistors

<!-- image -->

<!-- image -->

The  TMC22xx  provides  the  option  to  eliminate  external  sense  resistors.  In  this  mode  the  external sense  resistors  become  omitted  (shorted)  and  the  internal  on-resistance  of  the  power  MOSFETs  is used  for  current  measurement  (see  chapter  0).  As  MOSFETs  are  both,  temperature  dependent  and subject to production stray, a tiny external resistor connected from +5VOUT to VREF provides a precise absolute current reference. This resistor converts the 5V voltage into a reference current. Be sure to directly attach BRA and BRB pins to GND in this mode near the IC package. The mode is enabled by setting internal\_Rsense in GCONF (OTP option).

| COMPARING INTERNAL SENSE RESISTORS VS. SENSE RESISTORS   | COMPARING INTERNAL SENSE RESISTORS VS. SENSE RESISTORS             | COMPARING INTERNAL SENSE RESISTORS VS. SENSE RESISTORS   |
|----------------------------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------|
| Item                                                     | Internal Sense Resistors                                           | External Sense Resistors                                 |
| Ease of use                                              | Need to set OTP parameter first                                    | (+) Default                                              |
| Cost                                                     | (+) Save cost for sense resistors                                  |                                                          |
| Current precision                                        | Slightly reduced                                                   | (+) Good                                                 |
| Current Range Recommended                                | 200mA RMS to 1.2A RMS                                              | 50mA to 1.4A RMS                                         |
| Recommended chopper                                      | StealthChop, SpreadCycle shows slightly reduced performance at >1A | StealthChop or SpreadCycle                               |

While the RDSon based measurements bring benefits concerning cost and size of the driver, it gives slightly less precise  coil current regulation when compared to external sense resistors. The internal sense resistors have a certain temperature dependence, which is automatically compensated by the driver IC. However, for high current motors, a temperature gradient between the ICs internal sense resistors and the compensation circuit will lead to an initial current overshoot of some 10% during driver IC heat up. While this phenomenon shows for roughly a second, it might even be beneficial to enable increased torque during initial motor acceleration.

## PRINCIPLE OF OPERATION

A reference current into the VREF pin is used as reference for the motor current. In order to realize a certain current, a single resistor (RREF) can be connected between 5VOUT and VREF (pls. refer the table for the choice of the resistor). VREF input resistance is about 1kOhm. The resulting current into VREF is amplified 3000 times. Thus, a current of 0.5mA yields a motor current of 1.5A peak. For calculation of the reference resistor, the internal resistance of VREF needs to be considered additionally.

| CHOICE OF R REF FOR OPERATION WITHOUT SENSE RESISTORS   | CHOICE OF R REF FOR OPERATION WITHOUT SENSE RESISTORS   | CHOICE OF R REF FOR OPERATION WITHOUT SENSE RESISTORS   |
|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|
| R REF [Ω]                                               | Peak current [A] ( CS =31, vsense =0)                   | RMS current [A] ( CS =31, vsense =0)                    |
| 6k8                                                     | 1.92                                                    | 1.35                                                    |
| 7k5                                                     | 1.76                                                    | 1.24                                                    |
| 8k2                                                     | 1.63                                                    | 1.15                                                    |
| 9k1                                                     | 1.49                                                    | 1.05                                                    |
| 10k                                                     | 1.36                                                    | 0.96                                                    |
| 12k                                                     | 1.15                                                    | 0.81                                                    |
| 15k                                                     | 0.94                                                    | 0.66                                                    |
| 18k                                                     | 0.79                                                    | 0.55                                                    |
| 22k                                                     | 0.65                                                    | 0.45                                                    |
| 27k                                                     | 0.60                                                    | 0.42                                                    |
| 33k                                                     | 0.54                                                    | 0.38                                                    |

vsense =1 allows a lower peak current setting of about 55% of the value yielded with vsense =0 (as specified by VSRTH / VSRTL ).

In RDSon measurement mode, connect the BRA and BRB pins to GND using the shortest possible path (i.e.  lowest  possible  PCB  resistance).  RDSon based measurement gives  best  results  when combined with StealthChop. When  using  SpreadCycle  with  RDSon  based  current measurement,  slightly asymmetric current measurement for positive currents (on phase) and negative currents (fast decay phase)  may  result  in  chopper  noise.  This  especially  occurs  at  high  die  temperature  and  increased motor current.

## Note

The absolute current levels achieved with RDSon based current sensing may depend on PCB layout exactly like with external sense resistors, because trace resistance on BR pins will add to the effective sense resistance. Therefore, we recommend to measure and calibrate the current setting within the application.

## Thumb rule

RDSon based current sensing works best for motors with up to 1A RMS current. The best results are yielded with StealthChop operation in combination with RDSon based current sensing.

For  most  precise  current  control  and  for  best  results  with  SpreadCycle,  it  is  recommended  to  use external 1% sense resistors rather than RDSon based current control.

## 11 STEP/DIR Interface

The STEP and DIR inputs provide a simple, standard interface compatible with many existing motion controllers.  The  MicroPlyer  step  pulse  interpolator  brings  the  smooth  motor  operation  of  highresolution microstepping to applications originally designed for coarser stepping.

## 11.1 Timing

Figure 11.1 shows the timing parameters for the STEP and DIR signals, and the table below gives their specifications. Only rising edges are active. STEP and DIR are sampled and synchronized to the system clock. An internal analog filter removes glitches on the signals, such as those caused by long PCB traces. If the signal source is far from the chip, and especially if the signals are carried on cables, the signals should be filtered or differentially transmitted.

<!-- image -->

Figure 11.1 STEP and DIR timing, Input pin filter

| STEP and DIR interface timing                      | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|----------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                          | Symbol                                     | Conditions                                 | Min                                        | Typ                                        | Max                                        | Unit                                       |
| step frequency (at maximum microstep resolution)   | f STEP                                     |                                            |                                            |                                            | ½ f CLK                                    |                                            |
| fullstep frequency                                 | f FS                                       |                                            |                                            |                                            | f CLK /512                                 |                                            |
| STEP input minimum low time                        | t SL                                       |                                            | max(t FILTSD , t CLK +20)                  | 100                                        |                                            | ns                                         |
| STEP input minimum high time                       | t SH                                       |                                            | max(t FILTSD , t CLK +20)                  | 100                                        |                                            | ns                                         |
| DIR to STEP setup time                             | t DSU                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| DIR after STEP hold time                           | t DSH                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| STEP and DIR spike filtering time *)               | t FILTSD                                   | rising and falling edge                    | 13                                         | 20                                         | 30                                         | ns                                         |
| STEP and DIR sampling relative to rising CLK input | t SDCLKHI                                  | before rising edge of CLK input            |                                            | t FILTSD                                   |                                            | ns                                         |

## 11.2 Changing Resolution

The TMC22xx includes an internal microstep table with 1024 sine wave entries to generate sinusoidal motor coil currents. These 1024 entries correspond to one electrical revolution or four fullsteps. The microstep resolution setting determines the step width taken within the table. Depending on the DIR input, the microstep counter is increased (DIR=0) or decreased (DIR=1) with each STEP pulse by the step  width.  The  microstep  resolution  determines  the  increment  respectively  the  decrement.  At maximum  resolution,  the  sequencer  advances  one  step  for  each  step  pulse.  At  half  resolution,  it advances  two  steps.  Increment  is  up  to  256  steps  for  fullstepping.  The  sequencer  has  special provision to allow seamless switching between different microstep rates at any time. When switching to a lower microstep resolution, it calculates the nearest step within the target resolution and reads the  current  vector  at  that  position.  This  behavior  especially  is  important  for  low  resolutions  like fullstep and halfstep, because any failure in the step sequence would lead to asymmetrical run when comparing a motor running clockwise and counterclockwise.

## EXAMPLES:

Fullstep

:

Half step :

Quarter step :

Cycles through table positions: 128, 384, 640 and 896 (45°, 135°, 225° and 315° electrical position, both  coils on  at  identical current). The  coil current in  each  position corresponds to the RMS-Value (0.71 * amplitude). Step size is 256 (90° electrical)

The first table position is 64 (22.5° electrical), Step size is 128 (45° steps)

The first table position is 32 (90°/8=11.25° electrical), Step size is 64 (22.5° steps)

This way equidistant steps result and they are identical in both rotation directions. Some older drivers also use zero current (table entry 0, 0°) as well as full current (90°) within the step tables. This kind of stepping is avoided because it provides less torque and has a worse power dissipation in driver and motor.

| Step position   |   table position | current coil A   | current coil B   |
|-----------------|------------------|------------------|------------------|
| Half step 0     |               64 | 38.3%            | 92.4%            |
| Full step 0     |              128 | 70.7%            | 70.7%            |
| Half step 1     |              192 | 92.4%            | 38.3%            |
| Half step 2     |              320 | 92.4%            | -38.3%           |
| Full step 1     |              384 | 70.7%            | -70.7%           |
| Half step 3     |              448 | 38.3%            | -92.4%           |
| Half step 4     |              576 | -38.3%           | -92.4%           |
| Full step 2     |              640 | -70.7%           | -70.7%           |
| Half step 5     |              704 | -92.4%           | -38.3%           |
| Half step 6     |              832 | -92.4%           | 38.3%            |
| Full step 3     |              896 | -70.7%           | 70.7%            |
| Half step 7     |              960 | -38.3%           | 92.4%            |

See chapter 0 for resolution settings available in stand-alone mode.

## 11.3 MicroPlyer Step Interpolator and Stand Still Detection

For each active edge on STEP, MicroPlyer produces microsteps at 256x resolution, as shown in Figure 11.2. It interpolates the time in between of two step impulses at the step input based on the last step interval. This way, from 2 microsteps (128 microstep to 256 microstep interpolation) up to 256 microsteps (full step input to 256 microsteps) are driven for a single step pulse.

The step rate for the interpolated 2 to 256 microsteps is determined by measuring the time interval of the previous step period and dividing it into up to 256 equal parts. The maximum time between two microsteps corresponds to 2 20  (roughly one million system clock cycles), for an even distribution of 256 microsteps. At 12 MHz system clock frequency, this results in a minimum step input frequency of roughly 12 Hz for MicroPlyer operation. A lower step rate causes a standstill event to be detected. At that frequency, microsteps occur at a rate of (system clock frequency)/2 16  ~ 256 Hz. When a stand still is detected, the driver automatically begins standby current reduction if selected by pin PDN.

Attention

MicroPlyer only works perfectly with a jitter-free STEP frequency.

Figure 11.2 MicroPlyer microstep interpolation with rising STEP frequency (Example: 16 to 256)

<!-- image -->

In Figure 11.2, the first STEP cycle is long enough to set the stst bit standstill. Detection of standstill will enable the standby current reduction. This bit is cleared on the next STEP active edge. Then, the external STEP frequency increases. After one cycle at the higher rate MicroPlyer adapts the interpolated microstep rate to the higher frequency. During the last cycle at the slower rate,  MicroPlyer did not generate all 16 microsteps, so there is a small jump in motor angle between the first and second cycles at the higher rate.

## 11.4 Index Output

An active INDEX output signals that the sine curve of motor coil B is at its positive zero transition. This correlates to the zero point of the microstep sequence. Usually, the cosine curve of coil A is at its maximum at the same time. Thus, the index signal is active once within each electrical period and corresponds to a defined position of the motor within a sequence of four fullsteps. The INDEX output this way allows the detection of a certain microstep pattern, and thus helps to detect a position with more precision than a stop switch can do.

Figure 11.3 Index signal at positive zero transition of the coil B sine curve

<!-- image -->

## Hint

The index output allows precise detection of the microstep position within one electrical wave, i.e., within a range of four fullsteps. With this, homing accuracy and reproducibility can be enhanced to microstep accuracy, even when using an inexpensive home switch.

## Hint

In StealthChop at high velocity, the current waves will appear shifted against the index pulse, due to the motor current lagging the voltage driven into the coil.

## 12 Internal Step Pulse Generator

<!-- image -->

The TMC22xx family integrates a high-resolution step pulse generator, allowing motor motion via the UART  interface.  However,  no  velocity  ramping  is  provided.  Ramping  is  not  required,  if  the  target motion velocity is smaller than the start &amp; stop frequency of the motor. For higher velocities, ramp up the frequency in small steps to accelerate the motor, and ramp down again to decelerate the motor. Figure  12.1  shows  an  example  motion  profile  ramping  up  the  motion  velocity  in  discrete  steps. Choose the ramp velocity steps considerably smaller than the maximum start velocity of the motor, because motor torque drops at higher velocity, and motor load at higher velocity typically increases.

<!-- image -->

Figure 12.1 Software generated motion profile

| PARAMETER VS. UNITS         | PARAMETER VS. UNITS                       | PARAMETER VS. UNITS                                                                                                                                                                                                             |
|-----------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter / Symbol          | Unit                                      | calculation / description / comment                                                                                                                                                                                             |
| f CLK [Hz]                  | [Hz]                                      | clock frequency of the TMC22xx in [Hz]                                                                                                                                                                                          |
| µstep velocity v[Hz]        | µsteps / s                                | v[Hz] = VACTUAL [22xx] * ( f CLK [Hz] / 2^24 ) With internal oscillator: v[Hz] = VACTUAL [22xx] * 0.715Hz                                                                                                                       |
| USC microstep count         | counts                                    | microstep resolution in number of microsteps (i.e., the number of microsteps between two fullsteps - normally 256)                                                                                                              |
| rotations per second v[rps] | rotations / s                             | v[rps] = v[Hz] / USC / FSC FSC: motor fullsteps per rotation, e.g., 200                                                                                                                                                         |
| TSTEP , TPWMTHRS            | -                                         | TSTEP = f CLK / f 256STEP = f CLK / (f STEP *256/USC) = 2^24 / ( VACTUAL *256/USC) The time reference for velocity threshold is referred to the actual 1/256 microstep frequency of the step input respectively velocity v[Hz]. |
| VACTUAL                     | Two's complement signed internal velocity | VACTUAL [22xx] = v[Hz] / ( f CLK [Hz] / 2^24 ) With internal oscillator: VACTUAL [22xx] = v[Hz] / 0.715Hz                                                                                                                       |

## Hint

To  monitor  internal  step  pulse  execution,  program  the  INDEX  output  to  provide  step  pulses ( GCONF.index\_step ).  It  toggles  upon  each  step.  Use  a  timer  input  on  your  CPU  to  count  pulses. Alternatively,  regularly  poll MSCNT to  grasp  steps  done  in  the  previous  polling  interval.  It  wraps around from 1023 to 0.

## 13 Driver Diagnostic Flags

The TMC22xx drivers supply a complete set of diagnostic and protection capabilities, like short to GND protection, short to VS protection and undervoltage detection. A detection of an open load condition allows testing if a motor coil connection is interrupted. See the DRV\_STATUS table for details.

## 13.1 Temperature Measurement

The  driver  integrates  a  four-level  temperature  sensor  (pre-warning  and  thermal  shutdown)  for diagnostics and for protection of the IC against excess heat. The thresholds can be adapted by UART or OTP programming. Heat is mainly generated by the motor driver stages, and, at increased voltage, by  the  internal  voltage  regulator.  Most  critical  situations,  where  the  driver  MOSFETs  could  be overheated, are avoided by the short to GND protection. For many applications, the overtemperature pre-warning will indicate an abnormal operation situation and can be used to initiate user warning or power reduction measures like motor current reduction. The thermal shutdown is just an emergency measure and temperature rising to the shutdown level should be prevented by design.

| TEMPERATURE THRESHOLDS       | TEMPERATURE THRESHOLDS                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Overtemperature Setting      | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 143°C (OTPW: 120°C)          | Default setting. This setting is safest to switch off the driver stage before the IC can be destroyed by overheating. On a large PCB, the power MOSFETs reach roughly 150°C peak temperature when the temperature detector is triggered with this setting. This is a trip typical point for overtemperature shut down. The overtemperature pre-warning threshold of 120°C gives lots of headroom to react to high driver temperature, e.g. by reducing motor current. |
| 150°C (OTPW: 120°C or 143°C) | Optional setting (OTP or UART). For small PCBs with high thermal resistance between PCB and environment, this setting provides some additional headroom. The small PCB shows less temperature difference between the MOSFETs and the sensor.                                                                                                                                                                                                                          |
| 157°C (OTPW: 143°C)          | Optional setting (UART). For applications, where a stop of the motor cannot be tolerated, this setting provides highest headroom, e.g. at high environment temperature ratings. Using the 143°C overtemperature pre-warning to reduce motor current ensures that the motor is not switched off by the thermal threshold.                                                                                                                                              |

## Attention

Overtemperature protection cannot in all cases avoid thermal destruction of the IC. In case the rated motor current is exceed, e.g. by operating a motor in  StealthChop with wrong parameters, or with automatic tuning parameters not fitting the operating conditions, excess heat generation can quickly heat  up  the  driver  before  the  overtemperature  sensor  can  react.  This  is  due  to  a  delay  in  heat conduction over the IC die.

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the pre-warning level ( otpw ) to avoid continuous heating to the shutdown level.

## 13.2 Short Protection

The TMC22xx power stages are protected against a short circuit condition by an additional measurement of the current flowing through each of the power stage MOSFETs. This is important, as most short circuit conditions result from a motor cable insulation defect, e.g. when touching the conducting parts connected to the system ground. The short detection is protected against spurious triggering, e.g. by ESD discharges, by retrying three times before switching off the motor.

Once a short condition is safely detected, the corresponding driver bridge (A or B) becomes switched off, and the s2ga or s2gb flag, respectively s2vsa or s2vsb becomes set. In order to restart the motor, disable and re-enable the driver. Note, that short protection cannot protect the system and the power stages for all possible short events, as a short event is rather undefined and a complex network of external components may be involved. Therefore, short circuits should basically be avoided.

## 13.3 Open Load Diagnostics

<!-- image -->

Interrupted  cables  are  a  common  cause  for  systems  failing,  e.g.  when  connectors  are  not  firmly plugged. The TMC22xx detects open load conditions by checking if it can reach the desired motor coil current. This way, also undervoltage conditions, high motor  velocity settings or short  and overtemperature  conditions  may  cause  triggering  of  the  open  load  flag,  and  inform  the  user,  that motor torque may suffer. In motor stand still, open load cannot  always be measured, as the coils might eventually have zero current.

Open load detection is provided for system debugging.

To safely detect an interrupted coil connection, operate in SpreadCyle, and check the open load flags following a motion of minimum four times the selected microstep resolution into a single direction using  low  or  nominal  motor  velocity  operation,  only.  However,  the ola and olb flags  have  just informative character and do not cause any action of the driver.

## 13.4 Diagnostic Output

The  diagnostic  output  DIAG  and  the  index  output  INDEX  provide  important  status  information.  An active  DIAG  output  shows  that  the  driver  cannot  work  normally.  The  INDEX  output  signals  the microstep counter zero position, to allow referencing (homing) a drive to a certain current pattern. The  function  set  of  the  INDEX  output  can  be  modified  by  UART.  Figure  13.1  shows  the  available signals and control bits.

Figure 13.1 DIAG and INDEX outputs

<!-- image -->

## 14 Quick Configuration Guide

<!-- image -->

This  guide  is  meant  as  a  practical  tool  to  come  to  a  first  configuration.  Do  a  minimum  set  of measurements and decisions for tuning the driver to determine UART settings or OTP parameters. The flow-charts  concentrate  on  the  basic  function  set  to  make  a  motor  run  smoothly.  Once  the  motor runs, you may decide to explore additional features, e.g. freewheeling in more detail. A current probe on one motor coil is a good aid to find the best settings, but it is not a must.

Figure 14.1 Current Setting and first steps with StealthChop

<!-- image -->

Hint

Use the evaluation board to explore settings and to generate the required configuration datagrams.

Figure 14.2 Tuning StealthChop and SpreadCycle

<!-- image -->

Figure 14.3 OTP programming

<!-- image -->

## 15 External Reset

The chip is loaded with default values during power on via its internal power-on reset. Some of the registers are initialized from the OTP at power up. In order to reset the chip to power on defaults, any  of  the  supply  voltages  monitored  by  internal  reset  circuitry  (VS,  +5VOUT  or  VCC\_IO)  must  be cycled. As +5VOUT is the output of the internal voltage regulator, it cannot be cycled via an external source except by cycling VS. It is easiest and safest to cycle VCC\_IO to completely reset the chip. Also, current consumed from VCC\_IO is low and therefore it has simple driving requirements. Due to the input protection diodes not allowing the digital inputs to rise above VCC\_IO level, all inputs must be driven low during this reset operation. When this is not possible, an input protection resistor may be used to limit current flowing into the related inputs.

## 16 Clock Oscillator and Input

The clock is the timing reference for all functions: the chopper frequency, the blank time, the standstill power  down  timing,  and  the  internal  step  pulse  generator  etc.  The  on-chip  clock  oscillator  is calibrated in order to provide timing precise enough for most operation cases.

## USING THE INTERNAL CLOCK

Directly  tie  the  CLK  input  to  GND  near  to  the  IC  if  the  internal  clock  oscillator  is  to  be  used.  The internal clock frequency is factory-trimmed to 12MHz by OTP programming.

## USING AN EXTERNAL CLOCK

When an external clock is available, a frequency of 10 MHz to 16 MHz is recommended for optimum performance. The duty cycle of the clock signal is uncritical, as long as minimum high or low input time for the pin is satisfied (refer to electrical characteristics). Up to 18 MHz can be used, when the clock duty cycle is 50%. Make sure, that the clock source supplies clean CMOS output logic levels and steep slopes when using a high clock frequency. The external clock input is enabled with the first positive polarity seen on the CLK input. Modifying the clock frequency is an easy way to adapt the StealthChop  chopper  frequency  or  to  synchronize  multiple  drivers.  Working  with  a  very  low  clock frequency down to 4 MHz can help reducing power consumption and electromagnetic emissions, but it will sacrifice some performance.

Use an external clock source to synchronize multiple drivers, or to get precise motor operation with the internal pulse generator for motion. The external clock frequency selection also allows modifying the power down timing and the chopper frequency.

## Hint

Switching off the external clock frequency would stop the chopper and could lead to an overcurrent condition. Therefore, TMC22xx has an internal timeout of 32 internal clocks. In case the external clock fails, it switches back to internal clock.

## 17 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                                                               | Symbol   | Min   | Max        | Unit   |
|---------------------------------------------------------------------------------------------------------|----------|-------|------------|--------|
| Supply voltage operating with inductive load                                                            | V VS     | -0.5  | 39         | V      |
| Supply and bridge voltage max. *)                                                                       | V VMAX   |       | 40         | V      |
| I/O supply voltage                                                                                      | V VIO    | -0.5  | 5.5        | V      |
| 5VOUT supply voltage (when using external supply)                                                       | V 5VOUT  | -0.5  | 5.5        | V      |
| Logic input voltage                                                                                     | V I      | -0.5  | V VIO +0.5 | V      |
| VREF input voltage (Do not exceed both, VCC_IO and 5VOUT by more than 10%, as this enables a test mode) | V VREF   | -0.5  | 6          | V      |
| Maximum current to / from digital pins and analog low voltage I/Os                                      | I IO     |       | +/-10      | mA     |
| 5V regulator output current (internal plus external load)                                               | I 5VOUT  |       | 25         | mA     |
| 5V regulator continuous power dissipation (V VM -5V) * I 5VOUT                                          | P 5VOUT  |       | 0.5        | W      |
| Power bridge repetitive output current                                                                  | I Ox     |       | 2.5        | A      |
| Junction temperature                                                                                    | T J      | -50   | 150        | °C     |
| Storage temperature                                                                                     | T STG    | -55   | 150        | °C     |
| ESD-Protection for interface pins (Human body model, HBM)                                               | V ESDAP  |       | 4          | kV     |
| ESD-Protection for handling (Human body model, HBM)                                                     | V ESD    |       | 1          | kV     |

## 18 Electrical Characteristics

## 18.1 Operational Range

| Parameter                                                                                                  | Symbol   | Min   |    Max | Unit   |
|------------------------------------------------------------------------------------------------------------|----------|-------|--------|--------|
| Junction temperature                                                                                       | T J      | -40   | 125    | °C     |
| Supply voltage (using internal +5V regulator)                                                              | V VS     | 5.5   |  36    | V      |
| Supply voltage (using internal +5V regulator) for OTP programming                                          | V VS     | 6     |  36    | V      |
| Supply voltage (internal +5V regulator bridged: V 5VOUT =V VS )                                            | V VS     | 4.7   |   5.4  | V      |
| I/O supply voltage                                                                                         | V VIO    | 3.00  |   5.25 | V      |
| RMS motor coil current per coil (value for design guideline)                                               | I RMS    |       |   1.2  | A      |
| RMS motor coil current per coil with duty cycle limit, e.g. 1s on, 1s standby (value for design guideline) | I RMS    |       |   1.4  | A      |
| Peak output current per motor coil output (sine wave peak) using external or internal current sensing      | I Ox     |       |   2    | A      |

## 18.2 DC and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| Power supply current                                         | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V                                         | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   |
|--------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Parameter                                                    | Symbol                                    | Conditions                                                                      | Min                                       | Typ                                       | Max                                       | Unit                                      |
| Total supply current, driver disabled I VS                   | I S                                       | f CLK =12MHz                                                                    |                                           | 7                                         | 10                                        | mA                                        |
| Total supply current, operating, I VS                        | I S                                       | f CLK =12MHz, 35kHz chopper, no load                                            |                                           | 7.5                                       |                                           | mA                                        |
| Supply current, driver disabled, dependency on CLK frequency | I VS                                      | f CLK variable                                                                  |                                           | 0.3                                       |                                           | mA/MHz                                    |
| Internal current consumption from 5V supply on 5VOUT pin     | I 5VOUT                                   | f CLK =12MHz, 35kHz chopper                                                     |                                           | 4.5                                       |                                           | mA                                        |
| IO supply current (typ. at 5V)                               | I VIO                                     | no load on outputs, inputs at V IO or GND Excludes pullup / pull-down resistors |                                           | 15                                        | 30                                        | µA                                        |

| Motor driver section         | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V     | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   |
|------------------------------|-----------------------------------------------|-------------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                    | Symbol                                        | Conditions                                      | Min                                           | Typ                                           | Max                                           | Unit                                          |
| RDS ON lowside MOSFET        | R ONL                                         | measure at 100mA, 25°C, static state            |                                               | 0.28                                          | 0.38                                          | Ω                                             |
| RDS ON highside MOSFET       | R ONH                                         | measure at 100mA, 25°C, static state            |                                               | 0.29                                          | 0.39                                          | Ω                                             |
| slope, MOSFET turning on     | t SLPON                                       | measured at 700mA load current (resistive load) | 40                                            | 80                                            | 160                                           | ns                                            |
| slope, MOSFET turning off    | t SLPOFF                                      | measured at 700mA load current (resistive load) | 40                                            | 80                                            | 160                                           | ns                                            |
| Current sourcing, driver off | I OIDLE                                       | O XX pulled to GND                              | 120                                           | 180                                           | 250                                           | µA                                            |

| Charge pump                                              | DC-Characteristics   | DC-Characteristics                  | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------------------------------|----------------------|-------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                | Symbol               | Conditions                          | Min                  | Typ                  | Max                  | Unit                 |
| Charge pump output voltage                               | V VCP -V VS          | operating, typical f chop <40kHz    | 4.0                  | V 5VOUT - 0.3        | V 5VOUT              | V                    |
| Charge pump voltage threshold for undervoltage detection | V VCP -V VS          | using internal 5V regulator voltage | 3.3                  | 3.6                  | 4.0                  | V                    |
| Charge pump frequency                                    | f CP                 |                                     |                      | 1/16 f CLKOSC        |                      |                      |

| Linear regulator                                               | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   |
|----------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Parameter                                                      | Symbol                                    | Conditions                                | Min                                       | Typ                                       | Max                                       | Unit                                      |
| Output voltage                                                 | V 5VOUT                                   | I 5VOUT = 0mA T J = 25°C                  | 4.80                                      | 5.0                                       | 5.25                                      | V                                         |
| Output resistance                                              | R 5VOUT                                   | Static load                               |                                           | 1                                         |                                           |                                          |
| Deviation of output voltage over the full temperature range    | V 5VOUT(DEV)                              | I 5VOUT = 5mA T J = full range            |                                           | +/-30                                     | +/-100                                    | mV                                        |
| Deviation of output voltage over the full supply voltage range | V 5VOUT(DEV)                              | I 5VOUT = 5mA V VS = variable             |                                           | +/-15                                     | +/-30                                     | mV / 10V                                  |

| Clock oscillator and input                                      | Timing-Characteristics   | Timing-Characteristics              | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   |
|-----------------------------------------------------------------|--------------------------|-------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                                                       | Symbol                   | Conditions                          | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =-50°C                          |                          | 11.7                     |                          | MHz                      |
| (factory calibrated)                                            | f CLKOSC                 | t J = 25°C                          | 11.5                     | 12.0                     | 12.5                     | MHz                      |
| (factory calibrated)                                            | f CLKOSC                 | t J =150°C                          |                          | 12.1                     |                          | MHz                      |
| External clock frequency (operating)                            | f CLK                    |                                     | 4                        | 10-16                    | 18                       | MHz                      |
| External clock high / low level time                            | t CLK                    | CLK driven to 0.1 V VIO / 0.9 V VIO | 16                       |                          |                          | ns                       |
| External clock first pulse to trigger switching to external CLK | t CLKH / t CLKL          | CLK driven high                     | 30                       | 25                       |                          | ns                       |
| External clock timeout detection in cycles of internal f CLKOSC | x timeout                | External clock stuck at low or high | 32                       |                          | 48                       | cycles f CLKOSC          |

| Detector levels                                                                   | DC-Characteristics   | DC-Characteristics                                       | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-----------------------------------------------------------------------------------|----------------------|----------------------------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                                         | Symbol               | Conditions                                               | Min                  | Typ                  | Max                  | Unit                 |
| V VS undervoltage threshold for RESET                                             | V UV_VS              | V VS rising                                              | 3.5                  | 4.2                  | 4.6                  | V                    |
| V 5VOUT undervoltage threshold for RESET                                          | V UV_5VOUT           | V 5VOUT rising                                           |                      | 3.5                  |                      | V                    |
| V VCC_IO undervoltage threshold for RESET                                         | V UV_VIO             | V VCC_IO rising (delay typ. 10µs)                        | 2.1                  | 2.55                 | 3.0                  | V                    |
| V VCC_IO undervoltage detector hysteresis                                         | V UV_VIOHYST         |                                                          |                      | 0.3                  |                      | V                    |
| Short to GND detector threshold (V VS - V Ox )                                    | V OS2G               |                                                          | 2                    | 2.5                  | 3                    | V                    |
| Short to VS detector threshold (V Ox )                                            | V OS2VS              |                                                          | 1.6                  | 2                    | 2.3                  | V                    |
| Short detector delay (high side / low side switch on to short detected)           | t S2G                | High side output clamped to V SP -3V                     | 0.8                  | 1.3                  | 2                    | µs                   |
| Overtemperature prewarning 120°C                                                  | t OTPW               | Temperature rising                                       | 100                  | 120                  | 140                  | °C                   |
| Overtemperature shutdown or prewarning 143°C (appr. 153°C IC peak temp.)          | t OT143              | Temperature rising                                       | 128                  | 143                  | 163                  | °C                   |
| Overtemperature shutdown 150°C (appr. 160°C IC peak temp.)                        | t OT150              | Temperature rising                                       | 135                  | 150                  | 170                  | °C                   |
| Overtemperature shutdown 157°C (appr. 167°C IC peak temp.)                        | t OT157              | Temperature rising                                       | 142                  | 157                  | 177                  | °C                   |
| Difference between temperature detector and power stage temperature, slow heat up | t OTDIFF             | Power stage causing high temperature, normal 4 Layer PCB |                      | 10                   |                      | °C                   |

| Sense resistor voltage levels                                                                 | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz                        | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   |
|-----------------------------------------------------------------------------------------------|-----------------------------------|--------------------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Parameter                                                                                     | Symbol                            | Conditions                                             | Min                               | Typ                               | Max                               | Unit                              |
| Sense input peak threshold voltage (low sensitivity)                                          | V SRTL                            | vsense =0 csactual =31 CUR_A/B =248 Hyst.=0; I BRxy =0 |                                   | 325                               |                                   | mV                                |
| Sense input peak threshold voltage (high sensitivity)                                         | V SRTH                            | vsense =1 csactual =31 CUR_A/B =248 Hyst.=0; I BRxy =0 |                                   | 180                               |                                   | mV                                |
| Sense input tolerance / motor current full scale tolerance -using internal reference          | I COIL                            | I_scale_analog =0, vsense =0                           | -5                                |                                   | +5                                | %                                 |
| Sense input tolerance / motor current full scale tolerance -using external reference voltage  | I COIL                            | I_scale_analog =1, V AIN =2V, vsense =0                | -2                                |                                   | +2                                | %                                 |
| Internal resistance from pin BRxy to internal sense comparator (additional to sense resistor) | R BRxy                            |                                                        |                                   | 30                                |                                   | mΩ                                |

| Digital pins                     | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                        | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Input voltage low level          | V INLO               |                      | -0.3                 |                      | 0.3 V VIO            | V                    |
| Input voltage high level         | V INHI               |                      | 0.7 V VIO            |                      | V VIO +0.3           | V                    |
| Input Schmitt trigger hysteresis | V INHYST             |                      |                      | 0.12 V VIO           |                      | V                    |
| Output voltage low level         | V OUTLO              | I OUTLO = 2mA        |                      |                      | 0.2                  | V                    |
| Output voltage high level        | V OUTHI              | I OUTHI = -2mA       | V VIO -0.2           |                      |                      | V                    |
| Input leakage current            | I ILEAK              |                      | -10                  |                      | 10                   | µA                   |
| Pullup / pull-down resistors     | R PU /R PD           |                      | 132                  | 166                  | 200                  | kΩ                   |
| Digital pin capacitance          | C                    |                      |                      | 3.5                  |                      | pF                   |

| AIN/IREF input                                                                                                                                       | DC-Characteristics   | DC-Characteristics                                                              | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|---------------------------------------------------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                                                                                                            | Symbol               | Conditions                                                                      | Min                  | Typ                  | Max                  | Unit                 |
| AIN_IREF input resistance to 2.5V (=5VOUT/2)                                                                                                         | R AIN                | Measured to GND ( internalRsense =0)                                            | 260                  | 330                  | 400                  | kΩ                   |
| AIN_IREF input voltage range for linear current scaling                                                                                              | V AIN                | Measured to GND ( IscaleAnalog =1)                                              | 0                    | 0.5-2.4              | V 5VOUT /2           | V                    |
| AIN_IREF open input voltage level                                                                                                                    | V AINO               | Open circuit voltage ( internalRsense =0)                                       |                      | V 5VOUT /2           |                      | V                    |
| AIN_IREF input resistance to GND for reference current input                                                                                         | R IREF               | Measured to GND ( internalRsense =1)                                            | 0.5                  | 0.7                  | 1.0                  | kΩ                   |
| AIN_IREF current amplification for reference current to coil current at maximum setting                                                              | I REFAMPL            | I IREF = 0.25mA                                                                 |                      | 3000                 |                      | Times                |
| Motor current full scale tolerance -using RDSon measurement (value for design guideline to calculate reproduction of certain motor current & torque) | I COIL               | Internal_Rsense =1, vsense =0, I IREF = 0.25mA (after reaching thermal balance) | -10                  |                      | +10                  | %                    |

## 18.3 Thermal Characteristics

The  following  table  shall  give  an  idea  on  the  thermal  resistance  of  the  package.  The  thermal resistance  for  a  four-layer  board  will  provide  a  good  idea  on  a  typical  application.  Actual  thermal characteristics  will  depend  on  the  PCB  layout,  PCB  type  and  PCB  size.  The  thermal  resistance  will benefit from thicker CU (inner) layers for spreading heat horizontally within the PCB. Also, air flow will reduce thermal resistance.

A thermal resistance of 30K/W for a typical board means, that the package is capable of continuously dissipating 3.3W at an ambient temperature of 25°C with the die temperature staying below 125°C. Note, that a thermally optimized layout is required.

Table 18.1 Thermal characteristics TMC22xx

| Parameter                                                          | Symbol   | Conditions                                                                                                                                            |   Typ | Unit   |
|--------------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Typical power dissipation                                          | P D      | StealthChop or SpreadCycle, 1A RMS in two phase motor, sinewave, 40 or 20kHz chopper, 24V, 110°C peak surface of package (motor QSH4218- 035-10-027)  |  2.5  | W      |
| Typical power dissipation                                          | P D      | StealthChop or SpreadCycle, 0.7A RMS in two phase motor, sinewave, 40 or 20kHz chopper, 24V, 68°C peak surface of package (motor QSH4218-035-10- 027) |  1.36 | W      |
| Thermal resistance junction to ambient on a multilayer board QFN28 | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 35µm CU, 70mm x 133mm, d=1.5mm)             | 30    | K/W    |
| Thermal resistance junction to case                                | R TJC    | Junction to heat slug of package                                                                                                                      |  6    | K/W    |

Note

A spread-sheet for calculating TMC22xx power dissipation is available on www.trinamic.com.

## 19 Layout Considerations

## 19.1 Exposed Die Pad

The TMC22xx uses its die attach pad to dissipate heat from the drivers and the linear regulator to the board.  For  best  electrical  and  thermal  performance,  use  a  reasonable  amount  of  solid,  thermally conducting vias between the die attach pad and the ground plane. The printed circuit board should have a solid ground plane spreading heat into the board and providing for a stable GND reference.

## 19.2 Wiring GND

All signals of the TMC22xx are referenced to their respective GND. Directly connect all GND pins under the device to a common ground area (GND and die attach pad). The GND plane right below the die attach pad should be treated as a virtual star point. For thermal reasons, the PCB top layer shall be connected to a large PCB GND plane spreading heat within the PCB.

## Attention

Especially  the  sense  resistors  are  susceptible  to  GND  differences  and  GND  ripple  voltage,  as  the microstep  current  steps  make  up  for  voltages  down  to  0.5 mV.  No  current  other  than  the  sense resistor current should flow on their connections to GND and to the TMC22xx. Optimally place them close  to  the  IC,  with  one  or  more  vias  to  the  GND  plane  for  each  sense  resistor.  The  two  sense resistors for one coil should not share a common ground connection trace or vias, as also PCB traces have a certain resistance.

## 19.3 Supply Filtering

The 5VOUT output voltage ceramic filtering capacitor (2.2 to 4.7 µF recommended) should be placed as close as possible to the 5VOUT pin, with its GND return going directly to the die pad or the nearest GND pin. This ground connection shall not be shared with other loads or additional vias to the GND plane. Use as short and as thick connections as possible.

The  motor  supply  pins  VS  should  be  decoupled  with  an  electrolytic  capacitor  (47 μF  or  larger  is recommended) and a ceramic capacitor, placed close to the device.

Take into account that the switching motor coil outputs have a high dV/dt. Thus capacitive stray into high resistive signals can occur, if the motor traces are near other traces over longer distances.

## 19.4 Layout Example TMC2208

## Schematic

<!-- image -->

## Placement (Excerpt)

<!-- image -->

Top Layout (Excerpt, showing die pad vias)

<!-- image -->

The  complete  schematics  and  layout  data  for  all  TMC22xx  evaluation  boards  are  available  on  the TRINAMIC website.

## 20 Package Mechanical Data

## 20.1 Dimensional Drawings QFN28

Attention: Drawings not to scale.

<!-- image -->

Figure 20.1 Dimensional drawings QFN28

<!-- image -->

| Parameter [mm]         | Ref   | Min   | Nom   | Max   |
|------------------------|-------|-------|-------|-------|
| total thickness        | A     | 0.8   | 0.85  | 0.9   |
| stand off              | A1    | 0     | 0.035 | 0.05  |
| mold thickness         | A2    |       | 0.65  |       |
| lead frame thickness   | A3    |       | 0.203 |       |
| lead width             | b     | 0.2   | 0.25  | 0.3   |
| body size X            | D     |       | 5.0   |       |
| body size Y            | E     |       | 5.0   |       |
| lead pitch             | e     |       | 0.5   |       |
| exposed die pad size X | J     | 3     | 3.1   | 3.2   |
| exposed die pad size Y | K     | 3     | 3.1   | 3.2   |
| lead length            | L     | 0.5   | 0.55  | 0.6   |
| package edge tolerance | aaa   |       |       | 0.1   |
| mold flatness          | bbb   |       |       | 0.1   |
| coplanarity            | ccc   |       |       | 0.08  |
| lead offset            | ddd   |       |       | 0.1   |
| exposed pad offset     | eee   |       |       | 0.1   |

## 20.2 Dimensional Drawings QFN32-WA

32

PIN 1CORNER-

TOP VIEW

<!-- image -->

Figure 20.2 Dimensional drawings QFN32-WA

<!-- image -->

| Parameter              | [mm] Ref   | Min   | Nom   | Max   |
|------------------------|------------|-------|-------|-------|
| total thickness        | A          | 0.8   | 0.85  | 0.9   |
| stand off              | A1         | 0     | 0.035 | 0.05  |
| mold thickness         | A2         |       | 0.65  |       |
| lead frame thickness   | A3         |       | 0.203 |       |
| lead width             | b          | 0.2   | 0.25  | 0.3   |
| body size X            | D          |       | 5.0   |       |
| body size Y            | E          |       | 5.0   |       |
| lead pitch             | e          |       | 0.5   |       |
| exposed die pad size X | J          | 3.3   | 3.4   | 3.5   |
| exposed die pad size Y | K          | 3.3   | 3.4   | 3.5   |
| lead length            | L          | 0.45  | 0.5   | 0.55  |
| lead length            | L1         | 0.4   | 0.5   | 0.55  |
| package edge tolerance | aaa        |       | 0.1   |       |
| mold flatness          | bbb        |       | 0.1   |       |
| coplanarity            | ccc        |       | 0.08  |       |
| lead offset            | ddd        |       | 0.1   |       |
| exposed pad offset     | eee        |       | 0.1   |       |
| half-cut width         | R          | 0.075 |       |       |
| half-cut depth         | S          |       |       | 0.075 |

## 20.3 Package Codes

| Type       | Package                                        | Temperature range                              | Code & marking                                 |
|------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|
| TMC2208-LA | QFN28 (RoHS)                                   | -40°C ... +125°C                               | TMC2208-LA                                     |
| TMC2224-LA | QFN28 (RoHS)                                   | -40°C ... +125°C                               | TMC2224-LA                                     |
| TMC2202-WA | QFN32 (RoHS)                                   | -40°C ... +125°C                               | TMC2202-WA                                     |
| TMC… -T    | -T suffix denotes tape on reel packed products | -T suffix denotes tape on reel packed products | -T suffix denotes tape on reel packed products |

## 21 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 22 Table of Figures

| FIGURE 1.1 TMC22XX BASIC APPLICATION BLOCK DIAGRAM ......................................................................................................5                                                                                                                         |                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| FIGURE 1.2 STAND- ALONE DRIVER WITH PRE - CONFIGURATION ....................................................................................................6                                                                                                                      |                         |
| FIGURE 1.3 AUTOMATIC MOTOR CURRENT POWER DOWN ..........................................................................................................8                                                                                                                          |                         |
| FIGURE 2.1 TMC2208 PINNING TOP VIEW - TYPE : QFN28, 5X5MM², 0.5MM PITCH ...............................................................9                                                                                                                                           |                         |
| FIGURE 2.2 TMC2202 PINNING TOP VIEW - TYPE : QFN32, 5X5MM², 0.5MM PITCH .............................................................10                                                                                                                                            |                         |
| FIGURE 2.3 TMC2224 PINNING TOP VIEW - TYPE : QFN28, 5X5MM², 0.5MM PITCH .............................................................11                                                                                                                                            |                         |
| FIGURE 3.1 STANDARD APPLICATION CIRCUIT ...........................................................................................................................13                                                                                                              |                         |
| FIGURE 3.2 APPLICATION CIRCUIT USING RDSON BASED SENSING ...........................................................................................14                                                                                                                             |                         |
| FIGURE 3.3 5V ONLY OPERATION ..............................................................................................................................................15                                                                                                      |                         |
| FIGURE 3.4 SIMPLE ESD ENHANCEMENT AND MORE ELABORATE MOTOR OUTPUT PROTECTION ..................................................17                                                                                                                                                  |                         |
| FIGURE 4.1 ATTACHING THE TMC22XX TO A MICROCONTROLLER UART ...................................................................................20                                                                                                                                   |                         |
| FIGURE 4.2 ADDRESSING MULTIPLE TMC22XX VIA SINGLE WIRE INTERFACE USING ANALOG SWITCHES ...................................21                                                                                                                                                       |                         |
| FIGURE 6.1 MOTOR COIL SINE WAVE CURRENT WITH STEALTHCHOP (MEASURED WITH CURRENT PROBE ) ..................................36                                                                                                                                                       |                         |
| FIGURE 6.2 STEALTHCHOP2 AUTOMATIC TUNING PROCEDURE ...................................................................................................38                                                                                                                           |                         |
| FIGURE 6.3 SCOPE SHOT : GOOD SETTING FOR PWM_REG .......................................................................................................40                                                                                                                         |                         |
| FIGURE 6.4 SCOPE SHOT : TOO SMALL SETTING FOR PWM_REG DURING AT#2 .......................................................................40                                                                                                                                        |                         |
| FIGURE 6.5 SUCCESSFULLY DETERMINED PWM_GRAD(_AUTO) AND PWM_OFS(_AUTO) ...................................................40                                                                                                                                                        |                         |
| FIGURE 6.6 VELOCITY BASED PWM SCALING (PWM_AUTOSCALE=0) .........................................................................................42                                                                                                                                |                         |
| FIGURE 6.7 TPWMTHRS FOR OPTIONAL SWITCHING TO SPREADCYCLE ...................................................................................43                                                                                                                                    |                         |
| FIGURE 7.1 CHOPPER PHASES ...................................................................................................................................................47                                                                                                    |                         |
| FIGURE 7.2 NO LEDGES IN CURRENT WAVE WITH SUFFICIENT HYSTERESIS ( MAGENTA: CURRENT A, YELLOW & BLUE : SENSE RESISTOR VOLTAGES A AND B) .........................................................................................................................................49 |                         |
| FIGURE 7.3 SPREADCYCLE CHOPPER SCHEME SHOWING COIL CURRENT DURING A CHOPPER CYCLE ............................................50                                                                                                                                                   |                         |
| FIGURE 9.1 SCALING THE MOTOR CURRENT USING THE ANALOG INPUT ......................................................................................54                                                                                                                               |                         |
| FIGURE 11.1 STEP AND DIR TIMING , INPUT PIN FILTER .........................................................................................................57                                                                                                                     |                         |
| FIGURE 11.2 MICROPLYER MICROSTEP INTERPOLATION WITH RISING STEP FREQUENCY (E XAMPLE : 16 TO 256)                                                                                                                                                                                   | .....................59 |
| FIGURE 11.3 INDEX SIGNAL AT POSITIVE ZERO TRANSITION OF THE COIL A SINE CURVE ..........................................................60                                                                                                                                         |                         |
| FIGURE 12.1 SOFTWARE GENERATED MOTION PROFILE .............................................................................................................61                                                                                                                      |                         |
| FIGURE 13.1 DIAG AND INDEX OUTPUTS ...............................................................................................................................63                                                                                                               |                         |
| FIGURE 14.1 CURRENT SETTING AND FIRST STEPS WITH STEALTHCHOP ....................................................................................64                                                                                                                                |                         |
| FIGURE 14.2 TUNING STEALTHCHOP AND SPREADCYCLE ..........................................................................................................65                                                                                                                        |                         |
| FIGURE 14.3 OTP PROGRAMMING ............................................................................................................................................66                                                                                                         |                         |
| FIGURE 20.1 DIMENSIONAL DRAWINGS QFN28 .......................................................................................................................76                                                                                                                   |                         |
| FIGURE 20.2 DIMENSIONAL DRAWINGS QFN32-WA ...............................................................................................................78                                                                                                                        |                         |

## 23 Revision History

Table 23.1 Document Revisions

| Version   | Date        | Author BD= Bernhard Dwersteg   | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------|-------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V1.00     | 2016-Nov-01 | BD                             | Adapted min/max DC and Timing Characteristics (I S , V CP_UV , V UV_VS , 25°C for clock calibration frequency) to fit test limits                                                                                                                                                                                                                                                                                              |
| V1.01     | 2016-Nov-16 | BD                             | Corrected wording in DRV_STATUS                                                                                                                                                                                                                                                                                                                                                                                                |
| V1.02     | 2017-May-16 | BD                             | Added QFN-32                                                                                                                                                                                                                                                                                                                                                                                                                   |
| V1.03     | 2017-May-31 | BD                             | Hint on PWM_SCALE_AUTO during AT#2                                                                                                                                                                                                                                                                                                                                                                                             |
| V1.04     | 2018-May-17 | BD                             | Minor corrections, Lead width missing in table                                                                                                                                                                                                                                                                                                                                                                                 |
| V1.05     | 2018-Jun-07 | BD                             | Added errata / limitations for initial tuning of AT#1 / AT#2 phase Added precautions for power up with StealthChop                                                                                                                                                                                                                                                                                                             |
| V1.06     | 2019-Feb-05 | BD                             | Corrected timing requirements for CLK input (30ns for first pulse) / some minor fixes. Corrected calculation formula for sense resistor with 30mOhm internal resistance rather than 20mOhm.                                                                                                                                                                                                                                    |
| V1.09     | 2019-Jul-17 | BD                             | Minor fixes / added order codes, removed HTSSOP package                                                                                                                                                                                                                                                                                                                                                                        |
| V1.10     | 2020-Jun-02 | BD                             | Minor corrections, Logo                                                                                                                                                                                                                                                                                                                                                                                                        |
| V1.11     | 2021-May-20 | BD                             | Corrected position of CUR_A / CUR_B in register Improved description of StealthChop options                                                                                                                                                                                                                                                                                                                                    |
| V1.12     | 2022-Jan-05 | BD                             | p1: Changed logo & block diagram; p13: attention to avoid destructive conditions; p33: pwm_autoscale=0 wording; p33 & 36: Corrected condition for autotuning to include current setting p51: Caveat for selection of sense resistor w. ENN=0; p61: Corrected formula for VACTUAL; p63: Corrected open load detection preconditions; p68 & 69: Corrected pin name reference from VCC to 5VOUT; p79: Hint for sustainable design |
| V1.13     | 2022-May-25 | BD                             | Minor corrections; P12: TMC2224 has pull-down on pin ENN; P52: Corrected formula for current calculation with 30mOhm; P60: Corrected position of index output pulse related to coil B rather than coil A                                                                                                                                                                                                                       |

## 24 References

[TMC22xx-EVAL]

TMC22xx Evaluation board: Manuals, software and PCB data available on www.trinamic.com

[AN001]

Trinamic Application Note 001 - Parameterization of SpreadCycle ™, www.trinamic.com

Calculation sheet TMC22xx\_Calculations.xlsx www.trinamic.com