<!-- lastmod 2023-08-03 -->
## TMC7300 Datasheet

Low Voltage Driver for One or Two DC Motors up to 2A (2.4A) peak -UART based Control for Torque and Velocity. 4 Half Bridge Peripheral Driver Option.

<!-- image -->

## FEATURES AND BENEFITS

Voltage Range 2V (1.8V) … 11V DC

Battery Operation 1-2 Li-Ion cells, or min. 2 AA / NiMh cells

1 / 2 DC motors up to 2A / 2.4A with velocity &amp; torque control

Direct Bridge control for solenoids, relays, lamps, motors…

Single Wire UART

for two-motor torque and velocity control

Standby &lt;50nA typ. current draw

Low RDSon LS 170mΩ &amp; HS 170mΩ (typ.)

Parallel Option for single DC motor

Motor Load Feedback available

Full Protection &amp; Diagnostics

Tiny of QFN 3*3 with 20 pins

## BLOCK DIAGRAM

## APPLICATIONS

IOT &amp; Handheld devices Battery operated motors 4-Channel Relay- and LED driving Printers, POS Toys Office and home automation CCTV, Security HVAC Mobile medical devices

## DESCRIPTION

Working from a single or dual Li-Ion cell or dual  or  more  AA  batteries  the  TMC7300  is optimally suited for battery operated equipment. Its two full-bridges allow either control of two DC motors, PWM-control of LEDs,  or  protected  standalone  peripheral driving,  using  a  polarity  signal  per  halfbridge.  Operate  up  to  two  DC  motors  via simple UART control for direction, velocity, and torque. Integrated power-MOSFETs with internal charge-pump for best-in-class RDSon even at low supply voltage, handle motor current up to 1.2A per motor continuously, or the double current in parallel  connection.  Together  with  a  tiny standby  current,  this  guarantees  a  long battery life. Protection and diagnostic features support robust and reliable operation. This advanced  driver  ensures efficient  and  reliable  operation  for  costeffective and highly competitive solutions.

<!-- image -->

<!-- image -->

<!-- image -->

## APPLICATION EXAMPLES: SIMPLE SOLUTIONS -HIGHLY EFFECTIVE

The  TMC7300  scores  with  a  high  power  density  using  integrated  power  MOSFETs  and  a  complete integrated  DC  motor  control  logic,  to  control  velocity  and  limit  torque,  or  for  torque  controlled operation. It covers a wide spectrum of applications from battery systems to embedded applications with up to 2A (2.4A) current per motor. Extensive support enables rapid design cycles and fast time-tomarket with highly competitive products.

## UART INTERFACE FOR CONTROL OF 2 DC MOTORS

<!-- image -->

UART INTERFACE FOR CONTROL OF 1 DC MOTOR (UP TO 2.4A)

<!-- image -->

4 HALF BRIDGE PERIPHERAL DRIVERS

<!-- image -->

<!-- image -->

## ORDER CODES

| Order code       | Description                                                            | Size [mm 2 ]   |
|------------------|------------------------------------------------------------------------|----------------|
| TMC7300-LA       | Low Voltage DC Motor Driver IC, 2-11V, 1.2A, QFN20, Tray               | 3 x 3          |
| TMC7300-LA-T     | Low Voltage BLDC Motor/PMSM Driver IC, 2-11V, 1.2A, QFN20, Tape & Reel | 3 x 3          |
| TMC7300-EVAL-KIT | Full Evaluation Kit for TMC7300                                        | 126 x 85       |
| TMC7300-EVAL     | Evaluation Board for TMC7300 (excl. Landungsbrücke and Eselsbrücke)    | 85 x 55        |
| TMC7300-BOB      | Break out Board with TMC7300                                           | 25 x 20        |

A CPU operates the driver via its UART interface. It configures motor direction and  velocity  as  well  as  current  limit, and accesses diagnostic information via  the  UART  interface.  The  TMC7300 takes care for voltage and current regulation  and  overcurrent  protection. With  single  motor  operation,  output current is increased, and power dissipation is reduced.

The  TMC7300  acts  a  peripheral  driver for a low-voltage application. It drives resistive loads, like a LED, or inductive loads like motors or solenoids. It offers  up  to  2A  peak  output  current while adding protection features.

The TMC7300-EVAL is part of TRINAMICs  universal  evaluation  board system  which  provides  a  convenient handling of the hardware as well as a user-friendly software tool for evaluation. The TMC7300 evaluation board  system  consists  of  three  parts: STARTRAMPE (base board), Eselsbrücke (connector board with test points), and TMC7300-EVAL.

## Table of Contents

| 1                                                                  | PRINCIPLES OF OPERATION .........................4                 | PRINCIPLES OF OPERATION .........................4                 |                                                |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|------------------------------------------------|
| 1.1                                                                |                                                                    | CONTROL I NTERFACES .....................................5         |                                                |
|                                                                    | 1.2                                                                | MOVING AND CONTROLLING THE MOTOR ........6                         |                                                |
| 1.3                                                                |                                                                    | MECHANICAL LOAD SENSING ..........................6                |                                                |
| 1.4                                                                |                                                                    | PROTECTION AND DIAGNOSTICS                                         | .....................6                         |
| 2                                                                  | PIN ASSIGNMENTS ...........................................7       | PIN ASSIGNMENTS ...........................................7       |                                                |
| 2.1                                                                | PACKAGE OUTLINE TMC7300 (UART MODE)                                |                                                                    | .7                                             |
| 2.2                                                                |                                                                    | SIGNAL DESCRIPTIONS / UART MODE ............7                      |                                                |
| 2.3                                                                |                                                                    | PACKAGE OUTLINE / HALFBRIDGE MODE                                  | .........8                                     |
|                                                                    | 2.4                                                                | SIGNAL DESCRIPTIONS / HALFBRIDGE MODE                              | ..8                                            |
| 3                                                                  | SAMPLE CIRCUITS ..........................................10       | SAMPLE CIRCUITS ..........................................10       |                                                |
| 3.1                                                                |                                                                    | DC MOTOR OPERATION                                                 | ................................10             |
|                                                                    | 3.2                                                                | HALFBRIDGE DRIVER MODE                                             | ..........................12                   |
|                                                                    | 3.3                                                                | HIGHLY EFFICIENT DRIVER                                            | ............................13                 |
|                                                                    | 3.4                                                                | LOW POWER STANDBY                                                  | .................................14            |
| 3.5                                                                |                                                                    | VERY LOW I/O VOLTAGE OPERATION                                     | ...........14                                  |
| 4 UART SINGLE WIRE INTERFACE ................15                    | 4 UART SINGLE WIRE INTERFACE ................15                    | 4 UART SINGLE WIRE INTERFACE ................15                    |                                                |
| 4.1                                                                |                                                                    | DATAGRAM STRUCTURE                                                 | .................................15            |
| 4.2                                                                |                                                                    | CRC CALCULATION                                                    | .......................................17      |
| 4.3                                                                |                                                                    | UART SIGNALS                                                       | ............................................17 |
|                                                                    | 4.4                                                                | ADDRESSING MULTIPLE SLAVES                                         | ....................18                         |
| 5 REGISTER MAP .................................................19 | 5 REGISTER MAP .................................................19 | 5 REGISTER MAP .................................................19 |                                                |
| 5.1                                                                |                                                                    | GENERAL REGISTERS                                                  | .....................................20        |
| 5.2                                                                |                                                                    | MOTOR CONTROL                                                      | ..........................................22   |
|                                                                    | 5.3                                                                | CHOPPER CONTROL REGISTERS                                          | .....................23                        |
| CHOPPER OPTIONS ........................................27         | CHOPPER OPTIONS ........................................27         | CHOPPER OPTIONS ........................................27         |                                                |
| 6.1                                                                | LOAD I NDICATOR FLAGS ...............................27            | LOAD I NDICATOR FLAGS ...............................27            |                                                |
|                                                                    | 6.2                                                                | FREEWHEELING AND PASSIVE BRAKING                                   | ........27                                     |
| 7 SELECTING SENSE RESISTORS                                        | 7 SELECTING SENSE RESISTORS                                        | 7 SELECTING SENSE RESISTORS                                        | ....................28                         |

|                                                                  | 7.1                                                              | MOTOR TORQUE L IMIT .................................29             |                                                                     |
|------------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|
| 8                                                                | DRIVER DIAGNOSTIC FLAGS                                          | DRIVER DIAGNOSTIC FLAGS                                             | ......................30                                            |
| 8.1                                                              | TEMPERATURE MEASUREMENT .......................30                | TEMPERATURE MEASUREMENT .......................30                   |                                                                     |
|                                                                  | 8.2 SHORT PROTECTION ......................................30    | 8.2 SHORT PROTECTION ......................................30       |                                                                     |
|                                                                  | 8.3 DIAGNOSTIC OUTPUT                                            | 8.3 DIAGNOSTIC OUTPUT                                               | ...................................31                               |
| 9                                                                | QUICK CONFIGURATION GUIDE ................32                     | QUICK CONFIGURATION GUIDE ................32                        |                                                                     |
| 10                                                               | EXTERNAL RESET .............................................33   | EXTERNAL RESET .............................................33      |                                                                     |
| 11                                                               | CLOCK OSCILLATOR .......................................33       | CLOCK OSCILLATOR .......................................33          |                                                                     |
| 12                                                               | ABSOLUTE MAXIMUM RATINGS .................34                     | ABSOLUTE MAXIMUM RATINGS .................34                        |                                                                     |
| 13                                                               | ELECTRICAL CHARACTERISTICS .................34                   | ELECTRICAL CHARACTERISTICS .................34                      |                                                                     |
| 13.1 OPERATIONAL RANGE ...................................34     | 13.1 OPERATIONAL RANGE ...................................34     | 13.1 OPERATIONAL RANGE ...................................34        |                                                                     |
| 13.2 DC AND TIMING CHARACTERISTICS                               | 13.2 DC AND TIMING CHARACTERISTICS                               | 13.2 DC AND TIMING CHARACTERISTICS                                  | ..............35                                                    |
| 13.3 THERMAL CHARACTERISTICS                                     | 13.3 THERMAL CHARACTERISTICS                                     | 13.3 THERMAL CHARACTERISTICS                                        | ..........................37                                        |
| 14 LAYOUT CONSIDERATIONS .........................38             | 14 LAYOUT CONSIDERATIONS .........................38             | 14 LAYOUT CONSIDERATIONS .........................38                |                                                                     |
| 14.1 EXPOSED DIE PAD ........................................38  | 14.1 EXPOSED DIE PAD ........................................38  | 14.1 EXPOSED DIE PAD ........................................38     |                                                                     |
| 14.2 WIRING GND ..............................................38 | 14.2 WIRING GND ..............................................38 | 14.2 WIRING GND ..............................................38    |                                                                     |
| 14.3 SUPPLY FILTERING                                            | 14.3 SUPPLY FILTERING                                            | 14.3 SUPPLY FILTERING                                               | ........................................38                          |
| 14.4 LAYOUT EXAMPLE                                              | 14.4 LAYOUT EXAMPLE                                              | 14.4 LAYOUT EXAMPLE                                                 | .........................................39                         |
| 15 PACKAGE MECHANICAL DATA ....................40                | 15 PACKAGE MECHANICAL DATA ....................40                | 15 PACKAGE MECHANICAL DATA ....................40                   |                                                                     |
| 15.1 DIMENSIONAL DRAWINGS QFN20                                  | 15.1 DIMENSIONAL DRAWINGS QFN20                                  | 15.1 DIMENSIONAL DRAWINGS QFN20                                     | ...............40                                                   |
| 15.2 PACKAGE CODES ...........................................41 | 15.2 PACKAGE CODES ...........................................41 | 15.2 PACKAGE CODES ...........................................41    |                                                                     |
| 16                                                               | 16                                                               | DESIGNED FOR SUSTAINABILITY .............42                         | DESIGNED FOR SUSTAINABILITY .............42                         |
| 17                                                               | 17                                                               | TABLE OF FIGURES .........................................42        | TABLE OF FIGURES .........................................42        |
| 18                                                               | 18                                                               | REVISION HISTORY .......................................43          | REVISION HISTORY .......................................43          |
| 19                                                               | 19                                                               | REFERENCES ......................................................43 | REFERENCES ......................................................43 |

## 1 Principles of Operation

The TMC7300 low voltage motor driver is intended for battery-operated, space- and standby-powercritical driver applications. It is optimized for DC motor control, as well as control of other magnetic actuators or lamp and LED driving. Optionally the driver supplies four protected half-bridges for direct control by four input signals. A highly efficient power stage, boosted by an internal charge pump for best in-class RDSon resistance, provides high motor current from a tiny package even at low supply voltages. With this, dual AA batteries can be drained down to typically 2.0V (voltage must not drop below 1.8V, provide sufficient supply buffer capacitors).

The TMC7300 requires just a few control pins on its tiny package, as full control is possible via UART interface.

Protection and diagnostic features support robust and reliable operation. A simple-to-use 8-bit UART interface  opens up more tuning and control options. Industries' most advanced low voltage motor driver  family  upgrades  designs  to  efficient  and  reliable  operation  for  cost-effective  and  highly competitive solutions.

Figure 1.1 TMC7300 basic application block diagram for two DC motors

<!-- image -->

## MODES OF OPERATION:

## OPTION 1: DC-Motor Driver with Full Diagnostics and Control

This mode allows operation of two DC motors, or a single motor with double current. Options (label UART):

+ Full control over motor velocity and direction by setting PWM voltage for each motor
+ Control motor torque limit for both motors, by setting a common current limit
+ Use current limit to safely avoid battery overload during acceleration or when motor is blocked
+ Detailed diagnostics and thermal management
+ Passive braking and freewheeling for flexible, lowest power stop modes

<!-- image -->

Access  to  multiple  driver  ICs  is  possible  using  4  different  address  settings  or  via  an  analog multiplexer IC.

UART INTERFACE FOR CONTROL OF 2 DC MOTORS

<!-- image -->

UART INTERFACE FOR CONTROL OF 1 DC MOTOR (UP TO 2.4A)

Figure 1.2 UART controlled single or Dual DC motor driver

<!-- image -->

## OPTION 2: 4 Half Bridge Peripheral Driver

This mode uses the power stage to drive inductive or resistive loads. A single-shunt measurement can be realized, using the bridge foot point connections to add a sense resistor. The TMC7300 protects the power stage  against  overload.  An  external  microcontroller  controls  each  half  bridge  using  a  single input / optionally a common high-side PWM.

4 HALF BRIDGE PERIPHERAL DRIVERS

Figure 1.3 Peripheral Power Driver

<!-- image -->

## 1.1 Control Interfaces

The TMC7300 supports both, discrete control lines for basic operation and a UART based single wire interface with CRC checking.

## 1.1.1 UART Interface

<!-- image -->

The single wire interface allows unidirectional operation (for parameter setting only), or bi-directional operation for full control and diagnostics. It can be driven by any standard microcontroller UART or even by bit banging in software. Baud rates from 9600 Baud to 500k Baud may be used. No baud rate configuration is required, as the TMC7300 automatically adapts to the masters' baud rate .  The frame format is identical to the intelligent TRINAMIC controller &amp; driver ICs TMC51XX and TMC22XX. A CRC checksum allows data transmission over longer distance. For fixed initialization sequences, store the data including CRC into the µC, thus consuming only a few 100 bytes of code for a full initialization. CRC may be ignored during read access, if not desired. This makes CRC use an optional feature! The IC has  a  fixed  address  selected  by  2  pins.  Multiple  drivers  can  be  programmed  in  parallel  by  tying

together all interface pins, in case no read access is required. An optional addressing can be provided by analog multiplexers, like 74HC4066.

From  a  software  point  of  view  the  TMC7300  is  a  peripheral  with  a  number  of  control  and  status registers. Most of them can either be written only or are read only. Some of the registers allow both, read and write access. In case read-modify-write access is desired for a write only register, a shadow register can be realized in master software.

## 1.2 Moving and Controlling the Motor

## 1.2.1 PWM control

<!-- image -->

The motor is operated by an internal PWM generator. Program the desired duty cycle via UART. The PWM acts like a dedicated voltage source for the motor. A 50% duty cycle will let the motor turn like with 50% of the supply voltage. A negated duty cycle will turn the motor in the opposite direction. This way, direction and velocity can be controlled like with a programmable power source. By slowly increasing / decreasing the duty cycle, the motor can be softly accelerated and decelerated.

## 1.2.2 Internal Current Limiter

When  a  DC-motor  is  mechanical  loaded,  its  current  increases.  Therefore,  a  current  limit  allows limitation of motor torque. At the same time, the power source, e.g., a dual AA battery with a certain internal resistance is protected against voltage drop due to overload. This feature especially is helpful when moving the motor to a mechanical obstacle. The action of the current limiter can be read back via the interface.

## 1.3 Mechanical Load Sensing

<!-- image -->

When  a  DC-motor  is  mechanical  loaded,  its  current  increases.  Therefore,  a  current  limit  allows limitation  of  motor  torque. The  TMC7300 reports  back when this load limit is reached. This feature especially is helpful when moving the motor to a mechanical obstacle.

## 1.4 Protection and Diagnostics

By  adapting  the  sense  resistor  to  the  desired  maximum  current,  a  sensitive  protection  of  the respective  half  bridge  is  reached.  In  case  the  voltage  drop  across  the  sense  resistor  plus  internal Power MOSFET exceeds roughly 1V, the power stage becomes disabled, and the error is reported via the interface, or via the DIAG output.

## 2 Pin Assignments

The  TMC7300  comes  in  a  tiny  package  to  fit  miniaturized  devices.  For  the  ease  of  use,  pinning  is shown separately both function-modes.

## 2.1 Package Outline TMC7300 (UART mode)

## BRB OA1 OB1 VS BRA

Figure 2.1 TMC7300 Pinning Top View UART Motor Driver -QFN20, 3x3mm², 0.4mm pitch

<!-- image -->

## 2.2 Signal Descriptions / UART mode

| Pin        |   Number | Type   | Function                                                                                                                                                                                                              |
|------------|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OA2        |        1 |        | DC motor 1 output 2                                                                                                                                                                                                   |
| VCP        |        2 |        | Charge pump voltage. Optionally tie to VS using 1nF to 100nF capacitor. May be left unconnected.                                                                                                                      |
| A1         |        3 | DI     | A1 input not used in UART mode (tie to GND or VCC_IO)                                                                                                                                                                 |
| A2         |        4 | DI     | A2 input not used in UART mode (tie to GND or VCC_IO)                                                                                                                                                                 |
| B1_AD0     |        5 | DI     | S election of UART Address 0…3 (AD0=LSB, AD1=MSB)                                                                                                                                                                     |
| B2_AD1     |        6 | DI     |                                                                                                                                                                                                                       |
| EN         |        7 | DI     | Enable input. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a low level. Also used to clear error flags.                                                          |
| ENUART     |        8 | DI     | Mode selection input. ENUART, MODE: 01: 4 Halfbridge 10: UART enabled                                                                                                                                                 |
| MODE       |        9 | DI     | (CLK, TST input in factory test mode)                                                                                                                                                                                 |
| PWM_UART   |       10 | DIO    | UART Input/Output.                                                                                                                                                                                                    |
| VIO/NSTDBY |       11 |        | 1.8V to 5V IO supply voltage for all digital pins. IC goes to standby mode and resets when this pin is pulled to GND.                                                                                                 |
| DIAG       |       12 | DO     | Diagnostic output. High level upon driver error or stall. Reset by EN=low.                                                                                                                                            |
| 1.8VOUT    |       13 |        | Output of internal 1.8V regulator. Attach 100nF ceramic capacitor to GND near to pin for best performance. Provide the shortest possible loop to the GND pad. The regulator becomes shut down when VIO is pulled low. |
| GND        |       14 |        | GND. Connect to GND plane near pin.                                                                                                                                                                                   |
| OB2        |       15 |        | DC motor 2 output 2                                                                                                                                                                                                   |
| BRB        |       16 |        | Sense resistor connection for coil B or DC motor 2. Place sense resistor to GND near pin.                                                                                                                             |

| Pin             | Number   | Type   | Function                                                                                                     |
|-----------------|----------|--------|--------------------------------------------------------------------------------------------------------------|
| OB1             | 17       |        | DC motor 2 output 1                                                                                          |
| VS              | 18       |        | Motor supply voltage. Provide filtering capacity >10µF near pin with shortest possible loop to GND pad.      |
| OA1             | 19       |        | DC motor 1 output 2                                                                                          |
| BRA             | 20       |        | Sense resistor connection for coil A or DC motor 1. Place sense resistor to GND near pin.                    |
| Exposed die pad | -        |        | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. |

## 2.3 Package Outline / Halfbridge mode

Figure 2.2 TMC7300 Pinning Top View Halfbridge Driver -QFN20, 3x3mm², 0.4mm pitch

<!-- image -->

## 2.4 Signal Descriptions / Halfbridge mode

| Pin        |   Number | Type   | Function                                                                                                                                                                       |
|------------|----------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OA2        |        1 |        | Bridge A output 2                                                                                                                                                              |
| VCP        |        2 |        | Charge pump voltage. Optionally tie to VS using 1nF to 100nF capacitor. May be left unconnected if maximum 2 pins change at a time.                                            |
| A1         |        3 | DI     | Bridge A output 1 polarity                                                                                                                                                     |
| A2         |        4 | DI     | Bridge A output 2 polarity                                                                                                                                                     |
| B1         |        5 | DI     | Bridge B output 1 polarity                                                                                                                                                     |
| B2         |        6 | DI     | Bridge B output 2 polarity                                                                                                                                                     |
| EN         |        7 | DI     | Enable input. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a low level. Also used to release driver after fault shutdown. |
| ENUART     |        8 | DI     | tie to GND                                                                                                                                                                     |
| MODE       |        9 | DI     | tie to VIO                                                                                                                                                                     |
| PWM        |       10 | DI     | Common PWM for high-side drivers. Tie high to enable high-side drivers as controlled by A and B inputs. Influences high-side driver, only.                                     |
| VIO/NSTDBY |       11 |        | 1.8V to 5V IO supply voltage for all digital pins. IC goes to standby mode and resets when this pin is pulled to GND.                                                          |
| DIAG       |       12 | DO     | Diagnostic output. High level upon driver error. Reset by EN=low.                                                                                                              |

| Pin             | Number   | Type   | Function                                                                                                                                                                                                              |
|-----------------|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.8VOUT         | 13       |        | Output of internal 1.8V regulator. Attach 100nF ceramic capacitor to GND near to pin for best performance. Provide the shortest possible loop to the GND pad. The regulator becomes shut down when VIO is pulled low. |
| GND             | 14       |        | GND. Connect to GND plane near pin.                                                                                                                                                                                   |
| OB2             | 15       |        | Bridge B output 2                                                                                                                                                                                                     |
| BRB             | 16       |        | Foot point of bridge B. Connect to GND directly, or via a sense resistor, if external current measurement is desired.                                                                                                 |
| OB1             | 17       |        | Bridge B output 1                                                                                                                                                                                                     |
| VS              | 18       |        | Bridge supply voltage. Provide filtering capacity >10µF near pin with shortest possible loop to GND pad.                                                                                                              |
| OA1             | 19       |        | Bridge A output 1                                                                                                                                                                                                     |
| BRA             | 20       |        | Foot point of bridge A. Connect to GND directly, or via a sense resistor.                                                                                                                                             |
| Exposed die pad | -        |        | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane.                                                                                                          |

## 3 Sample Circuits

The sample circuits show the connection for different operation modes. The connection of the bus interface  and  further  digital  signals  is  left  out  for  clarity.  The  TMC7300  is  configured  for  different application modes by two pins, as well as by settings available via the UART interface.

## 3.1 DC Motor Operation

Figure 3.1 Operation of two DC-Motors for 1.8V to 11V supply

<!-- image -->

The standard application circuit uses a minimum set of additional components to operate one or two DC motors. Each one sense resistor sets the motor current limit. See chapter 7 to choose the right sense resistor value. Use ceramic, or low ESR capacitors for filtering the power supply to keep power supply ripple below a few 100mV, especially when low voltage operation is desired. These capacitors need  to  cope  with  the  current  ripple  caused  by  chopper  operation.  A  minimum  capacity  of  100µF electrolytic, or 10µF ceramic capacitor near the driver is recommended. Actual demand will depend on the internal power supply resistance and the desired motor current. VCC\_IO can be supplied from a separate supply, e.g., a 3.3V regulator, or be driven by a microcontroller port pin. AD0 and AD1 set the UART address. Ensure, that the EN pin is driven by the microcontroller in order to disable the motor prior to initialization! Apply a pulldown resistor for EN to keep it low during power-up.

## Basic layout and component hints

Place sense resistors and all filter capacitors as close as possible to the related IC pins. Use a solid common GND for all GND connections, also for sense resistor GND. Connect 1.8VOUT filtering capacitor directly to 1.8VOUT and the GND pin. See layout hints for more details. Low ESR electrolytic capacitors are recommended for VS filtering unless supply resistance is very low.

## Attention

Power up with EN-pin low. Set GCONF.pwm\_direct prior to enabling the driver via EN-pin. Otherwise, the motor will run directly after power-up.

Figure 3.2 Operation of a single DC-Motor (double current)

<!-- image -->

A single DC-motor can be operated at double current (up to 2.4A), by paralleling both power-stages. Before operating the motor, the IC has to be switched to parallel mode, because default setting will cause a short circuit between the bridges and a high current flow, which will either short the supply voltage,  or  trigger  overcurrent  protection.  Therefore  ensure,  that  the  EN  pin  is  driven  by  the microcontroller in order to disable the motor prior to initialization. Apply a pulldown resistor for EN additionally to ensure power-up with a low level.

## Attention

For parallel operation, power up with EN-pin low. Set GCONF.par\_mode to force identical drive signals prior to enabling the driver via EN-pin. In this mode, a capacitor is required on pin VCP.

## 3.2 Halfbridge Driver Mode

Halfbridge driver mode offers four separate half-bridges to individually drive and control resistive and inductive  loads,  like  LEDs,  solenoids,  etc.  In  case  a  current  measurement  is  desired,  each  two halfbridges allow adding a foot point shunt resistor. Keep voltage drop in this resistor to maximum 400mV  for  normal  operation.  A  common  high-side  PWM  input  allows  switching  off  all  high-side drivers at the same time. It does not influence drivers, where the low-side is on. If more than two drivers are switched at the same time, a capacitor on pin VCP is recommended. The diagnostic output signals any overcurrent or overtemperature condition. The driver automatically restarts after power-up, or after cycling VIO\_NSTDBY pin.

Figure 3.3 Halfbridge Driver Mode

<!-- image -->

Table 3.1 Truth table for DC motor in half bridge mode

| EN   | Input 1   | Input 2   | PWM   | Output 1   | Output 2   | Mode (with motor)    |
|------|-----------|-----------|-------|------------|------------|----------------------|
| L    | x         | x         | x     | high-Z     | high-Z     | Free-Wheeling        |
| H    | H         | L         | H     | VM         | GND        | CW                   |
| H    | H         | L         | L     | high-Z     | GND        | CW coast / CCW brake |
| H    | L         | H         | H     | GND        | VM         | CCW                  |
| H    | L         | H         | L     | GND        | high-Z     | CCW coast / CW brake |
| H    | H         | H         | H     | VM         | VM         | Braking (high side)  |
| H    | H         | H         | L     | high-Z     | high-Z     | Free-Wheeling        |
| H    | L         | L         | x     | GND        | GND        | Braking (low side)   |

Table 3.2 Truth table for each bridge

| EN   | PWM   | Input   | Output   |
|------|-------|---------|----------|
| L    | x     | x       | high-Z   |
| H    | H     | L       | GND      |
| H    | H     | H       | VM       |
| H    | L     | H       | high-Z   |
| H    | L     | L       | GND      |

## 3.3 Highly Efficient Driver

The  TMC7300  integrates  a  highly  efficient  power  stage,  offering  low  RDSon  even  at  low  supply voltages, due to its internal charge pump. This enables high motor current drive capability and low power dissipation for battery powered applications.

Figure 3.4 RDSon Variation over Supply Voltage

<!-- image -->

When operating  at  a  high  motor  current,  the  driver  power  dissipation  due  to  MOSFET  switch  onresistance significantly heats up the driver. This power dissipation will significantly heat up the PCB cooling infrastructure, if operated at an increased duty cycle. This in turn leads to a further increase of driver  temperature.  An  increase  of  temperature  by  about  100°C  increases  MOSFET  resistance  by roughly 50%. This is a typical behavior of MOSFET switches. Therefore, under high duty cycle, high load  conditions,  thermal  characteristics  have  to  be  carefully  taken  into  account,  especially  when increased  environment  temperatures  are  to  be  supported.  Refer  the  thermal  characteristics  and  the layout hints for more information. As  a thumb rule, thermal properties  of the PCB design become critical  for  the  tiny  QFN  3mm  x  3mm  package  at  or  above  0.8A  mean  motor  current  for  increased periods of time. For currents above 0.8A, a 4-layer PCB layout with 5 via contact of the die attach pad to the GND plane is required. Keep in mind that resistive power dissipation raises with the square of the motor current. On the other hand, this means that a small reduction of motor current significantly saves heat dissipation and energy.

Pay  special  attention  to  good  thermal  properties  of  your  PCB  layout,  when  going  for  0.8A  mean current or more.

## 3.4 Low Power Standby

Battery powered applications, as well as mains powered applications conforming to EU energy saving regulations, often require a standby mode, where the power-supply remains on. Current consumption in this mode must be minimized. Control near zero power TMC7300 standby operation by switching off the I/O supply voltage on VIO\_NSTDBY pin. At the same time make sure, that no digital input pin is at a high level. An input level above VIO\_NSTDBY would hinder pulling down VIO\_NSTDBY, due to the ESD protection diodes in each digital I/O pin. These diodes clamp each input to a level between GND and the IO supply voltage VIO\_NSTDBY. Therefore, stop the motor first, and allow sufficient time for the motor to come to a standstill, pull the enable input EN low, and also all other input pins, to switch off the motor completely before switching off VIO voltage. All driver registers are reset to their power-up defaults after leaving standby mode. See Figure 3.5.

Figure 3.5 Switching to Standby and Back On

<!-- image -->

## 3.5 Very Low I/O Voltage Operation

In  cases,  where  an  I/O  voltage  of  1.8V  (+-5%)  is  to  be  used,  the  VIO  undervoltage  threshold  level might be too high, to safely  release the TMC7300 from reset state.  To solve,  use the internal 1.8V regulator to self-supply the TMC7300 VIO pin, because it delivers slightly more than the rising reset voltage  threshold,  since  it  follows  the  same  tolerance  stray.  For  power-up,  force  the  voltage  on VIO/NSTDBY to min. 1.4V using a port pin. To go back to low power standby, pull it down to less than 0.6V. A PNP transistor gives a low resistive switch to supply VIO during operation.

Optionally, use an additional 2.0V I/O voltage regulator for the TMC7300, or use a higher I/O voltage and apply level shifters (e.g., MAX14595 for UART and I/O, and 74AUP1T00 to drive VIO/NSTDBY).

Figure 3.6 Additional Circuit for I/O voltage &lt;1.80V

<!-- image -->

## 4 UART Single Wire Interface

<!-- image -->

The UART single wire interface allows control of the TMC7300 with any microcontroller UART. It shares transmit and receive line like an RS485 based interface. Data transmission is secured using a cyclic redundancy check, so that increased interface distances (e.g., over cables between two PCBs) can be bridged  without  danger  of  wrong  or  missed  commands  even  in  the  event  of  electro-magnetic disturbance. The automatic baud rate detection makes this interface easy to use.

## 4.1 Datagram Structure

## 4.1.1 Write Access

| UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        | UART WRITE ACCESS DATAGRAM STRUCTURE                        |
|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 | each byte is LSB…MSB, highest byte transmitted first 0 … 63 |
| sync + reserved                                             | sync + reserved                                             | sync + reserved                                             | sync + reserved                                             | sync + reserved                                             | sync + reserved                                             | sync + reserved                                             | sync + reserved                                             | 8 bit slave address                                         | 8 bit slave address                                         | 8 bit slave address                                         | RW + 7 bit register addr.                                   | RW + 7 bit register addr.                                   | RW + 7 bit register addr.                                   | 32 bit data                                                 | 32 bit data                                                 | 32 bit data                                                 | CRC                                                         | CRC                                                         | CRC                                                         |
| 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 0…7                                                         | 8…15                                                        | 8…15                                                        | 8…15                                                        | 16…23                                                       | 16…23                                                       | 16…23                                                       | 24…55                                                       | 24…55                                                       | 24…55                                                       | 56…63                                                       | 56…63                                                       | 56…63                                                       |
| 1                                                           | 0                                                           | 1                                                           | 0                                                           | Reserved (don't cares but included in CRC)                  | Reserved (don't cares but included in CRC)                  | Reserved (don't cares but included in CRC)                  | Reserved (don't cares but included in CRC)                  | SLAVEADDR =(AD0, AD1)                                       | SLAVEADDR =(AD0, AD1)                                       | SLAVEADDR =(AD0, AD1)                                       | register address                                            | register address                                            | 1                                                           | data bytes 3, 2, 1, 0 (high to low byte)                    | data bytes 3, 2, 1, 0 (high to low byte)                    | data bytes 3, 2, 1, 0 (high to low byte)                    | CRC                                                         | CRC                                                         | CRC                                                         |
| 0                                                           | 1                                                           | 2                                                           | 3                                                           | 4                                                           | 5                                                           | 6                                                           | 7                                                           | 8                                                           | …                                                           | 15                                                          | 16                                                          | …                                                           | 23                                                          | 24                                                          | …                                                           | 55                                                          | 56                                                          | …                                                           | 63                                                          |

A sync nibble precedes each transmission to and from the TMC7300 and is embedded into the first transmitted  byte,  followed  by  an  addressing  byte  (0  to  3,  selected  by  pins  AD0  (LSB)  and  AD1  for TMC7300). Each transmission allows a synchronization of the internal baud rate divider to the master clock. The actual baud rate is adapted, and variations of the internal clock frequency are compensated. Thus, the baud rate can be freely chosen within the valid range. Each transmitted byte starts with a start bit (logic 0, low level on UART pin) and ends with a stop bit (logic 1, high level on UART pin). The bit time is calculated by measuring the time from the beginning of start bit (1 to 0 transition) to the end of the sync frame (1 to 0 transition from bit 2 to bit 3). All data is transmitted bytewise. The 32-bit data words are transmitted with the highest byte first.

A minimum baud rate of 9000 baud is permissible, assuming maximum clock frequency (worst case for low baud rate). Maximum baud rate is fCLK/16 due to the required stability of the baud clock.

The slave address SLAVEADDR is selected by AD0 (bit 0) and AD1 (bit 1) in the range 0 to 3. Bit 7 of the register address identifies a Read (0) or a Write (1) access. Example: Address 0x10 is changed to 0x90 for a write access.

The communication becomes reset if a pause time of longer than 63 bit times between the start bits of two successive bytes occurs. This timing is based on the last correctly received datagram. In this case, the transmission needs to be restarted after a failure recovery time of minimum 12 bit times of bus idle time. This scheme allows the master to reset communication in case of transmission errors. Any pulse on an idle data line below 16 clock cycles will be treated as a glitch and leads to a timeout of 12 bit times, for which the data line must be idle. Other errors like wrong CRC are also treated the same  way.  This  allows  a  safe  re-synchronization  of  the  transmission  after  any  error  conditions. Remark, that due to this mechanism an abrupt reduction of the baud rate to less than 15 percent of the previous value is not possible.

Each  accepted  write  datagram  becomes  acknowledged  by  the  receiver  by  incrementing  an  internal cyclic  datagram  counter  (8  bit).  Reading  out  the  datagram  counter  allows  the  master  to  check  the success  of  an  initialization  sequence  or  single  write  accesses.  Read  accesses  do  not  modify  the counter.

The UART line must be logic high during idle state.

## 4.1.2 Read Access

| UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          | UART READ ACCESS REQUEST DATAGRAM STRUCTURE          |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first | each byte is LSB…MSB, highest byte transmitted first |
| sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | sync + reserved 8 bit                                | slave address                                        | slave address                                        | RW + 7 bit register address                          | RW + 7 bit register address                          | RW + 7 bit register address                          | CRC                                                  | CRC                                                  |                                                      |
| 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 0...7                                                | 8…15                                                 | 8…15                                                 | 16…23                                                | 16…23                                                | 16…23                                                | 24…31                                                | 24…31                                                |                                                      |
| 1                                                    | 0                                                    | 1                                                    | 0                                                    | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | Reserved (don't cares but included in CRC)           | SLAVEADDR =(AD0, AD1)                                | SLAVEADDR =(AD0, AD1)                                | register address                                     | register address                                     | 0                                                    | CRC                                                  | CRC                                                  |                                                      |
| 0                                                    | 1                                                    | 2                                                    | 3                                                    | 4                                                    | 5                                                    | 6                                                    | 7                                                    | 8                                                    | 15                                                   | 16                                                   | …                                                    | 23 24                                                | …                                                    | 31                                                   |                                                      |

The read access request datagram structure is  identical  to  the  write  access  datagram  structure  but uses a lower number of user bits. Its function is the addressing of the slave and the transmission of the desired register address for the read access. The TMC2300 responds with the same baud rate as the master uses for the read request.

In  order  to  ensure  a  clean  bus  transition  from  the  master  to  the  slave,  the  TMC2300  does  not immediately send the reply to a read access, but it uses a programmable delay time after which the first  reply  byte  becomes  sent  following  a  read  request.  This  delay  time  can  be  set  in  multiples  of eight  bit  times  using SENDDELAY time  setting  (default=8  bit  times)  according  to  the  needs  of  the master. In a multi-slave system, set SENDDELAY to min. 2 for all slaves. Otherwise, a non-addressed slave might detect a transmission error upon read access to a different slave.

| UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        | UART READ ACCESS REPLY DATAGRAM STRUCTURE                        |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 | each byte is LSB…MSB, highest byte transmitted first 0 ...... 63 |
| sync + reserved                                                  | sync + reserved                                                  | sync + reserved                                                  | sync + reserved                                                  | sync + reserved                                                  | sync + reserved                                                  | sync + reserved                                                  | sync + reserved                                                  | 8 bit master address                                             | 8 bit master address                                             | RW + 7 bit register addr.                                        | RW + 7 bit register addr.                                        | 32 bit data                                                      | 32 bit data                                                      | 32 bit data                                                      | CRC                                                              | CRC                                                              | CRC                                                              |                                                                  |                                                                  |
| 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 0…7                                                              | 8…15                                                             | 8…15                                                             | 16…23                                                            | 16…23                                                            | 24…55                                                            | 24…55                                                            | 24…55                                                            | 56…63                                                            | 56…63                                                            | 56…63                                                            |                                                                  |                                                                  |
| 1                                                                | 0                                                                | 1                                                                | 0                                                                |                                                                  | reserved (0)                                                     | reserved (0)                                                     | reserved (0)                                                     | 0xFF                                                             | 0xFF                                                             | register address                                                 | 0                                                                | data bytes 3, 2, 1, 0 (high to low byte)                         | data bytes 3, 2, 1, 0 (high to low byte)                         | data bytes 3, 2, 1, 0 (high to low byte)                         | CRC                                                              | CRC                                                              | CRC                                                              |                                                                  |                                                                  |
| 0                                                                | 1                                                                | 2                                                                | 3                                                                | 4                                                                | 5                                                                | 6                                                                | 7                                                                | 8                                                                | 15                                                               | 16                                                               | 23                                                               | 24                                                               | …                                                                | 55                                                               | 56                                                               | …                                                                | 63                                                               |                                                                  |                                                                  |

The  read  response  is  sent  to  the  master  using  address  code  %11111111.  The  transmitter  becomes switched inactive four bit times after the last bit is sent.

Address %11111111 is reserved for read access replies going to the master.

## Attention:

In a multiple slave system, set SENDDELAY minimum 2 to ensure clean bus transitions!

## Hint

Find an example for generating read and write datagrams in the TMC2300 calculation sheet.

## 4.2 CRC Calculation

An 8-bit CRC polynomial is used for checking both read and write access. It allows detection of up to eight single bit errors. The CRC8-ATM polynomial with an initial value of zero is applied LSB to MSB, including  the  sync-  and  addressing  byte.  The  sync  nibble  is  assumed  to  always  be  correct.  The TMC7300  responds  only  to  correctly  transmitted  datagrams  containing  its  own  slave  address.  It increases its datagram counter for each correctly received write access datagram.

<!-- formula-not-decoded -->

## SERIAL CALCULATION EXAMPLE

CRC = (CRC &lt;&lt; 1) OR (CRC.7 XOR CRC.1 XOR CRC.0 XOR [new incoming bit])

```
C-CODE EXAMPLE FOR CRC CALCULATION void swuart_calcCRC(UCHAR* datagram, UCHAR datagramLength) { int i,j; UCHAR* crc = datagram + (datagramLength-1); // CRC located in last byte of message UCHAR currentByte; *crc = 0; for (i=0; i<(datagramLength-1); i++) {      // Execute for all bytes of a message currentByte = datagram[i];                // Retrieve a byte to be sent from Array for (j=0; j<8; j++) { if ((*crc >> 7) ^ (currentByte&0x01))   // update CRC based result of XOR operation { *crc = (*crc << 1) ^ 0x07; } else { *crc = (*crc << 1); } currentByte = currentByte >> 1; } // for CRC bit } // for message byte }
```

## 4.3 UART Signals

The UART interface on the TMC7300 uses a single bi-direction pin:

| UART I NTERFACE SIGNAL   | UART I NTERFACE SIGNAL                                                         |
|--------------------------|--------------------------------------------------------------------------------|
| UART                     | Non-inverted data input and output. I/O with Schmitt Trigger and VCC_IO level. |
| AD0                      | IC UART address bit 0 (LSB)                                                    |
| AD1                      | IC UART address bit 1                                                          |

The IC checks PDN\_UART for correctly received datagrams with its own address continuously. It adapts to the baud rate based on the sync nibble, as described before. In case of a read access, it switches on its output drivers and sends its response using the same baud rate. The output becomes switched off four bit times after transfer of the last stop bit.

Figure 4.1 Attaching the TMC7300 to a microcontroller UART

<!-- image -->

## 4.4 Addressing Multiple Slaves

## WRITE ONLY ACCESS

If read access is not used, and all slaves are to be programmed with the same initialization values, no addressing is required. All slaves can be programmed in parallel like a single device (Figure 4.1.).

## ADDRESSING MULTIPLE SLAVES

As the TMC7300 uses has a limited number of UART addresses, in principle only up to four ICs can be accessed per UART interface channel. Adding analog switches allows separated access to individual ICs. This scheme is similar to an SPI bus with individual slave select lines (Figure 4.2).

Figure 4.2 Addressing multiple TMC7300 via single wire interface using analog switches

<!-- image -->

## PROCEED AS FOLLOWS TO CONTROL MULTIPLE SLAVES:

- -Set  the  UART  to  8  bits,  no  parity.  Select  a  baud  rate  safely  within  the  valid  range.  At 250kBaud, a write access transmission requires 320µs (=8 Bytes * (8+2) bits * 4µs).
- -Before starting an access, activate the select pin going to the analog switch by setting it high. All other slaves select lines shall be off unless a broadcast is desired.
- -When using the optional buffer, set TMC7300 transmission send delay to an appropriate value allowing the µC to switch off the buffer before receiving reply data.
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

| NOTATION OF R/W FIELD   |                                            |
|-------------------------|--------------------------------------------|
| R                       | Read only                                  |
| W                       | Write only                                 |
| R/W                     | Read- and writable register                |
| R+WC                    | Status register. Write 1-bit to clear flag |

## OVERVIEW REGISTER MAPPING

| REGISTER                        | DESCRIPTION                                                                                                                                                         |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General Configuration Registers | These registers contain - global configuration - global status flags - interface configuration                                                                      |
| Chopper Register Set            | This register set offers registers for - chopper settings, e.g. frequency - passive braking and freewheeling options - driver diagnostics - driver enable / disable |
| Motor Control Registers         | Register set for actual control of motor operation                                                                                                                  |

## 5.1 General Registers

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                                                                                    | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Description / bit names                                                                                                                                                                                                                                                                                                          |                                                 |
|                                                 |                                                 | Register                                        | Bit GCONF - Global configuration                                                                                                                                                                                                                                                                                                 |                                                 |
|                                                 |                                                 |                                                 | flags 0 PWM_direct ( Reset default=0 ) 0: Do not use this mode. 1: Normal DC-motor operation Attention : Do not enable driver prior to setting                                                                                                                                                                                   |                                                 |
|                                                 |                                                 |                                                 | this flag. Motors 1 would start running. 1 extcap ( Reset default=0 ) 0: Operation without external capacitor on VCP.                                                                                                                                                                                                            |                                                 |
|                                                 |                                                 |                                                 | 1: External capacitor available. No switching delays. 2 par_mode ( Reset default=0 ) 0: normal operation (dual motor) 1: Single DC-motor operation: Parallel operation                                                                                                                                                           |                                                 |
| RW                                              | 0x00                                            | 10 GCONF                                        | for single motor. Bridge OA1 and OB1, OA2 and OB2 output identical signals. Control is by bridge A, only. Externally bridge the outputs and the sense resistor connection. Attention : Do not enable driver prior to setting this flag, if outputs are bridged!                                                                  |                                                 |
|                                                 |                                                 |                                                 | 3 reserved / set to 0                                                                                                                                                                                                                                                                                                            |                                                 |
|                                                 |                                                 |                                                 | 4 / set to 0                                                                                                                                                                                                                                                                                                                     |                                                 |
|                                                 |                                                 |                                                 | reserved 5 reserved to 0                                                                                                                                                                                                                                                                                                         |                                                 |
|                                                 |                                                 |                                                 | / set 6 reserved / set to 0                                                                                                                                                                                                                                                                                                      |                                                 |
|                                                 |                                                 |                                                 | 7                                                                                                                                                                                                                                                                                                                                |                                                 |
|                                                 |                                                 |                                                 | test_mode 0: Normal operation 1: Enable analog test output on pin A1 CURRENT_LIMIT [1..0] selects the function of A1: 0: T120; 1: DAC Attention: Not for user, set to 0 for normal operation!                                                                                                                                    |                                                 |
|                                                 |                                                 |                                                 | Bit GSTAT - Global status flags (Re- Write with '1' bit to clear respective flags) 0 reset                                                                                                                                                                                                                                       |                                                 |
|                                                 |                                                 |                                                 | cleared to reset values. 1 drv_err                                                                                                                                                                                                                                                                                               |                                                 |
| R+ WC                                           | 0x01                                            | 3 GSTAT                                         | 1: Indicates, that the driver has been shut down due to overtemperature or short circuit detection since the last read access. Read DRV_STATUS for details. The flag can only be cleared when all error conditions are cleared. 2 u3v5 1: Actual state of the supply voltage comparator. high value means that the voltage sinks |                                                 |
|                                                 |                                                 |                                                 | 3.5V. This flag is not latched and thus does                                                                                                                                                                                                                                                                                     |                                                 |
|                                                 | 0x02                                            |                                                 | A need to be cleared.                                                                                                                                                                                                                                                                                                            |                                                 |
| R                                               |                                                 |                                                 | below not Interface transmission counter. This register becomes incremented with each successful UART interface write                                                                                                                                                                                                            |                                                 |
|                                                 |                                                 |                                                 | 1: Indicates that the IC has been reset since the last read access to GSTAT . All registers have been                                                                                                                                                                                                                            |                                                 |
|                                                 |                                                 |                                                 | access. Read out to check the serial transmission for                                                                                                                                                                                                                                                                            |                                                 |
|                                                 |                                                 |                                                 | lost data. Read accesses do                                                                                                                                                                                                                                                                                                      |                                                 |
|                                                 |                                                 |                                                 | not change the content.                                                                                                                                                                                                                                                                                                          |                                                 |
|                                                 |                                                 |                                                 | The counter wraps around from 255 to 0.                                                                                                                                                                                                                                                                                          |                                                 |
| 8 IFCNT                                         | 8 IFCNT                                         | 8 IFCNT                                         | 8 IFCNT                                                                                                                                                                                                                                                                                                                          | 8 IFCNT                                         |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                    |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                         | Description / bit names                                                                                                                                                          |
| W                                               | 0x03                                            | 4                                               | SLAVECONF                                       | Bit 11..8                                       | SLAVECONF SENDDELAY for read access (time until reply is sent): 0, 1: 8 bit times ( Attention: Don't use 0 or 1 in multi-slave systems ) 2, 3: 3*8 bit times 4, 5: 5*8 bit times |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | Bit                                             | INPUT (Reads the state of all input pins available)                                                                                                                              |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 0                                               | EN (1=enable driver)                                                                                                                                                             |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 1                                               | NSTDBY (0=standby, 1=enable)                                                                                                                                                     |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 2                                               | AD0                                                                                                                                                                              |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 3                                               | AD1                                                                                                                                                                              |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 4 5                                             | DIAG                                                                                                                                                                             |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            |                                                 | 1: UART interface on                                                                                                                                                             |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 6 7                                             | UART input MODE input                                                                                                                                                            |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 8                                               | 0: UART controlled operation A2                                                                                                                                                  |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 9                                               | A1                                                                                                                                                                               |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 10                                              | COMP_A1A2 1: during LS passive braking: A1 voltage > A2 voltage                                                                                                                  |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 11                                              | COMP_B1B2 1: during LS passive braking: B1 voltage > B2 voltage                                                                                                                  |
| R                                               | 0x06                                            | 10 + 8                                          | IOIN                                            | 31.. 24                                         | VERSION : 0x40=first version of the IC Identical numbers mean full digital compatibility.                                                                                        |

## 5.2 Motor Control

| MOTOR CONTROL REGISTER SET (0X 10…0 X1F)   | MOTOR CONTROL REGISTER SET (0X 10…0 X1F)   | MOTOR CONTROL REGISTER SET (0X 10…0 X1F)   | MOTOR CONTROL REGISTER SET (0X 10…0 X1F)   | MOTOR CONTROL REGISTER SET (0X 10…0 X1F)   | MOTOR CONTROL REGISTER SET (0X 10…0 X1F)                                                                                                                                                                                                                                                                                                                                                  |
|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                        | Addr                                       | n                                          | Register                                   | Description / bit names                    | Description / bit names                                                                                                                                                                                                                                                                                                                                                                   |
| W                                          | 0x10                                       | 1 + 5                                      | CURRENT_ LIMIT                             | Bit                                        | CURRENT_LIMIT - Driver current control 0 motorrun ( Reset default=1 )                                                                                                                                                                                                                                                                                                                     |
| W                                          | 0x10                                       | 1 + 5                                      | CURRENT_ LIMIT                             | 12..8                                      | selected ( PWM_CONF ). IRUN ( Reset default=31 ) Run current limit for both motors (0=1/32 … 31=32/32) Set a current value to limit motor torque. Each full bridge current is individually cycle by cycle limited by IRUN setting. When current limiting is not active, OLA resp. OLB become set. Hint: Choose sense resistors in a way, that IRUN limit is 8 to 31 for best performance. |
| W                                          | 0x22                                       | 9 + 9                                      | PWM_AB                                     | Bit                                        | PWM_DIRECT - Driver duty cycle control                                                                                                                                                                                                                                                                                                                                                    |
| W                                          | 0x22                                       | 9 + 9                                      | PWM_AB                                     | 8..0                                       | PWM_A , signed: Bridge A PWM duty cycle (-255 to +255 => -100% to +100%)                                                                                                                                                                                                                                                                                                                  |
| W                                          | 0x22                                       | 9 + 9                                      | PWM_AB                                     | 24..16                                     | PWM_B , signed: Bridge B PWM duty cycle (-255 to +255 => -100% to +100%)                                                                                                                                                                                                                                                                                                                  |

## 5.3 Chopper Control Registers

| CHOPPER CONTROL REGISTER SET (0X 6C…0 X7F)   | CHOPPER CONTROL REGISTER SET (0X 6C…0 X7F)   | CHOPPER CONTROL REGISTER SET (0X 6C…0 X7F)   | CHOPPER CONTROL REGISTER SET (0X 6C…0 X7F)   | CHOPPER CONTROL REGISTER SET (0X 6C…0 X7F)                          | CHOPPER CONTROL REGISTER SET (0X 6C…0 X7F)   |
|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|---------------------------------------------------------------------|----------------------------------------------|
| R/W                                          | Addr                                         | n                                            | Register                                     | Description / bit names                                             | Range [Unit]                                 |
| RW                                           | 0x6C                                         | 32                                           | CHOPCONF                                     | Chopper and driver configuration See separate table!                | Reset default= 0x13008001                    |
| R                                            | 0x6F                                         | 32                                           | DRV_ STATUS                                  | Driver status flags and current level read back See separate table! |                                              |
| RW                                           | 0x70                                         | 22                                           | PWMCONF                                      | StealthChop PWM chopper configuration See separate table!           | Reset default= 0xC40D1024                    |

## 5.3.1 CHOPCONF -Chopper Configuration

| 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION   | 0X6C: CHOPCONF - CHOPPER CONFIGURATION                                                                                             |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                      | Name                                     | Function                                 | Comment                                                                                                                            |
| 31                                       | diss2vs                                  | Low side short protection disable        | 0: Short protection low side is on 1: Short protection low side is disabled                                                        |
| 30                                       | diss2g                                   | short to GND protection disable          | 0: Short to GND protection is on 1: Short to GND protection is disabled                                                            |
| 29                                       | -                                        | reserved                                 | set to 0 or leave unmodified                                                                                                       |
| 28                                       |                                          |                                          |                                                                                                                                    |
| 27                                       |                                          |                                          |                                                                                                                                    |
| 26                                       |                                          |                                          |                                                                                                                                    |
| 25                                       |                                          |                                          |                                                                                                                                    |
| 24                                       |                                          |                                          |                                                                                                                                    |
| 23                                       | -                                        | reserved                                 | set to 0 or leave unmodified                                                                                                       |
| 22                                       |                                          |                                          |                                                                                                                                    |
| 21                                       |                                          |                                          |                                                                                                                                    |
| 20                                       |                                          |                                          |                                                                                                                                    |
| 19                                       |                                          |                                          |                                                                                                                                    |
| 18                                       |                                          |                                          |                                                                                                                                    |
| 17                                       |                                          |                                          |                                                                                                                                    |
| 16                                       | tbl1                                     | TBL                                      | %00 … %11:                                                                                                                         |
| 15                                       | tbl0                                     | blank time select                        | Set current comparator blank time to 16, 24, 32 or 40 clocks Hint : %00 or %01 is recommended for most applications (Default: %01) |
| 14                                       | -                                        | reserved                                 | set to 0                                                                                                                           |
| 13                                       |                                          |                                          |                                                                                                                                    |
| 12                                       |                                          |                                          |                                                                                                                                    |
| 11                                       |                                          |                                          |                                                                                                                                    |
| 10                                       |                                          |                                          |                                                                                                                                    |
| 9                                        |                                          |                                          |                                                                                                                                    |
| 8                                        |                                          |                                          |                                                                                                                                    |
| 7                                        |                                          |                                          |                                                                                                                                    |
| 6                                        |                                          |                                          |                                                                                                                                    |
| 5                                        |                                          |                                          |                                                                                                                                    |
| 4                                        |                                          |                                          |                                                                                                                                    |
| 3                                        |                                          |                                          |                                                                                                                                    |
| 2                                        |                                          |                                          |                                                                                                                                    |
| 1                                        |                                          |                                          |                                                                                                                                    |
| 0                                        | enabledrv                                | driver enable                            | 1: Enable driver (Default: 1, enable)                                                                                              |

## 5.3.2 PWMCONF -Voltage PWM Mode StealthChop

| 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP   | 0X70: PWMCONF - VOLTAGE MODE PWM STEALTHCHOP                                                                                                                                                       |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                            | Name                                           | Function                                       | Comment                                                                                                                                                                                            |
| 31                                             | -                                              | reserved                                       | set to 0 or leave unmodified                                                                                                                                                                       |
| 30                                             |                                                |                                                |                                                                                                                                                                                                    |
| 29                                             |                                                |                                                |                                                                                                                                                                                                    |
| 28                                             |                                                |                                                |                                                                                                                                                                                                    |
| 27                                             |                                                |                                                |                                                                                                                                                                                                    |
| 26                                             |                                                |                                                |                                                                                                                                                                                                    |
| 25                                             |                                                |                                                |                                                                                                                                                                                                    |
| 24                                             |                                                |                                                |                                                                                                                                                                                                    |
| 23                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                           |
| 22                                             | -                                              | reserved                                       | set to 0                                                                                                                                                                                           |
| 21                                             | freewheel1                                     | Allows different                               | Stand still option when motor current setting is zero                                                                                                                                              |
| 20                                             | freewheel0                                     | standstill modes                               | ( I_HOLD =0). %00: Normal operation (always selected with motorrun =1) %01: Freewheeling %10: Coil shorted using LS drivers (passive braking) %11: Coil shorted using HS drivers (passive braking) |
| 19                                             | -                                              | reserved                                       | set to 0 or leave unmodified                                                                                                                                                                       |
| 18                                             | -                                              | reserved                                       | set to 0 or leave unmodified                                                                                                                                                                       |
| 17                                             | pwm_freq1                                      | PWM frequency                                  | %00: f PWM =2/1024 f CLK                                                                                                                                                                           |
| 16                                             | pwm_freq0                                      | selection                                      | %01: f PWM =2/683 f CLK %10: f PWM =2/512 f CLK %11: f PWM =2/410 f CLK                                                                                                                            |
| 15                                             | -                                              | reserved                                       | set to 0 or leave unmodified                                                                                                                                                                       |
| 14                                             |                                                |                                                |                                                                                                                                                                                                    |
| 13                                             |                                                |                                                |                                                                                                                                                                                                    |
| 12                                             |                                                |                                                |                                                                                                                                                                                                    |
| 11                                             |                                                |                                                |                                                                                                                                                                                                    |
| 10                                             |                                                |                                                |                                                                                                                                                                                                    |
| 9                                              |                                                |                                                |                                                                                                                                                                                                    |
| 8                                              |                                                |                                                |                                                                                                                                                                                                    |
| 7                                              | -                                              | reserved                                       | set to 0 or leave unmodified                                                                                                                                                                       |
| 6                                              |                                                |                                                |                                                                                                                                                                                                    |
| 5                                              |                                                |                                                |                                                                                                                                                                                                    |
| 4                                              |                                                |                                                |                                                                                                                                                                                                    |
| 3                                              |                                                |                                                |                                                                                                                                                                                                    |
| 2                                              |                                                |                                                |                                                                                                                                                                                                    |
| 1                                              |                                                |                                                |                                                                                                                                                                                                    |
| 0                                              |                                                |                                                |                                                                                                                                                                                                    |

## 5.3.3 DRV\_STATUS -Driver Status Flags

| 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK   | 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK   | 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK   | 0X6F: DRV_STATUS - DRIVER STATUS FLAGS AND CURRENT LEVEL READ BACK                                                                                                                                                                       |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                                                                  | Name                                                                 | Function                                                             | Comment                                                                                                                                                                                                                                  |
| 31..                                                                 | -                                                                    | 0                                                                    | Ignore these bits                                                                                                                                                                                                                        |
| 10                                                                   | -                                                                    | 0                                                                    | Ignore these bits                                                                                                                                                                                                                        |
| 9                                                                    | t150                                                                 | 150°C comparator                                                     | 1: Temperature threshold is exceeded, driver is off                                                                                                                                                                                      |
| 8                                                                    | t120                                                                 | 120°C comparator                                                     | 1: Temperature prewarning threshold is exceeded                                                                                                                                                                                          |
| 7                                                                    | lib                                                                  | load indicator phase B                                               | 1: Current for motor cannot be reached. 0: Respective motor goes into current / torque limit Hint: This is just an informative flag. The driver takes no action upon it. False detection may occur in fast motion                        |
| 6                                                                    | lia                                                                  | load indicator phase A                                               | 1: Current for motor cannot be reached. 0: Respective motor goes into current / torque limit Hint: This is just an informative flag. The driver takes no action upon it. False detection may occur in fast motion                        |
| 5                                                                    | s 2vsb                                                               | low side short indicator phase B                                     | and standstill. Check during slow motion, only. 1: Short on low-side MOSFET detected on bridge A or B. The driver becomes disabled. The flags stay active, until the driver is disabled by software ( enabledrv =0) or by the ENN input. |
| 4                                                                    | s 2vsa                                                               | low side short indicator phase A                                     | and standstill. Check during slow motion, only. 1: Short on low-side MOSFET detected on bridge A or B. The driver becomes disabled. The flags stay active, until the driver is disabled by software ( enabledrv =0) or by the ENN input. |
| 3                                                                    | s 2gb                                                                | short to ground indicator phase B                                    | 1: Short to GND detected on bridge A or B. The driver becomes disabled. The flags stay active, until the driver is disabled by software ( enabledrv =0) or by the ENN input.                                                             |
| 2                                                                    | s 2ga                                                                | short to ground indicator phase A                                    | 1: Short to GND detected on bridge A or B. The driver becomes disabled. The flags stay active, until the driver is disabled by software ( enabledrv =0) or by the ENN input.                                                             |
| 1                                                                    | ot                                                                   | overtemperature flag                                                 | 1: The overtemperature limit has been reached. Drivers become disabled until otpw is also cleared due to cooling down of the IC. The overtemperature flag is common for both bridges.                                                    |
| 0                                                                    | otpw                                                                 | overtemperature pre- warning flag                                    | 1: The overtemperature pre-warning threshold is exceeded. The overtemperature pre-warning flag is common for both bridges.                                                                                                               |

## 6 Chopper Options

<!-- image -->

In order to match the motor voltage or current to a certain level, the effective PWM voltage becomes scaled depending on the settings IRUN and PWM\_A respectively PWM\_B .  Current limit takes over, in case  the  motor  current  exceeds  the  limit  as  programmed  by IRUN .  This  way,  torque  is  limited  as desired,  as  well  as  current  draw  from  the  battery.  Reaching  the  current  limit  can  be  used  as informative event: check lia resp. lib flags.

The  Chopper  PWM  frequency  can  be  chosen  in  four  steps  to  adapt  the  chopper  frequency  to  the motor inductance. It balances low current ripple vs.  increased dynamic power dissipation at higher frequency.

Table 6.1 Choice of PWM frequency -green / light green: recommended

| CHOICE OF PWM FREQUENCY   | CHOICE OF PWM FREQUENCY          | CHOICE OF PWM FREQUENCY                   | CHOICE OF PWM FREQUENCY         | CHOICE OF PWM FREQUENCY         |
|---------------------------|----------------------------------|-------------------------------------------|---------------------------------|---------------------------------|
| Clock frequency f CLK     | PWM_FREQ=%00 f PWM =2/1024 f CLK | PWM_FREQ=%01 f PWM =2/683 f CLK (default) | PWM_FREQ=%10 f PWM =2/512 f CLK | PWM_FREQ=%11 f PWM =2/410 f CLK |
| 12MHz (typ. value)        | 23.4kHz                          | 35.1kHz                                   | 46.9kHz                         | 58.5kHz                         |

## 6.1 Load Indicator Flags

lia and lib indicate, if the original duty cycle is driven, or if current regulation limits the PWM duty cycle. When read back as active, the original duty cycle is driven. A cleared flag results from current limiting, e.g., when the motor is blocked, highly loaded, or still accelerating.

## 6.2 Freewheeling and Passive Braking

The chopper unit provides different  options  for  motor  standstill.  These  options  can  be  enabled  by setting CURRENT\_LIMIT . motorrun to  zero  and  choosing  the  desired  option  using  via FREEWHEEL setting. The PWM and current regulator become disabled in freewheeling and coil short modes. This way,  either  freewheeling,  or  passive  braking  can  be  realized.  Passive  braking  is  an  effective  eddy current  motor braking, which consumes a minimum of energy, because no active current is driven into the coils.

| PARAMETERS RELATED TO CHOPPER   | PARAMETERS RELATED TO CHOPPER                                                                                                                                                                                                           | PARAMETERS RELATED TO CHOPPER   | PARAMETERS RELATED TO CHOPPER   |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|---------------------------------|
| Parameter                       | Description                                                                                                                                                                                                                             | Setting                         | Comment                         |
| PWM_FREQ                        | PWM frequency selection. Use the lowest setting giving good results. The frequency measured at each of the chopper outputs is half of the effective chopper frequency f PWM .                                                           | 0                               | f PWM =2/1024 f CLK             |
| PWM_FREQ                        | PWM frequency selection. Use the lowest setting giving good results. The frequency measured at each of the chopper outputs is half of the effective chopper frequency f PWM .                                                           | 1                               | f PWM =2/683 f CLK              |
| PWM_FREQ                        | PWM frequency selection. Use the lowest setting giving good results. The frequency measured at each of the chopper outputs is half of the effective chopper frequency f PWM .                                                           | 2                               | f PWM =2/512 f CLK              |
| PWM_FREQ                        | PWM frequency selection. Use the lowest setting giving good results. The frequency measured at each of the chopper outputs is half of the effective chopper frequency f PWM .                                                           | 3                               | f PWM =2/410 f CLK              |
| FREEWHEEL                       | Stand still option for both motors, when motorrun flag is cleared ( motorrun =0). The freewheeling option makes the motor easy movable, while coil short options realize a passive braking.                                             | 0                               | Normal operation                |
| FREEWHEEL                       | Stand still option for both motors, when motorrun flag is cleared ( motorrun =0). The freewheeling option makes the motor easy movable, while coil short options realize a passive braking.                                             | 1                               | Freewheeling                    |
| FREEWHEEL                       | Stand still option for both motors, when motorrun flag is cleared ( motorrun =0). The freewheeling option makes the motor easy movable, while coil short options realize a passive braking.                                             | 2                               | Coil short via LS drivers       |
| FREEWHEEL                       | Stand still option for both motors, when motorrun flag is cleared ( motorrun =0). The freewheeling option makes the motor easy movable, while coil short options realize a passive braking.                                             | 3                               | Coil short cia HS drivers       |
| enabledrv                       | General enable for the motor driver                                                                                                                                                                                                     | 0                               | Driver off, all outputs hi-Z    |
| enabledrv                       | General enable for the motor driver                                                                                                                                                                                                     | 1                               | Driver enabled                  |
| TBL                             | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. Choose a setting of 1 or 2 for typical applications. For higher capacitive loads, 3 may be required. | 0                               | 16 t CLK                        |
| TBL                             | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. Choose a setting of 1 or 2 for typical applications. For higher capacitive loads, 3 may be required. | 1                               | 24 t CLK                        |
| TBL                             | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. Choose a setting of 1 or 2 for typical applications. For higher capacitive loads, 3 may be required. | 2                               | 32 t CLK                        |
| TBL                             | Comparator blank time . This time needs to safely cover the switching event and the duration of the ringing on the sense resistor. Choose a setting of 1 or 2 for typical applications. For higher capacitive loads, 3 may be required. | 3                               | 40 t CLK                        |

## 7 Selecting Sense Resistors

Set the desired maximum motor current by selecting an appropriate value for the sense resistor. The following  table  shows  the  RMS  current  values  which  can  be  reached  using  standard  resistors  and motor  types  fitting  without  additional  motor  current  scaling.  Additional 15mΩ  PCB  resistance is included in the calculation.

| CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   |
|------------------------------------------------------|------------------------------------------------------|
| R SENSE [Ω]                                          | current limit [A] IRUN =31                           |
| 1.50                                                 | 0.21                                                 |
| 1.20                                                 | 0.26                                                 |
| 1.00                                                 | 0.31                                                 |
| 0.82                                                 | 0.38                                                 |
| 0.75                                                 | 0.41                                                 |
| 0.68                                                 | 0.45                                                 |
| 0.50                                                 | 0.60                                                 |
| 470m                                                 | 0.63                                                 |
| 390m                                                 | 0.75                                                 |
| 330m                                                 | 0.87                                                 |
| 270m                                                 | 1.03                                                 |
| 220m                                                 | 1.23                                                 |
| 180m                                                 | 1.44                                                 |
| 150m                                                 | 1.67                                                 |
| 120m                                                 | 1.97                                                 |
| 100m                                                 | 2.24 (single motor, parallel operation)              |
| 82m                                                  | 2.56 (single motor, parallel operation)              |

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. Due to chopper operation the sense resistors see pulsed current from the MOSFET bridges. Therefore, a  low-inductance  type  such  as  film  or  composition  resistors  is  required  to  prevent  voltage  spikes causing ringing on the sense voltage inputs leading to unstable measurement results. Also, a lowinductance, low-resistance PCB layout is essential. Any common GND path for the two sense resistors must  be  avoided,  because  this  would  lead  to  coupling  between  the  two  current  sense  signals.  A massive ground plane is best. Please also refer to layout considerations in chapter 14.

The  sense  resistor  needs  to  be  able  to  conduct  the  peak  motor  coil  current  in  motor  standstill conditions  unless  standby  power  is  reduced.  Under  normal  conditions,  the  sense  resistor  conducts less than the coil RMS current, because no current flows through the sense resistor during the slow decay phases of the chopper. A 0.25W type is sufficient for most applications up to 800mA RMS.

## Attention

Be sure to use a symmetrical sense resistor layout  and  short  and  straight  sense  resistor  traces  of identical length. Well matching sense resistors ensure best performance.

A compact layout with massive ground plane is best to avoid parasitic resistance effects.

## 7.1 Motor Torque Limit

Select  the  sense  resistors  to  deliver  enough  current  for  the  motor  at  full  current  scale.  This  is  the default current scaling ( IRUN = 31).

IRUN allows for scaling of the limit from 1/32 to 32/32:

MOTOR CURRENT CALCULATION WITH UART CONTROL OPTION:

<!-- formula-not-decoded -->

VFS is the full-scale voltage (please refer to electrical characteristics, VSRT). Typical value is 325mV.

| PARAMETERS FOR MOTOR CURRENT CONTROL   | PARAMETERS FOR MOTOR CURRENT CONTROL       | PARAMETERS FOR MOTOR CURRENT CONTROL   | PARAMETERS FOR MOTOR CURRENT CONTROL   |
|----------------------------------------|--------------------------------------------|----------------------------------------|----------------------------------------|
| Parameter                              | Description                                | Setting                                | Comment                                |
| IRUN                                   | Current limit scale when motor is running. | 0 … 31                                 | scaling factor 1/32, 2/32, … 32/32     |

## 8 Driver Diagnostic Flags

The TMC7300 drivers supply a complete set of diagnostic and protection capabilities, like short to GND protection, short to VS protection and undervoltage detection. A detection of current limit condition allows testing if a motor coil connection is interrupted. See the DRV\_STATUS table for details.

## 8.1 Temperature Measurement

The  driver  integrates  a  two-level  temperature  sensor  (pre-warning  and  thermal  shutdown)  for diagnostics and for protection of the IC against excess heat. Heat is mainly generated by the motor driver stages. Most critical situations, where the driver MOSFETs could be overheated, are avoided by the short to GND protection. For many applications, the overtemperature pre-warning will indicate an abnormal operation situation and can be used to initiate user warning or power reduction measures like motor current reduction. The thermal shutdown is just an emergency measure and temperature rising to the shutdown level should be prevented by design.

| TEMPERATURE THRESHOLDS   | TEMPERATURE THRESHOLDS                                                                                                                                                                                                                                                                                                       |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Temperature Level        | Comment                                                                                                                                                                                                                                                                                                                      |
| 150°C                    | This value is relatively safe to switch off the driver stage before the IC can be destroyed by overheating. On a large PCB, the power MOSFETs reach roughly 150°C peak temperature when the temperature detector is triggered with this setting.                                                                             |
| 120°C                    | Temperature level for pre-warning. In most applications, reaching this level is a sign for abnormal heat accumulation. The overtemperature pre-warning threshold of 120°C gives lots of headroom to react to high driver temperature, e.g., by reducing motor current, or increasing waiting-time in between of two motions. |

## Attention

Overtemperature protection cannot in all cases avoid thermal destruction of the IC. In case the rated output  current  is  exceed,  excess  heat  generation  can  quickly  heat  up  the  driver  before  the overtemperature sensor can react. This is due to a delay in heat conduction over the IC die.

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the pre-warning level ( otpw ) to avoid continuous heating to the shutdown level.

## 8.2 Short Protection

The TMC7300 power stages are protected against a short circuit condition by an additional measurement of the current flowing through each of the power stage MOSFETs. This is important, as most short  circuit  conditions  result  from  a  motor  cable  insulation  defect,  e.g.,  when  touching  the conducting parts connected to the system ground. The short detection is protected against spurious triggering, e.g., by ESD discharges, by retrying three times before switching off the motor.

Once a short condition is safely detected, both driver bridges become switched off, and the s2ga or s2gb flag,  respectively s2vsa or s2vsb becomes set. To restart the motor, disable and re-enable the driver.  Note,  that  short  protection  cannot protect the system and the power stages for all possible short events, as a short event is rather undefined, and a complex network of external components may be involved. Therefore, short circuits should basically be avoided.

## 8.3 Diagnostic Output

The  diagnostic  output  DIAG  provides  error  status  information,  especially  when  using  the  driver  in stand-alone  mode.  An  active  DIAG  output  shows  that  the  driver  cannot  work  normally.  Figure  8.1 shows the signals controlling the output.

Figure 8.1 DIAG output

<!-- image -->

## 9 Quick Configuration Guide

<!-- image -->

This  guide  is  meant  as  a  practical  tool  to  come  to  a  first  configuration.  Do  a  minimum  set  of measurements and decisions for tuning the driver to fit the application.

Figure 9.1 Configuration and Motor operation

<!-- image -->

Hint

Use the evaluation board to explore settings and to generate the required configuration datagrams.

## 10 External Reset

The chip is loaded with default values during power on via its internal power-on reset. In order to reset the chip to power on defaults, any of the supply voltages monitored by internal reset circuitry (VS or VCC\_IO) must be cycled. It is easiest and safest to cycle VCC\_IO to completely reset the chip. Also, current consumed from VCC\_IO is low and therefore it has simple driving requirements. Due to the input protection diodes not allowing the digital inputs to rise above VCC\_IO level, all inputs must be driven low during this reset operation. When this is not possible, an input protection resistor may be used to limit current flowing into the related inputs.

## 11 Clock Oscillator

The clock is the timing  reference for the  chopper frequency and the blank time. The on-chip clock oscillator  is  not  calibrated,  but  relatively  temperature-stable.  The  internal  clock  frequency  is  roughly 12MHz.

## 12 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                                                               | Symbol   | Min   | Max        | Unit   |
|---------------------------------------------------------------------------------------------------------|----------|-------|------------|--------|
| Supply voltage operating with inductive load *)                                                         | V VS     | -0.5  | 11.2       | V      |
| Supply and bridge voltage max. *)                                                                       | V VMAX   |       | 13         | V      |
| I/O supply voltage                                                                                      | V VIO    | -0.5  | 5.5        | V      |
| digital supply voltage                                                                                  | V 1V8OUT | -0.5  | 1.95       | V      |
| Logic input voltage                                                                                     | V I      | -0.5  | V VIO +0.5 | V      |
| MODE input voltage (Do not exceed both, VCC_IO and 5VOUT by more than 10%, as this enables a test mode) | V VREF   | -0.5  | 6          | V      |
| Maximum current to / from digital pins and analog low voltage I/Os                                      | I IO     |       | +/-10      | mA     |
| 1.8V regulator output current (internal plus external load)                                             | I 5VOUT  |       | 20         | mA     |
| Maximum mean or DC current per bridge MOS at T J <110°C                                                 | I OxDC   |       | 1.0        | A      |
| Power bridge repetitive output current                                                                  | I Ox     |       | 2.0        | A      |
| Maximum VS current (both bridges operating)                                                             | I VS     |       | 2.8        | A      |
| Maximum BRx current                                                                                     | I Ox     |       | 2.0        | A      |
| Junction temperature                                                                                    | T J      | -50   | 150        | °C     |
| Storage temperature                                                                                     | T STG    | -55   | 150        | °C     |
| ESD-Protection for handling (Human body model, HBM)                                                     | V ESD    |       | 2          | kV     |

## 13 Electrical Characteristics

## 13.1 Operational Range

| Parameter                                                                                 | Symbol   | Conditions             | Min   | Max   | Unit   |
|-------------------------------------------------------------------------------------------|----------|------------------------|-------|-------|--------|
| Junction temperature                                                                      | T J      |                        | -40   | 125   | °C     |
| Supply voltage                                                                            | V VS     |                        | 2     | 11    | V      |
| Supply & IO voltage battery empty limit                                                   | V VS     |                        | 1.8   |       | V      |
| I/O supply voltage                                                                        | V VIO    |                        | 2     | 5.25  | V      |
| Mean current per full bridge output for continuous operation (value for design guideline) | I RMS    | V VS <2.1V             |       | 0.6   | A      |
| Mean current per full bridge output for continuous operation (value for design guideline) | I RMS    | V VS ≥2.1V             |       | 0.8   | A      |
| Mean current per full bridge output for continuous operation (value for design guideline) | I RMS    | V VS ≥2.2V             |       | 1.0   | A      |
| RMS motor current per fullbridge, duty cycle limited operation                            | I RMS    | V VS ≥2.5V T J < 110°C |       | 1.2   | A      |
| Peak output current per fullbridge output                                                 | I Ox     | T J < 110°C            |       | 1.7   | A      |
| Sum of output current (VS supply pin current)                                             | I VS     |                        |       | 2.4   | A      |

## 13.2 DC and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| Power supply current                          | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                                     | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| Total supply current, driver disabled         | I VS                                          | disable via UART                              |                                               | 4                                             | 8                                             | mA                                            |
|                                               |                                               | disable via EN=0                              |                                               | 1.5                                           | 3                                             | mA                                            |
| Total supply current, operating, I VS         | I VS                                          | default chopper, no load                      |                                               | 7                                             | 12                                            | mA                                            |
| IO supply current operating                   | I VIO                                         | no load on outputs, inputs at V IO or GND     |                                               | 60                                            | 200                                           | µA                                            |
| Total supply current, low-power standby, I VS | I VS                                          | V VIO < 0.2V                                  |                                               | 0.03                                          | 1                                             | µA                                            |

| Motor driver section                         | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   |
|----------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|
| Parameter                                    | Symbol                                                    | Conditions                                                | Min                                                       | Typ                                                       | Max                                                       | Unit                                                      |
| RDS ON lowside MOSFET                        | R ONL                                                     | measure at 100mA, 25°C, V VS ≥ 3.2V                       |                                                           | 0.17                                                      | 0.25                                                      | Ω                                                         |
| RDS ON highside MOSFET                       | R ONH                                                     | measure at 100mA, 25°C, V VS ≥ 3.2V                       |                                                           | 0.17                                                      | 0.25                                                      | Ω                                                         |
| slope, rising                                | t SLPRISE                                                 | value for reference                                       |                                                           | 20                                                        |                                                           | ns                                                        |
| slope, falling                               | t SLPFALL                                                 | value for reference                                       |                                                           | 7                                                         |                                                           | ns                                                        |
| Current sourcing, driver off                 | I OIDLE                                                   | O XX pulled to GND                                        | 6                                                         | 13                                                        | 30                                                        | µA                                                        |
| Recommended / max. VS power- up slope to >5V | VS RAMP                                                   | Hint: Normally satisfied due to ext. capacitor on VS.     |                                                           | <0.33 rcd.                                                | 1                                                         | V/µS                                                      |

| Charge pump                       | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-----------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                         | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Charge pump output voltage (mean) | V VCP -V VS          | V VS ≥ 3.5V          | 4.2                  | 5.1                  | 5.7                  | V                    |

| Linear regulator   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   |
|--------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter          | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| Output voltage     | V 5VOUT                                       | I 1V8OUT = 0mA; T J =25°C                     | 1.65                                          | 1.8                                           | 1.95                                          | V                                             |

| Clock oscillator and input   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   |
|------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                    | Symbol                   | Conditions               | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency   | f CLKOSC                 | T J =-50°C               |                          | 11.7                     |                          | MHz                      |
|                              | f CLKOSC                 | T J = 25°C               | 9                        | 12.0                     | 15                       | MHz                      |
|                              | f CLKOSC                 | T J =150°C               |                          | 12.1                     |                          | MHz                      |

| Detector levels                                                         | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   |
|-------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                                                               | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| V VS undervoltage threshold for                                         | V UV_VS                                       | V VS rising                                   |                                               | 1.8                                           | 2.1                                           | V                                             |
| RESET                                                                   | V UV_VS                                       | V VS falling                                  | 1.5                                           | 1.7                                           | 1.85                                          | V                                             |
| V VIO undervoltage threshold for RESET                                  | V UV_VIO                                      | V VIO rising                                  |                                               | 1.8                                           | 1.9                                           | V                                             |
| V VIO undervoltage threshold for RESET                                  | V UV_VIO                                      | V VIO falling                                 | 1.5                                           | 1.7                                           |                                               |                                               |
| V VIO low power standby input voltage                                   | V UV_VIOHYST                                  |                                               |                                               |                                               | 0.4                                           | V                                             |
| V VIO threshold for enable of 1.8V regulator                            | V VIO                                         | V VIO rising                                  | 0.6                                           | 1                                             | 1.4                                           | V                                             |
| Worst case power-up delay time                                          |                                               | V VS = 2.0V, V VIO =2.0V                      |                                               |                                               | 500                                           | µs                                            |
| Short to GND detector threshold (V VS - V Ox )                          | V OS2G                                        | V VS ≥ 3.5V required for operation            | 0.5                                           | 0.8                                           |                                               | V                                             |
| Short to VS detector threshold (V Ox )                                  | V OS2G                                        |                                               | 1.0                                           | 1.2                                           | 1.6                                           | V                                             |
| Short detector delay (high side / low side switch on to short detected) | t S2G                                         |                                               |                                               | 1                                             |                                               | µs                                            |
| Overtemperature prewarning 120°C                                        | t OTPW                                        | Temperature rising                            | 100                                           | 120                                           | 140                                           | °C                                            |
| Overtemperature shutdown 150°C                                          | t OT150                                       | Temperature rising                            | 135                                           | 150                                           | 170                                           | °C                                            |
| 3.5V Detector Threshold U3V5                                            | V VS3V5                                       | VS falling                                    | 3.15                                          | 3.5                                           |                                               | V                                             |
| 3.5V Detector Threshold U3V5                                            | V VS3V5                                       | VS rising                                     |                                               | 3.7                                           | 4.1                                           | V                                             |
| COMPA1A2, COMPB1B2 Offset Voltage                                       | V CABOFS                                      | Lowside MOSFETs ON                            |                                               |                                               | +-10                                          | mV                                            |

| Sense resistor voltage levels                                                                 | DC-Characteristics   | DC-Characteristics                  | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-----------------------------------------------------------------------------------------------|----------------------|-------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                                                     | Symbol               | Conditions                          | Min                  | Typ                  | Max                  | Unit                 |
| Sense input peak threshold voltage (low sensitivity)                                          | V SRT                | csactual =31 CUR_A/B =248 I BRxy =0 |                      | 325                  |                      | mV                   |
| Sense input tolerance / motor current full-scale tolerance                                    | I COIL               |                                     | -5                   |                      | +5                   | %                    |
| Internal resistance from pin BRxy to internal sense comparator (additional to sense resistor) | R BRxy               |                                     |                      | 30                   |                      | mΩ                   |

| Digital pins                     | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   |
|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Parameter                        | Symbol                           | Conditions                       | Min                              | Typ                              | Max                              | Unit                             |
| Input voltage low level          | V INLO                           |                                  | -0.3                             |                                  | 0.3 V VIO                        | V                                |
| Input voltage high level         | V INHI                           |                                  | 0.7 V VIO                        |                                  | V VIO +0.3                       | V                                |
| Input Schmitt trigger hysteresis | V INHYST                         |                                  |                                  | 0.12 V VIO                       |                                  | V                                |
| Output voltage low level         | V OUTLO                          | I OUTLO = 2mA                    |                                  |                                  | 0.2                              | V                                |
| Output voltage high level        | V OUTHI                          | I OUTHI = -2mA                   | V VIO -0.2                       |                                  |                                  | V                                |
| Input leakage current            | I ILEAK                          |                                  | -1                               |                                  | 1                                | µA                               |
| Digital pin capacitance          | C                                |                                  |                                  | 3.5                              |                                  | pF                               |

## 13.3 Thermal Characteristics

The  following  table  shall  give  an  idea  on  the  thermal  resistance  of  the  package.  The  thermal resistance  for  a  four-layer  board  will  provide  a  good  idea  on  a  typical  application.  Actual  thermal characteristics  will  depend  on  the  PCB  layout,  PCB  type  and  PCB  size.  The  thermal  resistance  will benefit from thicker CU (inner) layers for spreading heat horizontally within the PCB. Also, air flow will reduce thermal resistance.

A thermal resistance of 40K/W for a typical board means, that the package is capable of continuously dissipating 1W at an ambient temperature of 85°C with the die temperature staying below/at 125°C. Note, that a thermally optimized layout is required.

Table 13.1 Thermal characteristics

| Parameter                                                    | Symbol   | Conditions                                                                                                                                |   Typ | Unit   |
|--------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Typical power dissipation                                    | P D      | 1A RMS in two motors (or single motor with 2A RMS in parallel circuit), 35kHz chopper, 11V, 60°C peak surface of package                  |   1   | W      |
| Typical power dissipation                                    | P D      | 0.7A RMS in two motors (or single motor with 1.4A RMS in parallel circuit), sinewave, 35kHz chopper, 11V, 45°C peak surface of package    |   0.5 | W      |
| Thermal resistance junction to ambient on a multilayer board | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 35µm CU, 70mm x 133mm, d=1.5mm) |  40   | K/W    |
| Thermal resistance junction to case                          | R TJC    | Junction to heat slug of package                                                                                                          |   7   | K/W    |

## Note

A spreadsheet for calculating power dissipation is available on www.trinamic.com.

## 14 Layout Considerations

## 14.1 Exposed Die Pad

The TMC7300 uses its die attach pad to dissipate heat from the drivers and the linear regulator to the board.  For  best  electrical  and  thermal  performance,  use  a  reasonable  amount  of  solid,  thermally conducting vias between the die attach pad and the ground plane. The printed circuit board should have a solid ground plane spreading heat into the board and providing for a stable GND reference.

## 14.2 Wiring GND

All signals of the TMC7300 are referenced to their respective GND. Directly connect all GND pins under the device to a common ground area (GND and die attach pad). The GND plane right below the die attach pad should be treated as a virtual star point. For thermal reasons, the PCB top layer shall be connected to a large PCB GND plane spreading heat within the PCB.

## Attention

Especially the sense resistors are susceptible to GND differences and GND ripple voltage. No current other than the sense resistor current should flow on their connections to GND and to the TMC7300. Optimally place them close to the IC, with one or more vias to the GND plane for each sense resistor. The two sense resistors should not share a common ground connection trace or vias, as also PCB traces have a certain resistance.

## 14.3 Supply Filtering

The  1.8VOUT  output  voltage  ceramic  filtering  capacitor  (100 n F  recommended)  should  be  placed  as close as possible to the 1.8VOUT pin, with its GND return going directly to the die pad or the nearest GND pin. This ground connection shall not be shared with other loads or additional vias to the GND plane. Use as short and as thick connections as possible.

The  motor  supply  pins  VS  should  be  decoupled  with  a  ceramic,  or  a  ceramic  plus  an  electrolytic capacitor (47 μF or larger is recom mended, depending on the motor coil current). Place the capacitors close to the device.

Take into account that the switching motor coil outputs have a high dV/dt. Thus, capacitive stray into high resistive signals can occur if the motor traces are near other traces over longer distances.

## 14.4 Layout Example

## Schematic

<!-- image -->

## Placement (Excerpt)

<!-- image -->

GND

## Top Layout (Excerpt, showing die pad vias)

<!-- image -->

The  complete  schematics  and  layout  data  for  all  evaluation  boards  are  available  on  the  TRINAMIC website.

## 15 Package Mechanical Data

## 15.1 Dimensional Drawings QFN20

Attention: Drawings not to scale.

<!-- image -->

Figure 15.1 Dimensional drawings QFN20

<!-- image -->

| Parameter [mm]         | Ref   | Min   | Nom   | Max   |
|------------------------|-------|-------|-------|-------|
| total thickness        | A     | 0.8   | 0.85  | 0.9   |
| stand off              | A1    | 0     | 0.035 | 0.05  |
| mold thickness         | A2    |       | 0.65  | 0.67  |
| lead frame thickness   | A3    |       | 0.203 |       |
| Lead width             | b     | 0.15  | 0.2   | 0.25  |
| body size X            | D     |       | 3.0   |       |
| body size Y            | E     |       | 3.0   |       |
| lead pitch             | e     |       | 0.4   |       |
| exposed die pad size X | J     | 1.6   | 1.7   | 1.8   |
| exposed die pad size Y | K     | 1.6   | 1.7   | 1.8   |
| lead length            | L     | 0.35  | 0.4   | 0.45  |
| package edge tolerance | aaa   |       |       | 0.1   |
| mold flatness          | bbb   |       |       | 0.1   |
| coplanarity            | ccc   |       |       | 0.08  |
| lead offset            | ddd   |       |       | 0.1   |
| exposed pad offset     | eee   |       |       | 0.1   |

## 15.2 Package Codes

| Type       | Package      | Temperature range   | Code & marking   |
|------------|--------------|---------------------|------------------|
| TMC7300-LA | QFN20 (RoHS) | -40°C ... +125°C    | (TMC logo) 7300  |

## 16 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 17 Table of Figures

| FIGURE 1.1 TMC7300 BASIC APPLICATION BLOCK DIAGRAM FOR TWO DC MOTORS ..................................................................4                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FIGURE 1.2 UART CONTROLLED SINGLE OR DUAL DC MOTOR DRIVER ........................................................................................5                               |
| FIGURE 1.3 PERIPHERAL POWER DRIVER ....................................................................................................................................5          |
| FIGURE 2.1 TMC7300 PINNING TOP VIEW UART MOTOR DRIVER - QFN20, 3X3MM², 0.4MM PITCH ....................................7                                                          |
| FIGURE 2.2 TMC7300 PINNING TOP VIEW HALFBRIDGE DRIVER - QFN20, 3X3MM², 0.4MM PITCH .......................................8                                                       |
| FIGURE 3.1 OPERATION OF TWO DC-MOTORS FOR 1.8V TO 11V SUPPLY ................................................................................10                                   |
| FIGURE 3.2 OPERATION OF A SINGLE DC-MOTOR (DOUBLE CURRENT ) ......................................................................................11                              |
| FIGURE 3.3 HALFBRIDGE DRIVER MODE ...................................................................................................................................12           |
| FIGURE 3.4 RDSON VARIATION OVER SUPPLY VOLTAGE ...........................................................................................................13                      |
| FIGURE 3.5 SWITCHING TO STANDBY AND BACK ON ................................................................................................................14                    |
| FIGURE 3.6 ADDITIONAL CIRCUIT FOR I/O VOLTAGE <1.80V ...................................................................................................14                        |
| FIGURE 4.1 ATTACHING THE TMC7300 TO A MICROCONTROLLER UART ..................................................................................17                                   |
| FIGURE 4.2 ADDRESSING MULTIPLE TMC7300 VIA SINGLE WIRE INTERFACE USING ANALOG SWITCHES ..................................18                                                       |
| FIGURE 8.1 DIAG OUTPUT ........................................................................................................................................................31 |
| FIGURE 9.1 CONFIGURATION AND MOTOR OPERATION ..............................................................................................................32                     |
| FIGURE 15.1 DIMENSIONAL DRAWINGS QFN20 .......................................................................................................................40                  |

## 18 Revision History

| Version   | Date        | Author BD= Bernhard Dwersteg   | Description                                                                                                                                          |
|-----------|-------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| V0.9      | 2019-Jun-24 | BD                             | Edited electrical data based on prototype measurements, first version of datasheet                                                                   |
| V0.91     | 2019-Jul-18 | BD                             | Added RDSon measurement of power stage                                                                                                               |
| V1.00     | 2019-Aug-02 | BD                             | Minor changes                                                                                                                                        |
| V1.01     | 2019-Nov-06 | BD                             | Minor wording, added chapter on sustainability, added chapter on low I/O voltage operation                                                           |
| V1.02     | 2019-Nov-10 | BD                             | Minor wording IRUN limit                                                                                                                             |
| V1.03     | 2020-May-19 | BD                             | Updated Logo                                                                                                                                         |
| V1.04     | 2020-Jun-02 | BD                             | Complemented operational range                                                                                                                       |
| V1.05     | 2020-Jul-03 | BD                             | Added truth table for half bridge mode                                                                                                               |
| V1.06     | 2021-Apr-20 | BD                             | Use SENDDELAY>1 for multiple slaves, some minor fixes Corrected & improved truth table for half bridge mode                                          |
| V1.07     | 2022-Jan-12 | BD                             | p1: Updated company logo. Adapted order codes. Some minor wording.                                                                                   |
| V1.08     | 2022-Apr-14 | BD                             | Improved chapter on operation at 1.8V I/O voltage; Increased ESD rating. ESD has now been tested for 2kV; Added VVIO power up threshold; Minor fixes |

Table 18.1 Document Revisions

## 19 References

[TMC7300-EVAL]

TMC7300 Evaluation board: Manuals, software, and PCB data available on www.trinamic.com