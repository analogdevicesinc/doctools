<!-- lastmod 2022-08-04 -->
## MAX96706/MAX96708 Evaluation Kit

## General Description

The MAX96706/MAX96708  evaluation kit (EV kit) provides  a  proven  design  to  evaluate  the  MAX96706 and MAX96708 high-bandwidth gigabit multimedia serial link (GMSL) deserializers with spread spectrum and fullduplex  control  channel,  through  the  use  of  a  standard FAKRA  coax  or  STP  cable.  The  EV  kit  also  includes Windows  Vista ® -  and  Windows  7-compatible  software that provides a simple graphical user interface (GUI) for exercising features of the device. The EV kit comes with a MAX96706GTJ+ or MAX96708GTJ+ IC installed.

For complete GMSL evaluation, using a standard FAKRA coaxial cable, order the MAX96706 or MAX96708 EV kit and a companion serializer board (e.g., the MAX96705 or MAX96711 EV kit, referenced in this document). For testing with STP cable, also order the MAXCOAX2STP-HSD adapter kit and refer to its data sheet. Only one adapter kit is required per link (connecting the serializer and deserializer boards).

Note: In  the  following  sections,  MAX96706/708 and the term 'deserializer' refer to the MAX96706 or MAX96708 IC and MAX96705/711 and the term 'serializer' refer to the MAX96705 or MAX96711 IC.

Note: This  document  applies  to  both  coax  and  STP EV kits. This document covers coax cables, but the information provided applies equally to STP cables.

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

## Features

- Accepts GMSL Serial Data through FAKRA Connectors as Inputs and Outputs 16-Bit Parallel Output Data
- Power Over Coax (POC) Capable
- Windows Vista- and Windows 7-Compatible Software
- USB-Controlled Interface (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

## Items included in the Evaluation Kit Package

| ITEM DESCRIPTION                       |   QTY |
|----------------------------------------|-------|
| MAX96706 or MAX96708 coax EV kit board |     1 |
| 2m FAKRA cable assembly                |     1 |
| USB cable                              |     1 |

## MAX96706/MAX96708 EV Kit Files

Figure 1. Deserializer Test Setup Block Diagram

| FILE                             | DESCRIPTION                                |
|----------------------------------|--------------------------------------------|
| MAXSerDesEV-N_Vxxxx_ Install.EXE | Installs the EV kit files on your computer |
| MAXSerDesEV-N.EXE                | Graphical user interface (GUI) program     |
| CDM20600.EXE                     | Installs the USB device driver             |
| USB_Driver_Help_200.PDF          | USB driver installation help file          |

<!-- image -->

Windows and Windows Visa are registered trademarks and registered service marks of Microsoft Corporation.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## Quick Start

## Required Equipment

- MAX96706 or MAX96708 EV kit
- MAX96705 or MAX96711 EV kit
- 2m FAKRA cable assembly (included in the MAX96706 and MAX96708 EV kits)
- &gt; 20MHz function generator (optional)
- PC with Windows Vista or Windows 7 and a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- Ammeter
- 500mA, 5V DC power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items from the EV kit  software.  Text  in bold  and  underlined refers  to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com\EVKitsoftware to download and install the latest version of the software, and then do the following:
- Double-click  on  GMSL  SerDes  Evaluation  Kit Software-Nuvoton µC.
- Download the MAXSerDesEV-N\_Vx\_x\_x\_x\_ Install.ZIP file (8MB).
- Extract and install the MAXSerDesEV-N\_ Vx\_x\_x\_x\_Install.EXE file. The installation application will install the USB driver. If the USB driver installation was not successful, install the appropriate  USB  driver  for  your  computer  by  visiting www.ftdichip.com/Drivers/VCP.htm.
- 2) Verify that jumpers on the serializer board are in their default positions, as shown in Figure 15.
- 3) Verify  that  jumpers  on  the  deserializer  board  are  in their default positions, as shown in Figure 16.
- 4) Set up the system, as shown in Figure 1.
- 5) Connect  the  FAKRA  cable  from  the  OUT+  terminal on  the  serializer  board  to  the  IN0+  terminal  on  the deserializer board.
- 6) Connect  the  USB  cable  between  the  PC  and  USB port  on  the  Nuvoton  microcontroller  daughter board on the deserializer board.
- 7) Connect the power supply to the +5VIN/GND terminals on the serializer board.

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

- 8) Turn on the power supply.
- 9) Verify that LED\_PWR on the deserializer board lights up, indicating that the deserializer board has power.
- 10)  Verify  that  LED\_PWR  on  the  serializer  board  lights up, indicating that the serializer board has power.
- 11)  Verify that LOCK\_LED on the deserializer EV board lights up, indicating that the link has been successfully  established.  If  LOCK\_LED  is  off,  go  to  the Troubleshooting section at the end of this document and fix the problem before continuing..
- 12)  Start the EV  kit software by selecting Start | Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .
- 13)  The Configuration  Settings window  opens  (see Figure  2)  and  the  GUI  automatically  searches  for any active listener in both I 2 C and UART mode and identifies a valid GMSL product. Once a valid device is identified, the corresponding configuration jumpers are displayed to help the user configure the serializer and deserializer.
- 14)  In case an operating evaluation board with a Nuvoton microcontroller is not found, a window appears (Figure 3) warning as such. Press OK to  continue  and  start  the  GUI  anyway,  or  press Cancel to terminate the application. Go  to the Troubleshooting section at the end of this document and fix the problem before continuing.
- 15)  When an operating Nuvoton microcontroller is found, the GUI checks the firmware version in the microcontroller and prompts the user to update (Figure 4).
- 16)  While the Configuration Settings window  is open, press the Identify  Devices button to search for the devices connected.

Only Link Type and Device Address selections on the Configuration Settings window affect the EV kit operation. Other items are for user reference only.

- 17)  Press the Connect button to open the Evaluation Kit window and devices under test (DUT) register maps (Figure 5). The GUI will read all internal registers of the serializer and deserializer and update the corresponding tabs.
- 18)  Press the Read All button in the Serializer group box to read all the serializer registers.
- 19)  Press  the MAX96706  Des tab  and  then  press  the Read All button in the Deserializer group box to read all the deserializer registers.
- 20)  Select any  of the other tabs to evaluate  other serializer/deserializer (SerDes) functions.

## MAX96706/MAX96708 Evaluation Kit

## Table 1. Jumper Descriptions*

| JUMPER   | SIGNAL   | DEFAULT POSITION   | FUNCTION                                                                                                                 |
|----------|----------|--------------------|--------------------------------------------------------------------------------------------------------------------------|
| J4       | IN0+     | -                  | GMSL IN1+ FAKRA connector                                                                                                |
| J5       | IN0-     | -                  | GMSL IN1- FAKRA connector                                                                                                |
| J6       |          | 5VOUT              | 5V POC sourced by the serializer                                                                                         |
| J6       |          | 5VIN               | 5V POC expected from the deserializer                                                                                    |
| J6       | POC1+    | 12V                | 12V POC can be applied by either serializer or deserializer                                                              |
| J6       |          | Open*              | POC disabled                                                                                                             |
| J7       |          | 5VOUT              | 5V POC sourced by the serializer                                                                                         |
| J7       |          | 5VIN               | 5V POC expected from the deserializer                                                                                    |
| J7       | POC1-    | 12V                | 12V POC can be applied by either the serializer or deserializer                                                          |
| J7       |          | Open*              | POC disabled                                                                                                             |
|          |          | 5VOUT              | 5V POC sourced by the serializer                                                                                         |
|          |          | 5VIN               | 5V POC expected from the deserializer                                                                                    |
| J8       | POC0+    | 12V                | 12V POC can be applied by either the serializer or deserializer                                                          |
|          |          | Open*              | POC disabled                                                                                                             |
| J9       |          | 5VOUT              | 5V POC sourced by the serializer                                                                                         |
| J9       |          | 5VIN               | 5V POC expected from the deserializer                                                                                    |
| J9       | POC0-    | 12V                | 12V POC can be applied by either the serializer or deserializer                                                          |
|          |          | Open*              | POC disabled                                                                                                             |
| J10      | LFL1+    | Short*             | Line fault monitored by the local device on the IN1+ terminal (LFLTVDD must be short; LFR1+, LFR1-, LFL1- must be open)  |
|          |          | Open               | Line fault not monitored by IN1+                                                                                         |
| J11      | LFR1+    | Short              | Line fault monitored by the remote device on the OUT+ terminal (LFLTVDD must be short; LFR1-, LFL1+, LFL1- must be open) |
|          |          | Open*              | Line fault can be monitored by local device, but not remote device                                                       |
| J12      | LFL1-    | Short              | Line fault monitored by the local device on the IN1- terminal (LFLTVDD must be short; LFR1+, LFL1-, LFL1+ must be open)  |
|          |          | Open*              | Line fault not monitored by IN1-                                                                                         |
| J13      | LFR1-    | Short              | Line fault monitored by the remote device on the OUT- terminal (LFLTVDD must be short; LFR1+, LFL1+, LFL1- must be open) |
|          |          | Open*              | Line fault can be monitored by local device, but not remote device                                                       |
|          |          | Short*             | Line-fault circuit powered, connected to AVDD                                                                            |
| J14      | LFLTVDD  | Open               | Line-fault circuit powered, nonfunctional                                                                                |
| J15      | LFL0+    | Short*             | Line fault monitored by the local device on the IN0+ terminal (LFLTVDD must be short; LFR0+, LFR0-, LFL0- must be open)  |
|          |          | Open               | Line fault not monitored by IN0+                                                                                         |

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

## MAX96706/MAX96708 Evaluation Kit

Table 1. Jumper Descriptions* (continued)

| JUMPER   | SIGNAL                               | DEFAULT POSITION   | FUNCTION                                                                                                                 |
|----------|--------------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------|
| J16      | LFR0+                                | Short              | Line fault monitored by the remote device on the OUT+ terminal (LFLTVDD must be short; LFR0-, LFL0+, LFL0- must be open) |
| J16      | LFR0+                                | Open*              | Line fault can be monitored by local device, but not remote device                                                       |
| J17      | LFL0-                                | Short              | Line fault monitored by the local device on the IN0- terminal (LFLTVDD must be short; LFR0+, LFR0-, LFL0+ must be open)  |
| J17      | LFL0-                                | Open*              | Line fault not monitored by IN0-                                                                                         |
| J21      | LFR0-                                | Short              | Line fault monitored by the remote device on the OUT- terminal (LFLTVDD must be short. LFR0+, LFL0+, LFL0- must be open) |
| J21      | LFR0-                                | Open*              | Line fault can be monitored by local device, but not remote device                                                       |
| J22      | EXT_RX/SDA, EXT_TX/SCL, GND, VDD_REF | -                  | 4-pin header to apply user microcontroller                                                                               |
| J23      | LMN0                                 | LMN0+              | Line monitor on channel 0+                                                                                               |
| J23      | LMN0                                 | LMN0-              | Line monitor on channel 0+                                                                                               |
| J23      | LMN0                                 | Open*              | Not connected                                                                                                            |
| J24      | LMN1                                 | LMN1+              | Line monitor on channel 1+                                                                                               |
| J24      | LMN1                                 | LMN1-              | Line monitor on channel 0+                                                                                               |
| J24      | LMN1                                 | Open*              | Not connected                                                                                                            |
| J25      | ADD2                                 | Short              | ADD2 = 1                                                                                                                 |
| J25      | ADD2                                 | Open*              | ADD2 = 0                                                                                                                 |
| J26      | HIM                                  | Short              | High-immunity mode                                                                                                       |
| J26      | HIM                                  | Open*              | Bypass mode                                                                                                              |
| J27      | ADD0                                 | Short              | ADD0 = 1                                                                                                                 |
| J27      | ADD0                                 | Open*              | ADD0 = 0                                                                                                                 |
| J28      | ADD1                                 | Short              | ADD1 = 1                                                                                                                 |
| J28      | ADD1                                 | Open*              | ADD1 = 0                                                                                                                 |
| J30      | ADD3                                 | Short              | ADD3 = 1                                                                                                                 |
| J30      | ADD3                                 | Open*              | ADD3 = 0                                                                                                                 |
| J31      | I2CSEL                               | Short*             | I 2 C mode                                                                                                               |
| J31      | I2CSEL                               | Open               | UART mode                                                                                                                |
| J32      | IOVDD_DUT                            | Short*             | IOVDD applied to U1                                                                                                      |
| J32      | IOVDD_DUT                            | Open               | Apply ammeter to measure current drawn by U1 IOVDD                                                                       |
| J33      | GPI                                  | L                  | U1 GPI pin shorted to GND                                                                                                |
| J33      | GPI                                  | H                  | U1 GPI pin pulled high                                                                                                   |
| J33      | GPI                                  | Open*              | Not connected                                                                                                            |

Evaluates: MAX96706/MAX96708

with Coax or STP Cable

## MAX96706/MAX96708 Evaluation Kit

Table 1. Jumper Descriptions* (continued)

| JUMPER   | SIGNAL   | DEFAULT POSITION   | FUNCTION                                                                        |
|----------|----------|--------------------|---------------------------------------------------------------------------------|
| J35      | MS/HVEN  | L                  | U1 MS/HVEN pin shorted to GND                                                   |
| J35      | MS/HVEN  | H                  | U1 MS/HVEN pin pulled high                                                      |
| J35      | MS/HVEN  | Open*              | Not connected                                                                   |
| J37      | PWDN     | Short*             | U1 powered                                                                      |
| J37      | PWDN     | Open               | U1 not powered                                                                  |
| J39      | TX_SCL   | TX                 | U1 TX/SCL pin connected to µC RX pin                                            |
| J39      | TX_SCL   | SCL*               | U1 TX/SCL pin connected to µC SDApin                                            |
| J39      | TX_SCL   | Open               | U1 TX/SCL pin left open                                                         |
| J40      | RX_SDA   | RX                 | U1 RX/SDA pin connected to µC RX pin                                            |
| J40      | RX_SDA   | SDA*               | U1 RX/SDA pin connected to µC SDApin                                            |
| J40      | RX_SDA   | Open               | U1 RX/SDA pin left open                                                         |
| J41      | IN0+     | -                  | GMSL IN0+ FAKRA connector                                                       |
| J42      | SCLPU    | Short*             | SCL is pulled up                                                                |
| J42      | SCLPU    | Open               | SCL is not pulled up                                                            |
| J43      | IN0-     | -                  | GMSL IN0- FAKRA connector                                                       |
| J44      | SDAPU    | Short*             | SDApulled up                                                                    |
| J44      | SDAPU    | Open               | SDAnot pulled up                                                                |
| J45      | SDAPU    | Short*             | SDApulled up                                                                    |
| J45      | SDAPU    | Open               | SDAnot pulled up                                                                |
| J46      | SDAPU    | Short*             | SDApulled up                                                                    |
| J46      | SDAPU    | Open               | SDAnot pulled up                                                                |
| J47      | U15 ch3  | Open*              | VLC3 = U15 level shifter, ch3 low side VLC4 = U15 level shifter, ch4 low side   |
| J49      | U15 ch4  | Open*              | VHC3 = U15 level shifter, ch3 high side VHC4 = U15 level shifter, ch4 high side |
| J50      | MON+     | -                  | SMAconnector, MON output positive                                               |
| J51      | MON-     | -                  | SMAconnector, MON output negative                                               |
| J53      | EXSDAPU  | Short*             | On-board pullup applied on external µC SDAsignal                                |
| J53      | EXSDAPU  | Open               | External µC SDAsignal must be pulled up externally                              |
| J54      | EXSCLPU  | Short*             | On-board pullup applied on external µC SCL signal                               |
| J54      | EXSCLPU  | Open               | External µC SCL signal must be pulled up externally                             |

*Jumper selections in the Serializer/Deserializer group boxes on the Configuration Settings window are for reference only and do not affect software operation.

**Default position.

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

## MAX96706/MAX96708 Evaluation Kit

## Detailed Description of Software

To  start  the  serializer  evaluation  kit  GUI,  select Start  | All Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

## Configuration Settings Window

The Configuration Settings window is the first window that opens after successful program launch. It allows the user to specify serializer and deserializer board setup and mode of operation (Figure 2).

Figure 2. MAXSerDesEV-N EV Kit Software: Configuration Settings Window (shown with the MAX96705 and MAX96706 EV Kits Connected)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the Link Type drop-down list, I2C or UART from the Bus drop-down list, and whether the Serializer or Deserializer should  be  connected  to  the USB  controller.  Upon changing  any  of  these  parameters,  conflicting  jumper

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

settings  will  be  highlighted,  guiding  the  user  to  check and make the corresponding changes on the evaluation boards. Only Link Type and Device Address selections on  the Configuration  Settings window  affect  EV  kit operation.  Other  items,  including  jumper  selections,  are for user reference only.

Figure 3. MAXSerDesEV-N EV Kit Software: Warning! Nuvoton µController is not Detected.

<!-- image -->

Figure 4. MAXSerDesEV-N EV Kit Software: Warning! Microcontroller Firmware is Not the Latest Version

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## Serializer and Deserializer Jumper Selection Blocks

The Serializer and Deserializer  Jumper  Selection blocks  list  jumpers  on  the  evaluation  boards  of  the selected Device  ID and  displays  the  correct  shunt positions based  on  the conditions selected in the Controller blocks.

## Identify Devices Button

The Identify  Devices buttons  causes  the  GUI  to  scan the  system  and  hunt  for  slave  addresses  on  the  bus. Upon successful communication, it reads the Device ID register  from  the  DUTs  and  displays  the  corresponding jumper lists on the Serializer and Deserializer Jumper Selection blocks.  It  is  also  possible  to  select  a  device from the Device ID drop-down list and manually change the slave address in the Device Address edit box. It is a good practice to utilize the Identify Devices button and verify communication with the DUTs before attempting to Connect .

Figure  15  and  Figure  16  show  jumper  settings  on  the serializer and deserializer PCBs for coax cable and I 2 C communication with the USB controller connected to the deserializer board. Refer to the respective IC data sheets for  detailed  configuration  information.  See  Table  1  for PCB jumper descriptions.

## Connect Button

The Connect button opens the Evaluation Kit window. The  GUI  reads  the  serializer  and  deserializer  registers and  updates  the  register  maps  for  both.  Successful register  map  updates  are  indicated  by  green  LED indicators. In case of a communication problem, the LED indicators turn red.

## Cancel - Do Not Connect Button

The Cancel  -  Do  not  Connect button  opens  the Evaluation Kit window without attempting to connect to the  on-board  microcontroller.  Although  there  will  be  no communication with the microcontroller, all functions and tabs corresponding to the selected Device ID s  become active once there.

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 5 provides access  to  all  internal  registers  and  functions  of  the DUTs by means of reading and writing registers through different  tabs  to  allow  the  user  to  evaluate  various functions of the serializer and deserializer.

The Read All button updates the serializer and deserializer register maps by reading the DUTs' internal registers.

The Serializer group box provides pushbuttons to update the serializer's register maps. The Read All button reads register  contents  from  the  serializer  and  updates  the displayed  register  values.  The Load button  reads  and updates registers from a previously saved register map. The Save button saves the existing register values into a new file.

The Deserializer group  box  provides  pushbuttons  to update the deserializer's registers. The Read All button reads register contents from the deserializer and updates the displayed register values. The Load button reads and updates registers from a previously saved register map. The Save button saves the existing register values into a new file.

The Wake Up button applies the register write sequence described in the IC data sheets to wake up the DUTs from sleep mode.

The Open Configuration button returns to the Configuration Settings window. Use Open Configuration and Connect buttons  to  go  back  and forth  between Configuration  Settlings window  and Evaluation Kit window .

## MAX96706/MAX96708 Evaluation Kit

## MAX96705 Ser Tab

The MAX96705 Ser tab  (Figure  5)  lists  the  serializer's registers bitmaps. The Read and Write buttons in each register  group  box  allow  read/write  access  for  each bit  or  group  of  bits  that  specify  a  function  or  condition,

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

as  defined  in  the  respective  serializer  IC  data  sheet. The color  of  the  small  LED  indicator  next  to  the Read/ Write buttons indicates the communication status. Green indicates  successful  communication  and  red  indicates failed communication.

Figure 5. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX96705 Ser Tab (Serializer))

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## MAX96706 Des Tab

The MAX96705 Des tab (Figure 6) lists the deserializer's registers bitmaps. The Read and Write buttons in each register  group  box  allows  read/write  access  for  each bit  or  group  of  bits  that  specify  a  function  or  condition,

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

as  defined  in  the  respective  deserializer  IC  data  sheet. The color  of  the  small  LED  indicator  next  to  the Read/ Write buttons indicates the communication status. Green indicates  successful  communication  and  red  indicates failed communication.

Figure 6. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX96706 Des Tab (Deserializer))

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## Additional Features Tab

The Additional Features tab  (Figure  7)  provides  pushbuttons for specific functions that connected devices can

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

perform.  By  pressing  a  button,  a  window  pops  up  and launches the specific function selected. Function buttons not supported by the selected device are grayed out.

Figure 7. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

On  the Addtitional  Features tab,  press  the Serializer Crossbar  Switch button to launch the Serializer Crossbar Switch Configuration window (Figure 8). This capability  allows  rearranging  of  data  lines  between  the

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

parallel  input  and  output  by  the  serializer.  Refer  to  the respective  IC  data  sheet  for  a  detailed  description  and operation of the embedded crossbar switches.

Figure 8. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Serializer Crossbar Switch Configuration Window)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

On the Additional Features tab, press the Deserializer Crossbar  Switch button  to  launch  the Deserializer Crossbar Switch Configuration window (Figure 9). This capability  allows  rearranging  of  data  lines  between  the

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

parallel input and output by the deserializer. Refer to the IC  respective  data  sheet  for  a  detailed  description  and operation of the embedded crossbar switches.

Figure 9. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Deserializer Crossbar Switch Configuration Window)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

On  the Additional  Features tab,  press  the Timing Generator button  to  launch  this  function  (Figure  10), which allows the user to utilize the programmable video

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

timing generator  to generate/retime  the input  sync signals.  Refer  to  the  respective  IC  data  sheet  for  a detailed description.

Figure 10. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Timing Generator Window)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

On  the Additional  Features tab,  press  the Equalizer Visualization button  to  launch  this  function  (Figure  11), which allows compensating for higher cable attenuation

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

at  higher  frequencies.  Refer  to  the  respective  IC  data sheet for detailed description. Note: This function is not available in the MAX96708 IC.

Figure 11. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Equalizer Visualization Window)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

On the Additional  Features tab,  press  the Eye Width Measurement button to launch this function (Figure 12), which graphically displays eye width/opening of the high-

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

speed data over the link. Refer to the respective IC data sheet for a detailed description. Note: This function is not available in the MAX96708 IC.

Figure 12. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Eye Width Measurement Window)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

On the Additional Features tab, press the Show PRBS Test button to perform a PRBS test (Figure 13). Enter test duration (maximum 32,767s = 9.1hrs) in the Duration edit

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

box and press Start to start the test. At test completion, the  number  of  bit  errors  are  read  from  the  PRBSERR register and displayed in the PRBS Error Counter box.

Figure 13. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Expanded PRBS Test Window)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## Log\Low Level Tab

The Log\Low  Level tab  (Figure  14)  logs  all  activities between the GUIs and DUTs.

The Register Access group box allows reads or writes of  the  specified  slave  and  register  addresses.  Use  the Send String to EVKIT button to communicate with nonregister-based devices (such as the MAX7324). The SerDes  Baud  Rate drop-down list sets the

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

communications  baud  rate.  Note  that  the  baud  rate should be changed in small increments/decrements (one step change is forced by the GUI).

On the Log\Low Level tab, the 16-Bit Register Address Read block allows programming  devices  with any combination of 16-bit/8-bit register address/data.

Figure 14. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Log\Low Level Tab)

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## Detailed Description of Firmware

The Nuvoton microcontroller on the daughter board runs a  custom  firmware  that  ensures  reliable  communication between  the  PC  and  DUTs.  The  firmware  records  9-bit even-parity  data  received  from  the  USB  interface  while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received from the DUTs is immediately relayed to the USB port.

## Detailed Description of Hardware

The  MAX96706/MAX96708  EV  kit  provides  a  proven design  and  layout  for  the  MAX96706  and  MAX96708 GMSL  deserializers,  designed  to  be  reliable  with  ease of  use  and  flexibility.  The  evaluation  board  has  FAKRA connectors  to  receive  the  GMSL  serial-data  input  and outputs data in parallel format. On-board level translators and an easy-to-use USB-PC connection are included on the EV kit.

The  MAX96706/708  EV  kit  board  consists  of  three principal functional blocks:

- 1) Microcontroller daughter board
- 2) Application circuit block
- 3) Power-supply block

## Microcontroller Daughter Board

The Nuvoton-based microcontroller daughter board provides  UART  and  I 2 C  interfaces  that  communicate with  both  serializer  and  deserializer  boards  when  they are  powered  on  and  properly  configured.  The  Nuvoton microcontroller  is  programmed  with  the  latest  firmware available at the time of manufacturing.

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

To  use  the  EV  kit  with  an  externally  applied  controller, remove  the  Nuvoton  microcontroller  daughter  board from  the  EV  kit  board  (DB1  position)  and  apply  RX/ SDA,  TX/SCL,  VDD,  and  GND  signals  from  the  user microcontroller  to  the  corresponding  signals  on  J22  of the  deserializer  board.  Use  3.3V  or  5V  logic  level  from VDD\_REF, J48 header, or apply externally.

## Application Circuit Block

The  application  circuit  block  includes  the  deserializer and all  other  components  and  circuits  suggested  in  the respective  IC  data  sheet,  test  points,  and  provisions  to provide access to internal functions of the deserializer for evaluation of the product.

## Power Supplies

On-board  LDO  regulators  U2,  U3,  and  U12  generate various  voltage  levels  required  to  operate  the  EV  kit board. There are four options to power the board:

- 1) USB port (default)
- 2) 12V AC adapter
- 3) 5V power applied on +5VIN/GND terminals
- 4) Power over coax (POC), sourced by the serializer

Use header JU1 (5V0) to select the source powering the board. To operate the EV kit with voltage levels different from  what  are  generated  by  on-board  regulators,  move the desired IOVDD (JU2), DVDD (JU3), and AVDD (JU4) shunts from the INT to EXT position and apply the desired external voltage to the corresponding wire-loop terminal

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

Figure 15. MAX96705/MAX711 Coax EV Kit Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

## MAX96706/MAX96708 Evaluation Kit

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

Figure 16. MAX96706/MAX96708 Coax EV Kit Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

## Troubleshooting

Possible causes of board test failure include:

- 1) Coax cable not properly connected between the serializer OUT+ to the deserializer IN+.
- 2) PCLKIN not applied (e.g., FG output is disabled): Verify signal at the pins on the board.
- 3) PCLKIN and function generator output is not correct: Verify signal at the pins on the board.
- 4) Incorrect jumper setting on the deserializer board: Reverify.
- 5) Incorrect jumper setting on the serializer board: Reverify.
- 6) Bus selection on the GUI is not consistent with jumper position on the boards: Check and verify that the USB cable is properly connected.
- 7) USB port has locked: Exit application GUI, remove USB cable from the board, reinsert and relaunch the GUI.
- 8) Nuvoton µC is not communicating: Exit application GUI, remove USB cable from the board, reinsert and relaunch the GUI.
- 9) Deserializer board is faulty: Try a different board (if available).
- 10)  Serializer board is faulty: Try a different board (if available).

## MAX96706/MAX96708 Evaluation Kit

## Component Suppliers

| SUPPLIER                             | PHONE             | WEBSITE                 |
|--------------------------------------|-------------------|-------------------------|
| Amphenol RF                          | 800-627-7100      | www.amphenolrf.com      |
| Hong Kong X'tals Ltd.                | 852-35112388      | www.hongkongcrystal.com |
| Murata Americas                      | 770-436-1300      | www.murataamericas.com  |
| ON Semiconductor                     | 602-244-6600      | www.onsemi.com          |
| Rosenberger Hochfrequenztechnik GmbH | 011-49-86 84-18-0 | www.rosenberger.de      |
| TDK Corp.                            | 847-803-6100      | www.component.tdk.com   |

Note: Indicate that you are using the MAX96706 or MAX96711 when contacting these component suppliers.

## Component List, Schematics, and PCB Layout

Click  on  the  links  below  for  component  information, schematics, and PCB layout diagrams:

- MAX96706/MAX96708 EV Kit BOM
- MAX96706/MAX96708 EV Kit Schematics
- MAX96706/MAX96708 EV Kit PCB Layout

## Errata

On  the  MAX96706\_708  COAX  EVKIT  BOARD  REV-A silkscreen,  the  labels  for  headers  J32  and  J38  are swapped. The correct labels are listed below:

- Header J32 is CXTP\_DE
- Header J38 is IOVDD\_DUT

## Ordering Information

| PART                | TYPE        |
|---------------------|-------------|
| MAX96706 COAXEVKIT# | EV Kit      |
| MAX96708 COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#    | Adapter Kit |

#Denotes RoHS compliant.

Note: The MAX96706 and MAX96708 coax EV kits are normally ordered with a companion board:

-  MAX96705 coax EV kit (MAX96705COAXEVKIT#), or
-  MAX96711 coax EV kit (MAX96711COAXEVKIT#).

## Evaluates: MAX96706/MAX96708 with Coax or STP Cable

## MAX96706/MAX96708 Evaluation Kit

## Revision History

| REVISION NUMBER   | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
| -                 | 1/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX96706/MAX96708

with Coax or STP Cable

## TITLE: Bill of Materials

DATE: 1/11/16

DESIGN: max96706\_08\_evkit\_a

DNI = DO NOT INSTALL; DNP = DO NOT PROCURE

NOTE:

| REF_DES                                          | DNI/DNP   |   QTY | VALUE   | DESCRIPTION                                                                                                                   | MFG PART #                                                                                               | MANUFACTURER                                                          |
|--------------------------------------------------|-----------|-------|---------|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| C1                                               | -         |     1 | 1500PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1500PF; 50V; TOL=10%; MODEL=C SERIES; HIGH TEMPERATURE; TG=-55 DEGC TO +150 DEGC; TC=X8R | C1608X8R1H152K080                                                                                        | TDK                                                                   |
| C2                                               | -         |     1 | 10UF    | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                             | C1210C106M4RAC; C3225X7R1C106M200AB                                                                      | KEMET/TDK                                                             |
| C3, C8, C18, C108, C115, C127                    | -         |     6 | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; TG=-25 DEGC TO +85 DEGC; TC=JB                                       | C1608JB1C106M080AB                                                                                       | TDK                                                                   |
| C4, C6, C7, C9, C16, C17, C106, C107, C116, C117 | -         |    10 | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=- 55 DEGC TO +125 DEGC; TC=X7R                   | C1608X7R1E104K080AA                                                                                      | TDK                                                                   |
| C5, C34, C41, C45, C64, C114                     | -         |     6 | 100UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 10V; TOL=20%; MODEL=CL SERIES; TG=- 55 DEGC TO +85 DEGC; TC=X5R                   | CL32A107MPVNNN                                                                                           | SAMSUNG ELECTRONICS                                                   |
| C10, C13, C103, C130                             | -         |     4 | 10UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                      | C3216X5R1A106M160                                                                                        | TDK                                                                   |
| C11, C14, C19, C20, C53, C54, C57, C58, C104     | -         |     9 | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                         | C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA-T                                                  | TDK/MURATA/TAIYO YUDEN                                                |
| C15, C22, C27, C35, C42, C46, C61                | -         |     7 | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                   | C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV | VENKEL LTD./SAMSUNG ELECTRONICS/MUR ATA/TDK/YAGEO PHICOMP/TAIYO YUDEN |
| C23, C25, C26, C36, C43, C47, C60, C97           | -         |     8 | 1000PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C SERIES; TG=- 55 DEGC TO +125 DEGC; TC=X7R                  | C1005X7R1H102K050BA                                                                                      | TDK                                                                   |
| C33, C40, C44, C62, C63, C70-C72                 | -         |     8 | 0.22UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; MODEL=C SERIES; TG=- 55 DEGC TO +125 DEGC; TC=X7R                  | C1608X7R1H224K080                                                                                        | TDK                                                                   |

| REF_DES                           | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                                                        | MFG PART #          | MANUFACTURER              |
|-----------------------------------|-----------|-------|----------------|--------------------------------------------------------------------------------------------------------------------|---------------------|---------------------------|
| C85, C96, C99, C100               | -         |     4 | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R             | GRM155R61C104KA88   | MURATA                    |
| C118                              | -         |     1 | 100UF          | CAPACITOR; SMT (7343); TANTALUM CHIP; 100UF; 16V; TOL=20%; MODEL=TQC SERIES                                        | 16TQC100MYF         | PANASONIC                 |
| C129                              | -         |     1 | 2200PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; MODEL=C SERIES; TG=- 55 DEGC TO +125 DEGC; TC=X7R       | C1005X7R1H222K050BA | TDK                       |
| D4, D5                            | -         |     2 | B360B-13-F     | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMB; PIV=60V; Io=3A; -55 DEGC TO +125 DEGC                                     | B360B-13-F          | DIODES INCORPORATED       |
| D8, ERR_LED, LFLT_LED             | -         |     3 | SML-210VTT86   | DIODE; LED; SML-21 SERIES; RED; SMT (0805); PIV=2V; IF=0.02A                                                       | SML-210VTT86        | ROHM                      |
| L4, FB1, FB3, FB5, FB6, FB8, FB14 | -         |     7 | 120            | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/-25%; 3A                                                            | BLM18SG121TN1       | MURATA                    |
| GND1                              | -         |     1 | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5001                | KEYSTONE                  |
| H1_1, H1_2                        | -         |     2 | PBC15SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 15PINS; -65 DEGC TO +125 DEGC                                  | PBC15SAAN           | SULLINS ELECTRONICS CORP. |
| H2                                | -         |     1 | PPPC141LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 14PINS                               | PPPC141LFBN-RC      | SULLINS ELECTRONICS CORP  |
| H3                                | -         |     1 | PPPC031LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 3PINS                                | PPPC031LFBN-RC      | SULLINS ELECTRONICS CORP  |
| H4                                | -         |     1 | PPPC021LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 2PINS                                | PPPC021LFBN-RC      | SULLINS ELECTRONICS CORP  |
| J1                                | -         |     1 | PJ-002AH       | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                   | PJ-002AH            | CUI INC.                  |
| J2, J3, J18-J20, J34              | -         |     6 | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                          | 9020 BUSS           | WEICO WIRE                |
| J4, J5, J41, J43                  | -         |     4 | 59S2AX-400A5-Z | CONNECTOR; MALE; THROUGH HOLE; RIGHT ANGLE PLUG FOR PCB; RIGHT ANGLE; 5PINS                                        | 59S2AX-400A5-Z      | ROSENBERGER               |
| J6-J9, JU2                        | -         |     5 | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                          | PEC04SAAN           | SULLINS ELECTRONICS CORP. |
| J10-J17, J21                      | -         |     9 | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                          | PEC02SAAN           | SULLINS                   |

| REF_DES                                            | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                              | MFG PART #        | MANUFACTURER              |
|----------------------------------------------------|-----------|-------|----------------|------------------------------------------------------------------------------------------|-------------------|---------------------------|
| J22                                                | -         |     1 | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                | PEC04SAAN         | SULLINS ELECTRONICS CORP. |
| J23, J24, J33, J35, J37, J39, J40, J48             | -         |     8 | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC | PCC03SAAN         | SULLINS                   |
| J25-J28, J30-J32, J38, J42, J44-J47, J49, J53, J54 | -         |    16 | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC | PCC02SAAN         | SULLINS                   |
| J36                                                | -         |     1 | PBC14SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 14PINS; -65 DEGC TO +125 DEGC        | PBC14SAAN         | SULLINS ELECTRONICS CORP. |
| JU1                                                | -         |     1 | PBC05SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC         | PBC05SAAN         | SULLINS ELECTRONICS CORP. |
| JU3, JU4                                           | -         |     2 | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                | PEC03SAAN         | SULLINS                   |
| L1, L8, L12, L15                                   | -         |     4 | 330NH          | INDUCTOR; SMT (0603); FERRITE CORE; 330NH; TOL=+/-5%; 0.63A                              | LQW18CNR33J00     | MURATA                    |
| L2, L7, L11, L14                                   | -         |     4 | 6.8UH          | INDUCTOR; SMT (1210); WIREWOUND CHIP; 6.8UH; TOL=20%; 0.62A                              | LBC3225T6R8MR     | TAIYO YUDEN               |
| L3, L6, L10, L13                                   | -         |     4 | 100UH          | INDUCTOR; SMT (2424); WIREWOUND CHIP; 100UH; TOL=20%; 0.92A                              | LQH6PPN101M43L    | MURATA                    |
| L25                                                | -         |     1 | 1.5UH          | INDUCTOR; SMT; FERRITE-BEAD; 1.5UH; TOL=+/-20%; 27A                                      | 7443330150        | WURTH ELECTRONICS INC.    |
| LOCK_LED                                           | -         |     1 | SML-210MTT86   | DIODE; LED; SML-21 SERIES; GREEN; SMT (0805); PIV=2.2V; IF=0.02A                         | SML-210MTT86      | ROHM                      |
| MISC2                                              | -         |     1 | MAXEVCNTR-NUV# | EVKIT PART-NUVOTON MICRO CONTROLLER                                                      | MAXEVCNTR-NUV#    | MAXIM                     |
| N1, N2                                             | -         |     2 | FDS8449        | TRAN; N-CHANNEL POWER TRENCH MOSFET; NCH; NSOIC8 ; PD-(2.5W); I-(7.6A); V-(40V)          | FDS8449           | FAIRCHILD SEMICONDUCTOR   |
| R1                                                 | -         |     1 | 0.015          | RESISTOR; 1206; 0.015 OHM; 5%; 200PPM; 1W; THICK FILM                                    | ERJ-8BWJR015V     | PANASONIC                 |
| R2                                                 | -         |     1 | 14.3K          | RESISTOR, 0402, 14.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                               | CRCW040214K3FK    | VISHAY DALE               |
| R3, R5, R38                                        | -         |     3 | 24.9K          | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                 | CRCW060324K9FK    | VISHAY DALE               |
| R4                                                 | -         |     1 | 41.2K          | RESISTOR; 0603; 41.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                 | CRCW060341K2FK    | VISHAY DALE               |
| R6, R58                                            | -         |     2 | 11K            | RESISTOR; 0603; 11K OHM; 1%; 100PPM; 0.10W; THICK FILM                                   | CR0603-FX-1102ELF | BOURNS                    |
| R7, R9, R11, R13, R27, R48                         | -         |     6 | 2.2K           | RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                  | CRCW06032K20FK    | VISHAY DALE               |

| REF_DES                                | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                                                      | MFG PART #                                     | MANUFACTURER                         |
|----------------------------------------|-----------|-------|----------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------|--------------------------------------|
| R12, R33, R37, R39, R43, R44, R49, R50 | -         |     8 | 0              | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.063W; THICK FILM                                                            | CRCW04020000ZS                                 | VISHAY DALE                          |
| R14, R15, R22, R23, R28, R29, R34      | -         |     7 | 30K            | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                           | CRCW060330K0FK                                 | VISHAY DALE                          |
| R16, R19, R51, R52                     | -         |     4 | 45.3K          | RESISTOR; 0603; 45.3KOHM; 1%; 100PPM; 0.10W; THICK FILM                                                          | CRCW060345K3FK; ERJ- 3EKF4532V                 | VISHAY DALE/PANASONIC                |
| R17, R20, R53, R54                     | -         |     4 | 4.99K          | RESISTOR; 0201; 4.99K OHM; 1%; 100PPM; 0.05W ; THICK FILM                                                        | CRCW02014K99FK                                 | VISHAY DALE                          |
| R18, R21, R55, R71                     | -         |     4 | 49.9K          | RESISTOR; 0201; 49.9K OHM; 1%; 100PPM; 0.05W ; THICK FILM                                                        | CRCW020149K9FK                                 | VISHAY DALE                          |
| R24, R25, R30, R31, R40, R41, R45, R46 | -         |     8 | 2K             | RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                            | CRCW06032K0FK; ERJ- 3EKF2001V                  | VISHAY DALE/PANASONIC                |
| R26, R32, R42, R47                     | -         |     4 | 2K             | RESISTOR; 0201; 2K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                            | ERJ-1GEF2001C                                  | PANASONIC                            |
| R35, R59, R60                          | -         |     3 | 1K             | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                | CRCW06031001FK; ERJ- 3EKF1001V                 | VISHAY DALE; PANASONIC               |
| R36                                    | -         |     1 | 200K           | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                              | CRCW06032003FK                                 | VISHAY DALE                          |
| R57, R77, R78, R100                    | -         |     4 | 1K             | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                            | CR0603-FX-1001ELF                              | BOURNS                               |
| R74                                    | -         |     1 | 30K            | RESISTOR; 0402; 30K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                          | RC0402FR-0730KL                                | YAGEO PHICOMP                        |
| R75, R76                               | -         |     2 | 0              | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                             | RC1608J000CS; CR0603-J/- 000ELF;RC0603JR-070RL | SAMSUNG ELECTRONICS/BOU RNS/YAGEO PH |
| TP1, TP_ERRB, TP_LOCK, TP_LFLTB        | -         |     4 | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5000                                           | KEYSTONE                             |
| U1                                     | -         |     1 | MAX96706GTJ    | IC; HS80 PRELIMINARY; PACKAGE OUTLINE 32 TQFN; 0.50MM PITCH; 21-0140/T3255-8; MAX96706                           | MAX96706GTJ                                    | MAXIM                                |
| U2,U3,U12                              | -         |     3 | MAX1792EUA33   | IC; VREG; LOW-DROPOUT LINEAR REGULATOR; UMAX8                                                                    | MAX1792EUA33                                   | MAXIM                                |
| U4-U6                                  | -         |     3 | 74LVC1G86GV    | IC; XOR; 2-INPUT EXCLUSIVE-OR GATE; SOT753                                                                       | 74LVC1G86GV                                    | NXP                                  |
| U15                                    | -         |     1 | MAX3378EEUD+   | IC; TRANS; +/-15KV ESD-PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14                        | MAX3378EEUD+                                   | MAXIM                                |
| U23                                    | -         |     1 | MAX16952AUE/V+ | IC; CTRL; STEP-DOWN CONTROLLER WITH LOW OPERATING CURRENT; TSSOP16-EP                                            | MAX16952AUE/V+                                 | MAXIM                                |

| REF_DES                  | DNI/DNP   |   QTY | VALUE              | DESCRIPTION                                                                                                             | MFG PART #               | MANUFACTURER              |
|--------------------------|-----------|-------|--------------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------|---------------------------|
| X1-X4                    | -         |     4 | EVKIT_STANDOFF_4-4 | KIT; ASSY-STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4-40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/8IN)/NYLON          | EVKIT_STANDOFF_4- 40_3/8 | ?                         |
| MISC1                    | DNI       |     1 | AK67421-1-R        | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS              | AK67421-1-R              | ASSMANN                   |
| SU1-SU25                 | DNI       |    25 | STC02SYAN          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL | STC02SYAN                | SULLINS ELECTRONICS CORP. |
| C37, C48, C49, C59, C128 | DNP       |     5 | OPEN               | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                | N/A                      | N/A                       |
| DB1                      | DNP       |     1 | TEENSY 3.1         | EVKIT PART; MODULE; CTRL; TEENSY USB DEVELOPMENT BOARD; TH-37; CUSTOM PART ONLY                                         | TEENSY 3.1               | PJRC                      |
|                          |           |   268 |                    |                                                                                                                         |                          |                           |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

HARDWARE NAME:MAX96706\_08\_EVKIT\_A

HARDWARE NUMBER:

ENGINEER:

DATE:

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

DESIGNER:

ODB++/GERBER:

SILK\_BOT

08/07/2015

<!-- image -->

1"