<!-- lastmod 2022-08-03 -->
## MAX17823 Evaluation System

## General Description

The MAX17823 evaluation kit (EV kit) demonstrates the capabilities of the MAX17823B advanced smart batterypack  controller.  Vertical  headers  (P2,  P3,  P5,  and  P6) allow for the connection of multiple EV kits to support the maximum 32-device daisy-chain capability.

## Component Lists

## Table 1. MAX17823 EV System

| PART           |   QTY | DESCRIPTION     |
|----------------|-------|-----------------|
| MAX17823EVKIT# |     2 | MAX17823 EV kit |

## MAX17823 EV Kit

## Table 2. Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX17823 when contacting these component suppliers.

## Table 3. MAX17823 EV Kit Files

| FILE                  | DESCRIPTION                                |
|-----------------------|--------------------------------------------|
| INSTALL.EXE           | Installs the EV kit files on your computer |
| MAX17823_MAX17880.EXE | Application program                        |
| CDM20600.EXE          | Installs the USB device driver             |
| UNINSTALL.EXE         | Uninstalls the EV kit software             |
| USB_Driver_Help.pdf   | USB driver installation help file          |

Ordering Information appears at end of data sheet.

SMBus is a trademark of Intel Corp.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

Evaluates: MAX17823B

## Benefits and Features

- Battery-Cell String Emulation
- UART interface
- Windows XP ® -, Windows Vista ® -, or Windows ® 7-Compatible Software
- Fully Assembled and Tested

<!-- image -->

## MAX17823 Evaluation System

## Quick Start

## Recommended Equipment

- Two MAX17823 EV Kits
- One MAX17841 EV Kit
- MINQUSB+ command module
- MINIQUSB board
- MINIQUSB-XHV board (this board is not used)
- Two 9V to 60V DC power supplies (refer to the MAX17823B IC datasheet for recommended operating ranges)
- User-supplied Windows XP-, Windows Vista-, or Windows 7-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The  MAX17823  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  enable  the  power  supplies  until  all connections are completed.

- 1) Visit www.maximintegrated.com/design/tools/ applications/evkit-software/ to download the latest version of the EV kit software, 17823xxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Connect the MINIQUSB+ to the J3 and J4 headers on the MAX17841 EV kit.
- 4) Connect the USB cable from the PC to the MINIQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If a window is not seen that is similar to the one described above after 30 seconds, remove the USB cable from the MINIQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows XP, Windows Vista, and Windows 7.
- 5) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device

Evaluates: MAX17823B

option. Specify the location of the device driver to be C:\Program Files\MAX17823 (default installation directory) using the Browse button. Refer to the USB\_Driver\_Help.PDF document included with the software for additional information.

- 6) Appropriate FTDI drivers might need to be installed from the website http://www.ftdichip.com/Drivers/ D2XX.htm .
- 7) Ensure that all jumper shunts and switches are configured as listed in Table 1, Table 2, and Table 3.
- 8) Configure the DC power supplies for 18V, and dis -able their outputs.
- 9) Connect the power supply grounds together. Then connect this common ground to AGND on the MAX17841 EV kit.
- 10) Connect the first 18V supply between the PACK+ and PACK- pads on the first MAX17823 EV kit.
- 11)  Connect the second 18V supply between the PACK+ and PACK- pads on the second MAX17823 EV kit.
- 12)  Using the six blue two-wire crossover cables, make the following connections:
- Connect P1 on MAX17841 EV kit to P6 on the first MAX17823 EV kit
- Connect P2 on MAX17841 EV kit to P5 on the first MAX17823 EV kit
- Connect P2 on the first MAX17823 EV kit to P6 on the second MAX17823 EV kit
- Connect P3 on the first MAX17823 EV kit to P5 on the second MAX17823 EV kit
- Connect the red loop-back cable from P2 to P3 of the second MAX17823 EV kit
- 13)  Enable the DC power supply.
- 14)  Start the MAX17823EV kit software by opening the corresponding icon in the Start | Programs menu. The EV kit software automatically establishes a connection with the EV kit. Once the status bar at the bottom of the window displays Interface found , proceed to the next step.
- 15)  If checked, uncheck the MAX17841 SHDN checkbox in the upper left box.
- 16)  Select Initialization tab.
- 17)  Click the Wake Up button.
- 18)  Click the Hello ALL button in MAX17823 box.
- 19)  Click the Set First Address button in MAX17823 box.
- 20)  Verify that the Device Addresses grid contains two device addresses and that the status bar at the bottom indicates Initialization Successful .
- 21)  The EV kit is now ready for further evaluation.

## Table 4. MAX17823 EV Kit Default Jumper Settings

| JUMPER                           | SHUNT POSITION   |
|----------------------------------|------------------|
| JU0-JU3, JU15-JU18, CELL2-CELL12 | On one pin only  |
| JU14, JU19                       | Installed        |

## Table 5. MAX17841 EV Kit Default Jumper Settings

| JUMPER            | SHUNT POSITION   |
|-------------------|------------------|
| JU1-JU4, JU6, JU7 | On one pin only  |
| JU5               | 1-2              |

## Table 6. MAX17823 EV Kit Quick Start Switch Settings

| SWITCH   | SETTING                       |
|----------|-------------------------------|
| SW1      | ON (actuators toward the top) |

## Note:

- 1) The default position of SW1 is OFF (actuators towards bottom) and this setup is for Battery input on P1.
- 2) The optional position of SW1 is ON (actuators towards top) and this setup is for an external power supply input between BAT0 and BAT12 with the 2kΩ resistor ladder.

## Detailed Description of Software

The MAX17823 EV kit is evaluated in conjunction with the MAX17823 evaluation software. The graphical user interface (GUI) provides a user-friendly environment for reading and writing to all device registers, as well as executing the seven device commands. The GUI is divided into two sections: group boxes and command tabs.

The upper-left group box provides shutdown/enabling of the MAX17841 device.

The Initialization tab  provides  controls  to  execute  the Wake Up command, the MAX17823 - HELLOALL command , and MAX17823 - Set First Address command for  writing  the  first  address  to  the ADDRESS register of each device in the daisy chain. This tab also includes a Device Address grid  that  displays  the  address  of  each device  in  the  daisy  chain,  a Communication  Log that displays a summary of bus activity, and a Short Cuts tab that provides faster methods of executing useful software functions.

The Read/Write tab  located  in  MAX17823  tab  provides controls  for  executing  the  WRITEDEVCIE,  WRITEALL, READDEVICE, and READALL commands.

The Voltage  Measurements tab  provides  initiating  and monitoring the ADC scanning of the connected devices.

The MAX17823 tab  provides  access  to  the  registers of  all  MAX17823  devices  on  the  daisy  chain.  Each  tab includes a grid that is used to display the contents read from the registers. The grid is made of x columns and y rows, where x is the number of registers (shown above each grid) associated with that tab and y is the number of devices in the daisymchain. In addition, each tab includes various controls (checkboxes, edit boxes, buttons, labels, etc.) for configuring each device. Refer to the MAX17823 IC datasheet for additional register and interface details.

The MAX17841 tab  provides  access  to  the  MAX17841 device registers.

The  software  also  provides  functions  to  facilitate  the evaluation process. These include a PEC calculator, the capability  to  save  ADC  measurements  to  file,  and  the ability  to  save/load  register  configurations  to/from  a  file. When evaluating  the  EV  kit,  refer  to  the  MAX17823  IC datasheet and the MAX17841 IC datasheet for additional details.

│

## MAX17823 Evaluation System

## System Initialization

The daisy chain of MAX17823 EV kit is initialized using the  controls  provided  in  the Initialization tab  on  the MAX17823EV kit software GUI. The recommended initialization sequence is provided below:

- 1) Verify jumper configuration. See the Device Startup section.
- 2) Uncheck the MAX17841 SHDN checkbox.
- 3) Click the Wake Up button. This will execute a sequence that wakes up the MAX17823B devices in the daisy chain.
- 4) Select the address of the first device in the daisy chain in the edit box adjacent to the MAX17823 HELLOALL button.
- The  value  entered  here  contains  the  address (A[4:0]) of the first device in the daisy chain. The A[4:0] value is written to the most significant bits of the ADDRESS register of the first device.
- Refer to the HELLOALL Command section in the MAX17823B IC data sheet for additional details

Note: When re-initializing the device, the address unlock bit  (ADDRUNLOCK)  must  be  set  before  proceeding  to the next step. This is done by clicking the Unlock Device

Table 7. ADDRESS Register

| ADDRESS REGISTER ADDRESS       | ADDRESS REGISTER ADDRESS       | ADDRESS REGISTER ADDRESS       | ADDRESS REGISTER ADDRESS       | ADDRESS REGISTER ADDRESS       | ADDRESS REGISTER ADDRESS       | ADDRESS REGISTER ADDRESS       | ADDRESS REGISTER ADDRESS       |
|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Bit 7                          | Bit 6                          | Bit 5                          | Bit 4                          | Bit 3                          | Bit 2                          | Bit 1                          | Bit0                           |
| 0                              | 0                              | 0                              | 0                              | 0                              | 0                              | 0                              | 1                              |
| ADDRESS REGISTER (Upper 8bits) | ADDRESS REGISTER (Upper 8bits) | ADDRESS REGISTER (Upper 8bits) | ADDRESS REGISTER (Upper 8bits) | ADDRESS REGISTER (Upper 8bits) | ADDRESS REGISTER (Upper 8bits) | ADDRESS REGISTER (Upper 8bits) | ADDRESS REGISTER (Upper 8bits) |
| Bit 15                         | Bit 14                         | Bit 13                         | Bit 12                         | Bit 11                         | Bit 10                         | Bit 9                          | Bit 8                          |
| 0                              | 0                              | 0                              | FA4                            | FA3                            | FA2                            | FA1                            | FA0                            |
| ADDRESS REGISTER (Lower 8bits) | ADDRESS REGISTER (Lower 8bits) | ADDRESS REGISTER (Lower 8bits) | ADDRESS REGISTER (Lower 8bits) | ADDRESS REGISTER (Lower 8bits) | ADDRESS REGISTER (Lower 8bits) | ADDRESS REGISTER (Lower 8bits) | ADDRESS REGISTER (Lower 8bits) |
| Bit 7                          | Bit 6                          | Bit 5                          | Bit 4                          | Bit 3                          | Bit 2                          | Bit 1                          | Bit 0                          |
| 0                              | 0                              | 0                              | DA4                            | DA3                            | DA2                            | DA1                            | DA0                            |

│

Evaluates: MAX17823B

Address button  on  the  software's Configuration tab  in the MAX17823 tab.

- 1) Click the MAX17823 HELLOALL button.

This command sends out the HELLOALL command along  with  the  chosen  first  device  address.  It  also determines how many devices are in the daisy chain, based  on  the  address  byte  that  is  returned  by  the last device.

- 2) Click the MAX17823 - Set First Address button. This control writes the address of the first device to the  upper  8  bits  of  each  device's  16-bit ADDRESS register. This control uses the WRITEALL command.

The daisy chain is initialized once all devices have been programmed with the address of the first device. The software is now fully operational, and all active devices are configurable. Refer to the UART Daisy-Chain Initialization Sequence  section  in  the  MAX17823  IC  datasheet  for additional initial configuration recommendations.

## Grid Initialization

When  the  Set  First  Address  sequence  is  complete, the software  updates  the  grids on  the MAX17823 Device Addresses box in the Initialization tab and the Thresholds,  Voltage  Measurement,  DIAGCFG/FMEA, Alert/Status,  Enables,  Configuration,  BALSW ,  and Model/Version/ADC Test tabs in the MAX17823 tab.

## MAX17823 Evaluation System

## Device Addresses Grid

The Device Addresses box is initialized after clicking the MAX17823 - Set First Address button. The grid contains the addresses of all detected devices. Selecting a cell that contains  a  device  address  updates  the Active  Device drop-down list. For a two-device daisy chain with a start address of 0x00, the grid would be displayed as shown in Figure 1.

## Register Grids

The Thresholds , Voltage  Measurement , DIAGCFG/ FMEA , Alert/Status , Enables , Configuration , BALSW ,

Evaluates: MAX17823B

and Model/Version/ADC  Test tabs  in  the MAX17823 tab include grids that display the contents of the selected device  registers.  These  tabs  are  all  updated  to  contain n  number  of  rows,  where  n  equals  the  total  number  of detected devices.

For a two-device daisy chain, the grids on each tab are configured with two rows, as shown in Figure 2. The number of columns in each grid is set by the number of registers associated with that grid. In addition, each row has an associated device number button that, when clicked, sets that device as the active device, updating the Active Device drop-down list.

Figure 1. MAX17823 EV Kit Software-Device Address Grid

<!-- image -->

| 1        | 0x02   | F0x0   | 0:05   | L.0x0   | 80x0   |
|----------|--------|--------|--------|---------|--------|
| Device 1 | 0008X0 | 0000X0 | 0000X0 | 0000X0  | 0000X0 |
| Device 2 | 0008×0 | 0000X0 | 0000X0 | 0000X0  | 0000X0 |

Figure 2. MAX17823 EV Kit Software-Device Rows

<!-- image -->

│

## MAX17823 Evaluation System

## Write Registers

A specific device in the daisy chain can be written to by using the Read/Write tab and Active Device drop-down list. Follow the steps below to perform a write to a specific register of a single device:

1. Select  the  device  to  be  written  to  from  the Active Device drop-down list (Figure 3).
2. Select  the  register  to  be  written  to  from  the Select MAX17823 Register box in Read/Write tab.
3. Enter the hex value (####) into the Data: 0x edit box in the Write Devices box (Figure 4).
4. Click the Write Active Device button.

The Write  Devices box  can  also  be  used  to  write  an entered value into the active register of all the devices in the daisy chain. Follow the steps below to perform a write to a specific register of all devices:

- 1) Select the register to be written to from the Select MAX17823 Register box.
- 2) Enter the hex value (####) into the Data: 0x edit box in the Write Devices box.
- 3) Click the Write All Devices button.

## Read Registers

A specific device in the daisy chain can be read by using the Read/Write tab  and  the Active  Device drop-down list. Follow the steps below to perform a read of a specific register of a single device:

- 1) Select the device to read from the Active Device drop-down.
- 2) Select the register to be read from the Select MAX17823 Register box in Read/Write tab.
- 3) Click the Read Active Device button.
- 4) The read data is displayed in the left-side edit box.

The Read tab can also be used to read the active register of all the devices in the daisy chain. Follow the steps below  to  perform  a  read  from  a  specific  register  of  all devices:

- 1) Select the register to be read from the Select MAX17823 Register box.
- 2) Click the Read All Devices button.
- 3) The read data is displayed in the same order as the device address in the left-side edit box.

In  addition,  there  is  another  read  control  located  at  the upper  left  on  the  display: Refresh Active  Tab  F8 .  The Refresh Active Tab F8 control will read the registers that have been selected. To select a register, check the associated checkbox located above the grid on each register tab. Each tab also has an associated ALL checkbox  that

when checked/unchecked selects/deselects all the register checkboxes on that tab. The Select All and Deselect All  operations  can  also  be  executed by clicking the Set All  &gt;&gt; button  or Clear All &gt;&gt; button. At  the  completion of  a  read  operation,  the  edit  box  in  the Read/Write tab displays the data of the selected registers. Figure 5 shows the edit box in the Read/Write tab.  Figure  6  shows  the result of clicking the Refresh Active Tab F8 button with the Enables tab displayed, and Table 8 lists the available read controls and their respective functions.

<!-- image -->

Figure 3. Active Device Drop-Down List

<!-- image -->

Figure 4. Write Devices Box

Figure 5. Read Devices Box

<!-- image -->

Figure 6. Enables Tab After Executing Set All

<!-- image -->

│

## MAX17823 Evaluation System

## Table 8. Read Controls

| CONTROL NAME               | CONTROL TYPE       | FUNCTION                                                                                 |
|----------------------------|--------------------|------------------------------------------------------------------------------------------|
| Read Active Device         | Button             | Reads the active MAX17823 register of the active MAX17823 device                         |
| Read All Devices           | Button             | Reads the active MAX17823 register of all devices                                        |
| Refresh Active Tab F8      | Button*, Menu item | Performs a read of all selected registers on the active/visible register tab             |
| Auto Refresh on Tab Change | Checkbox*          | When checked, the register tabs are automatically refreshed when becoming active/visible |

## Scan

## Table 9. Scan Controls

Figure 7. Scan Tab Snapshot

| CONTROL NAME       | CONTROL TYPE   | FUNCTION                                                                                                        |
|--------------------|----------------|-----------------------------------------------------------------------------------------------------------------|
| Start ADC Scanning | Checkbox       | When checked, a scan of theADC is initiated every x milliseconds, where x is set by the Interval controls below |
| Interval (msec)    | Edit box       | Used to enter the time interval betweenADC scans                                                                |
| Set Interval       | Button         | Sets the time interval shown in the Interval (msec) edit box                                                    |
| Scan DONE          | Button         | Clears the SCANDONE bit                                                                                         |
| DATA ready         | Button         | Clears the DATARDY bit                                                                                          |
| TIMEOUT            | Button         | Clears the SCANTIMEOUT bit                                                                                      |
| Data Move          | Button         | Sets the DATAMOVE bit. Moves the data from internal registers to user- accessible registers                     |

<!-- image -->

Evaluates: MAX17823B

## MAX17823 Evaluation System

## Register Tabs

The  58  device  registers  are  organized  onto  the  following  tab  sheets  in  the MAX17823 tab: Thresholds , Voltage Measurements , DIAGCFG/FMEA , Alert/Status , Enables , Configuration , BALSW , Model/Version/ADC Test , and Read/Write . Each tab provides write access to each device in the daisy chain, as well as a grid that displays the contents of the devices' registers. The display grids are updated by performing read operations through the Refresh Active Tab F8 . See the Read Registers section for more details. The write operations are performed using the individual Configure Active Device button  or Configure  All  Devices button  located  on  the  register tabs.

## Thresholds Tab

The Thresholds tab  (Figure 8) is used to configure the seven  threshold  registers.  The  data  for  the  threshold

## Table 10. Threshold Registers

| THRESHOLD REGISTER (ADDRESS)                   | GUI CONTROL   | DISPLAY/DATA INPUT FORMAT   |
|------------------------------------------------|---------------|-----------------------------|
| Overvoltage Clear (0x40)                       | OVTHRCLR      | Voltage*                    |
| Overvoltage Set (0x42)                         | OVTHRSET      | Voltage*                    |
| Undervoltage Set (0x44)                        | UVTHRSET      | Voltage*                    |
| Undervoltage Clear (0x46)                      | UVTHRCLR      | Voltage*                    |
| Cell Mismatch (0x48)                           | MSMTCH        | Voltage*                    |
| Auxiliary Analog Input Overtemperature (0x49)  | AINOT         | Hex                         |
| Auxiliary Analog Input Undertemperature (0x4A) | AINUT         | Hex                         |

│

## Evaluates: MAX17823B

registers is  entered and displayed on the GUI as either a voltage or hex value. The threshold registers and their associated GUI controls are listed in Table 10.

The Write Device buttons are used to write the entered data to the active device. The active device is selected through the Active Device drop-down list. The Write All buttons are used to write the entered data to all devices in the daisy chain.

For all the threshold registers, the data (D[11:0]) is contained  in  the  upper  12  bits  of  the  16-bit  register.  When entering  data  into  the Undertemperature  Threshold (AINOT) and Overtemperature Threshold (AINUT) edit boxes, enter only the hex value of the upper 12 bits. The lower nibble of each threshold register is ignored during a write, and is read back as zeros.

Figure 8. MAX17823 Evaluation Kit Software (Thresholds Tab)

<!-- image -->

## MAX17823 Evaluation System

## Voltage Measurements Tab

The Voltage Measurements tab (Figure 9) displays the results for the ADC conversions on cells 1-12, as well as the results from the TOTAL, MINCELL, MAXCELL, BLOCK, AIN1, AIN2, and DIAG registers. The checkboxes at the top of the tab and their associated Configure Cells (F9) button are used to enable ADC scanning of the associated measurement. These checkboxes have the same function as the CELL\_EN checkboxes on the Configuration tab. See the ADC Scan section for details on setting up and initiating an ADC scan.

Figure 9. MAX17823 Evaluation Kit Software (Voltage Measurements Tab)

<!-- image -->

## MAX17823 Evaluation System

## DIAGCFG/FMEA Tab

The diagnostic (DIAG) and failure-mode effects analysis (FMEA) registers are accessed from this tab (Figure 10). The tab is divided into two group boxes: DIAGCFG and FMEA . The DIAGCFG group box displays controls for configuring the register settings. The FMEA group box displays the FMEA alerts.

Figure 10. MAX17823 Evaluation Kit Software (DIAGCFG/FMEA Tab)

<!-- image -->

## MAX17823 Evaluation System

## Alert/Status Tab

All  device  alerts  are  monitored  from  the Alert/Status tab  (Figure  11).  The  right  side  of the  tab  is divided  into  three  group  boxes: Status  Flags  (STATUS) , Cell  Balancing  Diagnostic  Alert ,  and Alert  Status (ALRTCELL , ALRTOVCELL , ALRTUVCELL) . The Status  Flags  (STATUS) group  box  displays  the  alerts from  the  STATUS  (0x02)  register.  The Cell  Balancing Diagnostic Alert group box displays the alerts from the ALRTBALSWCELL  (0x08)  register.  The Alert  Status (ALRTCELL , ALRTOVCELL , ALRTUVCELL) group box  displays  the  alerts  from  the  ALRTCELL  (0x04), ALRTOVCELL  (0x05),  and  ALRTUVCELL  (0x07)  registers.  Refer  to  the  Cell  Measurements  and  Balancing Switch  Fault  Detection  sections  in  the  MAX17823B  IC datasheet for additional information.

Each group box contains buttons that are associated with that register's alert bits. When performing a read of these alert registers, the state of each alert bit is displayed on the buttons' faces. To clear an alert, a zero must be written to the bit position assigned to that specific alert. An alert is cleared as follows:

Evaluates: MAX17823B

- 1) Select the alerts to be cleared. Click the button displaying the alert. The button's label changes from 1 to 0.
- 2) Write to the alert register(s) using one of the following options:
- a) Click the Clear Device button to clear the selected alerts of the active device (see the Active Device drop-down list),or
- b) Click the Clear All button to clear the selected alerts of all devices in the chain

Note: Only the buttons displaying bold text can be cleared by clicking the button. Buttons with non-bold text are readonly bits and are automatically cleared.

The alarm enable bits for the ALRTOV and ALRTUV alerts are  located  in  the  OVALRTEN  (0x06)  and  UVALRTEN (0x07)  registers,  respectively.  The  ALRTCELL  alerts result  from  an  ALRTOV  or  ALRTUV  alert.  Therefore, to  disable  an  ALRTCELL  alert,  both  the  ALRTOV  and ALRTUV  alerts  for  that  cell  must  be  disabled  (i.e.,  to disable the alert for cell 12 (AL12), the OV12 and UV12 enable bits must be set to 0).

Figure 11. MAX17823 Evaluation Kit Software (Alert/Status Tab)

<!-- image -->

│

## MAX17823 Evaluation System

## Enables Tab

The MAX17823B alert and alarm functions are enabled/ disabled by checking/unchecking the Enables tab (Figure  12)  checkboxes  and  then  clicking  either  the Configure Active Device or the Configure All Devices button. When enabled, the overvoltage and undervoltage

Evaluates: MAX17823B

alerts can be monitored and cleared using the buttons on the Alert/Status tab.  See  the Alert/Status  Tab section. The overvoltage  and  undervoltage  alert  enable  bits  are contained  in  their  respective  register's  lower  12  bits  (\_ VALRTEN[11:0]). The Scan Control (SCANCTRL) group box provides controls for configuring the scan settings.

Figure 12. MAX17823 Evaluation Kit Software (Enables Tab)

<!-- image -->

│

## MAX17823 Evaluation System

## Configuration Tab

The  Configuration  tab  (Figure  13)  is  divided  into  nine group  boxes: Measurement  Enable  (MEASUREEN) , General  Purpose  I/O  (GPIO) , ADC Acquisition  Time (ACQCFG) , Watchdog Configuration (WATCHDOG) ,

## Table 11. Configuration Controls

| General Purpose I/O (GPIO)        | General Purpose I/O (GPIO)        | General Purpose I/O (GPIO)                                                                 |
|-----------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------|
| Input                             | Radio button                      | Configures the GPIO pin as an input                                                        |
| Output                            | Radio button                      | Configures the GPIO pin as an output                                                       |
| GPIO Logic State                  | Label                             | Displays the current state of the GPIO pin                                                 |
| GPIO_OUT                          | Checkbox                          | Controls the GPIO pin when configured as an output                                         |
| ADC Acquisition Time (ACQCFG)     | ADC Acquisition Time (ACQCFG)     | ADC Acquisition Time (ACQCFG)                                                              |
| Acquisition Time                  | Edit box                          | 6-bit acquisition time for AUXIN1/AUXIN2                                                   |
| Watchdog Configuration (WATCHDOG) | Watchdog Configuration (WATCHDOG) | Watchdog Configuration (WATCHDOG)                                                          |
| Timer Value                       | Edit Box                          | Sets the cell-balancing timer                                                              |
| Timer Pre-Divider                 | Drop-Down List                    | Sets the step size of the cell-balancing timer                                             |
| Device Configurat i on (DEVCFG)   | Device Configurat i on (DEVCFG)   | Device Configurat i on (DEVCFG)                                                            |
| Scan Timeout                      | Radio Button                      | Enables/disables watchdog timeout                                                          |
| Packet Error Checking             | Radio button                      | Enables/disables packet error checking                                                     |
| Double Buffering                  | Radio Button                      | Enables/disables double buffering of the measurement registers                             |
| ADC Datapath Test                 | Radio Button                      | Enables/disablesADC datapath diagnostic test                                               |
| Alive Counter                     | Radio Button                      | Enables/disables alive counter                                                             |
| Measurement Enable (MEASUREEN)    | Measurement Enable (MEASUREEN)    | Measurement Enable (MEASUREEN)                                                             |
| CELL1 - CELL12                    | Checkbox                          | Selects which cell to enable for measurement                                               |
| Set All >>                        | Button                            | Enables all cells for measurement                                                          |
| Clear All >>                      | Button                            | Disables all cells for measurement                                                         |
| BLOCK                             | Checkbox                          | Enables Block voltage measurement                                                          |
| VBLK Divider                      | Radio Button                      | Connects/disconnects VBLK measurement path                                                 |
| AIN1, AIN2                        | Checkbox                          | Selects whichAUX to enable for measurement                                                 |
| Configure Active Device           | Button                            | Writes the configuration settings to the device listed in the Active Device drop-down list |
| Configure All Devices             | Button                            | Writes the configuration settings to all devices in the daisy chain                        |
| Unlock Device Address             | Button                            | Sets the address unlock bit (ADDRUNLOCK) high to allow a new HELLOALL command              |
| Initiate Soft Reset               | Button                            | Sets the SPOR bit high, initiating a digital power-on-reset event                          |
| Initiate Hardware Reset           | Button                            | Sets the FORCEPOR bit high, initiating a hardware power-on-reset event                     |

│

Evaluates: MAX17823B

Device Configuration  (DEVCFG) , Device Configuration 2 (DEVCFG2) , Top Cell (TOPCELL) , Watch Dog Demo , and Balancing  Switch  Discharge  (BALSWDISCHG) . Table 11 lists the main Configuration tab's controls and their respective functions.

Figure 13. MAX17823 Evaluation Kit Software (Configuration Tab)

<!-- image -->

## MAX17823 Evaluation System

## BALSW Tab

The  BALSW  tab  (Figure  14)  is  divided  into  four  group  boxes: CELLTEST , BALSWEN , Balancing  Diagnostic (BALDIAGCFG1) , and Balancing Switch Thresholds .

## Table 12. Cell and Balancing Switch Controls

Figure 14. MAX17823 Evaluation Kit Software (Switches Tab)

| Cell Input Test Switches (CELLTEST)    | Cell Input Test Switches (CELLTEST)    | Cell Input Test Switches (CELLTEST)          |
|----------------------------------------|----------------------------------------|----------------------------------------------|
| CTSTEN0 - CTSTEN12                     | Checkboxes                             | Enables unconnected cell input detection     |
| Cell Balancing Switch Enable (BALSWEN) | Cell Balancing Switch Enable (BALSWEN) | Cell Balancing Switch Enable (BALSWEN)       |
| BAL1 - BAL12                           | Checkboxes                             | Enables external cell balancing              |
| Balancing Diagnostic (BALDIAGCFG1)     | Balancing Diagnostic (BALDIAGCFG1)     | Balancing Diagnostic (BALDIAGCFG1)           |
| CELLxxEN_M                             | Checkboxes                             | Selects which cell to enable for measurement |
| Cell Input MUX Selection               | Radio Button                           | Selects multiplexer (HV-MUX, ALT-MUX)        |
| Scan Polarity                          | Radio Button                           | SelectsADC mode (Uni-polar, Bi-polar)        |
| Balancing Switch Thresholds            | Balancing Switch Thresholds            | Balancing Switch Thresholds                  |
| Short Circuit Threshold                | Edit box                               | Set the threshold voltage by HEX format      |
| Voltage Low Threshold                  | Edit box                               | Set the threshold voltage by HEX format      |
| Voltage High Threshold                 | Edit box                               | Set the threshold voltage by HEX format      |

<!-- image -->

Evaluates: MAX17823B

│

## MAX17823 Evaluation System

## Model/Version/ADC Test Tab

This register tab (Figure 15) displays the contents of each devices'  ADDRESS  and  MODEL  VERSION  register.  It also reads the ID1 and ID2 register and verifies that the device ID is valid.

## Table 13. Version Register

Figure 15. MAX17823 Evaluation Kit Software (Model/Version/ADC Test Tab)

| Bit 15   | Bit 14   | Bit 13   | Bit 12   | Bit 11   | Bit 10   | Bit 9    | Bit 8    |
|----------|----------|----------|----------|----------|----------|----------|----------|
| 1        | 0        | 0        | 0        | 0        | 0        | 1        | 0        |
| Bit 7    | Bit 6    | Bit 5    | Bit 4    | Bit 3    | Bit 2    | Bit 1    | Bit 0    |
| 0        | 0        | 1        | 1        | VER[3:0] | VER[3:0] | VER[3:0] | VER[3:0] |

<!-- image -->

Evaluates: MAX17823B

Model  and  Version  Number: The  lower  nibble  of  the Version  register  (VER[3:0])  contains  the  IC's  version number.  The  upper  12  bits  (VER[15:4])  contain  the MAX17823B model number, which is set to 0x823 (1000 00100011). The Version register is a read-only register.

│

## MAX17823 Evaluation System

## ADC Scan

An  ADC  scan  measures  all  enabled  cell  inputs,  all enabled auxiliary inputs, and the self-diagnostics channel (if enabled). The conversion begins once the SCAN bit in the SCANSTART register is set. The following procedure outlines the steps to set up and initiate single or continuous ADC scanning.

## Set Up

- 1) Enable the cells to measure the following:
- Check the CELL\_EN checkboxes in the Measure Enable box on the Voltage Measurements tab.
- Click the Configure (F9) button.

Note: The  cell  channels  can  also  be  enabled  with  the checkboxes on the Configuration tab.

- 2) Select  the  cell  registers  to  read  by  checking  the CELL\_ checkboxes on the Voltage Measurements tab.
- 3) Enable  the  self-diagnostics  and  auxiliary  inputs  to measure  by  checking  the AIN1 , AIN2 and DIAG checkboxes  in  the Measure  Enable box  on  the Voltage Measurements tab.
- 4) Select  the  self-diagnostics  and  auxiliary  input  registers for reading by checking the AIN1 , AIN2 ,  and DIAG checkboxes  on  the Voltage  Measurements tab.

## Initiate a Single ADC Scan

- 1) Select the Voltage Measurements tab.
- 2) Click the Refresh Active Tab F8 button

Note: The SCAN bit is automatically set before a read is done on the Voltage Measurements tab.

## Initiate Continuous ADC Scanning:

- 1) Select the Voltage Measurements tab.
- 2) Enter  the  time  delay  between ADC  scans  into  the Interval (msec) edit box.
- 3) Click the Set Interval button.
- 4) Check the Start ADC Scanning checkbox.

Note: To save the data during a continuous ADC scan, perform the steps from the Log Scanned Data section.

## Log Scanned Data

The  MAX17823  EV  kit  software  allows  the  data  measured  during  continuous ADC  scanning  to  be  saved  to a  file.  This  feature  is  available  by  selecting  the File  | Log Scan Data menu item, and should be set up before scanning is started. The steps below explain how to set up data logging:

- 1) Perform steps 1-4 in the ADC Scan section.
- 2) Select the File | Log Scan Data menu item or press CTRL+L. The Scan Count window should appear.
- 3) Enter the number (n) of ADC scans to record, and then click Enter .
- 4) Select the Voltage Measurements tab.
- 5) Enter the time delay between ADC scans into the Interval (msec) edit box.
- 6) Check the Start ADC Scanning checkbox. A red Logging Data label appears, indicating that data is being recorded.
- 7) Once n number of scans has been completed, the Log Complete window appears. Click OK .
- 8) A Log Data dialog box appears. The default file name is 17823all and the default file type is .xls (excel spreadsheet). If a different name or file type is preferred, enter it into the File name edit field. Click S ave .

At the completion of this process, data logging is disabled, but the continuous ADC scanning continues until the Start ADC Scanning checkbox is unchecked. The file generated by the software logs the measured data of the enabled channels for all the devices in the daisy chain.

Figure 16. File | Log Scan Data

<!-- image -->

Figure 17. Log Complete Window

<!-- image -->

│

## MAX17823 Evaluation System

## Save/Load Register Configuration

The  software  features  functions  to  save  register  configuration and load register configuration. This allows all current  register  configurations  and  GUI  control  settings to  be  saved  and  loaded  at  a  later  time.  When  saving, the  software  first  performs  a  read  of  all  the  registers  of each device in the daisy chain to obtain their current configurations. Once complete, a Save All Data dialog box appears and asks for a file name and type (the default is 17823config.csv ).  When loading, a Load Configuration file window appears and asks for a file to open (the default is 17823config.csv ).  The  load  function  configures  the GUI, writes the data from the file to the registers of all the devices in the daisy chain, and finishes by performing a read of all the selected device registers.

Note: Read-only  data  is  not  saved  to  the  configuration file. Only configurable options are saved to the configuration file.

## PEC Byte

The  MAX17823  EV  kit  software  supports  packet-error checking  (PEC)  by  implementing  a  CRC-8  algorithm  to maintain data integrity with the devices in the daisy chain. The software generates the PEC byte when performing a write to a MAX17823B device and verifies the PEC byte received from the devices after a read operation. The software makes this algorithm available as a PEC calculator, which is found under the Tools menu. Figure 18 shows the PEC calculator.

## Detailed Description of Hardware

The MAX17823 evaluation kit (EV kit) demonstrates the capabilities of the MAX17823B advanced smart batterypack  controller.  Vertical  headers  (P2-P6)  allow  for  the

Evaluates: MAX17823B

connection of multiple EV kits, supporting the maximum 32-device daisy-chain capability.

The  MAX17823B  device  can  be  configured  to  operate with 3-12 battery cells. The cells can be directly connected to the EV kit or can be routed through header P1. See the Battery Cells section. The EV kit also facilitates utilizing the auxiliary pins and accessing the general-purpose input/output (GPIO) pins.

## Device Startup

To start the EV kit, apply at least 9V across the PACK+ and  PACK-  PCB  pads  and  then  follow  the  startup sequence below:

- 1) Connect a pack voltage across the PACK+ and PACK- pads.
- 2) Connect a battery voltage across the BAT0-BAT12 pads (battery cells or external power supply).
- 3) Connect the MINIQUSB command module to the MAX17841EV kit's J3 and J4 headers.
- 4) Using the provided USB cable, connect the MINIQUSB command module to a PC.
- 5) Start the MAX17823EV kit software.
- 6) Ensure that the MAX17841 SHDN checkbox on the MAX17823 software is not checked.
- 7) Click the Wake Up button on the Initialization tab in the MAX17823 software.

Note: The SHDN pin of the MAX17841 device is pulled up to +3.3V by the MINIQUSB's K1 GPIO pin.

Once the  wake-up  routine  is  completed,  the SHDN pin of each device on the daisy chain should rise to approximately 8.5V. The devices are now enabled and ready for communication.

Figure 18. PEC Calculator

<!-- image -->

│

## MAX17823 Evaluation System

## Battery Cells

When  evaluating  the  MAX17823  EV  kit,  the  cell  stack voltage is provided by cascading 3-12 battery cells or  by applying  a  DC  voltage  between  the  BAT0-BAT12  pads. The following sections explain how to configure the EV kit and connect the battery cells.

## Cell Configuration

- 1) Configure switch SW1 according to Table 14.
- 2) When using a DC power supply, the cascaded 2kΩ resistors provide divided-down voltages to the cell input pins. This, in effect, emulates the connection of 12 battery cells.
- 3) Configure jumpers CELL1-CELL12 according to the number of battery cells (actual or emulated) that are connected to the system (see Table 15).

## Cell Connections

When using actual or emulated battery cells, keep in mind the following cell-connection requirements (see Table 16 for an 8-cell example):

## Table 14. Switch SW1 Description

| SW1      | CELL-STACK VOLTAGE                 | CONNECTION                                         |
|----------|------------------------------------|----------------------------------------------------|
| All off* | 2-12 battery cells                 | Cells cascaded between BAT0 and BAT12              |
| All on   | DC power supply to emulate battery | See step 10 in the Quick Star t, Procedure section |

## Table 15. Jumpers JU2-JU12and JU102-JU112 Description

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

Evaluates: MAX17823B

- A minimum of three cells must be connected to each MAX17823B device.
- A maximum of 12 cells can be connected to each MAX17823B device.
- The BAT0\_ to BAT1\_ cell inputs must always be populated with a battery cell.
- The remaining cells are populated between BAT 1\_ and BAT 2\_, BAT 2\_ and BAT 3\_, and so on, until all cells are connected.
- All unused cell inputs must be shorted together, using the appropriate CELL2-CELL12 jumpers.

When  DC  power  supplies  are  used  to  emulate  battery cells, set its output in the range from 9V to 60V. Connect the power supplies between the PACK+ and PACK- pads and ensure that a shunt is installed on jumpers JU14 and JU19.

When  using  actual  battery  cells,  connect  them  across the  appropriate  BAT\_  pads,  or  route  them  through  the P1connector.

│

## MAX17823 Evaluation System

## Table 16. 8-Cell Connection

| CELL   | + TERMINAL              | - TERMINAL              |
|--------|-------------------------|-------------------------|
| 1      | BAT1_                   | BAT0_                   |
| 2      | BAT2_                   | BAT1_                   |
| 3      | BAT3_                   | BAT2_                   |
| 4      | BAT4_                   | BAT3_                   |
| 5      | BAT5_                   | BAT4_                   |
| 6      | BAT6_                   | BAT5_                   |
| 7      | BAT7_                   | BAT6_                   |
| 8      | BAT8_                   | BAT7_                   |
| -      | BAT9_shorted to BAT8_   | BAT9_shorted to BAT8_   |
| -      | BAT10_shorted to BAT9_  | BAT10_shorted to BAT9_  |
| -      | BAT11_shorted to BAT10_ | BAT11_shorted to BAT10_ |
| -      | BAT12_shorted to BAT11_ | BAT12_shorted to BAT11_ |

## Table 17. Header P1 Cell Connections

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

## Daisy-chain

The  MAX17823B  includes  a  UART  bus  system  that allows cascading of up to 32 MAX17823B devices. The EV kit facilitates  device  cascading by routing the UART bus  between  the  P2/P3  and  P5/P6  connectors.  These connectors  are  used  to  cascade  multiple  EV  kit  boards together. See Table 18 - Table 21.

Table 18 - Table 21 provide the complete pinouts for the interboard connectors provided on the EV kit.

## Table 18. Header P2

|   PIN | NET    |
|-------|--------|
|     1 | TXUN_A |
|     2 | TXUP_A |

## Table 19. Header P3

|   PIN | NET    |
|-------|--------|
|     1 | RXUN_A |
|     2 | RXUP_A |

## Table 20. Header P5

|   PIN | NET    |
|-------|--------|
|     1 | TXLP_A |
|     2 | TXLN_A |

## Table 21. Header P6

|   PIN | NET    |
|-------|--------|
|     1 | RXLP_A |
|     2 | RXLN_A |

│

Evaluates: MAX17823B

## MAX17823 Evaluation System

## Auxiliary Inputs

The auxiliary inputs of the MAX17823B devices are routed to jumpers JU0 and JU1. This allows the auxiliary analog inputs to be used to measure external resistance temperature detector (RTD) components. A negative temperature coefficient (NTC) RTD can be configured with the AUXIN1 or AUXIN2 analog inputs to accurately monitor module or battery-cell temperature. When the auxiliary inputs are not used,  a  shunt  can  be  installed  on  its  associated  jumper, providing a known pin state (AGNDA).

## MINIQUSB Command Module

The MINIQUSB command module is powered by the host PC's USB port. Refer to the MINIQUSB User Guide for additional information. See Table 23 for a pin-to-pin association between the MINIQUSB command module and the EV kit's J3 header

## 16-Pin Header Footprints

The  following  tables  provide  the  complete  pinouts  for each of the 16-pin single-row headers (J1-J4) provided on the EV kit. Between the headers is a MAX17823B device that is fanned out to the four 16-pin headers.

## J4 and J5 Headers

The J4 and J5 header footprints provide direct access to the MAX17823B IC.

## Table 22. Auxiliary Jumpers

| AUXILIARY INPUT (DEVICE)   | JUMPER*   |
|----------------------------|-----------|
| AUXIN1A (U1)               | JU0       |
| AUXIN2A (U1)               | JU1       |

## Table 23. MAX17841 EV kit's J3 Header

|   PIN | NAME     |
|-------|----------|
|     1 | GND      |
|     2 | INT      |
|     3 | GPIO7    |
|     4 | COMP_OUT |
|     5 | GPIO8    |
|     6 | ALRMUV/  |
|     7 | DIN      |
|     8 | ALRMOV/  |
|     9 | CS/      |
|    10 | MCLR/    |
|    11 | SCLK     |
|    12 | USHDN/   |
|    13 | DOUT     |
|    14 | NC       |
|    15 | VDD      |
|    16 | NC       |

## Table 24. HeadersJ1-J4

| PIN NO.   | PIN NAME   | PIN NAME   | PIN NAME   | PIN NAME   |
|-----------|------------|------------|------------|------------|
| PIN NO.   | J1         | J2         | J3         | J4         |
| 1         | NC         | GPIO0      | SW0        | SW8        |
| 2         | AGND       | NC         | C0         | C8         |
| 3         | SHDNL/     | NC         | SW1        | SW9        |
| 4         | AGND       | TXLP       | C1         | C9         |
| 5         | VAA        | TXLN       | SW2        | SW10       |
| 6         | TXUN       | VDDL2      | C2         | C10        |
| 7         | TXUP       | GNDL2      | SW3        | SW11       |
| 8         | GNDL1      | RXLP       | C3         | C11        |
| 9         | VDDL1      | RXLN       | SW4        | SW12       |
| 10        | GNDL3      | NC         | C4         | C12        |
| 11        | VDDL3      | NC         | SW5        | VBLKP      |
| 12        | RXUN       | CTG        | C5         | NC         |
| 13        | RXUP       | AUXIN2     | SW6        | HV         |
| 14        | GPIO3      | AUXIN1     | C6         | DCIN       |
| 15        | GPIO2      | AGND       | SW7        | CPP        |
| 16        | GPIO1      | THRM       | C7         | CPN        |

│

## MAX17823 Evaluation System

## Test Procedures:

## Overvoltage and Undervoltage Threshold Testing

With the ASIC communicating normally to the host in a single ASIC configuration, configure the OV and UV set and clear thresholds in the Thresholds tab and check if the appropriate alerts are set. The detailed procedure is as follows:

A variable 80V, 10A power supply is used to power the MAX17823. Set initial module voltage to 36V (3V/cell).

## Test Procedure:

- 1) ASIC is ready to measure (cell measurement channels enabled, device addresses configured).
- 2) Start measurement.
- 3) Read cell voltages.
- 4) Confirm cell voltages are as expected by clicking F8 (Refresh Active Tab) button.
- 5) Confirm that STATUS/ ALRTCell/ ALRTOVCell/ ALR -TUVCell registers read 0x0000 by selecting them and reading the register values (click F8 button to read them).
- 6) In the Thresholds tab, OVTHRSET (Overvoltage Set) is configured to 4.2V, OVTHRCLR (Overvoltage Clear) is configured to 3.8V, UVTHRSET (Under -voltage Set) is configured to 2.4V, and UVTHRCLR (Undervoltage Clear) is configured to 2.7V.
- 7) After writing these values in the appropriate boxes, click the adjacent Configure All Devices button.
- 8) Select the registers and confirm the values are writ -ten appropriately in the registers by clicking the F8 button.
- 9) In the Enables tab, click Set All buttons for Overvoltage Alert Enables and Undervoltage Alert Enables and then click the Configure All Devices button.
- 10)  Select the ALRTOVEN and ALRTUVEN registers and confirm the registers are updated appropriately by clicking F8 button.
- 11)  Increase the supply voltage steadily up to 52V so that each cell reads 4.33V (&gt; 4.2V).
- 12)  Refresh the new readings on the Voltage Measurements tab.
- 13)  Open the Alert/Status tab and click the F8 button.

Evaluates: MAX17823B

Figure 19. Programmable OV and UV Thresholds Diagram

<!-- image -->

│

## MAX17823 Evaluation System

- 14)  The ALRTOV bit in the Status register should be set to 1. Also, all the OV bits (OV1 to OV12) in the ALRTOVCELL register should be set to 1 and bits AL1 to AL12 in the ALRTCELL register should be set to 1.
- 15)  In the DC Byte box, OV flag also sets to 1 in the Datacheck byte.
- 16)  Steadily decrease the supply voltage to 42V (3.5 Volts/cell).
- 17)  Repeat steps 12 and 13.
- 18)  The ALRTOV bit in the Status register should be cleared to 0. Also, all the OV bits (OV1 to OV12) in the ALRTOVCELL register should be cleared and bits AL1 to AL12 in the ALRTCELL register should be cleared to 0.
- 19)  In the DC Byte box, OV flag also gets cleared to 0 in the Datacheck byte.
- 20)  Decrease the supply voltage steadily down to 24V so that each cell reads 2.0V (&lt; 2.4V).
- 21)  Refresh the new readings on the Voltage Measurements tab.
- 22)  Open the Alert/Status tab and click the F8 button.
- 23)  The ALRTUV bit in the Status register should be set to 1. Also, all the UV bits (UV1 to UV12) in the ALRTUVCELL register should be set to 1 and bits AL1 to AL12 in the ALRTCELL register should be set to 1.
- 24)  In the DC Byte box, UV flag also sets to 1 in the Datacheck byte.
- 25)  Steadily increase the supply voltage to 36V (3.0 Volts/cell)
- 26)  Repeat steps 12 and 13.
- 27)  The ALRTUV bit in the Status register should be cleared to 0. Also, all the UV bits (UV1 to UV12) in the ALRTUVCELL register should be cleared and bits AL1 to AL12 in the ALRTCELL register should be cleared to 0.
- 28)  In the DC Byte box, UV flag also gets cleared to 0 in the Datacheck byte.

This  verifies  the  OV/UV  Set  and  Clear  thresholds  for MAX17823. The Overvoltage or Undervoltage alert in the Enables tab can be selected for any specific cell.

## Evaluates: MAX17823B

## Cell Balancing and Watchdog Timer Testing:

With the ASIC communicating normally to the host in a single-ASIC  configuration,  cell  balancing  and  watchdog timer configuration are tested. The detailed procedure is as follows:

Connect  12  Li-Ion  cells  to  the  MAX17823  device.  Set module voltage to 45.55V

Use software revision R342 for this testing.

## Test Procedure:

- 1) ASIC is ready to measure (cell measurement channels enabled, device addresses configured).
- 2) Confirm cell voltages are as expected by clicking the F8 button on the Voltage Measurements tab.
- 3) Open the BALSW tab and click Check Odd button under the BALSWEN title.
- 4) Click Configure All Devices button.
- 5) Confirm that the BALSWEN register reads 0x0555 by selecting it and reading the register value (click F8 button to read) in the BALSW tab. All of the odd cell balancing switches will be turned on.
- 6) Open the Voltage Measurement tab and read the voltages by clicking the F8 button.
- 7) All of the odd cell voltages will drop by a few mV. (This drop depends on battery impedance and the parasitic I x R drop in the path of that measurement. On Maxim EV kits, this drop is approximately 80 to 100 mV).
- 8) Open the BALSW tab and click Check Even button under the BALSWEN title.
- 9) Cick the Configure All Devices button.
- 10) Confirm that the BALSWEN register reads 0x0AAA by selecting it and reading the register value (click the F8 button to read) in the BALSW tab. All of the even cell balancing switches will be turned on.
- 11)  Open the Voltage Measurement tab and read the voltages by clicking F8 button.
- 12)  All even cell voltages will drop by a few mV. (This drop depends on battery impedance and the parasitic I x R drop in the path of that measurement. On Maxim EV kits, this drop is approximately 80 to 100 mV).

│

## MAX17823 Evaluation System

- 13)  Open the Configuration tab and select a timer predivider value from the drop-down list in the Watch Dog Configuration box. For example, 1 sec[range = 1 to 15sec].
- 14)  Write the timer value as 15(0xF) in the Watch Dog Configuration box.
- 15)  Click the Configure All Devices button and confirm that the WATCHDOG register reads the appropriate value based on pre-divider and timer configuration (in this case, it should read 0x1F00) by selecting it and reading the register value (click the F8 button to read) in the Configuration tab.
- 16)  Click the F8 button periodically to see the timer value steadily go from 0xF to 0x0. In this case, the timer is set to 15 seconds and the cell balancing is turned off after the amount of time set by the user.
- 17)  After the timer reaches 0, open the Voltage Measurement tab and click the F8 button to read cell voltages. They should have returned to their initial values, indicating that the cell balancing has been turned off by the timer.

Note: The  cell  balancing  timeout  feature  consists  of  a 4-bit countdown timer and a pre-divider with three control bits  for  range  selection.  Both  the  timer  and  pre-divider are  programmed  through  the  MSB  of  the  WATCHDOG register. The pre-divider sets the effective LSb time of the counter-timer.  If  the  value  of  the  CBTIMER  does  reach zero,  the  cell  balancing  switches  are  disabled  until  the timer is either disabled or is refreshed by writing a nonzero value.

## Die Temperature Diagnostic Testing

With the ASIC communicating normally to the host in a single  ASIC  configuration,  perform  the  die  temperature diagnostic test. The detailed procedure is as follows:

Connect  12  Li-Ion  cells  to  the  MAX17823  device.  Set module voltage to 45.55V

## Test Procedure:

- 1) ASIC ready to measure (cell measurement channels enabled, device addresses configured).
- 2) Confirm cell voltages are as expected by clicking F8 button on Voltage Measurements tab.
- 3) In the Voltage Measurements tab, click mode button above the DIAG check box.
- 4) A new pop-up window will appear with the diagnostic measurement mode.

## Evaluates: MAX17823B

- 5) Select Die Temp option and click Configure All Devices button.
- 6) Make sure the DIAG register is checked so that it can be read by clicking F8 button.
- 7) The user will see the result in °C below the DIAG register.
- 8) In this case, since the part was tested at room temperature, the DIAG showed a value of 21.86°C.

## Open Sense Leads

With the ASIC communicating normally to the host in a single ASIC configuration, randomly force an open on a particular cell input, or a set of cell inputs. Then how all cell  voltage  measurements  are  affected  is  noted  down with and without using the BALSW diagnostics.

12 Li-Ion cells were connected to MAX17823 device. Set module voltage to 45.55V

- 1) Results  with  device  configured  for  standard  measurement path (no diagnostics enabled):

Test Procedure:

- a) ASIC is ready to measure (cell measurement channels enabled, device addresses config -ured).
- b) Start measurement.
- c) Read cell voltages.
- d) Confirm cell voltages are as expected.
- e) Apply open sense wire condition as specified.
- f) Start measurement.
- g) Read cell voltages.

Note: Input voltage is floating in this case, so measurement values will not be determinant. Diagnostic test is run to definitively detect this fault.

- Sub-test1: C0 and AGND: Cell 1 measurement goes to 0 volts
- Sub-test2: C12 and DCIN: Cell 12 measurement goes to 0 volts.
- Sub-test3: C1: Cell 1 measures 4.9988 V while cell 2 goes to 2.45 V.
- Sub-test4: C4: Cell 4 measures 2.02 V while cell 5 voltage is observed to be 4.9988V
- Sub-test5: C8: Cell 8 measures 1.62 V while cell 9 voltage is observed to be 4.9988V

## MAX17823 Evaluation System

- 2) Results using cell-sense wire open diagnostic: Test Procedure:
- a) ASIC is ready to measure (cell measurement channels enabled, device addresses config -ured).Start measurement
- b) Read cell voltages.
- c) Confirm cell voltages are as expected.
- d) Read FMEA register and check ALRTBALSW = 0.
- e) Read STATUS register and check ALRTFMEA = 0.
- f) Apply open sense wire condition as specified.
- g) Enable the BALSWDIAG [2:0] first to a setting of 101 (open odd switches) and then to 110 (open even switches) in the SCANCTRL (0x013) register. Cell-sense wire odd check combined with cell-sense wire even check indicates to the user which cell-sense wire is in open condition.

## Sub-test1: C0 and AGND

Note: For C0 and AGND open test, a Schottky diode was added in parallel with the C0/C1 ESD diode on the EV kit to allow return current path through C1.

| Cell No         |   Cell1 |   Cell2 |   Cell3 |   Cell4 |   Cell5 |   Cell6 |   Cell7 |   Cell8 |   Cell9 |   Cell10 |   Cell11 |   Cell12 |
|-----------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|----------|----------|----------|
| Voltage (Volts) |    2.48 |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |    2.80 |     0.00 |     2.77 |     0.00 |

- ALRTFMEA in STATUS register set to 1.
- ALRTBALSW in FMEA register set to 1.
- ALRTBALSW1 in ALRTBALSW register set to 1.

## Sub-test2: C12 and DCIN

| Cell No         |   Cell1 |   Cell2 |   Cell3 |   Cell4 |   Cell5 |   Cell6 |   Cell7 |   Cell8 |   Cell9 |   Cell10 |   Cell11 |   Cell12 |
|-----------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|----------|----------|----------|
| Voltage (Volts) |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |     2.75 |     0.00 |     2.49 |

- ALRTFMEA in STATUS register set to 1.
- ALRTBALSW in FMEA register set to 1.
- ALRTBALSW12 in ALRTBALSW register set to 1.

## Sub-test3: C1

| Cell No         |   Cell1 |   Cell2 |   Cell3 |   Cell4 |   Cell5 |   Cell6 |   Cell7 |   Cell8 |   Cell9 |   Cell10 |   Cell11 |   Cell12 |
|-----------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|----------|----------|----------|
| Voltage (Volts) |    2.56 |    0.00 |    2.78 |    0.00 |    2.77 |    0.00 |    2.80 |    0.00 |    2.77 |     0.00 |     2.78 |     0.00 |

- ALRTFMEA in STATUS register set to 1.
- ALRTBALSW in FMEA register set to 1.
- ALRTBALSW1 in ALRTBALSW register set to 1.
- h) Write BALLOWTHR to [0x84AC] and BALHIGHTHR to [0xA8F4].

## Evaluates: MAX17823B

The  preceding  values  were  chosen  as  typical Vds  =  0.75V  using  the  150mA  balancing  current  and  5Ω  worst-case  RON.  The  0xA8F4  800mV threshold, while the 0x84AC  150mV threshold.

- i) Start measurement and read cell voltages (click the F8 button when the Voltage Measurement tab is active in EV kit software)
- i. Read the FMEA register and check ALRTBALSW = 1
- ii. Read the STATUS register and check  that ALRTFMEA = 1
- j) Read the ALRTBALSWCELL register and check ALRTBALSWn = 1, where n is the sense line number that is open.
- k) Read cell voltages.

│

## MAX17823 Evaluation System

## Sub-test4: C4:

| Cell No         |   Cell1 |   Cell2 |   Cell3 |   Cell4 |   Cell5 |   Cell6 |   Cell7 |   Cell8 |   Cell9 |   Cell10 |   Cell11 |   Cell12 |
|-----------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|----------|----------|----------|
| Voltage (Volts) |    0.00 |    2.78 |    0.00 |    2.54 |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |     2.75 |     0.00 |     2.77 |

- ALRTFMEA in STATUS register set to 1.
- ALRTBALSW in FMEA register set to 1.
- ALRTBALSW4 in ALRTBALSW register set to 1.

## Sub-test5: C8:

| Cell No         |   Cell1 |   Cell2 |   Cell3 |   Cell4 |   Cell5 |   Cell6 |   Cell7 |   Cell8 |   Cell9 |   Cell10 |   Cell11 |   Cell12 |
|-----------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|----------|----------|----------|
| Voltage (Volts) |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |    2.77 |    0.00 |    2.54 |    0.00 |     2.75 |     0.00 |     2.49 |

- ALRTFMEA in STATUS register set to 1.
- ALRTBALSW in FMEA register set to 1.
- ALRTBALSW8 in ALRTBALSW register set to 1.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17823EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17823B

│

## MAX17823 Evaluation System

## MAX17823 EV Kit Bill of Materials

| REF_DES                                                     |   QTY | DESCRIPTION                                                       | MFG PART #            | MFG          |
|-------------------------------------------------------------|-------|-------------------------------------------------------------------|-----------------------|--------------|
| C2, C84, C102                                               |     4 | 0.47μF ±10%, 16V X7R ceramic capacitor (0603)                     | C1608X7R1C474K        | TDK          |
| C3                                                          |     1 | 1μF ±10%, 16V X7R ceramic capacitor (0603)                        | GRM188R71C105K        | MURATA       |
| C5                                                          |     1 | 2.2µ F ±10%, 100V X7R ceramic capacitor (1210)                    | GRM32ER72A225K        | MURATA       |
| C23                                                         |     1 | 4.7µ F ±10%, 50V X7R ceramic capacitor (1210)                     | GRM32ER71H475KA88L    | MURATA       |
| C6-C17, C25                                                 |    37 | 0.1μF ±10%, 100V X7R ceramic capacitor, automotive grade (0805)   | GCM21BR72A104KA37L    | MURATA       |
| C41-C52, C67-C78                                            |    37 | 0.1μF ±10%, 100V X7R ceramic capacitor, automotive grade (0805)   | GCM21BR72A104KA37L    | MURATA       |
| C24                                                         |     1 | 0.1μF ±10%, 100V X7R ceramic capacitor automotive grade (0603)    | GCM188R72A104KA64D    | MURATA       |
| C18, C19, C20                                               |     3 | 100pF ±5%, 50V C0G ceramic capacitor (0402)                       | GRM1555C1H101J        | MURATA       |
| C21                                                         |     1 | 1000pF ±10%, 25V X7R ceramic capacitor, automotive grade (0603)   | GCM188R71E102K        | MURATA       |
| C40                                                         |     1 | 1µ F ±10%, 100V X7R ceramic capacitor (1206)                      | GRM31CR72A105K        | MURATA       |
| C53, C54, C79, C81                                          |     4 | 15pF ±5%, 100V C0G ceramic capacitor, automotive grade (0603)     | GCM1885C2A150J        | MURATA       |
| C1, C57, C58, C83                                           |     4 | 2200pF ±5%, 630V C0G ceramic capacitor, auto grade (1206)         | CGA5H4C0G2J222J       | TDK          |
| C27                                                         |     1 | 0.47µ F ±10%, 100V X7S ceramic capacitor, automotive grade (0805) | CGA4J3X7S2A474K/ SOFT | TDK          |
| C1001, C1002, C1003                                         |     3 | 0.1μF ±10%, 50V X7R ceramic capacitor (0603)                      | GRM188R71H104K        | MURATA       |
| D14, D27                                                    |     2 | Unidirectional ESD protection diode (SOD323)                      | PESD5V0U1UA           | NXP          |
| D1, D2, D7, D11                                             |     4 | ESD protection diode (SOT-23)                                     | PESD1CAN              | NXP          |
| D9, D10, D12, D13                                           |     4 | 1A, 150V diode POWERDI®123                                        | DFLS1150-7            | DIODES INC   |
| D28,D29                                                     |     2 | Dual switching common cathode diode                               | BAV70LT3              | ON           |
| J5                                                          |     1 | 26-pin dual row (2x13) header (0.1in centers)                     | PEC36DAAN             | SULLINS      |
| JU0-JU3, JU14-JU19, CELL2-CELL12                            |    21 | 2-pin header (0.1in centers)                                      | PEC36SAAN             | SULLINS      |
| L1, L2                                                      |     2 | 2-Line common-mode filter (SMD)                                   | ACT45B-101-2P         | TDK          |
| P1                                                          |     1 | 15-circuit CLIK-Mate vertical PCB receptacle, 1.50mm pitch        | 5025841570            | MOLEX        |
| P2, P3, P5, P6, P8,P9                                       |     6 | 2-circuit CLIK-Mate vertical PCB receptacle, 1.50mm pitch         | 5025840270            | MOLEX        |
| R1                                                          |     1 | 100Ω ±5% resistor (1206)                                          |                       |              |
| R2                                                          |     1 | 1kΩ ±5% resistor (0603)                                           |                       |              |
| R3-R15                                                      |    13 | 1kΩ ±1%, resistor (0603)                                          |                       |              |
| R16-R27,R30,R80,R87- R92,R96,R100,R102- R104,R107,R113-R125 |    39 | 12Ω, 0.5W resistor (1210)                                         | CRCW251212R0F         | VISHAY/ DALE |
| R28, R29, R56, R57, R60, R61, R64, R65, R75, R76            |    10 | 10kΩ ±1%, resistor (0603)                                         |                       |              |
| R32, R33, R34, R35                                          |     4 | 150kΩ ±5% resistor (0402)                                         |                       |              |
| R36-R39, R79, R95, R105, R106, R111, R1016                  |    10 | 0Ω resistor (0603)                                                |                       |              |
| R40, R62, R63, R66                                          |     4 | 100kΩ ±5%, resistor (0603)                                        |                       |              |
| R42-R53                                                     |    12 | 2.0kΩ ±0.1% resistor (0805)                                       | ECG ERA-6YEB202V      | PANASONIC    |

│

Evaluates: MAX17823B

## MAX17823 EV Kit Bill of Materials (continued)

| REF_DES                                                                                                                                                                                                           |   QTY | DESCRIPTION                                                                     | MFG PART #           | MFG        |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------------------------------|----------------------|------------|
| R31, R41, R58, R59                                                                                                                                                                                                |     4 | 100Ω ±1% resistor (1206)                                                        |                      |            |
| R54, R55, R77, R78, R67, R68, R70, R72                                                                                                                                                                            |     8 | 26.1Ω ±1% resistor (1206)                                                       |                      |            |
| R69, R71, R83-R86, R93, R94                                                                                                                                                                                       |     8 | 0Ω resistor (1206)                                                              |                      |            |
| R73, R74, R81, R82                                                                                                                                                                                                |     4 | 1.5kΩ ±1% resistor (1206)                                                       |                      |            |
| R110                                                                                                                                                                                                              |     1 | 10.0Ω ±1% resistor (0805)                                                       | ERJ-6ENF10R0V        | PANASONIC  |
| SW1                                                                                                                                                                                                               |     1 | 12-position SPST DIP switch                                                     | CTS 206-12ST         |            |
| DCIN, THRM, VDDL1, VDDL2, VDDL3, VDDL4, VAA, VAA, GPIO3_A, GPIO2_A, GPIO1_A, GPIO0_A, HV, TXUP, TXUN, RXUP, RXUN, TXUP_A, TXUN_A, RXUP_A, RXUN_A, TXLP, TXLN, RXLP, RXLN, TXLP_A, TXLN_A, RXLP_A, RXLN_A, /SHDNL\ |    30 | Multipurpose test point, red                                                    | 5010                 | KEYSTONE   |
| AGND (x6)                                                                                                                                                                                                         |     6 | Multipurpose test point, black                                                  | 5011                 | KEYSTONE   |
| PACK+, PACK-, BAT0-BAT12, AGND                                                                                                                                                                                    |    16 | 20G tinned copper bus wire formed into 'U' shaped loop (0.25' off the PC board) |                      |            |
| U1                                                                                                                                                                                                                |     1 | Daisy-chainable analog front end (64L LQFP)                                     | MAX17823GCB/V+       | MAXIM      |
| U2, U3                                                                                                                                                                                                            |     2 | FMB3906A dual PNP SSOT-6                                                        | FMB3906              | FAIRCHILD  |
|                                                                                                                                                                                                                   |    21 | Shunt                                                                           | STC02SYAN            | SULLINS    |
| C4                                                                                                                                                                                                                |     0 | Not Installed, ceramic capacitor (2220)                                         |                      |            |
| C22                                                                                                                                                                                                               |     0 | Not Installed, ceramic capacitor (1210)                                         |                      |            |
| C28-C39, C65, C66, C85, C86, C87, C90, C91, C100, C101, C103                                                                                                                                                      |     0 | Not Installed, ceramic capacitor (0603)                                         |                      |            |
| C61, C62, C92, C93                                                                                                                                                                                                |     0 | Not Installed, ceramic capacitor (0805)                                         |                      |            |
| C80, C82, C94, C95                                                                                                                                                                                                |     0 | Not Installed, 3-terminal capacitor (0805)                                      |                      |            |
| D3, D4, D5, D6                                                                                                                                                                                                    |     0 | Not Installed, Zener diode (SOD123)                                             |                      |            |
| D15-D26                                                                                                                                                                                                           |     0 | Not Installed, unidirectional ESD protection diodes (SOD323)                    | PESD5V0U1UA          | NXP        |
| D30, D31, D32, D33                                                                                                                                                                                                |     0 | Not Installed, 100V, 1A Schottky diode (SOD123-FL)                              | MBR1H100SF           | ON         |
| D34                                                                                                                                                                                                               |     0 | 1A, 150V diode POWERDI®123                                                      | DFLS1150-7           | DIODES INC |
| J1, J2, J3, J4                                                                                                                                                                                                    |     0 | Not Installed, 16 -in receptacle (0.1in centers)                                | SSW-116-01-T-S       | SAMTEC     |
| J6                                                                                                                                                                                                                |     0 | Not Installed, 14-pin dual row shrouded (7x2) header (0.1 in centers)           | SBH11-PBPC-D07-ST-BK | SULLINS    |
| L3, L4                                                                                                                                                                                                            |     0 | Not Installed, automotive common mode filter                                    |                      |            |
| R98, R99, R108, R109, R1014, R1015, R112                                                                                                                                                                          |     0 | Not Installed, resistor (0603)                                                  |                      |            |
| R97, R101                                                                                                                                                                                                         |     0 | Not Installed, 0Ω resistor (1206)                                               |                      |            |
| D8                                                                                                                                                                                                                |     0 | Not Installed 500mW, 4.3V Zener diode                                           | MMSZ5229BT1G         | ON         |
| D38                                                                                                                                                                                                               |     0 | Not Installed 1A, 100V diode (SMA)                                              | Semiconductor S1B    | FAIRCHILD  |
| C26                                                                                                                                                                                                               |     0 | Not Installed 2.2uF ±10%, 100V X7R ceramic capacitor (1210)                     | GRM32ER72A225K       | MURATA     |
| Pack-out                                                                                                                                                                                                          |     2 | CLIK-MATE crossover cable (2-wire) Rev 3                                        | MAXCLICK-MATE        |            |

Evaluates: MAX17823B

## MAX17823 EV Kit Schematics

Figure 20. MAX17823 EV Kit Schematic Page 1

<!-- image -->

## MAX17823 EV Kit Schematics (continued)

Figure 21. MAX17823 EV Kit Schematic Page 2

<!-- image -->

## MAX17823 EV Kit Schematics (continued)

Figure 22. MAX17823 EV Kit Schematic Page 3

<!-- image -->

Evaluates: MAX17823B

## MAX17823 EV Kit Schematics (continued)

Figure 23. MAX17823 EV Kit Schematic Page 4

<!-- image -->

## MAX17823 Evaluation System

## MAX17823 EV Kit PCB Layouts

Figure 24. MAX17823 EV Kit PCB Top Layer Silkscreen

<!-- image -->

Evaluates: MAX17823B

│

## MAX17823 EV Kit PCB Layouts (continued)

Figure 25. MAX17823 EV Kit PCB Top Layer Metal

<!-- image -->

│

## MAX17823 EV Kit PCB Layouts (continued)

Figure 26. MAX17823 EV Kit PCB Layer Two Metal

<!-- image -->

│

## MAX17823 Evaluation System

## MAX17823 EV Kit PCB Layouts (continued)

Figure 27. MAX17823 EV Kit PCB Layer Three Metal

<!-- image -->

Evaluates: MAX17823B

│

## MAX17823 EV Kit PCB Layouts (continued)

Figure 28. MAX17823 EV Kit PCB Bottom Layer Metal

<!-- image -->

│

## MAX17823 EV Kit PCB Layouts (continued)

Figure 29. MAX17823 EV Kit PCB Bottom Layer Silkscreen

<!-- image -->

Evaluates: MAX17823B

│

## MAX17823 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------|-----------------|
|                 0 | 7/19            | Initial Release                                                  | -               |
|                 1 | 10/19           | Updated globally to indicate that the EV kit evaluates MAX17823B | 1-40            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17823B