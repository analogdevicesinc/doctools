<!-- lastmod 2022-08-05 -->
## MAX20360 Evaluation Kit

## General Description

The MAX20360 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20360 ultra low-power wearable power management integrated circuit  (PMIC).  The  MAX20360  includes  voltage  regulators such as bucks, boost, buck-boost, and linear regulators,  and  a  complete  battery  management  solution  with battery seal, charger, power path, and fuel gauge.

The device is configurable through an I 2 C interface that allows  for  programming  various  functions  and  reading  device  status.  The  EV  kit  GUI  application  sends commands  to  the  MAXPICO2PMB#  adapter  board  to configure the device.

The  MAX20360EVKIT#  has  no  harvester  feature.  The MAX20360HEVKIT# has a harvester feature enabled and can be connected to MAX20361EVKIT# to evaluate the interaction between the two devices.

## Features

- USB Power Option
- Flexible Configuration
- On-Board LED Current Sink and Battery Simulation
- Sense Test Point for Output-Voltage Measurement
- Filter Test Point for Haptic-Waveform Measurement
- Windows ®  8/Windows 10-Compatible GUI Software
- Fully Assembled and Tested

## EV Kit Contents

- MAX20360 EV kit
- MAXPICO2PMB# board
- Two USB A to USB micro-B cables

## EV Kit Files

| FILE                       | DESCRIPTION    |
|----------------------------|----------------|
| MAX20360EVKitSetupVxxx.exe | PC GUI Program |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and service mark of Microsoft Corporation.

Evaluates: MAX20360

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of EV kit software.

- MAX20360 EV kit
- Windows PC with USB ports
- One USB A to USB micro-B cable and MAXPICO2PMB# adapter board
- One USB A to USB micro-B cable or power supply (for battery simulation or battery voltage)
- Optional one USB A to USB micro-B cable or power supply (for charger input CHGIN)
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. To verify board operation, follow these steps:

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV kit software, MAX20360EVKitSetupVxxx.zip located on the MAX20360 EV Kit web page. Download the EV kit software to a temporary folder and unzip the zip file.
- 2) Install the EV kit software on your computer by running the MAX20360EVKitSetupVxxx.exe program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the type-A end of a cable to the PC and micro-USB end of a cable to MAXPICO2PMB# board, and connect the MAXPICO2PMB# to J13 located on lower left of the EV kit board.
- 5) Connect a USB A to micro-B cable from the computer to J21 on the upper right corner of the EV kit board to use VBUS to power the battery simulation circuits on the board, or power the battery simulation circuits from the VHC test point. (Use a Li-ion battery or power source to evaluate the device if not using the battery simulation circuits. Connect the battery or power source to J2 on the EV kit board. Skip step 6 if not using the battery simulation.)

<!-- image -->

## MAX20360 Evaluation Kit

- 6) Use a voltmeter to check VHC is approximately 5V; BATSIM test point is approximately 3.7V. To adjust the BATSIM voltage, turn the R58 BATSIM potentiometer. Place shunt on JP9, then confirm that TP1 CSN is the set BATSIM voltage.
- 7) On the computer, open the MAX20360 GUI. For the MAX20360EVKIT#, the status bar on the bottom displays MAX20360 Not Found
3. (Figure 1). The IC is in Seal Mode. For the MAX20360HEVKIT#, the status bar on the bottom displays Connected (Figure 2). The IC is in Battery Recovery Mode.

Evaluates: MAX20360

Figure 1. MAX20360 Not Found Status

<!-- image -->

│

## MAX20360 Evaluation Kit

- 8) Press the PB1 (/KIN) button shortly, then the device enters ON mode. For the MAX20360EVKIT, the GUI then shows Connected and the registers are read and displayed (Figure 2).
- 9) The EV kit is now ready for additional evaluation.
- 10)  To evaluate the battery charger, shunt J4 and plug in the USB micro-B cable to J1 of the EV kit to use USB VBUS power, or externally supply the charging power on TP9 CHGIN.

Figure 2. Connected Status

<!-- image -->

Evaluates: MAX20360

## Detailed Description of Software

## Software Startup

Upon starting the program, the EV kit software automatically searches for the USB interface circuit and then for the  IC  device  addresses.  The  EV  kit  enters  the  normal operating mode when the connection is established and addresses are found. If the USB connection is not detected,  the  status  bar  displays Not Connected .  If  the  USB connection is detected, but the MAX20360 is not found, the status bar shows MAX20360 Not Found .

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 3) is located at the top of  the  GUI  window.  This  bar  comprises File , Device , Options ,  and Help menus;  each  function  is  detailed  in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu  provides  the  ability  to  connect  or disconnect the EV kit to the GUI. The Advanced → I 2 C Read/Write menu allows to read from or write to a select-

Figure 3. The ToolStrip Menu Items

<!-- image -->

Evaluates: MAX20360

ed register with a specified slave address. The Advanced → Use USB2PMB2# option should be checked if using with the USB2PMB2# adapter board.

## Options Menu

The Options menu provides several settings  to  access additional  features  offered  by  the  GUI.  The Disable Polling option  allows  registers  to  be  read  manually instead of receiving automatic frequent register updates from the IC. The Lock/Unlock option allows for the lock or  unlock  of  the  charger,  bucks,  boost,  buck-boost,  and LDOs  through  I 2 C.  The Use  Fletcher-16  Checksum is  checked by default. The EV kit IC has the checksum enabled  (i2c\_crc\_ena  =  enabled).  Uncheck  the Use Fletcher-16  Checksum if  evaluating  an  IC  with  checksum option disabled.

## Help Menu

The Help menu  contains  the About option,  which  displays the GUI splash screen indicative of the GUI version being used.

│

## MAX20360 Evaluation Kit

## Tab Controls

The MAX20360 EV kit software GUI provides a convenient way to test the features of the MAX20360. Each tab contains controls relevant to various blocks of the device. Changing these interactive controls triggers a write operation to the MAX20360 to update the register contents. The Read All button reads all the configuration registers that are visible on the current tab page. The Interrupts and Status section in each tab shows the state of the status registers  and  their  corresponding  interrupts.  Checking or unchecking the Mask option controls which interrupts cause  the INT output  to  be  pulled  low  when  asserted.

Evaluates: MAX20360

Click  the Read Interrupts button  to  read  and  clear  the interrupts visible in the current tab. Asserted interrupts are denoted by bold text in the Interrupt Name . All statuses are  polled  continuously.  The  polling  feature  can  be  disabled in the Options section of the menu bar by selecting Disable Polling .

## General Tab

The General tab  (Figure  4)  provides  information  on device  info,  PFNs  and  MPCs  status  and  configuration. Charger  input  current  and  voltage  limit  setting,  IVMON setting, and some general interrupts and status are also found under this tab.

Figure 4. General Tab

<!-- image -->

│

## Charger Tab

The Charger tab (Figure 5) provides options to set charger voltage, current, and timer in different charging states. The thermistor monitor configuration can be accessed by clicking the Advanced button.

Figure 5. Charger Tab

<!-- image -->

## Buck1/2/3, Buck Boost Tab

The Buck1 , Buck2 , Buck3 , and Buck Boost tabs (Figure 6, 7, 8, and 9) provide options to enable buck/buck boost, set buck/buck boost voltages, inductor current settings, DVS mode and voltage setting, and some additional settings.

Figure 6. Buck1 Tab

<!-- image -->

Evaluates: MAX20360

Figure 7. Buck2 Tab

<!-- image -->

Figure 8. Buck3 Tab

<!-- image -->

Figure 9. Buck Boost Tab

<!-- image -->

## Boost and LEDs Tab

The Boost and LEDs tab (Figure 10) provide options to enable boost, set boost voltage, inductor current settings, enable LEDs, and LED current sink setting.

Figure 10. Boost and LEDs Tab

<!-- image -->

## Other DC-DC Tab

The Other DC-DC tab (Figure 11) includes SFOUT, Charge Pump, LDO1, and LDO2 settings.

Figure 11. Other DC-DC Tab

<!-- image -->

## Load Switches Tab

The Load Switches tab (Figure 12) includes Load Switch 1 and Load Switch 2 settings.

Figure 12. Load Switches Tab

<!-- image -->

│

## Haptic Driver Tab

The Haptic Driver tab (Figure 13) provides options to choose actuator type, haptic driver mode and different settings for each mode. To unmask the haptic interrupts, the HptStatIntM bit in 0x0D IntMask3 register also needs to be unmasked.

Figure 13. Haptic Driver Tab

<!-- image -->

## MAX20360 Evaluation Kit

## Register Map Tab

The Register Map tab (Figure 14) provides all names and values of MAX20360 registers. Click Read All on the top right corner to perform a burst read of all registers.

The left table shows the register to be read from or written to. The right table contains descriptions for each register field of the selected 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

To set a bit, click the bit label. Bold text represents logic 1 and regular text represents logic 0. To configure the changes to the device, click the Write button at the bottom right.

Figure 14. Register Map Tab

<!-- image -->

│

## Detailed Description of Hardware

The MAX20360 EV kit evaluates the MAX20360 ultra low-power wearable PMIC, which communicates over the I 2 C interface. The EV kit demonstrates the IC features such as bucks, buck-boost, boost, LED current sink, linear regulators, battery charger, and haptic driver. The EV kit uses the IC in a 72-bump wafer-level package on a proven, six-layer PCB design. The EV kit can use USB VBUS 5V DC for battery and charger input power source. Alternatively, the EV kit can be powered from an external power supply. Figure 15 and Figure 16 show the EV kit and block annotated pictures.

Figure 15. MAX20360 EV Kit Board Picture

<!-- image -->

Evaluates: MAX20360

│

## Evaluates: MAX20360

Figure 16. MAX20360 EV Kit Block Annotated Picture

<!-- image -->

│

## MAX20360 Evaluation Kit

## Hardware Setup

To use the EV kit with the GUI, connect the MAXPICO2PMB#  to  the  PMOD  connector  in  the  bottom left corner of the board. The MAXPICO2PMB# also provides 3.3V to the logic voltage VIO of the EV kit when shunting  J20.  Use  the  J21  USB  VBUS  to  power  the battery simulation circuits on the EV kit to supply BAT of the  IC.  Turning  the  R58  potentiometer  can  change  the BATSIM voltage. Connect BATSIM to BAT of the IC with shunt on JP9. Alternatively, instead of using battery simulation circuits on the board, connect a Li-ion battery on J2 connector. Use the J1 USB VBUS as CHGIN source and place shunt on J4.

## PFNs and MPCs States

The PFNs and MPCs can be pulled up to VIO through a 100kΩ resistor,  or  connected  to  ground  through  100kΩ resistor.

## Regulators and Peripherals

All  regulator  outputs  are  made  available  on  test  points. The inputs to the LDO1, LDO2, Load Switch 1, and Load Switch 2 must be supplied externally through test points. The LDO2 input can be supplied from VCCINT of IC if set through the I 2 C. Bucks, buck-boost, and boost output have sense test points which provide easy voltage measuring.

## Thermistor and SET Adjustment

When the J6 shunt is installed, THM is pulled up to TPU through a 10kΩ resistor. Header J19 is used to select the pull-down resistor for THM. When pin 1 and 2 is shunted, potentiometer  R14  is  used  to  simulate  a  thermistor  at THM. When pin 2 and 3 is shunted, a fixed 10kΩ resistor is connected between THM and ground.

## Table 1. Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| J3       | 1-2*             | CSN connect to FGBAT                         |
| J4       | 1-2              | CHGIN connect to USB VBUS from J1            |
| J6       | 1-2*             | THM connect to TPU for thermistor monitoring |
| J7       | 1-2*             | INT connect to pull up VIO and DS2.          |
| J8       | 1-2*             | RST connect to pull up VIO and DS3.          |
| J9       | 1-2              | MPC0 pull down to ground                     |
| J9       | 1-3              | MPC0 connect to GPIO3                        |
| J9       | 1-4              | MPC0 pull up to VIO                          |
| J10      | 1-2              | PFN1 pull down to ground                     |
| J10      | 1-3              | PFN1 connect to GPIO1                        |
| J10      | 1-4              | PFN1 pull up to VIO                          |

│

## Evaluates: MAX20360

Header J18 is used to select the resistor for R ISET  which sets  the  fast-charge  current  I FCHG .  Shunting  pin  1  and 2  selects  potentiometer  R63.  Change  R ISET   to  change IFCHG . Shunting the pin 2 and pin 3 selects a fixed 10kΩ resistor, which sets fast-charge current to 0.2A.

## INT and RST LED Indicators

Shunts can be installed on J7 and J8 to show the status of INT and RST as LED indicators, DS2 and DS3.  When the corresponding LED illuminates, it verifies the activelow output is pulled low.

## Haptic Driver

Select haptic driver supply using J23. When pin 1 and 2 is shunted, HDIN is powered from SYS. When pin 2 and 3 is shunted, HDIN is sourced from BBOUT. The haptic driver output is available on J5 where an LRA or ERM vibration motor can be connected. By shunting J24 and J25, haptic waveform can be measured with the on board low-pass filters  which  convert  pulse-width-modulation  (PWM)  to sinewave.

## LED Current Sink

The EV kit includes multiple LEDs to test the LED0, LED1, and LED2 current sinks. The current source for LED1 and LED2 can be connected to SYS by shunting J14. The current source for LED0 can be selected between SYS and BSTOUT by J17. Using J16, select between sinking the current from one LED or three LEDs for LED0.

## Jumper Setting

Table  1  shows  the  detailed  jumper  setting,  and Table  2 shows the connector description.

Table 1. Jumper Setting (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                      |
|----------|------------------|--------------------------------------------------------------------------------------------------|
| J11      | 1-2              | MPC1 pull down to ground                                                                         |
| J11      | 1-3              | MPC1 connect to GPIO4                                                                            |
| J11      | 1-4              | MPC1 pull up to VIO                                                                              |
| J12      | 1-2              | PFN2 pull down to ground                                                                         |
| J12      | 1-3              | PFN2 connect to GPIO2                                                                            |
| J12      | 1-4              | PFN2 pull up to VIO                                                                              |
| J14      | 1-2              | LED1/LED2 supply from SYS voltage                                                                |
| J16      | 1-2              | LED0 connect to one LED                                                                          |
| J16      | 2-3              | LED0 connect to three LEDs                                                                       |
| J17      | 1-2              | LED0 supply from SYS                                                                             |
| J17      | 2-3              | LED0 supply from BSTOUT                                                                          |
| J18      | 1-2              | ISET connect to potentiometer                                                                    |
| J18      | 2-3*             | ISET connect to 10kΩ (fast-charge current 0.2A)                                                  |
| J19      | 1-2              | THM connect to potentiometer                                                                     |
| J19      | 2-3*             | THM connect to 10kΩ (50%/room zone)                                                              |
| J20      | 1-2*             | VIO connect to 3.3V from PMOD                                                                    |
| J22      | 1-2*             | VHC connect to USB VBUS from J21                                                                 |
| J23      | 1-2*             | HDIN connect to SYS                                                                              |
|          | 2-3              | HDIN connect to BBOUT                                                                            |
| J24      | 1-2              | DRP connect to low-pass filter which convert PWM to sinewave, measure filtered waveform at DRP_F |
| J25      | 1-2              | DRN connect to low-pass filter which convert PWM to sinewave, measure filtered waveform at DRN_F |
| J27      | 1-2              | MPC4 pull up to VIO                                                                              |
|          | 2-3              | MPC4 pull down to ground                                                                         |
|          | 1-2              | MPC3 pull up to VIO                                                                              |
| J28      | 2-3              | MPC3 pull down to ground                                                                         |
|          | 1-2              | MPC7 pull up to VIO                                                                              |
| J30      | 2-3              | MPC7 pull down to ground                                                                         |
|          | 1-2              | MPC6 pull up to VIO                                                                              |
| J31      | 2-3              | MPC6 pull down to ground                                                                         |
|          | 1-2              | MPC2 pull up to VIO                                                                              |
| J33      | 2-3              | MPC2 pull down to ground                                                                         |
|          | 1-2              | MPC5 pull up to VIO                                                                              |
| J34      | 2-3              | MPC5 pull down to ground                                                                         |
|          | 1-2              | SDAconnect to ground                                                                             |
| J39      |                  |                                                                                                  |
| JP9      | 1-2              | BATSIM connect to CSN                                                                            |

Evaluates: MAX20360

│

## Table 2. Connectors Description

| CONNECTOR   | DESCRIPTION                                     |
|-------------|-------------------------------------------------|
| J1          | Connect to USB cable for CHGIN voltage          |
| J2          | Connect to battery                              |
| J5          | Connect to LRA/ERM haptic actuator              |
| J13         | Connect to MAXPICO2PMB#                         |
| J15         | Connect to MAX20361 EV kit                      |
| J21         | Connect to the USB cable for battery simulation |

## Interaction with the MAX20361 EV Kit

The  MAX20360  PMIC  (version  with  harvester  enabled, HrvEn = 1) can seamlessly interact with the MAX20361 solar energy harvester. Interactions between the MAX20360  charger and the MAX20361  harvester can  be  evaluated  with  the  MAX20360HEVKIT#  and MAX20361EVKIT#.

## Hardware Settings

Follow the below jumper settings for the interaction test. MAX20361EVKIT# Jumper Settings:

- 1) Follow default jumper settings in Table 1 of the MAX20361 EV kit data sheet .
- 2) For JU2 and JU3, connect jumper position 3-4 so EN and WAKE are connected to interaction connector S1.
- 3) Connect JU9 to bring SYS to interaction connector S1.
- 4) Utilize the on-board current source for a steady input current. Refer to the On-Board Current Source section of the MAX20361 EV kit data sheet .
- 5) The highest on-board input current is recommended. Connect jumper position 1-2 of JU15 to select the highest current source.

MAX20360HEVKIT# Jumper Settings:

- 1) Follow default jumper settings in Table 1.
- 2) Remove the jumpers on J30 and J31 so MPC6 and MPC7 are left unconnected. When the

## Evaluates: MAX20360

MAX20360HEVKIT# and the MAX20361EVKIT# are connected, the MAX20360 MPC6 pin is connected to the MAX20361 EN pin, and the MAX20360 MPC7 pin is connected to the MAX20361 WAKE pin.

- 3) Either the battery simulator (power through J21) or an actual Lithium-ion battery (connected to J2) can be used for the interaction test. Remember to disconnect JP9 when using the actual Lithium-ion battery.

## Software Settings

Refer  to  the  following  registers  to  configure  the  parameters of the interaction test.

For  the  MAX20361,  field  WakeThr[2:0]  of  register  0x05 WakeCfg determines the SYS/BAT voltage threshold that the  WAKE  output  is  asserted.  During  interaction,  when WAKE is high, the MAX20360 enters ON Mode.

For  the  MAX20360,  registers  ThmCfg2,  HrvCfg0,  and HrvCfg1  offer  some  settings  for  how  the  harvester  and PMIC  interaction  takes  place.  Refer  to  the MAX20361 Harvester Interaction section  in  the MAX20360 IC data sheet .

## Interaction Process

To start the test, connect two EV kits using the S1 of the MAX20361EVKIT# and J15 of the MAX20360HEVKIT#. When  the  MAX20361  harvester  SYS  or  output  current is  charging  the  BAT  node  of  the  MAX20360  PMIC,  the MAX20361 harvest counter updates, which indicates the number of LX pulses transferred from SRC to SYS and correlates to the SYS charging current.

In the PMIC ON Mode, WAKE is asserted and EN is low. The SYS current keeps charging the battery until the BAT voltage reaches the harvester battery-regulation voltage set in HrvBatReg. When SYS charging halts, the harvest counter stops updating.

In PMIC Battery Recovery Mode, both WAKE and EN are low. The SYS current keeps charging the battery until the BAT voltage reaches the WAKE threshold to enter PMIC ON Mode.

│

## Fuel Gauge Software

The  MAX20360  integrates  the  MAX17260,  an  ultralow-power  fuel  gauge  IC  which  implements  the  Maxim ModelGauge™  m5  algorithm  with  high-side  current sensing.  Use  the  MAX20360  Fuel  Gauge  GUI  and MAXPICO2PMB to evaluate the ModelGauge™ m5 fuel gauge.

## Sense Resistor

The default Sense Resistor (R5) on the MAX20360 EV kit is 0.01Ω. To obtain the most accurate testing data, please replace  R5  with  the  actual  Sense  Resistor  used  in  the actual application.

## Software Installation

Visit www.maximintegrated.com to download the latest  version  of  the  Fuel  Gauge  EV  kit  software, MAX17260GUISetupxxx.zip  located  on  the MAX20360 EV  Kit  web  page .  Download  the  software  to  a  temporary  folder  and  unzip  the  zip  file.  Install  the  Fuel Gauge  EV  kit  software  on  your  computer  by  running the  MAX17260GUISetupxxx.exe  program  inside  the temporary folder.

## Hardware Setup

The following procedure applies to the MAX20360 EV kit:

- 1) Connect the MAXPICO2PMB Adapter Board to J13 of the MAX20360 EVKIT.
- 2) Connect jumper J4 and remove jumper JP9.
- 3) Connect the application's battery to jumper J2 and ensure the battery's polarity connection.
- 4) Connect the MAXPICO2PMB Adapter Board to the computer USB port via USB A to USB Micro-B cable.

Evaluates: MAX20360

## Communication Port

The Fuel Gauge  software automatically finds the MAXPICO2PMB  adapter  when  connected  to  any  USB port.  Communication  status  is  shown  on  the  right-hand side  of  the  bottom  status  bar.  (See  Figure  17.)  If  the adapter  is  not  found,  a No  USB  Adapter message  is displayed. If the adapter is found, but the MAX20360 EV kit board is not found, a No Slave Device message is displayed. If the communication is valid, a green bar updates as the software continuously reads the IC registers. If the MAXPICO2PMB is connected, the status bar should be active. The bottom status bar also displays information on data  logging  status,  the  communication  mode,  hibernation status, selected current-sense resistor value, device serial number, and the GUIs version number.

## Program Tabs

All  functions of the program are divided under four tabs in  the  main  program  window.  Click  on  the  appropriate tab  to  move  to  the  desired  function  page.  Located  on the ModelGauge m5 tab is the primary user information measured  and  calculated  by  the  IC.  The Graphs tab visually  displays  fuel  gauge  register  changes over time. The Registers tab allows the user to modify common fuel gauge registers one at a time. The Configure tab allows for special operations such as initializing the fuel gauge logging  and  performing  fuel  gauge  reset.  All  tabs  are described in more detail in the following sections.

Figure 17. Bottom Status Bar

<!-- image -->

│

## MAX20360 Evaluation Kit

## ModelGauge m5 Tab

The ModelGauge m5 tab  displays  the  important  output information read from the IC. Figure 18 shows the format of  the  ModelGauge  m5  Tab.  Information  is  grouped  by function and each is detailed separately.

## State-of-Charge

The State-of-Charge group box displays the main output information  from  the  fuel  gauge:  state-of-charge  of  the cell, remaining capacity, time-to-full, and time-to-empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age,

Evaluates: MAX20360

internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine stateof-charge.

## Alerts

The Alerts group  box  tracks  all  eleven  possible  alert trigger conditions. If any alert occurs, the corresponding checkbox is checked for the user to see. The clear alerts button resets all alert flags.

Figure 18. ModelGauge m5 Tab

<!-- image -->

│

## MAX20360 Evaluation Kit

## At Rate

The At Rate group box allows the user to input a hypothetical  load  current  and  the  fuel  gauge  calculates  the corresponding hypothetical Qresidual, TTE, AvSOC, and AvCap values.

## Graphs Tab

Figure  19  shows  the  format  of  the Graphs Tab.  Graph information  is  grouped  into  four  categories:  voltages, temperatures,  capacities,  and  currents.  The  user  can

Evaluates: MAX20360

turn on or off any data series using the check boxes on the right-hand side of the tab. The graph visible viewing area can be adjusted from 10 minutes up to 1 week. The graphs remember up to 1 week worth of data. If the viewing area is smaller than the time range of the data already collected, the scroll bar below the graphs can be used to scroll through graph history. All graph history information is  maintained  by  the  program.  Graph  settings  can  be changed at any time without losing data.

Figure 19. Graphs Tab

<!-- image -->

│

## MAX20360 Evaluation Kit

## Registers Tab

The Registers tab  allows  the  user  access  to  all  fuel gauge-related registers of the IC. Figure 20 shows the format of the Registers tab. By using the drop-down menu on the left side of the tab, the user can sort the registers either by function or by their internal address. Each line of  data  contains  the  register  name,  register  address,  a

Evaluates: MAX20360

hexadecimal representation of the data stored in the register, and if applicable, a conversion to application units. To write a register location click on the button containing the  register  name. A  pop-up  window  allows  the  user  to enter a new value in either hexadecimal units or application units. The main read loop temporarily pauses while the register updates.

Figure 20. Registers Tab

<!-- image -->

│

## MAX20360 Evaluation Kit

## Configure Tab

The Configure tab allows the user to access any general IC  functions  not  related  to  normal  writing  and  reading of  register  locations.  Figure  21  shows  the  format  of  the Configure tab. Each group box of the Configure tab is described in detail in the following sections.

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

## Log Data to File

Data logging is always active when the EV kit software starts.  The  default  data  log  storage  location  is  the  My Documents/Maxim Integrated/MAX17260/Datalog.csv. The user can stop data logging in by clicking  the Stop button. The user can resume logging by clicking the Start button. All user available IC registers are logging in a .csv formatted file. The user can adjust the logging interval at any time. The user can also enable or disable the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not part of the normal read data loop and indicates any time communication to the IC is lost. The GUI automatically begins writing to a new file on each launch. To manually begin logging into a new file, click the Advance button.

Figure 21. Configure Tab

<!-- image -->

Evaluates: MAX20360

│

## Reset IC

Clicking the POR button  sends  the  software  POR command to the command register to fully reset the operation the same as if the IC had been power cycled. Note that resetting the IC when the cell is not relaxed causes fuel gauge error.

## Battery Selection

Clicking  the Change  Battery button  opens  the  battery selector window. In this window, a battery profile is created. The battery profile stores the EZ Config or custom INI for that battery, as well as any learned parameters, if the save and restore function is used. Ideally, a new profile is created for each battery to store these parameters. The software  automatically  programs  the  IC  when  the Save Profile and Update IC button is clicked.

## Save and Restore

The EV Kit software  periodically  saves  the  values  from registers related to cell characteristics that change over time. These values are then restored into an IC after reset so that the fuel gauge remains accurate as the cell ages. The  software  automatically  performs  a  save  operation every 10 cycles or when the software exits. The user can change the save interval or force a save operation at any time by clicking the Save button. To restore this information after the IC has been power cycled or reset through software, click the Restore button.

## ModelGauge m5 EZ Configuration

Before the IC accurately fuel gauges the battery pack, it must be configured with characterization information. This

## Evaluates: MAX20360

can be accomplished in two ways. The first is through a custom characterization procedure that can be performed by  Maxim  under  certain  conditions.  The  result  is  an .INI  summary file  that  contains  information  that  can  be programmed into the IC on the Configure tab.  Contact Maxim for details on this procedure.

The  second  method  is  the  ModelGauge  m5  EZ  configuration. This is the default characterization information shipped  inside  every  IC.  This  default  model  produces accurate results for most applications under most operating  conditions.  It  is  the  recommended  method  for  new designs as it  bypasses  the  custom  cell  characterization procedure. Some additional information is required from the user for EZ configuration initialization.

For  EZ  configuration,  click  the Import  INI  File button in  the  Information  tab,  or  click Change  Battery in  the Configure tab.  A Battery  Selector panel  as  shown  in Figure  22  pops  out.  In  the  panel,  select Use  Default IC Settings (EZ Config) option. Fill in the rated battery capacity  and  the  charge  termination  current,  select  the battery chemistry in the Model ID drop down menu, and select the minimum system voltage in the Empty Voltage drop down menu. Check the Charge voltage is greater than 4.275V box if the full charge voltage is higher than 4.275V.  After  configuring  these  items,  click  the Save Profile and Update IC button to load the EZ configura -tion into the chip.

For characterized battery, choose the Load INI File option in  the Battery  Selector panel,  and  select  the INI  file provided  from  MAXIM,  then  click Save  Profile  and Update IC button to load configuration.

Figure 22. New Battery Selector Panel

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART            | HARVESTER ENABLE   | TYPE   |
|-----------------|--------------------|--------|
| MAX20360EVKIT#  | NO                 | EVKIT  |
| MAX20360HEVKIT# | YES                | EVKIT  |

## MAX20360 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                   | DNI/DNP   |   QTY | MFG PART #                                                                                                                                                                 | MANUFACTURER                                                                                                                         | VALUE                | DESCRIPTION                                                                                                         |
|--------|---------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------|
|      1 | BATSIM, TP1-TP6, TP10-TP13, TP18-TP21                                     | -         |    15 | 5003                                                                                                                                                                       | KEYSTONE                                                                                                                             | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | BBOUT_S, BK1OUT_S-BK3OUT_S, BSTOUT_S, DRN_F, DRP_F, TP14-TP17, TP36, TP37 | -         |    13 | 5002                                                                                                                                                                       | KEYSTONE                                                                                                                             | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;               |
|      3 | C1                                                                        | -         |     1 | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR                                                                                              | TDK;MURATA; TDK; TAIYO YUDEN                                                                                                         | 0.1UF                | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                      |
|      4 | C2                                                                        | -         |     1 | C1005X5R1V225K050BC                                                                                                                                                        | TDK                                                                                                                                  | 2.2UF                | CAP; SMT (0402); 2.2UF; 10%; 35V; X5R; CERAMIC                                                                      |
|      5 | C3, C5, C13-C17, C21, C22                                                 | -         |     9 | C1005X5R0J475K050BC                                                                                                                                                        | TDK                                                                                                                                  | 4.7UF                | CAP; SMT (0402); 4.7UF; 10%; 6.3V; X5R; CERAMIC                                                                     |
|      6 | C4                                                                        | -         |     1 | C1005X5R0J225K050BC; CL05A225KQ5NSN                                                                                                                                        | TDK; SAMSUNG                                                                                                                         | 2.2UF                | CAP; SMT (0402); 2.2UF; 10%; 6.3V; X5R; CERAMIC                                                                     |
|      7 | C6-C9, C11, C18, C20, C40                                                 | -         |     8 | GRM155R60J226ME11                                                                                                                                                          | MURATA                                                                                                                               | 22UF                 | CAP; SMT (0402); 22UF; 20%; 6.3V; X5R; CERAMIC;                                                                     |
|      8 | C10, C19                                                                  | -         |     2 | GRM188R6YA106MA73                                                                                                                                                          | MURATA                                                                                                                               | 10UF                 | CAP; SMT (0603); 10UF; 20%; 35V; X5R; CERAMIC                                                                       |
|      9 | C12                                                                       | -         |     1 | GRM155R71A273KA01; 0402ZC273KAT2A; CC0402KRX7R6BB273                                                                                                                       | MURATA;AVX;YAGEO                                                                                                                     | 0.027UF              | CAP; SMT (0402); 0.027UF; 10%; 10V; X7R; CERAMIC                                                                    |
|     10 | C23, C27                                                                  | -         |     2 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL                                                                                                    | MURATA;MURATA; MURATA; TAIYO YUDEN                                                                                                   | 4.7UF                | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                      |
|     11 | C24                                                                       | -         |     1 | C1608X5R1H104K080AA                                                                                                                                                        | TDK                                                                                                                                  | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                                      |
|     12 | C25, C33, C35-C38                                                         | -         |     6 | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | TDK; AMERICAN TECHNICAL CERAMICS; AVK; VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA;TDK; YAGEO PHICOMP; TAIYO YUDEN; SAMSUNG ELECTRONICS | 0.1UF                | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC                                                                      |
|     13 | C26                                                                       | -         |     1 | C0603C225K9PAC; GRM188R60J225KE01; C1608X5R0J225K080AB                                                                                                                     | KEMET; MURATA;TDK                                                                                                                    | 2.2UF                | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X5R; CERAMIC;                                                                    |
|     14 | C28                                                                       | -         |     1 | C0603C475K9PAC                                                                                                                                                             | KEMET                                                                                                                                | 4.7UF                | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X5R; CERAMIC;                                                                    |
|     15 | C29                                                                       | -         |     1 | C0402X7R500-222KNE; GRM155R71H222KA01; C1005X7R1H222K050BA                                                                                                                 | VENKEL LTD.; MURATA;TDK                                                                                                              | 2200PF               | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                     |
|     16 | C30                                                                       | -         |     1 | C0603C104K8RAC                                                                                                                                                             | KEMET                                                                                                                                | 0.1UF                | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                      |
|     17 | C31                                                                       | -         |     1 | C3216X5R1C476M160AB; GRM31CR61C476ME44                                                                                                                                     | TDK;MURATA                                                                                                                           | 47UF                 | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                                       |
|     18 | C32                                                                       | -         |     1 | C3216X5R1H106K160AB; GRM31CR61H106KA12                                                                                                                                     | TDK;MURATA                                                                                                                           | 10UF                 | CAP; SMT (1206); 10UF; 10%; 50V; X5R; CERAMIC                                                                       |
|     19 | C34                                                                       | -         |     1 | GRM188R60J105KA01                                                                                                                                                          | MURATA                                                                                                                               | 1UF                  | CAP; SMT (0603); 1UF; 10%; 6.3V; X5R; CERAMIC;                                                                      |
|     20 | DS1-DS3, DS10                                                             | -         |     4 | LG L29K-G2J1-24                                                                                                                                                            | OSRAM                                                                                                                                | LG L29K-G2J1-24      | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                             |
|     21 | DS4, DS8, DS9                                                             | -         |     3 | LTST-C171TBKT                                                                                                                                                              | LITE-ON ELECTRONICS INC.                                                                                                             | LTST-C171TBKT        | DIODE; LED; SMD LED; BLUE; SMT (0805); PIV=5V; IF=0.020A                                                            |
|     22 | DS5-DS7                                                                   | -         |     3 | LTST-C150KRKT                                                                                                                                                              | LITE-ON ELECTRONICS INC.                                                                                                             | LTST-C150KRKT        | DIODE; LED; STANDARD; RED; SMT (1206); PIV=2V; IF=0.02A; -30 DEGC TO +85 DEGC                                       |
|     23 | J1, J21                                                                   | -         |     2 | ZX62D-B-5P8                                                                                                                                                                | HIROSE ELECTRIC CO LTD.                                                                                                              | ZX62D-B-5P8          | CONNECTOR; MALE; SMT; MICRO UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 5PINS                               |
|     24 | J2, J5                                                                    | -         |     2 | 800-10-002-10-001000                                                                                                                                                       | MILLMAX                                                                                                                              | 800-10-002-10-001000 | CONNECTOR; MALE; TH; SINGLE ROW; STRAIGHT; 2PINS                                                                    |
|     25 | J3, J4, J6-J8, J14, J20, J22, J24, J25, JP9                               | -         |    11 | PBC02SAAN                                                                                                                                                                  | SULLINS ELECTRONICS CORP.                                                                                                            | PBC02SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                           |
|        |                                                                           |           |     4 |                                                                                                                                                                            |                                                                                                                                      |                      |                                                                                                                     |
|     26 | J9-J12                                                                    | -         |       | TSW-104-07-L-S                                                                                                                                                             | SAMTEC                                                                                                                               | TSW-104-07-L-S       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                   |
|     27 | J13                                                                       | -         |     1 | PBC06DBAN                                                                                                                                                                  | SULLINS ELECTRONICS CORP.                                                                                                            | PBC06DBAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 12PINS; 12PINS - ALTERNATE PIN NUMBERING                     |

Evaluates: MAX20360

## MAX20360 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                            | DNI/DNP   |   QTY | MFG PART #                      | MANUFACTURER                           | VALUE        | DESCRIPTION                                                                                                                                          |
|--------|------------------------------------------------------------------------------------|-----------|-------|---------------------------------|----------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
|     28 | J15                                                                                | -         |     1 | PEC04SBAN                       | SULLINS ELECTRONICS CORP.              | PEC04SBAN    | CONNECTOR; MALE; THROUGH HOLE; 0.100INCH CONTACT CENTERS; MALE BREAKAWAY HEADERS; RIGHT ANGLE; NO MOUNTING; 4PINS                                    |
|     30 | L1-L3, L5                                                                          | -         |     4 | DFE201612E-2R2M                 | MURATA                                 | 2.2UH        | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                                        |
|     31 | L4                                                                                 | -         |     1 | DFE201612E-4R7M                 | MURATA                                 | 4.7UH        | INDUCTOR; SMT (0806); METAL; 4.7UH; 20%; 1.20A                                                                                                       |
|     32 | PB1                                                                                | -         |     1 | 1825910-6                       | TE CONNECTIVITY                        | 1825910-6    | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; TACTILE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM; TE CONNECTIVITY                                           |
|     33 | R1, R13, R15, R16                                                                  | -         |     4 | ERJ-2RKF1001                    | PANASONIC                              | 1K           | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                     |
|     34 | R2, R10, R11, R38-R40, R49, R53                                                    | -         |     8 | CRCW040210K0FK; RC0402FR-0710KL | VISHAY DALE; YAGEO PHICOMP             | 10K          | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |
|     35 | R3, R4, R44, R47, R55, R60                                                         | -         |     6 | ERJ-2RKF3000                    | PANASONIC                              | 300          | RES; SMT (0402); 300; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
|     36 | R5                                                                                 | -         |     1 | ERJ-2LWFR010                    | PANASONIC                              | 0.01         | RES; SMT (0402); 0.01; 1%; 0 TO +500PPM/DEGC; 0.2000W                                                                                                |
|     37 | R6                                                                                 | -         |     1 | ERJ-2GEJ103                     | PANASONIC                              | 10K          | RES; SMT (0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                    |
|     38 | R7, R17-R21, R23-R35, R41, R45, R46, R48, R50, R57                                 | -         |    25 | ERJ-2GEJ104                     | PANASONIC                              | 100K         | RES; SMT (0402); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                   |
|     39 | R8, R9, R12, R42                                                                   | -         |     4 | CRCW0402499RFK                  | VISHAY DALE                            | 499          | RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |
|     40 | R14, R63                                                                           | -         |     2 | PV36Y105C01B00                  | MURATA                                 | 1M           | RESISTOR; THROUGH-HOLE-RADIAL LEAD; PV36 SERIES; 1M OHM; 10%; 100PPM; 0.5W; TRIMMER POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM          |
|     41 | R22, R36, R37                                                                      | -         |     3 | CRCW040210R0JNEDHP              | VISHAY DRALORIC                        | 10           | RES; SMT (0402); 10; 5%; +/-200PPM/DEGK; 0.2000W                                                                                                     |
|     42 | R43                                                                                | -         |     1 | CRCW04024K70FK; MCR01MZPF4701   | VISHAY DALE; ROHM SEMICONDUCTOR        | 4.7K         | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                   |
|     43 | R51                                                                                | -         |     1 | ERJ-2GE0R00                     | PANASONIC                              | 0            | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                          |
|     44 | R52                                                                                | -         |     1 | ERJ-2RKF5100                    | PANASONIC                              | 510          | RES; SMT (0402); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
|     45 | R54, R56                                                                           | -         |     2 | WSL0805R1000FEA18               | VISHAY DALE                            | 0.1          | RES; SMT (0805); 0.1; 1%; +/-75PPM/DEGC; 0.1250W                                                                                                     |
|     46 | R58                                                                                | -         |     1 | 3296Y-1-253LF                   | BOURNS                                 | 25K          | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 25K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
|     47 | R59                                                                                | -         |     1 | ERJ-2RKF1152                    | PANASONIC                              | 11.5K        | RES; SMT (0402); 11.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |
|     48 | R61                                                                                | -         |     1 | CRCW04023K40FK                  | VISHAY DALE                            | 3.4K         | RES; SMT (0402); 3.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                   |
|     49 | SPACER1-SPACER4                                                                    | -         |     4 | 9032                            | KEYSTONE                               | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                            |
|     50 | SU3, SU4, SU6-SU12, SU14, SU16-SU20, SU23-SU25, SU27, SU28, SU30, SU31, SU33, SU34 | -         |    24 | S1100-B; SX1100-B; STC02SYAN    | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                             |
|     51 | TP7-TP9, VHC                                                                       | -         |     4 | 5000                            | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                     |
|     52 | TP22-TP33                                                                          | -         |    12 | 5001                            | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                   |
|     53 | U1                                                                                 | -         |     1 | MAX20360                        | MAXIM                                  | MAX20360     | EVKIT PART - IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE DRAWING: 21-100373; WLP 72 PINS; 0.5MM PITCH; PACKAGE CODE: W724A4+1            |
|     54 | U2                                                                                 | -         |     1 | OPA569AIDWPR                    | TEXAS INSTRUMENTS                      | OPA569AIDWPR | IC; AMP; RAIL-TO-RAIL I/O; POWER AMPLIFIER; WSOIC20-EP 300MIL                                                                                        |
|     55 | U3                                                                                 | -         |     1 | MAX8880EUT+                     | MAXIM                                  | MAX8880EUT+  | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                                |
|     56 | U4                                                                                 | -         |     1 | NC7WZ07P6X                      | FAIRCHILD SEMICONDUCTOR                | NC7WZ07P6X   | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                             |
|     57 | PCB                                                                                | -         |     1 | MAX20360                        | MAXIM                                  | PCB          | PCB:MAX20360                                                                                                                                         |
|     58 | MISC1, MISC2                                                                       | DNI       |     2 | AK67421-0.5                     | ASSMANN                                | AK67421-0.5  | CONNECTOR; USB CABLE; MALE-MALE; USB_2.0; 5PINS-4PINS; 500MM                                                                                         |
|     59 | MISC3                                                                              | DNI       |     1 | MAXPICO2PMB#                    | MAXIM                                  | MAXPICO2PMB# | ACCESSORY; BRD; PACKOUT; PICO2PMB USB ADAPTER BOARD                                                                                                  |

Evaluates: MAX20360

## MAX20360 EV Kit Schematics

<!-- image -->

## MAX20360 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX20360

## MAX20360 EV Kit Schematics (continued)

<!-- image -->

│

## MAX20360 EV Kit PCB Layouts

MAX20360 EV Kit PCB Layout-Silk Top

<!-- image -->

MAX20360 EV Kit PCB Layout-Top

<!-- image -->

Evaluates: MAX20360

MAX20360 EV Kit PCB Layout-Layer2

<!-- image -->

MAX20360 EV Kit PCB Layout-Layer3

<!-- image -->

│

## MAX20360 EV Kit PCB Layouts (continued)

MAX20360 EV Kit PCB Layout-Layer4

<!-- image -->

MAX20360 EV Kit PCB Layout-Layer5

<!-- image -->

MAX20360 EV Kit PCB Layout-Bottom

<!-- image -->

│

## MAX20360 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                         | PAGES CHANGED             |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
|                 0 | 8/20            | Release for Market Intro                                                                                                                                                                                                                                                                                                            | -                         |
|                 1 | 4/21            | Updated the General Description and Procedure sections; updated Table 2, Figures 2 and 4, and the Bill of Materials, Schematics, and PCB Layout sections; added the Interaction with the MAX20361 EV Kit, Hardware Settings, Software Settings, and Interaction Process sections; added MAX20360HEVKIT# to the Ordering Information | 1-3, 5, 20-21, 23, 26, 28 |
|                 2 | 7/21            | Updated the USB2PMB2# to MAXPICO2PMB# in the entire document, updated Figure 15, Figure 16, and the Bill of Materials. Added Fuel Gauge section.                                                                                                                                                                                    | 1, 2, 4, 16-18, 20-29     |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20360