<!-- lastmod 2023-08-03 -->
## TMCC160 DATASHEET

Integrated motionCookie™ microsystem with 3 -Phase BLDC/PMSM gate driver for up to 24V and 1A gate current with a complete servo controller software stack.

<!-- image -->

## Features &amp; Benefits

Integrated BLDC or PMSM Servo Controller Integrated Gate Driver up to 1A Gate Current Voltage R ange 7…24V Integrated FOC Controller UART, CAN or SPI Interface Hall Interface ABN Incremental Encoder Interface Integrated Switching Regulator

## Block Diagram

Figure 1: TMCC160 System Block Diagram

<!-- image -->

## Applications

Robotics Pump, Fan Applications Industrial Automation Medical, Lab Automation CNC Machines E-Bikes Battery Powered Devices

## Description

The TMCC160 is a ready to use PMSM/ BLDC motor controller in a miniaturized 12x17mm²  system in a package. It integrates a powerful programmed microcontroller  with  efficient  state  of the  art  commutation  algorithm,  gate driver, different interface options as well as a step down converter which generates the digital power supply, measurement and diagnostic features.

<!-- image -->

## 1 Table of Contents

| TMCC160 DATASHEET .........................................1         | TMCC160 DATASHEET .........................................1         | TMCC160 DATASHEET .........................................1         |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Applications.......................................................1 | Applications.......................................................1 | Applications.......................................................1 |
| Features & Benefits..........................................1       | Features & Benefits..........................................1       | Features & Benefits..........................................1       |
| Description........................................................1 | Description........................................................1 | Description........................................................1 |
| Block Diagram...................................................1    | Block Diagram...................................................1    | Block Diagram...................................................1    |
| Table of Contents .........................................2         | Table of Contents .........................................2         | Table of Contents .........................................2         |
| Pin Assignments ...........................................1         | Pin Assignments ...........................................1         | Pin Assignments ...........................................1         |
| 2.1                                                                  | Package Pin Numbering.......................1                        | Package Pin Numbering.......................1                        |
| 2.2                                                                  | Package Pin Description.......................2                      | Package Pin Description.......................2                      |
| 2.3                                                                  | Wide Range of Control Algorithms .....3                              | Wide Range of Control Algorithms .....3                              |
| System Overview ..........................................5          | System Overview ..........................................5          | System Overview ..........................................5          |
| 3.1                                                                  | Block Diagram .......................................5               | Block Diagram .......................................5               |
| 3.2                                                                  | System Architecture .............................5                   | System Architecture .............................5                   |
| 3.3                                                                  | Hall-Sensor Configuration ...................6                       | Hall-Sensor Configuration ...................6                       |
| 3.4                                                                  | Encoder Configuration .........................7                     | Encoder Configuration .........................7                     |
| External Components..................................8               | External Components..................................8               | External Components..................................8               |
| 4.1                                                                  | Gate Driver Charge Pump (TMC6130)                                    | 8                                                                    |
| 4.2                                                                  | DC/DC Converter (3.3V)......................10                       | DC/DC Converter (3.3V)......................10                       |
| 4.3                                                                  | CORTEX M4 Crystal .............................12                    | CORTEX M4 Crystal .............................12                    |
| 4.4                                                                  | Supply Filter .........................................12            | Supply Filter .........................................12            |
| 4.5                                                                  | Power MOSFET Bridge........................15                        | Power MOSFET Bridge........................15                        |
| 4.5.1                                                                | 4.5.1                                                                | Direct Coil Current Measurement15                                    |
| 4.5.2                                                                | 4.5.2                                                                | RecommendedSchematic for Direct                                      |
| Coil Measurement......................................15             | Coil Measurement......................................15             | Coil Measurement......................................15             |
| 4.5.3                                                                | 4.5.3                                                                | Sense Resistor Selection...............16                            |
| 4.5.4                                                                | 4.5.4                                                                | Calculating Power Losses .............17                             |
| 4.5.5                                                                | 4.5.5                                                                | Current Amplifier...........................17                       |
| 4.5.6                                                                | 4.5.6                                                                | Single Shunt Measurement..........17                                 |
| 4.5.7                                                                | 4.5.7                                                                | Sense Resistor Selection...............18                            |
| 4.5.8                                                                | 4.5.8                                                                | Dead Time Logic.............................18                       |
| 4.5.9                                                                | 4.5.9                                                                | Power MOSFET Selection..............18                               |

4.5.11

4.6

Power  Supply  Filtering  Capacitors

21

Interface ...............................................  21

4.6.1

RS232  ...............................................  21

4.6.2

4.6.3

4.6.4

4.6.5

4.6.6

4.6.7

4.6.8

4.6.9

4.6.10

RS485  ...............................................  22

RS485 Bus Structure  ......................  23

RS485 Bus Termination................. 23

No Floating Bus Lines  ....................  23

CAN 2.0B Interface ........................  24

CAN Bus Structure .........................  24

CAN Bus Termination  ....................  25

Number of Nodes ..........................  25

Analog Input ...................................  26

4.7

EEPROM  ................................................  27

4.8

Brake Chopper ....................................  28

4.8.1

Brake resistor selection ................  28

4.8.2

4.9

Brake Chopper Example ............... 29

Absolute Maximum Ratings  ............... 30

Operational Ratings....................................  31

Mechanical Dimensions  .............................  33

6.1

TMCC160 Package Footprint ............. 33

6.1.1

Soldering Profile ............................  35

SUPPLEMENTAL DIRECTIVES ..................... 36

7.1

ESD Sensitive Device  ...........................  36

7.2

Disclaimer ............................................  36

Revision History ..........................................  37

8.1

Document Revision  .............................  37

8.2

8.3

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

Hardware Revision  ..............................  37

Software Revision ...............................  37

5

6

7

8

## PRODUCT DETAILS I

## 2 Pin Assignments

TMCC160 has two pad sizes. The pads on the edges measure 0.43mm x 0.43mm with 1mm pitch. The inner pads measure 1.93mm x 1.93mm.

Please  refer  to  chapter  TMCC160  Package  Footprint  for  further  information  about  the  package dimensions.

## 2.1 Package Pin Numbering

<!-- image -->

2

Figure 1 TMCC160 pin assignments / bottom view

## 2.2 Package Pin Description

| Package Pin Description   | Package Pin Description   | Package Pin Description   | Package Pin Description                                                                                                                      |
|---------------------------|---------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Pad Number                | Type                      | Name                      | Function                                                                                                                                     |
| 1                         | Out (D)                   | RS485_DIR                 | RS485 transceiver direction output.                                                                                                          |
| 2                         | In (D)                    | CSN_SPI1                  | SPI1 chip select input (low active) (slave interface).                                                                                       |
| 3                         | In (D)                    | SCLK_SPI1                 | SPI1 serial clock input (slave interface).                                                                                                   |
| 4                         | In (D)                    | MOSI_SPI1                 | SPI1 serial input (slave interface).                                                                                                         |
| 5                         | Out (D)                   | MISO_SPI1                 | SPI1 serial output (slave interface).                                                                                                        |
| 6                         | In (A)                    | I_V                       | Analog current sense amplifier input for PMSM phase V.                                                                                       |
| 7                         | In (A)                    | I_U                       | Analog current sense amplifier input for PMSM phase U.                                                                                       |
| 8                         | In (A)                    | TEMP                      | Analog input for temperature measurement.                                                                                                    |
| 9                         | In (A)                    | AIN                       | General purpose analog input.                                                                                                                |
| 10                        | Out (D)                   | Brake                     | PWMoutput for brake chopper circuit.                                                                                                         |
| 11                        | In (D)                    | REFL                      | Left reference switch input.                                                                                                                 |
| 12                        | In (D)                    | REFR                      | Right reference switch input.                                                                                                                |
| 13                        | Out                       | DA                        | 3.3V switch regulator diode anode.                                                                                                           |
| 14                        | Out                       | SW                        | 3.3V switch regulator switch cathode.                                                                                                        |
| 15                        | Out                       | LS1                       | Low side N-channel MOSFET gate output phase 1 (U).                                                                                           |
| 16                        | In                        | BM1                       | MOSFET bridge output phase 1 (U).                                                                                                            |
| 17                        | Out                       | HS1                       | High side N-channel MOSFET gate output phase 1 (U).                                                                                          |
| 18                        | Out                       | HS3                       | High side N-channel MOSFET gate output phase 3 (W).                                                                                          |
| 19                        | In                        | BM3                       | MOSFET bridge output phase 3 (W).                                                                                                            |
| 20                        | Out                       | LS3                       | Low side N-channel MOSFET gate output phase 3 (W).                                                                                           |
| 21                        | Out                       | VCP_REG                   | Gate driver linear regulator output. Connect 4.7µF capacitor.                                                                                |
| 22                        | In                        | VCP                       | Gate driver charge pump input.                                                                                                               |
| 23                        | Out                       | VCP_SW                    | Gate driver charge pump output.                                                                                                              |
| 24                        | In (D)                    | HALL_1                    | Hall sensor 1 input.                                                                                                                         |
| 25                        | In (D)                    | HALL_2                    | Hall sensor 2 input.                                                                                                                         |
| 26                        | In (D)                    | HALL_3                    | Hall sensor 3 input.                                                                                                                         |
| 27                        | In (D)                    | ENC_N                     | Encoder N (index) input.                                                                                                                     |
| 28                        | In (D)                    | ENC_B                     | Encoder B input.                                                                                                                             |
| 29                        | In (D)                    | ENC_A                     | Encoder A input.                                                                                                                             |
| 30                        | Out (D)                   | MOSI_SPI0                 | SPI0 serial output (EEPROM master).                                                                                                          |
| 31                        | In (D)                    | MISO_SPI0                 | SPI0 serial input (EEPROM master).                                                                                                           |
| 32                        | Out (D)                   | SCLK_SPI0                 | SPI0 serial clock output (EEPROM master).                                                                                                    |
| 33                        | Out (D)                   | CSN_SPI0                  | SPI0 chip select output (low active) (EEPROM master).                                                                                        |
| 34                        | IO (D)                    | ENABLE                    | Motor driver enable (high active). ENABLE signal is also connected to the internal µC. Please connect ENABLE pin only to open drain outputs. |
| 35                        | Out                       | XTAL                      | Crystal oscillator output.                                                                                                                   |
| 36                        | In                        | EXTAL                     | Crystal oscillator input.                                                                                                                    |
| 37                        | Out (D)                   | CAN_TXD                   | CAN interface output. Connect to CAN transceiver.                                                                                            |

Table Key: (D): digital IO ,

| Package Pin Description   | Package Pin Description   | Package Pin Description   | Package Pin Description                                    |
|---------------------------|---------------------------|---------------------------|------------------------------------------------------------|
| Pad Number                | Type                      | Name                      | Function                                                   |
| 38                        | In (D)                    | CAN_RXD                   | CAN interface input. Connect to CAN transceiver.           |
| 39                        | Out (D)                   | TXD                       | UART output. Connect to RS232/RS485 transceiver.           |
| 40                        | In (D)                    | RXD                       | UART input. Connect to RS232/RS485 transceiver.            |
| 41                        | In (D)                    | SWDCLK                    | Please do not connect.                                     |
| 42                        | IO (D)                    | SWDIO                     | Please do not connect.                                     |
| 43                        |                           | VM                        | Motor supply voltage.                                      |
| 44                        | In                        | VCC                       | 3.3V digital supply voltage.                               |
| 45                        |                           | GND                       | System ground connection.                                  |
| 46                        |                           | GND                       | System ground connection.                                  |
| 47                        | Out                       | LS2                       | Low side N-channel MOSFET gate output phase 2 (V).         |
| 48                        | In                        | BM2                       | MOSFET bridge output phase 2 (V).                          |
| 49                        | Out                       | HS2                       | High side N-channel MOSFET gate output phase 2 (V).        |
| 50                        | In (A)                    | RS+                       | Positive current sense input for single shunt measurement. |
| 51                        | In (A)                    | RS-                       | Negative current sense input for single shunt measurement. |

(A): analog IO

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 2.3 Wide Range of Control Algorithms

The  TMCC160  is  a  ready  to  use  PMSM/  BLDC  motor  controller  in  a  miniaturized  12x17mm² package. It integrates a powerful programmed microcontroller with efficient state of the art commutation algorithm, gate driver, measurement and diagnostic features, different interface options as well as a step down converter which generates the digital power supply.

TMCC supports FOC and six-step mode

Scope of TMCL Operating System

TMCC160 supports state of the art field oriented control algorithm (FOC) using hall or encoder signals for PMSM motors as well as block hall commutation (six step  mode)  for  BLDC  motors.  Current-,  velocity-  and  position  controller  are implemented for all commutation modes. They can be parameterized via the installed TMCL protocol.

Only few external hardware components are needed to build a complete servo drive without spending time developing complicated control and communication software. With the programmed operating system, TMCL, it is possible to directly connect a host PC to the TMCC160 via one of the supported interface connections. All parameters for motion control and global functions can be configured by only reading or writing registers.

- i Software customization and custom package labeling are available upon request.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 3 System Overview

## 3.1 Block Diagram

Figure 2: TMCC160 System Block Diagram

<!-- image -->

## 3.2 System Architecture

Only  a  few  external  components  are  needed  to  build  a  complete  closed-loop  system  with maximum flexibility. To interconnect TMCC160 with a host PC or microcontroller, the following interfaces  are  available:  UART(RS232,  RS485),  CAN,  SPI.  An  analog  input  supports  simple standalone applications.

Avoiding Power Overshoots

TMCL storage in external EEPROM

To avoid power supply overshoots during deceleration/ energy feedback from the motor, TMCC160 provides a brake chopper output which can be connected to  a  low  side  N-channel  MOSFET.  The  brake  chopper  duty  cycle  will  be automatically controlled depending on the supply voltage.

TMCL  programs  can  be  stored  in  an  external  EEPROM.  Programs  can  be automatically executed after power up or triggered from the host system.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 3.3 Hall-Sensor Configuration

For  applications  with  reduced  requirements  concerning  positioning  accuracy  and  low  speed behavior a hall-sensor configuration is the most cost efficient option. Most BLDC/ PMSM motors already include hall-sensors for commutation.

## TMCC160 Block Diagram in Hall-Sensor Configuration

Figure 3: TMCC160 Hall-Sensor Block Diagram

<!-- image -->

Depending  on  the  used  motor,  the  customer  can  use  a  direct  coil  current measurement with external current sensors for field oriented control; typically used  for  Permanent  Magnet  Synchronous  Motors  (PMSM)  or  single  shunt measurement if block hall/six step mode is configured in TMCC160 software (typical used for Brushless DC motors, BLDC).

## Special Areas of Concern !

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 3.4 Encoder Configuration

For applications which requires high positioning accuracy and a smooth run at low speed a motor with encoder is mandatory. TMCC160 supports incremental ABN encoders with a resolution of up  to  16000  lines.  Additional  hall-sensors  or  encoder  N-channel  can  be  used  for  encoder initialization after power up.

## TMCC160 Block Diagram in Encoder Configuration

Figure 4: TMCC160 Encoder Block Diagram

<!-- image -->

- i If encoder configuration is used motor will be controlled by field oriented control, FOC.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4 External Components

## 4.1 Gate Driver Charge Pump (TMC6130)

For the external N-channel power MOSFET bridge, TMCC160 generates a 12V gate source voltage for high and low side MOSFETs (N-channel). The gate source voltage will also be maintained if the supply voltage falls below 12V. External component example is shown in schematic below. Buffer capacitor for charge pump linear regulator (C3) should not be smaller than 4.7µF.

If  the supply voltage does not fall below 12V charge pump circuitry can be left away without performance loss (connect VCP to VM, omit D1, D2, C2, VCP\_SW not connected).

Figure 5: Charge Pump Example Schematic

<!-- image -->

- i A component list example is provided on the next page.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

Table 1: Charge Pump Component List Example

| Charge Pump Component List Example   | Charge Pump Component List Example   | Charge Pump Component List Example   | Charge Pump Component List Example   |
|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|
| COMPONENT                            | DESCRIPTION                          | VENDOR                               | ORDER CODE                           |
| C1                                   | 2 X 4.7µF/35V ceramic capacitor      | Murata Electronics                   | GRM219R6YA475MA73D                   |
|                                      |                                      | TDK                                  | C2012X7R1V475K125AC                  |
| C2                                   | 33nF/50V ceramic capacitor           | Multicomp                            | MC0603B333J500CT                     |
|                                      |                                      | AVX Corporation                      | 06035C333JAT2A                       |
| C3                                   | 4.7µF/25V ceramic capacitor          | Kemet                                | C0805C475K3PACTU                     |
|                                      |                                      | Murata Electronics                   | GRM21BR61E475KA12L                   |
|                                      |                                      | TDK                                  | CGA4J1X7R1E475K125AC                 |
| D1, D2                               | 60V/1A                               | Vishay                               | MSS1P6 (assembled on EVAL board)     |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.2 DC/DC Converter (3.3V)

The 3.3V digital supply is generated with an internal step down switch regulator from VM. The step down converter works with a PWM frequency of 2.2MHz and supports a maximum output current of 500mA. A collection of external components like coils and diodes are listed below. Equivalent  components  can  be  used.  The  3.3V  can  also  be  used  to  supply  further  external components like current-, hall sensors etc. if the consumption does not exceed 400mA.

## NOTE:

- → Place D1, L1, C1-C2 close to the TMCC160 pins SW, DA and VCC

Figure 6: DC/DC Converter Example Schematic

<!-- image -->

Table 2:DC/DC Component List Example

| DC/DC Component List Example   | DC/DC Component List Example   | DC/DC Component List Example   | DC/DC Component List Example     |
|--------------------------------|--------------------------------|--------------------------------|----------------------------------|
| COMPONENT                      | DESCRIPTION                    | VENDOR                         | Series                           |
| C1                             | 100nF/16V ceramic capacitor    |                                |                                  |
| C2                             | 10µF/16V ceramic capacitor     |                                |                                  |
| L1                             | 6.8µH/700mA                    | Murata Electronics             | LQH43C (assembled on EVAL board) |
|                                |                                | Würth Elektronik               | WE-TPC, WE-PD2                   |
|                                |                                | Toko                           | A916CY                           |
| D1                             | 40V/500mA low capacitance      | Vishay                         | MSS1P6 (assembled on EVAL board) |
|                                |                                | Diodes Inc.                    | SBR1U40LP                        |
|                                |                                | ON Semi                        | MBRM140                          |
|                                |                                | Diodes Inc.                    | DFLS140                          |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.3 CORTEX M4 Crystal

For system clock generation an external crystal is mandatory. As default, a crystal with 16MHz frequency  and  a  frequency  stability  of  ±50ppm  should  be  used.  Crystal  frequency  can  be modified for customized firmware versions.  Load capacitors C1, C2 depends on the used crystal. Values are typically in a range of 8-22pF.

## NOTE:

- → Place C1-C2, Q1 close to the TMCC160 pins

Figure 7: Crystal Example Schematic

<!-- image -->

Table 3: Crystal Component List Example

| Crystal Component List Example   | Crystal Component List Example   | Crystal Component List Example   | Crystal Component List Example   |
|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| COMPONENT                        | DESCRIPTION                      | VENDOR                           | Series                           |
| C1                               | 15pF/50V ceramic capacitor       |                                  |                                  |
| C2                               | 15pF/50V ceramic capacitor       |                                  |                                  |
| Q1                               | 16MHz crystal                    | NDK                              | NX3225SA                         |

## 4.4 Supply Filter

To  ensure  proper  operation  VM  and  3.3V  supply  voltage  must  be  stable.  TMCC160  already includes small buffer capacitors to stabilize the supply voltages. Nevertheless are additional capacitors mandatory.

## NOTE:

- → Place C1 -C4 close to the TMCC160 pins VCC and VM.

## Configuration for step down converter output

For a step down converter output current of 500mA a minimal total capacity of 10µF (C1 + C2) should be selected.

- i VM should be stabilized with minimum 2pcs. 4.7µF ceramic capacitors.

Figure 8: Supply Filter Example Schematic

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

<!-- image -->

Table 4: Supply Filter Component List Example

| Supply Filter Component List Example   | Supply Filter Component List Example   | Supply Filter Component List Example   | Supply Filter Component List Example   |
|----------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|
| COMPONENT                              | DESCRIPTION                            | VENDOR                                 | Series                                 |
| C1                                     | 100nF/16V ceramic capacitor            |                                        |                                        |
| C2                                     | 10µF/16V ceramic capacitor             |                                        |                                        |
| C3                                     | 4.7µF/35V ceramic capacitor            | Murata Electronics                     | GRM219R6YA475MA73D                     |
|                                        |                                        | TDK                                    | C2012X7R1V475K125AC                    |
| C4                                     | 4.7µF/35V ceramic capacitor            | Murata Electronics                     | GRM219R6YA475MA73D                     |
|                                        |                                        | TDK                                    | C2012X7R1V475K125AC                    |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.5 Power MOSFET Bridge

TMCC160 provides a powerful gate driver for a three phase bridge using N-channel MOSFETs only. The system is capable to drive MOSFETs with up to 350nC gate charge. The gates of the MOSFETs will be charged with a current of ±1A. This helps to reduce dynamic losses and to building high efficient systems in a wide power range.

4.5.1 Direct Coil Current Measurement

4.5.2 Recommended Schematic for Direct Coil Measurement

Current Sense Inputs

A  power MOSFET schematic including two phase direct coil current amplifier (e.g. AD8418) is shown below. The coil  current measurement amplifiers can be powered by the 3.3V supply of the TMCC160.

## NOTE:

- → Integrate coil current amplifiers in motor coil connection U and V.
- i Direct coil current measurement is recommended for field oriented control (FOC) in hall- or encoder mode. It can also be used in block hall commutation (six step mode).

Figure 9: Direct Coil Current Measurement Schematic

<!-- image -->

## NOTE:

- → Please  note  that  the  current  amplifier  has  to  be  configured  for  bidirectional measurement.  A  sample  schematic  for  direct  coil  current  measurement  with AD8418 is published in the TMCC160-EVAL board schematic.

The input voltage range of the TMCC160 current sense inputs I\_U, I\_V is 0..VCC. Both signals will be routed to the TMCC160 microcontroller and converted with a resolution of 12 bits. For a symmetric motor current measurement in positive and negative direction, the current amplifier must output VCC/2 at zero motor current to meet the TMCC160 offset configured.

## NOTE:

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.5.3 Sense Resistor Selection

- → Keep a safety margin for the current control of about 10% in order to avoid reaching the internal TMCC160 ADC limits. This margin shall be respected for the current limit setting.

## TMCC160 Direct Coil Current Signal Example

Figure 10: Direct Coil Current Signal Example

<!-- image -->

Use  formula  below  to  calculate  the  sense  resistors  for  direct  coil  current measurement.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Formulae 1: Direct Coil Current Sense Resistor Calculation

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

0V

0

## 4.5.4 Calculating Power Losses

The power losses which are generated in the sense resistor can be calculated with formula below.

<!-- formula-not-decoded -->

Formulae 2: Direct Coil Current Sense Resistor Losses

## 4.5.5 Current Amplifier

| Current Amplifier   | Current Amplifier   | Current Amplifier   | Current Amplifier   |
|---------------------|---------------------|---------------------|---------------------|
| COMPONENT           | DESCRIPTION         | VENDOR              | Series              |
|                     | AD8418              | ANALOG DEVICES      |                     |
|                     | AD8206              | ANALOG DEVICES      |                     |

## 4.5.6 Single Shunt Measurement

The  single  shunt  measurement  uses  only  one  resistor  in  the  bottom  GND connection of the power MOSFET bridge. TMCC160 supports a high speed, high bandwidth, and low offset current sense amplifier with configurable input range for signal conditioning.

Figure 11: Single Shunt Measurement Schematic

<!-- image -->

## NOTE:

- → Single  shunt  measurement  is  only  possible  for  block  hall  (six  step  mode) commutation.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.5.7 Sense Resistor Selection

## 4.5.8 Dead Time Logic

## 4.5.9 Power MOSFET Selection

- → A low pass with cut off frequency of approximately 16MHz should be placed on TMCC160 input RS+, RS- to filter high frequency.
- → Place RC low pass close to the TMCC160.

Gain  of  the  internal  current  sense  amplifier  can  be  configured  by  software. Following gain values are available:

Gain values: 8/ 10.3/ 13.3/ 17.2/ 22.2/ 28.7/ 37/ 47.8

The accuracy of the amplifier is ±3%. The maximum input voltage between RS+ and RS- depends on the configured amplifier gain:

<!-- formula-not-decoded -->

Formulae 3: Maximum Input Voltage Calculation

With  the  given 𝑈𝑀𝑎𝑥 it  is  possible  to  calculate  the  sense  resistor  for  a  given maximum  target  current.  Calculation  formula  for 𝑅𝑆𝑒𝑛𝑠𝑒 is  given  below.  The maximum current can be measured in both directions depending on the power MOSFET state.

<!-- formula-not-decoded -->

Formulae 4: Single Shunt Sense Resistor Calculation

To protect each half bridge against cross-conduction during switching high- and low-side MOSFETs, TMCC160 includes a programmable dead time delay between high- and low-side MOSFET of the same phase. During the dead time high- and low-side MOSFETs are off. The dead time can be configured in software. Dead time:

<!-- formula-not-decoded -->

- i To avoid high losses during switch event a proper dead time adaption is needed. A value of 1.1µS is a good start value for further tuning.

TMCC160  provides  an  integrated  3-phase  gate  driver  for  pure  N-channel MOSSFET bridge. The gate driver is capable to drive the high- and low-side gate with up to 1A source, sink. This allows fast and high efficient switching of power MOSFETs  with  a  gate  charge  up  to  350nC.  To  drive  the  high-  and  low-side MOSFETs down to a supply voltage of 7V a charge pump is integrated. Gatesource voltage of high- and low-side gate driver output is 12V.

The duration of the switching event depends on the total gate charge of the MOSFET and can be calculated with the formula below.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

Diagram: MOSFET

Parameters

During Switch

Event

## 4.5.10 Gate Driver Clamp Diodes

<!-- formula-not-decoded -->

Formulae 5: MOSFET Switch Slope Calculation

Figure 12: MOSFET Parameters During Switch Event

<!-- image -->

To  avoid  that  negative  voltage  spikes  (high  frequency  oscillation)  reach  the TMCC160 gate driver output pins during switch events, high- and low-side gate series resistors (R) as well as optional clamp diodes (D) on low-side gate output are recommend.

The negative voltage oscillation roots from the recovery effect of the MOSFETs body diodes during switching. A clamp circuit for BMx pins is integrated in the TMCC160.

## Depending on the gate charge, the following gate series resistors are recommended:

Table 5: Gate Charge Resistor and Clamp Diode Recommendation

| Gate Charge Resistors Table   | Gate Charge Resistors Table    | Gate Charge Resistors Table   |
|-------------------------------|--------------------------------|-------------------------------|
| GATE CHARGE:                  | MIN GATE SERIES RESISTOR [Ω] : | LOW SIDE CLAMP DIODE:         |
| <50nC                         | 10R                            | optional                      |
| 50..100nC                     | 4.7R                           | recommended                   |
| >100nC                        | 2.2R                           | required                      |

## NOTE:

- → Values in table above have to be validated in layout.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

- → It is important to place the clamp diode close to LSx pin.

## Diagram

4.5.11 Power Supply Filtering Capacitors

## 4.6 Interface

The TMCC160 system in a package supports RS232, RS485, CAN and SPI interface as well as an analog input which can be used for control and parameterization.

4.6.1

- RS232

For  easy  intercommunication  with  a  microcontroller  or  a  host  PC  TMCC160 system  in  a  package  provides  a  3.3V  UART  interface  which  can  be  directly connected to a microcontroller UART (3.3V TTL level) or connected to an external RS232 transceiver supporting a full RS232 signal interface.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

Figure 13: Gate Charge Resistor and Clamp Diode Example Schematic

<!-- image -->

To ensure stable power supply voltage, please ensure that enough power supply filtering capacitors are available in the system to absorb kinetic energy during deceleration and load control. Additional a regulated power supply is recommended, especially if the system is operated close to the maximum supply voltage or a long power supply line is used.

For power supply filtering capacitor value, the following rule of thumb can be used to calculate the system capacity (depending on the motor velocity 𝑰 𝑺𝒖𝒑𝒑𝒍𝒚 varies between 10% to 100% of the motor current):

<!-- formula-not-decoded -->

i To reduce power losses in the capacitors and increase voltage stability use low ESR-capacitor type.

Figure 14: RS232 Interface Example Schematic

<!-- image -->

## NOTE:

- → Circuit above shows an example of a RS232 interface configuration with external transceiver powered by the TMCC160 internal generated 3.3V supply voltage. Circuit  above  only  shows  an  example,  many  other  RS232  transceivers  are available.

For remote control and host communication the TMCC160 provides a two wire RS485 bus interface. An external RS485 transceiver is required to integrate the TMCC160 into a RS485 bus structure. An example circuit is shown below, several other RS485 transceivers are available. 4.6.2 RS485

Figure 15: RS485 Interface Example Schematic

<!-- image -->

## NOTE:

- → TMCC160 is capable to supply a RS485 transceiver with the internal 3.3V power supply.
- → For a proper RS485 operation following items should be taken into account when setting up an RS485 network:

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

4.6.3 RS485 Bus Structure

4.6.4 RS485 Bus Termination

4.6.5 No Floating Bus Lines

Configuration Option 1

## Configuration Option 2

The network topology should follow a bus structure as closely as possible. That is, the connection between each node and the bus itself should be as short as possible. Basically, it should be short compared to the length of the bus.

Figure 16: RS485 Bus Interface Structure

<!-- image -->

Especially for longer busses and/or multiple nodes connected to the bus and/or high  communication  speeds,  the  bus  should  be  properly  terminated  at  both ends. Therefore, a 120 Ohm termination resistors at both ends of the bus have to be added.

Avoid floating bus lines while neither the host/master nor one of the slaves along the  bus  line  is  transmitting  data  (all  bus  nodes  switched  to  receive  mode). Floating bus lines may lead to communication errors. In order to ensure valid signals on the bus it is recommended to use a resistor network connecting both bus lines in order to define logic levels appropriately.

Two configuration options can be recommended. They are explained on the next page.

Add  resistor  (Bias)  network  on one side  of  the  bus,  only  (120R  termination resistor still at both ends):

<!-- image -->

GND

Bus lines with resistor (Bias) network on one side, only

Or  add  resistor  (b ias)  network  at  both  ends  of  the  bus  (like  Profibus™ termination):

## 4.6.6 CAN 2.0B Interface

## 4.6.7 CAN Bus Structure

Figure 17: Bus lines with resistor (Bias) network at both ends

<!-- image -->

Certain  RS485  interface  converters  available  for  PCs  already  include  these additional resistors (e.g. USB-2-485 with bias network at one end of the bus).

TMCC160 supports a full CAN 2.0B interface with up to 1Mbit/s. An external CAN transceiver is needed to integrate TMCC160 into a CAN bus network. It is possible to use TMCC160 internal generated 3.3V supply to power the IO voltage of a CAN transceiver like in picture below.

Figure 18: CAN Interface Example Schematic

<!-- image -->

## NOTE:

- → The network topology should follow a bus structure as closely as possible. The connection between each node and the CAN bus itself should be as short as possible to avoid signal reflections.

Figure 19: CAN Bus Structure

<!-- image -->

4.6.8 CAN Bus Termination

4.6.9 Number of Nodes

CAN bus must be properly terminated at both ends with a resistor of 120R between CANH, CANL signal.

TMCC160  software  supports  CAN  addresses  up  to  0x7FF  (2047)  but  the maximum number of nodes highly depends on the used transceiver and the bus structure itself.

- i Please see datasheet of used CAN transceiver for maximum number of CAN nodes.

## 4.6.10 Analog Input

The analog input signal of the TMCC160 can be used as a target value to e.g. control torque, velocity or other parameters. The analog input voltage is routed directly to the TMCC160 µC and will be converted with a resolution of 12 bit. AIN is designed for a voltage range between 0 and Vcc (3.3V). For higher voltages use a voltage divider plus optional protection diode as in example below.

<!-- image -->

## 4.7 EEPROM

To store and execute TMCL programs a EEPROM is needed. Interconnection between TMCC160 and  EEPROM  is  done  via  SPI\_0  interface.  To  ensure  compatibility  between  TMCC160  default firmware and EEPROM, please use dedicated Atmel EEPROM listed below. It is possible to use TMCC160 internal generated 3.3V supply to power the EEPROM.

<!-- image -->

Figure 20: EEPROM Connection Schematic

| COMPONENT   | DESCRIPTION   | VENDOR   | Series   |
|-------------|---------------|----------|----------|
|             | AT25128B-SSHL | Atmel    |          |

IC1

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.8 Brake Chopper

A servo system feeds back energy to the power supply line during deceleration and load control. The energy can lead to a voltage rise on the power supply system if it is not dissipated. The voltage overshoot of a system without brake chopper depends on the motor deceleration time, kinetic energy and the servo module buffer capacity. The brake chopper dissipates this energy from the system, and thus avoids system damage.

Brake Chopper Output

Brake Chopper Example Schematic

## 4.8.1 Brake resistor selection

TMCC160 provides a continuous motor voltage monitoring (20kHz) as well as a brake  chopper  output.  The  brake  chopper  output  pin  is  controlled  from  a comparator implemented in TMCC160 software. Voltage threshold, hysteresis, enable/ disable is configurable via software.

Motor  voltage  should  be  limited  to  90%  -  95%  of  the  maximum  possible operation voltage.

<!-- image -->

For a full speed ramp stop, the brake resistor should be able to dissipate the complete kinetic energy which is fed back during deceleration ramp ( 𝑡 𝑑𝑒𝑐. ).

Formulae 6: Brake Chopper Resistor Calculation

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.8.2 Brake Chopper Example

The  figure  below  shows  brake  chopper  in  operation.  The  supply  voltage threshold is  configured  at  approximately  26V.  The  yellow  line  represents  the supply voltage of the TMCC160.

Figure 22: Supply Voltage Monitoring (Activated Brake Chopper)

<!-- image -->

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 4.9 Absolute Maximum Ratings

## NOTE:

- → The maximum values must NOT be exceeded; under no circumstance.

Table 6: TMCC160 Absolute Maximum Ratings

| Absolute Maximum Ratings   | Absolute Maximum Ratings   | Absolute Maximum Ratings   | Absolute Maximum Ratings   | Absolute Maximum Ratings   | Absolute Maximum Ratings   |
|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| Parameter                  | SYMBOL                     | MIN                        | TYP                        | MAX                        | U ni t                     |
| Supply voltage, t<200ms    | VM                         | -0.3                       |                            | 35                         | V                          |
| Logic supply voltage       | VCC                        | -0.3                       |                            | 3.8                        | V                          |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 5 Operational Ratings

The operational ratings show the intended - or the characteristic - ranges and should be used as design values.

## NOTE:

- → The maximum values must NOT be exceeded; under no circumstance.

| Operational Ratings                                                                                                    | Operational Ratings   | Operational Ratings   | Operational Ratings                     | Operational Ratings   | Operational Ratings   |
|------------------------------------------------------------------------------------------------------------------------|-----------------------|-----------------------|-----------------------------------------|-----------------------|-----------------------|
| Parameter                                                                                                              | SYMBOL                | MIN                   | TYP                                     | MAX                   | Unit                  |
| Supply voltage                                                                                                         | VM                    | 7V                    | 24                                      | 28                    | V                     |
| Logic supply voltage                                                                                                   | VCC                   | 3.0                   | 3.3                                     | 3.6                   | V                     |
| Logic                                                                                                                  |                       |                       |                                         |                       |                       |
| Logic input voltage                                                                                                    | V I                   | -0.3                  |                                         | VCC+0.3               | V                     |
| Logic input high                                                                                                       | V IH                  | 0.7*VCC               |                                         |                       | V                     |
| Logic input low                                                                                                        | V IL                  |                       |                                         | 0.35*VCC              |                       |
| Analog input voltage (pin: I_V, I_U, TEMP, AIN)                                                                        | V IA                  | -0.3                  |                                         | VCC+0.3               | V                     |
| Gate Driver                                                                                                            |                       |                       |                                         |                       |                       |
| Gate driver supply (internal generated)                                                                                | V CP_REG              | 10                    | 12                                      | 13                    | V                     |
| Voltages on low side driver pins high (LSx)                                                                            | V OLSH                | 10                    | 12                                      | 13                    | V                     |
| Voltages on low side driver pins low (LSx)                                                                             | V OLSL                | -0.3                  | 0                                       |                       | V                     |
| Voltages on high side driver pins high (HSx)                                                                           | V OHSH                | VM+10                 | VM+12                                   | VM+13                 | V                     |
| Voltages on high side driver pins low (HSx)                                                                            | V OHSL                |                       | VBM                                     |                       |                       |
| Pull-up ON resistance high-side gate driver                                                                            | R ONHS                | 2.0                   | 4.0                                     | 9.2                   | Ω                     |
| Pull-up ON resistance low-side gate driver                                                                             | R ONLS                | 2.4                   | 4.0                                     | 7.0                   | Ω                     |
| Pull-down ON resistance high-side gate driver (excluding 2R2 BM resistor)                                              | R OFFHS               | 2.0                   | 5.0                                     | 9.2                   | Ω                     |
| Pull-down ON resistance low-side gate driver                                                                           | R OFFLS               | 1.5                   | 4.0                                     | 5.7                   | Ω                     |
| Turn ONgate driver peak current                                                                                        | I ONP                 |                       | -1                                      | -1.4                  | A                     |
| Turn OFF gate driver peak current                                                                                      | I OFFP                |                       | 1                                       | 1.6                   | A                     |
| Rise time (C=1nF, output 20% to 80%)                                                                                   | t r                   | 6                     | 7                                       | 15                    | ns                    |
| Fall time (C=1nF, output 20% to 80%)                                                                                   | t f                   | 4                     | 7                                       | 15                    | ns                    |
| Programmable dead time: DEAD_TIME [2:0]: [011] = 1.10µs default value. [000] [001] [010] [011] [100] [101] [110] [111] | t dead                | -25%                  | 0.00 0.51 0.80 1.10 1.67 2.30 3.40 6.90 | +25%                  | µs                    |
| Gate Driver, continued                                                                                                 | V VDS_MON             |                       |                                         |                       | V                     |
| Programmable drain-source voltage used for short to GND detection: VDSMON [2:0]: [111] = 2V default value.             |                       |                       |                                         |                       |                       |

Table 7: Operational Ratings

| Operational Ratings                                                                                                            | Operational Ratings   | Operational Ratings                | Operational Ratings                     | Operational Ratings                | Operational Ratings   |
|--------------------------------------------------------------------------------------------------------------------------------|-----------------------|------------------------------------|-----------------------------------------|------------------------------------|-----------------------|
| [000] [001] [010] [011] [100] [101] [110] [111]                                                                                |                       | 0.40 0.60 0.85 1.05 1.25 1.50 1.70 | dis. 0.50 0.75 1.00 1.25 1.50 1.75 2.00 | 0.60 0.90 1.15 1.45 1.75 2.00 2.30 |                       |
| Programmable drain-source voltage monitor blanking time: VDS_BLANK_TIME [1:0]: [10] = 3,4µs default value. [00] [01] [10] [11] | T VDS_BL              | 0.60 1.28 2.55 5.10                | 0.80 1.70 3.40 6.80                     | 1.00 2.13 4.25 8.50                | µs                    |
| 3.3V Switch Regulator                                                                                                          |                       |                                    |                                         |                                    |                       |
| Switch regulator output voltage                                                                                                | U 3.3VOUT             | 3.14                               | 3.3                                     | 3.47                               | V                     |
| 3.3V switch regulator output current                                                                                           | I 3.3VOUT             |                                    |                                         | 500                                | mA                    |
| 3.3V switch regulator frequency                                                                                                | f                     | 1.8                                | 2.25                                    | 2.8                                | MHz                   |
| Temperature                                                                                                                    |                       |                                    |                                         |                                    |                       |
| Ambient temperature (limited by CPU Flash memory upper die junction temperature limit of 95°C)                                 | T J                   | -40                                |                                         | 85                                 | °C                    |
| Storage temperature                                                                                                            | T STG                 | -40                                |                                         | 95                                 | °C                    |
| ESD-Protection (Human body model, HBM)                                                                                         | V ESD                 |                                    |                                         | 2 (tbd)                            | kV                    |

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

## 6 Mechanical Dimensions

## 6.1 TMCC160 Package Footprint

The TMCC160 uses a special LGA package (similar to QFNs) with 51 leads.

## LGA51 Package Drawing

<!-- image -->

<!-- image -->

Figure 23: TMCC160 LGA51 Package Drawing

<!-- image -->

Table 8 Package Dimensions

| TMCC160 Package Dimension   | TMCC160 Package Dimension   | TMCC160 Package Dimension   | TMCC160 Package Dimension   | TMCC160 Package Dimension   |
|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
| Attribute                   | SYMBOL                      | DIMENSION [mm]              | DIMENSION [mm]              | DIMENSION [mm]              |
| Attribute                   | SYMBOL                      | MIN                         | TYP                         | MAX                         |
| Total Thickness             | A                           | -                           | -                           | 1.4                         |
| Body Size                   | D                           | 17                          | 17                          | 17                          |
| Body Size                   | E                           | 12                          | 12                          | 12                          |
| Lead Width                  | W                           | 0.38                        | 0.43                        | 0.48                        |
| Lead Length                 | L                           | 0.38                        | 0.43                        | 0.48                        |

| Lead Pitch                  | e   | 1    |
|-----------------------------|-----|------|
| Lead Count                  | n   | 51   |
| Edge Ball Center to Center  | D1  | 16   |
| Edge Ball Center to Center  | E1  | 5    |
| Body Center to Contact Ball | SD  | -    |
| Body Center to Contact Ball | SE  | 0.5  |
| Package Edge Tolerance      | aaa | 0.1  |
| Mold Flatness               | bbb | 0.2  |
| Coplanarity                 | ddd | 0.08 |

## Package Code

Table 9: Package Code

| Package Code   | Package Code   | Package Code      | Package Code   |
|----------------|----------------|-------------------|----------------|
| Type           | Package        | Temperature range | Code & marking |
| TMCC160-LC     | LGA-51 (RoHS)  | -40 °C …+8 5°C    | TMCC160-LC     |

## Marking Code

Table 10 Marking Code

| Marking Code   | Marking Code   | Marking Code      | Marking Code     |
|----------------|----------------|-------------------|------------------|
| Type           | Picture        | Date code         | Lot number       |
| TMCC160-LC     |                | WW: week YY: year | LLLL: Lot number |

## 6.1.1 Soldering Profile

TMCC160 system in a package is compatible with the JESD22 reflow soldering profile.

## 7 SUPPLEMENTAL DIRECTIVES

<!-- image -->

Read the entire documentation before you make use of this product:

Keep this manual and all other applicable and related documents complete, legible and accessible to the specified user at all times.

Failure  to  observe  the  Supplemental  Directives  could  result  in  damage  to product and things; to property or persons; or economic loss.

<!-- image -->

i

TRINAMIC is not liable for damages incurred as a result of improper use or disregard of the instructions provided in this document.

In case you encounter difficulties or need additional advice, please contact our support team via: www.trinamic.com. Thank you.

## 7.1 ESD Sensitive Device

<!-- image -->

## 7.2 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG. Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

© 2015 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany

This product is an ESD-sensitive CMOS device. It is sensitive to electrostatic discharge.

- Provide effective grounding to protect personnel and machines.
- Ensure work is performed in a non-static environment.
- Use personal ESD control footwear and ESD wrist straps, if necessary.

Failure to do so can result in defects, damages and decreased reliability.

## 8 Revision History

## 8.1 Document Revision

Table 11 Document revision

|   Version | Date           | Author JM   | Description                                                                                                                                  |
|-----------|----------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|      0.9  | 2015-APRIL- 09 | JM          | Initial version.                                                                                                                             |
|      0.91 | 2015-APRIL- 10 | JM          | Add periphery sample schematics.                                                                                                             |
|      0.92 | 2015-MAY-26    | JM          |                                                                                                                                              |
|      0.93 | 2015-JULY-15   | JM          | Add brake chopper, revise gate driver parameters                                                                                             |
|      0.94 | 2015-AUG-15    | JM          | Add chapter soldering profile Add chapter software revision Add chapter ESD Sensitive Device Add chapter Disclaimer Add chapter Package Code |
|      0.95 | 2015-SEPT-03   | JM          | Add chapter Clamp Diode                                                                                                                      |
|      0.96 | 2015-OCT-30    | JP          | Formatting and Short Specification                                                                                                           |
|      1    | 2015-NOV-11    | BD, JM      | Final Edits                                                                                                                                  |

## 8.2 Hardware Revision

Table 12 Hardware revision

| Version         | Date       | Description           |
|-----------------|------------|-----------------------|
| TMCC160-ES V1.0 | 2015-APRIL | Initial Prototype Lot |

## 8.3 Software Revision

Table 13 Hardware revision

| Version   | Date         | Description                     |
|-----------|--------------|---------------------------------|
| V2.07     | 2015-JUN-11  | Initial TMCC160 Firmware        |
| V2.08     | 2015-SEPT-21 | Changes Brake Chopper Algorithm |