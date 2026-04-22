<!-- lastmod 2025-03-05 -->
## TMCM-1290 Modbus Firmware Manual

Firmware Version V1.02 | Rev 0: 02/25

The TMCM-1290 is a single axis controller/driver module for 2-phase bipolar stepper motors. The TMCM-1290 Modbus /uniFB01rmware can control the module using the Modbus RTU protocol, supporting all features that can also be used from the TMCL direct mode and making use of the TMC5240 motion controller and motor driver. Dynamic current control, and quiet, smooth, and e/uniFB03cient operation are combined with StealthChop, DcStep, StallGuard2, and CoolStep features.

<!-- image -->

- Broad Market

## Applications

- System Integrators · Lab Automation
- Packaging ·
- Textile
- Life Sciences

## Features

- Supply voltage 24V DC
- Single axis stepper motor control
- Modbus RTU
- Additional inputs and outputs
- Hostinterface: RS485 or UART (TTL)
- EightPoint ramps
- StallGuard2
- CoolStep
- StealthChop
- ABN encoder interface
- Semiconductor Handling
- Multi-Axis Applications

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2025 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at www.analog.com.

<!-- image -->

<!-- image -->

- Pumps and Motor Drives

## Contents

| 1 Preface . . . . . . . . . . . .                                                                          | 1 Preface . . . . . . . . . . . .                                                                          | 1 Preface . . . . . . . . . . . .                                                                          | 3     |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-------|
| 1.1 General Features of this Modbus Implementation 1.2 Abbreviations Used in this Manual . . . . . . . . . | 1.1 General Features of this Modbus Implementation 1.2 Abbreviations Used in this Manual . . . . . . . . . | 1.1 General Features of this Modbus Implementation 1.2 Abbreviations Used in this Manual . . . . . . . . . | 3     |
| . . . . . . . . . . .                                                                                      | . . . . . . . . . . .                                                                                      | . . . . . . . . . . .                                                                                      | 4     |
| 1.3 Firmware Update . . .                                                                                  | 1.3 Firmware Update . . .                                                                                  | 1.3 Firmware Update . . .                                                                                  | 4     |
| 2 Communication 2.1 Data Representation . . . . . . .                                                      | 2 Communication 2.1 Data Representation . . . . . . .                                                      | . .                                                                                                        | 5 5   |
| 2.2 Modbus Functions . . .                                                                                 | 2.2 Modbus Functions . . .                                                                                 | . . . . .                                                                                                  |       |
|                                                                                                            |                                                                                                            |                                                                                                            | 5     |
| . . 2.2.1 03 (03 ): Read Holding                                                                           | . . 2.2.1 03 (03 ): Read Holding                                                                           | . . 2.2.1 03 (03 ): Read Holding                                                                           | 5     |
| h Registers 2.2.2 04 (04 h ): Read Input Registers .                                                       | h Registers 2.2.2 04 (04 h ): Read Input Registers .                                                       | h Registers 2.2.2 04 (04 h ): Read Input Registers .                                                       | 5     |
| . 2.2.3 06 (06 h ): Write Single Register . .                                                              | . 2.2.3 06 (06 h ): Write Single Register . .                                                              | . 2.2.3 06 (06 h ): Write Single Register . .                                                              | 5     |
| 2.2.4 08 (08 h ): Diagnostics . .                                                                          | 2.2.4 08 (08 h ): Diagnostics . .                                                                          | 2.2.4 08 (08 h ): Diagnostics . .                                                                          | 5     |
| . . . . . . . . 2.2.5 11 (0B h ): Get Comm Event Counter . 2.2.6 16 (10 ): Write Multiple Registers . .    | . . . . . . . . 2.2.5 11 (0B h ): Get Comm Event Counter . 2.2.6 16 (10 ): Write Multiple Registers . .    | . . . . . . . . 2.2.5 11 (0B h ): Get Comm Event Counter . 2.2.6 16 (10 ): Write Multiple Registers . .    | 6     |
| h . . . .                                                                                                  | h . . . .                                                                                                  | h . . . .                                                                                                  | 6     |
| 2.2.7 17 (11 h ): Report Server ID . . . 2.2.8 22 (16 ): Mask Write Register . .                           | 2.2.7 17 (11 h ): Report Server ID . . . 2.2.8 22 (16 ): Mask Write Register . .                           | 2.2.7 17 (11 h ): Report Server ID . . . 2.2.8 22 (16 ): Mask Write Register . .                           | 6 6   |
| h Multiple Registers                                                                                       | h Multiple Registers                                                                                       | h Multiple Registers                                                                                       | 6     |
| 2.2.9 23 (17 h ): Read/Write Modbus Registers                                                              | 2.2.9 23 (17 h ): Read/Write Modbus Registers                                                              | 2.2.9 23 (17 h ): Read/Write Modbus Registers                                                              |       |
|                                                                                                            |                                                                                                            |                                                                                                            | 7 7   |
| 3                                                                                                          | 3                                                                                                          | 3                                                                                                          |       |
| 3.1 Registers 0...511: TMCL Axis Parameters . 3.2 Registers 512...1023: TMCL User Variables                | 3.1 Registers 0...511: TMCL Axis Parameters . 3.2 Registers 512...1023: TMCL User Variables                | 3.1 Registers 0...511: TMCL Axis Parameters . 3.2 Registers 512...1023: TMCL User Variables                | 7     |
| 3.3 Register 1024: General Purpose Outputs . .                                                             | 3.3 Register 1024: General Purpose Outputs . .                                                             | 3.3 Register 1024: General Purpose Outputs . .                                                             | 8     |
| 3.4 Register 1025: General Purpose Inputs . 3.5 Register 1026...1035: Analog Inputs . .                    | 3.4 Register 1025: General Purpose Inputs . 3.5 Register 1026...1035: Analog Inputs . .                    | 3.4 Register 1025: General Purpose Inputs . 3.5 Register 1026...1035: Analog Inputs . .                    | 8     |
| .                                                                                                          | .                                                                                                          | .                                                                                                          | 8 8   |
| 3.6 Register 1280/1281: Move Absolute . 3.7 Register 1282/1283: Move Relative . .                          | 3.6 Register 1280/1281: Move Absolute . 3.7 Register 1282/1283: Move Relative . .                          | 3.6 Register 1280/1281: Move Absolute . 3.7 Register 1282/1283: Move Relative . .                          | 9     |
| 3.8 Register 1284/1285: Rotate . . . . .                                                                   | 3.8 Register 1284/1285: Rotate . . . . .                                                                   | 3.8 Register 1284/1285: Rotate . . . . .                                                                   |       |
| 3.9 Register 1286: Hard Stop . . .                                                                         | 3.9 Register 1286: Hard Stop . . .                                                                         | 3.9 Register 1286: Hard Stop . . .                                                                         | 9     |
|                                                                                                            |                                                                                                            |                                                                                                            | 9     |
| . . . . . . 3.10 Register 1287: Reference Search Start/Stop                                                | . . . . . . 3.10 Register 1287: Reference Search Start/Stop                                                | . . . . . . 3.10 Register 1287: Reference Search Start/Stop                                                | 9 9   |
| 3.11 Register 1288: Reference Search Status Tunnel . .                                                     | 3.11 Register 1288: Reference Search Status Tunnel . .                                                     | 3.11 Register 1288: Reference Search Status Tunnel . .                                                     |       |
| 3.12 Register 1296...1302: TMCL 3.13 Register 1304: Firmware Version                                       | 3.12 Register 1296...1302: TMCL 3.13 Register 1304: Firmware Version                                       | 3.12 Register 1296...1302: TMCL 3.13 Register 1304: Firmware Version                                       | 9     |
| .                                                                                                          | .                                                                                                          | .                                                                                                          | 9     |
| 3.14 Register 1500: I/O Pull-up Resistors . . . .                                                          | 3.14 Register 1500: I/O Pull-up Resistors . . . .                                                          | 3.14 Register 1500: I/O Pull-up Resistors . . . .                                                          | 10 10 |
| 3.15 Register 1501: I/O Mode . . 3.16 Register 1536: Server Address                                        | 3.15 Register 1501: I/O Mode . . 3.16 Register 1536: Server Address                                        | 3.15 Register 1501: I/O Mode . . 3.16 Register 1536: Server Address                                        | 10    |
| 3.17 Register 1537: Baudrate . .                                                                           | 3.17 Register 1537: Baudrate . .                                                                           | 3.17 Register 1537: Baudrate . .                                                                           |       |
|                                                                                                            |                                                                                                            | . . . .                                                                                                    | 10    |
| 3.18 Register 1538: Store Communication 3.19 Register 65280 (FF00 h ): Enter                               | 3.18 Register 1538: Store Communication 3.19 Register 65280 (FF00 h ): Enter                               | 3.18 Register 1538: Store Communication 3.19 Register 65280 (FF00 h ): Enter                               | 11    |
| Tables Index                                                                                               | Tables Index                                                                                               | Tables Index                                                                                               | 11    |
| 4                                                                                                          | 4                                                                                                          | 4                                                                                                          | 12    |
| 5                                                                                                          | 5                                                                                                          | Directives                                                                                                 | 13 13 |
| Supplemental 5.1                                                                                           | Producer Copyright                                                                                         | Information . . . . . . . . . . . . . . .                                                                  | 13    |
| 5.2                                                                                                        |                                                                                                            | . . . . . . . . Trademark                                                                                  | 13    |
| 5.3 5.4                                                                                                    |                                                                                                            | Designations and Symbols Target User . . . . . . . . . . . . . Disclaimer: Life Support Systems            | 13    |
|                                                                                                            |                                                                                                            | .                                                                                                          |       |
| 5.5                                                                                                        |                                                                                                            | . Intended Use . . . . . .                                                                                 | 13 13 |
| 5.7                                                                                                        | 5.6                                                                                                        | Disclaimer: Collateral Documents and Tools . .                                                             | 14    |
| 6                                                                                                          | Revision                                                                                                   | History Firmware Revision . . . . . . . . . .                                                              | 15 15 |
|                                                                                                            | 6.1 6.2                                                                                                    | Document Revision . . . . . . . . .                                                                        | 15    |

<!-- image -->

## 1 Preface

If necessary, it is always possible to turn the module into a TMCL module by loading the TMCM-1290 TMCL /uniFB01mware through its host interface using the /uniFB01rmware update function of the TMCL-IDE.

This document speci/uniFB01es all Modbus registers used by the Trinamic TMCM-1290 motor control module with Modbus /uniFB01rmware. The Modbus /uniFB01rmware is desgined to ful/uniFB01ll the Modbus RTU standard. This manual assumes that the reader is already familiar with the basics of the Modbus RTU protocol, de/uniFB01ned by the Modbus standard. Download the documents that de/uniFB01ne the Modbus standard free of charge from the website of the Modbus organization: https://www.modbus.org/. The Modbus /uniFB01rmware is built on the TMCL /uniFB01rmware. All TMCL axis parameters and user variables as well as other TMCL features are mapped to Modbus registers. This means that most TMCL features can be used through Modbus registers.

## 1.1 General Features of this Modbus Implementation

## Main Characteristics

- Communication interface: serial (RS485, RS232, or TTL UART)
- Communication according to Modbus RTU standard
- Supported transmission modes: RTU only
- Baud rates: 9600bps...1000000bps (set using special Modbus register)
- Byte coding: 1 start bit, 8 data bits, no parity bit, one stop bit (8N1)
- Server addresses: 1...247 (set using special Modbus register)
- Register address base: 0

## Supported Modbus Functions

- 04 h : Read Input Registers
- 03 h : Read Holding Registers
- 05 h : Write Single Register
- 0B h : Get Comm Event Counter
- 08 h : Diagnostics
- 10 h : Write Multiple Registers
- 16 h : Mask Write Register
- 11 h : Report Server ID
- 17 h : Read/Write Multiple Registers

<!-- image -->

## 1.2 Abbreviations Used in this Manual

Abbreviations

## 1.3 Firmware Update

Table 1: Abbreviations Used in this Manual

| ADU   | Application Data Unit         |
|-------|-------------------------------|
| HDLC  | High Level Data Link Control  |
| HMI   | Human Machine Interface       |
| I/O   | Input/Output                  |
| MB    | Modbus Protocol               |
| MBAP  | Modbus Application Protocol   |
| PDU   | Protocol Data Unit            |
| PLC   | Programmable Logic Controller |

Thesoftware running on the microprocessor consists of two parts, a bootloader and the Modbus /uniFB01rmware itself. Whereas the bootloader is installed during production and testing at TRINAMIC and remains untouched throughout the whole lifetime, the Modus /uniFB01rmware can easily be updated. Writing the value 1234 h to Modbus register FF00 h turns the module into the bootloader mode. After that, the new /uniFB01rmware can be loaded into the module using the /uniFB01rmware update function of the TMCL-IDE.

<!-- image -->

## 2 Communication

This section gives a brief introduction to Modbus communication and the Modbus functions supported by this implementation. Refer to the Modbus standards ( Modbus Application Protocol and Modbus over Serial Line ) for more information. These can be downloaded from https://www.modbus.org/tech.php.

## 2.1 Data Representation

OnmanyPLCs, the register indices start at 1, whereas in the protocol (the PDUs), the register indices start at 0. This manual refers to PDU addresses (starting from 0). So, with some PLCs and HMIs, 1 has to be added to the register addresses used in this manual.

To access the process data, the Modbus protocol uses a set of 16-bit wide registers. Each register is numbered using a 16-bit wide index (0...65535). To access 32-bit wide data, two adjacent registers are used together for one value. These should then always be accessed together using the appopriate Modbus functions. Do not access only one half of a 32-bit value. The /uniFB01rst of the two registers (the one with the lower index) is used for the least signi/uniFB01cant 16 bits.

## 2.2 Modbus Functions

The Modbus Application Protocol de/uniFB01nes a set of functions for accessing the process data. The TMCM1290 Modbus /uniFB01rmware implements a subset of these.

## 2.2.1 03 (03h): Read Holding Registers

This function reads one or more registers. In this implementation, it does the same as function 04 (Read Input Registers).

## 2.2.2 04 (04h): Read Input Registers

Read one or more registers. In this implementation, it does the same as function 03 (Read Holding Registers).

## 2.2.3 06 (06h): Write Single Register

This function writes to a single (16-bit) register. For writing a 32-bit value, use function 16 (Write Multiple Registers).

## 2.2.4 08 (08h): Diagnostics

- 00 h : Return query data.

Use the diagnostic function to read the error counters or to reset the module. The following subfunctions are supported:

- 01 h : Restart communications option. With request data /uniFB01eld set to FF h 00 h , the module is reset. Setting the request data /uniFB01eld to 00 h 00 h just resets the communication.
- 0A h : Clear counters and diagnostic register.
- 04 h : Force listen only mode. Use subfunction 01 h to terminate listen only mode.
- 0B h : Return bus message count.
- 0C h : Return bus communication error count.

<!-- image -->

- 0D h : Return bus exception error count.
- 0F h : Return server no response count.
- 0E h : Return server message count.
- 10 h : Return server NAK count.
- 12 h : Return bus character overrun count.
- 11 h : Return server busy count.

## 2.2.5 11 (0Bh): Get Comm Event Counter

Returns a status word (which is always 0 with the TMCM-1290 module) and the communication event counter. By fetching the current count before and after a series of messages, a client can determine whether the messages are handled normally by the server.

## 2.2.6 16 (10h): Write Multiple Registers

This functions writes to a set of registers. Use this also to write 32-bit values.

## 2.2.7 17 (11h): Report Server ID

Returns the module type (/uniFB01rst two bytes of the reply) and the /uniFB01rmware version (third and fourth byte of the reply).

## 2.2.8 22 (16h): Mask Write Register

Use this function to manipulate single bits of a 16-bit value by using an AND mask and an OR mask. All bits set to 1 in the AND mask are not changed, and all bits set to 0 in the AND mask take the value of the corresponding bit in the OR mask.

## 2.2.9 23 (17h): Read/Write Multiple Registers

This function /uniFB01rst writes a set of registers and then reads another set of registers.

<!-- image -->

## 3 Modbus Registers

## 3.1 Registers 0...511: TMCL Axis Parameters

All TMCL axis parameters (refer to the TMCM-1290 TMCL Firmware Manual for a list of all supported axis parameters) are mapped to Modbus registers 0 to 511. As most TMCL axis parameters are 32-bit values, each axis parameter is mapped to a pair of Modbus regsters. The /uniFB01rst register of each pair is 0 + 2 × Axis \_ Parameter . The following table shows some mapping examples.

Modbus Axis Parameter Mapping

Table 2: Modbus Axis Parameter Mapping

| TMCL Axis Parameter   | Modbus Register   |
|-----------------------|-------------------|
| 0                     | 0 and 1           |
| 1                     | 2 and 3           |
| 2                     | 4 and 5           |
| . . . . . .           | . . . . . .       |
| . . .                 | . . .             |
| 255                   | 510 and 511       |

To read an axis parameter, read the corresponding Modbus register pair. To write to an axis parameter, write to the corresponding Modbus register pair. The /uniFB01rst register of a register pair always contains the lower 16 bits of a 32-bit value.

## 3.2 Registers 512...1023: TMCL User Variables

All TMCL user variables (refer to the TMCM-1290 TMCL Firmware Manual ) are mapped to Modbus registers 512...1023. As all TMCL user variables are 32-bit values, each user variable is mapped to a pair of Modbus registers. The /uniFB01rst register of each pair is 512+2 × User \_ V ariable . Thefollowing table shows some mapping examples.

Modbus User Variable Mapping

| TMCL User Variable   | Modbus Register   |
|----------------------|-------------------|
| 0                    | 512 and 513       |
| 1                    | 514 and 515       |
| 2                    | 516 and 517       |
| . . .                | . . .             |
| . . .                | . . .             |
| . . .                | . . .             |
| 255                  | 1022 and 1023     |

Table 3: Modbus User Variable Mapping

<!-- image -->

To read a user variable, read the corresponding Modbus register pair. To write to a user variable, write to the corresponding Modbus register pair. The /uniFB01rst register of a register pair always contains the lower 16 bits of a 32-bit value.

## 3.3 Register 1024: General Purpose Outputs

Digital Outputs in Register 1024

Each bit of register 1024 controls one general purpose output. The outputs are mapped to the register bits as follows.

| Port   |   Bit |
|--------|-------|
| GPIO0  |     0 |
| GPIO1  |     1 |
| GPIO2  |     2 |

## 3.4 Register 1025: General Purpose Inputs

Each bit of register 1025 shows the state of one general purpose input. The inputs are mapped to the register bits as follows.

Digital Inputs in Register 1025

| Port   |   Bit |
|--------|-------|
| GPIO0  |     0 |
| GPIO1  |     1 |
| GPIO2  |     2 |

## 3.5 Register 1026...1035: Analog Inputs

Modbus registers 1026...1035 contain the values of the analog inputs. They are mapped as follows.

Analog Inputs

| Port        |   Register | Range/Units   |
|-------------|------------|---------------|
| AIN0        |       1026 | 0...4095      |
| Voltage     |       1034 | [0.1V]        |
| Temperature |       1035 | [°C]          |

## 3.6 Register 1280/1281: Move Absolute

Writing a 32-bit signed target position to register pair 1280/1281 executes an absolute move (like the MVP ABS command in TMCL) using the target position written to this register pair. Ramp parameters like acceleration, deceleration, and maximum positioning speed can be set using the corresponding axis parameters (which are mapped to Modbus registers 1...512).

<!-- image -->

## 3.7 Register 1282/1283: Move Relative

Writing a 32-bit signed target position to register pair 1282/1283 executes a relative move (like the MVP REL command in TMCL) using the target position written to this register pair. Ramp parameters like acceleration, deceleration, and maximum positioning speed can be set using the corresponding axis parameters (which are mapped to Modbus registers 1...512).

## 3.8 Register 1284/1285: Rotate

Writing a 32-bit signed target velocity to register pair 1284/1285 puts the drive into velocity mode and accelerates/decelerates the motor to the given target speed.

## 3.9 Register 1286: Hard Stop

Writing zero to register 1286 immediately stops the motor, without ramp.

## 3.10 Register 1287: Reference Search Start/Stop

Writing zero to register 1287 starts a reference search. Writing 1 to this register aborts a running reference search. The reference search can be con/uniFB01gured using the corresponding axis parameters (refer to the TMCM-1290 TMCL Firmware Manual for more about the reference search).

## 3.11 Register 1288: Reference Search Status

This read-only register shows the status of a running reference search. It reads zero when the reference search is not running (or /uniFB01nished). A value greater than zero shows that a reference search is in progress.

## 3.12 Register 1296...1302: TMCL Tunnel

- Register 1296: TMCL command opcode

Using these registers, TMCL commands can be executed directly. The registers are mapped as follows:

- Register 1297: Type parameter (MSB) and Motor/Bank parameter (LSB)
- Register pair 1300/1301: Result (32-bit signed)
- Register pair 1298/1299: Value parameter (32-bit signed)
- Register 1302: Status

Write to registers 1296...1299 using just one Write Multiple Registers command. After the command is executed, register pair 1300/1301 contains the result of the command and register 1302 contains the status code.

## 3.13 Register 1304: Firmware Version

TheMSBofthisread-only register contains the major version number. The LSB contains the minor version number.

<!-- image -->

## 3.14 Register 1500: I/O Pull-up Resistors

Use this register to control the switchable pull-up resistors on GPIO0, GPIO1, and GPIO2. Each bit controls one pull-up resistor. Setting a bit to 1 switches on the pull-up resistor.

Pull-up Resistors

| Port   |   Bit |
|--------|-------|
| GPIO0  |     0 |
| GPIO1  |     1 |
| GPIO2  |     2 |

## 3.15 Register 1501: I/O Mode

This register contains a bit vector that selects the input or output mode for each general purpose input/output. Setting a bit to 0 selects the input mode and setting a bit to 1 selects the output mode.

I/O Mode

| Port   |   Bit |
|--------|-------|
| GPIO0  |     0 |
| GPIO1  |     1 |
| GPIO2  |     2 |

## 3.16 Register 1536: Server Address

This register sets the Modbus server address. The server address can be a value between 1 and 247. The factory default setting is 1. Changing this register does not take effect immediately. First, the new setting has to be stored using register 1538. The new setting then becomes effective after the next reset.

## 3.17 Register 1537: Baudrate

Use this register to set the baudrate of the serial interface. Changing this register does not take effect immediately. First, the new setting has to be stored using register 1538. The new setting then becomes effective after the next reset. The following baud rates can be set:

Serial Baudrate Settings

|   Register 1537 |   Baudrate |
|-----------------|------------|
|               0 |       9600 |
|               1 |      14400 |
|               2 |      19200 |
|               3 |      28800 |
|               4 |      38400 |
|               5 |      57600 |

<!-- image -->

Register 1537

Baudrate

Table 4: Serial Baudrate Settings

|   6 |   76800 |
|-----|---------|
|   7 |  115200 |
|   8 |  230400 |
|   9 |  250000 |
|  10 |  500000 |
|  11 | 1000000 |

The factory default setting is 115200bps.

## 3.18 Register 1538: Store Communication Settings

Writing the magic number 1234 h permanently stores any changes made to registers 1536 and 1537. This is necessary to make any changes of the communication parameters become effective after the next reset.

## 3.19 Register 65280 (FF00h): Enter Bootloader Mode

Writing the magic number 1234 h to this register switches the module to bootloader mode. This is only necessary for performing a /uniFB01rmware update. Reading from this register is not possible.

<!-- image -->

| 4   | Tables Index                                                                                                                                          |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Abbreviations Used in this Manual . . 4 4 Serial Baudrate Settings . . . . . . . . 11 15                                                              |
| 2 3 | Modbus Axis Parameter Mapping . . 7 User Variable Mapping . . . 7 5 Firmware Revision . . . . . . . . . . . 6 Document Revision . . . . . . . . . . . |
|     | Modbus 15                                                                                                                                             |

<!-- image -->

## 5 Supplemental Directives

## 5.1 Producer Information

## 5.2 Copyright

Redistribution of sources or derived formats (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete data sheet, user manual, and documentation of this product including associated application notes; and a reference to other available product-related documentation.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources.

## 5.3 Trademark Designations and Symbols

This Modbus Firmware Manual is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by ADI Trinamic or by other manufacturers, whose products are used or referred to in combination with ADI Trinamic's products and ADI Trinamic's product documentation.

## 5.4 Target User

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

## 5.5 Disclaimer: Life Support Systems

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

## 5.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without ADI Trinamic's/Trinamic Motion Control GmbH &amp; Co. KG speci/uniFB01c written consent.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG conveys no patent, copyright, mask work right or other trademark right to this product. ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG assumes no liability for any patent and/or other trademark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

## 5.7 Collateral Documents and Tools

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.analog.com.

<!-- image -->

## 6 Revision History

## 6.1 Firmware Revision

Version

Description

Table 5: Firmware Revision

| V1.02   | 03/24   | Initial version   |
|---------|---------|-------------------|

## 6.2 Document Revision

Version

Description

Table 6: Document Revision

| Rev 0   | 02/25   | Initial version   |
|---------|---------|-------------------|

Date

Date

<!-- image -->