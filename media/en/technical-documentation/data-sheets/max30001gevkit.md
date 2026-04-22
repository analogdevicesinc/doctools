<!-- lastmod 2024-08-14 -->
<!-- image -->

Evaluates: MAX30001G

## General Description

The  MAX30001G  evaluation  kit  (EV  kit)  provides  a single platform to evaluate the functionality and features  of  the  MAX30001G  with  Biopotential  (ECG and  R-to-R)  and  Bioimpedance  (BioZ)  optimized  for Galvanic  Skin  Response  (GSR)  measurement  capabilities.  The  EV  kit  includes  a  MAX30001G    evaluation kit  (EV  kit)  and  a  MAX32630FTHR  Cortex-M4F  microcontroller  for  wearables.  The  MAX32630FTHR  provides power to the MAX30001G EV kit and contains the firm -ware necessary to use the EV kit GUI program. The EV kit ships with jumpers installed and supply voltages set to typical operating values. Optional connections exist which can be shunted to make use of different functionalities.

This EV kit is not a medical device.

Ordering Information appears at end of data sheet.

## MAX30001G EV Kit Board Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX30001G Evaluation Kit

## Features

- Convenient Platform to Evaluate the MAX30001G
- Many Easy-to-Reach Test Points
- Measure Individual Supply Currents
- Touchproof Cable Connectors
- Windows ®  7/8/10 Compatible GUI software
- Fully Assembled and Tested
- Facilitates IEC 60601-2-47 Compliance Testing
- Ultra-Low-Power Design

## EV kit Contents

- MAX30001G EV kit
- MAX32630FTHR
- USB A to micro-USB cable
- Three (3) ECG cables

## Note:

1. The GUI setup files can be obtained by the Procedure in the Quick Start section
2. EVKIT  design  files  are  attached  at  the  end  of  this document.

## MAX30001G EV kit Files

| FILE                | DECRIPTION     |
|---------------------|----------------|
| MAX30001G EVKit.exe | PC GUI Program |

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of EV kit software. Text which is bold and underlined refers  to  items  from  the  Windows  operating system.

- MAX30001G EV kit
- MAX32630FTHR
- Micro-USB cable
- Windows PC with USB port

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Confirm that the MAX32630FTHR is firmly seated in connectors J8 and J7 in the proper orientation.
- 2) Set the EV kit hardware on a nonconductive surface to ensure that nothing on the PCB shorts together.
- 3) Connect the EV kit hardware to a PC with the provided  USB  cable. Attach  the  micro-USB  end  to  the MAX32630FTHR board and the type A end to the host PC. Once connected, LED D1 on the MAX32630FTHR will blink red, and LED D1 on the EV kit board will be green.
- 4) Windows  should  automatically  begin  installing  the necessary  device  driver.  The  USB  interface  of  the EV kit hardware is configured as a COM device and therefore  does  not  require  a  unique/custom  device driver. Once the driver installation is complete, a Windows message appears near the System Icon menu, indicating that the hardware is ready to use. Do not attempt to run the GUI before this message. If you do, then you must close the application and restart it once the driver installation is complete. On some versions of Windows, administrator privileges may be required to install the USB device.
- 5) Once the device drivers have been installed, download the latest EV kit software (MAX30001EVKitSoftwareInstall.ZIP) from the MAX30001G EV KIT web page and extract it to a temporary folder.
- 6) Open the  extracted  ZIP  folder  and  double-click  the .EXE file to run the installer. If a message box stat -ing  'The  publisher  could  not  be  verified.  Are  you sure you want to run this software?' appears, select the Yes option.
- 7) When the  installer  GUI  appears,  click Next .  Select the  installation  paths  and  if  a  shortcut  should  be created  on  the  desktop.  When  prompted,  press Install . Once complete, click Close .
- 8) Double-click the shortcut to start the GUI.  Alternatively,  go  to  Start  |  All  Programs.  Look  for  the MAX30001G  EVKitSoftware  folder  and  click  on  the MAX30001G EVKitSoftware.EXE file inside the folder.
- 9) After the initial splash screen, when the GUI appears, the text in the right field of the status strip at the bottom of the GUI window should display Hardware Connected and the COM port associated with the EV kit.

## Detailed Description of Software

## Software Startup

If  the  EV kit is connected when the software is opened, the software first initializes the hardware to communicate. The software then reads the device registers and updates all  the  associated  control  fields  displayed  on  the  GUI. The  status  strip  at  the  bottom  of  the  GUI  displays  the MAX32630FTHR firmware version, the GUI version, and the hardware's associated COM port.

If the EV kit is not connected on startup, the Connection Issue dialog  box  shown  in  Figure  1  appears  after  the GUI splash screen. Clicking OK opens the Connection window of the GUI. Use the Scan Ports button to identify all COM ports in use by the PC and select the port associated with the EV kit hardware in the COM Port drop down menu.  This  window,  shown  in  Figure  2,  may  appear  if connecting to the EV kit for the first time even if the hard -ware is connected before starting the GUI.

Once the correct COM port is selected, press Connect at the bottom center of the GUI to enter the main window. The program reads all device registers and updates the control fields of the GUI.

Evaluates: MAX30001G

Figure 1. The Connection Issue Dialog Box Appears If The GUI Does Not Detect the EV Kit.

<!-- image -->

Figure 2. The Connection Screen Allows The User to Select Which COM Port Contains the EV Kit.

<!-- image -->

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 3) is located at the top of the GUI window. This bar comprises the File , Device , Options , Logging , and Help menus whose functions are detailed in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu  provides  the ability to connect or  disconnect  an  EV  kit  to  the  GUI.  If  a  board  is disconnected while the GUI is open the GUI will display Hardware  Not  Connected in  the  lower  right  corner.  If the device is then plugged back in, the user will be able to  navigate to the Device menu and select Connect .  If successful,  the  bottom  right  corner  of  the  GUI  will  read Device Connected and  display  the  COM  port  to  which the hardware is connected.

## Options Menu

The Options menu provides several settings  to  access more  features  offered  by  the  GUI. Show  MAX30001G Register Names changes all the control field names to correspond  with  their  register  names  in  the  data  sheet. BioZ Milliohm Scale configures the scaling on the BioZ plot  to  be  shown  in  milliohms  rather  than  ohms  for  a zoomed in the display of the BioZ measurement. Plots Maximum  Time allows  the  user  to  select  how  many seconds  of  data  they  want  to  be  shown  on  the  plot  at one  time.  The  selected  time  will  still  show  10  divisions and each division will be 1/10 of the maximum time. By default, the maximum time is 10 seconds.

Load Register Settings allows the user to quickly set up the GUI based on previous, saved register settings. The Save Register Settings item is used to save the current register settings to be loaded again at a later time. The Show Advanced Tab setting will add an extra tab in the

GUI called Advanced . The advanced tab is described in depth in the Tab Control section of this document.

## Logging Menu

The Logging menu provides a way to export accurate, exact data that is being measured by the device. The four log  options  are ECG File Log , R-To-R File  Log , Pace File Log ,  and BioZ File Blog .  Selecting  any log option opens a prompt asking for a name for the comma-separatedvalue (CSV) log file, as well as the location to save the generated  file. Figure  4  shows  the  GUI  when  creating a  log  file.  Data  logging  begins  when Start  Monitor is pressed on the Plots tab and ends when Stop Monitor is pushed. The GUI disables logging after one monitoring session  and  a  new  file  must  be  generated  through  the Logging menu to log the next dataset.

## Help Menu

The Help menu contains information that can be helpful in  aiding  with  any  problems which may arise in the use of the GUI. Online Documentation takes the user to the Analog Devices website associated with the MAX30001G where all documents that are associated with the part are located. The About option displays the GUI splash screen which tells the user which GUI version is being used.

## Tab Control

The  main  interface  structure  of  the  GUI  consists  of  a tab control, where each tab contains controls relevant to various blocks of the device. Changing these interactive controls triggers a write operation to the MAX30001G to update the register contents. Likewise, these controls are refreshed when reading from the device.

Tabs  responsible  for  configuring  measurements  contain block diagrams of their respective channel. To configure a measurement channel, select the desired values from the drop down list items in and below the diagram. Switches in  the  block  diagrams  open  and  close  according  to  the device configuration.

Figure 3. The ToolStrip Menu Items.

<!-- image -->

Figure 4. Saving a Log File.

<!-- image -->

## Home Tab

The Home tab (Figure 5) provides an overview of the MAX30001G EV kit's features.

Figure 5. MAX30001G EV Kit GUI Home Tab

<!-- image -->

Evaluates: MAX30001G

## MAX30001G Evaluation Kit

## ECG Channel Tab

The ECG Channel tab (Figure 6) contains all settings which dictate the signal processing behavior of the ECG measurement channel. Controls for the ECG input channel, such as Fast Recovery settings, gain for the programmable amplifier, and the ADC sampling rate, are found in the ECG Channel block diagram. The R-to-R box configures R-to-R detection using the ECG input data.

A detailed description of all ECG channel configuration settings and R-to-R functionality can be found in the MAX30001G data sheet.

Figure 6. MAX30001G EV Kit ECG Channel Tab.

<!-- image -->

## MAX30001G Evaluation Kit

## ECG MUX Tab

The ECG  MUX tab  (Figure  7 )  configures  the  internal  ECG  switches  that  precede  the  ECG  amplifiers  and  filters. Internal  calibration  and  verification  functions  of  the  IC  are  also  accessible  from  this  tab.  To  measure  external  ECG signals, the ECGP Switch and ECGN Switch in the Switches block must be set to Connected . The switches should be set to Isolated if Calibration Test Voltage is used. It is also recommended to have Resistive Lead Bias Enable set to ECG Bias , Resistive Bias Value set to 100MΩ , Positive Input Bias Enable and Negative Input Bias Enable set to Connected . DC Lead-Off Check , ULP Lead-On Check , and Calibration Test Voltage functionalities are detailed further in depth in the MAX30001G data sheet.

Figure 7. MAX30001G EV Kit ECG MUX Tab

<!-- image -->

## MAX30001G Evaluation Kit

## BioZ Channel Tab

The BioZ Channel tab (Figure 8) hosts the settings that control the BioZ components following the BioZ Input MUX. As in the ECG Channel tab, controls on this tab configure the filters and amplifiers of the device's BioZ channel.

A detailed description of all BioZ channel configuration settings can be found in the MAX30001G data sheet.

Figure 8. MAX30001G EV Kit BioZ Channel Tab.

<!-- image -->

Evaluates: MAX30001G

## MAX30001G Evaluation Kit

## BioZ MUX Tab

The BioZ MUX tab (Figure 9 ) configures the internal BioZ switches that precede the BioZ signal path. Internal calibration and verification functions of the IC are also accessible from this tab. In order to use the BioZ channel, the BIP Switch and BIN Switch in the Switches block must be set to Connected . The switches should be set to Isolated if using the internal self-test features. As part of the BioZ self-test, a resistive load is available on the DRVP and DRVN pins. Clicking on Selectable Resistive Load will bring the GUI to the BioZ Load tab. Refer to the full MAX30001G data sheet for detailed descriptions of the BioZ MUX configurations.

Figure 9. MAX30001G EV Kit BioZ MUX Tab.

<!-- image -->

│

## MAX30001G Evaluation Kit

## BioZ Load

The BioZ Load tab  (Figure  10 )  configures the resistive load used for the self-test of the BioZ channel. The nominal resistance and modulation frequency are set by the Nominal Resistance and Frequency controls in the Modulated Resistance Built-In-Self-Test (RMOD BIST) block. RMOD BIST Enable configures  the  BioZ  channel  to  connect  or detach the resistive load.

Refer to the full MAX30001G data sheet for a description of the modulated resistive load.

Figure 10. MAX30001G EV Kit BioZ Load Tab.

<!-- image -->

│

## MAX30001G Evaluation Kit

## Plots Tab

The Plots tab (Figure 11) enables real time monitoring of ECG and BioZ waveforms. By default, both ECG and BioZ plots are visible. Toggling the controls in Channel/Plot Enable changes which of the two plots is displayed. If ECG is enabled and BioZ is disabled, the plot area will be occupied entirely by the ECG waveform. Likewise, if BioZ is enabled instead of ECG , the BioZ plot is maximized. When both measurement channels are enabled, the plotting space contains both ECG and BioZ data.

Figure 11.MAX30001G EV Kit Plots Tab.

<!-- image -->

│

## MAX30001G Evaluation Kit

R-to-R data is shown in the ECG plot. R-to-R peak detection is indicated by a red circle at the peaks of the R waves. Heart rate information gathered from R-to-R detection can be found in the Heart Rate (from R-to-R) box below the plotting area. Figure 12 illustrates an ECG waveform with R-to-R detection enabled. The ECG sample rate is 128sps.

Figure 12. An ECG Waveform with R-to-R and Pace Detection Enabled.

<!-- image -->

## MAX30001G Evaluation Kit

## MicroSD Log Tab

The MAX30001G EV kit can use the SD card read/write functionality  of  the  MAX32630FTHR  to  store  and  recall log  data  to  and  from  a  microSD  card.  This  allows  data to be collected with the USB cable connected or with the USB disconnected from the PC host and powering the EV kit with a battery. To use an SD card, insert the card into connector CN2 on the underside of the MAX32630FTHR board before starting the GUI.

SD card logging  is  configured  in  the MicroSD Log tab (Figure  13).  The  GUI  can  save,  load,  and  clear  stored register configuration settings with the Read , Write , and

## Evaluates: MAX30001G

Erase buttons, respectively. Pressing Advanced displays the current register contents to be written to an SD card setting  file  when Write is  pressed.  After  confirming  the register configurations, select the type of data to save in the ECG Channel Log Enable box  and  press Write to load the measurement parameters to the SD card. Press SW2 on the MAX32630FTHR board to start logging and press it a second time to stop logging.

When the EV kit is reconnected to the GUI after logging data, data from the SD card can be saved to the host PC. Press Save to File to open a file dialogue and select the location and file name of the logged data. Data is stored in a CSV format.

Figure 13. MicroSD Log Tab with Advanced Toggled On.

<!-- image -->

│

## MAX30001G Evaluation Kit

## Registers Tab

The Registers tab (Figure 14) provides more direct access to the internal registers of the MAX30001G. From this tab, it is possible to read the contents of individual registers and to manually enter the desired bit settings for a write operation. For the register address selected in the table on the left, the contents are displayed at the bottom of the tab and visualized as bold and non-bold bit names. When a bit is bold, its value is 1. Otherwise, the bit is 0. Full descriptions of each bit are available in the Bit Description field for quick reference. Pressing Read reads the selected register, highlighted in teal, while pressing Read All reads all registers and updates their values in the Registers tab. To write to a register, set the desired bit values by clicking on the bit names to make bold or non-bold and then press Write . Alternatively, double click the Value (Hex) cell of a selected row to manually enter a value and press the 'Enter' key to write the value to the device register.

Figure 14. Registers Tab.

<!-- image -->

│

## MAX30001G Evaluation Kit

## Advanced Tab

The Advanced tab ( Figure 15 ) is accessible through the Options T oolStrip menu. The tab provides manual communication with the MAX30001G to bypass the GUI controls entirely. Enter the register address, as a hexadecimal value, in the Address field. Read data from a register by pressing the ReadReg button and the data will populate the Read Data field. To write data, enter the hexadecimal value in the Write Data field and press the WriteReg button. Command Line displays the formatted command sent by the GUI to the EV kit.

Figure 15. Advanced Tab.

<!-- image -->

## Detailed Description of Hardware

The  MAX30001G  EV  kit  provides  a  single  platform  to evaluate the functionality and features of the MAX30001G with  Biopotential  (ECG  and  R-to-R)  and  Bioimpedance (BioZ)  measurement  capabilities.  The  board  contains jumpers,  optional  resistors,  and  capacitors to test the MAX30001G under several conditions. A list of all jumpers and their respective functions is available in Table 1. An onboard 32.768kHz crystal oscillator (U5) supplies FCLK to the IC, but external frequency generation is supported.

The  EV  kit  utilizes  the  MAX32630FTHR  Cortex-M4F Microcontroller  for  Wearables  for  interfacing  with  the GUI and optionally providing power to the MAX30001G. The MAX32630FTHR operates either from a host PC or

## Table 1. Description Of Jumpers

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------|
| J_ECGN   | 1-2*             | Connects ECGN on the IC to C_ECGN on the EV kit.                                    |
| J_ECGP   | 1-2*             | Connects ECGP on the IC to C_ECGP on the EV kit.                                    |
| EN_BN    | 1-2              | Connects ECGN to BIN.                                                               |
| EP_BP    | 1-2              | Connects ECGP to BIP.                                                               |
| EN_UNBAL | 1-2*             | Bypasses the ECG electrode unbalance on ECGN.                                       |
| EP_UNBAL | 1-2*             | Bypasses the ECG electrode unbalance on ECGP.                                       |
| EP_EN    | 1-2              | Short ECGP to ECGN.                                                                 |
| J_BIN    | 1-2*             | Connects BIN on the IC to C_BIN on the EV kit.                                      |
| J_BIP    | 1-2*             | Connects BIN on the IC to C_BIN on the EV kit.                                      |
| RN       | 1-2              | Connects one end of R28 to BIN.                                                     |
| RP       | 1-2              | Connects one end of R28 to BIP.                                                     |
| DN_BN    | 1-2*             | Connects DRVN to BIN.                                                               |
| DP_BP    | 1-2*             | Connects DRVP to BIP.                                                               |
| BP_BN    | 1-2              | Short BIP to BIN.                                                                   |
| J_DRVN   | 1-2*             | Connects DRVN on the IC to C_DRVN on the EV kit.                                    |
| J_DRVP   | 1-2*             | Connects DRVP on the IC to C_DRVP on the EV kit.                                    |
| BB_SEL   | 1-2*             | Use VCM as the body bias.                                                           |
| BB_SEL   | 2-3              | Use an adjustable voltage from 0V to OVDD as the body bias. Adjust voltage with R7. |
| J_RBIAS  | 1-2*             | Connect an external 324kΩ resistor to RBIAS.                                        |
| BUFF1_IN | 1-2              | Input to second buffer of U4.                                                       |

directly from a Li+ battery. If an SD card is present in the MAX32630FTHR,  register  settings  and  measurement configurations can be saved through the GUI. When the EV kit operates without a host PC, pressing SW2 on the MAX32630FTHR  initiates  the  measurement  and  saves log files to the SD card. Logging is stopped by pressing SW2 a second time.

See  Figure  16 for  a  simplified  schematic  of  the  EV  kit biopotential circuitry.

Note: Ball  C2  on  the  MAX30001G  is  called N.C. and should not  be  connected to  anything.  This  PCB  does route  this  signal  to  the  testpoint  labeled AOUT. Do not connect anything to this testpoint.

## Table 1. Description Of Jumpers (continued)

| JUMPER     | SHUNT POSITION   | DESCRIPTION                                                         |
|------------|------------------|---------------------------------------------------------------------|
| 1V8        | 1-2              | Supply 1.8V to J_AVDD and J_DVDD from the MAX32630FTHR.             |
| 1V8        | 2-3*             | Supply an adjustable voltage to J_AVDD and J_DVDD from an LDO (U2). |
| 3V3        | 1-2              | Supply 3.3V to J_OVDD and OVDDX from the MAX32630FTHR.              |
| 3V3        | 2-3*             | Supply an adjustable voltage to J_OVDD and OVDDX from an LDO (U3).  |
| J_AVDD     | 1-2*             | Connect AVDD to pin 2 of jumper 1V8.                                |
| J_DVDD     | 1-2*             | Connect DVDD to pin 2 of Jumper 1V8.                                |
| J_OVDD     | 1-2*             | Connect OVDD to pin 2 of jumper 3V3.                                |
| XTL_PWR    | 1-2*             | Power the onboard crystal from OVDDX.                               |
| ONBRD_FCLK | 1-2*             | Connect the onboard crystal to FCLK.                                |
| GND1       | 1-2**            | Connect GND of the MAX32630FTHR to AGND1.                           |
| GND2       | 1-2**            | Connect GND of the MAX32630FTHR to AGND2.                           |
| J_EXT_PWR  | 1-2              | Connect an external supply to the 5V rail.                          |
| J_EXT_PWR  | 2-3              | Do not use.                                                         |
| J_SYS      | 1-2**            | Connect SYS on the MAX32630FTHR to the 5V rail.                     |
| J_INTB     | 1-2**            | Connect INTB to the MAX32630FTHR.                                   |
| J_INT2B    | 1-2**            | Connect INT2B to the MAX32630FTHR.                                  |
| J_SDO      | 1-2**            | Connect SDO to MISO of the MAX32630FTHR.                            |
| J_SDI      | 1-2**            | Connect SDI to MOSI of the MAX32630FTHR.                            |
| J_SCLK     | 1-2**            | Connect SCLK to SCLK of the MAX32630FTHR.                           |
| J_CSB      | 1-2**            | Connect CSB to the MAX32630FTHR.                                    |
| P_UP       | 1-2              | Connect R8-11 to OVDDX.                                             |
| P_DWN      | 1-2*             | Connect R15-17 to GND.                                              |

│

## MAX30001G Evaluation Kit

## Evaluates: MAX30001G

Figure 16. Simplified Schematic.

<!-- image -->

│

## Powering the EV Kit

The MAX30001G EV kit can be powered from an external supply or directly  from  the  MAX32630FTHR. To use an external supply, install a shunt on jumper J\_EXT\_PWR in the 1-2 position. This connects the EXT\_PWR test point to  the  board's  5V  rail.  Set  the  power  supply's  output  to +5V, disable the output, connect the positive lead to EXT\_ PWR and the negative to AGND1, then enable the supply. To power the EV kit with the MAX32630FTHR, install a shunt on jumper J\_SYS in the 1-2 position to connect the SYS node to the 5V rail. SYS regulates the USB voltage or directly connects to the battery if present.

The MAX30001G IC receives power from OVDD, AVDD, and  DVDD.  These  pins  receive  power  either  through the  MAX32630FTHR,  externally  through  test  points,  or through  adjustable  LDOs  U2  and  U3.  To  supply  the  IC from  the  MAX32630FTHR's  1.8V  and  3.3V  rails,  place a shunt in the 1-2 position on the 1V8 and 3V3 jumpers. To  use  the  onboard  LDOs,  place  the  shunts  in  the  2-3 position. Two potentiometers are available to set the U2 and U3 voltages: R4 and R10.

To  operate  the  EV  kit  without  a  connection  to  a  host PC  or  power  supply,  insert  a  microSD  card  into  the MAX32630FTHR. After saving a test configuration, disconnect the  board  from  the  host  PC  and  connect  a  Li+  battery to  the  MAX32630FTHR.  Refer  to  the  MAX32630FTHR documentation  for  details  on  connecting  a  Li+  battery. Press SW2 to trigger the measurements saved to the SD card. The J\_SYS shunt must be in the 1-2 position for this configuration.

## Configuring the Board for Measurement

The MAX30001G EV kit offers several potential connec -tion and component configurations to enable a variety of tests. Both the ECG channel and BioZ channel allow for user-defined line resistance with resistors R26 and R27 for BioZ, and R29 and R30 for ECG. By default, these resistors are populated with 0Ω shunts but can be changed to suit the application. The board also allows for the instal-

## Evaluates: MAX30001G

lation of external low-pass filtering capacitors on the ECG and  BioZ  lines.  Capacitors  C8  and  C25  can  create  an external  common  mode  filter  for  the  ECG  and  BioZ  lines, respectively. C24, C29, C26, and C28 filter ECGP, ECGN, BIP, and BIN. The cutoff frequency of the filters is set by the value of these capacitors and the input resistors R26, R27, R29, and R30. The board also allows the ECGN and ECGP or BIN and BIP inputs to be shorted with jumpers EP\_EN and BP\_BN, respectively.

Refer to the MAX30001G  EV  kit schematic and MAX30001G EV kit PCB layout sections for component connections and placements.

## ECG Measurement

The  EV  kit  ships  configured  to  measure  ECG  with balanced electrodes, R-to-R, and BioZ signals. The jumper configurations  required  for  these  measurements  are shown in Figure 17. Connected jumpers are distinguished with  solid  black  nodes  in  the  jumper  box.  To  use  the electrode connectors on the EV kit, ensure the required shunts are installed.

By default, the EV kit leaves the ECG channel balanced. By removing the shunts on EN\_UNBAL And EP\_UNBAL, the ECGN and ECGP lines each include a 51kΩ resistor and 47nF capacitor in parallel.

## BioZ Measurement

Additionally, the EV kit includes a 100Ω resistor to verify the  BioZ  configuration. Attach  shunts  on  RP  and  RN  to connect  the  resistor  to  the  BioZ  inputs  and    shunts  on DP\_BP and DN\_BN to route the drive signal to the BioZ channel. Figure 18 illustrates these connections.

Refer to the MAX30001G data sheet for details on configur -ing a BioZ measurement. Note that the default setting of the current generator is FMSTR/64 (about 500Hz) and the BioZ channel has an internal high-pass filter with a default 500Hz cutoff frequency. In order to correctly measure the 100Ω resistor, bypass or lower the filter cutoff frequency or increase the current generator frequency.

Figure 17. Default Measurement Channel Jumper Configurations

<!-- image -->

Figure 18. BioZ Measurement with 100Ω Test Impedance.

<!-- image -->

## Galvanic Skin Response Measurement

When using the BioZ channel for GSR measurements, two dry electrodes should be used to focus the measurement on the skin's contact impedance. A lower current generator frequency, such as 125Hz, 250Hz, or 500Hz should be selected. Ensure that the BioZ receiver's analog high pass filter cutoff frequency is set below this stimulus frequency. At these lower frequencies, a 220nF DC blocking capacitor should be used between both DRVP and DRVN and their respective electrode. GSR impedance measurements are typically as high as 1MΩ but maybe as high as 10MΩ under low-moisture conditions. Choose lower current generator amplitudes so that the differential voltage at the BioZ input channel does not exceed the maximum AC input differential range of ±90 mV. Figure 19 illustrates the setup for GSR measurements.

Figure 19. Configuring the EV Kit to measure GSR.

<!-- image -->

## Component Suppliers

| SUPPLIER                    | WEBSITE             |
|-----------------------------|---------------------|
| Bourns                      | www.bourns.com      |
| Epson                       | www.epson.com       |
| Kemet                       | www.kemet.com       |
| Keystone                    | www.keyelco.com     |
| Lite-On Electronics         | us.liteon.com       |
| Analog Devices              | www.analog.com      |
| Murata                      | www.murata.com      |
| Panasonic                   | www.panasonic.com   |
| Plastics One                | www.plasticsone.com |
| Sullins Connector Solutions | www.sullinscorp.com |
| Susuma                      | www.susuma-usa.com  |
| Taiyo Yuden                 | www.t-yuden.com     |
| TDK                         | www.global.tdk.com  |
| TE Connectivity             | www.te.com          |
| Vishay Dale                 | www.vishay.com      |

Note: Indicate that you are using the MAX30001G EV kit when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX30001GEVKIT# | EV kit |

Evaluates: MAX30001G

## MAX30001G\_EVSYS\_EVKIT Bill of Materials

|   ITEM | REF_DES                                                                                                                                                                                          | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                                                         |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-----------------------------------|---------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | 1V8, 3V3, BB_SEL, GND1, GND2, J_CSB, J_EXT_PWR, J_INT2B, J_INTB, J_SCLK, J_SDI, J_SDO, J_SYS                                                                                                     | -         |    13 | PCC03SAAN                         | SULLINS                   | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                            |
|      2 | AGND, AGND1-AGND4, AOUT, BB, BIN, BIP, BUFF1_OUT, CSB, DRVN, DRVP, ECGN, ECGP, FCLK, FTHR_GND, INT2B, INTB, RBIAS, SCLK, SDI, SDO, VBG, VCM, VREF                                                | -         |    26 | 5011                              | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |
|      3 | AVDD, DVDD, EXT_PWR, OVDD                                                                                                                                                                        | -         |     4 | 5010                              | KEYSTONE                  | N/A            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                                                  |
|      4 | BP_BN, BUFF1_IN, DN_BN, DP_BP, EN_BN, EN_UNBAL, EP_BP, EP_EN, EP_UNBAL, J_AVDD, J_BIN, J_BIP, J_DRVN, J_DRVP, J_DVDD, J_ECGN, J_ECGP, J_OVDD, J_RBIAS, ONBRD_FCLK, P_DOWN, P_UP, RN, RP, XTL_PWR | -         |    25 | 5-146280-2                        | TE CONNECTIVITY           | 5-146280-2     | CONNECTOR; MALE; THROUGH HOLE; HEADER ASSEMBLY; MOD II; BREAKWAY; SINGLE ROW; HIGH TEMPERATURE; VERTICAL W/ 0.025 SQ POST; 0.100 C; STRAIGHT; 2PINS |
|      5 | C1, C2                                                                                                                                                                                           | -         |     2 | C0805C473J3GACTU                  | KEMET                     | 0.047UF        | CAP; SMT (0805); 0.047UF; 5%; 25V; C0G; CERAMIC                                                                                                     |
|      6 | C3, C30                                                                                                                                                                                          | -         |     2 | C0805C224J3RAC                    | KEMET                     | 0.22UF         | CAP; SMT (0805); 0.22UF; 5%; 25V; X7R; CERAMIC                                                                                                      |
|      7 | C4                                                                                                                                                                                               | -         |     1 | UMK107AB7105KA; CC0603KRX7R9BB105 | TAIYO YUDEN;YAGEO         | 1UF            | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                                                        |
|      8 | C5-C7, C16-C21, C23                                                                                                                                                                              | -         |    10 | GRM188R61E106MA73                 | MURATA                    | 10UF           | CAPACITOR; SMT (0603); CERAMIC; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R; GRM SERIES; MURATA;                                            |
|      9 | C9, C10, C14, C15                                                                                                                                                                                | -         |     4 | C3216X7R1H335M160AC               | TDK                       | 3.3UF          | CAP; SMT (1206); 3.3UF; 20%; 50V; X7R; CERAMIC;                                                                                                     |
|     10 | C11-C13, C22                                                                                                                                                                                     | -         |     4 | C1608X7R1E104K080AA               | TDK                       | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                              |
|     11 | C27, C31                                                                                                                                                                                         | -         |     2 | KRM31KR72A225KH01                 | MURATA                    | 2.2UF          | CAP; SMT (1206); 2.2UF; 10%; 100V; X7R; CERAMIC                                                                                                     |
|     12 | C32                                                                                                                                                                                              | -         |     1 | C0603C102J5GAC; 06035A102JAT2A    | KEMET;AVX                 | 1000PF         | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC;                                                                                                     |
|     13 | C_BB, C_BIN, C_BIP, C_DRVN, C_DRVP, C_ECGN, C_ECGP                                                                                                                                               | -         |     7 | 41828-50                          | PLASTICS ONE              | 41828-50       | CONNECTOR; FEMALE; THROUGH HOLE; JACK; PCB; 1.5MM; TOUCHPROOF WAVE SOLDER VERSION WITH STAMPING; RIGHT ANGLE; 3PINS                                 |
|     14 | D1                                                                                                                                                                                               | -         |     1 | LTST-C194KGKT                     | LITE-ON ELECTRONICS INC   | LTST-C194KGKT  | DIODE; LED; SMD CHIP LED; WATER CLEAR LENS; AlInGaP GREEN; GREEN; SMT (0603); VF=2.1V; IF=0.02A                                                     |
|     15 | J8                                                                                                                                                                                               | -         |     1 | PPPC161LFBN-RC                    | SULLINS ELECTRONICS CORP. | PPPC161LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                                                                |
|     16 | J9                                                                                                                                                                                               | -         |     1 | PPPC121LFBN-RC                    | SULLINS ELECTRONICS CORP  | PPPC121LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                                                    |

## MAX30001G\_EVSYS\_EVKIT Bill of Materials (continued)

|   ITEM | REF_DES               | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                                 | VALUE         | DESCRIPTION                                                                                                             |
|--------|-----------------------|-----------|-------|------------------------------------------------------------------------------------|----------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
|     17 | R1, R31               | -         |     2 | ERA-6ARW513                                                                        | PANASONIC                                    | 51K           | RES; SMT (0805); 51K; 0.05%; +/-10PPM/DEGC; 0.1250W                                                                     |
|     18 | R2, R3                | -         |     2 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                    | VISHAY; PANASONIC; BOURNS                    | 1K            | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
|     19 | R4, R10               | -         |     2 | 3296Y-202LF                                                                        | BOURNS                                       | 2K            | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296Y SERIES; 2K OHM; 10%; 100PPM; 0.5W                                             |
|     20 | R5, R6                | -         |     2 | CRCW06031K33FK                                                                     | VISHAY DALE                                  | 1.33K         | RES; SMT (0603); 1.33K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |
|     21 | R7                    | -         |     1 | 3296Y-1-103LF                                                                      | BOURNS                                       | 10K           | RESISTOR; THROUGH-HOLE; 10K OHM; 10%; 100PPM; 0.5W; MOLDER CERAMIC OVER METAL FILM                                      |
|     22 | R9, R11, R36          | -         |     3 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO;YAGEO; PANASONIC          | 100K          | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |
|     23 | R12                   | -         |     1 | RN73C1J324KB; 4-1879135-8                                                          | TE CONNECTIVITY; TE CONNECTIVITY             | 324K          | RES; SMT (0603); 324K; 0.10%; +/-10PPM/DEGC; 0.0630W                                                                    |
|     24 | R13, R18, R19, R28    | -         |     4 | RG1608P-101-B; ERA-3YEB101; ERA-3AEB101                                            | SUSUMU CO LTD.; PANASONIC; PANASONIC         | 100           | RES; SMT (0603); 100; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                     |
|     25 | R14                   | -         |     1 | RG1608P-471-B                                                                      | SUSUMU CO LTD.                               | 470           | RES; SMT (0603); 470; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                     |
|     26 | R20, R25              | -         |     2 | ERA-3ARB103                                                                        | PANASONIC                                    | 10K           | RES; SMT (0603); 10K; 0.10%; +/-10PPM/DEGC; 0.1000W                                                                     |
|     27 | R26, R27, R29, R30    | -         |     4 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                       | VISHAY; ROHM SEMICONDUCTOR; PANASONIC;BOURNS | 0             | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                             |
|     28 | U1                    | -         |     1 | MAX30001GCWV+                                                                      | ANALOG DEVICES                               | MAX30001GCWV+ | IC; AFEC; ULTRA-LOW-POWER; SINGLE-CHANNEL INTEGRATED BIOPOTENTIAL (ECG AND R-TO- R) AND BIOIMPEDANCE (BIOZ) AFE ; WLP30 |
|     29 | U2                    | -         |     1 | MAX1806EUA18+                                                                      | ANALOG DEVICES                               | MAX1806EUA18+ | IC; VREG; LOW-VOLTAGE LINEAR REGULATOR; UMAX8-EP                                                                        |
|     30 | U3                    | -         |     1 | MAX8512EXK+                                                                        | ANALOG DEVICES                               | MAX8512EXK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                           |
|     31 | U4                    | -         |     1 | MAX44263AXA+                                                                       | ANALOG DEVICES                               | MAX44263AXA+  | IC; OPAMP; 1.8V; 15MHZ LOW-OFFSET; LOW-POWER; RAIL-TO-RAIL I/O DUAL OPERATIONAL AMPLIFIER; SC70-8;                      |
|     32 | U5                    | -         |     1 | SG-3030-JF-32.768000KHZ-B                                                          | EPSON                                        | 32.768KHZ     | CRYSTAL; SMT; 32.768KHZ                                                                                                 |
|     33 | PCB                   | -         |     1 | MAX30001EVSYS                                                                      | ANALOG DEVICES                               | PCB           | PCB:MAX30001EVSYS                                                                                                       |
|     34 | R8, R15-R17           | DNP       |     0 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO;YAGEO; PANASONIC          | 100K          | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |
|     35 | C8, C24-C26, C28, C29 | DNP       |     0 | N/A                                                                                | N/A                                          | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |

│

TOTAL

## MAX30001G\_EVSYS\_EV Kit Schematic Diagrams

<!-- image -->

## MAX30001G\_EVSYS\_EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX30001G\_EVSYS\_EVKIT PCB Layout Diagrams

<!-- image -->

MAX30001G\_EVSYS\_EVKIT-Top Silkscreen

│

## MAX30001G\_EVSYS\_EVKIT PCB Layout Diagrams (continued)

MAX30001G\_EVSYS\_EVKIT-Top View

<!-- image -->

│

## MAX30001G\_EVSYS\_EVKIT PCB Layout Diagrams (continued)

MAX30001G\_EVSYS\_EVKIT-Layer 2

<!-- image -->

│

## MAX30001G\_EVSYS\_EVKIT PCB Layout Diagrams (continued)

<!-- image -->

MAX30001G\_EVSYS\_EVKIT-Layer 3

│

## MAX30001G\_EVSYS\_EVKIT PCB Layout Diagrams (continued)

<!-- image -->

MAX30001G\_EVSYS\_EVKIT-Bottom View

│

## MAX30001G\_EVSYS\_EVKIT PCB Layout Diagrams (continued)

<!-- image -->

MAX30001G\_EVSYS\_EVKIT-Bottom Silkscreen

│

## MAX30001G Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/21           | Initial Release                                                                                                                                                                                         | -               |
|                 1 | 4 /24           | Added a note at the end of EV System contents. Added the latest Analog product page link to the Quick start section. Replaced 'Maxim' with 'Analog devices' in the Component Suppliers and BOM section. | 1, 2, 4, 23, 25 |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│