<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

## General Description

The MAX17058 and MAX17059 evaluation kits (EV kits) consist of  the  MAX17058 and MAX17059 evaluation kit (EV  kit)  and  the  Maxim  DS91230+  command  module. Windows XP ® -, Windows Vista ® -, and Windows ®  7-compatible  operating  systems  software  is  also  available for  use  with  the  EV  kits  and  can  be  downloaded  from Maxim's website at www.maxim-ic.com/evkitsoftware .

The MAX17058 and MAX17059 EV kits are fully assembled  and  tested  surface-mount  PCBs  that  evaluate  the MAX17058  and  MAX17059  host-  or  battery-side  fuel gauge for single/double-cell lithium-ion (Li+) batteries in handheld and portable equipment. The EV kits can be powered from a single battery (MAX17058) and can be configured to evaluate a single lithium cell (MAX17058) or two lithium cells in series (MAX17059).

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K  |
| C3            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K TDK C1005X7R1C104K |
| C4            |     0 | Not installed, ceramic capacitor (0603)                                                  |
| D1, D2, D3    |     3 | 5.6V zener diodes (SOD323) ON Semi MM3Z5V6ST1G                                           |
| J1            |     1 | RJ11 6-pin/6-center right-angle through-hole jack                                        |
| J2            |     1 | 1 x 6-pin straight-row header                                                            |
| JU1           |     1 | 3-pin header, 0.1in centers                                                              |
| JU2           |     1 | 2-pin header, 0.1in centers                                                              |

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- S Battery Input Voltage Range

-  MAX17058: +2.5V to +4.5V

-  MAX17059: +2.5V to +12V

- S Powered from a Single Battery (MAX17058)
- S Evaluates Single-Cell (MAX17058) or 2-Cell (MAX17059) Batteries
- S Precision ±7.5mV Voltage Measurement per Cell
- S Current Sense Not Required
- S On-Board LDO for 2-Cell Evaluation (MAX17059)
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Operating Systems Software
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                         |
|---------------|-------|-----------------------------------------------------|
| R1, R4, R5    |     3 | 150 I Q 5% resistors (0603)                         |
| R3            |     0 | Not installed, resistor (0603) (PC short)           |
| R6            |     1 | 10k I Q 5% resistor (0603)                          |
| R7            |     1 | 1M I Q 5% resistor (0603)                           |
| U1            |     1 | See the EV Kit-Specific Component List              |
| U2            |     1 | 3.3V LDO (5 SOT23) Maxim MAX1726EUK33-T             |
| -             |     1 | DS91230 PicBrick board (USB to RJ11) Maxim DS91230+ |
| -             |     1 | RJ12 6-pos/6-pos reverse modular cord, 7ft          |
| -             |     2 | Shunts                                              |
| -             |     1 | PCB: MAX17058/MAX17059 EVALUATION KIT               |

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

## EV Kit-Specific Component List

| PART           | DESIGNATION   | DESCRIPTION                                                 |
|----------------|---------------|-------------------------------------------------------------|
| MAX17058EVKIT# | U1            | 1-cell Li+ ModelGauge K IC (8 TDFN-EP*) Maxim MAX17058G+T10 |
| MAX17059EVKIT# | U1            | 2-cell Li+ ModelGauge IC (8 TDFN-EP*) Maxim MAX17059G+T10   |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| ON Semiconductor                       | 602-244-6600 | www.onsemi.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX17058/MAX17059 when contacting these component suppliers.

## MAX17058 EV Kit Files

| FILE          | DESCRIPTION                                |
|---------------|--------------------------------------------|
| SETUP.EXE     | Installs the EV kit files on your computer |
| MAX17058k.EXE | Application program                        |
| README.HTML   | Help file                                  |

## Quick Start

## Required Equipment

- MAX17058	or	MAX17059	EV	kit
- +2.5V	to	+4.5V	DC	power	supply	or	single-cell	battery
- DS91230+	PicBrick
- RJ12	6-pos/6-pos	reverse	modular	cord
- PC	with	Windows	XP,	Windows	Vista,	or	Windows	7	OS
- USB	port

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Connect the DS91230+ board to a spare USB port on the PC.
- 2)  Connect the RJ12 cord between J2 on the DS91230+ board and J1 on the EV kit.

ModelGuage is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17059 EV Kit Files

| FILE          | DESCRIPTION                                |
|---------------|--------------------------------------------|
| SETUP.EXE     | Installs the EV kit files on your computer |
| MAX17059k.EXE | Application program                        |
| README.HTML   | Help file                                  |

- 3)  Verify  that  shunts  are  installed  according  to  the defaults listed in Table 1.
- 4)  Connect the positive terminal of the power supply or battery to the BAT+ PCB pad on the EV kit. Connect the negative terminal of the power supply to the BATPCB pad on the EV kit.
- 5)  Download the latest version of the EV kit software at www.maxim-ic.com/evkitsoftware ,  MAX17058Rxx. ZIP or MAX17059Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 6)  Install the EV kit software on your computer by running the SETUP.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu. The software requires the .NET Framework 4. If you are connected to  the  Internet,  Windows  automatically  locates  the correct files and walks you through the process. You can also download the Microsoft .NET Framework 4 Client Profile (Standalone Installer) and run that on your PC.
- 7)  Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu.
- 8)  Load the default or custom battery model.

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

## Detailed Description of Hardware

The  MAX17058/MAX17059  EV  kits  are  fully  assembled  and  tested  surface-mount  PCBs  that  evaluate  the MAX17058  and  MAX17059  host-  or  battery-side  fuel gauge  for  single/double-cell  Li+  batteries  in  handheld and  portable  equipment.  The  EV  kits  can  be  powered from  a  single  supply  or  battery  with  an  input  range  of +2.5V to +4.5V. The EV kit can be configured to evaluate a single lithium cell (MAX17058) or two lithium cells in  series  (MAX17059).  Optional  LDO  U2  is  provided  to power VIN when using a higher voltage 2-cell Li+ battery to evaluate the MAX17059.

Table 1. Default Jumper Positions

|        | DEFAULT SHUNT POSITION   | DEFAULT SHUNT POSITION   |
|--------|--------------------------|--------------------------|
| JUMPER | MAX17058                 | MAX17059                 |
| JU1    | 1-2                      | 2-3                      |
| JU2    | Open                     | Installed                |

## Table 2. Power-Supply Input (JU1)

| SHUNT POSITION   | VDD PIN                                                       | EV KIT CONFIGURATION   |
|------------------|---------------------------------------------------------------|------------------------|
| 1-2*             | Powered from a battery applied between BAT+ and BAT- PCB pads | MAX17058               |
| 2-3              | Powered from +5V output of LDO U2                             | MAX17059               |

## Table 3. LDO U2 Input Settings (JU2)

| SHUNT POSITION   | U2 INPUT                  | U2 OUTPUT   | EV KIT CONFIGURATION   |
|------------------|---------------------------|-------------|------------------------|
| Installed        | Connected to BAT+ PCB pad | Enabled     | MAX17058               |
| Not Installed*   | Unconnected               | Disabled    | MAX17059               |

* MAX17058 default position.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Default Jumper Settings

The MAX17058 EV kit is set by default to evaluate singlecell  Li+  batteries,  while  the  MAX17059  EV  kit  is  set  by default  to  evaluate  2-cell  Li+  batteries.  LDO  U2  is  provided so that only a single supply is needed to power the EV kit in the case where a 2-cell battery is used.

When evaluating the MAX17058, set jumper JU1 to pins 1-2 and remove any shunt installed on JU2 to bypass the LDO. When evaluating the MAX17059, set jumper JU1 to pins 2-3 and install a shunt on JU2 to power VIN from the LDO. See Table 2 and Table 3 for jumper JU1 and JU2 settings. Note: When using a separate supply for VIN or evaluating the MAX17058, JU2 should be uninstalled to prevent additional current drawn from the battery.

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

## Detailed Description of Software

## Splash Screen

The splash screen (Figure 1) allows you to choose one of three distinct modes:

- Custom	 model	 with	 physical	 MAX17058/MAX17059. Custom  models  for  MAX17040/1/3/4  can  be  used in this  software  provided  you  change  the  line: Device = MAX1704x to Device = MAX17058 .
- Default	model	with	physical	MAX17058.

Warning: Using the default model normally results in poor  fuel-gauge  performance.  For  good  fuel-gauge performance,  it  is  recommended  to  always  use  a model that is matched to the battery according to battery characterization.

- Demo	mode	with	a	MAX17058	log	file.

Note that the MAX17059 EV kit software is also available for download at Maxim's website at www.maxim-ic.com/ evkitsoftware .

## Main Window

You can resize the left-right split in the window (Figure 2). Most major functionality is available from the menu, but some of the following items should be observed early.

## Currently Loaded Custom Battery Model

This  group  displays  any  custom  model  that  has  been loaded onto the part by the software. If the device resets, this model is automatically reloaded. If you are using the default  model,  nothing  is  displayed  here.  Any  changes to the configuration file are not reloaded automatically.

## Record Registers to Log File

This  group  displays  the  file  path  to  which  the  software is  recording the registers. If this box is blank, no file is being saved.

## RCOMP Configuration

You can enter a byte here and press the Write RCOMP button to write it to the device. This is not the same as writing the value into the memory map, because RCOMP is part of a larger 2-byte register.

<!-- image -->

Figure 1. MAX17058 EV Kit Software (Splash Screen)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

Figure 2. MAX17058 EV Kit Software (Main Window)

<!-- image -->

If  you  have  a  custom  model,  you  can  also  change  the temperature,  which  adjusts  the  MAX17058  for  proper temperature performance. Changing this value immediately calculates a new value of RCOMP and displays it in the box. This value is not written to the device until you press the Write RCOMP button. A change to RCOMP is not reflected in the temperature.

Memory Map Notation  used  for Name and Addr should  be  familiar to C programmers with one small change. The memory map lists:

- Name:	A	dot	indicates	that	a	single	address	has	mul -tiple meanings. This is similar to how the C firmware might access the bits.
- Addr:	 A	 colon	 indicates	 the	 0-indexed	 location,	 not the size of the bit field. A dash indicates a range of values (e.g., 0x0C:0-4 is a 5-bit value, offset 0 bits at address 0x0C).
- Hex:	The	raw	value	as	read	directly	from	the	device
- Value:	A	conversion	of	the	raw	hex	value,	usually	with units. Alert bit flags are blank when inactive, or show text when they are alerting.
- Description:	 Reminders	 of	 the	 functionality.	 For	 full details,  refer  to  the  MAX17058/MAX17059  IC  data sheet.

<!-- image -->

You can write values to the device directly through the memory map. To write a raw hex value, select the cell in the Hex column, overwrite the value, and press the Enter or Tab key. You will be prompted to write to the device. Normal communication pauses, and you will see a corresponding blank spot in the graph.

For  registers  with  a  conversion  factor  (e.g., Hibernate Threshold or VAlertMax ),  you  can  also  modify  the  Value column. The software converts the value back to the raw hex, and prompts to verify that you are writing what you expect.

Remember that not all registers are writable.

## Plot

The plot can be configured using the Preferences window. The plot is interactive. You can zoom into the Time axis by left-clicking and dragging anywhere in the plot area. You will see the region highlighted as you drag. You can zoom out either by pressing the small button in the bottom left, or by right-clicking in the plot area.

Plotted information not in a log file cannot be recovered once the application closes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

The top and bottom plots are synchronized in time, so zooming  one  zooms  the  other.  The  y-axes  are  fixed scale,  and  you  cannot  modify  which  registers  are  plotted, or where.

## Stand-Alone Windows Preferences

This area contains options for how frequently one wishes to read the device and how to plot points. If you are trying  to  observe  transient  events,  you  need  to  increase the read speed, as well as how frequently the points are actually plotted.

The  plots  can  use  a  lot  of  system  memory  if  you  read frequently for a long time, so be aware of these settings. After the maximum number of points is reached, points are  trimmed  from  the  beginning.  The  discarded  points cannot be recovered on the plot.

<!-- image -->

## I 2 C Traffic Log Window

Here you can see a log of traffic which you initiate, as well as any time the device is programmed. It describes each step in detail, including the particular values read or written. This can help remove uncertainty about how to communicate with the device. This log does not show the standard reading events.

## Memory Map Pop-Up Window

This displays the same information as the memory map on  the  main  application,  except  you  cannot  modify values  in  this  map.  This  is  the  easiest  place  to  read descriptions of registers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

<!-- image -->

Figure 3. MAX17058/MAX17059 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

<!-- image -->

<!-- image -->

Figure 4. MAX17058/MAX17059 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX17058/MAX17059 EV Kit PCB LayoutComponent Side

Figure 6. MAX17058/MAX17059 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX17058/MAX17059 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17058EVKIT # | EV Kit |
| MAX17059EVKIT # | EV Kit |

# Denotes RoHS compliant.

## MAX17058/MAX17059 Evaluation Kits

## Evaluate: MAX17058/MAX17059

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------|-----------------|
|                 0 | 1/12            | Initial release                                                                  | -               |
|                 1 | 2/12            | Updated U1 description in the EV Kit-Specific Component List and Figures 1 and 2 | 2, 4, 5         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.