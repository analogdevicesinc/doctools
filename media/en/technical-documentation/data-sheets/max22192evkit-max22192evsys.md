<!-- lastmod 2022-08-04 -->
## MAX22192 Evaluation System

## General Description

The  MAX22192  evaluation  system  (EV  system)  provides  the  hardware  and  software  necessary  to  evaluate  the  MAX22192  octal  industrial  digital  input  device with diagnostic features and digital isolation. The MAX22192 evaluation kit (MAX22192EVKIT#) has Pmod™  compatible  connector  for  SPI  communication, but  does  not  include  the  USB2PMB2#  adapter  board. The EV system (MAX22192EVSYS#) includes both the MAX22192EVKIT# and the USB2PMB2# adapter board that receives commands from a PC through the USB port to create an SPI interface for communication between the software and the MAX22192 on the EV kit.

The EV system includes a graphical user interface (GUI) that  provides  communication  between  the  target  device and  the  PC.  The  MAX22192  EV  kit  has  a  MAX22192 device  (U1)  and  a  MAX22190  device  (U2),  which  is  an octal  industrial  digital  input  device  without  digital  isolation. The EV kit can be configured to operate in multiple modes, as shown in Figure 1:

- 1) Single-Channel Mode: The USB2PMB2# adapter communicates with either U1 or U2 on the EV kit, depending on which channel is preferred and selected using the on-board jumpers.
- 2) Independent Slave Mode: The USB2PMB2# adapter uses two chip-select signals ( CS1 and CS2 ) to control each chip through a single connector/GUI interface.
- 3) Daisy-Chain Mode: The USB2PMB2# adapter communicates with both U1 and U2 in SPI daisy-chain mode. The OSDI from U1 connects to SDI of U2, and the SDO of U2 connects to FSDI of U1. Both U1 and U2 are controlled from a single SPI interface.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Pmod is a trademark of Digilent, Inc

Evaluates: MAX22192

## EV System Contents

- MAX22192EVKIT#, including the MAX22192ARC+
- USB2PMB2# Adapter Board
- Micro-USB Cable

## Features

- Easy Evaluation of the MAX22192
- EV Kit Logic-Side is USB-Powered
- Configured for IEC 61131-2 Type 1 and 3, and Type 2
- Independent Slave or Daisy-Chain SPI Interface
- Galvanic Isolation using MAX22192 and MAX12931
- Robust Design ±1kV Surge Tolerant Line-to-Ground
- Windows ®  10, Windows 8.1, Windows 7, and Windows XP ®  Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX22192 Evaluation System

## MAX22192 EV Kit

<!-- image -->

## USB2PMB2 Adapter Board

<!-- image -->

│

## MAX22192 Evaluation System

## MAX22192 EV System

<!-- image -->

│

## MAX22192 Evaluation System

## System Block Diagram

<!-- image -->

│

Evaluates: MAX22192

Evaluates: MAX22192

Figure 1: MAX22192 EV Kit Operation Modes

<!-- image -->

## MAX22192 EV Kit Files

| FILE                        | DESCRIPTION         |
|-----------------------------|---------------------|
| MAX22192EVKitSetupV1.02.ZIP | Application Program |

## MAX22192 Evaluation System

## Quick Start

## Required Equipment

- MAX22192 EV kit
- USB2PMB2# adapter board
- Micro-USB cable
- 24V DC voltage supply
- Windows 10, Windows 8,1, Windows 7, Window XP PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  The  default jumper  settings  configure  the  EV  kit  to  operate  in  the independent slave mode using both U1 and U2. In this configuration, the EV kit 'logic side' is powered by +3.3V from the USB2PMB2# adapter connected to the X1 Pmod connector,  and the 'field side' is powered by the external DC supply connected to VDD24 and GND. U1 is configured for eight Type 1 or Type 3 inputs (terminal blocks T1 and T2) and U2 is configured for four Type 2 inputs (terminal blocks T3 and T4). Follow the steps below to verify the MAX22192 operation:

- 1) Verify all jumper settings are in default position from Table 1.
- 2) For initial testing, MAX22192 EV kit is powered from USB2PMB2# (+3.3V) from the Pmod connector and 24V at VDD24 and GND.
- 3) Visit www.maximintegrated.com to  download  the latest version of the EV kit software, MAX22192EVKitSetupV1.02.ZIP.
- 4) Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 5) Install  the  EV  kit  software  and  USB  driver  on  your computer by running the MAX22192EVKitSetupV1.02. exe program inside the temporary folder. A message box  asking Do  you  want  to  allow  the  following program to make changes to this computer? may appear. If so, click Yes .
- 6) The program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process, the installer launches the installation for the FTDI Chip CDM drivers.
- 7) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish .  The  default  location  of the software is in the program files directory.
- 8) Connect the MAX22192 EV kit Pmod connector X1 to the connector on the USB2PMB2# adapter.
- 9) Connect the USB2PMB2# to the PC with the microUSB cable. Windows should automatically recognize the device and display a message near the System Icon menu indicating that the hardware is ready to use.
- 10)  Connect the DC power supply between the EV kit's VDD24 and GND\_TP1 test points. Set the DC power supply output to 24V, and then enable the output. Observe  that,  on  the  EV  kit,  the  FAULTB1,  READYB1, LED\_24VM,   AFS,  FAULTB2,  and  READYB2  LEDs are on, indicating the EV kit is powered up.
- 11)  Once the hardware is ready to use, launch the EV kit software by opening its icon in the Start | Programs menu.  During the EV  kit software launch, two message  boxes  are  shown  to  indicate  the  default operation  mode  (independent  slave  mode),  and  U1 and U2 SPI Mode (Mode 0). Click OK to  close  the message  boxes.  The  EV  kit  software  appears  as shown in Figure 2.
- 12)  Verify that the lower-right status bar indicates the EV kit hardware is Connected . If the status bar indicates Disconnected , from the Device menu, click Connect to Hardware . Then  select  a  device  in  the  list  or  use  the  default device already selected.
- 13)  Click Clear  POR button. Observe that POR status  lights  for  U1  and  U2  are  changed  to  green, and the FAULT Signal status light is also changed to green in the Configuration tab as shown in Figure 3.
- 14)  Observe that FAULTB1 and FAULTB2 LEDs on the EV kit are turned off.
- 15)  Click Read DI Continuously button. The EV kit software reads the U1 and U2 DI registers continuously. Connect the 24V DC voltage to one of the input test points,  for  example,  test  point  U1\_IN3.  The  corresponding Digital Inputs status light IN3 is  changed to  green  from  yellow  to  indicate  U1  channel  IN3  is high as shown in Figure 4. On the EV kit board, the U1\_LED3 LED is also turned on.

## Evaluates: MAX22192

## MAX22192 Evaluation System

Figure 2. MAX22192 EV Kit Software Startup Window

<!-- image -->

## Table 1. MAX22192 EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DEVICE    | DESCRIPTION                                                                                               |
|----------|------------------|-----------|-----------------------------------------------------------------------------------------------------------|
| POWER    | POWER            | POWER     | POWER                                                                                                     |
| J1       | 1-2*             | U1        | Connect external power supply to U1 V DD24F                                                               |
| J1       | Open             | U1        | Use current meter to measure U1 V DD24F supply current                                                    |
| J2       | 1-2*             | U1        | Connect external power supply from VDD1 test point to U1 V DD3F or connect U1 V DD3F output to the EV kit |
| J2       | Open             | U1        | Use current meter to measure U1 V DD3F supply current                                                     |
| J5       | 1-2*             | U1        | Connect power supply to U1 V LF                                                                           |
| J5       | Open             | U1        | Use current meter to measure U1 V LF supply current                                                       |
| J6       | 1-2*             | U1        | Connect onboard VDD1 voltage supply to U1 V LF supply                                                     |
| J6       | Open             | U1        | Connect external power supply from VL test point to U1 V LF                                               |
| J7       | 1-2              | U1 and U2 | Power U1 by V DD3F and U2 by V DD with same external power supply                                         |
| J7       | Open*            | U1 and U2 | Power U1 byV DD3F and U2 byV DD separately, or power both U1 and U2 byV DD24                              |
| J8       | 1-2*             | U2        | Connect external power supply to U2 V DD24                                                                |
| J8       | Open             | U2        | Use current meter to measure U2 V DD24 supply current                                                     |
| J9       | 1-2*             | U2        | Connect external power supply from VDD2 test point to U2 V DD or connect U2 V DD output to the EV kit     |
| J9       | Open             | U2        | Use current meter to measure U2 V DD supply current                                                       |

│

## MAX22192 Evaluation System

## Table 1. MAX22192 EV Kit Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DEVICE    | DESCRIPTION                                                                                                                                |
|----------|------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| J12      | 1-2*             | U2        | Connect power supply to U2 V L                                                                                                             |
| J12      | Open             | U2        | Use current meter to measure U2 V L supply current                                                                                         |
| J13      | 1-2*             | U2        | Connect onboard VL voltage supply to U2 V L supply                                                                                         |
| J13      | Open             | U2        | Connect external power supply from VL2 test point to U2 V L                                                                                |
| J22      | 1-2              | U1        | Connect U1 EXTVM to U1 V DD3F to disable V DD24F voltage monitoring 24VL and 24VM faults if the device is powered by V DD3F                |
| J22      | 1-3              | U1        | Connect U1 EXTVM to external resistor divider (R72 and R73) to set external undervoltage thresholds for V DD24F                            |
| J22      | 1-4*             | U1        | Connect U1 EXTVM to GNDF to use internal undervoltage thresholds for V DD24F voltage monitoring                                            |
| J23      | 1-2*             | U1        | Connect external power supply from VUSB to U1 V DDL supply                                                                                 |
| J23      | Open             | U1        | Use current meter to measure U1 V DDL supply current                                                                                       |
| SPI      |                  |           |                                                                                                                                            |
| J3       | 1-2              | U1        | U1 SPI Mode M1 = 1                                                                                                                         |
| J3       | 2-3*             | U1        | U1 SPI Mode M1 = 0                                                                                                                         |
|          | 1-2              | U1        | U1 SPI Mode M0 = 1                                                                                                                         |
| J4       | 2-3*             | U1        | U1 SPI Mode M0 = 0                                                                                                                         |
| J10      | 1-2              | U2        | U2 SPI Mode M1 = 1                                                                                                                         |
| J10      | 2-3*             | U2        | U2 SPI Mode M1 = 0                                                                                                                         |
| J11      | 1-2              | U2        | U2 SPI Mode M0 = 1                                                                                                                         |
| J11      | 2-3*             | U2        | U2 SPI Mode M0 = 0                                                                                                                         |
| J14      | 1-2*             | U1        | Connect U1 OREADY to U1 IREADY isolation channel through an OR gate                                                                        |
| J14      | Open             | U1        | Disconnect U1 OREADY from U1 IREADY isolation channel through an ORgate                                                                    |
| J15      | 1-2*             | U2        | Connect U2 READY to U1 IREADY isolation channel through an OR gate                                                                         |
| J15      | Open             | U2        | Disconnect U2 READY from U1 IREADY isolation channel through an ORgate                                                                     |
| J16      | 1-2*             | U1        | Connect U1 FFAULT to U1 IFAULT isolation channel                                                                                           |
| J16      | Open             | U1        | Disconnect U1 FFAULT from U1 IFAULT isolation channel                                                                                      |
| J17      | 1-2*             | U2        | Connect U2 FAULT to U1 IFAULT isolation channel                                                                                            |
| J17      | Open             | U2        | Disconnect U2 FAULT from U1 IFAULT isolation channel                                                                                       |
| J18      | 1-2*             | U1 and U2 | Connect U2 SDO to U1 FSDO to share SDO isolation channel in the single- channel or independent slave mode                                  |
| J18      | 2-3              | U1 and U2 | Connect U2 SDO to U1 FSDI in the daisy-chain mode                                                                                          |
| J19      | 1-2*             | U1 and U2 | Connect U1 OSDI to U1 FSDI in the single-channel or independent slave mode                                                                 |
| J19      | 2-3              | U1 and U2 | Connect U1 OSDI to U2 SDI in the daisy-chain mode                                                                                          |
| J20      | 1-2*             | U1 and U2 | Disconnect U1 FCS from U2 CS , used in the single-channel or independent slave mode                                                        |
| J20      | 2-3              | U1 and U2 | Connect U1 FCS to U2 CS in the daisy-chain mode                                                                                            |
| J21      | 1-2*             | U1 and U2 | Connect U1 FSDI and U2 SDI together in the single-channel or independent slave mode; U1 FSDI is connected to U1 OSDI (J19 in 1-2 position) |
| J21      | 2-3              | U1 and U2 | Disconnect U1 FSDI from U2 SDI in the daisy-chain mode                                                                                     |

│

Evaluates: MAX22192

Table 1. MAX22192 EV Kit Jumper Settings (continued)

| JUMPER                                       | SHUNT POSITION                               | DEVICE                                                      | DESCRIPTION   |
|----------------------------------------------|----------------------------------------------|-------------------------------------------------------------|---------------|
| TEST or PROBE POINTS (NEVER INSTALL JUMPERS) | TEST or PROBE POINTS (NEVER INSTALL JUMPERS) | TEST or PROBE POINTS (NEVER INSTALL JUMPERS)                |               |
| X2                                           | 1, 2                                         | VL, field-side logic supply                                 |               |
| X2                                           | 3                                            | CSB1, U1 chip-select FCS                                    |               |
| X2                                           | 4                                            | CSB2, U2 chip-select CS                                     |               |
| X2                                           | 5                                            | SDI1, U1 FSDI                                               |               |
| X2                                           | 6                                            | SDI2, U2 SDI                                                |               |
| X2                                           | 7                                            | SDO1, U1 FSDO                                               |               |
| X2                                           | 8                                            | SDO2, U2 SDO                                                |               |
| X2                                           | 9                                            | SCLK, U1 and U2 field-side serial clock                     |               |
| X2                                           | 10                                           | LATCHB, U1 field-side FLATCH and U2 field-side LATCH signal |               |
| X2                                           | 11                                           | FAULTB1, U1 FFAULT signal                                   |               |
| X2                                           | 12                                           | FAULTB2, U2 FAULT signal                                    |               |
| X2                                           | 13                                           | READYB1, U1 OREADY signal                                   |               |
| X2                                           | 14                                           | READYB2, U2 READY signal                                    |               |
| X2                                           | 15, 16                                       | GND, field-side ground                                      |               |

*Default position

Table 2. MAX22192 EV Kit Jumper Settings for Different Operation Modes

| JUMPER   | SINGLE-CHANNEL U1   | SINGLE-CHANNEL U2   | INDEPENDENT SLAVE MODE*   | DAISY-CHAIN MODE   |
|----------|---------------------|---------------------|---------------------------|--------------------|
| J3       | 2 - 3               | 2 - 3               | 2 - 3 *                   | 1 - 2              |
| J4       | Don't Care          | Don't Care          | Don't Care*               | Don't Care         |
| J10      | 2 - 3               | 2 - 3               | 2 - 3*                    | 1 - 2              |
| J11      | Don't Care          | Don't Care          | Don't Care*               | Don't Care         |
| J14      | 1 - 2               | Open                | 1 - 2*                    | 1 - 2              |
| J15      | Open                | 1 - 2               | 1 - 2*                    | 1 - 2              |
| J16      | 1 - 2               | Open                | 1 - 2*                    | 1 - 2              |
| J17      | Open                | 1 - 2               | 1 - 2*                    | 1 - 2              |
| J18      | 1 - 2               | 1 - 2               | 1 - 2*                    | 2 - 3              |
| J19      | 1 - 2               | 1 - 2               | 1 - 2*                    | 2 - 3              |
| J20      | 1 - 2               | 1 - 2               | 1 - 2*                    | 2 - 3              |
| J21      | 1 - 2               | 1 - 2               | 1 - 2*                    | 2 - 3              |

*Default position

Evaluates: MAX22192

│

## MAX22192 Evaluation System

## Detailed Description of Software

When the MAX22192 EV kit software starts, it automatically detects if the EV kit is connected to a PC and indicates it in the status bar at the bottom edge of the GUI. If the software does not recognize the USB2PMB2# adapter  board,  make  sure  that  the  software  and  all drivers  are  properly  installed,  check  the  USB  connection, and go to the Device menu  and  select  the Search for Hardware option. When the EV kit is properly connected, the  MAX22192  (U1)  and  MAX22190  (U2)  devices  are read and all controls are updated (see Figure 2).

Evaluates: MAX22192

The main window of the EV kit software contains three groups  of  controls: U1  Status  &amp;  Configuration , U2 Status  &amp;  Configuration ,  and  general  controls  for  the EV kit. The U1 or U2 Status and Configuration box provides  the  controls  to  directly  configure  MAX22192  and MAX22190 features such as reading digital inputs, wirebreak configuration, input filter configuration, fault status reporting, etc. The general controls for the EV kit allow the user to select the SCLK speed, EV kit operation mode, U1  and  U2  SPI  mode, LLATCH signal  level,  etc.  Next to the Configuration tab, the Register Map tab lists all registers in the MAX22192 and MAX22190, and provides direct  read  and  write  access  to  all  the  control  bits  (not implemented until software rev. 2.0).

Figure 3. MAX22192 EV Kit Software-Clear POR

<!-- image -->

│

## MAX22192 Evaluation System

If  the  MAX22192EVKIT#  hardware  is  not  connected automatically, the Device menu provides the functions to connect or disconnect to the hardware by choosing detected USB2PMB2# serial numbers. Under the Options menu, a CRC Calculator (Figure 6) is provided to calculate the

Evaluates: MAX22192

5-bit  CRC  code  based  on  the  data  frame  provided  by the user. The jumper positions are shown in the Jumper Setting  Diagram (Figure  7)  under  the Options menu based on selectable operation mode and SPI mode.

Figure 4. MAX22192 EV Kit Software-Read DI Continuously

<!-- image -->

│

## MAX22192 Evaluation System

## Configuration Tab

The Configuration tab  provides  an  interface  for  configuring the MAX22192 and MAX22190 from a functional perspective.  Before  sending  the  commands  to  the  MAX22192 and MAX22190, select desired operation mode and SPI mode,  and  configure  the  jumpers  according  to  Table  1.

Evaluates: MAX22192

If  single-channel  mode  U1  is  selected,  all  U2  controls are disabled (Figure 5), and vice-versa. The status and configuration  box  provides  the  controls  for  digital  inputs reading, DI channel enable, wire-break status, wire-break enable, fault status reporting, FFAULT pin  configuration, input filter configuration, LED and GPO configuration, and CRC value calculation.

Figure 5. MAX22192 EV Kit Software-Single Channel Mode U1

<!-- image -->

Figure 6. MAX22192 EV Kit Software-CRC Calculator

<!-- image -->

│

Evaluates: MAX22192

Figure 7. MAX22192 EV Kit Software-Jumper Setting Diagram

<!-- image -->

## MAX22192 Evaluation System

After  power  up,  the  MAX22192 LFAULT pin  is  low  and the POR bit in the FAULT1 register is set, indicating that a power-on-reset has happened and all registers are set to default (Figure 2). After clicking the Clear POR button, the GUI clears the POR bit in the FAULT1 register. The LFAULT pin  is  pulled  high  and  FAULTB1  and  FAULTB2 LEDs are turned off after clearing the POR (Figure 3).

The Read All button reads the MAX22192 and MAX22190 registers and refreshes all the controls with current setting. The Read DI and WB and Read DI Continuously buttons  read  digital  input  (DI)  and  wire-break  (WB) registers  value  and  update  the  corresponding  controls. The Read FAULT Status button reads the FAULT1 and FAULT2  registers,  polls LFAULT and  AFS  status,  and update the corresponding controls.

## CRC Calculator

Clicking CRC  Calculator under  the Options menu opens  the  CRC  calculation  window  (Figure  6).  The software  calculates  the  5-bit  CRC  code  based  on  the 19-bit  data  or  24-bit  data  (5  LSB  bits  are  ignored)  and display the result.

## Jumper Setting Diagram

Clicking the Jumper Setting Diagram under the Options menu opens the jumper setting window (Figure 7). The software displays the jumper position based on the current operation mode and SPI mode in the top silkscreen diagram.  Changing  the  operation  mode  and  SPI  mode updates  the  shunt  positions  in  the  diagram.  Note  that SPI mode should be set to Mode 0 or Mode 1 in singlechannel mode or independent slave mode, or set to Mode 2 or Mode 3 in daisy-chain mode. Daisy-chain mode is not implemented until software version 2.0.

## Auxiliary LED Matrix

The MAX22192 features an auxiliary LED matrix that can be  configured  to  indicate  the  input  channel  wire-break status. After enabling the WB on Aux LED feature, every time the software reads the wire-break status, it writes the WB register value to the LED register to show the wirebreak status on the LED matrix on the EV kit hardware. See Figure 8 for an example where IN3 is connected to the field input and all other channels are unconnected.

Figure 8. MAX22192 EV Kit Software-WB on Aux LED feature

<!-- image -->

│

## MAX22192 Evaluation System

## Register Map

The Register  Map tab  shows  all  MAX22192  and MAX22190  register  information  including  the  register name,  address,  value,  read  or  write  accessibility,  and the register description. The Value cell  can  be  changed by the user if the register is writable. Pressing the Enter key after changing the Value writes to the register. When a  certain  register  is  highlighted  in  the  register  list,  the bits' information in this register are displayed in the Bits Description table. The bit Setting is configurable if the bit is writable, which triggers a write operation to its register.

Clicking  the Read  All button  reads  all  registers  and refreshes the window with register settings. Clicking the Write All button writes the current settings to all registers.

The Register Map tab is not implemented until software version 2.0.

## Detailed Description of Hardware

The  MAX22192  EV  kit  provides  a  proven  layout  for a 16-input  galvanically  isolated  digital input solution using MAX22192 and MAX22190. Both MAX22192 and MAX22190  are  included  with  flexibility  for  operation modes making it easier to evaluate system performance of  the  MAX22192.  This  includes  different  SPI  interface modes as well as support for all three types of IEC 611312 sensor inputs.

## SPI Interface

The  EV  kit  software  communicates  over  USB  to  the SPI  interface  and  supports  full  5MHz  clock  rate  for  the MAX22192. The SPI interface can communicate to a single device, or both devices can be daisy-chained. Three SPI operation  modes  are  supported  by  the  EV  kit:  singlechannel mode, independent slave mode, and daisy-chain mode.  Table  2  describes  how  to  configure  the  EV  kit jumpers  to  operate  in  different  operation  modes.  The EV kit uses a standard Pmod-compatible 12-pin header to connect to an external adapter board (USB2PMB2#), which provides an interface to a PC with an USB port. If the  users  wish  to  interface  to  their  own  Microcontroller or  FPGA,  simply  hardwire  the  SPI  signals  to  the  Pmod connector X1.

## READY Signal

The  MAX22192 OREADY signal is an open-drain active-low output. OREADY going low indicates that the MAX22192 field-side is powered up and ready for operation. The MAX22190 READY signal is also an open-drain active-low  output. READY going  low  indicates  that  the MAX22190 is powered up and ready for operation. Since the U1 OREADY and the U2 READY are both open-drain active-low outputs, the U1 IREADY is asserted low when one  of  these READY signals  is  asserted  low  if  the  U1 OREADY and  the  U2 READY are  shorted  together and connected to the U1 IREADY isolation  channel  directly. This could send a false READY signal to the logic-side of the MAX22192 when only one of the U1 and U2 is ready. To make sure both U1 and U2 are ready before asserting IREADY low,  an  OR  gate  is  added  between the U1 OREADY and the U2 READY outputs. The output of the OR gate is connected to the U1 IREADY pin. In this way, only when both U1 and U2 are ready for operation, the U1 IREADY is  asserted  low,  and  if  the  logic-side  of  the MAX22192 is powered up normally, the AFS is set high to notify the microcontroller that the field-side is ready for operation.

## Power Supplies

The EV kit has two power domains, the 'logic side,' which is  powered  from  the  USB-supplied  power  (VUSB  and GNDL),  and  the  'field  side,'  which  is  typically  powered from  an  external  24V  DC  supply  connected  to  VDD24 and  GND.  The  MAX22192  has  an  integrated  regulator to  provide  low  voltage  output  to  V DD3F   (3.3V,  nominal) to power other field-side devices such as MAX22190 or a  digital  isolator  such  as  MAX12931. Alternatively,  if  an external  24V  supply  is  not  available,  the  field  side  can be powered using an external 3.0V-5.5V supply through the V DD3F  pin of the MAX22192 and leaving V DD24F  pin unconnected (refer  to Table  1  for  jumper  settings).  The USB2PMB2# adapter board converts the USB 5V supply to a regulated +3.3V supply, which powers the EV kit logic side. Alternatively, if an external microcontroller is used, connect 3.0V-5.5V external supply to test points VUSB and GNDL. The EV kit should be powered from two independent isolated power supplies to evaluate the galvanic isolation. For evaluating the electrical parameters of the device  without  any  isolation  between  the  two  sides,  a single dual-output power supply can also be used.

## Type 1, 3 Inputs (U1)

The  MAX22192 senses the  state  (high  or  low)  of  eight digital  inputs.  U1  is  designed  to  support  the  trip  points (voltage and current) to satisfy the requirements of IEC 61131-2 Type 1 and Type 3 inputs. Resistor R10 sets the current limit value at 2.35mA and input resistors R1-R8 set the voltage threshold to ensure compliance. The input resistors  R1-R8  are  1.5kΩ,  1.5W  pulse-withstanding resistors  to  support  IEC  61000-4-5  surge  tolerance  at ±1kV line-to-ground. A separate LED for each input port indicates the status of each input.

## Type 2 Inputs (U2)

Type 2 inputs require higher current limits (6mA minimum) and  U2  is  configured  to  support  four  Type  2  inputs  by using two MAX22190 inputs in parallel. The current limit for each channel is set to a nominal 3.39mA through resistor  R29.  To  set  the  correct  voltage  threshold,  R31-R38 are  1kΩ,  1.5W  pulse-withstanding  resistors.  Resistors R39-R42 are 0Ω resistors to create a pair of inputs. By changing the value of the resistor R29, the current threshold can be set to a different value as desired. A separate LED for each input port indicates the status of the inputs.

## Galvanic Isolation

The  MAX22192  features  a  600V RMS   galvanic  isolation. The 4-wire  SPI, LATCH , FAULT and READY signals  of both  MAX22192 (U1) and MAX22190 (U2) are isolated using the integrated isolation channels in the MAX22192. When  the  MAX22192  and  the  MAX22190  are  configured  in  the  SPI  independent  slave  mode,  a  2-channel MAX12931  is  required  to  isolate  a  second  chip  select ( CS ) signal of the MAX22190. When configured in daisychain  mode,  no  extra  isolation  channels  are  needed. The  field-side  logic  supply  V LF   can  operate  between 3.0V-5.5V  and  logic-side  supply  V DDL   can  operate between 1.71V-5.5V. The V LF  and V DDL  can be set to different  logic  levels  and  provide  voltage  translation  as well  as  galvanic  isolation.  The  logic-side  supply  V DDL is  powered  from  VUSB  and  GNDL  while  the  field-side VLF is powered from the MAX22192 internal LDO output (V DD3F ). The PCB layout ensures correct creepage and clearance rules are followed. Connector X2 is provided to allow easy probing of digital signals on the field-side of the isolation barrier. When testing isolation performance, care should be taken not to have a multichannel oscilloscope ground connection to both GND and GNDL.

Protective Earth is provided on the lower-right corner of the  EV  kit  with  safety  rated  Y  capacitors  between  field ground (GND) and Earth (C38), and between field ground (GND)  and  logic  ground  (GNDL)  (C39)  to  improve  the high-voltage, fast transient performance.

## IEC 61000-4 Immunity Compliance

The  typical  application  for  the  MAX22192  requires  it  to pass  basic  transient  immunity  standards  as  defined  by IEC  61000-4-x,  covering  -2  for  electrostatic  discharge (ESD), -4 for electrical fast transient/burst (EFT), and -5 for  surge  immunity.  The  MAX22192  EV  kit  includes  circuitry to support testing to these standards including ±1kV line-to-GND surge, ±8kV contact ESD, and ±15kV air-gap ESD. Pulse-withstanding resistor R9 and TVS D1 provide protection  from  surge  and  ESD voltage applied through VDD24. Input capacitors can impact surge performance. It is NOT recommended to populate input capacitors (C1C8, C16-C23) if the highest surge immunity performance is required. To achieve the best surge performance, place a minimum 1kΩ pulse-withstanding resistor between the field  input  and  the  device  input  pin.  C38  is  a  3300pF safety rated Y capacitor placed between protective earth (PE) and field ground (GND) to improve transient immunity (EFT). C39 is a 1000pF safety rated Y capacitor connected across the isolation barrier between field ground and  logic  ground  (GNDL).  For  systems  where  PE  and GNDL are bonded together, the user can install the resistor R70. Both C39 and R70 are provided with the EV kit.

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX22192EVKIT# | EV Kit    |
| MAX22192EVSYS# | EV System |

#Denotes RoHS compliant.

The MAX22192EVSYS# includes the MAX22192EVKIT# and USB2PMB2#.

│

## MAX22192 EV Kit Bill of Materials

| ITEM REF_DES AFS, LED_24VM,                               | DNI/DNP QTY   | MFGPART #                                                                               | MANUFACTURER                                        | VALUE                      | DESCRIPTION                                                                                                                                                                    |
|-----------------------------------------------------------|---------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 LED_WB1- LED_WB8, READYB1, READYB2                      | -             | 12 LTST-C193KSKT-5A                                                                     | LITE-ON ELECTRONICS INC.                            | LTST-C193KSKT-5A           | DIODE; LED; YELLOW; SMT (0603); VF=2V; IF=0.005A                                                                                                                               |
| 2 C10, C12, C14, C24, C26, C28, C30, C32, C34, C36        | -             | 10 CC0603KRX7R0BB104;GRM188R72A104KA 35;GCJ188R72A104KA01;HMK107B7104KA ;06031C104KAT2A | YAGEO;MURATA;MURATA;TAIYO YUDEN;AVX                 | 0.1UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                    |
| 3 C11, C25                                                | -             | 2 C2012X7S2A105K125AB;GRJ21BC72A105K E11;CGA4J3X7S2A105K125AB;GRM21BC72 A105KE01        | TDK;MURATA;TDK                                      | 1UF                        | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                                                      |
| 4 C13, C15, C27, C29                                      | -             | 4 UMK107AB7105KA;CC0603KRX7R9BB105                                                      | TAIYO YUDEN;YAGEO                                   | 1UF                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                       |
| 5 C33, C35, C37                                           | -             | 3 GRM21BC81E106KE11                                                                     | MURATA                                              | 10UF                       | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +105 DEGC; TC=X6S                                                                                      |
| 6 C38                                                     | -             | 1 VJ2220Y332KXUSTX1                                                                     | VISHAY VITRAMON                                     | 3300PF                     | CAP; SMT (2220); 3300PF; 10%; 250V; X7R; CERAMIC CHIP DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A                                                                            |
| 7 D1                                                      | -             | 1 SMAJ33CA                                                                              | VISHAY GENERAL SEMICONDUCTOR                        | 33V                        |                                                                                                                                                                                |
| 8 EARTH                                                   |               |                                                                                         |                                                     | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                        |
| 9 FAULTB1, FAULTB2                                        | - -           | 1 2 LTST-C193KRKT-2A                                                                    | 5012 KEYSTONE LITE-ON ELECTRONICS INC.              | LTST-C193KRKT-2A           | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF=2.2V; IF=0.002A                                                                                                      |
|                                                           |               |                                                                                         | 5011                                                |                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR                                                                                         |
| 10 GNDL, GND_TP1-GND_TP5                                  | -             | 6                                                                                       | KEYSTONE                                            | N/A                        | BRONZE WIRE SILVER PLATE FINISH;                                                                                                                                               |
| 11 J1, J2, J5-J9, J12-J17, J23                            | -             | 14 PEC02SAAN                                                                            | SULLINS                                             | PEC02SAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                      |
| 18 R12, R13, R43, 19 R14-R20, R45-R51                     | -             | 8 PEC03SAAN                                                                             | PANASONIC;VISHAY                                    | PEC03SAAN                  | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                                                                                   |
| 12 J3, J4, J10, J11, J18-J21 13 J22                       | -             |                                                                                         | SULLINS ELECTRONICS CORP. SULLINS ELECTRONICS CORP. |                            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                      |
|                                                           |               | 1 PEC04SAAN                                                                             |                                                     | PEC04SAAN                  |                                                                                                                                                                                |
| 14 R1-R8                                                  | -             | 8 CRCW25121K50FKEGHP                                                                    | VISHAY                                              | 1.5K                       | RES; SMT (2512); 1.5K; 1%; +/-100PPM/DEGK; 1.5W                                                                                                                                |
| 15 R9                                                     | -             | 1 CRCW2512150RFKEGHP                                                                    | VISHAY                                              |                            | 150 RES; SMT (2512); 150; 1%; +/-100PPM/DEGK; 1.5W                                                                                                                             |
| 16 R10                                                    | -             | 1 ERJ-3EKF7501;CRCW06037K50FK                                                           |                                                     | 7.5K                       | RESISTOR; 0603; 7.5K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                        |
| 17 R11, R30                                               | - -           | 2 ERJ-3EKF2402                                                                          | PANASONIC                                           | 24K                        | RESISTOR; 0603; 24K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                         |
| R44, R63, R69                                             | -             | 6 CRG0603F10K 14 CRCW060320R0FK;ERJ-3EKF20R0                                            | TE CONNECTIVITY                                     | 10K                        | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM 20 RESISTOR, 0603, 20 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                 |
| 20 R29                                                    | -             | 1 CRCW06035K23FK                                                                        | VISHAY DALE;PANASONIC                               |                            | RESISTOR; 0603; 5.23K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                       |
| 21 R31-R38                                                | - -           | 8 CRCW25121K00FKEGHP                                                                    | VISHAY DALE VISHAY                                  | 5.23K 1K                   | RES; SMT (2512); 1K; 1%; +/-100PPM/DEGK; 1.5W 0 RES; SMT (2512); 0; JUMPER; 1.5W                                                                                               |
| 22 R39-R42 23 R62, R71,                                   | -             | 4 CRCW25120000Z0EGHP 3 CRCW0603470RFK;ERJ-3EKF4700                                      | VISHAY DRALORIC VISHAY DALE;PANASONIC               |                            | RESISTOR, 0603, 470 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                         |
| R74                                                       | -             | 1 ERJ-3EKF1603                                                                          | PANASONIC                                           | 160K 10K                   | 470 RES; SMT (0603); 160K; 1%; +/-100PPM/DEGC; 0.1W                                                                                                                            |
| 24 R72 25 R73                                             | -             | 1 CRCW060310K0FK;ERJ-3EKF1002                                                           | VISHAY DALE;PANASONIC                               |                            | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                             |
|                                                           | -             |                                                                                         |                                                     |                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW;                                                                                                 |
| 26 REFDI1, REFDI2, REFWB1, REFWB2                         |               | 4                                                                                       | 5014 KEYSTONE                                       | N/A                        | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR                                                         |
| 27 SU1-SU23                                               | -             | 23 S1100-B;SX1100-B;STC02SYAN                                                           | KYCON;KYCON;SULLINS ELECTRONICS CORP.               | SX1100-B                   | BRONZE CONTACT=GOLD PLATED CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON;                                                                           |
| 28 T1-T4                                                  | -             | 4 250-408 1 MAX22192ARC+                                                                | WAGO MAXIM                                          | 250-408                    | STRAIGHT; 8PINS EVKIT PART - IC; MAX22192ARC+; GQFN70; PACKAGE OUTLINE: 21-100252; PACKAGE CODE:                                                                               |
| 29 U1                                                     | -             |                                                                                         |                                                     | MAX22192ARC+               | R70610M+1 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN;                                                                                        |
| 30 U1_IN1-U1_IN8, U2_IN1-U2_IN8 U1_LED1-U1_LED8, U2_LED1- | -             | 16                                                                                      | 5125 KEYSTONE                                       | N/A                        | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                                      |
| 31 U2_LED8                                                | -             | 16 LTST-C193KGKT-5A                                                                     | LITE-ON ELECTRONICS INC.                            | LTST-C193KGKT-5A           | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC EVKIT PART-IC; OCTAL INDUSTRIAL DIGITAL INPUT WITH DIAGNOSTICS; PACKAGE OUTLINE: 21- |
| 32 U2 33 U3                                               | - -           | 1 MAX22190ATJ+ 1 MAX12931BASA+                                                          | MAXIM INTEGRATED MAXIM                              | MAX22190ATJ+ MAX12931BASA+ | 0140; PACKAGE CODE: T3255+6; LAND PATTERN NO.: 90-0603; TQFN32-EP EVKIT PART - IC; DISO; 1/1 CHANNEL; 25MBPS; DEFAULT HIGH; 3.75KVRMS DIGITAL ISOLATOR; NSOIC8                 |
| 34 U4 35 VDD1, VDD2, VDD24, VL, VL2, VUSB                 | - -           | 1 74LVC1G32GW 6                                                                         | NEXPERIA KEYSTONE                                   | 74LVC1G32GW N/A            | IC; OR; SINGLE 2-INPUT OR GATE; TSSOP5 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                   |
|                                                           | -             | 1 TSW-106-08-S-D-RA                                                                     |                                                     |                            | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                                                                                      |
| 36 X1                                                     | -             | 1 PBC08DAAN                                                                             | 5010 SAMTEC                                         |                            |                                                                                                                                                                                |
| 37 X2                                                     | -             |                                                                                         |                                                     | TSW-106-08-S-D-RA          |                                                                                                                                                                                |
|                                                           |               | 1 MAX22192                                                                              | SULLINS ELECTRONICS CORP.                           | PBC08DAAN PCB              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                                                                              |
|                                                           |               |                                                                                         | MAXIM                                               |                            |                                                                                                                                                                                |
| 38 PCB 39 MTH1-MTH4                                       | DNI DNI       | 4 1902B 4 P440.375                                                                      | GENERIC PART GENERIC PART                           | N/A                        | PCB:MAX22192 STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                                                              |
| 40 MTH1-MTH4                                              |               | 1                                                                                       |                                                     | N/A                        | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 100V;                                                                             |
| 41 C9 42 C39                                              |               | GRM32EC72A106KE05 1 GA352QR7GF102KW01                                                   | MURATA                                              | 10UF                       | TOL=10%; TC=X7S CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC CHIP                                                                                                          |
|                                                           | DNI DNI       |                                                                                         | MURATA                                              | 1000PF                     |                                                                                                                                                                                |
|                                                           |               |                                                                                         |                                                     |                            | TG=-55 DEGC TO +125 DEGC;                                                                                                                                                      |
| 43 R70                                                    | DNI           | 1 CRCW25120000Z0EGHP                                                                    | VISHAY DRALORIC                                     |                            | 0 RES; SMT (2512); 0; JUMPER; 1.5W CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 100V;                                                                                          |
|                                                           |               |                                                                                         | MURATA;MURATA                                       | 1000PF                     | TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                      |
| 44 C1-C8, C16-C23 45 R21-R28,                             | DNP           | 0 GRM155R72A102KA01;GCM155R72A102K A37                                                  |                                                     |                            |                                                                                                                                                                                |
| R52-R59                                                   | DNP           |                                                                                         | VISHAY DALE                                         |                            | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                            |
| TOTAL                                                     |               | 0 CRCW06030000Z0                                                                        |                                                     |                            | 0                                                                                                                                                                              |
|                                                           |               | 202                                                                                     |                                                     |                            |                                                                                                                                                                                |

## MAX22192 EV Kit Schematics

<!-- image -->

Evaluates: MAX22192

## MAX22192 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX22192

## MAX22192 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX22192

## MAX22192 EV Kit PCB Layout

MAX22192 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX22192 EV Kit PCB Layout (continued)

MAX22192 EV Kit-Top

<!-- image -->

│

## MAX22192 Evaluation System

## MAX22192 EV Kit PCB Layout (continued)

MAX22192 EV Kit-Internal 2

<!-- image -->

│

## MAX22192 Evaluation System

## MAX22192 EV Kit PCB Layout (continued)

MAX22192 EV Kit-Internal 3

<!-- image -->

│

## MAX22192 EV Kit PCB Layout (continued)

MAX22192 EV Kit-Internal 4

<!-- image -->

│

## MAX22192 EV Kit PCB Layout (continued)

MAX22192 EV Kit-Internal 5

<!-- image -->

│

## MAX22192 EV Kit PCB Layout (continued)

MAX22192 EV Kit-Bottom

<!-- image -->

│

## MAX22192 EV Kit PCB Layout (continued)

MAX22192 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX22192 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/18           | Initial release                                                                                                                                                                                                                                                                                                                                                                                                                                   | -               |
|                .1 |                 | Corrected grammatical error in the Features section                                                                                                                                                                                                                                                                                                                                                                                               | 1               |
|                 2 | 3/19            | Updated the MAX22192 EV Kit Files table and General Description, Procedure, Jumper Setting Diagram, Type 1, 3 Inputs (U1), Type 2 Inputs (U2), and IEC 61000-4 Immunity Compliance sections; added the READY Signal section; replaced the EV Kit and EV System photographs, System Block Diagram, Figure 1, Table 1, Table 2, Figure 7, Bill of Materials, Schematic, and PCB Layout Diagrams ; corrected typo in the General Description section | 1-9, 13-28      |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX22192