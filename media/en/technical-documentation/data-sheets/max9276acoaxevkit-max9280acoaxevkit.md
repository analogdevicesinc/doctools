<!-- lastmod 2022-08-04 -->
## MAX9276A/MAX9280A Evaluation Kits

## General Description

The  MAX9276A/MAX9280A  coax  evaluation  kits  (EV kit) provide a proven design to evaluate the MAX9276A/ MAX9280A high-bandwidth gigabit multimedia serial link (GMSL)  deserializers  with  spread  spectrum  and  fullduplex control channel with the use of a standard FAKRA coaxial  cable. The  EV  kit  also  includes  Windows  XP ® -, Windows  Vista ® -,  and  Windows  7-compatible  software that provides a simple graphical-user interface (GUI) for exercising the features of the device. The EV kit comes with a MAX9276A or MAX9280A installed.

For complete GMSL evaluation, using a standard FAKRA coaxial cable, order the MAX9276A/MAX9280A coax EV kit and a companion serializer board (MAX9275/MAX9279 coax EV kit referenced in this document). For evaluating with  STP  cable,  also  order  the  MAXCOAX2STP-HSD adapter kit and refer to its data sheet. Only one adapter kit is required per link, connecting the serializer and deserializer (SerDes) boards.

Ordering Information appears at end of data sheet.

## Items Included in the EV Kit Package

| DESCRIPTION                                        |   QTY |
|----------------------------------------------------|-------|
| MAX9276A coax EV kit or MAX9280A coax EV kit board |     1 |
| USB cable                                          |     1 |

## MAX9276A/MAX9280A EV Kit Files

| FILE                            | DESCRIPTION                                |
|---------------------------------|--------------------------------------------|
| MAXSerDesEV-D_Vxxxx_Install.EXE | Installs the EV kit files in your computer |
| MAXSerDesEV-D.EXE               | Graphical user interface (GUI) application |
| CDM20600.EXE                    | Installs the USB device driver             |
| USB_Driver_Help_200.PDF         | USB driver installation help file          |

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

Evaluate: MAX9276A/MAX9280A

## Features

- Accepts 24-Bit or 32-Bit Parallel Video
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- USB-PC Connection (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

Note: In  the following sections, MAX9276A/80A and the term 'deserializer' refer to the MAX9276A and MAX9280A ICs and MAX9275/79 and the term 'serializer' refer to the MAX9275 and MAX9279 ICs. The term SerDes refers to serializer/deserializer.

Note: This document applies to both coax and STP EV kits. This document covers coax cables, but the information provided applies equally to STP cables.

## MAX9276A/MAX9280A Evaluation Kits

## Quick Start

## Required Equipment

- MAX9276A/MAX9280A coax EV kit (USB cable included)
- MAX9275/MAX9279 coax EV kit (USB cable included)
- 2m Rosenberger FAKRA cable assembly (included with the deserializer EV kit)
- Parallel data source (such as digital video)
- Optional: Function generator (needed only if parallel data lacks a pixel clock)
- User-supplied Windows XP, Windows Vista, or Windows 7 PC with a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download  and  install the EV  kit software from www.maximintegrated.com/EVkitsoftware .
- 2) Install  the  appropriate  USB  driver  for  your  PC  from the links provided.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) With  the  power  supply  and  function  generator  off, connect the 5V power supply to the +5VIN terminal pad on the serializer EV kit.
- 5) Connect the USB cable from the PC to the deserializer EV kit (J10). A Windows message appears when connecting  the  EV  kit  board  to  the  PC  for  the  first time. Each version of Windows has a slightly different message.  If  you  see  a  Windows  message  stating ready to use ,  then proceed to the next step; otherwise, open the USB\_Driver\_Help\_200.PDF to verify that the USB driver was successfully installed.

## Evaluate: MAX9276A/MAX9280A

- 6) Connect the FAKRA cable from the serializer EV kit OUT+ connector to the deserializer EV kit IN+ connector.
- 7) Connect the parallel data source to the serializer EV kit headers (H1\_DIN28:0).
- 8) Connect pixel clock or function generator to the serializer EV kit header (H1\_PCLK\_IN).
- 9) Turn on power supply and function generator.
- 10)  Verify that LED\_PWR on the serializer EV kit turns on, indicating that the board has power.
- 11)  Verify  that  LED\_D2  on  the  deserializer  EV  kit  turns on, indicating that the microcontroller is powered and enabled.
- 12)  Verify that LED\_LOCK on the deserializer EV kit lights up,  indicating  that  the  link  has  been  successfully established. If LED\_LOCK is off or LED\_ERROR is on, double-check that the PCLK\_IN signal is clocking data.
- 13)  Start  the  EV  kit  software  by  selecting Start  |  Programs  |  Maxim  Integrated  |  MAXSerDesEV-D  | MAXSerDesEV-D . The Configuration Settings window  will  appear  (Figure  1).  Jumper  settings  in  this window are for user reference and guide to properly configure  the  evaluation  board.  Jumper  settings  do not force the serializer or deserializer into a particular mode of operation.
- 14) UART mode support: To configure for UART mode,  on  the  deserializer  board,  change  jumpers JU\_I2CSEL from H to the L position. On the serializer board, change jumpers JU\_CONF1 and JU\_CONF0 as  shown  in  the Serializer group  box,  JU\_TXSCL from  SCL  to  the  TX  position,  and  JU\_RXSDA  from SDA to the RX position.
- 15)  Press the Identify Devices button  to  have  the  GUI scan the bus for possible listeners. In case no device was identified, the most likely cause is improper jump -er settings. Identify the problem before continuing.
- 16)  Press the Connect button to launch the Evaluation Kit window (Figure 2).
- 17)  Press the Read All button to read all registers on the deserializer and serializer.

## MAX9276A/MAX9280A Evaluation Kits

## Detailed Description of Software

To start the MAX9276A/MAX9280A deserializer coax EV kit  GUI,  select Start  |  Programs  |  Maxim  Integrated  | MAXSerDesEV-D | MAXSerDesEVGUI-D .

## Configuration Settings

The Configuration Settings window is the first window that  opens  after  program  launch.  It  allows  the  user  to specify evaluation board setup and mode of operation.

Evaluate: MAX9276A/MAX9280A

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the LinkType drop-down  list, I2C or UART from  the Bus drop-down  list,  and  whether  the Serializer or Deserializer should connect to the USB controller. Upon changing any of these parameters, any conflicting jumper settings  will  be  highlighted,  guiding  the  user  to  check and make the corresponding changes to the evaluation boards. Only LinkType and Device Address selections on the Configuration Settings window affect the EV kit operation. Other items, including jumper selection, are for user reference only.

Figure 1. MAXSerDesEV-D Evaluation Kit Software (Configuration Settings Window)

<!-- image -->

│

## MAX9276A/MAX9280A Evaluation Kits

## Serializer and Deserializer Jumper Selection Blocks

The Serializer  Jumper  Selection and Deserializer Jumper  Selection blocks  list  jumpers  for  the  selected Device ID s and displays the correct shunt positions based on the conditions selected in the Controller group box.

## Identify Devices Button

The Identify Devices button causes the GUI to scan the system  and  hunt  for  slave  addresses  selectable  by  the SerDes  input  address  pins.  Upon  successful  communication,  the  identified Device  ID and  the  corresponding jumper lists are displayed on the serializer and deserializer block. It is also possible to manually select a device from  the  list  in  the Device  ID drop-down  list  and  enter the slave address in the Device Address edit box. It is a good practice to utilize the Identify Devices function and verify communication with the devices under test (DUTs) before attempting to Connect .

Figure  9  and  Figure  10  show  jumper  settings  on  the SerDes  PCBs  for  coax  cable  and  I 2 C  communication with  the  USB  controller  connected  to  the  deserializer board. Refer the respective deserializer IC data sheet for detailed  configuration  information.  See Table  1  for  PCB jumper descriptions.

## Connect Button

The Connect button  opens  up  the Evaluation Kit window. The GUI reads the SerDes registers and updates the register maps for both. Successful register map updates are indicated by green LED indicators. In case of a communication problem, the LED indicators turn red.

## Cancel - Do not Connect Button

The Cancel  -  Do  not  Connect button  opens  the Evaluation Kit window without attempting to connect to the  on-board  microcontroller.  Although  there  will  be  no communication with the microcontroller, all functions and tabs corresponding to the selected Device ID s  become active once there.

## Evaluate: MAX9276A/MAX9280A

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 2 provides access  to  all  internal  functions  of  the  DUTs  by  means of reading and writing registers through different tabs to allow the user to evaluate various functions of the SerDes.

The Read All button updates the SerDes' device maps by reading the DUT's internal registers.

The Serializer group box provides pushbuttons to access the serializer's registers. The Read all MAX9279 button reads  register  contents  from  the  serializer  and  updates the displayed register values. The Load button reads and updates registers  from  a  previously  saved  register  map file or saves the existing register values into a new file for future reference using the Save button.

The Deserializer group box provides pushbuttons to  access  the  deserializer's  registers.  The Read  All MAX9280/80A button  reads  register  contents  from  the deserializer  and  updates  the  displayed  register  values. The Load button  reads  and  updates  registers  from  a previously  saved  register  map  file  or  saves  the  existing register values into a new file for future reference using the Save button.

The Open Configuration button opens the Configuration Settings window  for  any  configuration  change.  Use Open  Configuration and Connect buttons  to  go  back and forth between Configuration Settings window and Evaluation Kit window.

The Wake Up button applies the register write sequence described in the IC data sheets to wake the DUTs from sleep mode.

## MAX9276A/MAX9280A Evaluation Kits

## MAX9279 Tab

The MAX9279 tab (Figure 2) lists the serializer's bitmaps. The Read and Write buttons in each register group box allow read/write access for each bit or group of bits that specify a function or condition, as defined in the serializer

Evaluate: MAX9276A/MAX9280A

IC data sheet. The color of the small LED indicator next to  the Read/Write buttons  indicates  the  communication status.  Green  indicates  successful  communication  and red indicates failed communication.

Figure 2. MAXSerDesEV-D Evaluation Kit Software (MAX9279 Tab (Serializer))

<!-- image -->

│

## MAX9276A/MAX9280A Evaluation Kits

## MAX9280/MAX9280A Tab

The MAX9280/MAX9280A tab (Figure 3) lists the deserializer's registers and bitmaps. The Read and Write buttons  in  each  register  group  box  allows  read/write access for each bit or group of bits that specify a function

Evaluate: MAX9276A/MAX9280A

or condition, as defined in the deserializer IC data sheet. The color  of  the  small  LED  indicator  next  to  the Read/ Write buttons indicates the communication status. Green indicates  successful  communication  and  red  indicates failed communication.

Figure 3. MAXSerDesEV-D Evaluation Kit Software (MAX9280A/80A Tab (Deserializer))

<!-- image -->

│

## MAX9276A/MAX9280A Evaluation Kits

## PRBS Test Tab

The PRBS Test tab  (Figure  4)  facilitates  PRBS  testing. Upon pressing the Start button, the SerDes registers are programmed, per defined sequence in the IC data sheets, to perform a pseudorandom bit sequence (PRBS) error-

Evaluate: MAX9276A/MAX9280A

rate  test.  Enter  the  test  duration  (maximum  32,767s  = 9.1hrs) in the Duration edit box and press Start to begin the test. At the end of the specified elapse time, the number of bit errors are read from the PRBSERR register and displayed in the PRBS Error Counter box.

Figure 4. MAXSerDesEV-D Evaluation Kit Software (PRBS Tab)

<!-- image -->

│

## MAX9276A/MAX9280A Evaluation Kits

## Log and Low Level Access Tab

The Log and Low Level Access tab (Figure 5): logs all activities between the GUI and DUTs.

The Register Access group  box  allows  1-byte  read  or writes  of  the  specified Device  Address and Register Address .  Press  the Send  String  to  EVKIT button

## Evaluate: MAX9276A/MAX9280A

to  communicate  with  devices  that  are  not  registerbased  (such  as  the  MAX7324).  User-supplied  devices requiring other interface protocols must use the Raw TX byte codes to communicate. Note that in bypass mode, raw  data  is  passed  to  the  user-supplied  slave  device directly without modification.

Figure 5. MAXSerDesEV-D Evaluation Kit Software (Log and Low Level Access Tab)

<!-- image -->

## MAX9276A/MAX9280A Evaluation Kits

## HDCP Tab

The HDCP tab (Figure 6) is viewable only for serializers  and  deserializers  that  support  HDCP  function.  The  HDCP  registers  of  both  SerDes  are  listed side-by-side  with Read and Write buttons  for  each register. Authenticate and Enable Encryption

Evaluate: MAX9276A/MAX9280A

pushbuttons initiate the HDCP verification process. At the end of the operation, the color of the LED indicator turns green to indicate success or red to indicate failure of the function. Note: This  tab  is  only  functional  for  DUTs  that support the HDCP function.

Figure 6. MAXSerDesEV-D Evaluation Kit Software (HDCP Tab)

<!-- image -->

│

## MAX9276A/MAX9280A Evaluation Kits

## Look Up Tables Tab

The Look Up Tables tab  (Figure  7)  provides  access  to the lookup tables (LUTs) of the deserializer. Use this tab to  program/view/edit  the  LUT  settings  of  the  red,  green, and blue colors for color translation. LUT content edits can

Evaluate: MAX9276A/MAX9280A

be performed on the entire 256 bytes of all three colors, of an individual color, or individual pixel of any color table. The LUT contents can be saved in a .csv file to be used as a template or it can be uploaded from an existing file. Sample LUT content is provided in the evaluation kit GUI.

Figure 7. MAXSerDesEV-D Evaluation Kit Software: LUT Tables Window (Look Up Tables Tab-relevant only to deserializers with image-enhancing capability)

<!-- image -->

Figure 8. MAXSerDesEV-D Evaluation Kit Software (Look Up Table Read/Write Progress Window-relevant only to deserializers with image-enhancing capability)

<!-- image -->

│

## MAX9276A/MAX9280A Evaluation Kits

## Detailed Description of Hardware

The  MAX9276A/MAX9280A  deserializer  coax  EV  kit provides a proven layout for the GMSL deserializers with the use of a standard FAKRA coax cable. On-board level translators  and  an  easy-to-use  USB-PC  connection  are included on the EV kit.

The deserializer EV kit board layout is divided into three principal sections:

- 1) Power-supply circuitry (on-board LDO regulators U2 and U3 power the AVDD, DVDD, and IOVDD supplies from +5VIN)
- 2) MAX9276A or MAX9280A and support components.
- 3) Microcontrollers (U10, U12) and support components

## On-Board-Supplied Interface

The  EV  kit  board  provides  a  UART  and  I 2 C  interface  (through  U10  and  U12)  that  is  intended  to  operate  while  both  SerDes  boards  are  powered  on  and locked.  To  use  the  on-board-supplied  I 2 C  interface, either  use  an  IOVDD  of  2.2V  or  greater  with  the  I 2 C interface, or use a 100kbps I 2 C data rate.

## User-Supplied Interface

To use the deserializer EV kit with a user-supplied interface,  remove  shunts  from  the  JU\_TXSCL  header  and apply a TX/SCL signal to the middle pin of the JU\_TXSCL header. Also remove shunts from the JU\_RXSDA header and  apply  an  RX/SDA  signal  to  the  middle  pin  of  the JU\_RX\_SDA header.

Refer to the respective SerDes IC data sheets for details about UART protocol for base mode, write data format, read data format, selecting base mode or bypass mode, and selecting a UART or I 2 C slave device.

## Evaluate: MAX9276A/MAX9280A

## User-Supplied Power Supply

The deserializer EV kit can be powered completely from the USB port by default. Jumper JU\_VIN selects between the  5V  USB  supply  or  the  +5VIN  user-supplied  power supply to power up U1 and supporting circuitry.

To provide different power supplies to AVDD, DVDD, and IOVDD, move the shunts on the JU\_AVDD, JU\_DVDD, and  JU\_IOVDD  headers  from  the  INT  to  the  EXT positions and apply external user-supplied power at the AVDD\_EXT,  DVDD\_EXT,  and  IOVDD\_EXT  terminals, respectively.

## Detailed Description of Firmware

The DS89C450  microcontroller (U12) runs custom firmware  that  ensures  no  breaks  occur  within  register read/write  commands. The firmware records 9-bit evenparity data received from the USB interface while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received by the deserializer is immediately relayed to the USB port.

The  serializer  coax  EV  kit  provides  a  proven  layout  for the MAX9275/MAX9279 GMSL serializer with the use of a standard FAKRA coax cable. On-board level translators and an easy-to-use USB-PC connection are included on the EV kit.

## MAX9276A/MAX9280A Evaluation Kits

## Table 1. Jumper Description

| JUMPER    | SIGNAL      | DEFAULT POSITION   | FUNCTION                                               |
|-----------|-------------|--------------------|--------------------------------------------------------|
|           |             | L                  | U12-41 to GND (factory use only)                       |
| JU121     | T2EX        | H                  | U12-41 to USB+5V (factory use only)                    |
|           |             | Open*              | U12-41 open (factory use only)                         |
| JU_ADD0   | CNTL0/ADD0  | L*                 | (see Table 2)                                          |
|           |             | H                  |                                                        |
| JU_ADD1   | CNTL3/ADD1  | L*                 | (see Table 2)                                          |
|           |             | H                  |                                                        |
| JU_ADD2   | INTOUT/ADD2 | L*                 | (see Table 2)                                          |
|           |             | H                  |                                                        |
| JU_AVDD   | AVDD        | INT*               | AVDD supplied internally                               |
|           |             | EXT                | AVDD supplied through the AVDD_EXT terminal            |
|           |             | L*                 | PCLKIN > 12.5MHz, 32-bit mode                          |
| JU_BWS    | BWS         | H                  | PCLKIN > 12.5MHz, 32-bit mode                          |
|           |             | Open               | PCLKIN > 33.33MHz 27-bit high bandwidth                |
|           |             | L                  | STP link                                               |
| JU_CXTP   | CX/TP       | H*                 | Coax+ link                                             |
|           |             | Open               | Coax- link                                             |
| JU_DVDD   | DVDD        | INT*               | DVDD supplied internally                               |
|           |             | EXT                | DVDD supplied through the AVDD_EXT terminal            |
| JU_ENABLE | ENABLE      | L*                 | Outputs enabled                                        |
|           |             | H                  | Outputs disabled                                       |
| JU_GPI    | GPI         | L*                 | GPI pin pulled low                                     |
|           |             | H                  | GPI pin pulled high                                    |
|           |             | L*                 | GPIO pin                                               |
| JU_GPIO0  | GPIO0       | H                  | GPIO pin                                               |
|           |             | L*                 | GPIO pin                                               |
| JU_GPIO1  | GPIO1       | H                  | GPIO pin                                               |
|           |             | Open*              | Reverse channel in legacy mode                         |
| JU_HIM    | SD/HIM      | Short              | Reverse channel in high-immunity mode                  |
| JU_I2CSEL | I2CSEL      | L                  | UART-to-UART or UART-to-I 2 C mode                     |
|           |             | H*                 | I 2 C-to-I 2 C mode                                    |
|           |             | INT*               | IOVDD supplied internally                              |
| JU_IOVDD  | IOVDD       | EXT                | IOVDD supplied through the AVDD_EXT terminal           |
| JU_LINK0  | LINK0       | X                  | Reserved for factory diagnostic test                   |
| JU_LINK1  | LINK1       | X                  | Reserved for factory diagnostic test                   |
|           |             | L*                 | Base mode                                              |
| JU_MS     | MS          |                    | Bypass mode                                            |
|           |             | H                  |                                                        |
| JU_PWDN   | PWDN        | L                  | Serializer is powered on                               |
|           |             | H*                 | Serializer is powered off                              |
| JU_RXSDA  | RX/SDA      | RX SDA*            | UART-to-UART or UART-to-I 2 C mode I 2 C-to-I 2 C mode |

│

Evaluate: MAX9276A/MAX9280A

## MAX9276A/MAX9280A Evaluation Kits

## Table 1. Jumper Description (continued)

| JUMPER     | SIGNAL   | DEFAULT POSITION   | FUNCTION                                                         |
|------------|----------|--------------------|------------------------------------------------------------------|
| JU_RXSDAPU | RX/SDA   | Short*             | RX/SDA pulled up to IOVDD                                        |
| JU_RXSDAPU | RX/SDA   | Open               | RX/SDA pulled up to IOVDD externally                             |
| JU_T1      | USB_RI   | L                  | U12-11 to GND (factory use only)                                 |
| JU_T1      | USB_RI   | H                  | U12-11 to USB+5V (factory use only)                              |
| JU_T1      | USB_RI   | Open*              | U12-11 open (factory use only)                                   |
| JU_TXSCL   | TX/SCL   | TX                 | UART-to-UART or UART-to-I 2 C mode                               |
| JU_TXSCL   | TX/SCL   | SCL*               | I 2 C-to-I 2 C mode                                              |
| JU_TXSCLPU | TX/SCL   | Short*             | TX/SCL pulled up to IOVDD                                        |
| JU_TXSCLPU | TX/SCL   | Open               | TX/SCL pulled up to IOVDD externally                             |
| JU_VL2     | I/OVL2   | Open*              | U19-3 open (factory use only)                                    |
| JU_VL3     | I/OVL3   | Open*              | U19-4 open (factory use only)                                    |
| JU_VL4     | I/OVL4   | Open*              | U19-5 open (factory use only)                                    |
| JU_VDDIO   | VDDIO    | Short*             | VDDIO applied to U1                                              |
| JU_VDDIO   | VDDIO    | Open               | Connect amp meter to measure I-VDDIO                             |
| JU_VIN     | VIN      | USB*               | 5V supplied from the USB port                                    |
| JU_VIN     | VIN      | +5V                | 5V supplied from the external supply applied on the +5V terminal |
| JU_VS      | I/OVL1   | 1-2*               | U19-2 VS/DOUT19 (reserved for factory diagnostic test)           |
| JU_VS      | I/OVL1   | Open               | U19-2 VS/DOUT19 (reserved for factory diagnostic test)           |

Table 2. Device Address Selection (register 0x00, 0x01)

| PIN      | PIN    | PIN    | PIN    | DEVICE ADDRESS (bin)   | DEVICE ADDRESS (bin)   | DEVICE ADDRESS (bin)   | DEVICE ADDRESS (bin)   | DEVICE ADDRESS (bin)   | DEVICE ADDRESS (bin)   | DEVICE ADDRESS (bin)   | DEVICE ADDRESS (bin)   | SERIALIZER DEVICE ADDRESS (hex)   | DESERIALIZER DEVICE ADDRESS (hex)   |
|----------|--------|--------|--------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|-----------------------------------|-------------------------------------|
| CX/TP*   | ADD2   | ADD1   | ADD0   | D7                     | D6                     | D5                     | D4**                   | D3                     | D2                     | D1                     | D0                     | SERIALIZER DEVICE ADDRESS (hex)   | DESERIALIZER DEVICE ADDRESS (hex)   |
| High/Low | Low*** | Low*** | Low*** | 1                      | 0                      | 0                      | X                      | 0                      | 0                      | 0                      | R/ W                   | 80                                | 90                                  |
| High/Low | Low    | Low    | High   | 1                      | 0                      | 0                      | X                      | 0                      | 1                      | 0                      | R/ W                   | 84                                | 94                                  |
| High/Low | Low    | High   | Low    | 1                      | 0                      | 0                      | X                      | 1                      | 0                      | 0                      | R/ W                   | 88                                | 98                                  |
| High/Low | Low    | High   | High   | 0                      | 1                      | 0                      | X                      | 0                      | 1                      | 0                      | R/ W                   | 44                                | 54                                  |
| High/Low | High   | Low    | Low    | 1                      | 1                      | 0                      | X                      | 0                      | 0                      | 0                      | R/ W                   | C0                                | D0                                  |
| High/Low | High   | Low    | High   | 1                      | 1                      | 0                      | X                      | 0                      | 1                      | 0                      | R/ W                   | C4                                | D4                                  |
| High/Low | High   | High   | Low    | 1                      | 1                      | 0                      | X                      | 1                      | 0                      | 0                      | R/ W                   | C8                                | D8                                  |
| High/Low | High   | High   | High   | 0                      | 1                      | 0                      | X                      | 1                      | 0                      | 0                      | R/ W                   | 48                                | 58                                  |
| Open     | Low    | Low    | Low    | 1                      | 0                      | 0                      | X                      | 0                      | 0                      | X                      | R/ W                   | 80                                | 92                                  |
| Open     | Low    | Low    | High   | 1                      | 0                      | 0                      | X                      | 0                      | 1                      | X                      | R/ W                   | 84                                | 96                                  |
| Open     | Low    | High   | Low    | 1                      | 0                      | 0                      | X                      | 1                      | 0                      | X                      | R/ W                   | 88                                | 9A                                  |
| Open     | Low    | High   | High   | 0                      | 1                      | 0                      | X                      | 0                      | 1                      | X                      | R/ W                   | 44                                | 56                                  |
| Open     | High   | Low    | Low    | 1                      | 1                      | 0                      | X                      | 0                      | 0                      | X                      | R/ W                   | C0                                | D2                                  |
| Open     | High   | Low    | High   | 1                      | 1                      | 0                      | X                      | 0                      | 1                      | X                      | R/ W                   | C4                                | D6                                  |
| Open     | High   | High   | Low    | 1                      | 1                      | 0                      | X                      | 1                      | 0                      | X                      | R/ W                   | C8                                | DA                                  |
| Open     | High   | High   | High   | 0                      | 1                      | 0                      | X                      | 1                      | 0                      | X                      | R/ W                   | 48                                | 5A                                  |

Evaluate: MAX9276A/MAX9280A

│

## MAX9276A/MAX9280A Evaluation Kits

Evaluate: MAX9276A/MAX9280A

Figure 9. MAX9276A/MAX9280A Deserializers (Initial Jumper Settings for Coax Link and I 2 C Communication)

<!-- image -->

│

Figure 10. MAX9275/MAX9279 Serializers (Initial Jumper Settings for Coax Link and I 2 C Communication)

<!-- image -->

│

## MAX9276A/MAX9280A Evaluation Kits

## Troubleshooting

Possible causes of board test failure:

- Coax cable not properly connected between OUT+ of the serializer to IN+ of the deserializer.
- PCLKIN is not applied (e.g., FG output is disabled): Verify signal at the pins on the board.
- PCLKIN function generator output is not correct: Verify signal at the pins on the board.
- Incorrect jumper setting on the deserializer board: Reverify.
- Incorrect jumper setting on the serializer board: Reverify.
- Bus selection on the GUI is not consistent with jumpers' position on the boards

## Component Suppliers

| SUPPLIER                               | PHONE             | WEBSITE                     |
|----------------------------------------|-------------------|-----------------------------|
| Amphenol RF                            | 800-627-7100      | www.amphenolrf.com          |
| Hong Kong X'tals Ltd.                  | 852-35112388      | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300      | www.murata-northamerica.com |
| ON Semiconductor                       | 602-244-6600      | www.onsemi.com              |
| Rosenberger Hochfrequenztechnik GmbH   | 011-49-86 84-18-0 | www.rosenberger.de          |
| TDK Corp.                              | 847-803-6100      | www.component.tdk.com       |

Note: Indicate that you are using the MAX9276A or MAX9280A when contacting these component suppliers.

## Component Lists, Schematics, and PCB Layout Diagrams

Click  on  the  links  below  for  component  information, schematics, and PCB layout diagrams:

- MAX9276A EV Kit BOM
- MAX9280A EV Kit BOM
- MAX9276A/MAX9280A EV Kit Schematics
- MAX9276A/MAX9280A EV Kit PCB Layout

## Ordering Information

| PART                | TYPE        |
|---------------------|-------------|
| MAX9276A COAXEVKIT# | EV Kit      |
| MAX9280A COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#    | Adapter Kit |

#Denotes RoHS compliant.

Note: The MAX9276A and MAX9280A deserializer coax EV kits are normally ordered with a companion board:

-    MAX9275 serializer coax EV kit, or
-    MAX9279 serializer coax EV kit
- Check and verify that the USB cable has been properly connected.
- USB port has locked: Exit application/GUI; remove the USB cable from the board and reinsert and relaunch the GUI.
- Nuvoton μC is not communicating: Exit the application/ GUI and remove the USB cable from the board and reinsert, then relaunch the GUI.
- Deserializer board is faulty: Try a different board (if available).
- Serializer board is faulty: Try a different board (if available).

Evaluate: MAX9276A/MAX9280A

│

## MAX9276A/MAX9280A Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX9276A/MAX9280A

## MAX9276AEVKIT# Rev A, 9/4/2015

| Parent            | Parent         | Item               | Component                                                                                               | QTY Remarks                                                                                                                                                   | Manufacturer                 |
|-------------------|----------------|--------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| Number            | Description    | Part               | Component Description                                                                                   | Per                                                                                                                                                           | Part Number                  |
| MAX9276COAXEVKIT# | Evaluation Kit | 1 EBUSS20W         | 20G tinned copper Bus wire formed into 'U' shaped loops                                                 | (Reference Designators) 5 +5VIN, AVDD_EXT, DVDD_EXT, GND, IOVDD_EXT                                                                                           | 9020 Buss                    |
|                   |                | 2 ECM0505          | 22pF ±5%, 50V C0G Cer Cap (0603)                                                                        | 4 C106-107, C122-123                                                                                                                                          | MURATA GRM1885C1H220J        |
|                   |                | ECM0525            | 1uF ±20%, 10V X5R Cer Cap (0603)                                                                        | 1 C108                                                                                                                                                        | MURATA GRM188R61A105M        |
|                   |                | 3 4 ECM0035        | 33000pF ±10%, 25V X7R Cer Cap (0603)                                                                    | 1 C110                                                                                                                                                        | MURATA GRM188R71E333K        |
|                   |                | 5 ECM0323          | 0.22uF ±10%, 50V X7R Cer Cap (0805)                                                                     | 2 C11-12                                                                                                                                                      | MURATA GRM21BR71H224K        |
|                   |                | 6 ECM0619          | 1000pF ±10%, 50V X7R Cer Cap (0402)                                                                     | 5 C1-5                                                                                                                                                        | MURATA GRM155R71H102K        |
|                   |                | 7 EC1140           | 10uF ±20%, 16V X5R Cer Cap (1206)                                                                       | 7 C17, C22-26, C109                                                                                                                                           | TDK: C3216X5R1C106M          |
|                   |                | 8 EC2528           | 4.7uF 16volts Y5V 20% Cer Cap 1206                                                                      | 1 C21                                                                                                                                                         | Vishay: VJ1206V475MXJTW1BC   |
|                   |                | 9 ECM0445          | 0.1uF 50volts X7R 10% Cer Cap 0603                                                                      | 14 C6-10, C18, C101-105, C121, C131, C141                                                                                                                     | Murata: GRM188R71H104KA93D   |
|                   |                | 10 EH0072          | CONN HEADER .100" SNGL TIN, 2 Pin Header                                                                | 7 JU_LINK0-1, JU_RXSDAPU, JU_HIM, JU_TXSCLPU, JU_VDDIO, JU_VS SULLINS                                                                                         | PEC36SAAN                    |
|                   |                | 11 EL0885          | FERRITE CHIP 300 OHM500MA 0603                                                                          | 4 FB1-4                                                                                                                                                       | TDK, MMZ1608R301A            |
|                   |                | 12 EH0072          | CONN HEADER .100" SNGL TIN, 3 Pin Header                                                                | 20 JU121, JU_ADD0-2, JU_AVDD, JU_BWS, JU_CXTP, JU_DVDD, JU_ENABLE, JU_GPI, JU_GPIO0-1, JU_I2CSEL, JU_IOVDD, JU_MS, JU_PWDN, JU_RXSDA, JU_T1, JU_TXSCL, JU_VIN | SULLINS PEC36SAAN            |
|                   |                | 13                 | Not Installed                                                                                           | 0 JU_VL2-4                                                                                                                                                    | SULLINS PEC36SAAN            |
|                   |                | 14 EH0205          | CONN HEADER 72POS .100" DL TIN, 2X36 Pin Header                                                         | 1 H1                                                                                                                                                          | Sullins PEC36DAAN            |
|                   |                | 15 EH0205          | CONN HEADER 16POS .100" DBL, 2X8 Pin Header                                                             | 1 H2                                                                                                                                                          | Sullins PEC36DAAN            |
|                   |                | 16 EH0072          | CONN HEADER .100" SNGL TIN, 3 Pin Header                                                                | 1 H_I/O                                                                                                                                                       | SULLINS PEC36SAAN            |
|                   |                | 17 EH0077          | CONN USB RTANG FEMALE TYPE B PCB                                                                        | 1 J10                                                                                                                                                         | Assmann, AU-Y1007-R          |
|                   |                | 18 EH1157          | FAKRA - HF Conn., Right Angle Plug For PCB                                                              | 2 IN+, IN-                                                                                                                                                    | Rosenberger, 59S2AX-400A5-Y  |
|                   |                | 19                 | LED GREEN 0805 SMD                                                                                      | 1 LED_LOCK                                                                                                                                                    | Stanley, PG1112H-TR          |
|                   |                | 20 ED0565          | LED RED 0805 SMD                                                                                        | LED_ERR, LED_PWR,                                                                                                                                             | Stanley, BR1112H-TR          |
|                   |                | 21 ED0564          | LED YELLOW 0805 SMD                                                                                     | 3 LED_D2 3 LED_GPIO0-1, LED_RD, LED_WR                                                                                                                        | Stanley, AY1112H-TR          |
|                   |                | 22 ER0106033002    | 30K ohm Resistors 1% 0603                                                                               | 4 R17, R_ADD0-2                                                                                                                                               | Any                          |
|                   |                | 23                 | 27 ohm Resistor 5% 0603                                                                                 | 2 R101-102                                                                                                                                                    | Any                          |
|                   |                | 24                 | 1.5Kohms Resistor 5% 0603                                                                               | 1 R103                                                                                                                                                        | Any                          |
|                   |                | 25                 | 470ohms Resistor 5% 0603                                                                                | 1 R104                                                                                                                                                        | Any                          |
|                   |                | 26 ER0106034992    | 49.9K ohms Resistors 1% 0603                                                                            | 2 R1-2                                                                                                                                                        | Any                          |
|                   |                | 27                 | 1.1Kohms Resistor 5% 0603                                                                               | R121                                                                                                                                                          | Any                          |
|                   |                | 28                 | 1K ohms Resistor 5% 0603                                                                                | 1 4 R14, R123, R126-127                                                                                                                                       | Any                          |
|                   |                | 29                 | 2.2Kohms Resistor 5% 0603                                                                               | 2 R15-16                                                                                                                                                      | Any                          |
|                   |                | 30                 | 10Kohms Resistor 5% 0603                                                                                | 7 R3-5, R7, R12, R112, R122                                                                                                                                   | Any                          |
|                   |                | 31                 | 1.8K Ohm 5% Resistor 0603                                                                               | 4 R6, R10-11, R13                                                                                                                                             | Any                          |
|                   |                | 32 EH0102          | SWITCH TACTILE SPST-NO 0.05A 24V                                                                        | 1 SW122                                                                                                                                                       | Omeron Electronics, B3F-1000 |
|                   |                | 33 EH0066          | TEST POINT PC MINI .040"D RED                                                                           | 5 TP_CNTL0, TP_CNTL3, TP_GPIO0-1, TP_INTOUT                                                                                                                   | Keystone, 5000               |
|                   |                | 34                 |                                                                                                         | 0 T_P22-27, T_VC2-4                                                                                                                                           |                              |
|                   |                | 35 MAX9276AGTN+    | Not Installed 3.12Gbps GMSL Deserializer for Coax or STP Cable with                                     | 1 U1                                                                                                                                                          | MAX9276AGTN+                 |
|                   |                | 36 MAX9276AGTN/V + | LVCMOS Output QFN8X8-56L 3.12Gbps GMSL Deserializer for Coax or STP Cable with LVCMOS Output QFN8X8-56L | 1 U1                                                                                                                                                          | MAX9276AGTN/V+               |
|                   |                | 36 EQ0415          | FT232BL USB UART ( USB - Serial) I.C. TQFP_7X7X.8_32L                                                   | 1 U10                                                                                                                                                         | FTDI, FT232BL                |
|                   |                | 37 90-89450+ENL    | DS89C430/DS89C450 Ultra-High-Speed Flash Microcontrollers TQFP-44L                                      | 1 U12                                                                                                                                                         | DS89C450-ENL+                |
|                   |                | 38 EQ0263          | QUAD BUS BUFFERS (3-STATE)SOIC-14L                                                                      | 1 U13                                                                                                                                                         | On Semi: MC74AC125DR2G       |
|                   |                | 39 MAX3378EEUD +   | ±15kV ESD-Protected, 1A, 16Mbps, Dual/Quad TSSOP-14L                                                    | 2 U14, U19                                                                                                                                                    | MAX3378EEUD +                |
|                   |                | 40 MAX1792EUA33 +  | 500mA Low Dropout Linear Regulator MICROMAX\8L\EP                                                       | 1 U2                                                                                                                                                          | MAX1792EUA33 +               |

| 41 EX0343        | 6MHz crystal                               |   1 | Y10              | Hong Kong X'tals SSL60000N1HK188F0-0         |
|------------------|--------------------------------------------|-----|------------------|----------------------------------------------|
| 42 EX0381        | 14.7456MHz crystal                         |   1 | Y12              | Hong Kong X'tals SSM14745N1HK188F0-0         |
| 43 EPCB9280      | PCB: MAX9280 Evaluation Kit                |   1 |                  |                                              |
| 44 EH0071        | Shunts                                     |  18 | See Jumper Table |                                              |
| 45 EH0272        | CABLE, USB-A MALE to USB-B MALE 6' BEIGE   |   1 | Pack-out         | JAMECO 229730                                |
| 46 EH1160        | Cable, Coax, FAKRA Cable (2m)              |   1 | Pack-out         | Rosenberger North America 02E-59K1-59K1-     |
| 47 88-00712-MDM  | Box, Medium BROWN 9 3/8' x 7 1/4' x 2 1/2" |   1 | Pack-out         | Any                                          |
| 48 85-84003-006  | Label                                      |   1 | Pack-out         | MAX9276COAXEVKIT#                            |
| 49               | WEB instructions for Maxim Data Sheet      |   1 | Pack-out         |                                              |
| 50 87-02162-000  | BAG, STATIC SHIELD ZIP 4'x6', W/ ESD LOGO  |   1 | Pack-out         |                                              |
| 51 85-MAXKIT-PNK | FOAM, ANTI-STATIC PE 12'x12'X5MM           |   1 | Pack-out         |                                              |
|                  |                                            |     |                  | Default Jumper setting is for Coax/UART mode |

## MAX9280AEVKIT# Rev A, 9/4/2015

| Parent            | Parent         | Item Component            | Component                                                                                | Reference Designators                                                                                                                                         | Manufacturer                         |
|-------------------|----------------|---------------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| MAX9280COAXEVKIT+ | Evaluation Kit | 1 EBUSS20W                | 20G tinned copper Bus wire formed into 'U' shaped loops                                  | Qty 5 +5VIN, AVDD_EXT, DVDD_EXT, GND, IOVDD_EXT                                                                                                               | 9020 Buss                            |
|                   |                | 2 ECM0505                 | 22pF ±5%, 50V C0G Cer Cap (0603)                                                         | 4 C106-107, C122-123                                                                                                                                          | MURATA GRM1885C1H220J                |
|                   |                | 3 ECM0525                 | 1uF ±20%, 10V X5R Cer Cap (0603)                                                         | 1 C108                                                                                                                                                        | MURATA GRM188R61A105M                |
|                   |                | 4 ECM0035                 | 33000pF ±10%, 25V X7R Cer Cap (0603)                                                     | 1 C110                                                                                                                                                        | MURATA GRM188R71E333K                |
|                   |                | 5 ECM0323                 | 0.22uF ±10%, 50V X7R Cer Cap (0805)                                                      | 2 C11-12                                                                                                                                                      | MURATA GRM21BR71H224K                |
|                   |                | 6 ECM0619                 | 1000pF ±10%, 50V X7R Cer Cap (0402)                                                      | 5 C1-5                                                                                                                                                        | MURATA GRM155R71H102K                |
|                   |                | 7 EC1140                  | 10uF ±20%, 16V X5R Cer Cap (1206)                                                        | 7 C17, C22-26, C109                                                                                                                                           | TDK: C3216X5R1C106M                  |
|                   |                | 8 EC2528                  | 4.7uF 16volts Y5V 20% Cer Cap 1206                                                       | 1 C21                                                                                                                                                         | Vishay: VJ1206V475MXJTW1BC           |
|                   |                | 9 ECM0445                 | 0.1uF 50volts X7R 10% Cer Cap 0603                                                       | 14 C6-10, C18, C101-105, C121, C131, C141                                                                                                                     | Murata: GRM188R71H104KA93D           |
|                   |                | 10 EH0072                 | CONN HEADER .100" SNGL TIN, 2 Pin Header                                                 | 7 JU_LINK0-1, JU_RXSDAPU, JU_HIM, JU_TXSCLPU, JU_VDDIO, JU_VS                                                                                                 | SULLINS PEC36SAAN                    |
|                   |                | 11 EL0885                 | FERRITE CHIP 300 OHM500MA 0603                                                           | 4 FB1-4                                                                                                                                                       | TDK, MMZ1608R301A                    |
|                   |                | 12 EH0072                 | CONN HEADER .100" SNGL TIN, 3 Pin Header                                                 | 20 JU121, JU_ADD0-2, JU_AVDD, JU_BWS, JU_CXTP, JU_DVDD, JU_ENABLE, JU_GPI, JU_GPIO0-1, JU_I2CSEL, JU_IOVDD, JU_MS, JU_PWDN, JU_RXSDA, JU_T1, JU_TXSCL, JU_VIN | SULLINS PEC36SAAN                    |
|                   |                | 13                        | Not Installed                                                                            | 0 JU_VL2-4                                                                                                                                                    | SULLINS PEC36SAAN                    |
|                   |                | 14 EH0205                 | CONN HEADER 72POS .100" DL TIN, 2X36 Pin Header                                          | 1 H1                                                                                                                                                          | Sullins PEC36DAAN                    |
|                   |                | 15 EH0205                 | CONN HEADER 16POS .100" DBL, 2X8 Pin Header                                              | 1 H2                                                                                                                                                          | Sullins PEC36DAAN                    |
|                   |                | 16 EH0072                 | CONN HEADER .100" SNGL TIN, 3 Pin Header                                                 | 1 H_I/O                                                                                                                                                       | SULLINS PEC36SAAN                    |
|                   |                | 17 EH0077                 | CONN USB RTANG FEMALE TYPE B PCB                                                         | 1 J10                                                                                                                                                         | Assmann, AU-Y1007-R                  |
|                   |                | 18 EH1157                 | FAKRA - HF Conn., Right Angle Plug For PCB                                               | 2 IN+, IN-                                                                                                                                                    | Rosenberger, 59S2AX-400A5-Y          |
|                   |                | 19 ED0838                 | LED GREEN 0805 SMD                                                                       | 1 LED_LOCK                                                                                                                                                    | Stanley, PG1112H-TR                  |
|                   |                | 20 ED0565                 | LED RED 0805 SMD                                                                         | 3 LED_ERR, LED_PWR, LED_D2                                                                                                                                    | Stanley, BR1112H-TR                  |
|                   |                | 21 ED0564                 | LED YELLOW 0805 SMD                                                                      | 3 LED_GPIO0-1, LED_RD, LED_WR                                                                                                                                 | Stanley, AY1112H-TR                  |
|                   |                | 22 ER0106033002           | 30K ohm Resistors 1% 0603                                                                | 4 R17, R_ADD0-2                                                                                                                                               | Any                                  |
|                   |                | 23                        | 27 ohm Resistor 5% 0603                                                                  | 2 R101-102                                                                                                                                                    | Any                                  |
|                   |                | 24                        | 1.5Kohms Resistor 5% 0603                                                                | 1 R103                                                                                                                                                        | Any                                  |
|                   |                | 25                        | 470ohms Resistor 5% 0603                                                                 | 1 R104                                                                                                                                                        | Any                                  |
|                   |                | 26 ER0106034992           | 49.9K ohms Resistors 1% 0603                                                             | 2 R1-2                                                                                                                                                        | Any                                  |
|                   |                | 27                        | 1.1Kohms Resistor 5% 0603                                                                | 1 R121                                                                                                                                                        | Any                                  |
|                   |                | 28                        | 1K ohms Resistor 5% 0603                                                                 | 4 R14, R123, R126-127                                                                                                                                         | Any                                  |
|                   |                | 29                        | 2.2Kohms Resistor 5% 0603                                                                | 2 R15-16                                                                                                                                                      | Any                                  |
|                   |                | 30                        | 10Kohms Resistor 5% 0603                                                                 | 7 R3-5, R7, R12, R112, R122                                                                                                                                   | Any                                  |
|                   |                | 31                        | 1.8K Ohm 5% Resistor 0603                                                                | 4 R6, R10-11, R13                                                                                                                                             | Any                                  |
|                   |                |                           | SWITCH TACTILE SPST-NO 0.05A 24V                                                         | 1 SW122                                                                                                                                                       | Omeron Electronics, B3F-1000         |
|                   |                | 32 EH0102 33 EH0066       | TEST POINT PC MINI .040"D RED                                                            | 5 TP_CNTL0, TP_CNTL3, TP_GPIO0-1, TP_INTOUT                                                                                                                   | Keystone, 5000                       |
|                   |                | 34                        | Not Installed                                                                            | 0 T_P22-27, T_VC2-4                                                                                                                                           |                                      |
|                   |                | 35 MAX9280AGTN+           | 3.12Gbps GMSL Deserializer for Coax or STP Cable with LVCMOS Output QFN8X8-56L           | 1 U1                                                                                                                                                          | MAX9280AGTN+                         |
|                   |                | 36 MAX9280AGTN/V+         | 3.12Gbps GMSL Deserializer for Coax or STP Cable with LVCMOS Output QFN8X8-56L           | 1 U1                                                                                                                                                          | MAX9280AGTN/V+                       |
|                   |                | 37                        | FT232BL USB UART ( USB - Serial) I.C. TQFP_7X7X.8_32L                                    | 1 U10                                                                                                                                                         | FTDI, FT232BL                        |
|                   |                | EQ0415                    | DS89C430/DS89C450 Ultra-High-Speed Flash                                                 |                                                                                                                                                               | DS89C450-ENL+                        |
|                   |                | 38 90-89450+ENL 39 EQ0263 | Microcontrollers TQFP-44L                                                                | 1 U12 1 U13                                                                                                                                                   | On Semi: MC74AC125DR2G               |
|                   |                | 40 MAX3378EEUD +          | QUAD BUS BUFFERS (3-STATE)SOIC-14L ±15kV ESD-Protected, 1A, 16Mbps, Dual/Quad TSSOP- 14L | U14, U19                                                                                                                                                      | MAX3378EEUD +                        |
|                   |                | 41 MAX1792EUA33 +         | 500mA Low Dropout Linear Regulator MICROMAX\8L\EP                                        | 2 1 U2                                                                                                                                                        | MAX1792EUA33 +                       |
|                   |                | 42 EX0343                 | 6MHz crystal                                                                             | 1 Y10                                                                                                                                                         | Hong Kong X'tals SSL60000N1HK188F0-0 |
|                   |                | 43 EX0381                 | 14.7456MHz crystal                                                                       | 1 Y12                                                                                                                                                         | Hong Kong X'tals SSM14745N1HK188F0-0 |

| 44 EPCB9280      | PCB: MAX9280 Evaluation Kit                | 1           |                  |                                                |
|------------------|--------------------------------------------|-------------|------------------|------------------------------------------------|
| 45 EH0071        | Shunts                                     | 18          | See Jumper Table |                                                |
| 46 EH0272        | CABLE, USB-A MALE to USB-B MALE 6' BEIGE   | 1           | Pack-out         | JAMECO 229730                                  |
| 47 EH1160        | Cable, Coax, FAKRA Cable (2m)              | 1           | Pack-out         | Rosenberger North America 02E-59K1-59K1- 02000 |
| 48 88-00712-MDM  | Box, Medium BROWN 9 3/8' x 7 1/4' x 2 1/2" | 1           | Pack-out         | Any                                            |
| 49 85-84003-006  | Label                                      | 1           | Pack-out         | MAX9280COAXEVKIT#                              |
| 50               | WEB instructions Data Sheet                | for Maxim 1 | Pack-out         |                                                |
| 51 87-02162-000  | BAG, STATIC SHIELD ZIP 4'x6', W/ ESD       | LOGO 1      | Pack-out         |                                                |
| 52 85-MAXKIT-PNK | FOAM, ANTI-STATIC PE 12'x12'X5MM           | 1           | Pack-out         |                                                |

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