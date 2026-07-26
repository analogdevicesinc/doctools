<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5478 Evaluation Kit/Evaluation System

## General Description

The MAX5478 evaluation system (EV system) consists of a MAX5478 evaluation kit (EV kit) and a companion command module interface board (CMODUSB).

The MAX5478 EV kit is an assembled and tested PC board that features the MAX5478 50k Ω linear-taper dual digital  potentiometer.  The  MAX5478 IC features an internal nonvolatile EEPROM used to store the potentiometer's wiper position for initialization  during power-up. The EEPROM is programmed through the I 2 C-compatible serial interface, transmitting at rates up to  400kbps. The MAX5478 address can be programmed by configuring three input pins for a total of eight unique address combinations. The MAX5478 EV kit  can also be used to evaluate the MAX5477 (10k Ω ) or the MAX5479 (100k Ω ) dual digital potentiometers.

The EV kit also includes Windows ® 98-/2000-/XP-compatible  software that provides a professional user interface for  exercising the MAX5478's features. The program is menu-driven and offers a graphical user interface (GUI) complete with control buttons and track bars.

The CMODUSB command module allows a personal computer (PC) to use its USB port to emulate an I 2 C 2wire interface. Order the MAX5478EVCMODU for a complete PC-based EV kit. Order the MAX5478EVKIT if a CMODUSB command module or an I 2 C-compatible 2-wire interface system has already been purchased with a Maxim EV system.

Windows is a registered trademark of Microsoft Corporation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- ♦ Power-On Recall of Wiper Position from Nonvolatile Memory
- ♦ 2.7V to 5.25V Single-Supply Operation
- ♦ Configurable Device Address
- ♦ I 2 C-Compatible Serial Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Include Windows 98-/2000-/XP-Compatible Software and Demo PC Board
- ♦ Evaluate the MAX5477/MAX5478/MAX5479
- ♦ Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE   | IC PACKAGE   | I 2C INTERFACE INCLUDED   |
|----------------|--------------|--------------|---------------------------|
| MAX5478EVKIT   | 0°C to +70°C | 14 TSSOP     | No                        |
| MAX5478EVCMODU | 0°C to +70°C | 14 TSSOP     | Yes                       |

Note:

To evaluate the MAX5477 or MAX5479, request a free sample with the MAX5478EVKIT.

Note:

The MAX5478 EV kit software is provided with the MAX5478EVKIT. However, the CMODUSB command module is required to interface the EV kit to the comput- er when using the included software.

## MAX5478EVCMODU Component List

| PART         |   QTY | DESCRIPTION          |
|--------------|-------|----------------------|
| MAX5478EVKIT |     1 | MAX5478 EV kit       |
| CMODUSB      |     1 | I 2C interface board |

Maxim Integrated Products

## MAX5478 Evaluation Kit/Evaluation System

## MAX5478EVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| R1, R2        |     0 | Not installed, resistors (0805)        |
| U1            |     1 | MAX5478EUD (14-pin TSSOP)              |
| -             |     6 | Shunts (JU1-JU4, JU6, JU7)             |
| -             |     1 | MAX5478 EV kit PC board                |
| -             |     1 | Software disk (CD-ROM), MAX5478 EV kit |

## Component Supplier

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX5478 when contacting this component supplier.

## Quick Start

## Recommended Equipment

- Windows 98/2000/XP computer and a USB port
- USB cable (to connect the computer's USB port to the CMODUSB command module)
- 5V/100mA DC power supply
- Two ohmmeters
- 6) Use the INSTALL.EXE program on the CD-ROM provided to copy the files and create icons in the Windows 98/2000/XP Start menu.
- 7) Connect the 5V DC power supply to the VDD and GND pads on the MAX5478 EV kit board.
- 8) Connect one ohmmeter across the LA and LW pads.
- 9) Connect the second ohmmeter across the LB and WB pads.
- 10) Turn on the power supply.
- 11) Connect a USB cable from the computer's USB port to the CMODUSB command module. Note: Do not connect a power source to the P1 connector on the command module. The command module is powered through the USB port.
- 12) Start the MAX5478 program by opening its icon in the Start menu.
- 13) Observe as the program automatically detects the address of the MAX5478 and starts the main program.
- 14) The MAX5478 EV kit is ready for additional testing.

## Detailed Description of Hardware

The MAX5478 EV kit is an assembled and tested PC board that evaluates the MAX5478 linear-taper dual digital  potentiometer. Each potentiometer, A and B, has an end-to-end resistance of 50k Ω and each wiper can be programmed independently among 256 tap positions. The MAX5478 features an internal nonvolatile memory (EEPROM) used to store the wiper position for initializa-

## Procedure

The MAX5478 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Carefully connect the boards by aligning the 20-pin connector (J1) of the MAX5478 EV kit with the P3 20-pin header on the CMODUSB command module. Gently press them together.
- 2) Slide both CMODUSB command-module SW1 dip switches to the ON position (pullup resistors for I 2 C bus). Ensure that jumper J1 is installed in position 1-2, setting the command module for 5V operation.
- 3) Verify  that  shunts  are  installed  across  pins  1-2  of jumpers JU1, JU2, and JU3 (device address = 0x5E) on the MAX5478 EV kit.
- 4) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU4 (write-protect disable) on the MAX5478 EV kit board.
- 5) Verify that shunts are not installed on jumpers JU6 and JU7 on the MAX5478 EV kit.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K |
| C2            |     0 | Not installed, ceramic capacitor (0603)                         |
| J1            |     1 | 2 x 10 right-angle female receptacle                            |
| JU1-JU4       |     4 | 3-pin headers                                                   |
| JU5           |     0 | Not installed, 2-pin header                                     |
| JU6, JU7      |     2 | 2-pin headers                                                   |

## MAX5478 Evaluation Kit/Evaluation System

Table 1. Device Address Configuration

| JU3 (A2) SHUNT POSITION   | JU2 (A1) SHUNT POSITION   | JU1 (A0) SHUNT   | MAX5478 ADDRESS   | MAX5478 ADDRESS   |
|---------------------------|---------------------------|------------------|-------------------|-------------------|
| JU3 (A2) SHUNT POSITION   | JU2 (A1) SHUNT POSITION   | JU1 (A0) SHUNT   | BINARY            | HEXADECIMAL       |
| 2-3                       | 2-3                       | 2-3              | 0101 000Y         | 0x50              |
| 2-3                       | 2-3                       | 1-2              | 0101 001Y         | 0x52              |
| 2-3                       | 1-2                       | 2-3              | 0101 010Y         | 0x54              |
| 2-3                       | 1-2                       | 1-2              | 0101 011Y         | 0x56              |
| 1-2                       | 2-3                       | 2-3              | 0101 100Y         | 0x58              |
| 1-2                       | 2-3                       | 1-2              | 0101 101Y         | 0x5A              |
| 1-2                       | 1-2                       | 2-3              | 0101 110Y         | 0x5C              |
| 1-2                       | 1-2                       | 1-2              | 0101 111Y         | 0x5E              |

tion during power-up. The I 2 C-compatible serial interface can communicate at rates up to 400kbps to program the nonvolatile and the volatile memory of the MAX5478.

The MAX5478 features three configurable input address pins (A0, A1, and A2) that set the device address to one of up to eight unique address combinations. The MAX5478 EV kit can also be used to evaluate the 10k Ω MAX5477 or the 100k Ω MAX5479 dual digital potentiometers. IC replacement is required to evaluate the other digital potentiometers.

## Address Selection

The MAX5478 EV kit circuit features three jumpers that pull the MAX5478 A0, A1, and A2 address pins to VDD or GND to set the MAX5478 slave address. See Table 1 for jumper JU1 (A0), JU2 (A1), and JU3 (A2) settings to set the MAX5478 slave address.

Note: The first 7 bits shown are the address. The Y bit in  Table 1 is  the  I 2 C  read/write  bit.  The  I 2 C  protocol states that this bit is a 1 for a read operation or a 0 for a write. The Y bit is always set to 0 (write only) because these digital potentiometers do not transmit data to the master device.

## Write Protect

The MAX5478 IC features a write-protect input pin (WP) that enables or disables the I 2 C interface from writing to the nonvolatile and volatile memory. The WP pin can be configured using jumper JU4. See Table 2 for jumper JU4 settings.

Table 2. Jumper JU4 Configuration (WP)

| SHUNT POSITION   | WP PIN           | WRITE PROTECT   |
|------------------|------------------|-----------------|
| 1-2              | Connected to VDD | Enabled         |
| 2-3              | Connected to GND | Disabled        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## I 2 C Clock and Data Inputs

The MAX5478 EV kit features a 2 x 10, right-angle header receptacle (J1) to interface with the CMODUSB command module. Pin J1-7 connects to the MAX5478 clock pin (SCL) and pin J1-3 connects to the MAX5478 data pin (SDA) for I 2 C-compatibale communications. Slide both SW1 dip switches on the command module to the ON position to connect pullup resistors to the SCL and SDA signal lines for proper I 2 C communication.

The clock and data input pins can also be accessed at the SCL and SDA EV kit pads, respectively. An external I 2 C-compatible controller can be connected to the SCL, SDA, and GND pads to communicate with the MAX5478 IC. If  the  external  device does not have pullup resistors on the clock and data lines, 2.4k Ω (typ) pullup surfacemount resistors (0805 size) must be installed on resistor R1 and R2 pads for proper I 2 C communication. The GND pad must also be connected to the external I 2 C controller.

## Digital Potentiometer Pins

The MAX5478 dual digital potentiometer high (HA, HB), l ow  (LA,  LB),  and  wiper  (WA,  WB)  pins  can  be accessed at the EV kit's HA, HB, LA, LB, WA, and WB pads. Suffixes A and B denote the pads for digital potentiometer A and digital potentiometer B in the MAX5478 IC. Jumpers JU6 and JU7 can be used to connect the MAX5478 LA and LB pins to the circuit ground, providing a ground reference during evaluation.

## MAX5478 Evaluation Kit/Evaluation System

Figure 1. MAX5478 EV Kit Software Main Window

<!-- image -->

## Power Input

The MAX5478 EV kit requires a 2.7V to 5.25V power supply connected across the VDD and GND pads for normal operation. The EV kit can also use the CMODUSB command module's 3.3V or 5V power source by installing a shorting jumper across JU5 of the MAX5478 EV kit. Configure the command module's VDD select voltage to 3.3V or 5V (jumper J1) when using the command module to power the MAX5478 EV kit.

Note: Ensure that all the data sheet absolute maximum specifications are not violated when operating the MAX5478 EV kit.

Evaluating the MAX5477 and MAX5479 The MAX5478 EV kit PC board can be used to evaluate the MAX5477 or MAX5479 dual digital potentiometers. Remove the MAX5478 IC (U1) and replace it with the new IC. The MAX5477 and MAX5479 ICs are pin and function compatible with the MAX5478 IC. Refer to the MAX5477/MAX5478/MAX5479 data sheet for a complete description of part-to-part differences.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5478 Evaluation Kit/Evaluation System

## Detailed Description of Software

Note: Words in boldface are user-selectable features in the software.

## User-Interface Panel

The user interface (shown in Figure 1) is easy to operate. Use the mouse or press the tab key to navigate through the GUI controls. The correct I 2 C write operation is generated to update the internal memory registers of the MAX5478 when any of these controls are used.

The software divides EV kit functions into logical blocks. The Interface box indicates the Device Address , I 2 C Clock Speed , EV kit Status, and the last write operation Command Sent and Data Sent indicators. This data is used  to  confirm  proper  device  operation.  The Potentiometer A and Potentiometer B Control boxes change the wiper position and transfer the data from the volatile memory to the nonvolatile memory or vice-versa.

The MAX5478 EV kit software features additional functions to simplify operation. Automatic Diagnostics continually probe the interface board and the MAX5478 EV kit to make sure that all connections are maintained and that all  devices are working properly. These functions create some activity on the I 2 C bus. The Silence I 2 C Activity checkbox reduces I 2 C bus activity to the MAX5478 EV kit to enable easy triggering of an oscilloscope. Checking the Wipers A and B checkbox issues a command that sends the same data to both digital potentiometers simultaneously and enables control of both digital potentiometers together. The Factory Reset button programs the volatile and nonvolatile memory of both potentiometers to midscale (wiper position = 127).

## Software Startup

The MAX5478 EV kit software automatically searches for the CMODUSB command module and the MAX5478 EV kit during startup. The status indicator shows if the interface board and the MAX5478 EV kit are operational. If the interface board is not found, verify that the command module and the USB cable are connected properly, power is applied to the EV kit, and click the YES button on the retry-connection message box.

The nonfunctional GUI can be viewed by clicking the NO button on the retry-connection message box when attempting to start the software without the CMODUSB command module being connected. Restart the software with the command module and EV kit properly connected for normal operation.

<!-- image -->

## Wipers A and B Position

The trackbars in  the  Potentiometer A and B Control boxes can be used to change the wiper position between the H\_ and L\_ end points. Use the computer mouse, arrow keys, or page-up/page-down keys to move the trackbar between the 256 position points. The wiper position can also be changed by entering the numerical position (0 to 255) in the Volatile edit fields. A trackbar or Volatile edit field change writes to the volatile memory and the wiper position is updated with the data sent. The data in the nonvolatile memory remains unchanged. The wiper position is shown in the Volatile edit fields. The top Volatile field shows the wiper position with respect to the H\_ end point and the bottom Volatile field  shows the wiper position with respect to the L\_ end point. During EV kit power-up, the data (wiper position) in the nonvolatile memory is transferred to the volatile memory and the position of wipers A and B is updated. The Volatile and Non-Volatile edit fields display '??' after initializing the EV kit software because the MAX5478 does not transmit data to the master.

## Nonvolatile Programming

The Non-Volatile edit fields can be used to program the nonvolatile memory of the digital potentiometers. When writing to the nonvolatile memory, the volatile memory and the wiper position remain unchanged. The NonVolatile edit fields accept the numerical position from 0 to 255. The top Non-Volatile edit field shows the wiper position with respect to the H\_ end point and the bottom Non-Volatile edit  field  shows the wiper position with respect to the L\_ end point.

## Volatile/Nonvolatile Data Transfer

The Potentiometer A and B Control boxes contain buttons VREG-&gt;NVREG and NVREG-&gt;VREG that are used to transfer data from the volatile memory to the nonvolatile memory and the nonvolatile memory to the volatile memory. When the VREG-&gt;NVREG button is clicked, the data present in the volatile memory is transferred to the nonvolatile memory. When the NVREG-&gt;VREG button is clicked, the data present in the nonvolatile memory is transferred to the volatile memory and the wiper position  is  updated.  When  the VREG-&gt;NVREG and NVREG-&gt;VREG buttons are clicked, the EV kit software Data Sent indicator shows the last known data that is being transferred. These commands do not send any new data to the device because the commands transferred data already contained in the volatile or nonvolatile  registers.  See  Table  3  for  VREG  and  NVREG behavior when WP is enabled and disabled.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5478 Evaluation Kit/Evaluation System

## Table 3. Write-Protect Behavior of VREG and NVREG

| COMMAND                               | WRITE PROTECT DISABLED (WP = 0)                                                          | WRITE PROTECT ENABLED (WP = 1)                                                  |
|---------------------------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Write to the volatile memory VREG     | I 2C data is written to VREG. Wiper position updates with I 2C data. No change to NVREG. | Copy NVREG to VREG. Wiper position updates with NVREG data. No change to NVREG. |
| Write to the nonvolatile memory NVREG | No change to VREG or wiper position. I 2C data is written to NVREG.                      | No change to VREG or wiper position. No change to NVREG.                        |
| Copy NVREG to VREG                    | Copy NVREG to VREG. Wiper position updates with NVREG data. No change to NVREG.          | Copy NVREG to VREG. Wiper position updates with NVREG data. No change to NVREG. |
| Copy VREG to NVREG                    | Copy VREG to NVREG. No change to VREG or wiper position.                                 | No change to VREG or wiper position. No change to NVREG.                        |

Note: While WP = 1, the MAX5478 EV kit software may display incorrect memory data because the potentiometer is a write-only device.

## Interface

The MAX5478 EV kit software automatically searches for the MAX5478 during startup using the eight possible addresses. If the software finds the MAX5478 digital potentiometer, the Status indicator shows the MAX5478 is  operational  or  if  it  is  not  found,  the  Status  indicator shows that the MAX5478 was not found and the Device Address is set to '??'. Select the Auto Detect option from the Device Address combo box to search for the device address.

Use the I 2 C  Bus Speed combo box to set the bus speed to 400kHz or 100kHz.

## Simple I 2 C Commands

There are two methods for communicating with the MAX5478 EV kit; through the normal user-interface panel (Figure 1) or by using low-level I 2 C commands available through the 2-Wire Interface Diagnostic (Figure 2) item from the main program's Options main menu. A window is displayed that allows I 2 C operations, such as Read Byte and Write Byte .  The Read Byte operation is not used because the MAX5478 does not send data to the master. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer by unchecking the Automatic Diagnostics checkbox in the MAX5478 main program.

Note: To ensure a fail-safe write-protect feature, write the data to be protected to the nonvolatile and volatile registers before pulling WP high (WP = 1). Releasing WP (WP = 0) and sending invalid I 2 C commands (such as single-byte address polling) can load the volatile register with corrupted data and change the wiper position. Use valid 3-byte I 2 C commands for proper operation.

SMBus is a trademark of Intel Corporation.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The I 2 C  dialog  boxes  accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 2 for an example of this tool. Figure 2 shows a simple SMBus™ write-byte operation using the included 2-wire interface diagnostics tool. In this example, the software is writing data 0xB8 to  the  register  address  0x11  (Potentiometer  A  volatile memory) of the device with device address 0x5E. The above data sequence sets wiper A position of the MAX5478 to position 113.

## General Troubleshooting Problem: Software reports it cannot find the board.

- Is  the  CMODUSB command module power LED (LED1) lit?
- Is the USB communications cable connected?
- Has Windows plug-and-play detected the board? Bring up Control Panel, then System, then Device Manager, and look at what device nodes are indicated for USB. If there is an 'unknown device' node attached to the USB, delete it. This forces plug-andplay to try again.

## Problem: Unable to find device under test (DUT)

- Is power connected to the MAX5478 EV kit?
- Are the SCL and SDA signals pulled up to VDD through appropriate resistors (2.4k Ω typ)? The CMODUSB command module dip switch SW1 enables the on-board resistors. There must be pullup resistors somewhere on the I 2 C bus.
- If using jumper wires to connect, could the SCL and SDA signals be swapped? Could the ground return be missing?

<!-- image -->

## MAX5478 Evaluation Kit/Evaluation System

Figure 2. Simple SMBus Write-Byte Operation

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5478 Evaluation Kit/Evaluation System

Figure 3. MAX5478 EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5478 Evaluation Kit/Evaluation System

Figure 4. MAX5478 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 5. MAX5478 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluate: MAX5477/MAX5478/MAX5479

## MAX5478 Evaluation Kit/Evaluation System

Figure 6. MAX5478 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600