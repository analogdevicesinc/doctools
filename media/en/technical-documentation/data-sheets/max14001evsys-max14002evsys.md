<!-- lastmod 2022-08-04 -->
## MAX14001/MAX14002

## Evaluation System

## General Description

The  MAX14001/14002  evaluation  system  (EV  system) provides the hardware and software necessary to evaluate the  MAX14001  and  MAX14002  isolated,  single-channel, analog-to-digital  converters  (ADCs)  with  programmable voltage comparators and inrush current control optimized for configurable binary input applications. The MAX14001/ MAX14002  EV  kit  has  Pmod™  compatible  connectors for  SPI  communication.  The  EV  system  includes  the USB2PMB2  adapter  board  that  receives  commands from  a  PC  through  the  USB  cable  to  create  an  SPI interface for communication between the software and the MAX14001/MAX14002 on the EV kit.

The EV system includes a graphical user interface (GUI) that  provides  communication  between  the  target  device and the PC. The MAX14001/MAX14002 EV kit has two MAX14001/MAX14002  devices  (U1  and  U2)  that  can operate in multiple modes, as shown in Figure 1:

- 1) Single  Channel  mode:  The  USB2PMB2  adapter connects  to  connector  PMOD1  or  PMOD2  on  the EV  kit,  depending  on  which  channel  is  preferred, allowing  differently  configured  analog  inputs  with signal conditioning circuitry.
- 2) Daisy-Chain mode: The USB2PMB2 adapter connects to connector PMOD1, and DOUT from U1 connects to DIN of U2. Both U1 and U2 are controlled from a single SPI interface.
- 3) Dual Channel mode: The USB2PMB2  adapter connects  to  connector  PMOD1  and  uses  two  chipselect  signals  ( CS1 and CS2 )  to  control  each  chip through a single connector/GUI interface.

## EV System Contents

- MAX14001EVKIT#, including the MAX14001AAP+ or MAX14002EVKIT#, including the MAX14002AAP+
- USB2PMB2# Adapter Board
- Micro-USB Cable

Evaluates: MAX14001, MAX14002

## Features

- Easy Evaluation of the MAX14001/MAX14002
- EV Kit is USB Powered
- Daisy-Chainable SPI Interface
- Internal Voltage Reference or External Voltage Reference
- Half-Wave Input Rectification Filter or Full-Wave Input Rectification Filter
- Windows XP ® , Windows ® 7, Windows 8.1, and Windows 10 Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

Ordering Information appears at end of data sheet.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Pmod is a trademark of Digilent, Inc

<!-- image -->

## MAX14001/MAX14002 Evaluation System

## MAX14001/MAX14002 EV Kit Photo

<!-- image -->

## USB2PMB2 Adapter Board Photo

<!-- image -->

│

Evaluates: MAX14001, MAX14002

## MAX14001/MAX14002 EV System Photo

<!-- image -->

Note:

Board standoffs and screws are not included in the EV system.

Evaluates: MAX14001, MAX14002

│

## MAX14001/MAX14002 Evaluation System

## System Block Diagram

<!-- image -->

│

Evaluates: MAX14001, MAX14002

## MAX14001/MAX14002 Evaluation System

Evaluates: MAX14001, MAX14002

Figure 1: EV Kit Operating Modes

<!-- image -->

## MAX14001/14002 EV Kit Files

| FILE                       | DESCRIPTION         |
|----------------------------|---------------------|
| MAX1400XEVKitSetupV1.0.ZIP | Application Program |

## MAX14001/MAX14002 Evaluation System

## Quick Start

## Required Equipment

- MAX14001/MAX14002 EV kit
- USB2PMB2# adapter board
- Micro-USB cable
- DC voltage supply
- Windows XP ® , Windows ® 7, Windows 8.1, Window 10 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV Kit software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  The  default jumper  settings  configure  the  EV  kit  to  operate  in  the single channel mode using U1. In this configuration, the EV  kit  is  powered  by  +3.3V  from  USB2PMB2  adapter connected  to  PMOD1.  U1  is  operating  in  the  internal reference mode with a resistor-divider in front of the ADC input, allowing 13.75VDC maximum voltage to be applied to V300\_13. Follow the steps below to verify MAX14001/ MAX14002 operation:

- 1) Verify all jumper settings are in default position from Table 1 .
- 2) For initial testing, MAX14001/MAX14002 are powered from USB2PMB2 (+3.3V) from connector PMOD1.
- 3) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX1400XEVKitSetupV1.0.ZIP.
- 4) Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 5) Install the EV kit software and USB driver on your computer  by  running  the  MAX1400XEVKitSetupV1.0.exe program inside the temporary folder. A message box asking, Do you want to allow the following program to make changes to this computer? may appear. If so, click Yes .
- 6) The program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process, the installer will launch the installer for the FTDI Chip CDM drivers.
- 7) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish .  The  default  location  of the software is in the program files directory.

## Evaluates: MAX14001, MAX14002

- 8) Connect the MAX14001/MAX14002 EV kit connector PMOD1 to the connector on the USB2PMB2 adapter.
- 9) Connect the USB2PMB2 to the PC with the Micro-USB cable.  Windows  should  automatically  recognize  the device and display a message near the System Icon menu  indicating  that  the  hardware  is  ready  to  use. Observe that, on the EV kit, the 3.3V\_P1 LED (green LED) is on, indicating the hardware is powered up.
- 10)  Once the hardware is ready to use, launch the EV kit software by opening its icon in the Start | Programs menu.  The  EV  kit  software  appears  as  shown  in Figure 2 .
- 11)  From the Device menu, select MAX14001 or MAX14002 depending on whether MAX14001 EV kit or MAX14002 EV kit is connected to the PC. Verify that U1 under Single Channel mode is selected from Device Menu.
- 12)  From the Device menu, click Connect to Hardware . Then  select  a  device  in  the  list  or  use  the  default device already selected.
- 13)  Verify that the lower-right status bar indicates the EV kit hardware is Connected .
- 14)  Observe that after the connection, the FAULT1 LED (red LED) is turned off on the EV kit.
- 15)  Connect the positive terminal of the DC supply to test point  V300\_13 on the EV kit. Connect the negative terminal of the DC supply to test point GNDF1 on the EV kit.
- 16) Configure the DC supply output to be 7V. Enable the DC voltage supply.
- 17)  In the Configuration tab of the EV kit software, change U1 ADC Full Scale Voltage (V) box to be 13.75V.
- 18)  In the ADC Scope tab, click the Start Sampling button.
- 19)  Observe  that  COUT1  LED  (yellow  LED)  on  the  EV kit is turned on. The ADC scope graph on the EV kit software is showing 7V.

## MAX14001/MAX14002 Evaluation System

Evaluates: MAX14001, MAX14002

Figure 2. MAX14001/MAX14002 EV Kit Software Startup Window

<!-- image -->

## MAX14001/MAX14002 Evaluation System

Evaluates: MAX14001, MAX14002

## Table 1. MAX14001/MAX14002 EV Kit Jumper Settings

| JUMPER          | SHUNT POSITION   | DESCRIPTION                                                                              |
|-----------------|------------------|------------------------------------------------------------------------------------------|
| U1 FIELD - SIDE | U1 FIELD - SIDE  | U1 FIELD - SIDE                                                                          |
| J4              | Closed*          | Connect full - wave rectification circuit to the voltage divider input, V300_13 .        |
| J4              | Open             | Disconnect full - wave rectification circuit from the voltage divider input, V300_13 .   |
|                 | Closed*          | Connect V300_13 to the drain of power FET Q1 .                                           |
| J2              | Open             | Disconnect V300_13 from drain of power FET Q1 .                                          |
| J13             | 1 - 2            | Use 1.25/300 voltage divider on V300_13 (300V , max) .                                   |
| J13             | 2 - 3*           | Use 1.25/13.75 voltage divider on V300_13 (13.75V , max) .                               |
| J10             | 1 - 2            | Use external input AINEXT1 for U1 AIN .                                                  |
| J10             | 2 - 3*           | Use voltage divider output for U1 AIN .                                                  |
| J1              | Closed           | Use U1 V DDF to power the series reference U3 .                                          |
| J1              | Open*            | Disconnect U1 V DDF from series reference U3 .                                           |
| J3              | 1 - 2            | Use shunt reference U5 as U1 external voltage reference .                                |
| J3              | 2 - 3            | Use series reference U3 as U1 external voltage reference .                               |
| J3              | Open*            | Use U1 internal reference .                                                              |
| U2 FIELD - SIDE | U2 FIELD - SIDE  | U2 FIELD - SIDE                                                                          |
| J12             | Closed*          | Connect half - wave rectification circuit to the voltage divider input, V300_13_2 .      |
| J12             | Open             | Disconnect half - wave rectification circuit from the voltage divider input, V300_13_2 . |
| J26             | Closed*          | Connect V300_13_2 to the drain of power FET Q2 .                                         |
| J26             | Open             | Disconnect V300_13_2 from drain of power FET Q2 .                                        |
| J30             | 1 - 2            | Use 1.25/300 voltage divider on V300_13_2 (300V , max).                                  |
| J30             | 2 - 3*           | Use 1.25/13.75 voltage divider on V300_13_2 (13.75V , max) .                             |
|                 | 1 - 2            | Use external input AINEXT2 for U2 AIN .                                                  |
| J29             | 2 - 3*           | Use voltage divider output for U2 AIN .                                                  |
| J32             | Closed           | Use U2 V DDF to power the series reference U7.                                           |
| J32             | Open*            | Disconnect U2 V DDF from series reference U7.                                            |
| J28             | 1 - 2            | Use shunt reference U6 as U2 external voltage reference .                                |
| J28             | 2 - 3            | Use series reference U7 as U2 external voltage reference .                               |
| J28             | Open*            | Use U2 internal reference .                                                              |
| POWER           | POWER            | POWER                                                                                    |
| J5              | 1 - 2*           | U1 V DDL supply connects to 3.3V from PMOD1 .                                            |
| J5              | 2 - 3            | Use external V DDL supply for U1. Connect external voltage to test point EXT_VDDL1 .     |
| J7              | 1 - 2*           | U1 V DD supply connects to 3.3V from PMOD1 .                                             |
| J7              | 2 - 3            | Use external V DD supply for U1. Connect external voltage to test point EXT_VDD1 .       |
| JMP1            | 1 - 2*           | U2 V DDL supply connects to 3.3V from PMOD2 .                                            |
| JMP1            | 1 - 3            | Use external V DDL supply for U2. Connect external voltage to test point EXT_VDDL2 .     |
| JMP1            | 1 - 4            | U2 V DDL supply connects to 3.3V from PMOD1 .                                            |

│

## MAX14001/MAX14002 Evaluation System

Evaluates: MAX14001, MAX14002

## Table 1. MAX14001/MAX14002 EV Kit Jumper Settings (continued)

| JUMPER                              | SHUNT POSITION                      | DESCRIPTION                                                                                                                                                                                                    |
|-------------------------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JMP2                                | 1 - 2*                              | U2 V DD supply connects to 3.3V from PMOD2 .                                                                                                                                                                   |
| JMP2                                | 1 - 3                               | Use external V DD supply for U2. Connect external voltage to test point EXT_VDD2 .                                                                                                                             |
| JMP2                                | 1 - 4                               | U2 V DD supply connects to 3.3V from PMOD1 .                                                                                                                                                                   |
| SPI INTERFACE                       | SPI INTERFACE                       | SPI INTERFACE                                                                                                                                                                                                  |
|                                     | Closed                              | Daisy-chain mode. Connect U1 DOUT to U2 DIN .                                                                                                                                                                  |
| J8                                  | Open*                               | U1 and U2 in single channel mode .                                                                                                                                                                             |
| J21                                 | 1 - 2*                              | U1 in single channel mode or U1 and U2 in dual channel mode. U1 DOUT connects to PMOD1 pin 3, DOUT1_P. In dual channel mode, J14 should be closed to connect both U1 DOUT and U2 DOUT to PMOD1 pin 3, DOUT1_P. |
| J21                                 | 2 - 3                               | Daisy-chain mode. Connect U2 DOUT to PMOD1 pin 3, DOUT1_P .                                                                                                                                                    |
| J15                                 | Closed                              | Daisy-chain mode. Connect U1 CS with U2 CS .                                                                                                                                                                   |
| J15                                 | Open*                               | U1 and U2 in single channel mode or dual channel mode .                                                                                                                                                        |
| J16                                 | Closed                              | U1 and U2 in daisy-chain mode or dual channel mode. Connect U1 SCLK with U2 SCLK .                                                                                                                             |
| J16                                 | Open*                               | U1 and U2 in single channel mode .                                                                                                                                                                             |
| J6                                  | 1 - 2*                              | Single channel mode or daisy-chain mode. Connect U2 FAULT to PMOD1 pin 9, FAULT2_CS2                                                                                                                           |
| J6                                  | 2 - 3                               | Dual channel mode. Connect U2 CS to PMOD1 pin 9, FAULT2_CS2 .                                                                                                                                                  |
| J17                                 | Closed                              | Dual channel mode. Connect U1 DIN with U2 DIN .                                                                                                                                                                |
| J17                                 | Open*                               | U1 and U2 in single channel mode or daisy-chain mode .                                                                                                                                                         |
| J18                                 | Closed                              | Dual channel mode. Connect U1 FAULT with U2 FAULT .                                                                                                                                                            |
| J18                                 | Open*                               | U1 and U2 in single channel mode or daisy-chain mode .                                                                                                                                                         |
| J14                                 | Closed                              | Dual channel mode. Connect U1 DOUT with U2 DOUT .                                                                                                                                                              |
| J14                                 | Open*                               | U1 and U2 in single channel mode or daisy-chain mode .                                                                                                                                                         |
| TEST POINTS (NEVER INSTALL JUMPERS) | TEST POINTS (NEVER INSTALL JUMPERS) | TEST POINTS (NEVER INSTALL JUMPERS)                                                                                                                                                                            |
| J11                                 | 1,2, 15, 16                         | GNDL                                                                                                                                                                                                           |
| J11                                 | 3                                   | FAULT1 - U1 FAULT output                                                                                                                                                                                       |
| J11                                 | 4                                   | FAULT2 - U2 FAULT output                                                                                                                                                                                       |
| J11                                 | 5                                   | COUT1 - U1 COUT output                                                                                                                                                                                         |
| J11                                 | 6                                   | COUT2 - U2 COUT output                                                                                                                                                                                         |
| J11                                 | 7                                   | CS1 - U1 Chip Select                                                                                                                                                                                           |
| J11                                 | 8                                   | CS2 - U2 Chip Select                                                                                                                                                                                           |
| J11                                 | 9                                   | SCLK1 - U1 Serial Clock                                                                                                                                                                                        |
| J11                                 | 10                                  | SCLK2 - U2 Serial Clock                                                                                                                                                                                        |
| J11                                 | 11                                  | DIN1 - U1 MOSI                                                                                                                                                                                                 |
| J11                                 | 12                                  | DIN2 - U2 MOSI                                                                                                                                                                                                 |
| J11                                 | 13                                  | DOUT1 - U1 MISO                                                                                                                                                                                                |
| J11                                 | 14                                  | DOUT2- U2 MISO                                                                                                                                                                                                 |

*Default position.

Note:

In daisy-chain and dual-channel modes, only PMOD1 is connected to USB2PMB2 adapter board.

│

## MAX14001/MAX14002 Evaluation System

Evaluates: MAX14001, MAX14002

Table 2. MAX14001/MAX14002 EV Kit Jumper Settings for Operating Modes

| JUMPER   | SINGLE CHANNEL* (PMOD1)   | SINGLE CHANNEL (PMOD2)   | DAISY CHAIN (PMOD1)   | DUAL CHANNEL (PMOD1)   |
|----------|---------------------------|--------------------------|-----------------------|------------------------|
| J8       | Open                      | Open                     | Closed                | Open                   |
| J21      | 1 - 2                     | Open                     | 2 - 3                 | 1 - 2                  |
| J15      | Open                      | Open                     | Closed                | Open                   |
| J16      | Open                      | Open                     | Closed                | Closed                 |
| J6       | 1 - 2                     | Open                     | 1 - 2                 | 2 - 3                  |
| J17      | Open                      | Open                     | Open                  | Closed                 |
| J18      | Open                      | Open                     | Open                  | Closed                 |
| J14      | Open                      | Open                     | Open                  | Closed                 |

*Default position.

## Detailed Description of Software

The main window of the EV kit software contains three tabs: Configuration , ADC  Scope ,  and Register  Map . The Configuration tab  provides  the  controls  to  directly configure MAX14001/MAX14002 features such as comparator  thresholds,  inrush  current  magnitude  and  duration, fault status reporting, etc. The ADC Scope tab plots the ADC readings and filtered ADC readings in the time domain graph. The Register Map tab lists all registers in the MAX14001/MAX14002 and provides direct read and write access to all the control bits.

The MAX14001/MAX14002 EV kit software can work with both  MAX14001EVKIT#  and  MAX14002EVKIT#.  The Device menu  allows  the  user  to  select  the  device,  the operating mode, and to connect or disconnect to the hardware by choosing detected USB2PMB2 serial numbers.

## Configuration Tab

The Configuration tab provides an interface for configuring the  MAX14001/MAX14002 from a functional perspective. The  main  block  provides  the  controls  for  comparator thresholds  configuration,  bias  current  magnitude,  inrush current  magnitude  and  duration  configuration,  FAST mode enable, inrush current re-arm and trigger thresholds configuration,  ADC  full  scale  voltage  setting,  ADC  filter setting, ADC reference options, FAULT pin configuration, flags status reporting, etc. The Initialize button reads the MAX14001/MAX14002 registers and refresh all the controls with current setting. The Update Once and Update Continuously buttons read ADC, FADC, and FLAGS registers value, poll COUT and FAULT pin status and update the  corresponding  controls.  The Inrush  Pulse , PowerOn-Reset and Software Reset buttons write to the ACT register. The Reg Write Enable and Reg Write Disable buttons write to the Write Enable register.

│

## MAX14001/MAX14002 Evaluation System

Evaluates: MAX14001, MAX14002

Figure 3. EV Kit Software (Configuration Tab)

<!-- image -->

## MAX14001/MAX14002 Evaluation System

## ADC Scope Tab

The ADC Scope tab is used to display the ADC readings and filtered ADC readings in the time domain graph. By clicking the Start Sampling button, the software will keep reading the ADC register and/or the Filtered ADC register and display the results continuously. Click the same button to stop sampling.

Figure 4. EV Kit Software (ADC Scope Tab)

<!-- image -->

Evaluates: MAX14001, MAX14002

## MAX14001/MAX14002 Evaluation System

## Register Map Tab

The Register Map tab shows all MAX14001/MAX14002 registers information including the register name, address, value, read or write accessibility, and the register description. The Value cell can be changed by user if the register is writable. By pressing the Enter key after changing the Value will write to the register. When certain register is highlighted in the register list, the bits' information in this register will be displayed in the Bits Description table. The bit Setting is configurable if the bit is writable, which will trigger a write operation to its register.

Clicking the Read All button reads all registers and refresh the window with register settings. Clicking the Write All button writes the current settings to all registers.

Figure 5. EV Kit Software (Register Map Tab)

<!-- image -->

Evaluates: MAX14001, MAX14002

## MAX14001/MAX14002 Evaluation System

## Detailed Description of Hardware

The MAX14001/MAX14002 EV kit provides a proven layout for the IC and has options to select input signal conditioning, voltage reference source, as well as SPI interface operating modes.  Two  channels  are  included  with  flexibility  for operating  modes  making  it  easier  to  evaluate  system performance  of  the  MAX14001/MAX14002.  A  full-wave rectified input is an option for device U1 and a half-wave rectified input is an option for device U2.

## SPI Interface

The  EV  kit  software  communicates  over  USB  to  the SPI  interface  and  supports  full  5MHz  clock  rate  for  the MAX14001/MAX14002. The SPI interface can communicate to a single device, or both devices can be daisy-chained. Three SPI operation modes are supported by the EV kit: single  channel  mode,  Dual  Channel  mode  and  daisychain mode. Table 2 describes how to configure the EV kit  jumpers  to  operate  in  different  operating  modes. The EV  kit  uses  standard  Pmod-compatible  12-pin  headers to  connect  to  an  external  adapter  board  (USB2PMB2) which  provides  an  interface  to  a  PC  with  an  USB  port. If  the users wish to interface to their own Microcontroller or  FPGA,  simply  hardwire  the  SPI  signals  to  the  Pmod connectors or J11.

## Power Supplies

The EV kit is powered entirely from USB supplied power or using external low-voltage supplies. The USB2PMB2 adapter board  converts  the  USB  5V  supply  to  a  regulated  +3.3V supply, which powers the EV kit. Alternatively, connect +1.71 to +5.5V external supplies to test points EXT\_VDDL1 and/or EXT\_VDDL2, and connect +3.0 to +3.6V external supplies to test points EXT\_VDD1 and/or EXT\_VDD2.

## Voltage Reference

The  MAX14001/MAX14002  can  use  its  internal  1.25V reference, or an external series or shunt 1.25V reference. The option for external vs. internal reference and the type of  external  reference  is  selectable  using  the  GUI,  which programs bits EXRF and EXTI in the Configuration (CFG)

## Table 3. Voltage Reference Settings

| REFERENCE CONFIGURATION   |   CFG:EXRF |   CFG:EXTI | CONNECTION                                                                                                                              |
|---------------------------|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Internal Reference        |          0 |          0 | Connect REFIN directly to AGND.                                                                                                         |
| External Series Reference |          1 |          0 | Series reference is supplied by V DDF . Output is connected to the REFIN pin. Bypass REFIN toAGND with a 0.1µF capacitor.               |
| External Shunt Reference  |          1 |          1 | Internal current source is turned on. Shunt reference is connected between REFIN and AGND. Bypass REFIN to AGND with a 0.1µF capacitor. |

│

## Evaluates: MAX14001, MAX14002

register, as shown in Table 3 . On the EV kit hardware, J3 and J28 should be configured accordingly before switching between internal  reference  and  external  series  or  shunt reference (see Table 1 for jumper setting details).

## External Shunt Voltage Reference Configuration

The EXRF bit (bit 5) in the CFG register (0x09) is set to '1' to switch to the external reference mode and the EXTI (bit 4) in the CFG register (0x09) is set to '1' to turn on the internal current source. The shunt reference (U5 or U6) is connected between the REFIN pin and AGND. Since the current source can supply up to 70µA, the shunt reference must have an operating current of 70µA or lower. Refer to  Table  4  for  a  recommended  voltage  reference  with operating  temperature  of  -40°C  to  125°C  to  match  the MAX14001/MAX14002 operating temperature.

## External Series Voltage Reference Configuration

The EXRF bit (bit 5) in the CFG register (0x09) is set to '1' to turn on the external reference mode and the EXTI (bit  4)  in  the  CFG  register  (0x09)  is  set  to  '0'  since  no current source is required for a series reference. V DDF is used to supply the series reference (U3 or U7) input, and the  output  is  connected  to  the  REFIN  pin.  Since  V DDF can supply up to 70µA current, the series reference must have  a  maximum  operating  current  of  70µA  or  lower. Refer  to  Table  4  for  a  recommended  voltage  reference with operating temperature of -40°C to 125°C to match the MAX14001/MAX14002 operating temperature.

## Input Filters and Rectifiers

The  typical  application  for  the  MAX14001/MAX14002  is monitoring high-voltage DC signals, such as configurable binary inputs modules. A full-wave rectification filter (for U1) and a half-wave rectification filter (for U2) are implemented on  the  ADC  input  AIN  front-end  to  help  demonstrate the  typical  application.  The  filter  is  designed  to  accept  a 300VDC maximum input voltage at T1 or T2 and, after the filter, the signal is further attenuated by the resistor-divider to  provide  1.25V  maximum  at  the  ADC  input  AIN.  The users may change the filter circuit components as needed to fit in their own applications.

## MAX14001/MAX14002 Evaluation System

## Table 4. Recommended Voltage References

| PART NUMBER   | VENDOR            | TYPE             |
|---------------|-------------------|------------------|
| MAX6006       | Maxim Integrated  | Shunt Reference  |
| LM4041        | Maxim Integrated  | Shunt Reference  |
| LM4051        | Maxim Integrated  | Shunt Reference  |
| REF3312       | Texas Instruments | Series Reference |
| REF3012       | Texas Instruments | Series Reference |

For  high-voltage  applications,  it  is  recommended  to  use X/Y rated safety capacitors on C9, C22, C24, and C40 (not installed) on the filter circuits. It is also recommended to install C44 and C45 for applications that involve high-voltage surges or bursts.

## ADC Input (AIN) Resistor Divider

An  external  high  voltage  needs  to  be  divided  down  to meet  the  ADC  full-scale  range,  and  to  compare  this input  to  user-configured  comparator  lower  and  upper thresholds,  and  inrush  re-arm  and  trigger  thresholds. The  absolute  maximum  voltage  for  the  ADC  input is  -0.3V  to  +2V  and  the  user  must  ensure  that  any external voltage applied to the EV kit does not cause this range to be exceeded at the AIN pin of the target device.

By configuring jumpers J13 and J10 (for U1) or J30 and J29 (for U2), the EV kit can support three different input sources to the ADC input AIN:

- 1) Direct Mode (J10, J29 in position 1-2): Connect the input voltage at test point or SMA connector AINEXT1 (for U1) or AINEXT2 (for U2). If this option is used, care must be exercised to limit the voltage at AINEXT\_ to a range of -0.3V to +2V. Exceeding this range could permanently damage the IC. Direct mode excludes the depletion mode FET from the input circuit, removing all inrush and bias currents.
- 2) Safe  Voltage  Simulation  Mode  (Default  Mode)  (J10, J29 in position 2-3, and J13, J30 in position 2-3): This mode allows the features of the MAX14001/MAX14002 to  be  tested  without  the  use  of  hazardous  voltages. The input voltage (13.75VDC full-scale) is connected to test point V300\_13 (for U1) or V300\_13\_2 (for U2), and is scaled by MELF resistors R4 and R22 (for U1) or R25 and R37 (for U2) providing up to 1.25V at the ADC input.  The external FET may be connected by installing J2 (for U1) and J26 (for U2), which makes the inrush and bias current features available.
- 3) High-Voltage Mode (J10, J29 in position 2-3, and J13, J30 in position 1-2, and J4, J12 closed): This mode

allows the system to be used in real applications that frequently have hazardous input voltages. The user should be aware of the hazards associated with these voltages and know that applying hazardous voltages  to  the  circuit  could  cause  any  of  the associated test points or circuit traces to have a hazardous potential. The input voltage is connected to, polarity independent, terminal block T1 (full-wave rectification  circuit)  or,  polarity  protected,  terminal block T2 (half-wave rectification circuit), and is scaled by MELF resistors R1, R2, R3, and R4 (for U1) or R9, R24, R26, and R37 (for U2) providing up to 1.25V at the ADC input when 300VDC is applied to T1 or T2.

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX14001EVSYS# | EV System |
| MAX14002EVSYS# | EV System |

#Denotes RoHS compliant.

The MAX14001EVSYS# includes the MAX14001EVKIT# and USB2PMB2#.

The MAX14002EVSYS# includes the MAX14002EVKIT# and USB2PMB2#.

│

Evaluates: MAX14001, MAX14002

## MAX14001/MAX14002 Evaluation System

## MAX14001 Bill of Materials

Evaluates: MAX14001, MAX14002

| VALUE DESCRIPTION   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | CAPACITOR; THROUGH HOLE-RADIAL LEAD; POLYPROPYLENE; 0.01UF; 300V; TOL=20%; TG=-55 DEGC TO +105 DEGC; AUTO   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC= USE 20-00u01-M8   | CAPACITOR; THROUGH HOLE-RADIAL LEAD;   | 0.047UF POLYPROPYLENE; 0.047UF; 330V; TOL=20%   | 0.1UF CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | 1UF CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | 10UF CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; THROUGH HOLE-RADIAL LEAD; CERAMIC; 2200PF; 400V; TOL=20%; TG=-40 DEGC TO +125 DEGC; TC=Y5V DIODE; TVS; SMT; VRM=342V; IPP=2.8A BYG20J-E3 DIODE; RECT; SMA (DO-214AC); PIV=600V; IF=1.5A LTST-C191KSKT DIODE; LED; SMD LED; YELLOW; SMT (0603); VF=2.1V; IF=0.02A LTST-C191KGKT DIODE; LED; SMD LED; GREEN; SMT (0603); VF=2.15V; IF=0.02A LTST-C191KRKT DIODE; LED; SMD LED; RED; SMT (0603); VF=2V; IF=0.02A   | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | PEC02SAAN CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS TSW-202-23-G-S CONNECTOR; MALE; THROUGH HOLE; POST TERMINAL STRIP ASSEMBLY; STRAIGHT; 2PINS   | PEC03SAAN CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS CONNECTOR; MALE; THROUGH HOLE;   | PEC08DAAN BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC   | POST TERMINAL STRIP ASSEMBLY; STRAIGHT; 3PINS CONNECTOR; FEMALE; BOARDMOUNT; END LAUNCH JACK ASSEMBLY;   | NICKLE PLATED; STRAIGHT; 2PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS   | TSW-106-08-S-D-RA CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;   | TRAN; N-CHANNEL DEPLETION MODE MOSFET; NCH; TO-252AA; PD-(0.06W); I-(0.8A); V-(1000V)   | TRAN; GENERAL PURPOSE TRANSISTOR; NPN; SOT-23; PD-(0.3W); I-(0.2A); V-(40V)   | TRAN; 40V PNP SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD-(0.31W); I-(-0.2A); V-(-40V)   |                                                                                 |           |                |                     |    | CONNECTOR; MALE; THROUGH HOLE;   | TSW-203-23-G-S   |                                              | 142-0711-826   | INDUCTOR; SMT; WIREWOUND CHIP; 10UH; TOL=+/-20%;   | IXTY08N100D2     | PEC04SAAN 10UH 7.5A   | MMBT3904LT1G     | MMBT3906-7-F   |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|-----------|----------------|---------------------|----|----------------------------------|------------------|----------------------------------------------|----------------|----------------------------------------------------|------------------|-----------------------|------------------|----------------|
| MANUFACTURER        | KEYSTONE N/A                                                                                                               | VISHAY BCCOMPONENTS 0.01UF                                                                                  | MURATA; TDK 1000PF                                                                                                                                                                                                                    | TDK/KEMET/AVX 0.01UF                   | BCCOMPONENTS                                    | VISHAY                                                                                              | MURATA; TDK                                                                                    |                                                                                                  | 2200PF                                                                                                                                                                                                                                                                                                                                                                                                                     | 342V                                                                          | LITE-ON ELECTRONICS INC. LITE-ON ELECTRONICS INC.                                                                         | TDK                                                                                                                                                               | 5010 SULLINS                                                                                         | SAMSUNG ELECTRONICS                                            | KEMET LITTELFUSE VISHAY GENERAL SEMICONDUCTOR 5011                                                       | LITE-ON ELECTRONICS INC. ?                                                                 | ?                                                                             |                                                                                         | SULLINS                                                                       | DIODES INCORPORATED                                                                   | SAMTEC                                                                          |           |                | SULLINS ELECTRONICS |    | CORP.                            |                  | JOHNSON COMPONENTS SULLINS ELECTRONICS CORP. | SAMTEC         | ABRACON SAMTEC                                     | IXYS CORPORATION |                       | ON SEMICONDUCTOR |                |
| QTY MFG PART #      | 10 5014                                                                                                                    | 1 BFC233860103                                                                                              | GRM188R72A102KA01; C1608X7R2A102K                                                                                                                                                                                                     | 8                                      | 2 CGA3E2X7R2A103K; C0603C103K1RA 1              | F339X134733MFP2B0 6                                                                                 |                                                                                                | GRM188R72A104KA35; CC0603KRX7R0BB104                                                             | C1608X7R1V105K080AC                                                                                                                                                                                                                                                                                                                                                                                                        | 2 1.5SMC400CA 2 BYG20J-E3                                                     | 2 LTST-C191KSKT 2 LTST-C191KGKT                                                                                           | 4 2 LTST-C191KRKT                                                                                                                                                 | 4 CL21B106KOQNNN                                                                                     | 1 C921U222MVVDBA                                               | 2 TSW-203-23-G-S                                                                                         | 8 PEC02SAAN 4 2 142-0711-826 2 PEC04SAAN                                                   | 2 ASPI-1040HI-100M 2 TSW-106-08-S-D-RA                                        | 2 IXTY08N100D2                                                                          | MMBT3904LT1G                                                                  | MMBT3906-7-F                                                                          | 10 5011                                                                         | PEC08DAAN | TSW-202-23-G-S | 8 PEC03SAAN         |  1 |                                  |                  |                                              |                |                                                    |                  |                       | 2                | 2              |
| REF_DES DNI/DNP     | FLT2_IN-, V300_13_2 -                                                                                                      | -                                                                                                           | 3 C2, C8, C10, C11, C25, C26, C31, C34                                                                                                                                                                                                | -                                      | -                                               | -                                                                                                   | -                                                                                              | 6 C5, C6, C13, C30, C32, C37 -                                                                   | 7 C7, C18, C33, C43 - -                                                                                                                                                                                                                                                                                                                                                                                                    | - - VDD1, VDD2, VDDF1, VDDF2, VDDL1, VDDL2, VREF1, VREF2, EXT_VDD2, - 12 5010 | 8 C14, C15, C35, C36 - -                                                                                                  | - 17 J1, J8, J14-J18, J32                                                                                                                                         | 19 J3, J5-J7, J10, J21, J28, J29 20 J11                                                              |                                                                | - 21 J13, J30                                                                                            | - - 22 J27, SMA4 23 JMP1, JMP2                                                             | 24 L1, L2 25 PMOD1, PMOD2                                                     | - 26 Q1, Q2                                                                             | 27 Q4, Q5                                                                     | 28 Q6, Q7                                                                             | EXT_VDDL1, EXT_VDDL2 GNDL, GATE1, GATE2, GNDF1, GNDF2, ISET1, ISET2, GNDL_TP14, |           | -              | -                   |    |                                  |                  | -                                            | -              | -                                                  | -                | -                     | -                | -              |
| ITEM AINEXT2,       | 1 VIN1, VIN2, AINEXT1, V300_13, FLT1_IN+, FLT1_IN-, FLT2_IN+,                                                              | 2 C1                                                                                                        |                                                                                                                                                                                                                                       | 4 C3, C29                              | 5 C4                                            |                                                                                                     |                                                                                                |                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                            | 10 D1, D2 11 D3, D4                                                           |                                                                                                                           | 9 C21                                                                                                                                                             | 12 DS3, DS4 13 DS5, DS6 14 DS7, DS8                                                                  | 15 EXT_VDD1,                                                   | 16 GNDF1_T3,                                                                                             | GNDF2_TP21 J26                                                                             |                                                                               |                                                                                         |                                                                               |                                                                                       | 18 J2, J4, J12,                                                                 |           |                |                     |    |                                  |                  |                                              |                |                                                    |                  |                       |                  |                |

│

## MAX14001/MAX14002 Evaluation System

## MAX14001 Bill of Materials (continued)

Evaluates: MAX14001, MAX14002

| DESCRIPTION RESISTOR; SMT; 750K OHM; 1%; 50PPM; 1W; THIN FILM RESISTOR; SMT; 820K OHM; 1%; 50PPM; 1W; THIN FILM RESISTOR; SMT; 10K OHM; 1%; 50PPM; 1W; THIN FILM RESISTOR; SMT; 10 OHM; 1%; 50PPM; 1W; THIN FILM RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0402; 120K OHM; 0.1%; 25PPM; 0.063W; THIN FILM RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.063W; THICK FILM; RESISTOR; 0402; 4.7K OHM; 1%; 100PPM; 0.10W; THICK FILM   | RESISTOR; SMT; 100K OHM; 1%; 50PPM; 1W; THIN FILM   | RESISTOR; 0402; 12K OHM; 1%; 100PPM; 0.1W; THICK FILM   | RESISTOR; 0402; 240 OHM; 1%; 100PPM; 0.10W; THICK FILM   | RESISTOR; 0402; 470 OHM; 1%; 100PPM; 0.125W; THICK FILM TEST POINT; ECONOMY SHUNT ASSEMBLY; STR;   | TOTAL LENGTH=2IN; BLACK; CONTACT BASE MATERIAL= BERYLLIUM COPPER TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL   | CONNECTOR; FEMALE; THROUGH HOLE;   | PCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS EVKIT PART - IC; MAX14001; CONFIGURABLE;   | ISOLATED 10-BIT ADCS FOR MULTI-RANGE BINARY INPUT; PACKAGE OUTLINE DEVICE: 21-0056; PACKAGE CODE: A20MS-6   | IC; VREF; REF3312 30-PPM/DEGC DRIFT VOLTAGE REFERENCE; SOT23   | DIODE; RECT; SMT; PIV=1.1V; IF=1A   | EVKIT PART-IC; VREF; 1MICROAMP SOT23 PRECISION SHUNT VOLTAGE REFERENCE; 1.25VOUT   | CAPACITOR; THROUGH HOLE-RADIAL LEAD; CERAMIC; 2200PF; 400V; TOL=20%; TG=-40 DEGC TO +125 DEGC; TC=Y5V   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; SMT (0402); CERAMIC CHIP; 47PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G   | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; MODEL=HT SERIES; TG=-55 DEGC TO +200 DEGC; TC=C0G CAPACITOR; THROUGH HOLE-RADIAL LEAD; CERAMIC; 100PF; 760V; TOL=10%; TG=-40 DEGC TO +125 DEGC; TC=Y5S PCB Board:MAX14001 EVALUATION KIT   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VALUE 750K 820K 10K 10 100 120K 0 4.7K                                                                                                                                                                                                                                                                                                                                                                                                            | 100K                                                | 12K                                                     | 240                                                      | 470                                                                                                | 531230-4                                                                                                                                                                                   | STC02SYAN                          | 1714971                                                                           | MAX14001                                                                                                    | REF3312AIDBZT                                                  | DF08SAE3                            | MAX6006BAUR+                                                                       | 2200PF                                                                                                  | 1UF 47PF                                                                                   | 1000PF                                                                                             | 100PF PCB                                                                                                                                                                                                                                            |
| MANUFACTURER VISHAY BEYSCHLAG VISHAY BEYSCHLAG VISHAY BEYSCHLAG VISHAY BEYSCHLAG PANASONIC TE CONNECTIVITY VISHAY DALE PANASONIC                                                                                                                                                                                                                                                                                                                  | VISHAY BEYSCHLAG                                    | PANASONIC                                               | PANASONIC                                                | VISHAY DRALORIC                                                                                    | TE CONNECTIVITY SULLINS ELECTRONICS CORP.                                                                                                                                                  |                                    | PHOENIX CONTACT                                                                   | MAXIM                                                                                                       | TEXAS INSTRUMENTS                                              | VISHAY GENERAL SEMICONDUCTOR        | MAXIM KEMET                                                                        | TAIYO YUDEN                                                                                             | VENKEL LTD./ YAGEO PHYCOMP/MURATA                                                          | KEMET                                                                                              | VISHAY BCCOMPONENTS MAXIM                                                                                                                                                                                                                            |
| DNI/DNP QTY MFG PART # - 2 MMB0207MC7503FB200 - 4 MMB0207MC8203FB200 - 2 MMB02070C1002FB200 - 2 MMB02070C1009FB200 - 2 ERJ-2RKF1000X - 2 CPF0402B120KE - 20 CRCW04020000ZS - 2 ERJ-2RKF4701                                                                                                                                                                                                                                                       | - 3 MMB02070C1003FB200                              | - 4 ERJ-2RKF1202                                        | - 4 ERJ-2RKF2400                                         | - 2 CRCW0402470RFKEDHP                                                                             | - 6 531230-4                                                                                                                                                                               | - 18 STC02SYAN                     | - 2 1714971                                                                       | - 2 MAX14001                                                                                                | - 2 REF3312AIDBZT                                              | - 1 DF08SAE3                        | - 2 MAX6006BAUR+                                                                   | DNI 4 C921U222MVVDBA 2 UMK107AB7105KA                                                                   | 8 C0402C0G500-470JNE; CC0402JRNPO9BN470; GRM1555C1H470JA01                                 | 2 C0402H102J5GAC                                                                                   | 2 VY1101K31Y5SQ63V0 - 1 MAX14001 207                                                                                                                                                                                                                 |
| ITEM REF_DES 29 R1, R9 30 R2, R3, R24, R26 31 R4, R37 32 R5, R6 33 R7, R39 34 R8, R38 35 R10-R14, R16-R21, R40-R42, R44-R49 36 R15, R43                                                                                                                                                                                                                                                                                                           | 37 R22, R23, R25                                    | 38 R27, R28, R32, R33                                   | 39 R29, R30, R35, R36                                    | 40 R31, R34                                                                                        | 41 SU1-SU6 42 SU7-SU24                                                                                                                                                                     |                                    | 43 T1, T2                                                                         | 44 U1,U2                                                                                                    | 45 U3, U7                                                      | 46 U4 47 U5,U6                      | 48 C9, C22, C24, C40                                                               | DNI                                                                                                     | 49 C12, C38 C16, C17, C19, C20, DNI                                                        | 50 C27, C39, C41, C42 51 C23, C28 DNI                                                              | 52 C44, C45 DNI 53 PCB TOTAL                                                                                                                                                                                                                         |

│

## MAX14001/MAX14002 Schematics

CAUTION: GNDF1 and GNDF2 are common nodes only. They do not provide earthed protection from hazardous voltages. If a hazardous voltage is applied to the field-side circuit, any point in the field-side circuit, including GNDF1 or GNDF2, may have a hazardous voltage.

<!-- image -->

## MAX14001/MAX14002 Schematics (continued)

<!-- image -->

CAUTION: GNDF1 and GNDF2 are common nodes only. They do not provide earthed protection from hazardous voltages. If a hazardous voltage is applied to the field-side circuit, any point in the field-side circuit, including GNDF1 or GNDF2, may have a hazardous voltage.

## MAX14001/MAX14002 Schematics (continued)

<!-- image -->

Evaluates: MAX14001, MAX14002

## MAX14001/MAX14002 Evaluation System

## MAX14001/MAX14002 PCB Layout

MAX14001/MAX14002 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX14001/MAX14002 Evaluation System

## MAX14001/MAX14002 PCB Layout (continued)

MAX14001/MAX14002 EV Kit-Top

<!-- image -->

Evaluates: MAX14001, MAX14002

│

## MAX14001/MAX14002 Evaluation System

## MAX14001/MAX14002 PCB Layout (continued)

MAX14001/MAX14002 EV Kit-Internal 2

<!-- image -->

Evaluates: MAX14001, MAX14002

│

## MAX14001/MAX14002 Evaluation System

## MAX14001/MAX14002 PCB Layout (continued)

MAX14001/MAX14002 EV Kit-Internal 3

<!-- image -->

Evaluates: MAX14001, MAX14002

│

## MAX14001/MAX14002 Evaluation System

## MAX14001/MAX14002 PCB Layout (continued)

MAX14001/MAX14002 EV Kit-Bottom

<!-- image -->

Evaluates: MAX14001, MAX14002

│

## MAX14001/MAX14002 Evaluation System

## MAX14001/MAX14002 PCB Layout (continued)

MAX14001/MAX14002 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX14001/MAX14002 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX14001, MAX14002