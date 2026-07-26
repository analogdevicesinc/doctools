<!-- lastmod 2022-08-05 -->
<!-- image -->

## Fiber Optic Monitor and Control Evaluation Kit

## General Description

The fiber optic monitor and control evaluation kit (EV kit) provides a hardware and software interface for evaluating the DS1854, DS1857, DS1858, and DS1859. The kit includes Microsoft ® Windows ® -compatible software that  performs the 2-wire functions required to change the device settings and monitor the device registers. In addition to the general communications functions provided by the software, it allows the resistors' temperature-addressed look-up tables to be programmed from a text file.  The  kit  hardware  includes  test  points  that allow inputs to be connected to the external stimuli and outputs to be monitored by test equipment; jumpers can be used to configure the device for the customer's application.

## EV Kit Contents List

Floppy Disk with EV Kit Software

Evaluation Board with DS3900 Communication Module Serial  Cable Not Included (see Required Equipment section)

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| C1, C2        |     2 | 1.0µF ceramic capacitors, 0805                           |
| C3            |     1 | 0.1µF ceramic capacitor, 0805                            |
| J1            |     1 | Banana jack, 4mm, red, PCboard mount, Deltron 164-6219   |
| J2            |     1 | Banana jack, 4mm, black,PC board mount, Deltron 164-6218 |
| JP1, JP2, JP3 |     3 | Header connectors, male, 100-mil, 1 x 6                  |
| JP4           |     1 | Header connector, male, 100-mil, 2 x 4                   |
| JP5, JP6      |     2 | Header connectors, male, 100-mil, 2 x 8                  |
| JP8           |     1 | Header connector, male, 100-mil, 1 x 2                   |
| TP1-TP19      |    19 | Test points                                              |
| M1            |     1 | DS3900 serial communication module                       |
| U1            |     1 | Test socket, ENPLAS, OTS-24-0.65-01                      |
| U2            |     1 | LM50,SOT 23 (optional)                                   |

<!-- image -->

## Features

- ♦ Supports DS1854, DS1857, DS1858, and DS1859
- ♦ Windows Software Allows Easy Access to Device Functionality and Handles 2-Wire Communication
- ♦ ZIF Socket Allows All Four Device Types to be Evaluated from a Single Board
- ♦ Software Allows User to Program Variable Resistors from a Text File
- ♦ Real-Time Monitoring Software Continuously Monitors Temperature, VCC, Monitor Inputs, and Status Bytes
- ♦ External Temperature Sensor Footprint for Evaluating the DS1857
- ♦ EV Kit's Software can be Used to Configure or Monitor the Device in a Customer's Application Circuit

## Ordering Information

| PART        | EVALUATES        | IC PACKAGE   |
|-------------|------------------|--------------|
| DS185XEVKIT | DS1854/57/58/59* | 16-pin TSSOP |

Microsoft and Windows are registered trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Fiber Optic Monitor and Control Evaluation Kit Fiber Optic Monitor and Control Evaluation Kit

Figure 1. DS1854/DS1857/DS1858/DS1959 Kit Contents

<!-- image -->

## Required Equipment

- Device samples (TSSOP package)
- Serial  cable  (Radio  Shack  26-117,  Digi-Key AE1020-ND, or equiv.)
- IBM-compatible PC with a 3.5in floppy drive and Win95/WinNT 4.0 or higher
- Power supply (3.3V or 5V)

## Quick Start

- 1) Copy the executable file (DS185XEVKit.exe) from the floppy disk to the PC's hard drive, or the latest version of the EV kit software can be downloaded from ftp.dalsemi.com/pub/system\_exten-sion/EVKits/DS185XEVKit/.
- 2) Install the DS3900 module on the EV Kit board if it was not pre-installed when the kit was received (Figure 2). Make sure the DS3900's switches are in the on position.
- 3) Connect the serial cable from the DS3900 to the PC.
- 4) Choose a device to evaluate and insert it into the socket (top justified). Be sure to match up the pin 1 indicator on the device to the upper left corner of the socket. Note : The dot on the corner of the package indicates pin 1; see Figure 2 for the correct orientation of the device in the socket.
- 5) Place jumpers on board for the device that is being evaluated as shown in Figure 3. These are default jumper settings, which can be changed later as required by the application.
- 6) Connect a 3.3V or 5V power supply to the board (Figure 2).
- 7) Open the software, and select the device that you are evaluating on the startup screen.

The following sections describe the available evaluation hardware and software features.

## Detailed Description

To aid in evaluating the devices, all of the input and output signals have test points to allow connection of the signals to test equipment. In the case of inputs, these test points can be used to connect the device to external stimuli, which, depending on the input, may be digital input for IN1 or IN2, or an analog input for one of the monitoring pins. The outputs (OUT1, OUT2) can be connected to an oscilloscope or external circuitry as required for prototyping and evaluation. See the schematic diagram in Figure 12 and the layout in Figure 13 for more detail regarding kit board's circuitry.

Because the pinouts of the DS1854/DS1857/DS1858/ DS1859 are not identical, tables printed on the left and right side of the board show the function of the test points and jumpers by device type. Use the appropriately

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Fiber Optic Monitor and Control Evaluation Kit

<!-- image -->

Figure 2. EV Kit Hardware (Rev 2.0)

<!-- image -->

Figure 3. Default Jumper Settings

<!-- image -->

labeled column for the device being evaluated (e.g., '54' for DS1854). Since the DS1859 was released after the EV Kit, use the jumpers/test points labeled '58' when evaluating the DS1859. Check our FTP site for the latest version of the EV Kit software.

Jumpers are present to allow the pins that can be digital inputs to be connected to VCC or GND. For any given device, some of the pins will be analog inputs or outputs, so be advised that jumper settings should be monitored carefully to prevent connecting an output to VCC or GND, and to prevent the analog input from being connected to an invalid level. For example, the first jumper for a DS1854 is OUT1, which is an open-collector output. Connecting it to VCC could cause bus contention if the device's internal driver is driving the output low. The jumper settings as they relate to specific devices are explained further in the evaluation sections below.

One similarity between all of the devices is the resistor operation. All the devices have two low-temperature coefficient digital resistors. The resistors have test points located on the upper right-hand corner of the board, and jumpers are present that allow the low ends of the resis-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Fiber Optic Monitor and Control Evaluation Kit Fiber Optic Monitor and Control Evaluation Kit

tors to be connected to ground or the high ends of the resistors to be connected to VCC.

Note: It  is  possible  to  accidentally  short  VCC to  GND with the resistor jumper block. Also, connecting the high end of a resistor to VCC and the low end to GND at the same time may exceed the resistor current specification (dependent on the resistor setting). Take care to avoid these hazards.

## Evaluating the DS1854

The test points and jumpers for the DS1854 are labeled in  the  '54'  column of the tables printed on the kit board. The DS1854's OUT1 and OUT2 outputs are connected to jumpers as well as the test points on the kit because these signals are inputs for the DS1857. To prevent bus contention, these jumpers should be removed prior to powering up the kit. A detailed description of all of the jumper settings possible for the DS1854 is provided in Table 1.

## Monitor Inputs

Typically, the monitor inputs are driven by a bench supply during evaluation. The software displays the voltages on the monitor pins on the real-time monitoring page.

## Digital Outputs

OUT1 and OUT2 can be sampled at the test points with a multimeter or an oscilloscope for most evaluation purposes. The outputs are open drain so a pullup resistor (not provided on the PC board) must be used to output a high state. The test points can also be connected to external circuitry for evaluation.

## Resistor Terminals

The resistor test points can be used to attach the DS1854's resistors to external circuitry for evaluating the device. If the low terminal requires a connection to ground or the high terminal requires a connection to VCC

## Table 1. DS1854 Jumper Settings

| DS1854 JUMPER NAME         | JUMPER SETTINGS   | FUNCTION                                                                                                                                                                       |
|----------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OUT1                       | Do Not Connect    | Output 1. Open-collector output for IN1.                                                                                                                                       |
| IN1                        | V CC or GND       | Input 1. Digital input corresponding with OUT1.                                                                                                                                |
| OUT2                       | Do Not Connect    | Output 2. Open-collector output for IN2.                                                                                                                                       |
| IN2                        | V CC or GND       | Input 2. Digital input corresponding with OUT2.                                                                                                                                |
| WP                         | V CC , NC, or GND | Write Protect. Connect to GND to allow the EEPROM to be written. Disconnect or connect to V CC to write protect the memory.                                                    |
| RHIZ                       | V CC , NC, or GND | Resistor High-Impedance Enable. Connect to V CC or leave disconnected to force the resistor terminals to enter a high-impedance state. Connect to GND to enable the resistors. |
| LM50 (right side of board) | Do Not Connect    | Used for DS1857 only.                                                                                                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

it can be done by the jumper block. If the resistor values are not changing as expected with adjustments by the software, check the write-protect (WP) pin to make sure it is  grounded. If the device is write protected, it can prevent access to the digital resistors. If the resistors appear to be high impedance, check to see if the RHIZ pin is disconnected or connected to VCC. This disconnects the resistors from their terminals. If RHIZ is grounded, the resistor should operate normally.

## Evaluating the DS1857

The test points and jumpers for the DS1857 are labeled in  the  '57'  column of the tables printed on the kit board. The last jumper position for the DS1857 is the MON1 input. This jumper is present because the same pin is a digital input for the DS1854, but it should always be disconnected when evaluating a DS1857. A detailed description of all of the jumper settings possible for the DS1857 is provided in Table 2.

## Address Inputs

The address inputs, A2, A1, and A0 can determine the main 2-wire address for the DS1857. The possible DS1857 addresses that can be configured using the address inputs are shown in Table 3. These inputs can be disabled using the configuration register (89 hex), which sets the 2-wire address equal to the value stored in the device address register (8C hex). When the kit software is first launched, it assumes a main device address of A2h. If another address is set using the jumpers or the EEPROM configuration registers, the software address must be set using the 2-wire page.

## Monitor Inputs

Typically, the monitor inputs are driven by a bench supply during evaluation. The software displays the voltages on the monitor pins on the real-time monitoring page.

## Fiber Optic Monitor and Control Evaluation Kit

## Table 2. DS1857 Jumper Settings

| DS1857 JUMPER NAME         | JUMPER SETTINGS           | FUNCTION                                                                                                                                                                                                                                                                                    |
|----------------------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A0                         | V CC or GND               | Address Input A0. See the Address Inputs section.                                                                                                                                                                                                                                           |
| A1                         | V CC or GND               | Address Input A1. See the Address Inputs section.                                                                                                                                                                                                                                           |
| A2                         | V CC or GND               | Address Input A2. See the Address Inputs section.                                                                                                                                                                                                                                           |
| WP                         | V CC , NC, or GND         | Write Protect. Connect to GND to allow the EEPROM to be written. Disconnect or connect to V CC to write protect the memory.                                                                                                                                                                 |
| RHIZ                       | V CC , NC, or GND         | Resistor High-Impedance Enable. Connect to V CC or leave disconnected to force the resistor terminals to enter a high-impedance state. Connect to GND to enable the resistors.                                                                                                              |
| MON1                       | Do Not Connect            | Monitor Input 1. Connect to an external analog source through the test point for evaluating the A/D converter.                                                                                                                                                                              |
| LM50 (right side of board) | Connected or Disconnected | External Temperature Sensor. Add this jumper to connect the LM50 (if populated by customer) to the DS1857's external temperature sensor pin. Remove this jumper to disconnect the temperature sensor, which allows the pin to be driven by an external voltage connected to the test point. |

## Table 3. DS1857 Address Settings

|   A2 |   A1 |   A0 | CORRESPONDING MAIN DEVICE ADDRESS (hex)   |
|------|------|------|-------------------------------------------|
|    0 |    0 |    0 | A0                                        |
|    0 |    0 |    1 | A2*                                       |
|    0 |    1 |    0 | A4                                        |
|    0 |    1 |    1 | A6                                        |
|    1 |    0 |    0 | A8                                        |
|    1 |    0 |    1 | AA                                        |
|    1 |    1 |    0 | AC                                        |
|    1 |    1 |    1 | AE                                        |

## External Temperature Sensor

The DS1857 is designed and manufactured to operate with an LM50 temperature sensor. To allow the evaluation  of  the  DS1857 with an LM50, a footprint for the LM50 is added to the right side of the board. This allows a SOT-23 LM50 to be added to the board by the customer. Additionally, a jumper is next to the LM50 that  allows  the  external  temperature  sensor  to  be  disconnected from the test point and the DS1857. This makes it possible to evaluate temperature input of the DS1857 using the test point and a voltage supply. To evaluate the DS1857 with the LM50, place the jumper on the board to connect the DS1857 to the LM50's output.

<!-- image -->

## Resistor Terminals

The resistor test points can be used to attach the DS1857's resistors to external circuitry for evaluating the device. If the low terminal requires a connection to ground or the high terminal requires a connection to VCC, it can be done by the jumper block. If the resistor values are not changing as expected with adjustments by the software, check the WP pin to make sure it is grounded. If the device is write protected, it can prevent access to the digital resistors. If the resistors appear to be high impedance, check to see if the RHIZ pin is disconnected or connected to VCC. This disconnects the resistors from their terminals. If RHIZ is grounded, the resistor should operate normally.

## Evaluating the DS1858 or the DS1859

The test points and jumpers for the DS1858 and the DS1859 are labeled in the '58' column of the printed tables on the kit board. The DS1858/59's OUT1 and OUT2 outputs are connected to the corresponding jumpers as well as the test points on the kit because these signals are inputs for the DS1857. To prevent bus conflicts, these jumpers should be removed prior to powering up the kit. A detailed description of all of the jumper settings for the DS1858/59 is provided in Table 4.

## Monitor Inputs

Typically, the monitor inputs are driven by a bench supply during evaluation. The software displays the voltages on the monitor pins on the real-time monitoring page.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Fiber Optic Monitor and Control Evaluation Kit Fiber Optic Monitor and Control Evaluation Kit

## Table 4. DS1858/DS1859 Jumper Settings

| DS1858/DS1859 JUMPER NAME   | JUMPER SETTINGS   | FUNCTION                                                                                                                    |
|-----------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------|
| OUT1                        | Do Not Connect    | Output 1. Open-collector output for IN1.                                                                                    |
| IN1                         | V CC or GND       | Input 1. Digital input corresponding with OUT1.                                                                             |
| OUT2                        | Do Not Connect    | Output 2. Open-collector output for IN2.                                                                                    |
| IN2                         | V CC or GND       | Input 2. Digital input corresponding with OUT2.                                                                             |
| WP                          | V CC , NC, or GND | Write Protect. Connect to GND to allow the EEPROM to be written. Disconnect or connect to V CC to write protect the memory. |
| MON1                        | Do Not Connect    | Monitor Input 1. Connect to an external analog source through the test point for evaluating the ADC.                        |
| LM50 (right side of board)  | Do Not Connect    | Used for DS1857 only.                                                                                                       |

## Digital Outputs

OUT1 and OUT2 can be sampled at the test points with a multimeter or an oscilloscope for most evaluation purposes. The outputs are open drain so a pullup resistor (not provided on the PC board) must be used to output a high state.The test points can also be connected to external circuitry for evaluation.

## Resistor Terminals

The resistor test points can be used to attach the DS1858/59's resistors to external circuitry for evaluating the device. If the low terminal requires a connection to ground or the high terminal requires a connection to VCC, it can be done by the jumper block. If the resistor values are not changing as expected with adjustments by the software, check the WP pin to make sure it is grounded. If the device is write protected, it can prevent access to the digital resistors. If the resistors appear to be high impedance, check to see if the RHIZ pin is disconnected or connected to VCC. This disconnects the resistors from their terminals. If RHIZ is grounded, the resistor should operate normally.

## Software

The latest version of the EV Kit software can be downloaded from ftp.dalsemi.com/pub/system\_extension/ EVKits/DS185XEVKit.

To start the application, double-click on the executable file  DS185XEVKit.exe. When the following dialog box appears, choose the device that is being evaluated and click OK (Figure 4).

If the board is not connected properly, a message box will  appear and the software will open (Figure 5). Although it is possible to browse the functions available in the software when the evaluation board has not been found, the software does not attempt to communicate with the IC on the board. Make sure the DS3900 is connected properly to the board and the PC (see the Troubleshooting section),  then  close  the  software  and retry.  If  the  board  is  operating  properly,  the  software will open with no message (Figure 6).

Figure 4. Device Selection Dialog Box

<!-- image -->

Figure 5. No EV Kit Found Message Box

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Fiber Optic Monitor and Control Evaluation Kit

Figure 6. General Page

<!-- image -->

## General Page

The kit software is identical for all devices with the exception of the DS1858/59, which has an extra monitor input on applicable pages. The DS1857 temperature sensor is denoted as external because it is designed to work with an external temperature sensor (LM50). All the values shown on the general page are read-only. Click on Read or type Alt + R to update the display's data. The general page also displays the main and auxiliary device addresses. If the device is not found, verify that the software address matches the address register and/or the jumper settings if evaluating a DS1857.

## Manual Resistor Control Page

The manual resistor control page disables the temperature update function each time the page is entered and allows read and write access to the resistor registers. To change the resistor values, use either the spin control or type a position (0 to 255 decimal) and click the Write button. To read the present value of the resistor register,  click  the Read button. This page also allows the temperature look-up table mode bits and the resis- tor high-impedance control and status (HIZSTA is readonly)  bits  to  be  adjusted  or  monitored  using  the  read and write bits buttons.

<!-- image -->

When the user leaves this page, the mode bits controlling  the  temperature update function are typically restored, and the automated temperature look-up function  is  re-enabled.  To  remain  in  manual  resistor  mode after  this  page  is  exited,  select  the Remain in Manual Resistor Mode check box. This allows the user to exit the manual resistor control page without re-enabling the temperature look-up function. To exit the manual resistor  mode, the Remain in Manual Resistor Mode check box must be disabled and the user must leave the manual resistor control page.

## Memory Page

The memory page can be used to read and write data to  or  from  any  of  the  device's  registers.  To  write  to  a register(s), first select the register's table, then use one of  the  four  available  write  functions  (see Read and Write Functions ). To read data, select a table, and then use one of the three available read functions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Fiber Optic Monitor and Control Evaluation Kit Fiber Optic Monitor and Control Evaluation Kit

Figure 7. Manual Resistor Control Page

<!-- image -->

## Read and Write Functions

## Single Byte Read and Write Functions

To read a single byte, type a hexadecimal address and click the corresponding Read button. To write a single byte, type the byte's address and the new data (both hexadecimal) and click the corresponding Write button. The read or write is performed in the selected table. Two single byte read/write buttons have been provided for the user's convenience; they both perform the same function.

## 2-Byte Read and Write Functions

The 2-byte functions are present to simplify dealing with the 2-byte functional registers present on these devices such as the VCC, temperature, and the monitor registers. To use the 2-byte read function, type in the address of the LSB, and click the Read button to read two consecutive bytes beginning at that address. To use the write function,  type  the  address of the LSB, enter both new data values, and click the Write button. The read or write will be performed in the selected table. Two 2-byte read/write buttons have been provided for the user's convenience; they both perform the exact same function.

## Page Read and Page Write Functions

The page read and write functions are present to simplify changing large amounts of data at a time, such as changing the entire contents of a resistor look-up table. The page numbers are equal to the 5 MSBs of the reg- ister  addresses being adjusted, and the eight edit boxes correspond to the 3 LSBs of the register addresses. The page-read function allows an entire memory page (8-bytes) to be read by selecting the page number on either spin control and clicking the Read button. To write a page, select the page number, changing all eight data values to their new contents, and clicking the Write button. Either spin control can be used to select the page, and the operation will be performed in the selected table.

## Memory Fill Tool

The memory fill tool allows a range of registers to be written to the same value. To use the fill tool, type the data value to fill, the start and stop addresses of the memory range to be adjusted, and click the Fill  Now button. The memory fill will affect the selected table only.

## 2-Wire Page

The 2-wire page provides the user with access to the 2wire communications functions of the DS3900, and allows the software address used by all sections of the EV kit software to be adjusted. Although the 2-wire page's main purpose is for debugging, it can allow the kit to be used to communicate with any 2-wire device.

Clicking on a 2-wire control will  immediately perform the corresponding function listed in Table 5.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Fiber Optic Monitor and Control Evaluation Kit

Figure 8. Memory Page

<!-- image -->

## Main Device Address

If an address other than A2h is desired to test either the DS1857's address pins, or to use the EEPROM address function, the main device address must be changed in this window to match the address of the device.

## The Find Button

The Find button searches all the possible addresses on the 2-wire bus for devices that respond to those addresses, and it reports back the addresses that were acknowledged in the box below the button. Depending on the DS1854/DS1857/DS1858/DS1859's current mode it responds to one or two addresses. The main device address can be any value from 00h to FEh. The auxillary address, if used, is always A0h. This button is very useful to determine the address the device is responding to when the software reports a communication error.

## Using the 2-Wire Page to Access a Device

To access a device using the 2-wire page, all of the items that are accomplished by a 2-wire master have to be manually done by the software user. For example, to write a byte (34h to 80h) to a DS1857 with a device address of A2h, the following sequence must be completed.

- 1) Main device address must be set to A2h.
- 2) Send start (issues 2-wire start condition).
- 3) Send write (writes A2h, the device address, over 2wire bus).
- 4) Send data 80h (writes 80h, the data address, over the 2-wire bus).
- 5) Send data 34h (writes 34h, the data, over the 2-wire bus).
- 6) Send stop (issues a 2-wire stop condition).

<!-- image -->

Although this is not a quick or refined approach, it provides maximum flexibility for debugging 2-wire problems or to communicate with ICs that do not have custom software.

## File Page

## Saving Register Settings to a Text File

The file  page allows the user to copy all the register settings from select memory tables and send the data to a text file. The check boxes choose which tables are copied when the Dump button is pressed. A dialog box prompts the user for a file name and location to save the file. The text file is saved using a tab-delimited format, which is easy to import into Excel. Any errors that were encountered during programming are reported in the status box.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Fiber Optic Monitor and Control Evaluation Kit Fiber Optic Monitor and Control Evaluation Kit

<!-- image -->

Figure 9. 2-Wire Page

<!-- image -->

Figure 10. File Page

<!-- image -->

## Fiber Optic Monitor and Control Evaluation Kit

Figure 11. Real-Time Monitoring Page

<!-- image -->

## Table 5. 2-Wire Page Functions Description

| FUNCTIONS   | DESCRIPTION                                                                                                                                                                                                                                                                                 |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Send Start  | Performs 2-wire start and repeated start functions.                                                                                                                                                                                                                                         |
| Send Write  | Writes the main device address listed in the Software 2-Wire Settings section over the 2-wire bus.                                                                                                                                                                                          |
| Send Read   | Writes the main device address +1 (if A2h is listed it writes A3h) over the 2-wire bus. The main device address is listed in the Software 2-Wire Settings section.                                                                                                                          |
| Send Byte   | Sends the byte to the right of the button over the 2-wire bus.                                                                                                                                                                                                                              |
| Read w/ACK  | Reads one byte and acknowledges (ACK) the data transfer during the 9th clock cycle.                                                                                                                                                                                                         |
| Read w/NACK | Reads one byte and does not acknowledge (NACK) the data transfer during the 9th clock cycle.                                                                                                                                                                                                |
| Send Stop   | Performs 2-wire stop function.                                                                                                                                                                                                                                                              |
| 9 Clocks    | Clocks the 2-wire bus nine times. This can be used followed by the STOP command to reset the 2-wire bus.                                                                                                                                                                                    |
| Find        | The find button searches for all 2-wire devices present on the 2-wire bus and lists their addresses. This is useful if the address register has been modified from the default value, because a device cannot be addressed to read the address register if its device address is not known. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Fiber Optic Monitor and Control Evaluation Kit Fiber Optic Monitor and Control Evaluation Kit

## Troubleshooting

| SYMPTOM                           | CAUSE                                | SOLUTION                                                                                                                                                                                                                                               |
|-----------------------------------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Evaluation board not found.       | Board not connected properly.        | Make sure to connect the cable from the DB9 connector on the DS3900 to the PC. Verify the DS3900 is firmly in place. Verify the power is on.                                                                                                           |
| No output on OUT1/OUT2.           | No input on IN1/IN2.                 | Verify jumper settings.                                                                                                                                                                                                                                |
| Resistance not reading correctly. | Type of multimeter used.             | Force a current and measure the voltage to get resistance.                                                                                                                                                                                             |
| Communication Error               | Device is not communicating with PC. | Verify main device address in the software matches the address set on the board (DS1857). Verify the device is in the socket and the device type is the one you intended to evaluate. Verify the DS3900 is firmly in place. Make sure switches are on. |
| Not able to write to EEPROM.      | Device is write protected.           | Verify that WP is connected to GND.                                                                                                                                                                                                                    |

## Programming a Device from a Text File

The device's resistor look-up tables can be programmed from a text file. To program the tables, press the Gen Template button to create a template file in the proper format. It prompts the user for a file name and location to save the template file. Open the template file in Excel. A table is present for each resistor's look-up table. Modify the data for each table until the spreadsheet reads as desired. If it is desired to only program one look-up table, delete the second table, but be careful not to change any of the formatting of the other table. Once the contents of the table are correct, save the file as a text file. Press the Fill button in the kit software. A dialog prompts for the location and name of the text file. Navigate to the file, select it, and press OK . The program parses the file looking for inconsistencies. If everything appears okay, it executes the fill instruction. The program reports what it has done in the status window, which should be checked to verify that no errors occurred.

## Real-Time Page

The real-time page displays the current temperature, VCC, and external monitoring signals at regular time intervals (0.1s). It also displays the monitor alarm flags and resistor values.

The clear button can be used to clear all of the miscellaneous flags, which allows the user to easily spot the order that flag raising events occur. When the clear button is pressed, the software clears the flags and begins pulling the flag registers much quicker than the normal 0.1s interval of the page. The register values read are saved to a buffer, and the display is updated at a fast but readable rate so the software user can see the order the flags changed. Although this does not provide the information exactly real-time, it does read the data from the part and present it at a rate the user can process.

## In-Circuit Evaluation

The EV kit can be used to communicate with devices that have already been placed in an application circuit.

To use the EV kit to communicate with an in-circuit device, VCC must be applied to the kit, and SDA, SCL, and the kit's ground must be connected to the application board. Whenever possible, the kit's VCC supply should remain equal to that of the application board to prevent communication problems. The DS3900 has built in 4.7k Ω pullups that can be used for 2-wire communication. If  the  application circuit also has pullups, the DS3900's pullups can be disabled by placing both of the DIP switches in the off position. This prevents the DS3900 and the device from having to sink large currents to pull the SDA and SCL busses low. Once these connections are made, all of the evaluation software functions can be used to evaluate the device in-circuit.

## Technical Support

For additional technical support, please email your questions to MixedSignal.Apps@dalsemi.com.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Fiber Optic Monitor and Control Evaluation Kit

<!-- image -->

Figure 12. DS1854/DS1857/DS1858/DS1859 Evaluation Board Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Fiber Optic Monitor and Control Evaluation Kit

Figure 13. Evaluation Board Layout (Rev 2.0). Newer Revisions May Vary Slightly.

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 14 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
- © 2004 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products.
- DALLAS is a registered trademark of Dallas Semiconductor Corporation.