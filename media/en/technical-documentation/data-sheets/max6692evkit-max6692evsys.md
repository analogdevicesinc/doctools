<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6692 Evaluation System/Evaluation Kit

## General Description

The MAX6692 evaluation system (EV system) consists of a MAX6692 evaluation kit (EV kit) and a companion Maxim SMBus™ interface board.

The MAX6692 EV kit is an assembled and tested PC board with a mounted MAX6692. The EV kit allows full evaluation of the MAX6692 temperature sensor. The MAX6692 monitors its own die temperature and the junction temperature of an external diode-connected transistor. It converts the temperature to 11-bit data that may be accessed over a 2-wire serial bus.

The MAX6692 EV kit includes the external diode-connected transistor (2N3906) soldered to the board, which can be removed. The board can then be connected through a twisted pair to a remote diode close to your system.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate an Intel system management bus (SMBus) 2wire interface. Windows ® 95/98/2000-compatible software provides a user-friendly interface to exercise the features of the MAX6692. The program is menu driven and offers a graphic interface with control buttons and status display. ( Note: Windows 2000 requires the i nstallation  of  a  driver;  refer  to  Win2000.pdf  or Win2000.txt located on the diskette.)

The MAX6692 EV kit can also evaluate the MAX6648 and MAX6649. Order free samples of either the MAX6648MUA or MAX6649MUA through Maxim's website. Order the MAX6692EVSYS for a complete IBM PCbased evaluation of the MAX6648/MAX6649/MAX6692. Order the MAX6692EVKIT if you already have an SMBus interface.

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                        |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA Murata GRM188R71C104KA01, TDK C1608X7R1C104K, TDK C1608X7R1E104K |
| C2            |     1 | 2200pF, 50V X7R ceramic capacitor (0603)                                                                                           |
| J1            |     1 | 2 ✕ 10 right-angle female receptacle                                                                                               |

## Features

- ♦ Measures and Displays Temperature of the MAX6648/MAX6649/MAX6692 and a Remote Diode
- ♦ Programmable Under/Overtemperature Alarms
- ♦ Programmable Conversion Rate
- ♦ Programmable Number of Faults Required to Assert the Alarm
- ♦ Programmable Overtemperature Hysteresis
- ♦ SMBus Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Fully Assembled and Tested
- ♦ Includes Windows 95/98/2000-Compatible Software and Demo PC Board

## Ordering Information

| PART         | TEMP RANGE   | SMBus INTERFACE TYPE   |
|--------------|--------------|------------------------|
| MAX6692EVKIT | 0°C to +70°C | Not included           |
| MAX6692EVSYS | 0°C to +70°C | MAXSMBUS               |

Note: The MAX6692 EV kit software is provided with the MAX6692EVKIT. However, the MAXSMBUS board is required to interface the EV kit to the computer when using the software.

## MAX6692EVSYS Component List

| PART         |   QTY | DESCRIPTION           |
|--------------|-------|-----------------------|
| MAX6692EVKIT |     1 | MAX6692 EV kit        |
| MAXSMBUS     |     1 | SMBus interface board |

## MAX6692EVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                         |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------|
| JU1           |     0 | Not installed                                                                                                       |
| Q1            |     1 | PNP bipolar transistor (SOT23) Central Semiconductor CMPT3906, Diodes Inc. MMBT3906, General Semiconductor MMBT3906 |
| R1            |     1 | 200 Ω ± 5% resistor (0603)                                                                                          |
| R2, R3, R4    |     3 | 10k Ω ± 5% resistors (0603)                                                                                         |
| R5            |     1 | 100k Ω ± 5% resistor (0603)                                                                                         |
| U1            |     1 | MAX6692MUA (8-pin µMAX)                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6692 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Inc.           | 805-446-4800 | 805-381-3899 | www.diodes.com        |
| General Semiconductor | 760-804-9258 | 760-804-9259 | www.gensemi.com       |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate you are using the MAX6692 when contacting these manufacturers.

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- A computer running Windows 95, 98, or 2000. ( Note: Windows 2000 requires the installation of a driver; refer  to  Win2000.pdf or Win2000.txt located on the diskette.)
- A parallel printer port (this is a 25-pin socket on the back of the computer)
- A standard 25-pin, straight through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the Maxim SMBus interface board
- A DC power supply capable of supplying any voltage between 7V and 20V at 100mA
- A 5V, 100mA DC power supply
- 4) Connect the 7V to 20V power supply to the pads labeled POS9 and GND1 on the SMBus interface board.
- 5) Connect the 5V supply to the pads labeled VCC and GND on the MAX6692 EV kit.
- 6) Turn on the power supplies.
- 7) Start the MAX6692 program by opening its icon in the Start menu.
- 8) Wait until the program automatically detects the address of the MAX6648/MAX6649/MAX6692 and displays the user-interface panel (Figure 1).
- 9) If using the MAX6648 or MAX6649, select the appropriate device from the Device menu (Figure 1).

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab and arrow keys to navigate. The checkboxes, edit fields, and radio buttons correspond to bits in the MAX6648/MAX6649/MAX6692 registers. Clicking on them generates the correct SMBus command and updates the registers. Note: Words in boldface are user-selectable features in the software.

## Temperature

The MAX6648/MAX6649/MAX6692 monitors its own temperature and the temperature of an external diode. Both temperature measurements are capable of either 8-bit  or  11-bit  (extended)  resolution;  8-bit  resolution results in temperature resolution of 1°C/LSB. Extended resolution  results  in  temperature  resolution  of 0.125°C/LSB. Enable extended resolution by selecting the Extended Resolution checkbox (Figure 1).

Read the temperatures by clicking on the Read Temp buttons (Figure 1). The temperature is shown to the right of the buttons.

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6692 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together.
- 2) Connect a cable from the computer's parallel port to  the  MAXSMBus interface board. Use a straightthrough 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 3) Install  the  software  by  running  the  INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/2000 Start  menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

Do not turn on the power until all connections are made.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6692 Evaluation System/Evaluation Kit

The MAX6648/MAX6649/MAX6692 have high, low, and critical limit registers. Temperature exceeding either the high- or low-limit registers generates an alert interrupt. Exceeding the critical limit generates an overtemperature ( OVERT ) alarm.

Read the high, low, and critical limits by clicking on the Read High , Read Low ,  or Read Critical buttons, respectively (Figure 1). The value (in Celsius) is shown to  the  right  of  the  button.  Change  the  high,  low,  and critical  temperature limits by entering the value (in Celsius) into the appropriate edit field. Pressing Enter, after typing in the new value, updates the internal register.

The MAX6648/MAX6649/MAX6692 include hysteresis on the overtemperature alarm to prevent the OVERT pin from oscillating. The hysteresis sets the amount the temperature must decrease from the critical limit to deassert the OVERT pin.

Read the hysteresis register by clicking on the Read Hysteresis button (Figure 1). The value (in Celsius) is shown to the right of the button.

Change the hysteresis by entering the value (in Celsius) into the edit field. Pressing Enter, after typing in the new value, updates the internal register.

## External Diode

The MAX6648/MAX6649/MAX6692 remote temperature sensors are optimized for use with a diode-connected transistor whose ideality factor is equal to 1.008. Transistors with different ideality factors produce different remote temperature readings. Some typical discrete transistors may produce readings that vary up to 3°C from the correct value. Refer to the Maxim website (maximic.com) Application Note: Compensating for Ideality Factor and Series Resistance Differences Between Thermal Sense Diodes for additional information.

## Configuration

The configuration register has two functions. Figure 2 shows the checkboxes that configure the register. Each checkbox corresponds to a bit in the register. Mask Alert disables the ALERT interrupts. STOP places the MAX6648/MAX6649/MAX6692 in software standby mode.

## Fault Queue

The fault queue determines how many times the limits have to be violated before the ALERT is  set.  Read the fault queue by clicking on the Read Fault Queue button  (Figure  2).  Change  the  fault  queue  by  clicking  on the radio button next to the desired number of faults.

<!-- image -->

## Automatic Read

The program polls the device for new temperature and status data a maximum two times a second (2Hz). To disable the polling of data, deselect Automatic Read on the Action menu.

## Data Logging

Select Data Logging on the Action menu to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is sampled at 2Hz; however, the data is logged to the file only if the temperature or status has changed. This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time Read All is selected on the Action menu. To stop data logging, deselect Data Logging on the Action menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Conversion Rate

The conversion rate sets the number of temperature samples the MAX6648/MAX6649/MAX6692 take per second. Note: The MAX6648/MAX6649/MAX6692 operate up to 4Hz; however, the EV kit software reads the device a maximum of two times a second (2Hz).

Read the conversion rate register by clicking on the Read Conversion Rate button (Figure 3). Change the conversion rate by clicking on the radio button next to the desired frequency.

## Status

The Status box displays the critical and fault conditions that occur. It also displays BUSY if the MAX6648/ MAX6649/MAX6692 are performing a conversion at the time that the status is read. The critical and fault conditions are Internal Hot Limit, Internal Cold Limit, External Hot Limit, External Cold Limit, Diode Open, Internal Critical  Limit,  and  External  Critical  Limit.  These  conditions  indicate  that  the  temperature  has  exceeded  one of  the  limits.  Diode  Open  indicates  that  the  external diode is open.

Read the status by clicking on the Read Status button.

## Alert

The message ALERT appears in the Alert box when an interrupt condition occurs unless the configuration register is set to mask the alert. The cause of the interrupt is  shown in the status box. To clear the interrupt, first eliminate the condition that caused it and then click on

## Read Alert .

## MAX6692 Evaluation System/Evaluation Kit

## Simple SMBus Commands

There are two methods for communicating with the MAX6648/MAX6649/MAX6692: through the normal user-interface panel or through the SMBus commands available by selecting MAXSMBus.. on the Debug menu. A display pops up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer by deselecting Automatic Read on the Action menu.

The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. Note: In  places where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX6648/MAX6649/MAX6692 with the last bit set to 1 for a read operation and zero for a write.

## Jumper JU1

Jumper JU1 connects the 2N3906 transistor as the external diode. To use a different diode, cut the trace short the two pins of JU1, and connect the diode (through twisted-pair wire) to the DXP and DXN pads.

Figure 1. Main Window for the MAX6692 EV Kit Software

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6692 Evaluation System/Evaluation Kit

<!-- image -->

Figure 2. MAX6692 EV Kit Software Showing the Configuration Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6692 Evaluation System/Evaluation Kit

Figure 3. MAX6692 EV Kit Software Showing the Conversion Rate Panel

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6692 Evaluation System/Evaluation Kit

<!-- image -->

Figure 4. MAX6692 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6692 Evaluation System/Evaluation Kit

<!-- image -->

Figure 5. MAX6692 EV Kit Component Placement GuideComponent Side

Figure 6. MAX6692 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 7. MAX6692 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8