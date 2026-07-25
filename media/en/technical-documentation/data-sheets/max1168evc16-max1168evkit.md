<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1168 Evaluation Kit/Evaluation System

## General Description

The MAX1168 evaluation system (EV system) is a complete 8-channel, 16-bit data-acquisition system that is comprised of a MAX1168 evaluation kit (EV kit), Maxim 68HC16MODULE-DIP microcontroller (µC) module, and USBT0232.

Order the complete EV system (MAX1168EVC16) for a comprehensive evaluation of the MAX1168 using a personal computer (PC). Order the EV kit (MAX1168EVKIT) separately if the 68HC16MODULE-DIP module has been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

## MAX1168 EV System

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX1168EVKIT     |     1 | MAX1168 EV Kit                |
| 68HC16MODULE-DIP |     1 | 68HC16 µC Module              |
| USBTO232+        |     1 | USB-to-COM Port Adapter Board |

## MAX1168 EV Kit

| DESIGNATION      |   QTY | DESCRIPTION                                                       |
|------------------|-------|-------------------------------------------------------------------|
| C1-C18, C21, C22 |    20 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT |
| C19, C20         |     2 | 10µF ±20%, 16V X5R ceramic capacitors (1210) TDK C3225X5R1C106M   |
| C23              |     1 | 1µF ±20%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A105M     |
| C24-C31          |     8 | 100pF ceramic capacitors (0603) TDK C1608C0G1H101J                |
| C32-C39          |     8 | 0.22µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A224K |

- ♦ Proven PCB Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested
- ♦ EV Kit Software Supports Windows ® 98/2000/XP with RS-232/COM Port
- ♦ EV Kit Software Supports Windows 2000/XP with USB Port

Windows is a registered trademark of Microsoft Corp.

## Ordering Information

| PART         | IC PACKAGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX1168EVKIT | 24 QSOP      | User-supplied    |
| MAX1168EVC16 | 24 QSOP      | Windows software |

Note: The MAX1168 software is included with the MAX1168 EV kit, but is designed for use with the complete EV system. The EV system includes a µC module, USBT0232, and the EV kit. If the Windows software is not required, the EV kit board can be purchased by itself, without the µC module.

Note: To evaluate the MAX1068, request a free sample of the MAX1068\_CEG when ordering the MAX1168 EV kit.

## Component Lists

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| FB1, FB2      |     2 | Surface-mount ferrite beads (0603) TDK MMZ1608B601C          |
| J1            |     1 | 2 x 20 right-angle female connector Samtec SSW-120-02-S-D-RA |
| JU1           |     1 | 2-pin header                                                 |
| JU2           |     1 | 3-pin header                                                 |
| R1-R8         |     8 | 100 Ω ±5% resistors (0603)                                   |
| R9-R16        |     8 | 4.7k Ω ±5% resistors (0603)                                  |
| R17-R24       |     8 | 10 Ω ±5% resistors (0603)                                    |
| TB0           |     1 | 2-circuit terminal block                                     |
| U1            |     1 | 16-bit ADC (24-pin QSOP) Maxim MAX1168CCEG                   |
| U2            |     1 | Logic buffer (5-pin SOT23) Fairchild Semiconductor NC7SZ125  |
| U3-U10        |     8 | Op amps (5-pin SOT23) Maxim MAX4430EUK                       |
| -             |     2 | Shunts                                                       |
| -             |     1 | PCB: MAX1168 Evaluation Kit                                  |
| -             |     1 | MAX1168 EV kit software, CD-ROM                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

## MAX1168 Evaluation Kit/Evaluation System

## MAX1168 EV Kit Files

| FILE NAME    | FUNCTION                                   |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX1168.EXE  | Application program                        |
| HELPFILE.HTM | MAX1168 EV kit help file                   |
| UNINST.INI   | Uninstalls the EV kit software             |
| KIT1168.C16  | Software loaded into the 68HC16 µC         |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX1168 when contacting these component suppliers.

## Quick Start

## Recommended Equipment-USB Port PC Connection Option

- MAX1168 EV system MAX1168 EV kit 68HC16MODULE-DIP µC module
- Three DC power supplies: +8V to +20V at 0.25A +5V at 0.2A -5V at 0.2A
- 0 to 4.096V analog signal source
- A user-supplied Windows 2000/XP PC with an available USB port
- USB cable (included with the USBTO232)

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98/2000/XP operating system.

## Procedure

The MAX1168 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are complete.

- 1) Visit  the  Maxim website (www.maxim-ic.com/evkitsoftware) to download the latest version of the USBTO232 user guide. Follow the steps in the USBTO232 user guide Quick Start section and return to step 2 of this Quick Start section when finished.
- 2) Verify that jumper JU1 is ON, disabling DSP mode.
- 3) Verify  that  jumper  JU2 is connected to pins 2-3, enabling an 8-bit-wide data-transfer mode.
- 4) Carefully connect the boards by aligning the 40-pin connector of the MAX1168 EV kit with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 5) Ensure that the 68HC16MODULE-DIP module's SW1 switch is in the OFF position.
- 6) Connect the +8V to +20V power supply to the µC module's terminal block (J2), located next to the ON/OFF switch (SW1) along the top edge of the µC module. Observe the polarity marked on the board.
- 7) Connect the +5V power supply to the VDD pad (with respect to the GND pad) on the MAX1168 EV kit board.
- 8) Connect the -5V power supply to the VEE pad (with respect to the GND pad) on the MAX1168 EV kit board.
- 9) Connect the USBTO232 board to the 68HC16MODULE-DIP module if you have not done so already.
- 10) The MAX1168 EV kit software should have already been downloaded and installed in the USBTO232 Quick Start .
- 11) Start the MAX1168 EV kit software by clicking on its icon in the Start | Programs menu.
- 12) Turn on the +5V power supply, followed by the -5V power supply. Finally, turn on the +8V to +20V power supply and move the 68HC16MODULE-DIP module's slide switch (SW1) to the ON position.
- 13) Press the OK button to automatically connect and download the KIT1168.C16 file to the module.
- 14) Apply an input signal (0 to +4.096V) between AIN0 and GND. Observe the AIN0 label on the running Windows program.

## Recommended Equipment -RS-232/COM Port PC Connection Option

- MAX1168 EV system MAX1168 EV kit 68HC16MODULE-DIP µC module USBTO232
- Three DC power supplies:
- +8V to +20V at 0.25A
- +5V at 0.2A
- -5V at 0.2A

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

- 0 to 4.096V analog signal source
- A user-supplied Windows 98/2000/XP PC with an available serial (COM) port
- User-supplied 9-pin I/O extension cable (straightthrough female-to-male)

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98/2000/XP operating system.

## Procedure

The MAX1168 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are complete.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the file (if it is a .zip file).
- 2) Install  the  MAX1168 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created for them in the Windows Start | Programs menu.
- 3) Verify that jumper JU1 is ON, disabling DSP mode.
- 4) Verify  that  jumper  JU2 is connected to pins 2-3, enabling an 8-bit-wide data-transfer mode.
- 5) Carefully connect the boards by aligning the 40-pin connector of the MAX1168 EV kit with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 6) Ensure that the 68HC16MODULE-DIP module's SW1 switch is in the OFF position.
- 7) Connect the +8V to +20V power supply to the 68HC16MODULE-DIP module's terminal block (J2), located next to the ON/OFF switch (SW1) along the top edge of the 68HC16MODULE-DIP module. Observe the polarity marked on the board.
- 8) Connect the +5V power supply to the VDD pad (with respect to the GND pad) on the MAX1168 EV kit board.
- 9) Connect the -5V power supply to the VEE pad (with respect to the GND pad) on the MAX1168 EV kit board.
- 10) Connect the 9-pin serial cable from the computer's serial  port  to  the  68HC16MODULE-DIP module's DB9 connector (J3).
- 11) Turn on the +5V power supply, followed by the -5V power supply. Finally, turn on the +8V to +20V power supply and move the 68HC16MODULE-DIP module's slide switch (SW1) to the ON position.
- 12) Start the MAX1168 EV kit software by clicking on its icon in the programs section within the Windows Start | Programs menu.
- 13) Press the OK button to automatically connect and download the KIT1168.C16 file to the module.
- 14) Apply an input signal (0 to +4.096V) between AIN0 and GND. Observe the AIN0 label on the running Windows program.

<!-- image -->

## Detailed Description of Software

The evaluation software's main window shown in Figure 1 displays the voltage and code of the analog-input signals AIN0-AIN7. The software supports manual read or  automatic read operations. Separate comboboxes allow quick modifications to the MAX1168's control byte. The SPI™ serial clock frequency is adjustable from 4.19MHz to 33kHz, and the software's reference value can be changed to match the applied external reference. The provided Windows-compatible software supports SPI mode (not DSP mode) and also only supports the MAX1168 EV kit when configured in 8-bit-wide data-transfer mode. Table 1 describes all the controls on the evaluation software's main window.

## Detailed Description of Hardware

## MAX1168 EV System

The MAX1168 EV system is a complete 8-channel, 16bit data-acquisition system consisting of a MAX1168 EV kit and a Maxim 68HC16MODULE-DIP µC module. The MAX1168 EV system is used to evaluate the MAX1168 8-channel, 16-bit serial ADC. See the Quick Start section for setup and operating instructions. See Table 1 for more information on the provided Windows software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

## Table 1. Software Control Descriptions

| DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The View menu makes the COM port (virtual COM port) debug form visible                                                                                                                                                                                                                                                                                                      |
| The BlockSample menu is an EV kit software feature that allows a single channel to be sampled and stored. The data block length is selectable and the data can be saved to a file. Block sampling is limited to single-channel read modes only. SCAN[1:0] = 01 or 11 modes are not supported. For multiple-channel reads, use the Read ADC button or the AutoRead checkbox. |
| The Device menu allows the user to evaluate either the MAX1168 or MAX1068                                                                                                                                                                                                                                                                                                   |
| The Help menu allows the user to view the help file or the software's about box                                                                                                                                                                                                                                                                                             |
| The Control Byte label shows the current control byte setting in hexadecimal                                                                                                                                                                                                                                                                                                |
| The CS[2:0] combobox selects the channel below: 000 CS2 CS1 CS0 = Channel 0 001 CS2 CS1 CS0 = Channel 1 010 CS2 CS1 CS0 = Channel 2 011 CS2 CS1 CS0 = Channel 3 100 CS2 CS1 CS0 = Channel 4 101 CS2 CS1 CS0 = Channel 5 110 CS2 CS1 CS0 = Channel 6 111 CS2 CS1 CS0 = Channel 7                                                                                             |
| The SCAN[1:0] combobox selects the scan mode below: 00 SCAN1 SCAN0 = Single channel, no scan 01 SCAN1 SCAN0 = Sequentially scans channel 0 to CS[2:0] 10 SCAN1 SCAN0 = Sequentially scans channel 4 to CS[2:0]; CS[2:0] ≥ 4 11 SCAN1 SCAN0 = Scan channel CS[2:0] eight times                                                                                               |
| The SEL[1:0] combobox selects the reference mode below: 00 SEL1 SEL0 = Internal reference mode 01 SEL1 SEL0 = EV kit software does not support this mode 10 SEL1 SEL0 = EV kit software does not support this mode 11 SEL1 SEL0 = External reference mode                                                                                                                   |
| The CLK combobox selects the clock mode below: 0 EXT CLK 1 INT CLK                                                                                                                                                                                                                                                                                                          |
| The SPI SCLK Frequency combobox selections are: 02: 4.19MHz 04: 2.10MHz . . . FF: 33kHz                                                                                                                                                                                                                                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

Table 1. Software Control Descriptions (continued)

| CONTROL   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | The Set Vref button allows the user to specify the actual reference voltage. The evaluation software assumes a +4.096V reference voltage, unless otherwise specified. To override the default +4.096V software reference value, measure the actual reference voltage at the terminal block (TB0) on the MAX1168 EV kit board and enter the new reference voltage, without the volt unit. Finally, press the Set Vref button. The EV |
|           | kit software uses the value typed in the Vref field to translate the digital code to a voltage.                                                                                                                                                                                                                                                                                                                                     |
|           | Pressing the Read ADC button performs the conversion(s) specified by the control byte and reads back the result(s).                                                                                                                                                                                                                                                                                                                 |
|           | Checking the AutoRead checkbox performs the conversion(s) specified by the control byte and reads back the result(s) every 500ms. A blinking asterisk indicates AutoRead is active.                                                                                                                                                                                                                                                 |
|           | The Exit button closes the program                                                                                                                                                                                                                                                                                                                                                                                                  |

## MAX1168 EV Kit

The MAX1168 EV kit board provides a proven layout for evaluating the MAX1168 8-channel, 16-bit ADC and can be obtained separately without the 68HC16MODULEDIP µC module for use with an existing µC. The MAX1168 EV kit contains two different types of buffers. U2 is a logic buffer to limit the load capacitance that is seen by the DOUT line of the MAX1168. U3-U10 are 16bit  accurate analog buffers connected in the unity-gain configuration. U1 is powered from VDD and U3-U10 are powered from VDD and VEE. U3 is powered from the µC module (J1-7, J1-8). A terminal block (TB0) has also been provided on the MAX1168 EV kit board for evaluating external reference mode. Refer to the MAX1167/MAX1168 or MAX1067/ MAX1068 data sheets to ensure all interface timing specifications are met.

The MAX1168 and MAX1168 EV kit board support DSP and 16-bit-wide data-transfer mode. Jumpers JU1 and JU2 can be configured for these modes; however, the supplied EV kit Windows-compatible software does not support  these  two  modes.  Please  refer  to  the MAX1167/MAX1168 or MAX1067/MAX1068 data sheets for more information.

<!-- image -->

Table 2. DSP Frame Sync Receive Input (DSPR)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                |
|----------|------------------|----------------------------------------------------------------------------|
| JU1      | ON*              | DSP mode disable                                                           |
| JU1      | OFF              | DSP mode enable (the supplied Windows software does not support this mode) |

* Default configuration.

Table 3. Data Bit Transfer Select Input (DSEL)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                               |
|----------|------------------|-------------------------------------------------------------------------------------------|
| JU2      | 1-2              | 16-bit-wide data-transfer mode (the supplied Windows software does not support this mode) |
| JU2      | 2-3*             | 8-bit-wide data-transfer mode                                                             |

* Default configuration.

Caution: Do not connect an external controller to the DSEL pad while a shunt is on jumper JU2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

Figure 1. MAX1168 Evaluation Software's Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

<!-- image -->

Figure 2. MAX1168 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

Figure 3. MAX1168 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

Figure 4. MAX1168 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

Figure 5. MAX1168 EV Kit PCB Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1168 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX1168 EV Kit PCB Layout-Inner Layer 3 (VDD)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1168 Evaluation Kit/Evaluation System

Figure 7. MAX1168 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-4, 8-11

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.