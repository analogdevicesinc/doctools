<!-- lastmod 2022-08-05 -->
## MAX17055 Evaluation Kit

## General Description

The  MAX17055G/MAX17055X  evaluation  kits  (EV  kits) are fully assembled and tested surface-mount PCBs that evaluate  the  stand-alone  ModelGauge™  m5  host-side fuel gauge ICs for lithium-ion (Li+) batteries in handheld and portable equipment.

The MAX17055G/MAX17055X EV kits include the Maxim DS91230+  USB  interface,  IC  evaluation  board,  and RJ-11  connection  cable.  Windows ®   based  graphical user  interface  (GUI)  software  is  available  for  use  with the EV kit and can be downloaded from Maxim's website www.maximintegrated.com/evkitsoftware .  Windows  7 or newer Windows operating system is required to use the EV kit GUI software.

## Features

- ModelGauge m5 Algorithm
- Monitors 1-Cell Lithium-Ion Battery Packs
- Battery Pack Input Voltage Range of +2.3V to +4.9V
- On-chip Temperature Measurement and External Thermistor Measurement Network
- Optional On-Board PCB Trace Sense Resistor
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17055K EV Kit Files

| FILE                           | DECRIPTION                                 |
|--------------------------------|--------------------------------------------|
| MAX17055K_Vx_x_x_x_Install.exe | Installs all EV kit files on your computer |

Ordering Information appears at end of data sheet.

ModelGauge is a trademark of Maxim Integrated Products, Inc. Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX17055

## Quick Start

## Required Equipment

- MAX17055G/MAX17055X EV kit
- 1-cell lithium-ion battery pack
- Battery charger or power supply
- Load circuit
- DS91230+ USB adapter
- RJ-11 6pos reverse modular cord
- PC  with  Windows  7  or  newer  Windows  operating system and USB port

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to install the EV kit software, make required hardware  connections,  and  start  operation  of  the  kits. The EV kit software can run without hardware attached. It automatically locates the hardware when connections are made. Note that after communication is established, the IC must still be configured correctly for the fuel gauge to be accurate. See the Battery Selection section for details.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the MAX17055K EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX17055K\_Install.exe program inside the temporary folder. The program files are copied and icons are created in the Windows Start menu. The software requires the .NET Framework 4.5 or later. If you are connected to the Internet, Windows automatically updates .NET framework as needed.

<!-- image -->

## MAX17055 Evaluation Kit

- 3) The EV kit software launches automatically after install or alternatively it can be launched by clicking on its icon in the Windows Start menu.
- 4) Connect the DS91230+ adapter to a USB port on the PC. The DS91230+ is a HID device and is located automatically by Windows without the need to install additional drivers.
- 5) Make connections to the EV kit board based on cell pack configuration as shown in Figure 1. The load or charger circuit can be connected at this time as well. The cell connects between the PACK- and PACK+ pads and the charger/load connect between the SYSGND- and SYSPWR+ pads.
- 6) Connect the RJ-11 cable between the USB adapter and the EV kit board. The GUI software establishes communication automatically.
- 7) At initial power-up, a battery profile must be created. The battery selection window opens and allows the user to generate a profile for the battery they are using. They can either select EZ configuration or if a custom .INI characterization file is available for the battery it can be selected at this time. See the Battery Selection section for details.

## Evaluates: MAX17055

Figure 1. MAX17055 Board Connections

<!-- image -->

│

## Detailed Description of Hardware

The MAX17055 EV kit board provides a variety of features that highlight the functionality of the IC. The following sections detail the most important aspects of the EV kit board.

## Communication Connections

The RJ-11 connector provides all signal lines necessary for I 2 C communication between the IC and the software GUI interface. When developing code separately, connections to the communication lines can be made directly to the board. Table 1 summarizes the connections. The user must apply the appropriate external pullup resistors to the communication lines when not using the DS91230+ communication interface.

## External Thermistor

The MAX17055 can be configured to use internal temperature measurements or an external thermistor. All EV kit boards come with a thermistor installed as surface mount component RT1. If the application requires direct thermal contact to the cells, RT1 can be removed and replaced with  a  leaded  thermistor  connected  between  the  RT1+/ RT1- solder pads (J2 and J3).

## Sense Resistor Options

All EV kit boards are shipped with an 0805 size 0.010Ω chip  sense  resistor  installed.  Oversized  land  pattern pads allow for  different  size  sense  resistors  to  be  used if desired. Also, each board contains an optional 0.003Ω copper trace sense resistor that can be enabled if desired. To do so, the chip sense resistor must be removed and

## Table 1. Communication Line Solder Points

| COMMUNICATION LINE   | CONNECTION POINT   |
|----------------------|--------------------|
| SDA                  | J7                 |
| SCL                  | J8                 |
| GND                  | J10                |

0Ω  jumpers  must  be  resoldered  to  change  the  circuit. Table 2 summarizes the changes. Note that the IC must be reconfigured to support the new resistor type.

## Detailed Description of Software

The  MAX17055G/MAX17055X  evaluation  kit  software gives  the  user  complete  control  of  all  functions  of  the MAX17055, as well as the ability to load a custom model into the ICs. Separate control tabs allow the user access to  view  real-time  updates  of  all  monitored  parameters. The software also incorporates a data-logging feature to monitor a cell over time.

## Software Installation

The software requires a Windows 7 or newer operating system. .NET version 4.5 is required for operation and is automatically installed if an older version of .NET framework is detected. To install the evaluation software, exit all  programs  currently  running  and  unzip  the  provided MAX17055K Installation Package zipped file.

Double click the MAX17055K\_V\_x\_x\_x\_x Install.exe icon and the installation  process  begins.  Follow  the  prompts to  complete  the  installation.  The  evaluation  software can  be  uninstalled  in  the Add/Remove programs  tool in  the Control Panel .  After  the  installation  is  complete, open the Maxim Integrated/MAX17055K folder and run MAX17055K.exe or  select  it  from  the  program  menu. Figure  2  shows  a  splash  screen  containing  information about  the  evaluation  kit  that  appears  while  program  is loading.

## Table 2. Sense Resistor Selection for MAX17055

| COMPONENT   | VALUE FOR SMD RESISTOR SENSE   | VALUE FOR BOARD TRACE SENSE   |
|-------------|--------------------------------|-------------------------------|
| R3          | 0Ω                             | Not populated                 |
| R4          | Not populated                  | 0Ω                            |
| R5          | Desired sense value            | Not populated                 |
| R6          | Not populated                  | 0Ω (R7 is trace resistor)     |

## MAX17055 Evaluation Kit

## Communication Port

The  EV  kit  software  automatically  finds  the  DS91230+ adapter when connected to any USB port. Communication status is shown on the right-hand side of the bottom status bar. See Figure 3. If the adapter cannot be found, a 'No USB Adapter' message is displayed. If the adapter is found, but the EV kit board cannot be found, a 'No Slave Device' message is displayed. Otherwise, if communication is valid, a green bar updates as the software continuously reads the IC registers.

If  the  DS91230+ is connected, the status bar should be active.  The  bottom  status  bar  also  displays  information on hibernation status, IC serial number, selected currentsense  resistor  value,  selected  battery  profile,  and  IC's firmware revision.

## Battery Selector

The  MAX17055  must  always  have  a  battery  profile  for the battery it is presently fuel gauging. The first time the MAX17055K software is run, the Battery Selector Form opens automatically to allow the user to set up the first profile. Afterwards,  the  user  can  launch  the  form  either from the Configure tab or the Device pull-down menu. A new profile should be created for each individual battery monitored by the IC. Care should also be taken to always have  the  correct  profile  selected  for  the  battery  that  is attached to the IC so that the fuel gauge is accurate and that save and restore information is properly maintained. Battery  profile  files  are  stored  under My  Documents/ Maxim  Integrated/MAX17055/Batteries .  Custom  .INI files are also automatically copied by the program to this location as well.

Figure 2. EV Kit Splash Screen

<!-- image -->

Figure 3. EV Kit Bottom Status Bar

<!-- image -->

Evaluates: MAX17055

│

## MAX17055 Evaluation Kit

Figure 4 shows the format of the Battery Selector Form. To  change  known  batteries,  the  user  should  select  the proper  battery  profile  from  the  pull-down  box  and  then click Save Profile and Update IC . To create a profile for a new battery, follow these steps:

- 1) Select a new profile number from the Battery Profile pull-down box.
- 2) Give the profile a detailed description so that it can easily be matched to its battery.
- 3) If no custom .INI file has been created, select the Use Default IC Settings (EZ Config) option and fill out the five settings for your application. Proceed to Step 5.
- 4) If a custom .INI file has been provided by Maxim, select Load INI File option and select the file.
- 5) Select to restore battery history data after model load or not to.
- 6) Click Save Profile and Update IC to load the model and exit the form.

Figure 4. Battery Selector Form

<!-- image -->

Evaluates: MAX17055

If  the user ever wishes to delete a battery profile, select the profile number from the drop-down box and then click Delete Profile to remove it permanently.

│

## MAX17055 Evaluation Kit

## Program Tabs

All  functions of the program are divided under four tabs in  the  main  program  window.  Click  on  the  appropriate tab  to  move  to  the  desired  function  page.  Located  on the ModelGauge m5 tab is the primary user information measured  and  calculated  by  the  IC.  The Graphs tab visually  displays  fuel  gauge  register  changes over time. The Registers tab allows the user to modify common fuel gauge registers one at a time. The Configure tab allows for special operations such as initiating fuel gauge logging and performing fuel gauge reset. All tabs are described in more detail in the following sections.

## ModelGauge m5 Tab

The ModelGauge m5 tab  displays  the  important  output information read from the IC. Figure 5 shows the format of  the  ModelGauge  m5  Tab.  Information  is  grouped  by function and each is detailed separately.

## State of Charge

The State of Charge group box displays the main output information  from  the  fuel  gauge:  state  of  charge  of  the cell, remaining capacity, time to full, and time to empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age, internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

Figure 5. ModelGauge m5 Tab

<!-- image -->

│

## MAX17055 Evaluation Kit

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine state of charge.

## Alerts

The Alerts group  box  tracks  all  eleven  possible  alert trigger  conditions.  If  any  alert  occurs,  the  corresponding checkbox is checked for the user to see. The clear alerts button resets all alert flags. The configure button allows the alert threshold settings to be changed by the user. Figure 6 shows the Alerts Configuration application form.

## At Rate

The At Rate group box allows user to input a hypothetical  load  current  and  the  fuel  gauge  calculates  the  corresponding  hypothetical  Qresidual,  TTE,  AvSOC,  and AvCap values.

## Graphs Tab

The Graphs tab  displays  up  to  13  fuel  gauge  outputs. Figure  7  shows  the  format  of  the Graphs tab.  Graph information  is  grouped  into  four  categories:  voltages, temperatures,  capacities,  and  currents.  The  user  can turn on or off any data series using the check boxes on the right-hand side of the tab. The graph visible viewing area can be adjusted from 10 minutes up to 1 week. The graphs remember up to 1 week worth of data. If the viewing area is smaller than the time range of the data already collected, the scroll bar below the graphs can be used to scroll through graph history. All graph history information is  maintained  by  the  program.  Graph  settings  can  be changed at any time without losing data.

Figure 6. Alerts Configuration Form

<!-- image -->

│

Figure 7. Graphs Tab

<!-- image -->

## MAX17055 Evaluation Kit

## Registers Tab

The Registers tab  allows  the  user  access  to  all  fuel gauge related registers of the IC. Figure 8 shows the format of the Registers tab. By using the drop-down menu on the left side of the tab, the user can sort the registers either by function or by their internal address. Each line of  data  contains  the  register  name,  register  address,

hexadecimal representation of the data stored in the register, and if applicable a conversion to application units. To write a register location click on the button containing the register name. A pop-up window allows the user to enter a  new  value  in  either  hexadecimal  units  or  application units.  The  main  read  loop  temporarily  pauses  while  the register updates.

Figure 8. Registers Tab

<!-- image -->

│

## MAX17055 Evaluation Kit

The Registers tab  has  a  button  to  launch  the  register viewer form. The viewer can also be launched under the Device  pull-down  menu.  The  register  viewer  is  a  separate  application  window  that  allows  systems  with  higher screen resolutions to see more IC registers simultaneously.

## Evaluates: MAX17055

A 1920 x 1080 screen resolution allows the user to view all user registers at once on the screen with the register viewer. The viewer size can be adjusted. Figure 9 shows the format of the register viewer form.

Figure 9. Register Viewer Form

<!-- image -->

│

## MAX17055 Evaluation Kit

## Configure Tab

The Configure tab allows the user to access any general IC  functions  not  related  to  normal  writing  and  reading

of  register  locations.  Figure  10  shows  the  format  of  the Configure tab. Each group box of the Configure tab is described in detail in the following sections.

Figure 10. Configure Tab

<!-- image -->

│

## MAX17055 Evaluation Kit

## Log Data to File

Data  logging  is  always  active  when  the  kit  software starts.  The  default  data  log  storage  location  is  the My Documents/Maxim Integrated/MAX17055/Data Logs/ DatalogXXXXXX.csv  where  XXXXXX  is  the  data  log number. Each time the program is started, the previous data  log  reaches  10,000  lines,  or  the  user  clicks  the Advance button, a new data log is started and the data log number is advanced. The user can stop or start data logging by clicking the Stop/Start button. All user available IC registers are logging in a .csv formatted file. The user can adjust the logging interval at any time. The user can also enable or disable the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not part of the normal read data  loop  and  indicates  any  time  communication  to  the IC is lost.

## Battery Selection

The battery selection box shows which battery profile is presently selected and the user description of that profile. Clicking  the Change Battery button  opens  the Battery Selector  Form to  allow  the  user  to  change  the  active profile, create a new profile, or delete old profiles. See the Battery Selector section for details.

## Other Settings

The  other  settings  box  allows  the  user  to  change  the sense resistor setting and select either internal or external temperature measurement. All capacity and current type registers use the sense resistor value to convert voltage

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com/en-us  |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com |
| Vishay                                 | 402-563-6866 | www.vishay.com        |

Note:

Indicate that you are using the MAX17055 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE              |
|-----------------|-------------------|
| MAX17055GEVKIT# | EV Kit (for TDFN) |
| MAX17055XEVKIT# | EV Kit (for WLP)  |

# Denotes RoHS compliant.

## Evaluates: MAX17055

to current and updates occur immediately when the sense resistor value is changed.

## Reset IC

Clicking  the POR button  starts  the  IC  firmware  reset sequence. Operation of the IC is restarted. If the associated check box is checked, IC settings such as the battery model, thermistor selection, and alert thresholds are reloaded into the IC. It is recommended this box always remained checked. Note that resetting the IC when the cell is not relaxed causes a temporary fuel gauge error.

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

## Save and Restore

The  EV  kit  software  periodically  saves  the  values  from registers related to cell characteristics that change over time. These values are then restored into an IC after reset so that the fuel gauge remains accurate as the cell ages. The  software  automatically  performs  a  save  operation every 64% of one cycle or when the software exits. The user can change the save interval or force a save operation at any time by clicking the Save button. To restore this information after the IC has been power cycled or reset through software, click the Restore button.

│

## MAX17055G EV System Bill of Materials

| PART             |   QTY | DESCRIPTION                                      |
|------------------|-------|--------------------------------------------------|
| C1               |     1 | 0.1uF ±10%, 16V X7R ceramic capacitor (0402)     |
| C2               |     1 | 0.47uF ±10%, 16V X5R ceramic capacitor (0402)    |
| R1, R3           |     2 | 0Ω resistor (0402)                               |
| R2               |     1 | 10kΩ ±1%, resistor (0402)                        |
| R4               |     1 | 0Ω resistor (0402), not populated                |
| R5               |     1 | 0.010Ω ±1%, resistor (0805)                      |
| R6               |     1 | 0Ω resistor (0805), not populated                |
| R8-R10, R12, R13 |     5 | 150Ω ±1%, resistor (0402)                        |
| R11              |     1 | 1KΩ ±1%, resistor (0402)                         |
| RT1              |     1 | Thermistor 10K NTC (0402) Murata NCP15XH103F03RC |
| D1               |     1 | Diode, LED Red (0603)                            |
| D2-D4            |     3 | 5.6V Zener Diode (SOD323)                        |
| J1-J8, J10       |     9 | Plated through hole solder pad (16g wire)        |
| J9               |     1 | RJ-11,R/A,6-POSITION/6-CONTACTS                  |
| U1               |     1 | MAX17055ETB+ Li+ fuel gauge IC 2x2.5 TDFN 10 pin |
|                  |     1 | PCB: MAX17055EVKIT                               |
|                  |     1 | USB-to-RJ11 board DS91230+                       |
|                  |     1 | RJ11 6pos-6pos reverse modular cord 6ft.         |

│

Evaluates: MAX17055

## MAX17055G EV System Schematic

<!-- image -->

│

Evaluates: MAX17055

## MAX17055G EV System PCB Layout

Component Placement

<!-- image -->

Top Layout

<!-- image -->

Bottom Layout

<!-- image -->

│

## MAX17055X EV System Bill of Materials

| PART             |   QTY | DESCRIPTION                                      |
|------------------|-------|--------------------------------------------------|
| C1               |     1 | 0.1uF ±10%, 16V X7R ceramic capacitor (0402)     |
| C2               |     1 | 0.47uF ±10%, 16V X5R ceramic capacitor (0402)    |
| R1, R3           |     2 | 0Ω resistor (0402)                               |
| R2               |     1 | 10kΩ ±1%, resistor (0402)                        |
| R4               |     1 | 0Ω resistor (0402), not populated                |
| R5               |     1 | 0.010Ω ±1%, resistor (0805)                      |
| R6               |     1 | 0Ω resistor (0805), not populated                |
| R8-R10, R12, R13 |     5 | 150Ω ±1%, resistor (0402)                        |
| R11              |     1 | 1KΩ ±1%, resistor (0402)                         |
| RT1              |     1 | Thermistor 10K NTC (0402) Murata NCP15XH103F03RC |
| D1               |     1 | Diode, LED Red (0603)                            |
| D2-D4            |     3 | 5.6V Zener Diode (SOD323)                        |
| J1-J8, J10       |     9 | Plated through hole solder pad (16g wire)        |
| J9               |     1 | RJ-11,R/A,6-POSITION/6-CONTACTS                  |
| U1               |     1 | MAX17055EWL+ Li+ fuel gauge IC WLP 9 pin         |
|                  |     1 | PCB: MAX17055XEVKIT                              |
|                  |     1 | USB-to-RJ11 board DS91230+                       |
|                  |     1 | RJ11 6pos-6pos reverse modular cord 6ft.         |

│

Evaluates: MAX17055

## MAX17055X EV System Schematic

<!-- image -->

│

Evaluates: MAX17055

## MAX17055X EV System PCB Layout

Component Placement

<!-- image -->

Top Layout

<!-- image -->

Bottom Layout

<!-- image -->

│

## MAX17055 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17055