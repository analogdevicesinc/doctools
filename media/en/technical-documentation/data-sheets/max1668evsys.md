<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX1668 evaluation system (EV system) consists of a MAX1668 evaluation kit (EV kit) and a companion Maxim system management bus (SMBus™) interface board.

The MAX1668 EV kit is an assembled and tested PC board that demonstrates the MAX1668 temperature sensor. It monitors the temperature of four external diode-connected transistors and one internal diode, and converts the temperatures to 8-bit, 2-wire serial data. Four 2N3906 temperature-sensor transistors come soldered to the board in SOT23 packages, but for  more realistic  experiments, any of the transistors can be removed and the board connected through a twisted pair to remote diodes closer to your system.

The Maxim SMBus Interface Board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate an Intel SMBus 2-wire interface. Windows ® 95/98/2000 compatible software provides a user-friendly interface to exercise the MAX1668 features. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the MAX1668EVSYS for complete PC-based evaluation of the MAX1668. Order the MAX1668EVKIT if you already have an SMBus interface.

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp. I 2 C is a trademark of Philips Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     1 | 0.1 µ F, 16V X7R ceramic capacitor Taiyo Yuden EMK107BJ104KA or Murata GRM39X7R104K016 |
| C2-C5         |     4 | 2200pF, 50V X7R ceramic capacitors                                                     |
| J1            |     1 | 2x10 right-angle female receptacle                                                     |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                          |
| JU4           |     0 | Not installed                                                                          |

## Features

- ♦ Measures and Displays Remote and Internal Sensor Temperature
- ♦ Programmable Alarms and Configuration
- ♦ Operating Temperature Ranges -55°C to +125°C (Remote Sensor) 0°C to +70°C (Board)
- ♦ I 2 C™/SMBus Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Includes Windows 95/98/2000 Compatible Software and Demo PC Board

## Ordering Information

| PART         | SMBUS INTERFACE TYPE   | IC PACKAGE   |
|--------------|------------------------|--------------|
| MAX1668EVKIT | User Supplied          | 16 QSOP      |
| MAX1668EVSYS | MAXSMBUS               | 16 QSOP      |

Note: The MAX1668 EV kit software is provided with the MAX1668EVKIT. However, to use the software, the MAXSMBUS board is required to interface the EV kit to the computer.

## EV System Component List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX1668EVKIT |     1 | MAX1668 evaluation kit |
| MAXSMBUS     |     1 | SMBus interface board  |

## EV Kit Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                               |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Q1-Q4         |     4 | PNP bipolar transistors Fairchild MMBT3906, Motorola MMBT3906, Vishay/Lite-On MMBT3906, General Semiconductor MMBT3906, or Central Semiconductor CMPT3906 |
| SW1           |     1 | Slide switch                                                                                                                                              |
| U1            |     1 | MAX1668MEE                                                                                                                                                |
| None          |     1 | 3.5in software disk (MAX1668 EV kit)                                                                                                                      |
| None          |     3 | Shunts                                                                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1668 Evaluation System

## Component Suppliers

| SUPPLIER                  | PHONE        | FAX          |
|---------------------------|--------------|--------------|
| Central Semiconductor     | 515-435-1110 | 515-435-1824 |
| Fairchild                 | 408-822-2000 | 408-822-2102 |
| General Semiconductor     | 631-847-3000 | 631-847-3236 |
| Motorola                  | 303-675-2140 | 303-675-2150 |
| Taiyo Yuden               | 408-573-4150 | 408-573-4159 |
| Vishay Liteon/Diodes Inc. | 805-446-4800 | 805-446-4850 |

Note: Please indicate you are using the MAX1668 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before you begin, you will need the following equipment:

- IBM PC-compatible computer running Windows 95/98/2000
- Parallel-printer  port  (25-pin  socket  on  the  back  of the computer)
- Standard 25-pin, straight-through, male-to-female cable to connect the computer's parallel port to the Maxim SMBus interface board
- DC power supply capable of supplying +7V to +20V at 100mA for the SMBus interface board

## Procedure

- 1) Ensure switch SW1 on the MAX1668 EV kit is in the OFF position. Do not turn on the power until all connections are made.
- 2) Carefully connect the boards by aligning the MAX1668 EV kit's 20-pin connector with the 20-pin header of the MAXSMBUS interface board. Gently press them together. The two boards should be flush against each other.
- 3) Connect a cable from the computer's parallel port to the SMBus interface board. Use a 25-pin, straight-through, male-to-female cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel-printer port.
- 4) The MAX1668.EXE software program can be run

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

from the floppy or hard drive. Use the Windows Program Manager to run the program. If desired, you may use the INSTALL.EXE program to copy the files  and  create icons for them in the Windows 95/98 Start Menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

- 5) Connect the +7V to +20V DC power supply to the pads labeled POS9 and GND1 of the SMBus interface board.
- 6) Turn on the power supply.
- 7) Turn the EV kit on by moving SW1 to the ON position.
- 8) Start the MAX1668 program by opening its icon in the Start Menu.
- 9) Observe as the program automatically detects the MAX1668 address and starts the main program.

## Software Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab key to navigate with the arrow keys. Each of the buttons corresponds to bits in the command and configuration bytes. By clicking on them, the correct SMBus write operation is generated to update the internal registers.

The program continually polls the device for new temperature data and status, and monitors for alert conditions.  To  change the THIGH and TLOW threshold comparison registers, select the appropriate data field and type in the new value. Pressing Enter, after typing in the new values, updates the internal registers.

If an interrupt condition is generated by the temperature crossing one of the alarm threshold levels, the ALERT message will be displayed in the alert box. To clear the interrupt, first eliminate the condition that caused it, then click  on Read Alert .  This  action  reads  the  Alert Response address, returns the value of the current MAX1668 slave address, and clears the interrupt.

Note: The least significant bit of the address is the read/write status bit; therefore, the address returned will be 1 higher.

<!-- image -->

## MAX1668 Evaluation System

## Simple SMBus Commands

There are two methods for communicating with the MAX1668: through the normal user-interface panel or through the SMBus commands available from pressing the MAXSMBUS button. A display will pop up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer by unchecking the Automatic Read checkbox.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly 8 digits.

Note: In places where the slave address asks for an 8-bit value, it  must  be  the  7-bit  MAX1668 slave address as determined by ADD0 and ADD1 with the last bit (read/write bit) always set to zero (Table 1).

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data

Table 1. JU1 and JU2 Shunt Settings for SMBus Address

| SHUNT LOCATION   | SHUNT LOCATION   | MAX1668 ADDRESS   | MAX1668 ADDRESS   |
|------------------|------------------|-------------------|-------------------|
| JU1              | JU2              | BINARY            | HEX               |
| 2-3              | 2-3              | 0011 000          | 0x30              |
| 2-3              | Open             | 0011 001          | 0x32              |
| 2-3              | 1-2              | 0011 010          | 0x34              |
| Open             | 2-3              | 0101 001          | 0x52              |
| Open             | Open             | 0101 010          | 0x54              |
| Open             | 1-2              | 0101 011          | 0x56              |
| 1-2              | 2-3              | 1001 100          | 0x98              |
| 1-2              | Open             | 1001 101          | 0x9A              |
| 1-2*             | 1-2*             | 1001 110          | 0x9C              |

*Default is  sampled at 4Hz; however, the data is logged to the file only if either the temperature or status change. This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time the Read All button is clicked. To stop data logging, uncheck the Data Logging checkbox.

<!-- image -->

## Detailed Hardware Description

## Jumper and Switch Settings

Two jumpers set the MAX1668 slave address. The default address is 1001 101 (ADD0 = ADD1 = VCC). JU1 corresponds to ADD0, and JU2 corresponds to ADD1; see Table 1 for a complete list of addresses. The MAX1668 must undergo a power-on reset for the new address to become effective.

The +5V supply voltage for the MAX1668 comes from the  SMBus interface board. To evaluate the MAX1668 with  a  different  voltage,  cut  the  trace  shorting  the  two JU4 pins and apply a voltage to the VCC pad.

The MAX1668 can be placed in standby mode using jumper JU3. See Table 2 for jumper setting.

A slide switch, SW1, is provided as a means to force a power-on reset of the MAX1668. This switch disables power to the device.

Table 2. JU3 Shunt Settings for STBY

| SHUNT LOCATION   | STBY PIN                               | FUNCTION          |
|------------------|----------------------------------------|-------------------|
| 1-2*             | Connected to VCC                       | In operating mode |
| Open             | Connect an external signal to STBY pin |                   |
| 2-3              | Connected to GND                       | In standby mode   |

*Default

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1668 Evaluation System

Figure 1. Main Display for MAX1668 EV Kit

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1668 Evaluation System

<!-- image -->

Figure 2. MAX1668 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1668 Evaluation System

Figure 3. MAX1668 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1668 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1668 Evaluation System

Figure 5. MAX1668 EV Kit PC Board layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7