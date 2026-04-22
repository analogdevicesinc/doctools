<!-- lastmod 2023-08-03 -->
## TMC2590 DATASHEET

Universal,  cost-effective  stepper  driver  for  two-phase  bipolar  motors  with  external  MOSFETs  to  fit different motor sizes. With Step/Dir Interface and SPI and Stand-Alone option.

<!-- image -->

<!-- image -->

## FEATURES AND BENEFITS

Motor Current from 1A to 8A using external (N&amp;P) MOSFETs

High Voltage Range from 5V to 60V DC (more w. ext. driver)

High Resolution up to 256 microsteps per full step

Small Size 5x5mm (body) TQFP32-EP package

Low Power Dissipation using MOSFET power stage

High Temperature Tolerance due to low self-heating

EMI-optimized slope &amp; current controlled gate drivers

Protection  &amp;  Diagnostics short to  GND,  short  to  VS  / overcurrent, programmable overtemperature &amp; undervoltage

StallGuard2 ™ high precision sensorless motor load detection

CoolStep ™ load dependent current control saves up to 75%

MicroPlyer ™ 256 step smoothness with 1/16 step input.

SpreadCycle ™ high-precision chopper for best current sine wave form and zero crossing

Differential Current Sensing for quiet chopper operation Resonance Dampening for mid-range velocity

## BLOCK DIAGRAM

<!-- image -->

<!-- image -->

<!-- image -->

coolStepTM

<!-- image -->

## APPLICATIONS

Textile, Sewing Machines Factory &amp; Lab Automation 3D printing Liquid Handling Medical Office Automation Printer and Scanner CCTV, Security ATM, Cash recycler, POS Pumps and Valves Heliostat Controller

CNC Machines

## DESCRIPTION

The TMC2590 driver for two-phase stepper motors  offers  an  industry-leading  feature set, including high-resolution microstepping, sensorless mechanical load measurement, load-adaptive power  optimization, and low-resonance chopper operation. Stan dard  SPI™  and  STEP/ DIR interfaces simplify communication. The TMC2590 uses external  N-  and  P-channel  MOSFETs  for motor currents from 1A up to roughly 8A. No bootstrapping and charge-pump are required. Integrated protection and diagnostic features support robust and reliable operation. High integration, high efficiency and small form factor  enable  miniaturized designs with low external component count for cost-effective and highly competitive solutions. Interfacing is compatible to the TMC26x family.

<!-- image -->

## APPLICATION EXAMPLES:  HIGH POWER -SMALL SIZE

The TMC2590 scores with its robust design and high power density and a versatility that covers a wide spectrum  of  applications  and  motor  sizes,  all  while  keeping  costs  down.  Extensive  support  at  the  chip, board, and software levels enables rapid design cycles and fast time-to-market with competitive products. High  energy  efficiency  from  TRINAMIC's CoolStep  technology  delivers  further  cost  savings  in  related systems such as power supplies and cooling. It is  upward  compatible  to the  TMC26x  family  of  ICs  and offers  higher  gate  driver  strength  than  the  TMC262-LA  as  well  as  additional  short  circuit  protection  and failsafe options.

<!-- image -->

## TMC2590-EVAL DEVELOPMENT PLATFORM

This evaluation board is a development platform for applications based  on  the  TMC2590.  External  power  MOSFETs  support  drive currents up to 4A RMS and up to 60V peak supply voltage.

The evaluation board system based on the CPU boards LANDUNGSBRÜCKE  or  STARTRAMPE  features  an  USB  interface  for communication with the learning and development control software TMCL-IDE running on a PC.

The  control  software  provides  a  user-friendly  GUI  for  setting control  parameters  and  visualizing  the  dynamic  response  of  the motor.

Evaluation board with 60V MOSFETs for 4A RMS

## ORDER CODES

| Order code       | Description                                                         | Size [mm²]   |
|------------------|---------------------------------------------------------------------|--------------|
| TMC2590-TA       | Stepper Motor Driver, SPI, Step/Dir, 5-60V, TQFP32, Tray            | 5 x 5 (body) |
| TMC2590-TA-T     | Stepper Motor Driver, SPI, Step/Dir, 5-60V, TQFP32, Tape & Reel     | 5 x 5 (body) |
| TMC2590-EVAL-KIT | Full Evaluation Kit for TMC2590                                     | 126 x 85     |
| TMC2590-EVAL     | Evaluation Board for TMC2590 (excl. Landungsbrücke and Eselsbrücke) | 85 x 55      |
| TMC2590-BOB40    | Breakout Board with TMC2590                                         | 38 x 30      |

## TABLE OF CONTENTS

| PRINCIPLES OF OPERATION .........................4                                                  | PRINCIPLES OF OPERATION .........................4                                                                              |                                                            |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| 1.1                                                                                                 | KEY CONCEPTS ...............................................4                                                                   |                                                            |
| 1.2                                                                                                 | CONTROL I NTERFACES ....................................5                                                                       |                                                            |
| 1.3                                                                                                 | MECHANICAL LOAD SENSING                                                                                                         | .........................5                                 |
| 1.4                                                                                                 | CURRENT CONTROL                                                                                                                 | ........................................5                  |
| PIN                                                                                                 | ASSIGNMENTS...........................................6                                                                         |                                                            |
| 2.1                                                                                                 | PACKAGE OUTLINE                                                                                                                 | .........................................6                 |
| 2.2                                                                                                 | SIGNAL DESCRIPTIONS                                                                                                             | ..................................6                        |
| INTERNAL ARCHITECTURE .............................8                                                | INTERNAL ARCHITECTURE .............................8                                                                            |                                                            |
| 3.1                                                                                                 | STANDARD APPLICATION CIRCUIT                                                                                                    | ..................9                                        |
| 3.2                                                                                                 | HIGHER VOLTAGE OR HIGHER CURRENT                                                                                                | .......10                                                  |
| STANDALONE OPERATION...........................11                                                   | STANDALONE OPERATION...........................11                                                                               |                                                            |
| STALLGUARD2 LOAD MEASUREMENT                                                                        | STALLGUARD2 LOAD MEASUREMENT                                                                                                    | .......12                                                  |
|                                                                                                     |                                                                                                                                 | ......13                                                   |
| 5.1 5.2                                                                                             | TUNING THE STALLGUARD2 THRESHOLD STALLGUARD2 MEASUREMENT FREQUENCY AND FILTERING ............................................14 |                                                            |
| 5.3                                                                                                 | DETECTING A MOTOR STALL ........................14                                                                              |                                                            |
| 5.4                                                                                                 | L IMITS OF STALLGUARD2 OPERATION                                                                                                | .........14                                                |
| COOLSTEP LOAD-ADAPTIVE CURRENT CONTROL...........................................................15 | COOLSTEP LOAD-ADAPTIVE CURRENT CONTROL...........................................................15                             |                                                            |
| 6.1                                                                                                 | TUNING COOLSTEP                                                                                                                 | ......................................18                   |
| SPI INTERFACE................................................19                                     | SPI INTERFACE................................................19                                                                 |                                                            |
| 7.1                                                                                                 | BUS SIGNALS                                                                                                                     | ...............................................19          |
| 7.2                                                                                                 | BUS TIMING                                                                                                                      | ................................................19         |
| 7.3                                                                                                 | BUS ARCHITECTURE                                                                                                                | .....................................20                    |
| 7.4                                                                                                 | REGISTER WRITE COMMANDS ......................21                                                                                |                                                            |
| 7.5                                                                                                 | DRIVER CONTROL REGISTER (DRVCTRL)                                                                                               | ....23                                                     |
| 7.6                                                                                                 | CHOPPER CONTROL REGISTER (CHOPCONF)..                                                                                           |                                                            |
| 7.7 COOLSTEP CONTROL REGISTER                                                                       | (SMARTEN)... ...................................................................26                                              |                                                            |
| 7.8 STALLGUARD2 CONTROL REGISTER                                                                    | (SGCSCONF)..............................................27                                                                      |                                                            |
| 7.9                                                                                                 | DRIVER CONTROL REGISTER (DRVCONF)...28                                                                                          |                                                            |
| 7.10                                                                                                | READ RESPONSE ..........................................30                                                                      |                                                            |
| 7.11                                                                                                | DEVICE I NITIALIZATION                                                                                                          | ...............................31                          |
| STEP/DIR INTERFACE.....................................32                                           | STEP/DIR INTERFACE.....................................32                                                                       |                                                            |
| 8.1                                                                                                 | TIMING                                                                                                                          | ........................................................32 |
| 8.2                                                                                                 | MICROSTEP TABLE                                                                                                                 | .......................................33                  |
| 8.3                                                                                                 | CHANGING RESOLUTION                                                                                                             | ..............................34                           |
| 8.4                                                                                                 | MICROPLYER STEP I NTERPOLATOR                                                                                                   | ...............34                                          |
| 8.5                                                                                                 | STANDSTILL CURRENT REDUCTION                                                                                                    | ...............35                                          |
| CURRENT SETTING..........................................36                                         | CURRENT SETTING..........................................36                                                                     |                                                            |
| 9.1                                                                                                 | SENSE RESISTORS ........................................37                                                                      |                                                            |
| 10 CHOPPER                                                                                          |                                                                                                                                 | OPERATION...................................38             |
| 10.1                                                                                                | SPREADCYCLE CHOPPER ...............................39                                                                           |                                                            |
| 10.2                                                                                                | CLASSIC CONSTANT OFF-T IME CHOPPER......42                                                                                      |                                                            |

11

POWER MOSFET STAGE  ................................  44

11.1

BREAK-BEFORE-MAKE LOGIC  .......................  44

11.2

11.3

ENN INPUT  .................................................  44

SLOPE CONTROL  ..........................................  44

12

DIAGNOSTICS AND PROTECTION  .............  46

12.1

SHORT PROTECTION  .....................................  46

12.2

12.3

12.4

OPEN-LOAD DETECTION ..............................  47

TEMPERATURE SENSORS  ...............................  48

UNDERVOLTAGE DETECTION  .........................  49

13

POWER SUPPLY SEQUENCING  ....................  50

14

SYSTEM CLOCK ................................................  50

14.1

SYSTEM CLOCK FREQUENCY  .........................  51

15

MOSFET EXAMPLES  .........................................  52

16

LAYOUT CONSIDERATIONS  .........................  53

16.1

SENSE RESISTORS  ........................................  53

16.2

16.3

16.4

EXPOSED DIE PAD  .......................................  53

POWER FILTERING  .......................................  53

LAYOUT EXAMPLE  ........................................  54

17

ABSOLUTE MAXIMUM RATINGS  .................  56

18

ELECTRICAL CHARACTERISTICS  .................  57

18.1

OPERATIONAL RANGE  ..................................  57

18.2

DC AND AC SPECIFICATIONS  ......................  57

19

PACKAGE MECHANICAL DATA  ....................  61

19.1

DIMENSIONAL DRAWINGS  ...........................  61

19.2

PACKAGE CODE............................................  62

20

DISCLAIMER  .....................................................  63

21

22

23

24

25

ESD SENSITIVE DEVICE  ................................  63

DESIGNED FOR SUSTAINABILITY  .............  63

TABLE OF FIGURES  .........................................  64

REVISION HISTORY  .......................................  65

REFERENCES  ......................................................  65

## 1 Principles of Operation

Figure 1.1 Applications block diagrams

<!-- image -->

The TMC2590 motor driver is the intelligence between a motion controller and the power MOSFETs for driving  a  two-phase  stepper  motor,  as  shown  in  Figure  1.1.  Following  power-up,  an  embedded microcontroller  initializes  the  driver  by  sending  commands  over  an  SPI  bus  to  write  control parameters  and  mode bits  in  the  TMC2590.  The  microcontroller  may  implement  the  motion-control function as shown in the upper part of the figure, or it may send commands to a dedicated motion controller  chip  such  as  TRINAMIC's  TMC429  as  shown  in  the  lower  part. For  simple  circuits,  SPI configuration may be omitted. The stand-alone mode configures for the most common settings.

The motion controller can control  the  motor  position  by  sending  pulses  on  the  STEP  signal  while indicating the direction on the DIR signal. The TMC2590 has a microstep counter and sine table to convert  these  signals  into  the  coil  currents  which  control  the  position  of  the  motor.  If  the microcontroller  implements  the  motion-control  function,  it  can  write  values  for  the  coil  currents directly to the TMC2590 over the SPI interface, in which case the STEP/DIR interface may be disabled. This mode of operation requires software to track the motor position and reference a sine table to calculate the coil currents.

To  optimize  power  consumption  and  heat  dissipation,  software  may  also  adjust  CoolStep  and StallGuard2 parameters in real-time, for example to implement different tradeoffs between speed and power consumption in different modes of operation.

The motion control function is a hard-real-time task which may be a burden to implement reliably alongside other tasks on the embedded microcontroller. By offloading the motion-control function to the TMC429, up to three motors can be operated reliably with very little demand for service from the microcontroller.  Software  only  needs  to  send  target  positions,  and  the  TMC429  generates  precisely timed step pulses. Software retains full control over both the TMC2590 and TMC429 through the SPI bus.

## 1.1 Key Concepts

The  TMC2590  motor  driver  implements  several  advanced  patented  features  which  are  exclusive  to TRINAMIC  products.  These  features  contribute  toward  greater  precision,  greater  energy  efficiency, higher reliability, smoother motion, and cooler operation in many stepper motor applications.

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

There  are  two  control  interfaces  from  the  motion  controller  to  the  motor  driver:  the  SPI  serial interface and the STEP/DIR interface. The SPI interface is used to write control information to the chip and read back status information. This interface allows application specific initialization of parameters and  modes.  This  interface  may  also  be  used  for  directly  setting  the  currents  flowing  through  the motor coils, as an alternative to stepping the motor using the STEP and DIR signals, so the motor can be controlled through the SPI interface alone.

In  stand-alone  mode,  the  most  common  configuration  is  pre-loaded  automatically.  The  three  SPI inputs allow for additional choices.

The STEP/DIR interface allow universal real-time-control and is simple and robust.

## 1.2.1 SPI Interface

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  slave,  another  bit  is  sent  simultaneously  from  the  slave  to  the  master. Communication between an SPI master and the TMC2590 slave always consists of sending one 20-bit command word and receiving one 20-bit status word.

## 1.2.2 Stand-Alone Control

Three configuration lines set 16 or 256 microsteps, chopper hysteresis, to adapt for motor size, and motor current (2-level). With this, basic configuration of the driver does not require any interfacing.

## 1.2.3 STEP/DIR Interface

The STEP/DIR interface is enabled by default. Active edges on the STEP input can be rising edges or both  rising  and  falling  edges,  as  controlled  by  the  mode  bit  (DEDGE).  Using  both  edges  cuts  the toggle rate of the STEP signal in half, which is useful for communication over slow interfaces such as optically isolated interfaces.

On each active edge, the state sampled from the DIR input determines whether to step forward or back. Each step can be a fullstep or a microstep, in which there are 2, 4, 8, 16, 32, 64, 128, or 256 microsteps per fullstep. During microstepping, a low state on DIR increases the microstep counter and a high level decreases the counter by an amount controlled by the microstep resolution. An internal table translates the counter value into the sine and cosine values which control the motor current for microstepping.

## 1.3 Mechanical Load Sensing

The TMC2590 provides StallGuard2 high-resolution load measurement for determining the mechanical load  on  the  motor by measuring the  back EMF. In  addition to detecting when a motor stalls, this feature can be used for homing to a mechanical stop without a limit switch or proximity detector. The CoolStep  power-saving  mechanism  uses  StallGuard2  to  reduce  the  motor  current  to  the  minimum motor current required to meet the actual load placed on the motor.

## 1.4 Current Control

Current into the motor coils is controlled using a cycle-by-cycle chopper mode. Two chopper modes are available: a traditional constant off-time mode and the new SpreadCycle mode. SpreadCycle mode offers smoother operation and greater power efficiency over a wide range of speed and load.

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC2590 pin assignments

<!-- image -->

## 2.2 Signal Descriptions

| Pin   | Number   | Type   | Function                                                                                                     |
|-------|----------|--------|--------------------------------------------------------------------------------------------------------------|
| GND   | 1        |        | Digital and analog low power GND. Connect both to PCB GND plane.                                             |
| GND   | PAD      |        | Digital and analog low power GND. Connect both to PCB GND plane.                                             |
| HA1   | 2        | O (VS) | High side P-channel driver output. Becomes driven to VHS to switch on MOSFET.                                |
| HA2   | 3        | O (VS) | High side P-channel driver output. Becomes driven to VHS to switch on MOSFET.                                |
| HB1   | 23       | O (VS) | High side P-channel driver output. Becomes driven to VHS to switch on MOSFET.                                |
| HB2   | 22       | O (VS) | High side P-channel driver output. Becomes driven to VHS to switch on MOSFET.                                |
| BMA1  | 5        | I (VS) | Sensing input for bridge outputs. Used for short detection. Connect to center of the respective half-bridge. |
| BMA2  | 4        | I (VS) | Sensing input for bridge outputs. Used for short detection. Connect to center of the respective half-bridge. |
| BMB1  | 20       | I (VS) | Sensing input for bridge outputs. Used for short detection. Connect to center of the respective half-bridge. |
| BMB2  | 21       | I (VS) | Sensing input for bridge outputs. Used for short detection. Connect to center of the respective half-bridge. |
| LA1   | 6        | O 5V   | Low side MOSFET driver output. Becomes driven to 5VOUT to switch                                             |

| Pin        |   Number | Type        | Function                                                                                                                                                                                                                                                                                                                                                      |
|------------|----------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LA2        |        7 |             | on MOSFET.                                                                                                                                                                                                                                                                                                                                                    |
| LB1        |       19 |             |                                                                                                                                                                                                                                                                                                                                                               |
| LB2        |       18 |             |                                                                                                                                                                                                                                                                                                                                                               |
| SRA        |        8 | AI          | Sense resistor input for coil current measurement. Connect to upper                                                                                                                                                                                                                                                                                           |
| SRB        |       17 |             | side of sense resistor.                                                                                                                                                                                                                                                                                                                                       |
| SRAL       |       28 | AI          | Sense resistor negative input for coil current measurement. For best                                                                                                                                                                                                                                                                                          |
| SRBL       |       13 |             | results, connect to lower side of sense resistor using Kelvin connection, or connect to GND plane near the respective sense resistor 's GND terminal .                                                                                                                                                                                                        |
| 5VOUT      |        9 |             | Output of internal 5V linear regulator. This voltage is used to supply the low side drivers and internal analog circuitry. An external capacitor to GND close to the pin is required. Place the capacitor near to pin 9. 470nF ceramic are sufficient for most applications, a higher capacity up to 10µF improves performance with high gate charge MOSFETs. |
| SDO        |       10 | DO VIO      | Data output of SPI interface (Tristate)                                                                                                                                                                                                                                                                                                                       |
| SDI (CFG3) |       11 | DI VIO      | Data input of SPI interface / Microstep resolution control input in standalone mode: 0: MRES=256 microsteps; 1: MRES=16 microsteps with interpolation                                                                                                                                                                                                         |
| SCK (CFG2) |       12 | DI VIO      | Serial clock input of SPI interface / Chopper hysteresis control input in standalone mode: 0: HEND=4, HSTRT=2; 1: HEND=4, HSTRT=6                                                                                                                                                                                                                             |
| CSN (CFG1) |       14 | DI VIO      | Chip select input of SPI interface / Current control input in standalone mode: 0: Current scale CS=15; 1: Current scale CS=31                                                                                                                                                                                                                                 |
| ENN        |       15 | DI VIO      | Enable not input for drivers. Switches off all MOSFETs. Tie low for normal operation.                                                                                                                                                                                                                                                                         |
| CLK        |       16 | DI VIO      | Clock input for all internal operations. Tie low to use internal oscillator. Automatically switches to external clock, when the first high signal is recognized.                                                                                                                                                                                              |
| VHS        |       24 |             | High side supply voltage (motor supply voltage VS - 10V). Attach a ceramic capacitor between VHS and VS. Typ. 220nF to 1µF, 16V.                                                                                                                                                                                                                              |
| VS         |       25 |             | Motor supply voltage. Tie to positive supply voltage of MOSFET bridge.                                                                                                                                                                                                                                                                                        |
| ST_ALONE   |       26 | DI VIO (pd) | Stand-alone mode selection. Tie to VCC_IO for non-SPI, stand-alone mode. Leave open for normal operation. Internal 10k pulldown resistor.                                                                                                                                                                                                                     |
| SG_TST     |       27 | DO VIO      | StallGuard2 ™ output. Signals motor stall (high active). Evaluate only when at sufficient velocity.                                                                                                                                                                                                                                                           |
| VCC_IO     |       29 |             | Input / output supply voltage VIO for all digital pins. Tie to digital logic supply voltage. Allows operation in 3.3V and 5V systems.                                                                                                                                                                                                                         |
| DIR        |       30 | DI VIO      | Direction input. Is sampled upon detection of a step to determine stepping direction. An internal glitch filter for 20ns is provided.                                                                                                                                                                                                                         |
| STEP       |       31 | DI VIO      | Step input. An internal glitch filter for 20ns is provided.                                                                                                                                                                                                                                                                                                   |
| TST_MODE   |       32 | DI VIO (pd) | Test mode input. Puts IC into test mode. Tie to GND for normal operation using a short wire to GND plane. Internal 166k pull down resistor for safety. No user functionality.                                                                                                                                                                                 |

## 3 Internal Architecture

Figure 3.1 shows the internal architecture of the TMC2590.

<!-- image -->

Figure 3.1 TMC2590 block diagram and application schematic

Prominent features include:

| Oscillator and clock selector      | provides the system clock from the on-chip oscillator or an external source.                                                                                                                          |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Step and direction interface       | uses a microstep counter and sine table to generate target currents for the coils.                                                                                                                    |
| SPI interface                      | receives commands for configuration or commands that directly set the coil current values.                                                                                                            |
| Multiplexer                        | selects either the output of the sine table or the SPI interface for controlling the current into the motor coils.                                                                                    |
| Multipliers                        | scales down the currents to both coils when the currents are greater than those required by the load on the motor or as set by the CS current scale parameter.                                        |
| DACs and comparators               | converts the digital current values to analog signals that are compared with the voltages on the sense resistors. Comparator outputs terminate chopper drive phases when target currents are reached. |
| Break-before-make and gate drivers | ensure non-overlapping pulses, boost drive voltage, and control pulse slope to the gates of the power MOSFETs.                                                                                        |
| On-chip voltage regulators         | provide high-side voltage for P-channel MOSFET gate drivers and supply voltage for on-chip analog and digital circuits.                                                                               |

## 3.1 Standard Application circuit

<!-- image -->

configuration

Figure 3.2 Standard application circuit

The standard application uses a four N-channel and four P-channel MOSFETs to drive the motor. These should be selected as required for the application motor current. See chapter 15 for examples. With N&amp;P  channel  FETs,  no  charge-pump  is  required,  making  the  design  small  and  robust.  Two  sense resistors set the motor coil current. See chapter 9 for the calculation of the right sense resistor value. An optional series resistor of 47Ω protects the SRAH input against inductive peak voltages going more than 1V below GND. Use low ESR capacitors for filtering the power supply. A minimum of 100µF per ampere  of  coil  current  near  to  the  power  bridge  is  recommended  for  best  performance.  These capacitors need to cope with the current ripple caused by chopper operation and thus they should not be dimensioned too small. Current ripple in the supply capacitors also depends on the power supply internal resistance and cable length. VCC\_IO can be supplied from 5VOUT, or from an external source, e.g., 3.3V.

## Basic layout hints

Place sense resistors and all filter capacitors as close as possible to the power MOSFETs. Place the TMC2590  near  to  the  MOSFETs  and  use  short  interconnection  lines  to  minimize  parasitic  trace inductance. Use a solid common GND for GND and die pad GND connections, also for sense resistor GND. Connect 5VOUT filtering capacitor directly to 5VOUT and GND plane. See layout hints for more details. High-capacity ceramic or low ESR electrolytic capacitors are recommended for VS filtering.

+VM

## 3.2 Higher Voltage or Higher Current

For motor currents exceeding the driving capability of N&amp;P channel pairs directly fitting the TMC2590, or  peak  voltages  above  60V,  use  an  external  gate  driver  IC  like  the  MAX5064B  (TTL  input  level) boosting the TMC2590 gate driver outputs. Figure 3.3 shows a sample circuit. Each N-MOS half-bridge is driven by an external gate-driver IC capable of 2A gate current. Short protection is not available in this configuration. The tiny dual P-MOSFET simulates an external power stage with VS level for the TMC2590, so that it will not detect a short condition when operated with protection enabled. BBM time  coming  from  the  TMC2590  is  a  minimum  time  of  roughly  100-200ns,  but  the  additional  level shifter MOSFET will reduce it by roughly 50-100ns. To ensure proper BBM timing fitting to the MOSFET stage, the MAX5064B gate driver with resistor programmable BBM provides a minimum time of up to 95ns (RBBM=100k). As the motor chopper can reach 100% duty cycle in case of a high resistive motor, an  additional  charge-pump  is  required  in  these  cases  to  keep  up  the  high-side  supply.  It  uses  a 200kHz oscillator to trickle-charge all driver stage outputs.

Keep layout and all interconnections compact, to avoid disturbance by parasitic effects. Also consult application notes for the selected gate driver ICs.

Figure 3.3 External NMOS gate driver circuit

<!-- image -->

## 4 Standalone Operation

Standalone operation is the easiest way to use the IC. In this mode, three pins configure for the most common settings. Just use the standard application circuit, tie low / high the SPI input pins to set the desired  basic  operation  parameters  and  choose  a  sense  resistor  to  fit  the  required  motor  current. However, advanced configuration and access to individual diagnostics only is possible via SPI.

Figure 4.1 Standalone configuration

| CSN: SELECTION OF MOTOR CURRENT (USE FOR STANDSTILL CURRENT REDUCTION)   | CSN: SELECTION OF MOTOR CURRENT (USE FOR STANDSTILL CURRENT REDUCTION)                             |
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| CSN (CFG1)                                                               | Chopper Setting                                                                                    |
| GND                                                                      | Current Scale CS=15. Use for standstill current reduction, or to adapt lower sense resistor value. |
| VCC_IO                                                                   | Current Scale CS=31. Maximum current. Control motor current by adapting sense resistors.           |

| SCK: SELECTION OF CHOPPER HYSTERESIS (ADAPT FOR LOWEST MOTOR NOISE & VIBRATION)   | SCK: SELECTION OF CHOPPER HYSTERESIS (ADAPT FOR LOWEST MOTOR NOISE & VIBRATION)                                             |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| SCK (CFG2)                                                                        | Chopper Setting                                                                                                             |
| GND                                                                               | Low hysteresis (HSTRT=2, HEND=4), use for larger motor.                                                                     |
| VCC_IO                                                                            | Medium hysteresis (HSTRT=6, HEND=4), typical for Nema17 or smaller motor, or for high-speed motors with high coil currents. |

| SDI: SELECTION OF MICROSTEP RESOLUTION (ADAPT TO STEP PULSE GENERATOR)   | SDI: SELECTION OF MICROSTEP RESOLUTION (ADAPT TO STEP PULSE GENERATOR)   |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| SDI (CFG3)                                                               | Chopper Setting                                                          |
| GND                                                                      | 256 Microsteps full resolution for Step/Dir interface                    |
| VCC_IO                                                                   | 16 Microsteps with internal interpolation to 256 microsteps              |

<!-- image -->

Standalone mode automatically enables resonance dampening (EN\_PFD), 4.25V undervoltage threshold, 136°C  overtemperature  detection  (OT\_SENSE),  sensitive  high-side  short  detection  (SHRTSENSE)  and enables low side short protection (S2VS). Driver strength becomes set to SLPL=SLPH=3. TOFF is 4, TBL is 36 clocks in this mode. All other bits are cleared to 0.

In standalone configuration, StallGuard level is fixed to SGT=2. This setting will work for homing with many 42mm and larger motors in a suitable velocity range. Adapt to full or half current as fitting using CSN configuration pin.

Resulting configuration words:

SDI=0: $00200 / SDI=1: $00204

SCK=0: $90224 / SCK=1: $90264

CSN=0: $C020F / CSN=1: $C021F

$E810F, $A0000

## 5 StallGuard2 Load Measurement

StallGuard2 provides an accurate measurement of the load on the motor within a selected velocity range. It can be used for stall detection as well as other uses at loads below those which stall the motor, such as CoolStep load-adaptive current reduction. (StallGuard2 is a more precise evolution of the earlier StallGuard technology.)

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

| Status word   | Description                                                                                                                                                                                                                                                                                            | Range   | Comment                                                    |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------|
| SG            | 10-bit unsigned integer StallGuard2 measure- ment result. A higher value indicates lower mechanical load. A lower value indicates a higher load and therefore a higher load angle. For stall detection, adjust SGT to return an SG value of 0 or slightly higher upon maximum motor load before stall. | 0… 1023 | 0: highest load low value: high load high value: less load |

## 5.1 Tuning the StallGuard2 Threshold

Due to the dependency of the StallGuard2 value SG from motor-specific characteristics and applicationspecific  demands on load and velocity the easiest way to tune the StallGuard2 threshold SGT for  a specific motor type and operating conditions is interactive tuning in the actual application.

The procedure is:

1. Operate the motor at a reasonable velocity for your application and monitor SG.
2. Apply slowly increasing mechanical load to the motor. If the motor stalls before SG reaches zero,  decrease  SGT.  If  SG  reaches  zero  before  the  motor  stalls,  increase  SGT.  A  good  SGT starting value is zero. SGT is signed, so it can have negative or positive values.
3. The optimum setting is reached when SG is between 0 and 400 at increasing load shortly before the motor stalls, and SG increases by 100 or more without load. SGT in most cases can be tuned together with the motion velocity in a way that SG goes to zero when the motor stalls and the stall output SG\_TST is asserted. This indicates that a step has been lost.

The  system  clock  frequency  affects  SG.  An  external  crystal-stabilized  clock  should  be  used  for applications  that  demand  the  highest  performance.  The  power  supply  voltage  also  affects  SG,  so tighter regulation results in more accurate values. SG measurement has a high resolution, and there are a few ways to enhance its accuracy, as described in the following sections.

## 5.1.1 Variable Velocity Operation

Across  a  range  of  velocities,  on-the-fly  adjustment  of  the  StallGuard2  threshold  SGT  improves  the accuracy of the load measurement SG. This also improves the power reduction provided by CoolStep, which is driven by SG. Linear interpolation between two SGT values optimized at different velocities is a  simple  algorithm  for  obtaining  most  of  the  benefits  of  on-the-fly  SGT  adjustment,  as  shown  in Figure 5.2. This figure shows an optimal SGT curve in black, and a two-point interpolated SGT curve in red.

Figure 5.2 Linear interpolation for optimizing SGT with changes in velocity

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

Fehler! Verweisquelle konnte nicht gefunden werden. shows the efficiency gain of a 42mm stepper motor when using CoolStep compared to standard operation with 50% of torque reserve. CoolStep is enabled above 60rpm in the example.

CoolStep is controlled by several parameters, but two are critical for understanding how it works:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                            | Range   | Comment                                        |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------|
| SEMIN       | 4-bit unsigned integer that sets a lower threshold. If SG goes below this threshold, CoolStep increases the current to both coils. The 4-bit SEMIN value is scaled by 32 to cover the lower half of the range of the 10-bit SG value. (The name of this parameter is derived from smartEnergy, which is an earlier name for CoolStep.) | 0… 15   | lower StallGuard threshold: SEMINx32           |
| SEMAX       | 4-bit unsigned integer that controls an upper threshold. If SG is sampled equal to or above this threshold enough times, CoolStep decreases the current to both coils. The upper threshold is (SEMIN + SEMAX + 1) x 32.                                                                                                                | 0… 15   | upper StallGuard threshold: (SEMIN+SEMAX+1)x32 |

Figure 6.2 shows the operating regions of CoolStep. The black line represents the SG measurement value, the blue line represents the mechanical load applied to the motor, and the red line represents the  current  into  the  motor  coils.  When  the  load  increases,  SG  falls  below  SEMIN,  and  CoolStep increases the  current.  When  the  load  decreases  and  SG  rises  above  (SEMIN  +  SEMAX  +  1)  x  32  the current becomes reduced.

Figure 6.2 CoolStep adapts motor current to the load

<!-- image -->

Four more parameters control CoolStep and one status value is returned:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                  | Range   | Comment                                                                  |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------|
| CS          | Current scale . Scales both coil current values as taken from the internal sine wave table or from the SPI interface. For high precision motor operation, work with a current scaling factor in the range 16 to 31, because scaling down the current values reduces the effective microstep resolution by making microsteps coarser. This setting also controls the maximum current value set by CoolStep ™. | 0… 31   | scaling factor: 1/32, 2/32, … 32/32                                      |
| SEUP        | Number of increments of the coil current for each occurrence of an SG measurement below the lower threshold.                                                                                                                                                                                                                                                                                                 | 0… 3    | step width is: 1, 2, 4, 8                                                |
| SEDN        | Number of occurrences of SG measurements above the upper threshold before the coil current is decremented.                                                                                                                                                                                                                                                                                                   | 0… 3    | number of StallGuard measurements per decrement: 32, 8, 2, 1             |
| SEIMIN      | Mode bit that controls the lower limit for scaling the coil current. If the bit is set, the limit is ¼ CS. If the bit is clear, the limit is ½ CS.                                                                                                                                                                                                                                                           | 0 1     | Minimum motor current: 1/2 of CS 1/4 of CS                               |
| Status word | Description                                                                                                                                                                                                                                                                                                                                                                                                  | Range   | Comment                                                                  |
| SE          | 5-bit unsigned integer reporting the actual cur- rent scaling value determined by CoolStep. This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. The value will not be greater than the value of CS or lower than either ¼ CS or ½ CS depending on SEIMIN setting.                                                                                                                    | 0… 31   | Actual motor current scaling factor set by CoolStep: 1/32, 2/32, … 32/32 |

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

The  TMC2590  allows  full  control  over  all  configuration  parameters  and  mode  bits  through  the  SPI interface. In SPI mode, initialization is required prior to motor operation. The SPI interface also allows reading back status values and bits.

## 7.1 Bus Signals

The SPI bus on the TMC2590 has four signals:

- SCK bus clock input
- SDI serial data input
- SDO serial data output
- CSN chip select input (active low)

The slave  is  enabled  for  an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the slave latching the data from SDI on the rising edge of SCK and driving data to SDO following the falling edge. The most significant bit is sent first. A minimum of 20 SCK clock cycles is required for a bus transaction with the TMC2590.

If more than 20 clocks are driven, the additional bits shifted into SDI are shifted out on SDO after a 20-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the slave. If more than 20 bits are sent, only the last 20 bits received before the rising edge of CSN are recognized as the command.

## 7.2 Bus Timing

SPI interface is synchronized to the internal system clock, which limits the SPI bus clock SCK to half of the system clock frequency. If the system clock is based on the on-chip oscillator, an additional 10% safety margin must be used to ensure reliable data transmission. All SPI inputs as well as the ENN input are internally filtered to avoid triggering on pulses shorter than 20ns. Figure 7.1 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

Figure 7.1 SPI Timing

<!-- image -->

## Hint

Usually, this SPI timing is referred to as SPI MODE 3. Data change is at the negative SCK edge, and SCK  return  to  high  level.  CSN  spans  the  complete  20-bit  transmission,  resp.  24-bit  (filled  with  4 dummy bits) transmission for bytewise interface.

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

Figure 7.2 Interfaces to a TMC429 motion controller chip and a TMC2590 motor driver

<!-- image -->

Figure 7.2 shows the interfaces in a typical application. The SPI bus is driven by an embedded MCU to initialize the control registers of both a motion controller and one or more motor drivers. STEP/DIR interfaces are used between the motion controller and the motor drivers.

## 7.4 Register Write Commands

An SPI bus transaction to the TMC2590 is a write command to one of the five write-only registers that hold configuration parameters and mode bits:

| Register                                      | Description                                                                                                                                                                                                                                                                               |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Driver Control Register (DRVCTRL)             | The DRVCTRL register has different formats for controlling the interface to the motion controller depending on whether or not the STEP/DIR interface is enabled.                                                                                                                          |
| Chopper Configuration Register (CHOPCONF)     | The CHOPCONF register holds chopper parameters and mode bits.                                                                                                                                                                                                                             |
| CoolStep Configuration Register (SMARTEN)     | The SMARTEN register holds CoolStep parameters and a mode bit. (smartEnergy is an earlier name for CoolStep.)                                                                                                                                                                             |
| StallGuard2 Configuration Register (SGCSCONF) | The SGCSCONF register holds StallGuard2 parameters and a mode bit.                                                                                                                                                                                                                        |
| Driver Configuration Register (DRVCONF)       | The DRVCONF register holds parameters and mode bits used to control the power MOSFETs and the protection circuitry. It also holds the SDOFF bit which controls the STEP/DIR interface and the RDSEL parameter which controls the contents of the response returned in an SPI transaction. |

In the following sections, multibit binary values are prefixed with a % sign, for example %0111.

## 7.4.1 Write Command Overview

The table below shows the formats for the five register write commands. Bits 19, 18, and sometimes 17  select  the  register  being  written,  as  shown  in  bold.  The  DRVCTRL  register  has  two  formats,  as selected by the SDOFF bit. Bits shown as 0 must always be written as 0, and bits shown as 1 must always  be  written  with  1.  Detailed  descriptions  of  each  parameter  and  mode  bit  are  given  in  the following sections.

|   Register/ Bit | DRVCTRL ( SDOFF =1)   | DRVCTRL ( SDOFF =0)   | CHOPCONF   | SMARTEN   | SGCSCONF   | DRVCONF   |
|-----------------|-----------------------|-----------------------|------------|-----------|------------|-----------|
|              19 | 0                     | 0                     | 1          | 1         | 1          | 1         |
|              18 | 0                     | 0                     | 0          | 0         | 1          | 1         |
|              17 | PHA                   | 0                     | 0          | 1         | 0          | 1         |
|              16 | CA7                   | 0                     | TBL1       | 0         | SFILT      | TST       |
|              15 | CA6                   | 0                     | TBL0       | SEIMIN    | 0          | SLPH1     |
|              14 | CA5                   | 0                     | CHM        | SEDN1     | SGT6       | SLPH0     |
|              13 | CA4                   | 0                     | RNDTF      | SEDN0     | SGT5       | SLPL1     |
|              12 | CA3                   | 0                     | HDEC1      | 0         | SGT4       | SLPL0     |
|              11 | CA2                   | 0                     | HDEC0      | SEMAX3    | SGT3       | SLP2      |
|              10 | CA1                   | 0                     | HEND3      | SEMAX2    | SGT2       | DIS_S2G   |
|               9 | CA0                   | INTPOL                | HEND2      | SEMAX1    | SGT1       | TS2G1     |
|               8 | PHB                   | DEDGE                 | HEND1      | SEMAX0    | SGT0       | TS2G0     |
|               7 | CB7                   | 0                     | HEND0      | 0         | 0          | SDOFF     |
|               6 | CB6                   | 0                     | HSTRT2     | SEUP1     | 0          | VSENSE    |
|               5 | CB5                   | 0                     | HSTRT1     | SEUP0     | 0          | RDSEL1    |
|               4 | CB4                   | 0                     | HSTRT0     | 0         | CS4        | RDSEL0    |
|               3 | CB3                   | MRES3                 | TOFF3      | SEMIN3    | CS3        | OTSENS    |
|               2 | CB2                   | MRES2                 | TOFF2      | SEMIN2    | CS2        | SHRTSENS  |
|               1 | CB1                   | MRES1                 | TOFF1      | SEMIN1    | CS1        | EN_PFD    |
|               0 | CB0                   | MRES0                 | TOFF0      | SEMIN0    | CS0        | EN_S2VS   |

## 7.4.2 Read Response Overview

The  table  below  shows  the  formats  for  the  read  response.  The  RDSEL  parameter  in  the  DRVCONF register selects the format of the read response.

|   Bit | RDSEL =%00   | RDSEL =%01   | RDSEL =%10   | RDSEL =%11   |
|-------|--------------|--------------|--------------|--------------|
|    19 | MSTEP9       | SG9          | SG9          | UV_7V        |
|    18 | MSTEP8       | SG8          | SG8          | ENN input    |
|    17 | MSTEP7       | SG7          | SG7          | S2VSB        |
|    16 | MSTEP6       | SG6          | SG6          | S2GB         |
|    15 | MSTEP5       | SG5          | SG5          | S2VSA        |
|    14 | MSTEP4       | SG4          | SE4          | S2GA         |
|    13 | MSTEP3       | SG3          | SE3          | OT150        |
|    12 | MSTEP2       | SG2          | SE2          | OT136        |
|    11 | MSTEP1       | SG1          | SE1          | OT120        |
|    10 | MSTEP0       | SG0          | SE0          | OT100        |
|     9 | 0            | 0            | 0            | 1            |
|     8 | 0            | 0            | 0            | 1            |
|     7 | STST         | STST         | STST         | STST         |
|     6 | OLB          | OLB          | OLB          | OLB          |
|     5 | OLA          | OLA          | OLA          | OLA          |
|     4 | SHORTB       | SHORTB       | SHORTB       | SHORTB       |
|     3 | SHORTA       | SHORTA       | SHORTA       | SHORTA       |
|     2 | OTPW         | OTPW         | OTPW         | OTPW         |
|     1 | OT           | OT           | OT           | OT           |
|     0 | SG           | SG           | SG           | SG           |

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

| DRVCTRL   | DRVCTRL   | Driver Control in STEP/DIR Mode (SDOFF=0)   | Driver Control in STEP/DIR Mode (SDOFF=0)                                                                                              |
|-----------|-----------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Bit       | Name      | Function                                    | Comment                                                                                                                                |
| 19        | 0         | Register address bit                        |                                                                                                                                        |
| 18        | 0         | Register address bit                        |                                                                                                                                        |
| 17        | 0         | Reserved                                    |                                                                                                                                        |
| 16        | 0         | Reserved                                    |                                                                                                                                        |
| 15        | 0         | Reserved                                    |                                                                                                                                        |
| 14        | 0         | Reserved                                    |                                                                                                                                        |
| 13        | 0         | Reserved                                    |                                                                                                                                        |
| 12        | 0         | Reserved                                    |                                                                                                                                        |
| 11        | 0         | Reserved                                    |                                                                                                                                        |
| 10        | 0         | Reserved                                    |                                                                                                                                        |
| 9         | INTPOL    | Enable STEP interpolation                   | 0: Disable STEP pulse interpolation. 1: Enable MicroPlyer STEP pulse multiplication by 16.                                             |
| 8         | DEDGE     | Enable double edge STEP pulses              | 0: Rising STEP pulse edge is active, falling edge is inactive. 1: Both rising and falling STEP pulse edges are active.                 |
| 7         | 0         | Reserved                                    |                                                                                                                                        |
| 6         | 0         | Reserved                                    |                                                                                                                                        |
| 5         | 0         | Reserved                                    |                                                                                                                                        |
| 4         | 0         | Reserved                                    |                                                                                                                                        |
| 3         | MRES3     | Microstep resolution for STEP/DIR mode      | Microsteps per fullstep: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |
| 2         | MRES2     | Microstep resolution for STEP/DIR mode      | Microsteps per fullstep: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |
| 1         | MRES1     | Microstep resolution for STEP/DIR mode      | Microsteps per fullstep: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |
| 0         | MRES0     | Microstep resolution for STEP/DIR mode      | Microsteps per fullstep: %0000: 256 %0001: 128 %0010: 64 %0011: 32 %0100: 16 %0101: 8 %0110: 4 %0111: 2 (halfstep) %1000: 1 (fullstep) |

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
| 8 7        | Sine wave offset                                             | CHM=1 %0000 … %1111: Offset is -3, -2, - 1, 0, 1, …, 12 This is the sine wave offset and 1/512 of the value becomes added to the absolute value of each sine wave entry. Hysteresis start offset from HEND: %000: 1 %100: 5 %001: 2 %101: 6 %010: 3 %110: 7 %011: 4 %111: 8                                                                                                                |
| 6          | HEND1 HEND0 HSTRT2 Hysteresis start value                    | CHM=0                                                                                                                                                                                                                                                                                                                                                                                      |
| 5          | or                                                           |                                                                                                                                                                                                                                                                                                                                                                                            |
|            | Fast decay time setting                                      |                                                                                                                                                                                                                                                                                                                                                                                            |
|            | HSTRT1                                                       | Effective: HEND+HSTRT must be ≤ 15                                                                                                                                                                                                                                                                                                                                                         |
| 4          | HSTRT0                                                       | CHM=1 Three least-significant bits of the duration of the fast decay phase. The MSB is HDEC0. Fast decay time is a multiple of system clock periods: N CLK = 32 x ( HDEC0+HSTRT )                                                                                                                                                                                                          |

| CHOPCONF   | CHOPCONF   | Chopper Configuration   | Chopper Configuration                                                                                                                                                                                                                                                                                           |
|------------|------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit        | Name       | Function                | Comment                                                                                                                                                                                                                                                                                                         |
| 3          | TOFF3      | Off time/MOSFET disable | Duration of slow decay phase. If TOFF is 0, the MOSFETs are shut off. If TOFF is nonzero, slow decay time is a multiple of system clock periods: N CLK = 24 + (32 x TOFF) (Minimum time is 64clocks.) %0000: Driver disable, all bridges off %0001: 1 (use with TBL of minimum 24 clocks) %0010 … %1111: 2 … 15 |
| 2          | TOFF2      | Off time/MOSFET disable |                                                                                                                                                                                                                                                                                                                 |
| 1          | TOFF1      | Off time/MOSFET disable |                                                                                                                                                                                                                                                                                                                 |
| 0          | TOFF0      | Off time/MOSFET disable |                                                                                                                                                                                                                                                                                                                 |

## 7.7 CoolStep Control Register (SMARTEN)

| SMARTEN   | SMARTEN   | CoolStep Configuration                                         | CoolStep Configuration                                                                                                                                                |
|-----------|-----------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit       | Name      | Function                                                       | Comment                                                                                                                                                               |
| 19        | 1         | Register address bit                                           |                                                                                                                                                                       |
| 18        | 0         | Register address bit                                           |                                                                                                                                                                       |
| 17        | 1         | Register address bit                                           |                                                                                                                                                                       |
| 16        | 0         | Reserved                                                       |                                                                                                                                                                       |
| 15        | SEIMIN    | Minimum CoolStep current                                       | 0: ½ CS current setting 1: ¼ CS current setting                                                                                                                       |
| 14        | SEDN1     | Current decrement speed                                        | Number of times that the StallGuard2 value must be sampled equal to or above the upper threshold for each decrement of the coil current: %00: 32 %01: 8 %10: 2 %11: 1 |
| 13        | SEDN0     | Current decrement speed                                        | Number of times that the StallGuard2 value must be sampled equal to or above the upper threshold for each decrement of the coil current: %00: 32 %01: 8 %10: 2 %11: 1 |
| 12        | 0         | Reserved                                                       |                                                                                                                                                                       |
| 11        | SEMAX3    | Upper CoolStep threshold as an offset from the lower threshold | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 10        | SEMAX2    | Upper CoolStep threshold as an offset from the lower threshold | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 9         | SEMAX1    | Upper CoolStep threshold as an offset from the lower threshold | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 8         | SEMAX0    | Upper CoolStep threshold as an offset from the lower threshold | If the StallGuard2 measurement value SG is sampled equal to or above (SEMIN+SEMAX+1) x 32 enough times, then the coil current scaling factor is decremented.          |
| 7         | 0         | Reserved                                                       |                                                                                                                                                                       |
| 6         | SEUP1     | Current increment size                                         | Number of current increment steps for each time that the StallGuard2 value SG is sampled below the lower threshold: %00: 1 %01: 2 %10: 4                              |
| 5         | SEUP0     | Current increment size                                         | Number of current increment steps for each time that the StallGuard2 value SG is sampled below the lower threshold: %00: 1 %01: 2 %10: 4                              |
| 4         | 0         | Reserved                                                       |                                                                                                                                                                       |
| 3         | SEMIN3    | Lower CoolStep threshold/CoolStep disable                      | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |
| 2         | SEMIN2    | Lower CoolStep threshold/CoolStep disable                      | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |
| 1         | SEMIN1    | Lower CoolStep threshold/CoolStep disable                      | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |
| 0         | SEMIN0    | Lower CoolStep threshold/CoolStep disable                      | If SEMIN is 0, CoolStep is disabled. If SEMIN is nonzero and the StallGuard2 value SG falls below SEMIN x 32, the CoolStep current scaling factor is increased.       |

## 7.8 StallGuard2 Control Register (SGCSCONF)

| SGCSCONF   | SGCSCONF   | StallGuard2 ™ and Current Setting               | StallGuard2 ™ and Current Setting                                                                                                                                                                                                                                                        |
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
| 4          | CS4        | Current scale (scales digital currents A and B) | Current scaling for SPI and STEP/DIR operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current.                                                                                  |
| 3          | CS3        | Current scale (scales digital currents A and B) | Current scaling for SPI and STEP/DIR operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current.                                                                                  |
| 2          | CS2        | Current scale (scales digital currents A and B) | Current scaling for SPI and STEP/DIR operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current.                                                                                  |
| 1          | CS1        | Current scale (scales digital currents A and B) | Current scaling for SPI and STEP/DIR operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current.                                                                                  |
| 0          | CS0        | Current scale (scales digital currents A and B) | Current scaling for SPI and STEP/DIR operation. %00000 … %11111: 1/32, 2/32, 3/32, … 32/32 This value is biased by 1 and divided by 32, so the range is 1/32 to 32/32. Example: CS=20 is 21/32 current.                                                                                  |

## 7.9 Driver Control Register (DRVCONF)

| DRVCONF   | DRVCONF   | Driver Configuration                                  | Driver Configuration                                                                                                                                                                                |
|-----------|-----------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit       | Name      | Function                                              | Comment                                                                                                                                                                                             |
| 19        | 1         | Register address bit                                  |                                                                                                                                                                                                     |
| 18        | 1         | Register address bit                                  |                                                                                                                                                                                                     |
| 17        | 1         | Register address bit                                  |                                                                                                                                                                                                     |
| 16        | TST       | Reserved TEST mode                                    | Must be cleared for normal operation. When set, the SG_TST output exposes digital test values, and the TEST_ANA output exposes analog test values.                                                  |
| 15        | SLPH1     | Slope control, high                                   | %000: Minimum slope, lowest driver strength … %111: Maximum slope, highest driver strength                                                                                                          |
| 14        | SLPH0     | side                                                  | %000: Minimum slope, lowest driver strength … %111: Maximum slope, highest driver strength                                                                                                          |
| 13        | SLPL1     | Slope control, low                                    | %000: Minimum slope, lowest driver strength … %111: Maximum slope, highest driver strength                                                                                                          |
| 12        | SLPL0     | side                                                  | See table on next page for details                                                                                                                                                                  |
| 11        | SLP2      | Slope control MSB for high side and low side          | %000: Minimum slope, lowest driver strength … %111: Maximum slope, highest driver strength                                                                                                          |
| 10        | DIS_S2G   | Short to GND protection disable                       | 0: Short to GND protection is enabled. 1: Short to GND protection is disabled.                                                                                                                      |
| 9         | TS2G1     | Short detection delay                                 | %00: 3.2µs.                                                                                                                                                                                         |
| 8         | TS2G0     | for high-side and low-side FETs                       | %01: 1.6µs. %10: 1.2µs. %11: 0.8µs.                                                                                                                                                                 |
| 7         | SDOFF     | STEP/DIR interface disable                            | 0: Enable STEP/DIR operation. 1: Disable STEP/DIR operation. SPI interface is used to move motor.                                                                                                   |
| 6         | VSENSE    | Sense resistor voltage-based current scaling          | 0: Full-scale sense resistor voltage is 325mV. 1: Full-scale sense resistor voltage is 173mV. (Full-scale refers to a current setting of 31.)                                                       |
| 5         | RDSEL1    | Select value for read out (RD bits)                   | %00 Microstep position read back                                                                                                                                                                    |
| 4         | RDSEL0    | Select value for read out (RD bits)                   | %01 StallGuard2 level read back %10 StallGuard2 and CoolStep current level read back                                                                                                                |
| 3         | OTSENS    | Overtemperature sensitivity                           | %11 All status flags and detectors 0: Shutdown at 150°C 1: Sensitive shutdown at 136°C                                                                                                              |
| 2         | SHRTSENS  | Short to GND detection sensitivity                    | 0: Low sensitivity 1: High sensitivity - better protection for high side FETs                                                                                                                       |
| 1         | EN_PFD    | Enable Passive fast decay / 5V undervoltage threshold | 0: No additional motor dampening. 1: Motor dampening to reduce motor resonance at medium velocity. In addition, this bit reduces the lower nominal operation voltage limit from 7V to 4.5V          |
| 0         | EN_S2VS   | Short to VS protection / CLK failsafe enable          | 0: Short to VS and overload protection disabled 1: Short to VS / overcurrent protection enabled. In addition, enables protection against clock input CLK fail, when using an external clock source. |

High side and low side slope control

| Register setting                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SLP2, SLPH1, SLPH0 %000: 1 (Minimum) %001: 1 (Minimum)+tc. %010: 2+tc %011: 3 %100: 4+tc %101: 5+tc. %110: 6+tc. %111: 7 (Maximum) | Gate driver strength 1 to 7. 7 is maximum current for fastest slopes. Adjust the gate driver strength to the gate charge of the external MOSFETs and check the desired slope. In temperature compensated mode (tc), the MOSFET gate driver strength is increased by one count if the overtemperature warning temperature is reached. This compensates for temperature dependency of high-side slope control. |
| SLP2, SLPL1, SLPL0 %000: 1 (Minimum) %001: 1 (Minimum) %010: 2 %011: 3 %100: 4 %101: 5 %110: 6 %111: 7 (Maximum)                   | Gate driver strength 1 to 7. 7 is maximum current for fastest slopes. Adjust the gate driver strength to the gate charge of the external MOSFETs and check the desired slope.                                                                                                                                                                                                                                |

## 7.10 Read Response

For  every  write  command  sent  to  the  motor  driver,  a  20-bit  response  is  returned  to  the  motion controller. The response has one of four formats, as selected by the RDSEL parameter in the DRVCONF register. The table below shows these formats.

| DRVSTATUS   | DRVSTATUS     | DRVSTATUS     | DRVSTATUS     | DRVSTATUS     | Read Response                           | Read Response                                                                                                                                                                                                                                                                                                             |
|-------------|---------------|---------------|---------------|---------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit         | Name          | Name          | Name          | Name          | Function                                | Comment                                                                                                                                                                                                                                                                                                                   |
| Bit         | RDSEL         | RDSEL         | RDSEL         | RDSEL         | Function                                | Comment                                                                                                                                                                                                                                                                                                                   |
| Bit         | %00           | %01           | %10           | %11           | Function                                | Comment                                                                                                                                                                                                                                                                                                                   |
| 19          | MSTEP9        | SG9           | SG9           | UV_7V         | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                         |
| 18          | MSTEP8        | SG8           | SG8           | ENN in        | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                         |
| 17          | MSTEP7        | SG7           | SG7           | S2VSB         | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                         |
| 16          | MSTEP6        | SG6           | SG6           | S2GB          | Microstep counter / StallGuard2 SG9:0 / | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                         |
| 15          | MSTEP5        | SG5           | SG5           | S2VSA         | StallGuard2                             | StallGuard2 value SG9:0.                                                                                                                                                                                                                                                                                                  |
| 14          | MSTEP4        | SG4           | SE4           | S2GA          | SG9:5 and                               | StallGuard2 value SG9:5 and the actual                                                                                                                                                                                                                                                                                    |
| 13          | MSTEP3        | SG3           | SE3           | OT150         | CoolStep                                | CoolStep scaling value SE4:0.                                                                                                                                                                                                                                                                                             |
| 12          | MSTEP2        | SG2           | SE2           | OT136         | SE4:0 /                                 | Full diagnostic: <7V VS flag, state of ENN                                                                                                                                                                                                                                                                                |
| 11          | MSTEP1        | SG1           | SE1           | OT120         | Diagnostic                              | input, individual short to GND and short to                                                                                                                                                                                                                                                                               |
| 10          | MSTEP0        | SG0           | SE0           | OT100         | status                                  | VS flags, temperature detector readout                                                                                                                                                                                                                                                                                    |
| 9           | 0             | 0             | 0             | 1             | -                                       | Unused bits                                                                                                                                                                                                                                                                                                               |
| 8           | 0             | 0             | 0             | 1             |                                         | Microstep position in sine table for coil A in STEP/DIR mode. MSTEP9 is the Polarity bit: 0: Current flows from OA1 pins to OA2 pins. 1: Current flows from OA2 pins to OA1 pins.                                                                                                                                         |
| 7           | STST          | STST          | STST          | STST          | Standstill indicator                    | 0: No standstill condition detected. 1: No active edge occurred on the STEP input during the last 2 20 system clock cycles.                                                                                                                                                                                               |
| 6 5         | OLB OLA       | OLB OLA       | OLB OLA       | OLB OLA       | Open load indicator                     | 0: No open load condition detected. 1: No chopper event has happened during the last period with constant coil polarity. Only a current above 1/16 of the maximum setting can clear this bit! Hint: This bit is only a status indicator. chip takes no other action when this bit set. False indications may occur during |
| 4           | SHORTB SHORTA | SHORTB SHORTA | SHORTB SHORTA | SHORTB SHORTA | Short                                   | The is fast motion and at standstill. Check this bit only during slow motion. 0: No short condition. 1: Short condition. The short counter is incremented by each short circuit and the chopper cycle is suspended. The counter is decremented for                                                                        |
|             |               |               |               |               | detection status                        | each phase polarity change. The MOSFETs are shut off when the counter reaches 3 and remain shut off until the shutdown condition is cleared by disabling and re-enabling the driver. The shutdown condition becomes reset by de-asserting the ENN input or clearing the TOFF parameter.                                   |
| 3           |               |               |               |               | Overtemp.                               | 0: No overtemperature warning condition. 1: Warning threshold is active.                                                                                                                                                                                                                                                  |
| 2           | OTPW          | OTPW          | OTPW          | OTPW          | warning                                 |                                                                                                                                                                                                                                                                                                                           |
| 1           | OT            | OT            | OT            | OT            | Overtemp. shutdown                      | 0: No overtemperature shutdown condition. 1: Overtemperature shutdown has occurred.                                                                                                                                                                                                                                       |
| 0           | SG            | SG            | SG            | SG            | StallGuard2 status                      | 0: No motor stall detected. 1: StallGuard2 threshold has been reached, and the SG_TST output is driven high.                                                                                                                                                                                                              |

## 7.11 Device Initialization

The following sequence of SPI commands is an example of enabling the driver and initializing the chopper:

```
SPI = $901B4; // Hysteresis mode or SPI = $94557; // Constant toff mode SPI = $D001F; // Current setting: $d001F (max. current) SPI = $EF013; // medium gate driver strength, StallGuard read, STEP & DIR-Mode, // enable short to VS protection, CLK failsafe and resonance dampening SPI = $00000; // 256 microstep setting
```

First test of CoolStep current control:

```
SPI = $A0222;
```

// Enable CoolStep with minimum current ½CS and medium fast response

The configuration parameters should be tuned to the motor  and application for  optimum performance.

## 8 STEP/DIR Interface

The STEP and DIR inputs provide a simple, standard interface compatible with many existing motion controllers.  The  MicroPlyer  STEP  pulse  interpolator  brings  the  smooth  motor  operation  of  highresolution microstepping to applications originally designed for coarser stepping and reduces pulse bandwidth.

## 8.1 Timing

Figure 8.1 shows the timing parameters for the STEP and DIR signals, and the table below gives their specifications.  When  the  DEDGE  mode  bit  in  the  DRVCTRL  register  is  set,  both  edges  of  STEP  are active. If DEDGE is cleared, only rising edges are active. STEP and DIR are sampled and synchronized to the system clock. An internal analog filter removes glitches on the signals, such as those caused by long PCB traces. If the signal source is far from the chip, and especially if the signals are carried on cables, the signals should additionally be filtered or differentially transmitted.

<!-- image -->

Figure 8.1 STEP/DIR timing

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
| STEP and DIR spike filtering time                  | t FILTSD                                   | Rising and falling edge                    | 12                                         | 20                                         | 40                                         | ns                                         |
| STEP and DIR sampling relative to rising CLK input | t SDCLKHI                                  | Before rising edge of CLK                  |                                            | t FILTSD                                   |                                            | ns                                         |

## 8.2 Microstep Table

The internal microstep table maps the sine function from 0° to 90°, and symmetries allow mapping the  sine  and  cosine  functions  from  0°  to  360°  with  this  table.  The  angle  is  encoded  as  a  10-bit unsigned integer MSTEP provided by the microstep counter. The size of the increment applied to the counter while microstepping through this table is controlled by the microstep resolution setting MRES in the DRVCTRL register. Depending on the DIR input, the microstep counter is increased (DIR=0) or decreased  (DIR=1)  by  the  step  size  with  each  STEP  active  edge.  Despite  many  entries  in  the  last quarter of the table being equal, the electrical angle continuously changes, because either the sine wave or cosine wave is in an area, where the current vector changes monotonically from position to position.  Figure  8.2  shows  the  table.  The  largest  values  are  248,  which  leaves  headroom  used  for adding an offset.

Figure 8.2 Internal microstep table showing the first quarter of the sine wave

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

For  each  active  edge  on  STEP,  MicroPlyer  produces  16  microsteps  at  256x  resolution,  as  shown  in Figure 8.3. MicroPlyer is enabled by setting the INTPOL bit in the DRVCTRL register. It supports input at  16x  resolution,  which it transforms into 256x resolution. The step rate for  each 16 microsteps is determined by measuring the time interval of the previous step period and dividing it into 16 equal parts. The maximum time between two active edges on the STEP input corresponds to 2 20  (roughly one million) system clock cycles, for an even distribution of 1/256 microsteps. At 16MHz system clock frequency,  this  results  in  a  minimum  step  input  frequency  of  16Hz  for  MicroPlyer  operation  (one fullstep  per  second).  A  lower  step  rate  causes  the  STST  bit  to  be  set,  which  indicates  a  standstill event. At that frequency, microsteps occur at a rate of 𝑠𝑦𝑠𝑡𝑒𝑚 𝑐𝑙𝑜𝑐𝑘 𝑓𝑟𝑒𝑞𝑢𝑒𝑛𝑐𝑦 2 16 = 244𝐻𝑧 .

Attention

MicroPlyer only works well with a stable STEP frequency. Do not use the DEDGE option if the STEP signal does not have a 50% duty cycle.

Figure 8.3 MicroPlyer microstep interpolation with rising STEP frequency

<!-- image -->

In Figure 8.3, the first STEP cycle is long enough to set the STST bit. This bit is cleared on the next STEP active edge. Then, the STEP frequency increases and after one cycle at the higher rate MicroPlyer increases the interpolated microstep rate. During the last cycle at the slower rate, MicroPlyer did not generate all 16 microsteps, so there is a tiny jump in motor angle between the first and second cycles at the higher rate.

## 8.5 Standstill Current Reduction

When a standstill  event  is  detected,  the  motor  current  should  be  reduced  to  save  energy  and  to reduce heat dissipation in the power MOSFET stage. Especially halfstep positions are worst-case for motor  and  driver  regarding  the  distribution  of  the  power  dissipation  because  the  full  energy  is consumed in one bridge and one motor coil.

## Hint

Implement a current reduction to 10% to 75% of the required run current for motor standstill. This saves more than 50% to more than 90% of energy. The actual level depends on the required holding force and on the required microstep precision during standstill. In standalone mode, a reduction to 50% current is possible using a configuration input.

## 9 Current Setting

The internal 5V supply voltage available at the pin 5VOUT is used as a reference for the coil current regulation based on the sense resistor voltage measurement. The desired maximum motor current is set by selecting an appropriate value for the sense resistor. The sense resistor voltage range can be selected by the VSENSE bit in the DRVCONF register. The low sensitivity (high sense resistor voltage, VSENSE=0) brings best and most robust current regulation, while high sensitivity (low sense resistor voltage, VSENSE=1) reduces power dissipation in the  sense resistor. This setting reduces the power dissipation in the sense resistor by nearly half.

After  choosing  the  VSENSE  setting  and  selecting  the  sense  resistor,  the  currents  to  both  coils  are scaled by the 5-bit current scale parameter CS in the SGCSCONF register. The sense resistor value is chosen so that the maximum desired current (or slightly more) flows at the maximum current setting (CS = %11111).

Using  the  internal  sine  wave  table,  which  has  amplitude  of  248,  the  RMS  motor  current  can  be calculated by:

<!-- formula-not-decoded -->

The momentary motor current is calculated as:

<!-- formula-not-decoded -->

where:

CS is the effective current scale setting as set by the CS bits and modified by CoolStep. The effective value ranges from 0 to 31.

VFS is  the  sense  resistor  voltage  at  full  scale,  as  selected  by  the  VSENSE  control  bit  (refer  to  the electrical characteristics).

CURRENTA/B is the value set by the current setting in SPI mode or the internal sine table in STEP/DIR mode.

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                  | Setting   | Comment                             |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------|
| CS          | Current scale . Scales both coil current values as taken from the internal sine wave table or from the SPI interface. For high precision motor operation, work with a current scaling factor in the range 16 to 31, because scaling down the current values reduces the effective microstep resolution by making microsteps coarser. This setting also controls the maximum current value set by CoolStep ™. | 0 … 31    | Scaling factor: 1/32, 2/32, … 32/32 |
| VSENSE      | Allows control of the sense resistor voltage range or adaptation of one electronic module to different maximum motor currents.                                                                                                                                                                                                                                                                               | 0         | 325mV                               |
| VSENSE      | Allows control of the sense resistor voltage range or adaptation of one electronic module to different maximum motor currents.                                                                                                                                                                                                                                                                               | 1         | 173mV                               |

## 9.1 Sense Resistors

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. As they also see the switching spikes from the MOSFET bridges, a low-inductance type such as film or composition resistors is required to prevent spikes causing ringing. A low-inductance, low-resistance PCB  layout  is  essential.  Keep  the  high-current  interconnections  as  short  as  possible  as  shown  in Figure  9.1.  A  massive  ground  plane  is  best.  Because  the  sense  resistor  inputs  are  susceptible  to damage from negative overvoltages, an additional input protection  resistor helps protect against  a motor cable break or load effects from long motor cables.

Figure 9.1 Sense resistor grounding and protection components

<!-- image -->

The  sense  resistor  needs  to  be  able  to  conduct  the  peak  motor  coil  current,  especially  in  motor standstill  conditions, unless standby power is reduced. Under normal conditions, the sense resistor sees the motor coil current with a duty cycle well below 50%.

The peak sense resistor power dissipation is:

<!-- formula-not-decoded -->

For high-current applications, power dissipation is halved by using the lower sense resistor voltage setting and the corresponding lower resistance value. In this case, any voltage drop in the PCB traces has a larger influence on the result. A compact power stage layout with massive ground plane is best to avoid parasitic resistance effects.

Set the desired maximum motor current by selecting an appropriate value for the sense resistor. The following  table  shows  the  RMS  current  values  which  are  reached  using  standard  resistors.  The resulting application current will be slightly lower due to slow decay phase and trace resistance.

| CHOICE OF   | R SENSE AND RESULTING MAX. MOTOR CURRENT FOR CS=31   | R SENSE AND RESULTING MAX. MOTOR CURRENT FOR CS=31   |
|-------------|------------------------------------------------------|------------------------------------------------------|
| R SENSE [Ω] | RMS current [A] VSENSE=0                             | RMS current [A] VSENSE=1                             |
| 0.33        | 0.7                                                  | 0.35                                                 |
| 0.27        | 0.85                                                 | 0.45                                                 |
| 0.22        | 1.05                                                 | 0.55                                                 |
| 0.15        | 1.5                                                  | 0.8                                                  |
| 0.12        | 1.9                                                  | 1.0                                                  |
| 0.10        | 2.3                                                  | 1.2                                                  |
| 0.075       | 3.1                                                  | 1.6                                                  |
| 0.066       | 3.5                                                  | 1.9                                                  |
| 0.050       | 4.6                                                  | 2.5                                                  |

## 10 Chopper Operation

The currents through both motor coils are controlled using choppers. The choppers work independently of each other. Figure 10.1 shows the three chopper phases:

On Phase: current flows in direction of target current

<!-- image -->

<!-- image -->

Fast Decay Phase: current flows in opposite direction of target current

Figure 10.1 Chopper phases

Although the current could be regulated using only on phases and fast decay phases, insertion of the slow  decay  phase  is  important  to  reduce  electrical  losses  and  current  ripple  in  the  motor.  The duration of the slow decay phase is specified in a control parameter and sets an upper limit on the chopper frequency. The current comparator can measure coil current during phases when the current flows through the sense resistor, but not during the slow decay phase, so the slow decay phase is terminated by a timer. The on phase is terminated by the comparator when the current through the coil reaches the target current. The fast decay phase may be terminated by either the comparator or another timer.

When the coil current is switched, spikes at the sense resistors occur due to charging and discharging parasitic  capacitances.  During  this  time,  typically  one  or  two  microseconds,  the  current  cannot  be measured. Blanking is the time when the input to the comparator is masked to block these spikes.

There are two  chopper  modes  available: a new  high-performance  chopper  algorithm  called SpreadCycle and a proven constant off-time chopper mode. The constant off-time mode cycles through three phases: on, fast decay, and slow decay. The SpreadCycle mode cycles through four phases: on, slow decay, fast decay, and a second slow decay.

Four parameters are used for controlling both chopper modes:

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                            | Setting   | Comment                                                                                                            |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------|
| TOFF        | Off time. This setting controls the duration of the slow decay time and limits the maximum chopper frequency. For most applications an off time within the range of 5µs to 20µs will fit. If the value is 0, the MOSFETs are all shut off and the motor can freewheel. A value of 1 to 15 sets the number of system clock cycles in the slow decay phase to: 𝑁 𝐶𝐿𝐾 = (𝑇𝑂𝐹𝐹 ∙ 32) +24 The SD-Time is 𝑡 = 1 𝑓 𝐶𝐿𝐾 ∙𝑁 𝐶𝐿𝐾 | 0         | Chopper off.                                                                                                       |
| TOFF        | Off time. This setting controls the duration of the slow decay time and limits the maximum chopper frequency. For most applications an off time within the range of 5µs to 20µs will fit. If the value is 0, the MOSFETs are all shut off and the motor can freewheel. A value of 1 to 15 sets the number of system clock cycles in the slow decay phase to: 𝑁 𝐶𝐿𝐾 = (𝑇𝑂𝐹𝐹 ∙ 32) +24 The SD-Time is 𝑡 = 1 𝑓 𝐶𝐿𝐾 ∙𝑁 𝐶𝐿𝐾 | 1… 15     | Off time setting. A setting in the range of 2-5 is recommended for SpreadCycle, higher values for classic chopper. |

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

It is easiest to find the best setting by starting from a low hysteresis setting (e.g., HSTRT =0, HEND =0) and  increasing HSTRT ,  until  the  motor  runs  smoothly  at  low  velocity  settings.  This  can  best  be checked  when  measuring  the  motor  current  either  with  a  current  probe  or  by  probing  the  sense resistor  voltages  (see  Figure  10.2).  Checking  the  sine  wave  shape  near  zero  transition  will  show  a

small ledge between both half waves in case the hysteresis setting is too small. At medium velocities (i.e. 100 to 400 fullsteps per second), a too low hysteresis setting will lead to increased humming and vibration of the motor.

<!-- image -->

f: 93.07Hz

Figure 10.2 No ledges in current wave with sufficient hysteresis (magenta: current A, yellow &amp; blue: sense resistor voltages A and B)

A too high hysteresis setting will lead to reduced chopper frequency and increased chopper noise but will not yield any benefit for the wave shape.

Quick Start

For detail tuning procedure see Application Note AN001 Parameterization of SpreadCycle

As experiments show, the setting is quite independent of the motor, because higher current motors typically also have a lower coil resistance. Therefore, choosing a low to medium default value for the hysteresis (for example, effective hysteresis = 4) normally fits most applications. The setting can be optimized  by  experimenting  with  the  motor:  A  too  low  setting  will  result  in  reduced  microstep accuracy,  while  a  too  high  setting  will  lead  to  more  chopper  noise  and  motor  power  dissipation. When measuring  the  sense  resistor  voltage  in  motor  standstill  at  a  medium  coil  current  with  an oscilloscope, a too low setting shows a fast decay phase not longer than the blanking time. When the fast decay time becomes slightly longer than the blanking time, the setting is optimum. You can reduce the off-time setting, if this is hard to reach.

The hysteresis principle could in some cases lead to the chopper frequency becoming too low, e.g., when the coil resistance is high when compared to the supply voltage. This is avoided by splitting the  hysteresis  setting  into  a  start  setting  ( HSTRT+HEND )  and  an  end  setting  ( HEND ).  An  automatic hysteresis  decrementer  (HDEC)  interpolates  between  both  settings,  by  decrementing  the  hysteresis value  stepwise  each  16,  32,  48,  or  64  system  clocks.  At  the  beginning  of  each  chopper  cycle,  the hysteresis begins with a value which is the sum of the start and the end values ( HSTRT + HEND ),  and decrements during the cycle, until either the chopper cycle ends, or the hysteresis end value ( HEND ) is reached.  This  way,  the  chopper  frequency  is  stabilized  at  high  amplitudes  and  low  supply  voltage situations, if the frequency gets too low. This avoids the frequency reaching the audible range.

Figure 10.3 SpreadCycle chopper scheme showing coil current during a chopper cycle

<!-- image -->

Three parameters control SpreadCycle mode:

| Parameter   | Description                                                                                                                                                                                                                                               | Setting   | Comment                                                                                                                             |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------|
| HSTRT       | Hysteresis start setting. Please remark, that this value is an offset to the hysteresis end value HEND.                                                                                                                                                   | 0… 7      | This setting adds to HEND. %000: 1 %100: 5 %001: 2 %101: 6                                                                          |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. Decrement interval time is controlled by HDEC. The sum HSTRT+HEND must be <16. At a current setting CS of max. 30 (amplitude reduced to 240), the sum is not limited. | 0… 2      | Negative HEND: - 3… -1 %0000: -3 %0001: -2 %0010: -1                                                                                |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. Decrement interval time is controlled by HDEC. The sum HSTRT+HEND must be <16. At a current setting CS of max. 30 (amplitude reduced to 240), the sum is not limited. | 3         | Zero HEND: 0 %0011: 0                                                                                                               |
| HEND        | Hysteresis end setting. Sets the hysteresis end value after a number of decrements. Decrement interval time is controlled by HDEC. The sum HSTRT+HEND must be <16. At a current setting CS of max. 30 (amplitude reduced to 240), the sum is not limited. | 4… 15     | Positive HEND: 1… 12 %0100: 1 %1010: 7 %0101: 2 %1011: 8 %0110: 3 %1100: 9 %0111: 4 %1101: 10 %1000: 5 %1110: 11 %1001: 6 %1111: 12 |
| HDEC        | Hysteresis decrement setting. This setting determines the slope of the hysteresis during on time and during fast decay time. It sets the number of system clocks for each decrement.                                                                      | 0… 3      | 0: fast decrement 3: very slow decrement %00: 16 %01: 32 %10: 48 %11: 64                                                            |

## EXAMPLE:

A hysteresis of 4 has been chosen. You might decide to not use hysteresis decrement. In this case set:

| HEND =6   | (sets an effective end value of 6-3=3)   |
|-----------|------------------------------------------|
| HSTRT =0  | (sets minimum hysteresis, i.e. 1: 3+1=4) |

To take advantage of the variable hysteresis, we can set most of the value to the HSTRT, i.e., 4, and the remaining 1 to hysteresis end. The resulting configuration register values are as follows:

| HEND =0   | (sets an effective end value of -3)                         |
|-----------|-------------------------------------------------------------|
| HSTRT =6  | (sets an effective start value of hysteresis end +7: 7-3=4) |

1100: 9

1101: 10

1110: 11

Hint

Highest motor velocities benefit from setting TOFF to 2 or 3 and a short TBL of 2 or 1.

## 10.2 Classic Constant Off-Time Chopper

The classic constant off-time chopper uses a fixed-time fast decay following each on phase. While the duration of the on phase is determined by the chopper comparator, the fast decay time needs to be fast enough for the driver to follow the falling slope of the sine wave, but it should not be so long that  it  causes  excess  motor  current  ripple  and  power  dissipation.  This  can  be  tuned  using  an oscilloscope or evaluating motor smoothness at different velocities. A good starting value is a fast decay time setting similar to the slow decay time setting.

Figure 10.4 Constant off-time chopper with offset showing the coil current during two cycles

<!-- image -->

After  tuning  the  fast  decay  time,  the  offset  should  be  tuned  for  a  smooth  zero  crossing.  This  is necessary because the fast decay phase makes the absolute value of the motor current lower than the target  current  (see  Figure  10.5).  If  the  zero  offset  is  too  low,  the  motor  stands  still  for  a  short moment during current zero crossing. If it is set too high, it makes a larger microstep. Typically, a positive offset setting is required for smoothest operation.

<!-- image -->

<!-- image -->

Target current corrected for optimum shape of coil current

Figure 10.5 Zero crossing with correction using sine wave offset

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

## Hint

A  common  cause  of  motor  noise  is  a  bad  PCB  layout  causing  coupling  of  both  sense  resistor voltages. Noise caused by an insufficient PCB layout cannot be overcome by chopper settings.

To minimize the effect of a beat between both chopper frequencies, an internal random generator is provided. It modulates the slow decay time setting when switched on by the RNDTF bit. The RNDTF feature further spreads the chopper spectrum, reducing electromagnetic emission on single frequencies.

| Parameter   | Description                                                                                                 | Setting   | Comment                             |
|-------------|-------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------|
| RNDTF       | Enables a random off-time generator, which slightly modulates the off-time t OFF using a random polynomial. | 0 1       | Disable. Random modulation enabled. |

## 11 Power MOSFET Stage

The TMC2590 provides gate drivers for two full-bridges using N- and P-channel power MOSFETs. The gate current for the MOSFETs can be adapted to influence the slew rate at the coil outputs. The main features of the stage are:

- -5V gate drive voltage for low-side N-MOS transistors, 10V for high-side P-MOS transistors.
- -The gate drivers protect the bridges actively against cross-conduction using an internal QGD protection that holds the MOSFETs safely off.
- -Automatic break-before-make logic minimizes dead time and diode-conduction time.
- -Integrated  overcurrent  protection  detects  a  short  of  the  motor  wires  and  protects  the MOSFETs.

The low-side gate driver is supplied by the 5VOUT pin. The low-side driver supplies 0V to the MOSFET gate  to  switch  off  the  MOSFET,  and  5VOUT  to  switch  it  on.  The  high-side  gate  driver  voltage  is supplied  by  the  VS  and  the  VHS  pin.  VHS  is  more  negative  than  VS  and  allows  bringing  the  VS referenced high-side MOSFET to conducting state. The high-side driver supplies VS to the P channel MOSFET gate to switch off the MOSFET and VHS to switch it on. The effective low-side gate voltage is roughly 5V; the effective high-side gate voltage is roughly 10V.

| Parameter   | Description                                                                                                                                                                           | Setting   | Comment                                                                               |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------|
| SLP2 & SLPL | Low-side slope control. Controls the MOSFET gate driver current. Set to a value appropriate for the external MOSFET gate charge and the desired slope. Common MSB with SLPH setting.  | 0… 7      | %000: Minimum. %001: Minimum. %010: Stage 2... … %111: Maximum.                       |
| SLP2 & SLPH | High-side slope control. Controls the MOSFET gate driver current. Set to a value appropriate for the external MOSFET gate charge and the desired slope. Common MSB with SLPL setting. | 0… 7      | %000: Minimum. %001: Minimum+TC. %010: Stage 2+TC … … %110: Stage 6+TC %111: Maximum. |

## 11.1 Break-Before-Make Logic

Each  half-bridge  has  to  be  protected  against  cross-conduction  during  switching  events.  When switching off the low-side MOSFET, its gate first needs to be discharged before the high-side MOSFET is allowed to switch on. The same goes when switching off the high-side MOSFET and switching on the low-side MOSFET. The time for charging and discharging of the MOSFET gates depends on the MOSFET gate charge and the gate driver current set by SLPL and SLPH. The BBM (break-before-make) logic measures the gate voltage and automatically delays turning on the opposite bridge transistor until  its  counterpart  is  discharged.  This  way,  the  bridge  will  always  switch  with  optimized  timing independent of the slope setting.

## 11.2 ENN Input

The MOSFETs can be completely disabled in hardware by pulling the ENN input high. This allows the motor to free-wheel. An equivalent function can be performed in software by setting the parameter TOFF to zero. The disable function for example can be used to allow the motor to be hot plugged. If a hardware disable function is not needed, tie ENN low.

## 11.3 Slope Control

The  TMC2590  provides  constant-current  gate  drivers  for  slope  control.  Seven  (resp.  eight)  driver strength settings allow adapting the driver strength to the drive requirements of the power MOSFETs

and adjusting the output slope of the controlled gate charge and discharge. A slower slope reduces electromagnetic  emissions,  but  it  increases  power  dissipation  in  the  MOSFETs.  The  actual  choice should be tried out in the application when using the desired MOSFETs.

The duration of the complete switching event depends on the total gate charge of the MOSFETs. In Figure 11.1, the voltage transition of the gate-charge output (dotted line) takes place during the socalled  Miller  plateau.  The  Miller  plateau  results  from  the  gate-to-drain  capacitance  of  the  MOSFET charging or discharging during switching. The datasheet for the MOSFETs typically will show a Miller plateau that only covers a part (for example, one quarter) of the complete charging/discharging event. The gate voltage level  at  which  the  Miller  plateau  starts  depends  on  the  threshold  voltage  of  the MOSFET and on the actual load current.

## MOSFET gate charge vs. switching event

<!-- image -->

QG -Total gate charge (nC)

Figure 11.1 MOSFET gate charge vs. VDS for a typical MOSFET during a switching event

The slope time tSLOPE can be calculated as:

## Where:

QMILLER is the charge the MOSFET needs for the switching event.

I GATE is the driver current setting.

The chopper  frequency  is  typically  slightly  above  the  audible  range,  around  18  kHz  to  40  kHz.  The lower  limit  for  the  slope  is  dictated  by  the  reverse  recovery  time  of  the  MOSFET  internal  diodes, unless additional Schottky diodes are used in parallel to the MOSFETs source-drain diode. For most applications a switching time between 20ns and 250ns is sufficient

## Example:

A circuit using the transistor in Figure 11.1 is operated with a gate current setting of 15mA. The Miller charge of the transistor is about 2.5nC.

<!-- formula-not-decoded -->

## Hint

Test the best driver strength setting in the application. A good value is found, if a further increment of driver strength does not lead to lower supply current (and thus reduced power dissipation).

<!-- formula-not-decoded -->

## 12 Diagnostics and Protection

## 12.1 Short Protection

The  TMC2590  protects  the  MOSFET  power  stages  against  a  short  circuit  or  overload  condition  by monitoring the voltage drop in the high-side MOSFETs, as well as the voltage drop in sense resistor and  low-side  MOSFETs  (Figure  12.1).  A  programmable  short  detection  delay  ( shortdelay )  allows adjusting  the  detector  to  work  with  different  power  stages  and  load  conditions.  Additionally,  the short detection is protected against single events, e.g., caused by ESD discharges, by retrying three times  before  switching  off  the  motor  continuously.  The  low  side  short  detector  also  provides  for overcurrent detection. It needs to be explicitly enabled by programming.

Figure 12.1 Short detection timing

| Parameter   | Description                                                                                                                                                                                                                         | Setting   | Comment                                         |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------|
| SHRTSENS    | The high-side overcurrent detector can be set to a higher sensitivity by setting this flag. This will allow detection of wrong cabling even with higher resistive motors.                                                           | 0/1       | 0: Low sensitivity 1: High sensitivity          |
| TS2G        | Short detection delay for high-side and low side detectors. The short detection delay shall cover the bridge switching time. %01 will work for most applications. A higher delay makes detection less sensitive to capacitive load. | 0/1       | %00: 3.2µs. %01: 1.6µs. %10: 1.2µs. %11: 0.8µs. |
| DIS_S2G     | Allows to disable short to VS protection.                                                                                                                                                                                           | 0/1       | Leave detection enabled for normal use (0).     |
| EN_S2VS     | Explicitly enable short to VS and overcurrent protection by setting this bit.                                                                                                                                                       | 0/1       | Enable detection for normal use (1).            |

<!-- image -->

As the low-side short detection includes the sense resistor, it is sensitive to the actual sense resistor and provides a good precision of overcurrent detection. This way, it will safely cover most overcurrent conditions.

| Status flag   | Description                                                                                                                                                                                                                                                                                            | Range   | Comment                                |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------|
| SHORTA S2VSA  | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short | 0 / 1   | 0: No short detected 1: Short detected |
| SHORTB        | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short | 0 / 1   |                                        |
| S2VSB         | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short | 0 / 1   |                                        |
| S2GA          | The SHORT bits identify a short condition on coil A or coil B persisting for multiple chopper cycles. The bits are cleared when the MOSFETs are disabled. Detailed warning for high-side or low-side FETs is available in S2VSA and S2VSB (low-side short detector) and S2GA and S2GB (high-side short | 0 / 1   |                                        |
| S2GB          | detector)                                                                                                                                                                                                                                                                                              | 0 / 1   |                                        |
|               |                                                                                                                                                                                                                                                                                                        | 0 / 1   |                                        |

## Hint

Once a short condition is safely detected, the corresponding driver bridge (A or B) becomes switched off, and the s2ga or s2gb flag, respectively s2vsa or s2vsb becomes set.

To restart the motor, disable and re-enable the driver.

## Attention

Short protection cannot protect the system and the power stages for all possible short events, as a short  event  is  rather  undefined,  and  a  complex  network  of  external  components  may  be  involved. Therefore, short circuits should basically be avoided.

## 12.2 Open-Load Detection

Interrupted  cables  are  a  common  cause  for  systems  failing,  e.g.,  when  connectors  are  not  firmly plugged. The TMC2590 detects open load conditions by checking if it can reach the desired motor coil current. This way, also undervoltage conditions, high motor  velocity settings or short  and overtemperature  conditions  may  cause  triggering  of  the  open  load  flag,  and  inform  the  user,  that motor torque  may  suffer.  In  motor  stand  still,  open  load  cannot  be  measured,  as  the  coils  might eventually have zero current.

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

The  driver  integrates  a  four-level  temperature  sensor  (100°C  pre-warning,  120°C  overtemperature release and selectable 136°C / 150°C thermal shutdown) for diagnostics and for protection of the IC and MOSFETs as well as for adjacent components against excess heat. Choose the overtemperature level to safely cover error conditions like missing heat convection. Heat is mainly generated by the power MOSFETs, and, at increased voltage, by the internal voltage regulators. For many applications, already  the  overtemperature  pre-warning  will  indicate  an  abnormal  operation  situation  and  can  be used to initiate user warning or power reduction measures like motor current reduction. The thermal shutdown is  just  an  emergency  measure  and  temperature  rising  to  the  shutdown  level  should  be prevented by design.

## Hint

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the overtemperature release level (120°C) to avoid continuous heating to the shutdown level. Cool down typically needs a few 100ms to 1 second.

The high-side P-channel gate drivers have a temperature dependency which can be compensated to some  extent  by  increasing  the  gate  driver  current  when  the  warning  temperature  threshold  is reached.  The  chip  automatically  corrects  for  the  temperature  dependency  above  the  warning temperature when the temperature-compensated modes of SLPH is used. In these modes, the gate driver current is increased by one step when the temperature warning threshold is reached.

| Status   | Description                                                                                                                                                                                     | Range   | Comment                                      |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------------|
| OTPW     | Overtemperature warning. This bit indicates whether the warning threshold is reached. Software can react to this setting by reducing current.                                                   | 0 / 1   | 1: temperature prewarning level reached      |
| OT       | Overtemperature shutdown. This bit indicates whether the shutdown threshold has been reached and the driver has been disabled.                                                                  | 0 / 1   | 1: driver shut down due to over- temperature |
| OTSENS   | Program overtemperature threshold to a reduced level to give better protection for the external power stage and other components. The driver re-enables when the temperature falls below 120°C. | 0 / 1   | 0: 150°C 1: 136°C                            |

## 12.4 Undervoltage Detection

The undervoltage detector monitors both the internal logic supply voltage and the supply voltage. It prevents operation of the chip when the MOSFETs cannot be guaranteed to operate properly because the gate drive voltage is too low. It also initializes the chip at power up.

In  undervoltage  conditions,  the  logic  control  block  becomes  reset  and  the  driver  is  disabled.  All MOSFETs are switched off. All internal registers are reset to zero. Software should additionally monitor the  supply  voltage  to  detect  an  undervoltage  condition.  If  software  cannot  measure  the  supply voltage, an undervoltage condition can be detected by reading out the SE current value. Following a reset due to undervoltage occurs, the CS parameter is cleared, which is reflected in an SE status of 0 in the read response.

| Status   | Description                                                                                                                                                                                                                | Range   | Comment                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------|
| EN_PFD   | Set this bit to allow operation with a 5V only supply. This bit additionally controls resonance dampening of the motor. Note, that the on- resistance of the P-channel MOSFETs might increase at low supply voltage level. | 0 / 1   | Undervoltage level 0: <7V 1: <4.5V |

Figure 12.2 Undervoltage reset timing

<!-- image -->

## Note

Be sure to operate the IC significantly above the undervoltage threshold to ensure reliable operation! Check for SE reading back as zero to detect an undervoltage event.

## 13 Power Supply Sequencing

The TMC2590 generates its own 5V supply for all internal operations. The internal reset of the chip is derived from the supply voltage regulator to ensure a clean start-up of the device after power up. During start up, the SPI unit is in reset and cannot be addressed. All registers become cleared.

VCC\_IO limits the voltage allowable on the inputs and outputs and is used for driving the outputs. It is included in undervoltage detection and reset. Therefore, the startup sequence of the VCC\_IO power supply with respect to VS is not important. VCC\_IO may start up before or after VS.

## 14 System Clock

The system clock is the timing reference for all functions. The internal system clock frequency for all operations is nominally 14MHz. An external clock of 8MHz to 16MHz can be supplied for more exact timing, especially when using CoolStep and StallGuard2.

## USING THE INTERNAL CLOCK

To  use  the  on-chip  oscillator  of  the  TMC2590,  tie  CLK  to  GND  near  the  chip.  The  actual  on-chip oscillator clock frequency can be determined by measuring the delay time between the last step and assertion  of the  STST (standstill) status bit, which is 2 20 clocks.  There  is  some  delay  in  reading  the STST bit through the SPI interface, but it is easily possible to measure the oscillator frequency within 1%. Chopper timing parameters can then be corrected using this measurement, because the oscillator is relatively stable over a wide range of environmental temperatures.

## Hint

In case well defined precise motor chopper operation are desired, it is supposed to work with an external clock source.

## USING EXTERNAL CLOCK

An external clock frequency of up to 16MHz can be supplied. It is recommended to use an external clock frequency between 10MHz and 16MHz for best performance. The external clock is enabled, and the on-chip oscillator is disabled with the first logic high driven on the CLK input. The duty cycle of the clock signal should be near 50%, especially for high frequencies. Ensure minimum high or low input time for the pin (refer to electrical characteristics).

## Attention :

Never leave the external clock input floating. It is not allowed to remain within the transition region (between valid low and high levels), as spurious clock signals might lead to short impulses and can corrupt  internal  logic  state.  Provide  an  external  pull-down  resistor,  in  case  the  driver  pin  (i.e., microcontroller output) does not provide a safe level directly after power up. If the external clock is suspended or disabled after the internal oscillator has been disabled, the chip will not operate. Be careful to switch off the power MOSFETs (by driving the ENN input high or setting the TOFF parameter to  0)  before  switching  off  the  clock,  because  otherwise  the  chopper  would  stop,  and  the  motor current level could rise uncontrolled. If the short to GND detection is enabled, it stays active even without clock.

To  avoid  the  risk  of  motor  overcurrent  upon  clock  input  fail,  enable  the  clock  failsafe  function  by setting EN\_S2VS bit. This bit at the same time enables the low side overcurrent and short protection.

| Status   | Description                                                                                                                                                                                                                                  | Range   | Comment                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------|
| EN_S2VS  | Set this bit to enable protection against a failing external CLK source. If set, the IC switches back to external clock after 32 to 48 internal clock cycles. At the same time, this bit controls the higher side short detector sensitivity | 0 / 1   | Undervoltage level 0: Stopping clock will stop the IC. 1: CLK fail safe protection |

Figure 14.1 Start-up requirements of CLK input

<!-- image -->

## 14.1 System Clock Frequency

A higher frequency allows faster step rates, faster SPI operation, and higher chopper frequencies. On the  other  hand,  it  may  cause  more  electromagnetic  emission  and  more  power  dissipation  in  the digital  logic.  Generally,  a  system  clock  frequency  of  10MHz  to  16MHz  should  be  sufficient  for  most applications, unless the motor is to operate at the highest velocities. If the application can tolerate reduced motor velocity and increased chopper noise, a clock frequency of 4MHz to 10MHz should be considered.

| CLK frequency   | Comment                                                                                                                                                                                       |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| internal        | 13-16MHz, typical. Tie clock input firmly to GND. See electrical characteristics for limits. The internal clock is sufficient, unless a good reproducibility of StallGuard values is desired. |
| 4-10 MHz        | Lower range sufficient for higher inductance motors                                                                                                                                           |
| 10-16 MHz       | Recommended for best results                                                                                                                                                                  |
| 16-20 MHz       | Option in case a lower frequency is not available Ensure 40-60% duty cycle                                                                                                                    |

## 15 MOSFET Examples

There are a many of N- and P-channel paired MOSFETs available suitable for the TMC2590, as well as single N- and P-devices. The important considerations are the electrical data (voltage, current, RDSon), package,  and  configuration  (single  vs.  dual).  The  following  table  shows  a  few  examples  of  SMD MOSFET pairs for different motor voltages and currents. These MOSFETs are recent types with a low total  gate  charge.  For  the  actual  application,  you  should  calculate  static  and  dynamic  power dissipation for a given MOSFET pair.

A total gate charge QG below 40nC (at 5V) is best for reaching reasonable slopes. The performance (QG and RDSon) of the low-side MOSFET contributes to 70% to the overall efficiency.

| Transistor Type     | Manu- facturer   | Voltage V DS   | Max. RMS Current (*)   | Package   | typ. R DSon N (5V)   | typ. R DSon P (10V)   | Q G N   | Q G P   | Test board size   |
|---------------------|------------------|----------------|------------------------|-----------|----------------------|-----------------------|---------|---------|-------------------|
| Unit                |                  | V              | A                      |           | mΩ                   | mΩ                    | nC      | nC      | cm²               |
| AOD4130 AOD409      | A&O              | 60             | 7                      | DPAK      | 30                   | 35                    | 13      | 22      | e160              |
| SUD23N06 SUD19P06   | Vishay           | 60             | 6                      | DPAK      | 35                   | 50                    | 8       | 22      | e160              |
| AP4575-GH           | APEC             | 60             | 4                      | TO252-4L  | 31                   | 64                    | 13      | 14      | 64                |
| AMD560C             | APower           | 60             | 4                      | TO252-4L  | 25                   | 80                    | 9       | 10      | e70               |
| AOD603A             | A&O              | 60             | 3                      | TO252-4L  | 67                   | 95                    | 4       | 16      | e70               |
| SI7414 SI7415       | Vishay           | 60             | 3                      | PPAK1212  | 28                   | 60                    | 9       | 12      | 35                |
| AO4611              | A&O              | 60             | 3                      | SO8       | 22                   | 34                    | 25      | 23      | e27               |
| AO4612              | A&O              | 60             | 2.5                    | SO8       | 64                   | 90                    | 5       | 8       | e27               |
| SI4559ADY           | Vishay           | 60             | 2.5                    | SO8       | 55                   | 110                   | 7       | 12      | e27               |
| AOD4184A AOD4189    | A&O              | 40             | 10                     | TO252     | 9                    | 20                    | 14      | 15      | e70               |
| AOD4186 AOD4185     | A&O              | 40             | 8                      | DPAK      | 15                   | 14                    | 9       | 19      | 70                |
| FDD8647L FDD4243    | On-Semi          | 40             | 7                      | DPAK      | 13                   | 40                    | 12      | 18      | e100              |
| FDD8424H            | On-Semi          | 40             | 4                      | DPAK-4L   | 23                   | 45                    | 9       | 14      | 40                |
| TMC1420             | Trinamic         | 40             | 4                      | PSO8      | 30                   | 38                    | 10      | 15      | 40                |
| AOD609              | A&O              | 40             | 4                      | TO252-4L  | 31                   | 40                    | 5       | 9       | e40               |
| AP4525GEH           | APEC             | 40             | 3.5                    | TO252-4L  | 32                   | 42                    | 9       | 9       | 40                |
| SI4564              | Vishay           | 40             | 3.5                    | SO8       | 17                   | 20                    | 10      | 22      | e27               |
| AO4614B             | A&O              | 40             | 3                      | SO8       | 38                   | 45                    | 4       | 8       | e27               |
| SI4599DY            | Vishay           | 40             | 3                      | SO8       | 36                   | 45                    | 5       | 12      | e27               |
| BSZ050N03 BSZ180P03 | Infineon         | 30             | 11                     | S3O8      | 7                    | 18                    | 13      | 15      | 70                |
| AOND32324           | A&O              | 30             | 8                      | DFN5x6EP2 | 14                   | 10                    | 14      | 18      | e40               |
| AP3C023A            | APEC             | 30             | 8                      | DFN5x6EP2 | 8                    | 14                    | 8       | 14      | e40               |
| AOD661A             | A&O              | 30             | 6                      | TO252-4L  | 13                   | 24                    | 7       | 10      | e40               |
| AOD607A             | A&O              | 30             | 4                      | TO252-4L  | 25                   | 22                    | 4       | 7       | 40                |
| AO4616              | A&O              | 30             | 3.5                    | SO8       | 24                   | 24                    | 9       | 16      | e27               |
| FDS8958A            | On-Semi          | 30             | 3.5                    | SO8       | 25                   | 45                    | 6       | 9       | e27               |
| AON7611             | A&O              | 30             | 3                      | DFN3x3EP  | 53                   | 35                    | 2       | 5       | 15                |
| AP4503BGM           | APEC             | 30             | 3                      | SO8       | 35                   | 35                    | 6       | 12      | e27               |
| SI4532CDY           | Vishay           | 30             | 3                      | SO8       | 50                   | 80                    | 3       | 4       | e27               |

* For duty cycle limited operation, 1.5 times or more current is possible. The maximum motor current applicable in a design depends upon PCB size and layout, because all of these transistors are mainly cooled through the PCB. The data given implies a certain board size and layout, especially for higher current designs. The maximum RMS current rating is a hint and is based on measurements on test boards with given size at reasonable heat up. Estimations for not tested types are based on a comparable type (estimated board sizes marked e).

## 16 Layout Considerations

The  PCB  layout  is  critical  to  good  performance,  because  the  environment  includes  both  highsensitivity analog signals and high-current motor drive signals. A massive GND plane is required for good results, both for heat conduction as well as electrical.

## 16.1 Sense Resistors

The sense resistors are susceptible to ground differences and ground ripple voltage, as the microstep current steps result in  voltages down to 0.5mV. Each sense resistor should have an individual and short connection to the GND plane. Place the sense resistors close to the power MOSFETs with one or more  vias  to  the  ground  plane  for  each  sense  resistor.  This  also  helps  to  keep  harmful  parasitic inductance small.

The  sense  resistor  layout  is  also  sensitive  to  coupling  between  the  axes.  The  two  sense  resistors should  not  share  a  common  ground  connection  trace  or  vias,  because  PCB  traces  have  some resistance. A symmetrical layout for both fullbridges on both sides of the TMC2590 makes it easiest to ensure symmetry as well as minimum coupling and disturbance between both coil current regulators. Use the differential sensing with individual GND connection near each sense resistors for best results at higher motor current.

## 16.2 Exposed Die Pad

The exposed die pad and all GND pins must be connected to a solid ground plane spreading heat into the board and providing for a stable GND reference. All signals of the TMC2590 are referenced to GND. Directly connect all GND pins to a common ground area.

## 16.3 Power Filtering

A  470nF  to  10µF  (6.3V,  min.)  ceramic  filtering  capacitor  on  5VOUT  should  be  placed  as  close  as possible to the 5VOUT pin, with its GND return going directly to the nearest GND pin. Use as short and as thick connections as possible. A 100nF filtering capacitor should be placed as close as possible from the VS pin to the ground plane. The motor  MOSFET bridge supply pins should be decoupled with an electrolytic capacitor (&gt;100 μF is recommended) and a ceramic capacitor, placed close to the device.

Consider that the switching motor coil outputs have a high dV/dt, and thus capacitive stray into high resistive signals can occur, if the motor traces are near other traces over longer distances.

## 16.4 Layout Example

<!-- image -->

Figure 16.1 Schematic of TMC2590-EVAL (power part)

<!-- image -->

Figure 16.2 Layout example

<!-- image -->

## 17 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                                                                                          | Symbol   | Min       | Max        | Unit   |
|------------------------------------------------------------------------------------------------------------------------------------|----------|-----------|------------|--------|
| Supply voltage                                                                                                                     | V VS     | -0.5      | 62         | V      |
| Supply and bridge voltage max. 20000s                                                                                              | V VS     |           | 65         | V      |
| Logic supply voltage                                                                                                               | V VCC    | -0.5      | 6.0        | V      |
| I/O supply voltage                                                                                                                 | V VIO    | -0.5      | 6.0        | V      |
| Logic input voltage                                                                                                                | V I      | -0.5      | V VIO +0.5 | V      |
| Analog input voltage                                                                                                               | V IA     | -0.5      | V CC +0.5  | V      |
| Voltages on low-side gate driver outputs (LSx)                                                                                     | V OLS    | -0.7      | V CC +0.7  | V      |
| Voltages on high-side gate driver outputs (HSx)                                                                                    | V OHS    | V HS -0.7 | V VS +0.7  | V      |
| Voltages on BM pins (BMx)                                                                                                          | V IBM    | -5        | V VS +5    | V      |
| Relative high-side gate driver voltage (V VS - V HS )                                                                              | V HSVS   | -0.5      | 15         | V      |
| Maximum current to/from digital pins and analog low voltage I/Os                                                                   | I IO     |           | +/-10      | mA     |
| Non-destructive short time peak current into input/output pins                                                                     | I IO     |           | 500        | mA     |
| 5V regulator output current                                                                                                        | I 5VOUT  |           | 50         | mA     |
| 5V regulator peak power dissipation (V VM -5V) * I 5VOUT                                                                           | P 5VOUT  |           | 1          | W      |
| Junction temperature                                                                                                               | T J      | -50       | 150        | °C     |
| Storage temperature                                                                                                                | T STG    | -55       | 150        | °C     |
| ESD-Protection (Human body model, HBM), in application (all pins soldered to application board using standard application circuit) | V ESDAP  |           | 2          | kV     |
| ESD-Protection (Human body model, HBM), device handling                                                                            | V ESDDH  |           | 500        | V      |

## 18 Electrical Characteristics

## 18.1 Operational Range

| Parameter                         | Symbol   |   Min |    Max | Unit   |
|-----------------------------------|----------|-------|--------|--------|
| Junction temperature              | T J      |   -40 | 125    | °C     |
| Supply voltage of the application | V VS     |     5 |  60    | V      |
| I/O supply voltage                | V VIO    |     3 |   5.25 | V      |

## 18.2 DC and AC Specifications

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes some values to stray. A device with typical values will not leave Min/Max range within the full temperature range.

| Power Supply Current                                     | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V           | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V   | DC Characteristics V VS = 24.0V   |
|----------------------------------------------------------|-----------------------------------|-------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Parameter                                                | Symbol                            | Conditions                                | Min                               | Typ                               | Max                               | Unit                              |
| Supply current, operating                                | I VS                              | f CLK =16MHz, 40kHz chopper, Q G =10nC    |                                   | 8                                 |                                   | mA                                |
| Supply current, MOSFETs off                              | I VS                              | f CLK =12MHz                              |                                   | 5                                 |                                   | mA                                |
| Supply current, MOSFETs off, dependency on CLK frequency | I VS                              | f CLK variable additional to I VS0        |                                   | 0.1                               |                                   | mA/ MHz                           |
| Static supply current                                    | I VS0                             | f CLK =0Hz, digital inputs at +5V or GND  |                                   | 3.5                               | 5.7                               | mA                                |
| Part of supply current NOT consumed from 5V supply       | I VSHV                            | MOSFETs off                               |                                   | 1.2                               |                                   | mA                                |
| IO supply current 5V                                     | I VIO                             | No load on outputs, inputs at V IO or GND |                                   | 50                                | 100                               | µA                                |

| NMOS Low-Side Driver                                   | DC Characteristics V LSX = 2.5V, slope setting controlled by SLPL   | DC Characteristics V LSX = 2.5V, slope setting controlled by SLPL   | DC Characteristics V LSX = 2.5V, slope setting controlled by SLPL   | DC Characteristics V LSX = 2.5V, slope setting controlled by SLPL   | DC Characteristics V LSX = 2.5V, slope setting controlled by SLPL   | DC Characteristics V LSX = 2.5V, slope setting controlled by SLPL   |
|--------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|
| Parameter                                              | Symbol                                                              | Conditions                                                          | Min                                                                 | Typ                                                                 | Max                                                                 | Unit                                                                |
| Gate drive current LSx                                 | I LSON                                                              | SLPL=%xx1 adder bit 0                                               |                                                                     | 12                                                                  |                                                                     | mA                                                                  |
| low-side switch ON                                     | I LSON                                                              | SLPL=%x1x adder bit 1                                               |                                                                     | 24                                                                  |                                                                     | mA                                                                  |
|                                                        | I LSON                                                              | SLPL=%011                                                           | 25                                                                  | 36                                                                  | 60                                                                  | mA                                                                  |
|                                                        | I LSON                                                              | SLPL=%1xx adder bit 2                                               |                                                                     | 42                                                                  |                                                                     | mA                                                                  |
| Gate drive current LSx low-side switch OFF             | I LSOFF                                                             | SLPL=%xx1 adder bit 0                                               |                                                                     | -15                                                                 |                                                                     | mA                                                                  |
|                                                        | I LSOFF                                                             | SLPL=%x1x adder bit 1                                               |                                                                     | -30                                                                 |                                                                     | mA                                                                  |
|                                                        | I LSOFF                                                             | SLPL=%011                                                           | -35                                                                 | -45                                                                 | -70                                                                 | mA                                                                  |
|                                                        | I LSOFF                                                             | SLPL=%1xx adder bit 2                                               |                                                                     | -45                                                                 |                                                                     | mA                                                                  |
| Gate off detector threshold                            | V GOD                                                               | V LSX falling                                                       |                                                                     | 1                                                                   |                                                                     | V                                                                   |
| Q GD protection resistance after detection of gate off | R LSOFFQGD                                                          | SLPL=%11 V LSX = 1V                                                 |                                                                     | 16                                                                  | 30                                                                  |                                                                    |
| Driver active output voltage                           | V LSON                                                              |                                                                     |                                                                     | V VCC                                                               |                                                                     | V                                                                   |

| PMOS High-Side Driver                                                                       | DC Characteristics V VS = 24.0V, V VS - V HSX = 2.5V, slope setting controlled by SLPH   | DC Characteristics V VS = 24.0V, V VS - V HSX = 2.5V, slope setting controlled by SLPH   | DC Characteristics V VS = 24.0V, V VS - V HSX = 2.5V, slope setting controlled by SLPH   | DC Characteristics V VS = 24.0V, V VS - V HSX = 2.5V, slope setting controlled by SLPH   | DC Characteristics V VS = 24.0V, V VS - V HSX = 2.5V, slope setting controlled by SLPH   | DC Characteristics V VS = 24.0V, V VS - V HSX = 2.5V, slope setting controlled by SLPH   |
|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Parameter                                                                                   | Symbol                                                                                   | Conditions                                                                               | Min                                                                                      | Typ                                                                                      | Max                                                                                      | Unit                                                                                     |
| Gate drive current HSx high-side switch ON (impulse current for 1µs after switching event)  | I HSON                                                                                   | SLPH=%xx1 adder bit 0                                                                    |                                                                                          | -14                                                                                      |                                                                                          | mA                                                                                       |
| Gate drive current HSx high-side switch ON (impulse current for 1µs after switching event)  | I HSON                                                                                   | SLPH=%x1x adder bit 1                                                                    |                                                                                          | -28                                                                                      |                                                                                          | mA                                                                                       |
| Gate drive current HSx high-side switch ON (impulse current for 1µs after switching event)  | I HSON                                                                                   | SLPH=%011                                                                                | -25                                                                                      | -42                                                                                      | -70                                                                                      | mA                                                                                       |
| Gate drive current HSx high-side switch ON (impulse current for 1µs after switching event)  | I HSON                                                                                   | SLPH=%1xx adder bit 2                                                                    |                                                                                          | -50                                                                                      |                                                                                          | mA                                                                                       |
| Gate drive current HSx high-side switch OFF (impulse current for 1µs after switching event) | I HSOFF                                                                                  | SLPH=%xx1 adder bit 0                                                                    |                                                                                          | 15                                                                                       |                                                                                          | mA                                                                                       |
| Gate drive current HSx high-side switch OFF (impulse current for 1µs after switching event) | I HSOFF                                                                                  | SLPH=%x1x adder bit 1                                                                    |                                                                                          | 29                                                                                       |                                                                                          | mA                                                                                       |
| Gate drive current HSx high-side switch OFF (impulse current for 1µs after switching event) | I HSOFF                                                                                  | SLPH=%011                                                                                | 28                                                                                       | 43                                                                                       | 70                                                                                       | mA                                                                                       |
| Gate drive current HSx high-side switch OFF (impulse current for 1µs after switching event) | I HSOFF                                                                                  | SLPH=%1xx adder bit 2                                                                    |                                                                                          | 55                                                                                       |                                                                                          | mA                                                                                       |
| Gate off detector threshold                                                                 | V GOD                                                                                    | V HSX rising                                                                             |                                                                                          | V VS -1                                                                                  |                                                                                          | V                                                                                        |
| Q GD protection resistance after detection of gate off                                      | R HSOFFQGD                                                                               | SLPH=%11 V HSX = V VS - 1V Low-side switching                                            |                                                                                          | 20                                                                                       | 60                                                                                       |                                                                                         |
| MOSFET active output voltage                                                                | V HSON                                                                                   | I OUT = 0mA                                                                              |                                                                                          | V VHS                                                                                    |                                                                                          | V                                                                                        |

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

| Clock Oscillator and CLK Input                                  | Timing Characteristics   | Timing Characteristics                          | Timing Characteristics   | Timing Characteristics   | Timing Characteristics   | Timing Characteristics   |
|-----------------------------------------------------------------|--------------------------|-------------------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                                                       | Symbol                   | Conditions                                      | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =-50°C                                      | 10.0                     | 13.5                     |                          | MHz                      |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =50°C                                       | 10.8                     | 14.3                     | 17.5                     | MHz                      |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =150°C                                      |                          | 14.5                     | 18.0                     | MHz                      |
| External clock frequency (operating)                            | f CLK                    | Typ. at 40%/60% dutycycle, Max at 50% dutycycle | 4                        | 10-13.4                  | 16                       | MHz                      |
| External clock high / low level time                            | t CLK                    |                                                 | 16                       |                          |                          | ns                       |
| External clock first pulse to trigger switching to external CLK | t CLKH / t CLKL          | CLK driven high (2018 Lot 3851, only) Later ICs | 25 16                    |                          |                          | ns                       |
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
| Sense input peak threshold voltage (low sensitivity)  | V SRTRIPL            | VSENSE=0 Cx=248; Hyst.=0 | 310                  | 325                  | 340                  | mV                   |
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

- a) Digital  inputs  left  within  or  near  the  transition  region  substantially  increase  power  supply current  by  drawing  power  from  the  internal  5V  regulator.  Make  sure  that  digital  inputs become driven near to 0V and up to the VIO I/O voltage. There are no on-chip pull-up or pulldown resistors on inputs.

## 19 Package Mechanical Data

## 19.1 Dimensional Drawings

Attention: Drawings not to scale.

C

<!-- image -->

Figure 19.1 Dimensional drawings

| Parameter                     | Ref   | Min   | Nom   | Max   |
|-------------------------------|-------|-------|-------|-------|
| Total thickness               | A     |       |       | 1.139 |
| Standoff                      | A1    | 0.039 |       | 0.089 |
| Mold thickness                | A2    | 0.95  | 1     | 1.05  |
| Lead width (plating)          | b     | 0.17  | 0.22  | 0.27  |
| Lead width                    | b1    | 0.17  | 0.2   | 0.23  |
| Leadframe thickness (plating) | c     | 0.09  |       | 0.2   |
| Leadframe thickness           | c1    | 0.09  |       | 0.16  |
| Size X                        | D     |       | 7.0   |       |
| Size Y                        | E     |       | 7.0   |       |
| Body size X                   | D1    |       | 5.0   |       |

SCALE:18/1

| Parameter              | Ref   | Min   | Nom   | Max   |
|------------------------|-------|-------|-------|-------|
| Body size Y            | E1    |       | 5.0   |       |
| Lead pitch             | e     |       | 0.5   |       |
|                        | L     | 0.45  | 0.6   | 0.75  |
| Footprint              | L1    |       | 1 REF |       |
|                        |      | 0°    | 3.5°  | 7°    |
|                        |  1   | 0°    |       |       |
|                        |  2   | 11°   | 12°   | 13°   |
|                        |  3   | 11°   | 12°   | 13°   |
|                        | R1    | 0.08  |       |       |
|                        | R2    | 0.08  |       | 0.2   |
|                        | S     | 0.2   |       |       |
| Exposed die pad size X | M     | 2.68  | 2.78  | 2.88  |
| Exposed die pad size Y | N     | 2.68  | 2.78  | 2.88  |
|                        | P     | 0.99  | 1.04  | 1.09  |
|                        | Q     | 1.19  | 1.24  | 1.29  |
|                        | T     | 0.05  |       | 0.15  |
|                        | U     | 0.35  |       | 0.45  |
|                        | V     | 0.45  |       | 0.55  |
| Package edge tolerance | aaa   |       | 0.2   |       |
| Lead edge tolerance    | bbb   |       | 0.2   |       |
| Coplanarity            | ccc   |       | 0.08  |       |
| Lead offset            | ddd   |       | 0.08  |       |
| Mold flatness          | eee   |       | 0.05  |       |

## 19.2 Package Code

| Device   | Package          | Temperature range   | Code/ Marking     |
|----------|------------------|---------------------|-------------------|
| TMC2590  | TQFP32-EP (RoHS) | -40° to +125°C      | TMC2590-TA / YYWW |

WW=Week, YY=Year

## 20 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information  given  in  this  data  sheet  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 21 ESD Sensitive Device

The TMC2590 is an ESD-sensitive  CMOS device and sensitive to electrostatic  discharge.  Take  special care to use adequate grounding of personnel and machines in manual handling. After soldering the devices to the board, ESD requirements are more relaxed. Failure to do  so can result in defects or decreased reliability.

<!-- image -->

Note: In a modern SMD manufacturing process, ESD voltages well below 100V are standard. A major source  for  ESD  is  hot-plugging  the  motor  during  operation.  As  the  power  MOSFETs  are  discrete devices, the device in fact is very rugged concerning any ESD event on the motor outputs. All other connections are typically protected due to external circuitry on the PCB.

## 22 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 23 Table of Figures

| Figure 1.1 Applications block diagrams .........................................................................................................................4                                                                                                     |       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Figure 2.1 TMC2590 pin assignments..............................................................................................................................6                                                                                                     |       |
| Figure 3.1 TMC2590 block diagram and application schematic...............................................................................8                                                                                                                            |       |
| Figure 3.2 Standard application circuit...........................................................................................................................9                                                                                                   |       |
| Figure 3.3 External NMOS gate driver circuit ..............................................................................................................10                                                                                                         |       |
| Figure 4.1 Standalone configuration.............................................................................................................................11                                                                                                    |       |
| Figure 5.1 StallGuard2 load measurement SG as a function of load..................................................................12                                                                                                                                  |       |
| Figure 5.2 Linear interpolation for optimizing SGT with changes in velocity..................................................13                                                                                                                                       |       |
| Figure 6.1 Energy efficiency example with CoolStep ................................. Fehler! Textmarke nicht definiert.                                                                                                                                               |       |
| Figure 6.2 CoolStep adapts motor current to the load ...........................................................................................16                                                                                                                    |       |
| Figure 7.1 SPI Timing ........................................................................................................................................................19                                                                                      |       |
| Figure 7.2 Interfaces to a TMC429 motion controller chip and a TMC2590 motor driver.............................20                                                                                                                                                    |       |
| Figure 8.1 STEP/DIR timing ..............................................................................................................................................32                                                                                           |       |
| Figure 8.2 Internal microstep table showing the first quarter of the sine wave...........................................33                                                                                                                                           |       |
| Figure 8.3 MicroPlyer microstep interpolation with rising STEP frequency ......................................................34                                                                                                                                     |       |
| Figure 9.1 Sense resistor grounding and protection components......................................................................37                                                                                                                                 |       |
| Figure 10.1 Chopper phases ............................................................................................................................................38                                                                                             |       |
| Figure 10.2 No ledges in current wave with sufficient hysteresis (magenta: current A, yellow & sense resistor voltages A and B) ...................................................................................................................................40 | blue: |
| Figure 10.3 SpreadCycle chopper scheme showing coil current during a chopper cycle.............................41                                                                                                                                                     |       |
| Figure 10.4 Constant off-time chopper with offset showing the coil current during two cycles..............42                                                                                                                                                          |       |
| Figure 10.5 Zero crossing with correction using sine wave offset......................................................................42                                                                                                                              |       |
| Figure 11.1 MOSFET gate charge vs. V DS for a typical MOSFET during a switching event ............................45                                                                                                                                                  |       |
| Figure 12.1 Short detection timing................................................................................................................................46                                                                                                  |       |
| Figure 12.2 Undervoltage reset timing.........................................................................................................................49                                                                                                      |       |
| Figure 14.1 Start-up requirements of CLK input ........................................................................................................51                                                                                                             |       |
| Figure 16.1 Schematic of TMC2590-EVAL (power part).............................................................................................54                                                                                                                     |       |
| Figure 16.2 Layout example.............................................................................................................................................55                                                                                             |       |
| Figure 19.1 Dimensional drawings................................................................................................................................61                                                                                                    |       |

## 24 Revision History

|   Version | Date        | Author BD = Bernhard Dwersteg   | Description                                                                                                           |
|-----------|-------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------|
|      0.04 | 2018-AUG-30 | BD                              | First draft                                                                                                           |
|      0.1  | 2018-SEP-26 | BD                              | Added application schematic                                                                                           |
|      1    | 2018-OKT-18 | BD                              | Checked / corrected electrical characteristics                                                                        |
|      1.01 | 2019-SEP-18 | BD                              | Updated order codes                                                                                                   |
|      1.02 | 2020-JUL-06 | BD                              | Minor fixes, changed Logo                                                                                             |
|      1.03 | 2021-JUN-22 | BD                              | Minor corrections, Added chapter on external power stage                                                              |
|      1.04 | 2022-FEB-15 | BD                              | Updated logo; updated 3.2; corrected open load detection conditions; corrected upper limit for I VS0 from 5 to 5.7mA. |

## 25 References

[TMC2590-Calculation sheet] Calculation spreadsheet from website

Please refer to our web page http://www.trinamic.com.