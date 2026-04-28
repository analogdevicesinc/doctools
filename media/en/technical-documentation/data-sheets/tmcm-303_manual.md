<!-- lastmod 2025-09-05 -->
## TMCM-303

## 3 - Axis Stepper Motor Motion Control Module 1.1A /34V

<!-- image -->

## Manual

Version: 1.16

June 24 th , 2009

<!-- image -->

Trinamic Motion Control GmbH &amp; Co. KG Sternstraße 67 D - 20357 Hamburg, Germany http://www.trinamic.com

## Table of Contents

| 1     | Features...........................................................................................................................................................................                                                                                                                                         | 4                                                                                                                                                                                                                                                                                                                           |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2     | Life support policy....................................................................................................................................................... 5                                                                                                                                                | Life support policy....................................................................................................................................................... 5                                                                                                                                                |
| 3     | Electrical and Mechanical Interfacing..................................................................................................................... 6                                                                                                                                                                | Electrical and Mechanical Interfacing..................................................................................................................... 6                                                                                                                                                                |
| 3.1   | Dimensions........................................................................................................................................................... 6                                                                                                                                                     | Dimensions........................................................................................................................................................... 6                                                                                                                                                     |
| 3.2   | Connecting the Module..................................................................................................................................... 7                                                                                                                                                                | Connecting the Module..................................................................................................................................... 7                                                                                                                                                                |
|       | 3.3 Power supply requirements.............................................................................................................................                                                                                                                                                                  | 3.3 Power supply requirements.............................................................................................................................                                                                                                                                                                  |
| 4     | Operational Ratings...................................................................................................................................................10                                                                                                                                                    | Operational Ratings...................................................................................................................................................10                                                                                                                                                    |
| 5     | Functional Description..............................................................................................................................................10                                                                                                                                                      | Functional Description..............................................................................................................................................10                                                                                                                                                      |
| 5.1   | System Architecture .........................................................................................................................................11                                                                                                                                                             | System Architecture .........................................................................................................................................11                                                                                                                                                             |
| 5.1.1 | Microcontroller ........................................................................................................................................11                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                             |
| 5.1.2 | TMCL EEPROM...........................................................................................................................................11                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                             |
| 5.1.3 | TMC428 Motion Controller ...................................................................................................................11                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                             |
|       | 5.1.4 Stepper Motor Drivers...........................................................................................................................11                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                             |
| 5.2   | Power Supply.....................................................................................................................................................11                                                                                                                                                         | Power Supply.....................................................................................................................................................11                                                                                                                                                         |
| 5.3   | Motor Connection .............................................................................................................................................12                                                                                                                                                            | Motor Connection .............................................................................................................................................12                                                                                                                                                            |
| 5.4   | Host Communication .......................................................................................................................................13                                                                                                                                                                | Host Communication .......................................................................................................................................13                                                                                                                                                                |
|       | 5.4.1 CAN                                                                                                                                                                                                                                                                                                                   | 5.4.1 CAN                                                                                                                                                                                                                                                                                                                   |
| 5.4.2 | RS-232 ........................................................................................................................................................13                                                                                                                                                           | 2.0b....................................................................................................................................................13                                                                                                                                                                  |
| 5.4.3 | RS-485                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                             |
|       | ........................................................................................................................................................14                                                                                                                                                                  | ........................................................................................................................................................14                                                                                                                                                                  |
|       | 5.5.1                                                                                                                                                                                                                                                                                                                       | 5.5.1                                                                                                                                                                                                                                                                                                                       |
| 5.5.2 |                                                                                                                                                                                                                                                                                                                             | StallGuard adjusting tool.....................................................................................................................15                                                                                                                                                                            |
|       | StallGuard profiler ..................................................................................................................................16                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                             |
| 5.6   | Reference switches...........................................................................................................................................17                                                                                                                                                             | Reference switches...........................................................................................................................................17                                                                                                                                                             |
| 5.6.1 | Left and right limit switches ..............................................................................................................17                                                                                                                                                                              | Left and right limit switches ..............................................................................................................17                                                                                                                                                                              |
| 5.6.2 | Triple Switch Configuration.................................................................................................................17                                                                                                                                                                              | Triple Switch Configuration.................................................................................................................17                                                                                                                                                                              |
| 5.6.3 | One Limit Switch for circular systems .............................................................................................18                                                                                                                                                                                       | One Limit Switch for circular systems .............................................................................................18                                                                                                                                                                                       |
| 5.7   | Serial Peripheral Interface (SPI) ...................................................................................................................18                                                                                                                                                                     | Serial Peripheral Interface (SPI) ...................................................................................................................18                                                                                                                                                                     |
| 5.8   | Port Expansion...................................................................................................................................................18                                                                                                                                                         | Port Expansion...................................................................................................................................................18                                                                                                                                                         |
| 5.9   | Miscellaneous Connections............................................................................................................................19                                                                                                                                                                     | Miscellaneous Connections............................................................................................................................19                                                                                                                                                                     |
|       | 5.10 Microstep Resolution .......................................................................................................................................19 Putting the TMCM-303 into Operation..................................................................................................................20 | 5.10 Microstep Resolution .......................................................................................................................................19 Putting the TMCM-303 into Operation..................................................................................................................20 |
| 7     | TMCM-303 Operational Description .......................................................................................................................21                                                                                                                                                                  | TMCM-303 Operational Description .......................................................................................................................21                                                                                                                                                                  |
| 8     | 7.1 Calculation: Velocity and Acceleration vs. Microstep- and Fullstep-Frequency...............................21 TMCL...............................................................................................................................................................................22                     | 7.1 Calculation: Velocity and Acceleration vs. Microstep- and Fullstep-Frequency...............................21 TMCL...............................................................................................................................................................................22                     |
| 9     | Revision History..........................................................................................................................................................23                                                                                                                                                | Revision History..........................................................................................................................................................23                                                                                                                                                |
| 9.1   | Documentation Revision.................................................................................................................................23                                                                                                                                                                   | Documentation Revision.................................................................................................................................23                                                                                                                                                                   |
| 9.2   | Firmware Revision............................................................................................................................................23                                                                                                                                                             | Firmware Revision............................................................................................................................................23                                                                                                                                                             |

## List of Figures

| Figure 3.1: Dimensions........................................................................................................................................................ 6   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 3.2: Pin order of the connector........................................................................................................................... 7                |
| Figure 3.3: Power supply requirements for TMCM-303.............................................................................................. 8                                 |
| Figure 3.4: Power supply requirements for TMC-Modules in a bus system........................................................ 9                                                    |
| Figure 5.1: Main parts of the TMCM-303.......................................................................................................................10                    |
| Figure 5.2: Connecting the Motors ................................................................................................................................12               |
| Figure 5.3: Connecting CAN .............................................................................................................................................13         |
| Figure 5.4: Connecting RS-232.........................................................................................................................................14           |
| Figure 5.5: Connecting the RS-485 interface ...............................................................................................................14                      |
| Figure 5.6: StallGuard adjusting tool ............................................................................................................................15               |
| Figure 5.7: The StallGuard Profiler .................................................................................................................................16            |
| Figure 5.8: Left and right limit switches......................................................................................................................17                  |
| Figure 5.9: Limit switch and reference switch ...........................................................................................................17                        |
| Figure 5.10: One reference switch .................................................................................................................................18              |
| List                                                                                                                                                                               |
| of Tables                                                                                                                                                                          |
| Table 1.1: Order codes......................................................................................................................................................... 4  |
| Table 3.1: Pinout 68-Pin Connector.................................................................................................................................. 7             |
| Table 4.1: Operational Ratings ........................................................................................................................................10          |
| Table 5.1: Pinning of Power supply ..............................................................................................................................11                |
| Table 5.2: Pinout for Motor Connections .....................................................................................................................12                    |
| Table 5.3: Pinout for CAN Connection ..........................................................................................................................13                  |
| Table 5.4: Pinout for RS-232 Connection......................................................................................................................13                    |
| Table 5.5: Pinout for RS-485 Connection......................................................................................................................14                    |
| Table 5.6: StallGuard parameter SAP 205.....................................................................................................................15                     |
| Table 5.7: Pinout reference switches ............................................................................................................................17                |
| Table 5.8: Pinout Serial Peripheral Interface ..............................................................................................................18                     |
| Table 5.9: Pinout port expansion ...................................................................................................................................18             |
| Table 5.10: Miscellaneous Connections ........................................................................................................................19                   |
| Table 5.11: Microstep resolution setting......................................................................................................................19                   |
| Table 7.1: TMC428 Velocity parameters ........................................................................................................................21                   |
| Table 9.1: Documentation Revisions .............................................................................................................................23                 |

## 1 Features

The  TMCM-303  is  a  compact  and  versatile  triple  axis  2-phase  stepper  motor  controller  and  driver module.  It  provides  a  complete  motion  control  solution  at  a  very  small  size  for  embedded applications. Using the integrated additional I/Os it even can do complete system control applications. The  board  can  be  connected  to  a  baseboard  or  customized  electronics  with  a  pin  connector.  The TMCM-303 comes with the PC based software development environment TMCL-IDE. Using predefined TMCL (Trinamic Motion Control Language) high level commands like 'move to position' or 'constant rotation' rapid and fast development of motion control applications is guaranteed. Host communication is possible via the serial UART interface (e.g. using a RS-232 or RS-485 level shifter) or via  CAN.  All  time  critical  operations,  e.g.  ramp  calculation  are  performed  onboard.  A  user  TMCL program  can  be  stored  in  the  on  board  EEPROM  for  stand-alone  operation.  The  firmware  of  the module can be updated via the serial interface. With the optional StallGuard TM feature it is possible to detect overload and stall of the motor.

## Applications

- Controller / driver board for control of up to 3 Axis
- Versatile possibilities of applications in stand alone or pc controlled mode

## Motor type

- Coil current from 300mA to 1.1A RMS (1.5A peak)
- 8V to 34V nominal supply voltage

## Highlights

- Automatic ramp generation in hardware
- StallGuard TM option for sensorless motor stall detection
- Full step frequencies up to 20kHz
- On the fly alteration of motion parameters (e.g. position, velocity, acceleration)
- Local reference move using sensorless StallGuard TM feature or reference switch
- Coil current adjustable by software
- Up to 16 times microstepping
- TRINAMIC driver technology: No heatsink required
- Many adjustment possibilities make this module the solution for a great field of demands

## Software

- Stand-alone operation using TMCL or remote controlled operation
- TMCL program storage: 16 KByte EEPROM (2048 TMCL commands)
- PC-based application development software TMCL-IDE included

## Other

- 68 pin connector carries all signals
- RoHS compliant latest from 1 July 2006
- Size: 80x50mm²

Table 1.1: Order codes

| Order code            | Description                         |
|-----------------------|-------------------------------------|
| TMCM-303/SG (-option) | 3-axis controller/driver 1.1 / 34V  |
| Related products      | BB-303, TMCM-EVAL                   |
| Option                |                                     |
| -H                    | horizontal pin connector (standard) |
| -V                    | vertical pin connector (on request) |

## 2 Life support policy

TRINAMIC  Motion  Control  GmbH  &amp;  Co.  KG  does  not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems  are equipment  intended  to support or sustain life, and whose failure to perform, when  properly  used  in  accordance  with  instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2006

Information given in this data sheet is believed to be accurate  and  reliable.  However  no  responsibility  is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result form its use.

Specifications subject to change without notice.

## 3 Electrical and Mechanical Interfacing

## 3.1 Dimensions

Figure 3.1: Dimensions

<!-- image -->

The size of the module (80x50mm) is the same as of the other Trinamic motion control modules. It also uses the same connector.

The 68 pin connector has a 2.0mm pitch.

## 3.2 Connecting the Module

The 68-pin connector provides communication to a host, configuration of the EEPROM and connection of motors as well as connection of reference switches. Pin 1 of this connector is located in the lower left corner on the top site, while the connector is pointing towards the user.

Table 3.1: Pinout 68-Pin Connector

|   Pin | Direction   | Description                    |   Pin | Direction   | Description              |
|-------|-------------|--------------------------------|-------|-------------|--------------------------|
|     1 | In          | +5VDC (+/- 5%) I max =300mA    |    35 | -           | Reserved                 |
|     2 | In          | GND                            |    36 | Out         | Motor2 A0                |
|     3 | In          | +5VDC (+/- 5%)                 |    37 | -           | Reserved                 |
|     4 | In          | GND                            |    38 | Out         | Motor2 A1                |
|     5 | In          | V_Motor (+7 to 34VDC)          |    39 | -           | Reserved                 |
|     6 | In          | GND                            |    40 | Out         | Motor2 B0                |
|     7 | In          | V_Motor (+7 to 34VDC)          |    41 | -           | Reserved                 |
|     8 | In          | GND                            |    42 | Out         | Motor2 B1                |
|     9 | In          | V_Motor (+7 to 34VDC)          |    43 | -           | Reserved                 |
|    10 | In          | GND                            |    44 | In          | Shutdown                 |
|    11 | Out         | SPI Select 0                   |    45 | In          | General Purpose input 0  |
|    12 | Out         | SPI Clock                      |    46 | Out         | General Purpose output 0 |
|    13 | Out         | SPI Select 1                   |    47 | In          | General Purpose input 1  |
|    14 | In          | SPI MISO                       |    48 | Out         | General Purpose output 1 |
|    15 | Out         | SPI Select 2                   |    49 | In          | General Purpose input 2  |
|    16 | Out         | SPI MOSI                       |    50 | Out         | General Purpose output 2 |
|    17 | In          | Reset, active low              |    51 | In          | General Purpose input 3  |
|    18 | Out         | Alarm                          |    52 | Out         | General Purpose output 3 |
|    19 | In          | Reference Switch Motor 0 right |    53 | In          | General Purpose input 4  |
|    20 | Out         | Motor0 A0                      |    54 | Out         | General Purpose output 4 |
|    21 | In          | Reference Switch Motor 0 left  |    55 | In          | General Purpose input 5  |
|    22 | Out         | Motor0 A1                      |    56 | Out         | General Purpose output 5 |
|    23 | In          | Reference Switch Motor 1 right |    57 | In          | General Purpose input 6  |
|    24 | Out         | Motor0 B0                      |    58 | Out         | General Purpose output 6 |
|    25 | In          | Reference Switch Motor 1 left  |    59 | In          | General Purpose input 7  |
|    26 | Out         | Motor0 B1                      |    60 | Out         | General Purpose output 7 |
|    27 | In          | Reference Switch Motor 2 right |    61 | In          | GND                      |
|    28 | Out         | Motor1 A0                      |    62 | In          | GND                      |
|    29 | In          | Reference Switch Motor 2 left  |    63 | -           | Reserved                 |
|    30 | Out         | Motor1 A1                      |    64 | Out         | RS-485 Direction         |
|    31 | -           | Reserved                       |    65 | InOut       | CAN -                    |
|    32 | Out         | Motor1 B0                      |    66 | In          | RS-232 RxD               |
|    33 | -           | Reserved                       |    67 | InOut       | CAN +                    |
|    34 | Out         | Motor1 B1                      |    68 | Out         | RS-232 TxD               |

Figure 3.2: Pin order of the connector

<!-- image -->

## 3.3 Power supply requirements

Two different power supplies have to be provided for the TMCM-303: +5VDC for the controller part and +7..34VDC for the motor supply. Please connect all listed pins for the power supply inputs and ground in parallel. It is recommended to use capacitors of some 1000µF and a choke close to the module for the motor supply. This ensures a stable power supply and minimizes noise injected into the power supply  cables.  The  choke  especially  becomes  necessary  with  larger  distributed  systems  using  a common power supply.

Figure 3.3: Power supply requirements for TMCM-303

<!-- image -->

Especially with bus controlled systems (e.g. CAN or RS485) it is important to ensure a stable ground potential of all modules. The stepper driver modules draw peak currents of some Ampere from the power  supply.  It  has  to  be  made  sure,  that  this  current  does  not  cause  a  substantial  voltage difference  on  the  interface  lines  between  the  module  and  the  master,  as  disturbed  transmissions could result.

The following hints help avoiding transmission problems in larger systems. Not all hints have to be followed:

- Use power supply filter capacitors of some 1000µF on the base board for each module in order to take  over  current  spikes.  A  choke  in  the  positive  power  supply  line  will  prevent  current  spikes from changing the GND potential of the base board, especially when a central power supply is used.
- Optionally  use  an  isolated  power  supply  for  the  TMCM-Modules  (no  earth  connection  on  the power supply, in case the CAN master is not optically decoupled)
- Do not supply modules with the same power supply which are mounted in a distance of more than a few meters.
- For  modules  working  on  the  same  power  supply  (especially  the  same  power  supply  as  the master) use a straight and thick, low-resistive GND connection.
- Use a local +5V regulator on each base-board.

Figure 3.4: Power supply requirements for TMC-Modules in a bus system

<!-- image -->

For large systems, an optically decoupled CAN bus for each number of nodes, e.g. for each base board with a number of TMCM-30X modules may make sense, especially when a centralized power supply is to be used. Be aware that different ground potentials of the CAN sender (e.g. a PC) and the power supply may damage the modules. Please make sure that the GND lines of the CAN sender and the module(s) and power supplies are connected by a cable.

## 4 Operational Ratings

The operational  ratings  show the  intended / the  characteristic  range  for  the  values  and  should  be used as design values. In no case shall the maximum values be exceeded.

Table 4.1: Operational Ratings

| Symbol   | Parameter                                                                          | Min   | Typ       | Max          | Unit   |
|----------|------------------------------------------------------------------------------------|-------|-----------|--------------|--------|
| V S      | DC Power supply voltage for operation                                              | 7     | 12 … 28   | 34           | V      |
| V +5V    | +5V DC input (max. 50mA / no OUT load)                                             | 4.8   | 5.0       | 5.2          | V      |
| I COIL   | Motor coil current for sine wave peak (chopper regulated, adjustable via software) | 0     | 0.3 … 1.5 | 1.5          | A      |
| f CHOP   | Motor chopper frequency                                                            |       | 36.8      |              | kHz    |
| I S      | Power supply current (per motor)                                                   |       | << I COIL | 1.4 * I COIL | A      |
| V INPROT | Input voltage for StopL, StopR, GPI0 (internal protection diodes)                  | -0.5  | 0 … 5     | V +5V +0.5   | V      |
| V ANA    | INx analog measurement range                                                       |       | 0 ... 5   |              | V      |
| V INLO   | INx, StopL, StopR low level input                                                  |       | 0         | 0.9          | V      |
| V INHI   | INx, StopL, StopR high level input (integrated 10k pullup to +5V for Stop)         | 2     | 5         |              | V      |
| I OUTI   | OUTx max +/- output current (CMOS output) (sum for all outputs max. 50mA)          |       |           | +/-20        | mA     |
| T ENV    | Environment temperature at rated current (no cooling)                              | -40   |           | +80          | °C     |

## 5 Functional Description

In Figure 5.1 the main parts oft the TMCM-303 module are shown. The module mainly consists of a TMC428 motion controller, three TMC236 or TMC246 stepper motor driver, the TMCL program memory (EEPROM) and the host interfaces (RS-232, RS-485 and CAN).

Figure 5.1: Main parts of the TMCM-303

<!-- image -->

## 5.1 System Architecture

The  TMCM-303  integrates  a  microcontroller  with  the  TMCL  (Trinamic  Motion  Control  Language) operating system. The motion control real-time tasks are realized by the TMC428.

## 5.1.1 Microcontroller

On this module, the Atmel ATmega32 is used to run the TMCL operating system and to control the TMC428. The CPU has 32Kbyte flash memory and a 1Kbyte EEPROM. The microcontroller runs the TMCL (Trinamic  Motion  Control  Language)  operating  system  which  makes  it  possible  to  execute  TMCL commands that are sent to the module from the host via the RS232, RS-485 and CAN interface. The microcontroller interprets the TMCL commands and controls the TMC428 which executes the motion commands.

The flash ROM of the microcontroller holds the TMCL operating system and the EEPROM memory of the microcontroller is used to permanently store configuration data.

The TMCL operating system can be updated via the RS232 interface. Use the TMCL IDE to do this.

## 5.1.2 TMCL EEPROM

To store TMCL programs for stand alone operation the TMCM-303 module is equipped with a 16kByte EEPROM attached to the microcontroller. The EEPROM can store TMCL programs consisting of up to 2048 TMCL commands.

## 5.1.3 TMC428 Motion Controller

The  TMC428  is  a  high-performance  stepper  motor  control  IC  and  can  control  up  to  three  2-phasestepper-motors. Motion parameters like speed or acceleration are sent to the TMC428 via SPI by the microcontroller. Calculation of ramps and speed profiles are done internally by hardware based on the target motion parameters.

## 5.1.4 Stepper Motor Drivers

On TMCM-303 modules with StallGuard option (TMCM-303/SG) the TMCM246 chips are used. These chips are fully compatible with the TMC236 chips, but have the additional StallGuard feature.

As the power dissipation of the TMC236 and TMC246 chips is very low no heat sink or cooling fan is needed. The temperature of the chips does not get high. The coils will be switched off automatically when the temperature or the current exceeds the limits and automatically switched on again when the values are within the limits again.

Discontinued  product:  The  stepper  motor  drivers  used  on  the  TMCM-303  without  the  StallGuard options were the TMC236 chips. These drivers are very easy to use. They  can control the currents for the two phases of the stepper motors. 16x microstepping and maximum output current of 1500mA are supported by these driver ICs.

## 5.2 Power Supply

Two  different  power  supplies  have  to  be  provided  for  the  TMCM-303.  First  +5VDC  for  module functionality  and  second  +7..34VDC  for  the  motor  supply.  Please  use  all  listed  pins  for  the  power supply inputs and ground parallel. Refer to 6 Putting the TMCM-303 into Operation.

Table 5.1: Pinning of Power supply

| Pin      | Function                                  |
|----------|-------------------------------------------|
| 1, 3     | +5V DC (+/- 5%), I max =50mA power supply |
| 2, 4     | Ground                                    |
| 5, 7, 9  | +7..34V DC motor power supply             |
| 6, 8, 10 | Ground                                    |

## 5.3 Motor Connection

Warning: Never connect or disconnect the motors while the TMCM-303 Module is switched on. Doing this will destroy the driver ICs!

The TMCM-303 controls up to three 2-phase stepper motors. The connections between the motors and the 68-pin connector must be done as shown in Table 5.2.

Table 5.2: Pinout for Motor Connections

|   Pin Number | Direction   | Name      | Motor Numbers and Coils   |
|--------------|-------------|-----------|---------------------------|
|           20 | Out         | Motor0_A0 | Motor #0, Coil A0         |
|           22 | Out         | Motor0_A1 | Motor #0, Coil A1         |
|           24 | Out         | Motor0_B0 | Motor #0, Coil B0         |
|           26 | Out         | Motor0_B1 | Motor #0, Coil B1         |
|           28 | Out         | Motor1_A0 | Motor #1, Coil A0         |
|           30 | Out         | Motor1_A1 | Motor #1, Coil A1         |
|           32 | Out         | Motor1_B0 | Motor #1, Coil B0         |
|           34 | Out         | Motor1_B1 | Motor #1, Coil B1         |
|           36 | Out         | Motor2_A0 | Motor #2, Coil A0         |
|           38 | Out         | Motor2_A1 | Motor #2, Coil A1         |
|           40 | Out         | Motor2_B0 | Motor #2, Coil B0         |
|           42 | Out         | Motor2_B1 | Motor #2, Coil B1         |

Figure 5.2: Connecting the Motors

<!-- image -->

## 5.4 Host Communication

Communication to a host takes place via one or more of the onboard interfaces. The module provides a wide range of different interfaces, like CAN, RS-232 and RS-485. The following chapters explain how the interfaces are connected with the 68-pin connector.

## 5.4.1 CAN 2.0b

Table 5.3: Pinout for CAN Connection

|   Pin Number | Direction   | Name   | Limits   | Description        |
|--------------|-------------|--------|----------|--------------------|
|           65 | InOut       | CAN -  | -8…+18V  | CAN Input / Output |
|           67 | InOut       | CAN +  | -8…+18V  | CAN Input / Output |

Figure 5.3: Connecting CAN

<!-- image -->

## 5.4.2 RS-232

Table 5.4: Pinout for RS-232 Connection

| Pin Number     | Direction   | Name   | Limits   | Description          |
|----------------|-------------|--------|----------|----------------------|
| 66             | In          | RxD    | TTL      | RS-232 Receive Data  |
| 68             | Out         | TxD    | TTL      | RS-232 Transmit Data |
| 2, 4, 6, 8, 10 | In          | GND    | 0V       | Connect to ground    |

Note: The RS-232 must be operated with inverted TTL-Levels (0V, 5V). It is recommended to use an inverting level shifter like the MAX202.

## 5.4.3 RS-485

| Pin Number     | Direction   | Name      | Limits   | Description                                                                          |
|----------------|-------------|-----------|----------|--------------------------------------------------------------------------------------|
| 64             | Out         | RS485_DIR | TTL      | Driver / Receiver enable for RS-485 Transceiver. 0: Receiver enable 1: Driver enable |
| 66             | In          | RxD       | TTL      | RS-485 Receive Data                                                                  |
| 68             | Out         | TxD       | TTL      | RS-485 Transmit Data                                                                 |
| 2, 4, 6, 8, 10 | In          | GND       | 0V       | Connect to ground                                                                    |

## Table 5.5: Pinout for RS-485 Connection

Note: The TMCM-303 Module does not contain any RS-485 transceivers!

Figure 5.5: Connecting the RS-485 interface

<!-- image -->

Figure 5.4: Connecting RS-232

<!-- image -->

## 5.5 StallGuard™ - Sensorless Motor Stall Detection

The TMCM-303/SG modules are equipped with the StallGuard option. The StallGuard option makes it possible to detect if the mechanical load on a stepper motor is too high or if the traveler has been obstructed. The load value can be read using a TMCL command or the module can be programmed so that the motor will be stopped automatically when it has been obstructed or the load has been to high.

StallGuard can also be used for finding the reference position without the need for a reference switch: Just activate StallGuard and then let the traveler run against a mechanical obstacle that is placed at the end of the way. When the motor has stopped it is definitely at the end of its way, and this point can be used as the reference position.

To  use  StallGuard  in  an  actual  application,  some  manual  tests  should  be  done  first,  because  the StallGuard level depends upon the motor velocities and on the occurrence of resonances.

Mixed decay should be switched off while StallGuard is turned on in order to get usable results.

Table 5.6: StallGuard parameter SAP 205

| Value   | Description                                  |
|---------|----------------------------------------------|
| 0       | StallGuard function is deactivated (default) |
| 1..7    | Motor stops when StallGuard value is reached |

To activate the StallGuard feature use the TMCL-command SAP 205 and set the StallGuard threshold value according to Table 5.6. The actual load value is given by GAP 206. The TMCL IDE has some tools which  let  you  try  out  and  adjust  the  StallGuard  function  in  an  easy  way.  They  can  be  found  at 'StallGuard' in the 'Setup'-menu and are described in the following chapters.

## 5.5.1 StallGuard adjusting tool

The StallGuard adjusting tool helps to find the necessary motor parameters when StallGuard is to be

<!-- image -->

used. This function can only be used when a module is connected that features StallGuard. This is checked when the StallGuard adjusting tool is selected in the 'Setup' menu. After this has been successfully checked the StallGuard adjusting tool is displayed.

First, select the axis that is to be used in the 'Motor' area.

Now you can enter a  velocity  and  an  acceleration  value  in  the  'Drive' area and then click 'Rotate Left' or 'Rotate Right'. Clicking one of these button  will  send  the  necessary  commands  to  the  module  so  that  the motor starts running. The  red bar in the 'StallGuard' area on  the right side of the windows displays the actual load value. Use the slider to set the StallGuard threshold value. If the load  value reaches this value the motor stops. Clicking the 'Stop' button also stops the motor.

All  commands necessary to set the  values  entered  in  this  dialogue  are displayed in the 'Commands' area at the bottom of the window. There, they can be selected, copied and pasted into the TMCL editor.

Figure 5.6: StallGuard adjusting tool

## 5.5.2 StallGuard profiler

The StallGuard profiler is a utility that helps you find the best parameters for using stall detection. It scans through given velocities and shows which velocities are the best ones. Similar to the StallGuard adjusting tool it can only be used together with a module that supports StallGuard. This is checked right  after  the  StallGuard  profiler  has  been  selected  in  the  'Setup'  menu.  After  this  has  been successfully checked the StallGuard profiler window will be shown.

<!-- image -->

First, select the axis that is to be used. Then, enter the 'Start velocity' and the 'End velocity'.  The start velocity is used at the  beginning  of  the  profile  recording.  The  recording  ends when  the  end  velocity  has  been  reached.  Start  velocity  and end velocity must not be equal. After you have entered these parameters,  click  the  'Start'  button  to  start  the  StallGuard profile recording. Depending on the range between start and end velocity this can take several minutes, as the load value for  every  velocity  value  is  measured  ten  times.  The  'Actual velocity'  value  shows  the  velocity  that  is  currently  being tested and so tells you the progress of the profile recording. You can also abort a profile recording by clicking the 'Abort' button.

The result  can  also  be  exported  to  Excel  or  to  a  text  file  by using the 'Export' button.

Figure 5.7: The StallGuard Profiler

## 5.5.2.1 The result of the StallGuard profiler

The result is shown as a graphic in the StallGuard profiler window. After the profile recording has finished  you  can  scroll  through  the  profile  graphic  using  the  scroll  bar  below  it.  The  scale  on  the vertical axis shows the load value: a higher value means a higher load. The scale on the horizontal axis is the velocity scale. The colour of each line shows the standard deviation of the ten load values that have been measured for the velocity at that point. This is an indicator for the vibration of the motor at the given velocity. There are three colours used:

- Green: The standard deviation is very low or zero. This means that there is effectively no vibration at this velocity.
- Yellow: This colour means that there might be some low vibration at this velocity.
- Red: The red colour means that there is high vibration at that velocity.

## 5.5.2.2 Interpreting the result

In order to make effective use of the StallGuard feature you should choose a velocity where the load value is as low as possible and where the colour is green. The very best velocity values are those where the load value is zero (areas that do not show any green, yellow or red line). Velocities shown in yellow can also be used, but with care as they might cause problems (maybe the motor stops even if it is not stalled).

Velocities  shown  in  red  should  not  be  chosen.  Because  of  vibration  the  load  value  is  often unpredictable and so not usable to produce good results when using stall detection.

As it is very seldom that exactly the same result is produced when recording a profile with the same parameters a second time, always two or more profiles should be recorded and compared against each other.

## 5.6 Reference switches

With reference switches, an interval for the movement of the motor or the zero point can be defined. Also a step loss of the system can be detected, e.g. due to  overloading or  manual interaction,  by using a travel-switch.

Table 5.7: Pinout reference switches

|   Pin Number | Direction   | Name   | Limits   | Description                               |
|--------------|-------------|--------|----------|-------------------------------------------|
|           19 | In          | STOP0R | TTL      | Right reference switch input for Motor #0 |
|           21 | In          | STOP0L | TTL      | Left reference switch input for Motor #0  |
|           23 | In          | STOP1R | TTL      | Right reference switch input for Motor #1 |
|           25 | In          | STOP1L | TTL      | Left reference switch input for Motor #1  |
|           27 | In          | STOP2R | TTL      | Right reference switch input for Motor #2 |
|           29 | In          | STOP2L | TTL      | Left reference switch input for Motor #2  |

Note: 10k pullup resistors for reference switches are included on the module.

## 5.6.1 Left and right limit switches

The TMCM-3 03 can be configured so that a motor has a left and a right limit switch (Figure 5.8). The motor then stops when the traveler has reached one of the limit switches.

Figure 5.8: Left and right limit switches

<!-- image -->

## 5.6.2 Triple Switch Configuration

It is possible to program a tolerance range around the reference switch position. This is useful for a triple switch configuration, as outlined in Figure 5.9. In that configuration two switches are used as automatic stop switches, and one additional switch is used as the reference switch between the left stop  switch  and  the  right  stop  switch.  The  left  stop  switch  and  the  reference  switch  are  wired together. The center switch (travel switch) allows for a monitoring of the axis in order to detect a step loss.

Figure 5.9: Limit switch and reference switch

<!-- image -->

## 5.6.3 One Limit Switch for circular systems

If a circular system is used (Figure 5.10), only one reference switch is necessary, because there are no end-points in such a system.

Figure 5.10: One reference switch

<!-- image -->

## 5.7 Serial Peripheral Interface (SPI)

On-board communication is performed via the Serial Peripheral Interface (SPI), where the microcontroller  acts  as  master.  For  adaptation  to  user  requirements,  the  user  has  access  to  this interface via the 68-pin connector. Furthermore three chip select lines can be used for addressing of external devices.

Table 5.8: Pinout Serial Peripheral Interface

|   Pin Number | Direction   | Name     | Limits   | Description         |
|--------------|-------------|----------|----------|---------------------|
|           11 | Out         | SPI_SEL0 | TTL      | Chip Select Bit0    |
|           13 | Out         | SPI_SEL1 | TTL      | Chip Select Bit1    |
|           15 | Out         | SPI_SEL2 | TTL      | Chip Select Bit2    |
|           12 | Out         | SPI_CLK  | TTL      | SPI Clock           |
|           14 | In          | SPI_MISO | TTL      | SPI Serial Data In  |
|           16 | Out         | SPI_MOSI | TTL      | SPI Serial Data Out |

## 5.8 Port Expansion

For further expansion and adaptation to user requirements the module provides a port expansion for the microcontroller. The expansion includes eight TTL input pins and eight TTL output pins, which are accessible via the 68-pin connector.

Table 5.9: Pinout port expansion

|   Pin Number | Direction   | Name   | Limits   | Description                  |
|--------------|-------------|--------|----------|------------------------------|
|           45 | In          | INP_0  | TTL      | Port expansion Pin 0, input  |
|           47 | In          | INP_1  | TTL      | Port expansion Pin 1, input  |
|           49 | In          | INP_2  | TTL      | Port expansion Pin 2, input  |
|           51 | In          | INP_3  | TTL      | Port expansion Pin 3, input  |
|           53 | In          | INP_4  | TTL      | Port expansion Pin 4, input  |
|           55 | In          | INP_5  | TTL      | Port expansion Pin 5, input  |
|           57 | In          | INP_6  | TTL      | Port expansion Pin 6, input  |
|           59 | In          | INP_7  | TTL      | Port expansion Pin 7, input  |
|           46 | Out         | Out_0  | TTL      | Port expansion Pin 0, output |
|           48 | Out         | Out_1  | TTL      | Port expansion Pin 1, output |
|           50 | Out         | Out_2  | TTL      | Port expansion Pin 2, output |
|           52 | Out         | Out_3  | TTL      | Port expansion Pin 3, output |
|           54 | Out         | Out_4  | TTL      | Port expansion Pin 4, output |
|           56 | Out         | Out_5  | TTL      | Port expansion Pin 5, output |
|           58 | Out         | Out_6  | TTL      | Port expansion Pin 6, output |
|           60 | Out         | Out_7  | TTL      | Port expansion Pin 7, output |

## 5.9 Miscellaneous Connections

Table 5.10: Miscellaneous Connections

|   Pin Number | Direction   | Name     | Limits   | Description        |
|--------------|-------------|----------|----------|--------------------|
|           17 | In          | Reset    | TTL      | Reset, active low  |
|           18 | Out         | Alarm    | TTL      | Alarm, active high |
|           44 | In          | Shutdown | TTL      | Shutdown TMCM-303  |

## 5.10 Microstep Resolution

The microstep resolution can be set using TMCL software. The default setting is 64 microsteps which is the highest resolution.

To set the microstep resolution with TMCL use instruction 5: SAP, type 140: microstep resolution. You can find the appropriate value in Table 5.11.

Table 5.11: Microstep resolution setting

|   Value | microsteps                                               |
|---------|----------------------------------------------------------|
|       0 | Do not use: for fullstep please see 'fullstep threshold' |
|       1 | Halfstep (not recommended)                               |
|       2 | 4                                                        |
|       3 | 8                                                        |
|       4 | 16                                                       |
|       5 | 32                                                       |
|       6 | 64                                                       |

Despite  the  possibility  to  set  up  to  64  microsteps,  the  motor  physically  will  be  positioned  to  a maximum of about 24 Microsteps, when operated in 32 or 64 microstep setting.

## 6 Putting the TMCM-303 into Operation

On the basis of a small example it is shown step by step how the TMCM-303 is set into operation. Experienced users could skip this chapter and proceed to chapter 7:

Example:  The  following  application  is  to  implement  with  the  TMCL-IDE  Software  development environment in the TMCM-303 module. For data transfer between the host PC and the module the RS232 interface is employed.

A formula how 'speed' is converted into a physical unit like rotations per seconds can be found in Calculation: Velocity and Acceleration vs. Microstep- and Fullstep-Frequency

- Turn Motor 0 left with speed 500
- Turn Motor 1 right with speed 500
- Turn Motor 2 with speed 500, acceleration 5 and move between position +10000 and -10000.

Step 1: Connect the RS-232 Interface as specified in 5.7. Step 2: Connect the motors as specified in 5.3. Step 3: Connect the power supply. +5 VDC to pins 1 or 3 Ground to pins 2, 4, 6, 8 or 10 Step 4: Connect the motor supply voltage +10 to 30 VDC to pins 5, 7, 9 Step 5: Switch on the power supply and the motor supply. An on-board LED should starting to flash. This indicates the correct configuration of the microcontroller. Step 6: Start  the  TMCL-IDE  Software  development  environment.  Open  file  test2.tmc.  The

following source code appears on the screen:

## A description for the TMCL commands can be found in Appendix A.

```
//test2.tmc - A simple example for using TMCL and TMCL-IDE SAP Mode, 0, VelocityMode //Set velocity Mode ROL 0, 500 //Rotate motor with speed 500 WAIT TICKS, 0, 500 MST 0 SAP Mode, 1, VelocityMode //Set velocity Mode ROR 1, 500 //Rotate to other direction with same speed WAIT TICKS, 0, 500 MST 1 SAP Mode, 2, RampMode //Set Ramp Mode SAP VMax, 2, 500 //Set max. Velocity SAP AMax, 2, 5 //Set max. Acceleration Loop:   MVP ABS, 2, 10000 //Move to Position 10000 WAIT POS, 2, 0 //Wait until position reached MVP ABS, 2, -10000 //Move to Position -10000 WAIT POS, 2, 0 //Wait until position reached JA Loop //Infinity Loop
```

Step 7: Click on Icon ' Assemble ' to convert the TMCL into machine code. Then download the program to the TMCM-303 module via the Icon 'Download'. Step 8: Press Icon 'Run'. The desired program will be executed.

A  documentation  about  the  TMCL  operations  can  be  found  in  the  TMCL  documentation.  The  next chapter discusses additional operations to turn the TMCM-303 into a high performance motion control system.

## 7 TMCM-303 Operational Description

## 7.1 Calculation: Velocity and Acceleration vs. Microstep- and Fullstep-Frequency

The values of the parameters, sent to the TMC428 do not have typical motor values, like rotations per second as velocity. But these values can be calculated from the TMC428-parameters, as shown in this document. The parameters for the TMC428 are:

Table 7.1: TMC428 Velocity parameters

| Signal    | Description                                                                                                   | Range                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| f CLK     | clock-frequency                                                                                               | 0..16 MHz                                                   |
| velocity  | -                                                                                                             | 0..2047                                                     |
| a_max     | maximum acceleration                                                                                          | 0..2047                                                     |
| pulse_div | divider for the velocity. The higher the value is, the less is the maximum velocity default value = 0         | 0..13                                                       |
| ramp_div  | divider for the acceleration. The higher the value is, the less is the maximum acceleration default value = 0 | 0..13                                                       |
| Usrs      | microstep-resolution (microsteps per fullstep = 2 usrs )                                                      | 0..7 (a value of 7 is internally mapped to 6 by the TMC428) |

The microstep-frequency of the stepper motor is calculated with

<!-- formula-not-decoded -->

To  calculate  the fullstep-frequency from  the  microstep-frequency,  the  microstep-frequency  must  be divided by the number of microsteps per fullstep.

<!-- formula-not-decoded -->

The change in the pulse rate per time unit (pulse frequency change per second - the acceleration a ) is given by

<!-- formula-not-decoded -->

This results in an acceleration in fullsteps of:

<!-- formula-not-decoded -->

## Example:

f\_CLK = 16 MHz velocity = 1000

a\_max = 1000

pulse\_div = 1

ramp\_div = 1

usrs = 6

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

If the stepper motor has e.g. 72 fullsteps per rotation, the number of rotations of the motor is:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## 8 TMCL

TMCL, the  TRINAMIC Motion Control Language, is described in a separate documentation, the TMCL Reference and Programming Manual. This manual is provided on the TMC TechLib CD and on the web site of TRINAMIC: www.trinamic.com.

Please refer to these sources for updated data sheets and application notes.

The TMC TechLib CD-ROM including data sheets, application notes, schematics of evaluation boards, software of evaluation boards, source code examples, parameter calculation spreadsheets, tools, and more is available from TRINAMIC.

## 9 Revision History

## 9.1 Documentation Revision

Table 9.1: Documentation Revisions

|   Version | Date       | Author   | Description                                            |
|-----------|------------|----------|--------------------------------------------------------|
|      0.1  | 01.07.2002 | ME/AR    | Initial Version                                        |
|      1    | 19.05.2003 | OK       | Some figures corrected                                 |
|      1.01 | 23.07.2003 | OK       | Pin assignments corrected                              |
|      1.02 | 19.08.2003 | OK       | Slight corrections                                     |
|      1.04 | 03.09.2003 | OK       | Error corrections                                      |
|      1.05 | 01.10.2004 | OK       | Company address changed                                |
|      1.06 | 13.02.2005 | OK       | Ordering information added                             |
|      1.07 | 03.06.2005 | OK       | Error in table 1 corrected                             |
|      1.1  | 19.05.2006 | HC       | Major Revision, StallGuard documentation added         |
|      1.11 | 21.02.2007 | HC       | Added 2.0mm pitch connector information                |
|      1.12 | 30.05.2007 | HC       | TMCM-303/SG replaces TMCM-303 (discontinued)           |
|      1.13 | 20.06.2007 | HC       | Added chapter 5.10 Microstep Resolution                |
|      1.14 | 08.08.2007 | HC       | RS232 interface (page 13): use inverting level shifter |
|      1.15 | 17.10.2007 | HC       | Power supply requirements added (chapter 3.3)          |
|      1.16 | 24.6.2009  | OK       | Chapter 5.5 corrected                                  |

## 9.2 Firmware Revision

Table 9.2: Firmware Revisions

|   Version | Comment         | Description                        |
|-----------|-----------------|------------------------------------|
|      3.24 | Initial Release | Please refer to TMCL documentation |