<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX7306 Evaluation Kit/Evaluation System

## General Description

The MAX7306 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the capabilities of the MAX7306 4-port leveltranslating GPIO with latching transition detection, blink, and pulse-width modulation (PWM). The MAX7306 EV kit  also  includes  Windows ® 98SE/2000/XP-compatible software that provides a simple graphical user interface (GUI) for exercising the MAX7306's features.

The MAX7306 evaluation system (EV system) includes a MAX7306 EV kit and a Maxim CMAXQUSB serialinterface board.

The CMAXQUSB board connects to a PC's USB port and allows the transfer of I 2 C commands to the MAX7306 EV kit.

The EV kit comes with the MAX7306AUB+ installed. The MAX7306 EV kit can also be used to evaluate the MAX7307. Contact factory for free samples of the pincompatible MAX7307AUB+ to evaluate this part.

Windows is a registered trademark of Microsoft Corp.

## Component Lists

## MAX7306 EV System

| PART          |   QTY | DESCRIPTION            |
|---------------|-------|------------------------|
| MAX7306EVKIT+ |     1 | MAX7306 EV kit         |
| CMAXQUSB+     |     1 | Serial-interface board |

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 1µF ±15%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C105M   |
| C2            |     1 | 10µF ±15%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A106M  |
| C3            |     1 | 0.1µF ±15%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K |
| C4            |     0 | Not installed, capacitor (0603)                                 |
| D1            |     1 | White LED (PLCC-2) OPTEK OVS9WBCR9                              |
| D2            |     1 | RGB LED (2.7mm x 2.4mm x 0.95mm) OPTEK OVSTRGBAC6               |
| J1            |     1 | 2 x 10 right-angle female receptacle                            |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ 400kHz 2-Wire Serial Interface, 5.5V Tolerant
- ♦ 1.62V to 3.6V Operation (VDD)
- ♦ 1.4V to 5.5V I/O Level Translation Port Supply (VLA)
- ♦ High Output Sink Current-Up to 25mA per Port
- ♦ Proven PCB Layout
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ Fully Assembled and Tested
- ♦ EV System Includes USB Connectivity

## Ordering Information

| PART              | TYPE                          | INTERFACE                        |
|-------------------|-------------------------------|----------------------------------|
| EV kit            | User-supplied I 2 C interface | MAX7306EVKIT +                   |
| MAX7306EVCMAXQU + | EV system                     | CMAXQUSB serial- interface board |

Note: The MAX7306 EV kit software is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## MAX7306 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| JU1, JU2, JU5 |     3 | 3-pin headers                                   |
| JU3, JU4      |     2 | 2-pin headers                                   |
| JU6           |     1 | 5-pin header                                    |
| R1            |     1 | 10k Ω ±5% resistor (0603)                       |
| R2            |     1 | 150 Ω ±5% resistor (0603)                       |
| R3            |     1 | 160 Ω ±5% resistor (0603)                       |
| R4            |     1 | 270 Ω ±5% resistor (0603)                       |
| R5            |     1 | 68 Ω ±5% resistor (0603)                        |
| R6            |     1 | 100k Ω ±5% resistor (0603)                      |
| R7            |     1 | 0 Ω ±5% resistor (0603)                         |
| R8, R9, R10   |     0 | Not installed, resistors (0603)                 |
| R11           |     1 | 2k Ω ±5% resistor (0603)                        |
| S1, S2        |     2 | Pushbutton switches                             |
| U1            |     1 | MAX7306AUB+ (10-pin µMAX ® with exposed paddle) |
| -             |     1 | PCB: MAX7306 Evaluation Kit+                    |

## MAX7306 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER           | PHONE        | WEBSITE               |
|--------------------|--------------|-----------------------|
| OPTEK Technologies | 800-341-4747 | www.optekinc.com      |
| TDK Corp.          | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX7306 when contacting these component suppliers.

## MAX7306 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX7306.EXE             | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- One 5V power supply
- ·
- MAX7306 EV system MAX7306 EV kit Maxim CMAXQUSB interface board (USB cable included)
- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

The MAX7306 is fully assembled and tested. Caution: Do not turn on the power supply until all connections are made.

- 1) Visit www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 7306Rxx.ZIP.
- 2) Install  the  MAX7306 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 3) On the CMAXQUSB board, ensure that the shunt of JU1 is in the 3.3V position.
- 4) Enable the I 2 C pullup resistors on the CMAXQUSB board by setting the DIP switches on SW1 to the ON position.
- 5) For the MAX7306 EV kit, make sure that the shunts of all jumpers are in the following default positions:
- 6) Carefully align the MAX7306 EV kit's 20-pin connector with the 20-pin connector of the CMAXQUSB board and press them together.
- 7) Connect  the  5V  power  supply  between  the MAX7306 EV kit's VLA and GND pads.
- 8) Turn on the 5V power supply.

- JU1: (2-3) CMAXQUSB provides the VDD supply.

- JU2: (1-2) P1 drives the white LED (D1).

- JU3: (1-2) P2 drives the red LED of D2.

- JU4: (1-2) P3 drives the green LED of D2.

- JU5: (1-2) P4 drives the blue LED of D2.

- JU6: (1-3) I 2 C  slave address is 1001100x (0x98).

## MAX7306 Evaluation Kit/Evaluation System

- 9) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message, if this is the first time program runs on this PC. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000 and XP. Refer to  the  TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.
- 10) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX7306 (default installation directory) using the Browse button.
- 11) Start the MAX7306 EV kit software by opening its icon in the Start menu. The GUI main window will appear, as shown in Figure 1.
- 12) Switch to Port Registers tab, as shown in Figure 2. Check the Output radio button in the Port Index (0x01 - 0x04) panel and press the Write button. Observe the light change of LED on the EV kit board.

<!-- image -->

Figure 1. MAX7306 Evaluation Software Main Window (Device Configuration Registers Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7306 Evaluation Kit/Evaluation System

Figure 2. Port Registers Tab

<!-- image -->

## Detailed Description of Software

To start the MAX7306 EV kit software, double-click the MAX7306 EV kit icon that is created during installation. The GUI main window appears as shown in Figure 1. The user will have to wait approximately 2s while the MAX7306 EV kit software connects to the CMAXQUSB board.

There are three tabs on the MAX7306 EV kit GUI window: Device  Configuration  Registers , Port Registers , and Help .

There are two group boxes on the MAX7306 EV kit GUI window: I2C Address and Interrupt Status .

There are two buttons on the MAX7306 EV kit GUI window: Reconnect and Exit .

## Device Configuration Registers Tab

The Device Configuration Registers tab shown in Figure 1 contains two group boxes: Register 0x26 and Register 0x27 .

Press the Read button inside those two group boxes to read the current setting of the corresponding register. Select the desired setting and press the Write button to set the MAX7306's corresponding registers.

## Port Registers Tab

The Port Registers tab shown in Figure 2 contains the Port Index (0x01 - 0x04) group box, Port Configuration as Output group box, Port Configuration as Input group box, and the Read and Write buttons.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7306 Evaluation Kit/Evaluation System

The Port Index (0x01 - 0x04) group box selects the port to be configured; each port can be set as input or output.

Press the Read button to read the current device register setting and press the Write button to write the new setting to the port register.

## Help Tab

The Help tab contains the MAX7306 EV kit software version and Maxim's website information.

## I2C Group Box

The pulldown menu inside I2C Address group box autodetects the MAX7306's I 2 C slave address when the GUI software starts. If multiple devices are connected to the I 2 C bus, the user can use this pulldown menu to manually change the device's I 2 C slave address according to the shunt position of JU6, as shown in Table 1.

## Table 1. I 2 C Address Configuration

| JUMPER   | SHUNT POSITION   | I 2 C ADDRESS   |
|----------|------------------|-----------------|
| JU6      | 1-2              | 1001101x (0x9A) |
| JU6      | 1-3*             | 1001100x (0x98) |
| JU6      | 1-4              | 1001110x (0x9C) |
| JU6      | 1-5              | 1001111x (0x9E) |

## Interrupt Status Group Box

The Interrupt Status group box shows the current status of the MAX7306 INT pin. It detects the latched transition of any port, when the port configured as an input and the interrupt enable bit is set.

## Reconnect and Exit Buttons

Press the Reconnect button to reestablish the connection between the EV kit GUI software and MAX7306 EV kit hardware.

Press the Exit button to quit the MAX7306 EV kit GUI software.

## Detailed Description of Hardware

The MAX7306 is a 4-port level-translating GPIO with latching transition detection, blink, and PWM. The MAX7306 EV kit board provides a proven layout for evaluating the MAX7306. The EV kit comes with a MAX7306AUB+ installed.

## Hardware Reset

Press pushbutton S2 to void current I 2 C transaction involving the MAX7306. It has the option of resetting the

<!-- image -->

## Power Supplies

The power supply for all LEDs must be powered by a user-supplied 1.4V to 5.5V power supply connecting to VLA. The MAX7306 can either be powered from the CMAXQUSB (2.5V or 3.3V) or from a user-supplied 1.62V to 3.6V power supply connecting to VCC, as shown in Table 3. If an external power supply is used, make sure that the supplied voltage is compatible with the CMAXQUSB JU1 setting.

## Table 3. VDD Selection Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU1      | 1-2              | User-supplied 1.62V to 3.6V power supply (VCC) |
| JU1      | 2-3*             | Powered by CMAXQUSB                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

registers to power-up condition, resetting the PWM, and the blink-timing counter. Refer to the MAX7306 IC data sheet for more details on the Reset function.

## I 2 C Address Configuration

The shunt position of jumper JU6 determines the I 2 C slave address of the MAX7306 EV kit. See Table 1 for appropriate settings.

## Jumper Settings of I/O Ports Configuration

Jumpers JU2-JU5 are used to configure the MAX7306 I/O ports. Table 2 shows the detailed function of each jumper.

## Table 2. Jumpers JU2-JU5 Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU2      | 1-2*             | P1 drives the white LED (D1).                |
| JU2      | 2-3              | P1 function as INT .                         |
| JU2      | Open             | Use P1/INT pad to evaluate P1/ INT pin.      |
| JU3      | 1-2*             | P2 drives the red LED of D2.                 |
| JU3      | Open             | Use P2/OSCIN pad to evaluate P2/OSCIN pin.   |
| JU4      | 1-2*             | P3 drives the green LED of D2.               |
| JU4      | Open             | Use P3/OSCOUT pad to evaluate P3/OSCOUT pin. |
| JU5      | 1-2*             | P4 drives the blue LED of D2.                |
| JU5      | 2-3              | Use P4 as an input.                          |
| JU5      | Open             | Use P4 pad to evaluate P4 pin.               |

## MAX7306 Evaluation Kit/Evaluation System

## User-Supplied I 2 C Interface

To use the MAX7306 EV kit with a user-supplied I 2 C interface, install the shunt on jumper JU1's 1-2 position and remove the CMAXQUSB board. Connect SDA, SCL, and GND lines from the user-supplied I 2 C interface to the SDA, SCL, and GND pads on the MAX7306 EV kit. Apply a 1.62V to 3.6V power supply to the VCC pad of the MAX7306 EV kit. Depending on the configuration of the user-supplied I 2 C interface, it may be necessary to install I 2 C pullup resistors R9 and R10.

## Evaluate the MAX7307

Follow the steps below to evaluate the MAX7307:

- 1) Remove the MAX7306 IC and replace it with the MAX7307 IC on the board.
- 2) Ensure that the shunt of JU6 is in the 1-2 position.
- 3) Remove R7 and install a 0 Ω resistor to R8.
- 4) Install a 0.1µF capacitor to C4.

Figure 3. MAX7306 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7306 Evaluation Kit/Evaluation System

Figure 4. MAX7306 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 5. MAX7306 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7306 Evaluation Kit/Evaluation System

Figure 6. MAX7306 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600