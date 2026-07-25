<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the Capabilities of the DS2786 Stand-Alone OCV-Based Fuel Gauge Including:
-  Voltage Measurement
-  Estimation of Available Capacity for Li+ Cells
-  Current Measurement
-  Temperature Measurement
-  Current Accumulation
-  Information Storage
-  Thermistor Reading
-  Interfaces to the USB Port of a PC Running Windows XP  or older operating system

## EVALUATION KIT CONTENTS

1 pc. Evaluation Board

1 pc. DS9123O USB Port Adapter

1 pc. RJ-11 Cable

Windows XP is a registered trademark of Microsoft Corp.

## INTRODUCTION

The DS2786 evaluation kit (EV kit) makes performance evaluation, software development, and prototyping with the DS2786 stand-alone OCV-based fuel gauge easy. The evaluation board interfaces to a PC through a DS9123O USB adapter and RJ-11 cable connection.

Separate control tabs allow the user access to all memory locations, all control registers, and real-time updates of all monitored parameters. The software also incorporates a data-logging feature to monitor a cell over time.

The evaluation board circuit is designed to provide the DS2786 with accurate parameter measurements as well. Kit demonstration boards will vary as they are improved upon over time. For information on the demonstration board circuits, visit our website at www.maxim-ic.com.

## DS2786EVKIT Stand-Alone OCV-Based Fuel Gauge Evaluation Kit

## INDEX

Evaluation Kit Contents

Equipment Needed

Introduction

Setup and Installation

Board Connections

Software Installation

Selecting the COM Port

Program Menus

Menu Windows

Status Register

Current Offset Register

Program Tabs

Real Time Tab

Memory Tab

Parameters Tab

Log Data Tab

## EQUIPMENT NEEDED

1. A PC running Windows XP or older operating system and an available USB port.
2. Cables with mini-grabber style clips or the ability to solder directly to connection pads.
3. A Li+ battery and a power supply and/or load circuit.

## ORDERING INFORMATION

| PART         | TYPE   |
|--------------|--------|
| DS2786EVKIT+ | EV Kit |

## SETUP AND INSTALLATION

## BOARD CONNECTIONS

Connections to the TSSOP demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the TSSOP board can be accomplished either through the RJ-11 jack by connecting the provided standard six conductor RJ-11 cord.

Figures 1a and 1b show the recommended circuits to simulate charging and discharging. The Li+ cell is connected between the B+ and B- pads. The battery charger/power supply or circuit load is connected between the B+ and Ppads. The evaluation software can be run in either configuration as long as a cell is connected between the B+ and B- terminals providing a minimum of 2.5V to power the DS2786.

<!-- image -->

## SOFTWARE INSTALLATION

To install the DS2786 EV kit software, exit all programs currently running and download the latest DS2786 EV kit software from our website at www.maxim-ic.com. Unzip the compressed file and double click the SETUP.EXE icon to being the installation process. Follow the prompts to complete the installation. The DS2786 EV kit software can be uninstalled in the Add/Remove Programs tool in the Control Panel. After the installation is complete, open the DS2786K folder and run DS2786K.EXE or select DS2786K from the program menu. A splash screen containing information  about  the  evaluation  kit  appears  as  the  program  is  being  loaded.  All  relevant  data  sheets  and application notes on the DS2786 and DS2786 EV kit can be found on our website at www.maxim-ic.com..

## SELECTING THE COMMUNICATION PORT

The first time the software runs, the Select Preferences window may appear. In this window, select either serial port  or  USB  communication  and  the  port  number;  then  hit  OK.  The  DS2786  EV  kit  software  saves  this  port selection and automatically uses the selection each time the program starts. To change the port later, click the Preferences  option  on  the  menu  bar,  select  Port  Settings,  and  then  select  the  appropriate  port.  To  attempt  to automatically locate the DS9123O, click the Poll Ports button. Warning-automatically polling for the DS9123O can disrupt other devices connected to your computer's COM ports.

<!-- image -->

## PROGRAM MENUS

Several pull down menu options have been provided to simplify use of the DS2786 EV kit software for the user. Their functions are individually detailed below.

## REGISTERS MENU

<!-- image -->

The Registers Menu gives immediate access to the Status register and the Current Offset Bias Register of the DS2786. Selecting either of the registers will open an individual control window giving the user a description of each register bit and the ability to read or write it.

## STATUS/CONFIGURATION REGISTER

<!-- image -->

The present state of all register bits are displayed immediately upon opening the register window. R/W locations contain a selection field or command button to allow the user to determine their state. Pressing the Write Status button will write the new value to the register and read the corresponding register inside the DS2786 to verify the correct value was written. Note: This window does not copy these values to EEPROM. To copy the desired values to EEPROM, see the Parameters section.

## CURRENT OFFSET BIAS REGISTER

<!-- image -->

The Current Offset Bias can be entered into the text box and then written to the device by left-clicking on the Write button. A message box will be displayed asking if new offset should be copied to EEPROM. If Yes is clicked, a 15V programming voltage will need to be connected to the VPROG pin, as described in the Memory section below.

The  Calibrate  Offset  button  allows  the  software  to  auto-detect  the  current  offset  based  on  the  reading  of  the Current  register.  The  Read  Current  Register  button  will  display  the  real  time  current  reading  from  the  Current Register.

## PREFERENCES MENU

<!-- image -->

The Preferences Menu allows the user to change COM port settings at any time. Edit Preferences opens the Select Preferences window. See Selecting the communication port above.

## HELP MENU

<!-- image -->

Selecting the About topic from the Help Menu will open a window containing information about the current revision of this program and Dallas Semiconductor.

## PROGRAM TABS

All functions of the program are divided under four tabs in the main program window. Left click on the appropriate tab  to  move  to  the  desired  function  page.  Located  on  the  Meters  tab  is  all  of  the  information  measured  and calculated by the DS2786. The Memory tab displays the contents of every register and memory location inside the DS2786 and allows the user to alter the data. The Parameters Tab gives the user access to the entire Parameter EEPROM memory block. The Data Log tab allows the user to store all real time information to a file and view the data in a graphical form.

## REAL-TIME TAB

<!-- image -->

The Meters Tab displays the latest real-time measurements of cell voltage, auxiliary inputs, temperature, current and relative capacity with both analog meter readouts and digital values.

The Auxiliary Inputs can be used to measure an identification resistor or a thermistor that should be connected between AIN0 / AIN1 and SGND. Additionally, the DS2786 can be configured to return the temperature in the place of Auxiliary Input 1 by setting the ITEMP bit on the Status/Configuration Register.

## UPDATE SENSE RESISTOR

<!-- image -->

The sense resistor value used to calculate the current reading is shown in the current section. Left-click on the Update Sense Resistor button to open the Find Sense Resistor window.

The value of  the  sense  resistor  is  not  stored  by  the  DS2786,  but  this  value  is  stored  on  the  host  computer  to calculate the current flowing across the sense resistor. This value will be remembered each time the DS2786 EV kit is  started.  The  user  can  manually  enter  the  Sense  Resistor  Value  at  the  top  of  the  window,  or  can  allow  the software to calculate the value. To allow the DS2786 EV kit to calculate the sense resistor, simply enter the value of the current that is flowing across the sense resistor in the Current Forced text box in terms of mAmps. Then leftclick the Calculate Resistor button and the software will determine the value of the sense resistor and put the new value in the Sense Resistor Value text box at the top of the window. Click OK to accept the new Sense Resistor Value, or Click Cancel to ignore the changes that were made.

## UPDATE REFERENCE RESISTORS

<!-- image -->

A known 10K resistor is used to determine the resistance of the Auxiliary Inputs. If the values of the resistors are not exactly 10K, or if other values are desired for the known resistors, simply left-click on the Update Resistors button and the Update Reference Resistors window will appear. Simply enter the correct reference resistance and left-click Update. Once again, this is only a software value, so it is not stored on the device, but it will be recalled each time the program is started.

## COMMANDS

<!-- image -->

The Commands section provides access to the commands of the Command Register. Left-click on the Stored OCV button to force an OCV Calculation based on the voltage stored as the Initial Voltage. This will modify both the Relative Capacity Register and the Last OCV Register.

Left-click  on  the  Present  OCV  button  to  force  an  OCV  Calculation  based  on  the  present  state  of  the  Voltage register. This command will also modify the Relative Capacity and Last OCV Registers. This command should only be sent when there is an OCV condition on the cell. If current is flowing, a OCV calculation value will occur based on a loaded voltage, rather than an open-circuit voltage. This error will  persist  until  an  actual  OCV  condition  is encountered and an OCV calculation can take place. This command is very useful when the DS2786 EV kit is powered by a power supply and the voltage is changed quickly and the user wants to monitor the Relative Capacity change with changes in voltage.

A  Power-on  Reset  (POR)  can  be  forced  by  left-clicking  on  the  Force  POR  button.  This  will  send  the  DS2786 through its Power On sequence.

## MEMORY TAB

<!-- image -->

The Memory Tab gives the user access to read the contents of all of the Memory inside the DS2786. The Memory is  divided into 3 Sub-Tabs which allows the user to view the Real-time registers as well as the values stored in EEPROM. Memory Addresses  60h  -  7Fh  are  EEPROM  locations.  Left-clicking  the  Write  or  Read  buttons  will access the Shadow RAM. Left-clicking on the Copy or Recall buttons will transfer the data between the EEPROM locations and the Shadow RAM. A 15V programming voltage is required to copy the Shadow RAM to EEPROM. The software will prompt the user when the programming voltage should be connected to the DS2786 EV kit board to insure proper programming.

Some memory locations in the DS2786 are read-only, so they will not be altered by writing them.

## PARAMETERS TAB

<!-- image -->

The  Parameters  Tab  gives  the  user  access  to  the  entire  Parameter  EEPROM  memory.  The  DS2786  comes preloaded with a best fit curve that was calculated based on characterization data taken from cells of various sizes and manufacturers. To change any of this information, simply click  on  the  desired  text  field  and  enter  the  new value.

Clicking on the Load Default Set Up button will enter example data into the information fields of the Parameters Tab. Once all data is in the desired format, click on the Write &amp; Copy button to copy it to the EEPROM of the DS2786. A message box will be displayed prompting the user to connect a 15V programming voltage which will need to be connected to the VPROG pin in order for the data to be copied to the EEPROM of the device.

Any changes to the information can also be stored to a file and recalled later using the Load/Save Set Up buttons or the Load/Save Parameters Set Up Menu Items. These functions do not directly write or read the DS2786. It is still  necessary  for  the  user  to  store  or  recall  this  information  to  or  from  the  device  by  issuing  a  Write  or  Read buttons.

## DATA LOG TAB

<!-- image -->

The Log Data tab allows the user to see the DS2786's real time measurements graphed over time. There are separate sub-tabs for voltage, current, capacity, and auxiliary inputs. Each graph displays the last 500 data points collected by the DS2786 EV kit software. The sampling interval can be adjusted from as fast as possible to 15 minutes and can be adjusted from the Sampling Interval Menu at the bottom of the window. The Clear Graphs button will clear all data from all four graphs, but does not reset the log to file function. When the Fastest sampling interval is selected, the graphs will not be updated, only the data logging is enabled.

The Log to File Sub Tab contains control information for storing all data to an ASCII file. The default filename is c:\DS2786K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data will be stored at the same interval selected for updating the graphs in the tab-delimited format of

'Time &lt;tab&gt; Voltage &lt;tab&gt; Current &lt;tab&gt; Capacity &lt;tab&gt; AuxIn0 &lt;tab&gt; AuxIn1 &lt;tab&gt; Initial Voltage &lt;tab&gt; Last OCV &lt;tab&gt; Learned Charge Factor

for  easy  import  into  a  spreadsheet.  The  most  recent  50  samples  are  displayed  in  the  window  for  observation. Warning-he Log Data function overwrites previous file information. Data previously stored in the file will be lost.

## DS2740 EV KIT SCHEMATIC

<!-- image -->

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-----------------|------------------------------------------------------|-----------------|
| 10/09           | Changed the part number from DS2786K to DS2786EVKIT. | All             |