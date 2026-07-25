<!-- lastmod 2022-08-04 -->
## MAX9278A/MAX9282A Evaluation Kits

## General Description

The  MAX9278A/MAX9282A  coax  evaluation  kits  (EV kit) provide a proven design to evaluate the MAX9278A/ MAX9282A high-bandwidth gigabit multimedia serial link (GMSL)  deserializers  with  spread  spectrum  and  fullduplex control channel with the use of a standard FAKRA coaxial  cable. The  EV  kit  also  includes  Windows  XP ® -, Windows  Vista ® -,  and  Windows  7-compatible  software that provides a simple graphical-user interface (GUI) for exercising the features of the device. The EV kit comes with a MAX9278AGTJ/V+ or MAX9282AGTJ/V+ installed.

For complete GMSL evaluation, using a standard FAKRA coaxial cable, order the MAX9278A/MAX9282A coax EV kit and a companion serializer board (MAX9275/MAX9279 coax EV kit referenced in this document). For evaluating with  STP  cable,  also  order  the  MAXCOAX2STP-HSD adapter kit and refer to its data sheet. Only one adapter kit is required per link, connecting the serializer and deserializer (SerDes) boards.

Ordering Information appears at end of data sheet.

## Items Included in the EV Kit Package

| DESCRIPTION                                        |   QTY |
|----------------------------------------------------|-------|
| MAX9278A coax EV kit or MAX9282A coax EV kit board |     1 |
| USB cable                                          |     1 |

## Evaluate: MAX9278A/MAX9282A

## Features

- Accepts GMSL Serial Data through FAKRA Connectors and Provides LVDS and Parallel Outputs
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- USB-PC Connection (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

Note: In  the following sections, MAX9278A/80A and the term 'deserializer' refer to the MAX9278A and MAX9282A ICs and MAX9275/79 and the term 'serializer' refer to the MAX9275 and MAX9279 ICs. The term SerDes refers to serializer/deserializer.

Note: This document applies to both coax and STP EV kits. This document covers coax cables, but the information provided applies equally to STP cables.

## MAX9278A/MAX9282A EV Kit Files

Figure 1. Deserializer Test Setup Block Diagram

| FILE                             | DESCRIPTION                                |
|----------------------------------|--------------------------------------------|
| MAXSerDesEV-D_Vxxxx_ Install.EXE | Installs the EV kit files in your computer |
| MAXSerDesEV-D.EXE                | Graphical user interface (GUI) application |
| CDM20600.EXE                     | Installs the USB device driver             |
| USB_Driver_Help_200.PDF          | USB driver installation help file          |

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## Quick Start

## Required Equipment

- MAX9278A/MAX9282A coax EV kit
- MAX9275/MAX9279 coax EV kit
- 2m Rosenberger FAKRA cable assembly (included with the deserializer EV kit)
- Function generator
- User-supplied Windows XP, Windows Vista, or Windows 7 PC with a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download and install the latest version of the EV kit software from www.maximintegrated.com :
- Search  for MAX9278 .  Then  select MAX9278 | Design Resources | Software |  GMSL SerDes  Evaluation  Kit  Software-Dallas  uC  | MAXSerDesEV-D\_Vxxxx\_Install.zip .
- Connect  the  USB  cable  from  the  PC  to  the deserializer board. A Windows message appears when connecting the EV kit board to the PC  for  the  first  time.  Each  version  of  Windows has  a  slightly  different  message.  If  you  see  a Windows message stating ready to use , proceed to the next step; otherwise, open the USB driver installation  help  file  PDF  to  verify  that  the  USB driver was installed successfully.
- 2) Verify  that  jumpers  on  the  deserializer  board  are  in their default positions, as shown in Figure 12.
- 3) Verify that jumpers on the serializer board are in their default positions, as shown in Figure 13.
- 4) Complete system setup, as shown in Figure 1.
- Connect  FAKRA  cable  from  OUT+  terminal  on serializer  board  to  IN+  terminal  on  deserializer board.
- Connect function generator output to MAX9275/ MAX9279 EV kit header H1\_PCLK\_IN.
- Connect  power  supply  to  +5VIN/GND  terminals on serializer board.
- 5) Turn on power supply and function generator.
- 6) Verify that LED\_PWR  on  the  EV  kit  turns  on, indicating that deserializer board is powered.
- 7) Verify that LED\_PWR on the MAX9275/MAX9279 EV kit turns on, indicating that serializer board is powered.
- Verify  that  LED10  (LOCK)  on  the  deserializer board turns on, indicating that the link has been successfully  established.  If  LED\_LOCK  is  off  or LED\_ERROR  is  on,  go  to  the Troubleshooting section  at  the  end  of  this  document  and  fix  the problem before continuing.
- 8) Start the EV kit software from Start | Programs | Maxim Integrated | MAXSerDesEV-D | MAXSerDesEV-D .
- 9) The Configuration Settings window opens (Figure 2) and  the  GUI  automatically  searches  for  any  active listener  in  both  I 2 C  and  UART  mode  and  identifies the  valid  GMSL  products.  Once  any  valid  device  is identified,  the  corresponding configuration jumpers are displayed to help users configure the SerDes.
- 10)  If an operating evaluation board with a Dallas microcontroller is not found, a window opens warning  as such  (see Figure 3).  Press OK to continue and  start the GUI  anyway,  or press Cancel to terminate the application. See the Troubleshooting section at the end of this document  to fix the problem before continuing. When an operating  Dallas  microcontroller  is  found, the  GUI  searches  for  active  listeners  with  known Device ID code. If found, the GUI identifies the device under test (DUT) and displays the corresponding list of jumpers on the EV board that must be set for the board to operate as desired.
- 11)  Jumper settings in the Configuration Settings window are for user reference as a guide to properly configure  the  evaluation  board.  Jumper selection  on  the  GUI  does  not  affect  the  board's operation.
- 12)  While  the Configuration Settings window is  open, the Identify Devices button can be pressed to search for  devices  connected.  If  the  devices  cannot  be identified, the most likely cause is an improper jumper setting.  See  the Troubleshooting section  at  the  end of this document to fix the problem before continuing.
- 13)  Press the Connect button to move  on  to the Evaluation Kit window (Figure 4).
- 14)  Press  the Read All button  to  read  all    registers  on the SerDes.

## Evaluate: MAX9278A/MAX9282A

## MAX9278A/MAX9282A Evaluation Kits

## Detailed Description of Software

To start the EV kit GUI, select Start | Programs | Maxim Integrated | MAXSerDesEV-D | MAXSerDesEVGUI-D .

## Configuration Settings Window

The Configuration  Settings window  (Figure  2)  is  the first  window  that  opens  after  program  launch.  It  allows the user to specify evaluation board setup and mode of operation.

Evaluate: MAX9278A/MAX9282A

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the LinkType drop-down  list, I2C or UART from  the Bus drop-down  list,  and  whether  the Serializer or Deserializer should connect to the USB controller. Upon changing any of these parameters, any conflicting jumper settings  are  highlighted,  guiding  the  user  to  check  and make  the  corresponding  changes  to  the  evaluation boards. Only LinkType and Device Address selections on the Configuration Settings window affect the EV kit operation. Other items, including jumper selection, are for user reference only.

Figure 2. MAXSerDesEV-D Evaluation Kit Software (Configuration Settings Window)

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

Figure 3. MAXSerDesEV-D Evaluation Kit Software (Warning!) No uC Found

<!-- image -->

## Serializer and Deserializer Jumper Selection Blocks

The Serializer  Jumper  Selection and Deserializer Jumper  Selection blocks  list  jumpers  for  the  selected Device ID s and display the correct shunt positions based on the conditions selected in the Controller group box.

## Identify Devices Button

The Identify Devices button causes the GUI to scan the system  and  hunt  for  slave  addresses  selectable  by  the SerDes input address pins. Upon successful communication, the identified Device ID and the corresponding jumper lists are displayed on the SerDes block. It is also possible to  select  a  device  from  the  list  in  the Device  ID dropdown list  and  manually  change  the  slave  address  in  the Device Address edit box. It is a good practice to utilize the Identify Devices function and verify communication with the DUTs before attempting to Connect .

Figure  12  and  Figure  13  show  jumper  settings  on  the SerDes  PCBs  for  coax  cable  and  I 2 C  communication with  the  USB  controller  connected  to  the  deserializer board. Refer the respective deserializer IC data sheet for detailed  configuration  information.  See Table  1  for  PCB jumper descriptions.

## Evaluate: MAX9278A/MAX9282A

## Connect Button

The Connect button  opens  up  the Evaluation  Kit window. The GUI reads the SerDes registers and updates the  register  maps  for  both.  Successful  register  map updates are indicated by green LED indicators. In case of a communication problem, the LED indicators turn red.

## Cancel - Do not Connect Button

The Cancel  -  Do  not  Connect button  opens  the Evaluation  Kit window  without  attempting  to  connect to  the  on-board  microcontroller.  Although  there  is  no communication with the microcontroller, all functions and tabs corresponding to the selected Device ID s  become active once there.

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 4 provides access  to  all  internal  functions  of  the  DUTs  by  means of reading and writing registers through different tabs to allow the user to evaluate various functions of the SerDes.

The Read All button updates the SerDes' device maps by reading the internal registers of the DUTs.

The Serializer group box provides pushbuttons to update the serializer register map from the DUT using the Read all MAX9279 button. The Load button reads and updates registers  from  a  previously  saved  file.  The Save button saves  the  current  register  contents  into  a  new  file  for future reference.

The Deserializer group  box  provides  pushbuttons  to update the deserializer's register map from the DUT using the Read All MAX9282A button. The Load button reads and updates registers from a previously saved file. The Save button  saves  the  current  register  contents  into  a new file for future reference.

The Open Configuration button opens the Configuration Settings window for any configuration change. Use the Open  Configuration and Connect buttons  to  go  back and  forth  between  the Configuration  Settings window and the Evaluation Kit window.

The Wake Up button applies the register write sequence described in the IC data sheets to wake the DUTs from sleep mode.

## MAX9278A/MAX9282A Evaluation Kits

## MAX9279 Tab

The MAX9279 tab (Figure 4) lists the serializer's bitmaps. The Read and Write buttons in each register group box allow read/write access for each bit or group of bits that specify a function or condition, as defined in the serializer

Evaluate: MAX9278A/MAX9282A

IC data sheet. The color of the small LED indicator next to  the Read/Write buttons  indicates  the  communication status.  Green  indicates  successful  communication  and red indicates failed communication.

Figure 4. MAXSerDesEV-D Evaluation Kit Software (MAX9279 Tab)

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## MAX9282A Tab

The MAX9282A tab  (Figure  5)  lists  the  deserializer's registers  and  bitmaps.  The Read and Write buttons in  each  register  group  box  allow  read/write  access for  each  bit  or  group  of  bits  that  specify  a  function  or

Evaluate: MAX9278A/MAX9282A

condition,  as  defined  in  the  deserializer  IC  data  sheet. The color  of  the  small  LED  indicator  next  to  the Read/ Write buttons indicates the communication status. Green indicates  successful  communication  and  red  indicates  failed communication.

Figure 5. MAXSerDesEV-D Evaluation Kit Software (MAX9282A Tab)

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## PRBS Test Tab

The PRBS Test tab (Figure 6) facilitates pseudorandombit  sequence  (PRBS)  testing.  Upon  pressing  the Start button,  the  SerDes  registers  are  programmed  (per  a defined  sequence  in  the  IC  data  sheets)  to  perform  a PRBS error-rate test. Enter the test duration (maximum

Evaluate: MAX9278A/MAX9282A

32,767s  =  9.1hrs)  in  the Duration edit  box  and  press Start to begin the test. At the end of the specified elapse time, the number of bit errors are read from the PRBSERR register and displayed in the PRBS Error Counter box.

Figure 6. MAXSerDesEV-D Evaluation Kit Software (PRBS Test Tab)

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## Log and Low Level Access Tab

The Log and Low Level Access tab (Figure 7) logs all activities between the GUI and DUTs.

The Register Access group  box  allows  1-byte  read  or writes  of  the  specified Device  Address and Register Address .  Press  the Send  String  to  EVKIT button

Evaluate: MAX9278A/MAX9282A

to  communicate  with  devices  that  are  not  registerbased  (such  as  the  MAX7324).  User-supplied  devices requiring other interface protocols must use the Raw TX byte codes to communicate. Note that in bypass mode, raw  data  is  passed  to  the  user-supplied  slave  device directly without modification.

Figure 7. MAXSerDesEV-D Evaluation Kit Software (Log and Low Level Access Tab)

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## HDCP Tab

The HDCP tab  (Figure  8)  is  viewable  only  for    SerDes that support the HDCP function. The HDCP registers of both SerDes are listed side-by-side with Read and Write buttons  for  each  register. Authenticate and Enable

## Evaluate: MAX9278A/MAX9282A

Encryption pushbuttons  initiate  the  HDCP  verification process. At the end of the operation, the color of the LED indicator turns green to indicate success or red to indicate failure of the function. Note: This tab is only functional for DUTs that support the HDCP function.

Figure 8. MAXSerDesEV-D Evaluation Kit Software (HDCP Tab)

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## Look Up Tables Tab

The Look Up Tables tab  (Figure  9)  provides  access  to the lookup tables (LUTs) of the deserializer. Use this tab to program, view, and edit the LUT settings of the red, green, and blue colors for color translation. LUT content edits can be performed on the entire 256 bytes of all three colors, of an individual color, or individual pixel of any color table.

Evaluate: MAX9278A/MAX9282A

The LUT contents can be saved in a .csv file to be used as  a  template  or  can  be  uploaded  from  an  existing  file. Sample LUT content is provided in the evaluation kit GUI.

If  any  of  the Save  to  File or Read from File functions are  executed,  the  operation  progress  is  shown  in  the Read/Write Progress Window (Figure 10).

Figure 9. MAX9278A/MAX9282A Deserializers (Initial Jumper Settings for Coax Link and I 2 C Communication)

<!-- image -->

Figure 10. MAXSerDesEV-D Evaluation Kit Software (Look Up Tables Read/Wrote {Read/Write Progress Window-relevant only to deserializers with image-enhancing capability)

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## AVINFO Tab

The AVINFO tab (Figure 11) provides easy read/write access to the general-purpose registers for storing user information. These registers are not associated with any of the IC functions.

Figure 11. MAXSerDesEV-D Evaluation Kit Software (AVINFO Tab)

<!-- image -->

Evaluate: MAX9278A/MAX9282A

## MAX9278A/MAX9282A Evaluation Kits

## Detailed Description of Firmware

The DS89C450  microcontroller (U12) runs custom firmware  that  ensures  reliable  communication  between the PC and DUTs. The firmware records 9-bit even-parity data received from the USB interface while RTS is set, and  plays  back  the  9-bit  data  with  1.5  stop  bits  timing when  RTS  is  cleared.  Data  received  by  the  DUTs  is immediately relayed to the USB port.

## Detailed Description of Hardware

The  MAX9278A/MAX9282A  coax  EV  kit  provides  a proven design and layout for the GMSL deserializers with the use of a standard FAKRA coax cable. On-board level translators  and  an  easy-to-use  USB-PC  connection  are included on the EV kit.

The deserializer EV kit board layout is divided into three principal sections:

- 1) Power-supply circuitry (on-board LDO  regulators U2  and  U3  power  the  AVDD,  DVDD,  and  IOVDD supplies from +5VIN)
- 2) MAX9278A/MAX9282A and support components
- 3) Microcontrollers (U10, U12) and support components

## Table 1. Jumper Description

| JUMPER   | SIGNAL       | SHUNT   | FUNCTION                                     |
|----------|--------------|---------|----------------------------------------------|
| J1       | IN+          | -       | GMSL positive input                          |
| J2       | IN-          | -       | GMSL negative input                          |
| J4       | UC_PWR       | VIN     | Power UC with the board power                |
| J4       | UC_PWR       | USB+5V  | Power UC from USB power                      |
| J6       | I_IOVDD      | Short*  | Connect ammeter to measure DUT IOVDD current |
| J7       | 12V jack     | -       | 12VAC adapter jack                           |
| J9       | ENABLE       | Short*  | Pull MAX9276 ENABLE pin high                 |
| J11      | LFL-         | Open*   | Line fault checked by DUT (local) on IN-     |
| J12      | EXT_UC       | -       | External μC connections                      |
| J13      | LFL+         | Short*  | Line fault checked by DUT (local) on IN+     |
| J14      | LVDS outputs | -       | LVDS outputs header                          |
| J16      | AVDD66       | Short*  | External UC signals level shifter V-high     |
| J17      | UCSDAPU      | Short*  | External UC SDApullup                        |
| J22      | TXSCLPU      | Short*  | DUTs TX/SCL pullup                           |
| J23      | RXSDAPU      | Short*  | DUTs RX/SDA pullup                           |

## Evaluate: MAX9278A/MAX9282A

## On-Board USB Interface

The  EV  kit  board  provides  UART  and  I 2 C  interface (through U12 and U14), which is intended to operate while both SerDes boards are powered and properly configured.

## User-Supplied Interface

To use the EV kit with a user-supplied interface, connect 'external'  controller  signals  to  the  corresponding  pins on  the  EXT\_UC  (J12)  header.  If  the  signal  level  of  the external  controller  is  different  from  the  on-board AVDD, then  remove  the  J16  shunt  and  connect  an  external controller V DD  signal to the J16 header as well.

## Power-Supply Block

The  EV  kit  can  be  powered  from  the  USB  port,  a  5V power supply, a 12V AC adapter jack, or dedicated power source for each of the AVDD, DVDD, and IOVDD signals. Header VIN selects between the 5V USB supply, +5VIN applied  on  the  +5VIN  (J39)  wire  loop,  or  the  regulator (which is sourced from the 12V), and then the on-board LDOs generate the AVDD, DVDD, and IOVDD voltages required by the DUTs.

To  test  the  DUTs  with  voltage  levels  different  from  the on-board-generated  AVDD,  DVDD,  and  IOVDD  levels, move  the  shunts  on  the  AVDD,  DVDD,  and  IOVDD headers  from  the  INT  to  EXT  positions  and  apply the  desired  voltages  on  the  corresponding  AVDD\_EXT, DVDD\_EXT, and IOVDD\_EXT terminals.

## MAX9278A/MAX9282A Evaluation Kits

## Table 1. Jumper Description (continued)

| JUMPER   | SIGNAL    | SHUNT   | FUNCTION                                                |
|----------|-----------|---------|---------------------------------------------------------|
| J24      | AUTO571   | Short*  | Pull MAX9277AUTOS pin high                              |
| J29      | I_DVDD    | Short*  | Connect ammeter to measure DUT DVDD current             |
| J30      | I_AVDD    | Short*  | Connect ammeter to measure DUTAVDD current              |
| J35      | UCSCLPU   | Short*  | External UC SCL pullup                                  |
| J36      | GND       | -       | GND terminal                                            |
| J37      | AVDD_EXT  | -       | Terminal to apply external AVDD voltage                 |
| J38      | DVDD_EXT  | -       | Terminal to apply external DVDD voltage                 |
| J39      | +5VIN     | -       | +5VIN terminal                                          |
| J40      | IOVDD_EXT | -       | Terminal to apply external IOVDD voltage                |
| J47      | H_BRIDGE  | -       | MAX9276/MAX9277 Control channel signals Bridge header   |
| J49      | P21       | Open*   | Pulls DS89C450 P2.1/A9 to GND                           |
| J50      | P20       | Open*   | Pulls DS89C450 P2.0/A8 to GND                           |
| J53      | PWDN76    | -       | Cut trace, 9276 PWDN pin connected to IOVDD_BR          |
| J56      | GPI61     | Short*  | Pull MAX9276 GPI pin high                               |
| J57      | RX/SDA_BR | Open*   | Connects application RX/SDA signals to MAX9276          |
| J58      | TX/SCL_BR | Open*   | Connects application TX/SCL signals to MAX9276          |
| J59      | HIM61     | Open*   | Pull MAX9276 SD/HIM pin high                            |
| J61      | LFR-      | Open*   | Line fault checked by serializer OUT-                   |
| J62      | LFR+      | Open*   | Line fault checked by serializer OUT+                   |
| JU1      | SSEN      | H       | High: LVDS output at 2% spread spectrum                 |
| JU1      | SSEN      | L*      | Low: LVDS output with no spread spectrum                |
| JU2      | OEN       | H*      | OEN pin pulled high                                     |
| JU2      | OEN       | L       | OEN pin pulled low                                      |
| JU3      | MCLK/LMN1 | MCLK*   | MCLK/LMN1 pin driven by the MCLK test point             |
| JU3      | MCLK/LMN1 | LMN1    | MCLK/LMN1 pin driven by the LMN1, IN- line-fault signal |
| JU4      | EQS       | H       | EQS pin pulled high                                     |
| JU4      | EQS       | L*      | EQS pin pulled low                                      |
| JU5      | GPI       | H       | GPI pin pulled high                                     |
| JU5      | GPI       | L*      | GPI pin pulled low                                      |
| JU6 JU7  | ADD0      | H       | DUTADD0 pin pulled high (see Table 2)                   |
| JU6 JU7  | ADD0      | L*      | DUTADD0 pin pulled low (see Table 2)                    |
|          | ADD1      | H       | DUTADD1 pin pulled high (see Table 2)                   |
|          | ADD1      | L*      | DUTADD1 pin pulled low (see Table 2)                    |
| JU8      | HIM       | H       |                                                         |
| JU8      | HIM       |         | DUT HIM pin pulled high                                 |
|          |           | L*      | DUT pin pulled low                                      |

Evaluate: MAX9278A/MAX9282A

## MAX9278A/MAX9282A Evaluation Kits

## Table 1. Jumper Description (continued)

| JUMPER   | SIGNAL     | SHUNT   | FUNCTION                                                                   |
|----------|------------|---------|----------------------------------------------------------------------------|
| JU9      | GPIO1/LMN0 | GPIO1   | GPIO1/LMN0 pin driven by the GPIO1 (JU41) header                           |
| JU9      | GPIO1/LMN0 | LMN0*   | GPIO1/LMN0 pin driven by the LMN0, IN+ line-fault signal                   |
| JU10     | MS         | L*      | DUT MS pin pulled low                                                      |
| JU10     | MS         | H       | DUT MS pin pulled high                                                     |
| JU11     | TI         | L       | μC (U12) pin P3.5/TI is pulled low                                         |
| JU11     | TI         | H       | μC (U12) pin P3.5/TI is pulled high                                        |
| JU11     | TI         | Open*   | μC (U12) pin P3.5/TI is Open                                               |
| JU13     | CDS        | L*      | DUT CDS pin pulled low                                                     |
| JU13     | CDS        | H       | DUT CDS pin pulled high                                                    |
| JU14     | VIN        | +5V     | DUT power levels supplied from 5V applied on +5VIN/GND terminals           |
| JU14     | VIN        | EXT     | DUT power levels supplied from IOVDD_EXT, DVDD_EXT, and AVDD_EXT terminals |
| JU14     | VIN        | USB*    | DUT power levels supplied from USB port                                    |
| JU15     | DRS        | L*      | DUT DRS pin pulled low                                                     |
|          |            | H       | DUT DRS pin pulled high                                                    |
| JU16     | GPIO0      | L       | DUT GPIO0 pin pulled low                                                   |
| JU16     | GPIO0      | H       | DUT GPIO0 pin pulled high                                                  |
| JU16     | GPIO0      | Open*   | DUT GPIO0 pin left unconnected                                             |
| JU17     | RXSDA      | RX      | UART-to-UART or UART-to-I 2 C mode of communication                        |
| JU17     | RXSDA      | SDA*    | I 2 C-to-I 2 C mode of communication                                       |
| JU18     | I2CSEL     | L       | DUT in UART mode of communication                                          |
| JU18     | I2CSEL     | H*      | DUT in I 2 C mode of communication                                         |
| JU19     | RXSDA      | TX      | UART-to-UART or UART-to-I 2 C mode of communication                        |
| JU19     | RXSDA      | SCL*    | I 2 C-to-I 2 C mode of communication                                       |
| JU21     | CDS_571    | H       | MAX9277 CDS_571 pin is pulled high                                         |
| JU21     | CDS_571    | L       | MAX9277 CDS_571 pin is pulled low                                          |
| JU21     | CDS_571    | CNTL3   | MAX9277 CDS_571 pin is driven by CNTL3 pin of the DUT (MAX9278/MAX9282)    |
| JU21     | CDS_571    | Open*   | MAX9277 CDS_571 pin left unconnected                                       |
| JU22     | MS_571     | H       | MAX9277 MS_571 pin is pulled high                                          |
| JU22     | MS_571     | L       | MAX9277 MS_571 pin is pulled low                                           |
| JU22     | MS_571     | CNTL0   | MAX9277 MS_571 pin is driven by CNTL0 pin of the DUT (MAX9278/MAX9282)     |
| JU22     | MS_571     | Open*   | MAX9277 MS_571 pin left unconnected                                        |

Evaluate: MAX9278A/MAX9282A

## MAX9278A/MAX9282A Evaluation Kits

## Table 1. Jumper Description (continued)

| JUMPER   | SIGNAL    | SHUNT   | FUNCTION                                                              |
|----------|-----------|---------|-----------------------------------------------------------------------|
|          |           | H       | MAX9277 CONF1 pin pulled high                                         |
| JU26     | CONF1_571 | L       | MAX9277 CONF1 pin pulled high                                         |
|          |           | Open*   | MAX9277 CONF1 pin left unconnected                                    |
|          |           | H*      | DUT is powered up                                                     |
| JU27     | PWDN\     | L       | DUT is powered down                                                   |
|          |           | H       | DUT BWS pin pulled high                                               |
| JU28     | BWS       | L*      | DUT BWS pin pulled low                                                |
|          |           | Open    | DUT BWS pin left unconnected                                          |
|          |           | H       | MAX9277 CONF0pin pulled high                                          |
| JU29     | CONF0_571 | L       | MAX9277 CONF0 pin pulled high                                         |
|          |           | Open*   | MAX9277 CONF0 pin left unconnected                                    |
|          |           |         | MAX9277 ADD1 pin pulled high                                          |
| JU30     | ADD1_571  | H       |                                                                       |
|          |           | L*      | MAX9277 ADD1 pin pulled low                                           |
| JU31     | DVDD      | INT*    | DUT DVDD source is from on-board LDO                                  |
|          |           | EXT     | DUT DVDD source is applied on DVDD_EXT terminal                       |
| JU32     | AVDD      | INT*    | DUTAVDD, LVDSVDD, MAX9276 AVDD source is from on-board LDO            |
|          |           | EXT     | DUTAVDD, LVDSVDD, MAX9276 AVDD source is applied on AVDD_EXT terminal |
|          |           | 1.8V    | DUT IOVDD = 1.8V source is from on-board LDO                          |
| JU33     | IOVDD     | 3.3V*   | DUT IOVDD = 3.3V source is from on-board LDO                          |
|          |           | EXT     | DUT IOVDD source is applied on IOVDD_EXT terminal                     |
|          |           | L       | STP GMSL link (see Table 2)                                           |
| JU34     | CXTP      | H*      | Coax+ GMSL link (see Table 2)                                         |
|          |           | Open    | Coax- GNSL link (see Table 2)                                         |
|          |           | H       | MAX9276 BWS pin pulled high                                           |
| JU35     | BWS_61    | L*      | MAX9276 BWS pin pulled low                                            |
|          |           | Open    | MAX9276 BWS pin left unconnected                                      |
|          |           | H       | MAX9277 BWS pin pulled high                                           |
| JU37     | BWS_571   |         | MAX9277 BWS pin pulled low                                            |
|          |           | L* Open | MAX9277 BWS pin left unconnected                                      |
|          |           | H       |                                                                       |
| JU38     | ADD0_571  |         | MAX9277 ADD0 pin pulled high                                          |
|          |           | L*      | MAX9277 ADD0 pin pulled low                                           |

Evaluate: MAX9278A/MAX9282A

## MAX9278A/MAX9282A Evaluation Kits

## Table 1. Jumper Description (continued)

| JUMPER   | SIGNAL   | SHUNT   | FUNCTION                                        |
|----------|----------|---------|-------------------------------------------------|
| JU39     | T2EX     | L       | U12-41 to GND (factory use only)                |
| JU39     | T2EX     | H       | U12-41 to USB+5V (factory use only)             |
| JU39     | T2EX     | Open*   | U12-41 open (factory use only)                  |
| JU40     | GPIO1    | L       | DUT GPIO1 pin pulled low                        |
| JU40     | GPIO1    | H       | DUT GPIO1 pin pulled high                       |
| JU40     | GPIO1    | Open*   | DUT GPIO1 pin left unconnected                  |
| JU51     | ADD161   | H       | MAX9276 ADD1 pin pulled high                    |
| JU51     | ADD161   | L*      | MAX9276 ADD1 pin pulled low                     |
| JU52     | I2CSELBR | L       | MAX9276 /MAX9277 in UART mode of communication  |
| JU52     | I2CSELBR | H*      | MAX9276 /MAX9277 in I 2 C mode of communication |
| J53      | MS61     | L*      | MAX9276 MS pin pulled low                       |
| J53      | MS61     | H       | MAX9276 MS pin pulled high                      |
| JU54     | ADD061   | H*      | MAX9276 ADD0 pin pulled high                    |
| JU54     | ADD061   | L       | MAX9276 ADD0 pin pulled low                     |
| JU55     | ADD261   | H       | MAX9276 ADD2 pin pulled high                    |
| JU55     | ADD261   | L*      | MAX9276 ADD2 pin pulled low                     |

Table 2. Device Address Selection (register 0x00, 0x01)

| PIN      | PIN   | PIN   | PIN   | DEVICE ADDRESS   | DEVICE ADDRESS   | DEVICE ADDRESS   | DEVICE ADDRESS   | DEVICE ADDRESS   | DEVICE ADDRESS   | DEVICE ADDRESS   | DEVICE ADDRESS   | DEVICE ADDRESS (hex)   | DEVICE ADDRESS (hex)   |
|----------|-------|-------|-------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------------|------------------------|
| CX/TP*   | ADD2  | ADD1  | ADD0  | D7               | D6               | D5               | D4               | D3               | D2               | D1               | D0               | SERIALIZER             | DESERIALIZER           |
| High/Low | Low** | Low** | Low** | 1                | 0                | 0                | X                | 0                | 0                | 0                | R/W              | 80                     | 90                     |
| High/Low | Low   | Low   | High  | 1                | 0                | 0                | X                | 0                | 1                | 0                | R/W              | 84                     | 94                     |
| High/Low | Low   | High  | Low   | 1                | 0                | 0                | X                | 1                | 0                | 0                | R/W              | 88                     | 98                     |
| High/Low | Low   | High  | High  | 0                | 1                | 0                | X                | 0                | 1                | 0                | R/W              | 44                     | 54                     |
| High/Low | High  | Low   | Low   | 1                | 1                | 0                | X                | 0                | 0                | 0                | R/W              | C0                     | D0                     |
| High/Low | High  | Low   | High  | 1                | 1                | 0                | X                | 0                | 1                | 0                | R/W              | C4                     | D4                     |
| High/Low | High  | High  | Low   | 1                | 1                | 0                | X                | 1                | 0                | 0                | R/W              | C8                     | D8                     |
| High/Low | High  | High  | High  | 0                | 1                | 0                | X                | 1                | 0                | 0                | R/W              | 48                     | 58                     |
| Open     | Low   | Low   | Low   | 1                | 0                | 0                | X                | 0                | 0                | X                | R/W              | 80                     | 92                     |
| Open     | Low   | Low   | High  | 1                | 0                | 0                | X                | 0                | 1                | X                | R/W              | 84                     | 96                     |
| Open     | Low   | High  | Low   | 1                | 0                | 0                | X                | 1                | 0                | X                | R/W              | 88                     | 9A                     |
| Open     | Low   | High  | High  | 0                | 1                | 0                | X                | 0                | 1                | X                | R/W              | 44                     | 56                     |
| Open     | High  | Low   | Low   | 1                | 1                | 0                | X                | 0                | 0                | X                | R/W              | C0                     | D2                     |
| Open     | High  | Low   | High  | 1                | 1                | 0                | X                | 0                | 1                | X                | R/W              | C4                     | D6                     |
| Open     | High  | High  | Low   | 1                | 1                | 0                | X                | 1                | 0                | X                | R/W              | C8                     | DA                     |
| Open     | High  | High  | High  | 0                | 1                | 0                | X                | 1                | 0                | X                | R/W              | 48                     | 5A                     |

Evaluate: MAX9278A/MAX9282A

## MAX9278A/MAX9282A Evaluation Kits

## Evaluate: MAX9278A/MAX9282A

Figure 12. MAX9278A/MAX9282A Initial Jumper Settings for I 2 C-COAX Mode

<!-- image -->

Evaluate: MAX9278A/MAX9282A

Figure 13. MAX9275/MAX9279 Initial Jumper Settings for I 2 C-COAX Mode

<!-- image -->

## MAX9278A/MAX9282A Evaluation Kits

## Troubleshooting

Possible causes of board test failure:

- Coax cable not properly connected between OUT+ of the serializer to IN+ of the deserializer.
- PCLKIN is not applied (e.g., FG output is disabled): Verify signal at the pins on the board.
- PCLKIN function generator output is not correct: Verify signal at the pins on the board.
- Incorrect jumper setting on the deserializer board: Reverify.
- Incorrect jumper setting on the serializer board: Reverify.

## Component Suppliers

| SUPPLIER                             | PHONE             | WEBSITE                 |
|--------------------------------------|-------------------|-------------------------|
| Amphenol RF                          | 800-627-7100      | www.amphenolrf.com      |
| Hong Kong X'tals Ltd.                | 852-35112388      | www.hongkongcrystal.com |
| Murata Americas                      | 770-436-1300      | www.murataamericas.com  |
| ON Semiconductor                     | 602-244-6600      | www.onsemi.com          |
| Rosenberger Hochfrequenztechnik GmbH | 011-49-86 84-18-0 | www.rosenberger.de      |
| TDK Corp.                            | 847-803-6100      | www.component.tdk.com   |

Note: Indicate that you are using the MAX9278A or MAX9282A when contacting these component suppliers.

## Component Lists, Schematics, and PCB Layout Diagrams

Click  on  the  links  below  for  component  information, schematics, and PCB layout diagrams:

- MAX9278A/MAX9282A EV Kit BOM
- MAX9278A/MAX9282A EV Kit Schematics
- MAX9278A/MAX9282A EV Kit PCB Layout

## Ordering Information

| PART                | TYPE        |
|---------------------|-------------|
| MAX9278A COAXEVKIT# | EV Kit      |
| MAX9282A COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#    | Adapter Kit |

#Denotes RoHS compliant.

Note: The MAX9278A and MAX9282A deserializer coax EV kits are normally ordered with a companion serializer board:

-    MAX9275 EV kit (MAX9275COAXEVKIT#), or
-    MAX9279 EV kit (MAX9279COAXEVKIT#)
- Bus selection on the GUI is not consistent with jumpers' position on the boards: Check and verify that the USB cable has been properly connected.
- USB port has locked: Exit the application/GUI and remove the USB cable from the board and reinsert, then relaunch the GUI.
- Nuvoton μC is not communicating: Exit the application/ GUI and remove the USB cable from the board and reinsert, then relaunch the GUI.
- Deserializer board is faulty: Try a different board (if available).
- Serializer board is faulty: Try a different board (if available).

## Evaluate: MAX9278A/MAX9282A

## MAX9278A/MAX9282A Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX9278A/MAX9282A

TITLE: Bill of Materials

DATE: 3/4/16

DESIGN: max9278a\_82a\_evkit\_a

|   QTY | REF_DES                                                                                                                                                | VALUE   | DNI/DNP   | MFG PART #                                        | DESCRIPTION                                                                                                   | MANUFACTURER     | COMMENTS   |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------|------------------|------------|
|    32 | C1, C3, C5, C7, C9, C11, C23, C25, C47, C59, C104, C105, C107, C109, C116, C117, C120, C124, C127-C132, C141, C270, C301, C303, C306, C307, C309, C311 | 0.1UF   | -         | C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/- 15% from -55degC to +125degC;  | KEMET/MURATA/TDK |            |
|     2 | C2, C34                                                                                                                                                | 10UF    | -         | TAJB106M016RNJ                                    | CAPACITOR; SMT (3528); TANTALUM CHIP; 10UF; 16V; TOL=20%; MODEL=TAJ SERIES                                    | AVX              |            |
|     3 | C4, C118, C133                                                                                                                                         | 10UF    | -         | C1608JB1C106M080AB                                | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; TG=-25 DEGC TO +85 DEGC; TC=JB                       | TDK              |            |
|    21 | C6, C8, C10, C12, C65, C72-C76, C79, C103, C106, C108, C110, C137, C302, C304, C305, C308, C310                                                        | 0.001UF | -         | 04022R102K9B20D                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.001UF; 50V; TOL=10%; MODEL=CC SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | YAGEO PHYCOMP    |            |
|     2 | C13, C20                                                                                                                                               | 0.22UF  | -         | GRM188F51H224ZA01D                                | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=20%; MODEL=Y5V; TG=-55 DEGC TO +125 DEGC; TC=+          | MURATA           |            |

|   QTY | REF_DES                             | VALUE   | DNI/DNP   | MFG PART #                                                                                               | DESCRIPTION                                                                                                     | MANUFACTURER                                                          | COMMENTS   |
|-------|-------------------------------------|---------|-----------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|------------|
|     2 | C14, C15                            | 0.22UF  | -         | C0805C224K5RAC;GRM2 1BR71H224KA;CGJ4J2X7 R1H224K125AA                                                    | CAPACITOR; SMT; 0805; CERAMIC; 0.22uF; 50V; 10%; X7R; -55degC to + 125degC                                      | KEMET/MURATA/TDK                                                      |            |
|     7 | C16, C17, C19, C21, C22, C24, C49   | 0.1UF   | -         | C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                     | VENKEL LTD./SAMSUNG ELECTRONICS/MURATA/ TDK/YAGEO PHICOMP/TAIYO YUDEN |            |
|     3 | C18, C28, C53                       | 3.3UF   | -         | AMK105BJ335MV-F                                                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 3.3UF; 4V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R        | TAIYO YUDEN                                                           |            |
|     4 | C26, C27, C121, C122                | 22PF    | -         | C0402C220J3GAC                                                                                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 22PF; 25V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                | KEMET                                                                 |            |
|     7 | C58, C69, C70, C81, C82, C201, C202 | 4.7UF   | -         | C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA-T                                                  | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R           | TDK/MURATA/TAIYO YUDEN                                                |            |
|     1 | C96                                 | 100UF   | -         | C3225Y5V0J107Z; GRM32EF50J107ZE20L                                                                       | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 6.3V; TOL=+80%-20%; MODEL=C SERIES; TG=-30 DEGC TO +85 DEGC; TC=Y5V | TDK/MURATA                                                            |            |
|     1 | C123                                | 0.033UF | -         | GRM155R71A333KA01                                                                                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.033UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R  | MURATA                                                                |            |

|   QTY | REF_DES                                                                                                                                   | VALUE          | DNI/DNP   | MFG PART #                            | DESCRIPTION                                                                                                      | MANUFACTURER              | COMMENTS   |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------|----------------|-----------|---------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------|------------|
|     1 | C125                                                                                                                                      | 1UF            | -         | C0402X5R100-105KNE; GRM155R61A105KE15 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                  | VENKEL LTD./MURATA        |            |
|     1 | C126                                                                                                                                      | 10UF           | -         | CL05A106MP5NUNC                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                 | SAMSUNG ELECTRONICS       |            |
|    28 | SD, WS, SCK, MCLK, TP14-TP18, CNTL1, CNTL2, ERR61, T_P14, T_P22-T_P27, T_VC2- T_VC4, GPIO061, LMN0571, GPIO161, LFLT571, LMN1571, LOCK_61 | N/A            | -         | 5000                                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | KEYSTONE                  |            |
|     9 | LED11-LED13, LED15, LED_RD, LED_T2, LED_WR, ERROR61, LED_PWR                                                                              | SML-210VTT86   | -         | SML-210VTT86                          | DIODE; LED; SML-21 SERIES; RED; SMT (0805); PIV=2V; IF=0.02A                                                     | ROHM                      |            |
|     5 | FB, FB1, FB3, FB4, FB9                                                                                                                    | 120            | -         | BLM18SG121TN1                         | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/- 25%; 3A                                                         | MURATA                    |            |
|     1 | H1                                                                                                                                        | PBC36DFBN      | -         | PBC36DFBN                             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 72PINS                                                       | SULLINS ELECTRONICS CORP. |            |
|     2 | J1, J2                                                                                                                                    | 59S2AX-400A5-A | -         | 59S2AX-400A5-A                        | CONNECTOR; FEMALE; THROUGH HOLE; FAKRA-HF RIGHT ANGLE PLUG; RIGHT ANGLE; 5PINS                                   | ROSENBERGER               |            |

|   QTY | REF_DES                                                                           | VALUE     | DNI/DNP   | MFG PART #   | DESCRIPTION                                                                               | MANUFACTURER              | COMMENTS   |
|-------|-----------------------------------------------------------------------------------|-----------|-----------|--------------|-------------------------------------------------------------------------------------------|---------------------------|------------|
|     1 | J3                                                                                | PBC02SAAN | -         | PBC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC          | SULLINS ELECTRONICS CORP. |            |
|    36 | J4, JU1-JU11, JU13, JU15-JU19, JU26- JU32, JU34, JU35, JU37-JU39, JU41, JU51-JU55 | PCC03SAAN | -         | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC  | SULLINS                   |            |
|    17 | J6, J9, VS, J11, J13, J16, J17, J22-J24, J29, J30, J35, J49, J50, J61, J62        | PCC02SAAN | -         | PCC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC  | SULLINS                   |            |
|     1 | J7                                                                                | PJ-002AH  | -         | PJ-002AH     | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                          | CUI INC.                  |            |
|     1 | J12                                                                               | PBC04SAAN | -         | PBC04SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC          | SULLINS ELECTRONICS CORP. |            |
|     1 | J14                                                                               | PEC07DAAN | -         | PEC07DAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 14PINS                                | SULLINS ELECTRONICS CORP. |            |
|     5 | J36-J40                                                                           | MAXIMPAD  | -         | 9020 BUSS    | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG | WEICO WIRE                |            |

|   QTY | REF_DES                                                                                                                   | VALUE           | DNI/DNP   | MFG PART #        | DESCRIPTION                                                                  | MANUFACTURER              | COMMENTS   |
|-------|---------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------|------------------------------------------------------------------------------|---------------------------|------------|
|     1 | J47                                                                                                                       | PEC04DAAN       | -         | PEC04DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                    | SULLINS ELECTRONICS CORP. |            |
|     6 | J53, J56-J59, J63                                                                                                         | PEC02SAAN       | -         | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                    | SULLINS                   |            |
|     1 | J101                                                                                                                      | 690-004-221-023 | -         | 690-004-221-023   | CONNECTOR; FEMALE; THROUGH HOLE; USB-B TYPE; SINGLE DECK; RIGHT ANGLE; 4PINS | EDAC                      |            |
|     4 | JU14, JU21, JU22, JU33                                                                                                    | PEC04SAAN       | -         | PEC04SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                    | SULLINS ELECTRONICS CORP. |            |
|     2 | LED10, LOCK61                                                                                                             | SML-210MTT86    | -         | SML-210MTT86      | DIODE; LED; SML-21 SERIES; GREEN; SMT (0805); PIV=2.2V; IF=0.02A             | ROHM                      |            |
|     4 | R1, R3, R122, R210                                                                                                        | 10K             | -         | ERJ-2RKF1002      | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                       | PANASONIC                 |            |
|     2 | R2, R85                                                                                                                   | 24.9K           | -         | CRCW060324K9FK    | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                     | VISHAY DALE               |            |
|    32 | R4, R5, R7-R11, R13, R17, R18, R21, R22, R24-R26, R32, R35- R38, R40, R47, R58, R62-R64, R69, R77, R101, R123, R126, R127 | 1K              | -         | CR0603-FX-1001ELF | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                        | BOURNS                    |            |

|   QTY | REF_DES             | VALUE   | DNI/DNP   | MFG PART #                     | DESCRIPTION                                              | MANUFACTURER          | COMMENTS   |
|-------|---------------------|---------|-----------|--------------------------------|----------------------------------------------------------|-----------------------|------------|
|     2 | R6, R27             | 4.99K   | -         | CRCW06034K99FK; ERJ- 3EKF4991V | RESISTOR; 0603; 4.99K; 1%; 100PPM; 0.10W; THICK FILM     | VISHAY DALE/PANASONIC |            |
|     4 | R12, R14, R15, R203 | 30K     | -         | CRCW060330K0FK                 | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM   | VISHAY DALE           |            |
|     1 | R16                 | 41.2K   | -         | CRCW060341K2FK                 | RESISTOR; 0603; 41.2K OHM; 1%; 100PPM; 0.10W; METAL FILM | VISHAY DALE           |            |
|     2 | R19, R20            | 45.3K   | -         | CRCW060345K3FK; ERJ- 3EKF4532V | RESISTOR; 0603; 45.3KOHM; 1%; 100PPM; 0.10W; THICK FILM  | VISHAY DALE/PANASONIC |            |
|     1 | R23                 | 11K     | -         | ERJ-3GEYJ113V                  | RESISTOR; 0603; 11K OHM; 5%; 200PPM; 0.10W; THICK FILM   | PANASONIC             |            |
|     2 | R28, R29            | 49.9K   | -         | CRCW060349K9FK; ERJ- 3EKF4992V | RESISTOR; 0603; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM | VISHAY DALE/PANASONIC |            |
|     1 | R46                 | 30.1K   | -         | CRCW04023012FK                 | RESISTOR; 0402; 30.1K; 1%; 100PPM; 0.0625W; THICK FILM   | VISHAY DALE           |            |
|     1 | R94                 | 240     | -         | ERJ-3GEYJ241V                  | RESISTOR; 0603; 240 OHM; 5%; 200PPM; 0.10W; THICK FILM   | PANASONIC             |            |
|     1 | R95                 | 715     | -         | CRCW0603715RFK                 | RESISTOR; 0603; 715 OHM; 1%; 100PPM; 0.10W; METAL FILM   | VISHAY DALE           |            |
|     2 | R102, R104          | 27      | -         | ERJ-2GEYJ270V                  | RESISTOR; 0402; 27 OHM; 5%; 200PPM; 0.10W; THICK FILM    | PANASONIC             |            |
|     1 | R103                | 1.5K    | -         | ERJ-2RKF1501X                  | RESISTOR; 0402; 1.5K OHM; 1%; 100PPM; 0.10W; THICK FILM  | PANASONIC             |            |

|   QTY | REF_DES    | VALUE        | DNI/DNP   | MFG PART #                      | DESCRIPTION                                                                                                          | MANUFACTURER               | COMMENTS                                                                                                    |
|-------|------------|--------------|-----------|---------------------------------|----------------------------------------------------------------------------------------------------------------------|----------------------------|-------------------------------------------------------------------------------------------------------------|
|     1 | R105       | 470          | -         | CRCW0402470RFK                  | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                             | VISHAY DALE                |                                                                                                             |
|     1 | R112       | 10K          | -         | CRCW040210K0FK; RC0402FR-0710K  | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                 | VISHAY DALE; YAGEO PHICOMP |                                                                                                             |
|     1 | R121       | 1.1K         | -         | CRCW04021K10FK                  | RESISTOR, 0402, 1.1KOHMS, 1%, 100PPM, 0.063W, THICK FILM                                                             | VISHAY DALE                |                                                                                                             |
|     2 | R201, R202 | 1.8K         | -         | CRCW04021K80FK; RC0402FR-071K8L | RESISTOR, 0402, 1.8K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                            | VISHAY DALE/YAGEO PHICOMP  |                                                                                                             |
|     1 | SW122      | B3F-1000     | -         | B3F-1000                        | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; NORMALLY OPEN-HIGH FORCE TACTILE SWITCH; RCOIL= OHM; RINSULATION= OHM; OMRON | OMRON                      |                                                                                                             |
|     1 | U1         | MAX9278AGTM+ | -         | MAX9278AGTM+                    | EVKIT PART; IC; DSRLZR; 3.12GBPS GMSL DESERIALIZER FOR COAX/STP INPUT AND LVDS OUTPUT; TQFN48-EP                     | MAXIM                      | FOR MAX9278ACOAXEVKI T USE MAX9278AGTM+ OR MAX9278AGTM/V+ ; FOR MAX9282A USE MAX9282AGTM+ OR MAX9282AGTM/V+ |
|     1 | U2         | MAX9277GTM+  | -         | MAX9277GTM+                     | IC; SRLZR; 3.12GBPS GMSL SERIALIZERS; TQFN48-EP 7X7                                                                  | MAXIM                      |                                                                                                             |
|     1 | U3         | MAX9276AGTN+ | -         | MAX9276AGTN+                    | IC; DSRLZR; 3.12GBPS GMSL DESERIALIZER FOR COAX/STP INPUT AND PARALLEL OUTPUT; TQFN56-EP                             | MAXIM                      |                                                                                                             |

|   QTY | REF_DES     | VALUE         | DNI/DNP   | MFG PART #           | DESCRIPTION                                                                                                             | MANUFACTURER              | COMMENTS                                                         |
|-------|-------------|---------------|-----------|----------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------|------------------------------------------------------------------|
|     5 | U4-U8       | 74LVC1G86GV   | -         | 74LVC1G86GV          | IC; XOR; 2-INPUT EXCLUSIVE- OR GATE; SOT753                                                                             | NXP                       |                                                                  |
|     1 | U10         | FT232BL       | -         | FT232BL              | IC, INFC, UART INTERFACE IC USB TO SERIAL, LQFP32 7X7                                                                   | FTDI                      |                                                                  |
|     1 | U12         | DS89C450-ENL+ | -         | DS89C450-ENL+        | IC; CTRL; ULTRA-HIGH-SPEED FLASH MICROCONTROLLERS; TQFP44                                                               | MAXIM                     |                                                                  |
|     1 | U13         | 74AC125SC     | -         | 74AC125SC            | IC; BUF; QUAD BUFFER WITH 3- STATE OUTPUTS; NSOIC14 150MIL                                                              | GENERIC PART              |                                                                  |
|     3 | U14,U15,U20 | MAX3378EEUD+  | -         | MAX3378EEUD+         | IC; TRANS; +/-15KV ESD- PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14                              | MAXIM                     |                                                                  |
|     1 | U16         | LM317KTTR     | -         | LM317KTTR            | IC; VREG; 3-TERMINAL ADJUSTABLE REGULATOR; TO263                                                                        | TEXAS INSTRUMENTS         |                                                                  |
|     2 | U17,U19     | MAX1792EUA33  | -         | MAX1792EUA33         | IC; VREG; LOW-DROPOUT LINEAR REGULATOR; UMAX8                                                                           | MAXIM                     |                                                                  |
|     1 | Y10         | 6MHZ          | -         | SSL60000N1HK188F0-0  | CRYSTAL; SMT ; 12PF; 6MHZ; +/- 30PPM; +/-50PPM; -10 DEGC TO +60 DEGC                                                    | HONG KONG CRYSTALS        |                                                                  |
|     1 | Y12         | 14.7456MHZ    | -         | ABLS-14.7456MHZ-B4-T | CRYSTAL; SMT; 18PF; 14.7456MHZ; +/-30PPM; -20 DEGC TO +70 DEGC                                                          | ABRACON                   |                                                                  |
|    45 | SU1-SU45    | STC02SYAN     | DNI       | STC02SYAN            | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL | SULLINS ELECTRONICS CORP. | (TO BE USED TO CONFIGURE THE EV BOARD BEFORE TESTING THE BOARD.) |

|   QTY | REF_DES   | VALUE                | DNI/DNP   | MFG PART #          | DESCRIPTION                                                               | MANUFACTURER          | COMMENTS                                                                                                                           |
|-------|-----------|----------------------|-----------|---------------------|---------------------------------------------------------------------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------|
|     1 | WIRE1     | 229730               | DNI       | 229730              | CONNECTOR; MALE; WIREMOUNT; USB TYPE-A TO TYPE-B ADAPTER; STRAIGHT; 4PINS | MSL ENTERPRISES CORP. |                                                                                                                                    |
|     1 | WIRE2     | LEONI DACAR 302      | DNI       | LEONI DACAR 302     | EVKIT PART; HIGH QUALITY COAX CABLE; LEONI DACAR 302                      | LEONI                 | (Alternate part for WIRE2) (LEONI DACAR 302 IS THE RECOMMENDED CABLE TO USE IN ACTUAL APPLICATION AND DETAILED PRODUCT EVALUATION) |
|     1 | WIRE2     | 02E-59K1-59K1- 02000 | DNI       | 02E-59K1-59K1-02000 | CONNECTOR; COAX; RG 174 CABLE ASSEMBLY; STRAIGHT; 2PINS                   | ROSENBERGER           | (LEONI DACAR 302 IS THE RECOMMENDED CABLE TO USE IN ACTUAL APPLICATION AND DETAILED PRODUCT EVALUATION)                            |

F

E

D

C

B

A

8

8

IN+

IN-

GPIO1/LMN0

MCLK/LMN1

7

LOCK

ERR

GPIO0/LFLT

RX/SDA

TX/SCL

DRS

I2CSEL

INTOUT

ADD0

ADD1

SD

SCK

WS

HIM

CNTL0

CNTL1

CNTL2

CNTL3

GPI

MS

CDS

PWDN

BWS

EQS

CX\_TP

SSEN

OEN

MCLK

7

GPIO1

1

MCLK

2

LMN1

3

GPIO1

2

LMN0

1

3

JU3

MCLK/LMN1

LMN1

6

7

10

12

42

43

4

13

14

46

38

37

40

41

18

17

16

8

22

19

20

24

2

44

3

15

1

9

48

45

31

IN+

IN-

GPIO1/LMN0

MCLK/LMN1

LOCK

ERR

GPIO0

RX/SDA

TX/SCL

DRS

I2CSEL

INTOUT

ADD0

ADD1

SD

SCK

WS

HIM

CNTL0

CNTL1

CNTL2

CNTL3

GPI

MS

CDS

PWDN

BWS

EQS

CX/TP

SSEN

OEN

JU9

GPIO1/LMN0

LMN0

6

6

U1

MAX9278AGTM+

TXOUT0-

TXOUT0+

TXOUT1-

TXOUT1+

TXOUT2-

TXOUT2+

TXOUT3-

TXOUT3+

TXCLKOUT-

TXCLKOUT+

DVDD

IOVDD

IOVDD

AVDD

AVDD

AVDD

AVDD

EP

LMN1

J2

59S2AX-400A5-A

1

5

3

4

2

36

35

34

33

30

29

26

25

28

27

11

21

39

5

23

32

47

49

J11

1

R27

4.99K

R28

49.9K

2

1

J61

C76

5

TXOUT0-

TXOUT0+

TXOUT1-

TXOUT1+

TXOUT2-

TXOUT2+

TXOUT3-

TXOUT3+

TXCLKOUT-

TXCLKOUT+

C75

0.001UF

C72

0.001UF

+1.8V

R19

45.3K

2

0.001UF

C65

0.001UF

LFLT\_LOC-

C15

0.22UF

LFLT\_REM-

5

C16

0.1UF

C74

0.001UF

IN- IOVDD

J6

1

2

C17

0.1UF

C73

0.001UF

LMN0

J1

59S2AX-400A5-A

1

5

3

4

2

4

C79

0.001UF

I\_IOVDD

C18

3.3UF

C19

0.1UF

C21

J29

C49

0.1UF

2

C53

I\_AVDD

J30

C22

0.1UF

+1.8V

R20

45.3K

2

1

R6

4.99K

R29

49.9K

J62

4

0.1UF

0.1UF

C24

LFLT\_LOC+

C14

0.22UF

LFLT\_REM+

3.3UF

AVDD\_66

1

2

J13

2

1

DVDD\_66

1

I\_DVDD

C28

3.3UF

TXOUT3+

TXCLKOUT+

TXOUT2+

TXOUT1+

TXOUT0+

IN+

3

3

I118

I121

I125

I123

I119

1

3

5

7

9

11

13

J14

PEC07DAAN

1

2

3

5

7

9

11

4

6

8

10

12

13

14

H\_LVDS

2

4

6

8

10

12

14

2

PROJECT TITLE:

DRAWING TITLE:

SIZE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C C

ENGINEER:

&lt;ENGINEER&gt;

2

DRAWN BY:

&lt;DRAWN\_BY&gt;

TEMPLATE REV.:

1.5

I122

I126

I124

I120

TXOUT3-

TXCLKOUT-

TXOUT2-

TXOUT1-

TXOUT0-

MAX9278A\_82A EVKIT

1

1

DATE:

REV.:

A

SHEET 1 OF

OCT 2015

6

F

E

D

C

B

A

F

E

D

C

B

A

8

8

INTOUT

LOCK

ERR

GPIO0/LFLT

IN

IN

IOVDD

GPIO1

IN

IOVDD

IN

1

TP18

IOVDD

IOVDD

R40

TP15

IOVDD

TP14

TP16

R13

1K

H

2

JU16

GPIO0

DNI WHEN MEASURING IDD)

IOVDD

TP17

R35

1K

H

2

JU41

GPIO1

5

U8

A

VCC

B

4

Y

GND

1K

3

74LVC1G86GV

1K

IN

IOVDD

R38

1K

1

L

3

2

1

4

Y

GND

1K

7

IOVDD

5

U6

A

VCC

B

3

74LVC1G86GV

(INVERTER)

IOVDD

5

U7

A

VCC

B

2

1

4

Y

GND

1K

3

74LVC1G86GV

(INVERTER)

IOVDD

5

U4

A

VCC

B

2

1

4

Y

GND

1K

3

74LVC1G86GV

(BUFFER)

IOVDD

5

U5

A

VCC

B

4

Y

GND

3

1K

74LVC1G86GV

2

1

L

3

7

2

1

R36

R8

R9

R10

R37

+3.3V

K

A

LED15

SML-210VTT86

RED

+3.3V

K

A

LED10

SML-210MTT86

GREEN

+3.3V

K

A

LED11

SML-210VTT86

RED

+3.3V

K

A

LED12

SML-210VTT86

RED

+3.3V

K

A

LED13

SML-210VTT86

RED

6

6

IOVDD

JU6

1

ADD0

3

IOVDD

JU7

1

ADD1

3

IOVDD

JU8

1

HIM

3

IOVDD

1

JU5

GPI

3

IOVDD

JU10

1

MS

JU17

RXSDA

JU19

TXSCL

3

1

3

1

3

H

2

L

H

2

L

H

2

L

H

2

L

H

2

L

2

2

5

R25

1K

R26

1K

R32

1K

R58

1K

R62

1K

IN

IN

IN

IN

5

IN

IN

IN

IN

IN

U14\_RX

IN

RX/SDA

U14\_SDA

U14\_TX

IN

TX/SCL

U14\_SCL

ADD0

ADD1

HIM

GPI

MS

4

4

IOVDD

JU13

1

CDS

3

IOVDD

JU15

1

DRS

3

IOVDD

JU18

1

I2CSEL

3

IOVDD

JU1

1

SSEN

3

IOVDD

JU2

1

OEN

3

H

2

L

H

2

L

H

2

L

H

2

L

H

2

L

R63

1K

R21

1K

R24

1K

R4

1K

R5

1K

IN

IN

IN

IN

IN

MCLK

3

CDS

DRS

I2CSEL

SSEN

OEN

I130

3

MCLK

IOVDD

1

JU34

CXTP

3

IOVDD

1

JU27

PWDN

3

IOVDD

1

JU28

BWS

3

IOVDD

JU4

1

EQS

CNTL1

I114

3

CNTL1

H

2

L

H

2

L

H

2

L

H

2

L

2

R77

1K

R64

1K

R69

1K

R17

1K

CNTL2

PROJECT TITLE:

DRAWING TITLE:

SIZE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C C

ENGINEER:

&lt;ENGINEER&gt;

2

DRAWN BY:

&lt;DRAWN\_BY&gt;

TEMPLATE REV.:

1.5

IN

IN

IN

IN

CX\_TP

PWDN

BWS

EQS

CNTL2

I113

MAX9278A\_82A EVKIT

1

1

DATE:

REV.:

A

SHEET 2 OF

OCT 2015

6

F

E

D

C

B

A

F

E

D

C

B

A

8

8

VIN

C3

0.1UF

+1.8V

+3.3V

C4

10UF

J7

PJ-002AH

1

3

2

VIN

C23

0.1UF

C5

0.1UF

R23

11K

R85

24.9K

1

3

2

7

C25

0.1UF

R16

41.2K

R2

24.9K

U19

MAX1792EUA33

1

2

4

6

IN

OUT

IN

SHDN

SET

GND

5

OUT

RST

7

C133

10UF

0.1UF

C132

U17

MAX1792EUA33

1

2

4

6

IN

OUT

IN

SHDN

SET

GND

5

OUT

RST

EP

9

+1.8V

1

+

7

8

3

EP

9

7

8

3

2

3

1

ADJ

+3.3V

1

+

C34

10UF

2

VDD\_571

J21

C2

10UF

6

U16

LM317KTTR

IN

VOUT

2

VOUT

4

VDD\_61

J51

C58

4.7UF

6

R94

240

R95

715

LVDSVDD

J52

AVDD\_66

TX/SCL

IN

USB+5V

USB

2

2

2

FB

120

1

3

3

1

1

C118

10UF

EXT

2

INT

1

TXSCLPU

REG

4

5

+5V

4

JU14

VIN

C117

0.1UF

AVDD

JU32

R7

1K

1

J22

3

2

5

RX/SDA

VIN

C96

100UF

C59

0.1UF

FB1

1

120

C201

4.7UF

FB9

1

120

C70

4.7UF

R11

1K

1

J23

RXSDAPU

IN

2

2

2

C202

4.7UF

C69

4.7UF

DVDD\_66

2

IOVDD

4

3

1

JU31

EXT

DVDD

INT

IOVDD

C1

0.1UF

1

14

VL VCC

8

2

3

4

5

3-STATE

I/O VL1

I/O VL2

I/O VL3

I/O VL4

GND

7

C47

0.1UF

J37

AVDD\_EXT

J38

DVDD\_EXT

AVDD\_66

1

J16

2

VREF3.3

U15

MAX3378EEUD+

13

I/O VCC1

I/O VCC2

I/O VCC3

I/O VCC4

NC

NC

6

9

12

11

10

4

J39

+5VIN

J36

GND

R22

1K

1

J17

UCSDAPU

2

3

3

R47

1K

1

J35

UCSCLPU

2

+3.3V

3.3V

2

JU33

2

IOVDD

4

1.8V

4

EXT

2

FB3

1

120

C82

4.7UF

J12

PBC04SAAN

1

VDD

2

3

4

RX\_SDA

GND

TX\_SCL

EXT\_UC

PROJECT TITLE:

DRAWING TITLE:

SIZE:

1

J40

IOVDD\_EXT

DATE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C C

ENGINEER:

&lt;ENGINEER&gt;

2

DRAWN BY:

&lt;DRAWN\_BY&gt;

TEMPLATE REV.:

1.5

VIN

R101

1K

A

SML-210VTT86

LED\_PWR

+1.8V

IOVDD

1

1

3

3

K

2

C81

4.7UF

MAX9278A\_82A EVKIT

1

REV.:

A

SHEET 3 OF

OCT 2015

6

F

E

D

C

B

A

F

E

D

C

B

A

AUTOS

CONF1\_571

ADD0\_571

SD

WS

8

IOVDD\_BR

I268

I269

8

3

SD

WS

J24

1

AUTO571

2

IOVDD\_BR

1

JU26

H

2

L

CONF1571

CONF0\_571

3

IOVDD\_BR

1

JU38

H

2

L

ADD0571

ADD1\_571

SCK

I270

7

CNTL3

I277

CDS/CNTL3

CNTL0

I281

MS/CNTL0

SCK

7

2

IOVDD\_BR

JU21

3

3

1

1

2

2

4

4

IOVDD\_BR

JU22

3

3

1

1

2

2

4

4

IOVDD\_BR

1

CONF0571

JU29

H

2

L

3

IOVDD\_BR

1

JU30

H

L

ADD1571

IOVDD\_BR

BWS\_571

JU37

1

H

2

L

3

I275

I278

3

CDS\_571

MS\_571

LVDSVDD

C104

0.1UF

C103

BWS\_571

6

6

0.001UF

CXTP\_BR

TXOUT0-

TXOUT0+

TXOUT1-

TXOUT1+

TXOUT2-

TXOUT2+

TXCLKOUT-

TXCLKOUT+

TXOUT3-

TXOUT3+

I217

LVDSVDD

C120

0.1UF

5

J18

5

VDD\_571

0.1UF

C105

C106

0.001UF

1

RXIN0-

2

3

4

5

6

7

8

9

10

11

RXIN0+

RXIN1-

RXIN1+

LVDSVDD

AGND

RXIN2-

RXIN2+

RXCLKIN-

RXCLKIN+

RXIN3-

12

RXIN3+

C6

AGND

13

0.001UF

C116

0.1UF

C137

0.001UF

J3

PWDN571

ADD1\_571

AUTOS

MS\_571

I214

47

AVDD

LVDSVDD

14

I213

46

ADD1

AVDD

15

I212

45

44

/AUTOS

MS/CNTL0

CDS\_571

I211

43

PWDN\_BR

I209

2

1

42

CDS/CNTL3

41

BWS

/PWDN

PBC02SAAN

BWS\_571

I208

40

ADD0

U2

MAX9277GTM+

SD

WS

SCK

AGND

CNTL2

CNTL1

16

I246

17

I247

18

19

I245

20

I240

SD

WS

SCK

CNTL1

VDD\_571

21

I239

CNTL2

C7

0.1UF

48

CX/TP

ADD0\_571

I207

39

DVDD

DVDD

22

38

GND

GND

23

4

VDD\_571

0.1UF

C107

C108

0.001UF

CONF0

GPO/HIM

/LFLT

LMN0

AVDD

OUT+

OUT-

AGND

LMN1

CONF1

TX/SCL

RX/SDA

EP

49

37

IOVDD

IOVDD

24

4

36

35

34

33

32

31

30

29

28

27

26

25

IOVDD\_BR

J41

C109

0.1UF

C110

0.001UF

I223

I222

I224

I226

I225

I227

I228

IOVDD\_571

C9

0.1UF

VDD\_571

C8

0.001UF

C10

0.001UF

3

IOVDD\_571

LFLT571

CONF0\_571

GPO/HIM\_571

LMN0\_571

OUT+\_571

OUT-\_571

LMN1\_571

CONF1\_571

I229

TX/SCL\_BR

I230

IOVDD

RX/SDA

GND

RX/SDA\_BR

I258

I260

TX/SCL

3

VDD\_571

C11

C12

0.1UF

0.001UF

J47

1

3

5

1

3

5

2

4

6

7

8

7

H\_BRIDGE

I284

2

4

6

8

LMN0571

LMN1571

IOVDD\_571

OUT+\_571

OUT-\_571

I259

LMN0\_571

LMN1\_571

R46

2

30.1K

C20

0.22UF

C13

0.22UF

IOVDD\_BR

I261

RX/SDA\_BR

TX/SCL\_BR

GND

PROJECT TITLE:

DRAWING TITLE:

SIZE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C C

ENGINEER:

&lt;ENGINEER&gt;

2

DRAWN BY:

&lt;DRAWN\_BY&gt;

TEMPLATE REV.:

1.5

I285

2

J63

HIM571

PEC02SAAN

1

MAX9278A\_82A EVKIT

1

IN+\_61

IN-\_61

1

GPO/HIM\_571

DATE:

OCT 2015

REV.:

A

SHEET 4 OF

6

F

E

D

C

B

A

F

E

D

C

B

A

8

VUC

A

SML-210VTT86

K

LED\_T2

R123

1K

VUC

1

3

8

H

2

L

JU39

T2EX

U14\_TX

U14\_RX

U14\_SCL

U14\_SDA

P11

VUC

R1

10K

1

J49

2

VUC

A

SML-210VTT86

K

LED\_RD

R127

1K

P21

VUC

8

2

3

4

5

R3

10K

J50

2

IOVDD

14

7

SML-210VTT86

K

P20

P21

U14

1

VL VCC

3-STATE

I/O VL1

I/O VL2

I/O VL3

I/O VL4

GND

7

MAX3378EEUD+

13

I/O VCC1

I/O VCC2

I/O VCC3

I/O VCC4

NC

NC

6

7

9

12

11

10

LED\_WR

R126

1K

1

P10

P20

VUC

A

H

2

L

3

USB\_TXD

USB\_RXD

USB\_RTS

USB\_CTS

USB\_DSR

USB\_RI

USB\_DCD

P37/UNAUTH

T\_P14

VIN

C141

0.1UF

P12/RXD1

P13/TXD1

P16/SCL

P17/SDA

VUC

1

6

JU11

TI

P12/RXD1

P13/TXD1

P15/INT3

P16/SCL

P17/SDA

T\_P22

T\_P23

T\_P24

T\_P25

T\_P26

T\_P27

VS/DOUT19

6

5

7

8

9

10

11

12

13

40

41

42

43

44

1

2

3

18

19

20

21

22

23

24

25

I115

P3.0/RXD0

P3.1/TXD0

P3.2/INT0

P3.3/INT1

P3.4/T0

P3.5/T1

P3.6/WR

P3.7/RD

P1.0/T2

P1.1/T2EX

P1.2/RXD1

P1.3/TXD1

P1.4/INT2

P1.5/INT3

P1.6/INT4

P1.7/INT5

P2.0/A8

P2.1/A9

P2.2/A10

P2.3/A11

P2.4/A12

P2.5/A13

P2.6/A14

P2.7/A15

1

GNDA

VUC

6

38

VCCA

GNDB

16

17

VCCB

GNDC

28

VS

PCC02SAAN

R210

10K

GNDD

39

2

5

VUC

2

C311

0.1UF

U12

DS89C450-ENL+

P0.0/AD0

37

P0.1/AD1

P0.2/AD2

P0.3/AD3

P0.4/AD4

P0.5/AD5

P0.6/AD6

P0.7/AD7

RST

EA

ALE/PROG

PSEN

XTAL1

XTAL2

J19

J20

J26

5

36

35

34

33

32

31

30

4

29

27

26

15

14

8

2

3

4

5

VIN

1

3

1

USB+5V

2

Y12

14.7456MHZ

IOVDD

14

VL VCC

3-STATE

I/O VL1

I/O VL2

I/O VL3

I/O VL4

GND

7

U20

MAX3378EEUD+

13

I126

I/O VCC1

I/O VCC2

I/O VCC3

I/O VCC4

NC

NC

6

9

12

11

10

J4

1

VIN

C270

0.1UF

P15/INT3

4

4

USB\_DTR

C26

22PF

C27

22PF

T\_VC2

T\_VC3

T\_VC4

1

2

3

4

5

6

7

U13

74AC125SC

EN1

VCC

A1

Y1

EN2

A2

Y2

GND

EN4

A4

Y4

EN3

A3

Y3

VUC

14

13

12

11

10

9

8

J101

690-004-221-023

1

1

2

2

3

4

4

3

6

5

6

5

3

3

VUC

C131

0.1UF

R102

27

C121

22PF

C122

22PF

R121

1.1K

USB\_DTR

USB\_DTR

FB4

1

120

C127

0.1UF

C124

0.1UF

R104

27

VUC

2

6MHZ

Y10

1

2

VUC

VUC

1

VUC

R122

10K

3

2

SW122

2

4

B3F-1000

USB+5V

C126

10UF

VUC

C125

1UF

C123

0.033UF

R103

1.5K

6

8

7

5

4

27

28

32

1

2

470

R105

30

AVCC

3V3OUT

USBDM

USBDP

RSTOUT#

RESET#

XTIN

XTOUT

EECS

EESK

31

EEDATA

TEST

R112

10K

AGND

29

PROJECT TITLE:

DRAWING TITLE:

SIZE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C C

ENGINEER:

&lt;ENGINEER&gt;

2

DRAWN BY:

&lt;DRAWN\_BY&gt;

TEMPLATE REV.:

1.5

3

VCC1

26

VCC2

GND2

17

C128

13

VCCIO

0.1UF

U10

FT232BL

25

24

23

22

21

20

19

18

16

12

11

14

15

10

TXD

RXD

RTS#

CTS#

DTR#

DSR#

DCD#

RI#

TXDEN

TXLED#

RXLED#

PWRCTL

PWREN#

SLEEP#

GND1

9

MAX9278A\_82A EVKIT

C129

0.1UF

1

1

C130

0.1UF

USB\_TXD

USB\_RXD

USB\_RTS

USB\_CTS

USB\_DTR

USB\_DSR

USB\_DCD

USB\_RI

DATE:

OCT 2015

REV.:

A

SHEET 5 OF

6

F

E

D

C

B

A

F

E

D

C

B

A

8

8

1

3

5

7

9

11

13

15

17

19

21

23

25

27

29

31

33

35

37

39

41

43

45

47

49

51

53

55

57

59

61

63

65

67

69

71

H1

PBC36DFBN

1

2

3

5

7

9

11

13

15

17

19

21

23

25

27

29

31

33

35

37

39

41

43

45

47

49

51

53

55

57

59

61

63

65

67

69

71

4

6

8

10

12

14

16

18

20

22

24

26

28

30

32

34

36

38

40

42

44

46

48

50

52

54

56

58

60

62

64

66

68

70

72

2

4

6

8

10

12

14

16

18

20

22

24

26

28

30

32

34

36

38

40

42

44

46

48

50

52

54

56

58

60

62

64

66

68

70

72

7

BWS\_61

7

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

DOUT0

DOUT1

DOUT2

DOUT3

DOUT4

DOUT5

DOUT6

DOUT7

DOUT8

DOUT9

DOUT10

DOUT11

DOUT12

DOUT13

DOUT14

DOUT15

DOUT16

DOUT17

HS/DOUT18

VS/DOUT19

DE/DOUT20

DOUT21

DOUT22

DOUT23

DOUT24

DOUT25

DOUT26

DOUT27

DOUT28

PCLK\_OUT

OUTSD

OUTSCK

IN

OUTWS

IOVDD\_BR

JU35

1

H

2

L

3

I166

BWS\_61

6

JU51

ADD161

6

IOVDD\_BR

1

H

2

L

3

GPIO061

R12

30K

1%

3

5

5

IOVDD\_BR

JU55

1

ADD261

IOVDD\_BR

JU52

1

I2CSEL

GPIO0\_61

IN

IOVDD\_BR

JU53

1

MS61

H

2

L

3

IOVDD\_BR

1

JU54

ADD061

H

2

L

3

H

2

L

H

2

L

A

C302

R18

1K

0.001UF

VDD\_61

C303

0.1UF

IOVDD\_BR

2

VDD\_61

J53

PWDN61

SML-210VTT86

ERROR61

R201

1.8K

0.001UF

C304

RX/SDA\_BR

IN

TX/SCL\_BR

PWDN\_BR

ERR61

IN

IN

K

3

R15

30K

1%

IOVDD\_BR

J56

1

2

PEC02SAAN

GPI\_61

IN

VDD\_61

C301

0.1UF

R14

30K

1%

1

4

4

IOVDD\_BR

J9

2

1

ENABLE

BWS\_61

IN+\_61

IN-\_61

GPIO161

IN

IN

IN

1

2

3

4

5

6

7

8

9

10

11

12

13

14

57

1

1

ENABLE

INTOUT/ADD2

GPI

I2CSEL

GPIO0

BWS

AVDD

IN+

IN-

MS

CNTL3/ADD1

GPIO1

DVDD

CNTL0/ADD0

EP

J57

J58

C309

0.1UF

C310

0.001UF

CXTP\_BR

DOUT0

IN

56

CX/TP

RX/SDA

15

IN

54

DOUT0

PWDN

17

3

DOUT1

IN

53

DOUT1

DOUT2

IN

52

DOUT2

DOUT3

IN

51

DOUT3

IOVDD\_61

DOUT4

DOUT6

DOUT5

IN

50

IN

49

DOUT4

DOUT5

IN

48

DOUT6

IOVDD\_BR

J60

DOUT7

IN

47

DOUT7

U3

MAX9276AGTN+

ERR

WS

SCK

LOCK

SD/HIM

DOUT27/CNTL1

DOUT28/CNTL2

18

19

20

IN

OUTWS

21

IN

OUTSCK

22

IN

OUTSD

IOVDD\_BR

LOCK\_61

3

23

IN

24

IN

DOUT8

IN

46

DOUT8

DOUT26

25

IN

DOUT9

IN

45

DOUT9

DOUT25

26

IN

DOUT28

DOUT25

DOUT26

DOUT27

IOVDD\_61

2

J59

2

2

VDD\_61

R202

1.8K

LOCK61

SML-210MTT86

A

K

VDD\_61

55

AVDD

TX/SCL

16

R203

30K

1%

1

44

IOVDD

IOVDD

27

HIM61

C307

0.1UF

C308

0.001UF

DOUT10

IN

43

DOUT10

DOUT24

28

IN

DOUT24

C306

0.1UF

C305

0.001UF

PROJECT TITLE:

DRAWING TITLE:

SIZE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C C

ENGINEER:

&lt;ENGINEER&gt;

2

DRAWN BY:

&lt;DRAWN\_BY&gt;

TEMPLATE REV.:

1.5

DOUT11

DOUT12

DOUT13

DOUT14

DOUT15

PCLKOUT

DOUT16

DOUT17

HS/DOUT18

VS/DOUT19

DE/DOUT20

DOUT21

DOUT22

DOUT23

2

42

41

40

39

38

37

36

35

34

33

32

31

30

29

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

DOUT11

DOUT12

DOUT13

DOUT14

DOUT15

PCLK\_OUT

DOUT16

DOUT17

HS/DOUT18

VS/DOUT19

DE/DOUT20

DOUT21

DOUT22

IN

DOUT23

MAX9278A\_82A EVKIT

1

1

DATE:

REV.:

A

SHEET 6 OF

OCT 2015

6

F

E

D

C

B

A

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