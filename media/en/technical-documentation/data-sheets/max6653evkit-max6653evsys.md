<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX6653 Evaluation System/Evaluation Kit

## General Description

The MAX6653 evaluation system (EV system) consists of a MAX6653 evaluation kit (EV kit) and a companion Maxim system management bus (SMBus) interface board.

The MAX6653 EV kit is an assembled and tested PC board that demonstrates the MAX6653 local/remote temperature sensor and fan-speed regulator. It monitors the junction temperature of an internal and external diode-connected transistor, and converts the temperature to 11-bit, 2-wire serial data. A 2N3906 temperaturesensor transistor comes soldered to the board in a SOT23 package, but it can be removed. The board can then be connected through a twisted pair to a remote diode close to your system.

The MAX6653 also incorporates a closed-loop fan controller that regulates fan speed with either an analog or digital tachometer feedback. Note: Use this EV kit data sheet in conjunction with the MAX6653/MAX6663/ MAX6664 data  sheet.  The  EV  kit  also  includes Windows ® 98/2000/XP-compatible software, which provides a professional user interface for exercising the MAX6653's features. The program is menu driven and offers  a  graphical  user  interface  (GUI)  complete  with control buttons and a status display.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate  an  SMBus  2-wire  interface.  Order  the MAX6653EVSYS for a complete IBM PC-based evaluation  of  the  MAX6653.  Order  the  MAX6653EVKIT if you already have an SMBus interface.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1, C2        |     2 | 1.0µF ± 20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105M |
| C3            |     1 | 0.01µF ± 20%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103M |
| C4            |     1 | 2200pF ± 20%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H222M |
| J1            |     1 | 2 x 10 right-angle female receptacle                              |
| J2            |     1 | 3-pin header                                                      |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- ♦ Measures and Displays Local and Remote Sensor Temperatures
- ♦ Controls Fan Speed
- ♦ Programmable Alarms and Configuration
- ♦ On-Board Signal Monitor
- ♦ Operating Temperature Ranges -40°C to +125°C (Remote Sensor) 0°C to +70°C (Board)
- ♦ SMBus/I2C-Compatible 2-Wire Serial Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Completely Assembled and Tested
- ♦ Includes Windows 98/2000/XP-Compatible Software and Demo PC Board
- ♦ Also Evaluates MAX6663/MAX6664

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   | SMBus INTERFACE TYPE   |
|--------------|--------------|--------------|------------------------|
| MAX6653EVKIT | 0°C to +70°C | 16 QSOP      | Not included           |
| MAX6653EVSYS | 0°C to +70°C | 16 QSOP      | MAXSMBUS               |

Note: To evaluate the MAX6663/MAX6664, request a MAX6663AEE/ MAX6664AEE free sample with the MAX6653EVKIT.

Note: The MAX6653 EV kit software is provided with the MAX6653EVKIT; however, the MAXSMBUS board is required to interface the EV kit to the computer when using the included software.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                            |
|--------------------|-------|--------------------------------------------------------------------------------------------------------|
| JU1, JU2, JU8      |     0 | Not installed                                                                                          |
| JU3, JU7           |     2 | Jumpers, 2-pin headers                                                                                 |
| JU4, JU5, JU6, JU9 |     4 | Jumpers, 3-pin headers                                                                                 |
| N1                 |     1 | N-channel 2.7A, 30V MOSFET (SOT23) Fairchild FDN359AN                                                  |
| Q1                 |     1 | PNP bipolar transistor (SOT23) Central Semiconductor CMPT3906 Diodes Inc. MMBT3906 Fairchild MMBT 3906 |

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX6653 Evaluation System/Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| R1-R8         |     8 | 10k Ω ± 5% resistors (0603)                                                  |
| R9            |     1 | 2 Ω ± 5%, 1/2W resistor (2010) Vishay-Dale CRCW-2010-2R0-J IRC WCR2010-2R0-J |
| R10           |     1 | 1k Ω ± 5% resistor (0603)                                                    |
| S1            |     1 | Slide switch                                                                 |
| U1            |     1 | Maxim MAX6653AEE (16-pin QSOP)                                               |
| U2            |     1 | Maxim MAX1609EEE (16-pin QSOP)                                               |
| None          |     6 | Shunts                                                                       |
| None          |     1 | MAX6653 PC board                                                             |
| None          |     1 | Software disk (CD ROM) MAX6653 evaluation kit                                |

## Quick Start

## Recommended Equipment

- Computer running Windows 98, 2000, or XP
- Parallel  printer  port  (This  is  a  25-pin  socket  on  the back of the computer.)
- Standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the Maxim SMBus interface board
- 12V/100mA DC power supply
- 5V/50mA DC power supply
- 500mA DC power supply rated at 5V or 12V, depending on the fan
- 5V or 12V fan rated up to 250mA (with optional digital tachometer output)

## Procedure

The MAX6653 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supplies until all connections are completed:

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6653 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together.
- 2) Make sure switch S1 is in the OFF position.
- 3) Ensure that a shunt is on pins 1-2 of jumpers JU6 and JU9.
- 4) Ensure that shunts are not installed on jumpers JU3, JU4, JU5, and JU7.
- 5) Connect a fan to either J2 or the FAN+, FAN-, and TACH/AIN pads. Note: If  a  fan  without  a  digital tachometer is being used, install a shunt on jumper JU3 and remove resistor R10.
- 6) Connect a cable from the computer's parallel port to  the  SMBus interface board. Use a straightthrough, 25-pin, female-to-male cable.
- 7) Use the INSTALL.EXE program on the provided CD ROM to copy the files and create icons in the Windows 98/2000/XP Start menu. Do not turn on the power until all connections are made.
- 8) Connect the 12V/100mA DC power supply to the pads labeled POS9 and GND1 of the SMBus interface board.
- 9) Connect the 5V/50mA DC power supply to the VCC and GND pads on the MAX6653 EV kit board.
- 10) Connect the fan power supply to the VFAN and GND pads.
- 11) Turn on the power supplies.
- 12) Turn on the EV kit by moving S1 to the ON position.
- 13) Start the MAX6653 program by opening its icon in the Start menu.
- 14) Observe as the program automatically detects the address of the MAX6653 and starts the main program. Note: The MAX6653 reads the address select pin at device power-up only.

## Detailed Description of Software

## User-Interface Panel

The user interface (shown in Figure 1) is easy to operate.  Use the mouse, or press the Tab key to navigate with the arrow keys. Each of the buttons corresponds to bits in the command and configuration bytes. By clicking on them, the correct SMBus write operation is generated to update the internal registers of the MAX6653. The Interface box indicates the current Device Type, Device Address, Register Address, and the Data Sent/Received, for  the  last  read/write  operation.  This data is used to confirm proper device operation. Device and manufacturer ID numbers are also shown.

The MAX6653 EV kit software splits and groups the functions of the MAX6653 into three separate categories: Temperature, Fan Control, and Configuration/ Status . These functions can be accessed by selecting the appropriate tab at the top left of the MAX6653 EV kit software main window.

The device status registers (refer to the MAX6653/ MAX6663/MAX6664 data sheet for status register information) are displayed in the Device Status panel at the

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6653 Evaluation System/Evaluation Kit

Figure 1. MAX6653 EV Kit Software Main Window (Fan Control Panel)

<!-- image -->

lower right of the main window. Click the Read Status button to force a status register read, or check the Automatic Read checkbox to automatically read the status registers every 250ms. To enable/disable the sleep mode of the MAX6653, check/uncheck the Enable Sleep Mode checkbox.

Note: Words in boldface are user-selectable features in the software.

## Temperature Controls

The MAX6653 EV kit software (Figure 1) allows the user to read the temperature ( Read Temp ), temperature limits  ( Read High Limit and Read Low Limit ),  and THERM/shutdown critical limits ( Read THERM and Read SHDN ). Alternatively, a number can be entered in the corresponding edit boxes to write to the appropriate register. Temperature offset can be read by clicking the Read Offset button. Enter a number in the offset edit box or move the slider to write to the offset register.

<!-- image -->

Temperature conversion rate is controlled by the Local and Remote Temperature Conversion Rate dropdown box. Temperature interrupt enables are controlled by the Enable Local Temp Interrupt and Enable Remote Temp Interrupt checkboxes.

## Fan Controls (Temperature) Automatic Mode

Selecting the Fan Control tab (Figure 2a) of the MAX6653 EV kit software allows the user to adjust all fan-related registers. Clicking the appropriate radio button in the Control Mode Selection panel can change the fan operating mode. Fan functions such as Spin-Up

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6653 Evaluation System/Evaluation Kit

Figure 2a. MAX6653 EV Kit Software Main Window (Fan Control Panel)

<!-- image -->

Time, Fan Filter ramp rate, PWM Output Frequency , and Minimum Fan Fail Speed can be adjusted by choosing the desired option from the respective dropdown box in the Fan Characteristics panel. When in this mode, the fan-fail speed is set by adjusting the slider on the Fan control tab. Enable the Spin-Up Time and Fan Filter ramp rate by checking the corresponding Enable checkbox.

Adjust the local and remote TMIN values by entering a number in their respective edit box or move the sliders until the desired value is reached. Adjust the local and remote TRANGE values by moving their respective sliders.  All  of  these  values  can  be  read  back  from  the device by clicking the appropriate Read button.

Fan Controls (Fan) Manual Modes If  either  the Manual (RPM Control) or Manual (PWM Control) is selected in the Control Mode Selection panel, the Fan Control tab is displayed (see Figure 2b). Depending on the mode of operation, the slider on the left-hand side either sets the Target Fan Speed (RPM control mode only) or the Fan Fail Speed (all other modes). To adjust the Target/Fan Fail Speed, move the Fan Fail Speed (RPM) slider  or  enter  a  number in the edit box below the slider. To adjust the PWM value, move the PWM slider or enter a number in the edit box below the slider (refer to the MAX6653/MAX6663/ MAX6664 data sheet for more details). Both values can be read back by pressing the corresponding Read button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6653 Evaluation System/Evaluation Kit

Figure 2b. MAX6653 EV Kit Software Main Window (Fan Control Panel)

<!-- image -->

## Configuration Controls

Selecting the Configuration/Status tab (Figure 3) of the MAX6653 EV kit software allows the user to adjust configuration features of the MAX6653. The fan tachometer type can be set by selecting TACH = Analog Input or TACH = Digital Input in  the  Fan  Configuration  panel. The MAX6653 tachometer input is enabled by checking the Enable TACH Input checkbox. The PWM output is enabled by checking the Enable PWM Output checkbox. The PWM output is inverted by checking the Invert PWM Output checkbox.

The interrupt output of the MAX6653 can be enabled or masked by checking the Enable INT Output or  the Mask INT checkbox, respectively. Enable the FAN FAULT output by checking the Enable FAN\_FAULT Output checkbox. Enable the SMBus timeout function by checking the Enable SMB Timeout checkbox.

<!-- image -->

Enable the THERM to full-speed function by checking the Enable THERM to Full Speed checkbox (refer to the  description  of  register  0x3F/bit  7  in  the  MAX6653/ MAX6663/MAX6664 data sheet for more details).

For a detailed description of these functions, refer to the MAX6653/MAX6663/MAX6664 data sheet.

## Status Bar

At the bottom of the MAX6653 EV kit software main window is a status bar that displays vital EV kit information. Figure 4 outlines the information that is displayed on the status bar. The status bar is updated every 250ms.

## Simple SMBus Commands

There are two methods for communicating with the MAX6653: Through the normal user-interface panel or

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6653 Evaluation System/Evaluation Kit

Figure 3. MAX6653 EV Kit Software Main Window (Configuration/Status)

<!-- image -->

through the SMBus commands available by selecting the 2-Wire Interface Diagnostic item from the Options pulldown menu. A display pops up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 5 for an example of this tool.  In  this  example,  the  software is  reading data (0x00) from Device Address 0x5D, Register Address 0x08. The sequence in Figure 5 reads the fan-speed register of the MAX6653.

Note: In places where the slave address asks for an 8bit  value,  it  must  be  the  7-bit  slave  address  of  the MAX6653 as determined by ADD with the last bit set to

6

1 for a read operation or a zero for a write. Refer to the MAX6653/MAX6663/MAX6664 data sheet for a complete list of registers and functions.

## Detailed Description of Hardware

The MAX6653 EV kit is an assembled and tested PC board that demonstrates the MAX6653 local/remote temperature sensor and fan-speed regulator. It monitors  the  junction  temperature of a local and external diode-connected transistor, and converts the temperature to 11-bit, 2-wire serial data.

A 2N3906 temperature-sensor transistor comes soldered to the board in a SOT23 package, but it can be removed to  enable using an off-board temperature sensor (see the Using an Off-Board Remote Sensor section).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6653 Evaluation System/Evaluation Kit

Figure 4. SMBus Status, Selected MAX6653 Signal Pins. See the MAX1609 Signal Monitor Section; Local/Remote Temperature and Fan-Speed Information Are Displayed on the Status Bar.

<!-- image -->

To ease evaluation, a MAX1609 is used to monitor selected signals of the MAX6653 (see the MAX1609 Signal Monitor section).

## Address Selection

Jumper JU6 sets the MAX6653 slave address. The default address is 0101 101Y (ADD = VDUT). See Table 1 for a complete list of addresses. The MAX6653 must undergo a power-on reset for the new address to become effective.

Note: The first 7 bits shown are the address. Y (bit 0) is the SMBus read/write bit. This bit is a 1 for a read operation or a zero for a write.

## Default Critical Limits

Jumpers JU4 and JU5 control the default critical limits of the MAX6653. These critical limits are directly linked to  the  local/remote  THERM and shutdown settings of the  MAX6653  (refer  to  the  MAX6653/MAX6663/ MAX6664 data sheet for more details). See Table 2 for critical limit shunt positions.

## Manual THERM Control

Jumper JU7 controls the manual THERM pulldown function of the MAX6653 EV kit. Removing the shunt from JU7 allows the THERM function to be controlled by an external signal source connected to the THERM pad. See Table 3 for shutdown shunt positions.

<!-- image -->

## Table 1. Shunts Settings for SMBus Address (JU6)

| SHUNT POSITION   | MAX6653 ADDRESS   | MAX6653 ADDRESS   | MAX6653 ADDRESS   |
|------------------|-------------------|-------------------|-------------------|
|                  | PIN               | BINARY            | HEXADECIMAL       |
| 1-2*             | VDUT              | 0101 101Y         | 0x5A              |
| 2-3              | GND               | 0101 100Y         | 0x58              |
| Not installed    | No connect        | 0101 110Y         | 0x5C              |

## Using an Off-Board Remote Sensor

The MAX6653 EV kit is capable of using an off-board remote temperature sensor. To use this feature, cut the trace at JU8 and install the remote sensor to the DXP and DXN pads.

## Using a Fan with a Tachometer Output

To use a fan with a tachometer output, remove the shunt from JU3 and connect the tachometer output of the fan to the TACH/AIN pad. Alternatively, the tachometer output can be connected to pin 2 of jack J2 (see the Fan Connector section). See Table 4 for digital tachometer shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6653 Evaluation System/Evaluation Kit

Figure 5. Simple SMBusReadByte Operation Using the Included 2-Wire Interface Diagnostics

<!-- image -->

## Table 2. THERM/Shutdown Default Critical Limits (JU4, JU5)

| SHUNT POSITION   | SHUNT POSITION   | DEFAULT THERM LIMIT ( o C)   | DEFAULT THERM LIMIT ( o C)   | DEFAULT SHUTDOWN LIMIT ( o C)   | DEFAULT SHUTDOWN LIMIT ( o C)   |
|------------------|------------------|------------------------------|------------------------------|---------------------------------|---------------------------------|
| JU4              | JU5              | LOCAL (0x16)                 | REMOTE (0x1A)                | LOCAL (0x1B)                    | REMOTE (0x1C)                   |
| 2-3              | OPEN             | 55                           | 85                           | 80                              | 110                             |
| 2-3              | 2-3              | 60                           | 90                           | 85                              | 115                             |
| 2-3              | 1-2              | 65                           | 95                           | 90                              | 120                             |
| OPEN*            | OPEN*            | 70                           | 100                          | 95                              | 125                             |
| OPEN             | 2-3              | 75                           | 105                          | 95                              | 125                             |
| OPEN             | 1-2              | 80                           | 110                          | 95                              | 125                             |
| 1-2              | OPEN             | 85                           | 115                          | 95                              | 125                             |
| 1-2              | 2-3              | 90                           | 120                          | 95                              | 125                             |
| 1-2              | 1-2              | 95                           | 125                          | 95                              | 125                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6653 Evaluation System/Evaluation Kit

Table 3. Manual THERM Control (JU7)

| SHUNT POSITION   | DESCRIPTION                                                    |
|------------------|----------------------------------------------------------------|
| Installed        | THERM pulled low                                               |
| Not installed*   | THERM pulled high or controlled with an external signal source |

## MAX1609 Signal Monitor

An on-board MAX1609 continuously monitors the SDR , SDL , FAN FAULT , and THERM signals of the MAX6653. To ensure that this device is always active, use switch S1 to enable/disable power to the MAX6653.

## Fan Connector

A fan may be connected to jack J2. See Table 5 for connector pinout information.

## Evaluating the MAX6663/MAX6664

To evaluate the MAX6663/MAX6664, remove the MAX6653 IC (U1) and replace it with a MAX6663AEE/ MAX6664AEE. Cut the trace between jumpers JU1 and JU2 and remove the shunts from JU4 and JU5.

After loading up the MAX6653 EV kit software, change the Device Type to MAX6663 or MAX6664. When using the MAX6663/ MAX6664, the SDR and SDL lines  are not monitored and the default THERM and shutdown

## Table 4. Tachometer Input Settings (JU3)

| SHUNT POSITION   | DESCRIPTION                                                   |
|------------------|---------------------------------------------------------------|
| Installed        | Fan does not have a tachometer output. (Remove resistor R10.) |
| Not installed*   | Fan has a tachometer output.                                  |

## Table 5. Fan Connector Pinout (J2)

|   PIN | SIGNAL           |
|-------|------------------|
|     1 | FAN+             |
|     2 | Tachometer input |
|     3 | FAN-             |

critical limit values cannot be changed through jumpers JU4 and JU5. Refer to the MAX6653/MAX6663/ MAX6664 data sheet for a complete description of partto-part differences.

## Using a High-Current Fan

The MAX6653 EV kit is capable of driving a high-current fan (greater than 0.5A) with minimal modifications. Replacing resistor R9 with a 0 Ω resistor  allows  up  to 1.0A fans to be used.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Inc.           | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild             | 888-522-5372 | N/A          | www.fairchildsemi.com |
| IRC                   | 361-992-7900 | 361-992-3377 | www.icrtt.com         |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay-Dale           | 402-564-3131 | 402-563-6296 | www.vishay.com        |

Note:

Please indicate that you are using the MAX6653 when contacting these component suppliers

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6653 Evaluation System/Evaluation Kit

Figure 6. MAX6653 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6653 Evaluation System/Evaluation Kit

<!-- image -->

Figure 7. MAX6653 EV Kit Component Placement GuideComponent Side

Figure 8. MAX6653 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 9. MAX6653 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 11