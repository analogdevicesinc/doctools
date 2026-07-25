<!-- lastmod 2022-08-04 -->
## MAX22190 Evaluation System

## General Description

The MAX22190 evaluation system (EV system) provides the  hardware  and  software  necessary  to  evaluate  the MAX22190  Octal  Industrial  Digital  Input  device  with Diagnostic features. The MAX22190 EV kit has Pmod™ compatible  connector  for  SPI  communication.  The  EV system  includes  the  USB2PMB2#  adapter  board  that receives commands from a PC through the USB port to create  an  SPI  interface  for  communication  between  the software and the MAX22190 on the EV kit.

The EV system includes a graphical user interface (GUI) that  provides  communication  between  the  target  device and the PC. The MAX22190 EV kit has two MAX22190 devices (U1 and U2) that can operate in multiple modes, as shown in Figure 1:

- 1) Single-Channel Mode: The USB2PMB2# adapter connects to either U1 or U2 on the EV kit, depending on which channel is preferred, and selected using the on-board jumpers.
- 2) Independent Slave Mode: The USB2PMB2# adapter uses two chip-select signals ( CS1 and CS2 ) to control each chip through a single connector/GUI interface.
- 3) Daisy-Chain Mode: The USB2PMB2# adapter connects to both U1 and U2 through the MAX14483 Digital Isolator, and SDO from U1 connects to SDI of U2. Both U1 and U2 are controlled from a single SPI interface.

## EV System Contents

- MAX22190EVKIT#, including the MAX22190ATJ+
- USB2PMB2# Adapter Board
- Micro-USB Cable

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Pmod is a trademark of Digilent, Inc

## Features

- Easy Evaluation of the MAX22190
- EV Kit Logic Side is USB-Powered
- Configured for IEC 61131-2 Type 1, 3 and Type 2
- Independent Slave or Daisy-Chainable SPI Interface
- Galvanic Isolation using MAX14483 and MAX12931
- Robust Design ±2kV Surge Tolerant Line-to-Line
- Windows ®  10, Windows 8.1, Windows 7, and Windows XP ®  Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX22190

## MAX22190 EV Kit

<!-- image -->

## USB2PMB2 Adapter Board

<!-- image -->

│

Evaluates: MAX22190

## MAX22190 Evaluation System

## MAX22190 EV System

<!-- image -->

│

Evaluates: MAX22190

## MAX22190 Evaluation System

## System Block Diagram

<!-- image -->

│

Evaluates: MAX22190

Evaluates: MAX22190

Figure 1: MAX22190 EV Kit Operation Modes

<!-- image -->

## MAX22190 EV Kit Files

| FILE                        | DESCRIPTION         |
|-----------------------------|---------------------|
| MAX22190EVKitSetupV1.00.ZIP | Application Program |

## MAX22190 Evaluation System

## Quick Start

## Required Equipment

- MAX22190 EV kit
- USB2PMB2# adapter board
- Micro-USB cable
- 24V DC voltage supply
- Windows 10, Windows 8,1, Windows 7, Window XP PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  The  default jumper  settings  configure  the  EV  kit  to  operate  in  the Independent Slave mode using both U1 and U2. In this configuration,  the  EV  kit's  'logic  side'  is  powered  by +3.3V from USB2PMB2# adapter connected to X1 Pmod connector,  and the 'field side' is powered by the external DC supply connected to VDD24 and GND. U1 is configured for eight Type 1 or Type 3 inputs (Terminal Blocks T1 and T2) and U2 is configured for four Type 2 inputs (Terminal Blocks T3 and T4). Follow the steps below to verify the MAX22190 operation:

- 1) Verify all jumper settings are in default position from Table 1.
- 2) For initial testing, MAX22190 EV kit is powered from USB2PMB2# (+3.3V) from the Pmod connector and 24V at VDD24 and GND.
- 3) Visit www.maximintegrated.com to  download  the latest version of the EV kit software, MAX22190EVKitSetupV1.00.ZIP.
- 4) Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 5) Install  the  EV  kit  software  and  USB  driver  on  your computer by running the MAX22190EVKitSetupV1.00. exe program inside the temporary folder. A message box  asking Do  you  want  to  allow  the  following program to make changes to this computer? may appear. If so, click Yes .
- 6) The program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process, the installer will launch the installation for the FTDI Chip CDM drivers.
- 7) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish .  The  default  location  of the software is in the program files directory.
- 8) Connect the MAX22190 EV kit Pmod connector X1 to the connector on the USB2PMB2# adapter.
- 9) Connect the USB2PMB2# to the PC with the microUSB cable. Windows should automatically recognize the device and display a message near the System Icon menu indicating that the hardware is ready to use.
- 10)  Connect the DC power supply between the EV kit's VDD24\_TP and  GND\_TP1  test  points.  Set  the  DC power  supply  output  to  24V,  and  then  enable  the output.  Observe  that,  on  the  EV  kit,  the  FAULTB1, READYB1,  FAULTB2,  READYB2,  SBA,  and  SAA LEDs are on, indicating the EV kit is powered up.
- 11)  Once the hardware is ready to use, launch the EV kit software by opening its icon in the Start | Programs menu.  During the EV  kit software launch, two message  boxes  are  shown  to  indicate  the  default operation mode (Independent Slave mode), and U1 and U2 SPI mode (Mode 0). Click OK to  close  the message  boxes.  The  EV  kit  software  appears  as shown in Figure 2.
- 12)  Verify that the lower-right status bar indicates the EV kit hardware is Connected . If the status bar indicates Disconnected , from the Device menu, click Connect to Hardware . Then  select  a  device  in  the  list  or  use  the  default device already selected.
- 13)  Click Clear  POR button. Observe that POR status lights for U1 and U2 are changed to green, and FAULT Signal status light is also changed to green in the Configuration tab as shown in Figure 3.
- 14)  Observe that FAULTB1 and FAULTB2 LEDs on the EV kit are turned off.
- 15)  Click Read DI Continuously button. The EV kit software reads the U1 and U2 DI registers continuously. Connect the 24V DC voltage to one of the input test points,  for  example,  test  point  U1\_IN5.  The  corresponding Digital Inputs status light IN5 is changed to green from yellow to indicate U1 channel IN5 is high as shown in Figure 4.

## Evaluates: MAX22190

Evaluates: MAX22190

Figure 2. MAX22190 EV Kit Software Startup Window

<!-- image -->

## MAX22190 Evaluation System

Table 1. MAX22190 EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DEVICE    | DESCRIPTION                                                                                        |
|----------|------------------|-----------|----------------------------------------------------------------------------------------------------|
| POWER    |                  |           |                                                                                                    |
| J1       | 1 - 2*           | U1        | Connect external power supply to U1 VDD24                                                          |
| J1       | Open             | U1        | Use current meter to measure U1 VDD24 supply current                                               |
| J2       | 1 - 2*           | U1        | Connect external power supply to U1 VDDor connect U1 VDDoutput to the EV kit                       |
| J2       | Open             | U1        | Use current meter to measure U1 VDD supply current                                                 |
| J5       | 1 - 2*           | U1        | Connect power supply to U1 VL                                                                      |
| J5       | Open             | U1        | Use current meter to measure U1 VL supply current                                                  |
| J6       | 1 - 2 *          | U1        | Connect U1 VDD supply to U1 VL supply                                                              |
| J6       | Open             | U1        | Connect external power supply from VL1_TP test point to U1 VL                                      |
| J7       | 1 - 2            | U1 and U2 | Power both U1 and U2 by VDD with same external power supply                                        |
| J7       | Open*            | U1 and U2 | Power U1 and U2 seperately by VDD, or together by VDD24                                            |
| J8       | 1 - 2*           | U2        | Connect external power supply to U2 VDD24                                                          |
| J8       | Open             | U2        | Use current meter to measure U2 VDD24 supply current                                               |
| J9       | 1 - 2*           | U2        | Connect external power supply to U2 VDDor connect U2 VDDoutput to the EV kit                       |
| J9       | Open             | U2        | Use current meter to measure U2 VDD supply current                                                 |
| J12      | 1 - 2*           | U2        | Connect power supply to U2 VL                                                                      |
| J12      | Open             | U2        | Use current meter to measure U2 VL supply current                                                  |
| J13      | 1 - 2*           | U2        | Connect U2 VDD supply to U2 VL supply                                                              |
| J13      | Open             | U2        | Connect external power supply from VL2_TP test point to U2 VL                                      |
| SPI      |                  |           |                                                                                                    |
|          | 1 - 2            | U1        | U1 SPI Mode M1 = 1                                                                                 |
| J3       | 2 - 3*           | U1        | U1 SPI Mode M1 = 0                                                                                 |
| J4       | 1 - 2            | U1        | U1 SPI Mode M0 = 1                                                                                 |
| J4       | 2 - 3*           | U1        | U1 SPI Mode M0 = 0                                                                                 |
| J10      | 1 - 2            | U2        | U2 SPI Mode M1 = 1                                                                                 |
| J10      | 2 - 3*           | U2        | U2 SPI Mode M1 = 0                                                                                 |
|          | 1 - 2            | U2        | U2 SPI Mode M0 = 1                                                                                 |
| J11      | 2 - 3*           | U2        | U2 SPI Mode M0 = 0                                                                                 |
| J14      | 1 - 2*           | U1        | Connect U1 READY to U3 MAX14483 IRDY channel                                                       |
| J14      | Open             | U1        | Disconnect U1 READY from U3 MAX14483 IRDY channel                                                  |
| J15      | 1 - 2*           | U2        | Connect U2 READY to U3 MAX14483 IRDY channel                                                       |
| J15      | Open             | U2        | Disconnect U2 READY from U3 MAX14483 IRDY channel                                                  |
| J16      | 1 - 2*           | U1        | Connect U1 FAULT to U3 MAX14483 IFAULT channel                                                     |
| J16      | Open             | U1        | Disconnect U1 FAULT from U3 MAX14483 IFAULT channel                                                |
| J17      |                  |           |                                                                                                    |
| J17      | 1 - 2* Open      | U2        | Connect U2 FAULT to U3 MAX14483 IFAULT channel Disconnect U2 FAULT from U3 MAX14483 IFAULT channel |
| J18      | 1 - 2*           | U1 and U2 | Connect both U1 SDO and U2 SDO to U3 MAX14483 ISDO channel, used in Single                         |
| J18      | Open             | U1 and U2 | Channel mode or Independent Slave mode Disconnect U1 SDO and U2 SDO, used in Daisy-Chain mode      |

Evaluates: MAX22190

Table 1. MAX22190 EV Kit Jumper Settings (continued)

| JUMPER                                       | SHUNT POSITION                               | DEVICE                                       | DESCRIPTION                                                                                                       |
|----------------------------------------------|----------------------------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| J19                                          | 1 - 2                                        | U1 and U2                                    | Connect U2 SDI to U1 SDO, used in Daisy-Chain mode                                                                |
| J19                                          | 2 - 3*                                       | U1 and U2                                    | Connect both U1 SDI and U2 SDI to U3 MAX14483 OSDI channel, used in Single Channel mode or Independent Slave mode |
| J20                                          | 1 - 2                                        | U1 and U2                                    | Connect both U1 CS and U2 CS to U3 MAX14483 OCS channel, used in Daisy-Chain mode                                 |
| J20                                          | Open*                                        | U1 and U2                                    | Disconnect U1 CS and U2 CS , used in Single Channel mode or Independent Slave mode                                |
| TEST or PROBE POINTS (NEVER INSTALL JUMPERS) | TEST or PROBE POINTS (NEVER INSTALL JUMPERS) | TEST or PROBE POINTS (NEVER INSTALL JUMPERS) | TEST or PROBE POINTS (NEVER INSTALL JUMPERS)                                                                      |
| X2                                           | 1, 2                                         | VL, field-side logic supply                  | VL, field-side logic supply                                                                                       |
| X2                                           | 3                                            | CSB1, U1 chip-select CS                      | CSB1, U1 chip-select CS                                                                                           |
| X2                                           | 4                                            | CSB2, U2 chip-select CS                      | CSB2, U2 chip-select CS                                                                                           |
| X2                                           | 5                                            | SDI1, U1 MOSI                                | SDI1, U1 MOSI                                                                                                     |
| X2                                           | 6                                            | SDI2, U2 MOSI                                | SDI2, U2 MOSI                                                                                                     |
| X2                                           | 7                                            | SDO1, U1 MISO                                | SDO1, U1 MISO                                                                                                     |
| X2                                           | 8                                            | SDO2, U2 MISO                                | SDO2, U2 MISO                                                                                                     |
| X2                                           | 9                                            | SCLK, U1 and U2 serial clock                 | SCLK, U1 and U2 serial clock                                                                                      |
| X2                                           | 10                                           | LATCHB, U1 and U2 LATCH signal               | LATCHB, U1 and U2 LATCH signal                                                                                    |
| X2                                           | 11                                           | FAULTB1, U1 FAULT signal                     | FAULTB1, U1 FAULT signal                                                                                          |
| X2                                           | 12                                           | FAULTB2, U2 FAULT signal                     | FAULTB2, U2 FAULT signal                                                                                          |
| X2                                           | 13                                           | READYB1, U1 READY signal                     | READYB1, U1 READY signal                                                                                          |
| X2                                           | 14                                           | READYB2, U2 READY signal                     | READYB2, U2 READY signal                                                                                          |
| X2                                           | 15, 16                                       | GND, field-side ground                       | GND, field-side ground                                                                                            |

*Default position.

Table 2. MAX22190 EV Kit Jumper Settings for Different Operation Modes

| JUMPER   | SINGLE CHANNEL U1   | SINGLE CHANNEL U2   | INDEPENDENT SLAVE MODE*   | DAISY CHAIN MODE   |
|----------|---------------------|---------------------|---------------------------|--------------------|
| J3       | 2-3                 | 2-3                 | 2-3*                      | 1-2                |
| J4       | Don't Care          | Don't Care          | Don't Care*               | Don't Care         |
| J10      | 2-3                 | 2-3                 | 2-3*                      | 1-2                |
| J11      | Don't Care          | Don't Care          | Don't Care*               | Don't Care         |
| J14      | 1-2                 | Open                | 1-2*                      | 1-2                |
| J15      | Open                | 1-2                 | 1-2*                      | 1-2                |
| J16      | 1-2                 | Open                | 1-2*                      | 1-2                |
| J17      | Open                | 1-2                 | 1-2*                      | 1-2                |
| J18      | 1-2                 | Don't Care          | 1-2*                      | Open               |
| J19      | 2-3                 | 2-3                 | 2-3*                      | 1-2                |
| J20      | Open                | Open                | Open*                     | 1-2                |

*Default position.

Evaluates: MAX22190

│

## MAX22190 Evaluation System

## Detailed Description of Software

When the MAX22190 EV kit software starts, it automatically detects if the EV kit is connected to a PC and indicates it in the status bar at the bottom edge of the GUI. If the software does not recognize the USB2PMB2# adapter  board,  make  sure  that  the  software  and  all drivers are properly installed, check the USB connection, and go to the Device menu and select Search for Hardware option.  When  the  EV  kit  is  properly  connected,  the MAX22190 devices (U1 and U2) are read and all controls are updated (see Figure 2).

Evaluates: MAX22190

The main window of the EV kit software contains three groups  of  controls: U1  Status  &amp;  Configuration , U2 Status &amp; Configuration , and general controls for the EV kit. The U1 or U2 Status and Configuration box provides the controls to directly configure MAX22190 features such as reading Digital Inputs, Wire-Break configuration, Input Filter configuration, fault status reporting, etc. The general controls for the EV kit allow the user to select the SCLK speed,  EV  kit  operation  mode,  U1  and  U2  SPI  modes, LATCH signal level, etc. Next to the Configuration tab, the Register Map tab lists all registers in the MAX22190 and provides direct read and write access to all the control bits (not implemented until software rev. 2.0).

Figure 3. MAX22190 EV Kit Software-Clear POR

<!-- image -->

## MAX22190 Evaluation System

If  the  MAX22190EVKIT#  hardware  is  not  connected automatically, the Device menu provides the functions to connect or disconnect to the hardware by choosing detected USB2PMB2# serial numbers. Under the Options menu, a CRC Calculator (Figure 6) is provided to calculate the

Evaluates: MAX22190

5-bit  CRC  code  based  on  the  data  frame  provided  by the user. The jumper positions are shown in the Jumper Setting Diagram (Figure 7) under Options menu based on selectable operation mode and SPI mode.

Figure 4. MAX22190 EV Kit Software-Read DI Continuously

<!-- image -->

│

## MAX22190 Evaluation System

## Configuration Tab

The Configuration tab  provides  an  interface  for  configuring the  MAX22190  from  a  functional  perspective.  Before sending the commands to the MAX22190s, select desired Operation mode and SPI mode, and configure the jumpers according to the Table 1. If Single Channel mode U1

Evaluates: MAX22190

is  selected,  all  U2  controls  are  disabled  (Figure  5),  and vice-versa.  The  status  and  configuration  box  provides the controls for Digital Inputs reading, DI channel enable, Wire-Break status, Wire-Break enable, fault status reporting, FAULT pin  configuration,  input  filter  configuration, CRC value calculation, etc.

Figure 5. MAX22190 EV Kit Software-Single Channel Mode U1

<!-- image -->

Figure 6. MAX22190 EV Kit Software-CRC Calculator

<!-- image -->

│

Evaluates: MAX22190

Figure 7. MAX22190 EV Kit Software-Jumper Setting Diagram

<!-- image -->

## MAX22190 Evaluation System

After power up, the MAX22190 FAULT pin is low and the POR bit in the FAULT1 register is set, indicating  that  a power-on-reset  has  happened  and  all  registers  are  set to default (Figure 2). After clicking the Clear POR button, the GUI clears the POR bit in the FAULT1 register. The FAULT pin is pulled high and FAULTB1 or FAULTB2 LEDs are turned off after clearing the POR (Figure 3).

The Read All button reads the MAX22190 registers and refresh all the controls with current setting. The Read DI and WB and Read DI Continuously buttons read Digital Input  and  Wire  Break  registers  value  and  update  the corresponding controls. The Read FAULT Status button reads the FAULT1 and FAULT2 registers, polls OFAULT and SAA status and update the corresponding controls.

## CRC Calculator

Clicking CRC  Calculator under  the Options menu will  open  the  CRC  calculation  window  (Figure  6).  The software  calculates  the  5-bit  CRC  code  based  on  the 19-bit  data  or  24-bit  data  (5  LSB  bits  are  ignored)  and display the result.

## Jumper Setting Diagram

Clicking Jumper  Setting  Diagram under  the Options menu will open the jumper setting window (Figure 7). The software displays the jumper position based on the current Operation mode and SPI mode in the top silkscreen diagram.  Changing  the  Operation  mode  and  SPI  mode updates the shunt positions in the diagram. Please note that  SPI  mode  should  be  set  to  Mode  0  or  Mode  1  in Single  Channel  mode or Independent Slave mode, and set to Mode 2 or Mode 3 in Daisy-Chain mode. The DaisyChain mode is not implemented until software version 2.0.

## Register Map

The Register  Map tab  shows  all  MAX22190  registers information including the register name, address, value, read  or  write  accessibility,  and  the  register  description. The Value cell can be changed by user if the register is writable.  By  pressing  the Enter key  after  changing  the Value will  write  to  the  register.  When  certain  register  is highlighted in the register list, the bits' information in this register  will  be  displayed  in  the Bits Description table. The bit Setting is configurable if the bit is writable, which will trigger a write operation to its register.

Clicking  the Read  All button  reads  all  registers  and refreshes the window with register settings. Clicking the Write All button writes the current settings to all registers.

The Register Map tab is not implemented until software version 2.0.

## Detailed Description of Hardware

The  MAX22190  EV  kit  provides  a  proven  layout  for  a 16-input  Galvanically  Isolated  Digital  Input  solution  using two MAX22190s, and a MAX14483. Two MAX22190s are included with flexibility for operation modes making it easier to  evaluate system performance of the MAX22190. This includes different SPI interface modes as well as support for all three types of IEC 61131-2 sensor inputs.

## SPI Interface

The  EV  kit  software  communicates  over  USB  to  the SPI interface and supports full 10MHz clock rate for the MAX22190. The SPI interface can communicate to a single device, or both devices can be daisy-chained. Three SPI operation  modes  are  supported  by  the  EV  kit:  Single Channel  mode,  Independent  Slave  mode,  and  DaisyChain mode. Table 2 describes how to configure the EV kit  jumpers to operate in different operation modes. The EV  kit  uses  standard  Pmod-compatible  12-pin  header to  connect  to  an  external  adapter  board  (USB2PMB2#) which  provides  an  interface  to  a  PC  with  an  USB  port. If the users wish to interface to their own Microcontroller or  FPGA,  simply  hardwire  the  SPI  signals  to  the  Pmod connector X1.

## READY Signal

The MAX22190 READY signal is an open-drain active-low output. READY going low indicates that the MAX22190 is powered up and ready for operation. The READY output from  U1  and  U2  are  shorted  together  and  connected directly  to  the  MAX14483 IRDY input.  When one of the READY signals is low, the IRDY signal is low, and if the MAX14483 is  powered  up  normally,  the  SAA  signal  on the  logic-side  notifies  the  microcontroller  that  the  fieldside  is  ready  for  operation.  Since  the READY signal  is an  open-drain  output,  the IRDY pin  is  pulled  low  when one of the READY signals is low. To make sure both U1 and U2 are ready before the IRDY goes low, an OR gate can be added between the READY signals from U1 and U2. Alternatively, after the SAA signal notifies the microcontroller, SPI commands are sent to both U1 and U2 to make sure that both devices are ready for operation.

## Power Supplies

The  EV  kit  has  two  power  domains,  the  'logic  side' which is powered from USB supplied power (VUSB and GNDL),  and  the  'field  side'  which  is  typically  powered from an external 24V DC supply connected to VDD24 and GND. MAX22190 has integrated regulator to provide low voltage output V DD  (3.3V, nominal) to power the field side of the digital isolators (VL). Alternatively, if an external 24V supply is not available, the field side can be powered using an external 3.0 - 5.5V supply through the VDD pin of the MAX22190 and leaving VDD24 pin floating (refer to Table 1  for  jumper  settings).  The  USB2PMB2#  adapter  board converts  the  USB  5V  supply  to  a  regulated  +3.3V supply, which powers the EV kit logic side. Alternatively, if an external microcontroller is used, connect 3.0 - 5.5V external supply to test points VUSB\_TP and GNDL\_TP. The  EV  kit  should  be  powered  from  two  independent isolated power supplies to evaluate the galvanic isolation. For  evaluating  the  electrical  parameters  of  the  device without any isolation between the two sides, a single dualoutput power supply can also be used.

## Type 1, 3 Inputs (U1)

The  MAX22190 senses the  state  (high  or  low)  of  eight digital  inputs.  U1  is  designed  to  support  the  trip  points (voltage and current) to satisfy the requirements of IEC 61131-2 Type 1 and Type 3 inputs. Resistor R10 sets the current  limit  value  at  2.35mA  and  input  resistors  R1-R8 set the voltage threshold to ensure compliance. The input resistors R1-R8 are 1.5kΩ, 1W MELF resistors to support IEC 61000-4-5 Surge Tolerance at ±1kV line-to-ground. A separate LED for each input port indicates the status of each input.

## Type 2 Inputs (U2)

Type 2 inputs require higher current limits (6mA minimum) and  U2  is  configured  to  support  four  Type  2  Inputs  by using two MAX22190 inputs in parallel. The current limit for each channel is set to a nominal 3.39mA through resistor  R29.  To  set  the  correct  voltage  threshold,  R31-R38 are 1kΩ, 1W MELF resistors. Resistors R39-R42 are 0Ω to  create  a  pair  of  inputs.  By  changing  the  value  of  the resistor R29, the current threshold can be set to a different value as desired. A separate LED for each input port indicates the status of the inputs.

## Galvanic Isolation

The MAX22190 EV kit uses two digital isolators to provide galvanic isolation between the logic and field sides. The MAX14483 is a 6-channel digital isolator providing a single-chip solution when interfacing to a single MAX22190, or two MAX22190s connected in Daisy-Chain mode. The 2-channel  MAX12931  is  required  in  Independent  Slave mode to isolate  a  second  chip  select  ( CS )  signal.  Both isolators  have  two  power  supplies  (VDDA  and  VDDB) which operate between 1.71 - 5.5V and provide voltage translation as well as galvanic isolation. The 'logic side' VDDB of each isolator is powered from VUSB and GNDL while  the  'field  side'  VDDA  of  each  isolator  is  powered from VL and GND. The PCB layout ensures correct creepage  and  clearance  rules  are  followed.  Connector  X2  is provided  to  allow  easy  probing  of  digital  signals  on  the field  side  of  the  isolation  barrier.  When  testing  isolation performance, care should be taken not to have a multichannel  oscilloscope  ground  connection  to  both  GND and GNDL.

Protective Earth is provided on the lower-right corner of the  EV  kit  with  safety  rated  Y  capacitors  between  field ground (GND) and Earth (C38), and between field ground (GND)  and  logic  ground  (GNDL)  (C39),  to  improve  the high-voltage, fast transient performance.

## IEC 61000-4 Immunity Compliance

The  typical  application  for  the  MAX22190  requires  it  to pass  basic  transient  immunity  standards  as  defined  by IEC  61000-4-x,  covering  -2  for  Electrostatic  Discharge (ESD), -4 for Electrical Fast Transient/Burst (EFT), and -5 for Surge Immunity. MAX22190 EV kit includes circuitry to support testing to these standards to support ±2kV Line-toLine Surge, ±8kV Contact ESD, and ±15kV Air Gap ESD. MELF Resistor  R9  and  TVS  D1  provide  protection  from Surge  and  ESD  voltage  applied  through  VDD24.  Input filter  capacitors  can  reduce  surge  performance.  It  is  not recommended to populate input filter capacitors (C1-C8, C16-C23) if the highest surge immunity performance is required. To achieve the best surge performance, place a  minimum  1kΩ  pulse  withstanding  resistor  between the field input and the device input pin. C38 is a 3300pF safety rated Y capacitor placed between Protective Earth (PE) and field ground (GND) to improve transient immunity (EFT). C39 is a 1000pF safety rated Y capacitor connected  between  field  ground  and  logic  ground  (GNDL) (across the isolation barrier). For systems where PE and GNDL are bonded together, the user can install the resistor R70. Both C39 and R70 are provided with the EV kit.

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX22190EVKIT# | EV Kit    |
| MAX22190EVSYS# | EV System |

#Denotes RoHS compliant.

The MAX22190EVSYS# includes the MAX22190EVKIT# and USB2PMB2#.

## MAX22190 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                    | DNI/DNP   |   QTY | MFG PART #                           | MANUFACTURER                 | VALUE            | DESCRIPTION                                                                                                              | COMMENTS   |
|--------|----------------------------------------------------------------------------|-----------|-------|--------------------------------------|------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C10, C12, C14, C24, C26, C28, C30, C32, C34, C36                           | -         |    10 | CC0603KRX7R0BB104                    | YAGEO                        | 0.1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
|      2 | C11, C15, C25, C29                                                         | -         |     4 | C2012X7S2A105K125; GRJ21BC72A105KE11 | TDK;MURATA                   | 1UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                |            |
|      3 | C13, C27                                                                   | -         |     2 | UMK107AB7105KA                       | TAIYO YUDEN                  | 1UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |            |
|      4 | C31, C33, C35, C37                                                         | -         |     4 | GRM21BZ71E106KE15                    | MURATA                       | 10UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |            |
|      5 | C39                                                                        | -         |     1 | GA352QR7GF102KW01                    | MURATA                       | 1000PF           | CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC CHIP                                                                    |            |
|      6 | D1                                                                         | -         |     1 | SMAJ33CA                             | VISHAY GENERAL SEMICONDUCTOR | 33V              | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A                                                                            |            |
|      7 | EARTH_TP                                                                   | -         |     1 | 5012                                 | KEYSTONE                     | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
|      8 | FAULTB1, FAULTB2                                                           | -         |     2 | LTST-C193KRKT-2A                     | LITE-ON ELECTRONICS INC.     | LTST-C193KRKT-2A | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF=2.2V; IF=0.002A                                                |            |
|      9 | GNDL_TP, GND_TP1-GND_TP6                                                   | -         |     7 | 5011                                 | KEYSTONE                     | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
|     10 | J1, J2, J5-J9, J12-J18, J20                                                | -         |    15 | PEC02SAAN                            | SULLINS                      | PEC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |            |
|     11 | J3, J4, J10, J11, J19                                                      | -         |     5 | PEC03SAAN                            | SULLINS ELECTRONICS CORP.    | PEC03SAAN        | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                             |            |
|     12 | M0_TP1, M0_TP2, M1_TP1, M1_TP2, REFDI_TP1, REFDI_TP2, REFWB_TP1, REFWB_TP2 | -         |     8 | 5014                                 | KEYSTONE                     | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     13 | R1-R8                                                                      | -         |     8 | CMB02070X1501G                       | VISHAY BEYSCHLAG             | 1.5K             | RESISTOR; SMT; 1.5K OHM; 2%; 1W; CARBON FILM                                                                             |            |
|     14 | R9                                                                         | -         |     1 | CMB02070X1500G                       | VISHAY BEYSCHLAG             |                  | 150 RES; SMT; 150; 2%;1W                                                                                                 |            |
|     15 | R10                                                                        | -         |     1 | ERJ-3EKF7501V                        | PANASONIC                    | 7.5K             | RESISTOR; 0603; 7.5K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |            |
|     16 | R11, R30                                                                   | -         |     2 | ERJ-3EKF2402V                        | PANASONIC                    | 24K              | RESISTOR; 0603; 24K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   |            |
|     17 | R12, R13, R43, R44, R62-R64, R69                                           | -         |     8 | CRG0603F10K                          | TE CONNECTIVITY              | 10K              | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                    |            |
|     18 | R14-R20, R45-R51, R65-R68                                                  | -         |    18 | CRCW060320R0FK; ERJ-3EKF20R0V        | VISHAY DALE; PANASONIC       |                  | 20 RESISTOR, 0603, 20 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                 |            |
|     19 | R29                                                                        | -         |     1 | CRCW06035K23FK                       | VISHAY DALE                  | 5.23K            | RESISTOR; 0603; 5.23K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |            |
|     20 | R31-R38                                                                    | -         |     8 | CMB02070X1001G                       | VISHAY BEYSCHLAG             | 1K               | RESISTOR; SMT; 1K OHM; 2%; 250PPM; 1.0W; CARBON FILM                                                                     |            |

Evaluates: MAX22190

## MAX22190 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                    | DNI/DNP   |   QTY | MFG PART #          | MANUFACTURER              | VALUE                              | DESCRIPTION                                                                                                                                           | COMMENTS   |
|--------|------------------------------------------------------------|-----------|-------|---------------------|---------------------------|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 21     | R39-R42                                                    | -         |     4 | CRCW25120000Z0EGHP  | VISHAY DRALORIC           | 0 RES; SMT (2512); 0; JUMPER; 1.5W | 0 RES; SMT (2512); 0; JUMPER; 1.5W                                                                                                                    |            |
| 22     | R60, R61                                                   | -         |     2 | CRCW060349R9FK      | VISHAY DALE               | 49.9                               | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                               |            |
| 23     | READYB1, READYB2, SAA, SBA                                 | -         |     4 | LTST-C193KSKT-5A    | LITE-ON ELECTRONICS INC.  | LTST-C193KSKT-5A                   | DIODE; LED; YELLOW; SMT (0603); VF=2V; IF=0.005A                                                                                                      |            |
| 24     | SU1-SU20                                                   | -         |    20 | STC02SYAN           | SULLINS ELECTRONICS CORP. | STC02SYAN                          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                               |            |
| 25     | T1-T4                                                      | -         |     4 | 1984675             | PHOENIX CONTACT           | 1984675                            | CONNECTOR; FEMALE; THROUGH HOLE; PCB TERMINAL BLOCK; RIGHT ANGLE; 8PINS                                                                               |            |
| 26     | U1, U2                                                     | -         |     2 | MAX22190ATJ+        | MAXIM INTEGRATED          | MAX22190ATJ+                       | EVKIT PART-IC; OCTAL INDUSTRIAL DIGITAL INPUT WITH DIAGNOSTICS; PACKAGE OUTLINE: 21-0140; PACKAGE CODE: T3255+6; LAND PATTERN NO.: 90-0603; TQFN32-EP |            |
| 27     | U1_IN1-U1_IN8, U2_IN1-U2_IN8                               | -         |    16 | 5125                | KEYSTONE                  | N/A                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                               |            |
| 28     | U1_LED1-U1_LED8, U2_LED1-U2_LED8                           | -         |    16 | LTST-C193KGKT-5A    | LITE-ON ELECTRONICS INC.  | LTST-C193KGKT-5A                   | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                                                             |            |
| 29     | U3                                                         | -         |     1 | MAX14483AAP+        | MAXIM                     | MAX14483AAP+                       | EVKIT PART - IC; MAX14483AAP+; 8-CHANNEL; LOWPOWER; 3.75KVRMS; SPI DIGITAL ISOLATOR; PACKAGE OUTLINE DRAWING: 21-0056; LAND PATTERN: 90-0094          |            |
| 30     | U4                                                         | -         |     1 | MAX12931BASA+       | MAXIM                     | MAX12931BASA+                      | EVKIT PART - IC; DISO; 1/1 CHANNEL; 25MBPS; DEFAULT HIGH; 3.75KVRMS DIGITAL ISOLATOR; NSOIC8                                                          |            |
| 31     | VDD1_TP, VDD2_TP, VDD24_TP, VL1_TP, VL2_TP, VL_TP, VUSB_TP | -         |     7 | 5013                | KEYSTONE                  | N/A                                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                              |            |
| 32     | X1                                                         | -         |     1 | TSW-106-08-S-D-RA   | SAMTEC                    | TSW-106-08-S-D-RA                  | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                                                             |            |
| 33     | X2                                                         | -         |     1 | PBC08DAAN           | SULLINS ELECTRONICS CORP. | PBC08DAAN                          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                                                     |            |
| 34     | PCB                                                        | -         |     1 | MAX22190            | MAXIM                     | PCB                                | PCB:MAX22190                                                                                                                                          | -          |
| 35     | MTH1-MTH4                                                  | DNI       |     4 | 1902B               | GENERIC PART              | N/A                                | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                                                  |            |
| 36     | MTH1-MTH4                                                  | DNI       |     4 | P440.375            | GENERIC PART              | N/A                                | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                                                     |            |
| 37     | C9                                                         | DNI       |     1 | GRM32EC72A106KE05   | MURATA                    | 10UF                               | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                            |            |
| 38     | C38                                                        | DNI       |     1 | VJ2220Y332KXUSTX1   | VISHAY VITRAMON           | 3300PF                             | CAP; SMT (2220); 3300PF; 10%; 250V; X7R; CERAMIC CHIP                                                                                                 |            |
| 39     | R70                                                        | DNI       |     1 | CRCW25120000Z0EGHP  | VISHAY DRALORIC           |                                    | 0 RES; SMT (2512); 0; JUMPER; 1.5W                                                                                                                    |            |
| 40     | C1-C8, C16-C23                                             | DNP       |     0 | C1608C0G2A102J080AA | TDK                       | 1000PF                             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                           |            |
| 41     | R21-R28, R52-R59                                           | DNP       |     0 | CRCW06030000Z0      | VISHAY DALE               |                                    | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                 |            |
| TOTAL  | TOTAL                                                      | 198       |   198 |                     |                           |                                    |                                                                                                                                                       |            |

│

## MAX22190 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX22190

## MAX22190 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX22190

## MAX22190 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX22190

## MAX22190 EV Kit PCB Layout

MAX22190 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX22190 EV Kit PCB Layout (continued)

MAX22190 EV Kit-Top

<!-- image -->

│

## MAX22190 EV Kit PCB Layout (continued)

MAX22190 EV Kit-Internal 2

<!-- image -->

│

## MAX22190 EV Kit PCB Layout (continued)

MAX22190 EV Kit-Internal 3

<!-- image -->

│

## MAX22190 EV Kit PCB Layout (continued)

MAX22190 EV Kit-Bottom

<!-- image -->

│

## MAX22190 EV Kit PCB Layout (continued)

MAX22190 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX22190 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/18            | Initial release                                                                                                | -               |
|                 1 | 10/18           | Updated Table 2                                                                                                | 9               |
|                 2 | 11/18           | Updated the System Block Diagram and the IEC 61000-4 Immunity Compliance section; add the READY Signal section | 4, 14-15        |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX22190