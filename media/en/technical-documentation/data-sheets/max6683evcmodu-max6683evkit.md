<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6683 Evaluation System/Evaluation Kit

## General Description

The MAX6683 evaluation system (EV system) consists of a MAX6683 evaluation kit (EV kit) and a companion Maxim CMODUSB board.

The MAX6683 EV kit is an assembled and tested printed circuit board (PCB) that demonstrates the MAX6683 temperature sensor and system monitor. The MAX6683 monitors  temperature, supply voltage, and the voltage of three external supplies. Temperature is converted to 11-bit serial data and voltage to 8-bit data.

The CMODUSB allows a PC to use its USB port to emulate an Intel SMBus. Windows ® 98SE/2000/XP-compatible software provides a user-friendly interface to exercise the features of the MAX6683. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the EV system (MAX6683EVCMODU) for a complete PC-based evaluation of the MAX6683. Order just the EV kit (MAX6683EVKIT) if you already have an SMBus interface.

To evaluate the MAX6652, order a free sample of the MAX6652AUB.

## MAX6683 EV System

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6683EVKIT |     1 | MAX6683 evaluation kit |
| CMODUSB+     |     1 | Serial interface board |

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp.

## Features

- ♦ Measure and Display the MAX6683 Temperature
- ♦ Monitor Four Voltage Channels Three External (1.8V, 2.5V, and 5V Nominal) VCC Pin (3.3V Nominal)
- ♦ Programmable Alarms and Configuration
- ♦ SMBus/I 2 C Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Fully Assembled and Tested
- ♦ Include Windows 98SE/2000/XP-Compatible Software and Demo PCB
- ♦ EV System Includes USB Connectivity

## Ordering Information

| PART           | TEMP RANGE   | INTERFACE TYPE   |
|----------------|--------------|------------------|
| MAX6683EVKIT   | 0°C to +70°C | Not included     |
| MAX6683EVCMODU | 0°C to +70°C | CMODUSB          |

Note: The MAX6683 EV kit software is provided with the MAX6683EVKIT. However, the CMODUSB board is required to interface the EV kit to the computer when using the software.

## Component Lists MAX6683 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                             |
|---------------|-------|---------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF, 16V X7R ceramic capacitors Taiyo Yuden EMK107BJ104KA Murata GRM188R71C104KA01 TDK C1608X7R1C104K |
| C3            |     1 | 2.2µF, 16V X7R ceramic capacitor Taiyo Yuden EMK316BJ225ML Murata GRM42-6X7R225K016 TDK C3216X7R1C225M  |
| J1            |     1 | 2 ✕ 10 right-angle female                                                                               |
| JU1           |     1 | 2 ✕ 4 straight header                                                                                   |
| JU2           |     0 | Not installed                                                                                           |
| R1, R2, R3    |     3 | 10k Ω ±5% resistors                                                                                     |
| R4            |     1 | 470k Ω ±5% resistor                                                                                     |
| SW1           |     1 | Slide switch                                                                                            |
| U1            |     1 | MAX6683AUB                                                                                              |
| U2            |     1 | MAX1615EUK                                                                                              |
| -             |     1 | Shunt for JU1                                                                                           |
| -             |     1 | PCB: MAX6683 Evaluation Kit                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6683 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX6683 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX6683 EV system
- MAX6683 EV kit Maxim CMODUSB interface board USB cable (included with the CMODUSB)
- A user-supplied Windows 98SE/2000/XP PC with spare USB port
- 3.3V power supply for VCC
- 1.8V power supply*
- 2.5V power supply*
- 5V power supply*

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 98SE/2000/XP operating system.

## Procedure

The MAX6683 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 6683Rxx.ZIP.
- 2) Install  the  MAX6683 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) Carefully connect the boards by aligning the 20-pin connector of the MAX6683 EV kit with the 20-pin header of the CMODUSB interface board. Gently press them together.
- 4) Ensure that a shunt is on pins 1-2 of jumper JU4. Do not turn on the power until all connections are made.
- 5) Connect the 3.3V power supply to the VCC and GND pads.
- 6) Connect the 1.8V nominal power supply to the 1.8 VIN and GND pads.
- 7) Connect the 2.5V nominal power supply to the 2.5 VIN and GND pads.
- 8) Connect the 5V nominal power supply to the 5 VIN and GND pads.
- 9) Connect  the  USB  cable  from  the  PC  to  the CMODUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message. If you do not see a window that is similar  to  the  one  described  above  after  30 seconds,  remove  the  USB  cable  from  the CMODUSB  and  reconnect  it.  Administrator privileges are required to install the USB device driver on Windows 98SE/2000/XP. Refer to the TROUBLESHOOTING\_USB.PDF document included  with  the  software  if  you  have  any problems during this step.
- 10) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX6683 (or  the  directory  chosen during installation) using the Browse button.
- 11) Turn on the power supplies.
- 12) Turn on the EV kit by moving SW1 to the ON position.
- 13) Start the MAX6683 EV kit software by clicking on its icon in the Start menu.
- 14) Wait until the program automatically detects the address of the MAX6683 and displays the userinterface panel (Figure 1).
- 15) Select the Configuration tab on the panel (Figure 2). Uncheck the Interrupt Clear checkbox.
- 16) Check the START checkbox.
- 17) Verify that the internal temperature displayed on the user-interface panel is not 0.000 ° C.

* These supplies are optional; however, if different nominal supplies are used, appropriate threshold values should be programmed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6683 Evaluation System/Evaluation Kit

Figure 1. MAX6683 EV Kit User-Interface Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6683 Evaluation System/Evaluation Kit

Figure 2. MAX6683 EV Kit Configuration Display

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6683 Evaluation System/Evaluation Kit

## Detailed Description

## User-Interface Panel

The user interface is easy to operate using the mouse, or by using the tab key to navigate with the arrow keys. The checkboxes, edit fields, and radio buttons correspond to bits in the internal registers. By clicking on them, the correct SMBus write operation is generated to update the registers.

The program monitors for an alert interrupt and continually polls the device for new temperature, voltage, and status data. To disable the continuous polling of data, uncheck the Automatic Read checkbox. To change the temperature or voltage threshold comparison registers,  select  the  appropriate  data  field  and  type  in  the new value. Pressing Enter, after typing in the new values, updates the internal registers.

The message ALERT appears whenever an interrupt condition occurs. To clear the interrupt, first eliminate the condition that caused it and then click on Read Status .

## Simple SMBus Commands

There are two methods for communicating with the MAX6683: through the normal user-interface panel or through the SMBus commands available from pressing the MAXSMBus.. button. A display appears that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer that slaves the program to the conversion rate by unchecking the Automatic Read checkbox.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits.

Note: In places where the slave address asks for an 8bit  value,  it  must  be  the  7-bit  slave  address of the MAX6683 as determined by the address pin (ADD) with the last bit set to 1 for a read operation and 0 for a write.

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is sampled at 2Hz; however, the data is logged to the file  only  if  the  temperature, voltage, or status change. This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time the Read All button is clicked. To stop data logging, uncheck the Data Logging checkbox.

<!-- image -->

## Jumper and Switch Settings

Jumper 1 (JU1) sets the MAX6683 slave address. The default address is 0010 101 (ADD = VCC); see Table 1 for a complete list of addresses. The slide switch, SW1, provides a means to force a reset. This switch disables power to the device.

Table 1. JU1 Shunt Settings for SMBus Address

| SHUNT LOCATION   | ADD CONNECTION   | MAX6683 ADDRESS   |
|------------------|------------------|-------------------|
| 0x28             | To GND           | 0010 100Y         |
| 0x2A             | To VCC           | 0010 101Y         |
| 0x2C             | To SDA           | 0010 110Y         |
| 0x2E             | To SCL           | 0010 111Y         |

Note: The first 7 bits shown are the address. Y (bit 0) is the SMBus read/write bit. This bit is a 1 for a read operation and zero for a write.

## Evaluating the MAX6652

The MAX6683 EV kit can also evaluate the MAX6652. Remove the MAX6683 from the board and install the MAX6652.

The MAX6652 and MAX6683 monitor different voltages. See Table 2.

When evaluating the MAX6652 with the MAX6683 software, the voltages displayed for the supply voltage (VCC), the 1.8V nominal voltage, and the 5V nominal voltage are incorrect. However, the ADC output code, shown in parentheses next to the voltage, is correct. Use the equations shown below to calculate the actual voltages:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Table 2. Voltage Monitor Differences Between MAX6652 and MAX6683

| PIN        |   MAX6652 (V) |   MAX6683 (V) |
|------------|---------------|---------------|
| 10 (V CC ) |             5 |           3.3 |
| 1          |            12 |           1.8 |
| 3          |           3.3 |             5 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6683 Evaluation System/Evaluation Kit

Figure 3. MAX6683 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6683 Evaluation System/Evaluation Kit

Figure 4. MAX6683 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 5. MAX6683 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6683 Evaluation System/Evaluation Kit

Figure 6. MAX6683 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-5, 7, 8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600