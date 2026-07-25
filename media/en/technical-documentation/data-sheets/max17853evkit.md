<!-- lastmod 2022-08-03 -->
## MAX17853 Evaluation Kit

## General Description

The  MAX17853  evaluation  kit  (EV  kit) is used  to demonstrate the features and capabilities of the MAX17853 14-channel  high-voltage  smart  sensor  data-acquisition interface IC. The EV kit is coupled with a MAX17841B EV kit  to  establish  communication to a host PC. With communication established, control of the MAX17853 EV kit is executed through the EV kit graphical user interface (GUI) on  the  host  PC.  The  GUI  is  Windows  XP ® ,  Windows Vista ® ,  Windows ®   7,  and  Windows  10  compatible  and is  available  through  your  local  Maxim  Integrated  sales office. Note: References  to  the  MAX17841  in  this  data sheet pertain equally to the MAX17841B as well.

The MAX17853 EV kit design provides a convenient platform for evaluating the features and functions of the IC, in  addition  to  the  IC's  electrical  parameters.  The  EV  kit with vertical communication connectors (P2, P3, P5, and P6) and snap and lock battery pack connector enable the user to quickly build and evaluate a system with up to 32 daisy-chain devices.

Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX17853

## Benefits and Features

- Provides a Convenient Platform for Evaluating the Features and Functions of the MAX17853
- Versatile GUI Interface for Features Evaluation
- Plug-and-Play Architecture for Rapid System Prototyping
- Force and Sense Pin Headers for Precision Measurement Assessment
- Built-In Resistor Stack for Battery Emulation
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17853 EV Kit Files

| FILE                          | DESCRIPTION                              |
|-------------------------------|------------------------------------------|
| MAX17853_EV kit_Installer.exe | Software: Graphical User Interface (GUI) |
| MAX17853_UART_EV kit_SCH.pdf  | Schematic File pdf                       |
| MAX17853_UART_EV kit_PCB.pdf  | PCB Layout File pdf                      |

<!-- image -->

## MAX17853 Evaluation Kit

## Quick Start (Single UART)

This  procedure  describes  the  setup  and  initialization  of a  two-module  distributed  daisy-chained  system  using the MAX17853 in a single UART with external loopback communication mode. The user may choose to expand the system with additional EV kit modules depending on their requirements and testing needs.

## Required Hardware

- Two MAX17853 EV kits (cables included)
- One Single  UART  MAX17841B  EV  kit  (includes  the MINIQUSB+ interface board)
- 9V to 65V DC power supplies (refer to the MAX17853 IC data sheet for recommended operating range)
- User-supplied Windows XP-, Windows Vista-, Windows  7-,  or  Windows  10-compatible  PC  with  a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly

Evaluates: MAX17853

from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The MAX17853 EV kit is fully  assembled  and  functionally  tested  prior  to  shipment.  Follow  the  steps  below  to become acquainted with the MAX17853 EV kit and initialize the single-UART EV kit communication. Enable power supplies only after all connections have been completed:

- 1) Install the MAX17853 EV kit software on your computer by running the MAX17853\_EV kit\_Installer.exe.
- 2) Connect the MINIQUSB+ to the J3 and J4 headers on the single-UART MAX17841B EV kit.
- 3) Connect the USB  cable from the PC  to the MINIQUSB+  board.  A Building  Driver  Database window  pops  up  in  addition  to  a New  Hardware Found message  if  this  is  the  first  time  the  EV  kit board  is  connected  to  the  PC.  If  a  window  is  not seen like the one described above after 30s, remove the USB cable from the MINIQUSB+ and reconnect

Figure 1. MAX17853 EV Kit System for Single UART

<!-- image -->

│

## MAX17853 Evaluation Kit

again. Administrator privileges are required to install the USB device driver on Windows XP, Windows Vista, Windows 7, and Windows 10.

- 4) Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the Search for the Best Driver for Your Device option. Specify the location of the device driver to be C:\Program Files\MAX17853 (default installation directory) using the Browse button. Refer to the USB\_Driver\_ Help.pdf  document  included  with  the  software  for additional information.
- 5) Download  and  install  the  appropriate  FTDI  drivers from https://www.ftdichip.com/Drivers/D2XX.htm if required.
- 6) Ensure  that  all  jumper  shunts  and  switches  are configured as listed in Table 1, Table 2, and Table 3.
- 7) For  purposes  of  evaluation  a  single  power  supply can  be  used  to  power  all  MAX17853  EV  kits  in  a system  with  a  common  ground.  Configure  the  DC power supply and disable the output.
- 8) Connect each MAX17853 EV kit PACK+ and PACKto  the  power-supply  output.  Terminate  PACK+  to the power-supply positive output and PACK- to the power-supply negative output.
- 9) Connect the four 2-wire black/blue crossover cables, as described below:
- a)  Connect P1 on the MAX17841B EV kit to RXLP\_CONN on the first MAX17853 EV kit
- b)  Connect P2 on the MAX17841B EV kit to TXLP\_CONN on the first MAX17853 EV kit
- c)  Connect TXUP\_CONN on the first MAX17853 EV kit to RXLP\_CONN on the second MAX17853 EV kit
- d)  Connect RXUP\_CONN on the first MAX17853 EV kit to TXLP\_CONN on the second MAX17853 EV kit

Note: The connections  mentioned  in  steps  1-4  can  be generalized  for  any  number  of  devices  within  a  daisychain (up to 32). These connections are also illustrated within the GUI for quick reference.

- 10) On the second MAX17853 EV kit, connect the 2-wire red/black  loopback  cable  from  TXUP\_CONN  to RXUP\_CONN.
- 11) Enable the DC power supply.
- 12) Start the MAX17853EV KIT software by opening its icon in the Start Programs menu. The EV kit GUI software automatically establishes communication with the Maxim MINIQUSB+ interface. The status bar at the bottom of the GUI displays Maxim MINIQUSB+

Evaluates: MAX17853

V02.05.xx and UART Not Initialized (see Figure 8). With the MINIQUSB detected, the user can proceed to the next step.

- 13) In  the Communication tab  (Figure  8),  click  on  the Single UART with External Loopback radio button.
- 14) Select the Initialization tab (Figure 13).
- 15) Click the Wakeup button.
- 16) Click the Hello ALL button.
- 17) In the bottom-right side of status bar, verify communication is established with the UART. Status will read Single UART Connected .
6. In the Event Log group box, verify:
7. 18-08-13 14:22:20 HelloAll Successful
8. 18-08-13 14:22:20 Dev0 MAX17853 Ver 4
9. 18-08-13 14:22:20 Dev1 MAX17853 Ver 4
10. 18-08-13 14:22:20 UART device ready
- 18) The EV kit is now ready for further evaluation.

## Table 1. MAX17853 EV Kit Default Jumper Settings

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| P+B14, B0P-   | Installed        |
| THERM0-THERM5 | On one pin only  |

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
- 2) The  optional  position  of  SW1  and  SW2  is  ON  (actuators  toward  MAX17853),  and  the  setup  is  for  an  external power-supply  input  between  PACK+  and  PACK-  with  the 2kΩ resistor ladder.

│

## MAX17853 EV Kit Hardware Description

The MAX17853 EV kit PCB is designed with headers, test points, and jumpers, providing convenient access to circuit nets where measurements can be made, and signals monitored.

Figure 2. MAX17853 EV Kit PCB

<!-- image -->

## MAX17853 Evaluation Kit

## Battery-Pack Connector (J7)

Power is applied to the MAX17853 EV kit through the J7 battery-pack  connector,  or  the  PACK+  and  PACK-  test points. The PACK+ and PACK- test points are provided should the user prefer to source power from a laboratory power supply. Caution: Only apply a jumper to B0P- and P+B14 when using a battery pack. Placing a jumper on any  battery  pin  header  with  a  battery  pack  connected places a direct short on the battery-pack cell.

To  power  the  MAX17853  EV  kit  using  a  bench  power supply, terminate PACK+ to the positive post and PACKto  the  negative post of the power supply and install the P+B14 and B0P- jumpers.

Evaluates: MAX17853

## Battery-Cell Emulation

For convenience, the MAX17853 EV kit PCB is equipped with  a  2kΩ  resistor  ladder  to  emulate  a  battery  pack when using a bench power supply. To apply the emulated battery-pack  resistor  ladder  voltages  to  the  MAX17853 cell-voltage  measurement  inputs  (C0-C14),  place  all SW1  and  SW2  switches  in  the  closed  or  ON  position. Pack voltage from a bench power supply applied to the 2kΩ resistor  ladder  divides  equally  across  the  resistors and is measured by the MAX17853.

The battery interface includes a battery force and sense pin header (J6) that can be used for precision measurement testing. A forced simulated-battery voltage between adjacent pins on the J6 pin header can be measured at the  pin  header  and  compared  with  the  data  conversion values of the MAX17853 IC.

Figure 3. MAX17853 Battery Interface

<!-- image -->

│

## MAX17853 Evaluation Kit

## AUX Input/Output/ADC

The  auxiliary  (AUX)  input/output/ADC  section  of  the EV  kit  PCB  (see  Figure  4)  gives  the  user  access  to the  MAX17853  AUX  GPIO  pins  and  THRM  pin.  Each GPIO\_AUX connector is equipped to interface directly to NTC thermistors for external temperature measurement. With  the  THERMn  jumper  installed,  the  NTC  sensor  is pulled  up  through  a  10kΩ  resistor  to  the  THRM  pin  on the  MAX17853. This  feature  allows  the  user  to  turn  on or off the 10kΩ pullup through the THRM pin for energy conservation.

GPIO\_AUX is instrumented with a block header (J5) that allows  the  user  to  perform AUX\_GPIO force and sense accuracy measurements. To perform accuracy measurement through the J5 header, a voltage is forced onto a pin header and can be sensed through the adjacent pin on the header. The measurement can then be compared to the conversion measurement of the MAX17853.

## UART Ports

The  UART  communication  ports  are  identified  as  the upper port (RXU/TXU) and the lower port (RXL/TXL), with

## Evaluates: MAX17853

reference  to  the  MAX17853  device  on  the  EV  kit  PCB (see Figure 5). Each UART port comprises a differential transmitter and a differential receiver.

Communication  data  received  on  the  lower  receiver  is retransmitted  through  the  upper  transmitter  to  the  next EV kit in the daisy-chain. Communication received on the upper receiver is retransmitted through the lower transmitter and downward through the chain. Each differential pair includes four test points for observing the communication signals.  It  is  critical  to  note  that  the  upper  port  (RXP2, RXN2, TXP2, TXN2) test points are referenced to the next higher ground-potential EV kit.

The EV kit UART network and components are designed for the automotive environment and are capable of enduring battery-management-system compliance testing. This includes BCI, ESD, radiated emission, pulse testing, and deactivation  of  the  service-disconnect  switch.  The  PCB and  UART  components  are  designed  and  selected  for 630VDC (max) isolation between each MAX17853 EV kit in the daisy-chained system; however, isolation capability has not been tested on the MAX17853 EV kit.

Figure 4. GPIO\_AUX Port Access

<!-- image -->

Figure 5. UART Ports

<!-- image -->

│

## MAX17853 Evaluation Kit

## MAX17853 IC Pin Headers (J1-J4)

Each pin on the MAX17853 is available for easy monitoring through the J1 IC pin header (see Figure 6). Header J1 is terminated to pins 1-16 on the MAX17853, J2 is terminated to pins 17-32, J3 is terminated to pins 33-48, and J4 is terminated to pins 49-64.

For  convenience,  certain  IC  pins  are  terminated  to  test  points  for  monitoring  frequently  observed  device  signals. Examples include: VBLK, DCIN, HV, CPP, CPN, SHDNL \_SELSHDNL, VAA UARTSEL, VDDL1, ALERTIN, ALERTOUT, and THERM.

Figure 6. MAX17853 IC Pin Header (J1)

<!-- image -->

│

## MAX17841B EV Kit and MINIQUSB+

To complete the Maxim EV kit battery-management evaluation system, it is essential to include the MAX17841B EV kit. The MAX17841B EV kit contains the MAX17841B base board and the PC USB interface board (MINIQUSB+). Power and ground for the MAX17841B is derived through the MINIQUSB+ and require no other power source. It is critical to note that the MAX17841B EV kit provides the battery-management evaluation system with capacitive isolation on connectors P1 and P2. See Figure 7 for the MAX17841B EV kit PCB.

Figure 7. MAX17841B EV Kit PCB

<!-- image -->

│

## MAX17853 Evaluation Kit

## Using the Graphical User Interface

The  MAX17853  EV  kit  is  evaluated  in  conjunction  with the  MAX17853  evaluation  software.  The  graphical  user interface (GUI) provides a friendly environment for reading and writing to all device registers, as well as executing device commands.

## Communication Tab

The  GUI  startup  cockpit  is  designed  to  guide  the  user through  hardware  setup  and  provides  overall  startup system  information.  At  startup,  the  GUI  automatically initializes and establishes communication with the Maxim MINIQUSB+ interface board and places the user on the Communication tab  (see  Figure  8).  UART  status  is shown in the lower-right corner of the cockpit.

The GUI is preset to  UART communication with a dual UART interface (see Figure 8). When selecting the UART

Evaluates: MAX17853

configuration, the hardware graphic updates to reflect the proper wiring interface for the selected UART. For communication  to  be  established  between  the  MAX17841B EV kit and MAX17853 EV kit, it is imperative that system wiring match the UART configuration selected.

The  MAX17853  EV  kit  is  designed  to  support Single UART  Interface  with  External  Loopback ,  as  shown in Figure 10. Follow the UART wiring changes shown in Figure 9, Figure 11, and Figure 12 for alternative UART configurations.

Located  in  the Communication tab  (Figure  8)  is  the UART  Options group  box.  Options  set  in  the UART Options group box control TXL and TXU idle state impedance,  adaptive  transmission  setting,  and  packet  error check (PEC). The user can also enable and evaluate the alert function, double-buffer feature, UART DC diagnostic test, and control the alive-counter bit (ALIVECNTEN).

Figure 8. Communication Tab

<!-- image -->

│

Figure 9. Dual UART Interface

<!-- image -->

Figure 10. Single UART Interface with External Loopback

<!-- image -->

Figure 11. Single UART Interface with Differential Alert Interface

<!-- image -->

Figure 12. Single UART Interface with Internal Loopback on Device#

<!-- image -->

│

## MAX17853 Evaluation Kit

## Initialization Tab

The Initialization tab  (see  Figure  13)  is  used  to  initialize  the  system and assign addresses to each device in the  daisy-chain.  The  correct Single  UART Interface or Dual UART Interface radio button must be selected for the hardwired system. Communication will only be established  when  the  wired  system  aligns  with  the  interface chosen  from  the UARTCFG group  box.  With  the Dual UART Interface radio button selected, the user has the option  of  selecting UPHOST or DOWNHOST .  Further information  on  UPHOST and DOWNHOST communication  is  available  in  the MAX17853  IC  data  sheet .  The Wakeup button initiates the communication process and the Hello All button assigns the device addresses.

Along with establishing communication, the Initialization tab  provides  a  method  to  log  detailed  communication

Evaluates: MAX17853

events. The event and detailed logs can be enabled or disabled by clicking the checkboxes in the lower-left corner of the GUI.

Note: The FORCEPOR button commands a soft-reset to all MAX17853 devices in the daisy-chained system.

## General Configuration Tab

The General Configuration tab (see Figure 14) is used for programming settling times for AUXTIME , CELLDLY and SWDLY . The FlexPack feature enable and programming  is  easily  controlled  through  drop-down  menus in  the General  Configuration tab.  Parameters  such as TOPCELL and TOPBLOCK ,  required  for  FlexPack programming, can be directly entered.

Information  on  each  of  the  parameters  on  the General Configuration tab is available in the MAX17853 IC data sheet .

Figure 13. Initialization Tab

<!-- image -->

│

## MAX17853 Evaluation Kit

Evaluates: MAX17853

Figure 14. General Configuration Tab

<!-- image -->

## Voltage Measurements Tab

The Voltage Measurements tab  (see  Figure  15)  is  the user interface for visually monitoring all cell measurement and  AUX  conversion  values  in  the  battery  monitoring system. In addition, the Voltage Measurements tab can be constructed to display a visual indication of cell ADC OV/UV, comparator OV/UV, and communication alerts.

In  the Voltage  Measurements tab,  the Scan  Settings and Diag  Settings buttons  in  the Settings group  box on the right side of the GUI open into individual settings panels (see Figure 16 and Figure 17).

The lower right-hand corner in the Voltage Measurements tab displays a legend that indicates visually the state of each voltage measurement and comparator alert. For the visual alert to be active, the thresholds must be set and enabled in the Thresholds tab (Figure 18).

In  the Scan Settings panel,  the  user  can  set  monitoring and control properties for Cell and AUX inputs, in addition to ADC oversample setting/frequency and ADC scan mode.

Note: The user must click the Confirm Settings button at the bottom of the panel for the selections to take effect.

Selections made in the Scan Settings panel are applied to each MAX17853 device in the system.

For cell voltages to be  displayed on  the Voltage Measurements tab, simply  enable  the  cells to  be monitored  on  the Scan  Settings panel  and  press  the Confirm Settings button. Pressing the Confirm Settings button  closes  the Scan  Settings panel  and  places  the user back in the Voltage Measurements tab. To have the MAX17853  perform  the  scan  settings  operation,  select the Scan Type from the drop-down list and the number of scans to be performed ( Single Scan , N Scans , or Scan Continuously ).

The IIR  Filter settings  are  also  located  in  the Voltage Measurements tab and are controlled with a button click enable and a drop-down Coefficient Selection .

The Diag Settings button in the Voltage Measurements tab  gives  the  user  control  of  diagnostic  current  sources and diagnostic terminations within the MAX17853 device. The user can update diagnostic control for one device or for all devices in the system.

│

Figure 15. Voltage Measurements Tab

<!-- image -->

Figure 16. Scan Settings Panel

<!-- image -->

Evaluates: MAX17853

Figure 17. Diagnostic Settings Panel

<!-- image -->

## MAX17853 Evaluation Kit

## Thresholds Tab

Clicking on the Thresholds tab (see Figure 18) opens the panel where users can enter OV/UV and fault thresholds in hex value or voltage (see Figure 19).

Clicking the Alert Enables button in the top-right corner of the Thresholds tab opens the Alert Enable panel (see Figure 19).

## Alerts/Status Tab

By selecting the Active Device from the drop-down list, the Alerts/Status tab  (see  Figure  20)  displays  the  fault status of the MAX17853 in the system.

The user can use the Clear Active Device Alerts or the Clear All Device Alerts to clear the faults logged in the system. Above the cockpit tabs, the GUI shows the Data Check Byte faults and Error Counts . Resetting the error count is done through the Device dropdown at the top left of the GUI. Click Device and select Reset Error Counts .

Figure 18. Thresholds Tab

<!-- image -->

Evaluates: MAX17853

│

## Evaluates: MAX17853

Figure 19. Alert Enable Panel

<!-- image -->

Figure 20. Alerts/Status Tab

<!-- image -->

## MAX17853 Evaluation Kit

## Cell Balance Tab

The Cell  Balance tab  (see  Figure  21)  gives  the  user the  flexibility  for  manual  and  automatic  control  of  the MAX17853 cell-balance  feature.  The Device  Selection drop-down list programs the balancing settings to one or more devices in the system. The Balance Switch Control group box includes a drop-down list for the desired operational balance mode. Note: To update parameters in the Cell Balance tab, select Cell Balancing Disabled from the Mode drop-down  list  prior  to  selecting  the  desired balancing mode.

To  activate  a  cell-balance  switch,  use  the Balance Switch Enable group box to enable the desired balance switch and set the Balancing Expiration Time #1 to the number of  seconds  or  minutes  to  perform  the  balance. In the Alerts/Status tab (Figure 20), be sure to click the Clear  All  Device  Alerts button  (the  interface-specific error alert (INTRFC) must be clear). Next, select Manual Cell  Balancing  by  Second from  the Mode drop-down

Evaluates: MAX17853

list  in  the Balance Switch Control group  box,  and  the cell  balance  immediately  becomes  active  and  the  timer is started. Manual mode allows the user total control over the  cell-balance  switches. Caution: Prevent  accidental activation of adjacent cell-balance switches or the activation of all cell-balance switches when using Manual Cell Balancing Mode .

Note: In Manual Cell Balancing by Second or Minute , only the Cell 1 timer is recognized by the system, with all switches deactivated when the Cell 1 timer expires.

For Automatic Balance modes, the user can enable all balance switches and allow the MAX17853 to control the activation  according  to  the  user-set  parameters.  From the Cell  Balance tab  (Figure  21),  in Automatic mode, the user can set the cell-balance Duty Cycle using  the slidebar  and  other  key  parameters  like UV  Threshold and Balance Switch Diagnostic Thresholds .  The Cell Balance tab  also  includes Balance Switch Fault Alert and CBUVTHR Check Status indicators.

Figure 21. Cell Balance Tab

<!-- image -->

│

## MAX17853 Evaluation Kit

## Read/Write Tab

The Read/Write tab  (Figure  22)  provides  direct  access to the read and write registers of the MAX17853. In the Read/Write tab, the GUI offers several read/write options to  the  user.  The Select  Register group  box  allows  the user to read register contents by highlighting the desired register  and  clicking  the Read All button.  For  example, if the user wants to read the unique ID assigned to each device, scroll down the list and highlight the ID1 (0x8C) register and click the Read All button, then highlight the ID2  (0x8D)  register  and  click  the Read All button.  The contents of the registers are then displayed in the Read Output group box.

Blocks of data in packets of ≤28 registers can be request -ed through the Read Block group  box.  Enter  the Start Address and  set  the Block  Size ,  then  click  the Read Block button. The Read All group box, Write All group box provide alternative methods to write to specific registers in specific addressed devices.

## MAX17841 Tab

The MAX17841B registers can be directly modified using the MAX17841 Register Map sub-tab (see Figure 23). A pull-down arrow to the left of the address number allows the  user  to  identify  register  content.  As  an  example, Figure 23 shows register 0x11 content and has the KeepAlive  [3:0] highlighted.  To  alter  the  keep-alive  timing, the  user  must  type  the  desired  hex  value  of  the  period directly  in  the Update Field edit  box  and  then  click  the Set button on the right. Selecting a parameter in a register automatically  highlights  the  bit  values  of  the  parameter and provides a description of the parameter in the Field Description group box.

Similarly, the SPI Commander sub-tab shown in Figure 24 can be used to send SPI commands to the MAX17841B in an SPI-controlled system.

Figure 22. Read/Write Tab

<!-- image -->

Evaluates: MAX17853

│

Figure 23. MAX17841 Tab (Register Map Panel)

<!-- image -->

Figure 24. MAX17841 Tab (SPI Commander Panel)

<!-- image -->

## MAX17853 Evaluation Kit

## GUI File Options

The File menu  drop-down  list  on  the  GUI  (see  Figure 25) offers powerful tools such as Log Scan Data , Save Register Configuration , Load Register Configuration , as well as Restart and Exit .

## Log Scan Data

For  collecting  conversion  data  for  later  analysis,  select Log  Scan  Data from  the File menu  drop-down  list.

Figure 25. Log Scan Data

<!-- image -->

Evaluates: MAX17853

The Log Scan Data window pops up and requests the Number of ADC Scans to Log and  the File Path and Root  Name of  the  location  where  the  data  should  be stored. Conversion data will be taken according to userset  parameters like Oversample settings  and IIR  Filter Enable .

│

## MAX17853 Evaluation Kit

## Device Register Configuration Files

During  evaluation,  the  user  may  want  to  save  the device  register  content  for  later  use.  Saving  device register content is performed by selecting Save Register Configuration from  the File menu  drop-down  list,  as shown in Figure 25. The register file is saved in standard .csv format. Registers can be loaded from a saved register  file  by  selecting  the Load Register Configuration option  from  the  list  and  selecting  the  previously  saved register.csv file.

## Scripting

A script file can be used to set up the GUI and device to operate in specific modes, or to evaluate a sequence of commands for device functionality. Commands for writing scripts can be found in the Command Reference menu item under the Help menu bar drop-down list.

Before  running  scripts,  follow  the Quick  Start  (Single UART) section  and  establish  system  communication. Figure 26 shows a sample script that programs the cell overvoltage to 1.099V and the undervoltage to 0.9V.

After the script is run and Cell Voltage measurement is enabled, the OV/UV is indicated in the updated Voltage Measurements tab shown in Figure 27, according to the Legend group box in the lower-right corner.

Figure 26. OV/UV Sample Script

<!-- image -->

Evaluates: MAX17853

│

Figure 27. Voltage Measurements Tab (Updated)

<!-- image -->

## Evaluation Procedures

This  section  gives  the  user  step-by-step  procedures  for functional evaluation of the MAX17853 using the software interface GUI.

## Cell Voltage and Comparator Measurements

The following  procedure  describes  how  to  use  the  GUI and  EV  kit  to  make Cell  Voltage measurements  and observe  measurement  and  comparator  OV/UV  alerts  in the Voltage Measurements tab (Figure 15).

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13). Be  sure  to  set  the  supply  voltage  to  18.0V  for  this procedure.
- 2) Set the PCB resistor ladder DIP switches (SW1, SW2) to the ON position (closed). Verify that the P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  15) and  click  on  the Scan  Settings button  in  the Set -tings group  box  to  open  the Scan  Settings panel (Figure 16). First click the Cell Enable All , Unipolar All  (Cell) , BLOCK EN checkboxes,  and  select 64x OVSAMPL from  the  OVSAMPL  a  drop-down  list  at the bottom of the panel, and then click the Confirm Settings button.
- 4) Select  the Voltage  Measurements tab  (Figure  15) and  in  the  upper  left  corner,  set  the Scan Type to ADC  and  Comparator  Acquisition ,  and  then  select the Scan Continuously checkbox. Observe that cell voltage levels are approximately equal in value. At this point, the MAX17853 is continuously reading the voltages across each of the 2kΩ resistors in the resistor ladder. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resis -tors in the ladder.
- 5) Select  the Thresholds tab  (Figure  18)  and  set the comparator and cell voltage threshold. Set OVTHSETREG to  1.41V, UVTHSETREG to  1.2V, COMPOVTHREG to  1.5V,  and COMPUVTHREG to 1.1V  (threshold  values  automatically  adjust  to  the closest hex value).

│

## MAX17853 Evaluation Kit

- 6) In  the Thresholds tab,  click  the Write Changes to All Devices radio button, and then open the Alert Enables panel (Figure 19) by clicking the Alert Enables button. Click the Set All button for ALRTOVEN and ALRTUVEN to  command  the  MAX17853  to  check the  OV/UV  condition.  In  the Alert  Enables panel, the user can mask OV/UV faults. The user can also mask  faults  from  generating  an  alert  output  activation by unchecking the appropriate checkboxes in the ALRTIRQEN group box. Finally, click the Update All Devices button at the bottom and close the panel.
- 7) Select the Voltage Measurements tab  (Figure  15). Verify that voltage measurements are approximately 1.28V and no OV/UV voltage measurements or OV/ UV comparator measurements are indicated.  Slowly  increase  the  power-supply  voltage  from  18.0V  to 22.0V. Verify that OV voltage and comparator measurements are detected at the user-programmed OV thresholds by comparing the triangular indicator with the Legend on  the  lower  right  side  of  the  window. The UV voltage and comparator measurements can be verified similarly by decreasing the supply voltage from 18.0V to 14.0V.

In addition to the oversampling filter, the MAX17853 has implemented an IIR noise filter to further reduce noise in the conversion result. Take the following steps in the GUI to become familiar with the IIR filter:

- 1) From the Voltage Measurements tab (Figure 15), in the IIR Filter group box, click on the IIR Filter Enable checkbox.
- 2) Select the desired filter from the Coefficient Selec -tion drop-down list (0.125 for maximum filter effect).
- 3) To  see  the  dynamic  effect  of  the  IIR  filter,  set  the OVSAMPL drop-down  list  in  the Scan  Settings panel (Figure 16) to Single Acquisition , and click the Confirm Settings button.
- 4) Back in the Voltage Measurements tab,  in  the IIR Filter group box, click  the RDFILT checkbox in  the Coefficient  Selection group  box  to  command  the GUI to read the IIR filter  output.  Notice  numerically the noise reduction in voltage readings.

## Evaluates: MAX17853

## Auxiliary General-Purpose Input/Output Port

The  following  procedure  demonstrates  the  use  of  the auxiliary  (AUX)  channels  as  a  general-purpose  input/ output (GPIO) port.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  13) and click on the Scan Settings button in the Settings group box to open the Scan Settings panel (Figure 16).  Click  the GPIO Enable All button  and  set  the GPIODIR to Output. Set the GPIODRV to the desired high or low level.
- 4) Click the Confirm Settings button  at  the  bottom  of the panel and then verify with an oscilloscope that the digital voltage is present at the GP/AUXn test pin on the PCB.
- 5) To command the GPIO as an input, on the Scan Set -tings panel, click the GPIO Enable All button and set the GPIODIR as Input.
- 6) The EV kit contains a 10kΩ pullup resistor on each of the GP/AUXn pins. To pull up each of the GP/AUXn pins, select the Read/Write tab (Figure 22). Using the Read All group box, read register 0x62. Set THRMMODE bit 9 and bit 10 (e.g., if register 0x62 is 0x0000, use the Write All box and send 0x0600). Setting the THRMMODE bit activates the THRM pin on the device (pin no. 29). The EV kit terminates THRM to the 10kΩ pullup resistors.
- 7) Populate  the  THERMx  jumpers  in  the AUX  INPUT/ OUTPUT/ADC block on the PCB (see Figure 4) and verify  the  logical  state  of  the CP/AUX0-CP/AUX5 pins by reading register GPIOCFG (0x17). Verify the GPIORD bits are set to logic 1.

│

## MAX17853 Evaluation Kit

## AUX Absolute/Ratiometric Measurement

The software GUI and the MAX17853 EV kit are developed with  features  that  allow  the  user  to  evaluate  the  performance of the AUX channels when configured as analog absolute  measurements  or  analog  ratiometric  measurements. The  following  procedure  shows  how  to  configure the AUXIN0-AUXIN5 pins for analog measurement.

## Key Points to Consider:

- AUX GPIO can be used in mixed-mode applications
- Each port can be independently configured for GPIO, AUX ratiometric, or AUX absolute measurement

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify that P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  15) and click on the Scan Settings button in the Settings group box to open the Scan Settings panel (Figure 16). Click the AUX Enable All button to enable the AUX  channels  as  analog.  Set  the AUXREFSEL to Absolute when absolute measurements are desired or set to Ratiometric when ratiometric measurements are  to  be  evaluated.  Temperature  measurements using  NTC  are  generally  ratiometric  for  improved temperature accuracy.
- 4) Other conversion characteristics available to the user in  the Scan Settings panel are OVSAMPL , FOSR , SCANMODE and BLOCK EN . From the OVSAMPL drop-down list, select 64x Oversampling . Click Con -firm Settings at the bottom of the window.
- 5) From the hardware perspective, it is necessary to verify the THRM switch is active during conversion (bits 9 and 10 of register 0x62). Setting the THRMMODE bit to Automatic activates the THRM switch only during conversion. In Manual On mode, the THRM switch is always active. With the filter on, the MAX17853 EV kit AUXIN0-AUXIN5 pins, Manual mode is recommended.  With  the THRM output active, V AA  reference is applied to each AUXn 10kΩ pullup resistor. Verify that PCB THERMn jumpers are installed.
- 6) Back  on  the Voltage  Measurements tab,  click  the Scan  Continuously checkbox.  Observe  from  the GP/AUX0-GP/AUX5 test  points (Figure 4) that AUX levels  are  approximately  3.3V  in  value.  Terminate  a 10kΩ NTC thermistor to each of the GPIO\_AUXn con -nectors and the conversion values update accordingly.

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
- 4) Back in the Voltage Measurements tab, click on the Scan Continuously checkbox. Observe that cell voltage levels are approximately equal in value. At this point, the MAX17853 is continuously reading the voltage across each of the 2kΩ resistors in the resistor ladder. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder.
- 5) Select the Alerts/Status tab (Figure 20) and click the Clear  All  Device  Alerts button.  The  INTRFC  alert is  set  when  the  user  tries  to  make  changes  to  the Balancing Expiration Time when a timer is established  for  a  cell-balance  mode  or  other  command faults. The user must select Cell Balancing Disabled in the Balance Switch Control group box (Figure 21) to update the Balancing Expiration Time .

│

## MAX17853 Evaluation Kit

- 6) Select the Cell Balance tab (Figure 21) and enable odd balance switches by clicking the checkboxes in the Balance Switch Enable group box.
- 7) Set the Balancing Expiration Time in  row 1 to the desired timer value (e.g., 100 or a value up to 1023).
- 8) In  the Balance  Switch  Control group  box,  select Manual Cell Balancing by Second from the Mode drop-down list. Observe in the lower left corner of the Cell  Balance tab  that  the Counter box  increments and the Timer is activated.
- 9) Select  the Voltage  Measurements tab  again  and observe the change in resistor stack cell voltage due to the activation of the odd-cell balance switches.
- 10)  In the Cell Balance tab, select the Mode drop-down and  click  on Cell  Balancing  Disabled to  disable manual cell balancing.

The  same  procedure  can  be  used  to  verify  functionality of the  even-cell  balance  switches.  In  manual cell-balancing  mode, the cell-balance switch can be set to automatically disable when a conversion is executed. To  enable  the  automatic  cell-balance  switch-disable feature,  set AUTOBALSWDIS bit  12  in  the  SCANCTRL register  (0x66)  to  logic  1.  When  using  the  auto  cellbalance switch-disable feature, set the time delay before the ADC conversion value:

- 1) Use the Read/Write tab (Figure 22) to read register 0x66.
- 2) Rewrite  the  SCANCTRL  register  (0x66)  with  bit  12 set.
- 3) Program  the  BALSWDLY  register  (0x63)  with  the necessary CELLDLY delay  time  from  when  a  balance switch opens to when the MAX17853 performs the  conversion.  Setting  the  BALSWDLY  register  to 0x0F0F  sets  the  cell  and  switch  delay  to  1.44ms. Alternatively,  the  parameters  can  be  programmed using the General Configuration tab (Figure 14).

Detailed information on manual cell-balancing features is available in the MAX17853 IC data sheet.

## Automated Cell Balancing with CBUVTHR and CBTIMER (Host Sleep Mode)

This procedure details a simple process for using the GUI to set up and run the Automated Cell Balance with shutoff threshold set by the programmable CBUVTHR register.

## Key Points to Consider:

- User must set Mode in the Balance Switch Control group box to Cell Balancing Disabled prior to updating the parameters in the Cell Balance tab (Figure 21)
- Enable  or  disable  cell-balance  parameters  in Auto Cell Balancing mode triggers an INTRFC alert in the Alerts/Status tab (Figure 20)
- User  must  uncheck  the Scan  Continuously checkbox in the Cell Measurement (Figure 15) to prevent an  INTRFC  alert  from  being  set  when Auto  Cell Balancing mode is activated
- In Auto Cell Balancin g mode, the IC state machine prevents  adjacent  cell-balance  switches  from  being activated simultaneously
- The Duty Cycle slidebar  is  not  functional  in  Manual Cell Balancing
- The  UV  threshold  can  be  used  independently  or  in conjunction  with  cell  balancing  timer(s)  (CBEXP1  or CBEXPn)

## Evaluates: MAX17853

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab.
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify P+B14 and B0P- jumpers are installed.
- 3) Select  the Voltage  Measurements tab  (Figure  15) and click on the Scan Settings button in the Settings group box to open the Scan Settings panel (Figure 16). Select Cell Enable All and Unipolar All (Cell) . Select 32x Oversampling from the OVSAMPL drop down then click Confirm Settings at  the  bottom of the window.
- 4) In  the Voltage  Measurements tab,  set  the Scan Continuously button. Observe that cell voltage levels  are  approximately  equal  in  value. At  this  point, the MAX17853 is continuously reading the voltages across each of the 2kΩ resistors in the resistor lad -der.  Increasing  the  power-supply  voltage  increases the voltage across each of the 2kΩ resistors in the ladder. With the power supply set to 18.0V, each resistor  ladder  simulated  cell  voltage  reads  approximately 1.286V.
- 5) The  INTRFC  alert  is  generated  when  an  improper communication  action  is  taken.  Select  the Alerts/ Status tab (Figure 20) and click the Clear All Device Alerts button to clear the INTRFC alert and all other alerts in the system.
- 6) Select the Cell Balance tab (Figure 21) and enable ALL balance switches by clicking the 14 checkboxes in the Balance Switch Enable group box.

│

## MAX17853 Evaluation Kit

- 7) Set the Balancing Expiration Time in rows 1-14 to the  desired  timer  value  for  each  cell  balance  (e.g., 100 or a value up to 1023).
- 8) In the Under Voltage Threshold group box, if using a  benchtop  power  supply,  select  the User-Defined CBUVTHR from  the  drop-down  list  and  set  the UV Threshold to  1.5V.  If  using  a  battery  pack,  set  the voltage to the desired undervoltage level.
- 9) In  the Balance  Switch  Control group  box,  select ADC/CAL and CBUVTHR Check Enabled from the Measure Enable drop-down list.
- 10)  In Auto  Cell  Balance mode,  the  state  machine enables even and odd switches inversely. Using the slidebar,  set  the Duty Cycle to  100%  to  effectively control a 50% duty cycle for each switch.
- 11)  Use  the Mode drop-down  and  select  one  of  the Automated  Cell  Balancing modes  to  activate  the Balancing Expiration Timer . Immediately the CBUVTHR  Check  Status buttons  illuminates  red (CBUVTHR  set  to  1.5V  in  step  8  is  greater  than cell-voltage measurement) and the driver will shut off.
- 12)  Observe in the lower left corner of the Cell Balance tab,  the Counter box  increments  and Timer box count continues until the timer is expired.
- 13)  From the Mode drop-down list in the Cell Balance tab,  click  on Cell  Balancing  Disabled to  disable automated cell balancing.

## Automated Cell Balancing with MINCELL Threshold (Host Sleep Mode)

This procedure details the process for using the GUI to set  up  and  run  the  automated  cell  balance  with  shutoff threshold set by the cell with the minimum cell voltage.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start  (Single  UART) section. HelloAll  Successful and UART device ready response must be displayed in the Event Log on the Initialization tab (Figure 13).
- 2) Set  the  PCB  resistor  ladder  DIP  switches  (SW1, SW2) to the ON position (closed). Verify P+B14 and B0P- jumpers are installed.
- 3) Select the Voltage  Measurements tab (Figure 15)  and  click  on  the Scan  Settings button  in  the Settings group box to open the Scan Settings panel (Figure 16). Click the Cell Enable All and Unipolar All (Cell) buttons. Select 64x Oversampling from the OVSAMPL drop-down list, and then click the Confirm Settings button at the bottom of the window.
- 4) In the Voltage Measurements tab, click on the Scan Continuously checkbox.  Observe  that  cell-voltage levels are approximately equal in value. At this point, the  MAX17853  is  continuously  reading  the  voltages across  each  of  the  2kΩ  resistors  in  the  resistor  lad -der. Increasing the power-supply voltage increases the voltage across each of the 2kΩ resistors in the ladder. With the power supply set to 24.0V each resistor ladder simulated cell voltage will read approximately 1.72V.
- 5) The  INTRFC  alert  is  generated  when  an  improper communication  action  is  taken.  Select  the Alerts/ Status tab (Figure 20) and click the Clear All Device Alerts button to clear the INTRFC alert and all other alerts in the system.
- 6) Select the Cell Balance tab (Figure 21) and enable ALL balance switches by clicking the 14 checkboxes in  the Balance  Switch  Enable group  box.  Set  the Balancing  Expiration  Timer in  rows  1-14  to  the desired timer value for each cell balance (e.g., 100 or a value up to 1023).
- 7) In  the Under Voltage Threshold group  box,  select MINCELL-Defined  CBUVTHR from  the  drop-down list.
- 8) In  the Balance Switch Control group  box,  set  the Measure Enable drop-down to ADC/CAL and CBU -VTHR Check Enabled .
- 9) In Auto  Cell  Balance  Mode ,  the  state  machine enables even and odd switches inversely. Using the Duty Cycle slidebar, set to 100% to effectively control a 50% duty cycle for each switch.
- 10)  Use the Mode drop-down list and select any one of the Automated Cell Balancing modes to activate the Balancing Expiration Time . Immediately, the CBUVTHR register becomes loaded with the lowest cell voltage, setting the UV Threshold .  Due to the PCB resistor ladder cell emulation, some of the CBUVTHR Status buttons will illuminate red as the cell-balance switches  (SWn)  are  activated.  Lowering  the  powersupply voltage illuminates all CBUVTHR  Check Status indicators.
- 11)  Observe in the lower left corner of the Cell Balance tab, that the Counter box increments and Timer box counts continue until the timer is expired.
- 12)  Select the Alerts/Status tab and observe that CBDONE is activated. Click on the Clear All Device Alerts button.
- 13)  Select the Mode drop-down list in the Cell Balance tab and click on Cell Balancing Disabled to disable automated cell balancing.

Evaluates: MAX17853

│

## MAX17853 Evaluation Kit

The  graph  in  Figure  28  displays  an  actual  automated cell-balance cycle on a 14-cell ICR18650-26 battery pack using  MINCELL  as  the  shutoff  mechanism. As  seen  in the graph, each cell continues to discharge through the MAX17853 cell-balance switch until the MINCELL threshold is achieved.

## Flexible Battery-Pack Connectivity

The flexible battery pack feature allows the user to optimize the battery pack system while maintaining hardware consistency across the pack's battery modules with variable  number  of  cells.  The  following  procedure  demonstrates the default state of flexible battery pack and the proper activation.

## Key Points to Consider:

- The FlexPack feature is considered partially enabled at power-up and must be fully enabled when the less than 14 cells are terminated to the MAX17853.
- When fully enabled, FlexPack uses internal MOSFETs to route power from the highest voltage switches input pin (SW8-SW14) to the DCIN pin.
- Programming FlexPack TOPCELL to a lower number cell than terminated to the device places a low ohmic short  between  the  higher  SWn  input  and  the  lower programmed TOPCELL SWn input. Caution must be exercised.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section, with a few exceptions.
- a) Connect power to both EV kits through terminal BAT12 to represent a 12-cell pack.
- b) For  both  EV  kits,  set  the  PCB  Resistor  Ladder DIP Switches (SW1) to the ON position (closed). Close ladder DIP switches 1-5 on SW2.
- c) Verify  B0P-  jumper  is  installed.  Remove  the P+B14 jumper.
- 2) Apply 18.0V power to the system, Initialize with Single UART Interface. Use Wakeup and Hello All to establish communication. Verify that HelloAll Successful and UART device ready response is displayed in the Event Log on the Initialization tab.
- 3) Select the Voltage  Measurements tab (Figure 15)  and  click  on  the Scan  Settings button  in  the Settings group box to open the Scan Settings panel (Figure 16). Select Cell Enable for  Cell  1-Cell  12.  Click Confirm Settings at the bottom of the window.
- 4) In  the Voltage  Measurements tab,  click  on  the Scan Continuously checkbox. Observe that the cell voltage  levels  are  approximately  equal  in  value. At this point, the MAX17853 is continuously reading the differential  voltages  across  the  Cell  1-Cell  12  2kΩ emulation resistors. Increasing the power-supply voltage increases the voltage across each of the 2kΩ re -sistors in the ladder.

Figure 28. Automated Cell Balance

<!-- image -->

Evaluates: MAX17853

│

## MAX17853 Evaluation Kit

- 5) To  fully  activate  the  FlexPack,  select  the General Configuration tab (Figure 14). Set TOPCELL to the corresponding hex number of cells. Set TOPCELL to 0xC.
- 6) Generally, TOPBLOCK is programmed the same as TOPCELL unless  bus  bar  measurement is desired. Refer to the MAX17853 IC data sheet for details on TOPBLOCK feature and operation. For the FlexPack exercise, Set TOPBLOCK to 0xC.
- 7) Programming TOPCELL to battery cell 12 terminates DCIN pin to battery cell 12. To verify operation, the user  can  connect  a  voltmeter  between  IC  pin  55 (SW12) and test point DCIN. Set TOPCELL to  hex 0xF  to  deactivate  and  observe  the  forward  biased diode  (~820mV)  between  IC  pin  55  (SW12)  and

## Table 4. UART-to-SPI Hardware Change

| ITEM                       | REF_DES            | COMPONENT      | COMMENTS                                                                | POPULATE   |
|----------------------------|--------------------|----------------|-------------------------------------------------------------------------|------------|
| Schottky diodes (POWER123) | D26, D28, D30, D31 | DFLS1100-7     | Remove UART components from SPI signals.                                |            |
| 10kΩ ±1% resistor (0603)   | R10                | CRCW060310K0FK | Populate pulldown on UARTSEL.                                           |            |
| 0Ω resistor (0603)         | R13                | RC1608J000CS   | Apply VAA to level shifter.                                             |            |
| 22Ω ±5% resistors          | R5-R8              | CPCW060322R0FK | Terminate level-shifted MINIQUSB+ SPI signals to the MAX17853 SPI port. |            |
| 10kΩ ±1% resistors (0603)  | R9                 | CRCW060310K0FK | Remove pullup from UARTSEL.                                             |            |
| 0Ω resistor (0603)         | R141               | RC1608J000CS   | Terminate ALERTOUT to level shifter.                                    |            |
| 49.9Ω ±1% resistors (0603) | R157-R160          | CRCW080549R9FK | Remove unnecessary components from SPI signals.                         |            |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17853EVKIT# | EV kit |

#Denotes RoHS compliant.

Evaluates: MAX17853

DCIN.  Set TOPCELL to  hex  0xC  to  activate  the internal cell 12-FlexPack MOSFET and observe the internal MOSFET forward voltage. (~100mV).

The MAX17853 EV kit is provides the user with an introduction  to  the  features  and  functions  of  the  MAX17853 device. Refer to the MAX17853 IC data sheet for detailed explanations  of  the  product  features,  register  set,  and modes of operation.

## MAX17853 UART-to-SPI Hardware

To  communicate  directly  to  the  IC  through  the  SPI interface,  populate  the  components  (see  Table  4)  and insert the MINIQUSB+ to SPI converter directly into the MAX17853 EV kit.

│

## MAX17853 EV Kit Bill of Materials

| REF_DES                                                                                                                                      | QTY   | VALUE          | DESCRIPTION                                                                                                               | MFG PART #                                                | MFG                               |
|----------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|-----------------------------------|
| ALARM_IN_UP, ALARM_OUT_LP, GPIO_AUX0-GPIO_AUX5, RXLP_CONN, RXUP_CONN, TXLP_CONN, TXUP_CONN                                                   | 12    | 502584-0270    | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                                                    | 502584-0270                                               | MOLEX                             |
| ALERTIN, ALERTIN_P, ALERTOUT, CPN, CPP, DCIN, HV, RXLN, RXLP, RXP1, RXP2, RXUN, RXUP, TXLN, TXLP, TXP1, TXP2, TXUN, TXUP, UARTSEL, VAA, VBLK | 22    | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    | 5000                                                      | KEYSTONE                          |
| ALERTIN_N, GP/AUX0-GP/AUX5, RXN1, RXN2, TXN1, TXN2                                                                                           | 11    | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      | 5001                                                      | KEYSTONE                          |
| AUXGND, OPTO_OUT, SHDNL, THERM, VDDL1, VDDL2/3                                                                                               | 6     | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5004                                                      | KEYSTONE                          |
| B0P-, B1B0, B2B1, B3B2, B4B3, B5B4, B6B5, B7B6, B8B7, B9B8, B10B9, B11B10, B12B11, B13B12, B14B13, P+B14                                     | 16    | PEC02SAAN      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS;                                                     | PEC02SAAN                                                 | SULLINS ELECTRONICS CORP.         |
| BAT0-BAT14, GND_A, GND_A1- GND_A3, PACK+, PACK-                                                                                              | 21    | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                  | 9020 BUSS                                                 | WEICO WIRE                        |
| BUMP1-BUMP6                                                                                                                                  | 6     | SJ-5003(BLACK) | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                             | SJ-5003(BLACK)                                            | 3M ELECTRONIC SOLUTIONS DIVISION  |
| C1                                                                                                                                           | 1     | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                               | CC0603KRX7R0BB104                                         | YAGEO                             |
| C2                                                                                                                                           | 1     | 1000PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                        | GCM155R72A102KA37                                         | MURATA                            |
| C3, C85                                                                                                                                      | 2     | 1.0UF          | CAPACITOR; SMT (0603); CERAMIC; 1UF; 6.3V; TOL = 10%; MODEL = GRMSERIES; TG = -55°C TO +125°C; TC = X7R;                  | GRM188R70J105KA01 CL10B105KQ8NNNC                         | MURATA SAMSUNG ELECTRONICS        |
| C4, C5, C7                                                                                                                                   | 3     | 0.47UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                         | GCM188R71C474KA55                                         | TDK                               |
| C6                                                                                                                                           | 1     | 4.7UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                          | CGA4J1X7R1E475K125AC                                      | TDK                               |
| C8-C11 (Do Not Install)                                                                                                                      | DNI   | 0.01UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R                      | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103 | NIC COMPONENTS CORP. MURATA YAGEO |
| C12, C13 ( Do Not Install )                                                                                                                  | 0     | 0.01UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R                      | NMC0402X7R103K16TRP GRM155R71C103KA01 CC0402KRX7R7BB103   | NIC COMPONENTS CORP. MURATA YAGEO |
| C14                                                                                                                                          | 1     | 100PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 25V; TOL = 2%; MODEL = GRMSERIES; TG = -55°C TO +125°C; TC = C0G              | GRM1555C1E101GA01                                         | MURATA                            |
| C15                                                                                                                                          | 1     | 3900PF         | CAP;SMT (0603);3900PF;10%;50V;C0G;CERAMIC CHIP                                                                            | C1608C0G1H392K080AA                                       | TDK                               |
| C16 ( Do Not Install )                                                                                                                       | DNI   | 0.47UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                         | GCM188R71C474KA55                                         | TDK                               |
| C17 ( Do Not Install )                                                                                                                       | DNI   | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                               | GRM188R71C103KA01 ECJ-1VB1C10 CL10B103KO8NNN              | MURATA PANASONIC SAMSUNG          |
| C18                                                                                                                                          | 1     | 2.2UF          | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL = 10%; MODEL = GRMSERIES; TG = -55°C to +125°C; TC = X7R            | GRM32ER72A225KA35 CGA6N3X7R2A225K230                      | MURATA TDK                        |

│

## MAX17853 EV Kit Bill of Materials (continued)

| REF_DES                                | QTY   | VALUE               | DESCRIPTION                                                                                                          | MFG PART #                                         | MFG                      |
|----------------------------------------|-------|---------------------|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|--------------------------|
| C19 ( Do Not Install )                 | DNI   | 2.2UF               | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL = 10%; MODEL = GRMSERIES; TG = -55°C to +125°C; TC = X7R       | GRM32ER72A225KA35 CGA6N3X7R2A225K230               | MURATA TDK               |
| C20, C22-C33, C84                      | 14    | 0.1UF               | CAPACITOR; SMT (1206); CERAMIC CHIP; 0.1UF; 100V; TOL = 10%; MODEL = CGA SERIES; TG = -55°C TO +150°C; TC = X8R AUTO | CGA5H2X8R2A104K115 C3216X8R2A104K115AA             | TDK TDK                  |
| C21                                    | 1     | 0.47UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.47UF; 100V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R                | GRM21BR72A474KA73                                  | MURATA                   |
| C34-C47                                | 14    | 3900PF              | CAPACITOR; SMT (1206); CERAMIC CHIP; 3900PF; 100V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                          | GRM319R72A392JA01                                  | MURATA                   |
| C48-C61 ( Do Not Install )             | DNI   | 0.1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC=X7R           | C1608X7R1E104K080AA                                | TDK                      |
| C62-C75                                | 14    | 0.1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7R         | C1608X7R1E104K080AA                                | TDK                      |
| C76, C78, C79, C82 ( Do Not Install )  | DNI   | 15PF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                             | C0402C0G500-150JNP GRM1555C1H150JA01               | VENKEL LTD. MURATA       |
| C77, C80, C81, C83                     | 4     | 18PF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                             | C0402C180J5GAC GRM1555C1H180JA01 C1005C0G1H180J050 | KEMET MURATA TDK         |
| C86 ( Do Not Install )                 | DNI   | 0.01UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                          | GRM188R71C103KA01 ECJ-1VB1C10 CL10B103KO8NNN       | MURATA PANASONIC SAMSUNG |
| C87                                    | 1     | 39PF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 39PF; 100V; TOL = 10%; MODEL = C0G; TG = -55°C TO +125°C; TC = +/               | C0603C390K1GAC                                     | KEMET                    |
| C88                                    | 1     | 100PF               | CAPACITOR; SMT; 1206; CERAMIC; 100pF; 100V; 5%; C0G; -55°C to +125°C; 0 ± 30PPM/°C                                   | C1206C101J1GAC                                     | KEMET                    |
| C89-C92                                | 4     | 2200PF              | CAPACITOR; SMT (1206); CERAMIC CHIP; 2200PF; 630V; TOL = 5%; MODEL =; TG = -55°C TO +125°C; TC = C0G                 | CGA5H4C0G2J222J                                    | TDK                      |
| C93                                    | 1     | 15PF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 15PF; 100V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G; AUTO                      | GCM1885C2A150JA16                                  | MURATA                   |
| C104-C109                              | 6     | 0.01UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                          | GRM188R71C103KA01 ECJ-1VB1C10 CL10B103KO8NNN       | MURATA PANASONIC SAMSUNG |
| CM1, CM2 ( Do Not Install )            | DNI   | ACT45B-510-2P-TL003 | INDUCTOR; SMT (1812); WIREWOUND CHIP; 51UH; TOL = [+50%/-30%]; 0.2A                                                  | ACT45B-510-2P-TL003                                | TDK                      |
| CURRENTSENSE ( Do Not Install )        | DNI   | 502584-0270         | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                                               | 502584-0270                                        | MOLEX                    |
| D3-D8, D11-D14, D16, D18-D21, D24, D25 | 17    | 5V                  | DIODE; TVS; SMT (SOD-323); VRM = 5V; IPP = 25A                                                                       | SP4021-01FTG                                       | LITTELFUSE               |
| D9, D10                                | 2     | 3.3V                | DIODE; TVS; SMT (SOD-523); PIV = 3.3V; IF = 0.1A                                                                     | PESD3V3U1UB                                        | NXP                      |
| D15, D22, D23 ( Do Not Install )       | DNI   | 5V                  | DIODE; TVS; SMT (SOD-323); VRM = 5V; IPP = 25A                                                                       | SP4021-01FTG                                       | LITTELFUSE               |
| D26, D28, D30, D31                     | 4     | DFLS1100-7          | DIODE; SCHOTTKY; SMT; PIV = 100V; IF = 1A                                                                            | DFLS1100-7                                         | DIODES INCORPORATED      |
| D29, D32-D34                           | 4     | SESDONCAN1LT1G      | DIODE; TVS; SMT (SOT-23); VRM = 24V; IPP = 3A                                                                        | SESDONCAN1LT1G                                     | ON SEMICONDUCTOR         |
| J1-J4 ( Do Not Install )               | DNI   | TSW-116-07-G-S      | CONNECTOR; MALE; SMT; 0.25INCH SQ POST HEADER; STRAIGHT; 16PINS                                                      | TSW-116-07-G-S                                     | SAMTEC                   |
| J5                                     | 1     | PEC12DAAN           | CONNECTOR; MALE; THROUGH HOLE; .1IN CC; BREAKAWAY HEADER; STRAIGHT; 24PINS                                           | PEC12DAAN                                          | SULLINS ELECTRONICS CORP |

│

## MAX17853 EV Kit Bill of Materials (continued)

| REF_DES                                                           | QTY   | VALUE                      | DESCRIPTION                                                                                             | MFG PART #                                   | MFG                                 |
|-------------------------------------------------------------------|-------|----------------------------|---------------------------------------------------------------------------------------------------------|----------------------------------------------|-------------------------------------|
| J6                                                                | 1     | PBC15DAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 30PINS                                              | PBC15DAAN                                    | SULLINS ELECTRONICS CORP.           |
| J7                                                                | 1     | 5031541890                 | CONNECTOR; FEMALE; SMT; 1.5MM PITCH CLIK-MATE; WIRE-TO-BOARD PCB RECEPTACLE; DUAL ROW; STRAIGHT; 18PINS | 5031541890                                   | MOLEX                               |
| J8 ( Do Not Install )                                             | DNI   | SSW-104-01-T-S             | CONNECTOR; MALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 4PINS                                 | SSW-104-01-T-S                               | SAMTEC                              |
| L1-L4                                                             | 4     | 600                        | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL = ± 25%; 0.5A                                              | MMZ2012S601A                                 | TDK                                 |
| MINIQ1                                                            | 1     | PEC08DAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65°C TO +125°C                             | PEC08DAAN                                    | SULLINS ELECTRONICS CORP.           |
| MINIQ2                                                            | 1     | SSW-108-01-T-S             | CONNECTOR; FEMALE; THROUGH-HOLE 0.025in POST SOCKET; STRAIGHT; 8PINS                                    | SSW-108-01-T-S                               | SAMTEC                              |
| MISC1                                                             | 1     | N/A                        | WIRE; RED; 19/36; ALPHA WIRE COMPANY; HOOK-UP; MIL-W-16878E (TYPE E); AWG24                             | 2844/19 RD001                                | ALPHA WIRE COMPANY                  |
| MISC1                                                             | 1     | CLIK-MATE_ 2-PIN LOOP-BACK | CABLE ASSEMBLY; TWOWIRE CLIK-MATE 2-WIRE LOOP CABLE; WITH WIRE STRIPPER AND CRIMP TOOL;                 | CLIK-MATE_ 2-PIN_LOOP-BACK                   | MAXIM                               |
| MISC1-MISC3                                                       | 3     | N/A                        | WIRE; BLACK; 19/36; ALPHA WIRE COMPANY; HOOK-UP; MIL-W-16878E (TYPE E); AWG24                           | 2844/19 BK001                                | ALPHA WIRE COMPANY                  |
| MISC2, MISC3                                                      | 2     | N/A                        | WIRE; BLUE; 19/36; ALPHA WIRE COMPANY; HOOK-UP; MIL- W-16878E (TYPE E); AWG24                           | 2844/19 BL001                                | ALPHA WIRE COMPANY                  |
| MISC2, MISC3                                                      | 2     | CLIK-MATE CABLE_2-WIRE     | CABLE ASSEMBLY; TWOWIRE CLIK-MATE CROSSOVER CABLE; WITH WIRE STRIPPER AND CRIMP TOOL;                   | CLIK-MATE- CABLE_2-WIRE                      | MAXIM                               |
| MISC1-MISC3                                                       | 6     | N/A                        | CONNECTOR; FEMALE; WIREMOUNT; CLIK-MATE WIRE-TO-BOARD HOUSING; SINGLE ROW; POSITIVE LOCK 2PINS          | 5025780200                                   | MOLEX                               |
| MISC1-MISC3                                                       | 12    | N/A                        | CONNECTOR; FEMALE; WIRE-TO-BOARD CRIMP TERMINAL; WIREMOUNT; 1PIN                                        | 5025790000                                   | MOLEX                               |
| Q1, Q2                                                            | 2     | BC857BS-7-F                | TRAN; PNP; SOT-363; PD-(0.2W); I-(-0.1A); V-(-45V)                                                      | BC857BS-7-F                                  | DIODES INCORPORATED                 |
| R1-R4, R26, R143, R148 ( Do Not Install )                         | DNI   | 0                          | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                     | RC1608J000CS                                 | SAMSUNG ELECTRONICS                 |
| R9, R114, R115, R122-R128, R131-R134, R146, R147, R150-R152, R154 | 20    | 10K                        | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                      | CRCW060310K0FK ERJ-3EKF1002                  | VISHAY DALE PANASONIC               |
| R5-R8 ( Do Not Install )                                          | DNI   | 22                         | RESISTOR; 0603; 22 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                    | CRCW060322R0FK                               | VISHAY DALE                         |
| R5-R8, R11, R13-R16, R28, R136, R185, R186                        | 13    | 0                          | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                     | RC1608J000CS CR0603-J/-000ELF RC0603JR-070RL | SAMSUNG ELECTRONICS BOURNS YAGEO PH |
| R10, R142 ( Do Not Install )                                      | DNI   | 10K                        | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                      | CRCW060310K0FK ERJ-3EKF1002                  | VISHAY DALE PANASONIC               |
| R12                                                               | 1     | 100K                       | RESISTOR; 0603; 100K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                   | ERJ-3EKF1003                                 | PANASONIC                           |
| R17                                                               | 1     | 100                        | RESISTOR; 1206; 100 Ω ; 1%; 100PPM; 0.5W; THIN FILM                                                     | RNCP1206FTD100R                              | STACKPOLE ELECTRONICS INC           |
| R18                                                               | 1     | 1.02K                      | RESISTOR; 0603; 1.02K Ω ; 0.1%; 25PPM; 1W; METAL FILM                                                   | ERA-3AEB1021                                 | PANASONIC                           |
| R19                                                               | 1     | 10                         | RESISTOR; 0603; 10 Ω ; 1%; 200PPM; 0.20W; THICK FILM                                                    | ERJ-P03F10R0V                                | PANASONIC                           |

│

## MAX17853 EV Kit Bill of Materials (continued)

| REF_DES                                                 | QTY   | VALUE          | DESCRIPTION                                                                                          | MFG PART #                   | MFG                   |
|---------------------------------------------------------|-------|----------------|------------------------------------------------------------------------------------------------------|------------------------------|-----------------------|
| R20, R27, R183, R184                                    | 4     | 0              | RESISTOR; 0805; 0 Ω ; 5%; JUMPER; 0.125W; THICK FILM                                                 | RC0805JR-070RL               | YAGEO PHYCOMP         |
| R21, R25, R29, R33, R35-R74, R77                        | 45    | 22             | RES; SMT (1210); 22; 1%; ± 100PPM/DEGC; 0.5W                                                         | ERJ-14NF22R0                 | PANASONIC             |
| R22, R110, R155, R161, R168, R169                       | 6     | 100K           | RESISTOR; 0603; 100K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                               | ERJ-3GEYJ104V                | PANASONIC             |
| R23, R24, R30, R31, R141, R144, R145 ( Do Not Install ) | DNI   | 0              | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                  | RC1608J000CS                 | SAMSUNG ELECTRONICS   |
| R32, R34 ( Do Not Install )                             | DNI   | 0              | RESISTOR; 0805; 0 Ω ; JUMPER; 0.125W; THICK FILM                                                     | CRCW08050000ZS               | DIGI-KEY              |
| R81-R95                                                 | 15    | 1K             | RESISTOR; 0603; 1K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                 | CR0603-FX-1001ELF            | BOURNS                |
| R96-R109                                                | 14    | 2K             | RESISTOR, 0603, 2K Ω , 1%, 100PPM, 0.10W, THICK FILM                                                 | CRCW06032K0FK ERJ-3EKF2001V  | VISHAY DALE PANASONIC |
| R111, R112                                              | 2     | 360            | RESISTOR; 0805; 360 Ω ; 1%; 100PPM; 0.125W; THICK FILM                                               | CRCW0805360RFK               | VISHAY DALE           |
| R113                                                    | 1     | 1K             | RESISTOR; 0603; 1K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                 | ERJ-3GEYJ102V                | PANASONIC             |
| R116-R121                                               | 6     | 1K             | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                    | CRCW06031K00FK ERJ-3EKF1001V | VISHAY DALE PANASONIC |
| R129, R130, R138, R140, R179-R182                       | 8     | 0              | RESISTOR; 1206; 0 Ω ; 0%; JUMPER; 0.25W; THICK FILM                                                  | CRCW12060000ZS ERJ-8GEY0R00V | VISHAY DALE PANASONIC |
| R137, R139 ( Do Not Install )                           | DNI   | 15K            | RESISTOR; 0603; 15K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                | ERJ-3GEYJ153V                | PANASONIC             |
| R157-R160                                               | 4     | 49.9           | RESISTOR; 0805; 49.9 Ω ; 1%; 100PPM; 0.125W; THICK FILM                                              | CRCW080549R9FK ERJ-6ENF49R9  | VISHAY DALE PANASONIC |
| R162, R164, R172, R173                                  | 4     | 1.5K           | RESISTOR; 1206; 1.5K Ω ; 1%; ± 100PPM; 1/4W; THICK FILM                                              | CRCW12061K50FK               | VISHAY DALE           |
| SHDNL_SEL                                               | 1     | FTS-103-01-L-S | CONNECTOR; MALE; THROUGH HOLE; MICRO LOW PROFILE TERMINAL STRIP; STRAIGHT; 3PINS                     | FTS-103-01-L-S               | SAMTEC                |
| SW1, SW2                                                | 2     | ADE0804        | SWITCH; SPST; DIP16; 24V; 0.1A; SLIDE ACTUATED PIANO-DIP; RCOIL= OHM; RINSULATION = Ω ; TYCO ELECTRO | ADE0804                      | TE CONNECTIVITY       |
| THERM1-THERM6                                           | 6     | " 3-644456-2"  | CONNECTOR, HEADER STRIP, TH, STR, 2PINS, 1 ROW                                                       | " 3-644456-2"                | TYCO                  |
| U1                                                      | 1     | MAX17853       | EVKIT PART-IC; MAX17853; LQFP64; PACKAGE OUTLINE: 21-0083                                            | MAX17853                     | MAXIM                 |
| U2                                                      | 1     | MAX3378EEUD+   | IC; TRANS; ± 15KV ESD-PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14             | MAX3378EEUD+                 | MAXIM                 |
| U3                                                      | 1     | AT24CS08-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; NSOIC8 150MIL                                      | AT24CS08-SSHM                | ATMEL                 |
| U4                                                      | 1     | MAX3390EEUD+   | IC; TRANS; 15KV ESD-PROTECTED; 1UA; 16MBPS; QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14               | MAX3390EEUD+                 | MAXIM                 |
| U5                                                      | 1     | TLP2770        | IC; PHOTO; 20MBPS LOW POWER PHOTOCOUPLER; WSOIC6                                                     | TLP2770                      | TOSHIBA               |
| -                                                       | 1     | -              | PCB: MAX1785X EVKIT                                                                                  | MAX17853EVKIT#               | MAXIM                 |

│

Evaluates: MAX17853

## MAX17853 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX17853

## MAX17853 EV Kit Schematics (continued)

<!-- image -->

## MAX17853 EV Kit Schematics (continued)

<!-- image -->

│

## MAX17853 EV Kit Schematics (continued)

<!-- image -->

│

## MAX17853 EV Kit PCB Layouts

MAX17853 EV-PCB Top Layer Silkscreen

<!-- image -->

Evaluates: MAX17853

│

## MAX17853 EV Kit PCB Layouts (continued)

MAX17853 EV-PCB Top Layer Metal

<!-- image -->

│

## MAX17853 EV Kit PCB Layouts (continued)

MAX17853 EV-PCB Layer Two Metal

<!-- image -->

│

## MAX17853 EV Kit PCB Layouts (continued)

MAX17853 EV-PCB Layer Three Metal

<!-- image -->

│

## MAX17853 EV Kit PCB Layouts (continued)

MAX17853EV-PCB Bottom Layer Metal

<!-- image -->

│

## MAX17853 EV Kit PCB Layouts (continued)

<!-- image -->

MAX17853EV-PCB Bottom Layer Silkscreen

Evaluates: MAX17853

│

## MAX17853 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17853