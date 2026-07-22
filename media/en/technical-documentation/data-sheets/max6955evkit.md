<!-- lastmod 2022-08-05 -->
## General Description

The MAX6955 evaluation kit (EV kit) is designed to evaluate the MAX6955 light-emitting diode (LED) display driver with a 2-wire interface. The EV kit board contains two MAX6955 LED display drivers on symmetrical sides of the board, allowing a 16-digit display using sixteen 14segment alphanumeric LEDs. The DB-25 connector allows a PC's parallel (printer) port to provide the 2-wire interface. The Windows® software provides a friendly graphical user interface (GUI) to exercise the features of the MAX6955 by allowing on-the-fly text and numeric entry and access to all relevant registers. The software includes multiple tabs for accessing the various registers and maintains a consistent format with controls on the left side of the software's main window pertaining to U1, located on the left side of the EV kit board. Similarly, all  the  controls  on  the  right  side  of  the  software's  main window pertain to U2, located on the right side of the EV kit board. The EV kit board requires a 3.3VDC or 5VDC power supply and jumpers JU1-JU4 allow the user to manually modify the device address of U1 or U2.

Order the MAX6955EVKIT for comprehensive evaluation of the MAX6955 using a PC with an available parallel port.

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C1            |     1 | 22µF ±20%, 6.3V X5R ceramic capacitor (1210) TDK C3225X5R0J226M                  |
| C2            |     1 | 12pF ±5%, 50V COG ceramic capacitor (0603) TDK C1608COG1H120JT                   |
| C3, C5        |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104KT                |
| C4, C6        |     2 | 1µF ±20%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A105M                   |
| D1-D8         |     8 | 0.54in dual 14-segment alphanumeric LEDs Lumex LDD-F5406RI Fairchild MDA6140C    |
| D9-D12        |     4 | Zener diodes, Vz = 5.1V (3-pin SOT23), top mark: KZ2 or Z2 Diodes Inc. BZX84C5V1 |

<!-- image -->

Features

- ♦ Proven PC Board Layout
- ♦ Windows 95/98/ME/NT/2000/XP-Compatible Evaluation Software
- ♦ 2-Wire Serial Interface
- ♦ Sixteen 14-Segment Bright LEDs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX6955EVKIT | 0°C to +70°C | 36 SSOP      |

## MAX6955 EV Kit Files

| PROGRAM      | DESCRIPTION                            |
|--------------|----------------------------------------|
| INSTALL.EXE  | Installs the EV kit software           |
| MAX6955.EXE  | Application program                    |
| HELPFILE.HTM | MAX6955 EV kit Helpfile                |
| PORT95NT.EXE | SST's freeware DLPortIO driver package |
| UNINST.INI   | Uninstalls the EV kit software         |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                              |
|-------------------------|-------|------------------------------------------------------------------------------------------|
| J1                      |     1 | Male DB-25 right-angle plug                                                              |
| J2, J3                  |     2 | 20-pin dual-row 2 x 10 headers                                                           |
| JU1-JU4                 |     4 | 5-pin headers                                                                            |
| N1, N2                  |     2 | N-channel MOSFETs (3-pin SOT23), top mark: 702 Central Semiconductor 2N7002              |
| Q1, Q2                  |     2 | Bipolar junction transistors (3-pin SOT23), top mark: C1A Central Semiconductor CMPT3904 |
| R1, R5                  |     2 | 100k Ω ±5% resistors (1206)                                                              |
| R2, R6                  |     2 | 13k Ω ±5% resistors (1206)                                                               |
| R3, R4, R7-R10, R13-R22 |    16 | 47k Ω ±5% resistors (1206)                                                               |
| R11, R12                |     2 | 100k Ω ± 1% resistors (1206)                                                             |
| U1, U2                  |     2 | MAX6955AAX (36-pin SSOP)                                                                 |
| None                    |     4 | Shunts                                                                                   |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX6955 Evaluation Kit

## Component Suppliers

| SUPPLIER                        | PHONE        | WEBSITE               |
|---------------------------------|--------------|-----------------------|
| Central Semiconductor           | 631-435-1110 | www.centralsemi.com   |
| Diodes Inc.                     | 805-446-4800 | www.diodes.com        |
| Fairchild Semiconductor         | 888-522-5372 | www.fairchildsemi.com |
| Lumex, Inc.                     | 800-278-5666 | www.lumex.com         |
| Scientific Software Tools, Inc. | 610-891-1640 | www.sstnet.com        |
| TDK                             | 847-803-6100 | www.component.tdk.com |

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX6955EVKIT
- A 3.3VDC or 5VDC power supply
- PC with Windows 95/98/ME/NT/2000/XP
- An available parallel port (female DB-25 connector on back of PC)
- A standard 25-pin, straight-through, male-to-female cable to connect the PC's parallel port to the MAX6955 EV kit board

## Procedure

- 1) Connect a cable from the PC's parallel port to the MAX6955 EV kit board. Use a 25-pin, straightthrough, female-to-male cable.
- 2) Install the supplied CD into the CD drive of your PC and run INSTALL.EXE. When the installer window shows up on the screen, press the INSTALL button. The MAX6955 program files are copied and icons are created in the Programs section within the Start menu. When you see the self-extracting DLPortIO driver  install  window  appear on the screen, press the Yes button. This automatically unpacks the compressed files and runs the DLPortIO driver installer. If  using  Windows NT, 2000, or XP, you must have administrator privileges on your PC. If you do not, then contact your system administrator to allow installation. You need to restart your PC after installing the DLPortIO driver.
- 3) Connect a 3.3VDC or 5VDC power supply between the VCC and GND pads on the MAX6955 EV kit board.
- 4) Start the MAX6955 EV kit program by double clicking  its  icon  located  in  the Programs section within the Start menu.
- 5) The program automatically detects the MAX6955 EV kit board and displays 2-wire Hardware Detected in a green font.
- 6) The MAX6955 EV kit board and MAX6955 EV kit software should automatically display MAX6955 EVKIT.

## Software Description

The EV kit software's main window, shown in Figure 1, allows on-the-fly text and numeric entry and also allows access to all the relevant registers for easy configuration. The controls on the left side of the software's main window control U1 and similarly, the controls on the right side of the software's main window control U2. Each register  has its own tab in the order of the MAX6955's address map. A 2-wire operation field is present at the very bottom of the software's main window, which shows the results of the last 2-wire operation.

## Alphanumeric Entry for U1

In  the  upper  left-hand  corner  of  the  software's  main window is the Alphanumeric Entry for U1 group box. This group box has five main controls:

- Plane group box
- U1 Address (write) combo box
- U1 Address (read) combo box
- Alphanumeric entry field
- Decimal Point checkbox and individual decimal point checkboxes

The first  control  is  the Plane group box, which allows the user to select which plane to write to. The radio button choices in the Plane group box are P0 and P1, P0, and P1 .  It  is  important  to  note  that  once  one  of  these plane radio buttons is selected, the software automatically takes the text or numbers that exist in the Alphanumeric Entry field and writes them to the display.

The second and third controls are the U1 Address (write) and the U1 Address (read) combo boxes. These device-address combo boxes default to 0xCA for  write  and  0xCB  for  read.  If  you  modify  the  default device address, change the jumper settings on JU1 and JU2 on the MAX6955 EV kit board. If the default address settings are changed on the board, the user must also manually select the correct device address

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6955 Evaluation Kit

Figure 1. MAX6955 EV Kit Software's Main Window

<!-- image -->

in the U1 Address (write) and the U1 Address (read) combo boxes. Table 1 lists the device address selection for the various JU1 and JU2 jumper settings.

The fourth control is the Alphanumeric Entry field, which displays MAX6955 at the start of the program. The user may type letters, numbers, apostrophes, commas, or even spaces in the Alphanumeric Entry field using the computer's keyboard. The Alphanumeric Entry field also supports standard word processing features like  highlighting,  insert,  and  delete.  Anytime  an invalid  character  is  typed  into  the  Alphanumeric  Entry field,  such  as  an  @,  a  character  error  message  box pops up, indicating an invalid character was typed.

<!-- image -->

Anytime a valid character is typed into the Alphanumeric Entry field, the software automatically writes it to the corresponding digit on the display.

The last control type within the Alphanumeric Entry for U1 group box is the Decimal Point checkbox and the individual decimal point checkboxes. When the Decimal Point checkbox is checked, all of the individual  decimal point checkboxes become visible. When the Decimal Point checkbox is unchecked, all of the individual decimal point checkboxes are hidden. Checking one of the individual decimal point checkboxes automatically lights up the corresponding decimal point on the board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6955 Evaluation Kit

## Alphanumeric Entry for U2

The Alphanumeric Entry for U2 group box is in the upper right-hand corner of the software's main window. This group box has five main controls:

- Plane group box
- U2 Address (write) combo box
- U2 Address (read) combo box
- Alphanumeric Entry Field
- Decimal Point checkbox and individual decimal point checkboxes

The first  control  is  the Plane group box, which allows the user to select which plane to write to. The radio button choices in the Plane group box are P0 and P1, P0, and P1 .  It  is  important  to  note  that  once  one  of  these plane radio buttons is selected, the software automatically takes the text or numbers that exist in the Alphanumeric Entry field and writes them to the display.

The second and third controls are the U2 Address (write) and the U2 Address (read) combo boxes. These device address combo boxes default to 0xC0 for write and 0xC1 for read. If you modify the default device address, change the jumper settings on JU3 and JU4 on the MAX6955 EV kit board. If the default address settings are changed on the board, the user must also manually select the correct device address in the U2 Address (write) and the U2 Address (read) combo boxes. Table 2 lists the device address selection for the various JU3 and JU4 jumper settings.

The fourth control is the Alphanumeric Entry field, which displays EVKIT at the start of the program. The user may type letters, numbers, apostrophes, commas, or even spaces in the Alphanumeric Entry field using the computer's keyboard. The Alphanumeric Entry field also supports standard word processing features like highlighting, insert, and delete. Anytime an invalid character is  typed  into  the  Alphanumeric Entry field,  such as an @, a character error message box pops up, indicating an invalid character was typed. Anytime a valid character is typed into the Alphanumeric Entry field, the software automatically writes it to the corresponding digit on the display.

The last control type within the Alphanumeric Entry for U2 group box is the Decimal Point checkbox and the individual decimal point checkboxes. When the Decimal Point checkbox is checked, all of the individual  decimal point checkboxes become visible. When the Decimal Point checkbox is unchecked, all of the individual decimal point checkboxes are hidden.

Checking one of the individual decimal point checkboxes automatically lights up the corresponding decimal point on the board.

## Register Tabs

The MAX6955 EV kit software has 43 register tabs for both U1 and U2, giving access to 86 unique registers. Any register tab can be selected by a mouse click when visible and not all register tabs can be visible at once. Scroll through the register tabs using the left and right scroll arrows located on the right-hand side of the software's main window. The order of the register tabs corresponds to the same order of the MAX6955's address map. Refer to the MAX6955 IC data sheet for details on the address map and a complete description of each register.

## Keyboard Navigation

When you type on the keyboard, the system must know which control should receive the keys. Press the tab key to move the keyboard's focus from one control to the next. The focused control is indicated by a dotted outline. Shift  +  tab moves the focus to the previously focused control. Buttons respond to the keyboard's space bar.  Some controls respond to the keyboard's up and down arrow keys. Activate the program's menu bar by pressing the F10 key, then press the letter of the menu item you want. Most menu items have one letter underlined, indicating their shortcut key.

## Hardware Description

The MAX6955 EV kit board is designed symmetrically so that the left side of the board pertains to U1 and the right  side  of  the  board  pertains  to  U2.  Thus,  the  first eight  digits  are  driven  by  U1  and  the  last  eight  digits are driven by U2. An OSC pad for U1 is provided for external clock operation and an OSC\_OUT pad for U2 is  also  provided for cascading additional MAX6955 devices. The DB-25 connector and associated circuitry are only needed for obtaining the 2-wire interface from the PC's parallel port and are not needed in typical applications. Connect the DB-25 connector, J1, to the PC's parallel port using a 25-pin straight-through, female-to-male cable. Four jumpers are on the EV kit board to modify the device address for U1 and U2. The two dual-row 20-pin headers, J2 and J3, are used for the I/O expander and keyscan features of U1 and U2, respectively.

## Device Address Jumpers JU1-JU4

The MAX6955 EV kit board contains four jumpers in the top right-hand corner of the board. Jumpers JU1 and

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

JU2 select the device address for U1 and jumpers JU3 and JU4 select the device address for U2. Table 1 lists the device address selection for the various JU1 and JU2 jumper settings. Table 2 lists the device address selection for the various JU3 and JU4 jumper settings. Before changing the default device address for U1 or U2,  read  the Alphanumeric  Entry  for  U1 and Alphanumeric Entry for U2 sections pertaining to required modifications for the Address (write) and Address (read) combo boxes.

## OSC and OSC\_OUT Pads

An OSC pad for U1 is provided for external clock operation and an OSC\_OUT pad for U2 is also provided for cascading additional MAX6955 devices. When the OSC pad is unconnected, the internal oscillator of U1

Table 1. U1 Address Selection for Jumpers JU1 and JU2

| JUMPER POSITION   | JUMPER POSITION   | DEVICE ADDRESS   | DEVICE ADDRESS   |
|-------------------|-------------------|------------------|------------------|
| JU1               | JU2               | (Write)          | (Read)           |
| 1-2               | 1-2               | 0xDE             | 0xDF             |
| 1-3               | 1-2               | 0xDA             | 0xDB             |
| 1-4               | 1-2               | 0xDC             | 0xDD             |
| 1-5               | 1-2               | 0xD8             | 0xD9             |
| 1-2               | 1-3               | 0xCE             | 0xCF             |
| 1-3*              | 1-3*              | 0xCA*            | 0xCB*            |
| 1-4               | 1-3               | 0xCC             | 0xCD             |
| 1-5               | 1-3               | 0xC8             | 0xC9             |
| 1-2               | 1-4               | 0xD6             | 0xD7             |
| 1-3               | 1-4               | 0xD2             | 0xD3             |
| 1-4               | 1-4               | 0xD4             | 0xD5             |
| 1-5               | 1-4               | 0xD0             | 0xD1             |
| 1-2               | 1-5               | 0xC6             | 0xC7             |
| 1-3               | 1-5               | 0xC2             | 0xC3             |
| 1-4               | 1-5               | 0xC4             | 0xC5             |
| 1-5               | 1-5               | 0xC0             | 0xC1             |

*Default for U1.

<!-- image -->

## MAX6955 Evaluation Kit

drives both U1 and U2 because OSC\_OUT of U1 is directly  connected to OSC of U2 with a trace on the board. It is  also  possible  to  drive  the  OSC  pad  of  U1 with an external clock between 1MHz to 8MHz.

## SCL, SDA, and GND Pads

The MAX6955 EV kit utilizes the PC's parallel port to generate a 2-wire interface for easy evaluation. Customers who wish to evaluate U1 and U2 using their own 2-wire interface must remove the parallel port cable from the board and attach the new 2-wire interface to the SCL, SDA, and GND pads located on the upper left-hand side of the MAX6955 EV kit board. The SCL, SDA, and GND pads are also useful for probing the 2-wire waveforms with a digital oscilloscope or logic analyzer.

Table 2. U2 Address Selection for Jumpers JU3 and JU4

| JUMPER POSITION   | JUMPER POSITION   | DEVICE ADDRESS   | DEVICE ADDRESS   |
|-------------------|-------------------|------------------|------------------|
| JU3               | JU4               | (Write)          | (Read)           |
| 1-2               | 1-2               | 0xDE             | 0xDF             |
| 1-3               | 1-2               | 0xDA             | 0xDB             |
| 1-4               | 1-2               | 0xDC             | 0xDD             |
| 1-5               | 1-2               | 0xD8             | 0xD9             |
| 1-2               | 1-3               | 0xCE             | 0xCF             |
| 1-3               | 1-3               | 0xCA             | 0xCB             |
| 1-4               | 1-3               | 0xCC             | 0xCD             |
| 1-5               | 1-3               | 0xC8             | 0xC9             |
| 1-2               | 1-4               | 0xD6             | 0xD7             |
| 1-3               | 1-4               | 0xD2             | 0xD3             |
| 1-4               | 1-4               | 0xD4             | 0xD5             |
| 1-5               | 1-4               | 0xD0             | 0xD1             |
| 1-2               | 1-5               | 0xC6             | 0xC7             |
| 1-3               | 1-5               | 0xC2             | 0xC3             |
| 1-4               | 1-5               | 0xC4             | 0xC5             |
| 1-5*              | 1-5*              | 0xC0*            | 0xC1*            |

*Default for U2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6955 Evaluation Kit

Figure 2. MAX6955 Schematic (Sheet 1 of 3)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6955 Evaluation Kit

<!-- image -->

Figure 2. MAX6955 Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6955 Evaluation Kit

<!-- image -->

Figure 2. MAX6955 Schematic (Sheet 3 of 3)

## MAX6955 Evaluation Kit

Figure 3. MAX6955 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6955 Evaluation Kit

Figure 4. MAX6955 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6955 Evaluation Kit

<!-- image -->

Figure 5. MAX6955 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6955 Evaluation Kit

Figure 6. MAX6955 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12