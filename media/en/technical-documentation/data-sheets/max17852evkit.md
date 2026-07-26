<!-- lastmod 2022-08-03 -->
## MAX17852 Evaluation Kit

## General Description

The  MAX17852  evaluation  kit  (EV  kit) is used  to demonstrate the features and capabilities of the MAX17852 14-channel  high-voltage  smart  sensor  data-acquisition interface IC. The EV kit is coupled with a MAX17841B EV kit  to  establish  communication to a host PC. With communication established, control of the MAX17852 EV kit is executed through the EV kit graphical user interface (GUI) on  the  host  PC.  The  GUI  is  Windows  XP ® ,  Windows Vista ® ,  Windows ®   7,  and  Windows  10  compatible  and is  available  through  your  local  Maxim  Integrated  sales office. Note: References  to  the  MAX17841  in  this  data sheet pertain equally to the MAX17841B as well.

The MAX17852 EV kit design provides a convenient platform for evaluating the features and functions of the IC, in  addition  to  the  IC's  electrical  parameters.  The  EV  kit with vertical communication connectors (P2, P3, P5, and P6) and snap and lock battery pack connector enable the user to quickly build and evaluate a system with up to 32 daisy-chain devices.

Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Provides a Convenient Platform for Evaluating the Features and Functions of the MAX17852
- Versatile GUI Interface for Features Evaluation
- Plug-and-Play Architecture for Rapid System Prototyping
- Force and Sense Pin Headers for Precision Measurement Assessment
- Built-In Resistor Stack for Battery Emulation
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17852 EV Kit Files

| FILE                          | DESCRIPTION                              |
|-------------------------------|------------------------------------------|
| MAX17853_EV kit_Installer.exe | Software: Graphical User Interface (GUI) |
| MAX1785X_EVKIT_A.pdf          | Schematic File pdf                       |
| MAX1785X_EVKIT_A.pdf          | PCB Layout File pdf                      |

<!-- image -->

Evaluates: MAX17852

## MAX17852 Evaluation Kit

## Quick Start (Single UART)

This procedure describes the setup and initialization of a two-module  distributed  daisy-chained  system  using  the MAX17852 in a single UART with external loopback communication  mode. The  user  may  choose  to  expand  the system with additional EV kit modules depending on their requirements and testing needs.

## Required Hardware

- Two MAX17852 EV kits (cables included)
- One Single  UART  MAX17841B  EV  kit  (includes  the MINIQUSB+ interface board)
- 9V to 65V DC power supplies (refer to the MAX17852 IC data sheet for recommended operating range)
- User-supplied Windows XP-, Windows Vista-, Windows  7-,  or  Windows  10-compatible  PC  with  a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The MAX17852 EV kit is fully  assembled  and  functionally  tested  prior  to  shipment.  Follow  the  steps  below  to become acquainted with the MAX17852 EV kit and initialize the single-UART EV kit communication. Enable power supplies only after all connections have been completed:

- 1) Install the MAX17852 EV kit software on your computer by running the MAX17853\_EV kit\_Installer.exe.
- 2) Connect the MINIQUSB+ to the J3 and J4 headers on the single-UART MAX17841B EV kit.
- 3) Connect the USB cable from the PC to the MINIQUSB+ board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is con -nected to the PC. If a window is not seen like the one described above after 30s, remove the USB cable from the MINIQUSB+ and reconnect again. Administrator privileges are required to install the USB device driver on Windows XP, Windows Vista, Windows 7, and Windows 10.
- 4) Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the

Figure 1. MAX17852 EV Kit System for Single UART

<!-- image -->

## Evaluates: MAX17852

│

## MAX17852 Evaluation Kit

Search for the Best Driver for Your Device option. Specify the location of the device driver to be C:\Program Files\MAX17852 (default installation directory) using the Browse button. Refer to the USB\_Driver\_ Help.pdf  document  included  with  the  software  for additional information.

- 5) Download  and  install  the  appropriate  FTDI  drivers from https://www.ftdichip.com/Drivers/D2XX.htm if required.
- 6) Ensure  that  all  jumper  shunts  and  switches  are configured as listed in Table 1, Table 2, and Table 3.
- 7) For  purposes  of  evaluation  a  single  power  supply can  be  used  to  power  all  MAX17852  EV  kits  in  a system  with  a  common  ground.  Configure  the  DC power supply and disable the output.
- 8) Connect each MAX17852 EV kit PACK+ and PACKto  the  power-supply  output.  Terminate  PACK+  to the power-supply positive output and PACK- to the power-supply negative output.
- 9) Connect the four 2-wire black/blue crossover cables, as described below:
- a)  Connect P1 on the MAX17841B EV kit to RXLP\_CONN on the first MAX17852 EV kit
- b)  Connect P2 on the MAX17841B EV kit to TXLP\_CONN on the first MAX17852 EV kit
- c)  Connect TXUP\_CONN on the first MAX17852 EV kit to RXLP\_CONN on the second MAX17852 EV kit
- d)  Connect RXUP\_CONN on the first MAX17852 EV kit to TXLP\_CONN on the second MAX17852 EV kit

Note: The connections  mentioned  in  steps  1-4  can  be generalized  for  any  number  of  devices  within  a  daisychain (up to 32). These connections are also illustrated within the GUI for quick reference.

- 10) On the second MAX17852 EV kit, connect the 2-wire red/black  loopback  cable  from  TXUP\_CONN  to RXUP\_CONN.
- 11) Enable the DC power supply.
- 12) Start the MAX17852 EV kit software by opening its icon in the Start Programs menu. The EV kit GUI software automatically establishes communication with the Maxim MINIQUSB+ interface. The status bar at the bottom of the GUI displays Maxim MINIQUSB+ V02.05.xx and UART Not Initialized (see Figure 8). With the MINIQUSB detected, the user can proceed to the next step.
- 13) In  the Communication tab  (Figure  8),  click  on  the Single UART with External Loopback radio button.
- 14) Select the Initialization tab (Figure 13).
- 15) Click the Wakeup button.
- 16) Click the Hello ALL button.
- 17) In the bottom-right side of status bar, verify communication is established with the UART. Status reads Single UART Connected .
9. In the Event Log group box, verify:
10. 18-08-13 14:22:20 HelloAll Successful
11. 18-08-13 14:22:20 Dev0 MAX17852 Ver 4
12. 18-08-13 14:22:20 Dev1 MAX17852 Ver 4
13. 18-08-13 14:22:20 UART device ready
- 18) The EV kit is now ready for further evaluation.

## Table 1. MAX17852 EV Kit Default Jumper Settings

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| P+B14, B0P-   | Installed        |
| THERM1-THERM6 | On one pin only  |

## Table 2. MAX17841B EV Kit Default Jumper Settings

| JUMPER            | SHUNT POSITION   |
|-------------------|------------------|
| JU1-JU4, JU6, JU7 | On one pin only  |
| JU5               | 1-2              |

## Table 3. MAX17841B EV Kit Default Switch Settings

| SWITCH   | SETTING     |
|----------|-------------|
| SW1, SW2 | ON position |

## Notes:

- 1) The default position of the SW1  and  SW2  batteryemulation resistor ladder is OFF (actuators toward battery connector J7), and the setup is for a battery-pack supply.
- 2) The  optional  position  of  SW1  and  SW2  is  ON  (actuators  toward  MAX17852),  and  the  setup  is  for  an  external power-supply  input  between  PACK+  and  PACK-  with  the 2kΩ resistor ladder.

│

## MAX17852 EV Kit Hardware Description

The MAX17852 EV kit PCB is designed with headers, test points, and jumpers, providing convenient access to circuit nets where measurements can be made, and signals monitored.

Figure 2. MAX17852 EV Kit PCB

<!-- image -->

│

## MAX17852 Evaluation Kit

## Battery-Pack Connector (J7)

Power is applied to the MAX17852 EV kit through the J7 battery-pack  connector,  or  the  PACK+  and  PACK-  test points. The PACK+ and PACK- test points are provided should the user prefer to source power from a laboratory power supply. Caution: Only apply a jumper to B0P- and P+B14 when using a battery pack. Placing a jumper on any  battery  pin  header  with  a  battery  pack  connected places a direct short on the battery-pack cell.

To  power  the  MAX17852  EV  kit  using  a  bench  power supply, terminate PACK+ to the positive post and PACKto  the  negative post of the power supply and install the P+B14 and B0P- jumpers.

## Battery-Cell Emulation

For convenience, the MAX17852 EV kit PCB is equipped with a 2kΩ resistor ladder to emulate a battery pack when using a bench power supply. To apply the emulated batterypack resistor ladder voltages to the MAX17852 cell-voltage measurement inputs (C0-C14), place all SW1 and SW2 switches in the closed or ON position. Pack voltage from a bench power supply applied to the 2kΩ resistor ladder divides  equally  across  the  resistors  and  is  measured  by the MAX17852.

The battery interface includes a battery force and sense pin header (J6) that can be used for precision measurement testing. A forced simulated-battery voltage between adjacent pins on the J6 pin header can be measured at the  pin  header  and  compared  with  the  data  conversion values of the MAX17852 IC.

Figure 3. MAX17852 Battery Interface

<!-- image -->

│

## MAX17852 Evaluation Kit

## AUX Input/Output/ADC

The  auxiliary  (AUX)  input/output/ADC  section  of  the EV  kit  PCB  (see  Figure  4)  gives  the  user  access  to the  MAX17852  AUX  GPIO  pins  and  THRM  pin.  Each GPIO\_AUX connector is equipped to interface directly to NTC thermistors for external temperature measurement. With  the  THERMn  jumper  installed,  the  NTC  sensor  is pulled  up  through  a  10kΩ  resistor  to  the  THRM  pin  on the  MAX17852. This  feature  allows  the  user  to  turn  on or off the 10kΩ pullup through the THRM pin for energy conservation.

The AUXIN[1:0]  pins  on  the  MAX17852  can  be  configured as an I 2 C  master  interface  using  the  I2CEN  bit  in the AUXGPIOCFG register. When the I2CEN bit is high, AUXIN0  operates  as  the  SDA  pin  and  AUXIN1  operates as the SCL pin. In this configuration, the device is capable of functioning as an I 2 C-compatible master and is able to read and write to any number of associated I 2 Ccompatible slave devices connected to the 2-wire bus at clock rates of 100kHz or 400kHz. By default, I2CEN is low and the I 2 C master is disabled.

## Evaluates: MAX17852

The  CSAP  and  CSAN  inputs  on  the  MAX17852  measure the differential voltage across an external precision current  shunt  resistor  to  provide  an  accurate  current measurement. To grant the ability to sense finer current resolutions, the current shunt voltage is input to a current sense  amplifier  (CSA)  which  scales  this  voltage  to  the full-scale voltage of the ADC. The CSA provides battery pack current measurements while enabled (CSAEN = 1). These  are  stored  in  the  CSA  register  as  14-bit  values. The current  measurement is initiated  at  the  start  of  the scan  in  parallel  with  the  voltage  measurement  to  allow for optimization of the acquisition time during the required CSA settling time.

GPIO\_AUX is instrumented with a block header (J5) that allows  the  user  to  perform AUX\_GPIO force and sense accuracy measurements. To perform accuracy measurement through the J5 header, a voltage is forced onto a pin header and can be sensed through the adjacent pin on the header. The measurement can then be compared to the conversion measurement of the MAX17852.

Figure 4. I 2 C CSA GPIO\_AUX Port Access

<!-- image -->

│

## MAX17852 Evaluation Kit

## UART Ports

The  UART  communication  ports  are  identified  as  the upper port (RXU/TXU) and the lower port (RXL/TXL), with reference  to  the  MAX17852  device  on  the  EV  kit  PCB (see Figure 5). Each UART port comprises a differential transmitter and a differential receiver.

Communication  data  received  on  the  lower  receiver  is retransmitted  through  the  upper  transmitter  to  the  next EV kit in the daisy-chain. Communication received on the upper receiver is retransmitted through the lower transmitter and downward through the chain. Each differential pair includes four test points for observing the communication

## Evaluates: MAX17852

signals.  It  is  critical  to  note  that  the  upper  port  (RXP2, RXN2, TXP2, TXN2) test points are referenced to the next higher ground-potential EV kit.

The EV kit UART network and components are designed for the automotive environment and are capable of enduring battery-management-system compliance testing. This includes BCI, ESD, radiated emission, pulse testing, and deactivation  of  the  service-disconnect  switch.  The  PCB and  UART  components  are  designed  and  selected  for 630VDC (max) isolation between each MAX17852 EV kit in the daisy-chained system; however, isolation capability has not been tested on the MAX17852 EV kit.

Figure 5. UART Ports

<!-- image -->

│

## MAX17852 IC Pin Headers (J1-J4)

Each pin on the MAX17852 is available for easy monitoring through the J1 IC pin header (see Figure 6). Header J1 is terminated to pins 1-16 on the MAX17852, J2 is terminated to pins 17-32, J3 is terminated to pins 33-48, and J4 is terminated to pins 49-64.

For  convenience,  certain  IC  pins  are  terminated  to  test  points  for  monitoring  frequently  observed  device  signals. Examples include: VBLK, DCIN, HV, CPP, CPN, SHDNL, VAA, UARTSEL, VDDL1, ALERTIN, ALERTOUT, and THERM.

Figure 6. MAX17852 IC Pin Header (J1)

<!-- image -->

│

## MAX17841B EV Kit and MINIQUSB+

To complete the Maxim EV kit battery-management evaluation system, it is essential to include the MAX17841B EV kit. The MAX17841B EV kit contains the MAX17841B base board and the PC USB interface board (MINIQUSB+). Power and ground for the MAX17841B is derived through the MINIQUSB+ and require no other power source. It is critical to note that the MAX17841B EV kit provides the battery-management evaluation system with capacitive isolation on connectors P1 and P2. See Figure 7 for the MAX17841B EV kit PCB.

Figure 7. MAX17841B EV Kit PCB

<!-- image -->

│

## MAX17852 Evaluation Kit

## Using the Graphical User Interface

The  MAX17852  EV  kit  is  evaluated  in  conjunction  with the  MAX17852  evaluation  software.  The  graphical  user interface (GUI) provides a friendly environment for reading and writing to all device registers, as well as executing device commands.

## Communication Tab

The  GUI  startup  cockpit  is  designed  to  guide  the  user through  hardware  setup  and  provides  overall  startup system  information.  At  startup,  the  GUI  automatically initializes and establishes communication with the Maxim MINIQUSB+ interface board and places the user on the Communication tab  (see  Figure  8).  UART  status  is shown in the lower-right corner of the cockpit.

The GUI is preset to  UART communication with a dual UART interface (see Figure 8). When selecting the UART configuration, the hardware graphic updates to reflect the

proper wiring interface for the selected UART. For communication  to  be  established  between  the  MAX17841B EV kit and MAX17852 EV kit, it is imperative that system wiring match the UART configuration selected.

The  MAX17852  EV  kit  is  designed  to  support Single UART  Interface  with  External  Loopback ,  as  shown in Figure 10. Follow the UART wiring changes shown in Figure 9, Figure 11, and Figure 12 for alternative UART configurations.

Located  in  the Communication tab  (Figure  8)  is  the UART  Options group  box.  Options  set  in  the UART Options group box control TXL and TXU idle state impedance,  adaptive  transmission  setting,  and  packet  error check (PEC). The user can also enable and evaluate the alert function, double-buffer feature, UART DC diagnostic test, and control the alive-counter bit (ALIVECNTEN).

Figure 8. Communication Tab

<!-- image -->

│

Figure 9. Dual UART Interface

<!-- image -->

Figure 10. Single UART Interface with External Loopback

<!-- image -->

│

Figure 11. Single UART Interface with Differential Alert Interface

<!-- image -->

Figure 12. Single UART Interface with Internal Loopback on Device#

<!-- image -->

│

## MAX17852 Evaluation Kit

## Initialization Tab

The Initialization tab  (see  Figure  13)  is  used  to  initialize  the  system and assign addresses to each device in the  daisy-chain.  The  correct Single  UART Interface or Dual UART Interface radio button must be selected for the hardwired system. Communication is only established when the wired system aligns with the interface chosen from  the UARTCFG group  box.  With  the Dual  UART Interface radio button selected, the user has the option of  selecting UPHOST or DOWNHOST .  Further  information  on  UPHOST  and  DOWNHOST  communication  is available in the MAX17852 IC data sheet. The Wakeup button initiates the communication process and the Hello All button assigns the device addresses.

Along with establishing communication, the Initialization tab  provides  a  method  to  log  detailed  communication events. The event and detailed logs can be enabled or

Evaluates: MAX17852

disabled by clicking the checkboxes in the lower-left corner of the GUI.

Note: The FORCEPOR button commands a soft-reset to all MAX17852 devices in the daisy-chained system.

## General Configuration Tab

The General Configuration tab (see Figure 14) is used for programming settling times for AUXTIME , CELLDLY and SWDLY . The FlexPack feature enable and programming  is  easily  controlled  through  drop-down  menus in  the General  Configuration tab.  Parameters  such as TOPCELL and TOPBLOCK ,  required  for  FlexPack programming, can be directly entered.

Information  on  each  of  the  parameters  on  the General Configuration tab is available in the MAX17852 IC data sheet.

Figure 13. Initialization Tab

<!-- image -->

│

## MAX17852 Evaluation Kit

Figure 14. General Configuration Tab

<!-- image -->

## Voltage Measurements Tab

The Voltage Measurements tab  (see  Figure  15)  is  the user interface for visually monitoring all cell measurement and  AUX  conversion  values  in  the  battery  monitoring system. In addition, the Voltage Measurements tab can be constructed to display a visual indication of cell ADC OV/UV, comparator OV/UV, and communication alerts.

In  the Voltage  Measurements tab,  the Scan  Settings and Diag  Settings buttons  in  the Settings group  box on the right side of the GUI open into individual settings panels (see Figure 16 and Figure 17).

The lower right-hand corner in the Voltage Measurements tab displays a legend that indicates visually the state of each voltage measurement and comparator alert. For the visual alert to be active, the thresholds must be set and enabled in the Thresholds tab (Figure 18).

In  the Scan Settings panel,  the  user  can  set  monitoring and control properties for Cell and AUX inputs, in addition to ADC oversample setting/frequency and ADC scan mode.

Note: The user must click the Confirm Settings button at the bottom of the panel for the selections to take effect. Selections made in the Scan Settings panel are applied to each MAX17852 device in the system.

For cell voltages to be  displayed on  the Voltage Measurements tab, simply  enable  the  cells to  be monitored  on  the Scan  Settings panel  and  press  the Confirm Settings button. Pressing the Confirm Settings button  closes  the Scan  Settings panel  and  places  the user back in the Voltage Measurements tab. To have the MAX17852  perform  the  scan  settings  operation,  select the Scan Type from the drop-down list and the number of scans to be performed ( Single Scan , N Scans , or Scan Continuously ).

The IIR  Filter settings  are  also  located  in  the Voltage Measurements tab and are enabled by selecting the IIR Filter  Enable checkbox.  The  user  selects  the  desired filter from the Coefficient Selection drop-down list. The smaller  the  coefficient  is,  the  more  it  improves  noise rejection  at  a  cost  of  increased  settling  time.  Pressing the RDFILT checkbox commands the GUI to read the IIR filter output.

The Diag Settings button in the Voltage Measurements tab  gives  the  user  control  of  diagnostic  current  sources and diagnostic terminations within the MAX17852 device. The user can update diagnostic control for one device or for all devices in the system.

│

Figure 15. Voltage Measurements Tab

<!-- image -->

Figure 16. Scan Settings Panel

<!-- image -->

Evaluates: MAX17852

Figure 17. Diagnostic Settings Panel

<!-- image -->

## MAX17852 Evaluation Kit

## Thresholds Tab

Clicking on the Thresholds tab (see Figure 18) opens the panel where users can enter OV/UV and fault thresholds in hex value or voltage (see Figure 19).

Clicking the Alert Enables button in the top-right corner of the Thresholds tab opens the Alert Enable panel (see Figure 19).

## Alerts/Status Tab

By selecting the Active Device from the drop-down list, the Alerts/Status tab  (see  Figure  20)  displays  the  fault status of the MAX17852 in the system.

The user can use the Clear Active Device Alerts or the Clear All Device Alerts to clear the faults logged in the system. Above the cockpit tabs, the GUI shows the Data Check  Byte  faults and Error  Counts .  Resetting  the error count is done through the Device drop-down at the top left of the GUI. Click Device and select Reset Error Counts .

Figure 18. Thresholds Tab

<!-- image -->

Evaluates: MAX17852

│

## Evaluates: MAX17852

Figure 19. Alert Enable Panel

<!-- image -->

Figure 20. Alerts/Status Tab

<!-- image -->

## MAX17852 Evaluation Kit

## Cell Balance Tab

The Cell  Balance tab  (see  Figure  21)  gives  the  user the  flexibility  for  manual  and  automatic  control  of  the MAX17852 cell-balance  feature.  The Device  Selection drop-down list programs the balancing settings to one or more devices in the system. The Balance Switch Control group box includes a drop-down list for the desired operational balance mode. Note: To update parameters in the Cell Balance tab, select Cell Balancing Disabled from the Mode drop-down  list  prior  to  selecting  the  desired balancing mode.

To  activate  a  cell-balance  switch,  use  the Balance Switch Enable group box to enable the desired balance switch and set the Balancing Expiration Time #1 to the number of  seconds  or  minutes  to  perform  the  balance. In the Alerts/Status tab (Figure 20), be sure to click the Clear  All  Device  Alerts button  (the  interface-specific error alert (INTRFC) must be clear). Next, select Manual Cell  Balancing  by  Second from  the Mode drop-down

list  in  the Balance Switch Control group  box,  and  the cell  balance  immediately  becomes  active  and  the  timer is started. Manual mode allows the user total control over the  cell-balance  switches. Caution: Prevent  accidental activation of adjacent cell-balance switches or the activation of all cell-balance switches when using Manual Cell Balancing Mode .

Note: In Manual Cell Balancing by Second or Minute , only the Cell 1 timer is recognized by the system, with all switches deactivated when the Cell 1 timer expires.

For Automatic Balance modes, the user can enable all balance switches and allow the MAX17852 to control the activation  according  to  the  user-set  parameters.  From the Cell  Balance tab  (Figure  21),  in Automatic mode, the user can set the cell-balance Duty Cycle using  the slidebar  and  other  key  parameters  like UV  Threshold and Balance Switch Diagnostic Thresholds .  The Cell Balance tab  also  includes Balance Switch Fault Alert and CBUVTHR Check Status indicators.

Figure 21. Cell Balance Tab

<!-- image -->

│

## MAX17852 Evaluation Kit

## Read/Write Tab

The Read/Write tab  (Figure  22)  provides  direct  access to the read and write registers of the MAX17852. In the Read/Write tab, the GUI offers several read/write options to  the  user.  The Select  Register group  box  allows  the user to read register contents by highlighting the desired register  and  clicking  the Read All button.  For  example, if the user wants to read the unique ID assigned to each device, scroll down the list and highlight the ID1 (0x8C) register and click the Read All button, then highlight the ID2  (0x8D)  register  and  click  the Read All button.  The contents of the registers are then displayed in the Read Output group box.

Blocks of data in packets of ≤28 registers can be request -ed through the Read Block group  box.  Enter  the Start Address and  set  the Block  Size ,  then  click  the Read Block button. The Read All group box, Write All group box provide alternative methods to write to specific registers in specific addressed devices.

## MAX17841 Tab

The MAX17841B registers can be directly modified using the MAX17841 Register Map sub-tab (see Figure 23). A pull-down arrow to the left of the address number allows the  user  to  identify  register  content.  As  an  example, Figure 23 shows register 0x11 content and has the KeepAlive  [3:0] highlighted.  To  alter  the  keep-alive  timing, the  user  must  type  the  desired  hex  value  of  the  period directly  in  the Update Field edit  box  and  then  click  the Set button on the right. Selecting a parameter in a register automatically  highlights  the  bit  values  of  the  parameter and provides a description of the parameter in the Field Description group box.

Similarly, the SPI Commander sub-tab shown in Figure 24 can be used to send SPI commands to the MAX17841B in an SPI-controlled system.

Figure 22. Read/Write Tab

<!-- image -->

│

Figure 23. MAX17841 Tab (Register Map Panel)

<!-- image -->

Figure 24. MAX17841 Tab (SPI Commander Panel)

<!-- image -->

## MAX17852 Evaluation Kit

## GUI File Options

The File menu drop-down list on the GUI (see Figure 25) offers  powerful  tools  such  as Log  Scan  Data , Save Register Configuration , Load Register Configuration , as well as Restart and Exit .

## Log Scan Data

For  collecting  conversion  data  for  later  analysis,  select Log  Scan  Data from  the File menu  drop-down  list.

Figure 25. Log Scan Data

<!-- image -->

Evaluates: MAX17852

The Log Scan Data window pops up and requests the Number of ADC Scans to Log and  the File Path and Root  Name of  the  location  where  the  data  should  be stored.  Conversion  data  is  taken  according  to  user-set parameters  like Oversample settings  and IIR Filter Enable .

│

## MAX17852 Evaluation Kit

## Device Register Configuration Files

During  evaluation,  the  user  may  want  to  save  the device  register  content  for  later  use.  Saving  device register content is performed by selecting Save Register Configuration from  the File menu  drop-down  list,  as shown in Figure 25. The register file is saved in standard .csv format. Registers can be loaded from a saved register  file  by  selecting  the Load Register Configuration option  from  the  list  and  selecting  the  previously  saved register.csv file.

## Scripting

A script file can be used to set up the GUI and device to operate in specific modes, or to evaluate a sequence of commands for device functionality. Commands for writing scripts can be found in the Command Reference menu item  under  the Help menu  bar  drop-down  list.  Detailed information  on  the  Register  Map  is  available  in  the MAX17852 IC data sheet.

## Evaluates: MAX17852

Before  running  scripts,  follow  the Quick  Start  (Single UART) section. HelloAll Successful and UART device ready response  must  be  displayed  in  the Event  Log on the Initialization tab (Figure 13). Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed).  Verify  P+B14  and  B0P-  jumpers  are  installed. Select  the Voltage Measurements tab  (Figure  15)  and click on the Scan Settings button in the Settings group box to open the Scan Settings panel (Figure 16). Select Cell Enable All and click Confirm Settings at the bottom of  the  panel.  Back  in  the Voltage  Measurements tab, click  on  the Scan  Continuously checkbox.  Figure  26 shows a sample script that programs the cell overvoltage to 1.099V and the undervoltage to 0.9V.

To run a script, select Run Script from the Script menu drop-down  list.  The Open  Script window  pops  up  and requests the location where the Script file is stored. After the  script  is  run,  the  OV/UV  is  indicated  in  the  updated Voltage Measurements tab shown in Figure 27, according to the Legend group box in the lower-right corner.

Figure 26. OV/UV Sample Script

<!-- image -->

│

Figure 27. Voltage Measurements Tab (Updated)

<!-- image -->

## Evaluation Procedures

This  section  gives  the  user  step-by-step  procedures  for functional evaluation of the MAX17852 using the software interface GUI.

## Cell Voltage and Comparator Measurements

The following  procedure  describes  how  to  use  the  GUI and  EV  kit  to  make Cell  Voltage measurements  and observe  measurement  and  comparator  OV/UV  alerts  in the Voltage Measurements tab (Figure 15).

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13). Be  sure  to  set  the  supply  voltage  to  18.0V  for  this procedure.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that the P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  15) and  click  on  the Scan  Settings button  in  the Settings group  box  to  open  the Scan  Settings panel (Figure 16). First click the Cell Enable All , Unipolar All  (Cell) , BLOCK EN checkboxes,  and  select 64x OVSAMPL from  the  OVSAMPL  a  drop-down  list  at the bottom of the panel, and then click the Confirm Settings button.
- 4) Select  the Voltage  Measurements tab  (Figure  15) and  in  the  upper  left  corner,  set  the Scan Type to ADC  and  Comparator  Acquisition ,  and  then  select the Scan Continuously checkbox. Observe that cell voltage levels are approximately equal in value. At this point, the MAX17852 is continuously reading the voltages across each of the 2kΩ resistors in the resistor ladder. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resis -tors in the ladder.
- 5) Select  the Thresholds tab  (Figure  18)  and  set the comparator and cell voltage threshold. Set OVTHSETREG to  1.41V, UVTHSETREG to  1.2V, COMPOVTHREG to  1.5V,  and COMPUVTHREG to 1.1V  (threshold  values  automatically  adjust  to  the closest hex value).

│

## MAX17852 Evaluation Kit

- 6) In  the Thresholds tab,  click  the Write Changes to All Devices radio button, and then open the Alert Enables panel (Figure 19) by clicking the Alert Enables button. Click the Set All button for ALRTOVEN and ALRTUVEN to  command  the  MAX17852  to  check the  OV/UV  condition.  In  the Alert  Enables panel, the user can mask OV/UV faults. The user can also mask  faults  from  generating  an  alert  output  activation by unchecking the appropriate checkboxes in the ALRTIRQEN group box. Finally, click the Update All Devices button at the bottom and close the panel.
- 7) Select the Voltage Measurements tab  (Figure  15). Verify that voltage measurements are approximately 1.28V and no OV/UV voltage measurements or OV/ UV comparator measurements are indicated.  Slowly  increase  the  power-supply  voltage  from  18.0V  to 22.0V. Verify that OV voltage and comparator measurements are detected at the user-programmed OV thresholds by comparing the triangular indicator with the Legend on  the  lower  right  side  of  the  window. The UV voltage and comparator measurements can be verified similarly by decreasing the supply voltage from 18.0V to 14.0V.

In addition to the oversampling filter, the MAX17852 has implemented an IIR noise filter to further reduce noise in the conversion result. Take the following steps in the GUI to become familiar with the IIR filter:

- 1) From the Voltage Measurements tab (Figure 15), in the IIR Filter group box, click on the IIR Filter Enable checkbox.
- 2) Select the desired filter from the Coefficient Selec -tion drop-down list (0.125 for maximum filter effect).
- 3) To  see  the  dynamic  effect  of  the  IIR  filter,  set  the OVSAMPL drop-down  list  in  the Scan  Settings panel (Figure 16) to Single Acquisition , and click the Confirm Settings button.
- 4) Back in the Voltage Measurements tab,  in  the IIR Filter group box, click  the RDFILT checkbox in  the Coefficient  Selection group  box  to  command  the GUI to read the IIR filter  output.  Notice  numerically the noise reduction in voltage readings.

## Auxiliary General-Purpose Input/Output Port

The  following  procedure  demonstrates  the  use  of  the auxiliary  (AUX)  channels  as  a  general-purpose  input/ output (GPIO) port.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  13) and click on the Scan Settings button in the Settings group box to open the Scan Settings panel (Figure 16).  Click  the GPIO Enable All button  and  set  the GPIODIR to Output. Set the GPIODRV to the desired high or low level.
- 4) Click the Confirm Settings button  at  the  bottom  of the panel and then verify with an oscilloscope that the digital voltage is present at the GP/AUXn test pin on the PCB.
- 5) To command the GPIO as an input, on the Scan Settings panel, click the GPIO Enable All button and set the GPIODIR as Input.
- 6) The EV kit contains a 10kΩ pullup resistor on each of the GP/AUXn pins. To pull up each of the GP/AUXn pins, select the Read/Write tab (Figure 22). Using the Read All group box, read register 0x62. Set THRMMODE bit 9 and bit 10 (e.g., if register 0x62 is 0x0000, use the Write All box and send 0x0600). Setting the THRMMODE bit activates the THRM pin on the device (pin no. 29). The EV kit terminates THRM to the 10kΩ pullup resistors.
- 7) Populate the THERMx jumpers in the CSA/AUX INPUT/OUTPUT/ADC I 2 C block on the PCB (see Figure 4) and verify the logical state of the GP/AUX0GP/AUX3 pins on the MAX17852 by reading register GPIOCFG (0x17). Verify the GPIORD bits are set to logic 1.

## AUX Absolute/Ratiometric Measurement

The software GUI and the MAX17852 EV kit are developed with features that allow the user to evaluate the performance of the AUX channels when configured as analog absolute  measurements  or  analog  ratiometric  measurements. The following procedure shows how to configure the AUXIN0-AUXIN3 pins on the MAX17852 for analog measurement.

│

## Evaluates: MAX17852

## MAX17852 Evaluation Kit

## Key Points to Consider:

- AUX GPIO can be used in mixed-mode applications
- Each port can be independently configured for GPIO, AUX ratiometric, or AUX absolute measurement

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  15) and click on the Scan Settings button in the Settings group box to  open  the Scan Settings panel  (Figure  16). Click the AUX Enable All button to enable the AUX channels as analog. Set the AUXREFSEL to Absolute when  absolute  measurements  are  desired  or set  to Ratiometric when  ratiometric  measurements are  to  be  evaluated.  Temperature  measurements using  NTC  are  generally  ratiometric  for  improved temperature accuracy.
- 4) Other conversion characteristics available to the user in  the Scan Settings panel are OVSAMPL , FOSR , SCANMODE and BLOCK EN . From the OVSAMPL drop-down list, select 64x Oversampling . Click Confirm Settings at the bottom of the window.
- 5) From the hardware perspective, it is necessary to verify the THRM switch is active during conversion (bits 9 and 10 of register 0x62). Setting the THRMMODE bit to Automatic activates the THRM switch only during conversion. In Manual On mode, the THRM switch is always active. With the filter on, the MAX17852 EV kit AUXIN0-AUXIN3 pins, Manual mode is recommended.  With  the THRM output active, V AA  reference is applied to each AUXn 10kΩ pullup resistor. Verify that PCB THERMn jumpers are installed.
- 6) Back  on  the Voltage  Measurements tab,  click  the Scan  Continuously checkbox.  Observe  from  the GP/AUX0-GP/AUX3 test  points  on  the  MAX17852 (Figure 4) that AUX levels are approximately 3.3V in value. Terminate a 10kΩ NTC thermistor to each of the GPIO\_AUXn connectors and the conversion values update accordingly.

## Cell Balancing

## Manual Cell Balancing with CBTIMER Shutoff

This procedure details a simple process for using the GUI to set up and run manual cell balancing with shutoff from the programmable CBTIMER register.

## Key Points to Consider:

- User must set mode to Disable Cell Balancing prior to updating cell-balance parameters.
- In  manual  mode,  the  user  can  enable  and  disable balance switches at any time before the timer expires.
- AUTOBALSWDIS affects  cell-balance  switch behavior in manual cell-balancing modes only.
- In  manual  cell-balancing  mode,  the  user  should avoid  activation  of  adjacent  cell-balance  switches  or activation of all switches at the same time.
- Duty  Cycle slidebar  is  not  functional  in  manual cell-balancing mode.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage  Measurements tab (Figure 15)  and  click  on  the Scan  Settings button  in  the Settings group box to open the Scan Settings panel (Figure 16). Select Cell Enable All and click Confirm Settings at the bottom of the panel.
- 4) Back in the Voltage Measurements tab, click on the Scan Continuously checkbox. Observe that cell voltage levels are approximately equal in value. At this point, the MAX17852 is continuously reading the voltage across each of the 2kΩ resistors in the resistor ladder. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder.
- 5) Select the Alerts/Status tab (Figure 20) and click the Clear  All  Device  Alerts button.  The  INTRFC  alert is  set  when  the  user  tries  to  make  changes  to  the Balancing Expiration Time when a timer is established  for  a  cell-balance  mode  or  other  command faults. The user must select Cell Balancing Disabled in the Balance Switch Control group box (Figure 21) to update the Balancing Expiration Time .

│

## MAX17852 Evaluation Kit

- 6) Select the Cell Balance tab (Figure 21) and enable odd balance switches by clicking the checkboxes in the Balance Switch Enable group box.
- 7) Set the Balancing Expiration Time in  row 1 to the desired timer value (e.g., 100 or a value up to 1023).
- 8) In  the Balance  Switch  Control group  box,  select Manual Cell Balancing by Second from the Mode drop-down list. Observe in the lower left corner of the Cell  Balance tab  that  the Counter box  increments and the Timer is activated.
- 9) Select  the Voltage  Measurements tab  again  and observe the change in resistor stack cell voltage due to the activation of the odd-cell balance switches.
- 10)  In the Cell Balance tab, select the Mode drop-down and  click  on Cell  Balancing  Disabled to  disable manual cell balancing.

The  same  procedure  can  be  used  to  verify  functionality of the  even-cell  balance  switches.  In  manual cell-balancing  mode, the cell-balance switch can be set to automatically disable when a conversion is executed. To  enable  the  automatic  cell-balance  switch-disable feature,  set AUTOBALSWDIS bit  12  in  the  SCANCTRL register  (0x66)  to  logic  1.  When  using  the  auto  cellbalance switch-disable feature, set the time delay before the ADC conversion value:

- 1) Use the Read/Write tab (Figure 22) to read register 0x66.
- 2) Rewrite  the  SCANCTRL  register  (0x66)  with  bit  12 set.
- 3) Program  the  BALSWDLY  register  (0x63)  with  the necessary CELLDLY delay  time  from  when  a  balance switch opens to when the MAX17852 performs the  conversion.  Setting  the  BALSWDLY  register  to 0x0F0F  sets  the  cell  and  switch  delay  to  1.44ms. Alternatively,  the  parameters  can  be  programmed using the General Configuration tab (Figure 14).

Detailed information on manual cell-balancing features is available in the MAX17852 IC data sheet.

## Current Measurement

The  following  procedure  demonstrates  the  use  of  the CSAP  and  CSAN  inputs  to  provide  an  accurate  current  measurement.  To  augment  the  accuracy  performance over multiple measurement cycles, the user can enable  the  embedded  IIR  filter  and  Oversampling.  The Oversampling and IIR filter provide a means to implement

## Evaluates: MAX17852

noise rejection and effectively increase the resolution of each  acquisition  at  a  cost  of  increased  settling  time.  It is a trade-off between response times to changing input values versus the noise attenuation.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that the P+B14 and B0P- jumpers are installed.
- 3) Connect a precision voltage source to the CSAP and CSAN inputs of the MAX17852 EV kit to emulate the voltage across a shunt resistor. Terminate CSAP to the precision voltage source positive output and CSAN to the precision voltage source negative output. Terminate CSAP to the AGND port to allow CSAN to go above or below AGND, depending on the direction of the current flow.
- 4) Select the Voltage Measurements tab (Figure 15) and click on the Scan Settings button in the Settings group box to open the Scan Settings panel (Figure 16). Click the CSA EN button to enable the current sense amplifier inputs (CSAP, CSAN). Select the 4V/V Current Sense Amplifier Gain from the CSAGAIN - Current Sense Amplifier Gain Selection drop-down list at the bottom of the panel. Select 64x OVSAMPL from the OVSAMPL drop-down list. Click the Confirm Settings button.
- 5) Back in the Voltage Measurements tab (Figure 15), in the IIR Filter group box, click on the IIR Filter Enable checkbox.
- 6) Select the desired filter from the Coefficient Selec -tion drop-down list (0.125 for maximum filter effect). Click the RDFILT checkbox in the Coefficient Selec -tion group box to command the GUI to read the IIR filter output.
- 7) From the Voltage Measurements tab (Figure 15), set the Scan Type to ADC Acquisition , and then select the Scan Continuously checkbox. Verify that the CSA cell reads x8000 when the precision voltage source connected to CSAP and CSAN is at 0V. Slowly increase the power-supply voltage from a minimum of -300mV to a maximum of +300mV and observe the CSA cell provide voltage measurements from the battery pack.

│

## MAX17852 Evaluation Kit

## Evaluates: MAX17852

Figure 28. CSA Configuration Diagram

<!-- image -->

## I 2 C Master

The  following  procedure  demonstrates  the  use  of  the auxiliary  channels  (AUXIN0, AUXIN1) as SDA and SCL for  I 2 C  interface.  Prior  to  the  use,  the  I 2 C  Master  must be configured by writing data to the registers described below.  Detailed  descriptions  of  the  Register  Map  are available in the MAX17852 IC data sheet.

To evaluate the I 2 C Master interface, the user must make the following hardware changes to the MAX17852 EV kit:

- Populate R26 (0Ω)
- Populate R143 (0Ω)
- Populate R148 (0Ω)
- Do not populate R116 (1kΩ)
- Do not populate R117 (1kΩ)

See the MAX1785x EV Kit Schematics for further details on the location of the resistors.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be dis-
2. played in the Event Log on the Initialization tab (Figure 13).
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that the P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab (Figure 15) and click on the Scan Settings button in the Settings group box to open the Scan Settings panel (Figure 16). Click the I2C EN button to enable the I 2 C Master pins (SDA, SCL).
- 4) Click the Confirm Settings button at the bottom of the panel and then verify with an oscilloscope that SDA and SCL are idle high at the AUXIN0 and AUXIN1 IC pins 21 and 22 on the EV kit.
- 5) Select the Read/Write tab (Figure 22). Using the Write All group box, send 0x0000 to register STATUS1 (0x02). This resets the STATUS1 register.
- 6) Using the Write All group box, send 0x0004 to register I2CPNTR (0x84). This writes a pointer to address 0x0004.
- 7) Write 0xAA55 to register I2CWDATA1 (0x85). This register stores the upper data bytes for I 2 C Master Write Mode transaction.

│

## MAX17852 Evaluation Kit

- 8) Write 0x9669 to register I2CWDATA2 (0x86). This register stores the lower data bytes for I 2 C Master Write Mode transaction.
- 9) Configure the I 2 C Master mode to a simple write transaction by writing 0x2000 to register I2CCFG (0x89).
- 10)  Clear the current status of the I 2 C Master by writing 0x0000 to register I2CSTAT (0x8A).
- 11)  Initiate an I 2 C Master transaction by writing 0x78A8 to register I2CSEND (0x8B). User may observe the I 2 C communication with EV kit Flash by probing IC pins 21 and 22 during data transfer.
- 12)  Using the Read All group box, read register I2CSTAT (0x8A) to access the current status of the I 2 C Master. An output of 0xC000 indicates that the transaction was completed with no errors.

## Automated Cell Balancing with CBUVTHR and CBTIMER (Host Sleep Mode)

This procedure details a simple process for using the GUI to set up and run the Automated Cell Balance with shutoff threshold set by the programmable CBUVTHR register.

## Key Points to Consider:

- User must set Mode in the Balance Switch Control group box to Cell Balancing Disabled prior to updating the parameters in the Cell Balance tab (Figure 21)
- Enable  or  disable  cell-balance  parameters  in Auto Cell Balancing mode triggers an INTRFC alert in the Alerts/Status tab (Figure 20)
- User  must  uncheck  the Scan  Continuously checkbox in the Cell Measurement (Figure 15) to prevent an  INTRFC  alert  from  being  set  when Auto  Cell Balancing mode is activated
- In Auto Cell Balancing mode, the IC state machine prevents  adjacent  cell-balance  switches  from  being activated simultaneously
- The Duty Cycle slidebar  is  not  functional  in  Manual Cell Balancing
- The  UV  threshold  can  be  used  independently  or  in conjunction  with  cell  balancing  timer(s)  (CBEXP1  or CBEXPn)

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  15) and  click  on  the Scan  Settings button  in  the Settings group  box  to  open  the Scan Settings panel (Figure 16). Select Cell Enable All and Unipolar All (Cell) . Select 32x Oversampling from the OVSAMPL drop down then click Confirm Settings at the bottom of the window.
- 4) In  the Voltage  Measurements tab,  set  the Scan Continuously button. Observe that cell voltage levels  are  approximately  equal  in  value. At  this  point, the MAX17852 is continuously reading the voltages across each of the 2kΩ resistors in the resistor lad -der.  Increasing  the  power-supply  voltage  increases the voltage across each of the 2kΩ resistors in the ladder. With the power supply set to 18.0V, each resistor  ladder  simulated  cell  voltage  reads  approximately 1.286V.
- 5) The  INTRFC  alert  is  generated  when  an  improper communication  action  is  taken.  Select  the Alerts/ Status tab (Figure 20) and click the Clear All Device Alerts button to clear the INTRFC alert and all other alerts in the system.
- 6) Select the Cell Balance tab (Figure 21) and enable ALL balance switches by clicking the 14 checkboxes in the Balance Switch Enable group box.
- 7) Set the Balancing Expiration Time in rows 1-14 to the  desired  timer  value  for  each  cell  balance  (e.g., 100 or a value up to 1023).
- 8) In the Under Voltage Threshold group box, if using a  benchtop  power  supply,  select  the User-Defined CBUVTHR from  the  drop-down  list  and  set  the UV Threshold to  1.5V.  If  using  a  battery  pack,  set  the voltage to the desired undervoltage level.
- 9) In  the Balance  Switch  Control group  box,  select ADC/CAL and CBUVTHR Check Enabled from the Measure Enable drop-down list.
- 10)  In Auto  Cell  Balance mode,  the  state  machine enables even and odd switches inversely. Using the slidebar,  set  the Duty Cycle to  100%  to  effectively control a 50% duty cycle for each switch.
- 11)  Use  the Mode drop-down  and  select  one  of  the Automated  Cell  Balancing modes  to  activate  the Balancing Expiration Timer . Immediately the

## Evaluates: MAX17852

│

## MAX17852 Evaluation Kit

CBUVTHR  Check  Status buttons  illuminates  red (CBUVTHR  set  to  1.5V  in  step  8  is  greater  than cell-voltage measurement) and the driver shuts off.

- 12)  Observe in the lower left corner of the Cell Balance tab,  the Counter box  increments  and Timer box count continues until the timer is expired.
- 13)  From the Mode drop-down list in the Cell Balance tab,  click  on Cell  Balancing  Disabled to  disable automated cell balancing.

## Automated Cell Balancing with MINCELL Threshold (Host Sleep Mode)

This procedure details the process for using the GUI to set  up  and  run  the  automated  cell  balance  with  shutoff threshold set by the cell with the minimum cell voltage.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage  Measurements tab (Figure 15)  and  click  on  the Scan  Settings button  in  the Settings group box to open the Scan Settings panel (Figure 16). Click the Cell Enable All and Unipolar All (Cell) buttons. Select 64x Oversampling from the OVSAMPL drop-down list, and then click the Confirm Settings button at the bottom of the window.
- 4) In the Voltage Measurements tab, click on the Scan Continuously checkbox.  Observe  that  cell-voltage levels are approximately equal in value. At this point, the  MAX17852  is  continuously  reading  the  voltages across  each  of  the  2kΩ  resistors  in  the  resistor  lad -der. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder. With the power supply set to 24.0V each resistor ladder simulated cell voltage reads approximately 1.72V.
- 5) The  INTRFC  alert  is  generated  when  an  improper communication  action  is  taken.  Select  the Alerts/ Status tab (Figure 20) and click the Clear All Device Alerts button to clear the INTRFC alert and all other alerts in the system.
- 6) Select the Cell Balance tab (Figure 21) and enable ALL balance switches by clicking the 14 checkboxes in  the Balance  Switch  Enable group  box.  Set  the Balancing  Expiration  Timer in  rows  1-14  to  the desired timer value for each cell balance (e.g., 100 or a value up to 1023).
- 7) In  the Under Voltage Threshold group  box,  select MINCELL-Defined  CBUVTHR from  the  drop-down list.
- 8) In  the Balance Switch Control group  box,  set  the Measure Enable drop-down to ADC/CAL and CBUVTHR Check Enabled .
- 9) In Auto  Cell  Balance  Mode ,  the  state  machine enables even and odd switches inversely. Using the Duty Cycle slidebar, set to 100% to effectively control a 50% duty cycle for each switch.
- 10)  Use the Mode drop-down list and select any one of the Automated Cell Balancing modes to activate the Balancing Expiration Time . Immediately, the CBUVTHR register becomes loaded with the lowest cell voltage, setting the UV Threshold .  Due to the PCB resistor ladder cell emulation, some of the CBUVTHR Status  buttons  illuminate  red  as  the  cell-balance switches  (SWn)  are  activated.  Lowering  the  powersupply voltage illuminates all CBUVTHR  Check Status indicators.
- 11)  Observe in the lower left corner of the Cell Balance tab, that the Counter box increments and Timer box counts continue until the timer is expired.
- 12)  Select the Alerts/Status tab and observe that CBDONE is activated. Click on the Clear All Device Alerts button.
- 13)  Select the Mode drop-down list in the Cell Balance tab and click on Cell Balancing Disabled to disable automated cell balancing.

## Evaluates: MAX17852

The  graph  in  Figure  29  displays  an  actual  automated cell-balance cycle on a 14-cell ICR18650-26 battery pack using  MINCELL  as  the  shutoff  mechanism. As  seen  in the graph, each cell continues to discharge through the MAX17852 cell-balance switch until the MINCELL threshold is achieved.

│

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section, with a few exceptions.
- a) Connect power to both EV kits through terminal BAT12 to represent a 12-cell pack.
- b) For  both  EV  kits,  set  the  PCB  Resistor  Ladder DIP Switches (SW1) to the ON position (closed). Close ladder DIP switches 1-5 on SW2.
- c) Verify  B0P-  jumper  is  installed.  Remove  the P+B14 jumper.
- 2) Apply 18.0V power to the system, Initialize with Single UART Interface. Use Wakeup and Hello All to establish communication. Verify that HelloAll Successful and UART device ready response is displayed in the Event Log on the Initialization tab.
- 3) Select  the Voltage  Measurements tab  (Figure  15) and  click on the Scan  Settings button in the Settings group box to open the Scan Settings panel (Figure 16). Select Cell Enable for  Cell  1-Cell  12.  Click Confirm Settings at the bottom of the window.

│

Figure 29. Automated Cell Balance

<!-- image -->

## Flexible Battery-Pack Connectivity

The flexible battery pack feature allows the user to optimize the battery pack system while maintaining hardware consistency across the pack's battery modules with variable  number  of  cells.  The  following  procedure  demonstrates the default state of flexible battery pack and the proper activation.

## Key Points to Consider:

- The FlexPack feature is considered partially enabled at power-up and must be fully enabled when the less than 14 cells are terminated to the MAX17852.
- When fully enabled, FlexPack uses internal MOSFETs to route power from the highest voltage switches input pin (SW8-SW14) to the DCIN pin.
- Programming FlexPack TOPCELL to a lower number cell than terminated to the device places a low ohmic short  between  the  higher  SWn  input  and  the  lower programmed TOPCELL SWn input. Caution must be exercised.

## MAX17852 Evaluation Kit

- 4) In  the Voltage  Measurements tab,  click  on  the Scan Continuously checkbox. Observe that the cell voltage  levels  are  approximately  equal  in  value. At this point, the MAX17852 is continuously reading the differential  voltages  across  the  Cell  1-Cell  12  2kΩ emulation resistors. Increasing the power-supply voltage increases the voltage across each of the 2kΩ re -sistors in the ladder.
- 5) To  fully  activate  the  FlexPack,  select  the General Configuration tab (Figure 14). Set TOPCELL to the corresponding hex number of cells. Set TOPCELL to 0xC.
- 6) Generally, TOPBLOCK is programmed the same as TOPCELL unless  bus  bar  measurement is desired. Refer to the MAX17852 IC data sheet for details on TOPBLOCK feature and operation. For the FlexPack exercise, Set TOPBLOCK to 0xC.
- 7) Programming TOPCELL to battery cell 12 terminates DCIN pin to battery cell 12. To verify operation, the user  can  connect  a  voltmeter  between  IC  pin  55

## Table 4. UART-to-SPI Hardware Change

| ITEM                      | REF_DES            | COMPONENT      | COMMENTS                                        |
|---------------------------|--------------------|----------------|-------------------------------------------------|
| 0Ω resistor (0603)        | R13, R14, R15, R16 | RC1608J000CS   | Remove UART components from SPI signals         |
| TRAN; PNP; SOT-363        | Q1, Q2             | BC857BS-7-F    | Remove UART components from SPI signals         |
| 10kΩ ±1% resistors (0603) | R9                 | CRCW060310K0FK | Remove pullup from UARTSEL                      |
| 10kΩ ±1% resistor (0603)  | R10                | CRCW060310K0FK | Populate pulldown on UARTSEL to select SPI      |
| 0Ω resistor (0603)        | R141               | RC1608J000CS   | Populate to terminate ALERTOUT to level shifter |
| 0Ω resistor (0603)        | R1-R4              | RC1608J000CS   | Populate SPI components                         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17852EVKIT# | EV kit |

#Denotes RoHS compliance.

## Evaluates: MAX17852

(SW12) and test point DCIN. Set TOPCELL to  hex 0xF  to  deactivate  and  observe  the  forward  biased diode  (~820mV)  between  IC  pin  55  (SW12)  and DCIN.  Set TOPCELL to  hex  0xC  to  activate  the internal cell 12-FlexPack MOSFET and observe the internal MOSFET forward voltage. (~100mV).

The  MAX17852  EV  kit  provides  the  user  with  an  introduction  to  the  features  and  functions  of  the  MAX17852 device. Refer to the MAX17852 IC data sheet for detailed explanations  of  the  product  features,  register  set,  and modes of operation.

## MAX17852 UART-to-SPI Hardware

To  communicate  directly  to  the  IC  through  the  SPI interface,  populate  the  components  (see  Table  4)  and insert the MINIQUSB+ to SPI converter directly into the MAX17852 EV kit. Additionally, the user must externally supply a voltage to the SHNDL pin on the EV kit.

│

## MAX17852 EV Kit Bill of Materials (UART)

| ITEM      | QTY                                                                                                                        | REF DES                                         | VAR STATUS          | MAXINV                                                            | MFG PART #                                        | MANUFACTURER    | VALUE DESCRIPTION                                                                                                                                                                                            | MAX17852 VARIANT COMMENT                                                |
|-----------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|---------------------|-------------------------------------------------------------------|---------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| 1         | 11 ALARM_IN_UP, ALARM_OUT_LP, RXLP_CONN, RXUP_CONN, CURRENTSENSE                                                           | GPIO_AUX0-GPIO_AUX3, TXLP_CONN, TXUP_CONN, Pref | 01-50258402702P-15  | 502584-0270                                                       | MOLEX                                             | 502584-0270     | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                                                                                                                                       | Remove Connector GPIO_AUX4 and GPIO_AUX5. Place CURRENTSENSE Connector. |
| 2 22      | ALERTIN, ALERTIN_P, ALERTOUT, CPN, CPP, DCIN, HV, RXP1, RXP2, RXUN, RXUP, TXLN, TXLP, TXP1, TXP2, TXUN, UARTSEL, VAA, VBLK | RXLN, RXLP, TXUP, Pref                          | 02-TPMINI5000-00    | 5000                                                              | KEYSTONE                                          | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST TEST POINT; PIN DIA=0.1IN; TOTAL |                                                                         |
| 3 9       | ALERTIN_N, GP/AUX0, GP/AUX1, GP/AUX2, GP/AUX3, RXN1, RXN2, TXN1, TXN2                                                      | Pref                                            | 02-TPMINI5001-00    | 5001                                                              | KEYSTONE                                          | N/A             | LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                 | Remove Test Point GP/AUX4 and GP/AUX5.                                  |
| 4 6       | AUXGND, OPTO_OUT, SHDNL, THERM, VDDL1, VDDL2/3                                                                             | Pref                                            | 02-TPMINI5004-00    | 5004                                                              | KEYSTONE                                          | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT COLD TEST                                   | FOR                                                                     |
| 5 16      | B0P-, B1B0, B2B1, B3B2, B4B3, B5B4, B6B5, B7B6, B8B7, B9B8, B11B10, B12B11, B13B12, B14B13, P+B14                          | B10B9, Pref                                     | 01-PEC02SAAN2P-21   | PEC02SAAN                                                         | SULLINS ELECTRONICS CORP.                         | PEC02SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; NOTE: BOTH PINS ARE CIRCULAR                                                                                                           |                                                                         |
| 6 21      | BAT0-BAT14, GND_A, GND_A1-GND_A3, PACK+, PACK-                                                                             | Pref                                            | 01-9020BUSS20AWG-00 | 9020 BUSS                                                         | WEICO WIRE                                        | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                                     |                                                                         |
| 7 1       | C1                                                                                                                         | Pref                                            | 20-000U1-01         | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01           | YAGEO; MURATA; MURATA                             | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                  |                                                                         |
| 8 1       | C2                                                                                                                         | Pref                                            | 20-1000P-BA88       | GCM155R72A102KA37                                                 | MURATA                                            | 1000PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                                           |                                                                         |
| 9 2       | C3, C85                                                                                                                    | Pref                                            | 20-0001U-R1         | GRM188R70J105KA01; CL10B105KQ8NNNC                                | MURATA; SAMSUNG ELECTRONICS                       | 1.0UF           | CAPACITOR; SMT (0603); CERAMIC; 1UF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG=- 55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 0001u-63                                                         | 20-                                                                     |
| 10 3      | C4, C5, C7                                                                                                                 | Pref                                            | 20-00U47-11C        | GCM188R71C474KA55                                                 | TDK                                               | 0.47UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                                            |                                                                         |
| 11 1      | C6                                                                                                                         | Pref                                            | 20-004U7-DA51       | CGA4J1X7R1E475K125AC                                              | TDK                                               | 4.7UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                                             |                                                                         |
| 12 1      | C14                                                                                                                        | Pref                                            | 20-0100P-Y8         | GRM1555C1E101GA01                                                 | MURATA                                            | 100PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 25V; TOL=2%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                  |                                                                         |
| 13 1      | C15                                                                                                                        | Pref                                            | 20-3900P-26         | C1608C0G1H392K080AA                                               | TDK                                               | 3900PF          | CAP;SMT (0603);3900PF;10%;50V;C0G;CERAMIC CHIP                                                                                                                                                               |                                                                         |
| 14 1      | C18                                                                                                                        | Pref                                            | 20-002U2-Q1         | GRM32ER72A225KA35; CGA6N3X7R2A225K230; CC1210KKX7R0BB225          | MURATA; TDK; YAGEO                                | 2.2UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +125 DEGC; TC=X7R                                                                                                |                                                                         |
| 15 14     | C20, C22-C33, C84                                                                                                          | Pref                                            | 20-000U1-B82        | CGA5H2X8R2A104K115; C3216X8R2A104K115AA                           | TDK;TDK                                           | 0.1UF           | CAPACITOR; SMT (1206); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; MODEL=CGA SERIES; TG=-55 DEGC TO +150 DEGC; TC=X8R AUTO                                                                                           |                                                                         |
| 16 1      | C21                                                                                                                        | Pref                                            | 20-00U47-E9         | GRM21BR72A474KA73; 08051C474K4T4A                                 | MURATA; AVX                                       | 0.47UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.47UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                 |                                                                         |
| 17 14     | C34-C47                                                                                                                    | Pref                                            | 20-3900P-09         | GRM319R72A392JA01                                                 | MURATA                                            | 3900PF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 3900PF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                  |                                                                         |
| 18 16     | C62-C75, C104, C109                                                                                                        | Pref                                            | 20-000U1-P6B        | C1608X7R1E104K080AA                                               | TDK                                               | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                   | Populate C104 and C109 with 0.1uF                                       |
| 19 4      | C77, C80, C81, C83                                                                                                         | Pref                                            | 20-0018P-27         | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050              | KEMET; MURATA; TDK                                | 18PF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                                     |                                                                         |
| 20 1      | C87                                                                                                                        | Pref                                            | 20-0039P-E4         | C0603C390K1GAC                                                    | KEMET                                             | 39PF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 39PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+/                                                                                                         |                                                                         |
| 21 1      | C88                                                                                                                        | Pref                                            | 20-0100P-22         | C1206C101J1GAC                                                    | KEMET                                             | 100PF           | CAPACITOR; SMT; 1206; CERAMIC; 100pF; 100V; 5%; C0G; -55degC to + 125degC; 0 +/- 30PPM/degC                                                                                                                  |                                                                         |
| 22 4      | C89-C92                                                                                                                    | Pref                                            | 20-2200P-J7         | CGA5H4C0G2J222J                                                   | TDK                                               | 2200PF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 2200PF; 630V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                          |                                                                         |
| 23 1      | C93                                                                                                                        | Pref                                            | 20-0015P-CA80       | GCM1885C2A150JA16                                                 | MURATA MURATA;                                    | 15PF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 15PF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G; AUTO                                                                                                              |                                                                         |
| 24 5      | C105, C106, C107, C108, C86                                                                                                |                                                 | Pref 20-00U01-11    | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01 | PANASONIC; SAMSUNG;; MURATA                       | 0.01UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEG; TC=X7R                                                                                                                   | Populate C86 with 0.01uF                                                |
| 25 17     | D3-D8, D11-D14, D16, D18-D21, D24, D25                                                                                     | Pref                                            | 30-SP402101FTG-00   | SP4021-01FTG                                                      | LITTELFUSE                                        | 5V              | DIODE; TVS; SMT (SOD-323); VRM=5V; IPP=25A                                                                                                                                                                   |                                                                         |
| 26 2      | D9, D10                                                                                                                    | Pref                                            | 30-PESD3V3U1UB-00   | PESD3V3U1UB                                                       | NXP                                               | 3.3V            | DIODE; TVS; SMT (SOD-523); PIV=3.3V; IF=0.1A                                                                                                                                                                 |                                                                         |
| 27 4 28 4 | D26, D28, D30, D31 D29, D32-D34                                                                                            | Pref Pref                                       | 30-DFLS11007-00     | DFLS1100-7 SESDONCAN1LT1G                                         | DIODES INCORPORATED                               | DFLS1100-7      | DIODE; SCHOTTKY; SMT; PIV=100V; IF=1A DIODE; TVS; SMT (SOT-23); VRM=24V;                                                                                                                                     |                                                                         |
| 29        |                                                                                                                            |                                                 | 30-SESDONCAN1L-00   |                                                                   | ON SEMICONDUCTOR                                  | SESDONCAN1LT1G  | IPP=3A                                                                                                                                                                                                       |                                                                         |
| 1         | J5                                                                                                                         | Pref                                            | 01-PEC12DAAN24P-19  | PEC12DAAN                                                         | SULLINS ELECTRONICS CORP                          | PEC12DAAN       | CONNECTOR; MALE; THROUGH HOLE; .1IN CC; BREAKAWAYHEADER; STRAIGHT; 24PINS                                                                                                                                    |                                                                         |
| 30 1      | J6                                                                                                                         | Pref                                            | 01-PBC15DAAN30P-21  | PBC15DAAN                                                         | SULLINS ELECTRONICS                               | CORP. PBC15DAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 30PINS CONNECTOR; FEMALE; SMT; 1.5MM PITCH                                                                                                               |                                                                         |
| 31 1      | J7                                                                                                                         | Pref                                            | 01-503154189018P-35 | 5031541890                                                        | MOLEX                                             | 5031541890      | CLIK-MATE; WIRE-TO-BOARD PCB RECEPTACLE; DUAL ROW; STRAIGHT; 18PINS                                                                                                                                          |                                                                         |
| 32 4      | L1-L4                                                                                                                      | Pref                                            | 51-00100-0AQ        | MMZ2012S601A                                                      | TDK                                               | 600             | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.5A                                                                                                                                                    |                                                                         |
| 33 1      | MINIQ1                                                                                                                     | Pref                                            | 01-PEC08DAAN16P-21  | PEC08DAAN                                                         | SULLINS ELECTRONICS                               | CORP. PEC08DAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65                                                                                                                                              | DEGC                                                                    |
| 34 1      | MINIQ2                                                                                                                     | Pref                                            | 01-SSW10801TS8P-17  | SSW-108-01-T-S                                                    | SAMTEC                                            | SSW-108-01-T-S  | TO +125 DEGC CONNECTOR; FEMALE; THROUGH-HOLE 0.025in POST SOCKET; STRAIGHT; 8PINS                                                                                                                            |                                                                         |
| 35 2      | Q1, Q2                                                                                                                     | Pref                                            | 90-BC857BS-19       | BC857BS-7-F CRCW060310K0FK;                                       | DIODES INCORPORATED                               | BC857BS-7-F     | TRAN; PNP; SOT-363; PD-(0.2W); I-(-0.1A); (-45V)                                                                                                                                                             | V-                                                                      |
| 36 20     | R9, R114, R115, R122-R128, R131-R134, R5-R8, R11, R13-R16, R28, R136, R185, R186                                           | R146, R147, R150-R152, R154 Pref                | Pref 80-0010K-24    | ERJ-3EKF1002 RC1608J000CS; CR0603-J/-000ELF;                      | VISHAYDALE;PANASONIC SAMSUNG ELECTRONICS; BOURNS; | 10K             | RESISTOR; 0603; 10K; 1%; 100PPM; THICK FILM RESISTOR; 0603; 0 OHM; 5%; JUMPER;                                                                                                                               | 0.10W;                                                                  |
| 37 13     |                                                                                                                            |                                                 | 80-0000R-27A        |                                                                   |                                                   | 0               | 0.10W; THICK FILM                                                                                                                                                                                            |                                                                         |
| 38 1      |                                                                                                                            |                                                 | 80-0100K-AA4        | RC0603JR-070RL ERJ-3EKF1003                                       | YAGEO PH                                          |                 | RESISTOR; 0603; 100K OHM; 1%;                                                                                                                                                                                |                                                                         |
| 39        | R12                                                                                                                        | Pref Pref                                       |                     |                                                                   | PANASONIC                                         | 100K            | 100PPM;                                                                                                                                                                                                      |                                                                         |
| 1         | R17                                                                                                                        |                                                 | 80-0100R-AA39       | RNCP1206FTD100R                                                   | STACKPOLE ELECTRONICS                             | INC 100         | 0.1W; THICK FILM RESISTOR; 1206; 100 OHM; 1%; 100PPM; 0.5W; THIN FILM                                                                                                                                        |                                                                         |
| 40 1      | R18                                                                                                                        | Pref                                            | 80-01K02-71D        | ERA-3AEB1021                                                      | PANASONIC                                         | 1.02K           | RESISTOR; 0603; 1.02K OHM; 0.1%; 25PPM; 1W; METAL FILM                                                                                                                                                       |                                                                         |

Evaluates: MAX17852

## MAX17852 EV Kit Bill of Materials (UART) (continued)

|   ITEM |   QTY | REF DES                           | VAR STATUS   | MAXINV             | MFG PART                      | MANUFACTURER           | VALUE          | DESCRIPTION                                                                                          | MAX17852 VARIANT COMMENT               |
|--------|-------|-----------------------------------|--------------|--------------------|-------------------------------|------------------------|----------------|------------------------------------------------------------------------------------------------------|----------------------------------------|
|     41 |     1 | R19                               | Pref         | 80-0010R-24A       | ERJ-P03F10R0V                 | PANASONIC              | 10             | RESISTOR; 0603; 10 OHM; 1%; 200PPM; 0.20W; THICK FILM                                                |                                        |
|     42 |     5 | R20, R27, R183, R184, R32         | Pref         | 80-0000R-28A       | RC0805JR-070RL                | YAGEO PHYCOMP          | 0              | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                | Populate R32                           |
|     43 |    45 | R21, R25, R29, R33, R35-R74, R77  | Pref         | 80-0022R-I8        | ERJ-14NF22R0                  | PANASONIC              | 22             | RES; SMT (1210); 22; 1%; +/-100PPM/DEGC; 0.5W                                                        |                                        |
|     44 |     6 | R22, R110, R155, R161, R168, R169 | Pref         | 80-0100K-53        | ERJ-3GEYJ104V                 | PANASONIC              | 100K           | RESISTOR; 0603; 100K OHM; 5%; 200PPM; 0.10W; THICK FILM                                              |                                        |
|     45 |    15 | R81-R95                           | Pref         | 80-0001K-24A       | CR0603-FX-1001ELF             | BOURNS                 | 1K             | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                |                                        |
|     46 |    14 | R96-R109                          | Pref         | 80-0002K-24        | CRCW06032K0FK; ERJ-3EKF2001V  | VISHAY DALE; PANASONIC | 2K             | RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                |                                        |
|     47 |     2 | R111, R112                        | Pref         | 80-0360R-25        | CRCW0805360RFK                | VISHAYDALE             | 360            | RESISTOR; 0805; 360 OHM; 1%; 100PPM; 0.125W; THICK FILM                                              |                                        |
|     48 |     1 | R113                              | Pref         | 80-0001K-53        | ERJ-3GEYJ102V                 | PANASONIC              | 1K             | RESISTOR; 0603; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                |                                        |
|     49 |     6 | R116-R121                         | Pref         | 80-0001K-24        | CRCW06031K00FK; ERJ-3EKF1001V | VISHAY DALE; PANASONIC | 1K             | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                    |                                        |
|     50 |     8 | R129, R130, R138, R140, R179-R182 | Pref         | 80-0000R-29        | CRCW12060000ZS; ERJ-8GEY0R00V | VISHAY DALE; PANASONIC | 0              | RESISTOR; 1206; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM                                                 |                                        |
|     51 |     4 | R157-R160                         | Pref         | 80-049R9-25        | CRCW080549R9FK; ERJ-6ENF49R9  | VISHAY DALE; PANASONIC | 49.9           | RESISTOR; 0805; 49.9 OHM; 1%; 100PPM; 0.125W; THICK FILM                                             |                                        |
|     52 |     4 | R162, R164, R172, R173            | Pref         | 80-001K5-26        | CRCW12061K50FK                | VISHAYDALE             | 1.5K           | RESISTOR; 1206; 1.5K OHM; 1%; +/- 100PPM; 1/4W; THICK FILM                                           |                                        |
|     53 |     1 | SHDNL_SEL                         | Pref         | 01-FTS10301LS3P-21 | FTS-103-01-L-S                | SAMTEC                 | FTS-103-01-L-S | CONNECTOR; MALE; THROUGH HOLE; MICRO LOW PROFILE TERMINAL STRIP; STRAIGHT; 3PINS                     |                                        |
|     54 |     2 | SW1, SW2                          | Pref         | 11-ADE0804-00      | ADE0804                       | TE CONNECTIVITY        | ADE0804        | SWITCH; SPST; DIP16; 24V; 0.1A; SLIDE ACTUATED PIANO-DIP; RCOIL= OHM; RINSULATION= OHM; TYCO ELECTRO |                                        |
|     55 |     4 | THERM1-THERM4                     | Pref         | 01-364445622P-21   | 3-644456-2                    | TYCO                   | 3-644456-2     | CONNECTOR, HEADER STRIP, TH, STR, 2PINS,1ROW                                                         | Remove THERM5 and THERM6 Jumper Header |
|     56 |     1 | U1                                | Pref         | 00-SAMPLE-02       | MAX17852GCB/V+                | MAXIM                  | MAX17852GCB/V+ | EVKIT PART-IC; MAX17852GCB/V+; LQFP64; PACKAGE OUTLINE: 21-0083                                      |                                        |
|     57 |     1 | U2                                | Pref         | 10-MAX3378EEUD-U   | MAX3378EEUD+                  | MAXIM                  | MAX3378EEUD+   | IC; TRANS; +/-15KV ESD-PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14            |                                        |
|     58 |     1 | U3                                | Pref         | 10-AT24CS08SSHM-S  | AT24CS08-SSHM                 | ATMEL                  | AT24CS08-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; NSOIC8 150MIL                                      |                                        |
|     59 |     1 | U4                                | Pref         | 10-MAX3390EEUD-U   | MAX3390EEUD+                  | MAXIM                  | MAX3390EEUD+   | IC; TRANS; 15KV ESD-PROTECTED; 1UA; 16MBPS; QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14               |                                        |
|     60 |     1 | U5                                | Pref         | 10-TLP2770-W       | TLP2770                       | TOSHIBA                | TLP2770        | IC; PHOTO; 20MBPSLOW POWER PHOTOCOUPLER; WSOIC6                                                      |                                        |
|     61 |     1 | PCB                               | -            | EPCB1785X          | MAX1785X                      | MAXIM                  | PCB            | PCB:MAX1785X                                                                                         | -                                      |

TOTAL

355

DO NOT PURCHASE (DNP)

|   ITEM |   QTY | REF DES                              | VAR STATUS   | MAXINV              | MFG PART #                                                        | MANUFACTURER                          | VALUE               | DESCRIPTION                                                                                                                                                         | COMMENTS                                                         |
|--------|-------|--------------------------------------|--------------|---------------------|-------------------------------------------------------------------|---------------------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
|      1 |     4 | C8-C11                               | DNP          | 20-00U01-B19        | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103         | NIC COMPONENTS CORP.; MURATA; YAGEO   | 0.01UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                 |                                                                  |
|      2 |     2 | C12, C13                             | DNP          | 20-00U01-B19        | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103         | NIC COMPONENTS CORP.; MURATA; YAGEO   | 0.01UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                 |                                                                  |
|      3 |     1 | C16                                  | DNP          | 20-00U47-11C        | GCM188R71C474KA55                                                 | TDK                                   | 0.47UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                   |                                                                  |
|      4 |     1 | C17                                  | DNP          | 20-00U01-11         | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01 | MURATA;PANASONIC; SAMSUNG;; MURATA    | 0.01UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEG; TC=X7R                                                                          |                                                                  |
|      5 |     1 | C19                                  | DNP          | 20-002U2-Q1         | GRM32ER72A225KA35; CGA6N3X7R2A225K230; CC1210KKX7R0BB225          | MURATA; TDK; YAGEO                    | 2.2UF               | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +125 DEGC; TC=X7R                                                       |                                                                  |
|      6 |    14 | C48-C61                              | DNP          | 20-000U1-P6B        | C1608X7R1E104K080AA                                               | TDK                                   | 0.1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                          |                                                                  |
|      7 |     4 | C76, C78, C79, C82                   | DNP          | 20-0015P-27         | C0402C0G500-150JNP; GRM1555C1H150JA01                             | VENKEL LTD.; MURATA                   | 15PF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                            |                                                                  |
|      8 |     0 | C86                                  | DNP          | 20-00U01-11         | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01 | MURATA;PANASONIC; SAMSUNG;; MURATA    | 0.01UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEG; TC=X7R                                                                          | Move C86 fromDNP to Populate.                                    |
|      9 |     2 | CM1, CM2                             | DNP          | 50-0051U-SM5        | ACT45B-510-2P-TL003                                               | TDK                                   | ACT45B-510-2P-TL003 | INDUCTOR; SMT (1812); WIREWOUND CHIP; 51UH; TOL=[+50%/-30%]; 0.2A                                                                                                   |                                                                  |
|     10 |     2 | CURRENTSENSE, GPIO_AUX4, GPIO_AUX5   | DNP          | 01-50258402702P-15  | 502584-0270                                                       | MOLEX                                 | 502584-0270         | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                                                                                              | Remove CURRENTSENSE from DNP, Add GPIO_AUX4 and GPIO_AUX5 to DNP |
|     11 |     3 | D15, D22, D23                        | DNP          | 30-SP402101FTG-00   | SP4021-01FTG                                                      | LITTELFUSE                            | 5V                  | DIODE; TVS; SMT (SOD-323); VRM=5V; IPP=25A                                                                                                                          |                                                                  |
|     12 |     4 | J1-J4                                | DNP          | 01-TSW11607GS16P-19 | TSW-116-07-G-S                                                    | SAMTEC                                | TSW-116-07-G-S      | CONNECTOR; MALE; SMT; 0.25INCH SQ POST HEADER; STRAIGHT; 16PINS                                                                                                     |                                                                  |
|     13 |     1 | J8                                   | DNP          | 01-SSW10401TS4P-19  | SSW-104-01-T-S                                                    | SAMTEC                                | SSW-104-01-T-S      | CONNECTOR; MALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 4PINS                                                                                             |                                                                  |
|     14 |     7 | R1-R4, R26, R143, R148               | DNP          | 80-0000R-27A        | RC1608J000CS; CR0603-J/-000ELF;                                   | SAMSUNG ELECTRONICS;BOURNS;YAGEO PH   | 0                   | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                |                                                                  |
|     15 |     2 | R10, R142                            | DNP          | 80-0010K-24         | RC0603JR-070RL CRCW060310K0FK; ERJ-3EKF1002                       | VISHAYDALE;PANASONIC                  | 10K                 | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                  |                                                                  |
|     16 |     7 | R23, R24, R30, R31, R141, R144, R145 | DNP          | 80-0000R-27A        | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                    | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH | 0                   | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                |                                                                  |
|     17 |     1 | R34, R32                             | DNP          | 80-0000R-28         | CRCW08050000ZS; ERJ-6GEY0R00V; RC2012J000; RMCF0805ZT0R00         | DIGI-KEY                              | 0                   | RESISTOR; 0805; 0 OHM; JUMPER; 0.125W; THICK FILM                                                                                                                   | Move R32 fromDNP to Populate.                                    |
|     18 |     2 | R137, R139                           | DNP          | 80-0015K-53         | ERJ-3GEYJ153V                                                     | PANASONIC                             | 15K                 | RESISTOR; 0603; 15K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                              |                                                                  |
|     19 |     0 | R5-R8                                | DNP          | 80-0022R-24         | CRCW860322R0FK                                                    | VISHAYDALE                            | 22                  | RESISTOR; 0603; 22 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                               | (Alternate part for R5-R8)                                       |
|     20 |     2 | GP/AUX4, GP/AUX5                     | DNP          | 02-TPMINI5001-00    | 5001                                                              | KEYSTONE                              | N/A                 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR | DNP GP/AUX4 and GP/AUX5 test points                              |
|     21 |     2 | THERM5, THERM6                       | DNP          | 01-364445622P-21    | 3-644456-2                                                        | TYCO                                  | 3-644456-2          | CONNECTOR, HEADER STRIP, TH, STR, 2PINS,1ROW                                                                                                                        | DNP THERM5 and THERM6 Jumper Header                              |

TOTAL

62

## MAX17852 EV Kit Bill of Materials (UART) (continued)

PACKOUT (These are purchased parts but not assembled on PCB and will be shipped

with PCB)

|   ITEM |   QTY | REF DES      | VAR STATUS   | MAXINV                   | MFG PART #                | MANUFACTURER                     | VALUE                      | DESCRIPTION                                                                                                                         | COMMENTS   |
|--------|-------|--------------|--------------|--------------------------|---------------------------|----------------------------------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 |     3 | MISC1-MISC3  | Pref         | 01-2844/19AWG24-00       | 2844/19 BK001             | ALPHA WIRE COMPANY               | N/A                        | WIRE; BLACK; 19/36; ALPHA WIRE COMPANY; HOOK-UP; MIL-W-16878E (TYPE E); AWG24                                                       |            |
|      2 |     2 | MISC2, MISC3 | Pref         | 01-2844/19AWG24-06       | 2844/19 BL001             | ALPHA WIRE COMPANY               | N/A                        | WIRE; BLUE; 19/36; ALPHA WIRE COMPANY; HOOK-UP; MIL-W-16878E (TYPE E); AWG24                                                        |            |
|      3 |     6 | MISC1-MISC3  | Pref         | 01-50257802002P-37       | 5025780200                | MOLEX                            | N/A                        | CONNECTOR; FEMALE; WIREMOUNT; CLIK- MATE WIRE-TO-BOARD HOUSING; SINGLE ROW; POSITIVE LOCK 2PINS                                     |            |
|      4 |    12 | MISC1-MISC3  | Pref         | 01-50257900001-22        | 5025790000                | MOLEX                            | N/A                        | CONNECTOR; FEMALE; WIRE-TO-BOARD CRIMP TERMINAL; WIREMOUNT; 1PIN                                                                    |            |
|      5 |     1 | MISC1        | Pref         | 01-2844/19AWG24-02       | 2844/19 RD001             | ALPHA WIRE COMPANY               | N/A                        | WIRE; RED; 19/36; ALPHA WIRE COMPANY; HOOK-UP; MIL-W-16878E (TYPE E); AWG24                                                         |            |
|      6 |     1 | PACKOUT_BOX  | Pref         | 88-00711-SML             | 88-00711-SML              | N/A                              | N/A                        | BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT                                                                                            |            |
|      7 |     1 | PACKOUT_BOX  | Pref         | 87-02162-00              | 87-02162-00               | N/A                              | N/A                        | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT                                                                          |            |
|      8 |     1 | PACKOUT_BOX  | Pref         | 85-MAXKIT-PNK            | 85-MAXKIT-PNK             | N/A                              | N/A                        | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                                                                               |            |
|      9 |     1 | PACKOUT_BOX  | Pref         | EVINSERT                 | EVINSERT                  | N/A                              | N/A                        | WEBINSTRUCTIONS FOR MAXIM DATA SHEET                                                                                                |            |
|     10 |     1 | PACKOUT_BOX  | Pref         | 85-84003-006             | 85-84003-006              | N/A                              | N/A                        | LABEL(EV KIT BOX) - PACKOUT                                                                                                         |            |
|     11 |     6 | BUMP1-BUMP6  | DNI          | 02-SJ5003-00             | SJ-5003(BLACK)            | 3M ELECTRONIC SOLUTIONS DIVISION | SJ-5003(BLACK)             | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                                       | PACKOUT    |
|     12 |     1 | MISC1        | DNI          | 01-CLIKMATELOOP2PIN-10   | CLIK-MATE_2-PIN_LOOP-BACK | MAXIM                            | CLIK-MATE_2-PIN_LOOP- BACK | CABLE ASSEMBLY;TWO WIRE CLIK-MATE 2- WIRE LOOP CABLE; WITH WIRE STRIPPER AND CRIMP TOOL; NOTE:PURCHASE DIRECT FROM THE MANUFACTURER | PACKOUT    |
|     13 |     2 | MISC2, MISC3 | DNI          | 01-CLIKMATECABLE2WIRE-10 | CLIK-MATE-CABLE_2-WIRE    | MAXIM                            | CLIK-MATE-CABLE_2-WIRE     | CABLE ASSEMBLY;TWO WIRE CLIK-MATE CROSSOVER CABLE; WITH WIRE STRIPPER AND CRIMP TOOL; NOTE:PURCHASE DIRECT FROM THE MANUFACTURER    | PACKOUT    |

TOTAL

38

Evaluates: MAX17852

## MAX1785x EV Kit Schematics

Evaluates: MAX17852

<!-- image -->

│

## MAX1785x EV Kit Schematics (continued)

<!-- image -->

│

## MMAX1785x EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX17852

## MAX1785x EV Kit Schematics (continued)

<!-- image -->

│

## MAX1785x EV Kit PCB Layouts

MAX17852 EV Kit PCB Layout-Top Layer Silkscreen

<!-- image -->

│

## MAX1785x EV Kit PCB Layouts (continued)

<!-- image -->

MAX17852 EV Kit PCB Layout-Top Layer Metal

│

## MAX1785x EV Kit PCB Layouts (continued)

<!-- image -->

MAX17852 EV Kit PCB Layout-Layer Two Metal

│

## MAX1785x EV Kit PCB Layouts (continued)

<!-- image -->

MAX17852 EV Kit PCB Layout-Layer Three Metal

│

## MAX1785x EV Kit PCB Layouts (continued)

<!-- image -->

MAX17852 EV Kit PCB Layout-Bottom Layer Metal

│

## MAX1785x EV Kit PCB Layouts (continued)

<!-- image -->

MAX17852 EV Kit PCB Layout-Bottom Layer Silkscreen

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17852