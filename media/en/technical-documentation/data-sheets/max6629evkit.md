<!-- lastmod 2022-08-03 -->
## General Description

The MAX6629 evaluation kit (EV kit) is an assembled and tested PC board that demonstrates the MAX6629 temperature sensor. It monitors the junction temperature  of  the  MAX6629 and converts the temperature to 12-bit + sign data.

Windows 95/98/2000 ® -compatible software provides a user-friendly interface to exercise the features of the MAX6629. The program is menu driven and offers a graphic interface with control buttons and temperature display.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                       |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------|
| C1, C4        |     2 | 0.1µF, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA, Murata GRM39X7R104K016, or TDK C1608X7R1C104K |
| C2            |     1 | 0.1µF, 50V X7R ceramic capacitor (0805) Taiyo Yuden UMK212BJ104KG, Murata GRM40X7R104K050, or TDK C2012X7R1H104K  |
| C3            |     1 | 2.2µF, 16V X7R ceramic capacitor (1206) Taiyo Yuden EMK316BJ225ML, Murata GRM426X7R225K016, or TDK C3216X7R1C225M |
| J1            |     1 | DB25 male right-angle connector                                                                                   |
| JU1-JU6       |     0 | Not installed                                                                                                     |
| U1            |     1 | MAX6629MUT                                                                                                        |
| U2            |     1 | MAX1615EUK                                                                                                        |
| U3            |     1 | 74HCT04 hex inverter                                                                                              |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Murata      | 814-237-1431 | 814-238-0490 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| TDK         | 847-803-6100 | 847-803-6296 |

Windows is a registered trademark of Microsoft Corp. SPI is a trademark of Motorola, Inc.

<!-- image -->

## Features

- ♦ Measures and Displays Temperature
- ♦ SPI™-Compatible Serial Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Available in a 6-Pin SOT23 Package
- ♦ Assembled and Tested
- ♦ Includes Windows 95/98/2000-Compatible Software and Demo PC Board

## Ordering Information

| PART          | TEMP. RANGE   | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX6629EVKIT* | 0°C to +70°C  | 6 SOT23      |

## Quick Start

## Required Equipment

Before you begin, you will need the following equipment:

- An IBM PC-compatible computer running Windows 95/98/2000
- A parallel printer port (this is a 25-pin socket on the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the MAX6629 EV kit
- A DC power supply capable of supplying any voltage between +7V and +20V at 100mA

## Procedure

## Do not turn on the power until all connections are made.

- 1) Connect a cable from the computer's parallel port to the MAX6629 EV kit. Use a straight-through 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 2) The MAX6629.EXE software program can be run from the floppy or hard drive. Use the Windows program manager to run the program. If desired, you may use the INSTALL.EXE program to copy the files

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6629 Evaluation Kit

and create icons for them in the Windows 95/98/ 2000 Start menu. An uninstall program is included with  the  software.  Click  on  the  UNINSTALL icon to remove the EV kit software from the hard drive.

- 3) Connect the +7V to +20V supply to the pads labeled VIN and GND.
- 4) Turn on the power supply.
- 5) Start  the  MAX6629 program by opening its icon in the Start menu.
- 6) Observe as the program automatically detects the MAX6629 and starts the main program.

## Detailed Description

Figure 1 is the main display for the MAX6629 EV kit.

## User-Interface Panel

The user interface is easy to operate. Use either the mouse or the Tab key to navigate. Note: Words in bold face are user-selectable features in the software.

The program continually polls the device for new temperature data. To disable the continuous polling of data, uncheck the Automatic Read checkbox. Press Read Temp to get the current temperature.

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is  sampled at 1Hz; however, the data is logged to the file  only  if  the  temperature  changes.  This  slows  the growth of the data-logging file. When Automatic Read is  disabled, the data is logged each time the Read Temp button is clicked. To stop data logging, uncheck the Data Logging checkbox.

## General-Purpose SPI Utility

There are two methods for communicating with the MAX6629: through the user-interface panel or through the general-purpose SPI utility. This utility (Figure 2) configures SPI parameters such as clock polarity (CPOL), clock phase (CPHA), and chip-select (CS) polarity.

The fields where pin numbers are required apply to the pins of the parallel port connector.

The utility  handles  the  data  only  in  byte  (8-bit)  format. Data longer than a byte must be handled as multiple bytes. For example, a 16-bit word should be broken into two 8-bit bytes.

To write data to the slave device, enter the data into the field  labeled  Data  bytes  to  be  written.  Each  data  byte should be hexadecimal, prefixed by 0x, and separated with a comma. Press the Send Now button to write the data to the slave. Note: The MAX6629 is a read-only device and cannot be written to.

To read data from the slave device, the field Data bytes to be written must contain hexadecimal values. Include the same number of bytes as to be read from the slave. For example, to read 16-bit data from the MAX6629, 2 bytes must be written, each prefixed by 0x and separated by a comma (default is 0x00, 0x00). Note: When using the SPI utility, uncheck the Automatic Read checkbox in the main display (Figure 1).

Figure 1. Main Display for MAX6629 EV Kit

<!-- image -->

Figure 2. SPI Utility Showing the Settings to Communicate with the MAX6629 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating with a Lower Voltage

The MAX6629 EV kit is configured for operating at +5V. To evaluate the MAX6629 at a lower voltage, cut the traces shorting the pins of JU2 and JU3. Apply the desired voltage (between +3V and +5V) to the VCC pad and apply +5V to the VINVERTER pad.

Caution: Operating the 74HCT04 inverter with a supply voltage below +5V might damage the inverter.

## MAX6629 Evaluation Kit

## Connecting to a Microcontroller

The MAX6629 EV kit can be monitored externally with a microcontroller or other control device by cutting the traces shorting the pins of JU4, JU5, and JU6 and connecting to the pads labeled SCK, CS , and SDO.

## Evaluating the MAX6630/ MAX6631/MAX6632

The MAX6629 EV kit can also evaluate the MAX6630, MAX6631, or MAX6632. Remove the MAX6629 from the board and install the new part.

<!-- image -->

Figure 3. MAX6629 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6629 Evaluation Kit

<!-- image -->

Figure 4. MAX6629 EV Kit Component Placement GuideComponent Side

Figure 5. MAX6629 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX6629 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600