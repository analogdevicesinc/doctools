<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

-  Demonstrates the capabilities of the DS2782 Standalone Fuel Gauge, including:
-  Estimation of available capacity for Li+ cells
-  Voltage measurement
-  Current accumulation
-  Current measurement
-  Temperature measurement
-  Identification
-  Information storage
-  Interfaces to the USB port of a PC running Windows  XP or older operating system

## EVALUATION KIT CONTENTS

1 pc. Evaluation Board

1 pc. DS9123O USB Adapter

1 pc. RJ-11 Cable

## EQUIPMENT NEEDED

1. A PC running Windows XP or older operating system and an available USB port.
2. Cables with mini-grabber style clips or the ability to solder directly to connection pads.
3. A Lithium-Ion battery and a power supply and/or load circuit.

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

Program Tabs

Real Time Tab

Parameters Tab

Memory Tab

Log Data Tab

Windows XP is a registered trademark of Microsoft Corp.

## DS2782EVKIT+ Standalone Fuel Gauge IC Evaluation Kit

## INTRODUCTION

The  DS2782  evaluation  kit  (EV  kit)  makes  performance  evaluation,  software  development,  and prototyping  with  the  DS2782  Standalone  Fuel  Gauge  easy.    The  evaluation  board  interfaces  to  a  PC through a DS9123O USB Adapter and RJ-11 cable connection.

The DS2782 EV kit evaluation software gives the user complete control of all functions of the DS2782. Separate  control  tabs  allow  the  user  access  to  all  EEPROM  and  RAM  memory  locations,  all  control registers,  and  real-time  updates  of  all  monitored  parameters.  The  software  also  incorporates  a  datalogging feature to monitor a cell over time.

The evaluation board circuit is designed to provide the DS2782 with accurate parameter measurements. Kit  demonstration  boards  will  vary  as  they  are  improved  upon  over  time.  For  information  on  the demonstration  board  circuits  refer  to  the  individual  board  datasheets  located  online  at  www.maximic.com.

## SETUP AND INSTALLATION

## BOARD CONNECTIONS

Connections to the TSSOP demonstration board are best made either by soldering directly to the pads or by using cables with mini-grabber clips. Communication to the TSSOP board can be accomplished either through  the  RJ-11  jack  by  connecting  the  provided  standard  six  conductor  RJ-11  cord  or  by  wiring directly to the SDA, SCL and P- pads. In the latter case, the size of the board can be reduced by snapping off  the  RJ-11  jack  along  the  break  line,  see  Figure  1.  To  utilize  the  demonstration  software,  the  SDA, SCL and PAC- lines must be connected to the DS9123O communication brick using either of the two methods described.

Figure 1: Communication Connections

<!-- image -->

Figures 2a and 2b show the recommended circuits to simulate charging and discharging. The Lithium-Ion cell  is  connected  between  the  B+  and  B-  pads.  The  battery  charger/power  supply  or  circuit  load  is connected between the B+ and P- pads. The evaluation software can be run in either configuration as long as a cell is connected between the B+ and B- terminals providing a minimum of 2.5 volts to power the DS2782. Leaving the PIO pin unconnected does not interfere with the operation of the demonstration board. Refer to the datasheet for the operation of this pin.

Figure 2a:  Charging Circuit

<!-- image -->

## SOFTWARE INSTALLATION

To  install  the  DS2782  EV  kit  software,  exit  all  programs  currently  running  and  download  the  latest version  at  www.maxim-ic.com.    Unzip  the  compressed  file  and  double  click  the  SETUP.EXE  icon  to begin  the  installation  process.    Follow  the  prompts  to  complete  the  installation.    The  DS2782  EV  kit software can be uninstalled in the Add/Remove Programs tool in the Control Panel.  After the installation is  complete,  open  the  DS2782K  folder  and  run  DS2782K.EXE  or  select  DS2782K  from  the  program menu.  A splash screen containing information about the evaluation kit appears as the program is being loaded.

## SELECTING THE COMMUNICATION PORT

The first time the software runs, the Select Preferences window may appear.  In this window, select either serial or USB communication and the port number; then hit OK.  The DS2782 EV kit software saves this port selection and automatically uses the selection each time the program starts.  To change the port later, click the Preferences option on the menu bar, select Port Settings, and then select the appropriate port. To attempt to automatically locate the DS9123O, click the Poll Serial Ports button. Warning - automatically polling for the DS9123O can disrupt other devices connected to your computer's COM ports.

<!-- image -->

Fig 2b:  Discharging Circuit

<!-- image -->

## PROGRAM MENUS

Several pull down menu options have been provided to simplify use of the DS2782 EV kit software for the user. Their functions are individually detailed below.

## FILE MENU

<!-- image -->

The File Menu allows the user to store and recall information to and from a file directly into the text boxes  on  the  Parameters  Tab.  These  functions  do  not  directly  write  or  read  the  DS2782.  It  is  still necessary for the user to store or recall this information to or from the device by clicking on the Write &amp; Copy or Recall &amp; Read buttons on the Parameters Tab.

## REGISTERS MENU

<!-- image -->

The  Registers  Menu  gives  immediate  access  to  all  four  status  and  function  registers  of  the  DS2782. Selecting any of the registers will open an individual control window giving the user a description of each register bit and the ability to read or write it. See the status register window example.

## STATUS REGISTER

<!-- image -->

The present state of all register bits are displayed immediately upon opening the register window. R/W locations contain a selection field or command button to allow the user to determine their state. Pressing the WRITE button will write the new value to the register and read the corresponding register inside the DS2782 to verify the correct value was written.   The Control Register is stored in EEPROM, so when the WRITE command is issued, the value is written and copied to EEPROM without changing the values of the remainder of the Parameter EEPROM block.

## PREFERENCES MENU

<!-- image -->

The Preferences Menu allows the user to change COM port settings at any time. Edit Preferences opens the Select Preferences window. See Selecting the Communication Port above.

## HELP MENU

<!-- image -->

Selecting  the  About  topic  from  the  Help  Menu  will  open  a  window  containing  information  about  the current revision of this program and Dallas Semiconductor.

## PROGRAM TABS

All functions of the program are divided under four tabs in the main program window. Left click on the appropriate  tab  to  move  to  the  desired  function  page.    Located  on  the  Real  Time  tab  is  all  of  the information measured and calculated by the DS2782.  That data is divided between the Parametric Data Tab and Fuel Gauging Tab.  The Parameters Tab gives the user access to the entire Parameter EEPROM memory block in terms of Application Units and Device Units.  The Memory tab displays the contents of every register and memory location inside the DS2782 and allows the user to alter the data.  The Data Log tab allows the user to store all real time information to a file and view the data in a graphical form.

## REAL TIME TAB

The Real Time data is divided into two tabs:  Parametric Data and Fuel Gauge Data.  The Parametric Data Tab contains all of the real time measurements taken by the DS2782.  The Fuel Gauge Data contains all of the values calculated by the DS2782.

## Parametric Data Tab

<!-- image -->

The  Parametric  Data  Sub  Tab  displays  the  latest  real-time  measurements  of  cell  voltage,  temperature, current and accumulated charge with both analog meter readouts and digital values. The sense resistor value used to calculate the current reading is shown in the current section. Go to the sense resistor value on the Parameters Tab to change this value

The present states of PIO pin is shown at the bottom left of the window.   There is also a button to toggle the state of the PIO pin.

## Set Accumulated Current Register

<!-- image -->

The user can bring up the Set Accumulated Current Register window by left clicking the Set ACR button. This window allows the user to enter a value for the Accumulated Current Register in mAH.

## Set Accumulation Bias Register

<!-- image -->

The  user  can  bring  up  the  Set  Accumulation  Bias  Register  window  by  left  clicking  the  Set  Acc  Bias button. This window allows the user to enter values for the Accumulation Bias Register in mA.   The value entered here will be added to the Accumulated Current Register during each current conversion. The  bias  value  will  not  affect  the  Current  Register  reading,  but  will  be  reflected  in  the  Accumulated Current Register.

## Update Slave Address

<!-- image -->

When the  DS2782  EV  kit  software  starts  up,  it  will  attempt  to  find  the  Slave  Address  of  the  device connected to the DS9123O.  If the device is not found at start up, the user can edit the Slave Address by left clicking on the Update Slave Address button.  If the user knows the Slave Address, simply enter the correct  Slave  address  in  the  text  box  and  click  the  Use  this  Address  button.    If  the  Slave  Address  is unknown, clicking on the Find Slave Address button will begin a search of all addresses on the 2-wire bus. The slave address of the device can be changed by entering a new slave address in the text box and clicking the Write Slave Address button.

## Fuel Gauge Data Tab

<!-- image -->

The Fuel Gauge Data Sub Tab displays the latest fuel gauge calculations.   The Full, Active Empty, and Standby Empty levels are calculated from the data input on the Parameters Tab.  The Remaining Active Absolute  Capacity  (RAAC)  and  the  Remaining  Stand-by  Absolute  Capacity  (RSAC)  are  displayed  in terms  of  mAhrs.    The  Remaining  Active  Relative  Capacity  (RARC),  Remaining  Stand-by  Relative Capacity (RSRC) are displayed in terms of percent of capacity remaining.  The Analog Meter on the left displays the Remaining Active Absolute Capacity (RAAC).

The flags found in the Status Register are displayed on the right side of the window.  When the Under Voltage Flag or the Power-on-Reset Flag is set, a button will appear that will allow the user to clear those bits.

## Scalar Register

<!-- image -->

The user can bring up the Set Age Scalar window by left clicking the Update button in the Scalar area. This  window  allows  the  user  to  read  and  write  the  Scalar  value  in  terms  of  percent  of  the  nominal capacity.

## PARAMETERS TAB

The Parameters Tab gives the user access to the entire Parameter EEPROM memory block (block 1, addresses 60h-7Fh) in terms of Application Units and Device Units.  The Application Units Tab displays the parameters in units like mA, mAhrs, and volts.  The Device Units Tabs performs the calculations needed to get the application units into the units that are stored in the device like μ V, μ Vhrs, and ppm as well as show the hexadecimal values that get written to the device.

## Application Units Tab

<!-- image -->

The Application Units Sub Tab allows the user to read and write the Parameter EEPROM memory block. To change any of this information, simply click on the desired text field and enter the new value.

Clicking on the Load Default Set Up button will enter example data into the information fields of the Application Units Sub Tab. Once all data is in the desired format, click on the Write &amp; Copy button to copy it to the EEPROM of the DS2782.

This information can also be stored to a file and recalled later using the Load/Save Set Up buttons or the Load/Save Parameters Set Up Menu Items.  These functions do not directly write or read the DS2782. It is still necessary for the user to store or recall this information to or from the device by issuing a Write &amp; Copy or Recall &amp; Read buttons.

## Device Units Tab

<!-- image -->

The Device Units Sub Tab is read-only.  It displays the actual hexadecimal values read from the DS2782 and displays the units that are stored in the device.

## MEMORY TAB

<!-- image -->

The Memory Tab gives the user access to all 32 bytes of SRAM and all 56 bytes of EEPROM inside the DS2782. They are separated into 6 sub-tabs for convenience. Any value can be modified by clicking in that  address'  text  box  and  typing  a  new  value  in  hexadecimal  format.  The  Write  button  will  copy  the entire block of data to the corresponding location inside the DS2782 (Scratchpad RAM on the EEPROM blocks).    The  Read  button  will  update  the  entire  block's  text  boxes  with  data  from  the  DS2782 (Scratchpad RAM on the EEPROM blocks). Sub-tabs displaying any EEPROM data will also have Copy and  Recall  buttons  to  allow  the  user  to  transfer  the  data  between  Scratchpad  and  EEPROM  memory internal  to  the  DS2782.  The  Permanently  Lock  Block  0/1  buttons  will  permanently  store  the  data currently located in that block's EEPROM. Warning - this data can never be changed once locked. Verify your data first by issuing a Recall and a Read.

## LOG DATA TAB

<!-- image -->

The Log Data tab allows the user to see the DS2782's real time measurements graphed over time. There are separate sub-tabs for voltage, current, temperature, and accumulated charge. Each graph displays the last 500 data points collected by the DS2782 EV kit software. The sampling interval can be adjusted from as fast as possible to 15 minutes and can be adjusted from the Sampling Interval Menu at the bottom of the window. The Clear Graphs button will clear all data from all four graphs, but does not reset the log to file function.  When the Fastest sampling interval is selected, the graphs will not be updated, only the data logging is enabled.

The Log to File Sub Tab contains control information for storing all data to an ASCII file. The default filename is c:\DS2782K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data will be stored at the same interval selected for updating the graphs in the tab-delimited format of

'Time &lt;tab&gt; Voltage &lt;tab&gt; Current &lt;tab&gt; AveCurrent &lt;tab&gt; Temperature &lt;tab&gt; ACR &lt;tab&gt; Full &lt;tab&gt; AE &lt;tab&gt; SE &lt;tab&gt; RAAC &lt;tab&gt; RARC &lt;tab&gt; RSAC &lt;tab&gt; RSRC &lt;tab&gt; Status &lt;tab&gt; Scalar'

for  easy  import  into  a  spreadsheet.  The  most  recent  50  samples  are  displayed  in  the  window  for observation.  Warning  -  The  Log  Data  function  overwrites  previous  file  information.  Data  previously stored in the file will be lost.

## Ue lowinpedance trace layout for VSS and SNS

<!-- image -->

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                           | PAGES CHANGED   |
|-----------------|-------------------------------------------------------|-----------------|
| 9/09            | Changed the part number from DS2782K to DS2782EVKIT+. | All             |