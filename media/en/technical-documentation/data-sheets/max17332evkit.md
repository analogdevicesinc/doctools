<!-- lastmod 2023-03-07 -->
<!-- image -->

Evaluates: MAX17332

## General Description

The MAX17332 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that evaluates the standalone charger, fuel gauge IC with protector and optional SHA-256  authentication  for  1  cell  lithium-ion/polymer batteries.

The MAX17332 EV kits include the IC evaluation board with  integrated  I 2 C  interface  and  USB  micro-B  cable. Windows ®  based graphical user interface (GUI) software is available for use with the EV kit and can be downloaded from https://www.maximintegrated.com/MAX17332 product page under the Design Resources tab. Windows 7 or newer Windows operating system is required to use with the EV kit GUI software.

## MAX17332 EV Kit Files

| FILE                      | DESCRIPTION                             |
|---------------------------|-----------------------------------------|
| MAX17332EVKitGUISetup.msi | Installs all EV kit files on a computer |

## MAX17332 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

## MAX17332 Evaluation Kit

## Benefits and Features

- ModelGauge m5 Algorithm
- Charges, Monitors, and Protects a 1S Battery
- Full Protection Solution On-Board for Evaluation
- Battery  Voltage  (V BATT )  Range  of  +2.16V  to  +4.9V with Default Hardware
- Input Voltage up to 5.7V
- Default  Current  Range  -5A  (Discharge)  to  +2.56A (Charge) with 10mΩ Sense Resistor (Higher Currents can  be  Supported  by  Changing  to  a  Smaller  Sense Resistor)
- Two Thermistor Measurements
- On-Board  I 2 C  Communication  Interface  with  Built-In MAXUSB Interface
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

319-100968; Rev 0; 1/23

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 202 3 Analog  Devices,  Inc.  All  rights  reserved. 202 3 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX17332 Evaluation Kit

## Quick Start

## Required Equipment

- MAX17332 Evaluation kit
- Lithium-ion/Polymer cell
- Voltage source/Power supply
- Load circuit
- USB Micro B cable
- PC with Windows 7 or newer windows operating system and USB port

## Procedure

Follow  the  steps  to  install  the  EV  kit  software,  make required  hardware  connections,  and  start  operation  of the  kits.  The  EV  kit  software  can  be  launched  without the  hardware  attached.  It  automatically  recognizes  the hardware  when  connections  are  made.  Note  that  after communication is established with the IC, it must be configured correctly for proper operation.

- 1) Visit https://www.maximintegrated.com/MAX17332 page under the Design Resources tab to download the latest version of the MAX17332 EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 2) Install the EV kit software on a computer by running the  MAX17332EVKitGUISetup.msi  program  inside the  temporary  folder. The  program  files  are  copied, and icons are created in the Windows Start menu.

Evaluates: MAX17332

The software requires Windows 7 or a newer operating system. The software requires the .NET Framework 4.5 or later. If you are connected to the internet, Windows automatically updates the .NET framework as needed.

- 3) Follow  the prompts  to  complete  the  installation. The  evaluation  software  can  be  uninstalled  in  the Add/Remove Programs tool in the Control Panel .
- 4) The EV kit software launches automatically after installation or alternatively, it can be launched by clicking on its icon in the Windows Start menu.
- 5) Make  connections  to  the  EV  kit  board  based  on Figure  1.  The  cell  connects  between  the  BATTN/ BATTP pads. The load or charger circuit can be connected  between  the  SYSN  and  SYSP  pads  at  this time as well.
- 6) Connect the EV kit to a USB port on the PC using the USB cable. Press the PKWK button to wake up the MAX17332. The GUI software establishes communication automatically.
- 7) At  startup,  the  IC  defaults  to  EZ  Configuration.  If  a custom  .INI  file  for  the  application  is  available,  it should be loaded at this time.
- 8) To begin charging, connect a source at SYSP/SYSN. The  MAX17332  regulates  the  voltage  and  current based  on  the  settings  in  the Charging  Configura -tion .  Connect a resistor or an E-Load to begin discharging the battery.

Figure 1. MAX17332 Board Connections

<!-- image -->

│

## Detailed Description of Hardware

The MAX17332 EV kit board provides a variety of features that  highlight  the  functionality  of  the  IC. The  following  sections detail the most important aspects of the EV kit board.

## Communication Connections

The USB interface on the PCB establishes I 2 C communication between the IC and the software GUI interface. When  developing  application  code  separately,  connections to the communication lines can be made directly to the  board  SDA  and  SCL  pins. The  user  must  apply  the appropriate external pullup resistors to the communication lines when not using the built-in MAXUSB interface.

## Wake buttons

When the MAX17332 is first connected to a cell, the IC is in a shutdown state. To wake the device, either apply a voltage source across SYSN and SYSP, or if no source or  load  is  connected  but  a  cell  is  connected,  press  the PKWK button. When the Pushbutton function is used, the ALRTWK button can be used to pull down the ALRT pin to wake the IC.

## External Thermistor

The  MAX17332  can  be  configured  to  use  temperature measurements  from  one  or  two  external  thermistors. All EV kit boards come with two thermistors installed as surface mount components RT1 and RT2. If the application requires direct thermal contact to the cells, RT1 can be removed and replaced with a leaded thermistor connected between the RT+/RT- solder pads. RT2 is placed close  to  the  FET  Q3  to  monitor  the  FET  temperature. J2  must  be  selected  to  TH2  setting  to  use  the  second thermistor to measure the FET temperature, or J2 can be connected to PFAIL.

## Sense Resistor Options

All  EV  kit  boards  are  shipped  with  a  10mΩ  0805-size chip  sense  resistor  installed.  Oversized  land  pattern pads allow for different size sense resistors to be used if desired.

## Evaluates: MAX17332

## External I 2 C Interface

J3 is an unpopulated header that can be used to interface the  MAX17332 USB interface  to  a  custom  board,  or  to interface a custom I 2 C master to the MAX17332 on the EV kit. Cut the traces between the two rows of headers to separate the MAXUSB interface from the MAX17332. To interface to a MAX17332 IC on another PCB using the MAXUSB and EV kit GUI, use the pins on the pin 1 side. To connect to a different I 2 C master, use the pins on the GND/SCL/SDA silkscreen side. An external pullup must be  supplied  on  SDA  and  SCL  when  interfacing  with  a different master.

## Detailed Description of Software

The MAX17332 EV kit software gives the user complete control of all functions of the MAX17332, as well as the ability to load a custom model into the IC. Separate control tabs allow the user access to view real-time updates of  all  monitored parameters. The software also incorporates a data-logging feature to monitor a cell over time.

After  the  installation  is  complete,  open  the Program Files  (x86)\Maxim  Integrated\MAX17332 folder  and run MAX17332.exe or select it from the Program menu. Figure  2  shows  a  splash  screen  containing  information about  the  EV  kit  that  appears  as  the  program  is  being loaded.

Figure 2. EV Kit Splash Screen

<!-- image -->

│

## MAX17332 Evaluation Kit

## Communication Port

The EV kit software automatically finds the EV kit when connected  to  any  USB  port.  Communication  status  is shown on the  right-hand  side  of  the  bottom  status  bar. See Figure 3. If the EV kit cannot be found, a No USB Adapter message is displayed. If the EV kit is found, but the  IC  cannot  be  found,  a No  Slave  Device message is  displayed. If the IC is properly powered, pressing the PKWK button wakes up the IC. Otherwise, if communication is valid, a green bar updates as the software continuously reads the IC registers.

The  bottom  status  bar  also  displays  information  on data  logging  status,  the  communication  mode,  power mode, selected current-sense resistor value, device serial number, and the EV kit GUI's version number.

## Program Tabs

All functions of the program are distributed under various tabs in the main program window. Click on the appropriate tab to move to the desired function page.

- Located  on  the ModelGauge m5 tab  is  the  primary user information measured and calculated by the IC.
- The Charger + Protectio n tab displays all the charger and protection settings of the IC.
- The Graphs tab visually displays fuel gauge changes over time.
- The Registers tab allows the user to view and modify common fuel gauge registers one at a time.
- The Commands tab  allows  for  special  operations such as initializing the fuel gauge logging and performing fuel gauge reset.
- The Configuration tab allows the user to modify the NVMemory registers one at a time, but any changes here are not written to NVMemory.
- The Authentication tab allows the user to send and verify the SHA commands.
- The History tab allows all of the history information to be recalled and viewed from the IC.
- If  SBS  Mode  is  enabled  on  the  IC,  the SBS tab  is displayed to show the SBS Memory Map.
- The I2C Traffic Log tab maintains a log of any special communication with the IC.

All tabs are described in more detail in the following sections.

## ModelGauge m5 Tab

The ModelGauge m5 tab in Figure 4 displays the important  output  information  read  from  the  IC.  Information  is grouped by function and each is detailed separately.

## State of Charge

The State of Charge group box displays the main output information  from  the  fuel  gauge:  state  of  charge  of  the cell, remaining capacity, time to full, and time to empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age, internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine the state of charge.

## Charge Status

The Charge  Status group  box  displays  the  desired charging  current  and  voltage  for  the  battery  state  and temperature. It also indicates the charging control mode. When  the  mode  is  CC,  the  Pack  Current  matches  the Charging Current register. When the CV mode is indicated, VCell matches Charging Voltage. If the Pack Current is lower than Charging Current, the reason is indicated in this group box.

Figure 3. EV Kit Bottom Status Bar

<!-- image -->

## MAX17332 Evaluation Kit

Figure 4. ModelGauge m5 Tab

<!-- image -->

## Parallel Management

When the parallel management function is enabled, the Allow Charging button  must be pressed to turn on the CHG FET while a charge source is connected. The button  changes  to  show Stop  Charging while  charging  is allowed. Press Stop Charging to block charging again.

The Block Discharging Checkbox turns on the Discharge Blocking  function.  If the Block  Discharging box  is pressed,  the Allow  Charging button  turns  off  the  DIS FET when any negative current is detected. Discharging is allowed when the box is checked, or while the button is blocking charging (shows Allow Charging). See Table 1 for more details.

## Table 1. Parallel Management FET Control

| BUTTON TEXT    | BLOCK DISCHARGE BOX   | CHG FET   | DIS FET   |
|----------------|-----------------------|-----------|-----------|
| Allow Charging | Unchecked             | Blocked   | ON        |
| Stop Charging  | Unchecked             | ON        | ON        |
| Allow Charging | Checked               | Blocked   | ON        |
| Stop Charging  | Checked               | ON        | OFF       |

## MAX17332 Evaluation Kit

## Alerts

The Alerts group  box  tracks  all  possible  alert  trigger conditions.  If  any  alert  occurs,  the  corresponding  LED becomes green for the user to see. The Clear Alerts button resets all alert flags.

## Protection Status

The Protection Status group box displays the status of the charge and discharge FETs as well as all bits of the ProtStatus register. If the FETs LED is green, the current can flow. If the LED is red, there is a fault condition and the FET is open, preventing current flow.

## At Rate

The At Rate group box allows the user to input a hypothetical  load  current  (AtRate)  and  the  fuel  gauge  calculates  the  corresponding  hypothetical  Qresidual,  TTE, AvSOC, and AvCap values.

## Charger + Protection Tab

The Charger + Protection tab  in  Figure  5  displays  the charger  and  protection  settings  read  from  the  IC.  The settings  cannot  be  changed  from  this  tab.  Please  use the Configuration  Wizard to  update  these  settings. Information is  grouped by function and each is detailed separately.

The Measurements , Alerts ,  and Protection  Status group boxes display the same information that is shown on the ModelGauge m5 tab.

## Charging Configuration

The Charging  Configuration group  box  displays  the charging settings and all the protection settings related to charging as well as a graphical view of those selections across the programmable temperature ranges. By clicking the Show Step Values button, the step charging values settings pop up as shown in Figure 5.

Figure 5. Protector Tab and Step Values

<!-- image -->

│

## MAX17332 Evaluation Kit

## Discharging Configuration

The Discharging Configuration group box displays all the protection settings related to discharging.

## Graphs Tab

Figure  6  shows  the  format  of  the Graphs Tab.  Graph information  is  grouped  into  four  categories: Voltages , Temperatures , Capacities ,  and Currents . The user can turn  on  or  off  any  data  series  using  the  checkboxes  on

Evaluates: MAX17332

the  right-hand  side  of  the  tab.  The  graph  visible  viewing area can be adjusted from 10 minutes up to 1 week. The graphs remember up to 1 week's worth of data. If the viewing area is smaller than the time range of the data already collected,  the  scroll  bar  below  the  graphs  can  be  used to  scroll  through  graph  history. All  graph  history  information is maintained by the program. Graph settings can be changed at any time without losing data. Voltages in the graph are plotted as an average cell voltage measurement.

Figure 6. Graphs Tab

<!-- image -->

│

## MAX17332 Evaluation Kit

## Registers Tab

The Registers tab in Figure 7 allows the user access to all  fuel  gauge-related  registers  of  the  IC.  The  user  can sort  the  registers  either  by  function  or  by  their  internal address by clicking the appropriate button at the top of the tab. Each line of data contains the register name, register address, a hexadecimal representation of the data stored in the register, and if applicable, a conversion to application units.

The  MAX17332  has  a Write  Protection function  that prevents  accidental  writing  of  any  register.  Before  writing  any  register,  the  Write  Protection  must  be  disabled. The GUI provides a convenient switch at the top of the

Evaluates: MAX17332

Registers and Configuration tabs to lock and unlock the Write  Protection.  The Write  Protection status  is  automatically re-enabled if there is no movement of the mouse for 10 seconds to prevent accidentally leaving the Write Protection disabled.

To write a register location, first toggle the Write Protection slider to unlocked and then click on the button containing the register name. A pop-up window allows the user to enter a new value in either hexadecimal units or application units. The main read loop temporarily pauses while  the  register  updates.  The  changes  made  on  the Register tab are reflected in the I 2 C Traffic log.

Figure 7. Registers Tab

<!-- image -->

│

## MAX17332 Evaluation Kit

## Commands Tab

The Commands tab in Figure 8 allows the user to access any  general  IC  functions  not  related  to  normal  writing and reading of register locations. Each group box of the Commands tab  is  described  in  detail  in  the  following sections.

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

Figure 8. Commands Tab

<!-- image -->

│

## Log Data to File

Data logging is always active when the EV kit software is  started.  The  default  data  log  storage  location  is  the My Documents/Maxim Integrated/MAX17332/Datalog. csv. The user can stop data logging by clicking the Stop Log button or change the data log file name by clicking the Change Filename button. Whenever data logging is active, it is displayed on the bottom status bar of the EV kit window. All user-available IC registers are logging in a .csv formatted file. The user can adjust the logging interval at any time. The user can also enable or disable the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not part of the normal read data loop and indicates any time communication to the IC is lost.

## Reset IC

Clicking the Full Reset button sends the software POR command to the command register and sets the POR\_ CMD bit of the Config2 register to fully reset fuel-gauge and charger operation as if the IC had been power cycled. Note  that  resetting  the  IC  when  the  cell  is  not  relaxed causes fuel gauge error.

## Nonvolatile Memory Block

Clicking the Write NV Block button sends the Copy NV Block  command  to  the  command  register  that  causes all  register  locations  from  180h  to  1EFh  to  be  stored  in nonvolatile  memory.  Nonvolatile  memory  has  a  limited number  of  copies  and  the  user  is  prompted  to  confirm before executing the copy.

## Write Protect and Lock Register Blocks

Clicking  one  of  the  six Write  Protection sliders  locks or unlocks a page or pages of memory as listed. Before unlocking  any  individual  block,  the Global  Lock slider must first be unlocked.

Clicking one of the five Permanent Lock sliders locks a page or pages of memory as listed. This is a permanent operation, so the user is prompted to confirm the operation before setting the lock.

## Configuration Tab

The Configuration tab has similar formatting to the standard Registers tab  as shown in Figure 9, but there are some major differences. When the user changes a register value on the Configuration tab, only the RAM value of that location is changed. The nonvolatile value remains unchanged.  Register  text  changes  to BLUE to  indicate the RAM and nonvolatile values do not match. The user must complete a nonvolatile burn on the Commands tab or run the Configuration Wizard to change the nonvolatile value. The nonvolatile memory has a limited number of updates that are shown in a box on the top right side of the tab. Maxim recommends using the Configuration Wizard to  make  any  changes  to  nonvolatile  memory instead  of  changing  registers  manually. The  wizard  can be launched through the Device drop-down menu at the top of the EV kit software window or by the button on the top-right of the Configuration tab. See the Configuration Wizard section for details. Note any register information that is displayed in the RED text  indicates  a  nonvolatile write error where the data read back after a nonvolatile memory write does not match the expected value. Also note, the Write Protection must be unlocked before modifying any registers.

## MAX17332 Evaluation Kit

## Evaluates: MAX17332

Figure 9. Configuration Tab

<!-- image -->

## MAX17332 Evaluation Kit

## Authentication Tab

The Authentication tab in Figure 10 allows full evaluation of the SHA-256 security feature. Each group box of the Authentication tab is described in detail in the following sections.

## SHA Challenge/ROM ID

The 160-bit SHA-256 Challenge message consists of ten 16-bit Challenges. To manually enter the challenge message, click the hex value field of each challenge number and edit the value in the text box. Click the Randomize Challenge button to create a random challenge message.

## SHA Secret

The  160-bit  SHA-256  Secret  key  consists  of  ten  16-bit Secret  values.  Unless  the  secret  is  specifically  programmed  by  Maxim  Integrated  for  the  customer,  the default key value is 0. To prepare for authentication with

the IC, enter the known secret value for the IC connected to the GUI. Click Clear Secret to reset the key values in the IC to 0. Please note that is not possible to clear the secret if the secret is locked. Click Lock Secret to permanently lock the secret value for the IC. Secret Changes Remaining shows the remaining chances to update the SHA Secret value.

## Authentication Result

This group box provides four methods to perform authentication  evaluation.  When  the  authentication  process begins,  the  IC  calculates  MAC  based  on  the  challenge and stored secret value. The GUI, which represents the host-side processor, also calculates based on Challenge and  known  secret.  If  the SHA  Secret is  entered  correctly matching the programmed secret state in the IC, the authentication should succeed given any challenge using any of the four methods. Compute MAC with ROM ID

Figure 10. Authentication Tab

<!-- image -->

│

## MAX17332 Evaluation Kit

computes MAC results based on chip ROM ID that is specific to the chip. Compute MAC without ROM ID would not involve ROM ID into computation, which means the MAC result for every chip given the same challenge and secret should be the same. Compute Next Secret commands not only computes authentication result, but also updates  the  secret  value  [Secret0-Secret9]  to  [MAC6MAC15]. If there are no Secret Changes Remaining displayed in the SHA Secret group or the Secret is locked, the Secret does not update.

## History Tab

The History tab visualizes all nonvolatile update history on  the 0x1Ax column  of  the  nonvolatile  memory  map. Figure 11 shows the History Tab. This column of nonvolatile memory features the Fibonacci Saving mechanism to help the IC efficiently learn and adapt to battery charac-

## Evaluates: MAX17332

teristics  change.  This  column  of  memory  is  updated  by the IC through usage cycles as the IC observes changes to  the  battery  capacity,  observed  MaxMin  voltages, currents,  temperatures,  and  any  battery  faults.  The updates  are  saved  to  nonvolatile  memory  and  can  be read over I 2 C.

In the Read History group box, click the Read Battery History button to initiate the nonvolatile history recall process. Once the process is initiated, it takes a while to load the nonvolatile history from the IC. Click the Read Battery History and Save to File to save the nonvolatile history to a .csv file in addition to initiate the nonvolatile history recall process. After the recall process is finished, enter in  the  page number or select the + or - sign to browse through  the  nonvolatile  history  at  the Display  History Data tool.  The  detailed  information  of  the  specific  page selected is displayed in the Logging History section.

Figure 11. History Tab

<!-- image -->

│

## Configuration Wizard

Before the IC can accurately charge or calculate the state of the battery, it must be configured with characterization information. This can be accomplished in two ways. The first is through a custom characterization procedure that can be performed by Maxim under certain conditions. The result is a model.INI summary file that contains information that can be programmed into the IC by launching the Configuration Wizard and selecting the model.INI file in Step 2 . Contact Maxim for details on this procedure.

The  second  method  is  the  ModelGauge  m5  EZ  configuration. This is the default characterization information shipped  inside  every  IC.  This  default  model  produces accurate results for most applications under most operating  conditions.  It  is  the  recommended  method  for  new designs as it  bypasses  the  custom  cell  characterization procedure. Some additional information is required from the user for EZ configuration initialization.

In the Configuration tab, click the Configuration Wizard button. The Configuration Wizard window pops up, as shown in Figure 12. Follow the description and complete all the steps in Configuration Wizard .  Click Next when each step is finished.

Step  1 shows  the  options  for  how  to  start  with  nonvolatile  programming.  For  a  previously  unprogrammed chip, select Start with Factory Default Values to begin the  evaluation.  If  there  are  already  nonvolatile  memory changes in the IC to be kept, select Start with Existing Nonvolatile Memory Data .

Step 2 shows the critical  charging  and  model  selection options.  Enter  the  cell  nominal  voltage  and  select  the Charge Source Voltage (Managed  or  Fixed  input  voltage).  Enter  the Desired  Fast  Charge current, Sense Resistor value into the text boxes, and select the Heat Limit of  the  FET  from  the  drop-down  menu.  For  EZ configuration  without  using  the  INI  file,  select  the Use ModelGauge m5 EZ Model option. Enter the rated battery capacity, empty voltage (minimum safe system supply  voltage),  charge  termination  current,  and  check  the checkbox if charge voltage is greater than 4.275V. If the .INI file is available, select Use Custom Model and load the model.INI file provided by Maxim directly.

## Evaluates: MAX17332

The Communication interface  must  also  be  selected on  this  screen.  To  connect  to  an  external  communication device, select the slave address. The GUI software automatically tries all slave addresses and communicates with a device at any address. If multiple slave devices are connected to the same GUI, it selects the first device that responds during the address search routine.

In Step 3, charging  configuration  and  protection-related settings  need  to  be  configured.  Figure  13  shows  this step. Use the Charging Voltage and Charging Current fields to set the voltage and current for each temperature zone. If the same voltage and current are desired for all temperatures, either set  all  fields  to  the  same  value,  or just set the 2nd column (Room temperature), and deselect Enable  JEITA  Protection .  The  checkboxes  at  the bottom right enable or disable these features. The Enable Protection feature needs to be checked to enable protection. JEITA Charging allows the IC to calculate and report the required charging voltage and charging current base on temperature. If the JEITA Charging feature is desired, check  the Enable  JEITA  Charging checkbox.  JEITA Protection  allows  the  IC  to  protect  charging  at  different charging  rates  base  on  temperature  condition.  Check the Enable  JEITA  Protection to  enable  this  feature. The  upper  section  of  the  panel  visualizes  the  JEITA temperature  zones  and  protection  thresholds.  In  the lower section, the user can edit detailed settings like the temperature zone setting, OVP setting, charging voltage setting, and charging current setting. When all the JEITA settings are completed, check the upper section graph to make sure the settings are correct.

The Voltage settings are relative to the Room temperature Charging  Voltage.  The  settings  should  be  done  in  the order below:

- 1) Room Charging Voltage
- 2) Cold/Warm/Hot Charging Voltage
- 3) OVP
- 4) OVP Release
- 5) Perm OVP Fail

The Room charging current must be set first before Cold/ Warm/Hot currents are set. Other settings can be adjusted independently.

Figure 12. Configuration Wizard-Front Page

<!-- image -->

│

Evaluates: MAX17332

Figure 13. Configuration Wizard-Step 3

<!-- image -->

## MAX17332 Evaluation Kit

Charger configuration continues on Step 4 and Step 5 , as shown in Figure 14. In Step 4 , Step-Charging can be enabled,  and  the  voltage  and  current  for  each  battery state can be set. These parameters are based on room temperature, and if JEITA Charging is enabled, the currents scale relative to the maximum charging current for that temperature.

Step 5 Smart Full allows users to specify the smart-full threshold by adjusting the input box. To disable the SmartFull function, set it to be 150mV below charging voltage.

Figure 14. Configuration Wizard-Step 4 and Step 5

<!-- image -->

## MAX17332 Evaluation Kit

From Step 7 to Step 8 , the user can edit the Internal SelfDischarge  Detection  and  Discharge  protection  parameters.  See  Figure  15  and  Figure  16.  The  parameters include  detailed  protection  configurations,  thresholds, and timings. Step 8 configures permanent fail and some additional  FET  control  options.  In Step  9 ,  choose  the power mode for the IC. Enabling hibernate mode allows

the reduction of current consumption by lowering the rate of  ADC  sampling.  Enabling  Deepship  mode  opens  the FETs  and  shuts  down  any  protection  functionality  during  shipping  and  storage  conditions.  In Step  11 ,  check the Battery Out option to allow the communication stop shutdown feature. Check Pushbutton Wakeup to  allow MAX17332 wakeup using the ALRT pin.

Figure 15. Internal Self-Discharge and Discharge Protection Configurations

<!-- image -->

│

## MAX17332 Evaluation Kit

Evaluates: MAX17332

Figure 16. Additional Protection Configuration and Power Mode Control

<!-- image -->

## MAX17332 Evaluation Kit

Step 12 sets up the temperature measurement functions of the IC. Select the thermistors and their usage in the dropdown list, and the thermistor coefficients in this step. If there is a special thermistor requirement, look for the NTC model with the closest Beta value in the drop-down list, or enter the value in the Beta field.

Figure 17. Temperature Measurement Details

<!-- image -->

## MAX17332 Evaluation Kit

From Step  13 to Step  20 ,  follow  the  step  descriptions to  fill  out  all  the  application-specific  information.  Unless needed, leave options from Step 13 to Step 17 as default. In Step  18 ,  Age-Based  Deration  Configurations  can  be set. Voltage and current deration steps can be configured

using the drop-down menu as well as the begin, end, and cycles-per-age  step.  The  corresponding  derating  behaviors, including the number of cycles to be delayed, derating steps, total cycles, final charging current, and voltage, are calculated and shown on the right. See Figure 18.

Figure 18. Age Based Deration Configuration

<!-- image -->

│

## MAX17332 Evaluation Kit

In Step  21 ,  the  GUI  updates  the  IC  based  on  previous configuration steps. See Figure 19. The nonvolatile configuration  memory  can  only  be  updated  7  times.  Users can choose to only update RAM by selecting the second option. This is a good method to evaluate previous settings without updating the nonvolatile memory. In this mode, if the IC is power cycled, the configuration is lost. If the final configuration  is  decided,  choose  the  third  option Write

New Configuration to Non-volatile Memory . It is recommended to check Save New Configuration Settings to .INI file . This allows the resulting configuration in previous steps to be recorded in a Complete.INI file. When the configuration wizard is closed, the previous configurations are not remembered. Click the Update IC button to execute the changes and save the file. Click the Close button to exit the configuration wizard without doing anything.

Figure 19. Configuration Step

<!-- image -->

│

## MAX17332 Evaluation Kit

## Programming Tool

The INI file provided by Maxim includes the battery characteristic  model  only  and  is  referred  to  as  a  model.INI file. It does not include custom settings for protector and device  operation.  The  model.INI  file  must  be  used  with the Configuration Wizard to  create a complete.INI file. After completion of Configuration Wizard ,  a  Complete. INI  is  generated  with  all  nonvolatile  register  configurations. With a Complete.INI, the user doesn't need to go through the Configuration Wizard again. See Figure 20. In  the Programming  Tool panel,  click Select  File to

## Evaluates: MAX17332

select  the  saved  Complete.INI  configuration  file.  The configuration file is typically saved from the configuration step in the Configuration Wizard as shown in Figure 20. Click Program IC to program nonvolatile memory directly. When there is minor change required on one or two nonvolatile  registers,  edit  the  registers  inside  the  complete configuration INI file  using  the  text  editor,  then  program the IC using the programming tool. Manually editing the INI file is generally discouraged and should be done with extreme caution. Users can choose to only update RAM by checking the Load INI to RAM checkbox.

Figure 20. Programming Tool

<!-- image -->

│

## MAX17332 Evaluation Kit

## Hardware Connection Guideline

When evaluating the MAX17332 EV kit with high current or  evaluating  protection  functionality,  use  real  batteries  instead  of  power  supplies.  When  connecting  batteries,  use  a  soldered  connection  instead  of  jumper cables. During protector switching event, the impedance (inductance) of the lab jumper cables and power supply can  cause  an  overshoot  on  battery  voltage.  This  voltage  spike  could  potentially  cause  the  voltage  across

## Evaluates: MAX17332

the  BATTP  pin  to  rise  above  the  absolute  maximum rating of 6V, damaging the IC permanently. Figure 21 and Figure  22  show  good  examples  of  battery  connection using  soldered  connections,  battery  connectors,  and  its corresponding BATT voltage waveform during switching event.  Figure  23  and  Figure  24  show  bad  examples  of battery connection using lab jumper wires and their corresponding BATT voltage waveform.

Figure 21. Good Hardware Connection Example (Use Real Batteries and Soldered Connections)

<!-- image -->

│

## Evaluates: MAX17332

Figure 22. BATT Voltage and Battery Current Waveform at Overcurrent Protection Event with Good Connection

<!-- image -->

Figure 23. Bad Hardware Connection Example (Using Lab Jumper Cable)

<!-- image -->

│

## Evaluates: MAX17332

Figure 24. BATT Voltage and Battery Current Waveform at Overcurrent Protection Event with Bad Connection

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com/en-us  |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com |
| Vishay                                 | 402-563-6866 | www.vishay.com        |

Note: Indicate that the MAX17332 is being used when contacting these component suppliers.

## Ordering Information

| PART             | COMMUNICATION INTERFACE   | PIN- PACKAGE   |
|------------------|---------------------------|----------------|
| MAX17332X2EVKIT# | I 2 C                     | 15 WLP         |

# Denotes an RoHS-compliant device.

│

## MAX17332 Evaluation Kit

## MAX17332 EV Kit Bill of Materials

| ITEM   | REF_DES                                   | DNI/DNP   | QTY   | MFG PART #                                                                   | MANUFACTURER                                                                         | VALUE              | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|-------------------------------------------|-----------|-------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | ALRT, SCL, SCL1, SDA, SDA1                | -         | 5     | 5002                                                                         | KEYSTONE                                                                             | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |            |
| 2      | C1, C4, C7, C26                           | -         | 4     | C0402C105K8PAC; CC0402KRX5R6BB105                                            | KEMET;YAGEO                                                                          | 1UF                | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                            |            |
| 3      | C2, C12-C15, C21, C22, C24, C25, C28- C38 | -         | 20    | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | MURATA;TDK;TAIYO YUDEN;TDK                                                           | 0.1UF              | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                          |            |
| 4      | C3                                        | -         | 1     | C1005X5R1E474K050;GRT155R6 1E474KE01                                         | TDK;MURATA                                                                           | 0.47UF             | CAP; SMT (0402); 0.47UF; 10%; 25V; X5R; CERAMIC                                                                         |            |
| 5      | C5                                        | -         | 1     | C0402H102J5GAC                                                               | KEMET                                                                                | 1000PF             | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC                                                                          |            |
| 6      | C6, C9                                    | -         | 2     | GRM155R71A104JA01                                                            | MURATA                                                                               | 0.1UF              | CAP; SMT (0402); 0.1UF; 5%; 10V; X7R; CERAMIC                                                                           |            |
| 7      | C11                                       | -         | 1     | GRM155R71H223KA12                                                            | MURATA                                                                               | 0.022UF            | CAP; SMT (0402); 0.022UF; 10%; 50V; X7R; CERAMIC                                                                        |            |
| 8      | C20, C23, C27                             | -         | 3     | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC    | MURATA;SAMSUNG;MURATA;TDK                                                            | 4.7UF              | CAP; SMT (0402); 4.7UF; 20%; 10V; X5R; CERAMIC                                                                          |            |
| 9      | C39, C40                                  | -         | 2     | C0402C0G500270JNP; GRM1555C1H270JA01                                         | VENKEL LTD.;MURATA                                                                   | 27PF               | CAP; SMT (0402); 27PF; 5%; 50V; C0G; CERAMIC                                                                            |            |
| 10     | D1                                        | -         | 1     | LTST-C190CKT                                                                 | LITE-ON ELECTRONICS INC.                                                             | LTST-C190CKT       | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |            |
| 11     | D2-D4, D9                                 | -         | 4     | BZX384-C5V6                                                                  | NXP                                                                                  | 5.6V               | DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150 DEGC                                                |            |
| 12     | D5, D6                                    | -         | 2     | MBR0520                                                                      | MICRO COMMERCIAL COMPONENTS                                                          | MBR0520            | DIODE; SCH; SCHOTTKYRECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A;                                                         |            |
| 13     | D7, D10                                   | -         | 2     | RB520G-30                                                                    | GENERIC PART                                                                         | RB520G-30          | -55 DEGC TO +150 DEGC DIODE; SCH; SCHOTTKYBARRIER DIODE; SMT (SOD-723); PIV=30V; IF=0.1A                                |            |
| 14     | D8                                        | -         | 1     | RB751S40                                                                     | FAIRCHILD SEMICONDUCTOR                                                              | RB751S40           | DIODE; SCH; SMT (SOD-523F); PIV=40V; IF=0.03A                                                                           |            |
| 15     | DGND, GND                                 | -         | 2     | 5011                                                                         | KEYSTONE                                                                             | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 16     | DS1, DS2                                  | -         | 2     | LTST-C190GKT                                                                 | LITE-ON ELECTRONICS INC.                                                             | LTST-C190GKT       | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                      |            |
| 17     | J1                                        | -         | 1     | 10118193-0001LF                                                              | FCI CONNECT                                                                          | 10118193-0001LF    | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |            |
| 18     | J2                                        | -         | 1     | PEC03SAAN                                                                    | SULLINS                                                                              | PEC03SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |            |
| 19     | J4                                        | -         | 1     | TSW-102-07-T-S                                                               | SAMTEC                                                                               | TSW-102-07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |            |
| 20     | J5                                        | -         | 1     | S2B-PH-K-S(LF)(SN)                                                           | JST MANUFACTURING                                                                    | S2B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP 2PINS                                                  |            |
| 21     | L1-L3                                     | -         | 3     | BLM18AG601SN1                                                                | MURATA                                                                               | 600                | STYLE CONNECTOR; SIDE ENTRYTYPE; RIGHT ANGLE; INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                    |            |
| 22     | MISC1                                     | -         | 1     | AK67421-1-R                                                                  | ASSMANN                                                                              | AK67421-1-R        | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS              |            |
| 23     | Q1                                        | -         | 1     | 2N7002;2N7002; 2N7002;2N7002                                                 | DIODES INCORPORATED;ST MICROELECTRONICS;ON SEMICONDUCTOR;MICRO COMMERCIAL COMPONENTS | 2N7002             | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                           |            |
| 24     | Q3                                        | -         | 1     | FDPC4044                                                                     | ON SEMICONDUCTOR                                                                     | FDPC4044           | TRAN;COMMON DRAIN N-CHANNEL POWERTRENCH MOSFET; NCH; POWERCLIP-33; PD-(2.7W); I-(27A); V-(30V)                          |            |
| 25     | Q4                                        | -         | 1     | BSS223PW                                                                     | INFINEON                                                                             | BSS223PW           | TRAN; OPTIMOS SMALL-SIGNAL-TRANSISTOR; PCH; SOT323-3; PD-(0.25W); I-(-0.39A); V-(-20V)                                  |            |
| 26     | R1                                        | -         | 1     | CRCW040210R0JN                                                               | VISHAYDALE                                                                           | 10                 | RES; SMT (0402); 10; 5%; +/-200PPM/DEGK; 0.0630W                                                                        |            |
| 27     | R2, R9                                    | -         | 2     | RC0402FR-0727RL                                                              | YAGEO                                                                                | 27                 | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W                                                                        |            |
| 28     | R5                                        | -         | 1     | KRL1220E-M-R010-F                                                            | SUSUMU CO LTD.                                                                       | 0.01               | RES; SMT (0805); 0.01; 1%; +/-50PPM/DEGC; 0.5W                                                                          |            |
| 29     | R6, R16, R34                              | -         | 3     | RC0402FR-071KL; MCR01MZPF1001                                                | YAGEO;ROHM SEMICONDUCTOR                                                             | 1K                 | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                        |            |
| 30     | R7                                        | -         | 1     | RC0402FR-0710KL; CR0402-FX-1002GLF                                           | YAGEO;BOURNS                                                                         | 10K                | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                       |            |
| 31     | R8, R12, R13                              | -         | 3     | RC0402FR-07150RL                                                             | YAGEO                                                                                | 150                | RES; SMT (0402); 150; 1%; +/-100PPM/DEGC; 0.0630W                                                                       |            |
| 32     | R10, R19, R20, R37                        | -         | 4     | CRCW04021M00FK                                                               | VISHAYDALE                                                                           | 1M                 | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                        |            |
| 33     | R11                                       | -         | 1     | CR0402-16W-3650FT                                                            | VENKEL LTD. TE CONNECTIVITY                                                          | 365                | RES; SMT (0402); 365; 1%; +/-100PPM/DEGK; 0.0630W                                                                       |            |
| 34 35  | R14 R15                                   | - -       | 1 1   | RN73C1E4K99BTG ERA-2AEB202                                                   | PANASONIC                                                                            | 4.99K 2K           | RES; SMT (0402); 4.99K; 0.10%; +/-10PPM/DEGC; 0.0630W RES; SMT (0402); 2K; 0.10%; +/-25PPM/DEGC; 0.0630W                |            |
| 36     | R17                                       | -         | 1     | RN73C2B100RB                                                                 | HOLSWORTHY                                                                           | 100                | RES; SMT (1206); 100; 0.10%; +/-25PPM/DEGK; 0.2500W                                                                     |            |
| 37     | R18                                       | - -       | 1 1   | CRCW04024K02FK; ERJ-2RKF4021; RC0402FR-074K02L                               | VISHAY;PANASONIC;YAGEO YAGEO PHYCOMP                                                 | 4.02K 0            | RES; SMT (0402); 4.02K; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT (0805); 0; 5%; JUMPER; 0.1250W                             |            |
| 38     | R26                                       |           |       | RC0805JR-070RL CRCW040212K0FK;                                               | VISHAYDALE;ROHM                                                                      |                    | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC;                                                                               |            |
| 39     | R33                                       | -         | 1     | MCR01MZPF1202                                                                | SEMICONDUCTOR                                                                        | 12K                | 0.0630W                                                                                                                 |            |
| 40     | R35, R36, R38, R39                        | -         | 4     | ERJ-2GE0R00                                                                  | PANASONIC                                                                            | 0                  | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                             |            |

## Evaluates: MAX17332

## MAX17332 EV Kit Bill of Materials (continued)

| ITEM      | REF_DES   | DNI/DNP   | QTY       | MFG PART #                             | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                      | COMMENTS   |
|-----------|-----------|-----------|-----------|----------------------------------------|---------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------|------------|
| 41        | R40, R41  | -         | 2         | CRCW04024K70FK; MCR01MZPF4701          | VISHAYDALE;ROHM SEMICONDUCTOR         | 4.7K          | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 42        | R42, R43  | -         | 2         | PNM0402E5001BS                         | VISHAYDALE                            | 5K            | RES; SMT (0402); 5K; 0.10%; +/-25PPM/DEGC; 0.0500W                                                               |            |
| 43        | R46, R47  | -         | 2         | CRCW0402470RFK                         | VISHAYDALE                            | 470           | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 44        | RT1, RT2  | -         | 2         | NCP15XH103F03                          | MURATA                                | 10K           | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                               |            |
| 45        | S1, S2    | -         | 2         | EVQ-Q2K03W                             | PANASONIC                             | EVQ-Q2K03W    | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                       |            |
| 46        | SU2, SU4  | -         | 2         | S1100-B;SX1100-B; STC02SYAN            | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED          |            |
| 47        | T1        | -         | 1         | TGM-040P3RL                            | HALO ELECTRONICS INC                  | TGM-040P3RL   | TRANSFORMER; SMT; 1:1:1.3:1.3; PCMCIA DC/DC CONVERTER ;                                                          |            |
| 48        | U1        | -         | 1         | MAX17332X22+                           | MAXIM                                 | MAX17332X22+  | EVKIT PART - IC; MAX17332X22+; (BC30); PACKAGE OUTLINE DRAWING: 21-100450; PACKAGE CODE: W151J2+2                |            |
| 49        | U2        | -         | 1         | FT2232HL                               | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT2232HL      | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                  |            |
| 50        | U3        | -         | 1         | MAX14937AWE+                           | MAXIM                                 | MAX14937AWE+  | IC; ISO; TWOCHANNEL; 5KVRMS I2C ISOLATOR; WSOIC16                                                                |            |
| 51        | U4        | -         | 1         | MAX13253ATB+                           | MAXIM                                 | MAX13253ATB+  | IC; DRV; 1A SPREAD-SPECTRUM; PUSH-PULL; TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLIES; TDFN10-EP                |            |
| 52        | U5, U6    | -         | 2         | MAX8511EXK33+                          | MAXIM                                 | MAX8511EXK33+ | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5                                      |            |
| 53        | VUSB      | -         | 1         | 5000                                   | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 54        | Y1        | -         | 1         | 7M-12.000MAAJ                          | TXC CORPORATION                       | 12MHZ         | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-30PPM; STABILITY = +/-30PPM                                                  |            |
| 55        | PCB       | -         | 1         | MAX17332                               | MAXIM                                 | PCB           | PCB:MAX17332                                                                                                     |            |
| 56        | C16-C18   | DNP       | 0         | GRM1555C1E102JA01; C1005C0G1E102J050BA | MURATA;TDK                            | 1000PF        | CAP; SMT (0402); 1000PF; 5%; 25V; C0G; CERAMIC                                                                   |            |
| 57        | F1        | DNP       | 0         | SFR-0405A                              | DEXERIALS                             | SFR-0405A     | IC; PROT; SELF CONTROL PROTECTOR; SMT ;                                                                          |            |
| 58        | J3        | DNP       | 0         | PEC04DBAN                              | SULLINS CONNECTOR SOLUTIONS           | PEC04DBAN     | CONNECTOR; MALE; THROUGH HOLE; 0.100IN CC; BREAKAWAYHEADER; RIGHT ANGLE; 8PINS                                   |            |
| 59        | Q2        | DNP       | 0         | 2N7002                                 | NXP                                   | 2N7002        | TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A); V-(60V)                                        |            |
| 60        | Q5, Q6    | DNP       | 0         | NDS8410A                               | FAIRCHILD SEMICONDUCTOR               | NDS8410       | MOSFET, N-CHANNEL, SO-8, PD=2.5W, ID=+/-10A, VDSS=30V, VGS=-20V, VSD=0.8V, RDS(ON)=0.013Ohm, -55degC TO +150degC |            |
| 61        | R24       | DNP       | 0         | RC0805JR-070RL                         | YAGEO PHYCOMP                         | 0             | RES; SMT (0805); 0; 5%; JUMPER; 0.1250W                                                                          |            |
| 62        | C8, C10   | DNP       | 0         | N/A                                    | N/A                                   | OPEN          | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                          |            |
| 63        | R3, R4    | DNP       | 0         | N/A                                    | N/A                                   | OPEN          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                 |            |
| TOTAL 112 | TOTAL 112 | TOTAL 112 | TOTAL 112 | TOTAL 112                              | TOTAL 112                             | TOTAL 112     | TOTAL 112                                                                                                        | TOTAL 112  |

Evaluates: MAX17332

## MAX17332 EV Kit Schematic Diagram

<!-- image -->

## MAX17332 EV Kit PCB Layout Diagrams

<!-- image -->

MAX17332 EV Kit Component Placement Guide-Top Silkscreen

│

## MAX17332 EV Kit PCB Layout Diagrams (continued)

MAX17332 EV Kit PCB Layout Diagram-Top Layer

<!-- image -->

│

## MAX17332 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17332 EV Kit PCB Layout Diagram-Layer 2

│

## MAX17332 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17332 EV Kit PCB Layout Diagram-Layer 3

│

## MAX17332 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX17332 EV Kit PCB Layout Diagram-Bottom Layer

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX17332