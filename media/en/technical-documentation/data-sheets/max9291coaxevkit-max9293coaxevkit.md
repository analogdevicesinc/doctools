<!-- lastmod 2022-08-04 -->
## MAX9291/MAX9293 Evaluation Kit

## General Description

The MAX9291/MAX9293 evaluation kit (EV kit) provides a  proven  design  to  evaluate  the  MAX9291/MAX9293 HDMI input with high-bandwidth gigabit multimedia serial link  (GMSL)  output  serializer  with  spread  spectrum  and full-duplex  control  channel  with  the  use  of  a  standard FAKRA coaxial cable. The EV kit also includes Windows Vista ® and Windows ® 7-compatible software that provides  a  simple  graphical  user  interface  (GUI)  for exercising features of the serializers. The EV kit comes with a MAX9291 or MAX9293 IC installed.

For complete GMSL evaluation using a standard FAKRA coax cable, order the MAX9291/MAX9293 coax EV kit and a  companion  serializer  board  (MAX9276A/MAX9280A coax EV kit referenced in this document). For testing with STP cable, also order the MAXCOAX2STP-HSD adapter kit. Only one adapter kit is needed per link (connecting the serializer and deserializer boards).

## Features

- HDMI Input GMSL Serial Output
- Windows Vista- and Windows 7-Compatible Software
- USB-Controlled Interface (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

Note: In  the  following  sections,  'serializer'  refers  to  the MAX9291 or MAX9293 ICs and 'deserializer' refers to the MAX9276A or MAX9280A ICs.

Note: To evaluate the product with shielded twisted-pair (STP)  cable,  refer  to  the  MAXCOAX2STP-HSD  data sheet.

Note: This  document  applies  to  both  coax  and  STP EV  kits.  This  document  covers  coax  cables,  but  the information provided applies equally to STP cables.

Windows, Windows Vista, and Windows 7 are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX9291/MAX9293

## Items Included in the EV Kit Package

| DESCRIPTION                                       |   QTY |
|---------------------------------------------------|-------|
| MAX9291 coax EV kit or MAX9293 coax EV kit boards |     1 |
| USB cable                                         |     1 |

## MAX9291/MAX9293 EV Kit Files

| FILE                             | DECRIPTION                             |
|----------------------------------|----------------------------------------|
| MAXSerDesEV-N_Vxxxx_ Install.EXE | Installs the EV kit files on the PC    |
| MAXSerDesEV-N.EXE                | Graphical-user interface (GUI) program |

## Quick Start

## Required Equipment

- MAX9291 or MAX9293 coax EV kit (USB cable included)
- MAX9276A or MAX9280A coax EV kit
- 2m FAKRA cable assembly (included in the MAX9276A/MAX9280A coax EV kit)
- HDMI data source
- PC running Windows Vista or Windows 7, with a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX9291/MAX9293 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download and install the EV kit software, MAXSerDesEV-N.EXE.  The  application  will  try  to download and install the USB driver for the Nuvoton microcontroller.  If  the  USB  driver  installation  is  not successful, install the appropriate USB driver for your computer,  which  is  available  at www.ftdichip.com/ Drivers/VCP.htm .
- 2) Verify that jumpers on the serializer board are in their default positions, as shown in Figure 12.
- 3) Verify  that  jumpers  on  the  deserializer  board  are  in their default positions, as shown in Figure 13.
- 4) Power up the serializer by connecting the USB cable between the PC's USB port and connector J10 on the serializer board.
- 5) Power up the deserializer by connecting the positive/ negative terminals of the power supply to the +5VIN/ GND terminals on the deserializer board.
- 6) Connect  the  FAKRA  cable  from  the  OUT+  terminal on  the  serializer  board  to  the  IN+  terminal  on  the deserializer board.
- 7) Turn on the power supply to power the deserializer board.
- 8) Connect the HDMI source to the HDMI connector (J1) on the serializer EV kit board.
- 9) Verify  that  LOCK  LED  on  the  deserializer  EV  kit board  lights  up,  indicating  that  the  link  has  been successfully established.
- 10)  Input data should be available on the H1 header on the deserializer board.
- 11)  If the LOCK LED is off, or ERR LED is on, go to the Troubleshooting section at the end of this document and fix the problem before continuing.
- 12)  Start the EV  kit software by selecting Start | Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .
- 13) In  case  a  more  recent  firmware  than  the  firmware currently in the microcontroller is available, a

## Evaluates: MAX9291/MAX9293

warning will be displayed at GUI startup (Figure 1), informing the user that a new version of the firmware is  available.  You  can  continue  operating  the  EV  kit with the current firmware, or update it. To update the firmware, follow the instructions in C:\Program Files\ Maxim Integrated\MAXSerDesEV-N\Firmware Update\Updating MAXSerDesEV-N firmware.pdf .

- 14)  A  window  will  pop  open  (Figure  3)  indicating  that all  control-channel-related  jumpers  along  with  other jumpers  have  been  positioned  correctly.  If  the  GUI does  not  find  a  valid  EV  kit  board  (an  operating evaluation  board  with  a  Nuvoton  microcontroller), a window similar to Figure 2 will appear. Press OK to  continue  and  start  the  GUI  or  press Cancel to terminate the application. Go to the Troubleshooting section  at  the  end  of  this  document  and  fix  the problem before continuing.
- 15)  If an operating evaluation board is found, the Configuration Settings window appears (Figure 3), and  the  GUI  automatically  searches  the  slave  addresses and identifies the DUTs based on the Device ID s read from the DUTs internal registers.
- 16)  Once  the Configuration  Settings window  is  open, press  the Identify  Devices button  at  any  time  to reidentify devices connected in the setup and display corresponding jumpers to configure the serializer and deserializer.
- 17)  Only Link Type and Device Address selections on the Configuration Settings window affect the EV kit operation. Other items are for user reference only.
- 18)  Press  the Connect button  to  open  the Evaluation Kit window and DUTs' register maps (Figure 4). All serializer  and  deserializer  internal  registers  are  read  and displayed on the corresponding tabs.
- 19)  Press the Read All MAX9291 button in the Serializer group box to read all serializer registers.
- 20)  Click on the MAX9280/80A Des tab and then press the Read  all  MAX9280 button  in  the Deserializer group box to read all deserializer registers.
- 21)  Click  on  any  of  the  other  tabs  to  evaluate  other functions of the serializer and deserializer.

Figure 1. MAXSerDesEV-N EV Kit Software: Warning! (Update Firmware)

<!-- image -->

│

Figure 2. MAXSerDesEV-N EV Kit Software: Warning! (reporting EV Kit with Nuvoton Microcontroller is NOT Detected!)

<!-- image -->

## Table 1. Jumper Settings/Descriptions

| JUMPER*      | SIGNAL    | DEFAULT POSITION   | FUNCTION                                                                    |
|--------------|-----------|--------------------|-----------------------------------------------------------------------------|
| J1           | HDMI      | -                  | HDMI input connector                                                        |
| J2 (Note 1)  | LMN1_REM  | Short              | OUT- line-fault function on remote device, deserializer (J4 must be open)   |
| J2 (Note 1)  | LMN1_REM  | Open**             | OUT- line-fault function is on local device, serializer (J4 must be short)  |
| J3           | RSVD44    | Short**            | Reserved (keep shunt inserted at all times)                                 |
| J4 (Note 1)  | LMN1_LOC  | Short**            | OUT- line-fault function on local device, serializer (J2 must be open)      |
| J4 (Note 1)  | LMN1_LOC  | Open               | OUT- line-fault function on remote device, deserializer (J2 must be short)  |
| J5           | SCL_PU    | Short**            | TX/SCL line pulled up to IOVDD                                              |
| J5           | SCL_PU    | Open               | TX/SCL line not pulled up (use external pullups)                            |
| J6           | I-IOVDD   | Short**            | IOVDD voltage applied to U9                                                 |
| J6           | I-IOVDD   | Open               | Insert amp meter to measure U1 IOVDD current                                |
| J7           | +12V      | -                  | AC adapter power input                                                      |
| J8 (Note 1)  | LMN0_LOC  | Short**            | OUT+ line-fault function is on local device, serializer (J11 must be open)  |
| J8 (Note 1)  | LMN0_LOC  | Open               | OUT+ line-fault function on remote device, deserializer (J11 must be short) |
| J9           | ICE-DEBUG | -                  | Connect Nu-Link-Pro dongle to program Nuvoton μC boot loader                |
| J10          | J10       | -                  | Mini-USB connector                                                          |
| J11 (Note 1) | LMN0_REM  | Short              | OUT+ line-fault function on remote device, deserializer (J8 must be open)   |
| J11 (Note 1) | LMN0_REM  | Open**             | OUT+ line-fault function is on local device, serializer (J8 must be short)  |
| J12          | EXT_UC    | -                  | 4-pin header to connect external μC terminals, I 2 C, or UART               |
| J13          | DDCSCL    | Short**            | HDMI SCL pulled up                                                          |
| J13          | DDCSCL    | Open               | HDMI SCL not pulled up                                                      |
| J16          | SDA_PU    | Short**            | RX/SDA line pulled up to IOVDD                                              |
| J16          | SDA_PU    | Open               | RX/SDA line not pulled up (use external pullups)                            |
| J17          | LMN_V     | Short              | Top of LFLT circuit pulled up to AVDD 1.8V                                  |
| J17          | LMN_V     | Open**             | Insert amp meter to current measurement                                     |
| J18          | J18       | Short**            | POC circuit powered                                                         |
| J18          | J18       | Open               | POC circuit not powered                                                     |

Table 1. Jumper Settings/Descriptions (continued)

| JUMPER*       | SIGNAL      | DEFAULT POSITION   | FUNCTION                                                |
|---------------|-------------|--------------------|---------------------------------------------------------|
| J19           | DDCSDA      | Short**            | HDMI SDA pulled up                                      |
| J19           | DDCSDA      | Open               | HDMI SDA not pulled up                                  |
| J21           | VDD_REF     | Short**            | Use internal 3.3V for external μC digital signals       |
| J21           | VDD_REF     | Open               | External μC digital signals level are applied on J12.1  |
| JU1           | HS_DRS      | IOVDD              | Select low data-rate mode                               |
| JU1           | HS_DRS      | GND**              | Select high data-rate mode                              |
| JU2           | HS_AUTOS    | IOVDD              | Disable serialization                                   |
| JU2           | HS_AUTOS    | GND**              | Disable serialization                                   |
| JU3           | VDD         | USB+5V**           | Board powered from USB port                             |
| JU3           | VDD         | +5VIN              | Board powered from +5VIN terminals                      |
| JU3           | VDD         | REG                | Board powered from AC adapter                           |
| JU4           | HS_HIM      | IOVDD**            | Set reverse channel to high-immunity mode               |
| JU4           | HS_HIM      | GND                | Set reverse channel to legacy mode                      |
| JU5 (Note 2)  | HS_TX-SCL   | Left (SCL)**       | Communicate in I 2 C mode                               |
| JU5 (Note 2)  | HS_TX-SCL   | Right (TX)         | Communicate in UART mode                                |
| JU6 (Note 2)  | HS_RX-SDA   | Left (SDA)**       | Communicate in I 2 C mode                               |
| JU6 (Note 2)  | HS_RX-SDA   | Right RX)          | Communicate in UART mode                                |
| JU7           | XVDD        | INT**              | Use on-board 3.3V for XVDD                              |
| JU7           | XVDD        | EXT                | Use external 3.3V for XVDD                              |
| JU8           | PLLVDD      | INT**              | Use on-board 3.3V for PLLVDD                            |
| JU8           | PLLVDD      | EXT                | Use external 3.3V for PLLVDD                            |
| JU9           | RVDD        | INT**              | Use on-board 1.8V for RVDD                              |
| JU9           | RVDD        | EXT                | Use external 1.8V for RVDD                              |
| JU18 (Note 2) | (HS_I2CSEL) | I2C**              | Set communication to I 2 C mode                         |
| JU18 (Note 2) | (HS_I2CSEL) | UART               | Set communication to UART mode                          |
| JU19          | HS_ADD1     | H                  | ADD1 = high (see Table 2)                               |
| JU19          | HS_ADD1     | L**                | ADD1 = low (see Table 2)                                |
| JU20          | HS_ADD0     | H                  | ADD0 = high (see Table 2)                               |
| JU20          | HS_ADD0     | L**                | ADD0 = low (see Table 2)                                |
| JU22          | HS_CNTL1    | H                  | Additional input data bit (fix input bit to high level) |
| JU22          | HS_CNTL1    | L                  | Additional input data bit (fix input bit to low level)  |
| JU22          | HS_CNTL1    | Open**             | Apply user data bit to middle pin                       |
| JU23          | HS_CNTL2    | H                  | Additional input data bit (fix input bit to high level) |
| JU23          | HS_CNTL2    | L                  | Additional input data bit (fix input bit to low level)  |
| JU23          | HS_CNTL2    | Open**             | Apply user data bit to middle pin                       |
| JU24          | HS_SSEN     | H                  | Spread spectrum set to ±0.5%                            |
| JU24          | HS_SSEN     | L**                | Spread spectrum off                                     |
| JU25          | HS_MS       | H                  | Select bypass mode                                      |
| JU25          | HS_MS       | L**                | Select base mode                                        |

Evaluates: MAX9291/MAX9293

Table 1. Jumper Settings/Descriptions (continued)

| JUMPER*       | SIGNAL   | DEFAULT POSITION   | FUNCTION                                                   |
|---------------|----------|--------------------|------------------------------------------------------------|
| JU26          | HS_CDS   | H                  | Control-channel master µC is connected to the deserializer |
| JU26          | HS_CDS   | L**                | Control-channel master µC is connected to the serializer   |
| JU27          | HS_PWDN  | H**                | Serializer is powered down, disabled                       |
| JU27          | HS_PWDN  | L                  | Serializer is powered up, enabled                          |
| JU28 (Note 3) | HS_BWS   | H                  | 32-bit mode                                                |
| JU28 (Note 3) | HS_BWS   | L**                | Does not apply                                             |
| JU28 (Note 3) | HS_BWS   | Open               | High-bandwidth mode                                        |
| JU30          | AVDD     | INT**              | Use on-board 1.8V for AVDD                                 |
| JU30          | AVDD     | EXT                | Use external 1.8V for AVDD                                 |
| JU31          | DVDD     | INT**              | Use on-board 1.8V for DVDD                                 |
| JU31          | DVDD     | EXT                | Use external 1.8V for DVDD                                 |
| JU32          | HVDD     | INT**              | Use on-board 3.3V for HVDD                                 |
| JU32          | HVDD     | EXT                | Use external 3.3V for HVDD                                 |
| JU33          | IOVDD    | 4-1.8V             | Set IOVDD to 1.8V                                          |
| JU33          | IOVDD    | 2-3.3V**           | Set IOVDD to 3.3V                                          |
| JU33          | IOVDD    | 3-2.5V             | Set IOVDD to 2.5V                                          |
| JU34          | HS_CX_TP | H**                | Set CX/STP pin for coax cable                              |
| JU34          | HS_CX_TP | L                  | Set CX/STP pin for STP cable                               |

## Notes:

- 1: Do not activate LFLT functions on both ends of the same channel.
- 2: JU5, JU6, and JU18 must be set consistently.
- 3: JU28 (set BWS to the same level on both sides of the serial link).

## Table 2. Device Address Selection

| PIN   | PIN   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | DEVICE ADDRESS (binary)   | SERIALIZER DEVICE ADDRESS (hex)   | DESERIALIZER DEVICE ADDRESS (hex)   |
|-------|-------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|-----------------------------------|-------------------------------------|
| ADD1  | ADD0  | D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        | SERIALIZER DEVICE ADDRESS (hex)   | DESERIALIZER DEVICE ADDRESS (hex)   |
| Low   | Low   | 1                         | 0                         | 0                         | X*                        | 0                         | 0                         | 0                         | R/W                       | 80                                | 90                                  |
| Low   | High  | 1                         | 0                         | 0                         | X*                        | 0                         | 1                         | 0                         | R/W                       | 84                                | 94                                  |
| Low   | Open  | 1                         | 0                         | 0                         | X*                        | 1                         | 0                         | 0                         | R/W                       | 88                                | 98                                  |
| High  | Low   | 1                         | 1                         | 0                         | X*                        | 0                         | 0                         | 0                         | R/W                       | C0                                | D0                                  |
| High  | High  | 1                         | 1                         | 0                         | X*                        | 0                         | 1                         | 0                         | R/W                       | C4                                | D4                                  |
| High  | Open  | 1                         | 1                         | 0                         | X*                        | 1                         | 0                         | 0                         | R/W                       | C8                                | D8                                  |
| Open  | Low   | 0                         | 1                         | 0                         | X*                        | 0                         | 0                         | 0                         | R/W                       | 40                                | 50                                  |
| Open  | High  | 0                         | 1                         | 0                         | X*                        | 0                         | 1                         | 0                         | R/W                       | 44                                | 54                                  |
| Open  | Open  | 0                         | 1                         | 0                         | X*                        | 1                         | 0                         | 0                         | R/W                       | 48                                | 58                                  |

Evaluates: MAX9291/MAX9293

│

## Detailed Description of Software

To start the MAX9291/MAX9293 EV kit GUI, select: Start |  Programs  |  Maxim  Integrated  |  MAXSerDesEV-N  | MAXSerDesEV-N .

## Configuration Settings Window

The Configuration Settings window is the first window that  opens  after  program  launch.  It  allows  the  user  to specify serializer and deserializer evaluation board setup and modes of operation (Figure 3).

Evaluates: MAX9291/MAX9293

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the Link  Type drop-down  list, I2C or UART from  the Bus drop-down  list,  and  whether  the Serializer or Deserializer should connect to the USB controller. Upon changing  any  of  these  parameters,  the  selection  in  the jumper listing below changes automatically, prompting the user to make the corresponding changes to the jumper on the EV kit boards.

Figure 3. MAXSerDesEV-N EV Kit Software: Configuration Settings Window (Shown with MAX9293 and MAX9280A EV Kits Connected)

<!-- image -->

│

## Serializer Jumper Selection Block

The Serializer  Jumper  Selection block  lists  jumpers on  the  evaluation  board  of  the  selected Device ID and displays the correct shunt positions  based  on  the conditions selected in the Controller group box.

## Deserializer Jumper Selection block

The Deserializer  Jumper  Selection block  lists  jumpers on  the  evaluation  board  of  the  selected Device  ID and displays the correct shunt positions based on the conditions selected in the Controller group box.

## Identify Devices Button

The Identify  Devices button  causes  the  GUI  to  scan the system and search for slave addresses on the bus. Upon successful communication, it reads the Device ID register from the device and displays the corresponding jumper  lists  on  the Serializer  Jumper  Selection and Deserializer Jumper Selection blocks. It is also possible to manually select a device from the Device ID drop-down list and enter a slave address in the Device Address edit box. It is a good practice to utilize the Identify Devices button  and  verify  communication  with  the  DUTs  before attempting to Connect .

Figure 12 and Figure 13 show jumper settings  on  the  MAX9291/MAX9293  and  MAX9276A/ MAX9280A PCBs for coax or STP cable and UART or I 2 C communication with the USB controller connected to the serializer board. Refer to the respective serializer/deserializer IC data sheets for detailed configuration  information.  See Table  1  for  PCB  jumper settings/descriptions.  The  following  sections  provide  a brief overview of functional buttons on the Configuration Settings window.

## Device Address Edit Box

It is a good practice to utilize the Device Address edit box and verify communication with the DUTs before attempting to Connect .

## Connect Button

The Connect button opens up the Evaluation Kit window. The GUI reads the serializer and deserializer registers and updates the register maps for both. Successful communication is indicated by green LED indicators. In case of a communication problem, the LED indicators turn red.

## Cancel - Do Not Connect Button

The Cancel -Do Not Connect button opens the Evaluation Kit window without attempting to connect to the microcontroller. Although there will be no communication with the microcontroller, all functions and tabs  corresponding  to  the  selected Device  ID s  on  the Evaluation Kit window become active once there.

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 4 provides access  to  all  internal  registers  and  functions  of  the DUTs by means of reading and writing registers through different  tabs  that  allow  the  user  to  evaluate  various functions of the serializer and deserializer.

The Read All button updates the serializer and deserializer register maps by reading the DUT's internal registers.

The Serializer group box provides pushbuttons to update the serializer's register map from the DUT using the Read All MAX9291 button, update from a previously saved file using the Load button, or save the existing register values into a file using the Save button.

The Deserializer group  box  provides  pushbuttons  to update the deserializer's register map from the DUT using the Read All MAX9276 button, update from a previously saved  file  using  the Load button,  or  save  the  existing register values into a file using the Save button.

The Wake Up button applies the register write sequence described in the IC data sheets to wake up the DUTs from sleep mode.

The Open Configuration button reopens the Configuration Settings window.

The following sections describe the tabs available on the Evaluation Kit window.

## MAX9291 Ser Tab

The MAX9291  Ser tab  (Figure  4)  lists  the  serializer registers'  bitmaps. Read and Write buttons  in  each register  group  box  allow  access  to  each  bit  or  group  of bits that specify a function or condition, as defined in the serializer  IC  data  sheet.  The  color  of  the  small  LED indicator  next  to  the Read / Write buttons  indicates  the communication status. Green indicates successful communication and red indicates failed communication.

## MAX9276 Des Tab

The MAX9276  Des tab  (Figure  5)  lists  the  deserializer registers' bitmaps. Read and Write buttons in each register  group  box  allow  access  to  each  bit  or  group  of bits that specify a function or condition, as defined in the deserializer  IC  data  sheet.  The  color  of  the  small  LED indicator  next  to  the Read / Write buttons  indicates  the communication status. Green indicates successful communication and red indicates failed communication.

## Additional Features Tab

The Additional Features tab  (Figure  6)  provides  pushbuttons for specific functions that the connected devices can perform. By pressing the buttons, a window will pop up that allows the specific function to be utilized/executed. Functions that are not supported by the selected devices are grayed out.

## Access EDID Table Contents Button

The Access  EDID  Table  Contents button  provides access  to  the EDID Table (Figure  7).  Use  this  table  to program/view/edit  the EDID  Table content.  The EDID Table can be uploaded from a valid existing file and the content  can  also  be  saved  to  a  file  (in  .csv  format)  for reference, or for use as a template.

## Access Lookup Table Button

The Access  Lookup  Table button  provides  access  to the Lookup Tables (LUT) of the deserializer (Figure 8). Use  this  window  to  program/view/edit  the  LUT  settings of  the  red,  green,  and  blue  colors  for  color  translation. LUT  content  edits  can  be  performed  on  the  entire  256 bytes of all three colors, on an individual color table, or individual pixels of any color table. The LUT' contents can be saved to a file (in .csv format) for reference or for use as a template. LUT contents can be uploaded from a valid existing file. A sample LUT content is included in the EV kit  software  package. This  window is functional only for DUTs that support color mapping.

## Show PRBS Test Button

By  pressing  the Start button  in  the  expanded  window shown in Figure 9, the serializer and deserializer registers are  programmed  per  defined  sequence  in  the  IC  data sheets to perform a pseudorandom bit sequence (PRBS) error-rate  test.  Enter  test  duration  (maximum  32,767s  = 9.1hrs) in the Duration edit box and press Start to begin the  test. At  test  completion,the  number  of  bit  errors  will be read from the PRBSERR register and displayed in the PRBS Error Counter box.

## Log\Low Level Tab

The Log\Low  Level tab  (Figure  10)  logs  all  activities between GUI and DUTs.

The Register  Access group  box  includes Read and Write buttons to specify the slave and register addresses. Use  the Send String  to  EVKIT button  for  communication with devices that are not register-based (such as the MAX7324). The SerDes Baud Rate drop-down list sets the  communications baud rate. Note that the baud rate should be changed in small increments/decrements (one step change at a time is recommended).

## HDCP Tab

The HDCP tab  (Figure  11)  displays  the  HDCP registers of both serializer and deserializer, listed side-by-side with Read and Write buttons for each register. Authenticate and Enable  Encryption pushbuttons  initiate  the  HDCP verification process. At the end of the operation, the color of the LED indicator next to the button indicates success or failure of the function. Note: This tab is only functional for DUTs that support the HDCP function.

Figure 4. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX9293 Ser Tab (Serializer))

<!-- image -->

Figure 5. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX9280/80A Des Tab (Deserializer))

<!-- image -->

Figure 6. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab)

<!-- image -->

Figure 7. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (EDID Table)

<!-- image -->

## Evaluates: MAX9291/MAX9293 MAX9291/MAX9293 Evaluation Kit

Figure 8. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Lookup Tables)

<!-- image -->

Figure 9. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab -Expanded for PRBS Test))

<!-- image -->

Figure 10. MAXSerDesEV-N EV KIT Software: Evaluation Kit Window (Log\Low Level Tab)

<!-- image -->

Figure 11. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (HDCP Tab)

<!-- image -->

## Detailed Description of Firmware

The  Nuvoton  microcontroller  (U12)  runs  a  custom  firm -ware  that  ensures  reliable  communication  between  the computer  and  DUTs.  The  firmware  records  9-bit  evenparity data received from the USB interface while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when  RTS  is  cleared.  Data  received  from  the  DUTs  is immediately relayed to the USB port.

## Detailed Description of Hardware

The MAX9291/MAX9293 coax EV kit provides a proven design  and  layout  for  the  MAX9291/MAX9293  GMSL serializers, designed for a standard HDMI connector input and  FAKRA  coaxial  cable  serialized  output.  On-board level translators and an easy-to-use USB-PC connection are included on the EV kit.

The  MAX9291/MAX9293 coax EV kit board  consists  of three principal functional blocks:

- 1) Power-supply block.
- 2) MAX9291/MAX9293 application circuit block.
- 3) Microcontrollers (U6-U10) block.

## On-Board Controller

The  microcontroller  on  the  EV  kit  board  provides  the UART and I 2 C interface (through U6 and U10) that will communicate with both serializer and deserializer boards when they are powered on and properly configured.

## Externally Applied Controller

To  use  the  EV  kit  with  an  externally  applied  controller, remove  shunts  from  the  JU5  header  and  connect  the TX/SCL signal from the external controller to the middle pin  of  the  JU5  header. Also  remove  the  shunt  from  the JU6  header  and  connect  the  RX/SDA  signal  from  the external  controller  to  the  middle  pin  of  the  JU6  header. Connect the logic level of the external controller (VDD) to the J12.1 pin (next to the SW122 switch), labeled VREF and connect the ground signal of the external controller to the GND pin on J12.3 labeled GND.

Refer to the serializer and deserializer IC data sheets for details on read/write data formats.

│

## MAX9291/MAX9293 Evaluation Kit

## Power Supplies

On-board  LDO  regulators  (U2,  U3,  and  U4)  generate all  internal  voltages  (AVDD,  DVDD,  IOVDD),  including voltage  levels  required  for  the  Toshiba  CSI-2-to-parallel bridge-chip board from a single power source applied to the  board. There  are  three  options  to  power  the  board: USB port (default), 12V AC adapter, or 5V power supply applied on the +5VIN terminals. Jumpers VDD and JU3 select between the three power sources.

## Evaluates: MAX9291/MAX9293

To test with  AVDD,  DVDD,  IOVDD  voltage  levels different  from  what  is  generated  on  the  board,  move the  corresponding  shunt  on  headers  AVDD18  (JU30), DVDD18 (JU31), RVDD18 (JU9), IOVDD (JU33), HVDD33 (JU32), PLLVDD33 (JU8), and XVDD (JU7) from pins 1-2 to pins 3-2 (next to the wire loop) and apply the external voltage to the corresponding wire-loop terminal.

Figure 12. MAX9291/MAX9293 Coax EV Kit (Serializer Jumper Settings for Coax Link and I 2 C Communication)

<!-- image -->

│

Figure 13. MAX9276A/MAX9280A Coax EV Kit (Deserializer Jumper Settings for Coax Link and I 2 C Communication)

<!-- image -->

│

## MAX9291/MAX9293 Evaluation Kit

## Troubleshooting

Possible causes of board test failure:

- Coax cable not properly connected between OUT+ of the serializer and IN+ of the deserializer.
- PCLKIN not applied (e.g., the FG output is disabled): Verify signal at the pins on the board.
- PCLKIN, function generator output not correct: Verify signal at the pins on the board.
- Incorrect jumper setting on deserializer board: Reverify.
- Incorrect  jumper  setting  on  the  Serializer  board: Reverify.
- Bus selection on GUI is not consistent with jumpers' position on the boards.

## Component Suppliers

| SUPPLIER                             | PHONE             | WEBSITE                 |
|--------------------------------------|-------------------|-------------------------|
| Amphenol RF                          | 800-627-7100      | www.amphenolrf.com      |
| Hong Kong X'tals Ltd.                | 852-35112388      | www.hongkongcrystal.com |
| Murata Americas                      | 770-436-1300      | www.murataamericas.com  |
| ON Semiconductor                     | 602-244-6600      | www.onsemi.com          |
| Rosenberger Hochfrequenztechnik GmbH | 011-49-86 84-18-0 | www.rosenberger.de      |
| TDK Corp.                            | 847-803-6100      | www.component.tdk.com   |

Note: Indicate that you are using the MAX9291 or MAX9293 when contacting these component suppliers.

## Component List, Schematics, and PCB Layout Diagrams

Clink on the links below for component list, schematics, and PCB layout diagrams:

MAX9291/MAX9293 EV Kit BOM

MAX9291/MAX9293 EV Kit Schematics

MAX9291/MAX9293 EV Kit PCB Layout

## Ordering Information

| PART               | TYPE        |
|--------------------|-------------|
| MAX9291 COAXEVKIT# | EV Kit      |
| MAX9293 COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#   | Adapter Kit |

# Denotes RoHS compliant.

Note: The MAX9291 and MAX9293 coax EV kits are normally ordered with a companion board:

-  MAX9276A coax EV kit (MAX9276ACOAXEVKIT#), or
-  MAX9280A coax EV kit (MAX9280ACOAXEVKIT#)
- Check  and  verify  that  the  USB  cable  has  properly been connected.
- USB port has locked up: Exit the application/GUI and remove the USB cable from the board and reinsert; re-launch the GUI.
- Nuvoton μC is not communicating: Exit the applica -tion/GUI and remove the USB cable from the board and reinsert; then relaunch the GUI.
- Deserializer board is faulty: Try a different board (if available).
- Serializer  board  is  faulty:  Try  a  different  board  (if available).
- HDMI  source  does  not  detect  the  EV  kit  board: Verify that source is powered on and source output is enabled and outputting a signal.

## Evaluates: MAX9291/MAX9293

│

## MAX9291/MAX9293 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses arH iPSOiHG  MaxiP IQtHJratHG rHVHrYHV tKH riJKt to cKaQJH tKH circXitr\ aQG VSHci¿catioQV ZitKoXt QoticH at aQ\ tiPH

│

Evaluates: MAX9291/MAX9293

| MAX9291COAXEVKIT# : Rev B 3/30/2015   |     |                                                                                                  |                                |
|---------------------------------------|-----|--------------------------------------------------------------------------------------------------|--------------------------------|
| Component                             | QTY | Remarks                                                                                          | Manufacturer                   |
| Description                           | Per |                                                                                                  | Part Number                    |
| CAP0603                               | 0   | C12                                                                                              |                                |
| TPSV108M006R0040,1000uF               | 1   | C38                                                                                              | TPSV108M006R0040               |
| CAP-CERAMIC-0.1UF-0603,0.1uF          | 23  | C1, C3, C5, C8, C10, C23, C25, C47, C59, C101-C104, C108, C110, C114, C117, C120-C121, C131-C132 | GRM188R71H104KA93D             |
| CAP-CERAMIC-0.22UF-0603,0.22uF        | 1   | C13                                                                                              | GRM188R71E224KA88D             |
| CAP-CERAMIC-0.22UF-0805,0.22uF        | 2   | C61, C63                                                                                         | MURATA GRM21BR71H224K          |
| CAP-CERAMIC-1000PF-0603,0.001uF       | 14  | C24, C27, C30, C33, C37, C65, C72-C79                                                            |                                |
| CAP-CERAMIC-10UF-0603,10uF            | 7   | C4, C9, C18, C20-C21, C118, C133                                                                 | Murata GRM188R60J106M          |
| CAP-CERAMIC-10UF-1206,10uF            | 4   | C2, C7 ,C34, C109                                                                                | C3216X7R1C106M160AC            |
| CAP-CERAMIC-22PF-0603,22pF            | 6   | C6, C11, C106-C107, C122-C123                                                                    | C1608C0G1H220J080AA            |
| CAP-CERAMIC-3.3UF-0402,3.3uF          | 7   | C29, C32, C36, C42-C43, C53 C64                                                                  | 587-2236-1-ND                  |
| CAP-CERAMIC-4.7UF-0603,4.7uF          | 20  | C16, C19, C40-C41, C44, C55-C58, C66-C71, C80-C82, C115-C116                                     | ECJ-1VB0J475K                  |
| CAP-TACL105K006R,1uF                  | 1   | C17                                                                                              | TACL105K006R                   |
| CAP-TANT-10UF-1210,10uF               | 1   | C96                                                                                              | Murata GRM32DC81E106KA12L      |
| CAP0402-0.1UF,0.1uF                   | 14  | C22, C26, C28, C31, C35, C45-C46, C48-C52, C54, C62                                              | PCC2146TR-ND                   |
| CONN-FAKRA-MALE                       | 2   | OUT+, OUT-                                                                                       | PE44651Z                       |
| CONN-HDMI-47151-0001                  | 1   | J1                                                                                               | 47151-0001                     |
| CONN-HDMI-47151-0001                  | 2   | J3,J14                                                                                           | 47151-0001                     |
| CONN_USB-MINI-1734035-1               | 1   | J10                                                                                              | 1734035-1                      |
| FERRITE-FILTER-CHIP-120-OHM-3A-0603   | 12  | FB1-FB11, FB13                                                                                   | BLM18SG121TN1                  |
| JUMPER4                               | 2   | J9 ,J12                                                                                          | Molex 22-28-4363               |
| IND-4242,330nH                        | 1   | L1                                                                                               | MCFT000154                     |
| IND-POWER,6.8uH                       | 1   | L2                                                                                               | LBC3225T6R8MR                  |
| IND-POWER,100uH                       | 1   | L3                                                                                               | LQH6PPN101M43                  |
| JUMPER2                               | 13  | J2-J6, J8, J11, J13, J16-J19, J21                                                                | Molex 22-28-4363               |
| JUMPER3                               | 22  | JU1-JU2, JU4-JU9, JU18-JU20, JU22-JU28, JU30-JU32, JU34                                          | Molex 22-28-4363               |
| JUMPER3                               | 0   | JU_USR1-JU_USR3                                                                                  | Molex 22-28-4363               |
| JUMPER-4WAY                           | 2   | , JU3, JU33                                                                                      | Molex 22-28-4363               |
| LED-GREEN-0805,GREEN                  | 1   | LED_HPD                                                                                          | SML-210MTT86                   |
| LED-RED-0805                          | 5   | LED_GOP, LED_INTOUT, LED_LFLT, LED_PWR, LED_UC                                                   | SML-210VTT86                   |
| N-Channel MOSFET, SOT-23-GDS          | 3   | Q1-3                                                                                             | BSN20-7                        |
| MAX1792EUA33+                         | 3   | U2-U4                                                                                            | MAX1792EUA33                   |
| NUC140_LQFP_100,NUC140VE3CN           | 1   | U6                                                                                               | NUC140VE3CN                    |
| POWER_JACK-PJ-002AH                   | 1   | J7                                                                                               | PJ-002AH                       |
| MAX3378EEUD+                          | 1   | U8                                                                                               | MAX3378EEUD+                   |
| MAX9291GTN+                           | 1   | U9                                                                                               | MAX9291GTN+                    |
| MAX9291GTN/V+                         | 1   | U9                                                                                               | MAX9291GTN/V+                  |
| FT232BL                               | 1   | U10                                                                                              | FT232BL                        |
| LM317MP                               | 1   | U36                                                                                              | LM317KTTR                      |
| MAXIMPAD RES0603,2K                   | 9 3 | +5VIN, AVDD_EXT, DVDD_EXT, HVDD_EXT, IOVDD_EXT, PLLVDD_EXT, RVDD_EXT, XVDD_EXT, GND              | 297 SV005                      |
|                                       |     | R9, R11, R30 R3, R10, R14, R18, R24,                                                             | ANY                            |
| RES-1K-0603,1K                        | 18  | R31-R32, R36, R39, R41, R49, R54, R58, R62-R64, R69, R77                                         | CR0603-FX-1001ELF              |
| RES0603,1M                            | 1   | R8                                                                                               | CR0603-JW-105GLFCT-ND          |
| RES0603,240 RES0603,31.6K             | 1   | R94                                                                                              | CR0603-FX-2400ELF P31.6KHCT-ND |
|                                       | 1   |                                                                                                  |                                |
| RES0603,40.2K                         | 1   | R1 R6                                                                                            | P40.2KHCT-ND                   |
| RES0603,47K                           | 3   | R95                                                                                              | P47KGTR-ND                     |
| RES0603,715 RES0603,909               | 1   | R20, R33-R34                                                                                     | CRCW0603715RFKEB P909HCT-ND    |
|                                       | 1   | R29                                                                                              |                                |

| RES-11K-OHM-1/10W-5%-0603-SMD,11K   |   1 | R23                                                                                     | ANY              |
|-------------------------------------|-----|-----------------------------------------------------------------------------------------|------------------|
| RES-1.5K-OHM-1/10W-5%-0603-SMD,1.5K |   1 | R103                                                                                    | ERJ-3GEYJ152V    |
| RES-10K-OHM-1/10W-5%-0603-SMD,10K   |   6 | R4, R12, R61, R66, R108, R112                                                           | ERJ-3GEYJ103V    |
| RES-24K9-0603,24K9                  |   3 | R2, R85, R93                                                                            | CRCW060324K9FKEA |
| RES-24K9-0603,24K9                  |   1 | R59                                                                                     | CRCW060324K9FKEA |
| RES-27-OHM-0603,27                  |   6 | R5, R22, R37-R38, R101-R102                                                             | ERJ-3GEYJ270V    |
| RES-0-OHM-0603,DNP                  |   0 | R7                                                                                      | DNP              |
| RES-30K1-0603,30K1,1%               |   3 | R13, R28, R35                                                                           | ERJ-3EKF3012V    |
| RES-4.7K-OHM-1/10W-5%-0603-SMD,4K7  |   1 | R17                                                                                     | ERJ-3GEYJ472V    |
| RES-41K2-0603,41k2                  |   1 | R16                                                                                     | CRCW060341K2FKEA |
| RES-470-OHM-0603,470                |   1 | R104                                                                                    | ERJ-3GEYJ471V    |
| RES-49K9-0603,4.99K,1%              |   2 | R21, R27                                                                                | ERJ-3EKF4991V    |
| RES0603/30K,30K,0.1%                |   1 | R25                                                                                     | TNPW060330K0BEEA |
| RES0603/45K3,45K3,0.1%              |   2 | R26, R40                                                                                | ERJ-3EKF4532V    |
| RES0603/49K9,49K9,0.1%              |   2 | R15 ,R19                                                                                | TNPW060349K9BEEA |
| SMA_EDGE connector                  |   1 | J-CN                                                                                    | 142-0701-801     |
| SW-EVQ-PAD09K                       |   1 | SW122                                                                                   | EVQ-PAD09K       |
| TESTPOINT-PC5010 (red)              |  10 | TP_GPO, TP_HPD, TP_INTOUT, TP_J1CEC, TP_J1HPD, TP_LFLT, TP_RSVD32, TP_SCK, TP_SD, TP_WS | 5000K-ND         |
| XOR                                 |   4 | U7, U22, U25-U26                                                                        | 74LVC1G86GW      |
| XTAL-FQ1045A-6,6MHZ                 |   1 | Y1                                                                                      | FQ1045A-6        |
| XTAL-HC-49US,12MHZ                  |   1 | Y2                                                                                      | 300-8548-2-ND    |
| XTAL-HC-49US,27MHZ                  |   1 | Y3                                                                                      | 300-8571-1-ND    |
| MAX9291/93 COAX PCB                 |   1 | PCB                                                                                     |                  |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

EDGE OF PCB

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

1.0"

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

LAYER

DATE:

## MAX9291/93 EV\KIT

<!-- image -->

LAYER 3 PWR

ALL UNITS ARE IN 0.001"

<!-- image -->

<!-- image -->

REV B

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