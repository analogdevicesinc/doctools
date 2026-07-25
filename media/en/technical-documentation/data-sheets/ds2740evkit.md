<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the Capabilities of the DS2740 High-Precision Coulomb Counting IC Including:
-  Real-Time Current Measurements
-  High-Precision Current Accumulation
-  Identification
-  Programmable I/O Operation
-  Interfaces to the USB Port of a PC Running Windows  XP or Older Operating System

## INDEX

Evaluation Kit Contents

Equipment Needed

Introduction

Setup and Installation

Board Connections

Software Installation

Selecting the COM Port

Program Menus

Program Tabs

Meters Tab

Data Log Tab

Memory Tab

Pack Information Tab

Windows XP is a registered trademark of Microsoft Corp.

## INTRODUCTION

The  DS2740  evaluation  kit  (EV  kit)  makes  performance  evaluation,  software  development,  and prototyping with the DS2740 high-precision coulomb counting IC easy. The evaluation board interfaces to a PC running Windows XP or older through a DS9123O USB adapter and RJ-11 cable connection.

The DS2740 EV kit evaluation software gives the user complete control of all functions of the DS2740. Separate  control  tabs  allow  the  user  access  to  all  memory  locations,  all  status  registers,  and  real-time updates of all monitored parameters. The software also incorporates a data-logging feature to monitor a battery over time.

The evaluation board circuit is designed to provide the DS2740 with accurate parameter measurements and protect the DS2740 from ESD damage.

*Kit  demonstration  boards  will  vary  as  they  are  improved  upon  over  time.  For  information  on  the demonstration board circuits visit our website at www.maxim-ic.com.

## DS2740EVKIT High-Precision Coulomb Counter IC Evaluation Kit

<!-- image -->

## EVALUATION KIT CONTENTS

1 pc. TSSOP Evaluation Board

1 pc. DS9123 Serial Port Adapter

1 pc. RJ-11 Phone Cable

## EQUIPMENT NEEDED

- 1) A PC running Windows XP or older operating system with an available USB port.
- 2) Cables with mini-grabber style clips or the ability to solder directly to connection pads.
- 3) A Lithium-Ion (Li+) battery or 3-cell NiMH stack and a power supply and/or load circuit.

## ORDERING INFORMATION

| PART         | TYPE   |
|--------------|--------|
| DS2740EVKIT+ | EV Kit |

## SETUP AND INSTALLATION

## Board Connections

Connections to the demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the board can be accomplished by connecting the RJ11  jack  to  the  DS9123O  USB  adapter  with  the  2  conductor  cable  provided.  Then  the  DQ  and  PACterminals on the RJ-11 jack can be wired directly to the DQ and PAC- pads on the demonstration board.

Figure 1 shows the recommended circuit for the DS2740 EV kit board. The Li+ cell or NiMH cell stack is connected between the BAT+ and BAT- pads. If a Li+ cell is used a protection circuit must be included between the battery and the demo board. The user system load circuit/charger is connected from BAT+ to PAC-. The evaluation software can be run with or without a load or charger as long as a cell is connected between the BAT+ and BAT- terminals providing a minimum of 2.7V to power the DS2740.

Figure 1. PD122402 Cell, Load, and Charger Connections

<!-- image -->

## Software Installation

To  install  the  DS2740  EV  kit  software,  exit  all  programs  currently  running  and  download  the  latest DS2740 EV kit software from our website at www.maxim-ic.com. Unzip the compressed file and run SETUP.EXE  to  begin  the  installation  process.  Follow  the  prompts  to  complete  the  installation.  The DS2740 EV kit software can be uninstalled in the Add/Remove Programs tool in the Control Panel . After the installation is complete, open the DS2740K folder and run DS2740K.EXE or select DS2740K from the  program  menu.  A  splash  screen  containing  information  about  the  evaluation  kit  appears  as  the program is being loaded.

All relevant data sheets and application notes on the DS2740 and DS2740 EV kit can be found on our website at www.maxim-ic.com.

## Selecting the COM Port

<!-- image -->

The first time the software runs, the Port Settings window appears. In this window, select the COM port to which the DS9123O is attached and the desired communication rate, then hit OK. The DS2740 EV kit software saves this COM port selection and automatically uses the selection each time the program starts. To change the COM port later, click the Preferences option on the menu bar, select Edit Preferences , and then select  the  appropriate  port.  To  attempt  to  automatically  locate  the  DS9123O,  click the  Poll  Ports button.  Warning:  automatically  polling  for  the  DS9123O  can  disrupt  other  devices  connected  to  your computer's COM ports.

## PROGRAM MENUS

Several pull-down menu options have been provided to simplify use of the DS2740 EV kit software for the user. Their functions are individually detailed below.

## Registers Menu

<!-- image -->

The Registers Menu gives immediate access to the Status and Special Feature Registers in the DS2740. Selecting one of the registers will open an individual control window giving the user a description of each register bit and the ability to read or write it. See the Status register window example in the next section. The individual control window can also be displayed by left clicking on any label referring to any of the bits of the Status or Special Feature Registers .

## Status Register

<!-- image -->

The  present  states  of  all  register  bits  are  displayed  immediately  upon  opening  the  register  window. Read/write locations contain a selection field to allow the user to determine their state.

## Resolution Menu

<!-- image -->

The Resolution Menu allows the user to select which version of the DS2740 is being used. This selection will affect the value of the units used to calculate the current. The software cannot detect which version of the DS2740 is being used, so if the wrong version is selected, the current reading will be off by a factor of 4.

## 1-Wire Speed Menu

<!-- image -->

The 1-Wire ® Speed Menu allows the user to select with which 1-wire speed the device is set. The speed is determined by the state of the pin 1 (OVD pin). If pin 1 has a value of 1, the device communicates with 1wire overdrive timing. If pin 1 has a value of 0, the device communicates with regular 1-Wire timing.

## Preferences Menu

<!-- image -->

The Preferences Menu allows the user to change COM port settings at any time. Edit Preferences opens the Select Preferences window. See Selecting the COM Port above.

## Help Menu

<!-- image -->

Selecting  the About topic  from  the Help  Menu will  open  a  window  containing  information  about  this program and Dallas Semiconductor.

## PROGRAM TABS

All functions of the program are divided under four tabs in the main program window. Left click on the appropriate tab to move to the desired function page. Located under the Meters tab is all information on real-time  updates  measured  by  the  DS2740:  current,  accumulated  charge,  and  the  state  of  the  SMOD, RNAOP and PIO bits of the Status and Special Feature Registers . The Data Log tab allows the user to store  all  real-time  information  to  a  file.  The Memory tab  displays  the  contents  of  every  register  and memory location inside the DS2740 and allows the user to alter the data. The Pack Information tab gives the user the ability to choose with which device on the 1-Wire bus to communicate and set the value of the sense resistor.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

## Meters Tab

<!-- image -->

The Meters Screen displays  the  latest  real-time  measurements  of  current  and  accumulated  charge  with both  analog  meter  readouts  and  digital  values.  The  sense  resistor  value  used  to  calculate  the  current reading is shown in the current section. Left click on it or go to the sense resistor sub-tab under Pack Info to change this value.

The values of the SMOD, RNAOP, and PIO bits of the Status and Special Feature Registers are  also displayed. The user also has the ability to toggle the value of these bits by left clicking on the associated button.

## Set Accumulated Current Register

<!-- image -->

The user can bring up the Set Accumulated Current Register window by left clicking the Set ACR button. This  window allows the user to  enter  values  for  the Accumulated Current Register and Rated Battery Capacity in mAH. Clicking the OK button will write the New ACR Value to the DS2740's Accumulated Current Register . The Rated Battery Capacity is used to determine full-scale range on the Accumulated Charge Meter and is only a software value; it is not stored on the device.

## Data Log Tab

## Real-Time Graphs

<!-- image -->

The Data  Log  Tab allows  the  user  to  see  the  DS2740's  parameter  measurements  graphed  over  time. There are separate sub-tabs for current and accumulated current. Each graph displays the last 500 data points collected by the DS2740 EV kit software. The sampling interval can be adjusted using the menu located at the bottom of the window. The interval can be set from as slow as every 15 minutes to as fast as communication and the PC will allow. The Clear Graphs button will clear all data from both graphs, but does not reset the log to file function.

## Log Data to File

<!-- image -->

The Log to File sub-tab contains control information for storing all log data to an ASCII file. The default filename is c:\DS2740K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data will be stored at the same interval selected for updating the graphs in the tab-delimited format of:

'Time &lt;tab&gt; Current &lt;tab&gt; ACR'

for  easy  import  into  a  spreadsheet.  The  50  most  recent  samples  are  displayed  in  the  window  for observation. Warning: the Log Data function overwrites previous file information. To prevent the loss of data previously stored in the file, change the filename before clicking the Log Data button.

## Memory Tab

<!-- image -->

The Memory Tab gives  the  user  access  to  all  6  user  registers  inside  the  DS2740.  Most  values  can  be modified by clicking in that address' text box and typing a new value in hexadecimal format. The Current Register and  some  bits  in  the Status and Special  Feature  Registers are  read-only  so  they  can  not  be modified by the user. The Write button will write all of the data locations displayed to the corresponding location inside the DS2740. The Read button will update the text boxes with data from the DS2740.

## Pack Information Tab

## Device Select

<!-- image -->

The Device  Select sub-tab  allows  the  user  to  choose  with  which  device  on  the  1-Wire  bus  to communicate.  Clicking  on  the Find  Net  Addresses button  will  begin  a  SEARCH  NET  ADDRESS operation on the 1-Wire bus. All 1-Wire devices found on the bus and communicating at the selected 1Wire speed will be listed in the Net Addresses field. To communicate to any device on the bus, click on its  address  inside  the Net  Addresses field  to  select  it.  The  program  will  now  use  this  device  for  all operations (communicating using the Match Net Address command) until a different DS2740 is chosen.

## Sense Resistor

<!-- image -->

The Sense Resistor sub-tab allows the user to more accurately measure the current by entering the exact value of the sense resistor that is used. Enter the value of the resistor in m  s in the Sense Resistor Value field. This value will be used in software to calculate the current flowing through the sense resistor.

## Find Sense Resistor

<!-- image -->

The Find Sense Resistor button opens the Find Sense Resistor window. The user can then determine the resistance by forcing a known current and measuring the voltage drop with the DS2740. The program uses this value to convert the voltage difference from the SNS and VSS pins into mAmps. If this value does not match the value of the external resistor, current measurements will be inaccurate. If the value is 0 the program automatically defaults to a resistor of 20m  s. This is a software value only, it is not stored on the DS2740.

## DS2740 EV Kit Schematic

<!-- image -->

## REVISION HISTORY

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------|-----------------|
|                 0 | 4/03            | Initial release.                                     | -               |
|                 1 | 10/09           | Changed the part number from DS2740K to DS2740EVKIT. | All             |