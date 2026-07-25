<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX7307 Evaluation Kit/Evaluation System

## General Description

The MAX7307 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that demonstrates the capabilities of the MAX7307 4-port leveltranslating GPIO with latching transition detection, blink, and pulse-width modulation (PWM). The MAX7307 EV kit  also  includes  Windows ® 98SE/2000/XP-compatible software that provides a simple graphical user interface (GUI) for exercising the MAX7307's features.

The MAX7307 evaluation system (EV system) includes a MAX7307 EV kit and a Maxim CMAXQUSB serialinterface board.

The CMAXQUSB board connects to a PC's USB port and allows the transfer of I 2 C commands to the MAX7307 EV kit.

The EV kit comes with the MAX7307ALB+ installed.

Windows is a registered trademark of Microsoft Corp.

## Component Lists

## MAX7307 EV System

| PART          |   QTY | DESCRIPTION            |
|---------------|-------|------------------------|
| MAX7307EVKIT+ |     1 | MAX7307 EV kit         |
| CMAXQUSB+     |     1 | Serial-interface board |

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 1µF ±15%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C105M   |
| C2            |     1 | 10µF ±15%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A106M  |
| C3            |     1 | 0.1µF ±15%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K |
| C4            |     0 | Not installed, capacitor (0603)                                 |
| D1            |     1 | White LED (PLCC-2) OPTEK OVS9WBCR4                              |
| D2            |     1 | RGB LED (2.7mm x 2.4mm x 0.95mm) OPTEK OVSTRGBAC6               |

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

| TYPE      | PART              |
|-----------|-------------------|
| EV Kit    | MAX7307EVKIT +    |
| EV System | MAX7307EVCMAXQU + |

Note: The MAX7307 EV kit software is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## MAX7307 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                          |
|---------------|-------|--------------------------------------|
| J1            |     1 | 2 x 10 right-angle female receptacle |
| JU1, JU2, JU5 |     3 | 3-pin headers                        |
| JU3, JU4      |     2 | 2-pin headers                        |
| R1            |     1 | 10k Ω ±5% resistor (0603)            |
| R2            |     1 | 150 Ω ±5% resistor (0603)            |
| R3            |     1 | 160 Ω ±5% resistor (0603)            |
| R4            |     1 | 270 Ω ±5% resistor (0603)            |
| R5            |     1 | 68 Ω ±5% resistor (0603)             |
| R6            |     1 | 100k Ω ±5% resistor (0603)           |
| R9, R10       |     0 | Not installed, resistors (0603)      |
| R11           |     1 | 2k Ω ±5% resistor (0603)             |
| S1, S2        |     2 | Pushbutton switches                  |
| U1            |     1 | MAX7307ALB+ (10-pin µDFN)            |
| -             |     1 | PCB: MAX7307 Evaluation Kit+         |

## MAX7307 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER           | PHONE        | WEBSITE               |
|--------------------|--------------|-----------------------|
| OPTEK Technologies | 800-341-4747 | www.optekinc.com      |
| TDK Corp.          | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX7307 when contacting these component suppliers.

## MAX7307 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX7307.EXE             | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- One 5V power supply
- MAX7307 EV system: MAX7307 EV kit Maxim CMAXQUSB interface board (USB cable included)
- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

The MAX7307 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are made.

- 1) Visit  the  Maxim  website (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 7307Rxx.ZIP.
- 2) Install  the  MAX7307 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB board, ensure that the shunt of JU1 is in the 3.3V position.
- 4) Enable the I 2 C pullup resistors on the CMAXQUSB board by setting the DIP switches on SW1 to the ON position.
- 5) For the MAX7307 EV kit, make sure that the shunts of all jumpers are in the following default positions:
- 6) Carefully align the MAX7307 EV kit's 20-pin connector with the 20-pin connector of the CMAXQUSB board and press them together.
- 7) Connect  the  5V  power  supply  between  the MAX7307 EV kit's VLA and GND pads.
- 8) Turn on the 5V power supply.
- 9) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message, if this is the first time the program runs on this PC. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000 and XP. Refer to  the  TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.
- 10) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX7307 (default installation directory) using the Browse button.

JU1: (2-3) CMAXQUSB provides the VDD supply

JU2: (1-2)

P1 drives the white LED D1

JU3: (1-2) P2 drives the red LED of D2

JU4: (1-2)

P3 drives the green LED of D2

JU5: (1-2) P4 drives the blue LED of D2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7307 Evaluation Kit/Evaluation System

- 11) Start the MAX7307 EV kit software by opening its icon in the Start menu. The GUI main window will appear, as shown in Figure 1.
- 12) Switch to Port Registers tab, as shown in Figure 2. Check the Output radio button in the Port Index (0x01 - 0x04) panel and press the Write button. Observe the light change of LED on the EV kit board.

## Detailed Description of Software

To start the MAX7307 EV kit software, double-click the MAX7307 EV kit icon that is created during installation. The GUI main window appears as shown in Figure 1.

The user will  have  to  wait  approximately  2s  while t h e   MAX7307  EV  kit  software  connects  to  the CMAXQUSB board.

There are three tabs on the MAX7307 EV kit GUI window: Device  Configuration  Registers , Port Registers , and Help .

There is one group box on the MAX7307 EV kit GUI window: Interrupt Status .

There are two buttons on the MAX7307 EV kit GUI window: Reconnect and Exit .

<!-- image -->

Figure 1. MAX7307 Evaluation Software Main Window (Device Configuration Registers Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7307 Evaluation Kit/Evaluation System

Figure 2. Port Registers Tab

<!-- image -->

Device Configuration Registers Tab The Device Configuration Registers tab shown in Figure 1 contains two group boxes: Register 0x26 and Register 0x27 .

Press the Read button inside those two group boxes to read the current setting of the corresponding register. Select the desired setting and press the Write button to set the hardware corresponding registers.

## Port Registers Tab

The Port Registers tab shown in Figure 2 contains the Port Index (0x01 - 0x04) group box, Port Configuration as Output group box, Port Configuration as Input group box, and the Read and Write buttons.

The Port Index (0x01 - 0x04) group box selects the port to be configured; each port can be set as input or output.

Press the Read button to read the current device register setting and press the Write button to write the new setting to the port register.

## Help Tab

The Help tab contains the MAX7307 EV kit software version and Maxim's website information.

## Interrupt Status Group Box

The Interrupt Status group box shows the current status of the MAX7307 INT pin. It detects the latched transition of any port, when the port configured as an input and the interrupt enabled bit is set.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7307 Evaluation Kit/Evaluation System

## Reconnect and Exit Buttons

Press the Reconnect button to reestablish the connection between the EV kit GUI software and MAX7307 EV kit hardware.

Press the Exit button to quit the MAX7307 EV kit GUI software.

## Detailed Description of Hardware

The MAX7307 is a 4-port level-translating GPIO with latching transition detection, blink, and PWM. The MAX7307 EV kit board provides a proven layout for evaluating the MAX7307. The EV kit comes with a MAX7307ALB+ installed.

## Hardware Reset

Press pushbutton S2 to void current I 2 C transaction involving the MAX7307. It has the option of resetting the registers to power-up condition, resetting the PWM, and the blink-timing counter. Refer to the MAX7307 IC data sheet for more details on the reset function.

## I 2 C Address

The MAX7307 uses fixed I 2 C slave address 0x98 (1001100x).

## Jumper Settings of I/O Ports Configuration

Jumpers JU2-JU5 are used to configure the MAX7307 I/O ports. Table 1 shows the detailed function of each jumper.

## Power Supplies

The I/O level translation port supply (VLA) must be powered by a user-supplied 1.4V to 5.5V power supply. The MAX7307 chip supply (VDD) can either be powered from the CMAXQUSB (2.5V or 3.3V) or from a user-supplied 1.62V to 3.6V power supply connecting to VCC, as shown in Table 2. If an external power supply is  used, make sure that the supplied voltage is compatible with the CMAXQUSB JU1 setting.

<!-- image -->

## Table 1. Jumpers JU2-JU5 Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                 |
|----------|------------------|---------------------------------------------|
| JU2      | 1-2*             | P1 drives the white LED D1                  |
| JU2      | 2-3              | P1 functions as INT                         |
| JU2      | Open             | Use P1/INT pad to evaluate P1/INT pin       |
| JU3      | 1-2*             | P2 drives the red LED of D2                 |
| JU3      | Open             | Use P2/OSCIN pad to evaluate P2/OSCIN pin   |
| JU4      | 1-2*             | P3 drives the green LED of D2               |
| JU4      | Open             | Use P3/OSCOUT pad to evaluate P3/OSCOUT pin |
| JU5      | 1-2*             | P4 drives the blue LED of D2                |
| JU5      | 2-3              | Use P4 as an input                          |
| JU5      | Open             | Use P4 pad to evaluate P4 pin               |

## Table 2. VDD Selection Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU1      | 1-2              | User-supplied 1.62V to 3.6V power supply (VCC) |
| JU1      | 2-3*             | Powered by CMAXQUSB                            |

## User-Supplied I 2 C Interface

To use the MAX7307 EV kit with a user-supplied I 2 C interface, install the shunt on jumper JU1's 1-2 position and remove the CMAXQUSB board. Connect SDA, SCL, and GND lines from the user-supplied I 2 C interface to the SDA, SCL, and GND pads on the MAX7307 EV kit. Apply a 1.62V to 3.6V power supply to the VCC pad of the MAX7307 EV kit. Depending on the configuration of the user-supplied I 2 C interface, it may be necessary to install I 2 C pullup resistors R9 and R10.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7307 Evaluation Kit/Evaluation System

Figure 3. MAX7307 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7307 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX7307 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7307 Evaluation Kit/Evaluation System

Figure 5. MAX7307 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7307 Evaluation Kit/Evaluation System

Figure 6. MAX7307 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9