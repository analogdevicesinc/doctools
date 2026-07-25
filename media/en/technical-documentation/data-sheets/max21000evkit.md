<!-- lastmod 2022-08-02 -->
## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## General Description

The  MAX21000  Maxim  inertial  demo  (MInD)  evaluation  kit  (EV  kit)  allows  evaluating  the  performance  of  the MAX21000 ultra-accurate, low-power, 3-axis digital output gyroscope.

The MInD  EV  kit provides a complete ecosystem composed  of  hardware  and  software  to  evaluate  the gyroscope using a PC.

Using the USB connection and a PC, it is possible to evaluate  the  main  important  parameters  and  configurations  of the device.

## Features

- Easy	Evaluation	of	the	MAX21000
- USB	2.0	Support
- Power	Provided	Through	the	USB
- Supply	Available	with	Battery
- Windows ® -Compatible Graphical-User Interface (GUI)
- RoHS	Compliant
- Proven	Schematics
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

## MInD EV Kit Contents

- Assembled	Circuit	Board	Including:
-  MAX21000
- USB	Pen	with	GUI	and	MAX21000	C	Library
- USB A-Micro-B Cable
- (Optional) 3.7V	Lithium-Polymer	(Li-Poly)	Battery

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX21000

Gyroscope

## MInD EV Kit Photo

<!-- image -->

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## MAX21000 MInD Setup

MInD does not require any particular setup. It is configured to work at 3.2V with a single supply for the MAX21000. See the schematics if different settings are required.

The  current  consumption  is  measured  using  the  drop voltage	on	resistor	R28	(20Ω).	For	a	more	accurate	cur-

## Evaluates: MAX21000 Gyroscope

rent estimation, measure the resistor and insert it in the corresponding box of the MInD tab of the GUI.

By	 inserting	 and	 removing	 STAMP	 from	 the	 PLCC28 socket, some electrical contact issues can be identified. These can be solved, improving the folding of the	PLCC28	pins,	as	shown	in	Figure	1.

Figure 1. PLCC28 Folding for Electrical Contact Improvement

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 2. MInD is Provided with 4 LEDs for System Status Information and a Reset Button (the other 4 buttons are for future use)

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Quick Start

## Required Equipment

- MInD	board	(included)
- Windows	XP ® ,	Windows	Vista ® ,	or	Windows ®  7 operating system
- Spare	USB	port	on	PC
- Micro-USB	cable	(included)

Note :	In	the	following	sections,	software-related	items	are identified by bolding .  T ext  in  bold  refers  to  items directly from the install or EV kit software. Text in bold and underlined refers	to	items	from	the	Windows	operating	system.

Figure 3. Software Install (Step 1)

<!-- image -->

Figure 4. Software Install (Step 2)

<!-- image -->

Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX21000

Gyroscope

## Installation Procedure Software

To download the software, visit www.maximintegrated. com/MAX21000MInDEVKit\_Software .	 Follow	 the	 steps below	to	install	the	MInD	software:

- 1)  From	the installer folder, execute the Setup.exe file, then click Next to start the wizard (Figure	3).
- 2)  Accept	the	terms	in	the	License	Agreement	and	click Next (Figure	4).
- 3)  Select the installation folder and click Next (Figure	5).
- 4)  Click Install to confirm the previous settings and start the installation (Figure	6).

Figure 5. Software Install (Step 3)

<!-- image -->

Figure 6. Software Install (Step 4)

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

- 5)  During	 the	 installation	 procedure,	 the	 Device	 Driver Installation	Wizard	is	executed.	Click Next to start the installation of the drivers (Figure	7).
- 6)  Wait	for	the	completion	of	the	installation	(Figure	8).
- 7)  If  the  installation  is  completed  successfully,  a  green checkmark  should  appear  next  to  the  two  drivers (Figure	9).
- 8)  At	the	end	of	the	installation,	click Finish to terminate the procedure (Figure	10).

Figure 7. Driver Install (Step 1)

<!-- image -->

Figure 8. Driver Install (Step 2)

<!-- image -->

## Evaluates: MAX21000 Gyroscope

Figure 9. Driver Install (Step 3)

<!-- image -->

Figure 10. Software Install (Step 4)

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Launch the MInD Software

After installing the software, an icon on the desktop and a new folder on the Start menu are created. To launch the MInD	software,	do	the	following:

- Double-click	on	the	MInD.exe	icon	on	the	desktop.
- Go	to Start &gt;&gt; All  Programs .	 Look	 for	 the Maxim\ MInD folder and click on MInD.exe inside the folder.
- Go	 to	 the	 installation	 folder	 and	 double-click	 on MInD.exe.

Evaluates: MAX21000 Gyroscope

After the execution of one of the previous operations, the MInD application window is opened (Figure	11).

Figure 11. MInD Application Main Window

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Detailed Description of the MInD Software

## Device Connection

To establish a connection with the MInD board, follow the steps	below:

- 1)  Click  on  the Select  the  MInD  device button  on  the application toolbar (Figure	12).
- 2)  The Device  settings  dialog is  shown.  Select  the appropriate COM  port  following the example  in Figure	13 (note that the COM port name may be different), and click on the OK button.
- 3)  Finally,	 click	 on	 the Connect  the  selected  MInD device button on the application toolbar to connect to the selected device (Figure	14).

Figure 12. Select the MInD Device Button

<!-- image -->

Figure 13. Device Settings Dialog

<!-- image -->

## MInD Configuration

When	the	connection	is	established,	you	can	set	its	registers, changing the values of the fields in the Tabs frame of the GUI window (Figure	15). Available parameters are described as registers with address and value. Some are read only.

The MInD tab  contains  the  configuration  parameters  of the evaluation board, as shown in Figure	15. These registers are shown in Table 1.

Example:	How	to	set	the FULL SCALE (this example is for	the	MAX21000	device):

- 1)  Select the MAX21000 tab (Figure	16).
- 2)  Select  the Bank 0x00 tab  and  identify  the SENSE\_ CFG\_0 register.
- 3)  Click on the GYRO\_FSC field and select the desired value.
- 4)  Finally,	click	on	the	green	checkmark	on	the	right	of	the field to confirm the change (Figure	17).

## MAX21000 Configuration

The device tab represents the register map of the device. All	 the	 registers	 are	 the	 1:1	 mapping	 of	 the	 internal registers and banks of the sensor.

Figure 14. Connection to the MInD

<!-- image -->

Evaluates: MAX21000

Gyroscope

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Table 1. MInD Registers

| REGISTER             | DESCRIPTION                                                                                                                                                                                                                                                                                                           |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HwRevision           | Read-only register containing the hardware version of the connected MInD board.                                                                                                                                                                                                                                       |
| firmware             | Read-only register containing the firmware version running on the connected MInD board. The four most significant bits identify the major version, the four less significant bits identify the minor version.                                                                                                         |
| streamingOn          | Read/write register to select the streaming mode: • disable: Disable the streaming. • enable USB: Enable the streaming through the USB interface. • enable BT: Enable the streaming through the Bluetooth interface.                                                                                                  |
| i2cMode              | Read/write register to select the communication protocol used by the MInD firmware to communicate with the MAX21000: • SPI: SPI protocol. • I2C: I 2 C protocol.                                                                                                                                                      |
| dataStreaming        | Read/write register to select the protocol of the streaming. For now, only the RAW protocol is available.                                                                                                                                                                                                             |
| sensAvailable        | Read/write register to select the data sent by the streaming. Writing 1 on the check flag triggers the autodetection of the available data.                                                                                                                                                                           |
| pollingOrInt         | Read/write register to select the synchronization mode between the MInD firmware and the MAX21000: • polling: The firmware waits for a change in the internal DATA_READY field of the SYSTEM_STATUS register. • interrupt: The firmware uses the interrupt event generated by the MAX21000 through the interrupt pin. |
| Advanced             | Read/write register to set the following advanced functions: • Bias Comp: Field to enable/disable the bias compensation algorithm. • useFIFO: Field to select if the data are taken directly from the output of the device or from the FIFO.                                                                          |
| useQuat              | Read/write register composed by two fields: • quatType: Field to select the quaternion estimation algorithm. For now, only the Mag Acc Gyro Integrated Fusion (magif) is available. • resetQuat: Writing run , the current position of the MInD board is set as the front spatial position.                           |
| spiClock             | Read/write register to set the clock frequency of the SPI interface. The real value is computed as register_value x 100kHz .                                                                                                                                                                                          |
| i2cClock             | Read/write register to set the clock frequency of the I2C interface. The real value is computed as register_value x 2kHz .                                                                                                                                                                                            |
| Voltage and Resistor | Read/write registers containing the real values of the resistor R28 and the output voltage of the DC-DC. These values are used by anADC to measure the current consumption. Set a more accurate value of these parameters to improve the measurement.                                                                 |
| MAX21000             | Read-only register containing the ID of the MAX21000.                                                                                                                                                                                                                                                                 |

Evaluates: MAX21000

Gyroscope

Evaluates: MAX21000

Gyroscope

<!-- image -->

Figure 15. MInD Tab in the Main Window

Figure 16. MAX21000 Tab Selection

<!-- image -->

Figure 17. Sets the Gyroscope to Full Scale on the MAX21000

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Toolbar

The toolbar is located on the top of the MInD GUI window (Figure	18).

A	short	description	of	each	toolbar	button	follows:

- The Connection  management buttons allow the user	 to	 select	 a	 MInD	 device	 and	 to	 open/close	 a connection to it.
- The Console button	shows/hides	the	console	window on  the  bottom  side  of  the  main  window.  The  console reports the commands exchanged by the software and the device and the decoded streaming output (if active).
- The Views button launches the Views panel containing a set of graphical visualizations of the sensors data (see the Views Panel section).
- The Macro  management tool  permits  the  user  to select	a	macro	and	launch	its	play/pause	function	(see the Macro section).
- The Direct commands tool  permits the execution of raw commands on the MInD device.

## Evaluates: MAX21000 Gyroscope

## Views Panel

This panel contains a set of graphical visualizations of the sensors data (Figure	19).

Figure 18 Toolbar

<!-- image -->

Figure 19. Views Panel

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

Using the Views panel,  you  can  select  among  different dockable  views  by  clicking  on  the  related  button  of  the toolbar	on	the	top	of	the	window.	The	available	views	are:

- Gyroscope Plot: This  view  shows  a  plot  for  the gyroscope data (Figure	20).
- Quaternion Plot: This  view  shows  a  plot  for  the quaternion components (Figure	21).
- Interrupt Plot: This view  shows  a  plot  for the interrupts status (Figure	22).

## Evaluates: MAX21000 Gyroscope

<!-- image -->

Figure 20. Gyroscope Plot

Figure 21. Quaternion Plot

<!-- image -->

Figure 22. Interrupt Plot

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

- 3D View: This view shows a 3D representation of the current position of the MInD device (Figure	23).
- Virtual  Cockpit: This  view  contains  the  angular position  information  in  terms  of  yaw,  pitch,  roll,  and a  representation  of  them  as  a  virtual  flight  deck (Figure	24).
- Numeric  Display: This  view  permits  the  user  to visualize  the  current  value  of  some  information  that can be chosen among a set of possibilities (Figure	25).

## Evaluates: MAX21000 Gyroscope

<!-- image -->

Figure 23. 3D View

Figure 24. Virtual Cockpit

<!-- image -->

Figure 25. Numeric Display

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Macro

A  macro  is  a  set  of  commands  that  can  be  executed through the selection of its identifier. The macro feature provided by the software permits the user to run an existing macro, record a new one, and save the current configuration as a macro.

Each	 macro	 is	 composed	 of	 two	 functions:	 play	 and pause. The play button on the Macro management section  of  the  toolbar  (see  the Toolbar section)  triggers  the execution of the play function; the Pause button triggers the  execution  of  the  pause  function.  The  macro  to  be executed can be selected using the drop-down list in the Macro management section.

To	play	a	macro:

- Select	the	desired	macro	from	the Select the macro drop-down list in the Macro management section of the toolbar.
- Click	the Play button in the Macro management section of the toolbar to execute the play function of the macro.
- Click	 the Pause button in  the Macro management section of the toolbar to execute the pause function of the macro.

Recording	 a	 macro	 means	 that	 every	 write	 operation executed using the Tabs frame is saved in a macro. Note that the write operation executed using the Direct commands tool are not recorded.

To	record	a	macro:

- Open	the Macro menu .
- Click	on	the Record a macro menu entry.
- Insert	the	name	of	the	new	macro	in	the	dialog	window and click OK .

If a valid name is set, the recording starts.

If the name is not valid, an error message appears and the name is requested again.

- Execute	all	the	write	operations	you	want	to	store.
- Open	the Macro menu .
- Click	on	the Record a macro menu entry to stop the recording.

When	the	recording	is	terminated,	all	the	write	operations are stored in the play function of the created macro. To recall  the  recorded macro, select it from the Select the macro drop-down and click the Play button.

## Evaluates: MAX21000 Gyroscope

The macro feature also permits the user to save the current status of the registers in a macro.

To	save	the	current	register's	status	as	a	macro:

- Open	the Macro menu .
- Click	on	the Save as macro… menu entry.
- Insert	the	name	of	the	new	macro	in	the	dialog	window and click OK .

If a valid name is set, the register status is saved in a new macro.

If the name is not valid, an error message appears and the name is requested again.

The Macro management tool also provides an interface to  manage  the  macros.  The Advanced  macro  manager interface permits the user to manually create a new macro, edit, modify, or delete an existing macro, and to check the syntax of a macro.

A  macro  in  the  MInD  software  is  a  set  of  instructions written in a Javascript-like language. Almost all the basic instructions  of  Javascript  are  provided,  so  refer  to  a Javascript reference guide for a list of available instructions.	 To	 add	 the	 software	 functionalities,	 a	 new	 object called mind has	been	integrated.	This	object	provides	the following	functions:

- ReadRegister(&lt;device name&gt;, &lt;bank address&gt;, &lt;register address&gt;) :	returns	a	register	value;
- WriteRegister(&lt;device name&gt;, &lt;bank address&gt;, &lt;register  address&gt;,  &lt;data  to  write&gt;) :	 write	 a	 value	 on	 a register;
- print(&lt;string to print&gt;) :	prints	the	specified	string	in	the Output text area.

Some other external functions could be released together with the software; you can find their definition in the utilfunc.js	 file	 on	 the	 root	 installation	 folder.	 Currently,	 only the sleep(time) function is provided; it introduced a delay of	time	ms	in	the	execution.	For	an	example	of	code,	see Figure	26.

To open the Advanced macro manager:

- Open	the Macro menu .
- Click	on	the Advanced macro manager menu entry.

Figure	26 shows the Advanced macro manager interface.

The interface  is  composed  by  a  toolbar  on  the  top  that provides  all  the  functionalities  of  the Advanced macro manager ,  the  list  of  available  macros on the left, a text editor  to  show  the  macro  content  on  the  right,  and  a debugging output text area on the bottom.

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

The  toolbar  offers  the  following  functionalities  (from  left to	right):

- Create	 a	 new	 macro:	 Creates	 an	 empty	 macro	 and adds it on the list of available macros.
- Save	 the	 current	 macro:	 Saves	 the	 currently	 edited macro.
- Delete	a	macro:	Deletes	the	currently	selected	macro.
- Check	macro	syntax:	Checks	if	the	syntax	of	the	currently edited macro is correct.

Figure	26 shows an example of macro, which increments the	 value	 of	 the	 SENSE	 LOW	 PASS	 BW	 field	 of	 the SENS\_CFG\_1	register	every	500ms.

Note that the behavior of the Play button of the Advanced macro manager is different from the behavior of the Play button of the main window, in that it executes the script as is, without calling a specific function; so, if you want to debug a function you have to call it inside the code (as shown	in	the	example).	When	the	debugging	is	complete, you should delete the call instruction.

## Evaluates: MAX21000 Gyroscope

Maxim Integrated  strongly  suggests  that  you  write  your code inside a play or pause function, in order to permit the execution from outside the Advanced macro manager .

## Logging

The logging feature permits the user to save the captured data from the MInD device to a desired text file. The logging  options  are  available  by  clicking  on  the Logging menu at the top of the GUI window (Figure	27).

Clicking on the Configure menu entry allows the user to select the destination file for the logging information and the fields to be saved on the destination file, as shown in Figure	28.

Clicking on the Start/Stop menu entry allows the user to enable/disable	the	logging	on	file.

Note: If you  are planning to execute  a  long-time logging, it is suggested to keep the 3D view closed (see the Troubleshooting section for details).

Figure 26 Advanced Macro Manager Interface

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 27. Logging Menu

<!-- image -->

Figure 28. Log Configuration Dialog

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Upgrade the Firmware

To upgrade the firmware, open the Help menu and click on Upgrade the firmware… , as shown in Figure	29.

Evaluates: MAX21000

Gyroscope

This  operation  closes  the  MInD  configuration  tool,  so  a confirmation is requested, as shown in Figure	30.

Click Yes to close the MInD configuration tool and open the upgrader (Figure	31).

<!-- image -->

Figure 29. Open the Firmware Upgrader

Figure 30. Confirmation Message

<!-- image -->

Figure 31. MInD Upgrader Main Window

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

It	contains	the	following	components:

- List of COMs :	Shows	a	list	of	connected	MInD	devices.
- Refresh button :	By	clicking	on	this	button,	the	user	can refresh the content of the List of COMs component.
- Upgrade file :	Permits	the	user	to	select	the	new	firmware package. The extension of the firmware package file is .mindu .
- Upgrade  button :	 This	 button	 is	 enabled	 once	 all the  required  information  is  provided  (COM  port  and upgrade file); clicking on it starts the upload of the new firmware.

Figure 32. Battery Connection

<!-- image -->

Figure 33. Waiting Bar

<!-- image -->

## Evaluates: MAX21000 Gyroscope

The	steps	needed	to	upgrade	the	firmware	are:

- 1)  Plug the battery to the board, as shown in Figure	32, and then connect the MInD device to the PC using a micro-USB cable.
- 2)  Select the COM port of the MInD device you want to upgrade. Use the refresh button to update the list, if necessary.
- 3)  Click the Browse… button in the upgrade file area to select	a	&lt;MInDFW\_x\_y.mindu&gt;	firmware	package	file.
- 4)  Click the Upgrade button to start the uploading. During the  upgrading,  a  'waiting'  bar  is  shown  (Figure	 33). Wait	until	this	bar	disappears.
- 5)  When	 the	 uploading	 is	 terminated	 successfully,	 the message shown in Figure	34 appears. If a failure message appears, see the Troubleshooting section.
- 6)  Click OK to terminate the upgrading process.

Figure 34. Completion Message

<!-- image -->

## Troubleshooting

The EV kit should work on the first try directly out of the box. In the rare occasion that a problem is suspected, see Table 2 to help troubleshoot the issue.

## Table 2. Troubleshooting

Figure 35. Recovery Tab on the MInD Upgrader

|   ISSUE NO. | SYMPTON                                                                                                | CAUSE                                                                                                                   | SOLUTION                                                                                                                                                                                                                                                                                       |
|-------------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           1 | When I execute the 3D view, everything goes very slow.                                                 | The 3D view uses some graphical libraries that might not be compatible with old graphic cards or with obsolete drivers. | Try to improve the performance or update the drivers of your graphic card.                                                                                                                                                                                                                     |
|           2 | If I keep the 3D view running, the physical memory consumption increases continuously.                 | The 3D libraries cause memory leakage with some graphical cards.                                                        | This problem has not been solved yet. In case of long running (e.g., if you use the device to log data for hours), it is suggested to keep the 3D view closed.                                                                                                                                 |
|           3 | The LEDs are all red and the firmware upgraders do not show the device in the List of COMs components. | The MInD device is stuck in programming mode.                                                                           | 1) Connect the battery. 2) Select the Recovery tab (Figure 35). 3) Select the COM port of the connected device (Figure 36). 4) Click the Recovery Board button. The message shown in Figure 37 should appear. 5) Click OK to terminate the procedure. The original firmware has been restored. |
|           4 | The firmware upgrader failed to upgrade the firmware and showed the message 'Error Loading Firmware.'  | The battery is not connected.                                                                                           | Connect the battery and apply the solution for Issue 3 above and try to upgrade the new firmware again.                                                                                                                                                                                        |
|           5 | The firmware upgrader failed to upgrade the firmware and showed other error messages.                  | The procedure failed for internal reasons.                                                                              | Apply the solution for Issue 3 above and then uninstall and reinstall the software.                                                                                                                                                                                                            |

<!-- image -->

Figure 36. Select the COM Port

<!-- image -->

Evaluates: MAX21000

Gyroscope

Evaluates: MAX21000

Gyroscope

Figure 37. Completion Message

<!-- image -->

## Component List

| DESIGNATION                                 |   QTY | DESCRIPTION                                                      |
|---------------------------------------------|-------|------------------------------------------------------------------|
| C1-C5, C9, C10, C12, C14-C17, C19, C20, C22 |    15 | 100nF ceramic capacitors (0402)                                  |
| C6, C7, C13, C35                            |     4 | 4.7µF ceramic capacitors (0603)                                  |
| C8                                          |     1 | 2.2µF ceramic capacitor (0603)                                   |
| C11                                         |     1 | 10µF polarized capacitor (1206)                                  |
| C18                                         |     0 | Not installed, ceramic capacitor (0402)                          |
| C21, C23                                    |     2 | 20pF ceramic capacitors (0603)                                   |
| C24                                         |     1 | 10pF ceramic capacitor (0603)                                    |
| C25, C34                                    |     2 | 100nF ceramic capacitors (0603)                                  |
| C26, C40, C41                               |     0 | Not installed, polarized capacitors (0805) AVX TAJR106K006RNJ    |
| C27                                         |     0 | Not installed, ceramic capacitor (0603)                          |
| C28-C31                                     |       | 22µF ceramic capacitors (0603) Digi-Key 445-8028-1-ND            |
| C32, C37                                    |     2 | 1µF ceramic capacitors (0603)                                    |
| C33                                         |     1 | 0.1µF ceramic capacitor (0603)                                   |
| C36, C38, C44                               |     3 | 10µF ceramic capacitors (0603)                                   |
| C39                                         |     1 | 150nF ceramic capacitor (0603)                                   |
| C42, C43                                    |     2 | 10µF polarized capacitors (0805) AVX TAJR106K006RNJ              |
| CON1                                        |     1 | ZX62-B-5PAUSB micro-B to micro AB connector Hirose ZX62-B-5PA-11 |
| DL1                                         |     1 | Red/green GaAs LED (1206) Farnell OLS-136HR-HYG-XD-T             |

| DESIGNATION             |   QTY | DESCRIPTION                                                                    |
|-------------------------|-------|--------------------------------------------------------------------------------|
| DL2-DL4                 |     3 | Orange LEDs (0603) Vishay TLMO1000-GS08                                        |
| FL1                     |     1 | 10µH, 10Ω SMD EMI suppression ferrite bead (SMD 0805) Taiyo Yuden LB2012T100KR |
| FL2-FL5, FL7            |     5 | 10Ω SMD EMI suppression ferrite beads (SMF 0805) Würth 742792011               |
| FL6                     |     0 | Not installed, SMD EMI suppression ferrite bead (SMF 0805) Würth 742792011     |
| L1                      |     1 | 3.3µH Vishay IFSC1515AHER3R3M01                                                |
| L2                      |     1 | 2.2µH Vishay IFSC1515AHER2R2M01                                                |
| P1                      |     1 | 10-pin (2 x 5) connector                                                       |
| P2                      |     1 | 3-pin right-angle connector Molex 687-8095                                     |
| Q1-Q5, Q7, Q11          |     7 | BSS138K n-channel power MOSFETs (SOT23) Digi-Key BSS138KTR- ND/2410031         |
| Q6, Q8-C10              |     4 | BSR315P p-channel power MOSFETs (SC59) Digi-Key BSR315P                        |
| Q12                     |     0 | n-channel power MOSFET (SOT23) Digi-Key BSS138KTR- ND/2410031                  |
| R1-R3, R5, R82-R84, R88 |     8 | 0Ω resistors (0402)                                                            |

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Component List (continued)

| DESIGNATION                                                                                                               |   QTY | DESCRIPTION                        |
|---------------------------------------------------------------------------------------------------------------------------|-------|------------------------------------|
| R4, R6                                                                                                                    |     2 | 100kΩ resistors (0402)             |
| R7-R11                                                                                                                    |     5 | 100Ω resistors (0402)              |
| R12-R14, R16, R22, R23, R25- R27, R35, R48, R55, R58, R63, R65, R67, R68, R77, R80, RF2                                   |    20 | 0Ω resistors (0603)                |
| R15                                                                                                                       |     1 | 1Ω resistor (0603)                 |
| R17-R21, R32, R50, R70-R73, R75, R79, R90, R91                                                                            |    15 | 100kΩ resistors (0603)             |
| R24, R29, R37                                                                                                             |     3 | 47kΩ resistors (0603)              |
| R28                                                                                                                       |     1 | 20Ω resistor (0603)                |
| R30, R33, R34, R43, R45-R47, R49, R51, R54, R56, R57, R59-R62, R64, R66, R69, R76, R78, R81, R85, R86, RF1, RO4, RS1, RS2 |     0 | Not installed, resistors (0603)    |
| R31                                                                                                                       |     1 | 68kΩ resistor (0603)               |
| R36, R38-R40                                                                                                              |     4 | 10Ω resistors (0603)               |
| R41, R42                                                                                                                  |     2 | 27Ω resistors (0603)               |
| R44                                                                                                                       |     1 | 20kΩ resistor (0603)               |
| R52, R53                                                                                                                  |     2 | 2kΩ resistors (0603)               |
| R74                                                                                                                       |     1 | 510kΩ resistor (0603)              |
| R87, R89                                                                                                                  |     0 | Not installed, resistors (0402)    |
| R92                                                                                                                       |     1 | 10kΩ resistor (0603)               |
| R93, R94                                                                                                                  |     2 | 47kΩ resistors (0603)              |
| RIDC1                                                                                                                     |     1 | 3.3kΩ resistor (0603)              |
| RISET1                                                                                                                    |     1 | 1.2kΩ resistor (0603)              |
| RO1-RO3                                                                                                                   |     0 | Not installed, 0Ω resistors (0603) |
| RO5                                                                                                                       |     0 | Not installed, NTC resistor (0603) |

Bluetooth is a registered trademark of Bluetooth SIG, Inc.

Evaluates: MAX21000

Gyroscope

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                          |
|---------------|-------|------------------------------------------------------------------------------------------------------|
| RS3           |     1 | 1MΩ resistor (0603)                                                                                  |
| RS4           |     1 | 1.2MΩ resistor (0603)                                                                                |
| RV1, RV2      |     2 | V5.5MLA voltage-sensitive resistor (0603) Littelfuse 1757273                                         |
| S1-S5         |     5 | Tactile SMD switches (SMD2) Omron 1333652                                                            |
| U1            |     1 | ARM ® Cortex-M3 32-bit microcontroller (100 LQFP) Atmel ATSAM3SD8CA-AU                               |
| U2            |     1 | Socket for STAMP board (STAMP_AII_V10) Farnell 3-822516-2                                            |
| U3            |     1 | High-efficiency, seamless- transition, step-up/down DC-DC converter (14 TDFN-EP*) Maxim MAX8625AETD+ |
| U4            |     1 | 2A, 1-cell Li+ DC-DC charger for USB and adapter power (28 TQFN-EP*) Maxim MAX8903A                  |
| U5            |     0 | Not installed, 5V/3.3V or adjustable, LDO, low-IQ, 500mA linear regulator (8 SO)                     |
| U6            |     1 | 5V/3.3V or adjustable, LDO, low- IQ, 500mA linear regulator (8 SO) Maxim MAX603/MAX604               |
| U7            |     1 | Panasonic Bluetooth® module (PAN1321) Panasonic ENW-89811K4CF                                        |
| U8            |     1 | 8Kbit (1024 x 8), 2.5V 2-wire bus automotive serial EEPROM with write protect (8 SO) Atmel AT24C16C  |
| Y1            |     1 | 12MHz crystal oscillator                                                                             |
| -             |     1 | PCB: MInD_BS_V10                                                                                     |

Evaluates: MAX21000

Gyroscope

Figure 38a. MAX21000 MInD EV Kit Schematic (Sheet 1 of 7)

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 38b. MAX21000 MInD EV Kit Schematic (Sheet 2 of 7)

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 38c. MAX21000 MInD EV Kit Schematic (Sheet 3 of 7)

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 38d. MAX21000 MInD EV Kit Schematic (Sheet 4 of 7)

<!-- image -->

## Evaluates: MAX21000 Gyroscope MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

Figure 38e. MAX21000 MInD EV Kit Schematic (Sheet 5 of 7)

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 38f. MAX21000 MInD EV Kit Schematic (Sheet 6 of 7)

<!-- image -->

Figure 38g. MAX21000 MInD EV Kit Schematic (Sheet 7 of 7)

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Evaluates: MAX21000 Gyroscope

Figure 39. MAX21000 MInD EV Kit STAMP Board Support Schematic

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 40. MAX21000 MInD EV Kit 3D View

<!-- image -->

Evaluates: MAX21000

Figure 41. MAX21000 MInD EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX21000

Figure 42. MAX21000 MInD EV Kit PCB Layout-Middle Top Layer

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 43. MAX21000 MInD EV Kit PCB Layout-Middle Bottom Layer

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 44. MAX21000 MInD EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 45. MAX21000 MInD EV Kit STAMP Board Support-3D View

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

Figure 46. MAX21000 MInD EV Kit STAMP Board-Top View

<!-- image -->

Evaluates: MAX21000

Gyroscope

Figure 47. MAX21000 MInD EV Kit STAMP Board-Bottom View

<!-- image -->

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX21000EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX21000 Gyroscope

## MAX21000 Maxim Inertial Demo (MInD) Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

Evaluates: MAX21000

Gyroscope