<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the capabilities of the DS2745 Low-Cost I 2 C Battery Monitor, including:
-  Temperature measurement
-  Voltage measurement
-  Current accumulation
-  Current measurement
-  Interfaces to the USB of a PC running Windows  XP or older operating system

## EVALUATION KIT CONTENTS

1 pc. Evaluation Board

1 pc. DS9123O USB Adapter

1 pc. RJ-11 Phone Cable

## EQUIPMENT NEEDED

1. A PC running Windows XP or older operating system and an available USB port.
2. Cables with mini-grabber style clips or the ability to solder directly to connection pads.
3. A Lithium-Ion battery and a power supply and/or load circuit

## INTRODUCTION

The  DS2745  evaluation  kit  (EV  kit)  makes  performance  evaluation,  software  development,  and prototyping with the DS2745 Low-Cost I 2 C Battery Monitor easy. The evaluation board interfaces to a PC through a DS9123O USB Adapter and RJ-11 cable connection.

The DS2745 EV kit evaluation software gives the user complete control of all functions of the DS2745. Separate control tabs allow the user access to all RAM memory locations, all control registers, and realtime  updates  of  all  monitored  parameters.  The  software  also  incorporates  a  data  logging  feature  to monitor a cell over time.

The evaluation board circuit is designed to provide the DS2745 with accurate parameter measurements and protect the DS2745 from ESD damage.

## DS2745EVKIT Low-Cost I 2 C Battery Monitor Evaluation Kit

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

## ORDERING INFORMATION

| PART         | TYPE   |
|--------------|--------|
| DS2745EVKIT+ | EV Kit |

Windows XP is a registered trademark of Microsoft Corp.

## SETUP AND INSTALLATION

## BOARD CONNECTIONS

Connections to the TSSOP demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the TSSOP board can be accomplished either through  the  RJ-11  jack  by  connecting  the  provided  standard  six  conductor  RJ-11  cord  or  by  wiring directly to the SDA. SCL and P- pads. In the latter case, the size of the board can be reduced by snapping off  the  RJ-11  jack  along  the  break  line,  see  Figure  1.  To  utilize  the  demonstration  software,  the  SDA, SCL  and  P-  lines  must  be  connected  to  the  DS9123O  communication  brick  using  either  of  the  two methods described.

## DS2745 EV KIT BOARD

Figure 1: DS2745 EV Kit Board - PD020705

<!-- image -->

Figures 2a and 2b show the recommended circuits to simulate charging and discharging. The Lithium-Ion cell  is  connected  between  the  B+  and  B-  pads.  The  battery  charger/power  supply  or  circuit  load  is connected between the B+ and P- pads. The evaluation software can be run in either configuration as long as a cell is connected between the B+ and B- terminals providing a minimum of 2.5 volts to power the DS2745. Leaving the PIO pin unconnected does not interfere with the operation of the demonstration board. Refer to the datasheet for the operation of this pin.

Figure 2a: Charging Circuit

<!-- image -->

Fig 2b: Discharging Circuit

<!-- image -->

## SOFTWARE INSTALLATION

To  install  the  DS2745  EV  kit  software,  exit  all  programs  currently  running  and  download  the  latest version at www.maxim-ic.com. Unzip the compressed file and run SETUP.EXE to begin the installation process. Follow the prompts to complete the installation. The DS2745 EV kit software can be uninstalled in  the  Add/Remove  Programs  tool  in  the  Control  Panel.  After  the  installation  is  complete,  open  the DS2745K folder and run DS2745K.EXE or select DS2745K from the program menu. A splash screen containing information about the evaluation kit appears as the program is being loaded.

## SELECTING THE COM PORT

The first time the software runs, the Select Preferences window may appear. In this window, select either serial port or USB communication and the port number; then hit OK. The DS2745 EV kit software saves this port selection and automatically uses the selection each time the program starts. To change the port later, click the Preferences option on the menu bar, select Edit Preferences, and then select the appropriate port.  To  attempt  to  automatically  locate  the  DS9123O,  click  the  Poll  Serial  Ports  button.  Warning  automatically  polling  for  the  DS9123O  can  disrupt  other  devices  connected  to  your  computer's  COM ports.

<!-- image -->

## MENUS

Several pull down menu options have been provided to simplify use of the DS2745 EV kit software for the user. Their functions are individually detailed below.

## FILE MENU

<!-- image -->

The File Menu allows the user to exit the program and close all communication.

## REGISTERS MENU

<!-- image -->

The Registers Menu gives immediate access to the status register of the DS2745. Selecting the Status Register will open an individual control window giving the user a description of each register bit and the ability to read or write it. See the status register window example.

## STATUS REGISTER

<!-- image -->

The present state of all register bits are displayed immediately upon opening the register window. The PORF can be cleared by clicking on the Clear POR Flag button. Other R/W locations contain a selection field to allow the user to determine their state. Pressing the Write button will automatically update the Status  Register  inside  the  DS2745.  If  the  user  selects  to  change  the  Slave  Address  bits  of  the  Status Register, the software will automatically change the Slave Address that is used for communication.

<!-- image -->

The Preferences Menu allows the user to change COM port settings at any time. Edit Preferences opens the Select Preferences window. See Selecting the COM Port above.

## HELP MENU

<!-- image -->

Selecting  the  About  topic  from  the  Help  Menu  will  open  a  window  containing  information  about  this program and Dallas Semiconductor.

## PROGRAM TABS

All functions of the program are divided under three tabs in the main program window. Left click on the appropriate tab to move to the desired function page. Located under the Meters tab is all information on real-time updates measured by the DS2745: voltage, current, accumulated charge, temperature, and the status of the PIO pin. The Memory tab displays the contents of every register and memory location inside the DS2745 and allows the user to alter the data that is writable. The Data Log tab allows the user to store all real time information to a file.

## METERS TAB

<!-- image -->

The Meters Screen displays the latest real-time measurements of cell voltage, temperature, current and accumulated current with both analog meter readouts and digital values. The sense resistor value used to calculate  the  current  reading  is  shown  in  the  current  section.  Left  click  on  the  Update  Sense  Resistor button to open the Find Sense Resistor window shown below to edit the value.  The Current Offset Bias Register,  Accumulation  Bias  Register,  Accumulated  Current  Register  and  Slave  Address  can  all  be updated by left clicking on the appropriate button.

The present state of the PIO bit is shown at the bottom of the window. The user can toggle the value of the PIO bit by left clicking on the associated button

## FIND THE SENSE RESISTOR

<!-- image -->

The Update Sense Resistor button opens the Find Sense Resistor window. The user can input a sense resistor value into the Sense Resistor Value text box, or the user can determine the resistance by forcing a known  current  and  measuring  the  voltage  drop  with  the  DS2745.  The  resistance  value  is  stored  in software and the program uses this value to convert the voltage difference from the VSS and SNS pins into milliamps. If this value does not match the value of the external resistor, current measurements will be inaccurate.

## SETTING THE OFFSET

<!-- image -->

The user can bring up the Set Current Offset Bias Register window by left clicking the Update Offset button of the Meters Tab. The Calibrate Offset button allows the software to auto-detect the appropriate Current  Offset  Bias  Register  value  based  on  the  Current  Reading.  The  auto-detection  should  be performed while the pack is disconnected and there is no current flow. The process takes approximately

10 seconds. This new value will be added to the Current Register and Accumulated Current Register on each conversion cycle.

## SETTING ACCUMULATION BIAS

<!-- image -->

The user can update the Accumulation Bias Register by left clicking on the Update Acc Bias button on the Meters Tab. That will open up the Set Accumulation Bias Register window. When the user left clicks the Write button the value that is entered into the New Accumulation Bias Value text box will be written to the Accumulation Bias Register. This new value will not be added to the current register but will be added to the ACR.

## SETTING ACCUMULATED CURRENT REGISTER

<!-- image -->

The user can bring up the Set Accumulated Current Register window by left clicking the Set ACR button of the Meters Tab. This window allows the user to enter values for the Accumulated Current Register and Rated  Battery  Capacity  in  mAH.  Rated  Battery  Capacity  is  used  to  determine  full-scale  range  on  the Accumulated Charge Meter. This value is stored in software only and does not affect the Fuel Gauging data.

## UPDATING THE SLAVE ADDRESS

<!-- image -->

The  user  can  bring  up  the  Update  Slave  Address  window  by  left  clicking  the  Update  Slave  Address button of the Meters Tab. This window allows the user to enter a new Slave Address that the software uses for communication, find the first Slave Address that has a responding device on the 2 Wire bus, or Read and Write the Slave Address bits of the Status Register. The Slave Address of the DS2745 can be changed from 90h to 9Eh, even numbers only.

## MEMORY TAB

<!-- image -->

The Memory Tab gives the user access to all 11 bytes inside the DS2745. The WRITE button will write the  Status  Register,  the  Accumulated Current Register, the Offset Bias Register and the Accumulation Bias Register. The Read button reads all of the bytes shown.

## DATALOG TAB

<!-- image -->

The Data log tab allows the user to see the DS2745's parameter measurements graphed over time. There are separate sub-tabs for voltage, current, temperature, and accumulated charge. Each graph displays the last 500 data points collected by the DS2745 EV kit software. The sampling interval can be adjusted from 1  second  to  15  minutes  and  can  be  adjusted  from  the  Sampling  Interval  Menu  at  the  bottom  of  the window. The Clear Graphs button will clear all data from all four graphs, but does not reset the log to file function.

The  Log  to  File  sub-tab  contains  information  for  storing  all  log  data  to  an  ASCII  file.  The  default filename is c:\DS2745K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data will be stored at the same interval selected for updating the graphs in the tab-delimited format of

'Time &lt;tab&gt; Voltage &lt;tab&gt; Current &lt;tab&gt; Temperature &lt;tab&gt; ACR&lt;tab&gt;Status'

for  easy  import  into  a  spreadsheet.  The  most  recent  50  samples  are  displayed  in  the  window  for observation.  Warning  -  The  Log  Data  function  overwrites  previous  file  information.  Data  previously stored in the file will be lost.

## DS2745 EV KIT SCHEMATIC

<!-- image -->

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-----------------|------------------------------------------------------|-----------------|
| 11/09           | Changed the part number from DS2745K to DS2745EVKIT. | All             |