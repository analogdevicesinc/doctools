<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9726 Evaluation Kit/Evaluation System

## General Description

The MAX9726 evaluation system (MAX9726EVCMAXQU) consists  of  the  MAX9726  evaluation  kit  (EV  kit) and  the  Maxim  CMAXQUSB  command  module. Windows ® 98/2000/XP-compatible software is also available for use with the MAX9726EVCMAXQU system and  can  be  downloaded  from  Maxim's  website (www.maxim-ic.com/evkitsoftware).

The MAX9726 evaluation kit is a fully assembled and tested PCB that evaluates the MAX9726 stereo DirectDrive™ headphone amplifier. The MAX9726 consists  of  two  Class  AB  amplifiers  designed  to  operate from a 2.7V to 5.5VDC power supply and deliver 100mW into a 32 Ω stereo headphone. The EV kit includes a 3.5mm stereo headphone jack and an I 2 C/SMBus™-compatible interface that allows for software control of the BassMax (bass-boost), shutdown, and output volume setting features.

The Maxim CMAXQUSB command module provides the I 2 C/SMBus interface and is connected to the computer through the universal serial bus (USB) port. The MAX9726 EV kit software provides a graphical user interface (GUI) for exercising the MAX9726 features.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1-C5, C8, C9 |     7 | 1µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K Taiyo Yuden LMK107BJ105KA   |
| C6, C7        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K Taiyo Yuden EMK107BJ104KA |
| C10           |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J106M                            |
| J1            |     1 | 3.5mm stereo jack                                                                          |
| J2            |     1 | 2 x 10 right-angle receptacle                                                              |

Windows is a registered trademark of Microsoft Corp. SMBus is a trademark of Intel Corp.

## Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ 100mW DirectDrive Headphone Amplifier
- ♦ Integrated 64-Level Volume Control
- ♦ Hardware/Software Shutdown Control
- ♦ Software Enabled BassMax (Bass-Boost)
- ♦ I 2 C/SMBus-Compatible Interface
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE          | IC PACKAGE          | COMMAND MODULE              |
|--------------|---------------------|---------------------|-----------------------------|
| 0°C to +70°C |                     | 20 TQFN (4mm x 4mm) | MAX9726EVKIT + Not included |
| 0°C to +70°C | 20 TQFN (4mm x 4mm) |                     | MAX9726EVCMAXQU CMAXQUSB    |

Note: The Maxim CMAXQUSB command module is required when using the MAX9726 EV kit software.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                           |
|---------------|-------|---------------------------------------|
| JU1           |     1 | 2-pin header                          |
| R1, R3        |     2 | 47k Ω ±5% resistors (0603)            |
| R2, R4        |     2 | 22k Ω ±5% resistors (0603)            |
| R5, R6        |     0 | Not installed, resistors (0603)       |
| R7-R10        |     4 | 10k Ω ±1% resistors (0603)            |
| R11           |     1 | 100k Ω ±5% resistor (0603)            |
| TP1, TP2      |     2 | Miniature test points                 |
| U1            |     1 | MAX9726AETP+ (20-pin TQFN, 4mm x 4mm) |
| -             |     1 | Shunt                                 |
| -             |     1 | MAX9726EVKIT+ PCB                     |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Taiyo Yuden | 408-573-4150 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9726 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9726 Evaluation Kit/Evaluation System

## Quick Start

## Recommended Equipment

- Computer running Windows 98/2000/XP
- Available USB port
- 6V/0.5ADC power supply (VDD)
- One pair of stereo headphones (16 Ω or 32 Ω )
- Stereo audio source

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98/2000/XP operating system.

## Procedure

The MAX9726 EV kit is fully assembled and tested. Follow these steps to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) On the CMAXQUSB command module, ensure that the shunt on jumper JU1 is in the 3.3V position.
- 2) To enable the MAX9726 outputs, ensure that a shunt is not installed on jumper JU1.
- 3) Carefully connect the boards by aligning the 20-pin connector of the MAX9726 EV kit with the 20-pin header on the CMAXQUSB interface board. Gently press them together.
- 4) Connect the headphones to the stereo headphone jack (J1) provided on the MAX9726 EV kit.
- 5) Connect the right channel of the stereo audio source to INR.
- 6) Connect the left channel of the stereo audio source to INL.
- 7) Connect the positive terminal of the DC power supply to the VDD pad and the ground terminal to the GND pad next to VDD.
- 8) Visit  the  Maxim website (www.maxim-ic.com/evkitsoftware) to download the most recent version of the EV kit software, 9726xx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 9) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The  program files are copied and icons are created in the Windows Start | Programs menu.
- 10) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is con-

nected to the PC. If you don't see a window that is similar to the one described above after 30 seconds, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install  the  USB  device driver on Windows 2000/XP. Refer to the TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.

- 11) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the Best Driver for your Device option. Specify the location of the device driver to be C:\Program Files\MAX9726 (default installation directory) using the Browse button.
- 12) Turn on the power supply and set it to +5V.
- 13) Enable the stereo audio source.
- 14) Start the MAX9726 program by opening its icon in the Start | Programs menu.
- 15) Normal device operation is verified when'CMAXQUSB HW: Connected. MAX9726 device connected' is displayed at the bottom left of the MAX9726 EV kit window.

## Detailed Description of Software

## User-Interface Panel

The program's main window (see Figure 1) is operated by using a mouse or a combination of the Tab and Arrow keys. The MAX9726 EV kit software provides controls  for  software-configurable features: Shutdown ,

BassMax , and output Volume Setting . Changes to the controls result in a write operation that updates the command register of the MAX9726. All changes to the 8-bit  command register are also reflected on-screen under the B7 to B0 labels. A status box is also provided at the bottom of the program's main window and is used to verify command module and device connectivity, as well as confirm write operations.

## Software Shutdown Control

The MAX9726 is placed in a low-power shutdown mode by checking the Shutdown checkbox. The shutdown feature can also be toggled by clicking the B7 label, bit 7 of the MAX9726 command register. When in shutdown, the I 2 C/SMBus interface is active, allowing commands to be sent to the MAX9726 device.

## BassMax Control

The MAX9726 BassMax feature is enabled by checking the BassMax checkbox. This feature can also be toggled by clicking the B6 label, bit 6 of the MAX9726 command register. By enabling BassMax, the amplifier's

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9726 Evaluation Kit/Evaluation System

Figure 1. MAX9726 EV Kit Software Main Window

<!-- image -->

low-frequency gain is increased, compensating for the headphone's poor bass response. Refer to the MAX9726 IC data sheet for more details on the BassMax feature.

## Output Volume Setting

The MAX9726 amplifier is configured for a maximum output gain (AV) of 0dB and is attenuated by writing the appropriate code to the command register, bits [5:0]. The program provides two controls (Figure 2) for adjusting the output volume of the amplifier with 64 possible attenuation levels (ATTENdB\_VOL). With 0dB resulting in maximum output gain (AV-0dB) and MUTE resulting in minimum output gain (AV-MUTE). The first method for adjusting the output volume involves selecting the desired attenuation level from the Volume Setting combo box. The second method involves dragging the trackbar's slider to the desired attenuation level. All attenuation level changes are reflected in the Volume Setting combo box, on the trackbar, and under the B5 to B0 labels. Refer to the MAX9726 IC data sheet for a list of the 64 possible attenuation levels.

<!-- image -->

## Simple I 2 C/SMBus Commands

There are two methods for communicating with the MAX9726: through the normal user-interface panel (Figure 1) or through the SMBus commands available by selecting the Interface Diagnostic Window item from the Action pulldown menu. The Maxim Command Module Interface window pops up and includes a 2-wire interface tab that allows for execution of the SMBusSendByte() and SMBusQuick() commands.

The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 3 for an illustration of this tool.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9726 Evaluation Kit/Evaluation System

Figure 2. Output Volume Setting Controls

<!-- image -->

## Detailed Description of Hardware

The MAX9726 evaluation system consists of the MAX9726 EV kit and the Maxim CMAXQUSB command module. The EV kit evaluates the MAX9726 DirectDrive stereo headphone amplifier and the CMAXQUSB provides the I 2 C/SMBus-compatible interface for software control of the MAX9726's BassMax (bass-boost), shutdown, and output volume setting features.

The EV kit is powered by a 2.7V to 5.5VDC power supply and is driven by a stereo audio source. The output of  the  audio  source  is  connected between GND and the INR (input right channel) and INL (input left channel) input pads. The outputs are provided at OUTR and OUTL, as well as at the stereo headphone jack, J1.

The output of the MAX9726 headphone amplifier is designed to deliver 100mW into a 32 Ω load and features low 0.03% THD+N. As configured, the EV kit provides a bass-boosted frequency response (8.8dB, fC = 72Hz) and a 0dB max output gain, provided that BassMax is enabled.

## Hardware Shutdown Control

The MAX9726 can also be placed in a low-power shutdown mode through jumper JU1 (see Table 1). While in shutdown, the amplifiers are disabled, the output resistance is set to 50k Ω ,  and  the  I 2 C/SMBus  interface remains active, allowing the command module to write to the MAX9726 command register.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION          | SHDN PIN                     | MAX9726 OUTPUT   |
|-------------------------|------------------------------|------------------|
| Not installed (default) | Connected to VDD through R11 | Enabled          |
| Installed               | Connected to GND             | Disabled         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9726 Evaluation Kit/Evaluation System

Figure 3. Interface Diagnostic Window

<!-- image -->

## Maximum Output Gain

With BassMax disabled, the maximum gain (AV) of the MAX9726 amplifier is set to 0dB. To configure the maximum output gain, adjust resistors R7 and R8 (left channel) and R9 and R10 (right channel):

<!-- formula-not-decoded -->

## BassMax Configuration

The MAX9726 EV kit includes circuitry to increase the low-frequency (bass) response. As configured, the EV

<!-- image -->

kit provides an 8.8dB (ABOOST) bass-boosted frequency response with a 72Hz cutoff frequency (fC). The bass response can be adjusted by changing R1-R4, C6, and C7. Refer to the Gain-Setting Components section in the MAX9726 IC data sheet for details on component selection.

## User-Supplied I 2 C Interface

To use the MAX9726 EV kit with a user-supplied I 2 C interface, install  10k Ω resistors on pads R5 and R6. Connect the SDA, SCL, and GND lines from the I 2 C interface to the corresponding pads on the MAX9726 EV kit board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9726 Evaluation Kit/Evaluation System

Figure 4. MAX9726 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Boblet

## MAX9726 Evaluation Kit/Evaluation System

<!-- image -->

Figure 5. MAX9726 EV Kit Component Placement GuideComponent Side

Figure 6. MAX9726 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 7. MAX9726 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7