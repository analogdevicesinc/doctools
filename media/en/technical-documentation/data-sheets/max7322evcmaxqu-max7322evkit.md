<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX7322 Evaluation Kit/Evaluation System

## General Description

The MAX7322 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the capabilities of the MAX7322 I 2 C port expander with four push-pull outputs and four inputs. The MAX7322 EV kit also includes Windows® 98SE/ 2000/XP-compatible software, which provides a simple graphical user interface (GUI) for exercising the MAX7322's features.

The MAX7322 evaluation system (EV system) includes a MAX7322 EV kit and a Maxim CMAXQUSB serialinterface board.

The CMAXQUSB board connects to a PC's USB port and allows the transfer of I 2 C commands to the MAX7322 EV kit.

The EV kit comes with the MAX7322ATE+ installed. The MAX7322 EV kit can also be used to evaluate the MAX7319/MAX7320/MAX7321/MAX7323. Contact the factory  for  free  samples  of  the  pin-compatible MAX7319ATE+, MAX7320ATE+, MAX7321ATE+, or MAX7323ATE+ to evaluate these parts.

Windows is a registered trademark of Microsoft Corp.

## MAX7322 EV System

| PART          |   QTY | DESCRIPTION            |
|---------------|-------|------------------------|
| MAX7322EVKIT+ |     1 | MAX7322 EV kit         |
| CMAXQUSB+     |     1 | Serial-interface board |

## MAX7322 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A106K  |
| C2            |     1 | 0.1µF ±15%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K |
| D1, D3        |     2 | Red LEDs (PLCC4) OPTEK OVSASBC2R8                               |
| D2, D4        |     2 | Green LEDs (PLCC4) OPTEK OVSAGBC2R8                             |

- ♦ 400kHz I 2 C/2-Wire Serial Interface
- ♦ 1.71V to 5.5V Operation Voltage
- ♦ 4 Push-Pull Output Ports Rated at 20mA Sink Current
- ♦ 4 Input Ports with Maskable, Latching Transition Detection
- ♦ Proven PCB Layout
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software

- ♦ Fully Assembled and Tested

- ♦ EV System: USB-to-PC Connection

## Ordering Information

| PART              | TYPE      | INTERFACE                    |
|-------------------|-----------|------------------------------|
| MAX7322EVKIT +    | EV kit    | User-supplied I 2C interface |
| MAX7322EVCMAXQU + | EV system | CMAXQUSB board               |

Note: The MAX7322 EV kit software is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## Component Lists

| DESIGNATION      |   QTY | DESCRIPTION                          |
|------------------|-------|--------------------------------------|
| D5, D6           |     0 | Not installed, LEDs (PLCC2)          |
| J1               |     1 | 2 x 10 right-angle female receptacle |
| JU1, JU2         |     2 | 5-pin headers                        |
| JU3              |     1 | 2-pin header                         |
| JU4              |     1 | 3-pin header                         |
| R1, R3           |     2 | 150 Ω ±5% resistors (0603)           |
| R2, R4           |     2 | 82 Ω ±5% resistors (0603)            |
| R5, R6, R9       |     3 | 10k Ω ±5% resistors (0603)           |
| R7, R8, R10, R11 |     0 | Not installed, resistors (0603)      |
| R12              |     1 | 2k Ω ±5% resistor (0603)             |
| S1, S2           |     2 | Pushbutton switches                  |
| S3, S4           |     0 | Not installed, pushbutton switches   |
| U1               |     1 | MAX7322ATE+ (16-pinTQFN,3mmx 3mm)    |
| -                |     1 | PCB: MAX7322 Evaluation Kit+         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

## MAX7322 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER           | PHONE        | WEBSITE               |
|--------------------|--------------|-----------------------|
| OPTEK Technologies | 800-341-4747 | www.optekinc.com      |
| TDK Corp.          | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX7322 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX7322 EV system MAX7322 EV kit CMAXQUSB board

USB type A-B cable (included with CMAXQUSB)

- A user-supplied computer running Windows 98SE/2000/XP with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

The MAX7322 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 7322Rxx.ZIP.
- 2) Install  the  MAX7322 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) Enable the I 2 C pullup resistors on the CMAXQUSB board by setting the DIP switches on SW1 to the ON position.
- 4) For the MAX7322 EV kit, make sure that the shunts of all jumpers are in the following default positions:
5. JU1: (1-3)  Combined with JU2 makes I 2 C address = 0xC0 JU2: (1-4)  Combined with JU1 makes I 2 C address = 0xC0 JU3: (Open)  Normal operation JU4: (2-3) CMAXQUSB provides the power supply
- 5) Connect the boards by aligning the MAX7322 EV kit's  20-pin  connector with the 20-pin connector of the CMAXQUSB board.
- 6) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window pops up, in addition to a New Hardware Found message if this is the first time it is used on this PC. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000/XP. Refer to the TROUBLESHOOT-ING\_USB.PDF document included with the software if you have any problems during this step.
- 7) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX7322 (default installation directory) using the Browse button.
- 8) Start  the  MAX7322 EV kit software by opening its icon in the Start menu. The GUI main window appears, as shown in Figure 1.
- 9) Check or uncheck checkboxes D0 and/or D1 above the Write button. Press the Write button and observe the light change of the LEDs on the EV kit board.

## MAX7322 EV Kit Files

| INSTALL.EXE             | Installs the EV kit files on your computer   |
|-------------------------|----------------------------------------------|
| MAX7322.EXE             | Application program                          |
| FTD2XX.INF              | USB device driver file                       |
| UNINST.INI              | Uninstalls the EV kit software               |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7322 Evaluation Kit/Evaluation System

Figure 1. MAX7322 Evaluation Software Main Window

<!-- image -->

## Detailed Description of Software

To start the MAX7322 EV kit software, double click on the MAX7322 EV kit icon created during installation. The GUI main window appears, as shown in Figure 1.

There are three group boxes on the MAX7322 EV kit GUI software: Ports , I 2 C  Addresses ,  and Interrupt Status .  There are also three buttons on the EV kit GUI software: Reconnect , Help , and Exit .

## Ports Group Box

The Ports group box shown in Figure 1 contains the read panel and write panel. The read panel consists of two sections: Port Status and Flag Status .

Pressing the Single-byte Read button only reads the port status. Pressing the Two-byte Read button reads both port status and flag status.

Check or uncheck the desired checkboxes in the write panel and press the Write button to write those settings to the hardware.

<!-- image -->

## I 2 C Group Box

The I2C Addresses pulldown menu autodetects the MAX7322's I 2 C slave address when the GUI software starts. If multiple devices are connected to the I 2 C bus, the user can use this pulldown menu to manually change the device's I 2 C slave address according to the shunt position of JU1 and JU2, as shown in Table 1.

## Interrupt Status Group Box

The Interrupt Status group box shows the current status of the MAX7322 INT pin, which reflects the latched transition  detection  of  four  input  ports.  Make  sure  the interrupt mask bits of the input ports are set properly.

## Reconnect, Help, and Exit Buttons

Press the Reconnect button to reestablish the connection between the EV kit GUI software and MAX7322 EV kit hardware.

Press the Help button to show the MAX7322 EV kit software revision and Maxim's website information.

Press the Exit button to quit the MAX7322 EV kit GUI software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7322 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

The MAX7322 is an I 2 C port expander with four pushpull outputs and four inputs. The MAX7322 EV kit board provides a proven layout for evaluating the MAX7322. The EV kit comes with a MAX7322ATE+ installed.

## Hardware-Reset Control

The hardware-reset function is controlled by jumper JU3, as shown in Table 2. Putting the shunt in the 1-2 position resets and disables the I 2 C interface.

## I 2 C Address Configuration

The shunt-position combinations of jumpers JU1 and JU2 determine the I 2 C slave address of the MAX7322 EV kit. See Table 1 to select the appropriate setting.

## Power Supplies

The MAX7322 EV kit can be powered from either the CMAXQUSB (2.5V, 3.3V, and 5V) or from a user-supplied  1.71V to 5.5V power supply connecting to VDD, as shown in Table 3.

If  the  user  supplies  the  power  supply,  make  sure  the supplied voltage is compatible with the CMAXQUSB JU1 setting.

## User-Supplied I 2 C Interface

To use the MAX7322 EV kit with a user-supplied I 2 C interface, install the shunt on jumper JU4's 1-2 position. Connect SDA, SCL, and GND lines from the user-supplied I 2 C interface to the SDA, SCL, and GND pads on the MAX7322 EV kit. Apply a 1.71V to 5.5V power supply to the VDD pad of the MAX7322 EV kit. Depending on the configuration of the user-supplied I 2 C interface, it  may be necessary to install I 2 C pullup resistors R10 and R11.

## Table 1. The I 2 C Address Configuration

| SHUNT POSITION   | SHUNT POSITION   | I 2 C ADDRESS   |
|------------------|------------------|-----------------|
| JU2              | JU1              |                 |
| 1-4 (SCL)*       | 1-3 (GND)*       | 1100000x (0xC0) |
| 1-4 (SCL)        | 1-2 (VCC)        | 1100001x (0xC2) |
| 1-4 (SCL)        | 1-4 (SCL)        | 1100010x (0xC4) |
| 1-4 (SCL)        | 1-5 (SDA)        | 1100011x (0xC6) |
| 1-5 (SDA)        | 1-3 (GND)        | 1100100x (0xC8) |
| 1-5 (SDA)        | 1-2 (VCC)        | 1100101x (0xCA) |
| 1-5 (SDA)        | 1-4 (SCL)        | 1100110x (0xCC) |
| 1-5 (SDA)        | 1-5 (SDA)        | 1100111x (0xCE) |
| 1-3 (GND)        | 1-3 (GND)        | 1101000x (0xD0) |
| 1-3 (GND)        | 1-2 (VCC)        | 1101001x (0xD2) |
| 1-3 (GND)        | 1-4 (SCL)        | 1101010x (0xD4) |
| 1-3 (GND)        | 1-5 (SDA)        | 1101011x (0xD6) |
| 1-2 (VCC)        | 1-3 (GND)        | 1101100x (0xD8) |
| 1-2 (VCC)        | 1-2 (VCC)        | 1101101x (0xDA) |
| 1-2 (VCC)        | 1-4 (SCL)        | 1101110x (0xDC) |
| 1-2 (VCC)        | 1-5 (SDA)        | 1101111x (0xDE) |

## Table 2. Reset Jumper Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU3      | 1-2              | Reset            |
| JU3      | Open*            | Normal operation |

*Default position.

Table 3. V+ Selection Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU4      | 1-2              | User-provided 1.71V to 5.5V power supply (VDD) |
| JU4      | 2-3*             | Powered by CMAXQUSB                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7322 Evaluation Kit/Evaluation System

<!-- image -->

Figure 2. MAX7322 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluate:  MAX7322

## MAX7322 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX7322 EV Kit Component Placement GuideComponent Side

Figure 4. MAX7322 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX7322 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2007 Maxim Integrated Products is a registered trademark of Maxim Integrated Products, Inc.