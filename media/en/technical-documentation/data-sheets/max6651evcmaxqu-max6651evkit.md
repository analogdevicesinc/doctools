<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX6651 Evaluation Kit/Evaluation System

## General Description

The MAX6651 evaluation kit (EV kit) is an assembled and tested printed-circuit board (PCB) that demonstrates the MAX6651 intelligent fan controller IC. Windows ® 98SE/2000/XP-compatible software provides a handy user interface to exercise the MAX6651's features. Order the MAX6651 EV system for complete evaluation of the MAX6651, including a Maxim SMBus  interface board (CMAXQUSB). Order the MAX6651 EV kit if you already have an SMBus interface.

SMBus is a trademark of Intel Corp.

Windows is a registered trademark of Microsoft Corp.

## MAX6651 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                       |
|---------------|-------|---------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 25V radial leaded electrolytic capacitor                                                    |
| C2            |     0 | Open                                                                                              |
| C3            |     1 | 0.1µF ceramic capacitor (1206)                                                                    |
| J1-J5, J7-J12 |    11 | 2-pin headers                                                                                     |
| LED1          |     1 | Light-emitting diode                                                                              |
| P1            |     1 | 2 x 10 right-angle socket SamTec SSW-110-02-S-D-RA                                                |
| Q1            |     1 | TO-220 logic-level N-channel FET International Rectifier IRFZ24N (Rdson < 0.1 Ω at 5Vgs, 30Vbdss) |
| Q1            |     1 | Heatsink, thermalloy 6028                                                                         |
| Q1            |     1 | No. 4 nut                                                                                         |
| Q1            |     1 | 4-40 x 1/4in machine screw                                                                        |
| R1            |     1 | 10k Ω ±1% resistor (1206)                                                                         |
| R2            |     1 | 100k Ω ±1% resistor (1206)                                                                        |
| R3            |     1 | 560 Ω ±5% resistor (1206)                                                                         |
| R4-R8         |     5 | 49.9k Ω ±1% resistors (1206)                                                                      |
| RP1           |     1 | SIP resistor network, 10k Ω , 6 pins, common                                                      |
| U1            |     1 | MAX6651EEE                                                                                        |
| -             |     7 | Shunts (J1, J5, J8-J12)                                                                           |
| -             |     1 | PCB: MAX6651 Evaluation Kit                                                                       |

- ♦ Proven PCB Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested
- ♦ EV System Includes USB Connectivity

## Ordering Information

| PART          | TEMP RANGE       | INTERFACE TYPE   |
|---------------|------------------|------------------|
| 0°C to +70°C* | User supplied    | MAX6651EVKIT     |
| 0°C to +70°C* | Windows software | MAX6651EVCMAXQU  |

## Component Lists

## MAX6651 EV System

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6651EVKIT |     1 | MAX6651 EV kit         |
| CMAXQUSB+    |     1 | Serial interface board |

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX6651 EV system:

MAX6651 EV kit

- Maxim CMAXQUSB interface board (USB cable included)
- A user-supplied Windows 98SE/2000/XP computer with a spare USB port
- A 12VDC power supply

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

## MAX6651 Evaluation Kit/Evaluation System

## Procedure

The MAX6651 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 6651Rxx.ZIP.
- 2) Install  the  MAX6651 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB board, ensure the shunt of jumper JU1 is in the 5V position.
- 4) Carefully connect the boards by aligning the 20-pin connector of the MAX6651 EV kit with the 20-pin header of the CMAXQUSB interface board. Gently press them together.
- 5) Also connect the 12VDC supply to the MAX6651 EV kit  at  the  pad  labeled  FAN  SUPPLY  (±)  (the MAX6651's +5V supply comes from the CMAXQUSB board).
- 6) Ensure that the jumper settings are in the default position (Table 1).
- 7) Connect a 12V tachometer-output fan to the FAN0+, FAN0-, and FAN0T terminals. Additional fans  may  be  connected  at  FAN1+/FAN1-, FAN2+/FAN2-,  and  FAN3+/FAN3-.  Optional tachometer inputs FAN1T, FAN2T, and FAN3T may be used to monitor the auxiliary fans' speed.
- 8) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message. If you do not see a window that is similar to  the  one  described above after 30 seconds, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 98SE/2000/XP. Refer to the TROUBLESHOOT-ING\_USB.PDF document included with the software if you have any problems during this step.
- 9) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\ Program Files\MAX6651 (or the directory chosen during installation) using the Browse button.
- 10) Turn on the power supply. The fan will turn on at full speed.
- 11) Start the MAX6651 program by opening its icon in the Windows Start menu.
- 12) Click the Registers panel at the top of the program. In the Config register, drop down the full-on combo box and choose closed-loop mode.
- 13) In the Speed register, type in the value "100." Adjust this value up or down to choose the target fan speed. Increasing the Speed value makes the closed-loop set point a slower fan speed.
- 14) Observe  measured  fan  speed  in  the Tach0 tachometer display.

## Detailed Description of Software

The main window (Figure 1) shows a block diagram of the MAX6651 EV kit, which allows the user to configure the Fan Mode and Speed .  The Registers tab (Figure 2) shows the register values of the MAX6651. Register bit  fields  are  presented  as  drop-down combo boxes. The Speed and Tach0-3 register values are also trans-

lated into the corresponding fan (RPMs).

## Detailed Description of Hardware

U1, the MAX6651, is an intelligent fan controller. MOSFET Q1 regulates the fan voltage (measured by the FB input).  In  closed-loop  mode,  adjusting  the  fan  voltage set point regulates the main fan's tachometer output.

## PCB Layout Tips

For best results, keep the Q1 gate drive trace as short as possible.

See Figure 3, which shows the MAX6651 EV kit schematic, and refer to the MAX6651 IC data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6651 Evaluation Kit/Evaluation System

Figure 1. MAX6651 EV Kit Software Main Window (Block Diagram Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6651 Evaluation Kit/Evaluation System

Figure 2. MAX6651 EV Kit Software Main Window (Registers Tab)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6651 Evaluation Kit/Evaluation System

## Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                            |
|----------|------------|---------------------------------------------------------------------|
| J1       | Open*      | See Table 2.                                                        |
| J2       | Open*      | See Table 2.                                                        |
| J3       | Open*      | See Table 2.                                                        |
| J4       | Closed*    | See Table 2.                                                        |
| J5       | Closed*    | Connect on-board LED to GPIO0 output.                               |
| J5       | Open       | Disconnect on-board LED from GPIO0 output.                          |
| J7       | Closed     | Connect GPIO0 to GPIO1.                                             |
| J7       | Open*      | GPIO0 is not connected to GPIO1.                                    |
| J8       | Closed*    | Fan 3 tachometer connects to FAN3T directly.                        |
| J8       | Open       | Fan 3 tachometer connects to FAN3T through 49.9k Ω resistor R8.     |
| J9       | Closed*    | Fan 2 tachometer connects to FAN2T directly.                        |
| J9       | Open       | Fan 2 tachometer connects to FAN2T through 49.9k Ω resistor R7.     |
| J10      | Closed*    | Fan 1 tachometer connects to FAN1T directly.                        |
| J10      | Open       | Fan 1 tachometer connects to FAN1T through 49.9k Ω resistor R6.     |
| J11      | Closed*    | Fan 0 tachometer connects to FAN0T directly.                        |
| J11      | Open       | Fan 0 tachometer connects to FAN0T through 49.9k Ω resistor R5.     |
| J12      | Closed*    | FB feedback input connects to Q1 drain directly.                    |
| J12      | Open       | FB feedback input connects to Q1 drain through 49.9k Ω resistor R4. |

Table 2. Address Selection Jumpers

| J1     | J2     | J3     | J4      | ADDRESS   |
|--------|--------|--------|---------|-----------|
| Closed | Open   | Open   | Open    | 1001 011R |
| Open   | Closed | Open   | Open    | 0011 111R |
| Open   | Open   | Closed | Open    | 1001 000R |
| Open*  | Open*  | Open*  | Closed* | 0011 011R |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6651 Evaluation Kit/Evaluation System

Figure 3. MAX6651 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6651 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX6651 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX6651 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6651 Evaluation Kit/Evaluation System

Figure 6. MAX6651 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: Title change-all pages, 1-5

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600