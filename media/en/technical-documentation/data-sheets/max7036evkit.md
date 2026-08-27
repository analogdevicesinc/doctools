<!-- lastmod 2022-08-04 -->
## MAX7036 Evaluation Kit

## General Description

The  MAX7036  evaluation  kit  simplifies  the  evaluation of  the  MAX7036,  a  low-power,  sub-GHz,  VLIF  receiver designed  to  demodulate  Amplitude-Shift  Keying  (ASK) or On-Off Keyed (OOK) data in the 300MHz to 450MHz frequency range.

The  MAX7036  EV  kit  operates  in  conjunction  with  an external  Microcontroller  (MCU)  and  Graphical  User Interface (GUI) software running on a computer.

The MAX7036EVKIT is available in two versions,  each  tuned  to  a  different  operating  frequency:  315MHz  (MAX7036EVKIT-315)  and  433.92MHz (MAX7036EVKIT-433). The crystal  and  passive  components  are  optimized  for  these  two  frequencies  but  can easily be changed to work at any RF frequency between 300MHz and 450MHz.

The  EV  kit  includes  Windows ® 10-compatible  software that provides a simple GUI. The GUI controls the on-board PMIC and provides a quick start configuration to evaluate the  MAX7036  functionality,  when  the  MAX32630FTHR Applications Platform is used.

## Features

- Evaluates the MAX7036 Sub-1GHz ISM Receiver
- 3.3V/5V Power Supply Operation or Powered from the USB Interface
- Direct Interface with the Included MAX32630FTHR ARM Microcontroller (MCU) Board
- Available in 315MHz- or 433.92MHz-Optimized Versions
- Available PMOD Hardware Interface
- Windows 10-Compatible Software
- GUI Controls for MAX32630FTHR Board PMIC Operation
- Proven 2-Layer PCB Design
- Fully Assembled and Tested

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX7036

Figure 1. MAX7036EVKIT Board

<!-- image -->

Ordering Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Required Equipment

- Included in the MAX7036 Evaluation Kit
- MAX7036 EV kit board
- MAX32630FTHR# kit
- FTHR board
- MAX32625PICO
- 2x Micro/B USB Cables
- Windows PC* (Windows10) with one to two USB2.0 ports
- Power Supply† capable of 3.3V or 5V, 20mA
- RF Signal Generator capable of delivering from -120dBm to 0dBm of output power at the tuned operating frequency, in addition to AM or Pulse modulation capabilities
- Dual-trace Oscilloscope
- SMA/SMA cable as needed for connection to the RF Signal Generator

## Software and Drivers

The  MAX7036EVKIT  can  be  used  in  conjunction  with the  ARM  Cortex-M4F  microcontroller  MAX32630FTHR Application Platform or 'FTHR' board to provide power to the EV kit and to control the device through a GUI software application.

When connected to the FTHR board, the MAX7036EVKIT uses the following drivers and software components. See Appendix  I  for  additional  information  on  this  installation process.

- MAX7036 Software Package

The software, firmware, and drivers are available from the www.maximintegrated.com website. Login to your MyMaxim account on the website, search for the MAX7036 part or EV kit, click the 'Design Resources' tab, and click the ISM RADIO GUI software link. Finally, click the file link on the software landing page to download the ISMRADIOGUI package.

* required for operation of the MAX7036EVKIT with the GUI software

† required when the FTHR board is not connected to the MAX7036EVKIT

## Evaluates: MAX7036

- mBed MAX32630FTHR and DAPLINK Interface System

The DAPLINK system is not required unless a firmware update to the FTHR board is released. The FTHR board included in the MAX7036EKVKIT is preprogrammed for interfacing the GUI to the radio. The firmware programming process does not require additional software or drivers. It uses a simple USB drive, drag-and-drop file interface.

It  is  highly  recommended the target PC be connected to a local area network with access to the internet, allowing the automatic download and updates of some drivers. This software setup takes 15 minutes or more to complete.

## Installation Procedure

The steps in this section are used when connecting the MAX7036EVKIT to a FTHR board and are needed only once,  when  configuring  the  hardware  and  the  PC  for the first time. If these steps are already completed, jump directly to the FTHR Board Quick Start Procedure .

## Install the MAX7036EVKIT GUI Software

This process takes less than 10 minutes after downloading  the  software  package.  See Appendix  I  for  detailed information on this installation process .

- 1) Double click the 'ISMRadiosGUISetup.msi' setup file and follow the Setup Wizard prompts.
- a. Click &lt;Next&gt; in the ISM Radio GUI Setup Wizard window.
- b. It is recommended to use the default Destination Folder; click &lt;Next&gt; to continue.
- c. Install the software by clicking &lt;Install&gt;.
- d. Click  &lt;Finish&gt;  when  the  ISM  Radio  GUI  Setup Wizard installation process is complete.

## Table 1. MAX7036EVKIT Installed Files and Folders

| FILE NAME         | DESCRIPTION                                |
|-------------------|--------------------------------------------|
| ISM RADIO GUI.exe | Application GUI                            |
| MaximStyle.dll    | Supporting DLL file for software operation |

## MAX7036 Evaluation Kit

## Update the MAX32630FTHR Board Driver on the Host PC

No changes are needed for the FTHR board when first receiving  a  MAX7036EVKIT  (the  FTHR  board  is  preloaded with the required firmware). Updates to the driver on the host PC is necessary depending on the operating system  and  if  the  PC  has  access  to  the  internet  when first  connecting  to  the  FTHR  board.  See Appendix I for detailed  information  on  how  to  update  the  FTHR  board firmware and driver for the FTHR board/USB interface .

## Hardware Use Procedure

Figure 2. MAX7036EVKIT Jumpers

<!-- image -->

## Table 2. MAX7036EVKIT Jumper Settings

| JUMPERS   | POSITION                                                    | EVKIT FUNCTION                                              |
|-----------|-------------------------------------------------------------|-------------------------------------------------------------|
| JU1       | 1-2                                                         | Device Enable                                               |
| JU1       | 2-3                                                         | Power Down                                                  |
| JU1       | Open*                                                       | Driven by Controller                                        |
| JU2       | Open                                                        | For 5V Operation                                            |
| JU2       | 1-2                                                         | For 3.3V Operation                                          |
| JU3       | 1-2*                                                        | Power from L3OUT (FTHR board: 3.3V)                         |
| JU3       | 1-3                                                         | Power from PMOD interface (VDD, pin 6 of JU4)               |
| JU3       | 1-4                                                         | Power from VBUS (FTHR board: 5V)                            |
| JU3       | Note: While Driving externally (VDD-IN), JU3 should be Open | Note: While Driving externally (VDD-IN), JU3 should be Open |

## FTHR Board Quick Start Procedure

## Set up the MAX7036EVKIT and FTHR Board Hardware MCU/GUI Operation.

- 1) Verify the jumpers on the MAX7036EVKIT board are in the default positions ; see Table 2.
- 2) Connect the MAX7036EVKIT to the FTHR Board . Ensure the USB connector is oriented on the opposite side of the SMA connector (Figure 3).
- 3) Connect the FTHR Board to the PC using a MicroUSB cable and observe a 'heartbeat' on the FTHR board's red LED.

Figure 3. MAX7036EVKIT Orientation to the FTHR Board

<!-- image -->

│

## MAX7036 Evaluation Kit

- 4) Connect the RF\_IN to a Signal Generator using an SMA cable.
- a. Set the Frequency to the target operating frequency: for the MAX7036EVKIT-315 hardware variant use 315.00MHz and for the MAX7036EVKIT-433 hardware variant use 433.92MHz.
- b. Set the power level out of the generator to -100dBm.
- c. Set up and enable ASK Modulation. Use a 4kHz square wave (50% duty cycle) modulating signal for ASK.  Use  'Pulse  Modulation'  rather  than AM, if it is an available option on the signal generator. Use of the Amplitude Modulation affects the modulated  power  of  the  signal  differently  than  Pulse Modulation, resulting in incorrect sensitivity levels.
- 5) Connect the DATA test point output to the Oscilloscope.
- 6) Start the ISM Radios GUI Control Software.
- a. An  ISM  Radio  GUI  splash  screen  (Figure  4) displays.
- i. To  disable  future  displays  of  the  splash screen, click the 'Disable Splash' check box.
- ii. To  continue  to  the  GUI  software  when  the Select device message is prompted (Figure 5) click &lt;OK&gt;.
- iii. Select  the  MAX7036-Rx  from  the  Device dropdown menu (Figure 6).

Figure 4. ISM Radios GUI Splash Screen

<!-- image -->

Evaluates: MAX7036

Figure 5. ISM Radios GUI 'Device' Select Screen

<!-- image -->

Figure 6. ISM Radios GUI 'Device' Select Screen

<!-- image -->

│

Evaluates: MAX7036

Figure 7. ISM Radio GUI Software

<!-- image -->

## MAX7036 Evaluation Kit

Evaluates: MAX7036

- b. The expected COM port displays if the EVK USB cable is connected prior to starting the GUI. Select the appropriate COM port from the dropdown and click &lt;Connect&gt;. &lt;Connect&gt; button changes to &lt;Disconnect&gt;.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

- c. Confirm the firmware status bar is changed from 'ISM Radios x.x.x' to 'ISM Radios 3.7.2' or similar. The software LED is lit green and the port status is noted as 'Connected'.

- d. Enter a supply level into the 'Voltage' text box and click &lt;Set&gt;; for example, enter '3.3' for a 3.3V supply.

- e. Power on the Device by clicking &lt;TURN ON&gt; and it updates the status.

- f. Confirm the Modulation tab is set to ASK (default).

Figure 8. COM Port

Figure 10. Supply Voltage

Figure 11a. Power OFF

Figure 11b. Power ON

Figure 9. Connected Indicators

Comport

COM10

Disconnect

Refresh

ISM Radios 3.7.2

Connected

Voltage (3.0-3.6V)

3.3

Set

Power Status

POWER OFF

TURN ON

Power Status

POWERON

TURNOFF

Modulation

ASK

Figure 12. Modulation

│

## MAX7036 Evaluation Kit

- g. Enter a desired Crystal Oscillator frequency (for example, 9.8375MHz for 315MHz/ 13.55375MHz for 433.92MHz and click &lt;Set&gt;.
- 7) Connect the DATA ( Yellow ) test point to an oscilloscope to see the output data stream or through the &lt;Time Plot&gt; sampler (See Time Plot section under Detailed Description of Software).

Figure 13. Crystal Oscillator Setting

<!-- image -->

Figure 14. Time Plot of DATA

<!-- image -->

## Preset Quick Start Procedure (Without FTHR Board)

Set  up  and  connect  the  MAX7036EVKIT  hardware  for standalone operation.

- 1) Verify the jumpers on the MAX7036EVKIT board are as follows: JU1 is 1-2, JU3 is open, and JU2 is configured according to the Table 2.
- 2) Connect a 3.3V/20mA (or 5.0V/20mA)* supply to the MAX7036EVKIT at the VDD-IN ( Red ) and GND ( Black ) points, output disabled.
- 3) Connect the ASK modulated input signal (centered at 315MHz for MAX7036EVKIT-315, 433MHz for MAX7036EVKIT-433) to the LNA\_INPUT SMA as the RF signal using a low-loss SMA cable.
- 4) Enable the power supply's output.
- 5) Connect the DATA ( Yellow ) test point to an oscilloscope to see the output data stream.

## Detailed Description

## Detailed Description of Hardware

## MAX7036EVKIT Printed Circuit Board

The MAX7036 evaluation kit PCB is manufactured on a 2-layer,  1oz  copper,  FR4  dielectric  stack-up  PCB.  The board was designed to evaluate the MAX7036 ASK superheterodyne receiver. Layer 1 is primarily designed to keep

## Table 3. MAX7036EVKIT Test Points

| NAME   | COLOR   | EVKIT FUNCTION                           |
|--------|---------|------------------------------------------|
| VDD_IN | Red     | 3.0V-3.6V(or 4.5V-5.5V) Power Supply Pin |
| GND    | Black   | Ground                                   |
| DATA   | Yellow  | ASK Demodulated Data Output              |

*Set according to JU2 configuration.

Evaluates: MAX7036

the RF signals on one side of the board with short traces, small  matching  components,  and  low  parasitic  impact. Layer 2 was targeted to be a continuous ground plane, wherever  possible.  The  MAX7036EVKIT  is  available  in two  pretuned  versions:  315MHz  (MAX7036EVKIT-315) and 433.92MHz (MAX7036EVKIT-433). The crystals are selected, and the passive components are optimized for these two frequencies but can easily be changed to work at RF frequencies anywhere from 300MHz to 450MHz.

## Power

The MAX7036EVKIT board can be powered directly from the  FTHR  board  PMIC  through  the  H1  header,  directly from the supply test points, or through the user-installed PMOD header. A  single  3.0V  to  3.6V(or  4.5V  to  5.5V), 20mA  power  supply  can  be  connected  to  the  board using  the  two  wire  loops  (marked  VDD\_IN  and  GND). Jumper JU3 selects the source of power when not using the direct connection test points: from the L3OUT of the FTHR board, from the VBUS(+5V) of the FTHR board, or the PVIO of the PMOD connector. Table 4 describes the appropriate jumpers settings.

## Data Interface

The  MAX7036EVKIT  comes  preconfigured  to  directly connect  the  FTHR  board  through  the  H1/H2  headers. The GUI controls the communication between the FTHR board MCU and MAX7036 pins.

## Table 4. MAX7036EVKIT Power Settings

| OPERATION        | JU2   | JU3   |
|------------------|-------|-------|
| FTHR: 3.0V-3.6V  | 1-2   | 1-3   |
| FTHR: 5.0V       | Open  | 1-4   |
| PMOD: 3.0V-3.6V  | 1-2   | 1-2   |
| External: VDD_IN | Open  | Open  |

│

Evaluates: MAX7036

Figure 15. MAX7036EVKIT Interface

<!-- image -->

│

## MAX7036 Evaluation Kit

## Data Indicator

An option is available on the evaluation kit layout to connect  a  surface-mount  LED  (POWER,  and  DATA,  0603) and resistors (R7, and R8 respectively, 0603, 470Ω rec -ommended) to provide visual feedback of the activity on the  supply  and  DATA  line.  Populating  these  LEDs  and resistors  cause  additional  power  consumption  and  they are not included by default in the evaluation kit assembly.

## PMOD Interface

The MAX7036EVKIT provides a PMOD-compatible header  footprint  to  interface  with  the  receiver.  The  H3  connector can be populated with a 6-pin, 100mil, right-angle header allowing direct connections to the DATA, Ground, and VDD lines making it capable with PMOD interfacing.

## Evaluates: MAX7036

Populating  this  header  would  allow  control  from  the MAX32600MBED kit and MAXREFDES72# Arduino Uno R3 to the PMOD shield adaptor. When using the PMOD interface  to  supply  the  MAX7036EVKIT  with  power, connect  the  JU3  jumper  between  pins  1  to  3.  See Appendix II for detailed information on the Evaluation Kit Hardware Modifications .

## Detailed Description of Software

The MAX7036  EV  kit Controller GUI Software is designed  to  control  the  MAX7036  evaluation  kit  board and  MAX32630FTHR  board  (Figure  3).  The  software includes USB controls, which provide communication to the MAX7036 through the FTHR board interface.

Figure 16. MAX7036 EVKIT GUI Configuration

<!-- image -->

│

## MAX7036 Evaluation Kit

## COM Port

The COM Port section provides a dropdown selection of serial communication ports available for connection to a MAX7036 evaluation kit through an FTHR board. When the  GUI  is  run  after  connecting  the  evaluation  kit  hardware, the dropdown box should default to the proper COM Port. If the hardware is connected to the computer after the GUI is started, click &lt;Refresh&gt; to scan for compatible ports. Once the appropriate COM Port is selected in the dropdown box, click &lt;Connect&gt; (Figure 8).

After properly connecting to the COM Port with the FTHR board, the GUI displays the revision of the FTHR board firmware detected, displays a Green LED,  and  displays 'Connected' in the status bar along the bottom of the GUI window (Figure 9).

## Voltage (3.0V to 3.3V)

The  Voltage  section  provides  a  user-adjustable  power supply from the  FTHR  board  MAX14690N  Power Management IC (PMIC) to the MAX7036EVKIT and can be used as the primary VDD supply. The PMIC, L3OUT can  be  set  to  voltages  between  3.0V  and  3.6V,  and  it applies to the level of the logic interface lines as well as the device supply (Figure10).

To program the supply voltage, enter a valid level in the 'Voltage' text box and click &lt;Set&gt;. The default value of the L3OUT voltage is 3.3V.

When  using  the  FTHR  board  interface  to  supply  the MAX7036EVKIT, make sure to connect the JU3 jumper between pins 1 to 2.

## Evaluates: MAX7036

## Crystal Oscillator (9.36 to 14.06 MHz)

The  Crystal  Frequency  section  allows  the  user  to  indicate the frequency of the crystal (f XTAL ) installed on the MAX7036EVKIT.  This  value  can  be  adjusted  between 9.36MHz  and  14.06MHz.  Once  the  appropriate  Crystal Frequency is entered, the calculated receiver frequency value shows on the adjacent text box (Figure13).

The  XTAL  oscillator  frequency  sets  the  received  signal frequency as following:

<!-- formula-not-decoded -->

where f IF  = 200kHz.

MAX7036EVKIT-315 evaluation  kits  come  prepopulated with  a  9.8375MHz  crystal  and  the  setting  in  the  GUI should  be  9.8375MHz.  MAX7036EVKIT-433  evaluation kits come prepopulated with a 13.55375MHz crystal and the setting in the GUI should be 13.55375MHz.

## RSSI Analog Read

The RSSI circuit provides the DC output proportional to the logarithmic of the input power level. Click &lt;Read&gt; to read the RSSI value. Refer to the MAX7036 device data sheet TOC for the RSSI vs. Input Power plot for reference.

Figure 17. RSSI Output

<!-- image -->

│

## MAX7036 Evaluation Kit

## Time Plot

The &lt;Time Plot&gt; button  allows  the  user  to  visually  see the DATA pin displayed in a plot. This plot works best at around  the  10kbps  rate  and  lower  for  proper  oversampling of the received signal.

## Evaluates: MAX7036

Click &lt;StartRF&gt; to begin the display. Once it is running, click &lt;StopRF&gt; to stop the sampling. &lt;Clear Plot&gt; clears the current display. Use the mouse scroll to zoom in or out of the display samples.

Figure 18. Initial Time Plot Window

<!-- image -->

Figure 19. Time Plot Display

<!-- image -->

│

## MAX7036 Evaluation Kit

## Tool History Section

This portion of the GUI contains a Log File text block to record activity within the GUI.

## Log File

For  every  &lt;Set&gt;,  connection  effort,  the  GUI  activity  is logged  in  this  text  block.  The  user  can  add  notes  and make edits to the content of the Log File text block.

Clicking on &lt;Clear Log&gt; deletes the contents in the text block.

Clicking &lt;Save Log&gt; opens a 'Save As' explorer window and the user is prompted to save a .txt file.

## Miscellaneous Software Information

The tool bar along the top of the GUI window provides a couple of options to the user.

Figure 20. Tool History

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE             |
|----------------------------------------|--------------|---------------------|
| YXC Crystal                            |              | www.yxcxtal.com     |
| NDK Crystal                            |              | www.ndk.com         |
| Johnson Components / Cinch             |              | belfuse.com/cinch   |
| Keystone                               | 800-221-5510 | www.keyelco.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com      |
| Panasonic                              |              |                     |
| Sullins                                | 760-744-0125 | www.sullinscorp.com |
| Vishay Dale                            | 800-433-5700 | www.vishay.com      |

## Ordering Information

| PART              | TYPE                         |
|-------------------|------------------------------|
| MAX7036EVKIT-315+ | MAX7036EVKIT Tuned to 315MHz |
| MAX7036EVKIT-433+ | MAX7036EVKIT Tuned to 433MHz |

## File and Help Menu

Selecting  File  &gt;  Exit  from  the  tool  bar  closes  the  GUI program. This has the same effect as clicking &lt;X&gt; in the upper-right corner of the GUI software.

Selecting Help &gt; ICs shows the list of Maxim Integrated's ISM products supported by the GUI. Click the part number for the detailed product information.

Selecting  Help  &gt;  About  from  the  tool  bar  displays  the splash screen. This window shows the name of the software,  the  revision  number,  a  copyright  notice,  a  link  to the Maxim website, a link to the support website, and a checkbox to enable or disable the splash screen during startup. Click &lt;OK&gt; to close the About window.

Evaluates: MAX7036

│

## Appendix I - Detailed Software, Firmware, and Driver Installation Procedures

## Download the MAX7036EVKIT Software Package

This software and firmware are available from the www.maximintegrated.com website.

- 1) Login to your MyMaxim account on the website.
- 2) Click the magnifying glass and search for the MAX7036 or a similar part .

<!-- image -->

<!-- image -->

│

- 3) Click 'Design Resources' for the device or the EV kit, or click the Design Resources tab on the product web page.

<!-- image -->

│

- 4) Click the appropriate software link.
- 5) Click the file link on the software landing page to download the MAX7036EVKIT package.

<!-- image -->

<!-- image -->

│

Evaluates: MAX7036

Evaluates: MAX7036

- 6) Review the Maxim Software License Agreement (SLA) and accept the terms by clicking Accept.
- 7) Save the EVKIT distribution package to the desktop or other accessible location to install later.

<!-- image -->

│

## Install the MAX7036EVKIT GUI Software

This software and firmware are available from the www.maximintegrated.com website.  Refer  to  the  'Download  the MAX7036EVKIT Software Package' section above for information on obtaining the latest firmware from Maxim Integrated.

This process takes less than 10 minutes after downloading the software, firmware, and driver package.

- 1) Download the ISMRadioGUISetup.msi to the PC
- 2) Double click the ISMRadioGUISetup.msi setup file and follow the Setup Wizard prompts.
- a. Click &lt;Next&gt;

<!-- image -->

│

Evaluates: MAX7036

- b. Use the default Destination Folder and click &lt;Next&gt;.
- c. Install the software by clicking &lt;Install&gt;.

<!-- image -->

<!-- image -->

Evaluates: MAX7036

## MAX7036 Evaluation Kit

- d. Click &lt;Finish&gt; when the setup is complete.

<!-- image -->

## Program the MAX32630FTHR Board with the MAX7036 Firmware

This  software  and  firmware  are  available  from  the www.maximintegrated.com website. Refer to the 'Download the MAX7036EVKIT Software Package' section above for information on obtaining the latest firmware from Maxim Integrated.

- 1) Connect the MAX32630FTHR to the MAX32625PICO.
- a. Use the fine pitch 10pin ribbon cable to connect the  boards  from  the  SWD  (J3)  header  on  the MAX32625PICO to J4 on the MAX32630FTHR.

MAX32625PICO DAPLINK

<!-- image -->

Evaluates: MAX7036

│

## MAX7036 Evaluation Kit

- 2) Connect the MAX32630FTHR to a power source.
- a. Use  a Micro-B USB  cable to connect the MAX32630FTHR  board  to  a  suitable  power source  (no  USB  connectivity  is  required).  [The black  USB  cable  in  the  photos.]  Alternatively, power  the  board  from  a  charged  battery  if  you remember  to  turn  it  on  by  pressing  the  power/ reset  button  next  to  the  battery  connector.  The board turns on automatically when powered from the USB supply.
- b. The status LED on the FTHR board is lit a steady red.
- 3) Connect the MAX32625PICO to a PC.
- a. Use  a Micro-B USB  cable to connect the MAX32625PICO  to  a  PC,  through  the  USB connector. [The white USB cable in the photos.]
- b. The status LED on the DAPLINK board blinks red when connecting.
- c. After a few seconds of activity, the PC recognizes the DAPLINK as a standard USB drive.

<!-- image -->

│

Evaluates: MAX7036

Windows 10 Example

<!-- image -->

- 4) Drag and drop or save the ISM\_Radio\_fw.bin program binary to the mbed or DAPLINK USB drive.

## MAX7036 Evaluation Kit

- a. The FTHR board LED shuts off and the LED on the  MAX32625PICO  slowly  flashes  red  as  the FTHR board is being programmed.
- b. Once the programming is complete, the MAX32625PICO USB drive disconnects from the PC and reconnects as a USB drive again.
- c. If the programming is successful, the contents of the MAX32625PICO USB drive should include a DETAILS.TXT file. If an ERROR.TXT file exists on the drive, check the FTHR board had power during the programming process and repeat steps 3 and 4.
- 5) To ready the FTHR board for use, disconnect the MAX32625PICO board (ribbon cable) and press Reset on the FTHR board or disconnect the FTHR board from the USB power supply.
- a. When  the  Reset  Button  in  pressed,  the  microcontroller  restarts  and  the  newly  programmed application  begins  to  run.  Or,  disconnect  and reconnect the USB cable if using a PC for power

The latest information and these firmware update instructions  can  be  found  on  the  MAX32630FTHR board  mBed  web  site:  https://os.mbed.com/platforms/ MAX32630FTHR/  or  on  the  mBed  home  page  (https:// www.mbed.com/), and searching for 'MAX32630FTHR'.

If  there  is  no  mbed  account,  choose  'Signup',  and  create  an  mbed  Account.  Otherwise,  log  in  with  normal username and password for access to the website, tools, libraries, and documentation.

Load  the  matching  HDK  image  for  the  platform  under programming for the drag and drop programming to work. For the MAX32630FTHR DAPLINK image:

[https://os.mbed.com/media/uploads/switches/ max32620\_daplink\_max32630fthr.bin](https://os.mbed.com/media/uploads/switches/max32620_daplink_max32630fthr.bin)

## Evaluates: MAX7036

## Update the MAX32630FTHR Board Driver

The  required  driver  is  available  from  the www.maximintegrated.com website.  Refer  to  the  'Download  the MAX7036EVKIT  Software  Package'  section  above  for information  on  obtaining  the  latest  driver  from  Maxim Integrated.

- 1) Connect the MAX32630FTHR to the PCs USB port.
- 2) In Device Manager, right click Other devices =&gt; 'CDC Device' or 'mbed Composite Device'.

<!-- image -->

│

- 3) Click 'Update Driver Software'. Then select Browse my computer for driver software.
- 4) Select 'Let me pick from a list of available drivers on my computer'.
- 5) On a Windows-10 operating system, click &lt;Have Disk…&gt;.
- 6) Browse the path of the driver folder and for Window-10, click &lt;OK&gt;

<!-- image -->

<!-- image -->

<!-- image -->

Windows-10: browse to the path and click &lt;OK&gt;.

<!-- image -->

- 7) Click Next.
- 8) Ignore the warnings and click  Install…

<!-- image -->

<!-- image -->

## Appendix II - Hardware Modifications

## PMOD Header Interface

The MAX7036EVKIT provides a PMOD-compatible header footprint providing yet another built-in interface to the receiver. The JU4 connector can be populated with a 6-pin, 100mil, right-angle header such as a SAMTEC TSW-106-25-T-SRA, allowing direct connections to the DATA, Ground, and VDD lines.

The PMOD interface can be used in combination with the MAX32600MBED kit and the MAXREFDES72# Arduino Uno R3 to PMOD shield adaptor. When using the PMOD interface to supply the MAX7036EVKIT with power, make sure to connect the JU3 jumper between pins 1 to 3.

Figure A2-4. MAX7036EVKIT PMOD Interface

<!-- image -->

## Appendix III - Pinout Sheets MAX7036EVKIT

<!-- image -->

│

Evaluates: MAX7036

## MAX32630FTHR

ARM Cortex-M4F microcontroller rapid development platform.

<!-- image -->

│

Evaluates: MAX7036

## MAX7036 EV Kit Bill of Materials

| NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE                                                    | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE                                                             |
|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| ITEM                                                           | REF_DES                                                        | DNI/DNP                                                        | QTY                                                            | MFG PART #                                                                                                      | MANUFACTURER                                                   | VALUE                                                          | DESCRIPTION                                                                                                              |
| 1                                                              | C1, C9, C13, C17, C20                                          | -                                                              | 5                                                              | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                                    | MURATA;TDK;TAIYO YUDEN;TDK                                     | 0.1UF                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |
| 2                                                              | C4                                                             | -                                                              | 1                                                              | C1005X5R1E105K050; GRM155R61E105KA12                                                                            | TDK;MURATA                                                     | 1UF                                                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                  |
| 3                                                              | C5                                                             | -                                                              | 1                                                              | C0402C181J3GAC7867                                                                                              | KEMET                                                          | 180PF                                                          | CAP; SMT (0402); 180PF; 5%; 25V; C0G; CERAMIC CHIP                                                                       |
| 4                                                              | C6                                                             | -                                                              | 1                                                              | UMK105CG220JV; GRM1555C1H220JA01; GCM1555C1H220JA16; 04025A220JAT2A                                             | TAIYO YUDEN;MURATA; MURATA;AVX                                 | 22PF                                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 22PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                 |
| 5                                                              | C7, C8, C11                                                    | -                                                              | 3                                                              | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP;MURATA; TDK;TDK       | 100PF                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                |
| 6                                                              | C10, C12                                                       | -                                                              | 2                                                              | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103                                                       | NIC COMPONENTS CORP.;MURATA;YAGEO                              | 0.01UF                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                      |
| 7                                                              | C14, C15                                                       | -                                                              | 2                                                              | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                           | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN              | 0.01UF                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |
| 8                                                              | C18                                                            | -                                                              | 1                                                              | C0402C0G500-391JNE; GRM1555C1H391JA01; CGA2B2C0G1H391J050BA                                                     | VENKEL LTD.;MURATA;TDK                                         | 390PF                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 390PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                        |
| 9                                                              | C19                                                            | -                                                              | 1                                                              | GJM1555C1H2R7BB01                                                                                               | MURATA                                                         | 2.7PF                                                          | CAP; SMT (0402); 2.7PF; +/-0.1PF; 50V; C0G; CERAMIC CHIP                                                                 |
| 10                                                             | C21                                                            | -                                                              | 1                                                              | C0402C100J5GAC; GRM1555C1H100JA01                                                                               | KEMET;MURATA                                                   | 10PF                                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                 |
| 11                                                             | C22                                                            | -                                                              | 1                                                              | GRM155R60J106ME44; GRM155R60J106ME47; C1005X5R0J106M050BC; CL05A106MQ5NUN; C0402C106M9PAC                       | MURATA;MURATA;TDK; SAMSUNG ELECTRONICS; KEMET                  | 10UF                                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |
| 12                                                             | C23                                                            | -                                                              | 1                                                              | GRM1555C1H221FA01                                                                                               | MURATA                                                         | 220PF                                                          | CAP; SMT (0402); 220PF; 1%; 50V; C0G; CERAMIC CHIP                                                                       |
| 13                                                             | D1                                                             | -                                                              | 1                                                              | NRVB120VLSFT1G                                                                                                  | ON SEMICONDUCTOR                                               | NRVB120VLSFT1G                                                 | DIODE; SCH; SMT (SOD-123FL); PIV=20V; IF=1A                                                                              |
| 14                                                             | DATA                                                           | -                                                              | 1                                                              | 5014                                                                                                            | KEYSTONE                                                       | N/A                                                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 15                                                             | GND1, GND2                                                     | -                                                              | 2                                                              | 5011                                                                                                            | KEYSTONE                                                       | N/A                                                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 16                                                             | H1                                                             | -                                                              | 1                                                              | PRPC016SFAN-RC                                                                                                  | SULLINS ELECTRONICS CORP                                       | PRPC016SFAN-RC                                                 | CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; STRAIGHT; 16PINS                                                             |
| 17                                                             | H2                                                             | -                                                              | 1                                                              | PRPC012SFAN-RC                                                                                                  | SULLINS ELECTRONICS CORP                                       | PRPC012SFAN-RC                                                 | CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; STRAIGHT; 12PINS                                                             |
| 18                                                             | JU1                                                            | -                                                              | 1                                                              | PEC03SAAN                                                                                                       | SULLINS                                                        | PEC03SAAN                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |
| 19                                                             | JU2                                                            | -                                                              | 1                                                              | PEC02SAAN                                                                                                       | SULLINS                                                        | PEC02SAAN                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |

## MAX7036 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                           | MANUFACTURER                          | VALUE             | DESCRIPTION                                                                                                     |
|--------|-----------|-----------|-------|--------------------------------------|---------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------|
| 20     | JU3       | -         |     1 | PEC04SAAN                            | SULLINS ELECTRONICS CORP.             | PEC04SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                       |
| 21     | L1        | -         |     1 | LQW18AN47NJ00                        | MURATA                                | 47NH              | INDUCTOR; SMT (0603); WIREWOUND CHIP; 47NH; TOL=+/-5%; 0.38A                                                    |
| 22     | L2        | -         |     1 | LQW18AN15NJ00                        | MURATA                                | 15NH              | INDUCTOR; SMT (0603); WIREWOUND; 15NH; 5%; 0.6A                                                                 |
| 23     | LNA_INPUT | -         |     1 | 142-0701-851                         | JOHNSON COMPONENTS                    | 142-0701-851      | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                     |
| 24     | R1        | -         |     1 | CRCW040222K0FK                       | VISHAY DALE                           | 22K               | RESISTOR, 0402, 22K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                        |
| 25     | R2        | -         |     1 | CRCW0402220KFK; 9C04021A2203FLHF3    | VISHAY DALE;YAGEO PHYCOMP             | 220K              | RESISTOR; 0402; 220K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                        |
| 26     | R4-R6     | -         |     3 | CRCW06030000Z0                       | VISHAY DALE                           | 0                 | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                             |
| 27     | SU1-SU3   | -         |     3 | S1100-B;SX1100- B;STC02SYAN          | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED         |
| 28     | U1        | -         |     1 | MAX7036GTP/V+                        | MAXIM                                 | MAX7036GTP/V+     | IC; RECV; 300MHZ TO 450MHZ ASK RECEIVER WITH INTERNAL IF FILTER; TQFN20-EP                                      |
| 29     | VDD-IN    | -         |     1 | 5010                                 | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;           |
| 30     | Y1        | -         |     1 | EXS00A-CG08006; X32251355375MSB4SI   | NDK;YXC                               | 13.55375MHZ       | EVKIT PART - CRYSTAL; SMT; 10PF; 13.55375MHZ; +/-80PPM;                                                         |
| 31     | U2        | -         |     1 | MAX32625PICO                         | MAXIM                                 |                   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD |
| 32     | U2        | -         |     1 | 1675                                 | ADAFRUIT INDUSTRIES                   |                   | CONNECTOR; FEMALE-FEMALE; WIREMOUNT; 1.27MM IDC CABLE-150MM; WIREMOUNT; 10PINS                                  |
| 33     | U2        | -         |     1 | 3025010-03                           | QUALTEK ELECTRONICS CORP              |                   | CONNECTOR; MALE-MALE; WIREMOUNT; USB 4P-MICRO USB 5P 915MM; WIREMOUNT; 5PINS                                    |
| 34     | PCB       | -         |     1 | MAX7036433MHZ                        | MAXIM                                 | PCB               | PCB:MAX7036433MHZ                                                                                               |
| 35     | J1        | DNI       |     1 | PPPC161LFBN-RC                       | SULLINS ELECTRONICS CORP.             | PPPC161LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                            |
| 36     | J3        | DNI       |     1 | PPPC121LFBN-RC                       | SULLINS ELECTRONICS CORP              | PPPC121LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                |
| 37     | U2        | DNI       |     1 | MAX32630FTHR#                        | MAXIM                                 | MAX32630FTHR#     | EVKIT PART-MODULE; MAX32630FTHR; RAPID DEVELOPMENT PLATFORM;                                                    |
| 38     | C3, C16   | DNP       |     0 | GJM1555C1H100FB01; GRM1555C1H100FA01 | MURATA;MURATA                         | 10PF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 50V; TOL=1%; TG=-55 DEGC TO +125 DEGC; TC=C0G                        |
| 39     | DATA1     | DNP       |     0 | LTST-C190YKT                         | LITE-ON ELECTRONICS INC.              | LTST-C190YKT      | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                              |
| 40     | JU4       | DNP       |     0 | TSW-106-25-T-S-RA                    | SAMTEC                                | TSW-106-25-T-S-RA | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 6PINS                                       |
| 41     | POWER     | DNP       |     0 | LTST-C193KGKT-5A                     | LITE-ON ELECTRONICS INC.              | LTST-C193KGKT-5A  | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                       |
| 42     | R3        | DNP       |     0 | RC0402JR-070RL; CR0402-16W-000RJT    | YAGEO PHYCOMP;VENKEL LTD.             | 0                 | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                           |
| 43     | R7, R8    | DNP       |     0 | CRCW0603470RFK; ERJ-3EKF4700         | VISHAY DALE;PANASONIC                 | 470               | RESISTOR, 0603, 470 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                          |
| 44     | R9-R11    | DNP       |     0 | CRCW06030000Z0                       | VISHAY DALE                           | 0                 | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                             |
| TOTAL  |           |           |    50 |                                      |                                       |                   |                                                                                                                 |

## MAX7036 EV Kit Schematic

<!-- image -->

## MAX7036 EV Kit Schematic

Silk Top

<!-- image -->

Top

<!-- image -->

Evaluates: MAX7036

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION   | PAGES CHANGED   |
|-------------------|-----------------|---------------|-----------------|
|                 2 | 5 /21           | Revision      | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX7036