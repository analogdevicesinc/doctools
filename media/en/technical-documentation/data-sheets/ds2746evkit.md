<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the capabilities of the DS2746 Low-Cost 2 Wire Battery Monitor with Ratiometric A/D Inputs including:
-  Voltage measurement
-  Current accumulation
-  Current measurement
-  A/D input measurements for ID or Thermistor Reading
-  Interfaces to the USB port of a PC running Windows XP  or older operating system

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

Accumulation Bias Register

Program Tabs

Meters Tab

Memory Tab

Data Log Tab

## INTRODUCTION

The  DS2746  evaluation  kit  (EV  kit)  makes  performance  evaluation,  software  development,  and prototyping with the DS2746 Low-Cost 2 Wire Battery Monitor with Ratiometric A/D Inputs easy. The evaluation board interfaces to a PC through a DS9123O USB Adapter and RJ-11 cable connection.

Separate control tabs allow the user access to all memory locations, all control registers, and real-time updates of all monitored parameters. The software also incorporates a data-logging feature to monitor a cell over time.

The evaluation board circuit is designed to provide the DS2746 with accurate parameter measurements as well. Kit demonstration boards will vary as they are improved upon over time. For information on the demonstration board circuits refer to our website at www.maxim-ic.com.

## DS2746EVKIT

Low-Cost 2-Wire Battery Monitor with Ratiometric A/D Inputs Evaluation Kit

## EVALUATION KIT CONTENTS

1 pc. Evaluation Board

1 pc. DS9123O USB Port Adapter

1 pc. RJ-11 Cable

## EQUIPMENT NEEDED

1. A PC running Windows XP or older operating system and an available serial port.
2. Cables with mini-grabber style clips or the ability to solder directly to connection pads.
3. A Lithium-Ion battery and a power supply and/or load circuit.

## ORDERING INFORMATION

+ Denotes lead(Pb)-free and RoHS compliant.

| PART         | TYPE   |
|--------------|--------|
| DS2746EVKIT+ | EV Kit |

Windows XP is a registered trademark of Microsoft Corp.

## SETUP AND INSTALLATION

## BOARD CONNECTIONS

Connections to the TSSOP demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the TSSOP board can be accomplished either through the RJ-11 jack by connecting the provided standard six conductor RJ-11 cord.

Figures 1a and 1b show the recommended circuits to simulate charging and discharging. The Lithium-Ion cell  is  connected  between  the  P+  and  P-  pads.  The  battery  charger/power  supply  or  circuit  load  is connected between the P+ and SGND pads. The evaluation software can be run in either configuration as long as a cell is connected between the P+ and P- terminals providing a minimum of 2.5 volts to power the DS2746.

Figure 1a: Charging Circuit

<!-- image -->

Fig 1b: Discharging Circuit

<!-- image -->

## SOFTWARE INSTALLATION

To  install  the  DS2746  EV  kit  software,  exit  all  programs  currently  running  and  download  the  latest DS2746 EV kit software from our website at www.maxim-ic.com. Unzip the compressed file and double click  the  SETUP.EXE  icon  to  begin  the  installation  process.  Follow  the  prompts  to  complete  the installation.  The  DS2746  EV kit software can be uninstalled in the Add/Remove Programs tool in the Control Panel. After the installation is complete, open the DS2746K folder and run DS2746K.EXE or select DS2746K from the program menu. A splash screen containing information about the evaluation kit appears as the program is being loaded. All relevant data sheets and application notes on the DS2746 and DS2746 EV kit can be found on our website at www.maxim-ic.com.

## SELECTING THE COMMUNICATION PORT

The first time the software runs, the Select Preferences window may appear. In this window, select either serial port or USB communication and the port number; then hit OK. The DS2746 EV kit software saves this port selection and automatically uses the selection each time the program starts. To change the port later, click the Preferences option on the menu bar, select Port Settings, and then select the appropriate port.  To  attempt  to  automatically  locate  the  DS9123O,  click  the  Poll  Ports  button.  Warning  automatically  polling  for  the  DS9123O  can  disrupt  other  devices  connected  to  your  computer's  COM ports.

<!-- image -->

## PROGRAM MENUS

Several pull down menu options have been provided to simplify use of the DS2746 EV kit software for the user. Their functions are individually detailed below.

## REGISTERS MENU

<!-- image -->

The  Registers  Menu  gives  immediate  access  to  the  Status  register,  Current  Offset  Bias  Register  and Accumulation  Bias  Register  of  the  DS2746.  Selecting  either  of  the  registers  will  open  an  individual control window giving the user a description of each register bit and the ability to read or write it.

## STATUS/CONFIGURATION REGISTER

<!-- image -->

The present state of all register bits are displayed immediately upon opening the register window. R/W locations contain a selection field or command button to allow the user to determine their state. Pressing the Write Status button will write the new value to the register and read the corresponding register inside the DS2746 to verify the correct value was written.

## CURRENT OFFSET BIAS REGISTER

<!-- image -->

The Current Offset Bias can be entered into the text box and then written to the device by left-clicking on the Write button.

The Calibrate Offset button allows the software to auto-detect the current offset based on the reading of the Current register. The Read Current Register button will display the real time current reading from the Current Register.

## ACCUMULATION BIAS REGISTER

<!-- image -->

The Accumulation Bias Value can be entered into the text box and then written to the device by leftclicking on the Write button.

## PREFERENCES MENU

<!-- image -->

The Preferences Menu allows the user to change COM port settings at any time. Edit Preferences opens the Select Preferences window. See Selecting the communication port above.

## HELP MENU

<!-- image -->

Selecting  the  About  topic  from  the  Help  Menu  will  open  a  window  containing  information  about  the current revision of this program and Dallas Semiconductor.

## PROGRAM TABS

All functions of the program are divided under three tabs in the main program window. Left click on the appropriate tab to move to the desired function page. Located on the Meters tab is all of the information measured and calculated by the DS2746. The Memory tab displays the contents of every register and memory location inside the DS2746 and allows the user to alter the data. The Data Log tab allows the user to store all real time information to a file and view the data in a graphical form.

## METERS TAB

<!-- image -->

The Meters Tab displays the latest real-time measurements of cell voltage, auxiliary inputs, current and accumulated current with both analog meter readouts and digital values. The user can update the values of the Sense Resistor, Current Offset, Accumulation Bias, ACR, or Auxiliary Input Resistors by left-clicking on the appropriate button.

The  Auxiliary  Inputs  can  be  used  to  measure  an  identification  resistor  or  a  thermistor  that  should  be connected between AIN0 / AIN1 and SGND.

## Update ACR

<!-- image -->

The ACR value can be updated by simply entering the new ACR value into the text box and left-clicking the OK button.

The value of the Rated Battery Capacity is not stored by the DS2746, but this value is stored on the host computer to calculate a relative state of charge. This value will be remembered each time the DS2746 EV kit software is started.

## Update Sense Resistor

<!-- image -->

The sense resistor value used to calculate the current reading is shown in the current section. Left-click on the Update Sense Resistor button to open the Find Sense Resistor window.

The value of the sense resistor is not stored by the DS2746, but this value is stored on the host computer to calculate the current flowing across the sense resistor. This value will be remembered each time the DS2746 EV kit software is started. The user can manually enter the Sense Resistor Value at the top of the window,  or  can  allow  the  software  to  calculate  the  value.  To  allow  the  DS2746  EV  kit  software  to calculate the sense resistor, simply enter the value of the current that is flowing across the sense resistor in the Current Forced text box in terms of mAmps. Then left-click the Calculate Resistor button and the software will determine the value of the sense resistor and put the new value in the Sense Resistor Value text box at the top of the window. Click OK to accept the new Sense Resistor Value, or Click Cancel to ignore the changes that were made.

## Update Reference Resistors

<!-- image -->

A known 10K resistor is used to determine the resistance of the Auxiliary Inputs. If the values of the resistors are not exactly 10K, or if other values are desired for the known resistors, simply left-click on the Update Resistors button and the Update Reference Resistors window will appear. Simply enter the correct reference resistance and left-click Update. Once again, this is only a software value, so it is not stored on the device, but it will be recalled each time the program is started.

## MEMORY TAB

<!-- image -->

The Memory Tab gives the user access to read the contents of all of the Memory inside the DS2746. Leftclicking the Write or Read buttons will access the device.

Some memory locations in the DS2746 are read-only, so they will not be altered by writing them.

## DATA LOG TAB

<!-- image -->

The Log Data tab allows the user to see the DS2746's real time measurements graphed over time. There are separate sub-tabs for voltage, current, accumulated current, and auxiliary inputs. Each graph displays the last 500 data points collected by the DS2746 EV kit software. The sampling interval can be adjusted from as fast as possible to 15 minutes and can be adjusted from the Sampling Interval Menu at the bottom of the window. The Clear Graphs button will clear all data from all four graphs, but does not reset the log to file function. When the Fastest sampling interval is selected, the graphs will not be updated, only the data logging is enabled.

The Log to File Sub Tab contains control information for storing all data to an ASCII file. The default filename is c:\DS2746K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data will be stored at the same interval selected for updating the graphs in the tab-delimited format of

'Time &lt;tab&gt; Voltage &lt;tab&gt; Current &lt;tab&gt; ACR &lt;tab&gt; AuxIn0 &lt;tab&gt; AuxIn1 &lt;tab&gt; Status'

for  easy  import  into  a  spreadsheet.  The  most  recent  50  samples  are  displayed  in  the  window  for observation.  Warning  -  The  Log  Data  function  overwrites  previous  file  information.  Data  previously stored in the file will be lost.

## DS2746 EV KIT SCHEMATIC

<!-- image -->

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-----------------|------------------------------------------------------|-----------------|
| 10/09           | Changed the part number from DS2746K to DS2746EVKIT. | All             |