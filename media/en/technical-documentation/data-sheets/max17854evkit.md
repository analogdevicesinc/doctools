<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX17854

## General Description

The  MAX17854  evaluation  kit  (EV  kit)  is  used  to  demonstrate  the  features  and  capabilities  of  the  MAX17854 14-channel  high-voltage  smart  sensor  data  acquisition interface IC. The EV kit is coupled with a MAX17851 EV kit to establish communication with a host PC. With communication established, control of the MAX17854 EV kit is executed through the EV kit GUI on the host PC. The GUI is Windows XP ® -, Windows Vista ® -, Windows ®  7-, and Windows 10-compatible and is available through your local Maxim Integrated sales office.

Note: References  to  the  MAX17851  in  this  data  sheet pertain equally to the MAX17841B as well.

The MAX17854 EV kit design provides a convenient platform for evaluating the features and functions of the IC, in  addition  to  the  IC's  electrical  parameters.  The  EV  kit with  vertical  communication  connectors  (TXLP\_CONN, RXLP\_CON,  TXUP\_CONN,  RXUP\_CONN)  and  snap and  lock  battery  pack  connector  enables  the  user  to quickly build and evaluate a system with up to 32 daisychain devices.

## MAX17854 Evaluation Kit

## Features

- Provides a Convenient Platform for Evaluating the Features and Functions of the MAX17854
- Versatile GUI Interface for Features Evaluation
- Plug-and-Play Architecture for Rapid System Prototyping
- Force and Sense Pin Headers for Precision Measurement Assessment
- Built-In Resistor Stack for Battery Emulation
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17854 EV Kit Files

| FILE                          | DESCRIPTION                              |
|-------------------------------|------------------------------------------|
| MAX1785X_EV kit_Installer.exe | Software: Graphical User Interface (GUI) |
| MAX17854_EVKIT_B.pdf          | Schematic File pdf                       |
| MAX17854_EVKIT_B.pdf          | PCB Layout File pdf                      |

Ordering Information appears at end of data sheet.

## EV Kit Board: MAX17854 EV Kit System for Single UART with MAX17851EVKIT as a Bridge Device

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

319-100860; Rev 0; 12/21

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective

©

owners.

## MAX17854 Evaluation Kit

## Quick Start (Single UART)

This procedure describes the setup and initialization of a two-module  distributed  daisy-chained  system  using  the MAX17854 in a single UART with external loopback communication  mode. The  user  may  choose  to  expand  the system with additional EV kit modules depending on their requirements and testing needs.

## Required Hardware

- Minimum one MAX17854 EV kit (cables included)
- One Single UART MAX17851 EV kit or MAX17841 EV kit (includes the FTHR or MINIQ interface controller, respectively)
- 9V to 65V DC power supplies (refer to the MAX17854 IC data sheet for recommended operating range)
- User-supplied Windows XP-, Windows Vista-, Windows 7-, or Windows 10-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

Figure 1. MAX17851 Software Installation

<!-- image -->

## Procedure

The MAX17854 EV kit is fully  assembled  and  functionally  tested  prior  to  shipment.  Follow  the  steps  below  to become acquainted with the MAX17854 EV kit and initialize the single-UART EV kit communication.

- 1) Install the MAX17854 EV kit software on your computer by running the MAX1785X\_EV kit\_Installer.exe.
- 2) Follow the on-screen instructions shown in the popup window.
- 3) Click the Install button to confirm the installation of the MAX1785X GUI.
- 4) After a successful installation of the MAX1785X GUI, a window is displayed for the installation of the required MINIQUSB and FTHR drivers. Administrator privileges are required to install the USB device driver on Windows XP, Windows Vista, Windows 7, and Windows 10.
- 5) Click Next in the device driver installation wizard window.
- 6) Once the installation of the MINIQUSB is completed, click Finish.
- 7) Click Next to confirm the installation of the FTHR driver.

Figure 2. MAX17851 Confirm Software Installation

<!-- image -->

│

## MAX17854 Evaluation Kit

Figure 3. MAX17851 Completed Software Installation

<!-- image -->

Figure 5. MAX17851 MINIQUSB Installation Completed

<!-- image -->

Evaluates: MAX17854

Figure 4. MAX17851 Driver Installation

<!-- image -->

Figure 6. MAX17851 FTHR Driver Installation

<!-- image -->

## MAX17854 Evaluation Kit

## Default Configuration

Notes: The MAX17851 EV kit draws all necessary power from the USB. For more information on how to connect it to a 12V battery source, refer to the MAX17851 EV kit data sheet.

Notes: The MAX17854 EV kit needs an external supply of minimum 12V. Switching all switches to the ON position enables a 2kΩ resistor ladder, connecting from PACK+ to PACK- and enabling a uniform voltage reading across all battery inputs.

## Establishing Communication

- 1) Ensure that all shunts and switches are configured as listed in Tables 1-3 .
- 2) Connect the 2-wire blue/black cable from MAX17851 EV Kit (J3) to MAX17854 EV Kit (TXLP\_CONN)
- 3) Connect the 2-wire blue/black cable from MAX17851 EV Kit (J4) to MAX17854 EV Kit (RXLP\_CONN)
- 4) Connect the 2-wire red/black cable from MAX17854 EV Kit from TXUP\_CONN to RXUP\_CONN The setup should look like as shown in the board photo.

## Table 1. MAX17854 EV Kit Default Jumper Settings

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| P+ B14, B0P-  | Installed        |
| THERM1-THERM6 | Open             |

## Table 2. MAX17851 EV Kit Default Jumper Settings

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| J20      | Installed        |

## Table 3. MAX17854 EV Kit Default Switch Settings

| SWITCH   | SETTING     |
|----------|-------------|
| SW1, SW2 | ON position |

Evaluates: MAX17854

- 5) Start the MAX17854EV KIT software by opening its icon in the Start Programs menu.
- 6) Select the target device (MAX17854).

Figure 7. Target Device

<!-- image -->

Figure 8. Splash Screen

<!-- image -->

│

## MAX17854 Evaluation Kit

- 7) The EV kit GUI software automatically establishes communication with the MAX32620 interface. The status bar at the bottom of the GUI displays Maxim 32620 BMS USB to serial 01.xx.xx and UART Not Initialized . With the MAX32620 detected, the user can proceed to the next step.
- 8) In the Communication tab (Figure 12), select the MAX17851 radio button.
- 9) Click on the Single-UART radio button (Figure 12).
- 10)  Select the Initialization tab (Figure 14).
- 11)  Click the Wakeup button.

## Evaluates: MAX17854

- 12)  Verify that the communication is established with the MAX17851. The Event Log will read Wakeup successful.
- 13)  The EV kit is now ready for further evaluation. See the Evaluation Procedures section for a step-by-step guide to evaluate the specific IC functions.

## MAX17854 EV Kit Hardware Description

The  MAX17854  EV  kit  PCB  is  designed  with  headers, test  points,  and  jumpers,  providing  convenient  access to  circuit  nets  where  measurements  can  be  made,  and signals monitored.

Figure 9. MAX17854 EV Kit PCB

<!-- image -->

│

## Battery-Pack Connector (J7)

Power is applied to the MAX17854 EV kit through the J7 battery-pack  connector,  or  the  PACK+  and  PACK-  test points. The PACK+ and PACK- test points are provided should the user prefer to source power from a laboratory power supply. The Battery Cell Jumpers (B1B0-B14B13) can emulate a bus bar connection, shorting that input.

Caution: Do not use those jumpers when a battery is connected to that cell. There is no resistor limiting the current!

To  power  the  MAX17854  EV  kit  using  a  bench  power supply, terminate PACK+ to the positive post and PACKto  the  negative post of the power supply and install the P+B14 and B0P- jumpers.

## Battery-Cell Emulation

For convenience, the MAX1785X EV kit PCB is equipped with  a  2kΩ  resistor  ladder  to  emulate  a  battery  pack when using a bench power supply. To apply the emulated battery-pack  resistor  ladder  voltages  to  the  MAX17854 cell-voltage  measurement  inputs  (C0-C14),  place  all SW1 and SW2 switches in the closed/ON position. Pack voltage  from  a  bench  power  supply  applied  to  the  2kΩ resistor ladder divides equally across the resistors and is measured by the MAX17854.

The battery interface includes a battery force and sense pin header (J6) that can be used for precision measurement testing. A forced simulated-battery voltage between adjacent pins on the J6 pin header can be measured at the  pin  header  and  compared  with  the  data  conversion values of the MAX17854 IC.

## AUX Input/Output/GPIO/I2C

The auxiliary (AUX) input/output/ADC section of the EV kit  PCB  gives  the  user  access  to  the  MAX17854  AUX GPIO pins  and THRM pin.  Each  GPIO\_AUX connector is equipped to interface directly with the NTC thermistors for external temperature measurement. With the THERM jumper installed, the NTC sensor is pulled up through a 10kΩ resistor to the THRM pin on the MAX17854. This feature allows the user to turn on or off the 10kΩ pullup through the THRM pin during a measurement for energy conservation.

The  GPIO\_AUX  is  instrumented  with  a  block  header (J5)  that  allows  the  user  to  perform  AUX\_GPIO  force and  sense  accuracy  measurements.  To  perform  accuracy  measurement  through  the  J5  header,  a  voltage  is forced  onto  a  pin  header  and  can  be  sensed  through the  adjacent  pin  on  the  header.  The  measurement  can then be compared to the conversion measurement of the MAX17854.

## UART Ports

The  UART  communication  ports  are  identified  as  the upper port (RXU/TXU) and the lower port (RXL/TXL), with reference  to  the  MAX17854  device  on  the  EV  kit  PCB. Each UART port comprises a differential transmitter and a differential receiver.

Communication  data  received  on  the  lower  receiver  is retransmitted  through  the  upper  transmitter  to  the  next EV kit in the daisy-chain. Communication received on the upper receiver is retransmitted through the lower transmitter and downward through the chain. Each differential pair includes four test points for observing the communication signals.  It  is  critical  to  note  that  the  upper  port  (RXP2, RXN2, TXP2, TXN2) test points are referenced to the next higher ground-potential EV kit.

The EV kit UART network and components are designed for the automotive environment and are capable of enduring battery-management-system compliance testing. This includes BCI, ESD, radiated emission, pulse testing, and deactivation  of  the  service-disconnect  switch.  The  PCB and  UART  components  are  designed  and  selected  for 630VDC (max) isolation between each MAX17854 EV kit in the daisy-chained system; however, isolation capability has not been tested on the MAX17854 EV kit.

## ALERT IN/ALERT OUT

The  redundant  ALERT  interface  provides  an  additional channel for notifying the host about potential hazards in the daisy chain. It can be programmed to activate on specific alerts of the IC (for example over and undervoltage conditions) and can propagate a 2MHz signal through the daisy-chain to the host where actions can be taken. The propagation is always DOWN the daisy-chain and since it is not a differential signal (unlike the UART port), additional isolation measures need to be taken on board level.

The EV kit comes with an optical isolation, thus a simple UART cable (blue/black) can be used to connect multiple devices.

## MAX17854 IC Pin Headers (J1-J4)

Each pin on the MAX17854 is available for easy monitoring through the J1 IC pin header. Header J1 is terminated to pins 1-16 on the MAX17854, J2 is terminated to pins 17-32, J3 is terminated to pins 33-48, and J4 is terminated to pins 49-64.

For  convenience,  certain  IC  pins  are  terminated  to  test points  for  monitoring  frequently  observed  device  signals.  Examples  include:  VBLK,  DCIN,  HV,  CPP,  CPN, SHDNL \_SELSHDNL, VAA UARTSEL, VDDL1, ALERTIN, ALERTOUT, and THERM.

## MAX17851 EV Kit or MAX17841 EV Kit

To complete the Maxim EV kit battery management  evaluation  system,  it  is  essential  to  include  the MAX17841EVMINIQ# or the MAX17851\_DUAL\_ SAFEMON\_EVKIT.  In  this  EV  kit,  we  only  refer  to  the MAX17851 EV kit as it can use the full potential of the MAXIM  BMS  system.  The  MAX17851  EV  kit  contains

## Evaluates: MAX17854

the  MAX17851  base  board  and  the  PC  USB  interface board  (MAX32620FTHR).  Power  and  ground  for  the MAX17851 is derived through the MAX32620FTHR board and require no other power source. It is critical to note that the MAX17851 EV kit provides the battery management evaluation system with capacitive isolation on connectors J3, J4, J18, and J19.

Figure 10. MAX17851 EV Kit PCB

<!-- image -->

│

## MAX17854 Evaluation Kit

## Graphical User Interface Description

The  MAX17854  EV  kit  is  evaluated  in  conjunction  with the MAX17854 evaluation software. The GUI provides a friendly environment for reading and writing to all device registers, as well as executing device commands.

## Communication Tab

The  GUI  startup  cockpit  is  designed  to  guide  the  user through  hardware  setup  and  provides  overall  startup system  information.  At  startup,  the  GUI  automatically initializes and establishes communication with the Maxim MAX32620FTHR interface board and places the user on the Communication tab. The UART status is shown in the lower-right corner of the cockpit.

The GUI is preset to  UART communication with a dual UART interface (see Figure 11). When selecting the UART configuration, the hardware graphic updates to reflect the

## Evaluates: MAX17854

proper wiring interface for the selected UART. For communication to be established between the MAX17851 EV kit and MAX17854 EV kit, it is imperative that the system wiring matches the UART configuration selected.

The  MAX17854  EV  kit  is  designed  to  support  Single UART  Interface  with  External  Loopback,  as  shown  in Figure  12.  Follow  the  UART  wiring  changes  shown  in Figure 11, Figure 12, and Figure 13 for alternative UART configurations.

Located in the Communication tab is the UART Options group box. Options set in the UART Options group box control  TXL  and  TXU  idle  state  impedance,  adaptive transmission setting, and packet error check (PEC). The user can also enable and evaluate the alert function, double-buffer feature, UART DC diagnostic test, and control the alive-counter bit (ALIVECNTEN).

Figure 11. Communication Tab-Dual UART Interface

<!-- image -->

Evaluates: MAX17854

Figure 12. Single UART Interface with External Loopback

<!-- image -->

Figure 13. Single UART Interface with Internal Loopback on Device#

<!-- image -->

## MAX17854 Evaluation Kit

## Initialization Tab

The Initialization tab  is  used  to  initialize  the  system and assign addresses to each device in the daisy-chain. The  correct Single  UART  Interface or Dual  UART Interface radio button must be selected for the hardwired system.  Communication  is  only  established  when  the wired  system  aligns  with  the  interface  chosen  from  the UARTCFG group  box.  With  the Dual  UART  Interface radio button selected, the user has the option of selecting UPHOST or DOWNHOST .  Further  information  on UPHOST and DOWNHOST communication is available in the MAX17854 IC data sheet. The Wakeup button initiates the communication process, and the Hello All button assigns the device addresses.

Evaluates: MAX17854

Along with establishing communication, the Initialization tab  provides  a  method  to  log  detailed  communication events. The event and detailed logs can be enabled or disabled by clicking the checkboxes in the lower-left corner of the GUI.

After  Wakeup and Hello All,  there  are  some  error  messages present.

On top of the GUI, 'DC' (Standing for Data Check Byte). This byte is appended to every READ-message and contains 8 bits in which each of them has a significance.

The  bit 'STAT'  means  'the  status  register of  any MAX17854 in the daisy-chain has a problem.'

Figure 14. Initialization Tab

<!-- image -->

│

## MAX17854 Evaluation Kit

To  look  deeper  into  that,  go  to  the Alerts/Status tab (Figure  15).  Here,  all  possible  alerts  of  MAX17854  are displayed and can be cleared by just clicking on them.

Note: The F ORCEPOR button commands a soft-reset to all MAX17854 devices in the daisy-chained system.

RST: This flag indicates that the chip experienced a reset condition which makes sense as we just connected the chip.

INTRFC: This  one  indicates  that  the  interface  experienced some sort of problem.

## Evaluates: MAX17854

DUALUART: This  bit  is  the  more  specific  description  of an interface error. It is set because in a Single UART configuration, the HELLOALL message travels upstream and is then passed through the downstream. In a Dual UART configuration (default), the downstream can initially only be used as a READ operation. Because HELLOALL is a write operation (it actively writes the address register of each device), we get a DUALUART alert.

Clicking  RST  and  DUALUART  resets  those  bits  and clears the Data Check byte.

Figure 15. Initial Alerts

<!-- image -->

│

## MAX17854 Evaluation Kit

## General Configuration Tab

The General Configuration tab is used for programming settling times for AUXTIME, CELLDLY, and SWDLY. The FlexPack  feature  enables,  and  programming  is  easily controlled through the drop-down menus in the General Configuration  tab.  Parameters  such  as  TOPCELL  and TOPBLOCK, required for FlexPack programming, can be directly entered.

Evaluates: MAX17854

Information  on  each  of  the  parameters  on  the  General Configuration tab is available in the MAX17854 IC data sheet.

## Voltage Measurements Tab

The Voltage Measurements tab is the user interface for visually monitoring all cell measurement and AUX conversion values in the battery monitoring system. In addition, the  Voltage  Measurements  tab  can  be  constructed  to display a visual indication of cell ADC OV/UV, comparator OV/UV, and communication alerts.

Figure 16. General Configuration Tab

<!-- image -->

│

## MAX17854 Evaluation Kit

In the Voltage Measurements tab, the Scan Settings and Diag  Settings  buttons  in  the  Settings  group  box  on  the right side of the GUI open into individual settings panels (see Figures 18 and 19).

The lower right-hand corner in the Voltage Measurements tab displays a legend that indicates visually the state of each voltage measurement and comparator alert. For the visual alert to be active, the thresholds must be set and enabled in the Thresholds tab (Figure 20).

In the Scan Settings panel, the user can set monitoring and control  properties  for  Cell  and AUX  inputs,  in  addition  to ADC oversample setting/frequency and ADC scan mode.

Note: The user must click the Confirm Settings button at the bottom of the panel for the selections to take effect. Selections made in the Scan Settings panel are applied to each MAX17854 device in the system.

For cell voltages to be displayed on the Voltage Measurements tab, simply enable the cells to be monitored on the Scan Settings panel and press the Confirm Settings  button.  Pressing  the  Confirm  Settings  button

## Evaluates: MAX17854

closes the Scan Settings panel and places the user back in the Voltage Measurements tab. To have the MAX17854 perform the scan settings operation, select the Scan Type from the drop-down list and the number of scans to be performed (Single Scan, N Scans, or Scan Continuously).

The  IIR  Filter  settings  are  also  located  in  the  Voltage Measurements tab and are enabled by selecting the IIR Filter Enable checkbox. The user selects the desired filter from the Coefficient Selection drop-down list. The smaller the coefficient is, the more it improves the noise rejection at a cost of increased settling time. Pressing the RDFILT checkbox commands the GUI to read the IIR filter output.

The Diag Settings  button  in  the  Voltage  Measurements tab  gives  the  user  control  of  diagnostic  current  sources and diagnostic terminations within the MAX17854 device. The user can update diagnostic control for one device or for all devices in the system.

In Figure 17, 14 cell voltages, the block voltage, 6 auxiliary  measurements, and 2 diagnostic channels are activated. The following figures show how they are activated by clicking 'Scan Settings' and 'Diag Settings.'

Figure 17. Voltage Measurements Tab

<!-- image -->

│

## MAX17854 Evaluation Kit

Evaluates: MAX17854

Figure 18. Scan Settings Panel

<!-- image -->

## MAX17854 Evaluation Kit

Figure 19. Diagnostic Settings Panel

<!-- image -->

## Thresholds Tab

Clicking the Thresholds tab opens the panel where users can  enter  overvoltage/undervoltage  (OV/UV)  and  fault thresholds in hex value or voltage.

Clicking the Alert Enables button in the top-right corner of the Thresholds tab opens the Alert Enable panel (see Figure 21).

Figure 20. Thresholds Tab

<!-- image -->

│

## MAX17854 Evaluation Kit

## Evaluates: MAX17854

Figure 21. Alert Enable Panel

<!-- image -->

## Alerts/Status

When selecting the OV and UV correctly, there is a visual indication of a failure in the GUI when doing a scan.

For  functional  safety  purpose,  the  IC  is  also  equipped with  a  comparator  which  can  check  the  ADC  readings for their validity. To activate them, simply select ADC and Comparator Acquisition. The triangle represents an OV or UV condition of the comparator.

A more detailed view of the error can be observed in the Alert/Status (Figure 24) tab.

By selecting the Active Device from the drop-down list, the Alerts/Status tab  displays  the  fault  status  of  the MAX17854 in the system.

The user can use the Clear Device Alerts or the Clear All Device Alerts to clear the faults logged in the system.

Note: Some alerts are 'sticky,' meaning they do not clear until the alert condition has been resolved.

Above the cockpit tabs, the GUI shows the Data Check Byte faults and Error Counts . Resetting the error count is done through the Device dropdown at the top left of the GUI. Click Device and select Reset Error Counts .

│

Evaluates: MAX17854

Figure 22. Voltage Alerts for ADC Acquisition

<!-- image -->

Figure 23. Voltage Alerts for ADC + Comparator Acquisition

<!-- image -->

## Evaluates: MAX17854

Figure 24. Alerts/Status Tab

<!-- image -->

## Cell Balance Tab

The Cell  Balance tab  gives  the  user  the  flexibility  for manual  and  automatic  control  of  the  MAX17854  cellbalance  feature.  The Device  Selection drop-down  list programs the balancing settings to one or more devices in  the  system. The Balance Switch Control group box includes a drop-down list for the desired operational balance mode.

Note: To  update  parameters  in  the Cell  Balance tab, select Cell  Balancing  Disabled from  the Mode dropdown list prior to selecting the desired balancing mode.

To  activate  a  cell-balance  switch,  use  the Balance Switch Enable group box to enable the desired balance switch and set the Balancing Expiration Time #1 to the number of  seconds  or  minutes  to  perform  the  balance. In the Alerts/Status tab (Figure 24), be sure to click the Clear  All  Device  Alerts button  (the  interface-specific error alert [INTRFC] must be clear). Next, select Manual Cell  Balancing  by  Second from  the Mode drop-down list  in  the Balance Switch Control group  box,  and  the cell  balance  immediately  becomes  active  and  the  timer is started. Manual mode allows the user total control over the cell-balance switches.

Caution: Prevent  accidental  activation  of  adjacent  cellbalance  switches  or  the  activation  of  all  cell-balance switches when using Manual Cell Balancing Mode .

Note: In Manual Cell Balancing by Second or Minute , only the Cell 1 timer is recognized by the system, with all switches deactivated when the Cell 1 timer expires.

For Automatic Balance modes, the user can enable all balance switches and allow the MAX17854 to control the activation according to the user-set parameters. From the Cell Balance tab, in Automatic mode, the user can set the cell-balance Duty Cycle using the slidebar and other key parameters like UV Threshold and Balance Switch Diagnostic  Thresholds .  The Cell  Balance tab  also includes Balance  Switch  Fault  Alert and CBUVTHR Check Status indicators.

In  the  setting  as  shown  in  Figure  25,  Cell  4  has  been enabled to run for 5 seconds (placing the number 5 in Cell 4 and enabling the switch). When changing the Mode to 'Manual Cell Balancing by Second,' the balancing begins.

Note: During balancing, the IC can only write to specific register. Setting thresholds during balancing results in an ALRTINTRFC error!

│

Evaluates: MAX17854

Figure 25. Cell Balance Tab Manual Balancing

<!-- image -->

Figure 26. Cell Voltage during Balancing vs Time (Manual Balancing)

<!-- image -->

## MAX17854 Evaluation Kit

A duty cycle of 100% means that in total, each cell has been balanced for the full amount of 5 seconds. If multiple  devices  are  enabled,  the  IC  operates  in  an  EVEN/ ODD  scheme  and  alternates  between  those  two  until the final balancing time has been reached. In this case, a 5-second balancing on cell 4 and cell 1 has a duration of 10 seconds. The graph below shows an activation and

deactivation of the balancing FET which basically shorts the 2k input resistor of the EVKIT emulating a cell.

Cell  balancing  by  second  means  that  every  second, there is a switch between EVEN and ODD cells and the expiration  time  (on  the  right)  is  representing  seconds. There  is  also  a  mode  for  'Minute'  and  'Hour'  which scales accordingly.

Figure 27. Cell Balance Tab Individual Balancing

<!-- image -->

Figure 28. Cell Voltage during Balancing vs. Time (Even/Odd)

<!-- image -->

│

## MAX17854 Evaluation Kit

## Read/Write Tab

The Read/Write tab  provides  direct  access  to  the  read and write registers of the MAX17854. In the Read/Write tab,  the  GUI  offers  several  read/write  options  to  the user. The Select Register group box allows the user to read  register  contents  by  highlighting  the  desired  register  and  clicking  the Read All button.  For  example,  if the  user  wants  to  read  the  unique  ID  assigned  to  each device, scroll down the list and highlight the ID1 (0x8C) register and click the Read All button, then highlight the Evaluates: MAX17854

ID2  (0x8D)  register  and  click  the Read All button.  The contents of the registers are then displayed in the Read Output group box.

Blocks of data in packets of ≤ 28 registers can be request -ed through the Read Block group  box.  Enter  the Start Address and  set  the Block  Size ,  then  click  the Read Block button.  The Read  All and Write  All group  box provide alternative methods to write to specific registers in specific addressed devices.

Figure 29. Read/Write Tab

<!-- image -->

│

## MAX17854 Evaluation Kit

## MAX17851 Tab

The MAX17851 registers can be directly modified using the MAX17851  Register  Map sub-tab.  A  pull-down arrow to the left of the address number allows the user to identify register content. As an example, register 0x66 content  and  has  the Keep-Alive  [3:0] highlighted.  To alter the keep-alive timing, the user must type the desired hex value of the period directly in the Update Field edit box and then click the Set button on the right. Selecting a parameter in a register automatically highlights the bit values of the parameter and provides a description of the parameter in the Field Description group box.

## GUI File Options

The File menu  drop-down  list  on  the  GUI  offers  powerful  tools  such  as  L og  Scan  Data , Save Register Configuration , Load  Register  Configuration ,  as  well as Restart and Exit .

## File  Log Scan Data

For  collecting  conversion  data  for  later  analysis,  select Log Scan Data from the File menu drop-down list. The

Log Scan Data window pops up and requests the Number of ADC Scans to Log, the Scanning Rate (ms) and the File Path and Root Name of the location where the data should be stored. Conversion data is taken according to the user-set parameters like Oversample settings and IIR Filter Enable.

Figure 30. MAX17851 Tab (Register Map Panel)

<!-- image -->

│

Evaluates: MAX17854

Figure 31. Log Scan Data

<!-- image -->

Note: Be sure to set active channels and scanning options prior to the datalog functionality.

## Default Scanning Mode (Number of ADC Scans to Log):

Per  default, all the important  registers (Cell,  AUX, Diagnostics,  Status,  and  Alert)  are  logged.  The  fastest achievable  interval  (depending  on  the  PC)  is  around 500ms per timestamp.

## Real-Time Scanning:

Optimized  scanning  with  help  from  MAX17851  and FTHR board can get a scanning rate of down to 50ms. A reduced dataset is stored in the datalog file containing only cell and auxiliary voltages.

Figure 32. Datalog File for Real-Time Scanning

<!-- image -->

Note: With increased number of devices in the daisy-chain, the 50ms cycle might not be met.

│

## MAX17854 Evaluation Kit

## File  Device Register Configuration Files

During evaluation, the user may want to save the device register  content  for  later  use.  Saving  device  register  content  is  performed  by  selecting Save  Register Configuration from  the File menu  drop-down  list.  The register  file  is  saved  in  standard  .csv  format.  Registers can be loaded from a saved register file by selecting the Load  Register  Configuration option  from  the  list  and selecting the previously saved register.csv file.

## File  Scripting

A script file can be used to set up the GUI and device to operate in specific modes, or to evaluate a sequence of commands for device functionality. Commands for writing scripts can be found in the Command Reference menu item  under  the Help menu  bar  drop-down  list.  Detailed information  on  the  Register  Map  is  available  in  the MAX17854 IC data sheet.

Before  running  scripts,  follow  the Quick  Start  (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.  This  example  shows  a  script  that programs 12 cells overvoltage to 1.1V and the undervoltage to 0.9V. To test it, set up a continuous voltage reading Evaluates: MAX17854

(ADC+ COMP) with a supply voltage of 14V  12V with active divider.

To run a script, select Run Script from the Script menu drop-down  list.  The Open  Script window  pops  up  and requests the location where the Script file is stored. After the  script  is  run,  the  OV/UV  is  indicated  in  the  updated Voltage Measurements tab shown in Figure 33 according to the Legend group box in the lower-right corner.

The  following  sequence  can  be  copied  into  a  standard text editor and saved as 'OVUVScript.bms'.

## Syntax:

CMD&lt;space&gt;ADDRESS[HEX]&lt;space&gt;REGVALUE&lt;spa ce&gt;#&lt;space&gt;Description Text

| writeall   | 1A   | 7FFF   | #   | ALRTOVEN    |       |
|------------|------|--------|-----|-------------|-------|
| writeall   | 1B   | 8FFF   | #   | ALRTUVEN    |       |
| writeall   | 1F   | 3850   | #   | OVTHCLRREG  | 1.1V  |
| writeall   | 20   | 3850   | #   | OVTHSETREG  | 1.1V  |
| writeall   | 21   | 2E14   | #   | UVTHCLRREG  | 0.9V  |
| writeall   | 22   | 2E14   | #   | UVTHSETREG  | 0.9V  |
| writeall   | 38   | 3AC0   | #   | COMPOVTHREG | 1.15V |

writeall 39 2B80

#

COMPUVTHREG = 0.85V

Figure 33. Voltage Measurement with Scripted Limits

<!-- image -->

│

## MAX17854 Evaluation Kit

## Evaluation Procedures

This  section  gives  the  user  step-by-step  procedures  for functional evaluation of the MAX17854 using the software interface GUI.

## Cell Voltage and Comparator Measurements

The following  procedure  describes  how  to  use  the  GUI and  EV  kit  to  make Cell  Voltage measurements  and observe  measurement  and  comparator  OV/UV  alerts  in the Voltage Measurements tab.

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab. Be sure to set the supply voltage to 18.0V for this procedure.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that the P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab and click the Scan Setting s button in the Settings group box to open the Scan Settings panel. First, click the Cell Enable All , Unipolar All (Cell) , BLOCK EN checkboxes and select 64x OVSAMPL from the OVSAMPL a drop-down list at the bottom of the panel, and then click the Confirm Settings button.
- 4) Select the Voltage Measurements tab and in the upper left corner, set the Scan Type to ADC and Comparator Acquisition , and then select the Scan Continuously checkbox. Observe that cell voltage levels are approximately equal in value. At this point, the MAX17854 is continuously reading the voltages across each of the 2kΩ resistors in the resistor ladder. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder.
- 5) Select the Thresholds tab and set the comparator and cell voltage threshold. Set OVTHSETREG to 1.41V, UVTHSETREG to 1.2V, COMPOVTHREG to 1.5V, and COMPUVTHREG to 1.1V (threshold values automatically adjust to the closest hex value).

## Evaluates: MAX17854

- 6) In the Thresholds tab, click the Write Changes to All Devices radio button, and then open the Alert Enables panel by clicking the Alert Enables button. Click the Set All button for ALRTOVEN and ALRTUVEN to command the MAX17854 to check the OV/ UV condition. In the Alert Enables panel, the user can mask OV/UV faults. The user can also mask faults from generating an alert output activation by unchecking the appropriate checkboxes in the ALRTIRQEN group box. Finally, click the Update All Devices button at the bottom and close the panel.
- 7) Select the Voltage Measurements tab. Verify that voltage measurements are approximately 1.28V and no OV/UV voltage measurements or OV/UV comparator measurements are indicated. Slowly increase the power-supply voltage from 18.0V to 22.0V. Verify that OV and comparator measurements are detected at the user-programmed OV thresholds by comparing the triangular indicator with the Legend on the lower right side of the window. The UV and comparator measurements can be verified similarly by decreasing the supply voltage from 18.0V to 14.0V.

In addition to the oversampling filter, the MAX17854 has implemented an IIR noise filter to further reduce noise in the conversion result. Take the following steps in the GUI to become familiar with the IIR filter:

- 1) From the Voltage Measurements tab, in the IIR Filter group box, click the IIR Filter Enable checkbox.
- 2) Select the desired filter from the Coefficient Selec -tion drop-down list (0.125 for maximum filter effect).
- 3) To see the dynamic effect of the IIR filter, set the OVSAMPL drop-down list in the Scan Settings panel to Single Acquisition and click the Confirm Settings button.
- 4) Back in the Voltage Measurements tab, in the IIR Filter group box, click the RDFILT checkbox in the Coefficient Selection group box to command the GUI to read the IIR filter output. Notice numerically the noise reduction in voltage readings.

Note: T o  test  the  step  response,  a  voltage  step  can  be applied to the supply (example 14V  28V) while datalogging and RDFILT checkbox is active. Then, the same process can be repeated without RDFILT for an immediate response.

## MAX17854 Evaluation Kit

## Auxiliary General-Purpose Input/Output Port

The following procedure demonstrates the use of the auxiliary  (AUX)  channels  as  a  general-purpose  input/output (GPIO) port.

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab and click the Scan Settings button in the Settings group box to open the Scan Settings panel. Click the GPIO Enable All button and set the GPIODIR to Output. Set the GPIODRV to the desired high or low level.
- 4) Click the Confirm Settings button at the bottom of the panel and then verify with an oscilloscope that the digital voltage is present at the GP/AUXn test pin on the PCB.
- 5) To command the GPIO as an input, on the Scan Settings panel, click the GPIO Enable All button and set the GPIODIR as Input.
- 6) The EV kit contains a 10kΩ pullup resistor on each of the GP/AUXn pins. To pull up each of the GP/ AUXn pins, select the Read/Write tab. Using the Read All group box, read register 0x62. Set THRMMODE bit 9 and bit 10 (e.g., if register 0x62 is 0x0000, use the Write All box and send 0x0600). Setting the THRMMODE bit activates the THRM pin on the device (pin no. 29). The EV kit terminates THRM to the 10kΩ pullup resistors.
- 7) Populate the THERMx jumpers in the AUX INPUT/ OUTPUT/ADC block on the PCB (see Figure 9) and verify the logical state of the GP/AUX0-GP/AUX5 pins on the MAX17854 or GP/AUX0-GP/AUX3 pins on the MAX17854 by reading register GPIOCFG (0x17). Verify that the GPIORD bits are set to logic 1.

## AUX Absolute/Ratiometric Measurement

The software GUI and the MAX17854 EV kit are developed  with  features  that  allow  the  user  to  evaluate  the performance  of  the  AUX  channels  when  configured  as analog  absolute  measurements  or  analog  ratiometric measurements.  The  following  procedure  shows  how  to configure the AUXIN0-AUXIN5 pins on the MAX17854 for analog measurement.

## Evaluates: MAX17854

## Key Points to Consider

- AUX GPIO can be used in mixed-mode applications.
- Each port can be independently configured for GPIO, AUX ratiometric, or AUX absolute measurement.

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab and click the Scan Settings button in the Settings group box to open the Scan Settings panel. Click the AUX Enable All button to enable the AUX channels as analog.
- 4) Set the AUXREFSEL to Absolute when absolute measurements are desired or set to Ratiometric when ratiometric measurements are to be evaluated. Temperature measurements using NTC are generally ratiometric for improved temperature accuracy.
- 5) Other conversion characteristics available to the user in the Scan Settings panel are OVSAMPL , FOSR , SCANMODE , and BLOCK EN . From the OVSAMPL drop-down list, select 64x Oversampling . Click Confirm Settings at the bottom of the window.
- 6) From the hardware perspective, it is necessary to verify that the THRM switch is active during conversion (bits 9 and 10 of register 0x62). Setting the THRMMODE bit to Automatic activates the THRM switch only during conversion. In Manual On mode, the THRM switch is always active. Manual mode is recommended. With the THRM output active, VAA reference is applied to each AUXn 10kΩ pullup resistor. Verify that the PCB THERMn jumpers are installed.
- 7) Back on the Voltage Measurements tab, click the Scan Continuously checkbox. Observe from the GP/AUX0-GP/AUX5 test points on the MAX17854 (Figure 9) that AUX levels are approximately 1.8V in value. Terminate a 10kΩ NTC thermistor to each of the GPIO\_AUXn connectors and the conversion values update accordingly.

## MAX17854 Evaluation Kit

## Cell Balancing

## Manual Cell Balancing with CBTIMER Shutoff

This procedure details a simple process for using the GUI to set up and run manual cell balancing with shutoff from the programmable CBTIMER register.

## Key Points to Consider

- User must set mode to Disable Cell Balancing prior to updating cell-balance parameters.
- In manual mode, the user can enable and disable balance switches at any time before the timer expires.
- AUTOBALSWDIS affects cell-balance switch behav -ior in manual cell-balancing modes only.
- In manual cell-balancing mode, the user should avoid activation of adjacent cell-balance switches or activation of all switches simultaneously.
- Duty Cycle slide bar is not functional in manual cellbalancing mode.

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab and click the Scan Settings button in the Settings group box to open the Scan Settings panel. Select Cell Enable All and click Confirm Settings at the bottom of the panel.
- 4) Back in the Voltage Measurements tab, click the Scan Continuously checkbox. Observe that cell voltage levels are approximately equal in value. At this point, the MAX17854 is continuously reading the voltage across each of the 2kΩ resistors in the resistor ladder. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resis -tors in the ladder.
- 5) Select the Alerts/Status tab and click the Clear All Device Alerts button. The INTRFC alert is set when the user tries to make changes to the Balancing

## Evaluates: MAX17854

Expiration Time when a timer is established for a cell-balance mode or other command faults. The user must select Cell Balancing Disabled in the Balance Switch Control group box to update the Balancing Expiration Time .

- 6) Select the Cell Balance tab and enable odd balance switches by clicking the checkboxes in the Balance Switch Enable group box.
- 7) Set the Balancing Expiration Time in row 1 to the desired timer value (e.g., 100 or a value up to 1023).
- 8) In the Balance Switch Control group box, select Manual Cell Balancing by Second from the Mode drop- down list. Observe in the lower left corner of the Cell Balance tab that the Counter box increments and the Timer is activated.
- 9) Select the Voltage Measurements tab again and observe the change in resistor stack cell voltage due to the activation of the odd-cell balance switches.
- 10)  In the Cell Balance tab, select the Mode dropdown and click Cell Balancing Disabled to disable manual cell balancing.

The same procedure can be used to verify functionality of  the  even-cell  balance  switches.  In  manual  cell-  balancing  mode,  the  cell-balance  switch  can  be  set  to automatically disable when a conversion is executed. To enable the automatic cell-balance switch-disable feature, set  AUTOBALSWDIS  bit  12  in  the  SCANCTRL  register  (0x66)  to  logic  1.  When  using  the  auto  cell-balance switch-disable feature, set the time delay before the ADC conversion value:

- 1) Use the Read/Write tab to read register 0x66.
- 2) Rewrite the SCANCTRL register (0x66) with bit 12 set.
- 3) Program the BALSWDLY register (0x63) with the necessary CELLDLY delay time from when a balance switch opens to when the MAX17854 performs the conversion. Setting the BALSWDLY register to 0x0F0F sets the cell and switch delay to 1.44ms. Alternatively, the parameters can be programmed using the General Configuration tab.

Detailed information on manual cell-balancing features is available in the MAX17854 IC data sheet.

## MAX17854 Evaluation Kit

## Automated Cell Balancing with CBUVTHR and CBTIMER (Host Sleep Mode)

This procedure details a simple process for using the GUI to set up and run the Automated Cell Balance with shutoff threshold set by the programmable CBUVTHR register.

## Key Points to Consider

- User must set Mode in the Balance Switch Control group box to Cell Balancing Disabled prior to updating the parameters in the Cell Balance tab.
- Enable or disable cell-balance parameters in Auto Cell Balancing mode triggers an INTRFC alert in the Alerts/Status tab.
- User must uncheck the Scan Continuously checkbox in the Cell Measurement to prevent an INTRFC alert from being set when Auto Cell Balancing mode is activated.
- In Auto Cell Balancing mode, the IC state machine prevents adjacent cell-balance switches from being activated simultaneously.
- The Duty Cycle slidebar is not functional in Manual Cell Balancing.
- The UV threshold can be used independently or in conjunction with cell balancing timer(s) (CBEXP1 or CBEXPn)

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab and click the Scan Settings button in the Settings group box to open the Scan Settings panel. Select Cell Enable All and Unipolar All (Cell) . Select 32x Oversampling from the OVSAMPL drop down then click Confirm Settings at the bottom of the window.
- 4) In the Voltage Measurements tab, set the Scan Continuously button. Observe that cell voltage levels are approximately equal in value. At this point,

## Evaluates: MAX17854

the MAX17854 is continuously reading the voltages across each of the 2kΩ resistors in the resistor lad -der. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder. With the power supply set to 18.0V, each resistor ladder simulated cell voltage reads approximately 1.286V.

- 5) The INTRFC alert is generated when an improper communication action is taken. Select the Alerts/ Status tab and click the Clear All Device Alerts button to clear the INTRFC alert and all other alerts in the system.
- 6) Select the Cell Balance tab and enable ALL balance switches by clicking the 14 checkboxes in the Balance Switch Enable group box.
- 7) Set the Balancing Expiration Time in rows 1-14 to the desired timer value for each cell balance (e.g., 100  or a value up to 1023).
- 8) In the Under Voltage Threshold group box, if using a benchtop power supply, select the User-Defined CBUVTHR from the drop-down list and set the UV Threshold to 1.5V. If using a battery pack, set the voltage to the desired undervoltage level.
- 9) In the Balance Switch Control group box, select ADC/CAL and CBUVTHR Check Enabled from the Measure Enable drop-down list.
- 10)  In Auto Cell Balance mode, the state machine enables even and odd switches inversely. Using the slidebar, set the Duty Cycle to 100% to effectively control a 50% duty cycle for each switch.
- 11)  Use the Mode drop-down and select one of the Automated Cell Balancing modes to activate the Balancing Expiration Timer . Immediately the CBUVTHR Check Status buttons illuminates red (CBUVTHR set to 1.5V in Step 8 is greater than cellvoltage measurement) and the driver will shut off.
- 12)  Observe in the lower left corner of the Cell Balance tab, the Counter box increments and Timer box count continues until the timer is expired.
- 13)  From the Mode drop-down list in the Cell Balance tab, click Cell Balancing Disabled to disable automated cell balancing.

## MAX17854 Evaluation Kit

## Automated Cell Balancing with MINCELL Threshold (Host Sleep Mode)

This procedure details the process for using the GUI to set  up  and  run  the  automated  cell  balance  with  shutoff threshold set by the cell with the minimum cell voltage.

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab and click the Scan Settings button in the Settings group box to open the Scan Settings panel. Click the Cell Enable All and Unipolar All (Cell) buttons. Select 64x Oversampling from the OVSAMPL drop-down list, and then click the Confirm Settings button at the bottom of the window.
- 4) In the V oltage Measurements tab, click the Scan Continuously checkbox. Observe that cell-voltage levels are approximately equal in value. At this point, the MAX17854 is continuously reading the voltages across each of the 2kΩ resistors in the resistor lad -der. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder. With the power supply set to 24.0V each resistor ladder simulated cell voltage will read approximately 1.72V.
- 5) The INTRFC alert is generated when an improper communication action is taken. Select the Alerts/ Status tab and click the Clear All Device Alerts button to clear the INTRFC alert and all other alerts in the system.
- 6) Select the Cell Balance tab and enable ALL balance switches by clicking the 14 checkboxes in the Balance Switch Enable group box. Set the Balancing

## Evaluates: MAX17854

Expiration Timer in rows 1-14 to the desired timer value for each cell balance (e.g., 100 or a value up to 1023).

- 7) In the Under Voltage Threshold group box, select MINCELL-Defined CBUVTHR from the drop-down list.
- 8) In the Balance Switch Control group box, set the Measure Enable drop-down to ADC/CAL and CBUVTHR Check Enabled .
- 9) In Auto Cell Balance Mode , the state machine enables even and odd switches inversely. Using the Duty Cycle slidebar, set to 100% to effectively control a 50% duty cycle for each switch.
- 10)  Use the Mode drop-down list and select any one of the Automated Cell Balancing modes to activate the Balancing Expiration Time . Immediately, the CBUVTHR register becomes loaded with the lowest cell voltage, setting the UV Threshold . Due to the PCB resistor ladder cell emulation, some of the CBUVTHR Status buttons will illuminate red as the cell-balance switches (SWn) are activated. Lowering the power- supply voltage illuminates all CBUVTHR Check Status indicators.
- 11)  Observe in the lower left corner of the Cell Balance tab, that the Counter box increments and Timer box counts continue until the timer is expired.
- 12)  Select the Alerts/Status tab and observe that CBDONE is activated. Click the Clear All Device Alerts button.
- 13)  Select the Mode drop-down list in the Cell Balance tab and click Cell Balancing Disabled to disable automated cell balancing.

The  graph  in  Figure  34  displays  an  actual  automated cell-balance cycle on a 14-cell ICR18650-26 battery pack using  MINCELL  as  the  shutoff  mechanism. As  seen  in the graph, each cell continues to discharge through the MAX17854 cell-balance switch until the MINCELL threshold is achieved.

## MAX17854 Evaluation Kit

## Evaluates: MAX17854

Figure 34. Automatic Cell Balancing

<!-- image -->

## I2C Master

The  following  procedure  demonstrates  the  use  of  the auxiliary  channels  (AUXIN0, AUXIN1) as SDA and SCL for  I2C  interface.  Prior  to  the  use,  the  I2C  Master  must be configured by writing data to the registers described below.  Detailed  descriptions  of  the  Register  Map  are available in the MAX17854 IC data sheet.

In  order  to  evaluate  the  I2C  Master  interface,  the  user must  make  the  following  hardware  changes  to  the MAX17854 EV kit:

- Populate R26 (0Ω)
- Populate R143 (0Ω)
- Populate R148 (0Ω)
- Do not populate R116 (1kΩ)
- Do not populate R117 (1kΩ)

Refer  to  the  MAX1785X  EV  Kit  schematic  for  further details on the location of the resistors.

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. HelloAll Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that the P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage Measurements tab and click the Scan Settings button in the Settings group box to open the Scan Settings panel. Click the I2C EN button to enable the I2C Master pins (SDA, SCL).
- 4) Click the Confirm Settings button at the bottom of the panel and then verify with an oscilloscope that SDA and SCL are idle high at the AUXIN0 and AUXIN1 IC pins 21 and 22 on the EV kit.
- 5) Select the Read/Write tab. Using the Write All group box, send 0x0000 to register STATUS1 (0x02). This will reset the STATUS1 register.
- 6) Using the Write All group box, send 0x0004 to register I2CPNTR (0x84). This will write a pointer to address 0x0004.
- 7) Write 0xAA55 to register I2CWDATA1 (0x85). This register stores the upper data bytes for I2C Master Write Mode transaction.
- 8) Write 0x9669 to register I2CWDATA2 (0x86). This register stores the lower data bytes for I2C Master Write Mode transaction.
- 9) Configure the I2C Master mode to a simple write trans -action by writing 0x2000 to register I2CCFG (0x89).
- 10)  Clear the current status of the I2C Master by writing 0x0000 to register I2CSTAT (0x8A).

## MAX17854 Evaluation Kit

- 11)  Initiate an I2C Master transaction by writing 0x78A8 to register I2CSEND (0x8B). User may observe the I2C communication with EV kit Flash by probing IC pins 21 and 22 during data transfer.
- 12)  Using the Read All group box, read register I2CSTAT (0x8A) to access the current status of the I2C Master. An output of 0xC000 indicates that the transaction was completed with no errors.

## Flexible Battery-Pack Connectivity

The flexible battery pack feature allows the user to optimize the battery pack system while maintaining hardware consistency across the pack's battery modules with variable  number  of  cells.  The  following  procedure  demonstrates the default state of flexible battery pack and the proper activation.

## Key Points to Consider

- The FlexPack feature is considered partially enabled at power-up and must be fully enabled when less than 14 cells are terminated to the MAX17854.
- When fully enabled, FlexPack uses internal MOSFETs to route power from the highest voltage switches input pin (SW8-SW14) to the DCIN pin which, in case of FlexPack, is not connected.
- Programming FlexPack TOPCELL to a lower number cell than terminated to the device places a low ohmic short between the higher SWn input and the lower programmed TOPCELL SWn input. Caution must be exercised.

## Procedure

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section, with a few exceptions.
- a. Connect power to the MAX1785X EV kit through terminal BAT12 to represent a 12-cell pack.
- b. For  both  EV  kits,  set  the  PCB  Resistor  Ladder DIP Switches (SW1) to the ON position (closed). Close  ladder  DIP  switches  1-5  on  SW2  (12 cells).
- c. Verify that the B0P- jumper is installed. Remove the P+B14 jumper.
- 2) Apply 18.0V power from PACK- to BAT12. Initialize

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17854EVKIT# | EV kit |
| MAX17851EVKIT# | EV kit |

# Denotes RoHS compliance.

## Evaluates: MAX17854

- with Single UART interface. Use Wakeup and Hello All to establish communication. Verify that HelloAll Successful and UART device ready response is displayed in the Event Log on the Initialization tab.
- 3) Select the Voltage Measurements tab and click the Scan Settings button in the Settings group box to open the Scan Settings panel. Select Cell Enable for Cell 1-Cell 12. Click Confirm Settings at the bottom of the window.
- 4) In the Voltage Measurements tab, click the Scan Continuously checkbox. Observe that the cell voltage levels are approximately equal in value. At this point, the MAX17854 is continuously reading the differential voltages across the Cell 1-Cell 12 2kΩ emulation resistors. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder.
- 5) To fully activate the FlexPack, select the General Configuration tab. Set TOPCELL to the corresponding hex number of cells. Set TOPCELL to 0xC.
- 6) Generally, TOPBLOCK is programmed the same as TOPCELL unless bus bar measurement is desired. Refer to the MAX17854 IC data sheet for details on TOPBLOCK feature and operation. For the FlexPack exercise, Set TOPBLOCK to 0xC.
- 7) Programming TOPCELL to battery cell 12 terminates DCIN pin to battery cell 12. To verify operation, the user can connect a voltmeter between IC pin 55 (SW12) and test point DCIN. Set TOPCEL L to hex 0xF to deactivate and observe the forward biased diode (~820mV) between IC pin 55 (SW12) and DCIN. Set TOPCELL to hex 0xC to activate the internal cell 12-FlexPack MOSFET and observe the internal MOSFET forward voltage. (&lt;100mV).

The  MAX17854  EV  kit  provides  the  user  with  an  introduction  to  the  features  and  functions  of  the  MAX17854 device. Refer to the MAX17854 IC data sheet for detailed explanations  of  the  product  features,  register  set,  and modes of operation.

│

## MAX17854 Evaluation Kit

## MAX17854 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                                      | DNI/DNP   |   QTY | MFG PART #                                                                                           | MANUFACTURER                                    | VALUE          | DESCRIPTION                                                                                                         | COMMENTS   |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------------------------|-------------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------|------------|
| 1      | ALARM_IN_UP, ALARM_OUT_LP, GPIO_AUX0-GPIO_AUX5, RXLP_CONN, RXUP_CONN, TXLP_CONN, TXUP_CONN                                                   | -         |    12 | 502584-0270                                                                                          | MOLEX                                           | 502584-0270    | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                                              |            |
| 2      | ALERTIN, ALERTIN_P, ALERTOUT, CPN, CPP, DCIN, HV, RXLN, RXLP, RXP1, RXP2, RXUN, RXUP, TXLN, TXLP, TXP1, TXP2, TXUN, TXUP, UARTSEL, VAA, VBLK | -         |    22 | 5000                                                                                                 | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |            |
| 3      | ALERTIN_N, GP/AUX0-GP/AUX5, RXN1, RXN2, TXN1, TXN2                                                                                           | -         |    11 | 5001                                                                                                 | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
| 4      | AUXGND, OPTO_OUT, SHDNL, THERM, VDDL1, VDDL2/3                                                                                               | -         |     6 | 5004                                                                                                 | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 5      | B0P-, B1B0, B2B1, B3B2, B4B3, B5B4, B6B5, B7B6, B8B7, B9B8, B10B9, B11B10, B12B11, B13B12, B14B13, P+B14                                     | -         |    16 | PEC02SAAN                                                                                            | SULLINS ELECTRONICS CORP.                       | PEC02SAAN      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS;                                               |            |
| 6      | BAT0-BAT14, GND_A, GND_A1- GND_A3, PACK+, PACK-                                                                                              | -         |    21 | 9020 BUSS                                                                                            | WEICO WIRE                                      | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFTDRAWN BUS TYPE-S; 20AWG                             |            |
| 7      | C1                                                                                                                                           | -         |     1 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K                  | YAGEO;MURATA;TAIYO YUDEN; AVX;MURATA            | 0.1UF          | CAP; SMT(0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                      |            |
| 8      | C2                                                                                                                                           | -         |     1 | GRM155R72A102KA01; HMK105B7102KV                                                                     | MURATA;TAIYO YUDEN                              | 1000PF         | CAP; SMT(0402); 1000PF; 10%; 100V; X7R; CERAMIC                                                                     |            |
| 9      | C3, C85                                                                                                                                      | -         |     2 | GRM188R70J105KA01; CL10B105KQ8NNNC                                                                   | MURATA;SAMSUNG ELECTRONICS                      | 1.0UF          | CAP; SMT(0603); 1.0UF; 10%; 6.3V; X7R; CERAMIC;                                                                     |            |
| 10     | C4, C5, C7                                                                                                                                   | -         |     3 | C0603C474K4RAC; GRM188R71C474K; EMK107B7474KA; C1608X7R1C474K080AC                                   | KEMET;MURATA;TAIYO YUDEN;TDK                    | 0.47UF         | CAP; SMT(0603); 0.47UF; 10%; 16V; X7R; CERAMIC                                                                      |            |
| 11     | C6                                                                                                                                           | -         |     1 | CGA4J1X7R1V475K125AE; CGA4J1X7R1V475K125AC                                                           | TDK;TDK                                         | 4.7UF          | CAP; SMT(0805); 4.7UF; 10%; 35V; X7R; CERAMIC                                                                       |            |
| 12     | C14                                                                                                                                          | -         |     1 | GRM1555C1E101GA01                                                                                    | MURATA                                          | 100PF          | CAP; SMT(0402); 100PF; 2%; 25V; C0G; CERAMIC                                                                        |            |
| 13     | C15                                                                                                                                          | -         |     1 | C1608C0G1H392K080AA                                                                                  | TDK                                             | 3900PF         | CAP; SMT(0603); 3900PF; 10%; 50V; C0G; CERAMIC                                                                      |            |
| 14     | C18                                                                                                                                          | -         |     1 | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225;                                          | MURATA;TDK;YAGEO; TAIYO YUDEN                   | 2.2UF          | CAP; SMT(1210); 2.2UF; 10%; 100V; X7R; CERAMIC                                                                      |            |
| 15     | C20, C22-C33, C84                                                                                                                            | -         |    14 | C3216X8R2A104K115AA                                                                                  | TDK                                             | 0.1UF          | CAP; SMT(1206); 0.1UF; 10%; 100V; X8R; CERAMIC                                                                      |            |
| 16     | C21                                                                                                                                          | -         |     1 | GRM21BR72A474KA73; 08051C474K4T4A                                                                    | MURATA;AVX                                      | 0.47UF         | CAP; SMT(0805); 0.47UF; 10%; 100V; X7R; CERAMIC                                                                     |            |
| 17     | C34-C47                                                                                                                                      | -         |    14 | GRM319R72A392JA01                                                                                    | MURATA                                          | 3900PF         | CAP; SMT(1206); 3900PF; 5%; 100V; X7R; CERAMIC                                                                      |            |
| 18     | C62-C75                                                                                                                                      | -         |    14 | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A | WURTH ELECTRONICS INC; TDK;KEMET;MURATA;TDK;AVX | 0.1UF          | CAP; SMT(0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                       |            |
| 19     | C77, C80, C81, C83                                                                                                                           | -         |     4 | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                               | KEMET;MURATA;TDK                                | 18PF           | CAP; SMT(0402); 18PF; 5%; 50V; C0G; CERAMIC                                                                         |            |
| 20     | C87                                                                                                                                          | -         |     1 | C0603C390K1GAC                                                                                       | KEMET                                           | 39PF           | CAP; SMT(0603); 39PF; 10%; 100V; C0G; CERAMIC                                                                       |            |
| 21     | C88                                                                                                                                          | -         |     1 | C1206C101J1GAC                                                                                       | KEMET                                           | 100PF          | CAP; SMT(1206); 100PF; 5%; 100V; C0G; CERAMIC                                                                       |            |
| 22     | C89-C92                                                                                                                                      | -         |     4 | CGA5H4C0G2J222J115AA                                                                                 | TDK                                             | 2200PF         | CAP; SMT(1206); 2200PF; 5%; 630V; C0G; CERAMIC                                                                      |            |
| 23     | C93                                                                                                                                          | -         |     1 | GCM1885C2A150JA16                                                                                    | MURATA                                          | 15PF           | CAP; SMT(0603); 15PF; 5%; 100V; C0G; CERAMIC                                                                        |            |
| 24     | C104-C109                                                                                                                                    | -         |     6 | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01                                    | MURATA;PANASONIC; SAMSUNG;MURATA                | 0.01UF         | CAP; SMT(0603); 0.01UF; 10%; 16V; X7R; CERAMIC                                                                      |            |
| 25     | D3-D8, D11-D14, D16,                                                                                                                         | -         |    17 | SP4021-01FTG                                                                                         | LITTELFUSE                                      | 5V             | DIODE; TVS; SMT(SOD-323); VRM=5V; IPP=25A                                                                           |            |
| 26     | D18-D21, D24, D25 D9, D10                                                                                                                    | -         |     2 | PESD3V3U1UB                                                                                          | NXP                                             | 3.3V           | DIODE; TVS; SMT(SOD-523); PIV=3.3V; IF=0.1A                                                                         |            |
| 27     | D26, D28, D30, D31                                                                                                                           | -         |     4 | DFLS1100-7                                                                                           | DIODES INCORPORATED                             | DFLS1100-7     | DIODE; SCHOTTKY; SMT; PIV=100V; IF=1A                                                                               |            |
| 28     | D29, D32-D34                                                                                                                                 | -         |     4 | SESDONCAN1LT1G                                                                                       | ON SEMICONDUCTOR                                | SESDONCAN1LT1G | DIODE; TVS; SMT(SOT-23); VRM=24V; IPP=3A CC;                                                                        |            |
| 29 30  | J5                                                                                                                                           | -         |     1 | PEC12DAAN                                                                                            | SULLINS ELECTRONICS CORP                        | PEC12DAAN      | CONNECTOR; MALE; THROUGH HOLE; .1IN BREAKAWAY HEADER; STRAIGHT; 24PINS                                              |            |
|        | J6                                                                                                                                           | -         |     1 | PBC15DAAN                                                                                            | SULLINS ELECTRONICS CORP.                       | PBC15DAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 30PINS                                                          |            |

## Evaluates: MAX17854

## MAX17854 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                           | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                              | COMMENTS   |
|--------|-------------------------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------|---------------------------------------|----------------|----------------------------------------------------------------------------------------------------------|------------|
|     31 | J7                                                                | -         |     1 | 5031541890 MOLEX                                                                   | 5031541890 MOLEX                      | 5031541890     | CONNECTOR; FEMALE; SMT; 1.5MM PITCH CLIK- MATE; WIRE-TO-BOARD PCB RECEPTACLE; DUAL ROW; STRAIGHT; 18PINS |            |
|     32 | L1-L4                                                             | -         |     4 | MMZ2012S601AT000                                                                   | TDK                                   | 600            | INDUCTOR; SMT(0805); FERRITE-BEAD; 600; TOL=+/- 25%; 0.5A                                                |            |
|     33 | MINIQ1                                                            | -         |     1 | PEC08DAAN                                                                          | SULLINS ELECTRONICS CORP.             | PEC08DAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                        |            |
|     34 | MINIQ2                                                            | -         |     1 | SSW-108-01-T-S                                                                     | SAMTEC                                | SSW-108-01-T-S | CONNECTOR; FEMALE; THROUGH-HOLE 0.025in POST SOCKET; STRAIGHT; 8PINS                                     |            |
|     35 | Q1, Q2                                                            | -         |     2 | BC857BS-7-F                                                                        | DIODES INCORPORATED                   | BC857BS-7-F    | TRAN; PNP; SOT-363; PD-(0.2W); I-(-0.1A); V-(-45V)                                                       |            |
|     36 | R5-R8                                                             | -         |     4 | CRCW06030000Z0EAHP                                                                 | VISHAY DRALORIC                       |                | 0 RES; SMT(0603); 0; JUMPER; JUMPER; 0.2500W                                                             |            |
|     37 | R9, R114, R115, R122-R128, R131-R134, R146, R147, R150-R152, R154 | -         |    20 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE;PANASONIC; YAGEO          | 10K            | RES; SMT(0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                         |            |
|     38 | R11, R13-R16, R28, R136, R185, R186                               | -         |     9 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH  |                | 0 RES; SMT(0603); 0; 5%; JUMPER; 0.1000W                                                                 |            |
|     39 | R12                                                               | -         |     1 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGEO; PANASONIC    | 100K           | RES; SMT(0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                        |            |
|     40 | R17                                                               | -         |     1 | RNCP1206FTD100R                                                                    | STACKPOLE ELECTRONICS INC             |                | 100 RES; SMT(1206); 100; 1%; +/-100PPM/DEGC; 0.5000W                                                     |            |
|     41 | R18                                                               | -         |     1 | ERA-3AEB1021                                                                       | PANASONIC                             | 1.02K          | RES; SMT(0603); 1.02K; 0.10%; +/-25PPM/DEGC; 0.1000W                                                     |            |
|     42 | R19                                                               | -         |     1 | ERJ-P03F10R0V                                                                      | PANASONIC                             |                | 10 RES; SMT(0603); 10; 1%; +/-200PPM/DEGC; 0.2000W                                                       |            |
|     43 | R20, R27, R183, R184                                              | -         |     4 | RC0805JR-070RL                                                                     | YAGEO PHYCOMP                         |                | 0 RES; SMT(0805); 0; 5%; JUMPER; 0.1250W                                                                 |            |
|     44 | R21, R25, R29, R33, R35-R74, R77                                  | -         |    45 | ERJ-14NF22R0                                                                       | PANASONIC                             |                | 22 RES; SMT(1210); 22; 1%; +/-100PPM/DEGC; 0.5000W                                                       |            |
|     45 | R22, R110, R155, R161, R168, R169                                 | -         |     6 | ERJ-3GEYJ104; CRCW0603100KJN                                                       | PANASONIC;VISHAY                      | 100K           | RES; SMT(0603); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                        |            |
|     46 | R81-R95                                                           | -         |    15 | CR0603-FX-1001ELF; RC0603FR-071KL                                                  | BOURNS;YAGEO                          | 1K             | RES; SMT(0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                          |            |
|     47 | R96-R109                                                          | -         |    14 | CRCW06032K0FK; ERJ-3EKF2001; RC0603FR-072KL; CRCW06032K00FK                        | VISHAY;PANASONIC; YAGEO;VISHAY        | 2K             | RES; SMT(0603); 2K; 1%; +/-100PPM/DEGC; 0.1000W                                                          |            |
|     48 | R111, R112                                                        | -         |     2 | CRCW0805360RFK                                                                     | VISHAY DALE                           |                | 360 RES; SMT(0805); 360; 1%; +/-100PPM/DEGC; 0.1250W                                                     |            |
|     49 | R113                                                              | -         |     1 | ERJ-3GEYJ102                                                                       | PANASONIC                             | 1K             | RES; SMT(0603); 1K; 5%; +/-200PPM/DEGC; 0.1000W                                                          |            |
|     50 | R116-R121                                                         | -         |     6 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                    | VISHAY; PANASONIC;BOURNS              | 1K             | RES; SMT(0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                          |            |
|     51 | R129, R130, R138, R140, R179-R182                                 | -         |     8 | CRCW12060000ZS                                                                     | VISHAY DALE                           |                | 0 RES; SMT(1206); 0; JUMPER; JUMPER; 0.2500W                                                             |            |
|     52 | R157-R160                                                         | -         |     4 | CRCW080549R9FK; ERJ-6ENF49R9; RMCF0805FT49R9                                       | VISHAY DALE;PANASONIC; STACKPOLE      |                | 49.9 RES; SMT(0805); 49.9; 1%; +/-100PPM/DEGC; 0.1250W                                                   |            |
|     53 | R162, R164, R172, R173                                            | -         |     4 | CRCW12061K50FK                                                                     | VISHAY DALE                           | 1.5K           | RES; SMT(1206); 1.5K; 1%; +/-100PPM/DEGC; 0.2500W                                                        |            |
|     54 | SHDNL_SEL                                                         | -         |     1 | FTS-103-01-L-S                                                                     | SAMTEC                                | FTS-103-01-L-S | CONNECTOR; MALE; THROUGH HOLE; MICRO LOW PROFILE TERMINAL STRIP; STRAIGHT; 3PINS                         |            |
|     55 | SU1, SU2                                                          | -         |     2 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED  |            |
|     56 | SW1, SW2                                                          | -         |     2 | ADE0804                                                                            | TE CONNECTIVITY                       | ADE0804        | SWITCH; SPST; DIP16; 24V; 0.1A; SLIDE ACTUATED PIANO-DIP; RCOIL= OHM; RINSULATION= OHM; TYCO ELECTRO     |            |
|     57 | THERM1-THERM6                                                     | -         |     6 | 3-644456-2                                                                         | TYCO                                  | 3-644456-2     | CONNECTOR, HEADER STRIP, TH, STR, 2PINS, 1 ROW                                                           |            |
|     58 | U1                                                                | -         |     1 | MAX17854ACB/V+                                                                     | MAXIM                                 | MAX17854ACB/V+ | IC; INFC; 14 CHANNEL HIGH-VOLTAGE DATA ACQUISITION SYSTEM; LQFP64                                        |            |
|     59 | U2                                                                | -         |     1 | MAX3378EEUD+                                                                       | MAXIM                                 | MAX3378EEUD+   | IC; TRANS; +/-15KV ESD-PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14                |            |
|     60 | U3                                                                | -         |     1 | AT24CS08-SSHM                                                                      | ATMEL                                 | AT24CS08-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; NSOIC8 150MIL                                          |            |

Evaluates: MAX17854

## MAX17854 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                               | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                         | VALUE                      | DESCRIPTION                                                                                    | COMMENTS   |
|--------|-------------------------------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------|--------------------------------------|----------------------------|------------------------------------------------------------------------------------------------|------------|
|     61 | U4                                                    | -         |     1 | MAX3390EEUD+                                                                                  | MAXIM                                | MAX3390EEUD+               | IC; TRANS; 15KV ESD-PROTECTED; 1UA; 16MBPS; QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14         |            |
|     62 | U5                                                    | -         |     1 | TLP2770                                                                                       | TOSHIBA                              | TLP2770                    | IC; PHOTO; 20MBPS LOW POWER PHOTOCOUPLER; WSOIC6                                               |            |
|     63 | PCB                                                   | -         |     1 | MAX1785X                                                                                      | MAXIM                                | PCB                        | PCB:MAX1785X                                                                                   | -          |
|     64 | MISC1-MISC3                                           | DNI       |     3 | 2844/19 BK001                                                                                 | ALPHA WIRE COMPANY                   | N/A                        | WIRE; BLACK; 19/36; ALPHA WIRE COMPANY; HOOK-UP; MIL-W-16878E (TYPE E); AWG24                  |            |
|     65 | MISC2, MISC3                                          | DNI       |     2 | 2844/19 BL001                                                                                 | ALPHA WIRE COMPANY                   | N/A                        | WIRE; BLUE; 19/36; ALPHA WIRE COMPANY; HOOK- UP; MIL-W-16878E (TYPE E); AWG24                  |            |
|     66 | MISC1-MISC3                                           | DNI       |     6 | 5025780200                                                                                    | MOLEX                                | N/A                        | CONNECTOR; FEMALE; WIREMOUNT; CLIK-MATE WIRE-TO-BOARD HOUSING; SINGLE ROW; POSITIVE LOCK 2PINS |            |
|     67 | MISC1-MISC3                                           | DNI       |    12 | 5025790000                                                                                    | MOLEX                                | N/A                        | CONNECTOR; FEMALE; WIRE-TO-BOARD CRIMP TERMINAL; WIREMOUNT; 1PIN                               |            |
|     68 | MISC1                                                 | DNI       |     1 | 2844/19 RD001                                                                                 | ALPHA WIRE COMPANY                   | N/A                        | WIRE; RED; 19/36; ALPHA WIRE COMPANY; HOOK- UP; MIL-W-16878E (TYPE E); AWG24                   |            |
|     69 | BUMP1-BUMP6                                           | DNI       |     6 | SJ-5003(BLACK)                                                                                | 3M ELECTRONIC SOLUTIONS DIVISION     | SJ-5003(BLACK)             | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE  |            |
|     70 | MISC1                                                 | DNI       |     1 | CLIK-MATE_2-PIN_LOOP-BACK                                                                     | MAXIM                                | CLIK-MATE_2-PIN_LOOP- BACK | CABLE ASSEMBLY; TWO WIRE CLIK-MATE 2-WIRE LOOP CABLE; WITH WIRE STRIPPER AND CRIMP TOOL;       |            |
|     71 | MISC2, MISC3                                          | DNI       |     2 | CLIK-MATE-CABLE_2-WIRE                                                                        | MAXIM                                | CLIK-MATE-CABLE_ 2-WIRE    | CABLE ASSEMBLY; TWO WIRE CLIK-MATE CROSSOVER CABLE; WITH WIRE STRIPPER AND CRIMP TOOL;         |            |
|     72 | C8-C13                                                | DNP       |     0 | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103                                     | NIC COMPONENTS CORP.; MURATA;YAGEO   | 0.01UF                     | CAP; SMT(0402); 0.01UF; 10%; 16V; X7R; CERAMIC                                                 |            |
|     73 | C16                                                   | DNP       |     0 | C0603C474K4RAC; GRM188R71C474K; EMK107B7474KA; C1608X7R1C474K080AC                            | KEMET;MURATA;TAIYO YUDEN;TDK         | 0.47UF                     | CAP; SMT(0603); 0.47UF; 10%; 16V; X7R; CERAMIC                                                 |            |
|     74 | C17, C86                                              | DNP       |     0 | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01                             | MURATA;PANASONIC; SAMSUNG;MURATA     | 0.01UF                     | CAP; SMT(0603); 0.01UF; 10%; 16V; X7R; CERAMIC                                                 |            |
|     75 | C19                                                   | DNP       |     0 | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225; HMK325B7225KM                     | MURATA;TDK;YAGEO; TAIYO YUDEN        | 2.2UF                      | CAP; SMT(1210); 2.2UF; 10%; 100V; X7R; CERAMIC                                                 |            |
|     76 | C48-C61                                               | DNP       |     0 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA;MURATA;TDK; TDK;SAMSUNG       | 0.1UF                      | CAP; SMT(0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                  |            |
|     77 | C76, C78, C79, C82                                    | DNP       |     0 | C0402C0G500-150JNP; GRM1555C1H150JA01                                                         | VENKEL LTD.;MURATA                   | 15PF                       | CAP; SMT(0402); 15PF; 5%; 50V; C0G; CERAMIC                                                    |            |
|     78 | CM1, CM2                                              | DNP       |     0 | ACT45B-510-2P-TL003                                                                           | TDK                                  | ACT45B-510-2P-TL003        | INDUCTOR; SMT(1812); WIREWOUND CHIP; 51UH; TOL=[+50%/-30%]; 0.2A                               |            |
|     79 | CURRENTSENSE                                          | DNP       |     0 | 502584-0270                                                                                   | MOLEX                                | 502584-0270                | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                         |            |
|     80 | D15, D22, D23                                         | DNP       |     0 | SP4021-01FTG                                                                                  | LITTELFUSE                           | 5V                         | DIODE; TVS; SMT(SOD-323); VRM=5V; IPP=25A                                                      |            |
|     81 | J1-J4                                                 | DNP       |     0 | TSW-116-07-G-S                                                                                | SAMTEC                               | TSW-116-07-G-S             | CONNECTOR; MALE; THROUGH HOLE; 0.25INCH SQ POST HEADER; STRAIGHT; 16PINS                       |            |
|     82 | J8                                                    | DNP       |     0 | SSW-104-01-T-S                                                                                | SAMTEC                               | SSW-104-01-T-S             | CONNECTOR; MALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 4PINS                        |            |
|     83 | R1-R4, R23, R24, R26, R30, R31, R141, R143-R145, R148 | DNP       |     0 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                                | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH | 0                          | RES; SMT(0603); 0; 5%; JUMPER; 0.1000W                                                         |            |
|     84 | R10, R142                                             | DNP       |     0 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                                 | VISHAY DALE;PANASONIC; YAGEO         | 10K                        | RES; SMT(0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                               |            |
|     85 | R32, R34                                              | DNP       |     0 | CRCW08050000ZS; RC2012J000                                                                    | VISHAY;SAMSUNG ELECTRONICS           |                            | 0 RES; SMT(0805); 0; JUMPER; JUMPER; 0.1250W                                                   |            |
|     86 | R137, R139                                            | DNP       |     0 | ERJ-3GEYJ153                                                                                  | PANASONIC                            | 15K                        | RES; SMT(0603); 15K; 5%; +/-200PPM/DEGC; 0.1000W                                               |            |
|     87 | R187                                                  | DNP       |     0 | CRCW12060000ZS                                                                                | VISHAY DALE                          |                            | 0 RES; SMT(1206); 0; JUMPER; JUMPER; 0.2500W                                                   |            |

Evaluates: MAX17854

## MAX17854 Evaluation Kit

## MAX1785X EV Kit Schematics

<!-- image -->

Evaluates: MAX17854

## MAX1785X EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX17854

## MAX1785X EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX17854

## MAX1785X EV Kit Schematics (continued)

<!-- image -->

│

## MAX1785X EV Kit PCB Layouts

MAX1785X EV Kit PCB Layout-Silk Top

<!-- image -->

│

## MAX1785X EV Kit PCB Layouts (continued)

MAX1785X EV Kit PCB Layout-Top

<!-- image -->

│

## MAX1785X EV Kit PCB Layouts (continued)

MAX1785X EV Kit PCB Layout-Internal2

<!-- image -->

│

## MAX1785X EV Kit PCB Layouts (continued)

MAX1785X EV Kit PCB Layout-GND3

<!-- image -->

│

## MAX1785X EV Kit PCB Layouts (continued)

<!-- image -->

<!-- image -->

MAX1785X EV Kit PCB Layout-Bottom

│

## MAX1785X EV Kit PCB Layouts (continued)

<!-- image -->

MAX1785X EV Kit PCB Layout-Silk Bottom

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX17854