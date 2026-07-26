<!-- lastmod 2022-08-05 -->
## General Description

The MAX6965 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the capabilities  of  the  MAX6965 9-output LED driver with intensity control and hot-insertion protection. The MAX6965 EV kit  also  includes  Windows ® 98SE/2000/XP-compatible software, which provides a simple graphics user interface (GUI) for using the MAX6965's features.

The MAX6965 evaluation system (EV system) includes a MAX6965 EV kit and a Maxim CMAXQUSB serialinterface board.

The CMAXQUSB board connects to a PC's USB port and allows the transfer of I 2 C commands to the MAX6965 EV kit.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX6965 when contacting the component supplier.

Windows is a registered trademark of Microsoft Corp.

## MAX6965 EV System

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6965EVKIT |     1 | MAX6965 EV kit         |
| CMAXQUSB     |     1 | Serial-interface board |

## MAX6965 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 0.1µF ±15%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1H104K |
| C2, C3        |     2 | 10µF ±15%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A106M |
| D1, D2        |     2 | RGB LEDs (2.8mm x 3.2mm)                                        |
| D3, D4        |     2 | White LEDs (PLCC-2)                                             |
| J1            |     1 | 2 x 10 right-angle female receptacle                            |
| JU1-JU4, JU7  |     5 | 3-pin headers                                                   |

<!-- image -->

## MAX6965 Evaluation Kit/ Evaluation System

## Features

- ♦ 400kHz, 5.5V-Tolerant, 2-Wire Serial Interface
- ♦ 2V to 3.6V Operation
- ♦ High Output Current-Each Port 50mA (max)
- ♦ 7V-Rated, Open-Drain Outputs
- ♦ Proven PC Board Layout
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ Fully Assembled and Tested
- ♦ EV System Includes USB Connectivity

## Ordering Information

| PART            | TYPE      | INTERFACE                    |
|-----------------|-----------|------------------------------|
| MAX6965EVKIT    | EV kit    | User-supplied I 2C interface |
| MAX6965EVCMAXQU | EV system | CMAXQUSB board               |

Note: The MAX6965 EV kit software is included with the MAX6965 EV kit, but is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## Component List

## MAX6965 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                 |
|---------------|-------|---------------------------------------------|
| JU5           |     1 | 5-pin header                                |
| JU6           |     1 | 2-pin header                                |
| R1, R4        |     2 | 270 Ω ±5% resistors (0603)                  |
| R2, R5        |     2 | 240 Ω ±5% resistors (0603)                  |
| R3, R6        |     2 | 160 Ω ±5% resistors (0603)                  |
| R7, R8        |     2 | 100k Ω ±5% resistors (0603)                 |
| R9, R10       |     2 | 180 Ω ±5% resistors (0603)                  |
| R11, R12      |     0 | Not installed (0603)                        |
| R13           |     1 | 2k Ω ±5% resistor (0603)                    |
| R14, R15      |     2 | 10k Ω ±5% resistors (0603)                  |
| S1, S2        |     0 | Not installed                               |
| U1            |     1 | MAX6965ATE (16-pin TQFN, 3mm x 3mm x 0.8mm) |
| -             |     7 | Shunts                                      |
| -             |     1 | MAX6965 EV kit PC board                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6965 Evaluation Kit/ Evaluation System

## MAX6965 EV Kit Files

| FILE                    | OPERATION                                  |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX6965.EXE             | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- One 7VDC, 1A power supply
- The MAX6965 EV system MAX6965 EV kit Maxim CMAXQUSB board USB cable (included with CMAXQUSB)
- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In the following section(s), software-related items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underline refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

Do not turn on the power supply until all connections are made.

- 1) Visit  the  Maxim  Integrated  Products  website (www.maxim-ic.com/evkitsoftware) to download the most  recent  revision  of  the  EV  kit  software 6965Rxx.ZIP.
- 2) Install  the  MAX6965 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB board, ensure the shunt of JU1 is in the 3.3V position.
- 4) Enable the I 2 C  pullup  resistors  on  the  CMAXQUSB board by setting the DIP switches SW1 to the ON position.
- 5) For the MAX6965 EV kit, make sure the shunts of all jumpers are in the following default positions (Table 1).

## Table 1. Jumper Default Positions

| JUMPER      | FUNCTION                              |
|-------------|---------------------------------------|
| JU1: (2-3)  | Blink phase 0                         |
| JU2: (1-2)  | Normal operation                      |
| JU3: (1-2)  | O7 output drives the white LED D3     |
| JU4: (1-2)  | O6 output drives the white LED D4     |
| JU5: (1-2)  | I 2C slave address is 0x48            |
| JU6: (Open) | O8 is a normal output                 |
| JU7: (2-3)  | CMAXQUSB provides the V+ power supply |

- 6) Carefully connect the boards by aligning the MAX6965 EV kit's 20-pin connector with the 20-pin connector of the CMAXQUSB board.
- 7) Connect the 7V DC power supply between the MAX6965 EV kit's VDD and GND pads.
- 8) Turn on the 7V DC power.
- 9) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. Otherwise, skip to step 11. If you do not see a window that is similar to the one described above after 30 seconds, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000/XP. Refer to the document TROUBLESHOOTING\_USB.PDF included with  the  software  if  you  have  any  problems  during this step.
- 10) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX6965 (default installation directory) using the Browse button.
- 11) Start  the  MAX6965 EV kit software by opening its icon in the Start menu. The GUI main window appears as shown in Figure 1.
- 12) Switch to tab LED Config/Status .  Click  the Red , Green , and Blue checkboxes at the right of the Blink Phase 0 labels as shown in Figure 2. Observe the change of D1 and D2 on the EV kit board.

## Detailed Description of Software

To start the MAX6965 EV kit software, double-click the MAX6965 EV kit icon that was created during installation. The GUI main window appears as shown in Figure 1. Wait approximately two seconds while the MAX6965 EV kit software connects to the CMAXQUSB board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6965 Evaluation Kit/ Evaluation System

Figure 1. MAX6965 Evaluation Software Main Window (Global Config/Status Tab)

<!-- image -->

There are four tabs on the MAX6965 EV kit GUI software. They are Global Config/Status , LED Config/ Status , Registers Direct Access , and Help .

## Global Config/Status Tab

The Global Config/Status tab shown in Figure 1 contains the Global Configuration/Status group box, the I2C Address pulldown menu, as well as Reset and Exit buttons.

The Global Configuration/Status group box represents the Global Configuration/Status and Master/O8 Intensity registers. The Auto Blink checkbox is a software-driven feature.

The I2C Address pulldown menu autodetects the MAX6965's I 2 C slave address when the GUI software starts. If multiple devices are connected to the I 2 C bus, the user can use this pulldown menu to manually change the device's I 2 C slave address according to the shunt position of JU5 as shown in Table 2.

<!-- image -->

## Table 2. The I 2 C Address Configuration

| JUMPER   | SHUNT POSITION   | I 2C ADDRESS    |
|----------|------------------|-----------------|
| JU5      | 1-2*             | 0100100x (0x48) |
| JU5      | 1-3              | 0100000x (0x40) |
| JU5      | 1-4              | 1100000x (0xC0) |
| JU5      | 1-5              | 1100100x (0xC8) |

Press the Reset button to reset the MAX6965 EV kit hardware and the GUI software to the default settings. Press the Exit button to quit the MAX6965 EV kit GUI software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6965 Evaluation Kit/ Evaluation System

Figure 2. LED Config/Status Tab

<!-- image -->

## LED Config/Status Tab

The LED Config/Status tab shown in Figure 2 contains the RGB LED D1 Configuration ,  the RGB LED D2 Configuration ,  and  the White  LED  D3,  D4 Configuration group boxes. These three group boxes represent the blink phase 0, blink phase 1, and output intensity registers . They directly control LEDs D1, D2, D3, and D4.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Registers Direct Access Tab

The Registers Direct Access tab,  shown in Figure 3, contains all nine of the MAX6965's registers, as well as Read and Write buttons. Customers can directly access all registers within this tab.

## MAX6965 Evaluation Kit/ Evaluation System

## Help Tab

The Help tab contains the MAX6965 EV kit software revision and Maxim's website information.

<!-- image -->

Figure 3. Registers Direct Access Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6965 Evaluation Kit/ Evaluation System

## Detailed Description of Hardware

The MAX6965 is a 9-output LED driver with intensity control  and  hot-insertion  protection.  The  MAX6965 EV kit  board  provides  a  proven  layout  for  evaluating  the MAX6965. The EV kit comes with a MAX6965ATE installed.

## Blink Control

Jumper JU1 controls the blink function of the MAX6965 EV kit as shown in Table 3. Make sure the Blink Enable checkbox on the Global Config/Status tab is checked to enable the blink function.

## Table 3. Blink Jumper Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JU1      | 1-2              | Blink phase 1                       |
| JU1      | 2-3*             | Blink phase 0                       |
| JU1      | Open             | Blink phase controlled by BLINK pad |

## Hardware Reset Control

The hardware reset function is controlled by jumper JU2 as shown in Table 4. Putting the shunt on position 2-3 resets all registers and puts the device in the power-on reset state.

## Table 4. RST Jumper Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION               |
|----------|------------------|---------------------------|
| JU2      | 1-2*             | Normal operation          |
| JU2      | 2-3              | Reset                     |
| JU2      | Open             | Controlled by the RST pad |

## I 2 C Address Configuration

The shunt position of jumper JU5 determines the I 2 C slave address of the MAX6965 EV kit. See Table 2 to select the appropriate setting.

## Reserved Jumper Settings

Jumpers JU3, JU4, and JU6 are reserved for evaluating the MAX7315 and MAX7316. Leave the shunt on default positions, as shown in Table 5, to evaluate the MAX6965.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 5. Jumper JU3, JU4, and JU6 Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                |
|----------|------------------|--------------------------------------------|
| JU3      | 1-2*             | O7 output drives the white LED D3.         |
| JU3      | 2-3              | Evaluates P7 as input (MAX7315/MAX7316)**. |
| JU3      | Open             | Use O7 pad to evaluate this I/O pin.       |
| JU4      | 1-2*             | O6 output drives the white LED D4.         |
| JU4      | 2-3              | Evaluates P6 as input (MAX7315/MAX7316)**. |
| JU4      | Open             | Use O6 pad to evaluate this I/O pin.       |
| JU6      | 1-2              | INT signal routed to J1**.                 |
| JU6      | Open*            | Use O8 pad to evaluate this I/O pin.       |

## Power Supplies

The power supply for all LEDs must be powered by a user-provided 0 to 7V power supply, which connects to VDD. The MAX6965 can be either powered from the CMAXQUSB or from a user-supplied 2.0V to 3.6V power supply, which connects to VCC, as shown in Table 6.

Table 6. V+ Selection Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU7      | 1-2              | User-provided 2.0V to 3.6V power supply (VCC) |
| JU7      | 2-3*             | Powered by CMAXQUSB                           |

<!-- image -->

## User-Supplied I 2 C Interface

To use the MAX6965 EV kit with a user-supplied I 2 C interface, install the shunt on jumper JU7's 1-2 position. Connect SDA, SCL and GND lines from the user-supplied I 2 C interface to the SDA, SCL, and GND pads on the MAX6965 EV kit. Apply a 2.0V to 3.6V power supply to the VCC pad of the MAX6965 EV kit. Depending on the configuration of the user-supplied I 2 C interface, it may be necessary to install the I 2 C pullup resistors R11 and R12.

<!-- image -->

Figure 4. MAX6965 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6965 Evaluation Kit/ Evaluation System

## MAX6965 Evaluation Kit/ Evaluation System

Figure 5. MAX6965 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 6. MAX6965 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6965 Evaluation Kit/ Evaluation System

Figure 7. MAX6965 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Boblet

Boblet

9

Boblet