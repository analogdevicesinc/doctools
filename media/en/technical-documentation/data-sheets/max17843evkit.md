<!-- lastmod 2022-08-03 -->
## MAX17843 Evaluation Kit

## General Description

The MAX17843 evaluation kit (EV kit) demonstrates the capabilities  of  the  MAX17843  12-channel,  high-voltage smart sensor data-acquisition interface IC. Vertical headers (P2, P3, P5, and P6) allow for the connection of multiple  EV  kits,  supporting  up  to  a  32-device  (max)  daisychain configuration.

## Benefits and Features

- Battery-Cell String Emulation
- UART Interface
- Windows XP®-, Windows Vista®-, Windows® 7-, and Windows 10-Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17843 EV Kit Files

| FILE                         | DECRIPTION   |
|------------------------------|--------------|
| MAX17843_EvKit_Installer.exe | GUI          |

Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Quick Start

The following procedure describes the setup and testing of a two-module, distributed, daisy-chained system using the MAX17843 IC. The user can choose to configure as many EV kit modules as needed, based on their system and testing requirements.

## Required Equipment

- Two MAX17843 EV kits
- One MAX17841B EV kit (includes a MINIQUSB command module)
- Maxim command module (MINIQUSB)
- MINIQUSB board
- MINIQUSB-XHV board (do not use this board)
- Two 9V to 60V DC power supplies (refer to the MAX17843 IC data sheet for recommended operating ranges)
- User-supplied Windows XP®-, Windows Vista®-, Windows® 7, Windows® 10-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

<!-- image -->

Evaluates: MAX17843

## MAX17843 Evaluation Kit

## Procedure

The  MAX17843  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  enable  the  power  supplies  until  all connections are completed .

- 1) Install the EV kit software on your computer by running the MAX17843\_EvKit\_Installer.exe file.
- 2) Connect the MINIQUSB module to the J3 and J4 headers on the MAX17841B EV kit.
- 3) Connect the USB cable from the PC to the MINIQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If a window is not seen like the one described above after 30s, remove the USB cable from the MINIQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows XP, Windows Vista, Windows 7, and Windows 10.
- 4) Appropriate FTDI drivers may need to be downloaded and installed from the website at http://www. ftdichip.com/Drivers/D2XX.html .
- 5) Ensure that all jumper shunts and switches are configured as shown in Table 1, Table 2, and Table 3.
- 6) Configure the DC power supplies for 18V and dis -able their outputs.
- 7) Connect the grounds of each power supply together, and then connect this common ground to AGND on the MAX17841B EV kit.
- 8) Connect the first 18V supply between the PACK+ and PACK- PCB pads on the first MAX17843 EV kit.
- 9) Connect the second 18V supply between the PACK+ and PACK- PCB pads on the second MAX17843 EV kit.
- 10)  Connect the six 2-wire blue crossover cables as described below:
- Connect P1 on the MAX17841B EV kit to P6 on the first MAX17843 EV kit
- Connect P2 on the MAX17841B EV kit to P5 on the first MAX17843 EV kit
- Connect P2 on the first MAX17843 EV kit to P6 on the second MAX17843 EV kit
- Connect P3 on the first MAX17843 EV kit to P5 on the second MAX17843 EV kit
- 11)  Connect the single, 2-wire red loopback cable from P2 to P3 on the second MAX17843 EV kit.
- 12)  Enable the DC power supply.
- 13)  Start the MAX17843 EV kit software by opening its icon in the Start | Programs menu. The EV kit software automatically establishes a connection with the EV kit. Once the status bar at the bottom of the window displays MAX17841 Detected (Figure 1), proceed to the next step.
- 14)  If checked, uncheck the MAX17841 SHDN checkbox in the upper left box (Figure 1).
- 15)  Select the Initialization tab.
- 16)  Click the Wake Up button (Figure 2).
- 17)  Click the Hello All button (Figure 2).
- 18)  Click the Set First Address button (Figure 3).
- 19)  Verify that the Device Addresses grid contains two device addresses (Figure 3).
- 20)  The EV kit is now ready for further evaluation.

Evaluates: MAX17843

│

Figure 1. MAX17843 EV Kit Software (Installation Tab-MAX17841 Detected)

<!-- image -->

Figure 2. MAX17843 EV Kit Software (Installation Tab-Wake Up and Hello All)

<!-- image -->

Figure 3. MAX17843 EV Kit Software (Installation Tab-Set First Address)

<!-- image -->

Figure 4. MAX17843 EV Kit Software (MAX17843 Register Map Tab)

<!-- image -->

## Table 1. MAX17843 EV Kit Default Jumper Settings

| JUMPER                           | SHUNT POSITION   |
|----------------------------------|------------------|
| JU0-JU3, JU15-JU18, CELL2-CELL12 | On one pin only  |
| JU14, JU19                       | Installed        |

## Table 2. MAX17841B EV Kit Default Jumper Settings

| JUMPER            | SHUNT POSITION   |
|-------------------|------------------|
| JU1-JU4, JU6, JU7 | On one pin only  |
| JU5               | 1-2              |

Table 3. MAX17843 EV Kit Quick Start Switch Settings

| SWITCH   | SETTING                       |
|----------|-------------------------------|
| SW1      | ON (actuators toward the top) |

## Notes:

- 1)  The default position of SW1 is OFF (actuators towards the bottom) and this setup is for the battery input on P1.
- 2)  The optional position of SW1 is ON (actuators towards the top) and this setup is for an external power-supply input between BAT0 and BAT12 with the 2kΩ resistor ladder.

## Detailed Description of Software

The MAX17843 EV kit is evaluated in conjunction with the MAX17843 graphical user interface (GUI) evaluation software. The GUI provides a friendly environment for reading and writing  to  all  device  registers,  as  well  as  executing several  device  commands. The  GUI  is  divided  into  two sections: group boxes and command tabs.

The upper-left group box provides shutdown/enabling of the  MAX17841B  device, Wake  Up , Hello  All ,  and Set First Address buttons (Figure 1).

The Initialization tab  (Figure  1)  provides  the Device Address grid and the Error LOG status box, which displays a summary of bus activity when the Wake Up and HELLOALL  commands  are  executed.  The Error  LOG also  provides  descriptions  of  errors  that  occur  during read, write, and scan operations.

The Read/Write tab (Figure 1) provides controls for executing  the  WRITEDEVICE,  WRITEALL,  READDEVICE, and READALL commands.

The Voltage Measurements tab (Figure 1) enables initiating and monitoring the ADC scanning of the connected devices.

The MAX17843  Register  Map tab  (Figure  1)  provides a  grid  that  is  used  to  display  the  contents  of  the  registers. This tab also includes bit-field descriptions for each register.  The  user  can  write  to  the  registers  of  the  first MAX17843  in  the  daisy-chain.  Refer  to  the  MAX17843 IC data sheet for additional register and interface details.

The MAX17841 tab  (Figure  1)  provides  access  to  the MAX17841B device registers, as well as bit-field information.

The software also provides a few functions to facilitate the evaluation process. These include the capability to save ADC measurements to a file, and the ability to save/load register configurations to/from a file. When evaluating the EV kit, the MAX17843 and MAX17841B IC data sheets should also be referenced for additional details.

## Table 4. ADDRESS Register

| ADDRESS REGISTER ADDRESS        | ADDRESS REGISTER ADDRESS        | ADDRESS REGISTER ADDRESS        | ADDRESS REGISTER ADDRESS        | ADDRESS REGISTER ADDRESS        | ADDRESS REGISTER ADDRESS        | ADDRESS REGISTER ADDRESS        | ADDRESS REGISTER ADDRESS        |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| BIT 7                           | BIT 6                           | BIT 5                           | BIT 4                           | BIT 3                           | BIT 2                           | BIT 1                           | BIT 0                           |
| 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 0                               | 1                               |
| ADDRESS REGISTER (UPPER 8 BITS) | ADDRESS REGISTER (UPPER 8 BITS) | ADDRESS REGISTER (UPPER 8 BITS) | ADDRESS REGISTER (UPPER 8 BITS) | ADDRESS REGISTER (UPPER 8 BITS) | ADDRESS REGISTER (UPPER 8 BITS) | ADDRESS REGISTER (UPPER 8 BITS) | ADDRESS REGISTER (UPPER 8 BITS) |
| BIT 15                          | BIT 14                          | BIT 13                          | BIT 12                          | BIT 11                          | BIT 10                          | BIT 9                           | BIT 8                           |
| 0                               | 0                               | 0                               | FA4                             | FA3                             | FA2                             | FA1                             | FA0                             |
| ADDRESS REGISTER (LOWER 8 BITS) | ADDRESS REGISTER (LOWER 8 BITS) | ADDRESS REGISTER (LOWER 8 BITS) | ADDRESS REGISTER (LOWER 8 BITS) | ADDRESS REGISTER (LOWER 8 BITS) | ADDRESS REGISTER (LOWER 8 BITS) | ADDRESS REGISTER (LOWER 8 BITS) | ADDRESS REGISTER (LOWER 8 BITS) |
| BIT 7                           | BIT 6                           | BIT 5                           | BIT 4                           | BIT 3                           | BIT 2                           | BIT 1                           | BIT 0                           |
| 0                               | 0                               | 0                               | DA4                             | DA3                             | DA2                             | DA1                             | DA0                             |

│

Evaluates: MAX17843

## System Initialization

The MAX17843 EV kit daisy-chain is initialized using the controls provided in the main interface of the MAX17843 EV kit  software  GUI.  The  initialization  sequence  is  provided below to begin operation:

- 1) Verify jumper configuration. See the Device Startup section.
- 2) Uncheck the MAX17841 SHDN checkbox (Figure 1).
- 3) Click the Wake Up button below the checkbox to execute a sequence that will wake up the MAX17843 devices in the daisy-chain.
- 4) Select the address of the first device in the daisychain from the First Address drop-down list above the Hello All button (Figure 2), which can usually be left as 0x00.
- Refer to the HELLOALL Command section in the MAX17843 IC data sheet for additional details.
- 5) Click the Hello All button.
- This command sends out the HELLOALL command, along with the chosen first device ad -dress. It also determines how many devices are in the daisy-chain based on the address byte that was returned by the last device.
- 6) Click the Set First Address button (Figure 3).
- This control writes the address of the first device to the upper 8 bits of each device's 16-bit ADDRESS register. This control uses the WRITEALL command. This control also updates the Device Addresses grid, as shown in Figure 3.

The daisy-chain has been initialized once all devices have been  programmed  with  the  address  of  the  first  device. The  software  is  now  fully  operational,  with  all  active devices configurable. Refer to the UART Interface section in the MAX17843 IC data sheet for additional configura -tion recommendations.

## MAX17843 Evaluation Kit

## Grid Initialization

When the Set First Address sequence is complete, the software  updates  the  grids  on  the Device  Addresses Grid box (Figure 3).

## Device Addresses Grid

The Device Addresses grid is initialized after clicking the Set  First Address button  (Figure  3).  The  grid  contains the addresses of all detected devices in the daisy-chain. For  the  two-device  daisy-chain  procedure  with  a  start address of 0x00, the grid would be displayed as shown in Figure 3.

## Register Content

The Read/Write tab  in  the  MAX17843  EV  Kit  Software GUI (Figure 5) includes a box that displays the contents of the selected device registers. This section is updated to contain 'n' number of rows, where 'n' equals the total number of detected devices.

For a two-device daisy-chain, the register content box is configured with two rows, as shown in Figure 5.

## Device Communication

The following sections describe the methods to read and write  from  the  MAX17843  GUI.  For  information  on  how the commands are structured, refer to the MAX17843 IC data sheet.

Figure 5. MAX17843 EV Kit Software (Read/Write Tab)

<!-- image -->

│

## Write Registers

A specific device in the daisy-chain can be written to by using  the Read/Write  Device section  within  the Read/ Write tab shown in Figure 5. To perform a write to a specific register of a single device:

- 1) Select the device to be written to from the Device Index drop-down list.
- 2) Enter the register address of the desired register to be written to in the Register edit box.
- 3) Enter the hex value (####) into the Value edit box.
- 4) Click the Write Device button.

The Read/Write tab can also be used to write a desired value  into  the  active  register  of  all  the  devices  in  the daisy-chain. There are two options for performing a Write All . The first option is performed using the complete list of registers under the Select Register section (Figure 5).

- 1) Select the register to be written to from the complete list of registers by clicking on the name of the desired register.
- 2) Enter the hex value (####) into the edit box directly to the right of the Write All button (Figure 6).
- 3) Click the Write All button (Figure 6).

The second option to perform a Write All uses the Read All and Write All section (Figure 6) of the Read/Write tab.

- 4) Select the register to be written to by entering its address in the Register edit box under Write All section.
- 5) Enter the hex value (####) in the Value edit box directly above the Write All button.
- 6) Click the Write All button.

## Read Registers

A specific device in the daisy-chain can be read by using the Read/Write Device section within the Read/Write tab shown in Figure 6. To perform a read of a specific register of a single device:

- 1) Select the device to read from the Device Index drop-down list.
- 2) Enter the address of the desired register to be read in the Register edit box.
- 3) Click the Read Device button.

The Read/Write tab can also be used to read the active register  of  all  devices  in  the  daisy-chain. There  are  two options for performing a Read All . The first option is performed by clicking the name of the desired register from the complete list of registers (Figure 6).

- 1) Click on the register to be read from.
- 2) Click the Read All button above the register list.

The  second  option  for  performing  a Read All uses  the Read All and Write All sections (Figure 6) in the Read/ Write Device tab.

- 1) Select the register to be read by entering its address in the Register edit box under Read All section.
- 2) Click the Read All button.

Finally, a Read Block (Figure 6) is used to read multiple consecutive  registers  within  a  specified  device.  To  perform a read of a specific set of registers of a single device:

- 1) Select the device to be read from the Device Index drop-down list.
- 2) Enter the address of the first register in the Start Ad -dress edit box.
- 3) Enter the desired amount of registers to be read in the Block Size field.
- 4) Click the Read Block button.

Figure 6. MAX17843 Evaluation Kit Software (Read/Write Tab-Select Register from List and Write All)

<!-- image -->

## Table 5. Read Controls

| CONTROL NAME   | CONTROL TYPE   | FUNCTION                                                          |
|----------------|----------------|-------------------------------------------------------------------|
| Read Device    | Button         | Reads the active MAX17843 register of the active MAX17843 device. |
| Read All       | Button         | Reads the active MAX17843 register of all devices.                |

## Table 6. Scan Controls

| CONTROL NAME      | CONTROL TYPE   | FUNCTION                                     |
|-------------------|----------------|----------------------------------------------|
| StartADC Scanning | Checkbox       | When checked, a scan of theADC is initiated. |
| Single Scan       | Button         | Performs a singleADC scan.                   |
| Oversample Config | Drop-down list | Sets the desired number of oversampling.     |
| Polarity          | Drop-down list | Selects Unipolar or Bipolar mode.            |

## MAX17843 Evaluation Kit

## Register Tabs

The  device  registers  are  organized  into  two  tabs:  The MAX17843 Register Map tab  and Read/Write tab. The Read/Write Device tab provides full access to read/write to each device in the daisy-chain, whereas the MAX17843 Register  Map tab  provides  register  and  bit  information and the ability to read/write to the first MAX17843 in the daisy chain.

## Voltage Measurements Tab

The Voltage Measurements tab (Figure 7) displays the results for the ADC conversions on cells 1-12, as well as the  results  from  the  TOTAL,  MIN/MAX  (cells  with  minimum and maximum voltage) , BLOCK, AIN1, AIN2, and DIAG registers. The Enable All (MeasureEn) button  at the bottom-right side is used to enable ADC scanning of the associated measurement.

The scan section at the bottom-right side of the GUI provides controls for configuring the scan settings.

## STATUS Field

All device alerts are monitored under the STATUS field at the top of the MAX17843 EV Kit Software GUI (Figure 7). If a STATUS field is set to '1', it indicates a device or associated  external  circuit  error.  This  should  be  checked  by reading the STATUS Register (0x02) from the Read/Write tab. The STATUS register read details what needs to be done in case of a STATUS flag. Refer to the MAX17843 IC data sheet for details on the STATUS register.

## Measurement and Voltage Alerts

Alert  Status  (ALRTCELL,  ALRTOVCELL,  ALRTUVCELL): Refer  to  the Measurement Alerts and Voltage Alerts sections in the MAX17843 IC data sheet for additional information.

When  performing  a  read  of  these  alert  registers,  each alert must be cleared as described in the MAX17843 IC data sheet to continue with the evaluation.

Figure 7. MAX17843 Evaluation Kit Software (Voltage Measurements Tab)

<!-- image -->

## Evaluates: MAX17843

│

## MAX17843 Evaluation Kit

The undervoltage (ALRTUV) and overvoltage (ALRTOV) alerts can be individually enabled for any cell and auxiliary (AIN) input. The alert enables are in the ALRTOVEN (0x14) and ALRUVTEN (0x15) registers. The ALRTCELL Register Alerts (0x04) are generated from the results of ALRTOVCELL (0x05) or ALRTUVCELL (0x06) Registers. Thus, to  disable  an ALRTCELL alert,  both  the  overvoltage  and  under  voltage  alerts  for  that  cell  must  be  disabled from ALRTOVEN Register (0x14) and ALRTUVEN Register (0x15) respectively.

## Table 7. Configuration Settings

| General-Purpose I/O (GPIO)             | General-Purpose I/O (GPIO)                              | General-Purpose I/O (GPIO)                                          |
|----------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------|
| GPIO as Input                          | Register 0x11                                           | Configures the GPIO pin as an input; bits D[15:12]                  |
| GPIO as Output                         | Register 0x11                                           | Configures the GPIO pin as an output; bits D[15:12]                 |
| GPIO Logic State                       | Register 0x11                                           | Displays current state of the GPIO pin; bits D[15:12]               |
| ADC Acquisition Time (ACQCFG)          | ADC Acquisition Time (ACQCFG)                           | ADC Acquisition Time (ACQCFG)                                       |
| Acquisition Time                       | Register 0x19                                           | 6-bit acquisition time for AUXIN1/AUXIN2                            |
| Watchdog Configuration (WATCHDOG)      | Watchdog Configuration (WATCHDOG)                       | Watchdog Configuration (WATCHDOG)                                   |
| Timer Value                            | Register 0x18                                           | Sets the cell-balancing timer                                       |
| Timer Pre-divider                      | Register 0x18                                           | Sets the step size of the cell-balancing timer                      |
| Device Configuration (DEVCFG)          | Device Configuration (DEVCFG)                           | Device Configuration (DEVCFG)                                       |
| Scan Timeout                           | Register 0x13                                           | Enables/disables the watchdog timeout                               |
| Packet Error Checking                  | Register 0x11                                           | Enables/disables the packet error checking                          |
| Double Buffering                       | Register 0x10                                           | Enables/disables double buffering of the measurement registers      |
| ADC Data Path Test                     | Register 0x57 Register 0x58 Register 0x59 Register 0x5A | Enables/disablesADC data-path diagnostic test                       |
| Alive Counter                          | Register 0x10                                           | Enables/disables alive counter                                      |
| Measurement Enable (MEASUREEN)         | Measurement Enable (MEASUREEN)                          | Measurement Enable (MEASUREEN)                                      |
| CELL1-CELL12                           | Register 0x12                                           | Selects which cell to enable for measurement                        |
| Set All >>                             | Register 0x12                                           | Enables all cells for measurement                                   |
| Clear All >>                           | Register 0x12                                           | Disables all cells for measurement                                  |
| BLOCK                                  | Register 0x12                                           | Enables block-voltage measurement                                   |
| AIN1, AIN2                             | Register 0x12                                           | Selects whichAUX (i.e., AUXIN1 or AUXIN2) to enable for measurement |
| TOPCELL                                | TOPCELL                                                 | TOPCELL                                                             |
| TOPCELL Position                       | Register 0x1E                                           | Configures the top cell position if less than 12 channels are used  |
| Balancing Switch Discharge (BALSWDCHG) | Balancing Switch Discharge (BALSWDCHG)                  | Balancing Switch Discharge (BALSWDCHG)                              |
| BALSWDCHG                              | Register 0x1D                                           | Balancing Switch Discharge configuration                            |

│

Evaluates: MAX17843

## Configuration Settings

The configuration of different settings of the MAX17843 can be classified as follows (Table 7 lists the main configurations  and  their  functions):  General-Purpose  I/O (GPIO),  ADC  Acquisition  Time  (ACQCFG),  Watchdog Configuration (WATCHDOG), Device Configuration (DEVCFG),  Measurement  Enable  (MEASUREEN),  top cell (TOPCELL) and balancing switch discharge configuration (BALSWDCHG).

## MAX17843 Evaluation Kit

## BALSW

Some  of  the  BALSW  configurations  frequently  used include:  CELLTEST,  BALSWEN,  balancing  diagnostic (BALDIAGCFG1), and Balancing-Switch Thresholds (see Table 8).

## Model/Version/ADC Test

The content of the device ADDRESS register (0x01) and device model VERSION (0x00) register can also be read.

## Table 8. Cell and Balancing-Switch Controls

| Cell Input Test Switches (CELLTEST)    | Cell Input Test Switches (CELLTEST)    | Cell Input Test Switches (CELLTEST)          |
|----------------------------------------|----------------------------------------|----------------------------------------------|
| CTSTEN0-CTSTEN12                       | Register 0x52                          | Enables unconnected cell-input detection     |
| Cell-Balancing Switch Enable (BALSWEN) | Cell-Balancing Switch Enable (BALSWEN) | Cell-Balancing Switch Enable (BALSWEN)       |
| BAL1-BAL12                             | Register 0x1A                          | Enables external cell balancing              |
| Balancing Diagnostic (BALDIAGCFG1)     | Balancing Diagnostic (BALDIAGCFG1)     | Balancing Diagnostic (BALDIAGCFG1)           |
| CELLxxEN_M                             | Register 0x1C                          | Selects which cell to enable for measurement |
| Cell Input Mux Selection               | Register 0x51                          | Selects multiplexer (HV-MUX, ALT-MUX)        |
| Scan Polarity                          | Register 0x13                          | SelectsADC mode (unipolar, bipolar)          |
| Balancing-Switch Thresholds            | Balancing-Switch Thresholds            | Balancing-Switch Thresholds                  |
| Short-Circuit Threshold                | Register 0x4B                          | Sets the threshold voltage                   |
| Voltage Low Threshold                  | Register 0x4C                          | Sets the threshold voltage                   |
| Voltage High Threshold                 | Register 0x4D                          | Sets the threshold voltage                   |

## Table 9. VERSION Register

| BIT 15   | BIT 14   | BIT 13   | BIT 12   | BIT 11    | BIT 10    | BIT 9     | BIT 8     |
|----------|----------|----------|----------|-----------|-----------|-----------|-----------|
| 1        | 0        | 0        | 0        | 0         | 1         | 0         | 0         |
| BIT 7    | BIT 6    | BIT 5    | BIT 4    | BIT 3     | BIT 2     | BIT 1     | BIT 0     |
| 0        | 0        | 1        | 1        | VER [3:0] | VER [3:0] | VER [3:0] | VER [3:0] |

│

Evaluates: MAX17843

You can read the ID1 (0x0D) and ID2 (0x0E) registers for verification of valid device IDs.

Model  and  Version  Number:  The  lower  nibble  of  the VERSION register (VER [3:0]) contains the IC's die ver -sion number. The upper 12 bits (MOD [15:4]) contain the model number, which is set t0 0x843 (1000 01000011). The VERSION register is a read-only register.

## MAX17843 Evaluation Kit

## ADC Scan

An  ADC  scan  measures  all  enabled  cell  inputs,  all enabled  auxiliary  inputs,  and  the  self-diagnostics  channel  (if  enabled).  The  acquisition  is  completed  once  the SCANDONE bit  in  the  SCANCTRL  register  is  set.  The DEVCFG1  register  (0x10)  is  used  to  configure  which ADC  is  selected.  The  default  is  the  ADC1.  ADC2  can be selected from ADCSELECT bit in DEVCFG1 register (0x10). The following procedure outlines the steps to set up and initiate single or continuous ADC scanning.

## Setup:

- Enable the cells to measure
- Enable the self-diagnostics and auxiliary inputs to measure

Figure 8. MAX17843 Evaluation Kit Software (Voltage Measurements Tab-Single Scan)

<!-- image -->

## Initiate a Single ADC Scan (Figure 8):

- Select the Voltage Measurements tab
- Click the Single Scan button

Note: The SCANDONE bit is automatically set before a read is done on the Voltage Measurements tab

## Initiate Continuous ADC Scanning (Figure 9):

- Select the Voltage Measurements tab.
- Check the Start ADC scanning checkbox.

Note: T o  save  the  data  during  a  continuous ADC  scan, perform the steps in the Log Scanned Data section.

│

Figure 9. MAX17843 Evaluation Kit Software (Voltage Measurements Tab-Start ADC Scanning)

<!-- image -->

## MAX17843 Evaluation Kit

## Log Scanned Data

The MAX17843 EV kit software allows the data measured during continuous ADC scanning to be saved to file. This feature is available by selecting the File | Log Scan Data menu item. The steps below explain how to setup data logging:

- Perform the steps listed in the ADC Scan section.
- Select the File | Log Scan Data menu item. The window shown in Figure 10.
- Enter the number of ADC scans to log and the file path and root name (Figure 11), then click the OK button.
- Once n number of scans has completed, data can be retrieved from the File Path location. The file name is appended with date and time stamp.

At the completion of this process, data logging is disabled, but the continuous ADC scanning continues until the Start ADC Scanning checkbox is unchecked. The file generated by the software logs the measured data of the enabled channels for all devices in the daisy-chain.

Figure 10. MAX17843 Evaluation Kit Software (File Menu Item-Log Scan Data)

<!-- image -->

│

Figure 11. MAX17843 Evaluation Kit Software (Voltage Measurements Tab-Enter Number of Scans and Choose File Path Dialog Box)

<!-- image -->

## MAX17843 Evaluation Kit

## Save/Load Register Configuration

The  GUI  features  a Save  Register  Configuration and Load Register Configuration function. This allows all current register configurations and GUI control settings to be saved and loaded later. When saving, the software first performs a read of all the registers of each device in the daisy-chain  to  obtain  their  current  configurations.  Once complete, a Save All Data dialog box appears (Figure 12) asking for a file name and type. When loading, a Load Configuration file  window  appears  asking  for  a  file  to open. The load function writes the data from the file to the registers of all the devices in the daisy-chain.

## PEC Byte

The  MAX17843  EV  kit  software  supports  packet-errorchecking (PEC) display by implementing a CRC-8 algorithm  to  maintain  data  integrity  with  the  devices  in  the daisy-chain. The software generates the PEC byte when performing a write to a MAX17843 device and verifies the PEC byte received from the devices after a read operation. For details on how to make a PEC calculation, refer to PEC Errors section in the MAX17843 IC data sheet.

Figure 12. MAX17843 Evaluation Kit Software (Voltage Measurements Tab-Save/Load Register Configuration)

<!-- image -->

│

Evaluates: MAX17843

Figure 13. MAX17843 Evaluation Kit Software (Voltage Measurements Tab-Save Register Configuration Dialog Box)

<!-- image -->

## MAX17843 Evaluation Kit

## Detailed Description of Hardware

The MAX17843 evaluation kit (EV kit) demonstrates the capabilities  of  the  MAX17843  12-channel,  high-voltage smart sensor data-acquisition interface IC. Vertical headers (P2-P6) allow for the connection of multiple EV kits, supporting a 32-device (max) daisy-chain capability.

The MAX17843 device can be configured to operate with 3-12 battery cells. The cells can be directly connected to the EV kit, or can be routed through the P1 header. See the Battery Cells section. The EV kit also facilitates utilizing the auxiliary pins and accessing the general-purpose input/output (GPIO) pins.

## Device Startup

To start up the EV kit, apply 9V (min) across the PACK+ and  PACK-  PCB  pads  and  then  follow  the  startup sequence below:

- 1) Connect the six, 2-wire, blue crossover cables, as follows:
- Connect P1 on the MAX17841B EV kit to P6 on the first MAX17843 EV kit.
- Connect P2 on the MAX17841B EV kit to P5 on the first MAX17843 EV kit.
- Connect P2 on the first MAX17843 EV kit to P6 on the second MAX17843 EV kit.
- Connect P3 on the first MAX17843 EV kit to P5 on the second MAX17843 EV kit.
- 2) Connect the single, 2-wire red loopback cable from P2 to P3 of the second MAX17843 EV kit.
- 3) Connect a pack voltage across the PACK+ and PACK- pads.
- 4) Connect a battery voltage across the BAT0-BAT12 pads (battery cells or external power supply).

## Table 10. Switch Descriptions (SW1)

| SW1      | CELL-STACK VOLTAGE                 | CONNECTION                                        |
|----------|------------------------------------|---------------------------------------------------|
| All off* | 2-12 battery cells                 | Cells cascaded between BAT0-BAT12                 |
| All on   | DC power supply to emulate battery | See step 10 in the Quick Start, Procedure section |

Evaluates: MAX17843

- 5) Connect the MINIQUSB command module to the MAX17841B EV kit's J3 and J4 headers.
- 6) Using the provided USB cable, connect the MINIQUSB command module to a PC.
- 7) Start the MAX17843 EV kit software.
- 8) Ensure that the MAX17841 SHDN checkbox (Figure 1) on the MAX17843 software GUI is not checked.
- 9) Click the Wake Up button in the MAX17843 software.

Note: The MAX17841B's SHDN pin is pulled up to +3.3V by the MINIQUSB's K1 GPIO pin.

Once the wake-up routine is completed, the SHDN pin of each MAX17843 device on the daisy-chain should rise to approximately  8.5V.  The  devices  are  now  enabled  and ready for communication.

## Battery Cells

When  evaluating  the  MAX17843  EV  kit,  the  cell-stack voltage is provided by cascading 3-12 battery cells, or by applying a DC voltage between the BAT0-BAT12 pads. The following sections explain how to configure the EV kit and connect the battery cells.

## Cell Configuration

- 1) Configure switch SW1 according to Table 10.
- 2) When using a DC power supply, the cascaded 2kΩ resistors provide divided-down voltages to the cell input pins. This, in effect, emulates the connection of 12 battery cells.
- 3) Configure jumpers CELL2-CELL12 according to the number of battery cells (actual or emulated) connected to the system (see Table 11).

│

## MAX17843 Evaluation Kit

## Table 11. Jumper Descriptions (CELL2-CELL12)

| NO. OF CELLS   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   |
|----------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|
| NO. OF CELLS   | CELL 2           | CELL 3           | CELL 4           | CELL 5           | CELL 6           | CELL 7           | CELL 8           | CELL 9           | CELL 10          | CELL 11          | CELL12           |
| 3              | Off              | Off              | On               | On               | On               | On               | On               | On               | On               | On               | On               |
| 4              | Off              | Off              | Off              | On               | On               | On               | On               | On               | On               | On               | On               |
| 5              | Off              | Off              | Off              | Off              | On               | On               | On               | On               | On               | On               | On               |
| 6              | Off              | Off              | Off              | Off              | Off              | On               | On               | On               | On               | On               | On               |
| 7              | Off              | Off              | Off              | Off              | Off              | Off              | On               | On               | On               | On               | On               |
| 8              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | On               | On               | On               | On               |
| 9              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | On               | On               | On               |
| 10             | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | On               | On               |
| 11             | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | On               |
| 12*            | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              | Off              |

## Cell Connections

When using actual or emulated battery cells, keep in mind the following cell-connection requirements (see Table 12 for an 8-cell example):

- 3 cells (min) must be connected to each MAX17843 device
- 12 cells (max) can be connected to each MAX17843 device
- The BAT0\_ to BAT1\_ cell inputs must always be populated with a battery cell
- The remaining cells are populated between BAT 1\_ and BAT 2\_, BAT 2\_ and BAT 3\_, and so on, until all cells are connected
- All unused cell inputs must be shorted together, using the appropriate CELL2-CELL12 jumpers

When  DC  power  supplies  are  used  to  emulate  battery cells,  set  their  output  in  the  9V  to  60V  range.  Connect the power supplies between the PACK+ and PACK- PCB pads and ensure that a shunt is installed on jumpers JU14 and JU19.

When using actual battery cells, connect them across the appropriate BAT PCB pads, or route them through the P1 connector (see Table 13).

## Table 12. 8-Cell Connections

| CELL   | + TERMINAL               | - TERMINAL               |
|--------|--------------------------|--------------------------|
| 1      | BAT1_                    | BAT0_                    |
| 2      | BAT2_                    | BAT1_                    |
| 3      | BAT3_                    | BAT2_                    |
| 4      | BAT4_                    | BAT3_                    |
| 5      | BAT5_                    | BAT4_                    |
| 6      | BAT6_                    | BAT5_                    |
| 7      | BAT7_                    | BAT6_                    |
| 8      | BAT8_                    | BAT7_                    |
| -      | BAT9_shorted to BAT8_    | BAT9_shorted to BAT8_    |
| -      | BAT10_shorted to BAT9_   | BAT10_shorted to BAT9_   |
| -      | BAT11_shorted to BAT10_  | BAT11_shorted to BAT10_  |
| -      | BAT12_ shorted to BAT11_ | BAT12_ shorted to BAT11_ |

│

## MAX17843 Evaluation Kit

## Daisy-Chain

The MAX17843 EV kit includes a UART bus system that allows cascading of up to 32 MAX17843 devices. The EV kit  facilitates  the  device  cascading  by  routing  the  UART bus  between  the  P2/P3  and  P5/P6  connectors.  These connectors  are  used  to  cascade  multiple  EV  kit  boards together. Table 14 provides the pinouts for the inter board connectors on the EV kit.

## Auxiliary Inputs

The auxiliary inputs of the MAX17843 devices are routed to jumpers JU0 and JU1. This allows the auxiliary analog inputs to measure external resistance-temperature detector  (RTD)  components.  A  negative  temperature  coefficient (NTC) RTD can be configured with the AUXIN1 or AUXIN2 analog  inputs  to  accurately  monitor  module  or battery-cell temperature. When the auxiliary inputs are not used, a shunt can be installed on its associated jumper, providing a known pin state (AGNDA).

## Maxim Command Module (MINIQUSB)

The MINIQUSB module is powered by the host PC's USB port.  Refer  to  the  MINIQUSB  User  Guide  for  additional information.  See  Table  19  for  a  pin-to-pin  association between  the  MINIQUSB  module  and  the  EV  kit's  J3 header.

## Table 13. P1 Header Cell Connections

|   CELL | + TERMINAL   | - TERMINAL   |
|--------|--------------|--------------|
|      1 | P1-1         | P1-3         |
|      2 | P1-3         | P1-5         |
|      3 | P1-5         | P1-7         |
|      4 | P1-7         | P1-9         |
|      5 | P1-9         | P1-11        |
|      6 | P1-11        | P1-13        |
|      7 | P1-13        | P1-15        |
|      8 | P1-15        | P1-17        |
|      9 | P1-17        | P1-19        |
|     10 | P1-19        | P1-21        |
|     11 | P1-21        | P1-23        |
|     12 | P1-23        | P1-25        |

## Table 14. Headers (P2/P3, P5/P6)

| PIN       | NET    |
|-----------|--------|
| P2 HEADER |        |
| 1         | TXUP_A |
| 2         | TXUN_A |
| P3 HEADER |        |
| 1         | RXUP_A |
| 2         | RXUN_A |
| P5 HEADER |        |
| 1         | TXLN_A |
| 2         | TXLP_A |
| P6 HEADER |        |
| 1         | RXLN_A |
| 2         | RXLP_A |

## Table 15. Auxiliary Jumpers (JU0, JU1)

| AUXILIARY INPUT (DEVICE)   | JUMPER*   |
|----------------------------|-----------|
| AUXIN1A (U1)               | JU0       |
| AUXIN2A (U1)               | JU1       |

## Table 16. MAX17841B EV Kit J3 Header

|   PIN | NAME     |
|-------|----------|
|     1 | GND      |
|     2 | INT      |
|     3 | GPIO7    |
|     4 | COMP_OUT |
|     5 | GPIO8    |
|     6 | ALRMUV   |
|     7 | DIN      |
|     8 | ALRMOV   |
|     9 | CS       |
|    10 | MCLR     |
|    11 | SCLK     |
|    12 | USHDN    |
|    13 | DOUT     |
|    14 | NC       |
|    15 | VDD      |
|    16 | NC       |

│

## MAX17843 Evaluation Kit

## 16-Pin Header Footprints

Table  20  provides  the  complete  pinouts  for  each  of the  16-pin  single-row  headers  (J1-J4)  provided  on  the MAX17842 EV kit. Between the headers is a MAX17843 device that is fanned out to the four 16-pin headers.

## Table 17. MAX17843 EV Kit Headers (J1-J4)

| PIN NO.   | PIN NAME   | PIN NAME   | PIN NAME   | PIN NAME   |
|-----------|------------|------------|------------|------------|
| PIN NO.   | J1         | J2         | J3         | J4         |
| 1         | NC1        | GPIO0      | SW0        | SW8        |
| 2         | AGND       | NC         | C0         | C8         |
| 3         | SHDNL      | NC19       | SW1        | SW9        |
| 4         | AGND       | TXLP       | C1         | C9         |
| 5         | VAA        | TXLN       | SW2        | SW10       |
| 6         | TXUN       | VDDL2      | C2         | C10        |
| 7         | TXUP       | AGND/GNDL2 | SW3        | SW11       |
| 8         | AGND/GNDL1 | RXLP       | C3         | C11        |
| 9         | VDDL1      | RXLN       | SW4        | SW12       |
| 10        | AGND/GNDL3 | NC26       | C4         | C12        |
| 11        | VDDL3      | NC27       | SW5        | VBLKP      |
| 12        | RXUN       | CTG        | C5         | NC60       |
| 13        | RXUP       | AUXIN2     | SW6        | HV         |
| 14        | GPIO3      | AUXIN1     | C6         | DCIN       |
| 15        | GPIO2      | AGND       | SW7        | CPP        |
| 16        | GPIO1      | THRM       | C7         | CPN        |

│

## J4 and J5 Headers

The J4 and J5 header footprints provide direct access to the MAX17843 IC.

Evaluates: MAX17843

## MAX17843 Evaluation Kit

## Test Procedures

For  all  diagnostics  and  other  testing  details,  refer  to MAX17843 IC data sheet. Following are various test procedures for guidance.

## A. Overvoltage- and Undervoltage-Threshold Testing

With the ASIC communicating normally to the host in a single ASIC configuration, configure the OV and UV set and clear thresholds in the threshold registers (OVTHSET and UVTHSET) of MAX17843 and check if the appropriate  alerts  are  set.  The  detailed  procedures  follow  (also see Figure 14 and Table 12).

A variable 80V, 10A power supply is used to power up the MAX17843; the module voltage was initially  set  to  36V (3V/cell).

## Test Procedure:

- 1) ASIC ready to measure (cell-measurement channels enabled, device addresses configured).
- 2) Start measurement.
- 3) Read cell voltages.
- 4) Enable alerts for all cells in ALRTOVEN and ALRTUVEN registers.
- 5) Confirm cell voltages are as expected by clicking Single Scan button in the Voltage Measurements tab on the screen.
- 6) Confirm that STATUS, ALRTCELL, ALRTOVCELL, and ALRTUVCELL registers read 0x0000 by reading the register values.
- 7) Either import or set the following configuration in the Read/Write Device tab:
- OVTHSET (Overvoltage Set) configured to 4.2V (Hex = 0xD708).
- OVTHCLR (Overvoltage Clear) configured to 3.8V (Hex = 0xC28C).
- UVTHSET (Undervoltage Set) configured to 2.4V (Hex = 0x7AE0).
- UVTHCLR (Undervoltage Clear) configured to 2.7V (Hex = 0x8A3C).
- Some voltage thresholds and their corresponding hexadecimal conversion are given for reference (see Table 21).

## Evaluates: MAX17843

## Table 18. Voltage Thresholds

Figure 14. Programmable Overvoltage and Undervoltage Thresholds Diagram

|   VOLTAGE THRESHOLD (V) | HEXADECIMAL   |
|-------------------------|---------------|
|                     1.0 | 3330          |
|                     1.5 | 4CCC          |
|                     2.0 | 6664          |
|                     2.5 | 8000          |
|                     3.0 | 9998          |
|                     3.5 | B330          |
|                     4.0 | CCCC          |
|                     4.5 | D708          |

<!-- image -->

│

## MAX17843 Evaluation Kit

- 8) Write these values in the appropriate registers using the Write All button in the Read/Write Device tab.
- 9) Select the registers and confirm that values are writ -ten appropriately by refreshing a Single Scan and then reading the register content.
- 10)  Ensure all Overvoltage Alert Enables and Undervoltage Alert Enables are configured properly.
- 11)  Select the ALRTOVEN and ALRTUVEN registers and confirm the registers are updated appropriately after a Scan refresh.
- 12)  Steadily increase the supply voltage up to approximately 52V so that each cell reads greater than 4.2V.
- 13)  Refresh the new readings on the Voltage Measure -ments tab.
- 14)  Refresh the Scan .
- 15)  The ALRTOV bit in the STATUS register should be set to '1'. Also, all the ALRTOV [12:1] in the ALRTOVCELL register should be set to '1' and bits ALRTCELL [12:1] in ALRTCELL register should be set to '1'.
- 16)  In the MAX17843 Evaluation Kit Software GUI, at the top OV flag also sets to 1 under the OV field (Figure 15).
- 17)  Now, steadily decrease the supply voltage to 42V (3.5V/cell).
- 18)  Repeat steps 13 and 14.
- 19)  The ALRTOV bit in the STATUS register should be cleared to '0'. Also, all the ALRTOV [12:1] in the ALRTOVCELL register should .be set to cleared and bits ALRTCELL [12:1] in ALRTCELL register should be set to cleared to '0'.
- 20)  In the MAX17843 Evaluation Kit Software GUI, at the top OV flag also gets cleared to 0 under the OV field (Figure 16).
- 21)  Decrease the supply voltage steadily down to 24V so that each cell reads less than 2.4V.
- 22)  Refresh the new readings on the Voltage Measure -ments tab.
- 23)  Refresh the Scan .
- 24)  The ALRTUV bit in the STATUS register should be set to '1'.
- 25) Also, all the ALRTUV [12:1] in the ALRTUVCELL reg -ister should be set to '1' and bits ALRTCELL [12:1] in ALRTCELL register should be set to '1'.
- 26)  In the MAX17843 Evaluation Kit Software GUI, at the top UV flag also gets set to 1 under the UV field.
- 27)  Steadily increase the supply voltage to 36V (3.0V/ cell).
- 28)  Repeat steps 22 and 23.
- 29)  The ALRTUV bit in the STATUS register should be cleared to '0'. Also, all the ALRTUV [12:1] in the ALRTUVCELL register should be set to cleared and bits ALRTCELL [12:1] in ALRTCELL register should be cleared to '0'.
- 30)  In the MAX17843 Evaluation Kit Software GUI, at the top UV flag also should be cleared to '0' under the UV field.

## Evaluates: MAX17843

This  verifies  the OV/UV  Set and Clear thresholds  for MAX17843. The OV or UV alert can be selected for any specific cell the user wants to monitor the voltage.

│

Evaluates: MAX17843

Figure 15. MAX17843 Evaluation Kit Software (Voltage Measurements Tab-OV Flag)

<!-- image -->

Evaluates: MAX17843

Figure 16. MAX17843 Evaluation Kit Software (Voltage Measurements Tab-OV Flag Cleared)

<!-- image -->

## MAX17843 Evaluation Kit

## B) Cell-Balancing Testing

With the ASIC communicating normally to the host in a single ASIC configuration, cell balancing, along with the Watchdog  Timer  configuration  is  tested.  The  detailed procedure follows:

12 Li-Ion cells were connected to the MAX17843 device. Module voltage was 45.55V.

## Test Procedure:

- 1) ASIC ready to measure (cell measurement channels enabled, device addresses configured)
- 2) Confirm cell voltages are as expected by clicking Single Scan .
- 3) Enable and configure the Odd-balancing switches from the BALSWEN .
- 4) Confirm the BALSWEN register reads 0x0555 by reading the register value (all the odd cell-balancing switches will be turned on).
- 5) Go to the Voltage Measurements tab and read the voltages.
- 6) All the odd cell voltages will show a drop in the voltages by a few (this drop depends on battery impedance and the parasitic I*R drop in the path of that measurement).
- 7) Enable and configure the even balancing switches from the BALSWEN .
- 8) Confirm the BALSWEN register reads 0x0AAA by reading the register value (all the even cell-balancing switches will be turned on).
- 9) Go to the Voltage Measurements tab and read the voltages.
- 10)  All the even-cell voltages will show a drop in the voltages (this drop depends on battery impedance and the parasitic I*R drop in the path of that measurement).

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17843EVKIT# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX17843

## C) Die Temperature Diagnostic Testing

With the ASIC communicating normally to the host in a single ASIC configuration, die temperature diagnostic test was  carried  out.  The  procedure  regarding  the  same  is listed as follows:

12  Li-Ion  cells  were  connected  to  MAX17843  device. Module voltage is 45.55V.

## Test Procedure:

- 1) ASIC ready to measure (cell-measurement channels enabled, device addresses configured).
- 2) Confirm cell voltages are as expected in the Voltage Measurements tab.
- 3) In the Read/Write tab, configure the DIAGSEL [2:0] bits in the DIAGCFG register (0x51) to select the die temperature. This is done by doing a WRITEALL of the value 0x0006 into the DIAGCFG register (0x51).
- 4) Select the Die temperature option (0b110) from the register and configure the device.
- 5) The user will see the result by reading the DIAG register (0x50).
- 6) In this case, since the part was tested at room temperature, the DIAG showed a value of 21.86°C when converted from the DIAG register results.
- 7) Refer to the Die Temperature Measurement section in the MAX17843 IC data sheet for die temperature conversions from results of DIAG register into °C.

## MAX17843 Evaluation Kit

MAX17843 EV Kit Bill of Materials

Evaluates: MAX17843

| COMPONENT (* = Sampled)                                                  | *                                                                                                                                                                                                                                                                                                                                                                                              | * *                           | * *                                    |                     | *                                      |                                        | * *                                     |                             |                                 |               |        |                         |      |                |                 |                     |              |
|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------------------------------------|---------------------|----------------------------------------|----------------------------------------|-----------------------------------------|-----------------------------|---------------------------------|---------------|--------|-------------------------|------|----------------|-----------------|---------------------|--------------|
| Y = Lead-free & RoHS Compliant R = RoHS Compliant Only N = Non-Compliant | Y                                                                                                                                                                                                                                                                                                                                                                                              | Y Y                           | Y Y                                    |                     | Y                                      |                                        | Y Y                                     | Y                           | Y                               | Y             | Y      |                         | Y    |                | Y               |                     |              |
| PART NO.                                                                 | EH0400 EC2493 ECM0581 EH1172                                                                                                                                                                                                                                                                                                                                                                   | ECM0602 ECM0711               | ECM0826 ECM0122                        | ECM0912             | ECM0643                                | ECM0864 ECM0581                        | ECM0799 ECM0826 ECM0896                 | ECM0445 ED0781              | ED0884                          | ED0782 ED0885 | EH0384 | EH0205                  |      | EH0072         | EBUSS20W        | EH1174 ER0512061000 | ER0506031001 |
| DESCRIPTION                                                              | Black ceramic capacitors, auto grade (1206) ceramic capacitors (0603) (0603) (1210) automotive grade (0805) (0402) automotive grade (0603) (1210) automotive grade (0603) automotive grade (0805) (1206) automotive grade (0805) automotive grade (0603) ceramic capacitors (0603) (0603) POWERDI®123 (SOD323) shaped loops (0.25' off the PC board) PCB Receptacle, 1.50mm pitch 1.50mm pitch | capacitors ceramic capacitors | ceramic capacitors, ceramic capacitors | ceramic capacitors, | ceramic capacitors ceramic capacitors, | ceramic capacitors, ceramic capacitors | ceramic capacitors, ceramic capacitors, | ceramic capacitors (SOT-23) | protection diodes Cathode Diode |               | Red    | headers (0.1in centers) |      |                | formed into 'U' | PCB Receptacle,     |              |
| REFERENCE DESIGNATOR                                                     | C58, C83 C102 C67-C78 C81 C1003 D12, D13 VDDL1, VDDL1, VDDL3, VDDL4, GPIO3_A, GPIO2_A, GPIO1_A, GPIO0_A, HV, RXUP, RXUN, TXUN_A, RXUP_A, RXUN_A, RXLP, RXLN, TXLN_A, RXLP_A, RXLN_A, /SHDNL\ JU3, JU14, JU15,JU16, JU17,JU18, JU19 CELL4, CELL5, CELL6, CELL7, CELL8, CELL11, CELL12 BAT0-BAT12, AGND P8,P9                                                                                    |                               |                                        |                     |                                        |                                        | C79,                                    | C1002, D11                  |                                 |               |        |                         | JU2, | CELL3, CELL10, | PACK-,          | P6,                 |              |

│

## MAX17843 Evaluation Kit

MAX17843 EV Kit Bill of Materials (continued)

Evaluates: MAX17843

| COMPONENT (* = Sampled)                                                  |                           |                                                                                  |                                                                          |                                                        |                                                                                                  |                                                      | *                                                                         |                                                    |                                                                                                                                              |                                                                                                                                               |                                            |                                                                                     |                                                                                                                                    |                                                                                                                                                                      |                                                                    |
|--------------------------------------------------------------------------|---------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| Y = Lead-free & RoHS Compliant R = RoHS Compliant Only N = Non-Compliant |                           |                                                                                  |                                                                          |                                                        |                                                                                                  | Y                                                    | Y                                                                         | Y                                                  |                                                                                                                                              |                                                                                                                                               |                                            | Y                                                                                   | Y                                                                                                                                  |                                                                                                                                                                      |                                                                    |
| PART NO.                                                                 | ER0106031001              | ER1073 ER0106031002 ER0504021503                                                 | ER0506030R00 ER0506031003                                                | ER0998 ER0112061000                                    | ER01120626R1 ER0512060R00                                                                        | ER0112061501 ER01080510R0                            | EH0834 MAX17843BGCB/V+ EQ1344                                             | EH0071 MAX17843EVKIT#                              |                                                                                                                                              |                                                                                                                                               |                                            |                                                                                     |                                                                                                                                    |                                                                                                                                                                      | ER0512060R00                                                       |
| DESCRIPTION                                                              | 1kΩ ±1%, resistors (0603) | 12Ω, 1W resistors (2512) 10kΩ ±1%, resistors (0603) 150kΩ ±5% resistors (0402)   | 0Ω resistors (0603) 100kΩ ±5%, resistors (0603)                          | 2.0kΩ ±0.1% resistors (0805) 100Ω ±1% resistors (1206) | 26.1Ω ±1% resistors (1206) 0Ω resistors (1206)                                                   | 1.5kΩ ±1% resistors (1206) 10.0Ω ±1% resistor (0805) | 12 position SPST DIP switches Daisy-Chainable Analog Front End (64L LQFP) | FMB3906A Dual PNP SSOT-6 Shunts PCB: MAX17843EVKIT | Not Installed, ceramic capacitors (2220) Not Installed 0.01uF ±5%, 50V C0G ceramic capacitors (0603) Not Installed, ceramic capacitor (1210) | Not Installed 2.2uF ±10%, 100V X7R ceramic capacitors (1210) Not installed, ceramic capacitors (0603) Not installed, ceramic capacitor (0805) | Not installed, 3 terminal capacitor (0805) | Not installed, zener diodes (SOD123) Not Installed 500mW, 4.3V Zener Diode (SOD323) | Not installed, Unidirectional ESD protection diodes Not installed, 100V, 1A Shottcky diode (SOD123-FL) 1A, 150V diodes POWERDI®123 | Not installed, 16 pin receptacles (0.1in centers) Not installed, 14-pin dual row shrouded (7x2) header (0.1 in centers) Not installed, Automotive common mode filter | Not Installed, 0Ω resistors (1206) Not installed, resistors (0603) |
| QTY REFERENCE DESIGNATOR                                                 | R3-R15                    | R16-R27, R30 R28, R29, R56, R57, R60, R61, R64, R65, R75, R76 R32, R33, R34, R35 | R36, R37, R38, R39, R79, R95, R105, R106, R111, R1016 R40, R62, R63, R66 | R42-R53 R31, R41, R58, R59,                            | R54, R55, R77, R78, R67, R68, R70, R72 R69, R71, R83, R84, R85, R86, R93, R94 R73, R74, R81, R82 | R110 SW1 U1                                          | U2, U3                                                                    | - -                                                | C4 C19, C20 C22 C26                                                                                                                          | C28-C39, C65, C66, C85, C100, C101, C103, C86, C87, C90, C91 C61, C62, C92, C93 C94,                                                          | C95, C80, C82 D5, D6                       | D3, D4, D8                                                                          | D15-D26 D30, D31, D32, D33 D34                                                                                                     | J1, J2, J3, J4 J6 L3, L4                                                                                                                                             | R97, R101 R98, R99, R108, R109, R1014, R1015, R112                 |

│

## MAX17843 EV Kit Schematic

<!-- image -->

│

## MAX17843 EV Kit Schematic (continued)

<!-- image -->

## MAX17843 EV Kit Schematic (continued)

<!-- image -->

## MAX17843 EV Kit Schematic (continued)

<!-- image -->

│

## MAX17843 EV PCB Layouts

MAX17843 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX17843 EV PCB Layouts (continued)

MAX17843 EV Kit PCB Layout-Top Pastemask

<!-- image -->

## MAX17843 EV PCB Layouts (continued)

<!-- image -->

MAX17843 EV Kit PCB Layout-Top Soldermask

│

## MAX17843 EV PCB Layouts (continued)

MAX17843 EV Kit PCB Layout-Component Side

<!-- image -->

│

## MAX17843 EV PCB Layouts (continued)

<!-- image -->

MAX17843 EV Kit PCB Layout-Layer 2 (GND)

│

## MAX17843 EV PCB Layouts (continued)

MAX17843 EV Kit PCB Layout-Layer 3 (PWR)

<!-- image -->

│

## MAX17843 EV PCB Layouts (continued)

MAX17843 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## MAX17843 EV PCB Layouts (continued)

MAX17843 EV Kit PCB Layout-Bottom Soldermask

<!-- image -->

│

## MAX17843 EV PCB Layouts (continued)

MAX17843 EV Kit PCB Layout-Bottom Pastemask

<!-- image -->

│

## MAX17843 EV PCB Layouts (continued)

MAX17843 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17843