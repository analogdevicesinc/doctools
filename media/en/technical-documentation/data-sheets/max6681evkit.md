<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX6681 Evaluation System/Evaluation Kit

## General Description

The MAX6681 evaluation system (EV system) consists of a MAX6681 evaluation kit (EV kit) and a companion Maxim system management bus (SMBus)™ interface board.

The MAX6681 EV kit is an assembled and tested PC board that demonstrates the MAX6681 temperature sensor. The MAX6681 monitors its temperature and the junction temperature of an external diode-connected transistor. It converts the temperature to 8-bit or 11-bit 2-wire serial data. ( Note: 11-bit resolution is for the external sensor only.)

The MAX6681 EV kit includes the external diode-connected transistor (a 2N3906 transistor) soldered to the board, but removable. The board can then be connected through a twisted pair to a remote diode close to your system.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate an Intel SMBus 2-wire interface. Windows® 95/98/2000-compatible software provides a user-friendly  interface  to  exercise  the  features  of  the  MAX6681. The program is menu driven and offers a graphic interface with control buttons and status display. ( Note: Windows 2000 requires the installation of a driver; refer to Win2000.pdf or Win2000.txt located on the diskette.)

Order  the  MAX6681EVSYS  for  a  complete  IBM PC-based evaluation of the MAX6681. Order the MAX6681EVKIT if you already have an SMBus interface.

## MAX6681EVSYS Component List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6681EVKIT |     1 | MAX6681 evaluation kit |
| MAXSMBUS     |     1 | SMBus interface board  |

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp. I 2 C is a trademark of Philips Corp.

## Features

- ♦ Measure and Display Temperature of the MAX6681 and a Remote Sensor
- ♦ Programmable Alarms and Configuration
- ♦ I 2 C™/SMBus Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Include Windows 95/98/2000-Compatible Software and Demo PC Board

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX6681EVKIT | 0°C to +70°C | Not included     |
| MAX6681EVSYS | 0°C to +70°C | MAXSMBUS         |

The MAX6681 EV kit software is provided with the MAX6681EVKIT. However, the MAXSMBUS board is required to interface the EV kit to the computer when using the software.

## MAX6681EVKIT Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                                                                               |
|-------------------|-------|---------------------------------------------------------------------------------------------------------------------------|
| C1                |     1 | 0.1µF, 16V X7R ceramic capacitor Taiyo Yuden EMK107BJ104KA Murata GRM188R71C104KA01 TDK C1608X7R1C104K TDK C1608X7R1E104K |
| C2                |     1 | 2200pF, 50V X7R ceramic capacitor                                                                                         |
| J1                |     1 | 2 x 10 right-angle female receptacle Adam Technologies RS2R-20G SamTec SSW-110-02-S-D-RA                                  |
| JU1-JU4, JU6, JU8 |     6 | 3-pin headers                                                                                                             |
| JU5, JU7          |     2 | 2-pin headers                                                                                                             |
| JU9               |     0 | Not installed                                                                                                             |
| Q1                |     1 | 2N3906 PNP transistor Central Semiconductor CMPT3906 Diodes Inc. MMBT3906 General Semiconductor MMBT3906                  |
| R1                |     1 | 10k Ω ±5% resistor                                                                                                        |
| SW1               |     1 | Slide switch                                                                                                              |
| U1                |     1 | MAX6681MEE                                                                                                                |
| None              |     6 | Shunts                                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6681 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Inc.           | 805-446-4800 | 805-381-3899 | www.diodes.com        |
| General Semiconductor | 760-804-9258 | 760-804-9259 | www.gensemi.com       |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate you are using the MAX6681 when contacting these suppliers.

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- A computer running Windows 95, 98, or 2000. ( Note: Windows 2000 requires the installation of a driver; refer  to  Win2000.pdf or Win2000.txt located on the diskette.)
- A parallel printer port (this is a 25-pin socket on the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the Maxim SMBus interface board
- A DC power supply capable of supplying any voltage between 7V and 20V at 100mA

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6681 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together.
- 2) Make sure switch SW1 on the MAX6681 EV kit is in the OFF position.
- 3) Verify that there is no shunt installed on JU7.
- 4) Verify  that  the  shunt  on  JU8  is  connected  across pins 1 and 2.
- 5) Connect a cable from the computer's parallel port to  the  MAXSMBus interface board. Use a straightthrough 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 6) Install  the  software  by  running  the  INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/2000 Start  menu. An uninstall program is included with the software. Click on the UNINSTALL icon to

remove the EV kit software from the hard drive. Do not turn on the power until all connections are made.

- 7) Connect the 7V to 20V power supply to the pads labeled POS9 and GND1 on the SMBus interface board.
- 8) Turn on the power supply.
- 9) Turn on the EV kit by moving SW1 to the ON position.
- 10) Start the MAX6681 program by opening its icon in the Start menu.
- 11) Wait until the program automatically detects the address of the MAX6681 and displays the userinterface panel (Figure 1).

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab and arrow keys to navigate. The checkboxes, edit fields, and radio buttons correspond to bits in  the  MAX6681 registers. Clicking on them generates the correct SMBus command and updates the registers.

Note: Words in boldface are user-selectable features in the software.

## Temperature

The MAX6681 monitors its own temperature and the temperature of an external sensor. The internal sensor has 8-bit resolution, which results in temperature resolution  of  1°C/LSB.  The  external  sensor is  capable of either 8-bit or 11-bit (extended) resolution; see the Configuration section for enabling extended resolution. Extended resolution results in temperature resolution of 0.125°C/LSB.

Read the temperatures by clicking on the Read Temp buttons (Figure 1). The temperature is shown to the right of the buttons.

The MAX6681 has high, low, and critical limit registers. Temperature exceeding either the high or low limit regis-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6681 Evaluation System/Evaluation Kit

ters  generates an alert interrupt. Exceeding the critical limit generates an over-temperature ( OVERT ) alarm.

Read the high, low, and critical limits by clicking on the Read High , Read Low ,  or Read Critical buttons, respectively (Figure 1). The value (in Celsius) is shown to  the  right  of  the  button.  Change  the  high,  low,  and critical  temperature limits by entering the value (in Celsius) into the appropriate edit field. Pressing Enter, after typing in the new value, updates the internal register. Note: Writing to the critical limit registers overrides the values set by the CRIT0 and CRIT1 pins; see the Jumpers JU3 and JU4 section.

The MAX6681 includes hysteresis on the over-temperature alarm to prevent the OVERT pin from oscillating. The hysteresis sets the amount the temperature must decrease from the critical limit to deassert the OVERT pin.

Read the hysteresis register by clicking on the Read Hysteresis button (Figure 1). The value (in Celsius) is shown to the right of the button.

Change the hysteresis by entering the value (in Celsius) into the edit field. Pressing Enter, after typing in the new value, updates the internal register.

The MAX6681 also includes programmable offset for the external temperature. Due to manufacturing tolerances of the external sensor, the temperature can be off by a few degrees Celsius. The programmable offset compensates for this variation.

There are two registers for the external offset. One sets the fractional portion of the offset and the other sets the integer portion.

Read the offset by clicking on the appropriate Read button (Figure 1). The value (in Celsius) is shown to the right of the button.

Change the offset by entering the value (in Celsius) into the edit fields. The fractional portion of the offset must be in decimal format. Pressing Enter, after typing in the new value, updates the internal register.

## Configuration

The configuration register has several functions. Figure 2 shows the checkboxes that configure the register. Each checkbox corresponds to a bit in the register:

- Mask Alert disables the ALERT interrupt.
- STOP places the MAX6681 in software standby mode.
- Extended Resolution increases the measurement of the external sensor to 11 bits, giving it a resolution of 0.125°C. Note: Extended resolution only applies for conversion rates of 4Hz or less.

<!-- image -->

## Automatic Read

The program polls the device for new temperature and status data a maximum of two times a second (2Hz). To disable the polling of data, uncheck the Automatic Read checkbox.

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is sampled at 2Hz; however, the data is logged to

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Extended Range extends the temperature range of the external and internal sensor to -64°C.
- Disable SMBus Timeout disables the SMBus timeout feature, as well as the alert response.
- RESET provides a software reset from the SMBus master. The MAX6681 returns to its power-on reset (POR) values. Note: The MAX6681 does not resample the address or critical limit pins (ADD0, ADD1, CRIT0, and CRIT1) on software reset.

Read the configuration register by clicking on the Read Configuration button (Figure 2).

## Conversion Rate

The conversion rate sets the number of temperature samples the MAX6681 takes per second. Note: The EV kit  software  reads the MAX6681 a maximum of two times a second (2Hz). Read the conversion rate register  by  clicking  on  the Read Conversion Rate button (Figure 3).  Change the conversion rate by clicking on the radio button next to the desired frequency.

## Status

The Status box displays the critical and fault conditions that occur. It also displays BUSY if the MAX6681 is performing a conversion at the time that the status is read.

The critical  and  fault  conditions  are  Internal  Hot  Limit, Internal  Cold Limit, External Hot Limit, External Cold Limit,  Diode  Open, Internal Critical  Limit,  and  External Critical Limit. These conditions indicate that the temperature has exceeded one of the limits. Diode Open indicates that the external diode is open.

Read the status by clicking on the Read Status button.

## Alert

The message ALERT appears in the Alert box when an interrupt condition occurs unless the configuration register is set to mask the alert. The cause of the interrupt is  shown in the status box. To clear the interrupt, first eliminate the condition that caused it and then click on

## Read Alert .

## MAX6681 Evaluation System/Evaluation Kit

the file only if the temperature or status changes. This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time the Read All button is clicked. To stop data logging, uncheck the Data Logging checkbox.

## Simple SMBus Commands

There are two methods for communicating with the MAX6681: through the normal user-interface panel or through the SMBus commands available by clicking the MAXSMBus.. button. A display pops up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off  the  update timer by unchecking the Automatic Read checkbox.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. Note: In  places where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX6681 as determined by the addresses pins (ADD0 and ADD1) with the last bit set to 1 for a read operation and a zero for a write.

## Switch SW1

The slide switch, SW1, provides a means to force a reset. This switch disables power to the device.

## Jumpers JU1 and JU2

Jumpers JU1 and JU2 set the MAX6681 address. The default address is 1001 110Y (ADD0 and ADD1 = VCC); see Table 1 for a complete list of addresses. The address is determined at POR and hardware RESET only.  The MAX6681 must undergo a power down or hardware reset for a new address to become effective.

## Jumpers JU3 and JU4

Jumpers JU3 and JU4 set the critical limits for the overtemperature ( OVERT )  feature.  The OVERT pin on the MAX6681 activates when the temperature exceeds the limits programmed by pins CRIT0 and CRIT1, or by the values in the critical limit registers. Table 2 lists the jumper settings and the corresponding critical temperature limits.

## Jumper JU5

Jumper JU5 selects the interrupt mode for the ALERT pin.  To  operate the ALERT pin in comparator mode, install  the  shunt  on  JU5.  In  this  mode,  the ALERT pin only resets by removing the fault condition or by masking ALERT in the configuration register.

To operate the ALERT pin in the standard SMBus ALERT mode, remove the shunt from JU5. In this mode,

Table 1. JU1 and JU2 Shunt Settings for SMBus Address

| SHUNT LOCATION   | SHUNT LOCATION   | MAX6681 ADDRESS   |
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
| 1-2*             | 1-2*             | 1001 110Y         |

* Default position

Note: The first 7 bits shown are the address. Y (bit 0) is the SMBus read/write bit. This bit is a 1 for a read operation and a zero for a write.

the ALERT pin resets once the master reads the Alert

Table 2. JU3 and JU4 Shunt Settings for the Over-Temperature Critical Limits

| SHUNT LOCATION   | SHUNT LOCATION   | OVER-TEMPERATURE SET POINT (°C)   | OVER-TEMPERATURE SET POINT (°C)   |
|------------------|------------------|-----------------------------------|-----------------------------------|
| JU4 (CRIT1)      | JU3 (CRIT0)      | REMOTE                            | LOCAL                             |
| 2-3              | 2-3              | 85                                | 70                                |
| 2-3              | Open             | 90                                | 75                                |
| 2-3              | 1-2              | 95                                | 80                                |
| Open             | 2-3              | 100                               | 85                                |
| Open             | Open             | 105                               | 90                                |
| Open             | 1-2              | 110                               | 95                                |
| 1-2              | 2-3              | 115                               | 100                               |
| 1-2              | Open             | 120                               | 105                               |
| 1-2*             | 1-2*             | 125                               | 110                               |

* Default position

address. Reading the Alert address does not clear the status register. It still indicates what caused the alert.

## Jumper JU6

Jumper JU6 selects which temperature source activates the OVERT pin. See Table 3 for the jumper settings.

## Jumper JU7

Install  a  shunt  on  jumper  JU7  to  generate  a  hardware reset and return the MAX6681 to the POR values. Remove the shunt for normal operation. Note: The MAX6681 resamples the address and critical limit pins (ADD0, ADD1, CRIT0, and CRIT1) on hardware reset.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6681 Evaluation System/Evaluation Kit

## Jumper JU8

Jumper JU8 controls shutdown on the MAX6681. Jumper position 1-2 connects the SHDN pin to VCC, enabling the MAX6681 for normal operation. Position 23  connects  the SHDN pin  to  GND,  placing  the MAX6681 in shutdown mode.

## Table 3. JU5-JU8 Shunt Settings

| JUMPER   | SHUNT SETTINGS   | FUNCTION                                                                                          |
|----------|------------------|---------------------------------------------------------------------------------------------------|
| JU5      | Open*            | ALERT pin operates in standard SMBus ALERT mode.                                                  |
| JU5      | Closed           | ALERT pin operates in comparator mode.                                                            |
| JU6      | 1-2*             | SENS_SEL pin connected to VCC. The remote sensor activates the OVERT pin.                         |
| JU6      | 2-3              | SENS_SEL pin connected to GND. The local sensor on the MAX6681 activates the OVERT pin.           |
| JU6      | Open             | SENS_SEL pin open. Both the remote sensor and local sensor on the MAX6681 activate the OVERT pin. |
| JU7      | Open*            | Normal operation.                                                                                 |
| JU7      | Closed           | Hardware reset. Forces the MAX6681 to reset to the POR values.                                    |
| JU8      | 1-2*             | SHDN = High. MAX6681 enabled.                                                                     |
| JU8      | 2-3              | SHDN = Low. MAX6681 disabled.                                                                     |
| JU8      | Open             | Drive the SHDN pad with an external signal.                                                       |

* Default position

<!-- image -->

To drive shutdown with an external signal, remove the shunt from JU8 and apply the signal to the SHDN pad.

## Jumper JU9

To evaluate the MAX6681 with a different voltage, cut the trace shorting the two pins of JU9 and apply a voltage to the pad labeled VCC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6681 Evaluation System/Evaluation Kit

Figure 1. Main Window for the MAX6681 EV Kit Software

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6681 Evaluation System/Evaluation Kit

<!-- image -->

Figure 2. MAX6681 EV Kit Software Showing the Configuration Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6681 Evaluation System/Evaluation Kit

Figure 3. MAX6681 EV Kit Software Showing the Conversion Rate Panel

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6681 Evaluation System/Evaluation Kit

<!-- image -->

Figure 4. MAX6681 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6681 Evaluation System/Evaluation Kit

<!-- image -->

Figure 5. MAX6681 EV Kit Component Placement GuideComponent Side

Figure 6. MAX6681 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 7. MAX6681 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.