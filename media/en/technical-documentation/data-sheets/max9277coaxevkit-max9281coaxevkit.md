<!-- lastmod 2022-08-04 -->
## MAX9277/MAX9281 Evaluation Kits

## General Description

The  MAX9277/MAX9281  coax  evaluation  kits  (EV  kit) provide  a  proven  design  to  evaluate  the  MAX9277  and MAX9281  high-bandwidth  gigabit  multimedia  serial  link (GMSL) serializers with spread spectrum and full-duplex control  channel  with  the  use  of  a  standard  FAKRA coaxial  cable. The  EV  kit  also  includes  Windows  XP ® -, Windows  Vista ® -,  and  Windows  7-compatible  software that provides a simple graphical user interface (GUI) for exercising features of the device. The EV kit comes with a MAX9277GTM+ or MAX9281GTM+ installed.

For complete GMSL  evaluation using a standard FAKRA  coax  cable,  order  the  MAX9277  or  MAX9281 coax EV  kit and a companion  deserializer board (MAX9276A or MAX9280A coax EV kit referenced in this document). For evaluating with STP cable, also order the MAXCOAX2STP-HSD  adapter  kit  and  refer  to  its  data sheet. Only one adapter kit is required per link, connecting the serializer and deserializer (SerDes) boards.

## Items Included in the EV Kit Package

| DESCRIPTION                                      |   QTY |
|--------------------------------------------------|-------|
| MAX9277 coax EV kit or MAX9281 coax EV kit board |     1 |
| USB cable                                        |     1 |

## MAX9276A/MAX9280A EV Kit Files

| FILE                             | DECRIPTION                                 |
|----------------------------------|--------------------------------------------|
| MAXSerDesEV-D_Vxxxx_ Install.EXE | Installs the EV kit files on your PC       |
| MAXSerDesEV-D.EXE                | Graphical user interface (GUI) application |
| CDM20600.EXE                     | Installs the USB device driver             |
| USB_Driver_Help_200.PDF          | USB driver installation help file          |

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluate: MAX9277/MAX9281 with

Coax or STP Cable

## Features

- Accepts 4-Channel LVDS or 24-Bit/32-Bit Parallel Video
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- USB-PC Connection (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

Note: In the following sections, MAX9277/81 and the term 'serializer' refer to the MAX9277 and MAX9281 ICs, and MAX9276A/80A and the  term  'deserializer'  refer  to  the MAX9276A and MAX9280A ICs. The term SerDes refers to serializer/deserializer.

Note: This document applies to evaluation of the product with  both  coax  and  STP  cables.  This  document  covers coax cables, but the information provided applies equally to STP cables.

## Quick Start

## Required Equipment

- MAX9277 or MAX9281 serializer EV kit (USB cable included)
- MAX9276A or MAX9280A deserializer EV kit
- 2m Rosenberger FAKRA cable assembly (included with the deserializer EV kit)
- 20MHz function generator
- PC with Windows XP, Windows Vista, or Windows 7 and a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX9277/MAX9281 Evaluation Kits

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download and install the latest version of the EV kit software from www.maximintegrated.com/EVkitsoftware .
- Search for the MAX9277 and then select MAX9277  |  Design  Resources  |  Software  | GMSL SerDes Evaluation Kit Software-Dallas uC .
- The  installation  application  will  install  the  USB driver for the on-board Dallas microcontroller. A Windows  message  appears  when  connecting the EV kit board to the PC for the first time. Each version of Windows  has  a  slightly different message. If you see a Windows message stating ready to use , the installation was successful.
- If the USB driver installation was not successful, install the appropriate USB driver for your  PC  from  the  links  below  and  refer  to  the USB\_Driver\_Help\_200.PDF file, if needed.

USB Driver FTDI VID FTDI PID (Windows Vista/Windows 7 32-/64-bit)

[www.maximintegrated.com/design/ tools/applications/evkit-software/index. cfm?EVKit=1046](www.maximintegrated.com/design/tools/applications/evkit-software/index.cfm?EVKit=1046)

USB Driver Maxim VID FTDI (Windows Vista/ Windows 7 64-bit)

[www.maximintegrated.com/design/ tools/applications/evkit-software/index. cfm?EVKit=871](www.maximintegrated.com/design/tools/applications/evkit-software/index.cfm?EVKit=871)

USB Driver Maxim VID FTDI (Windows XP/ Windows Vista/Windows 7 32-bit)

[www.maximintegrated.com/design/ tools/applications/evkit-software/index. cfm?EVKit=869](www.maximintegrated.com/design/tools/applications/evkit-software/index.cfm?EVKit=869)

- 2) Verify  that  all  serializer  board  jumpers  are  in  their default positions, as shown in Figure 9.
- 3) Verify that all deserializer board jumpers are in their default positions, as shown in Figure 10.
- 4) With  the  power  supply  and  function  generator  off, connect the 5V power supply to the +5VIN terminal pad on the deserializer EV kit.

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

- 5) Connect the FAKRA cable from the serializer board OUT+  connector to the deserializer board IN+ connector.
- 6) Connect the USB cable from the PC to the serializer EV kit (J10).
- 7) Connect the function generator output to the serializer board header (H1.PCLK\_IN).
- 8) Turn on power supply and function generator.
- 9) Verify that LED\_D2 on the serializer board turns on, blinks for a few seconds, then remains on, indicating that the microcontroller is powered, programmed, and enabled.
- 10)  Verify that LED\_PWR on the serializer board turns on, indicating that the board has power.
- 11)  Set  the  function  generator  output  to  square  wave, 20MHz, amplitude same as the IOVDD level selected on the board (3.3V), and offset at 0V.
- 12)  Verify the function generator output with a scope.
- 13)  Connect the function generator output to the serializer board header (H1.PCLK\_IN).
- 14)  Turn  on  the  power  supply  and  function  generator output.
- 15)  Verify that LED\_LOCK on the deserializer board turns on,  indicating  that  the  link  has  been  successfully established. If LED\_LOCK is off or LED\_ERROR is on,  check  the Troubleshooting section  for  possible fixes.
- 16)  Start the EV  kit software by selecting Start | Programs  |  Maxim  Integrated  |  MAXSerDesEV-D |  MAXSerDesEV-D .  The Configuration  Settings window will appear (Figure 1).
- 17)  Press the Connect button to launch the Evaluation Kit window  and  show  the  serializer  register  map (Figure 2). The GUI will read all the internal  registers of the SerDes and update the  corresponding tabs.

## Detailed Description of Software

To start the EV kit GUI, select Start |  All Programs | Maxim Integrated | MAXSerDesEV-D | MAXSerDesEV-D .

## Configuration Settings Window

The Configuration Settings window is the first window that  opens  after  successful  program  launch.  It  allows the user to specify evaluation board setup and mode of operation.

## MAX9277/MAX9281 Evaluation Kits

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the LinkType drop-down  list; I2C or UART from  the Bus drop-down  list;  and  whether  the Serializer or Deserializer is  connected  to  the  USB  controller.  Upon changing  any  of  these  parameters,  conflicting  jumper

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

settings  will  be  highlighted,  guiding  the  user  to  check and make the corresponding changes to the evaluation boards. Only LinkType and Device Address selections on the Configuration Settings window affects the EV kit operation. Other items, including jumper selection, are for user reference only.

Figure 1. MAXSerDesEV-D Evaluation Kit Software: Configuration Settings Window

<!-- image -->

│

## MAX9277/MAX9281 Evaluation Kits

## Serializer Jumper Selection Block

The Serializer  Jumper  Selection block  lists  jumpers on  the  evaluation  board  of  the  selected Device ID and displays the correct shunt positions  based  on  the conditions selected in the Controller group box. Note that changing  jumper  selections  in  this  group  box  does  not affect actual operation of the serializer.

## Deserializer Jumper Selection Block

The Deserializer Jumper Selection block lists jumpers  on  the  evaluation  board  of  the  selected Device ID and displays the correct shunt positions based on the conditions selected in the Controller group box. Note that changing  jumper  selections  in  this  group  box  does  not affect actual operation of the deserializer.

## Identify Devices Button

The Identify Devices button causes the GUI to scan the system  and  hunt  for  slave  addresses  selectable  by  the SerDes input address pins. Upon successful communication, the identified Device ID and  corresponding jumper lists  are  displayed  on  the Serializer and Deserializer Jumper Selection blocks. It is also possible to manually select  a  device  from  the Device  ID drop-down  list  and enter  a  slave  address  in  the Device Address edit  box. It  is  a  good  practice  to  utilize  the Identify Devices button and verify communication with the devices under test (DUTs) before attempting to Connect .

Figure  9  and  Figure  10  show  jumper  settings  on  the SerDes PCBs for coax cable and I 2 C communication with the  USB  controller  connected  to  the  deserializer  board. Refer  to  the  respective  serializer/deserializer  IC  data sheets for detailed configuration information. See Table 1 for PCB jumper settings/descriptions.

## Connect Button

The Connect button opens the Evaluation Kit window. The GUI reads the SerDes registers and  displays the register maps  for  both. Successful  communication  with  DUTs  is  indicated  by green LED indicators. If there is a communication problem, the LED indicators turn red.

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

## Cancel - Do not Connect Button

The Cancel  -  Do  not  Connect button  opens  the Evaluation  Kit window  without  attempting  to  connect to  the  on-board  microcontroller.  Although  there  is  no communication with the microcontroller, all functions and tabs corresponding to the selected Device ID s  become active once there.

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 2 provides access  to  all  internal  functions  of  the  DUTs  by  means of  reading  and  writing  registers  through  different  tabs, enabling  the  user  to  evaluate  various  functions  of  the SerDes.

The Read All button updates the SerDes' register maps by reading the DUT's internal registers.

The Serializer group box provides pushbuttons to access the serializer's registers. The Read all MAX9281 button reads  register  contents  from  the  serializer  and  updates the displayed register values. The Load button reads and updates registers  from  a  previously  saved  register  map file.  The Save button  saves  the  existing  register  values into a new file for future reference.

The Deserializer group box provides pushbuttons to  access  the  deserializer's  registers.  The Read  All MAX9276/76A button  reads  register  contents  from  the deserializer  and  updates  the  displayed  register  values. The Load button  reads  and  updates  registers  from  a previously  saved  register  map  file.  The Save button saves the existing register values into a new file for future reference.

The Open Configuration button opens the Configuration Settings window for any configuration changes. Use the Open Configuration and Connect buttons  to  navigate between the Configuration Settings and Evaluation Kit windows.

The Wake Up button applies the register write sequence described in the IC data sheets to wake the DUTs from sleep mode.

## MAX9277/MAX9281 Evaluation Kits

## MAX9281 Tab

The MAX9281 tab (Figure 2) lists the serializer's registers bitmaps.  The Read and Write buttons  in  each  register group box allow read/write access for each bit or group of bits that specify a function or condition, as defined in

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

the serializer IC data sheet. The color of the small LED indicator  next  to  the Read/Write buttons  indicates  the communication status. Green indicates successful communication and red indicates failed communication.

Figure 2. MAXSerDesEV-D Evaluation Kit Software (MAX9281 Tab (Serializer))

<!-- image -->

│

## MAX9277/MAX9281 Evaluation Kits

## MAX9276/76A Tab

The MAX9276/76A tab (Figure 3) lists the deserializer's  registers  bitmaps.  The Read and Write buttons  in  each  register  group  box  allows  read/write access for each bit or group of bits that specify a function

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

or condition, as defined in the deserializer IC data sheet. The color  of  the  small  LED  indicator  next  to  the Read/ Write buttons indicates the communication status. Green indicates  successful  communication  and  red  indicates failed communication.

Figure 3. MAXSerDesEV-D Evaluation Kit Software (MAX9276/76A Tab (Deserializer))

<!-- image -->

│

## MAX9277/MAX9281 Evaluation Kits

## PRBS Test Tab

The PRBS Test tab (Figure 4) facilitates PRBS testing. Upon pressing the Start button, the serializer and deserializer registers are programmed, per defined sequence in the IC data sheets, to perform a pseudorandom bit sequence (PRBS) error-rate test. Enter

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

the  test  duration  (maximum  32,767s  =  9.1hrs)  in  the Duration edit box and press Start to begin the test. At the end of the specified elapse time, the number of bit errors are read from the PRBSERR register and displayed in the PRBS Error Counter box.

Figure 4. MAXSerDesEV-D Evaluation Kit Software (PRBS Test Tab)

<!-- image -->

## MAX9277/MAX9281 Evaluation Kits

## Log and Low Level Access Tab

The Log and Low Level Access tab (Figure 5) logs all activities between the GUI and DUTs.

The Register Access group  box  allows  1-byte  read  or writes  of  the  specified Device  Address and Register Address .  Press  the Send  String  to  EVKIT button

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

to  communicate  with  devices  that  are  not  registerbased  (such  as  the  MAX7324).  User-supplied  devices requiring other interface protocols must use the Raw TX byte codes to communicate. Note that in bypass mode, raw  data  is  passed  to  the  user-supplied  slave  device directly without modification.

Figure 5. MAXSerDesEV-D Evaluation Kit Software (Log and Low Level Access Tab)

<!-- image -->

## MAX9277/MAX9281 Evaluation Kits

## HDCP Tab

The HDCP tab (Figure 6) is viewable only for serializers  and  deserializers  that  support  the  HDCP function.  The  HDCP  registers  of  both  SerDes  are  listed side-by-side with Read and Write buttons for

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

each  register. Authenticate and Enable  Encryption pushbuttons initiate the HDCP verification process. At the end of the operation, the color of the LED indicator turns green to indicate success or red to indicate failure of the function.

Figure 6. MAXSerDesEV-D Evaluation Kit (HDCP TabNote: The MAX9276A does not support HDCP)

<!-- image -->

│

## MAX9277/MAX9281 Evaluation Kits

## Lookup Tables Tab

The Lookup Tables tab (Figure 7) provides access to the lookup tables (LUTs) of the deserializer. Use this tab to program/view/edit the LUT settings of the red, green, and blue colors for color translation. LUT content edits can be

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

performed on the entire 256 bytes of all three colors, of an individual color or an individual pixel of any color table. The LUT contents can be saved as a .csv file for use as a template or can be uploaded from an existing file. Sample LUT content is provided in the evaluation kit software.

Figure 7. MAXSerDesEV-D Evaluation Kit Software: LUT Tables Window (Lookup Tables TabNote: This tab is relevant only to deserializers with image-enhancing capability)

<!-- image -->

Figure 8. MAXSerDesEV-D Evaluation Kit Software (Lookup Table Read/Write Progress Window-this is relevant only to deserializers with image-enhancing capability)

<!-- image -->

│

## MAX9277/MAX9281 Evaluation Kits

## Detailed Description of Hardware

The MAX9277/MAX9281 coax EV kits provide a proven layout for the MAX9277/MAX9281 GMSL serializers with the use of a standard FAKRA coax cable. On-board level translators  and  an  easy-to-use  USB-PC  connection  are included on the EV kit board.

The  serializer  EV  kit  board  layout  is  divided  into  three principal sections:

- 1) Power-supply circuitry.
- 2) MAX9277/MAX9281 application circuit, including parallel-to-LVDS bridge circuitry.
- 3) USB interface microcontrollers (U10, U12) and support components.

## On-Board USB Interface

The  EV  kit  board  provides  UART  and  I 2 C  interfaces (through  U10  and  U12)  intended  to  operate  while  both SerDes boards are powered on and locked.

## User-Supplied Interface

To  use  a  microcontroller  other  than  the  one  provided on  the  evaluation  board,  remove  the  JU\_TXSCL  and JU\_TXSDA  jumpers  and  connect  the  corresponding user's TX/SCL, RX/SDA, and GND signals to the H\_I/O header pins.

## Table 1. Jumper Settings/Descriptions

| JUMPER   | SIGNAL   | DEFAULT POSITION   | FUNCTION                                    |
|----------|----------|--------------------|---------------------------------------------|
| JU_ADD0  | ADD0     | L*                 | (See Table 2)                               |
| JU_ADD0  | ADD0     | H                  | (See Table 2)                               |
| JU_ADD0  | ADD0     | Open               | (See Table 2)                               |
| JU_ADD1  | ADD1     | L*                 | (See Table 2)                               |
| JU_ADD1  | ADD1     | H                  | (See Table 2)                               |
| JU_ADD1  | ADD1     | Open               | (See Table 2)                               |
| JU_AUTO  | AUTO     | L*                 | Enable serialization at power-up            |
| JU_AUTO  | AUTO     | H                  | Disable serialization at power-up           |
| JU_AVDD  | AVDD     | INT*               | AVDD supplied internally                    |
| JU_AVDD  | AVDD     | EXT                | AVDD supplied through the AVDD_EXT terminal |
| JU_BWS   | BWS      | L*                 | PCLKIN > 12.5MHz, 32-bit mode               |
| JU_BWS   | BWS      | H                  | PCLKIN > 12.5MHz, 32-bit mode               |
| JU_BWS   | BWS      | Open               | PCLKIN > 33.33MHz 27-bit mode               |
| JU_BWS59 | BWS59    | L*                 | 24-bit mode                                 |
| JU_BWS59 | BWS59    | H                  | 32-bit mode                                 |
| JU_CDS   | CDS      | L*                 | μC connected at the serializer side         |
| JU_CDS   | CDS      | H                  | μC connected at the deserializer side       |

│

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

Refer  to  the  respective  serializer  IC  data  sheet  for details  about  communication  protocol  and  proper  pin configurations.

## Board Power Supplied

The serializer board can be powered from the USB port (default)  or  5V  supplied  on  the  +5VIN/GND  terminals. Jumper JU\_VIN selects between the 5V USB supply or the +5VIN. On-board LDO regulators U2, U3, U5, and U6 generate all different voltage levels required for operating the EV kit board from a single 5V power supply (+5VIN).

To provide different power supplies to AVDD, DVDD, and IOVDD, move the shunts from JU\_AVDD, JU\_DVDD, and JU\_IOVDD headers from the INT to EXT positions and apply  external  user-supplied  power  at  the  AVDD\_EXT, DVDD\_EXT, and IOVDD\_EXT terminals, respectively.

## Detailed Description of Firmware

The DS89C450  microcontroller (U12) runs custom firmware that ensures that no breaks occur within register read/write  commands. The firmware records 9-bit evenparity data received from the USB interface while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received by the serializer is immediately relayed to the USB port.

Evaluate: MAX9277/MAX9281 with

Coax or STP Cable

Table 1. Jumper Settings/Descriptions (continued)

| JUMPER            | SIGNAL          | DEFAULT POSITION   | FUNCTION                                                                                                         |
|-------------------|-----------------|--------------------|------------------------------------------------------------------------------------------------------------------|
| JU_CNTL1          | RES/CNTL1       | L*                 | Serialize RES to serial data bit 27                                                                              |
| JU_CNTL1          | RES/CNTL1       | H                  | Serialize CNTL1 pin to serial data bit 27                                                                        |
| JU_CNTL2          | CNTL2           | L*                 | Do not map CNTL2                                                                                                 |
| JU_CNTL2          | CNTL2           | H                  | Serialize CNTL2 pin to serial data bit 28                                                                        |
| JU_CONF0          | CONF0           | L*                 | (See Table 2)                                                                                                    |
| JU_CONF0          | CONF0           | Open               | (See Table 2)                                                                                                    |
| JU_CONF1          | CONF1           | L* H               | (See Table 2)                                                                                                    |
| JU_CONF1          | CONF1           | Open               | (See Table 2)                                                                                                    |
| JU_CXTP           | CX/TP           | L*                 | Select coax as serial link                                                                                       |
| JU_CXTP           | CX/TP           | H                  | Select STP as serial link                                                                                        |
| JU_DRS59          | DRS59           | L*                 | Parallel input data rate of 16.66MHz to 104MHz (24 bit)                                                          |
| JU_DRS59          | DRS59           | H                  | Parallel input data rate of 8.33MHz to 16.66MHz (24 bit)                                                         |
| JU_DVDD           | DVDD            | INT* EXT           | DVDD supplied internally DVDD supplied through the AVDD_EXT terminal                                             |
| JU_DVDD           | DVDD            | L*                 | Trigger on rising edge of PCLKIN                                                                                 |
| JU_ES59           | ES59            |                    |                                                                                                                  |
| JU_ES59           | ES59            | H                  | Trigger on falling edge of PCLKIN                                                                                |
| JU_HIM            | GPO/HIM         | L*                 | Reverse channel in legacy mode                                                                                   |
| JU_HIM            | IOVDD           |                    | IOVDD supplied through the AVDD_EXT terminal                                                                     |
| JU_IOVDD          |                 | INT*               | IOVDD supplied internally                                                                                        |
| JU_IOVDD          |                 | EXT                |                                                                                                                  |
| JU_LDO JU_LVDSVDD | LDO             | 3.3V*              | Internal IOVDD = 3.3V                                                                                            |
| JU_LDO JU_LVDSVDD | LDO             | 1.8V               | Internal IOVDD = 1.8V                                                                                            |
|                   | LVDSVDD         | INT*               | LVDSVDD supplied internally                                                                                      |
|                   |                 | EXT                | LVDSVDD supplied through the LVDSVDD_EXT terminal                                                                |
| JU_MS             | MS              | L*                 | Base mode                                                                                                        |
|                   |                 | H                  | Bypass mode                                                                                                      |
| JU_PLI0           | -               | L* H               | If the JU_PLI0 shunt is placed in the 'L' position, then every other 4th pin starting with 1 is connected to GND |
| JU_PLI1           | -               | L*                 | If the JU_PLI1 shunt is placed in the 'L' position, then every other                                             |
| JU_PLI1           | -               | Open               | If the JU_PLI1 shunt is placed in the 'L' position, then every other                                             |
|                   |                 |                    | 4th pin starting with 3 is connected to GND                                                                      |
|                   |                 | H*                 | 4th pin starting with 3 is connected to GND                                                                      |
|                   |                 | Open               | 4th pin starting with 3 is connected to GND                                                                      |
| JU_PWDN           | PWDN            | L                  | Serializer powered off                                                                                           |
| JU_PWDN           | PWDN            |                    | Serializer powered on                                                                                            |
| JU_RX59           | RX/SDA (MA9259) | RXSDA59 IOVDD*     | MAX9259 RX pin connected to system RX/SDA MAX9259 RX pin pulled up to IOVDD                                      |

│

Evaluate: MAX9277/MAX9281 with

Coax or STP Cable

Table 1. Jumper Settings/Descriptions (continued)

| JUMPER     | SIGNAL          | DEFAULT POSITION   | FUNCTION                                                         |
|------------|-----------------|--------------------|------------------------------------------------------------------|
| JU_RX68    | RX/SDA (MA9268) | RXSDA68            | MAX9268 RX pin connected to system RX/SDA                        |
| JU_RX68    | RX/SDA (MA9268) | IOVDD*             | MAX9268 RX pin pulled up to IOVDD                                |
| JU_RXSDAPU | RX/SDA          | Short*             | RX/SDA pulled up to IOVDD                                        |
| JU_RXSDAPU | RX/SDA          | Open               | RX/SDA pulled up to IOVDD externally                             |
| JU_SEL     | -               | L                  | LVDS input supplied externally through H3 header                 |
| JU_SEL     | -               | H*                 | LVDS input supplied on board                                     |
| JU_T1      | USB_RI          | L                  | U1-11 to GND (factory use only)                                  |
| JU_T1      | USB_RI          | H                  | U1-11 to USB+5V (factory use only)                               |
| JU_T1      | USB_RI          | Open*              | U1-11 open factory use only)                                     |
| JU_T2EX    | T2/EX           | L                  | U1-41 to GND (factory use only)                                  |
| JU_T2EX    | T2/EX           | H                  | U1-41 to USB+5V (factory use only)                               |
| JU_T2EX    | T2/EX           | Open*              | U1-41 open (factory use only)                                    |
| JU_TX59    | TX/SCL (MA9259) | TXSCL59            | MAX9259 TX pin connected to system TX/SCL signal                 |
| JU_TX59    | TX/SCL (MA9259) | IOVDD*             | MAX9259 TX pulled up to IOVDD                                    |
| JU_TX68    | TX/SCL (MA9268) | TXSCL68            | MAX9268 TX pin connected to system TX/SCL signal                 |
| JU_TX68    | TX/SCL (MA9268) | IOVDD*             | MAX9268 TX pin pulled up to IOVDD                                |
| JU_TXSCL   | TX/SCL          | TX*                | UART-to-UART or UART-to-I 2 C mode                               |
| JU_TXSCL   | TX/SCL          | SCL                | I 2 C-to-I 2 C mode                                              |
| JU_TXSCLPU | TX/SCL          | Short*             | TX/SCL pulled up to IOVDD                                        |
| JU_TXSCLPU | TX/SCL          | Open               | TX/SCL pulled up to IOVDD externally                             |
| JU_VDDIO   | VDDIO           | Short*             | VDDIO applied to U1                                              |
| JU_VDDIO   | VDDIO           | Open               | Connect amp meter to measure I-VDDIO                             |
| JU_VIN     | VIN             | USB                | 5V supplied from the USB port                                    |
| JU_VIN     | VIN             | +5V*               | 5V supplied from the external supply applied on the +5V terminal |

*Default position.

Table 2. Device Address Defaults (Register 0x00, 0x01)

| PIN   | PIN   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | SERIALIZER DEVICE   | DESERIALIZER DEVICE ADDRESS   |
|-------|-------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------|-------------------------------|
| ADD1  | ADD0  | D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        | ADDRESS (hex)       | (hex)                         |
| Low   | Low   | 1                         | 0                         | 0                         | X*                        | 0                         | 0                         | 0                         | R/ W                      | 80                  | 90                            |
| Low   | High  | 1                         | 0                         | 0                         | X*                        | 0                         | 1                         | 0                         | R/ W                      | 84                  | 94                            |
| Low   | Open  | 1                         | 0                         | 0                         | X*                        | 1                         | 0                         | 0                         | R/ W                      | 88                  | 98                            |
| High  | Low   | 1                         | 1                         | 0                         | X*                        | 0                         | 0                         | 0                         | R/ W                      | C0                  | D0                            |
| High  | High  | 1                         | 1                         | 0                         | X*                        | 0                         | 1                         | 0                         | R/ W                      | C4                  | D4                            |
| High  | Open  | 1                         | 1                         | 0                         | X*                        | 1                         | 0                         | 0                         | R/ W                      | C8                  | D8                            |
| Open  | Low   | 0                         | 1                         | 0                         | X*                        | 0                         | 0                         | 0                         | R/ W                      | 40                  | 50                            |
| Open  | High  | 0                         | 1                         | 0                         | X*                        | 0                         | 1                         | 0                         | R/ W                      | 44                  | 54                            |
| Open  | Open  | 0                         | 1                         | 0                         | X*                        | 1                         | 0                         | 0                         | R/ W                      | 48                  | 58                            |

*X = 0 for the serializer address; X = 1 for the deserializer address.

│

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

Figure 9. MAX9277/MAX9281 Serializers (Initial Jumper Settings for Coax Link and I 2 C Communication)

<!-- image -->

│

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

Figure 10. MAX9276A/MAX9280A Deserializers (Initial Jumper Settings for Coax Link and I 2 C Communication)

<!-- image -->

│

## MAX9277/MAX9281 Evaluation Kits

## Troubleshooting

Possible causes of board test failure:

- Coax cable not properly connected between OUT+ of the serializer to IN+ of the deserializer
- PCLKIN is not applied (e.g., FG output is disabled): Verify signal at the pins on the board
- PCLKIN,  function  generator  output  is  not  correct: Verify signal at the pins on the board
- Incorrect  jumper  setting  on  the  deserializer  board: Reverify
- Incorrect jumper  setting  on  the  serializer  board: Reverify

## Component Suppliers

| SUPPLIER                             | PHONE             | WEBSITE                 |
|--------------------------------------|-------------------|-------------------------|
| Amphenol RF                          | 800-627-7100      | www.amphenolrf.com      |
| Hong Kong X'tals Ltd.                | 852-35112388      | www.hongkongcrystal.com |
| Murata Americas                      | 770-436-1300      | www.murataamericas.com  |
| ON Semiconductor                     | 602-244-6600      | www.onsemi.com          |
| Rosenberger Hochfrequenztechnik GmbH | 011-49-86 84-18-0 | www.rosenberger.de      |
| TDK Corp.                            | 847-803-6100      | www.component.tdk.com   |

Note: Indicate that you are using the MAX9277 or MAX9281 when contacting these component suppliers.

## Component Lists, Schematics, and PCB Layout Diagrams

Click on the links below for component lists, schematics, and PCB layout diagrams:

- MAX9277 EV Kit BOM
- MAX9281 EV Kit BOM
- MAX9277/MAX9281 EV Kit Schematics
- MAX9277/MAX9281 EV Kit PCB Layout

## Ordering Information

| PART               | TYPE        |
|--------------------|-------------|
| MAX9277 COAXEVKIT# | EV Kit      |
| MAX9281 COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#   | Adapter Kit |

#Denotes RoHS compliant.

Note: The MAX9277 and MAX9281 coax serializer EV kits are normally ordered with a corresponding coax deserializer EV kit:

- MAX9276A coax deserializer EV kit, or
-  MAX9280A coax deserializer EV kit
- Bus  selection  on  the  GUI  is  not  consistent  with jumpers' position on the boards: Check and verify that the USB cable has been properly connected
- USB port has locked: Exit application/GUI, remove the USB cable from the board, then reinsert the cable and relaunch the GUI
- Nuvoton μC is not communicating: Exit the application/GUI,  remove  the  USB  cable  from  the board, then reinsert the cable and relaunch the GUI
- Deserializer  board  is  faulty:  Try  a  different  board (if available)
- Serializer board is faulty: Try a different board (if available)

## Evaluate: MAX9277/MAX9281 with Coax or STP Cable

│

## MAX9277/MAX9281 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

│

Evaluate: MAX9277/MAX9281 with Coax or STP Cable

## MAX9277EVKIT+ Rev A, 5/19/2014

| Parent Number   | Parent Description   | Item         | Component Part   | Component Description                                                                                | QTY Remarks Per (Reference Designators)                                                                                                                                                                                                                                                              | # of Char   | Manufacturer Part Number          |
|-----------------|----------------------|--------------|------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-----------------------------------|
| MAX9277EVKIT+   | Evaluation Kit       | 1            | EH0066           | TEST POINT PC MINI .040"D RED                                                                        | 9 TP_BWSLV, TP_CDSD, TP_CDSS, TP_GPO, TP_MS, TP_MSD, TP_PWDND, TP_PWDNS, TP_INT                                                                                                                                                                                                                      | 78> 60      | Keystone: 5000                    |
|                 |                      | 2            | 2                | Installed                                                                                            | 0 TP_RXS, TP_TXS                                                                                                                                                                                                                                                                                     | OK          |                                   |
|                 |                      | 3            |                  | Not 20G tinned copper Bus wire formed into 'U' shaped loops                                          | +5VIN, AVDD_EXT, DVDD_EXT, GND,                                                                                                                                                                                                                                                                      |             | Keystone: 5000                    |
|                 |                      |              | EBUSS20W         | (0.25' off the PC board)                                                                             | 7 GND1, IOVDD_EXT, LVDSVDD                                                                                                                                                                                                                                                                           | OK          |                                   |
|                 |                      | 4            |                  |                                                                                                      | C10-18, C27, C36-39, C41, C45-46, C53, C55, C59-60, C67, C69, C71, C74-89, C101-105, C121,                                                                                                                                                                                                           | 101         |                                   |
|                 |                      |              | ECM0445          | 0.1uF 50volts X7R 10% Cer Cap (0603)                                                                 | 48 C131, C141                                                                                                                                                                                                                                                                                        | >60         | Murata: GRM188R71H104KA93D        |
|                 |                      | 5            | ECM0505          | 22pF ±5%, 50V C0G Cer Cap (0603)                                                                     | 4 C106-107, C122-123                                                                                                                                                                                                                                                                                 | OK          | MURATA GRM1885C1H220J             |
|                 |                      | 6            | ECM0525          | 1uF ±20%, 10V X5R Cer Cap (0603)                                                                     | 1 C108                                                                                                                                                                                                                                                                                               | OK          | MURATA GRM188R61A105M             |
|                 |                      | 7            | ECM0035          | 33000pF ±10%, 25V X7R Cer Cap (0603)                                                                 | 1 C110                                                                                                                                                                                                                                                                                               | OK          | MURATA GRM188R71E333K             |
|                 |                      | 8            |                  |                                                                                                      | C1-9, C28-30, C35, C40, C43-44,                                                                                                                                                                                                                                                                      |             | 64>                               |
|                 |                      |              | ECM0619          | 1000pF ±10%, 50V X7R Cer Cap (0402)                                                                  | 23 C52, C54, C57-58, C66, C68, C70                                                                                                                                                                                                                                                                   | 60          | MURATA GRM155R71H102K             |
|                 |                      | 9            | ECM0323          | 0.22uF ±10%, 50V X7R Cer Cap (0805)                                                                  | 4 C19-20, C72-73                                                                                                                                                                                                                                                                                     | OK          | MURATA GRM21BR71H224K             |
|                 |                      | 10           | EC2528           | 4.7uF 16volts Y5V 20% Cer Cap (1206)                                                                 | 4 C21, C31, C42, C56                                                                                                                                                                                                                                                                                 | OK          | Vishay: VJ1206V475MXJTW1BC        |
|                 |                      | 11           | EC1140           | 10uF ±20%, 16V X5R Cer Cap (1206)                                                                    | 11 C22-26, C32, C34, C47, C49, C61, C109                                                                                                                                                                                                                                                             | OK          | TDK: C3216X5R1C106M               |
|                 |                      | 12           |                  | Not Installed (1206)                                                                                 | 0 C33, C48, C50, C62                                                                                                                                                                                                                                                                                 | OK          |                                   |
|                 |                      | 13           | EL0885           | FERRITE CHIP 300 OHM500MA (0603)                                                                     | 5 FB1-5                                                                                                                                                                                                                                                                                              | OK          | TDK, MMZ1608R301A                 |
|                 |                      | 14           | EH0205           | CONN HEADER 72POS .100" DL TIN, 2X36 Pin Header                                                      | 1 H1                                                                                                                                                                                                                                                                                                 | OK          | Sullins PEC36DAAN                 |
|                 |                      | 15 EH0205    |                  | CONN HEADER 16POS .100" DBL, 2X8 Pin Header                                                          | 1 H2                                                                                                                                                                                                                                                                                                 | OK          | Sullins PEC36DAAN                 |
|                 |                      | 16 17        | EH0205           | CONN HEADER 10POS .100" DBL, 2X5 Pin Header                                                          | 1 H3                                                                                                                                                                                                                                                                                                 | OK          | Sullins PEC36DAAN                 |
|                 |                      |              | EH0072           | CONN HEADER .100" SNGL TIN, 3 Pin Header                                                             | 34 JU_ADD0, JU_ADD1, JU_AUTO, JU_AVDD, JU_BWS, JU_BWS59, JU_CDS, JU_CNTL1, JU_CNTL2, JU_CONF0, JU_CONF1, JU_CXTP, JU_DRS59, JU_DVDD, JU_ES59, JU_HIM, JU_IOVDD, JU_LDO, JU_LVDSVDD, JU_MS, JU_PDWN, JU_PLI0-JU_PLI1, JU_RX59, JU_RX68, JU_RXSDA, JU_SEL, JU_T2EX, JU_TI, JU_TX59, JU_TX68, JU_TXSCL, | 303 >60     | SULLINS PEC36SAAN                 |
|                 |                      | 18           |                  | Not Installed                                                                                        | JU_VIN, 0 JU_VL2-4                                                                                                                                                                                                                                                                                   | OK          | SULLINS PEC36SAAN                 |
|                 |                      | 19           | EH0077           | CONN USB RTANG FEMALE TYPE B PCB                                                                     | 1 J10                                                                                                                                                                                                                                                                                                | OK          | Assmann, AU-Y1007-R               |
|                 |                      | 20 EH1157    |                  | FAKRA - HF Conn., Right Angle Plug For PCB                                                           | 2 OUT+, OUT-                                                                                                                                                                                                                                                                                         | OK          | Rosenberger, 59S2AX-400A5-Y       |
|                 |                      | 21           | EH0072           | CONN HEADER .100" SNGL TIN, 2 Pin Header                                                             | 5 JU_RXSDAPU, JU_TXSCLPU, JU_VDDIO, JU_P20, JU_P21                                                                                                                                                                                                                                                   | OK          | SULLINS PEC36SAAN                 |
|                 |                      | 22 ED0565    |                  | LED RED 0805 SMD                                                                                     | 3 LED_LFLT, LED_ERR, LED_PWR                                                                                                                                                                                                                                                                         | OK OK       | BR1112H-TR                        |
|                 |                      | 23 ED0838    |                  | LED GREEN 0805 SMD                                                                                   | 1 LED_LOCK                                                                                                                                                                                                                                                                                           |             | Stanley, PG1112H-TR               |
|                 |                      |              |                  | LED YELLOW 0805 SMD                                                                                  | LED_T2, LED_WR                                                                                                                                                                                                                                                                                       | OK          | Stanley, AY1112H-TR               |
|                 |                      | 24 ED0564 25 | EQ0729           | 60V, 115mA N-Chan 2N7002                                                                             | 4 LED_GPO, LED_RD, 1 Q1                                                                                                                                                                                                                                                                              | OK          | Vishay 2N7002K                    |
|                 |                      | 26           | ER0106033002     | MOSFET                                                                                               |                                                                                                                                                                                                                                                                                                      | OK          |                                   |
|                 |                      | 27           | ER01060327R0     | 30Kohm Resistor 1% 0603                                                                              | 1 R_HIM 2 R101-102                                                                                                                                                                                                                                                                                   | OK          |                                   |
|                 |                      | 28           | ER0106031501     | 27 ohm Resistor 1% 0603 1.5Kohms Resistor 1% 0603                                                    | 1 R103                                                                                                                                                                                                                                                                                               | OK          |                                   |
|                 |                      |              | ER0106034700     | 470ohms Resistor 1% 0603                                                                             | 5 R47-50, R104                                                                                                                                                                                                                                                                                       | OK          |                                   |
|                 |                      | 29           | ER0106032201     | 2.2Kohms Resistor 1% 0603                                                                            | 6 R11-13, R16, R28, R34                                                                                                                                                                                                                                                                              | OK          |                                   |
|                 |                      | 30 31        | ER0106034532     | 45.3Kohms Resistor 1% 0603                                                                           | 2 R1-2                                                                                                                                                                                                                                                                                               | OK          |                                   |
|                 |                      | 32           | ER0106031101     | 1.1Kohms Resistor 1% 0603                                                                            | 1 R121                                                                                                                                                                                                                                                                                               | OK          |                                   |
|                 |                      | 33           | ER0106031002     | 10Kohms Resistor 1% 0603                                                                             | 9 R5-10, R21, R112, R122 R126-127                                                                                                                                                                                                                                                                    | OK OK       |                                   |
|                 |                      | 34           | ER0106031001     | 1K ohms Resistor 1% 0603                                                                             | 6 R14-15, R22, R123,                                                                                                                                                                                                                                                                                 |             |                                   |
|                 |                      | 35           | ER0106034991     | 4.99Kohms Resistor 1% 0603                                                                           | 2 R3-4                                                                                                                                                                                                                                                                                               | OK          |                                   |
|                 |                      | 36           | ER0106031801     | 1.8Kohms Resistor 1% 0603 SWITCH TACTILE SPST-NO 0.05A 24V                                           | 2 R42, R44                                                                                                                                                                                                                                                                                           | OK          |                                   |
|                 |                      | 37 38        | EH0102           | Not Installed                                                                                        | 1 SW122 0 T_P14,                                                                                                                                                                                                                                                                                     | OK OK       | Omron Electronics, B3F-1000       |
|                 |                      | 39           |                  | 3.12Gbps GMSL Serializer with Coax or STP Output Drive and LVDS System Interface                     | T_P20-27, T_VC2-4                                                                                                                                                                                                                                                                                    |             |                                   |
|                 |                      |              | MAX9277GTM/V+    | QFN\THIN\7X7X0.8MM\ 3.12Gbps GMSL Serializer with Coax or STP Output Drive and LVDS System Interface | 1 U1                                                                                                                                                                                                                                                                                                 | OK          | MAX9277GTM/V+                     |
|                 |                      | 39           | MAX9277GTM+      | QFN\THIN\7X7X0.8MM\                                                                                  | 1 U1                                                                                                                                                                                                                                                                                                 | OK          | MAX9277GTM+                       |
|                 |                      | 40           | EQ0415           | FT232BL USB UART ( USB - Serial) I.C. TQFP_7X7X.8_32L                                                | 1 U10                                                                                                                                                                                                                                                                                                | OK          | FTDI, FT232BL                     |
|                 |                      | 41           | MAX1792EUA33+    | 500mA Low Dropout Linear Regulator                                                                   | 2 U3, U6                                                                                                                                                                                                                                                                                             |             | MAX1792EUA33+                     |
|                 |                      | 42           |                  | MICROMAX\8L\EP DS89C430/DS89C450 Ultra-High-Speed Flash                                              |                                                                                                                                                                                                                                                                                                      | OK          |                                   |
|                 |                      |              | 90-89450+ENL     | Microcontrollers TQFP-44L                                                                            | 1 U12                                                                                                                                                                                                                                                                                                | OK          | Maxim, DS89C450-ENL MC74AC125DR2G |
|                 |                      | 43           | EQ0783           | IC, Quad Buffer, Tri State ±15kV ESD-Protected, 1A, 16Mbps, Dual/Quad                                | 1 U13                                                                                                                                                                                                                                                                                                | OK          | On Semi:                          |
|                 |                      | 44           | MAX3378EEUD+     | TSSOP- 14L                                                                                           | 2 U14, U19                                                                                                                                                                                                                                                                                           | OK          | MAX3378EEUD+                      |
|                 |                      |              |                  | 500mA, Low-Dropout Linear Regulator in µMAX                                                          |                                                                                                                                                                                                                                                                                                      |             |                                   |
|                 |                      | 45           | MAX1792EUA18+    | MICROMAX\8L\EP                                                                                       | 2 U2, U5                                                                                                                                                                                                                                                                                             | OK          | MAX1792EUA18+                     |
|                 |                      | 46           |                  |                                                                                                      |                                                                                                                                                                                                                                                                                                      |             |                                   |
|                 |                      |              | MAX9259GCB/V+    | Gigabit Multimedia Serial Link with Spread Spectrum and Full-Duplex Control Channel TQFP-64L         | 1 U4                                                                                                                                                                                                                                                                                                 | OK          | MAX9259GCB/V+                     |

|   47 | MAX9268GCM/V+    | Single-Link Deserializer with LVDS Interface TQFP\7X7X1.4MM\48L and Integrated Control Channel Is Ideal for Digital Video Applications   | 1 U7          | OK   | MAX9268GCM/V+                        |
|------|------------------|------------------------------------------------------------------------------------------------------------------------------------------|---------------|------|--------------------------------------|
|   48 | MAX4886ETO+      | Quad, High-Speed HDMI/DVI 2:1 Digital Video Switch QFN3_5X9_42L                                                                          | 2 U8-9        | OK   | MAX4886ETO+                          |
|   49 | EX0343           | 6MHz crystal                                                                                                                             | 1 Y10         | OK   | Hong Kong X'tals SSL60000N1HK188F0-0 |
|   50 | EX0381           | 14.7456MHz crystal                                                                                                                       | 1 Y12         | OK   | Hong Kong X'tals SSM14745N1HK188F0-0 |
|   51 |                  |                                                                                                                                          |               | OK   |                                      |
|   52 | EPCB9281         | PCB: MAX9277 / MAX9281 Evaluation Kit                                                                                                    | 1             | OK   |                                      |
|   53 | EH0071           | Shunts                                                                                                                                   | 28 See Jumper | OK   |                                      |
|   54 | EH0272 OR EH0487 | CABLE, USB-A MALE to USB-B MALE 6' BEIGE                                                                                                 | 1 Pack-out    | OK   | JAMECO 229730                        |
|   55 |                  | BAG, STATIC SHIELD ZIP ~6'x~8', W/ ESD LOGO                                                                                              | 1 Pack-out    | OK   |                                      |
|      | 85-MAXKIT-PNK    | FOAM, ANTI-STATIC PE 12'x12'X5MM                                                                                                         | 2 Pack-out    | OK   |                                      |
|   55 | 88-00712-MDM     | Box, Medium BROWN 9 3/8' x 7 1/4' x 2 1/2"                                                                                               | 1 Pack-out    | OK   | Any                                  |
|   57 | 85-84003-006     | Label                                                                                                                                    | 1 Pack-out    | OK   |                                      |
|   58 | XXXXXXXXX        | WEB instructions for Maxim Data Sheet                                                                                                    | 1 Pack-out    | OK   |                                      |

| MAX9281EVKIT+ Parent Number   | Parent Description   | Rev Item                        | Component Description                                                              | QTY Per                                                                                                                                                                                                                                                                                                                       | # of Char   | Manufacturer Part Number    |
|-------------------------------|----------------------|---------------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-----------------------------|
| MAX9281EVKIT+                 | Evaluation Kit       | 1                               |                                                                                    | TP_BWSLV, TP_CDSD, TP_CDSS, TP_GPO, TP_MS, TP_MSD, TP_PWDND,                                                                                                                                                                                                                                                                  |             |                             |
|                               |                      | EH0066                          | TEST POINT PC MINI .040"D RED                                                      | 9 TP_PWDNS, TP_INT                                                                                                                                                                                                                                                                                                            | 78>60       | Keystone: 5000              |
|                               |                      | 2                               | Not Installed                                                                      | 0 TP_RXS, TP_TXS                                                                                                                                                                                                                                                                                                              | OK          | Keystone: 5000              |
|                               |                      | EH0066 3 EBUSS20W               | 20G tinned copper Bus wire formed into 'U' shaped loops (0.25' off the PC board) 7 | +5VIN, AVDD_EXT, DVDD_EXT, GND, GND1, IOVDD_EXT, LVDSVDD                                                                                                                                                                                                                                                                      | OK          |                             |
|                               |                      | EH0066 3 EBUSS20W               |                                                                                    | C10-18, C27, C36-39, C41, C45-46, C53, C55, C59-60, C67, C69, C71, C74-89,                                                                                                                                                                                                                                                    |             |                             |
|                               |                      | 4                               | 0.1uF 50volts X7R 10% Cer Cap (0603)                                               | 48 C101-105, C121, C131, C141                                                                                                                                                                                                                                                                                                 | 101>60      | Murata: GRM188R71H104KA93D  |
|                               |                      | ECM0445 5 ECM0505               | 22pF ±5%, 50V C0G Cer Cap (0603)                                                   | 4 C106-107, C122-123                                                                                                                                                                                                                                                                                                          | OK          | MURATA GRM1885C1H220J       |
|                               |                      | 6 ECM0525                       | 1uF ±20%, 10V X5R Cer Cap (0603)                                                   | 1 C108                                                                                                                                                                                                                                                                                                                        | OK          | MURATA GRM188R61A105M       |
|                               |                      | 7 ECM0035                       | 33000pF ±10%, 25V X7R Cer Cap (0603)                                               | 1 C110                                                                                                                                                                                                                                                                                                                        | OK          | MURATA GRM188R71E333K       |
|                               |                      | 8 ECM0619                       | 1000pF ±10%, 50V X7R Cer Cap (0402)                                                | 23 C1-9, C28-30, C35, C40, C43-44, C52, C54, C57-58, C66, C68, C70                                                                                                                                                                                                                                                            | 63>60       | MURATA GRM155R71H102K       |
|                               |                      | 9 ECM0323                       | 0.22uF ±10%, 50V X7R Cer Cap (0805)                                                | 4 C19-20, C72-73                                                                                                                                                                                                                                                                                                              | OK          | MURATA GRM21BR71H224K       |
|                               |                      | 10 EC2528                       | 4.7uF 16volts Y5V 20% Cer Cap (1206)                                               | 4 C21, C31, C42, C56                                                                                                                                                                                                                                                                                                          | OK          | Vishay: VJ1206V475MXJTW1BC  |
|                               |                      | 11 EC1140                       | 10uF ±20%, 16V X5R Cer Cap (1206)                                                  | 11 C22-26, C32, C34, C47, C49, C61, C109                                                                                                                                                                                                                                                                                      | OK          | TDK: C3216X5R1C106M         |
|                               |                      | 12                              | Not Installed (1206)                                                               | 0 C33, C48, C50, C62                                                                                                                                                                                                                                                                                                          | OK          |                             |
|                               |                      | 13 EL0885                       | FERRITE CHIP 300 OHM 500MA (0603)                                                  | 5 FB1-5                                                                                                                                                                                                                                                                                                                       | OK          | TDK, MMZ1608R301A           |
|                               |                      | EH0205                          | Header                                                                             | 1 H1                                                                                                                                                                                                                                                                                                                          | OK OK       | Sullins PEC36DAAN           |
|                               |                      | 15 EH0205                       | CONN HEADER 16POS .100" DBL, 2X8 Pin Header                                        | 1 H2                                                                                                                                                                                                                                                                                                                          |             | Sullins PEC36DAAN           |
|                               |                      | 16 EH0205                       | CONN HEADER 10POS .100" DBL, 2X5 Pin Header                                        | 1 H3                                                                                                                                                                                                                                                                                                                          | OK          | Sullins PEC36DAAN           |
|                               |                      | 17 EH0072 18                    | CONN HEADER .100" SNGL TIN, 3 Pin Header                                           | 34 JU_ADD0, JU_ADD1, JU_AUTO, JU_AVDD, JU_BWS, JU_BWS59, JU_CDS, JU_CNTL1, JU_CNTL2, JU_CONF0, JU_CONF1, JU_CXTP, JU_DRS59, JU_DVDD, JU_ES59, JU_HIM, JU_IOVDD, JU_LDO, JU_LVDSVDD, JU_MS, JU_PDWN, JU_PLI0-JU_PLI1, JU_RX59, JU_RX68, JU_RXSDA, JU_SEL, JU_T2EX, JU_TI, JU_TX59, JU_TX68, JU_TXSCL, JU_VIN, H_I/O 0 JU_VL2-4 | 303>60      | SULLINS PEC36SAAN           |
|                               |                      |                                 | Not Installed                                                                      |                                                                                                                                                                                                                                                                                                                               | OK          | SULLINS PEC36SAAN           |
|                               |                      | 19 EH0077                       | CONN USB RTANG FEMALE TYPE B PCB                                                   | 1 J10                                                                                                                                                                                                                                                                                                                         | OK          | Assmann, AU-Y1007-R         |
|                               |                      | 20 EH1157                       | FAKRA - HF Conn., Right Angle Plug For PCB                                         | 2 OUT+, OUT-                                                                                                                                                                                                                                                                                                                  | OK          | Rosenberger, 59S2AX-400A5-Y |
|                               |                      | 21 EH0072                       | CONN HEADER .100" SNGL TIN, 2 Pin Header                                           | 5 JU_RXSDAPU, JU_TXSCLPU, JU_VDDIO, JU_P20, JU_P21                                                                                                                                                                                                                                                                            | OK          | SULLINS PEC36SAAN           |
|                               |                      | 22 ED0565                       | LED RED 0805 SMD                                                                   | 3 LED_LFLT, LED_ERR, LED_PWR                                                                                                                                                                                                                                                                                                  | OK          | BR1112H-TR                  |
|                               |                      | 23 ED0838                       | LED GREEN 0805 SMD                                                                 | 1 LED_LOCK                                                                                                                                                                                                                                                                                                                    | OK          | Stanley, PG1112H-TR         |
|                               |                      | 24 ED0564                       | LED YELLOW 0805 SMD                                                                | 4 LED_GPO, LED_RD, LED_T2, LED_WR                                                                                                                                                                                                                                                                                             | OK          | Stanley, AY1112H-TR         |
|                               |                      | 25                              | MOSFET 60V, 115mA N-Chan 2N7002                                                    |                                                                                                                                                                                                                                                                                                                               | OK          | Vishay 2N7002K              |
|                               |                      | EQ0729                          |                                                                                    | 1 Q1                                                                                                                                                                                                                                                                                                                          |             |                             |
|                               |                      | 26 ER0106033002                 | 30Kohm Resistor 1% 0603                                                            | 1 R_HIM                                                                                                                                                                                                                                                                                                                       | OK          |                             |
|                               |                      | 27 ER01060327R0                 | 27 ohm Resistor 1% 0603                                                            | 2 R101-102                                                                                                                                                                                                                                                                                                                    | OK          |                             |
|                               |                      | 28 ER0106031501                 | 1.5Kohms Resistor 1% 0603                                                          | 1 R103                                                                                                                                                                                                                                                                                                                        | OK          |                             |
|                               |                      | 29 ER0106034700                 | 470ohms Resistor 1% 0603                                                           | 5 R47-50, R104                                                                                                                                                                                                                                                                                                                | OK          |                             |
|                               |                      | 30 ER0106032201                 | 2.2Kohms Resistor 1% 0603                                                          | 6 R11-13, R16, R28, R34                                                                                                                                                                                                                                                                                                       | OK          |                             |
|                               |                      | 31 ER0106034532                 | 45.3Kohms Resistor 1% 0603                                                         | 2 R1-2                                                                                                                                                                                                                                                                                                                        | OK          |                             |
|                               |                      | 32 ER0106031101 33 ER0106031002 | 1.1Kohms Resistor 1% 0603                                                          | 1 R121                                                                                                                                                                                                                                                                                                                        | OK          |                             |
|                               |                      |                                 | 10Kohms Resistor 1% 0603 1K                                                        | 9 R5-10, R21, R112, R122                                                                                                                                                                                                                                                                                                      | OK          |                             |
|                               |                      | 34 ER0106031001                 | ohms Resistor 1% 0603                                                              | 6 R14-15, R22, R123, R126-127                                                                                                                                                                                                                                                                                                 | OK          |                             |
|                               |                      | ER0106034991 36 ER0106031801    | 4.99Kohms Resistor 1% 0603 1.8Kohms                                                | 2 R3-4                                                                                                                                                                                                                                                                                                                        | OK          |                             |
|                               |                      | EH0102                          | Resistor 1% 0603                                                                   | 2 R42, R44                                                                                                                                                                                                                                                                                                                    | OK          | Omron Electronics, B3F-1000 |
|                               |                      | 37 38                           | SWITCH TACTILE SPST-NO 0.05A 24V                                                   | 1 SW122                                                                                                                                                                                                                                                                                                                       | OK          |                             |
|                               |                      | 39                              | 0 GMSL Serializer with Coax or STP Output                                          |                                                                                                                                                                                                                                                                                                                               | OK          |                             |
|                               |                      |                                 | Not Installed                                                                      | T_P14, T_P20-27, T_VC2-4                                                                                                                                                                                                                                                                                                      |             |                             |
|                               |                      | MAX9281GTM/V+                   | 3.12Gbps Drive and LVDS System Interface QFN\THIN\7X7X0.8MM\ 1                     | U1                                                                                                                                                                                                                                                                                                                            | OK          | MAX9281GTM/V+               |

|   39 | MAX9281GTM+   | 3.12Gbps GMSL Serializer with Coax or STP Output Drive and LVDS System Interface QFN\THIN\7X7X0.8MM\                                   |               | OK   | MAX9281GTM+                          |
|------|---------------|----------------------------------------------------------------------------------------------------------------------------------------|---------------|------|--------------------------------------|
|   40 | EQ0415        | FT232BL USB UART ( USB - Serial) I.C. TQFP_7X7X.8_32L                                                                                  |               | OK   | FTDI, FT232BL                        |
|   41 |               | 500mA Low Dropout Linear Regulator MICROMAX\8L\EP                                                                                      | MAX1792EUA33+ | OK   | MAX1792EUA33+                        |
|   42 |               | DS89C430/DS89C450 Ultra-High-Speed Flash Microcontrollers TQFP-44L                                                                     | 90-89450+ENL  | OK   | Maxim, DS89C450-ENL                  |
|   43 | EQ0783        | IC, Quad Buffer, Tri State                                                                                                             |               | OK   | On Semi: MC74AC125DR2G               |
|   44 | MAX3378EEUD+  | ±15kV ESD-Protected, 1A, 16Mbps, Dual/Quad TSSOP- 14L                                                                                  |               | OK   | MAX3378EEUD+                         |
|   45 | MAX1792EUA18+ | 500mA, Low-Dropout Linear Regulator in µMAX MICROMAX\8L\EP                                                                             |               | OK   | MAX1792EUA18+                        |
|   46 | MAX9259GCB/V+ | Gigabit Multimedia Serial Link with Spread Spectrum and Full-Duplex Control Channel TQFP-64L                                           |               | OK   | MAX9259GCB/V+                        |
|      | MAX9268GCM/V+ | Single-Link Deserializer with LVDS Interface TQFP\7X7X1.4MM\48L and Integrated Control Channel Is Ideal for Digital Video Applications | 47            | OK   | MAX9268GCM/V+                        |
|   48 | MAX4886ETO+   | Quad, High-Speed HDMI/DVI 2:1 Digital Video Switch QFN3_5X9_42L                                                                        |               | OK   | MAX4886ETO+                          |
|      |               | 6MHz crystal                                                                                                                           | 49 EX0343     | OK   | Hong Kong X'tals SSL60000N1HK188F0-0 |
|      |               | 14.7456MHz crystal                                                                                                                     | 50 EX0381     | OK   | Hong Kong X'tals SSM14745N1HK188F0-0 |
|   51 |               |                                                                                                                                        |               | OK   |                                      |
|      |               | PCB: MAX9277 / MAX9281 Evaluation Kit                                                                                                  | 52 EPCB9281   | OK   |                                      |
|   53 | EH0071        | Shunts                                                                                                                                 |               | OK   |                                      |
|   54 | EH0272 OR     | CABLE, USB-A MALE to USB-B MALE 6' BEIGE                                                                                               | EH0487        | OK   | JAMECO 229730                        |
|   55 |               | BAG, STATIC SHIELD ZIP ~6'x~8', W/ ESD LOGO                                                                                            |               | OK   |                                      |
|      | 85-MAXKIT-PNK | FOAM, ANTI-STATIC PE 12'x12'X5MM                                                                                                       | 55            | OK   | Any                                  |
|   57 | 85-84003-006  | Label                                                                                                                                  |               | OK   |                                      |
|      | 88-00712-MDM  | Box, Medium BROWN 9 3/8' x 7 1/4' x 2 1/2"                                                                                             |               | OK   |                                      |
|   58 |               | WEB instructions for Maxim Data Sheet                                                                                                  | XXXXXXXXX     | OK   |                                      |

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

<!-- image -->

<!-- image -->

<!-- image -->