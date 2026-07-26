<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9729 Evaluation Kit/Evaluation System

## General Description

The MAX9729 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that evaluates the MAX9729 stereo DirectDrive™ headphone amplifier with BassMax and volume control. The MAX9729 consists of a Class AB amplifier, a 3:1 stereo input multiplexer/mixer, comprehensive click-and-pop suppression circuitry, and a 2-wire interface. (The EV kit is designed to operate from a 1.8V to 3.6V DC power supply and delivers 52mW (at 3V) into a 32 Ω stereo headphone.) The EV kit includes a 3.5mm stereo headphone jack and an I 2 C/SMBus™-compatible interface that allows for software control of the BassMax (bass boost), shutdown, beep level, and output volume-setting features.

The MAX9729 evaluation system (EV system) consists of  the  MAX9729 EV kit and the Maxim CMAXQUSB command module. Windows ® 98/2000/XP-compatible software is also available for use with the MAX9729 EV system and can be downloaded from Maxim's website (www.maxim-ic.com/evkitsoftware).

The Maxim CMAXQUSB command module provides the I 2 C/SMBus interface and is connected to the computer through the universal serial bus (USB) port. The MAX9729 EV kit software provides a graphical user interface (GUI) for exercising the MAX9729 features.

## Features

- ♦ 1.8V to 3.6V Single-Supply Operation
- ♦ 8 Programmable Maximum Gain Settings (+3.5dB to +26dB)
- ♦ 3:1 Stereo Input Multiplexer/Mixer
- ♦ Automatic Volume Ramping During Mode Transitions
- ♦ Industry-Leading Click-and-Pop Suppression
- ♦ DirectDrive Headphone Amplifier
- ♦ Integrated 32-Level Volume Control
- ♦ Hardware/Software Shutdown Control
- ♦ Software-Enabled Bass Boost (BassMax)
- ♦ I 2 C/SMBus-Compatible Interface
- ♦ All Components Less than 1mm in Height
- ♦ Fully Assembled and Tested

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp.

## Ordering Information

| PART              | TEMP RANGE    | IC PACKAGE                           | COMMAND MODULE   |
|-------------------|---------------|--------------------------------------|------------------|
| MAX9729EVKIT +    | 0°C to +70°C* | 28 Thin QFN-EP † (5mm x 5mm x 0.8mm) | Not included     |
| MAX9729EVCMAXQU + | 0°C to +70°C* | 28 Thin QFN-EP † (5mm x 5mm x 0.8mm) | CMAXQUSB+        |

Note: The Maxim CMAXQUSB+ command module is required when using the MAX9729 EV kit software.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C14           |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K TDK C1608X7R1C104K |
| J1            |     1 | 2 x 10 right-angle receptacle                                                         |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                         |
| OUT           |     1 | 3.5mm stereo headphone jack                                                           |
| R1, R3        |     2 | 47k Ω ±5% resistors (0603)                                                            |
| R2, R4        |     2 | 22k Ω ±5% resistors (0603)                                                            |

| DESIGNATION        |   QTY | DESCRIPTION                                                                                     |
|--------------------|-------|-------------------------------------------------------------------------------------------------|
| C1-C5, C8, C10-C13 |    10 | 1.0µF ±10%, 10V X7R ceramic capacitors (0603) Taiyo Yuden LMK107BJ105KA Murata GRM188R71A105K   |
| C6, C7             |     2 | 0.068µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C683K Taiyo Yuden EMK107BJ683KA |
| C9                 |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ106KD Murata GRM219R60J106K    |

## MAX9729 Evaluation Kit/Evaluation System

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                         |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------|
| R5, R6        |     0 | Not installed, resistors (0603)                                                                                     |
| SCL, SDA      |     0 | Not installed, test points                                                                                          |
| U1            |     1 | Stereo headphone amplifier with BassMax, volume control, and input mux MAX9729ETI+ (28-pin TQFN, 5mm x 5mm x 0.8mm) |
| -             |     3 | Shunts                                                                                                              |
| -             |     1 | PCB: MAX9729 Evaluation Kit+                                                                                        |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9729 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 6V DC, 0.5A power supply (VDD, set to 1.8V)
- MAX9729 EV system MAX9729 EV kit Maxim CMAXQUSB command module (USB cable included)
- One pair of stereo headphones (16 Ω or 32 Ω )
- One to three audio sources
- A user-supplied Windows 98/2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 98/ 2000/XP operating system.

## Procedure

The MAX9729 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 9729Rxx.ZIP.
- 2) Install  the  MAX9729 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB command module, ensure the shunt of JU1 is in the (3.3V) position.
- 4) To enable the MAX9729 outputs, ensure that a shunt is installed between pins 1-2 on JU2. Also verify that a shunt is installed between pins 2-3 on JU1.
- 5) Carefully connect the boards by aligning the 20-pin connector of the MAX9729 EV kit with the 20-pin header on the CMAXQUSB interface board. Gently press them together.
- 6) Connect the headphones to the stereo headphone jack (OUT) provided on the MAX9729 EV kit.
- 7) Connect the right channel of one of the stereo audio sources to INR1.
- 8) Connect the left channel of the stereo audio source to INL1.
- 9) Connect the ground of the stereo audio source to SGND.
- 10) Connect the positive terminal of the DC power supply to the VDD pad and the ground terminal to the GND pad next to VDD.
- 11) Connect the USB cable from the computer's type-A USB port to the CMAXQUSB board's type-B USB port.
- 12) Enable the stereo audio source.
- 13) Enable the power supply.
- 14) Start the MAX9729 program by opening its icon in the Start menu.
- 15) Normal device operation is verified when CMAXQUSB HW: Connected. MAX9729 connected is displayed at the bottom left of the MAX9729 EV kit main window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9729 Evaluation Kit/Evaluation System

## Detailed Description of Software

## User-Interface Panel

The program's main window (Figure 1) is operated using a mouse, or a combination of the tab and arrow keys. The MAX9729 EV kit software provides controls for  software-configurable features: Input Select , Maximum Gain , Volume Setting , Beep Level , Bass Boost , and Shutdown .  Changes to the controls result in  a  write  operation  that  updates  the  command and enable registers of the MAX9729. A Device Search button is located at the bottom of the program's main window to manually detect a change in slave address. A status box is also provided at the bottom of the program's main window and is used to verify command module and device connectivity.

## Input Select

The MAX9729 can accept up to three single-ended stereo input sources. Select the desired input from the Input Select combo box. Selecting IN\_1+IN\_2+IN\_3 mixes all three input pairs with no attenuation. Reduce the gain in this mode to avoid clipping at the output. The default input selected is INL1/INR1 .

## Maximum Gain

The MAX9729 can be configured for eight different maximum output gain (AV\_MAX) settings, ranging from +3.5dB to +26dB. Select the desired maximum gain from the Max Gain drop-down list. The appropriate code is then written to the enable register. The default setting for maximum gain is +6dB.

<!-- image -->

Figure 1. MAX9729 EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9729 Evaluation Kit/Evaluation System

## Output Volume Setting and Overall Gain

The MAX9729 amplifier can be configured for eight different maximum output gain (AV) settings (see the Maximum Gain section) and is attenuated by writing the appropriate code to the command register. For output volume setting controls, the overall gain is attenuated by dragging the trackbar's slider to the desired attenuation level (Figure 2). All attenuation-level changes are reflected in the Overall Gain window, where the overall gain is displayed in decibels. There are 32 possible attenuation levels, with 0dB attenuation resulting in maximum output gain, and MUTE resulting in minimum output gain. Refer to the MAX9729 IC data sheet (Table 5) for a list of the 32 possible attenuation levels for each individual maximum gain setting. The default setting for overall gain is -10dB.

## Beep Level

The MAX9729 offers eight different beep levels. Select the desired level from the Beep Level combo box. The default beep level setting is -56dBV, referred to a 3V peak-to-peak input signal.

## Bass Boost Control

The MAX9729 bass boost feature is enabled by checking the Bass Boost checkbox. By enabling bass boost, the amplifier's low-frequency gain is increased, compensating for the headphone's poor bass response. Refer to the MAX9729 IC data sheet for more details on the bass boost feature.

Clipping can occur if the bass frequency gain is too high. Consider the dynamic range of the system when adding bass boost. Refer to the Output Dynamic Range section of the MAX9729 IC data sheet for more details.

Figure 2. Output Volume Setting Controls

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9729 Evaluation Kit/Evaluation System

## Digital Fade-In/Fade-Out Mechanism

The digital fade-in/fade-out mechanism performs a smooth volume adjustment upon receiving one of the following events: software shutdown activation/deactivation, external shutdown activation/deactivation, or new inputsource selection programming. Upon receiving one of these events, the volume will be smoothly adjusted according to a constant-slope ramp-up or ramp-down.

## Software Shutdown Control

The MAX9729 is placed in a low-power shutdown mode by checking the Shutdown checkbox. When in shutdown, the I 2 C/SMBus interface is active, allowing commands to be sent to the MAX9729 device.

## Simple I 2 C/SMBus Commands

There are two methods for communicating with the MAX9729: through the normal user-interface panel (Figure 1) or through the SMBus commands available by selecting the Interface Diagnostic Window menu item from the Action pulldown menu. The Maxim Command Module Interface window pops up and includes a 2wire interface tab that allows for execution of the SMBusSendByte() and SMBusQuick() commands.

The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 3 for an illustration of this tool.

<!-- image -->

Figure 3. Interface Diagnostic Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9729 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

The MAX9729 EV system (MAX9729EVCMAXQU+) consists of the MAX9729 EV kit (MAX9729EVKIT+) and the Maxim CMAXQUSB+ command module. The EV kit evaluates the MAX9729 DirectDrive stereo headphone amplifier and the CMAXQUSB provides the I 2 C/SMBuscompatible interface for software control of the MAX9729's bass boost, shutdown, beep level, and output volume-setting features.

The EV kit is designed to operate from a 1.8V to 3.6V DC power supply and is driven by a stereo audio source. The 3:1 input multiplexer allows the selection between three audio input sources. The outputs are provided at OUTR and OUTL, as well as the 3.5mm stereo headphone jack (OUT).

The output of the MAX9729 headphone amplifier is designed to deliver 52mW into a 32 Ω stereo load at 3V. As configured, the EV kit provides a bass-boosted frequency response (4dB, fc = 100Hz), provided bass boost is enabled.

## Beep Enable (BEEP\_EN)

The MAX9729's beep enable function enables/disables the BEEP signal's path to the output through jumper JU1 (Table 1). When the BEEP signal path is enabled, the audio signal will be set to MUTE independent of the volume position.

Table 1. Jumper JU1 Functions

| SHUNT POSITION   | BEEP_EN PIN      | BEEP FUNCTION   |
|------------------|------------------|-----------------|
| 1-2              | Connected to VDD | Enabled         |
| 2-3*             | Connected to GND | Disabled        |

## Bass Boost Configuration

The MAX9729 EV kit includes circuitry to increase the low-frequency (bass) response. As configured, the EV kit  provides  an  4dB (ABOOST) bass-boosted frequency response with a 100Hz cutoff frequency (fC). The bass response can be adjusted by changing R1-R4, C6, and C7. Refer to the BassMax Gain Setting Components section in the MAX9729 IC data sheet for details on component selection.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Hardware Shutdown Control

The MAX9729 can also be placed in a low-power shutdown mode through jumper JU2 (Table 2). While in shutdown, the amplifier is disabled, the output resistance is set to 20k Ω ,  and  the  I 2 C/SMBus  interface remains active, allowing the command module to write to the MAX9729 command register.

Table 2. Jumper JU2 Functions

| SHUNT POSITION   | SHDN PIN         | MAX9729 OUTPUT   |
|------------------|------------------|------------------|
| 1-2*             | Connected to VDD | Enabled          |
| 2-3              | Connected to GND | Disabled         |

## I 2 C Slave Address Selection

The MAX9729 is programmable to one of two I 2 C slave addresses through jumper JU3 (Table 3). The address is  defined  as  the  7  most  significant  bits  (MSBs),  followed by the read/write bit.

Table 3. Jumper JU3 Functions

| SHUNT POSITION   | ADD PIN          | ADDRESS   |
|------------------|------------------|-----------|
| 1-2              | Connected to VDD | 0xA2      |
| 2-3*             | Connected to GND | 0xA0      |

*Default position.

## MAX9729 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX9729 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9729 Evaluation Kit/Evaluation System

Figure 5. MAX9729 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 6. MAX9729 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9729 Evaluation Kit/Evaluation System

Figure 7. MAX9729 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 8. MAX9729 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9