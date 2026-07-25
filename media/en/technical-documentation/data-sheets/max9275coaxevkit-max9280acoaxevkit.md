<!-- lastmod 2022-08-04 -->
## MAX9275/MAX9279 Evaluation Kits

## General Description

The MAX9275/MAX9279 evaluation kits (EV kit) provide  a  proven  design  to  evaluate  the  MAX9275/ MAX9279  high-bandwidth  gigabit  multimedia  serial  link (GMSL) serializers with spread spectrum and full-duplex control  channel,  with  the  use  of  a  standard  FAKRA coaxial  cable  or  shielded  twisted-pair  (STP)  cable.  The EV  kit  also  includes  Windows  XP ® -,  Windows  Vista ® -, and  Windows ®   7-compatible  software  that  provides  a simple  graphical  user  interface  (GUI)  for  exercising  the features of the device. The EV kit comes with a MAX9275 or MAX9279 IC installed, depending on the kit ordered.

For complete GMSL evaluation using a standard FAKRA coax  cable,  order  the  MAX9275/MAX9279  coax  EV  kit with  a  companion  deserializer  board,  the  MAX9276A/ MAX9280A coax EV kit. For evaluating with STP cable, also  order  the  MAXCOAX2STP-HSD  adapter  kit.  Only one  adapter  kit  is  needed  per  link,  connecting  SerDes boards.

## MAX9275/MAX9279 EV Kit Files

| FILE                      | DESCRIPTION                                |
|---------------------------|--------------------------------------------|
| MAXSerDesEV-D_Install.EXE | Installs the EV kit files on your computer |
| MAXSerDesEV-D.EXE         | Application program                        |
| CDM20600.EXE              | Installs the USB device driver             |
| USB_Driver_Help_200.PDF   | USB driver installation help file          |

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

Evaluate: MAX9275/MAX9279

## Features

- Accepts 24-Bit or 32-Bit Parallel Video
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- USB-PC Connection (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

Note: In  the  following  sections,  'serializer'  refers  to  the MAX9275/MAX9279 ICs, and 'deserializer' refers to the MAX9276A/MAX9280A  ICs.  The  term  SerDes  refers  to serializer(s) and deseriabler(s).

This  document  covers  evaluation  with  either  coaxial (coax) or shielded twisted-pair (STP) cables. Evaluation with coax cables is explained in this data sheet.

Ordering Information appears at end of data sheet.

## MAX9275/MAX9279 Evaluation Kits

## Quick Start

## Required Equipment

- MAX9275 or MAX9279 coax serializer EV kit (USB cable included)
- MAX9276A or MAX9280A deserializer coax EV kit
- 2m Rosenberger FAKRA cable assembly (included in the MAX9276A/MAX9280A coax EV kit)
- Optional: Function generator (needed only if parallel data lacks a pixel clock)
- User-supplied PC  with Windows XP, Windows Vista, or Windows 7 and a spare USB port (direct 500mA connection is required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download and install the EV kit software, MAXSerDesEVD (the USB driver is automatically installed).
- 2) Verify  that  all  serializer  jumpers  are  in  their  default positions,  as  shown  in  Table  1  and  Figure  8,  and deserializer jumpers are set, as shown in Figure 12.
- 3) Connect the power supply's positive terminal to the +5VIN  PCB  pad  and  the  negative  terminal  to  the nearest  GND  PCB  pad  on  the  deserializer  EV  kit board  (this  assumes  the  USB  port  is  not  used  for powering the board).
- 4) Connect the FAKRA cable from the serializer EV kit OUT+ connector to the deserializer coax EV kit IN+ connector.
- 5) Connect the USB cable from the PC to the serializer EV  kit  board.  A  Windows  message  appears  when connecting  the  EV  kit  board  to  the  PC  for  the  first time. Each version of Windows has a slightly different message.  If  you  see  a  Windows  message  stating ready to use ,  then proceed to the next step; otherwise,  open  the  USB\_Driver\_Help\_200.PDF  file  to verify that the USB driver was successfully installed.
- 6) Verify that LED\_T2 on the deserializer EV kit board lights up, indicating that the microcontroller is powered and enabled.
- 7) Connect the pixel clock or function generator to the H1\_PCLK\_IN header on the serializer board.
- 8) Turn on the power supply and function generator.
- 9) Verify  that  LED  D2  on  the  deserializer  board  lights up, indicating that the microcontroller is powered and enabled.
- 10)  Verify operation by pulling a DINx line high/low and check corresponding DOUTx to change, tracking the DINx pin.
- 11)  Verify that LOCK LED on the deserializer board lights up,  indicating  that  the  link  has  been  successfully established. If LOCK LED remains off or ERROR LED is on, double-check that the PCLK\_IN signal is clocking data.
- 12)  Start  the  EV  kit  software  by  selecting Start  |  Programs  |  Maxim  Integrated  |  MAXSerDesEV-D  | MAXSerDesEV-D from the Start menu.
- 13)  The EV kit software Configuration Settings window is the first window that opens after successful launch. It helps the user to set up the serializer and deserializer boards properly and specify the mode of operation (Figure 1).
- 14)  The GUI automatically searches for slave addresses selectable by the SerDes ADDx pins and identifies the DUTs based on the Device ID s read from the DUTs.
- 15)  Press  the Identify  Devices button  at  any  time  to reidentify devices and display in corresponding table.
- 16)  Only LinkType and Device Address on the Configuration Settings window affect the GUI operation. Other items are for user reference only.
- 17)  I 2 C-to-I 2 C mode support: To enable I 2 C-to-I 2 C mode,  change  jumpers  JU\_CONF1  and  JU\_CONF0 (Figure 1), and change jumpers JU\_TXSCL from the TX to SCL position and JU\_RXSDA from the RX to SDA position.  Press  the Identify  Devices button  to  verify proper settings. Alternatively, make the changes and select I2C from the Bus drop-down list before pressing  the Connect button  to  start  the GMSL  SerDes Evaluation Kit Window (Figure 2).
- 18)  Press the Connect button at the bottom of the screen.
- 19)  The GMSL SerDes Evaluation Kit Window appears. Green LED indicators indicate that connection to the DUT  was  successful.  If  there  is  a  communication problem with the DUTs, the LED indicators turn red.
- 20)  Press the Read all MAX92xx button in the Serializer group box to read all serializer registers.
- 21)  Click  on  the Deserializer tab  (Figure  3)  and  then press Read all MAX92xx in  the Deserializer group box to read all deserializer registers.
- 22)  Select any  of the other tabs to evaluate  other functions of the SerDes.

## Evaluate: MAX9275/MAX9279

## MAX9275/MAX9279 Evaluation Kits

## Detailed Description of Software

To start the evaluation kit GUI, select Start | Programs | Maxim Integrated |  MAXSerDesEV-D | MAXSerDesEV-D .

Evaluate: MAX9275/MAX9279

## Configuration Settings Window

The Configuration  Settings window  (Figure  1)  is  the first  window  that  opens  after  program  launch.  It  allows the user to specify evaluation board setup and mode of operation.

Figure 1. MAXSerDesEV-N EV Kit Software: Configuration Settings Window

<!-- image -->

## MAX9275/MAX9279 Evaluation Kits

## Controller Group Box

In the Controller group box, select link type by choosing Coax or STP from the LinkType drop-down list, the Bus by choosing I 2 C or UART from the Bus drop-down list, and decide whether serializer or deserializer should connect to the USB controller by clicking on one of the radio buttons. With changes to any of these parameters, selection in the jumper listings below changes automatically, prompting the user to make corresponding changes to the jumper on the EV kit boards.

## Serializer Jumper Selection and Deserializer Jumper Selection

The MAX9279  Jumper  Selection and MAX9280/80A Jumper Selection group boxes list the SerDes jumpers, respectively,  on  the  evaluation  boards  of  the  selected Device ID s  and  show  the  proper  shunt  positions  for  the conditions selected in the Controller group box.

## Identify Devices Button

The Identify Devices button causes the GUI to  scan  the  system  and  search  for  slave  addresses selectable  by  the  SerDes  input  address  pins.  Upon successful communication,  identified Device  ID and corresponding jumper lists are displayed on the MAX9279 Jumper Selection and MAX9280/80A Jumper Selection group boxes. The user can also manually select a device from  the Device  ID drop-down  list  and  enter  a  slave address  in  the Device  Address edit  box.  It  is  good practice  to utilize  the Identify  Devices function  and verify  communication  with  the  DUTs  before  attempting to Connect .  Figure  8,  Figure  9,  Figure  10,  Figure  11, and  Figure  12  show  jumper  settings  on  the  MAX9275/ MAX9279 PCB for coax or STP cable and UART or I 2 C communication  with  a  USB  controller  connected  to  the serializer board. Refer to the MAX9275/MAX9279 IC data sheet for detailed configuration information. See Table 1 for jumper functions and settings.

## Connect Button

The Connect button opens up the EV kit window,  reads  the  SerDes  registers,  and  updates  the register  maps  for  both.  Successful  communication  is indicated  by  green  LED  indicators,  and  in  case  of  a communication problem, the color turns red.

## Cancel - Do Not Connect Button

The Cancel - Do Not Connect button brings up the EV kit  window  without  attempting  to  connect  to  the  microcontroller  of  the  SerDes.  Although  there  is  no  communication  with  the  microcontroller,  all  functions  and  tabs corresponding to the selected Device ID s on the EV kit become active once there.

## Evaluation Kit Window

The Evaluation Kit window (Figure 2) provides access to all internal functions of the DUTs by means of reading and writing registers through different tabs, allowing the user to evaluate various functions of the SerDes.

## Serializer Group Box

The Serializer group box provides pushbuttons to update the serializer's register map from the DUT using the Read All  …. button,  or  update  from  a  previously  saved  file, Load button, or save existing registers values into a file for future reference using the, Save button.

## Deserializer Group Box

The Deserializer group  box  provides  pushbuttons  to update the deserializer's register map from the DUT using the Read All button, update from a previously saved file using  the Load button,  or  save  existing  register  values into a file for future reference using the Save button.

## Open Configuration Button

The Open  Configuration button  returns  the  user  to the Configuration  Settings window.  Use  the Open Configuration and Connect buttons to go back and forth between  the Configuration  Settings window  and  the Evaluation Kit window.

## MAX9275/MAX9279 Evaluation Kits

## Read All Button

The Read All button reads both SerDes device registers.

## MAX9279 Tab

The MAX9279 tab (Figure 2) lists the serializer's registers and  bit  maps. Read and Write buttons  in  each  register group box allows read/write access for each bit (or group of bits) that specify a function or condition, as defined in the

Figure 2. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX9279 Tab)

<!-- image -->

Evaluate: MAX9275/MAX9279

respective serializer IC data sheet. The color of the small LED indicator next to the Read/Write buttons indicates the communication  status.  Red  indicates  failed  communication and green indicates successful communication.

## MAX9275/MAX9279 Evaluation Kits

## MAX9280/80A Tab

The MAX9280/80A tab  (Figure  3)  lists  the  deserializer's registers  and  bitmaps.  Read  and  Write  buttons  in  each register  group  box  allows  read/write  access  for  each  bit (or  group  of  bits)  that  specify  a  function  or  condition,  as

defined in the respective deserializer IC data sheet. The color of the small LED indicator next to the Read and Write buttons indicates the communication status. Red indicates failed  communication  and  green  indicates  successful communication.

Figure 3. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX9280/80A Tab)

<!-- image -->

## MAX9275/MAX9279 Evaluation Kits

## PRBS Test

Upon pressing the Start button in the PRBS Test tab (Figure 4), the SerDes registers are programmed per defined sequence in the IC data sheets to  perform  a  pseudorandom bit sequence (PRBS) error-

rate test. Enter test duration (maximum 32,767s = 9.1hrs) in the Duration edit box in the Bit Error Rate Test group box  and  press  the Start button  to  start  the  test.  Upon test  completion,  the  number  of  bit  errors  read  from  the PRBSERR  register  are  displayed  in  the PRBS  Error Counter box.

Figure 4. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (PRBS Test Tab)

<!-- image -->

## MAX9275/MAX9279 Evaluation Kits

## Log and Low Level Access Tab

The Log  and  Low  Level  Access tab  (Figure  5)  logs all  activities  between  the  GUI  and  DUTs.  The Register Access group  box  allows  read  or  write  of  the  specified slave and register addresses. Press the Send String to

Evaluate: MAX9275/MAX9279

EVKIT button  to  communicate  with  devices  that  are  not register-based, such as the MAX7324.

User-supplied devices requiring other interface protocols must use raw TX byte codes to communicate. Note that in  bypass  mode,  raw  data  passes  directly  to  the  usersupplied slave device without modification.

Figure 5. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Log and Low Level Access Tab)

<!-- image -->

## MAX9275/MAX9279 Evaluation Kits

## HDCP Tab

The HDCP tab  (Figure  6)  is  viewable  only  for  SerDes that  support  the  HDCP  function.  The  HDCP  registers  of both  SerDes  are  displayed  side-by-side  with Read and Write buttons for each register. Authenticate and Enable Encryption buttons  initiate  start  of  the  corresponding function; at the end of the operation, the color of the LED indicator turns green to indicate success of the function or red to indicate failure.

Figure 6. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (HDCP Tab)

<!-- image -->

## MAX9275/MAX9279 Evaluation Kits

## Lookup Tables Tab

The Lookup  Tables tab  (Figure  7)  provides  access  to the look up tables (LUTs) of the deserializer. Use this tab to program/view/edit LUT settings of the red, green, and blue colors for color translation. LUT content edits can be performed on the entire 256 bytes of all three colors, of

Evaluate: MAX9275/MAX9279

an  individual  color,  or  of  an  individual  pixel  of  any  color table. Contents of the Lookup Tables can be saved as a .csv file for use as a template, or can be uploaded from an existing file. A sample LUT contents file is provided in the EV kit GUI.

Figure 7. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Lookup Tables)

<!-- image -->

Figure 8. Initial Serializer Jumper Settings for Coax/I 2 C Mode

<!-- image -->

Figure 9. Serializer Jumper Settings for Coax/UART Mode

<!-- image -->

Figure 10. Serializer Jumper Settings for STP/UART Mode

<!-- image -->

Figure 11. Serializer Jumper Settings for STP/I 2 C Mode

<!-- image -->

Figure 12. Initial Deserialzer Jumper Settings for Coax/I 2 C Mode

<!-- image -->

## Detailed Description of Hardware

The MAX9275/MAX9279 coax EV kits provide a proven layout for the MAX9275/MAX9279 GMSL serializers with the  use  of  a  standard  FAKRA  coax  cable.  On-board level translators and easy-to-use USB-PC connection are included on the EV kit.

The  EV  kit  board's  layout  is  divided  into  three  principal sections:

- 1) Power-supply circuitry: On-board LDO regulators U2 and U3 power the AVDD, DVDD, and IOVDD supplies from +5VIN.
- 2) MAX9275/MAX9279 and support components.
- 3) Microcontrollers (U12, U10) and support components.

## On-Board-Supplied Interface

The  EV  kit  board  provides  a  UART  and  I 2 C  interface (through  U12  and  U14)  intended  to  operate  while  both SerDes boards are powered up and locked.

## User-Supplied Interface

To use the EV kit with a user-supplied interface, remove shunts from the JU\_TXSCL header and apply a TX/SCL signal  to  the  middle  pin  of  the  JU\_TXSCL  header. Also, remove shunts from the JU\_RXSDA header and apply an RX/SDA signal to the middle pin of the JU\_RXSDA header.

## Evaluate: MAX9275/MAX9279

Refer to the MAX9275/MAX9279  and  MAX9276A/ MAX9280A  IC  data  sheets  for  details  regarding  UART protocol for base mode, write-data format, read-data format, selecting base mode or bypass mode, and selecting a UART or I 2 C slave device.

## User-Supplied Power Supply

The  EV  kit  draws  power  from  the  USB  port  by  default. Jumper JU\_VIN selects between the 5V USB supply or the  +5VIN  user-supplied  power  to  power  up  U1  and  its supporting circuitry.

To provide different power supplies to AVDD, DVDD, and IOVDD, move shunts on the JU\_AVDD, JU\_DVDD, and JU\_IOVDD headers  from  the  INT  to  EXT  positions  and apply  external  user-supplied  power  at  the  AVDD\_EXT, DVDD\_EXT, and IOVDD\_EXT terminals, respectively.

## Detailed Description of Firmware

The DS89C450  microcontroller (U12) runs custom firmware that ensures that no breaks occur within register read/write  commands.  The  firmware  records  9-bit  evenparity data received from the USB interface while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received from the SerDes is immediately relayed to the USB.

## MAX9275/MAX9279 Evaluation Kits

Table 1. Jumper Descriptions

| JUMPER   | SIGNAL   | SHUNT POSITION   | FUNCTION                                         |
|----------|----------|------------------|--------------------------------------------------|
| JU_AVDD  | AVDD     | INT*             | AVDD supplied internally                         |
| JU_AVDD  | AVDD     | EXT              | AVDD supplied through the AVDD_EXT terminal      |
| JU_BWS   | BWS      | L*               | PCLKIN > 12.5MHz, 32-bt mode                     |
| JU_BWS   | BWS      | H                | PCLKIN > 12.5MHz, 32-bit mode                    |
| JU_BWS   | BWS      | Open             | PCLKIN > 33.33MHz 27-bit high bandwidth          |
| JU_CDS   | CDS      | L*               | μC is connected at the serializer side           |
| JU_CDS   | CDS      | H                | μC is connected at the deserializer side         |
| JU_CONF0 | CONF0    | L*               | (See Table 2)                                    |
| JU_CONF0 | CONF0    | H                | (See Table 2)                                    |
| JU_CONF0 | CONF0    | Open             | (See Table 2)                                    |
| JU_CONF1 | CONF1    | L                | (See Table 2)                                    |
| JU_CONF1 | CONF1    | H                | (See Table 2)                                    |
| JU_CONF1 | CONF1    | Open*            | (See Table 2)                                    |
| JU_CONF2 | CONF2    | L                | (See Table 3)                                    |
| JU_CONF2 | CONF2    | H                | (See Table 3)                                    |
| JU_CONF2 | CONF2    | Open*            | (See Table 3)                                    |
| JU_CONF3 | CONF3    | L                | (See Table 3)                                    |
| JU_CONF3 | CONF3    | H                | (See Table 3)                                    |
| JU_CONF3 | CONF3    | Open*            | (See Table 3)                                    |
| JU_DVDD  | DVDD     | INT*             | DVDD supplied internally                         |
| JU_DVDD  | DVDD     | EXT              | DVDD supplied through the AVDD_EXT terminal      |
| JU_HIM   | GPO/HIM  | L*               | Reverse channel in legacy mode                   |
| JU_HIM   | GPO/HIM  | H                | Reverse channel in high-immunity mode            |
| JU_IOVDD | IOVDD    | INT*             | IOVDD supplied internally                        |
| JU_IOVDD | IOVDD    | EXT              | IOVDD supplied through the AVDD_EXT terminal     |
| JU_LDO   | LDO      | 3.3V*            | Internal IOVDD = 3.3V                            |
| JU_LDO   | LDO      | 1.8V             | Internal IOVDD = 1.8V                            |
| JU_LINK0 | LINK0    | -                | Reserved for factory diagnostics test            |
| JU_LINK1 | LINK1    | -                | Reserved for factory diagnostics test            |
| JU_MS    | MS       | L*               | Base mode                                        |
| JU_MS    | MS       | H                | Bypass mode                                      |
| JU_PLI0  | PLI0     | L*               | Pins 1, 5, and 9 on header H1 connected to GND   |
| JU_PLI0  | PLI0     | H                | Pins 1, 5, and 9 on header H1 connected to VDDIO |
| JU_PLI0  | PLI0     | Open             | Pins 1, 5, and 9 on header H1 open               |
| JU_PLI1  | PLI1     | L*               | Pin 3, 7, and 11 on header H1 connected to GND   |
| JU_PLI1  | PLI1     | H                | Pin 3, 7, and 11 on header H1 connected to VDDIO |
| JU_PLI1  | PLI1     | Open             | Pin 3, 7, and 11 on header H1 open               |

Evaluate: MAX9275/MAX9279

Table 1. Jumper Descriptions (continued)

| JUMPER     | SIGNAL   | SHUNT POSITION   | FUNCTION                                                                                      |
|------------|----------|------------------|-----------------------------------------------------------------------------------------------|
| JU_PWDN    | PWDN     | L                | Serializer is powered on                                                                      |
| JU_PWDN    | PWDN     | H*               | Serializer is powered off                                                                     |
| JU_RXSDA   | RXSDA    | RX*              | UART-to-UART or UART-to-I 2 C mode (do not install if controller is on the deserializer side) |
| JU_RXSDA   | RXSDA    | SDA              | I 2 C-to-I 2 C mode (do not install if controller is on the deserializer side)                |
| JU_RXSDAPU | RXSDA    | Short*           | RX/SDA pulled up to IOVDD                                                                     |
| JU_RXSDAPU | RXSDA    | Open             | RX/SDA pulled up to IOVDD externally                                                          |
| JU_T1      | USB_RI   | L                | U1-11 to GND (factory use only)                                                               |
| JU_T1      | USB_RI   | H                | U1-11 to USB+5V (factory use only)                                                            |
| JU_T2EX    | T2EX     | Open*            | U1-11 open (factory use only)                                                                 |
| JU_T2EX    | T2EX     | L                | U1-41 to GND (factory use only)                                                               |
| JU_T2EX    | T2EX     | H                | U1-41 to USB+5V (factory use only)                                                            |
| JU_T2EX    | T2EX     | Open*            | U1-41 open (factory use only)                                                                 |
| JU_TXSCL   | TXSCL    | TX*              | UART-to-UART or UART-to-I 2 C mode (do not install if controller is on the deserializer side) |
| JU_TXSCL   | TXSCL    | SCL              | I 2 C-to-I 2 C mode (do not install if controller is on the deserializer side)                |
| JU_VDDIO   | VDDIO    | Short*           | VDDIO applied to U1                                                                           |
| JU_VDDIO   | VDDIO    | Open             | Connect ammeter to measure I VDDIO                                                            |
| JU_VIN     | VIN      | USB              | 5V supplied from the USB port                                                                 |
| JU_VIN     | VIN      | +5V*             | 5V supplied from the external supply applied on the +5V terminal                              |
| JU_VS      | VS       | Short*           | VS/DIN19 (reserved for factory diagnostics test)                                              |
| JU_VS      | VS       | Open             | VS/DIN19 (reserved for factory diagnostics test)                                              |

* Default position.

Table 2. Jumper Settings (JU\_CONF1, JU\_CONF0)

| JU_CONF1 SHUNT POSITION   | CONF1   | JU_CONF0 SHUNT POSITION   | CONF0   | CONTROL CHANNEL (I2CSEL)   | SPREAD ENABLE (SSEN)   | DATA-RATE SELECT (DRS)   |
|---------------------------|---------|---------------------------|---------|----------------------------|------------------------|--------------------------|
| L*                        | Low     | L*                        | Low     | UART (0)                   | Disabled (0)           | High rate (0)            |
| L                         | Low     | Open                      | High    | UART                       | Disabled               | Low rate (1)             |
| H                         | High    | H                         | Low     | UART                       | Enabled (1)            | High rate                |
| H                         | High    | L                         | High    | UART                       | Enabled                | Low rate                 |
| Open                      | Open    | Open                      | Low/Mid | I 2 C (1)                  | Disabled               | High rate                |
| L                         | Low     | H                         | Mid     | I 2 C                      | Disabled               | Low rate                 |
| H                         | High    | L                         | Mid     | I 2 C                      | Enabled                | High rate                |
| Open                      | Mid     | Open                      | High    | I 2 C                      | Enabled                | Low rate                 |

Evaluate: MAX9275/MAX9279

## Table 3. Jumper Settings (JU\_CONF3, JU\_CONF2)

| JU_CONF3 SHUNT POSITION   | CONF3   | JU_CONF2 SHUNT POSITION   | CONF2    | OUT± OUTPUT TYPE (CX/TP)   | AUTOSTART ( AUTOS )   | PCLKIN LATCH EDGE (ES)   |
|---------------------------|---------|---------------------------|----------|----------------------------|-----------------------|--------------------------|
| L                         | Low     | L                         | Low      | STP (0)                    | Autostart (0)         | Rising (0)               |
| L                         | Low     | Open                      | High     | STP                        | Autostart             | Falling (1)              |
| H                         | High    | H                         | Low      | STP                        | No autostart (1)      | Rising                   |
| H                         | High    | L                         | High     | STP                        | No autostart          | Falling                  |
| Open*                     | Open    | Open*                     | Low/Open | Coax (1)                   | Autostart             | Rising                   |
| L                         | Low     | H                         | Open     | Coax                       | Autostart             | Falling                  |
| H                         | High    | L                         | Open     | Coax                       | No autostart          | Rising                   |
| Open                      | Open    | Open                      | High     | Coax                       | No autostart          | Falling                  |

## Component List, Schematics, and PCB Layout Diagrams

Click  on  the  links  below  for  component  information, schematics, and PCB layout diagrams:

- MAX9275/MAX9279 EV Kit BOM
- MAX9275/MAX9279 EV Kit Schematics
- MAX9275/MAX9279 EV Kit PCB Layout

## Ordering Information

| PART               | TYPE        |
|--------------------|-------------|
| MAX9275 COAXEVKIT# | EV Kit      |
| MAX9279 COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#   | Adapter Kit |

# Denotes RoHS compliant.

Note: The MAX9275 and MAX9279 serializer coax EV kits are usually ordered with a companion deserializer board:

-  MAX9276A EV kit (MAX9276ACOAXEVKIT#), or
-  MAX9280A EV kit (MAX9280ACOAXEVKIT#)

## MAX9275/MAX9279 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                   | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------|-----------------|
|                 0 | 7/15            | Initial release                                               | -               |
|                 1 | 2/16            | Removed MAX9276A and MAX9280A from Ordering Information table | 19              |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX9275/MAX9279

Part Report for max9275\_79\_evkit\_a.pcb on 6/19/2014 7:12:11 AM

| Name        | Part Type           | PCB Decal           | Value   | Voltage   |
|-------------|---------------------|---------------------|---------|-----------|
| +5VIN       | MAXIMPAD            | INPUT\OUTPUT        |         |           |
| AVDD_EXT C1 | MAXIMPAD CAP\CER\SM | INPUT\OUTPUT CC0402 | 0.001uF |           |
| C2          | CAP\CER\SM          | CC0402              | 0.001uF |           |
| C3          | CAP\CER\SM          | CC0402              | 0.001uF |           |
| C4          | CAP\CER\SM          | CC0402              | 0.001uF |           |
| C5          | CAP\CER\SM          | CC0402              | 0.001uF |           |
| C6          | CAP\CER\SM          | CC0402              | 0.001uF |           |
| C7          | CAP\CER\SM          | CC0402              | 0.001uF |           |
| C8          | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C9          | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C10         | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C11         | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C12         | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C13         | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C14         | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C15         | CAP\CER\SM          | CC0805              | 0.22uF  | 50V       |
| C16         | CAP\CER\SM          | CC0805              | 0.22uF  | 50V       |
| C17         | CAP\CER\MED         | CC1206              | 10uF    |           |
| C18         | CAP\CER\SM          | CC0603              | 0.1uF   |           |
| C19         | CAP\CER\MED         | CC1206              | 4.7uF   |           |
| C20         | CAP\CER\MED         | CC1206              | 10uF    |           |
| C21         | CAP\CER\MED         | CC1206              | 4.7uF   |           |
| C22         | CAP\CER\MED         | CC1206              | 10uF    |           |
| C23         | CAP\CER\MED         | CC1206              | 10uF    |           |
| C24         | CAP\CER\MED         | CC1206              | 10uF    |           |
| C25         | CAP\CER\MED         | CC1206              | 10uF    |           |
| C26         | CAP\CER\MED         | CC1206              | 10uF    |           |
| C101        | CAP\CER\SM          | CC0603              | 0.1uF   |           |

C102 CAP\CER\SM CC0603 0.1uF C103 CAP\CER\SM CC0603 0.1uF C104 CAP\CER\SM CC0603 0.1uF C105 CAP\CER\SM CC0603 0.1uF C106 CAP\CER\SM CC0603 22pF C107 CAP\CER\SM CC0603 22pF C108 CAP\CER\SM CC0603 1uF C109 CAP\CER\MED CC1206 10uF C110 CAP\CER\SM CC0603 0.033uF C121 CAP\CER\SM CC0603 0.1uF C122 CAP\CER\SM CC0603 22pF C123 CAP\CER\SM CC0603 22pF C131 CAP\CER\SM CC0603 0.1uF C141 CAP\CER\SM CC0603 0.1uF DVDD\_EXT MAXIMPAD INPUT\OUTPUT FB1 FERRITE CC0603 FB2 FERRITE CC0603 FB3 FERRITE CC0603 FB4 FERRITE CC0603 GND MAXIMPAD INPUT\OUTPUT H1 HEADER\2X36-H-MIRRORED HEADER\2X36-H-MIRRORED H2 HEADER2X8 HEADER2X8 H\_I/O JUMPER2\SIP3 SIP\3P IOVDD\_EXT MAXIMPAD INPUT\OUTPUT J10 CONN\_USB-B CON-USB-B JU\_AVDD JUMPER2\SIP3 SIP\3P JU\_BWS JUMPER2\SIP3 SIP\3P JU\_CDS JUMPER2\SIP3 SIP\3P JU\_CONF0 JUMPER2\SIP3 SIP\3P JU\_CONF1 JUMPER2\SIP3 SIP\3P JU\_CONF2 JUMPER2\SIP3 SIP\3P JU\_CONF3 JUMPER2\SIP3 SIP\3P

## JU\_DVDD JUMPER2\SIP3 SIP\3P JU\_HIM JUMPER2\SIP3 SIP\3P JU\_IOVDD JUMPER2\SIP3 SIP\3P JU\_LDO JUMPER2\SIP3 SIP\3P JU\_LINK0 JUMPER SIP\2P JU\_LINK1 JUMPER SIP\2P JU\_MS JUMPER2\SIP3 SIP\3P JU\_PLI0 JUMPER2\SIP3 SIP\3P JU\_PLI1 JUMPER2\SIP3 SIP\3P JU\_PWDN JUMPER2\SIP3 SIP\3P JU\_RXSDA JUMPER2\SIP3 SIP\3P JU\_RXSDAPU JUMPER SIP\2P JU\_T1 JUMPER2\SIP3 SIP\3P JU\_T2EX JUMPER2\SIP3 SIP\3P JU\_TXSCL JUMPER2\SIP3 SIP\3P JU\_TXSCLPU JUMPER SIP\2P JU\_VDDIO JUMPER SIP\2P JU\_VIN JUMPER2\SIP3 SIP\3P JU\_VL2 CUTHERE CUTHERE JU\_VL3 CUTHERE CUTHERE JU\_VL4 CUTHERE CUTHERE JU\_VS JUMPER SIP\2P LED\_GPO LED-0805 LED-0805 LED\_LFLT LED-0805 LED-0805 LED\_PWR LED-0805 LED-0805 LED\_RD LED-0805 LED-0805 LED\_T2 LED-0805 LED-0805 LED\_WR LED-0805 LED-0805

## OUT+ CON/ROSENBERGER/59SAX-400A5Y/RT-FAKRA-M CON/ROSENBERGER/59SAX-400A5Y/RT-FAKRA-M CON/ROSENBERGER/59SAX-400A5-

## OUTY/RT-FAKRA-M CON/ROSENBERGER/59SAX-400A5Y/RT-FAKRA-M

Q1

R1

R2

R3

R4

R5

R6

R7

R10

R11

R12

R13

R15

R101

R102

R103

R104

R112

R121

R122

R123

R126

R127

R\_HIM

SW122

TP\_GPO

T\_P22

T\_P23

T\_P24

T\_P25

T\_P26

T\_P27

FET-N-S-SOT23

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\0603

RES\0603

RES\0603

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

RES\SMD\SM

SW-OMRON-B3F-1000

TESTPOINT-PC5000

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

SOT23

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

CC0603

SW-B3F-1000

TESTPOINT-PC5000

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

TESTPOINT\_VIA

2N7002

45.3k

45.3k

4.99k

4.99k

10k

10k

10k

2.2k

2.2k

1k

1k

1k

27

27

1.5k

470

10k

1.1k

10k

1k

1k

1k

30k

1%

1%

1%

1%

T\_VC2 TESTPOINT\_VIA TESTPOINT\_VIA T\_VC3 TESTPOINT\_VIA TESTPOINT\_VIA T\_VC4 TESTPOINT\_VIA TESTPOINT\_VIA U1 MAX9279 QFN8X8-56L U2 MAX1792 MICROMAX\8L\EP U3 MAX1792 MICROMAX\8L\EP U10 FT232BL-SONG TQFP\_7X7X.8\_32L U12 DS89C450-ENL TQFP-44L U13 74AC125 SOIC-14L U14 MAX3378E TSSOP-14L U19 MAX3378EEUD+ TSSOP-14L

X1 LOGO\_MAXIM\_INTEGRATED\_ALL LOGO\_MAXIM\_INTEGRATED\_MED X2 MTHOLE MTHOLE X3 MTHOLE MTHOLE X4 MTHOLE MTHOLE X5 MTHOLE MTHOLE

Y10 XTAL/HCM49 XTAL\HCM49 6MHz Y12 XTAL/HCM49 XTAL\HCM49 14.7456M Hz

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