<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6695 Evaluation Kit/Evaluation System

## General Description

The MAX6695 evaluation kit (EV kit) is an assembled and tested PC board with a mounted MAX6695. The EV kit allows full evaluation of the MAX6695 temperature sensor. The MAX6695 monitors its own die temperature and the junction temperature of two external diode-connected transistors. It converts the temperature to 11-bit, 2-wire serial data that can be accessed over a 2-wire serial bus.

The MAX6695 EV kit includes both external diode-connected transistors (2N3906) soldered to the board, which can be removed. The board can then be connected through a twisted pair to remote diodes close to your system.

The MAX6695 evaluation system consists of a Maxim command module (CMOD232) and a MAX6695 EV kit. The CMOD232 board connects to a computer's RS-232 serial port to provide a computer-controlled SMBus™/I2C bus. Windows® 95/98/2000/XP-compatible software provides a user-friendly interface to exercise the features of the MAX6695. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the MAX6695EVCMOD2 for a complete PC-based evaluation of the MAX6695. Order the MAX6695EVKIT if you already have an SMBus interface.

## MAX6695EVCMOD2 (MAX6695 EV System) Component List

| PART         |   QTY | DESCRIPTION                              |
|--------------|-------|------------------------------------------|
| MAX6695EVKIT |     1 | MAX6695 evaluation kit                   |
| CMOD232      |     1 | SMBus/I 2C interface board               |
| AC adapter   |     1 | 9VDC at 200mA (powers the CMOD232 board) |

SMBus is a trademark of Intel Corp.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ Measure and Display Temperature of the MAX6695 and the Remote Diodes
- ♦ Programmable Under/Over-Temperature Alarms
- ♦ Programmable Conversion Rate
- ♦ Programmable Over-Temperature Hysteresis
- ♦ SMBus/I 2 C Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Fully Assembled and Tested
- ♦ Include Windows 95/98/2000/XP-Compatible Software and Demo PC Board

## Ordering Information

| PART         | TEMP RANGE   | SMBus INTERFACE TYPE   |
|--------------|--------------|------------------------|
| 0°C to +70°C | Not included | MAX6695EVKIT           |
| 0°C to +70°C | CMOD232      | MAX6695EVCMOD2         |

Note: The MAX6695 EV kit software is provided with the MAX6695EVKIT. However, the CMOD232 board is required to interface the EV kit to the computer when using the software.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                   |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ± 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01 TDK C1608X7R1C104K                                     |
| C2, C3        |     2 | 2200pF ± 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H222K TDK C1608X7R1H222K                                      |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                                                          |
| JU1, JU2, JU3 |     0 | Not installed                                                                                                                 |
| Q1, Q2        |     2 | 2N3906-type pnp transistors, SOT23 Central Semiconductor CMPT3906 Diodes Incorporated MMBT3906 Vishay Semiconductors MMBT3906 |
| R1            |     1 | 47 Ω ± 5% resistor (0603)                                                                                                     |
| R2-R6         |     5 | 4.7k Ω ± 5% resistors (0603)                                                                                                  |
| U1            |     1 | MAX6695AUB (10-pin µMAX ® )                                                                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6695 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Incorporated   | 805-446-4800 | 805-381-3899 | www.diodes.com        |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay Semiconductor  | 760-804-9258 | 760-804-9259 | www.vishay.com        |

Note: Indicate you are using the MAX6695 when contacting these manufacturers.

## Quick Start

## Recommended Equipment

Do not turn on the power until all connections are made. Before you begin, the following equipment is needed:

- Computer running Windows 95, 98, 2000, or XP.
- RS-232 serial port (this is a 9-pin socket on the back of the computer)
- Standard 9-pin, straight-through, male-to-female cable to connect the computer's serial port to the Maxim CMOD232 board
- 3.3V, 100mA DC power supply

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6695 EV kit with the 20-pin header of the CMOD232 board. Gently press them together.
- 2) Disable the pullup resistors on the CMOD232 board by moving switch SW1 to the OFF position.
- 3) Connect a cable from the computer's serial port to the CMOD232 board. Use a straight-through, 9-pin, male-to-female cable.
- 4) Install the software by running the INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/2000/XP Start menu. (To remove the software at any time, click on the UNINSTALL icon.)
- 5) Connect the 9V adapter to the CMOD232 board.
- 6) Connect the +3.3V supply to the pads labeled VCC and GND on the MAX6695 EV kit.
- 7) Turn on the power supply.
- 8) Start the MAX6695 program by opening its icon in the Start menu.
- 9) Wait until the program automatically detects the address of the MAX6695 and displays the userinterface panel (Figure 1).

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab and arrow keys to navigate. The checkboxes, edit fields, and radio buttons correspond to bits in  the  MAX6695 registers. Clicking on them generates the correct SMBus command and updates the registers.

Note: Words in bold are user-selectable features in the software.

## Temperature

The MAX6695 monitors its own temperature and the temperature of two external diodes. All temperature measurements are capable of either 8-bit or 11-bit (extended) resolution; 8-bit resolution results in temperature resolution of 1°C/LSB. Extended resolution results in  temperature resolution of 0.125°C/LSB. Enable extended resolution by selecting the Extended Resolution checkbox (Figure 1). Note: Extended resolution is only valid for conversion rates of 2Hz or less.

Read the temperatures by clicking on the Read Temp buttons (Figure 1). The temperature is shown to the right of the buttons.

The MAX6695 has high, low, and over-temperature limit registers.  Temperatures exceeding either the high- or l ow-limit  registers  generate  an  alert  interrupt. Exceeding the over-temperature limit sets the over-temperature bit in the status register and asserts the overtemperature output pin.

Read the high, low, and over-temperature limits by clicking on the Read High , Read Low , Read Over1 , or Read Over2 buttons, respectively (Figure 1). The value (in Celsius) is shown to the right of the button. Change the  high,  low,  and  over-temperature limits  by  entering the value (in Celsius) into the appropriate edit field. Pressing Enter, after typing in the new value, updates the internal register.

The MAX6695 includes hysteresis on the over-temperature alarms to prevent the OT1 and OT2 pins from oscil-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6695 Evaluation Kit/Evaluation System

lating. The hysteresis sets the amount the temperature must decrease from the over-temperature limit to deassert the OT1 and OT2 pins.

Read the hysteresis register by clicking on the Read Hysteresis button (Figure 1). The value (in Celsius) is shown to the right of the button.

Change the hysteresis by entering the value (in Celsius) into the edit field. Pressing Enter, after typing in the new value, updates the internal register.

## External Diodes

The MAX6695 remote temperature sensor is optimized for use with a diode-connected transistor whose ideality factor is equal to 1.008. Transistors with different ideality  factors  produce  different  remote  temperature readings. Some typical discrete transistors may produce readings that vary up to 3°C from the correct value. Refer to the Maxim website (www.maxim-ic.com) Application Note: Compensating for Ideality Factor and Series Resistance Differences Between Thermal Sense Diodes for additional information.

## Configuration

The configuration register has several functions. Figure 2 shows the checkboxes that configure the register. Each checkbox corresponds to a bit in the register. Table 1 describes the function of each checkbox.

Table 1. Configuration Register Checkboxes

|   BIT | NAME                 | STATE     | DESCRIPTION                                                                                    |
|-------|----------------------|-----------|------------------------------------------------------------------------------------------------|
|     7 | Mask alert           | Checked   | Disables the ALERT interrupts.                                                                 |
|     7 | Mask alert           | Unchecked | Enables the ALERT interrupts.                                                                  |
|     6 | STOP                 | Checked   | Places the MAX6695 in software standby mode.                                                   |
|     6 | STOP                 | Unchecked | Places the MAX6695 in operational mode.                                                        |
|     5 | Fault queue          | Checked   | MAX6695 requires four consecutive faults before over-temperature2 output is set.               |
|     5 | Fault queue          | Unchecked | MAX6695 requires only one fault before any over-temperature2 output is set.                    |
|     4 | Reserved             | -         | Not used.                                                                                      |
|     3 | Remote 2 select      | Checked   | Selects external 2 sensor for reading and writing.                                             |
|     3 | Remote 2 select      | Unchecked | Selects external 1 sensor for reading and writing.                                             |
|     2 | SMB timeout disabled | Checked   | Disables the SMBus timeout, as well as alert response, thus providing true I 2C compatibility. |
|     2 | SMB timeout disabled | Unchecked | Enables the SMBus timeout.                                                                     |
|     1 | Mask alert CH2       | Checked   | Disables any alert response caused by external 2 sensor.                                       |
|     1 | Mask alert CH2       | Unchecked | Enables alert response caused by external 2 sensor.                                            |
|     0 | Mask alert CH1       | Checked   | Disables any alert response caused by external 1 sensor.                                       |
|     0 | Mask alert CH1       | Unchecked | Enables alert response caused by external 1 sensor.                                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Conversion Rate

The conversion rate sets the number of temperature samples the MAX6695 takes per second. Note: The MAX6695 operates up to 4Hz; however, the EV kit software reads the device a maximum of two times per second (2Hz).

Read the conversion rate register by clicking on the Read Conversion Rate button (Figure 3). Change the conversion rate by clicking on the radio button next to the desired frequency.

## Status

The status boxes (status1 and status2) display the critical  and fault  conditions  that  occur.  Status1  also  displays BUSY if the MAX6695 is performing a conversion at the time the status is read. Each line corresponds to a bit in the registers. See Tables 2 and 3 for a list of the status conditions.

Read the status by clicking on the Read Status button.

## Alert

The message ALERT appears in the Alert box when an interrupt condition occurs unless the configuration register is set to mask the alert. The cause of the interrupt is shown in the status boxes. To clear the interrupt, first eliminate the condition that caused it and click on Read Alert .

## MAX6695 Evaluation Kit/Evaluation System

## Table 2. Status1 Register

|   BIT | NAME                        | DESCRIPTION                                                                                                 |
|-------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
|     7 | Busy                        | The MAX6695 is performing a conversion at the time the status is read.                                      |
|     6 | Internal high (hot) limit   | The temperature of the MAX6695 is above the value set in the internal high (hot) limit register.            |
|     5 | Internal low (cold) limit   | The temperature of the MAX6695 is below the value set in the internal low (cold) limit register.            |
|     4 | External 1 high (hot) limit | The temperature of the external 1 sensor is above the value set in the external 1 hot limit register.       |
|     3 | External 1 low (cold) limit | The temperature of the external 1 sensor is below the value set in the external 1 cold limit register.      |
|     2 | Diode 1 open                | External 1 sensor diode is open.                                                                            |
|     1 | External 1 OverTemp1        | The temperature of the external 1 sensor is above the value set in the external 1 OverTemp1 limit register. |
|     0 | Internal OverTemp1          | The temperature of the MAX6695 is above the value set in the internal OverTemp1 limit register.             |

## Table 3. Status2 Register

|   BIT | NAME                        | DESCRIPTION                                                                                                  |
|-------|-----------------------------|--------------------------------------------------------------------------------------------------------------|
|     7 | Internal OverTemp2          | The temperature of the MAX6695 is above the value set in the internal OverTemp2 limit register.              |
|     6 | External 2 OverTemp2        | The temperature of the external 2 sensor is above the value set in the external 2 OverTemp2 limit register.  |
|     5 | External 1 OverTemp2        | The temperature of the external 1 sensor is above the value set in the external 1 OverTemp2 limit register.  |
|     4 | External 2 high (hot) limit | The temperature of the external 2 sensor is above the value set in the external 2 high (hot) limit register. |
|     3 | External 2 low (cold) limit | The temperature of the external 2 sensor is below the value set in the external 2 low (cold) limit register. |
|     2 | Diode 2 open                | External 2 sensor diode is open.                                                                             |
|     1 | External 2 OverTemp1        | The temperature of the external 2 sensor is above the value set in the external 2 OverTemp1 limit register.  |
|     0 | Reserved                    | Not used.                                                                                                    |

## Automatic Read

The program polls the device for new temperature and status data a maximum two times per second (2Hz). To disable the polling of data, deselect Automatic Read on the Action menu.

## Data Logging

Select Data Logging on the Action menu to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If automatic read is enabled, data is sampled at 2Hz; however, the data is logged to the file only if the temperature or status has changed. This slows the growth of the data-logging file. When automatic read is disabled, the data is logged each time Read All is selected on the Action menu. To stop data logging, deselect Data Logging on the Action menu.

## Simple SMBus Commands

There are two methods for communicating with the MAX6695: through the normal user-interface panel or through the SMBus commands available by selecting Interface on the Debug menu. A display pops up that allows the SMBus protocols, such as read byte and write  byte,  to  be  executed.  To  stop  normal  user-interface execution so it does not override the manually set values, turn off the update timer by deselecting Automatic Read on the Action menu.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. Note: In  places  where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX6695 with the last bit set to one for a read operation and zero for a write.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6695 Evaluation Kit/Evaluation System

Figure 1. Main Window for the MAX6695 EV Kit Software

<!-- image -->

## Jumpers JU1 and JU2

Jumpers JU1 and JU2 connect the 2N3906 transistors as the external diodes. To use different diodes, cut the trace, short the two pins of JU1 and JU2, and connect the diodes (through twisted-pair wire) to pads DXP1, DXN, and DXP2.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6695 Evaluation Kit/Evaluation System

Figure 2. MAX6695 EV Kit Software Showing the Configuration Panel

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6695 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX6695 EV Kit Software Showing the Conversion Rate Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6695 Evaluation Kit/Evaluation System

Figure 4. MAX6695 EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6695 Evaluation Kit/Evaluation System

Figure 5. MAX6695 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 6. MAX6695 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6695 Evaluation Kit/Evaluation System

Figure 7. MAX6695 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

is a registered trademark of Maxim Integrated Products, Inc.