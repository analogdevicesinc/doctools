<!-- lastmod 2022-08-05 -->
## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## General Description

The MAX17201G/MAX17201X/MAX17211G/MAX17211X evaluation  kits  (EV  kits)  are  fully  assembled  and  tested  surface-mount  PCBs  that  evaluate  the  stand-alone ModelGauge™ m5 pack-side fuel-gauge ICs for lithiumion  (Li+)  batteries  in  handheld  and  portable  equipment. The MAX17201 and MAX17211 are for single-cell applications. See the MAX17205 and MAX17215 for multicell applications.

The MAX17201G/MAX17201X/MAX17211G/MAX17211X EV kits include the Maxim DS91230+ USB interface, IC evaluation board, and RJ-11 connection cable. Windows ® based graphical user interface (GUI) software is available for  use  with  the  EV  kit  and  can  be  downloaded  from Maxim's  website  at http://www.maximintegrated.com/ products/MAX17201 (under the Design Resources tab). Windows  7  or  newer  Windows  operating  system  is required to use with the EV kit GUI software.

## Benefits and Features

- ModelGauge m5 Algorithm
- Nonvolatile Memory Configured for Stand-Alone Operation
- Monitors 1S Cell Packs
- Battery Pack Input Voltage Range of +2.1V to +4.9V per Cell
- Thermistor Measurement Network
- Optional On-Board PCB Trace Sense Resistor
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X EV Kit Files

| FILE                                     | DECRIPTION                                 |
|------------------------------------------|--------------------------------------------|
| MAX17201_05_11_15K_ V2_0_0_0_Install.exe | Installs all EV kit files on your computer |

Ordering Information appears at end of data sheet.

Windows is a registered trademarks and registered service marks of Microsoft Corporation.

ModelGauge is a trademark of Maxim Integrated Products, Inc.

Evaluate: MAX17201/MAX17211

## Quick Start

## Required Equipment

- MAX17201G/MAX17201X/MAX17211G/MAX17211X EV kit
- Lithium battery pack of desired configuration
- Battery charger or power supply
- Load circuit
- DS91230+ USB adapter
- RJ-11 6pos reverse modular cord
- PC with Windows 7 or newer windows operating system and USB port

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to install the EV kit software, make required hardware connections, and start operation of the kits. The EV  kit  software  can  be  run  without  hardware  attached. It  automatically  locates  the  hardware  when  connections are made. Note that after communication is established the  IC  must  still  be  configured  correctly  for  the  fuel gauge to be accurate. See the Configuration Wizard and ModelGauge  m5  EZ  Configuration sections  of  the  GUI software description.

- 1) Visit http://www.maximintegrated.com/ products/MAX17201 under the Design Resources tab to download the latest version of the MAX17201\_05\_11\_15K EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX17201\_05\_11\_15K\_Install.exe program inside  the  temporary  folder.  The  program  files  are copied and icons are created in the Windows Start menu. The software requires the .NET Framework 4.5 or later. If you are connected to the internet, Windows automatically updates .NET framework as needed.
- 3) The EV kit software launches automatically after installation or alternatively it can be launched by clicking on its icon in the Windows Start menu.
- 4) Connect the DS91230+ adapter to a USB port on the PC. The DS91230+ is a HID device and is located automatically by Windows without the need to install additional drivers.

<!-- image -->

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

- 5) Make connections to the EV kit board based on cell pack  configuration  as  shown  in Figure  1.  The  cell connects between the BAT- and BAT+ pads and the charger/load connect between the PACK- and PACK+ pads. The load or charger circuit can be connected at this time as well.
- 6) Connect the RJ-11 cable between the USB adapter and the EV kit board. The GUI software establishes communication automatically.
- 7) If the IC has not been configured, run the Configura -tion Wizard in the EV kit software to configure op -eration for the desired application circuit and lithium cell  type.  Configuration  information  is  permanently saved inside the IC.

## Detailed Description of Hardware

The MAX17201/MAX17211 EV kit boards provide a variety of features that highlight the functionality of the ICs. The following sections detail the most important aspects of the kit boards.

## Evaluate: MAX17201/MAX17211

## Communication Connections

The RJ-11 connector provides all signal lines necessary for I 2 C, SMBus, 1-Wire, or 1-Wire overdrive communication between the IC and the software GUI interface. When developing code separately, connections to the communication lines can be made directly to the board. Table 1 summarizes the connections that  should  be  made. The user must apply the appropriate external pullup resistors to the communication lines when not using the DS91230+ communication interface.

## External Thermistors

The MAX17201/MAX17211 can be configured to use up to two external thermistors. All EV kit boards come with these thermistors installed as surface mount components RT1 and RT2. If  the  application  requires  direct  thermal contact to the cells, RT1 and RT2 can be removed and replaced with leaded thermistors connected between the RT1+/RT1- and RT2+/RT2- solder pads.

Figure 1. MAX17201/MAX17211 Board Connections

<!-- image -->

## Table 1. Communication Line Solder Points

| COMMUNICATION MODE   | MAX17201 J7   | MAX17201 J8   | MAX17211 J7   | MAX17211 J8   |
|----------------------|---------------|---------------|---------------|---------------|
| I 2 C                | SCL           | SDA           | N/A           | N/A           |
| 1-Wire               | N/A           | N/A           | Logic-low     | DQ            |
| 1-Wire Overdrive     | N/A           | N/A           | Logic-high    | DQ            |

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## Sense Resistor Options

All  EV kit  boards are shipped with an 0805 size 0.010Ω chip  sense  resistor  installed.  Oversized  land  pattern pads  allow  for  different  size  sense  resistors  to  be  used if  desired. Also, each board contains an optional 0.003Ω copper trace sense resistor that can be enabled if desired. To do so, the chip sense resistor must be removed and 0Ω jumpers must be resoldered to change the circuit. Table 2 summarizes the changes for each board type. Note that the  IC  must  be  reconfigured  to  support  the  new  resistor type. See the Configuration Wizard section for details.

## Table 2. Sense Resistor Selection for MAX17201/MAX17211

Figure 2. EV Kit Splash Screen

| COMPONENT   | VALUE FOR CHIP SENSE   | VALUE FOR BOARD TRACE SENSE   |
|-------------|------------------------|-------------------------------|
| R13         | 0Ω                     | Not populated                 |
| R14         | Not populated          | 0Ω                            |
| R15         | Desired sense value    | Not populated                 |
| R16         | Not populated          | 0Ω (R17 is trace resistor)    |

<!-- image -->

## Evaluate: MAX17201/MAX17211

## Detailed Description of Software

The MAX17201G/MAX17201X/MAX17211G/MAX17211X evaluation kit software gives the user complete control of all functions of the MAX17201/MAX17211, as well as the ability to load a custom model into the ICs. It also comes with a sophisticated Configuration wizard to allow user to easily  adjust  fuel  gauge  settings.  Separate  control  tabs allow  the  user  access  to  view  real-time  updates  of  all monitored parameters. The software also incorporates a data-logging feature to monitor a cell over time.

## Software Installation

The  software  requires  Windows  7  or  newer  operating system. .NET version 4.5 is required for operation and is automatically installed if an older version of .NET framework is detected. To install the evaluation software, exit all  programs  currently  running  and  unzip  the  provided MAX17201\_05\_11\_15K Installation Package zipped file. Double  click  the  MAX17201\_05\_11\_15K\_V\_x\_x\_x\_x Install.exe  icon  and  the  installation  process  begins. Follow the prompts to complete the installation.  The  evaluation  software  can  be  uninstalled  in the  Add/Remove  Programs  tool  in  the  Control  Panel. After  the  installation  is  complete,  open  the  Maxim Integrated/MAX17201\_05\_11\_15K folder and run MAX17201\_05\_11\_15K.exe  or  select  it  from  the  program menu. Figure 2 shows a splash screen containing information about the evaluation kit that appears as the program is being loaded.

## Communication Port

The  EV  kit  software  automatically  finds  the  DS91230+ adapter when connected to any USB port. Communication status is shown on the right-hand side of the bottom status bar. See Figure 3. If the adapter cannot be found, a 'No USB Adapter' message is displayed. If the adapter is found, but the IC daughter board cannot be found, a 'No Slave Device' message is displayed. Otherwise, if communication is valid, a green bar updates as the software continuously reads the IC registers.

If  the  DS91230+ is connected, the status bar should be active. The bottom status bar also displays information on data  logging  status,  the  communication  mode,  hibernation status, selected current-sense resistor value, device serial number, and the EVKIT GUI's version number.

Figure 3. EV Kit Bottom Status Bar

<!-- image -->

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## Program Tabs

All functions of the program are divided under eight tabs in  the  main  program  window.  Click  on  the  appropriate tab  to  move  to  the  desired  function  page.  Located  on the ModelGauge m5 tab is the primary user information measured  and  calculated  by  the  IC.  The Graphs tab visually  displays  fuel  gauge  register  changes over time. The Registers and SBS registers tabs allow the user to modify common fuel gauge registers one at a time. The Commands tab  allows  for  special  operations  such  as changing  communication  mode,  initiate  fuel  gauge  logging and performing fuel gauge reset. The Configuration tab  displays  the  value  of  the  nonvolatile  registers  as well  as  the  remaining  number  of  available  writes.  The Authentication tab  displays  SHA  authentication-related information. The History tab allows the user to read out and save battery history information logged by the IC over its lifetime. All tabs are described in more detail in the following sections.

## Evaluate: MAX17201/MAX17211

## ModelGauge m5 Tab

The ModelGauge m5 tab  displays  the  important  output information read from the IC. Figure 4 shows the format of  the  ModelGauge  m5  Tab.  Information  is  grouped  by function and each is detailed separately.

## State of Charge

The State of Charge group box displays the main output information  from  the  fuel  gauge:  state  of  charge  of  the cell, remaining capacity, time to full, and time to empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age, internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

Figure 4. ModelGauge m5 Tab

<!-- image -->

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

## IC Information

The IC Information group box displays information related to IC itself. This includes the IC part number, IC unique ROM ID, and IC firmware revision.

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine state of charge.

## Alerts

The Alerts group  box  tracks  all  eleven  possible  alert trigger conditions. If any alert occurs, the corresponding checkbox is checked for the user to see. The clear alerts button resets all alert flags.

## At Rate

The At  Rate group  box  allows  user  to  input  a  hypothetical  load  current  and  the  fuel  gauge  calculates  the

Figure 5. Graphs Tab

<!-- image -->

## Evaluate: MAX17201/MAX17211

corresponding hypothetical Qresidual, TTE, AvSOC, and AvCap values.

## Graphs Tab

The Graphs tab displays up to 20 ADC readings and fuel gauge outputs. Figure 5 shows the format of the Graphs Tab.  Graph  information  is  grouped  into  four  categories: voltages,  temperatures,  capacities,  and  currents.  The user can turn on or off any data series using the check boxes on the right-hand side of the tab. The graph visible viewing  area  can  be  adjusted  from  10  minutes  up  to  1 week. The graphs remember up to 1 week worth of data. If  the viewing area is smaller than the time range of the data  already  collected,  the  scroll  bar  below  the  graphs can  be  used  to  scroll  through  graph  history.  All  graph history information is maintained by the program. Graph settings can be changed at any time without losing data.

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## Registers Tab

The Registers tab allows the user access to all fuel gauge related  registers  of  the  IC.  Figure  6  shows  the  format  of the Registers tab.  By  using  the  two  buttons  on  the  left side  of  the  tab,  the  user  can  sort  the  registers  either  by function  or  by  their  internal  address.  Each  line  of  data contains the register name, register address, hexadecimal

Evaluate: MAX17201/MAX17211

representation of the data stored in the register, and if applicable a conversion to application units. To write a register location click on the button containing the register name. A pop-up window allows the user to enter a new value in either  hexadecimal  units  or  application  units.  The  main read loop temporarily pauses while the register updates.

Figure 6. Registers Tab

<!-- image -->

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## SBS Registers Tab

The SBS registers tab is visible only if SBS functions of the IC are enabled. The SBS registers tab has the same formatting as the standard Registers tab as shown in Figure 7. By using the two buttons on the left side of the tab, the user can sort the registers either  by  function  or  by  their internal  address.  Each  line  of  data  contains  the  register

Evaluate: MAX17201/MAX17211

name, register address, hexadecimal representation of the data stored in the register, and if applicable a conversion to  application  units.  To  write  a  register  location  click  on the button containing the register name. A pop-up window allows the user to enter a new value in either hexadecimal units or application units. The main read loop temporarily pauses while the register updates.

Figure 7. SBS Registers Tab

<!-- image -->

│

## MAX17201G/MAX17201X/

## MAX17211G/MAX17211X Evaluation Kits

## Commands Tab

The Commands tab allows the user to access any general IC functions not related to normal writing and reading of register locations. Figure 8 shows the format of the Commands tab. Each group box of the Commands tab is described in detail in the following sections.

Figure 8. Commands Tab

<!-- image -->

Evaluate: MAX17201/MAX17211

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## 1-Wire Communication Speed

This option affects 1-wire ICs only. The user can select either  standard  or  overdrive  communication  speed. Communication speed is controlled by the EV kit software by driving the OD pin of the IC high or low. Regardless of the desired communication rate, the kit software communicates with any IC it discovers at either communication speed. The actual communication speed is displayed in the bottom status bar of the EV kit window.

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

## Log Data to File

Data  logging  is  always  active  when  the  kit  software  is started. The  default  data  log  storage  location  is  the  My Documents/Maxim  Integrated/MAX17201\_205\_211\_215/ Datalog.csv. The user can stop data logging by clicking the Stop Log button or change the data log file name by clicking the Change Path button. Whenever data logging is active, it is displayed on the bottom status bar of the EV kit window. All user available IC registers are logging in a .csv formatted file. The user can adjust the logging inter -val at any time. The user can also enable or disable  the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not part of the normal read data loop and indicates any time communication to the IC is lost.

## Burn Nonvolatile Memory Block

Clicking the Burn NV Block button sends the Copy NV Block  command  to  the  command  register  that  causes all  register  locations  from  180h to 1DFh to be stored to nonvolatile  memory.  Nonvolatile  memory  has  a  limited number  of  copies  and  the  user  is  prompted  to  confirm prior to executing the copy.

## Evaluate: MAX17201/MAX17211

## Reset IC

Clicking the Full Reset button sends the software POR command to the command register and sets the POR\_ CMD bit  of  the  Config2  register  to  fully  reset  operation the same as if the IC had been power cycled. Note that resetting the IC when the cell is not relaxed causes fuel gauge error.

## Lock Register Blocks

Clicking one of the five lock buttons locks a page or pages of memory as listed to the right of each button. This is a permanent operation so the user is prompted to confirm the operation prior to setting the lock.

## Configuration Tab

The Configuration tab has similar formatting to the standard Registers tab  as  shown  in  Figure  9,  but  there  are some major differences. When the user changes a register value  on  the Configuration tab,  only  the  RAM  value  of that  location  is  changed.  The  nonvolatile  value  remains unchanged. Register text changes to BLUE to indicate the RAM and nonvolatile values do not match. The user must complete a nonvolatile burn on the Commands tab or run the Configuration Wizard to change the nonvolatile value.

The nonvolatile memory has a limited number of updates that  is  shown  in  a  box  on  the  left-hand  side  of  the  tab. Maxim  recommends  using  the  Configuration  Wizard  to make  any  changes  to  nonvolatile  memory  instead  of changing registers manually. The wizard can be launched through the Device drop-down menu at the top of the EV kit software window or by the button on the left-hand side of the Configuration tab.  See the Configuration Wizard section for details.

Note  any  register  information  that  is  displayed  in RED text indicates a nonvolatile burn error where the data read back after a burn does not match the expected value.

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

Figure 9. Configuration Tab

<!-- image -->

## Authentication Tab

The Authentication tab  allows  the  user  to  perform  any action related to the SHA 256 authentication feature of the IC. Figure 10 shows the format of the Authentication tab. Each group box of the Authentication tab is described in detail in the following sections.

## SHA Challenge/ROM ID

Enter values into the challenge registers directly or click the Randomize  Challenge button  to  fill  the  challenge registers with a completely random value. The challenge value is  not  written  to  the  IC  until  one  of  the Compute MAC buttons is clicked. The ROM ID is used in some SHA calculations so it is displayed here for reference.

## SHA Secret

Enter the secret value here to allow software to verify the SHA calculations of the IC. The EV kit software updates

Evaluate: MAX17201/MAX17211

these  values  after  a  compute  next  secret  command  to what it  believes  the  secret  value  should  be. The  secret value cannot be written directly or read from the IC. The secret  value  has  a  limited  number  of  updates  that  are displayed in the changes remaining box. Note that once the secret is locked or if the number of remaining updates reaches 0, it can no longer be changed.

## SHA Authentication Results

After a SHA operation occurs, the output is displayed in the Reported MAC column. The EV kit software calculates its own hash and displays the result in the Expected MAC column. If the results match, the operation is a success. If the results do not match, it is most likely because the secret inside the IC does not match the secret value entered into the EV kit software.

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

Figure 10. Authentication Tab

<!-- image -->

## Generate Challenge/Response Pairs

Some applications use challenge-response pairs to confirm  battery  pack  authenticity  instead  of  maintaining  the secret on the host side. The EV kit software can generate a file  of  any  length  of  random  challenge-response pairs for  use  by  the  application.  Ensure  to  have  the  correct secret entered before generating the pairs.

## History Tab

The History tab allows the user to see all battery history logging information stored inside the IC. When the EV kit software is loaded, this page is blank. History information is not automatically read from the IC. The user must click either the Read Battery History button to display history data or the Read History and Save to File button to store history data in a tab delimited .csv file and then display the  data. After  history  data  has  been  read  from  the  IC,

Evaluate: MAX17201/MAX17211

it is displayed to the user starting with page 1. Figure 11 shows the history tab format.

Each history page has a status of 'BLANK' if it has not yet been written, 'WRITTEN' if it contains good history data, or  'SKIPPED'  if  the  IC  experienced  a  write  error  while storing the data. Each history page contains 16 words of data. The user can click through each of the 203 history pages  or  enter  a  page  number  directly  into  the  box  to jump to a certain page.

If a page has been written, all page data is displayed as hexadecimal  values.  Some  history  information  can  be converted into application units. Those locations contain one or  two  additional  boxes  of  information  showing  the converted  values.  Value  boxes  can  display  'User  Data' if  that  location  has  been  configured  to  store  user  data instead of history information or 'A.F. Data' if that location is being used for cycle+ age forecasting information.

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

Figure 11. History Tab

<!-- image -->

The history information is also displayed in a graph on the left side of the tab. The graph displays data only from history pages that have been written by the IC. Click on the corresponding register  name button to change the data shown by the graph.

## ModelGauge m5 EZ Configuration

Before the IC accurately fuel gauges the battery pack, it must be configured with characterization information. This can be accomplished two ways.

The first is through a custom characterization procedure that  can  be  performed  by  Maxim  under  certain  conditions.  The  result  is  an  .INI  summary  file  that  contains

## Evaluate: MAX17201/MAX17211

information that can be programmed into the IC using the Configuration Wizard tool. Contact Maxim for details on this procedure.

The second method is ModelGauge m5 EZ configuration. This  is  the  default  characterization  information  shipped inside  every  IC.  This  default  model  produces  accurate results for most applications under most operating conditions. It is the recommended method for new designs as it  bypasses  the  custom  cell  characterization  procedure. Some additional information is required from the user for EZ configuration initialization. The Configuration Wizard tool handles this as well.

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## Configuration Wizard

The EV kit software contains a fuel gauge Configuration Wizard that can be launched either on the Configuration tab or from the Device drop-down menu. The Configuration Wizard is the recommended way to change any nonvolatile settings inside the IC. The wizard allows user to:

- Open a custom INI file or generate a ModelGauge m5 EZ configuration.
- Make any adjustments specific to the application.
- Load the final configuration into the IC.
- Export the generated configuration to a new INI file.

The Configuration Wizard walks users through an 18 step process  to  configure  the  IC. Figure  12 shows  the  first page of the wizard. Each step is detailed below. The user

## Evaluate: MAX17201/MAX17211

can click the previous button in the bottom left corner of any page to return to any previous step if desired. Once the  last  step  is  completed,  the  wizard  closes,  the  IC  is configured, and a new INI file is saved (if selected).

## Step 1: Starting the Template

Choose  between  the  existing  nonvolatile  memory  data already inside the IC or revert back to the factory default values (ModelGauge m5 EZ).

## Step 2: Cell Model Selection

Choose between existing model already in the IC's nonvolatile  memory,  the  ModelGauge  m5  EZ  model,  or  a custom model from an INI file by using the Select File button. Note that ModelGauge m5 EZ is recommended if a custom model is not available.

Figure 12. Configuration Wizard Steps 1 and 2

<!-- image -->

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

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

## Evaluate: MAX17201/MAX17211

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

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## Step 17: Summary of Changes

After  all  desired  nonvolatile  configuration  settings  have been entered by the user, the table in step 17 shows a color-coded  summary  of  how  the  nonvolatile  memory settings are changed by the new configuration. Note the Configuration Wizard automatically converts any memory location that matches its alternate default value into general-purpose  data  storage. This  can  cause  changes to the nNVCfg0 to nNVCfg2 registers not selected by the user, but does not affect IC operation. Figure 13 shows an example of the Configuration Wizard summary table.

## Step 18: Update IC and Save New Configuration

In the final step, the user is given options of how to use the new configuration. Figure 14 shows step 18 of the configu -ration wizard. Option one is to discard all changes which has no effect on the IC. Option two is to write configura -

## Evaluate: MAX17201/MAX17211

tion shadow RAM and then restart firmware so that those changes take effect. This allows the user to experience the new operation of the IC without using one of the limited nonvolatile copies. Finally, option three writes the new configuration to the IC, burns the configuration into nonvolatile memory, and then restarts the IC so those changes take effect. This option is not available if the IC already used up all  of  the  available  configuration  copies. Additionally,  the user can store the new configuration options into a new INI file for easy programming of additional units. Select the desired path name for the new INI file.

The Configuration Wizard completes once the user clicks the Done button below step 18. The desired actions from step 18 occur after Done is clicked and the wizard closes. Click the window close button in the upper right corner of the wizard to exit at any time without performing any of the actions from step 18.

Figure 13. Configuration Wizard Step 17

<!-- image -->

│

## MAX17201G/MAX17201X/

## MAX17211G/MAX17211X

Evaluation Kits

Figure 14. Configuration Wizard Step 18

<!-- image -->

Evaluate: MAX17201/MAX17211

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

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
| MAX17201GEVKIT# | EV Kit |
| MAX17201XEVKIT# | EV Kit |
| MAX17211GEVKIT# | EV Kit |
| MAX17211XEVKIT# | EV Kit |

Evaluate: MAX17201/MAX17211

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## MAX17201G/MAX17211G Bill of Materials

| PART                  |   QTY | DESCRIPTION                                                  |
|-----------------------|-------|--------------------------------------------------------------|
| C1                    |     1 | 0.1uF ±10%, 50V X7R ceramic capacitor (0402)                 |
| C2                    |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0402), not populated |
| C3                    |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0402)                |
| C4                    |     1 | 0.47uF ±10%, 25V X5R ceramic capacitor (0402)                |
| R1                    |     1 | 10Ω ±1%, resistor (0402)                                     |
| R2                    |     1 | 51.1KΩ ±1%, resistor (0402)                                  |
| R4, R5                |     2 | 1KΩ ±1%, resistor (0402)                                     |
| R6-R10                |     5 | 150Ω ±1%, resistor (0402)                                    |
| R11, R12              |     2 | 10kΩ ±1%, resistor (0402)                                    |
| R13                   |     1 | 0Ω resistor (0402)                                           |
| R14                   |     1 | 0Ω resistor (0402), not populated                            |
| R15                   |     1 | 0.010Ω ±1%, resistor (0805)                                  |
| R16                   |     1 | 0Ω resistor (0805), not populated                            |
| RT1, RT2              |     2 | Thermistor 10K NTC (0402) Murata NCP15XH103F03               |
| D2-D4                 |     2 | 5.6V Zener Diode (SOD323)                                    |
| J1-J2, J4-J8, J10-J14 |    12 | Plated through hole solder pad (16g wire)                    |
| J9                    |     1 | RJ-11,R/A,6-POSITION/6-CONTACTS                              |
| J15                   |     1 | Exposed copper trace jumper                                  |
| U1                    |     1 | MAX17201G/MAX17211G Li+ fuel gauge IC 3x3 TDFN 14 pin        |
|                       |     1 | PCB: MAX17201EVKIT/MAX17211EVKIT                             |
|                       |     1 | USB-to-RJ11 board DS91230+                                   |
|                       |     1 | RJ11 6pos-6pos reverse modular cord 6ft.                     |

│

Evaluate: MAX17201/MAX17211

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

## MAX17201G/MAX17211G Schematics

<!-- image -->

Note the schematic and layout are identical for the MAX17201G and MAX17211G EV kit boards. The only difference between boards is IC type and board name silkscreen. The MAX17201G is shown in the following figures.

│

Evaluate: MAX17201/MAX17211

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

## MAX17201G/MAX17211G PCB Layout

Component Placement

<!-- image -->

Bottom Layout

<!-- image -->

Evaluate: MAX17201/MAX17211

Top Layout

<!-- image -->

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X Evaluation Kits

## MAX17201X/MAX17211X Bill of Materials

| PART                  |   QTY | DESCRIPTION                                                  |
|-----------------------|-------|--------------------------------------------------------------|
| C1                    |     1 | 0.1uF ±10%, 50V X7R ceramic capacitor (0402)                 |
| C2                    |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0402), not populated |
| C3                    |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0402)                |
| C4                    |     1 | 0.47uF ±10%, 25V X5R ceramic capacitor (0402)                |
| R1                    |     1 | 10Ω ±1%, resistor (0402)                                     |
| R2                    |     1 | 51.1KΩ ±1%, resistor (0402)                                  |
| R4, R5                |     2 | 1KΩ ±1%, resistor (0402)                                     |
| R6-R10                |     5 | 150Ω ±1%, resistor (0402)                                    |
| R11, R12              |     2 | 10kΩ ±1%, resistor (0402)                                    |
| R13                   |     1 | 0Ω resistor (0402)                                           |
| R14                   |     1 | 0Ω resistor (0402), not populated                            |
| R15                   |     1 | 0.010Ω ±1%, resistor (0805)                                  |
| R16                   |     1 | 0Ω resistor (0805), not populated                            |
| RT1, RT2              |     2 | Thermistor 10K NTC (0402) Murata NCP15XH103F03               |
| D2-D4                 |     2 | 5.6V Zener Diode (SOD323)                                    |
| J1-J2, J4-J8, J10-J14 |    12 | Plated through hole solder pad (16g wire)                    |
| J9                    |     1 | RJ-11,R/A,6-POSITION/6-CONTACTS                              |
| J15                   |     1 | Exposed copper trace jumper                                  |
| U1                    |     1 | MAX17201X/MAX17211X Li+ fuel gauge WLP 15 pin                |
|                       |     1 | PCB: MAX17201XEVKIT/MAX17211XEVKIT                           |
|                       |     1 | USB-to-RJ11 board DS91230+                                   |
|                       |     1 | RJ11 6pos-6pos reverse modular cord 6ft.                     |

│

Evaluate: MAX17201/MAX17211

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

## MAX17201X/MAX17211X Schematics

<!-- image -->

Note the schematic and layout are identical for the MAX17201X and MAX17211X EV kit boards. The only difference between boards is IC type and board name silkscreen. The MAX17201X is shown in the following figures.

│

Evaluate: MAX17201/MAX17211

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

## MAX17201X/MAX17211X PCB Layout

Component Placement

<!-- image -->

Bottom Layout

<!-- image -->

Evaluate: MAX17201/MAX17211

Top Layout

<!-- image -->

│

## MAX17201G/MAX17201X/ MAX17211G/MAX17211X

## Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                           | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------|-----------------|
|                 0 | 3/16            | Initial release                       | -               |
|                 1 | 4/16            | Removed MAX17205/MAX17215 from EV kit | 1-24            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX17201/MAX17211