<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the capabilities of the DS2756 High Accuracy Battery Fuel Gauge, including:
-  Programmable Suspend Mode
-  Temperature measurement
-  Current measurement
-  Voltage measurement
-  Current and Voltage Snapshot Mode
-  Temperature and Accumulated Current Alarms
-  Current accumulation
-  Information storage
-  Identification
-  Interfaces to the USB port of a PC running Windows XP  or older

## INDEX

Evaluation Kit Contents

Equipment Needed

Introduction

Setup and Installation

Board Connections

Software Installation

Selecting the COM Port

Program Menus

Register Windows

Program Tabs

Real Time Meters

Data Logging

User Memory

Pack Information

Fuel Gauging

## INTRODUCTION

The  DS2756  evaluation  kit  (EV  kit)  makes  performance  evaluation,  software  development,  and prototyping with the DS2756 High Accuracy Battery Fuel Gauge easy. The evaluation board interfaces to a PC through a DS9123O USB Adapter and RJ-11 cable connection.

The DS2756 EV kit evaluation software gives the user complete control of all functions of the DS2756. Separate  control  tabs  allow  the  user  access  to  all  EEPROM  and  RAM  memory  locations,  all  control

## DS2756EVKIT+

## High Accuracy Battery Fuel Gauge With Programmable Suspend Mode Evaluation Kit

## EVALUATION KIT CONTENTS

1 pc. TSSOP Evaluation Board

1 pc. DS9123O USB Adapter

1 pc. RJ-11 Phone Cable

## EQUIPMENT NEEDED

1. A PC running Windows XP or older operating system and an available USB port.
2. Cables with mini-grabber style clips or the ability to solder directly to connection pads.
3. A Lithium-Ion battery and a power supply and/or load circuit.

Windows XP is a registered trademark of Microsoft Corp.

registers,  and  real-time  updates  of  all  monitored  parameters.  The  software  also  incorporates  a  data logging feature to monitor a cell over time and fuel gauging algorithms to improve remaining capacity calculations based on specific cell characteristics.

The evaluation board circuit is designed to provide the DS2756 with accurate parameter measurements and  protect  the  DS2756  from  ESD  damage.  Kit  demonstration  boards  will  vary  as  they  are  improved upon over time. For information on the demonstration board circuits refer to our website at www.maximic.com.

## SETUP AND INSTALLATION

## BOARD CONNECTIONS

Connections to the demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the board can be accomplished by connecting the RJ11  Jack  to  the  DS9123O  USB  Adapter  with  the  provided  6  conductor  cable.  Then  the  DQ  and  PACterminals on the RJ-11 Jack can be wired directly to the DQ and PAC- pads on the demonstration board.

Figure 1 shows the recommended circuit for the DS2756EVKIT+ demonstration board. The Lithium-Ion cell or NiMH cell stack is connected between the BAT+ and BAT- pads. If a Lithium-Ion cell is used, a protection  circuit  must  be  included  between  the  battery  and  the  demo  board.  The  user  system  load circuit/charger is connected from BAT+ to PAC-. The evaluation software can be run with or without a load  or  charger  as  long  as  a  cell  is  connected  between  the  BAT+  and  BAT-  terminals  providing  a minimum of 2.7 volts to power the DS2756.

Figure 1: PD010203 Cell, Load, and Charger Connections

<!-- image -->

## SOFTWARE INSTALLATION

To  install  the  DS2756  EV  kit  software,  exit  all  programs  currently  running  and  download  the  latest version  at  www.maxim-ic.com.  Unzip the compressed  file  and  double  click  SETUP.EXE  to  begin  the installation process. Follow the prompts to complete the installation. The DS2756 EV kit software can be uninstalled  in  the  Add/Remove  Programs  tool  in  the  Control  Panel.  After  the  installation  is  complete, open the DS2756K folder and run DS2756K.EXE or select DS2756K from the program menu. A splash screen containing information about the evaluation kit appears as the program is being loaded.

## SELECTING THE COM PORT

The first time the software runs, the Select Preferences window appears.  In this window, select either serial port or USB communication and the port number; then hit OK.  The DS2756 EV kit software saves this port selection and automatically uses the selection each time the program starts.  To change the port later, click the Preferences option on the menu bar, select Edit Preferences, and then select the appropriate port.  To  attempt  to  automatically  locate  the  DS9123O,  click  the  Poll  Serial  Ports  button.  Warning  automatically  polling  for  the  DS9123O  can  disrupt  other  devices  connected  to  your  computer's  COM ports.

<!-- image -->

## MENUS

Several pull down menu options have been provided to simplify use of the DS2756 EV kit software for the user. Their functions are individually detailed below.

## FILE MENU

<!-- image -->

The File Menu allows the user to store information from a file directly into the Device Setup, Battery Data, and Fuel Gauging Data sections under the Pack Info Tab or take the same Pack Information and store to a file. These functions do not directly write or read the DS2756. It is still necessary for the user to store or recall this information to or from the device by issuing a WRITE or READ command under the Pack Info Tab.

## REGISTERS MENU

<!-- image -->

The  Registers  Menu  gives  immediate  access  to  all  three  status  and  function  registers  of  the  DS2756. Selecting any of the registers will open an individual control window giving the user a description of each register bit and the ability to read or write it. See the status register window example.

## STATUS REGISTER

<!-- image -->

The present state of all register bits are displayed immediately upon opening the register window. R/W locations  contain  a  selection  field  to  allow  the  user  to  determine  their  state.  Pressing  the  WRITE  or WRITE &amp; COPY buttons will automatically update the corresponding register inside the DS2756. The Status register has default values stored in user EEPROM location 0x31h. That window contains extra options to write or read the EEPROM location independently of the register in address 0x01h.

## 1 WIRE SPEED MENU

<!-- image -->

The 1 Wire Speed Menu allows the user to select the appropriate 1 Wire timing.   The speed the device uses is determined by the state of the OVD bit in the Status Register.

## PREFERENCES MENU

<!-- image -->

The Preferences Menu allows the user to change COM port settings at any time. Edit Preferences opens the Select Preferences window. See Selecting the COM Port above.

## HELP MENU

<!-- image -->

Selecting  the  About  topic  from  the  Help  Menu  will  open  a  window  containing  information  about  this program and Dallas Semiconductor.

## PROGRAM TABS

All functions of the program are divided under five tabs in the main program window. Left click on the appropriate tab to move to the desired function page. Located under the Meters tab is all information on real-time updates measured by the DS2756: voltage, current, accumulated charge, temperature, and the status of the PIO and POR bits of the Special Feature Register. The Data Log tab allows the user to store all real time information to a file. The Memory tab displays the contents of every register and memory location inside the DS2756 and allows the user to alter the data. The Pack Information tab gives the user the ability to assign a default device configuration and store that information to the DS2756 and/or a file. The Fuel Gauging tab uses the cell characterization information stored under Pack Info to maintain a high accuracy remaining capacity indicator.

## METERS TAB

<!-- image -->

The Meters Screen displays the latest real-time measurements of cell voltage, temperature, current and accumulated charge with both analog meter readouts and digital values. The sense resistor value used to calculate the current reading is shown in the current section. Left click on it or go to the sense resistor sub-tab under Pack Info to change this value.

The user can use the Snapshot Mode of the DS2756 by left clicking on the TAKE SNAP SHOT button. This will send the Sync Function Command to the device that will take a Snap Shot of the Voltage and Current registers and hold those values.  When the device is in Snapshot Mode, this button will then read RESUME.  Left clicking on the RESUME button will clear the SNAP bit in the Special Feature register and allow the device to return to normal operation

The present states of the PIO bit and the POR bit of the Special Feature Register are shown at the bottom of the window. The user can toggle the value of the PIO bit by left clicking on the associated button.  If the POR bit is set, the user can clear the bit by left clicking on the associated button.  If the POR bit is cleared, the button will not be visible.

## SETTING SUSPEND THRESHOLDS

<!-- image -->

The Suspend Thresholds set the current level that the device uses to determine if it should enter and exit Suspend Mode.  Left clicking on the Set Suspend Limits button will open a new window to allow the high and low Suspend limits to be entered in terms of mA.  Left clicking on the Write button will write the appropriate EEPROM locations.

## SETTING INTERRUPT THRESHOLDS

<!-- image -->

The bottom right side of the Meters Tab shows the alarm settings.  Left clicking on the SET button will open a new window to allow the high and low Temperature and ACR Alarm limits to be entered in terms of degree C or mAhrs.  Left clicking on the OK button will write the appropriate SRAM locations.

## ENABLING INTERRUPTS

<!-- image -->

The  DS2756  can  be  configured  in  the  Status  Register  to  provide  an  interrupt  on  PIO  or  DQ.    The Interrupts are enabled by setting the Interrupt Enable (IE) bit in the Special Feature Register.  Once the Interrupts are enabled, all 1 Wire activity must stop because a 1 Wire Reset will clear the IE bit.  So when the user left clicks the ENABLE INTERRUPTS button, the above message box will be displayed.  As long as that message box is displayed, no 1 Wire activity is generated by the DS2756.  The user must monitor the PIO or DQ pins externally to observe the interrupt when one of the alarm limits is crossed.

## SETTING ACCUMULATION BIAS

<!-- image -->

The user can update the Accumulation Bias Register by left clicking on the SET ACC BIAS button on the Meters Tab.  That will open up the Set Accumulation Bias Register window.  When the user left clicks the  WRITE  button  the  value  that  is  entered  into  the  New  Accumulation  Bias  Value  text  box  will  be written to the Accumulation Bias Register (location 0x33h).  This new value will be added to the current register  on  each  conversion  cycle.    Clicking  the  WRITE  button  will  also  update  the  Offset  Blanking Enable (OBEN) bit of the Status Register with the value of the associated checkbox.

The  FIND  ACC  BIAS  button  allows  the  software  to  auto-detect  the  appropriate  Accumulation  Bias Register value based on the Average Current Reading. The auto-detection should be performed while the pack is disconnected and there is no current flow. The process takes approximately 10 seconds.

## SETTING ACCUMULATED CURRENT REGISTER

<!-- image -->

The user can bring up the Set Accumulated Current Register window by left clicking the Set ACR button of the Meters Tab. This window allows the user to enter values for the Accumulated Current Register and Rated  Battery  Capacity  in  mAH.  Rated  Battery  Capacity  is  used  to  determine  full-scale  range  on  the Accumulated Charge Meter. This value is stored in software only and does not affect the Fuel Gauging data.

## DATALOG TAB

<!-- image -->

The Data log tab allows the user to see the DS2756's parameter measurements graphed over time. There are separate sub-tabs for voltage, current, temperature, and accumulated charge. Each graph displays the last 500 data points collected by the DS2756 EV kit software. The sampling interval can be adjusted from 1  second  to  15  minutes  and  can  be  adjusted  from  the  Sampling  Interval  Menu  at  the  bottom  of  the window. The Clear Graphs button will clear all data from all four graphs, but does not reset the log to file function.

The  Log  to  File  sub-tab  contains  information  for  storing  all  log  data  to  an  ASCII  file.  The  default filename is c:\DS2756K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data will be stored at the same interval selected for updating the graphs in the tab-delimited format of

'Time &lt;tab&gt; Voltage &lt;tab&gt; Current &lt;tab&gt; Temperature &lt;tab&gt; ACR'

for  easy  import  into  a  spreadsheet.  The  most  recent  50  samples  are  displayed  in  the  window  for observation.  Warning  -  The  Log  Data  function  overwrites  previous  file  information.  Data  previously stored in the file will be lost.

## MEMORY TAB

<!-- image -->

The Memory Tab gives the user access to all 13 register, 96 EEPROM, and 32 SRAM bytes inside the DS2756. They are separated into eight sub-tabs for convenience. Any value can be modified by clicking in that address' text box and typing a new value in hexadecimal format. The WRITE button will copy the 16 bytes of data on the tab to the corresponding location inside the DS2756 (Scratchpad RAM on the EEPROM blocks). The READ button will update the entire tab's text boxes with data from the DS2756 (Scratchpad  RAM  on  the  EEPROM  blocks).  Sub-tabs  displaying  any  EEPROM  data  will  also  have COPY and RECALL buttons to allow the user to transfer the data between Scratchpad and EEPROM memory internal to the DS2756.  Each EEPROM block on the DS2756 is 32 bytes, so that Block 0 is from  location  0x20  to  0x3F,  Block  1  is  from  0x40  to  0x5F  and  Block  2  is  from  0x60  to  0x7F.  The PERMANENTLY LOCK EEPROM BLOCK 0/1/2 buttons  will  permanently  store  the  data  currently located in that block's 32 bytes of EEPROM. Verify your data first by issuing a Recall and a Read on both tabs of the EEPROM block.

## PACK INFORMATION TAB

<!-- image -->

The  Pack  Information  tab  gives  the  pack  manufacturer  the  ability  to  assign  default  register  settings, device and sense resistor selection, and recommended manufacturer data and fuel gauging information.

The Device Select sub-tab allows the user to choose which device on the 1-wire bus to communicate with.  Clicking  on  the  Find  DS2756  Net  Addresses  button  will  begin  a  SEARCH  NET  ADDRESS operation on the 1-wire bus. All DS2756s found on the bus will be listed in the Net Addresses field. To communicate to any device on the bus, click on its address inside the Net Addresses field to select it. The program will now use this device for all operations until a different DS2756 is chosen.

The  Device  Setup  sub-tab  shows  the  current  state  of  all  major  features  of  the  DS2756.  All  status indicators shown here directly mirror their corresponding bits in the Status and Special Feature registers. Clicking on any of the status indicators will open the corresponding register window to allow editing. See Registers Menu above. The selection fields on the right hand side of the sub-tab set how the EEPROM backup  bits  (location  0x31h)  will  be  programmed  when  the  DS2756  is  programmed  with  the  pack information.

## SETTING SENSE RESISTOR VALUE

<!-- image -->

The Sense Resistor Select sub-tab allows the user to correct the current measurements if a different value of sense resistor is used. All DS2756s with an integrated sense resistor use 20m Ω s. If the sense resistor is located externally, the user should select the external resistor radio button on this tab, then enter the value of the resistor in m Ω s in the Sense Resistor Value field and then click the WRITE SENSE RESISTOR button.

<!-- image -->

The  FIND  SENSE  RESISTOR  button  opens  the  Find  Sense  Resistor  window.  The  user  can  then determine the resistance by forcing a known current and measuring the voltage drop with the DS2756. The resistance value is stored with ¼ m Ω resolution into the user EEPROM of the device. The program uses this value to convert the voltage difference from the VSENS+ and VSENS- pins into milliamps. If this value does not match the value of the external resistor, current measurements will be inaccurate.

## MEMORY MAP

The Battery Data and Fuel Gauging Data sub-tabs demonstrate how the pack manufacturer can use the DS2756s EEPROM fields to store relevant pack information such as manufacturer, chemistry, etc… The fuel gauging characterization data is used by the fuel gauging algorithms in the software. See the Fuel Gauging  Tab  description  below.  Clicking  on  the  LOAD  DEFAULT  PACK  INFO  button  will  enter example data into the information fields of the Device Setup, Battery Data, and Fuel Gauging Data subtabs. To change any of this information, simply click on the desired text field and enter the new value. Once all data is in the desired format, click on the Write DS2756 button to copy it to the EEPROM of the DS2756. This information can also be stored to a file and recalled later using the LOAD/SAVE PACK INFO buttons.

## MEMORY MAP OF PACK INFORMATION DATA

| 0x20 0x21   | Fuel Gauging - Full Point at 0  C                                  |
|-------------|---------------------------------------------------------------------|
| 0x22        | Fuel Gauging - Full Point difference from 10  C to 0  C           |
| 0x23        | Fuel Gauging - Full Point difference from 20  C to 10  C          |
| 0x24        | Fuel Gauging - Full Point difference from 30  C to 20  C          |
| 0x25        | Fuel Gauging - Full Point difference from 40  C to 30  C          |
| 0x26 0x27   | Total Accumulated Discharge - Divided by 20 to store in 2 bytes     |
| 0x28 0x29   | Fuel Gauging - Age Scalar                                           |
| 0x2A        | Fuel Gauging - Time from Break Point to Full at 40  C              |
| 0x2B        | Fuel Gauging - Time from Break Point to Full at 20  C              |
| 0x2C        | Fuel Gauging - Time from Break Point to Full at 0  C               |
| 0x2D        | Fuel Gauging - Time from Empty to Full at 40  C                    |
| 0x2E        | Fuel Gauging - Time from Empty to Full at 20  C                    |
| 0x2F        | Fuel Gauging - Time from Empty to Full at 0  C                     |
| 0x30        | Sense Resistor (1/4m  resolution)*                                 |
| 0x31        | PMOD RNAOP SWEN                                                     |
| 0x32        | Fuel Gauging - Charge Estimation Break Point in mAH                 |
| 0x33        | Current Offset - Do not overwrite                                   |
| 0x34        | Discharge Suspend Threshold                                         |
| 0x35        | Charge Suspend Threshold                                            |
| 0x36        | Date Code                                                           |
| 0x37        | Fuel Gauging - Standby Empty Point difference from 0  C to 10  C  |
| 0x38        | Fuel Gauging - Standby Empty Point difference from 10  C to 20  C |
| 0x39        | Fuel Gauging - Standby Empty Point difference from 20  C to 30  C |
| 0x3A        | Fuel Gauging - Standby Empty Point difference from 30  C to 40  C |
| 0x3B        | Fuel Gauging - Active Empty Point difference from 0  C to 10  C   |
| 0x3C        | Fuel Gauging - Active Empty Point difference from 10  C to 20  C  |
| 0x3D        | Fuel Gauging - Active Empty Point difference from 20  C to 30  C  |
| 0x3E        | Fuel Gauging - Active Empty Point difference from 30  C to 40  C  |
| 0x3F        | Fuel Gauging - Active Empty Point at 40  C                         |

The memory map above shows the format in which the data is stored within the device.

*  The  FuelPack  algorithm  expects  the  sense  resistor  value  will  be  stored  in  address  0x34h  of  the UserData.Memory array that is passed to the algorithm.  However, in EEPROM, that location is defined in  the  DS2756  to  be  the  Discharge  Suspend  Threshold  and  the  sense  resistor  is  stored  in  EEPROM Memory location 0x30h as shown in the Memory Map.  In order for the FuelPack algorithm to correctly calculate the remaining capacity, the user must copy the value of the sense resistor register (EEPROM Memory Address 0x30h) into the UserData.Memory(0x34h) prior to passing the structure to the FuelPack algorithm.  The DS2756 EV kit software automatically performs this operation.

## FUEL GAUGING TAB

<!-- image -->

The  final  program  tab  performs  a  high  accuracy  calculation  of  remaining  cell  capacity  using  Dallas Semiconductor's fuel gauging algorithms. For this feature to function properly, cell characterization data must be stored in the DS2756's  user  EEPROM.  See  the  Pack  Information  section  above. If characterization  data  cannot  be  found,  the  fuel  gauge  will  not  start  and  an  error  message  will  be displayed. The Relative Capacity number represents what percentage of cell capacity is remaining based on present algorithm inputs such as temperature, discharge rate, etc… This value is also reflected in the analog meter. The remaining cell capacity is also displayed in terms of milliamp-hours and Joules under Absolute Capacity and Remaining Energy respectively.

The  remaining  run  time  is  calculated  using  the  Run  Time  Power  Reference  input  from  the  user. Instantaneous current measurements in the user's application can vary greatly. By using a reference scalar instead  of  actual  current  and  voltage  measurements,  the  program  produces  a  stable  estimation  of remaining run time. The user should enter the largest expected power draw from the device into the Run Time Power Reference field for the most accurate estimation.

If  this  example  were  part  of  a  fully  integrated  fuel  gauging  system,  the  algorithms  would  need  to  be updated by the host each time the cell was fully charged or discharged in order to maintain long term accuracy. To simulate this, the user should click the EMPTY or FULL buttons each time the monitored pack  is  completely  charged  or  discharged.  The  EMPTY  button  will  reset  the  Accumulated  Current Register  to  the  expected  empty  point  based  on  present  conditions.  The  FULL  button  will  set  the Accumulated Current Register to the expected full point based on present conditions. The LEARN button will reset the expected full point to the present Accumulated Current Register value and update the fuel gauging information in the DS2756's user EEPROM. In doing this, the algorithms 'learn' from previous results  and  are  more accurate in the future. This tab gives an example only of fuel gauging. For more information on the process of high accuracy fuel gauging consult Dallas Semiconductor's fuel gauging application notes.

<!-- image -->

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                           | PAGES CHANGED   |
|-----------------|-------------------------------------------------------|-----------------|
| 9/09            | Changed the part number from DS2756K to DS2756EVKIT+. | All             |