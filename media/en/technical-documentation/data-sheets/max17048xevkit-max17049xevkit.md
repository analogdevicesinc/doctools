<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

## General Description

The  MAX17048X/MAX17049X  evaluation  kits  (EV  kits) include  the  MAX17048X/MAX17049X  EV  kit  and  the Maxim  DS91230+  command  module.  Windows  XP M -, Windows Vista M -, and Windows 7-compatible software is also available for use with the evaluation kit and can be downloaded from www.maxim-ic.com/evkitsoftware .

The  EV  kits  are  fully  assembled  and  tested  surfacemount PCBs that evaluate the MAX17048X/MAX17049X host  or  battery-side  fuel  gauge  for  1-cell/2-cell  lithiumion  (Li+)  batteries  in  handheld  and  portable  equipment. The EV kits can be powered from a single battery (MAX17048X) and configured to evaluate a single lithium cell  (MAX17048X)  or  from  two  lithium  cells  in  series (MAX17049X).

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K  |
| C3            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K TDK C1005X7R1C104K |
| C4            |     0 | Not installed, ceramic capacitor (0603)                                                  |
| D1, D2, D3    |     3 | 5.6V zener diodes (SOD323) ON Semi MM3Z5V6ST1G                                           |
| J1            |     1 | RJ11 6-pos/6-pos, right-angle, through-hole jack                                         |
| J2            |     1 | 6-pin straight-row header                                                                |
| JU1           |     1 | 3-pin header, 0.1in centers                                                              |
| JU2           |     1 | 2-pin header, 0.1in centers                                                              |

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

Features

- S Battery Input Voltage Range
- S Powered from a Single Battery (MAX17048X)
- S Evaluates 1-Cell (MAX17048X) or 2-Cell (MAX17049X) Batteries
- S Precision ±7.5mV Voltage Measurement per Cell
- S Current Sense Not Required
- S On-Board LDO for 2-Cell Evaluation (MAX17049X)
- S Tiny 0.9 mm x 1.7mm, 8-Bump Wafer-Level Package (WLP)
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S Proven PCB Layout
- S Fully Assembled and Tested

-  MAX17048X: +2.5V to +4.5V

-  MAX17049X: +2.5V to + 12V

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                         |
|---------------|-------|-----------------------------------------------------|
| R1, R4, R5    |     3 | 150 I Q 5% resistor (0603)                          |
| R3            |     0 | Not installed, resistor-short (PC trace) (0603)     |
| R6            |     1 | 10k I Q 5% resistor (0603)                          |
| R7            |     1 | 1M I Q 5% resistor (0603)                           |
| U1            |     1 | See the EV Kit-Specific Component List              |
| U2            |     1 | 3.3V LDO (5 SOT23) Maxim MAX1726EUK33-T             |
| -             |     1 | DS91230 PicBrick board (USB to RJ11) Maxim DS91230+ |
| -             |     1 | RJ12 6-pos/6-pos reverse modular cord, 7ft          |
| -             |     2 | Shunts                                              |
|               |     1 | PCB: MAX17048X/MAX17049X EVALUATION KIT             |

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

## EV Kit-Specific Component List

| PART            | DESIGNATION   | DESCRIPTION                                                      |
|-----------------|---------------|------------------------------------------------------------------|
| MAX17048XEVKIT# | U1            | Micropower 1-cell Li+ ModelGauge™ IC (8 WLP) Maxim MAX17048X+T10 |
| MAX17049XEVKIT# | U1            | Micropower 2-cell Li+ ModelGauge IC (8 WLP) Maxim MAX17049X+T10  |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| ON Semiconductor                       | 602-244-6600 | www.onsemi.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX17048X/MAX17049X when contacting these component suppliers.

## MAX17048X EV Kit Files

| FILE          | DESCRIPTION                                |
|---------------|--------------------------------------------|
| SETUP.EXE     | Installs the EV kit files on your computer |
| MAX17048k.EXE | Application program                        |
| README.HTML   | Help file                                  |

## Quick Start

## Required Equipment

- MAX17048X or MAX17049X EV kit
- +2.5V to +4.5V DC power supply or 1-cell battery
- DS91230 PicBrick board
- RJ12 6-pos/6-pos reverse modular cord
- Windows XP, Windows Vista, or Windows 7 PC
- USB port

## MAX17049X EV Kit Files

| FILE          | DESCRIPTION                                |
|---------------|--------------------------------------------|
| SETUP.EXE     | Installs the EV kit files on your computer |
| MAX17049k.EXE | Application program                        |
| README.HTML   | Help file                                  |

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | DEFAULT SHUNT POSITION   |
|----------|--------------------------|--------------------------|
| JUMPER   | MAX17048X                | MAX17049X                |
| JU1      | 1-2                      | 2-3                      |
| JU2      | Open                     | Installed                |

- 5) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the MAX17048X or MAX17049X EV  kit  software,  MAX17048Rxx.ZIP/MAX17049Rxx. ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 6) Install  the  EV  kit  software  on  your  computer  by running the SETUP.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu. The software requires the .NET Framework 4. If you are connected to the Internet, Windows automatically locates the correct files and walks you through the process. You can also download the Microsoft .NET Framework 4 Client Profile (Standalone Installer) and run that on your PC.
- 7) Start the MAX17048X/MAX17049X EV kit software by opening its icon in the Start | Programs menu.
- 8) Load the default or custom battery model.

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Connect the DS91230 board to a spare USB port on the PC.
- 2) Connect the RJ12 cord between J2 on the DS91230 board and J1 on the MAX17048X/MAX17049X EV kit.
- 3) Verify  that  shunts  are  installed  according  to  the defaults listed in Table 1.
- 4) Connect the positive terminal of the power supply or battery to the BAT+ PCB pad on the EV kit. Connect the  negative  terminal  of  the  power  supply  to  the BAT- PCB pad on the EV kit.

ModelGauge is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

## Detailed Description of Hardware

The  MAX17048X/MAX17049X  EV  kits  are  fully  assembled  and  tested  surface-mount  PCBs  that  evaluate the  MAX17048X/MAX17049X  host  or  battery-side  fuel gauge  for  1-cell/2-cell  Li+  batteries  in  handheld  and portable equipment. The EV kits can be powered from a single supply or battery with an input range of +2.5V to +4.5V. The EV kits can be configured to evaluate a single lithium  cell  (MAX17048X)  or  two  lithium  cells  in  series (MAX17049X).  Optional  LDO  U2  is  provided  to  power VIN  when  using  a  higher  voltage  2-cell  Li+  battery  to evaluate the MAX17049X.

## Default Jumper Settings

The MAX17048X EV kit is set by default to evaluate 1-cell Li+ batteries while the MAX17049X EV kit is set by default to  evaluate 2-cell Li+ batteries. LDO U2 is provided so that only a single supply is needed to power the EV kit in the case where a 2-cell battery is used.

When evaluating the MAX17048X, set jumper JU1 to pins 1-2  and  remove  any  shunt  installed  on  jumper  JU2  to bypass the LDO. When evaluating the MAX17049X, set JU1 to pins 2-3 and install a shunt on JU2 to power VIN from the LDO. See Tables 2 and 3 for JU1 and JU2 settings. When using a separate supply for VIN or evaluating the  MAX17048X,  JU2  should  be  uninstalled  to  prevent additional current drawn from the battery.

## Detailed Description of Software

## Splash Screen

The splash screen (Figure 1) allows you to choose one of three distinct modes:

- Custom model with a physical MAX17048X/ MAX17049X.  Custom  models  for  the  MAX17040MAX17044  can  be  used  in  this  software  provided  you  change  the  line  Device  =  MAX1704x  to Device = MAX17048.

## Table 2. Power-Supply Input (JU1)

| SHUNT POSITION   | VDD PIN                                                           | EV KIT CONFIGURATION   |
|------------------|-------------------------------------------------------------------|------------------------|
| 1-2*             | Powered from a battery applied between the BAT+ and BAT- PCB pads | MAX17048X              |
| 2-3              | Powered from the +5V output of LDO U2                             | MAX17049X              |

## Table 3. LDO U2 Input Settings (JU2)

| SHUNT POSITION   | U2 INPUT                      | U2 OUTPUT   | EV KIT CONFIGURATION   |
|------------------|-------------------------------|-------------|------------------------|
| Installed        | Connected to the BAT+ PCB pad | Enabled     | MAX17048X              |
| Not installed*   | Unconnected                   | Disabled    | MAX17049X              |

* MAX17048X default position.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Default model with a physical MAX17048X. Warning: Using the default model normally results in poor  fuel-gauge  performance.  For  good  fuel-gauge performance,  it  is  recommended  to  always  use  a model that is matched to the battery according to battery characterization.
- Demo	mode	with	a	MAX17048X	log	file.
- The	MAX17049X	EV	kit	software	is	also	available	for download at www.maxim-ic.com/evkitsoftware .

## Main Window

You can resize the left-right split in the window (Figure 2). Most major functionality is available from the menu, but some of these items should be observed early.

## Currently Loaded Custom Battery Model

This  group  displays  any  custom  model  that  has  been loaded onto the part by the software. If the device resets, this model is automatically reloaded. If you are using the default model, nothing is displayed here. Any changes to the configuration file is not reloaded automatically.

## Record Registers to Log File

This  group  displays  the  file  path  to  which  the  software is  recording the registers. If this box is blank, no file is being saved.

## RCOMP Configuration

Enter a byte here and press the Write button to write it to the device. This is not the same as writing the value into the memory map because RCOMP is part of a larger 2-byte register.

If  you  have  a  custom  model,  you  can  also  change  the temperature,  which  adjusts  the  MAX17048X  for  proper temperature  performance.  Changing  this  value  immediately calculates a new value of RCOMP and displays it  in  the box. This value is not written to the device until you press the Write button. A change to RCOMP is not reflected in the temperature.

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

Figure 1. MAX17048X EV Kit Software (Splash Screen)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

<!-- image -->

Figure 2. MAX17048X EV Kit Software (Main Window)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

## Memory Map

Notation used for name and address should be familiar to C programmers with one small change. The memory map lists:

- Register Name: A dot indicates that a single address has  multiple  meanings.  This  is  similar  to  how  the C firmware might access the bits.
- Memory Address: A  colon  indicates  the  0-indexed location, not the size of the bit field. A dash indicates a range of values (e.g. 0x0C:0-4 is a 5-bit value, offset 0 bits at address 0x0C).
- Hex: The raw value as read directly from the device
- Value: A conversion of the raw hex value, usually with units. Alert bit flags are blank when inactive, or show text when they are alerting.
- Description: Reminders  of  the  functionality.  For full  details,  refer  to  the  MAX17048/MAX17049  IC data sheet.

Write  values  to  the  device  directly  through  the  memory  map.  To  write  a  raw  hex  value,  select  the  cell  in the  hex  column,  overwrite  the  value,  and  press  the Enter  or  Tab  key.  You  are  prompted  to  write  to  the device.  Normal  communication  pauses  and  you  see  a corresponding blank spot in the graph.

For  registers  with  a  conversion  factor  (e.g.  Hibernate Threshold or VAlertMax), you can also modify the Value column. The software converts the value back to the raw hex and prompts you to verify that you are writing what you expect.

Remember that not all registers are writable.

## Plot

The plot can be configured using the Preferences window. The  plot  is  interactive.  Zoom  into  the  time  axis  by  leftclicking and dragging anywhere in the plot area. While dragging, the region becomes highlighted as you drag. You can zoom out either by clicking the small button in the bottom left, or by right-clicking in the plot area.

<!-- image -->

Plotted information not in a log file cannot be recovered once the application closes.

The  top  and  bottom  plots  are  synchronized  in  time, so  zooming  one  zooms  the  other.  The  y-axes  are fixed  scale  and  you  cannot  modify  which  registers  are plotted, or where.

## Standalone Windows Preferences

Here  you  can  see  options  for  how  frequently  you  wish to  read  the  device  and  how  to  plot  points.  To  observe transient events, increase the read speed, as well as how frequently the points are actually plotted.

The  plots  can  use  a  lot  of  system  memory  if  you  read frequently for a long time, so be aware of these settings. After the maximum number of points is reached, points are  trimmed  from  the  beginning.  The  discarded  points cannot be recovered on the plot.

## I 2 C Traffic Log Window

Here you can see a log of traffic that you initiate, as well as any time the device is programmed. It describes each step  in  detail,  including  the  particular  values  read  or written. This can help remove uncertainty about how to communicate with the device. This log does not show the standard reading events.

## Memory Map Pop-Up Window

This window displays the same information as the memory map on the main application, except that values in this map cannot be modified. This is the easiest place to read descriptions of registers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

<!-- image -->

Figure 3. MAX17048X/MAX17049X EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17048X / MAX17049X Evalution Kits (WLP)

## Evaluate: MAX17048X/ MAX17049X in a WLP

<!-- image -->

Figure 4. MAX17048X/MAX17049X EV Kits PCB LayoutComponent Side

<!-- image -->

Figure 5. MAX17048X/MAX17049X EV Kits Component Placement Guide-Component Side

<!-- image -->

Figure 6. MAX17048X/MAX17049X EV Kits PCB LayoutSolder Side

<!-- image -->

Figure 7. MAX17048X/MAX17049X EV Kits Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17048XEVKIT # | EV Kit |
| MAX17049XEVKIT # | EV Kit |

# Denotes RoHS compliant.

## MAX17048X/MAX17049X Evaluation Kits (WLP)

## Evaluate: MAX17048X/MAX17049X in a WLP

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.