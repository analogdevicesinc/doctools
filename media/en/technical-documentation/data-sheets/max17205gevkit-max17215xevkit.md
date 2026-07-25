<!-- lastmod 2022-08-05 -->
## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## General Description

The MAX17205G/MAX17205X/MAX17215G/MAX17215X evaluation  kits  (EV  kits)  are  fully  assembled  and  tested  surface-mount  PCBs  that  evaluate  the  stand-alone ModelGauge™ m5 pack-side fuel-gauge ICs for lithiumion  (Li+)  batteries  in  handheld  and  portable  equipment. The MAX17205 and MAX17215 are for multicell applications. See the MAX17201 and MAX17211 for single-cell applications.

The MAX17205G/MAX17205X/MAX17215G/MAX17215X kits  include  the  Maxim  DS91230+  USB  interface,  IC evaluation board, and RJ-11 connection cable. Windows ® based graphical user interface (GUI) software is available for  use  with  the  EV  kit  and  can  be  downloaded  from Maxim's  website  at http://www.maximintegrated.com/ products/MAX17205 (under the Design Resources tab). Windows  7  or  newer  Windows  operating  system  is required to use with the EV kit GUI software.

## Benefits and Features

- ModelGauge m5 Algorithm
- Nonvolatile Memory Configured for Stand-Alone Operation
- Monitors from 2S to More Than 15S Cell Packs
- Battery Pack Input Voltage Range of +2.1V to +4.9V per Cell
- Thermistor Measurement Network
- Optional On-Board PCB Trace Sense Resistor
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

| FILE                                     | DECRIPTION                                 |
|------------------------------------------|--------------------------------------------|
| MAX17201_05_11_15K_ V2_0_0_0_Install.exe | Installs all EV kit files on your computer |

Ordering Information appears at end of data sheet.

Windows is a registered trademarks and registered service marks of Microsoft Corporation.

ModelGauge is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX17205/MAX17215

## Quick Start

## Required Equipment

- MAX17205G/MAX17205X/MAX17215G/MAX17215X EV kit
- Lithium battery pack of desired configuration
- Battery charger or power supply
- Load circuit
- DS91230+ USB adapter
- RJ-11 6pos reverse modular cord
- PC with Windows 7 or newer windows operating system and USB port

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to install the EV kit software, make required hardware connections, and start operation of the kits. The EV  kit  software  can  be  run  without  hardware  attached. It  automatically  locates  the  hardware  when  connections are made. Note that after communication is established the  IC  must  still  be  configured  correctly  for  the  fuel gauge to be accurate. See the Configuration Wizard and ModelGauge  m5  EZ  Configuration sections  of  the  GUI software description.

- 1) Visit http://www.maximintegrated.com/ products/MAX17205 under the Design Resources tab to download the latest version of the MAX17201\_05\_11\_15K EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX17201\_05\_11\_15K\_Install.exe program inside  the  temporary  folder.  The  program  files  are copied and icons are created in the Windows Start menu. The software requires the .NET Framework 4.5 or later. If you are connected to the internet, Windows automatically updates .NET framework as needed.
- 3) The EV kit software launches automatically after installation or alternatively it can be launched by clicking on its icon in the Windows Start menu.
- 4) Connect the DS91230+ adapter to a USB port on the PC. The DS91230+ is a HID device and is located automatically by Windows without the need to install additional drivers.

<!-- image -->

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

- 5) For the MAX17205/MAX17215 only: Set the on-board switch SW1 to the proper position based on cell stack size. For 2S to 4S cell stacks set the switch to '2S to 4S' as indicated on the board. For cell stacks of 4S or larger set the switch to 'multicell' as indicated on the board. Warning: The EV kit board can be damaged when connecting cell stacks higher than 4S if SW1 is in a '2S to 4S' position.
- 6) Make connections to the EV kit board based on the cell pack configuration as shown in the following fig -ures. The load or  charger  circuit  can  be  connected at this time as well. Figure 1 shows the connections for  a  2S  cell  pack  with  a  high-side  protector.  The lower cell connects between the B1N and B1P/B2P pads and the upper cell connects between the B1P/ B2P pads and the BxP pad. The charger/load connects between the PACK and PACK+ pads. Note B1P and B2P should always be connected together in this configuration.

Figure 2 shows the connections for a 3S cell pack with high-side protector. The lower cell connects between the B1N and B1P pads, the middle cell connects between the B1P and B2P pads, and the upper cell connects between the B2P and BxP pads. The charger/ load connects between the PACK- and PACK+ pads.

## Evaluates: MAX17205/MAX17215

Figure  3  shows the connections for a 2S to 4S cell pack with low side protector. In this case, the protector circuit prevents connections to individual cells. The entire cell stack connects between the B1N and BxP pads. The charger/load connects between the PACKand PACK+ pads.

Figure  4  shows  the  connections  for  a  4S  or  larger cell pack. The cell stack connects between the B1N and BxP pads. The positive side of the cell stack also connects to one of the four resistive voltage divider network  inputs:  B4P  for  a  4S  stack,  B6P  for  a  6S stack, B10P for a 10S stack, B12P for a 12S stack. The charger/load connects between the PACK- and PACK+ pads. If the application cell configuration is not 4S, 6S, 10S, or 12S a custom resistive voltage divider must be created to properly divide the stack voltage for  measurement.  See  the  MAX17201/MAX17205/ MAX17211/MAX17215 data sheet for details.

- 7) Connect the RJ-11 cable between the USB adapter and the EV kit board. The GUI software establishes communication automatically.
- 8) If the IC has not been configured, run the Configura -tion Wizard in the EV kit software to configure op -eration for the desired application circuit and lithium cell  type.  Configuration  information  is  permanently saved inside the IC.

Figure 1. MAX17205/MAX17215 Board Connections for 2S Cell Stacks

<!-- image -->

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

Figure 2. MAX17205/MAX17215 Board Connections for 3S Cell Stacks

<!-- image -->

Figure 3. MAX17205/MAX17215 Board Connections for 2S to 4S Cell Stacks with Protector

<!-- image -->

## Evaluates: MAX17205/MAX17215

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

Figure 4. MAX17205/MAX17215 Board Connections for 5S or Larger Cell Stacks

<!-- image -->

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## Detailed Description of Hardware

The MAX17205/MAX17215 EV kit boards provide a variety of features that highlight the functionality of the ICs. The following sections detail the most important aspects of the kit boards.

## Switch Setting

The  mechanical  switch  labelled  SW1  on  MAX17205/ MAX17215 boards configures the voltage measurement inputs depending on the number of cells in the cell stack. When  the  switch  is  in  the  '2S  to  4S'  configuration,  all voltage  measurement  pins  are  direct  inputs  to  the  IC. Resistors  on  CELL1  and  CELL2  pins  set  the  balancing current if cell balancing is enabled.

When SW1 is set to 'multicell', the V BATT  pin voltage is limited  to  18V  maximum  by  an  on-board  regulator.  The CELLx  pin  is  connected  to  a  resistive  voltage  divider to  allow  for  the  measurement  of  higher  pack  voltages. CELL2  controls  the  resistive  voltage  divider  network  to limit  current  and CELL1 is grounded and unused. Table 1  summarizes  the  settings  for  switch  SW1.  Note  that regardless of switch setting, the IC must also be config -ured properly for the number of cells attached. See the Configuration Wizard section for details.

## Regulator

When  operating  the  board  with  a  very  high  cell  count (SW1  set  to  Multicell),  a  simple  regulator  circuit  limits the voltage on the V BATT  pin to 18V. This regulator adds only a small amount of leakage current to the total circuit current  load.  The  regulator  can  safely  handle  an  input voltage of up to 60V.

## Table 1. MAX17205/MAX17215 Switch Setting

| SWITCH POSITION   | V BATT PIN                | CELL1 PIN                            | CELL2 PIN                            | CELLx PIN                         |
|-------------------|---------------------------|--------------------------------------|--------------------------------------|-----------------------------------|
| 2S to 4S          | Direct input              | Direct input with balancing resistor | Direct input with balancing resistor | Direct input                      |
| Multicell         | Regulated to 18V or lower | Ground                               | Resistive voltage divider control    | Resistive voltage divider network |

## Evaluates: MAX17205/MAX17215

## Precision Resistive Voltage Divider

When  operating  the  board  with  a  very  high  cell  count (SW1 set to multicell) the CELLx pin is connected to an external  precision  resistive  voltage  divider  network  to measure high voltage cell packs. The divider network has multiple connection points to properly divide the cell stack voltage for 4S, 6S, 10S, or 12S cell stacks. To measure other  pack  configurations,  connect  the  cell  stack  to  the B4P input and select a value for R5 using the following equation: 0.5M Ω x (N - 1) where N is the number of cells in the stack. 0.1% tolerance resistor are recommended.

The divider resistors have 0.1% tolerance ratings to have minimal impact on the accuracy of the CELLx measurement. The CELL2 pin controls an external FET to enable the  resistor  divider  only  during  voltage  measurement  to limit current drain.

## Cell Balancing Resistors

When  operating  the  board  with  a  2S  or  3S  cell  stack (SW1  set  to  2S  to  4S),  the  CELL1  and  CELL2  pins provide  direct  input  measurement  of  the  middle  voltage  levels  of  the  cell  stack.  CELL1  and  CELL2  also shunt  current  to  balance  the  cell's  voltage  levels  if  cell balancing  is  enabled.  R10  and  R11  control  the  balancing  current  in  this  mode.  The  default  values  of  100Ω set  the  balancing  current  to  ~40mA  (~20mA  for  the middle cell of a 3S configuration). See the Cell Balancing section of the MAX17201/MAX17205/MAX17211/ MAX17215 data sheet for further details.

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## Communication Connections

The RJ-11 connector provides all signal lines necessary for I 2 C, SMBus, 1-Wire, or 1-Wire overdrive communication between the IC and the software GUI interface. When developing code separately, connections to the communication lines can be made directly to the board. Table 2 summarizes the connections that  should  be  made. The user must apply the appropriate external pullup resistors to the communication lines when not using the DS91230+ communication interface.

## External Thermistors

The MAX17205/MAX17215 can be configured to use up to two external thermistors. All EV kit boards come with these thermistors installed as surface mount components RT1 and RT2. If  the  application  requires  direct  thermal

## Table 2. Communication Line Solder Points

| COMMUNICATION MODE   | MAX17205 J14   | MAX17205 J11   | MAX17215 J14   | MAX17215 J11   |
|----------------------|----------------|----------------|----------------|----------------|
| I 2 C                | SCL            | SDA            | N/A            | N/A            |
| 1-Wire               | N/A            | N/A            | Logic-low      | DQ             |
| 1-Wire Overdrive     | N/A            | N/A            | Logic-high     | DQ             |

## Table 3. Sense Resistor Selection for MAX17205/MAX17215

| COMPONENT   | VALUE FOR CHIP SENSE   | VALUE FOR BOARD TRACE SENSE   |
|-------------|------------------------|-------------------------------|
| R23         | 0Ω                     | Not populated                 |
| R24         | Not populated          | 0Ω                            |
| R20         | Desired sense value    | Not populated                 |
| R21         | Not populated          | 0Ω (R22 is trace resistor)    |

│

## Evaluates: MAX17205/MAX17215

contact to the cells, RT1 and RT2 can be removed and replaced with leaded thermistors connected between the RT1+/RT1- and RT2+/RT2- solder pads.

## Sense Resistor Options

All EV kit boards are shipped with an 0805 size 0.010Ω chip  sense  resistor  installed.  Oversized  land  pattern pads allow for  different  size  sense  resistors  to  be  used if desired. Also, each board contains an optional 0.003Ω copper trace sense resistor that can be enabled if desired. To do so, the chip sense resistor must be removed and 0Ω  jumpers  must  be  resoldered  to  change  the  circuit. Table  3  summarizes  the  changes  for  each  board  type. Note that the IC must be reconfigured to support the new resistor  type.  See  the Configuration  Wizard section  for details.

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## Detailed Description of Software

The  MAX17201/MAX17205/MAX17211/MAX17215  evaluation kit software gives the user complete control of all functions  of  the  MAX17201/MAX17211,  as  well  as  the ability to load a custom model into the ICs. It also comes with a sophisticated Configuration wizard to allow user to easily  adjust  fuel  gauge  settings.  Separate  control  tabs allow  the  user  access  to  view  real-time  updates  of  all monitored parameters. The software also incorporates a data-logging feature to monitor a cell over time.

## Software Installation

The  software  requires  Windows  7  or  newer  operating system. .NET version 4.5 is required for operation and is automatically installed if an older version of .NET framework is detected. To install the evaluation software, exit all  programs  currently  running  and  unzip  the  provided MAX17201\_05\_11\_15K Installation Package zipped file. Double  click  the  MAX17201\_05\_11\_15K\_V\_x\_x\_x\_x Install.exe icon and the installation process begins. Follow the prompts to complete the installation. The evaluation software can be uninstalled in the Add/Remove Programs tool in the Control Panel. After the installation is complete, open the Maxim Integrated/MAX17201\_05\_11\_15K folder and run MAX17201\_05\_11\_15K.exe or select it from the program menu. Figure 5 shows a splash screen contain-

## Evaluates: MAX17205/MAX17215

ing  information  about  the  evaluation  kit  that  appears  as the program is being loaded.

## Communication Port

The  EV  kit  software  automatically  finds  the  DS91230+ adapter when connected to any USB port. Communication status is shown on the right-hand side of the bottom status bar. See Figure 6. If the adapter cannot be found, a 'No USB Adapter' message is displayed. If the adapter is found, but the IC daughter board cannot be found, a 'No Slave Device' message is displayed. Otherwise, if communication is valid, a green bar updates as the software continuously reads the IC registers.

If  the  DS91230+ is connected, the status bar should be active. The bottom status bar also displays information on data  logging  status,  the  communication  mode,  hibernation status, selected current-sense resistor value, device serial number, and the EVKIT GUI's version number.

## Program Tabs

All functions of the program are divided under eight tabs in  the  main  program  window.  Click  on  the  appropriate tab  to  move  to  the  desired  function  page.  Located  on the ModelGauge m5 tab is the primary user information measured  and  calculated  by  the  IC.  The Graphs tab visually  displays  fuel  gauge  register  changes over time.

Figure 5. EV Kit Splash Screen

<!-- image -->

Figure 6. EV Kit Bottom Status Bar

<!-- image -->

│

## MAX17205G/MAX17205X/

## MAX17215G/MAX17215X Evaluation Kits

The Registers and SBS registers tabs allow the user to modify common fuel gauge registers one at a time. The Commands tab  allows  for  special  operations  such  as changing  communication  mode,  initiate  fuel  gauge  logging and performing fuel gauge reset. The Configuration tab  displays  the  value  of  the  nonvolatile  registers  as well  as  the  remaining  number  of  available  writes.  The Authentication tab  displays  SHA  authentication-related information. The History tab allows the user to read out and save battery history information logged by the IC over its lifetime. All tabs are described in more detail in the following sections.

## ModelGauge m5 Tab

The ModelGauge m5 tab  displays  the  important  output information read from the IC. Figure 7 shows the format of  the  ModelGauge  m5  Tab.  Information  is  grouped  by function and each is detailed separately.

## Evaluates: MAX17205/MAX17215

## State of Charge

The State of Charge group box displays the main output information  from  the  fuel  gauge:  state  of  charge  of  the cell, remaining capacity, time to full, and time to empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age, internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

## IC Information

The IC Information group box displays information related to IC itself. This includes the IC part number, IC unique ROM ID, and IC firmware revision.

Figure 7. ModelGauge m5 Tab

<!-- image -->

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine state of charge.

## Alerts

The Alerts group  box  tracks  all  eleven  possible  alert trigger conditions. If any alert occurs, the corresponding checkbox is checked for the user to see. The clear alerts button resets all alert flags.

## At Rate

The At Rate group box allows user to input a hypothetical  load  current  and  the  fuel  gauge  calculates  the  corresponding  hypothetical  Qresidual,  TTE,  AvSOC,  and AvCap values.

## Evaluates: MAX17205/MAX17215

## Graphs Tab

The Graphs tab displays up to 20 ADC readings and fuel gauge outputs. Figure 8 shows the format of the Graphs Tab.  Graph  information  is  grouped  into  four  categories: voltages,  temperatures,  capacities,  and  currents.  The user can turn on or off any data series using the check boxes on the right-hand side of the tab. The graph visible viewing  area  can  be  adjusted  from  10  minutes  up  to  1 week. The graphs remember up to 1 week worth of data. If  the viewing area is smaller than the time range of the data  already  collected,  the  scroll  bar  below  the  graphs can  be  used  to  scroll  through  graph  history.  All  graph history information is maintained by the program. Graph settings can be changed at any time without losing data.

Figure 8. Graphs Tab

<!-- image -->

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## Registers Tab

The Registers tab allows the user access to all fuel gauge related  registers  of  the  IC.  Figure  9  shows  the  format  of the Registers tab.  By  using  the  two  buttons  on  the  left side  of  the  tab,  the  user  can  sort  the  registers  either  by function  or  by  their  internal  address.  Each  line  of  data contains the register name, register address, hexadecimal

## Evaluates: MAX17205/MAX17215

representation of the data stored in the register, and if applicable a conversion to application units. To write a register location click on the button containing the register name. A pop-up window allows the user to enter a new value in either  hexadecimal  units  or  application  units.  The  main read loop temporarily pauses while the register updates.

Figure 9. Registers Tab

<!-- image -->

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## SBS Registers Tab

The SBS registers tab is visible only if SBS functions of the IC are enabled. The SBS registers tab has the same formatting as the standard Registers tab as shown in Figure 10. By using the two buttons on the left side of the tab, the user can sort the registers either  by  function  or  by  their internal  address.  Each  line  of  data  contains  the  register

## Evaluates: MAX17205/MAX17215

name, register address, hexadecimal representation of the data stored in the register, and if applicable a conversion to  application  units.  To  write  a  register  location  click  on the button containing the register name. A pop-up window allows the user to enter a new value in either hexadecimal units or application units. The main read loop temporarily pauses while the register updates.

Figure 10. SBS Registers Tab

<!-- image -->

│

## MAX17205G/MAX17205X/

## MAX17215G/MAX17215X Evaluation Kits

## Commands Tab

The Commands tab allows the user to access any general IC functions not related to normal writing and reading of register locations. Figure 11 shows the format of the Commands tab. Each group box of the Commands tab is described in detail in the following sections.

Figure 11. Commands Tab

<!-- image -->

Evaluates: MAX17205/MAX17215

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## 1-Wire Communication Speed

This option affects 1-wire ICs only. The user can select either  standard  or  overdrive  communication  speed. Communication speed is controlled by the EV kit software by driving the OD pin of the IC high or low. Regardless of the desired communication rate, the kit software communicates with any IC it discovers at either communication speed. The actual communication speed is displayed in the bottom status bar of the EV kit window.

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

## Log Data to File

Data  logging  is  always  active  when  the  kit  software  is started. The  default  data  log  storage  location  is  the  My Documents/Maxim  Integrated/MAX17201\_205\_211\_215/ Datalog.csv. The user can stop data logging by clicking the Stop Log button or change the data log file name by clicking the Change Path button. Whenever data logging is active, it is displayed on the bottom status bar of the EV kit window. All user available IC registers are logging in a .csv formatted file. The user can adjust the logging inter -val at any time. The user can also enable or disable  the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not part of the normal read data loop and indicates any time communication to the IC is lost.

## Burn Nonvolatile Memory Block

Clicking the Burn NV Block button sends the Copy NV Block  command  to  the  command  register  that  causes all  register  locations  from  180h to 1DFh to be stored to nonvolatile  memory.  Nonvolatile  memory  has  a  limited

## Evaluates: MAX17205/MAX17215

number  of  copies  and  the  user  is  prompted  to  confirm prior to executing the copy.

## Reset IC

Clicking the Full Reset button sends the software POR command to the command register and sets the POR\_ CMD bit  of  the  Config2  register  to  fully  reset  operation the same as if the IC had been power cycled. Note that resetting the IC when the cell is not relaxed causes fuel gauge error.

## Lock Register Blocks

Clicking one of the five lock buttons locks a page or pages of memory as listed to the right of each button. This is a permanent operation so the user is prompted to confirm the operation prior to setting the lock.

## Configuration Tab

The Configuration tab has similar formatting to the standard Registers tab as shown in Figure 12, but there are some major differences. When the user changes a register value  on  the Configuration tab,  only  the  RAM  value  of that  location  is  changed.  The  nonvolatile  value  remains unchanged. Register text changes to BLUE to indicate the RAM and nonvolatile values do not match. The user must complete a nonvolatile burn on the Commands tab or run the Configuration Wizard to change the nonvolatile value.

The nonvolatile memory has a limited number of updates that  is  shown  in  a  box  on  the  left-hand  side  of  the  tab. Maxim  recommends  using  the  Configuration  Wizard  to make  any  changes  to  nonvolatile  memory  instead  of changing registers manually. The wizard can be launched through the Device drop-down menu at the top of the EV kit software window or by the button on the left-hand side of the Configuration tab.  See the Configuration Wizard section for details.

Note  any  register  information  that  is  displayed  in RED text indicates a nonvolatile burn error where the data read back after a burn does not match the expected value.

## MAX17205G/MAX17205X/

## MAX17215G/MAX17215X

## Evaluation Kits

Figure 12. Configuration Tab

<!-- image -->

## Authentication Tab

The Authentication tab  allows  the  user  to  perform  any action related to the SHA 256 authentication feature of the IC. Figure 13 shows the format of the Authentication tab. Each group box of the Authentication tab is described in detail in the following sections.

## SHA Challenge/ROM ID

Enter values into the challenge registers directly or click the Randomize  Challenge button  to  fill  the  challenge registers with a completely random value. The challenge value is  not  written  to  the  IC  until  one  of  the Compute MAC buttons is clicked. The ROM ID is used in some SHA calculations so it is displayed here for reference.

## SHA Secret

Enter the secret value here to allow software to verify the SHA calculations of the IC. The EV kit software updates

Evaluates: MAX17205/MAX17215

these  values  after  a  compute  next  secret  command  to what it  believes  the  secret  value  should  be. The  secret value cannot be written directly or read from the IC. The secret  value  has  a  limited  number  of  updates  that  are displayed in the changes remaining box. Note that once the secret is locked or if the number of remaining updates reaches 0, it can no longer be changed.

## SHA Authentication Results

After a SHA operation occurs, the output is displayed in the Reported MAC column. The EV kit software calculates its own hash and displays the result in the Expected MAC column. If the results match, the operation is a success. If the results do not match, it is most likely because the secret inside the IC does not match the secret value entered into the EV kit software.

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

Figure 13. Authentication Tab

<!-- image -->

## Generate Challenge/Response Pairs

Some applications use challenge-response pairs to confirm  battery  pack  authenticity  instead  of  maintaining  the secret on the host side. The EV kit software can generate a file  of  any  length  of  random  challenge-response pairs for  use  by  the  application.  Ensure  to  have  the  correct secret entered before generating the pairs.

## History Tab

The History tab allows the user to see all battery history logging information stored inside the IC. When the EV kit software is loaded, this page is blank. History information is not automatically read from the IC. The user must click either the Read Battery History button to display history data or the Read History and Save to File button to store history data in a tab delimited .csv file and then display the  data. After  history  data  has  been  read  from  the  IC,

Evaluates: MAX17205/MAX17215

it is displayed to the user starting with page 1. Figure 14 shows the history tab format.

Each history page has a status of 'BLANK' if it has not yet been written, 'WRITTEN' if it contains good history data, or  'SKIPPED'  if  the  IC  experienced  a  write  error  while storing the data. Each history page contains 16 words of data. The user can click through each of the 203 history pages  or  enter  a  page  number  directly  into  the  box  to jump to a certain page.

If a page has been written, all page data is displayed as hexadecimal  values.  Some  history  information  can  be converted into application units. Those locations contain one or  two  additional  boxes  of  information  showing  the converted  values.  Value  boxes  can  display  'User  Data' if  that  location  has  been  configured  to  store  user  data instead of history information or 'A.F. Data' if that location is being used for cycle+ age forecasting information.

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

Figure 14. History Tab

<!-- image -->

The history information is also displayed in a graph on the left side of the tab. The graph displays data only from history pages that have been written by the IC. Click on the corresponding register  name button to change the data shown by the graph.

## ModelGauge m5 EZ Configuration

Before the IC accurately fuel gauges the battery pack, it must be configured with characterization information. This can be accomplished two ways.

The first is through a custom characterization procedure that  can  be  performed  by  Maxim  under  certain  conditions.  The  result  is  an  .INI  summary  file  that  contains

## Evaluates: MAX17205/MAX17215

information that can be programmed into the IC using the Configuration Wizard tool. Contact Maxim for details on this procedure.

The second method is ModelGauge m5 EZ configuration. This  is  the  default  characterization  information  shipped inside  every  IC.  This  default  model  produces  accurate results for most applications under most operating conditions. It is the recommended method for new designs as it  bypasses  the  custom  cell  characterization  procedure. Some additional information is required from the user for EZ configuration initialization. The Configuration Wizard tool handles this as well.

│

## MAX17205G/MAX17205X/

## MAX17215G/MAX17215X Evaluation Kits

## Configuration Wizard

The EV kit software contains a fuel gauge Configuration Wizard that can be launched either on the Configuration tab or from the Device drop-down menu. The Configuration Wizard is the recommended way to change any nonvolatile settings inside the IC. The wizard allows user to:

- Open a custom INI file or generate a ModelGauge m5 EZ configuration.
- Make any adjustments specific to the application.
- Load the final configuration into the IC.
- Export the generated configuration to a new INI file.

The Configuration Wizard walks users through an 18 step process  to  configure  the  IC. Figure  15 shows  the  first page of the wizard. Each step is detailed below. The user

## Evaluates: MAX17205/MAX17215

can click the previous button in the bottom left corner of any page to return to any previous step if desired. Once the  last  step  is  completed,  the  wizard  closes,  the  IC  is configured, and a new INI file is saved (if selected).

## Step 1: Starting the Template

Choose  between  the  existing  nonvolatile  memory  data already inside the IC or revert back to the factory default values (ModelGauge m5 EZ).

## Step 2: Cell Model Selection

Choose between existing model already in the IC's nonvolatile  memory,  the  ModelGauge  m5  EZ  model,  or  a custom model from an INI file by using the Select File button. Note that ModelGauge m5 EZ is recommended if a custom model is not available.

Figure 15. Configuration Wizard Steps 1 and 2

<!-- image -->

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## Step 3: General Pack Configuration

Select the configuration that most closely resembles the application circuit. The choice made in step 3 determines which options are available in step 4 as certain functions and ADC channels are not available in certain pack configurations.

## Step 4: Specific Pack Configuration Details

Select the number of series cells in the pack configura -tion as well as which ADC channels are used to measure pack  voltages.  If  Multicell  Inside  Protector  configuration was selected in step 3, cell balancing is possible. The cell balancing threshold can be selected from the drop-down box. If  the  application  has  more than 15 cells in series, contact Maxim about configuration options.

## Step 5: Shutdown Mode

Select the checkbox if the user intends for the IC to enter shutdown  mode  any  time  the  battery  pack  is  removed from the application (communication lines low).

## Step 6: SBS Compliant Functionality

Select  the  checkbox  if  user  intends  to  use  IC  in  smart battery system (SBS) compliant mode. If SBS mode is not used, these device registers are available for general-purpose data storage in step 16. If SBS mode is enabled, all SBS-related configuration settings can be adjusted here.

## Step 7: Sense Resistor Selection

Choose the value of the sense resistor to be used in the application.  Also,  select  the  resistor  temperature  compensation.  Maxim  recommends  disabling  temperature compensation when using a chip sense resistor. If using a PCB signal trace as the sense resistor, the default temperature coefficient value of 0.4% per °C is ideal for copper.

## Step 8: Current Measurement Calibration (Optional)

Current  measurement gain calibration  is  not  required  for proper operation of the fuel gauge. Perform this operation calibration  step  only  if  the  application  requires  it. To  calibrate current, first force a known current of at least one half the  full-scale  value  through  the  sense  resistor  and  enter that  value  into  the Forced  Current text  box.  When  the Current register and AvgCurrent register readings become stable,  the Auto  Calibrate button  is  enabled  to  allow calibration to occur. Alternatively, the user can adjust gain manually by entering a value into the Gain Adjust text box. The default value for gain adjust is 1.000 or 100%.

## Step 9: Temperature Measurement Channels

Select which temperature measurements are used by the application. Die temperature measurement is recommended for all

## Evaluates: MAX17205/MAX17215

applications. Die temperature measurements are enabled by default if no other measurement channels are enabled..

## Step 10: Temperature Measurement Details

Selections made in step 9 determine which options are available  in  this  step.  The  user  must  select  which  temperature input is used by the fuel gauge. See the nPackCfg register definition for details. If a thermistor channel is enabled then gain, offset, and curve scaling values must be used to convert the ADC reading to temperature. If the application uses a common thermistor type found in the pulldown menu, select that thermistor and the scaling values are automatically populated. If the application does not  use  one  of  these  common  thermistors,  select  other and enter the scaling values manually.

## Step 11: Alert Configuration

Enable the desired alert conditions and then select the desired alert thresholds. Note that the current related alert thresholds scale based on the sense resistor selection from step 7.

## Step 12: Overcurrent Detection

Choose  the  over-discharge  (OD)  and  short-circuit  (SC) detection settings for the application. Each can be enabled independently  of  other  alerts.  The  user  then  selects a  threshold  and  delay  setting.  Threshold  values  scale depending on the sense resistor selection from step 7.

## Step 13: ALRT Pin Polarity

Choose between active high and active low for the ALRT pin's polarity. ALRT pin polarity is forced to active low if either OD or SC comparators are enabled.

## Step 14: Cycle+ Age Forecasting

Enable  age  forecasting  here  and  then  choose  the DeadTargetRatio and CycleStart for the age forecasting function. Note that if age forecasting is enabled, the nVoltTemp and nSOC registers are used to store age forecasting information and are not available in step 15.

## Step 15: Battery Life Logging

Enable or disable any of the registers used for Battery Life Logging. Any unchecked registers not otherwise used by age  forecasting  are  available  for  general-purpose  data storage during step 16. The Cycles Per Save box  sets the  rate  at  which  cell  history  information  is  data  logged by the IC.

## Step 16: General-Purpose Data Storage

Configuration choices in steps 1-15 determine which reg -isters are available for general-purpose data storage. The user can now enter any data they wish into any nongrey register location.

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## Step 17: Summary of Changes

After  all  desired  nonvolatile  configuration  settings  have been entered by the user, the table in step 17 shows a color-coded  summary  of  how  the  nonvolatile  memory settings are changed by the new configuration. Note the Configuration Wizard automatically converts any memory location that matches its alternate default value into general-purpose  data  storage. This  can  cause  changes to the nNVCfg0 to nNVCfg2 registers not selected by the user, but does not affect IC operation. Figure 16 shows an example of the Configuration Wizard summary table.

## Step 18: Update IC and Save New Configuration

In the final step, the user is given options of how to use the  new  configuration. Figure  17  shows  step  18  of  the configuration wizard. Option one is to discard all changes which has no effect on the IC. Option two is to write con -figuration shadow RAM and then restart firmware so that

## Evaluates: MAX17205/MAX17215

those changes take effect. This allows the user to experi -ence the new operation of the IC without using one of the limited nonvolatile copies. Finally, option three writes the new configuration to the IC, burns the configuration into nonvolatile  memory,  and  then  restarts  the  IC  so  those changes take effect. This option is not available if the IC already used up all of the available configuration copies. Additionally,  the  user  can  store  the  new  configuration options into a new INI file for easy programming of addi -tional units. Select the desired path name for the new INI file.

The Configuration Wizard completes once the user clicks the Done button below step 18. The desired actions from step 18 occur after Done is clicked and the wizard closes. Click the window close button in the upper right corner of the wizard to exit at any time without performing any of the actions from step 18.

Figure 16. Configuration Wizard Step 17

<!-- image -->

│

## MAX17205G/MAX17205X/

## MAX17215G/MAX17215X

Evaluation Kits

Figure 17. Configuration Wizard Step 18

<!-- image -->

Evaluates: MAX17205/MAX17215

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com/en-us  |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com |
| Vishay                                 | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX17201/MAX17205/MAX17211/MAX17215 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17205GEVKIT# | EV Kit |
| MAX17205XEVKIT# | EV Kit |
| MAX17215GEVKIT# | EV Kit |
| MAX17215XEVKIT# | EV Kit |

Evaluates: MAX17205/MAX17215

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## MAX17205G/MAX17215G Bill of Materials

| PART               |   QTY | DESCRIPTION                                                  |
|--------------------|-------|--------------------------------------------------------------|
| C1                 |     1 | 1uF ±20%, 25V X5R ceramic capacitor (0603)                   |
| C2                 |     1 | 0.1uF ±10%, 50V X7R ceramic capacitor (0402)                 |
| C3-C6              |     4 | 1000pF ±10%, 50V X7R ceramic capacitor (0402)                |
| C7, C8             |     2 | 0.47uF ±10%, 25V X5R ceramic capacitor (0402)                |
| C9-C11             |     3 | 0.47uF ±10%, 25V X5R ceramic capacitor (0402), not populated |
| R1                 |     1 | 510KΩ ±5%, resistor (0402)                                   |
| R2, R4             |     2 | 1MΩ±0.1%, resistor (0805)                                    |
| R3                 |     1 | 2MΩ±0.1%, resistor (0805)                                    |
| R5                 |     1 | 1.5MΩ ±0.1%, resistor (0805)                                 |
| R6                 |     1 | 300KΩ ±0.1%, resistor (0805)                                 |
| R7                 |     1 | 200KΩ ±0.1%, resistor (0805)                                 |
| R8                 |     1 | 1MΩ±1%, resistor (0402)                                      |
| R9                 |     1 | 10Ω ±5%, resistor (0805)                                     |
| R10, R11           |     2 | 100Ω ±5%, resistor (0805)                                    |
| R12, R17           |     2 | 1KΩ ±1%, resistor (0402)                                     |
| R13-R15            |     3 | 150Ω ±1%, resistor (0402)                                    |
| R16                |     1 | 51.1KΩ ±1%, resistor (0402)                                  |
| R18, R19           |     2 | 10kΩ ±1%, resistor (0402)                                    |
| R20                |     1 | 0.010Ω ±1%, resistor (0805)                                  |
| R21                |     1 | 0Ω resistor (0805), not populated                            |
| R23                |     1 | 0Ω resistor (0402)                                           |
| R24                |     1 | 0Ω resistor (0402), not populated                            |
| RT1, RT2           |     2 | Thermistor 10K NTC (0402) Murata NCP15XH103F03               |
| D1                 |     1 | 18V Zener Diode (SOD123)                                     |
| D2, D4, D6         |     3 | 5.6V Zener Diode (SOD323)                                    |
| D3, D5             |     2 | Schottky Diode (SOD323), not populated                       |
| Q1, Q2             |     2 | 2N7002 FET (SOT-23)                                          |
| SW1                |     1 | Switch block 4PDT                                            |
| J1-J12,J14,J16-J21 |    19 | Plated through hole solder pad (16g wire)                    |
| J13                |     1 | RJ-11,R/A,6-POSITION/6-CONTACTS                              |
| U1                 |     1 | MAX17205G/MAX17215G Li+ fuel gauge IC 3x3 TDFN 14 pin        |
|                    |     1 | PCB: MAX17205EVKIT/MAX17215EVKIT                             |
|                    |     1 | USB-to-RJ11 board DS91230+                                   |
|                    |     1 | RJ11 6pos-6pos reverse modular cord 6ft.                     |

│

Evaluates: MAX17205/MAX17215

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## MAX17205G/MAX17215G Schematics

<!-- image -->

Note the schematic and layout are identical for the MAX17205G and MAX17215G EV kit boards. The only difference between boards is IC type and board name silkscreen. The MAX17205G is shown in the following figures.

│

Evaluates: MAX17205/MAX17215

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

## MAX17205G/MAX17215G PCB Layout

Component Placement

<!-- image -->

Bottom Layout

<!-- image -->

Evaluates: MAX17205/MAX17215

Top Layout

<!-- image -->

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## MAX17205X/MAX17215X Bill of Materials

| PART               |   QTY | DESCRIPTION                                                  |
|--------------------|-------|--------------------------------------------------------------|
| C1                 |     1 | 1uF ±20%, 25V X5R ceramic capacitor (0603)                   |
| C2                 |     1 | 0.1uF ±10%, 50V X7R ceramic capacitor (0402)                 |
| C3-C6              |     4 | 1000pF ±10%, 50V X7R ceramic capacitor (0402)                |
| C7, C8             |     2 | 0.47uF ±10%, 25V X5R ceramic capacitor (0402)                |
| C9-C11             |     3 | 0.47uF ±10%, 25V X5R ceramic capacitor (0402), not populated |
| R1                 |     1 | 510KΩ ±5%, resistor (0402)                                   |
| R2, R4             |     2 | 1MΩ±0.1%, resistor (0805)                                    |
| R3                 |     1 | 2MΩ±0.1%, resistor (0805)                                    |
| R5                 |     1 | 1.5MΩ ±0.1%, resistor (0805)                                 |
| R6                 |     1 | 300KΩ ±0.1%, resistor (0805)                                 |
| R7                 |     1 | 200KΩ ±0.1%, resistor (0805)                                 |
| R8                 |     1 | 1MΩ±1%, resistor (0402)                                      |
| R9                 |     1 | 10Ω ±5%, resistor (0805)                                     |
| R10, R11           |     2 | 100Ω ±5%, resistor (0805)                                    |
| R12, R17           |     2 | 1KΩ ±1%, resistor (0402)                                     |
| R13-R15            |     3 | 150Ω ±1%, resistor (0402)                                    |
| R16                |     1 | 51.1KΩ ±1%, resistor (0402)                                  |
| R18, R19           |     2 | 10kΩ ±1%, resistor (0402)                                    |
| R20                |     1 | 0.010Ω ±1%, resistor (0805)                                  |
| R21                |     1 | 0Ω resistor (0805), not populated                            |
| R23                |     1 | 0Ω resistor (0402)                                           |
| R24                |     1 | 0Ω resistor (0402), not populated                            |
| RT1, RT2           |     2 | Thermistor 10K NTC (0402) Murata NCP15XH103F03               |
| D1                 |     1 | 18V Zener Diode (SOD123)                                     |
| D2, D4, D6         |     3 | 5.6V Zener Diode (SOD323)                                    |
| D3, D5             |     2 | Schottky Diode (SOD323), not populated                       |
| Q1, Q2             |     2 | 2N7002 FET (SOT-23)                                          |
| SW1                |     1 | Switch block 4PDT                                            |
| J1-J12,J14,J16-J21 |    19 | Plated through hole solder pad (16g wire)                    |
| J13                |     1 | RJ-11,R/A,6-POSITION/6-CONTACTS                              |
| U1                 |     1 | MAX17205X/MAX17215X Li+ fuel gauge WLP 15 pin                |
|                    |     1 | PCB: MAX17205XEVKIT/MAX17215XEVKIT                           |
|                    |     1 | USB-to-RJ11 board DS91230+                                   |

│

Evaluates: MAX17205/MAX17215

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X Evaluation Kits

## MAX17205X/MAX17215X Schematics

<!-- image -->

Note the schematic and layout are identical for the MAX17205X and MAX17215X EV kit boards. The only difference between boards is IC type and board name silkscreen. The MAX17205X is shown in the following figures.

│

## Evaluates: MAX17205/MAX17215

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

## MAX17205X/MAX17215X PCB Layout

Component Placement

<!-- image -->

Bottom Layout

<!-- image -->

Evaluates: MAX17205/MAX17215

Top Layout

<!-- image -->

│

## MAX17205G/MAX17205X/ MAX17215G/MAX17215X

## Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17205/MAX17215