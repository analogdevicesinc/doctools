<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX7324 Evaluation Kit/Evaluation System

## General Description

The MAX7324 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that demonstrates the capabilities of the MAX7324 I 2 C port expander with eight push-pull outputs and eight inputs. The MAX7324 EV kit also includes Windows ® 2000/ XP/Vista-compatible software that provides a simple graphical user interface (GUI) for exercising the MAX7324's features.

The MAX7324 evaluation system (EV system) includes a MAX7324 EV kit and a Maxim CMAXQUSB serialinterface board. The CMAXQUSB board connects to a PC's USB port and allows the transfer of I 2 C commands to the MAX7324 EV kit.

The EV kit comes with the MAX7324AEG+ installed.

## MAX7324 EV System

| PART          |   QTY | DESCRIPTION            |
|---------------|-------|------------------------|
| MAX7324EVKIT+ |     1 | MAX7324 EV kit         |
| CMAXQUSB+     |     1 | Serial-interface board |

## MAX7324 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106K |
| C2            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K |
| C3            |     1 | 47pF ±10%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H470J  |
| D1, D3        |     2 | Red LEDs (PLCC)                                                 |

Windows is a registered trademark of Microsoft Corp.

Features

- ♦ 400kHz, 2-Wire Serial Interface
- ♦ 1.71V to 5.5V Operation
- ♦ 8 Push-Pull Output Ports
- ♦ 8 Input Ports with Maskable Latching-Transition Detection
- ♦ Input Ports are Overvoltage Protected to 6V
- ♦ Proven PCB Layout
- ♦ Windows 2000/XP/Vista (32-Bit)-Compatible Software
- ♦ Fully Assembled and Tested
- ♦ EV System: USB PC Connection

## Ordering Information

| TYPE      |
|-----------|
| EV Kit    |
| EV System |

Note: The MAX7324 EV kit software is designed for use with the complete EV system (MAX7324EVCMAXQU+). The EV system includes both the Maxim CMAXQUSB board and the EV kit (MAX7324EVKIT+). If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| D2, D4        |     2 | Green LEDs (PLCC)                                                                         |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                      |
| JU1, JU2      |     2 | 5-pin, 4-way headers                                                                      |
| JU3           |     1 | 2-pin header                                                                              |
| JU4           |     1 | 3-pin header                                                                              |
| R1-R4         |     4 | 150 Ω ±5% resistors (0603)                                                                |
| R5-R9         |     5 | 10k Ω ±5% resistors (0603)                                                                |
| R10, R11      |     0 | Not installed, resistors (0603)                                                           |
| R12           |     1 | 2k Ω ±5% resistor (0603)                                                                  |
| S1-S4         |     4 | Pushbutton switches                                                                       |
| U1            |     1 | Maxim I 2 C port expander with 8 push-pull outputs and 8 inputs MAX7324AEG+ (24-pin QSOP) |
| -             |     1 | PCB: MAX7324 Evaluation Kit+                                                              |

1

## MAX7324 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX7324 when contacting this component supplier.

## MAX7324 EV Kit Files

| FILE                | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX7324.EXE         | Application program                        |
| FTD2XX.INF          | USB device driver file                     |
| UNINST.INI          | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- The MAX7324 EV system MAX7324 EV kit Maxim CMAXQUSB board USB cable (included with CMAXQUSB)
- A user-supplied Windows 2000/XP/Vista-compatible PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 7324Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  MAX7324 evaluation software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Enable the I 2 C pullup resistors on the CMAXQUSB board by setting the DIP switches on SW1 to the ON position.
- 4) For the MAX7324 EV kit, make sure the shunts of all jumpers are in the following default positions:
5. JU1: (1-3) Combined with JU2 makes I 2 C address = 0xC0, 0xA0
6. JU2: (1-4) Combined with JU1 makes I 2 C address = 0xC0, 0xA0
7. JU3: (Open) Normal operation
8. JU4: (2-3) CMAXQUSB provides the power supply
- 5) Connect the boards by aligning the MAX7324 EV kit's  20-pin  connector with the 20-pin connector of the CMAXQUSB board.
- 6) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time it is used on this PC. If you do not  see  a  window  that  is  similar  to  the  one described above after 30s, remove the USB cable from the CMAXQUSB  and reconnect i t . Administrator privileges are required to install the USB device driver on Windows 2000/XP/Vista.
- 7) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX7324 (default installation directory) using the Browse button. During device driver installation,  Windows may show a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation. Refer to the USB\_Driver\_Help.PDF document for additional information.
- 8) Start  the  MAX7324 EV kit software by opening its icon in the Start menu. The GUI main window will appear, as shown in Figure 1.
- 9) Check or uncheck the O8 and O9 checkboxes above the Write button, which is inside the Output Ports group box. Press the Write button and observe the light change of the LEDs on the EV kit board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7324 Evaluation Kit/Evaluation System

## Detailed Description of Software

To start the MAX7324 EV kit software, double click the MAX7324 EV kit icon that is created during installation. The GUI main window appears, as shown in Figure 1.

There are four group boxes on the MAX7324 EV kit GUI software: Input Ports , Output Ports , I2C Addresses , and Interrupt Status .

## Input Ports Group Box

The Input Ports group box shown in Figure 1 contains the Write group box and the Read group box. The Read group box consists of two sections: Port Status and Flag Status .

Check or uncheck the desired checkboxes in the Write group box and press the Write button to write the port settings to the device.

<!-- image -->

Figure 1. MAX7324 Evaluation Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Pressing the Single-byte Read button only reads the port status. Pressing the Two-byte Read button will read both port status and flag status. Refer to the MAX7324 IC data sheet for a detailed description.

## Output Ports Group Box

The Output Ports group box also contains the Write group box and the Read group box.

Check or uncheck the desired checkboxes in the Write group box and press the Write button to write the port settings to the device.

Press the Read button to read the port status.

## MAX7324 Evaluation Kit/Evaluation System

## I2C Addresses Group Box

The I2C Addresses drop-down list automatically detects the MAX7324's I 2 C slave address when the GUI software starts. If multiple devices are connected to the I 2 C bus, the user can use this drop-down list to manually change the device's I 2 C slave address according to the shunt position of JU1 and JU2, as shown in Table 1.

## Table 1. The I 2 C Address Configuration

| SHUNT POSITION   | SHUNT POSITION   | I 2 C ADDRESS                       |
|------------------|------------------|-------------------------------------|
| JU2              | JU1              |                                     |
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

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Interrupt Status Group Box

The Interrupt Status group box shows the current status of the MAX7324 INT pin (active-low, programmable latching transition-detection interrupt output).

<!-- image -->

## MAX7324 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

The MAX7324 has eight push-pull outputs and eight inputs.  The  MAX7324 EV kit board provides a proven layout for  evaluating the MAX7324. The EV kit comes with a MAX7324AEG+ installed.

## Hardware-Reset Control

The hardware-reset function is controlled by jumper JU3, as shown in Table 2. Putting a shunt in the 1-2 position resets all registers and puts the device in the power-on-reset state.

## Table 2. RST Jumper Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU3      | 1-2              | Reset            |
| JU3      | Open*            | Normal operation |

## Power Supplies

The MAX7324 EV kit can either be powered from the CMAXQUSB (2.5V, 3.3V, and 5V) or from a usersupplied 1.71V to 5.5V power supply connecting to VDD, as shown in Table 3.

If a user-supplied power supply is used, ensure that the voltage setting is compatible with the CMAXQUSB JU1 setting.

## Table 3. V+ Selection Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU4      | 1-2              | User-supplied 1.71V to 5.5V power supply (VDD) |
| JU4      | 2-3*             | Powered by CMAXQUSB                            |

*Default position.

## User-Supplied I 2 C Interface

To use the MAX7324 EV kit with a user-supplied I 2 C interface, install  a  shunt  on  jumper JU4's 1-2 position. Connect SDA, SCL, and GND lines from the usersupplied I 2 C interface to the SDA, SCL, and GND pads on the MAX7324 EV kit. Apply a 1.71V to 5.5V power supply to the VDD pad of the MAX7324 EV kit. Depending on the configuration of the user-supplied I 2 C interface, it may be necessary to install the I 2 C pullup resistors, R10 and R11.

## I 2 C Address Configuration

The combination of shunt positions of jumpers JU1 and JU2 determine the I 2 C slave address of the MAX7324 EV kit. See Table 1 to select the appropriate setting.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7324 Evaluation Kit/Evaluation System

Figure 2. MAX7324 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7324 Evaluation Kit/Evaluation System

Figure 3. MAX7324 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 4. MAX7324 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7324 Evaluation Kit/Evaluation System

Figure 5. MAX7324 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600