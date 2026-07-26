<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX34460 evaluation kit (EV kit) provides the hardware and software graphical user interface (GUI) necessary  to  evaluate  the  MAX34460  PMBus K 12-channel voltage  monitor  and  sequencer.  The  EV  kit  includes  a MAX34460ETM+  installed,  as  well  as  four  power  supplies that can be sequenced, monitored, and margined by the IC.

## EV Kit Contents

- S Assembled Circuit Board Including MAX34460ETM+
- S Mini USB Cable

## MAX34460 Evaluation Kit Evaluates: MAX34460

## Features

- S Easy Evaluation of the MAX34460
- S Four Power-Supply Channels
- S EV Kit Hardware is USB Powered (USB Cable Included)
- S USB HID Interface
- S Windows XP M - and Windows M 7-Compatible Software
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX34460 EV Kit Photo

<!-- image -->

PMBus is a trademark of SMIF, Inc. Windows and Windows XP are registered trademarks of Microsoft Corp.

## MAX34460 Evaluation Kit Evaluates: MAX34460

## MAX34460 EV Kit Files

| FILE                             | DESCRIPTION         |
|----------------------------------|---------------------|
| MAX344XXEVKitSoftwareInstall.EXE | Application program |

Note:

The .EXE file is downloaded as a .ZIP file.

## Quick Start

## Required Equipment

- MAX34460	EV	kit	and	hardware
- Windows	XP	or	Windows	7	PC
- USB	port
- Mini-USB	cable	(included)

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from the install or EV kit software. Text in bold and underlined refers	to	items	from	the	Windows	operating	system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Ensure that jumpers/shunts J23 and J1 are installed. Note: The  GND planes of the USB I 2 C dongle and the EV kit are not connected. The GND jumper on J23 must be connected for proper communication.
- 2)  Ensure that switches S1 and S2 are in the high position and S4, S5, and S6 are in the on position.
- 3)  Set the EV kit hardware on a nonconductive surface to ensure that nothing on the PCB gets shorted together.
- 4)  Prior to starting the GUI, connect the EV kit hardware to a PC using the supplied mini-USB cable, or equivalent.  The  power  LED  (D20)  should  be  green  and the  com LED (D21) should be red and slowly flash orange.
- 5)  Windows	 should	 automatically	 begin	 installing	 the necessary  device  driver.  The  USB  interface  of  the EV kit hardware is configured as an HID device and therefore  does  not  require  a  unique/custom  device driver.  Once  the  driver  installation  is  complete,  a Windows	 message	 appears	 near	 the System  Icon menu indicating  that  the  hardware  is  ready  to  use. Do not attempt to run the GUI prior to this message. If  you  do,  then  you  must  close  the  application  and restart it once the driver installation is complete. On some	versions	of	 Windows,	 administrator	 privileges may be required to install the USB device.
- 6)  Once  the  device  driver  installation  is  complete. Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX344XXEVKitSoftwareInstall.ZIP .  Save  the  EV kit software to a temporary folder.
- 7)  Open	the	.ZIP	file	and	double-click	on	the	.EXE	file	to run  the  installer.  A  message  box  stating: The publisher could not be verified. Are you sure you want to run this software? may appear. If so, click Yes .
- 8)  The  installer  GUI  appears.  Click Next and  then Install . Once complete, click Close .
- 9)  Go to Start | All Programs . Look for the MAX344XXEVKitSoftware folder  and  click  on  the MAX344XXEVKitSoftware.EXE file inside the folder.
- 10) When	the	GUI	appears,	the	text	at	the	bottom	should display EV Kit Hardware Connected . The com LED (D21) on the EV kit board should turn green.

## Detailed Description of Software

## Software Startup

If the MAX34460 EV kit is connected when the software is  opened,  the  software  first  initializes  the  hardware  to communicate. Next, the software searches for all slave addresses on the I 2 C bus and connects to the first slave address that is valid. The model number is then read to see which device is connected. The GUI displays EV Kit Hardware Connected at the bottom.

If  the EV kit is not connected on software startup, a No Hardware window pops up and asks the user to select the device they would like to run offline. Select a device and click OK . The GUI then populates with default EV kit values. Once the EV kit is connected, the GUI executes the sequence above.

## Menu Items

The File menu item contains save, load, and exit options. To save the current GUI configuration, click Save Project As . This saves the device name and channel names to an XML file and saves PMBus configurations to a HEX file. If a device is connected, this reads and saves data directly from the device; otherwise, it saves the configuration that is currently displayed on the GUI. Save Project saves the GUI configuration to a file that was last saved or loaded. Load Project updates the GUI with the XML file, writes the HEX file to the device, and reads current values from the device. If a device is not connected, then the HEX file is written to a virtual device. The HEX file only contains data for the PMBus commands that are stored in flash. Create Report saves a CSV file that contains all the  tables  displayed  on  the Sequencing , Monitoring , and Margining tabs.

The Connection menu item allows the user to connect to a desired device. Find Slave Addresses searches for all slave addresses connected to the I 2 C bus. To select a device, click Select Slave Address and all the slave addresses  found  are  shown  and  are  selectable.  Slave addresses  18h  and  34h  are  not  selectable  to  prevent communicating  with  the  alert  response  address  and factory-programmed address.

The Auto  Polling menu  item  has  options  for  automatic  reading  of  the  device.  To  start  polling,  select the  delay  between  reads: 300ms , 500ms , 800ms , or 1000ms .  Each  poll  reads  the Power Status (STATUS\_ WORD	 79h), Fault  Status (STATUS\_WORD	 79h),	 and the  polled  values  for  the Data  Log  Graph tab.  The Status and Margining tabs are only polled if the tab is currently  selected.  To  stop  polling,  select Off from  the menu. Polling can also be stopped by selecting items in the File menu, Connection menu, or by pressing buttons that involve action with the NV Fault Log or flash.

The Device menu  item  shows  which  device  the  tables and  controls  are  configured  for.  To  turn  the  power supplies  on  or  off,  select  the Power  On / Power  Off button,	 which	 writes	 a	 value	 to	 the	 OPERATION	 (01h) command. The supplies power on with margining off and power off based on the Power Down Action drop-down list on the Sequencing tab.	When	the GUI Lock is on, all writing actions are disabled.

## Status Log

The status log below the tabs displays all the actions the GUI	performs.	Whenever	a	PMBus	command	is	read	or written, the action is confirmed by the log. To save the log, press the Save Log button and the text in the box is  saved to a .TXT file. The log can also be cleared by pressing the Clear Log button.

## Sequencing Tab

The Sequencing tab sheet (Figure 1) includes all timing and alarm configurations. All values on the tab are read when the tab is selected. The channels can be set up in one or two groups by selecting the Single or Dual radio

## MAX34460 Evaluation Kit Evaluates: MAX34460

button under Sequencing Mode . When Single is selected, the Group column is forced to Primary . The channels can also be sequenced based on time or event by selecting  the  option  from  the Sequencing  Mode drop-down list.  If PMBus (time-based) is  chosen,  then  the  values under the Timeslot (MFR\_SEQ\_TIMESLOT	D3h)	column are all written to 0. The Sequencing Mode radio buttons and	drop-down	lists	write	to	 bits	 in	 MFR\_MODE	 (D1h). The channels can be powered down simultaneously or with a TOFF delay by selecting the option in the Power Down Action drop-down list that writes to a bit in ON\_ OFF\_CONFIG (02h). The Fault Retry Time sets the value in	 MFR\_FAULT\_RETRY	(DAh).	The Output Type writes to	MFR\_PSEN\_CONFIG	(D2h)	to	set	the	PSEN	behavior. For the PSEN pin to act as a normal enable/disable for a  power supply, select one of the PSEN options under Output Type .  If  a  GPO  option  is  selected,  the  channel is  no  longer  a  part  of  the  sequencer,  so  the Timeslot and TON Max are written to 0 and all the channel configurations on the table become read-only. The timeslot for each channel can be set by selecting a value in the Timeslot column,	 which	 writes	 to	 MFR\_SEQ\_TIMSLOT (D3h). Note that these values can only be changed when the Sequencing Mode is set to Timeslot (event-based) . The Group column  assigns  the  channel  to  the  primary or	 secondary	 group	 by	 writing	 to	 a	 bit	 in	 MFR\_SEQ\_ TIMESLOT (D3h). The sequencing delays can be set by writing  values  to TON  Delay (TON\_DELAY	 60h), TON Max (TON\_MAX\_FAULT\_LIMIT  62h),  and TOFF  Delay (TOFF\_DELAY	64h).	A	channel	can	be	set	to	global	by checking  the  checkbox  in  the Global column  to  write to	a	bit	in	MFR\_FAULT\_RESPONSE	(D9h).	Alarm	0	and Alarm 1 can be configured to turn on for different faults by selecting an option in the ALARM0/1 Pin Config column	that	writes	to	bits	in	MFR\_FAULT\_RESPONSE	(D9h). The Fault Response column writes to the TON Max Fault response	bits	in	MFR\_FAULT\_RESPONSE	(D9h).	To	log faults into the NV fault log, check the checkbox in the Log Faults column	 that	 writes	 to	 MFR\_FAULT\_RESPONSE (D9h).

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 1. MAX34460 EV Kit GUI (Sequencing Tab)

<!-- image -->

## Sequencing Graph Tab

The Sequencing Graph tab sheet (Figure 2) displays the timing	diagrams	for	all	the	channels.	When	the Power Up radio  button  is  selected,  the TON Delay (TON\_DELAY 60h) and TON Max (TON\_MAX\_FAULT\_LIMIT 62h) values  are  displayed  on  the  graph.  To  change  the TON Delay , click and drag the green vertical bar; to change TON Max , click and drag the red vertical bar. The Power Down graph  displays  the TOFF  Delay (TOFF\_DELAY 64h)  and  can  be  changed  by  clicking  and  dragging the green vertical bar. These values write to the PMBus command  when  the  mouse  is  released.  The Power Up graph  can  be  changed  to PMBus (time-based) or Timeslot (event-based) by  selecting  the  option  on  the Sequencing tab  (Figure  1 ).	 When Timeslot  (eventbased) is  selected,  the  power-up  graph  allows  the Timeslot (MFR\_SEQ\_TIMSLOT	D3h)	to	be	changed	by clicking and dragging the ramp.

## Monitoring Tab

The Monitoring tab  sheet  (Figure  3)  displays  the  fault/ warn limit  settings  for  each  channel  and  for  each  temperature  sensor.  To  read  the  settings,  click  on  the Monitoring tab and all the values are automatically read. To write to a value, click on the corresponding cell, type in a valid value, and either click another cell or press Enter on the keyboard. In the VOLTAGE table, the Sequencer column  shows  the  status  of  the  channel  and  is  read only.  To  turn  on  or  off  the  sequencer,  select  a  PSEN or  GPO  option,  respectively,  on  the Sequencing tab (Figure 1) under the Output Type column. The Nominal and Resistive Ratio columns are calculated based on a  nominal  ADC  level  of  1.8V  to  set  the  VOUT\_SCALE\_ MONITOR	(2Ah).	The Resistive Ratio is found by dividing 1.8V by the Nominal value. The fault/warn limits can be  set  by  entering  the  voltage  level  or  the  percent  of the  nominal  in  the UV  Fault (VOUT\_UV\_FAULT\_LIMIT 44h), UV Warn (VOUT\_UV\_WARN\_LIMIT	43h), OV Warn (VOUT\_OV\_WARN\_LIMIT	 42h), OV  Fault (VOUT\_OV\_ FAULT\_LIMIT  40h), PG  On (POWER\_GOOD\_ON	 5Eh), and PG  Off (POWER\_GOOD\_OFF	 5Fh)	 columns.	 The Fault Response column writes to the OV and UV fault response	bits	in	MFR\_FAULT\_RESPONSE	(D9h).	To	write to	the	OT	fault	response	bits	in	MFR\_FAULT\_RESPONSE (D9h), check the checkbox in the OT Fault column and it sets the same response selected in the Fault Response column.  To  log  faults  into  the  NV  fault  log,  check  the checkbox  in  the Log  Faults column	 to	 write	 to	 MFR\_ FAULT\_REPSPONSE	 (D9h).	 In	 the TEMPERATURE

## MAX34460 Evaluation Kit Evaluates: MAX34460

table, the sensors can be enable/disabled in the Enable column,	 which	 writes	 to	 a	 bit	 in	 MFR\_TEMP\_SENSOR\_ CONFIG (F0h).  The  OT  warn/fault  limits  can  be  set  by entering a value in the OT Warn (OT\_WARN\_LIMIT	51h) or OT Fault (OT\_FAULT\_LIMIT 4Fh) columns.

The  power-good  delay  can  be  adjusted  with  the PG Delay up/down	 spin	 box,	 which	 writes	 to	 MFR\_PG\_ DELAY	 (DBh).	 The Watchdog  Configuration section sets up the external watchdog and reads/writes to bits in MFR\_WATCHDOG\_CONFIG	(FDh).

## Margining Tab

The Margining tab sheet (Figure 4) includes the margin configurations, margin fault status, and a DAC calculator for the DS4424. All values on the tab are read when the tab is selected. The Margin column turns the margin on/off	 by	 writing	 to	 the	 OPERATION	 (01h)	 command. To  force  all  the  channels  to  the  same  margin,  select the  state  in  the Margin  All  Control drop-down  list  to the right of the table. The Slope , Open Loop , and DAC Value columns configure the DS4424 and are read from bits	in	the	MFR\_MARGIN\_CONFIG	(DFh)	command.	The margining limits can be set by entering the voltage level or the percent of the nominal in the Margin Low (VOUT\_ MARGIN\_LOW	26h)	and Margin High (VOUT\_MARGIN\_ HIGH	25h)	columns.	When	the	margining	is	turned	on, the fault status is shown in the Status column read from STATUS\_MFR\_SPECIFIC	(80h).	The Polled column displays	the	current	channel	voltage	read	from	READ\_VOUT (8Bh). To read the Status and Polled values, press the Read Status and Vout button or turn on Auto Polling . The margin fault can be cleared by pressing the Clear Faults button on the Status tab (Figure 5).

The Calculator is used to find the DS4424 external resistor	 (R FS), which determines the full-scale and step-size current	for	the	DAC.	If	R FS is calculated to be outside its limits (40k I &lt;	R FS &lt; 160k I ), then the resistor is forced to  the  edge  of  the  limit  and  the DS4424 RFS edit  box turns  red.  The  equations  used  to  calculate  the  outputs are given in Table 1.

## Table 1. DAC Calculator

| OUTPUT EQUATIONS                               |
|------------------------------------------------|
| IFB = (V OUT )/(R1 + R2)                       |
| DS4424 RFS = (7.75)/(I FB x margining range)   |
| DS4424 full scale = (0.976 x 127)/(16 x R FS ) |
| DS4424 step size = full scale/64               |

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 2. MAX34460 EV Kit GUI (Sequencing Graph Tab)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 3. MAX34460 EV Kit GUI (Monitoring Tab)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 4. MAX34460 EV Kit GUI (Margining Tab)

<!-- image -->

## Status Tab

The Status tab  sheet  (Figure  5)  displays  all  the  faults, warnings,  and  device  ID  information.  To  read  all  the current  output  values,  faults,  and  warnings,  press  the Read  Status button  or  turn  on Auto  Polling .  The fault  and  warning  bits  are  read  from  STATUS\_VOUT (7Ah),	 STATUS\_MFR\_SPECIFIC	 (80h)	 and	 STATUS\_ TEMPERATURE	(7Dh).	The Polled values are read from READ\_VOUT	 (8Bh)	 and	 READ\_TEMPERATURE	 (8Dh). Each  color  indicator  turns  green  if  the  status  is  good, red if there is a fault, or yellow to indicate a warning. The Polled value may not reflect the fault or warning because some bits are latches and have to be cleared. To clear the faults and warnings, press the Clear Faults button, which sends	 the	 CLEAR\_FAULTS	 (03h)	 command.	 The	 alarm faults are also latches and have to be cleared by pressing  the Clear  Alarm button	 to	 set	 a	 bit	 in	 MFR\_MODE (D1h). The Time Count displays the 32-bit counter read from	the	MFR\_TIME\_COUNT	(DDh)	command.	This	timer can be reset by pressing the Reset Time Count button, which  writes  a  sequence  of  all  zeros,  all  ones,  and  all zeros	to	MFR\_TIME\_COUNT	(DDh).	The ID COMMANDS table displays all the ID information of the device. Press the Read ID button to read all the commands in the table.

## Data Log Graph Tab

The Data  Log Graph tab  sheet  (Figure  6)  plots  the polled  values  in  a  graph  and  keeps  track  of  the  minimum and maximum values for each channel voltage and each  temperature  sensor.  To  read  and  plot  the  polled values, press the Data Log Read button or turn on Auto Polling .  Each  data  log  reads  every  channel's  voltage from	READ\_VOUT	(8Bh)	and	every	temperature	sensor from	 READ\_TEMPERATURE	 (8Dh).	 The	 software	 finds the minimum and maximum values over multiple reads. The Poll Count displays the number of reads that have been	 tracked	 in	 the	 data	 log.	 When	 the	 polled	 count reaches  10,000,  the  graph  deletes  the  oldest  polled values and adds a new polled value. The min/max values are still based on all the poll count values, but the graph only displays the latest 10,000 polled values. To reset the Poll  Count and  all  the  minimum  and  maximum values, press the Data Log Reset button. To turn off data logging during polling,  check  the Data Log Off checkbox. The Select Data combo box is used to select the voltage or temperature data to display on the graph and in the MIN/ MAX Data table. To save all the data graphed to a CSV file, press the Save Data Log button.

## MAX34460 Evaluation Kit Evaluates: MAX34460

## Fault Log Tab

The Fault Log tab sheet ( Figure	7 ) displays the NV Fault Log and	fault	configurations.	When	the	tab	is	selected, the Overwrite and Fault Log Depth are	read.	When	the fault log is full, the Enable Overwrite can be checked to automatically overwrite previous logs. The fault log depth can be adjusted with the Fault Log Depth combo box. The Enable  Overwrite and Fault  Log  Depth are  read from	bits	in	MFR\_NV\_LOG\_CONFIG	(D8h).	To	read	the fault log, press the Read NV Fault Log button and all 255 bytes	from	MFR\_NV\_FAULT\_LOG	(DCh)	are	displayed	in the table. To clear or force the fault log, press the Clear NV Fault Log or Force NV Fault Log button, respectively.	These	buttons	write	to	a	bit	in	MFR\_NV\_LOG\_CONFIG (D8h). To save the current fault log displayed in the table, press the Dump to a File button and the table is saved as a CSV file.

## Registers Tab

The Registers tab  sheet  (Figure  8)  displays  all  the PMBus commands and their current  data.  To  read  the registers, select a page from the top drop-down list and all  the  PMBus  commands  valid  for  that  page  are  automatically  read.  The  commands  not  valid  for  that  page are  grayed  out.  Press  the Read All button  to  read  the registers  again.  To  write  to  a  command,  enter  the  hex value in the cell and click another cell or press Enter on the keyboard. The current register configuration can be saved  to  flash  by  pressing  the Save  to  Flash button, which	sends	the	STORE\_DEFAULT\_ALL	(11h)	command. To return the device to the configuration saved in flash, press the Restore from Flash button, which sends the RESTORE\_DEFAULT\_ALL	(12h)	command.	To	reset	the device, press the Soft Reset button to write to a bit in MFR\_MODE	 (D1h).	 The Calculate  CRC button  sends the	RESTORE\_DEFAULT\_ALL	(12h)	command	and	then calculates	a	2-byte	CRC	based	on	PMBus	configuration commands that are stored in flash. The Read CRC from MFR\_DATE button	reads	MFR\_DATE	(9Dh)	and	displays the upper 2 bytes in the edit box below the button. The Calculate CRC &amp; Write to MFR\_DATE button sends the RESTORE\_DEFAULT\_ALL	(12h)	command,	calculates	a CRC,	writes	the	CRC	to	the	upper	2	bytes	of	MFR\_DATE (9Dh),	 and	 sends	 STORE\_DEFAULT\_ALL	 (11h)	 com -mand. The Command Description displays the bitmap for  selected  PMBus  commands.  Select  the  command from the drop-down list and the table below displays a description of each bit for that command.

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 5. MAX34460 EV Kit GUI (Status Tab)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 6. MAX34460 EV Kit GUI (Data Log Graph Tab)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 7. MAX34460 EV Kit GUI (Fault Log Tab)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 8. MAX34460 EV Kit GUI (Registers Tab)

<!-- image -->

## Detailed Description of Hardware

## User-Supplied I 2 C Interface

To  communicate  with  the  MAX34460  using  a  usersupplied  I 2 C  interface,  first  remove  the  J23  jumper  to disconnect the USB I 2 C dongle. If the dongle is no longer desired, it can be separated from the EV kit by snapping the  PCB  at  the  scored  line.  Connect  test  points  SDA, SCL, GND, and 5V to the off-board I 2 C interface. The I 2 C interface should operate at 3.3V.

## User-Supplied Power Supplies

To  disconnect  the  on-board  power  supplies,  turn  the DAC	 (S4),	 RS	 (S5),	 and	 PSEN	 (S6)	 DIP	 switches	 off. The  power  supplies'  GND  should  be  connected  to  the banana  jack  GND.  Connect  the  desired  PSEN  pins  to the	 enable	 pin	 on	 the	 power	 supply,	 and	 the	 RS	 pins to  a  voltage-divider  on  the  output  of  the  power  supply. The voltage-divider is only required if the output voltage is greater than 1.8V. For closed-loop margining with the on-board DS4424, connect DAC0-DAC3 to the feedback of the power supply channels 0-3.

## Table 2. Description of LEDs

| LED       | COLOR   | DESCRIPTION                                                                                                            |
|-----------|---------|------------------------------------------------------------------------------------------------------------------------|
| D2        | Red     | Fault: A shutdown fault occurred for a global primary group.                                                           |
| D3        | Red     | Fault 2: A shutdown fault occurred for a global secondary group.                                                       |
| D4        | Red     | Watchdog Output (WDO): Watchdog timeout has occurred.                                                                  |
| D5        | Green   | Power Good 2 (PG2): All enabled channels for the secondary group are above their associ- ated power-good on value.     |
| D6        | Green   | Power Good (PG): All enabled channels for the primary group are above their associated power-good on value.            |
| D7        | Red     | Alert: A fault has occurred.                                                                                           |
| D8        | Red     | Alarm1: Configurable on the Sequencing tab (Figure 1).                                                                 |
| D9        | Red     | Alarm0: Configurable on the Sequencing tab (Figure 1).                                                                 |
| DA        | Red     | VOUT0: Channel 0 is on.                                                                                                |
| DB        | Red     | VOUT1: Channel 1 is on.                                                                                                |
| DC        | Red     | VOUT2: Channel 2 is on.                                                                                                |
| DD        | Red     | VOUT3: Channel 3 is on.                                                                                                |
| D20       | Red     | USB Power Fault: A fault occurred due to overvoltage limit, current limit, or thermal limit.                           |
| (Power)   | Green   | USB Power: USB power supply is on.                                                                                     |
| D21 (Com) | Red     | Communication: After the software has initialized the hardware, the LED flashes red when an I 2 C command is received. |
| D21 (Com) | Green   | Initialized: Hardware has been initialized by software.                                                                |

## MAX34460 Evaluation Kit Evaluates: MAX34460

## User-Supplied DS4424

To  margin  with  a  user-supplied  DS4424,  disconnect  the on-board  current  DAC  by  switching  the  DAC  (S4)  DIP switch to off. Then connect MSDA, MSCL, and GND on J3 to the external current DAC. The slave address for the usersupplied  DS4424  should  be  60h  for  power-supply  channels	4-7	or	A0h	for	channels	8-11.	The	on-board	DS4424 has slave address 20h, which margins channels 0-3.

## User-Supplied DS75LV

To use an off-board digital temperature sensor, connect MSDA,	MSCL,	and	GND	on	J3	to	the	DS75LV.	The	slave address	 for	 the	 user-supplied	 DS75LV	 should	 be	 92h, 94h,	or	96h.	The	on-board	DS75LV	has	slave	address	90h.

## Troubleshooting

All efforts were made to ensure that each kit works on the first try, right out of the box. In the rare occasion that a problem is suspected, see Table 5 to help troubleshoot the issue.

Table 3. Description of Switches

| SWITCH   |   SWITCH | SWITCH POSITION   | DESCRIPTION                                                         |
|----------|----------|-------------------|---------------------------------------------------------------------|
|          |          | High*             | Control: Pulls the control pin high.                                |
|          |          | Low               | Control: Pulls the control pin low.                                 |
|          |          | High*             | Control 2: Pulls the control 2 pin high.                            |
|          |          | Low               | Control 2: Pulls the control 2 pin low.                             |
|          |          | Pressed           | Reset: Pulls the reset pin low to reset the MAX34460.               |
|          |        1 | On*               | DAC0: Connects DAC0 of DS4424 to FB0 of the channel 0 power supply. |
|          |        2 | On*               | DAC1: Connects DAC1 of DS4424 to FB1 of the channel 1 power supply. |
|          |        3 | On*               | DAC2: Connects DAC2 of DS4424 to FB2 of the channel 2 power supply. |
|          |        4 | On*               | DAC3: Connects DAC3 of DS4424 to FB3 of the channel 3 power supply. |
|          |        1 | On*               | RS0: Connects RS0 of MAX34460 to the channel 0 power supply.        |
|          |        2 | On*               | RS1: Connects RS1 of MAX34460 to the channel 1 power supply.        |
|          |        3 | On*               | RS2: Connects RS2 of MAX34460 to the channel 2 power supply.        |
|          |        4 | On*               | RS3: Connects RS3 of MAX34460 to the channel 3 power supply.        |
|          |        1 | On*               | PSEN0: Connects PSEN0 of MAX34460 to the channel 0 power supply.    |
|          |        2 | On*               | PSEN1: Connects PSEN1 of MAX34460 to the channel 1 power supply.    |
|          |        3 | On*               | PSEN2: Connects PSEN2 of MAX34460 to the channel 2 power supply.    |
|          |        4 | On*               | PSEN3: Connects PSEN3 of MAX34460 to the channel 3 power supply.    |

* Default position.

## Table 4. Description of Jumpers

| JUMPER   | JUMPER POSITION   | DESCRIPTION                                                          |
|----------|-------------------|----------------------------------------------------------------------|
| J1       | VDD-VDUT          | MAX34460 Power: Connects VDD to VDUT (MAX34460).                     |
| J23      | 5V-5V             | 5V: Supplies 5V from the USB I 2 C dongle to the EV kit board.       |
| J23      | SDA-SDA           | SDA: Connects SDA from the USB I 2 C dongle to the MAX34460 SDA.     |
| J23      | GND-GND           | GND: Connects GND from the USB I 2 C dongle to the EV kit board GND. |
| J23      | SCL-SCL           | SCL: Connects SCL from the USB I 2 C dongle to the MAX34460 SCL.     |

## MAX34460 Evaluation Kit

## Evaluates: MAX34460

Table 5. Troubleshooting

| SYMPTOM                                           | CHECK                                                        | SOLUTION                                                                                                                                                                                                                                                               |
|---------------------------------------------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI says hardware not found.                      | Is the LED labeled D20 red?                                  | If yes, then the electronic fuse (U7) is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sit- ting on a conductive surface.                                                                                               |
| GUI says hardware not found.                      | Does the LED labeled D21 turn green when the GUI is running? | If not, then exit the GUI and try running it again. If D20 still does not turn green, then exit the GUI and try connecting the USB cable to a different USB port on the PC and wait for a Windows message that states the hardware is ready to use. Run the GUI again. |
| GUI says hardware not found.                      | Are any of the LEDs illumi- nated?                           | If not, then the PCB may not be getting power from the USB. Try a different USB cable or a different USB port.                                                                                                                                                         |
| No slave address found and read/writes fail       | Jumper J1                                                    | Make sure jumper J1 is installed to power the MAX34460.                                                                                                                                                                                                                |
| No slave address found and read/writes fail       | Jumper J23                                                   | Make sure 4 jumpers on J23 are installed.                                                                                                                                                                                                                              |
| Channels do not turn on                           | Is there a CONTROL# fault on the Status Tab of the GUI?      | Default configuration Control is active high. Make sure S1 and S2 are in the high position                                                                                                                                                                             |
| Channels do not turn on                           | Is the ALERT LED on and all channel LEDs off?                | If so, make sure switch PSEN (S6) is in the on position to connect the PSENs of MAX34460 to the channels.                                                                                                                                                              |
| Channels do not turn on                           | Is the ALERT LED on and Channel 0 LED on?                    | If so, make sure switch RS (S5) is in the on position to connect the power-supply outputs to the MAX34460.                                                                                                                                                             |
| Margining is not working, voltage is not changing | S4                                                           | Make sure the DAC (S4) switch is in the on position to connect the DACs from DS4424 to FB of channels 0-3                                                                                                                                                              |

## Component List

| DESIGNATION                   |   QTY | DESCRIPTION                                       |
|-------------------------------|-------|---------------------------------------------------|
| D2, D3, D4, D7, D8, D9, DA-DD |    10 | Red LEDs (1206) Kingbright APTR3216EC             |
| D5, D6                        |     2 | Green LEDs (1206) Lumex SML-LX1206GC-TR           |
| D20, D21                      |     2 | Red/green dual LEDs Kingbright APHB M2012SURKCGKC |
| J1                            |     1 | 2-pin header, 2.54mm pitch 961102-6404-AR         |
| J2, J22                       |     2 | 4-pin headers, 2.54mm pitch 961104-6804-AR        |
| J3                            |     1 | 3-pin header, 2.54mm pitch 961103-6404-AR         |
| J4                            |     1 | Black banana jack (GND) 571-0100                  |
| J5-J12, J21                   |     0 | Do not populate, headers                          |
| J20                           |     1 | 5-pin female USB-mini header 54819-0519           |
| J23                           |     1 | 8-pin (2 x 4) header 961104-6804-AR               |
| Q1, Q2                        |     2 | 60V, 340mA nMOSFETs (SC70) ON Semi 2N7002WT1G     |

| DESIGNATION                                       |   QTY | DESCRIPTION                                                        |
|---------------------------------------------------|-------|--------------------------------------------------------------------|
| C0A-C0D, C2A-C2D, C20, C22, C25, C201, C202, C204 |    14 | 10 F F, X5R ceramic capacitors (0805) Taiyo Yuden EMK212ABJ106KD-T |
| C01, C05, C211                                    |     3 | 1 F F, X7R ceramic capacitors (0805) Murata GRM21BR71A105KA01K     |
| C06                                               |     0 | Capacitor, do not populate                                         |
| C1A-C1D, C04, C21, C24, C203, C214                |     9 | 0.01 F F, X7R ceramic capacitors (0805) TDK C2012X7R1H103KT        |
| C02, C03, C07-C11, C212                           |     8 | 0.1 F F, X7R ceramic capacitors (0805) TDK CGJ4J2X7R1H104K         |
| C23                                               |     0 | Do not populate, 470 F F aluminum capacitor                        |
| C213                                              |     1 | 220nF, X7R ceramic capacitor (0805) TDK CGJ4J2X7R1H224K            |
| C215                                              |     0 | Do not populate, ceramic capaci- tor (0805)                        |
| D1, D22                                           |     2 | Schottky diodes Panasonic DB2W31900L                               |

## MAX34460 Evaluation Kit

## Evaluates: MAX34460

| DESIGNATION                                                                                   |   QTY | DESCRIPTION                                            |
|-----------------------------------------------------------------------------------------------|-------|--------------------------------------------------------|
| R0-R11, R16, R17, R36, R37, R102, R107, R108, R117, R201, R202, R214                          |    23 | 0 I Q 1% resistors (0805) Vishay CRCW08050000Z0EA      |
| R0A-R0D, R77, R79-R91, R103, R109, R112, R113, R119, R123, R125, R127, R133, R135, R136, R204 |    29 | 100k I Q 1% resistors (0805) Vishay CRCW0805100KFKEA   |
| R1A-R1D                                                                                       |     4 | 8.66k I Q 1% resistors (0805) Vishay CRCW08058K660FKEA |
| R2A-R2D                                                                                       |     4 | 3.09k I Q 1% resistors (0805) Vishay CRCW08053K09FKEA  |
| R101, R116, R161, R164, R207                                                                  |     5 | 10k I Q 1% resistors (0805) Vishay CRCW080510K0FKEB    |
| R3A-R3D                                                                                       |     4 | 49.9 I Q 1% resistors (0805) Vishay CRCW080549R9FKEA   |
| R4A-R4D                                                                                       |     4 | 267 I Q 1% resistors (0805) Vishay CRCW0805267RFKEA    |
| R5A-R5D                                                                                       |     4 | 1k I Q 1% resistors (0805) Vishay CRCW08051K00FKEA     |
| R20-R31, R40-R51, R76, R78, R110, R121, R132, R134, R162, R215, R216                          |     0 | Do not populate, resistors (0805)                      |
| R56-R59                                                                                       |     4 | 150k I Q 1% resistors (0805) Vishay CRCW0805150KFKEA   |
| R100, R130, R131, R210                                                                        |     4 | 4.7k I Q 1% resistors (0805) Vishay CRCW08054K70FKEA   |
| R104, R114, R118, R120, R124, R126, R128, R137, R211, R212                                    |    10 | 330 I Q 1% resistors (0805) Vishay CRCW0805330RFKEA    |
| R105, R106, R213                                                                              |     3 | 2.2k I Q 1% resistors (0805) Vishay CRCW08052K20FKEA   |
| R111, R122                                                                                    |     2 | 330k I Q 1% resistors (0805) Vishay CRCW0805330KFKTA   |

## MAX34460 Evaluation Kit Evaluates: MAX34460

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION              |   QTY | DESCRIPTION                                                         |
|--------------------------|-------|---------------------------------------------------------------------|
| R115                     |     1 | 4k I Q 1% resistor (0805) Vishay CRCW08054K00FKTA                   |
| R160, R163, R206         |     3 | 45.3k I Q 1% resistors (0805) Vishay CRCW080545K3FKEA               |
| R203, R205               |     2 | 560 I Q 1% resistors (0805) Vishay CRCW0805560RFKEA                 |
| S1, S2                   |     2 | Slide-switch SPDTs SLS121PC04                                       |
| S3                       |     1 | Single-pole pushbutton KSR221G LFS                                  |
| S4, S5, S6               |     3 | 4-pole DIP switches BD04                                            |
| TP1                      |    10 | Red test points Keystone 5010                                       |
| TP2-TP6, TP9, TP10, TP11 |     8 | Black test points Keystone 5011                                     |
| TP7, TP44                |     2 | Orange test points Keystone 5013                                    |
| TP8, TP43                |     2 | Yellow test points Keystone 5014                                    |
| TP12-TP42, TP50          |    32 | White test points Keystone 5012                                     |
| U1                       |     1 | PMBus 12-channel voltage moni- tor (48 TQFN-EP*) Maxim MAX34460ETM+ |
| U1A-U1D, U4, U5, U22     |     7 | 500mA LDO regulators, (8 TDFN-EP*) Maxim MAX8902BATA+               |
| U2                       |     1 | Digital temperature sensor (8 SO, 150 mil) Maxim DS75LVS+           |
| U3                       |     1 | 4-channel sink/source current DAC (14 TDFN-EP*) Maxim DS4424N+      |
| U20                      |     1 | Microcontroller (28 SO) Microchip PIC18LF2550-I/SO                  |
| U21                      |     1 | 50mA, -600mA current-limit switch (6 SOT23) Maxim MAX4995AAUT+      |
| X1                       |     1 | 48MHz, 3.3V oscillator (SMD) AVX KC3225A48.0000C30E00               |
| -                        |     5 | Jumpers/shunts                                                      |
| -                        |     1 | Mini-USB cable                                                      |
| -                        |     1 | PCB: MAX34460 EV Kit                                                |

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 9a. MAX34460 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 9b. MAX34460 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 9c. MAX34460 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

## MAX34460 Evaluation Kit Evaluates: MAX34460

Figure 10. MAX34460 EV Kit PCB Layout-Top

<!-- image -->

Figure 11. MAX34460 EV Kit PCB Layout-Bottom

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX34460EVKIT# | EV Kit |

# Denotes an RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX34460 Evaluation Kit Evaluates: MAX34460

## MAX34460 Evaluation Kit Evaluates: MAX34460

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.