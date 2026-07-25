<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1799 Evaluation System/ Evaluation Kit

## General Description

The MAX1799 evaluation system (EV system) consists of a MAX1799 evaluation kit (EV kit) and a companion Maxim CMAXQUSB board.

The MAX1799 EV kit is an assembled and tested printed circuit board (PCB) that demonstrates the MAX1799 system power supply. The IC contains five programmable LDO linear regulators and two undedicated open-drain outputs. Each regulator can be individually adjusted from +1.8V to +3.3V. The two open-drain outputs can sink up to 150mA.

The Maxim SMBus interface board (CMAXQUSB) allows an IBM-compatible PC to use its USB port to emulate an Intel  SMBus 2-wire interface. The 2-wire serial interface of  the  MAX1799  is  I 2 C  compatible.  Windows ® 98SE/2000/XP-compatible software provides a userfriendly i nterface to exercise the features of the MAX1799. The program is menu driven and offers a graphics interface with control buttons.

Order the MAX1799EVCMAXQU for complete PC-based evaluation of the MAX1799. Order the MAX1799EVKIT, if you already have an SMBus interface.

## Component Lists MAX1799 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1-C4         |     4 | 4.7µF, 10V X5R ceramic capacitors Taiyo Yuden LMK316BJ475ML or Murata GRM42-6X5R475K10 |
| C5-C8         |     4 | 2.2µF, 16V X5R ceramic capacitors Taiyo Yuden EMK316BJ225ML or Murata GRM42-6X7R225K16 |
| C9            |     1 | 0.01µF, 16V X7R ceramic capacitor                                                      |
| J1            |     1 | 2 X 10 right-angle female receptacle                                                   |
| JU1           |     1 | 3-pin header                                                                           |
| JU2, JU3      |     2 | 2-pin headers                                                                          |
| JU4, JU5      |     0 | Not installed                                                                          |
| LED1, LED2    |     2 | Light-emitting diodes (green)                                                          |
| R1            |     1 | 100k Ω ± 5% resistor                                                                   |
| R2            |     1 | 10k Ω ± 5% resistor                                                                    |
| R3, R4        |     2 | 470 Ω ± 5% resistors                                                                   |
| SW1, SW2      |     2 | Momentary switches (normally open)                                                     |
| U1            |     1 | MAX1799EUP                                                                             |

## Features

- ♦ Five Low-Noise LDO Linear Regulators One 300mA Regulator

Four 150mA Regulators

- ♦ Very Low Dropout

100mV (max) at 2/3 Rated Current

- ♦ Programmable +1.8V to +3.3V (in 32 Steps) Output Voltages
- ♦ I 2 C/SMBus Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Includes Windows 98SE/2000/XP-Compatible Software and Demo PC Board
- ♦ EV System Includes USB Connectivity

## Ordering Information

| PART            | SMBus INTERFACE TYPE   | IC PACKAGE   |
|-----------------|------------------------|--------------|
| MAX1799EVKIT    | Not Included           | 20 TSSOP-EP* |
| MAX1799EVCMAXQU | CMAXQUSB               | 20 TSSOP-EP  |

The MAX1799 EV kit software is provided with MAX1799EVKIT. However, the CMAXQUSB board is required to interface the EV kit to the computer when using the software.

## MAX1799 EV System

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX1799EVKIT |     1 | MAX1799 EV kit         |
| CMAXQUSB+    |     1 | Serial-interface board |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE         |
|-----------------------|--------------|-----------------|
| Murata Mfg. Co., Ltd. | 814-237-1431 | www.murata.com  |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com |

Note: Indicate that you are using the MAX1799 when contacting these component suppliers.

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1799 Evaluation System/ Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- DC power supply capable of supplying +2.5V to +5.5V at 1A to power the MAX1799 board
- MAX1799 EV system MAX1799 EV kit Maxim CMAXQUSB interface board (USB cabled included)
- One voltmeter
- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

The MAX1799 EV kit is fully assembled and tested. Caution: Do not turn on the power until all connections are made.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 1799Rxx.ZIP.
- 2) Install  the  MAX1799 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB board, ensure that the shunt of JU1 is in the 3.3V position.
- 4) Carefully connect the boards by aligning the 20-pin connector of the MAX1799 EV kit with the 20-pin header of the CMAXQUSB interface board. Gently press them together.
- 5) Make sure that JU1 (AS) is set to the 1-2 position.
- 6) Connect a +2.5VDC to +5.5VDC power supply to the pads labeled VIN1 and GND on the MAX1799 board.
- 7) Connect a voltmeter to the pads labeled OUT1 and GND.
- 8) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message. If you do not see a window that is similar to the one described above after 30 seconds, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the

USB device driver on Windows 98SE/2000/XP. Refer to  the  TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.

- 9) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX1799 (or  the  directory  chosen during installation) using the Browse button.
- 10) Turn on the DC power supply.
- 11) Start  the  MAX1799 EV kit software by opening its icon in the Start menu. The GUI main window appears, as shown in Figure 1.
- 12) Turn the EV kit on by pressing SW1.
- 13) Observe as the program automatically detects the address of the MAX1799 and starts the main program.
- 14) Verify that the voltmeter reads approximately 2.97V.
- 15) Locate the Regulator 1 BUFFER box and select 1.80V by scrolling up.
- 16) Click the Update All DACs button and verify that the voltmeter reads approximately 1.80V.

## Detailed Software Description

The software provides an easy-to-use, point-and-click method to exercise all the MAX1799 features. The voltages of the regulators can easily be adjusted, as well as toggled on or off. The driver outputs can also be toggled on or off.

Note: At startup, the program forces the MAX1799 into the power-on reset (POR) state.

## Main Display

The voltages for each regulator are contained in list boxes. To make changes to the voltages, use the mouse or the tab and arrow keys to navigate until the selection is highlighted. The highlighted voltage is automatically loaded into the buffer on the MAX1799. Click on the Update All DACs button to send the buffer contents to the DACs. All five regulators are updated simultaneously when this button is selected.

Each regulator can be enabled or disabled by checking or unchecking the appropriate checkbox.

Note: Disabling regulator 1 shuts down the MAX1799. Once disabled, press SW1 to turn the MAX1799 back on.

The two MAX1799 driver outputs (DR1 and DR2) are controlled by checkboxes (DR1 Low and DR2 Low). Checking the checkbox pulls the pin low. Unchecking it places the pin in a high-impedance state.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1799 Evaluation System/ Evaluation Kit

The device-present checking feature checks for the presence of the IC two times per second. If the device is  not detected, a warning message will appear at the top of the main display, and most of the buttons and checkboxes will be disabled. The buttons and checkboxes are disabled to prevent the sending of SMBus commands that will result in the main display showing the wrong contents of the MAX1799's registers. The device-present checking feature can be disabled by unchecking the Device-Present Checking checkbox.

The RESET button will set the MAX1799 and software to the POR state. If in doubt, click the RESET button.

## Simple SMBus Commands

There are two methods for communicating with the MAX1799: through either the main display or the simple SMBus commands available by pressing the MAXSMBUS button. A display will pop up that allows SMBus protocols, such as Read Byte and Write Byte to be individually executed. When using the simple SMBus commands, uncheck Device-Present Checking to prevent any errors from occurring.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly 8 digits.

Note: In places where the slave address asks for an 8bit  value,  it  must  be  the  7-bit  slave  address  of  the MAX1799 as determined by AS with the last bit (LSB) always set to zero as shown in Table 1.

<!-- image -->

## Table 1. JU1 Shunt Settings for SMBus Address

| JU1 SHUNT LOCATION   | MAX1799 ADDRESS   | MAX1799 ADDRESS   |
|----------------------|-------------------|-------------------|
|                      | BINARY            | HEXADECIMAL       |
| 1-2*                 | 0111 1110         | 7E                |
| 2-3                  | 1001 1110         | 9E                |

*Default position.

## Detailed Hardware Description Jumper and Switch Settings

Jumper JU1 sets the MAX1799 slave address (Table 1). Jumpers JU2 and JU3 connect LED1 and LED2 to driver outputs DR1 and DR2. The LEDs are also connected to VIN through pullup resistors. Pulling the driver output pins low, by checking the appropriate checkboxes on the main display, turns the LEDs on.

Jumpers JU4 and JU5 connect VIN4/5 and VIN2/3, respectively, to VIN1. This allows all three inputs to be powered from a single power supply. VIN2/3 and VIN4/5 can be connected to different power supplies by cutting two PCB traces. For VIN4/5, cut the trace that shorts the two pins of JU4. For VIN2/3, cut the trace that shorts the two pins of JU5. Connect the power supply for VIN2/3 to the pad labeled VIN2/3. Connect the power supply for VIN4/5 to the pad labeled VIN4/5.

Press switch SW1 to turn the MAX1799 EV kit on. Press SW2 or uncheck the OUT1 Enabled checkbox to turn the EV kit off.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1799 Evaluation System/ Evaluation Kit

Figure 1. Main Display for MAX1799 EV Kit

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1799 Evaluation System/ Evaluation Kit

<!-- image -->

Figure 2. MAX1799 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX1799 Evaluation System/ Evaluation Kit

Figure 3. MAX1799 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1799 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1799 Evaluation System/ Evaluation Kit

Figure 5. MAX1799 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-7

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7