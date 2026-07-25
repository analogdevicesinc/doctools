<!-- lastmod 2022-08-05 -->
## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## General Description

The  MAX173xxX/MAX173xxG  evaluation  kits  (EV  kits) are fully assembled and tested surface-mount PCBs that evaluate  the  stand-alone  pack-side  fuel  gauge  IC  with protector  and  SHA-256  authentication  for  1-cell  lithiumion/polymer batteries.

The  EV  kits  include  the  IC  evaluation  board  with  integrated  I 2 C/1-Wire ®   interface  and  USB  micro-B  cable. Windows ® -based graphical user interface (GUI) software is  available  for  use  with  the  EV  kits  and  can  be  downloaded from Maxim's website at www.maximintegrated. com/products/MAX17303 (under the Design Resources tab). Windows 7 or newer Windows operating system is required to use with the EV kit GUI software.

## Features and Benefits

- ModelGauge™ m5 Algorithm
- Monitors Single-Cell Packs
- Full Protection Solution On-Board for Evaluation
- Battery Pack Input Voltage Range of +2.3V to +4.9V with Default Hardware
- Default Current Range -5A to +5A, up to 10A with less than 5mΩ Sense Resistor
- Thermistor Measurement Network
- On-Board I 2 C/1-Wire Communication Interface
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX173xx EV Kit Files

| FILE                                | DECRIPTION                                 |
|-------------------------------------|--------------------------------------------|
| MAX17300_03_10_13KEVKitGUISetup.msi | Installs all EV kit files on your computer |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

ModelGauge is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

## Quick Start

## Required Equipment

- MAX173xxX/MAX173xxG EV kit
- Lithium battery pack of desired configuration
- Battery charger
- Load circuit
- USB cable
- PC with Windows 7 or newer windows operating system and USB port

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to install the EV kit software, make required hardware  connections,  and  start  operation  of  the  kits. The EV kit software can run without hardware attached. It  automatically  locates  the  hardware  when  connections are made. After communication is established, follow the Detailed Description of Software section to configure the IC and start evaluation.

- 1) Visit www.maximintegrated.com/products/ MAX17303 under the Design Resources tab to download the latest version of the MAX173xx EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX17301\_03\_11\_13KEVKitGUISetup.msi program inside the temporary folder. The program files are copied, and icons are created in the Win -dows Start menu. The software requires the .NET Framework 4.5 or later. If you are connected to the Internet, Windows automatically updates the .NET framework as needed.

<!-- image -->

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

- 3) The EV kit software launches automatically after install, or alternatively, it can be launched by clicking on its icon in the Windows Start menu.
- 4) Make connections to the EV kit board based on cell pack configuration as shown in Figure 1. The load or charger circuit can be connected at this time as well. The cell connects between the BATT+ and BATTpads and the charger/load connects between the SYSGND and SYSPWR pads.

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

- 5) Connect the EV kit to a USB port on the PC using the USB cable. Press the S1 button to wake up the IC. The GUI software establishes communication automatically.
- 6) At startup, the IC defaults to EZ Configuration. If you have a custom .INI file for your application, it can be loaded at this time.

Figure 1. MAX173xx Board Connections

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Detailed Description of Hardware

The MAX173xx EV kit board provides a variety of features that highlight the functionality of the IC. The following sections detail the most important aspects of the EV kit board.

## Communication Connections

The USB interface on the PCB establishes I 2 C or 1-Wire communication between the IC and the software GUI interface.  When  developing  code  separately,  connections  to the communication lines can be made directly to the board SDA (DQ) and SCL (OD) pins. The user must apply the appropriate external pullup resistors to the communication lines when not using the built-in MAXUSB interface.

## External Thermistor

The  MAX173xx  can  be  configured  to  use  temperature measurements or an external thermistor. All EV kit boards come with a thermistor installed as surface mount component  RT1.  If  the  application  requires  direct  thermal contact to the cells, RT1 can be removed and replaced with  a  leaded  thermistor  connected  between  the  RT1+/ RT1- solder pads.

## Sense Resistor Options

The EV kit boards are shipped with an 0805-size IC sense resistor  installed.  Oversized  land  pattern  pads  allow  for different size sense resistors to be used if desired.

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

## Detailed Description of Software

The  MAX173xxX/MAX173xxG  evaluation  kit  software gives  the  user  complete  control  of  all  functions  of  the MAX173xx, as well as the ability to load a custom model into the ICs. Separate control tabs allow the user access to  view  real-time  updates  of  all  monitored  parameters. The software also incorporates a data-logging feature to monitor a cell over time.

## Software Installation

The software requires a Windows 7 or newer operating system.  .NET  version  4.5  is  required  for  operation  and is  automatically installed if an older version of the .NET framework is detected. To install the evaluation software, exit all programs currently running and unzip the provided MAX173xx installation package zipped file.

Double click the MAX17301\_03\_11\_13KEVKitGUISetup. msi  icon  and  the  installation  process  begins.  Follow the  prompts  to  complete  the  installation.  The  evaluation  software  can  be  uninstalled  in  the Add/Remove programs  tool  in  the Control  Panel .  After  the  installation  is  complete,  open  the  Program  Files  (x86)\Maxim Integrated\MAX17301\_03\_11\_13K folder and run MAX17301\_03\_11\_13K.exe or select it from the program menu. Figure 2 shows a splash screen containing information  about  the  evaluation  kit  that  appears  while  the program is loading.

Figure 2. EV Kit Splash Screen

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Communication Port

The EV kit software automatically finds the EV kit when connected  to  any  USB  port.  Communication  status  is shown on the  right-hand  side  of  the  bottom  status  bar. See Figure 3. If the EV kit cannot be found, a 'No USB Adapter' message is displayed. If the EV kit is found, but the IC cannot be found, a 'No Slave Device' message is displayed. If the IC is properly powered, it can be woken up by pressing the S1 button. Otherwise, if communication is valid, a green bar updates as the software continuously reads the IC registers.

The bottom status bar also displays information on data logging status, the communication mode, hibernation status,  selected  current-sense  resistor  value,  device  serial number, and the EV kit GUIs version number.

## Program Tabs

All  functions  of  the  program  are  divided  under  various tabs in the main program window. Click on the appropriate tab to move to the desired function page. Located on

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

the ModelGauge m5 tab is the primary user information measured and calculated by the IC. The Protector tab displays all the protection settings of the IC. The Graph s tab  visually  displays  fuel  gauge  and  protection  register changes over time. The Registers tab allows the user to view and modify common fuel-gauge registers one at a time. The Commands tab  allows  for  special  operations such as initializing the fuel-gauge logging and performing fuel-gauge reset. The Configuration tab allows the user to modify the NVMemory registers one at a time, but any changes here are not written to nonvolatile memory.  The Authentication tab allows the user to send and verify the SHA commands. All tabs are described in more detail in the following sections.

## ModelGauge m5 Tab

The ModelGauge m5 tab  displays  the  important  output information read from the IC. Figure 4 shows the format of the ModelGauge m5 tab. Information is grouped by function and each is detailed separately.

Figure 3. EV Kit Bottom Status Bar

<!-- image -->

Figure 4. ModelGauge m5 Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## State-of-Charge

The State-of-Charge group box displays the main output information  from  the  fuel  gauge:  state-of-charge  of  the cell, remaining capacity, time-to-full, and time-to-empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age, internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine stateof-charge.

## Alerts

The Alerts group  box  tracks  all  possible  alert  trigger conditions.  If  any  alert  occurs,  the  corresponding  LED becomes  green  for  the  user  to  see.  The  ' clear  alerts ' button resets all alert flags.

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

## Protection Status

The Protection Status group box displays the status of the charge and discharge FETs as well as all bits of the ProtStatus register. If the FETs LED is green, current can flow. If the LED is red, there is a fault condition and the FET is open preventing current flow.

## At Rate

The At Rate group box allows the user to input a hypothetical  load  current  (AtRate)  and  the  fuel  gauge  calculates  the  corresponding  hypothetical  Qresidual,  TTE, AvSOC, and AvCap values.

## Protector Tab

The Protector tab  displays  the  protection  settings  read from the IC. The settings cannot be changed from this tab. Use the Configuration Wizard to update these settings. Figure 5 shows the format of the Protector tab. Information is grouped by function and each is detailed separately.

The Measurements , Alerts ,  and Protection  Status group boxes display the same information that is shown on the ModelGauge m5 tab.

Figure 5. Protector Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Charging Configuration

The Charging Configuration group box displays all the protection settings related to charging as well as a graphical  view  for  those  selections  across  the  programmable temperature ranges.

## Discharging Configuration

The Discharging Configuration group  box  displays  all the protection settings related to discharging.

## Graphs Tab

Figure  6  shows  the  format  of  the Graphs tab.  Graph information  is  grouped  into  four  categories:  voltages,

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

temperatures,  capacities,  and  currents.  The  user  can turn on or off any data series using the check boxes on the right-hand side of the tab. The graphs visible viewing area can be adjusted from 10 minutes up to 1 week. The graphs  remember  up  to  1  weeks'  worth  of  data.  If  the viewing area is smaller than the time range of the data already  collected,  the  scroll  bar  below  the  graphs  can be used to scroll through graph history. All graph history information is maintained by the program. Graph settings can be changed at any time without losing data. Voltages in the graph are plotted as an average cell voltage measurement.

Figure 6. Graphs Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Registers Tab

The Registers tab  allows  the  user  access  to  all  fuel gauge related registers of the IC. Figure 7 shows the format of the Registers tab. By using the drop-down menu on the top right of the tab, the user can sort the registers either by function or by their internal address. Each line of data contains the register name, register address, hexadecimal representation of the data stored in the register, and  if  applicable,  a  conversion  to  application  units.  To write a register location, click on the button containing the register name. A pop-up window allows the user to enter a  new  value  in  either  hexadecimal  units  or  application units.  The  main  read  loop  temporarily  pauses  while  the register updates.

## Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

## Commands Tab

The Commands tab allows the user to access any general IC function not related to normal writing and reading of  register  locations.  Figure  8  shows  the  format  of  the Commands tab. Each group box of the Commands tab is described in detail in the following sections.

## 1-Wire Communication Speed

This option affects 1-Wire ICs only. The user can select either  standard  or  overdrive  communication  speed. Communication speed is controlled by the EV kit software by driving the OD pin of the IC high or low. Regardless of the desired communication rate, the kit software communicates with any IC it discovers at either communication speed. The actual communication speed is displayed in the bottom status bar of the EV kit window.

Figure 7. Registers Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

## Log Data to File

Data  logging  is  always  active  when  the  EV  kit  software is started. The default data log storage location is My Documents/Maxim Integrated/MAX17301\_03\_11\_13/ Datalog.csv. The user can stop data logging by clicking the Stop Log button or change the data log file name by clicking the Change Path button. Whenever data logging is active, it is displayed on the bottom status bar of the EV kit window. All user available IC registers are logging in a .csv formatted file. The user can adjust the logging interval at any time. The user can also enable or disable the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not a part of the normal read data loop and indicates any time communication to the IC is lost.

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

## Nonvolatile Memory Block

Clicking the Burn NV Block button sends the Copy NV Block  command  to  the  command  register  that  causes all  register  locations  from  180h to 1DFh to be stored to nonvolatile  memory.  Nonvolatile  memory  has  a  limited number  of  copies  and  the  user  is  prompted  to  confirm prior to executing the copy.

## Reset IC

Clicking the Full Reset button sends the software POR command to the command register and sets the POR\_ CMD bit of the Config2 register to fully reset fuel-gauge operation as if the IC had been power cycled. Note that resetting the IC when the cell is not relaxed causes fuelgauge error.

## Lock Register Blocks

Clicking one of the five lock buttons locks a page or pages of memory as listed to the right of each button. This is a permanent operation, so the user is prompted to confirm the operation prior to setting the lock.

Figure 8. Commands Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Prepare for Shipping

Clicking the Enter Shipmode button writes Config.SHDN = 1 to command the IC to enter shipmode. Clicking the Stop  Communication button  stops  all  communication from the GUI to the IC to allow the IC to enter ship mode.

## Configuration Tab

The Configuration tab has similar formatting to the standard Registers tab  as shown in Figure 9, but there are some major differences. When the user changes a register value on the Configuration tab, only the RAM value of that location is changed. The nonvolatile value remains unchanged.  Register  text  changes  to BLUE to  indicate the RAM and nonvolatile values do not match. The user must complete a nonvolatile burn on the Commands tab or run the Configuration Wizard to change the nonvolatile value. The nonvolatile memory has a limited number

## Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

of  updates that is shown in a box on the left-hand side of the tab. Maxim recommends using the Configuration Wizard to  make  any  changes  to  nonvolatile  memory instead  of  changing  registers  manually. The  wizard  can be launched through the Device drop-down menu at the top of the EV kit software window or by the button on the top-right of the Configuration tab. See the Configuration Wizard section for details. Note any register information that is displayed in RED text indicates a nonvolatile write error where the data read back after a nonvolatile memory write does not match the expected value.

Figure 9. Configuration Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## Register View Tab

The Register View tab  provides  a  convenient  interface to  visualize  and  update  the  register  settings  in  binary format. As shown in Figure 10, all configuration register names are listed  on  the  left  side  of  the Register  View tab.  When one register is selected, detailed information about  the  register  is  displayed  on  the  right-side  panel. The corresponding name and binary value of each bitfield of  the  selected  register  are  displayed  on  the  top  table. Clicking  the Read  Register button  refreshes  the  view and loads the register reading into the top table. Single click the binary bitfield to edit the register setting directly. When all the  desired  bitfield  settings  are  updated,  click the Write Register button to update the register value. If the change needs to be aborted, click the Read Register button to reload the register value. The table on the bot-

## Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

tom  right  lists  all  the  bit  descriptions  and  reset  values based on the IC data sheet. Refer to the description of the bitfield for how to set the bitfield. The Find: Bit Fields feature is located at the bottom left of the Register Vie w tab. To find a bitfield, type in the bitfield name in the Find: Bit Fields menu bar. The search result is available in the dropdown list. The History menu at the bottom left shows all the history searches from the Find: Bit Fields menu.

## Authentication Tab

The Authentication tab  allows  for  full  evaluation  of the  SHA-256  battery  security  feature  for  MAX17301/ MAX17311 and MAX17302/MAX17312 fuel gauges. This battery  authentication  feature  is  not  available  for  MAX17303/ MAX17313.  Figure  11  shows  the Authentication tab. Each group box of the Authentication tab is described in detail in the following sections.

Figure 10. Register View Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## SHA Challenge/ROM ID

The 160-bit SHA-256 Challenge message consists of ten 16-bit challenges. To manually enter the challenge message, click the hex value field of each challenge number and edit the value in the text box. Click the Randomize Challenge button to create a random challenge message.

## SHA Secret

The  160-bit  SHA-256  Secret  key  consists  of  ten  16-bit secret values. Unless the secret is specifically programmed by Maxim Integrated, the default key value is 0. To prepare for authentication with the IC, enter the known secret value for the IC connected to the GUI. Click Clear Secret to reset the key values in the IC to 0. Note that it is not possible to clear secret if secret is locked. Click Lock Secret to permanently lock the secret value for the IC. Secret Changes Remaining shows the remaining chances to update SHA secret value.

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

## Authentication Result

This group box provides four methods to perform authentication evaluation. When the authentication process begins, the IC calculates MAC based on the challenge and stored secret value.  The  GUI,  which  represent  the  host-side  processor, also calculates based on challenge and known secret. If the SHA secret is entered correctly matching the programmed secret state in the IC, the authentication succeeds given any challenge using any of the four methods. Compute MAC with ROM ID computes MAC result based on IC ROM ID that is specific to the IC. Compute MAC without ROM ID does not involve ROM ID into computation, which means the MAC result for every IC given the same challenge and secret  should  be  the  same. Compute Next Secret commands do not only compute authentication results, but also updates  the  secret  value  [Secret0…Secret9]  to  [MAC6… MAC15].  If  there  is  no Secret  Changes  Remaining displayed in the SHA Secret group or the secret is locked, the secret does not update.

Figure 11. Authentication Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## History Tab

The History tab visualizes all nonvolatile update history on 0x1Ax column of the nonvolatile memory map. Figure 12 shows the History tab. This column of nonvolatile memory features a Fibonacci Saving mechanism to help the IC efficiently learn and adapt to battery characteristic changes. The column of memory is changed by nonvolatile programming and also is updated automatically as the battery pack experience through usage cycles.

## Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

In the Read History group box, click the Read Battery History button to initiate the nonvolatile history recall process. Once the process is initiated, it takes a while to load the nonvolatile history from the IC. Click the Read Battery History and Save to File to save the nonvolatile history to  a  csv  file  in  addition  to  initiate  the  nonvolatile  history recall process. After the recall process is finished, enter in the page number or select the + or - signs to browse through  the  nonvolatile  history  at  the Display  History Data tool.  The  detailed  information  of  the  specific  page selected is displayed in the Logging History section.

Figure 12. History Tab

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Configuration Wizard

Before the IC accurately fuel gauges the battery pack, it must be configured with characterization information. This can be accomplished in two ways. The first is through a custom characterization procedure that can be performed by  Maxim  under  certain  conditions.  The  result  is  an .INI  summary  file  that  contains  information  that  can  be programmed into the IC on the Configure tab.  Contact Maxim for details about this procedure.

The second method is ModelGauge m5 EZ configuration. This  is  the  default  characterization  information  shipped inside  every  IC.  This  default  model  produces  accurate results for most applications under most operating conditions. It is the recommended method for new designs as it  bypasses  the  custom  cell  characterization  procedure. Some additional information is required from the user for EZ configuration initialization.

In the Configuration tab, click the Configuration Wizard button.  The Configuration  Wizard window  pops  up  as

## Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

shown in Figure 13. Follow the description and complete all  the  steps  in  the Configuration  Wizard .  Click Next when each step is finished.

Step 1 shows the options for how to start with nonvolatile programming. For a previously unprogrammed IC, select Start with Factory Default Values to  begin  evaluation. If  there  are  already  nonvolatile  memory  changes  in  the IC  to  be  kept,  select Start  with  Existing  Nonvolatile Memory Data .

Step 2 shows the critical model selection options. Enter the  sense  resistor  value  into  the Sense  (mOhms) text box. For EZ configuration without using an INI file, select the Use  ModelGauge  m5  EZ  Model option.  Enter  the rated  battery  capacity,  empty  voltage  (minimum  safe system supply voltage), charge termination current, and check  the  checkbox  if  charge  voltage  is  greater  than 4.275V.  If  the  INI  file  is  available,  select Use  Custom Model and load model INI file provided by Maxim directly.

Figure 13. Configuration Wizard-Steps 1 and 2

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

In  Step  3,  charge  protection  related  settings  need  to be  configured.  Figure  14  shows  this  step.  The  checkboxes at the bottom right enable or disable the protection features.  The Enable  Protection feature  needs  to  be checked to enable protection. JEITA charging allows the IC  to  calculate  and  report  the  required  charging  voltage and charging current base on temperature conditions. If the JEITA charging feature is desired, check the Enable JEITA checkbox. JEITA protection allows the IC to protect charging at different charging rates based on temperature

## Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

conditions. Check the Enable JEITA Protection to enable this feature. Check the Enable Parallel Charging Feature to  enable  the  parallel  battery  management  feature.  The upper section of the panel visualizes the JEITA temperature zones and protection thresholds. In the lower section, the  user  can  edit  detailed  settings  like  the  temperature zone, OVP, charging voltage, and charging current. When all the JEITA settings are completed, check the upper section graph to make sure settings are correct.

Figure 14. Configuration Wizard-Step 3

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

In Step 4, the user can enable step-charging and edit the configuration. Charge Step 0 and Charge Step 1 voltages are set relative to the Room Charging Voltage that is set in Step 3. Charge Step 1 and Charge Step 2 currents are set relative to the Room Charging Current that is set in Step 3 as shown in Figure 15.

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

In  Step  5,  the  user  can  enable  the  smart  full  threshold.  Setting  the  smart  full  threshold  equal  to  the  Room Charging Voltage disables the smart full threshold.

In  Step  6,  the  user  can  enable  the  battery  internal  selfdischarge  detection  functionality  and  edit  the  configuration and threshold

Figure 15. Configuration Wizard-Steps 4, 5, and 6

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

From Step 7 and Step 8, the user can edit the discharge protection parameters. See Figure 16 and Figure 17. The parameters  include  detailed  protection  configurations, thresholds,  and  timings.  In  Step  9,  choose  the  power mode  for  fuel-gauge  device.  Enabling  hibernate  mode allows  the  reduction  of  consumption  by  6µA  in  operating  mode,  with  lower  rate  of  ADC  sampling.  Enabling Deepship mode shuts down any protection functionality during shipping and storage conditions. In Step 10, check the 'Battery Out' option to allow the communication stop

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

shutdown feature. Check 'Pushbutton Wakeup' to allow wakeup fuel-gauge from the ALRT pin.

From  Steps  11  to  19,  follow  along  the  step  description to  fill  out  all  the  application  specific  information  related to fuel-gauging. Typically, leave options from Steps 11 to 19 as default. If there is a special thermistor requirement, look for the NTC model with the closest Beta value in the drop-down list. If the thermistor beta value is not covered by  the  models  in  the  drop-down  list,  contact  Maxim  for support.

Figure 16. Discharge Protection Configurations

<!-- image -->

│

## MAX1730xX/MAX1730xG/

## MAX1731xX/MAX1731xG Evaluation Kits

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

Figure 17. Additional Protection Configuration and Power Mode Control

<!-- image -->

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

In Step 20, the user can choose to update the IC based on previous configuration steps. See Figure 18. The nonvolatile  memory  can  only  be  updated  seven  times. The user can choose to update only the RAM by selecting the second option. This is a good method to evaluate previous settings without updating the nonvolatile memory. In this mode, if the IC is power cycled, the configuration is lost. If  final  configuration  is  decided,  choose  the  third  option Write New Configuration to Non-volatile Memory .

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

Always  remember  to  check Save  New  Configuration Settings to .INI file . This allows the resulting configuration  in  previous  steps  to  be  recorded  in  a  final  INI  file. When the Configuration Wizard is closed, the previous configurations are not remembered. Click the Update IC button to execute the changes and saves. Click the Close button  to  exit  the Configuration  Wizard without  doing anything.

Figure 18. Configuration Step

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Programming Tool

The INI file provided from Maxim only includes the battery characteristics model. See Figure 19. It does not include custom settings for protector and device operation. After completion  of  the Configuration  Wizard ,  a  full  INI  is generated  with  all  nonvolatile  register  configurations. With a full INI, the user does not need to go through the Configuration Wizard again. In the Programming Tool

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

panel, click Select File to select the saved full configuration file. The configuration file is typically saved from the configuration step in the Configuration Wizard as shown in  Figure  18.  Click Program  IC to  program  nonvolatile memory directly. When there is a minor change required on  one  or  two  nonvolatile  registers,  edit  the  registers inside  the  final  configuration  INI  file  using  a  text  editor, then program the IC using the programing tool.

Figure 19. Programming Tool

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Hardware Connection Guideline

When evaluating the MAX173xx EV kit with high current or evaluating the protection functionality, use a real battery instead of power supply. When connecting a battery, use  a  soldered  connection  instead  of  a  jumper  cable. During  a  protector  FET  switching  event,  the  inductance of  the  lab  jumper  cable  and  power  supply  can  cause a  voltage  overshoot  on  the  battery.  This  voltage  spike

Figure 20. Good Hardware Connection Example (Use real battery and soldered connection.)

<!-- image -->

Figure 21. BATT Voltage and Battery Current Waveform at Overcurrent Protection Event with Good Connections

<!-- image -->

## Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

could  potentially  cause  the  voltage  across  the  BATT and GND pins to rise above the absolute maximum rating  of  6V,  damaging the IC permanently. Figure 20 and Figure  21  show  good  examples  of  battery  connections and  its  corresponding  BATT  voltage  waveform  during switching  events.  Figure  22  and  Figure  23  show  bad examples  of  battery  connections  and  its  corresponding BATT voltage waveform.

Figure 22. Bad Hardware Connection Example (Use power supply with lab jumper cable.)

<!-- image -->

Figure 23. BATT Voltage and Battery Current Waveform at Overcurrent Protection Event with Bad Connections

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com/en-us  |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com |
| Vishay                                 | 402-563-6866 | www.vishay.com        |

Note:

Indicate that you are using the MAX173xx when contacting these component suppliers.

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## Ordering Information

| PART             | FUEL GAUGE                              | PROTECTOR                                      | AUTHENTICATION   | INTERFACE   | PIN-PACKAGE   |
|------------------|-----------------------------------------|------------------------------------------------|------------------|-------------|---------------|
| MAX17300GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level with Internal Self-Discharge Detection | SHA-256          | I 2 C       | 14 TDFN-EP    |
| MAX17300XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level with Internal Self-Discharge Detection | SHA-256          | I 2 C       | 15 WLP        |
| MAX17310GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level with Internal Self-Discharge Detection | SHA-256          | 1-Wire      | 14 TDFN-EP    |
| MAX17310XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level with Internal Self-Discharge Detection | SHA-256          | 1-Wire      | 15 WLP        |
| MAX17301GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level                                        | SHA-256          | I 2 C       | 14 TDFN-EP    |
| MAX17301XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level                                        | SHA-256          | I 2 C       | 15 WLP        |
| MAX17311GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level                                        | SHA-256          | 1-Wire      | 14 TDFN-EP    |
| MAX17311XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 2-Level                                        | SHA-256          | 1-Wire      | 15 WLP        |
| MAX17302GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        | SHA-256          | I 2 C       | 14 TDFN-EP    |
| MAX17302XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        | SHA-256          | I 2 C       | 15 WLP        |
| MAX17312GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        | SHA-256          | 1-Wire      | 14 TDFN-EP    |
| MAX17312XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        | SHA-256          | 1-Wire      | 15 WLP        |
| MAX17303GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        |                  | I 2 C       | 14 TDFN-EP    |
| MAX17303XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        |                  | I 2 C       | 15 WLP        |
| MAX17313GEVKIT#* | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        |                  | 1-Wire      | 14 TDFN-EP    |
| MAX17313XEVKIT#  | 1-Cell Fuel Gauge with ModelGauge m5 EZ | 1-Level                                        |                  | 1-Wire      | 15 WLP        |

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173xxG EV Kit Bill of Materials

| REF_DES                                      | DNI/DNP   | QTY   | MFG PART #                                            | MANUFACTURER                         | VALUE                        | DESCRIPTION                                                                                                                                                |
|----------------------------------------------|-----------|-------|-------------------------------------------------------|--------------------------------------|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ALRT, SCL, SCL1, SDA, SDA1                   | -         | 5     | 5002                                                  | KEYSTONE                             | N/A                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                      |
| C1, C4, C7, C26                              | -         | 4     | C0402C105K8PAC                                        | KEMET                                | 1UF                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                    |
| C2, C6, C12-C15, C21, C22, C24, C25, C28-C38 | -         | 21    | GRM155R71E104KE14                                     | MURATA                               | 0.1UF                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                               |
| C3                                           | -         | 1     | LMK105B7474KV                                         | PANASONIC                            | 0.47UF                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                |
| C5                                           | -         | 1     | C0402C103K5RAC;GRM155R71H10 3KA88;C1005X7R1H103K050BE | KEMET;MURATA;TDK                     | 0.01UF                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                |
| C9                                           | -         | 1     | GRM155R71A104JA01                                     | MURATA                               | 0.1UF                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  |
| C20, C23, C27                                | -         | 3     | GRM155R61A475MEAA                                     | MURATA                               | 4.7UF                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                  |
| C39, C40                                     | -         | 2     | C0402C0G500270JNP; GRM1555C1H270JA01                  | VENKEL LTD.;MURATA                   | 27PF                         | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                                   |
| D1                                           | -         | 1     | LTST-C190CKT                                          | LITE-ON ELECTRONICS INC.             | LTST-C190CKT                 | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                                                            |
| D2-D4, D8                                    | -         | 4     | BZX384-C5V6                                           | NXP                                  | 5.6V                         | DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150 DEGC                                                                                   |
| D5, D6                                       | -         | 2     | MBR0520                                               | MICRO COMMERCIAL COMPONENTS          | MBR0520                      | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                                                     |
| D7                                           | -         | 1     | RB520G-30                                             | GENERIC PART                         | RB520G-30                    | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMT (SOD-723); PIV=30V; IF=0.1A                                                                                        |
| DGND, GND                                    | -         | 2     | 5011                                                  | KEYSTONE                             | N/A                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                    |
| DS1, DS2 J1                                  | - -       | 2 1   | LTST-C190GKT 10118193-0001LF                          | LITE-ON ELECTRONICS INC. FCI CONNECT | LTST-C190GKT 10118193-0001LF | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS |
| J2                                           | -         | 1     | PBC02SAAN                                             | SULLINS ELECTRONICS CORP.            | PBC02SAAN                    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125                                                                     |
| L1-L3                                        | -         | 3     | BLM18AG601SN1                                         | MURATA                               | 600                          | DEGC; INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                                               |
| MISC1                                        | -         | 1     | AK67421-1-R                                           | ASSMANN                              | AK67421-1-R                  | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS                                                 |
| R1                                           | -         | 1     | RC0402JR-070RL; CR0402-16W- 000RJT                    | YAGEO PHYCOMP;VENKEL LTD.            | 0                            | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                      |
| R2, R9                                       | -         | 2     | ERJ-2RKF27R0X;RC0402FR-0727RL                         | PANASONIC;YAGEO PHICOMP              | 27                           | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                    |
| R5                                           | -         | 1     | KRL1220E-M-R010-F                                     | SUSUMU CO LTD.                       | 0.01                         | RES; SMT (0805); 0.01; 1%; +/-50PPM/DEGC; 0.5W                                                                                                             |
| R6, R14-R16, R34                             | -         | 5     | CRCW04021K00FK; RC0402FR- 071KL                       | VISHAY DALE;YAGEO PHICOMP            | 1K                           | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                        |
| R8, R12, R13                                 | -         | 3     | CRCW0402150RFK; 9C04021A1500FL                        | VISHAY DALE;YAGEO                    | 150                          | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                   |
| R11                                          | -         | 1     | CR0402-16W-3650FT                                     | VENKEL LTD.                          | 365                          | RESISTOR; 0402; 365 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                    |
| R20 R23, R26                                 | - -       | 1 2   | CRCW040210K0JN RC0805JR-070RL                         | VISHAY DALE YAGEO PHYCOMP            | 10K 0                        | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.063W; THICK FILM RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                              |
| R33                                          | -         | 1     | CRCW040212K0FK                                        | VISHAY DALE                          | 12K                          | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                   |
| R35, R36, R38, R39                           | -         | 4     | ERJ-2GE0R00X                                          | PANASONIC                            | 0                            | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                       |
| R37 R40, R41                                 | - -       | 1 2   | CRCW04021M00FK CRCW04024K70FK                         | VISHAY DALE VISHAY DALE              | 1M 4.7K                      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                              |
| R42, R43                                     | -         | 2     | ERJ-2RKF1001X                                         | PANASONIC                            | 1K                           | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                      |
| R46, R47                                     | -         | 2     | CRCW0402470RFK                                        | VISHAY DALE                          | 470                          | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                   |
| RT1                                          | -         | 1     | NCP15XH103F03RC                                       | MURATA                               | 10K                          | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                                                         |
| S1                                           | -         | 1     | EVQ-Q2K03W                                            | PANASONIC                            | EVQ-Q2K03W                   | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                                                 |
| T1                                           | -         | 1     | TGM-040P3RL                                           | HALO ELECTRONICS INC                 | TGM-040P3RL                  | TRANSFORMER; SMT; 1:1:1.3:1.3; PCMCIA DC/DC CONVERTER ; CODE: T1433+2C; PKG.                                                                               |
| U1                                           | -         | 1     | MAX17301G+                                            | MAXIM                                | MAX17301G+                   | EVKIT PART - IC; BC26; MAX17301G+; PKG. OUTLINE DRAWING: 21-0137; PKG. LAND PATTERN: 90-0063                                                               |
| U2                                           | -         | 1     | FT2232HL                                              | FUTURE TECHNOLOGY DEVICES INTL LTD.  | FT2232HL                     | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                            |
| U3                                           | -         | 1     | MAX14937AWE+                                          | MAXIM                                | MAX14937AWE+                 | IC; ISO; TWO CHANNEL; 5KVRMS I2C ISOLATOR; WSOIC16 POWER                                                                                                   |
| U4                                           | -         | 1     | MAX13253ATB+                                          | MAXIM                                | MAX13253ATB+                 | IC; DRV; 1A SPREAD-SPECTRUM; PUSH-PULL; TRANSFORMER DRIVER FOR ISOLATED SUPPLIES; TDFN10-EP                                                                |
| U5, U6                                       | -         | 2     | MAX8511EXK33+                                         | MAXIM                                | MAX8511EXK33                 | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC                                                         |
| Y1                                           | -         | 1 1   | 7M-12.000MAAJ MAX17301GSOLDERDOWN                     | TXC CORPORATION MAXIM                | 12MHZ PCB                    | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM PCB:MAX17301GSOLDERDOWN                                                                                      |
| PCB                                          | -         |       | GRM1555C1E102JA01D;                                   | MURATA;TDK                           |                              |                                                                                                                                                            |
| C16-C18                                      | DNP       | 0     | C1005C0G1E102J050BA                                   |                                      | 1000PF                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                 |
| F1                                           | DNP       | 0     | SFR-0405A                                             | DEXERIALS                            | SFR-0405A                    | IC; PROT; SELF CONTROL PROTECTOR; SMT ;                                                                                                                    |
| J3                                           | DNP       | 0     | PBC04DAAN                                             | SULLINS ELECTRONICS CORP.            | PBC04DAAN                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                                                           |
| Q1 Q2                                        | DNP DNP   | 0 0   | FCAB21490L 2N7002                                     | PANASONIC NXP                        | FCAB21490L 2N7002            | TRAN; NCH; CSP10; PD-(0.54W); IGSS-(0.000010A); VGS-(+/-8V); TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A); V-(60V)                     |
| Q3                                           | DNP       | 0     | FDPC4044                                              | ON SEMICONDUCTOR                     | FDPC4044                     | TRAN; COMMON DRAIN N-CHANNEL POWERTRENCH MOSFET; NCH; POWERCLIP-33; PD-(2.7W); I-(27A); V-(30V)                                                            |
| Q5, Q6                                       | DNP       | 0     | NDS8410A                                              | FAIRCHILD SEMICONDUCTOR              | NDS8410                      | MOSFET, N-CHANNEL, SO-8, PD=2.5W, ID=+/-10A, VDSS=30V, VGS=-20V, VSD=0.8V, RDS(ON)=0.013Ohm, -55degC TO +150degC                                           |
| R7, R24 R3, R4, R50                          | DNP DNP   | 0 0   | RC0805JR-070RL N/A                                    | YAGEO PHYCOMP N/A                    | 0 OPEN                       | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM RESISTOR; 0402; OPEN; FORMFACTOR                                                                     |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

## MAX173xxG EV Kit BOM U1 Ordering Guide

| EV KIT PART NUMBER   | U1 ORDERING INFORMATION   |
|----------------------|---------------------------|
| MAX17301GEVKIT#      | MAX17301G+                |
| MAX17311GEVKIT#      | MAX17311G+                |
| MAX17302GEVKIT#      | MAX17302G+                |
| MAX17312GEVKIT#      | MAX17312G+                |
| MAX17303GEVKIT#      | MAX17303G+                |
| MAX17313GEVKIT#      | MAX17313G+                |

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173xxG EV Kit Schematic

<!-- image -->

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## MAX173xxG EV Kit PCB Layouts

MAX173xxG EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX173xxG EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

MAX173xxG EV Kit PCB Layout-Layer 2

<!-- image -->

MAX173xxG EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## MAX173xxG EV Kit PCB Layouts (continued)

MAX173xxG EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX173xxG EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173xxX EV Kit Bill of Materials

| REF_DES                                  | DNI/DNP   | QTY          | MFG PART #                                            | MANUFACTURER                             | VALUE                                   | DESCRIPTION                                                                                                                                     |
|------------------------------------------|-----------|--------------|-------------------------------------------------------|------------------------------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| ALRT, SCL, SCL1, SDA, SDA1               | -         | 5            | 5002                                                  | KEYSTONE                                 | N/A                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                           |
| C1, C4, C7, C26                          | -         | 4            | C0402C105K8PAC                                        | KEMET                                    | 1UF                                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                         |
| C2, C12-C15, C21, C22, C24, C25, C28-C38 | -         | 20           | GRM155R71E104KE14                                     | MURATA                                   | 0.1UF                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                    |
| C3                                       | -         | 1            | GRM155R61A474KE15                                     | MURATA                                   | 0.47UF                                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R-                                                     |
| C5                                       | -         | 1            | C0402C103K5RAC;GRM155R71H103KA8 8;C1005X7R1H103K050BE | KEMET;MURATA;TDK                         | 0.01UF                                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                     |
| C6, C9                                   | -         | 2            | GRM155R71A104JA01                                     | MURATA                                   | 0.1UF                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                       |
| C16-C18                                  | -         | 3            | GRM1555C1E102JA01D;                                   | MURATA;TDK                               | 1000PF                                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                      |
| C20, C23, C27                            | -         | 3            | C1005C0G1E102J050BA GRM155R61A475MEAA                 | MURATA                                   | 4.7UF                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                       |
| C39, C40                                 | -         | 2            | C0402C0G500270JNP; GRM1555C1H270JA01                  | VENKEL LTD.;MURATA                       | 27PF                                    | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                        |
| D1                                       | -         | 1            | LTST-C190CKT                                          | LITE-ON ELECTRONICS INC.                 | LTST-C190CKT                            | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85                                                                      |
| D2-D4, D8                                | -         | 4            | BZX384-C5V6                                           | NXP                                      | 5.6V                                    | DEGC DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150 DEGC                                                                   |
| D5, D6 D7                                | - -       | 2 1          | MBR0520 RB520G-30                                     | MICRO COMMERCIAL COMPONENTS GENERIC PART | MBR0520 RB520G-30                       | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                                          |
| DGND, GND                                |           | 2            | 5011                                                  |                                          | N/A                                     | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMT (SOD-723); PIV=30V; IF=0.1A BRONZE                                                                      |
|                                          | -         |              |                                                       | KEYSTONE                                 |                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR WIRE SILVER PLATE FINISH;                                |
| DS1, DS2 J1                              | - -       | 2 1          | LTST-C190GKT 10118193-0001LF                          | LITE-ON ELECTRONICS INC. FCI CONNECT     | LTST-C190GKT 10118193-0001LF CONNECTOR; | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS |
|                                          |           |              |                                                       | SULLINS ELECTRONICS CORP.                |                                         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125                                                          |
| J2                                       | -         | 1            | PBC02SAAN                                             |                                          | PBC02SAAN                               | DEGC; INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                                    |
| L1-L3 MISC1                              | - -       | 3 1          | BLM18AG601SN1 AK67421-1-R                             | MURATA ASSMANN                           | 600 AK67421-1-R                         | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS                                      |
| R1                                       | -         | 1            | RC0402JR-070RL; CR0402-16W-000RJT                     | YAGEO PHYCOMP;VENKEL                     | 0                                       | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                           |
|                                          |           |              |                                                       | LTD.                                     | 27                                      | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                         |
| R2, R9 R5                                | - -       | 2 1          | ERJ-2RKF27R0X;RC0402FR-0727RL KRL1220E-M-R010-F       | PANASONIC;YAGEO PHICOMP SUSUMU CO LTD.   | 0.01                                    | RES; SMT (0805); 0.01; 1%; +/-50PPM/DEGC; 0.5W                                                                                                  |
| R6, R14-R16,                             | -         | 5            | CRCW04021K00FK; RC0402FR-071KL                        | VISHAY DALE;YAGEO PHICOMP                | 1K                                      | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                             |
| R34                                      |           |              |                                                       | VISHAY DALE;YAGEO                        | 150                                     | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                        |
| R8, R12, R13 R11                         | - -       | 3            | CRCW0402150RFK; 9C04021A1500FL CR0402-16W-3650FT      | VENKEL LTD.                              | 365                                     | RESISTOR; 0402; 365 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                         |
| R20                                      | -         | 1 1          | CRCW040210K0JN                                        | VISHAY DALE                              | 10K                                     | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                                         |
| R23, R26                                 | -         | 2            | RC0805JR-070RL                                        | YAGEO PHYCOMP                            | 0                                       | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                                           |
| R33                                      | -         | 1            | CRCW040212K0FK                                        | VISHAY DALE                              | 12K                                     | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                        |
| R35, R36, R38, R39                       | -         | 4            | ERJ-2GE0R00X                                          | PANASONIC                                | 0                                       | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                            |
| R37                                      | -         | 1            | CRCW04021M00FK                                        | VISHAY DALE                              | 1M                                      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                                             |
| R40, R41                                 | -         | 2            | CRCW04024K70FK                                        | VISHAY DALE                              | 4.7K                                    | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                       |
| R42, R43                                 | -         | 2            | ERJ-2RKF1001X                                         | PANASONIC                                | 1K                                      | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                           |
| R46, R47                                 |           | 2            | CRCW0402470RFK                                        | VISHAY DALE                              | 470 10K                                 | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                     |
| RT1                                      | - -       | 1            | NCP15XH103F03RC                                       | MURATA                                   | EVQ-Q2K03W                              |                                                                                                                                                 |
| S1                                       | -         | 1 EVQ-Q2K03W |                                                       | PANASONIC                                |                                         | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                                      |
| T1                                       | -         | 1            | TGM-040P3RL                                           | HALO ELECTRONICS INC                     | TGM-040P3RL                             | TRANSFORMER; SMT; 1:1:1.3:1.3; PCMCIA DC/DC CONVERTER ;                                                                                         |
| U1                                       | -         | 1            | MAX17301X+                                            | MAXIM                                    | MAX17301X+                              | EVKIT PART - IC; BC26; MAX17301X+; PACKAGE OUTLINE DRAWING: 21-100256; PACKAGE CODE: W151H2+1; 0.50MM PITCH                                     |
| U2                                       | -         | 1            | FT2232HL                                              | FUTURE TECHNOLOGY DEVICES INTL LTD.      | FT2232HL                                | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                 |
| U3                                       | -         | 1            | MAX14937AWE+                                          | MAXIM                                    | MAX14937AWE+                            | IC; ISO; TWO CHANNEL; 5KVRMS I2C ISOLATOR; WSOIC16                                                                                              |
| U4                                       | -         | 1            | MAX13253ATB+                                          | MAXIM                                    | MAX13253ATB+                            | IC; DRV; 1A SPREAD-SPECTRUM; PUSH-PULL; TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLIES; TDFN10-EP                                               |
| U5, U6                                   | -         | 2            | MAX8511EXK33+                                         | MAXIM                                    | MAX8511EXK33                            | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC +/-30PPM                                     |
| Y1 PCB                                   | - -       | 1            | 7M-12.000MAAJ MAX17301XSOLDERDOWN                     | TXC CORPORATION MAXIM                    | 12MHZ PCB                               | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; PCB:MAX17301XSOLDERDOWN                                                                                    |
|                                          |           | 1            |                                                       |                                          |                                         |                                                                                                                                                 |
| F1                                       | DNP       | 0            | SFR-0405A                                             | DEXERIALS CORP.                          | SFR-0405A PBC04DAAN                     | IC; PROT; SELF CONTROL PROTECTOR; SMT ; DEGC TO +125 DEGC                                                                                       |
| J3 Q1                                    | DNP DNP   | 0            | PBC04DAAN FCAB21490L                                  | SULLINS ELECTRONICS PANASONIC            | FCAB21490L                              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 TRAN; NCH; CSP10; PD-(0.54W); IGSS-(0.000010A); VGS-(+/-8V);                     |
| Q2                                       | DNP       | 0 0          | 2N7002                                                | NXP                                      | 2N7002                                  | TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A);                                                                               |
| Q3                                       | DNP       | 0            | FDPC4044                                              | ON SEMICONDUCTOR                         | FDPC4044                                | V-(60V) TRAN; COMMONDRAIN N-CHANNEL POWERTRENCH MOSFET; NCH; POWERCLIP-33; PD-(2.7W); I-(27A); V-                                               |
|                                          |           |              |                                                       |                                          |                                         | (30V) RDS(ON)=0.013Ohm, -                                                                                                                       |
| Q5, Q6 R7, R24                           | DNP       | 0            | NDS8410A                                              | FAIRCHILD SEMICONDUCTOR                  | NDS8410                                 | MOSFET, N-CHANNEL, SO-8, PD=2.5W, ID=+/-10A, VDSS=30V, VGS=-20V, VSD=0.8V, 55degC TO +150degC                                                   |
| R3, R4, R50                              | DNP DNP   | 0 0          | RC0805JR-070RL N/A                                    | YAGEO PHYCOMP N/A                        | 0 OPEN                                  | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM RESISTOR; 0402; OPEN; FORMFACTOR                                                          |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173xxX EV Kit BOM U1 Ordering Guide

| EV KIT PART NUMBER   | U1 ORDERING INFORMATION   |
|----------------------|---------------------------|
| MAX17301XEVKIT#      | MAX17301X+                |
| MAX17311XEVKIT#      | MAX17311X+                |
| MAX17302XEVKIT#      | MAX17302X+                |
| MAX17312XEVKIT#      | MAX17312X+                |
| MAX17303XEVKIT#      | MAX17303X+                |
| MAX17313XEVKIT#      | MAX17313X+                |

│

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173xxX EV Kit Schematic

<!-- image -->

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## MAX173xxX EV Kit PCB Layouts

MAX173xxX EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX173xxX EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

MAX173xxX EV Kit PCB Layout-Layer 2

<!-- image -->

MAX173xxX EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## MAX173xxX EV Kit PCB Layouts (continued)

MAX173xxX EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX173xxX EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173x0G EV Kit Bill of Materials

| REF_DES                                      | DNI/DNP   |   QTY | MFG PART #                                                              | MANUFACTURER                                     | DESCRIPTION                                                                                                             |
|----------------------------------------------|-----------|-------|-------------------------------------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| ALRT, SCL, SCL1, SDA, SDA1                   | -         |     5 | 5002                                                                    | KEYSTONE                                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR                                       |
| BUMP1-BUMP4                                  | -         |     4 | SJ-5003(BLACK)                                                          | 3M ELECTRONIC SOLUTIONS DIVISION                 | BRONZE WIRE SILVER; BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER                    |
| C1, C4, C7, C26                              | -         |     4 | C0402C105K8PAC;CC0402K RX5R6BB105                                       | KEMET;YAGEO                                      | POLYURETHANE CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                    |
| C2, C6, C12-C15, C21, C22, C24, C25, C28-C38 | -         |    21 | GRM155R71E104KE14;C1005 X7R1E104K050BB;TMK105B7 104KVH;CGJ2B3X7R1E104K0 | MURATA;TDK;TAIYO YUDEN;TDK                       | CAP; SMT (0402); 0.1UF; 0.1; 25V; X7R; CERAMIC CHIP                                                                     |
| C3                                           | -         |     1 | 50BB LMK105B7474KV;GRM155R7 1A474KE01                                   | PANASONIC;MURATA                                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |
| C5                                           | -         |     1 | C0402C103K5RAC;GRM155R 71H103KA88;C1005X7R1H10 3K050BE;CL05B103KB5NNN;  | KEMET;MURATA;TDK;SAMSUN G ELECTRONIC;TAIYO YUDEN | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |
| C9                                           | -         |     1 | UMK105B7103KV GRM155R71A104JA01                                         | MURATA                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
| C20, C23, C27                                | -         |     3 | ZRB15XR61A475ME01; CL05A475MP5NRN;GRM155R 61A475MEAA;C1005X5R1A47       | MURATA;SAMSUNG;MURATA;T DK                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |
| C39, C40                                     | -         |     2 | C0402C0G500270JNP; GRM1555C1H270JA01                                    | VENKEL LTD.;MURATA                               | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                |
| D2-D4, D8                                    | -         |     4 | BZX384-C5V6                                                             | NXP                                              | DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150 DEGC                                                |
| D5, D6                                       | -         |     2 | MBR0520                                                                 | MICRO COMMERCIAL COMPONENTS                      | DIODE; SCH; SCHOTTKYRECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                   |
| D7                                           | -         |     1 | RB520G-30                                                               | GENERIC PART                                     | DIODE; SCH; SCHOTTKYBARRIER DIODE; SMT (SOD-723); PIV=30V; IF=0.1A                                                      |
| D9                                           | -         |     1 | RB751S40                                                                | FAIRCHILD SEMICONDUCTOR                          | DIODE; SCH; SMT (SOD-523F); PIV=40V; IF=0.03A                                                                           |
| DGND, GND                                    | -         |     2 | 5011                                                                    | KEYSTONE                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| DS1, DS2                                     | -         |     2 | LTST-C190GKT                                                            | LITE-ON ELECTRONICS INC.                         | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                      |
| DS3                                          | -         |     1 | LTST-C190CKT                                                            | LITE-ON ELECTRONICS INC.                         | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |
| J1                                           | -         |     1 | 10118193-0001LF                                                         | FCICONNECT                                       | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |
| J2                                           | -         |     1 | PBC02SAAN                                                               | SULLINS ELECTRONICS CORP.                        | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                            |
| J3                                           | -         |     1 | PEC04DBAN                                                               | SULLINS CONNECTOR SOLUTIONS                      | CONNECTOR; MALE; THROUGH HOLE; 0.100IN CC; BREAKAWAYHEADER; RIGHT ANGLE; 8PINS                                          |
| L1-L3                                        | -         |     3 | BLM18AG601SN1                                                           | MURATA                                           | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                  |
| MISC1                                        | -         |     1 | AK67421-1-R                                                             | ASSMANN                                          | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS              |
| Q3                                           | -         |     1 | FDPC4044                                                                | ON SEMICONDUCTOR                                 | TRAN; COMMON DRAIN N-CHANNEL POWERTRENCH MOSFET; NCH; POWERCLIP-33; PD- (2.7W); I-(27A); V-(30V)                        |
| Q4                                           | -         |     1 | BSS223PW                                                                | INFINEON                                         | TRAN; OPTIMOS SMALL-SIGNAL-TRANSISTOR; PCH; SOT323-3; PD-(0.25W); I-(-0.39A); V-(-20V)                                  |
| R1                                           | -         |     1 | ERJ-2RKF10R0                                                            | PANASONIC                                        | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   |
| R2, R9                                       | -         |     2 | ERJ-2RKF27R0X;RC0402FR- 0727RL;CRCW040227R0FK                           | PANASONIC;YAGEO PHICOMP;VISHAY DALE              | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                 |
| R5                                           | -         |     1 | KRL1220E-M-R010-F                                                       | SUSUMU CO LTD.                                   | RES; SMT (0805); 0.01; 1%; +/-50PPM/DEGC; 0.5W                                                                          |
| R6, R14-R16, R34                             | -         |     5 | CRCW04021K00FK; RC0402FR- 071KL;MCR01MZPF1001                           | VISHAY DALE;YAGEO PHICOMP;ROHM SEMI              | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                     |
| R7                                           | -         |     1 | ERJ-2RKF1004                                                            | PANASONIC                                        | RESISTOR; 0402; 1M OHM;1%; 100PPM; 0.10W; THICK FILM                                                                    |
| R8, R12, R13                                 | -         |     3 | CRCW0402150RFK;                                                         | VISHAY DALE;YAGEO                                | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                |
| R10                                          | -         |     1 | 9C04021A1500FL CR0402-16W-3650FT                                        | VENKEL LTD.                                      | RESISTOR; 0402; 365 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                 |
| R20                                          | -         |     1 | CRCW040210K0JN                                                          | VISHAY DALE                                      | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                 |
| R26                                          | -         |     1 | RC0805JR-070RL                                                          | YAGEO PHYCOMP                                    | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                   |
| R33                                          | -         |     1 | CRCW040212K0FK;MCR01M                                                   | VISHAY DALE;ROHM                                 | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
| R35, R36, R38, R39                           | -         |     4 | ZPF1202 ERJ-2GE0R00                                                     | SEMICONDUCTOR PANASONIC                          | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                    |
| R37                                          | -         |     1 | CRCW04021M00FK                                                          | VISHAY DALE                                      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                     |
| R40, R41                                     | -         |     2 | CRCW04024K70FK;MCR01M ZPF4701                                           | VISHAY DALE;ROHM SEMICONDUCTOR                   | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               |
| R42, R43                                     | -         |     2 | PNM0402E5001BS                                                          | VISHAY DALE                                      | RESISTOR; 0402; 5K OHM; 0.1%; 25PPM; 0.05W; THIN FILM                                                                   |
| R46, R47                                     | -         |     2 | CRCW0402470RFK                                                          | VISHAY DALE                                      | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
| RT1                                          | -         |     1 | NCP15XH103F03                                                           | MURATA                                           | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                      |

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173x0G EV Kit Bill of Materials (continued)

| REF_DES   | DNI/DNP   |   QTY | MFG PART #                             | MANUFACTURER                        | DESCRIPTION                                                                                                                                                                                                                              |
|-----------|-----------|-------|----------------------------------------|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| S1, S2    | -         |     2 | EVQ-Q2K03W                             | PANASONIC                           | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                                                                                                                               |
| T1        | -         |     1 | TGM-040P3RL                            | HALO ELECTRONICS INC                | TRANSFORMER; SMT; 1:1:1.3:1.3; PCMCIA DC/DC CONVERTER ;                                                                                                                                                                                  |
| U1        | -         |     1 | MAX17300G+                             | MAXIM                               | EVKIT PART - IC; MAX17300G+; 1-CELL MODELGAUGE M5 EZ FUEL GAUGE WITH PROTECTOR; INTERNAL SELF-DISCHARGE DETECTION AND SHA-256 AUTHENTICATION; PACKAGE OUTLINE DRAWING: 21-0137; PACKAGE CODE: T1433+2C; LAND PATTERN: 90-0063; TDFN14-EP |
| U2        | -         |     1 | FT2232HL                               | FUTURE TECHNOLOGY DEVICES INTL LTD. | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                                                                          |
| U3        | -         |     1 | MAX14937AWE+                           | MAXIM                               | IC; ISO;TWO CHANNEL; 5KVRMS I2C ISOLATOR; WSOIC16                                                                                                                                                                                        |
| U4        | -         |     1 | MAX13253ATB+                           | MAXIM                               | IC; DRV; 1A SPREAD-SPECTRUM; PUSH-PULL; TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLIES; TDFN10-EP                                                                                                                                        |
| U5, U6    | -         |     2 | MAX8511EXK33+                          | MAXIM                               | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5                                                                                                                                                              |
| VUSB      | -         |     1 | 5000                                   | KEYSTONE                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                         |
| Y1        | -         |     1 | 7M-12.000MAAJ                          | TXC CORPORATION                     | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM                                                                                                                                                                                            |
| PCB       | -         |     1 | MAX1730017310G                         | MAXIM                               | PCB:MAX1730017310G                                                                                                                                                                                                                       |
| C16-C18   | DNP       |     0 | GRM1555C1E102JA01;C1005 C0G1E102J050BA | MURATA;TDK                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                                                               |
| F1        | DNP       |     0 | SFR-0405A                              | DEXERIALS                           | IC; PROT; SELF CONTROL PROTECTOR; SMT ;                                                                                                                                                                                                  |
| Q2        | DNP       |     0 | 2N7002                                 | NXP                                 | TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A); V-(60V)                                                                                                                                                                |
| Q5, Q6    | DNP       |     0 | NDS8410A                               | FAIRCHILD SEMICONDUCTOR             | MOSFET, N-CHANNEL, SO-8, PD=2.5W, ID=+/-10A, VDSS=30V, VGS=-20V, VSD=0.8V, RDS(ON)=0.013Ohm, -55degC TO +150degC                                                                                                                         |
| R24       | DNP       |     0 | RC0805JR-070RL                         | YAGEO PHYCOMP                       | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                                                                                                                                    |
| R50       | DNP       |     0 | N/A                                    | N/A                                 | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                                                         |
|           |           |   105 |                                        |                                     |                                                                                                                                                                                                                                          |

## MAX173x0G EV Kit BOM U1 Ordering Guide

| EV KIT PART NUMBER   | U1 ORDERING INFORMATION   |
|----------------------|---------------------------|
| MAX17300GEVKIT#      | MAX17300G+                |
| MAX17310GEVKIT#      | MAX17310G+                |

│

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173x0G EV Kit Schematic

<!-- image -->

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## MAX173x0G EV Kit PCB Layout

MAX173x0G EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

MAX173x0G EV Kit Layout-Top Layer

<!-- image -->

MAX173x0G EV Kit Layout-Layer 2

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173x0G EV Kit PCB Layout (continued)

MAX17300G EV Kit Layout-Layer 3

<!-- image -->

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

MAX173x0G EV Kit Layout-Bottom Layer

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173x0X EV Kit Bill of Materials

| REF_DES                                  | DNI/DNP   |   QTY | MFG PART #                                            | MANUFACTURER                | VALUE                                                       | DESCRIPTION                                                                                                             |
|------------------------------------------|-----------|-------|-------------------------------------------------------|-----------------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| ALRT, SCL, SCL1, SDA, SDA1               | -         |     5 | 5002                                                  | KEYSTONE                    | N/A                                                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |
| C1, C4, C7, C26                          | -         |     4 | C0402C105K8PAC                                        | KEMET                       | 1UF                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |
| C2, C12-C15, C21, C22, C24, C25, C28-C38 | -         |    20 | GRM155R71E104KE14                                     | MURATA                      | 0.1UF                                                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R            |
| C3                                       | -         |     1 | GRM155R61A474KE15                                     | MURATA                      | 0.47UF                                                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R-                             |
| C5                                       | -         |     1 | C0402C103K5RAC;GRM155R71H103KA88; C1005X7R1H103K050BE | KEMET;MURATA;TDK            | 0.01UF                                                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |
| C6, C9                                   | -         |     2 | GRM155R71A104JA01                                     | MURATA                      | 0.1UF                                                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
| C16-C18                                  | -         |     3 | GRM1555C1E102JA01D; C1005C0G1E102J050BA               | MURATA;TDK                  | 1000PF                                                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                              |
| C20, C23, C27                            | -         |     3 | GRM155R61A475MEAA                                     | MURATA                      | 4.7UF                                                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |
| C39, C40                                 | -         |     2 | C0402C0G500270JNP; GRM1555C1H270JA01                  | VENKEL LTD.;MURATA          | 27PF                                                        | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                |
| D1                                       | -         |     1 | LTST-C190CKT                                          | LITE-ON ELECTRONICS INC.    | LTST-C190CKT                                                | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |
| D2-D4, D8                                | -         |     4 | BZX384-C5V6                                           | NXP                         | 5.6V                                                        | DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150 DEGC                                                |
| D5, D6                                   | -         |     2 | MBR0520                                               | MICRO COMMERCIAL COMPONENTS | MBR0520                                                     | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                  |
| D7                                       | -         |     1 | RB520G-30                                             | GENERIC PART                | RB520G-30                                                   | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMT (SOD-723); PIV=30V; IF=0.1A                                                     |
| DGND, GND                                | -         |     2 |                                                       | 5011 KEYSTONE               | N/A                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| DS1, DS2                                 | -         |     2 | LTST-C190GKT                                          | LITE-ON ELECTRONICS INC.    | LTST-C190GKT                                                | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                      |
| J1                                       | -         |     1 | 10118193-0001LF                                       | FCI CONNECT                 | 10118193-0001LF                                             | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |
| J2                                       | -         |     1 | PBC02SAAN                                             | SULLINS ELECTRONICS CORP.   | PBC02SAAN                                                   | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                            |
| L1-L3                                    | -         |     3 | BLM18AG601SN1                                         | MURATA                      | 600 INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A  | 600 INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                              |
| MISC1                                    | -         |     1 | AK67421-1-R                                           | ASSMANN                     | AK67421-1-R                                                 | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS              |
| R1                                       | -         |     1 | RC0402JR-070RL; CR0402-16W-000RJT                     | YAGEO PHYCOMP;VENKEL LTD.   | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM     | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                 |
| R2, R9                                   | -         |     2 | ERJ-2RKF27R0X;RC0402FR-0727RL                         | PANASONIC;YAGEO PHICOMP     | 27 RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM  | 27 RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                              |
| R5                                       | -         |     1 | KRL1220E-M-R010-F                                     | SUSUMU CO LTD.              | 0.01 RES; SMT (0805); 0.01; 1%; +/-50PPM/DEGC; 0.5W         | 0.01 RES; SMT (0805); 0.01; 1%; +/-50PPM/DEGC; 0.5W                                                                     |
| R6, R14-R16, R34                         | -         |     5 | CRCW04021K00FK; RC0402FR-071KL                        | VISHAY DALE;YAGEO PHICOMP   | 1K RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM      | 1K RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                  |
| R8, R12, R13                             | -         |     3 | CRCW0402150RFK; 9C04021A1500FL                        | VISHAY DALE;YAGEO           | 150 100PPM;                                                 | RESISTOR; 0402; 150 OHM; 1%; 0.0625W; THICK FILM                                                                        |
| R11                                      | -         |     1 | CR0402-16W-3650FT                                     | VENKEL LTD.                 | 365 RESISTOR; 0402; 365 OHM; 1%; 100PPM; 0.063W; THICK FILM | 365 RESISTOR; 0402; 365 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                             |
| R20                                      | -         |     1 | CRCW040210K0JN                                        | VISHAY DALE                 | 10K                                                         | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                 |
| R23, R26                                 | -         |     2 | RC0805JR-070RL                                        | YAGEO PHYCOMP               |                                                             | 0 RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                 |
| R33                                      | -         |     1 | CRCW040212K0FK                                        | VISHAY DALE                 | 12K                                                         | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                |
| R35, R36, R38, R39                       | -         |     4 | ERJ-2GE0R00X                                          | PANASONIC                   |                                                             | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                  |

## MAX173x0X EV Kit BOM U1 Ordering Guide

| EV KIT PART NUMBER   | U1 ORDERING INFORMATION   |
|----------------------|---------------------------|
| MAX17300XEVKIT#      | MAX17300X+                |
| MAX17310XEVKIT#      | MAX17310X+                |

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173x0X EV Kit Schematic

<!-- image -->

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## MAX173x0X EV Kit PCB Layout

MAX173x0X EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX17300-MAX17303/ MAX17310-MAX17313

MAX173x0X EV Kit Layout-Top Layer

<!-- image -->

MAX173x0X EV Kit Layout-Layer 2

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG Evaluation Kits

## MAX173x0G EV Kit PCB Layout (continued)

MAX173x0X EV Kit Layout-Layer 3

<!-- image -->

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313

MAX173x0X EV Kit Layout-Bottom Layer

<!-- image -->

│

## MAX1730xX/MAX1730xG/ MAX1731xX/MAX1731xG

## Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                | PAGES CHANGED              |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
|                 0 | 3/19            | Initial release                                                                                                                                                                                                                                                                                                                                                                            | -                          |
|                 1 | 6/19            | Updated Ordering Information table                                                                                                                                                                                                                                                                                                                                                         | 20                         |
|                 2 | 11/20           | Updated the MAX173xx EV Kit FIles table, Figures 2 to 12, Figure 14, Figures 16 to 18, Configuration Wizard section, Ordering Information table, MAX173xxG EV Kit BOM U1 Ordering Guide table, and MAX173xxX EV Kit BOM U1 Ordering Guide table; added the MAX17300/MAX17310 parts, Prepare for Shipping section, and Figure 15                                                            | 1, 3-12, 14-18, 22, 23, 28 |
|                 3 | 2/21            | Updated Ordering Information table                                                                                                                                                                                                                                                                                                                                                         | 22                         |
|                 4 | 3/21            | Added MAX173x0G EV Kit BOM , MAX173x0G EV Kit BOM U1 Ordering Guide table, MAX173x0G EV Kit Schematic , MAX173x0G EV Kit PCB Layout section, MAX173x0X EV Kit BOM , MAX173x0X EV Kit BOM U1 Ordering Guide table, MAX173x0X EV Kit Schematic , MAX173x0X EV Kit PCB Layout section, updated MAX173xxG EV Kit BOM U1 Ordering Guide table, and MAX173xxX EV Kit BOM U1 Ordering Guide table | 23, 28, 32-40              |
|                 5 | 8/21            | Updated Ordering Information table                                                                                                                                                                                                                                                                                                                                                         | 22                         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17300-MAX17303/

MAX17310-MAX17313