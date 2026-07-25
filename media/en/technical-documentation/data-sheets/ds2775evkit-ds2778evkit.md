<!-- lastmod 2022-08-05 -->
<!-- image -->

## DS2775-DS2778 Evaluation Kits

## General Description

The DS2775-DS2778 evaluation kits (EV kits) make performance evaluation, software development, and prototyping with the DS2775-DS2778 2-cell stand-alone fuel-gauge ICs with Li-Ion (Li+) protector and SHA-1 authentication easy. The evaluation boards interface to a PC through a DS9123O USB adapter and RJ11 cable connection. The provided CD-ROM contains all related data sheets along with the evaluation software, which can be run under any Windows XP ® or older operating system (OS) that supports USB operation.

The DS2775-DS2778 EV kit software gives the user complete control of all the DS2775-DS2778 functions. Separate control tabs allow the user access to all EEPROM and RAM memory locations, control registers, real-time updates of all monitored parameters, and SHA-1 functions. The software also incorporates a datalogging feature to monitor a cell over time.

The evaluation board circuit is designed to provide the DS2775-DS2778 with accurate parameter measurements. Kit demonstration boards vary as they are improved upon over time.

## Evaluation Kit Contents

1 pc. Evaluation Board

1 pc. DS9123O USB Adapter

1 pc. RJ11 Cable

Windows XP is a registered trademark of Microsoft Corp.

Features

- ♦ Demonstrate the Capabilities of the DS2775-DS2778 Including:

Estimation of Available Capacity for Li+ Cells

2-Cell Voltage Measurement

Current Measurement

Current Accumulation

Temperature Measurement

Information Storage

Identification

Overvoltage/Undervoltage Protection

Overcurrent/Short-Circuit Protection

Secure Challenge and Response Authentication Using the SHA-1 Algorithm (DS2776 and DS2778 Only)

- ♦ Interface to the USB Port of a PC Running a Windows XP or Older OS That Supports USB Operation

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| DS2775EVKIT +    | EV Kit |
| DS2776EVKIT + EV | Kit    |
| DS2777EVKIT +    | EV Kit |
| DS2778EVKIT +    | EV Kit |

## Equipment Needed

- 1) A PC running a Windows XP or older OS with a CDROM drive and an available USB port.
- 2) Cables with minigrabber-style clips or the ability to solder directly to connection pads.
- 3) A Li+ battery and a power supply and/or load circuit.

## DS2775-DS2778 Evaluation Kits

<!-- image -->

Figure 1. Communication Connections

Figure 2a. Charging Circuit

<!-- image -->

Figure 2b. Discharging Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Setup and Installation

## Board Connections

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

Connections to the TDFN demonstration board are best made either by soldering directly to the pads or by using cables with minigrabber clips. Communication to the TDFN board can be accomplished either through the RJ11 jack by connecting the provided standard sixconductor RJ11 cord, by wiring directly to the DQ and P- pads for the DS2775/DS2776, or by wiring directly to the SDA, SCL, and P- pads for the DS2777/DS2778. To use the demonstration software, the required communication lines must be connected to the DS9123O communication brick using either of the two methods described.

Figures 2a and 2b show the recommended circuits to simulate charging and discharging. The Li+ cell is connected between the B+ and B- pads. The battery charger/power supply or circuit load is connected between the P+ and P- pads. The evaluation software can be run in either configuration as long as two cells are connected between the B1+ and B1- terminals and B2+ and B2- terminals, providing a minimum of +2.5V to power the DS2775-DS2778.

## Software Installation

The EV kit software can be found on our website at www.maxim-ic.com/tools/evkit/ .  To  install  the DS2775-DS2778 EV kit software, exit all programs currently  running and unzip the downloaded file. Doubleclick the SETUP.EXE icon and the installation process begins. Follow the prompts to complete the installation. The DS2775-DS2778 EV kit software can be uninstalled with the Add/Remove Programs tool  in  the Control Panel .  After  the  installation  is  complete,  open  the DS2775-DS2778 EV kit folder and run DS2775-8K.EXE or  select EV kits from the program menu. A splash screen containing information about the evaluation kits appears as the program is being loaded. The software automatically detects if the DS2775/DS2776 are connected and selects 1-Wire ® communication (as well as selects the appropriate 1-Wire speed) or if the DS2777/DS2778 are connected and selects 2-wire communication.

<!-- image -->

## DS2775-DS2778 Evaluation Kits

Figure 3. Select Preferences Window

<!-- image -->

## Selecting the Communication Port

If  the  DS9123O is connected when the DS2775DS2778 EV kits start, the software starts up automatically.  If  it  is  not  connected,  the Select Preferences window opens (Figure 3).

In this window, select either Serial Port or USB and the Port Number ,  then click OK .  The DS2775-DS2778 EV kit software saves this port selection and automatically uses the selection each time the program starts. To change the port later, click the Preferences option

(Figure 10) on the menu bar, select Edit Preferences , and then select the appropriate port. To attempt to automatically locate the DS9123O or DS9123, click the Poll Ports button. Warning: Automatically polling for the DS9123 can disrupt other devices connected to your computer's COM ports.

## Program Menus

Several pulldown menu options are provided to simplify using the DS2775-DS2778 EV kit software. Their functions are individually detailed in the following sections.

The File menu (Figure 4) allows the user to store and recall information to and from a file directly into the text boxes on the Parameters tab (Figure 24). These functions do not directly write or read the DS2775-DS2778. It  is  still  necessary  for  the  user  to  store  or  recall  this information to or from the device by clicking on the Write &amp; Copy or Recall &amp; Read buttons on the Parameters tab (Figure 24).

The Registers Menu (Figure 5) gives immediate access to all seven status and function registers of the DS2775-DS2778. Selecting any of the registers opens an individual control window, giving the user a description of each register bit and the ability to read or write it. See Figure 6.

<!-- image -->

Figure 4. File Menu

<!-- image -->

Figure 5. Registers Menu

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2775-DS2778 Evaluation Kits

Figure 6. Status Register

<!-- image -->

Figure 7. Communication Menu

<!-- image -->

The present state of all register bits is displayed immediately  upon opening the register window. R/W locations  contain  a  selection  field  or  command  button  to allow the user to determine their state. Pressing the Write button writes the new value to the register and reads  the  corresponding  register  inside  the DS2775-DS2778 to verify the correct value was written. The Control register and Protection Threshold register are stored in EEPROM, so when the Write command is issued, the value is written and copied to EEPROM without changing the values of the remainder of the Parameter EEPROM block.

The Communication menu (Figure 7) allows the user to  detect  the  appropriate  communication protocol for the device in use. The DS2775-DS2778 EV kits automatically detect which device type is connected and display the appropriate information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2775-DS2778 Evaluation Kits

<!-- image -->

Figure 8. Tools Menu

<!-- image -->

Figure 9. SHA-1 Calculator

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

If  the  DS2775/DS2776 are found by the software, the 1-Wire speed of the device is detected and displayed. To change the speed of the device, simply left-click on Set  Overdrive or Clear  Overdrive from  the Communication menu (Figure 7). Selecting either option sends the Clear Overdrive or Set Overdrive command. The software sends the command in the current 1-Wire speed, and then begins communicating in the new 1-Wire speed.

If  the  D2777/DS2778 are found by the software, the 2-wire slave address is detected and displayed under the Communication menu. If the software and the DS2775-DS2778 get out of sync, simply left-click on Detect Device to match the software's communication to the device.

The Tools menu (Figure 8) provides two methods to evaluate the SHA-1 calculations: a method to view the software-computed MAC and a method to view the SHA-1 calculator. Left-clicking on the Show Software Computed MAC menu item expands the main window to show the MAC computed by the software.

Left-clicking on the Show SHA-1 Calculator menu item opens a new window that allows the user to perform SHA-1 calculations independent of the DS2775DS2778 (Figure 9). Simply fill in the text boxes with the desired values and left-click on the Compute MAC with Software button. If the ROM ID is to be used in computing the MAC, check the Use ROM ID? checkbox. Use the Fill with Values from Main Form option from the Options menu to fill the Secret , ROM ID , and Challenge text  boxes with values from the main program window.

The Preferences menu allows the user to change COM port settings at any time (Figure 10). Edit Preferences opens the Select Preferences window. See the Selecting the Communication Port section for more information.

## DS2775-DS2778 Evaluation Kits

Figure 11. Help Menu

<!-- image -->

Selecting the About topic from the Help menu (Figure 11) opens a window containing information about the current revision of this program and Maxim Integrated Products, Inc.

## Program Tabs

All program functions are divided under four tabs in the main program window. Left-click on the appropriate tab to  move to the desired function page. Located on the Real Time tab (Figure 12) is all the information measured and calculated by the DS2775-DS2778. That data is divided between the Parametric Data , Fuel Gauge Data , and SHA-1 subtabs. The Parameters tab (Figure 24) gives the user access to the entire parameter EEPROM memory block in terms of application units and device units. The Memory tab (Figure 26) displays the contents of every register and memory location inside the DS2775-DS2778 and allows the user to alter the data. The Log Data tab (Figure 27) allows the user to  store  all  real-time  information  to  a  file  and  view  the data in a graphical form.

## Real Time Tab

The Real Time data tab is divided into three subtabs: Parametric Data , Fuel Gauge Data ,  and SHA-1 .  The Parametric Data subtab (Figure 12) contains all the real-time measurements taken by the DS2775-DS2778. The Fuel Gauge Data subtab contains all the fuelgauge values calculated by the DS2775-DS2778. The SHA-1 subtab allows the user to exercise the SHA-1 encryption algorithm. The SHA-1 functions are only supported by the DS2776 and DS2778.

The Parametric Data subtab displays the latest realtime measurements of cell voltages, temperature, current, and accumulated charge with both analog meter readouts and digital values. The sense-resistor value used to calculate the current reading is shown in the Temperature section. Go to the Sense Resistor (mOhms) value on the Parameters tab (Figure 24) to change this value.

The present states of the charge control and discharge control pins are shown at the bottom of the window. These outputs are active low and drive two control FETs, allowing charging and discharging of the cell pack. The charge control pin can be controlled manually by leftclicking the Disable Charging and Enable Charging buttons and is forced high automatically by either an overvoltage or charge overcurrent condition. The discharge control pin can also be controlled manually with the Disable Discharging and Enable Discharging buttons and is forced high automatically by either an undervoltage or discharge overcurrent condition.

The present state of each of the four possible flag conditions (overvoltage, undervoltage, charge overcurrent, and discharge overcurrent) are represented by LEDs inside the voltage and current sections of the window. The corresponding LED is green while the flag is in the cleared state. If conditions cause a flag to be tripped, the LED turns red and a button appears that allows the user to clear the flag, provided that clear conditions have been met. If conditions for clearing the flag have not  been met by the circuit, clicking the Clear button has no effect.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2775-DS2778 Evaluation Kits

<!-- image -->

Figure 12. Parametric Data Subtab

<!-- image -->

Figure 13. Set Accumulated Current Register

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The present state of the PIO pin is shown in text. The Set/Clear PIO bit button sets or clears the PIO bit in the Special Feature register to toggle the pin's state.

The user can bring up the Set Accumulated Current Register window (Figure 13) by left-clicking the Set ACR button. This window allows the user to enter a value for the Accumulated Current register in mAhrs.

## DS2775-DS2778 Evaluation Kits

Figure 14. Set Accumulation Bias Register

<!-- image -->

The user can bring up the Set Accumulation Bias Register window (Figure 14) by left-clicking the Acc Bias button. This window allows the user to enter values for the Accumulation Bias register in mA. Left-clicking on the Write button writes the Accumulation Bias register  and copies the value to EEPROM. The value entered here is added to the Accumulated Current register  during  each  current  conversion. The bias value does not affect the Current register reading but is reflected in the Accumulated Current register.

The user can bring up the Set Current Offset Bias Register window (Figure 15) by left-clicking the Current Offset Bias button. This window allows the user to enter values for the Current Offset Bias register in  mA. Left-clicking on the Write button writes the Current Offset Bias register and copies the value to EEPROM. The value entered here is added to the Current register during each current conversion. The user can start an automatic current offset calibration by left-clicking on the Calibrate button.

Figure 15. Set Current Offset Bias Register

<!-- image -->

The Fuel Gauge Data subtab displays the latest fuelgauge calculations (Figure 16). The Full , Active Empty ,  and Stand-by Empty levels are calculated from the data input on the Parameters tab (Figure 24). The remaining active absolute capacity ( RAAC )  and the  remaining stand-by absolute capacity ( RSAC )  are displayed in terms of mAhr. The remaining active relative  capacity  ( RARC )  and  remaining stand-by relative capacity ( RSRC )  are  displayed  in  terms  of  percent  of capacity remaining. The analog meter on the left displays the remaining active absolute capacity ( RAAC ).

The flags found in the Status register are displayed on the right side of the window. When the Under Voltage flag or the Power-On-Reset flag is set, a button appears that allows the user to clear those bits. The user can also issue a Software Power-On Reset command by left-clicking the Soft POR button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2775-DS2778 Evaluation Kits

<!-- image -->

Figure 16. Fuel Gauge Data Tab

<!-- image -->

Figure 17. Scalar Register

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The user can bring up the Set Age Scalar window (Figure 17) by left-clicking the Update button in the Scalar area of the Fuel Gauge Data subtab. This window allows the user to read and write the scalar value in terms of percent of the nominal capacity.

## DS2775-DS2778 Evaluation Kits

<!-- image -->

Figure 18. SHA-1 Tab

Figure 19. The Secret

<!-- image -->

Figure 20. The ROM ID

<!-- image -->

The DS2776/DS2778 use an 8-byte Secret ,  the  8-byte ROM ID code of the device, and an 8-byte Challenge to generate a 20-byte Message Digest (also called the MAC )  using the SHA-1 encryption algorithm. See Figure 18. The DS2775/DS2777 do not support the SHA-1 functions.

The user can clear the 8 bytes of the secret by leftclicking on the Clear Secret button. The top-right text box is the LSB of  the  secret,  and  the  bottom-left  text box is the MSB of  the  secret.  (All  text  boxes  are  displayed in this same format.) See Figure 19.

The user can also permanently lock the secret by leftclicking on the Lock Secret button. Once the secret is locked, it cannot be changed and cannot be read from the DS2776/DS2778. The software prompts the user to make sure the secret is ready to be permanently locked.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2775-DS2778 Evaluation Kits

<!-- image -->

Figure 21. The Challenge

Figure 22. The MAC

<!-- image -->

Figure 23. Software Computed MAC

<!-- image -->

Another DS2776/DS2778 feature is to generate the next secret from the existing secret, ROM ID, and challenge. It is important to click Write Challenge before left-clicking the Compute Next Secret or Compute Next Secret with ID button. The device performs the SHA-1 calculation and creates the next secret. The software performs SHA-1 calculation based on the values in the text boxes for the secret, ROM ID (if desired), and challenge and places the new secret, as calculated by software, in the Secret text boxes. The new secret is never read back from the device.

It is important for the software and the DS2776/DS2778 to have identical secrets, ROM IDs, and challenges so the software can properly verify the operation of the DS2776/DS2778. If the software is not in sync with the device, simply clear the secret to get the software and hardware back in sync.

The DS2776/DS2778 have two commands to compute the next secret. The Compute Next Secret with ID command uses the secret, the ROM ID, and the challenge to perform the SHA-1 encryption algorithm. The Compute Next Secret command uses the secret and the challenge, but replaces the ROM ID with 0xFFs to perform the algorithm. The user can select which command is used by left-clicking on the appropriate button.

<!-- image -->

The ROM ID code is unique for each DS2776/DS2778 device and cannot be changed by the user. The user can load the device's ROM ID into the ROM ID text boxes by left-clicking on the Read ROM - 33h or Read ROM - 39h buttons, depending on the setting of the RNAOP bit of the Control register for the DS2776 or by left-clicking on the READ ROM ID button for the DS2778. See Figure 20.

If multiple 1-Wire devices are on the bus, the user can use the Search ROM function from the Net Address subtab of the Memory tab (Figure 26). Left-click the Find Devices button and then left-click on the ROM ID that is desired to be used in the SHA-1 algorithm. The value of the ROM ID appears in the ROM ID text boxes on the SHA-1 subtab of the Real Time tab (Figure 12).

The challenge is a random 8-byte block that is used by the DS2776/DS2778 to perform the SHA-1 encryption algorithm (Figure 21). Each time the SHA-1 is performed, either during a Compute Next Secret (see Figure 18) or a Compute MAC (see Figure 22), the challenge is left in an undefined state. Therefore, the user must left-click on the Write Challenge button prior to each computation to get a proper SHA-1 calculation.

The user can left-click on the Randomize Challenge button to load a random challenge into the Challenge text  boxes.  Left-clicking  this  button  does  not  write  the challenge to the device. It is still required that the user left-click  on  the Write Challenge button to write the challenge to the device.

The MAC is the 20-byte message digest that is the result  of  the  SHA-1  encryption  algorithm  (Figure  22). When the secret has been loaded properly, the ROM ID has been read, and the challenge has been written to the device, left-clicking on the Compute MAC or Compute MAC with ID button performs the SHA-1 calculation, reads back the results, and then displays them in the MAC text boxes.

The software also performs the SHA-1 calculations based on the Secret , ROM ID (if  desired),  and Challenge text box values and compares its results to the results read back from the DS2776/DS2778. If the MAC computed by the software and MAC read back from the DS2776/DS2778 match, the software displays 'Verified.'  If  they  do  not  match,  'Not  Verified'  is  displayed. The user can view the software-computed MAC by selecting Show Software Computed MAC from the Tools menu (Figure 8). The user also can compute the MAC with the DS2776/DS2778, then change one bit in one of the text boxes of the secret, and then compute the  MAC with software to see how big of a difference changing one bit makes. See Figure 23.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2775-DS2778 Evaluation Kits

Figure 24. Application Units Tab

<!-- image -->

If  the  MAC  is  'Not  Verified,'  make  sure  that  the  challenge was written prior to computing the MAC. If the 'Not Verified' error continues, perhaps the secret in the device does not match what is in the Secret text boxes and the user needs to clear the secret of the DS2776/ DS2778.

## Parameters Tab

The Parameters tab gives the user access to the entire parameter EEPROM memory block (block 1, addresses 60h-7Fh) in terms of application units and device units. The Application Units subtab displays the parameters in units like mA, mAhrs, and V (Figure 24). The Device Units (Read Only) subtab performs the calculations needed to get the application units into the units that are stored in the device like µV, µVhrs, and ppm as well as show the hexadecimal values that are written to the device.

The Application Units subtab allows the user to read and write the parameter EEPROM memory block. To change any of this information, simply click on the desired text field and enter the new value.

Clicking on the Load Default Set Up button enters example data  into  the  information  fields  of  the Application Units subtab. Once all data is in the desired format, click on the Write &amp; Copy button to copy it to the DS2775-DS2778's EEPROM.

This information can also be stored to a file and recalled later  using  the Load Set up or Save Set Up buttons or the Load Parameter Set up or Save Parameter Set up option from the File menu (Figure 4).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2775-DS2778 Evaluation Kits

Figure 25. Device Units Tab

<!-- image -->

These functions do not directly write or read the DS2775-DS2778. It is still necessary for the user to store or recall this information to or from the device by clicking the Write &amp; Copy or Recall &amp; Read buttons.

The Device Units (Read Only) subtab is read only. It displays the actual hexadecimal values read from the DS2775-DS2778 and displays the units that are stored in the device. See Figure 25.

The Memory tab (Figure 26) gives the user access to all  32  bytes  of  SRAM and all 48 bytes of EEPROM inside the DS2775-DS2778. They are separated into five subtabs for convenience. Any value can be modified by clicking in that address' text box and typing a new value in hexadecimal format. The Write button copies the entire block of data to the corresponding location inside the DS2775-DS2778 (scratchpad RAM on the EEPROM blocks). The Read button updates the entire  block's  text  boxes  with  data  from  the DS2775-DS2778 (scratchpad RAM on the EEPROM blocks). Subtabs displaying any EEPROM data also have Copy and Recall buttons to allow the user to transfer the data between scratchpad and EEPROM memory  internal  to  the  DS2775-DS2778.  The Permanently Lock Block 0 and Permanently Lock Block 1 buttons permanently store the data currently located in that block's EEPROM. Warning: This data can never be changed once locked. Verify your data first by issuing a Recall and a Read.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2775-DS2778 Evaluation Kits

Figure 26. Memory Tab

<!-- image -->

The Net Address subtab allows the user to perform a Search Net Address command to find all the 1-Wire devices on the 1-Wire bus. All devices found on the bus are listed in the Addresses fields. To communicate to any device on the bus, click on its address inside the Net Addresses field to select it. The program now uses this  net  address  for  all  operations  until  a  different  net address is chosen. If a DS2776/DS2778 is detected, then a separate button is displayed to allow the user to read the ROM ID of the 2-wire device.

The Log  Data tab  allows  the  user  to  see  the DS2775-DS2778's real-time measurements graphed over time (Figure 27). There are separate subtabs for Voltage , Current , Temperature ,  and Accumulated Charge .  Each graph displays the last 500 data points collected by the DS2775-DS2778 EV kit software. The sampling interval can be adjusted from as fast as possible to 15min and can be adjusted from the Sampling Interval menu at the bottom of the window. The Clear Graphs button clears all data from all four graphs but does not reset the log to file function. The graphs are not updated when the fastest sampling interval is selected, only the data logging is enabled.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2775-DS2778 Evaluation Kits

Figure 27. Log Data Tab

<!-- image -->

The Log to File subtab contains control information for storing all data to an ASCII file. The default file name is c:\DS277xK\_datalog.txt, but can be modified in the Filename text  field.  The Stop Logging button toggles data logging off and on. Data is stored at the same interval  selected for updating the graphs in the tabdelimited format of:

<!-- image -->

'Time&lt;tab&gt;Voltage1&lt;tab&gt;Voltage2&lt;tab&gt;Current&lt;tab&gt; AveCurrent&lt;tab&gt;Temperature&lt;tab&gt;ACR&lt;tab&gt;Full&lt;tab&gt; AE&lt;tab&gt;SE&lt;tab&gt;RAAC&lt;tab&gt;RARC&lt;tab&gt;RSAC&lt;tab&gt; RSRC&lt;tab&gt;Status&lt;tab&gt;Protection&lt;tab&gt;  Scalar' for easy import into a spreadsheet. The most recent 50 samples are displayed in the window for observation. Warning: The Log Data function overwrites previous file  information. Data previously stored in the file will be lost.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2775-DS2778 Evaluation Kits

Figure 28. DS2775-DS2778 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2775-DS2778 Evaluation Kits

| Revision History   | Revision History   | Revision History                                                          | Revision History   |
|--------------------|--------------------|---------------------------------------------------------------------------|--------------------|
| REVISION NUMBER    | REVISION DATE      | DESCRIPTION                                                               | PAGES CHANGED      |
| 0                  | 1/09               | Initial release.                                                          | -                  |
| 1                  | 7/09               | • Added DS2775-DS2778 EV Kit Schematic . • Added link to EV kit software. | 2, 15              |
| 2                  | 10/09              | Changed the Ordering Information table to reflect Pb-free part numbers.   | 1                  |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.