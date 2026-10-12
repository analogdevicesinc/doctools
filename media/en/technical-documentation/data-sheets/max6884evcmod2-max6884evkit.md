<!-- lastmod 2022-08-04 -->
## MAX6884 Evaluation System/ Evaluation Kit

## General Description

The MAX6884 evaluation system (EV system) consists of a MAX6884 evaluation kit (EV kit) and a Maxim CMOD232 command module. The MAX6884 EEPROMconfigurable, multivoltage  supply  supervisor  monitors  six  voltagedetector inputs and an auxiliary input. The MAX6884 also features  programmable  outputs  for  highly  configurable power-supply  supervisory  applications.  The  evaluation software  runs  under  Windows ® 98/2000/XP,  providing a  handy  user  interface  to  exercise  the  features  of  the MAX6884.

Order  the  complete  EV  system  (MAX6884EVCMOD2) for  comprehensive  evaluation  of  the  MAX6884  using  a personal computer. Order the EV kit (MAX6884EVKIT) if the command module has already been purchased with a previous Maxim EV system, or for custom use in other μC-based systems.

## MAX6884 Stand-Alone EV Kit

The MAX6884 EV kit provides a proven PC board layout to facilitate evaluation of the MAX6884. It must be interfaced to appropriate timing signals for proper operation. Connect 3.3V power, ground-return, and SCL/SDA interface signals to the breakout header pins (see Figure 8). The  LEDs  are  optional  circuits,  which  can  be  powered separately or disabled altogether. Refer to the MAX6884 data sheet for timing requirements.

## MAX6884 EV System

The evaluation software runs under Windows 98/2000/XP on an IBM PC, interfacing to the EV system board through the computer's serial communications port. See the Quick Start section for setup and operating instructions.

Windows is a registered trademark of Microsoft Corp. SMBus is a trademark of Intel Corp.

Evaluate: MAX6884/MAX6885

## Features

- ● Proven PC Board Layout
- ● I 2 C-Compatible 2-Wire Serial Interface
- ● Easy-to-Use Menu-Driven Software
- ● Assembled and Tested
- ● Includes Windows 98/2000/XP-Compatible Software and Demo PC Board
- ● Also Evaluate MAX6885

## Ordering Information

| PART           | TEMP RANGE    | IC- PACKAGE   | I 2 C INTERFACE TYPE   |
|----------------|---------------|---------------|------------------------|
| MAX6884EVKIT#  | 0°C to +70°C° | 20 TQFN       | User Supplied          |
| MAX6884EVCMOD2 | 0°C to +70°C  | 20 TQFN       | CMOD232                |

#Denotes RoHS compliant with exemption.

Note: To evaluate the MAX6885, request a MAX6885ETP free sample with the MAX6884EVKIT.

The MAX6884 EV kit software is provided with the MAX6884 EV kit; however, the CMOD232 board is required to interface the EV kit to the computer when using the included software.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1-C6         |     6 | 0.1µF ±20%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104M  |
| C8, C9        |     2 | 1.0µF ±20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M |
| D1, D2, D3    |     3 | Green surface-mount LEDs (SS)                                     |
| J1-J4         |     4 | 5-pin headers (cut to fit)                                        |
| J5            |     1 | 2 x 10 right-angle female receptacle                              |
| JU1-JU4       |     4 | Jumper, 3-pin headers                                             |
| JU5           |     1 | Jumper, 2-pin header                                              |
| R1, R2, R3    |     3 | 620Ω ±5% resistors (1206)                                         |
| R4, R5, R6    |     3 | 10kΩ ±5% resistors (0603)                                         |
| R7, R8        |     0 | Not installed, resistors (0603)                                   |
| SW1           |     1 | Momentary pushbutton switch (NO)                                  |
| U1            |     1 | Maxim MAX6884ETP (20-pin TQFN 5mm x 5mm)                          |
| None          |     5 | Shunts                                                            |
| None          |     1 | MAX6884 PC board                                                  |
| None          |     1 | Software disk (CD-ROM), MAX6884 evaluation kit                    |

<!-- image -->

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate that you are using the MAX6884/MAX6885 when contacting this component supplier.

## Quick Start

## Recommended Equipment

- ● Maxim MAX6884EVCMOD2 (contains MAX6884 EV kit board and CMOD232 module)
- ● DC power supply, 9VDC at 200mA (included with CMOD232 module)
- ● Computer running Windows 98, 2000, or XP with a spare serial (COM) port
- ● Standard 9-pin, straight-through , male-to-female cable (serial extension cable) to connect the computer's serial port to the Maxim command module interface board
- ● DC power supply, 3.3V at 100mA

## Procedure

The  MAX6884  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation. Do not turn  on  the  power  supply  until  all  connections  are completed:

## Command Module Setup

- 1) Enable  the  SDA/SCL  pullup  resistors  on  the  command module by setting both switches (SW1) to the on position.
- 2) Set  the  command  module  working  voltage  to  3.3V by placing a shunt across pins 1-2 of the VDD select jumper (J1).
- 3) Connect  a  cable  from  the  computer's  serial  port  to the  command  module  (CMOD232)  interface  board. Use a straight-through 9-pin male-to-female cable. To avoid damaging the EV kit or your computer, do not use a 9-pin null-modem cable or any other proprietary interface cable that is physically similar to the straight-through cable.
- 4) Connect the provided wall cube power supply to the CMOD232 board.

## EV Kit Setup

- 5) Ensure that the I 2 C address of the MAX6884 is set to 0xA0h by verifying that a shunt is placed across pins 2-3 of jumper JU4.
- 6) Ensure that shunts are installed across pins 2 and 3 of jumpers JU1, JU2, and JU3.
- 7) Ensure that a shunt is NOT installed on jumper JU5.
- 8) Connect the 3.3V DC power supply to the VLED and GND pads.
- 9) Connect the 3.3V DC power supply to the VCC and GND pads.
- 10)  Carefully align the 20-pin connector of the MAX6884 EV kit with the 20-pin header of the CMOD232 interface board. Gently press them together.
- 11)  The  MAX6884.EXE  software  program  can  be  run from the CD-ROM or hard drive. Use the INSTALL. EXE program to copy the files and create icons in the Windows 98/2000/XP Start menu.
- 12)  Plug the CMOD232 wall cube into an electrical outlet.
- 13)  Turn on the 3.3V power supply.
- 14)  Start the MAX6884 program by opening its icon in the Start menu.
- 15)  Normal  device  operation  can  be  verified  by  the 'Status:  MAX6884 Operational' text in the interface box.

## Detailed Description of Software

## Main Window

The  evaluation  software's  main  window  (Figure  1)  consists of an Interface diagnostic box, an ADC Conversion Results box, the MAX6884 Control Tabs (see below) and some system-level controls.

The Interface box indicates the current Device information, the Register address, I 2 C SCL Speed , and the Data sent or received for the last read/write operation. Select the installed device Part # and Address using the appropriate  controls.  The  double  arrows  (&gt;&gt;  or  &lt;&lt;)  indicate the direction of the data flow; where &gt;&gt; indicates that the master (CMOD232 board) device is transmitting data to the  slave  (MAX6884)  and  &lt;&lt;  indicates  that  the  master device is receiving data from the slave.

The software polls the checked ADC conversion registers of  the  MAX6884  every  500ms.  To  stop  reading  these registers, uncheck the appropriate checkbox in the ADC Conversion Results section  of  the  MAX6884 software. Select the desired reference type ( Internal or External ) from the Reference drop-down box. Enter the reference

Evaluate: MAX6884/MAX6885

Evaluate: MAX6884/MAX6885

Figure 1. MAX6884 EV Kit Software Main Window

<!-- image -->

Figure 2. MAX6884 EV Kit Software Status Bar

<!-- image -->

voltage  in  the  adjacent  box  when  using  the External reference feature.

The  MAX6884  EV  kit  software  continuously  polls  the MAX6884 to make sure the two boards have not become inadvertently  disconnected.  An  undesired  result  of  this polling is constant activity on the I 2 C-compatible bus. This feature may make it difficult to monitor the I 2 C-compatible bus for desired bit patterns. Disable this feature by checking the Silence I 2 C Bus Activity checkbox.

Automatic Diagnostics are  required to ensure that the CMOD232  board  does  not  become  disconnected  from the PC. Disable this function by resetting the Automatic Diagnostics checkbox.

Click  the Reboot button  to  initiate  a  software  reboot. Force  the  MAX6884  to  draw  power  from  the  VCC  pin (instead of an IN\_ pin) by checking the Power MAX6884 from VCC checkbox.

WARNING: Improper use of the Power MAX6884 from VCC checkbox may cause damage to the device and EV kit. Refer to the Powering the MAX6884/MAX6885 section in the MAX6884/MAX6885 data sheet for details on how to correctly apply power to the MAX6884.

## Status Bar

The status bar (Figure  2)  displays  the  MAX6884  status information and is updated every 500ms. Disable status reads by unchecking the Automatic Status Read checkbox.  Force  a  manual  status  read  by  clicking  the Read Status button.

When a voltage monitor detects that the (A) or (B) threshold is crossed, a fault condition is asserted. This fault register status is displayed in the status bar. V2A\_ indicates that IN2 is under its A threshold, V3\_B indicates that IN3 has crossed its B threshold, and V6AB indicates that IN6 has crossed both its A and B thresholds.

│

Evaluate: MAX6884/MAX6885

Figure 3. MAX6884 EV Kit Software Outputs Tab

<!-- image -->

If an output is asserted, that output is also displayed in the status bar. RESET indicates that the RESET output has been asserted. UV/OV indicates  that  the UV / OV output has  been  asserted. WDO indicates  that  the  watchdog timer output has been asserted.

## Voltage Monitor Tab

The Voltage  Monitor tab  (Figure  1)  configures  voltage  monitor  thresholds  and  input  impedance  for  the MAX6884 IN1-IN6 inputs. Adjust the Range dropdown, 'A' Primary Threshold , and 'B' Secondary Threshold controls until the desired thresholds are set.

Press the Refresh button to read the current values from the MAX6884. Press the Apply button to send the software value to the MAX6884.

## Outputs Tab

The outputs of the MAX6884 are triggered by the logical AND  of  the  selected  control  inputs.  Select  the  control inputs  from  the Output  Configuration box  (Figure  3). Choose the output pin to modify from the Programmable Output Pin drop-down on the Outputs tab. Choose the Output Type and De-glitch Timer Delay from the Output Characteristics box.

Press the Refresh button to read the current values from the MAX6884. Press the Apply button to send the software values to the MAX6884.

## Watchdog Timer Tab

A watchdog timer asserts a fault condition after a period of time, unless the timer is periodically reset by the WDI input  pin  being  toggled. This  fault  register  status  is  displayed in the status bar as WDO . Configure the watchdog timer settings from the Watchdog Timer tab (Figure 4).

During  normal  operation,  an  enabled  watchdog  timer must  be  serviced  by  toggling  the  WDI  pin  periodically ( 'A'  timeout  duration ).  Typically  an  external  piece  of firmware services the watchdog timer by toggling the WDI pin inside a loop, and watchdog timer assertion is configured to drive an output pin. Any software defect that halts the firmware then causes the watchdog timer to assert.

The initial timeout period ( 'B' timeout duration ) can be set to a longer value to allow time for software initialization. Enable the watchdog timer by checking the Enable Watchdog  Timer checkbox.  The  desired Output  Type can also be programmed.

│

Evaluate: MAX6884/MAX6885

Figure 4. MAX6884 EV Kit Software Watchdog Timer Tab

<!-- image -->

Press the Refresh button to read the current values from the MAX6884. Press the Apply button to send the software values to the MAX6884.

## Registers Tab

The Registers tab (Figure 5) displays the MAX6884 volatile  working  registers  and  their  corresponding  EEPROM value.  Pressing Refresh reads  and  displays  all  register and  EEPROM  values.  Individual  register  bytes  can  be modified by selecting the appropriate grid cell and typing two hexadecimal digits 0-9/A-F.

At power-up, the MAX6884 automatically loads its registers from the configuration EEPROM page. To store the active  register  values  into  the  configuration  EEPROM, press Commit to EEPROM . Prevent any software modifications  to  the  configuration  registers  and  configuration EEPROM by checking  the Lock  Configuration checkbox.  Reset  the Confirm Write checkbox  to  disable  the register write confirmation.

Register values can optionally be stored into a text file on disk for later retrieval, using the Load Reg Values from File and Save Reg Values to File buttons.

## EEPROM Tab

The EEPROM tab  (Figure  6)  displays  the  nonvolatile EEPROM memory contents  of  the  MAX6884.  Pressing Refresh reads  and  displays  the  EEPROM  contents  on the  GUI.  Individual  memory  bytes  can  be  modified  by selecting  the  appropriate  grid  cell  and  typing  two  hexadecimal digits 0-9/A-F.

To disregard user EEPROM (0x40h to 0x7Fh) writes when the UV / OV or RESET outputs  are  asserted,  check the EEPROM Write Depends on UV/OV or EEPROM Write Depends on RESET checkboxes. Refer to the MAX6884 data  sheet  for  more  details.  Reset  the Confirm  Write checkbox to disable the EEPROM write confirmation.

EEPROM values can optionally be stored into a text file on disk for later retrieval, using the Load from File and Save to File buttons.

## Simple I 2 C Commands

There  are  two  methods  for  communicating  with  the MAX6884:  through  the  normal  user-interface  panel  or through  the  I 2 C  commands  available  by  selecting  the 2-Wire Interface Diagnostic item from the Options pulldown menu. A window is displayed that allows I 2 C operations, such as Read Byte and Write Byte, to be executed. To  stop  normal  user-interface  execution  so  that  it  does not override the manually set values, turn off the update timer  by  unchecking  the Automatic  Status  Read and Automatic Diagnostics checkboxes.

│

Figure 5. MAX6884 EV Kit Software Registers Tab

<!-- image -->

Figure 6. MAX6884 EV Kit Software EEPROM Tab

<!-- image -->

## MAX6884 Evaluation System/ Evaluation Kit

Evaluate: MAX6884/MAX6885

Figure 7. The above example shows a simple SMBusWriteByte operation using the included 2-Wire Interface Diagnostics. In this example, the software is writing data (0x12) to Device Address 0xA4, Register Address 0x00. This will set the primary undervoltage threshold for IN1A.

<!-- image -->

The I 2 C dialog boxes accept numeric data in binary, decimal,  or  hexadecimal.  Hexadecimal  numbers  should  be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 7 for an example of this tool.

Note: In places where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX6884 as determined by ADD, with the last bit set to 1 for a read operation or a zero for a write. Refer to the MAX6884 data sheet for a complete list of registers and functions.

## Detailed Description of Hardware

The  MAX6884  (U1)  is  surrounded  by  breakout  header pins  J1-J4.  The  user  power-supply  inputs  IN1-IN6  are bypassed by capacitors C1-C6. Apply a 3.3V LED supply (optional) to the VLED and GND pads. Apply a V CC supply (optional) to the VCC and GND pads. Monitor the MAX6884 outputs at the RESET , UV / OV , and WDO pads. Apply a watchdog timer input at the WDI pad. A pushbutton switch (SW1) controls the manual reset input.

## Address Selection

Jumper JU4 sets the MAX6884 I 2 C slave address. The default address is 1010 01XY (ADD = GND). See Table 1 for a complete list of addresses.

Note: The first 7 bits shown are the address. Y (bit 0) is the I 2 C read/write bit. This bit is a 1 for a read operation or a zero for a write.

## Table 1. Shunt Settings for I 2 C Address (JU4)

X = Don't care (refer to MAX6884 data sheet for more details). *Default configuration: JU4 (2-3).

| SHUNT POSITION   | MAX6884 ADDRESS PIN   | MAX6884 ADDRESS   | MAX6884 ADDRESS   |
|------------------|-----------------------|-------------------|-------------------|
| SHUNT POSITION   | MAX6884 ADDRESS PIN   | BINARY            | HEXADECIMAL       |
| 1-2              | VCC                   | 1010 01XY         | 0xA4 or 0xA6      |
| 2-3*             | GND                   | 1010 00XY         | 0xA0 or 0xA2      |

│

## MAX6884 Evaluation System/ Evaluation Kit

## LED Indicator Control

The outputs ( RESET , UV / OV , and WDO ) of the MAX6884 are connected to some general output circuitry. Jumpers JU1, JU2, and JU3, respectively, connect the outputs to either a pullup resistor attached to VLED or an LED indicator. See Table 2 for jumper settings.

## Table 2. Output Control Circuitry (JU1, JU2, JU3)

| SHUNT POSITION   | DESCRIPTION                       |
|------------------|-----------------------------------|
| 1-2              | Output pulled up to VLED          |
| 2-3*             | Output connected to LED indicator |

*Default configuration: JU1 (2-3), JU2 (2-3), JU3 (2-3).

## MARGIN Input

The MARGIN input of the MAX6884 allows system testing when voltages are outside their normal ranges. JU5 controls this feature. It is expected that during normal operation the MARGIN function will be disabled. See Table 3 for jumper settings.

## Evaluate: MAX6884/MAX6885

## Table 3. MARGIN Input (JU5)

| SHUNT POSITION   | DESCRIPTION                                     |
|------------------|-------------------------------------------------|
| Not Installed*   | Normal operation                                |
| Installed        | RESET , UV / OV , and WDO outputs held constant |

*Default configuration: JU5 (not installed).

## Evaluating the MAX6885

The  MAX6884  EV  kit  is  also  capable  of  evaluating  the I 2 C-compatible  MAX6885.  To  evaluate  the  MAX6885 replace  the  MAX6884  (U1)  with  a  MAX6885ETP  free sample.  Select  the  MAX6885  option  from  the Device, Part  # control  located  in  the Interface box  on  the MAX6884 EV kit software.

## Using an Alternative I 2 C Interface

The MAX6884 EV kit provides pads and pullup resistor placeholders  that  allow  an  alternative  I 2 C-compatible interface  to  be  used.  Connect  the  interface  through  the SCL, SDA, and GND pads. Install pullup resistors at positions R7 and R8 if required.

│

Figure 8. MAX6884 EV Kit Schematic

<!-- image -->

## MAX6884 Evaluation System/ Evaluation Kit

Figure 9. MAX6884 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluate: MAX6884/MAX6885

Figure 10. MAX6884 EV Kit PC Board Layout-Component Side

<!-- image -->

│

## MAX6884 Evaluation System/ Evaluation Kit

Figure 11. MAX6884 EV Kit PC Board Layout-Solder Side

<!-- image -->

## Evaluate: MAX6884/MAX6885

Figure 12. MAX6884 EV Kit Component Placement GuideSolder Side

<!-- image -->

│

## MAX6884 Evaluation System/ Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 6/05            | Initial release                    | -               |
|                 1 | 1/21            | Updated Ordering Information table | 1               |
|                 2 | 3/21            | Updated Ordering Information table | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX6884/MAX6885