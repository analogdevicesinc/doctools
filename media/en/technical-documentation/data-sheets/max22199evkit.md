<!-- lastmod 2025-03-12 -->
<!-- image -->

Evaluates: MAX22199

## General Description

The MAX22199 evaluation kit (EV kit) provides the hardware and software necessary to evaluate the MAX22199 Octal Industrial Digital Input device. The MAX22199 EV kit receives commands from a PC through the USB port to  create  a  SPI  interface  for  communication  between the  software  and  the  MAX22199  on  the  EV  kit.  The MAX22199 EV kit also has a Pmod™ compatible connector  for  SPI  communication  with  an  external  host  device such as a MCU or FPGA.

The EV kit includes a graphical user interface (GUI) that provides  communication  between  the  target  device  and the PC. The MAX22199 EV kit has a MAX22199 device that supports Type 1, 3 inputs with the current sink limit set  by  an  on-board  resistor.  The  MAX22199  EV  kit  is designed to support transient immunity testing for ESD, EFT, and Surge according to IEC 61000-4-2, IEC 610004-4,  and  IEC  61000-4-5  respectively.  The  EV  kit  can operate in multiple modes, as shown in the System Block Diagram :

- 1) USB Mode: If SW1 are all closed, the MAX22199 SPI receives commands through the USB port from the Maxim-supplied EV kit software.
- 2) Pmod Mode: If SW1 are all open, the MAX22199 SPI receives commands through the PMOD1 connector. This industry standard connector connects to popular MCU or FPGA platforms. The user is required to gene rate firmware to provide the SPI commands.

## EV Kit Contents

- MAX22199EVKIT#, including the MAX22199ATJ+
- Micro-USB Cable

Ordering Information appears at end of data sheet.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Pmod is a trademark of Digilent, Inc

©

## MAX22199 Evaluation Kit

## Features

- Easy Evaluation of the MAX22199
- EV Kit Logic Side is USB-Powered
- Configured for IEC 61131-2 Type 1, 3
- Galvanic Isolation using MAX14483
- Supports Transient Immunity Testing to IEC 61000-42, IEC 61000-4-4, and IEC 61000-4-5
- Robust Design ±2kV Surge Tolerant Line-to-Ground and Line-to-Line, ±8kV Contact ESD, and ±15kV AirGap ESD at field inputs
- Windows ®  10 Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

## MAX22199 EV Kit

<!-- image -->

319-100819; Rev 1; 3/25

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2025  Analog  Devices,  Inc.  All  rights  reserved. 2025 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX22199 Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX22199 EV Kit Files

| FILE                        | DESCRIPTION         |
|-----------------------------|---------------------|
| MAX22199EVKitSetupV1.00.exe | Application Program |

│

Evaluates: MAX22199

## MAX22199 Evaluation Kit

## Quick Start

## Required Equipment

- MAX22199 EV kit
- Micro-USB cable
- 24V DC voltage supply (or 24V AC-DC adapter with barrel connector)
- Windows 10, Windows 8,1, Windows 7, Window XP PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  The  default jumper  settings  configure  the  EV  kit  to  operate  in  USB mode.  In  this  configuration,  the  EV  kit's  'logic  side'  is powered by +5V from the X1 USB connector, the 'field side' is powered by the external DC supply connected to the VDD24 and GND test points, and the MAX22199 is configured in SPI mode 0. U1 is configured for eight Type 1 or Type 3 inputs (terminal blocks T1 and T2). Follow the steps to verify the MAX22199 operation:

- 1) Verify that all jumper settings are in the default position from Table 1.
- 2) For initial  testing,  the  MAX22199 EV kit is powered from USB (+5V) from the USB connector and 24V at the VDD24 and GND test points.
- 3) Visit www.maximintegrated.com to  download  the latest version of the EV kit software, MAX22199EVKitSetupV1.00.exe.
- 4) Install  the  EV  kit  software  and  USB  driver  on  your computer by running the MAX22199EVKitSetupV1.00. exe program. A message box asking "Do you want to allow the following program to make changes to this computer?" might appear. If so, click "Yes".
- 5) The program files are copied to your PC and icons are created in the Windows Start | Programs menu. At  the  end  of  the  installation  process,  the  installer launches the installation for the .NET framework 4.0 and FTDI Chip CDM drivers.

## Evaluates: MAX22199

- 6) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish .  The  default  location  of the software is in the program files directory.
- 7) Connect the MAX22199 EV kit USB connector X1 to the  PC  with  the  micro-USB  cable.  Windows  should automatically  recognize  the  device  and  display  a message near the System Icon menu indicating that the hardware is ready to use.
- 8) Connect the DC power supply between the EV kit's VDD24 and GND\_TP1 test points. Set the DC power supply  output  to  24V,  and  then  enable  the  output. On the EV kit, observe that the LED\_USB, LOGIC\_ RDY, FIELD\_RDY, LED\_FAULTB, and LED\_ READYB LEDs are on, indicating that the EV kit is powered up.
- 9) Once the hardware is ready to use, launch the EV kit software by opening its icon in the Start | Programs menu.  The  EV  kit  software  appears  as  shown  in Figure 1.
- 10)  Verify  that  the  lower-right  status  bar  indicates  the EV  kit  hardware  is Connected .  If  the  status  bar indicates Disconnected , click Connect to Hardware from the Device menu. Next, select a device in the list or use the default device already selected.
- 11)  Click the Clear POR button. Observe that POR status  light  for  U1  is  changed  to  green,  and FAULTB Signal status  light  is  also  changed  to  green  in  the Configuration tab as shown in Figure 2.
- 12) Observe that LED\_FAULTB on the EV kit is turned off.
- 13)  Click Read  DI  Continuously button.  The  EV  kit software  reads  the  U1  registers  continuously.  Connect  the  24V  DC  voltage  to  one  of  the  input  test points, e.g., test point IN5. The corresponding Digital  Inputs status  light IN5 is  changed  to  green from  yellow  to  indicate  U1  channel  IN5  is  high  as shown in Figure 3.

Figure 1. MAX22199 EV Kit Software Startup Window

<!-- image -->

Table 1. MAX22199 EV Kit Jumper Settings

| JUMPER            | SHUNT POSITION                              | DEVICE                                      | DESCRIPTION                                                       |
|-------------------|---------------------------------------------|---------------------------------------------|-------------------------------------------------------------------|
| POWER             |                                             |                                             |                                                                   |
| J1                | 1-2*                                        | U1                                          | Connect U1 V DD supply to U1 V L supply                           |
| J1                | Open                                        | U1                                          | Connect external power supply from VL test point to U1 V L supply |
| SPI               |                                             |                                             |                                                                   |
| J2                | 1-2                                         | U1                                          | U1 SPI Mode M1 = 1                                                |
| J2                | 2-3*                                        | U1                                          | U1 SPI Mode M1 = 0                                                |
| J3                | 1-2                                         | U1                                          | U1 SPI Mode M0 = 1                                                |
| J3                | 2-3*                                        | U1                                          | U1 SPI Mode M0 = 0                                                |
| TEST POINTS       | TEST POINTS                                 |                                             |                                                                   |
| VDD24             | Field-side 24V supply                       | Field-side 24V supply                       | Field-side 24V supply                                             |
| VDD               | Field-side V DD (3.3V) supply               | Field-side V DD (3.3V) supply               | Field-side V DD (3.3V) supply                                     |
| VL                | Field-side V L logic supply                 | Field-side V L logic supply                 | Field-side V L logic supply                                       |
| GND_TP1 - GND_TP5 | Field-side ground                           | Field-side ground                           | Field-side ground                                                 |
| 3V3_USB           | Logic-side (3.3V) supply                    | Logic-side (3.3V) supply                    | Logic-side (3.3V) supply                                          |
| EARTH             | Protected Earth Connection to the EV kit    | Protected Earth Connection to the EV kit    | Protected Earth Connection to the EV kit                          |
| UGND              | Logic-side ground                           | Logic-side ground                           | Logic-side ground                                                 |
| IN1 - IN8         | Field-side digital inputs for U1 IN1 to IN8 | Field-side digital inputs for U1 IN1 to IN8 | Field-side digital inputs for U1 IN1 to IN8                       |
| CSB               | U1 chip-select CS                           | U1 chip-select CS                           | U1 chip-select CS                                                 |
| SDI               | U1 serial data input MOSI                   | U1 serial data input MOSI                   | U1 serial data input MOSI                                         |
| SDO               | U1 serial data output MISO                  | U1 serial data output MISO                  | U1 serial data output MISO                                        |
| SCLK              | U1 serial clock SCLK                        | U1 serial clock SCLK                        | U1 serial clock SCLK                                              |
| LATCHB            | U1 LATCH signal                             | U1 LATCH signal                             | U1 LATCH signal                                                   |
| FAULTB            | U1 FAULT signal                             | U1 FAULT signal                             | U1 FAULT signal                                                   |
| READYB            | U1 READY signal                             | U1 READY signal                             | U1 READY signal                                                   |
| REFDI             | U1 REFDI signal                             | U1 REFDI signal                             | U1 REFDI signal                                                   |

*Default position.

│

## MAX22199 Evaluation Kit

## Detailed Description of Software

When  the  MAX22199  EV  kit  software  starts,  it  automatically detects if the EV kit is connected to a PC and indicates its status in the status bar at the bottom edge of  the  GUI.  If  the  software  does  not  recognize  the  EV kit  board,  make  sure  that  the  software  and  all  drivers  are  properly  installed,  check  the  USB  connection, and go to the Device menu  and  select  the Search for Hardware option. When the EV kit is properly connected, the  MAX22199 device (U1) is read and all controls are updated (see Figure 1 ).

The  main  window  of  the  EV  kit  software  contains  two groups  of  controls: U1  Status  &amp;  Configuration ,  and general  controls  for  the  EV  kit.  The U1  Status  and Configuration pane provides the controls to directly con-

Evaluates: MAX22199

figure MAX22199 features such as reading digital inputs, input  filters  configuration,  fault  status  reporting,  etc.  The general controls for the EV kit allow the user to select the SCLK speed, MAX22199 SPI mode, LATCH signal level, etc. Next to the Configuration tab, the Register Map tab lists all registers in the MAX22199 and provides direct read and write access to all control bits.

If the MAX22199EVKIT# hardware is not connected automatically,  the Device menu provides the functionality to connect to or disconnect from the hardware by choosing detected EV kit serial numbers. Under the Options menu, a CRC Calculator ( Figure 4 ) is provided to calculate the 5-bit  CRC  code  based  on  the  data  frame  provided  by the user. The jumper positions are shown in the Jumper Setting  Diagram ( Figure  5 )  under  the Options menu based on selectable SPI mode.

Figure 2. MAX22199 EV Kit Software-Clear POR

<!-- image -->

│

## MAX22199 Evaluation Kit

## Configuration Tab

The Configuration tab provides an interface for configuring the MAX22199 from a functional perspective. Before sending  the  commands  to  the  MAX22199,  select  the desired SPI mode and configure the jumpers according to the Table 1 . The status and configuration box provides the controls for digital inputs reading, DI channel enable, fault status reporting, FAULT pin configuration, input filters configuration, CRC value calculation, etc.

After power up, the MAX22199 FAULT pin is low and the POR bit in the FAULT1 register is set, indicating  that  a power-on-reset has occured and all registers are set to

## Evaluates: MAX22199

default ( Figure 1 ). After clicking the Clear POR button, the software clears the POR bit in the FAULT1 register. The FAULT pin is pulled high and FAULTB LED on the EV kit is turned off after clearing the POR ( Figure 2 ).

The Read All button reads the MAX22199 registers and refreshes all the controls with current setting. The Read DI and Read DI Continuously buttons read the values of the DI and FAULT1 registers and update the corresponding controls. The Read FAULT Status button reads the FAULT1 and FAULT2 registers, polls OFAULT and  SAA status from the MAX14483, and updates the corresponding controls.

Figure 3. MAX22199 EV Kit Software-Read DI Continuously

<!-- image -->

## MAX22199 Evaluation Kit

## CRC Calculator

Clicking CRC  Calculator under  the Options menu opens  the  CRC  calculation  window  ( Figure  4 ).  The software  calculates  the  5-bit  CRC  code  based  on  the 19-bit  data  or  24-bit  data  (5  LSB  bits  are  ignored)  and displays the result.

## Jumper Setting Diagram

Clicking Jumper  Setting  Diagram under  the Options menu opens the jumper setting window ( Figure  5 ).  The software  displays  the  jumper  positions  based  on  the current SPI mode in the top silkscreen diagram. Changing the SPI mode updates the shunt positions in the diagram. The daisy-chain mode (SPI mode 2 and 3) requires two MAX22199 EV kits. The MAX22199 on the second EV kit needs to be connected to the MAX22199 on the first EV kit in daisy-chain mode and disconnected from the isolator on the second board.

## Register Map

The Register  Map tab  shows  all  MAX22199  registers information including the register name, address, value, read  or  write  accessibility,  and  the  register  description. The Value cell  can  be  changed  by  user  if  the  register is  writable.  Pressing  the Enter key  after  changing  the Value writes  to  the  register.  When  a  certain  register  is highlighted in the register list, the bits' information in this register are displayed in the Bits Description table. The bit Setting is configurable if the bit is writable, which triggers a write operation to its register.

Clicking  the Read  All button  reads  all  registers  and refreshes the window with current register values. Clicking the Write All button writes the current settings to all registers.

Figure 4. MAX22199 EV Kit Software-CRC Calculator

<!-- image -->

Evaluates: MAX22199

│

Evaluates: MAX22199

Figure 5. MAX22199 EV Kit Software-Jumper Setting Diagram

<!-- image -->

## Detailed Description of Hardware

The  MAX22199 EV kit  provides  a  proven  layout  for  an 8-channel galvanically isolated digital input solution using the MAX22199 and the MAX14483.

## SPI Interface

The  EV  kit  software  communicates  over  USB  to  the SPI  interface  and  supports  full  10MHz  clock  rate  for the  MAX22199.  The  EV  kit  includes  a  standard  Pmodcompatible 12-pin header to connect to an external adapter board (MCU or FPGA). If the user wants to interface to their own microcontroller or FPGA, simply connect to the Pmod connector  PMOD1,  open  all  SW1  switches,  and  provide the user-supplied firmware.

## READY Signal

The MAX22199 READY signal is an open-drain active-low output. READY going low indicates that the MAX22199 is powered up and ready for operation. The READY output from  U1  is  connected  directly  to  the  MAX14483 IRDY input.  When  the READY signal  is  low,  the IRDY signal is low, and if the MAX14483 is powered up normally, the SAA signal on the logic-side is high and notifies the microcontroller  that  the  field-side  is  ready  for  operation.  The SAA signal is low when the READY signal is high. A pullup resistor is required on the READY pin of the MAX22199.

## Power Supplies

The EV kit has two power domains, the 'logic side' which is  powered  from  USB  supplied  power  (3V3\_USB  and UGND),  and  the  'field  side'  which  is  typically  powered from an external 24V DC supply connected to the VDD24 and  GND  test  points.  A  MAX1556  DC-DC  converter converts the 5V USB supply to a regulated 3.3V (3V3\_ USB)  supply,  which  powers  the  EV  kit  logic  side.  The MAX22199 has integrated regulator to provide low voltage output V DD  (3.3V, nominal), which is used to set the

## Evaluates: MAX22199

SPI logic interface level (V L ) and to power the field side of the digital isolator if J1 is in 1-2 position (see Table 1 ).

Alternatively,  if  an  external  24V  supply  is  not  available, the field side can be powered using an external 3.0V to 5.5V supply through the V DD  pin of the MAX22199 and leaving the V DD24  pin unconnected. In this case, connect an  external  3.0V  to  5.5V  supply  to  VDD  and  GND  test points with VDD24 test point unconnected (see Table 1 for test points).

In the case that an external microcontroller is used for the PMOD1 connector (SW1 contacts all open), the logic supply (V L ) of the MAX22199 is provided by an external microcontroller supply. Remove jumper J1 (see Table 1 ),  connect a 3.0V to 5.5V external supply to pins 6 and 12 on connector PMOD1, and populate R20 with a 0Ω resistor.

## Type 1, 3 Inputs and Surge Protection

The  MAX22199 senses the  state  (high  or  low)  of  eight digital  inputs.  U1  is  designed  to  support  the  trip  points (voltage and current) to satisfy the requirements of IEC 61131-2  Type  1  and  Type  3  inputs.  Resistor  R10  sets the current limit value at 2.35mA (typ) and input resistors R1-R8 set the voltage threshold to ensure compliance. The input resistors  R1-R4 are 1.5kΩ, 1.5W pulse with -standing thick film 2512 resistors to support IEC 610004-5  Surge  Tolerance  at  ±2kV  line-to-ground  without  the requirements  for  an  external  TVS  diode  on  each  input. The input resistors R5-R8 are 1.5kΩ, 0.1W 0603 resistors with a SMAJ33CA TVS diode (D2-D5) on each field input to support IEC 61000-4-5 Surge Tolerance at ±1kV lineto-ground.  Channel  1-4  and  Channel  5-8  demonstrate two options for surge protection on the MAX22199 field inputs. A separate LED (LED1-LED8) for each input port indicates the status of each input.

## Galvanic Isolation

The MAX22199 EV kit uses a digital isolator to provide galvanic isolation between the logic and field sides. The MAX14483  is  a  6-channel  digital  isolator,  providing  a single-chip solution when interfacing to a MAX22199. The isolator has two power supplies (V DDA  and V DDB ) which operate between 1.71V to 5.5V and provide voltage translation as well as galvanic isolation. The 'logic side' V DDB of  the  isolator  is  powered  from  3V3\_USB  and  UGND while the 'field side' V DDA  of the isolator is powered from VL and GND. When testing isolation performance, care should be taken not to have a multi-channel oscilloscope ground connection to both GND and UGND.

Protective Earth is provided on the lower-right corner of the  EV  kit  with  safety  rated  Y  capacitors  between  field ground (GND) and Earth (C33), and between field ground (GND)  and  logic  ground  (UGND)  (C34)  to  improve  the high-voltage, fast transient performance.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22199EVKIT# | EV KIT |

#Denotes RoHS compliant.

## IEC 61000-4 Transient Immunity Compliance

The  typical  application  for  the  MAX22199  requires  it  to pass basic transient immunity standards as defined by IEC 61000-4-x, covering -2 for Electrostatic Discharge (ESD), -4  for  Electrical  Fast  Transient/Burst  (EFT),  and  -5  for Surge Immunity. The MAX22199 EV kit includes circuitry to support testing to these standards to support ±2kV lineto-ground  and  line-to-line  surge,  ±8kV  contact  ESD,  and ±15kV  air-gap  ESD  at  the  field  input.  TVS  diode  (D1) provides protection from surge and ESD voltages applied through the VDD24 test point. Diode D6 blocks the reverse current at the V DD24  pin of the MAX22199 during negative  surges.  To  achieve  the  best  surge  performance  on the field input, place a minimum 1kΩ pulse-withstanding resistor between the field input and the device input pin. C33 is a 3300pF safety rated Y capacitor placed between Protective Earth (PE) and field ground (GND) to improve transient immunity (EFT). C34 is a 1000pF safety rated Y  capacitor  connected  between  the  field  ground  (GND) and logic ground (UGND) across the isolation barrier. For systems where PE and UGND are bonded together, the user can install the resistor R38.

## MAX22199 EV Kit Bill of Materials

|   ITEM | REF_DES                                                      | DNI/DNP   |   QTY | MFG PART #                                                                                        | MANUFACTURER                        | VALUE            | DESCRIPTION                                                                                                              | COMMENTS   |
|--------|--------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------------|-------------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | 3V3_USB, VDD, VDD24, VL                                      | -         |     4 | 5010 KEYSTONE                                                                                     | 5010 KEYSTONE                       | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |            |
|      2 | C1, C13, C29                                                 | -         |     3 | CL21B106KOQNNN; GRM21BZ71C106KE15; GMC21X7R106K16NT                                               | SAMSUNG;MURATA;CAL-CHIP             | 10UF             | CAP; SMT (0805); 10UF; 10%; 16V; X7R; CERAMIC                                                                            |            |
|      3 | C2                                                           | -         |     1 | C1608X7R1H474K080AC                                                                               | TDK                                 | 0.47UF           | CAP; SMT (0603); 0.47UF; 10%; 50V; X7R; CERAMIC                                                                          |            |
|      4 | C3                                                           | -         |     1 | C1608C0G2A102J080AA; C0603C102J1GAC                                                               | TDK;KEMET                           | 1000PF           | CAP; SMT (0603); 1000PF; 5%; 100V; C0G; CERAMIC                                                                          |            |
|      5 | C4                                                           | -         |     1 | C0603C103K2RAC                                                                                    | KEMET                               | 0.01UF           | CAP; SMT (0603); 0.01UF; 10%; 200V; X7R; CERAMIC                                                                         |            |
|      6 | C5                                                           | -         |     1 | C2012X5R1C226K125AC                                                                               | TDK                                 | 22UF             | CAP; SMT (0805); 22UF; 10%; 16V; X5R; CERAMIC                                                                            |            |
|      7 | C6, C7, C10, C12, C14, C16-C22, C24, C28, C30, C32, C35, C99 | -         |    18 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K               | YAGEO;MURATA;TAIYO YUDEN;AVX;MURATA | 0.1UF            | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                          |            |
|      8 | C8, C23, C25                                                 | -         |     3 | TMK212AB7475K; CGJ4J1X7R1E475K125AC; C2012X7R1E475K125AB; CGA4J1X7R1E475K125AC; GRM21BZ71E475KE15 | TAIYO YUDEN;TDK;TDK; TDK;MURATA     | 4.7UF            | CAP; SMT (0805); 4.7UF; 10%; 25V; X7R; CERAMIC                                                                           |            |
|      9 | C11                                                          | -         |     1 | 08051C105K4Z2A                                                                                    | AVX                                 | 1UF              | CAP; SMT (0805); 1UF; 10%; 100V; X7R; CERAMIC                                                                            |            |
|     10 | C15, C31, C36                                                | -         |     3 | UMK107AB7105KA; CC0603KRX7R9BB105                                                                 | TAIYO YUDEN;YAGEO                   | 1UF              | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                             |            |
|     11 | C26, C27                                                     | -         |     2 | C0603C0G500-180JNE; C1608C0G1H180J080AA; GRM1885C1H180J                                           | VENKEL LTD.;TDK;MURATA              | 18PF             | CAP; SMT (0603); 18PF; 5%; 50V; C0G; CERAMIC                                                                             |            |
|     12 | C33                                                          | -         |     1 | VJ2220Y332KXUSTX1; GA355QR7GF332KW01                                                              | VISHAY VITRAMON;MURATA              | 3300PF           | CAP; SMT (2220); 3300PF; 10%; 250V; X7R; CERAMIC                                                                         |            |
|     13 | C34                                                          | -         |     1 | VJ2220A102KXUSTX1                                                                                 | VISHAY VITRAMON                     | 1000PF           | CAP; SMT (2220); 1000PF; 10%; 250V; C0G; CERAMIC                                                                         |            |
|     14 | CONN1                                                        | -         |     1 | PJ-202AH                                                                                          | CUI INC.                            | PJ-202AH         | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                         |            |
|     15 | CSB, FAULTB, LATCHB, READYB, REFDI, SCLK, SDI, SDO           | -         |     8 | 5014                                                                                              | KEYSTONE                            | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     16 | D1-D5                                                        | -         |     5 | SMAJ33CA                                                                                          | VISHAY GENERAL SEMICONDUCTOR        | 33V              | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A                                                                            |            |
|     17 | D6                                                           | -         |     1 | MMBD6050LT1G                                                                                      | ON SEMICONDUCTOR                    | MMBD6050LT1G     | DIODE; SWT; SMT (SOT-23); PIV=70V; IF=0.2A                                                                               |            |
|     18 | EARTH                                                        | -         |     1 | 5012                                                                                              | KEYSTONE                            | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
|     19 | FIELD_RDY, LED_READYB, LED_USB, LOGIC_RDY                    | -         |     4 | LTST-C193KSKT-5A                                                                                  | LITE-ON ELECTRONICS INC.            | LTST-C193KSKT-5A | DIODE; LED; YELLOW; SMT (0603); VF=2V; IF=0.005A                                                                         |            |
|     20 | GND_TP1- GND_TP5, UGND                                       | -         |     6 | 5011                                                                                              | KEYSTONE                            | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
|     21 | IN1-IN8                                                      | -         |     8 | 5013                                                                                              | KEYSTONE                            | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     22 | J1                                                           | -         |     1 | PCC02SAAN                                                                                         | SULLINS                             | PCC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |            |
|     23 | J2, J3                                                       | -         |     2 | PCC03SAAN                                                                                         | SULLINS                             | PCC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |            |
|     24 | L1, L3, L4                                                   | -         |     3 | BLM21PG331SN1                                                                                     | MURATA                              |                  | 330 INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL=+/-25%; 1.5A                                                            |            |
|     25 | L2                                                           | -         |     1 | B82432T1332K000                                                                                   | TDK                                 | 3.3UH            | INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=+/-10%; 0.9A                                                              |            |
|     26 | LED1-LED8                                                    | -         |     8 | LTST-C193KGKT-5A                                                                                  | LITE-ON ELECTRONICS INC.            | LTST-C193KGKT-5A | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; - 55 DEGC TO +85 DEGC                               |            |

## Evaluates: MAX22199

## MAX22199 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                          | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                                | VALUE             | DESCRIPTION                                                                                                          | COMMENTS   |
|--------|----------------------------------|-----------|-------|------------------------------------------------------------------------------------|---------------------------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------|------------|
| 27     | LED_FAULTB                       | -         |     1 | LTST-C193KRKT-2A                                                                   | LITE-ON ELECTRONICS INC.                    | LTST-C193KRKT-2A  | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF=2.2V; IF=0.002A                                            |            |
| 28     | MTH1-MTH4                        | -         |     4 | 9032                                                                               | KEYSTONE                                    | 9032              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                            |            |
| 29     | PMOD1                            | -         |     1 | TSW-106-08-S-D-RA                                                                  | SAMTEC                                      | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGH                                                                            |            |
| 30     | R1-R4                            | -         |     4 | RPC2512JT1K50                                                                      | STACKPOLE ELECTRONICS INC.                  | 1.5K              | RES; SMT (2512); 1.5K; 5%; +/-100PPM/DEGC; 1.5000W;                                                                  |            |
| 31     | R5-R8                            | -         |     4 | CRCW06031K50FK                                                                     | VISHAY DALE                                 | 1.5K              | RES; SMT (0603); 1.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                   |            |
| 32     | R9                               | -         |     1 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL                                     | VISHAY DALE;PANASONIC                       |                   | 100 RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W                                                                |            |
| 33     | R10                              | -         |     1 | ERJ-3EKF7501; CRCW06037K50FK                                                       | PANASONIC;VISHAY                            | 7.5K              | RES; SMT (0603); 7.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                   |            |
| 34     | R11, R14                         | -         |     2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                       | VISHAY DALE;ROHM                            |                   | 10 RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                  |            |
| 35     | R12, R13, R15, R17, R37, R40-R42 | -         |     8 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE; PANASONIC;YAGEO                | 10K               | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |            |
| 36     | R16                              | -         |     1 | CRCW06032K20FK                                                                     | VISHAY DALE                                 | 2.2K              | RES; SMT (0603); 2.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                   |            |
| 37     | R18                              | -         |     1 | CRCW060315K0FK                                                                     | VISHAY DALE                                 | 15K               | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |            |
| 38     | R19                              | -         |     1 | CRCW060312K0FK                                                                     | VISHAY DALE                                 | 12K               | RES; SMT (0603); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |            |
| 39     | R29-R35                          | -         |     7 | CRCW060320R0FK; ERJ-3EKF20R0                                                       | VISHAY DALE;PANASONIC                       |                   | 20 RES; SMT (0603); 20; 1%; +/-100PPM/DEGC; 0.1000W                                                                  |            |
| 40     | R39                              | -         |     1 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC          | 100K              | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                   |            |
| 41     | SU1-SU3                          | -         |     3 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON;KYCON; SULLINS ELECTRONICS CORP.      | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED              |            |
| 42     | SW1                              | -         |     1 | 219-7MST                                                                           | CTS                                         | 219-7MST          | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000MOHM                |            |
| 43     | T1, T2                           | -         |     2 | 250-408                                                                            | WAGO                                        | 250-408           | CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON; STRAIGHT; 8PINS                            |            |
| 44     | U1                               | -         |     1 | MAX22199ATJ+                                                                       | MAXIM                                       | MAX22199ATJ+      | EVKIT PART - IC; RV49A-1A; PACKAGE CODE: T3255+6; PACKAGE OUTLINE: 21-0140; PACKAGE LAND PATTERN: 90-0603; TQFN32-EP |            |
| 45     | U2                               | -         |     1 | MAX1556ETB+                                                                        | MAXIM                                       | MAX1556ETB+       | IC; CONV; PWMSTEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                |            |
| 46     | U3                               | -         |     1 | 93LC66BT-I/OT                                                                      | MICROCHIP                                   | 93LC66BT-I/OT     | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                       |            |
| 47     | U4                               | -         |     1 | FT2232HQ                                                                           | FUTURE TECHNOLOGY DEVICES INTL LTD.         | FT2232HQ          | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                    |            |
| 48     | U5                               | -         |     1 | MAX14483AAP+                                                                       | MAXIM                                       | MAX14483AAP+      | IC; DISO; 6-CHANNEL; LOW-POWER; 3.75KVRMS SPI DIGITAL ISOLATOR; SSOP20                                               |            |
| 49     | X1                               | -         |     1 | ZX62RD-AB-5P8(30)                                                                  | HIROSE ELECTRIC CO LTD.                     | ZX62RD-AB-5P8(30) | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS      |            |
| 50     | Y1                               | -         |     1 | ABM7-12.000MHZ-D2Y-T                                                               | ABRACON                                     | 12MHZ             | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-20PPM; STABILITY = +/-30PPM                                                      |            |
| 51     | PCB                              | -         |     1 | MAX22199                                                                           | MAXIM                                       | PCB               | PCB:MAX22199                                                                                                         |            |
| 52     | C9                               | DNP       |     0 | GRM32EC72A106KE05                                                                  | MURATA                                      | 10UF              | CAP; SMT (1210); 10UF; 10%; 100V; X7S; CERAMIC                                                                       |            |
| 53     | R21-R28, R43                     | DNP       |     0 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                       | VISHAY;ROHM SEMICONDUCTOR; PANASONIC;BOURNS |                   | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                        |            |
| 54     | R38                              | DNP       |     0 | CRCW25120000Z0EGHP                                                                 | VISHAY DRALORIC                             |                   | 0 RES; SMT (2512); 0; JUMPER; JUMPER; 1.5000W                                                                        |            |
| 55     | R20,                             | DNP       |     0 |                                                                                    | N/A                                         |                   |                                                                                                                      |            |
| TOTAL  | R36                              |           |   140 | N/A                                                                                |                                             | OPEN              | PACKAGE OUTLINE 0603 RESISTOR                                                                                        |            |

Evaluates: MAX22199

## MAX22199 Evaluation Kit

## MAX22199 EV Kit Schematics

<!-- image -->

│

## MAX22199 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX22199

## MAX22199 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX22199

## MAX22199 Evaluation Kit

## MAX22199 EV Kit PCB Layout

MAX22199 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX22199 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX22199 EV Kit PCB Layout-Top

<!-- image -->

MAX22199 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX22199 Evaluation Kit

## MAX22199 EV Kit PCB Layout (continued)

MAX22199 EV Kit PCB Layout-Bottom

<!-- image -->

MAX22199 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------|-----------------|
|                 0 | 10/21           | Release for Market Intro                                    | -               |
|                 1 | 3/25            | Corrected the IEC number in the General Description section | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│