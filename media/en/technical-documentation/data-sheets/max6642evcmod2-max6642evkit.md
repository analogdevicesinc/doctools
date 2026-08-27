<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX6642 Evaluation System/Evaluation Kit

## General Description

The MAX6642 evaluation kit (EV kit) is an assembled and tested PC board with a mounted MAX6642. The EV kit  allows  full  evaluation  of  the  MAX6642  temperature sensor. The MAX6642 monitors its own die temperature and the junction temperature of an external diode-connected transistor. It converts the temperature to 10-bit, 2-wire serial data that may be accessed over a 2-wire serial bus.

The MAX6642 EV kit includes an external diode-connected transistor (2N3906) soldered to the board, which can be removed. The board can then be connected through a twisted pair to remote diodes close to your system.

The MAX6642 evaluation system consists of a Maxim Command Module (CMOD232) and a MAX6642 EV kit. The CMOD232 board connects to a computer's RS-232 serial  port  to  provide  a  computer-controlled  SMBus™/ I 2 C bus. Windows ® 95/98/2000/XP-compatible software provides a user-friendly interface to exercise the features of the MAX6642. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the MAX6642EVCMOD2 for a complete PC-based evaluation of the MAX6642. Order the MAX6642EVKIT if you already have a CMOD232 SMBus interface.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                  |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ± 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01 TDK C1608X7R1C104K                                    |
| C2            |     1 | 2200pF ± 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H222K TDK C1608X7R1H222K                                      |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                                                         |
| JU1, JU2      |     0 | Not installed                                                                                                                |
| Q1            |     1 | 2N3906-type pnp transistor, SOT23 Central Semiconductor CMPT3906 Diodes Incorporated MMBT3906 Vishay Semiconductors MMBT3906 |
| R1            |     1 | 47 Ω ± 5% resistor (0603)                                                                                                    |
| R2, R3, R4    |     3 | 10k Ω ± 5% resistors (0603)                                                                                                  |
| U1            |     1 | MAX6642ATT98 (6-pin TDFN)                                                                                                    |

## Features

- ♦ Measures and Displays Temperature of the MAX6642 and the Remote Diode
- ♦ Programmable High-Temperature Alarms
- ♦ SMBus/I 2 C Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Fully Assembled and Tested
- ♦ Includes Windows 95/98/2000/XP-Compatible Software and Demo PC Board

## Ordering Information

| PART           | TEMP RANGE   | SMBus INTERFACE TYPE   |
|----------------|--------------|------------------------|
| MAX6642EVKIT   | 0°C to +70°C | Not included           |
| MAX6642EVCMOD2 | 0°C to +70°C | CMOD232                |

Note: The MAX6642 EV kit software is provided with the MAX6642EVKIT. However, the CMOD232 board is required to interface the EV kit to the computer when using the software.

## MAX6642EVCMOD2 (MAX6642 EV System) Component List

| PART         |   QTY | DESCRIPTION                              |
|--------------|-------|------------------------------------------|
| MAX6642EVKIT |     1 | MAX6642 evaluation kit                   |
| CMOD232      |     1 | SMBus/I 2 C interface board              |
| AC adapter   |     1 | 9VDC at 200mA (powers the CMOD232 board) |

SMBus is a trademark of Intel Corp.

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX6642 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEB SITE              |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Incorporated   | 805-446-4800 | 805-381-3899 | www.diodes.com        |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay Semiconductor  | 760-804-9258 | 760-804-9259 | www.vishay.com        |

Note: Indicate you are using the MAX6642 when contacting these manufacturers.

## Quick Start

## Recommended Equipment

Before you begin, the following equipment is needed. Do not turn on the power until all connections are made:

- Computer running Windows 95, 98, 2000, or XP
- RS-232 serial port (this is a 9-pin socket on the back of the computer)
- Standard 9-pin, straight-through, male-to-female cable to connect the computer's serial port to the Maxim CMOD232 board
- 3.3V, 100mA DC power supply
- 9) Wait until the program automatically detects the address of the MAX6642 and displays the userinterface panel (Figure 1).

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab and arrow keys to navigate. The checkboxes, edit fields, and radio buttons correspond to bits in  the  MAX6642 registers. Clicking on them generates the correct SMBus command and updates the registers.

Note: Words in boldface are user-selectable features in the software.

## Temperature

The MAX6642 monitors its own temperature and the temperature of an external diode. All temperature measurements are capable of either 8-bit or 10-bit (extended) resolution; 8-bit resolution results in temperature resolution of 1°C/LSB. Extended resolution results in temperature resolution of 0.25°C/LSB. Enable extended resolution  by  selecting  the Enable  Extended Resolution checkbox (Figure 1).

Read the temperatures by clicking on the Read Temperature buttons (Figure 1). The temperature is shown to the right of the buttons.

The MAX6642 has local and remote high-limit registers. Temperature exceeding the high-limit registers generates an alert interrupt.

Read the high limits by clicking on the Read High Limit buttons (Figure 1). The value (in Celsius) is shown to the right of the button. Change the limits by entering the value (in Celsius) into the appropriate edit field. Pressing Enter, after typing in the new value, updates the internal register.

<!-- image -->

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6642 EV kit with the 20-pin header of the CMOD232 board. Gently press them together.
- 2) Disable the pullup resistors on the CMOD232 board by moving switch SW1 to the OFF position.
- 3) Connect a cable from the computer's serial port to the CMOD232 board. Use a straight-through, 9-pin, male-to-female cable.
- 4) Install the software by running the INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/2000/XP Start menu. (To remove the software at any time, click on the UNINSTALL icon.)
- 5) Connect the 9V adapter to the CMOD232 board.
- 6) Connect the +3.3V supply to the pads labeled VCC and GND on the MAX6642 EV kit.
- 7) Turn on the power supply.
- 8) Start the MAX6642 program by opening its icon in the Start menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6642 Evaluation System/Evaluation Kit

Table 1. Configuration Register Checkboxes

|   BIT | NAME                 | STATE     | DESCRIPTION                                                      |
|-------|----------------------|-----------|------------------------------------------------------------------|
|     7 | Mask alert           | Checked   | Disables the ALERT interrupts.                                   |
|     7 | Mask alert           | Unchecked | Enables the ALERT interrupts.                                    |
|     6 | STOP                 | Checked   | Places the MAX6642 in software standby mode.                     |
|     6 | STOP                 | Unchecked | Places the MAX6642 in operational mode.                          |
|     5 | Disable local sensor | Checked   | Disables local temperature measurement.                          |
|     5 | Disable local sensor | Unchecked | Enables local temperature measurement.                           |
|     4 | Fault queue = 2      | Checked   | MAX6642 requires two consecutive faults before any ALERT is set. |
|     4 | Fault queue = 2      | Unchecked | MAX6642 requires only one fault before any ALERT is set.         |
|     3 | Reserved             | NA        | Not used.                                                        |
|     2 | Reserved             | NA        | Not used.                                                        |
|     1 | Reserved             | NA        | Not used.                                                        |
|     0 | Reserved             | NA        | Not used.                                                        |

## External Diode

The MAX6642 remote temperature sensor is optimized for use with a diode-connected transistor whose ideality factor is equal to 1.008. Transistors with different ideality  factors  produce  different  remote  temperature readings. Some typical discrete transistors may produce readings that vary up to 3°C from the correct value. Refer to the Maxim website (maxim-ic.com) Application Note: Compensating for Ideality Factor and Series Resistance Differences Between Thermal Sense Diodes for additional information.

## Configuration

The configuration register has several functions. Figure 1 shows the checkboxes that configure the register. Each checkbox corresponds to a bit in the register. Table 1 describes the function of each checkbox.

Read the configuration register by clicking on the Read Configuration button (Figure 1). The checkboxes are either checked or unchecked to correspond to the bits in the register.

## Table 2. Status Register

|   BIT | NAME        | DESCRIPTION                                                                                   |
|-------|-------------|-----------------------------------------------------------------------------------------------|
|     7 | BUSY        | The MAX6642 is performing a conversion at the time that the status is read.                   |
|     6 | Local high  | The temperature of the MAX6642 is above the value set in the local high-limit register.       |
|     5 | Reserved    | Not used.                                                                                     |
|     4 | Remote high | The temperature of the remote diode is above the value set in the remote high-limit register. |
|     3 | Reserved    | Not used.                                                                                     |
|     2 | Diode OPEN  | Remote diode is open.                                                                         |
|     1 | Reserved    | Not used.                                                                                     |
|     0 | Reserved    | Not used.                                                                                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Status

The status box displays the critical and fault conditions that occur. It also displays BUSY if the MAX6642 is performing a conversion at the time that the status is read. Each line corresponds to a bit in the registers. See Table 2 for a list of the status conditions.

Read the status by clicking on the Read Status button.

Note: Reading the status register clears the alert interrupt.

## Alert

The message ALERT appears in the Alert box when an interrupt condition occurs unless the configuration register is set to mask the alert. The cause of the interrupt is shown in the status boxes. To clear the interrupt, first eliminate the condition that caused it and click on Read

## Alert .

Note: Reading the status register also clears the alert interrupt.

## MAX6642 Evaluation System/Evaluation Kit

## Single Shot

The single-shot command immediately forces the MAX6642 to begin a temperature-conversion cycle. Refer to the MAX6642 data sheet for more information on the single-shot command.

The single-shot command does not read the local or remote temperature registers. Read the temperature registers by clicking the Read Temperature buttons or by selecting Read All on the Action menu.

## Automatic Read

The program polls the device for new temperature and status data a maximum two times a second (2Hz). To disable the polling of data, deselect Automatic Read on the Action menu.

Note: The program does not automatically read the status register during an alert interrupt. Reading the status register clears the interrupt.

## Data Logging

Select Data Logging on the Action menu to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If automatic read is enabled, data is sampled at 2Hz; however, the data is logged to the file only if the temperature or status has changed. This slows the growth of the data-logging file. When automatic read is disabled, the data is logged each time Read All is selected on the Action menu. To stop data logging, deselect Data Logging on the Action menu.

## Simple SMBus Commands

There are two methods for communicating with the MAX6642: through the normal user-interface panel or through the SMBus commands available by selecting

Interface on the Debug menu. A display pops up that allows the SMBus protocols, such as read byte and write  byte,  to  be  executed.  To  stop  normal  user-interface execution so that it does not override the manually set values, turn off the update timer by deselecting Automatic Read on the Action menu.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits.

Note: In places where the slave address asks for an 8bit  value,  it  must  be  the  7-bit  slave  address  of  the MAX6642 with the last bit set to 1 for a read operation and zero for a write.

## Jumper JU1

Jumper JU1 connects the 2N3906 transistors as the external diode. To use a different diode, cut the trace, short the two pins of JU1, and connect the diode (through twisted-pair wire) to the pads labeled DXN and DXP on the MAX6642 EV kit.

## Jumper JU2

Jumper JU2 connects the ALERT line  to  VCC  through pullup resistor R4. The CMOD232 interface board has a pullup on ALERT and does not require the pullup resistor  on  the  MAX6642 EV kit. Place a short across JU2 when using an SMBus interface board that requires the pullup resistor on ALERT .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6642 Evaluation System/Evaluation Kit

<!-- image -->

Figure 1. Main Window for the MAX6642 EV Kit Software

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6642 Evaluation System/Evaluation Kit

Figure 2. MAX6642 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6642 Evaluation System/Evaluation Kit

Figure 3. MAX6642 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 4. MAX6642 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6642 Evaluation System/Evaluation Kit

Figure 5. MAX6642 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600