<!-- lastmod 2023-08-03 -->
## TMC2100 DATASHEET

Standalone intelligent Step/Direction driver for two-phase bipolar stepper motor. StealthChop™ for quiet movement. Integrated MOSFETs for up to 2.0 A motor current per coil.

<!-- image -->

## FEATURES AND BENEFITS

2-phase stepper motors up to 2.0A coil current (2.5A peak)

Standalone Driver

Voltage Range 4.75… 46 V DC

Smooth Run 256 microsteps from 4 or 16 microsteps input (or from halfstepping, SpreadCycle only)

Step/Dir Interface with microstep interpolation MicroPlyer ™

StealthChop ™ for quiet operation and smooth motion

SpreadCycle ™ highly dynamic motor control chopper

Integrated Current Sense Option

Standstill Current Reduction

Full Protection &amp; Diagnostics (two outputs)

Small Size 5x6mm 2  QFN36 package or TQFP48 package

## BLOCK DIAGRAM

<!-- image -->

<!-- image -->

<!-- image -->

## APPLICATIONS

3D printers Textile, Sewing Machines Office Automation Consumer, Home CCTV, Security ATM, Cash recycler POS

Printers &amp; Scanners

## DESCRIPTION

The TMC2100 is a standalone driver IC. This small  and  intelligent  standalone  driver  for two-phase  stepper  motors  offers  marketleading features while being configured by seven  pins  only.  CPU  interaction  is  not required.  Drive  the  motor  via  Step  and Direction  signals.  TRINAMICs  sophisticated StealthChop chopper ensures noiseless operation combined  with  efficiency  and best motor torque. Integrated power MOSFETs handle motor currents up to 1.2A RMS continuously (QFN package) / 1.4A RMS (TQFP)  per  coil.  For  saving  energy,  the TMC2100 provides standstill current reduction. Protection and diagnostic features support robust and reliable operation. The TMC2100 enables miniaturized designs with low external component  count for cost-effective and highly competitive solutions.

## APPLICATION EXAMPLES: SIMPLE SOLUTIONS -HIGHLY EFFECTIVE

The TMC2100 scores with power density, integrated power MOSFETs, smooth and quiet operation, and a congenial simplicity. The TMC2100 covers a wide spectrum of applications from battery systems up to embedded applications with up to 2.0A peak motor current per coil.  TRINAMICs unique chopper modes SpreadCycle and StealthChop optimize drive performance. StealthChop reduces motor noise to the point of silence during low velocities. Standby current reduction keeps costs for power dissipation and  cooling  down.  Extensive  support  enables  rapid  design  cycles  and  fast  time-to-market  with competitive products.

## STANDALONE DESIGN FOR ONE STEPPER MOTOR

<!-- image -->

## MINIATURIZED DESIGN FOR ONE STEPPER MOTOR

<!-- image -->

## EVALUATION BOARD SYSTEM

<!-- image -->

In  this  example,  configuration  is  hard wired.  The  motor  is  driven  via  step and  direction  signals.  Motion  control tasks and interpreting ERROR and INDEX are software based.

.

Here, the CPU sends step and direction signals  to  the  TMC2100  and  reads  out ERROR and INDEX for diagnostic tasks. Further, the CPU configures the TMC2100 and manages motion control. Based on Step/Dir signals, the TMC2100 provides  motor  currents  for  each  axis and  smoothens  and  optimizes  drive performance.

The TMC2100-EVAL is part of TRINAMICs  universal  evaluation  board system  which  provides  a  convenient handling of the hardware as well as a user-friendly software tool for evaluation. The TMC2100 evaluation board  system  consists  of  three  parts: STARTRAMPE (base board), ESELSBRÜCKE  (connector board with several test points), and TMC2100-EVAL.

## ORDER CODES

| Order code         | Description                                                                 | Size [mm 2 ]   |
|--------------------|-----------------------------------------------------------------------------|----------------|
| TMC2100-LA         | Stepper Motor Driver IC, Step/Dir, 5-46V Supply, 1.2A, QFN36, Tray          | 5 x 6          |
| TMC2100-LA-T       | Stepper Motor Driver IC, Step/Dir, 5-46V Supply, 1.2A, QFN36, Tape & Reel   | 5 x 6          |
| TMC2100-TA         | Stepper Motor Driver IC, Step/Dir, 5-46V Supply, 1.4A, eTQFP48, Tray        | 7 x 7 (body)   |
| TMC2100-TA-T       | Stepper Motor Driver IC, Step/Dir, 5-46V Supply, 1.4A, eTQFP48, Tape & Reel | 7 x 7 (body)   |
| TMC2100-EVAL-KIT   | Full Evaluation Kit for TMC2100                                             | 126 x 85       |
| TMC2100-EVAL       | Evaluation board for TMC2100                                                | 85 x 55        |
| TMCSilentStepStick | Step Direction Driver Board with TMC2100                                    | 20 x 15        |

## Table of Contents

| 1     | KEY CONCEPTS ...................................................4           | KEY CONCEPTS ...................................................4           |                                                  |
|-------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|--------------------------------------------------|
|       | 1.1                                                                         | SOFTWARE ......................................................5            |                                                  |
|       | 1.2                                                                         | STEP/DIR I NTERFACE                                                         | ....................................5            |
|       | 1.3                                                                         | STANDSTILL CURRENT REDUCTION                                                | ..................5                              |
|       | 1.4                                                                         | DIAGNOSTICS AND PROTECTION                                                  | .....................5                           |
| 2     | PIN ASSIGNMENTS                                                             | PIN ASSIGNMENTS                                                             | ...........................................6     |
|       | 2.1                                                                         | PACKAGE OUTLINE                                                             | ..........................................6      |
|       | 2.2                                                                         | SIGNAL DESCRIPTIONS                                                         | ...................................7             |
| 3     | OPERATION .........................................................8        | OPERATION .........................................................8        |                                                  |
|       | 3.1                                                                         | CFG PIN CONFIGURATION                                                       | ..............................8                  |
| 4     | SUGGESTIONS FOR LAYOUT ........................11                           | SUGGESTIONS FOR LAYOUT ........................11                           |                                                  |
|       | 4.1                                                                         | BASIC HINTS FOR POWER SUPPLY                                                | ................11                               |
|       | 4.2                                                                         | REDUCED NUMBER OF COMPONENTS                                                | .............11                                  |
|       | 4.3                                                                         | I NTERNAL CURRENT SENSING ........................12                        |                                                  |
|       | 4.4                                                                         | EXTERNAL 5V POWER SUPPLY                                                    | ......................12                         |
|       | 4.5                                                                         | 5V ONLY SUPPLY                                                              | ..........................................13     |
|       | 4.6                                                                         | HIGH MOTOR CURRENT                                                          | .................................13              |
|       | 4.7                                                                         | DRIVER PROTECTION AND EME CIRCUITRY                                         | ...14                                            |
| 5     | STEALTHCHOP™ ..............................................16               | STEALTHCHOP™ ..............................................16               |                                                  |
|       | 5.1 CURRENT REGULATION                                                      | 5.1 CURRENT REGULATION                                                      | ..................................16             |
| 5.2   |                                                                             | AUTOMATIC SCALING                                                           | ....................................16           |
|       | 5.3                                                                         | ACCELERATION                                                                | ..............................................18 |
| 5.4   |                                                                             | SWITCHING BETWEEN STEALTHCHOP AND                                           |                                                  |
|       | SPREADCYCLE .............................................................19 | SPREADCYCLE .............................................................19 |                                                  |
| 6     | SPREADCYCLE ...................................................20           | SPREADCYCLE ...................................................20           |                                                  |
| 6.1 7 | SPREADCYCLE CHOPPER ................................21 SELECTING            | SENSE RESISTORS                                                             | ....................23                           |
| 8     | MOTOR CURRENT CONTROL ........................24                            | MOTOR CURRENT CONTROL ........................24                            |                                                  |
|       | ANALOG CURRENT SCALING AIN ..................24                             | ANALOG CURRENT SCALING AIN ..................24                             |                                                  |
| 8.1   |                                                                             |                                                                             |                                                  |
| 9     | INTERNAL SENSE RESISTORS ......................26                           | INTERNAL SENSE RESISTORS ......................26                           |                                                  |
| 10    | DIAGNOSTICS AND PROTECTION .........28                                      | DIAGNOSTICS AND PROTECTION .........28                                      |                                                  |
| 10.1  | TEMPERATURE MEASUREMENT .......................28                           | TEMPERATURE MEASUREMENT .......................28                           |                                                  |

| 10.2   | SHORT TO GND PROTECTION                                             | .......................28                                   |
|--------|---------------------------------------------------------------------|-------------------------------------------------------------|
| 10.3   | EMERGENCY STOP .........................................28          |                                                             |
| 10.4   | DIAGNOSTIC OUTPUT                                                   | ...................................28                       |
| 11     | STEP/DIR INTERFACE                                                  | ................................30                          |
| 11.1   | TIMING                                                              | .........................................................30 |
| 11.2   | CHANGING RESOLUTION                                                 | ...............................31                           |
| 11.3   | MICROPLYER STEP I NTERPOLATOR AND                                   | STAND                                                       |
| STILL  | DETECTION .......................................................32 |                                                             |
| 11.4   | INDEX OUTPUT                                                        | ...........................................33               |
| 12     | POWER-UP RESET                                                      | .......................................34                   |
| 13     | CLOCK OSCILLATOR AND INPUT                                          | ...........34                                               |
| 13.1   | CONSIDERATIONS ON THE FREQUENCY                                     | ..........34                                                |
| 14     | ABSOLUTE MAXIMUM RATINGS                                            | ............35                                              |
| 15     | ELECTRICAL CHARACTERISTICS                                          | ............35                                              |
| 15.1   | OPERATIONAL RANGE                                                   | ...................................35                       |
| 15.2   | DC AND TIMING CHARACTERISTICS                                       | ..............36                                            |
| 15.3   | THERMAL CHARACTERISTICS                                             | ..........................39                                |
| 16     | LAYOUT CONSIDERATIONS                                               | .....................40                                     |
| 16.1   | EXPOSED DIE PAD                                                     | ........................................40                  |
| 16.2   | WIRING GND                                                          | ..............................................40            |
| 16.3   | SUPPLY FILTERING                                                    | ........................................40                  |
| 16.4   | LAYOUT EXAMPLE : TMC2100-BOB                                        | ..............41                                            |
| 17     | PACKAGE MECHANICAL DATA                                             | ................43                                          |
| 17.1   | DIMENSIONAL DRAWINGS QFN36 5X6                                      | .......43                                                   |
| 17.2   | DIMENSIONAL DRAWINGS TQFP-EP48                                      | .......45                                                   |
| 17.3   | PACKAGE CODES                                                       | ...........................................46               |
| 18     | DISCLAIMER                                                          | .................................................47         |
| 19     | ESD SENSITIVE DEVICE                                                | ............................47                              |
| 20     | DESIGNED FOR SUSTAINABILITY                                         | .........47                                                 |
| 21     | TABLE OF FIGURES                                                    | ....................................48                      |
| 22     | REVISION HISTORY ...................................48              |                                                             |
| 23     | REFERENCES                                                          | .................................................48         |

## 1 Key Concepts

The  TMC2100  is  easy  to  use.  It  can  be  configured  by  seven  hardware  pins.  CPU  interaction  is  not necessary. The TMC2100 positions the motor based on step and direction signals and the integrated MicroPlyer  automatically  smoothens  motion.  Basic  standby  current  control  can  be  done  by  the TMC2100.  Optional  feedback  signals  allow  error  detection  and  synchronization.  Optionally,  current scaling is possible by providing an analog reference current IREF.

Configure the IC by pin settings. A CPU provides motion control via STEP and DIR pins and can access diagnostic information via the DIAG output.

Figure 1.1 TMC2100 standalone driver application diagram

<!-- image -->

The TMC2100 implements advanced features which are exclusive to TRINAMIC products. These features contribute  toward  greater  precision  and  smoother  motion  in  many  stepper  motor  applications. Particularly,  the  TMC2100  provides  special  chopper  algorithms  to  reduce  engine  noise  and  react extremely fast to changes in velocity and motor load.

StealthChop ™

is a voltage chopper-based principle. It guarantees that the motor is absolutely quiet in standstill and in slow motion, except for noise generated by ball bearings. The extremely smooth motion is beneficial for many applications.

SpreadCycle ™

offers smooth operation and great power efficiency over a wide range of speed and load.  The  SpreadCycle  chopper  scheme  automatically  integrates  a  fast  decay  cycle and guarantees smooth zero crossing performance.

MicroPlyer ™

microstep interpolator for obtaining increased smoothness of microstepping.

## 1.1 Software

Usually, the TMC2100 is configured to a fixed configuration using the related hardware pins. Status bits  for  error  detection  can  be  read  out  using  ERROR  and  INDEX.  The  TMC2100  is  a  stepper  motor driver chip that can be driven software based with only little effort. It does not need a master CPU or a motion controller IC, but step and direction signals have to be provided to drive a motor.

## 1.2 STEP/DIR Interface

The motor is controlled by a step and direction input. Active edges on the STEP input are rising ones. On each active edge, the state sampled from the DIR input determines whether to step forward or back.  Each  step  can  be  a  fullstep  or  a  microstep,  in  which  there  are  2,  4,  16  or  256  (interpolated) microsteps per fullstep. During microstepping, a step impulse with a low state on DIR increases the microstep  counter  and  with  a  high  state  decreases  the  counter  by  an  amount  controlled  by  the microstep resolution. An internal table translates the counter value into the sine and cosine values which control the motor current for microstepping.

## 1.3 Standstill Current Reduction

The automatic standstill current reduction allows to automatically reduce the motor current by nearly two-thirds to save energy in standstill. This is possible in many applications, as normally less holding torque is required. In case the standstill current option has been enabled, the motor current becomes softly ramped down from 100% to 34% in 44M clock cycles (3 to 4 seconds) if no step pulse has been issued for more than 3M clock cycles (standby delay time). The soft current ramp avoids a jerk on the motor.

Figure 1.2 Standstill current reduction

<!-- image -->

## 1.4 Diagnostics and Protection

The TMC2100 offers safeguards to detect and protect against shorted outputs, overtemperature, and undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC2100-LA package and pinning QFN-36 (5x6mm²)

<!-- image -->

Figure 2.2 TMC2100-TA package and pinning TQFP-48 (9x9mm² with leads)

<!-- image -->

## 2.2 Signal Descriptions

| Pin             | QFN36   | TQFP48                                         | Type   | Function                                                                                                                                                                                                                                                                                  |
|-----------------|---------|------------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLK             | 1       | 2                                              | DI     | CLK input. Tie to GND using short wire for internal clock or supply external clock.                                                                                                                                                                                                       |
| CFG3            | 2       | 3                                              | DI     | Configuration input                                                                                                                                                                                                                                                                       |
| CFG2            | 3       | 4                                              | DI     | Configuration input                                                                                                                                                                                                                                                                       |
| CFG1            | 4       | 5                                              | DI     | Configuration input                                                                                                                                                                                                                                                                       |
| CFG0            | 5       | 7                                              | DI     | Configuration input                                                                                                                                                                                                                                                                       |
| STEP            | 6       | 8                                              | DI     | STEP input                                                                                                                                                                                                                                                                                |
| DIR             | 7       | 9                                              | DI     | DIR input                                                                                                                                                                                                                                                                                 |
| VCC_IO          | 8       | 10                                             |        | 3.3V to 5V IO supply voltage for all digital pins.                                                                                                                                                                                                                                        |
| DNC             | 9, 17   | 11, 14, 16, 18, 20, 22, 23, 28, 41, 43, 45, 47 |        | Do not connect. Leave open!                                                                                                                                                                                                                                                               |
| GNDD            | 10      | 12                                             |        | Digital GND. Connect to GND.                                                                                                                                                                                                                                                              |
| N.C.            | 11      | 6, 31, 36                                      |        | Unused pin, connect to GND for compatibility to future versions.                                                                                                                                                                                                                          |
| GNDP            | 12, 35  | 13, 48                                         |        | Power GND. Connect to GND plane near pin.                                                                                                                                                                                                                                                 |
| OB1             | 13      | 15                                             |        | Motor coil B output 1                                                                                                                                                                                                                                                                     |
| BRB             | 14      | 17                                             |        | Sense resistor connection for coil B. Place sense resistor to GND near pin. Tie to GND when using internal sense resistors.                                                                                                                                                               |
| OB2             | 15      | 19                                             |        | Motor coil B output 2                                                                                                                                                                                                                                                                     |
| VS              | 16, 31  | 21, 40                                         |        | Motor supply voltage. Provide filtering capacity near pin with short loop to nearest GNDP pin (respectively via GND plane).                                                                                                                                                               |
| CFG4            | 18      | 24                                             | DI     | Configuration input                                                                                                                                                                                                                                                                       |
| CFG5            | 19      | 25                                             | DI     | Configuration input                                                                                                                                                                                                                                                                       |
| ERROR           | 20      | 26                                             | DO     | Driver error (Open drain output with 50k resistor to 2.5V)                                                                                                                                                                                                                                |
| INDEX           | 21      | 27                                             | DO     | Microstep table position index (Open drain output with 100k pulldown resistor - use sufficient pullup resistor of 22k max.)                                                                                                                                                               |
| CFG6_ENN        | 22      | 29                                             | DI     | Enable input (high to disable) and power down configuration                                                                                                                                                                                                                               |
| AIN_IREF        | 23      | 30                                             | AI     | Analog reference voltage for current scaling or reference current for use of internal sense resistors (optional mode)                                                                                                                                                                     |
| GNDA            | 24      | 32                                             |        | Analog GND. Tie to GND plane.                                                                                                                                                                                                                                                             |
| 5VOUT           | 25      | 33                                             |        | Output of internal 5V regulator. Attach 2.2µF to 10µF ceramic capacitor to GNDA near to pin for best performance.                                                                                                                                                                         |
| VCC             | 26      | 34                                             |        | 5V supply input for digital circuitry within chip and charge pump. Attach 470nF capacitor to GND (GND plane). Supply by 5VOUT. Use a 2.2 or 3.3 Ohm resistor for decoupling noise from 5VOUT. When using an external supply, make sure, that VCC comes up before or in parallel to 5VOUT! |
| CPO             | 27      | 35                                             |        | Charge pump capacitor output.                                                                                                                                                                                                                                                             |
| CPI             | 28      | 37                                             |        | Charge pump capacitor input. Tie to CPO using 22nF 50V capacitor.                                                                                                                                                                                                                         |
| VCP             | 29      | 38                                             |        | Charge pump voltage. Tie to VS using 100nF 16V capacitor.                                                                                                                                                                                                                                 |
| VSA             | 30      | 39                                             |        | Analog supply voltage for 5V regulator. Normally tied to VS. Provide a 100nF filtering capacitor.                                                                                                                                                                                         |
| OA2             | 32      | 42                                             |        | Motor coil A output 2                                                                                                                                                                                                                                                                     |
| BRA             | 33      | 44                                             |        | Sense resistor connection for coil A. Place sense resistor to GND near pin. Tie to GND when using internal sense resistors.                                                                                                                                                               |
| OA1             | 34      | 46                                             |        | Motor coil A output 1                                                                                                                                                                                                                                                                     |
| TST_MODE        | 36      | 1                                              | DI     | Test mode input. Tie to GND using short wire.                                                                                                                                                                                                                                             |
| Exposed die pad | -       | -                                              |        | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. Serves as GND pin for digital circuitry.                                                                                                                                     |

## 3 Operation

STEP/DIR inputs control the driver. The TMC2100 works in SpreadCycle mode or StealthChop mode. It provides microstep interpolation and automatic standstill current reduction. ERROR signals driver error and INDEX signals the microstep table index position (low active open drain outputs).

Figure 3.1 Standalone operation example circuit

<!-- image -->

## 3.1 CFG Pin Configuration

TMC2100 configuration is hard wired. All pins CFG0 to CFG6 are evaluated using tristate detection in order to differentiate between:

- -CFG pin tied to GND
- -CFG pin open (no connection)
- -CFG pin tied to VCC\_IO

CFG6\_ENN enables the driver chip. Further, it selects whether standby current reduction is used or not.

| CFG6_ENN: ENABLE PIN AND CONFIGURATION OF STANDSTILL POWER DOWN   | CFG6_ENN: ENABLE PIN AND CONFIGURATION OF STANDSTILL POWER DOWN   | CFG6_ENN: ENABLE PIN AND CONFIGURATION OF STANDSTILL POWER DOWN                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------------------------------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CFG6                                                              | Motor driver enable                                               | Standstill power down                                                                                                                                                                                                                                                                                                                                                                                                     |
| GND                                                               | Enable                                                            | N                                                                                                                                                                                                                                                                                                                                                                                                                         |
| VCC_IO                                                            | Disable                                                           | Driver disabled.                                                                                                                                                                                                                                                                                                                                                                                                          |
| open                                                              | Enable                                                            | Y. Motor current ramps down from 100% to 34% in 44M clock cycles (3 to 4 seconds) after standstill detection (no step pulse for more than 1M clock). In combination with StealthChop, be sure not to work with too low overall current setting, as regulation will not be able to measure the motor current after stand still current reduction. This will result in very low motor current after the stand-still period. |

Please refer to Figure 1.2 for more information about standstill power down.

A current control mode can be set with CFG3. In particular, the source for the reference voltage (on chip or external) and the method of current scaling can be chosen.

| CFG3 SETS MODE OF CURRENT SETTING   | CFG3 SETS MODE OF CURRENT SETTING                                                                                                                                                               |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CFG3                                | Current Setting                                                                                                                                                                                 |
| GND                                 | Internal reference voltage. Current scale set by external sense resistors, only.                                                                                                                |
| VCC_IO                              | Internal sense resistors. Use analog input current on AIN as reference current for internal sense resistor. This setting gives best results when combined with StealthChop voltage PWM chopper. |
| open                                | External reference voltage on pin AIN. Current scale set by sense resistors and scaled by AIN.                                                                                                  |

The desired microstep resolution for the STEP input can be chosen via CFG2 and CFG1 configurations. The driver automatically uses microstep positions which result in a symmetrical wave especially when switching to a lower microstep resolution.

Note  that  SpreadCycle  mode  is  possible  with  and  without  step  interpolation  to  256  microsteps. TRINAMIC recommends using step interpolation for achieving a smoother drive. While the parameters for  SpreadCycle  can  be configured for best microstep performance, StealthChop has a fixed setting. CFG0 and CFG4 settings do not influence the StealthChop configuration. This way, it is possible to switch between SpreadCycle and StealthChop mode by simply switching CFG1 and CFG2.

| CFG1 AND CFG2: SET MICROSTEP RESOLUTION FOR STEP INPUT   | CFG1 AND CFG2: SET MICROSTEP RESOLUTION FOR STEP INPUT   | CFG1 AND CFG2: SET MICROSTEP RESOLUTION FOR STEP INPUT   | CFG1 AND CFG2: SET MICROSTEP RESOLUTION FOR STEP INPUT   | CFG1 AND CFG2: SET MICROSTEP RESOLUTION FOR STEP INPUT   |
|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| CFG2,                                                    | CFG1                                                     | Microsteps                                               | Interpolation                                            | Chopper Mode                                             |
| GND,                                                     | GND                                                      | 1 (Fullstep)                                             | N                                                        | SpreadCycle                                              |
| GND,                                                     | VCC_IO                                                   | 2 (Halfstep)                                             | N                                                        | SpreadCycle                                              |
| GND,                                                     | open                                                     | 2 (Halfstep)                                             | Y, to 256 µsteps                                         | SpreadCycle                                              |
| VCC_IO,                                                  | GND                                                      | 4 (Quarterstep)                                          | N                                                        | SpreadCycle                                              |
| VCC_IO, VCC_IO                                           |                                                          | 16 µsteps                                                | N                                                        | SpreadCycle                                              |
| VCC_IO,                                                  | open                                                     | 4 (Quarterstep)                                          | Y, to 256 µsteps                                         | SpreadCycle                                              |
| open,                                                    | GND                                                      | 16 µsteps                                                | Y, to 256 µsteps                                         | SpreadCycle                                              |
| open,                                                    | VCC_IO                                                   | 4 (Quarterstep)                                          | Y, to 256 µsteps                                         | StealthChop                                              |
| open,                                                    | open                                                     | 16 µsteps                                                | Y, to 256 µsteps                                         | StealthChop                                              |

## Hint

Be sure to allow the motor to rest for at least 100 ms (assuming a minimum of 10 MHz fCLK) before starting a motion using StealthChop. This will allow the current regulation to ramp up to the initial motor current.

CFG0,  CFG4  and  CFG5  are  intended  for  chopper  configuration.  CFG0  is  used  to  set  the  chopper  off time. This setting also limits the maximum chopper frequency. For operation with StealthChop, this parameter is not used. In case of operation with StealthChop only, any CFG0 setting is OK.

| CFG0: SETS CHOPPER OFF TIME (DURATION OF SLOW DECAY PHASE)   | CFG0: SETS CHOPPER OFF TIME (DURATION OF SLOW DECAY PHASE)   | CFG0: SETS CHOPPER OFF TIME (DURATION OF SLOW DECAY PHASE)   |
|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| CFG0                                                         | TOFF Setting                                                 | TOFF Setting                                                 |
| GND                                                          | 140 t CLK (recommended, most universal choice)               | low setting                                                  |
| VCC_IO                                                       | 236 t CLK                                                    | medium setting                                               |
| open                                                         | 332 t CLK                                                    | high setting                                                 |

| CFG4: SETS CHOPPER HYSTERESIS (TUNING OF ZERO CROSSING PRECISION)   | CFG4: SETS CHOPPER HYSTERESIS (TUNING OF ZERO CROSSING PRECISION)                      |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| CFG4                                                                | Hysteresis Setting                                                                     |
| GND                                                                 | 5 (recommended most universal choice): low hysteresis with ≈ 4% of full-scale current. |
| VCC_IO                                                              | 9: medium setting with ≈ 5% of the full-scale current at sense resistor.               |
| open                                                                | 13: high setting with ≈ 6% of full-scale current at sense resistor.                    |

CFG5 selects the comparator blank time. This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. For most applications, a setting of 24 clock cycles is good. For higher capacitive loads, e.g., when filter networks are used, a setting 36 clock cycles will be required.

| CFG5: SETS CHOPPER BLANK TIME (DURATION OF BLANKING OF SWITCHING SPIKE )   | CFG5: SETS CHOPPER BLANK TIME (DURATION OF BLANKING OF SWITCHING SPIKE )   | CFG5: SETS CHOPPER BLANK TIME (DURATION OF BLANKING OF SWITCHING SPIKE )   |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------|
| CFG5                                                                       | Blank time (in number of clock cycles)                                     | Blank time (in number of clock cycles)                                     |
| GND                                                                        | 16 (best performance for StealthChop)                                      | low setting                                                                |
| VCC_IO                                                                     | 24 (recommended, most universal choice)                                    | medium setting                                                             |
| open                                                                       | 36 (may be necessary with high capacitive loads on motor outputs)          | high setting                                                               |

## EXAMPLE 1

It  is  desired  to  do  slow  motions  in  smooth  and  noiseless  StealthChop  mode.  For  quick  motions, SpreadCycle is to be used. The controller can deliver 1/16 microstep step signals.  Leave open CFG2 and drive CFG1 with a three-state driver. Switch CFG1 to GND to operate in SpreadCycle, switch it to hi-Z (open) state for a motion in StealthChop. Be sure to switch during standstill only, because when switching from a fixed level to an open input, a different mode may be passed for a short time.

## EXAMPLE 2

Figure 3.2 TMC2100 example configuration for StealthChop

<!-- image -->

## Attention

Pin open detection will fail, when paralleling CFG pins of different ICs! Use one diode per IC, if one or multiple pins are switched between GND and open or between VCC\_IO and open.

Tristate  detection  is  sensitive  to  capacitive  stray  inherent  with  long  interconnections-  use  a  100pF filter capacitor, or a diode near to the pin, if the open state shall be controlled via an external source.

## 4 Suggestions for Layout

The sample circuits show the connection of external components in different operation and supply modes.

## 4.1 Basic Hints for Power Supply

Use low ESR capacitors for filtering  the  power  supply  which  are  capable  to  cope  with  the  current ripple. The current ripple often depends on the power supply and cable length. The VCC\_IO voltage can be supplied from 5VOUT, or from an external source, e.g., a low drop 3.3 V regulator. To minimize linear voltage regulator power dissipation of the internal 5 V voltage regulator in applications where VM is high, a different (lower) supply voltage can be used for VSA, if available. For example, many applications provide a 12 V supply in addition to a higher supply voltage, like 24 V or 36 V. Using the 12 V supply for VSA will reduce the power dissipation of the internal 5V regulator to about 37% resp. 23% of the dissipation caused by supply with the full motor voltage.

## Basic Layout Hints

Place sense resistors and all filter capacitors as close as possible to the related IC pins. Use a solid common GND for all GND connections, also for sense resistor GND. Connect 5VOUT filtering capacitor directly to 5VOUT and GNDA pin. See layout hints for more details. Low ESR electrolytic capacitors are recommended for VS filtering.

## Attention

In  case  VSA  is  supplied  by  a  different  voltage  source,  make  sure  that  VSA  does  not  exceed  VS  by more than one diode drop upon power up or power down.

## 4.2 Reduced Number of Components

Figure 4.1 Reduced number of filtering components

<!-- image -->

The  standard  application  circuit  uses  RC  filtering  to  de-couple  the  output  of  the  internal  linear regulator from high frequency ripple caused by digital circuitry supplied by the VCC input. For cost sensitive applications, the RC-filtering on VCC can be eliminated. This leads to more noise on 5VOUT caused by operation of the charge pump and the internal digital circuitry. There is a slight impact on microstep vibration and chopper noise performance.

## 4.3 Internal Current Sensing

For cost critical or space limited applications, it may be desired to eliminate the sense resistors. The TMC2100 allows using the resistance of the internal MOSFETs as a sense resistor. Further, this slightly reduces  power  dissipation  because  the  effective  resistance  of  the  driver  bridge  is  reduced.  In  this application,  a  reference  current  set  by  a  tiny  external  resistor  programs  the  output  current.  For calculation of the reference resistor, refer chapter 9.

Figure 4.2 RDSon based sensing eliminates high current sense resistors

<!-- image -->

## Attention

Be sure to switch the IC to internal sense resistor mode when using this configuration.

## 4.4 External 5V Power Supply

When an external 5 V power supply is available, the power dissipation caused by the internal linear regulator  can  be  eliminated.  This  especially  is  beneficial  in  high  voltage  applications,  and  when thermal conditions are critical.

In case a clean external 5 V supply is available, it can be used for supply of analog and digital part (Figure 4.3). The circuit will benefit from a well-regulated supply, e.g., when using a +/-1% regulator. A precise supply guarantees increased motor current precision because the voltage on 5VOUT directly is used as reference  for  all  internal  units  of  the  driver,  especially  for  motor  current  control.  For  best performance, the power supply should have low ripple to give a precise and stable supply at 5VOUT pin  with  remaining  ripple  well  below  5 mV.  Some  switching  regulators  have  a  higher  remaining ripple,  or  different  loads  on  the  supply  may  cause  lower  frequency  ripple.  In  this  case,  increase capacity attached to 5VOUT. In case the external supply voltage has poor stability or low frequency ripple, this would affect the precision of the motor current regulation as well as add chopper noise.

Well-regulated, stable supply, better than +-5%

Figure 4.3 Using an external 5V supply to bypass internal regulator

<!-- image -->

## 4.5 5V Only Supply

<!-- image -->

leave open

Figure 4.4 5V only operation

While  the  standard  application  circuit  is  limited  to  roughly  5.5 V  lower  supply  voltage,  a  5 V  only application lets the IC run from a normal 5 V +/-5% supply. In this application, linear regulator drop must  be  minimized.  Therefore,  the  major  5 V  load  is  removed  by  supplying  VCC  directly  from  the external supply. In order to keep supply ripple away from the analog voltage reference, 5VOUT should have an own filtering capacity and the 5VOUT pin does not become bridged to the 5V supply.

## 4.6 High Motor Current

When operating  at  a  high  motor  current,  the  driver  power  dissipation  due  to  MOSFET  switch  onresistance significantly heats up the driver. This power dissipation will significantly heat up the PCB cooling infrastructure, if operated at an increased duty cycle. This in turn leads to a further increase of driver  temperature.  An  increase  of  temperature  by  about  100 °C  increases  MOSFET  resistance  by roughly 50%. This is a typical behavior of MOSFET switches. Therefore, under high duty cycle, high load  conditions,  thermal  characteristics  have  to  be  carefully  taken  into  account,  especially  when increased  environment  temperatures  are  to  be  supported.  Refer  the  thermal  characteristics  and  the layout hints for more information.  As  a thumb rule, thermal  properties  of the PCB design become critical  for  the  tiny  QFN-36  package  at  or  above  about  1000 mA  RMS  motor  current  for  increased periods of time. Keep in mind that resistive power dissipation raises with the square of the motor

current. On the other hand, this means that a small reduction of motor current significantly saves heat dissipation and energy.

An effect which might be perceived at medium motor velocities and motor sine wave peak currents above  roughly  1.2 A  peak  is  slight  sine  distortion  of  the  current  wave  when  using  SpreadCycle.  It results  from  an  increasing  negative  impact  of  parasitic  internal  diode  conduction,  which  in  turn negatively influences the duration of the fast decay cycle of the SpreadCycle chopper. This is, because the  current  measurement  does  not  see  the  full  coil  current  during  this  phase  of  the  sine  wave, because an increasing part of the current flows directly from the power MOSFETs' drain to GND and does not flow through the sense resistor. This effect with most motors does not negatively influence the smoothness of operation, as it does not impact the critical current zero transition. It does not occur with StealthChop.

## 4.6.1 Reduce Linear Regulator Power Dissipation

When operating at high supply voltages, as a first step the power dissipation of the integrated 5V linear  regulator  can  be  reduced,  e.g.,  by  using  an  external  5V  source  for  supply.  This  will  reduce overall heating. It is advised to reduce motor stand still current in order to decrease overall power dissipation. A decreased clock frequency will reduce power dissipation of the internal logic. Further a decreased clock frequency also reduces power dissipation.

## 4.6.2 Operation near to / above 2A Peak Current

The driver can deliver up to 2.5 A motor peak current. Considering thermal characteristics, this only is possible in duty cycle limited operation. When a peak current up to 2.5 A is to be driven, the driver chip temperature is to be kept at a maximum of 105 °C. Linearly derate the design peak temperature from 125 °C to 105 °C in the range 2 A to 2.5 A output current (see Figure 4.5). Exceeding this may lead to triggering the short circuit detection.

Figure 4.5 Derating of maximum sine wave peak current at increased die temperature

<!-- image -->

## 4.7 Driver Protection and EME Circuitry

Some applications have to cope with ESD events caused by motor operation or external influence. Despite ESD circuitry within the driver chips, ESD events occurring during operation can cause a reset or even a destruction of the motor driver, depending on their energy. Especially plastic housings and belt drive systems tend to cause ESD events of several kV. It is best practice to avoid ESD events by attaching all conductive parts, especially the motors themselves to PCB ground, or to apply electrically conductive plastic parts. In addition, the driver can be protected up to a certain degree against ESD events or live plugging / pulling the motor, which also causes high voltages and high currents into the motor connector terminals. A simple scheme uses capacitors at the driver outputs to reduce the dV/dt caused by ESD events. Larger capacitors will bring more benefit concerning ESD suppression,

but cause additional current flow in each chopper cycle, and thus increase driver power dissipation, especially  at  high  supply  voltages.  The  values  shown  are  example  values -they  might  be  varied between 100pF and 1nF. The capacitors also dampen high frequency noise injected from digital parts of the application PCB circuitry and thus reduce electromagnetic emission. A more elaborate scheme uses LC filters to de-couple the driver outputs from the motor connector. Varistors in between of the coil terminals eliminate coil overvoltage caused by live plugging. Optionally protect all outputs by a varistor against ESD voltage.

Figure 4.6 Simple ESD enhancement and more elaborate motor output protection

<!-- image -->

## 5 StealthChop ™

<!-- image -->

StealthChop is an extremely quiet mode of operation for stepper motors. It is based on a voltage mode PWM. In case of standstill and at low velocities, the motor is noiseless. Thus,  StealthChop  operated  stepper  motor  applications  are  very  suitable  for  indoor  or home use. The motor operates free of vibration at low velocities. With StealthChop, the motor  current  is  applied  by  driving  a  certain  effective  voltage  into  the  coil,  using  a voltage mode PWM. There are no more configurations required except for the regulation of the PWM voltage to yield the motor target current. Consider SpreadCycle for high velocity drives.

Figure 5.1 Motor coil sine wave current with StealthChop (measured with current probe)

<!-- image -->

## 5.1 Current Regulation

To  match  the  motor  current  to  a  certain  level,  the  voltage  mode  PWM  voltage  must  be  scaled depending on the actual motor velocity. Several additional factors influence the required voltage level to drive the motor at the target current: the motor resistance, its back EMF (i.e., directly proportional to its velocity) as well as actual level of the supply voltage. For the ease of use, the TMC2100 uses an automatic  mode  for  current  regulation  which  considers  current  feedback.  The  PWM  frequency  is internally divided from the clock frequency.

A higher PWM frequency leads to increased dynamic power dissipation, but it may bring a benefit for higher motor velocity.

Table 5.1 PWM frequency -green: recommended

| PWM FREQUENCY FOR STEALTHCHOP   | PWM FREQUENCY FOR STEALTHCHOP   |
|---------------------------------|---------------------------------|
| Clock frequency f CLK           | f PWM =2/683 f CLK              |
| 18MHz                           | 52.7kHz                         |
| 16MHz                           | 46.8kHz                         |
| (internal)                      |  38kHz                         |
| 12MHz                           | 35.1kHz                         |
| 10MHz                           | 29.3kHz                         |
| 8MHz                            | 23.4kHz                         |

## 5.2 Automatic Scaling

In StealthChop voltage PWM mode, the internal autoscaling function regulates the motor current to the desired current setting. The driver measures the motor current during the chopper on time and uses a proportional regulator in order match the motor current to the target current. The quality of the regulation can be examined when monitoring the motor coil current at different velocities and

during fastest applicable acceleration. Just as in the acceleration phase, during a deceleration phase the voltage PWM amplitude must be adapted to keep the motor coil current constant.

<!-- image -->

Figure 5.2 Scope shot: current can follow on acceleration phase

<!-- image -->

Current vs. velocity with acceleration in a good range

Figure 5.3 Current vs. velocity diagram

## Hint

Be sure to use a symmetrical sense resistor layout and sense resistor traces of identical length and well matching sense resistors for best performance.

The  auto  scaling  function  only  starts  up  regulation  during  motor  standstill.  Do  not  start  motion directly after enabling StealthChop. Wait until the current regulation has reached a stable state before starting a motion. Failure to do so will result in zero motor current!

In case the automatic scaling regulation is instable at your desired motion velocity, try modifying the clock frequency. Also adapt the blank time (CFG5) and motor current for best result.

## 5.2.1 Lower Current Limit

The  StealthChop  current  regulator  imposes  a  lower  limit  for  motor  current  regulation.  As  the  coil current can be measured in the shunt resistor during chopper on phase only, a minimum chopper duty  cycle  allowing  coil  current  regulation  is  given  by  the  blank  time  as  set  by TBL and  by  the

chopper  frequency.  Therefore,  the  motor  specific  minimum  coil  current  in  StealthChop  autoscaling mode  rises  with  the  supply  voltage.  A  lower  blanking  time  allows  a  lower  current  limit.  The  run current needs to be kept above the lower limit: In case the PWM scale drops to a too low value, e.g., because AIN pin scaling was too low, the regulator may not be able to recover. The regulator will recover  once  the  motor  is  in  standstill.  The  lower  motor  coil  current  limit  can  be  calculated  from motor parameters and chopper settings:

<!-- formula-not-decoded -->

With VM the motor supply voltage and RCOIL the motor coil resistance. ILower Limit can be treated as a thumb value for the minimum possible motor current setting.

## EXAMPLE:

A motor has a coil resistance of 5Ω, the supply voltage is 24V. t BLANK setting is 24 clock cycles:

<!-- formula-not-decoded -->

For StealthChop mode, a lower coil current limit applies. This limit can be calculated or  measured using a current probe. Keep the motor run-current setting well above this lower current limit.

## 5.3 Acceleration

The automatic current regulation compensates for the change of back-EMF at different velocities (see Figure 5.2 and Figure 5.3). It measures the actual current with each fullstep and subsequently does a limited  correction  of  the  PWM  voltage.  Therefore,  at  high  acceleration  or  deceleration,  the  internal regulation  might  not  react  quickly  enough  to  stabilize  the  motor  current  within  a  range  near  the target current. Use a current probe and check the motor current during (quick) acceleration. In case the current regulation cannot follow (see Figure 5.4), motor current will sink in acceleration phases, and thus lead to reduced motor torque. During a deceleration phase it will rise for a short time. If the current deviates too much, the motor cannot bring the required torque during the acceleration phase.

In  case  motor  current  drops  significantly  during  acceleration  phases  with  StealthChop  there  are several ways to improve current regulation:

- -Reduce acceleration
- -Switch from hold current to run current in time before starting the motion
- -Increase driver supply voltage (at double voltage, the reaction speed is also doubled)
- -Use motor with higher current coil winding (back-EMF sinks proportionally)
- -Increase  driver  clock  frequency  (this  will  speed  up  regulation  when  accelerating  from standstill current reduction)
- -Switch configuration from StealthChop to SpreadCycle before starting a high velocity motion

Figure 5.4 Current regulation cannot follow during high acceleration phase

<!-- image -->

## Hint

Operate the motor within your application when exploring StealthChop. Motor performance often is better with a mechanical load, because it prevents the motor from stalling due mechanical oscillations which can occur without load.

## 5.4 Switching between StealthChop and SpreadCycle

It  is  principally  possible  to  combine  StealthChop  and  SpreadCycle  by  toggling  between  two configurations  using  the  related  CFG  pins.  But  care  must  be  taken  to  avoid  operating  in  a  wrong microstepping mode. As the tristate detection logic needs a number of cycles to detect transition to or  from  an  open  pin,  the  switching  should  only  be  done  during  standstill.  Allow  3072  tCLK  for detection of the changed mode selection, before driving a new step. With internal clock, a 3ms delay will ensure proper transition to the new mode before the next step is done.

When enabling the StealthChop mode the first time using automatic current regulation, the motor must be at stand still to allow a proper current regulation. When the drive switches to a different chopper mode at a higher velocity, StealthChop logic stores the last current regulation setting until the  motor  returns  to  a  lower  velocity  again.  This  way,  the  regulation  has  a  known  starting  point when returning to a  lower velocity,  where  StealthChop  becomes  re-enabled.  Therefore,  neither  the velocity threshold nor the supply voltage must be considerably changed during the phase while the chopper  is  switched  to  a  different  mode,  because  otherwise  the  motor  might  lose  steps  or  the instantaneous current might be too high or too low.

## Attention

A  motor  stall  or  a  sudden  change  in  the  motor  velocity  may  lead  to  the  driver  detecting  a  short circuit, as the current can exceed the upper limit in these situations. In these situations, the automatic current regulation may also reach a state of low current from which it cannot recover.

Stop motion, disable and re-enable the driver (using the ENN pin) and restart the motor from zero velocity to recover from this situation.

## Hint

Start the motor from standstill when switching on StealthChop the first time and keep it stopped for at least 128 chopper periods to allow StealthChop to do initial standstill current control.

## 6 SpreadCycle

While StealthChop is a voltage mode PWM controlled chopper, SpreadCycle is a cycle-by-cycle current control. Therefore, it can react extremely fast to changes in motor velocity or motor load. The currents through both motor coils are controlled using choppers. The choppers work independently of each other. In Figure 6.1 the different chopper phases are shown.

On Phase: current flows in direction of target current

<!-- image -->

<!-- image -->

Fast Decay Phase: current flows in opposite direction of target current

## Figure 6.1 Chopper phases

Although the current could be regulated using only on phases and fast decay phases, insertion of the slow  decay  phase  is  important  to  reduce  electrical  losses  and  current  ripple  in  the  motor.  The duration of the slow decay phase is specified in a control parameter and sets an upper limit on the chopper frequency. The current comparator can measure coil current during phases when the current flows through the sense resistor, but not during the slow decay phase, so the slow decay phase is terminated by a timer. The on phase is terminated by the comparator when the current through the coil reaches the target current. The fast decay phase may be terminated by either the comparator or another timer.

When the coil current is switched, spikes at the sense resistors occur due to charging and discharging parasitic  capacitances.  During  this  time,  typically  one  or  two  microseconds,  the  current  cannot  be measured. Blanking is the time when the input to the comparator is masked to block these spikes.

The SpreadCycle mode cycles through four phases: on, slow decay, fast decay, and a second slow decay.

The chopper frequency is an important parameter for a chopped motor driver. A too low frequency might generate audible noise. A higher frequency reduces current ripple in the motor, but with a too high frequency magnetic losses may rise. Also, power dissipation in the driver rises with increasing frequency due to the increased influence of switching slopes causing dynamic dissipation. Therefore, a compromise needs to be found. Most motors are optimally working in a frequency range of 16 kHz to 30 kHz. The chopper frequency is influenced by the configuration pin settings as well as by the motor inductivity and supply voltage.

## Hint

A  chopper  frequency  in  the  range  of  16 kHz  to  30 kHz  gives  a  good  result  for  most  motors  when using SpreadCycle. A higher frequency leads to increased switching losses.

Please refer to chapter 3.1 for more information about CFG0 and CFG4 (chopper off time and chopper hysteresis).

Slow Decay Phase: current re-circulation

<!-- image -->

## 6.1 SpreadCycle Chopper

The  patented  SpreadCycle  chopper  algorithm  is  a  precise  and  simple  to  use  chopper  mode  which automatically determines the optimum length for the fast-decay phase. The SpreadCycle will provide superior  microstepping  quality  even  with  default  settings.  Several  parameters  are  available  to optimize the chopper to the application.

Each  chopper  cycle  is  comprised  of  an  on  phase,  a  slow  decay  phase,  a  fast  decay  phase  and  a second slow decay phase (see Figure 6.3). The two slow decay phases and the two blank times per chopper cycle put an upper limit to the chopper frequency. The slow decay phases typically make up for  about  50%-75%  of  the  chopper  cycle  in  standstill  and  are  important  for  low  motor  and  driver power dissipation.

## EXAMPLE

At 16MHz clock frequency a low tOFF setting (140 tCLK) sets 𝑡𝑂𝐹𝐹 = 140 ∗ 1 16𝑀𝐻𝑧 = 8.75𝜇𝑠 .  Each chopper cycle then uses 2 * 8.75µs = 17.2 µs of slow decay time.

The hysteresis setting forces the  driver to introduce a  minimum  amount  of current ripple  into the motor coils. The current ripple must be higher than the current ripple which is caused by resistive losses  in  the  motor  to  give  best  microstepping  results.  This  will  allow  the  chopper  to  precisely regulate the current both for rising and for falling target current. The time required to introduce the current ripple into the motor coil also reduces the chopper frequency. Therefore, a higher hysteresis setting will lead to a lower chopper frequency. The motor inductance limits the ability of the chopper to follow a changing motor current. Further the duration of the on phase and the fast decay must be longer than the blanking time because the current comparator is disabled during blanking.

It  is  easy  to  find  the  best setting by starting  with the lowest hysteresis setting (CFG4=GND). Use a higher setting in case the motor does not run smoothly at low velocity settings. This can best be checked  when  measuring  the  motor  current  either  with  a  current  probe  or  by  probing  the  sense resistor voltages (see Figure 6.2). Checking the sine wave shape near zero transition will show a small ledge between both half waves in case the hysteresis setting is too small. At medium velocities (i.e., 100 to 400 fullsteps per second), a too low hysteresis setting  will lead to increased humming and vibration of the motor.

<!-- image -->

f: 93.07 Hz

Figure  6.2  No  ledges  in  current  wave  with  sufficient  hysteresis  (magenta:  current  A,  yellow  &amp; blue: sense resistor voltages A and B)

A too high hysteresis setting will lead to reduced chopper frequency and increased chopper noise but will not yield any benefit for the wave shape.

As experiments show, the setting is quite independent of the motor, because higher current motors typically also have a lower coil resistance. Therefore, choosing the low default value for the hysteresis normally fits most applications.

Figure 6.3 SpreadCycle chopper scheme showing coil current during a chopper cycle

<!-- image -->

## 7 Selecting Sense Resistors

When  using  external  sense  resistors,  set  the  desired  maximum  motor  current  by  selecting  an appropriate value for the sense resistor. The following table shows the RMS current values which can be reached using standard resistors and motor types fitting without additional motor current scaling.

| CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| R SENSE [Ω]                                          | RMS current [A] AIN=2.5V (or open),                  | Fitting motor type (examples)                        |
| 1.00                                                 | 0.23                                                 |                                                      |
| 0.82                                                 | 0.27                                                 |                                                      |
| 0.75                                                 | 0.30                                                 | 300mA motor                                          |
| 0.68                                                 | 0.33                                                 | 400mA motor                                          |
| 0.50                                                 | 0.44                                                 |                                                      |
| 470m                                                 | 0.47                                                 | 500mA motor                                          |
| 390m                                                 | 0.56                                                 | 600mA motor                                          |
| 330m                                                 | 0.66                                                 | 700mA motor                                          |
| 270m                                                 | 0.79                                                 | 800mA motor                                          |
| 220m                                                 | 0.96                                                 | 1A motor                                             |
| 180m                                                 | 1.15                                                 | 1.2A motor                                           |
| 150m                                                 | 1.35                                                 |                                                      |
| 120m                                                 | 1.64*)                                               |                                                      |
| 100m                                                 | 1.92*)                                               | 1.5A motor                                           |

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. Due to chopper operation the sense resistors see pulsed current from the MOSFET bridges. Therefore, a  low-inductance  type  such  as  film  or  composition  resistors  is  required  to  prevent  voltage  spikes causing ringing on the sense voltage inputs leading to unstable measurement results. Also, a lowinductance, low-resistance PCB layout is essential. Any common GND path for the two sense resistors must  be  avoided,  because  this  would  lead  to  coupling  between  the  two  current  sense  signals.  A massive ground plane is best. Please also refer to layout considerations in chapter 16.

The  sense  resistor  needs  to  be  able  to  conduct  the  peak  motor  coil  current  in  motor  standstill conditions  unless  standby  power  is  reduced.  Under  normal  conditions,  the  sense  resistor  conducts less than the coil RMS current, because no current flows through the sense resistor during the slow decay phases. A 0.5W type is sufficient for most applications up to 1.2A RMS current.

The peak sense resistor power dissipation is:

<!-- formula-not-decoded -->

Hint

Be sure to use a symmetrical sense resistor layout  and  short  and  straight  sense  resistor  traces  of identical length. Well matching sense resistors ensure best performance.

A compact layout with massive ground plane is best to avoid parasitic resistance effects.

## 8 Motor Current Control

The  basic  motor  current  is  set  by  the  resistance  of  the  sense  resistors.  Several  possibilities  allow scaling  down  motor  current,  e.g.,  to  adapt  for  different  motors,  or  to  reduce  motor  current  in standstill or low load situations.

Three modes of current setting can be chosen using the CFG3 pin:

| CFG3: SETS MODE OF CURRENT SETTING   | CFG3: SETS MODE OF CURRENT SETTING                                                                                                                                        |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CFG3                                 | Current Setting                                                                                                                                                           |
| GND                                  | Internal reference voltage. Current scale set by sense resistors, only.                                                                                                   |
| VCC_IO                               | Internal sense resistors. This setting gives best results when combined with StealthChop voltage PWM chopper. Tie BRA and BRB directly to GND. See chapter 9 for details. |
| open                                 | External reference voltage on pin AIN. Current scale set by sense resistors and scaled by AIN. This allows fine tuning of current setting using a simple voltage divider. |

Select the sense resistor to deliver enough current for the motor at full current scale (VREF=2.5V).

## RMS RUN CURRENT CALCULATION:

<!-- formula-not-decoded -->

## STANDBY HOLD CURRENT CALCULATION:

<!-- formula-not-decoded -->

with VFS = full scale voltage (see VSRT )

## CURRENT REDUCTION BY ANALOG SCALING:

When analog scaling of VFS is enabled, the resulting voltage VFS ' is calculated by:

<!-- formula-not-decoded -->

with VAIN the voltage on pin AIN\_IREF in the range 0V to V5VOUT/2

For best precision of current setting, it is advised to measure and fine tune the current in the application.

## 8.1 Analog Current Scaling AIN

When a high flexibility of the output current scaling is desired, the analog input of the driver can be enabled for current control, rather than choosing a different set of sense resistors. This way, a simple voltage divider can be used for the adaptation  of a board to different motors. Therefore, leave the CFG3 pin open.

## AIN SCALES THE MOTOR CURRENT

The  TMC2100  provides  an  internal  reference  voltage  for  current  control,  directly  derived  from  the 5VOUT supply output. Alternatively, an external reference voltage can be used. This reference voltage becomes scaled down for the chopper comparators. The chopper comparators compare the voltages on BRA and BRB to the scaled reference voltage for current regulation. If analogue scaling is enabled (CFG3  open),  the  external  voltage  on  AIN  is  amplified  and  filtered  and  becomes  used  as  reference voltage. A voltage of 2.5V (or any voltage between 2.5V and 5V) gives the same current scaling as the internal reference voltage. A voltage between 0V and 2.5V linearly scales the current between 0 and the  current  scaling  defined  by  the  sense  resistor  setting.  It  is  not  advised  to  work  with  reference

voltages below about 0.5V to 1V, because analog noise caused by digital circuitry has an increased impact on the chopper precision at low AIN voltages. For best precision, choose the sense resistors in a  way that the desired maximum current is reached with AIN in the range 2V to 2.4V. Be sure to optimize the chopper settings for the normal run current of the motor.

## DRIVING AIN

The easiest way to provide a voltage to AIN is to use a voltage divider from a stable supply voltage or  a  microcontroller's  DAC  output.  A  PWM  signal  can  also  be  used  for  current  control.  The  PWM becomes transformed to an analog voltage using an additional R/C low-pass at the AIN pin. The PWM duty cycle controls the analog voltage. Choose the R and C values to form a low pass with a corner frequency of several milliseconds while using PWM frequencies well above 10 kHz. AIN additionally provides an internal low-pass filter with 3.5kHz bandwidth. The integration of an NTC into the voltage divider feeding AIN allows the realization of temperature dependent motor current scaling. When a precise reference voltage is available (e.g., from TL431A), the precision of the motor current regulation can be improved when compared to the internal voltage reference.

## Hint

Using a low reference voltage (below 1V), for adaptation of a high current driver to a low current motor will lead to reduced analog performance. Adapting the sense resistors to fit the desired motor current gives a better result.

<!-- image -->

Fixed resistor divider to set current scale (use external reference for enhanced precision)

Precision current scaler

Figure 8.1 Scaling the motor current using the analog input

Simple PWM based current scaler

## 9 Internal Sense Resistors

The  TMC2100  provides  the  option  to  eliminate  external  sense  resistors.  In  this  mode  the  external sense  resistors  become  omitted  (shorted)  and  the  internal  on-resistance  of  the  power  MOSFETs  is used  for  current  measurement  (see  Figure  4.2).  As  MOSFETs  are  both,  temperature  dependent  and subject to production stray, a tiny external resistor connected from +5VOUT to  AIN/IREF  provides a precise absolute current reference. This resistor converts the 5 V voltage into a reference current. Be sure  to  directly  attach  BRA  and  BRB  pins  to  GND  in  this  mode  near  the  IC  package.  The  mode  is enabled by tying CFG3 to VCCIO.

| COMPARING INTERNAL SENSE RESISTORS VS. SENSE RESISTORS   | COMPARING INTERNAL SENSE RESISTORS VS. SENSE RESISTORS             | COMPARING INTERNAL SENSE RESISTORS VS. SENSE RESISTORS   |
|----------------------------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------|
| Item                                                     | Internal Sense Resistors                                           | External Sense Resistors                                 |
| Cost                                                     | (+) Save cost for sense resistors                                  |                                                          |
| Current precision                                        | Slightly reduced                                                   | (+) Good                                                 |
| Current Range Recommended                                | 200mA to 1.2A RMS (StealthChop) 200mA to 1.0A RMS (SpreadCycle)    | 50mA to 1.4A RMS                                         |
| Recommended chopper                                      | StealthChop, SpreadCycle shows slightly reduced performance at >1A | StealthChop or SpreadCycle                               |

While the RDSon based measurements bring benefits concerning cost and size of the driver, it gives slightly less precise coil current regulation when compared to external sense resistors. The internal sense resistors have a certain temperature dependence, which is automatically compensated by the driver IC. However, for high current motors, a temperature gradient between the ICs internal sense resistors and the compensation circuit will lead to an initial current overshoot of some 10% during driver IC heat up. While this phenomenon shows for roughly a second, it might even be beneficial to enable increased torque during initial motor acceleration.

## PRINCIPLE OF OPERATION

A reference current into the VREF pin is used as reference for the motor current. In order to realize a certain current, a single resistor (RREF) can be connected between 5VOUT and AIN (pls. refer the table for the choice of the resistor). AIN input resistance is about 1kOhm. The resulting current into AIN is amplified 3000 times. Thus, a current of 0.5mA yields a motor current of 1.5A peak. For calculation of the reference resistor, the internal resistance of AIN needs to be considered additionally. When using reference  currents  above  0.5 mA  resulting  in  higher  theoretical  current  settings  of  up  to  2 A,  the resulting current decreases linearly when chip temperature exceeds a certain maximum temperature. For a 2 A setting it decreases from 2 A at up to 100 °C down to about 1.5 A at 150 °C.

| CHOICE OF R REF FOR OPERATION WITHOUT SENSE RESISTORS   | CHOICE OF R REF FOR OPERATION WITHOUT SENSE RESISTORS   | CHOICE OF R REF FOR OPERATION WITHOUT SENSE RESISTORS   |
|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|
| R REF [Ω]                                               | Peak current [A]                                        | RMS current [A]                                         |
| 6k8                                                     | 1.92                                                    | 1.35                                                    |
| 7k5                                                     | 1.76                                                    | 1.24                                                    |
| 8k2                                                     | 1.63                                                    | 1.15                                                    |
| 9k1                                                     | 1.49                                                    | 1.05                                                    |
| 10k                                                     | 1.36                                                    | 0.96                                                    |
| 12k                                                     | 1.15                                                    | 0.81                                                    |
| 15k                                                     | 0.94                                                    | 0.66                                                    |
| 18k                                                     | 0.79                                                    | 0.55                                                    |
| 22k                                                     | 0.65                                                    | 0.45                                                    |
| 24k                                                     | 0.60                                                    | 0.42                                                    |
| 27k                                                     | 0.54                                                    | 0.38                                                    |

In RDSon measurement mode, connect the BRA and BRB pins to GND using the shortest possible path (i.e.  lowest  possible  PCB  resistance).  RDSon based measurement gives  best  results  when combined

with StealthChop. When  using  SpreadCycle  with  RDSon  based  current measurement,  slightly asymmetric current measurement for positive currents (on phase) and negative currents (fast decay phase)  may  result  in  chopper  noise.  This  especially  occurs  at  high  die  temperature  and  increased motor current.

## Note

The absolute current levels achieved with RDSon based current sensing may depend on PCB layout exactly like with external sense resistors, because trace resistance on BR pins will add to the effective sense resistance. Therefore, we recommend measuring and calibrating the current setting within the application.

## Thumb rule

RDSon based current sensing works best for motors with up to 1 A RMS current. The best results are yielded with StealthChop operation in combination with RDSon based current sensing.

For most precise current control and best results with SpreadCycle, it is recommended to use external 1% sense resistors rather than RDSon based current control.

## 10 Diagnostics and Protection

The  TMC2100  drivers  supply  a  set  of  diagnostic  and  protection  capabilities,  like  short  to  GND protection and overtemperature detection and protection.

## 10.1 Temperature Measurement

The TMC2100 driver integrates a temperature sensor for protection against excess heat.  In case the temperature reaches 150 °C the TMC2100 reacts with automatic switching off. If the chip cools down afterwards and its temperature reaches 120 °C, it recovers automatically and starts working.

Heat is mainly generated by the motor driver stages and the on-chip voltage regulator. The central temperature  detector  can  detect  heat  accumulation  on  the  chip,  i.e.,  due  to  missing  convection cooling or rising environment temperature. If continuous operation in hot environments is necessary, a  more  precise  processor-based  temperature  measurement  should  be  used  to  realize  application specific  overtemperature  detection.  The  thermal  shutdown  is  just  an  emergency  measure  and temperature rising to the shutdown level should be prevented by design.

## Attention

Overtemperature protection cannot in all cases avoid thermal destruction of the IC. In case the rated motor  current  is  exceed,  excess  heat  generation  can  quickly  heat up  the  driver  before  the overtemperature sensor can react. This is due to a delay in heat conduction over the IC die.

After  triggering  the  overtemperature  sensor,  the  driver  remains  switched  off  until  the  system temperature falls below 120°C to avoid continuous heating to the shutdown level.

## 10.2 Short to GND Protection

The TMC2100 power stages are protected against a short circuit condition by an additional measurement of the current flowing through the high-side MOSFETs. This is important, as most short circuit conditions  result  from  a  motor  cable  insulation  defect,  e.g.,  when  touching  the  conducting  parts connected to the system ground. The short detection is protected against spurious triggering caused by ESD discharges, by retrying three times before switching off the motor.

Once a short condition is safely detected, the corresponding driver bridge (A or B) becomes switched off and the error becomes indicated at the diagnostic ERROR output. To restart the motor, disable and re-enable the driver. Note, that short protection cannot protect the system and the power stages for all  possible  short  events,  as  a  short  event  is  rather  undefined,  and  a  complex  network  of  external components may be involved. Therefore, short circuits should basically be avoided.

## 10.3 Emergency Stop

The driver provides a negative  active enable pin ENN to safely switch  off all  power MOSFETs. This allows  putting  the  motor  into  freewheeling.  Further,  it  is  a  safe  hardware  function  whenever  an emergency stop not coupled to software is required.

## 10.4 Diagnostic Output

The driver ERROR pin becomes driven active low, whenever a driver error results in switching off the power stage. Thus, it indicates a potential step loss. An overtemperature condition becomes cleared automatically  after  cooling  down  below  the  threshold  temperature.  A  short  detection  error  can  be cleared by switching off / on the driver using the ENN pin.

With low resistive motors operated in StealthChop, a short detection also can result from overcurrent conditions caused by hard motor deceleration or motor blocking or stop without acceleration ramp.

Figure 10.1 Error and Index output

<!-- image -->

## 11 STEP/DIR Interface

The STEP and DIR inputs provide a simple, standard interface compatible with many existing motion controllers.  The  MicroPlyer  STEP  pulse  interpolator  brings  the  smooth  motor  operation  of  highresolution microstepping to applications originally designed for coarser stepping.

## 11.1 Timing

Figure 11.2 shows the timing parameters for the STEP and DIR signals, and the table below gives their specifications. Only rising edges are active. STEP and DIR are sampled and synchronized to the system clock. An internal analog filter removes glitches on the signals, such as those caused by long PCB traces. If the signal source is far from the chip, and especially if the signals are carried on cables, the signals should be filtered or differentially transmitted.

<!-- image -->

Figure 11.1 STEP and DIR timing, Input pin filter

| STEP and DIR interface timing                      | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|----------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                          | Symbol                                     | Conditions                                 | Min                                        | Typ                                        | Max                                        | Unit                                       |
| step frequency (at maximum microstep resolution)   | f STEP                                     |                                            |                                            |                                            | ½ f CLK                                    |                                            |
| fullstep frequency                                 | f FS                                       |                                            |                                            |                                            | f CLK /512                                 |                                            |
| STEP input low time *)                             | t SL                                       |                                            | max(t FILTSD , t CLK +20)                  |                                            |                                            | ns                                         |
| STEP input high time *)                            | t SH                                       |                                            | max(t FILTSD , t CLK +20)                  |                                            |                                            | ns                                         |
| DIR to STEP setup time                             | t DSU                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| DIR after STEP hold time                           | t DSH                                      |                                            | 20                                         |                                            |                                            | ns                                         |
| STEP and DIR spike filtering time *)               | t FILTSD                                   | rising and falling edge                    | 36                                         | 60                                         | 85                                         | ns                                         |
| STEP and DIR sampling relative to rising CLK input | t SDCLKHI                                  | before rising edge of CLK input            |                                            | t FILTSD                                   |                                            | ns                                         |

## 11.2 Changing Resolution

The TMC2100 includes an internal microstep table with 1024 sine wave entries to control the motor coil currents. The 1024 entries correspond to one electrical revolution or four fullsteps. The microstep resolution setting determines the step width taken within the table. Depending on the DIR input, the microstep counter is increased (DIR=0) or decreased (DIR=1) with each STEP pulse by the step width. The  microstep  resolution  determines  the  increment  respectively  the  decrement.  At  maximum resolution, the sequencer advances one step for each step pulse. At half resolution, it advances two steps.  Increment  is  up  to  256  steps  for  fullstepping.  The  sequencer  has  special  provision  to  allow seamless  switching  between  different  microstep  rates  at  any  time.  When  switching  to  a  lower microstep resolution, it calculates the nearest step within the target resolution and reads the current vector  at  that  position.  This  behavior  especially  is  important  for  low  resolutions  like  fullstep  and halfstep because any failure in the step sequence would lead to asymmetrical run when comparing a motor running clockwise and counterclockwise.

## EXAMPLES:

Fullstep :

Cycles through table positions: 128, 384, 640 and 896 (45°, 135°, 225° and 315° electrical position, both  coils on  at  identical current). The  coil current in  each  position corresponds to the RMS-Value (0.71 * amplitude). Step size is 256 (90° electrical)

Half step :

The first table position is 64 (22.5° electrical), Step size is 128 (45° steps)

Quarter step

:

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

| SETTING THE MICROSTEP RESOLUTION FOR STEP INPUT BY CFG1 AND CFG2   | SETTING THE MICROSTEP RESOLUTION FOR STEP INPUT BY CFG1 AND CFG2   | SETTING THE MICROSTEP RESOLUTION FOR STEP INPUT BY CFG1 AND CFG2   | SETTING THE MICROSTEP RESOLUTION FOR STEP INPUT BY CFG1 AND CFG2   | SETTING THE MICROSTEP RESOLUTION FOR STEP INPUT BY CFG1 AND CFG2   |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| CFG2                                                               | CFG1                                                               | Microsteps                                                         | Interpolation                                                      | Chopper Mode                                                       |
| GND                                                                | GND                                                                | 1 (Fullstep)                                                       | N                                                                  | SpreadCycle                                                        |
| GND                                                                | VCC_IO                                                             | 2 (Halfstep)                                                       | N                                                                  | SpreadCycle                                                        |
| GND                                                                | open                                                               | 2 (Halfstep)                                                       | Y, to 256 µsteps                                                   | SpreadCycle                                                        |
| VCC_IO                                                             | GND                                                                | 4 (Quarterstep)                                                    | N                                                                  | SpreadCycle                                                        |
| VCC_IO                                                             | VCC_IO                                                             | 16 µsteps                                                          | N                                                                  | SpreadCycle                                                        |
| VCC_IO                                                             | open                                                               | 4 (Quarterstep)                                                    | Y, to 256 µsteps                                                   | SpreadCycle                                                        |
| open                                                               | GND                                                                | 16 µsteps                                                          | Y, to 256 µsteps                                                   | SpreadCycle                                                        |
| open                                                               | VCC_IO                                                             | 4 (Quarterstep)                                                    | Y, to 256 µsteps                                                   | StealthChop                                                        |
| open                                                               | open                                                               | 16 µsteps                                                          | Y, to 256 µsteps                                                   | StealthChop                                                        |

## 11.3 MicroPlyer Step Interpolator and Stand Still Detection

For each active edge on STEP, MicroPlyer produces microsteps at 256x resolution, as shown in Figure 11.2. It interpolates the time in between of two step impulses at the step input based on the last step interval. This way, up to 256 microsteps (full step input to 256 microsteps) are driven for a single step pulse.

The step rate for the interpolated 256 microsteps is determined by measuring the time interval of the previous  step  period  and  dividing  it  into  up  to  256  equal  parts.  The  maximum  time  between  two microsteps corresponds to 2 20  (roughly one million system clock cycles), for an even distribution of 256 microsteps. At 16 MHz system clock frequency, this results in a minimum step input frequency of 16 Hz  for  MicroPlyer  operation.  A  lower  step  rate  causes  a  standstill  event  to  be  detected.  At  that frequency, microsteps occur at a rate of (system clock frequency)/2 16  ~ 256 Hz. When a stand still is detected, the driver automatically begins standby current reduction if selected by CFG6\_ENN.

Attention

MicroPlyer only works perfectly with a stable STEP frequency.

Figure 11.2 MicroPlyer microstep interpolation with rising STEP frequency (Example: 16 to 256)

<!-- image -->

In  Figure  11.2,  the  first  STEP  cycle  is  long  enough  to  detect  standstill.  Detection  of  standstill  will enable the standby current reduction. This condition is cleared on the next STEP active edge. Then, the external STEP frequency increases. After one cycle at the higher rate MicroPlyer adapts the interpolated microstep rate to the higher frequency. During the last cycle at the slower rate,  MicroPlyer did not generate all 16 microsteps, so there is a small jump in motor angle between the first and second cycles at the higher rate.

## 11.4 INDEX Output

An active INDEX output signals that the sine curve of motor coil B is at its positive zero transition. This correlates to the zero point of the microstep sequence. Usually, the cosine curve of coil A is at its maximum at the same time. Thus, the index signal is active once within each electrical period and corresponds to a defined position of the motor within a sequence of four fullsteps. The INDEX output this way allows the detection of a certain microstep pattern, and thus helps to detect a position with more precision than a stop switch can do.

Figure 11.3 Index signal at positive zero transition of the coil B sine curve

<!-- image -->

Hint

The duration of the index pulse corresponds to the duration of the microstep. When working without interpolation at less than 256 microsteps, the index time goes down to two CLK clock cycles (~160ns).

## 12 Power-Up Reset

The chip is loaded with default values during power-up via its internal power-on reset. It will also reset to  power-up defaults in case any of the supply voltages monitored by internal reset circuitry (VSA, +5VOUT or VCC\_IO) falls below the undervoltage threshold. VCC is not monitored. Therefore, VCC must not be lost during operation of the chip.

## 13 Clock Oscillator and Input

The clock is the timing reference for all functions: the chopper, the step execution, the current control, etc.  Many  parameters  are  scaled  with  the  clock  frequency;  thus,  a  precise  reference  allows  a  more deterministic  result.  The  on-chip  clock  oscillator  provides  timing  in  case  no  external  clock  is  easily available.

## USING THE INTERNAL CLOCK

Directly  tie  the  CLK  input  to  GND  near  to  the  IC  if  the  internal  clock  oscillator  is  to  be  used.  The internal clock is sufficient for most cases.

## USING AN EXTERNAL CLOCK

When an external clock is available, a frequency of 10 MHz to 16 MHz is recommended for optimum performance. The duty cycle of the clock signal is uncritical, as long as minimum high or low input time for the pin is satisfied (refer to electrical characteristics). Up to 18 MHz can be used, when the clock duty cycle is 50%. Make sure, that the clock source supplies clean CMOS output logic levels and steep slopes when using a high clock frequency. The external clock input is enabled with the first positive polarity seen on the CLK input.

## Attention

Switching off the external clock frequency prevents the driver from operating normally. Therefore, be careful to switch off the motor drivers before switching off the clock (e.g., using the enable input), because otherwise the chopper would stop, and the motor current level could rise uncontrolled. The short to GND detection stays active even without clock.

## 13.1 Considerations on the Frequency

A  higher  frequency  may  cause  more  electromagnetic  emission  of  the  system  and  more  power dissipation  in  the  TMC2100  digital  core  and  voltage  regulator.  Generally,  a  frequency  of  10 MHz to 12 MHz  should  be  sufficient  for  most  applications.  For  reduced  requirements  concerning  the  motor dynamics, a clock frequency of down to 8 MHz (or even lower) can be considered.

## 14 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                          | Symbol       | Min   | Max        | Unit   |
|--------------------------------------------------------------------|--------------|-------|------------|--------|
| Supply voltage operating with inductive load (V VS ≥ V VSA )       | V VS , V VSA | -0.5  | 49         | V      |
| Supply and bridge voltage max. *)                                  | V VMAX       |       | 50         | V      |
| VSA when different from to VS                                      | V VSA        | -0.5  | V VS +0.5  | V      |
| I/O supply voltage                                                 | V VIO        | -0.5  | 5.5        | V      |
| digital VCC supply voltage (if not supplied by internal regulator) | V VCC        | -0.5  | 5.5        | V      |
| Logic input voltage                                                | V I          | -0.5  | V VIO +0.5 | V      |
| Maximum current to / from digital pins and analog low voltage I/Os | I IO         |       | +/-10      | mA     |
| 5V regulator output current (internal plus external load)          | I 5VOUT      |       | 50         | mA     |
| 5V regulator continuous power dissipation (V VM -5V) * I 5VOUT     | P 5VOUT      |       | 1          | W      |
| Power bridge repetitive output current                             | I Ox         |       | 3.0        | A      |
| Junction temperature                                               | T J          | -50   | 150        | °C     |
| Storage temperature                                                | T STG        | -55   | 150        | °C     |
| ESD-Protection for interface pins (Human body model, HBM)          | V ESDAP      |       | 4          | kV     |
| ESD-Protection for handling (Human body model, HBM)                | V ESD        |       | 1          | kV     |

## 15 Electrical Characteristics

## 15.1 Operational Range

| Parameter                                                                                                                                                                    | Symbol                   | Min   | Max     | Unit   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|-------|---------|--------|
| Junction temperature                                                                                                                                                         | T J                      | -40   | 125     | °C     |
| Supply voltage (using internal +5V regulator)                                                                                                                                | V VS , V VSA             | 5.5   | 46      | V      |
| Supply voltage (internal +5V regulator bridged: V VCC =V VSA =V VS )                                                                                                         | V VS                     | 4.7   | 5.4     | V      |
| I/O supply voltage                                                                                                                                                           | V VIO                    | 3.00  | 5.25    | V      |
| VCC voltage (supplies digital logic and charge pump)                                                                                                                         | V VCC                    | 4.6   | 5.25    | V      |
| RMS motor coil current per coil (value for design guideline) for QFN36 5x6 package resp. TQFP-48 package                                                                     | I RMS-QFN36 I RMS-TQFP48 |       | 1.2 1.4 | A      |
| Peak output current per motor coil output (sine wave peak) using external or internal current sensing                                                                        | I Ox                     |       | 2.0     | A      |
| Peak output current per motor coil output (sine wave peak) for short term operation. Limit T J ≤ 1 05°C, e.g., for 100ms short time acceleration phase below 50% duty cycle. | I Ox                     |       | 2.5     | A      |

## 15.2 DC and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25 °C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| Power supply current                                         | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V                                         | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   |
|--------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Parameter                                                    | Symbol                                    | Conditions                                                                      | Min                                       | Typ                                       | Max                                       | Unit                                      |
| Total supply current, driver disabled I VS + I VSA + I VCC   | I S                                       | f CLK =16MHz                                                                    |                                           | 15                                        | 22                                        | mA                                        |
| Total supply current, operating, I VS + I VSA + I VCC        | I S                                       | f CLK =16MHz, 23.4kHz chopper, no load                                          |                                           | 19                                        |                                           | mA                                        |
| Idle supply current from VS, charge pump operating           | I VS0                                     | f CLK =0Hz, driver disabled                                                     |                                           | 0.25                                      | 0.5                                       | mA                                        |
| Static supply current from VSA with VCC supplied by 5VOUT    | I VSA0                                    | f CLK =0Hz, includes VCC supply current                                         | 1.4                                       | 2                                         | 3                                         | mA                                        |
| Supply current, driver disabled, dependency on CLK frequency | I VCCx                                    | f CLK variable, additional to I VSA0                                            |                                           | 0.8                                       |                                           | mA/MHz                                    |
| Internal current consumption from 5V supply on VCC pin       | I VCC                                     | f CLK =16MHz, 23.4kHz chopper                                                   |                                           | 16                                        |                                           | mA                                        |
| IO supply current (typ. at 5V)                               | I VIO                                     | no load on outputs, inputs at V IO or GND Excludes pullup / pull-down resistors |                                           | 15                                        | 30                                        | µA                                        |

| Motor driver section         | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V     | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   | DC- and Timing-Characteristics V VS = 24.0V   |
|------------------------------|-----------------------------------------------|-------------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                    | Symbol                                        | Conditions                                      | Min                                           | Typ                                           | Max                                           | Unit                                          |
| RDS ON lowside MOSFET        | R ONL                                         | measure at 100mA, 25°C, static state            |                                               | 0.4                                           | 0.5                                           | Ω                                             |
| RDS ON highside MOSFET       | R ONH                                         | measure at 100mA, 25°C, static state            |                                               | 0.5                                           | 0.6                                           | Ω                                             |
| slope, MOSFET turning on     | t SLPON                                       | measured at 700mA load current (resistive load) | 50                                            | 120                                           | 220                                           | ns                                            |
| slope, MOSFET turning off    | t SLPOFF                                      | measured at 700mA load current (resistive load) | 50                                            | 120                                           | 220                                           | ns                                            |
| Current sourcing, driver off | I OIDLE                                       | O XX pulled to GND                              | 120                                           | 180                                           | 250                                           | µA                                            |

| Charge pump                                              | DC-Characteristics   | DC-Characteristics                  | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------------------------------|----------------------|-------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                | Symbol               | Conditions                          | Min                  | Typ                  | Max                  | Unit                 |
| Charge pump output voltage                               | V VCP -V VS          | operating, typical f chop <40kHz    | 4.0                  | V VCC - 0.3          | V VCC                | V                    |
| Charge pump voltage threshold for undervoltage detection | V VCP -V VS          | using internal 5V regulator voltage | 3.3                  | 3.6                  | 3.8                  | V                    |
| Charge pump frequency                                    | f CP                 |                                     |                      | 1/16 f CLKOSC        |                      |                      |

| Linear regulator                                               | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   |
|----------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Parameter                                                      | Symbol                                    | Conditions                                | Min                                       | Typ                                       | Max                                       | Unit                                      |
| Output voltage                                                 | V 5VOUT                                   | I 5VOUT = 0mA T J = 25°C                  | 4.80                                      | 5.0                                       | 5.25                                      | V                                         |
| Output resistance                                              | R 5VOUT                                   | Static load                               |                                           | 3                                         |                                           |                                          |
| Deviation of output voltage over the full temperature range    | V 5VOUT(DEV)                              | I 5VOUT = 16mA T J = full range           |                                           | +/-30                                     | +/-100                                    | mV                                        |
| Deviation of output voltage over the full supply voltage range | V 5VOUT(DEV)                              | I 5VOUT = 0mA V VSA = variable            |                                           | +/-15                                     | +/-30                                     | mV / 10V                                  |
| Deviation of output voltage over the full supply voltage range | V 5VOUT(DEV)                              | I 5VOUT = 16mA V VSA = variable           |                                           | -38                                       | +/-75                                     | mV / 10V                                  |

| Clock oscillator and input                                               | Timing-Characteristics   | Timing-Characteristics              | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   |
|--------------------------------------------------------------------------|--------------------------|-------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                                                                | Symbol                   | Conditions                          | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency                                               | f CLKOSC                 | t J =-50°C                          | 9                        | 12.4                     |                          | MHz                      |
| Clock oscillator frequency                                               | f CLKOSC                 | t J =50°C                           | 10.1                     | 13.2                     | 17.2                     | MHz                      |
| Clock oscillator frequency                                               | f CLKOSC                 | t J =150°C                          |                          | 13.4                     | 18                       | MHz                      |
| External clock frequency (operating)                                     | f CLK                    |                                     | 4                        | 10-16                    | 18                       | MHz                      |
| External clock high / low level time                                     | t CLKH / t CLKL          | CLK driven to 0.1 V VIO / 0.9 V VIO | 10                       |                          |                          | ns                       |
| External clock first cycle triggering switching to external clock source | t CLKH1                  | CLK driven high                     | 30                       | 25                       |                          | ns                       |

| Detector levels                                                     | DC-Characteristics   | DC-Characteristics                   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|---------------------------------------------------------------------|----------------------|--------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                           | Symbol               | Conditions                           | Min                  | Typ                  | Max                  | Unit                 |
| V VSA undervoltage threshold for RESET                              | V UV_VSA             | V VSA rising                         | 3.8                  | 4.2                  | 4.6                  | V                    |
| V 5VOUT undervoltage threshold for RESET                            | V UV_5VOUT           | V 5VOUT rising                       |                      | 3.5                  |                      | V                    |
| V VCC_IO undervoltage threshold for RESET                           | V UV_VIO             | V VCC_IO rising (delay typ. 10µs)    | 2.1                  | 2.55                 | 3.0                  | V                    |
| V VCC_IO undervoltage detector hysteresis                           | V UV_VIOHYST         |                                      |                      | 0.3                  |                      | V                    |
| Short to GND detector threshold (V VS - V Ox )                      | V OS2G               |                                      | 2                    | 2.5                  | 3                    | V                    |
| Short to GND detector delay (high side switch on to short detected) | t S2G                | High side output clamped to V VS -3V | 0.8                  | 1.3                  | 2                    | µs                   |
| Overtemperature recovery                                            | t OTPW               | Temperature falling                  | 100                  | 120                  | 140                  | °C                   |
| Overtemperature shutdown                                            | t OT                 | Temperature rising                   | 135                  | 150                  | 170                  | °C                   |

| Sense resistor voltage levels                                                                 | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   | DC-Characteristics f CLK =16MHz   |
|-----------------------------------------------------------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Parameter                                                                                     | Symbol                            | Conditions                        | Min                               | Typ                               | Max                               | Unit                              |
| Sense input peak threshold voltage                                                            | V SRT                             | Sine wave peak, low hysteresis    |                                   | 320                               |                                   | mV                                |
| Sense input tolerance / motor current full-scale tolerance -using internal reference          | I COIL                            |                                   | -5                                |                                   | +5                                | %                                 |
| Sense input tolerance / motor current full-scale tolerance -using external reference voltage  | I COIL                            | Analog scaling via AIN            | -2                                |                                   | +2                                | %                                 |
| Internal resistance from pin BRxy to internal sense comparator (additional to sense resistor) | R BRxy                            |                                   |                                   | 20                                |                                   | mΩ                                |

| Digital pins                                                     | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|------------------------------------------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                        | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Input voltage low level                                          | V INLO               |                      | -0.3                 |                      | 0.3 V VIO            | V                    |
| Input voltage high level                                         | V INHI               |                      | 0.7 V VIO            |                      | V VIO +0.3           | V                    |
| Input Schmitt trigger hysteresis                                 | V INHYST             |                      |                      | 0.12 V VIO           |                      | V                    |
| Output voltage low level                                         | V OUTLO              | I OUTLO = 2mA        |                      |                      | 0.2                  | V                    |
| Output voltage high level                                        | V OUTHI              | I OUTHI = -2mA       | V VIO -0.2           |                      |                      | V                    |
| Input leakage current                                            | I ILEAK              |                      | -10                  |                      | 10                   | µA                   |
| Pullup / pull-down resistors used for tristate detection on CFGx | R PU /R PD           |                      | 132                  | 166                  | 200                  | kΩ                   |
| Tristate detection toggle frequency                              | f TOGGLE             |                      |                      | 1/1024               |                      | f CLK                |
| Time to detect open CFG pin                                      | t CFG                |                      |                      |                      | 3072                 | t CLK                |
| Digital pin capacitance                                          | C                    |                      |                      | 3.5                  |                      | pF                   |

| AIN/IREF input                                                                          | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-----------------------------------------------------------------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                                               | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| AIN_IREF input resistance to 2.5V (=5VOUT/2)                                            | R AIN                | Measured to GND      | 260                  | 330                  | 400                  | kΩ                   |
| AIN_IREF input voltage range for linear current scaling                                 | V AIN                | Measured to GND      | 0                    | 0.5-2.4              | V 5VOUT /2           | V                    |
| AIN_IREF open input voltage level                                                       | V AINO               | Open circuit voltage |                      | V 5VOUT /2           |                      | V                    |
| AIN_IREF input resistance to GND for reference current input                            | R IREF               | Measured to GND      | 0.8                  | 1                    | 1.2                  | kΩ                   |
| AIN_IREF current amplification for reference current to coil current at maximum setting | I REFAMPL            | I IREF = 0.25mA      |                      | 3000                 |                      | Times                |
| Motor current full-scale tolerance -using RDSon measurement                             | I COIL               | I IREF = 0.25mA      | -10                  |                      | +10                  | %                    |

## 15.3 Thermal Characteristics

The  following  table  shall  give  an  idea  on  the  thermal  resistance  of  the  package.  The  thermal resistance  for  a  four-layer  board  will  provide  a  good  idea  on  a  typical  application.  Actual  thermal characteristics  will  depend  on  the  PCB  layout,  PCB  type  and  PCB  size.  The  thermal  resistance  will benefit from thicker CU (inner) layers for spreading heat horizontally within the PCB. Also, air flow will reduce thermal resistance.

A thermal resistance of 24 K/W for a typical board means, that the package is capable of continuously dissipating 4.1 W at an ambient temperature of 25 °C with the die temperature staying below 125 °C.

| Parameter                                                                          | Symbol   | Conditions                                                                                                                                                             |   Typ | Unit   |
|------------------------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Typical power dissipation                                                          | P D      | StealthChop or SpreadCycle, 0.92A RMS in two phase motor, sinewave, 40 or 20kHz chopper, 24V, internal supply, 84°C peak surface of package (motor QSH4218-035-10-027) |   2.6 | W      |
| Thermal resistance junction to ambient on a multilayer board                       | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 35µm CU, 84mm x 55mm, d=1.5mm)                               |  24   | K/W    |
| Thermal resistance junction to ambient on a multilayer board for TQFP-EP48 package | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 35µm CU, 70mm x 133mm, d=1.5mm)                              |  21   | K/W    |
| Thermal resistance junction to board                                               | R TJB    | PCB temperature measured within 1mm distance to the package                                                                                                            |   8   | K/W    |
| Thermal resistance junction to case                                                | R TJC    | Junction temperature to heat slug of package                                                                                                                           |   3   | K/W    |

## Table 15.1 Thermal Characteristics QFN5x6 and TQFP-EP48

The thermal resistance in an actual layout can be tested by checking for the heat up caused by the standby power consumption of the chip. When no motor is attached, all power seen on the power supply is dissipated within the chip.

Note

A spreadsheet for calculating TMC2100 power dissipation is available on www.trinamic.com.

## 16 Layout Considerations

## 16.1 Exposed Die Pad

The TMC2100 uses its die attach pad to dissipate heat from the drivers and the linear regulator to the board.  For  best  electrical  and  thermal  performance,  use  a  reasonable  amount  of  solid,  thermally conducting vias between the die attach pad and the ground plane. The printed circuit board should have a solid ground plane spreading heat into the board and providing for a stable GND reference.

## 16.2 Wiring GND

All signals of the TMC2100 are referenced to their respective GND. Directly connect all GND pins under the device to a common ground area (GND, GNDP, GNDA and die attach pad). The GND plane right below the die attach pad should be treated as a virtual star point. For thermal reasons, the PCB top layer shall be connected to a large PCB GND plane spreading heat within the PCB.

## Hint

The  sense  resistor  connections  are  susceptible  to  GND  differences  and  GND  ripple  voltage,  as  the microstep  current  steps  make  up  for  voltages  down  to  0.5 mV.  No  current  other  than  the  sense resistor current should flow on their connections to GND and to the TMC2100. Optimally place them close  to  the  IC,  with  one  or  more  vias  to  the  GND  plane  for  each  sense  resistor.  The  two  sense resistors for one coil should not share a common ground connection trace or vias, as also PCB traces have a certain resistance.

## 16.3 Supply Filtering

The 5VOUT output voltage ceramic filtering capacitor (4.7 µF recommended) should be placed as close as  possible  to  the  5VOUT  pin,  with  its  GND  return  going  directly  to  the  GNDA  pin.  This  ground connection shall not be shared with other loads or additional vias to the GND plan. Use as short and as thick connections as possible. For best microstepping performance and lowest chopper noise an additional filtering capacitor should be used for the VCC pin to GND, to avoid charge pump and digital part ripple influencing motor current regulation. Therefore, place a ceramic filtering capacitor (470 nF recommended) as close as possible (1-2mm distance) to the VCC pin with GND return going to the ground plane. VCC can be coupled to 5VOUT using a 2.2 Ω or 3.3 Ω resistor to supply the digital logic from 5VOUT while keeping ripple away from this pin.

A 100 nF filtering capacitor should be placed as close as possible to the VSA pin to ground plane. The motor supply pins VS should be decoupled with an electrolytic capacitor (low ESR type 47 μF or larger is recommended) and a ceramic capacitor, placed close to the device.

Take into account that the switching motor coil outputs have a high dV/dt. Thus, capacitive stray into high resistive signals can occur if the motor traces are near other traces over longer distances.

## 16.4 Layout Example: TMC2100-BOB

The tiny TMC2100-BOB is a breakout board for the TMC2100 integrated standalone stepper driver. It allows access to all configuration hardware pins.

Schematic (can use TMC2100 or TMC2130 optional, Pinning shown for both)

<!-- image -->

## 1 - Top Layer (assembly side)

<!-- image -->

## 2 - Inner Layer 1

<!-- image -->

R0805/0R11

## 3 - Inner Layer 2

<!-- image -->

## Components

Figure 16.1 TMC2100-BOB as layout example

<!-- image -->

## 4 - Bottom Layer

<!-- image -->

## 17 Package Mechanical Data

All length units are given in millimeters.

## 17.1 Dimensional Drawings QFN36 5x6

Attention: Drawings not to scale.

<!-- image -->

Figure 17.1 Dimensional drawings QFN 5x6

<!-- image -->

| Parameter              | Ref   | Min   | Nom   | Max   |
|------------------------|-------|-------|-------|-------|
| total thickness        | A     | 0.8   | 0.85  | 0.9   |
| stand off              | A1    | 0     | 0.035 | 0.05  |
| mold thickness         | A2    | -     | 0.65  | -     |
| lead frame thickness   | A3    |       | 0.203 |       |
| lead width             | b     | 0.2   | 0.25  | 0.3   |
| body size X            | D     | 4.9   | 5     | 5.1   |
| body size Y            | E     | 5.9   | 6     | 6.1   |
| lead pitch             | e     |       | 0.5   |       |
| exposed die pad size X | J     | 3.5   | 3.6   | 3.7   |
| exposed die pad size Y | K     | 4.0   | 4.1   | 4.2   |
| lead length            | L     | 0.35  | 0.4   | 0.45  |
| mold flatness          | bbb   |       |       | 0.1   |
| coplanarity            | ccc   |       |       | 0.08  |
| lead offset            | ddd   |       |       | 0.1   |
| exposed pad offset     | eee   |       |       | 0.1   |

## 17.2 Dimensional Drawings TQFP-EP48

Attention: Drawings not to scale.

Figure 17.2 Dimensional drawings TQFP-EP48

<!-- image -->

| Parameter                      | Ref   | Min   | Nom   | Max   |
|--------------------------------|-------|-------|-------|-------|
| total thickness                | A     | -     | -     | 1.2   |
| stand off                      | A1    | 0.05  | -     | 0.15  |
| mold thickness                 | A2    | 0.95  | 1     | 1.05  |
| lead width (plating)           | b     | 0.17  | 0.22  | 0.27  |
| lead width                     | b1    | 0.17  | 0.2   | 0.23  |
| lead frame thickness (plating) | c     | 0.09  | -     | 0.2   |
| lead frame thickness           | c1    | 0.09  | -     | 0.16  |
| body size X (over pins)        | D     |       | 9.0   |       |
| body size Y (over pins)        | E     |       | 9.0   |       |
| body size X                    | D1    |       | 7.0   |       |
| body size Y                    | E1    |       | 7.0   |       |
| lead pitch                     | e     |       | 0.5   |       |
| lead                           | L     | 0.45  | 0.6   | 0.75  |
| footprint                      | L1    |       | 1 REF |       |
|                                |      | 0°    | 3.5°  | 7°    |
|                                |  1   | 0°    | -     | -     |
|                                |  2   | 11°   | 12°   | 13°   |
|                                |  3   | 11°   | 12°   | 13°   |
|                                | R1    | 0.08  | -     | -     |
|                                | R2    | 0.08  | -     | 0.2   |
|                                | S     | 0.2   | -     | -     |
| exposed die pad size X         | M     | 4.9   | 5     | 5.1   |
| exposed die pad size Y         | N     | 4.9   | 5     | 5.1   |
| package edge tolerance         | aaa   |       |       | 0.2   |
| lead edge tolerance            | bbb   |       |       | 0.2   |
| coplanarity                    | ccc   |       |       | 0.08  |
| lead offset                    | ddd   |       |       | 0.08  |
| mold flatness                  | eee   |       |       | 0.05  |

## 17.3 Package Codes

| Type       | Package          | Temperature range   | Code & marking             |
|------------|------------------|---------------------|----------------------------|
| TMC2100-LA | QFN36 (RoHS)     | -40°C ... +125°C    | TMC2100-LA Date code: YYWW |
| TMC2100-TA | TQFP-EP48 (RoHS) | -40°C ... +125°C    | TMC2100-TA Date code: YYWW |

## 18 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life  support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information  given  in  this data  sheet  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 19 ESD Sensitive Device

The TMC2100 is an ESD sensitive CMOS device sensitive to electrostatic discharge. Take special care to use adequate grounding of personnel and machines in manual handling. After soldering the devices to the board, ESD requirements are more relaxed. Failure to do so can result in defect or decreased reliability.

<!-- image -->

## 20 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 21 Table of Figures

| FIGURE 1.1 TMC2100 STANDALONE DRIVER APPLICATION DIAGRAM .........................................................................................4                                                                                                                                |                                                                                                                                      |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| FIGURE 1.2 STANDSTILL CURRENT REDUCTION ............................................................................................................................5                                                                                                              |                                                                                                                                      |
| FIGURE 2.1 TMC2100-LA PACKAGE AND PINNING QFN-36 (5X6MM²) .....................................................................................6                                                                                                                                   |                                                                                                                                      |
| FIGURE 2.2 TMC2100-TA PACKAGE AND PINNING TQFP-48 (9X9MM² WITH LEADS ) ...............................................................6                                                                                                                                            |                                                                                                                                      |
| FIGURE 3.1 STANDALONE OPERATION EXAMPLE CIRCUIT .............................................................................................................8                                                                                                                     |                                                                                                                                      |
| FIGURE 3.2 TMC2100 EXAMPLE CONFIGURATION FOR STEALTHCHOP .......................................................................................10                                                                                                                                 |                                                                                                                                      |
| FIGURE 4.1 REDUCED NUMBER OF FILTERING COMPONENTS ......................................................................................................11                                                                                                                         |                                                                                                                                      |
| FIGURE 4.2 RDSON BASED SENSING ELIMINATES HIGH CURRENT SENSE RESISTORS ..................................................................12                                                                                                                                        |                                                                                                                                      |
| FIGURE 4.4 USING AN EXTERNAL 5V SUPPLY TO BYPASS INTERNAL REGULATOR ........................................................................13                                                                                                                                     |                                                                                                                                      |
| FIGURE 4.5 5V ONLY OPERATION ..............................................................................................................................................13                                                                                                      |                                                                                                                                      |
| FIGURE 4.6 DERATING OF MAXIMUM SINE WAVE PEAK CURRENT AT INCREASED DIE TEMPERATURE ...........................................14                                                                                                                                                   |                                                                                                                                      |
| FIGURE 4.7 SIMPLE ESD ENHANCEMENT AND MORE ELABORATE MOTOR OUTPUT PROTECTION ..................................................15                                                                                                                                                  |                                                                                                                                      |
| FIGURE 5.1 MOTOR COIL SINE WAVE CURRENT WITH STEALTHCHOP (MEASURED WITH CURRENT PROBE ) ..................................16                                                                                                                                                       |                                                                                                                                      |
| FIGURE 5.2 SCOPE SHOT : CURRENT CAN FOLLOW ON ACCELERATION PHASE ..............................................................................17                                                                                                                                  |                                                                                                                                      |
| FIGURE 5.3 CURRENT VS . VELOCITY DIAGRAM                                                                                                                                                                                                                                           | ...........................................................................................................................17        |
| FIGURE 5.4 CURRENT REGULATION CANNOT FOLLOW DURING HIGH ACCELERATION PHASE ........................................................19                                                                                                                                              |                                                                                                                                      |
| FIGURE 6.1 CHOPPER PHASES ...................................................................................................................................................20                                                                                                    |                                                                                                                                      |
| FIGURE 6.2 NO LEDGES IN CURRENT WAVE WITH SUFFICIENT HYSTERESIS ( MAGENTA: CURRENT A, YELLOW & BLUE : SENSE RESISTOR VOLTAGES A AND B) .........................................................................................................................................21 |                                                                                                                                      |
| FIGURE 6.3 SPREADCYCLE CHOPPER SCHEME SHOWING COIL CURRENT DURING A CHOPPER CYCLE ............................................22                                                                                                                                                   |                                                                                                                                      |
| FIGURE 8.1 SCALING THE MOTOR CURRENT USING THE ANALOG INPUT ......................................................................................25                                                                                                                               |                                                                                                                                      |
| FIGURE 10.1 ERROR AND INDEX OUTPUT                                                                                                                                                                                                                                                 | ..................................................................................................................................29 |
| FIGURE 11.1 STEP AND DIR TIMING , INPUT PIN FILTER .........................................................................................................30                                                                                                                     |                                                                                                                                      |
| FIGURE 11.2 MICROPLYER MICROSTEP INTERPOLATION WITH RISING STEP FREQUENCY (E XAMPLE : 16 TO 256) .....................32                                                                                                                                                           |                                                                                                                                      |
| FIGURE 11.3 INDEX SIGNAL AT POSITIVE ZERO TRANSITION OF THE COIL A SINE CURVE ..........................................................33                                                                                                                                         |                                                                                                                                      |
| FIGURE 16.1 TMC2100-BOB AS LAYOUT EXAMPLE ..................................................................................................................42                                                                                                                     |                                                                                                                                      |
| FIGURE 17.1 DIMENSIONAL DRAWINGS QFN 5X6 ....................................................................................................................43                                                                                                                    |                                                                                                                                      |
| FIGURE 17.2 DIMENSIONAL DRAWINGS TQFP-EP48 ...............................................................................................................45                                                                                                                       |                                                                                                                                      |

## 22 Revision History

Table 22.1 Document Revisions

| Version   | Date        | Author BD= Bernhard Dwersteg   | Description                                                                     |
|-----------|-------------|--------------------------------|---------------------------------------------------------------------------------|
| V0.90     | 2014-OKT-30 | SD                             | First complete version                                                          |
| V1.00     | 2014-NOV-26 | BD                             | Corrected package dimensions and motor current table                            |
| V1.08     | 2018-MAY-16 | BD                             | Added hint for CFG pin open detection, minor fixes                              |
| V1.09     | 2018-OCT-10 | BD                             | Added description for ERROR output, minor fixes                                 |
| V1.10     | 2019-NOV-07 | BD                             | Minor fixes, new pict., sustainability chapter                                  |
| V1.11     | 2020-JUN-03 | BD                             | Updated logo, minor fixes                                                       |
| V1.12     | 2022-JAN-12 | BD                             | Updated logo & order codes; P12: removed ext. VCC supply examples               |
| V1.13     | 2022-MAY-31 | BD                             | P29: Removed UV_CP from ERROR output; P33: Corrected index pulse rel. to coil B |

## 23 References

[TMC2100-EVAL] TMC2100-EVAL Manual [AN001]  Trinamic Application Note 001 - Parameterization of SpreadCycle ™, www.trinamic.com Calculation sheet TMC5130\_TMC2130\_TMC2100\_Calculations.xlsx