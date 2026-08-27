<!-- lastmod 2022-08-04 -->
## MAX4146x Evaluation Kit

## General Description

The MAX4146x evaluation kit (EV kit) contains a single MAX4146x high  output  power  VHF/UHF  sub-GHz  ISM/ SRD  transmitter,  designed  to  transmit  Frequency-Shift Keying (FSK), Gaussian GFSK or Amplitude-Shift Keying (ASK) data in the 286MHz to 960MHz frequency range.

The MAX41460 and the MAX41461-MAX41464 evaluation  kits  operate  in  conjunction  with  an  external microcontroller (MCU) and Graphical User Interface (GUI) software running on a computer.  The MAX41460 uses an SPI interface for internal register configurations while the MAX41461-MAX41464 can use the preset modes or an I 2 C interface for register programming and control.

The MAX41461, MAX41462, MAX41463, and MAX41464 evaluation kits are also designed to operate with a simple, one-pin data interface, alleviating the need to program the part for nominal operation, or other high-level system (PC with GUI software) having to configure the transmitter for operation. These parts allow the user to preset the operating frequencies by part selection and pin configurations. On the evaluation kit, selecting the frequency of operation is as simple as setting two jumpers.

The EV kit includes Windows ®  7/10-compatible software that  provides  a  simple  graphical  user  interface  (GUI) for  configuration  of  all  the  MAX4146x  registers  through the  SPI  or  I 2 C  ports.  The  GUI  also  controls  the  onboard PMIC and can act as a data generator, when the MAX32630FTHR Applications Platform is used.

Windows is a registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Evaluates the MAX4146x Family of Sub-1GHz ISM Transmitters
- Single Input Voltage Supply from 1.8V to 3.6V
- Direct Interface with a MAX32630FTHR ARM Microcontroller (MCU) Board
- Available Pmod Hardware Interface
- Windows 7/10-compatible Software
- On-Board SPI Interface Control for the MAX41460 and optional I 2 C Control for the MAX41461-MAX41464
- GUI Controls for MAX32630FTHR Board PMIC Operation from 1.8V to 3.3V
- Proven 2-Layer PCB Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 1. MAX4146x EV kit Board

<!-- image -->

Evaluates: MAX41463

MAX41464

## MAX4146x Evaluation Kit

## Quick Start

## Required Equipment

- Included in the MAX4146x Evaluation Kit
- MAX4146x Evaluation kit board
-  MAX32630FTHR# kit
-  FTHR board
-  DAPLINK board
-  2x micro/B USB cables
- MAX4146x EV kit Pin Diagram Card
- Windows PC* (Win-7/Win-10), with one to two USB2.0 ports available
- Power Supply †  capable of 1.8V to 3.6V, 100mA
- Serial Data Source †  and a simple means of connection (DATA test point and Ground)
- Basic  Spectrum  Analyzer  -  Rohde  and  Schwarz ZVL3, Tektronix RSA306, or equivalent
- SMA/SMA  cable  as  needed  for  connection  to  the spectrum analyzer

## Software and Drivers

The MAX4146x EV kit can be used in conjunction with the  ARM  Cortex-M4F  microcontroller  MAX32630FTHR Application  Platform  or  'FTHR'  board  to  provide  power and control the device through a software application or Graphical User Interface (GUI). For this option, additional equipment is required:

When connected to the FTHR board the MAX4146x EV kit  uses the following drivers and software components. Refer to the Appendix I for additional information on this installation process .

- MAX4146x Software Package

The  software,  firmware,  and  drivers  are  available from the www.maximintegrated.com website. Login to your MyMaxim account on the website, search for the  MAX4146x  part  or  EVKIT,  click  on  the  'Design Resources' tab, and click on the appropriate software link.  Finally, click the file link on the software landing page to download the MAX4146x EV kit package.

- mBed MAX32630FTHR and DAPLINK Interface System

The DAPLINK system should not be required unless a  firmware  update  to  the  FTHR  board  has  been released. The FTHR board included in the MAX4146X

## Evaluates: MAX41463 MAX41464

EV kit will be preprogrammed for interfacing the GUI to the radio. The firmware programming process does not  require  additional  software  or  drivers,  it  uses  a simple USB drive, drag-and-drop file interface.

It is highly recommended that the target PC be connected to a local area network and have access to the Internet, this allows for automatic download and updates of some drivers.  This  process  may  take  15  minutes  or  more  to complete.

## Installation Procedure

The steps in this section are used when connecting the MAX4146x EV kit to a FTHR board and should only be needed  once,  when  configuring  the  hardware  and  the PC for  the  first  time.  If  these  steps  have  already  been completed, jump directly to the FTHR Board Quick Start Procedure .

## Install the MAX4146x EV Kit GUI Software

This  process  should  take  less  than  10  minutes  after downloading the software package. Refer to Appendix I for detailed information on this installation process .

- 1) Copy the ' Setup MAX4146X V1.0.0 EVKit SW.rar ' file to a working folder on the target PC.
- 2) Extract the setup  file contents  into  the  working directory.
- 3) Double-Click the 'MAX4146xGUISetupV01.msi' setup file and follow Setup Wizard prompts.
- a.  Click  &lt;Next&gt;    in  the  MAX4146X  Setup  Wizard window.
- b.  It is recommended to use the default Destination Folder; click &lt;Next&gt; to continue.
- c.  Install the software by clicking the &lt;Install&gt; button.
- d.  Click &lt;Finish&gt; when the MAX4146X Setup Wizard installation process is complete.

## Table 1. MAX4146x EV Kit Installed Files and Folders

| FILE NAME        | DESCRIPTION                                |
|------------------|--------------------------------------------|
| MAX4146x.exe     | Application GUI                            |
| MaximStyle.dll   | Supporting DLL file for software operation |
| RegisterSet8.xml | Register definition file                   |

│

## MAX4146x Evaluation Kit

## Update the MAX32630FTHR Board Driver on the Host PC

No changes are needed for the FTHR board when first receiving a MAX4146x EV kit-the FTHR board has been pre-loaded  with  the  required  firmware.    Updates  to  the driver on the host PC may be necessary depending on the operating system and whether the PC has access to the internet when first connecting to the FTHR board. Refer to Appendix I for detailed information on how to update the FTHR board firmware and the driver for the FTHR board/ USB interface .

## Hardware Use Procedure

## Table 2. MAX4146x EV kit Jumper Settings

| JUMPERS   | POSITION        | EV KIT FUNCTION                               | EV KIT FUNCTION                               |
|-----------|-----------------|-----------------------------------------------|-----------------------------------------------|
| JU1       | 1-2*            | Power from L3OUT (FTHR board)                 | Power from L3OUT (FTHR board)                 |
| JU1       | 2-3             | Power from PMOD interface (VDD, pin 6 of JU4) | Power from PMOD interface (VDD, pin 6 of JU4) |
| JU2       | 1-2             | SEL1 to VDD                                   | SEL1 - See Table 3 for preset modes           |
| JU2       | 2-3 †           | SEL1 to GND                                   | SEL1 - See Table 3 for preset modes           |
| JU2       | Not Installed ‡ | SEL1 open                                     | SEL1 - See Table 3 for preset modes           |
| JU3       | 1-2             | SEL0 to VDD                                   | SEL0 - See Table 3 for present modes          |
| JU3       | 2-3 †           | SEL0 to GND                                   | SEL0 - See Table 3 for present modes          |
| JU3       | Not Installed ‡ | SEL0 open                                     | SEL0 - See Table 3 for present modes          |
| JU5       | 1-2 †           | I 2 C pullup resistor R14 connected to VDD    | I 2 C pullup resistor R14 connected to VDD    |
| JU5       | 3-4 †           | I 2 C pullup resistor R15 connected to VDD    | I 2 C pullup resistor R15 connected to VDD    |
| JU5       | Not Installed*  | Pullup resistors disconnected                 | Pullup resistors disconnected                 |

Evaluates: MAX41463

MAX41464

## FTHR Board Quick Start ProcedureSPI and I 2 C Interface

Setup the MAX4146x EV kit and FTHR Board Hardware MCU/GUI Operation.

1. Verify all jumpers on the MAX4146x EV kit board are in the default position ; refer to Table 2.
- a.  For  the  MAX41460  EV  kit,  JU2,  JU3  and  JU5 should not be installed.
- b.  For MAX41461-MAX41464 EV kits, JU2 and JU3 must be installed 2-3 (SEL0 and SEL1 connected to GND); JU5 must be installed with jumpers from pins 1-2 and 3-4.
2. Connect the MAX4146x EV kit to the FTHR board , be sure the USB connector is oriented on the opposite side of the SMA connector, as shown in Figure 3 .

Figure 2. MAX4146x EV Kit Jumpers

<!-- image -->

Figure 3. MAX4146x EV Kit Orientation to FTHR Board

<!-- image -->

│

## MAX4146x Evaluation Kit

3. Connect the FTHR Board to the PC using a micro-B USB cable and observe a 'heartbeat' on the FTHR board's red LED.
4. Connect  the  RF\_OUT  to  a  spectrum  analyzer using a low-loss SMA cable.
- a.  Set the Center Frequency to the target frequency of interest.
- b.  Set the Span to 1% of the Center Frequency (FCC standard  test  setting),  the  Resolution  Bandwidth (RBW) to 1kHz, and the Video Bandwidth (VBW) to 3kHz.
- c.  Set the trace to 'Max Hold'.
5. Start the MAX4146x EV Kit Control Software GUI
- a.  A  MAX4146x EV kit splash screen, as shown in Figure 4, will be displayed.
- i. To disable future displays of the splash screen, click on the Disable check box.
- ii.  To continue to the GUI software, click on the &lt;OK&gt; button.
- b.  The  expected  COM  port  should  be  displayed  if the EVK was connected prior to starting the GUI. Select  the  appropriate  COM  port  from  the  dropdown list and click on the &lt;Connect&gt; button.  The &lt;Connect&gt; button will change to the &lt;Disconnect&gt; button.
- c.  Confirm the firmware status bar has changed from 'MAX4146X x.x.x' to 'MAX4146X 0.1.0' or similar, the software LED is lit green, and the port status is noted as 'Connected'.
- d.  Enter a supply level into the 'Voltage' text box and click the &lt;Set&gt; button; for example, enter '3.0' for a 3.0V supply and click &lt;Set&gt;.

Evaluates: MAX41463

MAX41464

Figure 4. MAX4146x EV Kit GUI Splash Screen.

<!-- image -->

│

Evaluates: MAX41463

<!-- image -->

Figure 5. MAX4146x EV Kit GUI Software.

<!-- image -->

Figure 6. COM Port.

Figure 7. Connected Indicators.

<!-- image -->

Figure 8. Supply Voltage.

<!-- image -->

## MAX4146x Evaluation Kit

- e.  Select  the  appropriate  part  in  the  'Chip'  dropdown box and click the &lt;Set&gt; button.
- f. Select the Crystal Frequency (16.0MHz is default) and click the &lt;Set&gt; button.
- g.  Select a desired form of modulation in the Modulation drop-down box and click the &lt;Set&gt; button.
- h.  Select a PA output power setting ('Power Level 1' is the lowest setting, 'Power Level 8' results in the highest output power) and click the &lt;Set&gt; button
- i. Enter the desired operating frequency.
- i. Enter a value between 250 and 950 (units of MHz) into the Frequency text box; it is recom-

<!-- image -->

Figure 9. Part Selection

Figure 10. Crystal Frequency Selection

<!-- image -->

Figure 11. Modulation Selection

<!-- image -->

Evaluates: MAX41463

MAX41464

mended that the Frequency be set to match the EV kit tuning (as noted on the hardware).

- ii.  Click the &lt;Set&gt; button.
- j. If  running  in  FSK  mode  select  the  'FSKSHAPE' checkbox, set a Frequency Deviation (in ± kHz), and click the &lt;Set&gt; button.
- k.  For  4-wire  SPI  operation  (using  the  MAX41460, this is needed to read-back register values):
- i. click on the '0A CFG6' register.
- ii.  click on the 'FOURWIRE1' 0-bit box.

<!-- image -->

Figure 12. PA Power Setting

Figure 13. Frequency Setting

<!-- image -->

Figure 14. FSK Deviation Setting

<!-- image -->

│

Evaluates: MAX41463

Figure 15. 4-Wire SPI Setting.

<!-- image -->

## MAX4146x Evaluation Kit

## 6. Generate a transmission

- a.  In  the  Data  Control  block  enter  a  Manchester Bitrate of interest and click the &lt;Set&gt; button.
- b.  Enter 0xAA in the 'Messages' text box in the Data Control block.
- c.  Check the 'Continuous' checkbox.
- d.  Click on the &lt;Send Data&gt; button, the button will change to &lt;Stop&gt;.
7. Observe the output on the spectrum analyzer
8. To manually change the transmitter to a different output power setting.
- a.  Click on the &lt;Stop&gt; button to end the data stream.
- b.  Click on the '06 PA1' register.
- c.  Click  on  the  'PAPWR[2:0]'  box  and  enter  the binary value '100'.
- d.  Click  on  the  &lt;Send  Data&gt;  button  to  restart  the transmission.
9. Observe the RF output on the spectrum analyzer.

## FTHR Board Quick Start ProcedurePreset Interface

Setup  and  Connect  the  MAX41461-MAX4164  EV  Kit Hardware to the FTHR Board for a 'Data' Signal Source.

1. Verify all jumpers on the MAX4146x EV kit board are  in  the  default  position ;  refer  to  Table  2. It  is recommended the jumpers in Table 3 be set to the output  frequency  for  which  the  EV  Kit  is  tuned  (as noted on the hardware) .
2. Connect the MAX4146x EV kit to the FTHR Board , be  sure  the  USB  connector  is  oriented  on  the opposite side of the SMA connector (see Figure 3).
3. Connect the FTHR Board to the PC using a micro-B USB cable and observe a 'heartbeat' on the FTHR board's red LED.
4. Connect  the  RF\_OUT  to  a  spectrum  analyzer using a low-loss SMA cable.
- a.  Set the Center Frequency to the target frequency of interest.
- b.  Set the Span to 1% of the Center Frequency, the Resolution  Bandwidth  (RBW)  to  1kHz,  and  the Video Bandwidth (VBS) to 3kHz.
- c.  Set the trace to 'Max Hold'.

Figure 16. Data Control Block

<!-- image -->

Evaluates: MAX41463

MAX41464

## 5. Run the MAX4146x EV Kit Control Software GUI

- a.  Select the appropriate COM port and click on the &lt;Connect&gt; button (see Figure 6).
- b.  Confirm the firmware status bar has changed from 'MAX4146X x.x.x' to 'MAX4146X 0.1.0' or similar, the software LED is lit green, and the port status is noted as 'Connected' (see Figure 7).
- c.  Enter a supply level into the 'Voltage' text box in units of V and click the &lt;Set&gt; button; for example, enter '3.0' for a 3.0V supply (see Figure 8).
- d.  Select the appropriate part in the 'Chip' drop-down box and click the &lt;Set&gt; button (see Figure 9).

## 6. Generate a data stream.

- a.  In the Data Control block check the 'Preset Mode' checkbox.
- b.  Select the Manchester Bitrate of interest and click the &lt;Set&gt; button.
- c.  Enter 0xAA in the 'Messages' text box.
- d.  Check the 'Continuous' checkbox.
- e.  Click on the &lt;Send Data&gt; button, the button will change to &lt;Stop&gt;.
7. Observe the output on the spectrum analyzer.

Figure 17. Preset Data

<!-- image -->

│

## MAX4146x Evaluation Kit

## Preset Quick Start Procedure-Without FTHR Board

## Setup and Connect the MAX4146x EV Kit Hardware for Stand-Alone Operation

1. Verify all jumpers on the MAX4146x EV kit board are  in  the  default  position ;  refer  to  Table  3.  I t  is recommended  the  jumpers  from Table  3  be  set  to the output frequency for which the EV kit is tuned (as noted on the hardware) .
2. Connect a 3.0V/100mA supply to the MAX4146x EV kit at the VDD ( Red ) and GND ( Black ) points.
- a.  JU1 setting is not applicable (if the EV kit is still connected to the FTHR board, JU1 must be 'not installed' ).
- b. Enable the power supply's output.

## Table 3a. MAX41461 EV Kit Preset States, ASK Modulation

| SEL1 (JU2)   | SEL0 (JU3)   | MODE/CENTER FREQUENCY (MHz)   |
|--------------|--------------|-------------------------------|
| GND          | GND          | I 2 C Interface               |
| GND          | Open         | 315.0*                        |
| GND          | VDD          | 318.0                         |
| Open         | GND          | 319.51                        |
| Open         | Open         | 345.0                         |
| Open         | VDD          | 908.0                         |
| VDD          | GND          | 915.0                         |
| VDD          | Open         | 433.92                        |
| VDD          | VDD          | 433.42                        |

## Table 3b. MAX41462 EV Kit Preset States, ASK Modulation

| SEL1 (JU2)   | SEL0 (JU3)   | MODE/CENTER FREQUENCY (MHz)   |
|--------------|--------------|-------------------------------|
| GND          | GND          | I 2 C Interface               |
| GND          | Open         | 315.0                         |
| GND          | VDD          | 433.92*                       |
| Open         | GND          | 433.0                         |
| Open         | Open         | 434.0                         |
| Open         | VDD          | 868.3                         |
| VDD          | GND          | 868.0                         |
| VDD          | Open         | 868.5                         |
| VDD          | VDD          | 868.35                        |

Evaluates: MAX41463

MAX41464

3. Connect the RF\_OUT to a spectrum analyzer using a low-loss SMA cable and configure the equipment.
- a.  Set  the  Center  Frequency to the same value as selected with the jumpers in step 1.
- b.  Set the Span to 1% of the Center Frequency, the Resolution  Bandwidth  (RBW)  to  1kHz,  and  the Video Bandwidth (VBS) to 3kHz.
- c.  Set the trace to 'Max Hold'.
4. Connect a digital data signal to the DATAIN Test Point ( Yellow ) and GND ( Black )
- a.  Be sure the data levels match the power supply level used in step 2.
- b.  Begin streaming data.
5. Observe the RF output on the spectrum analyzer.

## Table 3c. MAX41463 EV Kit Preset States, FSK Modulation

| SEL1 (JU2)   | SEL0 (JU3)   | MODE/CENTER FREQUENCY (MHz)   |
|--------------|--------------|-------------------------------|
| GND          | GND          | I 2 C Interface               |
| GND          | Open         | 315.0                         |
| GND          | VDD          | 916.0                         |
| Open         | GND          | 908.42                        |
| Open         | Open         | 908.8                         |
| Open         | VDD          | 908.0                         |
| VDD          | GND          | 915.0*                        |
| VDD          | Open         | 433.92                        |
| VDD          | VDD          | 433.42                        |

## Table 3d. MAX41464 EV Kit Preset States, FSK Modulation

| SEL1 (JU2)   | SEL0 (JU3)   | MODE/CENTER FREQUENCY (MHz)   |
|--------------|--------------|-------------------------------|
| GND          | GND          | I 2 C Interface               |
| GND          | Open         | 315.0                         |
| GND          | VDD          | 433.92*                       |
| Open         | GND          | 868.42                        |
| Open         | Open         | 868.95                        |
| Open         | VDD          | 868.30*                       |
| VDD          | GND          | 869.85                        |
| VDD          | Open         | 868.5                         |
| VDD          | VDD          | 868.35                        |

*default position ; the MAX41464EVKIT# is tuned to 433.92MHz, the MAX41464EVKIT-868 is tuned to 868.3MHz.

│

## MAX4146x Evaluation Kit

## Table 4. MAX4146x EV Kit Test Points

| NAME       | COLOR   | EVKIT FUNCTION                                |
|------------|---------|-----------------------------------------------|
| VDD        | Red     | 1.8V to 3.6V Power Supply pin                 |
| GND        | Black   | Ground                                        |
| DATAIN/SDI | Yellow  | TX data or SDI (MAX41460 only) interface      |
| CLKOUT/SDO | Green   | Clock output or SDO (MAX41460 only) interface |

## Detailed Description

## Detailed Description of Hardware MAX4146x EV Kit Printed Circuit Board

The  MAX4146x  evaluation  kit  PCB  is  manufactured on  a  2-layer,  1oz  copper,  FR4  dielectric  stack-up  PCB. The  board  was  designed  to  accommodate  all  five versions of the ISM transmitter: MAX41460, MAX41461, MAX41462,  MAX41463,  and  MAX41464.  Layer  1  is primarily designed to keep the RF signals on one side of the board with short traces, small matching components, and low parasitics. Layer 2 was targeted to be a continuous ground plane wherever possible.

## Control Interface

There  are  three  forms  of  interfacing  to  the  MAX4146X device depending on the part installed: 3 or 4-wire SPI, 'preset'  or  pin-configured,  and  the  special  case  of  an I 2 C  control interface. The MAX41460 device will require a 3- or 4-wire SPI connection and the MAX4146x EV kit was designed to use the provided FTHR board interface through the H1/H2 headers. Other MCU connections can be made through the JU4 PMOD header (see the Pmod Interface section).

## Power

The MAX4146x EV kit board can be powered directly from the  FTHR  board  PMIC  through  the  H1  header,  directly from the supply test points, or through the user-installed Pmod header.   A  single  +1.8V  to  +3.6V,  100mA  power supply can be connected to the board using the two wire loops (marked VDD and GND). Jumper JU1 selects the source of power when not using the direct connection test points: from the L3OUT of the FTHR board or the PVIO of the Pmod connector.

## Data Interface

The  MAX4146x  EV  kit  comes  preconfigured  to  directly connect the FTHR board through the H1/H2 headers to the  SPI  and  the  I 2 C  interfaces.  The  GUI  will  determine which bus is used to communicate to the device based on the 'Chip' selected in the software.

│

Evaluates: MAX41463

MAX41464

Evaluates: MAX41463

Figure 18. MAX4146X EV Kit Interface

<!-- image -->

│

## MAX4146x Evaluation Kit

## Clock Output

When sending data to a MAX41461-MAX41464 in preset mode the CLKOUT pin will drive an 800kHz clock signal. This clock output signal can be monitored with the Green CLKOUT test point. Note the output from the MAX41461MAX41464 is not designed to drive a high capacitive load and may cause noticeable ±800kHz spurs in the spectrum when the CLKOUT test point is connected to a capacitive load  of  more  than  10pF. A  typical,  low-end  oscilloscope probe may be enough to cause these spurs.

## I 2 C Pullups

Resistors R14 and R15 along with jumper JU5 have been provided  as  on-board  pull-ups  required  for  proper  I 2 C interfacing  and  termination.  When  using  a  MAX41461MAX41464  device  in  preset  mode,  the  DATAIN  line should be held low at power-up for proper configuration, therefore, the R16, 100kΩ is the default connection. When used in I 2 C mode, the DATAIN pin is used instead as the I 2 C, SDA line. Likewise, the CLKOUT pin is used as the I 2 C  SCL input.  These pins are open-collector (or opendrain) outputs from a the MCU and need to have pullup resistors to operate properly. Two 4.7kΩ resistors are pre -populated on the MAX4146x EV kit and can be connected to the positive supply by shorting the JU5 jumper 1-2 and 3-4. This should only be connected when the preset pins (SEL0 and SEL1) are both connected to ground, selecting the  I 2 C  interface  mode  of  the  MAX4146x.  It  should  be noted that the FTHR board also has footprints for I 2 C pullup

Evaluates: MAX41463

MAX41464

resistors at R6 and R11. Both sets of pullup resistors (on the FTHR board and the MAX4146x EV kit) should not be populated simultaneously, otherwise incorrect I 2 C signal levels  may  result.  Refer  to Appendix  II for  detailed information on evaluation kit hardware modifications.

## Data Indicator

An  option  available  on  the  evaluation  kit  layout  is  the ability  to  connect  a  surface-mount  LED  (D1,  0603)  and resistor (R9, 0603, 470Ω recommended) to provide visual feedback of  the  activity  on  the  DATAIN  line.  Populating this LED  and  resistor will cause  additional  power consumption and is not included by default in the evaluation kit assembly.

## Pmod Interface

The  MAX4146x  EV  kit  provides  a  Pmod-compatible header footprint to interface with the transmitter. The JU4 connector  can  be  populated  with  a  6-pin,  100mil,  rightangle  header  allowing  direct  connections  to  the  CSB, DATAIN, CLKOUT, SCLK/SDA, ground, and VDD lines, making it capable with either SPI or I 2 C Pmod interfacing.  Populating this header would allow control from the MAX32600MBED kit and the MAXREFDES72# Arduino Uno R3 to Pmod shield adaptor. When using the Pmod interface  to  supply  the  MAX4146x  EV  kit  with  power, make sure to connect the JU1 jumper between pins 2-3. Refer to Appendix II - Hardware Modifications for detailed information on evaluation kit hardware modifications.

Figure 19. 800kHz Spurs from Excessive CLKOUT Loading

<!-- image -->

│

## MAX4146x Evaluation Kit

## Detailed Description of Software

The  MAX4146x  EV  kit  Controller  GUI  Software  is designed  to  control  the  MAX4146x  evaluation  kit  board and the MAX32630FTHR board as shown in Figure 3. The software includes USB controls which provide SPI, I 2 C, or data-only communication to the MAX4146X through the FTHR board interface.

## Comport

The  COM  Port  section  provides  a  drop-down  selection of  serial  communication  ports  available  for  connection to  a  MAX4146X  evaluation  kit  through  a  FTHR  board. When  the  GUI  is  run  after  connecting  the  evaluation kit  hardware,  the  drop-down  box  should  default  to  the proper  COM  Port.  If  the  hardware  is  connected  to  the computer after the GUI is started, click on the &lt;Refresh&gt; button to scan for compatible ports. Once the appropriate COM Port is selected in the drop-down box, click on the &lt;Connect&gt; button.  (See Figure 6)

After properly connecting to the COM Port with the FTHR board,  the  GUI  will  display  the  revision  of  FTHR  board firmware  detected,  display  a  Green  'LED',  and  display 'Connected' in the status bar along the bottom of the GUI window. (Figure 7)

## Voltage (1.8-3.3V)

The  Voltage  section  provides  a  user-adjustable  power supply from  the  FTHR  board  MAX14690N  Power Management IC (PMIC) to the MAX4146x EV kit and can be used as the primary VDD supply. The PMIC, L3OUT can be set to voltages between 1.8V to 3.3V and it applies

## Evaluates: MAX41463 MAX41464

to  the  level  of  the  logic  interface  lines  as  well  as  the device supply. (Figure 8)

To program the supply voltage, enter a valid level in the 'Voltage'  text  box  and  click  on  the  &lt;Set&gt;  button.  The default value of the L3OUT voltage is 3.3V.

When  using  the  FTHR  board  interface  to  supply  the MAX4146x EV kit with power, make sure to connect the JU1 jumper between pins 1-2.

## Chip

The  Chip  section  must  be  set  by  the  user  to  properly select which type of MAX4146x EV kit is attached to the FTHR board. This selection will  configure  the  GUI  software to interface through the SPI pins (when MAX41460 is selected), through the I 2 C pins, or provide a simple data stream to the device (when the MAX41461, MAX41462, MAX41463, or MAX41464 are selected).

To select the part, chose the appropriate part in the 'Chip' drop-down box and click on the &lt;Set&gt; button.  (Figure 9)

## Crystal Frequency (12.8MHz-19.2MHz)

The Crystal Frequency section allows the user to indicate the frequency of the crystal installed on the MAX4146x EV kit (f XTAL ).  All evaluation kits come prepopulated with a  16.000MHz crystal  and  the  default  setting  in  the  GUI is  assumed to be 16.0MHz. This value can be adjusted between 12.8MHz and 19.2MHz and will be used when programming frequency-basted registers that are dependent on the f XTAL  value.

To  configure  the  reference  oscillator, enter a valid frequency  (in  MHz)  in  the  'Crystal  Frequency'  text  box and click on the &lt;Set&gt; button. (Figure 10)

Figure 20. MAX4146x EV Kit GUI Configuration

<!-- image -->

│

## MAX4146x Evaluation Kit

## Modulation

The  Modulation  section  allows  the  user  to  quickly  set the form of modulation for the MAX4146x device. When a  MAX41461  or  MAX41462  device  is  selected,  only ASK modulation will be available in the drop-down box. Similarly,  when  MAX41463  and  MAX41464  is  selected, only  FSK  will  be  available  in  the  drop-down  box.  This section  directly  programs  the  MODMODE  bit  [0]  in  the CFG1 register (0x00).

To  select  the  modulation,  chose  ASK  or  FSK  in  the 'Modulation'  drop-down  box  and  click  on  the  &lt;Set&gt; button. (Figure 11)

## PA Power Setting

The PA Power Setting section allows the user to quickly set  the  power  level  of  the  PA.    This  section  directly programs the PAPWR bits [2:0] in the PA1 register (0x06). The  maximum  output  power  is  obtained  by  selecting 'Power  Level  8'  or  111b  in  the  register.    The  default minimum output power for the MAX4146x when interfacing through  I 2 C  and  SPI  is  'Power  Level  1'  or  000b  in  the register.    Each  bit  can  adjust  the  PA  output  by  approximately 2.5dB.

To select the output power level, choose the appropriate 'Power Level' in the 'PA Power Setting' drop-down box and click on the &lt;Set&gt; button. (Figure 12)

The  power  level  can  also  be  set  manually  through  the Direct Register Access Section by clicking on the 06 PA1 (0x06)  register,  clicking  on  the  PAPWR[2:0]  field,  and typing in a binary value between 000b and 111b.

## Frequency

The  Frequency  section  is  used  to  set  the  carrier  or 'center'  frequency  of  the  MAX4146x  (f C   or  f LO ).  The value entered in this section will be used to calculate the 3-word  Fractional-N  value  programmed  into  the  PLL3 (0x0B), PLL4 (0x0C), and PLL5 (0x0D) registers. The GUI will  calculate  the  values  for  the  PLL  registers  using  the Crystal Frequency and the following formula:

## Equation 1:

<!-- formula-not-decoded -->

To program the carrier, enter a valid frequency (in MHz) into  the  'Frequency'  text  box  and  click  on  the  &lt;Set&gt; button. (Figure 13)

## Frequency Deviation

The Frequency Deviation section is used to set the FSK deviation values (Δf) and the Gaussian shaping bit. The value entered in this section is used to calculate the 7-bit content for the PLL6 (0x0E) register. This calculation will also  use  the  value  entered  for  the Crystal  Frequency section. The formula for setting the register value is:

## Equation 2:

<!-- formula-not-decoded -->

To program the Δf, enter a valid frequency (in kHz) into the 'Frequency Deviation' text box and click on the &lt;Set&gt; button. (Figure 14)

The GUI software will adjust the carrier frequency based on ½ of this Δf value to maintain the center of the FSK signal.  This will place f SPACE  at f C - Δf/2 and f MARK at f C + Δf/2. If the center frequency is adjusted and programmed after setting the Frequency Deviation, then f SPACE  = f C and  f MARK   =  f C +  Δf.    T o  reset  the  center  of  the  FSK signal  to  f C ,  simply  click  on  the  Frequency  Deviation &lt;Set&gt; button again.

## Data Control Section

This portion of the GUI software provides a flexible tool for the user to generate data for SPI, I 2 C, or the preset parts, all from a single interface.

Figure 21. Preset Data

<!-- image -->

Evaluates: MAX41463

MAX41464

│

## MAX4146x Evaluation Kit

## Preset Mode

When  using  a  MAX41461-64  evaluation  kit  in  preset mode, the GUI can provide simple Manchester encoded data  directly  to  the  DATAIN  pin  of  a  connected  device. Simply select the &lt;Preset Mode&gt; checkbox to generate this  data without any other interfacing.  All the following setting  are  then  used  to  format  a  data  stream  to  send directly  to  the  DATAIN  pin  on  the  attached  MAX4146x EV kit.

## Manchester Bitrate

This is the data rate in kbps for Manchester encoded data. Enter a value in the text box and click the &lt;Set&gt; button to configure the Data Control.

When  communicating  with  a  MAX41461-MAX41464  in I 2 C  mode, this bitrate value will be used to program the Baud  Clock  values  BCLK\_POSTDIV[2:0]  in  the  CFG2 (0x01)  register  and  the  BCLK\_REDIV[7:0]  in  the  CFG3 (0x02) register.  According to the formula:

## Equation 3:

<!-- formula-not-decoded -->

## Equation 4:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

BCLKPOSTDIV = 1 to 5, and BCLKPREDIV = 3 to 255

Using  the  following  equation  and  the  default  crystal frequency, the BCLK\_PREDIV can be calculated from the target baud rate using ranges set by BCLK\_POSTDIV:

## Equation 5:

<!-- formula-not-decoded -->

## Table 5. Baud Rate Programming

|   BCLK_POSTDIV | MIN BAUD (BCLK_PREDIV = 255)   | MAX BAUD (BCLK_PREDIV = 3)   | BCLK_PREDIV RESOLUTION   |
|----------------|--------------------------------|------------------------------|--------------------------|
|              1 | 3125Hz                         | 200kHz                       | ~12Hz to 40kHz           |
|              2 | 1562.5Hz                       | 100kHz                       | ~6Hz to 20kHz            |
|              3 | ~781.3Hz                       | 50kHz                        | ~3Hz to 10kHz            |
|              4 | ~390.6Hz                       | 25kHz                        | ~1.5Hz to 5kHz           |
|              5 | ~195.3Hz                       | 12.5kHz                      | ~0.8Hz to 2.5kHz         |

│

## Equation 5a:

<!-- formula-not-decoded -->

## Equation 5b:

<!-- formula-not-decoded -->

When using  devices  in  I2C  mode,  this  baud  rate  must not exceed the rate at which data is being written to the TX Data FIFO. Otherwise, the buffer will be emptied (under -flow)  with  the  first  packet  transfer  and  the  MAX41461MAX41464  will  exit  transmission  mode.  Generally,  that baud rate is 8/9 of the SCL rate, which for the FTHR board interface f SCL  = 400kHz. Therefore, the maximum baud rate  of  200kbaud  is  obtainable  using  the  evaluation  kit setup in I 2 C mode.

## Continuous Transmission

Selecting this check box will configure the Data Control interface  so  the  message  or  data  sequence  will  repeat until  the  user  interrupts  the  transmission.  For  example: when  a  '0xAA'  message  is  sent  with  &lt;Continuous&gt; unchecked, the sequence of 1-0-1-0-1-0-1-0 bits will be transmitted  a  single  time.  When  the  &lt;Continuous&gt;  is checked, the &lt;Send Data&gt; process will continuously send a  repeating  sequence  of  1-0-1-0-1-0-1-0-1-0-1-0-1-0-10… bits, emulating a square wave data pattern.

Evaluates: MAX41463

MAX41464

## MAX4146x Evaluation Kit

## Messages Text Block and Message File

The  &lt;Messages&gt;  text  block  contains  a  hexadecimal encoded  data  string  to  be  transmitted  with  the  FTHR board over the data interface. This message is formatted differently depending on the 'Chip' selected and the mode of operation. For example, when in preset mode the data is streamed directly to the DATAIN pin of the MAX4146x evaluation  kit.  When  in  I 2 C  mode,  the  message  is packetized  and  formatted  across  the  I 2 C  registers  for transmission  at  the  baud  rate  set  with  the  'Manchester Bitrate' control noted previously.  Finally, when used with a MAX41460 SPI device, the CSB and DATA pins are used to transmit the message at the bitrate noted previously.

Tools  are  provided  to  allow  the  user  to  quickly  load complex test packets generated outside of the GUI. The &lt;Clear&gt;,  &lt;Save&gt;,  and  &lt;Load&gt;  buttons  help  control  the contents of the &lt;Messages&gt; text block.

By  clicking  on  the  &lt;Clear&gt;  button,  any  contents  in  the &lt;Messages&gt; text block will be deleted.

Clicking the &lt;Save&gt; button will store the contents of the &lt;Messages&gt; block to a file. A 'Save As' explorer window will open, and the user will be prompted to save a .txt file.

Clicking  the  &lt;Load&gt;  button  will  pop-up  an  'Open' window and prompt the user for a .txt file to load into the &lt;Messages&gt; text block.

## Tool History Section

This  portion  of  the  GUI  contains  a  Log  File  text  block which is used to record activity within the GUI.

## Log File

For every &lt;Set&gt;, connection effort, or register programming action,  the  GUI  activity  is  logged  in  this  text  block.  The user can add notes and make edits to the content of the Log File text block.

Clicking on the &lt;Clear Log File&gt; will delete the contents in the text block.

Clicking the &lt;Save Log File&gt; button will open a 'Save As' explorer window and the user will be prompted to save a .txt file.

Figure 22. Tool History

<!-- image -->

Evaluates: MAX41463

MAX41464

## Direct Register Access Section

The GUI software allows for direct access to all the available register  when  interfacing  with  both  the  MAX41460  SPIbased device or the MAX41461-64 devices in I 2 C mode.

## Register List

On  the  left-hand  side  of  the Register  Interface section is  a  list  of  the  device's  internal  registers.  Each  register address/name (e.g., '00 CFG1') acts as an active control and by clicking on an individual register, the contents will be presented in the Register Value section.

## Register Value

The  right-hand  side  of  the Register  Interface section displays  the  content  of  the  selected  device  register.   At the top of the block, a header displays the name of the selected  register  (e.g.,  'CFG1'),  the  'Index'  or  address of  the  register  in  both  decimal  ('0d')  and  hexadecimal ('0000h') form.

The body of this section shows a table with the names of the individual bits for the selected 8b register along with the current value programmed into each bit or bit group.

The remaining portion of the body shows a table with the bit indexes, the type of register (write/read), the name of the bit or bit group, the Reset value, and a description of the bit or bit group.

## Read and Write Registers

Most of the registers in the MAX4146x are both readable and  writable.    The  read-only  registers  are  I2C4  (0x14), I2C5  (0x15),  I2C6  (0x16),  ID1  (0x1B),  ID2  (0x1C),  and STATUS  (0x1D).  Writing  values  to  a  register  can  be accomplished by selecting the register of interest, typing a Hex or Dec value into the 'Value' text box, and clicking on the &lt;Write Register X&gt; button (where X is the decimal address  of  the  register).  Reading  the  register  content is  similar: select the register of interest and click on the &lt;Read Register X&gt; button.

## Register Bit Field

Individual bits or bit groups can be programmed without having to enter the full value of the register. To program a bit or group of bits, first select the register of interest (PA1, 0x06 for example), next select the bit or bit group to be changed (PAPWR[2:0] as an example), enter the binary code for the new value (111b), and hit &lt;Enter&gt;--the new value will automatically be reflected in the 'Value' text box and will be written to the device.

│

## MAX4146x Evaluation Kit

## Miscellaneous Software Information

The tool bar along the top of the GUI software provides a couple of options to the user.

## File and Help Menu

Selecting File &gt; Exit from the tool bar will close the GUI program.  This  has  the  same  effect  as  clicking  the  &lt;X&gt; button in the upper-right corner of the GUI software.

Selecting Help &gt; About from the tool bar will display the splash screen. This window shows the name of the software,  the  revision  number,  a  copyright  notice,  a  link  to the Maxim website, a link to the support website, and a checkbox to enable or disable the splash screen during startup. Click the &lt;OK&gt; button to close the About window.

## .xml File

The register descriptions for the MAX4146X  GUI is available in an .xml file which is stored with the executable in the application directory. The default file loaded when the  GUI  is  initialized  is RegisterSet8.XML. This  file can be edited as needed to adjust the names of fields, provide  simple  indicators  to  the  GUI  user,  or  allow  for flexible updates to the GUI interface in the future.

## Use Cases

## Three Interface Modes for Data Transmission and Control

The MAX4146x family of parts allow a great deal of flexibility  when  it  comes  to  transmitting  data.  Typically,  the fewer pins used to interface with the device, the simpler it is to control and transmit data.

## Preset Mode

Preset mode is the simplest interface of the three options. It  relies  on  the  part  number  to  choose  the  modulation (MAX41461  and  MAX41462  for  ASK;  MAX41463  and MAX41464 for FSK) and jumper settings (or tri-level pin connections)  to  configure  the  part  for  a  defined  carrier frequency (See Table 3).

The preset mode data interface requires only one pin to transmit  data,  wake-up,  and  shut-down  the  transmitter. To  accomplish  this  the  MAX4146x  uses  an  auto-datadetection process on the DATAIN connection to determine when to power-up and transmit and when to shut down.

The  baud  rate  and  encoding  of  the  transmission  data is  defined  by  the  user  simply  by  creating  a  virtual connection  between  DATAIN  and  the  PA  (DATAIN  H/L =  on/off  for  ASK  modulation  or  mark/space  for  FSK modulation).  Input  to  DATAIN  is  interpreted  as  an  NRZ data  sequence  and  if  a  particular  encoding  format is  required  (pulse  width,  Manchester,  etc)  the  input

## Evaluates: MAX41463 MAX41464

sequence  can  be  directly  encoded  by  the  MCU  onto DATAIN-what goes in is what comes out.

## I 2 C Mode

The  I 2 C  interface  mode  allows  the  user  to  access  the internal registers of the MAX41461-64 devices, permitting full  control  over  the  transmission  frequency,  modulation setting,  programmable  output  power,  sophisticated  lowpower and low-noise operational settings, etc.

This mode only requires two digital pins to interface with the transmitter but has a more complicated, packet-based method of transmission. Once configured for I 2 C interfacing, the DATAIN connection is used as the SDA line of the I 2 C  bus.  Data  transmission  is  handled  by  sending  data packets to the internal FIFO over the I 2 C interface.  The FIFO  data  are  then  transmitted  at  the  pre-programmed baud rate and the transmission is halted when either of two conditions are met: 1) the PKTLEN value has been reached,  or  2)  a  FIFO  underflow  (or  overflow)  occurs. The  register-programmed  baud  rate  defines  the  frequency at which NRZ data are transmitted. If other data encoding formats are required (pulse width, Manchester, etc), either the I2C data packet can be formatted to emulate the encoding or the other modes of operation (Preset or SPI Mode) should be used.

All  the  MAX41461-MAX41464  devices  are  identified with an I2C address of 0xD2 for write and 0xD3 for read sequences.  Packet  transmission  is  described  in  the various  device  data  sheets  within  the  ' Two-Wire  I2C Serial Interface ' section.

## SPI Mode

The  SPI  interface  is  only  available  on  the  MAX41460 device.  Similar to the I 2 C mode devices, the SPI interface allows access to the internal registers of the transmitter. This permits the user to have full control over the same properties of transmission frequency, modulation setting, programmable  output  power,  sophisticated  low-power and low-noise operational settings, etc.

This mode allows for either a 3-wire interface (write-only) or  a  4-wire  read/write  interface.  Data  transmission  is handled with a three-step process: 1) transition the CSB line  low;  2)  perform  any  register  configurations  then switch  to  transmit  mode  by  setting  the  SPI\_TXEN1  bit in  the  CFG6  (0x0A)  register  or  the  SPI\_TXEN2  bit  in the CFG7 (0x0B) register; 3) hold the CSB line low and sequence the DATAIN line just like in preset mode operation. Taking the CSB line high will end transmission and cause the MAX41460 to enter shut down or standby mode (determined by register settings).

## MAX4146x Evaluation Kit

The  baud  rate  and  encoding  of  the  transmission  data is  defined  by  the  user  simply  by  creating  a  virtual connection  between  DATAIN  and  the  PA  (DATAIN  H/L =  on/off  for  ASK  modulation  or  mark/space  for  FSK modulation).  Input  to  DATAIN  is  interpreted  as  an  NRZ data  sequence  and,  if  a  particular  encoding  format is  required  (pulse  width,  Manchester,  etc.),  the  input sequence  can  be  directly  encoded  by  the  MCU  onto DATAIN-what goes in is what comes out.

A  full  description  of  the  SPI  interface  can  be  found  in the  ' Serial  Peripheral  Interface  (SPI) '  section  of  the MAX41460 device data sheets.

## Clock Output

The CLKOUT pin on the MAX4146x devices is available for synchronous interfacing to an MCU in the transmitter application.

When MAX41461-MAX41464 devices are used in preset mode, the CLKOUT pin provides an 800kHz square wave output signal when the device is active. If these parts are used in I 2 C mode, the CLKOUT pin is repurposed as the SCL pin and there will no longer be an output clock signal.

When  a  MAX41460  device  is  configured  for  a  3-wire SPI  interface,  the  CLKOUT  pin  will  provide  an  800kHz square wave output signal when the device is active. If the  MAX41460 is configured  for  a  4-wire  SPI  interface, the CLKOUT pin is repurposed as the SDO or MISO pin. There  will  not  be  an  output  clock  signal  but  rather  the read-sequence serial data output.

As noted in the Detailed Description of Hardware section, the CLKOUT pin is not designed to drive a high capacitive load  and  may  cause  noticeable  ±800kHz  spurs  in  the transmission spectrum when it is connected to a capacitive load of more than 10pF.

## High Power 'Boost' Mode

Boost mode in the MAX4146x is accessible whenever the user is interfacing with the transmitter's registers through I 2 C or SPI.  Use of the boost mode is not recommended on unmodified evaluation kit when operating at frequencies  below  850MHz  because  the  larger  voltage  swings imposed  on  the  PA  output  may  exceed  the  Absolute Maximum ratings of the device.

Setting  the  boost  mode  in  the  MAX4146x  changes  the 'on' duty cycle of the PA output stage FETs from 25% of

## Evaluates: MAX41463 MAX41464

the programmed transmission frequency to 50%. To make this change, select the SHDN (0x05) register and set the PA\_BOOST bit to 1b.

Higher  output  power  can  also  be  accomplished  with adjustments to the output matching network. See Appendix II - Hardware Modifications for more details.

For additional information on switch-mode PAs similar to the one used in this  transmitter,  see Application  Note  3589 -Power Amplifier  Theory  for  High-Efficiency  Low-Cost ISM-Band Transmitters . Refer to Appendix II - Hardware Modifications for detailed information on hardware modifications.

## Shutdown, Standby, and Program Modes

When  communicating  with  a  MAX41460  device  or  the MAX41461-64  device  in  I 2 C  mode,  the  part  can  be programed to power-down into one of three low-current, non-transmitting  states  after  completing  a  transmission: shutdown, standby, and program mode.

Shutdown is the lowest-current power-down state and is the default condition for all devices, including parts used in preset mode. Standby allows the transmitter to startup quicker  than  shutdown  by  keeping  the  crystal  oscillator circuit  running.  Finally,  programming  mode  keeps  both the crystal oscillator and the PLL running allowing for the quickest transition from programming to full transmission.

To set the power-down mode, click on the CFG4 (0x03) register, select the PWDN\_MODE[1:0] and enter a value of 01b for standby mode. The program mode value is 10b and the default value for shutdown mode is 00b.

## Variable Capacitance

As noted in the data sheet, the PA output has an inherent capacitance (approximately 4.7pF). The MAX4146x family of  transmitters  have  a  5-bit  programmable  capacitance value which can help the user 'tune' the output network by varying the PA capacitance. Each step of the programable capacitance has a nominal resolution of 0.18pF ranging from a total of 4.7pF to about 10.pF.

To  program  this  value  click  on  the  PA2  (0x07)  register, select the PACAP[4:0] bit group, and enter a value for the adjustable capacitance such as 1000b.  The default value is no added capacitance: 00000b.

## MAX4146x Evaluation Kit

## PLL Control

The  MAX4146x  transmitter  has  to  modes  of  operation for  the  PLL:  low-current  and  low  phase  noise  mode. Low  current  mode  uses  an  internal  ring  oscillator  VCO which has advantages  in power  consumption  and tunability,  allowing  for  continuous  tuning  from  286MHz to  over  960MHz.  The  low  phase  noise  mode  switches the PLL over to an LC VCO providing a more controlled, higher-Q  reference  with  the  limitation  of  fixed  operating  bands  of  286MHz~320MHz,  425MHz~480MHz, and 860MHz~960MHz (defined by the N-divider).

To  switch  from  the  default  ring-oscillator  VCO  to  the LC  VCO,  click  on  the  PLL1  (0x08)  register,  select  the LOMODE bit, and enter the value of 1b. Next, select the LODIV[1:0] bit group and program the divider ratio based on the targeted operating frequency.

## Table 6. VCO Divider Settings

| VCO              | LOMODE SETTING   | FREQUENCY RANGE (MHz)   | LODIV[1:0] SETTING   |
|------------------|------------------|-------------------------|----------------------|
| Ring Oscillator* | 0b               | 286~960MHz              | 00b                  |
| LC VCO           | 1b               | 286~320                 | 11b                  |
| LC VCO           | 1b               | 425~480                 | 10b                  |
| LC VCO           | 1b               | 860~960                 | 01b                  |

*default

## Ordering Information

| PART              | TYPE                   |
|-------------------|------------------------|
| MAX41464EVKIT-868 | Preset/I 2 C           |
| MAX41464EVKIT#    | Preset/I 2 C at 434    |
| MAX32630FTHR#     | ARM mBed FTHR Platform |

# RoHs-compliant device.

## Evaluates: MAX41463 MAX41464

When switching back to the ring-oscillator VCO, be sure to set the LOMODE bit back to 0b and the LODIV[1:0] bit group back to 00b.

## Chip ID

Register  ID1  (0x1B)  provides  a  readable  identification number  for  the  device.    When  communicating  with  a MAX41460 device, the ID value with be reported as 0x6F. When  communicating  with  a  MAX41461-MAX41464 device in I 2 C mode, the ID value will be reported as 0x60.

The  ID2  register  (0x1C)  provides  a  readable  revision number for the device.  The default value for this register is 0x0A. This register can easily be used as a confirmation of  proper  I 2 C  and  4-wire  SPI  communication  simply  by reading-back the value of the ID2 register to confirm the result as '0x0A'.

│

## MAX4146x Evaluation Kit

## MAX4146x EV Component List

| PART         |   QTY | DESCRIPTION                                                |
|--------------|-------|------------------------------------------------------------|
| C1, C2       |     2 | 5pF ± 0.25pF Capacitor (01005) muRata GRM0225C1H5R0CA03    |
| C3           |     1 | 0.47µF ± 10% Capacitor (0603) muRata GRM188R71C474K        |
| C4           |     1 | 0.01µF ± 5% Capacitor (0603) muRata GRM1885C1H103JA01      |
| C5           |     1 | 220pF ± 5% Capacitor (0603) muRata GRM1885C1H221JA01       |
| C6           |     1 | 3.3pF ±0.25% Capacitor (0402) muRata GRM1555C1H3R3BA01D    |
| C7           |     1 | 100pF ± 5% Capacitor (0402) muRata GRM1555C1H101JA01       |
| C8           |     1 | 4.7pF ± 0.1% Capacitor (0402) muRata GJM1555C1H4R7BB01     |
| C9, C10      |     1 | DNP                                                        |
| CLKOUT       |     1 | Test Point Keystone 5126                                   |
| D1           |     1 | DNP                                                        |
| DATAIN       |     1 | Test Point Keystone 5014                                   |
| GND, GND1    |     2 | Test Point Keystone 5011                                   |
| H1           |     1 | Connector Male Through Hole Sullins PRPC016SFAN-RC         |
| H2           |     1 | Connector Male Through Hole Sullins PRPC012SFAN-RC         |
| JU1-JU3, JU5 |     3 | Connectors Male Through Hole Sullins PEC03SAAN / PEC02SAAN |

## Component Suppliers

| SUPPLIER                               | WEBSITE              |
|----------------------------------------|----------------------|
| Epson America                          | www5.epsondevice.com |
| Johnson Components/Cinch               | belfuse.com/cinch    |
| Keystone                               | www.keyelco.com      |
| Murata Electronics North America, Inc. | www.murata.com       |
| Panasonic                              |                      |
| Sullins                                | www.sullinscorp.com  |
| Vishay Dale                            | www.vishay.com       |

Note:

Indicate that you are using the MAX4146x when contacting these component suppliers.

Evaluates: MAX41463

MAX41464

| PART            |   QTY | DESCRIPTION                                         |
|-----------------|-------|-----------------------------------------------------|
| JU4             |     1 | DNP                                                 |
| L1A             |     1 | 5.6nH ± 5% Inductor (0603) muRata LQW18AS5N6J0Z     |
| L1B             |     1 | DNP                                                 |
| L2              |     1 | 18nH ± 5% Inductor (0603) muRata LQW18AN18NJ80      |
| R1-R5           |     5 | DNP (MAX41464)                                      |
| R6-R8           |     3 | 0 Ω ± 0% Resistor (0603) Vishay Dale CRCW06030000Z0 |
| R9-R13, R17-R18 |     7 | DNP                                                 |
| R14, R15        |     2 | 4.7k Ω ± 5% Resistor (0603) Panasonic ERJ-3GEYJ472V |
| R16             |     1 | 100k Ω ± 1% Resistor (0603) Panasonic ERJ-3EKF1003  |
| RFOUT           |     1 | SMAConnector Johnson Components 142-0701-851        |
| SU1-SU3, SU5    |     4 | Test Point Jumpers Sullins STC02SYAN                |
| U1              |     1 | MAX41464GUB+ TSSOP10                                |
| VDD             |     1 | Test Point Keystone 5013                            |
| Y1              |     1 | 16 MHz Crystal Epson TSX-3225 16.0000MF18X-AC0      |

│

## MAX4146x EV Kit Bill of Materials

|   ITEM | REF_DES   | DNI/DNP   |   QTY | MFGPART#                                                                                                   | MANUFACTURER                                             | VALUE             | DESCRIPTION                                                                                                                                                                    |
|--------|-----------|-----------|-------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C2    | -         |     2 | GRM0225C1H5R0CA03                                                                                          | MURATA                                                   | 5PF               | CAP; SMT (01005); 5PF; ±0.25PF; 50V; C0G; CERAMIC CHIP;                                                                                                                        |
|      2 | C3        | -         |     1 | C0603C474K4RAC; GRM188R71C474K                                                                             | KEMET;MURATA                                             | 0.47UF            | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 16V; 10%; X7R; -55°C to + 125°C; 0 ±15%°C MAX.                                                                                          |
|      3 | C4        | -         |     1 | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01                                                    | TDK;TDK;MURATA                                           | 0.01UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL = 5%; TG = -55°C to +125°C; TC = C0G                                                                                     |
|      4 | C5        | -         |     1 | GRM1885C1H221JA01                                                                                          | MURATA                                                   | 220PF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                                      |
|      5 | C6        | -         |     1 | GRM1555C1H3R3BA01                                                                                          | MURATA                                                   | 3.3PF             | CAP; SMT (0402); 3.3PF; ±0.1PF; 50V; C0G; CERAMIC CHIP                                                                                                                         |
|      6 | C7        | -         |     1 | C0402C101J5GAC;NMC0402NPO101J; CC0402JRNPO9BN101;GRM1555C1H101JA01; C1005C0G1H101J050;CGA2B2C0G1H101J050BA | KEMET;NIC COMPONENTS CORP.; YAGEO PHICOMP;MURATA;TDK;TDK | 100PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                                      |
|      7 | C8        | -         |     1 | GJM1555C1H4R7BB01                                                                                          | MURATA                                                   | 4.7PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7PF; 50V; TOL = 0.1PF; TG = -55°C TO +125°C; TC = C0G                                                                                   |
|      8 | CLKOUT    | -         |     1 | 5126                                                                                                       | KEYSTONE                                                 | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                  |
|      9 | DATAIN    | -         |     1 | 5014                                                                                                       | KEYSTONE                                                 | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                 |
|     10 | GND, GND1 | -         |     2 | 5011                                                                                                       | KEYSTONE                                                 | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                  |
|     11 | H1        | -         |     1 | PRPC016SFAN-RC                                                                                             | SULLINS ELECTRONICS CORP                                 | PRPC016SFAN-RC    | CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; STRAIGHT; 16PINS                                                                                                                   |
|     12 | H2        | -         |     1 | PRPC012SFAN-RC                                                                                             | SULLINS ELECTRONICS CORP                                 | PRPC012SFAN-RC    | CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; STRAIGHT; 12PINS                                                                                                                   |
|     13 | JU1-JU3   | -         |     3 | PEC03SAAN                                                                                                  | SULLINS                                                  | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                      |
|     14 | JU5       | -         |     1 | PEC02DAAN                                                                                                  | SULLINS ELECTRONIC CORP.                                 | PEC02DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                      |
|     15 | L1A       | -         |     1 | LQW18AS5N6J0Z                                                                                              | MURATA                                                   | 5.6NH             | INDUCTOR; SMT (0603); WIREWOUND; 5.6NH; 5%; 0.7A                                                                                                                               |
|     16 | L2        | -         |     1 | LQW18AN18NJ80                                                                                              | MURATA                                                   | 18NH              | INDUCTOR; SMT (0603); WIREWOUND; 18NH; 5%; 1.4A                                                                                                                                |
|     17 | R6-R8     | -         |     3 | CRCW06030000Z0                                                                                             | VISHAY DALE                                              | 0                 | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                             |
|     18 | R14, R15  | -         |     2 | ERJ-3GEYJ472V                                                                                              | PANASONIC                                                | 4.7K              | RESISTOR; 0603; 4.7K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                         |
|     19 | R16       | -         |     1 | ERJ-3EKF1003                                                                                               | PANASONIC                                                | 100K              | RESISTOR; 0603; 100K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                          |
|     20 | RFOUT     | -         |     1 | 142-0701-851                                                                                               | JOHNSON COMPONENTS                                       | 142-0701-851      | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                                    |
|     21 | SU1-SU5   | -         |     5 | NPC02SXON-RC                                                                                               | SULLINS ELECTRONICS CORP.                                | NPC02SXON-RC      | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                   |
|     22 | U1        | -         |     1 | MAX41464GUB+                                                                                               | MAXIM                                                    | MAX41464GUB+      | EVKIT PART - IC; MAX41464GUB+; TSSOP10; 300-960MHZ (G)FSK TRANSMITTER WITH I2C INTERFACE; PACKAGE OUTLINE DRAWING: 21-0061; PACKAGE CODE: U10+2; PACKAGE LAND PATTERN: 90-0330 |
|     23 | VDD       | -         |     1 | 5010                                                                                                       | KEYSTONE                                                 | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                    |
|     24 | Y1        | -         |     1 | TSX-3225 16.0000MF18X-AC0                                                                                  | EPSON                                                    | 16MHZ             | CRYSTAL; SMT (3225) 3.2X2.5; 9PF; 16MHZ; +/-10PPM; +/-18PPM                                                                                                                    |
|     25 | U2        | -         |     1 | MAXREFDES100HDK#                                                                                           | MAXIM                                                    |                   | ASSEMBLY; MOD; HEALTH SENSOR PLATFORM; MAXREFDES100HDK#                                                                                                                        |
|     26 | U2        | -         |     1 | 1675                                                                                                       | ADAFRUIT INDUSTRIES                                      |                   | CONNECTOR; FEMALE-FEMALE; WIREMOUNT; 1.27MM IDC CABLE-150MM; WIREMOUNT; 10PINS                                                                                                 |
|     27 | U2        | -         |     1 | 3025010-03                                                                                                 | QUALTEK ELECTRONICS CORP                                 |                   | CONNECTOR; MALE-MALE; WIREMOUNT; USB 4P-MICRO USB 5P 915MM; WIREMOUNT; 5PINS                                                                                                   |
|     28 | PCB       | -         |     1 | MAX41464868MHZ                                                                                             | MAXIM                                                    | PCB               | PCB:MAX41464868MHZ                                                                                                                                                             |
|     29 | U2        | DNI       |     1 | MAX32630FTHR                                                                                               | MAXIM                                                    | MAX32630FTHR      | EVKIT PART-MODULE; MAX32630FTHR; RAPID DEVELOPMENT PLATFORM;                                                                                                                   |
|     30 | J1        | DNI       |     1 | PPPC161LFBN-RC                                                                                             | SULLINS ELECTRONICS CORP.                                | PPPC161LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                                                                                           |
|     31 | J3        | DNI       |     1 | PPPC121LFBN-RC                                                                                             | SULLINS ELECTRONICS CORP                                 | PPPC121LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                                                                               |
|     32 | MISC1     | DNI       |     1 | 3025010-03                                                                                                 | QUALTEK ELECTRONICS CORP                                 | 3025010-03        | CONNECTOR; MALE; USB-A_MINI-B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN                                                                                                  |
|     33 | C9        | DNP       |     0 | C0603C474K4RAC; GRM188R71C474K                                                                             | KEMET;MURATA                                             | 0.47UF            | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 16V; 10%; X7R; -55°C to + 125°C; 0 ± 15% degC MAX.                                                                                      |
|     34 | C10       | DNP       |     0 | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01                                                    | TDK;TDK;MURATA                                           | 0.01UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL = 5%; TG = -55°C to +125°C; TC = C0G                                                                                     |
|     35 | D1        | DNP       |     0 | LTST-C193KRKT-5A                                                                                           | LITE-ON ELECTRONICS INC                                  | LTST-C193KRKT-5A  | DIODE; LED; WATER CLEAR; RED; SMT; VF=2V; IF=0.005A                                                                                                                            |
|     36 | JU4       | DNP       |     0 | TSW-106-25-T-S-RA                                                                                          | SAMTEC                                                   | TSW-106-25-T-S-RA | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 6PINS                                                                                                      |
|     37 | L1B       | DNP       |     0 | LQW18AS5N1J0Z                                                                                              | MURATA                                                   | 5.1NH             | INDUCTOR; SMT (0603); WIREWOUND; 5.1NH; 5%; 0.70A                                                                                                                              |
|     38 | R1-R5     | DNP       |     0 | CRCW06030000Z0                                                                                             | VISHAY DALE                                              | 0                 | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                             |
|     39 | R9        | DNP       |     0 | CRCW0603470RFK;ERJ-3EKF4700                                                                                | VISHAY DALE;PANASONIC                                    | 470               | RESISTOR, 0603, 470 Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                                                                          |
|     40 | R10-R13   | DNP       |     0 | CRCW06031M00JN                                                                                             | VISHAY DALE                                              | 1M                | RESISTOR; 0603; 1M Ω ; 5%; 200PPM; 0.10W; METAL FILM                                                                                                                           |
|     41 | R17       | DNP       |     0 | ERJ-3GEYJ472V                                                                                              | PANASONIC                                                | 4.7K              | RESISTOR; 0603; 4.7K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                         |
|     42 | R18       | DNP       |     0 | CRCW040210R0JN                                                                                             | VISHAY DALE                                              | 10                | RESISTOR; 0402; 10 Ω ; 5%; 200PPM; 0.063W; THICK FILM                                                                                                                          |

TOTAL

43

## MAX4146x EV Kit Schematics

<!-- image -->

MAX41464

## MAX4146x EV Kit PCB Layout Diagrams

MAX4146x  EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX41463

MAX4146x EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX4146x EV Kit PCB Layout Diagrams (continued)

MAX4146x EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX4146x EV Kit PCB Layout-Bottom Silk Layer

<!-- image -->

│

Evaluates: MAX41463

## Appendix I - Detailed Software, Firmware, and Driver Installation Procedures

## Download the MAX4146x EV kit Software Package

This software and firmware are available from the www.maximintegrated.com website.

- 1) Login to your MyMaxim account on the website
- 2) Click on the magnifying glass and search for the MAX41460 or similar part

<!-- image -->

<!-- image -->

│

## MAX4146x Evaluation Kit

Evaluates: MAX41463

MAX41464

- 3) Click on the 'Design Resources' link for the device or the EVKIT or click on the Design Resources tab on the product web page

<!-- image -->

│

## MAX4146x Evaluation Kit

- 4) Click on the appropriate software link:
- 5) Click the file link on the software landing page to download the MAX4146x EV kit package.

<!-- image -->

<!-- image -->

│

Evaluates: MAX41463

MAX41464

Evaluates: MAX41463

- 6) Review the Maxim Software License Agreement (SLA) and accept the terms by clicking on the Accept button.
- 7) Save the EVKIT distribution package to your desktop or other accessible location for later install.

<!-- image -->

│

## MAX4146x Evaluation Kit

## Install the MAX4146x EV kit GUI Software

This software and firmware are available from the www. maximintegrated.com website. Refer to the ' Download the  MAX4146x  EV  kit  Software  Package '  section  for information on obtaining the latest firmware from Maxim.

This  process  should  take  less  than  10  minutes  after downloading the software, firmware, and driver package.

- 1) Extract the Setup\_MAX4146X\_V1.0.0\_EVKit\_SW.zip to a working folder

<!-- image -->

<!-- image -->

## Evaluates: MAX41463

MAX41464

- 2) Double-Click the MAX4146xGUISetupV01.msi setup file and follow Setup Wizard prompts:
- a.  Click &lt;Next&gt;
- b.  Use the default Destination folder and click &lt;Next&gt;
- c.  Install the software by clicking the &lt;Install&gt; button
- d.  Click &lt;Finish&gt; when the setup process is complete

<!-- image -->

<!-- image -->

│

## MAX4146x Evaluation Kit

## Program the MAX32630FTHR Board with the MAX4146x Firmware

The FTHR board firmware comes pre-installed with every MAX4146x EV kit. This section describes how to install that firmware for development or update purposes.

This software and firmware are available from the www.maximintegrated.com website. Refer to the ' Download the MAX4146x EV kit Software Package ' section above for information on obtaining the latest firmware from Maxim.

- 1) Connect the MAX32630FTHR to the MAXREFDES100HDK or the MAX32625PICO
- a.  Use the fine pitch 10pin ribbon cable to connect the boards from the SWD (J3) header on the HDK to J4 on the MAX32630FTHR.
- 2) Connect the MAX32630FTHR to a power source
- a.  Use a micro-B USB cable to connect the MAX32630FTHR board to a suitable power source (no USB connectivity is required).  [The black USB cable in the photos.]  Alternatively, you can power the board from a charged battery as long as you remember to turn it on by pressing the power/reset button next to the battery connector. The board turns on automatically when powered from the USB supply.
- b.  The status LED on the FTHR board should be lit a steady red.
- 3) Connect the MAXREFDES100HDK/MAX32625PICO to a PC
- a.  Use a micro-B USB cable to connect the HDK to a PC, through the connector marked HDK. [The white USB cable in the photos.]
- b.  The status LED on the DAPLINK board will blink red when connecting.
- c.  After a few seconds of activity, the PC will recognize the DAPLINK as a standard USB drive.

MAXREFDES100HDK DAPLINK

<!-- image -->

MAX32625PICO DAPLINK

<!-- image -->

Evaluates: MAX41463

MAX41464

│

Evaluates: MAX41463

MAX41464

Windows 7/10 Example

<!-- image -->

- 4) Drag-and-drop or save the MAX4146x.bin program binary to the mbed or DAPLINK USB Drive
- a.  The FTHR board LED will shut off and the LED on the MAXREFDES100HDK / MAX32625PICO will slowly flash red as the FTHR board is being programmed.
- b.  Once the programming is complete, the DAPLINK USB Drive will disconnect from the PC and reconnect as a USB Drive again.
- c.  If the programming was successful, the contents of the DAPLINK USB Drive should include a DETAILS.TXT file. If an ERROR.TXT file exists on the drive, check that the FTHR board had power during the programming process and repeat steps 3 and 4.

<!-- image -->

│

## MAX4146x Evaluation Kit

- 5) To  ready  the  FTHR  board  for  use,  disconnect  the DAPLINK board (ribbon cable) and press the Reset Button on the FTHR board or disconnect the FTHR board from the USB power supply.
- a.  When the Reset button is pressed, the microcontroller will restart and the newly programmed application will begin to run or you can disconnect and reconnect the USB cable if using a PC for power.

The  latest  information  and  these  firmware  update  instructions can be found on the MAX32630FTHR board mBed web site: https://os.mbed.com/platforms/MAX32630FTHR/ or by visiting the mBed home page ( https://www.mbed. com/ ) and searching for ' MAX32630FTHR '.

If  you  do  not  have  an  mbed  account,  choose  'Signup', and  create  your  mbed  Account.  Otherwise,  log  in  with your normal username and password. This will give you access to the website, tools, libraries and documentation.

## From: https://os.mbed.com/teams/MaximIntegrated/ wiki/MAXREFDES100HDK

Note  that  the  MAXREFDES100HDK hardware supports multiple mbed platforms, and the firmware needs to match the platform you are using to enable all the features. The virtual  serial  port  and  CMSIS-DAP  debug  adapter  are universal, but the drag-n-drop programming must match the  target  platform  being  programmed.  To  update  the firmware you need to put the board in maintenance mode and copy the new firmware image to the board. To put the board in maintenance mode you need to hold the button while the board is being connected to the computer at the HDK connector. This will activate maintenance mode and the board will appear to the computer as a thumb drive named 'MAINTENANCE'. Drag and drop the new image onto the MAINTENANCE drive and the board will install the new firmware. When the update is complete, the disk will  disconnect  and  reappear  as  a  thumb  drive  named 'DAPLINK'. There are links to the firmware images below.

Please Note: The board can be sensitive to excess loading on the crystal which could prevent it from entering maintenance mode. We recommend holding the board by the edges when entering maintenance mode. It may be easier to hold the button while inserting the USB cable at the computer end, rather than trying to insert the cable into the micro USB connector.

## Evaluates: MAX41463 MAX41464

You must load the matching HDK image for the platform you are programming in order for drag-n-drop programming to work. For the MAX32630FTHR DAPLINK Image:

## https://os.mbed.com/media/uploads/switches/ max32620\_daplink\_max32630fthr.bin

## Update the MAX32630FTHR Board Driver

The  required  driver  is  available  from  the  www.maximintegrated.com  website.  Refer  to  the  ' Download  the MAX4146x EV kit Software Package '  section  above  for information on obtaining the latest driver from Maxim.

- 1) Connect the MAX32630FTHR to the PCs USB port.
- 2) In Device Manager, right click Other devices =&gt; 'CDC Device' or 'mbed Composite Device'.

<!-- image -->

│

Evaluates: MAX41463

- 3) Click 'Update Driver Software' then select Browse my computer for driver software.
- 4) Select 'Let me pick from a list of available drivers on my computer'.

<!-- image -->

<!-- image -->

Evaluates: MAX41463

- 5) On a Windows 10 operating system, click &lt;Have Disk…&gt; button. On a Windows 7 system, click the 'Show All Devices' check box.

Win 10: &lt;Have Disk…&gt; Button.

<!-- image -->

Win 7: 'Show All Devices' Checkbox.

<!-- image -->

Evaluates: MAX41463

- 6) On a Win 10 system, skip to step 7; on a Win 7 system select a generic Manufacturer type (usually enclosed in brackets) and then click the &lt;Have Disk…&gt; button.
- 7) Browse the path of driver folder and for Win 10 click &lt;OK&gt;; for Win 7 select 'maxim\_usb-uart\_adapter' then click &lt;Open&gt;.

Win 7: Manufacturer Selection.

<!-- image -->

Win 10: browse to the path and click &lt;OK&gt;.

<!-- image -->

Win 7: select driver, click &lt;Open&gt;.

<!-- image -->

## 8) Click Next.

<!-- image -->

- 9) Ignore the warnings and click  Install…

Win 10 and Win 7 Unverified Publisher Warning.

<!-- image -->

Win 7 'not recommended' Warning.

<!-- image -->

│

## MAX4146x Evaluation Kit

## Appendix II - Hardware Modifications

## I 2 C Pullup Resistors

To  accommodate  the  various  operating  modes  of  the MAX4146x products on one board, the shared digital pins have  many  interface  modes  over  which  they  operate. The DATAIN net is the most dynamic of these interfaces, serving three functions:

- 1) DATA input for transmission in preset mode for the MAX41461-MAX41464 parts.
- 2) SDA when MAX41461-MAX41464 parts are config -ured for I 2 C mode.
- 3) SDI or MOSI for SPI control of the MAX41460 and as DATA input when transmitting.

With preset parts (MAX41461-MAX41464) used in preset mode, the DATA pin must be held low during power-up of  the  device.  A  light  pulldown  resistor:  R16,  100kΩ  to ground satisfies this requirement.

To properly establish the open-drain topology of the twopin serial interface the user must have the SDA and SCL lines  pulled-up  to  the  supply  voltage.  The  resistor  footprints: R14 and R15 are provided on the MAX4146x EV kit for this purpose. By connecting JU5 (1-2 and 3-4) both lines will be pulled-up to the VDD supply.

These pullups should only be connected when the preset pins (SEL0 and SEL1) are both connected to ground, thus selecting the I2C interface mode of the MAX4146x.

It  should  be  noted  that  the  FTHR  board  also  has  footprints for I2C pullup resistors at R6 and R11. Both sets of

## Evaluates: MAX41463 MAX41464

pullup resistors (on the FTHR board and the MAX4146x EV kit) should not be populated simultaneously, otherwise incorrect  I2C  signal  levels  may  result.  Likewise,  if  other I2C slaves are added to the bus, only one set of pullup resistors should be used.

## Matching Network

For optimal performance of the transmitter PA, the antenna matching  network  should  be  tuned  to  the  operating frequency of the radio.

To change the tuning of the matching network, two inductors (L1 and L2) and two capacitors (C6 and C7) should be adjusted according to Table A2-1:

Figure A2-1. I 2 C Pullup Resistors.

<!-- image -->

Figure A2-2. Matching Network.

<!-- image -->

│

## MAX4146x Evaluation Kit

Evaluates: MAX41463

## Table A2-1. MAX4146x EV Kit Matching Network Component Values

*PA boost mode enabled through the SHDN register (0x05), PA\_BOOST bit [0]

| KIT                                             | fC                     | POUT   | BOOST*   | LOAD IMPEDANCE   | C7    | C8    | L2    | C6    | L1A   |
|-------------------------------------------------|------------------------|--------|----------|------------------|-------|-------|-------|-------|-------|
| MAX41461EVKIT-315                               | 315MHz                 | +13dBm | -        | 165Ω             | 100pF | 8.2pF | 51nH  | 4.7pF | 47nH  |
|                                                 | 315MHz High-Power      | +16dBm | 0        | 68Ω              | 100pF | 8.0pF | 27nH  | 8.0pF | 30nH  |
| MAX41462EVKIT-434 MAX41460EVKIT# MAX41464EVKIT# | 434MHz                 | +13dBm | -        | 180Ω             | 100pF | 8.2pF | 30nH  | 5.6pF | 24nH  |
|                                                 | 434MHz High-Power      | +16dBm | 0        | 57Ω              | 100pF | 8.0pF | 19nH  | 7.0pF | 24nH  |
| MAX41464EVKIT-868                               | 868MHz                 | +11dBm | -        | 190Ω             | 100pF | 4.7pF | 18nH  | 3.3pF | 5.6nH |
|                                                 | 868MHz High-Power      | +16dBm | 1        | 33Ω              | 100pF | 3.0pF | 9.1nH | 3.3pF | 3.0nH |
| MAX41463EVKIT-915                               | 915MHz                 | +11dBm | -        | 190Ω             | 100pF | 3.9pF | 12nH  | open  | 5.1nH |
| MAX41460EVKIT-915                               | 863-928MHz High-Power* | +16dBm | 1        | 34Ω              | 100pF | 10pF  | 5.6nH | 10pF  | 6.2nH |

## Additional Harmonic Filtering

Operating  the  MAX4146x  in  a  high-power  mode  may impact  ESTI  compliance  and  will  be  particularly  noticeable when using a device in the 434MHz band. The second harmonic of 434MHz (868MHz) falls within the strict Out Of Band (OOB) power limit of -36dBm. In this case an addition low-pass filter (LPF) may be beneficial to the radio designer. In combination with the high-power match at  434MHz  noted  above,  the  following  LPF  has  shown compliant operational results.

## Table A2-2. External LPF Component Values

Figure A2-3. External Filter

| EXTERNAL PART   |   QTY | DESCRIPTION                                              |
|-----------------|-------|----------------------------------------------------------|
| C1-C2           |     2 | 7.5pF ± 0.25pF Capacitor (0402) muRata GRM1555C1H7R5FZ01 |
| L1, L3          |     2 | 19nH ± 5% Inductor (0402) Coilcraft 0402CS-19NXJB        |
| L2              |     1 | 36nH ± 5% Inductor (0402) Coilcraft 0402CS-19NXJB        |

<!-- image -->

│

## MAX4146x Evaluation Kit

## PA Boost Mode Network Design

The switch-mode PA architecture inherently deals with voltage levels which are higher than the VDD supply.  When operating the PA in Boost Mode, even higher voltages can be presented to the PA node. If the user wishes to experiment with additional boost capabilities, the MAX4146x EV kit has a separate output network that allows the user to limit the PA voltage swing.

The optional R18/L1B network can be used to reduce the voltage swing at the PA node by inserting a resistor in series with the PA bias inductor. It is recommended that C9 and C10 be populated as shown, this helps 'fix' the sub-VDD supply below the supply voltage.

For additional information on switch-mode PAs similar to the one used in this transmitter, see Application Note 3589Power Amplifier Theory for High-Efficiency Low-Cost ISM-Band Transmitters .

Figure A2-4. Matching Network

<!-- image -->

## Pmod Header Interface

The MAX4146x EV kit provides a Pmod-compatible header footprint  providing  yet  another  built-in  interface  to  the transmitter.  The  JU4  connector  can  be  populated  with  a 6-pin, 100mil, right-angle header such as a SAMTEC TSW106-25-T-S-RA,  allowing  direct  connections  to  the  CSB, DATAIN, CLKOUT, SCLK/SDA, Ground, and VDD lines.

The Pmod interface can be used in combination with the Maxim  MAX32600MBED  kit  and  the  MAXREFDES72# Arduino  Uno  R3  to  PMOD  shield  adaptor.  When  using the Pmod interface to supply the MAX4146X EV kit with power,  make  sure  to  connect  the  JU1  jumper  between pins 2-3.

Evaluates: MAX41463

MAX41464

Figure A2-5. MAX4146x EV kit Pmod Interface

<!-- image -->

│

## MAX4146x Evaluation Kit

## Appendix III - Pinout Sheets

## MAX4146x EV Kit

300MHz-928MHz (G)FSK Transmitter with I 2 C Interface

<!-- image -->

│

Evaluates: MAX41463

MAX41464

## MAX4146x Evaluation Kit

Evaluates: MAX41463

MAX41464

<!-- image -->

<!-- image -->

│

## MAX4146x Evaluation Kit

## MAX32630FTHR

ARM Cortex-M4F microcontroller rapid development platform.

<!-- image -->

│

Evaluates: MAX41463

## MAX4146x Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 8/18            | Initial release                    | -               |
|                 1 | 9/18            | Updated Ordering Information table | 19              |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX41463

MAX41464