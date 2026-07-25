<!-- lastmod 2022-08-03 -->
## MAX35103 Evaluation Kit

## General Description

The  MAX35103  evaluation  kit  (EV  kit)  provides  the hardware  and  graphical  user  interface  (GUI)  software necessary  to  evaluate  the  MAX35103  time-to-digital converter  designed  for  ultrasonic  heat,  water,  and  gas meters. The EV kit includes a MAX35103EHJ+ installed, as well as the required USB-to-SPI interface needed to communicate with the IC. The USB-to-SPI master section of the EV kit, along with the EV kit software, provides a quick method to exercise the device's functionality.

The  EV  kit  can  be  powered  by  the  USB  to  simplify  an evaluation setup, but also comes equipped with banana jacks that enable an external supply, such as a battery, to power the system. Provided BNC connectors allow for quick connection to piezoelectric transducers housed in a spool body. The provided terminal-block connectors allow for easy connection to the two remote platinum RTDs.

Ordering Information appears at end of data sheet.

## MAX35103 EV Kit Photo

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

Evaluates: MAX35103

## Benefits and Features

- Easy Evaluation of the MAX35103
- Two Piezoelectric Transducers and Two RTD Connections Provided
- EV Kit Hardware Optionally USB Powered (USB Cable Included)
- USB HID Interface
- Windows XP ® - and Windows ®  7-Compatible Software
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- Circuit Board Including MAX35103EHJ+ and USB-to-SPI Circuitry
- Mini-USB Cable
- Four Shunt Jumpers
- Rubber Feet

## MAX35103 EV Kit Files

| FILE                      | DECRIPTION          |
|---------------------------|---------------------|
| MAX35103EVKitSoftware.exe | Application Program |

## Quick Start

## Required Equipment

Included:

- MAX35103	EV	kit	hardware
- Mini-USB	cable

Not included:

- Windows	XP	or	Windows	7	PC	with	USB	port
- Piezoelectric	 transducers	 mounted	 in	 a	 spool	 body (BNC connections) for time-of-flight measurements
- Platinum RTDs (bare wire-terminal block connections) for temperature measurements

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the install or EV kit software. Text in bold and under -lined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation running off the USB power:

- 1) Ensure that jumpers/shunts J4 and J8 are installed. Note: The GND plane and supply trace of the USBto-SPI  circuit  and  the  IC  circuit  are  not  connected. The GND jumper on J1 must be connected for proper communication  between  the  USB-to-SPI  and  the IC  under  all  power  configurations.  Under  the  USBonly  power  configuration,  the  J5  jumper  must  be connected.
- 2) Ensure  that  the  8-pole  DIP  switch  (S3)  is  seated properly in its socket and that all switches are in the on position.
- 3) Set the EV kit hardware on a nonconductive surface to  ensure  that  nothing  on  the  PCB  gets  shorted together.
- 4) Prior to starting the GUI, connect the EV kit hardware to a PC using the supplied mini-USB cable, or equivalent. The power LED (D20) should be green and the com LED (D2) should be red and slowly flash orange.
- 5) Windows  should  automatically  begin  installing  the necessary  device  driver.  The  USB  interface  of  the EV kit hardware is configured as an HID device and therefore  does  not  require  a  unique/custom  device driver.  Once  the  driver  installation  is  complete,  a Windows message appears near the System Icon menu, indicating that the hardware is ready to use. Do not attempt to run the GUI prior to this message. If  you  do,  then  you  must  close  the  application  and restart it once the driver installation is complete. On some versions of Windows, administrator privileges may be required to install the USB device.
- 6) Once  the  device  driver  installation  is  complete, download the latest version of the EV kit software, MAX35103EVKitSoftwareInstall.ZIP.  Save  the  EV kit software to a temporary folder.
- 7) Open the .ZIP file and double-click the .EXE file to run the  installer. A  message  box  stating The publisher could not be verified. Are you sure you want to run this software? may appear. If so, click Yes .
- 8) The  installer  GUI  appears.  Click Next and  then Install . Once complete, click Close .
- 9) Go to Start | All Programs . Look for the MAX35103EVKitSoftware  folder  and  click  on  the MAX35103EVKitSoftware.EXE file inside the folder.
- 10)  After the initial splash screen, when the GUI appears, the  text  in  the  right  field  of  the  status  strip  at  the bottom  of  the  GUI  window  should  display EV  Kit Hardware Connected and then a firmware version number.  The  com  LED  (D2)  on  the  EV  kit  board should turn green.

Evaluates: MAX35103

## Detailed Description of Software

## Software Startup

If the MAX35103 EV kit is connected when the software is  opened,  the  software  first  initializes  the  hardware  to communicate.  The  software  then  does  a  read  of  the device  and  updates  all  the  associated  control  fields displayed on the GUI. The GUI displays EV Kit Hardware Connection status in the right field of the status strip. If the EV kit is not connected on software startup, the GUI populates with default EV kit values. Once the EV kit is connected, the GUI executes the sequence above.

## ToolStrip Menu Bar

The ToolStrip menu bar is located at the top of the GUI window, as shown in Figure 1.

Figure 1. MAX35103 EV Kit GUI Sections (Showing Time Of Flight Tab)

<!-- image -->

## File Menu

The File menu item contains save, load, and exit options. To save the current GUI configuration, click Save Project As . This  saves  all  the  configuration  registers  and  RTC alarm values to an XML file. If a device is connected, this reads and saves data directly from the device; otherwise, it saves the configuration currently displayed on the GUI. Load Project updates the GUI with the values stored in the  selected  XML  file,  and  writes  the  configuration  and RTC alarm registers to the device.

Evaluates: MAX35103

## Send Device Command Menu

An SPI-based interface is used to access the features and memory of the IC using an op code/command structure. Several  of  these  commands  are  single-byte  execution op-code  commands  that  cause  the  device  to  execute various  routines.  The  general  execution  commands  are available  to  send  to  the  IC  from  the Send  Device Command menu.  To  send  an LDO  Timed , LDO  Off , LDO  On , Reset , Initialize , Calibrate ,  and Transfer Config to Flash command, simply click the appropriate selection  from  the  drop-down  menu.  When  the Send Device Command menu is selected and the drop-down menu  is  displayed,  a  read  of  the  Calibration  Results register is performed. The resulting data is displayed next to the Calibrate Command text in units of µs.

## Device Pins Menu

Several  pins  of  the  IC  are  configurable  or  can  be disabled. The Device Pins menu allows easy access to these configurations. A read of the appropriate registers is performed once the Device Pins menu is selected and the  currently  programmed configurations  are  noted  with a check next to the appropriate configuration. To change the configurations, simply click the desired selection from the drop-down menu.

## Read All Registers Button

The Read  All  Registers at  the  top  right  of  the  GUI window  (Figure  1)  is  used  to  read  all  the  required registers  of  the  IC  to  update  all  the  currently  displayed controls  and  fields  of  the  GUI.  This  action  also  occurs when changing tabs in the tab control. Clicking this button does not read the Interrupt Status register and therefore does not update the Interrupt Status group box.

## Status Log

The Status Log at the bottom left of the GUI (Figure 1) displays all the actions the GUI performs that are relevant to the user. To disable the log, uncheck the Enable checkbox. To clear  the Status Log ,  click  on  the  nearby Clear  Log button. The log is autocleared when it becomes too lengthy.

## Interrupt Status Display

The Interrupt Status group box in the bottom center of the GUI (Figure 1) reads the Interrupt Status register and displays the results in an easy-to-decipher table. A grey circle signifies the bit is not set, while a red circle indicates that the associated bit was set when the Interrupt Status register was read. Note: The bits in the Interrupt Status register  are  self-clearing  after  a  read.  The Interrupt Status group box is also updated during execution of the event timing modes when the interrupt pin goes active.

## Device Access Log

The Device Access Log group  box in the bottom right of the GUI (Figure 1) displays all the actions the GUI performs in relation to the IC. All SPI transactions between the host USB-to-SPI circuit and the IC are displayed here. To speed up writes to the Device Access Log and make it more readable, large SPI transactions are not logged by default. However, all SPI transactions including the larger ones can be shown, if desired. This is done by unchecking the nearby Small Access Only checkbox. To disable the  log,  uncheck  the Enable checkbox.  To  clear  the Device Access Log , click on the nearby Clear Log button. The log is autocleared when it becomes too lengthy.

## Status Strip

The Status  Strip is  located  at  the  bottom  of  the  GUI window (Figure 1). This  strip  is  broken  down  into  three sections.  The  first,  located  on  the  left,  is  an  overall system  status  primarily  used  to  display  if  the  GUI  is currently doing any kind of polling (automated timing) of the  IC.  This  helps  the  user  keep  track  of  which  polling routines  have  been  started,  allowing  them  to  stop  the running polling before moving on to evaluating other areas of  the  device.  The  middle  section  of  the Status  Strip displays  the  currently  running  EV  kit  software  version. The right section of the Status Strip displays whether the hardware (USB-to-SPI circuitry) is currently connected to, and communicating with, the GUI.

## Tab Control

The majority of the GUI consists of a tab control, where each  tab  contains  controls  relevant  to  various  blocks of  the  device.  The  tab  control  is  shown  in  Figure  1. All controls in these tabs, which can be interacted with by the user, attempt to immediately write the changed value to the IC. Likewise, these controls are updated upon a read of the device.

## Time Of Flight Tab

All the configurations required to set up and execute the time-of-flight measurements can be found in the Time Of Flight tab  (Figure  2).  The Time Of Flight tab  contains another tab control window located towards the bottom. This  secondary  tab  control  contains  two  informative graphics and data read from the IC.

To  begin  configuration  of  the  IC,  start  by  viewing  the Launch  &amp;  Timing  Graphic tab.  This  is  a  static  image of  the  timing  associated  with  the Launch  &amp;  Timing Config group box. Use this overview to assist in setting the associated controls in the Launch &amp; Timing Config group box.

## MAX35103 Evaluation Kit

Next,  select  the Receive  Wave  Config  Graphic tab. This graphic dynamically updates to provide some insight into how the configurations in the Receive Wave Config group box are currently set. The green line running horizontally across the graphic depicts the comparator offset trip points, but is static in amplitude, which fixes the location of the t1 wave for ease of use. The graphic contains a horizontal scrollbar located just below the graph's grid.

The Comparator Offsets group box is used to configure the comparator offsets in the upstream and downstream direction. The reported voltages in this group box are calculated based on the value input in the VCC spin box. To get accurate comparator offset voltages, the value in the VCC spin box must be accurate.

Once the time-of-flight configurations are complete, it is time to execute a time-of-flight command. To send a timeof-flight  command,  use  the OneShot buttons located  in the TOF Commands group  box.  Clicking  one  of  these OneShot buttons  sends  the  associated  command  to

the IC and then automatically reads the results from the device.  Select  the Result Data tab  from  the  secondary tab control. The Result Data tab reports the read results and calculates various other parameters. All the grey cells are values that are calculated in the GUI.

The number of samples used to calculate the averages and the standard deviation of a population can be adjusted using the input boxes provided. Once satisfied with the resulting data from a OneShot command, an automatic repetition feature is provided and can be enabled in the Command Repetition group box. Select which command to execute, the period of execution, and click Start. Once the Start button is clicked, the button's label changes to Stop and  the Status Strip indicates  that  an  automatic repetition  feature  is  enabled.  The  feature  runs  until  the Stop button is clicked. The command and reading of the resulting  data  is  only  executed  if  the  currently  selected main tab  is  either  the Time Of Flight or  the Data Log Graph tab.

Figure 2. Time Of Flight Tab

<!-- image -->

## MAX35103 Evaluation Kit

## Temperature Tab

All  the  configurations  required  to  set  up  and  execute temperature  measurements  are  located  in  the Temperature tab (Figure 3). To begin temperature configuration of the IC, start in the Temperature Configurations group box. The EV kit hardware is configured to have RTDs connected to Port T1 and Port T2 ,  with  a  reference connected to Port  T3 and Port  T4 .  All  calculations  in  the  result tables are based on this configuration. Select the desired configurations from the drop-down lists.

Once  the  temperature  configurations  are  complete,  it is  time  to  execute  a  temperature  command.  To  send  a temperature  command,  use  the Temperature button under  OneShot located  in  the Temperature Command group  box.  Clicking  the Temperature button  sends  the associated command to the IC and automatically reads the  results  from  the  device,  which  are  displayed  in  the Temperature  Time  Measurement  on  all  Ports  and Statistics group box. All the grey cells are values that are calculated in the GUI.

Evaluates: MAX35103

The number of samples used to calculate the averages and the standard deviation of a population are adjustable using the input boxes provided.

Use  the  raw  data  read  from  the  device  in  conjunction with  the  value  provided  for  the Reference  Resistance to determine the resistance of the associated RTD. Once the  resistance  is  known  and  displayed  in  the Time-toTemperature  Calculation  Data table,  a  temperature  is derived using the Callendar-Van Dusen equation and the standard  IEC  751  coefficient  values.  The Temperature tab  contains  two  informative  thermometer  graphics  that simply  display  the  calculated  data  from  the Time-toTemperature Calculation Data group box.

Once  satisfied  with  the  resulting  data  from  a OneShot command, an automatic repetition feature is provided and can be enabled in the Command Repetition group box. Select the period of execution and click Start . Once Start is  clicked,  the  button  changes  to Stop and  the Status Strip displays  that  an  automatic  feature  is  enabled. The  feature  runs  until  the Stop button  is  clicked.  The command  and  reading  of  the  resulting  data  is  only executed if the currently selected main tab is either the Temperature or Data Log Graph tab.

Figure 3. Temperature Tab

<!-- image -->

## MAX35103 Evaluation Kit

## RTC &amp; WatchDog Tab

All the configurations required to set up the real-time clock (RTC), watchdog, and alarm can be found in the RTC &amp; Watchdog tab (Figure 4). The device powers up with the RTC set to all  zeros,  which  is  an  invalid  representation of date and time and therefore the date and time need to be set before a valid read can occur. To set the date and time, start with the Set the Date group box located in the Set the Clock Data group  box.  Clicking  on  a  particular date from the calendar sends that value in the appropriate format to the device. The time of day can be set by adjusting the controls in the Set the Time group box or by clicking the nearby Send Value button to send the values currently represented in the associated controls.

The Set  to  PC  Date  &amp;  Time  (24hr) button uses  the internal PC clock to set the device in 24-hour mode.

Evaluates: MAX35103

The  alarm  and  watchdog  can  be  set  in  similar  fashion from  the Set  the Alarm and Set  the  WatchDog group boxes, respectively.

When reading the parameters in this tab using the Read All Registers button, all displays on the right side in the Read Clock Data group box are updated. In addition, for ease  of  adjusting  certain  parameters,  all  values  on  the left side in the Set Clock Data group box, excluding the Set the WatchDog group box, are updated. An easy-todecipher Alarm  Flag and  a WD  Flag graphic  are displayed  in  the Alarm  Value and WatchDog  Value group boxes. These graphics are updated on a read. A green  circle  signifies  that  the  bit  is  not  set,  while  a  red circle indicates that the bit was set and an alarm match or watchdog timeout has occurred.

Figure 4. RTC &amp; WatchDog Tab

<!-- image -->

## MAX35103 Evaluation Kit

## Event Timing Modes Tab

The Event  Timing  Modes tab (Figure 5) allows evaluation of the advanced timing features of the IC. Prior to using this tab, the device must be fully configured, with the configurations stored to flash. Work through the configurations in the Time Of Flight , Temperature , and RTC &amp;  WatchDog tabs  before  attempting  to  run  the Event Timing Modes . When ready, configure the controls in the TOF Sequencing and Temp Sequencing group boxes. Configure these in such a manner that the TOF sequence and the temperature sequence equal the same duration.

Select the desired Calibration  Configuration .  The Timing Options group box determines which data tables on  the  right  side  of  the  tab  are  populated  with  data when  the  event  timing  is  run.  If  continuous  interrupt  is enabled,  the  IC  provides  data  after  each  measurement (temperature  or  time  of  flight),  which  is  then  populated in  the Continuous  Interrupt tables.  The Continuous Operation checkbox, when checked, causes the device to  continuously  run  the  configured  event  timing  mode until  the  halt  command is sent by clicking on the HALT Command button.  If  both  the Continuous  Operation and the Continuous Interrupt features are enabled, then a blank green row is inserted in the measurement results data when a sequence has completed. This provides an

## Table 1. Event Timing Mode (Data Reads)

| INTERRUPT STATUS BIT SET   | RESULTING DATA READ TABLE ENTRY                                                                                                                                                                      |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TOF                        | Add row to: Time of Flight - End of Measurements Data (Continuous Interrupt Mode). Read Up Average, Down Average, and TOF_Diff data from the device. Also, read RTC data from device for Time Stamp. |
| Temperature                | Add row to: Temperature - End of Measurements Data (Continuous Interrupt Mode). Read Temperature Ports results data from the device. Also, read RTC data from the device for Time Stamp.             |
| TOF EVTMG                  | Add row to: Time of Flight - End of Sequence Data. Read TOF_Diff Average and TOF Range data from the device. Also, read RTC data from the device for Time Stamp.                                     |
| Temperature EVTMG          | Add row to: Temperature - End of Sequence Data. Read Temperature Average Ports results data from the device. Also, read RTC data from the device for Time Stamp.                                     |

Evaluates: MAX35103

easy  way  to  group  together  measurement  data  that  is used for the sequence completion average data. To start event timing mode, click on the desired EVTMGn button in the Start/Stop Timing Modes group box. This sends the appropriate command to the IC.

The 8XS operation of the MAX35103 is not supported by the EV Kit software. This is because of a sampling rate limitation with the USB-to-SPI translation hardware.

The Event  Timing  Modes tab  is  intended  to  show  the IC's  interrupt  pin's  ( INT )  functionality.  When  an  event timing mode is started, the INT pin is polled every 50ms, as shown in the INT# Pin Polling group box. When INT is active, the Interrupt Status register is automatically read, with the results displayed in the Interrupt Status group box.  Measurement  results  and  sequence  results  data are then read based on which bits are set in the Interrupt Status register (Table 1).

If  an  event  timing  mode  is  running  when  the Event Timing Mode tab is exited, a halt command is sent to the device and the INT pin polling is stopped.

While the INT pin is being polled, the text on the left side of the status strip changes colors and provides a polling status until the event timing mode has run to completion, the halt command is sent, or the active tab is changed.

Figure 5. Event Timing Modes Tab

<!-- image -->

## MAX35103 Evaluation Kit

## Data Log Graph Tab

The Data  Log  Graph tab  (Figure  6)  provides  a  basic graphing  tool  that  can  be  used  to  view  data  vs.  time. The  data  graphed  in  this  tab  are  generated  from  the Command Repetition feature  provided  in  the Time Of Flight and Temperature tabs only. Start one or both of these Command  Repetitions and  then  switch  to  the Data Log Graph tab to select the data set to view. The

Evaluates: MAX35103

selectable  data  sets  are  displayed  in  a  drop-down  list located  in  the Data Set Select group  box.  To  clear  the graph,  click  on  the Clear  Data  Log button.  The Poll Count value  shows  how  many  data  points  are  in  the series displayed on the graph. There are Zoom in , Zoom out , and  Zoom to Fit buttons  in  the  upper-right  corner of the graph shaped like magnifying glasses. Use these tools to view the desired portion of the displayed data.

Figure 6. Data Log Graph Tab

<!-- image -->

## MAX35103 Evaluation Kit

## Flash Tab

The Flash tab  (Figure 7) provides an easy way to read and  write  all  8kB  of  user  flash  contained  in  the  IC.  To access flash, the LDO must first be enabled. This can be done manually with the Send Device Command menu. However, for simplification purposes, when the Flash tab is selected, the LDO ON command (located in the Send Device  Command drop-down  menu)  is  automatically sent to the device. Likewise, when leaving the Flash tab, the LDO OFF command is sent to the device.

The Flash tab  displays all values in raw hex format. All memory is readable and when the Read All button in the Flash Read group box is clicked, the entire flash memory is  read and the table is updated. All memory addresses can be written to by clicking on the desired cell and entering the hex value, then pressing Enter on the keyboard or selecting another cell. The data entered is checked for

Evaluates: MAX35103

validity and if not valid is filled with zeros and a notification  graphic  appears  in  the  cell.  For  convenience,  the Currently  Selected  Cell  Address is  displayed  on  the right-hand side of the tab.

The flash is separated into 32 blocks (pages) containing 128 words each. These pages are demonstrated in the table  by  alternating  colors  of  shading.  To  erase  a  particular page of flash, a memory location in that page can be selected, which updates the Currently Selected Cell Page value located in the Flash Erase group box, or the desired page can be selected manually with the provided input control. Clicking on the Erase Page button erases a single page of flash. Alternatively, clicking on the Erase All button  cycles  through  all  32  pages  and  sends  the Erase Page command. Flash must be erased before it can be written.

Figure 7. Flash Tab

<!-- image -->

## MAX35103 Evaluation Kit

## Registers Tab

All  the  accessible  registers  in  the  IC  can  be  accessed from the Registers tab  (Figure  8).  This  tab  displays  all values in raw hex format. All registers are readable and when  the Read All button  is  clicked,  the  entire  visible register space is read and updated. The first column on the left  can  be  written  to  by  clicking  on  the  desired  cell and entering the hex value, then pressing Enter on the keyboard or  selecting  another  cell.  The  data  entered  is checked for validity and if not valid is filled with zeros, with a notification graphic appearing in the cell. As indicated in the Registers tab, the right three columns are read-only so the cells cannot be edited.

## Exporting Data from the Software

To export the data from the Time Of Flight tab after running  repetitious  TOF  commands,  use  the Save  to  .tsv button  found  on  the Data Log Graph tab.  This  file  can then be opened as a spreadsheet.

Version  2.5  of  the  EV  kit  software  does  not  support exporting data from the Temperature tab.

To  export  data  from  the Event  Timing  Modes tab,  the data  can  simply  be  highlighted  then  copied  and  pasted into a spreadsheet.

Figure 8. Registers Tab

<!-- image -->

## MAX35103 Evaluation Kit

## Detailed Description of Hardware

See Figure 9 for a block diagram of the EV kit hardware and  the  required  system-level  connections.  Figure  9

Evaluates: MAX35103

also highlights important hardware components such as solder  bridges  (Table  2),  PCB  connections  (Table  3), jumpers  (Table  4),  momentary  switches  (Table  5),  and LEDs (Table 6).

Figure 9. MAX35103 EV Kit Block Diagram

<!-- image -->

## Table 2. Description of Solder Bridges

| SOLDER BRIDGE   | DESCRIPTION                                                                                 |
|-----------------|---------------------------------------------------------------------------------------------|
| J33             | Connection between the D4 LED and ground. Removing the solder bridge disables the D4 LED.   |
| J38             | Connection between the D5 LED and ground. Removing the solder bridge disables the D5 LED.   |
| J42             | Connection between the D20 LED and supply. Removing the solder bridge disables the D20 LED. |

## MAX35103 Evaluation Kit

Table 3. Description of PCB Connectors

| CONNECTOR   | DESCRIPTION                                                                                                                                                                                 |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2          | Ground banana-jack connection. When powering the EV kit using an external supply, use this connection for ground. Connection can also be used to ground the spool body to the EV kit board. |
| J3          | VCC banana-jack connection. When powering the EV kit using an external supply, use this connection to provide the bias for the VCC supply traces.                                           |
| J15         | Downstream piezoelectric transducer BNC connection.                                                                                                                                         |
| J16         | Upstream piezoelectric transducer BNC connection.                                                                                                                                           |
| J20         | Mini-USB connection. Provides communications and optional power from the PC to the IC.                                                                                                      |
| R1          | PORT 1 RTD terminal-block connections. Insert bare-wire connections of the RTDs into the terminal block and secure by tightening the screws with a Phillips head screwdriver.               |
| R2          | PORT 2 RTD terminal-block connections. Insert bare-wire connections of the RTDs into the terminal block and secure by tightening the screws with a Phillips head screwdriver.               |
| S3          | Socket for 8-channel DIP switch. DIP switch can be removed from the socket if the USB-to-SPI circuit is no longer desired. This allows the EV kit to be snapped along the scored line.      |

Above references are shown in Figure 9.

## Table 4. Description of Jumpers

| JUMPER                         | JUMPER POSITION   | DESCRIPTION                                                                                                                                                                                                                                                   |
|--------------------------------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1 (GROUND)                    | Shorted           | To use the USB-to-SPI translator circuit and the IC, they must share common ground. This jumper connects the ground planes across the scoring of the two halves of the PCB.                                                                                   |
| J1 (GROUND)                    | Not shorted       | Isolates the grounds from the USB-to-SPI translator circuit and the IC.                                                                                                                                                                                       |
| J4 (USB POWER)                 | Shorted           | To run the EV kit solely on USB power, this jumper must be populated. This jumper connects the 3.3V USB regulated supply to the USB-to-SPI translator circuit (VPIC) supply.                                                                                  |
| J4 (USB POWER)                 | Not shorted       | USB power is not used to generate the supplies for the USB-to-SPI translator circuit (VPIC) or the IC (VCC, VDUT). External power must be applied to the banana jacks.                                                                                        |
| J5 (VPIC SUPPLY to VCC SUPPLY) | Shorted           | To run the EV kit solely on USB power, this jumper must be populated. This jumper connects the USB-to-SPI translator circuit (VPIC) supply to the IC (VCC, VDUT) supplies. This jumper connects the supplies across the scoring of the two halves of the PCB. |
| J5 (VPIC SUPPLY to VCC SUPPLY) | Not shorted       | This configuration allows the use an external SPI master or the ability to power the USB-to-SPI translator circuit (VPIC) from a different supply than the IC (VCC, VDUT).                                                                                    |
| J8 (Series Current Sense)      | Shorted           | Connects either the banana-jack-powered or USB-powered VCC supply to the device under test.                                                                                                                                                                   |
| J8 (Series Current Sense)      | Not shorted       | Allows a series ammeter to be inserted into the device under test's supply for current consumption measurements                                                                                                                                               |

Above references are shown in Figure 9.

Evaluates: MAX35103

Table 5. Description of Momentary Switches

| SWITCH           | POSITION               | DESCRIPTION                                                                                                   |
|------------------|------------------------|---------------------------------------------------------------------------------------------------------------|
| S1 (Case Switch) | Pressed (Active)       | The CSW (case switch) input of the IC connected to the VCC supply. This input is active high.                 |
| S1 (Case Switch) | Not pressed (Inactive) | The CSW (case switch) input of the IC connected to ground through a 10kΩ pulldown. This input is active high. |
| S2 ( RESET )     | Pressed (Active)       | The RESET input of the IC connected to ground. This input is active low.                                      |
| S2 ( RESET )     | Not pressed (Inactive) | The RESET input of the IC connected to the VCC supply through a 10kΩ pullup. This input is active low.        |

Above references are shown in Figure 9.

Table 6. Description of LEDs

| LED         | COLOR   | DESCRIPTION                                                                                                                                               |
|-------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| D2 (COM)    | Green   | Noninitialized Flashing: USB-to-SPI microcontroller active but not initialized by the software; once hardware is initialized by software, LED is disabled |
| D2 (COM)    | Red     | Communication: After the software has initialized the hardware, the LED flashes red when a command from the PC is received                                |
| D4          | Red     | INT PIN: LED is illuminated when the interrupt pin is active (logic low)                                                                                  |
| D5          | Red     | WDO PIN: LED is illuminated when the watchdog device pin is active (logic low)                                                                            |
| D20 (POWER) | Green   | USB Power: USB 5V power supply is on                                                                                                                      |
| D20 (POWER) | Red     | USB Power Fault: A fault occurred due to overvoltage limit, current limit, or thermal limit                                                               |

Above references are shown in Figure 9.

## Providing an External Supply

To  vary  the  supply  voltage  with  an  external  supply,  or  attach  a  battery  to  power  the  EV  kit  for  evaluation purposes, remove jumper J4. Leave jumpers J1, J5, and J8 populated and then apply the ground and bias voltage from the external source to the banana jacks (J2 and J3).

Evaluates: MAX35103

## Troubleshooting

All efforts have been made to ensure that each EV kit works on the first try, right out-of-the-box. In the rare occasion that a problem is suspected, see Table 7 to help troubleshoot the issue.

## Table 7. Troubleshooting

| SYMPTOM                                         | CHECK                                                  | SOLUTION                                                                                                                                                                                                                                                                                                                                                               |
|-------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI indicates: Hardware not found               | Is the D20 LED red?                                    | If yes, then the electronic fuse (U21) is in a fault state. Inspect for electrical shorts on the PCB and ensure that the PCB is not sitting on a conductive surface. The board must be power cycled once the LED is red.                                                                                                                                               |
| GUI indicates: Hardware not found               | Does the D2 LED stop flashing when the GUI is running? | If not, then exit the GUI and try running it again. If D2 is still flashing, then exit the GUI and try connecting the USB cable to a different USB port on the PC and wait for a Windows message that states the hardware is ready to use. Run the GUI again. If D2 is still flashing, unplug the USB cable and reboot the PC. Connect the USB cable and open the GUI. |
| GUI indicates: Hardware not found               | Are any of the LEDs illuminated?                       | If not, then the PCB may not be getting power from the USB. Try a different USB cable or a different USB port.                                                                                                                                                                                                                                                         |
| Data is not being read properly from the device | DIP switch S3                                          | Verify that all S3 DIP switches are in the on position. Verify that the S3 DIP switch is seated properly in its socket. Check continuity of the signals across the DIP switch. If the DIP switch is damaged, signals may need to be hard jumpered across the PCB score line.                                                                                           |
| Data is not being read properly from the device | Common ground                                          | Verify that there is common-ground references between the USB-to- SPI circuitry and the IC's circuitry. This is accomplished with the J1 jumper.                                                                                                                                                                                                                       |

Evaluates: MAX35103

## MAX35103 Evaluation Kit

## Component List

| DESIGNATION                                                                                                                                                                               |   QTY | DESCRIPTION                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------|
| 3.3V, 5V, VCC, VDUT, VPIC                                                                                                                                                                 |     5 | Red test points Keystone 5010                                         |
| 32k IN, 32KOUT, CE, CEx, CMPOUT, CSW, DIN, DNSTREAM PIEZO, DOUT, INT, INTx, LAUNCH_DN, LAUNCH_UP, MISO, MOSI, RST, RSTx, SCK (x2), STOP_DN, STOP_UP, T1-T4, TC, UPSTREAM PIEZO, WDO, WDOx |    29 | White test points Keystone 5012                                       |
| C1, C2, C5, C7, C8, C28, C29                                                                                                                                                              |     0 | Do not populate, ceramic capacitors (0805)                            |
| C3, C6, C9, C14, C20, C58, C60                                                                                                                                                            |     7 | 0.1μF, X7R ceramic capacitors (0805)                                  |
| C4, C11                                                                                                                                                                                   |     2 | 22μF, X7R ceramic capacitors (0805)                                   |
| C10                                                                                                                                                                                       |     1 | 100μF, tantalum capacitor (C-SMT) Vishay 593D107X9010C2TE3            |
| C12, C37, C61                                                                                                                                                                             |     3 | 1μF, X7R ceramic capacitors (0805)                                    |
| C13                                                                                                                                                                                       |     1 | 2.2μF, X7R ceramic capacitor (0805)                                   |
| C22-C25, C63, C64                                                                                                                                                                         |     6 | 12pF, X7R ceramic capacitors (0805)                                   |
| C26A                                                                                                                                                                                      |     1 | 0.1μF ±1%, 30ppm, C0G ceramic capacitor (1206) KEMET C1206C104F3GACTU |
| C26B                                                                                                                                                                                      |     0 | Do not populate, C0G ceramic capacitor (1206)                         |

Evaluates: MAX35103

| DESIGNATION                  |   QTY | DESCRIPTION                                                            |
|------------------------------|-------|------------------------------------------------------------------------|
| C30, C31                     |     2 | 1nF ±1%, 30ppm, C0G ceramic capacitor (0805) Murata GRM2165C1H102FA01D |
| C35, C50, C52, C56           |     0 | Do not populate, tantalum capacitors (C-SMT)                           |
| C36, C51, C53, C55, C57, C62 |     6 | 10μF, X7R ceramic capacitors (0805)                                    |
| C54                          |     1 | 0.01μF, X7R ceramic capacitor (0805)                                   |
| D2, D20                      |     2 | Red/green dual LEDs KingbrightAPHB M2012SURKCGKC                       |
| D3                           |     1 | Schottky diode ROHM Semi RB060M-30TR                                   |
| D4, D5                       |     2 | Red LEDs (1206) Kingbright APTR3216EC                                  |
| GND                          |     7 | Black test points Keystone 5011                                        |
| J1, J4, J5, J8               |     4 | 2-pin, single-row headers 3M 961102-6404-AR                            |
| J2                           |     1 | Black banana socket Deltron 571-0100                                   |
| J3                           |     1 | Red banana socket Deltron 571-0200                                     |
| J6                           |     0 | Do not populate, 2-pin header                                          |
| J15, J16                     |     2 | BNC connectors TE Connectivity 5227161-1                               |
| J20                          |     1 | 5-pin mini-USB connector, female, Molex 54819-0519                     |
| J33, J38, J42                |     3 | Solder bridges                                                         |
| L1                           |     1 | 10μH ferrite inductor (0805)                                           |
| R1, R2                       |     2 | 2-position screw terminal Phoenix Contact 1984617                      |
| R3A                          |     1 | 1kΩ, 25ppm/°C, 0.1% resistor Panasonic ERA-6YEB102V                    |
| R3B, R58                     |     0 | Do not populate, resistors (0805)                                      |
| R5-R8, R56, R62              |     6 | 10kΩ ±1% resistors (0805)                                              |
| R10, R11, R17, R19, R60, R61 |     6 | 330Ω ±1% resistors (0805)                                              |

## MAX35103 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| R50, R59      |     2 | 0Ω ±1% resistors (0805)                                    |
| R51, R54      |     2 | 560Ω ±1% resistors (0805)                                  |
| R53           |     1 | 56kΩ ±1% resistor (0805)                                   |
| R55           |     1 | 45.3kΩ ±1% resistor (0805)                                 |
| R57           |     1 | 2.2kΩ ±1% resistor (0805)                                  |
| S1, S2        |     2 | Single-pole pushbutton switches C&K SR221G LFS             |
| S3            |     1 | 100-mil socket for DIP switch 3M 929984-01-08-RK           |
| U1            |     1 | Time-to-digital converter (32 TQFP-EP*) Maxim MAX35103EHJ+ |
| U2            |     1 | Microcontroller (28 SO) Microchip PIC32MX250F128B-I/ SO    |

Evaluates: MAX35103

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| U21           |     1 | 50mA to 600mA current-limit switch (6 SOT23) Maxim MAX4995AAUT+ |
| U22           |     1 | 500mALDO regulator (8 TDFN-EP*) Maxim MAX8902BATA+              |
| X1, X4        |     2 | 4MHz crystals Interquip 7D04000123BTAFA2Q3                      |
| X2            |     1 | 32kHz crystal Interquip 9CAA32768122TF70CT                      |
| -             |     4 | Jumpers/shunts                                                  |
| -             |     4 | Rubber feet                                                     |
| -             |     1 | Mini-USB cable                                                  |
| -             |     1 | PCB: MAX35103 EVALUATION KIT                                    |

## Evaluates: MAX35103

Figure 10. MAX35103 EV Kit Schematic

<!-- image -->

## Evaluates: MAX35103

Figure 11. MAX35103 EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 12. MAX35103 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX35103EVKIT# | EV Kit |

# Denotes an RoHS-compliant device that may include lead(Pb), which is exempt under the RoHS requirements.

## MAX35103 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserYes	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

Evaluates: MAX35103