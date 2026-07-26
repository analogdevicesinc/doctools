<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5417L Evaluation Kit/Evaluation System

## General Description

The MAX5417L evaluation system (EV system) consists of a MAX5417L evaluation kit (EV kit) and a companion command module interface board (CMODUSB).

The MAX5417L EV kit is an assembled and tested PC board that features the MAX5417L 50k Ω , linear-taper digital potentiometer. The MAX5417L IC features an internal nonvolatile EEPROM used to store the potentiometer's wiper position for initialization during power-up. The EEPROM is programmed through the I 2 C-compatible serial  interface, transmitting at rates up to 400kbps. The MAX5417L is programmed with a factory-preset address and features an address input for a total of two unique address combinations. The MAX5417L EV kit can also be used to evaluate other versions of the MAX5417, MAX5418 (100k Ω ),  and MAX5419 (200k Ω )  digital potentiometers.

The EV kit also includes Windows ® 98-/2000-/XP-compatible  software that provides a professional user interface for  exercising the MAX5417L's features. The program is menu-driven and offers a graphical user interface (GUI) complete with control buttons and a track bar.

The CMODUSB command module allows a personal computer (PC) to use its USB port to emulate an I 2 C 2wire interface. Order the MAX5417LEVCMODU for a complete PC-based EV kit. Order the MAX5417LEVKIT if a CMODUSB command module or an I 2 C-compatible 2-wire interface system has already been purchased with a Maxim EV system.

Windows is a registered trademark of Microsoft Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K |
| C2            |     0 | Not installed, ceramic capacitor (0603)                         |
| J1            |     1 | 2 x 10 right-angle receptacle                                   |
| JU1           |     1 | 3-pin header                                                    |
| JU2           |     0 | Not installed, 2-pin header                                     |
| JU3           |     1 | 2-pin header                                                    |

## Features

- ♦ Power-On Recall of Wiper Position from Nonvolatile Memory
- ♦ 2.7V to 5.25V Single-Supply Operation
- ♦ Selectable Device Address Input
- ♦ I 2 C-Compatible Serial Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Include Windows 98-/2000-/XP-Compatible Software and Demo PC Board
- ♦ Evaluate the MAX5417/MAX5418/MAX5419
- ♦ Assembled and Tested

## Ordering Information

| PART            | TEMP RANGE   | IC PACKAGE   | I2C INTERFACE INCLUDED   |
|-----------------|--------------|--------------|--------------------------|
| MAX5417LEVKIT   | 0°C to +70°C | 8 TDFN-EP*   | No                       |
| MAX5417LEVCMODU | 0°C to +70°C | 8 TDFN-EP*   | Yes                      |

Note:

To evaluate the MAX5417M † /N † /P † , MAX5418\_, or MAX5419\_, request a free sample with the MAX5417LEVKIT.

Note:

The MAX5417L EV kit software is provided with the MAX5417LEVKIT. However, the CMODUSB command module is required to interface the EV kit to the computer when using the included software.

† Future Product-contact factory for availability.

## MAX5417LEVCMODU System Component List

| PART          |   QTY | DESCRIPTION         |
|---------------|-------|---------------------|
| MAX5417LEVKIT |     1 | MAX5417L EV kit     |
| CMODUSB       |     1 | I2C interface board |

## MAX5417LEVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                             |
|---------------|-------|-----------------------------------------|
| R1, R2        |     0 | Not installed, resistors (0805)         |
| U1            |     1 | MAX5417LETA (8-pin, 3mm x 3mm TDFN-EP)  |
| None          |     1 | Shunt (JU1)                             |
| None          |     1 | MAX5417L PC board                       |
| None          |     1 | Software disk (CD-ROM), MAX5417L EV kit |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX5417L Evaluation Kit/Evaluation System

## Component Supplier

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX5417L when contacting this component supplier.

## Quick Start

## Recommended Equipment

- Windows 98/2000/XP computer and a USB port
- USB cable (to connect the computer's USB port to the CMODUSB command module)
- 5V/100mA DC power supply
- Ohmmeter
- 8) Turn on the power supply.
- 9) Connect a USB cable from the computer's USB port to the CMODUSB command module. Note: Do not connect a power source to the P1 connector on the command module. The command module is powered through the USB port.
- 10) Start the MAX5417L program by opening its icon in the Start menu.
- 11) Observe as the program automatically detects the address of the MAX5417L and starts the main program.
- 12) The MAX5417L EV kit is ready for additional testing.

## Detailed Description of Hardware

The MAX5417L EV kit is an assembled and tested PC board that evaluates the MAX5417L linear-taper digital potentiometer. The MAX5417L has an end-to-end resistance of 50k Ω . The I 2 C interface is used to program the potentiometer wiper among 256 tap positions. The MAX5417L features an internal nonvolatile memory (EEPROM) used to store the wiper position for initialization  during  power-up. The I 2 C-compatible serial interface can communicate at rates up to 400kbps to program the nonvolatile and the volatile memory of the MAX5417L.

The MAX5417L is programmed with a factory-preset address and features a configurable address bit, A0, which can set the device address to one of two unique address combinations. The MAX5417L EV kit can also be used to evaluate other 50k Ω digital  potentiometers (MAX5417M/N/P), each with their own unique factory address. To evaluate the four versions of the MAX5418 (100k Ω )  or  the  four  versions  of  the  MAX5419 (200k Ω ) digital potentiometers, IC replacement is required.

## Procedure

The MAX5417L EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Carefully connect the boards by aligning the 20-pin connector (J1) of the MAX5417L EV kit with the P3 20-pin header on the CMODUSB command module. Gently press them together.
- 2) Slide  both  CMODUSB command module SW1 dip switches to the ON position. Ensure that jumper J1 is  installed  in  position  1-2,  setting  the  command module for 5V operation.
- 3) Verify  that  a  shunt  is  installed  across  pins  1-2  of j umper JU1 (device address = 0x52) on the MAX5417L EV kit.
- 4) Verify that a shunt is not installed on jumper JU3 on the MAX5417L EV kit.
- 5) Use the INSTALL.EXE program on the provided CD-ROM to copy the files and create icons in the Windows 98/2000/XP Start menu.
- 6) Connect the 5V DC power supply to the VDD and GND pads on the MAX5417L EV kit board.
- 7) Connect the ohmmeter across the L and W pads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5417L Evaluation Kit/Evaluation System

## Address Selection

Jumper JU1 sets the unique MAX5417L slave address. The two possible hex addresses are 0x50 or 0x52. See Table 1 for jumper settings to set the MAX5417L slave address.

Note: The first 7 bits shown are the address. The Y bit in  Table 1 is  the  I 2 C  read/write  bit.  The  I 2 C  protocol states that this bit is a 1 for a read operation or a 0 for a write. The Y bit is always set to 0 (write only) because these digital potentiometers do not transmit data to the master device.

## I 2 C Clock and Data Inputs

The MAX5417L EV kit features a 2 x 10, right-angle header receptacle (J1) to interface with the CMODUSB command module. Pin J1-7 connects to the MAX5417L clock pin (SCL) and pin J1-3 connects to the data pin (SDA) for I 2 C-compatible communications. Slide both SW1 dip switches on the command module to the ON position to connect pullup resistors to the SCL and SDA signal lines for proper I 2 C communication.

The clock and data input pins can also be accessed at the SCL and SDA EV kit pads, respectively. An external I 2 C-compatible controller can be connected to the SCL, SDA,  and  GND  pads  to  communicate  with  the MAX5417L IC. If the external device does not have pullup resistors on the clock and data lines, 2.4k Ω (typ) pullup surface-mount resistors (0805 size) must be installed  on  resistor  R1  and  R2  pads  for  proper  I 2 C communication. The GND pad must also be connected to the external I 2 C controller.

## Digital Potentiometer Pins

The high (H), low (L), and wiper (W) pins of the MAX5417L digital potentiometer can be accessed at the EV kit's H, L, and W pads, respectively. Jumper JU3 can be used to connect the L pin to the circuit ground thus providing a ground reference during evaluation.

## Power Input

The MAX5417L EV kit requires a 2.7V to 5.25V power supply connected across the VDD and GND pads for normal  operation.  The  EV  kit  can  also  use  the CMODUSB command module's 3.3V or 5V power source by installing a shorting jumper across JU2 of the MAX5417L EV kit. Configure the command module's VDD select voltage to 3.3V or 5V (jumper J1) when using the command module to power the MAX5417L EV kit.

Note: Ensure that all the data sheet absolute maximum specifications are not violated when operating the MAX5417L EV kit.

## Evaluating Other Versions of the MAX5417/MAX5418/MAX5419 ICs

The MAX5417L EV kit PC board can be used to evaluate  other  addressing  options  of  the  MAX5417, MAX5418, or MAX5419 digital potentiometers. Remove the MAX5417L IC (U1) and replace it with the new IC (see the Interface section). Refer to the MAX5417/ MAX5418/MAX5419 data sheet for a complete description of part-to-part differences.

## Detailed Description of Software

Note: Words in boldface are user-selectable features in the software.

## User-Interface Panel

The user interface (shown in Figure 1) is easy to operate. Use the mouse, or press the tab key to navigate through the GUI controls. The correct I 2 C write operation is generated to update the internal memory registers of the MAX5417L when any of these controls are used.

The software divides EV kit functions into logical blocks. The Interface box indicates the current Device Type , Device Address , I2C Bus Speed , EV kit Status, and the last write operation Command Sent and Data Sent indicators. This data is used to confirm proper device operation.  The  Potentiometer Control box changes the wiper position and transfers the data from the volatile memory to the nonvolatile memory or vice-versa.

The MAX5417L EV kit software features additional functions to simplify operation. Automatic Diagnostics continually  probe  the  interface  board  and  the MAX5417L EV kit to make sure that all connections are maintained and that all devices are working properly.

Table 1. Jumper Settings for Device Address (JU1)

|                |                         | MAX5417L ADDRESS   | MAX5417L ADDRESS   |
|----------------|-------------------------|--------------------|--------------------|
| SHUNT POSITION | MAX5417L ADDRESS A0 PIN | BINARY             | HEXADECIMAL        |
| 1-2            | Connected to VDD        | 0101 001Y          | 0x52               |
| 2-3            | Connected to GND        | 0101 000Y          | 0x50               |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5417L Evaluation Kit/Evaluation System

These functions create some activity on the I 2 C bus. The Silence I2C Activity checkbox reduces I 2 C bus activity to the MAX5417L EV kit to enable easy triggering of an oscilloscope. The Factory Reset button programs the volatile and nonvolatile memory to midscale (wiper position = 127).

## Software Startup

The MAX5417L EV kit software automatically searches for  the  CMODUSB and the MAX5417L EV kit during startup. The status indicator shows if the interface board and the MAX5417L EV kit are operational. If the interface board is not found, verify that the command module and the USB cable are connected properly, power is applied to the EV kit, and click the YES button on the retry-connection message box.

The nonfunctional GUI can be viewed by clicking the NO button on the retry-connection message box when attempting to start the software without the CMODUSB being connected. Restart the software with the command module and EV kit properly connected for normal operation.

## Wiper Position

The trackbar in  the  Potentiometer Control box can be used to change the wiper position between the H and L end points. Use the computer mouse, arrow keys, or page-up/page-down keys to move the trackbar between the 256 position points. The wiper position can also be changed by entering the numerical position (0 to 255) in the Volatile edit fields. A trackbar or Volatile edit  field  change  writes  to  the  volatile  memory  (0x11 command) and the wiper position is updated with the data sent. The data in the nonvolatile memory remains unchanged. The position of the wiper is shown in the Volatile edit  fields.  The  top Volatile field  shows the wiper position with respect to the H end point and the bottom Volatile field  shows the wiper position with respect to the L end point. During EV kit power-up, the data (wiper position) in the nonvolatile memory is transferred to the volatile memory and the wiper position is updated. The Volatile and Non-Volatile edit fields display '??' after initializing  the  EV  kit  software  because the MAX5417L does not transmit data to the master.

Figure 1. MAX5417L EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5417L Evaluation Kit/Evaluation System

## Nonvolatile Programming

The Non-Volatile edit fields can be used to program the nonvolatile memory of the digital potentiometer. When writing to the nonvolatile memory (0x21 command), the volatile  memory  and  the  wiper  position  remain unchanged. The Non-Volatile edit fields accept the numerical position from 0 to 255. The top Non-Volatile edit field shows the wiper position with respect to the H end point and the bottom Non-Volatile edit field shows the wiper position with respect to the L end point.

## Volatile/Nonvolatile Data Transfer

The  Potentiometer  Control  box  contains  buttons VREG-&gt;NVREG and NVREG-&gt;VREG that are used to transfer data from the volatile memory to the nonvolatile memory and the nonvolatile memory to the volatile memory. When the VREG-&gt;NVREG button is clicked, the data present in the volatile memory is transferred to the nonvolatile memory  (0x51  command).  When  the NVREG-&gt;VREG button is clicked, the data present in the nonvolatile memory is transferred to the volatile memory (0x61 command) and the wiper position is updated. These commands do not send any new data to the device because the commands transfer data already contained in the volatile or nonvolatile registers.

## Interface

The MAX5417L EV kit software automatically searches for the MAX5417L during startup using the two possible addresses: 0x50 or 0x52. If the software finds the MAX5417L digital potentiometer, the Status indicator shows the MAX5417L is operational or if it is not found, the Status indicator shows that the MAX5417L was not found and the Device Address is set to '??'. When evaluating other versions of the MAX5417 or the MAX5418/MAX5419 digital potentiometers, use the Device Type combo box to select the correct device and select the Auto Detect option from the Device Address combo box, after starting the MAX5417L EV kit software.

Use the I2C Bus Speed combo box to set the bus speed to 400kHz or 100kHz.

## Simple I 2 C Commands

There are two methods for communicating with the MAX5417L EV kit; through the normal user-interface panel (Figure 1) or by using low-level I 2 C commands available through the 2-Wire Interface Diagnostic (Figure 2) item from the main program's Options main

SMBus is a trademark of Intel Corporation.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

menu. A window is displayed that allows I 2 C operations, such as Read Byte and Write Byte .  The Read Byte operation is not used because the MAX5417L does not send data to the master. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer by unchecking the Automatic Diagnostics checkbox in the MAX5417L main program.

The I 2 C  dialog  boxes  accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 2 for an example of this tool. Figure 2 shows a simple SMBus™ write-byte operation using the included 2-wire interface diagnostics. In this  example, the software is writing data 0x4E to the register  address 0x11 (volatile memory) of the device with  device address 0x50. The above data sequence sets the wiper position of the MAX5417L to position 78.

## General Troubleshooting

## Problem: Software reports it cannot find the board.

- Is  the  CMODUSB command module power LED (LED1) lit?
- Is the USB communications cable connected?
- Has Windows plug-and-play detected the board? Bring up Control Panel, then System, then Device Manager, and look at what device nodes are indicated for USB. If there is an 'unknown device' node attached to the USB, delete it. This forces plug-andplay to try again.

## Problem: Unable to find device-under-test (DUT).

- Is power connected to the MAX5417L EV kit?
- Are the SCL and SDA signals pulled up to VDD through appropriate resistors (2.4k Ω typ)? The CMODUSB command module dip switch SW1 enables the on-board resistors. There must be pullup resistors somewhere on the I 2 C bus.
- If using jumper wires to connect, could the SCL and SDA signals be swapped? Could the ground return be missing?

## MAX5417L Evaluation Kit/Evaluation System

Figure 2. Simple SMBus Write-Byte Operation

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5417L Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX5417L EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5417L Evaluation Kit/Evaluation System

Figure 4. MAX5417L EV Kit Component Placement GuideComponent Side

<!-- image -->

8

Figure 5. MAX5417L EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5417L Evaluation Kit/Evaluation System

Figure 6. MAX5417L EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9