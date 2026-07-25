<!-- lastmod 2022-08-03 -->
## General Description

The DS2784 evaluation kit (EV kit) allows easy performance evaluation, software development, and prototyping with the DS2784 1-cell stand-alone fuel gauge IC with Li-Ion (Li+) protector and SHA-1 authentication. The evaluation board interfaces to a PC through a DS9123O USB adapter and RJ-11 cable connection. The provided CD-ROM contains all related data sheets along with the evaluation software, which can be run under Windows XP ® or older operating system that supports USB operation.

The DS2784 EV kit evaluation software gives the user complete control of all the DS2784 functions. Separate control tabs allow the user access to all EEPROM and RAM memory locations, control registers, real-time updates of all monitored parameters, and SHA-1 functions.  The  software also incorporates a data-logging feature to monitor a cell over time.

The evaluation board circuit is designed to provide the DS2784 with accurate parameter measurements. Kit demonstration boards vary as they are improved upon over time.

## Evaluation Kit Contents

<!-- image -->

## DS2784 Evaluation Kit

## Features

- ♦ Demonstrates the Capabilities of the DS2784 Including:

Estimation of Available Capacity for Li+ Cells

Voltage Measurement

Current Measurement

Current Accumulation

Temperature Measurement

Information Storage

Identification

Overvoltage/Undervoltage Protection

Overcurrent/Short-Circuit Protection

Secure Challenge and Response Authentication Using the SHA-1 Algorithm

- ♦ Interfaces to the USB Port of a PC Running Windows XP or Older OS That Supports USB Operation

## Ordering Information

1 pc. Evaluation Board

1 pc. DS9123O USB Adapter

1 pc. RJ-11 Cable

## Equipment Needed

- 1) A PC running Windows XP or older operating system and an available USB port.

- 2) Cables with minigrabber style clips or the ability to solder directly to connection pads.

- 3) A Li+ battery and a power supply and/or load circuit.

PART

TYPE

DS2784EVKIT+

EV Kit

Windows XP is a registered trademark of Microsoft Corp.

+Denotes lead(Pb)-free and RoHS compliant.

## DS2784 Evaluation Kit

<!-- image -->

Figure 1. Communication Connections

Figure 2a. Charging Circuit

<!-- image -->

Figure 2b. Discharging Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Setup and Installation

## Board Connections

Connections to the TDFN demonstration board are best made either by soldering directly to the pads or by using cables with minigrabber clips. Communication to the TDFN board can be accomplished either through the RJ-11 jack by connecting the provided standard six-conductor RJ-11 cord or by wiring directly to the DQ and P- pads. To use the demonstration software, the DQ and PAC- lines must be connected to the DS9123O communication brick using either of the two methods described.

Figures 2a and 2b show the recommended circuits to simulate charging and discharging. The Li+ cell is connected between the B+ and B- pads. The battery charger/power supply or circuit load is connected between the P+ and P- pads. The evaluation software can be run in either configuration as long as a cell is connected between the B+ and B- terminals providing a minimum of 2.5V to power the DS2784.

## Software Installation

To install the DS2784 EV kit software, exit all programs currently running and download the latest revision at www.maxim-ic.com .  Unzip  the  compressed file and double-click the SETUP.EXE icon to begin the installation process. Follow the prompts to complete the installation. The DS2784 EV kit software can be uninstalled in the Add/Remove Programs tool in the Control Panel. After  the  installation  is  complete,  open  the  DS2784K folder  and  run  DS2784K.EXE or select DS2784K from the program menu. A splash screen containing information about the evaluation kit appears as the program is being loaded.

<!-- image -->

Figure 3. Select Preferences Window

<!-- image -->

## Selecting the Communication Port

If the DS9123O is connected when the DS2784 EV kit is started, the software starts up automatically. If it is not connected, the Select Preferences window opens (Figure 3).

In this window, select either serial port or USB communication and the port number, then click OK. The DS2784 EV kit software saves this port selection and automatically uses the selection each time the program

## DS2784 Evaluation Kit

starts.  To  change  the  port  later,  click  the  Preferences option on the menu bar, select Edit Preferences, and then select the appropriate port. To attempt to automatically  locate  the  DS9123O or DS9123, click the Poll Ports button. Warning: Automatically polling for the DS9123 can disrupt other devices connected to your computer's COM ports.

## Program Menus

Several pulldown menu options are provided to simplify using the DS2784 EV kit software. Their functions are individually detailed in the following sections.

The File Menu (Figure 4) allows the user to store and recall information to and from a file directly into the text boxes on the Parameters tab. These functions do not directly write or read the DS2784. It is still necessary for the user to store or recall this information to or from the device by clicking on the Write &amp; Copy or Recall &amp; Read buttons on the Parameters tab.

The Registers Menu (Figure 5) gives immediate access to  all  six  status  and  function  registers  of  the  DS2784. Selecting any of the registers opens an individual control window, giving the user a description of each register bit and the ability to read or write it. See Figure 6.

<!-- image -->

Figure 4. File Menu

<!-- image -->

Figure 5. Registers Menu

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2784 Evaluation Kit

Figure 6. Status Register

<!-- image -->

Figure 7. 1-Wire Speed Menu

<!-- image -->

The present state of all register bits are displayed immediately upon opening the register window. R/W locations contain a selection field or command button to allow the user to determine their state. Pressing the WRITE button writes the new value to the register and reads the corresponding register inside the DS2784 to verify the correct value was written. The Control Register and Protection Threshold Register are stored in EEPROM, so when the WRITE command is issued, the value is written and copied to EEPROM without changing the values of the remainder of the Parameter EEPROM block.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The 1-Wire ® Speed Menu (Figure 7) allows the user to select the appropriate 1-Wire timing. The device's 1-Wire speed is selected by sending the Set Overdrive or Clear Overdrive commands.

To change the device's speed, simply left-click on Regular Speed or Overdrive Speed from the 1-Wire Speed Menu. Selecting either option sends the Clear Overdrive or Set Overdrive command. The software sends the command in the current 1-Wire speed and then begins communicating in the new 1-Wire speed. If the software and the DS2784 get out of sync, simply left-click on the Detect Device Speed to match the software's 1-Wire speed to the DS2784's 1-Wire speed.

<!-- image -->

## DS2784 Evaluation Kit

<!-- image -->

Figure 8. Tools Menu

<!-- image -->

Figure 9. SHA-1 Calculator

<!-- image -->

Figure 10. Preferences Menu

<!-- image -->

Figure 11. Help Menu

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The software provides two tools to evaluate the SHA-1 calculations: a method to view the Software Computed MAC and an SHA-1 Calculator (Figure 8). Left-clicking on the Show Software Computed MAC Menu Item expands the Main Window to show the MAC computed by the software. See Figure 9 for more details.

Left-clicking on the Show SHA-1 Calculator Menu Item opens a new window that allows the user to perform SHA-1 calculations independent of the DS2784. Simply fill  in  the  text  boxes  with  the  desired  values  and  leftclick on the Compute MAC with Software button. If the ROM ID is to be used in Computing the MAC, check the Use ROM ID? checkbox. Use the Option - Fill with Values from Main Form Menu Item to fill the Secret, ROM ID, and Challenge text boxes with values from the Main Program Window.

The Preferences Menu allows the user to change COM port settings at any time (Figure 10). Edit Preferences opens the Select Preferences window. See the Selecting the Communication Port section.

Selecting the About topic from the Help Menu (Figure 11) opens a window containing information about the current revision of this program and Dallas Semiconductor.

## DS2784 Evaluation Kit

Figure 12. Parametric Data Tab

<!-- image -->

## Program Tabs

All program functions are divided under four tabs in the main program window. Left-click on the appropriate tab to move to the desired function page. Located on the Real Time tab is all the information measured and calculated by the DS2784. That data is divided between the Parametric Data tab, Fuel Gauging tab, and SHA-1 tab. The Parameters tab gives the user access to the entire Parameter  EEPROM  memory  block  in  terms  of Application Units and Device Units. The Memory tab displays the contents of every register and memory location inside the DS2784 and allows the user to alter the data. The Data Log tab allows the user to store all real-time information to a file and view the data in a graphical form.

## Real Time Tab

The  Real  Time  data  is  divided  into  three  tabs: Parametric Data, Fuel Gauge Data, and SHA-1. The Parametric Data tab (Figure 12) contains all the realtime measurements taken by the DS2784. The Fuel Gauge Data contains all the fuel gauge values calculated by the DS2784. The SHA-1 tab allows the user to exercise the SHA-1 encryption algorithm.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The Parametric Data subtab displays the latest realtime measurements of cell voltage, temperature, current, and accumulated charge with both analog meter readouts and digital values. The sense resistor value used to calculate the current reading is shown in the temperature section. Go to the sense resistor value in the Parameters tab to change this value.

The present states of the Charge Control and Discharge Control pins are shown at the bottom of the window. These outputs are active low and drive two control FETs, allowing charging and discharging of the cell pack. The Charge Control pin can be controlled manually by leftclicking the Disable/Enable Charging button, and is forced high automatically by either an Overvoltage or Charge Overcurrent condition. The Discharge Control pin  can  also  be  controlled  manually  with  the Disable/EnableDischarging button, and is forced high automatically by either an Undervoltage or Discharge Overcurrent condition.

The present state of each of the four possible flag conditions (Overvoltage, Undervoltage, Charge Overcurrent, and Discharge Overcurrent) are represented by LEDs inside the voltage and current sections of the window. The corresponding LED is green while the flag is in the cleared state. If conditions cause a flag to be tripped, the LED turns red and a button appears that allows the user to clear the flag, provided that clear conditions have been met. If conditions for clearing the flag have not been met by the circuit, clicking the clear button has no effect.

The present state of the PIO pin is shown in text. The Set/Clear PIO bit sets or clears the PIO bit in the Special Feature Register to toggle the pin's state.

The user can bring up the Set Accumulated Current Register window (Figure 13) by left-clicking the Set ACR button. This window allows the user to enter a value for the Accumulated Current Register in mAhrs.

The user can bring up the Set Accumulation Bias Register window (Figure 14) by left-clicking the Acc Bias button. This window allows the user to enter values for the Accumulation Bias Register in mA. Left-clicking on the Write button writes the Accumulation Bias Register and copies the value to EEPROM. The value entered here is added to the Accumulated Current Register during each current conversion. The bias value does not affect the Current Register reading but is reflected in the Accumulated Current Register.

<!-- image -->

## DS2784 Evaluation Kit

<!-- image -->

Figure 13. Set Accumulated Current Register

Figure 14. Set Accumulation Bias Register

<!-- image -->

Figure 15. Set Current Offset Bias Register

<!-- image -->

The user can bring up the Set Current Offset Bias Register window (Figure 15) by left-clicking the Current Offset Bias button. This window allows the user to enter values for the Current Offset Bias Register in mA. Leftclicking on the Write button writes the Current Offset Bias Register and copies the value to EEPROM. The value entered here is added to the Current Register during each current conversion.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2784 Evaluation Kit

Figure 16. Fuel Gauge Data Tab

<!-- image -->

Figure 17. Scalar Register

<!-- image -->

The Fuel Gauge Data subtab displays the latest fuel gauge calculations (Figure 16). The Full, Active Empty, and Standby Empty levels are calculated from the data input on the Parameters tab. The Remaining Active Absolute Capacity (RAAC) and the Remaining Standby Absolute Capacity (RSAC) are displayed in terms of mAhrs. The Remaining Active Relative Capacity (RARC) and Remaining Stand-by Relative Capacity (RSRC) are displayed in terms of percent of capacity remaining. The Analog Meter on the left displays the Remaining Active Absolute Capacity (RAAC).

The flags found in the Status Register are displayed on the right side of the window. When the Under Voltage Flag or the Power-on-Reset Flag is set, a button appears that allows the user to clear those bits.

The user can bring up the Set Age Scalar window (Figure 17) by left-clicking the Update button in the Scalar area. This window allows the user to read and write the Scalar value in terms of percent of the nominal capacity.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2784 Evaluation Kit

<!-- image -->

Figure 18. SHA-1 Tab

<!-- image -->

Figure 19. The Secret

<!-- image -->

Figure 20. The ROM ID

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The DS2784 uses an 8-byte Secret, the 8-byte ROM ID code of the device, and an 8-byte Challenge to generate a 20-byte Message Digest (also called the MAC) using the SHA-1 encryption algorithm. See Figure 18.

The user can clear the 8 bytes of the Secret by leftclicking  on  the  Clear  Secret  button.  The  top-right  text box is the LSB of the Secret, and the bottom-left text box is the MSB of the Secret. (All text boxes are displayed in this same format.) See Figure 19.

The user can also permanently lock the Secret by leftclicking on the Lock Secret button. Once the Secret is locked, it cannot be changed and cannot be read from the DS2784. The software prompts the user to make sure the Secret is ready to be permanently locked.

## DS2784 Evaluation Kit

<!-- image -->

Figure 21. The Challenge

Figure 22. The MAC

<!-- image -->

Figure 23. Software Computed MAC

<!-- image -->

Another DS2784 feature is to generate the Next Secret from the existing Secret, ROM ID, and Challenge. It is important to Write the Challenge before left-clicking the Compute Next Secret or Compute Next Secret with ID button. The device performs the SHA-1 calculation and creates the Next Secret. The software performs an SHA-1 calculation based on the values in the text boxes for the Secret, ROM ID (if desired), and Challenge, and places the new Secret, as calculated by software, in the Secret text boxes. The new Secret is never read back from the device.

It is important for the software and the DS2784 to have identical Secrets, ROM IDs, and Challenges so that the software can properly verify the operation of the DS2784. If the software is not in sync with the device, simply clear the Secret to get the software and hardware back in sync.

The DS2784 has two commands to compute the Next Secret. The Compute Next Secret with ID command uses the Secret, the ROM ID, and the Challenge to perform the SHA-1 encryption algorithm. The Compute Next Secret command uses the Secret and the Challenge, but replaces the ROM ID with 0xFFs to perform the algorithm. The user can select which command is used by left-clicking on the appropriate button.

The ROM ID code is unique for each DS2784 device and cannot be changed by the user. The user can load the device's ROM ID into the ROM ID text boxes by leftclicking  on  the  Read  ROM - 33h or Read ROM - 39h buttons, depending on the setting of the RNAOP bit of the Control Register. See Figure 20.

If multiple 1-Wire devices are on the bus, the user can use the Search ROM function from the Net Address subtab of the Memory tab. Left-click the Find Devices button and then left-click on the ROM ID that is desired to  be  used in  the  SHA-1 algorithm. The value of the ROM ID appears in the ROM ID text boxes on the SHA-1 subtab.

The Challenge is a random 8-byte block that is used by the DS2784 to perform the SHA-1 encryption algorithm (Figure 21). Each time the SHA-1 is performed, either during a Compute Next Secret or a Compute MAC (see Figure 22) the Challenge is left in an undefined state. Therefore, the user must left-click on the Write Challenge button prior to each computation to get a proper SHA-1 calculation.

The user can left-click on the Randomize Challenge button to load a random challenge into the Challenge text  boxes.  Left-clicking  this  button  does  not  write  the Challenge to the device. It is still required that the user left-click  on  the  Write  Challenge  button to write the challenge to the device.

The MAC is the 20-byte message digest that is the result  of  the  SHA-1  encryption  algorithm  (Figure  22). When the Secret has been loaded properly, the ROM ID has been read, and the Challenge has been written to  the  device,  left-clicking  on  the  Compute MAC or Compute MAC with ID button performs the SHA-1 calculation, reads back the results, and then displays them in the MAC text boxes.

The software also performs the SHA-1 calculations based  on  the  Secret,  ROM  ID  (if  desired),  and Challenge text box values and compares its results to the results read back from the DS2784. If the MAC computed by the software and MAC read back from the DS2784 match, the software displays 'Verified.' If they do not match, 'Not Verified' is displayed. The user can view the Software Computed MAC by using the Tools Menu - Show Software Computed MAC. The user also can compute the MAC with the DS2784, then change one bit in one of the text boxes of the Secret, and then Compute the MAC with software to see how big of a difference changing one bit makes. See Figure 23.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2784 Evaluation Kit

Figure 24. Application Units Tab

<!-- image -->

If  the  MAC  is  'Not  Verified,'  make  sure  that  the Challenge was written prior to computing the MAC. If the 'Not Verified' error continues, perhaps the Secret in the device does not match what is in the Secret text boxes, and the user needs to clear the Secret of the DS2784.

## Parameters Tab

The Parameters tab gives the user access to the entire Parameter EEPROM memory block (block 1, addresses 60h-7Fh) in terms of Application Units and Device Units.  The  Application  Units  tab  displays  the  parameters  in  units  like  mA,  mAhrs,  and  V  (Figure  24).  The Device Units tabs performs the calculations needed to get the application units into the units that are stored in the device like µV, µVhrs, and ppm as well as show the hexadecimal values that get written to the device.

<!-- image -->

The Application Units subtab (Figure 24) allows the user to read and write the Parameter EEPROM memory block. To change any of this information, simply click on the desired text field and enter the new value.

Clicking on the Load Default Set Up button enters example data  into  the  information  fields  of  the Application Units subtab. Once all data is in the desired format, click on the Write &amp; Copy button to copy it to the DS2784's EEPROM.

This information can also be stored to a file and recalled later using the Load/Save Set Up buttons or the  Load/Save Parameters Set Up Menu Items. These functions do not directly write or read the DS2784. It is still  necessary  for  the  user  to  store  or  recall  this  information to or from the device by issuing a Write &amp; Copy or Recall &amp; Read buttons.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2784 Evaluation Kit

Figure 25. Device Units Tab

<!-- image -->

The Device Units subtab is read only. It displays the actual hexadecimal values read from the DS2784 and displays the units that are stored in the device. See Figure 25.

The Memory tab gives the user access to all 32 bytes of  SRAM and all 48 bytes of EEPROM inside the DS2784 (Figure 26). They are separated into four subtabs for convenience. Any value can be modified by clicking in that address' text box and typing a new value in hexadecimal format. The Write button copies the  entire  block  of  data  to  the  corresponding  location inside the DS2784 (Scratchpad RAM on the EEPROM blocks). The Read button updates the entire block's text  boxes with data from the DS2784 (Scratchpad RAM on the EEPROM blocks). Subtabs displaying any EEPROM data also have Copy and Recall buttons to allow the user to transfer the data between Scratchpad and EEPROM memory internal to the DS2784. The Permanently Lock Block 0/1 buttons permanently store the data currently located in that block's EEPROM. Warning: This data can never be changed once locked. Verify your data first by issuing a Recall and a Read.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2784 Evaluation Kit

Figure 26. Memory Tab

<!-- image -->

The Net Address subtab allows the user to perform a Search Net Address to find all the 1-Wire devices on the 1-Wire bus. All devices found on the bus are listed in  the  Net  Addresses field. To communicate to any device on the bus, click on its address inside the Net Addresses field to select it. The program now uses this Net Address for all operations until a different Net Address is chosen.

<!-- image -->

The Log Data tab allows the user to see the DS2784's real-time measurements graphed over time (Figure 27). There are separate subtabs for voltage, current, temperature, and accumulated charge. Each graph displays the last 500 data points collected by the DS2784 EV kit software. The sampling interval can be adjusted from as fast as possible to 15 minutes, and can be adjusted from the Sampling Interval Menu at the bottom of the window. The Clear Graphs button clears all data from all  four  graphs  but  does  not  reset  the  log  to  file function. The graphs are not updated when the fastest sampling interval is selected, only the data logging is enabled.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2784 Evaluation Kit

Figure 27. Log Data Tab

<!-- image -->

The Log to File subtab contains control information for storing all data to an ASCII file. The default filename is c:\DS2784K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data is stored at the same interval selected for updating the graphs in the tab-delimited format of:

'Time&lt;tab&gt;Voltage&lt;tab&gt;Current&lt;tab&gt;AveCurrent&lt;tab &gt; T e m p e r a t u r e &lt; t a b &gt; A C R &lt; t a b &gt; F u l l &lt; t a b &gt; AE&lt;tab&gt;SE&lt;tab&gt;RAAC&lt;tab&gt;RARC&lt;tab&gt;RSAC&lt;tab&gt; RSRC&lt;tab&gt;Status&lt;tab&gt;Protection&lt;tab&gt; Scalar'

for easy import into a spreadsheet. The most recent 50 samples are displayed in the window for observation. Warning: The Log Data function overwrites previous file  information. Data previously stored in the file will be lost.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2784 Evaluation Kit

<!-- image -->

Figure 28. DS2784 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2784 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------|-----------------|
|                 0 | 7/07            | Initial release.                                          | -               |
|                 1 | 10/09           | Changed the part number to DS2784EVKIT+; added Figure 28. | 1, 15           |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600