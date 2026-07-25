<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9507 Evaluation Kit/Evaluation System

## General Description

The MAX9507 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that  evaluates the MAX9507 DirectDrive TM video filter amplifier.  The  MAX9507 amplifies standard-definition video signals and sets the video black level near ground while consuming minimal power. The EV kit operates from a 1.7V to 2.625V single power supply and accepts an input video signal of up to 1VP-P. The EV kit includes an I 2 C/SMBus™-compatible interface, which provides software control of the video filter, analog switches, load detection, and other functions.

The MAX9507 evaluation system (EV system) consists of the MAX9507 EV kit and the Maxim CMAXQUSB+ command module. A Windows ® 98/2000/XP-compatible software program is also available for use with the EV system and can be downloaded from Maxim's website (www.maxim-ic.com/evkitsoftware).

The Maxim CMAXQUSB+ command module provides the I 2 C/SMBus interface and is connected to the computer through the universal serial bus (USB) port. The MAX9507 EV kit software provides a graphical user interface (GUI) for exercising the MAX9507 features.

Windows is a registered trademark of Microsoft Corp. SMBus is a trademark of Intel Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG |
| C2, C5        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K TDK C1608X7R1C104K    |
| C3, C4        |     2 | 1µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R61A105K TDK C1608X7R1A105K      |
| J1            |     1 | 2 x 10 right-angle receptacle                                                             |
| JU1           |     1 | 5-pin header                                                                              |
| JU2           |     1 | 3-pin header                                                                              |
| R1            |     1 | 100 Ω ±1% resistor (0603)                                                                 |

## Features

- ♦ Single 1.7V to 2.625V Power-Supply Operation
- ♦ Video Load Detection
- ♦ DC-Coupled Input with Option for AC-Coupling
- ♦ DC-Coupled Output
- ♦ Video Output Black Level Set Near Ground
- ♦ Selectable Reconstruction Filter with ±1dB Passband to 7.3MHz and 48dB Attenuation at 27MHz
- ♦ Internal Fixed Gain of 8V/V
- ♦ Dual SPST Analog Switches
- ♦ I 2 C/SMBus-Compatible Interface
- ♦ Fully Assembled and Tested

## Ordering Information

| PART              | TEMP RANGE    | IC PACKAGE        | COMMAND MODULE   |
|-------------------|---------------|-------------------|------------------|
| MAX9507EVKIT +    | 0°C to +70°C* | 16 TQFN (3mmx3mm) | Not included     |
| MAX9507EVCMAXQU + | 0°C to +70°C* | 16 TQFN (3mmx3mm) | CMAXQUSB+        |

Note: The Maxim CMAXQUSB+ command module is required when using the MAX9507 EV kit software.

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                          |
|----------------------|-------|------------------------------------------------------|
| R2                   |     1 | 226 Ω ±1% resistor (0603)                            |
| R3, R5               |     2 | 75 Ω ±1% resistors (0603)                            |
| R4                   |     1 | 0 Ω resistor (0603)                                  |
| R6                   |     1 | 15k Ω ±5% resistor (0603)                            |
| R7-R12               |     0 | Not installed, resistors (0603)                      |
| U1                   |     1 | MAX9507ATE+ (16-pin TQFN, 3mm x 3mm) (Top Mark: AFH) |
| C1P, VSS             |     0 | Not installed, test points                           |
| COM1, COM2, NO1, NO2 |     4 | BNC 50 Ω PCB vertical-mount connectors               |
| VIDIN, VIDOUT        |     2 | BNC 75 Ω PCB vertical-mount connectors               |
| -                    |     2 | Shunts                                               |
| -                    |     1 | PCB: MAX9507 Evaluation Kit+                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9507 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9507 when contacting these component suppliers.

## Recommended Equipment

- 1.7V to 2.625V, 500mA DC power supply (VDD)
- Video signal generator
- Video measurement equipment (e.g., Tektronix VM-700T)
- EV system MAX9507 EV kit Maxim CMAXQUSB+ board USB cable (included with CMAXQUSB+)
- A user-supplied Windows 98/2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98/2000/XP operating system.

## Quick Start

The MAX9507 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX9507 EV kit with the 20-pin header on the CMAXQUSB+ interface board. Gently press them together.
- 2) Connect the power-supply ground to the GND pad on the EV kit.
- 3) Connect the 1.7V to 2.625V supply to the VDD pad on the EV kit.
- 4) Connect the output of the video signal generator to the VIDIN BNC connector on the EV kit. The video signal must be biased such that the sync tip is at ground and sets the full-scale video signal to 0.25VP-P.
- 5) Connect the VIDOUT BNC connector on the EV kit to the input of the video measurement equipment.
- 6) Set the video signal generator for the desired video input signal. This signal must contain sync information.
- 7) Verify that jumper JU1 on the CMAXQUSB+ board is set to 2.5V or 3.3V. Verify both switches of SW1 are ON.
- 8) Connect the USB cable from the computer's type-A USB port to the CMAXQUSB+ board's type-B USB port.
- 9) Download the MAX9507 EV kit software from www.maxim-ic.com/evkitsoftware and install it on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 10) Turn on the power supply and enable the video signal generator.
- 11) Start the MAX9507 program by opening its icon in the Start menu.
- 12) Normal device operation is verified when CMAXQUSB HW: Connected. MAX9507 device connected is displayed at the bottom-left side of the MAX9507 EV kit window, as shown in Figure 1.

## Detailed Description of Software

## User-Interface Panel

In  the  program's main window (Figure 1), a mouse is used to toggle the checkboxes that control the various features of the MAX9507. The MAX9507 EV kit software permits the control of software-configurable features: switches, sync-tip clamp, filter, signal path, charge pump, load change flag enable, automatic signal path enable, and automatic charge pump enable. Changes to the controls result in write operations that update the configuration and video load detect registers of the MAX9507. All changes to the 8-bit command registers are reflected on screen under the B7-B0 labels; the register contents are also read and displayed in hexadecimal format.

The EV kit software gives the user the option to automatically read both registers, or manually read each register  individually by toggling the Enable AutoPolling checkbox. With AutoPolling disabled, the user must manually click the Read button located next to the hex register contents in order to send a read command. A memo box at the bottom of the program's main window displays descriptions of the various features provided. Place the pointer over the bit names for a functional description. The status bar at the bottom of the program's main window is used to verify command module and device connectivity.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9507 Evaluation Kit/Evaluation System

Figure 1. MAX9507 EV Kit Software Main Window

<!-- image -->

## Switch Enables (SWEN2, SWEN1)

The dual single-pole/single-throw (SPST) analog switches on the MAX9507 can be enabled individually by checking the appropriate SWEN\_ checkbox. When checked, the appropriate command is written to the configuration register and the register contents are updated on the display. Refer to the MAX9507 IC data sheet for more details about the dual SPST analog switches.

## Sync-Tip Clamp Enable (STEN)

The MAX9507's sync-tip clamp is enabled by checking the STEN checkbox. When STEN is  checked, the appropriate command is written to the configuration register  and  the  register  contents  are  updated  on  the display. When STEN is cleared, the part expects a DCcoupled input. Refer to the MAX9507 IC data sheet for more details about the sync-tip clamp.

## Filter Enable (FLTEN)

The MAX9507's video filter is enabled by checking the FLTEN checkbox. When FLTEN is checked, the appropriate command is written to the configuration register and the register contents are updated on the display. Refer to the MAX9507 IC data sheet for more details about the video filter.

<!-- image -->

## Signal Path Enable (SPEN)

The MAX9507's signal path is enabled by checking the SPEN checkbox. The signal path includes the video amplifier, filter (if selected by FLTEN ), input buffer, and sync-tip clamp (if selected by STEN ). Note: The charge pump and regulator must be enabled for the amplifier to function correctly. When SPEN is checked, the appropriate command is written to the configuration register  and  the  register  contents  are  updated  on  the display. This bit overrides the ASPEN setting. Refer to the MAX9507 IC data sheet for more details about the signal path.

## Charge Pump Enable (CPEN)

The MAX9507's charge pump is enabled by checking the CPEN checkbox. The charge pump and regulator must be enabled for the amplifier to function correctly. When CPEN is  checked, the appropriate command is written to the configuration register and the register contents are updated on the display. This bit overrides the ACPEN setting. Refer to the MAX9507 IC data sheet for more details about the charge pump.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9507 Evaluation Kit/Evaluation System

## Load (Read Only)

The MAX9507's load bit is a read-only bit that displays the load status if load detection is enabled. When this bit reads 1, a load is detected. To enable automatic load detection, set ASPEN or ACPEN to 1. For more information about the load bit, refer to the Video Load Detection Circuitry section of the MAX9507 IC data sheet.

## Load Change Flag Enable (LCFEN)

The MAX9507's load change flag is enabled by checking the LCFEN checkbox. When LCFEN is  checked, the  appropriate command is written to the video load detect register and the register contents are updated on the display. This bit does not affect the LOAD I 2 C bit.  Refer  to  the  MAX9507 IC data sheet for more details about the load change flag.

## Automatic Signal Path Enable (ASPEN)

The MAX9507's automatic signal path control is enabled by checking the ASPEN checkbox. This bit enables the load detect circuitry and automatic control of the signal path based on load status. When ASPEN is  checked, the appropriate command is written to the video load detect register and the register contents are updated on the display. Refer to the MAX9507 IC data sheet for more details about automatic signal path enable.

## Automatic Charge Pump Enable (ACPEN)

The MAX9507's automatic charge pump control is enabled by checking the ACPEN checkbox. This bit enables the load detect circuitry and automatic control of the charge pump based on load status. When ACPEN is checked, the appropriate command is written to  the  video  load  detect  register  and  the  register  contents are updated on the display. Refer to the MAX9507 IC data sheet for more details about automatic charge pump enable.

## Simple I 2 C/SMBus Commands

There are two methods for communicating with the MAX9507: through the normal user-interface panel (Figure 1) or through the SMBus commands available by selecting the Interface Diagnostic Window item from the Action pulldown menu. The Maxim Command Module Interface window pops up and includes a 2-wire interface tab that allows for execution of the SMBusSendByte() and SMBusQuick() commands.

The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 2 for an illustration of this tool.

Figure 2. MAX9507 EV Kit Software Interface Diagnostic Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9507 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

The MAX9507 EV system (MAX9507EVCMAXQU+) consists of the MAX9507 EV kit (MAX9507EVKIT+) and the Maxim CMAXQUSB+ command module. The EV kit evaluates the MAX9507 DirectDrive video filter amplifier and the CMAXQUSB+ provides the I 2 C/SMBus-compatible interface for software control of the MAX9507's video filter, analog switches, load detection, and other functions.

The EV kit is powered by a 1.7V to 2.625V power supply  and is driven by a video source. The EV kit can accept either a 250mVP-P or 1VP-P input full-scale video signal and allows the use of both AC-coupled and DC-coupled input signals. The output of the EV kit is  DC-coupled and provides an output full-scale video signal that is nominally 2VP-P.

The MAX9507 amplifies standard-definition video signals and sets the video black level near ground while consuming minimal power. The video output amplifier can detect whether a load is present and indicates a change in load status through the load change flag bit ( LCF ). In addition, the MAX9507 has dual SPST analog switches for routing additional audio, digital, or video signals.

## I 2 C Slave Address Selection

The MAX9507 is programmable to one of four I 2 C slave addresses through jumper JU1 (Table 1). The address is  defined  as  the  7  most  significant  bits  (MSBs)  followed by the read/write bit.

Table 1. Jumper JU1 Functions

| SHUNT POSITION   | DEV_ADD PIN      | WRITE ADDRESS   | READ ADDRESS   |
|------------------|------------------|-----------------|----------------|
| 1-3*             | Connected to GND | 0x98            | 0x99           |
| 1-4              | Connected to VDD | 0x9A            | 0x9B           |
| 1-5              | Connected to SCL | 0x9C            | 0x9D           |
| 1-2              | Connected to SDA | 0x9E            | 0x9F           |

<!-- image -->

## I 2 C Pullup Resistors

The MAX9507 EV kit assumes pullup resistors will be provided by the I 2 C master (e.g., the CMAXQUSB board) on the SDA and SCL lines. To add these resistors on the EV kit board instead, solder resistors to the R11 and R12 locations.

## Video Input Selection

The MAX9507 EV kit can be configured to accept either a 250mVP-P or 1VP-P input full-scale signal at VIDIN through the shunt location of JU2 (Table 2). When the shunt is placed between pin 1 and pin 2, VIDIN sees a standard termination of (R2 + R3) // (R1) = 75 Ω to GND and there is no attenuation. When the shunt is placed between pin 2 and pin 3, VIDIN again sees a standard termination of (R2 + R3) // (R1) = 75 Ω , but the signal is attenuated by R3 / (R2 + R3) = 1/4. Therefore, a 1VP-P signal at VIDIN results in 250mVP-P at IN.

Table 2. Jumper JU2 Functions

| SHUNT POSITION   | INPUT SIGNAL     |
|------------------|------------------|
| 1-2*             | 250mV P-P signal |
| 2-3              | 1V P-P signal    |

## Dual SPST Analog Switches

Additional audio, digital, video, or other signals can be routed using the MAX9507's SPST analog switches. The MAX9507 EV kit provides external connections to these switches through 50 Ω BNC connectors. Termination resistors for the switches may be placed on the EV kit board by soldering resistors in the R7-R10 locations.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9507 Evaluation Kit/Evaluation System

Figure 3. MAX9507 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9507 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX9507 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9507 Evaluation Kit/Evaluation System

Figure 5. MAX9507 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9507 Evaluation Kit/Evaluation System

Figure 6. MAX9507 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600