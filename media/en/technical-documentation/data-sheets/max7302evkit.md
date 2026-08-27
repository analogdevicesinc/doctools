<!-- lastmod 2022-08-02 -->
## General Description

The MAX7302 evaluation kit (EV kit) provides a proven design to evaluate the MAX7302 9-port, level-translating GPIO and LED driver device. The EV kit also includes Windows ® 2000/XP/Vista-compatible software that provides a simple graphical user interface (GUI) for exercising the features of the MAX7302.

The MAX7302 EV kit has a built-in USB interface, allowi ng  a  PC  to  control  the  internal  registers  of  the MAX7302, as well as providing the power for the EV kit.

The EV kit is configured to drive three RGB LEDs. Pads and jumpers are provided to modify the board to the numerous configurations available for the MAX7302.

| DESIGNATION                                           |   QTY | DESCRIPTION                                                          |
|-------------------------------------------------------|-------|----------------------------------------------------------------------|
| C1, C2, C101, C103, C105-C108, C112, C115, C116, C117 |    12 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K  |
| C3, C102, C104, C118                                  |     4 | 10µF ±10%, 10V X5R ceramic capacitors (0805) Murata GRM21BR61A106K   |
| C4, C5                                                |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K    |
| C109                                                  |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E333K |
| C110, C111                                            |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J    |
| C113, C114                                            |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J    |
| D1, D2, D3                                            |     3 | RGB LEDs                                                             |
| D101                                                  |     1 | Red LED (0603)                                                       |
| D102                                                  |     1 | Green LED (0603)                                                     |
| FB101, FB102                                          |     2 | 220 Ω , 200mA ferrite beads (0603) Murata BLM18AG221SN1D             |

Windows is a registered trademark of Microsoft Corp.

<!-- image -->

## Features

- ♦ Windows 2000/XP/Vista (32-Bit)-Compatible Software
- ♦ USB PC Connection (Cable Included)
- ♦ USB Powered
- ♦ Lead-Free and RoHS-Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX7302EVKIT+ | EV Kit |

## Component List

| DESIGNATION                             |   QTY | DESCRIPTION                                       |
|-----------------------------------------|-------|---------------------------------------------------|
| J1, J2                                  |     2 | 8-pin, single-row headers                         |
| J101                                    |     1 | USB type-B right-angle female receptacle          |
| J102                                    |     0 | Not installed, dual-row header (2 x 5)            |
| JU1-JU9, JU11, JU12, JU13, JU101, JU102 |    14 | 2-pin headers                                     |
| JU10                                    |     1 | 4-way header                                      |
| R1, R4, R7                              |     3 | 270 Ω ±5% resistors (0603)                        |
| R2, R5, R8                              |     3 | 240 Ω ±5% resistors (0603)                        |
| R3, R6, R9                              |     3 | 160 Ω ±5% resistors (0603)                        |
| R10, R106                               |     2 | 10k Ω ±5% resistors (0603)                        |
| R11, R12                                |     2 | 4.7k Ω ±5% resistors (0603)                       |
| R101                                    |     1 | 470 Ω ±5% resistor (0603)                         |
| R102, R103                              |     2 | 27 Ω ±5% resistors (0603)                         |
| R104                                    |     1 | 1.5k Ω ±5% resistor (0603)                        |
| R105                                    |     1 | 2.2k Ω ±5% resistor (0603)                        |
| R107                                    |     1 | 130 Ω ±5% resistor (0603)                         |
| R108                                    |     1 | 100 Ω ±5% resistor (0603)                         |
| R109-R113                               |     0 | Not installed, resistor (0603), short PCB trace   |
| SW1                                     |     1 | Momentary pushbutton switch                       |
| U1                                      |     1 | 9-port I 2 C GPIO (16-pin TQFN) Maxim MAX7302ATE+ |

## MAX7302 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| U101          |     1 | 2.5V LDO regulator (5-pin SC70-5) Maxim MAX8511EXK25+         |
| U102          |     1 | 3.3V LDO regulator (5-pin SC70-5) Maxim MAX8511EXK33+         |
| U103          |     1 | Microcontroller (68-pinQFN-EP) MaximMAXQ2000-RAX+             |
| U104          |     1 | USB-to-UART converter (32-pin TQFP) FTDI FT232BL              |
| U105          |     1 | 93C46 type 3-wire EEPROM (8-pin SO-8) Atmel AT93C46A-10SU-2.7 |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE                 |
|-----------------------|--------------|-------------------------|
| Hong Kong X'tals Ltd. | 852-35112388 | www.hongkongcrystal.com |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com          |

Note: Indicate that you are using the MAX7302 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX7302 EV kit (USB cable included)
- A user-supplied Windows 2000/XP/Vista PC with a spare USB port

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 7302Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The  program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Verify that all jumpers (JU1-JU13, JU101, and JU102) are in their default positions, as shown in Table 1.

2

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| Y101          |     1 | 6MHz crystal (HCM49) Hong Kong X'tals Ltd. SSL6000000E18FAF  |
| Y102          |     1 | 16MHz crystal (HCM49) Hong Kong X'tals Ltd. SSM1600000E18FAF |
| -             |    15 | Shunts                                                       |
| -             |     1 | USB high-speed A-to-B cables, 6ft                            |
| -             |     1 | PCB: MAX7302 Evaluation Kit+                                 |

## MAX7302 EV Kit Files

| FILE                | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX7302.EXE         | Application program                        |
| FTD2XX.INF          | USB device driver file                     |
| UNINST.INI          | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF | USB driver installation help file          |

- 4) Connect the USB cable from the PC to the EV kit board. A Building Driver Database window will pop up in addition to a New Hardware Found message when installing the USB driver for the first time. If you do not see a window that is similar to the one described above after 30 seconds, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 5) Follow the directions of the Add New Hardware Wizard to  install  the  USB  device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX7302 (default installation directory) using the Browse button. During device driver installation, Windows may show a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation. Refer to the USB\_Driver\_Help.PDF document for additional information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 1. Device Configuration Registers Tab

<!-- image -->

- 6) Verify  that  the  EV  kit's  LED  D101  is  lit,  indicating that the USB is communicating to the EV kit board.
- 7) Start  the  MAX7302 EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears as shown in Figure 1.
- 8) Switch to the Port Configuration Registers tab as shown in Figure 2. Check the Output radio button in  the Port Index group box and click the Write button. Observe the red LED on port 1 turning on.

<!-- image -->

## Detailed Description of Software

The software main window includes five tabs. They are Device Configuration Registers , Port Configuration Registers , Configurable Logic , Port Lock ,  and View Port Status .  At  the  bottom  of  the  window,  there  is  an I2C Address drop-down list and a POR Reset button.

Device Configuration Registers Tab The Device Configuration Registers tab shown in Figure 1 contains two group boxes: Register 0x26 and Register 0x27 .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 2. Port Configuration Registers Tab

<!-- image -->

Clicking the Read button reads the current hardware register settings. Clicking the radio buttons or selecting the drop-down list inside the Register 0x26 group box followed by clicking the Write button writes the new settings to the respective device register.

## Port Configuration Registers Tab

The Port Configuration Registers tab shown in Figure 2 contains the Port Index , Port n Set As Output , and Port n Set As Input group boxes. There is also a single pair of Read and Write buttons.

The spin box selects the port a user wants to configure. The Set Port As group box configures the selected port either as an output or an input port.

Clicking the Read button reads the current hardware register  settings.  Clicking  the Write button writes the new settings to the hardware register.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 3. Configurable Logic Tab

<!-- image -->

## Configurable Logic Tab

The Configurable Logic tab shown in Figure 3 contains four group boxes: Register 0x28 (P2 ~ P5) , Register 0x29 (P6 ~ P9) , Register 0x70 (CLA Enable) , and Register 0x71 (CLA Lock) .

<!-- image -->

Clicking the Read button reads the current hardware register settings. Clicking the Write button after the desired settings are chosen writes the new settings to a respective hardware register.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 4. Port Lock Tab

<!-- image -->

## Port Lock Tab

The Port Lock tab shown in Figure 4 contains two group boxes: Register 0x72 (P1 ~ P5 Lock) and Register 0x73 (P6 ~ P9 Lock) .

6

Clicking the Read button reads the current hardware register setting. Clicking the Write button after the desired settings are chosen writes the new settings to a respective hardware register.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## View Port Status Tab

The View Port Status tab shown in Figure 5 displays the  port  functions  and  their  status.  Click  the Read All Port Status button to update all port status.

## I2C Address Drop-Down List

Configure the MAX7302 slave address by selecting the appropriate address in the I2C Address drop-down list.

<!-- image -->

See Table 1, JU10 settings, for possible MAX7302 I 2 C slave address configurations.

## POR Reset Button

Click the POR Reset button to re-establish the connection between the EV kit software and the MAX7302 EV kit hardware. The software GUI is reset to the POR state.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 5. View Port Status Tab

<!-- image -->

## MAX7302 Evaluation Kit

Figure 6. Maxim Command Module Interface Window

<!-- image -->

## Software Menu Bar

There are three menu items on the menu bar: File , Options , and Help .

Select File | Exit to exit the application.

Select Options | Interface (Advanced User) to  bring up the Maxim Command Module Interface as shown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

in  Figure 6. This interface allows I 2 C commands to be entered manually.

The Help menu item gives information about this EV kit software.

## Detailed Description of Hardware

The MAX7302 is a 9-port level-translating GPIO with latching transition  detection,  blink,  and  PWM  features. The MAX7302 EV kit board provides a proven layout for evaluating the device. The EV kit comes with one MAX7302ATE+ installed.

## Hardware Reset

Press SW1 to reset the MAX7302 device on the EV kit. Refer to the RST Input section of the IC data sheet for detailed reset functions.

## Power Supplies

The MAX7302 has separate VDD and VLA power supplies.  VLA is the port I/O supply and VDD powers the rest of the MAX7302 circuitry. On the MAX7302 EV kit, VDD is powered by a 3.3V LDO, MAX8511 chip. VLED and VLA are powered by the USB port directly, i.e. 5V. VDD, VLA, and VLED can also be supplied externally through corresponding on-board pads. Pre-installed jumpers on JU11, JU12, and JU13 headers should be removed before connecting external power supplies.

## User-Supplied I 2 C Interface

To use the MAX7302 EV kit with a user-supplied I 2 C interface,  connect SDA, SCL, and GND lines from the user-supplied I 2 C interface to the SDA, SCL, and GND pads on the MAX7302 EV kit. The shunts on JU101 and JU102 should be removed.

<!-- image -->

## MAX7302 Evaluation Kit

## Table 1. MAX7302 EV Kit Jumper Descriptions

| JUMPER       | SHUNT POSITION   | DESCRIPTION                                                   |
|--------------|------------------|---------------------------------------------------------------|
| JU1-JU9      | 1-2*             | Ports P1-P9 use preconfigured settings on the EV kit.         |
| JU1-JU9      | Open             | Ports P1-P9 input or output connected through the P1-P9 pads. |
| JU10         | 1-2*             | AD0 connected to VDD. Slave address is 0x9A.                  |
| JU10         | 1-3              | AD0 connected to GND. Slave address is 0x98.                  |
| JU10         | 1-4              | AD0 connected to SCL. Slave address is 0x9C.                  |
| JU10         | 1-5              | AD0 connected to SDA. Slave address is 0x9E.                  |
| JU11         | 1-2*             | VLED connected to VUSB (5V).                                  |
| JU11         | Open             | VLED applied externally through the VLED pad.                 |
| JU12         | 1-2*             | VDD connected to the on-board 3.3V power supply.              |
| JU12         | Open             | VDD applied externally through the VDD pad.                   |
| JU13         | 1-2*             | VLA connected to VUSB (5V).                                   |
| JU13         | Open             | VLA applied externally through the VLA pad.                   |
| JU101, JU102 | 1-2*             | On-board I 2 C master is connected to the MAX7302.            |
| JU101, JU102 | Open             | User-supplied I 2 C master is connected to the MAX7302.       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 7. MAX7302 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7302 Evaluation Kit

<!-- image -->

Figure 8. MAX7302 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 9. MAX7302 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7302 Evaluation Kit

<!-- image -->

Figure 10. MAX7302 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7302 Evaluation Kit

Figure 11. MAX7302 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7302 Evaluation Kit

Figure 12. MAX7302 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

15