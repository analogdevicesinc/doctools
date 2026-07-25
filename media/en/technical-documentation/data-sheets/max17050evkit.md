<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX17050 evaluation kit (EV kit) includes the USB adapter and cord. Windows XP M -, Windows Vista M -, and Windows M 7-compatible software is also available for use with the EV kit and can be downloaded from Maxim's website ( www.maximintegrated.com/evkitsoftware ).

The  EV  kit  is  a  fully  assembled  and  tested  surfacemount  PCB  that  evaluates  the  MAX17050  advanced stand-alone fuel-gauge IC for single-cell lithium-ion (LI+) batteries in handheld and portable equipment.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     1 | 0.01 F F Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H103K                    |
| C2, C3        |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K |
| D1, D2, D3    |     3 | 5.6V zener diodes (SOD323) ON Semi MM3Z5V6ST1G                                            |
| D4            |     1 | Red LED (0603)                                                                            |
| J1            |     1 | RJ11 6p6c right-angle, through-hole jack                                                  |
| JU1, JU4      |     2 | 2-pin headers                                                                             |
| JU2, JU3      |     0 | Not installed, 3-pin headers (PC short pins 1-2)                                          |
| R1            |     1 | 10k I Q 1% NTC resistor (0402) Murata NCP15XH103F03 TDK NTCG103JF103FT1                   |

## MAX17050 Evaluation Kit Evaluates: MAX17050

## Features

- S Battery Input Voltage Range: +2.5V to +4.5V
- S Thermal Measurement Network
- S Optional On-Board PC Trace Sense Resistor
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| R3            |     1 | 1k I Q 5% resistor (0402)                                              |
| R4            |     1 | 10k I Q 5% resistor (0402)                                             |
| R5, R6, R7    |     3 | 150 I Q 5% resistors (0402)                                            |
| R8            |     0 | Not installed, 10m I sense resistor (0805) Vishay-Dale WSL0805R0100FEA |
| R9            |     0 | Not installed, resistors-short (PC trace) Vishay-Dale WSL0805R0100FEA  |
| U1            |     1 | Li+ compact fuel gauge (9 WLP) Maxim MAX17050X+                        |
| V1            |     0 | Not installed, varistor (0603)                                         |
| -             |     2 | Shunts                                                                 |
| -             |     1 | PCB: MAX17050 EVALUATION KIT                                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| ON Semiconductor                       | 602-244-6600 | www.onsemi.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX17050 when contacting these component suppliers.

## MAX17050 EV Kit Files

| FILE          | DESCRIPTION                                |
|---------------|--------------------------------------------|
| SETUP.EXE     | Installs the EV kit files on your computer |
| MAX17050k.EXE | Application program                        |
| README.HTML   | Help file                                  |

## Quick Start

## Required Equipment

- MAX17050 EV kit
- +2.5V to +4.5V DC power supply or single-cell battery
- USB adapter and cord
- RJ12 6pos-6pos reverse modular cord
- Windows XP, Windows Vista, or Windows 7 PC
- USB port

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify  board  operation. Caution: Do not turn on  the power  supply  until all  connections  are completed.

- 1)  Connect the USB adapter to a spare USB port on the PC.
- 2)  Connect  the  RJ12  cord  between  J2  on  the    USB adapter and J1 on the EV kit.
- 3) Verify that jumpers  are  installed  in  their default positions, as shown in Table 1.
- 4)  Connect the positive terminal of the power supply or battery to the PK+ PCB pad on the EV kit. Connect the negative terminal of the power supply to the PKPCB pad on the EV kit.
- 5) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX17050Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 6)  Install the EV kit software on your computer by running  the  SETUP.EXE  program  inside  the  temporary folder.  The  program  files  are  copied  and  icons  are created  in  the Windows  Start  |  Programs menu. Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu.

## MAX17050 Evaluation Kit Evaluates: MAX17050

- 7)  Load the default or custom battery model.

## Detailed Description of Hardware

## Auxiliary Voltage Input

The  MAX17050  AIN  pin  allows  temperature  measurement  of  the  cell  pack  when  connected  to  an  external resistor-divider network, R4 and NTC R1. To enable this resistor-divider, simply install a shunt across jumper JU1. When temperature  is  not  being  measured,  remove  the shunt from JU1 and the AIN pin on the IC is pulled to the voltage at the THRM pin and temperature measurement disabled.

## Optional PC Trace Sense Resistor R9

The IC measures current through an external sense resistor  placed between the CSP and CSN pins. The EV kit provides resistor R8 installed by default, but also offers the option to configure for a PC trace sense resistor (R9).

To  utilize  PC  trace  sense  resistor  R9,  follow  the  steps below:

- 1)  Remove resistor R8.
- 2)  Cut the PC short on pins 1-2 on jumpers JU2 and JU3.
- 3)  Install JU2 and JU3.
- 4)  Connect a shunt between pins 2-3 on JU2 and JU3.

## Table 1. Default Jumper Settings (JU1, JU4)

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | 1-2              |
| JU4      | Pin 1 only       |

## Table 2. Auxillary Voltage Input (JU1)

| SHUNT POSITION   | AIN PIN                                                               | CELL TEMPERATURE MONITORING   |
|------------------|-----------------------------------------------------------------------|-------------------------------|
| 1-2*             | Connected to external thermal measurement network resistors R4 and R1 | Enabled                       |
| Pin 1 only       | Pulled to THRM pin through R4                                         | Disabled                      |

* Default position.

- 5)  Install a shunt on jumper JU4.

## Detailed Description of Software

The  MAX17050K evaluation  kit  software  gives  the  user complete  control  of  all  functions  of  the  MAX17050,  as well as the ability to load a custom model into the Model Gauge K .  Separate  control  tabs  allow  the  user  access to  view  real-time  updates  of  all  monitored  parameters. The software also incorporates a data-logging feature to monitor a cell over time.

## Software Installation

To  install  the  evaluation  software,  exit  all  programs currently  running  and  unzip  the  provided  MAX17050K Installation  Package  zipped  file.  Double  click  on  the SETUP.EXE  icon  and  the  installation  process  begins. Follow the prompts to complete the installation. The evaluation  software  can  be  uninstalled  in  the  Add/Remove Programs  tool  in  the  Control  Panel.  After  the  installation  is  complete,  open  the  MAX17050K  folder  and  run MAX17050k.EXE or select MAX17050K from the program menu. A splash screen containing information about the evaluation kit appears as the program is being loaded.

## Selecting the Communication Port

If the USB adapter is connected when the EV kit is started, the software starts up automatically. If it is not connected, the Select Preferences window opens (Figure 1).

In  this  window  select  either  serial  port  or  USB  communication  from  the Port  Type drop-down  list  and  the port number, then press the OK button. The evaluation software saves this port selection and automatically uses the  selection  each  time  the  program  starts.  To  attempt to automatically locate the USB adapter, press the Poll Ports button.

## Program Tabs

All functions of the program are divided under three tabs in  the  main  program  window.  Click  on  the  appropriate tab to move to the desired function page. Located on the

## MAX17050 Evaluation Kit Evaluates: MAX17050

RealTime tab (Figure 8) is the primary user information measured  and  calculated  by  the  IC.  The Memory tab (Figure 9) allows the user to modify the registers one at a time. The Log Data tab (Figure 10) allows the user to store all real-time information to a file and view the data in a graphical form.

## Initializing the Device

When the evaluation software starts, the software detects whether  the  device  is  in  its  power-up  state  and  then asks if the user would like to initialize the device into its recommended state  (Figure  2).  This  includes  updating a  few  registers  to  the  most  standard  user  configuration. Press the Yes button to initialize the device into its recommended state.

## Configuring the Device

The user is prompted to Select a Configuration (Figure 3). Press the Yes button and then point the browser to the INI file provided by Maxim to load the configuration. For best performance, the cell under test should be characterized by Maxim under the application conditions prior to beginning the customer evaluation. Maxim will provide a custom INI file following the complete characterization of the cell.

Figure 1. Communication Port

<!-- image -->

Figure 2. Initializing the Device

<!-- image -->

ModelGauge is a trademark of Maxim Integrated Products, Inc.

The  software  provides  options  of  all  the  registers  that are  typically  configured.  By  default,  all  the  registers are  selected.  If  the  user  wants  to  only  change  a  few registers,  uncheck  the  registers  that  should  not  be updated (Figure 4).

## MAX17050 Evaluation Kit Evaluates: MAX17050

If the cell capacity in the device is different than what is in the INI file, the user is prompted to either preserve the capacity  information  that  is  in  the  device  (by  pressing Yes )  or  load  new  capacity  values  from  the  INI  file  into the  device  (by  pressing No ).  The  user  can  ignore  any capacity-related values by pressing Cancel (Figure 5).

<!-- image -->

Figure 3. Configuring the Device

Figure 4. Register Selection

<!-- image -->

Figure 5. Cell Capacity

<!-- image -->

## Advance to Coulomb-Counter Mode

The software gives the user the chance to advance the device  to  coulomb-counter  mode  (Figure  6).  Normally the device starts with a heavy weighting of the voltage fuel gauge and as it learns the capacity of the cell during the next few cycles it adds more weight to the coulomb counter. During these cycles, the device becomes more confident in the capacity of the battery, which improves the accuracy of the IC.

If  the  user  is  already  confident  that  the  capacity  of the battery is known to within 5%, the user can skip to coulomb-counter mode and immediately begin observing  the  performance of the fuel gauge. However, if the capacity  is  not  accurately  known  within  5%,  it  takes significantly longer for the IC to adapt to the capacity if the  device  is  skipped  to  coulomb-counter  mode.  Take special  care  when  deciding  if  the  device  should  be advanced.

## MAX17050 Evaluation Kit Evaluates: MAX17050

When  the  following  message  box  appears,  press Yes to  advance  to  coulomb-counter  mode  or  press No to resume normal operation.

If the user decides to advance to coulomb-counter mode, then  the  user  can  decide  to  keep  the  capacity  that  is currently known by the device, which is displayed next to  the Preserve  Capacity radio  button.  The  user  also has the option to enter a New Capacity value in terms of mAH in the edit box. The user also has a third option to abandon the coulomb-counter mode advance by clicking on the Begin to Learn new capacity? radio button (Figure 7).

Once the INI file is completely loaded to the device, the user is notified of the success and then the title bar of the application contains the title included in the INI file.

The  configuration  can  also  be  loaded  by  pressing  the Select  Configuration button  on  the ReadTime tab (Figure 8) and then following the same steps.

Figure 6. Coulomb-Counter Mode

<!-- image -->

Figure 7. Battery Capacity

<!-- image -->

## RealTime Tab

The RealTime tab sheet (Figure 8) displays the latest real-time measurements of cell Voltage , Current , Temperature , and State of Charge (in terms of percent and mAH remaining), with both analog meter readouts and  digital  values.  The  various  configuration  registers and alert thresholds are also displayed.

## Save Capacity/Restore Capacity

The Save Capacity and Restore Capacity buttons allow the evaluation software to maintain accuracy of the algorithm after the IC has been power cycled. If a battery is going to be removed from the IC, the user should save the  capacity  information  prior  to  removing  the  battery. Also, the user should periodically save the capacity information so it can be restored to the device in the event of a power loss.

Pressing the Save Capacity button prompts the user to select a filename in which to store the critical registers required  to  maintain  the  accuracy  of  the  algorithm,  as described  in  the  MAX17047/MAX17050  IC  data  sheet. It  is  recommended to  use  a  very  specific  naming  convention so the file can later be connected to the battery under test. After power is restored to the device, initialize the device and select the appropriate configuration. The user should then press the Restore Capacity button and point the browser to the file with the saved parameters for this battery.

## Configuration Registers

The  user  can  access  the Status , Config , FilterCFG , RelaxCFG ,  and MiscCFG registers  by  pressing  the associated button, or from the Configuration Registers menu  item.  Clicking  on  the  associated  label  opens  a window with a bit-by-bit explanation of the register and allows the user to make changes and Write the value to the register.

All  other  registers  can  be  viewed  and  modified  on  the Memory tab.

## MAX17050 Evaluation Kit Evaluates: MAX17050

## Memory Tab

The Memory tab sheet (Figure 9) allows the user to modify any of the registers from address 0x00h to 0x4Fh. Any changes to the registers should be made cautiously. To change a value, first press the Pause button. This stops any new readings from occurring. Modify the text box of the register that needs updating and then press the button containing the register's name. The register is written and read back to verify it was updated correctly. Make sure  to  press  the Resume button  so  that  the  software resumes reading the IC.

## Log Data Tab

The Log  Data tab  sheet  (Figure  10)  allows  the  user to  see  the  IC's  real-time  measurements  graphed  over time. There are separate sub tabs for Voltage , Current , Temperature ,  and SOC Rep .  Each  graph  displays  the last 500 data points collected by the evaluation software. The sampling interval can be adjusted from as fast as possible  to  15  minutes  and  can  be  adjusted  from  the Sampling  Interval drop-down  list  at  the  bottom  of  the window. The Clear  Graphs button  clears  all  data  from all four graphs, but does not reset the log-to-file function. When the fastest sampling interval is selected, the graphs are not updated, only the data logging is enabled.

The Log to File sub tab contains control information for storing all data to an ASCII file. The default filename is c:\MAX17050\_datalog.txt,  but  can  be  modified  in  the Filename edit  box.  The Stop  Logging button  toggles data logging off and on. For easy import into a spreadsheet,  data  is  stored  at  the  same  interval  selected  for updating the graphs in the following tab-delimited format:

Time&lt;tab&gt;Status(0h)&lt;tab&gt;VALRT\_Th(1h)&lt;tab&gt;….. &lt;tab&gt;Reserved(FEh)&lt;tab&gt;Reserved(FFh)

The 50 most-recent samples are displayed in the window for  observation. Warning: The Log Data function  overwrites previous file information. Data previously stored in the file will be lost.

## MAX17050 Evaluation Kit Evaluates: MAX17050

Figure 8. RealTime Tab

<!-- image -->

## MAX17050 Evaluation Kit Evaluates: MAX17050

Figure 9. Memory Tab

<!-- image -->

## MAX17050 Evaluation Kit Evaluates: MAX17050

Figure 10. Log Data Tab

<!-- image -->

## MAX17050 Evaluation Kit Evaluates: MAX17050

Figure 11. MAX17050 EV Kit Schematic

<!-- image -->

Figure 12. MAX17050 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 13. MAX17050 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX17050 Evaluation Kit Evaluates: MAX17050

Figure 14. MAX17050 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 15. MAX17050 EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17050EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX17050 Evaluation Kit Evaluates: MAX17050

## MAX17050 Evaluation Kit Evaluates: MAX17050

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/14            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.