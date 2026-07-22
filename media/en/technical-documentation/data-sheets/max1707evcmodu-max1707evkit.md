<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1707 Evaluation Kit/Evaluation System

## General Description

The MAX1707 evaluation system (EV system) includes a MAX1707 evaluation kit (EV kit) and a Maxim command module (CMODUSB).

The MAX1707 EV kit is an assembled and tested PC board that demonstrates the capabilities of the MAX1707 light-management IC. The EV kit includes four  main display backlight LEDs, an RGB indicator LED, and a white LED camera flash that can all be driven simultaneously by the MAX1707. The EV kit also includes PC software that allows a user to evaluate every feature of the MAX1707 using a graphical user interface (GUI).

The CMODUSB board connects to a PC's USB port and allows the transfer of I 2 C  commands to the MAX1707 EV kit.

## Component Suppliers

| SUPPLIER         | PHONE        | WEBSITE                    |
|------------------|--------------|----------------------------|
| Lumileds         | 877-298-9455 | www.lumileds.com           |
| Nichia           | 248-352-6575 | www.nichia.com             |
| Stanley Electric | 800-533-5231 | www.stanley-components.com |
| TDK              | 847-803-6100 | www.component.tdk.com      |

Note: Indicate you are using the MAX1707 when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| C1, C2        |     2 | 1µF ±20%, 6.3V X5R capacitors (0402) TDK C1005X5R0J105M  |
| C3            |     1 | 4.7µF ±10%, 6.3V X5R capacitor (0603) TDK C1608X5R0J475K |
| C4            |     1 | 0.1µF ±10%, 10V X5R capacitor (0402) TDK C1005X5R1A104K  |
| C5            |     1 | 10µF ±20%, 6.3V X5R capacitor (0805) TDK C2012X5R0J106M  |

Features

- ♦ Proven PC Board Layout
- ♦ Windows ® 98/2000/XP-Compatible Evaluation Software
- ♦ White LED Camera Flash, RGB Indicator LED, and Four Backlight LEDs
- ♦ Pushbutton for Evaluating Strobe Function
- ♦ Terminals for Access to I 2 C Interface Lines
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE      | INTERFACE TYPE   |
|----------------|-----------|------------------|
| MAX1707EVKIT   | EV kit    | User-supplied    |
| MAX1707EVCMODU | EV system | CMODUSB board    |

Note: The MAX1707 EV kit software is included with the MAX1707 EV kit but is designed for use with the complete EV system. The EV system includes both the Maxim CMODUSB and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the CMODUSB.

## Component List

## MAX1707EVKIT

| DESIGNATION   |   QTY | DESCRIPTION                                        |
|---------------|-------|----------------------------------------------------|
| D1-D4         |     4 | White LEDs Nichia NSCW215                          |
| D5            |     1 | RGB LED Stanley FRGB1304B Lumex SML-LX2832SISUGSBC |
| D6            |     1 | Flash LED Lumileds LXCL-PWF1                       |
| D7            |     0 | Not installed Nichia NASW031                       |
| J1            |     1 | 2 x10right-angle receptacle (0.1in)                |
| JU1           |     1 | 2-pin header                                       |
| R1, R2        |     2 | 3.9k Ω ±5% resistors (0402)                        |
| R3            |     1 | 100k Ω ±5% resistor (0402)                         |
| SW1           |     1 | Momentary pushbutton switch Panasonic EVQ-PHP03T   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_1

## MAX1707 Evaluation Kit/Evaluation System

## Component List (continued) MAX1707 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                       |
|---------------|-------|---------------------------------------------------|
| U1            |     1 | LED driver MAX1707ETG (24-pin thin QFN 4mm x 4mm) |
| -             |     1 | Shunts                                            |
| -             |     1 | MAX1707 evaluation kit software, CD-ROM           |

## MAX1707 EV System

| DESIGNATION   |   QTY | DESCRIPTION          |
|---------------|-------|----------------------|
| MAX1707EVKIT  |     1 | MAX1707 EV kit       |
| CMODUSB       |     1 | Maxim command module |

## MAX1707EVKIT Files

| PROGRAM                 | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX1707.EXE             | Application program                        |
| HELPFILE.HTM            | MAX1707 EV kit help file                   |
| UNINST.INI              | Uninstalls the EV kit software             |
| FTD2XX.INF              | USB device driver file                     |
| Troubleshooting_USB.PDF | USB device driver help file                |

## Quick Start

## Recommended Equipment

- The Maxim MAX1707EVCMODU evaluation system:
- MAX1707EVKIT Maxim command module (CMODUSB)

USB cable (included with CMODUSB)

- One power supply
- ·

2.7V or higher (up to 5.5V) at 2A

- A user-supplied Windows 98/2000/XP PC with an unused USB port.

## Procedure

## Do not enable the power supply until all connections are made:

- 1) Place shunt on pins 1 and 2 of JU1 (selects VDD as supply for IN).
- 2) Connect the MAX1707 EV kit's 20-pin female connector (J1) to the CMODUSB's 20-pin male connector (P3).
- 3) Disable the I 2 C  pullup  resistors  on  the  CMODUSB board by setting the DIP switch (SW1 on the CMODUSB board) to the off position.
- 4) Install the MAX1707 EV kit software on your PC by running the INSTALL.EXE program. The files can be obtained from the Maxim website or the included CD. The program files are copied and icons are created for them in the Windows Start menu.
- 5) Connect the USB cable between the PC's USB port and the CMODUSB's USB connector (P2). A New Hardware Found window should pop up. If you do not see a window similar to the one described above after 30 seconds, try removing the USB cable from the CMODUSB and reconnecting it again. Administrator privileges are required to install the USB device driver on Windows 2000 and Windows XP.
- 6) Follow the directions of the Add New Hardware wizard to install the USB device driver. Choose the 'Search for the best driver for your device' option. Specify the location of the device driver to be C:\MAX1707 (or the directory chosen during installation) using the Browse button.
- 7) Connect the 2.7V power supply (up to 5.5V supported) between the MAX1707 EV kit's IN and GND pads.
- 8) Enable the power supply.
- 9) Start the MAX1707 EV kit software by double-clicking its icon in the Start menu.

## Detailed Description of Software

To start the software, double-click the MAX1707 EV kit icon that is created during installation. The graphical user interface shown in Figure 1 will appear. The user must wait approximately two seconds while the MAX1707 EV kit software connects to the CMODUSB.

## Brightness Controls

The Brightness Controls group box contains checkboxes and scrollbars that allow the MAX1707 on the EV kit  to  control the amount of current through each LED. The checkboxes on the left side of the application window allow the different LEDs to be enabled or disabled while the scrollbars allow the current through each LED to be adjusted.

Note that the strobe function cannot be enabled or disabled using the EV kit software. The only available control  is  the Strobe scrollbar that adjusts the current through the white LED camera flash. To enable the white LED camera flash using the strobe function, press the momentary pushbutton (SW1) on the MAX1707 EV kit. When the strobe current is at high levels, do not hold the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1707 Evaluation Kit/Evaluation System

momentary pushbutton continuously; this may damage the white LED camera flash.

For safety reasons, when the white LED camera flash is enabled using the Flash checkbox in the application window, it automatically disables after a short amount of  time.  This  amount of time can be selected in the Options|Set Flash LED On Time menu item.

## Miscellaneous Controls

The Miscellaneous Controls group box contains a checkbox to enable or disable the LED temperature derating function, as well as a pulldown menu to select the RGB ramp rate for the MAX1707.

Demo Mode The MAX1707 EV kit supports a demo mode that is enabled when the user selects the Options|Demo Mode menu item. Demo mode does the following:

- Smoothly ramps up and down the main backlights.

<!-- image -->

Figure 1. MAX1707 EV Kit Software

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Smoothly cycles through all colors on the RGB LED.
- Quickly enables and disables the white LED camera flash.

## Detailed Description of Hardware MAX1707EVCMODU Evaluation System

The MAX1707 EV system (MAX1707EVCMODU) is a complete light-management system consisting of a MAX1707 evaluation kit (EV kit) and the Maxim command module (CMODUSB).

## CMODUSB

The CMODUSB is a Maxim command module that provides an I 2 C interface bus to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## MAX1707 Evaluation Kit/Evaluation System

## MAX1707 EV Kit

The MAX1707 EV kit board provides a proven layout for evaluating the MAX1707 light-management IC and can be obtained separately without the CMODUSB.

The EV kit includes four main display backlight LEDs (D1 to D4), an RGB indicator LED (D5), and a white LED camera flash (D6). These LEDs can be enabled and current through each LED can be controlled using the  MAX1707 EV kit software (see the Detailed Description of Software section). The momentary pushbutton (SW1) connects to the STB pin on the MAX1707 and allows the LED flash drivers to be evaluated without  the  need  for  the  MAX1707  EV  kit  software. However, to control the current through the white LED camera flash using the strobe function, the EV kit software is required.

The MAX1707 EV kit also includes PC board landing pads (D7) to evaluate a different white LED cameraflash device than the one included on the EV kit.

The SCK and SDA pads on the MAX1707 EV kit provide access to the I 2 C interface and allow the evaluation of the MAX1707 without the CMODUSB. Note that 3.9k Ω pullup resistors for the I 2 C interface are included on the EV kit board.

## Jumper Selection Tables

Table 1 explains the functionality of the jumper on the MAX1707 EV kit.

Table 1. Select IN Source

| JUMPER   | SHUNT POSITION   | DESCRIPTION             |
|----------|------------------|-------------------------|
| JU1      | Short*           | Connect VDD to IN.      |
| JU1      | Open             | Disconnect VDD from IN. |

Figure 2. MAX1707 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1707 Evaluation Kit/Evaluation System

Figure 3. MAX1707 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 4. MAX1707 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1707 Evaluation Kit/Evaluation System

Figure 5. MAX1707 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2005 Maxim Integrated Products

Campillo Printed USA

is a registered trademark of Maxim Integrated Products, Inc.