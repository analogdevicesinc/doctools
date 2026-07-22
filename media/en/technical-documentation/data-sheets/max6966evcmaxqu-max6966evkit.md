<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX6966 Evaluation Kit/Evaluation System

## General Description

The MAX6966 evaluation (EV) kit is an assembled and tested PCB that demonstrates the capabilities of the MAX6966 constant-current LED driver and portexpander I/Os. The EV kit includes three RGB LEDs and one white LED that can be controlled simultaneously by the MAX6966. The EV kit also includes PC software that allows a user to evaluate the features of the MAX6966 using a graphical user interface (GUI).

The MAX6966 evaluation system (EV system) includes a MAX6966 EV kit and a Maxim command module (CMAXQUSB).

The CMAXQUSB board connects to a PC's USB port and allows the transfer of SPI TM commands to the MAX6966 EV kit.

SPI is a trademark of Motorola, Inc.

Windows is a registered trademark of Microsoft Corp.

## MAX6966 EV System

| PART         |   QTY | DESCRIPTION          |
|--------------|-------|----------------------|
| MAX6966EVKIT |     1 | MAX6966 EV kit       |
| CMAXQUSB     |     1 | Maxim command module |

## MAX6966 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 6.3V X5R capacitor (0402) TDK C1005X5R0J104K |
| C2            |     1 | 10µF ±10%, 6.3V X5R capacitor (0603) TDK C1608X5R0J106K  |
| D1, D2, D3    |     3 | RGB LEDs Stanley FRGB1304B Lumex SML-LX2832SISUGSBC      |
| D4            |     1 | White LED Osram LW T67C-S2U1-5K8L                        |
| J1            |     1 | 2 x 20 right-angle receptacle                            |

## Features

- ♦ Proven PCB Layout
- ♦ Windows ® 98/2000/XP-Compatible Evaluation Software
- ♦ Three RGB LEDs and One White LED
- ♦ Header for Access to SPI Interface Lines
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE                        | INTERFACE           |
|-----------------|-----------------------------|---------------------|
| EV Kit          | User-supplied SPI interface | MAX6966EVKIT        |
| MAX6966EVCMAXQU | CMAXQUSB board              | EV System interface |

Note: The MAX6966 EV kit software is included with the MAX6966 EV kit, but is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB and the EV kit. If Windows software will not be used, the EV kit board can be purchased without the CMAXQUSB.

## Component List

## MAX6966 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| J2            |     1 | 2 x 10-pin header                               |
| JU1           |     1 | 2-pin header                                    |
| JU2           |     1 | 3-pin header                                    |
| JU3           |     0 | Not installed (5-pin header)                    |
| R1            |     1 | 4.7k Ω ±5% resistor (0402)                      |
| R2-R11        |     0 | Not installed, resistors (0402)                 |
| SW1           |     0 | Not installed (momentary switch) Omron B3F-1000 |
| U1            |     1 | LED driver (16 TQFN) Maxim MAX6966ATE           |
| -             |    12 | Shunts                                          |
| -             |     1 | MAX6966 evaluation kit software, CD-ROM*        |
| -             |     1 | PCB: MAX6966 Evaluation Kit                     |

## MAX6966 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER         | PHONE        | WEBSITE                    |
|------------------|--------------|----------------------------|
| Stanley Electric | 800-533-5231 | www.stanley-components.com |
| TDK Corp.        | 847-803-6100 | www.component.tdk.com      |

Note: Indicate that you are using the MAX6966 or MAX6967 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- The Maxim MAX6966EVCMAXQU evaluation system
- MAX6966EVKIT Maxim command module (CMAXQUSB) USB cable (included with CMAXQUSB)
- One power supply

5.5V or higher (up to 7.0V) at 300mA

- A user-supplied Windows 98/2000/XP PC with an unused USB port

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX6966 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not enable the power supply until all connections are completed.

- 1) Place a shunt on the 3.3V setting of JU1 on the CMAXQUSB.
- 2) Place a shunt on pins 1-2 of JU1 on the MAX6966 EV kit (connects MISO to DOUT/OSC).
- 3) Place a shunt on pins 1-2 of JU2 on the MAX6966 EV kit (3.3V for V+ supplied from CMAXQUSB).
- 4) Connect the MAX6966 EV kit's 40-pin female connector (J1) to the CMAXQUSB's 40-pin male connector (P4).
- 5) Install the MAX6966 EV kit software on your PC by running the INSTALL.EXE program. The files can be

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6966 EV Kit Files

| INSTALL.EXE             | Installs the EV kit files on your computer   |
|-------------------------|----------------------------------------------|
| MAX6966.EXE             | Executes the application program             |
| UNINST.INI              | Uninstalls the EV kit software               |
| Ftd2xx.INF              | USB device driver file                       |
| Troubleshooting_USB.PDF | Opens the USB Troubleshooting Guide          |

- obtained from the Maxim website or the included CD. The program files are copied and icons are created for them in the Windows Start menu.
- 6) Connect the USB cable between the PC's USB port and the CMAXQUSB's USB connector (P2). A New Hardware Found window pops up. If you don't see this  window after 30 seconds, remove the USB cable from the CMAXQUSB and reconnect it again. Administrator privileges are required to install the USB device driver on Windows 2000/XP. Refer to the Troubleshooting\_USB.PDF file if problems are experienced during this step.
- 7) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX6966 (or the directory chosen during installation) using the Browse button.
- 8) Connect the  5.5V  power  supply  (up  to  7.0V supported) between the MAX6966 EV kit's VLED and GND pads.
- 9) Enable the power supply.
- 10) Start the MAX6966 EV kit software by double-clicking its  icon  in  the Start menu. The application window shown in Figure 1 appears, and the software connects to the CMAXQUSB after a few seconds.
- 11) Click on PWM Output in the Port 0 Configuration group box.
- 12) Check the Shutdown checkbox in the Global PWM Settings group box to disable the MAX6966's shutdown mode. The white LED (D4) should illuminate on the MAX6966 EV kit.

## MAX6966 Evaluation Kit/Evaluation System

## Detailed Description of Software

To start the MAX6966 EV kit software, double click the MAX6966 EV kit icon that is created during installation. The graphical user interface shown in Figure 1 appears. Wait approximately two seconds while the MAX6966 EV kit software connects to the CMAXQUSB.

The Select Port group box allows the user to select one of the 10 MAX6966 ports to configure. Once a port has been selected, the Port n Configuration group box allows the port to be configured as a Logic-Level Input , Logic-Level Output , or a PWM Output .

The Global PWM Settings group box includes controls to  edit  the  MAX6966's constant-current LED drivers.

<!-- image -->

Figure 1. MAX6966 EV Kit Software Screenshot

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The Chip Select (CS) Run option is inaccessible because the CMAXQUSB cannot guarantee timing that would ensure proper operation of this feature.

Note that the Shutdown feature is only enabled when the MAX6966's internal oscillator is enabled. To enable the  internal  oscillator,  the  DOUT/OUT  pin  must  be  set for DOUT and at least one MAX6966 port must be configured for  PWM output (at any value except 100% or 0% duty cycle).

The Advanced | Interface menu item allows a low-level interface to the CMAXQUSB.

## MAX6966 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

## MAX6966 EV System

The MAX6966 EV system (MAX6966EVCMAXQU) is a complete 10-port, constant-current LED driver and I/O expander system, consisting of a MAX6966 EV kit and the Maxim command module (CMAXQUSB).

## CMAXQUSB

The CMAXQUSB is a Maxim command module that provides an SPI interface bus to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## MAX6966 EV Kit

The MAX6966 EV kit board provides a proven layout for evaluating the MAX6966 constant-current LED driver and I/O expander IC and can be obtained separately without the CMAXQUSB.

The EV kit includes three RGB LEDs (D1, D2, and D3) and one white LED (D4). These LEDs can be enabled and the current through each LED can be controlled using the MAX6966 EV kit software (see the Detailed Description of Software section).

The MAX6966 EV kit also includes PCB landing pads (R2-R11) on the bottom side of the EV kit board that can be used to add pullup resistors on every one of the MAX6966's P0-P9 ports.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper Selection Tables

Tables 1 and 2 explain the functionality of the jumpers on the MAX6966 EV kit.

## Table 1. Select IN Source

| JUMPER   | SHUNT POSITION   | DESCRIPTION                    |
|----------|------------------|--------------------------------|
| JU1      | Short*           | MISO connected to DOUT/OSC     |
| JU1      | Open             | MISO not connected to DOUT/OSC |

## Table 2. Select IN Source

| JUMPER   | SHUNT POSITION   | DESCRIPTION                              |
|----------|------------------|------------------------------------------|
| JU2      | 1-2*             | MAX6966 V+ supplied from CMAXQUSB (3.3V) |
| JU2      | 2-3              | MAX6966 V+ supplied from V+ pad          |

<!-- image -->

## MAX6966 Evaluation Kit/Evaluation System

Figure 2. MAX6966 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6966 Evaluation Kit/Evaluation System

Figure 3. MAX6966 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6966 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX6966 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6966 Evaluation Kit/Evaluation System

Figure 5. MAX6966 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6966 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX6966 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6966 Evaluation Kit/Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | REVISION DESCRIPTION                                            | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------|-----------------|
|                 0 | 2/06            | Initial release                                                 | -               |
|                 1 | 5/08            | Component D4 became obsolete and a replacement part was needed. | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600