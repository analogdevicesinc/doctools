<!-- lastmod 2022-08-04 -->
## General Description

The MAX6675 evaluation kit (EV kit) is an assembled and tested printed circuit board (PCB) that demonstrates the MAX6675 thermocouple digital temperature sensor. It accepts the input from a type-K thermocouple and converts the temperature to 12-bit data.

The MAX6675 EV kit connects to a computer for acquiring the data from the MAX6675. Windows ® 95/98/2000/XP compatible software provides a userfriendly interface to display the 12-bit data and convert it to a temperature.

The EV kit includes a type-K thermocouple for evaluation up to +80°C.

To evaluate the MAX6674, order a free sample of the MAX6674ISA.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                 |
|---------------|-------|-------------------------------------------------------------------------------------------------------------|
| C1-C4         |     4 | 0.1µF, 16V X7R ceramic capacitors Taiyo Yuden EMK107BJ104KA Murata GRM188R71C104KA01 TDK C1608X7R1C104K     |
| C5            |     1 | 2.2µF, 16V X7R ceramic capacitor Taiyo Yuden EMK316BJ225ML Murata GRM42-6X7R225K016 TDK C3216X7R1C225M      |
| J1            |     1 | DB-25 male right-angle connector                                                                            |
| J2            |     1 | Thermocouple connector, miniature size, type K Omega PCC-SMP-K                                              |
| JU1-JU5       |     0 | Not installed                                                                                               |
| R1            |     1 | 470k Ω ± 5% resistor                                                                                        |
| U1            |     1 | MAX6675ISA temperature sensor                                                                               |
| U2            |     1 | MAX1840EUB/MAX1841EUB level translator                                                                      |
| U3            |     1 | MAX1615EUK linear voltage regulator                                                                         |
| -             |     1 | Thermocouple, epoxy-coated tip, -10°C to +80°C, miniature-size male connector, type K Omega TC-PVC-K-24-180 |

Windows is a registered trademark of Microsoft Corp. SPI is a trademark of Motorola, Inc.

<!-- image -->

## Features

- ♦ Digitizes and Displays Temperature from a Type-K Thermocouple
- ♦ SPI™-Compatible Serial Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Available in an 8-Pin SO Package
- ♦ Fully Assembled and Tested
- ♦ Includes Windows 95/98/2000/XP-Compatible Software, Demo PCB, and Type-K Thermocouple

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX6675EVKIT | 0°C to +70°C | 8 SO         |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- DC power supply capable of supplying any voltage between 7V and 20V at 100mA
- A user-supplied Windows 95/98/2000/XP-compatible PC with an available parallel port (female DB-25 connector on back of PC)
- A standard 25-pin, straight-through, male-to-female cable to connect the PC's parallel port to the MAX6675 EV kit board

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 95/98/2000/XP operating system.

## Procedure

The MAX6675 is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are complete.

- 1) Connect a 25-pin, straight-through, male-to-female cable from the PC's parallel port to the MAX6675 EV kit board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX6675 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Omega Engineering     | 888-826-6342 | -            | www.omega.com         |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX6675 when contacting these component suppliers.

- 2) Visit  the  Maxim website (www.maxim-ic.com/ evkitsoftware) to download the latest version of the EV kit software, 6675Rxx.ZIP. Install the MAX6675 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu. When you see the self-extracting DLPortIO driver  install  window  appear on the screen, press the Yes button. This automatically unpacks the compressed files and runs the DLPortIO driver installer. If using Windows 2000 or XP, you must have administrator privileges on your PC. If you do not, contact your system administrator to allow installation. You need to restart your PC after installing the DLPortIO driver.
- 3) Connect the 7V to 20V supply to the pads labeled VIN and GND.
- 4) Turn on the power supply.
- 5) Start  the  MAX6675 program by opening its icon in the Start menu.
- 6) Observe as the program automatically detects the MAX6675 and starts the main program (Figure 1).

## Detailed Description

## User-Interface Panel

The user interface is easy to operate. Use either the mouse or the Tab key to navigate.

Note: Words in boldface are user-selectable features in the software.

The program continually polls the device for new temperature data. To disable the continuous polling of data, uncheck the Automatic Read checkbox. Press Read Temp to get the current temperature.

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature and status data to  a  text  file  that  includes  a  time/date  stamp  next  to each data point. If Automatic Read is enabled, data is sampled at 1Hz; however, the data is logged to the file only if the temperature changes. This slows the growth of  the  data-logging  file.  When  Automatic  Read is disabled, the data is logged each time the Read Temp button is clicked. To stop data logging, uncheck the Data Logging checkbox.

## General-Purpose SPI Utility

There are two methods for communicating with the MAX6675: through the user-interface panel or through the general-purpose SPI utility .  This  utility  (Figure  2) configures SPI parameters such as clock polarity (CPOL), clock phase (CPHA), and chip-select (CS) polarity.

The fields where pin numbers are required apply to the pins of the parallel port connector.

The utility  handles  the  data  only  in  byte  (8-bit)  format. Data longer than 1 byte must be handled as multiple bytes. For example, a 16-bit word should be broken into two 8-bit bytes.

To write data to the slave device, enter the data into the field labeled: Data bytes to be written. Each data byte should be hexadecimal, prefixed by 0x, and separated with a comma. Press the Send Now button to write the data to the slave. Note: The MAX6675 is a read-only device and cannot be written to.

To read data from the slave device, the field: Data bytes to be written: must contain hexadecimal values, includes the same number of bytes as to be read from the slave. For example, to read 16-bit data from the MAX6675, 2 bytes must be written, each prefixed by 0x and separated by a comma (default is 0x00, 0x00). Note: When  using  the  SPI  utility,  uncheck  the Automatic Read checkbox in the main display.

## Evaluating with a Lower Supply Voltage

The MAX6675 EV kit is configured for operating at 5V. To evaluate the MAX6675 at a lower supply voltage, cut the traces shorting the pins of JU1. Apply the desired voltage (between 3V and 5V) to the VCC pad. Note: A 7V to 20V supply must be connected to VIN to power the MAX1840 level translator.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. Main Display for the MAX6675EVKIT

<!-- image -->

## Connecting to a Microcontroller

The MAX6675 EV kit can be monitored externally with a microcontroller or other control device by cutting the traces shorting the pins of JU2, JU3, and JU4 and connecting to the pads labeled SCK, CS , and SO.

## Evaluating the MAX6674

The MAX6675 EV kit can also evaluate the MAX6674. Remove the MAX6675 from the board and install the new part. Select the MAX6674 radio button on the main display of the software.

## Open Thermocouple Detection

To enable the Open Thermocouple Detection, install a shunt on jumper JU6. This connects pin 2 of the MAX6675 to ground.

<!-- image -->

## MAX6675 Evaluation Kit

Figure 2. SPI Utility Showing the Settings to Communicate with the MAX6675 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6675 Evaluation Kit

Figure 3. MAX6675 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX6675 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX6675 Evaluation Kit

Figure 5. MAX6675 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6675 Evaluation Kit

Figure 6. MAX6675 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 5, 6

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6