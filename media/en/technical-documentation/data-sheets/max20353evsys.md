<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX20353

## General Description

The MAX20353 evaluation system (EV system) is a fully assembled and tested circuit board that demonstrates the MAX20353 ultra-low-power wearable power-management integrated circuit (PMIC). The MAX20353 includes voltage regulators  such  as  bucks,  boost,  buck-boost  and  linear regulators,  and  a  complete  battery  management solution with battery seal, charger, power path and fuel gauge.

The  MAX20353 EV system comes with the  MAX20353 board,  the  MAXPICO2PMB#  board,  and  two  micro-B cables. The EV system comes with the MAX20353AEWN+ installed. The MAX20353 is configurable through an I 2 C interface  that  allows  for  programming  various  functions and reading the device status. The EV system GUI application sends commands to the MAXPICO2PMB# adapter board to configure the device.

## Features

- USB Power Option
- Flexible Configuration
- On-Board LED Current Sink and Battery Simulation
- Sense Test Point for Output-Voltage Measurement
- Filter Test Point for Haptic Waveform Measurement
- Windows® 8/10-Compatible GUI Software
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Windows is a registered trademark of Microsoft Corporation.

©

## MAX20353 Evaluation System

## EV System Contents

- MAX20353 EV system
- MAXPICO2PMB# board
- Two USB A-to-USB micro-B cables

## EV System Contents

| FILE                       | DESCRIPTION    |
|----------------------------|----------------|
| MAX20353EVKitSetupVxxx.exe | PC GUI Program |

## MAX20353 EV System Board Pic

<!-- image -->

319-100692; Rev 3; 1/22

owners.

## MAX20353 Evaluation System

## Quick Start

## Required Equipment

Note: In the following sections, text in bold refers to items directly from the EV system software installation.

- MAX20353 EV system
- Windows PC with USB ports
- One USB A-to-USB Micro-B Cable and MAXPICO2PMB# adapter board
- One USB A-to-USB Micro-B Cable or Power Supply (for battery simulation or battery voltage)
- (Optional) One USB A-to-USB Micro-B Cable or Power Supply (for charger input CHGIN)
- One voltmeter

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV system software, MAX20353EVKitSetupVxxx.zip located on the MAX20353 EV system web page. Download the EV system software to a temporary folder and unzip the zip file.
- 2) Install the EV system software on your computer by running the MAX20353EVKitSetupVxxx.exe program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the type-A end of a cable to the PC and micro-USB end of a cable to the MAXPICO2PMB# board, and connect the MAXPICO2PMB# to J13 located on the lower left of the EV system board.
- 5) Connect a USB A-to-micro-B cable from the computer to J21 on the upper-right corner of the EV system board to use USB VBUS to power the battery simulation circuits on the board, or to power the battery simulation circuits from the VHC test point. (The user can also use a Li-ion battery or power source to evaluate the device if not using the battery simulation circuits. Connect the battery or power source to J2 on the EV system board. Skip step 6 if not using the battery simulation.)
- 6) Use a voltmeter to check that VHC is about 5V and the BATSIM test point is about 3.7V. To adjust the BATSIM voltage, turn the R48 BATSIM potentiometer. Place a shunt on J15, then confirm that TP BAT is equal to the BATSIM voltage.
- 7) On the computer, open the MAX20353 GUI. It should look like Figure 1; the status bar on the bottom displays MAX20353 Not Found .
- 8) Press the PB1 ( KIN ) button until the device enters ON mode. The GUI then shows Connected and the registers are read and displayed (Figure 2).
- 9) The EV system is now ready for additional evaluation.
- 10)  To evaluate the battery charger, the user can shunt J10 and plug in a USB micro-B cable to J1 of the EV system to use the USB VBUS power, or externally supply the charging power on TP CHGIN.

## Evaluates: MAX20353

Figure 1. MAX20353 Not Found Status

<!-- image -->

## MAX20353 Evaluation System

Figure 2. MAX20353 Connected Status

<!-- image -->

## Detailed Description of Software

## Software Startup

Upon starting the program, the EV system software automatically searches for the USB interface circuit and then for the IC device addresses. The EV system enters normal operating mode when the connection is established and addresses are found. If  the  USB  connection  is  not detected, the status bar displays Munich 2 Not Found . If the USB connection is detected, but the MAX20353 is not found, the status bar shows MAX20353 Not Found .

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 3) is located at the top of the GUI window. This bar is comprised of File , Device , Options ,  and Help menus whose functions are detailed in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or disconnect the EV system to the GUI. The Advanced → Use USB2PMB2# option should be checked if using with the USB2PMB2# adapter board.

## Options Menu

The Options menu provides several settings  to  access more features offered by the GUI. The Disable Polling option lets  the  user  read  the  registers  manually  instead of  getting  automatically  frequent  register  updates  from the IC. The Disable Fuel Gauge option allows the user to set the fuel gauge to sleep mode through the I 2 C and the  quiescent  current  decreases  when  setting  the  fuel gauge  to  sleep  mode.  The Disable  Automatic  Haptic Configuration option allows the user to disable automatic setting  from  the  GUI.  Otherwise,  the  GUI  automatically sets  some  recommended  default  configurations  to  the haptic driver configuration registers as in Table 199 in the MAX20353 data sheet .

## MAX20353 Evaluation System

## Help Menu

The Help menu  contains  the About option,  which  displays the GUI splash screen indicative of the GUI version being used.

## Tab Controls

The  MAX20353  EV  system  software  GUI  provides  a convenient  way  to  test  the  features  of  the  MAX20353. Each tab contains controls relevant to various blocks of the  device.  Changing  these  interactive  controls  triggers a write operation to the MAX20353 to update the register Evaluates: MAX20353

contents.  The Read All  Registers button  reads  all  the configuration registers that are visible on the current tab page. All statuses are polled continuously. The polling feature can be disabled in the Options section of the menu bar by selecting Disable Polling .

## General Tab

The General tab  (Figure  4)  provides  information  on device info, set power reset command, enable LEDs, and LED current sink setting, MON setting, PFNs, and MPCs status and configuration.

Figure 3. The ToolStrip Menu Items

<!-- image -->

Figure 4. General Tab

<!-- image -->

│

## MAX20353 Evaluation System

## Boost Tab

In the Boost tab (Figure 5), the user can enable boost, set boost voltage, and inductor current settings.

Figure 5. Boost Tab

<!-- image -->

## MAX20353 Evaluation System

## Buck1/2 Tab

In the Buck1 and Buck2 tabs (Figures 6 and 7), the user can enable bucks, set buck voltages, inductor current settings, DVS mode and voltage setting, and some additional settings.

Figure 6. Buck1 Tab

<!-- image -->

## MAX20353 Evaluation System

Evaluates: MAX20353

Figure 7. Buck2 Tab

<!-- image -->

## MAX20353 Evaluation System

## LDOs Tab

The LDOs tab (Figure 8) lets the user enable LDOs, set LDO voltages, and change to load switch mode.

Figure 8. LDOs Tab

<!-- image -->

## MAX20353 Evaluation System

## Buck Boost Tab

In the Buck Boost tab (Figure 9), the user can enable buck boost, set buck boost voltage, and inductor current settings.

Figure 9. Buck Boost Tab

<!-- image -->

Evaluates: MAX20353

## MAX20353 Evaluation System

## Other DC-DC Tab

The Other DC-DC tab (Figure 10) includes the Charge Pump and SFOUT settings.

Figure 10. Other DC-DC Tab

<!-- image -->

## MAX20353 Evaluation System

## Haptic Tab

The Haptic tab (Figure 11) lets the user choose the actuator type, haptic driver mode, and different settings for each mode.

Figure 11. Haptic Tab

<!-- image -->

## MAX20353 Evaluation System

## Charger Tab

The Charger tab  (Figure  12)  lets  the  user  set  charger and  thermistor  monitor  configurations.  The  charger  and thermistor status section constantly polls the charger and Evaluates: MAX20353

thermistor status and displays any changes. The polling happens even when the Charger tab is not selected. The polling  can  be  disabled  by  selecting Disable Polling in the Options menu at the top of the application.

Figure 12. Charger Tab

<!-- image -->

│

## MAX20353 Evaluation System

## Register Map Tab

The Register Map tab allows for the configuration of all I 2 C  registers  and  AP  Commands,  including  those  not configurable in other tabs. In the top right corner of the tab page, the user can select between direct I 2 C registers and AP commands.

For direct I 2 C (Figure 13), the register to be read from or written to can be selected in the left table. The right table contains descriptions for each register field of the select- Evaluates: MAX20353

ed 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

To set a bit, click the bit label. Bold text represents logic 1  and  regular  text  represents  logic  0.  To  configure  the changes to the device, click the Write button at the bottom right.

The user can click Read All to perform a burst read of all registers.

Figure 13. Register Map Tab Direct I 2 C

<!-- image -->

│

## MAX20353 Evaluation System

For AP commands (Figure 14), the left table is populated with  all  AP  commands  in  the  order  of  their  operation codes. When an AP command is selected, its APDataOut/ In registers expand under it. Selecting an APData register shows the individual bit descriptions and allows the user to read/write individual bits just like the direct I 2 C option. After writing or before reading the APData registers, the user  can  send  the  operation  code  for  the  selected  AP

## Evaluates: MAX20353

command by clicking the Send Opcode button at the bottom right of the tab page.

A  common  action  when  sending  AP  commands  manually is to send a read opcode, modify one specific setting (like  VSet  or  BstEn),  then  send  the  corresponding write opcode.  To  speed  up  this  read/modify/write  action,  the APDataIn to APDataOut button in the top left of the tab page can copy all APDataIn registers to the APDataOut registers.

Figure 14. Register Map Tab AP Commands

<!-- image -->

│

## MAX20353 Evaluation System

## Status Tab

The Status tab (Figure 15) shows the user the state of the interrupt  registers,  INT0-INT2,  and  the  status  registers, Status0-Status3. The Read Interrupts button  reads  all Evaluates: MAX20353

INT and STATUS registers and updates the text color to teal to indicate a 1 was read. Interrupt polling can be disabled by selecting Disable Polling in the Options menu at the top of the application.

Figure 15. Status Tab

<!-- image -->

│

## MAX20353 Evaluation System

## Detailed Description of Hardware

The  MAX20353  EV  system  evaluates  the  MAX20353 ultra-low-power  wearable  PMIC,  which  communicates over  the  I 2 C  interface.  The  EV  system  demonstrates the  IC  features  such  as  boost,  bucks,  linear  regulators, buck-boost, LED current sink, battery charger, and haptic Evaluates: MAX20353

driver. The EV system uses the IC in a 56-bump waferlevel  package on a proven, four-layer PCB design. The EV system can use USB VBUS +5V DC for battery and charger input-power source. Alternatively, the EV system can be powered from an external power supply. Figure 16 shows the EV system block annotated pictures (see the MAX20353 EV System Board Pic ).

Figure 16. MAX20353 EVSYSKIT Block Annotated Picture

<!-- image -->

│

## Hardware Setup

To  use  the  EV  system  with  the  GUI,  connect  the MAXPICO2PMB2#  to  the  PMOD  connector  in  the  bottom left corner of the board. The MAXPICO2PMB2# also provides 3.3V to the logic voltage VIO of the EV system when shunting J20. The user can use J21 USB VBUS to power the battery simulation circuits on the EV system to supply BAT of the IC. Turning the R48 potentiometer can change the BATSIM voltage. Connect BATSIM to BAT of the IC with a shunt on J15. Alternatively, instead of using battery simulation circuits on the board, the user can connect their Li-ion battery on the J2 connector. The user can use the J1 USB VBUS as the CHGIN source and place a shunt on J10.

## PFNs and MPCs States

The PFNs and MPCs can be pulled up to VIO through a 100kΩ resistor, or connected to ground through a 100kΩ resistor.

## Regulators and Peripherals

All  regulator  outputs  are  made  available  on  test  points. The  inputs  to  the  LDO1,  and  LDO2  must  be  supplied externally through test points. Bucks, buck-boost, boost, and charge pump outputs have sense test points which provide easy voltage measuring.

## Thermistor and SET Adjustment

When the J4 shunt is installed, THM is pulled up to TPU through a 10kΩ resistor. Header J5 is used to select the pull-down resistor for THM. When pin 1 and 2 is shunted, potentiometer  R31  is  used  to  simulate  a  thermistor  at THM. When pin 2 and 3 is shunted, a fixed 10kΩ resistor is connected between THM and ground.

Header J19 is used to select the resistor for R ISET , which sets the fast charge current (I FCHG ). Shunting pin 1 and 2  selects  potentiometer  R33  and  the  user  can  change RISET  to change I FCHG . Shunting pin 2 and 3 selects a fixed 39kΩ resistor, which sets the fast charge current to 51mA.

## INT and RST LED Indicators

Shunts can be installed on J11 and J12 to show the status of INT and RST as LED indicators, DS2 and DS3. When the corresponding LED luminates, it means the active-low output is pulled low.

## Haptic Driver

The haptic driver output is on J3 where an LRA or ERM vibration motor can be connected. By shunting J24 and J25, the user can measure the haptic waveform with the on-board low-pass filters, which convert PWM to a sine wave.

## LED Current Sink

The EV system includes multiple LEDs to test the LED0, LED1,  and  LED2  current  sinks.  The  current  source  for LED1  and  LED2  can  be  connected  to  SYS  by  shunting  J14.  The  current  source  for  LED0  can  be  selected between SYS and BSTOUT by J23. Using J24, the user can select between sinking the current from one LED or three LEDs for LED0.

## Jumper Setting

Table  1  shows  the  detailed  jumper  setting,  and Table  2 shows the connector description.

## Fuel Gauge Software

The MAX20353 integrates the MAX17048, a fuel gauge IC which implements the Maxim ModelGauge™ algorithm. Use the MAX20353 Fuel Gauge GUI and MAXPICO2PMB to evaluate the ModelGauge™ fuel gauge.

## Software Installation

Visit https://www.maximintegrated.com to  download the  latest  version  of  the  Fuel  Gauge  EV  kit  software, MAX20353FuelGaugeSetupVxxx.zip located on the MAX20353 EV Kit web page. Download the software to a temporary folder and unzip the zip file. Install the Fuel Gauge EV kit software on your computer by running the MAX20353FuelGaugeSetupVxxx.exe program inside the temporary folder.

## Hardware Setup

The following procedure applies to the MAX20353 EVKIT:

- 1) Connect the MAXPICO2PMB Adapter Board to J13 of the MAX20353 EVKIT.
- 2) Connect jumper J10 and remove jumper J15.
- 3) Connect the application's battery to jumper J2 and ensure the battery's polarity connection.
- 4) Connect the MAXPICO2PMB Adapter Board to the computer USB port via USB A to USB Micro-B cable.

## MAX20353 Evaluation System

## Table 1. Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                         |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------|
| J4       | 1-2*             | Connect THM to TPU for thermistor monitoring                                                                        |
| J5       | 1-2              | Connect THM to a potentiometer                                                                                      |
| J5       | 2-3*             | Connect THM to 10kΩ (50%/room zone)                                                                                 |
| J6       | 1-2              | Pull down MPC3 to ground                                                                                            |
| J6       | 1-3              | Connect MPC3 connect to GPIO4                                                                                       |
| J6       | 1-4              | Pull up MPC3 to VIO                                                                                                 |
| J7       | 1-2              | Pull down MPC2 to ground                                                                                            |
| J7       | 1-3              | Connect MPC2 to GPIO3                                                                                               |
| J7       | 1-4              | Pull up MPC2 to VIO                                                                                                 |
| J8       | 1-2              | Pull down MPC1 to ground                                                                                            |
| J8       | 1-3              | Connect MPC1 to GPIO2                                                                                               |
| J8       | 1-4              | Pull up MPC1 to VIO                                                                                                 |
| J9       | 1-2              | Pull down MPC0 to ground                                                                                            |
| J9       | 1-3              | Connect MPC0 to GPIO1                                                                                               |
| J9       | 1-4              | Pull up MPC0 to VIO                                                                                                 |
| J10      | 1-2              | Connect CHGIN to USB VBUS from J1                                                                                   |
| J11      | 1-2*             | Connect INT to pull up VIO and DS2                                                                                  |
| J12      | 1-2*             | Connect RST to pull up VIO and DS3                                                                                  |
| J14      | 1-2              | Supply LED1/LED2 from SYS voltage                                                                                   |
| J15      | 1-2              | Connect BATSIM to BAT                                                                                               |
| J16      | 1-2              | Pull up MPC4 to VIO                                                                                                 |
| J16      | 2-3              | Pull down MPC4 to ground                                                                                            |
| J17      | 1-2              | Pull up PFN2 to VIO                                                                                                 |
| J17      | 2-3              | Pull down PFN2 to ground                                                                                            |
| J18      | 1-2              | Pull up PFN1 to VIO                                                                                                 |
| J18      | 2-3              | Pull down PFN1 to ground                                                                                            |
| J19      | 1-2              | Connect SET to potentiometer                                                                                        |
| J19      | 2-3*             | Connect SET to 39kΩ (fast charge current 0.05A)                                                                     |
| J20      | 1-2*             | Connect VIO to 3.3V from PMOD                                                                                       |
| J22      | 1-2*             | Connect VHC to USB VBUS from J21                                                                                    |
| J23      | 1-2              | Supply LED0 from SYS                                                                                                |
| J23      | 2-3              | Supply LED0 from BSTOUT                                                                                             |
| J24      | 1-2              | Connect DRP to a low-pass filter, which converts PWM to a sine wave. The measures are a filtered waveform at DRP_F. |
| J25      | 1-2              | Connect DRN to a low-pass filter, which converts PWM to a sine wave. The measures are a filtered waveform at DRN_F. |
| J26      | 1-2              | Connect LED0 to one LED                                                                                             |
| J26      | 2-3              | Connect LED0 to three LEDs                                                                                          |
| J39      | 1-2 2-3          | Connect SDAto ground Connect SCL to ground                                                                          |

Evaluates: MAX20353

## MAX20353 Evaluation System

## Table 2. Connectors Description

| CONNECTOR   | DESCRIPTION                                     |
|-------------|-------------------------------------------------|
| J1          | Connect to the USB cable for CHGIN voltage      |
| J2          | Connect to Battery                              |
| J3          | Connect to the LRA/ERM haptic actuator          |
| J13         | Connect to MAXPICO2PMB2#                        |
| J21         | Connect to the USB cable for battery simulation |

Evaluates: MAX20353

## Communication Port

The Fuel Gauge  software automatically finds the MAXPICO2PMB  adapter  when  connected  to  any  USB port. Communication status is shown on the left-hand side of the bottom status bar. See Figure 17. If communication is valid, a green bar updates as the software continuously reads the IC registers.

## Main Window

Most  major  functionality  is  available  from  the  main window. (see Figure 18).

Figure 17. Bottom Status Bar

<!-- image -->

Figure 18. Main Window

<!-- image -->

## MAX20353 Evaluation System

## Loaded Custom Model

This  group  displays  any  custom  model  that  has  been loaded onto the part by the software. If the device resets, this model is automatically reloaded. If you are using the default model, nothing is displayed here. Any changes to the configuration file are not reloaded automatically.

## Start Data Log

This group displays the file path to which the software is recording the registers. If this box is blank, no file is being saved.

## RCOMP Configuration

You can enter a byte here and press the Write RCOMP button to write it to the device. This is not the same as writing the value into the register map, because RCOMP is part of a larger 2-byte register.

If  you  have  a  custom  model,  you  can  also  change  the temperature, which adjusts the fuel gauge for proper temperature  performance.  Changing  this  value  immediately calculates a new value of RCOMP and displays it in the box. This value is not written to the device until you press the Write  RCOMP button.  A  change  to  RCOMP  is  not reflected in the temperature.

## Registers Tab

Notation used for name and address should be familiar to  C  programmers  with  one  small  change.  The  register map lists:

- Register Name: A dot indicates that a single address has multiple meanings. This is similar to how the C firmware might access the bits.
- Command/Address: A colon indicates the 0-indexed location, not the size of the bit field. A colon indicates a range of values (e.g., 0x0C[0:4] is a 5-bit value, offset 0 bits at address 0x0C).
- Value: The raw hex value as read directly from the device.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20353EVSYS# | EVKIT  |

# Denotes RoHS compliant.

## Evaluates: MAX20353

- Meaning: A conversion of the raw hex value, usually with units. Alert bit flags are blank when inactive, or show text when they are alerting.
- Description: Reminders of the functionality. For full details, refer to the MAX17048/MAX17049 IC data sheet. The user can write values to the device directly through the register map. To write a raw hex value, select the cell in the Value column, overwrite the value, and press the Enter or Tab key. You will be prompted to write to the device. Normal communication will pause, and you will see a corresponding blank spot in the graph.

For  registers  with  a  conversion  factor  (e.g.,  Hibernate Threshold or VAlertMax, you can also modify the Meaning column. The software converts the value back to the raw hex value, and prompts to verify that you are writing what you expect. Remember that not all registers are writable.

## I 2 C Communication Log Tab

Here you can see a log of traffic that you initiate, as well as any time the device is programmed. It describes each step  in  detail,  including  the  particular  values  read  or written.  This  can  help  remove  uncertainty  about  how  to communicate with the device. This log does not show the standard reading events.

## Chart Tab

The chart is interactive: You can zoom into the time axis by  left-clicking  and  dragging  anywhere  in  the  plot  area. You will see the region highlighted as you drag. You can zoom out either by clicking the small button in the bottom left, or by right-clicking in the plot area. Plotted information not in a log file cannot be recovered once the application closes.  The  top  and  bottom  plots  are  synchronized  in time, so zooming one zooms the other. The y axes are fixed  scale,  and  you  cannot  modify  which  registers  are plotted, or where.

## MAX20353 EV System Bill of Materials

| ITEM   | REF_DES                                                      | QTY   | MFG PART #                                                                                                                                                     | MANUFACTURER                                                                                                                  | VALUE                         | DESCRIPTION                                                                                                                      |
|--------|--------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 1      | BATSIM, TP1-TP14                                             | 15    | 5003                                                                                                                                                           | KEYSTONE                                                                                                                      | N/A                           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;              |
| 2      | BBOUT_S, BK1OUT_S, BK2OUT_S, BSTOUT_S, CPOUT_S, DRN_F, DRP_F | 7     | 5002                                                                                                                                                           | KEYSTONE                                                                                                                      | N/A                           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                            |
| 3      | C1, C2, C5, C10, C11                                         | 5     | C1005X5R1V225M050BC                                                                                                                                            | TDK                                                                                                                           | 2.2UF                         | CAP; SMT (0402); 2.2UF; 20%; 35V; X5R; CERAMIC                                                                                   |
| 4      | C3, C4, C6, C8, C15                                          | 5     | C1005X5R0J475K050BC                                                                                                                                            | TDK                                                                                                                           | 4.7UF                         | CAP; SMT (0402); 4.7UF; 10%; 6.3V; X5R; CERAMIC                                                                                  |
| 5      | C7                                                           | 1     | C0402C273K4RAC                                                                                                                                                 | KEMET                                                                                                                         | 0.027UF                       | CAP; SMT (0402); 0.027UF; 10%; 16V; X7R; CERAMIC                                                                                 |
| 6      | C9, C13, C14, C16, C18, C19                                  | 6     | GRM188R60J226ME15                                                                                                                                              | MURATA                                                                                                                        | 22UF                          | CAP; SMT (0603); 22UF; 20%; 6.3V; X5R; CERAMIC                                                                                   |
| 7      | C12, C20                                                     | 2     | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13                                                                  | TDK;SAMSUNG ELECTRONICS;MURATA;MURATA ;MURATA                                                                                 | 10UF                          | CAP; SMT (0603); 10UF; 20%; 25V; X5R; CERAMIC                                                                                    |
| 8      | C17                                                          | 1     | GRM155R71A104KA01; C1005X7R1A104K050BB; C0402C104K8RAC                                                                                                         | MURATA;TDK;KEMET                                                                                                              | 0.1UF                         | CAP; SMT (0402); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                                   |
| 9      | C21-C26                                                      | 6     | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; | TDK;AMERICAN TECHNICAL CERAMICS;AVK;VENKEL LTD.;SAMSUNG ELECTRONICS;MURATA;TDK;YAG EO PHICOMP;TAIYO YUDEN;SAMSUNG ELECTRONICS | 0.1UF                         | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC                                                                                   |
| 10     | C27, C30                                                     | 2     | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL                                                                                        | MURATA;MURATA;MURATA;TAIY O YUDEN                                                                                             | 4.7UF                         | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                                   |
| 11     | C28                                                          | 1     | C0603C225K9PAC; GRM188R60J225KE01; C1608X5R0J225K080AB                                                                                                         | KEMET;MURATA;TDK                                                                                                              | 2.2UF                         | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X5R; CERAMIC;                                                                                 |
| 12     | C29                                                          | 1     | C0402X7R500-222KNE; GRM155R71H222KA01; C1005X7R1H222K050BA                                                                                                     | VENKEL LTD.;MURATA;TDK                                                                                                        | 2200PF                        | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                                  |
| 13     | C31                                                          | 1     | C3216X5R1C476M160AB; GRM31CR61C476ME44                                                                                                                         | TDK;MURATA                                                                                                                    | 47UF                          | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                                                    |
| 14 15  | C32 C33                                                      | 1 1   | C3216X5R1H106K160AB; GRM31CR61H106KA12 C1608X5R1H104K080AA                                                                                                     | TDK;MURATA TDK                                                                                                                | 10UF 0.1UF                    | CAP; SMT (1206); 10UF; 10%; 50V; X5R; CERAMIC CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                     |
| 16     | C34                                                          | 1     | GRM188R60J105KA01                                                                                                                                              | MURATA                                                                                                                        | 1UF                           | CAP; SMT (0603); 1UF; 10%; 6.3V; X5R; CERAMIC;                                                                                   |
| 17     | C35                                                          | 1     | C0603C475K9PAC                                                                                                                                                 | KEMET                                                                                                                         | 4.7UF                         | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X5R; CERAMIC;                                                                                 |
| 18     | C36                                                          | 1     |                                                                                                                                                                |                                                                                                                               | 0.1UF                         | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R;                                                                                           |
|        |                                                              |       | C0603C104K8RAC                                                                                                                                                 | KEMET                                                                                                                         |                               | CERAMIC                                                                                                                          |
| 19 20  | DS1-DS3, DS10 DS4, DS8, DS9                                  | 4 3   | LG L29K-G2J1-24 LTST-C171TBKT                                                                                                                                  | OSRAM LITE-ON ELECTRONICS INC.                                                                                                | LG L29K-G2J1-24 LTST-C171TBKT | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC DIODE; LED; SMD LED; BLUE; SMT (0805); PIV=5V; IF=0.020A |
| 21     | DS5-DS7                                                      | 3     | LTST-C150KRKT                                                                                                                                                  | LITE-ON ELECTRONICS INC.                                                                                                      | LTST-C150KRKT                 | DIODE; LED; STANDARD; RED; SMT (1206); PIV=2V; IF=0.02A; -30 DEGC TO +85 DEGC                                                    |
| 22     | J1, J21                                                      | 2     | ZX62D-B-5P8                                                                                                                                                    | HIROSE ELECTRIC CO LTD.                                                                                                       | ZX62D-B-5P8                   | CONNECTOR; MALE; SMT; MICRO UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 5PINS                                            |
| 23     | J2, J3                                                       | 2     | 800-10-002-10-001000                                                                                                                                           | MILLMAX                                                                                                                       | 800-10-002-10-001000          | CONNECTOR; MALE; TH; SINGLE ROW; STRAIGHT; 2PINS                                                                                 |
|        | J4, J10-J12, J14, J15, J20, J22, J24,                        |       | PBC02SAAN                                                                                                                                                      | SULLINS ELECTRONICS CORP.                                                                                                     | PBC02SAAN                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                        |
| 24     | J25                                                          | 10    |                                                                                                                                                                |                                                                                                                               |                               |                                                                                                                                  |
| 25     | J5, J16-J19, J23, J26, J39                                   | 8     | PBC03SAAN                                                                                                                                                      | SULLINS                                                                                                                       |                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                 |
| 26     | J6-J9                                                        | 4     | TSW-104-07-L-S                                                                                                                                                 | SAMTEC                                                                                                                        | PBC03SAAN TSW-104-07-L-S      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                |
| 27     | J13                                                          | 1     | PBC06DBAN                                                                                                                                                      | SULLINS ELECTRONICS CORP.                                                                                                     | PBC06DBAN                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 12PINS; 12PINS - ALTERNATE PIN NUMBERING                                  |
| 28     | L1, L4                                                       | 2     | DFE201610E-4R7M=P2                                                                                                                                             | MURATA                                                                                                                        | 4.7UH                         | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 4.7UH; TOL=+/-20%; 1.3A                                                                  |
| 29     | L2, L3                                                       | 2     | DFE201612E-2R2M                                                                                                                                                | MURATA                                                                                                                        | 2.2UH                         | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                    |
| 30     | PB1                                                          | 1     | 1825910-6                                                                                                                                                      | TE CONNECTIVITY                                                                                                               | 1825910-6                     | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; TACTILE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM; TE CONNECTIVITY                       |

Evaluates: MAX20353

## MAX20353 EV System Bill of Materials (continued)

| ITEM   | REF_DES                                                   |   QTY | MFG PART #                      | MANUFACTURER              | VALUE        | DESCRIPTION                                                                                                                                          |
|--------|-----------------------------------------------------------|-------|---------------------------------|---------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 31     | R1, R2, R19, R20, R23, R44, R49                           |     7 | CRCW040210K0FK; RC0402FR-0710KL | VISHAY DALE;YAGEO PHICOMP | 10K          | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |
| 32     | R3                                                        |     1 | ERJ-2RKF3902X; CRCW040239K0FK   | PANASONIC;VISHAY DALE     | 39K          | RES; SMT (0402); 39K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |
| 33     | R4, R6, R7, R9, R10, R12, R13, R15, R40-R43, R47, R60-R65 |    19 | ERJ-2GEJ104                     | PANASONIC                 | 100K         | RES; SMT (0402); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                   |
| 34     | R5, R8, R11, R14                                          |     4 | ERJ-2RKF1001                    | PANASONIC                 | 1K           | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                     |
| 35     | R16-R18, R21                                              |     4 | CRCW0402499RFK                  | VISHAY DALE               | 499          | RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |
| 36     | R22, R36, R37                                             |     3 | CRCW040210R0JNEDHP              | VISHAY DRALORIC           | 10           | RES; SMT (0402); 10; 5%; +/-200PPM/DEGK; 0.2000W                                                                                                     |
| 37     | R25-R30                                                   |     6 | ERJ-2RKF3000                    | PANASONIC                 | 300          | RES; SMT (0402); 300; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
| 38     | R31, R32                                                  |     2 | PV36Y105C01B00                  | MURATA                    | 1M           | RESISTOR; THROUGH-HOLE-RADIAL LEAD; PV36 SERIES; 1M OHM; 10%; 100PPM; 0.5W; TRIMMER POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM          |
| 39     | R33                                                       |     1 | CRCW04023K40FK                  | VISHAY DALE               | 3.4K         | RES; SMT (0402); 3.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                   |
| 40     | R45, R46                                                  |     2 | WSL0805R1000FEA18               | VISHAY DALE               | 0.1          | RES; SMT (0805); 0.1; 1%; +/-75PPM/DEGC; 0.1250W                                                                                                     |
| 41     | R48                                                       |     1 | 3296Y-1-253LF                   | BOURNS                    | 25K          | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 25K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
| 42     | R51                                                       |     1 | ERJ-2GE0R00                     | PANASONIC                 | 0            | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                          |
| 43     | R52                                                       |     1 | ERJ-2RKF5100                    | PANASONIC                 | 510          | RES; SMT (0402); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
| 44     | R59                                                       |     1 | ERJ-2RKF1152                    | PANASONIC                 | 11.5K        | RES; SMT (0402); 11.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |
| 45     | SPACER1-SPACER4                                           |     4 | 9032                            | KEYSTONE                  | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                            |
| 46     | TP15-TP19                                                 |     5 | 5000                            | KEYSTONE                  | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                     |
| 47     | TP20-TP31                                                 |    12 | 5001                            | KEYSTONE                  | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                   |
| 48     | U1                                                        |     1 | MAX20353                        | MAXIM                     | MAX20353     | EVKIT PART- IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE; WLP 56 PINS; 0.5MM PITCH; PKG. CODE: W563A4+1; PKG. OUTLINE: 21- 100104         |
| 49     | U2                                                        |     1 | OPA569AIDWPR                    | TEXAS INSTRUMENTS         | OPA569AIDWPR | IC; AMP; RAIL-TO-RAIL I/O; POWER AMPLIFIER; WSOIC20-EP 300MIL                                                                                        |
| 50     | U3                                                        |     1 | MAX8880EUT+                     | MAXIM                     | MAX8880EUT+  | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                                |
| 51     | U4                                                        |     1 | NC7WZ07P6X                      | FAIRCHILD SEMICONDUCTOR   | NC7WZ07P6X   | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                             |
| 52     | PCB                                                       |     1 | MAX20353SYS                     | MAXIM                     | PCB          | PCB:MAX20353SYS                                                                                                                                      |
| 53     | MISC1, MISC2                                              |     2 | 3025010-03                      | QUALTEK ELECTRONICS CORP  | 3025010-03   | CONNECTOR; MALE; USB-A_MINI-B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN                                                                        |
| 54     | MISC3                                                     |     1 | MAXPICO2PMB#                    | MAXIM                     | MAXPICO2PMB# | ACCESSORY; BRD; PACKOUT; PICO2PMB ADAPTER BOARD                                                                                                      |
| TOTAL  |                                                           |   182 |                                 |                           |              |                                                                                                                                                      |

Evaluates: MAX20353

## MAX20353 Evaluation System

## MAX20353 EV System Schematic

<!-- image -->

Evaluates: MAX20353

## MAX20353 EV System Schematic (continued)

<!-- image -->

## MAX20353 EV System Schematic (continued)

<!-- image -->

## MAX20353 Evaluation System

## MAX20353 EV System PCB Layout

MAX20353 EV System -Silkscreen Top

<!-- image -->

MAX20353 EV System -GND Layer

<!-- image -->

MAX20353 EV System -Top Layer

<!-- image -->

MAX20353 EV System -SYS Layer

<!-- image -->

│

## MAX20353 Evaluation System

## MAX20353 EV System PCB Layout (continued)

MAX20353 EV System -Bottom Layer

<!-- image -->

MAX20353 EV System -Silkscreen Bottom

<!-- image -->

│

## MAX20353 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                             | PAGES CHANGED    |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
|                 0 | 3/21            | Initial release                                                                                                                                                                         | -                |
|                 1 | 4/21            | Updated the Bill of Materials, Schematic, and PCB Layout Diagram sections                                                                                                               | 21-28            |
|                 2 | 8/21            | Updated General Description , EV System Contents , Quick Start , and Detailed Description of Software sections, Figures 1, 2, and 4-15, and Bill of Materials; Added Fuel Gauge section | 1-16, 18, 20, 23 |
|                 3 | 1/22            | Updated Hardware Setup section and Table 2                                                                                                                                              | 18, 20           |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX20353