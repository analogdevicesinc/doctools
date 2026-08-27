<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX6946 Evaluation Kit/Evaluation System

## General Description

The MAX6946 evaluation (EV) kit is an assembled and tested PCB that demonstrates the capabilities of the MAX6946 constant-current LED driver and digital I/O expander. The EV kit includes three RGB LEDs and one white LED that can be controlled simultaneously by the MAX6946. The MAX6947 can also be evaluated on the EV kit board by replacing the MAX6946 IC.

The MAX6946 evaluation system (EV system) includes a MAX6946 EV kit and a Maxim interface board (CMAXQUSB). The CMAXQUSB board connects to a PC's USB port and allows the transfer of I 2 C commands to the MAX6946 EV kit.

The CMAXQUSB board allows a PC to use its USB port to emulate an I 2 C 2-wire interface. Windows ® 98SE/2000/XP-compatible software (which can be downloaded from www.maxim-ic.com/evkitsoftware) provides a user-friendly interface to exercise the features of the MAX6946. The program is menu driven and offers a graphical user interface (GUI) with control buttons and a status display. Order the MAX6946EVCMAXQU+ for a complete PC-based evaluation kit of the MAX6946. Order the MAX6946EVKIT+ if you already have a CMAXQUSB interface board or an I 2 C-compatible 2-wire interface system.

Windows is a registered trademark of Microsoft Corp.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Optek      | 972-323-2200 | www.optekinc.com      |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX6946/MAX6947 when contacting these manufacturers.

## MAX6946EVCMAXQU EV System

| PART          |   QTY | DESCRIPTION           |
|---------------|-------|-----------------------|
| MAX6946EVKIT+ |     1 | MAX6946 EV kit        |
| CMAXQUSB+     |     1 | Maxim interface board |

## MAX6946 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J104K |
| C2            |     0 | Not installed, ceramic capacitor (0603)                          |
| C3            |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A106K   |

- ♦ Proven PCB Layout
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ Three RGB LEDs and One White LED
- ♦ Access to I 2 C Interface Signals
- ♦ Header for Accessing to the MAX6946 10 I/O Ports
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE* IC PACKAGE   | 2-WIRE SERIAL INTERFACE TYPE                |
|--------------|--------------------------|---------------------------------------------|
| 0°C to +70°C | 16 TQFN-EP               | MAX6946EVKIT+ User- supplied I 2C interface |
| 0°C to +70°C | 16 TQFN-EP               | MAX6946EVCMAXQU+ CMAXQUSB interface board   |

## Component List

## MAX6946 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                               |
|---------------|-------|-------------------------------------------|
| C4            |     0 | Not installed, ceramic capacitor (0805)   |
| D1, D2, D3    |     3 | RGB LEDs (2.4mm x 3.2mm) Optek OVSARGB3R8 |
| D4            |     1 | White LED (PLCC-2) Optek OVS9WBCR9        |
| J1            |     1 | 2 x 10 right-angle female receptacle      |
| J2            |     1 | 2 x 10-pin header                         |
| JU1           |     1 | 2-pin header                              |
| JU2           |     0 | Not installed, 3-pin header               |
| R1            |     1 | 4.7k Ω ±5% resistor (0402)                |
| R2-R11        |     0 | Not installed, resistors (0402)           |
| R12, R13      |     0 | Not installed, resistors (0603)           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## Features

## MAX6946 Evaluation Kit/Evaluation System

## Component List (continued)

## MAX6946 Evaluation Kit

| DESIGNATION                          |   QTY | DESCRIPTION                                              |
|--------------------------------------|-------|----------------------------------------------------------|
| SW1                                  |     1 | Momentary pushbutton switch                              |
| U1                                   |     1 | Maxim: MAX6946ATE+ (16-pin TQFN 3mm x 3mm) Top Mark: AES |
| See jumper table for jumper settings |    11 | Shunts (J2, JU1)                                         |
| -                                    |     1 | PC Board: MAX6946 Evaluation Kit                         |

## MAX6946EVKIT Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX6946.EXE             | Executes the application program           |
| UNINST.INI              | Uninstalls the EV kit software             |
| Ftd2xx.INF              | USB device driver file                     |
| TROUBLESHOOTING_USB.PDF | USB troubleshooting guide                  |

## Quick Start

## Recommended Equipment

- The Maxim MAX6946EVCMAXQU evaluation system:
- MAX6946 EV kit Maxim interface board (CMAXQUSB) USB cable (included with CMAXQUSB)
- One 5.5V to 7.0V, 300mA power supply
- One user-supplied Windows 98SE/2000/XP PC with an unused USB port

Note: In the following section(s), software-related items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underline refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

The MAX6946 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not enable the power supply until all connections are made.

- 1) Visit  the  Maxim Integrated Products website (www.maxim-ic.com/evkitsoftware) to download the
2. most  current  version  of  the  EV  kit  software MAX6946Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the MAX6946 EV kit software on your PC by running the INSTALL.EXE program. The program files  are  copied  and  icons  are  created  for  them  in the Windows Start | Programs menu.
- 3) Place a shunt on the 3.3V setting of jumper JU1 on the CMAXQUSB interface board.
- 4) Verify that the two switches on SW1, located on the CMAXQUSB board, are set to the ON position.
- 5) Verify that a shunt is installed across jumper JU1 on the EV kit board.
- 6) Connect the MAX6946 EV kit's 20-pin female connector (J1) to the CMAXQUSB's 20-pin male connector (P3).
- 7) Connect the 5.5V power supply between the MAX6946 EV kit's VLED and GND pads.
- 8) Enable the power supply.
- 9) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB board. A Building Driver Database window should pop up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If you do not see a window that is similar to the one described above after 30 seconds, try removing the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000 and XP. Refer to  the  document TROUBLESHOOTING\_USB.PDF included with the software if you have any problems during this step.
- 10) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX6946 (default installation directory) using the Browse button.
- 11) Start the MAX6946 EV kit software by opening its icon in  the Start | Programs menu. The application window shown in Figure 1 appears, and the software connects to the CMAXQUSB after a few seconds.
- 12) Select the Run Enable: drop box located in the Global Settings group box and select Run Mode .
- 13) Select the Constant-Current Sink radio button in the P0-P9 Configuration group box to illuminate all of the LEDs on the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6946 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

## MAX6946 EV System

The MAX6946 EV system (MAX6946EVCMAXQU) is a complete 10-port, constant-current LED driver and I/O expander system, consisting of a MAX6946 EV kit and the Maxim interface board (CMAXQUSB).

## CMAXQUSB

The CMAXQUSB is a Maxim interface board that provides an I 2 C interface bus to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## MAX6946 EV Kit

The MAX6946 EV kit board provides a proven layout for evaluating the MAX6946 constant-current LED driver/10-port I/O expander IC and can be obtained separately without the CMAXQUSB. The 10 I/O ports can be configured as logic inputs, open-drain logic outputs, constant-current sink outputs, or any combination of the above. The EV kit includes three RGB LEDs (D1, D2, and D3) and one white LED (D4). These LEDs can be enabled and the current through each LED can be controlled  using  the  MAX6946 EV kit software (see the Detailed Description of Software section).

The MAX6946 EV kit includes PCB pads (R2-R11) on the bottom side of the PCB that can be used to add pullup resistors at each of the MAX6946's P0-P9 ports to operate the EV kit in logic input/output mode.

## Power Supplies

The MAX6946 EV kit requires a 2.25V to 3.6V power supply connected to the VDD and GND PC pads for normal  operation.  The  EV  kit  can  also  use  the CMAXQUSB interface board's 3.3V power source by installing  a  shunt  across  jumper JU1 on the MAX6946 EV kit and configuring the CMAXQUSB interface board VDD. Set jumper JU1 in the CMAXQUSB to 3.3V. See Table 1 for EV kit jumper JU1 configuration. Note: Insure that all of the data sheet absolute maximum specifications are not violated when operating the MAX6946 EV kit.

The EV kit also requires a 5.5V to 7V voltage source connected to the VLED and GND pads to power the LEDs when operating the EV kit in input/current-sink mode. Use voltages from 2.25V to 7V to provide a pullup voltage during logic output/input operation.

<!-- image -->

## RST Input

The EV kit features a pushbutton switch, SW1, that connects the MAX6946 RST pin to ground. Push and hold the pushbutton switch to connect the RST pin to ground. Refer to the RST Input section in the MAX6946/ MAX6947 IC data sheet to use this RST feature.

## I/O Ports

The MAX6946 EV kit includes three RGB LEDs (D1, D2, and D3) and one white LED (D4) connected to the 10 I/O ports through shunts installed on header J2. The LEDs are enabled by configuring the respective port on the MAX6946 to constant-current static output, constant-current PWM output, or low-logic output mode. For logic operation at each port, remove the shunts on header J2, install  10k Ω pullup resistors on PC pads R2-R11, and configure the ports for logic outputs or inputs.

## I 2 C Clock and Data Inputs

The MAX6946 EV kit features a 2 x 10 right-angle header receptacle (J1) to interface with the CMAXQUSB interface board. Pin J1-7 connects to the MAX6946 clock pin (SCL) and pin J1-3 connects to the data pin (SDA) for I 2 C-compatibale communications. Slide both SW1 dip switches on the CMAXQUSB interface board to the ON position to connect pullup resistors to the SCL and SDA signal lines for proper I 2 C communication.

The clock and data input pins can also be accessed at the SCL and SDA EV kit PCB pads, respectively. An external I 2 C-compatible controller can be connected to the SCL, SDA, and GND PCB pads to communicate with  the  MAX6946 IC. If the external device does not have pullup resistors on the clock and data lines, 2.4k Ω (typ)  pullup  surface-mount resistors (0603 size) must be installed on R12 and R13 PCB pads for proper I 2 C communication. The GND PCB pad must also be connected to the external I 2 C controller.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Voltage Source Selection (Jumper JU1)

| SHUNT POSITION   | EV KIT FUNCTION                                                                                     |
|------------------|-----------------------------------------------------------------------------------------------------|
| Installed*       | Power supplied from the CMAXQUSB. Note: Verify that the CMAXQUSB JU1 voltage is configured to 3.3V. |
| Not installed    | User-supplied power source required at the EV kit VDD and GND pads.                                 |

## MAX6946 Evaluation Kit/Evaluation System

## Evaluating the MAX6947

The MAX6946 EV kit PCB can also be used to evaluate the MAX6947 10-port expander. Remove the MAX6946 IC (U1) and replace it with the MAX6947 IC. The MAX6947 is pin and function compatible with the MAX6946, with the exception of pin 12. When evaluating the MAX6947, the OSC PC pad on the EV kit can be used  to access  the  AD0  pin.  Refer to the MAX6946/MAX6947 IC data sheet for a complete description of part-to-part differences. Install a 3-pin 0.1in header at JU2 on the EV kit board and use a shunt to configure the MAX6947 address. See Table 2 for jumper JU2 configuration.

Table 2. MAX6947 Slave Address Selection (Jumper JU2)

| SHUNT POSITION   | AD0 PIN          | MAX6947 SLAVE ADDRESS   |
|------------------|------------------|-------------------------|
| 1-2              | Connected to VDD | 0x40                    |
| 2-3              | Connected to GND | 0x48                    |

## Detailed Description of Software

Note: Words in boldface are user-selectable features in the software.

## Graphical User Interface

The user interface (shown in Figure 1) is simple to operate. Use the computer mouse buttons or press the Tab key to navigate through the GUI controls. The correct I 2 C  write  operation is generated to update the internal registers of the MAX6946 when any of these controls are used.

The software divides EV kit functions into group boxes. The Interface group  box  indicates  the Device Address , I2C Bus Speed ,  EV  kit Status ,  and  the  last operation Command Sent and Data Sent indicators. This data is used to confirm proper device operation. The Global Settings box allows the user to program the configuration register, configure the global settings for  the  10  ports,  and  read  the  ports.  The  tabs  on  the GUI are used to configure individual or groups of ports.

The MAX6946 EV kit software features additional functions to simplify operation. Automatic Diagnostics continually probe the interface board and the MAX6946 EV kit to make sure that all communications are maintained and that all devices are working. These functions will  create  some  activity  on  the  I 2 C  bus.  The Silence I2C Activity checkbox reduces I 2 C bus activity so triggering of an oscilloscope while communicating to the MAX6946 EV kit is made easy. The Factory Reset button programs the EV kit to the MAX6946 initial powerup conditions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6946 Evaluation Kit/Evaluation System

Figure 1. MAX6946 EV Kit Software Graphical User Interface (GUI)

<!-- image -->

## Software Connection to CMAXQUSB

The MAX6946 EV kit software automatically searches for  the  CMAXQUSB interface board and MAX6946 EV kit  during  startup.  The Status indicator shows if the interface board and the MAX6946 EV kit are operational. If the interface board is not found, verify that the command module and the USB cable are connected properly, power is applied to the EV kit, and select the YES button on the retry-connection message box.

The nonfunctional GUI can be viewed by selecting the NO button on the retry-connection message box when attempting to start the software without the CMAXQUSB interface board being connected. Restart the software with the interface board and EV kit properly connected for normal operation.

<!-- image -->

## Interface

The MAX6946 EV kit software automatically searches for  the  MAX6946 during startup. If the software finds the MAX6946, the Status indicator shows that the MAX6946 is operational. If the MAX6946 is not found, the Status indicator shows that the MAX6946 was not found and the Device Address is set to '??'. Select the Auto Detect option from the Device Address combo box to search for the device address.

Use the I2C Bus Speed combo box to set the serial bus speed to 400kHz or 100kHz.

## Global Settings

The Global Settings group box includes controls to configure the Global Current Sink from 2.5mA to

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6946 Evaluation Kit/Evaluation System

20mA and the Hold-Off Delay , Ramp-Down Time , and Ramp-Up Time from 0 to 4s. The other configuration register bits can be programmed by configuring the OSC/AD0 , RSTPOR , PWM Staggered , Reset Run , and Run Enable GUI controls. The Read P7-P0 and Read P9-P8 buttons can be used to read the logical state of the MAX6946 P7-P0 and P9 to P8 pins, repectively.  Refer  to  the  MAX6946/MAX6947 IC data sheet for  a  detailed  description  of  each  of  these  functions. Note: During Read P7-P0 and Read P9-P8 operations, the software automatically changes the r/w bit in the address from 0 to 1 for proper I 2 C read operation.

## Configuring the I/O Ports

The GUI tabs allow the user to configure the 10 I/O ports individually or in groups. Once a port(s) tab has been selected, the P\_ Configuration group box allows the user to configure the port as a Low-Logic Output , High-Logic Output / Logic Input , Static ConstantCurrent Sink ,  constant-current PWM output ( PWM Duty Cycle slide bar), or disable the LED(s) ( LED Off ). Individual port Sink Current can be configured to half or  full  of  the  global  current  setting  ( Global Current Sink ).  Configuring the I/O ports to Low-Logic Output turns on the LEDs without regulating the LED current at the respective port. Use the mouse or keyboard left/right arrows to move the PWM Duty Cycle slide bar from left to right to dim or brighten the LED(s). Refer to the MAX6946/MAX6947 IC data sheet for a detailed description of each of these registers. For true logic input or output configuration of each port, remove the shunts on header J2, install pullup resistors on PC pads R2-R11, and use the software to configure the ports for logic outputs or inputs. Refer to the I/O Ports section in the MAX6946/MAX6947 IC data sheet for further details.

## Simple I 2 C Commands

There are two methods for communicating with the MAX6946; through the normal user-interface panel (Figure 1) or by using low-level I 2 C commands available through the 2-wire interface diagnostics (Figure

2) item from the main program's Options menu. A window is displayed that allows I 2 C operations, such as read byte and write byte. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer by unchecking the Automatic Diagnostics checkbox in the MAX6946 main program.

The I 2 C  dialog  boxes  accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers must be prefixed by $ or 0x. Binary numbers must be exactly eight digits of 0s and 1s. See Figure 2 for an example using the 2-wire interface diagnostics tool.

Note: When using low-level I 2 C commands, the GUI interface is no longer synchronized and will not reflect the IC register settings.

## General Troubleshooting

Problem: software reports it cannot find the board.

- Is  the  CMAXQUSB interface board power LED (LED1) lit?
- Is the USB communications cable connected?
- Has windows plug-and-play detected the board? Bring up Control Panel|System|Device Manager , and look at what device nodes are indicated for USB. If there is an 'unknown device' node attached to the USB, delete it-this forces plug-and-play to try again.

## Problem: Unable to find DUT (device-under-test).

- Is power connected to the MAX6946 EV kit?
- Are the SCL and SDA signals pulled up to VDD through appropriate resistors (2.4k Ω typ)? The CMAXQUSB interface board dip-switch  SW1 enables the on-board resistors. There must be pullup resistors somewhere on the I 2 C bus.
- If  using  jumper wires to connect to the I 2 C bus, could the SCL and SDA signals be swapped? Could the GND ground return be missing?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6946 Evaluation Kit/Evaluation System

<!-- image -->

Figure 2. 2-Wire Interface Utility. The above example shows a simple SMBusWriteByte operation using the included 2-wire interface diagnostics tool. In this example, the software is writing 0x02 data to register address 0x0A (write to ports P0-P9) of the device with a device address of 0x40. The above data sequence sets the MAX6946 10 ports to constant-current static sink output.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6946 Evaluation Kit/Evaluation System

<!-- image -->

Figure3. MAX6946 EV Kit Schematic

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6946 Evaluation Kit/Evaluation System

Figure 4. MAX6946 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 5. MAX6946 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6946 Evaluation Kit/Evaluation System

Figure 6. MAX6946 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX6946 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

Boblet