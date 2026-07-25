<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX7327 Evaluation Kit/Evaluation System

## General Description

The MAX7327 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the capabilities of the MAX7327 I 2 C port expander with 12 push-pull outputs and 4 open-drain I/O ports. The MAX7327 EV kit also includes Windows ® 98SE/2000/XP-compatible software, which provides a simple graphical user interface (GUI) for exercising the MAX7327's features.

The MAX7327 evaluation system (EV system) includes a MAX7327 EV kit and a Maxim CMAXQUSB serial interface board.

The CMAXQUSB board connects to a PC's USB port and allows the transfer of I 2 C commands to the MAX7327 EV kit.

The EV kit comes with the MAX7327ATG+ installed. The MAX7327 EV kit can also be used to evaluate the MAX7324/MAX7325/MAX7326. Contact the factory for free samples of the pin-compatible MAX7324ATG+/ MAX7325ATG+/MAX7326ATG+ to evaluate these parts.

Windows is a registered trademark of Microsoft Corp.

## MAX7327 EV System

| PART          |   QTY | DESCRIPTION            |
|---------------|-------|------------------------|
| MAX7327EVKIT+ |     1 | MAX7327 EV kit         |
| CMAXQUSB+     |     1 | Serial interface board |

## MAX7327 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A106K  |
| C2            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K |
| C3            |     1 | 47pF ±10%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H470J  |
| D1, D3        |     2 | Red LEDs (PLCC4) OPTEK OVSASBC2R8                               |

- ♦ 400kHz, 2-Wire Serial Interface
- ♦ 1.71V to 5.5V Operation
- ♦ 12 Push-Pull Output Ports, Rated at 20mA Sink Current
- ♦ 4 Open-Drain I/O Ports, Rated at 20mA Sink Current
- ♦ Proven PCB Layout
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ Fully Assembled and Tested

- ♦

- EV System: USB PC Connection

## Ordering Information

| PART             | TYPE      | INTERFACE                   |
|------------------|-----------|-----------------------------|
| MAX7327EVKIT+    | EV kit    | User-supplied I2C interface |
| MAX7327EVCMAXQU+ | EV system | CMAXQUSB board              |

Note: The MAX7327 EV kit software is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## Component List

## MAX7327 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| D2, D4        |     2 | Green LEDs (PLCC4) OPTEK OVSAGBC2R8    |
| D5, D6        |     2 | White LEDs (PLCC2) OPTEK OVS9WBCR9     |
| J1            |     1 | 2 x 10 right-angle female receptacle   |
| JU1, JU2      |     2 | 5-pin headers                          |
| JU3           |     1 | 2-pin header                           |
| JU4           |     1 | 3-pin header                           |
| R1, R3        |     2 | 150 Ω ±5% resistors (0603), lead- free |
| R2, R4        |     2 | 82 Ω ±5% resistors (0603), lead- free  |
| R5, R6        |     2 | 100 Ω ±5% resistors (0603), lead- free |
| R7, R8, R9    |     3 | 10k Ω ±5% resistors (0603), lead- free |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

## MAX7327 Evaluation Kit/Evaluation System

## Component List (continued)

## MAX7327 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                          |
|---------------|-------|--------------------------------------|
| R10, R11      |     0 | Not installed (0603), resistors      |
| R12           |     1 | 2k Ω ±5% resistor (0603), lead- free |
| S1-S4         |     4 | Pushbutton switches                  |
| U1            |     1 | MAX7327ATG+ (24-pin TQFN, 4mm x 4mm) |
| -             |     1 | MAX7327 EV kit+ PCB                  |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| OPTEK      | 800-341-4747 | www.optekinc.com      |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the Maxim MAX7327 when contacting these component suppliers.

## MAX7327 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX7327.EXE             | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- The MAX7327 EV system: MAX7327 EV kit Maxim CMAXQUSB board
- USB cable (included with CMAXQUSB)
- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In the following section(s), software-related items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underline refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the most recent revision of the EV kit software 7327Rxx.ZIP.
- 2) Install  the  MAX7327 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start Menu.
- 3) Enable the I 2 C pullup resistors on the CMAXQUSB board by setting the DIP switches on SW1 to the ON position.
- 4) For the MAX7327 EV kit, make sure the shunts of all jumpers are in the following default positions:
5. JU1: (1-3) Combined with JU2 makes I 2 C address = 0xC0, 0xA0
6. JU2: (1-4) Combined with JU1 makes I 2 C address = 0xC0, 0xA0
7. JU3: (Open) Normal operation
8. JU4: (2-3) CMAXQUSB provides the power supply
- 5) Connect the boards by aligning the MAX7327 EV kit's  20-pin  connector with the 20-pin connector of the CMAXQUSB board.
- 6) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB board. A Building Driver Database window should pop up in addition to a New Hardware Found message, if this is the first time it is used on this PC. If you do not see a window that is similar to the one described above after 30 seconds,  try  removing  the  USB  cable  from  the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000 and XP. Refer to the document TROUBLESHOOTING\_USB.PDF included with the software if you have any problems during this step.
- 7) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX7327 (default installation directory) using the Browse button.
- 8) Start the MAX7327 EV kit software by opening its icon in the Start menu. The GUI main window appears as in Figure 1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7327 Evaluation Kit/Evaluation System

Figure 1. MAX7327 Evaluation Software Main Window

<!-- image -->

- 9) Check or uncheck the checkbox O0, O1, P2, and P3 above the Write button, which is inside the Group A Ports groupbox. Press the Write button and observe the light change of the LEDs on the EV kit board.

## Detailed Description of Software

To start the MAX7327 EV kit software, double-click the MAX7327 EV kit icon that is created during installation. The GUI main window appears as shown in Figure 1. The user will have to wait approximately two seconds while the MAX7327 EV kit software connects to the CMAXQUSB board.

There are four groupboxes on the MAX7327 EV kit GUI software: Group A Ports , Group B Ports , I2C Addresses , and Interrupt Status .

Also there are three buttons on the EV kit GUI software: Reconnect , Help , and Exit .

<!-- image -->

## Group A Ports Groupbox

The Group A Ports groupbox shown in Figure 1 contains the read panel and write panel. The read panel consists of two sections: Port Status and Flag Status .

Pressing the Single-byte Read button only reads the port status. Pressing the Two-byte Read button will read both Port Status and Flag Status .

Check or uncheck the desired checkboxes in the write panel and press the Write button to write those settings to the hardware.

## Group B Ports Groupbox

The Group B Ports groupbox also contains the read panel and write panel.

Press the Read button to read the port status.

Check or uncheck the desired checkboxes in the write panel and press the Write button to write those settings to the hardware.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7327 Evaluation Kit/Evaluation System

## I2C Addresses Groupbox

The I2C Addresses pull-down menu autodetects the MAX7327's I 2 C slave address when the GUI software starts. If multiple devices are connected to the I 2 C bus, the user can use this pull-down menu to manually change the device's I 2 C slave address according to the shunt position of JU1 and JU2 as shown in Table 1.

Table 1. I 2 C Address Configuration

| SHUNT POSITION   | SHUNT POSITION   | I 2 C ADDRESS                       |
|------------------|------------------|-------------------------------------|
| JU2              | JU1              | I 2 C ADDRESS                       |
| 1-4 (SCL)*       | 1-3 (GND)*       | 1100000x (0xC0) and 1010000x (0xA0) |
| 1-4 (SCL)        | 1-2 (VCC)        | 1100001x (0xC2) and 1010001x (0xA2) |
| 1-4 (SCL)        | 1-4 (SCL)        | 1100010x (0xC4) and 1010010x (0xA4) |
| 1-4 (SCL)        | 1-5 (SDA)        | 1100011x (0xC6) and 1010011x (0xA6) |
| 1-5 (SDA)        | 1-3 (GND)        | 1100100x (0xC8) and 1010100x (0xA8) |
| 1-5 (SDA)        | 1-2 (VCC)        | 1100101x (0xCA) and 1010101x (0xAA) |
| 1-5 (SDA)        | 1-4 (SCL)        | 1100110x (0xCC) and 1010110x (0xAC) |
| 1-5 (SDA)        | 1-5 (SDA)        | 1100111x (0xCE) and 1010111x (0xAE) |
| 1-3 (GND)        | 1-3 (GND)        | 1101000x (0xD0) and 1011000x (0xB0) |
| 1-3 (GND)        | 1-2 (VCC)        | 1101001x (0xD2) and 1011001x (0xB2) |
| 1-3 (GND)        | 1-4 (SCL)        | 1101010x (0xD4) and 1011010x (0xB4) |
| 1-3 (GND)        | 1-5 (SDA)        | 1101011x (0xD6) and 1011011x (0xB6) |
| 1-2 (VCC)        | 1-3 (GND)        | 1101100x (0xD8) and 1011100x (0xB8) |
| 1-2 (VCC)        | 1-2 (VCC)        | 1101101x (0xDA) and 1011101x (0xBA) |
| 1-2 (VCC)        | 1-4 (SCL)        | 1101110x (0xDC) and 1011110x (0xBC) |
| 1-2 (VCC)        | 1-5 (SDA)        | 1101111x (0xDE) and 1011111x (0xBE) |

## Hardware Reset Control

The hardware reset function is controlled by jumper JU3 as shown in Table 2. Putting the shunt in the 1-2 position resets and disables the I 2 C interface.

## Table 2. RST Jumper Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU3      | 1-2              | Reset            |
| JU3      | Open*            | Normal operation |

## Interrupt Status Groupbox

The Interrupt Status groupbox shows the current status of the MAX7327 INT pin, which reflects the latched transition detection of four I/O ports.

Reconnect, Help, and Exit Buttons Press the Reconnect button to reestablish the connection between the EV kit GUI software and the MAX7327 EV kit hardware.

Press the Help button to show the MAX7327 EV kit software revision and Maxim's website information.

Press the Exit button to quit the MAX7327 EV kit GUI software.

## Detailed Description of Hardware

The MAX7327 is an I 2 C interfaced port expander with 12 push-pull outputs and 4 open-drain I/O ports. The MAX7327 EV kit board provides a proven layout for evaluating the MAX7327. The EV kit comes with a MAX7327ATG+ installed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## I 2 C Address Configuration

The combinations of the shunt position of jumper JU1 and JU2 determine the I 2 C slave address of the MAX7327 EV kit. See Table 1 to select the appropriate setting.

## Power Supplies

The MAX7327 EV kit can be either powered from the CMAXQUSB (2.5V, 3.3V, and 5V) or from a user-supplied  1.71V to 5.5V power supply connecting to VDD, as shown in Table 3.

If  using  a  user-supplied  power  supply,  make sure the voltage setting is compatible with the CMAXQUSB JU1 setting.

## Table 3. V+ Selection Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU4      | 1-2              | User-provided 1.71V to 5.5V power supply (VDD) |
| JU4      | 2-3*             | Powered by CMAXQUSB                            |

## User-Supplied I 2 C Interface

To use the MAX7327 EV kit with a user-supplied I 2 C interface, install the shunt on jumper JU4's 1-2 position. Connect SDA, SCL, and GND lines from the user-supplied I 2 C interface to the SDA, SCL, and GND pads on the MAX7327 EV kit. Apply a 1.71V to 5.5V power supply to the VDD pad of the MAX7327 EV kit. Depending on the configuration of the user-supplied I 2 C interface, it  may  be  necessary to install  the  I 2 C  pullup  resistors R10 and R11.

## MAX7327 Evaluation Kit/Evaluation System

<!-- image -->

Figure 2. MAX7327 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7327 Evaluation Kit/Evaluation System

Figure 3. MAX7327 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX7327 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7327 Evaluation Kit/Evaluation System

Figure 5. MAX7327 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

CARDENAS

7