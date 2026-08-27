<!-- lastmod 2022-08-05 -->
## MAX17320X/MAX17320G Evaluation Kits

## General Description

The  MAX17320X/MAX17320G  evaluation  kits  (EV  kits) are fully assembled and tested surface-mount PCBs that evaluate  the  stand-alone  pack-side  fuel  gauge  IC  with protector and optional SHA-256 authentication for 2-4 cell lithium-ion/polymer batteries.

The MAX17320 EV kits include the IC evaluation board with  integrated  I 2 C/1-Wire ®   interface  and  USB  micro-B cable.  Windows ®   based  graphical  user  interface  (GUI) software is available for use with the EV kit and can be downloaded  from https://www.maximintegrated.com/ products/MAX17320.html/ product page under 'Design Resources' tab. Windows 7 or newer Windows operating system is required to use with the EV kit GUI software.

## Features

- ModelGauge m5 Algorithm
- Monitors Multicell Packs
- Full Protection Solution On-Board for Evaluation
- Battery Pack Input Voltage Range of +2.3V to +4.9V/ Cell with Default Hardware
- Default Current Range -10A to +10A with 5mΩ Sense Resistor, Higher Currents Can Be Supported by Changing to a Smaller Sense Resistor
- Thermistor Measurement
- On-Board I 2 C/1-Wire Communication Interface with Built-In MAXUSB Interface
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX17320 Evaluation EV Kit Files

| FILE                      | DESCRIPTION                             |
|---------------------------|-----------------------------------------|
| MAX17320EVKitGUISetup.msi | Installs all EV kit files on a computer |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Maxim Integrated Products, Inc. registered trademark.

Evaluate: MAX17320

## Quick Start

## Required Equipment

- MAX17320 Evaluation kit
- Lithium-ion/polymer cells
- Battery charger
- Load circuit
- USB cable
- PC with Windows 7 or newer Windows operating system and USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold only refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows OS.

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to install the EV kit software, make required hardware  connections,  and  start  operation  of  the  kits. The EV kit software can be launched without hardware attached.  It  automatically  locates  the  hardware  when connections are made. Note that after communication is established  with  the  IC,  the  IC  must  be  configured  correctly for the fuel gauge to be accurate.

- 1) Visit https://www.maximintegrated.com/products/ MAX17320.html/ page under Design Resources tab to download the latest version of the MAX17320 EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 2) Install the EV kit software on a computer by running the MAX17320EVKitGUISetup.msi program inside the temporary folder. The program files are copied, and icons are created in the Windows Start menu. The software requires Windows 7 or newer operating system. .NET version 4.5 is required for operation and is automatically installed if an older version of .NET framework is detected and if the computer is connected to the Internet.
- 3) Follow the prompts to complete the installation. The evaluation software can be uninstalled in the Add/ Remove programs tool in the Control Panel .
- 4) The EV kit software launches automatically after installation or alternatively it can be launched by clicking on its icon in the Windows Start menu.

<!-- image -->

## MAX17320X/MAX17320G Evaluation Kits

- 5) Make connections to the EV kit board based on pack configuration. Figure 1 shows the connections for a 4S configuration. The cells connect between the BATTN/BATT1/BATT2/BATT3/BATTP pads. Table 1 describes the connections for 2S, 3S, and 4S configurations. The load or charger circuit can be con -nected between the SYSGND and SYSPWR pads at this time as well.
- 6) Connect the EV kit to a USB port on the PC using the USB cable. Press the S1 button to wake up the MAX17320. The GUI software establishes communication automatically.
- 7) At startup, the IC defaults to the EZ Configuration. If a custom .INI file for the application is available, it should be loaded at this time.

Evaluate: MAX17320

Figure 1. MAX17320 Board Connections

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Detailed Description of Hardware

The MAX17320 EV kit board provides a variety of features that highlight the functionality of the IC. The following sections explain the most important aspects of the EV kit board.

## Communication Connections

The USB interface on the PCB establishes I 2 C or 1-Wire ® communication between the IC and the software GUI interface. When developing application code separately, connections to the communication lines can be made directly to the board SDA (DQ) and SCL (OD) pins. The user must apply the appropriate external pullup resistors to the communication lines when not using the built-in MAXUSB interface.

## Number of Cells

The  MAX17320  can  be  configured  for  use  with  2  to  4 series  cells.  The  cell  connections  and  jumper  settings for J2 and J5 should be set according to Table 1. CellxN indicates  the  negative  terminal  of  the  cell.  CellxP  indicates the positive terminal of the cell. The number of cells should be configured in the Configuration Wizard .

## External Thermistors

The  MAX17320  can  be  configured  to  use  temperature measurements  from  1  to  4  external  thermistors. All  EV kit  boards  come  with  4  thermistors  installed  as  surface mount components RT1-RT4. If the application requires direct  thermal  contact  to  the  cells,  RT1-RT4  can  be removed  and  replaced  with  a  leaded  thermistor  connected between the RTx+/RT- solder pads. The number of thermistors should be configured in the Configuration Wizard .

## Sense Resistor Options

All EV kit boards are shipped with a 5mΩ 0805-size chip sense resistor installed. Oversized land pattern pads allow for different size sense resistors to be used if desired.

## Table 1. Cell and Jumper Configuration

|   NUMBER OF CELLS | J2   | J5   | BATTN   | BATT1         | BATT2         | BATT3         | BATTP   |
|-------------------|------|------|---------|---------------|---------------|---------------|---------|
|                 2 | 1-2  | 1-2  | Cell1N  | Open          | Cell1P/Cell2N | Open          | Cell2P  |
|                 3 | 1-2  | Open | Cell1N  | Open          | Cell1P/Cell2N | Cell2P/Cell3N | Cell3P  |
|                 4 | Open | Open | Cell1N  | Cell1P/Cell2N | Cell2P/Cell3N | Cell3P/Cell4N | Cell4P  |

│

## Evaluate: MAX17320

## Detailed Description of Software

The  MAX17320G/X  evaluation  kit  software  gives  the user complete control of all functions of the MAX17320, as well as the ability to load a custom model into the IC. Separate control tabs allow the user access to view realtime updates of all monitored parameters. The software also incorporates a data-logging feature to monitor a cell over time.

After  the  installation  is  complete,  open  the  Program Files  (x86)\Maxim  Integrated\MAX17320  folder  and  run MAX17320.exe  or  select  it  from  the  program  menu. Figure  2  shows  a  splash  screen  containing  information about  the  evaluation  kit  that  appears  while  program  is loading.

Figure 2. EV Kit Splash Screen

<!-- image -->

## MAX17320X/MAX17320G Evaluation Kits

## Communication Port

The EV kit software automatically finds the EV kit when connected  to  any  USB  port.  Communication  status  is shown on the  right-hand  side  of  the  bottom  status  bar. See Figure 3. If the EV kit cannot be found, a No USB Adapter message is displayed. If the EV kit is found, but the IC cannot be found, a No Slave Device message is displayed. If the IC is properly powered, pressing the S1 button wakes up the IC. Otherwise, if communication is valid, a green bar updates as the software continuously reads the IC registers.

The bottom status bar also displays information on data logging  status,  the  communication  mode,  power  mode, selected current-sense resistor value, device serial number, and the EV kit GUI's version number.

## Program Tabs

All functions of the program are distributed under various tabs in the main program window. Click on the appropriate tab to move to the desired function page.

- Located on the ModelGauge m5 tab is the primary user information measured and calculated by the IC.
- The Protector tab displays all the protection settings of the IC.
- The Graphs tab visually displays fuel gauge changes over time.
- The Registers tab allows the user to view and modify common fuel gauge registers one at a time.
- The Commands tab allows for special operations such as initializing the fuel gauge logging and per -forming fuel gauge reset.
- The Configuration tab allows the user to modify the NVMemory registers one at a time, but any changes here are not written to NVMemory.
- The Register View tab allows the user to view the individual bitfields of all registers.
- The Authentication tab allows the user to send and verify the SHA commands.
- The History tab allows all of the history information to be recalled and viewed from the IC.
- If SBS Mode is enabled on the IC, the SBS tab is displayed to show the SBS Memory Map.
- The I2C Traffic Log tab maintains a log of any special communication with the IC.

Evaluate: MAX17320

All tabs are described in more detail in the following sections.

Figure 3. EV Kit Bottom Status Bar

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## ModelGauge m5 Tab

The ModelGauge m5 tab in Figure 4 displays the important  output  information  read  from  the  IC.  Information  is grouped by function and each is detailed separately.

## State of Charge

The State of Charge group box displays the main output information  from  the  fuel  gauge:  state  of  charge  of  the cell, remaining capacity, time to full, and time to empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age, internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine state of charge.

## Pre-qual / Balancing Status

The Pre-qual / Balancing Status group box displays the status of any cell balancing or prequalification charge current modulation that is being controlled by the IC.

## Alerts

The Alerts group  box  tracks  all  possible  alert  trigger conditions.  If  any  alert  occurs,  the  corresponding  LED becomes green for the user to see. The Clear Alerts button resets all alert flags.

Figure 4. ModelGauge m5 Tab

<!-- image -->

Evaluate: MAX17320

│

## MAX17320X/MAX17320G Evaluation Kits

## Protection Status

The Protection Status group box displays the status of the charge and discharge FETs as well as all bits of the ProtStatus register. If the FETs LED is green, current can flow. If the LED is red, there is a fault condition and the FET is open, preventing current flow.

## At Rate

The At Rate group box allows user to input a hypothetical  load  current  (AtRate)  and  the  fuel  gauge  calculates the  corresponding  hypothetical AtQResidual , AtTTE , AtAvSOC , and AtAvCap values.

## Protector Tab

The Protector tab in Figure 5 displays the protection settings read from the IC. The settings cannot be changed

Evaluate: MAX17320

from this tab. Use the Configuration Wizard to  update these  settings.  Information  is  grouped  by  function  and each is detailed separately.

The Measurements , Alerts ,  and Protection  Status group boxes display the same information that is shown on the ModelGauge m5 tab.

## Charging Configuration

The Charging  Configuration group  box  displays  all the  protection  settings  related  to  charging  as  well  as  a graphical view those selections across the programmable temperature ranges.

## Discharging Configuration

The Discharging Configuration group  box  displays  all the protection settings related to discharging.

Figure 5. Protector Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Graphs Tab

Figure  6  shows  the  format  of  the Graphs tab.  Graph information  is  grouped  into  four  categories: Voltages , Temperatures , Capacities ,  and Currents .  The user can turn  on  or  off  any  data  series  using  the  check  boxes  on the  right-hand  side  of  the  tab.  The  graph  visible  viewing area can be adjusted from 10 minutes up to 1 week.

Evaluate: MAX17320

The graphs remember up to 1 week worth of data. If the viewing  area  is  smaller  than  the  time  range  of  the  data already collected, the scroll bar below the graphs can be used to scroll through graph history. All graph history information is maintained by the program. Graph settings can be changed at any time without losing data. Voltages in the graph are plotted as an average cell voltage measurement.

Figure 6. Graphs Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Registers Tab

The Registers tab in Figure 7 allows the user access to all  fuel  gauge  related  registers  of  the  IC.  The  user  can sort  the  registers  either  by  function  or  by  their  internal address by clicking the appropriate button at the top of the  tab.  Each  line  of  data  contains  the  register  name, register address, hexadecimal representation of the data stored  in  the  register,  and  if  applicable  a  conversion  to application units.

The  MAX17320  has  a  Write  Protection  function  that prevents  accidental  writing  of  any  register.  Before  writing  any  register,  the  Write  Protection  must  be  disabled.

Evaluate: MAX17320

The GUI provides a convenient switch at the top of the Registers and Configuration tabs  to  lock  and  unlock the Write Protection. The Write Protection status  automatically reenables if there is no movement of the mouse for 10 seconds to prevent accidentally leaving the Write Protection disabled.

To write a register location, first toggle the Write Protection slider to unlocked and then click on the button containing the register name. A pop-up window allows the user to enter a new value in either hexadecimal units or application units. The main read loop temporarily pauses while the register updates.

Figure 7. Registers Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Commands Tab

The Commands tab in Figure 8 allows the user to access any  general  IC  functions  not  related  to  normal  writing and reading of register locations. Each group box of the Commands tab  is  described  in  detail  in  the  following sections.

## 1-Wire Communication Speed

This option affects 1-Wire ICs only. The user can select either  standard  or  overdrive  communication  speed. Communication speed is controlled by the EV kit software by driving the OD pin of the IC high or low. Regardless of

Evaluate: MAX17320

the desired communication rate, the kit software communicates with any IC it discovers at either communication speed. The actual communication speed is displayed in the bottom status bar of the EV kit window.

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

Figure 8. Commands Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Log Data to File

Data  logging  is  always  active  when  the  kit  software  is started. The  default  data  log  storage  location  is  the  My Documents/Maxim Integrated/MAX17320/Datalog.csv. The user can stop data logging by clicking the Stop Log button  or  change  the  data  log  file  name  by  clicking  the Change  Filename button.  Whenever  data  logging  is active, it is displayed on the bottom status bar of the EV kit window. All user available IC registers are logging in a .csv formatted file. The user can adjust the logging interval at any time. The user can also enable or disable the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not part of the normal read data loop and indicates any time communication to the IC is lost.

## Manual FET Control

Before  using  the Manual  FET  Control ,  the  function must be enabled in the IC by clicking the Enable FETs Off-Override by I2C / 1Wire Command in Step 7 of the Configuration  Wizard .  Clicking  the  appropriate  slider can open the either FET or return control of the FET to the IC. Note: The user only has the ability to open the FETs or pass control back to the IC. The user cannot close the FET if the IC has opened the FET in order to protect the battery.

## Reset IC

Clicking the Full Reset button sends the software POR command to the command register and sets the POR\_ CMD bit of the Config2 register to fully reset fuel-gauge operation as if the IC had been power cycled. Note that resetting the IC when the cell is not relaxed causes fuel gauge error.

## Write Non-Volatile Memory Block

Clicking the Write NV Block button sends the Copy NV Block  command  to  the  command  register  that  causes all  register  locations  from  180h to 1DFh to be stored to nonvolatile  memory.  Nonvolatile  memory  has  a  limited number  of  copies  and  the  user  is  prompted  to  confirm prior to executing the copy.

## Write Protect and Lock Register Blocks

Clicking  one  of  the  six Write  Protection sliders  locks or  unlocks  a  page  or  pages  of  memory  as  listed.  Prior to unlocking any individual block, the Global Lock slider must first be unlocked.

Clicking one of the five Permanent Lock sliders locks a page or pages of memory as listed. This is a permanent operation, so the user is prompted to confirm the operation prior to setting the lock.

## Evaluate: MAX17320

## MAX17320X/MAX17320G Evaluation Kits

## Configuration Tab

The Configuration tab has similar formatting to the standard Registers tab  as shown in Figure 9, but there are some major differences. When the user changes a register value on the Configuration tab, only the RAM value of that location is changed. The nonvolatile value remains unchanged.  Register  text  changes  to  BLUE  to  indicate the RAM and nonvolatile values do not match. The user must complete a nonvolatile burn on the Commands tab or run the Configuration Wizard to change the nonvolatile value. The nonvolatile memory has a limited number of updates that is shown in a box on the top right side of

Evaluate: MAX17320

the  tab.  Maxim  recommends  using  the Configuration Wizard to  make  any  changes  to  nonvolatile  memory instead  of  changing  registers  manually. The  wizard  can be launched through the Device drop-down menu at the top of the EV kit software window or by the button on the top-right of the Configuration tab. See the Configuration Wizard section for details. Note any register information that is displayed in RED text indicates a nonvolatile write error where the data read back after a nonvolatile memory write does not match the expected value. Also note, the Write Protection must be unlocked before modifying any registers.

Figure 9. Configuration Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Register View Tab

The Register View tab provides a convenient interface to visualize and update the register settings in binary format. As shown in Figure 10, all configuration register names are listed on the left side of the Register View Tab. When one  register  is  selected,  detailed  information  about  the register  is  displayed  on  the  right-side  panel.  The  corresponding  name and binary value  of  each  bitfield  of  the selected register are displayed on the top table. Clicking the Read Register 0x00F button refreshes the view and load  the  register  reading  into  the  top  table.  Single  click on the binary bitfield  to  edit  the  register  setting  directly. When all the  desired  bitfield  settings  are  updated,  click

Evaluate: MAX17320

the Write Register 0x00F button  to  update  the  register value. If the change needs to be aborted, click the Read Register 0x00F button to reload the register value. The table on the bottom right lists all the bit descriptions and reset  values  based  on  the  IC  data  sheet.  Refer  to  the description of the bitfield for how to set the bitfield. The Find: Bit Fields feature  is  located  at  the  bottom  left  of the Register View tab. To find a bitfield, type in the bitfield name in the Find: Bit Fields menu bar. The search result is available in the drop-down list. The History menu at the bottom left shows all the history searches from the Find: Bit Fields menu.

Figure 10. Register View Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Authentication Tab

The Authentication tab in Figure 11 allows full evaluation of the SHA-256 battery security feature for the MAX17320 fuel-gauge. Each group box of the Authentication tab is described in detail in the following sections.

## SHA Challenge / ROM ID

The 160-bit SHA-256 Challenge message consists of ten 16-bit Challenges. To manually enter the challenge message, click the hex value field of each challenge number and edit the value in the text box. Click the Randomize Challenge button to create a random challenge message.

## SHA Secret

The  160-bit  SHA-256  secret  key  consists  of  ten  16-bit Secret values. Unless the secret is specifically programmed by Maxim Integrated for the customer, the default key value is  0.  T o  prepare  for  authentication  with  the  IC,  enter  the known  secret  value  for  the  IC  connected  to  GUI.  Click Clear Secret to reset the key values in the IC to 0. Note that is not possible to clear the secret if the secret is locked. Click Lock Secret to permanently lock the secret value for

Evaluate: MAX17320

the IC. Secret Changes Remaining shows the remaining chances to update SHA Secret value.

## SHA Authentication Results

This group box provides four method to perform authentication evaluation. When the authentication process begins, the IC calculates MAC based on the challenge and stored secret value. The GUI, which represents the host side processor, also calculates based on the challenge and secret. If  the SHA Secret is  entered  correctly  matching the programmed secret state in the IC, the authentication should succeed given any challenge using any of the four methods. Compute  MAC  with  ROM  ID computes  the  MAC result based on the chip ROM ID that is specific to the chip. Compute MAC without ROM ID does not involve ROM ID computation, which means the MAC result for every chip given the same challenge and secret should be the same. Compute Next Secret with ROM ID commands not only computes the authentication  result,  but  also  updates  the secret  value  [Secret0…Secret9]  to  [MAC6…MAC15].  If there is no Secret Changes Remaining displayed in the SHA Secret group or the secret is locked, the secret does not update.

Figure 11. Authentication Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## History Tab

The History tab  visualizes  all  nonvolatile  update  his -tory  on  0x1Ax  column  of  the  nonvolatile  memory  map. Figure 12 shows the History tab. This column of nonvolatile memory features Fibonacci Saving mechanism to help the IC efficiently learn and adapt to battery characteristics change. The column of memory changes by nonvolatile programming  and  updates  automatically  as  the  battery pack experience through usage cycles.

## Evaluate: MAX17320

In the Read History group box, click the Read Battery History button  to  initiate  the  nonvolatile  history  recall process. Once the process is initiated, it takes a while to load the nonvolatile history from the IC. Click the Read History and Save to File to save the nonvolatile history to  a  csv  file  in  addition  to  initiate  the  nonvolatile  history recall process. After the recall process is finished, enter in page number or select + or - sign to browse through the nonvolatile history at the Display History Data from Page tool.  The  detailed  information  is  displayed  in  the Logging History section.

Figure 12. History Tab

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Configuration Wizard

Before the IC accurately fuel gauges the battery pack, it must be configured with characterization information. This can be accomplished two ways. The first is through a custom characterization procedure that can be performed by Maxim under certain conditions. The result is an model. INI  summary  file  that  contains  information  that  can  be programmed into the IC by launching the Configuration Wizard and selecting the model.INI file in Step 2. Contact Maxim for details on this procedure.

The second method is ModelGauge m5 EZ configuration. This  is  the  default  characterization  information  shipped inside  every  IC.  This  default  model  produces  accurate results for most applications under most operating conditions. It is the recommended method for new designs as it  bypasses  the  custom  cell  characterization  procedure. Some additional information is required from the user for EZ configuration initialization.

In  the Configuration tab,  click Configuration  Wizard button. The Configuration Wizard window pops up, as shown in Figure 13. Follow the description and complete all the steps in Configuration Wizard .  Click Next when each step is finished.

## Evaluate: MAX17320

Step 1 shows  the  options  for  how  to  start  with  nonvolatile programming.  For  previously  unprogrammed  chip,  select Start  with  Factory  Default  Values to  begin  evaluation.  If there are already nonvolatile memory changes in the IC to be kept, select Start with Existing Nonvolatile Memory Data .

Step 2 shows the critical model selection options. Enter the  Sense  resistor  value  into  the Sense  (mOhms) text box. For EZ configuration without using INI file, select the Use ModelGauge m5 EZ Model option.  Enter the rated battery  capacity,  empty  voltage  (minimum  safe  system supply  voltage),  charge  termination  current  and  check the checkbox if charge voltage is greater than 4.275V. If INI file is available, select Use Custom Model and Other Configuration  Registers  from  Model.INI  or  Complete .INI  File and  load  model  INI  file  provided  by  Maxim directly.

In Step 3 , the basic Schematic Configuration is selected including  the number  of  cells , number  of  thermistors , Always On LDO Output setting and Gate Driver Voltage setting.

In Step  4 ,  the  cell Balancing  Configuration  (mV) is selected.

## MAX17320X/MAX17320G Evaluation Kits

Evaluate: MAX17320

Figure 13. Configuration Wizard-Step 1 and 2

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

Evaluate: MAX17320

Figure 14. Configuration Wizard-Step 3 and 4

<!-- image -->

## MAX17320X/MAX17320G Evaluation Kits

In Step  5 ,  charge  protection-related  settings  need  to be  configured.  Figure  15  shows  this  step.  The  checkboxes at  the  bottom  right  enable  or  disable  the  protection features. The Enable Protection feature need to be checked to enable protection. JEITA charging allows the IC to calculate and report the required charging voltage and  charging  current  base  on  temperature  condition. If  JEITA  Charging  feature  is  desired,  check  the  Enable JEITA checkbox. JEITA protection allows the IC to protect

## Evaluate: MAX17320

charging at different charging rate base on temperature condition. Check the Enable JEITA Protection to enable this feature. The upper section of the panel visualizes the JEITA  temperature  zones  and  protection  thresholds.  In the lower section, user can edit detailed settings like the temperature zone setting, OVP setting, charging voltage settings, and charging current setting. When all the JEITA settings are completed, check the upper section graph to make sure settings are correct.

Figure 15. Configuration Wizard-Step 5

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

From Step 6 to Step 8 , user can edit the discharge protection  parameters.  See  Figure  16  and  Figure  17.  The parameters  include  detailed  protection  configurations, thresholds and timings. In Step 7, user can enable and configure  the  Battery  Internal  Self-Discharge  Detection. In Step 9 , choose the power mode for fuel-gauge device. Enabling  hibernate  mode  allows  reduction  of  current consumption  by  lowering  the  rate  of  ADC  sampling. Enabling Deepship mode opens the FETs and shuts down any protection  functionality  during  shipping  and  storage condition.  In Step  10 ,  check  the Battery  Out option

## Evaluate: MAX17320

to  allow  communication  stop  shutdown  feature.  Check Pushbutton Wakeup to  allow  wakeup fuel-gauge using the ALRT pin.

From Step 11 to Step 19 , follow along the step description to fill  out all the application specific information related to fuel-gauging. Typically leave options from Step 11 to Step 19 as  default.  If  there  is  special  thermistor  requirement, look for the NTC model with closest beta value in the dropdown list. If the thermistor beta value is not covered by the models in the drop-down list, contact Maxim for support.

Figure 16. Configuration Wizard-Step 6 and 7

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

Evaluate: MAX17320

Figure 17. Configuration Wizard-Step 8, 9, and 10

<!-- image -->

## MAX17320X/MAX17320G Evaluation Kits

In Step 20 , user can choose to update the IC based on previous configuration steps. See Figure 18 . The nonvolatile configuration memory can only be updated 7 times. User can choose to only update RAM by selecting the second option.  This  is  a  good  method  to  evaluate  previous  settings  without  updating  the  nonvolatile  memory.  In  this mode, if the IC is power cycled, the configuration is lost. If  final  configuration  is  decided,  choose  the  third  option

Evaluate: MAX17320

Program New Configuration  to  Non-Volatile  Memory . It  is  recommended  to  check Save  New  Configuration Settings to .INI file . This allows resulting configuration in previous steps to be recorded in a Complete INI file. When Configuration Wizard is  closed,  the  previous  configurations are not be remembered. Click Update IC button  to execute the changes and saves. Click Close button to exit configuration wizard without doing anything.

Figure 18. Configuration Wizard-Step 20

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Programming Tool

INI file provided by Maxim includes battery characteristic model only and is referred to as a model.INI file. It does not include custom settings for protector and device operation. The model.INI file must be used with the Configuration Wizard to  create a complete.INI file. After completion of Configuration Wizard , a Complete.INI is generated with all  nonvolatile  register  configurations.  With  a  Complete. INI,  user  doesn't  need  to  go  through  configuration  wiz -ard  again.  See  Figure  19.  In  the Programming  Tool panel, click Select File to select the saved Complete.INI

Evaluate: MAX17320

configuration file. The configuration file is typically saved from configuration step in the Configuration Wizard as shown in Figure 18 .  Click Program IC to  program nonvolatile  memory directly.  When there is a minor change required on one or two nonvolatile registers, edit the registers inside the complete configuration INI file using text editor, then program the IC using the programming tool. Manually editing the INI file is generally discouraged and should be done with extreme caution. User can choose to only update the RAM by checking the Load INI to RAM checkbox.

Figure 19. Programming Tool

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Hardware Connection Guideline

When  evaluating  MAX17320  EV  kit  with  high  current or  evaluating  protection  functionality,  use  real  batteries instead  of  power  supplies.  When  connecting  batteries, use soldered connection instead of jumper cables. During protector  switching  event,  the  impedance  caused  by inductance  of  the  lab  jumper  cables  and  power  supply can  cause  overshoot  on  battery  voltage.  This  voltage spike  could  potentially  cause  voltage  across  any  of  the

Evaluate: MAX17320

BATTx pins to rise above the absolute maximum rating of  6V,  damaging  the  chip  permanently.  Figure  20  show good  example  of  a  battery  connection  using  soldered connections,  battery  connectors,  and  its  corresponding BATT voltage waveform during a switching event. Figure 21 show bad example of a battery connection using lab jumper wires and its corresponding BATT voltage waveform.

Figure 20. Good Hardware Connection Example (Use Real Batteries and Soldered Connections). BATT Voltage and Battery Current Waveform at Overcurrent Protection Event with Good Connection

<!-- image -->

Figure 21. Bad Hardware Connection Example (Use Lab Jumper Cable). BATT Voltage and Battery Current Waveform at Overcurrent Protection Event with Bad Connection

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com/en-us  |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com |
| Vishay                                 | 402-563-6866 | www.vishay.com        |

Note:

Indicate that the MAX17320 is being used when contacting these component suppliers.

## Ordering Information

| PART NUMBER      | INTERFACE   | U1 IC        | PIN-PACKAGE   |
|------------------|-------------|--------------|---------------|
| MAX17320X1EVKIT# | 1-Wire      | MAX17320X12+ | 30 WLP        |
| MAX17320X2EVKIT# | I 2 C       | MAX17320X22+ | 30 WLP        |
| MAX17320G1EVKIT# | 1-Wire      | MAX17320G12+ | 24 TQFN       |
| MAX17320G2EVKIT# | I 2 C       | MAX17320G22+ | 24 TQFN       |

Evaluate: MAX17320

│

## MAX17320X/MAX17320G Evaluation Kits

## MAX17320X EV Kit Bill of Materials

| REF_DES                                  | DNI/DNP   | QTY MFG PART #                                                                      | MANUFACTURER                                    | VALUE                      | DESCRIPTION                                                                                                                                                               |
|------------------------------------------|-----------|-------------------------------------------------------------------------------------|-------------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ALRT, AOLDO, RT-, RT1+-RT4+, SDA1, VUSB  | -         | 12 5002                                                                             | KEYSTONE                                        | N/A                        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE SILVER;                                                                          |
| SCL, SCL1, SDA, C1, C3                   | -         | 2 LMK105B7474KV                                                                     | PANASONIC                                       | 0.47UF                     | WIRE CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          |
| C2, C43                                  | -         | 2 C1005X5R1E474K050;GRT155R61E474KE01                                               | TDK;MURATA                                      | 0.47UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                |
| C4, C7, C19, C26                         | -         | 4 C0402C105K8PAC;CC0402KRX5R6BB105                                                  | KEMET;YAGEO                                     | 1UF                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                   |
| C5                                       | -         | 1 C0402C103K5RAC;GRM155R71H103KA88;C1005X7 R1H103K050BE;CL05B103KB5NNN;UMK105B7103K | KEMET;MURATA;TDK;SAMSUNG ELECTRONIC;TAIYO YUDEN | 0.01UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                               |
| C6, C8, C10, C11                         | -         | V 4 CL05B103KP5NNN                                                                  | SAMSUNG ELECTRONICS                             | 0.01UF                     | CAPACITOR; SMT (0402); CERAMIC; 0.01UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                    |
| C9, C12-C15, C21, C22, C24, C25, C28-C38 | -         | 20 GRM155R71E104KE14;C1005X7R1E104K050BB;TM K105B7104KVH;CGJ2B3X7R1E104K050BB       | MURATA;TDK;TAIYO YUDEN;TDK                      | 0.1UF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRMSERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                               |
| C20, C23, C27                            | -         | 3 ZRB15XR61A475ME01; CL05A475MP5NRN;GRM155R61A475MEAA;C1005X5 R1A475M050BC          | MURATA;SAMSUNG;MURATA;TDK                       | 4.7UF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                 |
| C39, C40                                 | -         | 2 C0402C0G500270JNP; GRM1555C1H270JA01                                              | VENKEL LTD.;MURATA                              | 27PF                       | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                                                  |
| C41, C42 D1                              | - -       | 2 GRM155R71A104JA01 1 LTST-C190CKT                                                  | MURATA LITE-ON ELECTRONICS                      | 0.1UF LTST-C190CKT         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC |
| D2-D4, D10                               | -         | 4 BZX384-C5V6                                                                       | INC. NXP                                        | 5.6V                       | DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150 DEGC                                                                                                  |
| D5, D6                                   | -         | 2 MBR0520                                                                           | MICRO COMMERCIAL COMPONENTS                     | MBR0520                    | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                                                                    |
| D7                                       | -         | 1 SD103AWS                                                                          | MICRO COMMERCIAL COMPONENTS                     | SD103AWS-TP                | DIODE; SCH; SMALL SIGNAL SCHOTTKY DIODE; SOD-323; PIV=40V; IF=0.35A                                                                                                       |
| D8                                       | -         | 1 RB751S40                                                                          | FAIRCHILD SEMICONDUCTOR                         | RB751S40                   | DIODE; SCH; SMT (SOD-523F); PIV=40V; IF=0.03A                                                                                                                             |
| D9                                       | -         | 1 SD101BWS-E3                                                                       | VISHAY                                          | SD101BWS-E3                | DIODE; SCH; SMT (SOD-323); PIV=50V; IF=0.03A                                                                                                                              |
| DGND, GND                                | -         | 2 5011                                                                              | KEYSTONE                                        | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR                                                                                    |
| DS1, DS2                                 | -         | 2 LTST-C190GKT                                                                      | LITE-ON                                         | LTST-C190GKT               | BRONZE WIRE SILVER PLATE FINISH; DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                                       |
| F1                                       | -         | 1 SFJ-1215U                                                                         | ELECTRONICS INC. DEXERIALS                      | SFJ-1215U                  | EVKIT PART - FUSE; SELF CONTROL PROTECTOR; SFJ SERIES; 3-CELL; 15A                                                                                                        |
| J1                                       | -         | 1 10118193-0001LF                                                                   | FCI CONNECT                                     | 10118193-0001LF            | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                                                                   |
| J2, J5                                   | -         | 2 PBC02SAAN                                                                         | SULLINS ELECTRONICS CORP.                       | PBC02SAAN                  | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                                                                              |
| J4                                       | -         | 1 PBC03DAAN                                                                         | SULLINS ELECTRONICS CORP.                       | PBC03DAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                                                          |
| J8                                       | -         | 1 PPPC062LJBN-RC                                                                    | SULLINS ELECTRONICS CORP.                       | PPPC062LJBN-RC             | CONNECTOR; FEMALE; THROUGH HOLE; 0.1IN CC; HEADER; 2 ROW; RIGHT ANGLE; 12PINS                                                                                             |
| L1-L3                                    | -         | 3 BLM18AG601SN1                                                                     | MURATA                                          | 600                        | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                                                                    |
| MISC1                                    | -         | 1 AK67421-1-R                                                                       | ASSMANN                                         | AK67421-1-R                | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS                                                                |
| Q1, Q2                                   | -         | 2 IRF7458PBF                                                                        | INFINEON                                        | IRF7458PBF                 | TRAN; SMPS MOSFET; NCH; NSOIC8; PD-(2.5W); I-(14A); V-(30V)                                                                                                               |
| Q4, Q5 Q8                                | - -       | 2 2N7002 1 BSS223PW                                                                 | NXP                                             | 2N7002                     | TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A); V-(60V) TRAN; OPTIMOS SMALL-SIGNAL-TRANSISTOR; PCH; SOT323-3; PD-(0.25W); I-(-0.39A); V-(-20V)          |
| R1, R3-R5                                | -         | 4 RNCP0805FTD49R9                                                                   | INFINEON STACKPOLE ELECTRONICS INC              | BSS223PW 49.9              | RESISTOR; 0805; 49.9 OHM; 1%; 100PPM; 0.25W; THIN FILM                                                                                                                    |
| R2, R9                                   | -         | 2 ERJ-2RKF27R0X;RC0402FR- 0727RL;CRCW040227R0FK                                     | PANASONIC;YAGEO PHICOMP;VISHAY                  | 27                         | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                   |
|                                          | -         | 3 CRCW04021K00FK; RC0402FR-                                                         | DALE VISHAY                                     | 1K                         | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                       |
| R6, R16, R34                             |           | 071KL;MCR01MZPF1001                                                                 | DALE;YAGEO PHICOMP;ROHM SEMI                    |                            |                                                                                                                                                                           |
| R8, R12, R13                             | - -       | 3 CRCW0402150RFK; 9C04021A1500FL 1 RT0402BRD0710RL                                  | VISHAY DALE;YAGEO YAGEO                         | 150 10                     | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM RES; SMT (0402); 10; 0.1%; +/-25PPM/DEGC; 0.063W                                                                 |
| R10                                      |           | 1 CR0402-16W-3650FT                                                                 |                                                 |                            |                                                                                                                                                                           |
| R11                                      | -         | 2 CRCW0402100RFK; 9C04021A1000FL; RC0402FR-                                         | VENKEL LTD. VISHAY DALE;PANASONIC;YAGEO         | 365                        | RESISTOR; 0402; 365 OHM; 1%; 100PPM; 0.063W; THICK FILM RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                           |
| R14, R15                                 | - -       | 07100RL 1 WSLP12065L000F                                                            | PHYCOMP VISHAY DALE                             | 100 0.005                  | RESISTOR; 1206; 0.005 OHM; 1%; 400PPM; 1.0W; METAL FILM                                                                                                                   |
| R17 R18                                  | -         | 1 CRCW0402100KFK;RC0402FR-07100KL                                                   | VISHAY;YAGEO                                    | 100K                       | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM RESISTOR; 2512; 402 OHM; 1%; 100PPM; 1.0W; THICK FILM                                                               |
| R19                                      | -         | 1 ERJ-1TNF4020U;CRCW2512402RFK 2 CRCW040210K0JN                                     | PANASONIC;VISHAY DALE VISHAY DALE               | 402 10K                    | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                                                                   |
| R20, R25                                 | - -       | ERJ-14YJ102                                                                         | PANASONIC                                       | 1K                         | RESISTOR; 1210; 1K OHM; 5%; 200PPM; 0.5W; THICK FILM                                                                                                                      |
| R21                                      |           | 1 1 CRCW12062K00FK;                                                                 | VISHAY                                          | 2K                         | RESISTOR; 1206; 2K; 1%; 100PPM; 1/4W; THICK FILM                                                                                                                          |
| R22                                      | -         | MCR18EZPF2001                                                                       | DALE;ROHM                                       | 0                          | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                                                                     |
| R26 R33                                  | - -       | 1 RC0805JR-070RL 1 CRCW040212K0FK;MCR01MZPF1202                                     | YAGEO PHYCOMP VISHAY DALE;ROHM SEMICONDUCTOR    | 12K                        | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                  |
| R35, R36, R38, R39                       | -         | 4 ERJ-2GE0R00                                                                       | PANASONIC                                       | 0                          | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                  |
| R37                                      | -         | 1 CRCW04021M00FK                                                                    | VISHAY DALE                                     | 1M                         |                                                                                                                                                                           |
| R40,                                     | -         | 2                                                                                   | VISHAY                                          | 4.7K                       | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK                                                                                                                      |
| R41                                      |           | CRCW04024K70FK;MCR01MZPF4701                                                        | DALE;ROHM SEMICONDUCTOR                         |                            | FILM RESISTOR; 0402; 5K OHM; 0.1%; 25PPM; 0.05W; THIN FILM                                                                                                                |
| R42, R43 R46, R47                        | - - -     | 2 PNM0402E5001BS 2 CRCW0402470RFK 4 NCP15XH103F03                                   | VISHAY DALE VISHAY DALE MURATA                  | 5K 470                     | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K;                                                         |
| RT1-RT4                                  | -         |                                                                                     |                                                 | 10K                        | TOL=+/-1% SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM;                                                                                |
| S1, S2 T1                                | -         | EVQ-Q2K03W TGM-040P3RL                                                              | PANASONIC                                       | EVQ-Q2K03W TGM-040P3RL     | PANASONIC TRANSFORMER; SMT; 1:1:1.3:1.3; PCMCIA DC/DC CONVERTER ; POPULATEEVKIT PART - IC; MAX17320X+; PACKAGE CODE: W302O2+1; PACKAGE OUTLINE NUMBER: 21-                |
|                                          | -         | 2 1                                                                                 | HALO ELECTRONICS INC                            |                            |                                                                                                                                                                           |
| U1                                       | -         | 1 See Ordering Information FT2232HL                                                 | MAXIM FUTURE TECHNOLOGY                         |                            | 100381                                                                                                                                                                    |
| U2                                       |           | 1                                                                                   | DEVICES LTD.                                    | FT2232HL MAX14937AWE+      | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64 IC; ISO; TWO CHANNEL; 5KVRMS I2C ISOLATOR; WSOIC16                                                        |
|                                          | -         |                                                                                     |                                                 | INTL                       |                                                                                                                                                                           |
| U3 U4                                    | -         | 1 MAX14937AWE+ MAX13253ATB+                                                         | MAXIM MAXIM                                     | MAX13253ATB+ MAX8511EXK33+ | IC; DRV; 1A SPREAD-SPECTRUM; PUSH-PULL; TRANSFORMER DRIVER FOR ISOLATED SUPPLIES; TDFN10-EP                                                                               |
| U5,                                      | -         | 1 2 MAX8511EXK33+                                                                   | MAXIM                                           | 12MHZ                      | POWER IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM                                           |
| U6 Y1 PCB                                | - -       | 1 7M-12.000MAAJ 1 MAX17320XSOLDERDOWN                                               | TXC MAXIM                                       | PCB                        | PCB:MAX17320XSOLDERDOWN                                                                                                                                                   |
|                                          |           |                                                                                     | CORPORATION                                     | 1000PF                     |                                                                                                                                                                           |
| C16-C18 J3                               | DNP DNP   | 0 GRM1555C1E102JA01;C1005C0G1E102J050BA 0 PBC04DAAN                                 | MURATA;TDK SULLINS ELECTRONICS                  | PBC04DAAN                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=5%; TG=-55 DEGC CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65                                      |
|                                          |           |                                                                                     | CORP.                                           | FDPC4044                   | TO +125 DEGC; TC=C0G DEGC TO +125 DEGC TRAN; COMMON DRAIN N-CHANNEL POWERTRENCH MOSFET; NCH; POWERCLIP-33; PD-(2.7W); I-(27A); V-                                         |
| Q3                                       | DNP       | 0 FDPC4044                                                                          |                                                 |                            | (30V)                                                                                                                                                                     |
| C44                                      | DNP       | N/A                                                                                 | ON SEMICONDUCTOR N/A                            | OPEN                       | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                                                   |
| R7 R23, R24,                             | DNP DNP   | 0 0 N/A                                                                             | N/A                                             | OPEN                       | RESISTOR; 0805; OPEN; FORMFACTOR RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                         |
| R50                                      |           | 0 N/A                                                                               | N/A                                             | OPEN                       |                                                                                                                                                                           |

Evaluate: MAX17320

## MAX17320X/MAX17320G Evaluation Kits

## MAX17320X EV Kit Schematic

<!-- image -->

│

Evaluate: MAX17320

## MAX17320X EV Kit Schematic (continued)

<!-- image -->

│

Evaluate: MAX17320

## MAX17320X/MAX17320G Evaluation Kits

## MAX17320X EV Kit PCB Layouts

<!-- image -->

MAX17320X EV Kit Component Placement Guide-Top Silkscreen

MAX17320X EV Kit PCB Layout-Layer 2

<!-- image -->

MAX17320X EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluate: MAX17320

<!-- image -->

MAX17320X EV Kit PCB Layout-Top Layer

MAX17320X EV Kit PCB Layout-Layer 3

<!-- image -->

MAX17320X EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## MAX17320G EV Kit Bill of Materials

| REF_DES                                                 | DNI/DNP   | QTY                     | MFG PART #                                                                         | MANUFACTURER                                    | VALUE                     | DESCRIPTION                                                                                                                                                |
|---------------------------------------------------------|-----------|-------------------------|------------------------------------------------------------------------------------|-------------------------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ALRT, AOLDO, RT-, RT1+-RT4+, SCL, SCL1, SDA, SDA1, VUSB | -         | 12                      | 5002                                                                               | KEYSTONE                                        | N/A                       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                      |
| C1, C3                                                  | -         | 2                       | LMK105B7474KV                                                                      | PANASONIC                                       | 0.47UF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                |
| C2, C43                                                 | -         | 2                       | C1005X5R1E474K050;GRT155R61E474KE01                                                | TDK;MURATA                                      | 0.47UF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                 |
| C4, C7, C19, C26                                        | -         | 4                       | C0402C105K8PAC;CC0402KRX5R6BB105                                                   | KEMET;YAGEO                                     | 1UF                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                    |
| C5                                                      | -         | 1                       | C0402C103K5RAC;GRM155R71H103KA88;C1005X7R 1H103K050BE;CL05B103KB5NNN;UMK105B7103KV | KEMET;MURATA;TDK;SAMSUNG ELECTRONIC;TAIYO YUDEN | 0.01UF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                |
| C6, C8, C10, C11                                        | -         | 4                       | CL05B103KP5NNN                                                                     | SAMSUNG ELECTRONICS                             | 0.01UF                    | CAPACITOR; SMT (0402); CERAMIC; 0.01UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                     |
| C9, C12-C15, C21, C22, C24, C25, C28-C38                | -         | 20                      | GRM155R71E104KE14;C1005X7R1E104K050BB;TMK 105B7104KVH;CGJ2B3X7R1E104K050BB         | MURATA;TDK;TAIYO YUDEN;TDK                      | 0.1UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                               |
| C20, C23, C27                                           | -         | 3                       | ZRB15XR61A475ME01; CL05A475MP5NRN;GRM155R61A475MEAA;C1005X5 R1A475M050BC           | MURATA;SAMSUNG;MURATA;TDK                       | 4.7UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                  |
| C39, C40                                                | -         | 2                       | C0402C0G500270JNP; GRM1555C1H270JA01                                               | VENKEL LTD.;MURATA                              | 27PF                      | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                                   |
| C41, C42                                                | -         | 2                       | GRM155R71A104JA01                                                                  | MURATA                                          | 0.1UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  |
| D1                                                      | -         | 1                       | LTST-C190CKT                                                                       | LITE-ON ELECTRONICS INC.                        | LTST-C190CKT              | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                                                            |
| D2-D4, D10                                              | -         | 4                       | BZX384-C5V6                                                                        | NXP MICRO COMMERCIAL COMPONENTS                 | 5.6V                      | DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150 DEGC DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 |
| D5, D6 D7                                               | -         | 2 1                     | MBR0520 SD103AWS                                                                   | COMPONENTS                                      | MBR0520 SD103AWS-TP       | DEGC DIODE; SCH; SMALL SIGNAL SCHOTTKY DIODE; SOD-323; PIV=40V; IF=0.35A                                                                                   |
| D8                                                      | - -       | 1                       | RB751S40                                                                           | MICRO COMMERCIAL FAIRCHILD SEMICONDUCTOR        | RB751S40                  | DIODE; SCH; SMT (SOD-523F); PIV=40V; IF=0.03A                                                                                                              |
| D9                                                      | -         | 1                       | SD101BWS-E3                                                                        | VISHAY                                          | SD101BWS-E3               | DIODE; SCH; SMT (SOD-323); PIV=50V; IF=0.03A                                                                                                               |
| DGND, GND                                               | -         | 2 5011                  |                                                                                    | KEYSTONE                                        | N/A                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                    |
| DS1, DS2 F1                                             | -         | 2 1                     | LTST-C190GKT                                                                       | LITE-ON ELECTRONICS INC.                        | LTST-C190GKT              | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                                                         |
| J1                                                      | - -       | 1                       | SFJ-1215U 10118193-0001LF                                                          | DEXERIALS FCICONNECT                            | SFJ-1215U 10118193-0001LF | EVKIT PART - FUSE; SELF CONTROL PROTECTOR; SFJ SERIES; 3-CELL; 15A CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                 |
| J2, J5                                                  | -         | 2                       | PBC02SAAN                                                                          | SULLINS ELECTRONICS CORP.                       | PBC02SAAN                 | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                                                               |
| J4                                                      | -         | 1                       | PBC03DAAN                                                                          | SULLINS ELECTRONICS CORP.                       | PBC03DAAN                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                                           |
| J8 L1-L3                                                | - -       | 1 3                     | PPPC062LJBN-RC BLM18AG601SN1                                                       | SULLINS ELECTRONICS CORP. MURATA                | PPPC062LJBN-RC 600        | CONNECTOR; FEMALE; THROUGH HOLE; 0.1IN CC; HEADER; 2 ROW; RIGHT ANGLE; 12PINS INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                       |
| MISC1                                                   | -         | 1 AK67421-1-R           |                                                                                    | ASSMANN                                         | AK67421-1-R               | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS                                                 |
| Q1, Q2                                                  | -         | 2                       | IRF7458PBF                                                                         | INFINEON                                        | IRF7458PBF                | TRAN; SMPS MOSFET; NCH; NSOIC8; PD-(2.5W); I-(14A); V-(30V)                                                                                                |
| Q4, Q5                                                  | -         | 2                       | 2N7002                                                                             | NXP                                             | 2N7002                    | TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A); V-(60V)                                                                                  |
| Q8                                                      | -         | 1 BSS223PW              |                                                                                    | INFINEON                                        | BSS223PW                  | TRAN; OPTIMOS SMALL-SIGNAL-TRANSISTOR; PCH; SOT323-3; PD-(0.25W); I-(-0.39A); V-(-20V)                                                                     |
| R1, R3-R5                                               | -         | 4                       | RNCP0805FTD49R9                                                                    | STACKPOLE ELECTRONICS INC                       | 49.9                      | RESISTOR; 0805; 49.9 OHM; 1%; 100PPM; 0.25W; THIN FILM                                                                                                     |
| R2, R9                                                  | -         | 2 0727RL;CRCW040227R0FK | ERJ-2RKF27R0X;RC0402FR-                                                            | PANASONIC;YAGEO PHICOMP;VISHAY DALE             | 27                        | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                    |
| R6, R16, R34                                            | -         | 3                       | CRCW04021K00FK; RC0402FR- 071KL;MCR01MZPF1001                                      | VISHAY DALE;YAGEO PHICOMP;ROHM SEMI             | 1K                        | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                        |
| R8, R12, R13                                            | -         | 3                       | CRCW0402150RFK; 9C04021A1500FL                                                     | VISHAY DALE;YAGEO                               | 150                       | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                   |
| R10                                                     | -         | 1                       | RT0402BRD0710RL CR0402-16W-3650FT                                                  | YAGEO VENKEL LTD.                               | 10 365                    | RES; SMT (0402); 10; 0.1%; +/-25PPM/DEGC; 0.063W RESISTOR; 0402; 365 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                   |
| R11                                                     | -         | 1                       | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-                                          | PHYCOMP                                         | 100                       | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                    |
| R14, R15                                                | -         | 2 1                     | 07100RL WSLP12065L000F                                                             | VISHAY DALE;PANASONIC;YAGEO                     | 0.005                     | RESISTOR; 1206; 0.005 OHM; 1%; 400PPM; 1.0W; METAL FILM                                                                                                    |
| R17 R18                                                 | - -       | 1                       | CRCW0402100KFK;RC0402FR-07100KL                                                    | VISHAY DALE VISHAY;YAGEO                        | 100K                      | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                      |
| R19                                                     | -         | 1 2                     | ERJ-1TNF4020U;CRCW2512402RFK                                                       | PANASONIC;VISHAY DALE                           | 402 10K                   | RESISTOR; 2512; 402 OHM; 1%; 100PPM; 1.0W; THICK FILM RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.063W; THICK FILM                                              |
| R20, R25 R21                                            | - -       | 1 ERJ-14YJ102           | CRCW040210K0JN                                                                     | VISHAY DALE PANASONIC                           | 1K                        | RESISTOR; 1210; 1K OHM; 5%; 200PPM; 0.5W; THICK FILM                                                                                                       |
| R22                                                     | -         | 1                       | CRCW12062K00FK; MCR18EZPF2001                                                      | VISHAY DALE;ROHM                                | 2K                        | RESISTOR; 1206; 2K; 1%; 100PPM; 1/4W; THICK FILM                                                                                                           |
| R26                                                     | -         | 1 RC0805JR-070RL        |                                                                                    | YAGEO PHYCOMP                                   | 0 12K                     | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                                                      |
| R33 R35, R36, R38, R39                                  | - -       | 1 4                     | CRCW040212K0FK;MCR01MZPF1202 ERJ-2GE0R00                                           | VISHAY DALE;ROHM SEMICONDUCTOR PANASONIC        | 0                         | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                              |
| R37                                                     | -         |                         | CRCW04021M00FK                                                                     | VISHAY DALE                                     | 1M                        | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                        |
| R40, R41                                                | -         | 1 2                     | CRCW04024K70FK;MCR01MZPF4701                                                       | VISHAY DALE;ROHM SEMICONDUCTOR                  | 4.7K                      | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                  |
| R42, R43                                                | -         | 2                       | PNM0402E5001BS                                                                     | VISHAY DALE VISHAY DALE                         | 5K 470                    | RESISTOR; 0402; 5K OHM; 0.1%; 25PPM; 0.05W; THIN FILM RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                             |
| R46, R47 RT1-RT4                                        | -         | 2                       | CRCW0402470RFK NCP15XH103F03                                                       | MURATA                                          | 10K                       | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1% SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM;                          |
|                                                         | -         | 4                       | EVQ-Q2K03W                                                                         | PANASONIC                                       | EVQ-Q2K03W                | RINSULATION= OHM;                                                                                                                                          |
| S1, S2                                                  | -         | 2                       |                                                                                    |                                                 |                           | PANASONIC TRANSFORMER; SMT; 1:1:1.3:1.3; PCMCIA DC/DC CONVERTER ;                                                                                          |
| T1 U1                                                   | - -       | 1 1                     | TGM-040P3RL See Ordering Information                                               | HALO ELECTRONICS INC MAXIM                      | TGM-040P3RL               | EVKIT PART - IC; MAX17320G+; PACKAGE CODE: T2444+4C ; PACKAGE OUTLINE NUMBER: 21-                                                                          |
| U2                                                      | - -       | 1                       | FT2232HL                                                                           | FUTURE TECHNOLOGY DEVICES INTL LTD.             | FT2232HL                  | 21-0139 IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                    |
| U3 U4                                                   | -         | 1 1                     | MAX14937AWE+ MAX13253ATB+                                                          | MAXIM MAXIM                                     | MAX14937AWE+ MAX13253ATB+ | IC; ISO; TWOCHANNEL; 5KVRMS I2C ISOLATOR; WSOIC16 IC; DRV; 1A SPREAD-SPECTRUM; PUSH-PULL; TRANSFORMER DRIVER FOR POWER SUPPLIES; TDFN10-EP                 |
| U5,                                                     | -         |                         | MAX8511EXK33+                                                                      |                                                 |                           | ISOLATED SC70-5                                                                                                                                            |
| U6 Y1                                                   | - -       | 2 1                     | 7M-12.000MAAJ                                                                      | MAXIM TXC CORPORATION                           | MAX8511EXK33+ 12MHZ       | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM                                         |
| PCB                                                     |           | 1                       | MAX17320XSOLDERDOWN                                                                | MAXIM                                           | PCB                       | PCB:MAX17320XSOLDERDOWN                                                                                                                                    |
| C16-C18                                                 | DNP       | 0                       | GRM1555C1E102JA01;C1005C0G1E102J050BA PBC04DAAN                                    | MURATA;TDK                                      | 1000PF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                 |
| J3                                                      | DNP       | 0                       |                                                                                    | SULLINS ELECTRONICS CORP.                       | PBC04DAAN                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                                                           |
| Q3                                                      | DNP       | 0                       |                                                                                    | ON SEMICONDUCTOR                                | FDPC4044                  | TRAN;COMMON DRAIN N-CHANNEL POWERTRENCH MOSFET; NCH; POWERCLIP-33; PD- (2.7W); I-(27A); V-(30V)                                                            |
|                                                         | DNP       |                         | FDPC4044                                                                           |                                                 | OPEN                      | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                                    |
| C44 R7                                                  | DNP DNP   | 0 0                     | N/A N/A                                                                            | N/A N/A                                         | OPEN OPEN                 | RESISTOR; 0805; OPEN; FORMFACTOR RESISTOR; 0402; OPEN; FORMFACTOR                                                                                          |
| R24, R50                                                |           | 0                       | N/A                                                                                | N/A                                             |                           |                                                                                                                                                            |
| R23,                                                    |           |                         |                                                                                    |                                                 |                           |                                                                                                                                                            |

Evaluate: MAX17320

## MAX17320X/MAX17320G Evaluation Kits

## MAX17320G EV Kit PCB Schematics

<!-- image -->

│

Evaluate: MAX17320

## MAX17320G EV Kit PCB Schematics (continued)

<!-- image -->

│

Evaluate: MAX17320

## MAX17320X/MAX17320G Evaluation Kits

## MAX17320G EV Kit PCB Layouts

<!-- image -->

MAX17320G EV Kit Component Placement Guide-Top Silkscreen

MAX17320G EV Kit PCB Layout-Layer 2

<!-- image -->

MAX17320G EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluate: MAX17320

<!-- image -->

MAX17320G EV Kit PCB Layout-Top Layer

MAX17320G EV Kit PCB Layout-Layer 3

<!-- image -->

MAX17320G EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX17320X/MAX17320G Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                           | PAGES CHANGED                |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
|                 0 | 3/20            | Initial release                                                                                                                                                       | -                            |
|                 1 | 4/20            | Updated Ordering Information table                                                                                                                                    | 24                           |
|                 2 | 7/20            | Updated General Description section, Configuration Wizard section, and ordering information table, replaced MAX17320X EV kit schematic and MAX17320G EV kit schematic | 1, 19-21, 24, 26, 27, 30, 31 |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX17320