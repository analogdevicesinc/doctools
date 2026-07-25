<!-- lastmod 2022-08-03 -->
## General Description

The MAX9660 evaluation kit (EV kit) demonstrates the MAX9660 programmable VCOM voltage buffer used for VCOM backplane voltage calibration in TFT-LCD panels,  such  as  those  found  in  high-resolution  TVs,  and high-end monitors. A 7-bit digital-to-analog converter (DAC) sinks current from an external resistor-divider to set a VCOM reference voltage. An external resistor sets the full-scale range of sinking current. The IC can drive ±100mA continuous current and up to ±900mA peak current. The desired DAC value can be stored in nonvolatile multiple one-time programmable (MOTP) memory and is recalled at each power-up. The EV kit operates from an 8V to 20V DC power supply.

The MAX9660 EV kit features a USB-to-I 2 C interface circuit.  Windows ® 2000/XP ® - and Windows Vista ® -compatible software, with a graphical user interface (GUI), available for exercising the MAX9660 features. The EV kit  can  also  connect  to  a  user-supplied  I 2 C  interface circuit for stand-alone MAX9660 operation.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

| DESIGNATION                                  |   QTY | DESCRIPTION                                                                               |
|----------------------------------------------|-------|-------------------------------------------------------------------------------------------|
| C1, C3-C8, C10, C11, C16, C17, C18, C26, C27 |    14 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K or TDK C1608X7R1E104K |
| C2, C21, C23, C25                            |     4 | 10µF ±10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A106K                        |
| C9                                           |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K or TDK C1608X7R1H332K |
| C12, C13                                     |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J or TDK C1608C0G1H100J   |
| C14, C15                                     |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J or TDK C1608C0G1H220J   |

<!-- image -->

## MAX9660 Evaluation Kit

## Features

- ♦ 7-Bit DAC for Setting VCOM Reference Voltage
- ♦ Integrated 30x Programmable Nonvolatile MOTP Memory to Store VCOM Setting
- ♦ ±100mA Continuous Current
- ♦ ±900mA Peak Current
- ♦ 8V to 20V DC Power-Supply Operation
- ♦ USB-Powered USB-to-I 2 C Interface Circuit
- ♦ Windows 2000/XP- and Windows Vista (32-Bit)-Compatible Software
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9660EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C19, C20, C22 |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K or TDK C1608X5R1A105K |
| C24           |     1 | 10µF ±10%, 25V X5R ceramic capacitor (1206) Murata GRM31CR61E106K                       |
| C28, C29      |     0 | Not installed, ceramic capacitors (0805)                                                |
| D1            |     1 | Green LED (0603) Panasonic LNJ314G8TRA                                                  |
| FB1           |     0 | Not installed, ferrite-bead inductor-short (PC trace) (0603)                            |
| J1            |     0 | Not installed, dual-row (2 x 2)-short (PC trace) 4-pin header, 0.1in                    |
| J2            |     0 | Not installed, 8-pin header, 0.1in                                                      |
| JU1           |     1 | 3-pin header                                                                            |

## MAX9660 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| JU2           |     0 | Not installed, 2-pin header                                           |
| R1, R5        |     0 | Not installed, resistors (0603) R1 is short (PC trace) and R5 is open |
| R2, R3        |     2 | 27 Ω ±5% resistors (0603) (lead-free only)                            |
| R4            |     1 | 1.5k Ω ±5% resistor (0603) (lead-free only)                           |
| R6, R9-R12    |     5 | 2.2k Ω ±5% resistors (0603) (lead-free only)                          |
| R7            |     1 | 10k Ω ±5% resistor (0603) (lead-free only)                            |
| R8            |     1 | 220 Ω ±5% resistor (0603) (lead-free only)                            |
| R13           |     1 | 10k Ω ±1% resistor (0603) (lead-free only)                            |
| R14, R15      |     2 | 69.8k Ω ±1% resistors (0603) (lead-free only)                         |
| R16           |     1 | 0 Ω ±5% resistor (0805) (lead-free only)                              |
| TP1, TP2      |     0 | Not installed, Tektronix test points                                  |
| USB           |     1 | USB type-B right-angle receptacle                                     |

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| U1            |     1 | Programmable VCOM buffer (8 TDFN-EP*) Maxim MAX9660ATA+ (Top Mark: BLM)             |
| U2            |     1 | Low-power 16-bit microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+                   |
| U3            |     1 | UART-to-USB converter (32 TQFP)                                                     |
| U4            |     1 | 93C46 3-wire 16-bit EEPROM (8 SO)                                                   |
| U5            |     1 | Dual bidirectional level translator (8 TDFN-EP*) Maxim MAX3394EETA+ (Top Mark: APE) |
| U6            |     1 | 3.3V regulator (5 SC70) Maxim MAX8511EXK33+ (Top Mark: AEI)                         |
| U7            |     1 | 2.5V regulator (5 SC70) Maxim MAX8511EXK25+ (Top Mark: ADV)                         |
| Y1            |     1 | 16MHz crystal                                                                       |
| Y2            |     1 | 6MHz crystal                                                                        |
| -             |     1 | Shunt (JU1)                                                                         |
| -             |     1 | PCB: MAX9660 EVALUATION KIT+                                                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9660 when contacting these component suppliers.

## MAX9660 EV Kit Files

| FILES               | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX9660.EXE         | Application program                        |
| FTD2XX.INF          | USB device driver file                     |
| UNINST.INI          | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF | USB driver installation help file          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Required Equipment

- MAX9660 EV kit (USB cable included)
- User-supplied Windows 2000/XP or Windows Vista PC with a spare USB port
- 8V to 20V DC power supply at 1A
- One digital voltmeter (DVM)

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX9660 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV kit software, 9660Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Connect the USB cable from the PC to the EV kit board. A New Hardware Found window pops up when installing the USB driver for the first time. If a window is not seen that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 4) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX9660 (default installation directory) using the Browse button. During device driver installation, Windows may show a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation.  Refer to the USB\_Driver\_Help.PDF document included with the software for additional information.
- 5) Once the software and hardware installation is complete, disconnect the USB cable from the EV kit.

<!-- image -->

## MAX9660 Evaluation Kit

- 6) Verify that a shunt is installed on jumper JU1 pins 2-3 (on-board 3.3V digital power supply).
- 7) Set the power supply to 15V and disable the power-supply output.
- 8) Connect the power-supply positive terminal to the AVDD PCB pad and the negative terminal to the GND PCB pad next to AVDD.
- 9) Connect the DVM negative terminal to the GND PCB pad next to the VCOMOUT PCB pad.
- 10) Connect the DVM positive terminal to the VCOMOUT PCB pad.
- 11) Connect the USB cable to the EV kit.
- 12) Enable the power-supply output.
- 13) Start  the  MAX9660 EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 14) Use the DVM to verify that the output voltage is close to the voltage shown in the Output (V) edit box.
- 15) To power down the EV kit, first turn off the AVDD supply and then disconnect the USB cable.

## Detailed Description of Software

The MAX9660 EV kit GUI software provides a user interface (Figure 1) to control the features of the MAX9660 VCOM voltage buffer. To start the EV kit software, double-click the MAX9660 EV kit icon created during installation. The software has a demo mode that is available by selecting Options | Demo Mode from the menu bar. When in demo mode, all software communication to the EV kit hardware is disabled and most of the software's GUI is functional. This feature enables a user to evaluate the software without hardware connectivity.

The user interface is easy to operate; use the mouse, or press the Tab and arrow keys to navigate the window. Press the Enter key after modifying an edit box to update the software. The status bar located at the bottom-left of the GUI window displays EV kit connectivity status, while the lower-right status bar displays the device address.

The VCOM output voltage in the Output (V) edit box is calculated using the values in the Reference group box's AVDD (V) , R13 (kOhm) , R14 (kOhm) ,  and R15 (kOhm) edit  boxes.  The  edit-box  values  in  the Reference group box MUST be correct for the software's VCOM output voltage calculation to be correct.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9660 Evaluation Kit

Figure 1. MAX9660 Evaluation Software Main Window

<!-- image -->

Upon startup, the DAC is set to the last value stored in the MOTP register. To modify the DAC output or the MOTP register setting, click on the DAC or MOTP radio button, respectively, in the Register group box and perform one of the following in the VCOM group box:

- 1) Move the scrollbar, or
- 2) Type a register value directly into the Reg Value edit box (7-bit decimal equivalent), or
- 3) Type in the desired output voltage in the Output (V) edit  box.  The  software  uses a register value that generates a voltage closest to the desired voltage value.

Press the Write button to update the MAX9660 IC with the entered register value. Data written to the DAC is volatile.  Data  can be written 30x to the nonvolatile MOTP register. The factory-default MOTP register setting is 64.

The Options menu item provides access to an advanced 2-wire interface and demo mode. The Help menu item provides help and general information about the EV kit software. The File menu item provides the option to exit the EV kit software.

## VCOM Voltage Calculation

The VCOM voltage is calculated using an on-board resistor-divider (R14 and R15), a resistor (R13) that sets the full-scale sink current, AVDD voltage, and the decimal DAC code (CODE) as follows:

<!-- formula-not-decoded -->

where CODE ranges from 0 to 127.

The VCOM voltage can be measured across the VCOMOUT and GND PCB pads.

## Advanced User Interface

A serial  interface  can  be  used  by  advanced users by selecting Options | Interface (Advanced Users) from the menu bar.

Click on the 2-wire interface tab shown in Figure 2. Press the Hunt for active listeners button and select the MAX9660 slave address 0x9E from the Target Device Address: combo box. In the General commands tab sheet, select the S - SMBusSendByte(addr,cmd) item in  the  drop-down list. Enter the desired hexadecimal data values into the Command byte: combo box and press the Execute button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9660 Evaluation Kit

Figure 2. Advanced I 2 C User Interface Window (2-Wire Interface Tab)

<!-- image -->

## Detailed Description of Hardware

The MAX9660 evaluation kit (EV kit) demonstrates the MAX9660 programmable VCOM voltage buffer in an 8pin TDFN surface-mount package with an exposed pad. EV kit applications include e-paper display panels,  VCOM backplane voltage calibration in TFT-LCD panels, such as those found in high-resolution TVs and high-end monitors. A 7-bit digital-to-analog converter (DAC) sinks current from an external resistor-divider (R14 and R15) to set a VCOM reference voltage. An external resistor (R13) sets the full-scale range of sink- ing current. The IC can drive ±100mA continuous current and up to ±900mA peak current. The desired DAC value can be stored in nonvolatile MOTP memory and is recalled at each power-up. The EV kit operates from an 8V to 20V DC power supply that supplies up to 1A.

<!-- image -->

The MAX9660 EV kit features a USB-to-I 2 C interface circuit using Maxim's MAXQ2000 microcontroller and MAX3394E level translator. The interface circuit provides 3.3V to the digital DVDD input from the USB power. The EV kit can also connect to a user-supplied I 2 C interface circuit for stand-alone MAX9660 operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9660 Evaluation Kit

## Digital Supply Configuration

The MAX9660 EV kit provides two options to power the MAX9660 digital supply DVDD. DVDD can operate from the 3.3V supply generated by the USB-to-I 2 C interface circuit  or  from  a  user-supplied  2.5V  to  3.6V DC power supply connected across the DIN and DGND PCB pads. See Table 1 to configure DVDD using jumper JU1.

## Stand-Alone User-Supplied I 2 C Communication

The MAX9660 EV kit can be used in stand-alone operation to interface with a user's I 2 C system without using a PC. In stand-alone operation, I 2 C communication operates from 2.5V to 3.6V. To use the MAX9660 EV kit with a user-supplied I 2 C interface, perform the following steps:

## Table 1. Digital Supply Configuration (JU1)

| SHUNT POSITION   | DVDD PIN CONNECTION   | DVDD POWER                               | I 2 C COMMUNICATION   |
|------------------|-----------------------|------------------------------------------|-----------------------|
| 1-2              | DIN PCB pad           | User-supplied DVDD range: 3.3V to 3.6V** | On-board              |
| 1-2              | DIN PCB pad           | User-supplied DVDD range: 2.5V to 3.6V   | User-supplied***      |
| 2-3*             | +3.3V bus             | On-board                                 | On-board              |

Table 2. User-Supplied I 2 C Interface

| USER-SUPPLIED SIGNAL   | SIGNAL               | EV KIT PCB PAD   |
|------------------------|----------------------|------------------|
| DVDD                   | Digital supply       | DIN              |
| SDA                    | I 2 C data           | SDA              |
| SCL                    | I 2 C clock          | SCL              |
| GND                    | Signal ground return | DGND             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 1) Disconnect the USB cable from the EV kit.
- 2) Cut open header J1 shorting traces on the PCB bottom layer.
- 3) Move jumper JU1 shunt to pins 1-2 (user-supplied digital power supply).
- 4) Connect the positive terminal of a user-supplied 2.5V to 3.6V DC power supply to the DIN PCB pad and the negative terminal to the nearby DGND PCB pad.
- 5) Remove SDA and SCL pullup resistors R11 and R12 if not needed.
- 6) Connect the user-supplied I 2 C interface signals to the EV kit PCB pads, as shown in Table 2.

## MAX9660 Evaluation Kit

Figure 3. MAX9660 EV Kit Schematic-VCOM Buffer Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9660 Evaluation Kit

Figure 4. MAX9660 EV Kit Schematic-USB-to-I 2 C Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9660 Evaluation Kit

<!-- image -->

Figure 5. MAX9660 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9660 Evaluation Kit

Figure 6. MAX9660 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9660 Evaluation Kit

Figure 7. MAX9660 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11