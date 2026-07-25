<!-- lastmod 2022-08-04 -->
## MAX6870 Evaluation Kit/ Evaluation System

## General Description

The MAX6870 evaluation system (EV system) consists of a MAX6870 evaluation kit (EV kit) and a Maxim CMAXQUSB command module. The MAX6870 EEPROM-configurable, multivoltage  supply  sequencer/supervisor  monitors  several voltage-detector inputs, two auxiliary inputs, and four general-purpose logic inputs, and features programmable outputs  for  highly  configurable  power-supply  sequencing  applications.  The  evaluation  software  runs  under Windows ®  98/2000/XP, providing a handy user interface to exercise the features of the MAX6870.

Order the complete EV system (MAX6870EVCMAXQU) for  comprehensive  evaluation  of  the  MAX6870  using  a PC. Order the EV kit (MAX6870EVKIT) if the command module  has  already  been  purchased  with  a  previous Maxim EV system, or for custom use in other μC-based systems.

This system can also evaluate the MAX6871-MAX6875. Contact  factory  for  a  free  sample  of  MAX6871ETJ, MAX6872ETJ, MAX6873ETJ, MAX6874ETJ, or MAX6875ETJ.

## MAX6870 Stand-Alone EV Kit

The MAX6870 EV kit provides a proven PC board layout to facilitate evaluation of the MAX6870. It must be interfaced to appropriate timing signals for proper operation. Connect  power,  ground  return,  and  SCL/SDA  interface signals to the breakout header pins (see Figure 9). The LEDs and load-switching FETs are optional circuits, which can be powered separately or disabled altogether. Refer to the MAX6870 data sheet for timing requirements.

## MAX6870 EV System

The  MAX6870  evaluation  system  software  runs  under Windows 98/2000/XP on an IBM-compatible PC, interfacing to the EV system board through the computer's USB port. See the Quick Start section for setup and operating instructions.

Windows is a registered trademark of Microsoft Corp.

Evaluate: MAX6870-MAX6875

## Features

- Proven PC Board Layout
- Complete Evaluation System
- Convenient On-Board Test Points
- Fully Assembled and Tested

## Ordering Information

The MAX6870 EV software is designed for use with the complete  EV  system  MAX6870EVCMAXQU  (includes CMAXQUSB module together with MAX6870EVKIT).

| PART             | TEMP RANGE   | INTERFACE TYPE        |
|------------------|--------------|-----------------------|
| MAX6870EVCMAXQU# | 0°C to +70°C | Windows software, USB |

## Parts List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6870EVKIT |     1 | MAX6870 evaluation kit |
| CMAXQUSB     |     1 | Command module         |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF, 6.3V X7R ceramic capacitors (0603) TDK C1608X7R0J105K                                                                               |
| C3-C7         |     5 | 0.1µF, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K                                                                              |
| C8            |     0 | Open (0603)                                                                                                                              |
| JU1-JU8       |     8 | 3-pin headers                                                                                                                            |
| JU9-JU14      |     0 | Open                                                                                                                                     |
| H1-H4         |     4 | 8-pin headers                                                                                                                            |
| D1            |     1 | 30V, 200mA Schottky diode (SOT23) Zetex BAT54CTA common cathode Diodes Incorporated BAT54C Fairchild BAT54C General Semiconductor BAT54C |

<!-- image -->

## MAX6870 Evaluation Kit/ Evaluation System

## Component List (continued)

| DESIGNATION                           |   QTY | DESCRIPTION                                              |
|---------------------------------------|-------|----------------------------------------------------------|
| LED1-LED4, LED9, LED12, LED14, LED15  |     8 | Red LEDs (T1-3/4)                                        |
| LED5-LED8, LED10, LED11, LED13, LED16 |     8 | Green LEDs (T1-3/4)                                      |
| P1                                    |     1 | 2 x 10 right-angle receptacle                            |
| Q1-Q4                                 |     4 | Logic-level FETs, 2.7A at 30V (SOT23) Fairchild FDN359AN |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX            | WEBSITE               |
|-----------------------|--------------|----------------|-----------------------|
| Diodes Inc            | 805-446-4800 | 805-446-4850   | www.diodes.com        |
| Fairchild             | 888-522-5372 | Local rep only | www.fairchildsemi.com |
| General Semiconductor | 760-804-9258 | 760-804-9259   | www.gensemi.com       |
| TDK                   | 847-803-6100 | 847-390-4405   | www.component.tdk.com |
| Zetex USA             | 631-543-7100 | 631-864-7630   | www.zetex.com         |

Note: Indicate you are using the MAX6870 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- Maxim MAX6870EVCMAXQU (contains MAX6870 EV kit board and CMAXQUSB module)
- Windows 98/2000/XP computer with a spare serial (COM) port
- 9-pin I/O extension cable.

## Procedure

## Do  not  turn  on  the  power  until  all  connections  are made:

- 1) Ensure that JU-1-JU-8 are in the 1-2 position. Jumper sites JU-9-JU-14 are empty. See the Jumper Function Tables section.
- 2) Select 3.3V or 5.0V logic by setting the CMAXQUSB VDD\_SELECT Jumper.
- 3) Carefully  connect the boards by aligning the 20-pin header of the MAX6870 EV kit with the 20-pin connector of the CMAXQUSB module. Gently press them together. The two boards should be flush against one another.
- 4) Install  the  evaluation  software  on  your  computer by running the INSTALL.EXE program on the disk. The program  files  are  copied  and  icons  are  created  for them in the Windows Start menu.
- 5) Connect  the  USB  cable  between  the  CMAXQUSB and the computer. When you plug in the CMAXQUSB board  for  the  first  time,  the  windows  plug-and-play system  detects  the  new  hardware  and  automatically  runs  the  Add  New  Hardware  Wizard.  (If  the Add New Hardware Wizard does not appear after a minute, unplug the board from the USB and plug it in  again.)  Make  certain  to  specify  the  search  location.  Maxim  software  designed  for  CMAXQUSB includes a copy of the device driver in the installed software  directory.  Refer  to Application  Note  3601: Troubleshooting  Windows  Plug-and-Play  and  USB for Maxim Evaluation Kits for more details.
- 6) During device driver installation, Windows XP shows a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition. It is safe to proceed with the installation.
- 7) Start the MAX6870 program by opening its icon in the Start menu.

│

Evaluate: MAX6870-MAX6875

| DESIGNATION   |   QTY | DESCRIPTION                |
|---------------|-------|----------------------------|
| R1, R2        |     2 | 100kΩ ±5% resistors (0805) |
| R3-R18        |    16 | 1kΩ ±5% resistors (0805)   |
| R19           |     1 | 100Ω ±5% resistor (0805)   |
| U1            |     1 | MAX6870ETJ (32-pin QFN)    |
| None          |     8 | Shunts                     |
| None          |     1 | PC board, MAX6870 EV kit   |

## MAX6870 Evaluation Kit/ Evaluation System

- 8) After  the  software  locates  the  CMAXQUSB  module and the MAX6870EVKIT board, the software polls the device status, updating the status bar.

## Detailed Description of Software

## Main Window

The  evaluation  software's  main  window  shows  a  block diagram of the MAX6870, with many clickable features. Clicking on different parts of the block diagram leads to different feature tabs. Clicking Back returns to the main window's block diagram tab.

Configuration  register  changes  made  with  the  GUI  are written when the Apply button is clicked. Configuration of the device may be reread by clicking Refresh .

Press function key F1 at any time to return to the block diagram  tab  sheet.  Press  function  key  F2  to  pop  up  a window  displaying  registers  pertinent  to  the  selected feature. The software reads the data registers automatically, unless disabled by unchecking poll inputs every 2s under the options menu.

At startup, the evaluation software reads the device configuration from the device registers.

## Voltage Monitor Tab

The voltage  monitor tab  configures  voltage  monitor thresholds, selects the internal or external reference voltage (if applicable), and displays ADC conversion results (if applicable).

To configure one of the IN1-IN6 pins as a window comparator,  first  set  the  primary  threshold  (A)  to  the  lower limit,  then  set  the  secondary  threshold  (B)  to  the  upper limit, and finally, configure the secondary threshold (B) as an overvoltage detector. When configuring a PO\_output to  respond  to  this  fault  as  a  window  comparator,  select both the A and the B thresholds.

When a voltage monitor detects the (A) or (B) threshold is crossed, a fault condition is asserted. This fault register status is displayed in the status bar. V2A\_ indicates that IN2 is under its A threshold, V3\_B indicates that IN3 has crossed its B threshold, and V6AB indicates that IN6 has crossed both its A and B thresholds.

The software uses the reference voltage value to calculate the threshold and ADC voltages.

The MAX6870 and MAX6871 include an analog-to-digital converter  (ADC).  The  software  automatically  reads  and displays  channels  selected  under ADC  Conversion Results .

## Evaluate: MAX6870-MAX6875

## Digital Inputs Tab

Digital  inputs  GPI1-GPI4  can  be  configured  for  activehigh or active-low logic. When a GPI\_ pin is configured active high, a logic-high level asserts the corresponding GPI\_ condition in the fault register. This fault register status is displayed in the status bar.

## Outputs Tab

The PO\_ signals assert when a selected combination of other signals become asserted. Some PO\_ signals allow only  a  single  combination  (i.e.,  a  single  product  term), while  other  PO\_  signals  can  be  asserted  by  two  different combinations (i.e., a sum of two product terms). The voltage  monitors  and  the  watchdog  timers  are  internal signals. The GPI\_ pins are external inputs. Additionally, one PO\_ signal may depend on another PO\_.

When  a  PO\_  signal  is  asserted,  several  actions  can occur.  The  corresponding  PO\_  pin  can  be  driven  to  a high or low logic level. The pin driver can be configured as an open-drain or as a push-pull output. When in pushpull  mode,  several  system  power-supply  voltages  are available, including some charge-pump voltages that are higher than the IN\_ voltages.

The user EEPROM pages can optionally be locked out when the PO\_ is asserted.

The manual reset ( MR ) input forces the PO\_ signal to its asserted  state.  A  programmable  output  cannot  depend solely on MR .  Refer to the MR section of the MAX6870 data sheet.

The MARGIN signal allows user system testing by forcing the PO\_ signal to a logic-high or logic-low state, or holding the previously determined state. It is generally expected that MARGIN will be high during normal operation.

## Watchdog Timers Tab

A watchdog timer asserts a fault condition after a period of time, unless the timer is periodically reset by an input pin being toggled. This fault register status is displayed in the status bar as WD1 or WD2.

During normal operation, an enabled watchdog timer must be serviced by toggling a GPI pin periodically. Typically, an external piece of firmware services the watchdog timer by toggling a GPI pin inside a loop, and watchdog timer assertion  is  configured  to  drive  a  PO\_  output  pin.  Any software defect that halts the firmware then causes the watchdog timer to assert.

The initial  timeout  period  can  be  set  to  a  longer  value  to allow time for software initialization. Alternatively, the watchdog timer can be held in reset by an optional clear input.

Refer  to  the  MAX6870  data  sheet  for  more  information about watchdog timer operation.

## MAX6870 Evaluation Kit/ Evaluation System

## Registers Tab

The Registers tab displays the volatile working registers of the MAX6870. Pressing Refresh reads and displays all register values. Individual register bytes can be modified by  selecting  the  appropriate  grid  cell  and  typing  zero-x prefix (0x) followed by two hexadecimal digits 0-9/A-F. If options menu item Confirm REG Write when editing is checked, a dialog box appears to confirm each byte written in this manner.

At power-up, the MAX6870 automatically loads its registers from the configuration EEPROM page. To store the active  register  values  into  the  configuration  EEPROM, press Commit to EEPROM . The Re-load from EEPROM command sends 88h, rebooting the MAX6870.

Register values can optionally be stored into a text file on disk for later retrieval, using the Load from File and Save to File buttons.

## EEPROM Tab

The EEPROM tab  displays  the  nonvolatile  EEPROM memory pages of the MAX6870. Pressing Refresh reads and  displays  the  selected  EEPROM  page.  Individual memory bytes  can  be  modified  by  selecting  the  appropriate  grid  cell  and  typing  zero-x  prefix  (0x)  followed  by two  hexadecimal  digits  0-9/A-F.  If options menu  item Confirm  EEPROM  Write  when  editing is  checked,  a dialog  box  appears  to  confirm  each  byte  written  in  this manner.

EEPROM values can optionally be stored into a text file on disk for later retrieval, using the Load from File and Save to File buttons.

## Detailed Description of Hardware

The  MAX6870  (U1)  is  surrounded  by  breakout  header pins  H1-H4.  Two  internally  generated  voltage  sources are bypassed by capacitors C1 and C2. The user powersupply inputs IN1 and IN3-IN6 are bypassed by capacitors C3-C7.

If an external reference is used, capacitor site C8 should be loaded with a suitable bypass capacitor. Otherwise, C8 can be left open.

## Evaluate: MAX6870-MAX6875

Connector  P1  mates  with  the  CMAXQUSB  module, which enables communication with software running on a PC. (There are SCL/SDA pullup resistors on the module board.) As a convenience, the module also provides 5V DC power to U1 through D1, R19, and jumper JU13. This same 5VDC power supply also powers most of the EV kit LEDs through jumper JU14.

Programmable outputs PO1-PO4 drive an optional loadswitching  demonstration  circuit.  User-provided  power supplies at IN3-IN6 can drive loads OUT3, OUT4, OUT5, and OUT6. The circuit can be demonstrated using LED10, LED11, LED13, LED16 as onboard loads, or by connecting external loads to the OUT3-OUT6 oval pads. Q1-Q4 are susceptible to ESD damage if gates are left floating.

Programmable  outputs  PO5-PO8  can  be  configured  to drive LED indicators.

## Evaluating the MAX6871-MAX6875

With power  off, replace  U1  with  a  MAX6871ETJ, MAX6872ETJ, MAX6873ETJ, MAX6874ETJ, or MAX6875ETJ.  The  software  automatically  detects  the device type and disables unused features accordingly.

## Diagnostics Window

The diagnostics window is used for factory testing prior to shipping the evaluation kit. It is not meant for customer use.

## Jumper Function Tables

Tables 1-13 are jumper function tables.

## Table 1. Jumper JU1

| JU1 SHUNT POSITION   | FUNCTION                                                               |
|----------------------|------------------------------------------------------------------------|
| Open                 | PO1 available for user circuitry. LED11, LED12, OUT3, Q2 disconnected. |
| 1-2                  | PO1 low lights LED12; Q2 gate is left floating.                        |
| 2-3*                 | PO1 high turns on Q2, connecting OUT3to IN3. LED11 lights if IN3 > 3V. |

*Indicates default configuration, set by an installed shunt.

│

## MAX6870 Evaluation Kit/ Evaluation System

## Table 2. Jumper JU2

| JU2 SHUNT POSITION   | FUNCTION                                                                |
|----------------------|-------------------------------------------------------------------------|
| Open                 | PO2 available for user circuitry. LED9, LED10, OUT4, Q1 disconnected.   |
| 1-2                  | PO2 low lights LED9; Q1 gate is left floating.                          |
| 2-3*                 | PO2 high turns on Q1, connecting OUT4 to IN4. LED10 lights if IN4 > 3V. |

## Table 3. Jumper JU3

| JU3 SHUNT POSITION   | FUNCTION                                                                |
|----------------------|-------------------------------------------------------------------------|
| Open                 | PO3 available for user circuitry. LED14, LED13, OUT5, Q3 disconnected.  |
| 1-2                  | PO3 low lights LED14; Q3 gate is left floating.                         |
| 2-3*                 | PO3 high turns on Q3, connecting OUT5 to IN5. LED13 lights if IN5 > 3V. |

## Table 4. Jumper JU4

| JU4 SHUNT POSITION   | FUNCTION                                                                |
|----------------------|-------------------------------------------------------------------------|
| Open                 | PO4 available for user circuitry. LED15, LED16, OUT6, Q4 disconnected.  |
| 1-2                  | PO4 low lights LED15; Q4 gate is left floating.                         |
| 2-3*                 | PO4 high turns on Q4, connecting OUT6 to IN6. LED16 lights if IN6 > 3V. |

## Table 5. Jumper JU5

| JU5 SHUNT POSITION   | FUNCTION                                                                                          |
|----------------------|---------------------------------------------------------------------------------------------------|
| Open                 | PO5 available for user circuitry.LED1, LED8 disconnected.                                         |
| 1-2*                 | PO5 low lights LED1.                                                                              |
| 2-3                  | PO5 high lights LED8 (unless configured in open-drain modeor insufficient pullup source voltage). |

Evaluate: MAX6870-MAX6875

## Table 6. Jumper JU6

| JU6 SHUNT POSITION   | FUNCTION                                                                                          |
|----------------------|---------------------------------------------------------------------------------------------------|
| Open                 | PO6 available for user circuitry.LED2, LED7 disconnected.                                         |
| 1-2*                 | PO6 low lights LED2.                                                                              |
| 2-3                  | PO6 high lights LED7 (unless configured in open-drain modeor insufficient pullup source voltage). |

## Table 7. Jumper JU7

| JU7 SHUNT POSITION   | FUNCTION                                                                                           |
|----------------------|----------------------------------------------------------------------------------------------------|
| Open                 | PO7 available for user circuitry.LED3, LED6 disconnected.                                          |
| 1-2*                 | PO7 low lights LED3.                                                                               |
| 2-3                  | PO7 high lights LED6 (unless configured in open-drain mode or insufficient pullup source voltage). |

## Table 8. Jumper JU8

| JU8 SHUNT POSITION   | FUNCTION                                                                                          |
|----------------------|---------------------------------------------------------------------------------------------------|
| Open                 | PO8 available for user circuitry.LED4, LED5 disconnected.                                         |
| 1-2*                 | PO8 low lights LED4.                                                                              |
| 2-3                  | PO8 high lights LED5 (unless configured in open-drain modeor insufficient pullup source voltage). |

│

## MAX6870 Evaluation Kit/ Evaluation System

Evaluate: MAX6870-MAX6875

## Table 9. Jumpers JU9, JU10 (Device Address Selection)

| JU9 SHUNT POSITION   | JU10 SHUNT POSITION   |   A0 |   A1 | DEVICEADDRESS   |
|----------------------|-----------------------|------|------|-----------------|
| Closed*              | Closed*               |    0 |    0 | 1010 00x r/w    |
| Open                 | Closed                |    1 |    0 | 1010 01x r/w    |
| Closed               | Open                  |    0 |    1 | 1010 10x r/w    |
| Open                 | Open                  |    1 |    1 | 1010 11x r/w    |

## Table 10. Jumper JU11 ( MR )

| JU11 SHUNT POSITION   |   MR | FUNCTION         |
|-----------------------|------|------------------|
| Open*                 |    1 | Normal operation |
| Closed                |    0 | Manual reset     |

## Table 11. Jumper JU12 ( MARGIN )

| JU12 SHUNT POSITION   |   MARGIN | FUNCTION                                                                                              |
|-----------------------|----------|-------------------------------------------------------------------------------------------------------|
| Open*                 |        1 | Normal operation.                                                                                     |
| Closed                |        0 | User test mode: PO outputs are set to their configured MARGIN state. Refer to the MAX6870 data sheet. |

## Table 12. Jumper JU13 (Device Power)

| JU13 SHUNT POSITION   | FUNCTION                                                                         |
|-----------------------|----------------------------------------------------------------------------------|
| Open                  | U1 must be powered by a user-supplied external supply connected to IN1, IN3-IN6. |
| Closed*               | U1 input IN1 is powered from connector P1 5V supply (the CMAXQUSB module).       |

## Table 13. Jumper JU14 (LED Power)

| JU14 SHUNT POSITION   | FUNCTION                                                                 |
|-----------------------|--------------------------------------------------------------------------|
| Open                  | LED1-LED16 are unused, or can be externally powered.                     |
| Closed*               | LED1-LED16 are powered from connector P1 5V supply (the CMAXQUSBmodule). |

*Indicates default configuration, which is a trace on the PC board.

│

Evaluate: MAX6870-MAX6875

Figure 1. Block Diagram (Can Be Brought Up Anytime by Pressing Function Key F1)

<!-- image -->

Figure 2. Related Registers Adjunct Window (Shown by Pressing Function Key F2)

<!-- image -->

## MAX6870 Evaluation Kit/ Evaluation System

Evaluate: MAX6870-MAX6875

Figure 3. Voltage Monitor Tab

<!-- image -->

Figure 4. Digital Inputs

<!-- image -->

## MAX6870 Evaluation Kit/ Evaluation System

Evaluate: MAX6870-MAX6875

Figure 5. Programmable Outputs

<!-- image -->

Figure 6. Watchdog Timers

<!-- image -->

Evaluate: MAX6870-MAX6875

Figure 7. Registers

<!-- image -->

Figure 8. EEPROM Memory

<!-- image -->

## MAX6870 Evaluation Kit/ Evaluation System

## Evaluate: MAX6870-MAX6875

Figure 9. MAX6870 EV Kit Schematic

<!-- image -->

## MAX6870 Evaluation Kit/ Evaluation System

Evaluate: MAX6870-MAX6875

Figure 10. MAX6870 EV Kit Component Placement Guide-Component Side

<!-- image -->

│

## MAX6870 Evaluation Kit/ Evaluation System

Evaluate: MAX6870-MAX6875

Figure 11. MAX6870 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX6870 Evaluation Kit/ Evaluation System

Evaluate: MAX6870-MAX6875

Figure 12. MAX6870 EV Kit PC Board Layout-Solder Side

<!-- image -->

│

## MAX6870 Evaluation Kit/ Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 9/04            | Initial release                    | -               |
|                 1 | 8/05            | Replace CMOD232 with CMAXQUSB      | 1, 2            |
|                 2 | 1/21            | Updated Ordering Information table | 1               |
|                 3 | 3/21            | Updated Ordering Information table | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluate: MAX6870-MAX6875