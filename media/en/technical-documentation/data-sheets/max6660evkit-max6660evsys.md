<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX6660 Evaluation System/Evaluation Kit

## General Description

The MAX6660 evaluation system (EV system) consists of a MAX6660 evaluation kit (EV kit) and a companion Maxim System Management Bus (SMBus)™ interface board.

The MAX6660 EV kit is an assembled and tested PC board that demonstrates the MAX6660 remote temperature sensor and fan-speed regulator. It monitors the junction temperature of an external diode-connected transistor, and converts the temperature to 8-bit or 11bit  (extended resolution mode), 2-wire serial data. A 2N3906 temperature-sensor transistor comes soldered to  the  board in a SOT23 package, but it can be removed. The board can then be connected through a twisted pair to a remote diode close to your system. The MAX6660 also incorporates a closed-loop fan controller  that  regulates  fan  speed  with  tachometer  feedback. Note: Use this EV kit data sheet in conjunction with the MAX6660 data sheet.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate  an  SMBus  2-wire  interface.  Windows® 95/98/2000-compatible software provides a user-friendly  interface  to  exercise  the  features  of  the  MAX6660. The program is menu driven and offers a graphic interface with control buttons and status display. ( Note: Windows 2000 requires the installation of a driver; refer to Win2000.pdf or Win2000.txt located on the diskette.)

Order the MAX6660EVSYS for a complete IBM PC-based evaluation of the MAX6660. Order the MAX6660EVKIT if you already have an SMBus interface.

| DESIGNATION        |   QTY | DESCRIPTION                                                                                           |
|--------------------|-------|-------------------------------------------------------------------------------------------------------|
| C1, C4             |     2 | 0.1µF, 16V X7R ceramic capacitors Murata GRM39X7R104K016 Taiyo Yuden EMK107BJ104KA TDK C1608X7R1E104K |
| C2                 |     1 | 2200pF, 50V X7R ceramic capacitor (0603)                                                              |
| C3, C5             |     2 | 10µF, 35V aluminum electrolytic capacitors                                                            |
| J1                 |     1 | 2 x 10 right-angle female receptacle                                                                  |
| JU1, JU2, JU3, JU5 |     4 | 3-pin headers                                                                                         |

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp. I 2 C is a trademark of Philips Corp.

## Features

- ♦ Measures and Displays Remote-Sensor Temperature
- ♦ Controls Fan Speed
- ♦ Programmable Alarms and Configuration
- ♦ Operating Temperature Ranges -40°C to +125°C (Remote Sensor) 0°C to +70°C (Board)
- ♦ I 2 C/SMBus Compatible
- ♦ Easy-to-use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Includes Windows 95/98/2000-Compatible Software and Demo PC Board

## Ordering Information

| PART         | TEMP RANGE   | SMBus INTERFACE TYPE   |
|--------------|--------------|------------------------|
| MAX6660EVKIT | 0°C to +70°C | Not included           |
| MAX6660EVSYS | 0°C to +70°C | MAXSMBUS               |

The MAX6660 EV kit software is provided with the MAX6660EVKIT. However, the MAXSMBUS board is required to interface the EV kit to the computer when using the software.

## MAX6660EVSYS Component List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6660EVKIT |     1 | MAX6660 evaluation kit |
| MAXSMBUS     |     1 | SMBus interface board  |

## MAX6660EV Kit Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------|
| JU4           |     0 | Not installed                                                                                                                        |
| Q1            |     1 | PNP bipolar transistor (SOT23) Central Semiconductor CMPT3906 Diodes Inc. MMBT3906 Fairchild MMBT3906 General Semiconductor MMBT3906 |
| R1            |     1 | 100k Ω ± 5% resistor                                                                                                                 |
| R2            |     0 | Not installed                                                                                                                        |
| R3            |     1 | 4.99k Ω ± 1% resistor                                                                                                                |
| R4            |     1 | 51 Ω ± 5% resistor                                                                                                                   |
| S1            |     1 | Slide switch                                                                                                                         |
| U1            |     1 | MAX6660AEE (16-pin QSOP)                                                                                                             |
| None          |     3 | Shunts for JU1, JU2, and JU3                                                                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6660 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 515-435-1110 | 515-435-1824 | www.centralsemi.com   |
| Diodes Inc.           | 805-446-4800 | 805-381-3899 | www.diodes.com        |
| Fairchild             | 888-522-5372 | -            | www.fairchildsemi.com |
| General Semiconductor | 760-804-9258 | 760-804-9259 | www.gensemi.com       |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate you are using the MAX6660 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- Computer running Windows 95, 98, or 2000 ( Note: Windows 2000 requires the installation of a driver; refer  to  Win2000.pdf or Win2000.txt located on the diskette.)
- Parallel  printer  port  (this  is  a  25-pin  socket  on  the back of the computer)
- Standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the Maxim SMBus interface board
- DC power supply capable of supplying any voltage between 7V and 20V at 100mA
- 500mA DC power supply rated at 5V or 12V, depending on the fan
- DC power supply capable of supplying 5V at 50mA
- 5V or 12V fan rated up to 250mA with a tachometer output

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6660 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together.
- 2) Make sure switch S1 on the MAX6660 EV kit is in the OFF position.
- 3) Make sure JU3 is set to the 1-2 position.
- 4) Connect a fan to either J2 or the pads FAN+, FAN-, and TACH.
- 5) Connect a cable from the computer's parallel port to  the  SMBus interface board. Use a straightthrough 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a
6. 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 6) The MAX6660.EXE software program can be run from the floppy or hard drive. Use the Windows program manager to run the program. If desired, you may use the INSTALL.EXE program to copy the files and create icons for them in the Windows 95/98/2000 Start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

## Do not turn on the power until all connections are made.

- 7) Connect the fan power supply to the VFAN and PGND pads.
- 8) Connect the 7V to 20V power supply to the pads labeled POS9 and GND1 of the SMBus interface board.
- 9) Connect the 5V power supply to the VCC and AGND pads.
- 10) Turn on the power supplies.
- 11) Turn on the EV kit by moving S1 to the ON position.
- 12) Start the MAX6660 program by opening its icon in the Start menu.
- 13) Observe as the program automatically detects the address of the MAX6660 and starts the main program.

Note: The MAX6660 reads the address select pins at device power-up only.

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab key to navigate with the arrow keys. Each of the buttons corresponds to bits in the command and configuration bytes. By clicking on them, the correct SMBus write operation is generated to update the internal registers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6660 Evaluation System/Evaluation Kit

Note: Words in boldface are user-selectable features in the software.

The program continually polls the device for new temperature data and status, and monitors for alert conditions. To disable the continuous polling of data, uncheck the Automatic Read checkbox. To change the THIGH and TLOW threshold comparison registers, select the appropriate data field and type in the new value. Pressing Enter after typing in the new values updates the internal registers.

If  an  interrupt  condition  is  generated  by  the  temperature crossing one of the alarm threshold levels, the message ALERT appears. To clear the interrupt, first eliminate the condition that caused it and then click on

Read Alert .  This  action  reads the Alert Response address, returns the value of the current MAX6660 slave address, and clears the interrupt. Note: The least-significant bit of the address is the read/write status bit; therefore, the address returned is 1 higher.

## Simple SMBus Commands

There are two methods for communicating with the MAX6660: through the normal user-interface panel or through the SMBus commands available from pressing the MAXSMBUS button. A display pops up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer that slaves the program to the conversion rate by unchecking the Automatic Read checkbox.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits.

Note: In places where the slave address asks for an 8bit  value,  it  must  be  the  7-bit  slave  address  of  the MAX6660 as determined by ADD0 and ADD1 with the last bit set to 1 for a read operation and zero for a write.

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is  sampled at 2Hz; however, the data is logged to the file only if either the temperature or status change. This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time the Read All button is clicked. To stop data logging, uncheck the Data Logging checkbox.

<!-- image -->

## Fan Control

The MAX6660 incorporates a closed-loop fan controller that  regulates  fan  speed  with  tachometer  feedback. It compares temperature data to fan threshold temperature and gain setting, resulting in automatic fan control proportional to the remote-junction temperature.

Figure 1 shows the registers that control the fan. The register values must be calculated for the selected fan.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper and Switch Settings

Two jumpers set the MAX6660 slave address. The default address is 1001 110 (ADD0 = ADD1 = VCC). JU1 corresponds to ADD0 and JU2 corresponds to ADD1; see Table 1 for a complete list of addresses. The MAX6660 must undergo a power-on reset for the new address to become effective.

Note: The first 7 bits shown are the address. Y (bit 0) is the SMBus read/write bit. This bit is a 1 for a read operation and zero for a write.

Table 1. JU1 and JU2 Shunt Settings for SMBus Address

| SHUNT LOCATION   | SHUNT LOCATION   | MAX6660 ADDRESS   |
|------------------|------------------|-------------------|
| JU1 (ADD0)       | JU2 (ADD1)       |                   |
| 2-3              | 2-3              | 0011 000Y         |
| 2-3              | Open             | 0011 001Y         |
| 2-3              | 1-2              | 0011 010Y         |
| Open             | 2-3              | 0101 001Y         |
| Open             | Open             | 0101 010Y         |
| Open             | 1-2              | 0101 011Y         |
| 1-2              | 2-3              | 1001 100Y         |
| 1-2              | Open             | 1001 101Y         |
| 1-2              | 1-2              | 1001 110Y         |

A slide switch, S1, is provided as a means to force a power-on reset of the MAX6660. This switch disables

Table 2. JU3 Shunt Settings for STBY

| SHUNT LOCATION   | STBY PIN          | FUNCTION        |
|------------------|-------------------|-----------------|
| 1-2              | Connected to V CC | In operate mode |
| 2-3              | Connected to GND  | In standby mode |

power to the device.

## MAX6660 Evaluation System/Evaluation Kit

Figure 1. Main Display for the MAX6660EVKIT

<!-- image -->

Refer to the MAX6660 data sheet for determining the values.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6660 Evaluation System/Evaluation Kit

<!-- image -->

Figure 2. Fan-Control Display with Settings for a 2500rpm Fan

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6660 Evaluation System/Evaluation Kit

Figure 3. MAX6660 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6660 Evaluation System/Evaluation Kit

<!-- image -->

Figure 3. MAX6660 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

Figure 5. MAX6660 EV Kit PC Board Layout-Component Side

Figure 4. MAX6660 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 6. MAX6660 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7