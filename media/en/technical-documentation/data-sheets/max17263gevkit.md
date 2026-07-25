<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX17263

## General Description

The MAX17263G evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  PCB  that  evaluates  the stand-alone ModelGauge™ m5 host-side fuel-gauge ICs for  lithium-ion  (Li+)  batteries  in  handheld  and  portable equipment.

The MAX17263G EV kit includes the Maxim DS91230+ USB  interface,  IC  evaluation  board,  and  RJ-11  connection  cable.  Windows ® -based  graphical  user  interface  (GUI)  software  is  available  for  use  with  the  EV kit  and  can  be  downloaded  from  Maxim's  website  at www.maximintegrated.com/products/MAX17263 (under the Design Resources tab). Windows 7 or newer Windows operating system is required to use with the EV kit GUI software.

## Features and Benefits

- ModelGauge m5 Algorithm
- Monitors Single-Cell or Multi-Cell Packs
- On-Board LED Array
- Thermistor Measurement Network
- Optional On-Board PCB Trace Sense Resistor
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17263 EV Kit Files

| FILE                        | DECRIPTION                                  |
|-----------------------------|---------------------------------------------|
| MAX17263_Vx_x_x_Install.exe | Installs all EV kit files on your computer. |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

## MAX17263G Evaluation Kit

## Quick Start

## Required Equipment

- MAX17263G EV kit
- Lithium battery pack of desired configuration
- Battery charger or power supply
- Load circuit
- DS91230+ USB adapter
- RJ-11 6pos reverse modular cord
- PC with Windows 7 or newer Windows operating system and USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The  EV  kit  are  fully  assembled  and  tested.  Follow  the steps below to install the EV kit software, make required hardware connections, and start operation of the kit. The EV kit software can be run without hardware attached. It automatically locates the hardware when connections are made. Note that after communication is established, the IC must still be configured correctly for the fuel gauge to be accurate.

- 1) Visit www.maximintegrated.com/products/MAX17263 under  the Design  Resources tab  to  download  the latest  version  of  the  EV  kit  software.  Save  the  EV kit  software  to  a  temporary  folder  and  unpack  the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX17263\_Vx\_x\_x\_Install.exe program inside  the  temporary  folder.  The  program  files  are copied, and icons are created in the Windows Start menu. The software requires the .NET Framework 4.5 or later. If you are connected to the Internet, Windows automatically updates .NET framework as needed.

319-100218; Rev 1; 11/21

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.470      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX17263G Evaluation Kit

- 3) The EV kit software launches automatically after install or alternatively it can be launched by clicking on its icon in the Windows Start menu.
- 4) Connect the DS91230+ adaptor to a USB port on the PC. The DS91230+ is a HID device and is located automatically by Windows without the need to install additional drivers.

## Evaluates: MAX17263

The  cell  connects  between  the  PACK-  and  PACK+ pads  and  the  charger/load  connects  between  the SYSGND and SYSPWR pads. See Table 1 for jumper settings for different application scenarios.

- 6) Connect the RJ-11 cable between the USB adapter and the EV kit board. The GUI software establishes communication automatically.
- 5) Make connections to the EV kit board based on cell pack configuration as shown in Figure 1 . The load or charger circuit can be connected at this time as well.
- 7) At  power-up, the IC defaults to EZ Configuration. If you have a custom .INI file for your application, it can be loaded at this time.

## Table 1. Jumper Settings for Different Applications

Figure 1. MAX17263 Board Connections

| APPLICATION                    | P1                                            | JU1        | J2         | J3                   | J4                   |
|--------------------------------|-----------------------------------------------|------------|------------|----------------------|----------------------|
| Single-cell, low-side sensing  | No connect                                    | No connect | No connect | Connect Pin 2, Pin 3 | Connect Pin 1, Pin 2 |
| Single-cell, high-side sensing | No connect                                    | No connect | No connect | Connect Pin 2, Pin 3 | Connect Pin 2, Pin 3 |
| Multi-cell, low-side sensing   | Select from 2S, 3S, 4S, 6S, 8S configurations | Connect    | Connect    | Connect Pin 1, Pin 2 | Connect Pin 1, Pin 2 |

<!-- image -->

│

## Detailed Description of Hardware

The MAX17263G EV kit board provides a variety of features that highlight the functionality of the IC. The following sections detail the most important aspects of the EV kit board.

## Communication Connections

The RJ-11 connector provides all signal lines necessary for I 2 C communication between the IC and the software GUI interface. When developing code separately, connections to the communication lines can be made directly to the SDA, SCL, and GND pins of the board.

## External Thermistor

The  IC  can  be  configured  to  use  internal  temperature measurements  or  an  external  thermistor.  The  EV  kit board comes with a thermistor installed as surface mount component RT1. If the application requires direct thermal contact to the cells, RT1 can be removed and replaced with  a  leaded  thermistor  connected  between  the  RT1+/ RT1- solder pads (J2 and J3).

## Sense Resistor Options

The EV kit  board  is  shipped  with  an  0805  size  0.010Ω chip  sense  resistor  installed.  Oversized  land  pattern pads allow for  different  size  sense  resistors  to  be  used if desired. Also, each board contains an optional 0.003Ω copper trace sense resistor that can be enabled if desired. To do so, the chip sense resistor must be removed and

0Ω  jumpers  must  be  resoldered  to  change  the  circuit. Table 2 summarizes the changes. Note that the IC must be reconfigured to support the new resistor type.

## Detailed Description of Software

The MAX17263G evaluation kit software gives the user complete control of all functions of the IC, as well as the ability to load a custom model into the ICs. Separate control tabs allow the user access to view real-time updates of  all  monitored parameters. The software also incorporates a data-logging feature to monitor a cell over time.

## Software Installation

The  software  requires  Windows  7  or  newer  operating system. .NET version 4.5 is required for operation and is automatically installed if an older version of .NET framework is detected. To install the evaluation software, exit all  programs  currently  running  and  unzip  the  provided MAX17263 Installation Package zipped file.

Double click  the  MAX17263\_Vx\_x\_x Install.exe icon and the  installation  process  begins.  Follow  the  prompts  to complete the installation. The evaluation software can be uninstalled in the Add/Remove programs tool in the Control Panel. After the installation is complete, open the Maxim Integrated/MAX17263  folder  and  run  MAX17263.exe  or select it from the program menu. Figure 2 shows a splash screen containing information about the evaluation kit that appears while the program is loading.

## Table 2. Sense Resistor Selection for MAX17263

| COMPONENT   | VALUE FOR CHIP SENSE RESISTOR   | VALUE FOR BOARD TRACE SENSE RESISTOR   |
|-------------|---------------------------------|----------------------------------------|
| R3          | 0Ω                              | Not populated                          |
| R4          | Not populated                   | 0Ω                                     |
| R5          | Desired sense value             | Not populated                          |
| R6          | Not populated                   | 0Ω (R7 is the trace resistor)          |

## Program Tabs

All  functions of the program are divided under four tabs in  the  main  program  window.  Click  on  the  appropriate tab to move to the desired function page. Located on the ModelGauge m5 tab is the primary user information measured and calculated by the IC. The Graphs tab visually displays the fuel-gauge register changes over time. The Registers tab  allows  the  user  to  modify  common  fuelgauge registers one at a time. The Configure tab allows for  special operations such as initializing the fuel-gauge logging  and  performing  fuel-gauge  reset.  All  tabs  are described in more detail in the following sections.

│

Figure 2. EV Kit Splash Screen

<!-- image -->

Figure 3. EV Kit Bottom Status Bar

<!-- image -->

## Communication Port

The  EV  kit  software  automatically  finds  the  DS91230+ adapter when connected to any USB port. Communication status is shown on the right-hand side of the bottom status bar. See Figure 3. If the adapter cannot be found, a 'No USB Adapter' message is displayed. If the adapter is found, but the IC daughter board cannot be found, a 'No Slave Device' message is displayed. Otherwise, if communication is valid, a green bar updates as the software continuously reads the IC registers.

If  the  DS91230+ is connected, the status bar should be active. The bottom status bar also displays information on data  logging  status,  the  communication  mode,  hibernation status, selected current-sense resistor value, device serial number, and the EV kit GUIs version number.

## MAX17263G Evaluation Kit

## ModelGauge m5 Tab

The ModelGauge m5 tab  displays  the  important  output information read from the IC. Figure 4 shows the format of  the  ModelGauge  m5  Tab.  Information  is  grouped  by function and each is detailed separately.

## State-of-Charge

The State-of-Charge group box displays the main output information  from  the  fuel  gauge:  state-of-charge  of  the cell, remaining capacity, time-to-full, and time-to-empty.

## Cell Information

The Cell  Information group  box  displays  information related  to  the  health  of  the  cell  such  as  the  cell's  age, internal resistance, present capacity, number of equivalent full cycles, and change in capacity from when it was new.

## Measurements

The Measurements group  box  displays ADC  measurements that are used by the fuel gauge to determine stateof-charge.

## Alerts

The Alerts group  box  tracks  all  eleven  possible  alert trigger conditions. If any alert occurs, the corresponding checkbox is checked for the user to see. The clear alerts button resets all alert flags.

## At Rate

The At Rate group box allows the user to input a hypothetical  load  current  and  the  fuel  gauge  calculates  the corresponding hypothetical Qresidual, TTE, AvSOC, and AvCap values.

Figure 4. ModelGauge m5 Tab

<!-- image -->

Evaluates: MAX17263

│

## MAX17263G Evaluation Kit

## Graphs Tab

Figure  5  shows  the  format  of  the Graphs Tab.  Graph information  is  grouped  into  four  categories:  voltages, temperatures,  capacities,  and  currents.  The  user  can turn on or off any data series using the check boxes on the right-hand side of the tab. The graph visible viewing Evaluates: MAX17263

area can be adjusted from 10 minutes up to 1 week. The graphs remember up to 1 week worth of data. If the viewing area is smaller than the time range of the data already collected, the scroll bar below the graphs can be used to scroll through graph history. All graph history information is  maintained  by  the  program.  Graph  settings  can  be changed at any time without losing data.

Figure 5. Graphs Tab

<!-- image -->

│

## MAX17263G Evaluation Kit

## Registers Tab

The Registers tab  allows  the  user  access  to  all  fuel gauge related registers of the IC. Figure 6 shows the format of the Registers tab. By using the drop down menu on the left side of the tab, the user can sort the registers either by function or by their internal address. Each line of data contains the register name, register address, hexa- Evaluates: MAX17263

decimal representation of the data stored in the register, and  if  applicable,  a  conversion  to  application  units.  To write a register location, click on the button containing the register name. A pop-up window allows the user to enter a  new  value  in  either  hexadecimal  units  or  application units.  The  main  read  loop  temporarily  pauses  while  the register updates.

Figure 6. Registers Tab

<!-- image -->

│

## MAX17263G Evaluation Kit

## Configure Tab

The Configure tab allows the user to access any general IC  functions  not  related  to  normal  writing  and  reading of  register  locations.  Figure  7  shows  the  format  of  the Configure tab. Each group box of the Configure tab is described in detail in the following sections.

## Read/Write Register

The user can read a single register location by entering the  address  in  hex  and  clicking  the Read button.  The user can write a single register location by entering the address  and  data  in  hex  and  clicking  the Write button. The read loop is temporarily paused each time to complete this action.

## Log Data to File

Data logging is always active when the EV kit software starts.  The  default  data  log  storage  location  is  the  My Documents/Maxim Integrated/MAX17263/Datalog.csv.

Evaluates: MAX17263

The user can stop data logging by clicking the Stop button.  The user can resume logging by clicking the Start button. All user available IC registers are logging in a .csv formatted file. The user can adjust the logging interval at any time. The user can also enable or disable the event logging at any time. When event logging is enabled, the data log also stores any IC write or reads that are not a part of the normal read data loop and indicates any time communication to the IC is lost.  The GUI automatically begins writing to a new file on each launch.  To manually begin logging to a new file, click the Advance button.

## Reset IC

Clicking the POR button  sends  the  software  POR command  to  the  command  register  to  fully  reset  operation the same as if the IC had been power cycled. Note that resetting the IC when the cell is not relaxed causes fuelgauge error.

Figure 7. Commands Tab

<!-- image -->

│

## Battery Selection

Clicking  the Change  Battery button  opens  the  battery selector  window.  In  this  window,  a  battery  profile  is  cre -ated.    The  battery  profile  stores  the  EZ  Config  model  or custom INI for that battery, as well as any learned parameters,  if  the  save  and  restore  function  is  used.    Ideally, a  new  profile  is  created  for  each  battery  to  store  these parameters.  The software automatically programs the IC when the Save Profile and Update IC button is pressed.

## Save and Restore

The  EV  kit  software  periodically  saves  the  values  from registers related to cell characteristics that change over time. These values are then restored into an IC after reset so that the fuel gauge remains accurate as the cell ages. The  software  automatically  performs  a  save  operation every 10 cycles or when the software exits. The user can change the save interval or force a save operation at any time  by  clicking  the Force Save button.  To  restore  this information after the IC has been power cycled or reset through software, click the Restore button.

## ModelGauge m5 EZ Configuration

Before  the  IC  accurately  fuel  gauges  the  battery  pack, it  must  be  configured  with  characterization  information. This can be accomplished two ways. The first is through a  custom  characterization  procedure  that  can  be  performed by Maxim under certain conditions. The result is an .INI summary file that contains information that can be programmed into the IC on the Configure tab.  Contact Maxim for details on this procedure.

The second method is ModelGauge m5 EZ configuration. This  is  the  default  characterization  information  shipped inside  every  IC.  This  default  model  produces  accurate results for most applications under most operating conditions. It is the recommended method for new designs as it  bypasses  the  custom  cell  characterization  procedure. Some additional information is required from the user for EZ configuration initialization.

For EZ configuration, click the Import INI File button in the Information tab, or click Change Battery in the Configure tab. A Battery Selector panel as shown in Figure 8 pops out. In the panel, select the Use Default IC Settings (EZ Config) option.  Fill  in  the  rated  battery  capacity  and  the charge termination current, select the battery chemistry in the Model ID drop down menu, and select the minimum system voltage  in  the Empty Voltage drop  down  menu. Check the Charge voltage is greater than 4.275V box if full charge voltage is higher than 4.275V. After configuring these items, click the Save Profile and Update IC button to load EZ configuration into the chip.

For characterized battery, choose the Load INI File option in the Battery Selector panel, and select the INI file pro -vided from Maxim, then click Save Profile and Update IC button to load configuration.

Figure 8. New Battery Selector Panel

<!-- image -->

│

## MAX17263G Evaluation Kit

## LED Configuration

LED operation can be customized through the LED tab, as  shown  in  Figure  9.  Functionalities  include  changing the  number  of  LEDs,  changing  LED  brightness,  and choosing  LED  modes.  There  are  four  operation  modes to  choose  from:  (1)  The  'Pushbutton  Start  and  Timer Stop' option is the default setup, where the LED lights up Evaluates: MAX17263

when push-button is pressed and turns off automatically when LEDTimer amount of time is elapsed. (2) Optionally, 'Direct Pushbutton Control' disables the timer. (3) 'Force LEDs to Turn On' always turns on the LED battery percentage indicator, and (4) 'Disable LED' disables the LED functionality. There is also a blinking mode and animation mode available to explore more LED display options.

Figure 9. LED Configuration Panel

<!-- image -->

│

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com/en-us  |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com |
| Vishay                                 | 402-563-6866 | www.vishay.com        |

Note:

Indicate that you are using the MAX17263 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE                 |
|-----------------|----------------------|
| MAX17263GEVKIT# | MAX17263LETD+ EV Kit |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX17263G EV Kit Bill of Materials

| REF_DES                                                       | DNI/DNP                                                       | QTY                                                           | MFG PART #                                                    | MANUFACTURER                                                                         | VALUE                                                         | DESCRIPTION                                                                                           | COMMENTS                                                      |
|---------------------------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| C1, C3                                                        | -                                                             | 2                                                             | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A           | TDK;AMERICAN TECHNICAL CERAMICS;AVK                                                  | 0.1UF                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC +125 DEGC; TC=X7R               | TO                                                            |
| C2                                                            | -                                                             | 1                                                             | GRM155R60J474KE19                                             | MURATA                                                                               | 0.47UF                                                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R           |                                                               |
| D1                                                            | -                                                             | 1                                                             | BZT52B6V2                                                     | VISHAY SEMICONDUCTORS                                                                | 6.2V                                                          | DIODE; ZNR; SMT (SOD-123); VZ=6.2V; IZ= 0.005A                                                        |                                                               |
| D2                                                            | -                                                             | 1                                                             | LTST-C190CKT                                                  | LITE-ON ELECTRONICS INC.                                                             | LTST-C190CKT                                                  | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO DEGC                           | +85                                                           |
| D3-D5                                                         | -                                                             | 3                                                             | BZX384-C5V6                                                   | NXP                                                                                  | 5.6V                                                          | DIODE; ZNR; SMT (SOD-323); Vz=5.6V; Izm=0.000001A; -65 DEGC TO +150                                   | DEGC                                                          |
| J1                                                            | -                                                             | 1                                                             | 95009-7661                                                    | MOLEX                                                                                | 95009-7661                                                    | CONNECTOR; FEMALE; THROUGH HOLE; FLUSH MOUNT RJ-11 MODULAR RIGHT ANGLE; 6PINS                         | JACK;                                                         |
| J2                                                            | -                                                             | 1                                                             | PBC02SAAN                                                     | SULLINS ELECTRONICS CORP.                                                            | PBC02SAAN                                                     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;          |                                                               |
| J3, J4                                                        | -                                                             | 2                                                             | PBC03SABN                                                     | SULLINS                                                                              | PBC03SABN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                             |                                                               |
| JU1                                                           | -                                                             | 1                                                             | PEC02SAAN                                                     | SULLINS                                                                              | PEC02SAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                             |                                                               |
| LED1-LED12                                                    | -                                                             | 12                                                            | LTW-C190DA5                                                   | LITE-ON ELECTRONICS INC                                                              | LTW-C190DA5                                                   | DIODE; LED; ULTRA BRIGHT INGAN WHITE CHIP LED; WHITE; SMT (0603); VF=2.85V; IF=0.005A                 |                                                               |
| P1                                                            | -                                                             | 1                                                             | PEC05DAAN                                                     | SULLINS ELECTRONICS CORP.                                                            | PEC05DAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                     |                                                               |
| Q1, Q2                                                        | -                                                             | 2                                                             | 2N7002;2N7002;2N7002;2N7002                                   | DIODES INCORPORATED;ST MICROELECTRONICS;ON SEMICONDUCTOR;MICRO COMMERCIAL COMPONENTS | 2N7002                                                        | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                         |                                                               |
| R1, R3                                                        | -                                                             | 2                                                             | CRCW04020000Z0EDHP; RCS04020000Z0                             | VISHAY DRALORIC;VISHAY DALE                                                          | 0                                                             | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                   |                                                               |
| R2, R5                                                        | -                                                             | 2                                                             | KRL1220E-M-R010-F                                             | SUSUMU CO LTD.                                                                       | 0.01                                                          | RES; SMT (0805); 0.01; 1%; +/-50PPM/DEGC; 0.5W                                                        |                                                               |
| R11                                                           | -                                                             | 1                                                             | CRCW04021K00FK; RC0402FR-071KL                                | VISHAY DALE;YAGEO PHICOMP                                                            | 1K                                                            | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                   |                                                               |
| R12, R13                                                      | -                                                             | 2                                                             | CRCW0402150RFK; 9C04021A1500FL                                | VISHAY DALE;YAGEO                                                                    | 150                                                           | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                              |                                                               |
| R14, R17, R18                                                 | -                                                             | 3                                                             | CRCW0402499KFK                                                | VISHAY DALE                                                                          | 499K                                                          | RESISTOR; 0402; 499K; 1%; 100PPM; 0.0625W; THICK FILM                                                 |                                                               |
| R15                                                           | -                                                             | 1                                                             | CRCW0402200KFK; RF73H1ELTP2003                                | VISHAY DALE;KOA SPEER ELECTRONICS                                                    | 200K                                                          | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                 |                                                               |
| R16                                                           | -                                                             | 1                                                             | CRCW0402300KFK                                                | VISHAY DALE                                                                          | 300K                                                          | RESISTOR; 0402; 300K OHM; 1%; 100PPM; 0.063W; THICK FILM                                              |                                                               |
| R19-R21, R30                                                  | -                                                             | 4                                                             | ERJ-2RKF1004                                                  | PANASONIC                                                                            | 1M                                                            | RESISTOR; 0402; 1M OHM;1%; 100PPM; 0.10W; THICK FILM                                                  |                                                               |
| R22-R25                                                       | -                                                             | 4                                                             | ERJ-2RKF30R0                                                  | PANASONIC                                                                            | 30                                                            | RESISTOR; 0402; 30 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                  |                                                               |
| R26, R27                                                      | -                                                             | 2                                                             | CRCW0402100KFK; RC0402FR-07100KL                              | VISHAY DALE;YAGEO PHICOMP                                                            | 100K                                                          | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                 |                                                               |
| RT1                                                           | -                                                             | 1                                                             | NCP15XH103F03RC                                               | MURATA                                                                               | 10K                                                           | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                    |                                                               |
| SW2                                                           | -                                                             | 1                                                             | 219-12MST                                                     | CTS                                                                                  | 219-12MST                                                     | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000MOHM |                                                               |
| SW3                                                           | -                                                             | 1                                                             | EVQ-Q2K03W                                                    | PANASONIC                                                                            | EVQ-Q2K03W                                                    | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC            |                                                               |
| U1                                                            | -                                                             | 1                                                             | MAX17263LETD+                                                 | MAXIM                                                                                | MAX17263LETD+                                                 | EVKIT PART - IC; MAX17263LETD+; PACKAGE OUTLINE: 21-0137; LAND PATTERN: 90-0063                       |                                                               |
| PCB                                                           | -                                                             | 1                                                             | MAX17263                                                      | MAXIM                                                                                | PCB                                                           | PCB:MAX17263                                                                                          | -                                                             |
| MOD1                                                          | DNI                                                           | 1                                                             | 89-91230+000                                                  | MAXIM                                                                                | 89-91230+000                                                  | MODULE; DS91230 CONNECTOR EVAL KIT+                                                                   | COMMUNICATION INTERFACE KIT                                   |
| R4                                                            | DNP                                                           | 0                                                             | CRCW04020000Z0EDHP; RCS04020000Z0                             | VISHAY DRALORIC;VISHAY DALE                                                          | 0                                                             | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                   |                                                               |
| R6                                                            | DNP                                                           | 0                                                             | CRCW08050000ZS; ERJ-6GEY0R00V; RC2012J000; RMCF0805ZT0R00     | DIGI-KEY                                                                             | 0                                                             | RESISTOR; 0805; 0 OHM; JUMPER; 0.125W; THICK FILM                                                     |                                                               |
| NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE | NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE | NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE | NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE | NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE                        | NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE | NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE                                         | NOTE: DNI--> DO NOT INSTALL (PACKOUT); DNP--> DO NOT POPULATE |

Evaluates: MAX17263

## MAX17263G Evaluation Kit

## MAX17263G EV Kit Schematic

Evaluates: MAX17263

<!-- image -->

## MAX17263G EV Kit PCB Layouts

MAX17263G EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX17263

│

## MAX17263G EV Kit PCB Layouts (continued)

MAX17263G EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX17263G EV Kit PCB Layouts (continued)

MAX17263G EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX17263G EV Kit PCB Layouts (continued)

<!-- image -->

1'

MAX17263G EV Kit PCB Layout-Bottom Silkscreen

│

## MAX17263G Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                         | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------|-----------------|
|                 0 | 07/18           | Initial release                                                     | -               |
|                 1 | 11/21           | Updated MAX17263G EV Kit Schematic and MAX17263G EV Kit PCB Layouts | 13-16           |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX17263