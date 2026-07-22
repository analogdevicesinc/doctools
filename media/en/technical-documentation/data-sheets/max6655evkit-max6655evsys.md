<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6655 Evaluation System/ Evaluation Kit

## General Description

The MAX6655 evaluation system (EV system) consists of a MAX6655 evaluation kit (EV kit) and a companion Maxim SMBus™ interface board.

The MAX6655 EV kit is an assembled and tested PC board  that  demonstrates  the  MAX6655  dual remote/local temperature sensor and four-channel voltage monitor. It monitors the MAX6655 temperature and supply voltage, the temperature of two external diodeconnected transistors, and the voltage of three external supplies. Temperature is converted to 11-bit serial data and voltage to 8-bit data. Two 2N3906 temperaturesensor transistors come soldered to the board in SOT23 packages, but they can be removed. The board can then be connected through a twisted pair to remote diodes closer to your system.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate an Intel System Management Bus (SMBus) 2wire interface. Windows® 95/98-compatible software provides a user-friendly interface to exercise the features of the MAX6655. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the MAX6655EVSYS for complete IBM PC-based evaluation of the MAX6655. Order the MAX6655EVKIT if you already have an SMBus interface.

To evaluate the MAX6656, order a free sample of the MAX6656MEE.

## MAX6655EVSYS

## Component List

| PART         |   QTY | DESCRIPTION           |
|--------------|-------|-----------------------|
| MAX6655EVKIT |     1 | MAX6655 EV kit        |
| MAXSMBUS     |     1 | SMBus interface board |

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp. I 2 C is a trademark of Philips Corp.

## Features

- ♦ Measures and Displays Three Temperature Channels Two Remote PN Junctions One Local Sensor
- ♦ Monitors Four Voltage Channels Three External (+2.5V, +3.3V, and +12V Nominal) VCC Pin (+5V Nominal)
- ♦ Programmable Alarms and Configuration
- ♦ Operating Temperature Ranges -55°C to +125°C (Remote Sensors) 0°C to +70°C (Board)
- ♦ SMBus/I 2 C™ Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Includes Windows 95/98-Compatible Software and Demo PC Board

## Ordering Information

| PART         | SMBus INTERFACE TYPE   | IC PACKAGE   |
|--------------|------------------------|--------------|
| MAX6655EVKIT | Not included           | 16 QSOP      |
| MAX6655EVSYS | MAXSMBUS               | 16 QSOP      |

The MAX6655 EV kit software is provided with the MAX6655 EVKIT. However, the MAXSMBUS board is required to interface the EV kit to the computer when using the software.

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- IBM PC-compatible computer running Windows 95/98
- Parallel  printer  port  (this  is  a  25-pin  socket  on  the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the Maxim SMBus interface board
- DC power supply capable of supplying any voltage between +7V and +20V at 100mA
- +5V power supply
- +2.5V power supply for VIN3*

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6655 Evaluation System/ Evaluation Kit

## MAX6655EVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                    |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF, 16V X7R ceramic capacitor Taiyo Yuden EMK107BJ104KA Murata GRM39X7R104K016 TDK C1608X7R1C104K                           |
| C2, C3        |     2 | 2200pF, 50V X7R ceramic capacitors                                                                                             |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                                                           |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                                                                  |
| Q1, Q2        |     2 | PNP bipolar transistors Fairchild MMBT3906 Diodes, Inc. MMBT3906 General Semiconductor MMBT3906 Central Semiconductor CMPT3906 |
| R1            |     1 | 10k Ω ± 5% resistor                                                                                                            |
| S1            |     1 | Slide switch                                                                                                                   |
| U1            |     1 | MAX6655MEE                                                                                                                     |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 |
| Diodes, Inc.          | 805-446-4800 | 805-446-4850 |
| Fairchild             | 888-522-5372 | 972-910-8036 |
| General Semiconductor | 760-804-9258 | 760-804-9259 |
| Murata                | 770-436-1300 | 770-436-3030 |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 |
| TDK                   | 847-803-6100 | 847-390-4405 |

Note: Please indicate you are using the MAX6655 when contacting these manufacturers.

- +3.3V power supply for VIN2*
- +12V power supply for VIN1*

*These supplies are optional; however, an interrupt condition (ALERT) occurs if the voltages are outside the threshold limits or if the VIN pins are left unconnected. The Alert can be eliminated by checking the Mask or Disable VIN1/2/3 checkboxes or by changing the threshold limits.

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6655 EV kit with the 20-pin
2. header of the MAXSMBUS interface board. Gently press them together.
- 2) Make sure S1 on the MAX6655 EV kit is in the OFF position.
- 3) Make sure JU3 is set to the 1-2 position.
- 4) Connect a cable from the computer's parallel port to the SMBus interface board. Use a straight-through 25-pin female-to-male cable. To avoid damaging the EV kit  or  your  computer,  do  not  use  a  25-pin  SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 5)  The MAX6655.EXE software program can be run from the floppy or hard drive. Use the Windows program manager to run the program. If desired, you may use the INSTALL.EXE program to copy the files and create icons for them in the Windows 95/98 Start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

## Do not turn on the power until all connections are made.

- 6) Connect the +5V power supply to VCC and GND.
- 7)  Connect the +2.5V nominal power supply to VIN3 and GND.
- 8)  Connect the +3.3V nominal power supply to VIN2 and GND.
- 9)  Connect the +12V nominal power supply to VIN1 and GND.
- 10) Connect the +7V to +20V power supply to POS9 and GND1 on the SMBus interface board.
- 11) Turn on both power supplies.
- 12) Turn the EV kit on by moving S1 to the ON position.
- 13) Start the MAX6655 program by opening its icon in the Start menu.
- 14) Observe as the program automatically detects the address of the MAX6655 and starts the main program.

Note: The MAX6655 reads the address select pins at device power-up only.

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab key to navigate with the arrow keys. Each of the buttons corresponds to bits in the command and configuration bytes. By clicking on them, the correct

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6655 Evaluation System/ Evaluation Kit

SMBus write operation is generated to update the internal registers.

Note: Words in boldface are user-selectable features in the software.

The program continually polls the device for new temperature data and status, and monitors for alert condition. To disable the continuous polling of data, uncheck the Automatic Read checkbox. To change the temperature or voltage threshold comparison registers, select the appropriate data field and type in the new value. Pressing Enter after typing in the new values updates the internal registers.

If  an  interrupt  condition  is  generated  by  the  temperature crossing one of the alarm threshold levels, the message ALERT appears. To clear the interrupt, first eliminate the condition that caused it and then click on Read Alert .  This  action  reads the Alert Response address, returns the value of the current MAX6655 slave address, and clears the interrupt. Note: The least-significant bit of the address is the read/write status bit; therefore, the address returned is one higher.

## Simple SMBus Commands

There are two methods for communicating with the MAX6655: through the normal user-interface panel or through the SMBus commands available from pressing the MAXSMBUS button. A display pops up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer that slaves the program to the conversion rate by unchecking the Automatic Read checkbox.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. Note: In  places where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX6655, as determined by ADD0 and ADD1 with the last bit always set to 1.

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is sampled at 2Hz; however, the data is logged to the file only if either the temperature or status change. This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time the Read All button is clicked. To stop data logging, uncheck the Data Logging checkbox.

<!-- image -->

## Jumper and Switch Settings

Two jumpers set the MAX6655 slave address. The default address is 1001 110 (ADD0 = ADD1 = VCC). JU1 corresponds to ADD0 and JU2 corresponds to ADD1; see Table 1 for a complete list of addresses. The MAX6655 must undergo a power-on reset for the new address to become effective. The slide switch, S1, is provided as a means to force this reset. This switch disables power to the device.

JU3 enables or disables the MAX6655. See Table 2 for the settings.

## Evaluating the MAX6656

The MAX6655 EV kit can also evaluate the MAX6656. Remove the MAX6655 from the board and install the MAX6656.

The MAX6656 is designed to operate with a +3.3V supply and with VIN2 at +5V nominal. When evaluating the MAX6656 with the MAX6655 software, the voltages displayed for VCC and VIN2 are incorrect. However, the ADC output code, shown in parentheses next to the voltage, is correct. Use the equations shown below to calculate the actual voltages:

<!-- formula-not-decoded -->

Table 1. JU1 and JU2 Shunt Settings for SMBus Address

| SHUNT LOCATION   | SHUNT LOCATION   | MAX6655 ADDRESS   |
|------------------|------------------|-------------------|
| JU1 (ADD0)       | JU2 (ADD1)       |                   |
| 2-3              | 2-3              | 0011 000          |
| 2-3              | Open             | 0011 001          |
| 2-3              | 1-2              | 0011 010          |
| Open             | 2-3              | 0101 001          |
| Open             | Open             | 0101 010          |
| Open             | 1-2              | 1010 011          |
| 1-2              | 2-3              | 1001 100          |
| 1-2              | Open             | 1001 101          |
| 1-2              | 1-2              | 1001 110          |

## Table 2. JU3 Shunt Settings for STBY

| SHUNT LOCATION   | STBY PIN          | FUNCTION        |
|------------------|-------------------|-----------------|
| 1-2              | Connected to V CC | In operate mode |
| 2-3              | Connected to GND  | In standby mode |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6655 Evaluation System/ Evaluation Kit

Figure 1. MAX6655 EV Kit Main Display

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6655 Evaluation System/ Evaluation Kit

<!-- image -->

Figure 2. MAX6655 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6655 Evaluation System/ Evaluation Kit

<!-- image -->

Figure 3. MAX6655 EV Kit Component Placement GuideComponent Side

Figure 4. MAX6655 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX6655 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600