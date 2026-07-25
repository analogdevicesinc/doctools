<!-- lastmod 2022-08-02 -->
## MAX7044 Evaluation Kit

## General Description

The  MAX7044  evaluation  kit  (EV  kit)  contains  a  single MAX7044  crystal-referenced  phase-locked-loop  (PLL) VHF/UHF transmitter designed to transmit OOK/ASK data in the 300MHz to 450MHz frequency range.

The EV kit operates alone or in conjunction with an external  microcontroller  (MCU)  and  graphical  user  interface (GUI) software running on a computer.

The EV kit is designed to facilitate  the  operation  of  the transmitter and provide tools for generating a data stream with  a  simple,  one-pin  data  interface  to  the  MAX7044. This EV kit is preconfigured to operate at two frequencies (315MHz or 433MHz) based on the crystal selection and the output network.

The  EV  kit  includes  Windows ®   10-compatible  software that  provides  a  simple  GUI  that  controls  the  on-board PMIC  and  can  act  as  a  data  generator  when  the MAX32630FTHR applications platform is used.

Evaluates: MAX7044

## Features and Benefits

- Evaluates the MAX7044 OOK/ASK Sub-1GHz ISM Band Transmitter
- Single Input Voltage Supply from +2.1V to +3.6V
- Direct Interface with a MAX32630FTHR Arm ® Microcontroller (MCU) Board
- Available PMOD Hardware Interface
- Windows 10-Compatible Software
- GUI Controls for MAX32630FTHR Board PMIC Operation from 2.1V to 3.3V
- Proven Two-Layer PCB Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. MAX7044 EV Kit Board

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

<!-- image -->

## MAX7044 Evaluation Kit

## Quick Start

## Required Equipment

- Included in the MAX7044 EV Kit
-  MAX7044 EV Kit Board
-  MAX32630FTHR# Kit
- FTHR Board
- DAPLINK Board
-  2x Micro-B USB Cables
- Windows PC* (Windows 7/Windows 10), with One to Two USB 2.0 Ports Available
- Power Supply †  Capable of 2.1V to 3.6V, 100mA
- Serial Data Source †  and a Simple Means of Connection (DATA Test Point and Ground)
- Basic Spectrum Analyzer - Rohde &amp; Schwarz ZVL3, Tektronix ®  RSA306, or Equivalent
- SMA/SMA Cable as Needed for Connection to the Spectrum Analyzer

## Software and Drivers

The  EV  kit  can  be  used  in  conjunction  with  the  Arm ® Cortex ® -M4F microcontroller MAX32630FTHR application Platform,  or FTHR board,  to  provide  power  and  tools  to operate the device through a software application or GUI. For this option, additional equipment is required.

When connected to the FTHR board, the EV kit uses the following drivers and software components. See Appendix I for additional information on this installation process.

- MAX7044 Software Package

The  software,  firmware,  and  drivers  are  available from  the www.maximintegrated.com website.  Log in to your My Maxim account on the website, search for  the  MAX7044  IC  or  EV  kit,  click  on  the Design Resources tab, and click on the appropriate software link. Finally, click the file link on the software landing page to download the MAX7044 EV kit package.

- Mbed ®  MAX32630FTHR and DAPLINK Interface System

The DAPLINK system should not be required unless a  firmware  update  to  the  FTHR  board  has  been released. The FTHR board included in the EV kit will be preprogrammed for interfacing the GUI to the radio. The firmware programming process does not require

## Evaluates: MAX7044

additional  software  or  drivers,  it  uses  a  simple  USB drive, drag-and-drop file interface.

It is highly recommended that the target PC be connected to a local area network and have access to the Internet, this allows for automatic download and updates of some drivers.  This  process  may  take  15  minutes  or  more  to complete.

## Installation Procedure

The steps in this section are used when connecting the EV kit to a FTHR board and should only be needed once, when configuring  the  hardware  and  the  PC  for  the  first time. If these steps have already been completed, see the FTHR Board Quick Start Procedure .

## Install the MAX7044 EV Kit GUI Software

This  process  should  take  less  than  10  minutes  after downloading  the  software  package. See Appendix  I  for detailed information on this installation process .

- 1) Download the ISM Radios GUI software. Copy the Setup MAX7044 V1.0.0 EVKit SW.rar file to a working folder on the target PC.
- 2) Double-click the ISMRadiosGUISetup.msi setup file and follow the Setup Wizard prompts.
- a.  Click Next in  the ISM Radios GUI Setup Wizard window.
- b.  It is recommended to use the default Destination Folder; click Next to continue.
- c. Install the software by clicking the Install button.
- d.  Click Finish when  the  ISM  Radios  GUI  Setup Wizard installation process is complete.

## Update the MAX32630FTHR Board Driver on the Host PC

No changes are needed for the FTHR board when first receiving a MAX7044EVKIT-the FTHR board has been preloaded  with  the  required  firmware.  Updates  to  the driver  on  the  host  PC  may  be  necessary  depending  on the operating system and whether the PC has access to the internet when first connecting to the FTHR board. See Appendix I for detailed information on how to update the FTHR board firmware and the driver for the FTHR board/ USB interface.

*Required for operation of the MAX7044 EV Kit with the GUI software

† Required when the FTHR board is not connected to the MAX7044 EV Kit

Tektronix is a registered trademarks of Tektronix, Inc.

Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere

│

## Table 1. MAX7044 EV Kit Installed Files and Folders

| FILE NAME                | DESCRIPTION                                         |
|--------------------------|-----------------------------------------------------|
| ISMRadiosGUISetup.msi    | Application GUI                                     |
| MaximStyle.dll           | Supporting DLL file for software operation          |
| MAX4147X_Registers.xml*  | Register definition file for MAX4147X               |
| MAX4146X_Registers.xml*  | Register definition file for MAX4146X               |
| MAX1471_Registers.xml*   | Register definition file for MAX1471                |
| MAX7032_Registers.xml*   | Register definition file for MAX7032                |
| MAX4147X_QuickStart.xml* | Quick start configuration file for MAX4147X         |
| MAX1471_QuickStart.xml*  | Quick start configuration file for MAX1471          |
| MAX7032_RxQuickStart.xml | Quick start configuration file for MAX7032 receive  |
| MAX7032 TxQuickStart.xml | Quick start configuration file for MAX7032 transmit |
| Firmware                 | Folder for current FW at the time of GUI download   |

*Not used in this evaluation, but provided with the common platform.

## Hardware Use Procedure

## Table 2. MAX7044 EV Kit Jumper Settings

| JUMPERS   | POSITION       | EV KIT FUNCTION                                       |
|-----------|----------------|-------------------------------------------------------|
| JU4       | 1-2            | Power from L3OUT (FTHR board: 3.3V)                   |
| JU4       | 2-3            | Power from PMOD interface (V DD , pin 6 of JU3 (DNP)) |
| JU4       | Not Installed* | Power from external source on VDD and GND test points |

*Default position

Figure 2. MAX7044 EV kit Jumpers

<!-- image -->

│

## FTHR Board Quick Start Procedure SPI and I 2 C Interface

## Set Up the MAX7044 EV Kit and FTHR Board Hardware MCU/GUI Operation

- 1) Verify that all jumpers on the MAX7044 EV kit board are in the default position; see Table 2.
- 2) Connect the EV kit to the FTHR board, be sure the USB connector is oriented on the opposite side of the SMA connector as shown in Figure 3.
- 3) Connect the FTHR board to the PC using a MicroB USB cable and observe a heartbeat on the FTHR board's red LED.
- 4) Connect the RF\_OUT to a spectrum analyzer using a low-loss SMA cable.
- a.  Set the Center Frequency to the target frequency of interest.
- b.  Set the Span to 1% of the Center Frequency (FCC standard test setting), the Resolution Bandwidth (RBW) to 1kHz, and the Video Bandwidth (VBW) to 3kHz.
- c.  Set the trace to Max Hold.
- 5) Start the MAX7044 EV kit Control Software GUI.
- a.  An  ISM  Radio  GUI  splash  screen  as  shown  in Figure 4 will be displayed.
- i. To disable future displays of the splash screen, click on the Disable check box.
- ii. To continue to the GUI software, click on the OK button.
- iii.  Select  the  MAX7044-Tx  from  the Device drop-down menu as shown in Figure 6.

Figure 3. MAX7044 EV kit Orientation to the FTHR Board

<!-- image -->

Figure 4. ISM Radios GUI Splash Screen

<!-- image -->

Evaluates: MAX7044

Figure 5. ISM Radios GUI Device Select Screen

<!-- image -->

Figure 6. ISM Radios GUI Device Select Screen

<!-- image -->

│

Evaluates: MAX7044

Figure 7. ISM Radio GUI Software

<!-- image -->

## MAX7044 Evaluation Kit

- b.  The  expected  COM  port  should  be  displayed  if the EV kit was connected prior to starting the GUI. Select the appropriate COM port from the drop-down list and click on the Connect button. The Connect button will change to the Disconnect button.
- c.  Confirm  the  firmware  status  bar  has  changed from ISM Radios x.x.x to ISM Radios 6.0.0 or similar, the software LED is lit green, and the port status is noted as Connected .
- d.  Enter a supply level into the Voltage text box and click the Set button; for example, enter 3.0 for a 3.0V supply and click Set .
- 6) Generate a transmission.
- a.  In  the Data  Control block,  enter  a  Manchester bitrate of interest and click the Set button.
- b.  Enter 0xAA in the Messages text box in the Data Control block.

<!-- image -->

Figure 8. COM Port

<!-- image -->

Figure 9. Connected Indicators

Figure 10. Supply Voltage

<!-- image -->

Figure 11. Data Control Block

<!-- image -->

Evaluates: MAX7044

- c.  Check the Continuous checkbox.
- d.  Click  on  the Send  Data button,  the  button  will change to Stop .
- 7) Observe the output on the spectrum analyzer.
- a.  Connect  the RF\_OUT to  a  spectrum  analyzer using  a  low-loss  SMA  cable  and  configure  the equipment.
- b.  Set the Center Frequency to the same value as selected with the jumpers in step 1.
- c.  Set the Span to 1% of the Center Frequency, the Resolution  Bandwidth  (RBW)  to  1kHz,  and  the Video Bandwidth (VBW) to 3kHz.
- d.  Set the trace to Max Hold.
- 8) Observe the RF output on the spectrum analyzer.

## Table 3. MAX7044EVKIT Test Points

| NAME       | COLOR   | EV KIT FUNCTION               |
|------------|---------|-------------------------------|
| VDD        | Black   | 2.1V to 3.6V power supply pin |
| GND        | Black   | Ground                        |
| DATAIN/SDI | Yellow  | TX data                       |
| CLKOUT/SDO | Green   | Clock output                  |

│

## Detailed Description

## Detailed Description of Hardware

## MAX7044 EV kit Printed Circuit Board

The MAX7044 EV kit PCB is manufactured on a two-layer, 1oz copper, FR4 dielectric stack-up PCB. Layer 1 is primarily designed to keep the RF signals on one side of the board with  short  traces,  small  matching  components,  and  low parasitics.  Layer  2  is  targeted  to  be  a  continuous  ground plane  wherever  possible.  The  EV  kit  is  available  in  two versions:  315MHz  (MAX7044EVKIT-315) and 433.92MHz (MAX7044EVKIT-433). The passive components are optimized for these two frequencies, but can easily be changed to  work  at  RF  frequencies  anywhere  from  300MHz  to 450MHz.

## Power

The EV kit board can be powered directly from the FTHR board PMIC through the H1 header, directly from the supply test points, or through the user-installed PMOD header. The FTHR board can provide a supply from +2.1V to +3.3V or a single +2.1V to +3.6V, 100mA power supply can be connected to the board using the two wire loops (marked VDD and GND). Jumper JU4 selects the source of power when not using the direct connection test points: from the L3OUT of the FTHR board or the PVIO of the PMOD connector.

## Data Interface

The  EV  kit  comes  preconfigured  to  directly  connect  the FTHR board through the H1/H2 headers. The GUI controls the communication of the FTHR board and MAX7044.

Figure 12. MAX7044 EV kit Interface

<!-- image -->

## Evaluates: MAX7044

## MAX7044 Evaluation Kit

## PMOD Interface

The EV kit provides a PMOD-compatible header footprint to interface with the transmitter. The JU3 connector can be populated with a 6-pin, 100mil, right-angle header allowing direct  connections to the CSB, DATAIN, CLKOUT, SCLK/ SDA,  ground,  and  VDD  lines.  Populating  this  header would allow control from the MAX32600MBED kit and the MAXREFDES72#  Arduino  Uno  R3  to  the  PMOD  shield adaptor.  When  using  the  PMOD  interface  to  supply  the

Evaluates: MAX7044

EV kit with power, make sure to connect the JU4 jumper between pins 2-3. See Appendix II for detailed information on evaluation kit hardware modifications.

## Detailed Description of Software

The MAX7044 EV kit Controller GUI software is designed to  control  the  MAX32630FTHR  board,  as  shown  in Figure  3.  The  software  utilizes  USB  controls  to  program the FTHR board. The FTHR board is capable of providing power and input data to the EV kit.

Figure 13. MAX7044 EV kit GUI Configuration

<!-- image -->

│

## MAX7044 Evaluation Kit

## Comport

The  Comport  section  provides  a  drop-down  selection  of serial  communication  ports  available  for  connection  to a  EV  kit  through  an  FTHR  board.  When  the  GUI  is  run after  connecting  the  EV  kit  hardware,  the  drop-down  box should default to the proper COM port. If the hardware is connected  to  the  computer  after  the  GUI  is  started,  click the Refresh button to scan for compatible ports. Once the appropriate  COM  port  is  selected  in  the  drop-down  box, click the Connect button. (See Figure 6.)

After properly connecting to the COM port with the FTHR board, the GUI will display the revision of the FTHR board firmware  detected,  display  a Green LED ,  and  display Connected in  the status bar along the bottom of the GUI window. (See Figure 7.)

## Voltage (2.1V to 3.3V)

The Voltage section provides a user-adjustable power supply from the FTHR board MAX14690N power management IC  (PMIC) to the EV kit and can be used as the primary VDD  supply.  The  PMIC,  L3OUT  can  be  set  to  voltages between 2.1V to 3.3V and it applies to the level of the logic interface lines as well as the device supply. (See Figure 8.)

To  program  the  supply  voltage,  enter  a  valid  level  in  the Voltage text  box and click on the Set button. The default value of the L3OUT voltage is 3.3V.

When using the FTHR board interface to supply the EV kit with power, make sure to connect the JU4 jumper between pins 1-2.

## Data Control Section

This portion of the GUI software provides a flexible tool for the user to generate data from a single-pin interface. The GUI provides simple Manchester-encoded data to be sent directly to the DATAIN pin of a connected device.

## Manchester Bitrate

This is the data rate in kbps for Manchester-encoded data. Enter  a  value  in  the  text  box  and  click  the Set button  to configure the Data Control .

## Continuous Transmission

Selecting  this  check  box  will  configure  the Data  Control interface so the message or data sequence will repeat until the user interrupts the transmission. For example: when a 0xAA  message  is  sent  with Continuous unchecked,  the sequence of 1-0-1-0-1-0-1-0 bits will be transmitted a single time.  When  the Continuous is  checked,  the Send  Data process  will  continuously  send  a  repeating  sequence  of 1-0-1-0-1-0-1-0-1-0-1-0-1-0-1-0… bits, emulating a squarewave data pattern.

## Messages Text Block and Message File

The Messages text  block  contains  hexadecimal  encoded data string to be transmitted with the FTHR board over the data interface. The data is streamed directly to the DATAIN pin of the MAX7044 EV kit.

## Tool History Section

This portion of the GUI contains a Log File text block which is used to record activity within the GUI.

Figure 14. Tool History

<!-- image -->

Evaluates: MAX7044

│

## MAX7044 Evaluation Kit

## Log File

For every Set ,  connection effort,  or  register  programming action, the GUI activity is logged in this text block. The user can add notes and make edits to the content of the Log File text block.

Clicking  on  the Clear  Log will  delete  the  contents  in  the text block.

Clicking the Save Log button will open a Save As explorer window and the user will be prompted to save a .txt file.

## Miscellaneous Software Information

The tool bar along the top of the GUI software provides a couple of options to the user.

## Component List

| PART        |   QTY | DESCRIPTION                                                                                                           |
|-------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| C1          |     1 | Capacitor; smt (0603); ceramic chip; 12pf; 50V; tol = 2%; model = accu-p; tg = -55°C to +125°C; tc = c0g              |
| C1 (433MHz) |     1 | Capacitor; smt (0603); ceramic chip; 15pf; 50V; tol = 5%; model = ; tg = -55°C to +125°C; tc = c0g                    |
| C2          |     1 | Capacitor; smt (0603); ceramic chip; 18pf; 50V; tol = 5%; model = ; tg = -55°C to +125°C; tc = c0g                    |
| C2 (433MHz) |     1 | Capacitor; smt (0603); ceramic chip; 12pf; 50V; tol = 2%; model = accu-p; tg = -55°C to +125°C; tc = c0g              |
| C4, C10     |     2 | Capacitor; smt (0603); ceramic chip; 0.01uf; 100V; tol = 10%; Model = X7R; tg = -55°C to +125°C; tc = USE 20-00u01-M8 |
| C6          |     1 | Capacitor; smt (0603); ceramic chip; 15pf; 50V; tol = 5%; model = ; tg = -55°C to +125°C; tc = c0g                    |
| C6 (433MHz) |     1 | Capacitor; smt (0603); ceramic chip; 12pf; 50V; tol = 2%; model = accu-p; tg = -55°C to +125°C; tc = c0g              |
| C11, C12    |     2 | Capacitor; smt (0603); ceramic chip; 220pf; 50V; tol = 5%; tg = -55°C to +125°C; tc = c0g                             |

## File and Help Menu

Selecting File  &gt;  Exit from  the  tool  bar  will  close  the  GUI program. This has the same effect as clicking the X button in the upper-right corner of the GUI software.

Selecting Help &gt; About from the tool bar will display the splash  screen. This  window  shows  the  name  of  the  software, the revision number, a copyright notice, a link to the Maxim website, a link to the support website, and a checkbox to enable or disable the splash screen during startup. Click the OK button to close the About window.

| PART           |   QTY | DESCRIPTION                                                                                                                                                                                 |
|----------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLKOUT         |     1 | Test point; pin dia = 0.125in; total length = 0.445in; board hole = 0.063in; green; phosphor bronze wire silver plate finish; recommended for board thickness = 0.062in; not for cold test  |
| DATA           |     1 | Test point; pin dia = 0.125in; total length = 0.445in; board hole = 0.063in; yellow; phosphor bronze wire silver plate finish; recommended for board thickness = 0.062in; not for cold test |
| GND, GND1, VDD |     3 | Test point; pin dia = 0.125in; total length = 0.445in; board hole = 0.063in; black; phosphor bronze wire silver plate finish; recommended for board thickness = 0.062in; not for cold test  |
| H1             |     1 | Connector; male; through hole; prpc series; straight; 16pins                                                                                                                                |
| H2             |     1 | Connector; male; through hole; prpc series; straight; 12pins                                                                                                                                |
| J1             |     1 | Connector; female; through hole; lfb series; 2.54mm contact center; straight; 16pins                                                                                                        |
| J2             |     1 | Connector; female; through hole; header female; straight; 12pins                                                                                                                            |

│

## Evaluates: MAX7044

## MAX7044 Evaluation Kit

## Component List (continued)

| PART        |   QTY | DESCRIPTION                                                                                                    |
|-------------|-------|----------------------------------------------------------------------------------------------------------------|
| JU4         |     1 | Connector; male; through hole; breakaway; straight; 3pins                                                      |
| L1          |     1 | Inductor; smt (0603); ceramic chip; 27nh; tol = ±5%; 0.6a; -40°C to +125°C                                     |
| L3          |     1 | Inductor; 0603; 18nh; 5%; 700ma; -40°C to +125°C                                                               |
| L3 (433MHz) |     1 | Inductor; smt (0603); ceramic chip; 16nh; tol = ±5%; 0.7a; -40°C to +125°C                                     |
| R1, R3, R8  |     3 | Resistor; 0603; 0 Ω ; 0%; jumper; 0.1W; thick film                                                             |
| RFOUT       |     1 | Connector; end launch jack receptacle; boardmount; straight through; 2pins;                                    |
| SU1         |     1 | Test point; jumper; str; total length = 0.24in; black; insulation = pbt; phosphor bronze contact = gold plated |
| U1          |     1 | Ic; xmtr; 300mhz to 450mhz high- efficiency; crystal-based +13dbm ask transmitter; sot23-8                     |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE             |
|----------------------------------------|--------------|---------------------|
| YXC Crystal                            | -            | www.yxcxtal.com     |
| NDK Crystal                            | -            | www.ndk.com         |
| Keystone                               | 800-221-5510 | www.keyelco.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com      |
| Coilcraft                              | 847-639-6400 | www.coilcraft.com   |
| Sullins                                | 760-744-0125 | www.sullinscorp.com |
| Vishay Dale                            | 800-433-5700 | www.vishay.com      |

Note:

Indicate that you are using the MAX7044 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE                           |
|------------------|--------------------------------|
| MAX7044EVKIT-315 | MAX7044 EV kit tuned to 315MHz |
| MAX7044EVKIT-433 | MAX7044 EV kit tuned to 433MHz |

│

Evaluates: MAX7044

| PART                 | QTY                  | DESCRIPTION                                                                                         |
|----------------------|----------------------|-----------------------------------------------------------------------------------------------------|
| Y1                   | 1                    | Crystal; smt; 6.27pf; 9.84375MHz; ±80ppm; note: special order only                                  |
| Y1 (433MHz)          | 1                    | Crystal; smt; 6.27pf; 13.56MHz; ±80ppm ;                                                            |
| MOD1                 | DNI                  | Module; board assembly; through hole; MAX32630FTHR# laminated plastic with copper clad              |
| PCB                  | 1                    | PCB: MAX7044                                                                                        |
| DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP)                                                                                |
| C14, C15             | 2                    | Cap; smt (01005); 5pf; ±0.25pf; 50V; c0g; ceramic chip; note: purchase direct from the manufacturer |
| JU3                  | 1                    | Connector; male; through hole; 0.025in sq post header; right angle; 6pins                           |
| R2, R4, R5, R9       | 4                    | Resistor; 0603; 0 Ω ; 0%; jumper; 0.1w; thick film                                                  |
| Y1                   | 0                    | Crystal; smt 3.2 x 2.5; 10pf; 9.84375MHz; ±10ppm; Note: special order only                          |

## MAX7044 EV Kit Bill of Materials

|   ITEM | REF_DES        | DNI/DNP   |   QTY | MFG PART #                                                             | MANUFACTURER                           | VALUE             | DESCRIPTION                                                                                                              |
|--------|----------------|-----------|-------|------------------------------------------------------------------------|----------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------|
|      1 | C1             | -         |     1 | 06035J120GBT; GRM1885C1H120GA01                                        | AVX; MURATA                            | 12PF              | CAP; SMT (0603); 12PF; 2%; 50V; +/- 0 TO 30PPM/DEGC; CERAMIC                                                             |
|      2 | C2             | -         |     1 | C0603C0G500-180JNE; C1608C0G1H180J080AA; GRM1885C1H180J                | VENKEL LTD.; TDK;MURATA                | 18PF              | CAP; SMT (0603); 18PF; 5%; 50V; C0G; CERAMIC                                                                             |
|      3 | C4, C10        | -         |     2 | CGA3E2X7R2A103K; C0603C103K1RA; GRM188R72A103KA01; C1608X7R2A103K080AA | TDK;KEMET; MURATA;TDK                  | 0.01UF            | CAP; SMT (0603); 0.01UF; 10%; 100V; X7R; CERAMIC;                                                                        |
|      4 | C6             | -         |     1 | GRM39C0G150J50V; GRM1885C1H150JA01                                     | MURATA; MURATA                         | 15PF              | CAP; SMT (0603); 15PF; 5%; 50V; C0G; CERAMIC                                                                             |
|      5 | C11, C12       | -         |     2 | GRM1885C1H221JA01                                                      | MURATA                                 | 220PF             | CAP; SMT (0603); 220PF; 5%; 50V; C0G; CERAMIC                                                                            |
|      6 | CLKOUT         | -         |     1 | 5126                                                                   | KEYSTONE                               | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|      7 | DATA           | -         |     1 | 5014                                                                   | KEYSTONE                               | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      8 | GND, GND1, VDD | -         |     3 | 5011                                                                   | KEYSTONE                               | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|      9 | H1             | -         |     1 | PRPC016SFAN-RC                                                         | SULLINS ELECTRONICS CORP               | PRPC016SFAN-RC    | CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; STRAIGHT; 16PINS                                                             |
|     10 | H2             | -         |     1 | PRPC012SFAN-RC                                                         | SULLINS ELECTRONICS CORP               | PRPC012SFAN-RC    | CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; STRAIGHT; 12PINS                                                             |
|     11 | J1             | -         |     1 | PPPC161LFBN-RC                                                         | SULLINS ELECTRONICS CORP               | PPPC161LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                                     |
|     12 | J2             | -         |     1 | PPPC121LFBN-RC                                                         | SULLINS ELECTRONICS CORP               | PPPC121LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                         |
|     13 | JU4            | -         |     1 | PEC03SAAN                                                              | SULLINS                                | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |
|     14 | L1             | -         |     1 | 0603CS-27NXJL                                                          | COILCRAFT                              | 27NH              | INDUCTOR; SMT (0603); CERAMIC CHIP; 27NH; TOL=+/-5%; 0.6A; -40 DEGC TO +125 DEGC                                         |
|     15 | L3             | -         |     1 | 0603CS-18NXJL                                                          | COIL CRAFT                             | 18NH              | INDUCTOR; 0603; 18nH; 5%; 700mA; -40degC TO +125degC                                                                     |
|     16 | R1, R3, R8     | -         |     3 | CRCW06030000Z0                                                         | VISHAY DALE                            | 0                 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                              |
|     17 | RFOUT          | -         |     1 | 142-0701-851                                                           | JOHNSON COMPONENTS                     | 142-0701-851      | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                              |
|     18 | SU1            | -         |     1 | S1100-B;SX1100-B; STC02SYAN                                            | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                  |
|     19 | U1             | -         |     1 | MAX7044AKA+                                                            | MAXIM                                  | MAX7044AKA+       | IC; XMTR; 300MHZ TO 450MHZ HIGH-EFFICIENCY; CRYSTAL-BASED +13DBM ASK TRANSMITTER; SOT23-8                                |
|     20 | Y1             | -         |     1 | NX3225GA-9.84375MHZ -EXS00A-CG08008                                    | NIHON DEMPA KOGYO CO                   | 9.84375MHZ        | CRYSTAL; SMT; 6.27PF; 9.84375MHZ; +/-80PPM ;                                                                             |
|     21 | PCB            | -         |     1 | MAX7044                                                                | MAXIM                                  | PCB               | PCB:MAX7044                                                                                                              |
|     22 | MOD1           | DNI       |     1 | 89-32630#KFT                                                           | MAXIM                                  | 89-32630#KFT      | MODULE; BOARD ASSEMBLY; THROUGH HOLE; MAX32630FTHR# LAMINATED PLASTIC WITH COPPER CLAD                                   |
|     23 | C14, C15       | DNP       |     0 | GRM0225C1H5R0CA03                                                      | MURATA                                 | 5PF               | CAP; SMT (01005); 5PF; +/-0.25PF; 50V; C0G; CERAMIC;                                                                     |
|     24 | JU3            | DNP       |     0 | TSW-106-25-T-S-RA                                                      | SAMTEC                                 | TSW-106-25-T-S-RA | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 6PINS                                                |
|     25 | R2, R4, R5, R9 | DNP       |     0 | CRCW06030000Z0                                                         | VISHAY DALE                            | 0                 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                              |
|     26 | Y1             | DNP       |     0 | X3225984375MSB4SI                                                      | YXC                                    | 9.84375MHZ        | CRYSTAL; SMT 3.2X2.5; 10PF; 9.84375MHZ; +/-10PPM;                                                                        |

│

Evaluates: MAX7044

## MAX7044 EV Kit Schematic Diagram

<!-- image -->

## MAX7044 EV Kit PCB Layout Diagrams

MAX7044 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX7044

MAX7044 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX7044 EV Kit PCB Layout Diagrams (continued)

MAX7044 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX7044 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Appendix I - Detailed Software, Firmware, and Driver Installation Procedures

This software and firmware are available from the Maxim Website .

- 1) Log in to your My Maxim account on the website.
- 2) Click on the magnifying glass and search for the MAX7044 .
- 3) Click on the Design Resources tab on the appropriate product web page.

<!-- image -->

<!-- image -->

│

## MAX7044 Evaluation Kit

- 4) Click on the appropriate software link.
- 5) Click the file link on the software landing page to download the MAX7044 EV kit package.

<!-- image -->

<!-- image -->

│

Evaluates: MAX7044

Evaluates: MAX7044

- 6) Review the Maxim Software License Agreement (SLA) and accept the terms by clicking the Accept button.
- 7) Save the EV kit distribution package to your desktop or other accessible location for later install.

<!-- image -->

│

## MAX7044 Evaluation Kit

## Install the ISM Radios GUI

This software and firmware are available from the Maxim Website .  See the Download the ISM Radios GUI section for information on obtaining the latest firmware from Maxim. This process should take less than 10 minutes after downloading the software, firmware, and driver package.

- 1) Double-click the ISMRadiosGUISetup.msi setup file and follow the Setup Wizard prompts.
- a. If a Security Warning popup window appears, click Run.
- b. Click Next .

<!-- image -->

<!-- image -->

│

Evaluates: MAX7044

- c. Use the default Destination Folder and click Next .
- d. Install the software by clicking Install .

<!-- image -->

<!-- image -->

Evaluates: MAX7044

- e. Click Finish when the setup process is complete.

<!-- image -->

## Program the MAX32630FTHR Board with the MAX7044 Firmware

This  software  and  firmware  are  available  from  the Maxim Website .  See  the Download  the  ISM  Radios  GUI  Software Package section for information on obtaining the latest firmware from Maxim.

- 1) Connect the MAX32630FTHR to the MAX32625PICO.
- a. Use the fine pitch 10-pin ribbon cable to connect the boards from the SWD (J3) header on the MAX32625PICO to J4 on the MAX32630FTHR.

<!-- image -->

MAX32625PICO DAPLINK

Evaluates: MAX7044

│

## MAX7044 Evaluation Kit

- 2) Connect the MAX32630FTHR to a power source.
- a.  Use a Micro-B USB cable to connect the MAX32630FTHR board to a suitable power source (no USB connectivity is required). [The black USB cable in the photos.] Alternatively, you can power the board from a charged battery as long as you remember to turn it on by pressing the power/reset button next to the battery connector. The board turns on automatically when powered from the USB supply.
- b. The status LED on the FTHR board should be lit a steady red .
- 3) Connect the MAX32625PICO to a PC.
- a.  Use a Micro-B USB cable to connect the MAX32625PICO to a PC through the USB connector. [The white USB cable in the photos.]
- b.  The status LED on the DAPLINK board blinks red when connecting.
- c. After a few seconds of activity, the PC recognizes the DAPLINK as a standard USB drive.
- 4) Drag-and-drop or save a the ISM\_Radio\_fw.bin program binary to the Mbed or DAPLINK USB Drive.

<!-- image -->

<!-- image -->

│

Evaluates: MAX7044

- a.  The FTHR board LED will shut off and the LED on the MAX32625PICO slowly fl ashes red as the FTHR board is being programmed.
- b.  Once the programming is complete, the MAX32625PICO USB drive disconnects from the PC and reconnect as a USB Drive again.
- c. If the programming was successful, the contents of the MAX32625PICO USB Drive should include a DETAILS. TXT file. If an ERROR.TXT file exists on the drive, check that the FTHR board had power during the program -ming process and repeat steps 3 and 4.
- 5) To ready the FTHR board for use, disconnect the MAX32625PICOboard (ribbon cable) and press the Reset button on the FTHR board or disconnect the FTHR board from the USB power supply.
- a.  When the Reset button is pressed, the microcontroller restarts and the newly programmed application begins to run, or you can disconnect and reconnect the USB cable if using a PC for power.

The latest information and these firmware update instructions can be found on the MAX32630FTHR board Mbed web site or by visiting the Mbed home page and searching for 'MAX32630FTHR.'

If you do not have an Mbed account, choose Signup and create your Mbed account. Otherwise, log in with your username and password. This will give you access to the website, tools, libraries, and documentation.

You must load the matching HDK image for the platform you are programming in order for drag-and-drop programming to work. For the MAX32630FTHR DAPLINK image:

[https://os.mbed.com/media/uploads/switches/max32620\_daplink\_max32630fthr.bin](https://os.mbed.com/media/uploads/switches/max32620_daplink_max32630fthr.bin)

## Update the MAX32630FTHR Board Driver

The required driver is available from the Maxim Website . See the Download the ISM Radios GUI Software section for information on obtaining the latest driver from Maxim.

- 1) Connect the MAX32630FTHR to the PC's USB port.
- 2) In Device Manager , right-click Other devices  CDC Device or Mbed Composite Device .

<!-- image -->

│

Evaluates: MAX7044

- 3) Click Update Driver Software then select Browse my computer for driver software .
- 4) Select Let me pick from a list of available drivers on my computer .

<!-- image -->

<!-- image -->

- 5) On a Windows 10 operating system, click the Have Disk … button.
- 6) Browse the path of driver folder and for Windows 10 click OK .

Windows 10: Have Disk… Button

<!-- image -->

Windows 10: Browse to the Path and Click OK .

<!-- image -->

## 7) Click Next .

<!-- image -->

- 8) Ignore the warnings and click Install this driver software anyway .

Windows 10: Unverified Publisher Warning

<!-- image -->

## Appendix II - Hardware Modifications

## Matching Network

For optimal performance of the transmitter PA, the antenna-matching network should be tuned to the operating frequency of the radio.

Figure A2-2. Matching Network

<!-- image -->

To change the tuning of the matching network, two inductors (L1 and L3) and three capacitors (C1, C2, and C6) should be adjusted according to Table A2-1.

## Table A2-1. MAX7044 EV Kit Matching Network Component Values

| KIT   | MAX7044EVKIT-315MHz   | MAX7044EVKIT-433MHz   |
|-------|-----------------------|-----------------------|
| C1    | 12pF                  | 15pF                  |
| C2    | 18pF                  | 12pF                  |
| C6    | 15pF                  | 12pF                  |
| L1    | 27nH                  | 27nH                  |
| L3    | 18nH                  | 16nH                  |
| Y1    | 9.84375MHz            | 13.56MHz              |

## PMOD Header Interface

The MAX7044 EV kit has a PMOD-compatible header footprint that provides yet another built-in interface to the transmitter. The JU4 connector can be populated with a 6-pin, 100mil, right-angle header such as a SAMTEC TSW-106-25-T-S-RA, allowing direct connections to the CLKOUT, DATA, ground, and VDD lines.

The PMOD interface can be used in combination with the Maxim MAX32600MBED kit and the MAXREFDES72# Arduino Uno R3-to-PMOD shield adaptor. When using the PMOD interface to supply the MAX7044 EV kit with power, make sure to connect the JU4 jumper between pins 2-3.

Figure A2-4. MAX7044 EV Kit PMOD Interface

<!-- image -->

## MAX7044 Evaluation Kit

## Appendix III - Pinout Sheets MAX7044EVKIT

300MHz to 450MHz ASK Transmitter

<!-- image -->

Evaluates: MAX7044

## MAX32630FTHR

Arm Cortex-M4F Microcontroller Rapid Development Platform.

<!-- image -->

│

Evaluates: MAX7044

## MAX7044 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/05            | Initial release                                                                                                                                                                                                            | -               |
|                 1 | 2/12            | Updated Component List and Figure 1                                                                                                                                                                                        | 1, 4            |
|                 2 | 1/21            | Updated the entire EV kit                                                                                                                                                                                                  | 1-32            |
|                 3 | 6/21            | Updated the Quick Start section, updated FTHR Board Quick Start Procedure - SPI and I 2 C Interface section, replaced Component list and replaced figure 12 , MAX32630FTHR Board Photo , and MAX7044 ASK Transmitter Photo | 2-11, 30, 31    |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX7044