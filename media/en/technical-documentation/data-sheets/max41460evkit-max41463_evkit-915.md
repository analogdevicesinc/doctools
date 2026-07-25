<!-- lastmod 2022-08-04 -->
## MAX4146x Evaluation Kit

## General Description

The MAX4146x evaluation kit (EV kit) contains a single MAX4146x high output power VHF/UHF sub-GHz ISM/SRD transmitter,  designed  to  transmit  frequency-shift  keying (FSK), Gaussian FSK (GFSK), or amplitude-shift keying (ASK) data in the 286MHz to 960MHz frequency range.

The MAX41460 and the MAX41461-MAX41464 EV kits operate  in  conjunction  with  an  external  microcontroller (MCU) and graphical user interface (GUI) software running  on  a  computer.  The  MAX41460  uses  a  Serial Peripheral Interface (SPI) for internal register configura -tions while the MAX41461-MAX41464 can use the preset modes or an I 2 C interface for register programming and control.

The MAX41461, MAX41462, MAX41463, and MAX41464 EV kits are also designed to operate with a simple, onepin  data  interface,  alleviating  the  need  to  program  the part  for  nominal  operation,  or  other  high-level  system (PC with GUI software) having to configure the transmit -ter for operation. These parts allow to preset the operating frequencies by part selection and pin configurations. On the EV kit, selecting the frequency of operation is as simple as setting two jumpers.

The  EV  kit  includes  Windows ®   10-compatible  software that  provides  a  simple  GUI  for  configuration  of  all  the MAX4146x registers  through  the  SPI  or  I 2 C  ports.  The GUI also controls the on-board PMIC and can act as a data  generator  when  the  MAX32630FTHR  applications platform is used.

These EV kits are not FCC or ETSI certified, and are not intended for radiated testing.

Pmod is a trademark of Digilent Inc. Windows is a registered trademark of Microsoft Corporation.

Evaluates: MAX41460/1/2/3/4

## Features

- Evaluates the MAX4146x Family of Sub-1GHz ISM Transmitters
- Single Input Voltage Supply from 1.8V to 3.6V
- Direct Interface with a MAX32630FTHR Arm Microcontroller (MCU) Board
- Available Pmod TM  Hardware Interface
- Windows 10-Compatible Software
- On-Board SPI Control for the MAX41460 and optional I 2 C Control for the MAX41461-MAX41464
- GUI Controls for the MAX32630FTHR Board PMIC Operation from 1.8V to 3.3V
- Proven 2-Layer PCB Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 1. MAX4146x EV Kit Board

<!-- image -->

## MAX4146x Evaluation Kit

## Quick Start

## Required Equipment

- Included in the MAX4146x EV Kit
- MAX4146x EV kit board
-  MAX32630FTHR# kit
-  FTHR board
-  DAPLINK board
-  2x micro-B USB cables
- MAX4146x EV kit pin diagram card
- Windows PC* (Win-10), with one to two USB 2.0 ports
- Power supply †  capable of 1.8V to 3.6V, 100mA
- Serial data source †  and a simple means of connection (DATA test point and ground)
- Basic spectrum analyzer - Rohde and Schwarz ZVL3, Tektronix RSA306, or equivalent
- SubMiniature version A (SMA)/SMA cable as needed for connection to the spectrum analyzer

## Software and Drivers

The MAX4146x EV kit can be used in conjunction with the Arm ®  Cortex ® -M4F microcontroller MAX32630FTHR application platform or 'FTHR' board to provide power and control the device through a software application or GUI. When connected to the FTHR board, the MAX4146x EV kit  uses the following drivers and software components. See Appendix I for additional information on this installation process .

- MAX4146x Software Package/ISM Radios GUI

The  software,  firmware,  and  drivers  are  available from  the  Maxim  Integrated ®   website.  Log  in  to  the MyMaxim  account  on  the  website,  search  for  the MAX4146x part or EV kit, click the 'Design Tool and Model'  under  the  'Design  &amp;  Development'  tab,  and click the appropriate software link.

- mBed MAX32630FTHR and DAPLINK Interface System

The DAPLINK system is not required unless a firmware  update  to  the  FTHR  board  is  released.  The FTHR  board  included  in  the  MAX4146x  EV  kit  is preprogrammed for interfacing the  GUI  to  the  radio. The firmware programming process does not require additional  software  or  drivers.  It  uses  a  simple  USB drive, drag-and-drop file interface.

Evaluates: MAX41460/1/2/3/4

Connect the target PC to a local area network with access to  the  internet  for  automatic  download  and  updates  of some drivers.

## Install the MAX4146x EV Kit GUI Software

See Appendix I - Detailed Software, Firmware, and Driver Installation  Procedures  for  detailed  information  on  this installation process .

- 1) Download the ISM Radios GUI Software.
- 2) Double-click the 'ISMRadiosGUISetup .msi' setup file and follow the Setup Wizard prompts.
- a.  Click &lt;Next&gt; in the ISM Radios GUI Setup Wizard.
- b.  Use the default Destination Folder; click &lt;Next&gt; to continue.
- c.  Install the software by clicking &lt;Install&gt;.
- d.  Click  &lt;Finish&gt;  when  the  ISM  Radios  GUI  Setup Wizard installation process is complete.

## Table 1. ISM Radios GUI Installed Files

| FILE NAME                 | DESCRIPTION                                         |
|---------------------------|-----------------------------------------------------|
| ISMRadiosGUI.exe          | Application GUI                                     |
| MaximStyle.dll            | Supporting DLL file for software operation          |
| MAX4146X_Registers.xml**  | Register definition file for MAX4146x               |
| MAX4147X_Registers.xml**  | Register definition file for MAX4147x               |
| MAX1471_Registers.xml**   | Register definition file for MAX1471                |
| MAX7032_Registers.xml**   | Register definition file for MAX7032                |
| MAX4147X_QuickStart.xml** | Quick start configuration file for MAX4147x         |
| MAX1471_QuickStart.xml    | QuickstartconfigurationfileforMAX1471               |
| MAX7032_RXQuickStart.xml  | Quick start configuration file for MAX7032 receive  |
| MAX7032_TXQuickStart.xml  | Quick start configuration file for MAX7032 transmit |
| Firmware                  | Folder for current FWat time of GUI download        |

Arm and Cortex are registered trademarks of Arm Limited.

* Required for operation of the MAX4146x EV kit with the GUI software.

† Required when the FTHR board is not connected to the MAX4146x EV kit.

│

## Update the MAX32630FTHR Board Driver on the Host PC

No changes are needed for the FTHR board when first receiving  a  MAX4146x  EV  kit  -  the  FTHR  board  is preloaded  with  the  required  firmware.  Updates  to  the driver  on  the  host  PC  may  be  necessary  depending  on the  operating  system  and  if  the  PC  has  access  to  the internet  when  first  connecting  to  the  FTHR  board. See Appendix I for detailed information on how to update the FTHR board firmware and the driver for the FTHR board/ USB interface .

## Table 2. MAX4146x EV Kit Jumper Settings

| JUMPERS   | POSITION        | EV KIT FUNCTION                                 | EV KIT FUNCTION                                 |
|-----------|-----------------|-------------------------------------------------|-------------------------------------------------|
| JU1       | 1 to 2*         | Power from L3OUT (FTHR board)                   | Power from L3OUT (FTHR board)                   |
| JU1       | 2 to 3          | Power from Pmod interface ( VDD , pin 6 of JU4) | Power from Pmod interface ( VDD , pin 6 of JU4) |
| JU2       | 1 to 2          | SEL1 to VDD                                     | SEL1 - See Table 3a for preset modes            |
| JU2       | 2 to 3 †        | SEL1 to GND                                     | SEL1 - See Table 3a for preset modes            |
| JU2       | Not Installed ‡ | SEL1 open                                       | SEL1 - See Table 3a for preset modes            |
| JU3       | 1 to 2          | SEL0 to VDD                                     | SEL0 - See Table 3a for present modes           |
| JU3       | 2 to 3 †        | SEL0 to GND                                     | SEL0 - See Table 3a for present modes           |
| JU3       | Not Installed ‡ | SEL0 open                                       | SEL0 - See Table 3a for present modes           |
| JU5       | 1 to 2 †        | I 2 C pullup resistor R14 connected to VDD      | I 2 C pullup resistor R14 connected to VDD      |
| JU5       | 3 to 4 †        | I 2 C pullup resistor R15 connected to VDD      | I 2 C pullup resistor R15 connected to VDD      |
| JU5       | Not Installed*  | Pullup resistors disconnected                   | Pullup resistors disconnected                   |

Three  operation  options  are  supported  with  the  EV  Kit. They are:

- I. FTHR Board Operation for SPI and I 2 C Interface.
- II. FTHR Board Operation for Preset Interface
- III. Preset Interface - without FTHR Board

## Evaluates: MAX41460/1/2/3/4

## FTHR Board operation - SPI and I 2 C Interface

Set up the MAX4146x EV kit and FTHR board hardware MCU/GUI operation.

1. Verify all jumpers on the MAX4146x EV kit board are in the default position ; see Table 2.
- a. For  the  MAX41460  EV  kit,  JU2,  JU3,  and  JU5 should not be installed.
- b. For  MAX41461-MAX41464  EV  kits,  install  both JU2 and JU3 with jumpers from pins 2 to 3 (SEL0 and  SEL1  connected  to  GND);  JU5  must  be installed with jumpers from pins 1 to 2 and 3 to 4.
2. Connect the MAX4146x EV kit to the FTHR board ; be sure the USB connector is oriented on the opposite side of the SMA connector (Figure 3) .

Figure 2. MAX4146x EV Kit Jumpers

<!-- image -->

Figure 3. MAX4146x EV Kit Orientation to FTHR Board

<!-- image -->

│

## MAX4146x Evaluation Kit

3. Connect the FTHR Board to the PC using a microB USB cable and observe a 'heartbeat' on the FTHR board's red LED.
4. Connect  the  RF\_OUT  to  a  spectrum  analyzer using a low-loss SMA cable. These EV kits are not intended for radiated testing.
- a.  Set the 'Center Frequency' to the target frequency of interest.
- b.  Set  the  'Span'  to  1%  of  the  'Center  Frequency' (FCC standard test setting), Resolution Bandwidth (RBW) to 1kHz, and Video Bandwidth (VBW) to 3kHz.
- c.  Set the trace to 'Max Hold'.

## 5. Start the ISM Radios GUI.

- a.  An ISM Radios GUI splash screen is displayed.
- i. To disable future displays of the splash screen, click the Disable check box.
- ii.  To continue to the GUI software, click &lt;OK&gt;.
- b.  The pop-up window asks to select a device from the 'Device' menu to get started. Click &lt;OK&gt;. Un -der the Device menu option, select MAX4146x-Tx. The GUI tabs populate in the window (Figure 4).
- c.  The expected COM port is displayed if the EV kit is connected before starting the GUI. Select the appropriate COM port from the dropdown and click &lt;Con -nect&gt;. &lt;Connect&gt; changes to &lt;Disconnect&gt;.
- d.  Confirm  the  firmware  status  bar  changes  from 'ISM Radios x.x.x' to 'ISM Radios 6.0.0' or similar, the  software  LED  is  lit  green,  and  port  status  is noted as 'Connected'.
- e.  Enter a supply level in the 'Voltage' text box and click &lt;Set&gt;; for example, enter '3.0' for a 3.0V supply and click &lt;Set&gt;.
- f. Select the appropriate part in the 'Chip' dropdown and click &lt;Set&gt;.
9. g Select  the  'Crystal  Frequency'  (16.0MHz  is  default) and click &lt;Set&gt;.
- h.  Select a desired form of modulation in the Modulation dropdown and click &lt;Set&gt;.
- i. Select a PA output power setting ('Power Level 1' is the lowest setting, 'Power Level 8' results in the highest output power) and click &lt;Set&gt;.
- j. Enter the desired operating frequency.
- i. Enter a value between 250MHz and 950MHz in the 'Frequency' text box; set the Frequency to match the EV kit tuning (as noted on the hardware).
- ii.  Click &lt;Set&gt;.
- k.  If  running  in  FSK  mode,  select  the  'FSKSHAPE' check box, set a 'Frequency Deviation' (in ± kHz), and click &lt;Set&gt;.
- l. For  4-wire  SPI  operation  (using  the  MAX41460, this is needed to read back register values):
- i. Click the '0A CFG6' register.
- ii.  Click the 'FOURWIRE1' 0-bit box.

## Evaluates: MAX41460/1/2/3/4

│

## Evaluates: MAX41460/1/2/3/4

Figure 4. ISM Radios GUI Software

<!-- image -->

Figure 5. 4-Wire SPI Setting

<!-- image -->

6. Generate a transmission.
- a.  In  the  'Data  Control'  block,  enter  a  Manchester Bitrate of interest and click &lt;Set&gt;.
- b.  Enter 0xAA in the 'Messages' text box in the 'Data Control' block.
- c.  Check 'Continuous'.
- d.  Click &lt;Send Data&gt;. It changes to &lt;Stop&gt;.
7. Observe the output on the spectrum analyzer.

## FTHR Board Operation - Preset Interface

Set  up  and  connect  the  MAX41461-MAX41464  EV  kit hardware to the FTHR board for a 'Data' signal source.

1. Verify all jumpers on the MAX4146x EV kit board are  in  the  default  position ;  see  Table  2. Set  the jumpers in Table 3a to the output frequency for which the EV kit is tuned (as noted on the hardware) .
2. Connect the MAX4146x EV kit to the FTHR board ; be sure the USB connector is oriented on the opposite side of the SMA connector (Figure 3).
3. Connect the FTHR Board to the PC using a microB USB cable and observe a 'heartbeat' on the FTHR board's red LED.
4. Connect  the  RF\_OUT  to  a  spectrum  analyzer using a low-loss SMA cable. These EV kits are not intended for radiated testing.
- a.  Set the 'Center Frequency' to the target frequency of interest.

## Evaluates: MAX41460/1/2/3/4

- b.  Set  the  'Span'  to  1%  of  the  'Center  Frequency', Resolution Bandwidth (RBW) to 1kHz, and Video Bandwidth (VBS) to 3kHz.
- c.  Set the trace to 'Max Hold'.
5. Run the ISM Radios GUI.
- a.  Select the appropriate COM port and click &lt;Con -nect&gt;.
- b.  Confirm  the  firmware  status  bar  changes  from 'ISM Radios x.x.x' to 'ISM Radios 6.0.0' or similar, the  software  LED  is  lit  green,  and  port  status  is noted as 'Connected'.
- c.  Enter  a  supply  level  in  the  'Voltage'  text  box  in units of V and click &lt;Set&gt;; for example, enter '3.0' for a 3.0V supply.
- d.  Select the appropriate part in the 'Chip' dropdown box and click &lt;Set&gt;.
6. Generate a data stream.
- a.  In the 'Data Control' block, check 'Preset Mode'.
- b.  Select the Manchester Bitrate of interest and click &lt;Set&gt;.
- c.  Enter 0xAA in the 'Messages' text box.
- d.  Check 'Continuous'.
- e.  Click &lt;Send Data&gt;. It changes to &lt;Stop&gt;.
7. Observe the output on the spectrum analyzer.

## Preset Interface - Without FTHR Board

## Set up and Connect the MAX4146x EV Kit Hardware for Standalone Operation

1. Verify all jumpers on the MAX4146x EV kit board are  in  the  default  position ;  see  Table  3a.  Set the jumpers  from Table  3a to  the  output  frequency  for which the EV kit is tuned (as noted on the hardware) .
2. Connect a 3.0V/100mA supply to the MAX4146x EV kit at the VDD ( Red ) and GND ( Black ) points.
- a. The JU1 setting is not applicable (if the EV kit is still connected to the FTHR board, JU1 must be 'not installed' ).
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

3. Connect  the  RF\_OUT  to  a  spectrum  analyzer using a low-loss SMA cable and configure the equipment. This EV kit is not intended for radiated testing.
- a. Set the 'Center Frequency' to the same value as with the jumpers in step 1.
- b. Set  the  'Span'  to  1%  of  the  'Center  Frequency', Resolution Bandwidth (RBW) to 1kHz, and Video Bandwidth (VBS) to 3kHz.
- c. Set the trace to 'Max Hold'.
4. Connect a digital data signal to the DATAIN Test Point ( Yellow ) and GND ( Black ).
- a. Be sure the data levels match the power supply level in step 2.
- b. Begin streaming data.
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

│

## Table 4. MAX4146x EV Kit Test Points

| NAME       | COLOR   | EV KIT FUNCTION                               |
|------------|---------|-----------------------------------------------|
| VDD        | Red     | 1.8V to 3.6V power supply pin                 |
| GND        | Black   | Ground                                        |
| DATAIN/SDI | Yellow  | Tx data or SDI (MAX41460 only) interface      |
| CLKOUT/SDO | Green   | Clock output or SDO (MAX41460 only) interface |

## Detailed Description

## Detailed Description of Hardware MAX4146x EV Kit Printed Circuit Board

The  MAX4146x  EV  kit  PCB  is  manufactured  on  a 2-layer, 1oz copper, FR4  dielectric stack-up  PCB. The board is designed to accommodate all five versions of the ISM transmitter: MAX41460, MAX41461, MAX41462,  MAX41463,  and  MAX41464.  Layer  1  is primarily designed to keep the RF signals on one side of the board with short traces, small matching components, and low parasitics. Layer 2 is targeted to be a continuous ground plane, wherever possible.

## Control Interface

There  are  three  forms  of  interfacing  to  the  MAX4146x device depending on the part installed: 3-wire or 4-wire SPI, 'preset' or pin-configured, and the special case of an I 2 C  control  interface.  The  MAX41460  device  requires  a 3-wire or 4-wire SPI connection, and the MAX4146x EV kit is designed to use the provided FTHR board interface through the H1/H2 headers. Other MCU connections can be made through the JU4 Pmod header (see the Pmod Header Interface section).

## Power

The MAX4146x EV kit board can be powered directly from the  FTHR  board  PMIC  through  the  H1  header,  directly from the supply test points, or through the user-installed Pmod  header.  A  single  +1.8V  to  +3.6V,  100mA  power supply can be connected to the board using the two wire loops  (marked VDD and  GND).  Jumper  JU1  selects the  source of power when not using the direct connection test points: from the L3OUT of the FTHR board or PVIO of the Pmod connector.

## Data Interface

The  MAX4146x  EV  kit  comes  preconfigured  to  directly connect the FTHR board through the H1/H2 headers to the  SPI  and  I 2 C  interfaces.  The  GUI  determines  which bus is used to communicate to the device based on the 'Chip' selected in the software.

## MAX4146x Evaluation Kit

## Clock Output

When sending data to a MAX41461-MAX41464 in preset mode, the CLKOUT pin drives an 800kHz clock signal. This clock output signal can be monitored with the Green CLKOUT test point. Note the output from the MAX41461MAX41464 is not designed to drive a high capacitive load and may cause noticeable ±800kHz spurs in the spectrum when the CLKOUT test point is connected to a capacitive load  of  more  than  10pF. A  typical,  low-end  oscilloscope probe may be enough to cause these spurs.

## I 2 C Pullups

Resistors R14 and R15 along with jumper JU5 are provided as on-board pullups required for proper I 2 C interfacing and  termination.  When  using  a  MAX41461-MAX41464 device in preset mode, the DATAIN line should be held low at power-up for proper configuration. Therefore, the R16, 100kΩ is the default connection. When used in I 2 C mode, the DATAIN pin is used instead as the I 2 C, SDA line. Likewise, the CLKOUT pin is used as the I 2 C SCL input. These pins are open-collector (or open-drain) outputs from a the MCU and need to have pullup resistors to operate  properly.  Two  4.7kΩ  resistors  are  prepopulated on  the  MAX4146x  EV  kit  and  can  be  connected  to  the positive supply by shorting the JU5 jumper 1 to 2 and 3 to 4. This should only be connected when the preset pins (SEL0 and SEL1) are both connected to ground, selecting  the  I 2 C  interface  mode  of  the  MAX4146x.  Note that the  FTHR  board  also  has  footprints  for  I 2 C  pullup  resis-

## Evaluates: MAX41460/1/2/3/4

tors  at  R6  and  R11.  Both  sets  of  pullup  resistors  (on the  FTHR  board  and  MAX4146x  EV  kit)  should  not  be populated simultaneously, otherwise incorrect I 2 C signal levels may result. See Appendix II -Hardware Modifications for detailed information on the EV kit hardware modifications.

## Data Indicator

The  EV  kit  layout  has  the  ability  to  connect  a  surface-mount  LED  (D1,  0603)  and  resistor  (R9,  0603, 470Ω recommended) to provide visual feed -back  of  the  activity  on  the  DATAIN  line.  Populating this LED and resistor causes additional power consumption  and  is  not  included  by  default  in  the  EV  kit assembly.

## Pmod Interface

The  MAX4146x  EV  kit  provides  a  Pmod-compatible header  footprint  to  interface  with  the  transmitter.  The JU4  connector  can  be  populated  with  a  6-pin,  100mil, right-angle  header  allowing  direct  connections  to  the CSB,  DATAIN,  CLKOUT,  SCLK/SDA,  ground,  and VDD lines,  making  it  capable  with  either  SPI  or  I 2 C  Pmod interfacing. Populating this header allows control from the MAX32600MBED kit and the MAXREFDES72# Arduino  Uno  R3  to  the  Pmod  shield  adaptor.  When using  the  Pmod interface  to  supply  the  MAX4146x EV  kit with power,  connect  the  JU1  jumper  between pins 2 to 3. See Appendix  II  -  Hardware  Modifications for detailed infor-mation on the EV kit hardware modifications.

Figure 6. 800kHz Spurs from Excessive CLKOUT Loading

<!-- image -->

│

## MAX4146x Evaluation Kit

## Detailed Description of Software

The ISM Radios GUI software is designed to control the MAX4146x EV kit board and MAX32630FTHR board. The software includes USB controls that provide SPI, I 2 C, or data-only communication to the MAX4146X through the FTHR board interface.

## Comport

The COM Port section provides a dropdown selection of serial communication ports available for connection to a MAX4146x EV kit through a FTHR board. When the GUI is run after connecting the EV kit hardware, the dropdown should default to the proper COM Port. If the hardware is  connected  to  the  computer  after  the  GUI  is  started, click  &lt;Refresh&gt;  to  scan  for  compatible  ports.  Once  the appropriate COM Port is selected in the dropdown, click &lt;Connect&gt;.

After properly connecting to the COM Port with the FTHR board, the GUI displays the revision of the FTHR board firmware detected, a Green 'LED', and 'Connected' in the status bar at the bottom of the GUI window.

## Voltage (1.8V to 3.3V)

The  'Voltage'  section  provides  a  user-adjustable  power supply  from  the  FTHR  board  MAX14690N  power  management IC (PMIC) to the MAX4146x EV kit and can be used as the primary VDD supply. The PMIC, L3OUT can be set to voltages between 1.8V to 3.3V and it applies to the level of the logic interface lines as well as the device supply.

## Evaluates: MAX41460/1/2/3/4

To program the supply voltage, enter a valid level in the 'Voltage' text box and click &lt;Set&gt;. The default value of the L3OUT voltage is 3.3V.

When  using  the  FTHR  board  interface  to  supply  the MAX4146x EV kit  with  power,  connect  the  JU1  jumper between pins 1 to 2.

## Chip

Set  the  'Chip'  section  to  properly  select  which  type  of MAX4146x EV kit is  attached  to  the  FTHR  board.  This selection configures the GUI software to interface through the  SPI  pins  (when  MAX41460  is  selected),  through the  I 2 C  pins,  or  provide  a  simple  data  stream  to  the device  (when  MAX41461,  MAX41462,  MAX41463,  or MAX41464 are selected).

To select the part, chose the appropriate part in the 'Chip' dropdown and click &lt;Set&gt;.

## Crystal Frequency (12.8MHz to 19.2MHz)

The 'Crystal  Frequency'  section  indicates  the  frequency of the crystal installed on the MAX4146x EV kit (f XTAL ). All  EV  kits  come  prepopulated  with  a  16.000MHz  crystal  and  the  default  setting  in  the  GUI  is  assumed  to  be 16.0MHz. This value can be adjusted between 12.8MHz and 19.2MHz, and is used when programming frequencybased registers dependent on the f XTAL  value.

To  configure  the  reference  oscillator, enter a valid frequency (in MHz) in the 'Crystal Frequency' text box and click &lt;Set&gt;.

Figure 7. ISM Radios GUI Configuration

<!-- image -->

│

## MAX4146x Evaluation Kit

## Modulation

The Modulation section quickly sets the form of modulation for  the  MAX4146x  device.  When  a  MAX41461  or  MAX41462 device is selected, only ASK modulation is available in the dropdown.  Similarly,  when  MAX41463  and  MAX41464 are selected, only FSK is available in the dropdown. This section  directly  programs  the  MODMODE  bit  [0]  in  the CFG1 register (0x00).

To  select  the  modulation,  chose  ASK  or  FSK  in  the 'Modulation' dropdown and click &lt;Set&gt;.

## PA Power Setting

The 'PA Power Setting' section quickly sets the power level of the PA. This section directly programs  the  PAPWR  bits  [2:0]  in  the  PA1  register (0x06). The maximum output power is obtained by selecting  'Power  Level  8'  or  111b  in  the  register.  The  default minimum output power for the MAX4146x when interfacing through I 2 C and SPI is 'Power Level 1' or 000b in the register. Each bit can adjust the PA output by approximately 2.5dB.

To select the output power level, choose the appropriate 'Power  Level'  in  the  'PA  Power  Setting'  dropdown  and click &lt;Set&gt;.

The  power  level  can  also  be  set  manually  through  the Direct Register Access Section section by clicking the 06 PA1  (0x06)  register,  clicking  the  PAPWR[2:0]  field,  and typing in a binary value between 000b and 111b.

## Frequency

The 'Frequency' section sets the carrier or 'center' frequency of the MAX4146x (f C  or f LO ). The value entered  in  this  section  is  used  to  calculate  the  3-word fractional-N  value  programmed  into  the  PLL3  (0x0B), PLL4 (0x0C), and PLL5 (0x0D) registers. The GUI calculates  the  values  for  the  PLL  registers  using  the  'Crystal Frequency' and following formula:

## Equation 1:

<!-- formula-not-decoded -->

## Evaluates: MAX41460/1/2/3/4

To program the carrier, enter a valid frequency (in MHz) in the 'Frequency' text box and click &lt;Set&gt;.

## Frequency Deviation

The 'Frequency Deviation' section sets the FSK deviation values (Δf) and Gaussian shaping bit. The value entered in this section is used to calculate the 7-bit content for the PLL6 (0x0E) register. This  calculation  also  uses  the  value  entered  for  the Crystal  Frequency  (12.8MHz  to  19.2MHz) section.  The formula for setting the register value is:

## Equation 2:

<!-- formula-not-decoded -->

To program the Δf, enter a valid frequency (in kHz) in the 'Frequency Deviation' text box and click &lt;Set&gt;.

The  GUI  software  adjusts  the  carrier  frequency  based on ½ of this Δf value to maintain the center of the FSK signal.  This  places  f SPACE   at  f C -  Δf/2  and  f MARK  at fC +  Δf/2.  If  the  center  frequency  is  adjusted  and  pro -grammed  after  setting  the  'Frequency  Deviation',  then f SPACE = f C  and f MARK  = f C + Δf. To reset the center of the  FSK  signal  to  f C ,  click  'Frequency  Deviation'  &lt;Set&gt; again.

## Data Control Section

This portion of the GUI software provides a flexible tool to generate data for the SPI, I 2 C, or preset parts, all from a single interface.

## Preset Mode

When  using  a  MAX41461-MAX41464  EV  kit  in  preset mode, the GUI can provide simple Manchester-encoded data  directly  to  the  DATAIN  pin  of  a  connected  device. Select the &lt;Preset Mode&gt; check box to generate this data without any other interfacing. All the following settings are then used to format a data stream to send directly to the DATAIN pin on the attached MAX4146x EV kit.

│

## Bitrate

This  is  the  data  rate  in  kbps  for  Manchester-encoded data,  given  the  default  Manchester  Encoding  selection. If  desired,  this  box  can  be  unchecked  for  an  NRZ  data stream. Enter a value in the text box and click &lt;Set&gt; to configure the 'Data Control'.

When  communicating  with  a  MAX41461-MAX41464  in I 2 C mode, this bitrate value is used to program the Baud Clock  values  BCLK\_POSTDIV[2:0]  in  the  CFG2  (0x01) register and BCLK\_REDIV[7:0] in the CFG3 (0x02) regis -ter. According to the formula:

## Equation 3:

<!-- formula-not-decoded -->

Equation 4:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Using  the  following  equation  and  the  default  crystal frequency, the BCLK\_PREDIV can be calculated from the target baud rate using ranges set by BCLK\_POSTDIV:

## Equation 5:

<!-- formula-not-decoded -->

## Equation 5a:

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

## Evaluates: MAX41460/1/2/3/4

## Equation 5b:

<!-- formula-not-decoded -->

When using devices in I 2 C mode, this baud rate must not exceed the rate at which data is being written to the Tx Data FIFO. Otherwise, the buffer is emptied (underflow) with the  first  packet  transfer  and  the  MAX41461-MAX41464 exits the transmission mode. Generally, that baud rate is 8/9 of the SCL rate, which for the FTHR board interface f SCL  =  400kHz.  Therefore,  the  maximum  baud  rate  of 200kBd is obtainable using the EV kit setup in I 2 C mode.

## Continuous Transmission

Selecting  this  check  box  configures  the  'Data  Control' interface  so  the  message  or  data  sequence  repeats until the transmission is interrupted. For example:  when  a  '0x00'  Manchester-encoded  message  is sent  with  &lt;Continuous&gt;  unchecked,  the  sequence  of 1010101010101010  bits  is  transmitted  a  single  time. When  the  &lt;Continuous&gt;  is  checked,  the  &lt;Send  Data&gt; process continuously sends a repeating sequence of 101 01010101010101010101010101010…  bits,  emulating a square-wave data pattern.

## Messages Text Block and Message File

The 'Messages' text block contains a hexadecimal-encoded  data  string  to  be  transmitted  with  the  FTHR  board over  the  data  interface.  This  message  is  formatted  differently  depending  on  the  'Chip'  selected  and  mode of  operation.  For  example,  when  in  preset  mode,  the data  is  streamed  directly  to  the  DATAIN  pin  of  the MAX4146x  EV  kit.  When  in  I 2 C  mode,  the  message  is packetized  and  formatted  across  the  I 2 C  registers  for transmission  at  the  baud  rate  set  with  the  'Manchester Bitrate' control noted previously. Finally, when used with a

## MAX4146x Evaluation Kit

MAX41460 SPI device, the CSB and DATA pins are used to transmit the message at the bitrate noted previously.

Tools are provided to quickly load complex test packets generated  outside  of  the  GUI.  The  &lt;Clear&gt;,  &lt;Save&gt;, and  &lt;Load&gt;  buttons  help  control  the  contents  of  the 'Messages' text block.

By clicking &lt;Clear&gt;, any contents in the 'Messages' text block are deleted.

Clicking  &lt;Save&gt;  stores  the  contents  of  the  'Messages' block to a file. A 'Save As' explorer window opens with a prompt to save a .txt file.

Clicking the &lt;Load&gt; button pops up an 'Open' window and prompts for a .txt file to load in the 'Messages' text block.

## Register Configuration

When the  device  is  configured  as  needed,  click  &lt;Save Config&gt; to save the current MAX4146x register values to a file for use later. This opens a 'Save As' explorer window with a prompt to save an .xml file.

To  load  a  previously  saved  configuration,  click  &lt;Load Config&gt;  and  point  to  the  chosen  configuration  in  the explorer window.

## Tool History Section

This  portion  of  the  GUI  contains  a  'Log  File'  text  block, which is used to record activity within the GUI.

## Log File

For every &lt;Set&gt;, connection effort, or register programming action,  the  GUI  activity  is  logged  in  this  text  block. Add notes and make edits to the content of the 'Log File" text block.

Clicking  &lt;Clear  Log&gt;  deletes  the  contents  in  the  text block.

Clicking &lt;Save Log&gt; opens a 'Save As' explorer window with a prompt to save a .txt file.

## Direct Register Access Section

The GUI software allows direct access to all the available registers when interfacing with both the MAX41460 SPI-

Figure 8. Tool History.

<!-- image -->

## Evaluates: MAX41460/1/2/3/4

based  device  or  the  MAX41461-MAX41464  devices  in I 2 C mode.

## Register List

On the  left-hand  side  of  the  'Register  Interface'  section is  a  list  of  the  device's  internal  registers.  Each  register address/name (e.g., '00 CFG1') acts as an active control and by clicking on an individual register, the contents are presented in the Register Value section.

## Register Value

The  right-hand  side  of  the  'Register  Interface'  section displays  the  content  of  the  selected  device  register.  At the top of the block, a header displays the name of the selected  register  (e.g.,  'CFG1'),  the  'Index'  or  address of  the  register  in  both  decimal  ('0d')  and  hexadecimal ('0000h') form.

The body of this section shows a table with the names of the individual bits for the selected 8b register along with the current value programmed into each bit or bit group.

The remaining portion of the body shows a table with the bit indexes, type of register (write/read), name of the bit or bit group, Reset value, and a description of the bit or bit group.

## Read and Write Registers

Most registers in the MAX4146x are both readable and writable.  The  read-only  registers  are  I2C4  (0x14),  I2C5 (0x15), I2C6 (0x16), ID1 (0x1B), ID2 (0x1C), and STATUS (0x1D). Writing values to a register can be accomplished by selecting the register of interest, typing a Hex or Dec value in the 'Value' text box, and clicking &lt;Write Register X&gt;  (where  X  is  the  decimal  address  of  the  register). Reading the register content is similar: select the register of interest and click &lt;Read Register X&gt;.

## Register Bit Field

Individual bits or bit groups can be programmed without having to enter the full value of the register. To program a bit or group of bits, first select the register of interest (PA1, 0x06 for example), next select the bit or bit group to be changed (PAPWR[2:0] as an example), enter the binary code for the new value (111b), and hit &lt;Enter&gt; - the new value is automatically reflected in the 'Value' text box and is written to the device.

## Miscellaneous Software Information

The  tool  bar  at  the  top  of  the  GUI  software  provides  a couple of options.

│

## File and Help Menu

Selecting  File  &gt;  Exit  from  the  toolbar  closes  the  GUI program. This has the same effect as clicking &lt;X&gt; in the upper-right corner of the GUI software.

Selecting  Help  &gt;  About  from  the  toolbar  displays  the splash screen. This window shows the name of the software, the revision number, a copyright notice, a link to the Maxim Integrated ®  website, a link to the support website, and a check box to enable or disable the splash screen during startup. Click &lt;OK&gt; to close the 'About' window.

## Table 6. VCO Divider Settings

| VCO              | LO MODE SETTING   | FREQUENCYRANGE (MHz)   | LODIV[1:0] SETTING   |
|------------------|-------------------|------------------------|----------------------|
| Ring Oscillator* | 0b                | 286 to 960             | 00b                  |
| LC VCO           | 1b                | 286 to 320             | 11b                  |
| LC VCO           | 1b                | 425 to 480             | 10b                  |
| LC VCO           | 1b                | 860 to 960             | 01b                  |

## Ordering Information

| PART              | TYPE                             |
|-------------------|----------------------------------|
| MAX41460EVKIT#    | SPI Interface at 434MHz          |
| MAX41460EVKIT-915 | SPI Interface at 915MHz          |
| MAX41461EVKIT-315 | Preset/I 2 C Interface at 315MHz |
| MAX41462EVKIT-434 | Preset/I 2 C Interface at 434MHz |
| MAX41463EVKIT-915 | Preset/I 2 C Interface at 915MHz |
| MAX41464EVKIT-868 | Preset/I 2 C                     |
| MAX41464EVKIT#    | Preset/I 2 C at 434MHz           |

#Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## .xml File

The  register  descriptions  for  the  ISM  Radios  GUI  are available in an .xml file, which is stored with the executable  in  the  application  directory.  The  default  file  loaded when the GUI is initialized is RegisterSet8.XML. This file can be edited as needed to adjust the names of fields, provide  simple  indicators  to  the  GUI  user,  or  allow flexible updates to the GUI interface in the future.

## Evaluates: MAX41460/1/2/3/4

│

## MAX4146x EV Kit Component List

| PART         |   QTY | DESCRIPTION                                                |
|--------------|-------|------------------------------------------------------------|
| C1, C2       |     2 | 5pF ± 0.25pF Capacitor (01005) muRata GRM0225C1H5R0CA03    |
| C3           |     1 | 0.47µF ± 10% Capacitor (0603) muRata GRM188R71C474K        |
| C4           |     1 | 0.01µF ± 5% Capacitor (0603) muRata GRM1885C1H103JA01      |
| C5           |     1 | 220pF ± 5% Capacitor (0603) muRata GRM1885C1H221JA01       |
| C6           |     1 | *                                                          |
| C7           |     1 | 100pF ± 5% Capacitor (0402) muRata GRM1555C1H101JA01       |
| C8           |     1 | *                                                          |
| C9, C10      |     1 | DNP                                                        |
| CLKOUT       |     1 | Test Point Keystone 5126                                   |
| D1           |     1 | DNP                                                        |
| DATAIN       |     1 | Test Point Keystone 5014                                   |
| GND, GND1    |     2 | Test Point Keystone 5011                                   |
| H1           |     1 | Connector Male Through Hole Sullins PRPC016SFAN-RC         |
| H2           |     1 | Connector Male Through Hole Sullins PRPC012SFAN-RC         |
| JU1-JU3, JU5 |     3 | Connectors Male Through Hole Sullins PEC03SAAN / PEC02SAAN |

* See

Table A2-1 .

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

Note: Indicate using the MAX4146x when contacting these component suppliers.

Evaluates: MAX41460/1/2/3/4

| PART            |   QTY | DESCRIPTION                                         |
|-----------------|-------|-----------------------------------------------------|
| JU4             |     1 | DNP                                                 |
| L1A             |     1 | *                                                   |
| L1B             |     1 | DNP                                                 |
| L2              |     1 | *                                                   |
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

## MAX4146x EV Kit Schematic

<!-- image -->

| SPI Interface toFTHR and Description   | SELpins to jumpers,Preset/12C jumperSelectionand12C PMOD                       | InterfacetoFTHRandPMOD PMODandLEDarenot   |
|----------------------------------------|--------------------------------------------------------------------------------|-------------------------------------------|
| DNP:JU2,JU3,R6,R7,R8 BOM               | Install:JU5 DNP:JU5 Install:R1,R2,R3,R4,5 DNP:R1,R2,R3, Install:JU2,JU3, R4,R5 | Short:1-2,3-4 DNP:R9,D1,JU4 R6,R7,R8      |
| MAX41460 Product                       | MAX41461-64(Preset)                                                            | MAX41461-64(12C)                          |

## MAX4146x EV Kit PCB Layout Diagrams

MAX4146x EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX4146x EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX4146x EV Kit PCB Layout Diagrams (continued)

MAX4146x EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX4146x EV Kit PCB Layout-Bottom Silk Layer

<!-- image -->

│

## Appendix I - Detailed Software, Firmware, and Driver Installation Procedures

## Download the ISM Radios GUI Software Package

This software and firmware are available from the Maxim Integated ®  website.

- 1) Log in to the MyMaxim account on the website.
- 2) Click the magnifying glass and search for the MAX41460 or similar part .

<!-- image -->

<!-- image -->

│

## 3) Click the main page for the device or EV kit.

<!-- image -->

## Evaluates: MAX41460/1/2/3/4

## MAX4146x Evaluation Kit

Evaluates: MAX41460/1/2/3/4

- 4) Click the 'Design &amp; Development' link. Under the 'Design &amp; Development' section, click the 'Design Tool &amp; Simulation' page. Click the &lt;Download&gt; button to select the appropriate software link.
- 5) Click the file link on the software landing page to download the ISM Radios GUI package.

<!-- image -->

<!-- image -->

│

## Evaluates: MAX41460/1/2/3/4

- 6) If not already logged in, log in to the MyMaxim account. Review the Maxim Software License Agreement (SLA) and accept the terms by clicking the &lt;Download&gt; button.
- 7) Save the EV kit distribution package to the desktop or other accessible location for later install.

<!-- image -->

## MAX4146x Evaluation Kit

## Install the ISM Radios GUI Software

- 1) Double-click the ISMRadiosGUISetup.msi setup file and follow the Setup Wizard prompts:
- a.  Click &lt;Next&gt;.
- b.  Use the default Destination folder and click &lt;Next&gt;.
- c.  Install the software by clicking &lt;Install&gt;.
- d.  Click &lt;Finish&gt; when the setup process is complete.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

MAX32625PICO DAPLINK

- 2) Connect the MAX32630FTHR to a power source.
- a.  Use a micro-B USB cable to connect the MAX32630FTHR board to a suitable power source (no USB connectivity is required).
- b.  The status LED on the FTHR board should be lit a steady red.
- 3) Connect the MAX32625PICO to a PC.
- a.  Use a micro-B USB cable to connect the PICO board. [The white USB cable in the photos.]
- b.  The status LED on the DAPLINK board blinks red when connecting.
- c.  After a few seconds of activity, the PC recognizes the DAPLINK as a standard USB drive.

## Evaluates: MAX41460/1/2/3/4

## Program the MAX32630FTHR Board with the MAX4146x Firmware

The FTHR board firmware comes preinstalled with every MAX4146x EV kit. This section describes how to install that firmware for development or update purposes.

- 1) Connect the MAX32630FTHR to the MAX32625PICO.
- a.  Use the fine-pitch, 10-pin ribbon cable to connect the boards from the SWD (J3) header on the PICO to J4 on the MAX32630FTHR.

<!-- image -->

│

Windows 10 Example

<!-- image -->

- 4) Drag-and-drop or save the ism\_radios\_fw.bin program binary to the Mbed or DAPLINK USB drive.
- a.  The FTHR board LED shuts off and the LED on the MAX32625PICO slowly flashes red as the FTHR board is be -ing programmed.
- b.  Once the programming is complete, the DAPLINK USB drive disconnects from the PC and reconnects as a USB drive again.
- c.  If the programming is successful, the contents of the DAPLINK USB drive should include a DETAILS.TXT file. If an ERROR.TXT file exists on the drive, check the FTHR board has power during the programming process and repeat steps 3 and 4.

<!-- image -->

- 5) To  ready  the  FTHR  board  for  use,  disconnect  the DAPLINK  board  (ribbon  cable)  and  press  &lt;Reset&gt; on  the  FTHR  board  or  disconnect  the  FTHR  board from the USB power supply.
- a.  When &lt;Reset&gt; is pressed, the microcontroller restarts and the newly  programmed  application begins to run, or disconnect and reconnect the USB cable if using a PC for power.

The latest information and these firmware update instructions can be found on the MAX32630FTHR board Mbed website: https://os.mbed.com/platforms/MAX32630FTHR/ or by visiting the Mbed home page ( https://www.mbed. com/ ) and searching for ' MAX32630FTHR '.

If  there  is  no  Mbed  account,  choose  'Signup',  and  create an Mbed account. Otherwise, log in with the normal username and password for access to the website, tools, libraries, and documentation.

Load  the  matching  image  ( MAX32630FTHR  DAPLINL image ) for the platform being programmed for the dragand-drop programming to work.

Please Note: The board can be sensitive to excess loading on the crystal, which could prevent it from entering maintenance mode. Hold the board by the edges when entering mainte -nance mode. It may be easier to hold the button while inserting the USB cable at the computer end, rather than trying to insert the cable into the micro USB connector.

## Evaluates: MAX41460/1/2/3/4

## Update the MAX32630FTHR Board Driver

The required driver is available from the Maxim Integrated ® website. See the Download the ISM Radios GUI Software Package section  for  information  on  obtaining  the  latest driver from Maxim Integrated ® .

- 1) Connect the MAX32630FTHR to the PC's USB port.
- 2) In Device Manager, right-click Other devices =&gt; 'CDC Device' or 'mbed Composite Device'.

<!-- image -->

│

- 3) Click 'Update Driver Software', then select 'Browse my computer for driver software'.
- 4) Select 'Let me pick from a list of available drivers on my computer'.

<!-- image -->

<!-- image -->

- 5) Click &lt;Have Disk…&gt;.
- 6) Browse the path of driver folder and click &lt;OK&gt;.

&lt;Have Disk…&gt; Button

<!-- image -->

Browse to the path and click &lt;OK&gt;.

<!-- image -->

- 7) Click &lt;Next&gt;.
- 8) Ignore the warnings and click 'Install this driver software anyway'.

<!-- image -->

Unverified Publisher Warning

<!-- image -->

## Appendix II - Hardware Modifications

## I 2 C Pullup Resistors

To  accommodate  the  various  operating  modes  of  the MAX4146x products on one board, the shared digital pins have  many  interface  modes  over  which  they  operate. The DATAIN net is the most dynamic of these interfaces, serving three functions:

- 1) DATA input for transmission in preset mode for the MAX41461-MAX41464 parts.
- 2) SDA when MAX41461-MAX41464 parts are config -ured for I 2 C mode.
- 3) SDI or MOSI for SPI control of the MAX41460 and as DATA input when transmitting.

With preset parts (MAX41461-MAX41464) used in preset mode, the DATA pin must be held low during power-up of  the  device.  A  light  pulldown  resistor:  R16,  100kΩ  to ground satisfies this requirement.

To  properly  establish  the  open-drain  topology  of  the two-pin serial interface, the SDA and SCL lines must be pulled-up  to  the  supply  voltage.  The  resistor  footprints: R14 and R15 are provided on the MAX4146x EV kit for this purpose. By connecting JU5 (1 to 2 and 3 to 4), both lines are pulled-up to the VDD supply.

Connect these pullups only when the preset pins (SEL0 and SEL1) are both connected to ground, thus selecting the I 2 C interface mode of the MAX4146x.

Note that the FTHR board also has footprints for  I 2 C  pullup  resistors  at  R6  and  R11.  Both  sets  of

## Evaluates: MAX41460/1/2/3/4

pullup resistors (on the FTHR board and MAX4146x EV kit)  should  not  be  populated  simultaneously,  otherwise incorrect  I 2 C  signal  levels  may  result.  Likewise,  if  other I 2 C slaves are added to the bus, use only one set of pullup resistors.

## Matching Network

For optimal performance of the transmitter PA, the antennamatching  network  should  be  tuned  to  the  operating frequency of the radio.

To change the tuning of the matching network, two inductors (L1 and L2) and two capacitors (C6 and C7) should be adjusted according to Table A2-1.

Figure A2-1. I 2 C Pullup Resistors

<!-- image -->

Figure A2-2. Matching Network

<!-- image -->

│

## Table A2-1. MAX4146x EV Kit Matching Network Component Values

| KIT                                             | f C                        | POUT   | BOOST*   | LOAD IMPEDANCE   | C7    | C8    | L2    | C6    | L1A   |
|-------------------------------------------------|----------------------------|--------|----------|------------------|-------|-------|-------|-------|-------|
| MAX41461EVKIT-315                               | 315MHz                     | +13dBm | -        | 165Ω             | 100pF | 8.2pF | 51nH  | 4.7pF | 47nH  |
|                                                 | 315MHz High-Power          | +16dBm | 0        | 68Ω              | 100pF | 8.0pF | 27nH  | 8.0pF | 30nH  |
|                                                 | 345MHz                     | +13dBm | -        | 170Ω             | 100pF | 8.2pF | 43nH  | 5.0pF | 39nH  |
| MAX41462EVKIT-434 MAX41460EVKIT# MAX41464EVKIT# | 434MHz                     | +13dBm | -        | 180Ω             | 100pF | 8.2pF | 30nH  | 5.6pF | 24nH  |
|                                                 | 434MHz High-Power          | +16dBm | 0        | 57Ω              | 100pF | 8.0pF | 19nH  | 7.0pF | 24nH  |
| MAX41464EVKIT-868                               | 868MHz                     | +11dBm | -        | 190Ω             | 100pF | 4.7pF | 11nH  | 3.3pF | 5.6nH |
|                                                 | 868MHz High-Power          | +16dBm | 1        | 33Ω              | 100pF | 3.0pF | 9.1nH | 3.3pF | 3.0nH |
| MAX41463EVKIT-915                               | 915MHz                     | +11dBm | -        | 190Ω             | 100pF | 3.9pF | 12nH  | open  | 5.1nH |
| MAX41460EVKIT-915                               | 863MHz- 928MHz High-Power* | +16dBm | 1        | 34Ω              | 100pF | 3.0pF | 9.1nH | 3.3pF | 3.0nH |

*PA boost mode enabled through the SHDN register (0x05), PA\_BOOST bit [0]

## Additional Harmonic Filtering

Operating  the  MAX4146x  in  a  high-power  mode  may impact  ESTI  compliance  and  is  particularly  noticeable when using a device in the 434MHz band. The second harmonic of 434MHz (868MHz) falls within the strict outof-band  (OOB)  power  limit  of  -36dBm.  In  this  case,  an additional  low-pass filter  (LPF)  may  be  beneficial  to  the radio designer. In combination with the high-power match at  434MHz  noted  above,  the  following  LPF  has  shown compliant operational results.

## Table A2-2. External LPF Component Values

Figure A2-3. External Filter

| EXTERNAL PART   |   QTY | DESCRIPTION                                              |
|-----------------|-------|----------------------------------------------------------|
| C1-C2           |     2 | 7.5pF ± 0.25pF Capacitor (0402) muRata GRM1555C1H7R5FZ01 |
| L1, L3          |     2 | 19nH ± 5% Inductor (0402) Coilcraft 0402CS-19NXJB        |
| L2              |     1 | 36nH ± 5% Inductor (0402) Coilcraft 0402CS-19NXJB        |

<!-- image -->

│

## PA Boost Mode Network Design

The switch-mode PA architecture inherently deals with voltage levels higher than the VDD supply. When operating the PA  in  boost  mode,  even  higher  voltages  can  be  presented  to  the  PA  node.  To  experiment  with  additional  boost capabilities, the MAX4146x EV kit has a separate output network that allows to limit the PA voltage swing.

The optional R18/L1B network can be used to reduce the voltage swing at the PA node by inserting a resistor in series with the PA bias inductor. Populate C9 and C10 as shown. This helps 'fix' the subVDD supply below the supply voltage.

[For additional information on switch-mode PAs similar to the one used in this transmitter, refer to Application Note 3589-Power Amplifier Theory for High-Efficiency Low-Cost ISM-Band Transmitters .](http://maximintegrated.com/AN3589)

## Pmod Header Interface

Figure A2-4. Matching Network

<!-- image -->

The  MAX4146x  EV  kit  has  a  Pmod-compatible  header footprint,  providing  yet  another  built-in  interface  to  the transmitter.  The  JU4  connector  can  be  populated  with  a 6-pin, 100mil, right-angle header such as a SAMTEC TSW106-25-T-S-RA,  allowing  direct  connections  to  the  CSB, DATAIN, CLKOUT, SCLK/SDA, ground, and VDD lines. Arduino Uno ®  R3-to-Pmod shield adaptor. When using the Pmod interface to supply the MAX4146x EV kit with power,

The  Pmod  interface  can  be  used  in  combination  with the  Maxim  MAX32600MBED  kit  and  MAXREFDES72# connect the JU1 jumper between pins 2 to 3.

Uno is a registered trademark of Arduino SA.

## Evaluates: MAX41460/1/2/3/4

Figure A2-5. MAX4146x EV Kit Pmod Interface

<!-- image -->

│

## Appendix III - Pinout Sheets

## MAX4146x EV Kit

300MHz to 928MHz ASK / (G) FSK Transmitter with SPI and I 2 C Interface.

<!-- image -->

│

## MAX41460

ASK/FSK Transmitter with SPI Interface

## MAX41461/62

ASK Transmitter with preset and I'C Interface

## MAX41463/64

FSK Transmitter with preset and ICInterface

## POWER SUPPLY SELECTION(JU1)

1-2 Power from FTHR Board 2-3Power fromPMoDInterface

## VDD

External Power Supply Input

## DATAIN

## MAX41460 DATA/SDI

- -DATAINPUT
- -SPl Serial Data Input

## MAX41461-64 DATA/SDA

- Preset Mode (DATA) Single Pin Data Interface
- I²C Mode (SDA) I²C Serial Data Input

<!-- image -->

<!-- image -->

## PRESET FREQUENCY SELECTION

## MAX41460

- No Preset Frequency selection option. Programmable via SPI

## MAX41461-64

- 1²C Programming Mode SELO=GND and SEL1=GND
- Preset Mode ReferQSGDocumentfor different preset frequency states

## CLKOUT

## MAX41460 CLK0UT/SDO

- Three Wire SPI Enabled (CLKOUT)

- Four-wire SPI Enabled (SDO) SPI Data Output

Buffered Clock Output

## MAX41461-64 CLKOUT/SCL

- Preset Mode (CLKOUT) Buffered Clock Output
- I²C Mode (SCL) Clock for I'C Interface

## MAX4146x

10-PINTSSOPPACKAGE

│

## MAX32630FTHR

Arm Cortex-M4F microcontroller rapid development platform.

<!-- image -->

│

## MAX4146x Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                       | PAGES CHANGED                   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------|
|                 0 | 8/18            | Initial release                                                                                                   | -                               |
|                 1 | 9/18            | Updated Ordering Information table                                                                                | 19                              |
|                 2 | 11/18           | Updated Ordering Information table and title of data sheet                                                        | 1-44                            |
|                 3 | 12/18           | Updated Ordering Information table and title of data sheet                                                        | 1-44                            |
|                 4 | 1/19            | Updated General Description, Quick Start, Component List, Bill of Materials, and Appendix                         | 1, 4, 8, 9, 20-22, 39, 40       |
|                 5 | 1/21            | Updated throughout for GUI modifications                                                                          | 2, 4-8, 13-16, 26-32, 34-37     |
|                 6 | 3/21            | Updated typos throughout; updated Component List , Schematic , Appendix I , Appendix II                           | 1-6, 8-10, 12-21, 24-37         |
|                 7 | 8/21            | Removed redundant GUI images, updated GUI installation procedure, removed use cases section, updated Appendix III | 2-8, 10-12, 14-15, 24-25, 34-35 |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX41460/1/2/3/4