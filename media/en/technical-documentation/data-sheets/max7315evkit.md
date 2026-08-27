<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX7315 Evaluation Kit/Evaluation System

## General Description

The MAX7315 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the capabilities of the MAX7315 8-port I/O expander with LED intensity control, interrupt, and hot-insertion protection. The MAX7315 EV kit also includes Windows ® 98SE/2000/XPcompatible software that which provides a simple graphical user interface (GUI) for exercising the features of the MAX7315.

The MAX7315 evaluation system (EV system) consists of the MAX7315 EV kit and a companion CMAXQUSB serialinterface board. The CMAXQUSB interface board allows a PC to control an I 2 C interface using its USB port. Order the MAX7315EVCMAXQU+ for a complete PC-based evaluation of the MAX7315. Order the MAX7315EVKIT+ if you already have a MAX7315-compatible serial interface.

Windows is a registered trademark of Microsoft Corp.

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX7315 when contacting this component supplier.

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K |
| C2, C3        |     2 | 10µF ±20%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A106M |
| D1, D2        |     2 | RGB LEDs (2.7mm x 2.4mm x 0.95mm)                               |
| D3, D4, D5    |     3 | White LEDs (PLCC-2)                                             |
| J1            |     1 | 2 x 10 right-angle female receptacle                            |
| JU1, JU2, JU5 |     3 | 5-pin headers                                                   |
| JU3, JU4, JU7 |     3 | 3-pin headers                                                   |

## Features

- ♦ 400kHz, 5.5V-Tolerant, 2-Wire Serial Interface
- ♦ 2V to 3.6V Operation
- ♦ High Output Current-Each Port 50mA (max)
- ♦ 5.5V-Rated Open-Drain Outputs
- ♦ Proven PCB Layout
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ Fully Assembled and Tested
- ♦ EV System Includes USB Connectivity

## Ordering Information

| PART        | TYPE                         | INTERFACE                          |
|-------------|------------------------------|------------------------------------|
| EV kit      | User-supplied I 2C interface | MAX7315EVKIT +                     |
| + EV system | board                        | MAX7315EVCMAXQU CMAXQUSB interface |

Note: The MAX7315 EV kit software is included with the MAX7315 EV kit, but is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB interface board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## Component List

## MAX7315 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| JU6, JU8-JU13 |     7 | 2-pin headers                                |
| R1, R4        |     2 | 270 Ω ±5% resistors (0603)                   |
| R2, R5        |     2 | 240 Ω ±5% resistors (0603)                   |
| R3, R6        |     2 | 160 Ω ±5% resistors (0603)                   |
| R7, R8        |     2 | 100k Ω ±5% resistors (0603)                  |
| R9, R10, R13  |     3 | 180 Ω ±5% resistors (0603)                   |
| R11, R12      |     0 | Not installed, resistors (0603)              |
| S1, S2        |     2 | Pushbutton switches                          |
| U1            |     1 | MAX7315ATE+ (16-pin TQFN, 3mm x 3mm x 0.8mm) |
| -             |    13 | Shunts                                       |
| -             |     1 | MAX7315EVKIT+ PCB                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX7315 Evaluation Kit/Evaluation System

## Component List (continued)

## MAX7315 EV System

| PART          |   QTY | DESCRIPTION            |
|---------------|-------|------------------------|
| MAX7315EVKIT+ |     1 | MAX7315 EV kit         |
| CMAXQUSB+     |     1 | Serial-interface board |

## Quick Start

## Recommended Equipment

- 5VDC, 1A power supply
- MAX7315 EV system

MAX7315 EV kit

Maxim CMAXQUSB interface board (USB cable included)

- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 98SE/2000/XP operating system.

## Procedure

The MAX7315 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed .

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the most recent version of the EV kit software, 7315Rxx.ZIP.
- 2) Install  the  MAX7315 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB board, ensure the shunt of JU1 is in the 3.3V or 2.5V position.
- 4) Enable the I 2 C pullup resistors on the CMAXQUSB board by setting the DIP switch SW1 to the ON position.
- 5) For the MAX7315 EV kit, make sure the shunts of all jumpers are in the following default positions (Table 1).

## MAX7315 EV Kit Files

| FILE                     | DESCRIPTION                                |
|--------------------------|--------------------------------------------|
| INSTALL.EXE              | Installs the EV kit files on your computer |
| MAX7315.EXE              | Application program                        |
| FTD2XX.INF               | USB device driver file                     |
| UNINST.INI               | Uninstalls the EV kit software             |
| TROUBLESHOOTING_ USB.PDF | USB driver installation help file          |

- 6) Carefully connect the boards by aligning the MAX7315 EV kit's 20-pin connector with the 20-pin connector of the CMAXQUSB board.
- 7) Connect the 5VDC power supply between the MAX7315 EV kit's VLED and GND pads.
- 8) Turn on the 5VDC power supply.
- 9) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message. If you do not see a window that is similar  to  the  one  described  above after 30 seconds, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000/XP. Refer to the TROUBLESHOOT-ING\_USB.PDF document included with the software if you have any problems during this step.
- 10) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the

## Table 1. MAX7315 EV Kit Default Jumper Positions

| JUMPER        | SHUNT POSITION   | DESCRIPTION                                |
|---------------|------------------|--------------------------------------------|
| JU1, JU2, JU5 | 1-4              | I 2C slave address is 0xC6                 |
| JU3, JU4      | 2-3              | P6, P7 set as input ports                  |
| JU6           | 1-2              | INT /O8 uses on-board LED indicator        |
| JU7           | 2-3              | CMAXQUSB provides the V+ power supply      |
| JU8-JU13      | 1-2              | P0-P5 uses on-board input/output circuitry |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7315 Evaluation Kit/Evaluation System

Search for the Best Driver for your Device option. Specify the location of the device driver to be C:\Program Files\MAX7315 (or  the  directory  chosen during installation) using the Browse button.

- 11) Start  the  MAX7315 EV kit software by opening its icon in the Start menu. The GUI main window appears, as shown in Figure 1.
- 12) Switch to the Ports Configuration tab (Figure 2). In the Input Enable (0x03) group box, uncheck Port 0 and Port 3 .  Click  the Read All button in the Input State (0x00) group box.
- 13) Switch to the Blink Phase 0/1 tab (Figure 3). In the RGB LED D1 Configuration group box, uncheck Red in the Blink Phase 0 line. In the RGB LED D2 Configuration group box, uncheck Red in  the Blink Phase 0 line. Observe the change of D1, D2 on the EV kit board.
- 14) On the MAX7315 EV kit board, press the S1 or S2 switch, observe the change of D5 on the EV kit board.

## Detailed Software Description

To start the MAX7315 EV kit software, double-click the MAX7315 EV kit icon created during installation. The GUI main window appears, as shown in Figure 1. Wait approximately two seconds while the MAX7315 EV kit software connects to the CMAXQUSB board.

On the lower part of the main window, the user can set the I 2 C  address manually or automatically in the I2C Address Setting pulldown menu, display the Maxim serial  interface  window  by  clicking  the Diagnose button, reset the device to the default power-up condition by clicking the Software Reset button, and exit the application by clicking the Exit button.

<!-- image -->

Figure 1. MAX7315 Evaluation Software Main Window (Config/Master, O8 Intensity Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7315 Evaluation Kit/Evaluation System

Refer to the MAX7315 IC data sheet for a detailed I 2 C slave address map.

On the bottom of the main window, the user can see the activity of the I 2 C interface and the status of the EV kit.

In the main window of the software, there are five tabs that let the user configure all the registers of the MAX7315. They are Config/Master, O8 Intensity , Ports Configuration , Blink Phase 0/1 , Registers Direct Access , and Help .

## Config/Master, O8 Intensity Tab

The Config/Master, O8 Intensity tab shown in Figure 1 contains the Configuration (0x0F) group box and the Master, O8 Intensity (0x0E) group box.

When Blink Enable is  checked, Auto Flip is  selectable. When Auto Flip is checked, the user can choose the blinking frequency as desired.

When Global Intensity Enable is  checked, bits 0 through 3 of the master/O8 intensity register (0x0E) control the global LED intensity. When Global Intensity

Enable and O8 as Interrupt Output are unchecked, the bits 0 through 3 of the master/O8 intensity register (0x0E) control the O8 LED intensity.

Figure 2. Ports Configuration Tab

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7315 Evaluation Kit/Evaluation System

## Ports Configuration Tab

In  the Input Enable (0x03) group box, when a port is checked, the port is set as an input port. When a port is unchecked, the port is set as an output port.

In the Input State (0x00) group box, the user can read the incoming logic levels of all the ports, regardless of whether the port is defined as an input or an output by the ports configuration register (0x03).

## Blink Phase 0/1 Tab

The Blink Phase 0/1 tab shown in Figure 3 contains the RGB  LED  D1  Configuration ,  the RGB  LED  D2 Configuration , and the White LED  D3,  D4 Configuration group boxes. These three group boxes control the Blink Phase 0 (0x01), Blink Phase 1 (0x09), and output intensity (0x10, 0x11, 0x012, 0x13) registers. They directly control LED D1, D2, D3, and D4.

<!-- image -->

Figure 3. Blink Phase 0/1 Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7315 Evaluation Kit/Evaluation System

## Registers Direct Access Tab

The Registers Direct Access tab shown in Figure 4 contains all ten registers of the MAX7315. The user can directly write to the ten registers by inputting desired values and then clicking the Write All button. The user can read all ten registers by clicking the Read All button.

## Help Tab

The Help tab contains the MAX7315 EV kit software revision and Maxim Integrated Product's website information.

## Detailed Hardware Description

The MAX7315 is an 8-port I/O expander with LED intensity  control,  interrupt,  and  hot-insertion  protection.  The MAX7315 EV kit board provides a proven layout for evaluating the MAX7315. The EV kit comes with a MAX7315ATE+ installed.

## Power Supplies

The power supply for all LEDs must be powered by a user-provided 3.2V to 5.5V power supply that connects to the VLED pad. The MAX7315 can be either powered from the CMAXQUSB interface board or from a usersupplied 2.0V to 3.6V power supply that connects to the VCC pad, as shown in Table 2.

## Table 2. V+ Selection Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU7      | 1-2              | User-provided 2.0V to 3.6V power supply (VCC) |
| JU7      | 2-3*             | Powered by CMAXQUSB interface board           |

Figure 4. Registers Direct Access Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7315 Evaluation Kit/Evaluation System

## I 2 C Address Configuration

The shunt position of jumpers JU1, JU2, and JU5 determine the I 2 C slave address of the MAX7315 EV kit. Refer to the MAX7315 IC data sheet for a detailed I 2 C slave address map.

## Reserved Jumper Settings

Jumpers JU3, JU4, JU6, JU8-JU13 set the port configurations as described in Table 3.

## User-Supplied I 2 C Interface

To use the MAX7315 EV kit with a user-supplied I 2 C interface, install the shunt on jumper JU7 on pins 1 and 2.  Connect SDA, SCL, and GND lines from the usersupplied I 2 C interface to the SDA, SCL, and GND pads on the MAX7315 EV kit. Apply a 2.0V to 3.6V power supply to the VCC pad of the MAX7315 EV kit. Depending on the configuration of the user-supplied I 2 C  interface,  it  may  be  necessary  to  install  the  I 2 C pullup resistors R11 and R12.

<!-- image -->

## Table 3. Port Configurations

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                   |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------|
| JU3      | 2-3*             | P7 set as input port, controlled by S1.                                                                                       |
| JU3      | 1-2              | P7 set as output port, driving LED D3.                                                                                        |
| JU3      | Open             | Use P7 pad to evaluate this I/O pin.                                                                                          |
| JU4      | 2-3*             | P6 set as input port, controlled by S2.                                                                                       |
| JU4      | 1-2              | P6 set as output port, driving LED D4.                                                                                        |
| JU4      | Open             | Use P6 pad to evaluate this I/O pin.                                                                                          |
| JU6      | 1-2*             | INT /O8 set as GPO or interrupt, driving LED D5.                                                                              |
| JU6      | Open             | Use INT /O8 pad to evaluate this I/O pin.                                                                                     |
| JU8-JU13 | 1-2*             | When P0-P5 are set as output ports, P0-P5 drive LED D1 and D2. When P0-P5 are set as input ports, they are pulled up by VLED. |
| JU8-JU13 | Open*            | Use P0-P5 pads to evaluate the corresponding I/O pin.                                                                         |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7315 Evaluation Kit/Evaluation System

Figure 5. MAX7315 EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7315 Evaluation Kit/Evaluation System

Figure 6. MAX7315 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 7. MAX7315 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7315 Evaluation Kit/Evaluation System

Figure 8. MAX7315 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet