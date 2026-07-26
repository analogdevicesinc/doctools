<!-- lastmod 2022-08-05 -->
## MAX31730 Evaluation Kit

## General Description

The MAX31730 evaluation kit (EV kit) provides the hardware and software graphical user interface (GUI) necessary to evaluate the  MAX31730 3-channel  remote  temperature  sensor  in  a μMAX M or  TDFN  package.  The  EV  kit  includes  a  MAX31730 installed, as well as three external diode-connected transistors and a USB-to-SMBus/I 2 C interface.

## EV Kit Contents

- Assembled circuit board including MAX31730
- Mini USB cable

Ordering Information appears at end of data sheet.

## MAX31730U EV Kit Photo

## Features

- Easy Evaluation of the MAX31730
- Three External Diode-Connected Transistors
- EV Kit Hardware is USB Powered (USB Cable Included)
- USB HID Interface
- Windows XP ® - and Windows ®  7-Compatible Software
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

µMAX is a registered trademark of Maxim Integrated Products, Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

<!-- image -->

Evaluates: MAX31730

## EV Kit Files

| FILE                   | DESCRIPTION         |
|------------------------|---------------------|
| MAX31730EVKitSetup.EXE | Application Program |

Note : The .EXE is downloaded as a .ZIP file.

## Quick Start

## Required Equipment

- MAX31730 EV Kit Hardware
- Windows XP or Windows 7 PC
- Spare USB port
- Mini USB cable (included)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the install or EV kit software. Text in bold and under­ lined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure that jumpers/shunts (J22, J1-J3) are installed.
- 2) Set the EV kit hardware on a nonconductive surface to ensure that nothing on the PCB gets shorted together.
- 3) Prior to starting the GUI, connect the EV kit hardware to a PC using the supplied Mini-USB cable, or equivalent.   The  power  LED (D20) should be green and the com LED (D21) should be red and slowly flash orange.
- 4) Windows  should  automatically  begin  installing  the necessary  device  driver.    The  USB  interface  of  the EV kit hardware is configured as an HID device and therefore  does  not  require  a  unique/custom  device driver.    Once  the  driver  installation  is  complete,  a Windows message appears near the System Icon menu  indicating  that  the  hardware  is  ready to  use.    Do  not  attempt  to  run  the  GUI  prior  to  this message.  If you do, you must close the application and restart it once the driver installation is complete.  On some versions of Windows, administrator privileges may be required to install the USB device.
- 5) Once  the  device driver installation is complete. Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX31730EVKitSetup.ZIP. Save the EV kit software to a temporary folder.
- 6) Unzip the .ZIP file and double-click the .EXE file to run the installer.  A message box stating: The publisher could not be verified.  Are you sure you want to run this software? may appear.  If so, click Yes .
- 7) Follow  the  instructions  on  the  installer  and  once complete, click Finish . The default location of the GUI is in the program files directory.
- 8) When  the  GUI  appears,  the  text  in  the  bottom right-hand  corner  should  display EV  Kit  Hardware Connected . The com LED (D21) on the EV kit board should turn green.

## Detailed Description of Software

## Software Startup

If the MAX31730 EV kit is connected when the software is  opened,  the  software  first  initializes  the  hardware  to communicate. The  software  then  searches  for  all  slave addresses on the I 2 C bus and connects to the first valid slave  address.  The  GUI  displays EV  Kit  Hardware Connected in the bottom right-hand corner. If the EV kit is not connected on software startup, the GUI populates with default EV kit values. Once the EV kit is connected, the GUI executes the sequence above.

## Menu and Status Bar

The File menu item contains save and load options. To save the current GUI configuration, select Save Config or Save Config As . This saves all the configuration registers to  an  XML file.  If  a  device  is  connected,  this  reads  and saves data directly  from  the  device;  otherwise,  it  saves the configuration that is currently displayed on the GUI. Load Config writes all the configuration data stored in the XML file to the device and then performs a read to update the GUI with the new values. If a device is not connected, Load Config writes  to  a  virtual  device  and  displays the data on the GUI. The Device menu item allows the user to  connect  to  a  desired  device. Find Slave Addresses searches  for  all  slave  addresses  connected  to  the  I 2 C bus. To select a device, click Select Slave Address and all the slave addresses found are shown and are selectable. The Options menu contains the Polling Rate option and  the Log  Polling  Data  to  File option.  The Polling Rate sets the delay between reads. To save the polling data to a CSV file, check the Log Polling Data to File option and then click Start Polling to  select a name for the file and begin reading.

## MAX31730 Evaluation Kit

## Status Log

The status log below the tabs displays all the actions the GUI performs. Whenever an SMBus command is read or written, the action is confirmed by the log. The log can be cleared by pressing the Clear button.

## Status Tab

The Status tab sheet (Figure 1) displays all the current temperatures and the fault status. All values in the Temperature Status group box are read when the tab is selected. To read the values again, press the Read Temp Status button.The One Shot Read button is only enabled when the device is in standby mode by checking the Stop option on the Config tab (Figure 2). The Over Temp and Evaluates: MAX31730

Under  Temp status  is  read  from  Thermal  Status,  High Temperature (32h) and Thermal Status, Low Temperature (33h)  registers.  The Diode  Fault status  is  read  from Diode  Fault  Status  (36h)  register.  The Temperature column  is  read  from  the  temperature  registers  (00h to  07h)  and  the Highest  Temperature is  read  from registers  10h  to  11h.  To  graph  the    temperatures,  start polling  by  clicking  the Start Polling button in the menu bar. To stop polling, press the Stop Polling button. Polling automatically  stops  if  items  in  the File or Connection menu are selected, or if the POR button  is  pressed. To save the polling  data  to  a  CSV  file,  check Log Polling Data to File in the Options menu before polling is started.

Figure 1. MAX31730 EV Kit Software GUI (Status Tab)

<!-- image -->

│

## MAX31730 Evaluation Kit

## Configuation Tab

The Config tab sheet (Figure 2) contains all the configuration registers. All values are read when the tab is selected. In the tables, hold the mouse over the column header to see which register(s) the cells in the column read/write to. The Beta Value column is the only column where all the cells are read-only. If the Extended Range checkbox in the Configuration Register (13h) group box is checked, all the temperature values on the Config and Status tab Evaluates: MAX31730

are updated to reflect the extended range format. The hex values stored in these registers are not changed.

## Registers Tab

The Registers tab  sheet  (Figure  3)  displays  all  the registers  and  their  current  data.  To  read  the  registers, press the Read All button. To write to a register, enter the hex value in the cell and click another cell or press Enter on the keyboard.

Figure 2. MAX31730 EV Kit Software GUI (Config Tab)

<!-- image -->

│

Figure 3. MAX31730 EV Kit Software GUI (Registers Tab)

<!-- image -->

## MAX31730 Evaluation Kit

## SMBus Controls Tab

The SMBus Controls tab sheet (Figure 4) allows the user to read and write to registers using hex values. The One and Two Byte Operations (all HEX values) group box contains controls to read/write 1 or 2 bytes at a time. To read or write a register, enter the register address desired in the Addr or Start Addr edit box and press the Read or Write button. The Bitwise Read/Write group box allows the user to read/write the data in binary format. To read or

write a register, enter the register address in the Address edit  box  and  press  the Read or Write button. The data bits can be flipped by pressing the bit buttons. The All 0's , All 1's , and Invert buttons are useful shortcuts to change all the bits at one time. The Page Mode (all HEX values) group box reads/writes one page (8 bytes) at a time. To read or write a page of memory, enter the starting register address in the Starting Address edit box and press the Read or Write button.

Figure 4. MAX31730 EV Kit Software GUI (SMBus Controls Tab)

<!-- image -->

│

## MAX31730 Evaluation Kit

## Detailed Description of Hardware

## User­Supplied I 2 C Interface

To  communicate  with  the  MAX31730  using  a  usersupplied  I 2 C  interface,  first  remove  all  J22  jumpers  to disconnect the on-board USB I 2 C interface. Connect all pins on header H1 to the off-board I 2 C interface.

## Changing the Slave Address

The default slave address for the IC is 38h. This address can  be  changed  to  an  address  listed  in  Table  1  by removing jumper J4 and populating resistor R3.

## Table 1. Slave Addresses

| SLAVE ADDRESS   | R3( Ω )                            |
|-----------------|------------------------------------|
| 9Eh             | Open (> 12kΩ)                      |
| 9Ch             | 9.31kΩ                             |
| 9Ah             | 6.81kΩ                             |
| 98h             | 4.75kΩ                             |
| 3Eh             | 3.01kΩ                             |
| 3Ch             | 1.69kΩ                             |
| 3Ah             | 750Ω                               |
| 38h             | 0 (short to GND with J4 installed) |

## Table 2. Description of LEDs

| LED         | COLOR   | DESCRIPTION                                                                                                                |
|-------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| D1          | Red     | THERM : A thermal fault has occured.                                                                                       |
| D20 (Power) | Red     | USB Power Fault: A fault oc- curred due to overvoltage limit, current limit, or thermal limit.                             |
| D20 (Power) | Green   | USB Power: USB power supply is on.                                                                                         |
| D21 (Com)   | Red     | Communication: After the soft- ware has initialized the hard- ware, the LED flashes red when an I 2 C command is received. |
| D21 (Com)   | Green   | Initialized: Hardware has been initialized by software.                                                                    |

Evaluates: MAX31730

## User­Supplied Remote Diode

To  connect  a  user-supplied  external  remote  diode,  first remove the channel jumper (J1, J2, or J3) to disconnect the on-board diode. Then connect DXP1, DXP2, or DXP3 and DXN to the external diode. For the TDFN package, each diode has a separate DXN for each channel.

## Troubleshooting

The EV kit should work on the first try directly out of the box. In the rare occasion that a problem is suspected, see Table 4 to help troubleshoot the issue.

## Table 3. Description of Jumpers (J1 -J4, J22)

| JUMPER   | JUMPER NAME   | DESCRIPTION                                                  |
|----------|---------------|--------------------------------------------------------------|
| J1       | Enable Q1     | Connects the remote diode- connected transistor Q1 to DXP1.  |
| J2       | Enable Q2     | Connects the remote diode- connected transistor Q2 to DXP2.  |
| J3       | Enable Q3     | Connects the remote diode- connected transistor Q3 to DXP3.  |
| J4       | ADD           | Connects pinADD to GND.                                      |
| J22      | VDUT-3.3V     | Supplies 3.3V from the USB I 2 C dongle to the EV kit board. |
| J22      | SCL-SCL       | Connects SCL from the USB I 2 C dongle to the IC's SCL.      |
| J22      | SDA-SDA       | Connects SDAfrom the USB I 2 C dongle to the IC's SDA.       |

│

## MAX31730 Evaluation Kit

## Table 4. Troubleshooting

| SYMPTOM                                             | CHECK                            | SOLUTION                                                                                                                                                          |
|-----------------------------------------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI says hardware not found                         | Is the LED labeled D20 red?      | If yes, then the electronic fuse is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface. |
| GUI says hardware not found                         | Are any of the LEDs illuminated? | If not, then the PCB may not be getting power from USB. Try a different USB cable or a different USB port.                                                        |
| No slave address found and read/writes fail         | Jumper J22                       | Make sure three jumpers on J22 are installed.                                                                                                                     |
| GUI always displays a diode fault on the Status tab | J1, J2, or J3                    | For the on-board diodes, jumpers J1-J3 must be installed to connect the diode to DXP.                                                                             |

Evaluates: MAX31730

## MAX31730 Evaluation Kit

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                |
|----------------------|-------|--------------------------------------------|
| C1, C212             |     2 | 0.1μF, X7R ceramic capacitors (0805)       |
| C1A-C1C              |     3 | 100pF, X7R ceramic capacitors (0805)       |
| C2A-C2C, C215        |     0 | Do not populate, ceramic capacitors (0805) |
| C201, C202, C204     |     3 | 10μF, X5R ceramic capacitors (0805)        |
| C203, C214           |     2 | 0.01μF, X7R ceramic capacitors (0805)      |
| C211                 |     1 | 1μF, X7R ceramic capacitor (0805)          |
| C213                 |     1 | 0.22μF, X7R ceramic capacitor (0805)       |
| D1                   |     1 | Red LED (1206)                             |
| D20, D21             |     2 | Red/green dual LEDs                        |
| D22                  |     1 | 30V, 3A Schottky diode (MINI2)             |
| H1                   |     1 | 4-pin header, 2.54mm pitch                 |
| J1-J4                |     4 | 2-pin headers, 2.54mm pitch                |
| J20                  |     1 | 5-pin female Mini-USB                      |
| J21                  |     0 | Do not populate, header                    |
| J22                  |     1 | 6-pin (2 x 3) header, 2.54mm pitch         |
| Q1-Q3                |     3 | Bipolar BJT PNP (SOT23) Fairchild MMBT3906 |
| R3                   |     0 | Do not populate, resistor (0805)           |
| R4, R210, R215, R216 |     4 | 4.7kΩ ±1% resistors (0805)                 |
| R5, R211, R212       |     3 | 330Ω ±1% resistors (0805)                  |

## Component Supplier

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 408-822-2000 | www.fairchildsemi.com |

Note:

Indicate that you are using the MAX31730 when contacting this component supplier.

Evaluates: MAX31730

* EP = Exposed pad.

| DESIGNATION                        |   QTY | DESCRIPTION                                                                                |
|------------------------------------|-------|--------------------------------------------------------------------------------------------|
| R201, R202, R214                   |     3 | 0Ω ±1% resistors (0805)                                                                    |
| R203, R205                         |     2 | 560Ω ±1% resistors (0805)                                                                  |
| R204                               |     1 | 100kΩ ±1% resistor (0805)                                                                  |
| R206                               |     1 | 45.3kΩ ±1% resistor (0805)                                                                 |
| R207                               |     1 | 10kΩ ±1% resistor (0805)                                                                   |
| R213                               |     1 | 2.2kΩ ±1% resistor (0805)                                                                  |
| TP1, TP9, TP10                     |     3 | Red test points                                                                            |
| TP1A-TP1C, TP2, TP2A-TP2C, TP3-TP5 |    10 | White test points                                                                          |
| TP6-TP8                            |     3 | Black test points                                                                          |
| U1                                 |     1 | 3-channel remote temperature sensor Maxim MAX31730AUB+ (10 µMAX) or MAX31730ATC+ (12 TDFN) |
| U20                                |     1 | Microcontroller (28 SO) Microchip PIC18LF2550-I/SO                                         |
| U21                                |     1 | 50mA to 600mA current-limit switch (6 SOT23) Maxim MAX4995AAUT+                            |
| U22                                |     7 | 500mALDO regulator (8 TDFN-EP*) Maxim MAX8902BATA+                                         |
| X1                                 |     1 | 48MHz, 3.3V oscillator (SMD)                                                               |
| -                                  |     7 | Jumpers/shunts                                                                             |
| -                                  |     1 | Mini-USB cable                                                                             |
| -                                  |     1 | PCB: MAX31730 EV Kit                                                                       |

Evaluates: MAX31730

Figure 5a. MAX31730U EV Kit Schematic (µMAX) (Sheet 1 of 2)

<!-- image -->

## Evaluates: MAX31730

Figure 5b. MAX31730T EV Kit Schematic (TDFN) (Sheet 1 of 2)

<!-- image -->

│

Evaluates: MAX31730

Figure 5c. MAX31730 EV Kit Schematic (µMAX or TDFN) (Sheet 2 of 2)

<!-- image -->

│

Evaluates: MAX31730

Figure 6. MAX31730U EV Kit PCB Layout-Top (µMAX)

<!-- image -->

│

Figure 7. MAX31730U EV Kit PCB Layout-Bottom (µMAX)

<!-- image -->

Evaluates: MAX31730

Figure 8. MAX31730T EV Kit PCB Layout-Top (TDFN)

<!-- image -->

│

Figure 9. MAX31730T EV Kit PCB Layout-Bottom (TDFN)

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART            | IC PACKAGE   | TYPE   |
|-----------------|--------------|--------|
| MAX31730UEVKIT# | 10 µMAX      | EV Kit |
| MAX31730TEVKIT# | 12 TDFN      | EV Kit |

## MAX31730 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                 | PAGES CHANGED          |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------|------------------------|
|                 0 | 8/13            | Initial release                                                                                             | -                      |
|                 1 | 6/15            | Added TDFN package version of the EV Kit and revised User-Supplied Remote Diode section and Component List. | 1, 2, 7, 9, 11, 15, 16 |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1­8­629­462, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX31730