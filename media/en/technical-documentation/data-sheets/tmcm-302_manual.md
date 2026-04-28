<!-- lastmod 2025-09-05 -->
## TMCM-302

## 3 - Axis Stepper Motor Motion Control Module for Step / Direction drivers

<!-- image -->

## Manual

Version: 1.12

December 6 th , 2006

<!-- image -->

Trinamic Motion Control GmbH &amp; Co. KG

Sternstraße 67 D - 20357 Hamburg, Germany Phone +49-40-51 48 06 - 0 FAX: +49-40-51 48 06 - 60 http://www.trinamic.com

## Table of Contents

| 1                                                                                                                                                               | Features ......................................................................................................................................................4   | Features ......................................................................................................................................................4   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2                                                                                                                                                               | Life support policy .......................................................................................................................................5       | Life support policy .......................................................................................................................................5       |
| 3                                                                                                                                                               | Electrical and Mechanical Interfacing..........................................................................................................6                   | Electrical and Mechanical Interfacing..........................................................................................................6                   |
| 3.1                                                                                                                                                             | Dimensions.........................................................................................................................................6               | Dimensions.........................................................................................................................................6               |
| 3.2                                                                                                                                                             | Connecting the Module.......................................................................................................................7                      | Connecting the Module.......................................................................................................................7                      |
| 4                                                                                                                                                               | Operational Ratings ....................................................................................................................................8          | Operational Ratings ....................................................................................................................................8          |
| 5                                                                                                                                                               | Functional Description.................................................................................................................................8           | Functional Description.................................................................................................................................8           |
| 5.1                                                                                                                                                             | System Architecture ...........................................................................................................................9                   | System Architecture ...........................................................................................................................9                   |
|                                                                                                                                                                 | 5.1.1                                                                                                                                                              | Microcontroller ...........................................................................................................................9                       |
|                                                                                                                                                                 | 5.1.2                                                                                                                                                              | TMCL EEPROM ........................................................................................................................9                              |
|                                                                                                                                                                 | 5.1.3                                                                                                                                                              | TMC428 Motion Controller.........................................................................................................9                                 |
|                                                                                                                                                                 | 5.1.4                                                                                                                                                              | Interface to the external drivers .................................................................................................9                               |
| 5.2                                                                                                                                                             | Power Supply......................................................................................................................................9                | Power Supply......................................................................................................................................9                |
| 5.3                                                                                                                                                             | Host Communication ........................................................................................................................10                      | Host Communication ........................................................................................................................10                      |
|                                                                                                                                                                 | 5.3.1                                                                                                                                                              | CAN 2.0b .................................................................................................................................10                       |
|                                                                                                                                                                 | 5.3.2                                                                                                                                                              | RS-232.....................................................................................................................................10                      |
|                                                                                                                                                                 | 5.3.3                                                                                                                                                              | RS-485.....................................................................................................................................11                      |
| 5.4                                                                                                                                                             | Step-/Direction output.......................................................................................................................12                    | Step-/Direction output.......................................................................................................................12                    |
| 5.5                                                                                                                                                             | Connecting the drivers......................................................................................................................12                     | Connecting the drivers......................................................................................................................12                     |
|                                                                                                                                                                 | 5.5.1 Connecting the TMCM-302 to a power driver module with Step/Direction-Interface ..............12                                                              | 5.5.1 Connecting the TMCM-302 to a power driver module with Step/Direction-Interface ..............12                                                              |
| 5.5.2                                                                                                                                                           | Connecting the TMCM-302 to drivers with an SPI-Interface...................................................15                                                      | Connecting the TMCM-302 to drivers with an SPI-Interface...................................................15                                                      |
| 5.6                                                                                                                                                             | Ramp Profiles ...................................................................................................................................17                | Ramp Profiles ...................................................................................................................................17                |
| 5.7                                                                                                                                                             | Reference switches ..........................................................................................................................18                    | Reference switches ..........................................................................................................................18                    |
|                                                                                                                                                                 | 5.7.1 Left and right limit switches......................................................................................................18                        | 5.7.1 Left and right limit switches......................................................................................................18                        |
|                                                                                                                                                                 | 5.7.2 Triple Switch Configuration......................................................................................................18                          | 5.7.2 Triple Switch Configuration......................................................................................................18                          |
|                                                                                                                                                                 | 5.7.3 One Limit Switch for circular systems......................................................................................19                                | 5.7.3 One Limit Switch for circular systems......................................................................................19                                |
| 5.8                                                                                                                                                             | Serial Peripheral Interface (SPI).......................................................................................................19                         | Serial Peripheral Interface (SPI).......................................................................................................19                         |
| 5.9                                                                                                                                                             | Port Expansion .................................................................................................................................19                 | Port Expansion .................................................................................................................................19                 |
| 5.10                                                                                                                                                            | Miscellaneous Connections..............................................................................................................20                          | Miscellaneous Connections..............................................................................................................20                          |
| 6                                                                                                                                                               | Putting the TMCM-302 into Operation ......................................................................................................20                       | Putting the TMCM-302 into Operation ......................................................................................................20                       |
| 7                                                                                                                                                               | TMCM-302 Operational Description..........................................................................................................21                       | TMCM-302 Operational Description..........................................................................................................21                       |
| 7.1                                                                                                                                                             | Calculation: Velocity and Acceleration vs. Microstep- and Fullstep-Frequency...............................21                                                      | Calculation: Velocity and Acceleration vs. Microstep- and Fullstep-Frequency...............................21                                                      |
| 8                                                                                                                                                               | TMCL.........................................................................................................................................................22    | TMCL.........................................................................................................................................................22    |
| 9                                                                                                                                                               | Revision History ........................................................................................................................................23        | Revision History ........................................................................................................................................23        |
|                                                                                                                                                                 | 9.1 Documentation Revision...................................................................................................................23                    | 9.1 Documentation Revision...................................................................................................................23                    |
|                                                                                                                                                                 | 9.2 Firmware Revision............................................................................................................................23                | 9.2 Firmware Revision............................................................................................................................23                |
| 10 References................................................................................................................................................23 | 10 References................................................................................................................................................23    | 10 References................................................................................................................................................23    |

## List of Figures

| Figure 3.1: Dimensions............................................................................................................................   | 6                                                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Figure 3.2: Pin order of the connector.....................................................................................................          | 7                                                                                                  |
| Figure 5.1: Main parts of the TMCM-302                                                                                                               | ................................................................................................ 8 |
| Figure 5.2: Connecting CAN..................................................................................................................         | 10                                                                                                 |
| Figure 5.3: Connecting RS-232.............................................................................................................           | 11                                                                                                 |
| Figure 5.4: Connecting the RS-485 interface........................................................................................                  | 11                                                                                                 |
| Figure 5.5: Step-/Direction output signals .............................................................................................             | 12                                                                                                 |
| Figure 5.6: Application Environment using the Step/Direction-Interface...............................................                                | 13                                                                                                 |
| Figure 5.7: Application with power module Monopack 2 with a Step/Direction-Interface .....................                                           | 13                                                                                                 |
| Figure 5.8: Application with TMCM-023 with 3 Step/Direction-Interfaces.............................................                                  | 14                                                                                                 |
| Figure 5.9: Application with TMCM-013 with a Step/Direction-Interface...............................................                                 | 14                                                                                                 |
| Figure 5.10: Application Environment using the SPI-Interface..............................................................                           | 15                                                                                                 |
| Figure 5.11: Application with an SPI-stepper motor driver....................................................................                        | 16                                                                                                 |
| Figure 5.12: Velocity profile in ramp mode............................................................................................               | 17                                                                                                 |
| Figure 5.13: Velocity profile in velocity mode........................................................................................               | 17                                                                                                 |
| Figure 5.14: Left and right limit switches...............................................................................................            | 18                                                                                                 |
| Figure 5.15: Limit switch and reference switch .....................................................................................                 | 18                                                                                                 |
| Figure 5.16: One reference switch ........................................................................................................           | 19                                                                                                 |
| List of Tables                                                                                                                                       |                                                                                                    |
| Table 1.1: Order codes............................................................................................................................   | 4                                                                                                  |
| Table 3.1: Pinout 68-Pin Connector ........................................................................................................          | 7                                                                                                  |
| Table 4.1: Operational Ratings................................................................................................................       | 8                                                                                                  |
| Table 5.1: Pinning of Power supply.........................................................................................................          | 9                                                                                                  |
| Table 5.2: Pinout for CAN Connection ..................................................................................................              | 10                                                                                                 |
| Table 5.3: Pinout for RS-232 Connection..............................................................................................                | 10                                                                                                 |
| Table 5.4: Pinout for RS-485 Connection..............................................................................................                | 11                                                                                                 |
| Table 5.5: Pinout for using the Step/Direction-Interface .......................................................................                     | 12                                                                                                 |
| Table 5.6: Pinout for the connections using the SPI-Interface..............................................................                          | 15                                                                                                 |
| Table 5.7: Pinout reference switches ....................................................................................................            | 18                                                                                                 |
| Table 5.8: Pinout Serial Peripheral Interface.........................................................................................               | 19                                                                                                 |
| Table 5.9: Pinout port expansion...........................................................................................................          | 19                                                                                                 |
| Table 5.10: Miscellaneous Connections................................................................................................                | 20                                                                                                 |
| Table 7.1: TMC428 Velocity parameters...............................................................................................                 | 21                                                                                                 |
| Table 9.1: Documentation Revisions.....................................................................................................              | 23                                                                                                 |
| Table 9.2: Firmware Revisions..............................................................................................................          | 23                                                                                                 |

## 1  Features

The TMCM-302 is a triple axis stepper motor controller module for external power drivers with step / direction interface. With its very small size it is dedicated to embedded applications, where centralized or  de-centralized  high  power  drivers  are  desired.  The  board  can  be  connected  to  a  baseboard  or customized  electronics  with  a  pin  connector.  The  TMCM-302  comes  with  the  PC  based  software development environment TMCL-IDE. Using predefined TMCL (Trinamic Motion Control Language) high  level  commands  like  'move  to  position'  or  'constant  rotation'  rapid  and  fast  development  of motion  control  applications  is  guaranteed.  The  TMCM-302  can  be  controlled  via  the  serial  UART interface (e.g. using a RS-232 or RS-485 level shifter) or via CAN. Communication traffic is kept very low  since  all  time  critical  operations,  e.g.  ramp  calculation,  are  performed  on  board.  The  TMCL operations can be stored in the onboard EEPROM for stand- alone operation. The firmware of the module can be updated via the serial interface.

## Applications

- Controller board for control of up to 3 Step / Direction drivers e.g. TMCM-035, TMCM-023 (triple driver), IDX or PD-013-42 mechatronic module
- Versatile possibilities of applications in stand alone or pc controlled mode

## Electrical Data

- 5V DC logic power supply
- TTL / CMOS step / direction outputs

## Interface

- RS-232, RS-485 or CAN 2.0b host interface
- Inputs for reference and stop switches, general purpose analog and digital I/Os

## Highlights

- Three motion controllers for high step frequency
- On the fly alteration of motion parameters (e.g. position, velocity, acceleration)
- Automatic ramp generation in Hardware
- High dynamics: step frequencies up to 300kHz
- 1.8µs step pulse length and step to direction delay

## Software

- Stand-alone operation using TMCL or remote controlled operation
- PC-based application development software TMCL-IDE included
- TMCL program storage: 16 KByte EEPROM (2048 TMCL commands)

## Other

- 68 pin connector carries all signals
- Size: 80x50mm²
- RoHS compliant latest from 1 July 2006

Table 1.1: Order codes

| Order code         | Description                                 |
|--------------------|---------------------------------------------|
| TMCM-302 (-option) | 3-axis controller module with step/dir. out |
| Related products   | BB-302, TMCM-EVAL, BB-323-02                |
| Option             |                                             |
| -H                 | horizontal pin connector (standard)         |
| -V                 | vertical pin connector (on request)         |

## 2  Life support policy

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when  properly  used  in  accordance  with  instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2006

Information given in this data sheet is believed to be accurate  and  reliable.  However  no  responsibility  is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result form its use.

Specifications subject to change without notice.

## 3  Electrical and Mechanical Interfacing

## 3.1 Dimensions

Figure 3.1: Dimensions

<!-- image -->

The size of the module 80x50mm, the same as of the other Trinamic motion control modules. It also uses the same connector.

## 3.2 Connecting the Module

The  68-pin  connector  provides  communication  to  a  host,  configuration  of  the  EEPROM  and connection  of  step  /  direction  drivers  as  well  as  connection  of  reference  switches.  Pin  1  of  this connector is located in the lower left corner on the top site, while the connector is pointing towards the user.

Table 3.1: Pinout 68-Pin Connector

|   Pin | Direction   | Description                    |   Pin | Direction   | Description              |
|-------|-------------|--------------------------------|-------|-------------|--------------------------|
|     1 |             | +5VDC (+/- 5%) I max =50mA     |    35 | Out         | STEP_M1                  |
|     2 |             | GND                            |    36 | Out         | SPI_M2_CLK               |
|     3 |             | +5VDC (+/- 5%)                 |    37 | Out         | DIR_M1                   |
|     4 |             | GND                            |    38 | In          | SPI_M0_IN                |
|     5 |             | Internally not connected       |    39 | Out         | STEP_M2                  |
|     6 |             | GND                            |    40 | In          | SPI_M1_IN                |
|     7 |             | Internally not connected       |    41 | Out         | DIR_M2                   |
|     8 |             | GND                            |    42 | In          | SPI_M2_IN                |
|     9 |             | Internally not connected       |    43 | In          | Shutdown                 |
|    10 |             | GND                            |    44 | -           | Reserved                 |
|    11 | Out         | SPI Select 0                   |    45 | In          | General Purpose input 0  |
|    12 | Out         | SPI Clock                      |    46 | Out         | General Purpose output 0 |
|    13 | Out         | SPI Select 1                   |    47 | In          | General Purpose input 1  |
|    14 | In          | SPI MISO                       |    48 | Out         | General Purpose output 1 |
|    15 | Out         | SPI Select 2                   |    49 | In          | General Purpose input 2  |
|    16 | Out         | SPI MOSI                       |    50 | Out         | General Purpose output 2 |
|    17 | In          | Reset, active low              |    51 | In          | General Purpose input 3  |
|    18 | Out         | Alarm                          |    52 | Out         | General Purpose output 3 |
|    19 | In          | Reference Switch Motor 0 left  |    53 | In          | General Purpose input 4  |
|    20 | Out         | nSCS0                          |    54 | Out         | General Purpose output 4 |
|    21 | In          | Reference Switch Motor 0 right |    55 | In          | General Purpose input 5  |
|    22 | Out         | nSCS1                          |    56 | Out         | General Purpose output 5 |
|    23 | In          | Reference Switch Motor 1 left  |    57 | In          | General Purpose input 6  |
|    24 | Out         | nSCS2                          |    58 | Out         | General Purpose output 6 |
|    25 | In          | Reference Switch Motor 1 right |    59 | In          | General Purpose input 7  |
|    26 | Out         | SPI_M0_OUT                     |    60 | Out         | General Purpose output 7 |
|    27 | In          | Reference Switch Motor 2 left  |    61 |             | GND                      |
|    28 | Out         | SPI_M0_CLK                     |    62 |             | GND                      |
|    29 | In          | Reference Switch Motor 2 right |    63 | -           | Reserved                 |
|    30 | Out         | SPI_M1_OUT                     |    64 | Out         | RS-485 Direction         |
|    31 | Out         | STEP_M0                        |    65 | InOut       | CAN -                    |
|    32 | Out         | SPI_M1_CLK                     |    66 | In          | RS-232 RxD               |
|    33 | Out         | DIR_M0                         |    67 | InOut       | CAN +                    |
|    34 | Out         | SPI_M2_OUT                     |    68 | Out         | RS-232 TxD               |

Figure 3.2: Pin order of the connector

<!-- image -->

## 4  Operational Ratings

The operational ratings show the intended / the characteristic range for the values and should be used as design values. In no case shall the maximum values be exceeded.

Table 4.1: Operational Ratings

| Symbol   | Parameter                                                                 | Min   | Typ     | Max        | Unit   |
|----------|---------------------------------------------------------------------------|-------|---------|------------|--------|
| V +5V    | +5V DC input (max. 300mA)                                                 | 4.75  | 5.0     | 5.25       | V      |
| f STEP   | Maximum step frequency                                                    |       |         | 300        | kHz    |
| t SPulse | Step pulse length                                                         | 1.5   | 1.8     | 2.4        | µs     |
| t S2D    | Step to direction delay                                                   | 1.5   | 1.8     | 2.4        | µs     |
| V INPROT | Input voltage for StopL, StopR, GPI0 (internal protection diodes)         | -0.5  | 0…5     | V +5V +0.5 | V      |
| V ANA    | INx analog measurement range                                              |       | 0 ... 5 |            | V      |
| V INLO   | INx, StopL, StopR low level input                                         |       | 0       | 0.9        | V      |
| V INHI   | INx, StopL, StopR high level input                                        | 2     | 5       |            | V      |
| I OUTI   | OUTx max +/- output current (CMOS output) (sum for all outputs max. 50mA) |       | 0..10   | +/-20      | mA     |
| T ENV    | Environment temperature at rated current (no cooling)                     | -40   |         | +70        | °C     |

## 5  Functional Description

In  Figure  5.1  the  main  parts  oft  the  TMCM-302  module  are  shown.  The  module  mainly  consists  of three TMC428 motion controller, the TMCL program memory (EEPROM) and the host interfaces (RS232, RS-485 and CAN).

Figure 5.1: Main parts of the TMCM-302

<!-- image -->

## 5.1 System Architecture

The  TMCM-302  integrates  a  microcontroller  with  the  TMCL  (Trinamic  Motion  Control  Language) operating system. The motion control real-time tasks are realized by three TMC428.

## 5.1.1 Microcontroller

On this module, the Atmel ATmega32 is used to communicate with the host and the EEPROM and to control the  TMC428.  The  CPU  has  32Kbyte  flash  memory  and  a  1Kbyte  EEPROM.  The microcontroller runs the TMCL (Trinamic Motion Control Language) operating system which makes it possible to execute TMCL commands that are sent to the module from the host via the RS232, RS485 and CAN interface. These commands are interpreted by the microcontroller and then converted into SPI-datagrams which are then sent to the TMC428.

The flash ROM of the microcontroller holds the TMCL operating system and the EEPROM memory of the microcontroller is used to permanently store configuration data.

The TMCL operating system can be updated via the RS232 interface. Use the TMCL IDE to do this.

## 5.1.2 TMCL EEPROM

To store TMCL programs for stand alone operation the TMCM-303 module is equipped with a 16kByte EEPROM attached to the microcontroller. The EEPROM can store TMCL programs consisting of up to 2048 TMCL commands.

## 5.1.3 TMC428 Motion Controller

The TMC428 is a high-performance stepper motor control IC and can control up to three 2-phasestepper-motors. On the TMCM-302 three TMC428 are used to get fastest calculation of ramps and highest step frequencies. Motion parameters like speed or acceleration are sent to the TMC428 via SPI by the microcontroller. Calculation of ramps and speed profiles are done internally by hardware based on the target motion parameters.

## 5.1.4 Interface to the external drivers

Drivers  are  not  included  on  the  module.  To  drive  stepper  motors  with  this  module,  stepper  motor drivers  have  to  be  added  externally.  To  drive  a  stepper  motor  with  the  Step/Direction-Interface,  a power driver module has to be added, which can evaluate the Step/Direction-signals. Also stepper motor  drivers  with  an  SPI-Interface  can  be  added,  but  this  module  is  mainly  intended  for  use  with Step/Direction drivers.

## 5.2 Power Supply

The power supply for the TMCM-302 is +5VDC for module functionality. Please use all listed pins for the power supply inputs and ground parallel. Refer to 6 Putting the TMCM-302 into Operation.

Table 5.1: Pinning of Power supply

| Pin            | Function                                                                      |
|----------------|-------------------------------------------------------------------------------|
| 1, 3           | +5V DC (+/- 5%), I max =50mA power supply (plus current required for outputs) |
| 2, 4, 6, 8, 10 | Ground                                                                        |

## 5.3 Host Communication

Communication to a host takes place via one or more of the onboard interfaces. The module provides a  wide  range  of  different  interfaces,  like  CAN,  RS-232  and  RS-485.  The  following  chapters  explain how the interfaces are connected with the 68-pin connector.

## 5.3.1 CAN 2.0b

Table 5.2: Pinout for CAN Connection

|   Pin Number | Direction   | Name   | Limits   | Description        |
|--------------|-------------|--------|----------|--------------------|
|           65 | InOut       | CAN -  | -8…+18V  | CAN Input / Output |
|           67 | InOut       | CAN +  | -8…+18V  | CAN Input / Output |

Figure 5.2: Connecting CAN

<!-- image -->

## 5.3.2 RS-232

Table 5.3: Pinout for RS-232 Connection

| Pin Number     | Direction   | Name   | Limits   | Description          |
|----------------|-------------|--------|----------|----------------------|
| 66             | In          | RxD    | TTL      | RS-232 Receive Data  |
| 68             | Out         | TxD    | TTL      | RS-232 Transmit Data |
| 2, 4, 6, 8, 10 | In          | GND    | 0V       | Connect to ground    |

Note: The RS-232 must be operated with TTL-Levels (0V, 5V), since there is no level shifter onboard!

Figure 5.3: Connecting RS-232

<!-- image -->

## 5.3.3 RS-485

Table 5.4: Pinout for RS-485 Connection

| Pin Number     | Direction   | Name      | Limits   | Description                                                                          |
|----------------|-------------|-----------|----------|--------------------------------------------------------------------------------------|
| 64             | Out         | RS485_DIR | TTL      | Driver / Receiver enable for RS-485 Transceiver. 0: Receiver enable 1: Driver enable |
| 66             | In          | RxD       | TTL      | RS-485 Receive Data                                                                  |
| 68             | Out         | TxD       | TTL      | RS-485 Transmit Data                                                                 |
| 2, 4, 6, 8, 10 | In          | GND       | 0V       | Connect to ground                                                                    |

Note: The TMCM-302 Module does not contain any RS-485 transceivers!

Figure 5.4: Connecting the RS-485 interface

<!-- image -->

Via RS-485 Interface it is possible to build up systems with of 31 (with repeater 254) modules, which are addressable by one host.

## 5.4 Step-/Direction output

The TMCM-302 generates step- and direction output signals, which are pre-conditioned in order to directly be connected to microstep driver units with 5V inputs. See Figure 5.5 for the output timing. Some driver units might require inverters / level shifters in order to adapt step polarity and voltage. You can use standard open collector level shifters like the SN7407 or inverters like SN7406. These devices  allow  level  translation  to  12V  or  24V,  or  inversion  of  the  step  signal,  if  the  device  timing requires this. One 7406 or 7407 can shift all six output signals. In order not to loose any steps, please make sure that your driver unit can work with the step-to-direction delay and with the step impulse length.

Figure 5.5: Step-/Direction output signals

<!-- image -->

## 5.5 Connecting the drivers

Because there are no stepper motor drivers included on the TMCM302, an Add-On-Board has to be developed to drive the stepper motors. Some examples of Trinamic´s own driver modules are added below. Please refer to www.trinamic.com for more information. Normally, a step/direction interface is used to connect the driver. Using the SPI interface would also be possible, but is normally not used with this module (compare TMCM-301 for SPI applications).

## 5.5.1 Connecting  the  TMCM-302  to  a  power  driver  module  with Step/Direction-Interface

Table 5.5: Pinout for using the Step/Direction-Interface

|   Pin Number | Direction   | Name    | Limits   | Description                   |
|--------------|-------------|---------|----------|-------------------------------|
|           31 | Out         | STEP_M0 | TTL      | Step-Signal for Driver 0      |
|           33 | Out         | DIR_M0  | TTL      | Direction-Signal for Driver 0 |
|           35 | Out         | STEP_M1 | TTL      | Step-Signal for Driver 1      |
|           37 | Out         | DIR_M1  | TTL      | Direction-Signal for Driver 1 |
|           39 | Out         | STEP_M2 | TTL      | Direction-Signal for Driver 2 |
|           41 | Out         | DIR_M2  | TTL      | Serial Clock for the Driver 2 |

Figure 5.6: Application Environment using the Step/Direction-Interface

<!-- image -->

Examples: Connection  of  the  TMCM-302  with  the  Monopack2  (power  driver  module  with  a Step/Direction-Interface), TMCM-023 or TMCM-013.

<!-- image -->

Figure 5.8: Application with TMCM-023 with 3 Step/Direction-Interfaces (5V inputs required, please see latest TMCM-023 documentation for modifications)

<!-- image -->

Figure 5.9: Application with TMCM-013 with a Step/Direction-Interface

<!-- image -->

## 5.5.2 Connecting the TMCM-302 to drivers with an SPI-Interface

The pins connecting the TMCM-302 with the Add-On-Board using the SPI-Interface are listed in Table 5.6.

Table 5.6: Pinout for the connections using the SPI-Interface

|   Pin Number | Direction   | Name       | Limits   | Description               |
|--------------|-------------|------------|----------|---------------------------|
|           20 | Out         | nSCS0      | TTL      | Chip Select for Driver 0  |
|           22 | Out         | nSCS1      | TTL      | Chip Select for Driver 1  |
|           24 | Out         | nSCS2      | TTL      | Chip Select for Driver 2  |
|           26 | Out         | SPI_M0_OUT | TTL      | SPI Data In for Driver 0  |
|           28 | Out         | SPI_M0_CLK | TTL      | SPI Clock for Driver 0    |
|           30 | Out         | SPI_M1_OUT | TTL      | SPI Data In for Driver 1  |
|           32 | Out         | SPI_M1_CLK | TTL      | SPI Clock for Driver 1    |
|           34 | Out         | SPI_M2_OUT | TTL      | SPI Data In for Driver 2  |
|           36 | Out         | SPI_M2_CLK | TTL      | SPI Clock for Driver 2    |
|           38 | In          | SPI_M0_IN  | TTL      | SPI Data Out for Driver 0 |
|           40 | In          | SPI_M1_IN  | TTL      | SPI Data Out for Driver 1 |
|           42 | In          | SPI_M2_IN  | TTL      | SPI Data Out for Driver 2 |

Figure 5.10: Application Environment using the SPI-Interface

<!-- image -->

## Example : Using the TMC236 stepper motor driver with an SPI-interface

<!-- image -->

GND: Pin 2, 4, 6, 8

5V    : Pin 1, 3

Figure 5.11: Application with an SPI-stepper motor driver

## 5.6 Ramp Profiles

The  speed  profile  is  automatically  worked  out  by  the  TMCM-302  from  the  values  for  the  minimum speed,  maximum  speed  and  acceleration  specified    by  the  user  with  the  TMCL.  Two  modes  of operation for the course of velocity are available for selection.

- In the Ramp-Mode the maximum acceleration (a\_max), maximum (v\_max) and minimum (v\_min) speed and the target position (x\_target) are specified to calculate the actual velocity. By giving the target position, the TMCM-302 calculates the speed profile of each stepper motor from the current position and the specified parameters and immediately converts it into a motion sequence. In Figure 5.12, an example of the motion sequence is shown. Here the  motor accelerates from t0 onwards with a\_max till it reaches v\_max in t1, then it moves itself with v\_max up to t2, it then slows down with a\_max till it reaches v\_min in t3 and then it travels with v\_min till it reaches its
- target (x\_target) in t 4 .
- On the right side of the Figure it can be seen that v\_max cannot be reached if a\_max is too small or the target (x\_target) is too close.
- In Velocity-Mode the acceleration and the maximum speed is specified in the TMCM-302. Then the motor accelerates immediately with the specified value to the maximum speed and continues to run at constant speed till new values are sent to the TMCM-302. In Figure 5.13 the motion sequence for the velocity mode is shown as an example. Here the motor accelerates with a\_max till it reaches the maximum velocity and then continues to run at constant speed with v\_max till new a\_max and v\_max is specified. On the right side and at t5 the v\_max is
- not distinctly reached if a new parameter is prematurely given.

Figure 5.12: Velocity profile in ramp mode

<!-- image -->

Figure 5.13: Velocity profile in velocity mode

<!-- image -->

A detailed explanation of the parameters and its calculation is given in the software description.

## 5.7 Reference switches

With reference switches, an interval for the movement of the motor or the zero point can be defined. Also a step loss of the system can be detected, e.g. due to overloading or manual interaction, by using a travel-switch.

Table 5.7: Pinout reference switches

|   Pin Number | Direction   | Name   | Limits   | Description                               |
|--------------|-------------|--------|----------|-------------------------------------------|
|           19 | In          | STOP0L | TTL      | Left reference switch input for Motor #0  |
|           21 | In          | STOP0R | TTL      | Right reference switch input for Motor #0 |
|           23 | In          | STOP1L | TTL      | Left reference switch input for Motor #1  |
|           25 | In          | STOP1R | TTL      | Right reference switch input for Motor #1 |
|           27 | In          | STOP2L | TTL      | Left reference switch input for Motor #2  |
|           29 | In          | STOP2R | TTL      | Right reference switch input for Motor #2 |

Note: The TMCM-302 does not contain any pullup resistors for the reference switches!

## 5.7.1 Left and right limit switches

The TMCM-302 can be configured so that a motor has a left and a right limit switch (Figure 5.14). The motor stops when the traveler has reached one of the limit switches.

Figure 5.14: Left and right limit switches

<!-- image -->

## 5.7.2 Triple Switch Configuration

It  is  possible to program a tolerance range around the reference switch position. This is useful for a triple switch configuration, as outlined in Figure 5.15. In that configuration two switches are used as automatic stop switches, and one additional switch is used as the reference switch between the left stop switch and the right stop switch. The left stop switch and the reference switch are wired together. The center switch (travel switch) allows for a monitoring of the axis in order to detect a step loss.

Figure 5.15: Limit switch and reference switch

<!-- image -->

## 5.7.3 One Limit Switch for circular systems

If a circular system is used (Figure 5.16), only one reference switch is necessary, because there are no end-points in such a system.

Figure 5.16: One reference switch

<!-- image -->

Note: In the actual TMCL, a function is available, which turns the motor left until the reference switch has been detected. Then the actual and target position are set to zero. In the future, two and three limit switches will also be supported.

## 5.8 Serial Peripheral Interface (SPI)

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

## 5.9 Port Expansion

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

## 5.10 Miscellaneous Connections

Table 5.10: Miscellaneous Connections

|   Pin Number | Direction   | Name     | Limits   | Description        |
|--------------|-------------|----------|----------|--------------------|
|           17 | In          | Reset    | TTL      | Reset, active low  |
|           18 | Out         | Alarm    | TTL      | Alarm, active high |
|           43 | In          | Shutdown | TTL      | Shutdown TMCM-302  |

## 6  Putting the TMCM-302 into Operation

On the basis of a small example it is shown step by step how the TMCM-302 is set into operation. Experienced users could skip this chapter and proceed to chapter 6:

Example:  The  following  application  is  to  implement  with  the  TMCL-IDE  Software  development environment in the TMCM-302 module. For data transfer between the host PC and the module the RS-232 interface is employed.

A formula how 'speed' is converted into a physical unit like rotations per seconds can be found in chapter 7.1.

- Turn Motor 0 left with speed 500
- Turn Motor 2 with speed 500, acceleration 5 and move between position +10000 and -10000.
- Turn Motor 1 right with speed 500

Step 1:

Connect the RS-232 Interface as specified in 5.3.2.

Step 2:

Step 3:

Step 4:

Step 5:

Step 6:

Connect the motor drivers as specified in 5.4

Connect the power supply.

+5 VDC to pins 1 or 3

Ground to pins 2, 4, 6, 8 or 10

Connect the motor supply voltage to your driver module

Switch on the power supply and the motor supply. An on-board LED should starting to flash. This indicates the correct configuration of the microcontroller.

Start  the  TMCL-IDE  Software  development  environment.  Open  file  test2.tmc.  The following source code appears on the screen:

A description for the TMCL commands can be found in Appendix A.

```
//test2.tmc - A simple example for using TMCL and TMCL-IDE SAP Mode, 0, VelocityMode //Set velocity Mode ROL 0, 500 //Rotate motor with speed 500 WAIT TICKS, 0, 500 MST 0 SAP Mode, 1, VelocityMode //Set velocity Mode ROR 1, 500 //Rotate to other direction with same speed WAIT TICKS, 0, 500 MST 1 SAP Mode, 2, RampMode //Set Ramp Mode SAP VMax, 2, 500 //Set max. Velocity SAP AMax, 2, 5 //Set max. Acceleration Loop:   MVP ABS, 2, 10000 //Move to Position 10000 WAIT POS, 2, 0 //Wait until position reached MVP ABS, 2, -10000 //Move to Position -10000 WAIT POS, 2, 0 //Wait until position reached JA Loop //Infinity Loop
```

Step 7: Click on Icon ' Assemble ' to convert the TMCL into machine code. Then download the program to the TMCM-302 module via the Icon 'Download'.

Step 8: Press Icon 'Run'. The desired program will be executed.

A documentation about the TMCL operations can be found in 'TMCL Reference and Programming Manual'.  The  next  chapter  discusses  additional  operations  to  turn  the  TMCM-302  into  a  high performance motion control system.

## 7  TMCM-302 Operational Description

## 7.1 Calculation:  Velocity  and  Acceleration  vs.  Microstepand Fullstep-Frequency

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

To calculate the fullstep-frequency from the microstep-frequency, the microstep-frequency must be multiplied with the number of microsteps per fullstep.

<!-- formula-not-decoded -->

The change in the pulse rate per time unit (pulse frequency change per second - the acceleration a is given by

<!-- formula-not-decoded -->

This results in an acceleration in fullsteps of:

<!-- formula-not-decoded -->

## Example:

f\_CLK = 16 MHz velocity = 1000 a\_max = 1000 pulse\_div = 1 ramp\_div = 1 usrs = 6

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

If the stepper motor has e.g. 72 fullsteps per rotation, the number of rotations of the motor is:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## 8  TMCL

TMCL, the TRINAMIC Motion Control Language, is described in a separate documentation, the TMCL Reference and Programming Manual. This manual is provided on the TMC TechLib CD and on the web site of TRINAMIC: www.trinamic.com.

Please refer to these sources for updated data sheets and application notes.

The TMC TechLib CD-ROM including data sheets, application notes, schematics of evaluation boards, software of evaluation boards, source code examples, parameter calculation spreadsheets, tools, and more is available from TRINAMIC by request to info@trinamic.com

## 9  Revision History

## 9.1 Documentation Revision

Table 9.1: Documentation Revisions

|   Version | Date       | Author   | Description                        |
|-----------|------------|----------|------------------------------------|
|      0.1  | 01.07.2002 | ME/AR    | Initial Version                    |
|      1    | 01.09.2003 | OK       | Error corrections                  |
|      1.01 | 03.09.2003 | OK       | Error corrections                  |
|      1.02 | 17.03.2004 | OK       | Errors in tables 1 and 7 corrected |
|      1.04 | 13.02.2005 | OK       | Ordering information added         |
|      1.05 | 22.06.2006 | OK       | Error concerning inputs corrected  |
|      1.1  | 19.05.2006 | HC       | Major Revision                     |
|      1.11 | 12.07.2006 | HC       | Connecting the drivers updated     |
|      1.12 | 06.12.2006 | HC       | Step-/Dir applications corrected   |

## 9.2 Firmware Revision

Table 9.2: Firmware Revisions

|   Version | Comment         | Description                        |
|-----------|-----------------|------------------------------------|
|      3.24 | Initial Release | Please refer to TMCL documentation |

## 10  References

[TMCL]

TMCL manual (see http://www.trinamic.com)